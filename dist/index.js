"use strict";var o=function(r,i){return function(){try{return i||r((i={exports:{}}).exports,i),i.exports}catch(m){throw i=0,m}}};var a=o(function(g,u){"use strict";function y(){return String(this.value)}u.exports=y});var s=o(function(F,n){"use strict";function E(){var r={};return r.type="Float16",r.value=this.value,r}n.exports=E});var l=o(function(R,v){"use strict";function S(){return this.value}v.exports=S});var f=o(function(_,c){"use strict";var h=require("@stdlib/assert-is-number").isPrimitive,q=require("@stdlib/utils-define-read-only-property"),e=require("@stdlib/utils-define-nonenumerable-read-only-property"),T=require("@stdlib/number-float64-base-to-float16"),O=require("@stdlib/string-format"),d=require("@stdlib/assert-has-to-primitive-symbol-support"),w=require("@stdlib/symbol-to-primitive"),b=a(),N=s(),p=l();function t(r){if(!(this instanceof t))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!h(r))throw new TypeError(O("invalid argument. Must provide a number. Value: `%s`.",r));return q(this,"value",T(r)),this}e(t,"name","Float16");e(t,"BYTES_PER_ELEMENT",2);e(t.prototype,"BYTES_PER_ELEMENT",2);e(t.prototype,"toString",b);e(t.prototype,"toJSON",N);e(t.prototype,"valueOf",p);d()&&e(t.prototype,w,p);c.exports=t});var x=f();module.exports=x;
/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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
