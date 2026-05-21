// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (
  modules,
  entry,
  mainEntry,
  parcelRequireName,
  externals,
  distDir,
  publicUrl,
  devServer
) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var importMap = previousRequire.i || {};
  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        if (externals[name]) {
          return externals[name];
        }
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        globalObject
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      if (res === false) {
        return {};
      }
      // Synthesize a module to follow re-exports.
      if (Array.isArray(res)) {
        var m = {__esModule: true};
        res.forEach(function (v) {
          var key = v[0];
          var id = v[1];
          var exp = v[2] || v[0];
          var x = newRequire(id);
          if (key === '*') {
            Object.keys(x).forEach(function (key) {
              if (
                key === 'default' ||
                key === '__esModule' ||
                Object.prototype.hasOwnProperty.call(m, key)
              ) {
                return;
              }

              Object.defineProperty(m, key, {
                enumerable: true,
                get: function () {
                  return x[key];
                },
              });
            });
          } else if (exp === '*') {
            Object.defineProperty(m, key, {
              enumerable: true,
              value: x,
            });
          } else {
            Object.defineProperty(m, key, {
              enumerable: true,
              get: function () {
                if (exp === 'default') {
                  return x.__esModule ? x.default : x;
                }
                return x[exp];
              },
            });
          }
        });
        return m;
      }
      return newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.require = nodeRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.distDir = distDir;
  newRequire.publicUrl = publicUrl;
  newRequire.devServer = devServer;
  newRequire.i = importMap;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  // Only insert newRequire.load when it is actually used.
  // The code in this file is linted against ES5, so dynamic import is not allowed.
  // INSERT_LOAD_HERE

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });
    }
  }
})({"15Ryi":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SERVER_PORT = 8080;
var HMR_SECURE = false;
var HMR_ENV_HASH = "439701173a9199ea";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "1d23b73e4841ef46";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_SERVER_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_SERVER_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , disposedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ , bundleNotFound = false;
function getHostname() {
    return HMR_HOST || (typeof location !== 'undefined' && location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || (typeof location !== 'undefined' ? location.port : HMR_SERVER_PORT);
}
// eslint-disable-next-line no-redeclare
let WebSocket = globalThis.WebSocket;
if (!WebSocket && typeof module.bundle.root === 'function') try {
    // eslint-disable-next-line no-global-assign
    WebSocket = module.bundle.root('ws');
} catch  {
// ignore.
}
var hostname = getHostname();
var port = getPort();
var protocol = HMR_SECURE || typeof location !== 'undefined' && location.protocol === 'https:' && ![
    'localhost',
    '127.0.0.1',
    '0.0.0.0'
].includes(hostname) ? 'wss' : 'ws';
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if (!parent || !parent.isParcelRequire) {
    // Web extension context
    var extCtx = typeof browser === 'undefined' ? typeof chrome === 'undefined' ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes('test.js');
    }
    var ws;
    if (HMR_USE_SSE) ws = new EventSource('/__parcel_hmr');
    else try {
        // If we're running in the dev server's node runner, listen for messages on the parent port.
        let { workerData, parentPort } = module.bundle.root('node:worker_threads') /*: any*/ ;
        if (workerData !== null && workerData !== void 0 && workerData.__parcel) {
            parentPort.on('message', async (message)=>{
                try {
                    await handleMessage(message);
                    parentPort.postMessage('updated');
                } catch  {
                    parentPort.postMessage('restart');
                }
            });
            // After the bundle has finished running, notify the dev server that the HMR update is complete.
            queueMicrotask(()=>parentPort.postMessage('ready'));
        }
    } catch  {
        if (typeof WebSocket !== 'undefined') try {
            ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
        } catch (err) {
            // Ignore cloudflare workers error.
            if (err.message && !err.message.includes('Disallowed operation called within global scope')) console.error(err.message);
        }
    }
    if (ws) {
        // $FlowFixMe
        ws.onmessage = async function(event /*: {data: string, ...} */ ) {
            var data /*: HMRMessage */  = JSON.parse(event.data);
            await handleMessage(data);
        };
        if (ws instanceof WebSocket) {
            ws.onerror = function(e) {
                if (e.message) console.error(e.message);
            };
            ws.onclose = function() {
                console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
            };
        }
    }
}
async function handleMessage(data /*: HMRMessage */ ) {
    checkedAssets = {} /*: {|[string]: boolean|} */ ;
    disposedAssets = {} /*: {|[string]: boolean|} */ ;
    assetsToAccept = [];
    assetsToDispose = [];
    bundleNotFound = false;
    if (data.type === 'reload') fullReload();
    else if (data.type === 'update') {
        // Remove error overlay if there is one
        if (typeof document !== 'undefined') removeErrorOverlay();
        let assets = data.assets;
        // Handle HMR Update
        let handled = assets.every((asset)=>{
            return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
        });
        // Dispatch a custom event in case a bundle was not found. This might mean
        // an asset on the server changed and we should reload the page. This event
        // gives the client an opportunity to refresh without losing state
        // (e.g. via React Server Components). If e.preventDefault() is not called,
        // we will trigger a full page reload.
        if (handled && bundleNotFound && assets.some((a)=>a.envHash !== HMR_ENV_HASH) && typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') handled = !window.dispatchEvent(new CustomEvent('parcelhmrreload', {
            cancelable: true
        }));
        if (handled) {
            console.clear();
            // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
            if (typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') window.dispatchEvent(new CustomEvent('parcelhmraccept'));
            await hmrApplyUpdates(assets);
            hmrDisposeQueue();
            // Run accept callbacks. This will also re-execute other disposed assets in topological order.
            let processedAssets = {};
            for(let i = 0; i < assetsToAccept.length; i++){
                let id = assetsToAccept[i][1];
                if (!processedAssets[id]) {
                    hmrAccept(assetsToAccept[i][0], id);
                    processedAssets[id] = true;
                }
            }
        } else fullReload();
    }
    if (data.type === 'error') {
        // Log parcel errors to console
        for (let ansiDiagnostic of data.diagnostics.ansi){
            let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
            console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
        }
        if (typeof document !== 'undefined') {
            // Render the fancy html overlay
            removeErrorOverlay();
            var overlay = createErrorOverlay(data.diagnostics.html);
            // $FlowFixMe
            document.body.appendChild(overlay);
        }
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="${protocol === 'wss' ? 'https' : 'http'}://${hostname}:${port}/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, '') : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + '</div>').join('')}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ''}
      </div>
    `;
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if (typeof location !== 'undefined' && 'reload' in location) location.reload();
    else if (typeof extCtx !== 'undefined' && extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
    else try {
        let { workerData, parentPort } = module.bundle.root('node:worker_threads') /*: any*/ ;
        if (workerData !== null && workerData !== void 0 && workerData.__parcel) parentPort.postMessage('restart');
    } catch (err) {
        console.error("[parcel] \u26A0\uFE0F An HMR update was not accepted. Please restart the process.");
    }
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute('href');
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', // $FlowFixMe
    href.split('?')[0] + '?' + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout || typeof document === 'undefined') return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === 'js') {
        if (typeof document !== 'undefined') {
            let script = document.createElement('script');
            script.src = asset.url + '?t=' + Date.now();
            if (asset.outputFormat === 'esmodule') script.type = 'module';
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === 'function') {
            // Worker scripts
            if (asset.outputFormat === 'esmodule') return import(asset.url + '?t=' + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + '?t=' + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != 'undefined' && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        }
        // Always traverse to the parent bundle, even if we already replaced the asset in this bundle.
        // This is required in case modules are duplicated. We need to ensure all instances have the updated code.
        if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    checkedAssets = {};
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else if (a !== null) {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) {
            bundleNotFound = true;
            return true;
        }
        return hmrAcceptCheckOne(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return null;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    if (!cached) return true;
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
    return false;
}
function hmrDisposeQueue() {
    // Dispose all old assets.
    for(let i = 0; i < assetsToDispose.length; i++){
        let id = assetsToDispose[i][1];
        if (!disposedAssets[id]) {
            hmrDispose(assetsToDispose[i][0], id);
            disposedAssets[id] = true;
        }
    }
    assetsToDispose = [];
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        let assetsToAlsoAccept = [];
        cached.hot._acceptCallbacks.forEach(function(cb) {
            let additionalAssets = cb(function() {
                return getParents(module.bundle.root, id);
            });
            if (Array.isArray(additionalAssets) && additionalAssets.length) assetsToAlsoAccept.push(...additionalAssets);
        });
        if (assetsToAlsoAccept.length) {
            let handled = assetsToAlsoAccept.every(function(a) {
                return hmrAcceptCheck(a[0], a[1]);
            });
            if (!handled) return fullReload();
            hmrDisposeQueue();
        }
    }
}

},{}],"3Aj1C":[function(require,module,exports,__globalThis) {
'use strict';
// Uncomment the next lines to use your game instance in the browser
const Game = require("789b00406e138236");
const game = new Game();
const buttonStart = document.querySelector('.button.start');
buttonStart.addEventListener('click', ()=>{
    if (buttonStart.classList.contains('start')) {
        game.start();
        buttonStart.textContent = 'Restart';
        buttonStart.classList.remove('start');
        buttonStart.classList.add('restart');
    } else game.restart();
});

},{"789b00406e138236":"dhlFI"}],"dhlFI":[function(require,module,exports,__globalThis) {
'use strict';
const { default: Cell } = require("b350e63fccbecfb0");
/**
 * This class represents the game.
 * Now it has a basic structure, that is needed for testing.
 * Feel free to add more props and methods if needed.
 */ class Game {
    /**
   * Creates a new game instance.
   *
   * @param {number[][]} initialState
   * The initial state of the board.
   * @default
   * [[0, 0, 0, 0],
   *  [0, 0, 0, 0],
   *  [0, 0, 0, 0],
   *  [0, 0, 0, 0]]
   *
   * If passed, the board will be initialized with the provided
   * initial state.
   */ constructor(initialState = [
        [
            0,
            0,
            0,
            0
        ],
        [
            0,
            0,
            0,
            0
        ],
        [
            0,
            0,
            0,
            0
        ],
        [
            0,
            0,
            0,
            0
        ]
    ]){
        this.gameBoard = document.querySelector('.game-board');
        this.handleKeyDown = (event2)=>{
            switch(event2.code){
                case 'ArrowDown':
                case 'KeyS':
                    this.moveDown();
                    break;
                case 'ArrowUp':
                case 'KeyW':
                    this.moveUp();
                    break;
                case 'ArrowRight':
                case 'KeyD':
                    this.moveRight();
                    break;
                case 'ArrowLeft':
                case 'KeyA':
                    this.moveLeft();
                    break;
                default:
                    break;
            }
        };
        const poinerEvent = ()=>{
            let lastPosition = null;
            this.gameBoard.addEventListener('pointerdown', (event2)=>{
                lastPosition = {
                    x: event2.pageX,
                    y: event2.pageY
                };
            });
            this.gameBoard.addEventListener('pointerup', (event2)=>{
                lastPosition = null;
            });
            this.gameBoard.addEventListener('pointermove', (event2)=>{
                if (this.getStatus() !== 'playing') return;
                if (!lastPosition) return;
                const moveX = event2.pageX - lastPosition.x;
                const moveY = event2.pageY - lastPosition.y;
                if (moveX < -40) {
                    this.moveLeft();
                    lastPosition = null;
                }
                if (moveX > 40) {
                    this.moveRight();
                    lastPosition = null;
                }
                if (moveY > 40) {
                    this.moveDown();
                    lastPosition = null;
                }
                if (moveY < -40) {
                    this.moveUp();
                    lastPosition = null;
                }
            });
        };
        poinerEvent();
        /** @type {'idle' | 'playing' | 'win' | 'lose'} */ this.status = 'idle';
        this.initialState = initialState;
        this.state = Array(this.initialState.length).fill([]).map(()=>{
            return Array(this.initialState[0].length).fill(null);
        });
        this.sizeFiled = {
            y: initialState.length,
            x: initialState[0].length
        };
        this.score = 0;
        this.scoreElement = document.querySelector('.game-score');
        this.cellElements = document.querySelector('.game-board__cells');
        this.setMessage('start');
    }
    setInitialFilds() {
        this.setStatus('playing');
        [
            ...this.cellElements.children
        ].forEach((child)=>{
            child.remove();
        });
        this.state = Array(this.initialState.length).fill([]).map(()=>{
            return Array(this.initialState[0].length).fill(null);
        });
        if (this.initialState.every((row)=>{
            return row.every((cell)=>cell === 0);
        })) {
            this.createRandomCell();
            this.createRandomCell();
            return;
        }
        this.initialState.forEach((row, y)=>{
            row.forEach((cellValue, x)=>{
                if (cellValue === 0) return;
                const newCell = new Cell({
                    y,
                    x
                }, cellValue);
                this.setCell({
                    y,
                    x
                }, newCell);
                this.cellElements.append(this.state[y][x].element);
            });
        });
        if (!this.haveFreeMove()) this.gameOver();
        this.state.forEach((row)=>{
            row.forEach((cell)=>{
                if (cell && cell.value >= 2048) this.win();
            });
        });
    }
    createRandomCell() {
        const emptyFilds = this.getEmptyField();
        if (emptyFilds.length === 0) return;
        const randomPosition = emptyFilds[Math.round(Math.random() * (emptyFilds.length - 1))];
        const randomValue = Math.random() > 0.1 ? 2 : 4;
        const newCell = new Cell(randomPosition, randomValue);
        this.cellElements.append(newCell.element);
        this.setCell(randomPosition, newCell);
    }
    getCell({ x, y }) {
        return this.state[y][x];
    }
    setCell({ x, y }, value) {
        this.state[y][x] = value;
    }
    moveLeft() {
        for(let y = 0; y < this.sizeFiled.y; y++){
            const mergedCells = [];
            for(let x = 0; x < this.sizeFiled.x; x++){
                const currentCell = this.getCell({
                    y,
                    x
                });
                if (!currentCell) continue;
                let nextPositionX = x;
                let mergeCell = null;
                while(nextPositionX > 0){
                    const nextCell = this.getCell({
                        y,
                        x: nextPositionX - 1
                    });
                    if (!nextCell) {
                        nextPositionX--;
                        continue;
                    }
                    if (nextCell.value === currentCell.value && !mergedCells.includes(nextCell)) {
                        nextPositionX--;
                        mergeCell = nextCell;
                    }
                    break;
                }
                if (mergeCell) {
                    this.mergeCells({
                        currentCell,
                        mergeCell,
                        mergedCells
                    });
                    continue;
                }
                if (nextPositionX === x) continue;
                const nextPosition = {
                    y,
                    x: nextPositionX
                };
                this.setCell(currentCell.getPosition(), null);
                this.setCell(nextPosition, currentCell);
                currentCell.setPosition(nextPosition);
            }
        }
        this.createRandomCell();
        if (!this.haveFreeMove()) this.gameOver();
    }
    moveRight() {
        for(let y = 0; y < this.sizeFiled.y; y++){
            const mergedCells = [];
            for(let x = this.sizeFiled.x - 1; x >= 0; x--){
                const currentCell = this.getCell({
                    y,
                    x
                });
                if (!currentCell) continue;
                let nextPositionX = x;
                let mergeCell = null;
                while(nextPositionX < this.sizeFiled.x - 1){
                    const nextCell = this.getCell({
                        y,
                        x: nextPositionX + 1
                    });
                    if (!nextCell) {
                        nextPositionX++;
                        continue;
                    }
                    if (nextCell.value === currentCell.value && !mergedCells.includes(nextCell)) {
                        nextPositionX++;
                        mergeCell = nextCell;
                    }
                    break;
                }
                if (mergeCell) {
                    this.mergeCells({
                        currentCell,
                        mergeCell,
                        mergedCells
                    });
                    continue;
                }
                if (nextPositionX === x) continue;
                const nextPosition = {
                    y,
                    x: nextPositionX
                };
                this.setCell(currentCell.getPosition(), null);
                this.setCell(nextPosition, currentCell);
                currentCell.setPosition(nextPosition);
            }
        }
        this.createRandomCell();
        if (!this.haveFreeMove()) this.gameOver();
    }
    moveUp() {
        for(let x = 0; x < this.sizeFiled.x; x++){
            const mergedCells = [];
            for(let y = 0; y < this.sizeFiled.y; y++){
                const currentCell = this.getCell({
                    y,
                    x
                });
                if (!currentCell) continue;
                let nextPositionX = y;
                let mergeCell = null;
                while(nextPositionX > 0){
                    const nextCell = this.getCell({
                        x,
                        y: nextPositionX - 1
                    });
                    if (!nextCell) {
                        nextPositionX--;
                        continue;
                    }
                    if (nextCell.value === currentCell.value && !mergedCells.includes(nextCell)) {
                        nextPositionX--;
                        mergeCell = nextCell;
                    }
                    break;
                }
                if (mergeCell) {
                    this.mergeCells({
                        currentCell,
                        mergeCell,
                        mergedCells
                    });
                    continue;
                }
                if (nextPositionX === y) continue;
                const nextPosition = {
                    x,
                    y: nextPositionX
                };
                this.setCell(currentCell.getPosition(), null);
                this.setCell(nextPosition, currentCell);
                currentCell.setPosition(nextPosition);
            }
        }
        this.createRandomCell();
        if (!this.haveFreeMove()) this.gameOver();
    }
    moveDown() {
        for(let x = 0; x < this.sizeFiled.x; x++){
            const mergedCells = [];
            for(let y = this.sizeFiled.y - 1; y >= 0; y--){
                const currentCell = this.getCell({
                    y,
                    x
                });
                if (!currentCell) continue;
                let nextPositionX = y;
                let mergeCell = null;
                while(nextPositionX < this.sizeFiled.y - 1){
                    const nextCell = this.getCell({
                        x,
                        y: nextPositionX + 1
                    });
                    if (!nextCell) {
                        nextPositionX++;
                        continue;
                    }
                    if (nextCell.value === currentCell.value && !mergedCells.includes(nextCell)) {
                        nextPositionX++;
                        mergeCell = nextCell;
                    }
                    break;
                }
                if (mergeCell) {
                    this.mergeCells({
                        currentCell,
                        mergeCell,
                        mergedCells
                    });
                    continue;
                }
                if (nextPositionX === y) continue;
                const nextPosition = {
                    x,
                    y: nextPositionX
                };
                this.setCell(currentCell.getPosition(), null);
                this.setCell(nextPosition, currentCell);
                currentCell.setPosition(nextPosition);
            }
        }
        this.createRandomCell();
        if (!this.haveFreeMove()) this.gameOver();
    }
    mergeCells({ currentCell, mergeCell, mergedCells }) {
        currentCell.element.classList.add('game-board__cell--deactive');
        mergedCells.push(mergeCell);
        mergeCell.setValue(mergeCell.value * 2);
        this.setScore(this.getScore() + mergeCell.value);
        this.setCell(currentCell.getPosition(), null);
        currentCell.setPosition(mergeCell.getPosition());
        if (mergeCell.value * 2 >= 2048) this.win();
        setTimeout(()=>{
            currentCell.element.remove();
        }, 180);
    }
    /**
   * @returns {number}
   */ getScore() {
        return this.score;
    }
    setScore(value) {
        this.scoreElement.textContent = `${value}`;
        this.score = value;
    }
    /**
   * @returns {number[][]}
   */ getState() {
        return this.state.map((row)=>row.map((item)=>item ? item.value : 0));
    }
    /**
   * Returns the current game status.
   *
   * @returns {'idle' | 'playing' | 'win' | 'lose'}
   *
   * `idle` - the game has not started yet (the initial state);
   * `playing` - the game is in progress;
   * `win` - the game is won;
   * `lose` - the game is lost
   */ getStatus() {
        return this.status;
    }
    gameOver() {
        this.setStatus('lose');
        document.removeEventListener('keydown', this.handleKeyDown);
    }
    haveFreeMove() {
        if (this.getEmptyField().length !== 0) return true;
        for(let x = 0; x < this.sizeFiled.x; x++)for(let y = 1; y < this.sizeFiled.y; y++){
            if (this.getCell({
                x,
                y
            }).value === this.getCell({
                x,
                y: y - 1
            }).value) return true;
        }
        for(let y = 0; y < this.sizeFiled.y; y++)for(let x = 1; x < this.sizeFiled.x; x++){
            if (this.getCell({
                x,
                y
            }).value === this.getCell({
                x: x - 1,
                y
            }).value) return true;
        }
    }
    /**
   * @param {'start' | 'lose' | 'win' | null} message
   */ setMessage(message) {
        const messageElements = document.querySelectorAll('.message');
        messageElements.forEach((messageElement)=>{
            if (messageElement.classList.contains(`message-${message}`)) messageElement.classList.remove('hidden');
            else messageElement.classList.add('hidden');
        });
    }
    /**
   * @param {'idle' | 'playing' | 'win' | 'lose'} gameStatus
   */ setStatus(gameStatus) {
        switch(gameStatus){
            case 'playing':
                this.setMessage(null);
                break;
            case 'lose':
                this.setMessage('lose');
                break;
            case 'win':
                this.setMessage('win');
                break;
            default:
                break;
        }
        this.status = gameStatus;
    }
    getEmptyField() {
        const emptyFild = [];
        this.getState().forEach((row, indexY)=>{
            row.forEach((cell, indexX)=>{
                if (!cell) emptyFild.push({
                    y: indexY,
                    x: indexX
                });
            });
        });
        return emptyFild;
    }
    win() {
        this.setStatus('win');
        document.removeEventListener('keydown', this.handleKeyDown);
    }
    /**
   * Starts the game.
   */ start() {
        if (this.getStatus() !== 'idle') return;
        document.addEventListener('keydown', this.handleKeyDown);
        this.setStatus('playing');
        this.setInitialFilds();
    }
    /**
   * Resets the game.
   */ restart() {
        if (this.getStatus() === 'idle') return;
        this.setInitialFilds();
        this.setScore(0);
        document.removeEventListener('keydown', this.handleKeyDown);
        document.addEventListener('keydown', this.handleKeyDown);
    }
}
module.exports = Game;

},{"b350e63fccbecfb0":"5SdlW"}],"5SdlW":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class Cell {
    /**
   * @param {{x: number, y: number}} position
   * @param {number} value
   * */ constructor(position, value){
        this.element = document.createElement('div');
        this.element.classList.add('game-board__cell');
        this.setInitialValue(value);
        this.setPosition(position);
    }
    setValue(value) {
        this.element.classList.remove('game-board__cell--' + this.value);
        this.element.classList.add('game-board__cell--' + value);
        this.element.textContent = value;
        this.value = value;
        this.element.classList.remove('game-board__cell--merge');
        this.element.offsetWidth;
        this.element.classList.add('game-board__cell--merge');
    }
    setInitialValue(value) {
        this.element.classList.remove('game-board__cell--' + this.value);
        this.element.classList.add('game-board__cell--' + value);
        this.element.textContent = value;
        this.value = value;
    }
    /** @param {{x: number, y: number}} position */ setPosition(position) {
        this.element.style.setProperty('--position-x', position.x);
        this.element.style.setProperty('--position-y', position.y);
        this.position = position;
    }
    /** @return {{x: number, y: number}} */ getPosition() {
        return this.position;
    }
}
exports.default = Cell;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"jnFvT":[function(require,module,exports,__globalThis) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}]},["15Ryi","3Aj1C"], "3Aj1C", "parcelRequire7b01", {})

//# sourceMappingURL=js_2048_game.4841ef46.js.map
