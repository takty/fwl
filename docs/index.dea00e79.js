// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
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

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
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
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

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

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"cz6he":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "2bef0290dea00e79";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
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
var checkedAssets /*: {|[string]: boolean|} */ , disposedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && ![
        'localhost',
        '127.0.0.1',
        '0.0.0.0'
    ].includes(hostname) ? 'wss' : 'ws';
    var ws;
    if (HMR_USE_SSE) ws = new EventSource('/__parcel_hmr');
    else try {
        ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
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
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        disposedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === 'reload') fullReload();
        else if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
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
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
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
    if ('reload' in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
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
    if (cssTimeout) return;
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
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
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
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
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

},{}],"1nEOf":[function(require,module,exports,__globalThis) {
var _fwlEsmJs = require("../../dist/fwl.esm.js");
{
    document.addEventListener('DOMContentLoaded', ()=>{
        main();
    });
    const UNIT = 24;
    let isResizing = false;
    let lastX = 0;
    let lastY = 0;
    const offscreenCanvas = document.createElement('canvas');
    const offscreenCtx = offscreenCanvas.getContext('2d');
    function main() {
        const can = document.createElement('canvas');
        document.body.appendChild(can);
        can.style.border = '1px solid #0005';
        can.width = 400;
        can.height = 560;
        const ctx = can.getContext('2d');
        let fl = initialize();
        let st = 0;
        can.addEventListener('mousemove', (e)=>{
            if (e.offsetX >= can.width - UNIT && e.offsetY >= can.height - UNIT) {
                document.body.style.cursor = 'nw-resize';
                e.stopPropagation();
            } else document.body.style.cursor = '';
        });
        can.addEventListener('mousedown', (e)=>{
            if (e.offsetX >= can.width - UNIT && e.offsetY >= can.height - UNIT) {
                isResizing = true;
                lastX = e.clientX;
                lastY = e.clientY;
            }
        });
        window.addEventListener('mousemove', (event)=>{
            document.body.style.cursor = '';
            if (isResizing) {
                const dX = event.clientX - lastX;
                const dY = event.clientY - lastY;
                can.width = Math.max(400, can.width + dX);
                can.height = Math.max(400, can.height + dY);
                if (offscreenCtx) {
                    ctx?.drawImage(offscreenCanvas, 0, 0);
                    drawResizeSign(can, ctx);
                }
                lastX = event.clientX;
                lastY = event.clientY;
                clearTimeout(st);
                st = setTimeout(()=>{
                    onResize(fl, can, ctx);
                }, 100);
            }
        });
        window.addEventListener('mouseup', ()=>{
            isResizing = false;
        });
        onResize(fl, can, ctx);
    }
    function onResize(fl, can, ctx) {
        ctx.clearRect(0, 0, can.width, can.height);
        ctx.font = '12px san-serif';
        start(fl, can.width, can.height);
        draw(fl, ctx);
        if (offscreenCtx) {
            offscreenCanvas.width = can.width;
            offscreenCanvas.height = can.height;
            offscreenCtx.drawImage(can, 0, 0);
        }
        drawResizeSign(can, ctx);
    }
    // -------------------------------------------------------------------------
    function drawResizeSign(can, ctx) {
        if (ctx) {
            const size = UNIT;
            ctx.fillStyle = 'rgba(0, 0, 0, 0.15)';
            ctx.fillRect(can.width - size, can.height - size, size, size);
            ctx.strokeStyle = 'rgba(0, 0, 0, 0.5)';
            ctx.lineWidth = 2;
            for(let i = 0; i < size; i += 6){
                ctx.beginPath();
                ctx.moveTo(can.width - i, can.height); // 右下の線を引く
                ctx.lineTo(can.width, can.height - i);
                ctx.stroke();
            }
        }
    }
    // -------------------------------------------------------------------------
    function initialize() {
        const fl = new _fwlEsmJs.FlexibleLayout();
        // const cw1 = new Group({ children: [new Action("Button 1"), new Action("Button 2")] });
        const cw2 = new _fwlEsmJs.Group({
            children: [
                new _fwlEsmJs.Caption('Long Caption1', 'Caption1'),
                new _fwlEsmJs.SingleBoolean('OK', 'Cancel')
            ]
        });
        const c3 = new _fwlEsmJs.Single('Checkbox');
        const rbs = new _fwlEsmJs.Single("Item 1", "Item 2", "Item 3", "Item 4", "Item 5", "Item 6", "Item 7", "Item 8");
        const cw3 = new _fwlEsmJs.Group({
            children: [
                c3,
                rbs
            ]
        });
        const l = new _fwlEsmJs.Labeling(new _fwlEsmJs.Caption('Long Label2', 'Label2'), new _fwlEsmJs.Single('Checkbox2'));
        const cw = new _fwlEsmJs.Group({
            children: [
                l,
                cw2,
                cw3
            ]
        });
        // const cw = new Group({ children: [cw3] });
        fl.setRootContainer(cw);
        return fl;
    }
    function start(fl, cw, ch) {
        const width = Math.floor(cw / UNIT);
        const height = Math.floor(ch / UNIT);
        return fl.layoutContainer({
            width,
            height
        });
    }
    function draw(fl, ctx) {
        dr(fl.getRootContainer(), 0, 0);
        function dr(r, x, y) {
            const { x: lx, y: ly } = r.getLocation();
            const { width, height } = r.getSize();
            ctx.strokeStyle = r.isValid() ? 'rgba(0, 0, 0, 0.5)' : 'rgba(255, 0, 0, 0.75)';
            ctx.lineWidth = 1;
            ctx.strokeRect(x * UNIT + lx * UNIT, y * UNIT + ly * UNIT, width * UNIT, height * UNIT);
            ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
            ctx.fillRect(x * UNIT + lx * UNIT, y * UNIT + ly * UNIT, width * UNIT, height * UNIT);
            ctx.strokeStyle = '';
            ctx.fillStyle = 'rgba(0, 0, 0, 0.85)';
            ctx.fillText(`${r.name()} ${width}, ${height}`, x * UNIT + (lx + 0.1) * UNIT, y * UNIT + (ly + 0.7) * UNIT);
            if (r instanceof _fwlEsmJs.FLayout) for (const c of r.children())dr(c, lx, ly);
        }
    }
}
},{"../../dist/fwl.esm.js":"gYaZE"}],"gYaZE":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Control", ()=>$d30c201a09640465$export$7a7fa4424cb20976);
parcelHelpers.export(exports, "Button", ()=>$45c1180393bf0ddd$export$353f5b6fc5456de1);
parcelHelpers.export(exports, "Checkbox", ()=>$7422aa3b637b727d$export$48513f6b9f8ce62d);
parcelHelpers.export(exports, "Checkboxes", ()=>$5583c2e779cad68a$export$2bc6b1ab4f9a3f);
parcelHelpers.export(exports, "Label", ()=>$0959cdeec5cb6f69$export$b04be29aa201d4f5);
parcelHelpers.export(exports, "ListBox", ()=>$f61179a7b81d1f5d$export$41f133550aa26f48);
parcelHelpers.export(exports, "RadioButtons", ()=>$65b1b71ed130f340$export$3f5c08aebfbff744);
parcelHelpers.export(exports, "Layout", ()=>$d7bac7cd2ddcfee2$export$c84671f46d6a1ca);
parcelHelpers.export(exports, "HorizontalArray", ()=>$1ed1798b253397d1$export$fbfad3d19c15cd04);
parcelHelpers.export(exports, "VerticalArray", ()=>$88f127287e7a2f82$export$51fe83e77e0dadce);
parcelHelpers.export(exports, "LeftLabeling", ()=>$57775c4279545305$export$18b48faa63195070);
parcelHelpers.export(exports, "TopLabeling", ()=>$7aa381c82405fdfc$export$3d88a90b20ff9f03);
parcelHelpers.export(exports, "FElement", ()=>$08804542aa09bd7a$export$d00c746f5a6c6b);
parcelHelpers.export(exports, "FControl", ()=>$57e518b9ec9968e2$export$8884abd4be69784e);
parcelHelpers.export(exports, "Caption", ()=>$e4ed283bef40c349$export$32fbfacc5d962e0c);
parcelHelpers.export(exports, "Multiple", ()=>$06058692f4553bcc$export$96933ea99fed18ef);
parcelHelpers.export(exports, "Single", ()=>$c1a5db0eabc5c3fa$export$446647c06aeeba4e);
parcelHelpers.export(exports, "SingleBoolean", ()=>$ab3f494290d2a939$export$ec067bcfcebc17c);
parcelHelpers.export(exports, "FLayout", ()=>$12003326136109e0$export$a32a3c53df62fb64);
parcelHelpers.export(exports, "Group", ()=>$fe8c2dd552d916c8$export$eb2fcfdbd7ba97d4);
parcelHelpers.export(exports, "Labeling", ()=>$6e7cdad736c80352$export$7f9751bb9f40e790);
parcelHelpers.export(exports, "FlexibleLayout", ()=>$c3655a055e85f972$export$bfecdd4c292f614d);
var _stlics = require("stlics/stlics");
function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
var $d30c201a09640465$exports = {};
$parcel$export($d30c201a09640465$exports, "Control", ()=>$d30c201a09640465$export$7a7fa4424cb20976);
class $d30c201a09640465$export$7a7fa4424cb20976 {
    #degree;
    #minSize;
    #maxSize;
    constructor(owner, degree){
        this.#minSize = {
            width: 0,
            height: 0
        };
        this.#maxSize = {
            width: Number.MAX_SAFE_INTEGER,
            height: Number.MAX_SAFE_INTEGER
        };
        this._owner = owner;
        this.#degree = degree;
    }
    getDegree() {
        return this.#degree;
    }
    addPossibleDegreesTo(dest) {
        dest.add(this.#degree);
    }
    setMinimumSize(s) {
        this.#minSize = {
            ...s
        };
    }
    getMinimumSize() {
        return {
            ...this.#minSize
        };
    }
    setMaximumSize(s) {
        this.#maxSize = {
            ...s
        };
    }
    getMaximumSize() {
        return {
            ...this.#maxSize
        };
    }
}
var $45c1180393bf0ddd$exports = {};
$parcel$export($45c1180393bf0ddd$exports, "Button", ()=>$45c1180393bf0ddd$export$353f5b6fc5456de1);
class $45c1180393bf0ddd$export$353f5b6fc5456de1 extends $d30c201a09640465$export$7a7fa4424cb20976 {
    #text;
    constructor(owner, deg, text){
        super(owner, deg);
        this.#text = text;
        const s = {
            width: this.#text.length + 2,
            height: 2
        };
        this.setMinimumSize(s);
        this.setMaximumSize(s);
    }
    name() {
        return 'button';
    }
}
var $7422aa3b637b727d$exports = {};
$parcel$export($7422aa3b637b727d$exports, "Checkbox", ()=>$7422aa3b637b727d$export$48513f6b9f8ce62d);
class $7422aa3b637b727d$export$48513f6b9f8ce62d extends $d30c201a09640465$export$7a7fa4424cb20976 {
    #text;
    constructor(owner, deg, text){
        super(owner, deg);
        this.#text = text;
        const s = {
            width: this.#text.length + 2,
            height: 1
        };
        this.setMinimumSize(s);
        this.setMaximumSize(s);
    }
    name() {
        return 'checkbox';
    }
}
var $5583c2e779cad68a$exports = {};
$parcel$export($5583c2e779cad68a$exports, "Checkboxes", ()=>$5583c2e779cad68a$export$2bc6b1ab4f9a3f);
class $5583c2e779cad68a$export$2bc6b1ab4f9a3f extends $d30c201a09640465$export$7a7fa4424cb20976 {
    #items;
    constructor(owner, deg, items){
        super(owner, deg);
        this.#items = [
            ...items
        ];
        let maxLen = 0;
        for (const it of items)maxLen = Math.max(maxLen, it.length);
        const s = {
            width: maxLen + 1,
            height: items.length * 1
        };
        this.setMinimumSize(s);
        this.setMaximumSize(s);
    }
    name() {
        return 'checkboxes';
    }
}
var $0959cdeec5cb6f69$exports = {};
$parcel$export($0959cdeec5cb6f69$exports, "Label", ()=>$0959cdeec5cb6f69$export$b04be29aa201d4f5);
class $0959cdeec5cb6f69$export$b04be29aa201d4f5 extends $d30c201a09640465$export$7a7fa4424cb20976 {
    #text;
    constructor(owner, deg, text){
        super(owner, deg);
        this.#text = text;
        const s = {
            width: this.#text.length,
            height: 1
        };
        this.setMinimumSize(s);
        this.setMaximumSize(s);
    }
    name() {
        return 'label';
    }
}
var $f61179a7b81d1f5d$exports = {};
$parcel$export($f61179a7b81d1f5d$exports, "ListBox", ()=>$f61179a7b81d1f5d$export$41f133550aa26f48);
class $f61179a7b81d1f5d$export$41f133550aa26f48 extends $d30c201a09640465$export$7a7fa4424cb20976 {
    static{
        this.MIN_ITEM_SIZE = 4;
    }
    #items;
    static createVariableInstances(minDeg, maxDeg, items) {
        if (items.length <= $f61179a7b81d1f5d$export$41f133550aa26f48.MIN_ITEM_SIZE) return [
            [
                maxDeg,
                (owner)=>new $f61179a7b81d1f5d$export$41f133550aa26f48(owner, maxDeg, items, $f61179a7b81d1f5d$export$41f133550aa26f48.MIN_ITEM_SIZE)
            ]
        ];
        const ret = [];
        const rDeg = maxDeg - minDeg;
        for(let i = $f61179a7b81d1f5d$export$41f133550aa26f48.MIN_ITEM_SIZE + 1; i < items.length; ++i){
            const r = maxDeg + rDeg * (i / items.length - 1);
            const count = i;
            ret.push([
                r,
                (owner)=>new $f61179a7b81d1f5d$export$41f133550aa26f48(owner, r, items, count)
            ]);
        }
        return ret;
    }
    constructor(owner, deg, items, count = items.length){
        super(owner, deg);
        this.#items = [
            ...items
        ];
        const minH = Math.min(count, $f61179a7b81d1f5d$export$41f133550aa26f48.MIN_ITEM_SIZE) * 1;
        let maxLen = 0;
        for (const it of items)maxLen = Math.max(maxLen, it.length);
        this.setMinimumSize({
            width: maxLen + 1,
            height: minH
        });
        this.setMaximumSize({
            width: Number.MAX_SAFE_INTEGER,
            height: Number.MAX_SAFE_INTEGER
        });
    }
    name() {
        return 'list box';
    }
}
var $65b1b71ed130f340$exports = {};
$parcel$export($65b1b71ed130f340$exports, "RadioButtons", ()=>$65b1b71ed130f340$export$3f5c08aebfbff744);
class $65b1b71ed130f340$export$3f5c08aebfbff744 extends $d30c201a09640465$export$7a7fa4424cb20976 {
    #items;
    constructor(owner, deg, items){
        super(owner, deg);
        this.#items = [
            ...items
        ];
        let maxLen = 0;
        for (const it of items)maxLen = Math.max(maxLen, it.length);
        const s = {
            width: maxLen + 1,
            height: items.length * 1
        };
        this.setMinimumSize(s);
        this.setMaximumSize(s);
    }
    name() {
        return 'radio buttons';
    }
}
var $d7bac7cd2ddcfee2$exports = {};
$parcel$export($d7bac7cd2ddcfee2$exports, "Layout", ()=>$d7bac7cd2ddcfee2$export$c84671f46d6a1ca);
class $d7bac7cd2ddcfee2$export$c84671f46d6a1ca {
    static{
        this.NO_DIR = -1;
    }
    static{
        this.VERTICAL = 0;
    }
    static{
        this.HORIZONTAL = 1;
    }
    #owner;
    #degree;
    #direction;
    constructor(owner, degree, direction = $d7bac7cd2ddcfee2$export$c84671f46d6a1ca.NO_DIR){
        this.#owner = owner;
        this.#degree = degree;
        this.#direction = direction;
    }
    getOwner() {
        return this.#owner;
    }
    getDegree() {
        return this.#degree;
    }
    getDirection() {
        return this.#direction;
    }
    getEstimatedMinimumSize(children) {
        const ss = children.map((e)=>e.getEstimatedMinimumSize());
        return this._calcSize(ss);
    }
    getEstimatedMinimumSizeIf(children, child, minSize) {
        const ss = children.map((e)=>child === e ? minSize : e.getEstimatedMinimumSize());
        return this._calcSize(ss);
    }
    getMinimumSize(children) {
        const ss = children.map((e)=>e.getMinimumSize());
        return this._calcSize(ss);
    }
    getMaximumSize() {
        return {
            width: Number.MAX_SAFE_INTEGER,
            height: Number.MAX_SAFE_INTEGER
        };
    }
}
var $1ed1798b253397d1$exports = {};
$parcel$export($1ed1798b253397d1$exports, "HorizontalArray", ()=>$1ed1798b253397d1$export$fbfad3d19c15cd04);
var $12003326136109e0$exports = {};
$parcel$export($12003326136109e0$exports, "FLayout", ()=>$12003326136109e0$export$a32a3c53df62fb64);
var $08804542aa09bd7a$exports = {};
$parcel$export($08804542aa09bd7a$exports, "FElement", ()=>$08804542aa09bd7a$export$d00c746f5a6c6b);
class $08804542aa09bd7a$export$d00c746f5a6c6b {
    #parent;
    #type;
    #size;
    #location;
    name() {
        return '';
    }
    setParent(parent) {
        this.#parent = parent;
    }
    getParent() {
        return this.#parent;
    }
    getVariable() {
        return this.#type;
    }
    // -------------------------------------------------------------------------
    getEstimatedMinimumSize() {
        return {
            ...this._estMinSize
        };
    }
    _getCandidateEntries() {
        return [];
    }
    _assignCandidates(worstDeg, dest) {
        dest.length = 0;
        for (const [d, e] of this._getCandidateEntries())if (worstDeg <= d) dest.push(e(this));
    }
    initializeProblem(p) {
        this._assignCandidates(0, this._cans);
        this._baseCans = [
            ...this._cans
        ];
        this.#type = p.createVariable((0, _stlics.Domain).create([
            0
        ]), 0, this.name() + ': type');
        p.createConstraint((v0)=>this.#typeRelation(v0), [
            this.#type
        ], this.name() + ': type');
    }
    #typeRelation(val) {
        if (this._states.length === 0) return 0;
        const pc = this._typeToCandidate(val);
        return pc.getDegree();
    }
    _typeToCandidate(val = null) {
        if (val === null && this.#type) val = this.#type.value();
        if (val !== null && this._states[val]) return this._cans[this._states[val].comb[0]];
        return null;
    }
    isValid() {
        if (!this.#type || this.#type.isEmpty()) return false;
        if (!this._states[this.#type.value()]) return false;
        return true;
    }
    // -------------------------------------------------------------------------
    getMinimumSize() {
        return {
            ...this._states[this.#type.value()].size
        };
    }
    getMaximumSize() {
        return this._typeToCandidate().getMaximumSize();
    }
    /**
	 * Gets the size of an element.
	 * @return Size.
	 */ getSize() {
        return {
            ...this.#size
        };
    }
    /**
	 * Sets the size of the element.
	 * @param width Width.
	 * @param height Height.
	 */ setSize(width, height) {
        this.#size = {
            width: width,
            height: height
        };
    }
    /**
	 * Gets the element location.
	 * @return Location.
	 */ getLocation() {
        return {
            ...this.#location
        };
    }
    /**
	 * Sets the location of the element.
	 * @param x X.
	 * @param y Y.
	 */ setLocation(x, y) {
        this.#location = {
            x: x,
            y: y
        };
    }
    constructor(){
        this.#size = {
            width: 0,
            height: 0
        };
        this.#location = {
            x: 0,
            y: 0
        };
        this._estMinSize = {
            width: Number.MAX_SAFE_INTEGER,
            height: Number.MAX_SAFE_INTEGER
        };
        this._states = [];
        this._cans = [];
        this._baseCans = [];
    }
}
class $12003326136109e0$export$a32a3c53df62fb64 extends $08804542aa09bd7a$export$d00c746f5a6c6b {
    static{
        this.SAME_DIRECTION = 0.50;
    }
    #children;
    name() {
        const can = this._typeToCandidate();
        return can?.name() ?? 'layout';
    }
    add(child) {
        child.setParent(this);
        this.#children.push(child);
    }
    children() {
        return this.#children;
    }
    getDescendantSize() {
        let size = this.#children.length;
        for (const c of this.#children)if (c instanceof $12003326136109e0$export$a32a3c53df62fb64) size += c.getDescendantSize();
        return size;
    }
    // -------------------------------------------------------------------------
    initializeProblem(p) {
        super.initializeProblem(p);
        for(let i = 0; i < this.#children.length; ++i){
            const c = this.#children[i];
            c.initializeProblem(p);
            p.createConstraint((v0, v1)=>this.#correspondingRelation(i, v0, v1), [
                this.getVariable(),
                c.getVariable()
            ], this.name() + ': toChild');
            if (c instanceof $12003326136109e0$export$a32a3c53df62fb64) p.createConstraint((v0, v1)=>this.#differentDirectionRelation(c, v0, v1), [
                this.getVariable(),
                c.getVariable()
            ], this.name() + ': toChild');
        }
    }
    #correspondingRelation(childIndex, val1, val2) {
        const s = this._states[val1];
        if (s.comb[childIndex + 1] === val2) return 1;
        return 0;
    }
    #differentDirectionRelation(childLayout, val1, val2) {
        const pd = this._typeToCandidate(val1).getDirection();
        const cd = childLayout._typeToCandidate(val2).getDirection();
        if (pd !== $d7bac7cd2ddcfee2$export$c84671f46d6a1ca.NO_DIR && cd !== $d7bac7cd2ddcfee2$export$c84671f46d6a1ca.NO_DIR && pd === cd) return $12003326136109e0$export$a32a3c53df62fb64.SAME_DIRECTION;
        return 1;
    }
    // -------------------------------------------------------------------------
    initializeEstimatedMinimumSize() {
        for (const c of this.#children)c.initializeEstimatedMinimumSize();
        let width = Number.MAX_SAFE_INTEGER;
        let height = Number.MAX_SAFE_INTEGER;
        for (const can of this._cans){
            const d = can.getEstimatedMinimumSize(this.#children);
            width = Math.min(width, d.width);
            height = Math.min(height, d.height);
        }
        this._estMinSize = {
            width: width,
            height: height
        };
    }
    initializeDomain(p) {
        for (const c of this.#children){
            if (!c.initializeDomain(p)) return false;
        }
        const comb = new Array(this.#children.length + 1).fill(0);
        const lens = new Array(this.#children.length + 1).fill(0);
        lens[0] = this._cans.length;
        for(let i = 0; i < this.#children.length; ++i)lens[i + 1] = this.#children[i]._states.length;
        let width = Number.MAX_SAFE_INTEGER;
        let height = Number.MAX_SAFE_INTEGER;
        this._states.length = 0;
        do {
            for(let i = 0; i < this.#children.length; ++i){
                const c = this.#children[i];
                c.getVariable().assign(comb[i + 1]);
            }
            const size = this._cans[comb[0]].getMinimumSize(this.#children);
            if (this.getParent().checkGivenMaximumSize(this, size)) {
                this._states.push({
                    comb: [
                        ...comb
                    ],
                    size: size
                });
                width = Math.min(width, size.width);
                height = Math.min(height, size.height);
            }
        }while (this.#increment(comb, lens));
        for (const c of this.#children)c.getVariable().clear();
        this._estMinSize = {
            width: width,
            height: height
        };
        if (this._states.length === 0) return false;
        this.getVariable().domain(p.createDomain(0, this._states.length - 1));
        return true;
    }
    #increment(comb, lens) {
        for(let i = 0; i < comb.length; ++i){
            comb[i]++;
            if (comb[i] < lens[i]) break;
            if (i === comb.length - 1) return false;
            comb[i] = 0;
        }
        return true;
    }
    checkGivenMaximumSize(child, childMinSize) {
        for (const lt of this._cans){
            const min = lt.getEstimatedMinimumSizeIf(this.#children, child, childMinSize);
            if (this.getParent().checkGivenMaximumSize(this, min)) return true;
        }
        return false;
    }
    setWorstDegree(deg) {
        this._assignCandidates(deg, this._cans);
        if (this._cans.length === 0) return false;
        for (const c of this.#children){
            if (!c.setWorstDegree(deg)) return false;
        }
        return true;
    }
    addPossibleDegreesTo(dest) {
        for (const can of this._baseCans)dest.add(can.getDegree());
        for (const c of this.#children)c.addPossibleDegreesTo(dest);
        dest.add($12003326136109e0$export$a32a3c53df62fb64.SAME_DIRECTION);
    }
    // -------------------------------------------------------------------------
    doLayout() {
        const can = this._typeToCandidate();
        can.doLayout(this.#children, this.getSize());
    }
    constructor(...args){
        super(...args), this.#children = [];
    }
}
class $1ed1798b253397d1$export$fbfad3d19c15cd04 extends $d7bac7cd2ddcfee2$export$c84671f46d6a1ca {
    constructor(owner, deg){
        super(owner, deg, $d7bac7cd2ddcfee2$export$c84671f46d6a1ca.HORIZONTAL);
    }
    name() {
        return 'horizontal array';
    }
    _calcSize(ss) {
        let width = 0;
        let height = 0;
        for (const s of ss){
            width += s.width;
            if (height < s.height) height = s.height;
        }
        width += (ss.length - 1) * 1 + 2;
        height += 2;
        return {
            width: width,
            height: height
        };
    }
    doLayout(children, size) {
        let x = 1;
        for (const fe of children){
            const min = fe.getMinimumSize();
            const max = fe.getMaximumSize();
            fe.setSize(min.width, Math.min(size.height - 2, max.height));
            fe.setLocation(x, 1);
            if (fe instanceof $12003326136109e0$export$a32a3c53df62fb64) fe.doLayout();
            x += fe.getSize().width + 1;
        }
    }
}
var $88f127287e7a2f82$exports = {};
$parcel$export($88f127287e7a2f82$exports, "VerticalArray", ()=>$88f127287e7a2f82$export$51fe83e77e0dadce);
class $88f127287e7a2f82$export$51fe83e77e0dadce extends $d7bac7cd2ddcfee2$export$c84671f46d6a1ca {
    constructor(owner, deg){
        super(owner, deg, $d7bac7cd2ddcfee2$export$c84671f46d6a1ca.VERTICAL);
    }
    name() {
        return 'vertical array';
    }
    _calcSize(ss) {
        let width = 0;
        let height = 0;
        for (const s of ss){
            if (width < s.width) width = s.width;
            height += s.height;
        }
        width += 2;
        height += (ss.length - 1) * 1 + 2;
        return {
            width: width,
            height: height
        };
    }
    doLayout(children, size) {
        let y = 1;
        for (const fe of children){
            const min = fe.getMinimumSize();
            const max = fe.getMaximumSize();
            fe.setSize(Math.min(size.width - 2, max.width), min.height);
            fe.setLocation(1, y);
            if (fe instanceof $12003326136109e0$export$a32a3c53df62fb64) fe.doLayout();
            y += fe.getSize().height + 1;
        }
    }
}
var $57775c4279545305$exports = {};
$parcel$export($57775c4279545305$exports, "LeftLabeling", ()=>$57775c4279545305$export$18b48faa63195070);
class $57775c4279545305$export$18b48faa63195070 extends $d7bac7cd2ddcfee2$export$c84671f46d6a1ca {
    constructor(owner, deg){
        super(owner, deg, $d7bac7cd2ddcfee2$export$c84671f46d6a1ca.HORIZONTAL);
    }
    name() {
        return 'left labeling';
    }
    _calcSize(ss) {
        const width = ss[0].width + 1 + ss[1].width + 2;
        const height = Math.max(ss[0].height, ss[1].height) + 2;
        return {
            width: width,
            height: height
        };
    }
    doLayout(children, size) {
        const le = children[0];
        const ce = children[1];
        const ld = le.getMinimumSize();
        const cd = ce.getMaximumSize();
        le.setSize(ld.width, ld.height);
        le.setLocation(1, 1);
        ce.setSize(Math.min(size.width - 2 - (ld.width + 1), cd.width), Math.min(size.height - 2, cd.height));
        ce.setLocation(1 + le.getSize().width + 1, 1);
        if (ce instanceof $12003326136109e0$export$a32a3c53df62fb64) ce.doLayout();
    }
}
var $7aa381c82405fdfc$exports = {};
$parcel$export($7aa381c82405fdfc$exports, "TopLabeling", ()=>$7aa381c82405fdfc$export$3d88a90b20ff9f03);
class $7aa381c82405fdfc$export$3d88a90b20ff9f03 extends $d7bac7cd2ddcfee2$export$c84671f46d6a1ca {
    #indent;
    constructor(owner, deg){
        super(owner, deg, $d7bac7cd2ddcfee2$export$c84671f46d6a1ca.VERTICAL), this.#indent = 1;
    }
    name() {
        return 'top labeling';
    }
    _calcSize(ss) {
        const width = Math.max(ss[0].width, ss[1].width + this.#indent) + 2;
        const height = ss[0].height + 1 + ss[1].height + 2;
        return {
            width: width,
            height: height
        };
    }
    doLayout(children, size) {
        const le = children[0];
        const ce = children[1];
        const ld = le.getMinimumSize();
        const cd = ce.getMaximumSize();
        le.setSize(ld.width, ld.height);
        le.setLocation(1, 1);
        ce.setSize(Math.min(size.width - 2 - this.#indent, cd.width), Math.min(size.height - 2 - (ld.height + 1), cd.height));
        ce.setLocation(1 + this.#indent, 1 + le.getSize().height + 1);
        if (ce instanceof $12003326136109e0$export$a32a3c53df62fb64) ce.doLayout();
    }
}
var $57e518b9ec9968e2$exports = {};
$parcel$export($57e518b9ec9968e2$exports, "FControl", ()=>$57e518b9ec9968e2$export$8884abd4be69784e);
class $57e518b9ec9968e2$export$8884abd4be69784e extends $08804542aa09bd7a$export$d00c746f5a6c6b {
    name() {
        const can = this._typeToCandidate();
        return can?.name() ?? 'control';
    }
    initializeEstimatedMinimumSize() {
        let width = Number.MAX_SAFE_INTEGER;
        let height = Number.MAX_SAFE_INTEGER;
        for (const can of this._cans){
            const d = can.getMinimumSize();
            width = Math.min(width, d.width);
            height = Math.min(height, d.height);
        }
        this._estMinSize = {
            width: width,
            height: height
        };
    }
    initializeDomain(p) {
        this._states.length = 0;
        for(let i = 0; i < this._cans.length; i += 1){
            const size = this._cans[i].getMinimumSize();
            if (this.getParent().checkGivenMaximumSize(this, size)) this._states.push({
                comb: [
                    i
                ],
                size: size
            });
        }
        if (this._states.length === 0) return false;
        this.getVariable().domain(p.createDomain(0, this._states.length - 1));
        return true;
    }
    setWorstDegree(deg) {
        this._assignCandidates(deg, this._cans);
        if (this._cans.length === 0) return false;
        return true;
    }
    addPossibleDegreesTo(dest) {
        for (const can of this._baseCans)can.addPossibleDegreesTo(dest);
    }
}
var $e4ed283bef40c349$exports = {};
$parcel$export($e4ed283bef40c349$exports, "Caption", ()=>$e4ed283bef40c349$export$32fbfacc5d962e0c);
class $e4ed283bef40c349$export$32fbfacc5d962e0c extends $57e518b9ec9968e2$export$8884abd4be69784e {
    #longText;
    #shortText;
    constructor(longText, shortText){
        super();
        this.#longText = longText;
        this.#shortText = shortText;
    }
    name() {
        return 'caption (' + super.name() + ')';
    }
    _getCandidateEntries() {
        return [
            [
                1.0,
                (owner)=>new $0959cdeec5cb6f69$export$b04be29aa201d4f5(owner, 1.0, this.#longText)
            ],
            [
                0.8,
                (owner)=>new $0959cdeec5cb6f69$export$b04be29aa201d4f5(owner, 0.8, this.#shortText)
            ]
        ];
    }
}
var $06058692f4553bcc$exports = {};
$parcel$export($06058692f4553bcc$exports, "Multiple", ()=>$06058692f4553bcc$export$96933ea99fed18ef);
class $06058692f4553bcc$export$96933ea99fed18ef extends $57e518b9ec9968e2$export$8884abd4be69784e {
    #items;
    constructor(...items){
        super();
        this.#items = items;
    }
    name() {
        return 'multiple (' + super.name() + ')';
    }
    _getCandidateEntries() {
        const r = $f61179a7b81d1f5d$export$41f133550aa26f48.createVariableInstances(0.75, 0.9, this.#items);
        r.push([
            1.0,
            (owner)=>new $5583c2e779cad68a$export$2bc6b1ab4f9a3f(owner, 1.0, this.#items)
        ]);
        return r;
    }
}
var $c1a5db0eabc5c3fa$exports = {};
$parcel$export($c1a5db0eabc5c3fa$exports, "Single", ()=>$c1a5db0eabc5c3fa$export$446647c06aeeba4e);
class $c1a5db0eabc5c3fa$export$446647c06aeeba4e extends $57e518b9ec9968e2$export$8884abd4be69784e {
    #items;
    constructor(...items){
        super();
        this.#items = items;
    }
    name() {
        return 'single (' + super.name() + ')';
    }
    _getCandidateEntries() {
        const r = $f61179a7b81d1f5d$export$41f133550aa26f48.createVariableInstances(0.75, 0.9, this.#items);
        r.push([
            1.0,
            (owner)=>new $65b1b71ed130f340$export$3f5c08aebfbff744(owner, 1.0, this.#items)
        ]);
        return r;
    }
}
var $ab3f494290d2a939$exports = {};
$parcel$export($ab3f494290d2a939$exports, "SingleBoolean", ()=>$ab3f494290d2a939$export$ec067bcfcebc17c);
class $ab3f494290d2a939$export$ec067bcfcebc17c extends $57e518b9ec9968e2$export$8884abd4be69784e {
    #itemTrue;
    #itemFalse;
    constructor(itemTrue, itemFalse){
        super();
        this.#itemTrue = itemTrue;
        this.#itemFalse = itemFalse;
    }
    name() {
        return 'single boolean (' + super.name() + ')';
    }
    _getCandidateEntries() {
        return [
            [
                0.9,
                (owner)=>new $7422aa3b637b727d$export$48513f6b9f8ce62d(owner, 0.9, this.#itemTrue)
            ],
            [
                1.0,
                (owner)=>new $65b1b71ed130f340$export$3f5c08aebfbff744(owner, 1.0, [
                        this.#itemTrue,
                        this.#itemFalse
                    ])
            ]
        ];
    }
}
var $fe8c2dd552d916c8$exports = {};
$parcel$export($fe8c2dd552d916c8$exports, "Group", ()=>$fe8c2dd552d916c8$export$eb2fcfdbd7ba97d4);
class $fe8c2dd552d916c8$export$eb2fcfdbd7ba97d4 extends $12003326136109e0$export$a32a3c53df62fb64 {
    constructor(args){
        super();
        if (args.children) for (const c of args.children)this.add(c);
    }
    _getCandidateEntries() {
        return [
            [
                0.98,
                (owner)=>new $1ed1798b253397d1$export$fbfad3d19c15cd04(owner, 0.98)
            ],
            [
                1.0,
                (owner)=>new $88f127287e7a2f82$export$51fe83e77e0dadce(owner, 1.0)
            ]
        ];
    }
}
var $6e7cdad736c80352$exports = {};
$parcel$export($6e7cdad736c80352$exports, "Labeling", ()=>$6e7cdad736c80352$export$7f9751bb9f40e790);
class $6e7cdad736c80352$export$7f9751bb9f40e790 extends $12003326136109e0$export$a32a3c53df62fb64 {
    constructor(e_label, e_content){
        super();
        this.add(e_label);
        this.add(e_content);
    }
    _getCandidateEntries() {
        return [
            [
                1.0,
                (owner)=>new $57775c4279545305$export$18b48faa63195070(owner, 1)
            ],
            [
                0.9,
                (owner)=>new $7aa381c82405fdfc$export$3d88a90b20ff9f03(owner, 0.9)
            ]
        ];
    }
}
var $c3655a055e85f972$exports = {};
$parcel$export($c3655a055e85f972$exports, "FlexibleLayout", ()=>$c3655a055e85f972$export$bfecdd4c292f614d);
class $c3655a055e85f972$export$bfecdd4c292f614d {
    static{
        this.DEBUG = true;
    }
    static{
        this.SORT_BY_DESCENDANT = true;
    }
    static{
        this.SORT_BY_PATH_LENGTH = true;
    }
    #root;
    #size;
    #lastDegree;
    setRootContainer(cw) {
        this.#root = cw;
        const that = this;
        this.#root.setParent(new class {
            checkGivenMaximumSize(fe, size) {
                const h = that.#size.height;
                const w = that.#size.width;
                return size.height <= h && size.width <= w;
            }
        }());
    }
    getRootContainer() {
        return this.#root;
    }
    getLastSatisfactionDegree() {
        return this.#lastDegree;
    }
    layoutContainer(ts) {
        if (this.#performLayout(ts)) return true;
        return false;
    }
    #performLayout(targetSize) {
        this.#size = {
            ...targetSize
        };
        const p = new (0, _stlics.Problem)();
        this.#root.initializeProblem(p);
        this.#sortVariablesInBreadthFirstOrder(p);
        const pd = new Set();
        this.#root.addPossibleDegreesTo(pd);
        if (!this.#solveProblem(p, pd)) return false;
        this.#root.setSize(this.#size.width, this.#size.height);
        this.#root.setLocation(0, 0);
        this.#root.doLayout();
        return true;
    }
    #solveProblem(p, possibleDegrees) {
        let time = 0;
        if ($c3655a055e85f972$export$bfecdd4c292f614d.DEBUG) {
            console.log('\nsolveProblem - started');
            time = Date.now();
        }
        let success = false;
        const pds = [
            ...possibleDegrees.values()
        ].sort((a, b)=>b - a);
        for (const r of pds){
            if (r <= 0) continue;
            if ($c3655a055e85f972$export$bfecdd4c292f614d.DEBUG) console.log(`\tIteration in wsd ${r}`);
            if (!this.#setWorstDegree(p, r)) continue;
            const mon = new (0, _stlics.Monitor)();
            mon.setTarget(r);
            mon.setTimeLimit(100);
            const solver = new (0, _stlics.FuzzyForwardChecking)();
            if (solver.solve(p, mon)) {
                success = true;
                this.#lastDegree = r;
                break;
            }
        }
        if ($c3655a055e85f972$export$bfecdd4c292f614d.DEBUG) {
            console.log(`solveProblem - finished (${success}, wsd = ${p.degree()})\n`);
            console.log(`time: ${Date.now() - time}`);
        }
        return success;
    }
    #setWorstDegree(p, worstDesirability) {
        const res = this.#root.setWorstDegree(worstDesirability);
        if (!res) {
            console.log('Failure: initializeDomain');
            return false;
        }
        this.#root.initializeEstimatedMinimumSize();
        if (!this.#root.initializeDomain(p)) {
            console.log('Failure: initializeDomain');
            return false;
        }
        return true;
    }
    #sortVariablesInBreadthFirstOrder(p) {
        const lens = (0, _stlics.averagePathLengths)(p);
        const vs = [
            this.#root.getVariable()
        ];
        let ls = [
            this.#root
        ];
        while(ls.length > 0){
            const nls = [];
            for (const l of ls){
                for (const c of l.children())if (c instanceof $12003326136109e0$export$a32a3c53df62fb64) nls.push(c);
            }
            this.#sortVariablesInCertainOrder(nls, lens);
            for (const l of nls)vs.push(l.getVariable());
            ls = nls;
        }
        p.sortVariables((o1, o2)=>{
            return vs.indexOf(o1) - vs.indexOf(o2);
        });
    }
    #sortVariablesInCertainOrder(ls, lens) {
        ls.sort((l1, l2)=>{
            if ($c3655a055e85f972$export$bfecdd4c292f614d.SORT_BY_DESCENDANT) {
                const ds1 = l1.getDescendantSize();
                const ds2 = l2.getDescendantSize();
                const r = ds2 - ds1;
                if (r !== 0) return r;
            }
            if ($c3655a055e85f972$export$bfecdd4c292f614d.SORT_BY_PATH_LENGTH) {
                const len1 = lens[l1.getVariable().index()];
                const len2 = lens[l2.getVariable().index()];
                return len2 - len1;
            }
            return 0;
        });
    }
    constructor(){
        this.#size = {
            width: 0,
            height: 0
        };
    }
}

},{"stlics/stlics":"g8ZPi","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"g8ZPi":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _problem = require("./src/problem/problem");
parcelHelpers.exportAll(_problem, exports);
var _element = require("./src/problem/element");
parcelHelpers.exportAll(_element, exports);
var _variable = require("./src/problem/variable");
parcelHelpers.exportAll(_variable, exports);
var _domain = require("./src/problem/domain");
parcelHelpers.exportAll(_domain, exports);
var _constraint = require("./src/problem/constraint");
parcelHelpers.exportAll(_constraint, exports);
// -----------------------------------------------------------------------------
var _solver = require("./src/solver/solver");
parcelHelpers.exportAll(_solver, exports);
var _monitor = require("./src/solver/monitor");
parcelHelpers.exportAll(_monitor, exports);
var _flexibleLocalChanges = require("./src/solver/fuzzy/flexible-local-changes");
parcelHelpers.exportAll(_flexibleLocalChanges, exports);
var _fullChecking = require("./src/solver/fuzzy/full-checking");
parcelHelpers.exportAll(_fullChecking, exports);
var _fuzzyBreakout = require("./src/solver/fuzzy/fuzzy-breakout");
parcelHelpers.exportAll(_fuzzyBreakout, exports);
var _fuzzyForwardChecking = require("./src/solver/fuzzy/fuzzy-forward-checking");
parcelHelpers.exportAll(_fuzzyForwardChecking, exports);
var _fuzzyGenet = require("./src/solver/fuzzy/fuzzy-genet");
parcelHelpers.exportAll(_fuzzyGenet, exports);
var _srs3 = require("./src/solver/fuzzy/srs3");
parcelHelpers.exportAll(_srs3, exports);
var _breakout = require("./src/solver/crisp/breakout");
parcelHelpers.exportAll(_breakout, exports);
var _crispSrs3 = require("./src/solver/crisp/crisp-srs3");
parcelHelpers.exportAll(_crispSrs3, exports);
var _forwardChecking = require("./src/solver/crisp/forward-checking");
parcelHelpers.exportAll(_forwardChecking, exports);
var _genet = require("./src/solver/crisp/genet");
parcelHelpers.exportAll(_genet, exports);
var _localChanges = require("./src/solver/crisp/local-changes");
parcelHelpers.exportAll(_localChanges, exports);
var _maxForwardChecking = require("./src/solver/crisp/max-forward-checking");
parcelHelpers.exportAll(_maxForwardChecking, exports);
var _ac3 = require("./src/solver/filter/ac3");
parcelHelpers.exportAll(_ac3, exports);
var _nodeConsistency = require("./src/solver/filter/node-consistency");
parcelHelpers.exportAll(_nodeConsistency, exports);
var _postStabilizer = require("./src/solver/filter/post-stabilizer");
parcelHelpers.exportAll(_postStabilizer, exports);
var _assignment = require("./src/solver/misc/assignment");
parcelHelpers.exportAll(_assignment, exports);
var _assignmentList = require("./src/solver/misc/assignment-list");
parcelHelpers.exportAll(_assignmentList, exports);
var _consistency = require("./src/solver/misc/consistency");
parcelHelpers.exportAll(_consistency, exports);
var _domainPruner = require("./src/solver/misc/domain-pruner");
parcelHelpers.exportAll(_domainPruner, exports);
var _random = require("./src/solver/misc/random");
parcelHelpers.exportAll(_random, exports);
// -----------------------------------------------------------------------------
var _loopDetector = require("./src/util/loop-detector");
parcelHelpers.exportAll(_loopDetector, exports);
var _problems = require("./src/util/problems");
parcelHelpers.exportAll(_problems, exports);
var _variables = require("./src/util/variables");
parcelHelpers.exportAll(_variables, exports);
var _relations = require("./src/util/relations");
parcelHelpers.exportAll(_relations, exports);
var _solverFactory = require("./src/util/solver-factory");
parcelHelpers.exportAll(_solverFactory, exports);

},{"./src/problem/problem":"4Nvsk","./src/problem/element":"2JAfT","./src/problem/variable":"1Z7Sx","./src/problem/domain":"8V9SU","./src/problem/constraint":"f8NRr","./src/solver/solver":"dvfQo","./src/solver/monitor":"35O01","./src/solver/fuzzy/flexible-local-changes":"2juau","./src/solver/fuzzy/full-checking":"gYH7K","./src/solver/fuzzy/fuzzy-breakout":"JK6En","./src/solver/fuzzy/fuzzy-forward-checking":"6vCMZ","./src/solver/fuzzy/fuzzy-genet":"ezeI0","./src/solver/fuzzy/srs3":"5QD09","./src/solver/crisp/breakout":"fSOIG","./src/solver/crisp/crisp-srs3":"gtT5Y","./src/solver/crisp/forward-checking":"8meAj","./src/solver/crisp/genet":"bqKOq","./src/solver/crisp/local-changes":"aIVCa","./src/solver/crisp/max-forward-checking":"5geKS","./src/solver/filter/ac3":"4nXpt","./src/solver/filter/node-consistency":"arUPL","./src/solver/filter/post-stabilizer":"41sLb","./src/solver/misc/assignment":"bZiv3","./src/solver/misc/assignment-list":"7XBf8","./src/solver/misc/consistency":"knMRR","./src/solver/misc/domain-pruner":"9ljra","./src/solver/misc/random":"5CZO5","./src/util/loop-detector":"5Ey8F","./src/util/problems":"kAwtv","./src/util/variables":"1D2XX","./src/util/relations":"6dYYD","./src/util/solver-factory":"fZNVH","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4Nvsk":[function(require,module,exports,__globalThis) {
/**
 * The class represents a constraint satisfaction problem.
 *
 * @author Takuto Yanagida
 * @version 2025-01-24
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Problem", ()=>Problem);
var _variable = require("./variable");
var _domain = require("./domain");
var _constraint = require("./constraint");
class Problem {
    #fv;
    #fc;
    #xs;
    #cs;
    // Methods for Modifying Factories -----------------------------------------
    /**
	 * Sets a variable factory.
	 */ setVariableFactory(fn) {
        this.#fv = fn;
    }
    /**
	 * Sets a variable factory.
	 */ setConstraintFactory(fn) {
        this.#fc = fn;
    }
    // Generation Methods ------------------------------------------------------
    /**
	 * Adds a variable to this problem.
	 * @param Variable v A variable.
	 */ addVariable(x) {
        x.setIndex(this.#xs.length);
        this.#xs.push(x);
    }
    createDomain(vs_min, max = null) {
        if (Array.isArray(vs_min)) return (0, _domain.Domain).create(vs_min);
        else if (null !== max) return (0, _domain.Domain).create(vs_min, max);
        throw new RangeError();
    }
    createVariable(x_d, value = null, name) {
        if (x_d instanceof (0, _variable.Variable)) {
            const x = this.#fv(x_d.domain());
            this.addVariable(x);
            x.setName(x.name());
            x.assign(x.value());
            return x;
        } else if (x_d instanceof (0, _domain.Domain)) {
            if (value !== null && !x_d.contains(value)) throw new Error();
            const x = this.#fv(x_d);
            this.addVariable(x);
            if (value !== null) x.assign(value);
            if (name) x.setName(name);
            return x;
        }
        throw new RangeError();
    }
    /**
	 * Generates a constraint.
	 * @param relation A relation.
	 * @param xs       Variables.
	 * @param name     Display name.
	 * @return A constraint.
	 */ createConstraint(relation, xs, name) {
        const c = this.#fc(relation, xs);
        c.setIndex(this.#cs.length);
        this.#cs.push(c);
        for (const x of xs)x.connect(c);
        if (name) c.setName(name);
        return c;
    }
    //  Modification Methods ---------------------------------------------------
    /**
	 * Remove the constraint.
	 * @param c Constraints to be removed.
	 */ removeConstraint(c) {
        const index = this.#cs.indexOf(c);
        this.#cs.splice(index, 1);
        for(let i = index; i < this.#cs.length; ++i)this.#cs[i].setIndex(i);
        for (const x of c)x.disconnect(c);
    }
    /**
	 * Changes the status of all variables to unassigned.
	 */ clearAllVariables() {
        for (const x of this.#xs)x.clear();
    }
    /**
	 * Reverse the order of variables.
	 * The index of each variable is reassigned.
	 */ reverseVariables() {
        this.#xs.reverse();
        for(let i = 0; i < this.#xs.length; ++i)this.#xs[i].setIndex(i);
    }
    /**
	 * Sorts variables using a specified comparator.
	 * The index of each variable is reassigned.
	 * @param comparator A comparator.
	 */ sortVariables(comparator) {
        this.#xs.sort(comparator);
        for(let i = 0; i < this.#xs.length; ++i)this.#xs[i].setIndex(i);
    }
    // Methods for Variables ---------------------------------------------------
    /**
	 * Returns the list of variables.
	 * The returned list is not allowed to be modified.
	 * @return The variable list.
	 */ variables() {
        return this.#xs;
    }
    /**
	 * Gets the number of variables in the problem.
	 * @return Number of variables
	 */ variableSize() {
        return this.#xs.length;
    }
    /**
	 * Gets a variable by index.
	 * @param index Index (0 <= index < variableSize()).
	 * @return A variable
	 */ variableAt(index) {
        return this.#xs[index];
    }
    /**
	 * Gets a variable by name.
	 * @param name Name.
	 * @return A variable.
	 */ variableOf(name) {
        for (const x of this.#xs){
            if (x.name() === name) return x;
        }
        return null;
    }
    /**
	 * Returns whether the variable is contained or not.
	 * @param x A variable.
	 * @return True if contained.
	 */ hasVariable(x) {
        return this.#xs.includes(x);
    }
    // Methods for Constraints -------------------------------------------------
    /**
	 * Returns the list of constraint.
	 * The returned list is not allowed to be modified.
	 * @return The constraint list.
	 */ constraints() {
        return this.#cs;
    }
    /**
	 * Gets the number of constraints in the problem.
	 * @return Number of constraints
	 */ constraintSize() {
        return this.#cs.length;
    }
    /**
	 * Gets a constraint by index.
	 * @param index Index (0 <= index < constraintSize()).
	 * @return A constraint.
	 */ constraintAt(index) {
        return this.#cs[index];
    }
    /**
	 * Gets a constraint by name.
	 * @param name Name.
	 * @return A constraint.
	 */ constraintOf(name) {
        for (const c of this.#cs){
            if (c.name() === name) return c;
        }
        return null;
    }
    /**
	 * Returns whether the constraint is contained or not.
	 * @param c A constraint
	 * @return True if contained.
	 */ hasConstraint(c) {
        return this.#cs.includes(c);
    }
    /**
	 * Gets the constraints that exist between the specified variables.
	 * Returns an empty array if no constraints exist.
	 * If there are multiple constraints between two variables (including the case of n-ary constraints (2 < n)), they will be included in the return array.
	 * @param v1 Variable 1
	 * @param v2 Variable 2
	 * @return Constraints.
	 */ constraintsBetween(v1, v2) {
        const cs = [];
        for (const c of v1)if (c.has(v2)) cs.push(c);
        return cs;
    }
    // State acquisition methods -----------------------------------------------
    /**
	 * Gets the constraint density (number of constraints/number of variables).
	 * @return Constraint density.
	 */ constraintDensity() {
        return this.#cs.length / this.#xs.length;
    }
    /**
	 * Returns the number of variables in the problem that have not been assigned a value.
	 * @return Number of variables with no value assigned.
	 */ emptySize() {
        let n = 0;
        for (const x of this.#xs)n += x.isEmpty() ? 1 : 0;
        return n;
    }
    /**
	 * Returns whether the constraint satisfaction problem has any variables with empty domain.
	 * @return True if it exists.
	 */ hasEmptyDomain() {
        for (const x of this.#xs){
            if (x.domain().size() === 0) return true;
        }
        return false;
    }
    /**
	 * Returns the worst satisfaction degree for the constraints contained in the fuzzy constraint satisfaction problem.
	 * If the degree cannot be determined because the variable has not yet been assigned a value or for some other reason, -1 is returned.
	 * @return Worst satisfaction degree.
	 */ degree() {
        let cur = 1;
        for (const c of this.#cs){
            const ev = c.degree();
            if (ev < 0) return ev;
            if (ev < cur) cur = ev;
        }
        return cur;
    }
    /**
	 * Finds the set of worst satisfiable constraints in a fuzzy constraint satisfaction problem.
	 * @return Array of constraints and worst satisfaction degree.
	 */ constraintsWithDegree() {
        const cs = [];
        let cur = 1;
        for (const c of this.#cs){
            const ev = c.degree();
            if (ev < cur) {
                cur = ev;
                cs.length = 0;
                cs.push(c);
            } else if (ev - cur < Number.MIN_VALUE * 10) cs.push(c);
        }
        return [
            cs,
            cur
        ];
    }
    /**
	 * Gets the average of satisfaction degrees of the fuzzy constraints.
	 * @return Average of satisfaction degrees.
	 */ averageDegree() {
        let s = 0;
        for (const c of this.#cs)s += c.degree();
        return s / this.#cs.length;
    }
    /**
	 * Returns the rate of constraints that are satisfied out of all constraints.
	 * @return Rate of satisfied constraints.
	 */ ratio() {
        return this.satisfiedConstraintSize() / this.#cs.length;
    }
    /**
	 * Returns the number of satisfied constraints.
	 * Undefined constraints are ignored.
	 * @return Number of satisfied constraints.
	 */ satisfiedConstraintSize() {
        let n = 0;
        for (const c of this.#cs)n += c.status() === 1 ? 1 : 0;
        return n;
    }
    /**
	 * Returns the number of violating constraints.
	 * Undefined constraints are ignored.
	 * @return Number of violating constraints.
	 */ violatingConstraintSize() {
        return this.#cs.length - this.satisfiedConstraintSize();
    }
    /**
	 * Returns a list of satisfied constraints.
	 * Undefined constraints are ignored.
	 * @return Array of constraints.
	 */ satisfiedConstraints() {
        const cs = [];
        for (const c of this.#cs)if (c.status() === 1) cs.push(c);
        return cs;
    }
    /**
	 * Returns a list of violating constraints.
	 * Undefined constraints are ignored.
	 * @return Array of constraints.
	 */ violatingConstraints() {
        const cs = [];
        for (const c of this.#cs)if (c.status() === 0) cs.push(c);
        return cs;
    }
    constructor(){
        this.#fv = (d)=>new (0, _variable.Variable)(d);
        this.#fc = (r, xs)=>(0, _constraint.Constraint).create(r, xs);
        this.#xs = [];
        this.#cs = [];
    }
}

},{"./variable":"1Z7Sx","./domain":"8V9SU","./constraint":"f8NRr","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1Z7Sx":[function(require,module,exports,__globalThis) {
/**
 * The class that represents a variable.
 *
 * @author Takuto Yanagida
 * @version 2025-01-24
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Variable", ()=>Variable);
var _element = require("./element");
class Variable extends (0, _element.Element) {
    static #INVALID = Number.MIN_VALUE;
    // Called only from Problem.
    constructor(d){
        super(), this.es = [], this.v = Variable.#INVALID;
        this.d = d;
    }
    /**
	 * Gets a string representation.
	 * @return A string representation.
	 */ toString() {
        const n = this.name();
        const np = n ? `(${n})` : '';
        const sn = this.isEmpty() ? '<empty>' : '' + this.value();
        return `x${this.index()}${np} = ${sn}`;
    }
    /**
	 * Gets the number of associated constraints.
	 * @return Number of constraints.
	 */ size() {
        return this.es.length;
    }
    /**
	 * Gets the associated constraint by specifying its index.
	 * @param index Index.
	 * @return A constraint.
	 */ at(index) {
        return this.es.at(index);
    }
    /**
	 * Checks whether or not the specified constraint is associated.
	 * @param c A constraint.
	 * @return True if associated.
	 */ has(c) {
        return this.es.includes(c);
    }
    /**
	 * Gets the index of a specified constraint.
	 * If not found, returns -1.
	 * @param c A constraint.
	 * @return Index.
	 */ indexOf(c) {
        return this.es.indexOf(c);
    }
    /**
	 * Collects the variables connected via the associated constraints.
	 * @return An array of variables
	 */ neighbors() {
        const xs = [];
        for (const c of this.es){
            for (const x of c)if (x !== this) xs.push(x);
        }
        return xs;
    }
    /**
	 * Gets the iterator of the associated constraints.
	 */ [Symbol.iterator]() {
        return this.es[Symbol.iterator]();
    }
    // -------------------------------------------------------------------------
    // Called only from Problem.
    connect(c) {
        if (this.es.includes(c)) throw new RangeError();
        this.es.push(c);
    }
    // Called only from Problem.
    disconnect(c) {
        if (!this.es.includes(c)) throw new RangeError();
        this.es = this.es.filter((i)=>i !== c);
    }
    domain(d) {
        if (d === undefined) return this.d;
        else {
            this.d = d;
            this.clear();
        }
    }
    /**
	 * Assign a value.
	 * @param value Value.
	 */ assign(value) {
        this.v = value; // Do not change #val except here.
    }
    /**
	 * Sets the state of the variable to unassigned.
	 */ clear() {
        // Do not use the invalid value except here and below (isEmpty).
        this.assign(Variable.#INVALID);
    }
    /**
	 * Gets the value of the variable.
	 * @returnThe value of the variable.
	 */ value() {
        return this.v;
    }
    /**
	 * Checks whether the value is unassigned or not.
	 * @return True if unassigned.
	 */ isEmpty() {
        return this.value() === Variable.#INVALID;
    }
}

},{"./element":"2JAfT","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2JAfT":[function(require,module,exports,__globalThis) {
/**
 * The common class of variables and constraints.
 *
 * @author Takuto Yanagida
 * @version 2025-01-02
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Element", ()=>Element);
class Element {
    #index;
    #name;
    // Called only from Problem.
    setIndex(index) {
        this.#index = index;
    }
    /**
	 * Sets the name.
	 *
	 * @param name string representing the name.
	 */ setName(name) {
        this.#name = name;
    }
    /**
	 * Get the index on the owned problem.
	 * Each variable and constraint is assigned a serial number as an index, which is used to access it through the problem.
	 *
	 * @return Integer value representing the index.
	 */ index() {
        return this.#index;
    }
    /**
	 * Gets the name.
	 *
	 * @return String representing the name.
	 */ name() {
        return this.#name;
    }
    constructor(){
        this.#index = -1;
        this.#name = '';
        /**
	 * It is used when the user wishes to associate an arbitrary object with each element.
	 */ this.userObject = null;
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports,__globalThis) {
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

},{}],"8V9SU":[function(require,module,exports,__globalThis) {
/**
 * An abstract class that represents a variable domain.
 * The domain is immutable.
 *
 * @author Takuto Yanagida
 * @version 2025-01-24
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Domain", ()=>Domain);
class Domain {
    static create(vs_min, max = null) {
        if (Array.isArray(vs_min)) return new DomainArbitrary(vs_min);
        else if (null !== max) return new DomainRanged(vs_min, max);
        throw new RangeError();
    }
}
// -----------------------------------------------------------------------------
class DomainArbitrary extends Domain {
    #vs;
    constructor(vs){
        super();
        this.#vs = [
            ...vs
        ];
    }
    contains(v) {
        return this.#vs.includes(v);
    }
    indexOf(v) {
        return this.#vs.indexOf(v);
    }
    size() {
        return this.#vs.length;
    }
    at(index) {
        return this.#vs[index];
    }
    [Symbol.iterator]() {
        return this.#vs[Symbol.iterator]();
    }
}
// -----------------------------------------------------------------------------
class DomainRanged extends Domain {
    #min;
    #max;
    constructor(min, max){
        super();
        this.#min = min | 0;
        this.#max = max | 0;
    }
    contains(v) {
        return this.#min <= v && v <= this.#max;
    }
    indexOf(v) {
        return this.#min <= v && v <= this.#max ? v - this.#min : -1;
    }
    size() {
        return this.#max - this.#min + 1;
    }
    at(index) {
        return this.#min + index;
    }
    [Symbol.iterator]() {
        let v = this.#min;
        const max = this.#max;
        return {
            next () {
                if (v <= max) return {
                    value: v++,
                    done: false
                };
                else return {
                    value: null,
                    done: true
                };
            }
        };
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"f8NRr":[function(require,module,exports,__globalThis) {
/**
 * The class that represents a constraint.
 *
 * @author Takuto Yanagida
 * @version 2025-01-24
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Constraint", ()=>Constraint);
var _element = require("./element");
class Constraint extends (0, _element.Element) {
    // Called only from Problem.
    static create(r, xs) {
        if (1 === xs.length) return new Constraint1(r, xs[0]);
        if (2 === xs.length) return new Constraint2(r, xs[0], xs[1]);
        if (3 === xs.length) return new Constraint3(r, xs[0], xs[1], xs[2]);
        return new ConstraintN(r, ...xs);
    }
    constructor(r){
        super(), this.es = [];
        this.r = r;
    }
    /**
	 * Gets a string representation.
	 * @return A string representation.
	 */ toString() {
        const n = this.name();
        const np = n ? `(${n})` : '';
        const ev = this.degree();
        const sn = ev < 0 /* ev === UNDEFINED */  ? 'UNDEFINED' : '' + ev;
        return `c${this.index()}${np} = ${sn}`;
    }
    /**
	 * Gets the order of the constraint, i.e., the number of (associated) variables in the scope.
	 * @return Order.
	 */ size() {
        return this.es.length;
    }
    /**
	 * Gets the associated variable by specifying its index.
	 * @param index Index.
	 * @return A variable.
	 */ at(index) {
        return this.es.at(index);
    }
    /**
	 * Checks whether or not the specified variable is associated.
	 * @param x A variable.
	 * @return True if associated.
	 */ has(x) {
        return this.es.includes(x);
    }
    /**
	 * Gets the index of a specified variable.
	 * If not found, returns -1.
	 * @param x A variable.
	 * @return Index.
	 */ indexOf(x) {
        return this.es.indexOf(x);
    }
    /**
	 * Collects the constraints connected via the associated variables.
	 * @return An array of constraints.
	 */ neighbors() {
        const cs = [];
        for (const x of this.es){
            for (const c of x)if (c !== this) cs.push(c);
        }
        return cs;
    }
    /**
	 * Gets the iterator of the associated variables.
	 */ [Symbol.iterator]() {
        return this.es[Symbol.iterator]();
    }
    // ----
    /**
	 * Returns the relation between variables.
	 * @return Relation.
	 */ relation() {
        return this.r;
    }
}
// -----------------------------------------------------------------------------
class Constraint1 extends Constraint {
    constructor(r, x){
        super(r);
        this.es = [
            x
        ];
    }
    emptySize() {
        return this.es[0].isEmpty() ? 1 : 0;
    }
    isDefined() {
        return !this.es[0].isEmpty();
    }
    status() {
        if (this.es[0].isEmpty()) return -1; // UNDEFINED
        return 1 === this.r(this.es[0].value()) ? 1 : 0;
    }
    degree() {
        if (this.es[0].isEmpty()) return -1; // UNDEFINED
        return this.r(this.es[0].value());
    }
}
// -----------------------------------------------------------------------------
class Constraint2 extends Constraint {
    constructor(r, x1, x2){
        super(r);
        this.es = [
            x1,
            x2
        ];
    }
    emptySize() {
        let n = 0;
        if (this.es[0].isEmpty()) ++n;
        if (this.es[1].isEmpty()) ++n;
        return n;
    }
    isDefined() {
        return !this.es[0].isEmpty() && !this.es[1].isEmpty();
    }
    status() {
        if (this.es[0].isEmpty() || this.es[1].isEmpty()) return -1; // UNDEFINED
        return 1 === this.r(this.es[0].value(), this.es[1].value()) ? 1 : 0;
    }
    degree() {
        if (this.es[0].isEmpty() || this.es[1].isEmpty()) return -1; // UNDEFINED
        return this.r(this.es[0].value(), this.es[1].value());
    }
}
// -----------------------------------------------------------------------------
class Constraint3 extends Constraint {
    constructor(r, x1, x2, x3){
        super(r);
        this.es = [
            x1,
            x2,
            x3
        ];
    }
    emptySize() {
        let n = 0;
        if (this.es[0].isEmpty()) ++n;
        if (this.es[1].isEmpty()) ++n;
        if (this.es[2].isEmpty()) ++n;
        return n;
    }
    isDefined() {
        return !this.es[0].isEmpty() && !this.es[1].isEmpty() && !this.es[2].isEmpty();
    }
    status() {
        if (this.es[0].isEmpty() || this.es[1].isEmpty() || this.es[2].isEmpty()) return -1; // UNDEFINED
        return 1 === this.r(this.es[0].value(), this.es[1].value(), this.es[2].value()) ? 1 : 0;
    }
    degree() {
        if (this.es[0].isEmpty() || this.es[1].isEmpty() || this.es[2].isEmpty()) return -1; // UNDEFINED
        return this.r(this.es[0].value(), this.es[1].value(), this.es[2].value());
    }
}
// -----------------------------------------------------------------------------
class ConstraintN extends Constraint {
    #vs;
    constructor(r, ...xs){
        super(r);
        this.es = [
            ...xs
        ];
        this.#vs = new Array(this.es.length);
    }
    emptySize() {
        let n = 0;
        for (const x of this.es)n += x.isEmpty() ? 1 : 0;
        return n;
    }
    isDefined() {
        for (const x of this.es){
            if (x.isEmpty()) return false;
        }
        return true;
    }
    status() {
        for(let i = 0; i < this.es.length; ++i){
            const x = this.es[i];
            if (x.isEmpty()) return -1; // UNDEFINED
            this.#vs[i] = x.value();
        }
        return 1 === this.r(...this.#vs) ? 1 : 0;
    }
    degree() {
        for(let i = 0; i < this.es.length; ++i){
            const x = this.es[i];
            if (x.isEmpty()) return -1; // UNDEFINED
            this.#vs[i] = x.value();
        }
        return this.r(...this.#vs);
    }
}

},{"./element":"2JAfT","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dvfQo":[function(require,module,exports,__globalThis) {
/**
 * The class for solvers for finding solutions to CSPs.
 *
 * @author Takuto Yanagida
 * @version 2025-01-03
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Solver", ()=>Solver);
var _monitor = require("./monitor");
class Solver {
    /**
	 * Generates a solver.
	 */ constructor(){}
    /**
	 * Returns the name of the solver.
	 * @return The name.
	 */ name() {
        return '';
    }
    /**
	 * Computes the solution to a CSP.
	 * The specific meaning of the return value depends on the implementation of the algorithm.
	 * @param p A CSP.
	 * @param m Monitor.
	 * @return True if the algorithm succeeds
	 */ solve(p, m = new (0, _monitor.Monitor)()) {
        this.pro = p;
        this.monitor = m;
        this.preprocess();
        const ret = this.exec();
        this.postprocess();
        return ret;
    }
    /**
	 * Placeholder for implementing preprocess.
	 */ preprocess() {}
    /**
	 * Placeholder for implementing an algorithm.
	 * The solve method calls this method and returns the return value of this method.
	 * @return True if the algorithm succeeds,
	 */ exec() {
        return false;
    }
    /**
	 * Placeholder for implementing postprocess.
	 */ postprocess() {}
}

},{"./monitor":"35O01","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"35O01":[function(require,module,exports,__globalThis) {
/**
 * The class for monitoring solvers.
 *
 * @author Takuto Yanagida
 * @version 2025-01-16
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Monitor", ()=>Monitor);
class Monitor {
    /**
	 * Whether the debugging mode is on.
	 */ #debugMode;
    /**
	 * Output function for debugging.
	 */ #debugOutput;
    /**
	 * Listener of the solver.
	 */ #listener;
    /**
	 *  Limit number of iterations.
	 */ #iterLimit;
    /**
	 * Time limit.
	 */ #timeLimit;
    /**
	 * Target 'ratio' or 'degree'.
	 */ #target;
    /**
	 * Number of times the evaluation value is the same before stopping the solver.
	 */ #sameEvLimit;
    /**
	 * End time.
	 */ #endTime;
    /**
	 * Number of iterations.
	 */ #iterCount;
    /**
	 * Last evaluation value.
	 */ #lastEv;
    /**
	 * Number of times the evaluation value is the same.
	 */ #sameEvCount;
    // -------------------------------------------------------------------------
    /**
	 * Initializes the monitor.
	 */ initialize() {
        this.#endTime = null === this.#timeLimit ? Number.MAX_VALUE : Date.now() + this.#timeLimit;
        this.#iterCount = 0;
    }
    /**
	 * Checks the current status of the solver.
	 * @param evaluation Evaluation value.
	 * @returns True if the solver should stop, false if the solver should stop as a failure, and null if the solver should continue.
	 */ check(evaluation = null) {
        if (null !== evaluation && null !== this.#target && this.#target <= evaluation) {
            this.outputDebugString('Stop: Current evaluation value is above the target');
            return true;
        }
        if (this.#iterLimit < this.#iterCount++) {
            this.outputDebugString('Stop: Number of iterations has reached the limit');
            return false;
        }
        if (this.#endTime < Date.now()) {
            this.outputDebugString('Stop: Time limit has been reached');
            return false;
        }
        if (null !== evaluation && null !== this.#sameEvLimit) {
            if (evaluation !== -1 && this.#lastEv === evaluation) {
                if (this.#sameEvLimit < this.#sameEvCount++) {
                    this.outputDebugString('Stop: Evaluation value has not changed for a certain number of times');
                    return false;
                }
            } else {
                this.#lastEv = evaluation;
                this.#sameEvCount = 0;
            }
        }
        return null;
    }
    /**
	 * Called by the solver when a solution is found.
	 * @param solution Solution.
	 * @param evaluation Evaluation value.
	 * @returns Whether to stop the solver.
	 */ solutionFound(solution, evaluation) {
        return this.#listener(solution, evaluation);
    }
    /**
	 * Called by the solver to output debug strings.
	 * @param str String to output.
	 */ outputDebugString(str) {
        if (this.#debugMode) this.#debugOutput(str);
    }
    /**
	 * Called by the solver to check if the debugging mode is on.
	 * @returns Whether the debugging mode is on.
	 */ isDebugMode() {
        return this.#debugMode;
    }
    /**
	 * Called by the solver to check if the target is set.
	 * @returns Whether the target is set.
	 */ isTargetAssigned() {
        return null !== this.#target;
    }
    /**
	 * Called by the solver to check if the target is set.
	 * @returns Whether the target is set.
	 */ getTarget() {
        return this.#target;
    }
    // -------------------------------------------------------------------------
    /**
	 * Sets and limits the maximum number of iterations for the solver's behavior.
	 * After the specified number of iterations, the solver stops as a failure. The specific behavior depends on the solver.
	 * @param count Maximum value; null means not set.
	 */ setIterationLimit(count = null) {
        this.#iterLimit = null === count ? Number.MAX_SAFE_INTEGER : count;
    }
    /**
	 * Sets a time limit on the solver's behavior.
	 * If the specified time is exceeded, the solver stops as a failure. The specific behavior depends on the solver.
	 * @param msec Time limit. null means not set.
	 */ setTimeLimit(msec = null) {
        this.#timeLimit = msec;
    }
    /**
	 * The goal to be achieved, which is the condition for stopping the solver, is set as the constraint satisfaction degree (fuzzy) or the percentage of constraints satisfied (crisp).
	 * The solver stops as success if the specified percentage is reached or exceeded. The specific behavior depends on the solver.
	 * @param rate Degree or rate. null indicates not set.
	 */ setTarget(rate = null) {
        this.#target = rate;
    }
    /**
	 * Sets the number of times the evaluation value is the same before stopping the solver.
	 * @param count Count; null means not set.
	 */ setSameEvaluationLimit(count = null) {
        this.#sameEvLimit = count;
    }
    // -------------------------------------------------------------------------
    /**
	 * Sets the listener of the solver.
	 * @param l Listener function.
	 */ setListener(l) {
        this.#listener = l;
    }
    // -------------------------------------------------------------------------
    /**
	 * Sets whether to output debug strings.
	 * @param boolean flag Do output if true.
	 */ setDebugMode(flag) {
        this.#debugMode = flag;
    }
    /**
	 * Sets a function that used for outputting debug strings.
	 * @param function fn Function called when debug output.
	 */ setDebugOutput(fn) {
        this.#debugOutput = fn;
    }
    constructor(){
        this.#debugMode = true;
        this.#debugOutput = (e)=>console.log(e);
        this.#listener = ()=>false;
        this.#iterLimit = Number.MAX_SAFE_INTEGER;
        this.#timeLimit = null;
        this.#target = 0.8;
        this.#sameEvLimit = null;
        this.#endTime = 0;
        this.#iterCount = 0;
        this.#lastEv = -1;
        this.#sameEvCount = 0;
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2juau":[function(require,module,exports,__globalThis) {
/**
 * A class that implements the flexible local changes method.
 * The implementation is optimized by converting recursive calls to loops.
 *
 * @author Takuto Yanagida
 * @version 2025-01-23
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "FlexibleLocalChanges", ()=>FlexibleLocalChanges);
var _assignmentList = require("../misc/assignment-list");
var _consistency = require("../misc/consistency");
var _solver = require("../solver");
class FlexibleLocalChanges extends (0, _solver.Solver) {
    #lt;
    #lb;
    #wsd;
    #globalRet;
    /**
	 * Generates a solver.
	 */ constructor(){
        super();
    }
    /**
	 * {@override}
	 */ name() {
        return 'Flexible Local Changes';
    }
    /**
	 * {@override}
	 */ preprocess() {
        [this.#lb, this.#lt] = (0, _consistency.consistencyDegreeOfProblem)(this.pro);
        this.#wsd = this.pro.degree();
        if (this.pro.emptySize() === 0) this.pro.clearAllVariables();
        this.#globalRet = -1;
        this.monitor.initialize();
    }
    /**
	 * {@override}
	 */ exec() {
        const X1 = new Set();
        const X2 = new Set(); // Currently assigned variables.
        const X3 = new Set(); // Currently unassigned variables.
        for (const x of this.pro.variables())(!x.isEmpty() ? X2 : X3).add(x);
        const cr = new Set();
        const initCons = this.#initTest(X2, cr);
        let rc;
        let initSol = null;
        if (0 === X3.size) {
            rc = initCons;
            initSol = (0, _assignmentList.AssignmentList).fromVariables(X2);
        } else rc = this.#lb;
        const X3p = this.#choose(X2, cr).union(X3);
        const X2p = X2.difference(X3p);
        let result = this.#flcVariables(X1, X2p, X3p, this.#lt, this.#lt, rc);
        if (result < rc) {
            if (initSol !== null) initSol.apply();
        }
        result = this.pro.degree();
        return this.#wsd < result && 0 < result && (this.#globalRet !== 0 || this.monitor.getTarget() === null);
    }
    #choose(x2, cr) {
        const res = new Map();
        for (const c of cr){
            if (!c.isDefined()) continue;
            for (const x of c)if (!res.has(x)) res.set(x, 1);
            else res.set(x, (res.get(x) ?? 0) + 1);
        }
        const xs = [
            ...x2
        ];
        xs.sort((o1, o2)=>{
            let res1 = 0;
            let res2 = 0;
            if (res.has(o1)) res1 = res.get(o1) ?? 0;
            if (res.has(o2)) res2 = res.get(o2) ?? 0;
            if (res1 < res2) return 1;
            if (res2 < res1) return -1;
            return 0;
        });
        const ret = new Set();
        for (const x of xs){
            let remain = false;
            for (const c of cr)if (c.isDefined()) {
                remain = true;
                break;
            }
            if (!remain) break;
            x.clear();
            ret.add(x);
        }
        return ret;
    }
    #flcVariables(X1, X2, X3, consX1, consX12, rc) {
        X2 = new Set(X2); // Clone
        X3 = new Set(X3); // Clone
        while(true){
            this.monitor.outputDebugString(`X1 ${X1.size}, X2' ${X2.size}, X3' ${X3.size}`);
            const ret = this.monitor.check(this.pro.degree());
            if (ret !== null) {
                this.#globalRet = ret ? 1 : 0;
                return consX12;
            }
            if (0 === X3.size) return consX12;
            const xi = X3.values().next().value;
            const consX12xi = this.#flcVariable(X1, X2, xi, consX1, consX12, rc);
            if (this.#globalRet !== -1) return consX12;
            if (consX12xi < rc) return this.#lb;
            X2.add(xi);
            X3.delete(xi);
            consX12 = consX12xi;
        }
    }
    #flcVariable(X1, X2, xi, consX1, consX12, rc) {
        let bestCons = this.#lb;
        if (xi.domain().size() === 0) return bestCons;
        let bestX2 = (0, _assignmentList.AssignmentList).fromVariables(X2);
        let bestDij = xi.domain().at(0);
        const x2Store = (0, _assignmentList.AssignmentList).fromVariables(X2);
        for(let j = 0; j < xi.domain().size() && bestCons < consX12; ++j){
            const dij = xi.domain().at(j);
            xi.assign(dij);
            const consX1_xi = Math.min(consX1, this.#testX1(X1, xi, bestCons, rc));
            if (Math.max(bestCons, rc) < consX1_xi) {
                const crNew = new Set();
                const consX12_xi = Math.min(Math.min(consX1_xi, consX12), this.#testX12(X1, X2, xi, consX1_xi, consX12, crNew));
                if (bestCons < consX12_xi) {
                    bestCons = consX12_xi;
                    bestDij = dij;
                    bestX2 = (0, _assignmentList.AssignmentList).fromVariables(X2);
                }
                if (crNew.size) {
                    const repairCons = this.#flcRepair(X1, X2, xi, consX1_xi, consX12, crNew, Math.max(rc, bestCons));
                    if (this.#globalRet !== -1) return bestCons;
                    if (bestCons < repairCons) {
                        bestCons = repairCons;
                        bestDij = dij;
                        bestX2 = (0, _assignmentList.AssignmentList).fromVariables(X2);
                    }
                    x2Store.apply();
                }
            }
        }
        bestX2.apply();
        xi.assign(bestDij);
        return bestCons;
    }
    #flcRepair(X1, X2, xi, consX1xi, consX12, cr, rc) {
        const X3p = this.#choose(X2, cr);
        const X1p = cloneAndAdd(X1, xi);
        const X2p = X2.difference(X3p);
        return this.#flcVariables(X1p, X2p, X3p, consX1xi, Math.min(consX12, consX1xi), rc);
    }
    #initTest(X, cr) {
        const cs = new Set();
        for (const x of X)for (const c of x)cs.add(c); // All variables in X have been assigned.
        let ret = 1;
        for (const c of cs){
            const sd = c.degree();
            if (sd < 0) continue;
            if (sd < ret) ret = sd;
        }
        for (const c of this.pro.constraints()){
            const cd = (0, _consistency.lowestConsistencyDegree)(c);
            if (cd < this.#lt) cr.add(c);
        }
        return ret;
    }
    #testX1(X1, xi, bestCons, rc) {
        let cd = 1;
        const cs = new Set();
        for (const x of X1){
            const temp = this.pro.constraintsBetween(x, xi);
            for (const c of temp)cs.add(c);
        }
        for (const c of cs){
            const d = c.degree();
            if (d < 0) continue;
            if (d < cd) cd = d;
            // If it is determined that a better solution than the current solution cannot be obtained
            if (cd <= bestCons || cd <= rc) return cd;
        }
        return cd;
    }
    #testX12(X1, X2, xi, consX1xi, consX12, cr) {
        let csd = 1;
        const cs = new Set();
        for (const x of X1){
            const temp = this.pro.constraintsBetween(x, xi);
            for (const c of temp)cs.add(c);
        }
        for (const x of X2){
            const temp = this.pro.constraintsBetween(x, xi);
            for (const c of temp)cs.add(c);
        }
        for (const c of cs){
            const sd = c.degree();
            if (sd < 0) continue;
            if (sd < csd) csd = sd;
        }
        for (const c of cs){
            const sd = c.degree();
            if (sd < 0) continue;
            if (sd < consX1xi || sd < consX12) cr.add(c);
        }
        return csd;
    }
}
function cloneAndAdd(s, e) {
    return new Set(s).add(e);
}

},{"../misc/assignment-list":"7XBf8","../misc/consistency":"knMRR","../solver":"dvfQo","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7XBf8":[function(require,module,exports,__globalThis) {
/**
 * The class represents multiple variables and their assignments.
 *
 * @author Takuto Yanagida
 * @version 2025-01-24
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "AssignmentList", ()=>AssignmentList);
var _assignment = require("./assignment");
var _random = require("./random");
class AssignmentList {
    /**
	 * Creates an assignment list from variables.
	 * @param xs Variables.
	 * @return Assignment list.
	 */ static fromVariables(xs) {
        const al = new AssignmentList();
        al.setVariables(xs);
        return al;
    }
    #as;
    constructor(){
        this.#as = [];
    }
    /**
	 * Sets a problem.
	 * @param p Problem.
	 */ setProblem(p) {
        this.#as.length = 0;
        for (const x of p.variables())this.#as.push(new (0, _assignment.Assignment)(x));
    }
    /**
	 * Sets assignments.
	 * @param al Assignments.
	 */ setAssignmentList(al) {
        this.#as.length = 0;
        for (const a of al)this.#as.push(new (0, _assignment.Assignment)(a));
    }
    /**
	 * Sets variables.
	 * @param xs Variables.
	 */ setVariables(xs) {
        this.#as.length = 0;
        for (const x of xs)this.#as.push(new (0, _assignment.Assignment)(x));
    }
    /**
	 * Adds a variable and its value.
	 * @param x Variable.
	 * @param value Value.
	 */ addVariable(x, value = null) {
        this.#as.push(new (0, _assignment.Assignment)(x, value));
    }
    /**
	 * Applies all assignments.
	 */ apply() {
        for (const a of this.#as)a.apply();
    }
    /**
	 * Remove all assignments.
	 */ clear() {
        this.#as.length = 0;
    }
    /**
	 * Checks whether the list is empty or not.
	 * @return True if empty.
	 */ isEmpty() {
        return 0 === this.#as.length;
    }
    /**
	 * Gets the number of assignments.
	 * @return Number of assignments.
	 */ size() {
        return this.#as.length;
    }
    /**
	 * Gets the number of different assignments.
	 * @return Number of different assignments.
	 */ differenceSize() {
        let diff = 0;
        for (const a of this.#as)if (a.variable().value() !== a.value()) ++diff;
        return diff;
    }
    /**
	 * Gets the assignments by specifying their indices.
	 * @param index Index.
	 * @return An assignment.
	 */ at(index) {
        return this.#as[index];
    }
    /**
	 * Gets the iterator of the assignments.
	 */ [Symbol.iterator]() {
        return this.#as[Symbol.iterator]();
    }
    /**
	 * Gets an arbitrary assignment.
	 *
	 * @return An assignment.
	 */ random() {
        return this.#as[(0, _random.rand)(this.#as.length)];
    }
}

},{"./assignment":"bZiv3","./random":"5CZO5","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bZiv3":[function(require,module,exports,__globalThis) {
/**
 * The class represents a pair of variables and the values to be assigned to them.
 *
 * @author Takuto Yanagida
 * @version 2025-01-18
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Assignment", ()=>Assignment);
var _variable = require("../../problem/variable");
class Assignment {
    #x;
    #v;
    constructor(a_x, value = null){
        if (a_x instanceof Assignment) {
            this.#x = a_x.variable();
            this.#v = a_x.value();
        } else if (a_x instanceof (0, _variable.Variable)) {
            this.#x = a_x;
            this.#v = value ?? a_x.value();
        } else throw new RangeError();
    }
    /**
	 * Assigns a value to a stored variable.
	 */ apply() {
        this.#x.assign(this.#v);
    }
    /**
	 * Returns a string representation.
	 * @return A string representation.
	 */ toString() {
        return `v${this.#x.index()} <- ${this.#v}`;
    }
    /**
	 * Gets the value.
	 * @return Value.
	 */ value() {
        return this.#v;
    }
    /**
	 * Gets the variable.
	 * @return Variable.
	 */ variable() {
        return this.#x;
    }
}

},{"../../problem/variable":"1Z7Sx","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5CZO5":[function(require,module,exports,__globalThis) {
/**
 * Utility functions for random numbers.
 * @author Takuto Yanagida
 * @version 2025-01-24
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Set a seed number
 * @param {number} seed Seed number
 */ parcelHelpers.export(exports, "setSeed", ()=>setSeed);
/**
 * Return a random number from min to max
 * @return {number} A random number
 */ parcelHelpers.export(exports, "random", ()=>random);
/**
 * Returns a random number from 0 to n_min
 * @param {number} n An integer
 * @return {number} A random integer
 */ parcelHelpers.export(exports, "rand", ()=>rand);
let generator = Math.random;
function setSeed(seed = Math.random() * 997) {
    generator = createGenerator(seed);
}
function random() {
    return generator();
}
function rand(n) {
    console.log(generator === Math.random);
    return Math.floor(generator() * n);
}
/**
 * Create a function that returns a random number (Xorshift32) (used only in the library)
 * @private
 * @param {number} seed Seed number
 * @return {function():number} Function that returns a random number
 */ function createGenerator(seed) {
    let y = seed;
    return ()=>{
        y = y ^ y << 13;
        y = y ^ y >> 17;
        y = y ^ y << 15;
        return (y + 2147483648) / 4294967295;
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"knMRR":[function(require,module,exports,__globalThis) {
/**
 * Utilities for calculating consistency degree.
 *
 * @author Takuto Yanagida
 * @version 2025-01-23
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Calculates the highest and lowest consistency degrees.
 * @param p A problem.
 * @return The pair of the highest and lowest consistency degrees.
 */ parcelHelpers.export(exports, "consistencyDegreeOfProblem", ()=>consistencyDegreeOfProblem);
/**
 * Calculates the highest consistency degree.
 * That is, it seeks the highest satisfaction degree of the possible combinations of variable assignments for a given constraint.
 * When all associated variables have been assigned values, it returns the same value as degree().
 * @param c A constraint.
 * @return The highest consistency degree.
 */ parcelHelpers.export(exports, "highestConsistencyDegree", ()=>highestConsistencyDegree);
/**
 * Calculates the lowest consistency degree.
 * That is, it seeks the lowest satisfaction degree of the possible combinations of variable assignments for a given constraint.
 * When all associated variables have been assigned values, it returns the same value as degree().
 * @param c A constraint.
 * @return The lowest consistency degree.
 */ parcelHelpers.export(exports, "lowestConsistencyDegree", ()=>lowestConsistencyDegree);
function consistencyDegreeOfProblem(p) {
    let L = 1;
    let H = 0;
    for (const c of p.constraints()){
        const l = lowestConsistencyDegree(c);
        const h = highestConsistencyDegree(c);
        if (l < L) L = l;
        if (H < h) H = h;
    }
    return [
        L,
        H
    ];
}
function highestConsistencyDegree(c) {
    const s = c.size();
    if (1 === s) return highestConsistencyDegree1(c);
    if (2 === s) return highestConsistencyDegree2(c);
    if (3 === s) return highestConsistencyDegree3(c);
    return highestConsistencyDegreeN(c);
}
function lowestConsistencyDegree(c) {
    const s = c.size();
    if (1 === s) return lowestConsistencyDegree1(c);
    if (2 === s) return lowestConsistencyDegree2(c);
    if (3 === s) return lowestConsistencyDegree3(c);
    return lowestConsistencyDegreeN(c);
}
/**
 * Calculates the highest consistency degree of a unary constraint.
 * @param c A constraint.
 * @return The highest consistency degree.
 */ function highestConsistencyDegree1(c) {
    const ev = c.degree();
    if (0 <= ev) return ev;
    const x = c.at(0);
    let cd = 0;
    for (const v of x.domain()){
        const ev = c.relation()(v);
        if (cd < ev) cd = ev;
        if (1 === cd) return 1;
    }
    return cd;
}
/**
 * Calculates the lowest consistency degree of a unary constraint.
 * @param c A constraint.
 * @return The lowest consistency degree.
 */ function lowestConsistencyDegree1(c) {
    const ev = c.degree();
    if (0 <= ev) return ev;
    const x = c.at(0);
    let cd = 1;
    for (const v of x.domain()){
        const ev = c.relation()(v);
        if (ev < cd) cd = ev;
        if (0 === cd) return 0;
    }
    return cd;
}
/**
 * Calculates the highest consistency degree of a binary constraint.
 * @param c A constraint.
 * @return The highest consistency degree.
 */ function highestConsistencyDegree2(c) {
    const ev = c.degree();
    if (0 <= ev) return ev;
    const x0 = c.at(0);
    const x1 = c.at(1);
    const d0 = x0.isEmpty() ? x0.domain() : [
        x0.value()
    ];
    const d1 = x1.isEmpty() ? x1.domain() : [
        x1.value()
    ];
    let cd = 0;
    for (const v0 of d0)for (const v1 of d1){
        const ev = c.relation()(v0, v1);
        if (cd < ev) cd = ev;
        if (1 === cd) return 1;
    }
    return cd;
}
/**
 * Calculates the lowest consistency degree of a binary constraint.
 * @param c A constraint.
 * @return The lowest consistency degree.
 */ function lowestConsistencyDegree2(c) {
    const ev = c.degree();
    if (0 <= ev) return ev;
    const x0 = c.at(0);
    const x1 = c.at(1);
    const d0 = x0.isEmpty() ? x0.domain() : [
        x0.value()
    ];
    const d1 = x1.isEmpty() ? x1.domain() : [
        x1.value()
    ];
    let cd = 1;
    for (const v0 of d0)for (const v1 of d1){
        const ev = c.relation()(v0, v1);
        if (ev < cd) cd = ev;
        if (0 === cd) return 0;
    }
    return cd;
}
/**
 * Calculates the highest consistency degree of a trinary constraint.
 * @param c A constraint.
 * @return The highest consistency degree.
 */ function highestConsistencyDegree3(c) {
    const ev = c.degree();
    if (0 <= ev) return ev;
    const x0 = c.at(0);
    const x1 = c.at(1);
    const x2 = c.at(2);
    const d0 = x0.isEmpty() ? x0.domain() : [
        x0.value()
    ];
    const d1 = x1.isEmpty() ? x1.domain() : [
        x1.value()
    ];
    const d2 = x2.isEmpty() ? x2.domain() : [
        x2.value()
    ];
    let cd = 0;
    for (const v0 of d0){
        for (const v1 of d1)for (const v2 of d2){
            const ev = c.relation()(v0, v1, v2);
            if (cd < ev) cd = ev;
            if (1 === cd) return 1;
        }
    }
    return cd;
}
/**
 * Calculates the lowest consistency degree of a trinary constraint.
 * @param c A constraint.
 * @return The lowest consistency degree.
 */ function lowestConsistencyDegree3(c) {
    const ev = c.degree();
    if (0 <= ev) return ev;
    const x0 = c.at(0);
    const x1 = c.at(1);
    const x2 = c.at(2);
    const d0 = x0.isEmpty() ? x0.domain() : [
        x0.value()
    ];
    const d1 = x1.isEmpty() ? x1.domain() : [
        x1.value()
    ];
    const d2 = x2.isEmpty() ? x2.domain() : [
        x2.value()
    ];
    let cd = 1;
    for (const v0 of d0){
        for (const v1 of d1)for (const v2 of d2){
            const ev = c.relation()(v0, v1, v2);
            if (ev < cd) cd = ev;
            if (0 === cd) return 0;
        }
    }
    return cd;
}
/**
 * Calculates the highest consistency degree of a N-ary constraint.
 * @param c A constraint.
 * @return The highest consistency degree.
 */ function highestConsistencyDegreeN(c) {
    const ev = c.degree();
    if (0 <= ev) return ev;
    const emptyIndices = new Array(c.emptySize());
    let j = 0;
    const vs = new Array(c.size());
    for(let i = 0, I = c.size(); i < I; ++i){
        const x = c.at(i);
        if (x.isEmpty()) emptyIndices[j++] = i;
        else vs[i] = x.value();
    }
    return checkHCD(c, vs, emptyIndices, 0, 0);
}
/**
 * Calculates the lowest consistency degree of a N-ary constraint.
 * @param c A constraint.
 * @return The lowest consistency degree.
 */ function lowestConsistencyDegreeN(c) {
    const ev = c.degree();
    if (0 <= ev) return ev;
    const emptyIndices = new Array(c.emptySize());
    let j = 0;
    const vs = new Array(c.size());
    for(let i = 0, I = c.size(); i < I; ++i){
        const x = c.at(i);
        if (x.isEmpty()) emptyIndices[j++] = i;
        else vs[i] = x.value();
    }
    return checkLCD(c, vs, emptyIndices, 0, 1);
}
function checkHCD(c, vs, emptyIndices, currentStep, cd) {
    const index = emptyIndices[currentStep];
    const d = c.at(index).domain();
    if (currentStep === emptyIndices.length - 1) for (const v of d){
        vs[index] = v;
        const ev = c.relation()(...vs);
        if (cd < ev) cd = ev;
        if (1 === cd) return 1;
    }
    else for (const v of d){
        vs[index] = v;
        cd = checkHCD(c, vs, emptyIndices, currentStep + 1, cd);
    }
    return cd;
}
function checkLCD(c, vs, emptyIndices, currentStep, cd) {
    const index = emptyIndices[currentStep];
    const d = c.at(index).domain();
    if (currentStep === emptyIndices.length - 1) for (const v of d){
        vs[index] = v;
        const ev = c.relation()(...vs);
        if (ev < cd) cd = ev;
        if (0 === cd) return 0;
    }
    else for (const v of d){
        vs[index] = v;
        cd = checkLCD(c, vs, emptyIndices, currentStep + 1, cd);
    }
    return cd;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gYH7K":[function(require,module,exports,__globalThis) {
/**
 * This class implements the forward and backward checking method for fuzzy CSP.
 * The minimum-remaining-values (MRV) heuristic can also be used by specifying the option.
 * Each variable must have its own domain because it hides domain elements as branch pruning.
 * Forward checking is also performed for problems with polynomial constraints.
 *
 * @author Takuto Yanagida
 * @version 2025-01-23
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "FullChecking", ()=>FullChecking);
var _assignmentList = require("../misc/assignment-list");
var _domainPruner = require("../misc/domain-pruner");
var _problems = require("../../util/problems");
var _solver = require("../solver");
class FullChecking extends (0, _solver.Solver) {
    #xs;
    #rct;
    #dps;
    #sol;
    #checkedCs;
    #sequence;
    #unaryCs;
    #minDeg;
    #globalRet;
    #useMRV;
    #pruneIntensively;
    /**
	 * Generates a solver.
	 */ constructor(){
        super(), this.#useMRV = true, this.#pruneIntensively = false;
    }
    /**
	 * Specify whether to use the minimum-remaining-values (MRV) heuristic.
	 * Use of MRV may increase processing time for some problems.
	 * Default is false.
	 * @param flag Use MRV if true.
	 */ setUsingMinimumRemainingValuesHeuristics(flag) {
        this.#useMRV = flag;
    }
    /**
	 * Specifies whether or not to intensively prune branches when the problem contains 3- or n-ary constraints.
	 * Depending on the problem, intensive pruning may increase processing time.
	 * Default is false.
	 * @param flag Whether or not to intensively prune branches.
	 */ setIntensivePruning(flag) {
        this.#pruneIntensively = flag;
    }
    /**
	 * {@override}
	 */ name() {
        return 'Full Checking';
    }
    /**
	 * {@override}
	 */ preprocess() {
        this.#xs = [
            ...this.pro.variables()
        ];
        this.#rct = (0, _problems.createRelatedConstraintTable)(this.pro, this.#xs);
        this.#dps = Array.from(this.#xs, (x)=>new (0, _domainPruner.DomainPruner)(x.domain().size()));
        this.#sol = new (0, _assignmentList.AssignmentList)();
        this.#checkedCs = new Set();
        this.#sequence = new Array(this.pro.variableSize());
        this.#unaryCs = this.pro.constraints().filter((c)=>c.size() === 1);
        this.#minDeg = 0;
        this.monitor.initialize();
    }
    /**
	 * {@override}
	 */ exec() {
        let ret = null;
        while(ret === null){
            this.#globalRet = false;
            this.pro.clearAllVariables();
            if (!this.#pruneUnaryConstraints()) {
                ret = false;
                break;
            }
            ret = this.#branch(0);
            this.#sol.apply();
        }
        return ret === true;
    }
    // Prune elements of the domain that make the unary constraint worse than the current worst degree.
    #pruneUnaryConstraints() {
        for (const c of this.#unaryCs){
            const x = c.at(0);
            const origV = x.value(); // Save the value.
            const d = x.domain();
            const dp = this.#dps[x.index()];
            for(let i = 0, n = d.size(); i < n; ++i){
                x.assign(d.at(i));
                if (c.degree() <= this.#minDeg) dp.prune(i, -1); // Here's a branch pruning!
            }
            x.assign(origV); // Restore the value.
            if (dp.isEmpty()) return false;
        }
        return true;
    }
    #branch(level, curDeg = 1) {
        if (level === this.pro.variableSize()) {
            const ev = this.pro.degree();
            this.#sol.setProblem(this.pro);
            this.monitor.outputDebugString('\t' + `Evaluation ${ev}`);
            if (this.#minDeg < ev) {
                this.#minDeg = ev;
                this.#globalRet = true;
                if (this.monitor.solutionFound(this.#sol, ev)) return true; // Success.
            }
            return this.monitor.check(ev);
        }
        let ret = null;
        if (null !== (ret = this.monitor.check())) return ret; // Success or failure.
        const x = this.#xs[this.#useMRV ? (0, _domainPruner.indexOfVariableWithMRV)(this.#xs, this.#dps) : level];
        const d = x.domain();
        const dp = this.#dps[x.index()];
        this.#sequence[level] = x;
        for(let i = 0, n = d.size(); i < n; ++i){
            if (dp.isPruned(i)) continue;
            x.assign(d.at(i));
            const deg = Math.min(curDeg, this.#getBackwardConsistency(x));
            if (deg <= this.#minDeg) continue;
            if (this.#checkForward(level, x)) {
                ret = this.#branch(level + 1, deg);
                if (null !== ret || this.#globalRet) break;
            }
            for (const dp of this.#dps)dp.recover(level);
        }
        if (ret === null) {
            for (const dp of this.#dps)dp.recover(level);
            x.clear();
        }
        return ret;
    }
    // Checks for possible assignment to a future variable from the current variable assignment.
    #checkForward(level, x) {
        for (const x_i of this.#xs){
            if (!x_i.isEmpty()) continue; // If it is a past or present variable.
            const cs = this.#getConstraintsBetween(x.index(), x_i.index());
            const dp_i = this.#dps[x_i.index()];
            const d_i = x_i.domain();
            for (const c of cs){
                const evs = c.emptySize();
                if (1 === evs) {
                    if (!this.#checkForwardConsistency(level, x_i, d_i, dp_i, c)) return false;
                } else if (this.#pruneIntensively) {
                    if (2 === evs) {
                        if (!this.#checkForwardConsistency2(level, x_i, d_i, dp_i, c)) return false;
                    } else if (3 === evs) {
                        if (!this.#checkForwardConsistency3(level, x_i, d_i, dp_i, c)) return false;
                    } else if (3 < evs) {
                        if (!this.#checkForwardConsistencyN(level, x_i, d_i, dp_i, c, evs)) return false;
                    }
                }
            }
        }
        return true;
    }
    // Retrieves an array of constraints from a table that caches constraints between two variables.
    #getConstraintsBetween(i, j) {
        return i < j ? this.#rct[j][i] : this.#rct[i][j];
    }
    // Check for consistency between the current variable and one future variable, and prune elements of the domain that are inconsistent (when there is one unassigned variable in the scope of the constraint).
    #checkForwardConsistency(level, x, d, dp, c) {
        for(let i = 0, n = d.size(); i < n; ++i){
            if (dp.isPruned(i)) continue;
            x.assign(d.at(i));
            if (c.degree() <= this.#minDeg) dp.prune(i, level);
        }
        x.clear();
        return !dp.isEmpty(); // Failure if the domain of one of the future variables is empty.
    }
    // Check for consistency between the current variable and one future variable, and prune elements of the domain that are inconsistent (when there are two unassigned variables in the scope of the constraint).
    #checkForwardConsistency2(level, x_i, d_i, dp_i, c) {
        let x_j = null;
        for (const x of c)if (x.isEmpty() && x !== x_i) {
            x_j = x;
            break;
        }
        const d_j = x_j.domain();
        const dp_j = this.#dps[x_j.index()];
        loop_i: for(let i = 0, ni = d_i.size(); i < ni; ++i){
            if (dp_i.isPruned(i)) continue;
            x_i.assign(d_i.at(i)); // Tentative assignment to x_i
            for(let j = 0, nj = d_j.size(); j < nj; ++j){
                if (dp_j.isPruned(j)) continue;
                x_j.assign(d_j.at(j)); // Tentative assignment to x_j
                if (this.#minDeg < c.degree()) continue loop_i; // Tentative assignment to x_i was OK -> next tentative assignment.
            }
            dp_i.prune(i, level); // It is not a solution when it is 'smaller than or equals'.
        }
        x_j.clear();
        x_i.clear();
        return !dp_i.isEmpty(); // Succeeds if the domain di of the future variable is not empty.
    }
    // Check for consistency between the current variable and one future variable, and prune elements of the domain that are inconsistent (when there are three unassigned variables in the scope of the constraint).
    #checkForwardConsistency3(level, x_i, d_i, dp_i, c) {
        let x_j = null;
        let x_k = null;
        for (const x of c)if (x.isEmpty() && x !== x_i) {
            if (x_j === null) x_j = x;
            else {
                x_k = x;
                break;
            }
        }
        const d_j = x_j.domain();
        const d_k = x_k.domain();
        const dp_j = this.#dps[x_j.index()];
        const dp_k = this.#dps[x_k.index()];
        loop_i: for(let i = 0, ni = d_i.size(); i < ni; ++i){
            if (dp_i.isPruned(i)) continue;
            x_i.assign(d_i.at(i)); // Tentative assignment to x_i
            for(let j = 0, nj = d_j.size(); j < nj; ++j){
                if (dp_j.isPruned(j)) continue;
                x_j.assign(d_j.at(j)); // Tentative assignment to x_j
                for(let k = 0, nk = d_k.size(); k < nk; ++k){
                    if (dp_k.isPruned(k)) continue;
                    x_k.assign(d_k.at(k)); // Tentative assignment to x_k
                    if (this.#minDeg < c.degree()) continue loop_i; // Tentative assignment to x_i was OK -> next tentative assignment.
                }
            }
            dp_i.prune(i, level); // It is not a solution when it is 'smaller than or equals'.
        }
        x_k.clear();
        x_j.clear();
        x_i.clear();
        return !dp_i.isEmpty(); // Succeeds if the domain di of the future variable is not empty.
    }
    // In the case of polynomial constraints and when there are four or more unassigned variables, all combinations of assignments of unassigned variables are examined and pruned.
    #checkForwardConsistencyN(level, x_i, d_i, dp_i, c, emptySize) {
        const x_ = new Array(emptySize - 1);
        let j = 0;
        for (const x of c)if (x.isEmpty() && x !== x_i) x_[j++] = x;
        const indexes = new Array(x_.length);
        loop_i: for(let i = 0, n = d_i.size(); i < n; ++i){
            if (dp_i.isPruned(i)) continue;
            x_i.assign(d_i.at(i)); // Tentative assignment to x_i
            indexes.fill(0);
            comLoop: while(true){
                let hidden = false;
                for(let k = 0; k < x_.length; ++k){
                    const d_k = x_[k].domain();
                    const dp_k = this.#dps[x_[k].index()];
                    if (dp_k.isPruned(indexes[k])) {
                        hidden = true;
                        break;
                    }
                    x_[k].assign(d_k.at(indexes[k]));
                }
                if (!hidden) {
                    if (this.#minDeg < c.degree()) continue loop_i; // Tentative assignment to x_i was OK -> next tentative assignment.
                }
                for(let k = 0; k < x_.length; ++k){
                    indexes[k] += 1;
                    if (indexes[k] < x_[k].domain().size()) break;
                    indexes[k] = 0;
                    if (k === x_.length - 1) break comLoop;
                }
            }
            dp_i.prune(i, level);
        }
        for (const x of x_)x.clear();
        x_i.clear();
        return !dp_i.isEmpty(); // Succeeds if the domain di of the future variable is not empty.
    }
    // Checks to see if the current variable assignment makes the degree of the past variable worse than the current worst degree.
    #getBackwardConsistency(x) {
        let min = Number.MAX_VALUE;
        this.#checkedCs.clear(); // Reuse.
        for (const x_i of this.#xs){
            if (x_i === x || x_i.isEmpty()) continue;
            const cs = this.#getConstraintsBetween(x.index(), x_i.index());
            for (const c of cs)if (!this.#checkedCs.has(c)) {
                const ev = c.degree();
                if (0 <= ev /* ev !== UNDEFINED */  && ev < min) min = ev;
                this.#checkedCs.add(c);
            }
        }
        return min;
    }
}

},{"../misc/assignment-list":"7XBf8","../misc/domain-pruner":"9ljra","../../util/problems":"kAwtv","../solver":"dvfQo","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9ljra":[function(require,module,exports,__globalThis) {
/**
 * This class holds the branch pruning states for a domain.
 *
 * @author Takuto Yanagida
 * @version 2025-01-22
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "DomainPruner", ()=>DomainPruner);
// -----------------------------------------------------------------------------
/**
 * Returns the index of the variable with the minimum remaining values (MRV).
 * @param xs An array of variables.
 * @param dps An array of domain pruners.
 * @return The index of the variable with the minimum remaining values.
 */ parcelHelpers.export(exports, "indexOfVariableWithMRV", ()=>indexOfVariableWithMRV);
class DomainPruner {
    static #UNPRUNED = Number.MIN_SAFE_INTEGER;
    #prunedLvs;
    #prunedSize;
    /**
	 * Generates a class that holds branch pruning states for a domain.
	 * @param size Size of the corresponding domain
	 */ constructor(size){
        this.#prunedSize = 0;
        this.#prunedLvs = new Array(size);
        this.#prunedLvs.fill(DomainPruner.#UNPRUNED);
    }
    /**
	 * Returns the size of the erased element.
	 * @return Size of the erased element.
	 */ prunedSize() {
        return this.#prunedSize;
    }
    /**
	 * Erases the element at the specified index.
	 * @param index Index.
	 * @param level Level.
	 */ prune(index, level) {
        if (this.#prunedLvs[index] === DomainPruner.#UNPRUNED) ++this.#prunedSize;
        else throw new Error();
        this.#prunedLvs[index] = level;
    }
    /**
	 * Returns whether the element is empty or not.
	 * Returns true if all elements have been erased.
	 * @return True if empty.
	 */ isEmpty() {
        return this.#prunedLvs.length === this.#prunedSize;
    }
    /**
	 * Returns whether or not the element at the specified index has been erased.
	 * @param index Index.
	 * @return True if erased.
	 */ isPruned(index) {
        return this.#prunedLvs[index] !== DomainPruner.#UNPRUNED;
    }
    /**
	 * Restores the value that had been erased, by specifying a level.
	 * @param level Level
	 */ recover(level) {
        for(let i = 0; i < this.#prunedLvs.length; ++i)if (this.#prunedLvs[i] === level) {
            this.#prunedLvs[i] = DomainPruner.#UNPRUNED;
            --this.#prunedSize;
        }
    }
    /**
	 * Restores all erased values.
	 */ recoverAll() {
        this.#prunedLvs.fill(DomainPruner.#UNPRUNED);
        this.#prunedSize = 0;
    }
}
function indexOfVariableWithMRV(xs, dps) {
    let index = 0;
    let size = Number.MAX_VALUE;
    for(let i = 0; i < xs.length; ++i){
        const x = xs[i];
        if (!x.isEmpty()) continue;
        const d = x.domain();
        const s = d.size() - dps[x.index()].prunedSize();
        if (s < size) {
            size = s;
            index = i;
        }
    }
    return index;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kAwtv":[function(require,module,exports,__globalThis) {
/**
 * Utility class for constraint satisfaction problems.
 *
 * @author Takuto Yanagida
 * @version 2025-01-22
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Create a table that caches constraints between two variables.
 * @param pro A problem.
 * @param xs  An array of variables.
 * @return A table that caches constraints between two variables.
 */ parcelHelpers.export(exports, "createRelatedConstraintTable", ()=>createRelatedConstraintTable);
// -----------------------------------------------------------------------------
/**
 * Calculates the average path length.
 * @param p A problem.
 * @return Average path length.
 */ parcelHelpers.export(exports, "averagePathLengths", ()=>averagePathLengths);
/**
 * Calculates the average path length for a given variable.
 * @param p A problem.
 * @param x A variable of the problem.
 * @return Average path length.
 */ parcelHelpers.export(exports, "averagePathLength", ()=>averagePathLength);
// -----------------------------------------------------------------------------
/**
 * Gets an array containing all domains.
 * @param p A problem.
 * @return Array of domains.
 */ parcelHelpers.export(exports, "domains", ()=>domains);
/**
 * Set up all domains.
 * @param p A problem.
 * @param ds Array of domains.
 */ parcelHelpers.export(exports, "setDomains", ()=>setDomains);
// -----------------------------------------------------------------------------
/**
 * Returns the array of possible satisfaction degree values for all unary constraints.
 * @param p A problem.
 * @param degrees Array of degree values.
 * @return The array.
 */ parcelHelpers.export(exports, "possibleDegreesOfUnaryConstraints", ()=>possibleDegreesOfUnaryConstraints);
// -----------------------------------------------------------------------------
/**
 * Returns a view of the fuzzy constraint satisfaction problem as a crisp constraint satisfaction problem.
 * The relations and domains of the specified fuzzy constraint satisfaction problem are reused, but the other elements are newly generated.
 * Note: Assignments to variables and changes to domains of the view are reflected in the variables of the original problem.
 * @param p A fuzzy constraint satisfaction problem.
 * @param threshold The threshold of constraint satisfaction degree. A constraint is considered satisfied when the constraint satisfaction degree is greater than or equal to this value.
 * @return A crisp constraint satisfaction problem.
 */ parcelHelpers.export(exports, "toViewAsCrispProblem", ()=>toViewAsCrispProblem);
var _problem = require("../problem/problem");
var _variable = require("../problem/variable");
var _variables = require("./variables");
var _relations = require("./relations");
function createRelatedConstraintTable(pro, xs) {
    const rct = [];
    for(let j = 0; j < xs.length; ++j){
        rct.push(new Array(xs.length));
        for(let i = 0; i < xs.length; ++i)if (i < j) rct[j][i] = pro.constraintsBetween(xs[i], xs[j]);
    }
    return rct;
}
function averagePathLengths(p) {
    const ls = new Array(p.variableSize());
    for (const x of p.variables())ls[x.index()] = averagePathLength(p, x);
    return ls;
}
function averagePathLength(p, x) {
    const ls = new Array(p.variableSize());
    ls.fill(Number.MAX_VALUE);
    const xs = new Set();
    xs.add(x);
    ls[x.index()] = 0;
    getPathLength(p, x, ls, 0, xs);
    let connectedSize = 0;
    let sum = 0;
    for(let i = 0; i < ls.length; ++i)if (ls[i] !== Number.MAX_VALUE && i !== x.index()) {
        ++connectedSize;
        sum += ls[i];
    }
    if (0 === connectedSize) return 0;
    return sum / connectedSize;
}
function getPathLength(p, x, length, baseLength, xo) {
    const xn = [];
    for (const c of x){
        for (const xi of c)if (length[xi.index()] === Number.MAX_VALUE) {
            xn.push(xi);
            length[xi.index()] = baseLength + 1;
        }
    }
    for (const xi of xn)xo.add(xi);
    for (const xi of xn)getPathLength(p, xi, length, baseLength + 1, xo);
}
function domains(p) {
    const ds = [];
    for (const x of p.variables())ds.push(x.domain());
    return ds;
}
function setDomains(p, ds) {
    for(let i = 0; i < ds.length; ++i)p.variableAt(i).domain(ds[i]);
}
function possibleDegreesOfUnaryConstraints(p, degrees) {
    for (const c of p.constraints()){
        if (c.size() !== 1) continue;
        const x = c.at(0);
        const origV = x.value(); // Save the value.
        for (const v of x.domain()){
            x.assign(v);
            degrees.push(c.degree());
        }
        x.assign(origV); // Restore the value.
    }
    return degrees;
}
function toViewAsCrispProblem(p, threshold) {
    const cp = new CrispFuzzyProblem();
    for (const x of p.variables())cp.createVariable(x);
    for (const c of p.constraints()){
        const xs = [];
        for (const x of c)xs.push(cp.variableAt(x.index()));
        cp.createConstraint((0, _relations.createCrispFuzzyRelation)(c.relation(), threshold), xs);
    }
    return cp;
}
class CrispFuzzyProblem extends (0, _problem.Problem) {
    createVariable(d_x, _value = null, _name = '') {
        if (d_x instanceof (0, _variable.Variable)) {
            const iv = new (0, _variables.ImaginaryVariable)(d_x);
            this.addVariable(iv);
            return iv;
        }
        throw new RangeError();
    }
}

},{"../problem/problem":"4Nvsk","../problem/variable":"1Z7Sx","./variables":"1D2XX","./relations":"6dYYD","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1D2XX":[function(require,module,exports,__globalThis) {
/**
 * Classes of utility variables.
 *
 * @author Takuto Yanagida
 * @version 2025-01-24
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Class that represents an observable variable.
 */ parcelHelpers.export(exports, "ObservableVariable", ()=>ObservableVariable);
/**
 * Class that represents an imaginary variable.
 */ parcelHelpers.export(exports, "ImaginaryVariable", ()=>ImaginaryVariable);
var _variable = require("../problem/variable");
class ObservableVariable extends (0, _variable.Variable) {
    #observer;
    // Called only from Problem.
    constructor(d, observer){
        super(d);
        this.#observer = observer;
    }
    /**
	 * Assign a value.
	 * @param v Value.
	 */ assign(v) {
        super.assign(v);
        if (this.#observer) this.#observer(this, v);
    }
}
class ImaginaryVariable extends (0, _variable.Variable) {
    #orig;
    constructor(x){
        super(x.domain());
        this.#orig = x;
        this.setName(x.name());
        this.assign(x.value());
    }
    assign(v) {
        this.#orig.assign(v);
    }
    domain(d) {
        if (d === undefined) return this.#orig.domain();
        else this.#orig.domain(d);
    }
    value() {
        return this.#orig.value();
    }
}

},{"../problem/variable":"1Z7Sx","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6dYYD":[function(require,module,exports,__globalThis) {
/**
 * Relations.
 *
 * @author Takuto Yanagida
 * @version 2025-01-22
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Crisp relations defined by tables.
 */ parcelHelpers.export(exports, "createCrispTabledRelation", ()=>createCrispTabledRelation);
/**
 * Fuzzy relations defined by tables.
 */ parcelHelpers.export(exports, "createFuzzyTabledRelation", ()=>createFuzzyTabledRelation);
// -----------------------------------------------------------------------------
parcelHelpers.export(exports, "createCrispFuzzyRelation", ()=>createCrispFuzzyRelation);
function createCrispTabledRelation(elms, doms) {
    const es = [
        ...elms
    ];
    const ds = [
        ...doms
    ];
    const ms = new Array(doms.length);
    let m = 1;
    for(let i = ms.length - 1; i >= 0; --i){
        ms[i] = m;
        m *= ds[i].size();
    }
    return (...vs)=>{
        if (ms.length !== vs.length) throw new RangeError();
        let index = 0;
        for(let i = 0; i < ms.length; ++i)index += ms[i] * ds[i].indexOf(vs[i]);
        return es[index];
    };
}
function createFuzzyTabledRelation(elms, doms) {
    const es = [
        ...elms
    ];
    const ds = [
        ...doms
    ];
    const ms = new Array(doms.length);
    let m = 1;
    for(let i = ms.length - 1; i >= 0; --i){
        ms[i] = m;
        m *= ds[i].size();
    }
    return (...vs)=>{
        if (ms.length !== vs.length) throw new RangeError();
        let index = 0;
        for(let i = 0; i < ms.length; ++i)index += ms[i] * ds[i].indexOf(vs[i]);
        return es[index];
    };
}
function createCrispFuzzyRelation(fn, th) {
    return (...vs)=>{
        const d = fn(...vs);
        return 0 < d && d < th ? 0 : d;
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"JK6En":[function(require,module,exports,__globalThis) {
/**
 * Class implements a solver using the breakout method for fuzzy CSP.
 *
 * @author Takuto Yanagida
 * @version 2025-01-22
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "FuzzyBreakout", ()=>FuzzyBreakout);
var _assignmentList = require("../misc/assignment-list");
var _solver = require("../solver");
class FuzzyBreakout extends (0, _solver.Solver) {
    #isRandom;
    #ws;
    /**
	 * Generates a solver.
	 */ constructor(){
        super(), this.#isRandom = true;
    }
    /**
	 * Sets the randomness of the algorithm.
	 * Enabling randomness reduces the risk of local solutions, but makes the solution unrepeatable.
	 * @param flag Whether the randomness is enabled.
	 */ setRandomness(flag) {
        this.#isRandom = flag;
    }
    /**
	 * {@override}
	 */ name() {
        return 'Fuzzy Breakout';
    }
    /**
	 * {@override}
	 */ preprocess() {
        this.#ws = new Array(this.pro.constraintSize());
        this.#ws.fill(1);
        for (const x of this.pro.variables())if (x.isEmpty()) x.assign(x.domain().at(0));
        this.monitor.initialize();
    }
    /**
	 * {@override}
	 */ exec() {
        const defEv = this.pro.degree();
        const sol = new (0, _assignmentList.AssignmentList)();
        let solEv = defEv;
        const canList = new (0, _assignmentList.AssignmentList)();
        let ret = null;
        while(true){
            const [cs, ev] = this.pro.constraintsWithDegree();
            this.monitor.outputDebugString(`Evaluation: ${ev}`);
            if (solEv < ev) {
                sol.setProblem(this.pro);
                solEv = ev;
                if (this.monitor.solutionFound(sol, solEv)) return true;
            }
            if (null !== (ret = this.monitor.check(ev))) break;
            this.#next(cs, canList);
        }
        if (false === ret && !this.monitor.isTargetAssigned() && defEv < solEv) {
            sol.apply();
            ret = true;
        }
        return ret;
    }
    #next(cs, canList) {
        this.#findCandidates(this.#listTargetVariables(cs), canList);
        if (0 < canList.size()) {
            const a = this.#isRandom ? canList.random() : canList.at(0);
            a.apply();
            canList.clear();
            this.monitor.outputDebugString('\t' + a);
        } else {
            for (const c of cs)this.#ws[c.index()] += 1;
            this.monitor.outputDebugString('Breakout');
        }
    }
    #findCandidates(tarXs, canList) {
        let maxDiff = 0;
        for (const x of tarXs){
            const x_v = x.value(); // Save the value
            let nowEv = 0;
            for (const c of x)nowEv += (1 - c.degree()) * this.#ws[c.index()];
            out: for (const v of x.domain()){
                if (x_v === v) continue;
                x.assign(v);
                let diff = nowEv;
                for (const c of x){
                    diff -= (1 - c.degree()) * this.#ws[c.index()];
                    // If the improvement is less than the previous improvement, try the next variable.
                    if (diff < maxDiff) continue out;
                }
                if (maxDiff < diff) {
                    maxDiff = diff;
                    canList.clear();
                    canList.addVariable(x, v);
                } else if (maxDiff !== 0) canList.addVariable(x, v);
            }
            x.assign(x_v); // Restore the value.
        }
    }
    #listTargetVariables(tarCs) {
        const xs = new Set();
        for (const c of tarCs)for (const x of c)xs.add(x);
        return Array.from(xs);
    }
}

},{"../misc/assignment-list":"7XBf8","../solver":"dvfQo","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6vCMZ":[function(require,module,exports,__globalThis) {
/**
 * This class implements the forward checking method for fuzzy CSPs.
 * The minimum-remaining-values (MRV) heuristic can also be used by specifying the option.
 *
 * @author Takuto Yanagida
 * @version 2025-01-23
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "FuzzyForwardChecking", ()=>FuzzyForwardChecking);
var _assignmentList = require("../misc/assignment-list");
var _domainPruner = require("../misc/domain-pruner");
var _problems = require("../../util/problems");
var _solver = require("../solver");
class FuzzyForwardChecking extends (0, _solver.Solver) {
    #xs;
    #rct;
    #dps;
    #sol;
    #minDeg;
    #globalRet;
    #useMRV;
    /**
	 * Generates a solver.
	 */ constructor(){
        super(), this.#useMRV = true;
    }
    /**
	 * Specify whether to use the minimum-remaining-values (MRV) heuristic.
	 * Use of MRV may increase processing time for some problems.
	 * Default is false.
	 * @param flag Use MRV if true.
	 */ setUsingMinimumRemainingValuesHeuristics(flag) {
        this.#useMRV = flag;
    }
    /**
	 * {@override}
	 */ name() {
        return 'Fuzzy Forward Checking';
    }
    /**
	 * {@override}
	 */ preprocess() {
        this.#xs = [
            ...this.pro.variables()
        ];
        this.#rct = (0, _problems.createRelatedConstraintTable)(this.pro, this.#xs);
        this.#dps = Array.from(this.#xs, (x)=>new (0, _domainPruner.DomainPruner)(x.domain().size()));
        this.#sol = new (0, _assignmentList.AssignmentList)();
        this.#minDeg = 0;
        this.monitor.initialize();
    }
    /**
	 * {@override}
	 */ exec() {
        let ret = null;
        while(ret === null){
            this.#globalRet = false;
            this.pro.clearAllVariables();
            ret = this.#branch(0);
            this.#sol.apply();
        }
        return ret === true;
    }
    #branch(level, curDeg = 1) {
        if (level === this.pro.variableSize()) {
            const ev = this.pro.degree();
            this.#sol.setProblem(this.pro);
            this.monitor.outputDebugString('\t' + `Evaluation ${ev}`);
            if (this.#minDeg < ev) {
                this.#minDeg = ev;
                this.#globalRet = true;
                if (this.monitor.solutionFound(this.#sol, ev)) return true; // Success.
            }
            return this.monitor.check(ev);
        }
        let ret = null;
        if (null !== (ret = this.monitor.check())) return ret; // Success or failure.
        const x = this.#xs[this.#useMRV ? (0, _domainPruner.indexOfVariableWithMRV)(this.#xs, this.#dps) : level];
        const d = x.domain();
        const dp = this.#dps[x.index()];
        for(let i = 0, n = d.size(); i < n; ++i){
            if (dp.isPruned(i)) continue;
            x.assign(d.at(i));
            const deg = Math.min(curDeg, this.#getWorstDegreeAround(x));
            if (deg <= this.#minDeg) continue;
            if (this.#checkForward(level, x)) {
                ret = this.#branch(level + 1, deg);
                if (null !== ret || this.#globalRet) break;
            }
            for (const dp of this.#dps)dp.recover(level);
        }
        if (ret === null) {
            for (const dp of this.#dps)dp.recover(level);
            x.clear();
        }
        return ret;
    }
    // Checks for possible assignment to a future variable from the current variable assignment.
    #checkForward(level, x) {
        for (const x_i of this.#xs){
            if (!x_i.isEmpty()) continue; // If it is a past or present variable.
            const cs = this.#getConstraintsBetween(x.index(), x_i.index());
            const dp_i = this.#dps[x_i.index()];
            const d_i = x_i.domain();
            for (const c of cs){
                if (c.emptySize() !== 1) continue;
                if (!this.#checkForwardConsistency(level, x_i, d_i, dp_i, c)) return false;
            }
        }
        return true;
    }
    // Retrieves an array of constraints from a table that caches constraints between two variables.
    #getConstraintsBetween(i, j) {
        return i < j ? this.#rct[j][i] : this.#rct[i][j];
    }
    // Check for consistency between the current variable and one future variable, and prune elements of the domain that are inconsistent (when there is one unassigned variable in the scope of the constraint).
    #checkForwardConsistency(level, x, d, dp, c) {
        for(let i = 0, n = d.size(); i < n; ++i){
            if (dp.isPruned(i)) continue;
            x.assign(d.at(i));
            if (c.degree() <= this.#minDeg) dp.prune(i, level);
        }
        x.clear();
        return !dp.isEmpty(); // Failure if the domain of one of the future variables is empty.
    }
    // Find the number of constraint violations that have increased due to the current value of the variable x.
    #getWorstDegreeAround(x) {
        let min = Number.MAX_VALUE;
        for (const c of x){
            const ev = c.degree();
            if (0 <= ev /* ev !== UNDEFINED */  && ev < min) min = ev;
        }
        return min;
    }
}

},{"../misc/assignment-list":"7XBf8","../misc/domain-pruner":"9ljra","../../util/problems":"kAwtv","../solver":"dvfQo","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ezeI0":[function(require,module,exports,__globalThis) {
/**
 * This class implements fuzzy GENET.
 * CSPs and FCSPs (but only Binary (F)CSPs) is supported.
 *
 * @author Takuto Yanagida
 * @version 2025-01-24
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "FuzzyGENET", ()=>FuzzyGENET);
var _assignmentList = require("../misc/assignment-list");
var _random = require("../misc/random");
var _solver = require("../solver");
class FuzzyGENET extends (0, _solver.Solver) {
    #clusters;
    #connections;
    #thDeg;
    /**
	 * Generates a solver.
	 */ constructor(){
        super();
    }
    /**
	 * Sets a threshold.
	 *
	 * @param threshold A threshold
	 */ setThreshold(threshold) {
        this.#thDeg = threshold;
    }
    /**
	 * {@override}
	 */ name() {
        return 'Fuzzy GENET';
    }
    /**
	 * {@override}
	 */ preprocess() {
        this.#clusters = [];
        this.#connections = [];
        this.#thDeg = 1;
        if (!this.#createNetwork()) throw new Error();
        this.monitor.initialize();
    }
    /**
	 * {@override}
	 */ exec() {
        const order = [
            ...Array(this.#clusters.length).keys()
        ];
        const defEv = this.pro.degree();
        const sol = new (0, _assignmentList.AssignmentList)();
        let solEv = defEv;
        let ret = null;
        while(true){
            const ev = this.pro.degree();
            this.monitor.outputDebugString(`Evaluation: ${ev}`);
            if (solEv < ev) {
                sol.setProblem(this.pro);
                solEv = ev;
                if (this.monitor.solutionFound(sol, solEv)) return true;
            }
            if (null !== (ret = this.monitor.check(ev))) break;
            this.#next(order);
        }
        if (false === ret && !this.monitor.isTargetAssigned() && defEv < solEv) {
            sol.apply();
            ret = true;
        }
        return ret;
    }
    #createNetwork() {
        this.monitor.outputDebugString('Start of Network Generation');
        const cons = [];
        for (const x of this.pro.variables()){
            if (x.domain().size() === 0) return false;
            this.#clusters.push(new Cluster(x));
        }
        for (const c of this.pro.constraints())if (c.size() === 1) {
            const x = c.at(0);
            const cl = this.#clusters[x.index()];
            for (const n of cl){
                const origV = x.value(); // Save the value.
                x.assign(n._value);
                if (c.degree() <= this.#thDeg) cons.push(new Connection(c, n));
                x.assign(origV); // Restore the value.
            }
        } else {
            const x1 = c.at(0);
            const x2 = c.at(1);
            const cl_f = this.#clusters[x1.index()];
            const cl_s = this.#clusters[x2.index()];
            for (const n_f of cl_f){
                const origV1 = x1.value(); // Save the value.
                x1.assign(n_f._value);
                for (const n_s of cl_s){
                    const origV2 = x2.value(); // Save the value.
                    x2.assign(n_s._value);
                    if (c.degree() <= this.#thDeg) cons.push(new Connection(c, n_f, n_s));
                    x2.assign(origV2); // Restore the value.
                }
                x1.assign(origV1); // Restore the value.
            }
        }
        this.#connections = cons;
        this.monitor.outputDebugString('End of Network Generation');
        return true;
    }
    #next(order) {
        let mod = false;
        for (const i of this.#shuffle(order))if (this.#clusters[i].setActivityMaximumInput()) mod = true; // Turn on the node with the largest input in each cluster
        if (!mod) {
            for (const con of this.#connections)con.refreshWeight(); // Update weights for all connections
            this.monitor.outputDebugString('\tRefresh weights');
        } else for (const clu of this.#clusters)clu.applyToVariable();
    }
    #shuffle(is) {
        for(let i = is.length - 1; 0 < i; --i){
            const j = (0, _random.rand)(i + 1);
            [is[i], is[j]] = [
                is[j],
                is[i]
            ];
        }
        return is;
    }
}
class Cluster {
    #x;
    #index;
    #maxNs;
    constructor(x){
        this.#index = 0;
        this.#maxNs = [];
        this._ns = [];
        this.#x = x;
        for (const v of x.domain())this._ns.push(new Neuron(v));
        this.#setActivity((0, _random.rand)(this._ns.length));
    }
    #setActivity(index) {
        for (const n of this._ns)n._isActive = false;
        this._ns[index]._isActive = true;
        this.#index = index;
    }
    applyToVariable() {
        this.#x.assign(this._ns[this.#index]._value);
    }
    // Turn on the node with the largest input.
    setActivityMaximumInput() {
        this.#maxNs.length = 0;
        let max = Number.NEGATIVE_INFINITY;
        let alreadyOn = false;
        for(let i = 0; i < this._ns.length; ++i){
            const input = this._ns[i].getInput();
            if (max <= input) {
                if (max < input) {
                    max = input;
                    this.#maxNs.length = 0;
                    alreadyOn = false;
                }
                this.#maxNs.push(i);
                if (this.#index === i) alreadyOn = true;
            }
        }
        if (alreadyOn || 0 === this.#maxNs.length) return false;
        this.#setActivity(this.#maxNs[(0, _random.rand)(this.#maxNs.length)]);
        return true;
    }
    [Symbol.iterator]() {
        return this._ns[Symbol.iterator]();
    }
}
class Connection {
    #c;
    #n0;
    #n1;
    // Order of neurons must be the same as the order of variables that the constraint has.
    constructor(c, first, second = null){
        this.#c = c;
        this.#n0 = first;
        this.#n1 = second;
        this._w = c.degree() - 1;
        this.#n0.addConnection(this);
        if (this.#n1) this.#n1.addConnection(this);
    }
    getNeuron(self) {
        if (self === this.#n0) return this.#n1;
        if (self === this.#n1) return this.#n0;
        return null;
    }
    refreshWeight() {
        if (!this.#n0._isActive || this.#n1 !== null && !this.#n1._isActive) return;
        const r = this.#c.relation();
        if (this.#c.size() === 1) this._w += r(this.#n0._value) - 1;
        else this._w += r(this.#n0._value, this.#n1._value) - 1;
    }
}
class Neuron {
    #connections;
    constructor(value){
        this.#connections = [];
        this._isActive = false // Direct reference (read, write) allowed.
        ;
        this._value = value;
    }
    addConnection(c) {
        this.#connections.push(c);
    }
    getInput() {
        let ret = 0;
        for (const c of this.#connections){
            const n = c.getNeuron(this); // If n is null, then the unary constraint.
            ret += c._w * (n === null || n._isActive ? 1 : 0);
        }
        return ret;
    }
}

},{"../misc/assignment-list":"7XBf8","../misc/random":"5CZO5","../solver":"dvfQo","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5QD09":[function(require,module,exports,__globalThis) {
/**
 * This class implements the SRS3 algorithm.
 *
 * @author Takuto Yanagida
 * @version 2025-01-24
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "SRS3", ()=>SRS3);
var _assignmentList = require("../misc/assignment-list");
var _random = require("../misc/random");
var _solver = require("../solver");
class SRS3 extends (0, _solver.Solver) {
    #ws;
    #closedList;
    #openList;
    #nodes;
    #neighbors;
    #isRandom;
    /**
	 * Generates a solver.
	 */ constructor(){
        super(), this.#isRandom = true;
    }
    /**
	 * Sets the randomness of the algorithm.
	 * Enabling randomness reduces the risk of falling into a local solution, but makes the solution unrepeatable.
	 * @param flag If true, randomness is enabled.
	 */ setRandomness(flag) {
        this.#isRandom = flag;
    }
    /**
	 * {@override}
	 */ name() {
        return 'SRS3';
    }
    /**
	 * {@override}
	 */ preprocess() {
        this.#ws = new Array(this.pro.constraintSize());
        this.#ws.fill(1);
        this.#closedList = new Set();
        this.#openList = new Set();
        this.#nodes = [];
        this.#neighbors = [];
        for (const c of this.pro.constraints()){
            this.#nodes.push(new TreeNode(c));
            this.#neighbors.push(null);
        }
        for (const x of this.pro.variables())if (x.isEmpty()) x.assign(x.domain().at(0));
        this.monitor.initialize();
    }
    /**
	 * {@override}
	 */ exec() {
        const defEv = this.pro.degree();
        const sol = new (0, _assignmentList.AssignmentList)();
        let solEv = defEv;
        let ret = null;
        while(true){
            const [cs, ev] = this.pro.constraintsWithDegree();
            this.monitor.outputDebugString(`Evaluation: ${ev}`);
            if (solEv < ev) {
                sol.setProblem(this.pro);
                solEv = ev;
                if (this.monitor.solutionFound(sol, solEv)) return true;
            }
            if (null !== (ret = this.monitor.check(ev))) break;
            for (const tn of this.#nodes)tn.clear();
            const c_stars = new Set();
            for (const c of cs){
                const tn = this.#nodes[c.index()];
                c_stars.add(tn);
            }
            this.#srs(c_stars);
        }
        if (false === ret && !this.monitor.isTargetAssigned() && defEv < solEv) {
            sol.apply();
            ret = true;
        }
        return ret;
    }
    #srs(c_stars) {
        this.monitor.outputDebugString('SRS');
        this.#closedList.clear();
        this.#openList.clear();
        for (const tn of c_stars)this.#openList.add(tn);
        while(c_stars.size && this.#openList.size){
            const node = this.#getElementFromSet(this.#openList);
            this.#openList.delete(node);
            if (!this.#repair(node)) this.#spread(node);
            else if (c_stars.delete(node)) ;
            else if (node.parent() && this.#repair(node.parent())) this.#shrink(node, c_stars); // When its improvement leads to the improvement of its parents
            else this.#spread(node);
        }
        return 0 === c_stars.size;
    }
    #spread(tn) {
        this.monitor.outputDebugString('Spread');
        this.#closedList.add(tn);
        for (const n of this.#getNeighbors(tn))// For constraints that are not included in Open or Closed.
        if (!this.#closedList.has(n) && !this.#openList.has(n)) {
            n.clear();
            tn.append(n);
            this.#openList.add(n);
        }
    }
    #repair(tn) {
        this.monitor.outputDebugString('Repair');
        const c0 = tn.constraint();
        let tn0 = tn;
        do this.#ws[tn0.constraint().index()] += 1;
        while (tn0 = tn0.parent());
        const defEv0 = c0.degree(); // Target c0 should certainly be an improvement over this.
        const canList = new (0, _assignmentList.AssignmentList)();
        let maxDiff = 0;
        for (const x of c0){
            const x_v = x.value(); // Save the value
            let nowEv = 0;
            for (const c of x)nowEv += (1 - c.degree()) * this.#ws[c.index()];
            out: for (const v of x.domain()){
                if (x_v === v) continue;
                x.assign(v);
                if (c0.degree() <= defEv0) continue;
                let diff = nowEv;
                for (const c of x){
                    diff -= (1 - c.degree()) * this.#ws[c.index()];
                    // If the improvement is less than the previous improvement, try the next variable.
                    if (diff < maxDiff) continue out;
                }
                if (maxDiff < diff) {
                    maxDiff = diff;
                    canList.clear();
                    canList.addVariable(x, v);
                } else if (maxDiff !== 0) canList.addVariable(x, v);
            }
            x.assign(x_v); // Restore the value
        }
        if (0 < canList.size()) {
            const a = this.#isRandom ? canList.random() : canList.at(0);
            a.apply();
            this.monitor.outputDebugString('\t' + a);
            return true;
        }
        return false;
    }
    #shrink(node, c_stars) {
        this.monitor.outputDebugString('Shrink');
        let cur = node;
        let curIsRemoved = false;
        while(true){
            cur = cur.parent();
            if (c_stars.delete(cur)) {
                curIsRemoved = true;
                break;
            }
            if (!cur.parent() || !this.#repair(cur.parent())) break;
        }
        const temp = [];
        cur.getDescendants(temp); // temp contains node.
        cur.clear(); // Prepare for reuse
        for (const n of temp){
            this.#openList.delete(n);
            this.#closedList.delete(n);
        }
        if (!curIsRemoved) this.#openList.add(cur);
    }
    #getNeighbors(tn) {
        const c = tn.constraint();
        const i = c.index();
        if (this.#neighbors[i] === null) {
            const ns = [];
            for (const d of c.neighbors())ns.push(this.#nodes[d.index()]);
            this.#neighbors[i] = ns;
        }
        return this.#neighbors[i];
    }
    #getElementFromSet(set) {
        const ms = this.#selectLightestNode(this.#selectNearestNode(set));
        return this.#isRandom ? ms[(0, _random.rand)(ms.length)] : ms[0];
    }
    #selectLightestNode(set) {
        let curW = Number.MAX_VALUE;
        let ms = [];
        for (const tn of set){
            const w = this.#ws[tn.constraint().index()];
            if (w < curW) {
                curW = w;
                ms.length = 0;
                ms.push(tn);
            } else if (w === curW) ms.push(tn);
        }
        return ms;
    }
    #selectNearestNode(set) {
        let curD = Number.MAX_VALUE;
        let ms = [];
        for (const tn of set){
            const d = tn.depth();
            if (d < curD) {
                curD = d;
                ms.length = 0;
                ms.push(tn);
            } else if (d === curD) ms.push(tn);
        }
        return ms;
    }
}
class TreeNode {
    #c;
    #depth;
    #parent;
    #children;
    constructor(c){
        this.#depth = 0;
        this.#parent = null;
        this.#children = [];
        this.#c = c;
    }
    append(tn) {
        tn.#parent = this;
        tn.#depth = this.#depth + 1;
        this.#children.push(tn);
    }
    clear() {
        this.#parent = null;
        this.#depth = 0;
        for (const tn of this.#children)tn.clear();
        this.#children.length = 0;
    }
    constraint() {
        return this.#c;
    }
    depth() {
        return this.#depth;
    }
    parent() {
        return this.#parent;
    }
    getDescendants(tns) {
        tns.push(this);
        for (const tn of this.#children)tn.getDescendants(tns);
    }
}

},{"../misc/assignment-list":"7XBf8","../misc/random":"5CZO5","../solver":"dvfQo","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fSOIG":[function(require,module,exports,__globalThis) {
/**
 * Class implements a solver using the breakout method.
 * Solves a problem as a maximum CSP.
 *
 * @author Takuto Yanagida
 * @version 2025-01-23
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Breakout", ()=>Breakout);
var _assignmentList = require("../misc/assignment-list");
var _solver = require("../solver");
class Breakout extends (0, _solver.Solver) {
    #isRandom;
    #ws;
    /**
	 * Generates a solver.
	 */ constructor(){
        super(), this.#isRandom = true;
    }
    /**
	 * Sets the randomness of the algorithm.
	 * Enabling randomness reduces the risk of local solutions, but makes the solution unrepeatable.
	 * @param flag Whether the randomness is enabled.
	 */ setRandomness(flag) {
        this.#isRandom = flag;
    }
    /**
	 * {@override}
	 */ name() {
        return 'Breakout';
    }
    /**
	 * {@override}
	 */ preprocess() {
        this.#ws = new Array(this.pro.constraintSize());
        this.#ws.fill(1);
        for (const x of this.pro.variables())if (x.isEmpty()) x.assign(x.domain().at(0));
        this.monitor.initialize();
    }
    /**
	 * {@override}
	 */ exec() {
        const defEv = this.pro.ratio();
        const sol = new (0, _assignmentList.AssignmentList)();
        let solEv = defEv;
        const canList = new (0, _assignmentList.AssignmentList)();
        let ret = null;
        while(true){
            const cs = this.pro.violatingConstraints();
            const ev = this.pro.ratio();
            this.monitor.outputDebugString(`Evaluation: ${ev}`);
            if (solEv < ev) {
                sol.setProblem(this.pro);
                solEv = ev;
                if (this.monitor.solutionFound(sol, solEv)) return true;
            }
            if (null !== (ret = this.monitor.check(ev))) break;
            this.#next(cs, canList);
        }
        if (false === ret && !this.monitor.isTargetAssigned() && defEv < solEv) {
            sol.apply();
            ret = true;
        }
        return ret;
    }
    #next(cs, canList) {
        this.#findCandidates(this.#listTargetVariables(cs), canList);
        if (0 < canList.size()) {
            const a = this.#isRandom ? canList.random() : canList.at(0);
            a.apply();
            canList.clear();
            this.monitor.outputDebugString('\t' + a);
        } else {
            for (const c of cs)this.#ws[c.index()] += 1;
            this.monitor.outputDebugString('Breakout');
        }
    }
    #findCandidates(tarXs, canList) {
        let maxDiff = 0;
        for (const x of tarXs){
            const x_v = x.value(); // Save the value
            let nowEv = 0;
            for (const c of x)nowEv += (1 - c.status()) * this.#ws[c.index()];
            out: for (const v of x.domain()){
                if (x_v === v) continue;
                x.assign(v);
                let diff = nowEv;
                for (const c of x){
                    diff -= (1 - c.status()) * this.#ws[c.index()];
                    // If the improvement is less than the previous improvement, try the next variable.
                    if (diff < maxDiff) continue out;
                }
                if (maxDiff < diff) {
                    maxDiff = diff;
                    canList.clear();
                    canList.addVariable(x, v);
                } else if (maxDiff !== 0) canList.addVariable(x, v);
            }
            x.assign(x_v); // Restore the value.
        }
    }
    #listTargetVariables(tarCs) {
        const xs = new Set();
        for (const c of tarCs)for (const x of c)xs.add(x);
        return Array.from(xs);
    }
}

},{"../misc/assignment-list":"7XBf8","../solver":"dvfQo","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gtT5Y":[function(require,module,exports,__globalThis) {
/**
 * This class implements the SRS3 algorithm for crisp CSP.
 * The given crisp CSP is treated as the maximum CSP.
 *
 * @author Takuto Yanagida
 * @version 2025-01-24
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "CrispSRS3", ()=>CrispSRS3);
var _assignmentList = require("../misc/assignment-list");
var _random = require("../misc/random");
var _solver = require("../solver");
class CrispSRS3 extends (0, _solver.Solver) {
    #ws;
    #closedList;
    #openList;
    #nodes;
    #neighbors;
    #isRandom;
    /**
	 * Generates a solver.
	 */ constructor(){
        super(), this.#isRandom = true;
    }
    /**
	 * Sets the randomness of the algorithm.
	 * Enabling randomness reduces the risk of falling into a local solution, but makes the solution unrepeatable.
	 * @param flag If true, randomness is enabled.
	 */ setRandomness(flag) {
        this.#isRandom = flag;
    }
    /**
	 * {@override}
	 */ name() {
        return 'Crisp SRS3';
    }
    /**
	 * {@override}
	 */ preprocess() {
        this.#ws = new Array(this.pro.constraintSize());
        this.#ws.fill(1);
        this.#closedList = new Set();
        this.#openList = new Set();
        this.#nodes = [];
        this.#neighbors = [];
        for (const c of this.pro.constraints()){
            this.#nodes.push(new TreeNode(c));
            this.#neighbors.push(null);
        }
        for (const x of this.pro.variables())if (x.isEmpty()) x.assign(x.domain().at(0));
        this.monitor.initialize();
    }
    /**
	 * {@override}
	 */ exec() {
        const defEv = this.pro.degree();
        const sol = new (0, _assignmentList.AssignmentList)();
        let solEv = defEv;
        let ret = null;
        while(true){
            const cs = this.pro.violatingConstraints();
            const ev = this.pro.ratio();
            this.monitor.outputDebugString(`Evaluation: ${ev}`);
            if (solEv < ev) {
                sol.setProblem(this.pro);
                solEv = ev;
                if (this.monitor.solutionFound(sol, solEv)) return true;
            }
            if (null !== (ret = this.monitor.check(ev))) break;
            for (const tn of this.#nodes)tn.clear();
            const c_stars = new Set();
            for (const c of cs){
                const tn = this.#nodes[c.index()];
                c_stars.add(tn);
            }
            this.#srs(c_stars);
        }
        if (false === ret && !this.monitor.isTargetAssigned() && defEv < solEv) {
            sol.apply();
            ret = true;
        }
        return ret;
    }
    #srs(c_stars) {
        this.monitor.outputDebugString('SRS');
        this.#closedList.clear();
        this.#openList.clear();
        for (const tn of c_stars)this.#openList.add(tn);
        while(c_stars.size && this.#openList.size){
            const node = this.#getElementFromSet(this.#openList);
            this.#openList.delete(node);
            if (!this.#repair(node)) this.#spread(node);
            else if (c_stars.delete(node)) ;
            else if (node.parent() && this.#repair(node.parent())) this.#shrink(node, c_stars); // When its improvement leads to the improvement of its parents
            else this.#spread(node);
        }
        return 0 === c_stars.size;
    }
    #spread(tn) {
        this.monitor.outputDebugString('Spread');
        this.#closedList.add(tn);
        for (const n of this.#getNeighbors(tn))// For constraints that are not included in Open or Closed.
        if (!this.#closedList.has(n) && !this.#openList.has(n)) {
            n.clear();
            tn.append(n);
            this.#openList.add(n);
        }
    }
    #repair(tn) {
        this.monitor.outputDebugString('Repair');
        const c0 = tn.constraint();
        let tn0 = tn;
        do this.#ws[tn0.constraint().index()] += 1;
        while (tn0 = tn0.parent());
        const canList = new (0, _assignmentList.AssignmentList)();
        let maxDiff = 0;
        for (const x of c0){
            const x_v = x.value(); // Save the value
            let nowEv = 0;
            for (const c of x)nowEv += (1 - c.status()) * this.#ws[c.index()];
            out: for (const v of x.domain()){
                if (x_v === v) continue;
                x.assign(v);
                if (c0.status() !== 1) continue;
                let diff = nowEv;
                for (const c of x){
                    diff -= (1 - c.status()) * this.#ws[c.index()];
                    // If the improvement is less than the previous improvement, try the next variable.
                    if (diff < maxDiff) continue out;
                }
                if (maxDiff < diff) {
                    maxDiff = diff;
                    canList.clear();
                    canList.addVariable(x, v);
                } else if (maxDiff !== 0) canList.addVariable(x, v);
            }
            x.assign(x_v); // Restore the value
        }
        if (0 < canList.size()) {
            const a = this.#isRandom ? canList.random() : canList.at(0);
            a.apply();
            this.monitor.outputDebugString('\t' + a);
            return true;
        }
        return false;
    }
    #shrink(node, c_stars) {
        this.monitor.outputDebugString('Shrink');
        let cur = node;
        let curIsRemoved = false;
        while(true){
            cur = cur.parent();
            if (c_stars.delete(cur)) {
                curIsRemoved = true;
                break;
            }
            if (!cur.parent() || !this.#repair(cur.parent())) break;
        }
        const temp = [];
        cur.getDescendants(temp); // temp contains node.
        cur.clear(); // Prepare for reuse
        for (const n of temp){
            this.#openList.delete(n);
            this.#closedList.delete(n);
        }
        if (!curIsRemoved) this.#openList.add(cur);
    }
    #getNeighbors(tn) {
        const c = tn.constraint();
        const i = c.index();
        if (this.#neighbors[i] === null) {
            const ns = [];
            for (const d of c.neighbors())ns.push(this.#nodes[d.index()]);
            this.#neighbors[i] = ns;
        }
        return this.#neighbors[i];
    }
    #getElementFromSet(set) {
        const ms = this.#selectLightestNode(this.#selectNearestNode(set));
        return this.#isRandom ? ms[(0, _random.rand)(ms.length)] : ms[0];
    }
    #selectLightestNode(set) {
        let curW = Number.MAX_VALUE;
        let ms = [];
        for (const tn of set){
            const w = this.#ws[tn.constraint().index()];
            if (w < curW) {
                curW = w;
                ms.length = 0;
                ms.push(tn);
            } else if (w === curW) ms.push(tn);
        }
        return ms;
    }
    #selectNearestNode(set) {
        let curD = Number.MAX_VALUE;
        let ms = [];
        for (const tn of set){
            const d = tn.depth();
            if (d < curD) {
                curD = d;
                ms.length = 0;
                ms.push(tn);
            } else if (d === curD) ms.push(tn);
        }
        return ms;
    }
}
class TreeNode {
    #c;
    #depth;
    #parent;
    #children;
    constructor(c){
        this.#depth = 0;
        this.#parent = null;
        this.#children = [];
        this.#c = c;
    }
    append(tn) {
        tn.#parent = this;
        tn.#depth = this.#depth + 1;
        this.#children.push(tn);
    }
    clear() {
        this.#parent = null;
        this.#depth = 0;
        for (const tn of this.#children)tn.clear();
        this.#children.length = 0;
    }
    constraint() {
        return this.#c;
    }
    depth() {
        return this.#depth;
    }
    parent() {
        return this.#parent;
    }
    getDescendants(tns) {
        tns.push(this);
        for (const tn of this.#children)tn.getDescendants(tns);
    }
}

},{"../misc/assignment-list":"7XBf8","../misc/random":"5CZO5","../solver":"dvfQo","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8meAj":[function(require,module,exports,__globalThis) {
/**
 * This class that implements the forward checking method.
 * The minimum-remaining-values (MRV) heuristic can also be used by specifying the option.
 * Searches for variable assignments that satisfy all constraints and fails if none are found.
 * Each variable must have its own domain because it hides domain elements as branch pruning.
 *
 * @author Takuto Yanagida
 * @version 2025-01-23
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ForwardChecking", ()=>ForwardChecking);
var _assignmentList = require("../misc/assignment-list");
var _domainPruner = require("../misc/domain-pruner");
var _problems = require("../../util/problems");
var _solver = require("../solver");
class ForwardChecking extends (0, _solver.Solver) {
    #xs;
    #rct;
    #dps;
    #sol;
    #useMRV;
    /**
	 * Generates a solver.
	 */ constructor(){
        super(), this.#useMRV = true;
    }
    /**
	 * Specify whether to use the minimum-remaining-values (MRV) heuristic.
	 * Use of MRV may increase processing time for some problems.
	 * Default is false.
	 * @param flag Use MRV if true.
	 */ setUsingMinimumRemainingValuesHeuristics(flag) {
        this.#useMRV = flag;
    }
    /**
	 * {@override}
	 */ name() {
        return 'Forward Checking';
    }
    /**
	 * {@override}
	 */ preprocess() {
        this.#xs = [
            ...this.pro.variables()
        ];
        this.#rct = (0, _problems.createRelatedConstraintTable)(this.pro, this.#xs);
        this.#dps = Array.from(this.#xs, (x)=>new (0, _domainPruner.DomainPruner)(x.domain().size()));
        this.#sol = new (0, _assignmentList.AssignmentList)();
        this.pro.clearAllVariables();
        this.monitor.initialize();
    }
    /**
	 * {@override}
	 */ exec() {
        const ret = this.#branch(0);
        this.#sol.apply();
        return ret === true;
    }
    #branch(level) {
        if (level === this.pro.variableSize()) {
            const ev = this.pro.ratio();
            this.#sol.setProblem(this.pro);
            this.monitor.outputDebugString('\t' + `Evaluation ${ev}`);
            this.monitor.solutionFound(this.#sol, ev);
            return true; // Success.
        }
        let ret = null;
        if (null !== (ret = this.monitor.check())) return ret; // Success or failure.
        const x = this.#xs[this.#useMRV ? (0, _domainPruner.indexOfVariableWithMRV)(this.#xs, this.#dps) : level];
        const d = x.domain();
        const dp = this.#dps[x.index()];
        for(let i = 0, n = d.size(); i < n; ++i){
            if (dp.isPruned(i)) continue;
            x.assign(d.at(i));
            const vc = this.#getViolationCountAround(x);
            if (vc) continue;
            if (this.#checkForward(level, x)) {
                ret = this.#branch(level + 1);
                if (null !== ret) break;
            }
            for (const dp of this.#dps)dp.recover(level);
        }
        if (ret === null) {
            for (const dp of this.#dps)dp.recover(level);
            x.clear();
        }
        return ret;
    }
    // Checks for possible assignment to a future variable from the current variable assignment.
    #checkForward(level, x) {
        for (const x_i of this.#xs){
            if (!x_i.isEmpty()) continue; // If it is a past or present variable.
            const cs = this.#getConstraintsBetween(x.index(), x_i.index());
            const dp_i = this.#dps[x_i.index()];
            const d_i = x_i.domain();
            for (const c of cs){
                if (c.emptySize() !== 1) continue;
                if (!this.#checkForwardConsistency(level, x_i, d_i, dp_i, c)) return false;
            }
        }
        return true;
    }
    // Retrieves an array of constraints from a table that caches constraints between two variables.
    #getConstraintsBetween(i, j) {
        return i < j ? this.#rct[j][i] : this.#rct[i][j];
    }
    // Check for consistency between the current variable and one future variable, and prune elements of the domain that are inconsistent (when there is one unassigned variable in the scope of the constraint).
    #checkForwardConsistency(level, x, d, dp, c) {
        for(let i = 0, n = d.size(); i < n; ++i){
            if (dp.isPruned(i)) continue;
            x.assign(d.at(i));
            if (c.status() === 0) dp.prune(i, level);
        }
        x.clear();
        return !dp.isEmpty(); // Failure if the domain of one of the future variables is empty.
    }
    // Find the number of constraint violations that have increased due to the current value of the variable x.
    #getViolationCountAround(x) {
        let vc = 0;
        for (const c of x)if (c.status() === 0) ++vc;
        return vc;
    }
}

},{"../misc/assignment-list":"7XBf8","../misc/domain-pruner":"9ljra","../../util/problems":"kAwtv","../solver":"dvfQo","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bqKOq":[function(require,module,exports,__globalThis) {
/**
 * This class implements GENET.
 * CSP (but only Binary CSP) is supported.
 * Find the solution to the problem as the maximum CSP.
 *
 * @author Takuto Yanagida
 * @version 2025-01-24
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "GENET", ()=>GENET);
var _assignmentList = require("../misc/assignment-list");
var _random = require("../misc/random");
var _solver = require("../solver");
class GENET extends (0, _solver.Solver) {
    #clusters;
    #connections;
    /**
	 * Generates a solver.
	 */ constructor(){
        super();
    }
    /**
	 * {@override}
	 */ name() {
        return 'GENET';
    }
    /**
	 * {@override}
	 */ preprocess() {
        this.#clusters = [];
        this.#connections = [];
        if (!this.#createNetwork()) throw new Error();
        this.monitor.initialize();
    }
    /**
	 * {@override}
	 */ exec() {
        const order = [
            ...Array(this.#clusters.length).keys()
        ];
        const defEv = this.pro.ratio();
        const sol = new (0, _assignmentList.AssignmentList)();
        let solEv = defEv;
        let ret = null;
        while(true){
            const ev = this.pro.ratio();
            this.monitor.outputDebugString(`Evaluation: ${ev}`);
            if (solEv < ev) {
                sol.setProblem(this.pro);
                solEv = ev;
                if (this.monitor.solutionFound(sol, solEv)) return true;
            }
            if (null !== (ret = this.monitor.check(ev))) break;
            this.#next(order);
        }
        if (false === ret && !this.monitor.isTargetAssigned() && defEv < solEv) {
            sol.apply();
            ret = true;
        }
        return ret;
    }
    #createNetwork() {
        this.monitor.outputDebugString('Start of Network Generation');
        const cons = [];
        for (const x of this.pro.variables()){
            if (x.domain().size() === 0) return false;
            this.#clusters.push(new Cluster(x));
        }
        for (const c of this.pro.constraints())if (c.size() === 1) {
            const x = c.at(0);
            const cl = this.#clusters[x.index()];
            for (const n of cl){
                const origV = x.value(); // Save the value.
                x.assign(n._value);
                if (c.status() !== 1) cons.push(new Connection(c, n));
                x.assign(origV); // Restore the value.
            }
        } else {
            const x1 = c.at(0);
            const x2 = c.at(1);
            const cl_f = this.#clusters[x1.index()];
            const cl_s = this.#clusters[x2.index()];
            for (const n_f of cl_f){
                const origV1 = x1.value(); // Save the value.
                x1.assign(n_f._value);
                for (const n_s of cl_s){
                    const origV2 = x2.value(); // Save the value.
                    x2.assign(n_s._value);
                    if (c.status() !== 1) cons.push(new Connection(c, n_f, n_s));
                    x2.assign(origV2); // Restore the value.
                }
                x1.assign(origV1); // Restore the value.
            }
        }
        this.#connections = cons;
        this.monitor.outputDebugString('End of Network Generation');
        return true;
    }
    #next(order) {
        let mod = false;
        for (const i of this.#shuffle(order))if (this.#clusters[i].setActivityMaximumInput()) mod = true; // Turn on the node with the largest input in each cluster
        if (!mod) {
            for (const con of this.#connections)con.refreshWeight(); // Update weights for all connections
            this.monitor.outputDebugString('\tRefresh weights');
        } else for (const clu of this.#clusters)clu.applyToVariable();
    }
    #shuffle(is) {
        for(let i = is.length - 1; 0 < i; --i){
            const j = (0, _random.rand)(i + 1);
            [is[i], is[j]] = [
                is[j],
                is[i]
            ];
        }
        return is;
    }
}
class Cluster {
    #x;
    #index;
    #maxNs;
    constructor(x){
        this.#index = 0;
        this.#maxNs = [];
        this._ns = [];
        this.#x = x;
        for (const v of x.domain())this._ns.push(new Neuron(v));
        this.#setActivity((0, _random.rand)(this._ns.length));
    }
    #setActivity(index) {
        for (const n of this._ns)n._isActive = false;
        this._ns[index]._isActive = true;
        this.#index = index;
    }
    applyToVariable() {
        this.#x.assign(this._ns[this.#index]._value);
    }
    // Turn on the node with the largest input.
    setActivityMaximumInput() {
        this.#maxNs.length = 0;
        let max = Number.NEGATIVE_INFINITY;
        let alreadyOn = false;
        for(let i = 0; i < this._ns.length; ++i){
            const input = this._ns[i].getInput();
            if (max <= input) {
                if (max < input) {
                    max = input;
                    this.#maxNs.length = 0;
                    alreadyOn = false;
                }
                this.#maxNs.push(i);
                if (this.#index === i) alreadyOn = true;
            }
        }
        if (alreadyOn || 0 === this.#maxNs.length) return false;
        this.#setActivity(this.#maxNs[(0, _random.rand)(this.#maxNs.length)]);
        return true;
    }
    [Symbol.iterator]() {
        return this._ns[Symbol.iterator]();
    }
}
class Connection {
    #c;
    #n0;
    #n1;
    // Order of neurons must be the same as the order of variables that the constraint has.
    constructor(c, first, second = null){
        this.#c = c;
        this.#n0 = first;
        this.#n1 = second;
        this._w = c.status() - 1;
        this.#n0.addConnection(this);
        if (this.#n1) this.#n1.addConnection(this);
    }
    getNeuron(self) {
        if (self === this.#n0) return this.#n1;
        if (self === this.#n1) return this.#n0;
        return null;
    }
    refreshWeight() {
        if (!this.#n0._isActive || this.#n1 !== null && !this.#n1._isActive) return;
        const r = this.#c.relation();
        if (this.#c.size() === 1) this._w += r(this.#n0._value) - 1;
        else this._w += r(this.#n0._value, this.#n1._value) - 1;
    }
}
class Neuron {
    #connections;
    constructor(value){
        this.#connections = [];
        this._isActive = false // Direct reference (read, write) allowed.
        ;
        this._value = value;
    }
    addConnection(c) {
        this.#connections.push(c);
    }
    getInput() {
        let ret = 0;
        for (const c of this.#connections){
            const n = c.getNeuron(this); // If n is null, then the unary constraint.
            ret += c._w * (n === null || n._isActive ? 1 : 0);
        }
        return ret;
    }
}

},{"../misc/assignment-list":"7XBf8","../misc/random":"5CZO5","../solver":"dvfQo","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aIVCa":[function(require,module,exports,__globalThis) {
/**
 * Class implements the local changes method.
 * The implementation is optimized by converting recursive calls to loops.
 *
 * @author Takuto Yanagida
 * @version 2025-01-23
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "LocalChanges", ()=>LocalChanges);
var _assignmentList = require("../misc/assignment-list");
var _solver = require("../solver");
class LocalChanges extends (0, _solver.Solver) {
    #globalRet;
    /**
	 * Generates a solver.
	 */ constructor(){
        super();
    }
    /**
	 * {@override}
	 */ name() {
        return 'Local Changes';
    }
    /**
	 * {@override}
	 */ preprocess() {
        if (this.pro.emptySize() === 0) this.pro.clearAllVariables();
        this.#globalRet = false;
        this.monitor.initialize();
    }
    /**
	 * {@override}
	 */ exec() {
        const notFixed = new Set();
        const unassigned = new Set();
        for (const x of this.pro.variables())(!x.isEmpty() ? notFixed : unassigned).add(x);
        const sol = new (0, _assignmentList.AssignmentList)();
        const ret = this.#lcVariables(new Set(), notFixed, unassigned);
        const ev = this.pro.ratio();
        this.monitor.outputDebugString(`Evaluation: ${ev}`);
        if (ret) {
            sol.setProblem(this.pro);
            if (this.monitor.solutionFound(sol, ev)) return true;
        }
        return ret;
    }
    #lcVariables(X1, X2, X3) {
        X2 = new Set(X2); // Clone
        X3 = new Set(X3); // Clone
        while(true){
            this.monitor.outputDebugString(`X1 ${X1.size}, X2' ${X2.size}, X3' ${X3.size}`);
            const r = this.monitor.check(this.pro.degree());
            if (r !== null) {
                this.#globalRet = true;
                return r;
            }
            if (0 === X3.size) return true;
            const x = X3.values().next().value;
            const ret = this.#lcVariable(X1, X2, x);
            if (!ret || this.#globalRet) return ret;
            X2.add(x);
            X3.delete(x);
        }
    }
    #lcVariable(X1, X2, x) {
        for (const v of x.domain()){
            const al = (0, _assignmentList.AssignmentList).fromVariables(X2);
            x.assign(v);
            const ret = this.#lcValue(X1, X2, x);
            if (ret || this.#globalRet) return ret;
            x.clear();
            al.apply();
        }
        return false;
    }
    #lcValue(X1, X2, x) {
        if (!this.#isConsistent(X1, x, x.value())) return false;
        const X12 = X1.union(X2);
        if (this.#isConsistent(X12, x, x.value())) return true;
        const X3 = this.#createX3(X12, x, x.value());
        X1 = cloneAndAdd(X1, x);
        X2 = X2.difference(X3);
        return this.#lcVariables(X1, X2, X3);
    }
    #isConsistent(A, x, v) {
        const cs = new Set();
        for (const xa of A){
            const temp = this.pro.constraintsBetween(x, xa);
            for (const c of temp)cs.add(c);
        }
        const origV = x.value(); // Save the value.
        x.assign(v);
        for (const c of cs)if (c.status() !== 1) {
            x.assign(origV); // Restore the value.
            return false;
        }
        x.assign(origV); // Restore the value.
        return true;
    }
    #createX3(X12, x, v) {
        const newX3 = new Set();
        const cs = new Set();
        for (const xa of X12)for (const c of this.pro.constraintsBetween(x, xa))cs.add(c);
        const origV = x.value(); // Save the value.
        x.assign(v);
        for (const c of cs){
            if (c.status() !== 1) for (const xi of c)newX3.add(xi);
        }
        x.assign(origV); // Restore the value.
        newX3.delete(x);
        return newX3;
    }
}
function cloneAndAdd(s, e) {
    return new Set(s).add(e);
}

},{"../misc/assignment-list":"7XBf8","../solver":"dvfQo","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5geKS":[function(require,module,exports,__globalThis) {
/**
 * This class that implements the forward checking method.
 * The minimum-remaining-values (MRV) heuristic can also be used by specifying the option.
 * Find the solution to the problem as the maximum CSP.
 * Each variable must have its own domain because it hides domain elements as branch pruning.
 *
 * @author Takuto Yanagida
 * @version 2025-01-23
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "MaxForwardChecking", ()=>MaxForwardChecking);
var _assignmentList = require("../misc/assignment-list");
var _domainPruner = require("../misc/domain-pruner");
var _problems = require("../../util/problems");
var _solver = require("../solver");
class MaxForwardChecking extends (0, _solver.Solver) {
    #xs;
    #rct;
    #dps;
    #sol;
    #maxVc;
    #useMRV;
    /**
	 * Generates a solver.
	 */ constructor(){
        super(), this.#useMRV = true;
    }
    /**
	 * Specify whether to use the minimum-remaining-values (MRV) heuristic.
	 * Use of MRV may increase processing time for some problems.
	 * Default is false.
	 * @param flag Use MRV if true.
	 */ setUsingMinimumRemainingValuesHeuristics(flag) {
        this.#useMRV = flag;
    }
    /**
	 * {@override}
	 */ name() {
        return 'Max Forward Checking';
    }
    /**
	 * {@override}
	 */ preprocess() {
        this.#xs = [
            ...this.pro.variables()
        ];
        this.#rct = (0, _problems.createRelatedConstraintTable)(this.pro, this.#xs);
        this.#dps = Array.from(this.#xs, (x)=>new (0, _domainPruner.DomainPruner)(x.domain().size()));
        this.#sol = new (0, _assignmentList.AssignmentList)();
        this.#maxVc = this.pro.constraintSize();
        this.pro.clearAllVariables();
        this.monitor.initialize();
    }
    /**
	 * {@override}
	 */ exec() {
        const ret = this.#branch(0);
        this.#sol.apply();
        return ret === true;
    }
    #branch(level, curVc = 0) {
        if (level === this.pro.variableSize()) {
            const ev = this.pro.ratio();
            this.#sol.setProblem(this.pro);
            this.monitor.outputDebugString('\t' + `Evaluation ${ev}`);
            if (curVc < this.#maxVc) {
                this.#maxVc = curVc;
                if (this.monitor.solutionFound(this.#sol, ev)) return true; // Success.
            }
            return this.monitor.check(ev);
        }
        let ret = null;
        if (null !== (ret = this.monitor.check())) return ret; // Success or failure.
        const x = this.#xs[this.#useMRV ? (0, _domainPruner.indexOfVariableWithMRV)(this.#xs, this.#dps) : level];
        const d = x.domain();
        const dp = this.#dps[x.index()];
        for(let i = 0, n = d.size(); i < n; ++i){
            if (dp.isPruned(i)) continue;
            x.assign(d.at(i));
            const vc = curVc + this.#getViolationCountAround(x);
            if (this.#maxVc <= vc) continue;
            if (curVc + 1 < this.#maxVc || this.#checkForward(level, x)) {
                ret = this.#branch(level + 1, vc);
                if (null !== ret) break;
            }
            for (const dp of this.#dps)dp.recover(level);
        }
        if (ret === null) {
            for (const dp of this.#dps)dp.recover(level);
            x.clear();
        }
        return ret;
    }
    // Checks for possible assignment to a future variable from the current variable assignment.
    #checkForward(level, x) {
        for (const x_i of this.#xs){
            if (!x_i.isEmpty()) continue; // If it is a past or present variable.
            const cs = this.#getConstraintsBetween(x.index(), x_i.index());
            const dp_i = this.#dps[x_i.index()];
            const d_i = x_i.domain();
            for (const c of cs){
                if (c.emptySize() !== 1) continue;
                if (!this.#checkForwardConsistency(level, x_i, d_i, dp_i, c)) return false;
            }
        }
        return true;
    }
    // Retrieves an array of constraints from a table that caches constraints between two variables.
    #getConstraintsBetween(i, j) {
        return i < j ? this.#rct[j][i] : this.#rct[i][j];
    }
    // Check for consistency between the current variable and one future variable, and prune elements of the domain that are inconsistent (when there is one unassigned variable in the scope of the constraint).
    #checkForwardConsistency(level, x, d, dp, c) {
        for(let i = 0, n = d.size(); i < n; ++i){
            if (dp.isPruned(i)) continue;
            x.assign(d.at(i));
            if (c.status() === 0) dp.prune(i, level);
        }
        x.clear();
        return !dp.isEmpty(); // Failure if the domain of one of the future variables is empty.
    }
    // Find the number of constraint violations that have increased due to the current value of the variable x.
    #getViolationCountAround(x) {
        let vc = 0;
        for (const c of x)if (c.status() === 0) ++vc;
        return vc;
    }
}

},{"../misc/assignment-list":"7XBf8","../misc/domain-pruner":"9ljra","../../util/problems":"kAwtv","../solver":"dvfQo","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4nXpt":[function(require,module,exports,__globalThis) {
/**
 * The class implements AC-3, one of the arc consistency algorithms.
 *
 * @author Takuto Yanagida
 * @version 2025-01-23
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "AC3", ()=>AC3);
class AC3 {
    static #checkConsistency(c, x_j) {
        for (const v of x_j.domain()){
            x_j.assign(v);
            if (c.status() === 1) return true; // Current assignment of v_i is consistent.
        }
        return false;
    }
    static #reviseDomain(p, x_i, x_j) {
        const v_i = x_i.value();
        const v_j = x_j.value(); // Save the value.
        const d_i = x_i.domain();
        const vs = [];
        const cs = p.constraintsBetween(x_i, x_j);
        vs: for (const v of d_i){
            x_i.assign(v);
            for (const c of cs){
                if (c.size() !== 2) continue; // Check the next constraint
                if (!AC3.#checkConsistency(c, x_j)) continue vs; // Since there is no partner satisfying the constraint, check the next value.
            }
            vs.push(v);
        }
        x_i.assign(v_i); // Restore the value.
        x_j.assign(v_j); // Restore the value.
        if (vs.length !== d_i.size()) {
            const nd = p.createDomain(vs);
            x_i.domain(nd);
            console.log(d_i.size() + ' -> ' + nd.size());
            return true;
        }
        return false;
    }
    static apply(p) {
        const cs = [];
        for (const c of p.constraints())if (c.size() === 2) cs.push(c);
        while(cs.length){
            const c = cs.pop();
            const v_k = c.at(0);
            const v_m = c.at(1);
            if (AC3.#reviseDomain(p, v_k, v_m)) {
                for (const c1 of p.constraints())if (c1.size() === 2 && c1.at(1) === v_k && c1.at(0) !== v_m) cs.unshift(c1);
            }
        }
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"arUPL":[function(require,module,exports,__globalThis) {
/**
 * Utility class that performs node consistency.
 *
 * @author Takuto Yanagida
 * @version 2025-01-23
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Guarantees consistency of fuzzy unary constraints. The domain of each variable is replaced as needed.
 * Deletes elements from domains that do not meet the specified worst satisfaction degree.
 * @param p A problem.
 * @param threshold Worst satisfaction degree.
 * @return True if there is no empty domain.
 */ parcelHelpers.export(exports, "applyNodeConsistencyToProblem", ()=>applyNodeConsistencyToProblem);
/**
 * Guarantees consistency of crisp unary constraints. The domain of each variable is replaced as needed.
 * It cannot be applied to crisp views of fuzzy constraint satisfaction problems because it changes the structure of the constraint graph.
 * @param p A crisp problem.
 * @return True if there is no empty domain.
 */ parcelHelpers.export(exports, "applyNodeConsistencyToCrispProblem", ()=>applyNodeConsistencyToCrispProblem);
function applyNodeConsistencyToProblem(p, threshold) {
    for (const x of p.variables()){
        const d = x.domain();
        const origV = x.value(); // Save the value.
        const vs = [];
        for (const c of x){
            if (c.size() !== 1) continue;
            for (const v of d){
                x.assign(v);
                if (threshold <= c.degree()) vs.push(v);
            }
            p.removeConstraint(c);
        }
        x.assign(origV); // Restore the value.
        if (0 === vs.length) return false;
        x.domain(p.createDomain(vs));
    }
    return true;
}
function applyNodeConsistencyToCrispProblem(p) {
    for (const x of p.variables()){
        const d = x.domain();
        const origV = x.value(); // Save the value.
        const vs = [];
        for (const c of x){
            if (c.size() !== 1) continue;
            for (const v of d){
                x.assign(v);
                if (c.status() === 1) vs.push(v);
            }
            p.removeConstraint(c);
        }
        x.assign(origV); // Restore the value.
        if (0 === vs.length) return false;
        x.domain(p.createDomain(vs));
    }
    return true;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"41sLb":[function(require,module,exports,__globalThis) {
/**
 * Class of post-stabilization.
 *
 * @author Takuto Yanagida
 * @version 2025-01-23
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Apply post-stabilization.
 *
 * @param p    Problem.
 * @param orig Original assignment list.
 * @param log  Log function.
 */ parcelHelpers.export(exports, "applyPostStabilization", ()=>applyPostStabilization);
/**
 * Wrap the solver with post-stabilizer.
 *
 * @param solver Solver.
 * @return Wrapped solver.
 */ parcelHelpers.export(exports, "wrapWithPostStabilizer", ()=>wrapWithPostStabilizer);
/**
 * Class of post-stabilizer wrapper.
 */ parcelHelpers.export(exports, "PostStabilizerWrapper", ()=>PostStabilizerWrapper);
var _assignmentList = require("../misc/assignment-list");
var _solver = require("../solver");
function applyPostStabilization(p, orig, log = (e)=>console.log(e)) {
    log('Start Post-Stabilization');
    let stabilized;
    let count = 0;
    do {
        log('\tPost-Stabilization: count ' + count++);
        stabilized = false;
        let ev_min = p.degree();
        const xs = p.variables();
        for(let i = 0; i < xs.length; ++i){
            const x = xs[i];
            const v = x.value();
            const a = orig.at(i);
            if (v === a.value()) continue;
            a.apply(); // Try to assign the original.
            if (ev_min <= p.degree()) stabilized = true;
            else x.assign(v); // Restore.
        }
    }while (stabilized);
    log('Finish Post-Stabilization');
    return stabilized;
}
function wrapWithPostStabilizer(solver) {
    return new PostStabilizerWrapper(solver);
}
class PostStabilizerWrapper extends (0, _solver.Solver) {
    #solver;
    #criteria;
    constructor(solver, criteria = Criteria.DEGREE){
        super();
        this.#solver = solver;
        this.#criteria = criteria;
    }
    /**
	 * {@override}
	 */ name() {
        return this.#solver.name() + ' + PF';
    }
    /**
	 * {@override}
	 */ exec() {
        let ev = 0;
        let evs = 0;
        if (this.monitor.isDebugMode()) {
            ev = Criteria.DEGREE === this.#criteria ? this.pro.degree() : this.pro.ratio();
            evs = this.pro.emptySize();
        }
        const orig = new (0, _assignmentList.AssignmentList)();
        orig.setProblem(this.pro);
        const res = this.#solver.solve(this.pro, this.monitor);
        if (res) applyPostStabilization(this.pro, orig, this.monitor.outputDebugString.bind(this.monitor));
        this.monitor.outputDebugString(`Solver result: ${res ? 'Success' : 'Failure'}`);
        this.monitor.outputDebugString(`Evaluation: ${ev} -> ${Criteria.DEGREE === this.#criteria ? this.pro.degree() : this.pro.ratio()}`);
        this.monitor.outputDebugString(`Empty variable size: ${evs} -> ${this.pro.emptySize()}`);
        return res;
    }
}
const Criteria = {
    DEGREE: 'degree',
    RATIO: 'ratio'
};

},{"../misc/assignment-list":"7XBf8","../solver":"dvfQo","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5Ey8F":[function(require,module,exports,__globalThis) {
/**
 * This class detects that a solver's operation is looping.
 *
 * @author Takuto Yanagida
 * @version 2024-10-22
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "LoopDetector", ()=>LoopDetector);
class LoopDetector {
    #loopLength;
    #iterCount;
    #is;
    #vs;
    #cur;
    constructor(loopLength = 30, iterCount = 3){
        this.#is = [];
        this.#vs = [];
        this.#cur = 0;
        this.#loopLength = loopLength;
        this.#iterCount = iterCount;
        this.#initArrays();
    }
    #assignToVariable(index, value) {
        this.#is[this.#cur] = index;
        this.#vs[this.#cur] = value;
        if (--this.#cur === -1) this.#cur = this.#is.length - 1;
    }
    #checkLooping() {
        const is = new Array(this.#loopLength);
        const vs = new Array(this.#loopLength);
        out: for(let length = 1; length <= this.#loopLength; ++length){
            let offset = this.#cur + 1;
            for(let i = 0; i < length; ++i){
                if (i + offset === this.#is.length) offset -= this.#is.length;
                is[i] = this.#is[i + offset];
                vs[i] = this.#vs[i + offset];
            }
            let fi = length;
            for(let i = 0; i < this.#iterCount - 1; ++i){
                offset = this.#cur + 1;
                for(let j = 0; j < length; ++j){
                    if (fi + j + offset >= this.#is.length) offset -= this.#is.length;
                    if (this.#is[fi + j + offset] !== is[j] || this.#vs[fi + j + offset] !== vs[j]) continue out;
                }
                fi += length;
            }
            return length;
        }
        return 0;
    }
    #initArrays() {
        this.#is = new Array(this.#loopLength * this.#iterCount);
        this.#vs = new Array(this.#loopLength * this.#iterCount);
        this.#is.fill(-1);
        this.#vs.fill(-1);
        this.#cur = this.#is.length - 1;
    }
    checkLoop(variableIndex, value) {
        this.#assignToVariable(variableIndex, value);
        return this.#checkLooping();
    }
    clear() {
        this.#is.fill(-1);
        this.#vs.fill(-1);
    }
    iterationCount() {
        return this.#iterCount;
    }
    loopLength() {
        return this.#loopLength;
    }
    values() {
        return this.#vs.slice();
    }
    variableIndices() {
        return this.#is.slice();
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fZNVH":[function(require,module,exports,__globalThis) {
/**
 * Solver factory class.
 *
 * @author Takuto Yanagida
 * @version 2025-01-23
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "SolverFactory", ()=>SolverFactory);
class SolverFactory {
    static crispSolverNames() {
        return [
            /* 0 */ 'Forward Checking',
            /* 1 */ 'Max Forward Checking',
            /* 2 */ 'Local Changes',
            /* 3 */ 'Breakout',
            /* 4 */ 'GENET',
            /* 5 */ 'Crisp SRS3'
        ];
    }
    static fuzzySolverNames() {
        return [
            /* 0 */ 'Full Checking',
            /* 1 */ 'Fuzzy Forward Checking',
            /* 2 */ 'Flexible Local Changes',
            /* 3 */ 'Fuzzy Breakout',
            /* 4 */ 'Fuzzy GENET',
            /* 5 */ 'SRS3'
        ];
    }
    static async createSolver(type) {
        const cs = await SolverFactory.createCrispSolver(type);
        if (cs) return cs;
        const fs = await SolverFactory.createFuzzySolver(type);
        if (fs) return fs;
        return null;
    }
    static async createCrispSolver(type) {
        switch(type.replaceAll(' ', '')){
            case 'ForwardChecking':
            case 'forward-checking':
                const { ForwardChecking } = await require("e773cdcd9dbc6e06");
                return new ForwardChecking();
            case 'MaxForwardChecking':
            case 'max-forward-checking':
                const { MaxForwardChecking } = await require("27409f8f64e150d4");
                return new MaxForwardChecking();
            case 'LocalChanges':
            case 'local-changes':
                const { LocalChanges } = await require("b2a650ca4570499");
                return new LocalChanges();
            case 'Breakout':
            case 'breakout':
                const { Breakout } = await require("934f75f3a340d46b");
                return new Breakout();
            case 'GENET':
            case 'genet':
                const { GENET } = await require("30bec456e55a3f5d");
                return new GENET();
            case 'CrispSRS3':
            case 'crisp-srs3':
                const { CrispSRS3 } = await require("934c3176b9e94ed1");
                return new CrispSRS3();
        }
        return null;
    }
    static async createFuzzySolver(type) {
        switch(type.replaceAll(' ', '')){
            case 'FullChecking':
            case 'full-checking':
                const { FullChecking } = await require("347444b51e4c8e70");
                return new FullChecking();
            case 'FuzzyForwardChecking':
            case 'fuzzy-forward-checking':
                const { FuzzyForwardChecking } = await require("ffb12d2c6160abdc");
                return new FuzzyForwardChecking();
            case 'FlexibleLocalChanges':
            case 'flexible-local-changes':
                const { FlexibleLocalChanges } = await require("bf74eba5b4fc8f67");
                return new FlexibleLocalChanges();
            case 'FuzzyBreakout':
            case 'fuzzy-breakout':
                const { FuzzyBreakout } = await require("295e58772e978909");
                return new FuzzyBreakout();
            case 'FuzzyGENET':
            case 'fuzzy-genet':
                const { FuzzyGENET } = await require("a1fd01f492f3ef60");
                return new FuzzyGENET();
            case 'SRS3':
            case 'srs3':
                const { SRS3 } = await require("dbf34ab333557fc0");
                return new SRS3();
        }
        return null;
    }
}

},{"e773cdcd9dbc6e06":"3Yu0u","27409f8f64e150d4":"9svtm","b2a650ca4570499":"b6QWi","934f75f3a340d46b":"AAMC1","30bec456e55a3f5d":"ebiFq","934c3176b9e94ed1":"3N9QB","347444b51e4c8e70":"854Je","ffb12d2c6160abdc":"etmuG","bf74eba5b4fc8f67":"3pg1O","295e58772e978909":"hyNnz","a1fd01f492f3ef60":"hXqtS","dbf34ab333557fc0":"2Grf6","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3Yu0u":[function(require,module,exports,__globalThis) {
module.exports = Promise.resolve(module.bundle.root("8meAj"));

},{"8meAj":"8meAj"}],"9svtm":[function(require,module,exports,__globalThis) {
module.exports = Promise.resolve(module.bundle.root("5geKS"));

},{"5geKS":"5geKS"}],"b6QWi":[function(require,module,exports,__globalThis) {
module.exports = Promise.resolve(module.bundle.root("aIVCa"));

},{"aIVCa":"aIVCa"}],"AAMC1":[function(require,module,exports,__globalThis) {
module.exports = Promise.resolve(module.bundle.root("fSOIG"));

},{"fSOIG":"fSOIG"}],"ebiFq":[function(require,module,exports,__globalThis) {
module.exports = Promise.resolve(module.bundle.root("bqKOq"));

},{"bqKOq":"bqKOq"}],"3N9QB":[function(require,module,exports,__globalThis) {
module.exports = Promise.resolve(module.bundle.root("gtT5Y"));

},{"gtT5Y":"gtT5Y"}],"854Je":[function(require,module,exports,__globalThis) {
module.exports = Promise.resolve(module.bundle.root("gYH7K"));

},{"gYH7K":"gYH7K"}],"etmuG":[function(require,module,exports,__globalThis) {
module.exports = Promise.resolve(module.bundle.root("6vCMZ"));

},{"6vCMZ":"6vCMZ"}],"3pg1O":[function(require,module,exports,__globalThis) {
module.exports = Promise.resolve(module.bundle.root("2juau"));

},{"2juau":"2juau"}],"hyNnz":[function(require,module,exports,__globalThis) {
module.exports = Promise.resolve(module.bundle.root("JK6En"));

},{"JK6En":"JK6En"}],"hXqtS":[function(require,module,exports,__globalThis) {
module.exports = Promise.resolve(module.bundle.root("ezeI0"));

},{"ezeI0":"ezeI0"}],"2Grf6":[function(require,module,exports,__globalThis) {
module.exports = Promise.resolve(module.bundle.root("5QD09"));

},{"5QD09":"5QD09"}]},["cz6he","1nEOf"], "1nEOf", "parcelRequire94c2")

//# sourceMappingURL=index.dea00e79.js.map
