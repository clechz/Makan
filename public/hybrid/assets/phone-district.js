var td=0,Hl=1,nd=2;var Vl=1,id=2,Fn=3,bn=0,Ht=1,cn=2,$n=0,Li=1,Gl=2,Wl=3,Xl=4,sd=5,li=100,rd=101,ad=102,od=103,cd=104,ld=200,hd=201,ud=202,dd=203,za=204,Ha=205,fd=206,pd=207,md=208,gd=209,bd=210,_d=211,xd=212,vd=213,yd=214,Yo=0,jo=1,Ko=2,Di=3,Jo=4,Zo=5,$o=6,Qo=7,Vr=0,Md=1,Sd=2,Qn=0,Td=1,Ad=2,wd=3,Ed=4,Rd=5,Cd=6,Id=7,wl="attached",Pd="detached",ec=300,_i=301,xi=302,Gr=303,Wr=304,zs=306,Yn=1e3,mn=1001,Ui=1002,It=1003,Xr=1004;var vi=1005;var Nt=1006,Gi=1007;var ln=1008;var vn=1009,ql=1010,Yl=1011,Hs=1012,tc=1013,ei=1014,Wt=1015,Vs=1016,nc=1017,ic=1018,Gs=1020,jl=35902,Kl=35899,Jl=1021,Zl=1022,kt=1023,xs=1026,Ws=1027,sc=1028,qr=1029,$l=1030,rc=1031;var ac=1033,Yr=33776,jr=33777,Kr=33778,Jr=33779,oc=35840,cc=35841,lc=35842,hc=35843,uc=36196,dc=37492,fc=37496,pc=37808,mc=37809,gc=37810,bc=37811,_c=37812,xc=37813,vc=37814,yc=37815,Mc=37816,Sc=37817,Tc=37818,Ac=37819,wc=37820,Ec=37821,Rc=36492,Cc=36494,Ic=36495,Pc=36283,Lc=36284,Dc=36285,Uc=36286;var Ni=2300,Fi=2301,ka=2302,El=2400,Rl=2401,Cl=2402,Ld=2500;var Ql=0,Zr=1,Xs=2,Dd=3200,Ud=3201;var yi=0,Nd=1,ti="",gt="srgb",Pt="srgb-linear",mr="linear",at="srgb";var Pi=7680;var Il=519,Fd=512,Od=513,Bd=514,eh=515,kd=516,zd=517,Hd=518,Vd=519,Va=35044;var th="300 es",rn=2e3,gr=2001;var jn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let i=n[e];if(i!==void 0){let r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,e);e.target=null}}},Lt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],au=1234567,bs=Math.PI/180,Oi=180/Math.PI;function an(){let s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Lt[s&255]+Lt[s>>8&255]+Lt[s>>16&255]+Lt[s>>24&255]+"-"+Lt[e&255]+Lt[e>>8&255]+"-"+Lt[e>>16&15|64]+Lt[e>>24&255]+"-"+Lt[t&63|128]+Lt[t>>8&255]+"-"+Lt[t>>16&255]+Lt[t>>24&255]+Lt[n&255]+Lt[n>>8&255]+Lt[n>>16&255]+Lt[n>>24&255]).toLowerCase()}function Ye(s,e,t){return Math.max(e,Math.min(t,s))}function nh(s,e){return(s%e+e)%e}function Hf(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function Vf(s,e,t){return s!==e?(t-s)/(e-s):0}function dr(s,e,t){return(1-t)*s+t*e}function Gf(s,e,t,n){return dr(s,e,1-Math.exp(-t*n))}function Wf(s,e=1){return e-Math.abs(nh(s,e*2)-e)}function Xf(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function qf(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function Yf(s,e){return s+Math.floor(Math.random()*(e-s+1))}function jf(s,e){return s+Math.random()*(e-s)}function Kf(s){return s*(.5-Math.random())}function Jf(s){s!==void 0&&(au=s);let e=au+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Zf(s){return s*bs}function $f(s){return s*Oi}function Qf(s){return(s&s-1)===0&&s!==0}function ep(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function tp(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function np(s,e,t,n,i){let r=Math.cos,a=Math.sin,o=r(t/2),c=a(t/2),l=r((e+n)/2),h=a((e+n)/2),u=r((e-n)/2),d=a((e-n)/2),f=r((n-e)/2),g=a((n-e)/2);switch(i){case"XYX":s.set(o*h,c*u,c*d,o*l);break;case"YZY":s.set(c*d,o*h,c*u,o*l);break;case"ZXZ":s.set(c*u,c*d,o*h,o*l);break;case"XZX":s.set(o*h,c*g,c*f,o*l);break;case"YXY":s.set(c*f,o*h,c*g,o*l);break;case"ZYZ":s.set(c*g,c*f,o*h,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function pn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function rt(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}var Wi={DEG2RAD:bs,RAD2DEG:Oi,generateUUID:an,clamp:Ye,euclideanModulo:nh,mapLinear:Hf,inverseLerp:Vf,lerp:dr,damp:Gf,pingpong:Wf,smoothstep:Xf,smootherstep:qf,randInt:Yf,randFloat:jf,randFloatSpread:Kf,seededRandom:Jf,degToRad:Zf,radToDeg:$f,isPowerOfTwo:Qf,ceilPowerOfTwo:ep,floorPowerOfTwo:tp,setQuaternionFromProperEuler:np,normalize:rt,denormalize:pn},ie=class s{constructor(e=0,t=0){s.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ye(this.x,e.x,t.x),this.y=Ye(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ye(this.x,e,t),this.y=Ye(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ye(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ye(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*i+e.x,this.y=r*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},on=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,a,o){let c=n[i+0],l=n[i+1],h=n[i+2],u=n[i+3],d=r[a+0],f=r[a+1],g=r[a+2],b=r[a+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(o===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=b;return}if(u!==b||c!==d||l!==f||h!==g){let m=1-o,p=c*d+l*f+h*g+u*b,v=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){let T=Math.sqrt(x),w=Math.atan2(T,p*v);m=Math.sin(m*w)/T,o=Math.sin(o*w)/T}let _=o*v;if(c=c*m+d*_,l=l*m+f*_,h=h*m+g*_,u=u*m+b*_,m===1-o){let T=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=T,l*=T,h*=T,u*=T}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,r,a){let o=n[i],c=n[i+1],l=n[i+2],h=n[i+3],u=r[a],d=r[a+1],f=r[a+2],g=r[a+3];return e[t]=o*g+h*u+c*f-l*d,e[t+1]=c*g+h*d+l*u-o*f,e[t+2]=l*g+h*f+o*d-c*u,e[t+3]=h*g-o*u-c*d-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,i=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(i/2),u=o(r/2),d=c(n/2),f=c(i/2),g=c(r/2);switch(a){case"XYZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"YZX":this._x=d*h*u+l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u-d*f*g;break;case"XZY":this._x=d*h*u-l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],h=t[6],u=t[10],d=n+o+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(a-i)*f}else if(n>o&&n>u){let f=2*Math.sqrt(1+n-o-u);this._w=(h-c)/f,this._x=.25*f,this._y=(i+a)/f,this._z=(r+l)/f}else if(o>u){let f=2*Math.sqrt(1+o-n-u);this._w=(r-l)/f,this._x=(i+a)/f,this._y=.25*f,this._z=(c+h)/f}else{let f=2*Math.sqrt(1+u-n-o);this._w=(a-i)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ye(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+a*o+i*l-r*c,this._y=i*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-i*o,this._w=a*h-n*o-i*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,i=this._y,r=this._z,a=this._w,o=a*e._w+n*e._x+i*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;let c=1-o*o;if(c<=Number.EPSILON){let f=1-t;return this._w=f*a+t*this._w,this._x=f*n+t*this._x,this._y=f*i+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,o),u=Math.sin((1-t)*h)/l,d=Math.sin(t*h)/l;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},R=class s{constructor(e=0,t=0,n=0){s.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ou.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ou.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*i-o*n),h=2*(o*t-r*i),u=2*(r*n-a*t);return this.x=t+c*l+a*u-o*h,this.y=n+c*h+o*l-r*u,this.z=i+c*u+r*h-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ye(this.x,e.x,t.x),this.y=Ye(this.y,e.y,t.y),this.z=Ye(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ye(this.x,e,t),this.y=Ye(this.y,e,t),this.z=Ye(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ye(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=i*c-r*o,this.y=r*a-n*c,this.z=n*o-i*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return qc.copy(this).projectOnVector(e),this.sub(qc)}reflect(e){return this.sub(qc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ye(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},qc=new R,ou=new on,Xe=class s{constructor(e,t,n,i,r,a,o,c,l){s.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,c,l)}set(e,t,n,i,r,a,o,c,l){let h=this.elements;return h[0]=e,h[1]=i,h[2]=o,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],b=i[0],m=i[3],p=i[6],v=i[1],x=i[4],_=i[7],T=i[2],w=i[5],C=i[8];return r[0]=a*b+o*v+c*T,r[3]=a*m+o*x+c*w,r[6]=a*p+o*_+c*C,r[1]=l*b+h*v+u*T,r[4]=l*m+h*x+u*w,r[7]=l*p+h*_+u*C,r[2]=d*b+f*v+g*T,r[5]=d*m+f*x+g*w,r[8]=d*p+f*_+g*C,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*a*h-t*o*l-n*r*h+n*o*c+i*r*l-i*a*c}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=h*a-o*l,d=o*c-h*r,f=l*r-a*c,g=t*u+n*d+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let b=1/g;return e[0]=u*b,e[1]=(i*l-h*n)*b,e[2]=(o*n-i*a)*b,e[3]=d*b,e[4]=(h*t-i*c)*b,e[5]=(i*r-o*t)*b,e[6]=f*b,e[7]=(n*c-l*t)*b,e[8]=(a*t-n*r)*b,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-i*l,i*c,-i*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Yc.makeScale(e,t)),this}rotate(e){return this.premultiply(Yc.makeRotation(-e)),this}translate(e,t){return this.premultiply(Yc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Yc=new Xe;function ih(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}var ip={Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};function gs(s,e){return new ip[s](e)}function vs(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Gd(){let s=vs("canvas");return s.style.display="block",s}var cu={};function ys(s){s in cu||(cu[s]=!0,console.warn(s))}function Wd(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var lu=new Xe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),hu=new Xe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function sp(){let s={enabled:!0,workingColorSpace:Pt,spaces:{},convert:function(i,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===at&&(i.r=qn(i.r),i.g=qn(i.g),i.b=qn(i.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===at&&(i.r=_s(i.r),i.g=_s(i.g),i.b=_s(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===ti?mr:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,a){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return ys("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return ys("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[Pt]:{primaries:e,whitePoint:n,transfer:mr,toXYZ:lu,fromXYZ:hu,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:gt},outputColorSpaceConfig:{drawingBufferColorSpace:gt}},[gt]:{primaries:e,whitePoint:n,transfer:at,toXYZ:lu,fromXYZ:hu,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:gt}}}),s}var Je=sp();function qn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function _s(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var $i,Ga=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{$i===void 0&&($i=vs("canvas")),$i.width=e.width,$i.height=e.height;let i=$i.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=$i}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=vs("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=qn(r[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(qn(t[n]/255)*255):t[n]=qn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},rp=0,wn=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:rp++}),this.uuid=an(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(jc(i[a].image)):r.push(jc(i[a]))}else r=jc(i);n.url=r}return t||(e.images[this.uuid]=n),n}};function jc(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Ga.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var ap=0,Kc=new R,wt=class s extends jn{constructor(e=s.DEFAULT_IMAGE,t=s.DEFAULT_MAPPING,n=mn,i=mn,r=Nt,a=ln,o=kt,c=vn,l=s.DEFAULT_ANISOTROPY,h=ti){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ap++}),this.uuid=an(),this.name="",this.source=new wn(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new ie(0,0),this.repeat=new ie(1,1),this.center=new ie(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Kc).x}get height(){return this.source.getSize(Kc).y}get depth(){return this.source.getSize(Kc).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ec)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Yn:e.x=e.x-Math.floor(e.x);break;case mn:e.x=e.x<0?0:1;break;case Ui:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Yn:e.y=e.y-Math.floor(e.y);break;case mn:e.y=e.y<0?0:1;break;case Ui:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};wt.DEFAULT_IMAGE=null;wt.DEFAULT_MAPPING=ec;wt.DEFAULT_ANISOTROPY=1;var et=class s{constructor(e=0,t=0,n=0,i=1){s.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r,c=e.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],g=c[9],b=c[2],m=c[6],p=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-b)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+b)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let x=(l+1)/2,_=(f+1)/2,T=(p+1)/2,w=(h+d)/4,C=(u+b)/4,I=(g+m)/4;return x>_&&x>T?x<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(x),i=w/n,r=C/n):_>T?_<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(_),n=w/i,r=I/i):T<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(T),n=C/r,i=I/r),this.set(n,i,r,t),this}let v=Math.sqrt((m-g)*(m-g)+(u-b)*(u-b)+(d-h)*(d-h));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(u-b)/v,this.z=(d-h)/v,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ye(this.x,e.x,t.x),this.y=Ye(this.y,e.y,t.y),this.z=Ye(this.z,e.z,t.z),this.w=Ye(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ye(this.x,e,t),this.y=Ye(this.y,e,t),this.z=Ye(this.z,e,t),this.w=Ye(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ye(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Wa=class extends jn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Nt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new et(0,0,e,t),this.scissorTest=!1,this.viewport=new et(0,0,e,t);let i={width:e,height:t,depth:n.depth},r=new wt(i);this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){let t={minFilter:Nt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isArrayTexture=this.textures[i].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let i=Object.assign({},e.textures[t].image);this.textures[t].source=new wn(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Cn=class extends Wa{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},br=class extends wt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=It,this.minFilter=It,this.wrapR=mn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Xa=class extends wt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=It,this.minFilter=It,this.wrapR=mn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Mt=class{constructor(e=new R(1/0,1/0,1/0),t=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(un.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(un.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=un.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,un):un.fromBufferAttribute(r,a),un.applyMatrix4(e.matrixWorld),this.expandByPoint(un);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ia.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ia.copy(n.boundingBox)),ia.applyMatrix4(e.matrixWorld),this.union(ia)}let i=e.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,un),un.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Qs),sa.subVectors(this.max,Qs),Qi.subVectors(e.a,Qs),es.subVectors(e.b,Qs),ts.subVectors(e.c,Qs),ii.subVectors(es,Qi),si.subVectors(ts,es),Ai.subVectors(Qi,ts);let t=[0,-ii.z,ii.y,0,-si.z,si.y,0,-Ai.z,Ai.y,ii.z,0,-ii.x,si.z,0,-si.x,Ai.z,0,-Ai.x,-ii.y,ii.x,0,-si.y,si.x,0,-Ai.y,Ai.x,0];return!Jc(t,Qi,es,ts,sa)||(t=[1,0,0,0,1,0,0,0,1],!Jc(t,Qi,es,ts,sa))?!1:(ra.crossVectors(ii,si),t=[ra.x,ra.y,ra.z],Jc(t,Qi,es,ts,sa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,un).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(un).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(zn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),zn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),zn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),zn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),zn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),zn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),zn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),zn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(zn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},zn=[new R,new R,new R,new R,new R,new R,new R,new R],un=new R,ia=new Mt,Qi=new R,es=new R,ts=new R,ii=new R,si=new R,Ai=new R,Qs=new R,sa=new R,ra=new R,wi=new R;function Jc(s,e,t,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){wi.fromArray(s,r);let o=i.x*Math.abs(wi.x)+i.y*Math.abs(wi.y)+i.z*Math.abs(wi.z),c=e.dot(wi),l=t.dot(wi),h=n.dot(wi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}var op=new Mt,er=new R,Zc=new R,St=class{constructor(e=new R,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):op.setFromPoints(e).getCenter(n);let i=0;for(let r=0,a=e.length;r<a;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;er.subVectors(e,this.center);let t=er.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(er,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Zc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(er.copy(e.center).add(Zc)),this.expandByPoint(er.copy(e.center).sub(Zc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Hn=new R,$c=new R,aa=new R,ri=new R,Qc=new R,oa=new R,el=new R,Bi=class{constructor(e=new R,t=new R(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Hn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Hn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Hn.copy(this.origin).addScaledVector(this.direction,t),Hn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){$c.copy(e).add(t).multiplyScalar(.5),aa.copy(t).sub(e).normalize(),ri.copy(this.origin).sub($c);let r=e.distanceTo(t)*.5,a=-this.direction.dot(aa),o=ri.dot(this.direction),c=-ri.dot(aa),l=ri.lengthSq(),h=Math.abs(1-a*a),u,d,f,g;if(h>0)if(u=a*c-o,d=a*o-c,g=r*h,u>=0)if(d>=-g)if(d<=g){let b=1/h;u*=b,d*=b,f=u*(u+a*d+2*o)+d*(a*u+d+2*c)+l}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;else d<=-g?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l):d<=g?(u=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy($c).addScaledVector(aa,d),f}intersectSphere(e,t){Hn.subVectors(e.center,this.origin);let n=Hn.dot(this.direction),i=Hn.dot(Hn)-n*n,r=e.radius*e.radius;if(i>r)return null;let a=Math.sqrt(r-i),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,a,o,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,i=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,i=(e.min.x-d.x)*l),h>=0?(r=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),u>=0?(o=(e.min.z-d.z)*u,c=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,c=(e.min.z-d.z)*u),n>c||o>i)||((o>n||n!==n)&&(n=o),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Hn)!==null}intersectTriangle(e,t,n,i,r){Qc.subVectors(t,e),oa.subVectors(n,e),el.crossVectors(Qc,oa);let a=this.direction.dot(el),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;ri.subVectors(this.origin,e);let c=o*this.direction.dot(oa.crossVectors(ri,oa));if(c<0)return null;let l=o*this.direction.dot(Qc.cross(ri));if(l<0||c+l>a)return null;let h=-o*ri.dot(el);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ze=class s{constructor(e,t,n,i,r,a,o,c,l,h,u,d,f,g,b,m){s.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,c,l,h,u,d,f,g,b,m)}set(e,t,n,i,r,a,o,c,l,h,u,d,f,g,b,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=r,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=b,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,i=1/ns.setFromMatrixColumn(e,0).length(),r=1/ns.setFromMatrixColumn(e,1).length(),a=1/ns.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let d=a*h,f=a*u,g=o*h,b=o*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=f+g*l,t[5]=d-b*l,t[9]=-o*c,t[2]=b-d*l,t[6]=g+f*l,t[10]=a*c}else if(e.order==="YXZ"){let d=c*h,f=c*u,g=l*h,b=l*u;t[0]=d+b*o,t[4]=g*o-f,t[8]=a*l,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=f*o-g,t[6]=b+d*o,t[10]=a*c}else if(e.order==="ZXY"){let d=c*h,f=c*u,g=l*h,b=l*u;t[0]=d-b*o,t[4]=-a*u,t[8]=g+f*o,t[1]=f+g*o,t[5]=a*h,t[9]=b-d*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){let d=a*h,f=a*u,g=o*h,b=o*u;t[0]=c*h,t[4]=g*l-f,t[8]=d*l+b,t[1]=c*u,t[5]=b*l+d,t[9]=f*l-g,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){let d=a*c,f=a*l,g=o*c,b=o*l;t[0]=c*h,t[4]=b-d*u,t[8]=g*u+f,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-l*h,t[6]=f*u+g,t[10]=d-b*u}else if(e.order==="XZY"){let d=a*c,f=a*l,g=o*c,b=o*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=d*u+b,t[5]=a*h,t[9]=f*u-g,t[2]=g*u-f,t[6]=o*h,t[10]=b*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(cp,e,lp)}lookAt(e,t,n){let i=this.elements;return Kt.subVectors(e,t),Kt.lengthSq()===0&&(Kt.z=1),Kt.normalize(),ai.crossVectors(n,Kt),ai.lengthSq()===0&&(Math.abs(n.z)===1?Kt.x+=1e-4:Kt.z+=1e-4,Kt.normalize(),ai.crossVectors(n,Kt)),ai.normalize(),ca.crossVectors(Kt,ai),i[0]=ai.x,i[4]=ca.x,i[8]=Kt.x,i[1]=ai.y,i[5]=ca.y,i[9]=Kt.y,i[2]=ai.z,i[6]=ca.z,i[10]=Kt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],b=n[6],m=n[10],p=n[14],v=n[3],x=n[7],_=n[11],T=n[15],w=i[0],C=i[4],I=i[8],S=i[12],y=i[1],P=i[5],O=i[9],z=i[13],q=i[2],K=i[6],X=i[10],ae=i[14],W=i[3],me=i[7],xe=i[11],Te=i[15];return r[0]=a*w+o*y+c*q+l*W,r[4]=a*C+o*P+c*K+l*me,r[8]=a*I+o*O+c*X+l*xe,r[12]=a*S+o*z+c*ae+l*Te,r[1]=h*w+u*y+d*q+f*W,r[5]=h*C+u*P+d*K+f*me,r[9]=h*I+u*O+d*X+f*xe,r[13]=h*S+u*z+d*ae+f*Te,r[2]=g*w+b*y+m*q+p*W,r[6]=g*C+b*P+m*K+p*me,r[10]=g*I+b*O+m*X+p*xe,r[14]=g*S+b*z+m*ae+p*Te,r[3]=v*w+x*y+_*q+T*W,r[7]=v*C+x*P+_*K+T*me,r[11]=v*I+x*O+_*X+T*xe,r[15]=v*S+x*z+_*ae+T*Te,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],h=e[2],u=e[6],d=e[10],f=e[14],g=e[3],b=e[7],m=e[11],p=e[15];return g*(+r*c*u-i*l*u-r*o*d+n*l*d+i*o*f-n*c*f)+b*(+t*c*f-t*l*d+r*a*d-i*a*f+i*l*h-r*c*h)+m*(+t*l*u-t*o*f-r*a*u+n*a*f+r*o*h-n*l*h)+p*(-i*o*h-t*c*u+t*o*d+i*a*u-n*a*d+n*c*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=e[9],d=e[10],f=e[11],g=e[12],b=e[13],m=e[14],p=e[15],v=u*m*l-b*d*l+b*c*f-o*m*f-u*c*p+o*d*p,x=g*d*l-h*m*l-g*c*f+a*m*f+h*c*p-a*d*p,_=h*b*l-g*u*l+g*o*f-a*b*f-h*o*p+a*u*p,T=g*u*c-h*b*c-g*o*d+a*b*d+h*o*m-a*u*m,w=t*v+n*x+i*_+r*T;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let C=1/w;return e[0]=v*C,e[1]=(b*d*r-u*m*r-b*i*f+n*m*f+u*i*p-n*d*p)*C,e[2]=(o*m*r-b*c*r+b*i*l-n*m*l-o*i*p+n*c*p)*C,e[3]=(u*c*r-o*d*r-u*i*l+n*d*l+o*i*f-n*c*f)*C,e[4]=x*C,e[5]=(h*m*r-g*d*r+g*i*f-t*m*f-h*i*p+t*d*p)*C,e[6]=(g*c*r-a*m*r-g*i*l+t*m*l+a*i*p-t*c*p)*C,e[7]=(a*d*r-h*c*r+h*i*l-t*d*l-a*i*f+t*c*f)*C,e[8]=_*C,e[9]=(g*u*r-h*b*r-g*n*f+t*b*f+h*n*p-t*u*p)*C,e[10]=(a*b*r-g*o*r+g*n*l-t*b*l-a*n*p+t*o*p)*C,e[11]=(h*o*r-a*u*r-h*n*l+t*u*l+a*n*f-t*o*f)*C,e[12]=T*C,e[13]=(h*b*i-g*u*i+g*n*d-t*b*d-h*n*m+t*u*m)*C,e[14]=(g*o*i-a*b*i-g*n*c+t*b*c+a*n*m-t*o*m)*C,e[15]=(a*u*i-h*o*i+h*n*c-t*u*c-a*n*d+t*o*d)*C,this}scale(e){let t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),r=1-n,a=e.x,o=e.y,c=e.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-i*c,l*c+i*o,0,l*o+i*c,h*o+n,h*c-i*a,0,l*c-i*o,h*c+i*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,a){return this.set(1,n,r,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,h=a+a,u=o+o,d=r*l,f=r*h,g=r*u,b=a*h,m=a*u,p=o*u,v=c*l,x=c*h,_=c*u,T=n.x,w=n.y,C=n.z;return i[0]=(1-(b+p))*T,i[1]=(f+_)*T,i[2]=(g-x)*T,i[3]=0,i[4]=(f-_)*w,i[5]=(1-(d+p))*w,i[6]=(m+v)*w,i[7]=0,i[8]=(g+x)*C,i[9]=(m-v)*C,i[10]=(1-(d+b))*C,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements,r=ns.set(i[0],i[1],i[2]).length(),a=ns.set(i[4],i[5],i[6]).length(),o=ns.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],dn.copy(this);let l=1/r,h=1/a,u=1/o;return dn.elements[0]*=l,dn.elements[1]*=l,dn.elements[2]*=l,dn.elements[4]*=h,dn.elements[5]*=h,dn.elements[6]*=h,dn.elements[8]*=u,dn.elements[9]*=u,dn.elements[10]*=u,t.setFromRotationMatrix(dn),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,i,r,a,o=rn,c=!1){let l=this.elements,h=2*r/(t-e),u=2*r/(n-i),d=(t+e)/(t-e),f=(n+i)/(n-i),g,b;if(c)g=r/(a-r),b=a*r/(a-r);else if(o===rn)g=-(a+r)/(a-r),b=-2*a*r/(a-r);else if(o===gr)g=-a/(a-r),b=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=b,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,r,a,o=rn,c=!1){let l=this.elements,h=2/(t-e),u=2/(n-i),d=-(t+e)/(t-e),f=-(n+i)/(n-i),g,b;if(c)g=1/(a-r),b=a/(a-r);else if(o===rn)g=-2/(a-r),b=-(a+r)/(a-r);else if(o===gr)g=-1/(a-r),b=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=u,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=g,l[14]=b,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},ns=new R,dn=new ze,cp=new R(0,0,0),lp=new R(1,1,1),ai=new R,ca=new R,Kt=new R,uu=new ze,du=new on,Zt=class s{constructor(e=0,t=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,r=i[0],a=i[4],o=i[8],c=i[1],l=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(Ye(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ye(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ye(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Ye(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Ye(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Ye(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return uu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(uu,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return du.setFromEuler(this),this.setFromQuaternion(du,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Zt.DEFAULT_ORDER="XYZ";var _r=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},hp=0,fu=new R,is=new on,Vn=new ze,la=new R,tr=new R,up=new R,dp=new on,pu=new R(1,0,0),mu=new R(0,1,0),gu=new R(0,0,1),bu={type:"added"},fp={type:"removed"},ss={type:"childadded",child:null},tl={type:"childremoved",child:null},ct=class s extends jn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:hp++}),this.uuid=an(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let e=new R,t=new Zt,n=new on,i=new R(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ze},normalMatrix:{value:new Xe}}),this.matrix=new ze,this.matrixWorld=new ze,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new _r,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return is.setFromAxisAngle(e,t),this.quaternion.multiply(is),this}rotateOnWorldAxis(e,t){return is.setFromAxisAngle(e,t),this.quaternion.premultiply(is),this}rotateX(e){return this.rotateOnAxis(pu,e)}rotateY(e){return this.rotateOnAxis(mu,e)}rotateZ(e){return this.rotateOnAxis(gu,e)}translateOnAxis(e,t){return fu.copy(e).applyQuaternion(this.quaternion),this.position.add(fu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(pu,e)}translateY(e){return this.translateOnAxis(mu,e)}translateZ(e){return this.translateOnAxis(gu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Vn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?la.copy(e):la.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),tr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Vn.lookAt(tr,la,this.up):Vn.lookAt(la,tr,this.up),this.quaternion.setFromRotationMatrix(Vn),i&&(Vn.extractRotation(i.matrixWorld),is.setFromRotationMatrix(Vn),this.quaternion.premultiply(is.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(bu),ss.child=e,this.dispatchEvent(ss),ss.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(fp),tl.child=e,this.dispatchEvent(tl),tl.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Vn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Vn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Vn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(bu),ss.child=e,this.dispatchEvent(ss),ss.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(tr,e,up),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(tr,dp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));i.material=o}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];i.animations.push(r(e.animations,c))}}if(t){let o=a(e.geometries),c=a(e.materials),l=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),f=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}};ct.DEFAULT_UP=new R(0,1,0);ct.DEFAULT_MATRIX_AUTO_UPDATE=!0;ct.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var fn=new R,Gn=new R,nl=new R,Wn=new R,rs=new R,as=new R,_u=new R,il=new R,sl=new R,rl=new R,al=new et,ol=new et,cl=new et,An=class s{constructor(e=new R,t=new R,n=new R){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),fn.subVectors(e,t),i.cross(fn);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){fn.subVectors(i,t),Gn.subVectors(n,t),nl.subVectors(e,t);let a=fn.dot(fn),o=fn.dot(Gn),c=fn.dot(nl),l=Gn.dot(Gn),h=Gn.dot(nl),u=a*l-o*o;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(l*c-o*h)*d,g=(a*h-o*c)*d;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Wn)===null?!1:Wn.x>=0&&Wn.y>=0&&Wn.x+Wn.y<=1}static getInterpolation(e,t,n,i,r,a,o,c){return this.getBarycoord(e,t,n,i,Wn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Wn.x),c.addScaledVector(a,Wn.y),c.addScaledVector(o,Wn.z),c)}static getInterpolatedAttribute(e,t,n,i,r,a){return al.setScalar(0),ol.setScalar(0),cl.setScalar(0),al.fromBufferAttribute(e,t),ol.fromBufferAttribute(e,n),cl.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(al,r.x),a.addScaledVector(ol,r.y),a.addScaledVector(cl,r.z),a}static isFrontFacing(e,t,n,i){return fn.subVectors(n,t),Gn.subVectors(e,t),fn.cross(Gn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return fn.subVectors(this.c,this.b),Gn.subVectors(this.a,this.b),fn.cross(Gn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return s.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return s.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return s.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return s.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return s.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,r=this.c,a,o;rs.subVectors(i,n),as.subVectors(r,n),il.subVectors(e,n);let c=rs.dot(il),l=as.dot(il);if(c<=0&&l<=0)return t.copy(n);sl.subVectors(e,i);let h=rs.dot(sl),u=as.dot(sl);if(h>=0&&u<=h)return t.copy(i);let d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return a=c/(c-h),t.copy(n).addScaledVector(rs,a);rl.subVectors(e,r);let f=rs.dot(rl),g=as.dot(rl);if(g>=0&&f<=g)return t.copy(r);let b=f*l-c*g;if(b<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(n).addScaledVector(as,o);let m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return _u.subVectors(r,i),o=(u-h)/(u-h+(f-g)),t.copy(i).addScaledVector(_u,o);let p=1/(m+b+d);return a=b*p,o=d*p,t.copy(n).addScaledVector(rs,a).addScaledVector(as,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Xd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},oi={h:0,s:0,l:0},ha={h:0,s:0,l:0};function ll(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}var Ee=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=gt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Je.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=Je.workingColorSpace){return this.r=e,this.g=t,this.b=n,Je.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=Je.workingColorSpace){if(e=nh(e,1),t=Ye(t,0,1),n=Ye(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=ll(a,r,e+1/3),this.g=ll(a,r,e),this.b=ll(a,r,e-1/3)}return Je.colorSpaceToWorking(this,i),this}setStyle(e,t=gt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=gt){let n=Xd[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=qn(e.r),this.g=qn(e.g),this.b=qn(e.b),this}copyLinearToSRGB(e){return this.r=_s(e.r),this.g=_s(e.g),this.b=_s(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=gt){return Je.workingToColorSpace(Dt.copy(this),e),Math.round(Ye(Dt.r*255,0,255))*65536+Math.round(Ye(Dt.g*255,0,255))*256+Math.round(Ye(Dt.b*255,0,255))}getHexString(e=gt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Je.workingColorSpace){Je.workingToColorSpace(Dt.copy(this),t);let n=Dt.r,i=Dt.g,r=Dt.b,a=Math.max(n,i,r),o=Math.min(n,i,r),c,l,h=(o+a)/2;if(o===a)c=0,l=0;else{let u=a-o;switch(l=h<=.5?u/(a+o):u/(2-a-o),a){case n:c=(i-r)/u+(i<r?6:0);break;case i:c=(r-n)/u+2;break;case r:c=(n-i)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=Je.workingColorSpace){return Je.workingToColorSpace(Dt.copy(this),t),e.r=Dt.r,e.g=Dt.g,e.b=Dt.b,e}getStyle(e=gt){Je.workingToColorSpace(Dt.copy(this),e);let t=Dt.r,n=Dt.g,i=Dt.b;return e!==gt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(oi),this.setHSL(oi.h+e,oi.s+t,oi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(oi),e.getHSL(ha);let n=dr(oi.h,ha.h,t),i=dr(oi.s,ha.s,t),r=dr(oi.l,ha.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Dt=new Ee;Ee.NAMES=Xd;var pp=0,vt=class extends jn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:pp++}),this.uuid=an(),this.name="",this.type="Material",this.blending=Li,this.side=bn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=za,this.blendDst=Ha,this.blendEquation=li,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ee(0,0,0),this.blendAlpha=0,this.depthFunc=Di,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Il,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Pi,this.stencilZFail=Pi,this.stencilZPass=Pi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Li&&(n.blending=this.blending),this.side!==bn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==za&&(n.blendSrc=this.blendSrc),this.blendDst!==Ha&&(n.blendDst=this.blendDst),this.blendEquation!==li&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Di&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Il&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Pi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Pi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Pi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(t){let r=i(e.textures),a=i(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Xt=class extends vt{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ee(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zt,this.combine=Vr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Tt=new R,ua=new ie,mp=0,ft=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:mp++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Va,this.updateRanges=[],this.gpuType=Wt,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ua.fromBufferAttribute(this,t),ua.applyMatrix3(e),this.setXY(t,ua.x,ua.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Tt.fromBufferAttribute(this,t),Tt.applyMatrix3(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Tt.fromBufferAttribute(this,t),Tt.applyMatrix4(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Tt.fromBufferAttribute(this,t),Tt.applyNormalMatrix(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Tt.fromBufferAttribute(this,t),Tt.transformDirection(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=pn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=rt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=pn(t,this.array)),t}setX(e,t){return this.normalized&&(t=rt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=pn(t,this.array)),t}setY(e,t){return this.normalized&&(t=rt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=pn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=rt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=pn(t,this.array)),t}setW(e,t){return this.normalized&&(t=rt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=rt(t,this.array),n=rt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=rt(t,this.array),n=rt(n,this.array),i=rt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=rt(t,this.array),n=rt(n,this.array),i=rt(i,this.array),r=rt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Va&&(e.usage=this.usage),e}};var xr=class extends ft{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var vr=class extends ft{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Ne=class extends ft{constructor(e,t,n){super(new Float32Array(e),t,n)}},gp=0,sn=new ze,hl=new ct,os=new R,Jt=new Mt,nr=new Mt,Ct=new R,nt=class s extends jn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:gp++}),this.uuid=an(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ih(e)?vr:xr)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Xe().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return sn.makeRotationFromQuaternion(e),this.applyMatrix4(sn),this}rotateX(e){return sn.makeRotationX(e),this.applyMatrix4(sn),this}rotateY(e){return sn.makeRotationY(e),this.applyMatrix4(sn),this}rotateZ(e){return sn.makeRotationZ(e),this.applyMatrix4(sn),this}translate(e,t,n){return sn.makeTranslation(e,t,n),this.applyMatrix4(sn),this}scale(e,t,n){return sn.makeScale(e,t,n),this.applyMatrix4(sn),this}lookAt(e){return hl.lookAt(e),hl.updateMatrix(),this.applyMatrix4(hl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(os).negate(),this.translate(os.x,os.y,os.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let i=0,r=e.length;i<r;i++){let a=e[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Ne(n,3))}else{let n=Math.min(e.length,t.count);for(let i=0;i<n;i++){let r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Mt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let r=t[n];Jt.setFromBufferAttribute(r),this.morphTargetsRelative?(Ct.addVectors(this.boundingBox.min,Jt.min),this.boundingBox.expandByPoint(Ct),Ct.addVectors(this.boundingBox.max,Jt.max),this.boundingBox.expandByPoint(Ct)):(this.boundingBox.expandByPoint(Jt.min),this.boundingBox.expandByPoint(Jt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new St);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(e){let n=this.boundingSphere.center;if(Jt.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];nr.setFromBufferAttribute(o),this.morphTargetsRelative?(Ct.addVectors(Jt.min,nr.min),Jt.expandByPoint(Ct),Ct.addVectors(Jt.max,nr.max),Jt.expandByPoint(Ct)):(Jt.expandByPoint(nr.min),Jt.expandByPoint(nr.max))}Jt.getCenter(n);let i=0;for(let r=0,a=e.count;r<a;r++)Ct.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Ct));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Ct.fromBufferAttribute(o,l),c&&(os.fromBufferAttribute(e,l),Ct.add(os)),i=Math.max(i,n.distanceToSquared(Ct))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ft(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],c=[];for(let I=0;I<n.count;I++)o[I]=new R,c[I]=new R;let l=new R,h=new R,u=new R,d=new ie,f=new ie,g=new ie,b=new R,m=new R;function p(I,S,y){l.fromBufferAttribute(n,I),h.fromBufferAttribute(n,S),u.fromBufferAttribute(n,y),d.fromBufferAttribute(r,I),f.fromBufferAttribute(r,S),g.fromBufferAttribute(r,y),h.sub(l),u.sub(l),f.sub(d),g.sub(d);let P=1/(f.x*g.y-g.x*f.y);isFinite(P)&&(b.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(P),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(P),o[I].add(b),o[S].add(b),o[y].add(b),c[I].add(m),c[S].add(m),c[y].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let I=0,S=v.length;I<S;++I){let y=v[I],P=y.start,O=y.count;for(let z=P,q=P+O;z<q;z+=3)p(e.getX(z+0),e.getX(z+1),e.getX(z+2))}let x=new R,_=new R,T=new R,w=new R;function C(I){T.fromBufferAttribute(i,I),w.copy(T);let S=o[I];x.copy(S),x.sub(T.multiplyScalar(T.dot(S))).normalize(),_.crossVectors(w,S);let P=_.dot(c[I])<0?-1:1;a.setXYZW(I,x.x,x.y,x.z,P)}for(let I=0,S=v.length;I<S;++I){let y=v[I],P=y.start,O=y.count;for(let z=P,q=P+O;z<q;z+=3)C(e.getX(z+0)),C(e.getX(z+1)),C(e.getX(z+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ft(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let i=new R,r=new R,a=new R,o=new R,c=new R,l=new R,h=new R,u=new R;if(e)for(let d=0,f=e.count;d<f;d+=3){let g=e.getX(d+0),b=e.getX(d+1),m=e.getX(d+2);i.fromBufferAttribute(t,g),r.fromBufferAttribute(t,b),a.fromBufferAttribute(t,m),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,b),l.fromBufferAttribute(n,m),o.add(h),c.add(h),l.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(b,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,f=t.count;d<f;d+=3)i.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ct.fromBufferAttribute(e,t),Ct.normalize(),e.setXYZ(t,Ct.x,Ct.y,Ct.z)}toNonIndexed(){function e(o,c){let l=o.array,h=o.itemSize,u=o.normalized,d=new l.constructor(c.length*h),f=0,g=0;for(let b=0,m=c.length;b<m;b++){o.isInterleavedBufferAttribute?f=c[b]*o.data.stride+o.offset:f=c[b]*h;for(let p=0;p<h;p++)d[g++]=l[f++]}return new ft(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new s,n=this.index.array,i=this.attributes;for(let o in i){let c=i[o],l=e(c,n);t.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let h=0,u=l.length;h<u;h++){let d=l[h],f=e(d,n);c.push(f)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let i={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){let f=l[u];h.push(f.toJSON(e.data))}h.length>0&&(i[c]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let i=e.attributes;for(let l in i){let h=i[l];this.setAttribute(l,h.clone(t))}let r=e.morphAttributes;for(let l in r){let h=[],u=r[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let l=0,h=a.length;l<h;l++){let u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},xu=new ze,Ei=new Bi,da=new St,vu=new R,fa=new R,pa=new R,ma=new R,ul=new R,ga=new R,yu=new R,ba=new R,At=class extends ct{constructor(e=new nt,t=new Xt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let o=this.morphTargetInfluences;if(r&&o){ga.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=o[c],u=r[c];h!==0&&(ul.fromBufferAttribute(u,e),a?ga.addScaledVector(ul,h):ga.addScaledVector(ul.sub(t),h))}t.add(ga)}return t}raycast(e,t){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),da.copy(n.boundingSphere),da.applyMatrix4(r),Ei.copy(e.ray).recast(e.near),!(da.containsPoint(Ei.origin)===!1&&(Ei.intersectSphere(da,vu)===null||Ei.origin.distanceToSquared(vu)>(e.far-e.near)**2))&&(xu.copy(r).invert(),Ei.copy(e.ray).applyMatrix4(xu),!(n.boundingBox!==null&&Ei.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ei)))}_computeIntersections(e,t,n){let i,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,b=d.length;g<b;g++){let m=d[g],p=a[m.materialIndex],v=Math.max(m.start,f.start),x=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let _=v,T=x;_<T;_+=3){let w=o.getX(_),C=o.getX(_+1),I=o.getX(_+2);i=_a(this,p,e,n,l,h,u,w,C,I),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{let g=Math.max(0,f.start),b=Math.min(o.count,f.start+f.count);for(let m=g,p=b;m<p;m+=3){let v=o.getX(m),x=o.getX(m+1),_=o.getX(m+2);i=_a(this,a,e,n,l,h,u,v,x,_),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,b=d.length;g<b;g++){let m=d[g],p=a[m.materialIndex],v=Math.max(m.start,f.start),x=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let _=v,T=x;_<T;_+=3){let w=_,C=_+1,I=_+2;i=_a(this,p,e,n,l,h,u,w,C,I),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{let g=Math.max(0,f.start),b=Math.min(c.count,f.start+f.count);for(let m=g,p=b;m<p;m+=3){let v=m,x=m+1,_=m+2;i=_a(this,a,e,n,l,h,u,v,x,_),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}};function bp(s,e,t,n,i,r,a,o){let c;if(e.side===Ht?c=n.intersectTriangle(a,r,i,!0,o):c=n.intersectTriangle(i,r,a,e.side===bn,o),c===null)return null;ba.copy(o),ba.applyMatrix4(s.matrixWorld);let l=t.ray.origin.distanceTo(ba);return l<t.near||l>t.far?null:{distance:l,point:ba.clone(),object:s}}function _a(s,e,t,n,i,r,a,o,c,l){s.getVertexPosition(o,fa),s.getVertexPosition(c,pa),s.getVertexPosition(l,ma);let h=bp(s,e,t,n,fa,pa,ma,yu);if(h){let u=new R;An.getBarycoord(yu,fa,pa,ma,u),i&&(h.uv=An.getInterpolatedAttribute(i,o,c,l,u,new ie)),r&&(h.uv1=An.getInterpolatedAttribute(r,o,c,l,u,new ie)),a&&(h.normal=An.getInterpolatedAttribute(a,o,c,l,u,new R),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:c,c:l,normal:new R,materialIndex:0};An.getNormal(fa,pa,ma,d.normal),h.face=d,h.barycoord=u}return h}var ki=class s extends nt{constructor(e=1,t=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};let o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],h=[],u=[],d=0,f=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,i,a,2),g("x","z","y",1,-1,e,n,-t,i,a,3),g("x","y","z",1,-1,e,t,n,i,r,4),g("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new Ne(l,3)),this.setAttribute("normal",new Ne(h,3)),this.setAttribute("uv",new Ne(u,2));function g(b,m,p,v,x,_,T,w,C,I,S){let y=_/C,P=T/I,O=_/2,z=T/2,q=w/2,K=C+1,X=I+1,ae=0,W=0,me=new R;for(let xe=0;xe<X;xe++){let Te=xe*P-z;for(let Ve=0;Ve<K;Ve++){let qe=Ve*y-O;me[b]=qe*v,me[m]=Te*x,me[p]=q,l.push(me.x,me.y,me.z),me[b]=0,me[m]=0,me[p]=w>0?1:-1,h.push(me.x,me.y,me.z),u.push(Ve/C),u.push(1-xe/I),ae+=1}}for(let xe=0;xe<I;xe++)for(let Te=0;Te<C;Te++){let Ve=d+Te+K*xe,qe=d+Te+K*(xe+1),Qe=d+(Te+1)+K*(xe+1),Ge=d+(Te+1)+K*xe;c.push(Ve,qe,Ge),c.push(qe,Qe,Ge),W+=6}o.addGroup(f,W,S),f+=W,d+=ae}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Xi(s){let e={};for(let t in s){e[t]={};for(let n in s[t]){let i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Ft(s){let e={};for(let t=0;t<s.length;t++){let n=Xi(s[t]);for(let i in n)e[i]=n[i]}return e}function _p(s){let e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function sh(s){let e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Je.workingColorSpace}var qd={clone:Xi,merge:Ft},xp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,vp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,$t=class extends vt{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=xp,this.fragmentShader=vp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Xi(e.uniforms),this.uniformsGroups=_p(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},yr=class extends ct{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ze,this.projectionMatrix=new ze,this.projectionMatrixInverse=new ze,this.coordinateSystem=rn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},ci=new R,Mu=new ie,Su=new ie,yt=class extends yr{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Oi*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(bs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Oi*2*Math.atan(Math.tan(bs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ci.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ci.x,ci.y).multiplyScalar(-e/ci.z),ci.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ci.x,ci.y).multiplyScalar(-e/ci.z)}getViewSize(e,t){return this.getViewBounds(e,Mu,Su),t.subVectors(Su,Mu)}setViewOffset(e,t,n,i,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(bs*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*i/c,t-=a.offsetY*n/l,i*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},cs=-90,ls=1,qa=class extends ct{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new yt(cs,ls,e,t);i.layers=this.layers,this.add(i);let r=new yt(cs,ls,e,t);r.layers=this.layers,this.add(r);let a=new yt(cs,ls,e,t);a.layers=this.layers,this.add(a);let o=new yt(cs,ls,e,t);o.layers=this.layers,this.add(o);let c=new yt(cs,ls,e,t);c.layers=this.layers,this.add(c);let l=new yt(cs,ls,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,i,r,a,o,c]=t;for(let l of t)this.remove(l);if(e===rn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===gr)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,l,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let b=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,c),e.setRenderTarget(n,4,i),e.render(t,l),n.texture.generateMipmaps=b,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Ms=class extends wt{constructor(e=[],t=_i,n,i,r,a,o,c,l,h){super(e,t,n,i,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Ya=class extends Cn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Ms(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new ki(5,5,5),r=new $t({name:"CubemapFromEquirect",uniforms:Xi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ht,blending:$n});r.uniforms.tEquirect.value=t;let a=new At(i,r),o=t.minFilter;return t.minFilter===ln&&(t.minFilter=Nt),new qa(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(r)}},_t=class extends ct{constructor(){super(),this.isGroup=!0,this.type="Group"}},yp={type:"move"},Ss=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new _t,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new _t,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new _t,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(let b of e.hand.values()){let m=t.getJointPose(b,n),p=this._getHandJoint(l,b);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;l.inputState.pinching&&d>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(yp)))}return o!==null&&(o.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new _t;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},ja=class s{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ee(e),this.density=t}clone(){return new s(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}},Ka=class s{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ee(e),this.near=t,this.far=n}clone(){return new s(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Ts=class extends ct{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Zt,this.environmentIntensity=1,this.environmentRotation=new Zt,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},hi=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Va,this.updateRanges=[],this.version=0,this.uuid=an()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=an()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=an()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Bt=new R,In=class s{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.applyMatrix4(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.applyNormalMatrix(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.transformDirection(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=pn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=rt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=rt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=rt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=rt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=rt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=pn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=pn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=pn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=pn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=rt(t,this.array),n=rt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=rt(t,this.array),n=rt(n,this.array),i=rt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=rt(t,this.array),n=rt(n,this.array),i=rt(i,this.array),r=rt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new ft(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new s(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Mr=class extends vt{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ee(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},hs,ir=new R,us=new R,ds=new R,fs=new ie,sr=new ie,Yd=new ze,xa=new R,rr=new R,va=new R,Tu=new ie,dl=new ie,Au=new ie,Ja=class extends ct{constructor(e=new Mr){if(super(),this.isSprite=!0,this.type="Sprite",hs===void 0){hs=new nt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new hi(t,5);hs.setIndex([0,1,2,0,2,3]),hs.setAttribute("position",new In(n,3,0,!1)),hs.setAttribute("uv",new In(n,2,3,!1))}this.geometry=hs,this.material=e,this.center=new ie(.5,.5),this.count=1}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),us.setFromMatrixScale(this.matrixWorld),Yd.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),ds.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&us.multiplyScalar(-ds.z);let n=this.material.rotation,i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));let a=this.center;ya(xa.set(-.5,-.5,0),ds,a,us,i,r),ya(rr.set(.5,-.5,0),ds,a,us,i,r),ya(va.set(.5,.5,0),ds,a,us,i,r),Tu.set(0,0),dl.set(1,0),Au.set(1,1);let o=e.ray.intersectTriangle(xa,rr,va,!1,ir);if(o===null&&(ya(rr.set(-.5,.5,0),ds,a,us,i,r),dl.set(0,1),o=e.ray.intersectTriangle(xa,va,rr,!1,ir),o===null))return;let c=e.ray.origin.distanceTo(ir);c<e.near||c>e.far||t.push({distance:c,point:ir.clone(),uv:An.getInterpolation(ir,xa,rr,va,Tu,dl,Au,new ie),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function ya(s,e,t,n,i,r){fs.subVectors(s,t).addScalar(.5).multiply(n),i!==void 0?(sr.x=r*fs.x-i*fs.y,sr.y=i*fs.x+r*fs.y):sr.copy(fs),s.copy(e),s.x+=sr.x,s.y+=sr.y,s.applyMatrix4(Yd)}var Ma=new R,wu=new R,Za=class extends ct{constructor(){super(),this.isLOD=!0,this._currentLevel=0,this.type="LOD",Object.defineProperties(this,{levels:{enumerable:!0,value:[]}}),this.autoUpdate=!0}copy(e){super.copy(e,!1);let t=e.levels;for(let n=0,i=t.length;n<i;n++){let r=t[n];this.addLevel(r.object.clone(),r.distance,r.hysteresis)}return this.autoUpdate=e.autoUpdate,this}addLevel(e,t=0,n=0){t=Math.abs(t);let i=this.levels,r;for(r=0;r<i.length&&!(t<i[r].distance);r++);return i.splice(r,0,{distance:t,hysteresis:n,object:e}),this.add(e),this}removeLevel(e){let t=this.levels;for(let n=0;n<t.length;n++)if(t[n].distance===e){let i=t.splice(n,1);return this.remove(i[0].object),!0}return!1}getCurrentLevel(){return this._currentLevel}getObjectForDistance(e){let t=this.levels;if(t.length>0){let n,i;for(n=1,i=t.length;n<i;n++){let r=t[n].distance;if(t[n].object.visible&&(r-=r*t[n].hysteresis),e<r)break}return t[n-1].object}return null}raycast(e,t){if(this.levels.length>0){Ma.setFromMatrixPosition(this.matrixWorld);let i=e.ray.origin.distanceTo(Ma);this.getObjectForDistance(i).raycast(e,t)}}update(e){let t=this.levels;if(t.length>1){Ma.setFromMatrixPosition(e.matrixWorld),wu.setFromMatrixPosition(this.matrixWorld);let n=Ma.distanceTo(wu)/e.zoom;t[0].object.visible=!0;let i,r;for(i=1,r=t.length;i<r;i++){let a=t[i].distance;if(t[i].object.visible&&(a-=a*t[i].hysteresis),n>=a)t[i-1].object.visible=!1,t[i].object.visible=!0;else break}for(this._currentLevel=i-1;i<r;i++)t[i].object.visible=!1}}toJSON(e){let t=super.toJSON(e);this.autoUpdate===!1&&(t.object.autoUpdate=!1),t.object.levels=[];let n=this.levels;for(let i=0,r=n.length;i<r;i++){let a=n[i];t.object.levels.push({object:a.object.uuid,distance:a.distance,hysteresis:a.hysteresis})}return t}},Eu=new R,Ru=new et,Cu=new et,Mp=new R,Iu=new ze,Sa=new R,fl=new St,Pu=new ze,pl=new Bi,As=class extends At{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=wl,this.bindMatrix=new ze,this.bindMatrixInverse=new ze,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Mt),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Sa),this.boundingBox.expandByPoint(Sa)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new St),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Sa),this.boundingSphere.expandByPoint(Sa)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),fl.copy(this.boundingSphere),fl.applyMatrix4(i),e.ray.intersectsSphere(fl)!==!1&&(Pu.copy(i).invert(),pl.copy(e.ray).applyMatrix4(Pu),!(this.boundingBox!==null&&pl.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,pl)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new et,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===wl?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Pd?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,i=this.geometry;Ru.fromBufferAttribute(i.attributes.skinIndex,e),Cu.fromBufferAttribute(i.attributes.skinWeight,e),Eu.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){let a=Cu.getComponent(r);if(a!==0){let o=Ru.getComponent(r);Iu.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(Mp.copy(Eu).applyMatrix4(Iu),a)}}return t.applyMatrix4(this.bindMatrixInverse)}},zi=class extends ct{constructor(){super(),this.isBone=!0,this.type="Bone"}},gn=class extends wt{constructor(e=null,t=1,n=1,i,r,a,o,c,l=It,h=It,u,d){super(null,a,o,c,l,h,i,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Lu=new ze,Sp=new ze,ws=class s{constructor(e=[],t=[]){this.uuid=an(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new ze)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new ze;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,a=e.length;r<a;r++){let o=e[r]?e[r].matrixWorld:Sp;Lu.multiplyMatrices(o,t[r]),Lu.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new s(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new gn(t,e,e,kt,Wt);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){let r=e.bones[n],a=t[r];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),a=new zi),this.bones.push(a),this.boneInverses.push(new ze().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){let a=t[i];e.bones.push(a.uuid);let o=n[i];e.boneInverses.push(o.toArray())}return e}},_n=class extends ft{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},ps=new ze,Du=new ze,Ta=[],Uu=new Mt,Tp=new ze,ar=new At,or=new St,Es=class extends At{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new _n(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Tp)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Mt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ps),Uu.copy(e.boundingBox).applyMatrix4(ps),this.boundingBox.union(Uu)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new St),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ps),or.copy(e.boundingSphere).applyMatrix4(ps),this.boundingSphere.union(or)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(e,t){let n=this.matrixWorld,i=this.count;if(ar.geometry=this.geometry,ar.material=this.material,ar.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),or.copy(this.boundingSphere),or.applyMatrix4(n),e.ray.intersectsSphere(or)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,ps),Du.multiplyMatrices(n,ps),ar.matrixWorld=Du,ar.raycast(e,Ta);for(let a=0,o=Ta.length;a<o;a++){let c=Ta[a];c.instanceId=r,c.object=this,t.push(c)}Ta.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new _n(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new gn(new Float32Array(i*this.count),i,this.count,sc,Wt));let r=this.morphTexture.source.data.data,a=0;for(let l=0;l<n.length;l++)a+=n[l];let o=this.geometry.morphTargetsRelative?1:1-a,c=i*e;r[c]=o,r.set(n,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},ml=new R,Ap=new R,wp=new Xe,Tn=class{constructor(e=new R(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=ml.subVectors(n,t).cross(Ap.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(ml),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||wp.getNormalMatrix(e),i=this.coplanarPoint(ml).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ri=new St,Ep=new ie(.5,.5),Aa=new R,ui=class{constructor(e=new Tn,t=new Tn,n=new Tn,i=new Tn,r=new Tn,a=new Tn){this.planes=[e,t,n,i,r,a]}set(e,t,n,i,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=rn,n=!1){let i=this.planes,r=e.elements,a=r[0],o=r[1],c=r[2],l=r[3],h=r[4],u=r[5],d=r[6],f=r[7],g=r[8],b=r[9],m=r[10],p=r[11],v=r[12],x=r[13],_=r[14],T=r[15];if(i[0].setComponents(l-a,f-h,p-g,T-v).normalize(),i[1].setComponents(l+a,f+h,p+g,T+v).normalize(),i[2].setComponents(l+o,f+u,p+b,T+x).normalize(),i[3].setComponents(l-o,f-u,p-b,T-x).normalize(),n)i[4].setComponents(c,d,m,_).normalize(),i[5].setComponents(l-c,f-d,p-m,T-_).normalize();else if(i[4].setComponents(l-c,f-d,p-m,T-_).normalize(),t===rn)i[5].setComponents(l+c,f+d,p+m,T+_).normalize();else if(t===gr)i[5].setComponents(c,d,m,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ri.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ri.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ri)}intersectsSprite(e){Ri.center.set(0,0,0);let t=Ep.distanceTo(e.center);return Ri.radius=.7071067811865476+t,Ri.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ri)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(Aa.x=i.normal.x>0?e.max.x:e.min.x,Aa.y=i.normal.y>0?e.max.y:e.min.y,Aa.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Aa)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Mn=new ze,Sn=new ui,$a=class s{constructor(){this.coordinateSystem=rn}intersectsObject(e,t){if(!t.isArrayCamera||t.cameras.length===0)return!1;for(let n=0;n<t.cameras.length;n++){let i=t.cameras[n];if(Mn.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),Sn.setFromProjectionMatrix(Mn,i.coordinateSystem,i.reversedDepth),Sn.intersectsObject(e))return!0}return!1}intersectsSprite(e,t){if(!t||!t.cameras||t.cameras.length===0)return!1;for(let n=0;n<t.cameras.length;n++){let i=t.cameras[n];if(Mn.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),Sn.setFromProjectionMatrix(Mn,i.coordinateSystem,i.reversedDepth),Sn.intersectsSprite(e))return!0}return!1}intersectsSphere(e,t){if(!t||!t.cameras||t.cameras.length===0)return!1;for(let n=0;n<t.cameras.length;n++){let i=t.cameras[n];if(Mn.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),Sn.setFromProjectionMatrix(Mn,i.coordinateSystem,i.reversedDepth),Sn.intersectsSphere(e))return!0}return!1}intersectsBox(e,t){if(!t||!t.cameras||t.cameras.length===0)return!1;for(let n=0;n<t.cameras.length;n++){let i=t.cameras[n];if(Mn.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),Sn.setFromProjectionMatrix(Mn,i.coordinateSystem,i.reversedDepth),Sn.intersectsBox(e))return!0}return!1}containsPoint(e,t){if(!t||!t.cameras||t.cameras.length===0)return!1;for(let n=0;n<t.cameras.length;n++){let i=t.cameras[n];if(Mn.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),Sn.setFromProjectionMatrix(Mn,i.coordinateSystem,i.reversedDepth),Sn.containsPoint(e))return!0}return!1}clone(){return new s}};function gl(s,e){return s-e}function Rp(s,e){return s.z-e.z}function Cp(s,e){return e.z-s.z}var Pl=class{constructor(){this.index=0,this.pool=[],this.list=[]}push(e,t,n,i){let r=this.pool,a=this.list;this.index>=r.length&&r.push({start:-1,count:-1,z:-1,index:-1});let o=r[this.index];a.push(o),this.index++,o.start=e,o.count=t,o.z=n,o.index=i}reset(){this.list.length=0,this.index=0}},Gt=new ze,Ip=new Ee(1,1,1),Nu=new ui,Pp=new $a,wa=new Mt,Ci=new St,cr=new R,Fu=new R,Lp=new R,bl=new Pl,Ut=new At,Ea=[];function Dp(s,e,t=0){let n=e.itemSize;if(s.isInterleavedBufferAttribute||s.array.constructor!==e.array.constructor){let i=s.count;for(let r=0;r<i;r++)for(let a=0;a<n;a++)e.setComponent(r+t,a,s.getComponent(r,a))}else e.array.set(s.array,t*n);e.needsUpdate=!0}function Ii(s,e){if(s.constructor!==e.constructor){let t=Math.min(s.length,e.length);for(let n=0;n<t;n++)e[n]=s[n]}else{let t=Math.min(s.length,e.length);e.set(new s.constructor(s.buffer,0,t))}}var Qa=class extends At{constructor(e,t,n=t*2,i){super(new nt,i),this.isBatchedMesh=!0,this.perObjectFrustumCulled=!0,this.sortObjects=!0,this.boundingBox=null,this.boundingSphere=null,this.customSort=null,this._instanceInfo=[],this._geometryInfo=[],this._availableInstanceIds=[],this._availableGeometryIds=[],this._nextIndexStart=0,this._nextVertexStart=0,this._geometryCount=0,this._visibilityChanged=!0,this._geometryInitialized=!1,this._maxInstanceCount=e,this._maxVertexCount=t,this._maxIndexCount=n,this._multiDrawCounts=new Int32Array(e),this._multiDrawStarts=new Int32Array(e),this._multiDrawCount=0,this._multiDrawInstances=null,this._matricesTexture=null,this._indirectTexture=null,this._colorsTexture=null,this._initMatricesTexture(),this._initIndirectTexture()}get maxInstanceCount(){return this._maxInstanceCount}get instanceCount(){return this._instanceInfo.length-this._availableInstanceIds.length}get unusedVertexCount(){return this._maxVertexCount-this._nextVertexStart}get unusedIndexCount(){return this._maxIndexCount-this._nextIndexStart}_initMatricesTexture(){let e=Math.sqrt(this._maxInstanceCount*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4),n=new gn(t,e,e,kt,Wt);this._matricesTexture=n}_initIndirectTexture(){let e=Math.sqrt(this._maxInstanceCount);e=Math.ceil(e);let t=new Uint32Array(e*e),n=new gn(t,e,e,qr,ei);this._indirectTexture=n}_initColorsTexture(){let e=Math.sqrt(this._maxInstanceCount);e=Math.ceil(e);let t=new Float32Array(e*e*4).fill(1),n=new gn(t,e,e,kt,Wt);n.colorSpace=Je.workingColorSpace,this._colorsTexture=n}_initializeGeometry(e){let t=this.geometry,n=this._maxVertexCount,i=this._maxIndexCount;if(this._geometryInitialized===!1){for(let r in e.attributes){let a=e.getAttribute(r),{array:o,itemSize:c,normalized:l}=a,h=new o.constructor(n*c),u=new ft(h,c,l);t.setAttribute(r,u)}if(e.getIndex()!==null){let r=n>65535?new Uint32Array(i):new Uint16Array(i);t.setIndex(new ft(r,1))}this._geometryInitialized=!0}}_validateGeometry(e){let t=this.geometry;if(!!e.getIndex()!=!!t.getIndex())throw new Error('THREE.BatchedMesh: All geometries must consistently have "index".');for(let n in t.attributes){if(!e.hasAttribute(n))throw new Error(`THREE.BatchedMesh: Added geometry missing "${n}". All geometries must have consistent attributes.`);let i=e.getAttribute(n),r=t.getAttribute(n);if(i.itemSize!==r.itemSize||i.normalized!==r.normalized)throw new Error("THREE.BatchedMesh: All attributes must have a consistent itemSize and normalized value.")}}validateInstanceId(e){let t=this._instanceInfo;if(e<0||e>=t.length||t[e].active===!1)throw new Error(`THREE.BatchedMesh: Invalid instanceId ${e}. Instance is either out of range or has been deleted.`)}validateGeometryId(e){let t=this._geometryInfo;if(e<0||e>=t.length||t[e].active===!1)throw new Error(`THREE.BatchedMesh: Invalid geometryId ${e}. Geometry is either out of range or has been deleted.`)}setCustomSort(e){return this.customSort=e,this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Mt);let e=this.boundingBox,t=this._instanceInfo;e.makeEmpty();for(let n=0,i=t.length;n<i;n++){if(t[n].active===!1)continue;let r=t[n].geometryIndex;this.getMatrixAt(n,Gt),this.getBoundingBoxAt(r,wa).applyMatrix4(Gt),e.union(wa)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new St);let e=this.boundingSphere,t=this._instanceInfo;e.makeEmpty();for(let n=0,i=t.length;n<i;n++){if(t[n].active===!1)continue;let r=t[n].geometryIndex;this.getMatrixAt(n,Gt),this.getBoundingSphereAt(r,Ci).applyMatrix4(Gt),e.union(Ci)}}addInstance(e){if(this._instanceInfo.length>=this.maxInstanceCount&&this._availableInstanceIds.length===0)throw new Error("THREE.BatchedMesh: Maximum item count reached.");let n={visible:!0,active:!0,geometryIndex:e},i=null;this._availableInstanceIds.length>0?(this._availableInstanceIds.sort(gl),i=this._availableInstanceIds.shift(),this._instanceInfo[i]=n):(i=this._instanceInfo.length,this._instanceInfo.push(n));let r=this._matricesTexture;Gt.identity().toArray(r.image.data,i*16),r.needsUpdate=!0;let a=this._colorsTexture;return a&&(Ip.toArray(a.image.data,i*4),a.needsUpdate=!0),this._visibilityChanged=!0,i}addGeometry(e,t=-1,n=-1){this._initializeGeometry(e),this._validateGeometry(e);let i={vertexStart:-1,vertexCount:-1,reservedVertexCount:-1,indexStart:-1,indexCount:-1,reservedIndexCount:-1,start:-1,count:-1,boundingBox:null,boundingSphere:null,active:!0},r=this._geometryInfo;i.vertexStart=this._nextVertexStart,i.reservedVertexCount=t===-1?e.getAttribute("position").count:t;let a=e.getIndex();if(a!==null&&(i.indexStart=this._nextIndexStart,i.reservedIndexCount=n===-1?a.count:n),i.indexStart!==-1&&i.indexStart+i.reservedIndexCount>this._maxIndexCount||i.vertexStart+i.reservedVertexCount>this._maxVertexCount)throw new Error("THREE.BatchedMesh: Reserved space request exceeds the maximum buffer size.");let c;return this._availableGeometryIds.length>0?(this._availableGeometryIds.sort(gl),c=this._availableGeometryIds.shift(),r[c]=i):(c=this._geometryCount,this._geometryCount++,r.push(i)),this.setGeometryAt(c,e),this._nextIndexStart=i.indexStart+i.reservedIndexCount,this._nextVertexStart=i.vertexStart+i.reservedVertexCount,c}setGeometryAt(e,t){if(e>=this._geometryCount)throw new Error("THREE.BatchedMesh: Maximum geometry count reached.");this._validateGeometry(t);let n=this.geometry,i=n.getIndex()!==null,r=n.getIndex(),a=t.getIndex(),o=this._geometryInfo[e];if(i&&a.count>o.reservedIndexCount||t.attributes.position.count>o.reservedVertexCount)throw new Error("THREE.BatchedMesh: Reserved space not large enough for provided geometry.");let c=o.vertexStart,l=o.reservedVertexCount;o.vertexCount=t.getAttribute("position").count;for(let h in n.attributes){let u=t.getAttribute(h),d=n.getAttribute(h);Dp(u,d,c);let f=u.itemSize;for(let g=u.count,b=l;g<b;g++){let m=c+g;for(let p=0;p<f;p++)d.setComponent(m,p,0)}d.needsUpdate=!0,d.addUpdateRange(c*f,l*f)}if(i){let h=o.indexStart,u=o.reservedIndexCount;o.indexCount=t.getIndex().count;for(let d=0;d<a.count;d++)r.setX(h+d,c+a.getX(d));for(let d=a.count,f=u;d<f;d++)r.setX(h+d,c);r.needsUpdate=!0,r.addUpdateRange(h,o.reservedIndexCount)}return o.start=i?o.indexStart:o.vertexStart,o.count=i?o.indexCount:o.vertexCount,o.boundingBox=null,t.boundingBox!==null&&(o.boundingBox=t.boundingBox.clone()),o.boundingSphere=null,t.boundingSphere!==null&&(o.boundingSphere=t.boundingSphere.clone()),this._visibilityChanged=!0,e}deleteGeometry(e){let t=this._geometryInfo;if(e>=t.length||t[e].active===!1)return this;let n=this._instanceInfo;for(let i=0,r=n.length;i<r;i++)n[i].active&&n[i].geometryIndex===e&&this.deleteInstance(i);return t[e].active=!1,this._availableGeometryIds.push(e),this._visibilityChanged=!0,this}deleteInstance(e){return this.validateInstanceId(e),this._instanceInfo[e].active=!1,this._availableInstanceIds.push(e),this._visibilityChanged=!0,this}optimize(){let e=0,t=0,n=this._geometryInfo,i=n.map((a,o)=>o).sort((a,o)=>n[a].vertexStart-n[o].vertexStart),r=this.geometry;for(let a=0,o=n.length;a<o;a++){let c=i[a],l=n[c];if(l.active!==!1){if(r.index!==null){if(l.indexStart!==t){let{indexStart:h,vertexStart:u,reservedIndexCount:d}=l,f=r.index,g=f.array,b=e-u;for(let m=h;m<h+d;m++)g[m]=g[m]+b;f.array.copyWithin(t,h,h+d),f.addUpdateRange(t,d),l.indexStart=t}t+=l.reservedIndexCount}if(l.vertexStart!==e){let{vertexStart:h,reservedVertexCount:u}=l,d=r.attributes;for(let f in d){let g=d[f],{array:b,itemSize:m}=g;b.copyWithin(e*m,h*m,(h+u)*m),g.addUpdateRange(e*m,u*m)}l.vertexStart=e}e+=l.reservedVertexCount,l.start=r.index?l.indexStart:l.vertexStart,this._nextIndexStart=r.index?l.indexStart+l.reservedIndexCount:0,this._nextVertexStart=l.vertexStart+l.reservedVertexCount}}return this}getBoundingBoxAt(e,t){if(e>=this._geometryCount)return null;let n=this.geometry,i=this._geometryInfo[e];if(i.boundingBox===null){let r=new Mt,a=n.index,o=n.attributes.position;for(let c=i.start,l=i.start+i.count;c<l;c++){let h=c;a&&(h=a.getX(h)),r.expandByPoint(cr.fromBufferAttribute(o,h))}i.boundingBox=r}return t.copy(i.boundingBox),t}getBoundingSphereAt(e,t){if(e>=this._geometryCount)return null;let n=this.geometry,i=this._geometryInfo[e];if(i.boundingSphere===null){let r=new St;this.getBoundingBoxAt(e,wa),wa.getCenter(r.center);let a=n.index,o=n.attributes.position,c=0;for(let l=i.start,h=i.start+i.count;l<h;l++){let u=l;a&&(u=a.getX(u)),cr.fromBufferAttribute(o,u),c=Math.max(c,r.center.distanceToSquared(cr))}r.radius=Math.sqrt(c),i.boundingSphere=r}return t.copy(i.boundingSphere),t}setMatrixAt(e,t){this.validateInstanceId(e);let n=this._matricesTexture,i=this._matricesTexture.image.data;return t.toArray(i,e*16),n.needsUpdate=!0,this}getMatrixAt(e,t){return this.validateInstanceId(e),t.fromArray(this._matricesTexture.image.data,e*16)}setColorAt(e,t){return this.validateInstanceId(e),this._colorsTexture===null&&this._initColorsTexture(),t.toArray(this._colorsTexture.image.data,e*4),this._colorsTexture.needsUpdate=!0,this}getColorAt(e,t){return this.validateInstanceId(e),t.fromArray(this._colorsTexture.image.data,e*4)}setVisibleAt(e,t){return this.validateInstanceId(e),this._instanceInfo[e].visible===t?this:(this._instanceInfo[e].visible=t,this._visibilityChanged=!0,this)}getVisibleAt(e){return this.validateInstanceId(e),this._instanceInfo[e].visible}setGeometryIdAt(e,t){return this.validateInstanceId(e),this.validateGeometryId(t),this._instanceInfo[e].geometryIndex=t,this}getGeometryIdAt(e){return this.validateInstanceId(e),this._instanceInfo[e].geometryIndex}getGeometryRangeAt(e,t={}){this.validateGeometryId(e);let n=this._geometryInfo[e];return t.vertexStart=n.vertexStart,t.vertexCount=n.vertexCount,t.reservedVertexCount=n.reservedVertexCount,t.indexStart=n.indexStart,t.indexCount=n.indexCount,t.reservedIndexCount=n.reservedIndexCount,t.start=n.start,t.count=n.count,t}setInstanceCount(e){let t=this._availableInstanceIds,n=this._instanceInfo;for(t.sort(gl);t[t.length-1]===n.length-1;)n.pop(),t.pop();if(e<n.length)throw new Error(`BatchedMesh: Instance ids outside the range ${e} are being used. Cannot shrink instance count.`);let i=new Int32Array(e),r=new Int32Array(e);Ii(this._multiDrawCounts,i),Ii(this._multiDrawStarts,r),this._multiDrawCounts=i,this._multiDrawStarts=r,this._maxInstanceCount=e;let a=this._indirectTexture,o=this._matricesTexture,c=this._colorsTexture;a.dispose(),this._initIndirectTexture(),Ii(a.image.data,this._indirectTexture.image.data),o.dispose(),this._initMatricesTexture(),Ii(o.image.data,this._matricesTexture.image.data),c&&(c.dispose(),this._initColorsTexture(),Ii(c.image.data,this._colorsTexture.image.data))}setGeometrySize(e,t){let n=[...this._geometryInfo].filter(o=>o.active);if(Math.max(...n.map(o=>o.vertexStart+o.reservedVertexCount))>e)throw new Error(`BatchedMesh: Geometry vertex values are being used outside the range ${t}. Cannot shrink further.`);if(this.geometry.index&&Math.max(...n.map(c=>c.indexStart+c.reservedIndexCount))>t)throw new Error(`BatchedMesh: Geometry index values are being used outside the range ${t}. Cannot shrink further.`);let r=this.geometry;r.dispose(),this._maxVertexCount=e,this._maxIndexCount=t,this._geometryInitialized&&(this._geometryInitialized=!1,this.geometry=new nt,this._initializeGeometry(r));let a=this.geometry;r.index&&Ii(r.index.array,a.index.array);for(let o in r.attributes)Ii(r.attributes[o].array,a.attributes[o].array)}raycast(e,t){let n=this._instanceInfo,i=this._geometryInfo,r=this.matrixWorld,a=this.geometry;Ut.material=this.material,Ut.geometry.index=a.index,Ut.geometry.attributes=a.attributes,Ut.geometry.boundingBox===null&&(Ut.geometry.boundingBox=new Mt),Ut.geometry.boundingSphere===null&&(Ut.geometry.boundingSphere=new St);for(let o=0,c=n.length;o<c;o++){if(!n[o].visible||!n[o].active)continue;let l=n[o].geometryIndex,h=i[l];Ut.geometry.setDrawRange(h.start,h.count),this.getMatrixAt(o,Ut.matrixWorld).premultiply(r),this.getBoundingBoxAt(l,Ut.geometry.boundingBox),this.getBoundingSphereAt(l,Ut.geometry.boundingSphere),Ut.raycast(e,Ea);for(let u=0,d=Ea.length;u<d;u++){let f=Ea[u];f.object=this,f.batchId=o,t.push(f)}Ea.length=0}Ut.material=null,Ut.geometry.index=null,Ut.geometry.attributes={},Ut.geometry.setDrawRange(0,1/0)}copy(e){return super.copy(e),this.geometry=e.geometry.clone(),this.perObjectFrustumCulled=e.perObjectFrustumCulled,this.sortObjects=e.sortObjects,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this._geometryInfo=e._geometryInfo.map(t=>({...t,boundingBox:t.boundingBox!==null?t.boundingBox.clone():null,boundingSphere:t.boundingSphere!==null?t.boundingSphere.clone():null})),this._instanceInfo=e._instanceInfo.map(t=>({...t})),this._availableInstanceIds=e._availableInstanceIds.slice(),this._availableGeometryIds=e._availableGeometryIds.slice(),this._nextIndexStart=e._nextIndexStart,this._nextVertexStart=e._nextVertexStart,this._geometryCount=e._geometryCount,this._maxInstanceCount=e._maxInstanceCount,this._maxVertexCount=e._maxVertexCount,this._maxIndexCount=e._maxIndexCount,this._geometryInitialized=e._geometryInitialized,this._multiDrawCounts=e._multiDrawCounts.slice(),this._multiDrawStarts=e._multiDrawStarts.slice(),this._indirectTexture=e._indirectTexture.clone(),this._indirectTexture.image.data=this._indirectTexture.image.data.slice(),this._matricesTexture=e._matricesTexture.clone(),this._matricesTexture.image.data=this._matricesTexture.image.data.slice(),this._colorsTexture!==null&&(this._colorsTexture=e._colorsTexture.clone(),this._colorsTexture.image.data=this._colorsTexture.image.data.slice()),this}dispose(){this.geometry.dispose(),this._matricesTexture.dispose(),this._matricesTexture=null,this._indirectTexture.dispose(),this._indirectTexture=null,this._colorsTexture!==null&&(this._colorsTexture.dispose(),this._colorsTexture=null)}onBeforeRender(e,t,n,i,r){if(!this._visibilityChanged&&!this.perObjectFrustumCulled&&!this.sortObjects)return;let a=i.getIndex(),o=a===null?1:a.array.BYTES_PER_ELEMENT,c=this._instanceInfo,l=this._multiDrawStarts,h=this._multiDrawCounts,u=this._geometryInfo,d=this.perObjectFrustumCulled,f=this._indirectTexture,g=f.image.data,b=n.isArrayCamera?Pp:Nu;d&&!n.isArrayCamera&&(Gt.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse).multiply(this.matrixWorld),Nu.setFromProjectionMatrix(Gt,n.coordinateSystem,n.reversedDepth));let m=0;if(this.sortObjects){Gt.copy(this.matrixWorld).invert(),cr.setFromMatrixPosition(n.matrixWorld).applyMatrix4(Gt),Fu.set(0,0,-1).transformDirection(n.matrixWorld).transformDirection(Gt);for(let x=0,_=c.length;x<_;x++)if(c[x].visible&&c[x].active){let T=c[x].geometryIndex;this.getMatrixAt(x,Gt),this.getBoundingSphereAt(T,Ci).applyMatrix4(Gt);let w=!1;if(d&&(w=!b.intersectsSphere(Ci,n)),!w){let C=u[T],I=Lp.subVectors(Ci.center,cr).dot(Fu);bl.push(C.start,C.count,I,x)}}let p=bl.list,v=this.customSort;v===null?p.sort(r.transparent?Cp:Rp):v.call(this,p,n);for(let x=0,_=p.length;x<_;x++){let T=p[x];l[m]=T.start*o,h[m]=T.count,g[m]=T.index,m++}bl.reset()}else for(let p=0,v=c.length;p<v;p++)if(c[p].visible&&c[p].active){let x=c[p].geometryIndex,_=!1;if(d&&(this.getMatrixAt(p,Gt),this.getBoundingSphereAt(x,Ci).applyMatrix4(Gt),_=!b.intersectsSphere(Ci,n)),!_){let T=u[x];l[m]=T.start*o,h[m]=T.count,g[m]=p,m++}}f.needsUpdate=!0,this._multiDrawCount=m,this._visibilityChanged=!1}onBeforeShadow(e,t,n,i,r,a){this.onBeforeRender(e,null,i,r,a)}},di=class extends vt{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ee(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},eo=new R,to=new R,Ou=new ze,lr=new Bi,Ra=new St,_l=new R,Bu=new R,fi=class extends ct{constructor(e=new nt,t=new di){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)eo.fromBufferAttribute(t,i-1),to.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=eo.distanceTo(to);e.setAttribute("lineDistance",new Ne(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ra.copy(n.boundingSphere),Ra.applyMatrix4(i),Ra.radius+=r,e.ray.intersectsSphere(Ra)===!1)return;Ou.copy(i).invert(),lr.copy(e.ray).applyMatrix4(Ou);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){let f=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let b=f,m=g-1;b<m;b+=l){let p=h.getX(b),v=h.getX(b+1),x=Ca(this,e,lr,c,p,v,b);x&&t.push(x)}if(this.isLineLoop){let b=h.getX(g-1),m=h.getX(f),p=Ca(this,e,lr,c,b,m,g-1);p&&t.push(p)}}else{let f=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let b=f,m=g-1;b<m;b+=l){let p=Ca(this,e,lr,c,b,b+1,b);p&&t.push(p)}if(this.isLineLoop){let b=Ca(this,e,lr,c,g-1,f,g-1);b&&t.push(b)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Ca(s,e,t,n,i,r,a){let o=s.geometry.attributes.position;if(eo.fromBufferAttribute(o,i),to.fromBufferAttribute(o,r),t.distanceSqToSegment(eo,to,_l,Bu)>n)return;_l.applyMatrix4(s.matrixWorld);let l=e.ray.origin.distanceTo(_l);if(!(l<e.near||l>e.far))return{distance:l,point:Bu.clone().applyMatrix4(s.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:s}}var ku=new R,zu=new R,Rs=class extends fi{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)ku.fromBufferAttribute(t,i),zu.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+ku.distanceTo(zu);e.setAttribute("lineDistance",new Ne(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Cs=class extends fi{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Hi=class extends vt{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ee(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Hu=new ze,Ll=new Bi,Ia=new St,Pa=new R,Is=class extends ct{constructor(e=new nt,t=new Hi){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ia.copy(n.boundingSphere),Ia.applyMatrix4(i),Ia.radius+=r,e.ray.intersectsSphere(Ia)===!1)return;Hu.copy(i).invert(),Ll.copy(e.ray).applyMatrix4(Hu);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,u=n.attributes.position;if(l!==null){let d=Math.max(0,a.start),f=Math.min(l.count,a.start+a.count);for(let g=d,b=f;g<b;g++){let m=l.getX(g);Pa.fromBufferAttribute(u,m),Vu(Pa,m,c,i,e,t,this)}}else{let d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let g=d,b=f;g<b;g++)Pa.fromBufferAttribute(u,g),Vu(Pa,g,c,i,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Vu(s,e,t,n,i,r,a){let o=Ll.distanceSqToPoint(s);if(o<t){let c=new R;Ll.closestPointToPoint(s,c),c.applyMatrix4(n);let l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var Sr=class extends wt{constructor(e,t,n=ei,i,r,a,o=It,c=It,l,h=xs,u=1){if(h!==xs&&h!==Ws)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:u};super(d,i,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new wn(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Tr=class extends wt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},no=class s extends nt{constructor(e=1,t=1,n=4,i=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:i,heightSegments:r},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),i=Math.max(3,Math.floor(i)),r=Math.max(1,Math.floor(r));let a=[],o=[],c=[],l=[],h=t/2,u=Math.PI/2*e,d=t,f=2*u+d,g=n*2+r,b=i+1,m=new R,p=new R;for(let v=0;v<=g;v++){let x=0,_=0,T=0,w=0;if(v<=n){let S=v/n,y=S*Math.PI/2;_=-h-e*Math.cos(y),T=e*Math.sin(y),w=-e*Math.cos(y),x=S*u}else if(v<=n+r){let S=(v-n)/r;_=-h+S*t,T=e,w=0,x=u+S*d}else{let S=(v-n-r)/n,y=S*Math.PI/2;_=h+e*Math.sin(y),T=e*Math.cos(y),w=e*Math.sin(y),x=u+d+S*u}let C=Math.max(0,Math.min(1,x/f)),I=0;v===0?I=.5/i:v===g&&(I=-.5/i);for(let S=0;S<=i;S++){let y=S/i,P=y*Math.PI*2,O=Math.sin(P),z=Math.cos(P);p.x=-T*z,p.y=_,p.z=T*O,o.push(p.x,p.y,p.z),m.set(-T*z,w,T*O),m.normalize(),c.push(m.x,m.y,m.z),l.push(y+I,C)}if(v>0){let S=(v-1)*b;for(let y=0;y<i;y++){let P=S+y,O=S+y+1,z=v*b+y,q=v*b+y+1;a.push(P,O,z),a.push(O,q,z)}}}this.setIndex(a),this.setAttribute("position",new Ne(o,3)),this.setAttribute("normal",new Ne(c,3)),this.setAttribute("uv",new Ne(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}},io=class s extends nt{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);let r=[],a=[],o=[],c=[],l=new R,h=new ie;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){let f=n+u/t*i;l.x=e*Math.cos(f),l.y=e*Math.sin(f),a.push(l.x,l.y,l.z),o.push(0,0,1),h.x=(a[d]/e+1)/2,h.y=(a[d+1]/e+1)/2,c.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Ne(a,3)),this.setAttribute("normal",new Ne(o,3)),this.setAttribute("uv",new Ne(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Ar=class s extends nt{constructor(e=1,t=1,n=1,i=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};let l=this;i=Math.floor(i),r=Math.floor(r);let h=[],u=[],d=[],f=[],g=0,b=[],m=n/2,p=0;v(),a===!1&&(e>0&&x(!0),t>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new Ne(u,3)),this.setAttribute("normal",new Ne(d,3)),this.setAttribute("uv",new Ne(f,2));function v(){let _=new R,T=new R,w=0,C=(t-e)/n;for(let I=0;I<=r;I++){let S=[],y=I/r,P=y*(t-e)+e;for(let O=0;O<=i;O++){let z=O/i,q=z*c+o,K=Math.sin(q),X=Math.cos(q);T.x=P*K,T.y=-y*n+m,T.z=P*X,u.push(T.x,T.y,T.z),_.set(K,C,X).normalize(),d.push(_.x,_.y,_.z),f.push(z,1-y),S.push(g++)}b.push(S)}for(let I=0;I<i;I++)for(let S=0;S<r;S++){let y=b[S][I],P=b[S+1][I],O=b[S+1][I+1],z=b[S][I+1];(e>0||S!==0)&&(h.push(y,P,z),w+=3),(t>0||S!==r-1)&&(h.push(P,O,z),w+=3)}l.addGroup(p,w,0),p+=w}function x(_){let T=g,w=new ie,C=new R,I=0,S=_===!0?e:t,y=_===!0?1:-1;for(let O=1;O<=i;O++)u.push(0,m*y,0),d.push(0,y,0),f.push(.5,.5),g++;let P=g;for(let O=0;O<=i;O++){let q=O/i*c+o,K=Math.cos(q),X=Math.sin(q);C.x=S*X,C.y=m*y,C.z=S*K,u.push(C.x,C.y,C.z),d.push(0,y,0),w.x=K*.5+.5,w.y=X*.5*y+.5,f.push(w.x,w.y),g++}for(let O=0;O<i;O++){let z=T+O,q=P+O;_===!0?h.push(q,q+1,z):h.push(q+1,q,z),I+=3}l.addGroup(p,I,_===!0?1:2),p+=I}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},so=class s extends Ar{constructor(e=1,t=1,n=32,i=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,i,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new s(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},pi=class s extends nt{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};let r=[],a=[];o(i),l(n),h(),this.setAttribute("position",new Ne(r,3)),this.setAttribute("normal",new Ne(r.slice(),3)),this.setAttribute("uv",new Ne(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(v){let x=new R,_=new R,T=new R;for(let w=0;w<t.length;w+=3)f(t[w+0],x),f(t[w+1],_),f(t[w+2],T),c(x,_,T,v)}function c(v,x,_,T){let w=T+1,C=[];for(let I=0;I<=w;I++){C[I]=[];let S=v.clone().lerp(_,I/w),y=x.clone().lerp(_,I/w),P=w-I;for(let O=0;O<=P;O++)O===0&&I===w?C[I][O]=S:C[I][O]=S.clone().lerp(y,O/P)}for(let I=0;I<w;I++)for(let S=0;S<2*(w-I)-1;S++){let y=Math.floor(S/2);S%2===0?(d(C[I][y+1]),d(C[I+1][y]),d(C[I][y])):(d(C[I][y+1]),d(C[I+1][y+1]),d(C[I+1][y]))}}function l(v){let x=new R;for(let _=0;_<r.length;_+=3)x.x=r[_+0],x.y=r[_+1],x.z=r[_+2],x.normalize().multiplyScalar(v),r[_+0]=x.x,r[_+1]=x.y,r[_+2]=x.z}function h(){let v=new R;for(let x=0;x<r.length;x+=3){v.x=r[x+0],v.y=r[x+1],v.z=r[x+2];let _=m(v)/2/Math.PI+.5,T=p(v)/Math.PI+.5;a.push(_,1-T)}g(),u()}function u(){for(let v=0;v<a.length;v+=6){let x=a[v+0],_=a[v+2],T=a[v+4],w=Math.max(x,_,T),C=Math.min(x,_,T);w>.9&&C<.1&&(x<.2&&(a[v+0]+=1),_<.2&&(a[v+2]+=1),T<.2&&(a[v+4]+=1))}}function d(v){r.push(v.x,v.y,v.z)}function f(v,x){let _=v*3;x.x=e[_+0],x.y=e[_+1],x.z=e[_+2]}function g(){let v=new R,x=new R,_=new R,T=new R,w=new ie,C=new ie,I=new ie;for(let S=0,y=0;S<r.length;S+=9,y+=6){v.set(r[S+0],r[S+1],r[S+2]),x.set(r[S+3],r[S+4],r[S+5]),_.set(r[S+6],r[S+7],r[S+8]),w.set(a[y+0],a[y+1]),C.set(a[y+2],a[y+3]),I.set(a[y+4],a[y+5]),T.copy(v).add(x).add(_).divideScalar(3);let P=m(T);b(w,y+0,v,P),b(C,y+2,x,P),b(I,y+4,_,P)}}function b(v,x,_,T){T<0&&v.x===1&&(a[x]=v.x-1),_.x===0&&_.z===0&&(a[x]=T/2/Math.PI+.5)}function m(v){return Math.atan2(v.z,-v.x)}function p(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.vertices,e.indices,e.radius,e.details)}},ro=class s extends pi{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,i=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new s(e.radius,e.detail)}},La=new R,Da=new R,xl=new R,Ua=new An,ao=class extends nt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let i=Math.pow(10,4),r=Math.cos(bs*t),a=e.getIndex(),o=e.getAttribute("position"),c=a?a.count:o.count,l=[0,0,0],h=["a","b","c"],u=new Array(3),d={},f=[];for(let g=0;g<c;g+=3){a?(l[0]=a.getX(g),l[1]=a.getX(g+1),l[2]=a.getX(g+2)):(l[0]=g,l[1]=g+1,l[2]=g+2);let{a:b,b:m,c:p}=Ua;if(b.fromBufferAttribute(o,l[0]),m.fromBufferAttribute(o,l[1]),p.fromBufferAttribute(o,l[2]),Ua.getNormal(xl),u[0]=`${Math.round(b.x*i)},${Math.round(b.y*i)},${Math.round(b.z*i)}`,u[1]=`${Math.round(m.x*i)},${Math.round(m.y*i)},${Math.round(m.z*i)}`,u[2]=`${Math.round(p.x*i)},${Math.round(p.y*i)},${Math.round(p.z*i)}`,!(u[0]===u[1]||u[1]===u[2]||u[2]===u[0]))for(let v=0;v<3;v++){let x=(v+1)%3,_=u[v],T=u[x],w=Ua[h[v]],C=Ua[h[x]],I=`${_}_${T}`,S=`${T}_${_}`;S in d&&d[S]?(xl.dot(d[S].normal)<=r&&(f.push(w.x,w.y,w.z),f.push(C.x,C.y,C.z)),d[S]=null):I in d||(d[I]={index0:l[v],index1:l[x],normal:xl.clone()})}}for(let g in d)if(d[g]){let{index0:b,index1:m}=d[g];La.fromBufferAttribute(o,b),Da.fromBufferAttribute(o,m),f.push(La.x,La.y,La.z),f.push(Da.x,Da.y,Da.z)}this.setAttribute("position",new Ne(f,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},Qt=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,i=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),i=0,r=n.length,a;t?a=t:a=e*n[r-1];let o=0,c=r-1,l;for(;o<=c;)if(i=Math.floor(o+(c-o)/2),l=n[i]-a,l<0)o=i+1;else if(l>0)c=i-1;else{c=i;break}if(i=c,n[i]===a)return i/(r-1);let h=n[i],d=n[i+1]-h,f=(a-h)/d;return(i+f)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);let a=this.getPoint(i),o=this.getPoint(r),c=t||(a.isVector2?new ie:new R);return c.copy(o).sub(a).normalize(),c}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new R,i=[],r=[],a=[],o=new R,c=new ze;for(let f=0;f<=e;f++){let g=f/e;i[f]=this.getTangentAt(g,new R)}r[0]=new R,a[0]=new R;let l=Number.MAX_VALUE,h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),d<=l&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],o),a[0].crossVectors(i[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(i[f-1],i[f]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(Ye(i[f-1].dot(i[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(o,g))}a[f].crossVectors(i[f],r[f])}if(t===!0){let f=Math.acos(Ye(r[0].dot(r[e]),-1,1));f/=e,i[0].dot(o.crossVectors(r[0],r[e]))>0&&(f=-f);for(let g=1;g<=e;g++)r[g].applyMatrix4(c.makeRotationAxis(i[g],f*g)),a[g].crossVectors(i[g],r[g])}return{tangents:i,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Ps=class extends Qt{constructor(e=0,t=0,n=1,i=1,r=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(e,t=new ie){let n=t,i=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(a?r=0:r=i),this.aClockwise===!0&&!a&&(r===i?r=-i:r=r-i);let o=this.aStartAngle+e*r,c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,f=l-this.aY;c=d*h-f*u+this.aX,l=d*u+f*h+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},oo=class extends Ps{constructor(e,t,n,i,r,a){super(e,t,n,n,i,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function rh(){let s=0,e=0,t=0,n=0;function i(r,a,o,c){s=r,e=o,t=-3*r+3*a-2*o-c,n=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,l){i(a,o,l*(o-r),l*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,l,h,u){let d=(a-r)/l-(o-r)/(l+h)+(o-a)/h,f=(o-a)/h-(c-a)/(h+u)+(c-o)/u;d*=h,f*=h,i(a,o,d,f)},calc:function(r){let a=r*r,o=a*r;return s+e*r+t*a+n*o}}}var Na=new R,vl=new rh,yl=new rh,Ml=new rh,co=class extends Qt{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new R){let n=t,i=this.points,r=i.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let l,h;this.closed||o>0?l=i[(o-1)%r]:(Na.subVectors(i[0],i[1]).add(i[0]),l=Na);let u=i[o%r],d=i[(o+1)%r];if(this.closed||o+2<r?h=i[(o+2)%r]:(Na.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=Na),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(l.distanceToSquared(u),f),b=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);b<1e-4&&(b=1),g<1e-4&&(g=b),m<1e-4&&(m=b),vl.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,g,b,m),yl.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,g,b,m),Ml.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,g,b,m)}else this.curveType==="catmullrom"&&(vl.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),yl.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),Ml.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return n.set(vl.calc(c),yl.calc(c),Ml.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new R().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Gu(s,e,t,n,i){let r=(n-e)*.5,a=(i-t)*.5,o=s*s,c=s*o;return(2*t-2*n+r+a)*c+(-3*t+3*n-2*r-a)*o+r*s+t}function Up(s,e){let t=1-s;return t*t*e}function Np(s,e){return 2*(1-s)*s*e}function Fp(s,e){return s*s*e}function fr(s,e,t,n){return Up(s,e)+Np(s,t)+Fp(s,n)}function Op(s,e){let t=1-s;return t*t*t*e}function Bp(s,e){let t=1-s;return 3*t*t*s*e}function kp(s,e){return 3*(1-s)*s*s*e}function zp(s,e){return s*s*s*e}function pr(s,e,t,n,i){return Op(s,e)+Bp(s,t)+kp(s,n)+zp(s,i)}var wr=class extends Qt{constructor(e=new ie,t=new ie,n=new ie,i=new ie){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new ie){let n=t,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(pr(e,i.x,r.x,a.x,o.x),pr(e,i.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},lo=class extends Qt{constructor(e=new R,t=new R,n=new R,i=new R){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new R){let n=t,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(pr(e,i.x,r.x,a.x,o.x),pr(e,i.y,r.y,a.y,o.y),pr(e,i.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Er=class extends Qt{constructor(e=new ie,t=new ie){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ie){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ie){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ho=class extends Qt{constructor(e=new R,t=new R){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new R){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new R){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Rr=class extends Qt{constructor(e=new ie,t=new ie,n=new ie){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ie){let n=t,i=this.v0,r=this.v1,a=this.v2;return n.set(fr(e,i.x,r.x,a.x),fr(e,i.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Cr=class extends Qt{constructor(e=new R,t=new R,n=new R){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new R){let n=t,i=this.v0,r=this.v1,a=this.v2;return n.set(fr(e,i.x,r.x,a.x),fr(e,i.y,r.y,a.y),fr(e,i.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ir=class extends Qt{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ie){let n=t,i=this.points,r=(i.length-1)*e,a=Math.floor(r),o=r-a,c=i[a===0?a:a-1],l=i[a],h=i[a>i.length-2?i.length-1:a+1],u=i[a>i.length-3?i.length-1:a+2];return n.set(Gu(o,c.x,l.x,h.x,u.x),Gu(o,c.y,l.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new ie().fromArray(i))}return this}},uo=Object.freeze({__proto__:null,ArcCurve:oo,CatmullRomCurve3:co,CubicBezierCurve:wr,CubicBezierCurve3:lo,EllipseCurve:Ps,LineCurve:Er,LineCurve3:ho,QuadraticBezierCurve:Rr,QuadraticBezierCurve3:Cr,SplineCurve:Ir}),fo=class extends Qt{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new uo[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),i=this.getCurveLengths(),r=0;for(;r<i.length;){if(i[r]>=n){let a=i[r]-n,o=this.curves[r],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let i=0,r=this.curves;i<r.length;i++){let a=r[i],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,c=a.getPoints(o);for(let l=0;l<c.length;l++){let h=c[l];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(new uo[i.type]().fromJSON(i))}return this}},Pr=class extends fo{constructor(e){super(),this.type="Path",this.currentPoint=new ie,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Er(this.currentPoint.clone(),new ie(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){let r=new Rr(this.currentPoint.clone(),new ie(e,t),new ie(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,r,a){let o=new wr(this.currentPoint.clone(),new ie(e,t),new ie(n,i),new ie(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new Ir(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,r,a){let o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+o,t+c,n,i,r,a),this}absarc(e,t,n,i,r,a){return this.absellipse(e,t,n,n,i,r,a),this}ellipse(e,t,n,i,r,a,o,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,n,i,r,a,o,c),this}absellipse(e,t,n,i,r,a,o,c){let l=new Ps(e,t,n,i,r,a,o,c);if(this.curves.length>0){let u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Ls=class extends Pr{constructor(e){super(e),this.uuid=an(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(new Pr().fromJSON(i))}return this}};function Hp(s,e,t=2){let n=e&&e.length,i=n?e[0]*t:s.length,r=jd(s,0,i,t,!0),a=[];if(!r||r.next===r.prev)return a;let o,c,l;if(n&&(r=qp(s,e,r,t)),s.length>80*t){o=1/0,c=1/0;let h=-1/0,u=-1/0;for(let d=t;d<i;d+=t){let f=s[d],g=s[d+1];f<o&&(o=f),g<c&&(c=g),f>h&&(h=f),g>u&&(u=g)}l=Math.max(h-o,u-c),l=l!==0?32767/l:0}return Lr(r,a,t,o,c,l,0),a}function jd(s,e,t,n,i){let r;if(i===im(s,e,t,n)>0)for(let a=e;a<t;a+=n)r=Wu(a/n|0,s[a],s[a+1],r);else for(let a=t-n;a>=e;a-=n)r=Wu(a/n|0,s[a],s[a+1],r);return r&&Ds(r,r.next)&&(Ur(r),r=r.next),r}function Vi(s,e){if(!s)return s;e||(e=s);let t=s,n;do if(n=!1,!t.steiner&&(Ds(t,t.next)||bt(t.prev,t,t.next)===0)){if(Ur(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Lr(s,e,t,n,i,r,a){if(!s)return;!a&&r&&Zp(s,n,i,r);let o=s;for(;s.prev!==s.next;){let c=s.prev,l=s.next;if(r?Gp(s,n,i,r):Vp(s)){e.push(c.i,s.i,l.i),Ur(s),s=l.next,o=l.next;continue}if(s=l,s===o){a?a===1?(s=Wp(Vi(s),e),Lr(s,e,t,n,i,r,2)):a===2&&Xp(s,e,t,n,i,r):Lr(Vi(s),e,t,n,i,r,1);break}}}function Vp(s){let e=s.prev,t=s,n=s.next;if(bt(e,t,n)>=0)return!1;let i=e.x,r=t.x,a=n.x,o=e.y,c=t.y,l=n.y,h=Math.min(i,r,a),u=Math.min(o,c,l),d=Math.max(i,r,a),f=Math.max(o,c,l),g=n.next;for(;g!==e;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=f&&ur(i,o,r,c,a,l,g.x,g.y)&&bt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Gp(s,e,t,n){let i=s.prev,r=s,a=s.next;if(bt(i,r,a)>=0)return!1;let o=i.x,c=r.x,l=a.x,h=i.y,u=r.y,d=a.y,f=Math.min(o,c,l),g=Math.min(h,u,d),b=Math.max(o,c,l),m=Math.max(h,u,d),p=Dl(f,g,e,t,n),v=Dl(b,m,e,t,n),x=s.prevZ,_=s.nextZ;for(;x&&x.z>=p&&_&&_.z<=v;){if(x.x>=f&&x.x<=b&&x.y>=g&&x.y<=m&&x!==i&&x!==a&&ur(o,h,c,u,l,d,x.x,x.y)&&bt(x.prev,x,x.next)>=0||(x=x.prevZ,_.x>=f&&_.x<=b&&_.y>=g&&_.y<=m&&_!==i&&_!==a&&ur(o,h,c,u,l,d,_.x,_.y)&&bt(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;x&&x.z>=p;){if(x.x>=f&&x.x<=b&&x.y>=g&&x.y<=m&&x!==i&&x!==a&&ur(o,h,c,u,l,d,x.x,x.y)&&bt(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;_&&_.z<=v;){if(_.x>=f&&_.x<=b&&_.y>=g&&_.y<=m&&_!==i&&_!==a&&ur(o,h,c,u,l,d,_.x,_.y)&&bt(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function Wp(s,e){let t=s;do{let n=t.prev,i=t.next.next;!Ds(n,i)&&Jd(n,t,t.next,i)&&Dr(n,i)&&Dr(i,n)&&(e.push(n.i,t.i,i.i),Ur(t),Ur(t.next),t=s=i),t=t.next}while(t!==s);return Vi(t)}function Xp(s,e,t,n,i,r){let a=s;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&em(a,o)){let c=Zd(a,o);a=Vi(a,a.next),c=Vi(c,c.next),Lr(a,e,t,n,i,r,0),Lr(c,e,t,n,i,r,0);return}o=o.next}a=a.next}while(a!==s)}function qp(s,e,t,n){let i=[];for(let r=0,a=e.length;r<a;r++){let o=e[r]*n,c=r<a-1?e[r+1]*n:s.length,l=jd(s,o,c,n,!1);l===l.next&&(l.steiner=!0),i.push(Qp(l))}i.sort(Yp);for(let r=0;r<i.length;r++)t=jp(i[r],t);return t}function Yp(s,e){let t=s.x-e.x;if(t===0&&(t=s.y-e.y,t===0)){let n=(s.next.y-s.y)/(s.next.x-s.x),i=(e.next.y-e.y)/(e.next.x-e.x);t=n-i}return t}function jp(s,e){let t=Kp(s,e);if(!t)return e;let n=Zd(t,s);return Vi(n,n.next),Vi(t,t.next)}function Kp(s,e){let t=e,n=s.x,i=s.y,r=-1/0,a;if(Ds(s,t))return t;do{if(Ds(s,t.next))return t.next;if(i<=t.y&&i>=t.next.y&&t.next.y!==t.y){let u=t.x+(i-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=n&&u>r&&(r=u,a=t.x<t.next.x?t:t.next,u===n))return a}t=t.next}while(t!==e);if(!a)return null;let o=a,c=a.x,l=a.y,h=1/0;t=a;do{if(n>=t.x&&t.x>=c&&n!==t.x&&Kd(i<l?n:r,i,c,l,i<l?r:n,i,t.x,t.y)){let u=Math.abs(i-t.y)/(n-t.x);Dr(t,s)&&(u<h||u===h&&(t.x>a.x||t.x===a.x&&Jp(a,t)))&&(a=t,h=u)}t=t.next}while(t!==o);return a}function Jp(s,e){return bt(s.prev,s,e.prev)<0&&bt(e.next,s,s.next)<0}function Zp(s,e,t,n){let i=s;do i.z===0&&(i.z=Dl(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,$p(i)}function $p(s){let e,t=1;do{let n=s,i;s=null;let r=null;for(e=0;n;){e++;let a=n,o=0;for(let l=0;l<t&&(o++,a=a.nextZ,!!a);l++);let c=t;for(;o>0||c>0&&a;)o!==0&&(c===0||!a||n.z<=a.z)?(i=n,n=n.nextZ,o--):(i=a,a=a.nextZ,c--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;n=a}r.nextZ=null,t*=2}while(e>1);return s}function Dl(s,e,t,n,i){return s=(s-t)*i|0,e=(e-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function Qp(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function Kd(s,e,t,n,i,r,a,o){return(i-a)*(e-o)>=(s-a)*(r-o)&&(s-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(i-a)*(n-o)}function ur(s,e,t,n,i,r,a,o){return!(s===a&&e===o)&&Kd(s,e,t,n,i,r,a,o)}function em(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!tm(s,e)&&(Dr(s,e)&&Dr(e,s)&&nm(s,e)&&(bt(s.prev,s,e.prev)||bt(s,e.prev,e))||Ds(s,e)&&bt(s.prev,s,s.next)>0&&bt(e.prev,e,e.next)>0)}function bt(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function Ds(s,e){return s.x===e.x&&s.y===e.y}function Jd(s,e,t,n){let i=Oa(bt(s,e,t)),r=Oa(bt(s,e,n)),a=Oa(bt(t,n,s)),o=Oa(bt(t,n,e));return!!(i!==r&&a!==o||i===0&&Fa(s,t,e)||r===0&&Fa(s,n,e)||a===0&&Fa(t,s,n)||o===0&&Fa(t,e,n))}function Fa(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function Oa(s){return s>0?1:s<0?-1:0}function tm(s,e){let t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&Jd(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function Dr(s,e){return bt(s.prev,s,s.next)<0?bt(s,e,s.next)>=0&&bt(s,s.prev,e)>=0:bt(s,e,s.prev)<0||bt(s,s.next,e)<0}function nm(s,e){let t=s,n=!1,i=(s.x+e.x)/2,r=(s.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&i<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==s);return n}function Zd(s,e){let t=Ul(s.i,s.x,s.y),n=Ul(e.i,e.x,e.y),i=s.next,r=e.prev;return s.next=e,e.prev=s,t.next=i,i.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Wu(s,e,t,n){let i=Ul(s,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Ur(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function Ul(s,e,t){return{i:s,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function im(s,e,t,n){let i=0;for(let r=e,a=t-n;r<t;r+=n)i+=(s[a]-s[r])*(s[r+1]+s[a+1]),a=r;return i}var Nl=class{static triangulate(e,t,n=2){return Hp(e,t,n)}},En=class s{static area(e){let t=e.length,n=0;for(let i=t-1,r=0;r<t;i=r++)n+=e[i].x*e[r].y-e[r].x*e[i].y;return n*.5}static isClockWise(e){return s.area(e)<0}static triangulateShape(e,t){let n=[],i=[],r=[];Xu(e),qu(n,e);let a=e.length;t.forEach(Xu);for(let c=0;c<t.length;c++)i.push(a),a+=t[c].length,qu(n,t[c]);let o=Nl.triangulate(n,i);for(let c=0;c<o.length;c+=3)r.push(o.slice(c,c+3));return r}};function Xu(s){let e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function qu(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}var po=class s extends nt{constructor(e=new Ls([new ie(.5,.5),new ie(-.5,.5),new ie(-.5,-.5),new ie(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,i=[],r=[];for(let o=0,c=e.length;o<c;o++){let l=e[o];a(l)}this.setAttribute("position",new Ne(i,3)),this.setAttribute("uv",new Ne(r,2)),this.computeVertexNormals();function a(o){let c=[],l=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:f-.1,b=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,p=t.extrudePath,v=t.UVGenerator!==void 0?t.UVGenerator:sm,x,_=!1,T,w,C,I;p&&(x=p.getSpacedPoints(h),_=!0,d=!1,T=p.computeFrenetFrames(h,!1),w=new R,C=new R,I=new R),d||(m=0,f=0,g=0,b=0);let S=o.extractPoints(l),y=S.shape,P=S.holes;if(!En.isClockWise(y)){y=y.reverse();for(let re=0,Q=P.length;re<Q;re++){let $=P[re];En.isClockWise($)&&(P[re]=$.reverse())}}function z(re){let $=10000000000000001e-36,Z=re[0];for(let ge=1;ge<=re.length;ge++){let oe=ge%re.length,pe=re[oe],ke=pe.x-Z.x,Oe=pe.y-Z.y,E=ke*ke+Oe*Oe,M=Math.max(Math.abs(pe.x),Math.abs(pe.y),Math.abs(Z.x),Math.abs(Z.y)),U=$*M*M;if(E<=U){re.splice(oe,1),ge--;continue}Z=pe}}z(y),P.forEach(z);let q=P.length,K=y;for(let re=0;re<q;re++){let Q=P[re];y=y.concat(Q)}function X(re,Q,$){return Q||console.error("THREE.ExtrudeGeometry: vec does not exist"),re.clone().addScaledVector(Q,$)}let ae=y.length;function W(re,Q,$){let Z,ge,oe,pe=re.x-Q.x,ke=re.y-Q.y,Oe=$.x-re.x,E=$.y-re.y,M=pe*pe+ke*ke,U=pe*E-ke*Oe;if(Math.abs(U)>Number.EPSILON){let H=Math.sqrt(M),se=Math.sqrt(Oe*Oe+E*E),Y=Q.x-ke/H,Re=Q.y+pe/H,fe=$.x-E/se,Ce=$.y+Oe/se,N=((fe-Y)*E-(Ce-Re)*Oe)/(pe*E-ke*Oe);Z=Y+pe*N-re.x,ge=Re+ke*N-re.y;let k=Z*Z+ge*ge;if(k<=2)return new ie(Z,ge);oe=Math.sqrt(k/2)}else{let H=!1;pe>Number.EPSILON?Oe>Number.EPSILON&&(H=!0):pe<-Number.EPSILON?Oe<-Number.EPSILON&&(H=!0):Math.sign(ke)===Math.sign(E)&&(H=!0),H?(Z=-ke,ge=pe,oe=Math.sqrt(M)):(Z=pe,ge=ke,oe=Math.sqrt(M/2))}return new ie(Z/oe,ge/oe)}let me=[];for(let re=0,Q=K.length,$=Q-1,Z=re+1;re<Q;re++,$++,Z++)$===Q&&($=0),Z===Q&&(Z=0),me[re]=W(K[re],K[$],K[Z]);let xe=[],Te,Ve=me.concat();for(let re=0,Q=q;re<Q;re++){let $=P[re];Te=[];for(let Z=0,ge=$.length,oe=ge-1,pe=Z+1;Z<ge;Z++,oe++,pe++)oe===ge&&(oe=0),pe===ge&&(pe=0),Te[Z]=W($[Z],$[oe],$[pe]);xe.push(Te),Ve=Ve.concat(Te)}let qe;if(m===0)qe=En.triangulateShape(K,P);else{let re=[],Q=[];for(let $=0;$<m;$++){let Z=$/m,ge=f*Math.cos(Z*Math.PI/2),oe=g*Math.sin(Z*Math.PI/2)+b;for(let pe=0,ke=K.length;pe<ke;pe++){let Oe=X(K[pe],me[pe],oe);Ae(Oe.x,Oe.y,-ge),Z===0&&re.push(Oe)}for(let pe=0,ke=q;pe<ke;pe++){let Oe=P[pe];Te=xe[pe];let E=[];for(let M=0,U=Oe.length;M<U;M++){let H=X(Oe[M],Te[M],oe);Ae(H.x,H.y,-ge),Z===0&&E.push(H)}Z===0&&Q.push(E)}}qe=En.triangulateShape(re,Q)}let Qe=qe.length,Ge=g+b;for(let re=0;re<ae;re++){let Q=d?X(y[re],Ve[re],Ge):y[re];_?(C.copy(T.normals[0]).multiplyScalar(Q.x),w.copy(T.binormals[0]).multiplyScalar(Q.y),I.copy(x[0]).add(C).add(w),Ae(I.x,I.y,I.z)):Ae(Q.x,Q.y,0)}for(let re=1;re<=h;re++)for(let Q=0;Q<ae;Q++){let $=d?X(y[Q],Ve[Q],Ge):y[Q];_?(C.copy(T.normals[re]).multiplyScalar($.x),w.copy(T.binormals[re]).multiplyScalar($.y),I.copy(x[re]).add(C).add(w),Ae(I.x,I.y,I.z)):Ae($.x,$.y,u/h*re)}for(let re=m-1;re>=0;re--){let Q=re/m,$=f*Math.cos(Q*Math.PI/2),Z=g*Math.sin(Q*Math.PI/2)+b;for(let ge=0,oe=K.length;ge<oe;ge++){let pe=X(K[ge],me[ge],Z);Ae(pe.x,pe.y,u+$)}for(let ge=0,oe=P.length;ge<oe;ge++){let pe=P[ge];Te=xe[ge];for(let ke=0,Oe=pe.length;ke<Oe;ke++){let E=X(pe[ke],Te[ke],Z);_?Ae(E.x,E.y+x[h-1].y,x[h-1].x+$):Ae(E.x,E.y,u+$)}}}j(),ee();function j(){let re=i.length/3;if(d){let Q=0,$=ae*Q;for(let Z=0;Z<Qe;Z++){let ge=qe[Z];Se(ge[2]+$,ge[1]+$,ge[0]+$)}Q=h+m*2,$=ae*Q;for(let Z=0;Z<Qe;Z++){let ge=qe[Z];Se(ge[0]+$,ge[1]+$,ge[2]+$)}}else{for(let Q=0;Q<Qe;Q++){let $=qe[Q];Se($[2],$[1],$[0])}for(let Q=0;Q<Qe;Q++){let $=qe[Q];Se($[0]+ae*h,$[1]+ae*h,$[2]+ae*h)}}n.addGroup(re,i.length/3-re,0)}function ee(){let re=i.length/3,Q=0;ve(K,Q),Q+=K.length;for(let $=0,Z=P.length;$<Z;$++){let ge=P[$];ve(ge,Q),Q+=ge.length}n.addGroup(re,i.length/3-re,1)}function ve(re,Q){let $=re.length;for(;--$>=0;){let Z=$,ge=$-1;ge<0&&(ge=re.length-1);for(let oe=0,pe=h+m*2;oe<pe;oe++){let ke=ae*oe,Oe=ae*(oe+1),E=Q+Z+ke,M=Q+ge+ke,U=Q+ge+Oe,H=Q+Z+Oe;Ke(E,M,U,H)}}}function Ae(re,Q,$){c.push(re),c.push(Q),c.push($)}function Se(re,Q,$){it(re),it(Q),it($);let Z=i.length/3,ge=v.generateTopUV(n,i,Z-3,Z-2,Z-1);L(ge[0]),L(ge[1]),L(ge[2])}function Ke(re,Q,$,Z){it(re),it(Q),it(Z),it(Q),it($),it(Z);let ge=i.length/3,oe=v.generateSideWallUV(n,i,ge-6,ge-3,ge-2,ge-1);L(oe[0]),L(oe[1]),L(oe[3]),L(oe[1]),L(oe[2]),L(oe[3])}function it(re){i.push(c[re*3+0]),i.push(c[re*3+1]),i.push(c[re*3+2])}function L(re){r.push(re.x),r.push(re.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return rm(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,a=e.shapes.length;r<a;r++){let o=t[e.shapes[r]];n.push(o)}let i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new uo[i.type]().fromJSON(i)),new s(n,e.options)}},sm={generateTopUV:function(s,e,t,n,i){let r=e[t*3],a=e[t*3+1],o=e[n*3],c=e[n*3+1],l=e[i*3],h=e[i*3+1];return[new ie(r,a),new ie(o,c),new ie(l,h)]},generateSideWallUV:function(s,e,t,n,i,r){let a=e[t*3],o=e[t*3+1],c=e[t*3+2],l=e[n*3],h=e[n*3+1],u=e[n*3+2],d=e[i*3],f=e[i*3+1],g=e[i*3+2],b=e[r*3],m=e[r*3+1],p=e[r*3+2];return Math.abs(o-h)<Math.abs(a-l)?[new ie(a,1-c),new ie(l,1-u),new ie(d,1-g),new ie(b,1-p)]:[new ie(o,1-c),new ie(h,1-u),new ie(f,1-g),new ie(m,1-p)]}};function rm(s,e,t){if(t.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){let r=s[n];t.shapes.push(r.uuid)}else t.shapes.push(s.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var mo=class s extends pi{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new s(e.radius,e.detail)}},go=class s extends nt{constructor(e=[new ie(0,-.5),new ie(.5,0),new ie(0,.5)],t=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:i},t=Math.floor(t),i=Ye(i,0,Math.PI*2);let r=[],a=[],o=[],c=[],l=[],h=1/t,u=new R,d=new ie,f=new R,g=new R,b=new R,m=0,p=0;for(let v=0;v<=e.length-1;v++)switch(v){case 0:m=e[v+1].x-e[v].x,p=e[v+1].y-e[v].y,f.x=p*1,f.y=-m,f.z=p*0,b.copy(f),f.normalize(),c.push(f.x,f.y,f.z);break;case e.length-1:c.push(b.x,b.y,b.z);break;default:m=e[v+1].x-e[v].x,p=e[v+1].y-e[v].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=b.x,f.y+=b.y,f.z+=b.z,f.normalize(),c.push(f.x,f.y,f.z),b.copy(g)}for(let v=0;v<=t;v++){let x=n+v*h*i,_=Math.sin(x),T=Math.cos(x);for(let w=0;w<=e.length-1;w++){u.x=e[w].x*_,u.y=e[w].y,u.z=e[w].x*T,a.push(u.x,u.y,u.z),d.x=v/t,d.y=w/(e.length-1),o.push(d.x,d.y);let C=c[3*w+0]*_,I=c[3*w+1],S=c[3*w+0]*T;l.push(C,I,S)}}for(let v=0;v<t;v++)for(let x=0;x<e.length-1;x++){let _=x+v*e.length,T=_,w=_+e.length,C=_+e.length+1,I=_+1;r.push(T,w,I),r.push(C,I,w)}this.setIndex(r),this.setAttribute("position",new Ne(a,3)),this.setAttribute("uv",new Ne(o,2)),this.setAttribute("normal",new Ne(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.points,e.segments,e.phiStart,e.phiLength)}},bo=class s extends pi{constructor(e=1,t=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new s(e.radius,e.detail)}},Us=class s extends nt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let r=e/2,a=t/2,o=Math.floor(n),c=Math.floor(i),l=o+1,h=c+1,u=e/o,d=t/c,f=[],g=[],b=[],m=[];for(let p=0;p<h;p++){let v=p*d-a;for(let x=0;x<l;x++){let _=x*u-r;g.push(_,-v,0),b.push(0,0,1),m.push(x/o),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let v=0;v<o;v++){let x=v+l*p,_=v+l*(p+1),T=v+1+l*(p+1),w=v+1+l*p;f.push(x,_,w),f.push(_,T,w)}this.setIndex(f),this.setAttribute("position",new Ne(g,3)),this.setAttribute("normal",new Ne(b,3)),this.setAttribute("uv",new Ne(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.widthSegments,e.heightSegments)}},_o=class s extends nt{constructor(e=.5,t=1,n=32,i=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:a},n=Math.max(3,n),i=Math.max(1,i);let o=[],c=[],l=[],h=[],u=e,d=(t-e)/i,f=new R,g=new ie;for(let b=0;b<=i;b++){for(let m=0;m<=n;m++){let p=r+m/n*a;f.x=u*Math.cos(p),f.y=u*Math.sin(p),c.push(f.x,f.y,f.z),l.push(0,0,1),g.x=(f.x/t+1)/2,g.y=(f.y/t+1)/2,h.push(g.x,g.y)}u+=d}for(let b=0;b<i;b++){let m=b*(n+1);for(let p=0;p<n;p++){let v=p+m,x=v,_=v+n+1,T=v+n+2,w=v+1;o.push(x,_,w),o.push(_,T,w)}}this.setIndex(o),this.setAttribute("position",new Ne(c,3)),this.setAttribute("normal",new Ne(l,3)),this.setAttribute("uv",new Ne(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},xo=class s extends nt{constructor(e=new Ls([new ie(0,.5),new ie(-.5,-.5),new ie(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],i=[],r=[],a=[],o=0,c=0;if(Array.isArray(e)===!1)l(e);else for(let h=0;h<e.length;h++)l(e[h]),this.addGroup(o,c,h),o+=c,c=0;this.setIndex(n),this.setAttribute("position",new Ne(i,3)),this.setAttribute("normal",new Ne(r,3)),this.setAttribute("uv",new Ne(a,2));function l(h){let u=i.length/3,d=h.extractPoints(t),f=d.shape,g=d.holes;En.isClockWise(f)===!1&&(f=f.reverse());for(let m=0,p=g.length;m<p;m++){let v=g[m];En.isClockWise(v)===!0&&(g[m]=v.reverse())}let b=En.triangulateShape(f,g);for(let m=0,p=g.length;m<p;m++){let v=g[m];f=f.concat(v)}for(let m=0,p=f.length;m<p;m++){let v=f[m];i.push(v.x,v.y,0),r.push(0,0,1),a.push(v.x,v.y)}for(let m=0,p=b.length;m<p;m++){let v=b[m],x=v[0]+u,_=v[1]+u,T=v[2]+u;n.push(x,_,T),c+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return am(t,e)}static fromJSON(e,t){let n=[];for(let i=0,r=e.shapes.length;i<r;i++){let a=t[e.shapes[i]];n.push(a)}return new s(n,e.curveSegments)}};function am(s,e){if(e.shapes=[],Array.isArray(s))for(let t=0,n=s.length;t<n;t++){let i=s[t];e.shapes.push(i.uuid)}else e.shapes.push(s.uuid);return e}var vo=class s extends nt{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(a+o,Math.PI),l=0,h=[],u=new R,d=new R,f=[],g=[],b=[],m=[];for(let p=0;p<=n;p++){let v=[],x=p/n,_=0;p===0&&a===0?_=.5/t:p===n&&c===Math.PI&&(_=-.5/t);for(let T=0;T<=t;T++){let w=T/t;u.x=-e*Math.cos(i+w*r)*Math.sin(a+x*o),u.y=e*Math.cos(a+x*o),u.z=e*Math.sin(i+w*r)*Math.sin(a+x*o),g.push(u.x,u.y,u.z),d.copy(u).normalize(),b.push(d.x,d.y,d.z),m.push(w+_,1-x),v.push(l++)}h.push(v)}for(let p=0;p<n;p++)for(let v=0;v<t;v++){let x=h[p][v+1],_=h[p][v],T=h[p+1][v],w=h[p+1][v+1];(p!==0||a>0)&&f.push(x,_,w),(p!==n-1||c<Math.PI)&&f.push(_,T,w)}this.setIndex(f),this.setAttribute("position",new Ne(g,3)),this.setAttribute("normal",new Ne(b,3)),this.setAttribute("uv",new Ne(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}},yo=class s extends pi{constructor(e=1,t=0){let n=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],i=[2,1,0,0,3,2,1,3,0,2,3,1];super(n,i,e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new s(e.radius,e.detail)}},Mo=class s extends nt{constructor(e=1,t=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);let a=[],o=[],c=[],l=[],h=new R,u=new R,d=new R;for(let f=0;f<=n;f++)for(let g=0;g<=i;g++){let b=g/i*r,m=f/n*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(b),u.y=(e+t*Math.cos(m))*Math.sin(b),u.z=t*Math.sin(m),o.push(u.x,u.y,u.z),h.x=e*Math.cos(b),h.y=e*Math.sin(b),d.subVectors(u,h).normalize(),c.push(d.x,d.y,d.z),l.push(g/i),l.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=i;g++){let b=(i+1)*f+g-1,m=(i+1)*(f-1)+g-1,p=(i+1)*(f-1)+g,v=(i+1)*f+g;a.push(b,m,v),a.push(m,p,v)}this.setIndex(a),this.setAttribute("position",new Ne(o,3)),this.setAttribute("normal",new Ne(c,3)),this.setAttribute("uv",new Ne(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}},So=class s extends nt{constructor(e=1,t=.4,n=64,i=8,r=2,a=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:n,radialSegments:i,p:r,q:a},n=Math.floor(n),i=Math.floor(i);let o=[],c=[],l=[],h=[],u=new R,d=new R,f=new R,g=new R,b=new R,m=new R,p=new R;for(let x=0;x<=n;++x){let _=x/n*r*Math.PI*2;v(_,r,a,e,f),v(_+.01,r,a,e,g),m.subVectors(g,f),p.addVectors(g,f),b.crossVectors(m,p),p.crossVectors(b,m),b.normalize(),p.normalize();for(let T=0;T<=i;++T){let w=T/i*Math.PI*2,C=-t*Math.cos(w),I=t*Math.sin(w);u.x=f.x+(C*p.x+I*b.x),u.y=f.y+(C*p.y+I*b.y),u.z=f.z+(C*p.z+I*b.z),c.push(u.x,u.y,u.z),d.subVectors(u,f).normalize(),l.push(d.x,d.y,d.z),h.push(x/n),h.push(T/i)}}for(let x=1;x<=n;x++)for(let _=1;_<=i;_++){let T=(i+1)*(x-1)+(_-1),w=(i+1)*x+(_-1),C=(i+1)*x+_,I=(i+1)*(x-1)+_;o.push(T,w,I),o.push(w,C,I)}this.setIndex(o),this.setAttribute("position",new Ne(c,3)),this.setAttribute("normal",new Ne(l,3)),this.setAttribute("uv",new Ne(h,2));function v(x,_,T,w,C){let I=Math.cos(x),S=Math.sin(x),y=T/_*x,P=Math.cos(y);C.x=w*(2+P)*.5*I,C.y=w*(2+P)*S*.5,C.z=w*Math.sin(y)*.5}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}},To=class s extends nt{constructor(e=new Cr(new R(-1,-1,0),new R(-1,1,0),new R(1,1,0)),t=64,n=1,i=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:i,closed:r};let a=e.computeFrenetFrames(t,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new R,c=new R,l=new ie,h=new R,u=[],d=[],f=[],g=[];b(),this.setIndex(g),this.setAttribute("position",new Ne(u,3)),this.setAttribute("normal",new Ne(d,3)),this.setAttribute("uv",new Ne(f,2));function b(){for(let x=0;x<t;x++)m(x);m(r===!1?t:0),v(),p()}function m(x){h=e.getPointAt(x/t,h);let _=a.normals[x],T=a.binormals[x];for(let w=0;w<=i;w++){let C=w/i*Math.PI*2,I=Math.sin(C),S=-Math.cos(C);c.x=S*_.x+I*T.x,c.y=S*_.y+I*T.y,c.z=S*_.z+I*T.z,c.normalize(),d.push(c.x,c.y,c.z),o.x=h.x+n*c.x,o.y=h.y+n*c.y,o.z=h.z+n*c.z,u.push(o.x,o.y,o.z)}}function p(){for(let x=1;x<=t;x++)for(let _=1;_<=i;_++){let T=(i+1)*(x-1)+(_-1),w=(i+1)*x+(_-1),C=(i+1)*x+_,I=(i+1)*(x-1)+_;g.push(T,w,I),g.push(w,C,I)}}function v(){for(let x=0;x<=t;x++)for(let _=0;_<=i;_++)l.x=x/t,l.y=_/i,f.push(l.x,l.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new s(new uo[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}},Ao=class extends nt{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){let t=[],n=new Set,i=new R,r=new R;if(e.index!==null){let a=e.attributes.position,o=e.index,c=e.groups;c.length===0&&(c=[{start:0,count:o.count,materialIndex:0}]);for(let l=0,h=c.length;l<h;++l){let u=c[l],d=u.start,f=u.count;for(let g=d,b=d+f;g<b;g+=3)for(let m=0;m<3;m++){let p=o.getX(g+m),v=o.getX(g+(m+1)%3);i.fromBufferAttribute(a,p),r.fromBufferAttribute(a,v),Yu(i,r,n)===!0&&(t.push(i.x,i.y,i.z),t.push(r.x,r.y,r.z))}}}else{let a=e.attributes.position;for(let o=0,c=a.count/3;o<c;o++)for(let l=0;l<3;l++){let h=3*o+l,u=3*o+(l+1)%3;i.fromBufferAttribute(a,h),r.fromBufferAttribute(a,u),Yu(i,r,n)===!0&&(t.push(i.x,i.y,i.z),t.push(r.x,r.y,r.z))}}this.setAttribute("position",new Ne(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};function Yu(s,e,t){let n=`${s.x},${s.y},${s.z}-${e.x},${e.y},${e.z}`,i=`${e.x},${e.y},${e.z}-${s.x},${s.y},${s.z}`;return t.has(n)===!0||t.has(i)===!0?!1:(t.add(n),t.add(i),!0)}var ju=Object.freeze({__proto__:null,BoxGeometry:ki,CapsuleGeometry:no,CircleGeometry:io,ConeGeometry:so,CylinderGeometry:Ar,DodecahedronGeometry:ro,EdgesGeometry:ao,ExtrudeGeometry:po,IcosahedronGeometry:mo,LatheGeometry:go,OctahedronGeometry:bo,PlaneGeometry:Us,PolyhedronGeometry:pi,RingGeometry:_o,ShapeGeometry:xo,SphereGeometry:vo,TetrahedronGeometry:yo,TorusGeometry:Mo,TorusKnotGeometry:So,TubeGeometry:To,WireframeGeometry:Ao}),wo=class extends vt{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new Ee(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}},Eo=class extends $t{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},mi=class extends vt{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ee(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ee(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=yi,this.normalScale=new ie(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zt,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},zt=class extends mi{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ie(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ye(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ee(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ee(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ee(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}},Ro=class extends vt{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Ee(16777215),this.specular=new Ee(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ee(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=yi,this.normalScale=new ie(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zt,this.combine=Vr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Co=class extends vt{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new Ee(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ee(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=yi,this.normalScale=new ie(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Io=class extends vt{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=yi,this.normalScale=new ie(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}},Po=class extends vt{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ee(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ee(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=yi,this.normalScale=new ie(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zt,this.combine=Vr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Nr=class extends vt{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Dd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Fr=class extends vt{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},Lo=class extends vt{constructor(e){super(),this.isMeshMatcapMaterial=!0,this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new Ee(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=yi,this.normalScale=new ie(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={MATCAP:""},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.flatShading=e.flatShading,this.fog=e.fog,this}},Do=class extends di{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}};function Ba(s,e){return!s||s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function om(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function cm(s){function e(i,r){return s[i]-s[r]}let t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Ku(s,e,t){let n=s.length,i=new s.constructor(n);for(let r=0,a=0;a!==n;++r){let o=t[r]*e;for(let c=0;c!==e;++c)i[a++]=s[o+c]}return i}function $d(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push(...a)),r=s[i++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=s[i++];while(r!==void 0)}var Kn=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=t[++n],e<i)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let a=0;a!==i;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Uo=class extends Kn{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:El,endingEnd:El}}intervalChanged_(e,t,n){let i=this.parameterPositions,r=e-2,a=e+1,o=i[r],c=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case Rl:r=e,o=2*t-n;break;case Cl:r=i.length-2,o=t+i[r]-i[r+1];break;default:r=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Rl:a=e,c=2*n-t;break;case Cl:a=1,c=n+i[1]-i[0];break;default:a=e-1,c=t}let l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-t)/(i-t),b=g*g,m=b*g,p=-d*m+2*d*b-d*g,v=(1+d)*m+(-1.5-2*d)*b+(-.5+d)*g+1,x=(-1-f)*m+(1.5+f)*b+.5*g,_=f*m-f*b;for(let T=0;T!==o;++T)r[T]=p*a[h+T]+v*a[l+T]+x*a[c+T]+_*a[u+T];return r}},No=class extends Kn{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=(n-t)/(i-t),u=1-h;for(let d=0;d!==o;++d)r[d]=a[l+d]*u+a[c+d]*h;return r}},Fo=class extends Kn{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},qt=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ba(t,this.TimeBufferType),this.values=Ba(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ba(e.times,Array),values:Ba(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Fo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new No(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Uo(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Ni:t=this.InterpolantFactoryMethodDiscrete;break;case Fi:t=this.InterpolantFactoryMethodLinear;break;case ka:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ni;case this.InterpolantFactoryMethodLinear:return Fi;case this.InterpolantFactoryMethodSmooth:return ka}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){let n=this.times,i=n.length,r=0,a=i-1;for(;r!==i&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(i!==void 0&&om(i))for(let o=0,c=i.length;o!==c;++o){let l=i[o];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===ka,r=e.length-1,a=1;for(let o=1;o<r;++o){let c=!1,l=e[o],h=e[o+1];if(l!==h&&(o!==1||l!==e[0]))if(i)c=!0;else{let u=o*n,d=u-n,f=u+n;for(let g=0;g!==n;++g){let b=t[u+g];if(b!==t[d+g]||b!==t[f+g]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];let u=o*n,d=a*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}};qt.prototype.ValueTypeName="";qt.prototype.TimeBufferType=Float32Array;qt.prototype.ValueBufferType=Float32Array;qt.prototype.DefaultInterpolation=Fi;var Jn=class extends qt{constructor(e,t,n){super(e,t,n)}};Jn.prototype.ValueTypeName="bool";Jn.prototype.ValueBufferType=Array;Jn.prototype.DefaultInterpolation=Ni;Jn.prototype.InterpolantFactoryMethodLinear=void 0;Jn.prototype.InterpolantFactoryMethodSmooth=void 0;var Or=class extends qt{constructor(e,t,n,i){super(e,t,n,i)}};Or.prototype.ValueTypeName="color";var Pn=class extends qt{constructor(e,t,n,i){super(e,t,n,i)}};Pn.prototype.ValueTypeName="number";var Oo=class extends Kn{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(i-t),l=e*o;for(let h=l+o;l!==h;l+=4)on.slerpFlat(r,0,a,l-o,a,l,c);return r}},Ln=class extends qt{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new Oo(this.times,this.values,this.getValueSize(),e)}};Ln.prototype.ValueTypeName="quaternion";Ln.prototype.InterpolantFactoryMethodSmooth=void 0;var Zn=class extends qt{constructor(e,t,n){super(e,t,n)}};Zn.prototype.ValueTypeName="string";Zn.prototype.ValueBufferType=Array;Zn.prototype.DefaultInterpolation=Ni;Zn.prototype.InterpolantFactoryMethodLinear=void 0;Zn.prototype.InterpolantFactoryMethodSmooth=void 0;var Dn=class extends qt{constructor(e,t,n,i){super(e,t,n,i)}};Dn.prototype.ValueTypeName="vector";var Ns=class{constructor(e="",t=-1,n=[],i=Ld){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=an(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(hm(n[a]).scale(i));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){let t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,a=n.length;r!==a;++r)t.push(qt.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){let r=t.length,a=[];for(let o=0;o<r;o++){let c=[],l=[];c.push((o+r-1)%r,o,(o+1)%r),l.push(0,1,0);let h=cm(c);c=Ku(c,1,h),l=Ku(l,1,h),!i&&c[0]===0&&(c.push(r),l.push(l[0])),a.push(new Pn(".morphTargetInfluences["+t[o].name+"]",c,l).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let i={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,c=e.length;o<c;o++){let l=e[o],h=l.name.match(r);if(h&&h.length>1){let u=h[1],d=i[u];d||(i[u]=d=[]),d.push(l)}}let a=[];for(let o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return a}static parseAnimation(e,t){if(console.warn("THREE.AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(u,d,f,g,b){if(f.length!==0){let m=[],p=[];$d(f,m,p,g),m.length!==0&&b.push(new u(d,m,p))}},i=[],r=e.name||"default",a=e.fps||30,o=e.blendMode,c=e.length||-1,l=e.hierarchy||[];for(let u=0;u<l.length;u++){let d=l[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){let f={},g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let b=0;b<d[g].morphTargets.length;b++)f[d[g].morphTargets[b]]=-1;for(let b in f){let m=[],p=[];for(let v=0;v!==d[g].morphTargets.length;++v){let x=d[g];m.push(x.time),p.push(x.morphTarget===b?1:0)}i.push(new Pn(".morphTargetInfluence["+b+"]",m,p))}c=f.length*a}else{let f=".bones["+t[u].name+"]";n(Dn,f+".position",d,"pos",i),n(Ln,f+".quaternion",d,"rot",i),n(Dn,f+".scale",d,"scl",i)}}return i.length===0?null:new this(r,c,i,o)}resetDuration(){let e=this.tracks,t=0;for(let n=0,i=e.length;n!==i;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function lm(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Pn;case"vector":case"vector2":case"vector3":case"vector4":return Dn;case"color":return Or;case"quaternion":return Ln;case"bool":case"boolean":return Jn;case"string":return Zn}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function hm(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=lm(s.type);if(s.times===void 0){let t=[],n=[];$d(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}var Rn={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}},Br=class{constructor(e,t,n){let i=this,r=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.abortController=new AbortController,this.itemStart=function(h){o++,r===!1&&i.onStart!==void 0&&i.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){let f=l[u],g=l[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},Qd=new Br,en=class{constructor(e){this.manager=e!==void 0?e:Qd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};en.DEFAULT_MATERIAL_NAME="__DEFAULT";var Xn={},Fl=class extends Error{constructor(e,t){super(e),this.response=t}},Un=class extends en{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=Rn.get(`file:${e}`);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Xn[e]!==void 0){Xn[e].push({onLoad:t,onProgress:n,onError:i});return}Xn[e]=[],Xn[e].push({onLoad:t,onProgress:n,onError:i});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let h=Xn[e],u=l.body.getReader(),d=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),f=d?parseInt(d):0,g=f!==0,b=0,m=new ReadableStream({start(p){v();function v(){u.read().then(({done:x,value:_})=>{if(x)p.close();else{b+=_.byteLength;let T=new ProgressEvent("progress",{lengthComputable:g,loaded:b,total:f});for(let w=0,C=h.length;w<C;w++){let I=h[w];I.onProgress&&I.onProgress(T)}p.enqueue(_),v()}},x=>{p.error(x)})}}});return new Response(m)}else throw new Fl(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return l.json();default:if(o==="")return l.text();{let u=/charset="?([^;"\s]*)"?/i.exec(o),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return l.arrayBuffer().then(g=>f.decode(g))}}}).then(l=>{Rn.add(`file:${e}`,l);let h=Xn[e];delete Xn[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onLoad&&f.onLoad(l)}}).catch(l=>{let h=Xn[e];if(h===void 0)throw this.manager.itemError(e),l;delete Xn[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onError&&f.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var ms=new WeakMap,Fs=class extends en{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=Rn.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let u=ms.get(a);u===void 0&&(u=[],ms.set(a,u)),u.push({onLoad:t,onError:i})}return a}let o=vs("img");function c(){h(),t&&t(this);let u=ms.get(this)||[];for(let d=0;d<u.length;d++){let f=u[d];f.onLoad&&f.onLoad(this)}ms.delete(this),r.manager.itemEnd(e)}function l(u){h(),i&&i(u),Rn.remove(`image:${e}`);let d=ms.get(this)||[];for(let f=0;f<d.length;f++){let g=d[f];g.onError&&g.onError(u)}ms.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Rn.add(`image:${e}`,o),r.manager.itemStart(e),o.src=e,o}};var gi=class extends en{constructor(e){super(e)}load(e,t,n,i){let r=new wt,a=new Fs(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}},Nn=class extends ct{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ee(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},Bo=class extends Nn{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ct.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ee(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Sl=new ze,Ju=new R,Zu=new R,kr=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ie(512,512),this.mapType=vn,this.map=null,this.mapPass=null,this.matrix=new ze,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ui,this._frameExtents=new ie(1,1),this._viewportCount=1,this._viewports=[new et(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Ju.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ju),Zu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Zu),t.updateMatrixWorld(),Sl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Sl,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Sl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Ol=class extends kr{constructor(){super(new yt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=Oi*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},Os=class extends Nn{constructor(e,t,n=0,i=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ct.DEFAULT_UP),this.updateMatrix(),this.target=new ct,this.distance=n,this.angle=i,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Ol}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},$u=new ze,hr=new R,Tl=new R,Bl=class extends kr{constructor(){super(new yt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ie(4,2),this._viewportCount=6,this._viewports=[new et(2,1,1,1),new et(0,1,1,1),new et(3,1,1,1),new et(1,1,1,1),new et(3,0,1,1),new et(1,0,1,1)],this._cubeDirections=[new R(1,0,0),new R(-1,0,0),new R(0,0,1),new R(0,0,-1),new R(0,1,0),new R(0,-1,0)],this._cubeUps=[new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,0,1),new R(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),hr.setFromMatrixPosition(e.matrixWorld),n.position.copy(hr),Tl.copy(n.position),Tl.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Tl),n.updateMatrixWorld(),i.makeTranslation(-hr.x,-hr.y,-hr.z),$u.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix($u,n.coordinateSystem,n.reversedDepth)}},Bs=class extends Nn{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Bl}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},bi=class extends yr{constructor(e=-1,t=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-e,a=n+e,o=i+t,c=i-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},kl=class extends kr{constructor(){super(new bi(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ks=class extends Nn{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ct.DEFAULT_UP),this.updateMatrix(),this.target=new ct,this.shadow=new kl}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},ko=class extends Nn{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}},zo=class extends Nn{constructor(e,t,n=10,i=10){super(e,t),this.isRectAreaLight=!0,this.type="RectAreaLight",this.width=n,this.height=i}get power(){return this.intensity*this.width*this.height*Math.PI}set power(e){this.intensity=e/(this.width*this.height*Math.PI)}copy(e){return super.copy(e),this.width=e.width,this.height=e.height,this}toJSON(e){let t=super.toJSON(e);return t.object.width=this.width,t.object.height=this.height,t}},Ho=class{constructor(){this.isSphericalHarmonics3=!0,this.coefficients=[];for(let e=0;e<9;e++)this.coefficients.push(new R)}set(e){for(let t=0;t<9;t++)this.coefficients[t].copy(e[t]);return this}zero(){for(let e=0;e<9;e++)this.coefficients[e].set(0,0,0);return this}getAt(e,t){let n=e.x,i=e.y,r=e.z,a=this.coefficients;return t.copy(a[0]).multiplyScalar(.282095),t.addScaledVector(a[1],.488603*i),t.addScaledVector(a[2],.488603*r),t.addScaledVector(a[3],.488603*n),t.addScaledVector(a[4],1.092548*(n*i)),t.addScaledVector(a[5],1.092548*(i*r)),t.addScaledVector(a[6],.315392*(3*r*r-1)),t.addScaledVector(a[7],1.092548*(n*r)),t.addScaledVector(a[8],.546274*(n*n-i*i)),t}getIrradianceAt(e,t){let n=e.x,i=e.y,r=e.z,a=this.coefficients;return t.copy(a[0]).multiplyScalar(.886227),t.addScaledVector(a[1],2*.511664*i),t.addScaledVector(a[2],2*.511664*r),t.addScaledVector(a[3],2*.511664*n),t.addScaledVector(a[4],2*.429043*n*i),t.addScaledVector(a[5],2*.429043*i*r),t.addScaledVector(a[6],.743125*r*r-.247708),t.addScaledVector(a[7],2*.429043*n*r),t.addScaledVector(a[8],.429043*(n*n-i*i)),t}add(e){for(let t=0;t<9;t++)this.coefficients[t].add(e.coefficients[t]);return this}addScaledSH(e,t){for(let n=0;n<9;n++)this.coefficients[n].addScaledVector(e.coefficients[n],t);return this}scale(e){for(let t=0;t<9;t++)this.coefficients[t].multiplyScalar(e);return this}lerp(e,t){for(let n=0;n<9;n++)this.coefficients[n].lerp(e.coefficients[n],t);return this}equals(e){for(let t=0;t<9;t++)if(!this.coefficients[t].equals(e.coefficients[t]))return!1;return!0}copy(e){return this.set(e.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(e,t=0){let n=this.coefficients;for(let i=0;i<9;i++)n[i].fromArray(e,t+i*3);return this}toArray(e=[],t=0){let n=this.coefficients;for(let i=0;i<9;i++)n[i].toArray(e,t+i*3);return e}static getBasisAt(e,t){let n=e.x,i=e.y,r=e.z;t[0]=.282095,t[1]=.488603*i,t[2]=.488603*r,t[3]=.488603*n,t[4]=1.092548*n*i,t[5]=1.092548*i*r,t[6]=.315392*(3*r*r-1),t[7]=1.092548*n*r,t[8]=.546274*(n*n-i*i)}},Vo=class extends Nn{constructor(e=new Ho,t=1){super(void 0,t),this.isLightProbe=!0,this.sh=e}copy(e){return super.copy(e),this.sh.copy(e.sh),this}fromJSON(e){return this.intensity=e.intensity,this.sh.fromArray(e.sh),this}toJSON(e){let t=super.toJSON(e);return t.object.sh=this.sh.toArray(),t}},Go=class s extends en{constructor(e){super(e),this.textures={}}load(e,t,n,i){let r=this,a=new Un(r.manager);a.setPath(r.path),a.setRequestHeader(r.requestHeader),a.setWithCredentials(r.withCredentials),a.load(e,function(o){try{t(r.parse(JSON.parse(o)))}catch(c){i?i(c):console.error(c),r.manager.itemError(e)}},n,i)}parse(e){let t=this.textures;function n(r){return t[r]===void 0&&console.warn("THREE.MaterialLoader: Undefined texture",r),t[r]}let i=this.createMaterialFromType(e.type);if(e.uuid!==void 0&&(i.uuid=e.uuid),e.name!==void 0&&(i.name=e.name),e.color!==void 0&&i.color!==void 0&&i.color.setHex(e.color),e.roughness!==void 0&&(i.roughness=e.roughness),e.metalness!==void 0&&(i.metalness=e.metalness),e.sheen!==void 0&&(i.sheen=e.sheen),e.sheenColor!==void 0&&(i.sheenColor=new Ee().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(i.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&i.emissive!==void 0&&i.emissive.setHex(e.emissive),e.specular!==void 0&&i.specular!==void 0&&i.specular.setHex(e.specular),e.specularIntensity!==void 0&&(i.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&i.specularColor!==void 0&&i.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(i.shininess=e.shininess),e.clearcoat!==void 0&&(i.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(i.dispersion=e.dispersion),e.iridescence!==void 0&&(i.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(i.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(i.transmission=e.transmission),e.thickness!==void 0&&(i.thickness=e.thickness),e.attenuationDistance!==void 0&&(i.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&i.attenuationColor!==void 0&&i.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(i.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(i.fog=e.fog),e.flatShading!==void 0&&(i.flatShading=e.flatShading),e.blending!==void 0&&(i.blending=e.blending),e.combine!==void 0&&(i.combine=e.combine),e.side!==void 0&&(i.side=e.side),e.shadowSide!==void 0&&(i.shadowSide=e.shadowSide),e.opacity!==void 0&&(i.opacity=e.opacity),e.transparent!==void 0&&(i.transparent=e.transparent),e.alphaTest!==void 0&&(i.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(i.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(i.depthFunc=e.depthFunc),e.depthTest!==void 0&&(i.depthTest=e.depthTest),e.depthWrite!==void 0&&(i.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(i.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(i.blendSrc=e.blendSrc),e.blendDst!==void 0&&(i.blendDst=e.blendDst),e.blendEquation!==void 0&&(i.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(i.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(i.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(i.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&i.blendColor!==void 0&&i.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(i.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(i.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(i.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(i.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(i.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(i.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(i.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(i.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(i.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(i.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(i.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(i.rotation=e.rotation),e.linewidth!==void 0&&(i.linewidth=e.linewidth),e.dashSize!==void 0&&(i.dashSize=e.dashSize),e.gapSize!==void 0&&(i.gapSize=e.gapSize),e.scale!==void 0&&(i.scale=e.scale),e.polygonOffset!==void 0&&(i.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(i.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(i.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(i.dithering=e.dithering),e.alphaToCoverage!==void 0&&(i.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(i.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(i.forceSinglePass=e.forceSinglePass),e.visible!==void 0&&(i.visible=e.visible),e.toneMapped!==void 0&&(i.toneMapped=e.toneMapped),e.userData!==void 0&&(i.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?i.vertexColors=e.vertexColors>0:i.vertexColors=e.vertexColors),e.uniforms!==void 0)for(let r in e.uniforms){let a=e.uniforms[r];switch(i.uniforms[r]={},a.type){case"t":i.uniforms[r].value=n(a.value);break;case"c":i.uniforms[r].value=new Ee().setHex(a.value);break;case"v2":i.uniforms[r].value=new ie().fromArray(a.value);break;case"v3":i.uniforms[r].value=new R().fromArray(a.value);break;case"v4":i.uniforms[r].value=new et().fromArray(a.value);break;case"m3":i.uniforms[r].value=new Xe().fromArray(a.value);break;case"m4":i.uniforms[r].value=new ze().fromArray(a.value);break;default:i.uniforms[r].value=a.value}}if(e.defines!==void 0&&(i.defines=e.defines),e.vertexShader!==void 0&&(i.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(i.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(i.glslVersion=e.glslVersion),e.extensions!==void 0)for(let r in e.extensions)i.extensions[r]=e.extensions[r];if(e.lights!==void 0&&(i.lights=e.lights),e.clipping!==void 0&&(i.clipping=e.clipping),e.size!==void 0&&(i.size=e.size),e.sizeAttenuation!==void 0&&(i.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(i.map=n(e.map)),e.matcap!==void 0&&(i.matcap=n(e.matcap)),e.alphaMap!==void 0&&(i.alphaMap=n(e.alphaMap)),e.bumpMap!==void 0&&(i.bumpMap=n(e.bumpMap)),e.bumpScale!==void 0&&(i.bumpScale=e.bumpScale),e.normalMap!==void 0&&(i.normalMap=n(e.normalMap)),e.normalMapType!==void 0&&(i.normalMapType=e.normalMapType),e.normalScale!==void 0){let r=e.normalScale;Array.isArray(r)===!1&&(r=[r,r]),i.normalScale=new ie().fromArray(r)}return e.displacementMap!==void 0&&(i.displacementMap=n(e.displacementMap)),e.displacementScale!==void 0&&(i.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(i.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(i.roughnessMap=n(e.roughnessMap)),e.metalnessMap!==void 0&&(i.metalnessMap=n(e.metalnessMap)),e.emissiveMap!==void 0&&(i.emissiveMap=n(e.emissiveMap)),e.emissiveIntensity!==void 0&&(i.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(i.specularMap=n(e.specularMap)),e.specularIntensityMap!==void 0&&(i.specularIntensityMap=n(e.specularIntensityMap)),e.specularColorMap!==void 0&&(i.specularColorMap=n(e.specularColorMap)),e.envMap!==void 0&&(i.envMap=n(e.envMap)),e.envMapRotation!==void 0&&i.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(i.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(i.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(i.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(i.lightMap=n(e.lightMap)),e.lightMapIntensity!==void 0&&(i.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(i.aoMap=n(e.aoMap)),e.aoMapIntensity!==void 0&&(i.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(i.gradientMap=n(e.gradientMap)),e.clearcoatMap!==void 0&&(i.clearcoatMap=n(e.clearcoatMap)),e.clearcoatRoughnessMap!==void 0&&(i.clearcoatRoughnessMap=n(e.clearcoatRoughnessMap)),e.clearcoatNormalMap!==void 0&&(i.clearcoatNormalMap=n(e.clearcoatNormalMap)),e.clearcoatNormalScale!==void 0&&(i.clearcoatNormalScale=new ie().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(i.iridescenceMap=n(e.iridescenceMap)),e.iridescenceThicknessMap!==void 0&&(i.iridescenceThicknessMap=n(e.iridescenceThicknessMap)),e.transmissionMap!==void 0&&(i.transmissionMap=n(e.transmissionMap)),e.thicknessMap!==void 0&&(i.thicknessMap=n(e.thicknessMap)),e.anisotropyMap!==void 0&&(i.anisotropyMap=n(e.anisotropyMap)),e.sheenColorMap!==void 0&&(i.sheenColorMap=n(e.sheenColorMap)),e.sheenRoughnessMap!==void 0&&(i.sheenRoughnessMap=n(e.sheenRoughnessMap)),i}setTextures(e){return this.textures=e,this}createMaterialFromType(e){return s.createMaterialFromType(e)}static createMaterialFromType(e){let t={ShadowMaterial:wo,SpriteMaterial:Mr,RawShaderMaterial:Eo,ShaderMaterial:$t,PointsMaterial:Hi,MeshPhysicalMaterial:zt,MeshStandardMaterial:mi,MeshPhongMaterial:Ro,MeshToonMaterial:Co,MeshNormalMaterial:Io,MeshLambertMaterial:Po,MeshDepthMaterial:Nr,MeshDistanceMaterial:Fr,MeshBasicMaterial:Xt,MeshMatcapMaterial:Lo,LineDashedMaterial:Do,LineBasicMaterial:di,Material:vt};return new t[e]}},xn=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}},Wo=class extends nt{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){let e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}},Xo=class extends en{constructor(e){super(e)}load(e,t,n,i){let r=this,a=new Un(r.manager);a.setPath(r.path),a.setRequestHeader(r.requestHeader),a.setWithCredentials(r.withCredentials),a.load(e,function(o){try{t(r.parse(JSON.parse(o)))}catch(c){i?i(c):console.error(c),r.manager.itemError(e)}},n,i)}parse(e){let t={},n={};function i(f,g){if(t[g]!==void 0)return t[g];let m=f.interleavedBuffers[g],p=r(f,m.buffer),v=gs(m.type,p),x=new hi(v,m.stride);return x.uuid=m.uuid,t[g]=x,x}function r(f,g){if(n[g]!==void 0)return n[g];let m=f.arrayBuffers[g],p=new Uint32Array(m).buffer;return n[g]=p,p}let a=e.isInstancedBufferGeometry?new Wo:new nt,o=e.data.index;if(o!==void 0){let f=gs(o.type,o.array);a.setIndex(new ft(f,1))}let c=e.data.attributes;for(let f in c){let g=c[f],b;if(g.isInterleavedBufferAttribute){let m=i(e.data,g.data);b=new In(m,g.itemSize,g.offset,g.normalized)}else{let m=gs(g.type,g.array),p=g.isInstancedBufferAttribute?_n:ft;b=new p(m,g.itemSize,g.normalized)}g.name!==void 0&&(b.name=g.name),g.usage!==void 0&&b.setUsage(g.usage),a.setAttribute(f,b)}let l=e.data.morphAttributes;if(l)for(let f in l){let g=l[f],b=[];for(let m=0,p=g.length;m<p;m++){let v=g[m],x;if(v.isInterleavedBufferAttribute){let _=i(e.data,v.data);x=new In(_,v.itemSize,v.offset,v.normalized)}else{let _=gs(v.type,v.array);x=new ft(_,v.itemSize,v.normalized)}v.name!==void 0&&(x.name=v.name),b.push(x)}a.morphAttributes[f]=b}e.data.morphTargetsRelative&&(a.morphTargetsRelative=!0);let u=e.data.groups||e.data.drawcalls||e.data.offsets;if(u!==void 0)for(let f=0,g=u.length;f!==g;++f){let b=u[f];a.addGroup(b.start,b.count,b.materialIndex)}let d=e.data.boundingSphere;return d!==void 0&&(a.boundingSphere=new St().fromJSON(d)),e.name&&(a.name=e.name),e.userData&&(a.userData=e.userData),a}},zr=class extends en{constructor(e){super(e)}load(e,t,n,i){let r=this,a=this.path===""?xn.extractUrlBase(e):this.path;this.resourcePath=this.resourcePath||a;let o=new Un(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(c){let l=null;try{l=JSON.parse(c)}catch(u){i!==void 0&&i(u),console.error("THREE:ObjectLoader: Can't parse "+e+".",u.message);return}let h=l.metadata;if(h===void 0||h.type===void 0||h.type.toLowerCase()==="geometry"){i!==void 0&&i(new Error("THREE.ObjectLoader: Can't load "+e)),console.error("THREE.ObjectLoader: Can't load "+e);return}r.parse(l,t)},n,i)}async loadAsync(e,t){let n=this,i=this.path===""?xn.extractUrlBase(e):this.path;this.resourcePath=this.resourcePath||i;let r=new Un(this.manager);r.setPath(this.path),r.setRequestHeader(this.requestHeader),r.setWithCredentials(this.withCredentials);let a=await r.loadAsync(e,t),o=JSON.parse(a),c=o.metadata;if(c===void 0||c.type===void 0||c.type.toLowerCase()==="geometry")throw new Error("THREE.ObjectLoader: Can't load "+e);return await n.parseAsync(o)}parse(e,t){let n=this.parseAnimations(e.animations),i=this.parseShapes(e.shapes),r=this.parseGeometries(e.geometries,i),a=this.parseImages(e.images,function(){t!==void 0&&t(l)}),o=this.parseTextures(e.textures,a),c=this.parseMaterials(e.materials,o),l=this.parseObject(e.object,r,c,o,n),h=this.parseSkeletons(e.skeletons,l);if(this.bindSkeletons(l,h),this.bindLightTargets(l),t!==void 0){let u=!1;for(let d in a)if(a[d].data instanceof HTMLImageElement){u=!0;break}u===!1&&t(l)}return l}async parseAsync(e){let t=this.parseAnimations(e.animations),n=this.parseShapes(e.shapes),i=this.parseGeometries(e.geometries,n),r=await this.parseImagesAsync(e.images),a=this.parseTextures(e.textures,r),o=this.parseMaterials(e.materials,a),c=this.parseObject(e.object,i,o,a,t),l=this.parseSkeletons(e.skeletons,c);return this.bindSkeletons(c,l),this.bindLightTargets(c),c}parseShapes(e){let t={};if(e!==void 0)for(let n=0,i=e.length;n<i;n++){let r=new Ls().fromJSON(e[n]);t[r.uuid]=r}return t}parseSkeletons(e,t){let n={},i={};if(t.traverse(function(r){r.isBone&&(i[r.uuid]=r)}),e!==void 0)for(let r=0,a=e.length;r<a;r++){let o=new ws().fromJSON(e[r],i);n[o.uuid]=o}return n}parseGeometries(e,t){let n={};if(e!==void 0){let i=new Xo;for(let r=0,a=e.length;r<a;r++){let o,c=e[r];switch(c.type){case"BufferGeometry":case"InstancedBufferGeometry":o=i.parse(c);break;default:c.type in ju?o=ju[c.type].fromJSON(c,t):console.warn(`THREE.ObjectLoader: Unsupported geometry type "${c.type}"`)}o.uuid=c.uuid,c.name!==void 0&&(o.name=c.name),c.userData!==void 0&&(o.userData=c.userData),n[c.uuid]=o}}return n}parseMaterials(e,t){let n={},i={};if(e!==void 0){let r=new Go;r.setTextures(t);for(let a=0,o=e.length;a<o;a++){let c=e[a];n[c.uuid]===void 0&&(n[c.uuid]=r.parse(c)),i[c.uuid]=n[c.uuid]}}return i}parseAnimations(e){let t={};if(e!==void 0)for(let n=0;n<e.length;n++){let i=e[n],r=Ns.parse(i);t[r.uuid]=r}return t}parseImages(e,t){let n=this,i={},r;function a(c){return n.manager.itemStart(c),r.load(c,function(){n.manager.itemEnd(c)},void 0,function(){n.manager.itemError(c),n.manager.itemEnd(c)})}function o(c){if(typeof c=="string"){let l=c,h=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(l)?l:n.resourcePath+l;return a(h)}else return c.data?{data:gs(c.type,c.data),width:c.width,height:c.height}:null}if(e!==void 0&&e.length>0){let c=new Br(t);r=new Fs(c),r.setCrossOrigin(this.crossOrigin);for(let l=0,h=e.length;l<h;l++){let u=e[l],d=u.url;if(Array.isArray(d)){let f=[];for(let g=0,b=d.length;g<b;g++){let m=d[g],p=o(m);p!==null&&(p instanceof HTMLImageElement?f.push(p):f.push(new gn(p.data,p.width,p.height)))}i[u.uuid]=new wn(f)}else{let f=o(u.url);i[u.uuid]=new wn(f)}}}return i}async parseImagesAsync(e){let t=this,n={},i;async function r(a){if(typeof a=="string"){let o=a,c=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(o)?o:t.resourcePath+o;return await i.loadAsync(c)}else return a.data?{data:gs(a.type,a.data),width:a.width,height:a.height}:null}if(e!==void 0&&e.length>0){i=new Fs(this.manager),i.setCrossOrigin(this.crossOrigin);for(let a=0,o=e.length;a<o;a++){let c=e[a],l=c.url;if(Array.isArray(l)){let h=[];for(let u=0,d=l.length;u<d;u++){let f=l[u],g=await r(f);g!==null&&(g instanceof HTMLImageElement?h.push(g):h.push(new gn(g.data,g.width,g.height)))}n[c.uuid]=new wn(h)}else{let h=await r(c.url);n[c.uuid]=new wn(h)}}}return n}parseTextures(e,t){function n(r,a){return typeof r=="number"?r:(console.warn("THREE.ObjectLoader.parseTexture: Constant should be in numeric form.",r),a[r])}let i={};if(e!==void 0)for(let r=0,a=e.length;r<a;r++){let o=e[r];o.image===void 0&&console.warn('THREE.ObjectLoader: No "image" specified for',o.uuid),t[o.image]===void 0&&console.warn("THREE.ObjectLoader: Undefined image",o.image);let c=t[o.image],l=c.data,h;Array.isArray(l)?(h=new Ms,l.length===6&&(h.needsUpdate=!0)):(l&&l.data?h=new gn:h=new wt,l&&(h.needsUpdate=!0)),h.source=c,h.uuid=o.uuid,o.name!==void 0&&(h.name=o.name),o.mapping!==void 0&&(h.mapping=n(o.mapping,um)),o.channel!==void 0&&(h.channel=o.channel),o.offset!==void 0&&h.offset.fromArray(o.offset),o.repeat!==void 0&&h.repeat.fromArray(o.repeat),o.center!==void 0&&h.center.fromArray(o.center),o.rotation!==void 0&&(h.rotation=o.rotation),o.wrap!==void 0&&(h.wrapS=n(o.wrap[0],Qu),h.wrapT=n(o.wrap[1],Qu)),o.format!==void 0&&(h.format=o.format),o.internalFormat!==void 0&&(h.internalFormat=o.internalFormat),o.type!==void 0&&(h.type=o.type),o.colorSpace!==void 0&&(h.colorSpace=o.colorSpace),o.minFilter!==void 0&&(h.minFilter=n(o.minFilter,ed)),o.magFilter!==void 0&&(h.magFilter=n(o.magFilter,ed)),o.anisotropy!==void 0&&(h.anisotropy=o.anisotropy),o.flipY!==void 0&&(h.flipY=o.flipY),o.generateMipmaps!==void 0&&(h.generateMipmaps=o.generateMipmaps),o.premultiplyAlpha!==void 0&&(h.premultiplyAlpha=o.premultiplyAlpha),o.unpackAlignment!==void 0&&(h.unpackAlignment=o.unpackAlignment),o.compareFunction!==void 0&&(h.compareFunction=o.compareFunction),o.userData!==void 0&&(h.userData=o.userData),i[o.uuid]=h}return i}parseObject(e,t,n,i,r){let a;function o(d){return t[d]===void 0&&console.warn("THREE.ObjectLoader: Undefined geometry",d),t[d]}function c(d){if(d!==void 0){if(Array.isArray(d)){let f=[];for(let g=0,b=d.length;g<b;g++){let m=d[g];n[m]===void 0&&console.warn("THREE.ObjectLoader: Undefined material",m),f.push(n[m])}return f}return n[d]===void 0&&console.warn("THREE.ObjectLoader: Undefined material",d),n[d]}}function l(d){return i[d]===void 0&&console.warn("THREE.ObjectLoader: Undefined texture",d),i[d]}let h,u;switch(e.type){case"Scene":a=new Ts,e.background!==void 0&&(Number.isInteger(e.background)?a.background=new Ee(e.background):a.background=l(e.background)),e.environment!==void 0&&(a.environment=l(e.environment)),e.fog!==void 0&&(e.fog.type==="Fog"?a.fog=new Ka(e.fog.color,e.fog.near,e.fog.far):e.fog.type==="FogExp2"&&(a.fog=new ja(e.fog.color,e.fog.density)),e.fog.name!==""&&(a.fog.name=e.fog.name)),e.backgroundBlurriness!==void 0&&(a.backgroundBlurriness=e.backgroundBlurriness),e.backgroundIntensity!==void 0&&(a.backgroundIntensity=e.backgroundIntensity),e.backgroundRotation!==void 0&&a.backgroundRotation.fromArray(e.backgroundRotation),e.environmentIntensity!==void 0&&(a.environmentIntensity=e.environmentIntensity),e.environmentRotation!==void 0&&a.environmentRotation.fromArray(e.environmentRotation);break;case"PerspectiveCamera":a=new yt(e.fov,e.aspect,e.near,e.far),e.focus!==void 0&&(a.focus=e.focus),e.zoom!==void 0&&(a.zoom=e.zoom),e.filmGauge!==void 0&&(a.filmGauge=e.filmGauge),e.filmOffset!==void 0&&(a.filmOffset=e.filmOffset),e.view!==void 0&&(a.view=Object.assign({},e.view));break;case"OrthographicCamera":a=new bi(e.left,e.right,e.top,e.bottom,e.near,e.far),e.zoom!==void 0&&(a.zoom=e.zoom),e.view!==void 0&&(a.view=Object.assign({},e.view));break;case"AmbientLight":a=new ko(e.color,e.intensity);break;case"DirectionalLight":a=new ks(e.color,e.intensity),a.target=e.target||"";break;case"PointLight":a=new Bs(e.color,e.intensity,e.distance,e.decay);break;case"RectAreaLight":a=new zo(e.color,e.intensity,e.width,e.height);break;case"SpotLight":a=new Os(e.color,e.intensity,e.distance,e.angle,e.penumbra,e.decay),a.target=e.target||"";break;case"HemisphereLight":a=new Bo(e.color,e.groundColor,e.intensity);break;case"LightProbe":a=new Vo().fromJSON(e);break;case"SkinnedMesh":h=o(e.geometry),u=c(e.material),a=new As(h,u),e.bindMode!==void 0&&(a.bindMode=e.bindMode),e.bindMatrix!==void 0&&a.bindMatrix.fromArray(e.bindMatrix),e.skeleton!==void 0&&(a.skeleton=e.skeleton);break;case"Mesh":h=o(e.geometry),u=c(e.material),a=new At(h,u);break;case"InstancedMesh":h=o(e.geometry),u=c(e.material);let d=e.count,f=e.instanceMatrix,g=e.instanceColor;a=new Es(h,u,d),a.instanceMatrix=new _n(new Float32Array(f.array),16),g!==void 0&&(a.instanceColor=new _n(new Float32Array(g.array),g.itemSize));break;case"BatchedMesh":h=o(e.geometry),u=c(e.material),a=new Qa(e.maxInstanceCount,e.maxVertexCount,e.maxIndexCount,u),a.geometry=h,a.perObjectFrustumCulled=e.perObjectFrustumCulled,a.sortObjects=e.sortObjects,a._drawRanges=e.drawRanges,a._reservedRanges=e.reservedRanges,a._geometryInfo=e.geometryInfo.map(b=>{let m=null,p=null;return b.boundingBox!==void 0&&(m=new Mt().fromJSON(b.boundingBox)),b.boundingSphere!==void 0&&(p=new St().fromJSON(b.boundingSphere)),{...b,boundingBox:m,boundingSphere:p}}),a._instanceInfo=e.instanceInfo,a._availableInstanceIds=e._availableInstanceIds,a._availableGeometryIds=e._availableGeometryIds,a._nextIndexStart=e.nextIndexStart,a._nextVertexStart=e.nextVertexStart,a._geometryCount=e.geometryCount,a._maxInstanceCount=e.maxInstanceCount,a._maxVertexCount=e.maxVertexCount,a._maxIndexCount=e.maxIndexCount,a._geometryInitialized=e.geometryInitialized,a._matricesTexture=l(e.matricesTexture.uuid),a._indirectTexture=l(e.indirectTexture.uuid),e.colorsTexture!==void 0&&(a._colorsTexture=l(e.colorsTexture.uuid)),e.boundingSphere!==void 0&&(a.boundingSphere=new St().fromJSON(e.boundingSphere)),e.boundingBox!==void 0&&(a.boundingBox=new Mt().fromJSON(e.boundingBox));break;case"LOD":a=new Za;break;case"Line":a=new fi(o(e.geometry),c(e.material));break;case"LineLoop":a=new Cs(o(e.geometry),c(e.material));break;case"LineSegments":a=new Rs(o(e.geometry),c(e.material));break;case"PointCloud":case"Points":a=new Is(o(e.geometry),c(e.material));break;case"Sprite":a=new Ja(c(e.material));break;case"Group":a=new _t;break;case"Bone":a=new zi;break;default:a=new ct}if(a.uuid=e.uuid,e.name!==void 0&&(a.name=e.name),e.matrix!==void 0?(a.matrix.fromArray(e.matrix),e.matrixAutoUpdate!==void 0&&(a.matrixAutoUpdate=e.matrixAutoUpdate),a.matrixAutoUpdate&&a.matrix.decompose(a.position,a.quaternion,a.scale)):(e.position!==void 0&&a.position.fromArray(e.position),e.rotation!==void 0&&a.rotation.fromArray(e.rotation),e.quaternion!==void 0&&a.quaternion.fromArray(e.quaternion),e.scale!==void 0&&a.scale.fromArray(e.scale)),e.up!==void 0&&a.up.fromArray(e.up),e.castShadow!==void 0&&(a.castShadow=e.castShadow),e.receiveShadow!==void 0&&(a.receiveShadow=e.receiveShadow),e.shadow&&(e.shadow.intensity!==void 0&&(a.shadow.intensity=e.shadow.intensity),e.shadow.bias!==void 0&&(a.shadow.bias=e.shadow.bias),e.shadow.normalBias!==void 0&&(a.shadow.normalBias=e.shadow.normalBias),e.shadow.radius!==void 0&&(a.shadow.radius=e.shadow.radius),e.shadow.mapSize!==void 0&&a.shadow.mapSize.fromArray(e.shadow.mapSize),e.shadow.camera!==void 0&&(a.shadow.camera=this.parseObject(e.shadow.camera))),e.visible!==void 0&&(a.visible=e.visible),e.frustumCulled!==void 0&&(a.frustumCulled=e.frustumCulled),e.renderOrder!==void 0&&(a.renderOrder=e.renderOrder),e.userData!==void 0&&(a.userData=e.userData),e.layers!==void 0&&(a.layers.mask=e.layers),e.children!==void 0){let d=e.children;for(let f=0;f<d.length;f++)a.add(this.parseObject(d[f],t,n,i,r))}if(e.animations!==void 0){let d=e.animations;for(let f=0;f<d.length;f++){let g=d[f];a.animations.push(r[g])}}if(e.type==="LOD"){e.autoUpdate!==void 0&&(a.autoUpdate=e.autoUpdate);let d=e.levels;for(let f=0;f<d.length;f++){let g=d[f],b=a.getObjectByProperty("uuid",g.object);b!==void 0&&a.addLevel(b,g.distance,g.hysteresis)}}return a}bindSkeletons(e,t){Object.keys(t).length!==0&&e.traverse(function(n){if(n.isSkinnedMesh===!0&&n.skeleton!==void 0){let i=t[n.skeleton];i===void 0?console.warn("THREE.ObjectLoader: No skeleton found with UUID:",n.skeleton):n.bind(i,n.bindMatrix)}})}bindLightTargets(e){e.traverse(function(t){if(t.isDirectionalLight||t.isSpotLight){let n=t.target,i=e.getObjectByProperty("uuid",n);i!==void 0?t.target=i:t.target=new ct}})}},um={UVMapping:ec,CubeReflectionMapping:_i,CubeRefractionMapping:xi,EquirectangularReflectionMapping:Gr,EquirectangularRefractionMapping:Wr,CubeUVReflectionMapping:zs},Qu={RepeatWrapping:Yn,ClampToEdgeWrapping:mn,MirroredRepeatWrapping:Ui},ed={NearestFilter:It,NearestMipmapNearestFilter:Xr,NearestMipmapLinearFilter:vi,LinearFilter:Nt,LinearMipmapNearestFilter:Gi,LinearMipmapLinearFilter:ln},Al=new WeakMap,Hr=class extends en{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=Rn.get(`image-bitmap:${e}`);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(l=>{if(Al.has(a)===!0)i&&i(Al.get(a)),r.manager.itemError(e),r.manager.itemEnd(e);else return t&&t(l),r.manager.itemEnd(e),l});return}return setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a}let o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let c=fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){return Rn.add(`image-bitmap:${e}`,l),t&&t(l),r.manager.itemEnd(e),l}).catch(function(l){i&&i(l),Al.set(c,l),Rn.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});Rn.add(`image-bitmap:${e}`,c),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var qo=class extends yt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var ah="\\[\\]\\.:\\/",dm=new RegExp("["+ah+"]","g"),oh="[^"+ah+"]",fm="[^"+ah.replace("\\.","")+"]",pm=/((?:WC+[\/:])*)/.source.replace("WC",oh),mm=/(WCOD+)?/.source.replace("WCOD",fm),gm=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",oh),bm=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",oh),_m=new RegExp("^"+pm+mm+gm+bm+"$"),xm=["material","materials","bones","map"],zl=class{constructor(e,t,n){let i=n||ht.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},ht=class s{constructor(e,t,n){this.path=t,this.parsedPath=n||s.parseTrackName(t),this.node=s.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new s.Composite(e,t,n):new s(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(dm,"")}static parseTrackName(e){let t=_m.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);xm.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let c=n(o.children);if(c)return c}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,r=t.propertyIndex;if(e||(e=s.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let a=e[i];if(a===void 0){let l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ht.Composite=zl;ht.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ht.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ht.prototype.GetterByBindingType=[ht.prototype._getValue_direct,ht.prototype._getValue_array,ht.prototype._getValue_arrayElement,ht.prototype._getValue_toArray];ht.prototype.SetterByBindingTypeAndVersioning=[[ht.prototype._setValue_direct,ht.prototype._setValue_direct_setNeedsUpdate,ht.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ht.prototype._setValue_array,ht.prototype._setValue_array_setNeedsUpdate,ht.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ht.prototype._setValue_arrayElement,ht.prototype._setValue_arrayElement_setNeedsUpdate,ht.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ht.prototype._setValue_fromArray,ht.prototype._setValue_fromArray_setNeedsUpdate,ht.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var lx=new Float32Array(1);function ch(s,e,t,n){let i=vm(n);switch(t){case Jl:return s*e;case sc:return s*e/i.components*i.byteLength;case qr:return s*e/i.components*i.byteLength;case $l:return s*e*2/i.components*i.byteLength;case rc:return s*e*2/i.components*i.byteLength;case Zl:return s*e*3/i.components*i.byteLength;case kt:return s*e*4/i.components*i.byteLength;case ac:return s*e*4/i.components*i.byteLength;case Yr:case jr:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Kr:case Jr:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case cc:case hc:return Math.max(s,16)*Math.max(e,8)/4;case oc:case lc:return Math.max(s,8)*Math.max(e,8)/2;case uc:case dc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case fc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case pc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case mc:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case gc:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case bc:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case _c:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case xc:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case vc:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case yc:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Mc:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Sc:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Tc:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Ac:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case wc:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Ec:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Rc:case Cc:case Ic:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Pc:case Lc:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Dc:case Uc:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function vm(s){switch(s){case vn:case ql:return{byteLength:1,components:1};case Hs:case Yl:case Vs:return{byteLength:2,components:1};case nc:case ic:return{byteLength:2,components:4};case ei:case tc:case Wt:return{byteLength:4,components:1};case jl:case Kl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");function Tf(){let s=null,e=!1,t=null,n=null;function i(r,a){t(r,a),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function Mm(s){let e=new WeakMap;function t(o,c){let l=o.array,h=o.usage,u=l.byteLength,d=s.createBuffer();s.bindBuffer(c,d),s.bufferData(c,l,h),o.onUploadCallback();let f;if(l instanceof Float32Array)f=s.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=s.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=s.SHORT;else if(l instanceof Uint32Array)f=s.UNSIGNED_INT;else if(l instanceof Int32Array)f=s.INT;else if(l instanceof Int8Array)f=s.BYTE;else if(l instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,c,l){let h=c.array,u=c.updateRanges;if(s.bindBuffer(l,o),u.length===0)s.bufferSubData(l,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){let g=u[d],b=u[f];b.start<=g.start+g.count+1?g.count=Math.max(g.count,b.start+b.count-g.start):(++d,u[d]=b)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){let b=u[f];s.bufferSubData(l,b.start*h.BYTES_PER_ELEMENT,h,b.start,b.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=e.get(o);c&&(s.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:i,remove:r,update:a}}var Sm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Tm=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Am=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,wm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Em=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Rm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Cm=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Im=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Pm=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Lm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Dm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Um=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Nm=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Fm=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Om=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Bm=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,km=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,zm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Hm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Vm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Gm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Wm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Xm=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,qm=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Ym=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,jm=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Km=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Jm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Zm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,$m=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Qm="gl_FragColor = linearToOutputTexel( gl_FragColor );",eg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,tg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,ng=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ig=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,sg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,rg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,ag=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,og=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,cg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,lg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,hg=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,ug=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,dg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,fg=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,pg=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,mg=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,gg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,bg=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,_g=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,xg=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,vg=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,yg=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Mg=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Sg=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Tg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ag=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,wg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Eg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Rg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Cg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ig=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Pg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Lg=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Dg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ug=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ng=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Fg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Og=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Bg=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,kg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,zg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Hg=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Vg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Gg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Wg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Xg=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,qg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Yg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,jg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Kg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Jg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Zg=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,$g=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Qg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,eb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,tb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,nb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ib=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,sb=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,rb=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,ab=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,ob=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,cb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,lb=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,hb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ub=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,db=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,fb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,pb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,mb=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,gb=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,bb=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,_b=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,xb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,vb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,yb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Mb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Sb=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Tb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ab=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Eb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Rb=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Cb=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Ib=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Pb=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Lb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Db=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ub=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Nb=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Fb=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Ob=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Bb=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,kb=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zb=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Hb=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Vb=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Gb=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Wb=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Xb=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qb=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Yb=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jb=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Kb=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Jb=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Zb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,$b=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Qb=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,e_=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,t_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,je={alphahash_fragment:Sm,alphahash_pars_fragment:Tm,alphamap_fragment:Am,alphamap_pars_fragment:wm,alphatest_fragment:Em,alphatest_pars_fragment:Rm,aomap_fragment:Cm,aomap_pars_fragment:Im,batching_pars_vertex:Pm,batching_vertex:Lm,begin_vertex:Dm,beginnormal_vertex:Um,bsdfs:Nm,iridescence_fragment:Fm,bumpmap_pars_fragment:Om,clipping_planes_fragment:Bm,clipping_planes_pars_fragment:km,clipping_planes_pars_vertex:zm,clipping_planes_vertex:Hm,color_fragment:Vm,color_pars_fragment:Gm,color_pars_vertex:Wm,color_vertex:Xm,common:qm,cube_uv_reflection_fragment:Ym,defaultnormal_vertex:jm,displacementmap_pars_vertex:Km,displacementmap_vertex:Jm,emissivemap_fragment:Zm,emissivemap_pars_fragment:$m,colorspace_fragment:Qm,colorspace_pars_fragment:eg,envmap_fragment:tg,envmap_common_pars_fragment:ng,envmap_pars_fragment:ig,envmap_pars_vertex:sg,envmap_physical_pars_fragment:mg,envmap_vertex:rg,fog_vertex:ag,fog_pars_vertex:og,fog_fragment:cg,fog_pars_fragment:lg,gradientmap_pars_fragment:hg,lightmap_pars_fragment:ug,lights_lambert_fragment:dg,lights_lambert_pars_fragment:fg,lights_pars_begin:pg,lights_toon_fragment:gg,lights_toon_pars_fragment:bg,lights_phong_fragment:_g,lights_phong_pars_fragment:xg,lights_physical_fragment:vg,lights_physical_pars_fragment:yg,lights_fragment_begin:Mg,lights_fragment_maps:Sg,lights_fragment_end:Tg,logdepthbuf_fragment:Ag,logdepthbuf_pars_fragment:wg,logdepthbuf_pars_vertex:Eg,logdepthbuf_vertex:Rg,map_fragment:Cg,map_pars_fragment:Ig,map_particle_fragment:Pg,map_particle_pars_fragment:Lg,metalnessmap_fragment:Dg,metalnessmap_pars_fragment:Ug,morphinstance_vertex:Ng,morphcolor_vertex:Fg,morphnormal_vertex:Og,morphtarget_pars_vertex:Bg,morphtarget_vertex:kg,normal_fragment_begin:zg,normal_fragment_maps:Hg,normal_pars_fragment:Vg,normal_pars_vertex:Gg,normal_vertex:Wg,normalmap_pars_fragment:Xg,clearcoat_normal_fragment_begin:qg,clearcoat_normal_fragment_maps:Yg,clearcoat_pars_fragment:jg,iridescence_pars_fragment:Kg,opaque_fragment:Jg,packing:Zg,premultiplied_alpha_fragment:$g,project_vertex:Qg,dithering_fragment:eb,dithering_pars_fragment:tb,roughnessmap_fragment:nb,roughnessmap_pars_fragment:ib,shadowmap_pars_fragment:sb,shadowmap_pars_vertex:rb,shadowmap_vertex:ab,shadowmask_pars_fragment:ob,skinbase_vertex:cb,skinning_pars_vertex:lb,skinning_vertex:hb,skinnormal_vertex:ub,specularmap_fragment:db,specularmap_pars_fragment:fb,tonemapping_fragment:pb,tonemapping_pars_fragment:mb,transmission_fragment:gb,transmission_pars_fragment:bb,uv_pars_fragment:_b,uv_pars_vertex:xb,uv_vertex:vb,worldpos_vertex:yb,background_vert:Mb,background_frag:Sb,backgroundCube_vert:Tb,backgroundCube_frag:Ab,cube_vert:wb,cube_frag:Eb,depth_vert:Rb,depth_frag:Cb,distanceRGBA_vert:Ib,distanceRGBA_frag:Pb,equirect_vert:Lb,equirect_frag:Db,linedashed_vert:Ub,linedashed_frag:Nb,meshbasic_vert:Fb,meshbasic_frag:Ob,meshlambert_vert:Bb,meshlambert_frag:kb,meshmatcap_vert:zb,meshmatcap_frag:Hb,meshnormal_vert:Vb,meshnormal_frag:Gb,meshphong_vert:Wb,meshphong_frag:Xb,meshphysical_vert:qb,meshphysical_frag:Yb,meshtoon_vert:jb,meshtoon_frag:Kb,points_vert:Jb,points_frag:Zb,shadow_vert:$b,shadow_frag:Qb,sprite_vert:e_,sprite_frag:t_},_e={common:{diffuse:{value:new Ee(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xe}},envmap:{envMap:{value:null},envMapRotation:{value:new Xe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xe},normalScale:{value:new ie(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ee(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ee(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0},uvTransform:{value:new Xe}},sprite:{diffuse:{value:new Ee(16777215)},opacity:{value:1},center:{value:new ie(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}}},On={basic:{uniforms:Ft([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.fog]),vertexShader:je.meshbasic_vert,fragmentShader:je.meshbasic_frag},lambert:{uniforms:Ft([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new Ee(0)}}]),vertexShader:je.meshlambert_vert,fragmentShader:je.meshlambert_frag},phong:{uniforms:Ft([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new Ee(0)},specular:{value:new Ee(1118481)},shininess:{value:30}}]),vertexShader:je.meshphong_vert,fragmentShader:je.meshphong_frag},standard:{uniforms:Ft([_e.common,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.roughnessmap,_e.metalnessmap,_e.fog,_e.lights,{emissive:{value:new Ee(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag},toon:{uniforms:Ft([_e.common,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.gradientmap,_e.fog,_e.lights,{emissive:{value:new Ee(0)}}]),vertexShader:je.meshtoon_vert,fragmentShader:je.meshtoon_frag},matcap:{uniforms:Ft([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,{matcap:{value:null}}]),vertexShader:je.meshmatcap_vert,fragmentShader:je.meshmatcap_frag},points:{uniforms:Ft([_e.points,_e.fog]),vertexShader:je.points_vert,fragmentShader:je.points_frag},dashed:{uniforms:Ft([_e.common,_e.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:je.linedashed_vert,fragmentShader:je.linedashed_frag},depth:{uniforms:Ft([_e.common,_e.displacementmap]),vertexShader:je.depth_vert,fragmentShader:je.depth_frag},normal:{uniforms:Ft([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,{opacity:{value:1}}]),vertexShader:je.meshnormal_vert,fragmentShader:je.meshnormal_frag},sprite:{uniforms:Ft([_e.sprite,_e.fog]),vertexShader:je.sprite_vert,fragmentShader:je.sprite_frag},background:{uniforms:{uvTransform:{value:new Xe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:je.background_vert,fragmentShader:je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Xe}},vertexShader:je.backgroundCube_vert,fragmentShader:je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:je.cube_vert,fragmentShader:je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:je.equirect_vert,fragmentShader:je.equirect_frag},distanceRGBA:{uniforms:Ft([_e.common,_e.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:je.distanceRGBA_vert,fragmentShader:je.distanceRGBA_frag},shadow:{uniforms:Ft([_e.lights,_e.fog,{color:{value:new Ee(0)},opacity:{value:1}}]),vertexShader:je.shadow_vert,fragmentShader:je.shadow_frag}};On.physical={uniforms:Ft([On.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xe},clearcoatNormalScale:{value:new ie(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xe},sheen:{value:0},sheenColor:{value:new Ee(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xe},transmissionSamplerSize:{value:new ie},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xe},attenuationDistance:{value:0},attenuationColor:{value:new Ee(0)},specularColor:{value:new Ee(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xe},anisotropyVector:{value:new ie},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xe}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag};var Nc={r:0,b:0,g:0},qi=new Zt,n_=new ze;function i_(s,e,t,n,i,r,a){let o=new Ee(0),c=r===!0?0:1,l,h,u=null,d=0,f=null;function g(x){let _=x.isScene===!0?x.background:null;return _&&_.isTexture&&(_=(x.backgroundBlurriness>0?t:e).get(_)),_}function b(x){let _=!1,T=g(x);T===null?p(o,c):T&&T.isColor&&(p(T,1),_=!0);let w=s.xr.getEnvironmentBlendMode();w==="additive"?n.buffers.color.setClear(0,0,0,1,a):w==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(s.autoClear||_)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(x,_){let T=g(_);T&&(T.isCubeTexture||T.mapping===zs)?(h===void 0&&(h=new At(new ki(1,1,1),new $t({name:"BackgroundCubeMaterial",uniforms:Xi(On.backgroundCube.uniforms),vertexShader:On.backgroundCube.vertexShader,fragmentShader:On.backgroundCube.fragmentShader,side:Ht,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(w,C,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),qi.copy(_.backgroundRotation),qi.x*=-1,qi.y*=-1,qi.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(qi.y*=-1,qi.z*=-1),h.material.uniforms.envMap.value=T,h.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(n_.makeRotationFromEuler(qi)),h.material.toneMapped=Je.getTransfer(T.colorSpace)!==at,(u!==T||d!==T.version||f!==s.toneMapping)&&(h.material.needsUpdate=!0,u=T,d=T.version,f=s.toneMapping),h.layers.enableAll(),x.unshift(h,h.geometry,h.material,0,0,null)):T&&T.isTexture&&(l===void 0&&(l=new At(new Us(2,2),new $t({name:"BackgroundMaterial",uniforms:Xi(On.background.uniforms),vertexShader:On.background.vertexShader,fragmentShader:On.background.fragmentShader,side:bn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=T,l.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,l.material.toneMapped=Je.getTransfer(T.colorSpace)!==at,T.matrixAutoUpdate===!0&&T.updateMatrix(),l.material.uniforms.uvTransform.value.copy(T.matrix),(u!==T||d!==T.version||f!==s.toneMapping)&&(l.material.needsUpdate=!0,u=T,d=T.version,f=s.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null))}function p(x,_){x.getRGB(Nc,sh(s)),n.buffers.color.setClear(Nc.r,Nc.g,Nc.b,_,a)}function v(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(x,_=1){o.set(x),c=_,p(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(x){c=x,p(o,c)},render:b,addToRenderList:m,dispose:v}}function s_(s,e){let t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null),r=i,a=!1;function o(y,P,O,z,q){let K=!1,X=u(z,O,P);r!==X&&(r=X,l(r.object)),K=f(y,z,O,q),K&&g(y,z,O,q),q!==null&&e.update(q,s.ELEMENT_ARRAY_BUFFER),(K||a)&&(a=!1,_(y,P,O,z),q!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(q).buffer))}function c(){return s.createVertexArray()}function l(y){return s.bindVertexArray(y)}function h(y){return s.deleteVertexArray(y)}function u(y,P,O){let z=O.wireframe===!0,q=n[y.id];q===void 0&&(q={},n[y.id]=q);let K=q[P.id];K===void 0&&(K={},q[P.id]=K);let X=K[z];return X===void 0&&(X=d(c()),K[z]=X),X}function d(y){let P=[],O=[],z=[];for(let q=0;q<t;q++)P[q]=0,O[q]=0,z[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:O,attributeDivisors:z,object:y,attributes:{},index:null}}function f(y,P,O,z){let q=r.attributes,K=P.attributes,X=0,ae=O.getAttributes();for(let W in ae)if(ae[W].location>=0){let xe=q[W],Te=K[W];if(Te===void 0&&(W==="instanceMatrix"&&y.instanceMatrix&&(Te=y.instanceMatrix),W==="instanceColor"&&y.instanceColor&&(Te=y.instanceColor)),xe===void 0||xe.attribute!==Te||Te&&xe.data!==Te.data)return!0;X++}return r.attributesNum!==X||r.index!==z}function g(y,P,O,z){let q={},K=P.attributes,X=0,ae=O.getAttributes();for(let W in ae)if(ae[W].location>=0){let xe=K[W];xe===void 0&&(W==="instanceMatrix"&&y.instanceMatrix&&(xe=y.instanceMatrix),W==="instanceColor"&&y.instanceColor&&(xe=y.instanceColor));let Te={};Te.attribute=xe,xe&&xe.data&&(Te.data=xe.data),q[W]=Te,X++}r.attributes=q,r.attributesNum=X,r.index=z}function b(){let y=r.newAttributes;for(let P=0,O=y.length;P<O;P++)y[P]=0}function m(y){p(y,0)}function p(y,P){let O=r.newAttributes,z=r.enabledAttributes,q=r.attributeDivisors;O[y]=1,z[y]===0&&(s.enableVertexAttribArray(y),z[y]=1),q[y]!==P&&(s.vertexAttribDivisor(y,P),q[y]=P)}function v(){let y=r.newAttributes,P=r.enabledAttributes;for(let O=0,z=P.length;O<z;O++)P[O]!==y[O]&&(s.disableVertexAttribArray(O),P[O]=0)}function x(y,P,O,z,q,K,X){X===!0?s.vertexAttribIPointer(y,P,O,q,K):s.vertexAttribPointer(y,P,O,z,q,K)}function _(y,P,O,z){b();let q=z.attributes,K=O.getAttributes(),X=P.defaultAttributeValues;for(let ae in K){let W=K[ae];if(W.location>=0){let me=q[ae];if(me===void 0&&(ae==="instanceMatrix"&&y.instanceMatrix&&(me=y.instanceMatrix),ae==="instanceColor"&&y.instanceColor&&(me=y.instanceColor)),me!==void 0){let xe=me.normalized,Te=me.itemSize,Ve=e.get(me);if(Ve===void 0)continue;let qe=Ve.buffer,Qe=Ve.type,Ge=Ve.bytesPerElement,j=Qe===s.INT||Qe===s.UNSIGNED_INT||me.gpuType===tc;if(me.isInterleavedBufferAttribute){let ee=me.data,ve=ee.stride,Ae=me.offset;if(ee.isInstancedInterleavedBuffer){for(let Se=0;Se<W.locationSize;Se++)p(W.location+Se,ee.meshPerAttribute);y.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let Se=0;Se<W.locationSize;Se++)m(W.location+Se);s.bindBuffer(s.ARRAY_BUFFER,qe);for(let Se=0;Se<W.locationSize;Se++)x(W.location+Se,Te/W.locationSize,Qe,xe,ve*Ge,(Ae+Te/W.locationSize*Se)*Ge,j)}else{if(me.isInstancedBufferAttribute){for(let ee=0;ee<W.locationSize;ee++)p(W.location+ee,me.meshPerAttribute);y.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let ee=0;ee<W.locationSize;ee++)m(W.location+ee);s.bindBuffer(s.ARRAY_BUFFER,qe);for(let ee=0;ee<W.locationSize;ee++)x(W.location+ee,Te/W.locationSize,Qe,xe,Te*Ge,Te/W.locationSize*ee*Ge,j)}}else if(X!==void 0){let xe=X[ae];if(xe!==void 0)switch(xe.length){case 2:s.vertexAttrib2fv(W.location,xe);break;case 3:s.vertexAttrib3fv(W.location,xe);break;case 4:s.vertexAttrib4fv(W.location,xe);break;default:s.vertexAttrib1fv(W.location,xe)}}}}v()}function T(){I();for(let y in n){let P=n[y];for(let O in P){let z=P[O];for(let q in z)h(z[q].object),delete z[q];delete P[O]}delete n[y]}}function w(y){if(n[y.id]===void 0)return;let P=n[y.id];for(let O in P){let z=P[O];for(let q in z)h(z[q].object),delete z[q];delete P[O]}delete n[y.id]}function C(y){for(let P in n){let O=n[P];if(O[y.id]===void 0)continue;let z=O[y.id];for(let q in z)h(z[q].object),delete z[q];delete O[y.id]}}function I(){S(),a=!0,r!==i&&(r=i,l(r.object))}function S(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:I,resetDefaultState:S,dispose:T,releaseStatesOfGeometry:w,releaseStatesOfProgram:C,initAttributes:b,enableAttribute:m,disableUnusedAttributes:v}}function r_(s,e,t){let n;function i(l){n=l}function r(l,h){s.drawArrays(n,l,h),t.update(h,n,1)}function a(l,h,u){u!==0&&(s.drawArraysInstanced(n,l,h,u),t.update(h,n,u))}function o(l,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];t.update(f,n,1)}function c(l,h,u,d){if(u===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<l.length;g++)a(l[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,h,0,d,0,u);let g=0;for(let b=0;b<u;b++)g+=h[b]*d[b];t.update(g,n,1)}}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function a_(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let C=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(C){return!(C!==kt&&n.convert(C)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){let I=C===Vs&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==vn&&n.convert(C)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==Wt&&!I)}function c(C){if(C==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let u=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),v=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),x=s.getParameter(s.MAX_VARYING_VECTORS),_=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),T=g>0,w=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:b,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:v,maxVaryings:x,maxFragmentUniforms:_,vertexTextures:T,maxSamples:w}}function o_(s){let e=this,t=null,n=0,i=!1,r=!1,a=new Tn,o=new Xe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||i;return i=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){let g=u.clippingPlanes,b=u.clipIntersection,m=u.clipShadows,p=s.get(u);if(!i||g===null||g.length===0||r&&!m)r?h(null):l();else{let v=r?0:n,x=v*4,_=p.clippingState||null;c.value=_,_=h(g,d,x,f);for(let T=0;T!==x;++T)_[T]=t[T];p.clippingState=_,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=v}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,g){let b=u!==null?u.length:0,m=null;if(b!==0){if(m=c.value,g!==!0||m===null){let p=f+b*4,v=d.matrixWorldInverse;o.getNormalMatrix(v),(m===null||m.length<p)&&(m=new Float32Array(p));for(let x=0,_=f;x!==b;++x,_+=4)a.copy(u[x]).applyMatrix4(v,o),a.normal.toArray(m,_),m[_+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,m}}function c_(s){let e=new WeakMap;function t(a,o){return o===Gr?a.mapping=_i:o===Wr&&(a.mapping=xi),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===Gr||o===Wr)if(e.has(a)){let c=e.get(a).texture;return t(c,a.mapping)}else{let c=a.image;if(c&&c.height>0){let l=new Ya(c.height);return l.fromEquirectangularTexture(s,a),e.set(a,l),a.addEventListener("dispose",i),t(l.texture,a.mapping)}else return null}}return a}function i(a){let o=a.target;o.removeEventListener("dispose",i);let c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var Ys=4,ef=[.125,.215,.35,.446,.526,.582],Ki=20,lh=new bi,tf=new Ee,hh=null,uh=0,dh=0,fh=!1,ji=(1+Math.sqrt(5))/2,qs=1/ji,nf=[new R(-ji,qs,0),new R(ji,qs,0),new R(-qs,0,ji),new R(qs,0,ji),new R(0,ji,-qs),new R(0,ji,qs),new R(-1,1,-1),new R(1,1,-1),new R(-1,1,1),new R(1,1,1)],l_=new R,Bc=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100,r={}){let{size:a=256,position:o=l_}=r;hh=this._renderer.getRenderTarget(),uh=this._renderer.getActiveCubeFace(),dh=this._renderer.getActiveMipmapLevel(),fh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,i,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=af(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=rf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(hh,uh,dh),this._renderer.xr.enabled=fh,e.scissorTest=!1,Fc(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===_i||e.mapping===xi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),hh=this._renderer.getRenderTarget(),uh=this._renderer.getActiveCubeFace(),dh=this._renderer.getActiveMipmapLevel(),fh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Nt,minFilter:Nt,generateMipmaps:!1,type:Vs,format:kt,colorSpace:Pt,depthBuffer:!1},i=sf(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=sf(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=h_(r)),this._blurMaterial=u_(r,e,t)}return i}_compileMaterial(e){let t=new At(this._lodPlanes[0],e);this._renderer.compile(t,lh)}_sceneToCubeUV(e,t,n,i,r){let c=new yt(90,1,t,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(tf),u.toneMapping=Qn,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(i),u.clearDepth(),u.setRenderTarget(null));let b=new Xt({name:"PMREM.Background",side:Ht,depthWrite:!1,depthTest:!1}),m=new At(new ki,b),p=!1,v=e.background;v?v.isColor&&(b.color.copy(v),e.background=null,p=!0):(b.color.copy(tf),p=!0);for(let x=0;x<6;x++){let _=x%3;_===0?(c.up.set(0,l[x],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+h[x],r.y,r.z)):_===1?(c.up.set(0,0,l[x]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+h[x],r.z)):(c.up.set(0,l[x],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+h[x]));let T=this._cubeSize;Fc(i,_*T,x>2?T:0,T,T),u.setRenderTarget(i),p&&u.render(m,c),u.render(e,c)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=f,u.autoClear=d,e.background=v}_textureToCubeUV(e,t){let n=this._renderer,i=e.mapping===_i||e.mapping===xi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=af()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=rf());let r=i?this._cubemapMaterial:this._equirectMaterial,a=new At(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;let c=this._cubeSize;Fc(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,lh)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let i=this._lodPlanes.length;for(let r=1;r<i;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=nf[(i-r-1)%nf.length];this._blur(e,r-1,r,a,o)}t.autoClear=n}_blur(e,t,n,i,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",r),this._halfBlur(a,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,a,o){let c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new At(this._lodPlanes[i],l),d=l.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Ki-1),b=r/g,m=isFinite(r)?1+Math.floor(h*b):Ki;m>Ki&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ki}`);let p=[],v=0;for(let C=0;C<Ki;++C){let I=C/b,S=Math.exp(-I*I/2);p.push(S),C===0?v+=S:C<m&&(v+=2*S)}for(let C=0;C<p.length;C++)p[C]=p[C]/v;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:x}=this;d.dTheta.value=g,d.mipInt.value=x-n;let _=this._sizeLods[i],T=3*_*(i>x-Ys?i-x+Ys:0),w=4*(this._cubeSize-_);Fc(t,T,w,3*_,2*_),c.setRenderTarget(t),c.render(u,lh)}};function h_(s){let e=[],t=[],n=[],i=s,r=s-Ys+1+ef.length;for(let a=0;a<r;a++){let o=Math.pow(2,i);t.push(o);let c=1/o;a>s-Ys?c=ef[a-s+Ys-1]:a===0&&(c=0),n.push(c);let l=1/(o-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,b=3,m=2,p=1,v=new Float32Array(b*g*f),x=new Float32Array(m*g*f),_=new Float32Array(p*g*f);for(let w=0;w<f;w++){let C=w%3*2/3-1,I=w>2?0:-1,S=[C,I,0,C+2/3,I,0,C+2/3,I+1,0,C,I,0,C+2/3,I+1,0,C,I+1,0];v.set(S,b*g*w),x.set(d,m*g*w);let y=[w,w,w,w,w,w];_.set(y,p*g*w)}let T=new nt;T.setAttribute("position",new ft(v,b)),T.setAttribute("uv",new ft(x,m)),T.setAttribute("faceIndex",new ft(_,p)),e.push(T),i>Ys&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function sf(s,e,t){let n=new Cn(s,e,t);return n.texture.mapping=zs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Fc(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function u_(s,e,t){let n=new Float32Array(Ki),i=new R(0,1,0);return new $t({name:"SphericalGaussianBlur",defines:{n:Ki,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Sh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:$n,depthTest:!1,depthWrite:!1})}function rf(){return new $t({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Sh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:$n,depthTest:!1,depthWrite:!1})}function af(){return new $t({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Sh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:$n,depthTest:!1,depthWrite:!1})}function Sh(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function d_(s){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){let c=o.mapping,l=c===Gr||c===Wr,h=c===_i||c===xi;if(l||h){let u=e.get(o),d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new Bc(s)),u=l?t.fromEquirectangular(o,u):t.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),u.texture;if(u!==void 0)return u.texture;{let f=o.image;return l&&f&&f.height>0||h&&f&&i(f)?(t===null&&(t=new Bc(s)),u=l?t.fromEquirectangular(o):t.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function i(o){let c=0,l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function r(o){let c=o.target;c.removeEventListener("dispose",r);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function f_(s){let e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let i=t(n);return i===null&&ys("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function p_(s,e,t,n){let i={},r=new WeakMap;function a(u){let d=u.target;d.index!==null&&e.remove(d.index);for(let g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",a),delete i[d.id];let f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(u,d){return i[d.id]===!0||(d.addEventListener("dispose",a),i[d.id]=!0,t.memory.geometries++),d}function c(u){let d=u.attributes;for(let f in d)e.update(d[f],s.ARRAY_BUFFER)}function l(u){let d=[],f=u.index,g=u.attributes.position,b=0;if(f!==null){let v=f.array;b=f.version;for(let x=0,_=v.length;x<_;x+=3){let T=v[x+0],w=v[x+1],C=v[x+2];d.push(T,w,w,C,C,T)}}else if(g!==void 0){let v=g.array;b=g.version;for(let x=0,_=v.length/3-1;x<_;x+=3){let T=x+0,w=x+1,C=x+2;d.push(T,w,w,C,C,T)}}else return;let m=new(ih(d)?vr:xr)(d,1);m.version=b;let p=r.get(u);p&&e.remove(p),r.set(u,m)}function h(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return r.get(u)}return{get:o,update:c,getWireframeAttribute:h}}function m_(s,e,t){let n;function i(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function c(d,f){s.drawElements(n,f,r,d*a),t.update(f,n,1)}function l(d,f,g){g!==0&&(s.drawElementsInstanced(n,f,r,d*a,g),t.update(f,n,g))}function h(d,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];t.update(m,n,1)}function u(d,f,g,b){if(g===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)l(d[p]/a,f[p],b[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,b,0,g);let p=0;for(let v=0;v<g;v++)p+=f[v]*b[v];t.update(p,n,1)}}this.setMode=i,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function g_(s){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case s.TRIANGLES:t.triangles+=o*(r/3);break;case s.LINES:t.lines+=o*(r/2);break;case s.LINE_STRIP:t.lines+=o*(r-1);break;case s.LINE_LOOP:t.lines+=o*r;break;case s.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function b_(s,e,t){let n=new WeakMap,i=new et;function r(a,o,c){let l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(o);if(d===void 0||d.count!==u){let S=function(){C.dispose(),n.delete(o),o.removeEventListener("dispose",S)};d!==void 0&&d.texture.dispose();let f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,b=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],v=o.morphAttributes.color||[],x=0;f===!0&&(x=1),g===!0&&(x=2),b===!0&&(x=3);let _=o.attributes.position.count*x,T=1;_>e.maxTextureSize&&(T=Math.ceil(_/e.maxTextureSize),_=e.maxTextureSize);let w=new Float32Array(_*T*4*u),C=new br(w,_,T,u);C.type=Wt,C.needsUpdate=!0;let I=x*4;for(let y=0;y<u;y++){let P=m[y],O=p[y],z=v[y],q=_*T*4*y;for(let K=0;K<P.count;K++){let X=K*I;f===!0&&(i.fromBufferAttribute(P,K),w[q+X+0]=i.x,w[q+X+1]=i.y,w[q+X+2]=i.z,w[q+X+3]=0),g===!0&&(i.fromBufferAttribute(O,K),w[q+X+4]=i.x,w[q+X+5]=i.y,w[q+X+6]=i.z,w[q+X+7]=0),b===!0&&(i.fromBufferAttribute(z,K),w[q+X+8]=i.x,w[q+X+9]=i.y,w[q+X+10]=i.z,w[q+X+11]=z.itemSize===4?i.w:1)}}d={count:u,texture:C,size:new ie(_,T)},n.set(o,d),o.addEventListener("dispose",S)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(s,"morphTexture",a.morphTexture,t);else{let f=0;for(let b=0;b<l.length;b++)f+=l[b];let g=o.morphTargetsRelative?1:1-f;c.getUniforms().setValue(s,"morphTargetBaseInfluence",g),c.getUniforms().setValue(s,"morphTargetInfluences",l)}c.getUniforms().setValue(s,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function __(s,e,t,n){let i=new WeakMap;function r(c){let l=n.render.frame,h=c.geometry,u=e.get(c,h);if(i.get(u)!==l&&(e.update(u),i.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),i.get(c)!==l&&(t.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,s.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){let d=c.skeleton;i.get(d)!==l&&(d.update(),i.set(d,l))}return u}function a(){i=new WeakMap}function o(c){let l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:a}}var Af=new wt,of=new Sr(1,1),wf=new br,Ef=new Xa,Rf=new Ms,cf=[],lf=[],hf=new Float32Array(16),uf=new Float32Array(9),df=new Float32Array(4);function Ks(s,e,t){let n=s[0];if(n<=0||n>0)return s;let i=e*t,r=cf[i];if(r===void 0&&(r=new Float32Array(i),cf[i]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(r,o)}return r}function Et(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function Rt(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function zc(s,e){let t=lf[e];t===void 0&&(t=new Int32Array(e),lf[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function x_(s,e){let t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function v_(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;s.uniform2fv(this.addr,e),Rt(t,e)}}function y_(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Et(t,e))return;s.uniform3fv(this.addr,e),Rt(t,e)}}function M_(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;s.uniform4fv(this.addr,e),Rt(t,e)}}function S_(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(Et(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Rt(t,e)}else{if(Et(t,n))return;df.set(n),s.uniformMatrix2fv(this.addr,!1,df),Rt(t,n)}}function T_(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(Et(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Rt(t,e)}else{if(Et(t,n))return;uf.set(n),s.uniformMatrix3fv(this.addr,!1,uf),Rt(t,n)}}function A_(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(Et(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Rt(t,e)}else{if(Et(t,n))return;hf.set(n),s.uniformMatrix4fv(this.addr,!1,hf),Rt(t,n)}}function w_(s,e){let t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function E_(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;s.uniform2iv(this.addr,e),Rt(t,e)}}function R_(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Et(t,e))return;s.uniform3iv(this.addr,e),Rt(t,e)}}function C_(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;s.uniform4iv(this.addr,e),Rt(t,e)}}function I_(s,e){let t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function P_(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;s.uniform2uiv(this.addr,e),Rt(t,e)}}function L_(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Et(t,e))return;s.uniform3uiv(this.addr,e),Rt(t,e)}}function D_(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;s.uniform4uiv(this.addr,e),Rt(t,e)}}function U_(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(of.compareFunction=eh,r=of):r=Af,t.setTexture2D(e||r,i)}function N_(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Ef,i)}function F_(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Rf,i)}function O_(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||wf,i)}function B_(s){switch(s){case 5126:return x_;case 35664:return v_;case 35665:return y_;case 35666:return M_;case 35674:return S_;case 35675:return T_;case 35676:return A_;case 5124:case 35670:return w_;case 35667:case 35671:return E_;case 35668:case 35672:return R_;case 35669:case 35673:return C_;case 5125:return I_;case 36294:return P_;case 36295:return L_;case 36296:return D_;case 35678:case 36198:case 36298:case 36306:case 35682:return U_;case 35679:case 36299:case 36307:return N_;case 35680:case 36300:case 36308:case 36293:return F_;case 36289:case 36303:case 36311:case 36292:return O_}}function k_(s,e){s.uniform1fv(this.addr,e)}function z_(s,e){let t=Ks(e,this.size,2);s.uniform2fv(this.addr,t)}function H_(s,e){let t=Ks(e,this.size,3);s.uniform3fv(this.addr,t)}function V_(s,e){let t=Ks(e,this.size,4);s.uniform4fv(this.addr,t)}function G_(s,e){let t=Ks(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function W_(s,e){let t=Ks(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function X_(s,e){let t=Ks(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function q_(s,e){s.uniform1iv(this.addr,e)}function Y_(s,e){s.uniform2iv(this.addr,e)}function j_(s,e){s.uniform3iv(this.addr,e)}function K_(s,e){s.uniform4iv(this.addr,e)}function J_(s,e){s.uniform1uiv(this.addr,e)}function Z_(s,e){s.uniform2uiv(this.addr,e)}function $_(s,e){s.uniform3uiv(this.addr,e)}function Q_(s,e){s.uniform4uiv(this.addr,e)}function e0(s,e,t){let n=this.cache,i=e.length,r=zc(t,i);Et(n,r)||(s.uniform1iv(this.addr,r),Rt(n,r));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||Af,r[a])}function t0(s,e,t){let n=this.cache,i=e.length,r=zc(t,i);Et(n,r)||(s.uniform1iv(this.addr,r),Rt(n,r));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||Ef,r[a])}function n0(s,e,t){let n=this.cache,i=e.length,r=zc(t,i);Et(n,r)||(s.uniform1iv(this.addr,r),Rt(n,r));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||Rf,r[a])}function i0(s,e,t){let n=this.cache,i=e.length,r=zc(t,i);Et(n,r)||(s.uniform1iv(this.addr,r),Rt(n,r));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||wf,r[a])}function s0(s){switch(s){case 5126:return k_;case 35664:return z_;case 35665:return H_;case 35666:return V_;case 35674:return G_;case 35675:return W_;case 35676:return X_;case 5124:case 35670:return q_;case 35667:case 35671:return Y_;case 35668:case 35672:return j_;case 35669:case 35673:return K_;case 5125:return J_;case 36294:return Z_;case 36295:return $_;case 36296:return Q_;case 35678:case 36198:case 36298:case 36306:case 35682:return e0;case 35679:case 36299:case 36307:return t0;case 35680:case 36300:case 36308:case 36293:return n0;case 36289:case 36303:case 36311:case 36292:return i0}}var mh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=B_(t.type)}},gh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=s0(t.type)}},bh=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let r=0,a=i.length;r!==a;++r){let o=i[r];o.setValue(e,t[o.id],n)}}},ph=/(\w+)(\])?(\[|\.)?/g;function ff(s,e){s.seq.push(e),s.map[e.id]=e}function r0(s,e,t){let n=s.name,i=n.length;for(ph.lastIndex=0;;){let r=ph.exec(n),a=ph.lastIndex,o=r[1],c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===i){ff(t,l===void 0?new mh(o,s,e):new gh(o,s,e));break}else{let u=t.map[o];u===void 0&&(u=new bh(o),ff(t,u)),t=u}}}var js=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let r=e.getActiveUniform(t,i),a=e.getUniformLocation(t,r.name);r0(r,a,this)}}setValue(e,t,n,i){let r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,a=t.length;r!==a;++r){let o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,r=e.length;i!==r;++i){let a=e[i];a.id in t&&n.push(a)}return n}};function pf(s,e,t){let n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}var a0=37297,o0=0;function c0(s,e){let t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=i;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var mf=new Xe;function l0(s){Je._getMatrix(mf,Je.workingColorSpace,s);let e=`mat3( ${mf.elements.map(t=>t.toFixed(4))} )`;switch(Je.getTransfer(s)){case mr:return[e,"LinearTransferOETF"];case at:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function gf(s,e,t){let n=s.getShaderParameter(e,s.COMPILE_STATUS),r=(s.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+c0(s.getShaderSource(e),o)}else return r}function h0(s,e){let t=l0(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function u0(s,e){let t;switch(e){case Td:t="Linear";break;case Ad:t="Reinhard";break;case wd:t="Cineon";break;case Ed:t="ACESFilmic";break;case Cd:t="AgX";break;case Id:t="Neutral";break;case Rd:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Oc=new R;function d0(){Je.getLuminanceCoefficients(Oc);let s=Oc.x.toFixed(4),e=Oc.y.toFixed(4),t=Oc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function f0(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter($r).join(`
`)}function p0(s){let e=[];for(let t in s){let n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function m0(s,e){let t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(e,i),a=r.name,o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:s.getAttribLocation(e,a),locationSize:o}}return t}function $r(s){return s!==""}function bf(s,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function _f(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var g0=/^[ \t]*#include +<([\w\d./]+)>/gm;function _h(s){return s.replace(g0,_0)}var b0=new Map;function _0(s,e){let t=je[e];if(t===void 0){let n=b0.get(e);if(n!==void 0)t=je[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return _h(t)}var x0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function xf(s){return s.replace(x0,v0)}function v0(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function vf(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function y0(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Vl?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===id?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Fn&&(e="SHADOWMAP_TYPE_VSM"),e}function M0(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case _i:case xi:e="ENVMAP_TYPE_CUBE";break;case zs:e="ENVMAP_TYPE_CUBE_UV";break}return e}function S0(s){let e="ENVMAP_MODE_REFLECTION";return s.envMap&&s.envMapMode===xi&&(e="ENVMAP_MODE_REFRACTION"),e}function T0(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Vr:e="ENVMAP_BLENDING_MULTIPLY";break;case Md:e="ENVMAP_BLENDING_MIX";break;case Sd:e="ENVMAP_BLENDING_ADD";break}return e}function A0(s){let e=s.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function w0(s,e,t,n){let i=s.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,c=y0(t),l=M0(t),h=S0(t),u=T0(t),d=A0(t),f=f0(t),g=p0(r),b=i.createProgram(),m,p,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter($r).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter($r).join(`
`),p.length>0&&(p+=`
`)):(m=[vf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter($r).join(`
`),p=[vf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Qn?"#define TONE_MAPPING":"",t.toneMapping!==Qn?je.tonemapping_pars_fragment:"",t.toneMapping!==Qn?u0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",je.colorspace_pars_fragment,h0("linearToOutputTexel",t.outputColorSpace),d0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter($r).join(`
`)),a=_h(a),a=bf(a,t),a=_f(a,t),o=_h(o),o=bf(o,t),o=_f(o,t),a=xf(a),o=xf(o),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===th?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===th?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let x=v+m+a,_=v+p+o,T=pf(i,i.VERTEX_SHADER,x),w=pf(i,i.FRAGMENT_SHADER,_);i.attachShader(b,T),i.attachShader(b,w),t.index0AttributeName!==void 0?i.bindAttribLocation(b,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(b,0,"position"),i.linkProgram(b);function C(P){if(s.debug.checkShaderErrors){let O=i.getProgramInfoLog(b)||"",z=i.getShaderInfoLog(T)||"",q=i.getShaderInfoLog(w)||"",K=O.trim(),X=z.trim(),ae=q.trim(),W=!0,me=!0;if(i.getProgramParameter(b,i.LINK_STATUS)===!1)if(W=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,b,T,w);else{let xe=gf(i,T,"vertex"),Te=gf(i,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(b,i.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+K+`
`+xe+`
`+Te)}else K!==""?console.warn("THREE.WebGLProgram: Program Info Log:",K):(X===""||ae==="")&&(me=!1);me&&(P.diagnostics={runnable:W,programLog:K,vertexShader:{log:X,prefix:m},fragmentShader:{log:ae,prefix:p}})}i.deleteShader(T),i.deleteShader(w),I=new js(i,b),S=m0(i,b)}let I;this.getUniforms=function(){return I===void 0&&C(this),I};let S;this.getAttributes=function(){return S===void 0&&C(this),S};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=i.getProgramParameter(b,a0)),y},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(b),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=o0++,this.cacheKey=e,this.usedTimes=1,this.program=b,this.vertexShader=T,this.fragmentShader=w,this}var E0=0,xh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new vh(e),t.set(e,n)),n}},vh=class{constructor(e){this.id=E0++,this.code=e,this.usedTimes=0}};function R0(s,e,t,n,i,r,a){let o=new _r,c=new xh,l=new Set,h=[],u=i.logarithmicDepthBuffer,d=i.vertexTextures,f=i.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(S){return l.add(S),S===0?"uv":`uv${S}`}function m(S,y,P,O,z){let q=O.fog,K=z.geometry,X=S.isMeshStandardMaterial?O.environment:null,ae=(S.isMeshStandardMaterial?t:e).get(S.envMap||X),W=ae&&ae.mapping===zs?ae.image.height:null,me=g[S.type];S.precision!==null&&(f=i.getMaxPrecision(S.precision),f!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",f,"instead."));let xe=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,Te=xe!==void 0?xe.length:0,Ve=0;K.morphAttributes.position!==void 0&&(Ve=1),K.morphAttributes.normal!==void 0&&(Ve=2),K.morphAttributes.color!==void 0&&(Ve=3);let qe,Qe,Ge,j;if(me){let st=On[me];qe=st.vertexShader,Qe=st.fragmentShader}else qe=S.vertexShader,Qe=S.fragmentShader,c.update(S),Ge=c.getVertexShaderID(S),j=c.getFragmentShaderID(S);let ee=s.getRenderTarget(),ve=s.state.buffers.depth.getReversed(),Ae=z.isInstancedMesh===!0,Se=z.isBatchedMesh===!0,Ke=!!S.map,it=!!S.matcap,L=!!ae,re=!!S.aoMap,Q=!!S.lightMap,$=!!S.bumpMap,Z=!!S.normalMap,ge=!!S.displacementMap,oe=!!S.emissiveMap,pe=!!S.metalnessMap,ke=!!S.roughnessMap,Oe=S.anisotropy>0,E=S.clearcoat>0,M=S.dispersion>0,U=S.iridescence>0,H=S.sheen>0,se=S.transmission>0,Y=Oe&&!!S.anisotropyMap,Re=E&&!!S.clearcoatMap,fe=E&&!!S.clearcoatNormalMap,Ce=E&&!!S.clearcoatRoughnessMap,N=U&&!!S.iridescenceMap,k=U&&!!S.iridescenceThicknessMap,J=H&&!!S.sheenColorMap,be=H&&!!S.sheenRoughnessMap,he=!!S.specularMap,de=!!S.specularColorMap,De=!!S.specularIntensityMap,D=se&&!!S.transmissionMap,ne=se&&!!S.thicknessMap,ce=!!S.gradientMap,Me=!!S.alphaMap,le=S.alphaTest>0,te=!!S.alphaHash,Pe=!!S.extensions,We=Qn;S.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(We=s.toneMapping);let ut={shaderID:me,shaderType:S.type,shaderName:S.name,vertexShader:qe,fragmentShader:Qe,defines:S.defines,customVertexShaderID:Ge,customFragmentShaderID:j,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:f,batching:Se,batchingColor:Se&&z._colorsTexture!==null,instancing:Ae,instancingColor:Ae&&z.instanceColor!==null,instancingMorph:Ae&&z.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ee===null?s.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:Pt,alphaToCoverage:!!S.alphaToCoverage,map:Ke,matcap:it,envMap:L,envMapMode:L&&ae.mapping,envMapCubeUVHeight:W,aoMap:re,lightMap:Q,bumpMap:$,normalMap:Z,displacementMap:d&&ge,emissiveMap:oe,normalMapObjectSpace:Z&&S.normalMapType===Nd,normalMapTangentSpace:Z&&S.normalMapType===yi,metalnessMap:pe,roughnessMap:ke,anisotropy:Oe,anisotropyMap:Y,clearcoat:E,clearcoatMap:Re,clearcoatNormalMap:fe,clearcoatRoughnessMap:Ce,dispersion:M,iridescence:U,iridescenceMap:N,iridescenceThicknessMap:k,sheen:H,sheenColorMap:J,sheenRoughnessMap:be,specularMap:he,specularColorMap:de,specularIntensityMap:De,transmission:se,transmissionMap:D,thicknessMap:ne,gradientMap:ce,opaque:S.transparent===!1&&S.blending===Li&&S.alphaToCoverage===!1,alphaMap:Me,alphaTest:le,alphaHash:te,combine:S.combine,mapUv:Ke&&b(S.map.channel),aoMapUv:re&&b(S.aoMap.channel),lightMapUv:Q&&b(S.lightMap.channel),bumpMapUv:$&&b(S.bumpMap.channel),normalMapUv:Z&&b(S.normalMap.channel),displacementMapUv:ge&&b(S.displacementMap.channel),emissiveMapUv:oe&&b(S.emissiveMap.channel),metalnessMapUv:pe&&b(S.metalnessMap.channel),roughnessMapUv:ke&&b(S.roughnessMap.channel),anisotropyMapUv:Y&&b(S.anisotropyMap.channel),clearcoatMapUv:Re&&b(S.clearcoatMap.channel),clearcoatNormalMapUv:fe&&b(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ce&&b(S.clearcoatRoughnessMap.channel),iridescenceMapUv:N&&b(S.iridescenceMap.channel),iridescenceThicknessMapUv:k&&b(S.iridescenceThicknessMap.channel),sheenColorMapUv:J&&b(S.sheenColorMap.channel),sheenRoughnessMapUv:be&&b(S.sheenRoughnessMap.channel),specularMapUv:he&&b(S.specularMap.channel),specularColorMapUv:de&&b(S.specularColorMap.channel),specularIntensityMapUv:De&&b(S.specularIntensityMap.channel),transmissionMapUv:D&&b(S.transmissionMap.channel),thicknessMapUv:ne&&b(S.thicknessMap.channel),alphaMapUv:Me&&b(S.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(Z||Oe),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!K.attributes.uv&&(Ke||Me),fog:!!q,useFog:S.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:S.flatShading===!0&&S.wireframe===!1,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:ve,skinning:z.isSkinnedMesh===!0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:Te,morphTextureStride:Ve,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:s.shadowMap.enabled&&P.length>0,shadowMapType:s.shadowMap.type,toneMapping:We,decodeVideoTexture:Ke&&S.map.isVideoTexture===!0&&Je.getTransfer(S.map.colorSpace)===at,decodeVideoTextureEmissive:oe&&S.emissiveMap.isVideoTexture===!0&&Je.getTransfer(S.emissiveMap.colorSpace)===at,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===cn,flipSided:S.side===Ht,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Pe&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Pe&&S.extensions.multiDraw===!0||Se)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return ut.vertexUv1s=l.has(1),ut.vertexUv2s=l.has(2),ut.vertexUv3s=l.has(3),l.clear(),ut}function p(S){let y=[];if(S.shaderID?y.push(S.shaderID):(y.push(S.customVertexShaderID),y.push(S.customFragmentShaderID)),S.defines!==void 0)for(let P in S.defines)y.push(P),y.push(S.defines[P]);return S.isRawShaderMaterial===!1&&(v(y,S),x(y,S),y.push(s.outputColorSpace)),y.push(S.customProgramCacheKey),y.join()}function v(S,y){S.push(y.precision),S.push(y.outputColorSpace),S.push(y.envMapMode),S.push(y.envMapCubeUVHeight),S.push(y.mapUv),S.push(y.alphaMapUv),S.push(y.lightMapUv),S.push(y.aoMapUv),S.push(y.bumpMapUv),S.push(y.normalMapUv),S.push(y.displacementMapUv),S.push(y.emissiveMapUv),S.push(y.metalnessMapUv),S.push(y.roughnessMapUv),S.push(y.anisotropyMapUv),S.push(y.clearcoatMapUv),S.push(y.clearcoatNormalMapUv),S.push(y.clearcoatRoughnessMapUv),S.push(y.iridescenceMapUv),S.push(y.iridescenceThicknessMapUv),S.push(y.sheenColorMapUv),S.push(y.sheenRoughnessMapUv),S.push(y.specularMapUv),S.push(y.specularColorMapUv),S.push(y.specularIntensityMapUv),S.push(y.transmissionMapUv),S.push(y.thicknessMapUv),S.push(y.combine),S.push(y.fogExp2),S.push(y.sizeAttenuation),S.push(y.morphTargetsCount),S.push(y.morphAttributeCount),S.push(y.numDirLights),S.push(y.numPointLights),S.push(y.numSpotLights),S.push(y.numSpotLightMaps),S.push(y.numHemiLights),S.push(y.numRectAreaLights),S.push(y.numDirLightShadows),S.push(y.numPointLightShadows),S.push(y.numSpotLightShadows),S.push(y.numSpotLightShadowsWithMaps),S.push(y.numLightProbes),S.push(y.shadowMapType),S.push(y.toneMapping),S.push(y.numClippingPlanes),S.push(y.numClipIntersection),S.push(y.depthPacking)}function x(S,y){o.disableAll(),y.supportsVertexTextures&&o.enable(0),y.instancing&&o.enable(1),y.instancingColor&&o.enable(2),y.instancingMorph&&o.enable(3),y.matcap&&o.enable(4),y.envMap&&o.enable(5),y.normalMapObjectSpace&&o.enable(6),y.normalMapTangentSpace&&o.enable(7),y.clearcoat&&o.enable(8),y.iridescence&&o.enable(9),y.alphaTest&&o.enable(10),y.vertexColors&&o.enable(11),y.vertexAlphas&&o.enable(12),y.vertexUv1s&&o.enable(13),y.vertexUv2s&&o.enable(14),y.vertexUv3s&&o.enable(15),y.vertexTangents&&o.enable(16),y.anisotropy&&o.enable(17),y.alphaHash&&o.enable(18),y.batching&&o.enable(19),y.dispersion&&o.enable(20),y.batchingColor&&o.enable(21),y.gradientMap&&o.enable(22),S.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.reversedDepthBuffer&&o.enable(4),y.skinning&&o.enable(5),y.morphTargets&&o.enable(6),y.morphNormals&&o.enable(7),y.morphColors&&o.enable(8),y.premultipliedAlpha&&o.enable(9),y.shadowMapEnabled&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.decodeVideoTextureEmissive&&o.enable(20),y.alphaToCoverage&&o.enable(21),S.push(o.mask)}function _(S){let y=g[S.type],P;if(y){let O=On[y];P=qd.clone(O.uniforms)}else P=S.uniforms;return P}function T(S,y){let P;for(let O=0,z=h.length;O<z;O++){let q=h[O];if(q.cacheKey===y){P=q,++P.usedTimes;break}}return P===void 0&&(P=new w0(s,y,S,r),h.push(P)),P}function w(S){if(--S.usedTimes===0){let y=h.indexOf(S);h[y]=h[h.length-1],h.pop(),S.destroy()}}function C(S){c.remove(S)}function I(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:_,acquireProgram:T,releaseProgram:w,releaseShaderCache:C,programs:h,dispose:I}}function C0(){let s=new WeakMap;function e(a){return s.has(a)}function t(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function n(a){s.delete(a)}function i(a,o,c){s.get(a)[o]=c}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function I0(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function yf(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Mf(){let s=[],e=0,t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function a(u,d,f,g,b,m){let p=s[e];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:b,group:m},s[e]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=b,p.group=m),e++,p}function o(u,d,f,g,b,m){let p=a(u,d,f,g,b,m);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):t.push(p)}function c(u,d,f,g,b,m){let p=a(u,d,f,g,b,m);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):t.unshift(p)}function l(u,d){t.length>1&&t.sort(u||I0),n.length>1&&n.sort(d||yf),i.length>1&&i.sort(d||yf)}function h(){for(let u=e,d=s.length;u<d;u++){let f=s[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:o,unshift:c,finish:h,sort:l}}function P0(){let s=new WeakMap;function e(n,i){let r=s.get(n),a;return r===void 0?(a=new Mf,s.set(n,[a])):i>=r.length?(a=new Mf,r.push(a)):a=r[i],a}function t(){s=new WeakMap}return{get:e,dispose:t}}function L0(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new R,color:new Ee};break;case"SpotLight":t={position:new R,direction:new R,color:new Ee,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new R,color:new Ee,distance:0,decay:0};break;case"HemisphereLight":t={direction:new R,skyColor:new Ee,groundColor:new Ee};break;case"RectAreaLight":t={color:new Ee,position:new R,halfWidth:new R,halfHeight:new R};break}return s[e.id]=t,t}}}function D0(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ie};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ie};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ie,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}var U0=0;function N0(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function F0(s){let e=new L0,t=D0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new R);let i=new R,r=new ze,a=new ze;function o(l){let h=0,u=0,d=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let f=0,g=0,b=0,m=0,p=0,v=0,x=0,_=0,T=0,w=0,C=0;l.sort(N0);for(let S=0,y=l.length;S<y;S++){let P=l[S],O=P.color,z=P.intensity,q=P.distance,K=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=O.r*z,u+=O.g*z,d+=O.b*z;else if(P.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(P.sh.coefficients[X],z);C++}else if(P.isDirectionalLight){let X=e.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let ae=P.shadow,W=t.get(P);W.shadowIntensity=ae.intensity,W.shadowBias=ae.bias,W.shadowNormalBias=ae.normalBias,W.shadowRadius=ae.radius,W.shadowMapSize=ae.mapSize,n.directionalShadow[f]=W,n.directionalShadowMap[f]=K,n.directionalShadowMatrix[f]=P.shadow.matrix,v++}n.directional[f]=X,f++}else if(P.isSpotLight){let X=e.get(P);X.position.setFromMatrixPosition(P.matrixWorld),X.color.copy(O).multiplyScalar(z),X.distance=q,X.coneCos=Math.cos(P.angle),X.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),X.decay=P.decay,n.spot[b]=X;let ae=P.shadow;if(P.map&&(n.spotLightMap[T]=P.map,T++,ae.updateMatrices(P),P.castShadow&&w++),n.spotLightMatrix[b]=ae.matrix,P.castShadow){let W=t.get(P);W.shadowIntensity=ae.intensity,W.shadowBias=ae.bias,W.shadowNormalBias=ae.normalBias,W.shadowRadius=ae.radius,W.shadowMapSize=ae.mapSize,n.spotShadow[b]=W,n.spotShadowMap[b]=K,_++}b++}else if(P.isRectAreaLight){let X=e.get(P);X.color.copy(O).multiplyScalar(z),X.halfWidth.set(P.width*.5,0,0),X.halfHeight.set(0,P.height*.5,0),n.rectArea[m]=X,m++}else if(P.isPointLight){let X=e.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity),X.distance=P.distance,X.decay=P.decay,P.castShadow){let ae=P.shadow,W=t.get(P);W.shadowIntensity=ae.intensity,W.shadowBias=ae.bias,W.shadowNormalBias=ae.normalBias,W.shadowRadius=ae.radius,W.shadowMapSize=ae.mapSize,W.shadowCameraNear=ae.camera.near,W.shadowCameraFar=ae.camera.far,n.pointShadow[g]=W,n.pointShadowMap[g]=K,n.pointShadowMatrix[g]=P.shadow.matrix,x++}n.point[g]=X,g++}else if(P.isHemisphereLight){let X=e.get(P);X.skyColor.copy(P.color).multiplyScalar(z),X.groundColor.copy(P.groundColor).multiplyScalar(z),n.hemi[p]=X,p++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=_e.LTC_FLOAT_1,n.rectAreaLTC2=_e.LTC_FLOAT_2):(n.rectAreaLTC1=_e.LTC_HALF_1,n.rectAreaLTC2=_e.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let I=n.hash;(I.directionalLength!==f||I.pointLength!==g||I.spotLength!==b||I.rectAreaLength!==m||I.hemiLength!==p||I.numDirectionalShadows!==v||I.numPointShadows!==x||I.numSpotShadows!==_||I.numSpotMaps!==T||I.numLightProbes!==C)&&(n.directional.length=f,n.spot.length=b,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=_+T-w,n.spotLightMap.length=T,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=C,I.directionalLength=f,I.pointLength=g,I.spotLength=b,I.rectAreaLength=m,I.hemiLength=p,I.numDirectionalShadows=v,I.numPointShadows=x,I.numSpotShadows=_,I.numSpotMaps=T,I.numLightProbes=C,n.version=U0++)}function c(l,h){let u=0,d=0,f=0,g=0,b=0,m=h.matrixWorldInverse;for(let p=0,v=l.length;p<v;p++){let x=l[p];if(x.isDirectionalLight){let _=n.directional[u];_.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),_.direction.sub(i),_.direction.transformDirection(m),u++}else if(x.isSpotLight){let _=n.spot[f];_.position.setFromMatrixPosition(x.matrixWorld),_.position.applyMatrix4(m),_.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),_.direction.sub(i),_.direction.transformDirection(m),f++}else if(x.isRectAreaLight){let _=n.rectArea[g];_.position.setFromMatrixPosition(x.matrixWorld),_.position.applyMatrix4(m),a.identity(),r.copy(x.matrixWorld),r.premultiply(m),a.extractRotation(r),_.halfWidth.set(x.width*.5,0,0),_.halfHeight.set(0,x.height*.5,0),_.halfWidth.applyMatrix4(a),_.halfHeight.applyMatrix4(a),g++}else if(x.isPointLight){let _=n.point[d];_.position.setFromMatrixPosition(x.matrixWorld),_.position.applyMatrix4(m),d++}else if(x.isHemisphereLight){let _=n.hemi[b];_.direction.setFromMatrixPosition(x.matrixWorld),_.direction.transformDirection(m),b++}}}return{setup:o,setupView:c,state:n}}function Sf(s){let e=new F0(s),t=[],n=[];function i(h){l.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function a(h){n.push(h)}function o(){e.setup(t)}function c(h){e.setupView(t,h)}let l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:o,setupLightsView:c,pushLight:r,pushShadow:a}}function O0(s){let e=new WeakMap;function t(i,r=0){let a=e.get(i),o;return a===void 0?(o=new Sf(s),e.set(i,[o])):r>=a.length?(o=new Sf(s),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var B0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,k0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function z0(s,e,t){let n=new ui,i=new ie,r=new ie,a=new et,o=new Nr({depthPacking:Ud}),c=new Fr,l={},h=t.maxTextureSize,u={[bn]:Ht,[Ht]:bn,[cn]:cn},d=new $t({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ie},radius:{value:4}},vertexShader:B0,fragmentShader:k0}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let g=new nt;g.setAttribute("position",new ft(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let b=new At(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Vl;let p=this.type;this.render=function(w,C,I){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;let S=s.getRenderTarget(),y=s.getActiveCubeFace(),P=s.getActiveMipmapLevel(),O=s.state;O.setBlending($n),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);let z=p!==Fn&&this.type===Fn,q=p===Fn&&this.type!==Fn;for(let K=0,X=w.length;K<X;K++){let ae=w[K],W=ae.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",ae,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;i.copy(W.mapSize);let me=W.getFrameExtents();if(i.multiply(me),r.copy(W.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/me.x),i.x=r.x*me.x,W.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/me.y),i.y=r.y*me.y,W.mapSize.y=r.y)),W.map===null||z===!0||q===!0){let Te=this.type!==Fn?{minFilter:It,magFilter:It}:{};W.map!==null&&W.map.dispose(),W.map=new Cn(i.x,i.y,Te),W.map.texture.name=ae.name+".shadowMap",W.camera.updateProjectionMatrix()}s.setRenderTarget(W.map),s.clear();let xe=W.getViewportCount();for(let Te=0;Te<xe;Te++){let Ve=W.getViewport(Te);a.set(r.x*Ve.x,r.y*Ve.y,r.x*Ve.z,r.y*Ve.w),O.viewport(a),W.updateMatrices(ae,Te),n=W.getFrustum(),_(C,I,W.camera,ae,this.type)}W.isPointLightShadow!==!0&&this.type===Fn&&v(W,I),W.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(S,y,P)};function v(w,C){let I=e.update(b);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Cn(i.x,i.y)),d.uniforms.shadow_pass.value=w.map.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,s.setRenderTarget(w.mapPass),s.clear(),s.renderBufferDirect(C,null,I,d,b,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,s.setRenderTarget(w.map),s.clear(),s.renderBufferDirect(C,null,I,f,b,null)}function x(w,C,I,S){let y=null,P=I.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(P!==void 0)y=P;else if(y=I.isPointLight===!0?c:o,s.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){let O=y.uuid,z=C.uuid,q=l[O];q===void 0&&(q={},l[O]=q);let K=q[z];K===void 0&&(K=y.clone(),q[z]=K,C.addEventListener("dispose",T)),y=K}if(y.visible=C.visible,y.wireframe=C.wireframe,S===Fn?y.side=C.shadowSide!==null?C.shadowSide:C.side:y.side=C.shadowSide!==null?C.shadowSide:u[C.side],y.alphaMap=C.alphaMap,y.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,y.map=C.map,y.clipShadows=C.clipShadows,y.clippingPlanes=C.clippingPlanes,y.clipIntersection=C.clipIntersection,y.displacementMap=C.displacementMap,y.displacementScale=C.displacementScale,y.displacementBias=C.displacementBias,y.wireframeLinewidth=C.wireframeLinewidth,y.linewidth=C.linewidth,I.isPointLight===!0&&y.isMeshDistanceMaterial===!0){let O=s.properties.get(y);O.light=I}return y}function _(w,C,I,S,y){if(w.visible===!1)return;if(w.layers.test(C.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&y===Fn)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,w.matrixWorld);let z=e.update(w),q=w.material;if(Array.isArray(q)){let K=z.groups;for(let X=0,ae=K.length;X<ae;X++){let W=K[X],me=q[W.materialIndex];if(me&&me.visible){let xe=x(w,me,S,y);w.onBeforeShadow(s,w,C,I,z,xe,W),s.renderBufferDirect(I,null,z,xe,w,W),w.onAfterShadow(s,w,C,I,z,xe,W)}}}else if(q.visible){let K=x(w,q,S,y);w.onBeforeShadow(s,w,C,I,z,K,null),s.renderBufferDirect(I,null,z,K,w,null),w.onAfterShadow(s,w,C,I,z,K,null)}}let O=w.children;for(let z=0,q=O.length;z<q;z++)_(O[z],C,I,S,y)}function T(w){w.target.removeEventListener("dispose",T);for(let I in l){let S=l[I],y=w.target.uuid;y in S&&(S[y].dispose(),delete S[y])}}}var H0={[Yo]:jo,[Ko]:$o,[Jo]:Qo,[Di]:Zo,[jo]:Yo,[$o]:Ko,[Qo]:Jo,[Zo]:Di};function V0(s,e){function t(){let D=!1,ne=new et,ce=null,Me=new et(0,0,0,0);return{setMask:function(le){ce!==le&&!D&&(s.colorMask(le,le,le,le),ce=le)},setLocked:function(le){D=le},setClear:function(le,te,Pe,We,ut){ut===!0&&(le*=We,te*=We,Pe*=We),ne.set(le,te,Pe,We),Me.equals(ne)===!1&&(s.clearColor(le,te,Pe,We),Me.copy(ne))},reset:function(){D=!1,ce=null,Me.set(-1,0,0,0)}}}function n(){let D=!1,ne=!1,ce=null,Me=null,le=null;return{setReversed:function(te){if(ne!==te){let Pe=e.get("EXT_clip_control");te?Pe.clipControlEXT(Pe.LOWER_LEFT_EXT,Pe.ZERO_TO_ONE_EXT):Pe.clipControlEXT(Pe.LOWER_LEFT_EXT,Pe.NEGATIVE_ONE_TO_ONE_EXT),ne=te;let We=le;le=null,this.setClear(We)}},getReversed:function(){return ne},setTest:function(te){te?ee(s.DEPTH_TEST):ve(s.DEPTH_TEST)},setMask:function(te){ce!==te&&!D&&(s.depthMask(te),ce=te)},setFunc:function(te){if(ne&&(te=H0[te]),Me!==te){switch(te){case Yo:s.depthFunc(s.NEVER);break;case jo:s.depthFunc(s.ALWAYS);break;case Ko:s.depthFunc(s.LESS);break;case Di:s.depthFunc(s.LEQUAL);break;case Jo:s.depthFunc(s.EQUAL);break;case Zo:s.depthFunc(s.GEQUAL);break;case $o:s.depthFunc(s.GREATER);break;case Qo:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Me=te}},setLocked:function(te){D=te},setClear:function(te){le!==te&&(ne&&(te=1-te),s.clearDepth(te),le=te)},reset:function(){D=!1,ce=null,Me=null,le=null,ne=!1}}}function i(){let D=!1,ne=null,ce=null,Me=null,le=null,te=null,Pe=null,We=null,ut=null;return{setTest:function(st){D||(st?ee(s.STENCIL_TEST):ve(s.STENCIL_TEST))},setMask:function(st){ne!==st&&!D&&(s.stencilMask(st),ne=st)},setFunc:function(st,kn,yn){(ce!==st||Me!==kn||le!==yn)&&(s.stencilFunc(st,kn,yn),ce=st,Me=kn,le=yn)},setOp:function(st,kn,yn){(te!==st||Pe!==kn||We!==yn)&&(s.stencilOp(st,kn,yn),te=st,Pe=kn,We=yn)},setLocked:function(st){D=st},setClear:function(st){ut!==st&&(s.clearStencil(st),ut=st)},reset:function(){D=!1,ne=null,ce=null,Me=null,le=null,te=null,Pe=null,We=null,ut=null}}}let r=new t,a=new n,o=new i,c=new WeakMap,l=new WeakMap,h={},u={},d=new WeakMap,f=[],g=null,b=!1,m=null,p=null,v=null,x=null,_=null,T=null,w=null,C=new Ee(0,0,0),I=0,S=!1,y=null,P=null,O=null,z=null,q=null,K=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),X=!1,ae=0,W=s.getParameter(s.VERSION);W.indexOf("WebGL")!==-1?(ae=parseFloat(/^WebGL (\d)/.exec(W)[1]),X=ae>=1):W.indexOf("OpenGL ES")!==-1&&(ae=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),X=ae>=2);let me=null,xe={},Te=s.getParameter(s.SCISSOR_BOX),Ve=s.getParameter(s.VIEWPORT),qe=new et().fromArray(Te),Qe=new et().fromArray(Ve);function Ge(D,ne,ce,Me){let le=new Uint8Array(4),te=s.createTexture();s.bindTexture(D,te),s.texParameteri(D,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(D,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Pe=0;Pe<ce;Pe++)D===s.TEXTURE_3D||D===s.TEXTURE_2D_ARRAY?s.texImage3D(ne,0,s.RGBA,1,1,Me,0,s.RGBA,s.UNSIGNED_BYTE,le):s.texImage2D(ne+Pe,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,le);return te}let j={};j[s.TEXTURE_2D]=Ge(s.TEXTURE_2D,s.TEXTURE_2D,1),j[s.TEXTURE_CUBE_MAP]=Ge(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),j[s.TEXTURE_2D_ARRAY]=Ge(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),j[s.TEXTURE_3D]=Ge(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ee(s.DEPTH_TEST),a.setFunc(Di),$(!1),Z(Hl),ee(s.CULL_FACE),re($n);function ee(D){h[D]!==!0&&(s.enable(D),h[D]=!0)}function ve(D){h[D]!==!1&&(s.disable(D),h[D]=!1)}function Ae(D,ne){return u[D]!==ne?(s.bindFramebuffer(D,ne),u[D]=ne,D===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=ne),D===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=ne),!0):!1}function Se(D,ne){let ce=f,Me=!1;if(D){ce=d.get(ne),ce===void 0&&(ce=[],d.set(ne,ce));let le=D.textures;if(ce.length!==le.length||ce[0]!==s.COLOR_ATTACHMENT0){for(let te=0,Pe=le.length;te<Pe;te++)ce[te]=s.COLOR_ATTACHMENT0+te;ce.length=le.length,Me=!0}}else ce[0]!==s.BACK&&(ce[0]=s.BACK,Me=!0);Me&&s.drawBuffers(ce)}function Ke(D){return g!==D?(s.useProgram(D),g=D,!0):!1}let it={[li]:s.FUNC_ADD,[rd]:s.FUNC_SUBTRACT,[ad]:s.FUNC_REVERSE_SUBTRACT};it[od]=s.MIN,it[cd]=s.MAX;let L={[ld]:s.ZERO,[hd]:s.ONE,[ud]:s.SRC_COLOR,[za]:s.SRC_ALPHA,[bd]:s.SRC_ALPHA_SATURATE,[md]:s.DST_COLOR,[fd]:s.DST_ALPHA,[dd]:s.ONE_MINUS_SRC_COLOR,[Ha]:s.ONE_MINUS_SRC_ALPHA,[gd]:s.ONE_MINUS_DST_COLOR,[pd]:s.ONE_MINUS_DST_ALPHA,[_d]:s.CONSTANT_COLOR,[xd]:s.ONE_MINUS_CONSTANT_COLOR,[vd]:s.CONSTANT_ALPHA,[yd]:s.ONE_MINUS_CONSTANT_ALPHA};function re(D,ne,ce,Me,le,te,Pe,We,ut,st){if(D===$n){b===!0&&(ve(s.BLEND),b=!1);return}if(b===!1&&(ee(s.BLEND),b=!0),D!==sd){if(D!==m||st!==S){if((p!==li||_!==li)&&(s.blendEquation(s.FUNC_ADD),p=li,_=li),st)switch(D){case Li:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Gl:s.blendFunc(s.ONE,s.ONE);break;case Wl:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Xl:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case Li:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Gl:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Wl:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Xl:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}v=null,x=null,T=null,w=null,C.set(0,0,0),I=0,m=D,S=st}return}le=le||ne,te=te||ce,Pe=Pe||Me,(ne!==p||le!==_)&&(s.blendEquationSeparate(it[ne],it[le]),p=ne,_=le),(ce!==v||Me!==x||te!==T||Pe!==w)&&(s.blendFuncSeparate(L[ce],L[Me],L[te],L[Pe]),v=ce,x=Me,T=te,w=Pe),(We.equals(C)===!1||ut!==I)&&(s.blendColor(We.r,We.g,We.b,ut),C.copy(We),I=ut),m=D,S=!1}function Q(D,ne){D.side===cn?ve(s.CULL_FACE):ee(s.CULL_FACE);let ce=D.side===Ht;ne&&(ce=!ce),$(ce),D.blending===Li&&D.transparent===!1?re($n):re(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),a.setFunc(D.depthFunc),a.setTest(D.depthTest),a.setMask(D.depthWrite),r.setMask(D.colorWrite);let Me=D.stencilWrite;o.setTest(Me),Me&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),oe(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?ee(s.SAMPLE_ALPHA_TO_COVERAGE):ve(s.SAMPLE_ALPHA_TO_COVERAGE)}function $(D){y!==D&&(D?s.frontFace(s.CW):s.frontFace(s.CCW),y=D)}function Z(D){D!==td?(ee(s.CULL_FACE),D!==P&&(D===Hl?s.cullFace(s.BACK):D===nd?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):ve(s.CULL_FACE),P=D}function ge(D){D!==O&&(X&&s.lineWidth(D),O=D)}function oe(D,ne,ce){D?(ee(s.POLYGON_OFFSET_FILL),(z!==ne||q!==ce)&&(s.polygonOffset(ne,ce),z=ne,q=ce)):ve(s.POLYGON_OFFSET_FILL)}function pe(D){D?ee(s.SCISSOR_TEST):ve(s.SCISSOR_TEST)}function ke(D){D===void 0&&(D=s.TEXTURE0+K-1),me!==D&&(s.activeTexture(D),me=D)}function Oe(D,ne,ce){ce===void 0&&(me===null?ce=s.TEXTURE0+K-1:ce=me);let Me=xe[ce];Me===void 0&&(Me={type:void 0,texture:void 0},xe[ce]=Me),(Me.type!==D||Me.texture!==ne)&&(me!==ce&&(s.activeTexture(ce),me=ce),s.bindTexture(D,ne||j[D]),Me.type=D,Me.texture=ne)}function E(){let D=xe[me];D!==void 0&&D.type!==void 0&&(s.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function M(){try{s.compressedTexImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function U(){try{s.compressedTexImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function H(){try{s.texSubImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function se(){try{s.texSubImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Y(){try{s.compressedTexSubImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Re(){try{s.compressedTexSubImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function fe(){try{s.texStorage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ce(){try{s.texStorage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function N(){try{s.texImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function k(){try{s.texImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function J(D){qe.equals(D)===!1&&(s.scissor(D.x,D.y,D.z,D.w),qe.copy(D))}function be(D){Qe.equals(D)===!1&&(s.viewport(D.x,D.y,D.z,D.w),Qe.copy(D))}function he(D,ne){let ce=l.get(ne);ce===void 0&&(ce=new WeakMap,l.set(ne,ce));let Me=ce.get(D);Me===void 0&&(Me=s.getUniformBlockIndex(ne,D.name),ce.set(D,Me))}function de(D,ne){let Me=l.get(ne).get(D);c.get(ne)!==Me&&(s.uniformBlockBinding(ne,Me,D.__bindingPointIndex),c.set(ne,Me))}function De(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},me=null,xe={},u={},d=new WeakMap,f=[],g=null,b=!1,m=null,p=null,v=null,x=null,_=null,T=null,w=null,C=new Ee(0,0,0),I=0,S=!1,y=null,P=null,O=null,z=null,q=null,qe.set(0,0,s.canvas.width,s.canvas.height),Qe.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ee,disable:ve,bindFramebuffer:Ae,drawBuffers:Se,useProgram:Ke,setBlending:re,setMaterial:Q,setFlipSided:$,setCullFace:Z,setLineWidth:ge,setPolygonOffset:oe,setScissorTest:pe,activeTexture:ke,bindTexture:Oe,unbindTexture:E,compressedTexImage2D:M,compressedTexImage3D:U,texImage2D:N,texImage3D:k,updateUBOMapping:he,uniformBlockBinding:de,texStorage2D:fe,texStorage3D:Ce,texSubImage2D:H,texSubImage3D:se,compressedTexSubImage2D:Y,compressedTexSubImage3D:Re,scissor:J,viewport:be,reset:De}}function G0(s,e,t,n,i,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ie,h=new WeakMap,u,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(E,M){return f?new OffscreenCanvas(E,M):vs("canvas")}function b(E,M,U){let H=1,se=Oe(E);if((se.width>U||se.height>U)&&(H=U/Math.max(se.width,se.height)),H<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){let Y=Math.floor(H*se.width),Re=Math.floor(H*se.height);u===void 0&&(u=g(Y,Re));let fe=M?g(Y,Re):u;return fe.width=Y,fe.height=Re,fe.getContext("2d").drawImage(E,0,0,Y,Re),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+se.width+"x"+se.height+") to ("+Y+"x"+Re+")."),fe}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+se.width+"x"+se.height+")."),E;return E}function m(E){return E.generateMipmaps}function p(E){s.generateMipmap(E)}function v(E){return E.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?s.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function x(E,M,U,H,se=!1){if(E!==null){if(s[E]!==void 0)return s[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let Y=M;if(M===s.RED&&(U===s.FLOAT&&(Y=s.R32F),U===s.HALF_FLOAT&&(Y=s.R16F),U===s.UNSIGNED_BYTE&&(Y=s.R8)),M===s.RED_INTEGER&&(U===s.UNSIGNED_BYTE&&(Y=s.R8UI),U===s.UNSIGNED_SHORT&&(Y=s.R16UI),U===s.UNSIGNED_INT&&(Y=s.R32UI),U===s.BYTE&&(Y=s.R8I),U===s.SHORT&&(Y=s.R16I),U===s.INT&&(Y=s.R32I)),M===s.RG&&(U===s.FLOAT&&(Y=s.RG32F),U===s.HALF_FLOAT&&(Y=s.RG16F),U===s.UNSIGNED_BYTE&&(Y=s.RG8)),M===s.RG_INTEGER&&(U===s.UNSIGNED_BYTE&&(Y=s.RG8UI),U===s.UNSIGNED_SHORT&&(Y=s.RG16UI),U===s.UNSIGNED_INT&&(Y=s.RG32UI),U===s.BYTE&&(Y=s.RG8I),U===s.SHORT&&(Y=s.RG16I),U===s.INT&&(Y=s.RG32I)),M===s.RGB_INTEGER&&(U===s.UNSIGNED_BYTE&&(Y=s.RGB8UI),U===s.UNSIGNED_SHORT&&(Y=s.RGB16UI),U===s.UNSIGNED_INT&&(Y=s.RGB32UI),U===s.BYTE&&(Y=s.RGB8I),U===s.SHORT&&(Y=s.RGB16I),U===s.INT&&(Y=s.RGB32I)),M===s.RGBA_INTEGER&&(U===s.UNSIGNED_BYTE&&(Y=s.RGBA8UI),U===s.UNSIGNED_SHORT&&(Y=s.RGBA16UI),U===s.UNSIGNED_INT&&(Y=s.RGBA32UI),U===s.BYTE&&(Y=s.RGBA8I),U===s.SHORT&&(Y=s.RGBA16I),U===s.INT&&(Y=s.RGBA32I)),M===s.RGB&&(U===s.UNSIGNED_INT_5_9_9_9_REV&&(Y=s.RGB9_E5),U===s.UNSIGNED_INT_10F_11F_11F_REV&&(Y=s.R11F_G11F_B10F)),M===s.RGBA){let Re=se?mr:Je.getTransfer(H);U===s.FLOAT&&(Y=s.RGBA32F),U===s.HALF_FLOAT&&(Y=s.RGBA16F),U===s.UNSIGNED_BYTE&&(Y=Re===at?s.SRGB8_ALPHA8:s.RGBA8),U===s.UNSIGNED_SHORT_4_4_4_4&&(Y=s.RGBA4),U===s.UNSIGNED_SHORT_5_5_5_1&&(Y=s.RGB5_A1)}return(Y===s.R16F||Y===s.R32F||Y===s.RG16F||Y===s.RG32F||Y===s.RGBA16F||Y===s.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function _(E,M){let U;return E?M===null||M===ei||M===Gs?U=s.DEPTH24_STENCIL8:M===Wt?U=s.DEPTH32F_STENCIL8:M===Hs&&(U=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===ei||M===Gs?U=s.DEPTH_COMPONENT24:M===Wt?U=s.DEPTH_COMPONENT32F:M===Hs&&(U=s.DEPTH_COMPONENT16),U}function T(E,M){return m(E)===!0||E.isFramebufferTexture&&E.minFilter!==It&&E.minFilter!==Nt?Math.log2(Math.max(M.width,M.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?M.mipmaps.length:1}function w(E){let M=E.target;M.removeEventListener("dispose",w),I(M),M.isVideoTexture&&h.delete(M)}function C(E){let M=E.target;M.removeEventListener("dispose",C),y(M)}function I(E){let M=n.get(E);if(M.__webglInit===void 0)return;let U=E.source,H=d.get(U);if(H){let se=H[M.__cacheKey];se.usedTimes--,se.usedTimes===0&&S(E),Object.keys(H).length===0&&d.delete(U)}n.remove(E)}function S(E){let M=n.get(E);s.deleteTexture(M.__webglTexture);let U=E.source,H=d.get(U);delete H[M.__cacheKey],a.memory.textures--}function y(E){let M=n.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),n.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let H=0;H<6;H++){if(Array.isArray(M.__webglFramebuffer[H]))for(let se=0;se<M.__webglFramebuffer[H].length;se++)s.deleteFramebuffer(M.__webglFramebuffer[H][se]);else s.deleteFramebuffer(M.__webglFramebuffer[H]);M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer[H])}else{if(Array.isArray(M.__webglFramebuffer))for(let H=0;H<M.__webglFramebuffer.length;H++)s.deleteFramebuffer(M.__webglFramebuffer[H]);else s.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&s.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let H=0;H<M.__webglColorRenderbuffer.length;H++)M.__webglColorRenderbuffer[H]&&s.deleteRenderbuffer(M.__webglColorRenderbuffer[H]);M.__webglDepthRenderbuffer&&s.deleteRenderbuffer(M.__webglDepthRenderbuffer)}let U=E.textures;for(let H=0,se=U.length;H<se;H++){let Y=n.get(U[H]);Y.__webglTexture&&(s.deleteTexture(Y.__webglTexture),a.memory.textures--),n.remove(U[H])}n.remove(E)}let P=0;function O(){P=0}function z(){let E=P;return E>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+i.maxTextures),P+=1,E}function q(E){let M=[];return M.push(E.wrapS),M.push(E.wrapT),M.push(E.wrapR||0),M.push(E.magFilter),M.push(E.minFilter),M.push(E.anisotropy),M.push(E.internalFormat),M.push(E.format),M.push(E.type),M.push(E.generateMipmaps),M.push(E.premultiplyAlpha),M.push(E.flipY),M.push(E.unpackAlignment),M.push(E.colorSpace),M.join()}function K(E,M){let U=n.get(E);if(E.isVideoTexture&&pe(E),E.isRenderTargetTexture===!1&&E.isExternalTexture!==!0&&E.version>0&&U.__version!==E.version){let H=E.image;if(H===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(H.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{j(U,E,M);return}}else E.isExternalTexture&&(U.__webglTexture=E.sourceTexture?E.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,U.__webglTexture,s.TEXTURE0+M)}function X(E,M){let U=n.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&U.__version!==E.version){j(U,E,M);return}t.bindTexture(s.TEXTURE_2D_ARRAY,U.__webglTexture,s.TEXTURE0+M)}function ae(E,M){let U=n.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&U.__version!==E.version){j(U,E,M);return}t.bindTexture(s.TEXTURE_3D,U.__webglTexture,s.TEXTURE0+M)}function W(E,M){let U=n.get(E);if(E.version>0&&U.__version!==E.version){ee(U,E,M);return}t.bindTexture(s.TEXTURE_CUBE_MAP,U.__webglTexture,s.TEXTURE0+M)}let me={[Yn]:s.REPEAT,[mn]:s.CLAMP_TO_EDGE,[Ui]:s.MIRRORED_REPEAT},xe={[It]:s.NEAREST,[Xr]:s.NEAREST_MIPMAP_NEAREST,[vi]:s.NEAREST_MIPMAP_LINEAR,[Nt]:s.LINEAR,[Gi]:s.LINEAR_MIPMAP_NEAREST,[ln]:s.LINEAR_MIPMAP_LINEAR},Te={[Fd]:s.NEVER,[Vd]:s.ALWAYS,[Od]:s.LESS,[eh]:s.LEQUAL,[Bd]:s.EQUAL,[Hd]:s.GEQUAL,[kd]:s.GREATER,[zd]:s.NOTEQUAL};function Ve(E,M){if(M.type===Wt&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===Nt||M.magFilter===Gi||M.magFilter===vi||M.magFilter===ln||M.minFilter===Nt||M.minFilter===Gi||M.minFilter===vi||M.minFilter===ln)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(E,s.TEXTURE_WRAP_S,me[M.wrapS]),s.texParameteri(E,s.TEXTURE_WRAP_T,me[M.wrapT]),(E===s.TEXTURE_3D||E===s.TEXTURE_2D_ARRAY)&&s.texParameteri(E,s.TEXTURE_WRAP_R,me[M.wrapR]),s.texParameteri(E,s.TEXTURE_MAG_FILTER,xe[M.magFilter]),s.texParameteri(E,s.TEXTURE_MIN_FILTER,xe[M.minFilter]),M.compareFunction&&(s.texParameteri(E,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(E,s.TEXTURE_COMPARE_FUNC,Te[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===It||M.minFilter!==vi&&M.minFilter!==ln||M.type===Wt&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){let U=e.get("EXT_texture_filter_anisotropic");s.texParameterf(E,U.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,i.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function qe(E,M){let U=!1;E.__webglInit===void 0&&(E.__webglInit=!0,M.addEventListener("dispose",w));let H=M.source,se=d.get(H);se===void 0&&(se={},d.set(H,se));let Y=q(M);if(Y!==E.__cacheKey){se[Y]===void 0&&(se[Y]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,U=!0),se[Y].usedTimes++;let Re=se[E.__cacheKey];Re!==void 0&&(se[E.__cacheKey].usedTimes--,Re.usedTimes===0&&S(M)),E.__cacheKey=Y,E.__webglTexture=se[Y].texture}return U}function Qe(E,M,U){return Math.floor(Math.floor(E/U)/M)}function Ge(E,M,U,H){let Y=E.updateRanges;if(Y.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,M.width,M.height,U,H,M.data);else{Y.sort((k,J)=>k.start-J.start);let Re=0;for(let k=1;k<Y.length;k++){let J=Y[Re],be=Y[k],he=J.start+J.count,de=Qe(be.start,M.width,4),De=Qe(J.start,M.width,4);be.start<=he+1&&de===De&&Qe(be.start+be.count-1,M.width,4)===de?J.count=Math.max(J.count,be.start+be.count-J.start):(++Re,Y[Re]=be)}Y.length=Re+1;let fe=s.getParameter(s.UNPACK_ROW_LENGTH),Ce=s.getParameter(s.UNPACK_SKIP_PIXELS),N=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,M.width);for(let k=0,J=Y.length;k<J;k++){let be=Y[k],he=Math.floor(be.start/4),de=Math.ceil(be.count/4),De=he%M.width,D=Math.floor(he/M.width),ne=de,ce=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,De),s.pixelStorei(s.UNPACK_SKIP_ROWS,D),t.texSubImage2D(s.TEXTURE_2D,0,De,D,ne,ce,U,H,M.data)}E.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,fe),s.pixelStorei(s.UNPACK_SKIP_PIXELS,Ce),s.pixelStorei(s.UNPACK_SKIP_ROWS,N)}}function j(E,M,U){let H=s.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(H=s.TEXTURE_2D_ARRAY),M.isData3DTexture&&(H=s.TEXTURE_3D);let se=qe(E,M),Y=M.source;t.bindTexture(H,E.__webglTexture,s.TEXTURE0+U);let Re=n.get(Y);if(Y.version!==Re.__version||se===!0){t.activeTexture(s.TEXTURE0+U);let fe=Je.getPrimaries(Je.workingColorSpace),Ce=M.colorSpace===ti?null:Je.getPrimaries(M.colorSpace),N=M.colorSpace===ti||fe===Ce?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,N);let k=b(M.image,!1,i.maxTextureSize);k=ke(M,k);let J=r.convert(M.format,M.colorSpace),be=r.convert(M.type),he=x(M.internalFormat,J,be,M.colorSpace,M.isVideoTexture);Ve(H,M);let de,De=M.mipmaps,D=M.isVideoTexture!==!0,ne=Re.__version===void 0||se===!0,ce=Y.dataReady,Me=T(M,k);if(M.isDepthTexture)he=_(M.format===Ws,M.type),ne&&(D?t.texStorage2D(s.TEXTURE_2D,1,he,k.width,k.height):t.texImage2D(s.TEXTURE_2D,0,he,k.width,k.height,0,J,be,null));else if(M.isDataTexture)if(De.length>0){D&&ne&&t.texStorage2D(s.TEXTURE_2D,Me,he,De[0].width,De[0].height);for(let le=0,te=De.length;le<te;le++)de=De[le],D?ce&&t.texSubImage2D(s.TEXTURE_2D,le,0,0,de.width,de.height,J,be,de.data):t.texImage2D(s.TEXTURE_2D,le,he,de.width,de.height,0,J,be,de.data);M.generateMipmaps=!1}else D?(ne&&t.texStorage2D(s.TEXTURE_2D,Me,he,k.width,k.height),ce&&Ge(M,k,J,be)):t.texImage2D(s.TEXTURE_2D,0,he,k.width,k.height,0,J,be,k.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){D&&ne&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Me,he,De[0].width,De[0].height,k.depth);for(let le=0,te=De.length;le<te;le++)if(de=De[le],M.format!==kt)if(J!==null)if(D){if(ce)if(M.layerUpdates.size>0){let Pe=ch(de.width,de.height,M.format,M.type);for(let We of M.layerUpdates){let ut=de.data.subarray(We*Pe/de.data.BYTES_PER_ELEMENT,(We+1)*Pe/de.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,le,0,0,We,de.width,de.height,1,J,ut)}M.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,le,0,0,0,de.width,de.height,k.depth,J,de.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,le,he,de.width,de.height,k.depth,0,de.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else D?ce&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,le,0,0,0,de.width,de.height,k.depth,J,be,de.data):t.texImage3D(s.TEXTURE_2D_ARRAY,le,he,de.width,de.height,k.depth,0,J,be,de.data)}else{D&&ne&&t.texStorage2D(s.TEXTURE_2D,Me,he,De[0].width,De[0].height);for(let le=0,te=De.length;le<te;le++)de=De[le],M.format!==kt?J!==null?D?ce&&t.compressedTexSubImage2D(s.TEXTURE_2D,le,0,0,de.width,de.height,J,de.data):t.compressedTexImage2D(s.TEXTURE_2D,le,he,de.width,de.height,0,de.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):D?ce&&t.texSubImage2D(s.TEXTURE_2D,le,0,0,de.width,de.height,J,be,de.data):t.texImage2D(s.TEXTURE_2D,le,he,de.width,de.height,0,J,be,de.data)}else if(M.isDataArrayTexture)if(D){if(ne&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Me,he,k.width,k.height,k.depth),ce)if(M.layerUpdates.size>0){let le=ch(k.width,k.height,M.format,M.type);for(let te of M.layerUpdates){let Pe=k.data.subarray(te*le/k.data.BYTES_PER_ELEMENT,(te+1)*le/k.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,te,k.width,k.height,1,J,be,Pe)}M.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,k.width,k.height,k.depth,J,be,k.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,he,k.width,k.height,k.depth,0,J,be,k.data);else if(M.isData3DTexture)D?(ne&&t.texStorage3D(s.TEXTURE_3D,Me,he,k.width,k.height,k.depth),ce&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,k.width,k.height,k.depth,J,be,k.data)):t.texImage3D(s.TEXTURE_3D,0,he,k.width,k.height,k.depth,0,J,be,k.data);else if(M.isFramebufferTexture){if(ne)if(D)t.texStorage2D(s.TEXTURE_2D,Me,he,k.width,k.height);else{let le=k.width,te=k.height;for(let Pe=0;Pe<Me;Pe++)t.texImage2D(s.TEXTURE_2D,Pe,he,le,te,0,J,be,null),le>>=1,te>>=1}}else if(De.length>0){if(D&&ne){let le=Oe(De[0]);t.texStorage2D(s.TEXTURE_2D,Me,he,le.width,le.height)}for(let le=0,te=De.length;le<te;le++)de=De[le],D?ce&&t.texSubImage2D(s.TEXTURE_2D,le,0,0,J,be,de):t.texImage2D(s.TEXTURE_2D,le,he,J,be,de);M.generateMipmaps=!1}else if(D){if(ne){let le=Oe(k);t.texStorage2D(s.TEXTURE_2D,Me,he,le.width,le.height)}ce&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,J,be,k)}else t.texImage2D(s.TEXTURE_2D,0,he,J,be,k);m(M)&&p(H),Re.__version=Y.version,M.onUpdate&&M.onUpdate(M)}E.__version=M.version}function ee(E,M,U){if(M.image.length!==6)return;let H=qe(E,M),se=M.source;t.bindTexture(s.TEXTURE_CUBE_MAP,E.__webglTexture,s.TEXTURE0+U);let Y=n.get(se);if(se.version!==Y.__version||H===!0){t.activeTexture(s.TEXTURE0+U);let Re=Je.getPrimaries(Je.workingColorSpace),fe=M.colorSpace===ti?null:Je.getPrimaries(M.colorSpace),Ce=M.colorSpace===ti||Re===fe?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ce);let N=M.isCompressedTexture||M.image[0].isCompressedTexture,k=M.image[0]&&M.image[0].isDataTexture,J=[];for(let te=0;te<6;te++)!N&&!k?J[te]=b(M.image[te],!0,i.maxCubemapSize):J[te]=k?M.image[te].image:M.image[te],J[te]=ke(M,J[te]);let be=J[0],he=r.convert(M.format,M.colorSpace),de=r.convert(M.type),De=x(M.internalFormat,he,de,M.colorSpace),D=M.isVideoTexture!==!0,ne=Y.__version===void 0||H===!0,ce=se.dataReady,Me=T(M,be);Ve(s.TEXTURE_CUBE_MAP,M);let le;if(N){D&&ne&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Me,De,be.width,be.height);for(let te=0;te<6;te++){le=J[te].mipmaps;for(let Pe=0;Pe<le.length;Pe++){let We=le[Pe];M.format!==kt?he!==null?D?ce&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,Pe,0,0,We.width,We.height,he,We.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,Pe,De,We.width,We.height,0,We.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):D?ce&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,Pe,0,0,We.width,We.height,he,de,We.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,Pe,De,We.width,We.height,0,he,de,We.data)}}}else{if(le=M.mipmaps,D&&ne){le.length>0&&Me++;let te=Oe(J[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,Me,De,te.width,te.height)}for(let te=0;te<6;te++)if(k){D?ce&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,J[te].width,J[te].height,he,de,J[te].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,De,J[te].width,J[te].height,0,he,de,J[te].data);for(let Pe=0;Pe<le.length;Pe++){let ut=le[Pe].image[te].image;D?ce&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,Pe+1,0,0,ut.width,ut.height,he,de,ut.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,Pe+1,De,ut.width,ut.height,0,he,de,ut.data)}}else{D?ce&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,he,de,J[te]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,De,he,de,J[te]);for(let Pe=0;Pe<le.length;Pe++){let We=le[Pe];D?ce&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,Pe+1,0,0,he,de,We.image[te]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,Pe+1,De,he,de,We.image[te])}}}m(M)&&p(s.TEXTURE_CUBE_MAP),Y.__version=se.version,M.onUpdate&&M.onUpdate(M)}E.__version=M.version}function ve(E,M,U,H,se,Y){let Re=r.convert(U.format,U.colorSpace),fe=r.convert(U.type),Ce=x(U.internalFormat,Re,fe,U.colorSpace),N=n.get(M),k=n.get(U);if(k.__renderTarget=M,!N.__hasExternalTextures){let J=Math.max(1,M.width>>Y),be=Math.max(1,M.height>>Y);se===s.TEXTURE_3D||se===s.TEXTURE_2D_ARRAY?t.texImage3D(se,Y,Ce,J,be,M.depth,0,Re,fe,null):t.texImage2D(se,Y,Ce,J,be,0,Re,fe,null)}t.bindFramebuffer(s.FRAMEBUFFER,E),oe(M)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,H,se,k.__webglTexture,0,ge(M)):(se===s.TEXTURE_2D||se>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&se<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,H,se,k.__webglTexture,Y),t.bindFramebuffer(s.FRAMEBUFFER,null)}function Ae(E,M,U){if(s.bindRenderbuffer(s.RENDERBUFFER,E),M.depthBuffer){let H=M.depthTexture,se=H&&H.isDepthTexture?H.type:null,Y=_(M.stencilBuffer,se),Re=M.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,fe=ge(M);oe(M)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,fe,Y,M.width,M.height):U?s.renderbufferStorageMultisample(s.RENDERBUFFER,fe,Y,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,Y,M.width,M.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Re,s.RENDERBUFFER,E)}else{let H=M.textures;for(let se=0;se<H.length;se++){let Y=H[se],Re=r.convert(Y.format,Y.colorSpace),fe=r.convert(Y.type),Ce=x(Y.internalFormat,Re,fe,Y.colorSpace),N=ge(M);U&&oe(M)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,N,Ce,M.width,M.height):oe(M)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,N,Ce,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,Ce,M.width,M.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Se(E,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,E),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let H=n.get(M.depthTexture);H.__renderTarget=M,(!H.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),K(M.depthTexture,0);let se=H.__webglTexture,Y=ge(M);if(M.depthTexture.format===xs)oe(M)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,se,0,Y):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,se,0);else if(M.depthTexture.format===Ws)oe(M)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,se,0,Y):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,se,0);else throw new Error("Unknown depthTexture format")}function Ke(E){let M=n.get(E),U=E.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==E.depthTexture){let H=E.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),H){let se=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,H.removeEventListener("dispose",se)};H.addEventListener("dispose",se),M.__depthDisposeCallback=se}M.__boundDepthTexture=H}if(E.depthTexture&&!M.__autoAllocateDepthBuffer){if(U)throw new Error("target.depthTexture not supported in Cube render targets");let H=E.texture.mipmaps;H&&H.length>0?Se(M.__webglFramebuffer[0],E):Se(M.__webglFramebuffer,E)}else if(U){M.__webglDepthbuffer=[];for(let H=0;H<6;H++)if(t.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer[H]),M.__webglDepthbuffer[H]===void 0)M.__webglDepthbuffer[H]=s.createRenderbuffer(),Ae(M.__webglDepthbuffer[H],E,!1);else{let se=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Y=M.__webglDepthbuffer[H];s.bindRenderbuffer(s.RENDERBUFFER,Y),s.framebufferRenderbuffer(s.FRAMEBUFFER,se,s.RENDERBUFFER,Y)}}else{let H=E.texture.mipmaps;if(H&&H.length>0?t.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=s.createRenderbuffer(),Ae(M.__webglDepthbuffer,E,!1);else{let se=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Y=M.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Y),s.framebufferRenderbuffer(s.FRAMEBUFFER,se,s.RENDERBUFFER,Y)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function it(E,M,U){let H=n.get(E);M!==void 0&&ve(H.__webglFramebuffer,E,E.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),U!==void 0&&Ke(E)}function L(E){let M=E.texture,U=n.get(E),H=n.get(M);E.addEventListener("dispose",C);let se=E.textures,Y=E.isWebGLCubeRenderTarget===!0,Re=se.length>1;if(Re||(H.__webglTexture===void 0&&(H.__webglTexture=s.createTexture()),H.__version=M.version,a.memory.textures++),Y){U.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(M.mipmaps&&M.mipmaps.length>0){U.__webglFramebuffer[fe]=[];for(let Ce=0;Ce<M.mipmaps.length;Ce++)U.__webglFramebuffer[fe][Ce]=s.createFramebuffer()}else U.__webglFramebuffer[fe]=s.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){U.__webglFramebuffer=[];for(let fe=0;fe<M.mipmaps.length;fe++)U.__webglFramebuffer[fe]=s.createFramebuffer()}else U.__webglFramebuffer=s.createFramebuffer();if(Re)for(let fe=0,Ce=se.length;fe<Ce;fe++){let N=n.get(se[fe]);N.__webglTexture===void 0&&(N.__webglTexture=s.createTexture(),a.memory.textures++)}if(E.samples>0&&oe(E)===!1){U.__webglMultisampledFramebuffer=s.createFramebuffer(),U.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let fe=0;fe<se.length;fe++){let Ce=se[fe];U.__webglColorRenderbuffer[fe]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,U.__webglColorRenderbuffer[fe]);let N=r.convert(Ce.format,Ce.colorSpace),k=r.convert(Ce.type),J=x(Ce.internalFormat,N,k,Ce.colorSpace,E.isXRRenderTarget===!0),be=ge(E);s.renderbufferStorageMultisample(s.RENDERBUFFER,be,J,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+fe,s.RENDERBUFFER,U.__webglColorRenderbuffer[fe])}s.bindRenderbuffer(s.RENDERBUFFER,null),E.depthBuffer&&(U.__webglDepthRenderbuffer=s.createRenderbuffer(),Ae(U.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Y){t.bindTexture(s.TEXTURE_CUBE_MAP,H.__webglTexture),Ve(s.TEXTURE_CUBE_MAP,M);for(let fe=0;fe<6;fe++)if(M.mipmaps&&M.mipmaps.length>0)for(let Ce=0;Ce<M.mipmaps.length;Ce++)ve(U.__webglFramebuffer[fe][Ce],E,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ce);else ve(U.__webglFramebuffer[fe],E,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);m(M)&&p(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Re){for(let fe=0,Ce=se.length;fe<Ce;fe++){let N=se[fe],k=n.get(N),J=s.TEXTURE_2D;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(J=E.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(J,k.__webglTexture),Ve(J,N),ve(U.__webglFramebuffer,E,N,s.COLOR_ATTACHMENT0+fe,J,0),m(N)&&p(J)}t.unbindTexture()}else{let fe=s.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(fe=E.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(fe,H.__webglTexture),Ve(fe,M),M.mipmaps&&M.mipmaps.length>0)for(let Ce=0;Ce<M.mipmaps.length;Ce++)ve(U.__webglFramebuffer[Ce],E,M,s.COLOR_ATTACHMENT0,fe,Ce);else ve(U.__webglFramebuffer,E,M,s.COLOR_ATTACHMENT0,fe,0);m(M)&&p(fe),t.unbindTexture()}E.depthBuffer&&Ke(E)}function re(E){let M=E.textures;for(let U=0,H=M.length;U<H;U++){let se=M[U];if(m(se)){let Y=v(E),Re=n.get(se).__webglTexture;t.bindTexture(Y,Re),p(Y),t.unbindTexture()}}}let Q=[],$=[];function Z(E){if(E.samples>0){if(oe(E)===!1){let M=E.textures,U=E.width,H=E.height,se=s.COLOR_BUFFER_BIT,Y=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Re=n.get(E),fe=M.length>1;if(fe)for(let N=0;N<M.length;N++)t.bindFramebuffer(s.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+N,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Re.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+N,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Re.__webglMultisampledFramebuffer);let Ce=E.texture.mipmaps;Ce&&Ce.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Re.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Re.__webglFramebuffer);for(let N=0;N<M.length;N++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(se|=s.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(se|=s.STENCIL_BUFFER_BIT)),fe){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Re.__webglColorRenderbuffer[N]);let k=n.get(M[N]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,k,0)}s.blitFramebuffer(0,0,U,H,0,0,U,H,se,s.NEAREST),c===!0&&(Q.length=0,$.length=0,Q.push(s.COLOR_ATTACHMENT0+N),E.depthBuffer&&E.resolveDepthBuffer===!1&&(Q.push(Y),$.push(Y),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,$)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Q))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),fe)for(let N=0;N<M.length;N++){t.bindFramebuffer(s.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+N,s.RENDERBUFFER,Re.__webglColorRenderbuffer[N]);let k=n.get(M[N]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Re.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+N,s.TEXTURE_2D,k,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Re.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&c){let M=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[M])}}}function ge(E){return Math.min(i.maxSamples,E.samples)}function oe(E){let M=n.get(E);return E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function pe(E){let M=a.render.frame;h.get(E)!==M&&(h.set(E,M),E.update())}function ke(E,M){let U=E.colorSpace,H=E.format,se=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||U!==Pt&&U!==ti&&(Je.getTransfer(U)===at?(H!==kt||se!==vn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",U)),M}function Oe(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(l.width=E.naturalWidth||E.width,l.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(l.width=E.displayWidth,l.height=E.displayHeight):(l.width=E.width,l.height=E.height),l}this.allocateTextureUnit=z,this.resetTextureUnits=O,this.setTexture2D=K,this.setTexture2DArray=X,this.setTexture3D=ae,this.setTextureCube=W,this.rebindTextures=it,this.setupRenderTarget=L,this.updateRenderTargetMipmap=re,this.updateMultisampleRenderTarget=Z,this.setupDepthRenderbuffer=Ke,this.setupFrameBufferTexture=ve,this.useMultisampledRTT=oe}function W0(s,e){function t(n,i=ti){let r,a=Je.getTransfer(i);if(n===vn)return s.UNSIGNED_BYTE;if(n===nc)return s.UNSIGNED_SHORT_4_4_4_4;if(n===ic)return s.UNSIGNED_SHORT_5_5_5_1;if(n===jl)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Kl)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===ql)return s.BYTE;if(n===Yl)return s.SHORT;if(n===Hs)return s.UNSIGNED_SHORT;if(n===tc)return s.INT;if(n===ei)return s.UNSIGNED_INT;if(n===Wt)return s.FLOAT;if(n===Vs)return s.HALF_FLOAT;if(n===Jl)return s.ALPHA;if(n===Zl)return s.RGB;if(n===kt)return s.RGBA;if(n===xs)return s.DEPTH_COMPONENT;if(n===Ws)return s.DEPTH_STENCIL;if(n===sc)return s.RED;if(n===qr)return s.RED_INTEGER;if(n===$l)return s.RG;if(n===rc)return s.RG_INTEGER;if(n===ac)return s.RGBA_INTEGER;if(n===Yr||n===jr||n===Kr||n===Jr)if(a===at)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Yr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===jr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Kr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Jr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Yr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===jr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Kr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Jr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===oc||n===cc||n===lc||n===hc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===oc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===cc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===lc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===hc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===uc||n===dc||n===fc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===uc||n===dc)return a===at?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===fc)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===pc||n===mc||n===gc||n===bc||n===_c||n===xc||n===vc||n===yc||n===Mc||n===Sc||n===Tc||n===Ac||n===wc||n===Ec)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===pc)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===mc)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===gc)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===bc)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===_c)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===xc)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===vc)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===yc)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Mc)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Sc)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Tc)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ac)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===wc)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ec)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Rc||n===Cc||n===Ic)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Rc)return a===at?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Cc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ic)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Pc||n===Lc||n===Dc||n===Uc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Pc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Lc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Dc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Uc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Gs?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}var X0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,q0=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,yh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Tr(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new $t({vertexShader:X0,fragmentShader:q0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new At(new Us(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Mh=class extends jn{constructor(e,t){super();let n=this,i=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,g=null,b=typeof XRWebGLBinding<"u",m=new yh,p={},v=t.getContextAttributes(),x=null,_=null,T=[],w=[],C=new ie,I=null,S=new yt;S.viewport=new et;let y=new yt;y.viewport=new et;let P=[S,y],O=new qo,z=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let ee=T[j];return ee===void 0&&(ee=new Ss,T[j]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(j){let ee=T[j];return ee===void 0&&(ee=new Ss,T[j]=ee),ee.getGripSpace()},this.getHand=function(j){let ee=T[j];return ee===void 0&&(ee=new Ss,T[j]=ee),ee.getHandSpace()};function K(j){let ee=w.indexOf(j.inputSource);if(ee===-1)return;let ve=T[ee];ve!==void 0&&(ve.update(j.inputSource,j.frame,l||a),ve.dispatchEvent({type:j.type,data:j.inputSource}))}function X(){i.removeEventListener("select",K),i.removeEventListener("selectstart",K),i.removeEventListener("selectend",K),i.removeEventListener("squeeze",K),i.removeEventListener("squeezestart",K),i.removeEventListener("squeezeend",K),i.removeEventListener("end",X),i.removeEventListener("inputsourceschange",ae);for(let j=0;j<T.length;j++){let ee=w[j];ee!==null&&(w[j]=null,T[j].disconnect(ee))}z=null,q=null,m.reset();for(let j in p)delete p[j];e.setRenderTarget(x),f=null,d=null,u=null,i=null,_=null,Ge.stop(),n.isPresenting=!1,e.setPixelRatio(I),e.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){r=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){o=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(j){l=j},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&b&&(u=new XRWebGLBinding(i,t)),u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(j){if(i=j,i!==null){if(x=e.getRenderTarget(),i.addEventListener("select",K),i.addEventListener("selectstart",K),i.addEventListener("selectend",K),i.addEventListener("squeeze",K),i.addEventListener("squeezestart",K),i.addEventListener("squeezeend",K),i.addEventListener("end",X),i.addEventListener("inputsourceschange",ae),v.xrCompatible!==!0&&await t.makeXRCompatible(),I=e.getPixelRatio(),e.getSize(C),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let ve=null,Ae=null,Se=null;v.depth&&(Se=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ve=v.stencil?Ws:xs,Ae=v.stencil?Gs:ei);let Ke={colorFormat:t.RGBA8,depthFormat:Se,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(Ke),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),_=new Cn(d.textureWidth,d.textureHeight,{format:kt,type:vn,depthTexture:new Sr(d.textureWidth,d.textureHeight,Ae,void 0,void 0,void 0,void 0,void 0,void 0,ve),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let ve={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,t,ve),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),_=new Cn(f.framebufferWidth,f.framebufferHeight,{format:kt,type:vn,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await i.requestReferenceSpace(o),Ge.setContext(i),Ge.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function ae(j){for(let ee=0;ee<j.removed.length;ee++){let ve=j.removed[ee],Ae=w.indexOf(ve);Ae>=0&&(w[Ae]=null,T[Ae].disconnect(ve))}for(let ee=0;ee<j.added.length;ee++){let ve=j.added[ee],Ae=w.indexOf(ve);if(Ae===-1){for(let Ke=0;Ke<T.length;Ke++)if(Ke>=w.length){w.push(ve),Ae=Ke;break}else if(w[Ke]===null){w[Ke]=ve,Ae=Ke;break}if(Ae===-1)break}let Se=T[Ae];Se&&Se.connect(ve)}}let W=new R,me=new R;function xe(j,ee,ve){W.setFromMatrixPosition(ee.matrixWorld),me.setFromMatrixPosition(ve.matrixWorld);let Ae=W.distanceTo(me),Se=ee.projectionMatrix.elements,Ke=ve.projectionMatrix.elements,it=Se[14]/(Se[10]-1),L=Se[14]/(Se[10]+1),re=(Se[9]+1)/Se[5],Q=(Se[9]-1)/Se[5],$=(Se[8]-1)/Se[0],Z=(Ke[8]+1)/Ke[0],ge=it*$,oe=it*Z,pe=Ae/(-$+Z),ke=pe*-$;if(ee.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(ke),j.translateZ(pe),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),Se[10]===-1)j.projectionMatrix.copy(ee.projectionMatrix),j.projectionMatrixInverse.copy(ee.projectionMatrixInverse);else{let Oe=it+pe,E=L+pe,M=ge-ke,U=oe+(Ae-ke),H=re*L/E*Oe,se=Q*L/E*Oe;j.projectionMatrix.makePerspective(M,U,H,se,Oe,E),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function Te(j,ee){ee===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(ee.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(i===null)return;let ee=j.near,ve=j.far;m.texture!==null&&(m.depthNear>0&&(ee=m.depthNear),m.depthFar>0&&(ve=m.depthFar)),O.near=y.near=S.near=ee,O.far=y.far=S.far=ve,(z!==O.near||q!==O.far)&&(i.updateRenderState({depthNear:O.near,depthFar:O.far}),z=O.near,q=O.far),O.layers.mask=j.layers.mask|6,S.layers.mask=O.layers.mask&3,y.layers.mask=O.layers.mask&5;let Ae=j.parent,Se=O.cameras;Te(O,Ae);for(let Ke=0;Ke<Se.length;Ke++)Te(Se[Ke],Ae);Se.length===2?xe(O,S,y):O.projectionMatrix.copy(S.projectionMatrix),Ve(j,O,Ae)};function Ve(j,ee,ve){ve===null?j.matrix.copy(ee.matrixWorld):(j.matrix.copy(ve.matrixWorld),j.matrix.invert(),j.matrix.multiply(ee.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(ee.projectionMatrix),j.projectionMatrixInverse.copy(ee.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=Oi*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(j){c=j,d!==null&&(d.fixedFoveation=j),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=j)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(O)},this.getCameraTexture=function(j){return p[j]};let qe=null;function Qe(j,ee){if(h=ee.getViewerPose(l||a),g=ee,h!==null){let ve=h.views;f!==null&&(e.setRenderTargetFramebuffer(_,f.framebuffer),e.setRenderTarget(_));let Ae=!1;ve.length!==O.cameras.length&&(O.cameras.length=0,Ae=!0);for(let L=0;L<ve.length;L++){let re=ve[L],Q=null;if(f!==null)Q=f.getViewport(re);else{let Z=u.getViewSubImage(d,re);Q=Z.viewport,L===0&&(e.setRenderTargetTextures(_,Z.colorTexture,Z.depthStencilTexture),e.setRenderTarget(_))}let $=P[L];$===void 0&&($=new yt,$.layers.enable(L),$.viewport=new et,P[L]=$),$.matrix.fromArray(re.transform.matrix),$.matrix.decompose($.position,$.quaternion,$.scale),$.projectionMatrix.fromArray(re.projectionMatrix),$.projectionMatrixInverse.copy($.projectionMatrix).invert(),$.viewport.set(Q.x,Q.y,Q.width,Q.height),L===0&&(O.matrix.copy($.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),Ae===!0&&O.cameras.push($)}let Se=i.enabledFeatures;if(Se&&Se.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&b){u=n.getBinding();let L=u.getDepthInformation(ve[0]);L&&L.isValid&&L.texture&&m.init(L,i.renderState)}if(Se&&Se.includes("camera-access")&&b){e.state.unbindTexture(),u=n.getBinding();for(let L=0;L<ve.length;L++){let re=ve[L].camera;if(re){let Q=p[re];Q||(Q=new Tr,p[re]=Q);let $=u.getCameraImage(re);Q.sourceTexture=$}}}}for(let ve=0;ve<T.length;ve++){let Ae=w[ve],Se=T[ve];Ae!==null&&Se!==void 0&&Se.update(Ae,ee,l||a)}qe&&qe(j,ee),ee.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ee}),g=null}let Ge=new Tf;Ge.setAnimationLoop(Qe),this.setAnimationLoop=function(j){qe=j},this.dispose=function(){}}},Yi=new Zt,Y0=new ze;function j0(s,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,sh(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,v,x,_){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,_)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),b(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?c(m,p,v,x):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Ht&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Ht&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let v=e.get(p),x=v.envMap,_=v.envMapRotation;x&&(m.envMap.value=x,Yi.copy(_),Yi.x*=-1,Yi.y*=-1,Yi.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Yi.y*=-1,Yi.z*=-1),m.envMapRotation.value.setFromMatrix4(Y0.makeRotationFromEuler(Yi)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,v,x){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*v,m.scale.value=x*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,v){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ht&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function b(m,p){let v=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function K0(s,e,t,n){let i={},r={},a=[],o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function c(v,x){let _=x.program;n.uniformBlockBinding(v,_)}function l(v,x){let _=i[v.id];_===void 0&&(g(v),_=h(v),i[v.id]=_,v.addEventListener("dispose",m));let T=x.program;n.updateUBOMapping(v,T);let w=e.render.frame;r[v.id]!==w&&(d(v),r[v.id]=w)}function h(v){let x=u();v.__bindingPointIndex=x;let _=s.createBuffer(),T=v.__size,w=v.usage;return s.bindBuffer(s.UNIFORM_BUFFER,_),s.bufferData(s.UNIFORM_BUFFER,T,w),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,x,_),_}function u(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){let x=i[v.id],_=v.uniforms,T=v.__cache;s.bindBuffer(s.UNIFORM_BUFFER,x);for(let w=0,C=_.length;w<C;w++){let I=Array.isArray(_[w])?_[w]:[_[w]];for(let S=0,y=I.length;S<y;S++){let P=I[S];if(f(P,w,S,T)===!0){let O=P.__offset,z=Array.isArray(P.value)?P.value:[P.value],q=0;for(let K=0;K<z.length;K++){let X=z[K],ae=b(X);typeof X=="number"||typeof X=="boolean"?(P.__data[0]=X,s.bufferSubData(s.UNIFORM_BUFFER,O+q,P.__data)):X.isMatrix3?(P.__data[0]=X.elements[0],P.__data[1]=X.elements[1],P.__data[2]=X.elements[2],P.__data[3]=0,P.__data[4]=X.elements[3],P.__data[5]=X.elements[4],P.__data[6]=X.elements[5],P.__data[7]=0,P.__data[8]=X.elements[6],P.__data[9]=X.elements[7],P.__data[10]=X.elements[8],P.__data[11]=0):(X.toArray(P.__data,q),q+=ae.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,O,P.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(v,x,_,T){let w=v.value,C=x+"_"+_;if(T[C]===void 0)return typeof w=="number"||typeof w=="boolean"?T[C]=w:T[C]=w.clone(),!0;{let I=T[C];if(typeof w=="number"||typeof w=="boolean"){if(I!==w)return T[C]=w,!0}else if(I.equals(w)===!1)return I.copy(w),!0}return!1}function g(v){let x=v.uniforms,_=0,T=16;for(let C=0,I=x.length;C<I;C++){let S=Array.isArray(x[C])?x[C]:[x[C]];for(let y=0,P=S.length;y<P;y++){let O=S[y],z=Array.isArray(O.value)?O.value:[O.value];for(let q=0,K=z.length;q<K;q++){let X=z[q],ae=b(X),W=_%T,me=W%ae.boundary,xe=W+me;_+=me,xe!==0&&T-xe<ae.storage&&(_+=T-xe),O.__data=new Float32Array(ae.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=_,_+=ae.storage}}}let w=_%T;return w>0&&(_+=T-w),v.__size=_,v.__cache={},this}function b(v){let x={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(x.boundary=4,x.storage=4):v.isVector2?(x.boundary=8,x.storage=8):v.isVector3||v.isColor?(x.boundary=16,x.storage=12):v.isVector4?(x.boundary=16,x.storage=16):v.isMatrix3?(x.boundary=48,x.storage=48):v.isMatrix4?(x.boundary=64,x.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),x}function m(v){let x=v.target;x.removeEventListener("dispose",m);let _=a.indexOf(x.__bindingPointIndex);a.splice(_,1),s.deleteBuffer(i[x.id]),delete i[x.id],delete r[x.id]}function p(){for(let v in i)s.deleteBuffer(i[v]);a=[],i={},r={}}return{bind:c,update:l,dispose:p}}var kc=class{constructor(e={}){let{canvas:t=Gd(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;let g=new Uint32Array(4),b=new Int32Array(4),m=null,p=null,v=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Qn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let _=this,T=!1;this._outputColorSpace=gt;let w=0,C=0,I=null,S=-1,y=null,P=new et,O=new et,z=null,q=new Ee(0),K=0,X=t.width,ae=t.height,W=1,me=null,xe=null,Te=new et(0,0,X,ae),Ve=new et(0,0,X,ae),qe=!1,Qe=new ui,Ge=!1,j=!1,ee=new ze,ve=new R,Ae=new et,Se={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ke=!1;function it(){return I===null?W:1}let L=n;function re(A,F){return t.getContext(A,F)}try{let A={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"180"}`),t.addEventListener("webglcontextlost",ce,!1),t.addEventListener("webglcontextrestored",Me,!1),t.addEventListener("webglcontextcreationerror",le,!1),L===null){let F="webgl2";if(L=re(F,A),L===null)throw re(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let Q,$,Z,ge,oe,pe,ke,Oe,E,M,U,H,se,Y,Re,fe,Ce,N,k,J,be,he,de,De;function D(){Q=new f_(L),Q.init(),he=new W0(L,Q),$=new a_(L,Q,e,he),Z=new V0(L,Q),$.reversedDepthBuffer&&d&&Z.buffers.depth.setReversed(!0),ge=new g_(L),oe=new C0,pe=new G0(L,Q,Z,oe,$,he,ge),ke=new c_(_),Oe=new d_(_),E=new Mm(L),de=new s_(L,E),M=new p_(L,E,ge,de),U=new __(L,M,E,ge),k=new b_(L,$,pe),fe=new o_(oe),H=new R0(_,ke,Oe,Q,$,de,fe),se=new j0(_,oe),Y=new P0,Re=new O0(Q),N=new i_(_,ke,Oe,Z,U,f,c),Ce=new z0(_,U,$),De=new K0(L,ge,$,Z),J=new r_(L,Q,ge),be=new m_(L,Q,ge),ge.programs=H.programs,_.capabilities=$,_.extensions=Q,_.properties=oe,_.renderLists=Y,_.shadowMap=Ce,_.state=Z,_.info=ge}D();let ne=new Mh(_,L);this.xr=ne,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){let A=Q.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){let A=Q.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(A){A!==void 0&&(W=A,this.setSize(X,ae,!1))},this.getSize=function(A){return A.set(X,ae)},this.setSize=function(A,F,V=!0){if(ne.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=A,ae=F,t.width=Math.floor(A*W),t.height=Math.floor(F*W),V===!0&&(t.style.width=A+"px",t.style.height=F+"px"),this.setViewport(0,0,A,F)},this.getDrawingBufferSize=function(A){return A.set(X*W,ae*W).floor()},this.setDrawingBufferSize=function(A,F,V){X=A,ae=F,W=V,t.width=Math.floor(A*V),t.height=Math.floor(F*V),this.setViewport(0,0,A,F)},this.getCurrentViewport=function(A){return A.copy(P)},this.getViewport=function(A){return A.copy(Te)},this.setViewport=function(A,F,V,G){A.isVector4?Te.set(A.x,A.y,A.z,A.w):Te.set(A,F,V,G),Z.viewport(P.copy(Te).multiplyScalar(W).round())},this.getScissor=function(A){return A.copy(Ve)},this.setScissor=function(A,F,V,G){A.isVector4?Ve.set(A.x,A.y,A.z,A.w):Ve.set(A,F,V,G),Z.scissor(O.copy(Ve).multiplyScalar(W).round())},this.getScissorTest=function(){return qe},this.setScissorTest=function(A){Z.setScissorTest(qe=A)},this.setOpaqueSort=function(A){me=A},this.setTransparentSort=function(A){xe=A},this.getClearColor=function(A){return A.copy(N.getClearColor())},this.setClearColor=function(){N.setClearColor(...arguments)},this.getClearAlpha=function(){return N.getClearAlpha()},this.setClearAlpha=function(){N.setClearAlpha(...arguments)},this.clear=function(A=!0,F=!0,V=!0){let G=0;if(A){let B=!1;if(I!==null){let ue=I.texture.format;B=ue===ac||ue===rc||ue===qr}if(B){let ue=I.texture.type,ye=ue===vn||ue===ei||ue===Hs||ue===Gs||ue===nc||ue===ic,Ie=N.getClearColor(),we=N.getClearAlpha(),Fe=Ie.r,Be=Ie.g,Le=Ie.b;ye?(g[0]=Fe,g[1]=Be,g[2]=Le,g[3]=we,L.clearBufferuiv(L.COLOR,0,g)):(b[0]=Fe,b[1]=Be,b[2]=Le,b[3]=we,L.clearBufferiv(L.COLOR,0,b))}else G|=L.COLOR_BUFFER_BIT}F&&(G|=L.DEPTH_BUFFER_BIT),V&&(G|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ce,!1),t.removeEventListener("webglcontextrestored",Me,!1),t.removeEventListener("webglcontextcreationerror",le,!1),N.dispose(),Y.dispose(),Re.dispose(),oe.dispose(),ke.dispose(),Oe.dispose(),U.dispose(),de.dispose(),De.dispose(),H.dispose(),ne.dispose(),ne.removeEventListener("sessionstart",yn),ne.removeEventListener("sessionend",eu),Si.stop()};function ce(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function Me(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;let A=ge.autoReset,F=Ce.enabled,V=Ce.autoUpdate,G=Ce.needsUpdate,B=Ce.type;D(),ge.autoReset=A,Ce.enabled=F,Ce.autoUpdate=V,Ce.needsUpdate=G,Ce.type=B}function le(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function te(A){let F=A.target;F.removeEventListener("dispose",te),Pe(F)}function Pe(A){We(A),oe.remove(A)}function We(A){let F=oe.get(A).programs;F!==void 0&&(F.forEach(function(V){H.releaseProgram(V)}),A.isShaderMaterial&&H.releaseShaderCache(A))}this.renderBufferDirect=function(A,F,V,G,B,ue){F===null&&(F=Se);let ye=B.isMesh&&B.matrixWorld.determinant()<0,Ie=Nf(A,F,V,G,B);Z.setMaterial(G,ye);let we=V.index,Fe=1;if(G.wireframe===!0){if(we=M.getWireframeAttribute(V),we===void 0)return;Fe=2}let Be=V.drawRange,Le=V.attributes.position,$e=Be.start*Fe,ot=(Be.start+Be.count)*Fe;ue!==null&&($e=Math.max($e,ue.start*Fe),ot=Math.min(ot,(ue.start+ue.count)*Fe)),we!==null?($e=Math.max($e,0),ot=Math.min(ot,we.count)):Le!=null&&($e=Math.max($e,0),ot=Math.min(ot,Le.count));let xt=ot-$e;if(xt<0||xt===1/0)return;de.setup(B,G,Ie,V,we);let dt,lt=J;if(we!==null&&(dt=E.get(we),lt=be,lt.setIndex(dt)),B.isMesh)G.wireframe===!0?(Z.setLineWidth(G.wireframeLinewidth*it()),lt.setMode(L.LINES)):lt.setMode(L.TRIANGLES);else if(B.isLine){let Ue=G.linewidth;Ue===void 0&&(Ue=1),Z.setLineWidth(Ue*it()),B.isLineSegments?lt.setMode(L.LINES):B.isLineLoop?lt.setMode(L.LINE_LOOP):lt.setMode(L.LINE_STRIP)}else B.isPoints?lt.setMode(L.POINTS):B.isSprite&&lt.setMode(L.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)ys("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),lt.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(Q.get("WEBGL_multi_draw"))lt.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{let Ue=B._multiDrawStarts,pt=B._multiDrawCounts,tt=B._multiDrawCount,Yt=we?E.get(we).bytesPerElement:1,Zi=oe.get(G).currentProgram.getUniforms();for(let jt=0;jt<tt;jt++)Zi.setValue(L,"_gl_DrawID",jt),lt.render(Ue[jt]/Yt,pt[jt])}else if(B.isInstancedMesh)lt.renderInstances($e,xt,B.count);else if(V.isInstancedBufferGeometry){let Ue=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,pt=Math.min(V.instanceCount,Ue);lt.renderInstances($e,xt,pt)}else lt.render($e,xt)};function ut(A,F,V){A.transparent===!0&&A.side===cn&&A.forceSinglePass===!1?(A.side=Ht,A.needsUpdate=!0,na(A,F,V),A.side=bn,A.needsUpdate=!0,na(A,F,V),A.side=cn):na(A,F,V)}this.compile=function(A,F,V=null){V===null&&(V=A),p=Re.get(V),p.init(F),x.push(p),V.traverseVisible(function(B){B.isLight&&B.layers.test(F.layers)&&(p.pushLight(B),B.castShadow&&p.pushShadow(B))}),A!==V&&A.traverseVisible(function(B){B.isLight&&B.layers.test(F.layers)&&(p.pushLight(B),B.castShadow&&p.pushShadow(B))}),p.setupLights();let G=new Set;return A.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;let ue=B.material;if(ue)if(Array.isArray(ue))for(let ye=0;ye<ue.length;ye++){let Ie=ue[ye];ut(Ie,V,B),G.add(Ie)}else ut(ue,V,B),G.add(ue)}),p=x.pop(),G},this.compileAsync=function(A,F,V=null){let G=this.compile(A,F,V);return new Promise(B=>{function ue(){if(G.forEach(function(ye){oe.get(ye).currentProgram.isReady()&&G.delete(ye)}),G.size===0){B(A);return}setTimeout(ue,10)}Q.get("KHR_parallel_shader_compile")!==null?ue():setTimeout(ue,10)})};let st=null;function kn(A){st&&st(A)}function yn(){Si.stop()}function eu(){Si.start()}let Si=new Tf;Si.setAnimationLoop(kn),typeof self<"u"&&Si.setContext(self),this.setAnimationLoop=function(A){st=A,ne.setAnimationLoop(A),A===null?Si.stop():Si.start()},ne.addEventListener("sessionstart",yn),ne.addEventListener("sessionend",eu),this.render=function(A,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),ne.enabled===!0&&ne.isPresenting===!0&&(ne.cameraAutoUpdate===!0&&ne.updateCamera(F),F=ne.getCamera()),A.isScene===!0&&A.onBeforeRender(_,A,F,I),p=Re.get(A,x.length),p.init(F),x.push(p),ee.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),Qe.setFromProjectionMatrix(ee,rn,F.reversedDepth),j=this.localClippingEnabled,Ge=fe.init(this.clippingPlanes,j),m=Y.get(A,v.length),m.init(),v.push(m),ne.enabled===!0&&ne.isPresenting===!0){let ue=_.xr.getDepthSensingMesh();ue!==null&&Wc(ue,F,-1/0,_.sortObjects)}Wc(A,F,0,_.sortObjects),m.finish(),_.sortObjects===!0&&m.sort(me,xe),Ke=ne.enabled===!1||ne.isPresenting===!1||ne.hasDepthSensing()===!1,Ke&&N.addToRenderList(m,A),this.info.render.frame++,Ge===!0&&fe.beginShadows();let V=p.state.shadowsArray;Ce.render(V,A,F),Ge===!0&&fe.endShadows(),this.info.autoReset===!0&&this.info.reset();let G=m.opaque,B=m.transmissive;if(p.setupLights(),F.isArrayCamera){let ue=F.cameras;if(B.length>0)for(let ye=0,Ie=ue.length;ye<Ie;ye++){let we=ue[ye];nu(G,B,A,we)}Ke&&N.render(A);for(let ye=0,Ie=ue.length;ye<Ie;ye++){let we=ue[ye];tu(m,A,we,we.viewport)}}else B.length>0&&nu(G,B,A,F),Ke&&N.render(A),tu(m,A,F);I!==null&&C===0&&(pe.updateMultisampleRenderTarget(I),pe.updateRenderTargetMipmap(I)),A.isScene===!0&&A.onAfterRender(_,A,F),de.resetDefaultState(),S=-1,y=null,x.pop(),x.length>0?(p=x[x.length-1],Ge===!0&&fe.setGlobalState(_.clippingPlanes,p.state.camera)):p=null,v.pop(),v.length>0?m=v[v.length-1]:m=null};function Wc(A,F,V,G){if(A.visible===!1)return;if(A.layers.test(F.layers)){if(A.isGroup)V=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(F);else if(A.isLight)p.pushLight(A),A.castShadow&&p.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Qe.intersectsSprite(A)){G&&Ae.setFromMatrixPosition(A.matrixWorld).applyMatrix4(ee);let ye=U.update(A),Ie=A.material;Ie.visible&&m.push(A,ye,Ie,V,Ae.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Qe.intersectsObject(A))){let ye=U.update(A),Ie=A.material;if(G&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Ae.copy(A.boundingSphere.center)):(ye.boundingSphere===null&&ye.computeBoundingSphere(),Ae.copy(ye.boundingSphere.center)),Ae.applyMatrix4(A.matrixWorld).applyMatrix4(ee)),Array.isArray(Ie)){let we=ye.groups;for(let Fe=0,Be=we.length;Fe<Be;Fe++){let Le=we[Fe],$e=Ie[Le.materialIndex];$e&&$e.visible&&m.push(A,ye,$e,V,Ae.z,Le)}}else Ie.visible&&m.push(A,ye,Ie,V,Ae.z,null)}}let ue=A.children;for(let ye=0,Ie=ue.length;ye<Ie;ye++)Wc(ue[ye],F,V,G)}function tu(A,F,V,G){let B=A.opaque,ue=A.transmissive,ye=A.transparent;p.setupLightsView(V),Ge===!0&&fe.setGlobalState(_.clippingPlanes,V),G&&Z.viewport(P.copy(G)),B.length>0&&ta(B,F,V),ue.length>0&&ta(ue,F,V),ye.length>0&&ta(ye,F,V),Z.buffers.depth.setTest(!0),Z.buffers.depth.setMask(!0),Z.buffers.color.setMask(!0),Z.setPolygonOffset(!1)}function nu(A,F,V,G){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[G.id]===void 0&&(p.state.transmissionRenderTarget[G.id]=new Cn(1,1,{generateMipmaps:!0,type:Q.has("EXT_color_buffer_half_float")||Q.has("EXT_color_buffer_float")?Vs:vn,minFilter:ln,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Je.workingColorSpace}));let ue=p.state.transmissionRenderTarget[G.id],ye=G.viewport||P;ue.setSize(ye.z*_.transmissionResolutionScale,ye.w*_.transmissionResolutionScale);let Ie=_.getRenderTarget(),we=_.getActiveCubeFace(),Fe=_.getActiveMipmapLevel();_.setRenderTarget(ue),_.getClearColor(q),K=_.getClearAlpha(),K<1&&_.setClearColor(16777215,.5),_.clear(),Ke&&N.render(V);let Be=_.toneMapping;_.toneMapping=Qn;let Le=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),p.setupLightsView(G),Ge===!0&&fe.setGlobalState(_.clippingPlanes,G),ta(A,V,G),pe.updateMultisampleRenderTarget(ue),pe.updateRenderTargetMipmap(ue),Q.has("WEBGL_multisampled_render_to_texture")===!1){let $e=!1;for(let ot=0,xt=F.length;ot<xt;ot++){let dt=F[ot],lt=dt.object,Ue=dt.geometry,pt=dt.material,tt=dt.group;if(pt.side===cn&&lt.layers.test(G.layers)){let Yt=pt.side;pt.side=Ht,pt.needsUpdate=!0,iu(lt,V,G,Ue,pt,tt),pt.side=Yt,pt.needsUpdate=!0,$e=!0}}$e===!0&&(pe.updateMultisampleRenderTarget(ue),pe.updateRenderTargetMipmap(ue))}_.setRenderTarget(Ie,we,Fe),_.setClearColor(q,K),Le!==void 0&&(G.viewport=Le),_.toneMapping=Be}function ta(A,F,V){let G=F.isScene===!0?F.overrideMaterial:null;for(let B=0,ue=A.length;B<ue;B++){let ye=A[B],Ie=ye.object,we=ye.geometry,Fe=ye.group,Be=ye.material;Be.allowOverride===!0&&G!==null&&(Be=G),Ie.layers.test(V.layers)&&iu(Ie,F,V,we,Be,Fe)}}function iu(A,F,V,G,B,ue){A.onBeforeRender(_,F,V,G,B,ue),A.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),B.onBeforeRender(_,F,V,G,A,ue),B.transparent===!0&&B.side===cn&&B.forceSinglePass===!1?(B.side=Ht,B.needsUpdate=!0,_.renderBufferDirect(V,F,G,B,A,ue),B.side=bn,B.needsUpdate=!0,_.renderBufferDirect(V,F,G,B,A,ue),B.side=cn):_.renderBufferDirect(V,F,G,B,A,ue),A.onAfterRender(_,F,V,G,B,ue)}function na(A,F,V){F.isScene!==!0&&(F=Se);let G=oe.get(A),B=p.state.lights,ue=p.state.shadowsArray,ye=B.state.version,Ie=H.getParameters(A,B.state,ue,F,V),we=H.getProgramCacheKey(Ie),Fe=G.programs;G.environment=A.isMeshStandardMaterial?F.environment:null,G.fog=F.fog,G.envMap=(A.isMeshStandardMaterial?Oe:ke).get(A.envMap||G.environment),G.envMapRotation=G.environment!==null&&A.envMap===null?F.environmentRotation:A.envMapRotation,Fe===void 0&&(A.addEventListener("dispose",te),Fe=new Map,G.programs=Fe);let Be=Fe.get(we);if(Be!==void 0){if(G.currentProgram===Be&&G.lightsStateVersion===ye)return ru(A,Ie),Be}else Ie.uniforms=H.getUniforms(A),A.onBeforeCompile(Ie,_),Be=H.acquireProgram(Ie,we),Fe.set(we,Be),G.uniforms=Ie.uniforms;let Le=G.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Le.clippingPlanes=fe.uniform),ru(A,Ie),G.needsLights=Of(A),G.lightsStateVersion=ye,G.needsLights&&(Le.ambientLightColor.value=B.state.ambient,Le.lightProbe.value=B.state.probe,Le.directionalLights.value=B.state.directional,Le.directionalLightShadows.value=B.state.directionalShadow,Le.spotLights.value=B.state.spot,Le.spotLightShadows.value=B.state.spotShadow,Le.rectAreaLights.value=B.state.rectArea,Le.ltc_1.value=B.state.rectAreaLTC1,Le.ltc_2.value=B.state.rectAreaLTC2,Le.pointLights.value=B.state.point,Le.pointLightShadows.value=B.state.pointShadow,Le.hemisphereLights.value=B.state.hemi,Le.directionalShadowMap.value=B.state.directionalShadowMap,Le.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Le.spotShadowMap.value=B.state.spotShadowMap,Le.spotLightMatrix.value=B.state.spotLightMatrix,Le.spotLightMap.value=B.state.spotLightMap,Le.pointShadowMap.value=B.state.pointShadowMap,Le.pointShadowMatrix.value=B.state.pointShadowMatrix),G.currentProgram=Be,G.uniformsList=null,Be}function su(A){if(A.uniformsList===null){let F=A.currentProgram.getUniforms();A.uniformsList=js.seqWithValue(F.seq,A.uniforms)}return A.uniformsList}function ru(A,F){let V=oe.get(A);V.outputColorSpace=F.outputColorSpace,V.batching=F.batching,V.batchingColor=F.batchingColor,V.instancing=F.instancing,V.instancingColor=F.instancingColor,V.instancingMorph=F.instancingMorph,V.skinning=F.skinning,V.morphTargets=F.morphTargets,V.morphNormals=F.morphNormals,V.morphColors=F.morphColors,V.morphTargetsCount=F.morphTargetsCount,V.numClippingPlanes=F.numClippingPlanes,V.numIntersection=F.numClipIntersection,V.vertexAlphas=F.vertexAlphas,V.vertexTangents=F.vertexTangents,V.toneMapping=F.toneMapping}function Nf(A,F,V,G,B){F.isScene!==!0&&(F=Se),pe.resetTextureUnits();let ue=F.fog,ye=G.isMeshStandardMaterial?F.environment:null,Ie=I===null?_.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:Pt,we=(G.isMeshStandardMaterial?Oe:ke).get(G.envMap||ye),Fe=G.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Be=!!V.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Le=!!V.morphAttributes.position,$e=!!V.morphAttributes.normal,ot=!!V.morphAttributes.color,xt=Qn;G.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(xt=_.toneMapping);let dt=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,lt=dt!==void 0?dt.length:0,Ue=oe.get(G),pt=p.state.lights;if(Ge===!0&&(j===!0||A!==y)){let Ot=A===y&&G.id===S;fe.setState(G,A,Ot)}let tt=!1;G.version===Ue.__version?(Ue.needsLights&&Ue.lightsStateVersion!==pt.state.version||Ue.outputColorSpace!==Ie||B.isBatchedMesh&&Ue.batching===!1||!B.isBatchedMesh&&Ue.batching===!0||B.isBatchedMesh&&Ue.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&Ue.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&Ue.instancing===!1||!B.isInstancedMesh&&Ue.instancing===!0||B.isSkinnedMesh&&Ue.skinning===!1||!B.isSkinnedMesh&&Ue.skinning===!0||B.isInstancedMesh&&Ue.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Ue.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&Ue.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&Ue.instancingMorph===!1&&B.morphTexture!==null||Ue.envMap!==we||G.fog===!0&&Ue.fog!==ue||Ue.numClippingPlanes!==void 0&&(Ue.numClippingPlanes!==fe.numPlanes||Ue.numIntersection!==fe.numIntersection)||Ue.vertexAlphas!==Fe||Ue.vertexTangents!==Be||Ue.morphTargets!==Le||Ue.morphNormals!==$e||Ue.morphColors!==ot||Ue.toneMapping!==xt||Ue.morphTargetsCount!==lt)&&(tt=!0):(tt=!0,Ue.__version=G.version);let Yt=Ue.currentProgram;tt===!0&&(Yt=na(G,F,B));let Zi=!1,jt=!1,$s=!1,mt=Yt.getUniforms(),tn=Ue.uniforms;if(Z.useProgram(Yt.program)&&(Zi=!0,jt=!0,$s=!0),G.id!==S&&(S=G.id,jt=!0),Zi||y!==A){Z.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),mt.setValue(L,"projectionMatrix",A.projectionMatrix),mt.setValue(L,"viewMatrix",A.matrixWorldInverse);let Vt=mt.map.cameraPosition;Vt!==void 0&&Vt.setValue(L,ve.setFromMatrixPosition(A.matrixWorld)),$.logarithmicDepthBuffer&&mt.setValue(L,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&mt.setValue(L,"isOrthographic",A.isOrthographicCamera===!0),y!==A&&(y=A,jt=!0,$s=!0)}if(B.isSkinnedMesh){mt.setOptional(L,B,"bindMatrix"),mt.setOptional(L,B,"bindMatrixInverse");let Ot=B.skeleton;Ot&&(Ot.boneTexture===null&&Ot.computeBoneTexture(),mt.setValue(L,"boneTexture",Ot.boneTexture,pe))}B.isBatchedMesh&&(mt.setOptional(L,B,"batchingTexture"),mt.setValue(L,"batchingTexture",B._matricesTexture,pe),mt.setOptional(L,B,"batchingIdTexture"),mt.setValue(L,"batchingIdTexture",B._indirectTexture,pe),mt.setOptional(L,B,"batchingColorTexture"),B._colorsTexture!==null&&mt.setValue(L,"batchingColorTexture",B._colorsTexture,pe));let nn=V.morphAttributes;if((nn.position!==void 0||nn.normal!==void 0||nn.color!==void 0)&&k.update(B,V,Yt),(jt||Ue.receiveShadow!==B.receiveShadow)&&(Ue.receiveShadow=B.receiveShadow,mt.setValue(L,"receiveShadow",B.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(tn.envMap.value=we,tn.flipEnvMap.value=we.isCubeTexture&&we.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&F.environment!==null&&(tn.envMapIntensity.value=F.environmentIntensity),jt&&(mt.setValue(L,"toneMappingExposure",_.toneMappingExposure),Ue.needsLights&&Ff(tn,$s),ue&&G.fog===!0&&se.refreshFogUniforms(tn,ue),se.refreshMaterialUniforms(tn,G,W,ae,p.state.transmissionRenderTarget[A.id]),js.upload(L,su(Ue),tn,pe)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(js.upload(L,su(Ue),tn,pe),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&mt.setValue(L,"center",B.center),mt.setValue(L,"modelViewMatrix",B.modelViewMatrix),mt.setValue(L,"normalMatrix",B.normalMatrix),mt.setValue(L,"modelMatrix",B.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){let Ot=G.uniformsGroups;for(let Vt=0,Xc=Ot.length;Vt<Xc;Vt++){let Ti=Ot[Vt];De.update(Ti,Yt),De.bind(Ti,Yt)}}return Yt}function Ff(A,F){A.ambientLightColor.needsUpdate=F,A.lightProbe.needsUpdate=F,A.directionalLights.needsUpdate=F,A.directionalLightShadows.needsUpdate=F,A.pointLights.needsUpdate=F,A.pointLightShadows.needsUpdate=F,A.spotLights.needsUpdate=F,A.spotLightShadows.needsUpdate=F,A.rectAreaLights.needsUpdate=F,A.hemisphereLights.needsUpdate=F}function Of(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(A,F,V){let G=oe.get(A);G.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),oe.get(A.texture).__webglTexture=F,oe.get(A.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:V,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,F){let V=oe.get(A);V.__webglFramebuffer=F,V.__useDefaultFramebuffer=F===void 0};let Bf=L.createFramebuffer();this.setRenderTarget=function(A,F=0,V=0){I=A,w=F,C=V;let G=!0,B=null,ue=!1,ye=!1;if(A){let we=oe.get(A);if(we.__useDefaultFramebuffer!==void 0)Z.bindFramebuffer(L.FRAMEBUFFER,null),G=!1;else if(we.__webglFramebuffer===void 0)pe.setupRenderTarget(A);else if(we.__hasExternalTextures)pe.rebindTextures(A,oe.get(A.texture).__webglTexture,oe.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){let Le=A.depthTexture;if(we.__boundDepthTexture!==Le){if(Le!==null&&oe.has(Le)&&(A.width!==Le.image.width||A.height!==Le.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");pe.setupDepthRenderbuffer(A)}}let Fe=A.texture;(Fe.isData3DTexture||Fe.isDataArrayTexture||Fe.isCompressedArrayTexture)&&(ye=!0);let Be=oe.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Be[F])?B=Be[F][V]:B=Be[F],ue=!0):A.samples>0&&pe.useMultisampledRTT(A)===!1?B=oe.get(A).__webglMultisampledFramebuffer:Array.isArray(Be)?B=Be[V]:B=Be,P.copy(A.viewport),O.copy(A.scissor),z=A.scissorTest}else P.copy(Te).multiplyScalar(W).floor(),O.copy(Ve).multiplyScalar(W).floor(),z=qe;if(V!==0&&(B=Bf),Z.bindFramebuffer(L.FRAMEBUFFER,B)&&G&&Z.drawBuffers(A,B),Z.viewport(P),Z.scissor(O),Z.setScissorTest(z),ue){let we=oe.get(A.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+F,we.__webglTexture,V)}else if(ye){let we=F;for(let Fe=0;Fe<A.textures.length;Fe++){let Be=oe.get(A.textures[Fe]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+Fe,Be.__webglTexture,V,we)}}else if(A!==null&&V!==0){let we=oe.get(A.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,we.__webglTexture,V)}S=-1},this.readRenderTargetPixels=function(A,F,V,G,B,ue,ye,Ie=0){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let we=oe.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&ye!==void 0&&(we=we[ye]),we){Z.bindFramebuffer(L.FRAMEBUFFER,we);try{let Fe=A.textures[Ie],Be=Fe.format,Le=Fe.type;if(!$.textureFormatReadable(Be)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!$.textureTypeReadable(Le)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=A.width-G&&V>=0&&V<=A.height-B&&(A.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+Ie),L.readPixels(F,V,G,B,he.convert(Be),he.convert(Le),ue))}finally{let Fe=I!==null?oe.get(I).__webglFramebuffer:null;Z.bindFramebuffer(L.FRAMEBUFFER,Fe)}}},this.readRenderTargetPixelsAsync=async function(A,F,V,G,B,ue,ye,Ie=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let we=oe.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&ye!==void 0&&(we=we[ye]),we)if(F>=0&&F<=A.width-G&&V>=0&&V<=A.height-B){Z.bindFramebuffer(L.FRAMEBUFFER,we);let Fe=A.textures[Ie],Be=Fe.format,Le=Fe.type;if(!$.textureFormatReadable(Be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!$.textureTypeReadable(Le))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let $e=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,$e),L.bufferData(L.PIXEL_PACK_BUFFER,ue.byteLength,L.STREAM_READ),A.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+Ie),L.readPixels(F,V,G,B,he.convert(Be),he.convert(Le),0);let ot=I!==null?oe.get(I).__webglFramebuffer:null;Z.bindFramebuffer(L.FRAMEBUFFER,ot);let xt=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await Wd(L,xt,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,$e),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,ue),L.deleteBuffer($e),L.deleteSync(xt),ue}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,F=null,V=0){let G=Math.pow(2,-V),B=Math.floor(A.image.width*G),ue=Math.floor(A.image.height*G),ye=F!==null?F.x:0,Ie=F!==null?F.y:0;pe.setTexture2D(A,0),L.copyTexSubImage2D(L.TEXTURE_2D,V,0,0,ye,Ie,B,ue),Z.unbindTexture()};let kf=L.createFramebuffer(),zf=L.createFramebuffer();this.copyTextureToTexture=function(A,F,V=null,G=null,B=0,ue=null){ue===null&&(B!==0?(ys("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ue=B,B=0):ue=0);let ye,Ie,we,Fe,Be,Le,$e,ot,xt,dt=A.isCompressedTexture?A.mipmaps[ue]:A.image;if(V!==null)ye=V.max.x-V.min.x,Ie=V.max.y-V.min.y,we=V.isBox3?V.max.z-V.min.z:1,Fe=V.min.x,Be=V.min.y,Le=V.isBox3?V.min.z:0;else{let nn=Math.pow(2,-B);ye=Math.floor(dt.width*nn),Ie=Math.floor(dt.height*nn),A.isDataArrayTexture?we=dt.depth:A.isData3DTexture?we=Math.floor(dt.depth*nn):we=1,Fe=0,Be=0,Le=0}G!==null?($e=G.x,ot=G.y,xt=G.z):($e=0,ot=0,xt=0);let lt=he.convert(F.format),Ue=he.convert(F.type),pt;F.isData3DTexture?(pe.setTexture3D(F,0),pt=L.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(pe.setTexture2DArray(F,0),pt=L.TEXTURE_2D_ARRAY):(pe.setTexture2D(F,0),pt=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,F.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,F.unpackAlignment);let tt=L.getParameter(L.UNPACK_ROW_LENGTH),Yt=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Zi=L.getParameter(L.UNPACK_SKIP_PIXELS),jt=L.getParameter(L.UNPACK_SKIP_ROWS),$s=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,dt.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,dt.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Fe),L.pixelStorei(L.UNPACK_SKIP_ROWS,Be),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Le);let mt=A.isDataArrayTexture||A.isData3DTexture,tn=F.isDataArrayTexture||F.isData3DTexture;if(A.isDepthTexture){let nn=oe.get(A),Ot=oe.get(F),Vt=oe.get(nn.__renderTarget),Xc=oe.get(Ot.__renderTarget);Z.bindFramebuffer(L.READ_FRAMEBUFFER,Vt.__webglFramebuffer),Z.bindFramebuffer(L.DRAW_FRAMEBUFFER,Xc.__webglFramebuffer);for(let Ti=0;Ti<we;Ti++)mt&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,oe.get(A).__webglTexture,B,Le+Ti),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,oe.get(F).__webglTexture,ue,xt+Ti)),L.blitFramebuffer(Fe,Be,ye,Ie,$e,ot,ye,Ie,L.DEPTH_BUFFER_BIT,L.NEAREST);Z.bindFramebuffer(L.READ_FRAMEBUFFER,null),Z.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(B!==0||A.isRenderTargetTexture||oe.has(A)){let nn=oe.get(A),Ot=oe.get(F);Z.bindFramebuffer(L.READ_FRAMEBUFFER,kf),Z.bindFramebuffer(L.DRAW_FRAMEBUFFER,zf);for(let Vt=0;Vt<we;Vt++)mt?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,nn.__webglTexture,B,Le+Vt):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,nn.__webglTexture,B),tn?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Ot.__webglTexture,ue,xt+Vt):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Ot.__webglTexture,ue),B!==0?L.blitFramebuffer(Fe,Be,ye,Ie,$e,ot,ye,Ie,L.COLOR_BUFFER_BIT,L.NEAREST):tn?L.copyTexSubImage3D(pt,ue,$e,ot,xt+Vt,Fe,Be,ye,Ie):L.copyTexSubImage2D(pt,ue,$e,ot,Fe,Be,ye,Ie);Z.bindFramebuffer(L.READ_FRAMEBUFFER,null),Z.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else tn?A.isDataTexture||A.isData3DTexture?L.texSubImage3D(pt,ue,$e,ot,xt,ye,Ie,we,lt,Ue,dt.data):F.isCompressedArrayTexture?L.compressedTexSubImage3D(pt,ue,$e,ot,xt,ye,Ie,we,lt,dt.data):L.texSubImage3D(pt,ue,$e,ot,xt,ye,Ie,we,lt,Ue,dt):A.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,ue,$e,ot,ye,Ie,lt,Ue,dt.data):A.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,ue,$e,ot,dt.width,dt.height,lt,dt.data):L.texSubImage2D(L.TEXTURE_2D,ue,$e,ot,ye,Ie,lt,Ue,dt);L.pixelStorei(L.UNPACK_ROW_LENGTH,tt),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Yt),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Zi),L.pixelStorei(L.UNPACK_SKIP_ROWS,jt),L.pixelStorei(L.UNPACK_SKIP_IMAGES,$s),ue===0&&F.generateMipmaps&&L.generateMipmap(pt),Z.unbindTexture()},this.initRenderTarget=function(A){oe.get(A).__webglFramebuffer===void 0&&pe.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?pe.setTextureCube(A,0):A.isData3DTexture?pe.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?pe.setTexture2DArray(A,0):pe.setTexture2D(A,0),Z.unbindTexture()},this.resetState=function(){w=0,C=0,I=null,Z.reset(),de.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return rn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Je._getDrawingBufferColorSpace(e),t.unpackColorSpace=Je._getUnpackColorSpace()}};var Cf={corners:[[5,.06469597667455673,-2.4800868034362793],[4.751579284667969,.16784854233264923,4.407940864562988],[4.751579284667969,.16784854233264923,4.407940864562988],[4.751579284667969,.16784854233264923,4.407940864562988],[4.751579284667969,.16784854233264923,4.407940864562988],[4.751579284667969,.16784854233264923,4.407940864562988],[4.751579284667969,.16784854233264923,4.407940864562988],[4.751579284667969,.16784854233264923,4.407940864562988],[4.641712665557861,.07079967856407166,4.451277256011963],[4.641712665557861,.07079967856407166,4.451277256011963],[2.8318123817443848,.13366781175136566,4.549546718597412],[-4.4878997802734375,.0836174488067627,4.4970550537109375],[-4.747917175292969,.17334187030792236,4.439680099487305],[-4.747917175292969,.17334187030792236,4.439680099487305],[-4.747917175292969,.17334187030792236,4.439680099487305],[-4.768059253692627,.11230485141277313,4.4207587242126465],[-4.782097816467285,.13366781175136566,4.403058052062988],[-4.83642053604126,.06530635058879852,4.310892105102539],[-4.83642053604126,.06530635058879852,4.310892105102539],[-4.83642053604126,.06530635058879852,4.310892105102539],[-4.996337890625,.3454662561416626,.36133915185928345],[-4.82604455947876,.06286486983299255,-4.243751525878906],[-4.809564590454102,.10131818801164627,-4.327982425689697],[-4.809564590454102,.10131818801164627,-4.327982425689697],[-4.809564590454102,.10131818801164627,-4.327982425689697],[-4.799188137054443,.11291521787643433,-4.3414106369018555],[-4.799188137054443,.11291521787643433,-4.3414106369018555],[-4.799188137054443,.11291521787643433,-4.3414106369018555],[-4.799188137054443,.11291521787643433,-4.3414106369018555],[-4.57090950012207,.1538100242614746,-4.378643035888672],[3.8695943355560303,.21667815744876862,-4.56053352355957],[3.9507737159729004,.32593441009521484,-4.553819179534912],[4.727164268493652,.3204410970211029,-4.376811981201172],[4.727164268493652,.3204410970211029,-4.376811981201172],[4.764397144317627,.39490625262260437,-4.351176738739014],[4.83336877822876,.3680499494075775,-4.284646034240723],[4.83336877822876,.3680499494075775,-4.284646034240723],[4.83336877822876,.3680499494075775,-4.284646034240723],[4.962157249450684,.12573298811912537,-3.992889165878296],[4.962157249450684,.12573298811912537,-3.992889165878296]]};function Th(s,e){if(e===Ql)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===Xs||e===Zr){let t=s.getIndex();if(t===null){let a=[],o=s.getAttribute("position");if(o!==void 0){for(let c=0;c<o.count;c++)a.push(c);s.setIndex(a),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}let n=t.count-2,i=[];if(e===Xs)for(let a=1;a<=n;a++)i.push(t.getX(0)),i.push(t.getX(a)),i.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(i.push(t.getX(a)),i.push(t.getX(a+1)),i.push(t.getX(a+2))):(i.push(t.getX(a+2)),i.push(t.getX(a+1)),i.push(t.getX(a)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}var Hc=class extends en{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Ph(t)}),this.register(function(t){return new Lh(t)}),this.register(function(t){return new Hh(t)}),this.register(function(t){return new Vh(t)}),this.register(function(t){return new Gh(t)}),this.register(function(t){return new Uh(t)}),this.register(function(t){return new Nh(t)}),this.register(function(t){return new Fh(t)}),this.register(function(t){return new Oh(t)}),this.register(function(t){return new Ih(t)}),this.register(function(t){return new Bh(t)}),this.register(function(t){return new Dh(t)}),this.register(function(t){return new zh(t)}),this.register(function(t){return new kh(t)}),this.register(function(t){return new Rh(t)}),this.register(function(t){return new Wh(t)}),this.register(function(t){return new Xh(t)})}load(e,t,n,i){let r=this,a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){let l=xn.extractUrlBase(e);a=xn.resolveURL(l,this.path)}else a=xn.extractUrlBase(e);this.manager.itemStart(e);let o=function(l){i?i(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new Un(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,a,function(h){t(h),r.manager.itemEnd(e)},o)}catch(h){o(h)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r,a={},o={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===Uf){try{a[Ze.KHR_BINARY_GLTF]=new qh(e)}catch(u){i&&i(u);return}r=JSON.parse(a[Ze.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let l=new Qh(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](l);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[u.name]=u,a[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let u=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(u){case Ze.KHR_MATERIALS_UNLIT:a[u]=new Ch;break;case Ze.KHR_DRACO_MESH_COMPRESSION:a[u]=new Yh(r,this.dracoLoader);break;case Ze.KHR_TEXTURE_TRANSFORM:a[u]=new jh;break;case Ze.KHR_MESH_QUANTIZATION:a[u]=new Kh;break;default:d.indexOf(u)>=0&&o[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(a),l.setPlugins(o),l.parse(n,i)}parseAsync(e,t){let n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}};function $0(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}var Ze={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},Rh=class{constructor(e){this.parser=e,this.name=Ze.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,i=t.cache.get(n);if(i)return i;let r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],l,h=new Ee(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],Pt);let u=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new ks(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new Bs(h),l.distance=u;break;case"spot":l=new Os(h),l.distance=u,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),Bn(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),i=Promise.resolve(l),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(c){return n._getNodeRef(t.cache,o,c)})}},Ch=class{constructor(){this.name=Ze.KHR_MATERIALS_UNLIT}getMaterialType(){return Xt}extendParams(e,t,n){let i=[];e.color=new Ee(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],Pt),e.opacity=a[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,gt))}return Promise.all(i)}},Ih=class{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}},Ph=class{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:zt}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],a=i.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){let o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new ie(o,o)}return Promise.all(r)}},Lh=class{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_DISPERSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:zt}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}},Dh=class{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:zt}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],a=i.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(r)}},Uh=class{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_SHEEN}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:zt}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[];t.sheenColor=new Ee(0,0,0),t.sheenRoughness=0,t.sheen=1;let a=i.extensions[this.name];if(a.sheenColorFactor!==void 0){let o=a.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],Pt)}return a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",a.sheenColorTexture,gt)),a.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(r)}},Nh=class{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:zt}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],a=i.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(r)}},Fh=class{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_VOLUME}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:zt}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],a=i.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;let o=a.attenuationColor||[1,1,1];return t.attenuationColor=new Ee().setRGB(o[0],o[1],o[2],Pt),Promise.all(r)}},Oh=class{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_IOR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:zt}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}},Bh=class{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_SPECULAR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:zt}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],a=i.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",a.specularTexture));let o=a.specularColorFactor||[1,1,1];return t.specularColor=new Ee().setRGB(o[0],o[1],o[2],Pt),a.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",a.specularColorTexture,gt)),Promise.all(r)}},kh=class{constructor(e){this.parser=e,this.name=Ze.EXT_MATERIALS_BUMP}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:zt}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],a=i.extensions[this.name];return t.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",a.bumpTexture)),Promise.all(r)}},zh=class{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:zt}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],a=i.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(r)}},Hh=class{constructor(e){this.parser=e,this.name=Ze.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;let r=i.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}},Vh=class{constructor(e){this.parser=e,this.name=Ze.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=i.images[a.source],c=n.textureLoader;if(o.uri){let l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return n.loadTextureImage(e,a.source,c)}},Gh=class{constructor(e){this.parser=e,this.name=Ze.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=i.images[a.source],c=n.textureLoader;if(o.uri){let l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return n.loadTextureImage(e,a.source,c)}},Wh=class{constructor(e){this.name=Ze.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){let c=i.byteOffset||0,l=i.byteLength||0,h=i.count,u=i.byteStride,d=new Uint8Array(o,c,l);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,u,d,i.mode,i.filter).then(function(f){return f.buffer}):a.ready.then(function(){let f=new ArrayBuffer(h*u);return a.decodeGltfBuffer(new Uint8Array(f),h,u,d,i.mode,i.filter),f})})}else return null}},Xh=class{constructor(e){this.name=Ze.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let i=t.meshes[n.mesh];for(let l of i.primitives)if(l.mode!==hn.TRIANGLES&&l.mode!==hn.TRIANGLE_STRIP&&l.mode!==hn.TRIANGLE_FAN&&l.mode!==void 0)return null;let a=n.extensions[this.name].attributes,o=[],c={};for(let l in a)o.push(this.parser.getDependency("accessor",a[l]).then(h=>(c[l]=h,c[l])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(l=>{let h=l.pop(),u=h.isGroup?h.children:[h],d=l[0].count,f=[];for(let g of u){let b=new ze,m=new R,p=new on,v=new R(1,1,1),x=new Es(g.geometry,g.material,d);for(let _=0;_<d;_++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,_),c.ROTATION&&p.fromBufferAttribute(c.ROTATION,_),c.SCALE&&v.fromBufferAttribute(c.SCALE,_),x.setMatrixAt(_,b.compose(m,p,v));for(let _ in c)if(_==="_COLOR_0"){let T=c[_];x.instanceColor=new _n(T.array,T.itemSize,T.normalized)}else _!=="TRANSLATION"&&_!=="ROTATION"&&_!=="SCALE"&&g.geometry.setAttribute(_,c[_]);ct.prototype.copy.call(x,g),this.parser.assignFinalMaterial(x),f.push(x)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}},Uf="glTF",Qr=12,If={JSON:1313821514,BIN:5130562},qh=class{constructor(e){this.name=Ze.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,Qr),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Uf)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let i=this.header.length-Qr,r=new DataView(e,Qr),a=0;for(;a<i;){let o=r.getUint32(a,!0);a+=4;let c=r.getUint32(a,!0);if(a+=4,c===If.JSON){let l=new Uint8Array(e,Qr+a,o);this.content=n.decode(l)}else if(c===If.BIN){let l=Qr+a;this.body=e.slice(l,l+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Yh=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Ze.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},c={},l={};for(let h in a){let u=Zh[h]||h.toLowerCase();o[u]=a[h]}for(let h in e.attributes){let u=Zh[h]||h.toLowerCase();if(a[h]!==void 0){let d=n.accessors[e.attributes[h]],f=Js[d.componentType];l[u]=f.name,c[u]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,d){i.decodeDracoFile(h,function(f){for(let g in f.attributes){let b=f.attributes[g],m=c[g];m!==void 0&&(b.normalized=m)}u(f)},o,l,Pt,d)})})}},jh=class{constructor(){this.name=Ze.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},Kh=class{constructor(){this.name=Ze.KHR_MESH_QUANTIZATION}},Vc=class extends Kn{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let a=0;a!==i;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=o*2,l=o*3,h=i-t,u=(n-t)/h,d=u*u,f=d*u,g=e*l,b=g-l,m=-2*f+3*d,p=f-d,v=1-m,x=p-d+u;for(let _=0;_!==o;_++){let T=a[b+_+o],w=a[b+_+c]*h,C=a[g+_+o],I=a[g+_]*h;r[_]=v*T+x*w+m*C+p*I}return r}},Q0=new on,Jh=class extends Vc{interpolate_(e,t,n,i){let r=super.interpolate_(e,t,n,i);return Q0.fromArray(r).normalize().toArray(r),r}},hn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Js={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Pf={9728:It,9729:Nt,9984:Xr,9985:Gi,9986:vi,9987:ln},Lf={33071:mn,33648:Ui,10497:Yn},Ah={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Zh={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Mi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},ex={CUBICSPLINE:void 0,LINEAR:Fi,STEP:Ni},wh={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function tx(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new mi({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:bn})),s.DefaultMaterial}function Ji(s,e,t){for(let n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Bn(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function nx(s,e,t){let n=!1,i=!1,r=!1;for(let l=0,h=e.length;l<h;l++){let u=e[l];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);let a=[],o=[],c=[];for(let l=0,h=e.length;l<h;l++){let u=e[l];if(n){let d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):s.attributes.position;a.push(d)}if(i){let d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):s.attributes.normal;o.push(d)}if(r){let d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):s.attributes.color;c.push(d)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c)]).then(function(l){let h=l[0],u=l[1],d=l[2];return n&&(s.morphAttributes.position=h),i&&(s.morphAttributes.normal=u),r&&(s.morphAttributes.color=d),s.morphTargetsRelative=!0,s})}function ix(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function sx(s){let e,t=s.extensions&&s.extensions[Ze.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Eh(t.attributes):e=s.indices+":"+Eh(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+Eh(s.targets[n]);return e}function Eh(s){let e="",t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function $h(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function rx(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var ax=new ze,Qh=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new $0,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,a=-1;if(typeof navigator<"u"){let o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;let c=o.match(/Version\/(\d+)/);i=n&&c?parseInt(c[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||r&&a<98?this.textureLoader=new gi(this.options.manager):this.textureLoader=new Hr(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Un(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){let o={scene:a[0][i.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:i.asset,parser:n,userData:{}};return Ji(r,o,i),Bn(o,i),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(o)})).then(function(){for(let c of o.scenes)c.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){let a=t[i].joints;for(let o=0,c=a.length;o<c;o++)e[a[o]].isBone=!0}for(let i=0,r=e.length;i<r;i++){let a=e[i];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let i=n.clone(),r=(a,o)=>{let c=this.associations.get(a);c!=null&&this.associations.set(o,c);for(let[l,h]of a.children.entries())r(h,o.children[l])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let i=e(t[n]);if(i)return i}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let i=0;i<t.length;i++){let r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Ze.KHR_BINARY_GLTF].body);let i=this.options;return new Promise(function(r,a){n.load(xn.resolveURL(t.uri,i.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){let t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){let a=Ah[i.type],o=Js[i.componentType],c=i.normalized===!0,l=new o(i.count*a);return Promise.resolve(new ft(l,a,c))}let r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(a){let o=a[0],c=Ah[i.type],l=Js[i.componentType],h=l.BYTES_PER_ELEMENT,u=h*c,d=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0,b,m;if(f&&f!==u){let p=Math.floor(d/f),v="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count,x=t.cache.get(v);x||(b=new l(o,p*f,i.count*f/h),x=new hi(b,f/h),t.cache.add(v,x)),m=new In(x,c,d%f/h,g)}else o===null?b=new l(i.count*c):b=new l(o,d,i.count*c),m=new ft(b,c,g);if(i.sparse!==void 0){let p=Ah.SCALAR,v=Js[i.sparse.indices.componentType],x=i.sparse.indices.byteOffset||0,_=i.sparse.values.byteOffset||0,T=new v(a[1],x,i.sparse.count*p),w=new l(a[2],_,i.sparse.count*c);o!==null&&(m=new ft(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let C=0,I=T.length;C<I;C++){let S=T[C];if(m.setX(S,w[C*c]),c>=2&&m.setY(S,w[C*c+1]),c>=3&&m.setZ(S,w[C*c+2]),c>=4&&m.setW(S,w[C*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r],o=this.textureLoader;if(a.uri){let c=n.manager.getHandler(a.uri);c!==null&&(o=c)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){let i=this,r=this.json,a=r.textures[e],o=r.images[t],c=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[c])return this.textureCache[c];let l=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=a.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);let d=(r.samplers||{})[a.sampler]||{};return h.magFilter=Pf[d.magFilter]||Nt,h.minFilter=Pf[d.minFilter]||ln,h.wrapS=Lf[d.wrapS]||Yn,h.wrapT=Lf[d.wrapT]||Yn,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==It&&h.minFilter!==Nt,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){let n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());let a=i.images[e],o=self.URL||self.webkitURL,c=a.uri||"",l=!1;if(a.bufferView!==void 0)c=n.getDependency("bufferView",a.bufferView).then(function(u){l=!0;let d=new Blob([u],{type:a.mimeType});return c=o.createObjectURL(d),c});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let h=Promise.resolve(c).then(function(u){return new Promise(function(d,f){let g=d;t.isImageBitmapLoader===!0&&(g=function(b){let m=new wt(b);m.needsUpdate=!0,d(m)}),t.load(xn.resolveURL(u,r.path),g,void 0,f)})}).then(function(u){return l===!0&&o.revokeObjectURL(c),Bn(u,a),u.userData.mimeType=a.mimeType||rx(a.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){let r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[Ze.KHR_TEXTURE_TRANSFORM]){let o=n.extensions!==void 0?n.extensions[Ze.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let c=r.associations.get(a);a=r.extensions[Ze.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,c)}}return i!==void 0&&(a.colorSpace=i),e[t]=a,a})}assignFinalMaterial(e){let t=e.geometry,n=e.material,i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){let o="PointsMaterial:"+n.uuid,c=this.cache.get(o);c||(c=new Hi,vt.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(o,c)),n=c}else if(e.isLine){let o="LineBasicMaterial:"+n.uuid,c=this.cache.get(o);c||(c=new di,vt.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(o,c)),n=c}if(i||r||a){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let c=this.cache.get(o);c||(c=n.clone(),r&&(c.vertexColors=!0),a&&(c.flatShading=!0),i&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(o,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return mi}loadMaterial(e){let t=this,n=this.json,i=this.extensions,r=n.materials[e],a,o={},c=r.extensions||{},l=[];if(c[Ze.KHR_MATERIALS_UNLIT]){let u=i[Ze.KHR_MATERIALS_UNLIT];a=u.getMaterialType(),l.push(u.extendParams(o,r,t))}else{let u=r.pbrMetallicRoughness||{};if(o.color=new Ee(1,1,1),o.opacity=1,Array.isArray(u.baseColorFactor)){let d=u.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],Pt),o.opacity=d[3]}u.baseColorTexture!==void 0&&l.push(t.assignTexture(o,"map",u.baseColorTexture,gt)),o.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,o.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(o,"metalnessMap",u.metallicRoughnessTexture)),l.push(t.assignTexture(o,"roughnessMap",u.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=cn);let h=r.alphaMode||wh.OPAQUE;if(h===wh.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===wh.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==Xt&&(l.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new ie(1,1),r.normalTexture.scale!==void 0)){let u=r.normalTexture.scale;o.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&a!==Xt&&(l.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==Xt){let u=r.emissiveFactor;o.emissive=new Ee().setRGB(u[0],u[1],u[2],Pt)}return r.emissiveTexture!==void 0&&a!==Xt&&l.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,gt)),Promise.all(l).then(function(){let u=new a(o);return r.name&&(u.name=r.name),Bn(u,r),t.associations.set(u,{materials:e}),r.extensions&&Ji(i,u,r),u})}createUniqueName(e){let t=ht.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,i=this.primitiveCache;function r(o){return n[Ze.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(c){return Df(c,o,t)})}let a=[];for(let o=0,c=e.length;o<c;o++){let l=e[o],h=sx(l),u=i[h];if(u)a.push(u.promise);else{let d;l.extensions&&l.extensions[Ze.KHR_DRACO_MESH_COMPRESSION]?d=r(l):d=Df(new nt,l,t),i[h]={primitive:l,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(e){let t=this,n=this.json,i=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let c=0,l=a.length;c<l;c++){let h=a[c].material===void 0?tx(this.cache):this.getDependency("material",a[c].material);o.push(h)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(c){let l=c.slice(0,c.length-1),h=c[c.length-1],u=[];for(let f=0,g=h.length;f<g;f++){let b=h[f],m=a[f],p,v=l[f];if(m.mode===hn.TRIANGLES||m.mode===hn.TRIANGLE_STRIP||m.mode===hn.TRIANGLE_FAN||m.mode===void 0)p=r.isSkinnedMesh===!0?new As(b,v):new At(b,v),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===hn.TRIANGLE_STRIP?p.geometry=Th(p.geometry,Zr):m.mode===hn.TRIANGLE_FAN&&(p.geometry=Th(p.geometry,Xs));else if(m.mode===hn.LINES)p=new Rs(b,v);else if(m.mode===hn.LINE_STRIP)p=new fi(b,v);else if(m.mode===hn.LINE_LOOP)p=new Cs(b,v);else if(m.mode===hn.POINTS)p=new Is(b,v);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&ix(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),Bn(p,r),m.extensions&&Ji(i,p,m),t.assignFinalMaterial(p),u.push(p)}for(let f=0,g=u.length;f<g;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return r.extensions&&Ji(i,u[0],r),u[0];let d=new _t;r.extensions&&Ji(i,d,r),t.associations.set(d,{meshes:e});for(let f=0,g=u.length;f<g;f++)d.add(u[f]);return d})}loadCamera(e){let t,n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new yt(Wi.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new bi(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Bn(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){let r=i.pop(),a=i,o=[],c=[];for(let l=0,h=a.length;l<h;l++){let u=a[l];if(u){o.push(u);let d=new ze;r!==null&&d.fromArray(r.array,l*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new ws(o,c)})}loadAnimation(e){let t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,a=[],o=[],c=[],l=[],h=[];for(let u=0,d=i.channels.length;u<d;u++){let f=i.channels[u],g=i.samplers[f.sampler],b=f.target,m=b.node,p=i.parameters!==void 0?i.parameters[g.input]:g.input,v=i.parameters!==void 0?i.parameters[g.output]:g.output;b.node!==void 0&&(a.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",p)),c.push(this.getDependency("accessor",v)),l.push(g),h.push(b))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(u){let d=u[0],f=u[1],g=u[2],b=u[3],m=u[4],p=[];for(let x=0,_=d.length;x<_;x++){let T=d[x],w=f[x],C=g[x],I=b[x],S=m[x];if(T===void 0)continue;T.updateMatrix&&T.updateMatrix();let y=n._createAnimationTracks(T,w,C,I,S);if(y)for(let P=0;P<y.length;P++)p.push(y[P])}let v=new Ns(r,void 0,p);return Bn(v,i),v})}createNodeMesh(e){let t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){let a=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let c=0,l=i.weights.length;c<l;c++)o.morphTargetInfluences[c]=i.weights[c]}),a})}loadNode(e){let t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),a=[],o=i.children||[];for(let l=0,h=o.length;l<h;l++)a.push(n.getDependency("node",o[l]));let c=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(a),c]).then(function(l){let h=l[0],u=l[1],d=l[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,ax)});for(let f=0,g=u.length;f<g;f++)h.add(u[f]);return h})}_loadNodeShallow(e){let t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],a=r.name?i.createUniqueName(r.name):"",o=[],c=i._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&o.push(c),r.camera!==void 0&&o.push(i.getDependency("camera",r.camera).then(function(l){return i._getNodeRef(i.cameraCache,r.camera,l)})),i._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){o.push(l)}),this.nodeCache[e]=Promise.all(o).then(function(l){let h;if(r.isBone===!0?h=new zi:l.length>1?h=new _t:l.length===1?h=l[0]:h=new ct,h!==l[0])for(let u=0,d=l.length;u<d;u++)h.add(l[u]);if(r.name&&(h.userData.name=r.name,h.name=a),Bn(h,r),r.extensions&&Ji(n,h,r),r.matrix!==void 0){let u=new ze;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);if(!i.associations.has(h))i.associations.set(h,{});else if(r.mesh!==void 0&&i.meshCache.refs[r.mesh]>1){let u=i.associations.get(h);i.associations.set(h,{...u})}return i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],i=this,r=new _t;n.name&&(r.name=i.createUniqueName(n.name)),Bn(r,n),n.extensions&&Ji(t,r,n);let a=n.nodes||[],o=[];for(let c=0,l=a.length;c<l;c++)o.push(i.getDependency("node",a[c]));return Promise.all(o).then(function(c){for(let h=0,u=c.length;h<u;h++)r.add(c[h]);let l=h=>{let u=new Map;for(let[d,f]of i.associations)(d instanceof vt||d instanceof wt)&&u.set(d,f);return h.traverse(d=>{let f=i.associations.get(d);f!=null&&u.set(d,f)}),u};return i.associations=l(r),r})}_createAnimationTracks(e,t,n,i,r){let a=[],o=e.name?e.name:e.uuid,c=[];Mi[r.path]===Mi.weights?e.traverse(function(d){d.morphTargetInfluences&&c.push(d.name?d.name:d.uuid)}):c.push(o);let l;switch(Mi[r.path]){case Mi.weights:l=Pn;break;case Mi.rotation:l=Ln;break;case Mi.translation:case Mi.scale:l=Dn;break;default:n.itemSize===1?l=Pn:l=Dn;break}let h=i.interpolation!==void 0?ex[i.interpolation]:Fi,u=this._getArrayFromAccessor(n);for(let d=0,f=c.length;d<f;d++){let g=new l(c[d]+"."+Mi[r.path],t.array,u,h);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),a.push(g)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=$h(t.constructor),i=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let i=this instanceof Ln?Jh:Vc;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function ox(s,e,t){let n=e.attributes,i=new Mt;if(n.POSITION!==void 0){let o=t.json.accessors[n.POSITION],c=o.min,l=o.max;if(c!==void 0&&l!==void 0){if(i.set(new R(c[0],c[1],c[2]),new R(l[0],l[1],l[2])),o.normalized){let h=$h(Js[o.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let o=new R,c=new R;for(let l=0,h=r.length;l<h;l++){let u=r[l];if(u.POSITION!==void 0){let d=t.json.accessors[u.POSITION],f=d.min,g=d.max;if(f!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),d.normalized){let b=$h(Js[d.componentType]);c.multiplyScalar(b)}o.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}s.boundingBox=i;let a=new St;i.getCenter(a.center),a.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=a}function Df(s,e,t){let n=e.attributes,i=[];function r(a,o){return t.getDependency("accessor",a).then(function(c){s.setAttribute(o,c)})}for(let a in n){let o=Zh[a]||a.toLowerCase();o in s.attributes||i.push(r(n[a],o))}if(e.indices!==void 0&&!s.index){let a=t.getDependency("accessor",e.indices).then(function(o){s.setIndex(o)});i.push(a)}return Je.workingColorSpace!==Pt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Je.workingColorSpace}" not supported.`),Bn(s,e),ox(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?nx(s,e.targets,t):s})}var Gc=(function(){var s="b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuikqbeeedddillviebeoweuec:q:Odkr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbol79IV9Rbrq;w8Wqdbk;esezu8Jjjjjbcj;eb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Radz1jjjbhwcj;abad9Uc;WFbGgocjdaocjd6EhDaicefhocbhqdnindndndnaeaq9nmbaDaeaq9RaqaDfae6Egkcsfglcl4cifcd4hxalc9WGgmTmecbhPawcjdfhsaohzinaraz9Rax6mvarazaxfgo9RcK6mvczhlcbhHinalgic9WfgOawcj;cbffhldndndndndnazaOco4fRbbaHcoG4ciGPlbedibkal9cb83ibalcwf9cb83ibxikalaoRblaoRbbgOco4gAaAciSgAE86bbawcj;cbfaifglcGfaoclfaAfgARbbaOcl4ciGgCaCciSgCE86bbalcVfaAaCfgARbbaOcd4ciGgCaCciSgCE86bbalc7faAaCfgARbbaOciGgOaOciSgOE86bbalctfaAaOfgARbbaoRbegOco4gCaCciSgCE86bbalc91faAaCfgARbbaOcl4ciGgCaCciSgCE86bbalc4faAaCfgARbbaOcd4ciGgCaCciSgCE86bbalc93faAaCfgARbbaOciGgOaOciSgOE86bbalc94faAaOfgARbbaoRbdgOco4gCaCciSgCE86bbalc95faAaCfgARbbaOcl4ciGgCaCciSgCE86bbalc96faAaCfgARbbaOcd4ciGgCaCciSgCE86bbalc97faAaCfgARbbaOciGgOaOciSgOE86bbalc98faAaOfgORbbaoRbigoco4gAaAciSgAE86bbalc99faOaAfgORbbaocl4ciGgAaAciSgAE86bbalc9:faOaAfgORbbaocd4ciGgAaAciSgAE86bbalcufaOaAfglRbbaociGgoaociSgoE86bbalaofhoxdkalaoRbwaoRbbgOcl4gAaAcsSgAE86bbawcj;cbfaifglcGfaocwfaAfgARbbaOcsGgOaOcsSgOE86bbalcVfaAaOfgORbbaoRbegAcl4gCaCcsSgCE86bbalc7faOaCfgORbbaAcsGgAaAcsSgAE86bbalctfaOaAfgORbbaoRbdgAcl4gCaCcsSgCE86bbalc91faOaCfgORbbaAcsGgAaAcsSgAE86bbalc4faOaAfgORbbaoRbigAcl4gCaCcsSgCE86bbalc93faOaCfgORbbaAcsGgAaAcsSgAE86bbalc94faOaAfgORbbaoRblgAcl4gCaCcsSgCE86bbalc95faOaCfgORbbaAcsGgAaAcsSgAE86bbalc96faOaAfgORbbaoRbvgAcl4gCaCcsSgCE86bbalc97faOaCfgORbbaAcsGgAaAcsSgAE86bbalc98faOaAfgORbbaoRbogAcl4gCaCcsSgCE86bbalc99faOaCfgORbbaAcsGgAaAcsSgAE86bbalc9:faOaAfgORbbaoRbrgocl4gAaAcsSgAE86bbalcufaOaAfglRbbaocsGgoaocsSgoE86bbalaofhoxekalao8Pbb83bbalcwfaocwf8Pbb83bbaoczfhokdnaiam9pmbaHcdfhHaiczfhlarao9RcL0mekkaiam6mvaoTmvdnakTmbawaPfRbbhHawcj;cbfhlashiakhOinaialRbbgzce4cbazceG9R7aHfgH86bbaiadfhialcefhlaOcufgOmbkkascefhsaohzaPcefgPad9hmbxikkcbc99arao9Radcaadca0ESEhoxlkaoaxad2fhCdnakmbadhlinaoTmlarao9Rax6mlaoaxfhoalcufglmbkaChoxekcbhmawcjdfhAinarao9Rax6miawamfRbbhHawcj;cbfhlaAhiakhOinaialRbbgzce4cbazceG9R7aHfgH86bbaiadfhialcefhlaOcufgOmbkaAcefhAaoaxfhoamcefgmad9hmbkaChokabaqad2fawcjdfakad2z1jjjb8Aawawcjdfakcufad2fadz1jjjb8Aakaqfhqaombkc9:hoxekc9:hokavcj;ebf8Kjjjjbaok;cseHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgwce0mbavc;abfcFecjez:jjjjb8AavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhDaicefgqarfhidnaeTmbcmcsawceSEhkcbhxcbhmcbhPcbhwcbhlindnaiaD9nmbc9:hoxikdndnaqRbbgoc;Ve0mbavc;abfalaocu7gscl4fcsGcitfgzydlhrazydbhzdnaocsGgHak9pmbavawasfcsGcdtfydbaxaHEhoaHThsdndnadcd9hmbabaPcetfgHaz87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHazBdbaHcwfaoBdbaHclfarBdbkaxasfhxcdhHavawcdtfaoBdbawasfhwcehsalhOxdkdndnaHcsSmbaHc987aHamffcefhoxekaicefhoai8SbbgHcFeGhsdndnaHcu9mmbaohixekaicvfhiascFbGhscrhHdninao8SbbgOcFbGaHtasVhsaOcu9kmeaocefhoaHcrfgHc8J9hmbxdkkaocefhikasce4cbasceG9R7amfhokdndnadcd9hmbabaPcetfgHaz87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHazBdbaHcwfaoBdbaHclfarBdbkcdhHavawcdtfaoBdbcehsawcefhwalhOaohmxekdnaocpe0mbaxcefgHavawaDaocsGfRbbgocl49RcsGcdtfydbaocz6gzEhravawao9RcsGcdtfydbaHazfgAaocsGgHEhoaHThCdndnadcd9hmbabaPcetfgHax87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHaxBdbaHcwfaoBdbaHclfarBdbkcdhsavawcdtfaxBdbavawcefgwcsGcdtfarBdbcihHavc;abfalcitfgOaxBdlaOarBdbavawazfgwcsGcdtfaoBdbalcefcsGhOawaCfhwaxhzaAaCfhxxekaxcbaiRbbgOEgzaoc;:eSgHfhraOcsGhCaOcl4hAdndnaOcs0mbarcefhoxekarhoavawaA9RcsGcdtfydbhrkdndnaCmbaocefhxxekaohxavawaO9RcsGcdtfydbhokdndnaHTmbaicefhHxekaicdfhHai8SbegscFeGhzdnascu9kmbaicofhXazcFbGhzcrhidninaH8SbbgscFbGaitazVhzascu9kmeaHcefhHaicrfgic8J9hmbkaXhHxekaHcefhHkazce4cbazceG9R7amfgmhzkdndnaAcsSmbaHhsxekaHcefhsaH8SbbgicFeGhrdnaicu9kmbaHcvfhXarcFbGhrcrhidninas8SbbgHcFbGaitarVhraHcu9kmeascefhsaicrfgic8J9hmbkaXhsxekascefhskarce4cbarceG9R7amfgmhrkdndnaCcsSmbashixekascefhias8SbbgocFeGhHdnaocu9kmbascvfhXaHcFbGhHcrhodninai8SbbgscFbGaotaHVhHascu9kmeaicefhiaocrfgoc8J9hmbkaXhixekaicefhikaHce4cbaHceG9R7amfgmhokdndnadcd9hmbabaPcetfgHaz87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHazBdbaHcwfaoBdbaHclfarBdbkcdhsavawcdtfazBdbavawcefgwcsGcdtfarBdbcihHavc;abfalcitfgXazBdlaXarBdbavawaOcz6aAcsSVfgwcsGcdtfaoBdbawaCTaCcsSVfhwalcefcsGhOkaqcefhqavc;abfaOcitfgOarBdlaOaoBdbavc;abfalasfcsGcitfgraoBdlarazBdbawcsGhwalaHfcsGhlaPcifgPae6mbkkcbc99aiaDSEhokavc;aef8Kjjjjbaok:flevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaic8Etc8F91aicd47avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaic8Etc8F91aicd47avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk;oiliui99iue99dnaeTmbcbhiabhlindndnJ;Zl81Zalcof8UebgvciV:Y:vgoal8Ueb:YNgrJb;:FSNJbbbZJbbb:;arJbbbb9GEMgw:lJbbb9p9DTmbaw:OhDxekcjjjj94hDkalclf8Uebhqalcdf8UebhkabaiavcefciGfcetfaD87ebdndnaoak:YNgwJb;:FSNJbbbZJbbb:;awJbbbb9GEMgx:lJbbb9p9DTmbax:OhDxekcjjjj94hDkabaiavciGfgkcd7cetfaD87ebdndnaoaq:YNgoJb;:FSNJbbbZJbbb:;aoJbbbb9GEMgx:lJbbb9p9DTmbax:OhDxekcjjjj94hDkabaiavcufciGfcetfaD87ebdndnJbbjZararN:tawawN:taoaoN:tgrJbbbbarJbbbb9GE:rJb;:FSNJbbbZMgr:lJbbb9p9DTmbar:Ohvxekcjjjj94hvkabakcetfav87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2gdTmbinababydbgecwtcw91:Yaece91cjjj98Gcjjj;8if::NUdbabclfhbadcufgdmbkkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaeczfheaiczfhiadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkkkebcjwklzNbb",e="b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuikqbbebeedddilve9Weeeviebeoweuec:q:6dkr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbwl79IV9RbDq:p9sqlbzik9:evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaec:q:yjjbfai86bbaecitc:q1jjbfab8Piw83ibaecefgecjd9hmbkk:N8JlHud97euo978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Rad;8qbbcj;abad9UhlaicefhodnaeTmbadTmbalc;WFbGglcjdalcjd6EhwcbhDinawaeaD9RaDawfae6Egqcsfglc9WGgkci2hxakcethmalcl4cifcd4hPabaDad2fhsakc;ab6hzcbhHincbhOaohAdndninaraA9RaP6meavcj;cbfaOak2fhCaAaPfhocbhidnazmbarao9Rc;Gb6mbcbhlinaCalfhidndndndndnaAalco4fRbbgXciGPlbedibkaipxbbbbbbbbbbbbbbbbpklbxikaiaopbblaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbaoclfaYpQbfaKc:q:yjjbfRbbfhoxdkaiaopbbwaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbaocwfaYpQbfaKc:q:yjjbfRbbfhoxekaiaopbbbpklbaoczfhokdndndndndnaXcd4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklzxikaiaopbblaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzaoclfaYpQbfaKc:q:yjjbfRbbfhoxdkaiaopbbwaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzaocwfaYpQbfaKc:q:yjjbfRbbfhoxekaiaopbbbpklzaoczfhokdndndndndnaXcl4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklaxikaiaopbblaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaaoclfaYpQbfaKc:q:yjjbfRbbfhoxdkaiaopbbwaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaaocwfaYpQbfaKc:q:yjjbfRbbfhoxekaiaopbbbpklaaoczfhokdndndndndnaXco4Plbedibkaipxbbbbbbbbbbbbbbbbpkl8WxikaiaopbblaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WaoclfaYpQbfaXc:q:yjjbfRbbfhoxdkaiaopbbwaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WaocwfaYpQbfaXc:q:yjjbfRbbfhoxekaiaopbbbpkl8Waoczfhokalc;abfhialcjefak0meaihlarao9Rc;Fb0mbkkdnaiak9pmbaici4hlinarao9RcK6miaCaifhXdndndndndnaAaico4fRbbalcoG4ciGPlbedibkaXpxbbbbbbbbbbbbbbbbpkbbxikaXaopbblaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkbbaoclfaYpQbfaKc:q:yjjbfRbbfhoxdkaXaopbbwaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkbbaocwfaYpQbfaKc:q:yjjbfRbbfhoxekaXaopbbbpkbbaoczfhokalcdfhlaiczfgiak6mbkkaoTmeaohAaOcefgOclSmdxbkkc9:hoxlkdnakTmbavcjdfaHfhiavaHfpbdbhYcbhXinaiavcj;cbfaXfglpblbgLcep9TaLpxeeeeeeeeeeeeeeeegQp9op9Hp9rgLalakfpblbg8Acep9Ta8AaQp9op9Hp9rg8ApmbzeHdOiAlCvXoQrLgEalamfpblbg3cep9Ta3aQp9op9Hp9rg3alaxfpblbg5cep9Ta5aQp9op9Hp9rg5pmbzeHdOiAlCvXoQrLg8EpmbezHdiOAlvCXorQLgQaQpmbedibedibedibediaYp9UgYp9AdbbaiadfglaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaladfglaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaladfglaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaladfglaYaEa8EpmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaladfglaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaladfglaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaladfglaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaladfglaYaLa8ApmwKDYq8AkEx3m5P8Es8FgLa3a5pmwKDYq8AkEx3m5P8Es8Fg8ApmbezHdiOAlvCXorQLgQaQpmbedibedibedibedip9UgYp9AdbbaladfglaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaladfglaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaladfglaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaladfglaYaLa8ApmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaladfglaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaladfglaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaladfglaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaladfhiaXczfgXak6mbkkaHclfgHad6mbkasavcjdfaqad2;8qbbavavcjdfaqcufad2fad;8qbbaqaDfgDae6mbkkcbc99arao9Radcaadca0ESEhokavcj;kbf8Kjjjjbaokwbz:bjjjbk::seHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgwce0mbavc;abfcFecje;8kbavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhDaicefgqarfhidnaeTmbcmcsawceSEhkcbhxcbhmcbhPcbhwcbhlindnaiaD9nmbc9:hoxikdndnaqRbbgoc;Ve0mbavc;abfalaocu7gscl4fcsGcitfgzydlhrazydbhzdnaocsGgHak9pmbavawasfcsGcdtfydbaxaHEhoaHThsdndnadcd9hmbabaPcetfgHaz87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHazBdbaHcwfaoBdbaHclfarBdbkaxasfhxcdhHavawcdtfaoBdbawasfhwcehsalhOxdkdndnaHcsSmbaHc987aHamffcefhoxekaicefhoai8SbbgHcFeGhsdndnaHcu9mmbaohixekaicvfhiascFbGhscrhHdninao8SbbgOcFbGaHtasVhsaOcu9kmeaocefhoaHcrfgHc8J9hmbxdkkaocefhikasce4cbasceG9R7amfhokdndnadcd9hmbabaPcetfgHaz87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHazBdbaHcwfaoBdbaHclfarBdbkcdhHavawcdtfaoBdbcehsawcefhwalhOaohmxekdnaocpe0mbaxcefgHavawaDaocsGfRbbgocl49RcsGcdtfydbaocz6gzEhravawao9RcsGcdtfydbaHazfgAaocsGgHEhoaHThCdndnadcd9hmbabaPcetfgHax87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHaxBdbaHcwfaoBdbaHclfarBdbkcdhsavawcdtfaxBdbavawcefgwcsGcdtfarBdbcihHavc;abfalcitfgOaxBdlaOarBdbavawazfgwcsGcdtfaoBdbalcefcsGhOawaCfhwaxhzaAaCfhxxekaxcbaiRbbgOEgzaoc;:eSgHfhraOcsGhCaOcl4hAdndnaOcs0mbarcefhoxekarhoavawaA9RcsGcdtfydbhrkdndnaCmbaocefhxxekaohxavawaO9RcsGcdtfydbhokdndnaHTmbaicefhHxekaicdfhHai8SbegscFeGhzdnascu9kmbaicofhXazcFbGhzcrhidninaH8SbbgscFbGaitazVhzascu9kmeaHcefhHaicrfgic8J9hmbkaXhHxekaHcefhHkazce4cbazceG9R7amfgmhzkdndnaAcsSmbaHhsxekaHcefhsaH8SbbgicFeGhrdnaicu9kmbaHcvfhXarcFbGhrcrhidninas8SbbgHcFbGaitarVhraHcu9kmeascefhsaicrfgic8J9hmbkaXhsxekascefhskarce4cbarceG9R7amfgmhrkdndnaCcsSmbashixekascefhias8SbbgocFeGhHdnaocu9kmbascvfhXaHcFbGhHcrhodninai8SbbgscFbGaotaHVhHascu9kmeaicefhiaocrfgoc8J9hmbkaXhixekaicefhikaHce4cbaHceG9R7amfgmhokdndnadcd9hmbabaPcetfgHaz87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHazBdbaHcwfaoBdbaHclfarBdbkcdhsavawcdtfazBdbavawcefgwcsGcdtfarBdbcihHavc;abfalcitfgXazBdlaXarBdbavawaOcz6aAcsSVfgwcsGcdtfaoBdbawaCTaCcsSVfhwalcefcsGhOkaqcefhqavc;abfaOcitfgOarBdlaOaoBdbavc;abfalasfcsGcitfgraoBdlarazBdbawcsGhwalaHfcsGhlaPcifgPae6mbkkcbc99aiaDSEhokavc;aef8Kjjjjbaok:flevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaic8Etc8F91aicd47avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaic8Etc8F91aicd47avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:wPliuo97eue978Jjjjjbca9Rhiaec98Ghldndnadcl9hmbdnalTmbcbhvabhdinadadpbbbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbadczfhdavclfgval6mbkkalaeSmeaipxbbbbbbbbbbbbbbbbgqpklbaiabalcdtfgdaeciGglcdtgv;8qbbdnalTmbaiaipblbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDaqp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpklbkadaiav;8qbbskdnalTmbcbhvabhdinadczfgxaxpbbbgopxbbbbbbFFbbbbbbFFgkp9oadpbbbgDaopmbediwDqkzHOAKY8AEgwczp:Reczp:Sep;6egraDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eawczp:Sep;6egwp;Gearp;Gep;Kep;Legopxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegrpxb;:FSb;:FSb;:FSb;:FSararp;Meaoaop;Meawaqawamp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFFbbFFbbFFbbFFbbp9oaoawp;Meaqp;Keczp:Rep9qgoarawp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogrpmwDKYqk8AExm35Ps8E8Fp9qpkbbadaDakp9oaoarpmbezHdiOAlvCXorQLp9qpkbbadcafhdavclfgval6mbkkalaeSmbaiaeciGgvcitgdfcbcaad9R;8kbaiabalcitfglad;8qbbdnavTmbaiaipblzgopxbbbbbbFFbbbbbbFFgkp9oaipblbgDaopmbediwDqkzHOAKY8AEgwczp:Reczp:Sep;6egraDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eawczp:Sep;6egwp;Gearp;Gep;Kep;Legopxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegrpxb;:FSb;:FSb;:FSb;:FSararp;Meaoaop;Meawaqawamp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFFbbFFbbFFbbFFbbp9oaoawp;Meaqp;Keczp:Rep9qgoarawp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogrpmwDKYqk8AExm35Ps8E8Fp9qpklzaiaDakp9oaoarpmbezHdiOAlvCXorQLp9qpklbkalaiad;8qbbkk;4wllue97euv978Jjjjjbc8W9Rhidnaec98GglTmbcbhvabhoinaiaopbbbgraoczfgwpbbbgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklbaopxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaDakp;Mearp;Keamp9oaqakp;Mearp;Keczp:Rep9qgkpmbezHdiOAlvCXorQLgrp5baipblbpEb:T:j83ibaocwfarp5eaipblbpEe:T:j83ibawaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblbpEd:T:j83ibaocKfakp5eaipblbpEi:T:j83ibaocafhoavclfgval6mbkkdnalaeSmbaiaeciGgvcitgofcbcaao9R;8kbaiabalcitfgwao;8qbbdnavTmbaiaipblbgraipblzgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklaaipxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaDakp;Mearp;Keamp9oaqakp;Mearp;Keczp:Rep9qgkpmbezHdiOAlvCXorQLgrp5baipblapEb:T:j83ibaiarp5eaipblapEe:T:j83iwaiaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblapEd:T:j83izaiakp5eaipblapEi:T:j83iKkawaiao;8qbbkk:Pddiue978Jjjjjbc;ab9Rhidnadcd4ae2glc98GgvTmbcbheabhdinadadpbbbgocwp:Recwp:Sep;6eaocep:SepxbbjFbbjFbbjFbbjFp9opxbbjZbbjZbbjZbbjZp:Uep;Mepkbbadczfhdaeclfgeav6mbkkdnavalSmbaialciGgecdtgdVcbc;abad9R;8kbaiabavcdtfgvad;8qbbdnaeTmbaiaipblbgocwp:Recwp:Sep;6eaocep:SepxbbjFbbjFbbjFbbjFp9opxbbjZbbjZbbjZbbjZp:Uep;Mepklbkavaiad;8qbbkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkkebcjwklz:Dbb",t=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,3,2,0,0,5,3,1,0,1,12,1,0,10,22,2,12,0,65,0,65,0,65,0,252,10,0,0,11,7,0,65,0,253,15,26,11]),n=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!="object")return{supported:!1};var i=WebAssembly.validate(t)?o(e):o(s),r,a=WebAssembly.instantiate(i,{}).then(function(p){r=p.instance,r.exports.__wasm_call_ctors()});function o(p){for(var v=new Uint8Array(p.length),x=0;x<p.length;++x){var _=p.charCodeAt(x);v[x]=_>96?_-97:_>64?_-39:_+4}for(var T=0,x=0;x<p.length;++x)v[T++]=v[x]<60?n[v[x]]:(v[x]-60)*64+v[++x];return v.buffer.slice(0,T)}function c(p,v,x,_,T,w,C){var I=p.exports.sbrk,S=_+3&-4,y=I(S*T),P=I(w.length),O=new Uint8Array(p.exports.memory.buffer);O.set(w,P);var z=v(y,_,T,P,w.length);if(z==0&&C&&C(y,S,T),x.set(O.subarray(y,y+_*T)),I(y-I(0)),z!=0)throw new Error("Malformed buffer data: "+z)}var l={NONE:"",OCTAHEDRAL:"meshopt_decodeFilterOct",QUATERNION:"meshopt_decodeFilterQuat",EXPONENTIAL:"meshopt_decodeFilterExp"},h={ATTRIBUTES:"meshopt_decodeVertexBuffer",TRIANGLES:"meshopt_decodeIndexBuffer",INDICES:"meshopt_decodeIndexSequence"},u=[],d=0;function f(p){var v={object:new Worker(p),pending:0,requests:{}};return v.object.onmessage=function(x){var _=x.data;v.pending-=_.count,v.requests[_.id][_.action](_.value),delete v.requests[_.id]},v}function g(p){for(var v="self.ready = WebAssembly.instantiate(new Uint8Array(["+new Uint8Array(i)+"]), {}).then(function(result) { result.instance.exports.__wasm_call_ctors(); return result.instance; });self.onmessage = "+m.name+";"+c.toString()+m.toString(),x=new Blob([v],{type:"text/javascript"}),_=URL.createObjectURL(x),T=u.length;T<p;++T)u[T]=f(_);for(var T=p;T<u.length;++T)u[T].object.postMessage({});u.length=p,URL.revokeObjectURL(_)}function b(p,v,x,_,T){for(var w=u[0],C=1;C<u.length;++C)u[C].pending<w.pending&&(w=u[C]);return new Promise(function(I,S){var y=new Uint8Array(x),P=++d;w.pending+=p,w.requests[P]={resolve:I,reject:S},w.object.postMessage({id:P,count:p,size:v,source:y,mode:_,filter:T},[y.buffer])})}function m(p){var v=p.data;if(!v.id)return self.close();self.ready.then(function(x){try{var _=new Uint8Array(v.count*v.size);c(x,x.exports[v.mode],_,v.count,v.size,v.source,x.exports[v.filter]),self.postMessage({id:v.id,count:v.count,action:"resolve",value:_},[_.buffer])}catch(T){self.postMessage({id:v.id,count:v.count,action:"reject",value:T})}})}return{ready:a,supported:!0,useWorkers:function(p){g(p)},decodeVertexBuffer:function(p,v,x,_,T){c(r,r.exports.meshopt_decodeVertexBuffer,p,v,x,_,r.exports[l[T]])},decodeIndexBuffer:function(p,v,x,_){c(r,r.exports.meshopt_decodeIndexBuffer,p,v,x,_)},decodeIndexSequence:function(p,v,x,_){c(r,r.exports.meshopt_decodeIndexSequence,p,v,x,_)},decodeGltfBuffer:function(p,v,x,_,T,w){c(r,r.exports[h[T]],p,v,x,_,r.exports[l[w]])},decodeGltfBufferAsync:function(p,v,x,_,T){return u.length>0?b(p,v,x,h[_],l[T]):a.then(function(){var w=new Uint8Array(p*v);return c(r,r.exports[h[_]],w,p,v,x,r.exports[l[T]]),w})}}})();var He=document.querySelector("#mp-district"),ni=matchMedia("(max-width: 767px)"),Zs=matchMedia("(prefers-reduced-motion: reduce)"),ea=new URL("./town/",import.meta.url);if(He){let s=!1,e=()=>{s||(s=!0,cx().catch(n=>{He.dataset.ready="fallback";let i=He.querySelector(".mp-district-status");i.dataset.i18n="phone.3d.still",i.textContent=window.MakanI18n?.t("phone.3d.still")||"Still survey preview",console.warn("Scan preview unavailable:",n.message)}))};new IntersectionObserver(n=>{n[0].isIntersecting&&e()},{rootMargin:"900px"}).observe(He),ni.addEventListener("change",()=>{He.getBoundingClientRect().top<innerHeight+150&&e()})}async function cx(){let s=new kc({alpha:!0,antialias:!0,powerPreference:"low-power"});s.setPixelRatio(Math.min(devicePixelRatio,1.5)),s.outputColorSpace=gt,s.setClearColor(0,0);let e=new Hc().setMeshoptDecoder(Gc),t=performance.now(),[n,i]=await Promise.all([e.loadAsync(new URL("scene.glb",ea).href),new gi().loadAsync(new URL("color-preview.webp",ea).href)]);i.flipY=!0,i.colorSpace=gt,i.anisotropy=Math.min(4,s.capabilities.getMaxAnisotropy());let r=new Ts,a=new _t;r.add(a);let o=n.scene;a.add(o),o.updateMatrixWorld(!0);let c;o.traverse(N=>{N.isMesh&&(N.material=new Xt({map:i}),c=N)});let l=new _t,h=new _t,u=new _t;a.add(l,h,u);let d=Object.fromEntries(["buildings","green","trees","streets","power"].map(N=>[N,new _t]));Object.values(d).forEach(N=>h.add(N));let f=new _t,g=new _t,b=new _t,m=new _t;u.add(f,g,b,m);let p=Object.fromEntries(["retail","access","investment","cars"].map(N=>[N,new _t]));Object.values(p).forEach(N=>a.add(N));let v={overlays:l,...d,construction:f,poolChange:g,canopyLoss:b,roadChange:m,...p},x=new yt(38,1,.1,100),_=new R,T=new R,w=!1;He.prepend(s.domElement),s.domElement.setAttribute("aria-hidden","true");let C=He.querySelector(".mp-district-status"),I=He.parentElement.querySelector(".mp-district-time");I.hidden=!0;let S=document.createElement("button");S.type="button",S.className="mp-district-reset",S.textContent="\u21BA",S.setAttribute("aria-label","Reset 3D view"),He.append(S),S.addEventListener("click",()=>{w=!0,ve=-.14,Ge=1,T.set(0,0,0),E()});let y=document.createElement("div");y.className="mp-agent-chat",y.hidden=!0,y.innerHTML='<div class="mp-agent-chat-label"></div><div class="mp-agent-question"></div><div class="mp-agent-answer"><strong>Makan</strong><p></p><small class="mp-agent-evidence"></small></div>',He.append(y);let P=document.createElement("div");P.className="mp-scene-benefit",P.hidden=!0,He.append(P);let O=document.createElement("div");O.className="mp-scene-messages";let z=()=>{ni.matches?(He.append(y,P),O.remove()):(He.parentElement.append(O),O.append(y,P))};z(),ni.addEventListener("change",z);let q={2:[["Layers connected","Buildings, roads & greenery."],["\u0627\u0644\u0635\u0648\u0631\u0629 \u0643\u0627\u0645\u0644\u0629","\u0645\u0628\u0627\u0646\u064A\u060C \u0637\u0631\u0642 \u0648\u0645\u0633\u0627\u062D\u0627\u062A \u062E\u0636\u0631\u0627\u0621."]],3:[["Discovery alerts","New signals, sent to you."],["\u0627\u0643\u062A\u0634\u0627\u0641\u0627\u062A \u062A\u0648\u0635\u0644\u0643","\u0627\u0644\u062C\u062F\u064A\u062F \u0641\u064A \u0645\u0648\u0642\u0639\u0643\u060C \u0623\u0648\u0644 \u0628\u0623\u0648\u0644."]],4:[["Change updates","See what changed at your site."],["\u062A\u0627\u0628\u0639 \u0627\u0644\u062A\u063A\u064A\u0651\u0631","\u0627\u0639\u0631\u0641 \u0648\u0634 \u062A\u063A\u064A\u0651\u0631 \u0641\u064A \u0645\u0648\u0642\u0639\u0643."]]};function K(){let N=q[j]?.[document.documentElement.lang==="ar"?1:0];if(P.hidden=!N,N){P.replaceChildren();let k=document.createElement("span");k.className="mp-benefit-icon",k.innerHTML=j===3?'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M10 21h4"/></svg>':j===2?'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3 9 5-9 5-9-5 9-5ZM3 12l9 5 9-5M3 16l9 5 9-5"/></svg>':'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M12 3v18M6 14h3V9H6v5ZM15 14h3V8h-3v6Z"/></svg>',k.setAttribute("aria-hidden","true");let J=document.createElement("div"),be=document.createElement("strong"),he=document.createElement("p");be.textContent=N[0],he.textContent=N[1],J.append(be,he),P.append(k,J)}}let X=[{q:["Where should I open a supermarket?","\u0648\u064A\u0646 \u0623\u0641\u062A\u062D \u0633\u0648\u0628\u0631\u0645\u0627\u0631\u0643\u062A\u061F"],a:["Corner property \xB7 road access.","\u0639\u0642\u0627\u0631 \u0627\u0644\u0632\u0627\u0648\u064A\u0629 \xB7 \u0648\u0635\u0648\u0644 \u0623\u0633\u0647\u0644."],focus:"retail"},{q:["What could obstruct access?","\u0641\u064A\u0647 \u0639\u0648\u0627\u0626\u0642 \u0628\u0627\u0644\u0637\u0631\u064A\u0642\u061F"],a:["Parked cars near the turn \xB7 check clearance.","\u0646\u0642\u0637\u062A\u0627 \u0627\u062E\u062A\u0646\u0627\u0642 \xB7 \u0631\u0627\u062C\u0639 \u0627\u0644\u0637\u0631\u064A\u0642."],focus:"access"},{q:["Which home is the best investment?","\u0623\u064A \u0628\u064A\u062A \u0623\u0641\u0636\u0644 \u0644\u0644\u0627\u0633\u062A\u062B\u0645\u0627\u0631\u061F"],a:["This home \xB7 access + greenery.","\u0647\u0630\u0627 \u0627\u0644\u0628\u064A\u062A \xB7 \u0645\u0648\u0642\u0639 \u0648\u062E\u0636\u0631\u0629."],focus:"investment"},{q:["How many cars can you identify?","\u0643\u0645 \u0633\u064A\u0627\u0631\u0629 \u0641\u064A \u0627\u0644\u062D\u064A\u061F"],a:["31 visible cars marked.","24 \u0633\u064A\u0627\u0631\u0629 \xB7 4 \u0645\u0642\u0627\u0637\u0639 \u0637\u0631\u0642."],focus:"cars"}],ae=0,W=0,me=0;function xe(){clearTimeout(W),clearTimeout(me),y.classList.remove("is-typing")}function Te(N){let k=X[ae].focus;He.dataset.agentFocus=N?k:"pending";let J=p[k];if(!w&&(T.set(0,0,0),ni.matches||(Ge=1),N&&J.children.some(be=>be.children.length))){J.updateWorldMatrix(!0,!0);let be=new Mt().setFromObject(J),he=be.getCenter(new R);a.worldToLocal(he);let de=ni.matches?.45:.85;T.set(he.x*de,0,he.z*de),ni.matches||(Ge=k==="cars"?1.3:1.85)}it=performance.now(),Q.forEach(be=>{be.target=N&&be.group===J?1:0,be.delay=0}),E()}function Ve(N=!1){xe();let k=document.documentElement.lang==="ar"?1:0,J=X[ae],be=y.querySelector(".mp-agent-question"),he=y.querySelector(".mp-agent-answer p");if(y.querySelector(".mp-agent-answer strong").textContent=k?"\u0645\u0643\u0627\u0646":"Makan",y.setAttribute("aria-label",k?"\u0645\u062D\u0627\u062F\u062B\u0629 \u062A\u0648\u0636\u064A\u062D\u064A\u0629 \u0628\u0628\u064A\u0627\u0646\u0627\u062A \u062A\u062C\u0631\u064A\u0628\u064A\u0629":"Illustrative conversation with example data"),be.setAttribute("aria-label",J.q[k]),he.setAttribute("aria-label",J.a[k]),Te(!N),N&&!Zs.matches){be.textContent="",he.textContent="",y.classList.add("is-typing");let de=0,De=J.q[k],D=J.a[k],ne=()=>{de++,be.textContent=De.slice(0,de),he.textContent=D.slice(0,Math.max(0,de-De.length-4)),de===De.length+5&&Te(!0),de<De.length+D.length+4?me=setTimeout(ne,28):(y.classList.remove("is-typing"),W=setTimeout(()=>{ae=(ae+1)%X.length,qe()},11e3))};ne()}else be.textContent=J.q[k],he.textContent=J.a[k]}function qe(){xe(),!(j!==1||!Se||document.hidden)&&Ve(!Zs.matches)}let Qe=1,Ge=1,j=0,ee=-.14,ve=-.14,Ae=0,Se=!1,Ke=0,it=0,L=[["A place, ready to understand","\u0643\u0644 \u0645\u0643\u0627\u0646 \u0644\u0647 \u0642\u0635\u0629"],["Ask the map. Follow the evidence.","\u0627\u0633\u0623\u0644 \u0645\u0643\u0627\u0646. \u0648\u0634\u0648\u0641 \u0627\u0644\u062F\u0644\u064A\u0644."],["Buildings \xB7 greenery \xB7 streets \xB7 utilities","\u0627\u0644\u0645\u0628\u0627\u0646\u064A \xB7 \u0627\u0644\u062E\u0636\u0631\u0629 \xB7 \u0627\u0644\u0634\u0648\u0627\u0631\u0639 \xB7 \u0627\u0644\u0645\u0631\u0627\u0641\u0642"],["Discoveries follow the actual roofs","\u0627\u0644\u0627\u0643\u062A\u0634\u0627\u0641\u0627\u062A \u062A\u062A\u0628\u0639 \u0627\u0644\u0623\u0633\u0637\u062D \u0627\u0644\u062D\u0642\u064A\u0642\u064A\u0629"],["Building extension \xB7 pool \xB7 tree cover","\u062A\u0648\u0633\u0651\u0639 \u0645\u0628\u0646\u0649 \xB7 \u0645\u0633\u0628\u062D \xB7 \u0623\u0634\u062C\u0627\u0631"]],Q=[...Object.values(d),l,f,g,b,m,...Object.values(p)].map(N=>{let k=[];return N.traverse(J=>{J.material&&(J.material.transparent=!0,k.push({material:J.material,opacity:J.material.opacity}))}),{group:N,materials:k,value:0,target:0,delay:0}});h.visible=!0,u.visible=!0;function $(){K(),delete C.dataset.i18n,C.textContent=L[j][document.documentElement.lang==="ar"?1:0]}function Z(N){w=!1,T.set(0,0,0),j=N,y.hidden=j!==1,it=performance.now(),He.dataset.mode=String(j),He.parentElement.dataset.scene=String(j),Q.forEach(k=>{let J=Object.values(d).indexOf(k.group);k.target=j===2&&J>=0||j===3&&k.group===l||j===4&&[f,g,b].includes(k.group)?1:0,k.delay=j===2&&J>=0?J*110:0,j===2&&J>=0&&(k.value=0)}),qe(),$(),M()}let ge=Cf.corners.map(N=>new R(...N)),oe="",pe=70;function ke(){let N=He.clientWidth,k=He.clientHeight;if(!N||!k)return;x.aspect=N/k,x.updateProjectionMatrix();let J=_.clone().applyAxisAngle(new R(0,1,0),ee);J.y=.12;let be=[N,k,ee.toFixed(4),J.x.toFixed(4),J.z.toFixed(4)].join("|"),he=pe;if(be!==oe){let de=5;he=70;let De=ge.map(D=>D.clone().applyAxisAngle(new R(0,1,0),ee));for(let D=0;D<13;D++){let ne=(de+he)/2;x.position.set(J.x,ne*.52,J.z+ne*.854),x.lookAt(J),x.updateMatrixWorld(),De.every(Me=>{let le=Me.clone().project(x);return Math.abs(le.x)<.955&&Math.abs(le.y)<.72})?he=ne:de=ne}oe=be,pe=he}x.position.set(J.x,he*.52/Qe,J.z+he*.854/Qe),x.lookAt(J),x.updateMatrixWorld()}function Oe(N){if(Ae=0,!Se||document.hidden)return;let k=Math.min((N-Ke)/1e3||.016,.05);Ke=N;let J=Zs.matches?1:1-Math.exp(-k*9);ee+=(ve-ee)*J,a.rotation.y=ee,Qe+=(Ge-Qe)*J;let be=Math.abs(ve-ee)>.001||Math.abs(Ge-Qe)>.001;_.lerp(T,Zs.matches?1:1-Math.exp(-k*3.5)),be||(be=_.distanceToSquared(T)>1e-6),Q.forEach(he=>{let de=!Zs.matches&&N-it<he.delay?0:he.target;he.value+=(de-he.value)*J,he.group.visible=he.value>.003,he.materials.forEach(({material:De,opacity:D})=>De.opacity=D*he.value),be||(be=Math.abs(he.target-he.value)>.003)}),ke(),s.render(r,x),be&&E()}function E(){!Ae&&Se&&!document.hidden&&(Ae=requestAnimationFrame(Oe))}function M(){let N=He.clientWidth,k=He.clientHeight;N&&k&&(s.setSize(N,k,!1),ke(),E())}document.querySelectorAll("[data-scene-select]").forEach(N=>N.addEventListener("click",()=>Z(Number(N.dataset.sceneSelect))));let U=null,H=null,se=N=>Math.max(1,Math.min(4,N));function Y(N){w=!0,Ge=se(N),E()}let Re=N=>({x:(N[0].clientX+N[1].clientX)/2,y:(N[0].clientY+N[1].clientY)/2}),fe=N=>Math.hypot(N[0].clientX-N[1].clientX,N[0].clientY-N[1].clientY);He.addEventListener("wheel",N=>{if(!Se||ni.matches&&!N.ctrlKey)return;let k=N.deltaY*(N.deltaMode===1?16:N.deltaMode===2?He.clientHeight:1),J=se(Ge*Math.exp(-k*.0015));if(J===Ge){ni.matches||N.preventDefault();return}N.preventDefault(),Y(J)},{passive:!1}),He.addEventListener("touchstart",N=>{N.touches.length===2&&(U=null,H={distance:Math.max(1,fe(N.touches)),zoom:Ge,center:Re(N.touches),focus:T.clone()},N.preventDefault())},{passive:!1}),He.addEventListener("touchmove",N=>{if(!H||N.touches.length!==2)return;N.preventDefault(),Y(H.zoom*fe(N.touches)/H.distance);let k=Re(N.touches),J=2*x.position.distanceTo(_)*Math.tan(Wi.degToRad(x.fov/2))/He.clientHeight,be=new R(-(k.x-H.center.x)*J,0,-(k.y-H.center.y)*J).applyAxisAngle(new R(0,1,0),-ee);T.copy(H.focus).add(be),T.x=Wi.clamp(T.x,-6,6),T.z=Wi.clamp(T.z,-6,6)},{passive:!1}),["touchend","touchcancel"].forEach(N=>He.addEventListener(N,()=>{H=null,U=null},{passive:!0})),He.setAttribute("tabindex","0"),He.setAttribute("aria-label","Interactive 3D scan. Pinch to zoom and move two fingers to pan. Drag sideways to rotate. Keyboard: plus or minus to zoom, zero to reset, arrow keys to rotate."),He.addEventListener("pointerdown",N=>{H||!N.isPrimary||N.target.closest("button")||(U={x:N.clientX,y:N.clientY,rotation:ve,dragging:!1})}),He.addEventListener("pointermove",N=>{if(!U||H)return;let k=N.clientX-U.x,J=N.clientY-U.y;if(!U.dragging){if(Math.abs(J)>Math.abs(k)+6){U=null;return}if(Math.abs(k)<8)return;U.dragging=!0,He.setPointerCapture(N.pointerId)}w=!0,T.copy(_),ve=U.rotation+(N.clientX-U.x)*.006,E()}),["pointerup","pointercancel","pointerleave"].forEach(N=>He.addEventListener(N,()=>U=null)),He.addEventListener("keydown",N=>{if(["+","=","-","0"].includes(N.key)){N.preventDefault(),N.key==="0"&&(ve=-.14,T.set(0,0,0)),Y(N.key==="0"?1:Ge*(N.key==="-"?1/1.2:1.2));return}["ArrowLeft","ArrowRight"].includes(N.key)&&(N.preventDefault(),ve=ve+(N.key==="ArrowLeft"?-.15:.15),E())}),new ResizeObserver(M).observe(He),new IntersectionObserver(N=>{Se=N[0].isIntersecting,Se?E():(cancelAnimationFrame(Ae),Ae=0),qe()},{threshold:.2}).observe(He),document.addEventListener("visibilitychange",()=>{document.hidden?(cancelAnimationFrame(Ae),Ae=0):E(),qe()}),ni.addEventListener("change",()=>{E(),qe()}),Zs.addEventListener("change",()=>{$(),qe(),E()}),document.addEventListener("makan:lang-changed",()=>{$(),qe()}),s.domElement.addEventListener("webglcontextlost",N=>{N.preventDefault(),cancelAnimationFrame(Ae),Ae=0,xe(),He.dataset.ready="fallback"}),Z(Number(He.parentElement.dataset.scene||1)),M(),s.render(r,x),He.dataset.ready="true",He.dataset.startupMs=String(Math.round(performance.now()-t)),requestAnimationFrame(()=>{new gi().load(new URL("color-phone.webp",ea).href,N=>{N.flipY=!0,N.colorSpace=gt,N.anisotropy=i.anisotropy,o.traverse(k=>{k.isMesh&&(k.material.map=N,k.material.needsUpdate=!0)}),i.dispose(),E()},void 0,()=>{})}),requestAnimationFrame(()=>Ce().catch(N=>{He.dataset.overlays="fallback",console.warn("Scene overlays unavailable:",He.dataset.overlayStage,N.message)}));async function Ce(){He.dataset.overlayStage="manifest";let N=await fetch(new URL("overlays.json",ea));if(!N.ok)throw new Error("Overlay manifest unavailable");let k=await N.json();He.dataset.overlayStage="geometry";let J=await fetch(new URL(k.compressedBuffer,ea));if(!J.ok)throw new Error("Overlay geometry unavailable");He.dataset.overlayStage="decode";let be=new Uint8Array(await J.arrayBuffer());await Gc.ready;let he=new Uint8Array(k.byteLength);Gc.decodeGltfBuffer(he,k.byteLength/k.stride,k.stride,be,"ATTRIBUTES");let de=he.buffer,De={Float32Array,Uint32Array,Uint16Array,Uint8Array,Int16Array,Int32Array};for(let ne of k.scene.geometries)if(ne.data)for(let ce of Object.values(ne.data.attributes||{}).concat(ne.data.index?[ne.data.index]:[]))ce.byteOffset!==void 0&&(ce.array=new De[ce.type](de,ce.byteOffset,ce.length),delete ce.byteOffset,delete ce.length);He.dataset.overlayStage="parse";let D=new zr().parse(k.scene);for(let[ne,ce]of Object.entries(v)){let Me=D.getObjectByName(ne);Me&&ce.add(Me)}Q.forEach(ne=>{ne.materials.length=0,ne.group.traverse(ce=>{ce.material&&(ce.material.transparent=!0,ne.materials.push({material:ce.material,opacity:ce.material.opacity}))})}),He.dataset.overlays="ready",Z(j),E()}}
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2025 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
