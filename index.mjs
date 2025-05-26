// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import{isPrimitive as r}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string@v0.2.2-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@v0.2.2-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.2.2-esm/index.mjs";function e(e,i){if(!r(e))throw new TypeError(s("1Wb3F",e));if(arguments.length>1&&!t(i))throw new TypeError(s("1WbBk",i));try{return JSON.parse(e,i)}catch(r){return r}}export{e as default};
//# sourceMappingURL=index.mjs.map
