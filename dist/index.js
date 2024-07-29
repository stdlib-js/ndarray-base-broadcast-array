"use strict";var m=function(a,r){return function(){return r||a((r={exports:{}}).exports,r),r.exports}};var c=m(function(x,f){"use strict";var t=require("@stdlib/array-base-copy-indexed"),g=require("@stdlib/ndarray-base-ctor"),l=require("@stdlib/ndarray-base-shape"),y=require("@stdlib/ndarray-base-strides"),q=require("@stdlib/ndarray-base-offset"),b=require("@stdlib/ndarray-base-order"),w=require("@stdlib/ndarray-base-dtype"),D=require("@stdlib/ndarray-base-data-buffer"),p=require("@stdlib/string-format");function j(a,r){var i,o,s,v,n,u,d,e,h;if(n=r.length,s=l(a,!1),u=s.length,n<u)throw new Error("invalid argument. Cannot broadcast an array to a shape having fewer dimensions. Arrays can only be broadcasted to shapes having the same or more dimensions.");for(i=[],e=0;e<n;e++)i.push(0);for(v=y(a,!1),e=n-1;e>=0;e--)if(h=u-n+e,!(h<0)){if(d=s[h],o=r[e],o!==0&&o<d)throw new Error(p("invalid argument. Input array cannot be broadcast to the specified shape, as the specified shape has a dimension whose size is less than the size of the corresponding dimension in the input array. Array shape: (%s). Desired shape: (%s). Dimension: %u.",t(s).join(", "),t(r).join(", "),e));if(d===o)i[e]=v[h];else if(d===1)i[e]=0;else throw new Error(p("invalid argument. Input array and the specified shape are broadcast incompatible. Array shape: (%s). Desired shape: (%s). Dimension: %u.",t(s).join(", "),t(r).join(", "),e))}return g(w(a),D(a),t(r),i,q(a),b(a))}f.exports=j});var A=c();module.exports=A;
/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
//# sourceMappingURL=index.js.map
