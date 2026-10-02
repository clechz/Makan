import fs from 'node:fs';
import * as THREE from 'three';
import { FBXLoader } from 'three/addons/loaders/FBXLoader.js';
import { GLTFExporter } from 'three/addons/exporters/GLTFExporter.js';
import { mergeVertices } from 'three/addons/utils/BufferGeometryUtils.js';
import { NodeIO } from '@gltf-transform/core';
import { EXTMeshoptCompression } from '@gltf-transform/extensions';
import { meshopt } from '@gltf-transform/functions';
import { MeshoptEncoder } from 'meshoptimizer';
globalThis.window = { URL: globalThis.URL };
THREE.TextureLoader.prototype.load = function () { return new THREE.Texture(); };
const bytes = fs.readFileSync('.local-assets/town/wiz1etap/wiz1etap.fbx');
const root = new FBXLoader().parse(bytes.buffer.slice(bytes.byteOffset,bytes.byteOffset+bytes.byteLength),'');
root.updateMatrixWorld(true);
root.traverse(o => {if(o.isMesh) console.log(o.name, o.geometry.attributes.position.count, new THREE.Box3().setFromObject(o));});
const bounds=new THREE.Box3().setFromObject(root), center=bounds.getCenter(new THREE.Vector3());
const scale=10 / Math.max(bounds.max.x-bounds.min.x,bounds.max.z-bounds.min.z);
const output=new THREE.Group();
root.traverse(o=>{
  if(!o.isMesh)return;
  const geometry=o.geometry.clone().applyMatrix4(o.matrixWorld);
  geometry.translate(-center.x,-bounds.min.y,-center.z).scale(scale,scale,scale);
  geometry.deleteAttribute('color');
  geometry.deleteAttribute('normal');
  const mesh=new THREE.Mesh(mergeVertices(geometry),new THREE.MeshBasicMaterial({color:0xffffff}));
  output.add(mesh);
});
globalThis.FileReader=class {
  readAsArrayBuffer(blob){blob.arrayBuffer().then(v=>{this.result=v;this.onloadend?.();});}
  readAsDataURL(blob){blob.arrayBuffer().then(v=>{this.result='data:application/octet-stream;base64,'+Buffer.from(v).toString('base64');this.onloadend?.();});}
};
const result=await new GLTFExporter().parseAsync(output,{binary:true});
fs.mkdirSync('public/hybrid/assets/town',{recursive:true});
fs.writeFileSync('public/hybrid/assets/town/scene.glb',Buffer.from(result));
console.log('Exported',result.byteLength);
await MeshoptEncoder.ready;
const io=new NodeIO().registerExtensions([EXTMeshoptCompression]).registerDependencies({'meshopt.encoder':MeshoptEncoder});
const doc=await io.read('public/hybrid/assets/town/scene.glb');
await doc.transform(meshopt({encoder:MeshoptEncoder,level:'high'}));
await io.write('public/hybrid/assets/town/scene.glb',doc);
