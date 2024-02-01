// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import{isPrimitive as t}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string@v0.1.1-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@v0.1.1-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@v0.1.1-esm/index.mjs";function s(s,n){if(!t(s))throw new TypeError(e("invalid argument. First argument must be a string. Value: `%s`.",s));if(arguments.length>1&&!r(n))throw new TypeError(e("invalid argument. Reviver argument must be a function. Value: `%s`.",n));try{return JSON.parse(s,n)}catch(t){return t}}export{s as default};
//# sourceMappingURL=index.mjs.map
