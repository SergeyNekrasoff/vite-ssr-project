const exportNames = ["render"];
const __vite_glob_3_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  exportNames
}, Symbol.toStringTag, { value: "Module" }));
const pageFilesLazy = {};
const pageFilesEager = {};
const pageFilesExportNamesLazy = {};
const pageFilesExportNamesEager = {};
const pageFilesList = [];
const neverLoaded = {};
const isGeneratedFile = true;
const pageConfigs = [];
const pageConfigGlobal = {
  ["onBeforeRoute"]: null,
  ["onPrerenderStart"]: null
};
const invalidator = null;
const pageFilesLazyIsomorph1 = /* @__PURE__ */ Object.assign({ "/pages/about/index.page.vue": () => import("./pages/about/index-page.js"), "/pages/index/index.page.vue": () => import("./pages/index/index-page.js"), "/renderer/_error.page.vue": () => import("./renderer/error-page.js") });
const pageFilesLazyIsomorph = { ...pageFilesLazyIsomorph1 };
pageFilesLazy[".page"] = pageFilesLazyIsomorph;
const pageFilesLazyServer1 = /* @__PURE__ */ Object.assign({ "/renderer/_default.page.server.ts": () => import("./renderer/default-page-server.js") });
const pageFilesLazyServer = { ...pageFilesLazyServer1 };
pageFilesLazy[".page.server"] = pageFilesLazyServer;
const pageFilesEagerRoute1 = /* @__PURE__ */ Object.assign({});
const pageFilesEagerRoute = { ...pageFilesEagerRoute1 };
pageFilesEager[".page.route"] = pageFilesEagerRoute;
const pageFilesExportNamesEagerClient1 = /* @__PURE__ */ Object.assign({ "/renderer/_default.page.client.ts": __vite_glob_3_0 });
const pageFilesExportNamesEagerClient = { ...pageFilesExportNamesEagerClient1 };
pageFilesExportNamesEager[".page.client"] = pageFilesExportNamesEagerClient;
export {
  invalidator,
  isGeneratedFile,
  neverLoaded,
  pageConfigGlobal,
  pageConfigs,
  pageFilesEager,
  pageFilesExportNamesEager,
  pageFilesExportNamesLazy,
  pageFilesLazy,
  pageFilesList
};
