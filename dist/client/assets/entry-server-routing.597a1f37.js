import{_ as o,s as u,d,r as p,q as r,h as c,C as _,t as f,j as v,O as y,P as h,M as E,L as C}from"./chunks/8c507362.js";const i={},F={},m={},x={},b=[],L={},P=!0,R=[],w={onBeforeRoute:null},O=null,S=Object.assign({"/pages/about/index.page.vue":()=>o(()=>import("./pages/about/index.page.bf648bbc.js"),["assets/pages/about/index.page.bf648bbc.js","assets/chunks/c27b6911.js","assets/chunks/e91d47fc.js","assets/static/index.page.f1aef519.css"]),"/pages/index/index.page.vue":()=>o(()=>import("./pages/index/index.page.32adce4b.js"),["assets/pages/index/index.page.32adce4b.js","assets/chunks/e91d47fc.js"]),"/renderer/_error.page.vue":()=>o(()=>import("./renderer/error.page.117e2ae9.js"),["assets/renderer/error.page.117e2ae9.js","assets/chunks/e91d47fc.js"])}),z={...S};i[".page"]=z;const A=Object.assign({"/renderer/_default.page.client.ts":()=>o(()=>import("./renderer/default.page.client.0aee59b9.js"),["assets/renderer/default.page.client.0aee59b9.js","assets/chunks/e91d47fc.js","assets/chunks/c27b6911.js","assets/static/default.page.client.7cb1834e.css"])}),I={...A};i[".page.client"]=I;const H=Object.freeze(Object.defineProperty({__proto__:null,invalidator:O,isGeneratedFile:P,neverLoaded:L,pageConfigGlobal:w,pageConfigs:R,pageFilesEager:F,pageFilesExportNamesEager:x,pageFilesExportNamesLazy:m,pageFilesLazy:i,pageFilesList:b},Symbol.toStringTag,{value:"Module"}));u(H);const g=d({withoutHash:!0});async function j(){const e=p();return r(e,{isHydration:!0,isBackwardNavigation:null}),r(e,await B(e._pageId)),T(),e}function T(){const e=d({withoutHash:!0});c(g===e,`URL manipulated before hydration finished (\`${g}\` to \`${e}\`). Ensure the hydration finishes with \`onHydrationEnd()\` before manipulating the URL.`)}async function B(e){const a={},{pageFilesAll:t,pageConfigs:l}=await _(!0);return r(a,{_pageFilesAll:t,_pageConfigs:l}),r(a,await f(t,l,e)),t.filter(n=>n.fileType!==".page.server").forEach(n=>{var s;v(!(!((s=n.fileExports)===null||s===void 0)&&s.onBeforeRender),`\`export { onBeforeRender }\` of ${n.filePath} is loaded in the browser but never executed (because you are using Server-side Routing). In order to reduce the size of you browser-side JavaScript, define \`onBeforeRender()\` in \`.page.server.js\` instead. See https://vite-plugin-ssr.com/onBeforeRender-isomorphic#server-routing`,{showStackTrace:!1,onlyOnce:!0})}),a}y();h(!0);U();async function U(){var e,a;const t=await j();await E(t,!1),C(t,"onHydrationEnd"),await((a=(e=t.exports).onHydrationEnd)===null||a===void 0?void 0:a.call(e,t))}
