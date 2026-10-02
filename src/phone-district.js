import * as T from 'three';
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js';
import {MeshoptDecoder} from 'three/addons/libs/meshopt_decoder.module.js';

const host=document.querySelector('#mp-district');
const mobile=matchMedia('(max-width: 767px)'), reduced=matchMedia('(prefers-reduced-motion: reduce)');
const base=new URL('./town/',import.meta.url);
// These manually traced roof plans are illustrative overlays, not live detections.
const plans=[
 [[719,262],[747,262],[747,283],[783,283],[783,262],[813,262],[813,313],[719,313]],
 [[831,262],[858,262],[858,283],[890,283],[890,262],[929,262],[929,313],[831,313]],
 [[949,261],[977,261],[977,284],[1017,284],[1017,260],[1047,260],[1047,314],[949,314]]
].map(poly=>poly.map(([x,z])=>[(x-960)/85,(z-467.5)/85]));
if(host){
 let started=false;
 const start=()=>{if(started||!mobile.matches)return;started=true;createScene().catch(e=>{host.dataset.ready='fallback';const label=host.querySelector('.mp-district-status');label.dataset.i18n='phone.3d.still';label.textContent=window.MakanI18n?.t('phone.3d.still')||'Still survey preview';console.warn('Scan preview unavailable:',e.message);});};
 const near=new IntersectionObserver(entries=>{if(entries[0].isIntersecting)start();},{rootMargin:'150px'});near.observe(host);
 mobile.addEventListener('change',()=>{if(host.getBoundingClientRect().top<innerHeight+150)start();});
}
async function createScene(){
 const renderer=new T.WebGLRenderer({alpha:true,antialias:true,powerPreference:'low-power'});
 renderer.setPixelRatio(Math.min(devicePixelRatio,1.5));renderer.outputColorSpace=T.SRGBColorSpace;renderer.setClearColor(0,0);
 const loader=new GLTFLoader().setMeshoptDecoder(MeshoptDecoder);
 const lowMemory=navigator.connection?.saveData||navigator.deviceMemory&&navigator.deviceMemory<=4;
 const [gltf,map]=await Promise.all([loader.loadAsync(new URL('scene.glb',base).href),new T.TextureLoader().loadAsync(new URL(lowMemory?'color-phone.webp':'color.webp',base).href)]);
 map.flipY=true;map.colorSpace=T.SRGBColorSpace;map.anisotropy=Math.min(4,renderer.capabilities.getMaxAnisotropy());
 const scene=new T.Scene(), district=new T.Group();scene.add(district);
 const terrain=gltf.scene;district.add(terrain);terrain.updateMatrixWorld(true);
 let surface;
 terrain.traverse(o=>{if(o.isMesh){o.material=new T.MeshBasicMaterial({map});surface=o;}});
 // Bake quantization transforms into a separate geometry for exact overlay alignment.
 const raw=surface.geometry.attributes.position, floats=new Float32Array(raw.count*3);
 for(let i=0;i<raw.count;i++){floats[i*3]=raw.getX(i);floats[i*3+1]=raw.getY(i);floats[i*3+2]=raw.getZ(i);}
 const geometry=new T.BufferGeometry();geometry.setAttribute('position',new T.BufferAttribute(floats,3));geometry.setIndex(surface.geometry.index.clone());geometry.applyMatrix4(surface.matrixWorld);
 const positions=geometry.attributes.position, indices=geometry.index;
 const ray=new T.Raycaster();
 function height(x,z){ray.set(new T.Vector3(x,3,z),new T.Vector3(0,-1,0));return ray.intersectObject(terrain,true)[0]?.point.y||.04;}
 function inside(x,z,p){let yes=false;for(let i=0,j=p.length-1;i<p.length;j=i++){if((p[i][1]>z)!==(p[j][1]>z)&&x<(p[j][0]-p[i][0])*(z-p[i][1])/(p[j][1]-p[i][1])+p[i][0])yes=!yes;}return yes;}
 const overlays=new T.Group(), layerGroup=new T.Group(), shiftGroup=new T.Group();district.add(overlays,layerGroup,shiftGroup);
 plans.forEach((plan,n)=>{
   const coords=[];
   for(let i=0;i<indices.count;i+=3){const ids=[indices.getX(i),indices.getX(i+1),indices.getX(i+2)];const x=ids.reduce((s,k)=>s+positions.getX(k),0)/3,z=ids.reduce((s,k)=>s+positions.getZ(k),0)/3;
     if(inside(x,z,plan))ids.forEach(k=>coords.push(positions.getX(k),positions.getY(k)+.012,positions.getZ(k)));
   }
   const roofGeo=new T.BufferGeometry();roofGeo.setAttribute('position',new T.Float32BufferAttribute(coords,3));
   const roof=new T.Mesh(roofGeo,new T.MeshBasicMaterial({color:0x56e9ef,transparent:true,opacity:.30,depthWrite:false,side:T.DoubleSide}));overlays.add(roof);
   const points=[];plan.forEach(([x,z],i)=>{const b=plan[(i+1)%plan.length];for(let j=0;j<8;j++){const px=x+(b[0]-x)*j/8,pz=z+(b[1]-z)*j/8;points.push(new T.Vector3(px,height(px,pz)+.03,pz));}});
   const line=new T.LineLoop(new T.BufferGeometry().setFromPoints(points),new T.LineBasicMaterial({color:0xb3ffff}));overlays.add(line);

 });
 // Neighborhood-wide illustrative layers follow the scan surface.
 layerGroup.clear();
 const categories={buildings:{color:0x73ddff,points:[]},green:{color:0xb1ee70,points:[]},trees:{color:0x21dcad,points:[]}};
 const atlas=document.createElement('canvas');atlas.width=map.image.width;atlas.height=map.image.height;
 const atlasContext=atlas.getContext('2d',{willReadFrequently:true});atlasContext.drawImage(map.image,0,0);
 const pixels=atlasContext.getImageData(0,0,atlas.width,atlas.height).data,uv=surface.geometry.attributes.uv;
 for(let i=0;i<indices.count;i+=3){
   const ids=[indices.getX(i),indices.getX(i+1),indices.getX(i+2)];
   const u=ids.reduce((n,k)=>n+uv.getX(k),0)/3,v=ids.reduce((n,k)=>n+uv.getY(k),0)/3;
   const px=Math.max(0,Math.min(atlas.width-1,Math.floor(u*atlas.width))),py=Math.max(0,Math.min(atlas.height-1,Math.floor((1-v)*atlas.height)));
   const at=(py*atlas.width+px)*4,r=pixels[at],g=pixels[at+1],b=pixels[at+2];
   const h=ids.reduce((n,k)=>n+positions.getY(k),0)/3;
   let type=null;
   if(g>r*1.05&&g>b*1.12&&g>35)type=h>.24?'trees':'green';
   else if(r>g*1.22&&r>b*1.24&&r>85)type='buildings';
   if(type)ids.forEach(k=>categories[type].points.push(positions.getX(k),positions.getY(k)+.018,positions.getZ(k)));
 }
 const layerObjects={};
 Object.entries(categories).forEach(([name,{color,points}])=>{
   const geo=new T.BufferGeometry();geo.setAttribute('position',new T.Float32BufferAttribute(points,3));
   const mesh=new T.Mesh(geo,new T.MeshBasicMaterial({color,transparent:true,opacity:.52,depthWrite:false,side:T.DoubleSide}));layerGroup.add(mesh);layerObjects[name]=mesh;
 });
 const streetPlans=[[[690,110],[691,324],[703,352],[704,529],[708,640],[694,700],[692,825]],[[692,344],[871,340],[1039,341],[1148,340]],[[1146,163],[1148,312],[1152,424],[1152,583],[1156,781]],[[703,544],[747,596],[810,650],[879,685],[1005,706],[1139,709]],[[560,784],[700,790],[889,798],[1120,794],[1350,788]]];
 const streetGroup=new T.Group(),powerGroup=new T.Group();layerGroup.add(streetGroup,powerGroup);layerObjects.streets=streetGroup;layerObjects.power=powerGroup;
 streetPlans.forEach(plan=>{
   const points=[];plan.forEach(([px,py],i)=>{if(!i)return;const prev=plan[i-1];const distance=Math.hypot(px-prev[0],py-prev[1]);const steps=Math.ceil(distance/14);
     for(let j=0;j<=steps;j++){const x=(prev[0]+(px-prev[0])*j/steps-960)/85,z=(prev[1]+(py-prev[1])*j/steps-467.5)/85;points.push(new T.Vector3(x,height(x,z)+.035,z));}
   });
   const route=new T.CatmullRomCurve3(points,false,'centripetal');
   streetGroup.add(new T.Mesh(new T.TubeGeometry(route,Math.max(points.length,24),.025,4,false),new T.MeshBasicMaterial({color:0xe4f6ff,transparent:true,opacity:.8})));
   // Illustrative utility route, deliberately raised and dashed; not surveyed wiring.
   const utilityPoints=points.map(p=>p.clone().add(new T.Vector3(.07,.26,0)));
   const utility=new T.Line(new T.BufferGeometry().setFromPoints(utilityPoints),new T.LineDashedMaterial({color:0xffd26a,dashSize:.10,gapSize:.055}));utility.computeLineDistances();powerGroup.add(utility);
   utilityPoints.filter((_,i)=>i%7===0).forEach(p=>{const node=new T.Mesh(new T.SphereGeometry(.045,6,4),new T.MeshBasicMaterial({color:0xffd26a}));node.position.copy(p);powerGroup.add(node);});
 });
 // Three explicit change examples; no second survey or permit data was supplied.
 shiftGroup.clear();
 const construction=new T.Group(),canopyLoss=new T.Group(),roadChange=new T.Group();shiftGroup.add(construction,canopyLoss,roadChange);
 // Highlight actual scanned roofs; never invent untextured buildings.
 // Extend the sampled roof surfaces and their exact outlines, not generic cubes.
 overlays.children.forEach(o=>{
   const lifted=o.clone();lifted.material=o.material.clone();lifted.material.color.set(0xffcc89);lifted.material.opacity=o.isMesh?.30:.95;lifted.position.y=.32;construction.add(lifted);
   if(o.isLineLoop){const p=o.geometry.attributes.position,edges=[];for(let i=0;i<p.count;i+=8){edges.push(p.getX(i),p.getY(i),p.getZ(i),p.getX(i),p.getY(i)+.32,p.getZ(i));}const geo=new T.BufferGeometry();geo.setAttribute('position',new T.Float32BufferAttribute(edges,3));construction.add(new T.LineSegments(geo,new T.LineBasicMaterial({color:0xffd9a7,transparent:true,opacity:.8})));}
 });
 const poolChange=new T.Group();shiftGroup.add(poolChange);
 const poolPoints=[];for(let i=0;i<32;i++){const angle=i*Math.PI/16,x=.34+Math.cos(angle)*.125,z=-.55+Math.sin(angle)*.105;poolPoints.push(new T.Vector3(x,height(x,z)+.08,z));}
 poolChange.add(new T.LineLoop(new T.BufferGeometry().setFromPoints(poolPoints),new T.LineBasicMaterial({color:0x8cecff,transparent:true,opacity:1})));
 const poolRing=new T.Mesh(new T.RingGeometry(.11,.145,32),new T.MeshBasicMaterial({color:0x64dfff,transparent:true,opacity:.65,side:T.DoubleSide}));poolRing.rotation.x=-Math.PI/2;poolRing.position.set(.34,height(.34,-.55)+.07,-.55);poolChange.add(poolRing);
 const lossPositions=categories.trees.points,loss=[];
 for(let i=0;i<lossPositions.length;i+=9){const x=(lossPositions[i]+lossPositions[i+3]+lossPositions[i+6])/3,z=(lossPositions[i+2]+lossPositions[i+5]+lossPositions[i+8])/3;
   if((z<-2.7&&x>-.9&&x<2.5)||(x<-4.25&&z>.1&&z<2.7))loss.push(...lossPositions.slice(i,i+9));
 }
 const lossGeo=new T.BufferGeometry();lossGeo.setAttribute('position',new T.Float32BufferAttribute(loss,3));
 canopyLoss.add(new T.Mesh(lossGeo,new T.MeshBasicMaterial({color:0xff7b67,transparent:true,opacity:.78,side:T.DoubleSide,depthWrite:false})));
 streetPlans.slice(1,4).forEach(plan=>{
   const points=[];plan.forEach(([px,py],i)=>{if(!i)return;const prev=plan[i-1];const steps=Math.ceil(Math.hypot(px-prev[0],py-prev[1])/12);for(let j=0;j<=steps;j++){const x=(prev[0]+(px-prev[0])*j/steps-960)/85,z=(prev[1]+(py-prev[1])*j/steps-467.5)/85;points.push(new T.Vector3(x,height(x,z)+.035,z));}});
   const route=new T.CatmullRomCurve3(points,false,'centripetal');
   const ribbon=new T.Mesh(new T.TubeGeometry(route,points.length*2,.11,6,false),new T.MeshBasicMaterial({color:0xffc372,transparent:true,opacity:.70,depthWrite:false}));roadChange.add(ribbon);
   const center=new T.Line(new T.BufferGeometry().setFromPoints(points.map(p=>p.clone().add(new T.Vector3(0,.115,0)))),new T.LineDashedMaterial({color:0xffffff,dashSize:.08,gapSize:.04}));center.computeLineDistances();roadChange.add(center);
 });
 // Scripted decision examples: these markers are demo scenarios, not measured findings.
 const agentTargets={retail:new T.Group(),access:new T.Group(),investment:new T.Group(),cars:new T.Group()};
 Object.values(agentTargets).forEach(group=>district.add(group));
 function traceArea(group,pixelPlan){
   const plan=pixelPlan.map(([x,z])=>[(x-960)/85,(z-467.5)/85]),coords=[];
   for(let i=0;i<indices.count;i+=3){const ids=[indices.getX(i),indices.getX(i+1),indices.getX(i+2)],x=ids.reduce((v,k)=>v+positions.getX(k),0)/3,z=ids.reduce((v,k)=>v+positions.getZ(k),0)/3;if(inside(x,z,plan))ids.forEach(k=>coords.push(positions.getX(k),positions.getY(k)+.025,positions.getZ(k)));}
   const geo=new T.BufferGeometry();geo.setAttribute('position',new T.Float32BufferAttribute(coords,3));group.add(new T.Mesh(geo,new T.MeshBasicMaterial({color:0x75f6f0,transparent:true,opacity:.35,side:T.DoubleSide,depthWrite:false})));
   const points=[];plan.forEach(([x,z],i)=>{const end=plan[(i+1)%plan.length];for(let j=0;j<12;j++){const px=x+(end[0]-x)*j/12,pz=z+(end[1]-z)*j/12;points.push(new T.Vector3(px,height(px,pz)+.05,pz));}});points.push(points[0].clone());
   const route=new T.CatmullRomCurve3(points,false,'centripetal');group.add(new T.Mesh(new T.TubeGeometry(route,points.length*2,.025,5,false),new T.MeshBasicMaterial({color:0xc6ffff,transparent:true,opacity:1})));
 }
 function roofTarget(group,index){
   const pixelPlan=plans[index].map(([x,z])=>[x*85+960,z*85+467.5]);traceArea(group,pixelPlan);
 }
 roofTarget(agentTargets.retail,0);
 roofTarget(agentTargets.investment,2);
 // Focus on actual road footprints, not floating pins or invented vehicle boxes.
 traceArea(agentTargets.access,[[697,503],[711,503],[711,531],[697,531]]);
 traceArea(agentTargets.access,[[1141,410],[1157,410],[1157,443],[1141,443]]);
 [[[697,370],[711,370],[711,500],[697,500]],[[1141,470],[1157,470],[1157,603],[1141,603]],[[762,334],[974,334],[974,347],[762,347]],[[752,783],[1048,786],[1048,800],[752,797]]].forEach(plan=>traceArea(agentTargets.cars,plan));
 const camera=new T.PerspectiveCamera(38,1,.1,100);
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
  {q:['Any road obstructions?','فيه عوائق بالطريق؟'],a:['2 pinch points · review access.','نقطتا اختناق · راجع الطريق.'],focus:'access'},
  {q:['Which home is the best investment?','أي بيت أفضل للاستثمار؟'],a:['This home · access + greenery.','هذا البيت · موقع وخضرة.'],focus:'investment'},
  {q:['How many cars in this area?','كم سيارة في الحي؟'],a:['24 cars · 4 street sections.','24 سيارة · 4 مقاطع طرق.'],focus:'cars'}
 ];
 let agentExample=0,agentTimer=0,agentTyping=0;
 function stopAgent(){clearTimeout(agentTimer);clearTimeout(agentTyping);agentChat.classList.remove('is-typing');}
 function focusAgent(show){
   const focus=agentExamples[agentExample].focus;
   host.dataset.agentFocus=show?focus:'pending';
   const target=agentTargets[focus];
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
 function select(next){mode=next;agentChat.hidden=mode!==1;transitionStart=performance.now();host.dataset.mode=String(mode);host.parentElement.dataset.scene=String(mode);
   fades.forEach(f=>{const layerIndex=Object.values(layerObjects).indexOf(f.group);f.target=mode===2&&layerIndex>=0?1:(mode===3&&f.group===overlays?1:(mode===4&&[construction,poolChange,canopyLoss].includes(f.group)?1:0));f.delay=mode===2&&layerIndex>=0?layerIndex*110:0;if(mode===2&&layerIndex>=0)f.value=0;});runAgent();updateText();resize();
 }
 // Fit the entire rotated survey tightly inside the phone, with room for captions.
 // Use the scan's own perimeter rather than empty bounding-box corners.
 const corners=[];
 for(let n=0;n<40;n++){const angle=n*Math.PI/20,dx=Math.cos(angle),dz=Math.sin(angle);let best=-Infinity,pick=0;
   for(let i=0;i<positions.count;i+=8){const score=positions.getX(i)*dx+positions.getZ(i)*dz;if(score>best){best=score;pick=i;}}
   corners.push(new T.Vector3(positions.getX(pick),positions.getY(pick),positions.getZ(pick)));
 }
 function fitCamera(){const w=host.clientWidth,h=host.clientHeight;if(!w||!h)return;camera.aspect=w/h;camera.updateProjectionMatrix();
   let low=5,high=70;const rotated=corners.map(p=>p.clone().applyAxisAngle(new T.Vector3(0,1,0),rotation));
   for(let i=0;i<13;i++){const distance=(low+high)/2;camera.position.set(0,distance*.52,distance*.854);camera.lookAt(0,.12,0);camera.updateMatrixWorld();const fits=rotated.every(p=>{const v=p.clone().project(camera);return Math.abs(v.x)<.955&&Math.abs(v.y)<.72;});if(fits)high=distance;else low=distance;}
   camera.position.set(0,high*.52/zoom,high*.854/zoom);camera.lookAt(0,.12,0);camera.updateMatrixWorld();
 }
 function draw(now){frame=0;if(!visible||document.hidden||!mobile.matches)return;const dt=Math.min((now-last)/1000||.016,.05);last=now;const ease=reduced.matches?1:1-Math.exp(-dt*9);rotation+=(targetRotation-rotation)*ease;district.rotation.y=rotation;zoom+=(targetZoom-zoom)*ease;let changing=Math.abs(targetRotation-rotation)>.001||Math.abs(targetZoom-zoom)>.001;
   fades.forEach(f=>{const target=!reduced.matches&&now-transitionStart<f.delay?0:f.target;f.value+=(target-f.value)*ease;f.group.visible=f.value>.003;f.materials.forEach(({material,opacity})=>material.opacity=opacity*f.value);changing ||= Math.abs(f.target-f.value)>.003;});fitCamera();renderer.render(scene,camera);if(changing)requestRender();
 }
 function requestRender(){if(!frame&&visible&&!document.hidden&&mobile.matches)frame=requestAnimationFrame(draw);}
 function resize(){const w=host.clientWidth,h=host.clientHeight;if(w&&h){renderer.setSize(w,h,false);fitCamera();requestRender();}}
 document.querySelectorAll('[data-scene-select]').forEach(b=>b.addEventListener('click',()=>select(Number(b.dataset.sceneSelect))));
 // Keep one-finger page scrolling; two fingers zoom the scan, not the page.
 let pointer=null,pinch=null;
 const clampZoom=value=>Math.max(1,Math.min(2.8,value));
 function setZoom(value){targetZoom=clampZoom(value);requestRender();}
 const touchDistance=touches=>Math.hypot(touches[0].clientX-touches[1].clientX,touches[0].clientY-touches[1].clientY);
 host.addEventListener('wheel',e=>{
   if(!mobile.matches||!visible)return;
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
 host.setAttribute('aria-label','Interactive 3D scan. Pinch or scroll to zoom. Drag sideways to rotate. Keyboard: plus or minus to zoom, zero to reset, arrow keys to rotate.');
 host.addEventListener('pointerdown',e=>{if(pinch||!e.isPrimary||e.target.closest('button'))return;pointer={x:e.clientX,y:e.clientY,rotation:targetRotation};});
 host.addEventListener('pointermove',e=>{if(!pointer||pinch)return;if(Math.abs(e.clientY-pointer.y)>Math.abs(e.clientX-pointer.x)+8){pointer=null;return;}targetRotation=Math.max(-.8,Math.min(.8,pointer.rotation+(e.clientX-pointer.x)*.005));requestRender();});
 ['pointerup','pointercancel','pointerleave'].forEach(k=>host.addEventListener(k,()=>pointer=null));
 host.addEventListener('keydown',e=>{if(['+','=','-','0'].includes(e.key)){e.preventDefault();setZoom(e.key==='0'?1:targetZoom*(e.key==='-'?1/1.2:1.2));return;}if(['ArrowLeft','ArrowRight'].includes(e.key)){e.preventDefault();targetRotation=Math.max(-.8,Math.min(.8,targetRotation+(e.key==='ArrowLeft'?-.15:.15)));requestRender();}});
 new ResizeObserver(resize).observe(host);
 new IntersectionObserver(entries=>{visible=entries[0].isIntersecting;if(!visible){cancelAnimationFrame(frame);frame=0;}else requestRender();runAgent();},{threshold:.2}).observe(host);
 document.addEventListener('visibilitychange',()=>{if(document.hidden){cancelAnimationFrame(frame);frame=0;}else requestRender();runAgent();});mobile.addEventListener('change',()=>{requestRender();runAgent();});
 reduced.addEventListener('change',()=>{updateText();runAgent();requestRender();});document.addEventListener('makan:lang-changed',()=>{updateText();runAgent();});
 renderer.domElement.addEventListener('webglcontextlost',e=>{e.preventDefault();cancelAnimationFrame(frame);frame=0;stopAgent();host.dataset.ready='fallback';});
 select(Number(host.parentElement.dataset.scene||1));resize();
 // Paint a complete frame before crossfading away from the static scan.
 renderer.render(scene,camera);host.dataset.ready='true';
}

