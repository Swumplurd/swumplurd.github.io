import{r as d}from"./index.DhYZZe0J.js";var m={exports:{}},s={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var l=d,u=Symbol.for("react.element"),f=Symbol.for("react.fragment"),p=Object.prototype.hasOwnProperty,h=l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,_={key:!0,ref:!0,__self:!0,__source:!0};function i(o,t,n){var e,r={},a=null,c=null;n!==void 0&&(a=""+n),t.key!==void 0&&(a=""+t.key),t.ref!==void 0&&(c=t.ref);for(e in t)p.call(t,e)&&!_.hasOwnProperty(e)&&(r[e]=t[e]);if(o&&o.defaultProps)for(e in t=o.defaultProps,t)r[e]===void 0&&(r[e]=t[e]);return{$$typeof:u,type:o,key:a,ref:c,props:r,_owner:h.current}}s.Fragment=f;s.jsx=i;s.jsxs=i;m.exports=s;var k=m.exports;const g=()=>{const[o,t]=d.useState("");d.useEffect(()=>{if(typeof window<"u"){const e=typeof window<"u"&&window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches,r=localStorage.getItem("theme")||(e?"dark":"light");t(r),r==="dark"&&document.documentElement.classList.add("dark")}},[]);const n=()=>{document.documentElement.classList.toggle("dark");const e=document.documentElement.classList.contains("dark")?"dark":"light";localStorage.setItem("theme",e),t(e)};return k.jsx("button",{className:"p-1 bg-gray-900 dark:bg-gray-200 rounded shadow",onClick:n,children:o==="dark"?"☀️":"🌙"})};export{g as ThemeShifter};
