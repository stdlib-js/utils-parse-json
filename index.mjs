// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import{isPrimitive as r}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@esm/index.mjs";function e(e,i){if(!r(e))throw new TypeError(s("0l93R",e));if(arguments.length>1&&!t(i))throw new TypeError(s("0l9Ca",i));try{return JSON.parse(e,i)}catch(r){return r}}export{e as default};
//# sourceMappingURL=index.mjs.map
