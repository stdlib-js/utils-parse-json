// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@esm/index.mjs";var s=t.isPrimitive,i=r,n=e;var m=function(t,r){if(!s(t))throw new TypeError(n("invalid argument. First argument must be a string. Value: `%s`.",t));if(arguments.length>1&&!i(r))throw new TypeError(n("invalid argument. Reviver argument must be a function. Value: `%s`.",r));try{return JSON.parse(t,r)}catch(t){return t}};export{m as default};
//# sourceMappingURL=index.mjs.map
