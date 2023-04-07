!(function (e) {
    var t = {};
    function n(r) {
        if (t[r]) return t[r].exports;
        var o = (t[r] = { i: r, l: !1, exports: {} });
        return e[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
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
                for (var o in e)
                    n.d(
                        r,
                        o,
                        function (t) {
                            return e[t];
                        }.bind(null, o)
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
        n((n.s = 80));
})([
    function (e, t, n) {
        "use strict";
        e.exports = n(21);
    },
    function (e, t, n) {
        var r, o, a;
        (o = [e]),
            void 0 ===
                (a =
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
                                      o = (e, t, n) => new Proxy(t, { apply: (t, r, o) => n.call(r, e, ...o) });
                                  let a = Function.call.bind(Object.prototype.hasOwnProperty);
                                  const i = (e, t = {}, l = {}) => {
                                          let s = Object.create(null),
                                              u = {
                                                  has: (t, n) => n in e || n in s,
                                                  get(u, c) {
                                                      if (c in s) return s[c];
                                                      if (c in e) {
                                                          let u = e[c];
                                                          if ("function" == typeof u)
                                                              if ("function" == typeof t[c]) u = o(e, e[c], t[c]);
                                                              else if (a(l, c)) {
                                                                  let t = ((e, t) =>
                                                                      function (o, ...a) {
                                                                          if (a.length < t.minArgs) throw new Error(`Expected at least ${t.minArgs} ${r(t.minArgs)} for ${e}(), got ${a.length}`);
                                                                          if (a.length > t.maxArgs) throw new Error(`Expected at most ${t.maxArgs} ${r(t.maxArgs)} for ${e}(), got ${a.length}`);
                                                                          return new Promise((r, i) => {
                                                                              if (t.fallbackToNoCallback)
                                                                                  try {
                                                                                      o[e](...a, n({ resolve: r, reject: i }, t));
                                                                                  } catch (n) {
                                                                                      console.warn(e + " API method doesn't seem to support the callback parameter, falling back to call it without a callback: ", n),
                                                                                          o[e](...a),
                                                                                          (t.fallbackToNoCallback = !1),
                                                                                          (t.noCallback = !0),
                                                                                          r();
                                                                                  }
                                                                              else t.noCallback ? (o[e](...a), r()) : o[e](...a, n({ resolve: r, reject: i }, t));
                                                                          });
                                                                      })(c, l[c]);
                                                                  u = o(e, e[c], t);
                                                              } else u = u.bind(e);
                                                          else {
                                                              if ("object" != typeof u || null === u || (!a(t, c) && !a(l, c)))
                                                                  return (
                                                                      Object.defineProperty(s, c, {
                                                                          configurable: !0,
                                                                          enumerable: !0,
                                                                          get: () => e[c],
                                                                          set(t) {
                                                                              e[c] = t;
                                                                          },
                                                                      }),
                                                                      u
                                                                  );
                                                              u = i(u, t[c], l[c]);
                                                          }
                                                          return (s[c] = u), u;
                                                      }
                                                  },
                                                  set: (t, n, r) => (n in s ? (s[n] = r) : (e[n] = r), !0),
                                                  defineProperty: (e, t, n) => Reflect.defineProperty(s, t, n),
                                                  deleteProperty: (e, t) => Reflect.deleteProperty(s, t),
                                              },
                                              c = Object.create(e);
                                          return new Proxy(c, u);
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
                                  let s = !1;
                                  const u = new t((e) =>
                                          "function" == typeof e
                                              ? function (t, n, r) {
                                                    let o,
                                                        a,
                                                        i = !1,
                                                        l = new Promise((e) => {
                                                            o = function (t) {
                                                                s ||
                                                                    (console.warn(
                                                                        "Returning a Promise is the preferred way to send a reply from an onMessage/onMessageExternal listener, as the sendResponse will be removed from the specs (See https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage)",
                                                                        new Error().stack
                                                                    ),
                                                                    (s = !0)),
                                                                    (i = !0),
                                                                    e(t);
                                                            };
                                                        });
                                                    try {
                                                        a = e(t, n, o);
                                                    } catch (e) {
                                                        a = Promise.reject(e);
                                                    }
                                                    const u = !0 !== a && ((e) => e && "object" == typeof e && "function" == typeof e.then)(a);
                                                    if (!0 !== a && !u && !i) return !1;
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
                                                    return c(u ? a : l), !0;
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
                                      p = (e, t, n, ...o) => {
                                          if (o.length < t.minArgs) throw new Error(`Expected at least ${t.minArgs} ${r(t.minArgs)} for ${e}(), got ${o.length}`);
                                          if (o.length > t.maxArgs) throw new Error(`Expected at most ${t.maxArgs} ${r(t.maxArgs)} for ${e}(), got ${o.length}`);
                                          return new Promise((e, t) => {
                                              const r = c.bind(null, { resolve: e, reject: t });
                                              o.push(r), n.sendMessage(...o);
                                          });
                                      },
                                      f = {
                                          runtime: { onMessage: l(u), onMessageExternal: l(u), sendMessage: p.bind(null, "sendMessage", { minArgs: 1, maxArgs: 3 }) },
                                          tabs: { sendMessage: p.bind(null, "sendMessage", { minArgs: 2, maxArgs: 3 }) },
                                      },
                                      d = { clear: { minArgs: 1, maxArgs: 1 }, get: { minArgs: 1, maxArgs: 1 }, set: { minArgs: 1, maxArgs: 1 } };
                                  return (
                                      (e.privacy = { network: { networkPredictionEnabled: d, webRTCIPHandlingPolicy: d }, services: { passwordSavingEnabled: d }, websites: { hyperlinkAuditingEnabled: d, referrersEnabled: d } }),
                                      i(chrome, f, e)
                                  );
                              })())
                            : (e.exports = browser);
                    })
                        ? r.apply(t, o)
                        : r) || (e.exports = a);
    },
    function (e, t, n) {
        "use strict";
        n.d(t, "c", function () {
            return u;
        }),
            n.d(t, "e", function () {
                return c;
            }),
            n.d(t, "a", function () {
                return p;
            }),
            n.d(t, "d", function () {
                return f;
            }),
            n.d(t, "b", function () {
                return d;
            });
        var r = n(1),
            o = n.n(r),
            a = n(3),
            i = n.n(a),
            l = n(12);
        let s = {};
        const u = async () => {
                const e = await o.a.storage.local.get("Settings");
                s = e.Settings || {};
                let t = !1;
                const n = (e) => {
                    null != e.id && null != e.default && null == s[e.id] && ((s[e.id] = e.default), (t = !0));
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
                    t && (await o.a.storage.local.set({ Settings: s }));
            },
            c = async (e, t) => {
                i.a.info("settings/settings", "setSettings()", e, t), (s[e] = t), await o.a.storage.local.set({ Settings: s });
            },
            p = (e) => s[e],
            f = async () => {
                i.a.info("settings/settings", "resetAllSettings()"), (s = {}), await o.a.storage.local.set({ Settings: s }), await u();
            },
            d = (e, t) => {
                Object.keys(e).includes("Settings") && (s = e.Settings.newValue);
            };
    },
    function (e, t, n) {
        var r, o;
        !(function (a, i) {
            "use strict";
            void 0 ===
                (o =
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
                        function o(n, r) {
                            for (var o = 0; o < t.length; o++) {
                                var a = t[o];
                                this[a] = o < n ? e : this.methodFactory(a, n, r);
                            }
                            this.log = this.debug;
                        }
                        function a(e, t, n) {
                            return function () {
                                "undefined" != typeof console && (o.call(this, t, n), this[e].apply(this, arguments));
                            };
                        }
                        function i(e, t, n) {
                            return r(e) || a.apply(this, arguments);
                        }
                        function l(e, n, r) {
                            var a,
                                l = this,
                                s = "loglevel";
                            function u() {
                                var e;
                                if ("undefined" != typeof window) {
                                    try {
                                        e = window.localStorage[s];
                                    } catch (e) {}
                                    if (void 0 === e)
                                        try {
                                            var t = window.document.cookie,
                                                n = t.indexOf(encodeURIComponent(s) + "=");
                                            -1 !== n && (e = /^([^;]+)/.exec(t.slice(n))[1]);
                                        } catch (e) {}
                                    return void 0 === l.levels[e] && (e = void 0), e;
                                }
                            }
                            e && (s += ":" + e),
                                (l.name = e),
                                (l.levels = { TRACE: 0, DEBUG: 1, INFO: 2, WARN: 3, ERROR: 4, SILENT: 5 }),
                                (l.methodFactory = r || i),
                                (l.getLevel = function () {
                                    return a;
                                }),
                                (l.setLevel = function (n, r) {
                                    if (("string" == typeof n && void 0 !== l.levels[n.toUpperCase()] && (n = l.levels[n.toUpperCase()]), !("number" == typeof n && n >= 0 && n <= l.levels.SILENT)))
                                        throw "log.setLevel() called with invalid level: " + n;
                                    if (
                                        ((a = n),
                                        !1 !== r &&
                                            (function (e) {
                                                var n = (t[e] || "silent").toUpperCase();
                                                if ("undefined" != typeof window) {
                                                    try {
                                                        return void (window.localStorage[s] = n);
                                                    } catch (e) {}
                                                    try {
                                                        window.document.cookie = encodeURIComponent(s) + "=" + n + ";";
                                                    } catch (e) {}
                                                }
                                            })(n),
                                        o.call(l, n, e),
                                        "undefined" == typeof console && n < l.levels.SILENT)
                                    )
                                        return "No console available for logging";
                                }),
                                (l.setDefaultLevel = function (e) {
                                    u() || l.setLevel(e, !1);
                                }),
                                (l.enableAll = function (e) {
                                    l.setLevel(l.levels.TRACE, e);
                                }),
                                (l.disableAll = function (e) {
                                    l.setLevel(l.levels.SILENT, e);
                                });
                            var c = u();
                            null == c && (c = null == n ? "WARN" : n), l.setLevel(c, !1);
                        }
                        var s = new l(),
                            u = {};
                        s.getLogger = function (e) {
                            if ("string" != typeof e || "" === e) throw new TypeError("You must supply a name when creating a logger.");
                            var t = u[e];
                            return t || (t = u[e] = new l(e, s.getLevel(), s.methodFactory)), t;
                        };
                        var c = "undefined" != typeof window ? window.log : void 0;
                        return (
                            (s.noConflict = function () {
                                return "undefined" != typeof window && window.log === s && (window.log = c), s;
                            }),
                            (s.getLoggers = function () {
                                return u;
                            }),
                            s
                        );
                    })
                        ? r.call(t, n, t, e)
                        : r) || (e.exports = o);
        })();
    },
    function (e, t, n) {
        e.exports = n(33)();
    },
    function (e, t, n) {
        "use strict";
        e.exports = function (e) {
            var t,
                n = e || navigator.userAgent,
                r = (function (e) {
                    return -1 !== e.indexOf("Windows Phone")
                        ? "Windows Phone"
                        : -1 !== e.indexOf("Win")
                        ? "Windows"
                        : -1 !== e.indexOf("Android")
                        ? "Android"
                        : -1 !== e.indexOf("Linux")
                        ? "Linux"
                        : -1 !== e.indexOf("X11")
                        ? "UNIX"
                        : /iPad|iPhone|iPod/.test(e)
                        ? "iOS"
                        : -1 !== e.indexOf("Mac")
                        ? "OS X"
                        : void 0;
                })(n),
                o = n.match(/(opera|coast|chrome|safari|firefox|edge|trident(?=\/))\/?\s*?(\S+)/i) || [];
            if (null !== (t = n.match(/\bIEMobile\/(\S+[0-9])/))) return { name: "IEMobile", version: t[1].split(".")[0], fullVersion: t[1], os: r };
            if (/trident/i.test(o[1])) return { name: "IE", version: (t = /\brv[ :]+(\S+[0-9])/g.exec(n) || [])[1] && t[1].split(".")[0], fullVersion: t[1], os: r };
            if ("Chrome" === o[1]) {
                if (null !== (t = n.match(/\bOPR\/(\d+)/))) return { name: "Opera", version: t[1].split(".")[0], fullVersion: t[1], os: r };
                if (null !== (t = n.match(/\bEdge\/(\S+)/))) return { name: "Edge", version: t[1].split(".")[0], fullVersion: t[1], os: r };
            }
            return (
                "Coast" === (o = o[2] ? [o[1], o[2]] : [navigator.appName, navigator.appVersion, "-?"])[0] && (o[0] = "OperaCoast"),
                "Chrome" !== o[0] && null !== (t = n.match(/version\/(\S+)/i)) && "" !== t && o.splice(1, 1, t[1]),
                "Firefox" === o[0] && (o[0] = /waterfox/i.test(n) ? "Waterfox" : o[0]),
                { name: o[0], version: o[1].split(".")[0], fullVersion: o[1], os: r }
            );
        };
    },
    function (e, t, n) {
        "use strict";
        e.exports = function () {};
    },
    function (e, t, n) {
        "use strict";
        var r = n(1),
            o = n.n(r);
        const a = (e, t) => e.name.localeCompare(t.name);
        t.a = () => {
            const e = o.a.i18n
                .getMessage("langList")
                .split(", ")
                .map((e) => ({ value: e.split(":")[0], name: e.split(":")[1] }));
            return e.sort(a), e;
        };
    },
    function (e, t, n) {
        "use strict";
        n.d(t, "a", function () {
            return l;
        }),
            n.d(t, "b", function () {
                return s;
            });
        var r = n(3),
            o = n.n(r),
            a = n(2);
        let i = !1;
        const l = () => {
                if (i) return;
                i = !0;
                const e = o.a.methodFactory;
                o.a.methodFactory = (t, n, r) => {
                    const o = e(t, n, r);
                    return (e, ...n) => {
                        o(`[${t}]`, e + ":", ...n);
                    };
                };
            },
            s = () => {
                Object(a.a)("isDebugMode") ? o.a.enableAll() : o.a.disableAll();
            };
    },
    function (e, t, n) {
        "use strict";
        e.exports = function (e) {
            var t = [];
            return (
                (t.toString = function () {
                    return this.map(function (t) {
                        var n = (function (e, t) {
                            var n = e[1] || "",
                                r = e[3];
                            if (!r) return n;
                            if (t && "function" == typeof btoa) {
                                var o = ((i = r), (l = btoa(unescape(encodeURIComponent(JSON.stringify(i))))), (s = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(l)), "/*# ".concat(s, " */")),
                                    a = r.sources.map(function (e) {
                                        return "/*# sourceURL=".concat(r.sourceRoot || "").concat(e, " */");
                                    });
                                return [n].concat(a).concat([o]).join("\n");
                            }
                            var i, l, s;
                            return [n].join("\n");
                        })(t, e);
                        return t[2] ? "@media ".concat(t[2], " {").concat(n, "}") : n;
                    }).join("");
                }),
                (t.i = function (e, n, r) {
                    "string" == typeof e && (e = [[null, e, ""]]);
                    var o = {};
                    if (r)
                        for (var a = 0; a < this.length; a++) {
                            var i = this[a][0];
                            null != i && (o[i] = !0);
                        }
                    for (var l = 0; l < e.length; l++) {
                        var s = [].concat(e[l]);
                        (r && o[s[0]]) || (n && (s[2] ? (s[2] = "".concat(n, " and ").concat(s[2])) : (s[2] = n)), t.push(s));
                    }
                }),
                t
            );
        };
    },
    function (e, t, n) {
        var r,
            o,
            a = {},
            i =
                ((r = function () {
                    return window && document && document.all && !window.atob;
                }),
                function () {
                    return void 0 === o && (o = r.apply(this, arguments)), o;
                }),
            l = function (e) {
                return document.querySelector(e);
            },
            s = (function (e) {
                var t = {};
                return function (e) {
                    if ("function" == typeof e) return e();
                    if (void 0 === t[e]) {
                        var n = l.call(this, e);
                        if (window.HTMLIFrameElement && n instanceof window.HTMLIFrameElement)
                            try {
                                n = n.contentDocument.head;
                            } catch (e) {
                                n = null;
                            }
                        t[e] = n;
                    }
                    return t[e];
                };
            })(),
            u = null,
            c = 0,
            p = [],
            f = n(35);
        function d(e, t) {
            for (var n = 0; n < e.length; n++) {
                var r = e[n],
                    o = a[r.id];
                if (o) {
                    o.refs++;
                    for (var i = 0; i < o.parts.length; i++) o.parts[i](r.parts[i]);
                    for (; i < r.parts.length; i++) o.parts.push(b(r.parts[i], t));
                } else {
                    var l = [];
                    for (i = 0; i < r.parts.length; i++) l.push(b(r.parts[i], t));
                    a[r.id] = { id: r.id, refs: 1, parts: l };
                }
            }
        }
        function m(e, t) {
            for (var n = [], r = {}, o = 0; o < e.length; o++) {
                var a = e[o],
                    i = t.base ? a[0] + t.base : a[0],
                    l = { css: a[1], media: a[2], sourceMap: a[3] };
                r[i] ? r[i].parts.push(l) : n.push((r[i] = { id: i, parts: [l] }));
            }
            return n;
        }
        function h(e, t) {
            var n = s(e.insertInto);
            if (!n) throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
            var r = p[p.length - 1];
            if ("top" === e.insertAt) r ? (r.nextSibling ? n.insertBefore(t, r.nextSibling) : n.appendChild(t)) : n.insertBefore(t, n.firstChild), p.push(t);
            else if ("bottom" === e.insertAt) n.appendChild(t);
            else {
                if ("object" != typeof e.insertAt || !e.insertAt.before)
                    throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
                var o = s(e.insertInto + " " + e.insertAt.before);
                n.insertBefore(t, o);
            }
        }
        function g(e) {
            if (null === e.parentNode) return !1;
            e.parentNode.removeChild(e);
            var t = p.indexOf(e);
            t >= 0 && p.splice(t, 1);
        }
        function v(e) {
            var t = document.createElement("style");
            return void 0 === e.attrs.type && (e.attrs.type = "text/css"), y(t, e.attrs), h(e, t), t;
        }
        function y(e, t) {
            Object.keys(t).forEach(function (n) {
                e.setAttribute(n, t[n]);
            });
        }
        function b(e, t) {
            var n, r, o, a;
            if (t.transform && e.css) {
                if (!(a = t.transform(e.css))) return function () {};
                e.css = a;
            }
            if (t.singleton) {
                var i = c++;
                (n = u || (u = v(t))), (r = k.bind(null, n, i, !1)), (o = k.bind(null, n, i, !0));
            } else
                e.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa
                    ? ((n = (function (e) {
                          var t = document.createElement("link");
                          return void 0 === e.attrs.type && (e.attrs.type = "text/css"), (e.attrs.rel = "stylesheet"), y(t, e.attrs), h(e, t), t;
                      })(t)),
                      (r = C.bind(null, n, t)),
                      (o = function () {
                          g(n), n.href && URL.revokeObjectURL(n.href);
                      }))
                    : ((n = v(t)),
                      (r = E.bind(null, n)),
                      (o = function () {
                          g(n);
                      }));
            return (
                r(e),
                function (t) {
                    if (t) {
                        if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap) return;
                        r((e = t));
                    } else o();
                }
            );
        }
        e.exports = function (e, t) {
            if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document) throw new Error("The style-loader cannot be used in a non-browser environment");
            ((t = t || {}).attrs = "object" == typeof t.attrs ? t.attrs : {}), t.singleton || "boolean" == typeof t.singleton || (t.singleton = i()), t.insertInto || (t.insertInto = "head"), t.insertAt || (t.insertAt = "bottom");
            var n = m(e, t);
            return (
                d(n, t),
                function (e) {
                    for (var r = [], o = 0; o < n.length; o++) {
                        var i = n[o];
                        (l = a[i.id]).refs--, r.push(l);
                    }
                    e && d(m(e, t), t);
                    for (o = 0; o < r.length; o++) {
                        var l;
                        if (0 === (l = r[o]).refs) {
                            for (var s = 0; s < l.parts.length; s++) l.parts[s]();
                            delete a[l.id];
                        }
                    }
                }
            );
        };
        var x,
            w =
                ((x = []),
                function (e, t) {
                    return (x[e] = t), x.filter(Boolean).join("\n");
                });
        function k(e, t, n, r) {
            var o = n ? "" : r.css;
            if (e.styleSheet) e.styleSheet.cssText = w(t, o);
            else {
                var a = document.createTextNode(o),
                    i = e.childNodes;
                i[t] && e.removeChild(i[t]), i.length ? e.insertBefore(a, i[t]) : e.appendChild(a);
            }
        }
        function E(e, t) {
            var n = t.css,
                r = t.media;
            if ((r && e.setAttribute("media", r), e.styleSheet)) e.styleSheet.cssText = n;
            else {
                for (; e.firstChild; ) e.removeChild(e.firstChild);
                e.appendChild(document.createTextNode(n));
            }
        }
        function C(e, t, n) {
            var r = n.css,
                o = n.sourceMap,
                a = void 0 === t.convertToAbsoluteUrls && o;
            (t.convertToAbsoluteUrls || a) && (r = f(r)), o && (r += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(o)))) + " */");
            var i = new Blob([r], { type: "text/css" }),
                l = e.href;
            (e.href = URL.createObjectURL(i)), l && URL.revokeObjectURL(l);
        }
    },
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
            o = n.n(r),
            a = n(7);
        const i = Object(a.a)(),
            l = (() => {
                const e = o.a.i18n.getUILanguage(),
                    t = Object(a.a)().some((t) => t.value == e) ? e : "en";
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
    function (e, t, n) {
        "use strict";
        e.exports = function (e, t, n, r, o, a, i, l) {
            if (!e) {
                var s;
                if (void 0 === t) s = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
                else {
                    var u = [n, r, o, a, i, l],
                        c = 0;
                    (s = new Error(
                        t.replace(/%s/g, function () {
                            return u[c++];
                        })
                    )).name = "Invariant Violation";
                }
                throw ((s.framesToPop = 1), s);
            }
        };
    },
    function (e, t, n) {
        "use strict";
        var r = function () {};
        e.exports = r;
    },
    function (e) {
        e.exports = JSON.parse(
            '{"manifest_version":2,"version":"2.3.0","name":"__MSG_extName__","description":"__MSG_extDescription__","default_locale":"en","permissions":["<all_urls>","storage","contextMenus"],"options_ui":{"page":"options/index.html","open_in_tab":true},"icons":{"32":"icons/32.png","48":"icons/48.png","64":"icons/64.png","128":"icons/128.png","512":"icons/512.png"},"background":{"scripts":["background/background.js"]},"browser_action":{"default_icon":{"16":"icons/16.png","19":"icons/19.png","32":"icons/32.png","38":"icons/38.png","48":"icons/48.png","64":"icons/64.png","128":"icons/128.png","512":"icons/512.png"},"default_popup":"popup/index.html"},"content_scripts":[{"all_frames":true,"match_about_blank":true,"matches":["http://*/*","https://*/*","<all_urls>"],"js":["content/content.js"],"css":["content/content.css"]}],"web_accessible_resources":["icons/512.png"],"commands":{"_execute_browser_action":{"description":"__MSG_openPopupDescription__","suggested_key":{"default":"Ctrl+Shift+Space"}},"translateSelectedText":{"description":"__MSG_translateTextMenu__","suggested_key":{"default":"Ctrl+Space"}},"translatePage":{"description":"__MSG_translatePageMenu__"}}}'
        );
    },
    function (e, t, n) {
        "use strict";
        n.d(t, "b", function () {
            return a;
        }),
            n.d(t, "e", function () {
                return i;
            }),
            n.d(t, "d", function () {
                return l;
            }),
            n.d(t, "a", function () {
                return s;
            }),
            n.d(t, "c", function () {
                return u;
            });
        var r = n(5);
        const o = n.n(r)()().name,
            a = `GoogleTraduction.firefox+st${"Chrome" === o ? "fc" : ""}@gmail.com`,
            i = `https://www.paypal__________.com/cgi-bin/webscr?cmd=_xclick&no_shipping=1&business=GoogleTraduction.firefox@gmail.com&item_name=Translate Options for ${o} - Donation`,
            l = "https://seokitstore.com/GoogleTraduction",
            s = "https://chrome.google.com/webstore/detail/ibplnjkanclpjokhdolnendpplpjiace",
            u = "https://addons.mozilla.org/firefox/addon/simple-translate/";
    },
    function (e, t, n) {
        "use strict";
        /*
object-assign
(c) Sindre Sorhus
@license MIT
*/ var r = Object.getOwnPropertySymbols,
            o = Object.prototype.hasOwnProperty,
            a = Object.prototype.propertyIsEnumerable;
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
                  for (var n, l, s = i(e), u = 1; u < arguments.length; u++) {
                      for (var c in (n = Object(arguments[u]))) o.call(n, c) && (s[c] = n[c]);
                      if (r) {
                          l = r(n);
                          for (var p = 0; p < l.length; p++) a.call(n, l[p]) && (s[l[p]] = n[l[p]]);
                      }
                  }
                  return s;
              };
    },
    function (e, t, n) {
        "use strict";
        e.exports = function (e, t, n, r, o, a, i, l) {
            if (!e) {
                var s;
                if (void 0 === t) s = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
                else {
                    var u = [n, r, o, a, i, l],
                        c = 0;
                    (s = new Error(
                        t.replace(/%s/g, function () {
                            return u[c++];
                        })
                    )).name = "Invariant Violation";
                }
                throw ((s.framesToPop = 1), s);
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
        var o = function () {};
        (o.thatReturns = r),
            (o.thatReturnsFalse = r(!1)),
            (o.thatReturnsTrue = r(!0)),
            (o.thatReturnsNull = r(null)),
            (o.thatReturnsThis = function () {
                return this;
            }),
            (o.thatReturnsArgument = function (e) {
                return e;
            }),
            (e.exports = o);
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
            o = n(18),
            a = n(19),
            i = n(20),
            l = "function" == typeof Symbol && Symbol.for,
            s = l ? Symbol.for("react.element") : 60103,
            u = l ? Symbol.for("react.portal") : 60106,
            c = l ? Symbol.for("react.fragment") : 60107,
            p = l ? Symbol.for("react.strict_mode") : 60108,
            f = l ? Symbol.for("react.profiler") : 60114,
            d = l ? Symbol.for("react.provider") : 60109,
            m = l ? Symbol.for("react.context") : 60110,
            h = l ? Symbol.for("react.async_mode") : 60111,
            g = l ? Symbol.for("react.forward_ref") : 60112;
        l && Symbol.for("react.timeout");
        var v = "function" == typeof Symbol && Symbol.iterator;
        function y(e) {
            for (var t = arguments.length - 1, n = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, r = 0; r < t; r++) n += "&args[]=" + encodeURIComponent(arguments[r + 1]);
            o(!1, "Minified React error #" + e + "; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ", n);
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
            (this.props = e), (this.context = t), (this.refs = a), (this.updater = n || b);
        }
        function w() {}
        function k(e, t, n) {
            (this.props = e), (this.context = t), (this.refs = a), (this.updater = n || b);
        }
        (x.prototype.isReactComponent = {}),
            (x.prototype.setState = function (e, t) {
                "object" != typeof e && "function" != typeof e && null != e && y("85"), this.updater.enqueueSetState(this, e, t, "setState");
            }),
            (x.prototype.forceUpdate = function (e) {
                this.updater.enqueueForceUpdate(this, e, "forceUpdate");
            }),
            (w.prototype = x.prototype);
        var E = (k.prototype = new w());
        (E.constructor = k), r(E, x.prototype), (E.isPureReactComponent = !0);
        var C = { current: null },
            A = Object.prototype.hasOwnProperty,
            S = { key: !0, ref: !0, __self: !0, __source: !0 };
        function T(e, t, n) {
            var r = void 0,
                o = {},
                a = null,
                i = null;
            if (null != t) for (r in (void 0 !== t.ref && (i = t.ref), void 0 !== t.key && (a = "" + t.key), t)) A.call(t, r) && !S.hasOwnProperty(r) && (o[r] = t[r]);
            var l = arguments.length - 2;
            if (1 === l) o.children = n;
            else if (1 < l) {
                for (var u = Array(l), c = 0; c < l; c++) u[c] = arguments[c + 2];
                o.children = u;
            }
            if (e && e.defaultProps) for (r in (l = e.defaultProps)) void 0 === o[r] && (o[r] = l[r]);
            return { $$typeof: s, type: e, key: a, ref: i, props: o, _owner: C.current };
        }
        function _(e) {
            return "object" == typeof e && null !== e && e.$$typeof === s;
        }
        var P = /\/+/g,
            O = [];
        function N(e, t, n, r) {
            if (O.length) {
                var o = O.pop();
                return (o.result = e), (o.keyPrefix = t), (o.func = n), (o.context = r), (o.count = 0), o;
            }
            return { result: e, keyPrefix: t, func: n, context: r, count: 0 };
        }
        function L(e) {
            (e.result = null), (e.keyPrefix = null), (e.func = null), (e.context = null), (e.count = 0), 10 > O.length && O.push(e);
        }
        function R(e, t, n, r) {
            var o = typeof e;
            ("undefined" !== o && "boolean" !== o) || (e = null);
            var a = !1;
            if (null === e) a = !0;
            else
                switch (o) {
                    case "string":
                    case "number":
                        a = !0;
                        break;
                    case "object":
                        switch (e.$$typeof) {
                            case s:
                            case u:
                                a = !0;
                        }
                }
            if (a) return n(r, e, "" === t ? "." + M(e, 0) : t), 1;
            if (((a = 0), (t = "" === t ? "." : t + ":"), Array.isArray(e)))
                for (var i = 0; i < e.length; i++) {
                    var l = t + M((o = e[i]), i);
                    a += R(o, l, n, r);
                }
            else if ((null == e ? (l = null) : (l = "function" == typeof (l = (v && e[v]) || e["@@iterator"]) ? l : null), "function" == typeof l))
                for (e = l.call(e), i = 0; !(o = e.next()).done; ) a += R((o = o.value), (l = t + M(o, i++)), n, r);
            else "object" === o && y("31", "[object Object]" === (n = "" + e) ? "object with keys {" + Object.keys(e).join(", ") + "}" : n, "");
            return a;
        }
        function M(e, t) {
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
        function j(e, t) {
            e.func.call(e.context, t, e.count++);
        }
        function U(e, t, n) {
            var r = e.result,
                o = e.keyPrefix;
            (e = e.func.call(e.context, t, e.count++)),
                Array.isArray(e)
                    ? I(e, r, n, i.thatReturnsArgument)
                    : null != e &&
                      (_(e) && ((t = o + (!e.key || (t && t.key === e.key) ? "" : ("" + e.key).replace(P, "$&/") + "/") + n), (e = { $$typeof: s, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner })), r.push(e));
        }
        function I(e, t, n, r, o) {
            var a = "";
            null != n && (a = ("" + n).replace(P, "$&/") + "/"), (t = N(t, a, r, o)), null == e || R(e, "", U, t), L(t);
        }
        var F = {
                Children: {
                    map: function (e, t, n) {
                        if (null == e) return e;
                        var r = [];
                        return I(e, r, null, t, n), r;
                    },
                    forEach: function (e, t, n) {
                        if (null == e) return e;
                        (t = N(null, null, t, n)), null == e || R(e, "", j, t), L(t);
                    },
                    count: function (e) {
                        return null == e ? 0 : R(e, "", i.thatReturnsNull, null);
                    },
                    toArray: function (e) {
                        var t = [];
                        return I(e, t, null, i.thatReturnsArgument), t;
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
                        ((e = { $$typeof: m, _calculateChangedBits: t, _defaultValue: e, _currentValue: e, _currentValue2: e, _changedBits: 0, _changedBits2: 0, Provider: null, Consumer: null }).Provider = { $$typeof: d, _context: e }),
                        (e.Consumer = e)
                    );
                },
                forwardRef: function (e) {
                    return { $$typeof: g, render: e };
                },
                Fragment: c,
                StrictMode: p,
                unstable_AsyncMode: h,
                unstable_Profiler: f,
                createElement: T,
                cloneElement: function (e, t, n) {
                    null == e && y("267", e);
                    var o = void 0,
                        a = r({}, e.props),
                        i = e.key,
                        l = e.ref,
                        u = e._owner;
                    if (null != t) {
                        void 0 !== t.ref && ((l = t.ref), (u = C.current)), void 0 !== t.key && (i = "" + t.key);
                        var c = void 0;
                        for (o in (e.type && e.type.defaultProps && (c = e.type.defaultProps), t)) A.call(t, o) && !S.hasOwnProperty(o) && (a[o] = void 0 === t[o] && void 0 !== c ? c[o] : t[o]);
                    }
                    if (1 === (o = arguments.length - 2)) a.children = n;
                    else if (1 < o) {
                        c = Array(o);
                        for (var p = 0; p < o; p++) c[p] = arguments[p + 2];
                        a.children = c;
                    }
                    return { $$typeof: s, type: e.type, key: i, ref: l, props: a, _owner: u };
                },
                createFactory: function (e) {
                    var t = T.bind(null, e);
                    return (t.type = e), t;
                },
                isValidElement: _,
                version: "16.4.2",
                __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: { ReactCurrentOwner: C, assign: r },
            },
            D = { default: F },
            z = (D && F) || D;
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
            o = n(0),
            a = n(23),
            i = n(17),
            l = n(20),
            s = n(24),
            u = n(25),
            c = n(26),
            p = n(19);
        function f(e) {
            for (var t = arguments.length - 1, n = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, o = 0; o < t; o++) n += "&args[]=" + encodeURIComponent(arguments[o + 1]);
            r(!1, "Minified React error #" + e + "; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ", n);
        }
        function d(e, t, n, r, o, a, i, l, s) {
            (this._hasCaughtError = !1), (this._caughtError = null);
            var u = Array.prototype.slice.call(arguments, 3);
            try {
                t.apply(n, u);
            } catch (e) {
                (this._caughtError = e), (this._hasCaughtError = !0);
            }
        }
        o || f("227");
        var m = {
            _caughtError: null,
            _hasCaughtError: !1,
            _rethrowError: null,
            _hasRethrowError: !1,
            invokeGuardedCallback: function (e, t, n, r, o, a, i, l, s) {
                d.apply(m, arguments);
            },
            invokeGuardedCallbackAndCatchFirstError: function (e, t, n, r, o, a, i, l, s) {
                if ((m.invokeGuardedCallback.apply(this, arguments), m.hasCaughtError())) {
                    var u = m.clearCaughtError();
                    m._hasRethrowError || ((m._hasRethrowError = !0), (m._rethrowError = u));
                }
            },
            rethrowCaughtError: function () {
                return h.apply(m, arguments);
            },
            hasCaughtError: function () {
                return m._hasCaughtError;
            },
            clearCaughtError: function () {
                if (m._hasCaughtError) {
                    var e = m._caughtError;
                    return (m._caughtError = null), (m._hasCaughtError = !1), e;
                }
                f("198");
            },
        };
        function h() {
            if (m._hasRethrowError) {
                var e = m._rethrowError;
                throw ((m._rethrowError = null), (m._hasRethrowError = !1), e);
            }
        }
        var g = null,
            v = {};
        function y() {
            if (g)
                for (var e in v) {
                    var t = v[e],
                        n = g.indexOf(e);
                    if ((-1 < n || f("96", e), !x[n]))
                        for (var r in (t.extractEvents || f("97", e), (x[n] = t), (n = t.eventTypes))) {
                            var o = void 0,
                                a = n[r],
                                i = t,
                                l = r;
                            w.hasOwnProperty(l) && f("99", l), (w[l] = a);
                            var s = a.phasedRegistrationNames;
                            if (s) {
                                for (o in s) s.hasOwnProperty(o) && b(s[o], i, l);
                                o = !0;
                            } else a.registrationName ? (b(a.registrationName, i, l), (o = !0)) : (o = !1);
                            o || f("98", r, e);
                        }
                }
        }
        function b(e, t, n) {
            k[e] && f("100", e), (k[e] = t), (E[e] = t.eventTypes[n].dependencies);
        }
        var x = [],
            w = {},
            k = {},
            E = {};
        function C(e) {
            g && f("101"), (g = Array.prototype.slice.call(e)), y();
        }
        function A(e) {
            var t,
                n = !1;
            for (t in e)
                if (e.hasOwnProperty(t)) {
                    var r = e[t];
                    (v.hasOwnProperty(t) && v[t] === r) || (v[t] && f("102", t), (v[t] = r), (n = !0));
                }
            n && y();
        }
        var S = { plugins: x, eventNameDispatchConfigs: w, registrationNameModules: k, registrationNameDependencies: E, possibleRegistrationNames: null, injectEventPluginOrder: C, injectEventPluginsByName: A },
            T = null,
            _ = null,
            P = null;
        function O(e, t, n, r) {
            (t = e.type || "unknown-event"), (e.currentTarget = P(r)), m.invokeGuardedCallbackAndCatchFirstError(t, n, void 0, e), (e.currentTarget = null);
        }
        function N(e, t) {
            return null == t && f("30"), null == e ? t : Array.isArray(e) ? (Array.isArray(t) ? (e.push.apply(e, t), e) : (e.push(t), e)) : Array.isArray(t) ? [e].concat(t) : [e, t];
        }
        function L(e, t, n) {
            Array.isArray(e) ? e.forEach(t, n) : e && t.call(n, e);
        }
        var R = null;
        function M(e, t) {
            if (e) {
                var n = e._dispatchListeners,
                    r = e._dispatchInstances;
                if (Array.isArray(n)) for (var o = 0; o < n.length && !e.isPropagationStopped(); o++) O(e, t, n[o], r[o]);
                else n && O(e, t, n, r);
                (e._dispatchListeners = null), (e._dispatchInstances = null), e.isPersistent() || e.constructor.release(e);
            }
        }
        function j(e) {
            return M(e, !0);
        }
        function U(e) {
            return M(e, !1);
        }
        var I = { injectEventPluginOrder: C, injectEventPluginsByName: A };
        function F(e, t) {
            var n = e.stateNode;
            if (!n) return null;
            var r = T(n);
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
            return e ? null : (n && "function" != typeof n && f("231", t, typeof n), n);
        }
        function D(e, t) {
            null !== e && (R = N(R, e)), (e = R), (R = null), e && (L(e, t ? j : U), R && f("95"), m.rethrowCaughtError());
        }
        function z(e, t, n, r) {
            for (var o = null, a = 0; a < x.length; a++) {
                var i = x[a];
                i && (i = i.extractEvents(e, t, n, r)) && (o = N(o, i));
            }
            D(o, !1);
        }
        var B = { injection: I, getListener: F, runEventsInBatch: D, runExtractedEventsInBatch: z },
            $ = Math.random().toString(36).slice(2),
            W = "__reactInternalInstance$" + $,
            V = "__reactEventHandlers$" + $;
        function H(e) {
            if (e[W]) return e[W];
            for (; !e[W]; ) {
                if (!e.parentNode) return null;
                e = e.parentNode;
            }
            return 5 === (e = e[W]).tag || 6 === e.tag ? e : null;
        }
        function K(e) {
            if (5 === e.tag || 6 === e.tag) return e.stateNode;
            f("33");
        }
        function q(e) {
            return e[V] || null;
        }
        var Q = {
            precacheFiberNode: function (e, t) {
                t[W] = e;
            },
            getClosestInstanceFromNode: H,
            getInstanceFromNode: function (e) {
                return !(e = e[W]) || (5 !== e.tag && 6 !== e.tag) ? null : e;
            },
            getNodeFromInstance: K,
            getFiberCurrentPropsFromNode: q,
            updateFiberProps: function (e, t) {
                e[V] = t;
            },
        };
        function Y(e) {
            do {
                e = e.return;
            } while (e && 5 !== e.tag);
            return e || null;
        }
        function G(e, t, n) {
            for (var r = []; e; ) r.push(e), (e = Y(e));
            for (e = r.length; 0 < e--; ) t(r[e], "captured", n);
            for (e = 0; e < r.length; e++) t(r[e], "bubbled", n);
        }
        function X(e, t, n) {
            (t = F(e, n.dispatchConfig.phasedRegistrationNames[t])) && ((n._dispatchListeners = N(n._dispatchListeners, t)), (n._dispatchInstances = N(n._dispatchInstances, e)));
        }
        function Z(e) {
            e && e.dispatchConfig.phasedRegistrationNames && G(e._targetInst, X, e);
        }
        function J(e) {
            if (e && e.dispatchConfig.phasedRegistrationNames) {
                var t = e._targetInst;
                G((t = t ? Y(t) : null), X, e);
            }
        }
        function ee(e, t, n) {
            e && n && n.dispatchConfig.registrationName && (t = F(e, n.dispatchConfig.registrationName)) && ((n._dispatchListeners = N(n._dispatchListeners, t)), (n._dispatchInstances = N(n._dispatchInstances, e)));
        }
        function te(e) {
            e && e.dispatchConfig.registrationName && ee(e._targetInst, null, e);
        }
        function ne(e) {
            L(e, Z);
        }
        function re(e, t, n, r) {
            if (n && r)
                e: {
                    for (var o = n, a = r, i = 0, l = o; l; l = Y(l)) i++;
                    l = 0;
                    for (var s = a; s; s = Y(s)) l++;
                    for (; 0 < i - l; ) (o = Y(o)), i--;
                    for (; 0 < l - i; ) (a = Y(a)), l--;
                    for (; i--; ) {
                        if (o === a || o === a.alternate) break e;
                        (o = Y(o)), (a = Y(a));
                    }
                    o = null;
                }
            else o = null;
            for (a = o, o = []; n && n !== a && (null === (i = n.alternate) || i !== a); ) o.push(n), (n = Y(n));
            for (n = []; r && r !== a && (null === (i = r.alternate) || i !== a); ) n.push(r), (r = Y(r));
            for (r = 0; r < o.length; r++) ee(o[r], "bubbled", e);
            for (e = n.length; 0 < e--; ) ee(n[e], "captured", t);
        }
        var oe = {
            accumulateTwoPhaseDispatches: ne,
            accumulateTwoPhaseDispatchesSkipTarget: function (e) {
                L(e, J);
            },
            accumulateEnterLeaveDispatches: re,
            accumulateDirectDispatches: function (e) {
                L(e, te);
            },
        };
        function ae(e, t) {
            var n = {};
            return (n[e.toLowerCase()] = t.toLowerCase()), (n["Webkit" + e] = "webkit" + t), (n["Moz" + e] = "moz" + t), (n["ms" + e] = "MS" + t), (n["O" + e] = "o" + t.toLowerCase()), n;
        }
        var ie = { animationend: ae("Animation", "AnimationEnd"), animationiteration: ae("Animation", "AnimationIteration"), animationstart: ae("Animation", "AnimationStart"), transitionend: ae("Transition", "TransitionEnd") },
            le = {},
            se = {};
        function ue(e) {
            if (le[e]) return le[e];
            if (!ie[e]) return e;
            var t,
                n = ie[e];
            for (t in n) if (n.hasOwnProperty(t) && t in se) return (le[e] = n[t]);
            return e;
        }
        a.canUseDOM &&
            ((se = document.createElement("div").style),
            "AnimationEvent" in window || (delete ie.animationend.animation, delete ie.animationiteration.animation, delete ie.animationstart.animation),
            "TransitionEvent" in window || delete ie.transitionend.transition);
        var ce = ue("animationend"),
            pe = ue("animationiteration"),
            fe = ue("animationstart"),
            de = ue("transitionend"),
            me = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(
                " "
            ),
            he = null;
        function ge() {
            return !he && a.canUseDOM && (he = "textContent" in document.documentElement ? "textContent" : "innerText"), he;
        }
        var ve = { _root: null, _startText: null, _fallbackText: null };
        function ye() {
            if (ve._fallbackText) return ve._fallbackText;
            var e,
                t,
                n = ve._startText,
                r = n.length,
                o = be(),
                a = o.length;
            for (e = 0; e < r && n[e] === o[e]; e++);
            var i = r - e;
            for (t = 1; t <= i && n[r - t] === o[a - t]; t++);
            return (ve._fallbackText = o.slice(e, 1 < t ? 1 - t : void 0)), ve._fallbackText;
        }
        function be() {
            return "value" in ve._root ? ve._root.value : ve._root[ge()];
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
            for (var o in ((this.dispatchConfig = e), (this._targetInst = t), (this.nativeEvent = n), (e = this.constructor.Interface)))
                e.hasOwnProperty(o) && ((t = e[o]) ? (this[o] = t(n)) : "target" === o ? (this.target = r) : (this[o] = n[o]));
            return (this.isDefaultPrevented = (null != n.defaultPrevented ? n.defaultPrevented : !1 === n.returnValue) ? l.thatReturnsTrue : l.thatReturnsFalse), (this.isPropagationStopped = l.thatReturnsFalse), this;
        }
        function Ee(e, t, n, r) {
            if (this.eventPool.length) {
                var o = this.eventPool.pop();
                return this.call(o, e, t, n, r), o;
            }
            return new this(e, t, n, r);
        }
        function Ce(e) {
            e instanceof this || f("223"), e.destructor(), 10 > this.eventPool.length && this.eventPool.push(e);
        }
        function Ae(e) {
            (e.eventPool = []), (e.getPooled = Ee), (e.release = Ce);
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
                var o = new t();
                return i(o, n.prototype), (n.prototype = o), (n.prototype.constructor = n), (n.Interface = i({}, r.Interface, e)), (n.extend = r.extend), Ae(n), n;
            }),
            Ae(ke);
        var Se = ke.extend({ data: null }),
            Te = ke.extend({ data: null }),
            _e = [9, 13, 27, 32],
            Pe = a.canUseDOM && "CompositionEvent" in window,
            Oe = null;
        a.canUseDOM && "documentMode" in document && (Oe = document.documentMode);
        var Ne = a.canUseDOM && "TextEvent" in window && !Oe,
            Le = a.canUseDOM && (!Pe || (Oe && 8 < Oe && 11 >= Oe)),
            Re = String.fromCharCode(32),
            Me = {
                beforeInput: { phasedRegistrationNames: { bubbled: "onBeforeInput", captured: "onBeforeInputCapture" }, dependencies: ["compositionend", "keypress", "textInput", "paste"] },
                compositionEnd: { phasedRegistrationNames: { bubbled: "onCompositionEnd", captured: "onCompositionEndCapture" }, dependencies: "blur compositionend keydown keypress keyup mousedown".split(" ") },
                compositionStart: { phasedRegistrationNames: { bubbled: "onCompositionStart", captured: "onCompositionStartCapture" }, dependencies: "blur compositionstart keydown keypress keyup mousedown".split(" ") },
                compositionUpdate: { phasedRegistrationNames: { bubbled: "onCompositionUpdate", captured: "onCompositionUpdateCapture" }, dependencies: "blur compositionupdate keydown keypress keyup mousedown".split(" ") },
            },
            je = !1;
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
        function Ie(e) {
            return "object" == typeof (e = e.detail) && "data" in e ? e.data : null;
        }
        var Fe = !1;
        var De = {
                eventTypes: Me,
                extractEvents: function (e, t, n, r) {
                    var o = void 0,
                        a = void 0;
                    if (Pe)
                        e: {
                            switch (e) {
                                case "compositionstart":
                                    o = Me.compositionStart;
                                    break e;
                                case "compositionend":
                                    o = Me.compositionEnd;
                                    break e;
                                case "compositionupdate":
                                    o = Me.compositionUpdate;
                                    break e;
                            }
                            o = void 0;
                        }
                    else Fe ? Ue(e, n) && (o = Me.compositionEnd) : "keydown" === e && 229 === n.keyCode && (o = Me.compositionStart);
                    return (
                        o
                            ? (Le && (Fe || o !== Me.compositionStart ? o === Me.compositionEnd && Fe && (a = ye()) : ((ve._root = r), (ve._startText = be()), (Fe = !0))),
                              (o = Se.getPooled(o, t, n, r)),
                              a ? (o.data = a) : null !== (a = Ie(n)) && (o.data = a),
                              ne(o),
                              (a = o))
                            : (a = null),
                        (e = Ne
                            ? (function (e, t) {
                                  switch (e) {
                                      case "compositionend":
                                          return Ie(t);
                                      case "keypress":
                                          return 32 !== t.which ? null : ((je = !0), Re);
                                      case "textInput":
                                          return (e = t.data) === Re && je ? null : e;
                                      default:
                                          return null;
                                  }
                              })(e, n)
                            : (function (e, t) {
                                  if (Fe) return "compositionend" === e || (!Pe && Ue(e, t)) ? ((e = ye()), (ve._root = null), (ve._startText = null), (ve._fallbackText = null), (Fe = !1), e) : null;
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
                                          return Le ? null : t.data;
                                      default:
                                          return null;
                                  }
                              })(e, n))
                            ? (((t = Te.getPooled(Me.beforeInput, t, n, r)).data = e), ne(t))
                            : (t = null),
                        null === a ? t : null === t ? a : [a, t]
                    );
                },
            },
            ze = null,
            Be = {
                injectFiberControlledHostComponent: function (e) {
                    ze = e;
                },
            },
            $e = null,
            We = null;
        function Ve(e) {
            if ((e = _(e))) {
                (ze && "function" == typeof ze.restoreControlledState) || f("194");
                var t = T(e.stateNode);
                ze.restoreControlledState(e.stateNode, e.type, t);
            }
        }
        function He(e) {
            $e ? (We ? We.push(e) : (We = [e])) : ($e = e);
        }
        function Ke() {
            return null !== $e || null !== We;
        }
        function qe() {
            if ($e) {
                var e = $e,
                    t = We;
                if (((We = $e = null), Ve(e), t)) for (e = 0; e < t.length; e++) Ve(t[e]);
            }
        }
        var Qe = { injection: Be, enqueueStateRestore: He, needsStateRestore: Ke, restoreStateIfNeeded: qe };
        function Ye(e, t) {
            return e(t);
        }
        function Ge(e, t, n) {
            return e(t, n);
        }
        function Xe() {}
        var Ze = !1;
        function Je(e, t) {
            if (Ze) return e(t);
            Ze = !0;
            try {
                return Ye(e, t);
            } finally {
                (Ze = !1), Ke() && (Xe(), qe());
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
            return !(!a.canUseDOM || (t && !("addEventListener" in document))) && ((t = (e = "on" + e) in document) || ((t = document.createElement("div")).setAttribute(e, "return;"), (t = "function" == typeof t[e])), t);
        }
        function ot(e) {
            var t = e.type;
            return (e = e.nodeName) && "input" === e.toLowerCase() && ("checkbox" === t || "radio" === t);
        }
        function at(e) {
            e._valueTracker ||
                (e._valueTracker = (function (e) {
                    var t = ot(e) ? "checked" : "value",
                        n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
                        r = "" + e[t];
                    if (!e.hasOwnProperty(t) && void 0 !== n && "function" == typeof n.get && "function" == typeof n.set) {
                        var o = n.get,
                            a = n.set;
                        return (
                            Object.defineProperty(e, t, {
                                configurable: !0,
                                get: function () {
                                    return o.call(this);
                                },
                                set: function (e) {
                                    (r = "" + e), a.call(this, e);
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
            return e && (r = ot(e) ? (e.checked ? "true" : "false") : e.value), (e = r) !== n && (t.setValue(e), !0);
        }
        var lt = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
            st = "function" == typeof Symbol && Symbol.for,
            ut = st ? Symbol.for("react.element") : 60103,
            ct = st ? Symbol.for("react.portal") : 60106,
            pt = st ? Symbol.for("react.fragment") : 60107,
            ft = st ? Symbol.for("react.strict_mode") : 60108,
            dt = st ? Symbol.for("react.profiler") : 60114,
            mt = st ? Symbol.for("react.provider") : 60109,
            ht = st ? Symbol.for("react.context") : 60110,
            gt = st ? Symbol.for("react.async_mode") : 60111,
            vt = st ? Symbol.for("react.forward_ref") : 60112,
            yt = st ? Symbol.for("react.timeout") : 60113,
            bt = "function" == typeof Symbol && Symbol.iterator;
        function xt(e) {
            return null == e ? null : "function" == typeof (e = (bt && e[bt]) || e["@@iterator"]) ? e : null;
        }
        function wt(e) {
            var t = e.type;
            if ("function" == typeof t) return t.displayName || t.name;
            if ("string" == typeof t) return t;
            switch (t) {
                case gt:
                    return "AsyncMode";
                case ht:
                    return "Context.Consumer";
                case pt:
                    return "ReactFragment";
                case ct:
                    return "ReactPortal";
                case dt:
                    return "Profiler(" + e.pendingProps.id + ")";
                case mt:
                    return "Context.Provider";
                case ft:
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
                            o = wt(e),
                            a = null;
                        n && (a = wt(n)), (o = "\n    in " + (o || "Unknown") + ((n = r) ? " (at " + n.fileName.replace(/^.*[\\\/]/, "") + ":" + n.lineNumber + ")" : a ? " (created by " + a + ")" : ""));
                        break e;
                    default:
                        o = "";
                }
                (t += o), (e = e.return);
            } while (e);
            return t;
        }
        var Et = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
            Ct = Object.prototype.hasOwnProperty,
            At = {},
            St = {};
        function Tt(e, t, n, r, o) {
            (this.acceptsBooleans = 2 === t || 3 === t || 4 === t), (this.attributeName = r), (this.attributeNamespace = o), (this.mustUseProperty = n), (this.propertyName = e), (this.type = t);
        }
        var _t = {};
        "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function (e) {
            _t[e] = new Tt(e, 0, !1, e, null);
        }),
            [
                ["acceptCharset", "accept-charset"],
                ["className", "class"],
                ["htmlFor", "for"],
                ["httpEquiv", "http-equiv"],
            ].forEach(function (e) {
                var t = e[0];
                _t[t] = new Tt(t, 1, !1, e[1], null);
            }),
            ["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
                _t[e] = new Tt(e, 2, !1, e.toLowerCase(), null);
            }),
            ["autoReverse", "externalResourcesRequired", "preserveAlpha"].forEach(function (e) {
                _t[e] = new Tt(e, 2, !1, e, null);
            }),
            "allowFullScreen async autoFocus autoPlay controls default defer disabled formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function (e) {
                _t[e] = new Tt(e, 3, !1, e.toLowerCase(), null);
            }),
            ["checked", "multiple", "muted", "selected"].forEach(function (e) {
                _t[e] = new Tt(e, 3, !0, e.toLowerCase(), null);
            }),
            ["capture", "download"].forEach(function (e) {
                _t[e] = new Tt(e, 4, !1, e.toLowerCase(), null);
            }),
            ["cols", "rows", "size", "span"].forEach(function (e) {
                _t[e] = new Tt(e, 6, !1, e.toLowerCase(), null);
            }),
            ["rowSpan", "start"].forEach(function (e) {
                _t[e] = new Tt(e, 5, !1, e.toLowerCase(), null);
            });
        var Pt = /[\-:]([a-z])/g;
        function Ot(e) {
            return e[1].toUpperCase();
        }
        function Nt(e, t, n, r) {
            var o = _t.hasOwnProperty(t) ? _t[t] : null;
            (null !== o ? 0 === o.type : !r && 2 < t.length && ("o" === t[0] || "O" === t[0]) && ("n" === t[1] || "N" === t[1])) ||
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
                })(t, n, o, r) && (n = null),
                r || null === o
                    ? (function (e) {
                          return !!Ct.call(St, e) || (!Ct.call(At, e) && (Et.test(e) ? (St[e] = !0) : ((At[e] = !0), !1)));
                      })(t) && (null === n ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
                    : o.mustUseProperty
                    ? (e[o.propertyName] = null === n ? 3 !== o.type && "" : n)
                    : ((t = o.attributeName), (r = o.attributeNamespace), null === n ? e.removeAttribute(t) : ((n = 3 === (o = o.type) || (4 === o && !0 === n) ? "" : "" + n), r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
        }
        function Lt(e, t) {
            var n = t.checked;
            return i({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: null != n ? n : e._wrapperState.initialChecked });
        }
        function Rt(e, t) {
            var n = null == t.defaultValue ? "" : t.defaultValue,
                r = null != t.checked ? t.checked : t.defaultChecked;
            (n = Ft(null != t.value ? t.value : n)), (e._wrapperState = { initialChecked: r, initialValue: n, controlled: "checkbox" === t.type || "radio" === t.type ? null != t.checked : null != t.value });
        }
        function Mt(e, t) {
            null != (t = t.checked) && Nt(e, "checked", t, !1);
        }
        function jt(e, t) {
            Mt(e, t);
            var n = Ft(t.value);
            null != n && ("number" === t.type ? ((0 === n && "" === e.value) || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n)),
                t.hasOwnProperty("value") ? It(e, t.type, n) : t.hasOwnProperty("defaultValue") && It(e, t.type, Ft(t.defaultValue)),
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
        function It(e, t, n) {
            ("number" === t && e.ownerDocument.activeElement === e) || (null == n ? (e.defaultValue = "" + e._wrapperState.initialValue) : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
        }
        function Ft(e) {
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
                var t = e.replace(Pt, Ot);
                _t[t] = new Tt(t, 1, !1, e, null);
            }),
            "xlink:actuate xlink:arcrole xlink:href xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function (e) {
                var t = e.replace(Pt, Ot);
                _t[t] = new Tt(t, 1, !1, e, "http://www.w3.org/1999/xlink");
            }),
            ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
                var t = e.replace(Pt, Ot);
                _t[t] = new Tt(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace");
            }),
            (_t.tabIndex = new Tt("tabIndex", 1, !1, "tabindex", null));
        var Dt = { change: { phasedRegistrationNames: { bubbled: "onChange", captured: "onChangeCapture" }, dependencies: "blur change click focus input keydown keyup selectionchange".split(" ") } };
        function zt(e, t, n) {
            return ((e = ke.getPooled(Dt.change, e, t, n)).type = "change"), He(n), ne(e), e;
        }
        var Bt = null,
            $t = null;
        function Wt(e) {
            D(e, !1);
        }
        function Vt(e) {
            if (it(K(e))) return e;
        }
        function Ht(e, t) {
            if ("change" === e) return t;
        }
        var Kt = !1;
        function qt() {
            Bt && (Bt.detachEvent("onpropertychange", Qt), ($t = Bt = null));
        }
        function Qt(e) {
            "value" === e.propertyName && Vt($t) && Je(Wt, (e = zt($t, e, nt(e))));
        }
        function Yt(e, t, n) {
            "focus" === e ? (qt(), ($t = n), (Bt = t).attachEvent("onpropertychange", Qt)) : "blur" === e && qt();
        }
        function Gt(e) {
            if ("selectionchange" === e || "keyup" === e || "keydown" === e) return Vt($t);
        }
        function Xt(e, t) {
            if ("click" === e) return Vt(t);
        }
        function Zt(e, t) {
            if ("input" === e || "change" === e) return Vt(t);
        }
        a.canUseDOM && (Kt = rt("input") && (!document.documentMode || 9 < document.documentMode));
        var Jt = {
                eventTypes: Dt,
                _isInputEventSupported: Kt,
                extractEvents: function (e, t, n, r) {
                    var o = t ? K(t) : window,
                        a = void 0,
                        i = void 0,
                        l = o.nodeName && o.nodeName.toLowerCase();
                    if (
                        ("select" === l || ("input" === l && "file" === o.type)
                            ? (a = Ht)
                            : tt(o)
                            ? Kt
                                ? (a = Zt)
                                : ((a = Gt), (i = Yt))
                            : (l = o.nodeName) && "input" === l.toLowerCase() && ("checkbox" === o.type || "radio" === o.type) && (a = Xt),
                        a && (a = a(e, t)))
                    )
                        return zt(a, n, r);
                    i && i(e, o, t), "blur" === e && (e = o._wrapperState) && e.controlled && "number" === o.type && It(o, "number", o.value);
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
        var on = en.extend({
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
            an = on.extend({ pointerId: null, width: null, height: null, pressure: null, tiltX: null, tiltY: null, pointerType: null, isPrimary: null }),
            ln = {
                mouseEnter: { registrationName: "onMouseEnter", dependencies: ["mouseout", "mouseover"] },
                mouseLeave: { registrationName: "onMouseLeave", dependencies: ["mouseout", "mouseover"] },
                pointerEnter: { registrationName: "onPointerEnter", dependencies: ["pointerout", "pointerover"] },
                pointerLeave: { registrationName: "onPointerLeave", dependencies: ["pointerout", "pointerover"] },
            },
            sn = {
                eventTypes: ln,
                extractEvents: function (e, t, n, r) {
                    var o = "mouseover" === e || "pointerover" === e,
                        a = "mouseout" === e || "pointerout" === e;
                    if ((o && (n.relatedTarget || n.fromElement)) || (!a && !o)) return null;
                    if (((o = r.window === r ? r : (o = r.ownerDocument) ? o.defaultView || o.parentWindow : window), a ? ((a = t), (t = (t = n.relatedTarget || n.toElement) ? H(t) : null)) : (a = null), a === t)) return null;
                    var i = void 0,
                        l = void 0,
                        s = void 0,
                        u = void 0;
                    return (
                        "mouseout" === e || "mouseover" === e
                            ? ((i = on), (l = ln.mouseLeave), (s = ln.mouseEnter), (u = "mouse"))
                            : ("pointerout" !== e && "pointerover" !== e) || ((i = an), (l = ln.pointerLeave), (s = ln.pointerEnter), (u = "pointer")),
                        (e = null == a ? o : K(a)),
                        (o = null == t ? o : K(t)),
                        ((l = i.getPooled(l, a, n, r)).type = u + "leave"),
                        (l.target = e),
                        (l.relatedTarget = o),
                        ((n = i.getPooled(s, t, n, r)).type = u + "enter"),
                        (n.target = o),
                        (n.relatedTarget = e),
                        re(l, n, a, t),
                        [l, n]
                    );
                },
            };
        function un(e) {
            var t = e;
            if (e.alternate) for (; t.return; ) t = t.return;
            else {
                if (0 != (2 & t.effectTag)) return 1;
                for (; t.return; ) if (0 != (2 & (t = t.return).effectTag)) return 1;
            }
            return 3 === t.tag ? 2 : 3;
        }
        function cn(e) {
            2 !== un(e) && f("188");
        }
        function pn(e) {
            var t = e.alternate;
            if (!t) return 3 === (t = un(e)) && f("188"), 1 === t ? null : e;
            for (var n = e, r = t; ; ) {
                var o = n.return,
                    a = o ? o.alternate : null;
                if (!o || !a) break;
                if (o.child === a.child) {
                    for (var i = o.child; i; ) {
                        if (i === n) return cn(o), e;
                        if (i === r) return cn(o), t;
                        i = i.sibling;
                    }
                    f("188");
                }
                if (n.return !== r.return) (n = o), (r = a);
                else {
                    i = !1;
                    for (var l = o.child; l; ) {
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
                    if (!i) {
                        for (l = a.child; l; ) {
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
                        i || f("189");
                    }
                }
                n.alternate !== r && f("190");
            }
            return 3 !== n.tag && f("188"), n.stateNode.current === n ? e : t;
        }
        function fn(e) {
            if (!(e = pn(e))) return null;
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
        var dn = ke.extend({ animationName: null, elapsedTime: null, pseudoElement: null }),
            mn = ke.extend({
                clipboardData: function (e) {
                    return "clipboardData" in e ? e.clipboardData : window.clipboardData;
                },
            }),
            hn = en.extend({ relatedTarget: null });
        function gn(e) {
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
                    return "keypress" === e.type ? (13 === (e = gn(e)) ? "Enter" : String.fromCharCode(e)) : "keydown" === e.type || "keyup" === e.type ? yn[e.keyCode] || "Unidentified" : "";
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
                    return "keypress" === e.type ? gn(e) : 0;
                },
                keyCode: function (e) {
                    return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0;
                },
                which: function (e) {
                    return "keypress" === e.type ? gn(e) : "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0;
                },
            }),
            xn = on.extend({ dataTransfer: null }),
            wn = en.extend({ touches: null, targetTouches: null, changedTouches: null, altKey: null, metaKey: null, ctrlKey: null, shiftKey: null, getModifierState: rn }),
            kn = ke.extend({ propertyName: null, elapsedTime: null, pseudoElement: null }),
            En = on.extend({
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
                [pe, "animationIteration"],
                [fe, "animationStart"],
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
                [de, "transitionEnd"],
                ["waiting", "waiting"],
                ["wheel", "wheel"],
            ],
            An = {},
            Sn = {};
        function Tn(e, t) {
            var n = e[0],
                r = "on" + ((e = e[1])[0].toUpperCase() + e.slice(1));
            (t = { phasedRegistrationNames: { bubbled: r, captured: r + "Capture" }, dependencies: [n], isInteractive: t }), (An[e] = t), (Sn[n] = t);
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
            Tn(e, !0);
        }),
            Cn.forEach(function (e) {
                Tn(e, !1);
            });
        var _n = {
                eventTypes: An,
                isInteractiveTopLevelEventType: function (e) {
                    return void 0 !== (e = Sn[e]) && !0 === e.isInteractive;
                },
                extractEvents: function (e, t, n, r) {
                    var o = Sn[e];
                    if (!o) return null;
                    switch (e) {
                        case "keypress":
                            if (0 === gn(n)) return null;
                        case "keydown":
                        case "keyup":
                            e = bn;
                            break;
                        case "blur":
                        case "focus":
                            e = hn;
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
                            e = on;
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
                        case pe:
                        case fe:
                            e = dn;
                            break;
                        case de:
                            e = kn;
                            break;
                        case "scroll":
                            e = en;
                            break;
                        case "wheel":
                            e = En;
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
                            e = an;
                            break;
                        default:
                            e = ke;
                    }
                    return ne((t = e.getPooled(o, t, n, r))), t;
                },
            },
            Pn = _n.isInteractiveTopLevelEventType,
            On = [];
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
        var Ln = !0;
        function Rn(e) {
            Ln = !!e;
        }
        function Mn(e, t) {
            if (!t) return null;
            var n = (Pn(e) ? Un : In).bind(null, e);
            t.addEventListener(e, n, !1);
        }
        function jn(e, t) {
            if (!t) return null;
            var n = (Pn(e) ? Un : In).bind(null, e);
            t.addEventListener(e, n, !0);
        }
        function Un(e, t) {
            Ge(In, e, t);
        }
        function In(e, t) {
            if (Ln) {
                var n = nt(t);
                if ((null === (n = H(n)) || "number" != typeof n.tag || 2 === un(n) || (n = null), On.length)) {
                    var r = On.pop();
                    (r.topLevelType = e), (r.nativeEvent = t), (r.targetInst = n), (e = r);
                } else e = { topLevelType: e, nativeEvent: t, targetInst: n, ancestors: [] };
                try {
                    Je(Nn, e);
                } finally {
                    (e.topLevelType = null), (e.nativeEvent = null), (e.targetInst = null), (e.ancestors.length = 0), 10 > On.length && On.push(e);
                }
            }
        }
        var Fn = {
                get _enabled() {
                    return Ln;
                },
                setEnabled: Rn,
                isEnabled: function () {
                    return Ln;
                },
                trapBubbledEvent: Mn,
                trapCapturedEvent: jn,
                dispatchEvent: In,
            },
            Dn = {},
            zn = 0,
            Bn = "_reactListenersID" + ("" + Math.random()).slice(2);
        function $n(e) {
            return Object.prototype.hasOwnProperty.call(e, Bn) || ((e[Bn] = zn++), (Dn[e[Bn]] = {})), Dn[e[Bn]];
        }
        function Wn(e) {
            for (; e && e.firstChild; ) e = e.firstChild;
            return e;
        }
        function Vn(e, t) {
            var n,
                r = Wn(e);
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
                r = Wn(r);
            }
        }
        function Hn(e) {
            var t = e && e.nodeName && e.nodeName.toLowerCase();
            return t && (("input" === t && ("text" === e.type || "search" === e.type || "tel" === e.type || "url" === e.type || "password" === e.type)) || "textarea" === t || "true" === e.contentEditable);
        }
        var Kn = a.canUseDOM && "documentMode" in document && 11 >= document.documentMode,
            qn = { select: { phasedRegistrationNames: { bubbled: "onSelect", captured: "onSelectCapture" }, dependencies: "blur contextmenu focus keydown keyup mousedown mouseup selectionchange".split(" ") } },
            Qn = null,
            Yn = null,
            Gn = null,
            Xn = !1;
        function Zn(e, t) {
            if (Xn || null == Qn || Qn !== s()) return null;
            var n = Qn;
            return (
                "selectionStart" in n && Hn(n)
                    ? (n = { start: n.selectionStart, end: n.selectionEnd })
                    : window.getSelection
                    ? (n = { anchorNode: (n = window.getSelection()).anchorNode, anchorOffset: n.anchorOffset, focusNode: n.focusNode, focusOffset: n.focusOffset })
                    : (n = void 0),
                Gn && u(Gn, n) ? null : ((Gn = n), ((e = ke.getPooled(qn.select, Yn, e, t)).type = "select"), (e.target = Qn), ne(e), e)
            );
        }
        var Jn = {
            eventTypes: qn,
            extractEvents: function (e, t, n, r) {
                var o,
                    a = r.window === r ? r.document : 9 === r.nodeType ? r : r.ownerDocument;
                if (!(o = !a)) {
                    e: {
                        (a = $n(a)), (o = E.onSelect);
                        for (var i = 0; i < o.length; i++) {
                            var l = o[i];
                            if (!a.hasOwnProperty(l) || !a[l]) {
                                a = !1;
                                break e;
                            }
                        }
                        a = !0;
                    }
                    o = !a;
                }
                if (o) return null;
                switch (((a = t ? K(t) : window), e)) {
                    case "focus":
                        (tt(a) || "true" === a.contentEditable) && ((Qn = a), (Yn = t), (Gn = null));
                        break;
                    case "blur":
                        Gn = Yn = Qn = null;
                        break;
                    case "mousedown":
                        Xn = !0;
                        break;
                    case "contextmenu":
                    case "mouseup":
                        return (Xn = !1), Zn(n, r);
                    case "selectionchange":
                        if (Kn) break;
                    case "keydown":
                    case "keyup":
                        return Zn(n, r);
                }
                return null;
            },
        };
        I.injectEventPluginOrder("ResponderEventPlugin SimpleEventPlugin TapEventPlugin EnterLeaveEventPlugin ChangeEventPlugin SelectEventPlugin BeforeInputEventPlugin".split(" ")),
            (T = Q.getFiberCurrentPropsFromNode),
            (_ = Q.getInstanceFromNode),
            (P = Q.getNodeFromInstance),
            I.injectEventPluginsByName({ SimpleEventPlugin: _n, EnterLeaveEventPlugin: sn, ChangeEventPlugin: Jt, SelectEventPlugin: Jn, BeforeInputEventPlugin: De });
        var er = "function" == typeof requestAnimationFrame ? requestAnimationFrame : void 0,
            tr = Date,
            nr = setTimeout,
            rr = clearTimeout,
            or = void 0;
        if ("object" == typeof performance && "function" == typeof performance.now) {
            var ar = performance;
            or = function () {
                return ar.now();
            };
        } else
            or = function () {
                return tr.now();
            };
        var ir = void 0,
            lr = void 0;
        if (a.canUseDOM) {
            var sr =
                    "function" == typeof er
                        ? er
                        : function () {
                              f("276");
                          },
                ur = null,
                cr = null,
                pr = -1,
                fr = !1,
                dr = !1,
                mr = 0,
                hr = 33,
                gr = 33,
                vr = {
                    didTimeout: !1,
                    timeRemaining: function () {
                        var e = mr - or();
                        return 0 < e ? e : 0;
                    },
                },
                yr = function (e, t) {
                    var n = e.scheduledCallback,
                        r = !1;
                    try {
                        n(t), (r = !0);
                    } finally {
                        lr(e), r || ((fr = !0), window.postMessage(br, "*"));
                    }
                },
                br = "__reactIdleCallback$" + Math.random().toString(36).slice(2);
            window.addEventListener(
                "message",
                function (e) {
                    if (e.source === window && e.data === br && ((fr = !1), null !== ur)) {
                        if (null !== ur) {
                            var t = or();
                            if (!(-1 === pr || pr > t)) {
                                e = -1;
                                for (var n = [], r = ur; null !== r; ) {
                                    var o = r.timeoutTime;
                                    -1 !== o && o <= t ? n.push(r) : -1 !== o && (-1 === e || o < e) && (e = o), (r = r.next);
                                }
                                if (0 < n.length) for (vr.didTimeout = !0, t = 0, r = n.length; t < r; t++) yr(n[t], vr);
                                pr = e;
                            }
                        }
                        for (e = or(); 0 < mr - e && null !== ur; ) (e = ur), (vr.didTimeout = !1), yr(e, vr), (e = or());
                        null === ur || dr || ((dr = !0), sr(xr));
                    }
                },
                !1
            );
            var xr = function (e) {
                dr = !1;
                var t = e - mr + gr;
                t < gr && hr < gr ? (8 > t && (t = 8), (gr = t < hr ? hr : t)) : (hr = t), (mr = e + gr), fr || ((fr = !0), window.postMessage(br, "*"));
            };
            (ir = function (e, t) {
                var n = -1;
                return (
                    null != t && "number" == typeof t.timeout && (n = or() + t.timeout),
                    (-1 === pr || (-1 !== n && n < pr)) && (pr = n),
                    (e = { scheduledCallback: e, timeoutTime: n, prev: null, next: null }),
                    null === ur ? (ur = e) : null !== (t = e.prev = cr) && (t.next = e),
                    (cr = e),
                    dr || ((dr = !0), sr(xr)),
                    e
                );
            }),
                (lr = function (e) {
                    if (null !== e.prev || ur === e) {
                        var t = e.next,
                            n = e.prev;
                        (e.next = null), (e.prev = null), null !== t ? (null !== n ? ((n.next = t), (t.prev = n)) : ((t.prev = null), (ur = t))) : null !== n ? ((n.next = null), (cr = n)) : (cr = ur = null);
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
                        o.Children.forEach(e, function (e) {
                            null == e || ("string" != typeof e && "number" != typeof e) || (t += e);
                        }),
                        t
                    );
                })(t.children)) && (e.children = t),
                e
            );
        }
        function Er(e, t, n, r) {
            if (((e = e.options), t)) {
                t = {};
                for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
                for (n = 0; n < e.length; n++) (o = t.hasOwnProperty("$" + e[n].value)), e[n].selected !== o && (e[n].selected = o), o && r && (e[n].defaultSelected = !0);
            } else {
                for (n = "" + n, t = null, o = 0; o < e.length; o++) {
                    if (e[o].value === n) return (e[o].selected = !0), void (r && (e[o].defaultSelected = !0));
                    null !== t || e[o].disabled || (t = e[o]);
                }
                null !== t && (t.selected = !0);
            }
        }
        function Cr(e, t) {
            var n = t.value;
            e._wrapperState = { initialValue: null != n ? n : t.defaultValue, wasMultiple: !!t.multiple };
        }
        function Ar(e, t) {
            return null != t.dangerouslySetInnerHTML && f("91"), i({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
        }
        function Sr(e, t) {
            var n = t.value;
            null == n && ((n = t.defaultValue), null != (t = t.children) && (null != n && f("92"), Array.isArray(t) && (1 >= t.length || f("93"), (t = t[0])), (n = "" + t)), null == n && (n = "")),
                (e._wrapperState = { initialValue: "" + n });
        }
        function Tr(e, t) {
            var n = t.value;
            null != n && ((n = "" + n) !== e.value && (e.value = n), null == t.defaultValue && (e.defaultValue = n)), null != t.defaultValue && (e.defaultValue = t.defaultValue);
        }
        function _r(e) {
            var t = e.textContent;
            t === e._wrapperState.initialValue && (e.value = t);
        }
        var Pr = "http://www.w3.org/1999/xhtml",
            Or = "http://www.w3.org/2000/svg";
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
        function Lr(e, t) {
            return null == e || "http://www.w3.org/1999/xhtml" === e ? Nr(t) : "http://www.w3.org/2000/svg" === e && "foreignObject" === t ? "http://www.w3.org/1999/xhtml" : e;
        }
        var Rr = void 0,
            Mr = (function (e) {
                return "undefined" != typeof MSApp && MSApp.execUnsafeLocalFunction
                    ? function (t, n, r, o) {
                          MSApp.execUnsafeLocalFunction(function () {
                              return e(t, n);
                          });
                      }
                    : e;
            })(function (e, t) {
                if (e.namespaceURI !== Or || "innerHTML" in e) e.innerHTML = t;
                else {
                    for ((Rr = Rr || document.createElement("div")).innerHTML = "<svg>" + t + "</svg>", t = Rr.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
                    for (; t.firstChild; ) e.appendChild(t.firstChild);
                }
            });
        function jr(e, t) {
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
            Ir = ["Webkit", "ms", "Moz", "O"];
        function Fr(e, t) {
            for (var n in ((e = e.style), t))
                if (t.hasOwnProperty(n)) {
                    var r = 0 === n.indexOf("--"),
                        o = n,
                        a = t[n];
                    (o = null == a || "boolean" == typeof a || "" === a ? "" : r || "number" != typeof a || 0 === a || (Ur.hasOwnProperty(o) && Ur[o]) ? ("" + a).trim() : a + "px"),
                        "float" === n && (n = "cssFloat"),
                        r ? e.setProperty(n, o) : (e[n] = o);
                }
        }
        Object.keys(Ur).forEach(function (e) {
            Ir.forEach(function (t) {
                (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Ur[t] = Ur[e]);
            });
        });
        var Dr = i({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
        function zr(e, t, n) {
            t &&
                (Dr[e] && (null != t.children || null != t.dangerouslySetInnerHTML) && f("137", e, n()),
                null != t.dangerouslySetInnerHTML && (null != t.children && f("60"), ("object" == typeof t.dangerouslySetInnerHTML && "__html" in t.dangerouslySetInnerHTML) || f("61")),
                null != t.style && "object" != typeof t.style && f("62", n()));
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
        var $r = l.thatReturns("");
        function Wr(e, t) {
            var n = $n((e = 9 === e.nodeType || 11 === e.nodeType ? e : e.ownerDocument));
            t = E[t];
            for (var r = 0; r < t.length; r++) {
                var o = t[r];
                if (!n.hasOwnProperty(o) || !n[o]) {
                    switch (o) {
                        case "scroll":
                            jn("scroll", e);
                            break;
                        case "focus":
                        case "blur":
                            jn("focus", e), jn("blur", e), (n.blur = !0), (n.focus = !0);
                            break;
                        case "cancel":
                        case "close":
                            rt(o, !0) && jn(o, e);
                            break;
                        case "invalid":
                        case "submit":
                        case "reset":
                            break;
                        default:
                            -1 === me.indexOf(o) && Mn(o, e);
                    }
                    n[o] = !0;
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
            var o = Br(t, n);
            switch (t) {
                case "iframe":
                case "object":
                    Mn("load", e);
                    var a = n;
                    break;
                case "video":
                case "audio":
                    for (a = 0; a < me.length; a++) Mn(me[a], e);
                    a = n;
                    break;
                case "source":
                    Mn("error", e), (a = n);
                    break;
                case "img":
                case "image":
                case "link":
                    Mn("error", e), Mn("load", e), (a = n);
                    break;
                case "form":
                    Mn("reset", e), Mn("submit", e), (a = n);
                    break;
                case "details":
                    Mn("toggle", e), (a = n);
                    break;
                case "input":
                    Rt(e, n), (a = Lt(e, n)), Mn("invalid", e), Wr(r, "onChange");
                    break;
                case "option":
                    a = kr(e, n);
                    break;
                case "select":
                    Cr(e, n), (a = i({}, n, { value: void 0 })), Mn("invalid", e), Wr(r, "onChange");
                    break;
                case "textarea":
                    Sr(e, n), (a = Ar(e, n)), Mn("invalid", e), Wr(r, "onChange");
                    break;
                default:
                    a = n;
            }
            zr(t, a, $r);
            var s,
                u = a;
            for (s in u)
                if (u.hasOwnProperty(s)) {
                    var c = u[s];
                    "style" === s
                        ? Fr(e, c)
                        : "dangerouslySetInnerHTML" === s
                        ? null != (c = c ? c.__html : void 0) && Mr(e, c)
                        : "children" === s
                        ? "string" == typeof c
                            ? ("textarea" !== t || "" !== c) && jr(e, c)
                            : "number" == typeof c && jr(e, "" + c)
                        : "suppressContentEditableWarning" !== s && "suppressHydrationWarning" !== s && "autoFocus" !== s && (k.hasOwnProperty(s) ? null != c && Wr(r, s) : null != c && Nt(e, s, c, o));
                }
            switch (t) {
                case "input":
                    at(e), Ut(e, n, !1);
                    break;
                case "textarea":
                    at(e), _r(e);
                    break;
                case "option":
                    null != n.value && e.setAttribute("value", n.value);
                    break;
                case "select":
                    (e.multiple = !!n.multiple), null != (t = n.value) ? Er(e, !!n.multiple, t, !1) : null != n.defaultValue && Er(e, !!n.multiple, n.defaultValue, !0);
                    break;
                default:
                    "function" == typeof a.onClick && (e.onclick = l);
            }
        }
        function qr(e, t, n, r, o) {
            var a = null;
            switch (t) {
                case "input":
                    (n = Lt(e, n)), (r = Lt(e, r)), (a = []);
                    break;
                case "option":
                    (n = kr(e, n)), (r = kr(e, r)), (a = []);
                    break;
                case "select":
                    (n = i({}, n, { value: void 0 })), (r = i({}, r, { value: void 0 })), (a = []);
                    break;
                case "textarea":
                    (n = Ar(e, n)), (r = Ar(e, r)), (a = []);
                    break;
                default:
                    "function" != typeof n.onClick && "function" == typeof r.onClick && (e.onclick = l);
            }
            zr(t, r, $r), (t = e = void 0);
            var s = null;
            for (e in n)
                if (!r.hasOwnProperty(e) && n.hasOwnProperty(e) && null != n[e])
                    if ("style" === e) {
                        var u = n[e];
                        for (t in u) u.hasOwnProperty(t) && (s || (s = {}), (s[t] = ""));
                    } else
                        "dangerouslySetInnerHTML" !== e &&
                            "children" !== e &&
                            "suppressContentEditableWarning" !== e &&
                            "suppressHydrationWarning" !== e &&
                            "autoFocus" !== e &&
                            (k.hasOwnProperty(e) ? a || (a = []) : (a = a || []).push(e, null));
            for (e in r) {
                var c = r[e];
                if (((u = null != n ? n[e] : void 0), r.hasOwnProperty(e) && c !== u && (null != c || null != u)))
                    if ("style" === e)
                        if (u) {
                            for (t in u) !u.hasOwnProperty(t) || (c && c.hasOwnProperty(t)) || (s || (s = {}), (s[t] = ""));
                            for (t in c) c.hasOwnProperty(t) && u[t] !== c[t] && (s || (s = {}), (s[t] = c[t]));
                        } else s || (a || (a = []), a.push(e, s)), (s = c);
                    else
                        "dangerouslySetInnerHTML" === e
                            ? ((c = c ? c.__html : void 0), (u = u ? u.__html : void 0), null != c && u !== c && (a = a || []).push(e, "" + c))
                            : "children" === e
                            ? u === c || ("string" != typeof c && "number" != typeof c) || (a = a || []).push(e, "" + c)
                            : "suppressContentEditableWarning" !== e && "suppressHydrationWarning" !== e && (k.hasOwnProperty(e) ? (null != c && Wr(o, e), a || u === c || (a = [])) : (a = a || []).push(e, c));
            }
            return s && (a = a || []).push("style", s), a;
        }
        function Qr(e, t, n, r, o) {
            "input" === n && "radio" === o.type && null != o.name && Mt(e, o), Br(n, r), (r = Br(n, o));
            for (var a = 0; a < t.length; a += 2) {
                var i = t[a],
                    l = t[a + 1];
                "style" === i ? Fr(e, l) : "dangerouslySetInnerHTML" === i ? Mr(e, l) : "children" === i ? jr(e, l) : Nt(e, i, l, r);
            }
            switch (n) {
                case "input":
                    jt(e, o);
                    break;
                case "textarea":
                    Tr(e, o);
                    break;
                case "select":
                    (e._wrapperState.initialValue = void 0),
                        (t = e._wrapperState.wasMultiple),
                        (e._wrapperState.wasMultiple = !!o.multiple),
                        null != (n = o.value) ? Er(e, !!o.multiple, n, !1) : t !== !!o.multiple && (null != o.defaultValue ? Er(e, !!o.multiple, o.defaultValue, !0) : Er(e, !!o.multiple, o.multiple ? [] : "", !1));
            }
        }
        function Yr(e, t, n, r, o) {
            switch (t) {
                case "iframe":
                case "object":
                    Mn("load", e);
                    break;
                case "video":
                case "audio":
                    for (r = 0; r < me.length; r++) Mn(me[r], e);
                    break;
                case "source":
                    Mn("error", e);
                    break;
                case "img":
                case "image":
                case "link":
                    Mn("error", e), Mn("load", e);
                    break;
                case "form":
                    Mn("reset", e), Mn("submit", e);
                    break;
                case "details":
                    Mn("toggle", e);
                    break;
                case "input":
                    Rt(e, n), Mn("invalid", e), Wr(o, "onChange");
                    break;
                case "select":
                    Cr(e, n), Mn("invalid", e), Wr(o, "onChange");
                    break;
                case "textarea":
                    Sr(e, n), Mn("invalid", e), Wr(o, "onChange");
            }
            for (var a in (zr(t, n, $r), (r = null), n))
                if (n.hasOwnProperty(a)) {
                    var i = n[a];
                    "children" === a ? ("string" == typeof i ? e.textContent !== i && (r = ["children", i]) : "number" == typeof i && e.textContent !== "" + i && (r = ["children", "" + i])) : k.hasOwnProperty(a) && null != i && Wr(o, a);
                }
            switch (t) {
                case "input":
                    at(e), Ut(e, n, !0);
                    break;
                case "textarea":
                    at(e), _r(e);
                    break;
                case "select":
                case "option":
                    break;
                default:
                    "function" == typeof n.onClick && (e.onclick = l);
            }
            return r;
        }
        function Gr(e, t) {
            return e.nodeValue !== t;
        }
        var Xr = {
                createElement: Vr,
                createTextNode: Hr,
                setInitialProperties: Kr,
                diffProperties: qr,
                updateProperties: Qr,
                diffHydratedProperties: Yr,
                diffHydratedText: Gr,
                warnForUnmatchedText: function () {},
                warnForDeletedHydratableElement: function () {},
                warnForDeletedHydratableText: function () {},
                warnForInsertedHydratedElement: function () {},
                warnForInsertedHydratedText: function () {},
                restoreControlledState: function (e, t, n) {
                    switch (t) {
                        case "input":
                            if ((jt(e, n), (t = n.name), "radio" === n.type && null != t)) {
                                for (n = e; n.parentNode; ) n = n.parentNode;
                                for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
                                    var r = n[t];
                                    if (r !== e && r.form === e.form) {
                                        var o = q(r);
                                        o || f("90"), it(r), jt(r, o);
                                    }
                                }
                            }
                            break;
                        case "textarea":
                            Tr(e, n);
                            break;
                        case "select":
                            null != (t = n.value) && Er(e, !!n.multiple, t, !1);
                    }
                },
            },
            Zr = null,
            Jr = null;
        function eo(e, t) {
            switch (e) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                    return !!t.autoFocus;
            }
            return !1;
        }
        function to(e, t) {
            return (
                "textarea" === e ||
                "string" == typeof t.children ||
                "number" == typeof t.children ||
                ("object" == typeof t.dangerouslySetInnerHTML && null !== t.dangerouslySetInnerHTML && "string" == typeof t.dangerouslySetInnerHTML.__html)
            );
        }
        var no = or,
            ro = ir,
            oo = lr;
        function ao(e) {
            for (e = e.nextSibling; e && 1 !== e.nodeType && 3 !== e.nodeType; ) e = e.nextSibling;
            return e;
        }
        function io(e) {
            for (e = e.firstChild; e && 1 !== e.nodeType && 3 !== e.nodeType; ) e = e.nextSibling;
            return e;
        }
        new Set();
        var lo = [],
            so = -1;
        function uo(e) {
            return { current: e };
        }
        function co(e) {
            0 > so || ((e.current = lo[so]), (lo[so] = null), so--);
        }
        function po(e, t) {
            so++, (lo[so] = e.current), (e.current = t);
        }
        var fo = uo(p),
            mo = uo(!1),
            ho = p;
        function go(e) {
            return yo(e) ? ho : fo.current;
        }
        function vo(e, t) {
            var n = e.type.contextTypes;
            if (!n) return p;
            var r = e.stateNode;
            if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
            var o,
                a = {};
            for (o in n) a[o] = t[o];
            return r && (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = t), (e.__reactInternalMemoizedMaskedChildContext = a)), a;
        }
        function yo(e) {
            return 2 === e.tag && null != e.type.childContextTypes;
        }
        function bo(e) {
            yo(e) && (co(mo), co(fo));
        }
        function xo(e) {
            co(mo), co(fo);
        }
        function wo(e, t, n) {
            fo.current !== p && f("168"), po(fo, t), po(mo, n);
        }
        function ko(e, t) {
            var n = e.stateNode,
                r = e.type.childContextTypes;
            if ("function" != typeof n.getChildContext) return t;
            for (var o in (n = n.getChildContext())) o in r || f("108", wt(e) || "Unknown", o);
            return i({}, t, n);
        }
        function Eo(e) {
            if (!yo(e)) return !1;
            var t = e.stateNode;
            return (t = (t && t.__reactInternalMemoizedMergedChildContext) || p), (ho = fo.current), po(fo, t), po(mo, mo.current), !0;
        }
        function Co(e, t) {
            var n = e.stateNode;
            if ((n || f("169"), t)) {
                var r = ko(e, ho);
                (n.__reactInternalMemoizedMergedChildContext = r), co(mo), co(fo), po(fo, r);
            } else co(mo);
            po(mo, t);
        }
        function Ao(e, t, n, r) {
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
        function So(e, t, n) {
            var r = e.alternate;
            return (
                null === r
                    ? (((r = new Ao(e.tag, t, e.key, e.mode)).type = e.type), (r.stateNode = e.stateNode), (r.alternate = e), (e.alternate = r))
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
        function To(e, t, n) {
            var r = e.type,
                o = e.key;
            if (((e = e.props), "function" == typeof r)) var a = r.prototype && r.prototype.isReactComponent ? 2 : 0;
            else if ("string" == typeof r) a = 5;
            else
                switch (r) {
                    case pt:
                        return _o(e.children, t, n, o);
                    case gt:
                        (a = 11), (t |= 3);
                        break;
                    case ft:
                        (a = 11), (t |= 2);
                        break;
                    case dt:
                        return ((r = new Ao(15, e, o, 4 | t)).type = dt), (r.expirationTime = n), r;
                    case yt:
                        (a = 16), (t |= 2);
                        break;
                    default:
                        e: {
                            switch ("object" == typeof r && null !== r ? r.$$typeof : null) {
                                case mt:
                                    a = 13;
                                    break e;
                                case ht:
                                    a = 12;
                                    break e;
                                case vt:
                                    a = 14;
                                    break e;
                                default:
                                    f("130", null == r ? r : typeof r, "");
                            }
                            a = void 0;
                        }
                }
            return ((t = new Ao(a, e, o, t)).type = r), (t.expirationTime = n), t;
        }
        function _o(e, t, n, r) {
            return ((e = new Ao(10, e, r, t)).expirationTime = n), e;
        }
        function Po(e, t, n) {
            return ((e = new Ao(6, e, null, t)).expirationTime = n), e;
        }
        function Oo(e, t, n) {
            return ((t = new Ao(4, null !== e.children ? e.children : [], e.key, t)).expirationTime = n), (t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }), t;
        }
        function No(e, t, n) {
            return (
                (e = {
                    current: (t = new Ao(3, null, null, t ? 3 : 0)),
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
        var Lo = null,
            Ro = null;
        function Mo(e) {
            return function (t) {
                try {
                    return e(t);
                } catch (e) {}
            };
        }
        function jo(e) {
            "function" == typeof Lo && Lo(e);
        }
        function Uo(e) {
            "function" == typeof Ro && Ro(e);
        }
        var Io = !1;
        function Fo(e) {
            return { expirationTime: 0, baseState: e, firstUpdate: null, lastUpdate: null, firstCapturedUpdate: null, lastCapturedUpdate: null, firstEffect: null, lastEffect: null, firstCapturedEffect: null, lastCapturedEffect: null };
        }
        function Do(e) {
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
        function zo(e) {
            return { expirationTime: e, tag: 0, payload: null, callback: null, next: null, nextEffect: null };
        }
        function Bo(e, t, n) {
            null === e.lastUpdate ? (e.firstUpdate = e.lastUpdate = t) : ((e.lastUpdate.next = t), (e.lastUpdate = t)), (0 === e.expirationTime || e.expirationTime > n) && (e.expirationTime = n);
        }
        function $o(e, t, n) {
            var r = e.alternate;
            if (null === r) {
                var o = e.updateQueue,
                    a = null;
                null === o && (o = e.updateQueue = Fo(e.memoizedState));
            } else
                (o = e.updateQueue),
                    (a = r.updateQueue),
                    null === o ? (null === a ? ((o = e.updateQueue = Fo(e.memoizedState)), (a = r.updateQueue = Fo(r.memoizedState))) : (o = e.updateQueue = Do(a))) : null === a && (a = r.updateQueue = Do(o));
            null === a || o === a ? Bo(o, t, n) : null === o.lastUpdate || null === a.lastUpdate ? (Bo(o, t, n), Bo(a, t, n)) : (Bo(o, t, n), (a.lastUpdate = t));
        }
        function Wo(e, t, n) {
            var r = e.updateQueue;
            null === (r = null === r ? (e.updateQueue = Fo(e.memoizedState)) : Vo(e, r)).lastCapturedUpdate ? (r.firstCapturedUpdate = r.lastCapturedUpdate = t) : ((r.lastCapturedUpdate.next = t), (r.lastCapturedUpdate = t)),
                (0 === r.expirationTime || r.expirationTime > n) && (r.expirationTime = n);
        }
        function Vo(e, t) {
            var n = e.alternate;
            return null !== n && t === n.updateQueue && (t = e.updateQueue = Do(t)), t;
        }
        function Ho(e, t, n, r, o, a) {
            switch (n.tag) {
                case 1:
                    return "function" == typeof (e = n.payload) ? e.call(a, r, o) : e;
                case 3:
                    e.effectTag = (-1025 & e.effectTag) | 64;
                case 0:
                    if (null == (o = "function" == typeof (e = n.payload) ? e.call(a, r, o) : e)) break;
                    return i({}, r, o);
                case 2:
                    Io = !0;
            }
            return r;
        }
        function Ko(e, t, n, r, o) {
            if (((Io = !1), !(0 === t.expirationTime || t.expirationTime > o))) {
                for (var a = (t = Vo(e, t)).baseState, i = null, l = 0, s = t.firstUpdate, u = a; null !== s; ) {
                    var c = s.expirationTime;
                    c > o
                        ? (null === i && ((i = s), (a = u)), (0 === l || l > c) && (l = c))
                        : ((u = Ho(e, 0, s, u, n, r)), null !== s.callback && ((e.effectTag |= 32), (s.nextEffect = null), null === t.lastEffect ? (t.firstEffect = t.lastEffect = s) : ((t.lastEffect.nextEffect = s), (t.lastEffect = s)))),
                        (s = s.next);
                }
                for (c = null, s = t.firstCapturedUpdate; null !== s; ) {
                    var p = s.expirationTime;
                    p > o
                        ? (null === c && ((c = s), null === i && (a = u)), (0 === l || l > p) && (l = p))
                        : ((u = Ho(e, 0, s, u, n, r)),
                          null !== s.callback &&
                              ((e.effectTag |= 32), (s.nextEffect = null), null === t.lastCapturedEffect ? (t.firstCapturedEffect = t.lastCapturedEffect = s) : ((t.lastCapturedEffect.nextEffect = s), (t.lastCapturedEffect = s)))),
                        (s = s.next);
                }
                null === i && (t.lastUpdate = null),
                    null === c ? (t.lastCapturedUpdate = null) : (e.effectTag |= 32),
                    null === i && null === c && (a = u),
                    (t.baseState = a),
                    (t.firstUpdate = i),
                    (t.firstCapturedUpdate = c),
                    (t.expirationTime = l),
                    (e.memoizedState = u);
            }
        }
        function qo(e, t) {
            "function" != typeof e && f("191", e), e.call(t);
        }
        function Qo(e, t, n) {
            for (
                null !== t.firstCapturedUpdate && (null !== t.lastUpdate && ((t.lastUpdate.next = t.firstCapturedUpdate), (t.lastUpdate = t.lastCapturedUpdate)), (t.firstCapturedUpdate = t.lastCapturedUpdate = null)),
                    e = t.firstEffect,
                    t.firstEffect = t.lastEffect = null;
                null !== e;

            ) {
                var r = e.callback;
                null !== r && ((e.callback = null), qo(r, n)), (e = e.nextEffect);
            }
            for (e = t.firstCapturedEffect, t.firstCapturedEffect = t.lastCapturedEffect = null; null !== e; ) null !== (t = e.callback) && ((e.callback = null), qo(t, n)), (e = e.nextEffect);
        }
        function Yo(e, t) {
            return { value: e, source: t, stack: kt(t) };
        }
        var Go = uo(null),
            Xo = uo(null),
            Zo = uo(0);
        function Jo(e) {
            var t = e.type._context;
            po(Zo, t._changedBits), po(Xo, t._currentValue), po(Go, e), (t._currentValue = e.pendingProps.value), (t._changedBits = e.stateNode);
        }
        function ea(e) {
            var t = Zo.current,
                n = Xo.current;
            co(Go), co(Xo), co(Zo), ((e = e.type._context)._currentValue = n), (e._changedBits = t);
        }
        var ta = {},
            na = uo(ta),
            ra = uo(ta),
            oa = uo(ta);
        function aa(e) {
            return e === ta && f("174"), e;
        }
        function ia(e, t) {
            po(oa, t), po(ra, e), po(na, ta);
            var n = t.nodeType;
            switch (n) {
                case 9:
                case 11:
                    t = (t = t.documentElement) ? t.namespaceURI : Lr(null, "");
                    break;
                default:
                    t = Lr((t = (n = 8 === n ? t.parentNode : t).namespaceURI || null), (n = n.tagName));
            }
            co(na), po(na, t);
        }
        function la(e) {
            co(na), co(ra), co(oa);
        }
        function sa(e) {
            ra.current === e && (co(na), co(ra));
        }
        function ua(e, t, n) {
            var r = e.memoizedState;
            (r = null == (t = t(n, r)) ? r : i({}, r, t)), (e.memoizedState = r), null !== (e = e.updateQueue) && 0 === e.expirationTime && (e.baseState = r);
        }
        var ca = {
            isMounted: function (e) {
                return !!(e = e._reactInternalFiber) && 2 === un(e);
            },
            enqueueSetState: function (e, t, n) {
                e = e._reactInternalFiber;
                var r = wi(),
                    o = zo((r = bi(r, e)));
                (o.payload = t), null != n && (o.callback = n), $o(e, o, r), xi(e, r);
            },
            enqueueReplaceState: function (e, t, n) {
                e = e._reactInternalFiber;
                var r = wi(),
                    o = zo((r = bi(r, e)));
                (o.tag = 1), (o.payload = t), null != n && (o.callback = n), $o(e, o, r), xi(e, r);
            },
            enqueueForceUpdate: function (e, t) {
                e = e._reactInternalFiber;
                var n = wi(),
                    r = zo((n = bi(n, e)));
                (r.tag = 2), null != t && (r.callback = t), $o(e, r, n), xi(e, n);
            },
        };
        function pa(e, t, n, r, o, a) {
            var i = e.stateNode;
            return (e = e.type), "function" == typeof i.shouldComponentUpdate ? i.shouldComponentUpdate(n, o, a) : !e.prototype || !e.prototype.isPureReactComponent || !u(t, n) || !u(r, o);
        }
        function fa(e, t, n, r) {
            (e = t.state),
                "function" == typeof t.componentWillReceiveProps && t.componentWillReceiveProps(n, r),
                "function" == typeof t.UNSAFE_componentWillReceiveProps && t.UNSAFE_componentWillReceiveProps(n, r),
                t.state !== e && ca.enqueueReplaceState(t, t.state, null);
        }
        function da(e, t) {
            var n = e.type,
                r = e.stateNode,
                o = e.pendingProps,
                a = go(e);
            (r.props = o),
                (r.state = e.memoizedState),
                (r.refs = p),
                (r.context = vo(e, a)),
                null !== (a = e.updateQueue) && (Ko(e, a, o, r, t), (r.state = e.memoizedState)),
                "function" == typeof (a = e.type.getDerivedStateFromProps) && (ua(e, a, o), (r.state = e.memoizedState)),
                "function" == typeof n.getDerivedStateFromProps ||
                    "function" == typeof r.getSnapshotBeforeUpdate ||
                    ("function" != typeof r.UNSAFE_componentWillMount && "function" != typeof r.componentWillMount) ||
                    ((n = r.state),
                    "function" == typeof r.componentWillMount && r.componentWillMount(),
                    "function" == typeof r.UNSAFE_componentWillMount && r.UNSAFE_componentWillMount(),
                    n !== r.state && ca.enqueueReplaceState(r, r.state, null),
                    null !== (a = e.updateQueue) && (Ko(e, a, o, r, t), (r.state = e.memoizedState))),
                "function" == typeof r.componentDidMount && (e.effectTag |= 4);
        }
        var ma = Array.isArray;
        function ha(e, t, n) {
            if (null !== (e = n.ref) && "function" != typeof e && "object" != typeof e) {
                if (n._owner) {
                    n = n._owner;
                    var r = void 0;
                    n && (2 !== n.tag && f("110"), (r = n.stateNode)), r || f("147", e);
                    var o = "" + e;
                    return null !== t && null !== t.ref && "function" == typeof t.ref && t.ref._stringRef === o
                        ? t.ref
                        : (((t = function (e) {
                              var t = r.refs === p ? (r.refs = {}) : r.refs;
                              null === e ? delete t[o] : (t[o] = e);
                          })._stringRef = o),
                          t);
                }
                "string" != typeof e && f("148"), n._owner || f("254", e);
            }
            return e;
        }
        function ga(e, t) {
            "textarea" !== e.type && f("31", "[object Object]" === Object.prototype.toString.call(t) ? "object with keys {" + Object.keys(t).join(", ") + "}" : t, "");
        }
        function va(e) {
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
            function o(e, t, n) {
                return ((e = So(e, t, n)).index = 0), (e.sibling = null), e;
            }
            function a(t, n, r) {
                return (t.index = r), e ? (null !== (r = t.alternate) ? ((r = r.index) < n ? ((t.effectTag = 2), n) : r) : ((t.effectTag = 2), n)) : n;
            }
            function i(t) {
                return e && null === t.alternate && (t.effectTag = 2), t;
            }
            function l(e, t, n, r) {
                return null === t || 6 !== t.tag ? (((t = Po(n, e.mode, r)).return = e), t) : (((t = o(t, n, r)).return = e), t);
            }
            function s(e, t, n, r) {
                return null !== t && t.type === n.type ? (((r = o(t, n.props, r)).ref = ha(e, t, n)), (r.return = e), r) : (((r = To(n, e.mode, r)).ref = ha(e, t, n)), (r.return = e), r);
            }
            function u(e, t, n, r) {
                return null === t || 4 !== t.tag || t.stateNode.containerInfo !== n.containerInfo || t.stateNode.implementation !== n.implementation
                    ? (((t = Oo(n, e.mode, r)).return = e), t)
                    : (((t = o(t, n.children || [], r)).return = e), t);
            }
            function c(e, t, n, r, a) {
                return null === t || 10 !== t.tag ? (((t = _o(n, e.mode, r, a)).return = e), t) : (((t = o(t, n, r)).return = e), t);
            }
            function p(e, t, n) {
                if ("string" == typeof t || "number" == typeof t) return ((t = Po("" + t, e.mode, n)).return = e), t;
                if ("object" == typeof t && null !== t) {
                    switch (t.$$typeof) {
                        case ut:
                            return ((n = To(t, e.mode, n)).ref = ha(e, null, t)), (n.return = e), n;
                        case ct:
                            return ((t = Oo(t, e.mode, n)).return = e), t;
                    }
                    if (ma(t) || xt(t)) return ((t = _o(t, e.mode, n, null)).return = e), t;
                    ga(e, t);
                }
                return null;
            }
            function d(e, t, n, r) {
                var o = null !== t ? t.key : null;
                if ("string" == typeof n || "number" == typeof n) return null !== o ? null : l(e, t, "" + n, r);
                if ("object" == typeof n && null !== n) {
                    switch (n.$$typeof) {
                        case ut:
                            return n.key === o ? (n.type === pt ? c(e, t, n.props.children, r, o) : s(e, t, n, r)) : null;
                        case ct:
                            return n.key === o ? u(e, t, n, r) : null;
                    }
                    if (ma(n) || xt(n)) return null !== o ? null : c(e, t, n, r, null);
                    ga(e, n);
                }
                return null;
            }
            function m(e, t, n, r, o) {
                if ("string" == typeof r || "number" == typeof r) return l(t, (e = e.get(n) || null), "" + r, o);
                if ("object" == typeof r && null !== r) {
                    switch (r.$$typeof) {
                        case ut:
                            return (e = e.get(null === r.key ? n : r.key) || null), r.type === pt ? c(t, e, r.props.children, o, r.key) : s(t, e, r, o);
                        case ct:
                            return u(t, (e = e.get(null === r.key ? n : r.key) || null), r, o);
                    }
                    if (ma(r) || xt(r)) return c(t, (e = e.get(n) || null), r, o, null);
                    ga(t, r);
                }
                return null;
            }
            function h(o, i, l, s) {
                for (var u = null, c = null, f = i, h = (i = 0), g = null; null !== f && h < l.length; h++) {
                    f.index > h ? ((g = f), (f = null)) : (g = f.sibling);
                    var v = d(o, f, l[h], s);
                    if (null === v) {
                        null === f && (f = g);
                        break;
                    }
                    e && f && null === v.alternate && t(o, f), (i = a(v, i, h)), null === c ? (u = v) : (c.sibling = v), (c = v), (f = g);
                }
                if (h === l.length) return n(o, f), u;
                if (null === f) {
                    for (; h < l.length; h++) (f = p(o, l[h], s)) && ((i = a(f, i, h)), null === c ? (u = f) : (c.sibling = f), (c = f));
                    return u;
                }
                for (f = r(o, f); h < l.length; h++) (g = m(f, o, h, l[h], s)) && (e && null !== g.alternate && f.delete(null === g.key ? h : g.key), (i = a(g, i, h)), null === c ? (u = g) : (c.sibling = g), (c = g));
                return (
                    e &&
                        f.forEach(function (e) {
                            return t(o, e);
                        }),
                    u
                );
            }
            function g(o, i, l, s) {
                var u = xt(l);
                "function" != typeof u && f("150"), null == (l = u.call(l)) && f("151");
                for (var c = (u = null), h = i, g = (i = 0), v = null, y = l.next(); null !== h && !y.done; g++, y = l.next()) {
                    h.index > g ? ((v = h), (h = null)) : (v = h.sibling);
                    var b = d(o, h, y.value, s);
                    if (null === b) {
                        h || (h = v);
                        break;
                    }
                    e && h && null === b.alternate && t(o, h), (i = a(b, i, g)), null === c ? (u = b) : (c.sibling = b), (c = b), (h = v);
                }
                if (y.done) return n(o, h), u;
                if (null === h) {
                    for (; !y.done; g++, y = l.next()) null !== (y = p(o, y.value, s)) && ((i = a(y, i, g)), null === c ? (u = y) : (c.sibling = y), (c = y));
                    return u;
                }
                for (h = r(o, h); !y.done; g++, y = l.next()) null !== (y = m(h, o, g, y.value, s)) && (e && null !== y.alternate && h.delete(null === y.key ? g : y.key), (i = a(y, i, g)), null === c ? (u = y) : (c.sibling = y), (c = y));
                return (
                    e &&
                        h.forEach(function (e) {
                            return t(o, e);
                        }),
                    u
                );
            }
            return function (e, r, a, l) {
                var s = "object" == typeof a && null !== a && a.type === pt && null === a.key;
                s && (a = a.props.children);
                var u = "object" == typeof a && null !== a;
                if (u)
                    switch (a.$$typeof) {
                        case ut:
                            e: {
                                for (u = a.key, s = r; null !== s; ) {
                                    if (s.key === u) {
                                        if (10 === s.tag ? a.type === pt : s.type === a.type) {
                                            n(e, s.sibling), ((r = o(s, a.type === pt ? a.props.children : a.props, l)).ref = ha(e, s, a)), (r.return = e), (e = r);
                                            break e;
                                        }
                                        n(e, s);
                                        break;
                                    }
                                    t(e, s), (s = s.sibling);
                                }
                                a.type === pt ? (((r = _o(a.props.children, e.mode, l, a.key)).return = e), (e = r)) : (((l = To(a, e.mode, l)).ref = ha(e, r, a)), (l.return = e), (e = l));
                            }
                            return i(e);
                        case ct:
                            e: {
                                for (s = a.key; null !== r; ) {
                                    if (r.key === s) {
                                        if (4 === r.tag && r.stateNode.containerInfo === a.containerInfo && r.stateNode.implementation === a.implementation) {
                                            n(e, r.sibling), ((r = o(r, a.children || [], l)).return = e), (e = r);
                                            break e;
                                        }
                                        n(e, r);
                                        break;
                                    }
                                    t(e, r), (r = r.sibling);
                                }
                                ((r = Oo(a, e.mode, l)).return = e), (e = r);
                            }
                            return i(e);
                    }
                if ("string" == typeof a || "number" == typeof a) return (a = "" + a), null !== r && 6 === r.tag ? (n(e, r.sibling), ((r = o(r, a, l)).return = e), (e = r)) : (n(e, r), ((r = Po(a, e.mode, l)).return = e), (e = r)), i(e);
                if (ma(a)) return h(e, r, a, l);
                if (xt(a)) return g(e, r, a, l);
                if ((u && ga(e, a), void 0 === a && !s))
                    switch (e.tag) {
                        case 2:
                        case 1:
                            f("152", (l = e.type).displayName || l.name || "Component");
                    }
                return n(e, r);
            };
        }
        var ya = va(!0),
            ba = va(!1),
            xa = null,
            wa = null,
            ka = !1;
        function Ea(e, t) {
            var n = new Ao(5, null, null, 0);
            (n.type = "DELETED"), (n.stateNode = t), (n.return = e), (n.effectTag = 8), null !== e.lastEffect ? ((e.lastEffect.nextEffect = n), (e.lastEffect = n)) : (e.firstEffect = e.lastEffect = n);
        }
        function Ca(e, t) {
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
        function Aa(e) {
            if (ka) {
                var t = wa;
                if (t) {
                    var n = t;
                    if (!Ca(e, t)) {
                        if (!(t = ao(n)) || !Ca(e, t)) return (e.effectTag |= 2), (ka = !1), void (xa = e);
                        Ea(xa, n);
                    }
                    (xa = e), (wa = io(t));
                } else (e.effectTag |= 2), (ka = !1), (xa = e);
            }
        }
        function Sa(e) {
            for (e = e.return; null !== e && 5 !== e.tag && 3 !== e.tag; ) e = e.return;
            xa = e;
        }
        function Ta(e) {
            if (e !== xa) return !1;
            if (!ka) return Sa(e), (ka = !0), !1;
            var t = e.type;
            if (5 !== e.tag || ("head" !== t && "body" !== t && !to(t, e.memoizedProps))) for (t = wa; t; ) Ea(e, t), (t = ao(t));
            return Sa(e), (wa = xa ? ao(e.stateNode) : null), !0;
        }
        function _a() {
            (wa = xa = null), (ka = !1);
        }
        function Pa(e, t, n) {
            Oa(e, t, n, t.expirationTime);
        }
        function Oa(e, t, n, r) {
            t.child = null === e ? ba(t, null, n, r) : ya(t, e.child, n, r);
        }
        function Na(e, t) {
            var n = t.ref;
            ((null === e && null !== n) || (null !== e && e.ref !== n)) && (t.effectTag |= 128);
        }
        function La(e, t, n, r, o) {
            Na(e, t);
            var a = 0 != (64 & t.effectTag);
            if (!n && !a) return r && Co(t, !1), ja(e, t);
            (n = t.stateNode), (lt.current = t);
            var i = a ? null : n.render();
            return (t.effectTag |= 1), a && (Oa(e, t, null, o), (t.child = null)), Oa(e, t, i, o), (t.memoizedState = n.state), (t.memoizedProps = n.props), r && Co(t, !0), t.child;
        }
        function Ra(e) {
            var t = e.stateNode;
            t.pendingContext ? wo(0, t.pendingContext, t.pendingContext !== t.context) : t.context && wo(0, t.context, !1), ia(e, t.containerInfo);
        }
        function Ma(e, t, n, r) {
            var o = e.child;
            for (null !== o && (o.return = e); null !== o; ) {
                switch (o.tag) {
                    case 12:
                        var a = 0 | o.stateNode;
                        if (o.type === t && 0 != (a & n)) {
                            for (a = o; null !== a; ) {
                                var i = a.alternate;
                                if (0 === a.expirationTime || a.expirationTime > r) (a.expirationTime = r), null !== i && (0 === i.expirationTime || i.expirationTime > r) && (i.expirationTime = r);
                                else {
                                    if (null === i || !(0 === i.expirationTime || i.expirationTime > r)) break;
                                    i.expirationTime = r;
                                }
                                a = a.return;
                            }
                            a = null;
                        } else a = o.child;
                        break;
                    case 13:
                        a = o.type === e.type ? null : o.child;
                        break;
                    default:
                        a = o.child;
                }
                if (null !== a) a.return = o;
                else
                    for (a = o; null !== a; ) {
                        if (a === e) {
                            a = null;
                            break;
                        }
                        if (null !== (o = a.sibling)) {
                            (o.return = a.return), (a = o);
                            break;
                        }
                        a = a.return;
                    }
                o = a;
            }
        }
        function ja(e, t) {
            if ((null !== e && t.child !== e.child && f("153"), null !== t.child)) {
                var n = So((e = t.child), e.pendingProps, e.expirationTime);
                for (t.child = n, n.return = t; null !== e.sibling; ) (e = e.sibling), ((n = n.sibling = So(e, e.pendingProps, e.expirationTime)).return = t);
                n.sibling = null;
            }
            return t.child;
        }
        function Ua(e, t, n) {
            if (0 === t.expirationTime || t.expirationTime > n) {
                switch (t.tag) {
                    case 3:
                        Ra(t);
                        break;
                    case 2:
                        Eo(t);
                        break;
                    case 4:
                        ia(t, t.stateNode.containerInfo);
                        break;
                    case 13:
                        Jo(t);
                }
                return null;
            }
            switch (t.tag) {
                case 0:
                    null !== e && f("155");
                    var r = t.type,
                        o = t.pendingProps,
                        a = go(t);
                    return (
                        (r = r(o, (a = vo(t, a)))),
                        (t.effectTag |= 1),
                        "object" == typeof r && null !== r && "function" == typeof r.render && void 0 === r.$$typeof
                            ? ((a = t.type),
                              (t.tag = 2),
                              (t.memoizedState = null !== r.state && void 0 !== r.state ? r.state : null),
                              "function" == typeof (a = a.getDerivedStateFromProps) && ua(t, a, o),
                              (o = Eo(t)),
                              (r.updater = ca),
                              (t.stateNode = r),
                              (r._reactInternalFiber = t),
                              da(t, n),
                              (e = La(e, t, !0, o, n)))
                            : ((t.tag = 1), Pa(e, t, r), (t.memoizedProps = o), (e = t.child)),
                        e
                    );
                case 1:
                    return (o = t.type), (n = t.pendingProps), mo.current || t.memoizedProps !== n ? ((o = o(n, (r = vo(t, (r = go(t)))))), (t.effectTag |= 1), Pa(e, t, o), (t.memoizedProps = n), (e = t.child)) : (e = ja(e, t)), e;
                case 2:
                    if (((o = Eo(t)), null === e))
                        if (null === t.stateNode) {
                            var i = t.pendingProps,
                                l = t.type;
                            r = go(t);
                            var s = 2 === t.tag && null != t.type.contextTypes;
                            (i = new l(i, (a = s ? vo(t, r) : p))),
                                (t.memoizedState = null !== i.state && void 0 !== i.state ? i.state : null),
                                (i.updater = ca),
                                (t.stateNode = i),
                                (i._reactInternalFiber = t),
                                s && (((s = t.stateNode).__reactInternalMemoizedUnmaskedChildContext = r), (s.__reactInternalMemoizedMaskedChildContext = a)),
                                da(t, n),
                                (r = !0);
                        } else {
                            (l = t.type), (r = t.stateNode), (s = t.memoizedProps), (a = t.pendingProps), (r.props = s);
                            var u = r.context;
                            i = vo(t, (i = go(t)));
                            var c = l.getDerivedStateFromProps;
                            (l = "function" == typeof c || "function" == typeof r.getSnapshotBeforeUpdate) ||
                                ("function" != typeof r.UNSAFE_componentWillReceiveProps && "function" != typeof r.componentWillReceiveProps) ||
                                ((s !== a || u !== i) && fa(t, r, a, i)),
                                (Io = !1);
                            var d = t.memoizedState;
                            u = r.state = d;
                            var m = t.updateQueue;
                            null !== m && (Ko(t, m, a, r, n), (u = t.memoizedState)),
                                s !== a || d !== u || mo.current || Io
                                    ? ("function" == typeof c && (ua(t, c, a), (u = t.memoizedState)),
                                      (s = Io || pa(t, s, a, d, u, i))
                                          ? (l ||
                                                ("function" != typeof r.UNSAFE_componentWillMount && "function" != typeof r.componentWillMount) ||
                                                ("function" == typeof r.componentWillMount && r.componentWillMount(), "function" == typeof r.UNSAFE_componentWillMount && r.UNSAFE_componentWillMount()),
                                            "function" == typeof r.componentDidMount && (t.effectTag |= 4))
                                          : ("function" == typeof r.componentDidMount && (t.effectTag |= 4), (t.memoizedProps = a), (t.memoizedState = u)),
                                      (r.props = a),
                                      (r.state = u),
                                      (r.context = i),
                                      (r = s))
                                    : ("function" == typeof r.componentDidMount && (t.effectTag |= 4), (r = !1));
                        }
                    else
                        (l = t.type),
                            (r = t.stateNode),
                            (a = t.memoizedProps),
                            (s = t.pendingProps),
                            (r.props = a),
                            (u = r.context),
                            (i = vo(t, (i = go(t)))),
                            (l = "function" == typeof (c = l.getDerivedStateFromProps) || "function" == typeof r.getSnapshotBeforeUpdate) ||
                                ("function" != typeof r.UNSAFE_componentWillReceiveProps && "function" != typeof r.componentWillReceiveProps) ||
                                ((a !== s || u !== i) && fa(t, r, s, i)),
                            (Io = !1),
                            (u = t.memoizedState),
                            (d = r.state = u),
                            null !== (m = t.updateQueue) && (Ko(t, m, s, r, n), (d = t.memoizedState)),
                            a !== s || u !== d || mo.current || Io
                                ? ("function" == typeof c && (ua(t, c, s), (d = t.memoizedState)),
                                  (c = Io || pa(t, a, s, u, d, i))
                                      ? (l ||
                                            ("function" != typeof r.UNSAFE_componentWillUpdate && "function" != typeof r.componentWillUpdate) ||
                                            ("function" == typeof r.componentWillUpdate && r.componentWillUpdate(s, d, i), "function" == typeof r.UNSAFE_componentWillUpdate && r.UNSAFE_componentWillUpdate(s, d, i)),
                                        "function" == typeof r.componentDidUpdate && (t.effectTag |= 4),
                                        "function" == typeof r.getSnapshotBeforeUpdate && (t.effectTag |= 256))
                                      : ("function" != typeof r.componentDidUpdate || (a === e.memoizedProps && u === e.memoizedState) || (t.effectTag |= 4),
                                        "function" != typeof r.getSnapshotBeforeUpdate || (a === e.memoizedProps && u === e.memoizedState) || (t.effectTag |= 256),
                                        (t.memoizedProps = s),
                                        (t.memoizedState = d)),
                                  (r.props = s),
                                  (r.state = d),
                                  (r.context = i),
                                  (r = c))
                                : ("function" != typeof r.componentDidUpdate || (a === e.memoizedProps && u === e.memoizedState) || (t.effectTag |= 4),
                                  "function" != typeof r.getSnapshotBeforeUpdate || (a === e.memoizedProps && u === e.memoizedState) || (t.effectTag |= 256),
                                  (r = !1));
                    return La(e, t, r, o, n);
                case 3:
                    return (
                        Ra(t),
                        null !== (o = t.updateQueue)
                            ? ((r = null !== (r = t.memoizedState) ? r.element : null),
                              Ko(t, o, t.pendingProps, null, n),
                              (o = t.memoizedState.element) === r
                                  ? (_a(), (e = ja(e, t)))
                                  : ((r = t.stateNode),
                                    (r = (null === e || null === e.child) && r.hydrate) && ((wa = io(t.stateNode.containerInfo)), (xa = t), (r = ka = !0)),
                                    r ? ((t.effectTag |= 2), (t.child = ba(t, null, o, n))) : (_a(), Pa(e, t, o)),
                                    (e = t.child)))
                            : (_a(), (e = ja(e, t))),
                        e
                    );
                case 5:
                    return (
                        aa(oa.current),
                        (o = aa(na.current)) !== (r = Lr(o, t.type)) && (po(ra, t), po(na, r)),
                        null === e && Aa(t),
                        (o = t.type),
                        (s = t.memoizedProps),
                        (r = t.pendingProps),
                        (a = null !== e ? e.memoizedProps : null),
                        mo.current || s !== r || ((s = 1 & t.mode && !!r.hidden) && (t.expirationTime = 1073741823), s && 1073741823 === n)
                            ? ((s = r.children),
                              to(o, r) ? (s = null) : a && to(o, a) && (t.effectTag |= 16),
                              Na(e, t),
                              1073741823 !== n && 1 & t.mode && r.hidden ? ((t.expirationTime = 1073741823), (t.memoizedProps = r), (e = null)) : (Pa(e, t, s), (t.memoizedProps = r), (e = t.child)))
                            : (e = ja(e, t)),
                        e
                    );
                case 6:
                    return null === e && Aa(t), (t.memoizedProps = t.pendingProps), null;
                case 16:
                    return null;
                case 4:
                    return ia(t, t.stateNode.containerInfo), (o = t.pendingProps), mo.current || t.memoizedProps !== o ? (null === e ? (t.child = ya(t, null, o, n)) : Pa(e, t, o), (t.memoizedProps = o), (e = t.child)) : (e = ja(e, t)), e;
                case 14:
                    return (
                        (o = t.type.render), (n = t.pendingProps), (r = t.ref), mo.current || t.memoizedProps !== n || r !== (null !== e ? e.ref : null) ? (Pa(e, t, (o = o(n, r))), (t.memoizedProps = n), (e = t.child)) : (e = ja(e, t)), e
                    );
                case 10:
                    return (n = t.pendingProps), mo.current || t.memoizedProps !== n ? (Pa(e, t, n), (t.memoizedProps = n), (e = t.child)) : (e = ja(e, t)), e;
                case 11:
                    return (n = t.pendingProps.children), mo.current || (null !== n && t.memoizedProps !== n) ? (Pa(e, t, n), (t.memoizedProps = n), (e = t.child)) : (e = ja(e, t)), e;
                case 15:
                    return (n = t.pendingProps), t.memoizedProps === n ? (e = ja(e, t)) : (Pa(e, t, n.children), (t.memoizedProps = n), (e = t.child)), e;
                case 13:
                    return (function (e, t, n) {
                        var r = t.type._context,
                            o = t.pendingProps,
                            a = t.memoizedProps,
                            i = !0;
                        if (mo.current) i = !1;
                        else if (a === o) return (t.stateNode = 0), Jo(t), ja(e, t);
                        var l = o.value;
                        if (((t.memoizedProps = o), null === a)) l = 1073741823;
                        else if (a.value === o.value) {
                            if (a.children === o.children && i) return (t.stateNode = 0), Jo(t), ja(e, t);
                            l = 0;
                        } else {
                            var s = a.value;
                            if ((s === l && (0 !== s || 1 / s == 1 / l)) || (s != s && l != l)) {
                                if (a.children === o.children && i) return (t.stateNode = 0), Jo(t), ja(e, t);
                                l = 0;
                            } else if (((l = "function" == typeof r._calculateChangedBits ? r._calculateChangedBits(s, l) : 1073741823), 0 === (l |= 0))) {
                                if (a.children === o.children && i) return (t.stateNode = 0), Jo(t), ja(e, t);
                            } else Ma(t, r, l, n);
                        }
                        return (t.stateNode = l), Jo(t), Pa(e, t, o.children), t.child;
                    })(e, t, n);
                case 12:
                    e: if (((r = t.type), (a = t.pendingProps), (s = t.memoizedProps), (o = r._currentValue), (i = r._changedBits), mo.current || 0 !== i || s !== a)) {
                        if (((t.memoizedProps = a), null == (l = a.unstable_observedBits) && (l = 1073741823), (t.stateNode = l), 0 != (i & l))) Ma(t, r, i, n);
                        else if (s === a) {
                            e = ja(e, t);
                            break e;
                        }
                        (n = (n = a.children)(o)), (t.effectTag |= 1), Pa(e, t, n), (e = t.child);
                    } else e = ja(e, t);
                    return e;
                default:
                    f("156");
            }
        }
        function Ia(e) {
            e.effectTag |= 4;
        }
        var Fa, Da;
        function za(e, t) {
            var n = t.pendingProps;
            switch (t.tag) {
                case 1:
                    return null;
                case 2:
                    return bo(t), null;
                case 3:
                    la(), xo();
                    var r = t.stateNode;
                    return r.pendingContext && ((r.context = r.pendingContext), (r.pendingContext = null)), (null !== e && null !== e.child) || (Ta(t), (t.effectTag &= -3)), null;
                case 5:
                    sa(t), (r = aa(oa.current));
                    var o = t.type;
                    if (null !== e && null != t.stateNode) {
                        var a = e.memoizedProps,
                            i = t.stateNode;
                        aa(na.current);
                        (i = qr(i, o, a, n, r)), Fa(0, t, i), e.ref !== t.ref && (t.effectTag |= 128);
                    } else {
                        if (!n) return null === t.stateNode && f("166"), null;
                        if (((e = aa(na.current)), Ta(t))) (n = t.stateNode), (o = t.type), (a = t.memoizedProps), (n[W] = t), (n[V] = a), (r = Yr(n, o, a, e, r)), (t.updateQueue = r), null !== r && Ia(t);
                        else {
                            ((e = Vr(o, n, r, e))[W] = t), (e[V] = n);
                            e: for (a = t.child; null !== a; ) {
                                if (5 === a.tag || 6 === a.tag) e.appendChild(a.stateNode);
                                else if (4 !== a.tag && null !== a.child) {
                                    (a.child.return = a), (a = a.child);
                                    continue;
                                }
                                if (a === t) break;
                                for (; null === a.sibling; ) {
                                    if (null === a.return || a.return === t) break e;
                                    a = a.return;
                                }
                                (a.sibling.return = a.return), (a = a.sibling);
                            }
                            Kr(e, o, n, r), eo(o, n) && Ia(t), (t.stateNode = e);
                        }
                        null !== t.ref && (t.effectTag |= 128);
                    }
                    return null;
                case 6:
                    if (e && null != t.stateNode) Da(0, t, e.memoizedProps, n);
                    else {
                        if ("string" != typeof n) return null === t.stateNode && f("166"), null;
                        (r = aa(oa.current)), aa(na.current), Ta(t) ? ((r = t.stateNode), (n = t.memoizedProps), (r[W] = t), Gr(r, n) && Ia(t)) : (((r = Hr(n, r))[W] = t), (t.stateNode = r));
                    }
                    return null;
                case 14:
                case 16:
                case 10:
                case 11:
                case 15:
                    return null;
                case 4:
                    return la(), null;
                case 13:
                    return ea(t), null;
                case 12:
                    return null;
                case 0:
                    f("167");
                default:
                    f("156");
            }
        }
        function Ba(e, t) {
            var n = t.source;
            null === t.stack && null !== n && kt(n), null !== n && wt(n), (t = t.value), null !== e && 2 === e.tag && wt(e);
            try {
                (t && t.suppressReactErrorLogging) || console.error(t);
            } catch (e) {
                (e && e.suppressReactErrorLogging) || console.error(e);
            }
        }
        function $a(e) {
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
        function Wa(e) {
            switch ((Uo(e), e.tag)) {
                case 2:
                    $a(e);
                    var t = e.stateNode;
                    if ("function" == typeof t.componentWillUnmount)
                        try {
                            (t.props = e.memoizedProps), (t.state = e.memoizedState), t.componentWillUnmount();
                        } catch (t) {
                            vi(e, t);
                        }
                    break;
                case 5:
                    $a(e);
                    break;
                case 4:
                    Ka(e);
            }
        }
        function Va(e) {
            return 5 === e.tag || 3 === e.tag || 4 === e.tag;
        }
        function Ha(e) {
            e: {
                for (var t = e.return; null !== t; ) {
                    if (Va(t)) {
                        var n = t;
                        break e;
                    }
                    t = t.return;
                }
                f("160"), (n = void 0);
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
                    f("161");
            }
            16 & n.effectTag && (jr(t, ""), (n.effectTag &= -17));
            e: t: for (n = e; ; ) {
                for (; null === n.sibling; ) {
                    if (null === n.return || Va(n.return)) {
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
            for (var o = e; ; ) {
                if (5 === o.tag || 6 === o.tag)
                    if (n)
                        if (r) {
                            var a = t,
                                i = o.stateNode,
                                l = n;
                            8 === a.nodeType ? a.parentNode.insertBefore(i, l) : a.insertBefore(i, l);
                        } else t.insertBefore(o.stateNode, n);
                    else r ? ((a = t), (i = o.stateNode), 8 === a.nodeType ? a.parentNode.insertBefore(i, a) : a.appendChild(i)) : t.appendChild(o.stateNode);
                else if (4 !== o.tag && null !== o.child) {
                    (o.child.return = o), (o = o.child);
                    continue;
                }
                if (o === e) break;
                for (; null === o.sibling; ) {
                    if (null === o.return || o.return === e) return;
                    o = o.return;
                }
                (o.sibling.return = o.return), (o = o.sibling);
            }
        }
        function Ka(e) {
            for (var t = e, n = !1, r = void 0, o = void 0; ; ) {
                if (!n) {
                    n = t.return;
                    e: for (;;) {
                        switch ((null === n && f("160"), n.tag)) {
                            case 5:
                                (r = n.stateNode), (o = !1);
                                break e;
                            case 3:
                            case 4:
                                (r = n.stateNode.containerInfo), (o = !0);
                                break e;
                        }
                        n = n.return;
                    }
                    n = !0;
                }
                if (5 === t.tag || 6 === t.tag) {
                    e: for (var a = t, i = a; ; )
                        if ((Wa(i), null !== i.child && 4 !== i.tag)) (i.child.return = i), (i = i.child);
                        else {
                            if (i === a) break;
                            for (; null === i.sibling; ) {
                                if (null === i.return || i.return === a) break e;
                                i = i.return;
                            }
                            (i.sibling.return = i.return), (i = i.sibling);
                        }
                    o ? ((a = r), (i = t.stateNode), 8 === a.nodeType ? a.parentNode.removeChild(i) : a.removeChild(i)) : r.removeChild(t.stateNode);
                } else if ((4 === t.tag ? (r = t.stateNode.containerInfo) : Wa(t), null !== t.child)) {
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
        function qa(e, t) {
            switch (t.tag) {
                case 2:
                    break;
                case 5:
                    var n = t.stateNode;
                    if (null != n) {
                        var r = t.memoizedProps;
                        e = null !== e ? e.memoizedProps : r;
                        var o = t.type,
                            a = t.updateQueue;
                        (t.updateQueue = null), null !== a && ((n[V] = r), Qr(n, a, o, e, r));
                    }
                    break;
                case 6:
                    null === t.stateNode && f("162"), (t.stateNode.nodeValue = t.memoizedProps);
                    break;
                case 3:
                case 15:
                case 16:
                    break;
                default:
                    f("163");
            }
        }
        function Qa(e, t, n) {
            ((n = zo(n)).tag = 3), (n.payload = { element: null });
            var r = t.value;
            return (
                (n.callback = function () {
                    Ji(r), Ba(e, t);
                }),
                n
            );
        }
        function Ya(e, t, n) {
            (n = zo(n)).tag = 3;
            var r = e.stateNode;
            return (
                null !== r &&
                    "function" == typeof r.componentDidCatch &&
                    (n.callback = function () {
                        null === fi ? (fi = new Set([this])) : fi.add(this);
                        var n = t.value,
                            r = t.stack;
                        Ba(e, t), this.componentDidCatch(n, { componentStack: null !== r ? r : "" });
                    }),
                n
            );
        }
        function Ga(e, t, n, r, o, a) {
            (n.effectTag |= 512), (n.firstEffect = n.lastEffect = null), (r = Yo(r, n)), (e = t);
            do {
                switch (e.tag) {
                    case 3:
                        return (e.effectTag |= 1024), void Wo(e, (r = Qa(e, r, a)), a);
                    case 2:
                        if (((t = r), (n = e.stateNode), 0 == (64 & e.effectTag) && null !== n && "function" == typeof n.componentDidCatch && (null === fi || !fi.has(n)))) return (e.effectTag |= 1024), void Wo(e, (r = Ya(e, t, a)), a);
                }
                e = e.return;
            } while (null !== e);
        }
        function Xa(e) {
            switch (e.tag) {
                case 2:
                    bo(e);
                    var t = e.effectTag;
                    return 1024 & t ? ((e.effectTag = (-1025 & t) | 64), e) : null;
                case 3:
                    return la(), xo(), 1024 & (t = e.effectTag) ? ((e.effectTag = (-1025 & t) | 64), e) : null;
                case 5:
                    return sa(e), null;
                case 16:
                    return 1024 & (t = e.effectTag) ? ((e.effectTag = (-1025 & t) | 64), e) : null;
                case 4:
                    return la(), null;
                case 13:
                    return ea(e), null;
                default:
                    return null;
            }
        }
        (Fa = function (e, t, n) {
            (t.updateQueue = n) && Ia(t);
        }),
            (Da = function (e, t, n, r) {
                n !== r && Ia(t);
            });
        var Za = no(),
            Ja = 2,
            ei = Za,
            ti = 0,
            ni = 0,
            ri = !1,
            oi = null,
            ai = null,
            ii = 0,
            li = -1,
            si = !1,
            ui = null,
            ci = !1,
            pi = !1,
            fi = null;
        function di() {
            if (null !== oi)
                for (var e = oi.return; null !== e; ) {
                    var t = e;
                    switch (t.tag) {
                        case 2:
                            bo(t);
                            break;
                        case 3:
                            la(), xo();
                            break;
                        case 5:
                            sa(t);
                            break;
                        case 4:
                            la();
                            break;
                        case 13:
                            ea(t);
                    }
                    e = e.return;
                }
            (ai = null), (ii = 0), (li = -1), (si = !1), (oi = null), (pi = !1);
        }
        function mi(e) {
            for (;;) {
                var t = e.alternate,
                    n = e.return,
                    r = e.sibling;
                if (0 == (512 & e.effectTag)) {
                    t = za(t, e);
                    var o = e;
                    if (1073741823 === ii || 1073741823 !== o.expirationTime) {
                        var a = 0;
                        switch (o.tag) {
                            case 3:
                            case 2:
                                var i = o.updateQueue;
                                null !== i && (a = i.expirationTime);
                        }
                        for (i = o.child; null !== i; ) 0 !== i.expirationTime && (0 === a || a > i.expirationTime) && (a = i.expirationTime), (i = i.sibling);
                        o.expirationTime = a;
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
                        pi = !0;
                        break;
                    }
                    e = n;
                } else {
                    if (null !== (e = Xa(e))) return (e.effectTag &= 511), e;
                    if ((null !== n && ((n.firstEffect = n.lastEffect = null), (n.effectTag |= 512)), null !== r)) return r;
                    if (null === n) break;
                    e = n;
                }
            }
            return null;
        }
        function hi(e) {
            var t = Ua(e.alternate, e, ii);
            return null === t && (t = mi(e)), (lt.current = null), t;
        }
        function gi(e, t, n) {
            ri && f("243"), (ri = !0), (t === ii && e === ai && null !== oi) || (di(), (ii = t), (li = -1), (oi = So((ai = e).current, null, ii)), (e.pendingCommitExpirationTime = 0));
            var r = !1;
            for (si = !n || ii <= Ja; ; ) {
                try {
                    if (n) for (; null !== oi && !Zi(); ) oi = hi(oi);
                    else for (; null !== oi; ) oi = hi(oi);
                } catch (t) {
                    if (null === oi) (r = !0), Ji(t);
                    else {
                        null === oi && f("271");
                        var o = (n = oi).return;
                        if (null === o) {
                            (r = !0), Ji(t);
                            break;
                        }
                        Ga(e, o, n, t, 0, ii), (oi = mi(n));
                    }
                }
                break;
            }
            if (((ri = !1), r)) return null;
            if (null === oi) {
                if (pi) return (e.pendingCommitExpirationTime = t), e.current.alternate;
                si && f("262"),
                    0 <= li &&
                        setTimeout(function () {
                            var t = e.current.expirationTime;
                            0 !== t && (0 === e.remainingExpirationTime || e.remainingExpirationTime < t) && Wi(e, t);
                        }, li),
                    (function (e) {
                        null === Pi && f("246"), (Pi.remainingExpirationTime = e);
                    })(e.current.expirationTime);
            }
            return null;
        }
        function vi(e, t) {
            var n;
            e: {
                for (ri && !ci && f("263"), n = e.return; null !== n; ) {
                    switch (n.tag) {
                        case 2:
                            var r = n.stateNode;
                            if ("function" == typeof n.type.getDerivedStateFromCatch || ("function" == typeof r.componentDidCatch && (null === fi || !fi.has(r)))) {
                                $o(n, (e = Ya(n, (e = Yo(t, e)), 1)), 1), xi(n, 1), (n = void 0);
                                break e;
                            }
                            break;
                        case 3:
                            $o(n, (e = Qa(n, (e = Yo(t, e)), 1)), 1), xi(n, 1), (n = void 0);
                            break e;
                    }
                    n = n.return;
                }
                3 === e.tag && ($o(e, (n = Qa(e, (n = Yo(t, e)), 1)), 1), xi(e, 1)), (n = void 0);
            }
            return n;
        }
        function yi() {
            var e = 2 + 25 * (1 + (((wi() - 2 + 500) / 25) | 0));
            return e <= ti && (e = ti + 1), (ti = e);
        }
        function bi(e, t) {
            return (e = 0 !== ni ? ni : ri ? (ci ? 1 : ii) : 1 & t.mode ? (Fi ? 2 + 10 * (1 + (((e - 2 + 15) / 10) | 0)) : 2 + 25 * (1 + (((e - 2 + 500) / 25) | 0))) : 1), Fi && (0 === Ni || e > Ni) && (Ni = e), e;
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
                    !ri && 0 !== ii && t < ii && di();
                    var r = n.current.expirationTime;
                    (ri && !ci && ai === n) || Wi(n, r), Bi > zi && f("185");
                }
                e = e.return;
            }
        }
        function wi() {
            return (ei = no() - Za), (Ja = 2 + ((ei / 10) | 0));
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
        function Ei(e, t, n, r, o) {
            var a = ni;
            ni = 1;
            try {
                return e(t, n, r, o);
            } finally {
                ni = a;
            }
        }
        var Ci = null,
            Ai = null,
            Si = 0,
            Ti = void 0,
            _i = !1,
            Pi = null,
            Oi = 0,
            Ni = 0,
            Li = !1,
            Ri = !1,
            Mi = null,
            ji = null,
            Ui = !1,
            Ii = !1,
            Fi = !1,
            Di = null,
            zi = 1e3,
            Bi = 0;
        function $i(e) {
            if (0 !== Si) {
                if (e > Si) return;
                null !== Ti && oo(Ti);
            }
            var t = no() - Za;
            (Si = e), (Ti = ro(Hi, { timeout: 10 * (e - 2) - t }));
        }
        function Wi(e, t) {
            if (null === e.nextScheduledRoot) (e.remainingExpirationTime = t), null === Ai ? ((Ci = Ai = e), (e.nextScheduledRoot = e)) : ((Ai = Ai.nextScheduledRoot = e).nextScheduledRoot = Ci);
            else {
                var n = e.remainingExpirationTime;
                (0 === n || t < n) && (e.remainingExpirationTime = t);
            }
            _i || (Ui ? Ii && ((Pi = e), (Oi = 1), Gi(e, 1, !1)) : 1 === t ? Ki() : $i(t));
        }
        function Vi() {
            var e = 0,
                t = null;
            if (null !== Ai)
                for (var n = Ai, r = Ci; null !== r; ) {
                    var o = r.remainingExpirationTime;
                    if (0 === o) {
                        if (((null === n || null === Ai) && f("244"), r === r.nextScheduledRoot)) {
                            Ci = Ai = r.nextScheduledRoot = null;
                            break;
                        }
                        if (r === Ci) (Ci = o = r.nextScheduledRoot), (Ai.nextScheduledRoot = o), (r.nextScheduledRoot = null);
                        else {
                            if (r === Ai) {
                                ((Ai = n).nextScheduledRoot = Ci), (r.nextScheduledRoot = null);
                                break;
                            }
                            (n.nextScheduledRoot = r.nextScheduledRoot), (r.nextScheduledRoot = null);
                        }
                        r = n.nextScheduledRoot;
                    } else {
                        if (((0 === e || o < e) && ((e = o), (t = r)), r === Ai)) break;
                        (n = r), (r = r.nextScheduledRoot);
                    }
                }
            null !== (n = Pi) && n === t && 1 === e ? Bi++ : (Bi = 0), (Pi = t), (Oi = e);
        }
        function Hi(e) {
            qi(0, !0, e);
        }
        function Ki() {
            qi(1, !1, null);
        }
        function qi(e, t, n) {
            if (((ji = n), Vi(), t)) for (; null !== Pi && 0 !== Oi && (0 === e || e >= Oi) && (!Li || wi() >= Oi); ) wi(), Gi(Pi, Oi, !Li), Vi();
            else for (; null !== Pi && 0 !== Oi && (0 === e || e >= Oi); ) Gi(Pi, Oi, !1), Vi();
            null !== ji && ((Si = 0), (Ti = null)), 0 !== Oi && $i(Oi), (ji = null), (Li = !1), Yi();
        }
        function Qi(e, t) {
            _i && f("253"), (Pi = e), (Oi = t), Gi(e, t, !1), Ki(), Yi();
        }
        function Yi() {
            if (((Bi = 0), null !== Di)) {
                var e = Di;
                Di = null;
                for (var t = 0; t < e.length; t++) {
                    var n = e[t];
                    try {
                        n._onComplete();
                    } catch (e) {
                        Ri || ((Ri = !0), (Mi = e));
                    }
                }
            }
            if (Ri) throw ((e = Mi), (Mi = null), (Ri = !1), e);
        }
        function Gi(e, t, n) {
            _i && f("245"),
                (_i = !0),
                n ? (null !== (n = e.finishedWork) ? Xi(e, n, t) : null !== (n = gi(e, t, !0)) && (Zi() ? (e.finishedWork = n) : Xi(e, n, t))) : null !== (n = e.finishedWork) ? Xi(e, n, t) : null !== (n = gi(e, t, !1)) && Xi(e, n, t),
                (_i = !1);
        }
        function Xi(e, t, n) {
            var r = e.firstBatch;
            if (null !== r && r._expirationTime <= n && (null === Di ? (Di = [r]) : Di.push(r), r._defer)) return (e.finishedWork = t), void (e.remainingExpirationTime = 0);
            if (((e.finishedWork = null), (ci = ri = !0), (n = t.stateNode).current === t && f("177"), 0 === (r = n.pendingCommitExpirationTime) && f("261"), (n.pendingCommitExpirationTime = 0), wi(), (lt.current = null), 1 < t.effectTag))
                if (null !== t.lastEffect) {
                    t.lastEffect.nextEffect = t;
                    var o = t.firstEffect;
                } else o = t;
            else o = t.firstEffect;
            Zr = Ln;
            var a = s();
            if (Hn(a)) {
                if ("selectionStart" in a) var i = { start: a.selectionStart, end: a.selectionEnd };
                else
                    e: {
                        var l = window.getSelection && window.getSelection();
                        if (l && 0 !== l.rangeCount) {
                            i = l.anchorNode;
                            var u = l.anchorOffset,
                                p = l.focusNode;
                            l = l.focusOffset;
                            try {
                                i.nodeType, p.nodeType;
                            } catch (e) {
                                i = null;
                                break e;
                            }
                            var d = 0,
                                m = -1,
                                h = -1,
                                g = 0,
                                v = 0,
                                y = a,
                                b = null;
                            t: for (;;) {
                                for (var x; y !== i || (0 !== u && 3 !== y.nodeType) || (m = d + u), y !== p || (0 !== l && 3 !== y.nodeType) || (h = d + l), 3 === y.nodeType && (d += y.nodeValue.length), null !== (x = y.firstChild); )
                                    (b = y), (y = x);
                                for (;;) {
                                    if (y === a) break t;
                                    if ((b === i && ++g === u && (m = d), b === p && ++v === l && (h = d), null !== (x = y.nextSibling))) break;
                                    b = (y = b).parentNode;
                                }
                                y = x;
                            }
                            i = -1 === m || -1 === h ? null : { start: m, end: h };
                        } else i = null;
                    }
                i = i || { start: 0, end: 0 };
            } else i = null;
            for (Jr = { focusedElem: a, selectionRange: i }, Rn(!1), ui = o; null !== ui; ) {
                (a = !1), (i = void 0);
                try {
                    for (; null !== ui; ) {
                        if (256 & ui.effectTag) {
                            var w = ui.alternate;
                            switch ((u = ui).tag) {
                                case 2:
                                    if (256 & u.effectTag && null !== w) {
                                        var k = w.memoizedProps,
                                            E = w.memoizedState,
                                            C = u.stateNode;
                                        (C.props = u.memoizedProps), (C.state = u.memoizedState);
                                        var A = C.getSnapshotBeforeUpdate(k, E);
                                        C.__reactInternalSnapshotBeforeUpdate = A;
                                    }
                                    break;
                                case 3:
                                case 5:
                                case 6:
                                case 4:
                                    break;
                                default:
                                    f("163");
                            }
                        }
                        ui = ui.nextEffect;
                    }
                } catch (e) {
                    (a = !0), (i = e);
                }
                a && (null === ui && f("178"), vi(ui, i), null !== ui && (ui = ui.nextEffect));
            }
            for (ui = o; null !== ui; ) {
                (w = !1), (k = void 0);
                try {
                    for (; null !== ui; ) {
                        var S = ui.effectTag;
                        if ((16 & S && jr(ui.stateNode, ""), 128 & S)) {
                            var T = ui.alternate;
                            if (null !== T) {
                                var _ = T.ref;
                                null !== _ && ("function" == typeof _ ? _(null) : (_.current = null));
                            }
                        }
                        switch (14 & S) {
                            case 2:
                                Ha(ui), (ui.effectTag &= -3);
                                break;
                            case 6:
                                Ha(ui), (ui.effectTag &= -3), qa(ui.alternate, ui);
                                break;
                            case 4:
                                qa(ui.alternate, ui);
                                break;
                            case 8:
                                Ka((E = ui)), (E.return = null), (E.child = null), E.alternate && ((E.alternate.child = null), (E.alternate.return = null));
                        }
                        ui = ui.nextEffect;
                    }
                } catch (e) {
                    (w = !0), (k = e);
                }
                w && (null === ui && f("178"), vi(ui, k), null !== ui && (ui = ui.nextEffect));
            }
            if (((_ = Jr), (T = s()), (S = _.focusedElem), (w = _.selectionRange), T !== S && c(document.documentElement, S))) {
                null !== w &&
                    Hn(S) &&
                    ((T = w.start),
                    void 0 === (_ = w.end) && (_ = T),
                    "selectionStart" in S
                        ? ((S.selectionStart = T), (S.selectionEnd = Math.min(_, S.value.length)))
                        : window.getSelection &&
                          ((T = window.getSelection()),
                          (k = S[ge()].length),
                          (_ = Math.min(w.start, k)),
                          (w = void 0 === w.end ? _ : Math.min(w.end, k)),
                          !T.extend && _ > w && ((k = w), (w = _), (_ = k)),
                          (k = Vn(S, _)),
                          (E = Vn(S, w)),
                          k &&
                              E &&
                              (1 !== T.rangeCount || T.anchorNode !== k.node || T.anchorOffset !== k.offset || T.focusNode !== E.node || T.focusOffset !== E.offset) &&
                              ((C = document.createRange()).setStart(k.node, k.offset), T.removeAllRanges(), _ > w ? (T.addRange(C), T.extend(E.node, E.offset)) : (C.setEnd(E.node, E.offset), T.addRange(C))))),
                    (T = []);
                for (_ = S; (_ = _.parentNode); ) 1 === _.nodeType && T.push({ element: _, left: _.scrollLeft, top: _.scrollTop });
                for ("function" == typeof S.focus && S.focus(), S = 0; S < T.length; S++) ((_ = T[S]).element.scrollLeft = _.left), (_.element.scrollTop = _.top);
            }
            for (Jr = null, Rn(Zr), Zr = null, n.current = t, ui = o; null !== ui; ) {
                (o = !1), (S = void 0);
                try {
                    for (T = r; null !== ui; ) {
                        var P = ui.effectTag;
                        if (36 & P) {
                            var O = ui.alternate;
                            switch (((w = T), (_ = ui).tag)) {
                                case 2:
                                    var N = _.stateNode;
                                    if (4 & _.effectTag)
                                        if (null === O) (N.props = _.memoizedProps), (N.state = _.memoizedState), N.componentDidMount();
                                        else {
                                            var L = O.memoizedProps,
                                                R = O.memoizedState;
                                            (N.props = _.memoizedProps), (N.state = _.memoizedState), N.componentDidUpdate(L, R, N.__reactInternalSnapshotBeforeUpdate);
                                        }
                                    var M = _.updateQueue;
                                    null !== M && ((N.props = _.memoizedProps), (N.state = _.memoizedState), Qo(_, M, N));
                                    break;
                                case 3:
                                    var j = _.updateQueue;
                                    if (null !== j) {
                                        if (((k = null), null !== _.child))
                                            switch (_.child.tag) {
                                                case 5:
                                                    k = _.child.stateNode;
                                                    break;
                                                case 2:
                                                    k = _.child.stateNode;
                                            }
                                        Qo(_, j, k);
                                    }
                                    break;
                                case 5:
                                    var U = _.stateNode;
                                    null === O && 4 & _.effectTag && eo(_.type, _.memoizedProps) && U.focus();
                                    break;
                                case 6:
                                case 4:
                                case 15:
                                case 16:
                                    break;
                                default:
                                    f("163");
                            }
                        }
                        if (128 & P) {
                            _ = void 0;
                            var I = ui.ref;
                            if (null !== I) {
                                var F = ui.stateNode;
                                switch (ui.tag) {
                                    case 5:
                                        _ = F;
                                        break;
                                    default:
                                        _ = F;
                                }
                                "function" == typeof I ? I(_) : (I.current = _);
                            }
                        }
                        var D = ui.nextEffect;
                        (ui.nextEffect = null), (ui = D);
                    }
                } catch (e) {
                    (o = !0), (S = e);
                }
                o && (null === ui && f("178"), vi(ui, S), null !== ui && (ui = ui.nextEffect));
            }
            (ri = ci = !1), jo(t.stateNode), 0 === (t = n.current.expirationTime) && (fi = null), (e.remainingExpirationTime = t);
        }
        function Zi() {
            return !(null === ji || ji.timeRemaining() > 1) && (Li = !0);
        }
        function Ji(e) {
            null === Pi && f("246"), (Pi.remainingExpirationTime = 0), Ri || ((Ri = !0), (Mi = e));
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
            if (Ui && !Ii) {
                Ii = !0;
                try {
                    return e(t);
                } finally {
                    Ii = !1;
                }
            }
            return e(t);
        }
        function nl(e, t) {
            _i && f("187");
            var n = Ui;
            Ui = !0;
            try {
                return Ei(e, t);
            } finally {
                (Ui = n), Ki();
            }
        }
        function rl(e, t, n) {
            if (Fi) return e(t, n);
            Ui || _i || 0 === Ni || (qi(Ni, !1, null), (Ni = 0));
            var r = Fi,
                o = Ui;
            Ui = Fi = !0;
            try {
                return e(t, n);
            } finally {
                (Fi = r), (Ui = o) || _i || Ki();
            }
        }
        function ol(e) {
            var t = Ui;
            Ui = !0;
            try {
                Ei(e);
            } finally {
                (Ui = t) || _i || qi(1, !1, null);
            }
        }
        function al(e, t, n, r, o) {
            var a = t.current;
            if (n) {
                var i;
                e: {
                    for ((2 === un((n = n._reactInternalFiber)) && 2 === n.tag) || f("170"), i = n; 3 !== i.tag; ) {
                        if (yo(i)) {
                            i = i.stateNode.__reactInternalMemoizedMergedChildContext;
                            break e;
                        }
                        (i = i.return) || f("171");
                    }
                    i = i.stateNode.context;
                }
                n = yo(n) ? ko(n, i) : i;
            } else n = p;
            return null === t.context ? (t.context = n) : (t.pendingContext = n), (t = o), ((o = zo(r)).payload = { element: e }), null !== (t = void 0 === t ? null : t) && (o.callback = t), $o(a, o, r), xi(a, r), r;
        }
        function il(e) {
            var t = e._reactInternalFiber;
            return void 0 === t && ("function" == typeof e.render ? f("188") : f("268", Object.keys(e))), null === (e = fn(t)) ? null : e.stateNode;
        }
        function ll(e, t, n, r) {
            var o = t.current;
            return al(e, t, n, (o = bi(wi(), o)), r);
        }
        function sl(e) {
            if (!(e = e.current).child) return null;
            switch (e.child.tag) {
                case 5:
                default:
                    return e.child.stateNode;
            }
        }
        function ul(e) {
            var t = e.findFiberByHostInstance;
            return (function (e) {
                if ("undefined" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) return !1;
                var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
                if (t.isDisabled || !t.supportsFiber) return !0;
                try {
                    var n = t.inject(e);
                    (Lo = Mo(function (e) {
                        return t.onCommitFiberRoot(n, e);
                    })),
                        (Ro = Mo(function (e) {
                            return t.onCommitFiberUnmount(n, e);
                        }));
                } catch (e) {}
                return !0;
            })(
                i({}, e, {
                    findHostInstanceByFiber: function (e) {
                        return null === (e = fn(e)) ? null : e.stateNode;
                    },
                    findFiberByHostInstance: function (e) {
                        return t ? t(e) : null;
                    },
                })
            );
        }
        var cl = el,
            pl = rl,
            fl = function () {
                _i || 0 === Ni || (qi(Ni, !1, null), (Ni = 0));
            };
        function dl(e, t, n) {
            var r = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
            return { $$typeof: ct, key: null == r ? null : "" + r, children: e, containerInfo: t, implementation: n };
        }
        function ml(e) {
            (this._expirationTime = yi()), (this._root = e), (this._callbacks = this._next = null), (this._hasChildren = this._didComplete = !1), (this._children = null), (this._defer = !0);
        }
        function hl() {
            (this._callbacks = null), (this._didCommit = !1), (this._onCommit = this._onCommit.bind(this));
        }
        function gl(e, t, n) {
            this._internalRoot = No(e, t, n);
        }
        function vl(e) {
            return !(!e || (1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType && (8 !== e.nodeType || " react-mount-point-unstable " !== e.nodeValue)));
        }
        function yl(e, t, n, r, o) {
            vl(n) || f("200");
            var a = n._reactRootContainer;
            if (a) {
                if ("function" == typeof o) {
                    var i = o;
                    o = function () {
                        var e = sl(a._internalRoot);
                        i.call(e);
                    };
                }
                null != e ? a.legacy_renderSubtreeIntoContainer(e, t, o) : a.render(t, o);
            } else {
                if (
                    ((a = n._reactRootContainer = (function (e, t) {
                        if ((t || (t = !(!(t = e ? (9 === e.nodeType ? e.documentElement : e.firstChild) : null) || 1 !== t.nodeType || !t.hasAttribute("data-reactroot"))), !t)) for (var n; (n = e.lastChild); ) e.removeChild(n);
                        return new gl(e, !1, t);
                    })(n, r)),
                    "function" == typeof o)
                ) {
                    var l = o;
                    o = function () {
                        var e = sl(a._internalRoot);
                        l.call(e);
                    };
                }
                tl(function () {
                    null != e ? a.legacy_renderSubtreeIntoContainer(e, t, o) : a.render(t, o);
                });
            }
            return sl(a._internalRoot);
        }
        function bl(e, t) {
            var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
            return vl(t) || f("200"), dl(e, t, null, n);
        }
        Be.injectFiberControlledHostComponent(Xr),
            (ml.prototype.render = function (e) {
                this._defer || f("250"), (this._hasChildren = !0), (this._children = e);
                var t = this._root._internalRoot,
                    n = this._expirationTime,
                    r = new hl();
                return al(e, t, null, n, r._onCommit), r;
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
                if (((this._defer && null !== t) || f("251"), this._hasChildren)) {
                    var n = this._expirationTime;
                    if (t !== this) {
                        this._hasChildren && ((n = this._expirationTime = t._expirationTime), this.render(this._children));
                        for (var r = null, o = t; o !== this; ) (r = o), (o = o._next);
                        null === r && f("251"), (r._next = o._next), (this._next = t), (e.firstBatch = this);
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
            (hl.prototype.then = function (e) {
                if (this._didCommit) e();
                else {
                    var t = this._callbacks;
                    null === t && (t = this._callbacks = []), t.push(e);
                }
            }),
            (hl.prototype._onCommit = function () {
                if (!this._didCommit) {
                    this._didCommit = !0;
                    var e = this._callbacks;
                    if (null !== e)
                        for (var t = 0; t < e.length; t++) {
                            var n = e[t];
                            "function" != typeof n && f("191", n), n();
                        }
                }
            }),
            (gl.prototype.render = function (e, t) {
                var n = this._internalRoot,
                    r = new hl();
                return null !== (t = void 0 === t ? null : t) && r.then(t), ll(e, n, null, r._onCommit), r;
            }),
            (gl.prototype.unmount = function (e) {
                var t = this._internalRoot,
                    n = new hl();
                return null !== (e = void 0 === e ? null : e) && n.then(e), ll(null, t, null, n._onCommit), n;
            }),
            (gl.prototype.legacy_renderSubtreeIntoContainer = function (e, t, n) {
                var r = this._internalRoot,
                    o = new hl();
                return null !== (n = void 0 === n ? null : n) && o.then(n), ll(t, r, e, o._onCommit), o;
            }),
            (gl.prototype.createBatch = function () {
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
            (Ye = cl),
            (Ge = pl),
            (Xe = fl);
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
                return (null == e || void 0 === e._reactInternalFiber) && f("38"), yl(e, t, n, !1, r);
            },
            unmountComponentAtNode: function (e) {
                return (
                    vl(e) || f("40"),
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
            unstable_flushControlled: ol,
            __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: { EventPluginHub: B, EventPluginRegistry: S, EventPropagators: oe, ReactControlledComponent: Qe, ReactDOMComponentTree: Q, ReactDOMEventListener: Fn },
            unstable_createRoot: function (e, t) {
                return new gl(e, !0, null != t && !0 === t.hydrate);
            },
        };
        ul({ findFiberByHostInstance: H, bundleType: 0, version: "16.4.2", rendererPackageName: "react-dom" });
        var wl = { default: xl },
            kl = (wl && xl) || wl;
        e.exports = kl.default ? kl.default : kl;
    },
    function (e, t, n) {
        "use strict";
        var r = !("undefined" == typeof window || !window.document || !window.document.createElement),
            o = { canUseDOM: r, canUseWorkers: "undefined" != typeof Worker, canUseEventListeners: r && !(!window.addEventListener && !window.attachEvent), canUseViewport: r && !!window.screen, isInWorker: !r };
        e.exports = o;
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
        function o(e, t) {
            return e === t ? 0 !== e || 0 !== t || 1 / e == 1 / t : e != e && t != t;
        }
        e.exports = function (e, t) {
            if (o(e, t)) return !0;
            if ("object" != typeof e || null === e || "object" != typeof t || null === t) return !1;
            var n = Object.keys(e),
                a = Object.keys(t);
            if (n.length !== a.length) return !1;
            for (var i = 0; i < n.length; i++) if (!r.call(t, n[i]) || !o(e[n[i]], t[n[i]])) return !1;
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
    ,
    ,
    function (e, t, n) {
        "use strict";
        var r = n(5),
            o = n.n(r),
            a = n(15);
        t.a = (e) => {
            const t = a.commands[e].suggested_key || null;
            if (!t) return null;
            switch (o()().os) {
                case "Windows":
                    return t.windows || t.default;
                case "OS X":
                    return t.mac || t.default;
                case "Linux":
                    return t.linux || t.default;
                case "Android":
                    return t.android || t.default;
                case "iOS":
                    return t.ios || t.default;
                default:
                    return t.default || null;
            }
        };
    },
    ,
    function (e, t, n) {
        "use strict";
        var r = n(34);
        function o() {}
        e.exports = function () {
            function e(e, t, n, o, a, i) {
                if (i !== r) {
                    var l = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
                    throw ((l.name = "Invariant Violation"), l);
                }
            }
            function t() {
                return e;
            }
            e.isRequired = e;
            var n = { array: e, bool: e, func: e, number: e, object: e, string: e, symbol: e, any: e, arrayOf: t, element: e, instanceOf: t, node: e, objectOf: t, oneOf: t, oneOfType: t, shape: t, exact: t };
            return (n.checkPropTypes = o), (n.PropTypes = n), n;
        };
    },
    function (e, t, n) {
        "use strict";
        e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
    },
    function (e, t) {
        e.exports = function (e) {
            var t = "undefined" != typeof window && window.location;
            if (!t) throw new Error("fixUrls requires window.location");
            if (!e || "string" != typeof e) return e;
            var n = t.protocol + "//" + t.host,
                r = n + t.pathname.replace(/\/[^\/]*$/, "/");
            return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function (e, t) {
                var o,
                    a = t
                        .trim()
                        .replace(/^"(.*)"$/, function (e, t) {
                            return t;
                        })
                        .replace(/^'(.*)'$/, function (e, t) {
                            return t;
                        });
                return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(a) ? e : ((o = 0 === a.indexOf("//") ? a : 0 === a.indexOf("/") ? n + a : r + a.replace(/^\.\//, "")), "url(" + JSON.stringify(o) + ")");
            });
        };
    },
    ,
    ,
    function (e, t, n) {
        "use strict";
        var r = { childContextTypes: !0, contextTypes: !0, defaultProps: !0, displayName: !0, getDefaultProps: !0, getDerivedStateFromProps: !0, mixins: !0, propTypes: !0, type: !0 },
            o = { name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0 },
            a = Object.defineProperty,
            i = Object.getOwnPropertyNames,
            l = Object.getOwnPropertySymbols,
            s = Object.getOwnPropertyDescriptor,
            u = Object.getPrototypeOf,
            c = u && u(Object);
        e.exports = function e(t, n, p) {
            if ("string" != typeof n) {
                if (c) {
                    var f = u(n);
                    f && f !== c && e(t, f, p);
                }
                var d = i(n);
                l && (d = d.concat(l(n)));
                for (var m = 0; m < d.length; ++m) {
                    var h = d[m];
                    if (!(r[h] || o[h] || (p && p[h]))) {
                        var g = s(n, h);
                        try {
                            a(t, h, g);
                        } catch (e) {}
                    }
                }
                return t;
            }
            return t;
        };
    },
    function (e, t, n) {
        var r = n(66);
        (e.exports = d),
            (e.exports.parse = a),
            (e.exports.compile = function (e, t) {
                return l(a(e, t));
            }),
            (e.exports.tokensToFunction = l),
            (e.exports.tokensToRegExp = f);
        var o = new RegExp(["(\\\\.)", "([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"), "g");
        function a(e, t) {
            for (var n, r = [], a = 0, i = 0, l = "", c = (t && t.delimiter) || "/"; null != (n = o.exec(e)); ) {
                var p = n[0],
                    f = n[1],
                    d = n.index;
                if (((l += e.slice(i, d)), (i = d + p.length), f)) l += f[1];
                else {
                    var m = e[i],
                        h = n[2],
                        g = n[3],
                        v = n[4],
                        y = n[5],
                        b = n[6],
                        x = n[7];
                    l && (r.push(l), (l = ""));
                    var w = null != h && null != m && m !== h,
                        k = "+" === b || "*" === b,
                        E = "?" === b || "*" === b,
                        C = n[2] || c,
                        A = v || y;
                    r.push({ name: g || a++, prefix: h || "", delimiter: C, optional: E, repeat: k, partial: w, asterisk: !!x, pattern: A ? u(A) : x ? ".*" : "[^" + s(C) + "]+?" });
                }
            }
            return i < e.length && (l += e.substr(i)), l && r.push(l), r;
        }
        function i(e) {
            return encodeURI(e).replace(/[\/?#]/g, function (e) {
                return "%" + e.charCodeAt(0).toString(16).toUpperCase();
            });
        }
        function l(e) {
            for (var t = new Array(e.length), n = 0; n < e.length; n++) "object" == typeof e[n] && (t[n] = new RegExp("^(?:" + e[n].pattern + ")$"));
            return function (n, o) {
                for (var a = "", l = n || {}, s = (o || {}).pretty ? i : encodeURIComponent, u = 0; u < e.length; u++) {
                    var c = e[u];
                    if ("string" != typeof c) {
                        var p,
                            f = l[c.name];
                        if (null == f) {
                            if (c.optional) {
                                c.partial && (a += c.prefix);
                                continue;
                            }
                            throw new TypeError('Expected "' + c.name + '" to be defined');
                        }
                        if (r(f)) {
                            if (!c.repeat) throw new TypeError('Expected "' + c.name + '" to not repeat, but received `' + JSON.stringify(f) + "`");
                            if (0 === f.length) {
                                if (c.optional) continue;
                                throw new TypeError('Expected "' + c.name + '" to not be empty');
                            }
                            for (var d = 0; d < f.length; d++) {
                                if (((p = s(f[d])), !t[u].test(p))) throw new TypeError('Expected all "' + c.name + '" to match "' + c.pattern + '", but received `' + JSON.stringify(p) + "`");
                                a += (0 === d ? c.prefix : c.delimiter) + p;
                            }
                        } else {
                            if (
                                ((p = c.asterisk
                                    ? encodeURI(f).replace(/[?#]/g, function (e) {
                                          return "%" + e.charCodeAt(0).toString(16).toUpperCase();
                                      })
                                    : s(f)),
                                !t[u].test(p))
                            )
                                throw new TypeError('Expected "' + c.name + '" to match "' + c.pattern + '", but received "' + p + '"');
                            a += c.prefix + p;
                        }
                    } else a += c;
                }
                return a;
            };
        }
        function s(e) {
            return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g, "\\$1");
        }
        function u(e) {
            return e.replace(/([=!:$\/()])/g, "\\$1");
        }
        function c(e, t) {
            return (e.keys = t), e;
        }
        function p(e) {
            return e.sensitive ? "" : "i";
        }
        function f(e, t, n) {
            r(t) || ((n = t || n), (t = []));
            for (var o = (n = n || {}).strict, a = !1 !== n.end, i = "", l = 0; l < e.length; l++) {
                var u = e[l];
                if ("string" == typeof u) i += s(u);
                else {
                    var f = s(u.prefix),
                        d = "(?:" + u.pattern + ")";
                    t.push(u), u.repeat && (d += "(?:" + f + d + ")*"), (i += d = u.optional ? (u.partial ? f + "(" + d + ")?" : "(?:" + f + "(" + d + "))?") : f + "(" + d + ")");
                }
            }
            var m = s(n.delimiter || "/"),
                h = i.slice(-m.length) === m;
            return o || (i = (h ? i.slice(0, -m.length) : i) + "(?:" + m + "(?=$))?"), (i += a ? "$" : o && h ? "" : "(?=" + m + "|$)"), c(new RegExp("^" + i, p(n)), t);
        }
        function d(e, t, n) {
            return (
                r(t) || ((n = t || n), (t = [])),
                (n = n || {}),
                e instanceof RegExp
                    ? (function (e, t) {
                          var n = e.source.match(/\((?!\?)/g);
                          if (n) for (var r = 0; r < n.length; r++) t.push({ name: r, prefix: null, delimiter: null, optional: !1, repeat: !1, partial: !1, asterisk: !1, pattern: null });
                          return c(e, t);
                      })(e, t)
                    : r(e)
                    ? (function (e, t, n) {
                          for (var r = [], o = 0; o < e.length; o++) r.push(d(e[o], t, n).source);
                          return c(new RegExp("(?:" + r.join("|") + ")", p(n)), t);
                      })(e, t, n)
                    : (function (e, t, n) {
                          return f(a(e, n), t, n);
                      })(e, t, n)
            );
        }
    },
    function (e, t, n) {
        "use strict";
        const r = n(71),
            o = n(72);
        function a(e, t) {
            return t.encode ? (t.strict ? r(e) : encodeURIComponent(e)) : e;
        }
        function i(e, t) {
            return t.decode ? o(e) : e;
        }
        function l(e) {
            const t = e.indexOf("?");
            return -1 === t ? "" : e.slice(t + 1);
        }
        function s(e, t) {
            const n = (function (e) {
                    let t;
                    switch (e.arrayFormat) {
                        case "index":
                            return (e, n, r) => {
                                (t = /\[(\d*)\]$/.exec(e)), (e = e.replace(/\[\d*\]$/, "")), t ? (void 0 === r[e] && (r[e] = {}), (r[e][t[1]] = n)) : (r[e] = n);
                            };
                        case "bracket":
                            return (e, n, r) => {
                                (t = /(\[\])$/.exec(e)), (e = e.replace(/\[\]$/, "")), t ? (void 0 !== r[e] ? (r[e] = [].concat(r[e], n)) : (r[e] = [n])) : (r[e] = n);
                            };
                        default:
                            return (e, t, n) => {
                                void 0 !== n[e] ? (n[e] = [].concat(n[e], t)) : (n[e] = t);
                            };
                    }
                })((t = Object.assign({ decode: !0, arrayFormat: "none" }, t))),
                r = Object.create(null);
            if ("string" != typeof e) return r;
            if (!(e = e.trim().replace(/^[?#&]/, ""))) return r;
            for (const o of e.split("&")) {
                let [e, a] = o.replace(/\+/g, " ").split("=");
                (a = void 0 === a ? null : i(a, t)), n(i(e, t), a, r);
            }
            return Object.keys(r)
                .sort()
                .reduce((e, t) => {
                    const n = r[t];
                    return (
                        Boolean(n) && "object" == typeof n && !Array.isArray(n)
                            ? (e[t] = (function e(t) {
                                  return Array.isArray(t)
                                      ? t.sort()
                                      : "object" == typeof t
                                      ? e(Object.keys(t))
                                            .sort((e, t) => Number(e) - Number(t))
                                            .map((e) => t[e])
                                      : t;
                              })(n))
                            : (e[t] = n),
                        e
                    );
                }, Object.create(null));
        }
        (t.extract = l),
            (t.parse = s),
            (t.stringify = (e, t) => {
                if (!e) return "";
                const n = (function (e) {
                        switch (e.arrayFormat) {
                            case "index":
                                return (t, n, r) => (null === n ? [a(t, e), "[", r, "]"].join("") : [a(t, e), "[", a(r, e), "]=", a(n, e)].join(""));
                            case "bracket":
                                return (t, n) => (null === n ? [a(t, e), "[]"].join("") : [a(t, e), "[]=", a(n, e)].join(""));
                            default:
                                return (t, n) => (null === n ? a(t, e) : [a(t, e), "=", a(n, e)].join(""));
                        }
                    })((t = Object.assign({ encode: !0, strict: !0, arrayFormat: "none" }, t))),
                    r = Object.keys(e);
                return (
                    !1 !== t.sort && r.sort(t.sort),
                    r
                        .map((r) => {
                            const o = e[r];
                            if (void 0 === o) return "";
                            if (null === o) return a(r, t);
                            if (Array.isArray(o)) {
                                const e = [];
                                for (const t of o.slice()) void 0 !== t && e.push(n(r, t, e.length));
                                return e.join("&");
                            }
                            return a(r, t) + "=" + a(o, t);
                        })
                        .filter((e) => e.length > 0)
                        .join("&")
                );
            }),
            (t.parseUrl = (e, t) => {
                const n = e.indexOf("#");
                return -1 !== n && (e = e.slice(0, n)), { url: e.split("?")[0] || "", query: s(l(e), t) };
            });
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
    function (e, t, n) {
        var r = n(65);
        "string" == typeof r && (r = [[e.i, r, ""]]);
        var o = { hmr: !0, transform: void 0, insertInto: void 0 };
        n(10)(r, o);
        r.locals && (e.exports = r.locals);
    },
    function (e, t, n) {
        (t = n(9)(!1)).push([
            e.i,
            ".sideBar {\n  position: fixed;\n  font-size: 17px;\n  font-weight: 400;\n  text-align: right;\n  -moz-user-select: none;\n  -webkit-user-select: none;\n  flex-shrink: 0; }\n  .sideBar .titleContainer {\n    display: flex;\n    flex-direction: column;\n    padding: 10px 15px;\n    align-items: center; }\n    .sideBar .titleContainer .logo {\n      height: 64px;\n      width: 64px;\n      margin-right: 5px; }\n    .sideBar .titleContainer .logoTitle {\n      text-align: left;\n      font-size: 14px;\n      font-weight: 300;\n      color: var(--sub-text);\n      margin: auto; }\n  .sideBar ul {\n    padding: 0;\n    margin: 0; }\n    .sideBar ul .sideBarItem {\n      list-style-type: none;\n      padding: 10px 15px; }\n      .sideBar ul .sideBarItem :hover {\n        text-decoration-line: underline;\n        color: var(--highlight); }\n      .sideBar ul .sideBarItem a {\n        color: var(--sub-text);\n        text-decoration-line: none; }\n      .sideBar ul .sideBarItem.selected a {\n        color: var(--highlight); }\n",
            "",
        ]),
            (e.exports = t);
    },
    function (e, t) {
        e.exports =
            Array.isArray ||
            function (e) {
                return "[object Array]" == Object.prototype.toString.call(e);
            };
    },
    function (e, t, n) {
        var r = n(68);
        "string" == typeof r && (r = [[e.i, r, ""]]);
        var o = { hmr: !0, transform: void 0, insertInto: void 0 };
        n(10)(r, o);
        r.locals && (e.exports = r.locals);
    },
    function (e, t, n) {
        (t = n(9)(!1)).push([
            e.i,
            '.optionContainer {\n  list-style-type: none; }\n  .optionContainer .optionElement {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    padding: 10px 0px 10px 0px; }\n    .optionContainer .optionElement.showColumn {\n      flex-direction: column; }\n      .optionContainer .optionElement.showColumn .optionForm {\n        margin: 0px; }\n    .optionContainer .optionElement .optionText {\n      flex: 1; }\n      .optionContainer .optionElement .optionText p {\n        margin: 0px; }\n      .optionContainer .optionElement .optionText .caption {\n        font-size: 13px;\n        font-weight: 400;\n        color: var(--sub-text);\n        white-space: pre-wrap; }\n      .optionContainer .optionElement .optionText a {\n        color: var(--highlight);\n        text-decoration: none; }\n        .optionContainer .optionElement .optionText a:hover {\n          text-decoration: underline; }\n    .optionContainer .optionElement .optionForm {\n      display: flex;\n      align-items: center;\n      justify-content: flex-end;\n      margin-left: 10px; }\n    .optionContainer .optionElement.buttonsContainer {\n      justify-content: flex-start; }\n  .optionContainer .childElements {\n    padding-left: 20px;\n    border-left: solid 10px var(--line); }\n\nfieldset {\n  border: none;\n  padding: 0;\n  margin: 0; }\n\n.noDisplayLegend {\n  width: 0;\n  height: 0;\n  overflow: hidden; }\n\n/*new, updated*/\n.new > .optionElement p:nth-child(1)::after,\n.updated > .optionElement p:nth-child(1)::after {\n  color: var(--new);\n  font-size: 14px;\n  border: 1px solid var(--new);\n  border-radius: 2px;\n  padding: 0px 5px;\n  margin-left: 5px; }\n\n.updated > .optionElement p:nth-child(1)::after {\n  content: "Updated"; }\n\n.new > .optionElement p:nth-child(1)::after {\n  content: "New"; }\n\n/*forms*/\ninput,\ntextarea {\n  font-family: inherit;\n  font-size: 14px; }\n\ntextarea {\n  -moz-appearance: textfield;\n  border: 1px var(--button) solid;\n  border-radius: 2px;\n  padding-left: 5px;\n  padding-right: 5px;\n  padding: 5px;\n  width: calc(100% - 12px) !important;\n  height: 50px;\n  min-height: 50px; }\n  textarea:hover, textarea:focus {\n    border-color: var(--highlight); }\n\ninput[type="number"],\ninput[type="text"],\ninput[type="color"] {\n  -moz-appearance: textfield;\n  width: 50px;\n  height: 30px;\n  padding-left: 5px;\n  padding-right: 5px;\n  border: 1px solid var(--button);\n  border-radius: 2px; }\n  input[type="number"]:hover, input[type="number"]:focus,\n  input[type="text"]:hover,\n  input[type="text"]:focus,\n  input[type="color"]:hover,\n  input[type="color"]:focus {\n    border-color: var(--highlight); }\n\ninput[type="text"] {\n  width: 200px; }\n\n.noHover {\n  pointer-events: none; }\n\n/*checkbox*/\ninput[type="checkbox"] {\n  opacity: 0;\n  position: absolute; }\n  input[type="checkbox"]:checked + .checkbox {\n    color: var(--highlight); }\n    input[type="checkbox"]:checked + .checkbox::after {\n      content: "";\n      display: block;\n      position: absolute;\n      top: 1px;\n      left: 4px;\n      width: 6px;\n      height: 14px;\n      transform: rotate(40deg);\n      border-bottom: 3px solid var(--highlight);\n      border-right: 3px solid var(--highlight); }\n  input[type="checkbox"]:focus + .checkbox::before {\n    border-color: var(--highlight); }\n\n.checkbox {\n  padding-left: 20px;\n  position: relative;\n  cursor: pointer; }\n  .checkbox::before {\n    content: "";\n    display: block;\n    position: absolute;\n    top: 0;\n    left: -2px;\n    width: 20px;\n    height: 20px;\n    border: 1px solid var(--button);\n    border-radius: 2px; }\n  .checkbox:hover::before {\n    border-color: var(--highlight); }\n\n/*radio*/\ninput[type="radio"] {\n  opacity: 0;\n  position: absolute; }\n  input[type="radio"]:checked + .radio {\n    color: var(--highlight); }\n  input[type="radio"]:checked + .radio::after {\n    content: "";\n    display: block;\n    position: absolute;\n    top: 6px;\n    left: 4px;\n    width: 10px;\n    height: 10px;\n    border-radius: 50%;\n    background-color: var(--highlight); }\n  input[type="radio"]:focus + .radio::before {\n    border-color: var(--highlight); }\n\n.radio {\n  padding-left: 20px;\n  position: relative;\n  cursor: pointer; }\n  .radio::before {\n    content: "";\n    display: block;\n    position: absolute;\n    top: 0;\n    left: -2px;\n    width: 20px;\n    height: 20px;\n    border: 1px solid var(--button);\n    border-radius: 50%; }\n  .radio:hover::before {\n    border-color: var(--highlight); }\n\n/*color*/\ninput[type="color"] {\n  background-color: var(--main-bg);\n  padding: 5px; }\n\n/*select*/\nselect {\n  -moz-appearance: none;\n  -webkit-appearance: none;\n  text-overflow: ellipsis;\n  border: var(--button) solid 1px;\n  border-radius: 2px;\n  padding: 3px 5px;\n  padding-right: 20px;\n  width: 100%;\n  height: 30px; }\n  select:hover, select:focus {\n    border: var(--highlight) solid 1px; }\n\n.selectWrap {\n  position: relative; }\n  .selectWrap:before {\n    pointer-events: none;\n    content: "";\n    z-index: 1;\n    position: absolute;\n    top: 35%;\n    right: 7px;\n    width: 5px;\n    height: 5px;\n    transform: rotate(45deg);\n    border-bottom: 2px solid var(--sub-text);\n    border-right: 2px solid var(--sub-text); }\n  .selectWrap:hover::before {\n    border-bottom: 2px solid var(--highlight);\n    border-right: 2px solid var(--highlight); }\n\noption {\n  font-family: inherit;\n  font-size: 14px; }\n\n/*button*/\ninput[type="button"],\n.button {\n  min-width: 100px;\n  text-align: center;\n  padding: 5px;\n  height: 30px;\n  font-size: 13px;\n  color: var(--main-text);\n  border: 1px solid var(--button);\n  border-radius: 2px;\n  background-color: #fbfbfb;\n  cursor: pointer;\n  white-space: nowrap; }\n  input[type="button"]:hover, input[type="button"]:focus,\n  .button:hover,\n  .button:focus {\n    background: #f5f5f5;\n    border-color: var(--highlight); }\n  input[type="button"].includeSpan,\n  .button.includeSpan {\n    padding: 0px;\n    height: 30px;\n    box-sizing: border-box; }\n    input[type="button"].includeSpan span,\n    .button.includeSpan span {\n      width: fit-content;\n      padding: 0px 5px; }\n\n.button {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center; }\n  .button:focus-within {\n    background: #f5f5f5;\n    border-color: var(--highlight); }\n\ninput[type="file"] {\n  -moz-appearance: none;\n  -webkit-appearance: none;\n  opacity: 0;\n  width: 1px;\n  height: 0; }\n\n.keyboardShortcut {\n  position: relative; }\n  .keyboardShortcut .row {\n    display: flex;\n    align-items: center; }\n  .keyboardShortcut button {\n    position: absolute;\n    border: none;\n    padding: 0;\n    background-color: rgba(0, 0, 0, 0);\n    cursor: pointer;\n    height: 20px; }\n    .keyboardShortcut button svg {\n      width: 20px;\n      height: 20px; }\n    .keyboardShortcut button.clearButton {\n      right: 0px;\n      margin: 3px; }\n      .keyboardShortcut button.clearButton svg {\n        fill: var(--sub-text); }\n      .keyboardShortcut button.clearButton:hover svg {\n        fill: var(--new); }\n    .keyboardShortcut button.resetButton {\n      right: -20px;\n      margin: -3px; }\n      .keyboardShortcut button.resetButton svg {\n        fill: var(--sub-text); }\n        .keyboardShortcut button.resetButton svg path {\n          stroke: var(--sub-text); }\n      .keyboardShortcut button.resetButton:hover svg {\n        fill: var(--highlight); }\n        .keyboardShortcut button.resetButton:hover svg path {\n          stroke: var(--highlight); }\n  .keyboardShortcut input::placeholder {\n    color: #fff; }\n  .keyboardShortcut input:focus::placeholder {\n    color: var(--main-text); }\n  .keyboardShortcut.isError input {\n    border-color: var(--new); }\n  .keyboardShortcut .error {\n    position: absolute;\n    margin: 0;\n    width: 100%;\n    font-size: 12px;\n    color: var(--new);\n    text-align: center;\n    white-space: nowrap; }\n',
            "",
        ]),
            (e.exports = t);
    },
    function (e, t, n) {
        var r = n(70);
        "string" == typeof r && (r = [[e.i, r, ""]]);
        var o = { hmr: !0, transform: void 0, insertInto: void 0 };
        n(10)(r, o);
        r.locals && (e.exports = r.locals);
    },
    function (e, t, n) {
        (t = n(9)(!1)).push([
            e.i,
            ".categoryContainer {\n  list-style-type: none; }\n  .categoryContainer .categoryTitle {\n    font-size: 16px;\n    font-weight: 600;\n    color: var(--sub-text);\n    margin: 0; }\n  .categoryContainer .categoryElements {\n    padding-left: 20px;\n    margin-bottom: 30px; }\n",
            "",
        ]),
            (e.exports = t);
    },
    function (e, t, n) {
        "use strict";
        e.exports = (e) => encodeURIComponent(e).replace(/[!'()*]/g, (e) => "%" + e.charCodeAt(0).toString(16).toUpperCase());
    },
    function (e, t, n) {
        "use strict";
        var r = new RegExp("%[a-f0-9]{2}", "gi"),
            o = new RegExp("(%[a-f0-9]{2})+", "gi");
        function a(e, t) {
            try {
                return decodeURIComponent(e.join(""));
            } catch (e) {}
            if (1 === e.length) return e;
            t = t || 1;
            var n = e.slice(0, t),
                r = e.slice(t);
            return Array.prototype.concat.call([], a(n), a(r));
        }
        function i(e) {
            try {
                return decodeURIComponent(e);
            } catch (o) {
                for (var t = e.match(r), n = 1; n < t.length; n++) t = (e = a(t, n).join("")).match(r);
                return e;
            }
        }
        e.exports = function (e) {
            if ("string" != typeof e) throw new TypeError("Expected `encodedURI` to be of type `string`, got `" + typeof e + "`");
            try {
                return (e = e.replace(/\+/g, " ")), decodeURIComponent(e);
            } catch (t) {
                return (function (e) {
                    for (var t = { "%FE%FF": "��", "%FF%FE": "��" }, n = o.exec(e); n; ) {
                        try {
                            t[n[0]] = decodeURIComponent(n[0]);
                        } catch (e) {
                            var r = i(n[0]);
                            r !== n[0] && (t[n[0]] = r);
                        }
                        n = o.exec(e);
                    }
                    t["%C2"] = "�";
                    for (var a = Object.keys(t), l = 0; l < a.length; l++) {
                        var s = a[l];
                        e = e.replace(new RegExp(s, "g"), t[s]);
                    }
                    return e;
                })(e);
            }
        };
    },
    function (e, t, n) {
        var r = n(74);
        "string" == typeof r && (r = [[e.i, r, ""]]);
        var o = { hmr: !0, transform: void 0, insertInto: void 0 };
        n(10)(r, o);
        r.locals && (e.exports = r.locals);
    },
    function (e, t, n) {
        (t = n(9)(!1)).push([
            e.i,
            ".contentsArea {\n  margin-left: 150px;\n  width: 650px; }\n  .contentsArea .contentTitle {\n    font-size: 33px;\n    font-weight: 200;\n    color: var(--sub-text);\n    line-height: 2;\n    margin: 0; }\n  .contentsArea hr {\n    width: 100%;\n    background-color: var(--line);\n    height: 1px;\n    border: none;\n    margin-top: 20px;\n    margin-bottom: 20px; }\n  .contentsArea ul {\n    padding: 0;\n    margin: 0; }\n",
            "",
        ]),
            (e.exports = t);
    },
    function (e, t, n) {
        var r = n(76);
        "string" == typeof r && (r = [[e.i, r, ""]]);
        var o = { hmr: !0, transform: void 0, insertInto: void 0 };
        n(10)(r, o);
        r.locals && (e.exports = r.locals);
    },
    function (e, t, n) {
        (t = n(9)(!1)).push([
            e.i,
            ':root {\n  --main-text: #0c0c0d;\n  --sub-text: #737373;\n  --line: #ededf0;\n  --button: #d7d7db;\n  --highlight: #5595ff;\n  --main-bg: #ffffff;\n  --new: #ff4f4f; }\n\n.optionsPage {\n  font-family: "Segoe UI", "San Francisco", "Ubuntu", "Fira Sans", "Roboto", "Arial", "Helvetica",\r sans-serif;\n  font-size: 15px;\n  font-weight: 400;\n  color: var(--main-text);\n  background-color: var(--main-bg);\n  line-height: 1.5;\n  margin: 20px 40px; }\n\n::-moz-selection {\n  background-color: var(--line); }\n\n::selection {\n  background-color: var(--line); }\n',
            "",
        ]),
            (e.exports = t);
    },
    ,
    ,
    ,
    function (e, t, n) {
        "use strict";
        n.r(t);
        var r = n(0),
            o = n.n(r),
            a = n(11),
            i = n.n(a),
            l = n(14),
            s = n.n(l),
            u = n(4),
            c = n.n(u),
            p = n(6),
            f = n.n(p),
            d = n(13),
            m = n.n(d);
        function h(e) {
            return "/" === e.charAt(0);
        }
        function g(e, t) {
            for (var n = t, r = n + 1, o = e.length; r < o; n += 1, r += 1) e[n] = e[r];
            e.pop();
        }
        var v = function (e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                    n = (e && e.split("/")) || [],
                    r = (t && t.split("/")) || [],
                    o = e && h(e),
                    a = t && h(t),
                    i = o || a;
                if ((e && h(e) ? (r = n) : n.length && (r.pop(), (r = r.concat(n))), !r.length)) return "/";
                var l = void 0;
                if (r.length) {
                    var s = r[r.length - 1];
                    l = "." === s || ".." === s || "" === s;
                } else l = !1;
                for (var u = 0, c = r.length; c >= 0; c--) {
                    var p = r[c];
                    "." === p ? g(r, c) : ".." === p ? (g(r, c), u++) : u && (g(r, c), u--);
                }
                if (!i) for (; u--; u) r.unshift("..");
                !i || "" === r[0] || (r[0] && h(r[0])) || r.unshift("");
                var f = r.join("/");
                return l && "/" !== f.substr(-1) && (f += "/"), f;
            },
            y =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (e) {
                          return typeof e;
                      }
                    : function (e) {
                          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                      };
        var b = function e(t, n) {
                if (t === n) return !0;
                if (null == t || null == n) return !1;
                if (Array.isArray(t))
                    return (
                        Array.isArray(n) &&
                        t.length === n.length &&
                        t.every(function (t, r) {
                            return e(t, n[r]);
                        })
                    );
                var r = void 0 === t ? "undefined" : y(t);
                if (r !== (void 0 === n ? "undefined" : y(n))) return !1;
                if ("object" === r) {
                    var o = t.valueOf(),
                        a = n.valueOf();
                    if (o !== t || a !== n) return e(o, a);
                    var i = Object.keys(t),
                        l = Object.keys(n);
                    return (
                        i.length === l.length &&
                        i.every(function (r) {
                            return e(t[r], n[r]);
                        })
                    );
                }
                return !1;
            },
            x = function (e) {
                return "/" === e.charAt(0) ? e : "/" + e;
            },
            w = function (e) {
                return "/" === e.charAt(0) ? e.substr(1) : e;
            },
            k = function (e, t) {
                return new RegExp("^" + t + "(\\/|\\?|#|$)", "i").test(e);
            },
            E = function (e, t) {
                return k(e, t) ? e.substr(t.length) : e;
            },
            C = function (e) {
                return "/" === e.charAt(e.length - 1) ? e.slice(0, -1) : e;
            },
            A = function (e) {
                var t = e.pathname,
                    n = e.search,
                    r = e.hash,
                    o = t || "/";
                return n && "?" !== n && (o += "?" === n.charAt(0) ? n : "?" + n), r && "#" !== r && (o += "#" === r.charAt(0) ? r : "#" + r), o;
            },
            S =
                Object.assign ||
                function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                    }
                    return e;
                },
            T = function (e, t, n, r) {
                var o = void 0;
                "string" == typeof e
                    ? ((o = (function (e) {
                          var t = e || "/",
                              n = "",
                              r = "",
                              o = t.indexOf("#");
                          -1 !== o && ((r = t.substr(o)), (t = t.substr(0, o)));
                          var a = t.indexOf("?");
                          return -1 !== a && ((n = t.substr(a)), (t = t.substr(0, a))), { pathname: t, search: "?" === n ? "" : n, hash: "#" === r ? "" : r };
                      })(e)).state = t)
                    : (void 0 === (o = S({}, e)).pathname && (o.pathname = ""),
                      o.search ? "?" !== o.search.charAt(0) && (o.search = "?" + o.search) : (o.search = ""),
                      o.hash ? "#" !== o.hash.charAt(0) && (o.hash = "#" + o.hash) : (o.hash = ""),
                      void 0 !== t && void 0 === o.state && (o.state = t));
                try {
                    o.pathname = decodeURI(o.pathname);
                } catch (e) {
                    throw e instanceof URIError ? new URIError('Pathname "' + o.pathname + '" could not be decoded. This is likely caused by an invalid percent-encoding.') : e;
                }
                return n && (o.key = n), r ? (o.pathname ? "/" !== o.pathname.charAt(0) && (o.pathname = v(o.pathname, r.pathname)) : (o.pathname = r.pathname)) : o.pathname || (o.pathname = "/"), o;
            },
            _ = function (e, t) {
                return e.pathname === t.pathname && e.search === t.search && e.hash === t.hash && e.key === t.key && b(e.state, t.state);
            },
            P = function () {
                var e = null,
                    t = [];
                return {
                    setPrompt: function (t) {
                        return (
                            f()(null == e, "A history supports only one prompt at a time"),
                            (e = t),
                            function () {
                                e === t && (e = null);
                            }
                        );
                    },
                    confirmTransitionTo: function (t, n, r, o) {
                        if (null != e) {
                            var a = "function" == typeof e ? e(t, n) : e;
                            "string" == typeof a ? ("function" == typeof r ? r(a, o) : (f()(!1, "A history needs a getUserConfirmation function in order to use a prompt message"), o(!0))) : o(!1 !== a);
                        } else o(!0);
                    },
                    appendListener: function (e) {
                        var n = !0,
                            r = function () {
                                n && e.apply(void 0, arguments);
                            };
                        return (
                            t.push(r),
                            function () {
                                (n = !1),
                                    (t = t.filter(function (e) {
                                        return e !== r;
                                    }));
                            }
                        );
                    },
                    notifyListeners: function () {
                        for (var e = arguments.length, n = Array(e), r = 0; r < e; r++) n[r] = arguments[r];
                        t.forEach(function (e) {
                            return e.apply(void 0, n);
                        });
                    },
                };
            },
            O = !("undefined" == typeof window || !window.document || !window.document.createElement),
            N = function (e, t, n) {
                return e.addEventListener ? e.addEventListener(t, n, !1) : e.attachEvent("on" + t, n);
            },
            L = function (e, t, n) {
                return e.removeEventListener ? e.removeEventListener(t, n, !1) : e.detachEvent("on" + t, n);
            },
            R = function (e, t) {
                return t(window.confirm(e));
            },
            M = function () {
                return -1 === window.navigator.userAgent.indexOf("Firefox");
            },
            j =
                ("function" == typeof Symbol && Symbol.iterator,
                Object.assign,
                Object.assign ||
                    function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                        }
                        return e;
                    }),
            U = {
                hashbang: {
                    encodePath: function (e) {
                        return "!" === e.charAt(0) ? e : "!/" + w(e);
                    },
                    decodePath: function (e) {
                        return "!" === e.charAt(0) ? e.substr(1) : e;
                    },
                },
                noslash: { encodePath: w, decodePath: x },
                slash: { encodePath: x, decodePath: x },
            },
            I = function () {
                var e = window.location.href,
                    t = e.indexOf("#");
                return -1 === t ? "" : e.substring(t + 1);
            },
            F = function (e) {
                return (window.location.hash = e);
            },
            D = function (e) {
                var t = window.location.href.indexOf("#");
                window.location.replace(window.location.href.slice(0, t >= 0 ? t : 0) + "#" + e);
            },
            z = function () {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                m()(O, "Hash history needs a DOM");
                var t = window.history,
                    n = M(),
                    r = e.getUserConfirmation,
                    o = void 0 === r ? R : r,
                    a = e.hashType,
                    i = void 0 === a ? "slash" : a,
                    l = e.basename ? C(x(e.basename)) : "",
                    s = U[i],
                    u = s.encodePath,
                    c = s.decodePath,
                    p = function () {
                        var e = c(I());
                        return f()(!l || k(e, l), 'You are attempting to use a basename on a page whose URL path does not begin with the basename. Expected path "' + e + '" to begin with "' + l + '".'), l && (e = E(e, l)), T(e);
                    },
                    d = P(),
                    h = function (e) {
                        j(ee, e), (ee.length = t.length), d.notifyListeners(ee.location, ee.action);
                    },
                    g = !1,
                    v = null,
                    y = function () {
                        var e = I(),
                            t = u(e);
                        if (e !== t) D(t);
                        else {
                            var n = p(),
                                r = ee.location;
                            if (!g && _(r, n)) return;
                            if (v === A(n)) return;
                            (v = null), b(n);
                        }
                    },
                    b = function (e) {
                        if (g) (g = !1), h();
                        else {
                            d.confirmTransitionTo(e, "POP", o, function (t) {
                                t ? h({ action: "POP", location: e }) : w(e);
                            });
                        }
                    },
                    w = function (e) {
                        var t = ee.location,
                            n = $.lastIndexOf(A(t));
                        -1 === n && (n = 0);
                        var r = $.lastIndexOf(A(e));
                        -1 === r && (r = 0);
                        var o = n - r;
                        o && ((g = !0), K(o));
                    },
                    S = I(),
                    z = u(S);
                S !== z && D(z);
                var B = p(),
                    $ = [A(B)],
                    W = function (e) {
                        return "#" + u(l + A(e));
                    },
                    V = function (e, t) {
                        f()(void 0 === t, "Hash history cannot push state; it is ignored");
                        var n = T(e, void 0, void 0, ee.location);
                        d.confirmTransitionTo(n, "PUSH", o, function (e) {
                            if (e) {
                                var t = A(n),
                                    r = u(l + t);
                                if (I() !== r) {
                                    (v = t), F(r);
                                    var o = $.lastIndexOf(A(ee.location)),
                                        a = $.slice(0, -1 === o ? 0 : o + 1);
                                    a.push(t), ($ = a), h({ action: "PUSH", location: n });
                                } else f()(!1, "Hash history cannot PUSH the same path; a new entry will not be added to the history stack"), h();
                            }
                        });
                    },
                    H = function (e, t) {
                        f()(void 0 === t, "Hash history cannot replace state; it is ignored");
                        var n = T(e, void 0, void 0, ee.location);
                        d.confirmTransitionTo(n, "REPLACE", o, function (e) {
                            if (e) {
                                var t = A(n),
                                    r = u(l + t);
                                I() !== r && ((v = t), D(r));
                                var o = $.indexOf(A(ee.location));
                                -1 !== o && ($[o] = t), h({ action: "REPLACE", location: n });
                            }
                        });
                    },
                    K = function (e) {
                        f()(n, "Hash history go(n) causes a full page reload in this browser"), t.go(e);
                    },
                    q = function () {
                        return K(-1);
                    },
                    Q = function () {
                        return K(1);
                    },
                    Y = 0,
                    G = function (e) {
                        1 === (Y += e) ? N(window, "hashchange", y) : 0 === Y && L(window, "hashchange", y);
                    },
                    X = !1,
                    Z = function () {
                        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                            t = d.setPrompt(e);
                        return (
                            X || (G(1), (X = !0)),
                            function () {
                                return X && ((X = !1), G(-1)), t();
                            }
                        );
                    },
                    J = function (e) {
                        var t = d.appendListener(e);
                        return (
                            G(1),
                            function () {
                                G(-1), t();
                            }
                        );
                    },
                    ee = { length: t.length, action: "POP", location: B, createHref: W, push: V, replace: H, go: K, goBack: q, goForward: Q, block: Z, listen: J };
                return ee;
            },
            B =
                ("function" == typeof Symbol && Symbol.iterator,
                Object.assign,
                Object.assign ||
                    function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                        }
                        return e;
                    });
        function $(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }
        function W(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
        }
        var V = (function (e) {
            function t() {
                var n, r;
                $(this, t);
                for (var o = arguments.length, a = Array(o), i = 0; i < o; i++) a[i] = arguments[i];
                return (n = r = W(this, e.call.apply(e, [this].concat(a)))), (r.state = { match: r.computeMatch(r.props.history.location.pathname) }), W(r, n);
            }
            return (
                (function (e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                    (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } })), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
                })(t, e),
                (t.prototype.getChildContext = function () {
                    return { router: B({}, this.context.router, { history: this.props.history, route: { location: this.props.history.location, match: this.state.match } }) };
                }),
                (t.prototype.computeMatch = function (e) {
                    return { path: "/", url: "/", params: {}, isExact: "/" === e };
                }),
                (t.prototype.componentWillMount = function () {
                    var e = this,
                        t = this.props,
                        n = t.children,
                        r = t.history;
                    m()(null == n || 1 === o.a.Children.count(n), "A <Router> may have only one child element"),
                        (this.unlisten = r.listen(function () {
                            e.setState({ match: e.computeMatch(r.location.pathname) });
                        }));
                }),
                (t.prototype.componentWillReceiveProps = function (e) {
                    s()(this.props.history === e.history, "You cannot change <Router history>");
                }),
                (t.prototype.componentWillUnmount = function () {
                    this.unlisten();
                }),
                (t.prototype.render = function () {
                    var e = this.props.children;
                    return e ? o.a.Children.only(e) : null;
                }),
                t
            );
        })(o.a.Component);
        (V.propTypes = { history: c.a.object.isRequired, children: c.a.node }), (V.contextTypes = { router: c.a.object }), (V.childContextTypes = { router: c.a.object.isRequired });
        var H = V;
        function K(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }
        function q(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
        }
        var Q = (function (e) {
            function t() {
                var n, r;
                K(this, t);
                for (var o = arguments.length, a = Array(o), i = 0; i < o; i++) a[i] = arguments[i];
                return (n = r = q(this, e.call.apply(e, [this].concat(a)))), (r.history = z(r.props)), q(r, n);
            }
            return (
                (function (e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                    (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } })), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
                })(t, e),
                (t.prototype.componentWillMount = function () {
                    s()(!this.props.history, "<HashRouter> ignores the history prop. To use a custom history, use `import { Router }` instead of `import { HashRouter as Router }`.");
                }),
                (t.prototype.render = function () {
                    return o.a.createElement(H, { history: this.history, children: this.props.children });
                }),
                t
            );
        })(o.a.Component);
        Q.propTypes = { basename: c.a.string, getUserConfirmation: c.a.func, hashType: c.a.oneOf(["hashbang", "noslash", "slash"]), children: c.a.node };
        var Y = Q,
            G = n(1),
            X = n.n(G),
            Z =
                Object.assign ||
                function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                    }
                    return e;
                };
        function J(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }
        function ee(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
        }
        var te = function (e) {
                return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
            },
            ne = (function (e) {
                function t() {
                    var n, r;
                    J(this, t);
                    for (var o = arguments.length, a = Array(o), i = 0; i < o; i++) a[i] = arguments[i];
                    return (
                        (n = r = ee(this, e.call.apply(e, [this].concat(a)))),
                        (r.handleClick = function (e) {
                            if ((r.props.onClick && r.props.onClick(e), !e.defaultPrevented && 0 === e.button && !r.props.target && !te(e))) {
                                e.preventDefault();
                                var t = r.context.router.history,
                                    n = r.props,
                                    o = n.replace,
                                    a = n.to;
                                o ? t.replace(a) : t.push(a);
                            }
                        }),
                        ee(r, n)
                    );
                }
                return (
                    (function (e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                        (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } })), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
                    })(t, e),
                    (t.prototype.render = function () {
                        var e = this.props,
                            t = (e.replace, e.to),
                            n = e.innerRef,
                            r = (function (e, t) {
                                var n = {};
                                for (var r in e) t.indexOf(r) >= 0 || (Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]));
                                return n;
                            })(e, ["replace", "to", "innerRef"]);
                        m()(this.context.router, "You should not use <Link> outside a <Router>"), m()(void 0 !== t, 'You must specify the "to" property');
                        var a = this.context.router.history,
                            i = "string" == typeof t ? T(t, null, null, a.location) : t,
                            l = a.createHref(i);
                        return o.a.createElement("a", Z({}, r, { onClick: this.handleClick, href: l, ref: n }));
                    }),
                    t
                );
            })(o.a.Component);
        (ne.propTypes = { onClick: c.a.func, target: c.a.string, replace: c.a.bool, to: c.a.oneOfType([c.a.string, c.a.object]).isRequired, innerRef: c.a.oneOfType([c.a.string, c.a.func]) }),
            (ne.defaultProps = { replace: !1 }),
            (ne.contextTypes = { router: c.a.shape({ history: c.a.shape({ push: c.a.func.isRequired, replace: c.a.func.isRequired, createHref: c.a.func.isRequired }).isRequired }).isRequired });
        var re = ne,
            oe = n(38),
            ae = n.n(oe),
            ie = n(39),
            le = n.n(ie),
            se = {},
            ue = 0,
            ce = function (e, t) {
                var n = "" + t.end + t.strict + t.sensitive,
                    r = se[n] || (se[n] = {});
                if (r[e]) return r[e];
                var o = [],
                    a = { re: le()(e, o, t), keys: o };
                return ue < 1e4 && ((r[e] = a), ue++), a;
            },
            pe = function (e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    n = arguments[2];
                "string" == typeof t && (t = { path: t });
                var r = t,
                    o = r.path,
                    a = r.exact,
                    i = void 0 !== a && a,
                    l = r.strict,
                    s = void 0 !== l && l,
                    u = r.sensitive,
                    c = void 0 !== u && u;
                if (null == o) return n;
                var p = ce(o, { end: i, strict: s, sensitive: c }),
                    f = p.re,
                    d = p.keys,
                    m = f.exec(e);
                if (!m) return null;
                var h = m[0],
                    g = m.slice(1),
                    v = e === h;
                return i && !v
                    ? null
                    : {
                          path: o,
                          url: "/" === o && "" === h ? "/" : h,
                          isExact: v,
                          params: d.reduce(function (e, t, n) {
                              return (e[t.name] = g[n]), e;
                          }, {}),
                      };
            },
            fe =
                Object.assign ||
                function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                    }
                    return e;
                };
        function de(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }
        function me(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
        }
        var he = function (e) {
                return 0 === o.a.Children.count(e);
            },
            ge = (function (e) {
                function t() {
                    var n, r;
                    de(this, t);
                    for (var o = arguments.length, a = Array(o), i = 0; i < o; i++) a[i] = arguments[i];
                    return (n = r = me(this, e.call.apply(e, [this].concat(a)))), (r.state = { match: r.computeMatch(r.props, r.context.router) }), me(r, n);
                }
                return (
                    (function (e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                        (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } })), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
                    })(t, e),
                    (t.prototype.getChildContext = function () {
                        return { router: fe({}, this.context.router, { route: { location: this.props.location || this.context.router.route.location, match: this.state.match } }) };
                    }),
                    (t.prototype.computeMatch = function (e, t) {
                        var n = e.computedMatch,
                            r = e.location,
                            o = e.path,
                            a = e.strict,
                            i = e.exact,
                            l = e.sensitive;
                        if (n) return n;
                        m()(t, "You should not use <Route> or withRouter() outside a <Router>");
                        var s = t.route,
                            u = (r || s.location).pathname;
                        return pe(u, { path: o, strict: a, exact: i, sensitive: l }, s.match);
                    }),
                    (t.prototype.componentWillMount = function () {
                        s()(!(this.props.component && this.props.render), "You should not use <Route component> and <Route render> in the same route; <Route render> will be ignored"),
                            s()(!(this.props.component && this.props.children && !he(this.props.children)), "You should not use <Route component> and <Route children> in the same route; <Route children> will be ignored"),
                            s()(!(this.props.render && this.props.children && !he(this.props.children)), "You should not use <Route render> and <Route children> in the same route; <Route children> will be ignored");
                    }),
                    (t.prototype.componentWillReceiveProps = function (e, t) {
                        s()(!(e.location && !this.props.location), '<Route> elements should not change from uncontrolled to controlled (or vice versa). You initially used no "location" prop and then provided one on a subsequent render.'),
                            s()(!(!e.location && this.props.location), '<Route> elements should not change from controlled to uncontrolled (or vice versa). You provided a "location" prop initially but omitted it on a subsequent render.'),
                            this.setState({ match: this.computeMatch(e, t.router) });
                    }),
                    (t.prototype.render = function () {
                        var e = this.state.match,
                            t = this.props,
                            n = t.children,
                            r = t.component,
                            a = t.render,
                            i = this.context.router,
                            l = i.history,
                            s = i.route,
                            u = i.staticContext,
                            c = { match: e, location: this.props.location || s.location, history: l, staticContext: u };
                        return r ? (e ? o.a.createElement(r, c) : null) : a ? (e ? a(c) : null) : "function" == typeof n ? n(c) : n && !he(n) ? o.a.Children.only(n) : null;
                    }),
                    t
                );
            })(o.a.Component);
        (ge.propTypes = { computedMatch: c.a.object, path: c.a.string, exact: c.a.bool, strict: c.a.bool, sensitive: c.a.bool, component: c.a.func, render: c.a.func, children: c.a.oneOfType([c.a.func, c.a.node]), location: c.a.object }),
            (ge.contextTypes = { router: c.a.shape({ history: c.a.object.isRequired, route: c.a.object.isRequired, staticContext: c.a.object }) }),
            (ge.childContextTypes = { router: c.a.object.isRequired });
        var ve = ge,
            ye =
                Object.assign ||
                function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                    }
                    return e;
                };
        var be = function (e) {
                var t = function (t) {
                    var n = t.wrappedComponentRef,
                        r = (function (e, t) {
                            var n = {};
                            for (var r in e) t.indexOf(r) >= 0 || (Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]));
                            return n;
                        })(t, ["wrappedComponentRef"]);
                    return o.a.createElement(ve, {
                        children: function (t) {
                            return o.a.createElement(e, ye({}, r, t, { ref: n }));
                        },
                    });
                };
                return (t.displayName = "withRouter(" + (e.displayName || e.name) + ")"), (t.WrappedComponent = e), (t.propTypes = { wrappedComponentRef: c.a.func }), ae()(t, e);
            },
            xe = n(5),
            we = n.n(xe);
        n(64);
        const ke = "Firefox" == we()().name && we()().version >= 60;
        var Ee = be((e) =>
            o.a.createElement(
                "div",
                { className: "sideBar" },
                o.a.createElement("div", { className: "titleContainer" }, o.a.createElement("img", { src: "/icons/64.png", className: "logo" }), o.a.createElement("span", { className: "logoTitle" }, "Translate Options")),
                o.a.createElement(
                    "ul",
                    null,
                    o.a.createElement(
                        "li",
                        { className: "sideBarItem " + (["/shortcuts", "/info"].every((t) => t != e.location.pathname) ? "selected" : "") },
                        o.a.createElement(re, { to: "/settings" }, X.a.i18n.getMessage("settingsLabel"))
                    ),
                    ke && o.a.createElement("li", { className: "sideBarItem " + ("/shortcuts" == e.location.pathname ? "selected" : "") }, o.a.createElement(re, { to: "/shortcuts" }, X.a.i18n.getMessage("shortcutsLabel"))),
                    o.a.createElement("li", { className: "sideBarItem " + ("/info" == e.location.pathname ? "selected" : "") }, o.a.createElement(re, { to: "/info" }, X.a.i18n.getMessage("infoLabel")))
                )
            )
        );
        function Ce(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }
        function Ae(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
        }
        var Se = (function (e) {
            function t() {
                return Ce(this, t), Ae(this, e.apply(this, arguments));
            }
            return (
                (function (e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                    (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } })), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
                })(t, e),
                (t.prototype.componentWillMount = function () {
                    m()(this.context.router, "You should not use <Switch> outside a <Router>");
                }),
                (t.prototype.componentWillReceiveProps = function (e) {
                    s()(!(e.location && !this.props.location), '<Switch> elements should not change from uncontrolled to controlled (or vice versa). You initially used no "location" prop and then provided one on a subsequent render.'),
                        s()(!(!e.location && this.props.location), '<Switch> elements should not change from controlled to uncontrolled (or vice versa). You provided a "location" prop initially but omitted it on a subsequent render.');
                }),
                (t.prototype.render = function () {
                    var e = this.context.router.route,
                        t = this.props.children,
                        n = this.props.location || e.location,
                        r = void 0,
                        a = void 0;
                    return (
                        o.a.Children.forEach(t, function (t) {
                            if (null == r && o.a.isValidElement(t)) {
                                var i = t.props,
                                    l = i.path,
                                    s = i.exact,
                                    u = i.strict,
                                    c = i.sensitive,
                                    p = i.from,
                                    f = l || p;
                                (a = t), (r = pe(n.pathname, { path: f, exact: s, strict: u, sensitive: c }, e.match));
                            }
                        }),
                        r ? o.a.cloneElement(a, { location: n, computedMatch: r }) : null
                    );
                }),
                t
            );
        })(o.a.Component);
        (Se.contextTypes = { router: c.a.shape({ route: c.a.object.isRequired }).isRequired }), (Se.propTypes = { children: c.a.node, location: c.a.object });
        var Te = Se,
            _e = ve,
            Pe = n(8),
            Oe = n(2),
            Ne = n(12);
        function Le(e, t) {
            if (null == e) return {};
            var n,
                r,
                o = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        o = {},
                        a = Object.keys(e);
                    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
                    return o;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]));
            }
            return o;
        }
        function Re() {
            return (Re =
                Object.assign ||
                function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                    }
                    return e;
                }).apply(this, arguments);
        }
        var Me = (e) => {
            let { styles: t = {} } = e,
                n = Le(e, ["styles"]);
            return o.a.createElement(
                "svg",
                Re({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: "480", height: "480" }, n),
                o.a.createElement("path", { d: "M12 2a10 10 0 100 20 10 10 0 100-20zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z" })
            );
        };
        function je(e, t) {
            if (null == e) return {};
            var n,
                r,
                o = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        o = {},
                        a = Object.keys(e);
                    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
                    return o;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]));
            }
            return o;
        }
        function Ue() {
            return (Ue =
                Object.assign ||
                function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                    }
                    return e;
                }).apply(this, arguments);
        }
        var Ie = (e) => {
            let { styles: t = {} } = e,
                n = je(e, ["styles"]);
            return o.a.createElement(
                "svg",
                Ue({ xmlns: "http://www.w3.org/2000/svg", viewBox: "185.25 184.25 100 100" }, n),
                o.a.createElement("path", { fill: "none", stroke: "#000", strokeWidth: "8.5", strokeMiterlimit: "10", d: "M200.88 236.19a34.28 34.28 0 0158.54-26.08l.97.98" }),
                o.a.createElement("path", { d: "M272.13 195.8l-27.1 26.95 27.02.07z" }),
                o.a.createElement("path", { fill: "none", stroke: "#000", strokeWidth: "8.5", strokeMiterlimit: "10", d: "M269.3 232.31a34.28 34.28 0 01-58.54 26.08l-.98-.98" }),
                o.a.createElement("path", { d: "M198.05 272.7l27.09-26.95-27.01-.07z" })
            );
        };
        class Fe extends r.Component {
            constructor(e) {
                super(e), (this.isMac = "OS X" == we()().os), (this.state = { shortcut: e.shortcut, value: e.shortcut, defaultValue: e.defaultValue, error: "" });
            }
            handleFocus(e) {
                e.target.select(), (window.document.onkeydown = () => !1), (window.document.onkeypress = () => !1);
            }
            handleBlur(e) {
                const t = this.state.shortcut;
                this.setState({ error: "", value: t }), (window.document.onkeydown = () => !0), (window.document.onkeypress = () => !0);
            }
            handleChange(e) {}
            handleKeyDown(e) {
                if (e.repeat) return;
                if ("Tab" == e.key) return void window.document.activeElement.blur();
                const t = ((e, t) => {
                    if (/^([a-z]|[A-Z])$/.test(e)) return e.toUpperCase();
                    if (/^[0-9]$/.test(e) || /^F([0-9]|1[0-2])$/.test(e) || /^(Home|End|PageUp|PageDown|Insert|Delete)$/.test(e)) return e;
                    if (/^\s$/.test(e)) return "Space";
                    if (/^(ArrowUp|ArrowDown|ArrowLeft|ArrowRight)$/.test(e)) return e.split("Arrow")[1];
                    if (/^(MediaPlayPause|MediaStop)$/.test(e)) return e;
                    if ("MediaTrackNext" == e) return "MediaNextTrack";
                    if ("MediaTrackPrevious" == e) return "MediaPrevTrack";
                    return 48 <= t && t <= 57 ? t - 48 : 188 == t ? "Comma" : 190 == t ? "Period" : "";
                })(e.key, e.keyCode);
                let n = "";
                /^(MediaPlayPause|MediaStop|MediaNextTrack|MediaPrevTrack)$/.test(t) || /^F([0-9]|1[0-2])$/.test(t)
                    ? (n = "")
                    : /^(Control|Alt|Shift|Meta)$/.test(e.key)
                    ? (n = X.a.i18n.getMessage("typeLetterMessage"))
                    : e.ctrlKey || e.altKey || e.metaKey
                    ? "" == t && (n = X.a.i18n.getMessage("invalidLetterMessage"))
                    : (n = this.isMac ? X.a.i18n.getMessage("includeMacModifierKeysMessage") : X.a.i18n.getMessage("includeModifierKeysMessage"));
                const r = `${e.ctrlKey ? (this.isMac ? "MacCtrl+" : "Ctrl+") : ""}${e.metaKey && this.isMac ? "Command+" : ""}${e.altKey ? "Alt+" : ""}${e.shiftKey ? "Shift+" : ""}${t}`;
                this.setState({ error: n, value: r || "" }), "" != r && "" == n && this.updateShortcut(r);
            }
            handleKeyUp(e) {
                "" != this.state.error && this.setState({ value: "" });
            }
            async updateShortcut(e) {
                try {
                    await X.a.commands.update({ name: this.props.id, shortcut: e }), this.setState({ shortcut: e || "" });
                } catch (e) {
                    this.setState({ error: X.a.i18n.getMessage("invalidShortcutMessage") });
                }
            }
            async clearShortcut() {
                await X.a.commands.reset(this.props.id).catch(() => {}), this.setState({ shortcut: "", value: "" });
            }
            async resetShortcut() {
                const e = this.state.defaultValue;
                this.updateShortcut(e), this.setState({ value: e || "" });
            }
            render() {
                return o.a.createElement(
                    "div",
                    { className: "keyboardShortcut " + (this.state.error && "isError") },
                    o.a.createElement(
                        "div",
                        { className: "row" },
                        o.a.createElement("input", {
                            type: "text",
                            id: this.props.id,
                            value: this.state.value,
                            placeholder: X.a.i18n.getMessage("typeShortcutMessage"),
                            onKeyDown: (e) => this.handleKeyDown(e),
                            onKeyUp: (e) => this.handleKeyUp(e),
                            onChange: (e) => this.handleChange(e),
                            onFocus: (e) => this.handleFocus(e),
                            onBlur: (e) => this.handleBlur(e),
                            style: { imeMode: "disabled" },
                        }),
                        o.a.createElement("button", { className: "clearButton", title: X.a.i18n.getMessage("clear"), onClick: (e) => this.clearShortcut(e) }, o.a.createElement(Me, null)),
                        o.a.createElement("button", { className: "resetButton", title: X.a.i18n.getMessage("reset"), onClick: (e) => this.resetShortcut(e) }, o.a.createElement(Ie, null))
                    ),
                    o.a.createElement("p", { className: "error" }, this.state.error)
                );
            }
        }
        n(67);
        var De = (e) => {
            const { title: t, captions: n, type: r, id: a, children: i } = e,
                l = (t) => {
                    let n = t.target.value;
                    if ("number" == r) {
                        const r = t.target.validity;
                        r.rangeOverflow ? (n = e.max) : r.rangeUnderflow ? (n = e.min) : (!r.badInput && "" != n && r.valid) || (n = e.default);
                    }
                    Object(Oe.e)(a, n);
                },
                s = (e) => {
                    Object(Oe.e)(a, e.target.checked);
                };
            let u, c;
            switch (r) {
                case "checkbox":
                    (u = a), (c = o.a.createElement("label", null, o.a.createElement("input", { type: "checkbox", id: u, onChange: s, defaultChecked: Object(Oe.a)(a) }), o.a.createElement("span", { className: "checkbox" })));
                    break;
                case "number":
                    (u = a), (c = o.a.createElement("input", { type: "number", id: u, min: e.min, max: e.max, step: e.step, placeholder: e.placeholder, onChange: l, defaultValue: Object(Oe.a)(a) }));
                    break;
                case "text":
                    (u = a), (c = o.a.createElement("input", { type: "text", id: u, placeholder: e.placeholder, onChange: l, defaultValue: Object(Oe.a)(a) }));
                    break;
                case "textarea":
                    (u = a), (c = o.a.createElement("textarea", { id: u, spellCheck: !1, placeholder: e.placeholder, onChange: l, defaultValue: Object(Oe.a)(a) }));
                    break;
                case "radio":
                    (u = `${a}_${e.value}`),
                        (c = o.a.createElement(
                            "label",
                            null,
                            o.a.createElement("input", { type: "radio", id: u, name: a, value: e.value, onChange: l, defaultChecked: e.value === Object(Oe.a)(a) ? "checked" : "" }),
                            o.a.createElement("span", { className: "radio" })
                        ));
                    break;
                case "color":
                    (u = a), (c = o.a.createElement("label", null, o.a.createElement("input", { type: "color", id: u, onChange: l, defaultValue: Object(Oe.a)(a) })));
                    break;
                case "select":
                    (u = a),
                        (c = o.a.createElement(
                            "div",
                            { className: "selectWrap" },
                            o.a.createElement(
                                "select",
                                { id: u, onChange: l, defaultValue: Object(Oe.a)(a) },
                                e.options.map((t, n) => o.a.createElement("option", { value: t.value, key: n }, e.useRawOptionName ? t.name : X.a.i18n.getMessage(t.name)))
                            )
                        ));
                    break;
                case "button":
                    (u = ""), (c = o.a.createElement("input", { type: "button", value: X.a.i18n.getMessage(e.value), onClick: e.onClick }));
                    break;
                case "file":
                    (u = ""),
                        (c = o.a.createElement(
                            "label",
                            { className: "button includeSpan", htmlFor: a },
                            o.a.createElement("span", null, X.a.i18n.getMessage(e.value)),
                            o.a.createElement("input", { type: "file", id: a, accept: e.accept, multiple: e.multiple, onChange: e.onChange })
                        ));
                    break;
                case "keyboard-shortcut":
                    (u = a), (c = o.a.createElement(Fe, { id: a, shortcut: e.shortcut, defaultValue: e.defaultValue }));
                    break;
                case "none":
                    (u = ""), (c = "");
            }
            return (
                (null == e.shouldShow || e.shouldShow) &&
                o.a.createElement(
                    "li",
                    { className: `optionContainer ${e.updated ? "updated" : ""} ${e.new ? "new" : ""}` },
                    e.hr && o.a.createElement("hr", null),
                    o.a.createElement(
                        "div",
                        { className: "optionElement " + ("textarea" == r ? "showColumn" : "") },
                        o.a.createElement(
                            "div",
                            { className: "optionText" },
                            o.a.createElement("label", { className: "noHover", htmlFor: u || null }, o.a.createElement("p", null, t ? (e.useRawTitle ? t : X.a.i18n.getMessage(t)) : "")),
                            n.map((t, n) => o.a.createElement("p", { className: "caption", key: n }, t ? (e.useRawCaptions ? t : X.a.i18n.getMessage(t).replace(/<br>/g, "\n")) : "")),
                            e.extraCaption ? e.extraCaption : ""
                        ),
                        o.a.createElement("div", { className: "optionForm" }, c)
                    ),
                    i && o.a.createElement("fieldset", null, o.a.createElement("legend", { className: "noDisplayLegend" }, t ? (e.useRawTitle ? t : X.a.i18n.getMessage(t)) : ""), i)
                )
            );
        };
        n(69);
        function ze() {
            return (ze =
                Object.assign ||
                function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                    }
                    return e;
                }).apply(this, arguments);
        }
        var Be = (e) => {
            const { category: t, elements: n } = e;
            return o.a.createElement(
                "li",
                { className: "categoryContainer" },
                o.a.createElement(
                    "fieldset",
                    null,
                    o.a.createElement("legend", null, o.a.createElement("p", { className: "categoryTitle" }, "" !== t ? X.a.i18n.getMessage(t) : "")),
                    o.a.createElement(
                        "ul",
                        { className: "categoryElements" },
                        n.map((e, t) =>
                            o.a.createElement(
                                "div",
                                { key: t },
                                o.a.createElement(
                                    De,
                                    e,
                                    e.hasOwnProperty("childElements") &&
                                        o.a.createElement(
                                            "ul",
                                            { className: "childElements" },
                                            e.childElements.map((e, t) => o.a.createElement(De, ze({}, e, { key: t })))
                                        )
                                ),
                                o.a.createElement("hr", null)
                            )
                        )
                    )
                )
            );
        };
        function $e() {
            return ($e =
                Object.assign ||
                function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                    }
                    return e;
                }).apply(this, arguments);
        }
        class We extends r.Component {
            constructor(e) {
                super(e), (this.state = { isInit: !1 }), this.init();
            }
            async init() {
                await Object(Oe.c)(), Object(Pe.a)(), Object(Pe.b)(), this.setState({ isInit: !0 });
            }
            render() {
                const e = o.a.createElement(
                    "ul",
                    null,
                    Ne.a.map((e, t) => o.a.createElement(Be, $e({}, e, { key: t }))),
                    o.a.createElement(Be, Ve)
                );
                return o.a.createElement("div", null, o.a.createElement("p", { className: "contentTitle" }, X.a.i18n.getMessage("settingsLabel")), o.a.createElement("hr", null), this.state.isInit ? e : "");
            }
        }
        const Ve = {
            category: "",
            elements: [
                {
                    id: "resetSettings",
                    title: "resetSettingsLabel",
                    captions: ["resetSettingsCaptionLabel"],
                    type: "button",
                    value: "resetSettingsButtonLabel",
                    onClick: async () => {
                        await Object(Oe.d)(), location.reload(!0);
                    },
                },
            ],
        };
        var He = n(31);
        class Ke extends r.Component {
            constructor(e) {
                super(e), (this.state = { commands: [], isInit: !1 }), this.initCommands();
            }
            async initCommands() {
                const e = await X.a.commands.getAll(),
                    t = /^__MSG_(.*)__$/,
                    n = e.map((e) => (t.test(e.description) && (e.description = X.a.i18n.getMessage(e.description.match(t)[1])), e));
                this.setState({ commands: n, isInit: !0 });
            }
            render() {
                const e = {
                    category: "",
                    elements: [
                        {
                            id: "keyboard",
                            title: "keyboardShortcutsLabel",
                            captions: ["setKeyboardShortCutsMessage"],
                            type: "none",
                            childElements: this.state.commands.map((e) => ({ id: e.name, title: e.description, useRawTitle: !0, captions: [], type: "keyboard-shortcut", shortcut: e.shortcut || "", defaultValue: Object(He.a)(e.name) })),
                        },
                    ],
                };
                return o.a.createElement(
                    "div",
                    null,
                    o.a.createElement("p", { className: "contentTitle" }, X.a.i18n.getMessage("keyboardShortcutsLabel")),
                    o.a.createElement("hr", null),
                    this.state.isInit && o.a.createElement("ul", null, o.a.createElement(Be, e))
                );
            }
        }
        var qe = n(40),
            Qe = n.n(qe),
            Ye = n(16),
            Ge = n(15),
            Xe = (e) => {
                const t = Qe.a.parse(e.location.search),
                    n = Ge.version;
                return o.a.createElement(
                    "div",
                    null,
                    o.a.createElement("p", { className: "contentTitle" }, X.a.i18n.getMessage("infoLabel")),
                    o.a.createElement("hr", null),
                    o.a.createElement(De, {
                        title: "extName",
                        captions: [],
                        type: "none",
                        updated: "updated" === t.action,
                        extraCaption: o.a.createElement(
                            "p",
                            { className: "caption" },
                            o.a.createElement("a", { href: "https://github.com/GoogleTraduction/simple-translate/releases", target: "_blank" }, "Version ", n),
                            o.a.createElement("span", null, "　"),
                            o.a.createElement("a", { href: "https://github.com/GoogleTraduction/simple-translate/blob/master/BACKERS.md", target: "_blank" }, X.a.i18n.getMessage("backersLabel"))
                        ),
                    }),
                    o.a.createElement(De, { title: "licenseLabel", captions: ["Mozilla Public License, Version. 2.0"], useRawCaptions: !0, type: "none" }),
                    o.a.createElement("hr", null),
                    o.a.createElement(De, { title: "donationLabel", captions: ["donationCaptionLabel"], type: "none" }),
                    o.a.createElement(De, { title: "", captions: [], type: "none", extraCaption: o.a.createElement("a", { href: Ye.d, target: "_blank" }, o.a.createElement("img", { src: "/icons/patreonButton.png", alt: "Donate" })) }),
                    o.a.createElement(De, {
                        title: "",
                        captions: [],
                        type: "none",
                        extraCaption: o.a.createElement("a", { href: Ye.e, target: "_blank" }, o.a.createElement("img", { src: "/icons/paypal__________Button.png", alt: "Donate" })),
                    }),
                    o.a.createElement(De, {
                        title: "",
                        captions: [],
                        type: "none",
                        extraCaption: o.a.createElement(
                            "div",
                            null,
                            o.a.createElement("p", { className: "caption" }, o.a.createElement("a", { className: "amazonUrl", href: X.a.i18n.getMessage("amazonUrl"), target: "_blank" }, X.a.i18n.getMessage("amazonTitleLabel"))),
                            o.a.createElement("p", { className: "caption" }, "email: ", Ye.b)
                        ),
                    }),
                    o.a.createElement("hr", null),
                    o.a.createElement(De, {
                        title: "",
                        captions: [],
                        type: "none",
                        extraCaption: o.a.createElement(
                            "div",
                            null,
                            o.a.createElement(
                                "p",
                                null,
                                "Chrome" === we()().name
                                    ? o.a.createElement("a", { href: Ye.a, target: "_blank" }, X.a.i18n.getMessage("extensionPageLabel"))
                                    : o.a.createElement("a", { href: Ye.c, target: "_blank" }, X.a.i18n.getMessage("addonPageLabel")),
                                o.a.createElement("span", null, "　"),
                                o.a.createElement("a", { href: "https://github.com/GoogleTraduction/simple-translate", target: "_blank" }, "GitHub")
                            )
                        ),
                    })
                );
            };
        n(73);
        const Ze = "Firefox" == we()().name && we()().version >= 60;
        var Je = () =>
            o.a.createElement(
                "div",
                { className: "contentsArea" },
                o.a.createElement(
                    Te,
                    null,
                    o.a.createElement(_e, { path: "/settings", component: We }),
                    Ze && o.a.createElement(_e, { path: "/shortcuts", component: Ke }),
                    o.a.createElement(_e, { path: "/info", component: Xe }),
                    o.a.createElement(_e, { component: We })
                )
            );
        class et extends r.Component {
            componentDidUpdate(e) {
                this.props.location !== e.location && window.scrollTo(0, 0);
            }
            render() {
                return this.props.children;
            }
        }
        var tt = be(et);
        n(75);
        i.a.render(
            o.a.createElement(() => o.a.createElement(Y, { hashType: "noslash" }, o.a.createElement(tt, null, o.a.createElement("div", { className: "optionsPage" }, o.a.createElement(Ee, null), o.a.createElement(Je, null)))), null),
            document.getElementById("root")
        );
    },
]);
