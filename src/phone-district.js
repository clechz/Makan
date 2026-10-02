import * as T from 'three';
import layout from './district-layout.json';
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js';
import {MeshoptDecoder} from 'three/addons/libs/meshopt_decoder.module.js';

const host=document.querySelector('#mp-district');
const mobile=matchMedia('(max-width: 767px)'), reduced=matchMedia('(prefers-reduced-motion: reduce)');
const base=new URL('./town/',import.meta.url);
if(host){
 let started=false;
 const start=()=>{if(started||!mobile.matches)return;started=true;createScene().catch(e=>{host.dataset.ready='fallback';const label=host.querySelector('.mp-district-status');label.dataset.i18n='phone.3d.still';label.textContent=window.MakanI18n?.t('phone.3d.still')||'Still survey preview';console.warn('Scan preview unavailable:',e.message);});};
 const near=new IntersectionObserver(entries=>{if(entries[0].isIntersecting)start();},{rootMargin:'900px'});near.observe(host);
 mobile.addEventListener('change',()=>{if(host.getBoundingClientRect().top<innerHeight+150)start();});
}
async function createScene(){
 const renderer=new T.WebGLRenderer({alpha:true,antialias:true,powerPreference:'low-power'});
 renderer.setPixelRatio(Math.min(devicePixelRatio,1.5));renderer.outputColorSpace=T.SRGBColorSpace;renderer.setClearColor(0,0);
 const loader=new GLTFLoader().setMeshoptDecoder(MeshoptDecoder);
 const startedAt=performance.now();
 const [gltf,map]=await Promise.all([loader.loadAsync(new URL('scene.glb',base).href),new T.TextureLoader().loadAsync(new URL('color-preview.webp',base).href)]);
 map.flipY=true;map.colorSpace=T.SRGBColorSpace;map.anisotropy=Math.min(4,renderer.capabilities.getMaxAnisotropy());
 const scene=new T.Scene(), district=new T.Group();scene.add(district);
 const terrain=gltf.scene;district.add(terrain);terrain.updateMatrixWorld(true);
 let surface;
 terrain.traverse(o=>{if(o.isMesh){o.material=new T.MeshBasicMaterial({map});surface=o;}});
 // Ready-made overlays load after the scan is interactive; no image analysis on phones.
 const overlays=new T.Group(),layerGroup=new T.Group(),shiftGroup=new T.Group();district.add(overlays,layerGroup,shiftGroup);
 const layerObjects=Object.fromEntries(['buildings','green','trees','streets','power'].map(key=>[key,new T.Group()]));
 Object.values(layerObjects).forEach(group=>layerGroup.add(group));
 const construction=new T.Group(),poolChange=new T.Group(),canopyLoss=new T.Group(),roadChange=new T.Group();shiftGroup.add(construction,poolChange,canopyLoss,roadChange);
 const agentTargets=Object.fromEntries(['retail','access','investment','cars'].map(key=>[key,new T.Group()]));Object.values(agentTargets).forEach(group=>district.add(group));
 const overlayTargets={overlays,...layerObjects,construction,poolChange,canopyLoss,roadChange,...agentTargets};
 const camera=new T.PerspectiveCamera(38,1,.1,100);
 const focusPoint=new T.Vector3(),targetFocus=new T.Vector3();let userCamera=false;
 host.prepend(renderer.domElement);renderer.domElement.setAttribute('aria-hidden','true');
 const status=host.querySelector('.mp-district-status'),time=host.parentElement.querySelector('.mp-district-time');time.hidden=true;
 host.querySelector('.mp-district-reset')?.remove();
 const agentChat=document.createElement('div');agentChat.className='mp-agent-chat';agentChat.hidden=true;
 agentChat.innerHTML='<div class="mp-agent-chat-label"></div><div class="mp-agent-question"></div><div class="mp-agent-answer"><strong>Makan</strong><p></p><small class="mp-agent-evidence"></small></div>';
 host.append(agentChat);
 const benefit=document.createElement('div');benefit.className='mp-scene-benefit';benefit.hidden=true;host.append(benefit);
 const benefits={
   2:[['Layers connected','Buildings, roads & greenery.'],['الصورة كاملة','مباني، طرق ومساحات خضراء.']],
   3:[['Discovery alerts','New signals, sent to you.'],['اكتشافات توصلك','الجديد في موقعك، أول بأول.']],
   4:[['Change updates','See what changed at your site.'],['تابع التغيّر','اعرف وش تغيّر في موقعك.']]
 };
 function updateBenefit(){const copy=benefits[mode]?.[document.documentElement.lang==='ar'?1:0];benefit.hidden=!copy;if(copy){benefit.replaceChildren();const icon=document.createElement('span');icon.className='mp-benefit-icon';icon.innerHTML=mode===3?'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M10 21h4"/></svg>':mode===2?'▱':'↗';icon.setAttribute('aria-hidden','true');const text=document.createElement('div'),title=document.createElement('strong'),detail=document.createElement('p');title.textContent=copy[0];detail.textContent=copy[1];text.append(title,detail);benefit.append(icon,text);}}

 const agentExamples=[
  {q:['Where should I open a supermarket?','وين أفتح سوبرماركت؟'],a:['Corner property · road access.','عقار الزاوية · وصول أسهل.'],focus:'retail'},
  {q:['What could obstruct access?','فيه عوائق بالطريق؟'],a:['Parked cars near the turn · check clearance.','نقطتا اختناق · راجع الطريق.'],focus:'access'},
  {q:['Which home is the best investment?','أي بيت أفضل للاستثمار؟'],a:['This home · access + greenery.','هذا البيت · موقع وخضرة.'],focus:'investment'},
  {q:['How many cars can you identify?','كم سيارة في الحي؟'],a:['31 visible cars marked.','24 سيارة · 4 مقاطع طرق.'],focus:'cars'}
 ];
 let agentExample=0,agentTimer=0,agentTyping=0;
 function stopAgent(){clearTimeout(agentTimer);clearTimeout(agentTyping);agentChat.classList.remove('is-typing');}
 function focusAgent(show){
   const focus=agentExamples[agentExample].focus;
   host.dataset.agentFocus=show?focus:'pending';
   const target=agentTargets[focus];
   if(!userCamera){
     targetFocus.set(0,0,0);
     if(show&&target.children.some(child=>child.children.length)){
       // Local bounds keep framing independent of the current user rotation.
       target.updateWorldMatrix(true,true);
       const bounds=new T.Box3().setFromObject(target),center=bounds.getCenter(new T.Vector3());
       district.worldToLocal(center);targetFocus.set(center.x*.45,0,center.z*.45);
     }
   }
   transitionStart=performance.now();
   fades.forEach(f=>{f.target=show&&f.group===target?1:0;f.delay=0;});
   requestRender();
 }
 function updateAgent(animate=false){
   stopAgent();const lang=document.documentElement.lang==='ar'?1:0,example=agentExamples[agentExample],q=agentChat.querySelector('.mp-agent-question'),a=agentChat.querySelector('.mp-agent-answer p');
   agentChat.querySelector('.mp-agent-answer strong').textContent=lang?'مكان':'Makan';
   agentChat.setAttribute('aria-label',lang?'محادثة توضيحية ببيانات تجريبية':'Illustrative conversation with example data');
   q.setAttribute('aria-label',example.q[lang]);a.setAttribute('aria-label',example.a[lang]);
   focusAgent(!animate);
   if(animate&&!reduced.matches){q.textContent='';a.textContent='';agentChat.classList.add('is-typing');let at=0;const question=example.q[lang],answer=example.a[lang];
     const type=()=>{at++;q.textContent=question.slice(0,at);a.textContent=answer.slice(0,Math.max(0,at-question.length-4));if(at===question.length+5)focusAgent(true);if(at<question.length+answer.length+4)agentTyping=setTimeout(type,28);else{agentChat.classList.remove('is-typing');agentTimer=setTimeout(()=>{agentExample=(agentExample+1)%agentExamples.length;runAgent();},11000);}};type();
   }else{q.textContent=example.q[lang];a.textContent=example.a[lang];}
 }
 function runAgent(){stopAgent();if(mode!==1||!visible||document.hidden||!mobile.matches)return;updateAgent(!reduced.matches);}
 let zoom=1,targetZoom=1;
 let mode=0,rotation=-.14,targetRotation=-.14,frame=0,visible=false,last=0,transitionStart=0;
 const descriptions=[['A place, ready to understand','كل مكان له قصة'],['Ask the map. Follow the evidence.','اسأل مكان. وشوف الدليل.'],['Buildings · greenery · streets · utilities','المباني · الخضرة · الشوارع · المرافق'],['Discoveries follow the actual roofs','الاكتشافات تتبع الأسطح الحقيقية'],['Building extension · pool · tree cover','توسّع مبنى · مسبح · أشجار']];
 const groups=[...Object.values(layerObjects),overlays,construction,poolChange,canopyLoss,roadChange,...Object.values(agentTargets)];
 const fades=groups.map(group=>{const materials=[];group.traverse(o=>{if(o.material){o.material.transparent=true;materials.push({material:o.material,opacity:o.material.opacity});}});return {group,materials,value:0,target:0,delay:0};});
 layerGroup.visible=true;shiftGroup.visible=true;
 function updateText(){updateBenefit();delete status.dataset.i18n;status.textContent=descriptions[mode][document.documentElement.lang==='ar'?1:0];}
 function select(next){userCamera=false;targetFocus.set(0,0,0);mode=next;agentChat.hidden=mode!==1;transitionStart=performance.now();host.dataset.mode=String(mode);host.parentElement.dataset.scene=String(mode);
   fades.forEach(f=>{const layerIndex=Object.values(layerObjects).indexOf(f.group);f.target=mode===2&&layerIndex>=0?1:(mode===3&&f.group===overlays?1:(mode===4&&[construction,poolChange,canopyLoss].includes(f.group)?1:0));f.delay=mode===2&&layerIndex>=0?layerIndex*110:0;if(mode===2&&layerIndex>=0)f.value=0;});runAgent();updateText();resize();
 }
 // Fit the entire rotated survey tightly inside the phone, with room for captions.
 // Use the scan's own perimeter rather than empty bounding-box corners.
 const corners=layout.corners.map(p=>new T.Vector3(...p));
 function fitCamera(){const w=host.clientWidth,h=host.clientHeight;if(!w||!h)return;camera.aspect=w/h;camera.updateProjectionMatrix();
   const aim=focusPoint.clone().applyAxisAngle(new T.Vector3(0,1,0),rotation);aim.y=.12;
   let low=5,high=70;const rotated=corners.map(p=>p.clone().applyAxisAngle(new T.Vector3(0,1,0),rotation));
   for(let i=0;i<13;i++){const distance=(low+high)/2;camera.position.set(aim.x,distance*.52,aim.z+distance*.854);camera.lookAt(aim);camera.updateMatrixWorld();const fits=rotated.every(p=>{const v=p.clone().project(camera);return Math.abs(v.x)<.955&&Math.abs(v.y)<.72;});if(fits)high=distance;else low=distance;}
   camera.position.set(aim.x,high*.52/zoom,aim.z+high*.854/zoom);camera.lookAt(aim);camera.updateMatrixWorld();
 }
 function draw(now){frame=0;if(!visible||document.hidden||!mobile.matches)return;const dt=Math.min((now-last)/1000||.016,.05);last=now;const ease=reduced.matches?1:1-Math.exp(-dt*9);rotation+=(targetRotation-rotation)*ease;district.rotation.y=rotation;zoom+=(targetZoom-zoom)*ease;let changing=Math.abs(targetRotation-rotation)>.001||Math.abs(targetZoom-zoom)>.001;
   focusPoint.lerp(targetFocus,reduced.matches?1:1-Math.exp(-dt*3.5));changing ||= focusPoint.distanceToSquared(targetFocus)>.000001;
   fades.forEach(f=>{const target=!reduced.matches&&now-transitionStart<f.delay?0:f.target;f.value+=(target-f.value)*ease;f.group.visible=f.value>.003;f.materials.forEach(({material,opacity})=>material.opacity=opacity*f.value);changing ||= Math.abs(f.target-f.value)>.003;});fitCamera();renderer.render(scene,camera);if(changing)requestRender();
 }
 function requestRender(){if(!frame&&visible&&!document.hidden&&mobile.matches)frame=requestAnimationFrame(draw);}
 function resize(){const w=host.clientWidth,h=host.clientHeight;if(w&&h){renderer.setSize(w,h,false);fitCamera();requestRender();}}
 document.querySelectorAll('[data-scene-select]').forEach(b=>b.addEventListener('click',()=>select(Number(b.dataset.sceneSelect))));
 // Keep one-finger page scrolling; two fingers zoom the scan, not the page.
 let pointer=null,pinch=null;
 const clampZoom=value=>Math.max(1,Math.min(2.8,value));
 function setZoom(value){userCamera=true;targetFocus.copy(focusPoint);targetZoom=clampZoom(value);requestRender();}
 const touchDistance=touches=>Math.hypot(touches[0].clientX-touches[1].clientX,touches[0].clientY-touches[1].clientY);
 host.addEventListener('wheel',e=>{
   // Ordinary scrolling must leave this section; zoom only with Ctrl / pinch.
   if(!mobile.matches||!visible||!e.ctrlKey)return;
   const pixels=e.deltaY*(e.deltaMode===1?16:e.deltaMode===2?host.clientHeight:1);
   const next=clampZoom(targetZoom*Math.exp(-pixels*.0015));
   if(next===targetZoom)return;
   e.preventDefault();setZoom(next);
 },{passive:false});
 host.addEventListener('touchstart',e=>{
   if(e.touches.length!==2)return;
   pointer=null;pinch={distance:Math.max(1,touchDistance(e.touches)),zoom:targetZoom};
   e.preventDefault();
 },{passive:false});
 host.addEventListener('touchmove',e=>{
   if(!pinch||e.touches.length!==2)return;
   e.preventDefault();setZoom(pinch.zoom*touchDistance(e.touches)/pinch.distance);
 },{passive:false});
 ['touchend','touchcancel'].forEach(type=>host.addEventListener(type,()=>{pinch=null;pointer=null;},{passive:true}));
 host.setAttribute('tabindex','0');
 host.setAttribute('aria-label','Interactive 3D scan. Pinch or Ctrl-scroll to zoom. Drag sideways to rotate. Keyboard: plus or minus to zoom, zero to reset, arrow keys to rotate.');
 host.addEventListener('pointerdown',e=>{if(pinch||!e.isPrimary||e.target.closest('button'))return;pointer={x:e.clientX,y:e.clientY,rotation:targetRotation};});
 host.addEventListener('pointermove',e=>{if(!pointer||pinch)return;if(Math.abs(e.clientY-pointer.y)>Math.abs(e.clientX-pointer.x)+8){pointer=null;return;}userCamera=true;targetFocus.copy(focusPoint);targetRotation=Math.max(-.8,Math.min(.8,pointer.rotation+(e.clientX-pointer.x)*.005));requestRender();});
 ['pointerup','pointercancel','pointerleave'].forEach(k=>host.addEventListener(k,()=>pointer=null));
 host.addEventListener('keydown',e=>{if(['+','=','-','0'].includes(e.key)){e.preventDefault();setZoom(e.key==='0'?1:targetZoom*(e.key==='-'?1/1.2:1.2));return;}if(['ArrowLeft','ArrowRight'].includes(e.key)){e.preventDefault();targetRotation=Math.max(-.8,Math.min(.8,targetRotation+(e.key==='ArrowLeft'?-.15:.15)));requestRender();}});
 new ResizeObserver(resize).observe(host);
 new IntersectionObserver(entries=>{visible=entries[0].isIntersecting;if(!visible){cancelAnimationFrame(frame);frame=0;}else requestRender();runAgent();},{threshold:.2}).observe(host);
 document.addEventListener('visibilitychange',()=>{if(document.hidden){cancelAnimationFrame(frame);frame=0;}else requestRender();runAgent();});mobile.addEventListener('change',()=>{requestRender();runAgent();});
 reduced.addEventListener('change',()=>{updateText();runAgent();requestRender();});document.addEventListener('makan:lang-changed',()=>{updateText();runAgent();});
 renderer.domElement.addEventListener('webglcontextlost',e=>{e.preventDefault();cancelAnimationFrame(frame);frame=0;stopAgent();host.dataset.ready='fallback';});
 select(Number(host.parentElement.dataset.scene||1));resize();
 // Paint a complete frame before crossfading away from the static scan.
 renderer.render(scene,camera);host.dataset.ready='true';host.dataset.startupMs=String(Math.round(performance.now()-startedAt));
 // Fetch only after controls are attached and the first real frame is visible.
 requestAnimationFrame(()=>{new T.TextureLoader().load(new URL('color-phone.webp',base).href,detail=>{detail.flipY=true;detail.colorSpace=T.SRGBColorSpace;detail.anisotropy=map.anisotropy;terrain.traverse(o=>{if(o.isMesh){o.material.map=detail;o.material.needsUpdate=true;}});map.dispose();requestRender();},undefined,()=>{});});
 requestAnimationFrame(()=>loadOverlays().catch(error=>{host.dataset.overlays='fallback';console.warn('Scene overlays unavailable:',host.dataset.overlayStage,error.message);}));
 async function loadOverlays(){
   host.dataset.overlayStage='manifest';const response=await fetch(new URL('overlays.json',base));if(!response.ok)throw new Error('Overlay manifest unavailable');
   const data=await response.json();

   host.dataset.overlayStage='geometry';const binaryResponse=await fetch(new URL(data.compressedBuffer,base));if(!binaryResponse.ok)throw new Error('Overlay geometry unavailable');
   host.dataset.overlayStage='decode';const packed=new Uint8Array(await binaryResponse.arrayBuffer());await MeshoptDecoder.ready;
   const decoded=new Uint8Array(data.byteLength);MeshoptDecoder.decodeGltfBuffer(decoded,data.byteLength/data.stride,data.stride,packed,'ATTRIBUTES');const buffer=decoded.buffer;
   const types={Float32Array,Uint32Array,Uint16Array,Uint8Array,Int16Array,Int32Array};
   for(const geometry of data.scene.geometries){if(!geometry.data)continue;
     for(const attr of Object.values(geometry.data.attributes||{}).concat(geometry.data.index?[geometry.data.index]:[])){
       if(attr.byteOffset===undefined)continue;
       attr.array=new types[attr.type](buffer,attr.byteOffset,attr.length);
       delete attr.byteOffset;delete attr.length;
     }
   }
   host.dataset.overlayStage='parse';const baked=new T.ObjectLoader().parse(data.scene);
   for(const [name,target] of Object.entries(overlayTargets)){
     const group=baked.getObjectByName(name);if(group)target.add(group);
   }
   fades.forEach(f=>{f.materials.length=0;f.group.traverse(o=>{if(o.material){o.material.transparent=true;f.materials.push({material:o.material,opacity:o.material.opacity});}});});
   host.dataset.overlays='ready';select(mode);requestRender();
 }

}

