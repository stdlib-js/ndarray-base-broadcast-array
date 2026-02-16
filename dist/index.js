"use strict";var m=function(a,e){return function(){return e||a((e={exports:{}}).exports,e),e.exports}};var f=m(function(x,c){"use strict";var n=require("@stdlib/array-base-copy-indexed"),g=require("@stdlib/ndarray-base-ctor"),l=require("@stdlib/ndarray-base-shape"),y=require("@stdlib/ndarray-base-strides"),q=require("@stdlib/ndarray-base-offset"),b=require("@stdlib/ndarray-base-order"),w=require("@stdlib/ndarray-base-dtype"),D=require("@stdlib/ndarray-base-data-buffer"),j=require("@stdlib/array-base-zeros"),p=require("@stdlib/string-format");function A(a,e){var t,o,i,u,s,h,d,r,v;if(s=e.length,i=l(a,!1),h=i.length,s<h)throw new Error("invalid argument. Cannot broadcast an array to a shape having fewer dimensions. Arrays can only be broadcasted to shapes having the same or more dimensions.");for(t=j(s),u=y(a,!1),r=s-1;r>=0;r--)if(v=h-s+r,!(v<0)){if(d=i[v],o=e[r],o!==0&&o<d)throw new Error(p("invalid argument. Input array cannot be broadcast to the specified shape, as the specified shape has a dimension whose size is less than the size of the corresponding dimension in the input array. Array shape: (%s). Desired shape: (%s). Dimension: %u.",n(i).join(", "),n(e).join(", "),r));if(d===o)t[r]=u[v];else if(d===1)t[r]=0;else throw new Error(p("invalid argument. Input array and the specified shape are broadcast incompatible. Array shape: (%s). Desired shape: (%s). Dimension: %u.",n(i).join(", "),n(e).join(", "),r))}return g(w(a),D(a),n(e),t,q(a),b(a))}c.exports=A});var z=f();module.exports=z;
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
