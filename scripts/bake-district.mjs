// Rebuild after changing the source scan or illustrative overlay plans.
// Run from the repository root: node scripts/bake-district.mjs
import fs from 'node:fs/promises';
import {MeshoptEncoder} from 'meshoptimizer';
import * as T from 'three';
import sharp from 'sharp';
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js';
import {MeshoptDecoder} from 'three/addons/libs/meshopt_decoder.module.js';
import {prepareDistrict} from './prepare-district.mjs';
const base=new URL('../public/hybrid/assets/town/',import.meta.url);
const bytes=await fs.readFile(new URL('scene.glb',base));
const gltf=await new GLTFLoader().setMeshoptDecoder(MeshoptDecoder).parseAsync(bytes.buffer.slice(bytes.byteOffset,bytes.byteOffset+bytes.byteLength),'');
gltf.scene.updateMatrixWorld(true);let surface;gltf.scene.traverse(o=>{if(o.isMesh)surface=o;});
const {data,info}=await sharp(await fs.readFile(new URL('color-phone.webp',base))).resize({width:1024}).ensureAlpha().raw().toBuffer({resolveWithObject:true});
const result=await prepareDistrict(surface,{data,width:info.width,height:info.height});
const scene=new T.Scene();
for(const [name,group] of Object.entries(result.groups)){group.name=name;scene.add(group);}
const json=scene.toJSON(),chunks=[];let offset=0;
const types={Float32Array,Uint32Array,Uint16Array,Uint8Array,Int16Array,Int32Array};
for(const geometry of json.geometries){if(!geometry.data)continue;
  for(const attr of Object.values(geometry.data.attributes||{}).concat(geometry.data.index?[geometry.data.index]:[])){
    const padding=(4-offset%4)%4;if(padding){chunks.push(Buffer.alloc(padding));offset+=padding;}
    const array=new types[attr.type](attr.array),bytes=Buffer.from(array.buffer);
    attr.byteOffset=offset;attr.length=array.length;delete attr.array;chunks.push(bytes);offset+=bytes.length;
  }
}
const raw=Buffer.concat(chunks),packed=Buffer.alloc(Math.ceil(raw.length/12)*12);raw.copy(packed);

await MeshoptEncoder.ready;
await fs.writeFile(new URL('overlays.meshopt',base),MeshoptEncoder.encodeGltfBuffer(packed,packed.length/12,12,'ATTRIBUTES'));
await sharp(await fs.readFile(new URL('color-phone.webp',base))).resize({width:1024}).webp({quality:78}).toFile(new URL('color-preview.webp',base).pathname.replace(/^\/(?=[A-Z]:)/,''));
await fs.writeFile(new URL('overlays.json',base),JSON.stringify({compressedBuffer:'overlays.meshopt',byteLength:packed.length,stride:12,scene:json}));
await fs.writeFile(new URL('../src/district-layout.json',import.meta.url),JSON.stringify({corners:result.corners.map(p=>p.toArray())}));
console.log('Baked overlays:',offset,'bytes;',json.geometries.length,'geometries.');
