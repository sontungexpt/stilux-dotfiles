!(function (e) {
    var t = {};
    function n(r) {
        if (t[r]) return t[r].exports;
        var a = (t[r] = { i: r, l: !1, exports: {} });
        return e[r].call(a.exports, a, a.exports, n), (a.l = !0), a.exports;
    }
    (n.m = e),
        (n.c = t),
        (n.d = function (e, t, r) {
            n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
        }),
        (n.r = function (e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 });
        }),
        (n.t = function (e, t) {
            if ((1 & t && (e = n(e)), 8 & t)) return e;
            if (4 & t && "object" == typeof e && e && e.__esModule) return e;
            var r = Object.create(null);
            if ((n.r(r), Object.defineProperty(r, "default", { enumerable: !0, value: e }), 2 & t && "string" != typeof e))
                for (var a in e)
                    n.d(
                        r,
                        a,
                        function (t) {
                            return e[t];
                        }.bind(null, a)
                    );
            return r;
        }),
        (n.n = function (e) {
            var t =
                e && e.__esModule
                    ? function () {
                          return e.default;
                      }
                    : function () {
                          return e;
                      };
            return n.d(t, "a", t), t;
        }),
        (n.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t);
        }),
        (n.p = ""),
        n((n.s = 83));
})([
    function (e, t, n) {
        "use strict";
        e.exports = n(21);
    },
    function (e, t, n) {
        var r, a, o;
        (a = [e]),
            void 0 ===
                (o =
                    "function" ==
                    typeof (r = function (e) {
                        "use strict";
                        "undefined" == typeof browser || Object.getPrototypeOf(browser) !== Object.prototype
                            ? (e.exports = (() => {
                                  const e = {
                                      alarms: { clear: { minArgs: 0, maxArgs: 1 }, clearAll: { minArgs: 0, maxArgs: 0 }, get: { minArgs: 0, maxArgs: 1 }, getAll: { minArgs: 0, maxArgs: 0 } },
                                      bookmarks: {
                                          create: { minArgs: 1, maxArgs: 1 },
                                          get: { minArgs: 1, maxArgs: 1 },
                                          getChildren: { minArgs: 1, maxArgs: 1 },
                                          getRecent: { minArgs: 1, maxArgs: 1 },
                                          getSubTree: { minArgs: 1, maxArgs: 1 },
                                          getTree: { minArgs: 0, maxArgs: 0 },
                                          move: { minArgs: 2, maxArgs: 2 },
                                          remove: { minArgs: 1, maxArgs: 1 },
                                          removeTree: { minArgs: 1, maxArgs: 1 },
                                          search: { minArgs: 1, maxArgs: 1 },
                                          update: { minArgs: 2, maxArgs: 2 },
                                      },
                                      browserAction: {
                                          disable: { minArgs: 0, maxArgs: 1, fallbackToNoCallback: !0 },
                                          enable: { minArgs: 0, maxArgs: 1, fallbackToNoCallback: !0 },
                                          getBadgeBackgroundColor: { minArgs: 1, maxArgs: 1 },
                                          getBadgeText: { minArgs: 1, maxArgs: 1 },
                                          getPopup: { minArgs: 1, maxArgs: 1 },
                                          getTitle: { minArgs: 1, maxArgs: 1 },
                                          openPopup: { minArgs: 0, maxArgs: 0 },
                                          setBadgeBackgroundColor: { minArgs: 1, maxArgs: 1, fallbackToNoCallback: !0 },
                                          setBadgeText: { minArgs: 1, maxArgs: 1, fallbackToNoCallback: !0 },
                                          setIcon: { minArgs: 1, maxArgs: 1 },
                                          setPopup: { minArgs: 1, maxArgs: 1, fallbackToNoCallback: !0 },
                                          setTitle: { minArgs: 1, maxArgs: 1, fallbackToNoCallback: !0 },
                                      },
                                      browsingData: {
                                          remove: { minArgs: 2, maxArgs: 2 },
                                          removeCache: { minArgs: 1, maxArgs: 1 },
                                          removeCookies: { minArgs: 1, maxArgs: 1 },
                                          removeDownloads: { minArgs: 1, maxArgs: 1 },
                                          removeFormData: { minArgs: 1, maxArgs: 1 },
                                          removeHistory: { minArgs: 1, maxArgs: 1 },
                                          removeLocalStorage: { minArgs: 1, maxArgs: 1 },
                                          removePasswords: { minArgs: 1, maxArgs: 1 },
                                          removePluginData: { minArgs: 1, maxArgs: 1 },
                                          settings: { minArgs: 0, maxArgs: 0 },
                                      },
                                      commands: { getAll: { minArgs: 0, maxArgs: 0 } },
                                      contextMenus: { remove: { minArgs: 1, maxArgs: 1 }, removeAll: { minArgs: 0, maxArgs: 0 }, update: { minArgs: 2, maxArgs: 2 } },
                                      cookies: { get: { minArgs: 1, maxArgs: 1 }, getAll: { minArgs: 1, maxArgs: 1 }, getAllCookieStores: { minArgs: 0, maxArgs: 0 }, remove: { minArgs: 1, maxArgs: 1 }, set: { minArgs: 1, maxArgs: 1 } },
                                      devtools: { inspectedWindow: { eval: { minArgs: 1, maxArgs: 2 } }, panels: { create: { minArgs: 3, maxArgs: 3, singleCallbackArg: !0 } } },
                                      downloads: {
                                          cancel: { minArgs: 1, maxArgs: 1 },
                                          download: { minArgs: 1, maxArgs: 1 },
                                          erase: { minArgs: 1, maxArgs: 1 },
                                          getFileIcon: { minArgs: 1, maxArgs: 2 },
                                          open: { minArgs: 1, maxArgs: 1, fallbackToNoCallback: !0 },
                                          pause: { minArgs: 1, maxArgs: 1 },
                                          removeFile: { minArgs: 1, maxArgs: 1 },
                                          resume: { minArgs: 1, maxArgs: 1 },
                                          search: { minArgs: 1, maxArgs: 1 },
                                          show: { minArgs: 1, maxArgs: 1, fallbackToNoCallback: !0 },
                                      },
                                      extension: { isAllowedFileSchemeAccess: { minArgs: 0, maxArgs: 0 }, isAllowedIncognitoAccess: { minArgs: 0, maxArgs: 0 } },
                                      history: {
                                          addUrl: { minArgs: 1, maxArgs: 1 },
                                          deleteAll: { minArgs: 0, maxArgs: 0 },
                                          deleteRange: { minArgs: 1, maxArgs: 1 },
                                          deleteUrl: { minArgs: 1, maxArgs: 1 },
                                          getVisits: { minArgs: 1, maxArgs: 1 },
                                          search: { minArgs: 1, maxArgs: 1 },
                                      },
                                      i18n: { detectLanguage: { minArgs: 1, maxArgs: 1 }, getAcceptLanguages: { minArgs: 0, maxArgs: 0 } },
                                      identity: { launchWebAuthFlow: { minArgs: 1, maxArgs: 1 } },
                                      idle: { queryState: { minArgs: 1, maxArgs: 1 } },
                                      management: {
                                          get: { minArgs: 1, maxArgs: 1 },
                                          getAll: { minArgs: 0, maxArgs: 0 },
                                          getSelf: { minArgs: 0, maxArgs: 0 },
                                          setEnabled: { minArgs: 2, maxArgs: 2 },
                                          uninstallSelf: { minArgs: 0, maxArgs: 1 },
                                      },
                                      notifications: {
                                          clear: { minArgs: 1, maxArgs: 1 },
                                          create: { minArgs: 1, maxArgs: 2 },
                                          getAll: { minArgs: 0, maxArgs: 0 },
                                          getPermissionLevel: { minArgs: 0, maxArgs: 0 },
                                          update: { minArgs: 2, maxArgs: 2 },
                                      },
                                      pageAction: {
                                          getPopup: { minArgs: 1, maxArgs: 1 },
                                          getTitle: { minArgs: 1, maxArgs: 1 },
                                          hide: { minArgs: 1, maxArgs: 1, fallbackToNoCallback: !0 },
                                          setIcon: { minArgs: 1, maxArgs: 1 },
                                          setPopup: { minArgs: 1, maxArgs: 1, fallbackToNoCallback: !0 },
                                          setTitle: { minArgs: 1, maxArgs: 1, fallbackToNoCallback: !0 },
                                          show: { minArgs: 1, maxArgs: 1, fallbackToNoCallback: !0 },
                                      },
                                      permissions: { contains: { minArgs: 1, maxArgs: 1 }, getAll: { minArgs: 0, maxArgs: 0 }, remove: { minArgs: 1, maxArgs: 1 }, request: { minArgs: 1, maxArgs: 1 } },
                                      runtime: {
                                          getBackgroundPage: { minArgs: 0, maxArgs: 0 },
                                          getBrowserInfo: { minArgs: 0, maxArgs: 0 },
                                          getPlatformInfo: { minArgs: 0, maxArgs: 0 },
                                          openOptionsPage: { minArgs: 0, maxArgs: 0 },
                                          requestUpdateCheck: { minArgs: 0, maxArgs: 0 },
                                          sendMessage: { minArgs: 1, maxArgs: 3 },
                                          sendNativeMessage: { minArgs: 2, maxArgs: 2 },
                                          setUninstallURL: { minArgs: 1, maxArgs: 1 },
                                      },
                                      sessions: { getDevices: { minArgs: 0, maxArgs: 1 }, getRecentlyClosed: { minArgs: 0, maxArgs: 1 }, restore: { minArgs: 0, maxArgs: 1 } },
                                      storage: {
                                          local: { clear: { minArgs: 0, maxArgs: 0 }, get: { minArgs: 0, maxArgs: 1 }, getBytesInUse: { minArgs: 0, maxArgs: 1 }, remove: { minArgs: 1, maxArgs: 1 }, set: { minArgs: 1, maxArgs: 1 } },
                                          managed: { get: { minArgs: 0, maxArgs: 1 }, getBytesInUse: { minArgs: 0, maxArgs: 1 } },
                                          sync: { clear: { minArgs: 0, maxArgs: 0 }, get: { minArgs: 0, maxArgs: 1 }, getBytesInUse: { minArgs: 0, maxArgs: 1 }, remove: { minArgs: 1, maxArgs: 1 }, set: { minArgs: 1, maxArgs: 1 } },
                                      },
                                      tabs: {
                                          captureVisibleTab: { minArgs: 0, maxArgs: 2 },
                                          create: { minArgs: 1, maxArgs: 1 },
                                          detectLanguage: { minArgs: 0, maxArgs: 1 },
                                          discard: { minArgs: 0, maxArgs: 1 },
                                          duplicate: { minArgs: 1, maxArgs: 1 },
                                          executeScript: { minArgs: 1, maxArgs: 2 },
                                          get: { minArgs: 1, maxArgs: 1 },
                                          getCurrent: { minArgs: 0, maxArgs: 0 },
                                          getZoom: { minArgs: 0, maxArgs: 1 },
                                          getZoomSettings: { minArgs: 0, maxArgs: 1 },
                                          highlight: { minArgs: 1, maxArgs: 1 },
                                          insertCSS: { minArgs: 1, maxArgs: 2 },
                                          move: { minArgs: 2, maxArgs: 2 },
                                          query: { minArgs: 1, maxArgs: 1 },
                                          reload: { minArgs: 0, maxArgs: 2 },
                                          remove: { minArgs: 1, maxArgs: 1 },
                                          removeCSS: { minArgs: 1, maxArgs: 2 },
                                          sendMessage: { minArgs: 2, maxArgs: 3 },
                                          setZoom: { minArgs: 1, maxArgs: 2 },
                                          setZoomSettings: { minArgs: 1, maxArgs: 2 },
                                          update: { minArgs: 1, maxArgs: 2 },
                                      },
                                      topSites: { get: { minArgs: 0, maxArgs: 0 } },
                                      webNavigation: { getAllFrames: { minArgs: 1, maxArgs: 1 }, getFrame: { minArgs: 1, maxArgs: 1 } },
                                      webRequest: { handlerBehaviorChanged: { minArgs: 0, maxArgs: 0 } },
                                      windows: {
                                          create: { minArgs: 0, maxArgs: 1 },
                                          get: { minArgs: 1, maxArgs: 2 },
                                          getAll: { minArgs: 0, maxArgs: 1 },
                                          getCurrent: { minArgs: 0, maxArgs: 1 },
                                          getLastFocused: { minArgs: 0, maxArgs: 1 },
                                          remove: { minArgs: 1, maxArgs: 1 },
                                          update: { minArgs: 2, maxArgs: 2 },
                                      },
                                  };
                                  if (0 === Object.keys(e).length) throw new Error("api-metadata.json has not been included in browser-polyfill");
                                  class t extends WeakMap {
                                      constructor(e, t) {
                                          super(t), (this.createItem = e);
                                      }
                                      get(e) {
                                          return this.has(e) || this.set(e, this.createItem(e)), super.get(e);
                                      }
                                  }
                                  const n = (e, t) => (...n) => {
                                          chrome.runtime.lastError ? e.reject(chrome.runtime.lastError) : t.singleCallbackArg || 1 >= n.length ? e.resolve(n[0]) : e.resolve(n);
                                      },
                                      r = (e) => (1 == e ? "argument" : "arguments"),
                                      a = (e, t, n) => new Proxy(t, { apply: (t, r, a) => n.call(r, e, ...a) });
                                  let o = Function.call.bind(Object.prototype.hasOwnProperty);
                                  const i = (e, t = {}, l = {}) => {
                                          let u = Object.create(null),
                                              s = {
                                                  has: (t, n) => n in e || n in u,
                                                  get(s, c) {
                                                      if (c in u) return u[c];
                                                      if (c in e) {
                                                          let s = e[c];
                                                          if ("function" == typeof s)
                                                              if ("function" == typeof t[c]) s = a(e, e[c], t[c]);
                                                              else if (o(l, c)) {
                                                                  let t = ((e, t) =>
                                                                      function (a, ...o) {
                                                                          if (o.length < t.minArgs) throw new Error(`Expected at least ${t.minArgs} ${r(t.minArgs)} for ${e}(), got ${o.length}`);
                                                                          if (o.length > t.maxArgs) throw new Error(`Expected at most ${t.maxArgs} ${r(t.maxArgs)} for ${e}(), got ${o.length}`);
                                                                          return new Promise((r, i) => {
                                                                              if (t.fallbackToNoCallback)
                                                                                  try {
                                                                                      a[e](...o, n({ resolve: r, reject: i }, t));
                                                                                  } catch (n) {
                                                                                      console.warn(e + " API method doesn't seem to support the callback parameter, falling back to call it without a callback: ", n),
                                                                                          a[e](...o),
                                                                                          (t.fallbackToNoCallback = !1),
                                                                                          (t.noCallback = !0),
                                                                                          r();
                                                                                  }
                                                                              else t.noCallback ? (a[e](...o), r()) : a[e](...o, n({ resolve: r, reject: i }, t));
                                                                          });
                                                                      })(c, l[c]);
                                                                  s = a(e, e[c], t);
                                                              } else s = s.bind(e);
                                                          else {
                                                              if ("object" != typeof s || null === s || (!o(t, c) && !o(l, c)))
                                                                  return (
                                                                      Object.defineProperty(u, c, {
                                                                          configurable: !0,
                                                                          enumerable: !0,
                                                                          get: () => e[c],
                                                                          set(t) {
                                                                              e[c] = t;
                                                                          },
                                                                      }),
                                                                      s
                                                                  );
                                                              s = i(s, t[c], l[c]);
                                                          }
                                                          return (u[c] = s), s;
                                                      }
                                                  },
                                                  set: (t, n, r) => (n in u ? (u[n] = r) : (e[n] = r), !0),
                                                  defineProperty: (e, t, n) => Reflect.defineProperty(u, t, n),
                                                  deleteProperty: (e, t) => Reflect.deleteProperty(u, t),
                                              },
                                              c = Object.create(e);
                                          return new Proxy(c, s);
                                      },
                                      l = (e) => ({
                                          addListener(t, n, ...r) {
                                              t.addListener(e.get(n), ...r);
                                          },
                                          hasListener: (t, n) => t.hasListener(e.get(n)),
                                          removeListener(t, n) {
                                              t.removeListener(e.get(n));
                                          },
                                      });
                                  let u = !1;
                                  const s = new t((e) =>
                                          "function" == typeof e
                                              ? function (t, n, r) {
                                                    let a,
                                                        o,
                                                        i = !1,
                                                        l = new Promise((e) => {
                                                            a = function (t) {
                                                                u ||
                                                                    (console.warn(
                                                                        "Returning a Promise is the preferred way to send a reply from an onMessage/onMessageExternal listener, as the sendResponse will be removed from the specs (See https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage)",
                                                                        new Error().stack
                                                                    ),
                                                                    (u = !0)),
                                                                    (i = !0),
                                                                    e(t);
                                                            };
                                                        });
                                                    try {
                                                        o = e(t, n, a);
                                                    } catch (e) {
                                                        o = Promise.reject(e);
                                                    }
                                                    const s = !0 !== o && ((e) => e && "object" == typeof e && "function" == typeof e.then)(o);
                                                    if (!0 !== o && !s && !i) return !1;
                                                    const c = (e) => {
                                                        e.then(
                                                            (e) => {
                                                                r(e);
                                                            },
                                                            (e) => {
                                                                let t;
                                                                (t = e && (e instanceof Error || "string" == typeof e.message) ? e.message : "An unexpected error occurred"), r({ __mozWebExtensionPolyfillReject__: !0, message: t });
                                                            }
                                                        ).catch((e) => {
                                                            console.error("Failed to send onMessage rejected reply", e);
                                                        });
                                                    };
                                                    return c(s ? o : l), !0;
                                                }
                                              : e
                                      ),
                                      c = ({ reject: e, resolve: t }, n) => {
                                          chrome.runtime.lastError
                                              ? "The message port closed before a response was received." === chrome.runtime.lastError.message
                                                  ? t()
                                                  : e(chrome.runtime.lastError)
                                              : n && n.__mozWebExtensionPolyfillReject__
                                              ? e(new Error(n.message))
                                              : t(n);
                                      },
                                      f = (e, t, n, ...a) => {
                                          if (a.length < t.minArgs) throw new Error(`Expected at least ${t.minArgs} ${r(t.minArgs)} for ${e}(), got ${a.length}`);
                                          if (a.length > t.maxArgs) throw new Error(`Expected at most ${t.maxArgs} ${r(t.maxArgs)} for ${e}(), got ${a.length}`);
                                          return new Promise((e, t) => {
                                              const r = c.bind(null, { resolve: e, reject: t });
                                              a.push(r), n.sendMessage(...a);
                                          });
                                      },
                                      d = {
                                          runtime: { onMessage: l(s), onMessageExternal: l(s), sendMessage: f.bind(null, "sendMessage", { minArgs: 1, maxArgs: 3 }) },
                                          tabs: { sendMessage: f.bind(null, "sendMessage", { minArgs: 2, maxArgs: 3 }) },
                                      },
                                      p = { clear: { minArgs: 1, maxArgs: 1 }, get: { minArgs: 1, maxArgs: 1 }, set: { minArgs: 1, maxArgs: 1 } };
                                  return (
                                      (e.privacy = { network: { networkPredictionEnabled: p, webRTCIPHandlingPolicy: p }, services: { passwordSavingEnabled: p }, websites: { hyperlinkAuditingEnabled: p, referrersEnabled: p } }),
                                      i(chrome, d, e)
                                  );
                              })())
                            : (e.exports = browser);
                    })
                        ? r.apply(t, a)
                        : r) || (e.exports = o);
    },
    function (e, t, n) {
        "use strict";
        n.d(t, "c", function () {
            return s;
        }),
            n.d(t, "e", function () {
                return c;
            }),
            n.d(t, "a", function () {
                return f;
            }),
            n.d(t, "d", function () {
                return d;
            }),
            n.d(t, "b", function () {
                return p;
            });
        var r = n(1),
            a = n.n(r),
            o = n(3),
            i = n.n(o),
            l = n(12);
        let u = {};
        const s = async () => {
                const e = await a.a.storage.local.get("Settings");
                u = e.Settings || {};
                let t = !1;
                const n = (e) => {
                    null != e.id && null != e.default && null == u[e.id] && ((u[e.id] = e.default), (t = !0));
                };
                l.a.forEach((e) => {
                    e.elements.forEach((e) => {
                        n(e),
                            e.childElements &&
                                e.childElements.forEach((e) => {
                                    n(e);
                                });
                    });
                }),
                    t && (await a.a.storage.local.set({ Settings: u }));
            },
            c = async (e, t) => {
                i.a.info("settings/settings", "setSettings()", e, t), (u[e] = t), await a.a.storage.local.set({ Settings: u });
            },
            f = (e) => u[e],
            d = async () => {
                i.a.info("settings/settings", "resetAllSettings()"), (u = {}), await a.a.storage.local.set({ Settings: u }), await s();
            },
            p = (e, t) => {
                Object.keys(e).includes("Settings") && (u = e.Settings.newValue);
            };
    },
    function (e, t, n) {
        var r, a;
        !(function (o, i) {
            "use strict";
            void 0 ===
                (a =
                    "function" ==
                    typeof (r = function () {
                        var e = function () {},
                            t = ["trace", "debug", "info", "warn", "error"];
                        function n(e, t) {
                            var n = e[t];
                            if ("function" == typeof n.bind) return n.bind(e);
                            try {
                                return Function.prototype.bind.call(n, e);
                            } catch (t) {
                                return function () {
                                    return Function.prototype.apply.apply(n, [e, arguments]);
                                };
                            }
                        }
                        function r(t) {
                            return "debug" === t && (t = "log"), "undefined" != typeof console && (void 0 !== console[t] ? n(console, t) : void 0 !== console.log ? n(console, "log") : e);
                        }
                        function a(n, r) {
                            for (var a = 0; a < t.length; a++) {
                                var o = t[a];
                                this[o] = a < n ? e : this.methodFactory(o, n, r);
                            }
                            this.log = this.debug;
                        }
                        function o(e, t, n) {
                            return function () {
                                "undefined" != typeof console && (a.call(this, t, n), this[e].apply(this, arguments));
                            };
                        }
                        function i(e, t, n) {
                            return r(e) || o.apply(this, arguments);
                        }
                        function l(e, n, r) {
                            var o,
                                l = this,
                                u = "loglevel";
                            function s() {
                                var e;
                                if ("undefined" != typeof window) {
                                    try {
                                        e = window.localStorage[u];
                                    } catch (e) {}
                                    if (void 0 === e)
                                        try {
                                            var t = window.document.cookie,
                                                n = t.indexOf(encodeURIComponent(u) + "=");
                                            -1 !== n && (e = /^([^;]+)/.exec(t.slice(n))[1]);
                                        } catch (e) {}
                                    return void 0 === l.levels[e] && (e = void 0), e;
                                }
                            }
                            e && (u += ":" + e),
                                (l.name = e),
                                (l.levels = { TRACE: 0, DEBUG: 1, INFO: 2, WARN: 3, ERROR: 4, SILENT: 5 }),
                                (l.methodFactory = r || i),
                                (l.getLevel = function () {
                                    return o;
                                }),
                                (l.setLevel = function (n, r) {
                                    if (("string" == typeof n && void 0 !== l.levels[n.toUpperCase()] && (n = l.levels[n.toUpperCase()]), !("number" == typeof n && n >= 0 && n <= l.levels.SILENT)))
                                        throw "log.setLevel() called with invalid level: " + n;
                                    if (
                                        ((o = n),
                                        !1 !== r &&
                                            (function (e) {
                                                var n = (t[e] || "silent").toUpperCase();
                                                if ("undefined" != typeof window) {
                                                    try {
                                                        return void (window.localStorage[u] = n);
                                                    } catch (e) {}
                                                    try {
                                                        window.document.cookie = encodeURIComponent(u) + "=" + n + ";";
                                                    } catch (e) {}
                                                }
                                            })(n),
                                        a.call(l, n, e),
                                        "undefined" == typeof console && n < l.levels.SILENT)
                                    )
                                        return "No console available for logging";
                                }),
                                (l.setDefaultLevel = function (e) {
                                    s() || l.setLevel(e, !1);
                                }),
                                (l.enableAll = function (e) {
                                    l.setLevel(l.levels.TRACE, e);
                                }),
                                (l.disableAll = function (e) {
                                    l.setLevel(l.levels.SILENT, e);
                                });
                            var c = s();
                            null == c && (c = null == n ? "WARN" : n), l.setLevel(c, !1);
                        }
                        var u = new l(),
                            s = {};
                        u.getLogger = function (e) {
                            if ("string" != typeof e || "" === e) throw new TypeError("You must supply a name when creating a logger.");
                            var t = s[e];
                            return t || (t = s[e] = new l(e, u.getLevel(), u.methodFactory)), t;
                        };
                        var c = "undefined" != typeof window ? window.log : void 0;
                        return (
                            (u.noConflict = function () {
                                return "undefined" != typeof window && window.log === u && (window.log = c), u;
                            }),
                            (u.getLoggers = function () {
                                return s;
                            }),
                            u
                        );
                    })
                        ? r.call(t, n, t, e)
                        : r) || (e.exports = a);
        })();
    },
    ,
    ,
    ,
    function (e, t, n) {
        "use strict";
        var r = n(1),
            a = n.n(r);
        const o = (e, t) => e.name.localeCompare(t.name);
        t.a = () => {
            const e = a.a.i18n
                .getMessage("langList")
                .split(", ")
                .map((e) => ({ value: e.split(":")[0], name: e.split(":")[1] }));
            return e.sort(o), e;
        };
    },
    function (e, t, n) {
        "use strict";
        n.d(t, "a", function () {
            return l;
        }),
            n.d(t, "b", function () {
                return u;
            });
        var r = n(3),
            a = n.n(r),
            o = n(2);
        let i = !1;
        const l = () => {
                if (i) return;
                i = !0;
                const e = a.a.methodFactory;
                a.a.methodFactory = (t, n, r) => {
                    const a = e(t, n, r);
                    return (e, ...n) => {
                        a(`[${t}]`, e + ":", ...n);
                    };
                };
            },
            u = () => {
                Object(o.a)("isDebugMode") ? a.a.enableAll() : a.a.disableAll();
            };
    },
    ,
    ,
    function (e, t, n) {
        "use strict";
        !(function e() {
            if ("undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE) {
                0;
                try {
                    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
                } catch (e) {
                    console.error(e);
                }
            }
        })(),
            (e.exports = n(22));
    },
    function (e, t, n) {
        "use strict";
        var r = n(1),
            a = n.n(r),
            o = n(7);
        const i = Object(o.a)(),
            l = (() => {
                const e = a.a.i18n.getUILanguage(),
                    t = Object(o.a)().some((t) => t.value == e) ? e : "en";
                return { targetLang: t, secondTargetLang: "en" === t ? "ja" : "en" };
            })();
        t.a = [
            {
                category: "generalLabel",
                elements: [
                    { id: "targetLang", title: "targetLangLabel", captions: ["targetLangCaptionLabel"], type: "select", default: l.targetLang, options: i, useRawOptionName: !0 },
                    { id: "secondTargetLang", title: "secondTargetLangLabel", captions: ["secondTargetLangCaptionLabel"], type: "select", default: l.secondTargetLang, options: i, useRawOptionName: !0 },
                    { id: "ifShowCandidate", title: "ifShowCandidateLabel", captions: ["ifShowCandidateCaptionLabel"], type: "checkbox", default: !0 },
                ],
            },
            {
                category: "webPageLabel",
                elements: [
                    {
                        id: "whenSelectText",
                        title: "whenSelectTextLabel",
                        captions: [],
                        type: "none",
                        default: "showButton",
                        childElements: [
                            { id: "whenSelectText", title: "ifShowButtonLabel", captions: ["ifShowButtonCaptionLabel"], type: "radio", value: "showButton" },
                            { id: "whenSelectText", title: "ifAutoTranslateLabel", captions: ["ifAutoTranslateCaptionLabel"], type: "radio", value: "showPanel" },
                            { id: "whenSelectText", title: "dontShowButtonLabel", captions: ["dontShowButtonCaptionLabel"], type: "radio", value: "dontShowButton" },
                            { id: "ifCheckLang", title: "ifCheckLangLabel", captions: ["ifCheckLangCaptionLabel"], type: "checkbox", default: !0, hr: !0 },
                        ],
                    },
                    { id: "ifChangeSecondLangOnPage", title: "ifChangeSecondLangLabel", captions: ["ifChangeSecondLangOnPageCaptionLabel"], type: "checkbox", default: !1 },
                    { id: "isDisabledInTextFields", title: "isDisabledInTextFieldsLabel", captions: ["isDisabledInTextFieldsCaptionLabel"], type: "checkbox", default: !1 },
                    { id: "disableUrlList", title: "disableUrlListLabel", captions: ["disableUrlListCaptionLabel"], type: "textarea", default: "", placeholder: "https://example.com/*\nhttps://example.net/*" },
                ],
            },
            {
                category: "toolbarLabel",
                elements: [
                    { id: "waitTime", title: "waitTimeLabel", captions: ["waitTimeCaptionLabel", "waitTime2CaptionLabel"], type: "number", min: 0, placeholder: 500, default: 500 },
                    { id: "ifChangeSecondLang", title: "ifChangeSecondLangLabel", captions: ["ifChangeSecondLangCaptionLabel"], type: "checkbox", default: !0 },
                ],
            },
            { category: "menuLabel", elements: [{ id: "ifShowMenu", title: "ifShowMenuLabel", captions: ["ifShowMenuCaptionLabel"], type: "checkbox", default: !0 }] },
            {
                category: "styleLabel",
                elements: [
                    {
                        title: "buttonStyleLabel",
                        captions: ["buttonStyleCaptionLabel"],
                        type: "none",
                        childElements: [
                            { id: "buttonSize", title: "buttonSizeLabel", captions: [], type: "number", min: 1, placeholder: 22, default: 22 },
                            {
                                id: "buttonDirection",
                                title: "displayDirectionLabel",
                                captions: [],
                                type: "select",
                                default: "bottomRight",
                                options: [
                                    { name: "topLabel", value: "top" },
                                    { name: "bottomLabel", value: "bottom" },
                                    { name: "rightLabel", value: "right" },
                                    { name: "leftLabel", value: "left" },
                                    { name: "topRightLabel", value: "topRight" },
                                    { name: "topLeftLabel", value: "topLeft" },
                                    { name: "bottomRightLabel", value: "bottomRight" },
                                    { name: "bottomLeftLabel", value: "bottomLeft" },
                                ],
                            },
                            { id: "buttonOffset", title: "positionOffsetLabel", captions: [], type: "number", default: 10, placeholder: 10 },
                        ],
                    },
                    {
                        title: "panelStyleLabel",
                        captions: ["panelStyleCaptionLabel"],
                        type: "none",
                        childElements: [
                            { id: "width", title: "widthLabel", captions: [], type: "number", min: 1, placeholder: 300, default: 300 },
                            { id: "height", title: "heightLabel", captions: [], type: "number", min: 1, placeholder: 200, default: 200 },
                            { id: "fontSize", title: "fontSizeLabel", captions: [], type: "number", min: 1, placeholder: 13, default: 13 },
                            {
                                id: "panelReferencePoint",
                                title: "referencePointLabel",
                                captions: [],
                                type: "select",
                                default: "bottomSelectedText",
                                options: [
                                    { name: "topSelectedTextLabel", value: "topSelectedText" },
                                    { name: "bottomSelectedTextLabel", value: "bottomSelectedText" },
                                    { name: "clickedPointLabel", value: "clickedPoint" },
                                ],
                            },
                            {
                                id: "panelDirection",
                                title: "displayDirectionLabel",
                                captions: [],
                                type: "select",
                                default: "bottom",
                                options: [
                                    { name: "topLabel", value: "top" },
                                    { name: "bottomLabel", value: "bottom" },
                                    { name: "rightLabel", value: "right" },
                                    { name: "leftLabel", value: "left" },
                                    { name: "topRightLabel", value: "topRight" },
                                    { name: "topLeftLabel", value: "topLeft" },
                                    { name: "bottomRightLabel", value: "bottomRight" },
                                    { name: "bottomLeftLabel", value: "bottomLeft" },
                                ],
                            },
                            { id: "panelOffset", title: "positionOffsetLabel", captions: [], type: "number", default: 10, placeholder: 10 },
                            { id: "resultFontColor", title: "resultFontColorLabel", captions: [], type: "color", default: "#000000" },
                            { id: "candidateFontColor", title: "candidateFontColorLabel", captions: [], type: "color", default: "#737373" },
                            { id: "bgColor", title: "bgColorLabel", captions: [], type: "color", default: "#ffffff" },
                        ],
                    },
                ],
            },
            {
                category: "otherLabel",
                elements: [
                    { id: "isShowOptionsPageWhenUpdated", title: "isShowOptionsPageWhenUpdatedLabel", captions: ["isShowOptionsPageWhenUpdatedCaptionLabel"], type: "checkbox", default: !0 },
                    { id: "isDebugMode", title: "isDebugModeLabel", captions: ["isDebugModeCaptionLabel"], type: "checkbox", default: !1 },
                ],
            },
        ];
    },
    ,
    ,
    ,
    ,
    function (e, t, n) {
        "use strict";
        /*
object-assign
(c) Sindre Sorhus
@license MIT
*/ var r = Object.getOwnPropertySymbols,
            a = Object.prototype.hasOwnProperty,
            o = Object.prototype.propertyIsEnumerable;
        function i(e) {
            if (null == e) throw new TypeError("Object.assign cannot be called with null or undefined");
            return Object(e);
        }
        e.exports = (function () {
            try {
                if (!Object.assign) return !1;
                var e = new String("abc");
                if (((e[5] = "de"), "5" === Object.getOwnPropertyNames(e)[0])) return !1;
                for (var t = {}, n = 0; n < 10; n++) t["_" + String.fromCharCode(n)] = n;
                if (
                    "0123456789" !==
                    Object.getOwnPropertyNames(t)
                        .map(function (e) {
                            return t[e];
                        })
                        .join("")
                )
                    return !1;
                var r = {};
                return (
                    "abcdefghijklmnopqrst".split("").forEach(function (e) {
                        r[e] = e;
                    }),
                    "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, r)).join("")
                );
            } catch (e) {
                return !1;
            }
        })()
            ? Object.assign
            : function (e, t) {
                  for (var n, l, u = i(e), s = 1; s < arguments.length; s++) {
                      for (var c in (n = Object(arguments[s]))) a.call(n, c) && (u[c] = n[c]);
                      if (r) {
                          l = r(n);
                          for (var f = 0; f < l.length; f++) o.call(n, l[f]) && (u[l[f]] = n[l[f]]);
                      }
                  }
                  return u;
              };
    },
    function (e, t, n) {
        "use strict";
        e.exports = function (e, t, n, r, a, o, i, l) {
            if (!e) {
                var u;
                if (void 0 === t) u = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
                else {
                    var s = [n, r, a, o, i, l],
                        c = 0;
                    (u = new Error(
                        t.replace(/%s/g, function () {
                            return s[c++];
                        })
                    )).name = "Invariant Violation";
                }
                throw ((u.framesToPop = 1), u);
            }
        };
    },
    function (e, t, n) {
        "use strict";
        e.exports = {};
    },
    function (e, t, n) {
        "use strict";
        function r(e) {
            return function () {
                return e;
            };
        }
        var a = function () {};
        (a.thatReturns = r),
            (a.thatReturnsFalse = r(!1)),
            (a.thatReturnsTrue = r(!0)),
            (a.thatReturnsNull = r(null)),
            (a.thatReturnsThis = function () {
                return this;
            }),
            (a.thatReturnsArgument = function (e) {
                return e;
            }),
            (e.exports = a);
    },
    function (e, t, n) {
        "use strict";
        /** @license React v16.4.2
         * react.production.min.js
         *
         * Copyright (c) 2013-present, Facebook, Inc.
         *
         * This source code is licensed under the MIT license found in the
         * LICENSE file in the root directory of this source tree.
         */ var r = n(17),
            a = n(18),
            o = n(19),
            i = n(20),
            l = "function" == typeof Symbol && Symbol.for,
            u = l ? Symbol.for("react.element") : 60103,
            s = l ? Symbol.for("react.portal") : 60106,
            c = l ? Symbol.for("react.fragment") : 60107,
            f = l ? Symbol.for("react.strict_mode") : 60108,
            d = l ? Symbol.for("react.profiler") : 60114,
            p = l ? Symbol.for("react.provider") : 60109,
            m = l ? Symbol.for("react.context") : 60110,
            g = l ? Symbol.for("react.async_mode") : 60111,
            h = l ? Symbol.for("react.forward_ref") : 60112;
        l && Symbol.for("react.timeout");
        var v = "function" == typeof Symbol && Symbol.iterator;
        function y(e) {
            for (var t = arguments.length - 1, n = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, r = 0; r < t; r++) n += "&args[]=" + encodeURIComponent(arguments[r + 1]);
            a(!1, "Minified React error #" + e + "; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ", n);
        }
        var b = {
            isMounted: function () {
                return !1;
            },
            enqueueForceUpdate: function () {},
            enqueueReplaceState: function () {},
            enqueueSetState: function () {},
        };
        function x(e, t, n) {
            (this.props = e), (this.context = t), (this.refs = o), (this.updater = n || b);
        }
        function w() {}
        function k(e, t, n) {
            (this.props = e), (this.context = t), (this.refs = o), (this.updater = n || b);
        }
        (x.prototype.isReactComponent = {}),
            (x.prototype.setState = function (e, t) {
                "object" != typeof e && "function" != typeof e && null != e && y("85"), this.updater.enqueueSetState(this, e, t, "setState");
            }),
            (x.prototype.forceUpdate = function (e) {
                this.updater.enqueueForceUpdate(this, e, "forceUpdate");
            }),
            (w.prototype = x.prototype);
        var A = (k.prototype = new w());
        (A.constructor = k), r(A, x.prototype), (A.isPureReactComponent = !0);
        var C = { current: null },
            T = Object.prototype.hasOwnProperty,
            E = { key: !0, ref: !0, __self: !0, __source: !0 };
        function S(e, t, n) {
            var r = void 0,
                a = {},
                o = null,
                i = null;
            if (null != t) for (r in (void 0 !== t.ref && (i = t.ref), void 0 !== t.key && (o = "" + t.key), t)) T.call(t, r) && !E.hasOwnProperty(r) && (a[r] = t[r]);
            var l = arguments.length - 2;
            if (1 === l) a.children = n;
            else if (1 < l) {
                for (var s = Array(l), c = 0; c < l; c++) s[c] = arguments[c + 2];
                a.children = s;
            }
            if (e && e.defaultProps) for (r in (l = e.defaultProps)) void 0 === a[r] && (a[r] = l[r]);
            return { $$typeof: u, type: e, key: o, ref: i, props: a, _owner: C.current };
        }
        function _(e) {
            return "object" == typeof e && null !== e && e.$$typeof === u;
        }
        var P = /\/+/g,
            L = [];
        function N(e, t, n, r) {
            if (L.length) {
                var a = L.pop();
                return (a.result = e), (a.keyPrefix = t), (a.func = n), (a.context = r), (a.count = 0), a;
            }
            return { result: e, keyPrefix: t, func: n, context: r, count: 0 };
        }
        function O(e) {
            (e.result = null), (e.keyPrefix = null), (e.func = null), (e.context = null), (e.count = 0), 10 > L.length && L.push(e);
        }
        function R(e, t, n, r) {
            var a = typeof e;
            ("undefined" !== a && "boolean" !== a) || (e = null);
            var o = !1;
            if (null === e) o = !0;
            else
                switch (a) {
                    case "string":
                    case "number":
                        o = !0;
                        break;
                    case "object":
                        switch (e.$$typeof) {
                            case u:
                            case s:
                                o = !0;
                        }
                }
            if (o) return n(r, e, "" === t ? "." + I(e, 0) : t), 1;
            if (((o = 0), (t = "" === t ? "." : t + ":"), Array.isArray(e)))
                for (var i = 0; i < e.length; i++) {
                    var l = t + I((a = e[i]), i);
                    o += R(a, l, n, r);
                }
            else if ((null == e ? (l = null) : (l = "function" == typeof (l = (v && e[v]) || e["@@iterator"]) ? l : null), "function" == typeof l))
                for (e = l.call(e), i = 0; !(a = e.next()).done; ) o += R((a = a.value), (l = t + I(a, i++)), n, r);
            else "object" === a && y("31", "[object Object]" === (n = "" + e) ? "object with keys {" + Object.keys(e).join(", ") + "}" : n, "");
            return o;
        }
        function I(e, t) {
            return "object" == typeof e && null !== e && null != e.key
                ? (function (e) {
                      var t = { "=": "=0", ":": "=2" };
                      return (
                          "$" +
                          ("" + e).replace(/[=:]/g, function (e) {
                              return t[e];
                          })
                      );
                  })(e.key)
                : t.toString(36);
        }
        function M(e, t) {
            e.func.call(e.context, t, e.count++);
        }
        function U(e, t, n) {
            var r = e.result,
                a = e.keyPrefix;
            (e = e.func.call(e.context, t, e.count++)),
                Array.isArray(e)
                    ? F(e, r, n, i.thatReturnsArgument)
                    : null != e &&
                      (_(e) && ((t = a + (!e.key || (t && t.key === e.key) ? "" : ("" + e.key).replace(P, "$&/") + "/") + n), (e = { $$typeof: u, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner })), r.push(e));
        }
        function F(e, t, n, r, a) {
            var o = "";
            null != n && (o = ("" + n).replace(P, "$&/") + "/"), (t = N(t, o, r, a)), null == e || R(e, "", U, t), O(t);
        }
        var D = {
                Children: {
                    map: function (e, t, n) {
                        if (null == e) return e;
                        var r = [];
                        return F(e, r, null, t, n), r;
                    },
                    forEach: function (e, t, n) {
                        if (null == e) return e;
                        (t = N(null, null, t, n)), null == e || R(e, "", M, t), O(t);
                    },
                    count: function (e) {
                        return null == e ? 0 : R(e, "", i.thatReturnsNull, null);
                    },
                    toArray: function (e) {
                        var t = [];
                        return F(e, t, null, i.thatReturnsArgument), t;
                    },
                    only: function (e) {
                        return _(e) || y("143"), e;
                    },
                },
                createRef: function () {
                    return { current: null };
                },
                Component: x,
                PureComponent: k,
                createContext: function (e, t) {
                    return (
                        void 0 === t && (t = null),
                        ((e = { $$typeof: m, _calculateChangedBits: t, _defaultValue: e, _currentValue: e, _currentValue2: e, _changedBits: 0, _changedBits2: 0, Provider: null, Consumer: null }).Provider = { $$typeof: p, _context: e }),
                        (e.Consumer = e)
                    );
                },
                forwardRef: function (e) {
                    return { $$typeof: h, render: e };
                },
                Fragment: c,
                StrictMode: f,
                unstable_AsyncMode: g,
                unstable_Profiler: d,
                createElement: S,
                cloneElement: function (e, t, n) {
                    null == e && y("267", e);
                    var a = void 0,
                        o = r({}, e.props),
                        i = e.key,
                        l = e.ref,
                        s = e._owner;
                    if (null != t) {
                        void 0 !== t.ref && ((l = t.ref), (s = C.current)), void 0 !== t.key && (i = "" + t.key);
                        var c = void 0;
                        for (a in (e.type && e.type.defaultProps && (c = e.type.defaultProps), t)) T.call(t, a) && !E.hasOwnProperty(a) && (o[a] = void 0 === t[a] && void 0 !== c ? c[a] : t[a]);
                    }
                    if (1 === (a = arguments.length - 2)) o.children = n;
                    else if (1 < a) {
                        c = Array(a);
                        for (var f = 0; f < a; f++) c[f] = arguments[f + 2];
                        o.children = c;
                    }
                    return { $$typeof: u, type: e.type, key: i, ref: l, props: o, _owner: s };
                },
                createFactory: function (e) {
                    var t = S.bind(null, e);
                    return (t.type = e), t;
                },
                isValidElement: _,
                version: "16.4.2",
                __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: { ReactCurrentOwner: C, assign: r },
            },
            j = { default: D },
            z = (j && D) || j;
        e.exports = z.default ? z.default : z;
    },
    function (e, t, n) {
        "use strict";
        /** @license React v16.4.2
         * react-dom.production.min.js
         *
         * Copyright (c) 2013-present, Facebook, Inc.
         *
         * This source code is licensed under the MIT license found in the
         * LICENSE file in the root directory of this source tree.
         */ var r = n(18),
            a = n(0),
            o = n(23),
            i = n(17),
            l = n(20),
            u = n(24),
            s = n(25),
            c = n(26),
            f = n(19);
        function d(e) {
            for (var t = arguments.length - 1, n = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, a = 0; a < t; a++) n += "&args[]=" + encodeURIComponent(arguments[a + 1]);
            r(!1, "Minified React error #" + e + "; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ", n);
        }
        function p(e, t, n, r, a, o, i, l, u) {
            (this._hasCaughtError = !1), (this._caughtError = null);
            var s = Array.prototype.slice.call(arguments, 3);
            try {
                t.apply(n, s);
            } catch (e) {
                (this._caughtError = e), (this._hasCaughtError = !0);
            }
        }
        a || d("227");
        var m = {
            _caughtError: null,
            _hasCaughtError: !1,
            _rethrowError: null,
            _hasRethrowError: !1,
            invokeGuardedCallback: function (e, t, n, r, a, o, i, l, u) {
                p.apply(m, arguments);
            },
            invokeGuardedCallbackAndCatchFirstError: function (e, t, n, r, a, o, i, l, u) {
                if ((m.invokeGuardedCallback.apply(this, arguments), m.hasCaughtError())) {
                    var s = m.clearCaughtError();
                    m._hasRethrowError || ((m._hasRethrowError = !0), (m._rethrowError = s));
                }
            },
            rethrowCaughtError: function () {
                return g.apply(m, arguments);
            },
            hasCaughtError: function () {
                return m._hasCaughtError;
            },
            clearCaughtError: function () {
                if (m._hasCaughtError) {
                    var e = m._caughtError;
                    return (m._caughtError = null), (m._hasCaughtError = !1), e;
                }
                d("198");
            },
        };
        function g() {
            if (m._hasRethrowError) {
                var e = m._rethrowError;
                throw ((m._rethrowError = null), (m._hasRethrowError = !1), e);
            }
        }
        var h = null,
            v = {};
        function y() {
            if (h)
                for (var e in v) {
                    var t = v[e],
                        n = h.indexOf(e);
                    if ((-1 < n || d("96", e), !x[n]))
                        for (var r in (t.extractEvents || d("97", e), (x[n] = t), (n = t.eventTypes))) {
                            var a = void 0,
                                o = n[r],
                                i = t,
                                l = r;
                            w.hasOwnProperty(l) && d("99", l), (w[l] = o);
                            var u = o.phasedRegistrationNames;
                            if (u) {
                                for (a in u) u.hasOwnProperty(a) && b(u[a], i, l);
                                a = !0;
                            } else o.registrationName ? (b(o.registrationName, i, l), (a = !0)) : (a = !1);
                            a || d("98", r, e);
                        }
                }
        }
        function b(e, t, n) {
            k[e] && d("100", e), (k[e] = t), (A[e] = t.eventTypes[n].dependencies);
        }
        var x = [],
            w = {},
            k = {},
            A = {};
        function C(e) {
            h && d("101"), (h = Array.prototype.slice.call(e)), y();
        }
        function T(e) {
            var t,
                n = !1;
            for (t in e)
                if (e.hasOwnProperty(t)) {
                    var r = e[t];
                    (v.hasOwnProperty(t) && v[t] === r) || (v[t] && d("102", t), (v[t] = r), (n = !0));
                }
            n && y();
        }
        var E = { plugins: x, eventNameDispatchConfigs: w, registrationNameModules: k, registrationNameDependencies: A, possibleRegistrationNames: null, injectEventPluginOrder: C, injectEventPluginsByName: T },
            S = null,
            _ = null,
            P = null;
        function L(e, t, n, r) {
            (t = e.type || "unknown-event"), (e.currentTarget = P(r)), m.invokeGuardedCallbackAndCatchFirstError(t, n, void 0, e), (e.currentTarget = null);
        }
        function N(e, t) {
            return null == t && d("30"), null == e ? t : Array.isArray(e) ? (Array.isArray(t) ? (e.push.apply(e, t), e) : (e.push(t), e)) : Array.isArray(t) ? [e].concat(t) : [e, t];
        }
        function O(e, t, n) {
            Array.isArray(e) ? e.forEach(t, n) : e && t.call(n, e);
        }
        var R = null;
        function I(e, t) {
            if (e) {
                var n = e._dispatchListeners,
                    r = e._dispatchInstances;
                if (Array.isArray(n)) for (var a = 0; a < n.length && !e.isPropagationStopped(); a++) L(e, t, n[a], r[a]);
                else n && L(e, t, n, r);
                (e._dispatchListeners = null), (e._dispatchInstances = null), e.isPersistent() || e.constructor.release(e);
            }
        }
        function M(e) {
            return I(e, !0);
        }
        function U(e) {
            return I(e, !1);
        }
        var F = { injectEventPluginOrder: C, injectEventPluginsByName: T };
        function D(e, t) {
            var n = e.stateNode;
            if (!n) return null;
            var r = S(n);
            if (!r) return null;
            n = r[t];
            e: switch (t) {
                case "onClick":
                case "onClickCapture":
                case "onDoubleClick":
                case "onDoubleClickCapture":
                case "onMouseDown":
                case "onMouseDownCapture":
                case "onMouseMove":
                case "onMouseMoveCapture":
                case "onMouseUp":
                case "onMouseUpCapture":
                    (r = !r.disabled) || (r = !("button" === (e = e.type) || "input" === e || "select" === e || "textarea" === e)), (e = !r);
                    break e;
                default:
                    e = !1;
            }
            return e ? null : (n && "function" != typeof n && d("231", t, typeof n), n);
        }
        function j(e, t) {
            null !== e && (R = N(R, e)), (e = R), (R = null), e && (O(e, t ? M : U), R && d("95"), m.rethrowCaughtError());
        }
        function z(e, t, n, r) {
            for (var a = null, o = 0; o < x.length; o++) {
                var i = x[o];
                i && (i = i.extractEvents(e, t, n, r)) && (a = N(a, i));
            }
            j(a, !1);
        }
        var B = { injection: F, getListener: D, runEventsInBatch: j, runExtractedEventsInBatch: z },
            W = Math.random().toString(36).slice(2),
            $ = "__reactInternalInstance$" + W,
            V = "__reactEventHandlers$" + W;
        function H(e) {
            if (e[$]) return e[$];
            for (; !e[$]; ) {
                if (!e.parentNode) return null;
                e = e.parentNode;
            }
            return 5 === (e = e[$]).tag || 6 === e.tag ? e : null;
        }
        function K(e) {
            if (5 === e.tag || 6 === e.tag) return e.stateNode;
            d("33");
        }
        function q(e) {
            return e[V] || null;
        }
        var Q = {
            precacheFiberNode: function (e, t) {
                t[$] = e;
            },
            getClosestInstanceFromNode: H,
            getInstanceFromNode: function (e) {
                return !(e = e[$]) || (5 !== e.tag && 6 !== e.tag) ? null : e;
            },
            getNodeFromInstance: K,
            getFiberCurrentPropsFromNode: q,
            updateFiberProps: function (e, t) {
                e[V] = t;
            },
        };
        function X(e) {
            do {
                e = e.return;
            } while (e && 5 !== e.tag);
            return e || null;
        }
        function Y(e, t, n) {
            for (var r = []; e; ) r.push(e), (e = X(e));
            for (e = r.length; 0 < e--; ) t(r[e], "captured", n);
            for (e = 0; e < r.length; e++) t(r[e], "bubbled", n);
        }
        function G(e, t, n) {
            (t = D(e, n.dispatchConfig.phasedRegistrationNames[t])) && ((n._dispatchListeners = N(n._dispatchListeners, t)), (n._dispatchInstances = N(n._dispatchInstances, e)));
        }
        function Z(e) {
            e && e.dispatchConfig.phasedRegistrationNames && Y(e._targetInst, G, e);
        }
        function J(e) {
            if (e && e.dispatchConfig.phasedRegistrationNames) {
                var t = e._targetInst;
                Y((t = t ? X(t) : null), G, e);
            }
        }
        function ee(e, t, n) {
            e && n && n.dispatchConfig.registrationName && (t = D(e, n.dispatchConfig.registrationName)) && ((n._dispatchListeners = N(n._dispatchListeners, t)), (n._dispatchInstances = N(n._dispatchInstances, e)));
        }
        function te(e) {
            e && e.dispatchConfig.registrationName && ee(e._targetInst, null, e);
        }
        function ne(e) {
            O(e, Z);
        }
        function re(e, t, n, r) {
            if (n && r)
                e: {
                    for (var a = n, o = r, i = 0, l = a; l; l = X(l)) i++;
                    l = 0;
                    for (var u = o; u; u = X(u)) l++;
                    for (; 0 < i - l; ) (a = X(a)), i--;
                    for (; 0 < l - i; ) (o = X(o)), l--;
                    for (; i--; ) {
                        if (a === o || a === o.alternate) break e;
                        (a = X(a)), (o = X(o));
                    }
                    a = null;
                }
            else a = null;
            for (o = a, a = []; n && n !== o && (null === (i = n.alternate) || i !== o); ) a.push(n), (n = X(n));
            for (n = []; r && r !== o && (null === (i = r.alternate) || i !== o); ) n.push(r), (r = X(r));
            for (r = 0; r < a.length; r++) ee(a[r], "bubbled", e);
            for (e = n.length; 0 < e--; ) ee(n[e], "captured", t);
        }
        var ae = {
            accumulateTwoPhaseDispatches: ne,
            accumulateTwoPhaseDispatchesSkipTarget: function (e) {
                O(e, J);
            },
            accumulateEnterLeaveDispatches: re,
            accumulateDirectDispatches: function (e) {
                O(e, te);
            },
        };
        function oe(e, t) {
            var n = {};
            return (n[e.toLowerCase()] = t.toLowerCase()), (n["Webkit" + e] = "webkit" + t), (n["Moz" + e] = "moz" + t), (n["ms" + e] = "MS" + t), (n["O" + e] = "o" + t.toLowerCase()), n;
        }
        var ie = { animationend: oe("Animation", "AnimationEnd"), animationiteration: oe("Animation", "AnimationIteration"), animationstart: oe("Animation", "AnimationStart"), transitionend: oe("Transition", "TransitionEnd") },
            le = {},
            ue = {};
        function se(e) {
            if (le[e]) return le[e];
            if (!ie[e]) return e;
            var t,
                n = ie[e];
            for (t in n) if (n.hasOwnProperty(t) && t in ue) return (le[e] = n[t]);
            return e;
        }
        o.canUseDOM &&
            ((ue = document.createElement("div").style),
            "AnimationEvent" in window || (delete ie.animationend.animation, delete ie.animationiteration.animation, delete ie.animationstart.animation),
            "TransitionEvent" in window || delete ie.transitionend.transition);
        var ce = se("animationend"),
            fe = se("animationiteration"),
            de = se("animationstart"),
            pe = se("transitionend"),
            me = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(
                " "
            ),
            ge = null;
        function he() {
            return !ge && o.canUseDOM && (ge = "textContent" in document.documentElement ? "textContent" : "innerText"), ge;
        }
        var ve = { _root: null, _startText: null, _fallbackText: null };
        function ye() {
            if (ve._fallbackText) return ve._fallbackText;
            var e,
                t,
                n = ve._startText,
                r = n.length,
                a = be(),
                o = a.length;
            for (e = 0; e < r && n[e] === a[e]; e++);
            var i = r - e;
            for (t = 1; t <= i && n[r - t] === a[o - t]; t++);
            return (ve._fallbackText = a.slice(e, 1 < t ? 1 - t : void 0)), ve._fallbackText;
        }
        function be() {
            return "value" in ve._root ? ve._root.value : ve._root[he()];
        }
        var xe = "dispatchConfig _targetInst nativeEvent isDefaultPrevented isPropagationStopped _dispatchListeners _dispatchInstances".split(" "),
            we = {
                type: null,
                target: null,
                currentTarget: l.thatReturnsNull,
                eventPhase: null,
                bubbles: null,
                cancelable: null,
                timeStamp: function (e) {
                    return e.timeStamp || Date.now();
                },
                defaultPrevented: null,
                isTrusted: null,
            };
        function ke(e, t, n, r) {
            for (var a in ((this.dispatchConfig = e), (this._targetInst = t), (this.nativeEvent = n), (e = this.constructor.Interface)))
                e.hasOwnProperty(a) && ((t = e[a]) ? (this[a] = t(n)) : "target" === a ? (this.target = r) : (this[a] = n[a]));
            return (this.isDefaultPrevented = (null != n.defaultPrevented ? n.defaultPrevented : !1 === n.returnValue) ? l.thatReturnsTrue : l.thatReturnsFalse), (this.isPropagationStopped = l.thatReturnsFalse), this;
        }
        function Ae(e, t, n, r) {
            if (this.eventPool.length) {
                var a = this.eventPool.pop();
                return this.call(a, e, t, n, r), a;
            }
            return new this(e, t, n, r);
        }
        function Ce(e) {
            e instanceof this || d("223"), e.destructor(), 10 > this.eventPool.length && this.eventPool.push(e);
        }
        function Te(e) {
            (e.eventPool = []), (e.getPooled = Ae), (e.release = Ce);
        }
        i(ke.prototype, {
            preventDefault: function () {
                this.defaultPrevented = !0;
                var e = this.nativeEvent;
                e && (e.preventDefault ? e.preventDefault() : "unknown" != typeof e.returnValue && (e.returnValue = !1), (this.isDefaultPrevented = l.thatReturnsTrue));
            },
            stopPropagation: function () {
                var e = this.nativeEvent;
                e && (e.stopPropagation ? e.stopPropagation() : "unknown" != typeof e.cancelBubble && (e.cancelBubble = !0), (this.isPropagationStopped = l.thatReturnsTrue));
            },
            persist: function () {
                this.isPersistent = l.thatReturnsTrue;
            },
            isPersistent: l.thatReturnsFalse,
            destructor: function () {
                var e,
                    t = this.constructor.Interface;
                for (e in t) this[e] = null;
                for (t = 0; t < xe.length; t++) this[xe[t]] = null;
            },
        }),
            (ke.Interface = we),
            (ke.extend = function (e) {
                function t() {}
                function n() {
                    return r.apply(this, arguments);
                }
                var r = this;
                t.prototype = r.prototype;
                var a = new t();
                return i(a, n.prototype), (n.prototype = a), (n.prototype.constructor = n), (n.Interface = i({}, r.Interface, e)), (n.extend = r.extend), Te(n), n;
            }),
            Te(ke);
        var Ee = ke.extend({ data: null }),
            Se = ke.extend({ data: null }),
            _e = [9, 13, 27, 32],
            Pe = o.canUseDOM && "CompositionEvent" in window,
            Le = null;
        o.canUseDOM && "documentMode" in document && (Le = document.documentMode);
        var Ne = o.canUseDOM && "TextEvent" in window && !Le,
            Oe = o.canUseDOM && (!Pe || (Le && 8 < Le && 11 >= Le)),
            Re = String.fromCharCode(32),
            Ie = {
                beforeInput: { phasedRegistrationNames: { bubbled: "onBeforeInput", captured: "onBeforeInputCapture" }, dependencies: ["compositionend", "keypress", "textInput", "paste"] },
                compositionEnd: { phasedRegistrationNames: { bubbled: "onCompositionEnd", captured: "onCompositionEndCapture" }, dependencies: "blur compositionend keydown keypress keyup mousedown".split(" ") },
                compositionStart: { phasedRegistrationNames: { bubbled: "onCompositionStart", captured: "onCompositionStartCapture" }, dependencies: "blur compositionstart keydown keypress keyup mousedown".split(" ") },
                compositionUpdate: { phasedRegistrationNames: { bubbled: "onCompositionUpdate", captured: "onCompositionUpdateCapture" }, dependencies: "blur compositionupdate keydown keypress keyup mousedown".split(" ") },
            },
            Me = !1;
        function Ue(e, t) {
            switch (e) {
                case "keyup":
                    return -1 !== _e.indexOf(t.keyCode);
                case "keydown":
                    return 229 !== t.keyCode;
                case "keypress":
                case "mousedown":
                case "blur":
                    return !0;
                default:
                    return !1;
            }
        }
        function Fe(e) {
            return "object" == typeof (e = e.detail) && "data" in e ? e.data : null;
        }
        var De = !1;
        var je = {
                eventTypes: Ie,
                extractEvents: function (e, t, n, r) {
                    var a = void 0,
                        o = void 0;
                    if (Pe)
                        e: {
                            switch (e) {
                                case "compositionstart":
                                    a = Ie.compositionStart;
                                    break e;
                                case "compositionend":
                                    a = Ie.compositionEnd;
                                    break e;
                                case "compositionupdate":
                                    a = Ie.compositionUpdate;
                                    break e;
                            }
                            a = void 0;
                        }
                    else De ? Ue(e, n) && (a = Ie.compositionEnd) : "keydown" === e && 229 === n.keyCode && (a = Ie.compositionStart);
                    return (
                        a
                            ? (Oe && (De || a !== Ie.compositionStart ? a === Ie.compositionEnd && De && (o = ye()) : ((ve._root = r), (ve._startText = be()), (De = !0))),
                              (a = Ee.getPooled(a, t, n, r)),
                              o ? (a.data = o) : null !== (o = Fe(n)) && (a.data = o),
                              ne(a),
                              (o = a))
                            : (o = null),
                        (e = Ne
                            ? (function (e, t) {
                                  switch (e) {
                                      case "compositionend":
                                          return Fe(t);
                                      case "keypress":
                                          return 32 !== t.which ? null : ((Me = !0), Re);
                                      case "textInput":
                                          return (e = t.data) === Re && Me ? null : e;
                                      default:
                                          return null;
                                  }
                              })(e, n)
                            : (function (e, t) {
                                  if (De) return "compositionend" === e || (!Pe && Ue(e, t)) ? ((e = ye()), (ve._root = null), (ve._startText = null), (ve._fallbackText = null), (De = !1), e) : null;
                                  switch (e) {
                                      case "paste":
                                          return null;
                                      case "keypress":
                                          if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
                                              if (t.char && 1 < t.char.length) return t.char;
                                              if (t.which) return String.fromCharCode(t.which);
                                          }
                                          return null;
                                      case "compositionend":
                                          return Oe ? null : t.data;
                                      default:
                                          return null;
                                  }
                              })(e, n))
                            ? (((t = Se.getPooled(Ie.beforeInput, t, n, r)).data = e), ne(t))
                            : (t = null),
                        null === o ? t : null === t ? o : [o, t]
                    );
                },
            },
            ze = null,
            Be = {
                injectFiberControlledHostComponent: function (e) {
                    ze = e;
                },
            },
            We = null,
            $e = null;
        function Ve(e) {
            if ((e = _(e))) {
                (ze && "function" == typeof ze.restoreControlledState) || d("194");
                var t = S(e.stateNode);
                ze.restoreControlledState(e.stateNode, e.type, t);
            }
        }
        function He(e) {
            We ? ($e ? $e.push(e) : ($e = [e])) : (We = e);
        }
        function Ke() {
            return null !== We || null !== $e;
        }
        function qe() {
            if (We) {
                var e = We,
                    t = $e;
                if ((($e = We = null), Ve(e), t)) for (e = 0; e < t.length; e++) Ve(t[e]);
            }
        }
        var Qe = { injection: Be, enqueueStateRestore: He, needsStateRestore: Ke, restoreStateIfNeeded: qe };
        function Xe(e, t) {
            return e(t);
        }
        function Ye(e, t, n) {
            return e(t, n);
        }
        function Ge() {}
        var Ze = !1;
        function Je(e, t) {
            if (Ze) return e(t);
            Ze = !0;
            try {
                return Xe(e, t);
            } finally {
                (Ze = !1), Ke() && (Ge(), qe());
            }
        }
        var et = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
        function tt(e) {
            var t = e && e.nodeName && e.nodeName.toLowerCase();
            return "input" === t ? !!et[e.type] : "textarea" === t;
        }
        function nt(e) {
            return (e = e.target || e.srcElement || window).correspondingUseElement && (e = e.correspondingUseElement), 3 === e.nodeType ? e.parentNode : e;
        }
        function rt(e, t) {
            return !(!o.canUseDOM || (t && !("addEventListener" in document))) && ((t = (e = "on" + e) in document) || ((t = document.createElement("div")).setAttribute(e, "return;"), (t = "function" == typeof t[e])), t);
        }
        function at(e) {
            var t = e.type;
            return (e = e.nodeName) && "input" === e.toLowerCase() && ("checkbox" === t || "radio" === t);
        }
        function ot(e) {
            e._valueTracker ||
                (e._valueTracker = (function (e) {
                    var t = at(e) ? "checked" : "value",
                        n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
                        r = "" + e[t];
                    if (!e.hasOwnProperty(t) && void 0 !== n && "function" == typeof n.get && "function" == typeof n.set) {
                        var a = n.get,
                            o = n.set;
                        return (
                            Object.defineProperty(e, t, {
                                configurable: !0,
                                get: function () {
                                    return a.call(this);
                                },
                                set: function (e) {
                                    (r = "" + e), o.call(this, e);
                                },
                            }),
                            Object.defineProperty(e, t, { enumerable: n.enumerable }),
                            {
                                getValue: function () {
                                    return r;
                                },
                                setValue: function (e) {
                                    r = "" + e;
                                },
                                stopTracking: function () {
                                    (e._valueTracker = null), delete e[t];
                                },
                            }
                        );
                    }
                })(e));
        }
        function it(e) {
            if (!e) return !1;
            var t = e._valueTracker;
            if (!t) return !0;
            var n = t.getValue(),
                r = "";
            return e && (r = at(e) ? (e.checked ? "true" : "false") : e.value), (e = r) !== n && (t.setValue(e), !0);
        }
        var lt = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
            ut = "function" == typeof Symbol && Symbol.for,
            st = ut ? Symbol.for("react.element") : 60103,
            ct = ut ? Symbol.for("react.portal") : 60106,
            ft = ut ? Symbol.for("react.fragment") : 60107,
            dt = ut ? Symbol.for("react.strict_mode") : 60108,
            pt = ut ? Symbol.for("react.profiler") : 60114,
            mt = ut ? Symbol.for("react.provider") : 60109,
            gt = ut ? Symbol.for("react.context") : 60110,
            ht = ut ? Symbol.for("react.async_mode") : 60111,
            vt = ut ? Symbol.for("react.forward_ref") : 60112,
            yt = ut ? Symbol.for("react.timeout") : 60113,
            bt = "function" == typeof Symbol && Symbol.iterator;
        function xt(e) {
            return null == e ? null : "function" == typeof (e = (bt && e[bt]) || e["@@iterator"]) ? e : null;
        }
        function wt(e) {
            var t = e.type;
            if ("function" == typeof t) return t.displayName || t.name;
            if ("string" == typeof t) return t;
            switch (t) {
                case ht:
                    return "AsyncMode";
                case gt:
                    return "Context.Consumer";
                case ft:
                    return "ReactFragment";
                case ct:
                    return "ReactPortal";
                case pt:
                    return "Profiler(" + e.pendingProps.id + ")";
                case mt:
                    return "Context.Provider";
                case dt:
                    return "StrictMode";
                case yt:
                    return "Timeout";
            }
            if ("object" == typeof t && null !== t)
                switch (t.$$typeof) {
                    case vt:
                        return "" !== (e = t.render.displayName || t.render.name || "") ? "ForwardRef(" + e + ")" : "ForwardRef";
                }
            return null;
        }
        function kt(e) {
            var t = "";
            do {
                e: switch (e.tag) {
                    case 0:
                    case 1:
                    case 2:
                    case 5:
                        var n = e._debugOwner,
                            r = e._debugSource,
                            a = wt(e),
                            o = null;
                        n && (o = wt(n)), (a = "\n    in " + (a || "Unknown") + ((n = r) ? " (at " + n.fileName.replace(/^.*[\\\/]/, "") + ":" + n.lineNumber + ")" : o ? " (created by " + o + ")" : ""));
                        break e;
                    default:
                        a = "";
                }
                (t += a), (e = e.return);
            } while (e);
            return t;
        }
        var At = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
            Ct = Object.prototype.hasOwnProperty,
            Tt = {},
            Et = {};
        function St(e, t, n, r, a) {
            (this.acceptsBooleans = 2 === t || 3 === t || 4 === t), (this.attributeName = r), (this.attributeNamespace = a), (this.mustUseProperty = n), (this.propertyName = e), (this.type = t);
        }
        var _t = {};
        "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function (e) {
            _t[e] = new St(e, 0, !1, e, null);
        }),
            [
                ["acceptCharset", "accept-charset"],
                ["className", "class"],
                ["htmlFor", "for"],
                ["httpEquiv", "http-equiv"],
            ].forEach(function (e) {
                var t = e[0];
                _t[t] = new St(t, 1, !1, e[1], null);
            }),
            ["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
                _t[e] = new St(e, 2, !1, e.toLowerCase(), null);
            }),
            ["autoReverse", "externalResourcesRequired", "preserveAlpha"].forEach(function (e) {
                _t[e] = new St(e, 2, !1, e, null);
            }),
            "allowFullScreen async autoFocus autoPlay controls default defer disabled formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function (e) {
                _t[e] = new St(e, 3, !1, e.toLowerCase(), null);
            }),
            ["checked", "multiple", "muted", "selected"].forEach(function (e) {
                _t[e] = new St(e, 3, !0, e.toLowerCase(), null);
            }),
            ["capture", "download"].forEach(function (e) {
                _t[e] = new St(e, 4, !1, e.toLowerCase(), null);
            }),
            ["cols", "rows", "size", "span"].forEach(function (e) {
                _t[e] = new St(e, 6, !1, e.toLowerCase(), null);
            }),
            ["rowSpan", "start"].forEach(function (e) {
                _t[e] = new St(e, 5, !1, e.toLowerCase(), null);
            });
        var Pt = /[\-:]([a-z])/g;
        function Lt(e) {
            return e[1].toUpperCase();
        }
        function Nt(e, t, n, r) {
            var a = _t.hasOwnProperty(t) ? _t[t] : null;
            (null !== a ? 0 === a.type : !r && 2 < t.length && ("o" === t[0] || "O" === t[0]) && ("n" === t[1] || "N" === t[1])) ||
                ((function (e, t, n, r) {
                    if (
                        null == t ||
                        (function (e, t, n, r) {
                            if (null !== n && 0 === n.type) return !1;
                            switch (typeof t) {
                                case "function":
                                case "symbol":
                                    return !0;
                                case "boolean":
                                    return !r && (null !== n ? !n.acceptsBooleans : "data-" !== (e = e.toLowerCase().slice(0, 5)) && "aria-" !== e);
                                default:
                                    return !1;
                            }
                        })(e, t, n, r)
                    )
                        return !0;
                    if (r) return !1;
                    if (null !== n)
                        switch (n.type) {
                            case 3:
                                return !t;
                            case 4:
                                return !1 === t;
                            case 5:
                                return isNaN(t);
                            case 6:
                                return isNaN(t) || 1 > t;
                        }
                    return !1;
                })(t, n, a, r) && (n = null),
                r || null === a
                    ? (function (e) {
                          return !!Ct.call(Et, e) || (!Ct.call(Tt, e) && (At.test(e) ? (Et[e] = !0) : ((Tt[e] = !0), !1)));
                      })(t) && (null === n ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
                    : a.mustUseProperty
                    ? (e[a.propertyName] = null === n ? 3 !== a.type && "" : n)
                    : ((t = a.attributeName), (r = a.attributeNamespace), null === n ? e.removeAttribute(t) : ((n = 3 === (a = a.type) || (4 === a && !0 === n) ? "" : "" + n), r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
        }
        function Ot(e, t) {
            var n = t.checked;
            return i({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: null != n ? n : e._wrapperState.initialChecked });
        }
        function Rt(e, t) {
            var n = null == t.defaultValue ? "" : t.defaultValue,
                r = null != t.checked ? t.checked : t.defaultChecked;
            (n = Dt(null != t.value ? t.value : n)), (e._wrapperState = { initialChecked: r, initialValue: n, controlled: "checkbox" === t.type || "radio" === t.type ? null != t.checked : null != t.value });
        }
        function It(e, t) {
            null != (t = t.checked) && Nt(e, "checked", t, !1);
        }
        function Mt(e, t) {
            It(e, t);
            var n = Dt(t.value);
            null != n && ("number" === t.type ? ((0 === n && "" === e.value) || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n)),
                t.hasOwnProperty("value") ? Ft(e, t.type, n) : t.hasOwnProperty("defaultValue") && Ft(e, t.type, Dt(t.defaultValue)),
                null == t.checked && null != t.defaultChecked && (e.defaultChecked = !!t.defaultChecked);
        }
        function Ut(e, t, n) {
            if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
                t = "" + e._wrapperState.initialValue;
                var r = e.value;
                n || t === r || (e.value = t), (e.defaultValue = t);
            }
            "" !== (n = e.name) && (e.name = ""), (e.defaultChecked = !e.defaultChecked), (e.defaultChecked = !e.defaultChecked), "" !== n && (e.name = n);
        }
        function Ft(e, t, n) {
            ("number" === t && e.ownerDocument.activeElement === e) || (null == n ? (e.defaultValue = "" + e._wrapperState.initialValue) : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
        }
        function Dt(e) {
            switch (typeof e) {
                case "boolean":
                case "number":
                case "object":
                case "string":
                case "undefined":
                    return e;
                default:
                    return "";
            }
        }
        "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
            .split(" ")
            .forEach(function (e) {
                var t = e.replace(Pt, Lt);
                _t[t] = new St(t, 1, !1, e, null);
            }),
            "xlink:actuate xlink:arcrole xlink:href xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function (e) {
                var t = e.replace(Pt, Lt);
                _t[t] = new St(t, 1, !1, e, "http://www.w3.org/1999/xlink");
            }),
            ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
                var t = e.replace(Pt, Lt);
                _t[t] = new St(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace");
            }),
            (_t.tabIndex = new St("tabIndex", 1, !1, "tabindex", null));
        var jt = { change: { phasedRegistrationNames: { bubbled: "onChange", captured: "onChangeCapture" }, dependencies: "blur change click focus input keydown keyup selectionchange".split(" ") } };
        function zt(e, t, n) {
            return ((e = ke.getPooled(jt.change, e, t, n)).type = "change"), He(n), ne(e), e;
        }
        var Bt = null,
            Wt = null;
        function $t(e) {
            j(e, !1);
        }
        function Vt(e) {
            if (it(K(e))) return e;
        }
        function Ht(e, t) {
            if ("change" === e) return t;
        }
        var Kt = !1;
        function qt() {
            Bt && (Bt.detachEvent("onpropertychange", Qt), (Wt = Bt = null));
        }
        function Qt(e) {
            "value" === e.propertyName && Vt(Wt) && Je($t, (e = zt(Wt, e, nt(e))));
        }
        function Xt(e, t, n) {
            "focus" === e ? (qt(), (Wt = n), (Bt = t).attachEvent("onpropertychange", Qt)) : "blur" === e && qt();
        }
        function Yt(e) {
            if ("selectionchange" === e || "keyup" === e || "keydown" === e) return Vt(Wt);
        }
        function Gt(e, t) {
            if ("click" === e) return Vt(t);
        }
        function Zt(e, t) {
            if ("input" === e || "change" === e) return Vt(t);
        }
        o.canUseDOM && (Kt = rt("input") && (!document.documentMode || 9 < document.documentMode));
        var Jt = {
                eventTypes: jt,
                _isInputEventSupported: Kt,
                extractEvents: function (e, t, n, r) {
                    var a = t ? K(t) : window,
                        o = void 0,
                        i = void 0,
                        l = a.nodeName && a.nodeName.toLowerCase();
                    if (
                        ("select" === l || ("input" === l && "file" === a.type)
                            ? (o = Ht)
                            : tt(a)
                            ? Kt
                                ? (o = Zt)
                                : ((o = Yt), (i = Xt))
                            : (l = a.nodeName) && "input" === l.toLowerCase() && ("checkbox" === a.type || "radio" === a.type) && (o = Gt),
                        o && (o = o(e, t)))
                    )
                        return zt(o, n, r);
                    i && i(e, a, t), "blur" === e && (e = a._wrapperState) && e.controlled && "number" === a.type && Ft(a, "number", a.value);
                },
            },
            en = ke.extend({ view: null, detail: null }),
            tn = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
        function nn(e) {
            var t = this.nativeEvent;
            return t.getModifierState ? t.getModifierState(e) : !!(e = tn[e]) && !!t[e];
        }
        function rn() {
            return nn;
        }
        var an = en.extend({
                screenX: null,
                screenY: null,
                clientX: null,
                clientY: null,
                pageX: null,
                pageY: null,
                ctrlKey: null,
                shiftKey: null,
                altKey: null,
                metaKey: null,
                getModifierState: rn,
                button: null,
                buttons: null,
                relatedTarget: function (e) {
                    return e.relatedTarget || (e.fromElement === e.srcElement ? e.toElement : e.fromElement);
                },
            }),
            on = an.extend({ pointerId: null, width: null, height: null, pressure: null, tiltX: null, tiltY: null, pointerType: null, isPrimary: null }),
            ln = {
                mouseEnter: { registrationName: "onMouseEnter", dependencies: ["mouseout", "mouseover"] },
                mouseLeave: { registrationName: "onMouseLeave", dependencies: ["mouseout", "mouseover"] },
                pointerEnter: { registrationName: "onPointerEnter", dependencies: ["pointerout", "pointerover"] },
                pointerLeave: { registrationName: "onPointerLeave", dependencies: ["pointerout", "pointerover"] },
            },
            un = {
                eventTypes: ln,
                extractEvents: function (e, t, n, r) {
                    var a = "mouseover" === e || "pointerover" === e,
                        o = "mouseout" === e || "pointerout" === e;
                    if ((a && (n.relatedTarget || n.fromElement)) || (!o && !a)) return null;
                    if (((a = r.window === r ? r : (a = r.ownerDocument) ? a.defaultView || a.parentWindow : window), o ? ((o = t), (t = (t = n.relatedTarget || n.toElement) ? H(t) : null)) : (o = null), o === t)) return null;
                    var i = void 0,
                        l = void 0,
                        u = void 0,
                        s = void 0;
                    return (
                        "mouseout" === e || "mouseover" === e
                            ? ((i = an), (l = ln.mouseLeave), (u = ln.mouseEnter), (s = "mouse"))
                            : ("pointerout" !== e && "pointerover" !== e) || ((i = on), (l = ln.pointerLeave), (u = ln.pointerEnter), (s = "pointer")),
                        (e = null == o ? a : K(o)),
                        (a = null == t ? a : K(t)),
                        ((l = i.getPooled(l, o, n, r)).type = s + "leave"),
                        (l.target = e),
                        (l.relatedTarget = a),
                        ((n = i.getPooled(u, t, n, r)).type = s + "enter"),
                        (n.target = a),
                        (n.relatedTarget = e),
                        re(l, n, o, t),
                        [l, n]
                    );
                },
            };
        function sn(e) {
            var t = e;
            if (e.alternate) for (; t.return; ) t = t.return;
            else {
                if (0 != (2 & t.effectTag)) return 1;
                for (; t.return; ) if (0 != (2 & (t = t.return).effectTag)) return 1;
            }
            return 3 === t.tag ? 2 : 3;
        }
        function cn(e) {
            2 !== sn(e) && d("188");
        }
        function fn(e) {
            var t = e.alternate;
            if (!t) return 3 === (t = sn(e)) && d("188"), 1 === t ? null : e;
            for (var n = e, r = t; ; ) {
                var a = n.return,
                    o = a ? a.alternate : null;
                if (!a || !o) break;
                if (a.child === o.child) {
                    for (var i = a.child; i; ) {
                        if (i === n) return cn(a), e;
                        if (i === r) return cn(a), t;
                        i = i.sibling;
                    }
                    d("188");
                }
                if (n.return !== r.return) (n = a), (r = o);
                else {
                    i = !1;
                    for (var l = a.child; l; ) {
                        if (l === n) {
                            (i = !0), (n = a), (r = o);
                            break;
                        }
                        if (l === r) {
                            (i = !0), (r = a), (n = o);
                            break;
                        }
                        l = l.sibling;
                    }
                    if (!i) {
                        for (l = o.child; l; ) {
                            if (l === n) {
                                (i = !0), (n = o), (r = a);
                                break;
                            }
                            if (l === r) {
                                (i = !0), (r = o), (n = a);
                                break;
                            }
                            l = l.sibling;
                        }
                        i || d("189");
                    }
                }
                n.alternate !== r && d("190");
            }
            return 3 !== n.tag && d("188"), n.stateNode.current === n ? e : t;
        }
        function dn(e) {
            if (!(e = fn(e))) return null;
            for (var t = e; ; ) {
                if (5 === t.tag || 6 === t.tag) return t;
                if (t.child) (t.child.return = t), (t = t.child);
                else {
                    if (t === e) break;
                    for (; !t.sibling; ) {
                        if (!t.return || t.return === e) return null;
                        t = t.return;
                    }
                    (t.sibling.return = t.return), (t = t.sibling);
                }
            }
            return null;
        }
        var pn = ke.extend({ animationName: null, elapsedTime: null, pseudoElement: null }),
            mn = ke.extend({
                clipboardData: function (e) {
                    return "clipboardData" in e ? e.clipboardData : window.clipboardData;
                },
            }),
            gn = en.extend({ relatedTarget: null });
        function hn(e) {
            var t = e.keyCode;
            return "charCode" in e ? 0 === (e = e.charCode) && 13 === t && (e = 13) : (e = t), 10 === e && (e = 13), 32 <= e || 13 === e ? e : 0;
        }
        var vn = {
                Esc: "Escape",
                Spacebar: " ",
                Left: "ArrowLeft",
                Up: "ArrowUp",
                Right: "ArrowRight",
                Down: "ArrowDown",
                Del: "Delete",
                Win: "OS",
                Menu: "ContextMenu",
                Apps: "ContextMenu",
                Scroll: "ScrollLock",
                MozPrintableKey: "Unidentified",
            },
            yn = {
                8: "Backspace",
                9: "Tab",
                12: "Clear",
                13: "Enter",
                16: "Shift",
                17: "Control",
                18: "Alt",
                19: "Pause",
                20: "CapsLock",
                27: "Escape",
                32: " ",
                33: "PageUp",
                34: "PageDown",
                35: "End",
                36: "Home",
                37: "ArrowLeft",
                38: "ArrowUp",
                39: "ArrowRight",
                40: "ArrowDown",
                45: "Insert",
                46: "Delete",
                112: "F1",
                113: "F2",
                114: "F3",
                115: "F4",
                116: "F5",
                117: "F6",
                118: "F7",
                119: "F8",
                120: "F9",
                121: "F10",
                122: "F11",
                123: "F12",
                144: "NumLock",
                145: "ScrollLock",
                224: "Meta",
            },
            bn = en.extend({
                key: function (e) {
                    if (e.key) {
                        var t = vn[e.key] || e.key;
                        if ("Unidentified" !== t) return t;
                    }
                    return "keypress" === e.type ? (13 === (e = hn(e)) ? "Enter" : String.fromCharCode(e)) : "keydown" === e.type || "keyup" === e.type ? yn[e.keyCode] || "Unidentified" : "";
                },
                location: null,
                ctrlKey: null,
                shiftKey: null,
                altKey: null,
                metaKey: null,
                repeat: null,
                locale: null,
                getModifierState: rn,
                charCode: function (e) {
                    return "keypress" === e.type ? hn(e) : 0;
                },
                keyCode: function (e) {
                    return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0;
                },
                which: function (e) {
                    return "keypress" === e.type ? hn(e) : "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0;
                },
            }),
            xn = an.extend({ dataTransfer: null }),
            wn = en.extend({ touches: null, targetTouches: null, changedTouches: null, altKey: null, metaKey: null, ctrlKey: null, shiftKey: null, getModifierState: rn }),
            kn = ke.extend({ propertyName: null, elapsedTime: null, pseudoElement: null }),
            An = an.extend({
                deltaX: function (e) {
                    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
                },
                deltaY: function (e) {
                    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
                },
                deltaZ: null,
                deltaMode: null,
            }),
            Cn = [
                ["abort", "abort"],
                [ce, "animationEnd"],
                [fe, "animationIteration"],
                [de, "animationStart"],
                ["canplay", "canPlay"],
                ["canplaythrough", "canPlayThrough"],
                ["drag", "drag"],
                ["dragenter", "dragEnter"],
                ["dragexit", "dragExit"],
                ["dragleave", "dragLeave"],
                ["dragover", "dragOver"],
                ["durationchange", "durationChange"],
                ["emptied", "emptied"],
                ["encrypted", "encrypted"],
                ["ended", "ended"],
                ["error", "error"],
                ["gotpointercapture", "gotPointerCapture"],
                ["load", "load"],
                ["loadeddata", "loadedData"],
                ["loadedmetadata", "loadedMetadata"],
                ["loadstart", "loadStart"],
                ["lostpointercapture", "lostPointerCapture"],
                ["mousemove", "mouseMove"],
                ["mouseout", "mouseOut"],
                ["mouseover", "mouseOver"],
                ["playing", "playing"],
                ["pointermove", "pointerMove"],
                ["pointerout", "pointerOut"],
                ["pointerover", "pointerOver"],
                ["progress", "progress"],
                ["scroll", "scroll"],
                ["seeking", "seeking"],
                ["stalled", "stalled"],
                ["suspend", "suspend"],
                ["timeupdate", "timeUpdate"],
                ["toggle", "toggle"],
                ["touchmove", "touchMove"],
                [pe, "transitionEnd"],
                ["waiting", "waiting"],
                ["wheel", "wheel"],
            ],
            Tn = {},
            En = {};
        function Sn(e, t) {
            var n = e[0],
                r = "on" + ((e = e[1])[0].toUpperCase() + e.slice(1));
            (t = { phasedRegistrationNames: { bubbled: r, captured: r + "Capture" }, dependencies: [n], isInteractive: t }), (Tn[e] = t), (En[n] = t);
        }
        [
            ["blur", "blur"],
            ["cancel", "cancel"],
            ["click", "click"],
            ["close", "close"],
            ["contextmenu", "contextMenu"],
            ["copy", "copy"],
            ["cut", "cut"],
            ["dblclick", "doubleClick"],
            ["dragend", "dragEnd"],
            ["dragstart", "dragStart"],
            ["drop", "drop"],
            ["focus", "focus"],
            ["input", "input"],
            ["invalid", "invalid"],
            ["keydown", "keyDown"],
            ["keypress", "keyPress"],
            ["keyup", "keyUp"],
            ["mousedown", "mouseDown"],
            ["mouseup", "mouseUp"],
            ["paste", "paste"],
            ["pause", "pause"],
            ["play", "play"],
            ["pointercancel", "pointerCancel"],
            ["pointerdown", "pointerDown"],
            ["pointerup", "pointerUp"],
            ["ratechange", "rateChange"],
            ["reset", "reset"],
            ["seeked", "seeked"],
            ["submit", "submit"],
            ["touchcancel", "touchCancel"],
            ["touchend", "touchEnd"],
            ["touchstart", "touchStart"],
            ["volumechange", "volumeChange"],
        ].forEach(function (e) {
            Sn(e, !0);
        }),
            Cn.forEach(function (e) {
                Sn(e, !1);
            });
        var _n = {
                eventTypes: Tn,
                isInteractiveTopLevelEventType: function (e) {
                    return void 0 !== (e = En[e]) && !0 === e.isInteractive;
                },
                extractEvents: function (e, t, n, r) {
                    var a = En[e];
                    if (!a) return null;
                    switch (e) {
                        case "keypress":
                            if (0 === hn(n)) return null;
                        case "keydown":
                        case "keyup":
                            e = bn;
                            break;
                        case "blur":
                        case "focus":
                            e = gn;
                            break;
                        case "click":
                            if (2 === n.button) return null;
                        case "dblclick":
                        case "mousedown":
                        case "mousemove":
                        case "mouseup":
                        case "mouseout":
                        case "mouseover":
                        case "contextmenu":
                            e = an;
                            break;
                        case "drag":
                        case "dragend":
                        case "dragenter":
                        case "dragexit":
                        case "dragleave":
                        case "dragover":
                        case "dragstart":
                        case "drop":
                            e = xn;
                            break;
                        case "touchcancel":
                        case "touchend":
                        case "touchmove":
                        case "touchstart":
                            e = wn;
                            break;
                        case ce:
                        case fe:
                        case de:
                            e = pn;
                            break;
                        case pe:
                            e = kn;
                            break;
                        case "scroll":
                            e = en;
                            break;
                        case "wheel":
                            e = An;
                            break;
                        case "copy":
                        case "cut":
                        case "paste":
                            e = mn;
                            break;
                        case "gotpointercapture":
                        case "lostpointercapture":
                        case "pointercancel":
                        case "pointerdown":
                        case "pointermove":
                        case "pointerout":
                        case "pointerover":
                        case "pointerup":
                            e = on;
                            break;
                        default:
                            e = ke;
                    }
                    return ne((t = e.getPooled(a, t, n, r))), t;
                },
            },
            Pn = _n.isInteractiveTopLevelEventType,
            Ln = [];
        function Nn(e) {
            var t = e.targetInst;
            do {
                if (!t) {
                    e.ancestors.push(t);
                    break;
                }
                var n;
                for (n = t; n.return; ) n = n.return;
                if (!(n = 3 !== n.tag ? null : n.stateNode.containerInfo)) break;
                e.ancestors.push(t), (t = H(n));
            } while (t);
            for (n = 0; n < e.ancestors.length; n++) (t = e.ancestors[n]), z(e.topLevelType, t, e.nativeEvent, nt(e.nativeEvent));
        }
        var On = !0;
        function Rn(e) {
            On = !!e;
        }
        function In(e, t) {
            if (!t) return null;
            var n = (Pn(e) ? Un : Fn).bind(null, e);
            t.addEventListener(e, n, !1);
        }
        function Mn(e, t) {
            if (!t) return null;
            var n = (Pn(e) ? Un : Fn).bind(null, e);
            t.addEventListener(e, n, !0);
        }
        function Un(e, t) {
            Ye(Fn, e, t);
        }
        function Fn(e, t) {
            if (On) {
                var n = nt(t);
                if ((null === (n = H(n)) || "number" != typeof n.tag || 2 === sn(n) || (n = null), Ln.length)) {
                    var r = Ln.pop();
                    (r.topLevelType = e), (r.nativeEvent = t), (r.targetInst = n), (e = r);
                } else e = { topLevelType: e, nativeEvent: t, targetInst: n, ancestors: [] };
                try {
                    Je(Nn, e);
                } finally {
                    (e.topLevelType = null), (e.nativeEvent = null), (e.targetInst = null), (e.ancestors.length = 0), 10 > Ln.length && Ln.push(e);
                }
            }
        }
        var Dn = {
                get _enabled() {
                    return On;
                },
                setEnabled: Rn,
                isEnabled: function () {
                    return On;
                },
                trapBubbledEvent: In,
                trapCapturedEvent: Mn,
                dispatchEvent: Fn,
            },
            jn = {},
            zn = 0,
            Bn = "_reactListenersID" + ("" + Math.random()).slice(2);
        function Wn(e) {
            return Object.prototype.hasOwnProperty.call(e, Bn) || ((e[Bn] = zn++), (jn[e[Bn]] = {})), jn[e[Bn]];
        }
        function $n(e) {
            for (; e && e.firstChild; ) e = e.firstChild;
            return e;
        }
        function Vn(e, t) {
            var n,
                r = $n(e);
            for (e = 0; r; ) {
                if (3 === r.nodeType) {
                    if (((n = e + r.textContent.length), e <= t && n >= t)) return { node: r, offset: t - e };
                    e = n;
                }
                e: {
                    for (; r; ) {
                        if (r.nextSibling) {
                            r = r.nextSibling;
                            break e;
                        }
                        r = r.parentNode;
                    }
                    r = void 0;
                }
                r = $n(r);
            }
        }
        function Hn(e) {
            var t = e && e.nodeName && e.nodeName.toLowerCase();
            return t && (("input" === t && ("text" === e.type || "search" === e.type || "tel" === e.type || "url" === e.type || "password" === e.type)) || "textarea" === t || "true" === e.contentEditable);
        }
        var Kn = o.canUseDOM && "documentMode" in document && 11 >= document.documentMode,
            qn = { select: { phasedRegistrationNames: { bubbled: "onSelect", captured: "onSelectCapture" }, dependencies: "blur contextmenu focus keydown keyup mousedown mouseup selectionchange".split(" ") } },
            Qn = null,
            Xn = null,
            Yn = null,
            Gn = !1;
        function Zn(e, t) {
            if (Gn || null == Qn || Qn !== u()) return null;
            var n = Qn;
            return (
                "selectionStart" in n && Hn(n)
                    ? (n = { start: n.selectionStart, end: n.selectionEnd })
                    : window.getSelection
                    ? (n = { anchorNode: (n = window.getSelection()).anchorNode, anchorOffset: n.anchorOffset, focusNode: n.focusNode, focusOffset: n.focusOffset })
                    : (n = void 0),
                Yn && s(Yn, n) ? null : ((Yn = n), ((e = ke.getPooled(qn.select, Xn, e, t)).type = "select"), (e.target = Qn), ne(e), e)
            );
        }
        var Jn = {
            eventTypes: qn,
            extractEvents: function (e, t, n, r) {
                var a,
                    o = r.window === r ? r.document : 9 === r.nodeType ? r : r.ownerDocument;
                if (!(a = !o)) {
                    e: {
                        (o = Wn(o)), (a = A.onSelect);
                        for (var i = 0; i < a.length; i++) {
                            var l = a[i];
                            if (!o.hasOwnProperty(l) || !o[l]) {
                                o = !1;
                                break e;
                            }
                        }
                        o = !0;
                    }
                    a = !o;
                }
                if (a) return null;
                switch (((o = t ? K(t) : window), e)) {
                    case "focus":
                        (tt(o) || "true" === o.contentEditable) && ((Qn = o), (Xn = t), (Yn = null));
                        break;
                    case "blur":
                        Yn = Xn = Qn = null;
                        break;
                    case "mousedown":
                        Gn = !0;
                        break;
                    case "contextmenu":
                    case "mouseup":
                        return (Gn = !1), Zn(n, r);
                    case "selectionchange":
                        if (Kn) break;
                    case "keydown":
                    case "keyup":
                        return Zn(n, r);
                }
                return null;
            },
        };
        F.injectEventPluginOrder("ResponderEventPlugin SimpleEventPlugin TapEventPlugin EnterLeaveEventPlugin ChangeEventPlugin SelectEventPlugin BeforeInputEventPlugin".split(" ")),
            (S = Q.getFiberCurrentPropsFromNode),
            (_ = Q.getInstanceFromNode),
            (P = Q.getNodeFromInstance),
            F.injectEventPluginsByName({ SimpleEventPlugin: _n, EnterLeaveEventPlugin: un, ChangeEventPlugin: Jt, SelectEventPlugin: Jn, BeforeInputEventPlugin: je });
        var er = "function" == typeof requestAnimationFrame ? requestAnimationFrame : void 0,
            tr = Date,
            nr = setTimeout,
            rr = clearTimeout,
            ar = void 0;
        if ("object" == typeof performance && "function" == typeof performance.now) {
            var or = performance;
            ar = function () {
                return or.now();
            };
        } else
            ar = function () {
                return tr.now();
            };
        var ir = void 0,
            lr = void 0;
        if (o.canUseDOM) {
            var ur =
                    "function" == typeof er
                        ? er
                        : function () {
                              d("276");
                          },
                sr = null,
                cr = null,
                fr = -1,
                dr = !1,
                pr = !1,
                mr = 0,
                gr = 33,
                hr = 33,
                vr = {
                    didTimeout: !1,
                    timeRemaining: function () {
                        var e = mr - ar();
                        return 0 < e ? e : 0;
                    },
                },
                yr = function (e, t) {
                    var n = e.scheduledCallback,
                        r = !1;
                    try {
                        n(t), (r = !0);
                    } finally {
                        lr(e), r || ((dr = !0), window.postMessage(br, "*"));
                    }
                },
                br = "__reactIdleCallback$" + Math.random().toString(36).slice(2);
            window.addEventListener(
                "message",
                function (e) {
                    if (e.source === window && e.data === br && ((dr = !1), null !== sr)) {
                        if (null !== sr) {
                            var t = ar();
                            if (!(-1 === fr || fr > t)) {
                                e = -1;
                                for (var n = [], r = sr; null !== r; ) {
                                    var a = r.timeoutTime;
                                    -1 !== a && a <= t ? n.push(r) : -1 !== a && (-1 === e || a < e) && (e = a), (r = r.next);
                                }
                                if (0 < n.length) for (vr.didTimeout = !0, t = 0, r = n.length; t < r; t++) yr(n[t], vr);
                                fr = e;
                            }
                        }
                        for (e = ar(); 0 < mr - e && null !== sr; ) (e = sr), (vr.didTimeout = !1), yr(e, vr), (e = ar());
                        null === sr || pr || ((pr = !0), ur(xr));
                    }
                },
                !1
            );
            var xr = function (e) {
                pr = !1;
                var t = e - mr + hr;
                t < hr && gr < hr ? (8 > t && (t = 8), (hr = t < gr ? gr : t)) : (gr = t), (mr = e + hr), dr || ((dr = !0), window.postMessage(br, "*"));
            };
            (ir = function (e, t) {
                var n = -1;
                return (
                    null != t && "number" == typeof t.timeout && (n = ar() + t.timeout),
                    (-1 === fr || (-1 !== n && n < fr)) && (fr = n),
                    (e = { scheduledCallback: e, timeoutTime: n, prev: null, next: null }),
                    null === sr ? (sr = e) : null !== (t = e.prev = cr) && (t.next = e),
                    (cr = e),
                    pr || ((pr = !0), ur(xr)),
                    e
                );
            }),
                (lr = function (e) {
                    if (null !== e.prev || sr === e) {
                        var t = e.next,
                            n = e.prev;
                        (e.next = null), (e.prev = null), null !== t ? (null !== n ? ((n.next = t), (t.prev = n)) : ((t.prev = null), (sr = t))) : null !== n ? ((n.next = null), (cr = n)) : (cr = sr = null);
                    }
                });
        } else {
            var wr = new Map();
            (ir = function (e) {
                var t = { scheduledCallback: e, timeoutTime: 0, next: null, prev: null },
                    n = nr(function () {
                        e({
                            timeRemaining: function () {
                                return 1 / 0;
                            },
                            didTimeout: !1,
                        });
                    });
                return wr.set(e, n), t;
            }),
                (lr = function (e) {
                    var t = wr.get(e.scheduledCallback);
                    wr.delete(e), rr(t);
                });
        }
        function kr(e, t) {
            return (
                (e = i({ children: void 0 }, t)),
                (t = (function (e) {
                    var t = "";
                    return (
                        a.Children.forEach(e, function (e) {
                            null == e || ("string" != typeof e && "number" != typeof e) || (t += e);
                        }),
                        t
                    );
                })(t.children)) && (e.children = t),
                e
            );
        }
        function Ar(e, t, n, r) {
            if (((e = e.options), t)) {
                t = {};
                for (var a = 0; a < n.length; a++) t["$" + n[a]] = !0;
                for (n = 0; n < e.length; n++) (a = t.hasOwnProperty("$" + e[n].value)), e[n].selected !== a && (e[n].selected = a), a && r && (e[n].defaultSelected = !0);
            } else {
                for (n = "" + n, t = null, a = 0; a < e.length; a++) {
                    if (e[a].value === n) return (e[a].selected = !0), void (r && (e[a].defaultSelected = !0));
                    null !== t || e[a].disabled || (t = e[a]);
                }
                null !== t && (t.selected = !0);
            }
        }
        function Cr(e, t) {
            var n = t.value;
            e._wrapperState = { initialValue: null != n ? n : t.defaultValue, wasMultiple: !!t.multiple };
        }
        function Tr(e, t) {
            return null != t.dangerouslySetInnerHTML && d("91"), i({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
        }
        function Er(e, t) {
            var n = t.value;
            null == n && ((n = t.defaultValue), null != (t = t.children) && (null != n && d("92"), Array.isArray(t) && (1 >= t.length || d("93"), (t = t[0])), (n = "" + t)), null == n && (n = "")),
                (e._wrapperState = { initialValue: "" + n });
        }
        function Sr(e, t) {
            var n = t.value;
            null != n && ((n = "" + n) !== e.value && (e.value = n), null == t.defaultValue && (e.defaultValue = n)), null != t.defaultValue && (e.defaultValue = t.defaultValue);
        }
        function _r(e) {
            var t = e.textContent;
            t === e._wrapperState.initialValue && (e.value = t);
        }
        var Pr = "http://www.w3.org/1999/xhtml",
            Lr = "http://www.w3.org/2000/svg";
        function Nr(e) {
            switch (e) {
                case "svg":
                    return "http://www.w3.org/2000/svg";
                case "math":
                    return "http://www.w3.org/1998/Math/MathML";
                default:
                    return "http://www.w3.org/1999/xhtml";
            }
        }
        function Or(e, t) {
            return null == e || "http://www.w3.org/1999/xhtml" === e ? Nr(t) : "http://www.w3.org/2000/svg" === e && "foreignObject" === t ? "http://www.w3.org/1999/xhtml" : e;
        }
        var Rr = void 0,
            Ir = (function (e) {
                return "undefined" != typeof MSApp && MSApp.execUnsafeLocalFunction
                    ? function (t, n, r, a) {
                          MSApp.execUnsafeLocalFunction(function () {
                              return e(t, n);
                          });
                      }
                    : e;
            })(function (e, t) {
                if (e.namespaceURI !== Lr || "innerHTML" in e) e.innerHTML = t;
                else {
                    for ((Rr = Rr || document.createElement("div")).innerHTML = "<svg>" + t + "</svg>", t = Rr.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
                    for (; t.firstChild; ) e.appendChild(t.firstChild);
                }
            });
        function Mr(e, t) {
            if (t) {
                var n = e.firstChild;
                if (n && n === e.lastChild && 3 === n.nodeType) return void (n.nodeValue = t);
            }
            e.textContent = t;
        }
        var Ur = {
                animationIterationCount: !0,
                borderImageOutset: !0,
                borderImageSlice: !0,
                borderImageWidth: !0,
                boxFlex: !0,
                boxFlexGroup: !0,
                boxOrdinalGroup: !0,
                columnCount: !0,
                columns: !0,
                flex: !0,
                flexGrow: !0,
                flexPositive: !0,
                flexShrink: !0,
                flexNegative: !0,
                flexOrder: !0,
                gridRow: !0,
                gridRowEnd: !0,
                gridRowSpan: !0,
                gridRowStart: !0,
                gridColumn: !0,
                gridColumnEnd: !0,
                gridColumnSpan: !0,
                gridColumnStart: !0,
                fontWeight: !0,
                lineClamp: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                tabSize: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0,
                fillOpacity: !0,
                floodOpacity: !0,
                stopOpacity: !0,
                strokeDasharray: !0,
                strokeDashoffset: !0,
                strokeMiterlimit: !0,
                strokeOpacity: !0,
                strokeWidth: !0,
            },
            Fr = ["Webkit", "ms", "Moz", "O"];
        function Dr(e, t) {
            for (var n in ((e = e.style), t))
                if (t.hasOwnProperty(n)) {
                    var r = 0 === n.indexOf("--"),
                        a = n,
                        o = t[n];
                    (a = null == o || "boolean" == typeof o || "" === o ? "" : r || "number" != typeof o || 0 === o || (Ur.hasOwnProperty(a) && Ur[a]) ? ("" + o).trim() : o + "px"),
                        "float" === n && (n = "cssFloat"),
                        r ? e.setProperty(n, a) : (e[n] = a);
                }
        }
        Object.keys(Ur).forEach(function (e) {
            Fr.forEach(function (t) {
                (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Ur[t] = Ur[e]);
            });
        });
        var jr = i({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
        function zr(e, t, n) {
            t &&
                (jr[e] && (null != t.children || null != t.dangerouslySetInnerHTML) && d("137", e, n()),
                null != t.dangerouslySetInnerHTML && (null != t.children && d("60"), ("object" == typeof t.dangerouslySetInnerHTML && "__html" in t.dangerouslySetInnerHTML) || d("61")),
                null != t.style && "object" != typeof t.style && d("62", n()));
        }
        function Br(e, t) {
            if (-1 === e.indexOf("-")) return "string" == typeof t.is;
            switch (e) {
                case "annotation-xml":
                case "color-profile":
                case "font-face":
                case "font-face-src":
                case "font-face-uri":
                case "font-face-format":
                case "font-face-name":
                case "missing-glyph":
                    return !1;
                default:
                    return !0;
            }
        }
        var Wr = l.thatReturns("");
        function $r(e, t) {
            var n = Wn((e = 9 === e.nodeType || 11 === e.nodeType ? e : e.ownerDocument));
            t = A[t];
            for (var r = 0; r < t.length; r++) {
                var a = t[r];
                if (!n.hasOwnProperty(a) || !n[a]) {
                    switch (a) {
                        case "scroll":
                            Mn("scroll", e);
                            break;
                        case "focus":
                        case "blur":
                            Mn("focus", e), Mn("blur", e), (n.blur = !0), (n.focus = !0);
                            break;
                        case "cancel":
                        case "close":
                            rt(a, !0) && Mn(a, e);
                            break;
                        case "invalid":
                        case "submit":
                        case "reset":
                            break;
                        default:
                            -1 === me.indexOf(a) && In(a, e);
                    }
                    n[a] = !0;
                }
            }
        }
        function Vr(e, t, n, r) {
            return (
                (n = 9 === n.nodeType ? n : n.ownerDocument),
                r === Pr && (r = Nr(e)),
                r === Pr
                    ? "script" === e
                        ? (((e = n.createElement("div")).innerHTML = "<script></script>"), (e = e.removeChild(e.firstChild)))
                        : (e = "string" == typeof t.is ? n.createElement(e, { is: t.is }) : n.createElement(e))
                    : (e = n.createElementNS(r, e)),
                e
            );
        }
        function Hr(e, t) {
            return (9 === t.nodeType ? t : t.ownerDocument).createTextNode(e);
        }
        function Kr(e, t, n, r) {
            var a = Br(t, n);
            switch (t) {
                case "iframe":
                case "object":
                    In("load", e);
                    var o = n;
                    break;
                case "video":
                case "audio":
                    for (o = 0; o < me.length; o++) In(me[o], e);
                    o = n;
                    break;
                case "source":
                    In("error", e), (o = n);
                    break;
                case "img":
                case "image":
                case "link":
                    In("error", e), In("load", e), (o = n);
                    break;
                case "form":
                    In("reset", e), In("submit", e), (o = n);
                    break;
                case "details":
                    In("toggle", e), (o = n);
                    break;
                case "input":
                    Rt(e, n), (o = Ot(e, n)), In("invalid", e), $r(r, "onChange");
                    break;
                case "option":
                    o = kr(e, n);
                    break;
                case "select":
                    Cr(e, n), (o = i({}, n, { value: void 0 })), In("invalid", e), $r(r, "onChange");
                    break;
                case "textarea":
                    Er(e, n), (o = Tr(e, n)), In("invalid", e), $r(r, "onChange");
                    break;
                default:
                    o = n;
            }
            zr(t, o, Wr);
            var u,
                s = o;
            for (u in s)
                if (s.hasOwnProperty(u)) {
                    var c = s[u];
                    "style" === u
                        ? Dr(e, c)
                        : "dangerouslySetInnerHTML" === u
                        ? null != (c = c ? c.__html : void 0) && Ir(e, c)
                        : "children" === u
                        ? "string" == typeof c
                            ? ("textarea" !== t || "" !== c) && Mr(e, c)
                            : "number" == typeof c && Mr(e, "" + c)
                        : "suppressContentEditableWarning" !== u && "suppressHydrationWarning" !== u && "autoFocus" !== u && (k.hasOwnProperty(u) ? null != c && $r(r, u) : null != c && Nt(e, u, c, a));
                }
            switch (t) {
                case "input":
                    ot(e), Ut(e, n, !1);
                    break;
                case "textarea":
                    ot(e), _r(e);
                    break;
                case "option":
                    null != n.value && e.setAttribute("value", n.value);
                    break;
                case "select":
                    (e.multiple = !!n.multiple), null != (t = n.value) ? Ar(e, !!n.multiple, t, !1) : null != n.defaultValue && Ar(e, !!n.multiple, n.defaultValue, !0);
                    break;
                default:
                    "function" == typeof o.onClick && (e.onclick = l);
            }
        }
        function qr(e, t, n, r, a) {
            var o = null;
            switch (t) {
                case "input":
                    (n = Ot(e, n)), (r = Ot(e, r)), (o = []);
                    break;
                case "option":
                    (n = kr(e, n)), (r = kr(e, r)), (o = []);
                    break;
                case "select":
                    (n = i({}, n, { value: void 0 })), (r = i({}, r, { value: void 0 })), (o = []);
                    break;
                case "textarea":
                    (n = Tr(e, n)), (r = Tr(e, r)), (o = []);
                    break;
                default:
                    "function" != typeof n.onClick && "function" == typeof r.onClick && (e.onclick = l);
            }
            zr(t, r, Wr), (t = e = void 0);
            var u = null;
            for (e in n)
                if (!r.hasOwnProperty(e) && n.hasOwnProperty(e) && null != n[e])
                    if ("style" === e) {
                        var s = n[e];
                        for (t in s) s.hasOwnProperty(t) && (u || (u = {}), (u[t] = ""));
                    } else
                        "dangerouslySetInnerHTML" !== e &&
                            "children" !== e &&
                            "suppressContentEditableWarning" !== e &&
                            "suppressHydrationWarning" !== e &&
                            "autoFocus" !== e &&
                            (k.hasOwnProperty(e) ? o || (o = []) : (o = o || []).push(e, null));
            for (e in r) {
                var c = r[e];
                if (((s = null != n ? n[e] : void 0), r.hasOwnProperty(e) && c !== s && (null != c || null != s)))
                    if ("style" === e)
                        if (s) {
                            for (t in s) !s.hasOwnProperty(t) || (c && c.hasOwnProperty(t)) || (u || (u = {}), (u[t] = ""));
                            for (t in c) c.hasOwnProperty(t) && s[t] !== c[t] && (u || (u = {}), (u[t] = c[t]));
                        } else u || (o || (o = []), o.push(e, u)), (u = c);
                    else
                        "dangerouslySetInnerHTML" === e
                            ? ((c = c ? c.__html : void 0), (s = s ? s.__html : void 0), null != c && s !== c && (o = o || []).push(e, "" + c))
                            : "children" === e
                            ? s === c || ("string" != typeof c && "number" != typeof c) || (o = o || []).push(e, "" + c)
                            : "suppressContentEditableWarning" !== e && "suppressHydrationWarning" !== e && (k.hasOwnProperty(e) ? (null != c && $r(a, e), o || s === c || (o = [])) : (o = o || []).push(e, c));
            }
            return u && (o = o || []).push("style", u), o;
        }
        function Qr(e, t, n, r, a) {
            "input" === n && "radio" === a.type && null != a.name && It(e, a), Br(n, r), (r = Br(n, a));
            for (var o = 0; o < t.length; o += 2) {
                var i = t[o],
                    l = t[o + 1];
                "style" === i ? Dr(e, l) : "dangerouslySetInnerHTML" === i ? Ir(e, l) : "children" === i ? Mr(e, l) : Nt(e, i, l, r);
            }
            switch (n) {
                case "input":
                    Mt(e, a);
                    break;
                case "textarea":
                    Sr(e, a);
                    break;
                case "select":
                    (e._wrapperState.initialValue = void 0),
                        (t = e._wrapperState.wasMultiple),
                        (e._wrapperState.wasMultiple = !!a.multiple),
                        null != (n = a.value) ? Ar(e, !!a.multiple, n, !1) : t !== !!a.multiple && (null != a.defaultValue ? Ar(e, !!a.multiple, a.defaultValue, !0) : Ar(e, !!a.multiple, a.multiple ? [] : "", !1));
            }
        }
        function Xr(e, t, n, r, a) {
            switch (t) {
                case "iframe":
                case "object":
                    In("load", e);
                    break;
                case "video":
                case "audio":
                    for (r = 0; r < me.length; r++) In(me[r], e);
                    break;
                case "source":
                    In("error", e);
                    break;
                case "img":
                case "image":
                case "link":
                    In("error", e), In("load", e);
                    break;
                case "form":
                    In("reset", e), In("submit", e);
                    break;
                case "details":
                    In("toggle", e);
                    break;
                case "input":
                    Rt(e, n), In("invalid", e), $r(a, "onChange");
                    break;
                case "select":
                    Cr(e, n), In("invalid", e), $r(a, "onChange");
                    break;
                case "textarea":
                    Er(e, n), In("invalid", e), $r(a, "onChange");
            }
            for (var o in (zr(t, n, Wr), (r = null), n))
                if (n.hasOwnProperty(o)) {
                    var i = n[o];
                    "children" === o ? ("string" == typeof i ? e.textContent !== i && (r = ["children", i]) : "number" == typeof i && e.textContent !== "" + i && (r = ["children", "" + i])) : k.hasOwnProperty(o) && null != i && $r(a, o);
                }
            switch (t) {
                case "input":
                    ot(e), Ut(e, n, !0);
                    break;
                case "textarea":
                    ot(e), _r(e);
                    break;
                case "select":
                case "option":
                    break;
                default:
                    "function" == typeof n.onClick && (e.onclick = l);
            }
            return r;
        }
        function Yr(e, t) {
            return e.nodeValue !== t;
        }
        var Gr = {
                createElement: Vr,
                createTextNode: Hr,
                setInitialProperties: Kr,
                diffProperties: qr,
                updateProperties: Qr,
                diffHydratedProperties: Xr,
                diffHydratedText: Yr,
                warnForUnmatchedText: function () {},
                warnForDeletedHydratableElement: function () {},
                warnForDeletedHydratableText: function () {},
                warnForInsertedHydratedElement: function () {},
                warnForInsertedHydratedText: function () {},
                restoreControlledState: function (e, t, n) {
                    switch (t) {
                        case "input":
                            if ((Mt(e, n), (t = n.name), "radio" === n.type && null != t)) {
                                for (n = e; n.parentNode; ) n = n.parentNode;
                                for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
                                    var r = n[t];
                                    if (r !== e && r.form === e.form) {
                                        var a = q(r);
                                        a || d("90"), it(r), Mt(r, a);
                                    }
                                }
                            }
                            break;
                        case "textarea":
                            Sr(e, n);
                            break;
                        case "select":
                            null != (t = n.value) && Ar(e, !!n.multiple, t, !1);
                    }
                },
            },
            Zr = null,
            Jr = null;
        function ea(e, t) {
            switch (e) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                    return !!t.autoFocus;
            }
            return !1;
        }
        function ta(e, t) {
            return (
                "textarea" === e ||
                "string" == typeof t.children ||
                "number" == typeof t.children ||
                ("object" == typeof t.dangerouslySetInnerHTML && null !== t.dangerouslySetInnerHTML && "string" == typeof t.dangerouslySetInnerHTML.__html)
            );
        }
        var na = ar,
            ra = ir,
            aa = lr;
        function oa(e) {
            for (e = e.nextSibling; e && 1 !== e.nodeType && 3 !== e.nodeType; ) e = e.nextSibling;
            return e;
        }
        function ia(e) {
            for (e = e.firstChild; e && 1 !== e.nodeType && 3 !== e.nodeType; ) e = e.nextSibling;
            return e;
        }
        new Set();
        var la = [],
            ua = -1;
        function sa(e) {
            return { current: e };
        }
        function ca(e) {
            0 > ua || ((e.current = la[ua]), (la[ua] = null), ua--);
        }
        function fa(e, t) {
            ua++, (la[ua] = e.current), (e.current = t);
        }
        var da = sa(f),
            pa = sa(!1),
            ma = f;
        function ga(e) {
            return va(e) ? ma : da.current;
        }
        function ha(e, t) {
            var n = e.type.contextTypes;
            if (!n) return f;
            var r = e.stateNode;
            if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
            var a,
                o = {};
            for (a in n) o[a] = t[a];
            return r && (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = t), (e.__reactInternalMemoizedMaskedChildContext = o)), o;
        }
        function va(e) {
            return 2 === e.tag && null != e.type.childContextTypes;
        }
        function ya(e) {
            va(e) && (ca(pa), ca(da));
        }
        function ba(e) {
            ca(pa), ca(da);
        }
        function xa(e, t, n) {
            da.current !== f && d("168"), fa(da, t), fa(pa, n);
        }
        function wa(e, t) {
            var n = e.stateNode,
                r = e.type.childContextTypes;
            if ("function" != typeof n.getChildContext) return t;
            for (var a in (n = n.getChildContext())) a in r || d("108", wt(e) || "Unknown", a);
            return i({}, t, n);
        }
        function ka(e) {
            if (!va(e)) return !1;
            var t = e.stateNode;
            return (t = (t && t.__reactInternalMemoizedMergedChildContext) || f), (ma = da.current), fa(da, t), fa(pa, pa.current), !0;
        }
        function Aa(e, t) {
            var n = e.stateNode;
            if ((n || d("169"), t)) {
                var r = wa(e, ma);
                (n.__reactInternalMemoizedMergedChildContext = r), ca(pa), ca(da), fa(da, r);
            } else ca(pa);
            fa(pa, t);
        }
        function Ca(e, t, n, r) {
            (this.tag = e),
                (this.key = n),
                (this.sibling = this.child = this.return = this.stateNode = this.type = null),
                (this.index = 0),
                (this.ref = null),
                (this.pendingProps = t),
                (this.memoizedState = this.updateQueue = this.memoizedProps = null),
                (this.mode = r),
                (this.effectTag = 0),
                (this.lastEffect = this.firstEffect = this.nextEffect = null),
                (this.expirationTime = 0),
                (this.alternate = null);
        }
        function Ta(e, t, n) {
            var r = e.alternate;
            return (
                null === r
                    ? (((r = new Ca(e.tag, t, e.key, e.mode)).type = e.type), (r.stateNode = e.stateNode), (r.alternate = e), (e.alternate = r))
                    : ((r.pendingProps = t), (r.effectTag = 0), (r.nextEffect = null), (r.firstEffect = null), (r.lastEffect = null)),
                (r.expirationTime = n),
                (r.child = e.child),
                (r.memoizedProps = e.memoizedProps),
                (r.memoizedState = e.memoizedState),
                (r.updateQueue = e.updateQueue),
                (r.sibling = e.sibling),
                (r.index = e.index),
                (r.ref = e.ref),
                r
            );
        }
        function Ea(e, t, n) {
            var r = e.type,
                a = e.key;
            if (((e = e.props), "function" == typeof r)) var o = r.prototype && r.prototype.isReactComponent ? 2 : 0;
            else if ("string" == typeof r) o = 5;
            else
                switch (r) {
                    case ft:
                        return Sa(e.children, t, n, a);
                    case ht:
                        (o = 11), (t |= 3);
                        break;
                    case dt:
                        (o = 11), (t |= 2);
                        break;
                    case pt:
                        return ((r = new Ca(15, e, a, 4 | t)).type = pt), (r.expirationTime = n), r;
                    case yt:
                        (o = 16), (t |= 2);
                        break;
                    default:
                        e: {
                            switch ("object" == typeof r && null !== r ? r.$$typeof : null) {
                                case mt:
                                    o = 13;
                                    break e;
                                case gt:
                                    o = 12;
                                    break e;
                                case vt:
                                    o = 14;
                                    break e;
                                default:
                                    d("130", null == r ? r : typeof r, "");
                            }
                            o = void 0;
                        }
                }
            return ((t = new Ca(o, e, a, t)).type = r), (t.expirationTime = n), t;
        }
        function Sa(e, t, n, r) {
            return ((e = new Ca(10, e, r, t)).expirationTime = n), e;
        }
        function _a(e, t, n) {
            return ((e = new Ca(6, e, null, t)).expirationTime = n), e;
        }
        function Pa(e, t, n) {
            return ((t = new Ca(4, null !== e.children ? e.children : [], e.key, t)).expirationTime = n), (t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }), t;
        }
        function La(e, t, n) {
            return (
                (e = {
                    current: (t = new Ca(3, null, null, t ? 3 : 0)),
                    containerInfo: e,
                    pendingChildren: null,
                    earliestPendingTime: 0,
                    latestPendingTime: 0,
                    earliestSuspendedTime: 0,
                    latestSuspendedTime: 0,
                    latestPingedTime: 0,
                    pendingCommitExpirationTime: 0,
                    finishedWork: null,
                    context: null,
                    pendingContext: null,
                    hydrate: n,
                    remainingExpirationTime: 0,
                    firstBatch: null,
                    nextScheduledRoot: null,
                }),
                (t.stateNode = e)
            );
        }
        var Na = null,
            Oa = null;
        function Ra(e) {
            return function (t) {
                try {
                    return e(t);
                } catch (e) {}
            };
        }
        function Ia(e) {
            "function" == typeof Na && Na(e);
        }
        function Ma(e) {
            "function" == typeof Oa && Oa(e);
        }
        var Ua = !1;
        function Fa(e) {
            return { expirationTime: 0, baseState: e, firstUpdate: null, lastUpdate: null, firstCapturedUpdate: null, lastCapturedUpdate: null, firstEffect: null, lastEffect: null, firstCapturedEffect: null, lastCapturedEffect: null };
        }
        function Da(e) {
            return {
                expirationTime: e.expirationTime,
                baseState: e.baseState,
                firstUpdate: e.firstUpdate,
                lastUpdate: e.lastUpdate,
                firstCapturedUpdate: null,
                lastCapturedUpdate: null,
                firstEffect: null,
                lastEffect: null,
                firstCapturedEffect: null,
                lastCapturedEffect: null,
            };
        }
        function ja(e) {
            return { expirationTime: e, tag: 0, payload: null, callback: null, next: null, nextEffect: null };
        }
        function za(e, t, n) {
            null === e.lastUpdate ? (e.firstUpdate = e.lastUpdate = t) : ((e.lastUpdate.next = t), (e.lastUpdate = t)), (0 === e.expirationTime || e.expirationTime > n) && (e.expirationTime = n);
        }
        function Ba(e, t, n) {
            var r = e.alternate;
            if (null === r) {
                var a = e.updateQueue,
                    o = null;
                null === a && (a = e.updateQueue = Fa(e.memoizedState));
            } else
                (a = e.updateQueue),
                    (o = r.updateQueue),
                    null === a ? (null === o ? ((a = e.updateQueue = Fa(e.memoizedState)), (o = r.updateQueue = Fa(r.memoizedState))) : (a = e.updateQueue = Da(o))) : null === o && (o = r.updateQueue = Da(a));
            null === o || a === o ? za(a, t, n) : null === a.lastUpdate || null === o.lastUpdate ? (za(a, t, n), za(o, t, n)) : (za(a, t, n), (o.lastUpdate = t));
        }
        function Wa(e, t, n) {
            var r = e.updateQueue;
            null === (r = null === r ? (e.updateQueue = Fa(e.memoizedState)) : $a(e, r)).lastCapturedUpdate ? (r.firstCapturedUpdate = r.lastCapturedUpdate = t) : ((r.lastCapturedUpdate.next = t), (r.lastCapturedUpdate = t)),
                (0 === r.expirationTime || r.expirationTime > n) && (r.expirationTime = n);
        }
        function $a(e, t) {
            var n = e.alternate;
            return null !== n && t === n.updateQueue && (t = e.updateQueue = Da(t)), t;
        }
        function Va(e, t, n, r, a, o) {
            switch (n.tag) {
                case 1:
                    return "function" == typeof (e = n.payload) ? e.call(o, r, a) : e;
                case 3:
                    e.effectTag = (-1025 & e.effectTag) | 64;
                case 0:
                    if (null == (a = "function" == typeof (e = n.payload) ? e.call(o, r, a) : e)) break;
                    return i({}, r, a);
                case 2:
                    Ua = !0;
            }
            return r;
        }
        function Ha(e, t, n, r, a) {
            if (((Ua = !1), !(0 === t.expirationTime || t.expirationTime > a))) {
                for (var o = (t = $a(e, t)).baseState, i = null, l = 0, u = t.firstUpdate, s = o; null !== u; ) {
                    var c = u.expirationTime;
                    c > a
                        ? (null === i && ((i = u), (o = s)), (0 === l || l > c) && (l = c))
                        : ((s = Va(e, 0, u, s, n, r)), null !== u.callback && ((e.effectTag |= 32), (u.nextEffect = null), null === t.lastEffect ? (t.firstEffect = t.lastEffect = u) : ((t.lastEffect.nextEffect = u), (t.lastEffect = u)))),
                        (u = u.next);
                }
                for (c = null, u = t.firstCapturedUpdate; null !== u; ) {
                    var f = u.expirationTime;
                    f > a
                        ? (null === c && ((c = u), null === i && (o = s)), (0 === l || l > f) && (l = f))
                        : ((s = Va(e, 0, u, s, n, r)),
                          null !== u.callback &&
                              ((e.effectTag |= 32), (u.nextEffect = null), null === t.lastCapturedEffect ? (t.firstCapturedEffect = t.lastCapturedEffect = u) : ((t.lastCapturedEffect.nextEffect = u), (t.lastCapturedEffect = u)))),
                        (u = u.next);
                }
                null === i && (t.lastUpdate = null),
                    null === c ? (t.lastCapturedUpdate = null) : (e.effectTag |= 32),
                    null === i && null === c && (o = s),
                    (t.baseState = o),
                    (t.firstUpdate = i),
                    (t.firstCapturedUpdate = c),
                    (t.expirationTime = l),
                    (e.memoizedState = s);
            }
        }
        function Ka(e, t) {
            "function" != typeof e && d("191", e), e.call(t);
        }
        function qa(e, t, n) {
            for (
                null !== t.firstCapturedUpdate && (null !== t.lastUpdate && ((t.lastUpdate.next = t.firstCapturedUpdate), (t.lastUpdate = t.lastCapturedUpdate)), (t.firstCapturedUpdate = t.lastCapturedUpdate = null)),
                    e = t.firstEffect,
                    t.firstEffect = t.lastEffect = null;
                null !== e;

            ) {
                var r = e.callback;
                null !== r && ((e.callback = null), Ka(r, n)), (e = e.nextEffect);
            }
            for (e = t.firstCapturedEffect, t.firstCapturedEffect = t.lastCapturedEffect = null; null !== e; ) null !== (t = e.callback) && ((e.callback = null), Ka(t, n)), (e = e.nextEffect);
        }
        function Qa(e, t) {
            return { value: e, source: t, stack: kt(t) };
        }
        var Xa = sa(null),
            Ya = sa(null),
            Ga = sa(0);
        function Za(e) {
            var t = e.type._context;
            fa(Ga, t._changedBits), fa(Ya, t._currentValue), fa(Xa, e), (t._currentValue = e.pendingProps.value), (t._changedBits = e.stateNode);
        }
        function Ja(e) {
            var t = Ga.current,
                n = Ya.current;
            ca(Xa), ca(Ya), ca(Ga), ((e = e.type._context)._currentValue = n), (e._changedBits = t);
        }
        var eo = {},
            to = sa(eo),
            no = sa(eo),
            ro = sa(eo);
        function ao(e) {
            return e === eo && d("174"), e;
        }
        function oo(e, t) {
            fa(ro, t), fa(no, e), fa(to, eo);
            var n = t.nodeType;
            switch (n) {
                case 9:
                case 11:
                    t = (t = t.documentElement) ? t.namespaceURI : Or(null, "");
                    break;
                default:
                    t = Or((t = (n = 8 === n ? t.parentNode : t).namespaceURI || null), (n = n.tagName));
            }
            ca(to), fa(to, t);
        }
        function io(e) {
            ca(to), ca(no), ca(ro);
        }
        function lo(e) {
            no.current === e && (ca(to), ca(no));
        }
        function uo(e, t, n) {
            var r = e.memoizedState;
            (r = null == (t = t(n, r)) ? r : i({}, r, t)), (e.memoizedState = r), null !== (e = e.updateQueue) && 0 === e.expirationTime && (e.baseState = r);
        }
        var so = {
            isMounted: function (e) {
                return !!(e = e._reactInternalFiber) && 2 === sn(e);
            },
            enqueueSetState: function (e, t, n) {
                e = e._reactInternalFiber;
                var r = wi(),
                    a = ja((r = bi(r, e)));
                (a.payload = t), null != n && (a.callback = n), Ba(e, a, r), xi(e, r);
            },
            enqueueReplaceState: function (e, t, n) {
                e = e._reactInternalFiber;
                var r = wi(),
                    a = ja((r = bi(r, e)));
                (a.tag = 1), (a.payload = t), null != n && (a.callback = n), Ba(e, a, r), xi(e, r);
            },
            enqueueForceUpdate: function (e, t) {
                e = e._reactInternalFiber;
                var n = wi(),
                    r = ja((n = bi(n, e)));
                (r.tag = 2), null != t && (r.callback = t), Ba(e, r, n), xi(e, n);
            },
        };
        function co(e, t, n, r, a, o) {
            var i = e.stateNode;
            return (e = e.type), "function" == typeof i.shouldComponentUpdate ? i.shouldComponentUpdate(n, a, o) : !e.prototype || !e.prototype.isPureReactComponent || !s(t, n) || !s(r, a);
        }
        function fo(e, t, n, r) {
            (e = t.state),
                "function" == typeof t.componentWillReceiveProps && t.componentWillReceiveProps(n, r),
                "function" == typeof t.UNSAFE_componentWillReceiveProps && t.UNSAFE_componentWillReceiveProps(n, r),
                t.state !== e && so.enqueueReplaceState(t, t.state, null);
        }
        function po(e, t) {
            var n = e.type,
                r = e.stateNode,
                a = e.pendingProps,
                o = ga(e);
            (r.props = a),
                (r.state = e.memoizedState),
                (r.refs = f),
                (r.context = ha(e, o)),
                null !== (o = e.updateQueue) && (Ha(e, o, a, r, t), (r.state = e.memoizedState)),
                "function" == typeof (o = e.type.getDerivedStateFromProps) && (uo(e, o, a), (r.state = e.memoizedState)),
                "function" == typeof n.getDerivedStateFromProps ||
                    "function" == typeof r.getSnapshotBeforeUpdate ||
                    ("function" != typeof r.UNSAFE_componentWillMount && "function" != typeof r.componentWillMount) ||
                    ((n = r.state),
                    "function" == typeof r.componentWillMount && r.componentWillMount(),
                    "function" == typeof r.UNSAFE_componentWillMount && r.UNSAFE_componentWillMount(),
                    n !== r.state && so.enqueueReplaceState(r, r.state, null),
                    null !== (o = e.updateQueue) && (Ha(e, o, a, r, t), (r.state = e.memoizedState))),
                "function" == typeof r.componentDidMount && (e.effectTag |= 4);
        }
        var mo = Array.isArray;
        function go(e, t, n) {
            if (null !== (e = n.ref) && "function" != typeof e && "object" != typeof e) {
                if (n._owner) {
                    n = n._owner;
                    var r = void 0;
                    n && (2 !== n.tag && d("110"), (r = n.stateNode)), r || d("147", e);
                    var a = "" + e;
                    return null !== t && null !== t.ref && "function" == typeof t.ref && t.ref._stringRef === a
                        ? t.ref
                        : (((t = function (e) {
                              var t = r.refs === f ? (r.refs = {}) : r.refs;
                              null === e ? delete t[a] : (t[a] = e);
                          })._stringRef = a),
                          t);
                }
                "string" != typeof e && d("148"), n._owner || d("254", e);
            }
            return e;
        }
        function ho(e, t) {
            "textarea" !== e.type && d("31", "[object Object]" === Object.prototype.toString.call(t) ? "object with keys {" + Object.keys(t).join(", ") + "}" : t, "");
        }
        function vo(e) {
            function t(t, n) {
                if (e) {
                    var r = t.lastEffect;
                    null !== r ? ((r.nextEffect = n), (t.lastEffect = n)) : (t.firstEffect = t.lastEffect = n), (n.nextEffect = null), (n.effectTag = 8);
                }
            }
            function n(n, r) {
                if (!e) return null;
                for (; null !== r; ) t(n, r), (r = r.sibling);
                return null;
            }
            function r(e, t) {
                for (e = new Map(); null !== t; ) null !== t.key ? e.set(t.key, t) : e.set(t.index, t), (t = t.sibling);
                return e;
            }
            function a(e, t, n) {
                return ((e = Ta(e, t, n)).index = 0), (e.sibling = null), e;
            }
            function o(t, n, r) {
                return (t.index = r), e ? (null !== (r = t.alternate) ? ((r = r.index) < n ? ((t.effectTag = 2), n) : r) : ((t.effectTag = 2), n)) : n;
            }
            function i(t) {
                return e && null === t.alternate && (t.effectTag = 2), t;
            }
            function l(e, t, n, r) {
                return null === t || 6 !== t.tag ? (((t = _a(n, e.mode, r)).return = e), t) : (((t = a(t, n, r)).return = e), t);
            }
            function u(e, t, n, r) {
                return null !== t && t.type === n.type ? (((r = a(t, n.props, r)).ref = go(e, t, n)), (r.return = e), r) : (((r = Ea(n, e.mode, r)).ref = go(e, t, n)), (r.return = e), r);
            }
            function s(e, t, n, r) {
                return null === t || 4 !== t.tag || t.stateNode.containerInfo !== n.containerInfo || t.stateNode.implementation !== n.implementation
                    ? (((t = Pa(n, e.mode, r)).return = e), t)
                    : (((t = a(t, n.children || [], r)).return = e), t);
            }
            function c(e, t, n, r, o) {
                return null === t || 10 !== t.tag ? (((t = Sa(n, e.mode, r, o)).return = e), t) : (((t = a(t, n, r)).return = e), t);
            }
            function f(e, t, n) {
                if ("string" == typeof t || "number" == typeof t) return ((t = _a("" + t, e.mode, n)).return = e), t;
                if ("object" == typeof t && null !== t) {
                    switch (t.$$typeof) {
                        case st:
                            return ((n = Ea(t, e.mode, n)).ref = go(e, null, t)), (n.return = e), n;
                        case ct:
                            return ((t = Pa(t, e.mode, n)).return = e), t;
                    }
                    if (mo(t) || xt(t)) return ((t = Sa(t, e.mode, n, null)).return = e), t;
                    ho(e, t);
                }
                return null;
            }
            function p(e, t, n, r) {
                var a = null !== t ? t.key : null;
                if ("string" == typeof n || "number" == typeof n) return null !== a ? null : l(e, t, "" + n, r);
                if ("object" == typeof n && null !== n) {
                    switch (n.$$typeof) {
                        case st:
                            return n.key === a ? (n.type === ft ? c(e, t, n.props.children, r, a) : u(e, t, n, r)) : null;
                        case ct:
                            return n.key === a ? s(e, t, n, r) : null;
                    }
                    if (mo(n) || xt(n)) return null !== a ? null : c(e, t, n, r, null);
                    ho(e, n);
                }
                return null;
            }
            function m(e, t, n, r, a) {
                if ("string" == typeof r || "number" == typeof r) return l(t, (e = e.get(n) || null), "" + r, a);
                if ("object" == typeof r && null !== r) {
                    switch (r.$$typeof) {
                        case st:
                            return (e = e.get(null === r.key ? n : r.key) || null), r.type === ft ? c(t, e, r.props.children, a, r.key) : u(t, e, r, a);
                        case ct:
                            return s(t, (e = e.get(null === r.key ? n : r.key) || null), r, a);
                    }
                    if (mo(r) || xt(r)) return c(t, (e = e.get(n) || null), r, a, null);
                    ho(t, r);
                }
                return null;
            }
            function g(a, i, l, u) {
                for (var s = null, c = null, d = i, g = (i = 0), h = null; null !== d && g < l.length; g++) {
                    d.index > g ? ((h = d), (d = null)) : (h = d.sibling);
                    var v = p(a, d, l[g], u);
                    if (null === v) {
                        null === d && (d = h);
                        break;
                    }
                    e && d && null === v.alternate && t(a, d), (i = o(v, i, g)), null === c ? (s = v) : (c.sibling = v), (c = v), (d = h);
                }
                if (g === l.length) return n(a, d), s;
                if (null === d) {
                    for (; g < l.length; g++) (d = f(a, l[g], u)) && ((i = o(d, i, g)), null === c ? (s = d) : (c.sibling = d), (c = d));
                    return s;
                }
                for (d = r(a, d); g < l.length; g++) (h = m(d, a, g, l[g], u)) && (e && null !== h.alternate && d.delete(null === h.key ? g : h.key), (i = o(h, i, g)), null === c ? (s = h) : (c.sibling = h), (c = h));
                return (
                    e &&
                        d.forEach(function (e) {
                            return t(a, e);
                        }),
                    s
                );
            }
            function h(a, i, l, u) {
                var s = xt(l);
                "function" != typeof s && d("150"), null == (l = s.call(l)) && d("151");
                for (var c = (s = null), g = i, h = (i = 0), v = null, y = l.next(); null !== g && !y.done; h++, y = l.next()) {
                    g.index > h ? ((v = g), (g = null)) : (v = g.sibling);
                    var b = p(a, g, y.value, u);
                    if (null === b) {
                        g || (g = v);
                        break;
                    }
                    e && g && null === b.alternate && t(a, g), (i = o(b, i, h)), null === c ? (s = b) : (c.sibling = b), (c = b), (g = v);
                }
                if (y.done) return n(a, g), s;
                if (null === g) {
                    for (; !y.done; h++, y = l.next()) null !== (y = f(a, y.value, u)) && ((i = o(y, i, h)), null === c ? (s = y) : (c.sibling = y), (c = y));
                    return s;
                }
                for (g = r(a, g); !y.done; h++, y = l.next()) null !== (y = m(g, a, h, y.value, u)) && (e && null !== y.alternate && g.delete(null === y.key ? h : y.key), (i = o(y, i, h)), null === c ? (s = y) : (c.sibling = y), (c = y));
                return (
                    e &&
                        g.forEach(function (e) {
                            return t(a, e);
                        }),
                    s
                );
            }
            return function (e, r, o, l) {
                var u = "object" == typeof o && null !== o && o.type === ft && null === o.key;
                u && (o = o.props.children);
                var s = "object" == typeof o && null !== o;
                if (s)
                    switch (o.$$typeof) {
                        case st:
                            e: {
                                for (s = o.key, u = r; null !== u; ) {
                                    if (u.key === s) {
                                        if (10 === u.tag ? o.type === ft : u.type === o.type) {
                                            n(e, u.sibling), ((r = a(u, o.type === ft ? o.props.children : o.props, l)).ref = go(e, u, o)), (r.return = e), (e = r);
                                            break e;
                                        }
                                        n(e, u);
                                        break;
                                    }
                                    t(e, u), (u = u.sibling);
                                }
                                o.type === ft ? (((r = Sa(o.props.children, e.mode, l, o.key)).return = e), (e = r)) : (((l = Ea(o, e.mode, l)).ref = go(e, r, o)), (l.return = e), (e = l));
                            }
                            return i(e);
                        case ct:
                            e: {
                                for (u = o.key; null !== r; ) {
                                    if (r.key === u) {
                                        if (4 === r.tag && r.stateNode.containerInfo === o.containerInfo && r.stateNode.implementation === o.implementation) {
                                            n(e, r.sibling), ((r = a(r, o.children || [], l)).return = e), (e = r);
                                            break e;
                                        }
                                        n(e, r);
                                        break;
                                    }
                                    t(e, r), (r = r.sibling);
                                }
                                ((r = Pa(o, e.mode, l)).return = e), (e = r);
                            }
                            return i(e);
                    }
                if ("string" == typeof o || "number" == typeof o) return (o = "" + o), null !== r && 6 === r.tag ? (n(e, r.sibling), ((r = a(r, o, l)).return = e), (e = r)) : (n(e, r), ((r = _a(o, e.mode, l)).return = e), (e = r)), i(e);
                if (mo(o)) return g(e, r, o, l);
                if (xt(o)) return h(e, r, o, l);
                if ((s && ho(e, o), void 0 === o && !u))
                    switch (e.tag) {
                        case 2:
                        case 1:
                            d("152", (l = e.type).displayName || l.name || "Component");
                    }
                return n(e, r);
            };
        }
        var yo = vo(!0),
            bo = vo(!1),
            xo = null,
            wo = null,
            ko = !1;
        function Ao(e, t) {
            var n = new Ca(5, null, null, 0);
            (n.type = "DELETED"), (n.stateNode = t), (n.return = e), (n.effectTag = 8), null !== e.lastEffect ? ((e.lastEffect.nextEffect = n), (e.lastEffect = n)) : (e.firstEffect = e.lastEffect = n);
        }
        function Co(e, t) {
            switch (e.tag) {
                case 5:
                    var n = e.type;
                    return null !== (t = 1 !== t.nodeType || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t) && ((e.stateNode = t), !0);
                case 6:
                    return null !== (t = "" === e.pendingProps || 3 !== t.nodeType ? null : t) && ((e.stateNode = t), !0);
                default:
                    return !1;
            }
        }
        function To(e) {
            if (ko) {
                var t = wo;
                if (t) {
                    var n = t;
                    if (!Co(e, t)) {
                        if (!(t = oa(n)) || !Co(e, t)) return (e.effectTag |= 2), (ko = !1), void (xo = e);
                        Ao(xo, n);
                    }
                    (xo = e), (wo = ia(t));
                } else (e.effectTag |= 2), (ko = !1), (xo = e);
            }
        }
        function Eo(e) {
            for (e = e.return; null !== e && 5 !== e.tag && 3 !== e.tag; ) e = e.return;
            xo = e;
        }
        function So(e) {
            if (e !== xo) return !1;
            if (!ko) return Eo(e), (ko = !0), !1;
            var t = e.type;
            if (5 !== e.tag || ("head" !== t && "body" !== t && !ta(t, e.memoizedProps))) for (t = wo; t; ) Ao(e, t), (t = oa(t));
            return Eo(e), (wo = xo ? oa(e.stateNode) : null), !0;
        }
        function _o() {
            (wo = xo = null), (ko = !1);
        }
        function Po(e, t, n) {
            Lo(e, t, n, t.expirationTime);
        }
        function Lo(e, t, n, r) {
            t.child = null === e ? bo(t, null, n, r) : yo(t, e.child, n, r);
        }
        function No(e, t) {
            var n = t.ref;
            ((null === e && null !== n) || (null !== e && e.ref !== n)) && (t.effectTag |= 128);
        }
        function Oo(e, t, n, r, a) {
            No(e, t);
            var o = 0 != (64 & t.effectTag);
            if (!n && !o) return r && Aa(t, !1), Mo(e, t);
            (n = t.stateNode), (lt.current = t);
            var i = o ? null : n.render();
            return (t.effectTag |= 1), o && (Lo(e, t, null, a), (t.child = null)), Lo(e, t, i, a), (t.memoizedState = n.state), (t.memoizedProps = n.props), r && Aa(t, !0), t.child;
        }
        function Ro(e) {
            var t = e.stateNode;
            t.pendingContext ? xa(0, t.pendingContext, t.pendingContext !== t.context) : t.context && xa(0, t.context, !1), oo(e, t.containerInfo);
        }
        function Io(e, t, n, r) {
            var a = e.child;
            for (null !== a && (a.return = e); null !== a; ) {
                switch (a.tag) {
                    case 12:
                        var o = 0 | a.stateNode;
                        if (a.type === t && 0 != (o & n)) {
                            for (o = a; null !== o; ) {
                                var i = o.alternate;
                                if (0 === o.expirationTime || o.expirationTime > r) (o.expirationTime = r), null !== i && (0 === i.expirationTime || i.expirationTime > r) && (i.expirationTime = r);
                                else {
                                    if (null === i || !(0 === i.expirationTime || i.expirationTime > r)) break;
                                    i.expirationTime = r;
                                }
                                o = o.return;
                            }
                            o = null;
                        } else o = a.child;
                        break;
                    case 13:
                        o = a.type === e.type ? null : a.child;
                        break;
                    default:
                        o = a.child;
                }
                if (null !== o) o.return = a;
                else
                    for (o = a; null !== o; ) {
                        if (o === e) {
                            o = null;
                            break;
                        }
                        if (null !== (a = o.sibling)) {
                            (a.return = o.return), (o = a);
                            break;
                        }
                        o = o.return;
                    }
                a = o;
            }
        }
        function Mo(e, t) {
            if ((null !== e && t.child !== e.child && d("153"), null !== t.child)) {
                var n = Ta((e = t.child), e.pendingProps, e.expirationTime);
                for (t.child = n, n.return = t; null !== e.sibling; ) (e = e.sibling), ((n = n.sibling = Ta(e, e.pendingProps, e.expirationTime)).return = t);
                n.sibling = null;
            }
            return t.child;
        }
        function Uo(e, t, n) {
            if (0 === t.expirationTime || t.expirationTime > n) {
                switch (t.tag) {
                    case 3:
                        Ro(t);
                        break;
                    case 2:
                        ka(t);
                        break;
                    case 4:
                        oo(t, t.stateNode.containerInfo);
                        break;
                    case 13:
                        Za(t);
                }
                return null;
            }
            switch (t.tag) {
                case 0:
                    null !== e && d("155");
                    var r = t.type,
                        a = t.pendingProps,
                        o = ga(t);
                    return (
                        (r = r(a, (o = ha(t, o)))),
                        (t.effectTag |= 1),
                        "object" == typeof r && null !== r && "function" == typeof r.render && void 0 === r.$$typeof
                            ? ((o = t.type),
                              (t.tag = 2),
                              (t.memoizedState = null !== r.state && void 0 !== r.state ? r.state : null),
                              "function" == typeof (o = o.getDerivedStateFromProps) && uo(t, o, a),
                              (a = ka(t)),
                              (r.updater = so),
                              (t.stateNode = r),
                              (r._reactInternalFiber = t),
                              po(t, n),
                              (e = Oo(e, t, !0, a, n)))
                            : ((t.tag = 1), Po(e, t, r), (t.memoizedProps = a), (e = t.child)),
                        e
                    );
                case 1:
                    return (a = t.type), (n = t.pendingProps), pa.current || t.memoizedProps !== n ? ((a = a(n, (r = ha(t, (r = ga(t)))))), (t.effectTag |= 1), Po(e, t, a), (t.memoizedProps = n), (e = t.child)) : (e = Mo(e, t)), e;
                case 2:
                    if (((a = ka(t)), null === e))
                        if (null === t.stateNode) {
                            var i = t.pendingProps,
                                l = t.type;
                            r = ga(t);
                            var u = 2 === t.tag && null != t.type.contextTypes;
                            (i = new l(i, (o = u ? ha(t, r) : f))),
                                (t.memoizedState = null !== i.state && void 0 !== i.state ? i.state : null),
                                (i.updater = so),
                                (t.stateNode = i),
                                (i._reactInternalFiber = t),
                                u && (((u = t.stateNode).__reactInternalMemoizedUnmaskedChildContext = r), (u.__reactInternalMemoizedMaskedChildContext = o)),
                                po(t, n),
                                (r = !0);
                        } else {
                            (l = t.type), (r = t.stateNode), (u = t.memoizedProps), (o = t.pendingProps), (r.props = u);
                            var s = r.context;
                            i = ha(t, (i = ga(t)));
                            var c = l.getDerivedStateFromProps;
                            (l = "function" == typeof c || "function" == typeof r.getSnapshotBeforeUpdate) ||
                                ("function" != typeof r.UNSAFE_componentWillReceiveProps && "function" != typeof r.componentWillReceiveProps) ||
                                ((u !== o || s !== i) && fo(t, r, o, i)),
                                (Ua = !1);
                            var p = t.memoizedState;
                            s = r.state = p;
                            var m = t.updateQueue;
                            null !== m && (Ha(t, m, o, r, n), (s = t.memoizedState)),
                                u !== o || p !== s || pa.current || Ua
                                    ? ("function" == typeof c && (uo(t, c, o), (s = t.memoizedState)),
                                      (u = Ua || co(t, u, o, p, s, i))
                                          ? (l ||
                                                ("function" != typeof r.UNSAFE_componentWillMount && "function" != typeof r.componentWillMount) ||
                                                ("function" == typeof r.componentWillMount && r.componentWillMount(), "function" == typeof r.UNSAFE_componentWillMount && r.UNSAFE_componentWillMount()),
                                            "function" == typeof r.componentDidMount && (t.effectTag |= 4))
                                          : ("function" == typeof r.componentDidMount && (t.effectTag |= 4), (t.memoizedProps = o), (t.memoizedState = s)),
                                      (r.props = o),
                                      (r.state = s),
                                      (r.context = i),
                                      (r = u))
                                    : ("function" == typeof r.componentDidMount && (t.effectTag |= 4), (r = !1));
                        }
                    else
                        (l = t.type),
                            (r = t.stateNode),
                            (o = t.memoizedProps),
                            (u = t.pendingProps),
                            (r.props = o),
                            (s = r.context),
                            (i = ha(t, (i = ga(t)))),
                            (l = "function" == typeof (c = l.getDerivedStateFromProps) || "function" == typeof r.getSnapshotBeforeUpdate) ||
                                ("function" != typeof r.UNSAFE_componentWillReceiveProps && "function" != typeof r.componentWillReceiveProps) ||
                                ((o !== u || s !== i) && fo(t, r, u, i)),
                            (Ua = !1),
                            (s = t.memoizedState),
                            (p = r.state = s),
                            null !== (m = t.updateQueue) && (Ha(t, m, u, r, n), (p = t.memoizedState)),
                            o !== u || s !== p || pa.current || Ua
                                ? ("function" == typeof c && (uo(t, c, u), (p = t.memoizedState)),
                                  (c = Ua || co(t, o, u, s, p, i))
                                      ? (l ||
                                            ("function" != typeof r.UNSAFE_componentWillUpdate && "function" != typeof r.componentWillUpdate) ||
                                            ("function" == typeof r.componentWillUpdate && r.componentWillUpdate(u, p, i), "function" == typeof r.UNSAFE_componentWillUpdate && r.UNSAFE_componentWillUpdate(u, p, i)),
                                        "function" == typeof r.componentDidUpdate && (t.effectTag |= 4),
                                        "function" == typeof r.getSnapshotBeforeUpdate && (t.effectTag |= 256))
                                      : ("function" != typeof r.componentDidUpdate || (o === e.memoizedProps && s === e.memoizedState) || (t.effectTag |= 4),
                                        "function" != typeof r.getSnapshotBeforeUpdate || (o === e.memoizedProps && s === e.memoizedState) || (t.effectTag |= 256),
                                        (t.memoizedProps = u),
                                        (t.memoizedState = p)),
                                  (r.props = u),
                                  (r.state = p),
                                  (r.context = i),
                                  (r = c))
                                : ("function" != typeof r.componentDidUpdate || (o === e.memoizedProps && s === e.memoizedState) || (t.effectTag |= 4),
                                  "function" != typeof r.getSnapshotBeforeUpdate || (o === e.memoizedProps && s === e.memoizedState) || (t.effectTag |= 256),
                                  (r = !1));
                    return Oo(e, t, r, a, n);
                case 3:
                    return (
                        Ro(t),
                        null !== (a = t.updateQueue)
                            ? ((r = null !== (r = t.memoizedState) ? r.element : null),
                              Ha(t, a, t.pendingProps, null, n),
                              (a = t.memoizedState.element) === r
                                  ? (_o(), (e = Mo(e, t)))
                                  : ((r = t.stateNode),
                                    (r = (null === e || null === e.child) && r.hydrate) && ((wo = ia(t.stateNode.containerInfo)), (xo = t), (r = ko = !0)),
                                    r ? ((t.effectTag |= 2), (t.child = bo(t, null, a, n))) : (_o(), Po(e, t, a)),
                                    (e = t.child)))
                            : (_o(), (e = Mo(e, t))),
                        e
                    );
                case 5:
                    return (
                        ao(ro.current),
                        (a = ao(to.current)) !== (r = Or(a, t.type)) && (fa(no, t), fa(to, r)),
                        null === e && To(t),
                        (a = t.type),
                        (u = t.memoizedProps),
                        (r = t.pendingProps),
                        (o = null !== e ? e.memoizedProps : null),
                        pa.current || u !== r || ((u = 1 & t.mode && !!r.hidden) && (t.expirationTime = 1073741823), u && 1073741823 === n)
                            ? ((u = r.children),
                              ta(a, r) ? (u = null) : o && ta(a, o) && (t.effectTag |= 16),
                              No(e, t),
                              1073741823 !== n && 1 & t.mode && r.hidden ? ((t.expirationTime = 1073741823), (t.memoizedProps = r), (e = null)) : (Po(e, t, u), (t.memoizedProps = r), (e = t.child)))
                            : (e = Mo(e, t)),
                        e
                    );
                case 6:
                    return null === e && To(t), (t.memoizedProps = t.pendingProps), null;
                case 16:
                    return null;
                case 4:
                    return oo(t, t.stateNode.containerInfo), (a = t.pendingProps), pa.current || t.memoizedProps !== a ? (null === e ? (t.child = yo(t, null, a, n)) : Po(e, t, a), (t.memoizedProps = a), (e = t.child)) : (e = Mo(e, t)), e;
                case 14:
                    return (
                        (a = t.type.render), (n = t.pendingProps), (r = t.ref), pa.current || t.memoizedProps !== n || r !== (null !== e ? e.ref : null) ? (Po(e, t, (a = a(n, r))), (t.memoizedProps = n), (e = t.child)) : (e = Mo(e, t)), e
                    );
                case 10:
                    return (n = t.pendingProps), pa.current || t.memoizedProps !== n ? (Po(e, t, n), (t.memoizedProps = n), (e = t.child)) : (e = Mo(e, t)), e;
                case 11:
                    return (n = t.pendingProps.children), pa.current || (null !== n && t.memoizedProps !== n) ? (Po(e, t, n), (t.memoizedProps = n), (e = t.child)) : (e = Mo(e, t)), e;
                case 15:
                    return (n = t.pendingProps), t.memoizedProps === n ? (e = Mo(e, t)) : (Po(e, t, n.children), (t.memoizedProps = n), (e = t.child)), e;
                case 13:
                    return (function (e, t, n) {
                        var r = t.type._context,
                            a = t.pendingProps,
                            o = t.memoizedProps,
                            i = !0;
                        if (pa.current) i = !1;
                        else if (o === a) return (t.stateNode = 0), Za(t), Mo(e, t);
                        var l = a.value;
                        if (((t.memoizedProps = a), null === o)) l = 1073741823;
                        else if (o.value === a.value) {
                            if (o.children === a.children && i) return (t.stateNode = 0), Za(t), Mo(e, t);
                            l = 0;
                        } else {
                            var u = o.value;
                            if ((u === l && (0 !== u || 1 / u == 1 / l)) || (u != u && l != l)) {
                                if (o.children === a.children && i) return (t.stateNode = 0), Za(t), Mo(e, t);
                                l = 0;
                            } else if (((l = "function" == typeof r._calculateChangedBits ? r._calculateChangedBits(u, l) : 1073741823), 0 === (l |= 0))) {
                                if (o.children === a.children && i) return (t.stateNode = 0), Za(t), Mo(e, t);
                            } else Io(t, r, l, n);
                        }
                        return (t.stateNode = l), Za(t), Po(e, t, a.children), t.child;
                    })(e, t, n);
                case 12:
                    e: if (((r = t.type), (o = t.pendingProps), (u = t.memoizedProps), (a = r._currentValue), (i = r._changedBits), pa.current || 0 !== i || u !== o)) {
                        if (((t.memoizedProps = o), null == (l = o.unstable_observedBits) && (l = 1073741823), (t.stateNode = l), 0 != (i & l))) Io(t, r, i, n);
                        else if (u === o) {
                            e = Mo(e, t);
                            break e;
                        }
                        (n = (n = o.children)(a)), (t.effectTag |= 1), Po(e, t, n), (e = t.child);
                    } else e = Mo(e, t);
                    return e;
                default:
                    d("156");
            }
        }
        function Fo(e) {
            e.effectTag |= 4;
        }
        var Do, jo;
        function zo(e, t) {
            var n = t.pendingProps;
            switch (t.tag) {
                case 1:
                    return null;
                case 2:
                    return ya(t), null;
                case 3:
                    io(), ba();
                    var r = t.stateNode;
                    return r.pendingContext && ((r.context = r.pendingContext), (r.pendingContext = null)), (null !== e && null !== e.child) || (So(t), (t.effectTag &= -3)), null;
                case 5:
                    lo(t), (r = ao(ro.current));
                    var a = t.type;
                    if (null !== e && null != t.stateNode) {
                        var o = e.memoizedProps,
                            i = t.stateNode;
                        ao(to.current);
                        (i = qr(i, a, o, n, r)), Do(0, t, i), e.ref !== t.ref && (t.effectTag |= 128);
                    } else {
                        if (!n) return null === t.stateNode && d("166"), null;
                        if (((e = ao(to.current)), So(t))) (n = t.stateNode), (a = t.type), (o = t.memoizedProps), (n[$] = t), (n[V] = o), (r = Xr(n, a, o, e, r)), (t.updateQueue = r), null !== r && Fo(t);
                        else {
                            ((e = Vr(a, n, r, e))[$] = t), (e[V] = n);
                            e: for (o = t.child; null !== o; ) {
                                if (5 === o.tag || 6 === o.tag) e.appendChild(o.stateNode);
                                else if (4 !== o.tag && null !== o.child) {
                                    (o.child.return = o), (o = o.child);
                                    continue;
                                }
                                if (o === t) break;
                                for (; null === o.sibling; ) {
                                    if (null === o.return || o.return === t) break e;
                                    o = o.return;
                                }
                                (o.sibling.return = o.return), (o = o.sibling);
                            }
                            Kr(e, a, n, r), ea(a, n) && Fo(t), (t.stateNode = e);
                        }
                        null !== t.ref && (t.effectTag |= 128);
                    }
                    return null;
                case 6:
                    if (e && null != t.stateNode) jo(0, t, e.memoizedProps, n);
                    else {
                        if ("string" != typeof n) return null === t.stateNode && d("166"), null;
                        (r = ao(ro.current)), ao(to.current), So(t) ? ((r = t.stateNode), (n = t.memoizedProps), (r[$] = t), Yr(r, n) && Fo(t)) : (((r = Hr(n, r))[$] = t), (t.stateNode = r));
                    }
                    return null;
                case 14:
                case 16:
                case 10:
                case 11:
                case 15:
                    return null;
                case 4:
                    return io(), null;
                case 13:
                    return Ja(t), null;
                case 12:
                    return null;
                case 0:
                    d("167");
                default:
                    d("156");
            }
        }
        function Bo(e, t) {
            var n = t.source;
            null === t.stack && null !== n && kt(n), null !== n && wt(n), (t = t.value), null !== e && 2 === e.tag && wt(e);
            try {
                (t && t.suppressReactErrorLogging) || console.error(t);
            } catch (e) {
                (e && e.suppressReactErrorLogging) || console.error(e);
            }
        }
        function Wo(e) {
            var t = e.ref;
            if (null !== t)
                if ("function" == typeof t)
                    try {
                        t(null);
                    } catch (t) {
                        vi(e, t);
                    }
                else t.current = null;
        }
        function $o(e) {
            switch ((Ma(e), e.tag)) {
                case 2:
                    Wo(e);
                    var t = e.stateNode;
                    if ("function" == typeof t.componentWillUnmount)
                        try {
                            (t.props = e.memoizedProps), (t.state = e.memoizedState), t.componentWillUnmount();
                        } catch (t) {
                            vi(e, t);
                        }
                    break;
                case 5:
                    Wo(e);
                    break;
                case 4:
                    Ko(e);
            }
        }
        function Vo(e) {
            return 5 === e.tag || 3 === e.tag || 4 === e.tag;
        }
        function Ho(e) {
            e: {
                for (var t = e.return; null !== t; ) {
                    if (Vo(t)) {
                        var n = t;
                        break e;
                    }
                    t = t.return;
                }
                d("160"), (n = void 0);
            }
            var r = (t = void 0);
            switch (n.tag) {
                case 5:
                    (t = n.stateNode), (r = !1);
                    break;
                case 3:
                case 4:
                    (t = n.stateNode.containerInfo), (r = !0);
                    break;
                default:
                    d("161");
            }
            16 & n.effectTag && (Mr(t, ""), (n.effectTag &= -17));
            e: t: for (n = e; ; ) {
                for (; null === n.sibling; ) {
                    if (null === n.return || Vo(n.return)) {
                        n = null;
                        break e;
                    }
                    n = n.return;
                }
                for (n.sibling.return = n.return, n = n.sibling; 5 !== n.tag && 6 !== n.tag; ) {
                    if (2 & n.effectTag) continue t;
                    if (null === n.child || 4 === n.tag) continue t;
                    (n.child.return = n), (n = n.child);
                }
                if (!(2 & n.effectTag)) {
                    n = n.stateNode;
                    break e;
                }
            }
            for (var a = e; ; ) {
                if (5 === a.tag || 6 === a.tag)
                    if (n)
                        if (r) {
                            var o = t,
                                i = a.stateNode,
                                l = n;
                            8 === o.nodeType ? o.parentNode.insertBefore(i, l) : o.insertBefore(i, l);
                        } else t.insertBefore(a.stateNode, n);
                    else r ? ((o = t), (i = a.stateNode), 8 === o.nodeType ? o.parentNode.insertBefore(i, o) : o.appendChild(i)) : t.appendChild(a.stateNode);
                else if (4 !== a.tag && null !== a.child) {
                    (a.child.return = a), (a = a.child);
                    continue;
                }
                if (a === e) break;
                for (; null === a.sibling; ) {
                    if (null === a.return || a.return === e) return;
                    a = a.return;
                }
                (a.sibling.return = a.return), (a = a.sibling);
            }
        }
        function Ko(e) {
            for (var t = e, n = !1, r = void 0, a = void 0; ; ) {
                if (!n) {
                    n = t.return;
                    e: for (;;) {
                        switch ((null === n && d("160"), n.tag)) {
                            case 5:
                                (r = n.stateNode), (a = !1);
                                break e;
                            case 3:
                            case 4:
                                (r = n.stateNode.containerInfo), (a = !0);
                                break e;
                        }
                        n = n.return;
                    }
                    n = !0;
                }
                if (5 === t.tag || 6 === t.tag) {
                    e: for (var o = t, i = o; ; )
                        if (($o(i), null !== i.child && 4 !== i.tag)) (i.child.return = i), (i = i.child);
                        else {
                            if (i === o) break;
                            for (; null === i.sibling; ) {
                                if (null === i.return || i.return === o) break e;
                                i = i.return;
                            }
                            (i.sibling.return = i.return), (i = i.sibling);
                        }
                    a ? ((o = r), (i = t.stateNode), 8 === o.nodeType ? o.parentNode.removeChild(i) : o.removeChild(i)) : r.removeChild(t.stateNode);
                } else if ((4 === t.tag ? (r = t.stateNode.containerInfo) : $o(t), null !== t.child)) {
                    (t.child.return = t), (t = t.child);
                    continue;
                }
                if (t === e) break;
                for (; null === t.sibling; ) {
                    if (null === t.return || t.return === e) return;
                    4 === (t = t.return).tag && (n = !1);
                }
                (t.sibling.return = t.return), (t = t.sibling);
            }
        }
        function qo(e, t) {
            switch (t.tag) {
                case 2:
                    break;
                case 5:
                    var n = t.stateNode;
                    if (null != n) {
                        var r = t.memoizedProps;
                        e = null !== e ? e.memoizedProps : r;
                        var a = t.type,
                            o = t.updateQueue;
                        (t.updateQueue = null), null !== o && ((n[V] = r), Qr(n, o, a, e, r));
                    }
                    break;
                case 6:
                    null === t.stateNode && d("162"), (t.stateNode.nodeValue = t.memoizedProps);
                    break;
                case 3:
                case 15:
                case 16:
                    break;
                default:
                    d("163");
            }
        }
        function Qo(e, t, n) {
            ((n = ja(n)).tag = 3), (n.payload = { element: null });
            var r = t.value;
            return (
                (n.callback = function () {
                    Ji(r), Bo(e, t);
                }),
                n
            );
        }
        function Xo(e, t, n) {
            (n = ja(n)).tag = 3;
            var r = e.stateNode;
            return (
                null !== r &&
                    "function" == typeof r.componentDidCatch &&
                    (n.callback = function () {
                        null === di ? (di = new Set([this])) : di.add(this);
                        var n = t.value,
                            r = t.stack;
                        Bo(e, t), this.componentDidCatch(n, { componentStack: null !== r ? r : "" });
                    }),
                n
            );
        }
        function Yo(e, t, n, r, a, o) {
            (n.effectTag |= 512), (n.firstEffect = n.lastEffect = null), (r = Qa(r, n)), (e = t);
            do {
                switch (e.tag) {
                    case 3:
                        return (e.effectTag |= 1024), void Wa(e, (r = Qo(e, r, o)), o);
                    case 2:
                        if (((t = r), (n = e.stateNode), 0 == (64 & e.effectTag) && null !== n && "function" == typeof n.componentDidCatch && (null === di || !di.has(n)))) return (e.effectTag |= 1024), void Wa(e, (r = Xo(e, t, o)), o);
                }
                e = e.return;
            } while (null !== e);
        }
        function Go(e) {
            switch (e.tag) {
                case 2:
                    ya(e);
                    var t = e.effectTag;
                    return 1024 & t ? ((e.effectTag = (-1025 & t) | 64), e) : null;
                case 3:
                    return io(), ba(), 1024 & (t = e.effectTag) ? ((e.effectTag = (-1025 & t) | 64), e) : null;
                case 5:
                    return lo(e), null;
                case 16:
                    return 1024 & (t = e.effectTag) ? ((e.effectTag = (-1025 & t) | 64), e) : null;
                case 4:
                    return io(), null;
                case 13:
                    return Ja(e), null;
                default:
                    return null;
            }
        }
        (Do = function (e, t, n) {
            (t.updateQueue = n) && Fo(t);
        }),
            (jo = function (e, t, n, r) {
                n !== r && Fo(t);
            });
        var Zo = na(),
            Jo = 2,
            ei = Zo,
            ti = 0,
            ni = 0,
            ri = !1,
            ai = null,
            oi = null,
            ii = 0,
            li = -1,
            ui = !1,
            si = null,
            ci = !1,
            fi = !1,
            di = null;
        function pi() {
            if (null !== ai)
                for (var e = ai.return; null !== e; ) {
                    var t = e;
                    switch (t.tag) {
                        case 2:
                            ya(t);
                            break;
                        case 3:
                            io(), ba();
                            break;
                        case 5:
                            lo(t);
                            break;
                        case 4:
                            io();
                            break;
                        case 13:
                            Ja(t);
                    }
                    e = e.return;
                }
            (oi = null), (ii = 0), (li = -1), (ui = !1), (ai = null), (fi = !1);
        }
        function mi(e) {
            for (;;) {
                var t = e.alternate,
                    n = e.return,
                    r = e.sibling;
                if (0 == (512 & e.effectTag)) {
                    t = zo(t, e);
                    var a = e;
                    if (1073741823 === ii || 1073741823 !== a.expirationTime) {
                        var o = 0;
                        switch (a.tag) {
                            case 3:
                            case 2:
                                var i = a.updateQueue;
                                null !== i && (o = i.expirationTime);
                        }
                        for (i = a.child; null !== i; ) 0 !== i.expirationTime && (0 === o || o > i.expirationTime) && (o = i.expirationTime), (i = i.sibling);
                        a.expirationTime = o;
                    }
                    if (null !== t) return t;
                    if (
                        (null !== n &&
                            0 == (512 & n.effectTag) &&
                            (null === n.firstEffect && (n.firstEffect = e.firstEffect),
                            null !== e.lastEffect && (null !== n.lastEffect && (n.lastEffect.nextEffect = e.firstEffect), (n.lastEffect = e.lastEffect)),
                            1 < e.effectTag && (null !== n.lastEffect ? (n.lastEffect.nextEffect = e) : (n.firstEffect = e), (n.lastEffect = e))),
                        null !== r)
                    )
                        return r;
                    if (null === n) {
                        fi = !0;
                        break;
                    }
                    e = n;
                } else {
                    if (null !== (e = Go(e))) return (e.effectTag &= 511), e;
                    if ((null !== n && ((n.firstEffect = n.lastEffect = null), (n.effectTag |= 512)), null !== r)) return r;
                    if (null === n) break;
                    e = n;
                }
            }
            return null;
        }
        function gi(e) {
            var t = Uo(e.alternate, e, ii);
            return null === t && (t = mi(e)), (lt.current = null), t;
        }
        function hi(e, t, n) {
            ri && d("243"), (ri = !0), (t === ii && e === oi && null !== ai) || (pi(), (ii = t), (li = -1), (ai = Ta((oi = e).current, null, ii)), (e.pendingCommitExpirationTime = 0));
            var r = !1;
            for (ui = !n || ii <= Jo; ; ) {
                try {
                    if (n) for (; null !== ai && !Zi(); ) ai = gi(ai);
                    else for (; null !== ai; ) ai = gi(ai);
                } catch (t) {
                    if (null === ai) (r = !0), Ji(t);
                    else {
                        null === ai && d("271");
                        var a = (n = ai).return;
                        if (null === a) {
                            (r = !0), Ji(t);
                            break;
                        }
                        Yo(e, a, n, t, 0, ii), (ai = mi(n));
                    }
                }
                break;
            }
            if (((ri = !1), r)) return null;
            if (null === ai) {
                if (fi) return (e.pendingCommitExpirationTime = t), e.current.alternate;
                ui && d("262"),
                    0 <= li &&
                        setTimeout(function () {
                            var t = e.current.expirationTime;
                            0 !== t && (0 === e.remainingExpirationTime || e.remainingExpirationTime < t) && $i(e, t);
                        }, li),
                    (function (e) {
                        null === Pi && d("246"), (Pi.remainingExpirationTime = e);
                    })(e.current.expirationTime);
            }
            return null;
        }
        function vi(e, t) {
            var n;
            e: {
                for (ri && !ci && d("263"), n = e.return; null !== n; ) {
                    switch (n.tag) {
                        case 2:
                            var r = n.stateNode;
                            if ("function" == typeof n.type.getDerivedStateFromCatch || ("function" == typeof r.componentDidCatch && (null === di || !di.has(r)))) {
                                Ba(n, (e = Xo(n, (e = Qa(t, e)), 1)), 1), xi(n, 1), (n = void 0);
                                break e;
                            }
                            break;
                        case 3:
                            Ba(n, (e = Qo(n, (e = Qa(t, e)), 1)), 1), xi(n, 1), (n = void 0);
                            break e;
                    }
                    n = n.return;
                }
                3 === e.tag && (Ba(e, (n = Qo(e, (n = Qa(t, e)), 1)), 1), xi(e, 1)), (n = void 0);
            }
            return n;
        }
        function yi() {
            var e = 2 + 25 * (1 + (((wi() - 2 + 500) / 25) | 0));
            return e <= ti && (e = ti + 1), (ti = e);
        }
        function bi(e, t) {
            return (e = 0 !== ni ? ni : ri ? (ci ? 1 : ii) : 1 & t.mode ? (Di ? 2 + 10 * (1 + (((e - 2 + 15) / 10) | 0)) : 2 + 25 * (1 + (((e - 2 + 500) / 25) | 0))) : 1), Di && (0 === Ni || e > Ni) && (Ni = e), e;
        }
        function xi(e, t) {
            for (; null !== e; ) {
                if (
                    ((0 === e.expirationTime || e.expirationTime > t) && (e.expirationTime = t),
                    null !== e.alternate && (0 === e.alternate.expirationTime || e.alternate.expirationTime > t) && (e.alternate.expirationTime = t),
                    null === e.return)
                ) {
                    if (3 !== e.tag) break;
                    var n = e.stateNode;
                    !ri && 0 !== ii && t < ii && pi();
                    var r = n.current.expirationTime;
                    (ri && !ci && oi === n) || $i(n, r), Bi > zi && d("185");
                }
                e = e.return;
            }
        }
        function wi() {
            return (ei = na() - Zo), (Jo = 2 + ((ei / 10) | 0));
        }
        function ki(e) {
            var t = ni;
            ni = 2 + 25 * (1 + (((wi() - 2 + 500) / 25) | 0));
            try {
                return e();
            } finally {
                ni = t;
            }
        }
        function Ai(e, t, n, r, a) {
            var o = ni;
            ni = 1;
            try {
                return e(t, n, r, a);
            } finally {
                ni = o;
            }
        }
        var Ci = null,
            Ti = null,
            Ei = 0,
            Si = void 0,
            _i = !1,
            Pi = null,
            Li = 0,
            Ni = 0,
            Oi = !1,
            Ri = !1,
            Ii = null,
            Mi = null,
            Ui = !1,
            Fi = !1,
            Di = !1,
            ji = null,
            zi = 1e3,
            Bi = 0;
        function Wi(e) {
            if (0 !== Ei) {
                if (e > Ei) return;
                null !== Si && aa(Si);
            }
            var t = na() - Zo;
            (Ei = e), (Si = ra(Hi, { timeout: 10 * (e - 2) - t }));
        }
        function $i(e, t) {
            if (null === e.nextScheduledRoot) (e.remainingExpirationTime = t), null === Ti ? ((Ci = Ti = e), (e.nextScheduledRoot = e)) : ((Ti = Ti.nextScheduledRoot = e).nextScheduledRoot = Ci);
            else {
                var n = e.remainingExpirationTime;
                (0 === n || t < n) && (e.remainingExpirationTime = t);
            }
            _i || (Ui ? Fi && ((Pi = e), (Li = 1), Yi(e, 1, !1)) : 1 === t ? Ki() : Wi(t));
        }
        function Vi() {
            var e = 0,
                t = null;
            if (null !== Ti)
                for (var n = Ti, r = Ci; null !== r; ) {
                    var a = r.remainingExpirationTime;
                    if (0 === a) {
                        if (((null === n || null === Ti) && d("244"), r === r.nextScheduledRoot)) {
                            Ci = Ti = r.nextScheduledRoot = null;
                            break;
                        }
                        if (r === Ci) (Ci = a = r.nextScheduledRoot), (Ti.nextScheduledRoot = a), (r.nextScheduledRoot = null);
                        else {
                            if (r === Ti) {
                                ((Ti = n).nextScheduledRoot = Ci), (r.nextScheduledRoot = null);
                                break;
                            }
                            (n.nextScheduledRoot = r.nextScheduledRoot), (r.nextScheduledRoot = null);
                        }
                        r = n.nextScheduledRoot;
                    } else {
                        if (((0 === e || a < e) && ((e = a), (t = r)), r === Ti)) break;
                        (n = r), (r = r.nextScheduledRoot);
                    }
                }
            null !== (n = Pi) && n === t && 1 === e ? Bi++ : (Bi = 0), (Pi = t), (Li = e);
        }
        function Hi(e) {
            qi(0, !0, e);
        }
        function Ki() {
            qi(1, !1, null);
        }
        function qi(e, t, n) {
            if (((Mi = n), Vi(), t)) for (; null !== Pi && 0 !== Li && (0 === e || e >= Li) && (!Oi || wi() >= Li); ) wi(), Yi(Pi, Li, !Oi), Vi();
            else for (; null !== Pi && 0 !== Li && (0 === e || e >= Li); ) Yi(Pi, Li, !1), Vi();
            null !== Mi && ((Ei = 0), (Si = null)), 0 !== Li && Wi(Li), (Mi = null), (Oi = !1), Xi();
        }
        function Qi(e, t) {
            _i && d("253"), (Pi = e), (Li = t), Yi(e, t, !1), Ki(), Xi();
        }
        function Xi() {
            if (((Bi = 0), null !== ji)) {
                var e = ji;
                ji = null;
                for (var t = 0; t < e.length; t++) {
                    var n = e[t];
                    try {
                        n._onComplete();
                    } catch (e) {
                        Ri || ((Ri = !0), (Ii = e));
                    }
                }
            }
            if (Ri) throw ((e = Ii), (Ii = null), (Ri = !1), e);
        }
        function Yi(e, t, n) {
            _i && d("245"),
                (_i = !0),
                n ? (null !== (n = e.finishedWork) ? Gi(e, n, t) : null !== (n = hi(e, t, !0)) && (Zi() ? (e.finishedWork = n) : Gi(e, n, t))) : null !== (n = e.finishedWork) ? Gi(e, n, t) : null !== (n = hi(e, t, !1)) && Gi(e, n, t),
                (_i = !1);
        }
        function Gi(e, t, n) {
            var r = e.firstBatch;
            if (null !== r && r._expirationTime <= n && (null === ji ? (ji = [r]) : ji.push(r), r._defer)) return (e.finishedWork = t), void (e.remainingExpirationTime = 0);
            if (((e.finishedWork = null), (ci = ri = !0), (n = t.stateNode).current === t && d("177"), 0 === (r = n.pendingCommitExpirationTime) && d("261"), (n.pendingCommitExpirationTime = 0), wi(), (lt.current = null), 1 < t.effectTag))
                if (null !== t.lastEffect) {
                    t.lastEffect.nextEffect = t;
                    var a = t.firstEffect;
                } else a = t;
            else a = t.firstEffect;
            Zr = On;
            var o = u();
            if (Hn(o)) {
                if ("selectionStart" in o) var i = { start: o.selectionStart, end: o.selectionEnd };
                else
                    e: {
                        var l = window.getSelection && window.getSelection();
                        if (l && 0 !== l.rangeCount) {
                            i = l.anchorNode;
                            var s = l.anchorOffset,
                                f = l.focusNode;
                            l = l.focusOffset;
                            try {
                                i.nodeType, f.nodeType;
                            } catch (e) {
                                i = null;
                                break e;
                            }
                            var p = 0,
                                m = -1,
                                g = -1,
                                h = 0,
                                v = 0,
                                y = o,
                                b = null;
                            t: for (;;) {
                                for (var x; y !== i || (0 !== s && 3 !== y.nodeType) || (m = p + s), y !== f || (0 !== l && 3 !== y.nodeType) || (g = p + l), 3 === y.nodeType && (p += y.nodeValue.length), null !== (x = y.firstChild); )
                                    (b = y), (y = x);
                                for (;;) {
                                    if (y === o) break t;
                                    if ((b === i && ++h === s && (m = p), b === f && ++v === l && (g = p), null !== (x = y.nextSibling))) break;
                                    b = (y = b).parentNode;
                                }
                                y = x;
                            }
                            i = -1 === m || -1 === g ? null : { start: m, end: g };
                        } else i = null;
                    }
                i = i || { start: 0, end: 0 };
            } else i = null;
            for (Jr = { focusedElem: o, selectionRange: i }, Rn(!1), si = a; null !== si; ) {
                (o = !1), (i = void 0);
                try {
                    for (; null !== si; ) {
                        if (256 & si.effectTag) {
                            var w = si.alternate;
                            switch ((s = si).tag) {
                                case 2:
                                    if (256 & s.effectTag && null !== w) {
                                        var k = w.memoizedProps,
                                            A = w.memoizedState,
                                            C = s.stateNode;
                                        (C.props = s.memoizedProps), (C.state = s.memoizedState);
                                        var T = C.getSnapshotBeforeUpdate(k, A);
                                        C.__reactInternalSnapshotBeforeUpdate = T;
                                    }
                                    break;
                                case 3:
                                case 5:
                                case 6:
                                case 4:
                                    break;
                                default:
                                    d("163");
                            }
                        }
                        si = si.nextEffect;
                    }
                } catch (e) {
                    (o = !0), (i = e);
                }
                o && (null === si && d("178"), vi(si, i), null !== si && (si = si.nextEffect));
            }
            for (si = a; null !== si; ) {
                (w = !1), (k = void 0);
                try {
                    for (; null !== si; ) {
                        var E = si.effectTag;
                        if ((16 & E && Mr(si.stateNode, ""), 128 & E)) {
                            var S = si.alternate;
                            if (null !== S) {
                                var _ = S.ref;
                                null !== _ && ("function" == typeof _ ? _(null) : (_.current = null));
                            }
                        }
                        switch (14 & E) {
                            case 2:
                                Ho(si), (si.effectTag &= -3);
                                break;
                            case 6:
                                Ho(si), (si.effectTag &= -3), qo(si.alternate, si);
                                break;
                            case 4:
                                qo(si.alternate, si);
                                break;
                            case 8:
                                Ko((A = si)), (A.return = null), (A.child = null), A.alternate && ((A.alternate.child = null), (A.alternate.return = null));
                        }
                        si = si.nextEffect;
                    }
                } catch (e) {
                    (w = !0), (k = e);
                }
                w && (null === si && d("178"), vi(si, k), null !== si && (si = si.nextEffect));
            }
            if (((_ = Jr), (S = u()), (E = _.focusedElem), (w = _.selectionRange), S !== E && c(document.documentElement, E))) {
                null !== w &&
                    Hn(E) &&
                    ((S = w.start),
                    void 0 === (_ = w.end) && (_ = S),
                    "selectionStart" in E
                        ? ((E.selectionStart = S), (E.selectionEnd = Math.min(_, E.value.length)))
                        : window.getSelection &&
                          ((S = window.getSelection()),
                          (k = E[he()].length),
                          (_ = Math.min(w.start, k)),
                          (w = void 0 === w.end ? _ : Math.min(w.end, k)),
                          !S.extend && _ > w && ((k = w), (w = _), (_ = k)),
                          (k = Vn(E, _)),
                          (A = Vn(E, w)),
                          k &&
                              A &&
                              (1 !== S.rangeCount || S.anchorNode !== k.node || S.anchorOffset !== k.offset || S.focusNode !== A.node || S.focusOffset !== A.offset) &&
                              ((C = document.createRange()).setStart(k.node, k.offset), S.removeAllRanges(), _ > w ? (S.addRange(C), S.extend(A.node, A.offset)) : (C.setEnd(A.node, A.offset), S.addRange(C))))),
                    (S = []);
                for (_ = E; (_ = _.parentNode); ) 1 === _.nodeType && S.push({ element: _, left: _.scrollLeft, top: _.scrollTop });
                for ("function" == typeof E.focus && E.focus(), E = 0; E < S.length; E++) ((_ = S[E]).element.scrollLeft = _.left), (_.element.scrollTop = _.top);
            }
            for (Jr = null, Rn(Zr), Zr = null, n.current = t, si = a; null !== si; ) {
                (a = !1), (E = void 0);
                try {
                    for (S = r; null !== si; ) {
                        var P = si.effectTag;
                        if (36 & P) {
                            var L = si.alternate;
                            switch (((w = S), (_ = si).tag)) {
                                case 2:
                                    var N = _.stateNode;
                                    if (4 & _.effectTag)
                                        if (null === L) (N.props = _.memoizedProps), (N.state = _.memoizedState), N.componentDidMount();
                                        else {
                                            var O = L.memoizedProps,
                                                R = L.memoizedState;
                                            (N.props = _.memoizedProps), (N.state = _.memoizedState), N.componentDidUpdate(O, R, N.__reactInternalSnapshotBeforeUpdate);
                                        }
                                    var I = _.updateQueue;
                                    null !== I && ((N.props = _.memoizedProps), (N.state = _.memoizedState), qa(_, I, N));
                                    break;
                                case 3:
                                    var M = _.updateQueue;
                                    if (null !== M) {
                                        if (((k = null), null !== _.child))
                                            switch (_.child.tag) {
                                                case 5:
                                                    k = _.child.stateNode;
                                                    break;
                                                case 2:
                                                    k = _.child.stateNode;
                                            }
                                        qa(_, M, k);
                                    }
                                    break;
                                case 5:
                                    var U = _.stateNode;
                                    null === L && 4 & _.effectTag && ea(_.type, _.memoizedProps) && U.focus();
                                    break;
                                case 6:
                                case 4:
                                case 15:
                                case 16:
                                    break;
                                default:
                                    d("163");
                            }
                        }
                        if (128 & P) {
                            _ = void 0;
                            var F = si.ref;
                            if (null !== F) {
                                var D = si.stateNode;
                                switch (si.tag) {
                                    case 5:
                                        _ = D;
                                        break;
                                    default:
                                        _ = D;
                                }
                                "function" == typeof F ? F(_) : (F.current = _);
                            }
                        }
                        var j = si.nextEffect;
                        (si.nextEffect = null), (si = j);
                    }
                } catch (e) {
                    (a = !0), (E = e);
                }
                a && (null === si && d("178"), vi(si, E), null !== si && (si = si.nextEffect));
            }
            (ri = ci = !1), Ia(t.stateNode), 0 === (t = n.current.expirationTime) && (di = null), (e.remainingExpirationTime = t);
        }
        function Zi() {
            return !(null === Mi || Mi.timeRemaining() > 1) && (Oi = !0);
        }
        function Ji(e) {
            null === Pi && d("246"), (Pi.remainingExpirationTime = 0), Ri || ((Ri = !0), (Ii = e));
        }
        function el(e, t) {
            var n = Ui;
            Ui = !0;
            try {
                return e(t);
            } finally {
                (Ui = n) || _i || Ki();
            }
        }
        function tl(e, t) {
            if (Ui && !Fi) {
                Fi = !0;
                try {
                    return e(t);
                } finally {
                    Fi = !1;
                }
            }
            return e(t);
        }
        function nl(e, t) {
            _i && d("187");
            var n = Ui;
            Ui = !0;
            try {
                return Ai(e, t);
            } finally {
                (Ui = n), Ki();
            }
        }
        function rl(e, t, n) {
            if (Di) return e(t, n);
            Ui || _i || 0 === Ni || (qi(Ni, !1, null), (Ni = 0));
            var r = Di,
                a = Ui;
            Ui = Di = !0;
            try {
                return e(t, n);
            } finally {
                (Di = r), (Ui = a) || _i || Ki();
            }
        }
        function al(e) {
            var t = Ui;
            Ui = !0;
            try {
                Ai(e);
            } finally {
                (Ui = t) || _i || qi(1, !1, null);
            }
        }
        function ol(e, t, n, r, a) {
            var o = t.current;
            if (n) {
                var i;
                e: {
                    for ((2 === sn((n = n._reactInternalFiber)) && 2 === n.tag) || d("170"), i = n; 3 !== i.tag; ) {
                        if (va(i)) {
                            i = i.stateNode.__reactInternalMemoizedMergedChildContext;
                            break e;
                        }
                        (i = i.return) || d("171");
                    }
                    i = i.stateNode.context;
                }
                n = va(n) ? wa(n, i) : i;
            } else n = f;
            return null === t.context ? (t.context = n) : (t.pendingContext = n), (t = a), ((a = ja(r)).payload = { element: e }), null !== (t = void 0 === t ? null : t) && (a.callback = t), Ba(o, a, r), xi(o, r), r;
        }
        function il(e) {
            var t = e._reactInternalFiber;
            return void 0 === t && ("function" == typeof e.render ? d("188") : d("268", Object.keys(e))), null === (e = dn(t)) ? null : e.stateNode;
        }
        function ll(e, t, n, r) {
            var a = t.current;
            return ol(e, t, n, (a = bi(wi(), a)), r);
        }
        function ul(e) {
            if (!(e = e.current).child) return null;
            switch (e.child.tag) {
                case 5:
                default:
                    return e.child.stateNode;
            }
        }
        function sl(e) {
            var t = e.findFiberByHostInstance;
            return (function (e) {
                if ("undefined" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) return !1;
                var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
                if (t.isDisabled || !t.supportsFiber) return !0;
                try {
                    var n = t.inject(e);
                    (Na = Ra(function (e) {
                        return t.onCommitFiberRoot(n, e);
                    })),
                        (Oa = Ra(function (e) {
                            return t.onCommitFiberUnmount(n, e);
                        }));
                } catch (e) {}
                return !0;
            })(
                i({}, e, {
                    findHostInstanceByFiber: function (e) {
                        return null === (e = dn(e)) ? null : e.stateNode;
                    },
                    findFiberByHostInstance: function (e) {
                        return t ? t(e) : null;
                    },
                })
            );
        }
        var cl = el,
            fl = rl,
            dl = function () {
                _i || 0 === Ni || (qi(Ni, !1, null), (Ni = 0));
            };
        function pl(e, t, n) {
            var r = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
            return { $$typeof: ct, key: null == r ? null : "" + r, children: e, containerInfo: t, implementation: n };
        }
        function ml(e) {
            (this._expirationTime = yi()), (this._root = e), (this._callbacks = this._next = null), (this._hasChildren = this._didComplete = !1), (this._children = null), (this._defer = !0);
        }
        function gl() {
            (this._callbacks = null), (this._didCommit = !1), (this._onCommit = this._onCommit.bind(this));
        }
        function hl(e, t, n) {
            this._internalRoot = La(e, t, n);
        }
        function vl(e) {
            return !(!e || (1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType && (8 !== e.nodeType || " react-mount-point-unstable " !== e.nodeValue)));
        }
        function yl(e, t, n, r, a) {
            vl(n) || d("200");
            var o = n._reactRootContainer;
            if (o) {
                if ("function" == typeof a) {
                    var i = a;
                    a = function () {
                        var e = ul(o._internalRoot);
                        i.call(e);
                    };
                }
                null != e ? o.legacy_renderSubtreeIntoContainer(e, t, a) : o.render(t, a);
            } else {
                if (
                    ((o = n._reactRootContainer = (function (e, t) {
                        if ((t || (t = !(!(t = e ? (9 === e.nodeType ? e.documentElement : e.firstChild) : null) || 1 !== t.nodeType || !t.hasAttribute("data-reactroot"))), !t)) for (var n; (n = e.lastChild); ) e.removeChild(n);
                        return new hl(e, !1, t);
                    })(n, r)),
                    "function" == typeof a)
                ) {
                    var l = a;
                    a = function () {
                        var e = ul(o._internalRoot);
                        l.call(e);
                    };
                }
                tl(function () {
                    null != e ? o.legacy_renderSubtreeIntoContainer(e, t, a) : o.render(t, a);
                });
            }
            return ul(o._internalRoot);
        }
        function bl(e, t) {
            var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
            return vl(t) || d("200"), pl(e, t, null, n);
        }
        Be.injectFiberControlledHostComponent(Gr),
            (ml.prototype.render = function (e) {
                this._defer || d("250"), (this._hasChildren = !0), (this._children = e);
                var t = this._root._internalRoot,
                    n = this._expirationTime,
                    r = new gl();
                return ol(e, t, null, n, r._onCommit), r;
            }),
            (ml.prototype.then = function (e) {
                if (this._didComplete) e();
                else {
                    var t = this._callbacks;
                    null === t && (t = this._callbacks = []), t.push(e);
                }
            }),
            (ml.prototype.commit = function () {
                var e = this._root._internalRoot,
                    t = e.firstBatch;
                if (((this._defer && null !== t) || d("251"), this._hasChildren)) {
                    var n = this._expirationTime;
                    if (t !== this) {
                        this._hasChildren && ((n = this._expirationTime = t._expirationTime), this.render(this._children));
                        for (var r = null, a = t; a !== this; ) (r = a), (a = a._next);
                        null === r && d("251"), (r._next = a._next), (this._next = t), (e.firstBatch = this);
                    }
                    (this._defer = !1), Qi(e, n), (t = this._next), (this._next = null), null !== (t = e.firstBatch = t) && t._hasChildren && t.render(t._children);
                } else (this._next = null), (this._defer = !1);
            }),
            (ml.prototype._onComplete = function () {
                if (!this._didComplete) {
                    this._didComplete = !0;
                    var e = this._callbacks;
                    if (null !== e) for (var t = 0; t < e.length; t++) (0, e[t])();
                }
            }),
            (gl.prototype.then = function (e) {
                if (this._didCommit) e();
                else {
                    var t = this._callbacks;
                    null === t && (t = this._callbacks = []), t.push(e);
                }
            }),
            (gl.prototype._onCommit = function () {
                if (!this._didCommit) {
                    this._didCommit = !0;
                    var e = this._callbacks;
                    if (null !== e)
                        for (var t = 0; t < e.length; t++) {
                            var n = e[t];
                            "function" != typeof n && d("191", n), n();
                        }
                }
            }),
            (hl.prototype.render = function (e, t) {
                var n = this._internalRoot,
                    r = new gl();
                return null !== (t = void 0 === t ? null : t) && r.then(t), ll(e, n, null, r._onCommit), r;
            }),
            (hl.prototype.unmount = function (e) {
                var t = this._internalRoot,
                    n = new gl();
                return null !== (e = void 0 === e ? null : e) && n.then(e), ll(null, t, null, n._onCommit), n;
            }),
            (hl.prototype.legacy_renderSubtreeIntoContainer = function (e, t, n) {
                var r = this._internalRoot,
                    a = new gl();
                return null !== (n = void 0 === n ? null : n) && a.then(n), ll(t, r, e, a._onCommit), a;
            }),
            (hl.prototype.createBatch = function () {
                var e = new ml(this),
                    t = e._expirationTime,
                    n = this._internalRoot,
                    r = n.firstBatch;
                if (null === r) (n.firstBatch = e), (e._next = null);
                else {
                    for (n = null; null !== r && r._expirationTime <= t; ) (n = r), (r = r._next);
                    (e._next = r), null !== n && (n._next = e);
                }
                return e;
            }),
            (Xe = cl),
            (Ye = fl),
            (Ge = dl);
        var xl = {
            createPortal: bl,
            findDOMNode: function (e) {
                return null == e ? null : 1 === e.nodeType ? e : il(e);
            },
            hydrate: function (e, t, n) {
                return yl(null, e, t, !0, n);
            },
            render: function (e, t, n) {
                return yl(null, e, t, !1, n);
            },
            unstable_renderSubtreeIntoContainer: function (e, t, n, r) {
                return (null == e || void 0 === e._reactInternalFiber) && d("38"), yl(e, t, n, !1, r);
            },
            unmountComponentAtNode: function (e) {
                return (
                    vl(e) || d("40"),
                    !!e._reactRootContainer &&
                        (tl(function () {
                            yl(null, null, e, !1, function () {
                                e._reactRootContainer = null;
                            });
                        }),
                        !0)
                );
            },
            unstable_createPortal: function () {
                return bl.apply(void 0, arguments);
            },
            unstable_batchedUpdates: el,
            unstable_deferredUpdates: ki,
            unstable_interactiveUpdates: rl,
            flushSync: nl,
            unstable_flushControlled: al,
            __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: { EventPluginHub: B, EventPluginRegistry: E, EventPropagators: ae, ReactControlledComponent: Qe, ReactDOMComponentTree: Q, ReactDOMEventListener: Dn },
            unstable_createRoot: function (e, t) {
                return new hl(e, !0, null != t && !0 === t.hydrate);
            },
        };
        sl({ findFiberByHostInstance: H, bundleType: 0, version: "16.4.2", rendererPackageName: "react-dom" });
        var wl = { default: xl },
            kl = (wl && xl) || wl;
        e.exports = kl.default ? kl.default : kl;
    },
    function (e, t, n) {
        "use strict";
        var r = !("undefined" == typeof window || !window.document || !window.document.createElement),
            a = { canUseDOM: r, canUseWorkers: "undefined" != typeof Worker, canUseEventListeners: r && !(!window.addEventListener && !window.attachEvent), canUseViewport: r && !!window.screen, isInWorker: !r };
        e.exports = a;
    },
    function (e, t, n) {
        "use strict";
        e.exports = function (e) {
            if (void 0 === (e = e || ("undefined" != typeof document ? document : void 0))) return null;
            try {
                return e.activeElement || e.body;
            } catch (t) {
                return e.body;
            }
        };
    },
    function (e, t, n) {
        "use strict";
        var r = Object.prototype.hasOwnProperty;
        function a(e, t) {
            return e === t ? 0 !== e || 0 !== t || 1 / e == 1 / t : e != e && t != t;
        }
        e.exports = function (e, t) {
            if (a(e, t)) return !0;
            if ("object" != typeof e || null === e || "object" != typeof t || null === t) return !1;
            var n = Object.keys(e),
                o = Object.keys(t);
            if (n.length !== o.length) return !1;
            for (var i = 0; i < n.length; i++) if (!r.call(t, n[i]) || !a(e[n[i]], t[n[i]])) return !1;
            return !0;
        };
    },
    function (e, t, n) {
        "use strict";
        var r = n(27);
        e.exports = function e(t, n) {
            return !(!t || !n) && (t === n || (!r(t) && (r(n) ? e(t, n.parentNode) : "contains" in t ? t.contains(n) : !!t.compareDocumentPosition && !!(16 & t.compareDocumentPosition(n)))));
        };
    },
    function (e, t, n) {
        "use strict";
        var r = n(28);
        e.exports = function (e) {
            return r(e) && 3 == e.nodeType;
        };
    },
    function (e, t, n) {
        "use strict";
        e.exports = function (e) {
            var t = (e ? e.ownerDocument || e : document).defaultView || window;
            return !(!e || !("function" == typeof t.Node ? e instanceof t.Node : "object" == typeof e && "number" == typeof e.nodeType && "string" == typeof e.nodeName));
        };
    },
    function (e, t, n) {
        "use strict";
        var r = n(3),
            a = n.n(r);
        let o = [];
        const i = "common/translate";
        t.a = async (e, t = "auto", n) => {
            if ((a.a.log(i, "tranlate()", e, n), "" === (e = e.trim()))) return { resultText: "", candidateText: "", sourceLanguage: "en", percentage: 0, statusText: "OK" };
            const r = ((e, t, n) => o.find((r) => r.sourceWord == e && r.sourceLang == t && r.targetLang == n && "OK" == r.result.statusText))(e, t, n);
            if (r) return r.result;
            const l = ((e) => {
                const t = { resultText: "", candidateText: "", sourceLanguage: "", percentage: 0, statusText: "" };
                return (
                    0 === e.status ? (t.statusText = "Network Error") : 200 === e.status ? (t.statusText = "OK") : 429 === e.status || 503 === e.status ? (t.statusText = "Service Unavailable") : (t.statusText = e.statusText || e.status),
                    "OK" !== t.statusText
                        ? (a.a.error(i, "formatResult()", t), t)
                        : ((t.sourceLanguage = e.response.src),
                          (t.percentage = e.response.ld_result.srclangs_confidences[0]),
                          (t.resultText = e.response.sentences.map((e) => e.trans).join("")),
                          e.response.dict && (t.candidateText = e.response.dict.map((e) => `${e.pos}${"" != e.pos ? ": " : ""}${e.terms.join(", ")}\n`).join("")),
                          a.a.log(i, "formatResult()", t),
                          t)
                );
            })(
                await ((e, t, n) => {
                    a.a.log(i, "sendRequest()");
                    const r = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${t}&tl=${n}&dt=t&dt=bd&dj=1&q=${encodeURIComponent(e)}`,
                        o = new XMLHttpRequest();
                    return (
                        (o.responseType = "json"),
                        o.open("GET", r),
                        o.send(),
                        new Promise((e, t) => {
                            (o.onload = () => {
                                e(o);
                            }),
                                (o.onerror = () => {
                                    e(o);
                                });
                        })
                    );
                })(e, t, n)
            );
            return (
                ((e, t, n, r) => {
                    o.push({ sourceWord: e, sourceLang: t, targetLang: n, result: r });
                })(e, t, n, l),
                l
            );
        };
    },
    function (e, t, n) {
        "use strict";
        var r = n(1),
            a = n.n(r);
        t.a = (e) => {
            let t = "";
            switch (e) {
                case "Network Error":
                    t = a.a.i18n.getMessage("networkError");
                    break;
                case "Service Unavailable":
                    t = a.a.i18n.getMessage("unavailableError");
                    break;
                default:
                    t = `${a.a.i18n.getMessage("unknownError")} [${e}]`;
            }
            return t;
        };
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function (e, t, n) {},
    function (e, t, n) {},
    function (e, t, n) {},
    ,
    ,
    ,
    function (e, t, n) {
        "use strict";
        n.r(t);
        var r = n(0),
            a = n.n(r),
            o = n(11),
            i = n.n(o),
            l = n(1),
            u = n.n(l),
            s = n(2),
            c = n(8),
            f = n(29);
        n(77);
        var d = (e) => {
                const { position: t, shouldShow: n } = e,
                    r = parseInt(Object(s.a)("buttonSize")),
                    { top: o, left: i } = (() => {
                        const e = parseInt(Object(s.a)("buttonSize")),
                            t = parseInt(Object(s.a)("buttonOffset"));
                        switch (Object(s.a)("buttonDirection")) {
                            case "top":
                                return { top: -e - t, left: -e / 2 };
                            case "bottom":
                                return { top: t, left: -e / 2 };
                            case "right":
                                return { top: -e / 2, left: t };
                            case "left":
                                return { top: -e / 2, left: -e - t };
                            case "topRight":
                                return { top: -e - t, left: t };
                            case "topLeft":
                                return { top: -e - t, left: -e - t };
                            case "bottomLeft":
                                return { top: t, left: -e - t };
                            case "bottomRight":
                            default:
                                return { top: t, left: t };
                        }
                    })(),
                    l = { backgroundImage: `url(${u.a.extension.getURL("icons/512.png")})`, height: r, width: r, top: o + t.y, left: i + t.x };
                return a.a.createElement("div", { style: l, className: "simple-translate-button " + (n ? "isShow" : ""), onClick: e.handleButtonClick });
            },
            p = n(30);
        n(78);
        const m = (e) => {
            const t = /(\n)/g;
            return e.split(t).map((e, n) => (e.match(t) ? a.a.createElement("br", { key: n }) : e));
        };
        class g extends r.Component {
            constructor(e) {
                super(e),
                    (this.componentDidMount = () => {
                        document.addEventListener("dragstart", this.handleDragStart), document.addEventListener("dragover", this.handleDragOver), document.addEventListener("drop", this.handleDrop);
                    }),
                    (this.componentWillUnmount = () => {
                        document.removeEventListener("dragstart", this.handleDragStart), document.removeEventListener("dragover", this.handleDragOver), document.removeEventListener("drop", this.handleDrop);
                    }),
                    (this.handleDragStart = (e) => {
                        if ("simple-translate-move" !== e.target.className) return;
                        this.isDragging = !0;
                        const t = document.querySelector(".simple-translate-panel").getBoundingClientRect();
                        (this.dragOffsets = { x: e.clientX - t.left, y: e.clientY - t.top }), e.dataTransfer.setData("text/plain", "");
                    }),
                    (this.handleDragOver = (e) => {
                        if (!this.isDragging) return;
                        e.preventDefault();
                        const t = document.querySelector(".simple-translate-panel");
                        (t.style.top = e.clientY - this.dragOffsets.y + "px"), (t.style.left = e.clientX - this.dragOffsets.x + "px");
                    }),
                    (this.handleDrop = (e) => {
                        if (!this.isDragging) return;
                        e.preventDefault(), (this.isDragging = !1);
                        const t = document.querySelector(".simple-translate-panel");
                        (t.style.top = e.clientY - this.dragOffsets.y + "px"), (t.style.left = e.clientX - this.dragOffsets.x + "px");
                    }),
                    (this.calcPosition = () => {
                        const e = parseInt(Object(s.a)("width")),
                            t = parseInt(Object(s.a)("height")),
                            n = i.a.findDOMNode(this.refs.wrapper),
                            r = Math.min(n.clientWidth, e),
                            a = Math.min(n.clientHeight, t),
                            o = document.documentElement.clientWidth,
                            l = document.documentElement.clientHeight,
                            u = this.props.position,
                            c = parseInt(Object(s.a)("panelOffset"));
                        let f = { x: 0, y: 0 };
                        switch (Object(s.a)("panelDirection")) {
                            case "top":
                                (f.x = u.x - r / 2), (f.y = u.y - a - c);
                                break;
                            case "bottom":
                                (f.x = u.x - r / 2), (f.y = u.y + c);
                                break;
                            case "right":
                                (f.x = u.x + c), (f.y = u.y - a / 2);
                                break;
                            case "left":
                                (f.x = u.x - r - c), (f.y = u.y - a / 2);
                                break;
                            case "topRight":
                                (f.x = u.x + c), (f.y = u.y - a - c);
                                break;
                            case "topLeft":
                                (f.x = u.x - r - c), (f.y = u.y - a - c);
                                break;
                            case "bottomRight":
                                (f.x = u.x + c), (f.y = u.y + c);
                                break;
                            case "bottomLeft":
                                (f.x = u.x - r - c), (f.y = u.y + c);
                        }
                        return f.x + r > o - c && (f.x = o - r - c), f.y + a > l - c && (f.y = l - a - c), f.x < 0 + c && (f.x = c), f.y < 0 + c && (f.y = c), f;
                    }),
                    (this.calcSize = () => {
                        const e = parseInt(Object(s.a)("width")),
                            t = i.a.findDOMNode(this.refs.wrapper);
                        return { panelWidth: t.clientWidth < e ? t.clientWidth + 1 : e, panelHeight: t.clientHeight };
                    }),
                    (this.componentWillReceiveProps = (e) => {
                        (this.props.resultText !== e.resultText || this.props.candidateText !== e.candidateText || this.props.position !== e.position) && e.shouldShow && this.setState({ shouldResize: !0 });
                    }),
                    (this.componentDidUpdate = () => {
                        if (!this.state.shouldResize || !this.props.shouldShow) return;
                        const e = this.calcPosition(),
                            { panelWidth: t, panelHeight: n } = this.calcSize(),
                            r = n == parseInt(Object(s.a)("height"));
                        this.setState({ shouldResize: !1, panelPosition: e, panelWidth: t, panelHeight: n, isOverflow: r });
                    }),
                    (this.render = () => {
                        const { shouldShow: e, resultText: t, candidateText: n, statusText: r } = this.props,
                            o = "OK" !== r,
                            { width: i, height: l } = this.state.shouldResize ? { width: parseInt(Object(s.a)("width")), height: parseInt(Object(s.a)("height")) } : { width: this.state.panelWidth, height: this.state.panelHeight },
                            u = { width: i, height: l, top: this.state.panelPosition.y, left: this.state.panelPosition.x, fontSize: parseInt(Object(s.a)("fontSize")), backgroundColor: Object(s.a)("bgColor") },
                            c = { overflow: this.state.isOverflow ? "auto" : "hidden" },
                            f = { color: Object(s.a)("resultFontColor") },
                            d = { color: Object(s.a)("candidateFontColor") };
                        return a.a.createElement(
                            "div",
                            { className: "simple-translate-panel " + (e ? "isShow" : ""), ref: "panel", style: u },
                            a.a.createElement(
                                "div",
                                { className: "simple-translate-result-wrapper", ref: "wrapper", style: c },
                                a.a.createElement("div", { className: "simple-translate-move", draggable: "true", ref: "move" }),
                                a.a.createElement(
                                    "div",
                                    { className: "simple-translate-result-contents" },
                                    a.a.createElement("p", { className: "simple-translate-result", style: f }, m(t)),
                                    a.a.createElement("p", { className: "simple-translate-candidate", style: d }, m(n)),
                                    o && a.a.createElement("p", { className: "simple-translate-error", style: d }, Object(p.a)(r))
                                )
                            )
                        );
                    }),
                    (this.state = { panelPosition: { x: 0, y: 0 }, panelWidth: 0, panelHeight: 0, shouldResize: !0, isOverflow: !1 }),
                    (this.dragOffsets = { x: 0, y: 0 }),
                    (this.isDragging = !1);
            }
        }
        n(79);
        const h = async (e, t = Object(s.a)("targetLang")) => await Object(f.a)(e, "auto", t);
        class v extends r.Component {
            constructor(e) {
                super(e),
                    (this.componentDidMount = () => {
                        this.props.shouldTranslate ? this.showPanel() : this.handleTextSelect(this.props.clickedPosition);
                    }),
                    (this.handleTextSelect = async (e) => {
                        const t = Object(s.a)("whenSelectText");
                        if ("dontShowButton" === t) return this.props.removeContainer();
                        if (Object(s.a)("ifCheckLang")) {
                            if (
                                await (async (e) => {
                                    const t = Object(s.a)("targetLang"),
                                        n = await u.a.i18n.detectLanguage(e);
                                    if (n.isReliable && n.languages[0].language === t) return !0;
                                    const r = e.substring(0, 100),
                                        a = await h(r);
                                    return "OK" === a.statusText && (0 === a.percentage || t === a.sourceLanguage);
                                })(this.selectedText)
                            )
                                return this.props.removeContainer();
                        }
                        "showButton" === t ? this.showButton(e) : "showPanel" === t && this.showPanel(e);
                    }),
                    (this.showButton = (e) => {
                        this.setState({ shouldShowButton: !0, buttonPosition: e });
                    }),
                    (this.hideButton = () => {
                        this.setState({ shouldShowButton: !1 });
                    }),
                    (this.handleButtonClick = (e) => {
                        const t = { x: e.clientX, y: e.clientY };
                        this.showPanel(t), this.hideButton();
                    }),
                    (this.showPanel = async (e = null) => {
                        const t = "clickedPoint" === Object(s.a)("panelReferencePoint") && null !== e ? e : this.selectedPosition;
                        let n = await h(this.selectedText);
                        if (Object(s.a)("ifChangeSecondLangOnPage")) {
                            const e = Object(s.a)("targetLang"),
                                t = Object(s.a)("secondTargetLang");
                            n.sourceLanguage === e && n.percentage > 0 && e !== t && (n = await h(this.selectedText, t));
                        }
                        this.setState({ shouldShowPanel: !0, panelPosition: t, resultText: n.resultText, candidateText: Object(s.a)("ifShowCandidate") ? n.candidateText : "", statusText: n.statusText });
                    }),
                    (this.hidePanel = () => {
                        this.setState({ shouldShowPanel: !1 });
                    }),
                    (this.render = () =>
                        a.a.createElement(
                            "div",
                            null,
                            a.a.createElement(d, { shouldShow: this.state.shouldShowButton, position: this.state.buttonPosition, handleButtonClick: this.handleButtonClick }),
                            a.a.createElement(g, {
                                shouldShow: this.state.shouldShowPanel,
                                position: this.state.panelPosition,
                                resultText: this.state.resultText,
                                candidateText: this.state.candidateText,
                                statusText: this.state.statusText,
                                hidePanel: this.hidePanel,
                            })
                        )),
                    (this.state = { shouldShowButton: !1, buttonPosition: { x: 0, y: 0 }, shouldShowPanel: !1, panelPosition: { x: 0, y: 0 }, resultText: "", candidateText: "", statusText: "OK" }),
                    (this.selectedText = e.selectedText),
                    (this.selectedPosition = e.selectedPosition);
            }
        }
        (async () => {
            await Object(s.c)(), document.addEventListener("mouseup", b), document.addEventListener("keydown", C), u.a.storage.onChanged.addListener(s.b), u.a.runtime.onMessage.addListener(E), Object(c.a)(), Object(c.b)(), S();
        })();
        let y = "";
        const b = async (e) => {
                await x(10);
                const t = 0 === e.button,
                    n = "INPUT" === e.target.tagName && "password" === e.target.type,
                    r = document.querySelector("#simple-translate") && document.querySelector("#simple-translate").contains(e.target);
                if (!t) return;
                if (n) return;
                if (r) return;
                _();
                const a = w();
                if (((y = a), 0 === a.length)) return;
                if (Object(s.a)("isDisabledInTextFields") && A()) return;
                const o = { x: e.clientX, y: e.clientY },
                    i = k();
                P(a, i, o);
            },
            x = (e) => new Promise((t) => setTimeout(() => t(), e)),
            w = () => {
                const e = document.activeElement;
                return "INPUT" === e.tagName || "TEXTAREA" === e.tagName ? e.value.substring(e.selectionStart, e.selectionEnd) : window.getSelection().toString();
            },
            k = () => {
                const e = document.activeElement,
                    t = "INPUT" === e.tagName || "TEXTAREA" === e.tagName ? e.getBoundingClientRect() : window.getSelection().getRangeAt(0).getBoundingClientRect();
                let n;
                switch (Object(s.a)("panelReferencePoint")) {
                    case "topSelectedText":
                        n = { x: t.left + t.width / 2, y: t.top };
                        break;
                    case "bottomSelectedText":
                    default:
                        n = { x: t.left + t.width / 2, y: t.bottom };
                }
                return n;
            },
            A = () => {
                const e = document.activeElement;
                return "INPUT" === e.tagName || "TEXTAREA" === e.tagName || "true" === e.contentEditable;
            },
            C = (e) => {
                "Escape" === e.key && _();
            };
        let T = !0;
        const E = async (e) => {
                const t = new Promise((e) => {
                    setTimeout(() => e(""), 100);
                });
                switch (e.message) {
                    case "getTabUrl":
                        return T && window == window.parent ? location.href : t;
                    case "getSelectedText":
                        return T ? (0 === y.length ? t : y) : t;
                    case "translateSelectedText": {
                        if (!T) return t;
                        const e = w();
                        if (0 === e.length) return;
                        const n = k();
                        _(), P(e, n, null, !0);
                        break;
                    }
                    case "getEnabled":
                        return T;
                    case "enableExtension":
                        T = !0;
                        break;
                    case "disableExtension":
                        _(), (T = !1);
                        break;
                    default:
                        return t;
                }
            },
            S = () => {
                const e = Object(s.a)("disableUrlList").split("\n");
                let t;
                try {
                    t = top.location.href;
                } catch (e) {
                    t = document.referrer;
                }
                e.some((e) => {
                    const n = e.trim().replace(/[-[\]{}()*+?.,\\^$|#\s]/g, (e) => ("*" === e ? ".*" : "\\" + e));
                    return "" !== n && RegExp("^" + n + "$").test(t);
                }) && (T = !1);
            },
            _ = async () => {
                const e = document.getElementById("simple-translate");
                e && (i.a.unmountComponentAtNode(e), e.parentNode.removeChild(e));
            },
            P = (e, t, n = null, r = !1) => {
                document.getElementById("simple-translate") ||
                    (T &&
                        (document.body.insertAdjacentHTML("beforeend", "<div id='simple-translate'></div>"),
                        i.a.render(a.a.createElement(v, { removeContainer: _, selectedText: e, selectedPosition: t, clickedPosition: n, shouldTranslate: r }), document.getElementById("simple-translate"))));
            };
    },
]);
