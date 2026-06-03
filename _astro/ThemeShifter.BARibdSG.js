import{r as d}from"./index.CVf8TyFT.js";var m={exports:{}},s={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var l=d,i=Symbol.for("react.element"),f=Symbol.for("react.fragment"),p=Object.prototype.hasOwnProperty,_=l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,h={key:!0,ref:!0,__self:!0,__source:!0};function u(r,t,o){var e,n={},a=null,c=null;o!==void 0&&(a=""+o),t.key!==void 0&&(a=""+t.key),t.ref!==void 0&&(c=t.ref);for(e in t)p.call(t,e)&&!h.hasOwnProperty(e)&&(n[e]=t[e]);if(r&&r.defaultProps)for(e in t=r.defaultProps,t)n[e]===void 0&&(n[e]=t[e]);return{$$typeof:i,type:r,key:a,ref:c,props:n,_owner:_.current}}s.Fragment=f;s.jsx=u;s.jsxs=u;m.exports=s;var k=m.exports;const y=()=>{const[r,t]=d.useState(()=>{if(typeof window<"u"){const e=localStorage.getItem("theme");return e||(window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light")}});d.useEffect(()=>{r==="dark"?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")},[r]);const o=()=>{document.documentElement.classList.toggle("dark");const e=document.documentElement.classList.contains("dark")?"dark":"light";localStorage.setItem("theme",e),t(e)};return k.jsx("button",{className:"p-1 bg-gray-900 dark:bg-gray-200 rounded shadow",onClick:o,children:r==="dark"?"☀️":"🌙"})};export{y as ThemeShifter};
