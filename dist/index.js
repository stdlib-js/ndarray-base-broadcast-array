"use strict";var m=function(a,r){return function(){return r||a((r={exports:{}}).exports,r),r.exports}};var f=m(function(w,c){
var y=require('@stdlib/ndarray-base-ctor/dist'),v=require('@stdlib/error-tools-fmtprodmsg/dist'),t=require('@stdlib/array-base-copy-indexed/dist');function l(a,r){var i,o,s,u,n,p,d,e,h;if(n=r.length,s=a.shape,p=s.length,n<p)throw new Error(format('0i50Z'));for(i=[],e=0;e<n;e++)i.push(0);for(u=a.strides,e=n-1;e>=0;e--)if(h=p-n+e,!(h<0)){if(d=s[h],o=r[e],o!==0&&o<d)throw new Error(v('0i55F',t(s).join(", "),t(r).join(", "),e));if(d===o)i[e]=u[h];else if(d===1)i[e]=0;else throw new Error(v('0i55G',t(s).join(", "),t(r).join(", "),e))}return y(a.dtype,a.data,t(r),i,a.offset,a.order)}c.exports=l
});var b=f();module.exports=b;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
