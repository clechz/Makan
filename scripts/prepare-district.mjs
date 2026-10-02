// Offline authoring only. Never import into the landing-page bundle.
import * as T from 'three';
import {createSurfaceSampler,yieldToPage} from '../src/surface-sampler.js';
// These manually traced roof plans are illustrative overlays, not live detections.
const plans=[
 [[719,262],[747,262],[747,283],[783,283],[783,262],[813,262],[813,313],[719,313]],
 [[831,262],[858,262],[858,283],[890,283],[890,262],[929,262],[929,313],[831,313]],
 [[949,261],[977,261],[977,284],[1017,284],[1017,260],[1047,260],[1047,314],[949,314]]
].map(poly=>poly.map(([x,z])=>[(x-960)/85,(z-467.5)/85]));

export async function prepareDistrict(surface,image){
 // Bake quantization transforms into a separate geometry for exact overlay alignment.
 const raw=surface.geometry.attributes.position, floats=new Float32Array(raw.count*3);
 for(let i=0;i<raw.count;i++){if(i%8192===0)await yieldToPage();floats[i*3]=raw.getX(i);floats[i*3+1]=raw.getY(i);floats[i*3+2]=raw.getZ(i);}
 const geometry=new T.BufferGeometry();geometry.setAttribute('position',new T.BufferAttribute(floats,3));geometry.setIndex(surface.geometry.index.clone());geometry.applyMatrix4(surface.matrixWorld);
 const positions=geometry.attributes.position, indices=geometry.index;
 // Index once; avoid hundreds of full-model raycasts before input is enabled.
 const height=await createSurfaceSampler(positions,indices);
 function inside(x,z,p){let yes=false;for(let i=0,j=p.length-1;i<p.length;j=i++){if((p[i][1]>z)!==(p[j][1]>z)&&x<(p[j][0]-p[i][0])*(z-p[i][1])/(p[j][1]-p[i][1])+p[i][0])yes=!yes;}return yes;}
 const overlays=new T.Group(), layerGroup=new T.Group(), shiftGroup=new T.Group();
 for(const plan of plans){
   const coords=[];
   for(let i=0;i<indices.count;i+=3){if(i%6144===0)await yieldToPage();const ids=[indices.getX(i),indices.getX(i+1),indices.getX(i+2)];const x=ids.reduce((s,k)=>s+positions.getX(k),0)/3,z=ids.reduce((s,k)=>s+positions.getZ(k),0)/3;
     if(inside(x,z,plan))ids.forEach(k=>coords.push(positions.getX(k),positions.getY(k)+.012,positions.getZ(k)));
   }
   const roofGeo=new T.BufferGeometry();roofGeo.setAttribute('position',new T.Float32BufferAttribute(coords,3));
   const roof=new T.Mesh(roofGeo,new T.MeshBasicMaterial({color:0x56e9ef,transparent:true,opacity:.30,depthWrite:false,side:T.DoubleSide}));overlays.add(roof);
   const points=[];plan.forEach(([x,z],i)=>{const b=plan[(i+1)%plan.length];for(let j=0;j<8;j++){const px=x+(b[0]-x)*j/8,pz=z+(b[1]-z)*j/8;points.push(new T.Vector3(px,height(px,pz)+.03,pz));}});
   const line=new T.LineLoop(new T.BufferGeometry().setFromPoints(points),new T.LineBasicMaterial({color:0xb3ffff}));overlays.add(line);

 }
 // Neighborhood-wide illustrative layers follow the scan surface.
 layerGroup.clear();
 const categories={buildings:{color:0x73ddff,points:[]},green:{color:0xb1ee70,points:[]},trees:{color:0x21dcad,points:[]}};
 const atlas={width:image.width,height:image.height}, pixels=image.data,uv=surface.geometry.attributes.uv;
 for(let i=0;i<indices.count;i+=3){if(i%6144===0)await yieldToPage();
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

 async function traceArea(group,pixelPlan){
   const plan=pixelPlan.map(([x,z])=>[(x-960)/85,(z-467.5)/85]),coords=[];
   for(let i=0;i<indices.count;i+=3){if(i%6144===0)await yieldToPage();const ids=[indices.getX(i),indices.getX(i+1),indices.getX(i+2)],x=ids.reduce((v,k)=>v+positions.getX(k),0)/3,z=ids.reduce((v,k)=>v+positions.getZ(k),0)/3;if(inside(x,z,plan))ids.forEach(k=>coords.push(positions.getX(k),positions.getY(k)+.025,positions.getZ(k)));}
   const geo=new T.BufferGeometry();geo.setAttribute('position',new T.Float32BufferAttribute(coords,3));group.add(new T.Mesh(geo,new T.MeshBasicMaterial({color:0x75f6f0,transparent:true,opacity:.35,side:T.DoubleSide,depthWrite:false})));
   const points=[];plan.forEach(([x,z],i)=>{const end=plan[(i+1)%plan.length];for(let j=0;j<12;j++){const px=x+(end[0]-x)*j/12,pz=z+(end[1]-z)*j/12;points.push(new T.Vector3(px,height(px,pz)+.05,pz));}});points.push(points[0].clone());
   const route=new T.CatmullRomCurve3(points,false,'centripetal');group.add(new T.Mesh(new T.TubeGeometry(route,points.length*2,.025,5,false),new T.MeshBasicMaterial({color:0xc6ffff,transparent:true,opacity:1})));
 }
 async function roofTarget(group,index){
   const pixelPlan=plans[index].map(([x,z])=>[x*85+960,z*85+467.5]);await traceArea(group,pixelPlan);
 }
 await roofTarget(agentTargets.retail,0);
 await roofTarget(agentTargets.investment,2);
 // Focus on actual road footprints, not floating pins or invented vehicle boxes.
 await traceArea(agentTargets.access,[[697,503],[711,503],[711,531],[697,531]]);
 await traceArea(agentTargets.access,[[1141,410],[1157,410],[1157,443],[1141,443]]);
 for(const plan of [[[697,370],[711,370],[711,500],[697,500]],[[1141,470],[1157,470],[1157,603],[1141,603]],[[762,334],[974,334],[974,347],[762,347]],[[752,783],[1048,786],[1048,800],[752,797]]])await traceArea(agentTargets.cars,plan);

 const corners=[];
 for(let n=0;n<40;n++){await yieldToPage();const angle=n*Math.PI/20,dx=Math.cos(angle),dz=Math.sin(angle);let best=-Infinity,pick=0;
   for(let i=0;i<positions.count;i+=8){const score=positions.getX(i)*dx+positions.getZ(i)*dz;if(score>best){best=score;pick=i;}}
   corners.push(new T.Vector3(positions.getX(pick),positions.getY(pick),positions.getZ(pick)));
 }

return {groups:{overlays,...layerObjects,construction,poolChange,canopyLoss,roadChange,...agentTargets},corners};
}
