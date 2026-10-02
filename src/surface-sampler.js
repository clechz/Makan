// Yield between preparation batches so scrolling and taps keep being serviced.
export const yieldToPage = () => globalThis.scheduler?.yield
  ? globalThis.scheduler.yield()
  : new Promise(resolve => setTimeout(resolve, 0));

// Spatially index the exact transformed scan triangles. A vertical height query
// only visits its local cell, instead of raycasting the entire scan each time.
export async function createSurfaceSampler(positions, indices) {
  const cells = new Map(), size = .25;
  const key = (x,z) => `${x},${z}`;
  for (let i=0;i<indices.count;i+=3) {
    if(i%6144===0) await yieldToPage();
    const a=indices.getX(i),b=indices.getX(i+1),c=indices.getX(i+2);
    const ax=positions.getX(a),az=positions.getZ(a),bx=positions.getX(b),bz=positions.getZ(b),cx=positions.getX(c),cz=positions.getZ(c);
    for(let x=Math.floor(Math.min(ax,bx,cx)/size);x<=Math.floor(Math.max(ax,bx,cx)/size);x++)
      for(let z=Math.floor(Math.min(az,bz,cz)/size);z<=Math.floor(Math.max(az,bz,cz)/size);z++) {
        const k=key(x,z); let bucket=cells.get(k); if(!bucket)cells.set(k,bucket=[]); bucket.push(a,b,c);
      }
  }
  return (x,z) => {
    const bucket=cells.get(key(Math.floor(x/size),Math.floor(z/size)));
    let top=-Infinity;
    if(bucket) for(let i=0;i<bucket.length;i+=3) {
      const a=bucket[i],b=bucket[i+1],c=bucket[i+2];
      const ax=positions.getX(a),az=positions.getZ(a),bx=positions.getX(b),bz=positions.getZ(b),cx=positions.getX(c),cz=positions.getZ(c);
      const det=(bz-cz)*(ax-cx)+(cx-bx)*(az-cz);
      if(Math.abs(det)<1e-12)continue;
      const u=((bz-cz)*(x-cx)+(cx-bx)*(z-cz))/det;
      const v=((cz-az)*(x-cx)+(ax-cx)*(z-cz))/det;
      if(u < -1e-7 || v < -1e-7 || u+v > 1+1e-7)continue;
      const y=u*positions.getY(a)+v*positions.getY(b)+(1-u-v)*positions.getY(c);
      if(y<=3 && y>top)top=y;
    }
    return Number.isFinite(top)?top:.04;
  };
}
