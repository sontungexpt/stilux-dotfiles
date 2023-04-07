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
        n((n.s = 81));
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
                                          let s = Object.create(null),
                                              u = {
                                                  has: (t, n) => n in e || n in s,
                                                  get(u, c) {
                                                      if (c in s) return s[c];
                                                      if (c in e) {
                                                          let u = e[c];
                                                          if ("function" == typeof u)
                                                              if ("function" == typeof t[c]) u = a(e, e[c], t[c]);
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
                                                                  u = a(e, e[c], t);
                                                              } else u = u.bind(e);
                                                          else {
                                                              if ("object" != typeof u || null === u || (!o(t, c) && !o(l, c)))
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
                                                    let a,
                                                        o,
                                                        i = !1,
                                                        l = new Promise((e) => {
                                                            a = function (t) {
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
                                                        o = e(t, n, a);
                                                    } catch (e) {
                                                        o = Promise.reject(e);
                                                    }
                                                    const u = !0 !== o && ((e) => e && "object" == typeof e && "function" == typeof e.then)(o);
                                                    if (!0 !== o && !u && !i) return !1;
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
                                                    return c(u ? o : l), !0;
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
                                          runtime: { onMessage: l(u), onMessageExternal: l(u), sendMessage: f.bind(null, "sendMessage", { minArgs: 1, maxArgs: 3 }) },
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
            return u;
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
        let s = {};
        const u = async () => {
                const e = await a.a.storage.local.get("Settings");
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
                    t && (await a.a.storage.local.set({ Settings: s }));
            },
            c = async (e, t) => {
                i.a.info("settings/settings", "setSettings()", e, t), (s[e] = t), await a.a.storage.local.set({ Settings: s });
            },
            f = (e) => s[e],
            d = async () => {
                i.a.info("settings/settings", "resetAllSettings()"), (s = {}), await a.a.storage.local.set({ Settings: s }), await u();
            },
            p = (e, t) => {
                Object.keys(e).includes("Settings") && (s = e.Settings.newValue);
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
                                                        return void (window.localStorage[s] = n);
                                                    } catch (e) {}
                                                    try {
                                                        window.document.cookie = encodeURIComponent(s) + "=" + n + ";";
                                                    } catch (e) {}
                                                }
                                            })(n),
                                        a.call(l, n, e),
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
                        : r) || (e.exports = a);
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
                a = n.match(/(opera|coast|chrome|safari|firefox|edge|trident(?=\/))\/?\s*?(\S+)/i) || [];
            if (null !== (t = n.match(/\bIEMobile\/(\S+[0-9])/))) return { name: "IEMobile", version: t[1].split(".")[0], fullVersion: t[1], os: r };
            if (/trident/i.test(a[1])) return { name: "IE", version: (t = /\brv[ :]+(\S+[0-9])/g.exec(n) || [])[1] && t[1].split(".")[0], fullVersion: t[1], os: r };
            if ("Chrome" === a[1]) {
                if (null !== (t = n.match(/\bOPR\/(\d+)/))) return { name: "Opera", version: t[1].split(".")[0], fullVersion: t[1], os: r };
                if (null !== (t = n.match(/\bEdge\/(\S+)/))) return { name: "Edge", version: t[1].split(".")[0], fullVersion: t[1], os: r };
            }
            return (
                "Coast" === (a = a[2] ? [a[1], a[2]] : [navigator.appName, navigator.appVersion, "-?"])[0] && (a[0] = "OperaCoast"),
                "Chrome" !== a[0] && null !== (t = n.match(/version\/(\S+)/i)) && "" !== t && a.splice(1, 1, t[1]),
                "Firefox" === a[0] && (a[0] = /waterfox/i.test(n) ? "Waterfox" : a[0]),
                { name: a[0], version: a[1].split(".")[0], fullVersion: a[1], os: r }
            );
        };
    },
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
                return s;
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
            s = () => {
                Object(o.a)("isDebugMode") ? a.a.enableAll() : a.a.disableAll();
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
                                var a = ((i = r), (l = btoa(unescape(encodeURIComponent(JSON.stringify(i))))), (s = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(l)), "/*# ".concat(s, " */")),
                                    o = r.sources.map(function (e) {
                                        return "/*# sourceURL=".concat(r.sourceRoot || "").concat(e, " */");
                                    });
                                return [n].concat(o).concat([a]).join("\n");
                            }
                            var i, l, s;
                            return [n].join("\n");
                        })(t, e);
                        return t[2] ? "@media ".concat(t[2], " {").concat(n, "}") : n;
                    }).join("");
                }),
                (t.i = function (e, n, r) {
                    "string" == typeof e && (e = [[null, e, ""]]);
                    var a = {};
                    if (r)
                        for (var o = 0; o < this.length; o++) {
                            var i = this[o][0];
                            null != i && (a[i] = !0);
                        }
                    for (var l = 0; l < e.length; l++) {
                        var s = [].concat(e[l]);
                        (r && a[s[0]]) || (n && (s[2] ? (s[2] = "".concat(n, " and ").concat(s[2])) : (s[2] = n)), t.push(s));
                    }
                }),
                t
            );
        };
    },
    function (e, t, n) {
        var r,
            a,
            o = {},
            i =
                ((r = function () {
                    return window && document && document.all && !window.atob;
                }),
                function () {
                    return void 0 === a && (a = r.apply(this, arguments)), a;
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
            f = [],
            d = n(35);
        function p(e, t) {
            for (var n = 0; n < e.length; n++) {
                var r = e[n],
                    a = o[r.id];
                if (a) {
                    a.refs++;
                    for (var i = 0; i < a.parts.length; i++) a.parts[i](r.parts[i]);
                    for (; i < r.parts.length; i++) a.parts.push(y(r.parts[i], t));
                } else {
                    var l = [];
                    for (i = 0; i < r.parts.length; i++) l.push(y(r.parts[i], t));
                    o[r.id] = { id: r.id, refs: 1, parts: l };
                }
            }
        }
        function g(e, t) {
            for (var n = [], r = {}, a = 0; a < e.length; a++) {
                var o = e[a],
                    i = t.base ? o[0] + t.base : o[0],
                    l = { css: o[1], media: o[2], sourceMap: o[3] };
                r[i] ? r[i].parts.push(l) : n.push((r[i] = { id: i, parts: [l] }));
            }
            return n;
        }
        function m(e, t) {
            var n = s(e.insertInto);
            if (!n) throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
            var r = f[f.length - 1];
            if ("top" === e.insertAt) r ? (r.nextSibling ? n.insertBefore(t, r.nextSibling) : n.appendChild(t)) : n.insertBefore(t, n.firstChild), f.push(t);
            else if ("bottom" === e.insertAt) n.appendChild(t);
            else {
                if ("object" != typeof e.insertAt || !e.insertAt.before)
                    throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
                var a = s(e.insertInto + " " + e.insertAt.before);
                n.insertBefore(t, a);
            }
        }
        function h(e) {
            if (null === e.parentNode) return !1;
            e.parentNode.removeChild(e);
            var t = f.indexOf(e);
            t >= 0 && f.splice(t, 1);
        }
        function v(e) {
            var t = document.createElement("style");
            return void 0 === e.attrs.type && (e.attrs.type = "text/css"), b(t, e.attrs), m(e, t), t;
        }
        function b(e, t) {
            Object.keys(t).forEach(function (n) {
                e.setAttribute(n, t[n]);
            });
        }
        function y(e, t) {
            var n, r, a, o;
            if (t.transform && e.css) {
                if (!(o = t.transform(e.css))) return function () {};
                e.css = o;
            }
            if (t.singleton) {
                var i = c++;
                (n = u || (u = v(t))), (r = k.bind(null, n, i, !1)), (a = k.bind(null, n, i, !0));
            } else
                e.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa
                    ? ((n = (function (e) {
                          var t = document.createElement("link");
                          return void 0 === e.attrs.type && (e.attrs.type = "text/css"), (e.attrs.rel = "stylesheet"), b(t, e.attrs), m(e, t), t;
                      })(t)),
                      (r = E.bind(null, n, t)),
                      (a = function () {
                          h(n), n.href && URL.revokeObjectURL(n.href);
                      }))
                    : ((n = v(t)),
                      (r = C.bind(null, n)),
                      (a = function () {
                          h(n);
                      }));
            return (
                r(e),
                function (t) {
                    if (t) {
                        if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap) return;
                        r((e = t));
                    } else a();
                }
            );
        }
        e.exports = function (e, t) {
            if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document) throw new Error("The style-loader cannot be used in a non-browser environment");
            ((t = t || {}).attrs = "object" == typeof t.attrs ? t.attrs : {}), t.singleton || "boolean" == typeof t.singleton || (t.singleton = i()), t.insertInto || (t.insertInto = "head"), t.insertAt || (t.insertAt = "bottom");
            var n = g(e, t);
            return (
                p(n, t),
                function (e) {
                    for (var r = [], a = 0; a < n.length; a++) {
                        var i = n[a];
                        (l = o[i.id]).refs--, r.push(l);
                    }
                    e && p(g(e, t), t);
                    for (a = 0; a < r.length; a++) {
                        var l;
                        if (0 === (l = r[a]).refs) {
                            for (var s = 0; s < l.parts.length; s++) l.parts[s]();
                            delete o[l.id];
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
            var a = n ? "" : r.css;
            if (e.styleSheet) e.styleSheet.cssText = w(t, a);
            else {
                var o = document.createTextNode(a),
                    i = e.childNodes;
                i[t] && e.removeChild(i[t]), i.length ? e.insertBefore(o, i[t]) : e.appendChild(o);
            }
        }
        function C(e, t) {
            var n = t.css,
                r = t.media;
            if ((r && e.setAttribute("media", r), e.styleSheet)) e.styleSheet.cssText = n;
            else {
                for (; e.firstChild; ) e.removeChild(e.firstChild);
                e.appendChild(document.createTextNode(n));
            }
        }
        function E(e, t, n) {
            var r = n.css,
                a = n.sourceMap,
                o = void 0 === t.convertToAbsoluteUrls && a;
            (t.convertToAbsoluteUrls || o) && (r = d(r)), a && (r += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(a)))) + " */");
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
    function (e, t, n) {
        "use strict";
        n.d(t, "b", function () {
            return o;
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
        const a = n.n(r)()().name,
            o = `GoogleTraduction.firefox+st${"Chrome" === a ? "fc" : ""}@gmail.com`,
            i = `https://www.paypal__________.com/cgi-bin/webscr?cmd=_xclick&no_shipping=1&business=GoogleTraduction.firefox@gmail.com&item_name=Translate Options for ${a} - Donation`,
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
                  for (var n, l, s = i(e), u = 1; u < arguments.length; u++) {
                      for (var c in (n = Object(arguments[u]))) a.call(n, c) && (s[c] = n[c]);
                      if (r) {
                          l = r(n);
                          for (var f = 0; f < l.length; f++) o.call(n, l[f]) && (s[l[f]] = n[l[f]]);
                      }
                  }
                  return s;
              };
    },
    function (e, t, n) {
        "use strict";
        e.exports = function (e, t, n, r, a, o, i, l) {
            if (!e) {
                var s;
                if (void 0 === t) s = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
                else {
                    var u = [n, r, a, o, i, l],
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
            s = l ? Symbol.for("react.element") : 60103,
            u = l ? Symbol.for("react.portal") : 60106,
            c = l ? Symbol.for("react.fragment") : 60107,
            f = l ? Symbol.for("react.strict_mode") : 60108,
            d = l ? Symbol.for("react.profiler") : 60114,
            p = l ? Symbol.for("react.provider") : 60109,
            g = l ? Symbol.for("react.context") : 60110,
            m = l ? Symbol.for("react.async_mode") : 60111,
            h = l ? Symbol.for("react.forward_ref") : 60112;
        l && Symbol.for("react.timeout");
        var v = "function" == typeof Symbol && Symbol.iterator;
        function b(e) {
            for (var t = arguments.length - 1, n = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, r = 0; r < t; r++) n += "&args[]=" + encodeURIComponent(arguments[r + 1]);
            a(!1, "Minified React error #" + e + "; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ", n);
        }
        var y = {
            isMounted: function () {
                return !1;
            },
            enqueueForceUpdate: function () {},
            enqueueReplaceState: function () {},
            enqueueSetState: function () {},
        };
        function x(e, t, n) {
            (this.props = e), (this.context = t), (this.refs = o), (this.updater = n || y);
        }
        function w() {}
        function k(e, t, n) {
            (this.props = e), (this.context = t), (this.refs = o), (this.updater = n || y);
        }
        (x.prototype.isReactComponent = {}),
            (x.prototype.setState = function (e, t) {
                "object" != typeof e && "function" != typeof e && null != e && b("85"), this.updater.enqueueSetState(this, e, t, "setState");
            }),
            (x.prototype.forceUpdate = function (e) {
                this.updater.enqueueForceUpdate(this, e, "forceUpdate");
            }),
            (w.prototype = x.prototype);
        var C = (k.prototype = new w());
        (C.constructor = k), r(C, x.prototype), (C.isPureReactComponent = !0);
        var E = { current: null },
            A = Object.prototype.hasOwnProperty,
            T = { key: !0, ref: !0, __self: !0, __source: !0 };
        function S(e, t, n) {
            var r = void 0,
                a = {},
                o = null,
                i = null;
            if (null != t) for (r in (void 0 !== t.ref && (i = t.ref), void 0 !== t.key && (o = "" + t.key), t)) A.call(t, r) && !T.hasOwnProperty(r) && (a[r] = t[r]);
            var l = arguments.length - 2;
            if (1 === l) a.children = n;
            else if (1 < l) {
                for (var u = Array(l), c = 0; c < l; c++) u[c] = arguments[c + 2];
                a.children = u;
            }
            if (e && e.defaultProps) for (r in (l = e.defaultProps)) void 0 === a[r] && (a[r] = l[r]);
            return { $$typeof: s, type: e, key: o, ref: i, props: a, _owner: E.current };
        }
        function _(e) {
            return "object" == typeof e && null !== e && e.$$typeof === s;
        }
        var P = /\/+/g,
            L = [];
        function O(e, t, n, r) {
            if (L.length) {
                var a = L.pop();
                return (a.result = e), (a.keyPrefix = t), (a.func = n), (a.context = r), (a.count = 0), a;
            }
            return { result: e, keyPrefix: t, func: n, context: r, count: 0 };
        }
        function N(e) {
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
                            case s:
                            case u:
                                o = !0;
                        }
                }
            if (o) return n(r, e, "" === t ? "." + M(e, 0) : t), 1;
            if (((o = 0), (t = "" === t ? "." : t + ":"), Array.isArray(e)))
                for (var i = 0; i < e.length; i++) {
                    var l = t + M((a = e[i]), i);
                    o += R(a, l, n, r);
                }
            else if ((null == e ? (l = null) : (l = "function" == typeof (l = (v && e[v]) || e["@@iterator"]) ? l : null), "function" == typeof l))
                for (e = l.call(e), i = 0; !(a = e.next()).done; ) o += R((a = a.value), (l = t + M(a, i++)), n, r);
            else "object" === a && b("31", "[object Object]" === (n = "" + e) ? "object with keys {" + Object.keys(e).join(", ") + "}" : n, "");
            return o;
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
        function I(e, t) {
            e.func.call(e.context, t, e.count++);
        }
        function U(e, t, n) {
            var r = e.result,
                a = e.keyPrefix;
            (e = e.func.call(e.context, t, e.count++)),
                Array.isArray(e)
                    ? j(e, r, n, i.thatReturnsArgument)
                    : null != e &&
                      (_(e) && ((t = a + (!e.key || (t && t.key === e.key) ? "" : ("" + e.key).replace(P, "$&/") + "/") + n), (e = { $$typeof: s, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner })), r.push(e));
        }
        function j(e, t, n, r, a) {
            var o = "";
            null != n && (o = ("" + n).replace(P, "$&/") + "/"), (t = O(t, o, r, a)), null == e || R(e, "", U, t), N(t);
        }
        var F = {
                Children: {
                    map: function (e, t, n) {
                        if (null == e) return e;
                        var r = [];
                        return j(e, r, null, t, n), r;
                    },
                    forEach: function (e, t, n) {
                        if (null == e) return e;
                        (t = O(null, null, t, n)), null == e || R(e, "", I, t), N(t);
                    },
                    count: function (e) {
                        return null == e ? 0 : R(e, "", i.thatReturnsNull, null);
                    },
                    toArray: function (e) {
                        var t = [];
                        return j(e, t, null, i.thatReturnsArgument), t;
                    },
                    only: function (e) {
                        return _(e) || b("143"), e;
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
                        ((e = { $$typeof: g, _calculateChangedBits: t, _defaultValue: e, _currentValue: e, _currentValue2: e, _changedBits: 0, _changedBits2: 0, Provider: null, Consumer: null }).Provider = { $$typeof: p, _context: e }),
                        (e.Consumer = e)
                    );
                },
                forwardRef: function (e) {
                    return { $$typeof: h, render: e };
                },
                Fragment: c,
                StrictMode: f,
                unstable_AsyncMode: m,
                unstable_Profiler: d,
                createElement: S,
                cloneElement: function (e, t, n) {
                    null == e && b("267", e);
                    var a = void 0,
                        o = r({}, e.props),
                        i = e.key,
                        l = e.ref,
                        u = e._owner;
                    if (null != t) {
                        void 0 !== t.ref && ((l = t.ref), (u = E.current)), void 0 !== t.key && (i = "" + t.key);
                        var c = void 0;
                        for (a in (e.type && e.type.defaultProps && (c = e.type.defaultProps), t)) A.call(t, a) && !T.hasOwnProperty(a) && (o[a] = void 0 === t[a] && void 0 !== c ? c[a] : t[a]);
                    }
                    if (1 === (a = arguments.length - 2)) o.children = n;
                    else if (1 < a) {
                        c = Array(a);
                        for (var f = 0; f < a; f++) c[f] = arguments[f + 2];
                        o.children = c;
                    }
                    return { $$typeof: s, type: e.type, key: i, ref: l, props: o, _owner: u };
                },
                createFactory: function (e) {
                    var t = S.bind(null, e);
                    return (t.type = e), t;
                },
                isValidElement: _,
                version: "16.4.2",
                __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: { ReactCurrentOwner: E, assign: r },
            },
            z = { default: F },
            D = (z && F) || z;
        e.exports = D.default ? D.default : D;
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
            s = n(24),
            u = n(25),
            c = n(26),
            f = n(19);
        function d(e) {
            for (var t = arguments.length - 1, n = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, a = 0; a < t; a++) n += "&args[]=" + encodeURIComponent(arguments[a + 1]);
            r(!1, "Minified React error #" + e + "; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ", n);
        }
        function p(e, t, n, r, a, o, i, l, s) {
            (this._hasCaughtError = !1), (this._caughtError = null);
            var u = Array.prototype.slice.call(arguments, 3);
            try {
                t.apply(n, u);
            } catch (e) {
                (this._caughtError = e), (this._hasCaughtError = !0);
            }
        }
        a || d("227");
        var g = {
            _caughtError: null,
            _hasCaughtError: !1,
            _rethrowError: null,
            _hasRethrowError: !1,
            invokeGuardedCallback: function (e, t, n, r, a, o, i, l, s) {
                p.apply(g, arguments);
            },
            invokeGuardedCallbackAndCatchFirstError: function (e, t, n, r, a, o, i, l, s) {
                if ((g.invokeGuardedCallback.apply(this, arguments), g.hasCaughtError())) {
                    var u = g.clearCaughtError();
                    g._hasRethrowError || ((g._hasRethrowError = !0), (g._rethrowError = u));
                }
            },
            rethrowCaughtError: function () {
                return m.apply(g, arguments);
            },
            hasCaughtError: function () {
                return g._hasCaughtError;
            },
            clearCaughtError: function () {
                if (g._hasCaughtError) {
                    var e = g._caughtError;
                    return (g._caughtError = null), (g._hasCaughtError = !1), e;
                }
                d("198");
            },
        };
        function m() {
            if (g._hasRethrowError) {
                var e = g._rethrowError;
                throw ((g._rethrowError = null), (g._hasRethrowError = !1), e);
            }
        }
        var h = null,
            v = {};
        function b() {
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
                            var s = o.phasedRegistrationNames;
                            if (s) {
                                for (a in s) s.hasOwnProperty(a) && y(s[a], i, l);
                                a = !0;
                            } else o.registrationName ? (y(o.registrationName, i, l), (a = !0)) : (a = !1);
                            a || d("98", r, e);
                        }
                }
        }
        function y(e, t, n) {
            k[e] && d("100", e), (k[e] = t), (C[e] = t.eventTypes[n].dependencies);
        }
        var x = [],
            w = {},
            k = {},
            C = {};
        function E(e) {
            h && d("101"), (h = Array.prototype.slice.call(e)), b();
        }
        function A(e) {
            var t,
                n = !1;
            for (t in e)
                if (e.hasOwnProperty(t)) {
                    var r = e[t];
                    (v.hasOwnProperty(t) && v[t] === r) || (v[t] && d("102", t), (v[t] = r), (n = !0));
                }
            n && b();
        }
        var T = { plugins: x, eventNameDispatchConfigs: w, registrationNameModules: k, registrationNameDependencies: C, possibleRegistrationNames: null, injectEventPluginOrder: E, injectEventPluginsByName: A },
            S = null,
            _ = null,
            P = null;
        function L(e, t, n, r) {
            (t = e.type || "unknown-event"), (e.currentTarget = P(r)), g.invokeGuardedCallbackAndCatchFirstError(t, n, void 0, e), (e.currentTarget = null);
        }
        function O(e, t) {
            return null == t && d("30"), null == e ? t : Array.isArray(e) ? (Array.isArray(t) ? (e.push.apply(e, t), e) : (e.push(t), e)) : Array.isArray(t) ? [e].concat(t) : [e, t];
        }
        function N(e, t, n) {
            Array.isArray(e) ? e.forEach(t, n) : e && t.call(n, e);
        }
        var R = null;
        function M(e, t) {
            if (e) {
                var n = e._dispatchListeners,
                    r = e._dispatchInstances;
                if (Array.isArray(n)) for (var a = 0; a < n.length && !e.isPropagationStopped(); a++) L(e, t, n[a], r[a]);
                else n && L(e, t, n, r);
                (e._dispatchListeners = null), (e._dispatchInstances = null), e.isPersistent() || e.constructor.release(e);
            }
        }
        function I(e) {
            return M(e, !0);
        }
        function U(e) {
            return M(e, !1);
        }
        var j = { injectEventPluginOrder: E, injectEventPluginsByName: A };
        function F(e, t) {
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
        function z(e, t) {
            null !== e && (R = O(R, e)), (e = R), (R = null), e && (N(e, t ? I : U), R && d("95"), g.rethrowCaughtError());
        }
        function D(e, t, n, r) {
            for (var a = null, o = 0; o < x.length; o++) {
                var i = x[o];
                i && (i = i.extractEvents(e, t, n, r)) && (a = O(a, i));
            }
            z(a, !1);
        }
        var B = { injection: j, getListener: F, runEventsInBatch: z, runExtractedEventsInBatch: D },
            W = Math.random().toString(36).slice(2),
            V = "__reactInternalInstance$" + W,
            $ = "__reactEventHandlers$" + W;
        function H(e) {
            if (e[V]) return e[V];
            for (; !e[V]; ) {
                if (!e.parentNode) return null;
                e = e.parentNode;
            }
            return 5 === (e = e[V]).tag || 6 === e.tag ? e : null;
        }
        function q(e) {
            if (5 === e.tag || 6 === e.tag) return e.stateNode;
            d("33");
        }
        function K(e) {
            return e[$] || null;
        }
        var Q = {
            precacheFiberNode: function (e, t) {
                t[V] = e;
            },
            getClosestInstanceFromNode: H,
            getInstanceFromNode: function (e) {
                return !(e = e[V]) || (5 !== e.tag && 6 !== e.tag) ? null : e;
            },
            getNodeFromInstance: q,
            getFiberCurrentPropsFromNode: K,
            updateFiberProps: function (e, t) {
                e[$] = t;
            },
        };
        function X(e) {
            do {
                e = e.return;
            } while (e && 5 !== e.tag);
            return e || null;
        }
        function G(e, t, n) {
            for (var r = []; e; ) r.push(e), (e = X(e));
            for (e = r.length; 0 < e--; ) t(r[e], "captured", n);
            for (e = 0; e < r.length; e++) t(r[e], "bubbled", n);
        }
        function Y(e, t, n) {
            (t = F(e, n.dispatchConfig.phasedRegistrationNames[t])) && ((n._dispatchListeners = O(n._dispatchListeners, t)), (n._dispatchInstances = O(n._dispatchInstances, e)));
        }
        function Z(e) {
            e && e.dispatchConfig.phasedRegistrationNames && G(e._targetInst, Y, e);
        }
        function J(e) {
            if (e && e.dispatchConfig.phasedRegistrationNames) {
                var t = e._targetInst;
                G((t = t ? X(t) : null), Y, e);
            }
        }
        function ee(e, t, n) {
            e && n && n.dispatchConfig.registrationName && (t = F(e, n.dispatchConfig.registrationName)) && ((n._dispatchListeners = O(n._dispatchListeners, t)), (n._dispatchInstances = O(n._dispatchInstances, e)));
        }
        function te(e) {
            e && e.dispatchConfig.registrationName && ee(e._targetInst, null, e);
        }
        function ne(e) {
            N(e, Z);
        }
        function re(e, t, n, r) {
            if (n && r)
                e: {
                    for (var a = n, o = r, i = 0, l = a; l; l = X(l)) i++;
                    l = 0;
                    for (var s = o; s; s = X(s)) l++;
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
                N(e, J);
            },
            accumulateEnterLeaveDispatches: re,
            accumulateDirectDispatches: function (e) {
                N(e, te);
            },
        };
        function oe(e, t) {
            var n = {};
            return (n[e.toLowerCase()] = t.toLowerCase()), (n["Webkit" + e] = "webkit" + t), (n["Moz" + e] = "moz" + t), (n["ms" + e] = "MS" + t), (n["O" + e] = "o" + t.toLowerCase()), n;
        }
        var ie = { animationend: oe("Animation", "AnimationEnd"), animationiteration: oe("Animation", "AnimationIteration"), animationstart: oe("Animation", "AnimationStart"), transitionend: oe("Transition", "TransitionEnd") },
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
        o.canUseDOM &&
            ((se = document.createElement("div").style),
            "AnimationEvent" in window || (delete ie.animationend.animation, delete ie.animationiteration.animation, delete ie.animationstart.animation),
            "TransitionEvent" in window || delete ie.transitionend.transition);
        var ce = ue("animationend"),
            fe = ue("animationiteration"),
            de = ue("animationstart"),
            pe = ue("transitionend"),
            ge = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(
                " "
            ),
            me = null;
        function he() {
            return !me && o.canUseDOM && (me = "textContent" in document.documentElement ? "textContent" : "innerText"), me;
        }
        var ve = { _root: null, _startText: null, _fallbackText: null };
        function be() {
            if (ve._fallbackText) return ve._fallbackText;
            var e,
                t,
                n = ve._startText,
                r = n.length,
                a = ye(),
                o = a.length;
            for (e = 0; e < r && n[e] === a[e]; e++);
            var i = r - e;
            for (t = 1; t <= i && n[r - t] === a[o - t]; t++);
            return (ve._fallbackText = a.slice(e, 1 < t ? 1 - t : void 0)), ve._fallbackText;
        }
        function ye() {
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
        function Ce(e, t, n, r) {
            if (this.eventPool.length) {
                var a = this.eventPool.pop();
                return this.call(a, e, t, n, r), a;
            }
            return new this(e, t, n, r);
        }
        function Ee(e) {
            e instanceof this || d("223"), e.destructor(), 10 > this.eventPool.length && this.eventPool.push(e);
        }
        function Ae(e) {
            (e.eventPool = []), (e.getPooled = Ce), (e.release = Ee);
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
                return i(a, n.prototype), (n.prototype = a), (n.prototype.constructor = n), (n.Interface = i({}, r.Interface, e)), (n.extend = r.extend), Ae(n), n;
            }),
            Ae(ke);
        var Te = ke.extend({ data: null }),
            Se = ke.extend({ data: null }),
            _e = [9, 13, 27, 32],
            Pe = o.canUseDOM && "CompositionEvent" in window,
            Le = null;
        o.canUseDOM && "documentMode" in document && (Le = document.documentMode);
        var Oe = o.canUseDOM && "TextEvent" in window && !Le,
            Ne = o.canUseDOM && (!Pe || (Le && 8 < Le && 11 >= Le)),
            Re = String.fromCharCode(32),
            Me = {
                beforeInput: { phasedRegistrationNames: { bubbled: "onBeforeInput", captured: "onBeforeInputCapture" }, dependencies: ["compositionend", "keypress", "textInput", "paste"] },
                compositionEnd: { phasedRegistrationNames: { bubbled: "onCompositionEnd", captured: "onCompositionEndCapture" }, dependencies: "blur compositionend keydown keypress keyup mousedown".split(" ") },
                compositionStart: { phasedRegistrationNames: { bubbled: "onCompositionStart", captured: "onCompositionStartCapture" }, dependencies: "blur compositionstart keydown keypress keyup mousedown".split(" ") },
                compositionUpdate: { phasedRegistrationNames: { bubbled: "onCompositionUpdate", captured: "onCompositionUpdateCapture" }, dependencies: "blur compositionupdate keydown keypress keyup mousedown".split(" ") },
            },
            Ie = !1;
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
        function je(e) {
            return "object" == typeof (e = e.detail) && "data" in e ? e.data : null;
        }
        var Fe = !1;
        var ze = {
                eventTypes: Me,
                extractEvents: function (e, t, n, r) {
                    var a = void 0,
                        o = void 0;
                    if (Pe)
                        e: {
                            switch (e) {
                                case "compositionstart":
                                    a = Me.compositionStart;
                                    break e;
                                case "compositionend":
                                    a = Me.compositionEnd;
                                    break e;
                                case "compositionupdate":
                                    a = Me.compositionUpdate;
                                    break e;
                            }
                            a = void 0;
                        }
                    else Fe ? Ue(e, n) && (a = Me.compositionEnd) : "keydown" === e && 229 === n.keyCode && (a = Me.compositionStart);
                    return (
                        a
                            ? (Ne && (Fe || a !== Me.compositionStart ? a === Me.compositionEnd && Fe && (o = be()) : ((ve._root = r), (ve._startText = ye()), (Fe = !0))),
                              (a = Te.getPooled(a, t, n, r)),
                              o ? (a.data = o) : null !== (o = je(n)) && (a.data = o),
                              ne(a),
                              (o = a))
                            : (o = null),
                        (e = Oe
                            ? (function (e, t) {
                                  switch (e) {
                                      case "compositionend":
                                          return je(t);
                                      case "keypress":
                                          return 32 !== t.which ? null : ((Ie = !0), Re);
                                      case "textInput":
                                          return (e = t.data) === Re && Ie ? null : e;
                                      default:
                                          return null;
                                  }
                              })(e, n)
                            : (function (e, t) {
                                  if (Fe) return "compositionend" === e || (!Pe && Ue(e, t)) ? ((e = be()), (ve._root = null), (ve._startText = null), (ve._fallbackText = null), (Fe = !1), e) : null;
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
                                          return Ne ? null : t.data;
                                      default:
                                          return null;
                                  }
                              })(e, n))
                            ? (((t = Se.getPooled(Me.beforeInput, t, n, r)).data = e), ne(t))
                            : (t = null),
                        null === o ? t : null === t ? o : [o, t]
                    );
                },
            },
            De = null,
            Be = {
                injectFiberControlledHostComponent: function (e) {
                    De = e;
                },
            },
            We = null,
            Ve = null;
        function $e(e) {
            if ((e = _(e))) {
                (De && "function" == typeof De.restoreControlledState) || d("194");
                var t = S(e.stateNode);
                De.restoreControlledState(e.stateNode, e.type, t);
            }
        }
        function He(e) {
            We ? (Ve ? Ve.push(e) : (Ve = [e])) : (We = e);
        }
        function qe() {
            return null !== We || null !== Ve;
        }
        function Ke() {
            if (We) {
                var e = We,
                    t = Ve;
                if (((Ve = We = null), $e(e), t)) for (e = 0; e < t.length; e++) $e(t[e]);
            }
        }
        var Qe = { injection: Be, enqueueStateRestore: He, needsStateRestore: qe, restoreStateIfNeeded: Ke };
        function Xe(e, t) {
            return e(t);
        }
        function Ge(e, t, n) {
            return e(t, n);
        }
        function Ye() {}
        var Ze = !1;
        function Je(e, t) {
            if (Ze) return e(t);
            Ze = !0;
            try {
                return Xe(e, t);
            } finally {
                (Ze = !1), qe() && (Ye(), Ke());
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
            st = "function" == typeof Symbol && Symbol.for,
            ut = st ? Symbol.for("react.element") : 60103,
            ct = st ? Symbol.for("react.portal") : 60106,
            ft = st ? Symbol.for("react.fragment") : 60107,
            dt = st ? Symbol.for("react.strict_mode") : 60108,
            pt = st ? Symbol.for("react.profiler") : 60114,
            gt = st ? Symbol.for("react.provider") : 60109,
            mt = st ? Symbol.for("react.context") : 60110,
            ht = st ? Symbol.for("react.async_mode") : 60111,
            vt = st ? Symbol.for("react.forward_ref") : 60112,
            bt = st ? Symbol.for("react.timeout") : 60113,
            yt = "function" == typeof Symbol && Symbol.iterator;
        function xt(e) {
            return null == e ? null : "function" == typeof (e = (yt && e[yt]) || e["@@iterator"]) ? e : null;
        }
        function wt(e) {
            var t = e.type;
            if ("function" == typeof t) return t.displayName || t.name;
            if ("string" == typeof t) return t;
            switch (t) {
                case ht:
                    return "AsyncMode";
                case mt:
                    return "Context.Consumer";
                case ft:
                    return "ReactFragment";
                case ct:
                    return "ReactPortal";
                case pt:
                    return "Profiler(" + e.pendingProps.id + ")";
                case gt:
                    return "Context.Provider";
                case dt:
                    return "StrictMode";
                case bt:
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
        var Ct = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
            Et = Object.prototype.hasOwnProperty,
            At = {},
            Tt = {};
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
        function Ot(e, t, n, r) {
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
                          return !!Et.call(Tt, e) || (!Et.call(At, e) && (Ct.test(e) ? (Tt[e] = !0) : ((At[e] = !0), !1)));
                      })(t) && (null === n ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
                    : a.mustUseProperty
                    ? (e[a.propertyName] = null === n ? 3 !== a.type && "" : n)
                    : ((t = a.attributeName), (r = a.attributeNamespace), null === n ? e.removeAttribute(t) : ((n = 3 === (a = a.type) || (4 === a && !0 === n) ? "" : "" + n), r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
        }
        function Nt(e, t) {
            var n = t.checked;
            return i({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: null != n ? n : e._wrapperState.initialChecked });
        }
        function Rt(e, t) {
            var n = null == t.defaultValue ? "" : t.defaultValue,
                r = null != t.checked ? t.checked : t.defaultChecked;
            (n = Ft(null != t.value ? t.value : n)), (e._wrapperState = { initialChecked: r, initialValue: n, controlled: "checkbox" === t.type || "radio" === t.type ? null != t.checked : null != t.value });
        }
        function Mt(e, t) {
            null != (t = t.checked) && Ot(e, "checked", t, !1);
        }
        function It(e, t) {
            Mt(e, t);
            var n = Ft(t.value);
            null != n && ("number" === t.type ? ((0 === n && "" === e.value) || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n)),
                t.hasOwnProperty("value") ? jt(e, t.type, n) : t.hasOwnProperty("defaultValue") && jt(e, t.type, Ft(t.defaultValue)),
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
        function jt(e, t, n) {
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
        var zt = { change: { phasedRegistrationNames: { bubbled: "onChange", captured: "onChangeCapture" }, dependencies: "blur change click focus input keydown keyup selectionchange".split(" ") } };
        function Dt(e, t, n) {
            return ((e = ke.getPooled(zt.change, e, t, n)).type = "change"), He(n), ne(e), e;
        }
        var Bt = null,
            Wt = null;
        function Vt(e) {
            z(e, !1);
        }
        function $t(e) {
            if (it(q(e))) return e;
        }
        function Ht(e, t) {
            if ("change" === e) return t;
        }
        var qt = !1;
        function Kt() {
            Bt && (Bt.detachEvent("onpropertychange", Qt), (Wt = Bt = null));
        }
        function Qt(e) {
            "value" === e.propertyName && $t(Wt) && Je(Vt, (e = Dt(Wt, e, nt(e))));
        }
        function Xt(e, t, n) {
            "focus" === e ? (Kt(), (Wt = n), (Bt = t).attachEvent("onpropertychange", Qt)) : "blur" === e && Kt();
        }
        function Gt(e) {
            if ("selectionchange" === e || "keyup" === e || "keydown" === e) return $t(Wt);
        }
        function Yt(e, t) {
            if ("click" === e) return $t(t);
        }
        function Zt(e, t) {
            if ("input" === e || "change" === e) return $t(t);
        }
        o.canUseDOM && (qt = rt("input") && (!document.documentMode || 9 < document.documentMode));
        var Jt = {
                eventTypes: zt,
                _isInputEventSupported: qt,
                extractEvents: function (e, t, n, r) {
                    var a = t ? q(t) : window,
                        o = void 0,
                        i = void 0,
                        l = a.nodeName && a.nodeName.toLowerCase();
                    if (
                        ("select" === l || ("input" === l && "file" === a.type)
                            ? (o = Ht)
                            : tt(a)
                            ? qt
                                ? (o = Zt)
                                : ((o = Gt), (i = Xt))
                            : (l = a.nodeName) && "input" === l.toLowerCase() && ("checkbox" === a.type || "radio" === a.type) && (o = Yt),
                        o && (o = o(e, t)))
                    )
                        return Dt(o, n, r);
                    i && i(e, a, t), "blur" === e && (e = a._wrapperState) && e.controlled && "number" === a.type && jt(a, "number", a.value);
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
            sn = {
                eventTypes: ln,
                extractEvents: function (e, t, n, r) {
                    var a = "mouseover" === e || "pointerover" === e,
                        o = "mouseout" === e || "pointerout" === e;
                    if ((a && (n.relatedTarget || n.fromElement)) || (!o && !a)) return null;
                    if (((a = r.window === r ? r : (a = r.ownerDocument) ? a.defaultView || a.parentWindow : window), o ? ((o = t), (t = (t = n.relatedTarget || n.toElement) ? H(t) : null)) : (o = null), o === t)) return null;
                    var i = void 0,
                        l = void 0,
                        s = void 0,
                        u = void 0;
                    return (
                        "mouseout" === e || "mouseover" === e
                            ? ((i = an), (l = ln.mouseLeave), (s = ln.mouseEnter), (u = "mouse"))
                            : ("pointerout" !== e && "pointerover" !== e) || ((i = on), (l = ln.pointerLeave), (s = ln.pointerEnter), (u = "pointer")),
                        (e = null == o ? a : q(o)),
                        (a = null == t ? a : q(t)),
                        ((l = i.getPooled(l, o, n, r)).type = u + "leave"),
                        (l.target = e),
                        (l.relatedTarget = a),
                        ((n = i.getPooled(s, t, n, r)).type = u + "enter"),
                        (n.target = a),
                        (n.relatedTarget = e),
                        re(l, n, o, t),
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
            2 !== un(e) && d("188");
        }
        function fn(e) {
            var t = e.alternate;
            if (!t) return 3 === (t = un(e)) && d("188"), 1 === t ? null : e;
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
            gn = ke.extend({
                clipboardData: function (e) {
                    return "clipboardData" in e ? e.clipboardData : window.clipboardData;
                },
            }),
            mn = en.extend({ relatedTarget: null });
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
            bn = {
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
            yn = en.extend({
                key: function (e) {
                    if (e.key) {
                        var t = vn[e.key] || e.key;
                        if ("Unidentified" !== t) return t;
                    }
                    return "keypress" === e.type ? (13 === (e = hn(e)) ? "Enter" : String.fromCharCode(e)) : "keydown" === e.type || "keyup" === e.type ? bn[e.keyCode] || "Unidentified" : "";
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
            Cn = an.extend({
                deltaX: function (e) {
                    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
                },
                deltaY: function (e) {
                    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
                },
                deltaZ: null,
                deltaMode: null,
            }),
            En = [
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
            An = {},
            Tn = {};
        function Sn(e, t) {
            var n = e[0],
                r = "on" + ((e = e[1])[0].toUpperCase() + e.slice(1));
            (t = { phasedRegistrationNames: { bubbled: r, captured: r + "Capture" }, dependencies: [n], isInteractive: t }), (An[e] = t), (Tn[n] = t);
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
            En.forEach(function (e) {
                Sn(e, !1);
            });
        var _n = {
                eventTypes: An,
                isInteractiveTopLevelEventType: function (e) {
                    return void 0 !== (e = Tn[e]) && !0 === e.isInteractive;
                },
                extractEvents: function (e, t, n, r) {
                    var a = Tn[e];
                    if (!a) return null;
                    switch (e) {
                        case "keypress":
                            if (0 === hn(n)) return null;
                        case "keydown":
                        case "keyup":
                            e = yn;
                            break;
                        case "blur":
                        case "focus":
                            e = mn;
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
                            e = Cn;
                            break;
                        case "copy":
                        case "cut":
                        case "paste":
                            e = gn;
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
        function On(e) {
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
            for (n = 0; n < e.ancestors.length; n++) (t = e.ancestors[n]), D(e.topLevelType, t, e.nativeEvent, nt(e.nativeEvent));
        }
        var Nn = !0;
        function Rn(e) {
            Nn = !!e;
        }
        function Mn(e, t) {
            if (!t) return null;
            var n = (Pn(e) ? Un : jn).bind(null, e);
            t.addEventListener(e, n, !1);
        }
        function In(e, t) {
            if (!t) return null;
            var n = (Pn(e) ? Un : jn).bind(null, e);
            t.addEventListener(e, n, !0);
        }
        function Un(e, t) {
            Ge(jn, e, t);
        }
        function jn(e, t) {
            if (Nn) {
                var n = nt(t);
                if ((null === (n = H(n)) || "number" != typeof n.tag || 2 === un(n) || (n = null), Ln.length)) {
                    var r = Ln.pop();
                    (r.topLevelType = e), (r.nativeEvent = t), (r.targetInst = n), (e = r);
                } else e = { topLevelType: e, nativeEvent: t, targetInst: n, ancestors: [] };
                try {
                    Je(On, e);
                } finally {
                    (e.topLevelType = null), (e.nativeEvent = null), (e.targetInst = null), (e.ancestors.length = 0), 10 > Ln.length && Ln.push(e);
                }
            }
        }
        var Fn = {
                get _enabled() {
                    return Nn;
                },
                setEnabled: Rn,
                isEnabled: function () {
                    return Nn;
                },
                trapBubbledEvent: Mn,
                trapCapturedEvent: In,
                dispatchEvent: jn,
            },
            zn = {},
            Dn = 0,
            Bn = "_reactListenersID" + ("" + Math.random()).slice(2);
        function Wn(e) {
            return Object.prototype.hasOwnProperty.call(e, Bn) || ((e[Bn] = Dn++), (zn[e[Bn]] = {})), zn[e[Bn]];
        }
        function Vn(e) {
            for (; e && e.firstChild; ) e = e.firstChild;
            return e;
        }
        function $n(e, t) {
            var n,
                r = Vn(e);
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
                r = Vn(r);
            }
        }
        function Hn(e) {
            var t = e && e.nodeName && e.nodeName.toLowerCase();
            return t && (("input" === t && ("text" === e.type || "search" === e.type || "tel" === e.type || "url" === e.type || "password" === e.type)) || "textarea" === t || "true" === e.contentEditable);
        }
        var qn = o.canUseDOM && "documentMode" in document && 11 >= document.documentMode,
            Kn = { select: { phasedRegistrationNames: { bubbled: "onSelect", captured: "onSelectCapture" }, dependencies: "blur contextmenu focus keydown keyup mousedown mouseup selectionchange".split(" ") } },
            Qn = null,
            Xn = null,
            Gn = null,
            Yn = !1;
        function Zn(e, t) {
            if (Yn || null == Qn || Qn !== s()) return null;
            var n = Qn;
            return (
                "selectionStart" in n && Hn(n)
                    ? (n = { start: n.selectionStart, end: n.selectionEnd })
                    : window.getSelection
                    ? (n = { anchorNode: (n = window.getSelection()).anchorNode, anchorOffset: n.anchorOffset, focusNode: n.focusNode, focusOffset: n.focusOffset })
                    : (n = void 0),
                Gn && u(Gn, n) ? null : ((Gn = n), ((e = ke.getPooled(Kn.select, Xn, e, t)).type = "select"), (e.target = Qn), ne(e), e)
            );
        }
        var Jn = {
            eventTypes: Kn,
            extractEvents: function (e, t, n, r) {
                var a,
                    o = r.window === r ? r.document : 9 === r.nodeType ? r : r.ownerDocument;
                if (!(a = !o)) {
                    e: {
                        (o = Wn(o)), (a = C.onSelect);
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
                switch (((o = t ? q(t) : window), e)) {
                    case "focus":
                        (tt(o) || "true" === o.contentEditable) && ((Qn = o), (Xn = t), (Gn = null));
                        break;
                    case "blur":
                        Gn = Xn = Qn = null;
                        break;
                    case "mousedown":
                        Yn = !0;
                        break;
                    case "contextmenu":
                    case "mouseup":
                        return (Yn = !1), Zn(n, r);
                    case "selectionchange":
                        if (qn) break;
                    case "keydown":
                    case "keyup":
                        return Zn(n, r);
                }
                return null;
            },
        };
        j.injectEventPluginOrder("ResponderEventPlugin SimpleEventPlugin TapEventPlugin EnterLeaveEventPlugin ChangeEventPlugin SelectEventPlugin BeforeInputEventPlugin".split(" ")),
            (S = Q.getFiberCurrentPropsFromNode),
            (_ = Q.getInstanceFromNode),
            (P = Q.getNodeFromInstance),
            j.injectEventPluginsByName({ SimpleEventPlugin: _n, EnterLeaveEventPlugin: sn, ChangeEventPlugin: Jt, SelectEventPlugin: Jn, BeforeInputEventPlugin: ze });
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
            var sr =
                    "function" == typeof er
                        ? er
                        : function () {
                              d("276");
                          },
                ur = null,
                cr = null,
                fr = -1,
                dr = !1,
                pr = !1,
                gr = 0,
                mr = 33,
                hr = 33,
                vr = {
                    didTimeout: !1,
                    timeRemaining: function () {
                        var e = gr - ar();
                        return 0 < e ? e : 0;
                    },
                },
                br = function (e, t) {
                    var n = e.scheduledCallback,
                        r = !1;
                    try {
                        n(t), (r = !0);
                    } finally {
                        lr(e), r || ((dr = !0), window.postMessage(yr, "*"));
                    }
                },
                yr = "__reactIdleCallback$" + Math.random().toString(36).slice(2);
            window.addEventListener(
                "message",
                function (e) {
                    if (e.source === window && e.data === yr && ((dr = !1), null !== ur)) {
                        if (null !== ur) {
                            var t = ar();
                            if (!(-1 === fr || fr > t)) {
                                e = -1;
                                for (var n = [], r = ur; null !== r; ) {
                                    var a = r.timeoutTime;
                                    -1 !== a && a <= t ? n.push(r) : -1 !== a && (-1 === e || a < e) && (e = a), (r = r.next);
                                }
                                if (0 < n.length) for (vr.didTimeout = !0, t = 0, r = n.length; t < r; t++) br(n[t], vr);
                                fr = e;
                            }
                        }
                        for (e = ar(); 0 < gr - e && null !== ur; ) (e = ur), (vr.didTimeout = !1), br(e, vr), (e = ar());
                        null === ur || pr || ((pr = !0), sr(xr));
                    }
                },
                !1
            );
            var xr = function (e) {
                pr = !1;
                var t = e - gr + hr;
                t < hr && mr < hr ? (8 > t && (t = 8), (hr = t < mr ? mr : t)) : (mr = t), (gr = e + hr), dr || ((dr = !0), window.postMessage(yr, "*"));
            };
            (ir = function (e, t) {
                var n = -1;
                return (
                    null != t && "number" == typeof t.timeout && (n = ar() + t.timeout),
                    (-1 === fr || (-1 !== n && n < fr)) && (fr = n),
                    (e = { scheduledCallback: e, timeoutTime: n, prev: null, next: null }),
                    null === ur ? (ur = e) : null !== (t = e.prev = cr) && (t.next = e),
                    (cr = e),
                    pr || ((pr = !0), sr(xr)),
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
                        a.Children.forEach(e, function (e) {
                            null == e || ("string" != typeof e && "number" != typeof e) || (t += e);
                        }),
                        t
                    );
                })(t.children)) && (e.children = t),
                e
            );
        }
        function Cr(e, t, n, r) {
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
        function Er(e, t) {
            var n = t.value;
            e._wrapperState = { initialValue: null != n ? n : t.defaultValue, wasMultiple: !!t.multiple };
        }
        function Ar(e, t) {
            return null != t.dangerouslySetInnerHTML && d("91"), i({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
        }
        function Tr(e, t) {
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
        function Or(e) {
            switch (e) {
                case "svg":
                    return "http://www.w3.org/2000/svg";
                case "math":
                    return "http://www.w3.org/1998/Math/MathML";
                default:
                    return "http://www.w3.org/1999/xhtml";
            }
        }
        function Nr(e, t) {
            return null == e || "http://www.w3.org/1999/xhtml" === e ? Or(t) : "http://www.w3.org/2000/svg" === e && "foreignObject" === t ? "http://www.w3.org/1999/xhtml" : e;
        }
        var Rr = void 0,
            Mr = (function (e) {
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
        function Ir(e, t) {
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
            jr = ["Webkit", "ms", "Moz", "O"];
        function Fr(e, t) {
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
            jr.forEach(function (t) {
                (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Ur[t] = Ur[e]);
            });
        });
        var zr = i({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
        function Dr(e, t, n) {
            t &&
                (zr[e] && (null != t.children || null != t.dangerouslySetInnerHTML) && d("137", e, n()),
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
        function Vr(e, t) {
            var n = Wn((e = 9 === e.nodeType || 11 === e.nodeType ? e : e.ownerDocument));
            t = C[t];
            for (var r = 0; r < t.length; r++) {
                var a = t[r];
                if (!n.hasOwnProperty(a) || !n[a]) {
                    switch (a) {
                        case "scroll":
                            In("scroll", e);
                            break;
                        case "focus":
                        case "blur":
                            In("focus", e), In("blur", e), (n.blur = !0), (n.focus = !0);
                            break;
                        case "cancel":
                        case "close":
                            rt(a, !0) && In(a, e);
                            break;
                        case "invalid":
                        case "submit":
                        case "reset":
                            break;
                        default:
                            -1 === ge.indexOf(a) && Mn(a, e);
                    }
                    n[a] = !0;
                }
            }
        }
        function $r(e, t, n, r) {
            return (
                (n = 9 === n.nodeType ? n : n.ownerDocument),
                r === Pr && (r = Or(e)),
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
        function qr(e, t, n, r) {
            var a = Br(t, n);
            switch (t) {
                case "iframe":
                case "object":
                    Mn("load", e);
                    var o = n;
                    break;
                case "video":
                case "audio":
                    for (o = 0; o < ge.length; o++) Mn(ge[o], e);
                    o = n;
                    break;
                case "source":
                    Mn("error", e), (o = n);
                    break;
                case "img":
                case "image":
                case "link":
                    Mn("error", e), Mn("load", e), (o = n);
                    break;
                case "form":
                    Mn("reset", e), Mn("submit", e), (o = n);
                    break;
                case "details":
                    Mn("toggle", e), (o = n);
                    break;
                case "input":
                    Rt(e, n), (o = Nt(e, n)), Mn("invalid", e), Vr(r, "onChange");
                    break;
                case "option":
                    o = kr(e, n);
                    break;
                case "select":
                    Er(e, n), (o = i({}, n, { value: void 0 })), Mn("invalid", e), Vr(r, "onChange");
                    break;
                case "textarea":
                    Tr(e, n), (o = Ar(e, n)), Mn("invalid", e), Vr(r, "onChange");
                    break;
                default:
                    o = n;
            }
            Dr(t, o, Wr);
            var s,
                u = o;
            for (s in u)
                if (u.hasOwnProperty(s)) {
                    var c = u[s];
                    "style" === s
                        ? Fr(e, c)
                        : "dangerouslySetInnerHTML" === s
                        ? null != (c = c ? c.__html : void 0) && Mr(e, c)
                        : "children" === s
                        ? "string" == typeof c
                            ? ("textarea" !== t || "" !== c) && Ir(e, c)
                            : "number" == typeof c && Ir(e, "" + c)
                        : "suppressContentEditableWarning" !== s && "suppressHydrationWarning" !== s && "autoFocus" !== s && (k.hasOwnProperty(s) ? null != c && Vr(r, s) : null != c && Ot(e, s, c, a));
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
                    (e.multiple = !!n.multiple), null != (t = n.value) ? Cr(e, !!n.multiple, t, !1) : null != n.defaultValue && Cr(e, !!n.multiple, n.defaultValue, !0);
                    break;
                default:
                    "function" == typeof o.onClick && (e.onclick = l);
            }
        }
        function Kr(e, t, n, r, a) {
            var o = null;
            switch (t) {
                case "input":
                    (n = Nt(e, n)), (r = Nt(e, r)), (o = []);
                    break;
                case "option":
                    (n = kr(e, n)), (r = kr(e, r)), (o = []);
                    break;
                case "select":
                    (n = i({}, n, { value: void 0 })), (r = i({}, r, { value: void 0 })), (o = []);
                    break;
                case "textarea":
                    (n = Ar(e, n)), (r = Ar(e, r)), (o = []);
                    break;
                default:
                    "function" != typeof n.onClick && "function" == typeof r.onClick && (e.onclick = l);
            }
            Dr(t, r, Wr), (t = e = void 0);
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
                            (k.hasOwnProperty(e) ? o || (o = []) : (o = o || []).push(e, null));
            for (e in r) {
                var c = r[e];
                if (((u = null != n ? n[e] : void 0), r.hasOwnProperty(e) && c !== u && (null != c || null != u)))
                    if ("style" === e)
                        if (u) {
                            for (t in u) !u.hasOwnProperty(t) || (c && c.hasOwnProperty(t)) || (s || (s = {}), (s[t] = ""));
                            for (t in c) c.hasOwnProperty(t) && u[t] !== c[t] && (s || (s = {}), (s[t] = c[t]));
                        } else s || (o || (o = []), o.push(e, s)), (s = c);
                    else
                        "dangerouslySetInnerHTML" === e
                            ? ((c = c ? c.__html : void 0), (u = u ? u.__html : void 0), null != c && u !== c && (o = o || []).push(e, "" + c))
                            : "children" === e
                            ? u === c || ("string" != typeof c && "number" != typeof c) || (o = o || []).push(e, "" + c)
                            : "suppressContentEditableWarning" !== e && "suppressHydrationWarning" !== e && (k.hasOwnProperty(e) ? (null != c && Vr(a, e), o || u === c || (o = [])) : (o = o || []).push(e, c));
            }
            return s && (o = o || []).push("style", s), o;
        }
        function Qr(e, t, n, r, a) {
            "input" === n && "radio" === a.type && null != a.name && Mt(e, a), Br(n, r), (r = Br(n, a));
            for (var o = 0; o < t.length; o += 2) {
                var i = t[o],
                    l = t[o + 1];
                "style" === i ? Fr(e, l) : "dangerouslySetInnerHTML" === i ? Mr(e, l) : "children" === i ? Ir(e, l) : Ot(e, i, l, r);
            }
            switch (n) {
                case "input":
                    It(e, a);
                    break;
                case "textarea":
                    Sr(e, a);
                    break;
                case "select":
                    (e._wrapperState.initialValue = void 0),
                        (t = e._wrapperState.wasMultiple),
                        (e._wrapperState.wasMultiple = !!a.multiple),
                        null != (n = a.value) ? Cr(e, !!a.multiple, n, !1) : t !== !!a.multiple && (null != a.defaultValue ? Cr(e, !!a.multiple, a.defaultValue, !0) : Cr(e, !!a.multiple, a.multiple ? [] : "", !1));
            }
        }
        function Xr(e, t, n, r, a) {
            switch (t) {
                case "iframe":
                case "object":
                    Mn("load", e);
                    break;
                case "video":
                case "audio":
                    for (r = 0; r < ge.length; r++) Mn(ge[r], e);
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
                    Rt(e, n), Mn("invalid", e), Vr(a, "onChange");
                    break;
                case "select":
                    Er(e, n), Mn("invalid", e), Vr(a, "onChange");
                    break;
                case "textarea":
                    Tr(e, n), Mn("invalid", e), Vr(a, "onChange");
            }
            for (var o in (Dr(t, n, Wr), (r = null), n))
                if (n.hasOwnProperty(o)) {
                    var i = n[o];
                    "children" === o ? ("string" == typeof i ? e.textContent !== i && (r = ["children", i]) : "number" == typeof i && e.textContent !== "" + i && (r = ["children", "" + i])) : k.hasOwnProperty(o) && null != i && Vr(a, o);
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
        function Gr(e, t) {
            return e.nodeValue !== t;
        }
        var Yr = {
                createElement: $r,
                createTextNode: Hr,
                setInitialProperties: qr,
                diffProperties: Kr,
                updateProperties: Qr,
                diffHydratedProperties: Xr,
                diffHydratedText: Gr,
                warnForUnmatchedText: function () {},
                warnForDeletedHydratableElement: function () {},
                warnForDeletedHydratableText: function () {},
                warnForInsertedHydratedElement: function () {},
                warnForInsertedHydratedText: function () {},
                restoreControlledState: function (e, t, n) {
                    switch (t) {
                        case "input":
                            if ((It(e, n), (t = n.name), "radio" === n.type && null != t)) {
                                for (n = e; n.parentNode; ) n = n.parentNode;
                                for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
                                    var r = n[t];
                                    if (r !== e && r.form === e.form) {
                                        var a = K(r);
                                        a || d("90"), it(r), It(r, a);
                                    }
                                }
                            }
                            break;
                        case "textarea":
                            Sr(e, n);
                            break;
                        case "select":
                            null != (t = n.value) && Cr(e, !!n.multiple, t, !1);
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
            sa = -1;
        function ua(e) {
            return { current: e };
        }
        function ca(e) {
            0 > sa || ((e.current = la[sa]), (la[sa] = null), sa--);
        }
        function fa(e, t) {
            sa++, (la[sa] = e.current), (e.current = t);
        }
        var da = ua(f),
            pa = ua(!1),
            ga = f;
        function ma(e) {
            return va(e) ? ga : da.current;
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
        function ba(e) {
            va(e) && (ca(pa), ca(da));
        }
        function ya(e) {
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
            return (t = (t && t.__reactInternalMemoizedMergedChildContext) || f), (ga = da.current), fa(da, t), fa(pa, pa.current), !0;
        }
        function Ca(e, t) {
            var n = e.stateNode;
            if ((n || d("169"), t)) {
                var r = wa(e, ga);
                (n.__reactInternalMemoizedMergedChildContext = r), ca(pa), ca(da), fa(da, r);
            } else ca(pa);
            fa(pa, t);
        }
        function Ea(e, t, n, r) {
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
        function Aa(e, t, n) {
            var r = e.alternate;
            return (
                null === r
                    ? (((r = new Ea(e.tag, t, e.key, e.mode)).type = e.type), (r.stateNode = e.stateNode), (r.alternate = e), (e.alternate = r))
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
        function Ta(e, t, n) {
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
                        return ((r = new Ea(15, e, a, 4 | t)).type = pt), (r.expirationTime = n), r;
                    case bt:
                        (o = 16), (t |= 2);
                        break;
                    default:
                        e: {
                            switch ("object" == typeof r && null !== r ? r.$$typeof : null) {
                                case gt:
                                    o = 13;
                                    break e;
                                case mt:
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
            return ((t = new Ea(o, e, a, t)).type = r), (t.expirationTime = n), t;
        }
        function Sa(e, t, n, r) {
            return ((e = new Ea(10, e, r, t)).expirationTime = n), e;
        }
        function _a(e, t, n) {
            return ((e = new Ea(6, e, null, t)).expirationTime = n), e;
        }
        function Pa(e, t, n) {
            return ((t = new Ea(4, null !== e.children ? e.children : [], e.key, t)).expirationTime = n), (t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }), t;
        }
        function La(e, t, n) {
            return (
                (e = {
                    current: (t = new Ea(3, null, null, t ? 3 : 0)),
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
        var Oa = null,
            Na = null;
        function Ra(e) {
            return function (t) {
                try {
                    return e(t);
                } catch (e) {}
            };
        }
        function Ma(e) {
            "function" == typeof Oa && Oa(e);
        }
        function Ia(e) {
            "function" == typeof Na && Na(e);
        }
        var Ua = !1;
        function ja(e) {
            return { expirationTime: 0, baseState: e, firstUpdate: null, lastUpdate: null, firstCapturedUpdate: null, lastCapturedUpdate: null, firstEffect: null, lastEffect: null, firstCapturedEffect: null, lastCapturedEffect: null };
        }
        function Fa(e) {
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
        function za(e) {
            return { expirationTime: e, tag: 0, payload: null, callback: null, next: null, nextEffect: null };
        }
        function Da(e, t, n) {
            null === e.lastUpdate ? (e.firstUpdate = e.lastUpdate = t) : ((e.lastUpdate.next = t), (e.lastUpdate = t)), (0 === e.expirationTime || e.expirationTime > n) && (e.expirationTime = n);
        }
        function Ba(e, t, n) {
            var r = e.alternate;
            if (null === r) {
                var a = e.updateQueue,
                    o = null;
                null === a && (a = e.updateQueue = ja(e.memoizedState));
            } else
                (a = e.updateQueue),
                    (o = r.updateQueue),
                    null === a ? (null === o ? ((a = e.updateQueue = ja(e.memoizedState)), (o = r.updateQueue = ja(r.memoizedState))) : (a = e.updateQueue = Fa(o))) : null === o && (o = r.updateQueue = Fa(a));
            null === o || a === o ? Da(a, t, n) : null === a.lastUpdate || null === o.lastUpdate ? (Da(a, t, n), Da(o, t, n)) : (Da(a, t, n), (o.lastUpdate = t));
        }
        function Wa(e, t, n) {
            var r = e.updateQueue;
            null === (r = null === r ? (e.updateQueue = ja(e.memoizedState)) : Va(e, r)).lastCapturedUpdate ? (r.firstCapturedUpdate = r.lastCapturedUpdate = t) : ((r.lastCapturedUpdate.next = t), (r.lastCapturedUpdate = t)),
                (0 === r.expirationTime || r.expirationTime > n) && (r.expirationTime = n);
        }
        function Va(e, t) {
            var n = e.alternate;
            return null !== n && t === n.updateQueue && (t = e.updateQueue = Fa(t)), t;
        }
        function $a(e, t, n, r, a, o) {
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
                for (var o = (t = Va(e, t)).baseState, i = null, l = 0, s = t.firstUpdate, u = o; null !== s; ) {
                    var c = s.expirationTime;
                    c > a
                        ? (null === i && ((i = s), (o = u)), (0 === l || l > c) && (l = c))
                        : ((u = $a(e, 0, s, u, n, r)), null !== s.callback && ((e.effectTag |= 32), (s.nextEffect = null), null === t.lastEffect ? (t.firstEffect = t.lastEffect = s) : ((t.lastEffect.nextEffect = s), (t.lastEffect = s)))),
                        (s = s.next);
                }
                for (c = null, s = t.firstCapturedUpdate; null !== s; ) {
                    var f = s.expirationTime;
                    f > a
                        ? (null === c && ((c = s), null === i && (o = u)), (0 === l || l > f) && (l = f))
                        : ((u = $a(e, 0, s, u, n, r)),
                          null !== s.callback &&
                              ((e.effectTag |= 32), (s.nextEffect = null), null === t.lastCapturedEffect ? (t.firstCapturedEffect = t.lastCapturedEffect = s) : ((t.lastCapturedEffect.nextEffect = s), (t.lastCapturedEffect = s)))),
                        (s = s.next);
                }
                null === i && (t.lastUpdate = null),
                    null === c ? (t.lastCapturedUpdate = null) : (e.effectTag |= 32),
                    null === i && null === c && (o = u),
                    (t.baseState = o),
                    (t.firstUpdate = i),
                    (t.firstCapturedUpdate = c),
                    (t.expirationTime = l),
                    (e.memoizedState = u);
            }
        }
        function qa(e, t) {
            "function" != typeof e && d("191", e), e.call(t);
        }
        function Ka(e, t, n) {
            for (
                null !== t.firstCapturedUpdate && (null !== t.lastUpdate && ((t.lastUpdate.next = t.firstCapturedUpdate), (t.lastUpdate = t.lastCapturedUpdate)), (t.firstCapturedUpdate = t.lastCapturedUpdate = null)),
                    e = t.firstEffect,
                    t.firstEffect = t.lastEffect = null;
                null !== e;

            ) {
                var r = e.callback;
                null !== r && ((e.callback = null), qa(r, n)), (e = e.nextEffect);
            }
            for (e = t.firstCapturedEffect, t.firstCapturedEffect = t.lastCapturedEffect = null; null !== e; ) null !== (t = e.callback) && ((e.callback = null), qa(t, n)), (e = e.nextEffect);
        }
        function Qa(e, t) {
            return { value: e, source: t, stack: kt(t) };
        }
        var Xa = ua(null),
            Ga = ua(null),
            Ya = ua(0);
        function Za(e) {
            var t = e.type._context;
            fa(Ya, t._changedBits), fa(Ga, t._currentValue), fa(Xa, e), (t._currentValue = e.pendingProps.value), (t._changedBits = e.stateNode);
        }
        function Ja(e) {
            var t = Ya.current,
                n = Ga.current;
            ca(Xa), ca(Ga), ca(Ya), ((e = e.type._context)._currentValue = n), (e._changedBits = t);
        }
        var eo = {},
            to = ua(eo),
            no = ua(eo),
            ro = ua(eo);
        function ao(e) {
            return e === eo && d("174"), e;
        }
        function oo(e, t) {
            fa(ro, t), fa(no, e), fa(to, eo);
            var n = t.nodeType;
            switch (n) {
                case 9:
                case 11:
                    t = (t = t.documentElement) ? t.namespaceURI : Nr(null, "");
                    break;
                default:
                    t = Nr((t = (n = 8 === n ? t.parentNode : t).namespaceURI || null), (n = n.tagName));
            }
            ca(to), fa(to, t);
        }
        function io(e) {
            ca(to), ca(no), ca(ro);
        }
        function lo(e) {
            no.current === e && (ca(to), ca(no));
        }
        function so(e, t, n) {
            var r = e.memoizedState;
            (r = null == (t = t(n, r)) ? r : i({}, r, t)), (e.memoizedState = r), null !== (e = e.updateQueue) && 0 === e.expirationTime && (e.baseState = r);
        }
        var uo = {
            isMounted: function (e) {
                return !!(e = e._reactInternalFiber) && 2 === un(e);
            },
            enqueueSetState: function (e, t, n) {
                e = e._reactInternalFiber;
                var r = wi(),
                    a = za((r = yi(r, e)));
                (a.payload = t), null != n && (a.callback = n), Ba(e, a, r), xi(e, r);
            },
            enqueueReplaceState: function (e, t, n) {
                e = e._reactInternalFiber;
                var r = wi(),
                    a = za((r = yi(r, e)));
                (a.tag = 1), (a.payload = t), null != n && (a.callback = n), Ba(e, a, r), xi(e, r);
            },
            enqueueForceUpdate: function (e, t) {
                e = e._reactInternalFiber;
                var n = wi(),
                    r = za((n = yi(n, e)));
                (r.tag = 2), null != t && (r.callback = t), Ba(e, r, n), xi(e, n);
            },
        };
        function co(e, t, n, r, a, o) {
            var i = e.stateNode;
            return (e = e.type), "function" == typeof i.shouldComponentUpdate ? i.shouldComponentUpdate(n, a, o) : !e.prototype || !e.prototype.isPureReactComponent || !u(t, n) || !u(r, a);
        }
        function fo(e, t, n, r) {
            (e = t.state),
                "function" == typeof t.componentWillReceiveProps && t.componentWillReceiveProps(n, r),
                "function" == typeof t.UNSAFE_componentWillReceiveProps && t.UNSAFE_componentWillReceiveProps(n, r),
                t.state !== e && uo.enqueueReplaceState(t, t.state, null);
        }
        function po(e, t) {
            var n = e.type,
                r = e.stateNode,
                a = e.pendingProps,
                o = ma(e);
            (r.props = a),
                (r.state = e.memoizedState),
                (r.refs = f),
                (r.context = ha(e, o)),
                null !== (o = e.updateQueue) && (Ha(e, o, a, r, t), (r.state = e.memoizedState)),
                "function" == typeof (o = e.type.getDerivedStateFromProps) && (so(e, o, a), (r.state = e.memoizedState)),
                "function" == typeof n.getDerivedStateFromProps ||
                    "function" == typeof r.getSnapshotBeforeUpdate ||
                    ("function" != typeof r.UNSAFE_componentWillMount && "function" != typeof r.componentWillMount) ||
                    ((n = r.state),
                    "function" == typeof r.componentWillMount && r.componentWillMount(),
                    "function" == typeof r.UNSAFE_componentWillMount && r.UNSAFE_componentWillMount(),
                    n !== r.state && uo.enqueueReplaceState(r, r.state, null),
                    null !== (o = e.updateQueue) && (Ha(e, o, a, r, t), (r.state = e.memoizedState))),
                "function" == typeof r.componentDidMount && (e.effectTag |= 4);
        }
        var go = Array.isArray;
        function mo(e, t, n) {
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
                return ((e = Aa(e, t, n)).index = 0), (e.sibling = null), e;
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
            function s(e, t, n, r) {
                return null !== t && t.type === n.type ? (((r = a(t, n.props, r)).ref = mo(e, t, n)), (r.return = e), r) : (((r = Ta(n, e.mode, r)).ref = mo(e, t, n)), (r.return = e), r);
            }
            function u(e, t, n, r) {
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
                        case ut:
                            return ((n = Ta(t, e.mode, n)).ref = mo(e, null, t)), (n.return = e), n;
                        case ct:
                            return ((t = Pa(t, e.mode, n)).return = e), t;
                    }
                    if (go(t) || xt(t)) return ((t = Sa(t, e.mode, n, null)).return = e), t;
                    ho(e, t);
                }
                return null;
            }
            function p(e, t, n, r) {
                var a = null !== t ? t.key : null;
                if ("string" == typeof n || "number" == typeof n) return null !== a ? null : l(e, t, "" + n, r);
                if ("object" == typeof n && null !== n) {
                    switch (n.$$typeof) {
                        case ut:
                            return n.key === a ? (n.type === ft ? c(e, t, n.props.children, r, a) : s(e, t, n, r)) : null;
                        case ct:
                            return n.key === a ? u(e, t, n, r) : null;
                    }
                    if (go(n) || xt(n)) return null !== a ? null : c(e, t, n, r, null);
                    ho(e, n);
                }
                return null;
            }
            function g(e, t, n, r, a) {
                if ("string" == typeof r || "number" == typeof r) return l(t, (e = e.get(n) || null), "" + r, a);
                if ("object" == typeof r && null !== r) {
                    switch (r.$$typeof) {
                        case ut:
                            return (e = e.get(null === r.key ? n : r.key) || null), r.type === ft ? c(t, e, r.props.children, a, r.key) : s(t, e, r, a);
                        case ct:
                            return u(t, (e = e.get(null === r.key ? n : r.key) || null), r, a);
                    }
                    if (go(r) || xt(r)) return c(t, (e = e.get(n) || null), r, a, null);
                    ho(t, r);
                }
                return null;
            }
            function m(a, i, l, s) {
                for (var u = null, c = null, d = i, m = (i = 0), h = null; null !== d && m < l.length; m++) {
                    d.index > m ? ((h = d), (d = null)) : (h = d.sibling);
                    var v = p(a, d, l[m], s);
                    if (null === v) {
                        null === d && (d = h);
                        break;
                    }
                    e && d && null === v.alternate && t(a, d), (i = o(v, i, m)), null === c ? (u = v) : (c.sibling = v), (c = v), (d = h);
                }
                if (m === l.length) return n(a, d), u;
                if (null === d) {
                    for (; m < l.length; m++) (d = f(a, l[m], s)) && ((i = o(d, i, m)), null === c ? (u = d) : (c.sibling = d), (c = d));
                    return u;
                }
                for (d = r(a, d); m < l.length; m++) (h = g(d, a, m, l[m], s)) && (e && null !== h.alternate && d.delete(null === h.key ? m : h.key), (i = o(h, i, m)), null === c ? (u = h) : (c.sibling = h), (c = h));
                return (
                    e &&
                        d.forEach(function (e) {
                            return t(a, e);
                        }),
                    u
                );
            }
            function h(a, i, l, s) {
                var u = xt(l);
                "function" != typeof u && d("150"), null == (l = u.call(l)) && d("151");
                for (var c = (u = null), m = i, h = (i = 0), v = null, b = l.next(); null !== m && !b.done; h++, b = l.next()) {
                    m.index > h ? ((v = m), (m = null)) : (v = m.sibling);
                    var y = p(a, m, b.value, s);
                    if (null === y) {
                        m || (m = v);
                        break;
                    }
                    e && m && null === y.alternate && t(a, m), (i = o(y, i, h)), null === c ? (u = y) : (c.sibling = y), (c = y), (m = v);
                }
                if (b.done) return n(a, m), u;
                if (null === m) {
                    for (; !b.done; h++, b = l.next()) null !== (b = f(a, b.value, s)) && ((i = o(b, i, h)), null === c ? (u = b) : (c.sibling = b), (c = b));
                    return u;
                }
                for (m = r(a, m); !b.done; h++, b = l.next()) null !== (b = g(m, a, h, b.value, s)) && (e && null !== b.alternate && m.delete(null === b.key ? h : b.key), (i = o(b, i, h)), null === c ? (u = b) : (c.sibling = b), (c = b));
                return (
                    e &&
                        m.forEach(function (e) {
                            return t(a, e);
                        }),
                    u
                );
            }
            return function (e, r, o, l) {
                var s = "object" == typeof o && null !== o && o.type === ft && null === o.key;
                s && (o = o.props.children);
                var u = "object" == typeof o && null !== o;
                if (u)
                    switch (o.$$typeof) {
                        case ut:
                            e: {
                                for (u = o.key, s = r; null !== s; ) {
                                    if (s.key === u) {
                                        if (10 === s.tag ? o.type === ft : s.type === o.type) {
                                            n(e, s.sibling), ((r = a(s, o.type === ft ? o.props.children : o.props, l)).ref = mo(e, s, o)), (r.return = e), (e = r);
                                            break e;
                                        }
                                        n(e, s);
                                        break;
                                    }
                                    t(e, s), (s = s.sibling);
                                }
                                o.type === ft ? (((r = Sa(o.props.children, e.mode, l, o.key)).return = e), (e = r)) : (((l = Ta(o, e.mode, l)).ref = mo(e, r, o)), (l.return = e), (e = l));
                            }
                            return i(e);
                        case ct:
                            e: {
                                for (s = o.key; null !== r; ) {
                                    if (r.key === s) {
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
                if (go(o)) return m(e, r, o, l);
                if (xt(o)) return h(e, r, o, l);
                if ((u && ho(e, o), void 0 === o && !s))
                    switch (e.tag) {
                        case 2:
                        case 1:
                            d("152", (l = e.type).displayName || l.name || "Component");
                    }
                return n(e, r);
            };
        }
        var bo = vo(!0),
            yo = vo(!1),
            xo = null,
            wo = null,
            ko = !1;
        function Co(e, t) {
            var n = new Ea(5, null, null, 0);
            (n.type = "DELETED"), (n.stateNode = t), (n.return = e), (n.effectTag = 8), null !== e.lastEffect ? ((e.lastEffect.nextEffect = n), (e.lastEffect = n)) : (e.firstEffect = e.lastEffect = n);
        }
        function Eo(e, t) {
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
        function Ao(e) {
            if (ko) {
                var t = wo;
                if (t) {
                    var n = t;
                    if (!Eo(e, t)) {
                        if (!(t = oa(n)) || !Eo(e, t)) return (e.effectTag |= 2), (ko = !1), void (xo = e);
                        Co(xo, n);
                    }
                    (xo = e), (wo = ia(t));
                } else (e.effectTag |= 2), (ko = !1), (xo = e);
            }
        }
        function To(e) {
            for (e = e.return; null !== e && 5 !== e.tag && 3 !== e.tag; ) e = e.return;
            xo = e;
        }
        function So(e) {
            if (e !== xo) return !1;
            if (!ko) return To(e), (ko = !0), !1;
            var t = e.type;
            if (5 !== e.tag || ("head" !== t && "body" !== t && !ta(t, e.memoizedProps))) for (t = wo; t; ) Co(e, t), (t = oa(t));
            return To(e), (wo = xo ? oa(e.stateNode) : null), !0;
        }
        function _o() {
            (wo = xo = null), (ko = !1);
        }
        function Po(e, t, n) {
            Lo(e, t, n, t.expirationTime);
        }
        function Lo(e, t, n, r) {
            t.child = null === e ? yo(t, null, n, r) : bo(t, e.child, n, r);
        }
        function Oo(e, t) {
            var n = t.ref;
            ((null === e && null !== n) || (null !== e && e.ref !== n)) && (t.effectTag |= 128);
        }
        function No(e, t, n, r, a) {
            Oo(e, t);
            var o = 0 != (64 & t.effectTag);
            if (!n && !o) return r && Ca(t, !1), Io(e, t);
            (n = t.stateNode), (lt.current = t);
            var i = o ? null : n.render();
            return (t.effectTag |= 1), o && (Lo(e, t, null, a), (t.child = null)), Lo(e, t, i, a), (t.memoizedState = n.state), (t.memoizedProps = n.props), r && Ca(t, !0), t.child;
        }
        function Ro(e) {
            var t = e.stateNode;
            t.pendingContext ? xa(0, t.pendingContext, t.pendingContext !== t.context) : t.context && xa(0, t.context, !1), oo(e, t.containerInfo);
        }
        function Mo(e, t, n, r) {
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
        function Io(e, t) {
            if ((null !== e && t.child !== e.child && d("153"), null !== t.child)) {
                var n = Aa((e = t.child), e.pendingProps, e.expirationTime);
                for (t.child = n, n.return = t; null !== e.sibling; ) (e = e.sibling), ((n = n.sibling = Aa(e, e.pendingProps, e.expirationTime)).return = t);
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
                        o = ma(t);
                    return (
                        (r = r(a, (o = ha(t, o)))),
                        (t.effectTag |= 1),
                        "object" == typeof r && null !== r && "function" == typeof r.render && void 0 === r.$$typeof
                            ? ((o = t.type),
                              (t.tag = 2),
                              (t.memoizedState = null !== r.state && void 0 !== r.state ? r.state : null),
                              "function" == typeof (o = o.getDerivedStateFromProps) && so(t, o, a),
                              (a = ka(t)),
                              (r.updater = uo),
                              (t.stateNode = r),
                              (r._reactInternalFiber = t),
                              po(t, n),
                              (e = No(e, t, !0, a, n)))
                            : ((t.tag = 1), Po(e, t, r), (t.memoizedProps = a), (e = t.child)),
                        e
                    );
                case 1:
                    return (a = t.type), (n = t.pendingProps), pa.current || t.memoizedProps !== n ? ((a = a(n, (r = ha(t, (r = ma(t)))))), (t.effectTag |= 1), Po(e, t, a), (t.memoizedProps = n), (e = t.child)) : (e = Io(e, t)), e;
                case 2:
                    if (((a = ka(t)), null === e))
                        if (null === t.stateNode) {
                            var i = t.pendingProps,
                                l = t.type;
                            r = ma(t);
                            var s = 2 === t.tag && null != t.type.contextTypes;
                            (i = new l(i, (o = s ? ha(t, r) : f))),
                                (t.memoizedState = null !== i.state && void 0 !== i.state ? i.state : null),
                                (i.updater = uo),
                                (t.stateNode = i),
                                (i._reactInternalFiber = t),
                                s && (((s = t.stateNode).__reactInternalMemoizedUnmaskedChildContext = r), (s.__reactInternalMemoizedMaskedChildContext = o)),
                                po(t, n),
                                (r = !0);
                        } else {
                            (l = t.type), (r = t.stateNode), (s = t.memoizedProps), (o = t.pendingProps), (r.props = s);
                            var u = r.context;
                            i = ha(t, (i = ma(t)));
                            var c = l.getDerivedStateFromProps;
                            (l = "function" == typeof c || "function" == typeof r.getSnapshotBeforeUpdate) ||
                                ("function" != typeof r.UNSAFE_componentWillReceiveProps && "function" != typeof r.componentWillReceiveProps) ||
                                ((s !== o || u !== i) && fo(t, r, o, i)),
                                (Ua = !1);
                            var p = t.memoizedState;
                            u = r.state = p;
                            var g = t.updateQueue;
                            null !== g && (Ha(t, g, o, r, n), (u = t.memoizedState)),
                                s !== o || p !== u || pa.current || Ua
                                    ? ("function" == typeof c && (so(t, c, o), (u = t.memoizedState)),
                                      (s = Ua || co(t, s, o, p, u, i))
                                          ? (l ||
                                                ("function" != typeof r.UNSAFE_componentWillMount && "function" != typeof r.componentWillMount) ||
                                                ("function" == typeof r.componentWillMount && r.componentWillMount(), "function" == typeof r.UNSAFE_componentWillMount && r.UNSAFE_componentWillMount()),
                                            "function" == typeof r.componentDidMount && (t.effectTag |= 4))
                                          : ("function" == typeof r.componentDidMount && (t.effectTag |= 4), (t.memoizedProps = o), (t.memoizedState = u)),
                                      (r.props = o),
                                      (r.state = u),
                                      (r.context = i),
                                      (r = s))
                                    : ("function" == typeof r.componentDidMount && (t.effectTag |= 4), (r = !1));
                        }
                    else
                        (l = t.type),
                            (r = t.stateNode),
                            (o = t.memoizedProps),
                            (s = t.pendingProps),
                            (r.props = o),
                            (u = r.context),
                            (i = ha(t, (i = ma(t)))),
                            (l = "function" == typeof (c = l.getDerivedStateFromProps) || "function" == typeof r.getSnapshotBeforeUpdate) ||
                                ("function" != typeof r.UNSAFE_componentWillReceiveProps && "function" != typeof r.componentWillReceiveProps) ||
                                ((o !== s || u !== i) && fo(t, r, s, i)),
                            (Ua = !1),
                            (u = t.memoizedState),
                            (p = r.state = u),
                            null !== (g = t.updateQueue) && (Ha(t, g, s, r, n), (p = t.memoizedState)),
                            o !== s || u !== p || pa.current || Ua
                                ? ("function" == typeof c && (so(t, c, s), (p = t.memoizedState)),
                                  (c = Ua || co(t, o, s, u, p, i))
                                      ? (l ||
                                            ("function" != typeof r.UNSAFE_componentWillUpdate && "function" != typeof r.componentWillUpdate) ||
                                            ("function" == typeof r.componentWillUpdate && r.componentWillUpdate(s, p, i), "function" == typeof r.UNSAFE_componentWillUpdate && r.UNSAFE_componentWillUpdate(s, p, i)),
                                        "function" == typeof r.componentDidUpdate && (t.effectTag |= 4),
                                        "function" == typeof r.getSnapshotBeforeUpdate && (t.effectTag |= 256))
                                      : ("function" != typeof r.componentDidUpdate || (o === e.memoizedProps && u === e.memoizedState) || (t.effectTag |= 4),
                                        "function" != typeof r.getSnapshotBeforeUpdate || (o === e.memoizedProps && u === e.memoizedState) || (t.effectTag |= 256),
                                        (t.memoizedProps = s),
                                        (t.memoizedState = p)),
                                  (r.props = s),
                                  (r.state = p),
                                  (r.context = i),
                                  (r = c))
                                : ("function" != typeof r.componentDidUpdate || (o === e.memoizedProps && u === e.memoizedState) || (t.effectTag |= 4),
                                  "function" != typeof r.getSnapshotBeforeUpdate || (o === e.memoizedProps && u === e.memoizedState) || (t.effectTag |= 256),
                                  (r = !1));
                    return No(e, t, r, a, n);
                case 3:
                    return (
                        Ro(t),
                        null !== (a = t.updateQueue)
                            ? ((r = null !== (r = t.memoizedState) ? r.element : null),
                              Ha(t, a, t.pendingProps, null, n),
                              (a = t.memoizedState.element) === r
                                  ? (_o(), (e = Io(e, t)))
                                  : ((r = t.stateNode),
                                    (r = (null === e || null === e.child) && r.hydrate) && ((wo = ia(t.stateNode.containerInfo)), (xo = t), (r = ko = !0)),
                                    r ? ((t.effectTag |= 2), (t.child = yo(t, null, a, n))) : (_o(), Po(e, t, a)),
                                    (e = t.child)))
                            : (_o(), (e = Io(e, t))),
                        e
                    );
                case 5:
                    return (
                        ao(ro.current),
                        (a = ao(to.current)) !== (r = Nr(a, t.type)) && (fa(no, t), fa(to, r)),
                        null === e && Ao(t),
                        (a = t.type),
                        (s = t.memoizedProps),
                        (r = t.pendingProps),
                        (o = null !== e ? e.memoizedProps : null),
                        pa.current || s !== r || ((s = 1 & t.mode && !!r.hidden) && (t.expirationTime = 1073741823), s && 1073741823 === n)
                            ? ((s = r.children),
                              ta(a, r) ? (s = null) : o && ta(a, o) && (t.effectTag |= 16),
                              Oo(e, t),
                              1073741823 !== n && 1 & t.mode && r.hidden ? ((t.expirationTime = 1073741823), (t.memoizedProps = r), (e = null)) : (Po(e, t, s), (t.memoizedProps = r), (e = t.child)))
                            : (e = Io(e, t)),
                        e
                    );
                case 6:
                    return null === e && Ao(t), (t.memoizedProps = t.pendingProps), null;
                case 16:
                    return null;
                case 4:
                    return oo(t, t.stateNode.containerInfo), (a = t.pendingProps), pa.current || t.memoizedProps !== a ? (null === e ? (t.child = bo(t, null, a, n)) : Po(e, t, a), (t.memoizedProps = a), (e = t.child)) : (e = Io(e, t)), e;
                case 14:
                    return (
                        (a = t.type.render), (n = t.pendingProps), (r = t.ref), pa.current || t.memoizedProps !== n || r !== (null !== e ? e.ref : null) ? (Po(e, t, (a = a(n, r))), (t.memoizedProps = n), (e = t.child)) : (e = Io(e, t)), e
                    );
                case 10:
                    return (n = t.pendingProps), pa.current || t.memoizedProps !== n ? (Po(e, t, n), (t.memoizedProps = n), (e = t.child)) : (e = Io(e, t)), e;
                case 11:
                    return (n = t.pendingProps.children), pa.current || (null !== n && t.memoizedProps !== n) ? (Po(e, t, n), (t.memoizedProps = n), (e = t.child)) : (e = Io(e, t)), e;
                case 15:
                    return (n = t.pendingProps), t.memoizedProps === n ? (e = Io(e, t)) : (Po(e, t, n.children), (t.memoizedProps = n), (e = t.child)), e;
                case 13:
                    return (function (e, t, n) {
                        var r = t.type._context,
                            a = t.pendingProps,
                            o = t.memoizedProps,
                            i = !0;
                        if (pa.current) i = !1;
                        else if (o === a) return (t.stateNode = 0), Za(t), Io(e, t);
                        var l = a.value;
                        if (((t.memoizedProps = a), null === o)) l = 1073741823;
                        else if (o.value === a.value) {
                            if (o.children === a.children && i) return (t.stateNode = 0), Za(t), Io(e, t);
                            l = 0;
                        } else {
                            var s = o.value;
                            if ((s === l && (0 !== s || 1 / s == 1 / l)) || (s != s && l != l)) {
                                if (o.children === a.children && i) return (t.stateNode = 0), Za(t), Io(e, t);
                                l = 0;
                            } else if (((l = "function" == typeof r._calculateChangedBits ? r._calculateChangedBits(s, l) : 1073741823), 0 === (l |= 0))) {
                                if (o.children === a.children && i) return (t.stateNode = 0), Za(t), Io(e, t);
                            } else Mo(t, r, l, n);
                        }
                        return (t.stateNode = l), Za(t), Po(e, t, a.children), t.child;
                    })(e, t, n);
                case 12:
                    e: if (((r = t.type), (o = t.pendingProps), (s = t.memoizedProps), (a = r._currentValue), (i = r._changedBits), pa.current || 0 !== i || s !== o)) {
                        if (((t.memoizedProps = o), null == (l = o.unstable_observedBits) && (l = 1073741823), (t.stateNode = l), 0 != (i & l))) Mo(t, r, i, n);
                        else if (s === o) {
                            e = Io(e, t);
                            break e;
                        }
                        (n = (n = o.children)(a)), (t.effectTag |= 1), Po(e, t, n), (e = t.child);
                    } else e = Io(e, t);
                    return e;
                default:
                    d("156");
            }
        }
        function jo(e) {
            e.effectTag |= 4;
        }
        var Fo, zo;
        function Do(e, t) {
            var n = t.pendingProps;
            switch (t.tag) {
                case 1:
                    return null;
                case 2:
                    return ba(t), null;
                case 3:
                    io(), ya();
                    var r = t.stateNode;
                    return r.pendingContext && ((r.context = r.pendingContext), (r.pendingContext = null)), (null !== e && null !== e.child) || (So(t), (t.effectTag &= -3)), null;
                case 5:
                    lo(t), (r = ao(ro.current));
                    var a = t.type;
                    if (null !== e && null != t.stateNode) {
                        var o = e.memoizedProps,
                            i = t.stateNode;
                        ao(to.current);
                        (i = Kr(i, a, o, n, r)), Fo(0, t, i), e.ref !== t.ref && (t.effectTag |= 128);
                    } else {
                        if (!n) return null === t.stateNode && d("166"), null;
                        if (((e = ao(to.current)), So(t))) (n = t.stateNode), (a = t.type), (o = t.memoizedProps), (n[V] = t), (n[$] = o), (r = Xr(n, a, o, e, r)), (t.updateQueue = r), null !== r && jo(t);
                        else {
                            ((e = $r(a, n, r, e))[V] = t), (e[$] = n);
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
                            qr(e, a, n, r), ea(a, n) && jo(t), (t.stateNode = e);
                        }
                        null !== t.ref && (t.effectTag |= 128);
                    }
                    return null;
                case 6:
                    if (e && null != t.stateNode) zo(0, t, e.memoizedProps, n);
                    else {
                        if ("string" != typeof n) return null === t.stateNode && d("166"), null;
                        (r = ao(ro.current)), ao(to.current), So(t) ? ((r = t.stateNode), (n = t.memoizedProps), (r[V] = t), Gr(r, n) && jo(t)) : (((r = Hr(n, r))[V] = t), (t.stateNode = r));
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
        function Vo(e) {
            switch ((Ia(e), e.tag)) {
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
                    qo(e);
            }
        }
        function $o(e) {
            return 5 === e.tag || 3 === e.tag || 4 === e.tag;
        }
        function Ho(e) {
            e: {
                for (var t = e.return; null !== t; ) {
                    if ($o(t)) {
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
            16 & n.effectTag && (Ir(t, ""), (n.effectTag &= -17));
            e: t: for (n = e; ; ) {
                for (; null === n.sibling; ) {
                    if (null === n.return || $o(n.return)) {
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
        function qo(e) {
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
                        if ((Vo(i), null !== i.child && 4 !== i.tag)) (i.child.return = i), (i = i.child);
                        else {
                            if (i === o) break;
                            for (; null === i.sibling; ) {
                                if (null === i.return || i.return === o) break e;
                                i = i.return;
                            }
                            (i.sibling.return = i.return), (i = i.sibling);
                        }
                    a ? ((o = r), (i = t.stateNode), 8 === o.nodeType ? o.parentNode.removeChild(i) : o.removeChild(i)) : r.removeChild(t.stateNode);
                } else if ((4 === t.tag ? (r = t.stateNode.containerInfo) : Vo(t), null !== t.child)) {
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
        function Ko(e, t) {
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
                        (t.updateQueue = null), null !== o && ((n[$] = r), Qr(n, o, a, e, r));
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
            ((n = za(n)).tag = 3), (n.payload = { element: null });
            var r = t.value;
            return (
                (n.callback = function () {
                    Ji(r), Bo(e, t);
                }),
                n
            );
        }
        function Xo(e, t, n) {
            (n = za(n)).tag = 3;
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
        function Go(e, t, n, r, a, o) {
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
        function Yo(e) {
            switch (e.tag) {
                case 2:
                    ba(e);
                    var t = e.effectTag;
                    return 1024 & t ? ((e.effectTag = (-1025 & t) | 64), e) : null;
                case 3:
                    return io(), ya(), 1024 & (t = e.effectTag) ? ((e.effectTag = (-1025 & t) | 64), e) : null;
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
        (Fo = function (e, t, n) {
            (t.updateQueue = n) && jo(t);
        }),
            (zo = function (e, t, n, r) {
                n !== r && jo(t);
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
            si = !1,
            ui = null,
            ci = !1,
            fi = !1,
            di = null;
        function pi() {
            if (null !== ai)
                for (var e = ai.return; null !== e; ) {
                    var t = e;
                    switch (t.tag) {
                        case 2:
                            ba(t);
                            break;
                        case 3:
                            io(), ya();
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
            (oi = null), (ii = 0), (li = -1), (si = !1), (ai = null), (fi = !1);
        }
        function gi(e) {
            for (;;) {
                var t = e.alternate,
                    n = e.return,
                    r = e.sibling;
                if (0 == (512 & e.effectTag)) {
                    t = Do(t, e);
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
                    if (null !== (e = Yo(e))) return (e.effectTag &= 511), e;
                    if ((null !== n && ((n.firstEffect = n.lastEffect = null), (n.effectTag |= 512)), null !== r)) return r;
                    if (null === n) break;
                    e = n;
                }
            }
            return null;
        }
        function mi(e) {
            var t = Uo(e.alternate, e, ii);
            return null === t && (t = gi(e)), (lt.current = null), t;
        }
        function hi(e, t, n) {
            ri && d("243"), (ri = !0), (t === ii && e === oi && null !== ai) || (pi(), (ii = t), (li = -1), (ai = Aa((oi = e).current, null, ii)), (e.pendingCommitExpirationTime = 0));
            var r = !1;
            for (si = !n || ii <= Jo; ; ) {
                try {
                    if (n) for (; null !== ai && !Zi(); ) ai = mi(ai);
                    else for (; null !== ai; ) ai = mi(ai);
                } catch (t) {
                    if (null === ai) (r = !0), Ji(t);
                    else {
                        null === ai && d("271");
                        var a = (n = ai).return;
                        if (null === a) {
                            (r = !0), Ji(t);
                            break;
                        }
                        Go(e, a, n, t, 0, ii), (ai = gi(n));
                    }
                }
                break;
            }
            if (((ri = !1), r)) return null;
            if (null === ai) {
                if (fi) return (e.pendingCommitExpirationTime = t), e.current.alternate;
                si && d("262"),
                    0 <= li &&
                        setTimeout(function () {
                            var t = e.current.expirationTime;
                            0 !== t && (0 === e.remainingExpirationTime || e.remainingExpirationTime < t) && Vi(e, t);
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
        function bi() {
            var e = 2 + 25 * (1 + (((wi() - 2 + 500) / 25) | 0));
            return e <= ti && (e = ti + 1), (ti = e);
        }
        function yi(e, t) {
            return (e = 0 !== ni ? ni : ri ? (ci ? 1 : ii) : 1 & t.mode ? (Fi ? 2 + 10 * (1 + (((e - 2 + 15) / 10) | 0)) : 2 + 25 * (1 + (((e - 2 + 500) / 25) | 0))) : 1), Fi && (0 === Oi || e > Oi) && (Oi = e), e;
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
                    (ri && !ci && oi === n) || Vi(n, r), Bi > Di && d("185");
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
        function Ci(e, t, n, r, a) {
            var o = ni;
            ni = 1;
            try {
                return e(t, n, r, a);
            } finally {
                ni = o;
            }
        }
        var Ei = null,
            Ai = null,
            Ti = 0,
            Si = void 0,
            _i = !1,
            Pi = null,
            Li = 0,
            Oi = 0,
            Ni = !1,
            Ri = !1,
            Mi = null,
            Ii = null,
            Ui = !1,
            ji = !1,
            Fi = !1,
            zi = null,
            Di = 1e3,
            Bi = 0;
        function Wi(e) {
            if (0 !== Ti) {
                if (e > Ti) return;
                null !== Si && aa(Si);
            }
            var t = na() - Zo;
            (Ti = e), (Si = ra(Hi, { timeout: 10 * (e - 2) - t }));
        }
        function Vi(e, t) {
            if (null === e.nextScheduledRoot) (e.remainingExpirationTime = t), null === Ai ? ((Ei = Ai = e), (e.nextScheduledRoot = e)) : ((Ai = Ai.nextScheduledRoot = e).nextScheduledRoot = Ei);
            else {
                var n = e.remainingExpirationTime;
                (0 === n || t < n) && (e.remainingExpirationTime = t);
            }
            _i || (Ui ? ji && ((Pi = e), (Li = 1), Gi(e, 1, !1)) : 1 === t ? qi() : Wi(t));
        }
        function $i() {
            var e = 0,
                t = null;
            if (null !== Ai)
                for (var n = Ai, r = Ei; null !== r; ) {
                    var a = r.remainingExpirationTime;
                    if (0 === a) {
                        if (((null === n || null === Ai) && d("244"), r === r.nextScheduledRoot)) {
                            Ei = Ai = r.nextScheduledRoot = null;
                            break;
                        }
                        if (r === Ei) (Ei = a = r.nextScheduledRoot), (Ai.nextScheduledRoot = a), (r.nextScheduledRoot = null);
                        else {
                            if (r === Ai) {
                                ((Ai = n).nextScheduledRoot = Ei), (r.nextScheduledRoot = null);
                                break;
                            }
                            (n.nextScheduledRoot = r.nextScheduledRoot), (r.nextScheduledRoot = null);
                        }
                        r = n.nextScheduledRoot;
                    } else {
                        if (((0 === e || a < e) && ((e = a), (t = r)), r === Ai)) break;
                        (n = r), (r = r.nextScheduledRoot);
                    }
                }
            null !== (n = Pi) && n === t && 1 === e ? Bi++ : (Bi = 0), (Pi = t), (Li = e);
        }
        function Hi(e) {
            Ki(0, !0, e);
        }
        function qi() {
            Ki(1, !1, null);
        }
        function Ki(e, t, n) {
            if (((Ii = n), $i(), t)) for (; null !== Pi && 0 !== Li && (0 === e || e >= Li) && (!Ni || wi() >= Li); ) wi(), Gi(Pi, Li, !Ni), $i();
            else for (; null !== Pi && 0 !== Li && (0 === e || e >= Li); ) Gi(Pi, Li, !1), $i();
            null !== Ii && ((Ti = 0), (Si = null)), 0 !== Li && Wi(Li), (Ii = null), (Ni = !1), Xi();
        }
        function Qi(e, t) {
            _i && d("253"), (Pi = e), (Li = t), Gi(e, t, !1), qi(), Xi();
        }
        function Xi() {
            if (((Bi = 0), null !== zi)) {
                var e = zi;
                zi = null;
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
            _i && d("245"),
                (_i = !0),
                n ? (null !== (n = e.finishedWork) ? Yi(e, n, t) : null !== (n = hi(e, t, !0)) && (Zi() ? (e.finishedWork = n) : Yi(e, n, t))) : null !== (n = e.finishedWork) ? Yi(e, n, t) : null !== (n = hi(e, t, !1)) && Yi(e, n, t),
                (_i = !1);
        }
        function Yi(e, t, n) {
            var r = e.firstBatch;
            if (null !== r && r._expirationTime <= n && (null === zi ? (zi = [r]) : zi.push(r), r._defer)) return (e.finishedWork = t), void (e.remainingExpirationTime = 0);
            if (((e.finishedWork = null), (ci = ri = !0), (n = t.stateNode).current === t && d("177"), 0 === (r = n.pendingCommitExpirationTime) && d("261"), (n.pendingCommitExpirationTime = 0), wi(), (lt.current = null), 1 < t.effectTag))
                if (null !== t.lastEffect) {
                    t.lastEffect.nextEffect = t;
                    var a = t.firstEffect;
                } else a = t;
            else a = t.firstEffect;
            Zr = Nn;
            var o = s();
            if (Hn(o)) {
                if ("selectionStart" in o) var i = { start: o.selectionStart, end: o.selectionEnd };
                else
                    e: {
                        var l = window.getSelection && window.getSelection();
                        if (l && 0 !== l.rangeCount) {
                            i = l.anchorNode;
                            var u = l.anchorOffset,
                                f = l.focusNode;
                            l = l.focusOffset;
                            try {
                                i.nodeType, f.nodeType;
                            } catch (e) {
                                i = null;
                                break e;
                            }
                            var p = 0,
                                g = -1,
                                m = -1,
                                h = 0,
                                v = 0,
                                b = o,
                                y = null;
                            t: for (;;) {
                                for (var x; b !== i || (0 !== u && 3 !== b.nodeType) || (g = p + u), b !== f || (0 !== l && 3 !== b.nodeType) || (m = p + l), 3 === b.nodeType && (p += b.nodeValue.length), null !== (x = b.firstChild); )
                                    (y = b), (b = x);
                                for (;;) {
                                    if (b === o) break t;
                                    if ((y === i && ++h === u && (g = p), y === f && ++v === l && (m = p), null !== (x = b.nextSibling))) break;
                                    y = (b = y).parentNode;
                                }
                                b = x;
                            }
                            i = -1 === g || -1 === m ? null : { start: g, end: m };
                        } else i = null;
                    }
                i = i || { start: 0, end: 0 };
            } else i = null;
            for (Jr = { focusedElem: o, selectionRange: i }, Rn(!1), ui = a; null !== ui; ) {
                (o = !1), (i = void 0);
                try {
                    for (; null !== ui; ) {
                        if (256 & ui.effectTag) {
                            var w = ui.alternate;
                            switch ((u = ui).tag) {
                                case 2:
                                    if (256 & u.effectTag && null !== w) {
                                        var k = w.memoizedProps,
                                            C = w.memoizedState,
                                            E = u.stateNode;
                                        (E.props = u.memoizedProps), (E.state = u.memoizedState);
                                        var A = E.getSnapshotBeforeUpdate(k, C);
                                        E.__reactInternalSnapshotBeforeUpdate = A;
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
                        ui = ui.nextEffect;
                    }
                } catch (e) {
                    (o = !0), (i = e);
                }
                o && (null === ui && d("178"), vi(ui, i), null !== ui && (ui = ui.nextEffect));
            }
            for (ui = a; null !== ui; ) {
                (w = !1), (k = void 0);
                try {
                    for (; null !== ui; ) {
                        var T = ui.effectTag;
                        if ((16 & T && Ir(ui.stateNode, ""), 128 & T)) {
                            var S = ui.alternate;
                            if (null !== S) {
                                var _ = S.ref;
                                null !== _ && ("function" == typeof _ ? _(null) : (_.current = null));
                            }
                        }
                        switch (14 & T) {
                            case 2:
                                Ho(ui), (ui.effectTag &= -3);
                                break;
                            case 6:
                                Ho(ui), (ui.effectTag &= -3), Ko(ui.alternate, ui);
                                break;
                            case 4:
                                Ko(ui.alternate, ui);
                                break;
                            case 8:
                                qo((C = ui)), (C.return = null), (C.child = null), C.alternate && ((C.alternate.child = null), (C.alternate.return = null));
                        }
                        ui = ui.nextEffect;
                    }
                } catch (e) {
                    (w = !0), (k = e);
                }
                w && (null === ui && d("178"), vi(ui, k), null !== ui && (ui = ui.nextEffect));
            }
            if (((_ = Jr), (S = s()), (T = _.focusedElem), (w = _.selectionRange), S !== T && c(document.documentElement, T))) {
                null !== w &&
                    Hn(T) &&
                    ((S = w.start),
                    void 0 === (_ = w.end) && (_ = S),
                    "selectionStart" in T
                        ? ((T.selectionStart = S), (T.selectionEnd = Math.min(_, T.value.length)))
                        : window.getSelection &&
                          ((S = window.getSelection()),
                          (k = T[he()].length),
                          (_ = Math.min(w.start, k)),
                          (w = void 0 === w.end ? _ : Math.min(w.end, k)),
                          !S.extend && _ > w && ((k = w), (w = _), (_ = k)),
                          (k = $n(T, _)),
                          (C = $n(T, w)),
                          k &&
                              C &&
                              (1 !== S.rangeCount || S.anchorNode !== k.node || S.anchorOffset !== k.offset || S.focusNode !== C.node || S.focusOffset !== C.offset) &&
                              ((E = document.createRange()).setStart(k.node, k.offset), S.removeAllRanges(), _ > w ? (S.addRange(E), S.extend(C.node, C.offset)) : (E.setEnd(C.node, C.offset), S.addRange(E))))),
                    (S = []);
                for (_ = T; (_ = _.parentNode); ) 1 === _.nodeType && S.push({ element: _, left: _.scrollLeft, top: _.scrollTop });
                for ("function" == typeof T.focus && T.focus(), T = 0; T < S.length; T++) ((_ = S[T]).element.scrollLeft = _.left), (_.element.scrollTop = _.top);
            }
            for (Jr = null, Rn(Zr), Zr = null, n.current = t, ui = a; null !== ui; ) {
                (a = !1), (T = void 0);
                try {
                    for (S = r; null !== ui; ) {
                        var P = ui.effectTag;
                        if (36 & P) {
                            var L = ui.alternate;
                            switch (((w = S), (_ = ui).tag)) {
                                case 2:
                                    var O = _.stateNode;
                                    if (4 & _.effectTag)
                                        if (null === L) (O.props = _.memoizedProps), (O.state = _.memoizedState), O.componentDidMount();
                                        else {
                                            var N = L.memoizedProps,
                                                R = L.memoizedState;
                                            (O.props = _.memoizedProps), (O.state = _.memoizedState), O.componentDidUpdate(N, R, O.__reactInternalSnapshotBeforeUpdate);
                                        }
                                    var M = _.updateQueue;
                                    null !== M && ((O.props = _.memoizedProps), (O.state = _.memoizedState), Ka(_, M, O));
                                    break;
                                case 3:
                                    var I = _.updateQueue;
                                    if (null !== I) {
                                        if (((k = null), null !== _.child))
                                            switch (_.child.tag) {
                                                case 5:
                                                    k = _.child.stateNode;
                                                    break;
                                                case 2:
                                                    k = _.child.stateNode;
                                            }
                                        Ka(_, I, k);
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
                            var j = ui.ref;
                            if (null !== j) {
                                var F = ui.stateNode;
                                switch (ui.tag) {
                                    case 5:
                                        _ = F;
                                        break;
                                    default:
                                        _ = F;
                                }
                                "function" == typeof j ? j(_) : (j.current = _);
                            }
                        }
                        var z = ui.nextEffect;
                        (ui.nextEffect = null), (ui = z);
                    }
                } catch (e) {
                    (a = !0), (T = e);
                }
                a && (null === ui && d("178"), vi(ui, T), null !== ui && (ui = ui.nextEffect));
            }
            (ri = ci = !1), Ma(t.stateNode), 0 === (t = n.current.expirationTime) && (di = null), (e.remainingExpirationTime = t);
        }
        function Zi() {
            return !(null === Ii || Ii.timeRemaining() > 1) && (Ni = !0);
        }
        function Ji(e) {
            null === Pi && d("246"), (Pi.remainingExpirationTime = 0), Ri || ((Ri = !0), (Mi = e));
        }
        function el(e, t) {
            var n = Ui;
            Ui = !0;
            try {
                return e(t);
            } finally {
                (Ui = n) || _i || qi();
            }
        }
        function tl(e, t) {
            if (Ui && !ji) {
                ji = !0;
                try {
                    return e(t);
                } finally {
                    ji = !1;
                }
            }
            return e(t);
        }
        function nl(e, t) {
            _i && d("187");
            var n = Ui;
            Ui = !0;
            try {
                return Ci(e, t);
            } finally {
                (Ui = n), qi();
            }
        }
        function rl(e, t, n) {
            if (Fi) return e(t, n);
            Ui || _i || 0 === Oi || (Ki(Oi, !1, null), (Oi = 0));
            var r = Fi,
                a = Ui;
            Ui = Fi = !0;
            try {
                return e(t, n);
            } finally {
                (Fi = r), (Ui = a) || _i || qi();
            }
        }
        function al(e) {
            var t = Ui;
            Ui = !0;
            try {
                Ci(e);
            } finally {
                (Ui = t) || _i || Ki(1, !1, null);
            }
        }
        function ol(e, t, n, r, a) {
            var o = t.current;
            if (n) {
                var i;
                e: {
                    for ((2 === un((n = n._reactInternalFiber)) && 2 === n.tag) || d("170"), i = n; 3 !== i.tag; ) {
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
            return null === t.context ? (t.context = n) : (t.pendingContext = n), (t = a), ((a = za(r)).payload = { element: e }), null !== (t = void 0 === t ? null : t) && (a.callback = t), Ba(o, a, r), xi(o, r), r;
        }
        function il(e) {
            var t = e._reactInternalFiber;
            return void 0 === t && ("function" == typeof e.render ? d("188") : d("268", Object.keys(e))), null === (e = dn(t)) ? null : e.stateNode;
        }
        function ll(e, t, n, r) {
            var a = t.current;
            return ol(e, t, n, (a = yi(wi(), a)), r);
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
                    (Oa = Ra(function (e) {
                        return t.onCommitFiberRoot(n, e);
                    })),
                        (Na = Ra(function (e) {
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
                _i || 0 === Oi || (Ki(Oi, !1, null), (Oi = 0));
            };
        function pl(e, t, n) {
            var r = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
            return { $$typeof: ct, key: null == r ? null : "" + r, children: e, containerInfo: t, implementation: n };
        }
        function gl(e) {
            (this._expirationTime = bi()), (this._root = e), (this._callbacks = this._next = null), (this._hasChildren = this._didComplete = !1), (this._children = null), (this._defer = !0);
        }
        function ml() {
            (this._callbacks = null), (this._didCommit = !1), (this._onCommit = this._onCommit.bind(this));
        }
        function hl(e, t, n) {
            this._internalRoot = La(e, t, n);
        }
        function vl(e) {
            return !(!e || (1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType && (8 !== e.nodeType || " react-mount-point-unstable " !== e.nodeValue)));
        }
        function bl(e, t, n, r, a) {
            vl(n) || d("200");
            var o = n._reactRootContainer;
            if (o) {
                if ("function" == typeof a) {
                    var i = a;
                    a = function () {
                        var e = sl(o._internalRoot);
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
                        var e = sl(o._internalRoot);
                        l.call(e);
                    };
                }
                tl(function () {
                    null != e ? o.legacy_renderSubtreeIntoContainer(e, t, a) : o.render(t, a);
                });
            }
            return sl(o._internalRoot);
        }
        function yl(e, t) {
            var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
            return vl(t) || d("200"), pl(e, t, null, n);
        }
        Be.injectFiberControlledHostComponent(Yr),
            (gl.prototype.render = function (e) {
                this._defer || d("250"), (this._hasChildren = !0), (this._children = e);
                var t = this._root._internalRoot,
                    n = this._expirationTime,
                    r = new ml();
                return ol(e, t, null, n, r._onCommit), r;
            }),
            (gl.prototype.then = function (e) {
                if (this._didComplete) e();
                else {
                    var t = this._callbacks;
                    null === t && (t = this._callbacks = []), t.push(e);
                }
            }),
            (gl.prototype.commit = function () {
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
            (gl.prototype._onComplete = function () {
                if (!this._didComplete) {
                    this._didComplete = !0;
                    var e = this._callbacks;
                    if (null !== e) for (var t = 0; t < e.length; t++) (0, e[t])();
                }
            }),
            (ml.prototype.then = function (e) {
                if (this._didCommit) e();
                else {
                    var t = this._callbacks;
                    null === t && (t = this._callbacks = []), t.push(e);
                }
            }),
            (ml.prototype._onCommit = function () {
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
                    r = new ml();
                return null !== (t = void 0 === t ? null : t) && r.then(t), ll(e, n, null, r._onCommit), r;
            }),
            (hl.prototype.unmount = function (e) {
                var t = this._internalRoot,
                    n = new ml();
                return null !== (e = void 0 === e ? null : e) && n.then(e), ll(null, t, null, n._onCommit), n;
            }),
            (hl.prototype.legacy_renderSubtreeIntoContainer = function (e, t, n) {
                var r = this._internalRoot,
                    a = new ml();
                return null !== (n = void 0 === n ? null : n) && a.then(n), ll(t, r, e, a._onCommit), a;
            }),
            (hl.prototype.createBatch = function () {
                var e = new gl(this),
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
            (Ge = fl),
            (Ye = dl);
        var xl = {
            createPortal: yl,
            findDOMNode: function (e) {
                return null == e ? null : 1 === e.nodeType ? e : il(e);
            },
            hydrate: function (e, t, n) {
                return bl(null, e, t, !0, n);
            },
            render: function (e, t, n) {
                return bl(null, e, t, !1, n);
            },
            unstable_renderSubtreeIntoContainer: function (e, t, n, r) {
                return (null == e || void 0 === e._reactInternalFiber) && d("38"), bl(e, t, n, !1, r);
            },
            unmountComponentAtNode: function (e) {
                return (
                    vl(e) || d("40"),
                    !!e._reactRootContainer &&
                        (tl(function () {
                            bl(null, null, e, !1, function () {
                                e._reactRootContainer = null;
                            });
                        }),
                        !0)
                );
            },
            unstable_createPortal: function () {
                return yl.apply(void 0, arguments);
            },
            unstable_batchedUpdates: el,
            unstable_deferredUpdates: ki,
            unstable_interactiveUpdates: rl,
            flushSync: nl,
            unstable_flushControlled: al,
            __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: { EventPluginHub: B, EventPluginRegistry: T, EventPropagators: ae, ReactControlledComponent: Qe, ReactDOMComponentTree: Q, ReactDOMEventListener: Fn },
            unstable_createRoot: function (e, t) {
                return new hl(e, !0, null != t && !0 === t.hydrate);
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
    function (e, t, n) {
        "use strict";
        var r = n(34);
        function a() {}
        e.exports = function () {
            function e(e, t, n, a, o, i) {
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
            return (n.checkPropTypes = a), (n.PropTypes = n), n;
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
                var a,
                    o = t
                        .trim()
                        .replace(/^"(.*)"$/, function (e, t) {
                            return t;
                        })
                        .replace(/^'(.*)'$/, function (e, t) {
                            return t;
                        });
                return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(o) ? e : ((a = 0 === o.indexOf("//") ? o : 0 === o.indexOf("/") ? n + o : r + o.replace(/^\.\//, "")), "url(" + JSON.stringify(a) + ")");
            });
        };
    },
    function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var r =
                Object.assign ||
                function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                    }
                    return e;
                },
            a = (function () {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
                    }
                }
                return function (t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t;
                };
            })(),
            o = n(0),
            i = d(o),
            l = d(n(41)),
            s = d(n(4)),
            u = d(n(42)),
            c = d(n(43)),
            f = n(44);
        function d(e) {
            return e && e.__esModule ? e : { default: e };
        }
        var p = (function (e) {
            function t(e) {
                !(function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                })(this, t);
                var n = (function (e, t) {
                    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
                })(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                return (
                    (n.handleClick = n.handleClick.bind(n)),
                    (n.handleTouchStart = n.handleTouchStart.bind(n)),
                    (n.handleTouchMove = n.handleTouchMove.bind(n)),
                    (n.handleTouchEnd = n.handleTouchEnd.bind(n)),
                    (n.handleFocus = n.handleFocus.bind(n)),
                    (n.handleBlur = n.handleBlur.bind(n)),
                    (n.previouslyChecked = !(!e.checked && !e.defaultChecked)),
                    (n.state = { checked: !(!e.checked && !e.defaultChecked), hasFocus: !1 }),
                    n
                );
            }
            return (
                (function (e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                    (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } })), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
                })(t, e),
                a(t, [
                    {
                        key: "componentWillReceiveProps",
                        value: function (e) {
                            "checked" in e && this.setState({ checked: !!e.checked });
                        },
                    },
                    {
                        key: "handleClick",
                        value: function (e) {
                            var t = this.input;
                            if (e.target !== t && !this.moved) return (this.previouslyChecked = t.checked), e.preventDefault(), t.focus(), void t.click();
                            var n = this.props.hasOwnProperty("checked") ? this.props.checked : t.checked;
                            this.setState({ checked: n });
                        },
                    },
                    {
                        key: "handleTouchStart",
                        value: function (e) {
                            (this.startX = (0, f.pointerCoord)(e).x), (this.activated = !0);
                        },
                    },
                    {
                        key: "handleTouchMove",
                        value: function (e) {
                            if (this.activated && ((this.moved = !0), this.startX)) {
                                var t = (0, f.pointerCoord)(e).x;
                                this.state.checked && t + 15 < this.startX
                                    ? (this.setState({ checked: !1 }), (this.startX = t), (this.activated = !0))
                                    : t - 15 > this.startX && (this.setState({ checked: !0 }), (this.startX = t), (this.activated = t < this.startX + 5));
                            }
                        },
                    },
                    {
                        key: "handleTouchEnd",
                        value: function (e) {
                            if (this.moved) {
                                var t = this.input;
                                if ((e.preventDefault(), this.startX)) {
                                    var n = (0, f.pointerCoord)(e).x;
                                    !0 === this.previouslyChecked && this.startX + 4 > n
                                        ? this.previouslyChecked !== this.state.checked && (this.setState({ checked: !1 }), (this.previouslyChecked = this.state.checked), t.click())
                                        : this.startX - 4 < n && this.previouslyChecked !== this.state.checked && (this.setState({ checked: !0 }), (this.previouslyChecked = this.state.checked), t.click()),
                                        (this.activated = !1),
                                        (this.startX = null),
                                        (this.moved = !1);
                                }
                            }
                        },
                    },
                    {
                        key: "handleFocus",
                        value: function (e) {
                            var t = this.props.onFocus;
                            t && t(e), this.setState({ hasFocus: !0 });
                        },
                    },
                    {
                        key: "handleBlur",
                        value: function (e) {
                            var t = this.props.onBlur;
                            t && t(e), this.setState({ hasFocus: !1 });
                        },
                    },
                    {
                        key: "getIcon",
                        value: function (e) {
                            var n = this.props.icons;
                            return n ? (void 0 === n[e] ? t.defaultProps.icons[e] : n[e]) : null;
                        },
                    },
                    {
                        key: "render",
                        value: function () {
                            var e = this,
                                t = this.props,
                                n = t.className,
                                a =
                                    (t.icons,
                                    (function (e, t) {
                                        var n = {};
                                        for (var r in e) t.indexOf(r) >= 0 || (Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]));
                                        return n;
                                    })(t, ["className", "icons"])),
                                o = (0, l.default)("react-toggle", { "react-toggle--checked": this.state.checked, "react-toggle--focus": this.state.hasFocus, "react-toggle--disabled": this.props.disabled }, n);
                            return i.default.createElement(
                                "div",
                                { className: o, onClick: this.handleClick, onTouchStart: this.handleTouchStart, onTouchMove: this.handleTouchMove, onTouchEnd: this.handleTouchEnd },
                                i.default.createElement(
                                    "div",
                                    { className: "react-toggle-track" },
                                    i.default.createElement("div", { className: "react-toggle-track-check" }, this.getIcon("checked")),
                                    i.default.createElement("div", { className: "react-toggle-track-x" }, this.getIcon("unchecked"))
                                ),
                                i.default.createElement("div", { className: "react-toggle-thumb" }),
                                i.default.createElement(
                                    "input",
                                    r({}, a, {
                                        ref: function (t) {
                                            e.input = t;
                                        },
                                        onFocus: this.handleFocus,
                                        onBlur: this.handleBlur,
                                        className: "react-toggle-screenreader-only",
                                        type: "checkbox",
                                    })
                                )
                            );
                        },
                    },
                ]),
                t
            );
        })(o.PureComponent);
        (t.default = p),
            (p.displayName = "Toggle"),
            (p.defaultProps = { icons: { checked: i.default.createElement(u.default, null), unchecked: i.default.createElement(c.default, null) } }),
            (p.propTypes = {
                checked: s.default.bool,
                disabled: s.default.bool,
                defaultChecked: s.default.bool,
                onChange: s.default.func,
                onFocus: s.default.func,
                onBlur: s.default.func,
                className: s.default.string,
                name: s.default.string,
                value: s.default.string,
                id: s.default.string,
                "aria-labelledby": s.default.string,
                "aria-label": s.default.string,
                icons: s.default.oneOfType([s.default.bool, s.default.shape({ checked: s.default.node, unchecked: s.default.node })]),
            });
    },
    function (e, t, n) {
        "use strict";
        var r = n(53).CopyToClipboard;
        (r.CopyToClipboard = r), (e.exports = r);
    },
    ,
    ,
    ,
    function (e, t, n) {
        var r;
        /*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/ !(function () {
            "use strict";
            var n = {}.hasOwnProperty;
            function a() {
                for (var e = [], t = 0; t < arguments.length; t++) {
                    var r = arguments[t];
                    if (r) {
                        var o = typeof r;
                        if ("string" === o || "number" === o) e.push(r);
                        else if (Array.isArray(r) && r.length) {
                            var i = a.apply(null, r);
                            i && e.push(i);
                        } else if ("object" === o) for (var l in r) n.call(r, l) && r[l] && e.push(l);
                    }
                }
                return e.join(" ");
            }
            e.exports
                ? ((a.default = a), (e.exports = a))
                : void 0 ===
                      (r = function () {
                          return a;
                      }.apply(t, [])) || (e.exports = r);
        })();
    },
    function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var r,
            a = n(0),
            o = (r = a) && r.__esModule ? r : { default: r };
        t.default = function () {
            return o.default.createElement(
                "svg",
                { width: "14", height: "11", viewBox: "0 0 14 11" },
                o.default.createElement("title", null, "switch-check"),
                o.default.createElement("path", { d: "M11.264 0L5.26 6.004 2.103 2.847 0 4.95l5.26 5.26 8.108-8.107L11.264 0", fill: "#fff", fillRule: "evenodd" })
            );
        };
    },
    function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var r,
            a = n(0),
            o = (r = a) && r.__esModule ? r : { default: r };
        t.default = function () {
            return o.default.createElement(
                "svg",
                { width: "10", height: "10", viewBox: "0 0 10 10" },
                o.default.createElement("title", null, "switch-x"),
                o.default.createElement("path", { d: "M9.9 2.12L7.78 0 4.95 2.828 2.12 0 0 2.12l2.83 2.83L0 7.776 2.123 9.9 4.95 7.07 7.78 9.9 9.9 7.776 7.072 4.95 9.9 2.12", fill: "#fff", fillRule: "evenodd" })
            );
        };
    },
    function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
            (t.pointerCoord = function (e) {
                if (e) {
                    var t = e.changedTouches;
                    if (t && t.length > 0) {
                        var n = t[0];
                        return { x: n.clientX, y: n.clientY };
                    }
                    var r = e.pageX;
                    if (void 0 !== r) return { x: r, y: e.pageY };
                }
                return { x: 0, y: 0 };
            });
    },
    function (e, t, n) {
        var r = n(46);
        "string" == typeof r && (r = [[e.i, r, ""]]);
        var a = { hmr: !0, transform: void 0, insertInto: void 0 };
        n(10)(r, a);
        r.locals && (e.exports = r.locals);
    },
    function (e, t, n) {
        (t = n(9)(!1)).push([
            e.i,
            ".react-toggle {\n  touch-action: pan-x;\n  display: inline-block;\n  position: relative;\n  cursor: pointer;\n  background-color: transparent;\n  border: 0;\n  padding: 0;\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -khtml-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  -webkit-tap-highlight-color: transparent; }\n\n.react-toggle-screenreader-only {\n  border: 0;\n  clip: rect(0 0 0 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px; }\n\n.react-toggle--disabled {\n  cursor: not-allowed;\n  opacity: 0.5;\n  -webkit-transition: opacity 0.25s;\n  transition: opacity 0.25s; }\n\n.react-toggle-track {\n  width: 50px;\n  height: 24px;\n  padding: 0;\n  border-radius: 30px;\n  background-color: #4D4D4D;\n  -webkit-transition: all 0.2s ease;\n  -moz-transition: all 0.2s ease;\n  transition: all 0.2s ease; }\n\n.react-toggle:hover:not(.react-toggle--disabled) .react-toggle-track {\n  background-color: #000000; }\n\n.react-toggle--checked .react-toggle-track {\n  background-color: #19AB27; }\n\n.react-toggle--checked:hover:not(.react-toggle--disabled) .react-toggle-track {\n  background-color: #128D15; }\n\n.react-toggle-track-check {\n  position: absolute;\n  width: 14px;\n  height: 10px;\n  top: 0px;\n  bottom: 0px;\n  margin-top: auto;\n  margin-bottom: auto;\n  line-height: 0;\n  left: 8px;\n  opacity: 0;\n  -webkit-transition: opacity 0.25s ease;\n  -moz-transition: opacity 0.25s ease;\n  transition: opacity 0.25s ease; }\n\n.react-toggle--checked .react-toggle-track-check {\n  opacity: 1;\n  -webkit-transition: opacity 0.25s ease;\n  -moz-transition: opacity 0.25s ease;\n  transition: opacity 0.25s ease; }\n\n.react-toggle-track-x {\n  position: absolute;\n  width: 10px;\n  height: 10px;\n  top: 0px;\n  bottom: 0px;\n  margin-top: auto;\n  margin-bottom: auto;\n  line-height: 0;\n  right: 10px;\n  opacity: 1;\n  -webkit-transition: opacity 0.25s ease;\n  -moz-transition: opacity 0.25s ease;\n  transition: opacity 0.25s ease; }\n\n.react-toggle--checked .react-toggle-track-x {\n  opacity: 0; }\n\n.react-toggle-thumb {\n  transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1) 0ms;\n  position: absolute;\n  top: 1px;\n  left: 1px;\n  width: 22px;\n  height: 22px;\n  border: 1px solid #4D4D4D;\n  border-radius: 50%;\n  background-color: #FAFAFA;\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n  -webkit-transition: all 0.25s ease;\n  -moz-transition: all 0.25s ease;\n  transition: all 0.25s ease; }\n\n.react-toggle--checked .react-toggle-thumb {\n  left: 27px;\n  border-color: #19AB27; }\n\n.react-toggle--focus .react-toggle-thumb {\n  -webkit-box-shadow: 0px 0px 3px 2px #0099E0;\n  -moz-box-shadow: 0px 0px 3px 2px #0099E0;\n  box-shadow: 0px 0px 2px 3px #0099E0; }\n\n.react-toggle:active:not(.react-toggle--disabled) .react-toggle-thumb {\n  -webkit-box-shadow: 0px 0px 5px 5px #0099E0;\n  -moz-box-shadow: 0px 0px 5px 5px #0099E0;\n  box-shadow: 0px 0px 5px 5px #0099E0; }\n",
            "",
        ]),
            (e.exports = t);
    },
    function (e, t, n) {
        var r = n(48);
        "string" == typeof r && (r = [[e.i, r, ""]]);
        var a = { hmr: !0, transform: void 0, insertInto: void 0 };
        n(10)(r, a);
        r.locals && (e.exports = r.locals);
    },
    function (e, t, n) {
        (t = n(9)(!1)).push([
            e.i,
            "#header {\n  padding: 10px;\n  background-color: var(--line);\n  display: flex;\n  flex-direction: row;\n  flex-shrink: 0;\n  align-items: center;\n  justify-content: space-between;\n  -moz-user-select: none;\n  -webkit-user-select: none; }\n  #header .title {\n    font-size: 15px;\n    font-weight: 400;\n    color: #666;\n    cursor: default;\n    flex-shrink: 0; }\n  #header .rightButtons {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: flex-end;\n    height: 18px; }\n    #header .rightButtons .toggleButton {\n      height: 18px; }\n      #header .rightButtons .toggleButton .react-toggle {\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        height: 18px; }\n        #header .rightButtons .toggleButton .react-toggle .react-toggle-track {\n          height: 10px;\n          width: 32px;\n          background-color: var(--sub-text);\n          -webkit-box-transition: all 100ms ease;\n          -moz-box-transition: all 100ms ease;\n          transition: all 100ms ease; }\n        #header .rightButtons .toggleButton .react-toggle .react-toggle-thumb {\n          height: 16px;\n          width: 16px;\n          left: 0px;\n          -webkit-box-shadow: none;\n          -moz-box-shadow: none;\n          box-shadow: none;\n          -webkit-box-transition: all 100ms ease;\n          -moz-box-transition: all 100ms ease;\n          transition: all 100ms ease; }\n        #header .rightButtons .toggleButton .react-toggle.react-toggle--checked .react-toggle-track {\n          background-color: var(--highlight); }\n        #header .rightButtons .toggleButton .react-toggle.react-toggle--checked .react-toggle-thumb {\n          left: 16px;\n          border-color: var(--highlight); }\n        #header .rightButtons .toggleButton .react-toggle.react-toggle--disabled {\n          cursor: unset; }\n    #header .rightButtons button {\n      display: block;\n      background-color: transparent;\n      border: none;\n      cursor: pointer;\n      outline: none;\n      padding: 0; }\n    #header .rightButtons .heartButton {\n      display: flex;\n      align-items: center;\n      margin: 0px 10px; }\n      #header .rightButtons .heartButton:hover svg {\n        fill: var(--confirm); }\n    #header .rightButtons .settingsButton {\n      display: flex;\n      align-items: center; }\n      #header .rightButtons .settingsButton:hover svg {\n        fill: var(--highlight);\n        transform: rotate(90deg); }\n    #header .rightButtons svg {\n      height: 18px;\n      width: 18px;\n      fill: var(--sub-text);\n      transition: fill 100ms, transform 300ms ease; }\n",
            "",
        ]),
            (e.exports = t);
    },
    function (e, t, n) {
        var r = n(50);
        "string" == typeof r && (r = [[e.i, r, ""]]);
        var a = { hmr: !0, transform: void 0, insertInto: void 0 };
        n(10)(r, a);
        r.locals && (e.exports = r.locals);
    },
    function (e, t, n) {
        (t = n(9)(!1)).push([
            e.i,
            ".listenButton {\n  padding: 0;\n  border: 0;\n  background-color: rgba(0, 0, 0, 0);\n  cursor: pointer; }\n  .listenButton svg {\n    height: 16px;\n    width: 16px;\n    fill: var(--sub-text); }\n    .listenButton svg:hover {\n      fill: var(--highlight); }\n",
            "",
        ]),
            (e.exports = t);
    },
    function (e, t, n) {
        var r = n(52);
        "string" == typeof r && (r = [[e.i, r, ""]]);
        var a = { hmr: !0, transform: void 0, insertInto: void 0 };
        n(10)(r, a);
        r.locals && (e.exports = r.locals);
    },
    function (e, t, n) {
        (t = n(9)(!1)).push([
            e.i,
            "#inputArea {\n  position: relative;\n  margin: 10px; }\n  #inputArea textarea {\n    font: inherit;\n    resize: none;\n    overflow: auto;\n    background-color: var(--main-bg);\n    box-sizing: border-box;\n    width: 100%;\n    height: 60px;\n    max-height: 240px;\n    min-height: 60px;\n    margin: 0;\n    padding: 10px;\n    border: solid 1px var(--button);\n    border-radius: 2px;\n    transition: border-color 100ms ease-out; }\n  #inputArea textarea:hover,\n  #inputArea textarea:focus {\n    border-color: var(--highlight); }\n  #inputArea .listen {\n    position: absolute;\n    height: 16px;\n    right: 5px;\n    bottom: 5px; }\n",
            "",
        ]),
            (e.exports = t);
    },
    function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.CopyToClipboard = void 0);
        var r =
                Object.assign ||
                function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                    }
                    return e;
                },
            a = (function () {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
                    }
                }
                return function (t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t;
                };
            })(),
            o = l(n(0)),
            i = l(n(54));
        function l(e) {
            return e && e.__esModule ? e : { default: e };
        }
        function s(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }
        function u(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
        }
        (t.CopyToClipboard = (function (e) {
            function t() {
                var e, n, r;
                s(this, t);
                for (var a = arguments.length, l = Array(a), c = 0; c < a; c++) l[c] = arguments[c];
                return (
                    (n = r = u(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(l)))),
                    (r.onClick = function (e) {
                        var t = r.props,
                            n = t.text,
                            a = t.onCopy,
                            l = t.children,
                            s = t.options,
                            u = o.default.Children.only(l),
                            c = (0, i.default)(n, s);
                        a && a(n, c), u && u.props && "function" == typeof u.props.onClick && u.props.onClick(e);
                    }),
                    u(r, n)
                );
            }
            return (
                (function (e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                    (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } })), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
                })(t, e),
                a(t, [
                    {
                        key: "render",
                        value: function () {
                            var e = this.props,
                                t = (e.text, e.onCopy, e.options, e.children),
                                n = (function (e, t) {
                                    var n = {};
                                    for (var r in e) t.indexOf(r) >= 0 || (Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]));
                                    return n;
                                })(e, ["text", "onCopy", "options", "children"]),
                                a = o.default.Children.only(t);
                            return o.default.cloneElement(a, r({}, n, { onClick: this.onClick }));
                        },
                    },
                ]),
                t
            );
        })(o.default.PureComponent)).defaultProps = { onCopy: void 0, options: void 0 };
    },
    function (e, t, n) {
        "use strict";
        var r = n(55);
        e.exports = function (e, t) {
            var n,
                a,
                o,
                i,
                l,
                s,
                u = !1;
            t || (t = {}), (n = t.debug || !1);
            try {
                if (
                    ((o = r()),
                    (i = document.createRange()),
                    (l = document.getSelection()),
                    ((s = document.createElement("span")).textContent = e),
                    (s.style.all = "unset"),
                    (s.style.position = "fixed"),
                    (s.style.top = 0),
                    (s.style.clip = "rect(0, 0, 0, 0)"),
                    (s.style.whiteSpace = "pre"),
                    (s.style.webkitUserSelect = "text"),
                    (s.style.MozUserSelect = "text"),
                    (s.style.msUserSelect = "text"),
                    (s.style.userSelect = "text"),
                    document.body.appendChild(s),
                    i.selectNode(s),
                    l.addRange(i),
                    !document.execCommand("copy"))
                )
                    throw new Error("copy command was unsuccessful");
                u = !0;
            } catch (r) {
                n && console.error("unable to copy using execCommand: ", r), n && console.warn("trying IE specific stuff");
                try {
                    window.clipboardData.setData("text", e), (u = !0);
                } catch (r) {
                    n && console.error("unable to copy using clipboardData: ", r),
                        n && console.error("falling back to prompt"),
                        (a = (function (e) {
                            var t = (/mac os x/i.test(navigator.userAgent) ? "⌘" : "Ctrl") + "+C";
                            return e.replace(/#{\s*key\s*}/g, t);
                        })("message" in t ? t.message : "Copy to clipboard: #{key}, Enter")),
                        window.prompt(a, e);
                }
            } finally {
                l && ("function" == typeof l.removeRange ? l.removeRange(i) : l.removeAllRanges()), s && document.body.removeChild(s), o();
            }
            return u;
        };
    },
    function (e, t) {
        e.exports = function () {
            var e = document.getSelection();
            if (!e.rangeCount) return function () {};
            for (var t = document.activeElement, n = [], r = 0; r < e.rangeCount; r++) n.push(e.getRangeAt(r));
            switch (t.tagName.toUpperCase()) {
                case "INPUT":
                case "TEXTAREA":
                    t.blur();
                    break;
                default:
                    t = null;
            }
            return (
                e.removeAllRanges(),
                function () {
                    "Caret" === e.type && e.removeAllRanges(),
                        e.rangeCount ||
                            n.forEach(function (t) {
                                e.addRange(t);
                            }),
                        t && t.focus();
                }
            );
        };
    },
    function (e, t, n) {
        var r = n(57);
        "string" == typeof r && (r = [[e.i, r, ""]]);
        var a = { hmr: !0, transform: void 0, insertInto: void 0 };
        n(10)(r, a);
        r.locals && (e.exports = r.locals);
    },
    function (e, t, n) {
        (t = n(9)(!1)).push([
            e.i,
            ".copy {\n  display: flex;\n  justify-content: center; }\n  .copy .copiedText {\n    color: var(--sub-text);\n    font-size: 12px;\n    margin-right: 5px;\n    -moz-user-select: none;\n    -webkit-user-select: none; }\n  .copy .copyButton {\n    padding: 0;\n    border: 0;\n    background-color: var(--main-bg);\n    cursor: pointer; }\n    .copy .copyButton svg {\n      height: 16px;\n      width: 16px;\n      fill: var(--sub-text); }\n      .copy .copyButton svg:hover {\n        fill: var(--highlight); }\n",
            "",
        ]),
            (e.exports = t);
    },
    function (e, t, n) {
        var r = n(59);
        "string" == typeof r && (r = [[e.i, r, ""]]);
        var a = { hmr: !0, transform: void 0, insertInto: void 0 };
        n(10)(r, a);
        r.locals && (e.exports = r.locals);
    },
    function (e, t, n) {
        (t = n(9)(!1)).push([
            e.i,
            "#resultArea {\n  max-height: 240px;\n  min-height: 30px;\n  overflow-y: auto;\n  word-wrap: break-word;\n  background-color: var(--main-bg);\n  margin: 10px 10px 3px; }\n  #resultArea p {\n    margin: 0;\n    padding: 0px 5px;\n    background-color: var(--main-bg); }\n    #resultArea p.resultText {\n      color: var(--main-text); }\n    #resultArea p.candidateText, #resultArea p.error {\n      color: var(--sub-text);\n      margin-top: 1em; }\n      #resultArea p.candidateText:empty, #resultArea p.error:empty {\n        margin-top: 0; }\n  #resultArea .translateLink a {\n    font-style: normal;\n    text-decoration: none;\n    color: var(--highlight);\n    cursor: pointer; }\n    #resultArea .translateLink a:hover {\n      text-decoration: underline; }\n  #resultArea .mediaButtons {\n    display: flex;\n    flex-direction: row;\n    justify-content: flex-end;\n    margin-right: 5px; }\n    #resultArea .mediaButtons > * {\n      margin-left: 10px; }\n",
            "",
        ]),
            (e.exports = t);
    },
    function (e, t, n) {
        var r = n(61);
        "string" == typeof r && (r = [[e.i, r, ""]]);
        var a = { hmr: !0, transform: void 0, insertInto: void 0 };
        n(10)(r, a);
        r.locals && (e.exports = r.locals);
    },
    function (e, t, n) {
        (t = n(9)(!1)).push([
            e.i,
            '#footer {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0px 10px 10px; }\n  #footer .translateLink {\n    flex-shrink: 0; }\n    #footer .translateLink a {\n      font-style: normal;\n      text-decoration: none;\n      color: var(--highlight);\n      cursor: pointer; }\n      #footer .translateLink a:hover {\n        text-decoration: underline; }\n  #footer .selectWrap {\n    position: relative;\n    margin-left: 5px; }\n    #footer .selectWrap:before {\n      pointer-events: none;\n      content: "";\n      z-index: 1;\n      position: absolute;\n      top: 35%;\n      right: 7px;\n      width: 5px;\n      height: 5px;\n      transform: rotate(45deg);\n      border-bottom: 2px solid var(--sub-text);\n      border-right: 2px solid var(--sub-text);\n      transition: border-color 100ms ease-out; }\n    #footer .selectWrap:hover::before {\n      border-bottom: 2px solid var(--highlight);\n      border-right: 2px solid var(--highlight); }\n    #footer .selectWrap select {\n      -moz-appearance: none;\n      -webkit-appearance: none;\n      text-overflow: ellipsis;\n      background-color: var(--main-bg);\n      border: var(--button) solid 1px;\n      border-radius: 2px;\n      padding: 3px 5px;\n      padding-right: 20px;\n      width: 100%;\n      transition: border-color 100ms ease-out; }\n      #footer .selectWrap select:hover {\n        border-color: var(--highlight); }\n',
            "",
        ]),
            (e.exports = t);
    },
    function (e, t, n) {
        var r = n(63);
        "string" == typeof r && (r = [[e.i, r, ""]]);
        var a = { hmr: !0, transform: void 0, insertInto: void 0 };
        n(10)(r, a);
        r.locals && (e.exports = r.locals);
    },
    function (e, t, n) {
        (t = n(9)(!1)).push([
            e.i,
            'body {\n  margin: 0;\n  font-family: "Segoe UI", "San Francisco", "Ubuntu", "Fira Sans", "Roboto", "Arial", "Helvetica",\r sans-serif;\n  font-size: 13px;\n  width: 348px;\n  overflow: hidden;\n  background-color: var(--main-bg); }\n  body #root {\n    height: 100%; }\n  body hr {\n    border: none;\n    border-top: solid 1px var(--button);\n    height: 1px;\n    margin: 0px 10px; }\n  body ::-moz-selection {\n    background: var(--line); }\n\n:root {\n  --main-text: #0c0c0d;\n  --sub-text: #737373;\n  --line: #ededf0;\n  --button: #d7d7db;\n  --highlight: #5595ff;\n  --main-bg: #ffffff;\n  --confirm: #ff4f4f;\n  --error: #d70022;\n  --warn: #ff8f00;\n  --success: #058b00;\n  --info: #0a84ff; }\n',
            "",
        ]),
            (e.exports = t);
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
    function (e, t, n) {
        "use strict";
        n.r(t);
        var r = n(0),
            a = n.n(r),
            o = n(11),
            i = n.n(o),
            l = n(1),
            s = n.n(l),
            u = n(3),
            c = n.n(u),
            f = n(2),
            d = n(8),
            p = n(29),
            g = async (e) => {
                const t = (await s.a.tabs.query({ currentWindow: !0, active: !0 }))[0];
                s.a.tabs.create({ url: e, index: t.index + 1 });
            },
            m = n(16);
        function h(e, t) {
            if (null == e) return {};
            var n,
                r,
                a = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        a = {},
                        o = Object.keys(e);
                    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
                    return a;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n]));
            }
            return a;
        }
        function v() {
            return (v =
                Object.assign ||
                function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                    }
                    return e;
                }).apply(this, arguments);
        }
        var b = (e) => {
            let { styles: t = {} } = e,
                n = h(e, ["styles"]);
            return a.a.createElement(
                "svg",
                v({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 492.72 492.72" }, n),
                a.a.createElement("path", {
                    d:
                        "M492.72 166c0-73.48-59.57-133.05-133.06-133.05-47.99 0-89.9 25.49-113.3 63.57-23.41-38.08-65.33-63.57-113.32-63.57C59.56 32.95 0 92.52 0 166.01c0 40 17.73 75.8 45.67 100.18l188.55 188.55a17.17 17.17 0 0024.28 0l188.54-188.55C475 241.8 492.72 206.02 492.72 166z",
                })
            );
        };
        function y(e, t) {
            if (null == e) return {};
            var n,
                r,
                a = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        a = {},
                        o = Object.keys(e);
                    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
                    return a;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n]));
            }
            return a;
        }
        function x() {
            return (x =
                Object.assign ||
                function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                    }
                    return e;
                }).apply(this, arguments);
        }
        var w = (e) => {
                let { styles: t = {} } = e,
                    n = y(e, ["styles"]);
                return a.a.createElement(
                    "svg",
                    x({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512" }, n),
                    a.a.createElement("path", {
                        className: t.st0 || "st0",
                        d:
                            "M499.45 210l-55.85-2.58c-5.1-.23-9.6-3.4-11.54-8.1l-11.51-27.7a13.18 13.18 0 012.45-13.9l37.67-41.34a13.2 13.2 0 00-.42-18.18l-46.43-46.45a13.2 13.2 0 00-18.2-.4L354.3 89a13.16 13.16 0 01-13.92 2.44l-27.7-11.5a13.12 13.12 0 01-8.09-11.56L302 12.56A13.17 13.17 0 00288.86 0h-65.7A13.18 13.18 0 00210 12.56l-2.57 55.83a13.13 13.13 0 01-8.1 11.57l-27.69 11.49A13.15 13.15 0 01157.72 89l-41.34-37.67a13.18 13.18 0 00-18.2.41L51.77 98.2a13.16 13.16 0 00-.42 18.18L89 157.71a13.13 13.13 0 012.42 13.92l-11.47 27.7a13.15 13.15 0 01-11.56 8.1L12.57 210A13.17 13.17 0 000 223.15v65.7c0 7.02 5.55 12.83 12.57 13.15l55.83 2.58c5.12.23 9.6 3.4 11.56 8.1l11.47 27.7a13.13 13.13 0 01-2.42 13.9L51.35 395.6a13.18 13.18 0 00.4 18.2l46.47 46.45a13.18 13.18 0 0018.18.42l41.31-37.68c3.76-3.44 9.21-4.4 13.93-2.44l27.7 11.48a13.15 13.15 0 018.09 11.58l2.57 55.83A13.19 13.19 0 00223.15 512h65.71c7.02 0 12.81-5.54 13.14-12.56l2.59-55.83a13.15 13.15 0 018.1-11.58l27.69-11.48c4.71-1.95 10.14-1 13.92 2.44l41.31 37.68a13.2 13.2 0 0018.2-.43l46.44-46.44a13.22 13.22 0 00.42-18.2L423 354.3a13.14 13.14 0 01-2.46-13.92l11.51-27.69a13.12 13.12 0 0111.55-8.1l55.85-2.58a13.16 13.16 0 0012.54-13.15v-65.7c0-7.03-5.52-12.83-12.54-13.15zM256.01 339.62A83.63 83.63 0 01172.39 256 83.62 83.62 0 11256 339.62z",
                    })
                );
            },
            k = n(36),
            C = n.n(k);
        n(45), n(47);
        const E = () => {
                g(m.d);
            },
            A = () => {
                g("../options/index.html#settings");
            };
        var T = (e) => {
            return a.a.createElement(
                "div",
                { id: "header" },
                a.a.createElement("div", { className: "title" }, "Translate Options"),
                a.a.createElement(
                    "div",
                    { className: "rightButtons" },
                    a.a.createElement(
                        "div",
                        { className: "toggleButton", title: ((t = e.isEnabledOnPage), t ? s.a.i18n.getMessage("disableOnThisPage") : s.a.i18n.getMessage("enableOnThisPage")) },
                        a.a.createElement(C.a, { checked: e.isEnabledOnPage, onChange: e.toggleEnabledOnPage, icons: !1, disabled: !e.isConnected })
                    ),
                    a.a.createElement("button", { className: "heartButton", onClick: E, title: s.a.i18n.getMessage("donateLabel") }, a.a.createElement(b, null)),
                    a.a.createElement("button", { className: "settingsButton", onClick: A, title: s.a.i18n.getMessage("settingsLabel") }, a.a.createElement(w, null))
                )
            );
            var t;
        };
        function S(e, t) {
            if (null == e) return {};
            var n,
                r,
                a = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        a = {},
                        o = Object.keys(e);
                    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
                    return a;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n]));
            }
            return a;
        }
        function _() {
            return (_ =
                Object.assign ||
                function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                    }
                    return e;
                }).apply(this, arguments);
        }
        var P = (e) => {
            let { styles: t = {} } = e,
                n = S(e, ["styles"]);
            return a.a.createElement(
                "svg",
                _({ xmlns: "http://www.w3.org/2000/svg", viewBox: "2 2 20 20" }, n),
                a.a.createElement("path", { d: "M14 3.23v2.06a7 7 0 010 13.41v2.07a9 9 0 000-17.54M16.5 12c0-1.77-1-3.29-2.5-4.03V16a4.4 4.4 0 002.5-4M3 9v6h4l5 5V4L7 9H3z" })
            );
        };
        n(49);
        var L = (e) => {
            const { text: t, lang: n } = e;
            return t && t.length < 200
                ? a.a.createElement(
                      "button",
                      {
                          className: "listenButton",
                          onClick: () =>
                              (async (e, t) => {
                                  const n = `https://translate.google.com/translate_tts?client=tw-ob&q=${encodeURIComponent(e)}&tl=${t}`,
                                      r = new Audio(n);
                                  r.load(), await r.play().catch((e) => c.a.error("popup/AudioButton", "playAudio()", e, n));
                              })(t, n),
                          title: s.a.i18n.getMessage("listenLabel"),
                      },
                      a.a.createElement(P, null)
                  )
                : null;
        };
        n(51);
        class O extends r.Component {
            constructor(...e) {
                var t;
                return (
                    (t = super(...e)),
                    (this.resizeTextArea = () => {
                        const e = i.a.findDOMNode(this.refs.textarea);
                        (e.style.height = "1px"), (e.style.height = e.scrollHeight + 2 + "px");
                    }),
                    (this.handleInputText = (e) => {
                        const t = e.target.value;
                        this.props.handleInputText(t);
                    }),
                    (this.componentDidUpdate = () => {
                        this.resizeTextArea();
                    }),
                    t
                );
            }
            shouldComponentUpdate(e) {
                return this.props.inputText !== e.inputText || this.props.sourceLang !== e.sourceLang;
            }
            render() {
                const { inputText: e, sourceLang: t } = this.props;
                return a.a.createElement(
                    "div",
                    { id: "inputArea" },
                    a.a.createElement("textarea", { value: e, ref: "textarea", placeholder: s.a.i18n.getMessage("initialTextArea"), onChange: this.handleInputText, autoFocus: !0, spellCheck: !1 }),
                    a.a.createElement("div", { className: "listen" }, t && a.a.createElement(L, { text: e, lang: t }))
                );
            }
        }
        var N = n(30),
            R = n(37);
        function M(e, t) {
            if (null == e) return {};
            var n,
                r,
                a = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        a = {},
                        o = Object.keys(e);
                    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
                    return a;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n]));
            }
            return a;
        }
        function I() {
            return (I =
                Object.assign ||
                function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                    }
                    return e;
                }).apply(this, arguments);
        }
        var U = (e) => {
            let { styles: t = {} } = e,
                n = M(e, ["styles"]);
            return a.a.createElement(
                "svg",
                I({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 561 561" }, n),
                a.a.createElement("path", {
                    d: "M395.25 0h-306c-28.05 0-51 22.95-51 51v357h51V51h306V0zm76.5 102h-280.5c-28.05 0-51 22.95-51 51v357c0 28.05 22.95 51 51 51h280.5c28.05 0 51-22.95 51-51V153c0-28.05-22.95-51-51-51zm0 408h-280.5V153h280.5v357z",
                })
            );
        };
        n(56);
        class j extends r.Component {
            constructor(e) {
                super(e),
                    (this.handleCopy = () => {
                        this.setState({ isCopied: !0 });
                    }),
                    (this.state = { isCopied: !1 });
            }
            componentWillReceiveProps(e) {
                this.props.text !== e.text && this.setState({ isCopied: !1 });
            }
            render() {
                const { text: e } = this.props;
                return e
                    ? a.a.createElement(
                          "div",
                          { className: "copy" },
                          this.state.isCopied && a.a.createElement("span", { className: "copiedText" }, s.a.i18n.getMessage("copiedLabel")),
                          a.a.createElement(R.CopyToClipboard, { text: e, onCopy: this.handleCopy }, a.a.createElement("button", { className: "copyButton", title: s.a.i18n.getMessage("copyLabel") }, a.a.createElement(U, null)))
                      )
                    : null;
            }
        }
        n(58);
        const F = (e) => {
            const t = /(\n)/g;
            return e.split(t).map((e, n) => (e.match(t) ? a.a.createElement("br", { key: n }) : e));
        };
        var z = (e) => {
                const { resultText: t, candidateText: n, statusText: r, targetLang: o } = e,
                    i = "OK" !== r,
                    l = Object(f.a)("ifShowCandidate");
                return a.a.createElement(
                    "div",
                    { id: "resultArea" },
                    a.a.createElement("p", { className: "resultText" }, F(t)),
                    l && a.a.createElement("p", { className: "candidateText" }, F(n)),
                    i && a.a.createElement("p", { className: "error" }, Object(N.a)(r)),
                    i &&
                        a.a.createElement(
                            "p",
                            { className: "translateLink" },
                            a.a.createElement(
                                "a",
                                {
                                    onClick: () => {
                                        const { inputText: t, targetLang: n } = e,
                                            r = encodeURIComponent(t);
                                        g(`https://translate.google.com/?sl=auto&tl=${n}&text=${r}`);
                                    },
                                },
                                s.a.i18n.getMessage("openInGoogleLabel")
                            )
                        ),
                    a.a.createElement("div", { className: "mediaButtons" }, a.a.createElement(j, { text: t }), a.a.createElement(L, { text: t, lang: o }))
                );
            },
            D = n(7);
        n(60);
        class B extends r.Component {
            constructor(e) {
                super(e),
                    (this.handleLinkClick = async () => {
                        const { tabUrl: e, targetLang: t } = this.props,
                            n = encodeURIComponent(e);
                        g(`https://translate.google.com/translate?hl=${t}&sl=auto&u=${n}`);
                    }),
                    (this.handleChange = (e) => {
                        const t = e.target.value;
                        this.props.handleLangChange(t);
                    }),
                    (this.langList = Object(D.a)());
            }
            render() {
                const { tabUrl: e, targetLang: t } = this.props;
                return a.a.createElement(
                    "div",
                    { id: "footer" },
                    a.a.createElement("div", { className: "translateLink" }, e && a.a.createElement("a", { onClick: this.handleLinkClick }, s.a.i18n.getMessage("showLink"))),
                    a.a.createElement(
                        "div",
                        { className: "selectWrap" },
                        a.a.createElement(
                            "select",
                            { id: "langList", value: t, onChange: this.handleChange, title: s.a.i18n.getMessage("targetLangLabel") },
                            this.langList.map((e) => a.a.createElement("option", { value: e.value, key: e.value }, e.name))
                        )
                    )
                );
            }
        }
        n(62);
        class W extends r.Component {
            constructor(e) {
                super(e),
                    (this.init = async () => {
                        await Object(f.c)(), Object(d.a)(), Object(d.b)();
                        const e = Object(f.a)("targetLang");
                        this.setState({ targetLang: e });
                        const t = await (async () => {
                            try {
                                const e = (await s.a.tabs.query({ currentWindow: !0, active: !0 }))[0],
                                    t = s.a.tabs.sendMessage(e.id, { message: "getTabUrl" }),
                                    n = s.a.tabs.sendMessage(e.id, { message: "getSelectedText" }),
                                    r = s.a.tabs.sendMessage(e.id, { message: "getEnabled" }),
                                    a = await Promise.all([t, n, r]);
                                return { isConnected: !0, url: a[0], selectedText: a[1], isEnabledOnPage: a[2] };
                            } catch (e) {
                                return { isConnected: !1, url: "", selectedText: "", isEnabledOnPage: !1 };
                            }
                        })();
                        this.setState({ isConnected: t.isConnected, inputText: t.selectedText, tabUrl: t.url, isEnabledOnPage: t.isEnabledOnPage }), "" !== t.selectedText && this.handleInputText(t.selectedText);
                    }),
                    (this.handleInputText = (e) => {
                        c.a.log("popup/PopupPage", "handleInputText()", e), this.setState({ inputText: e });
                        const t = Object(f.a)("waitTime");
                        clearTimeout(this.inputTimer),
                            (this.inputTimer = setTimeout(async () => {
                                const t = await this.translateText(e, this.state.targetLang);
                                this.switchSecondLang(t);
                            }, t));
                    }),
                    (this.handleLangChange = (e) => {
                        c.a.info("popup/PopupPage", "handleLangChange()", e), this.setState({ targetLang: e });
                        const t = this.state.inputText;
                        "" !== t && this.translateText(t, e);
                    }),
                    (this.translateText = async (e, t) => {
                        c.a.info("popup/PopupPage", "translateText()", e, t);
                        const n = await Object(p.a)(e, "auto", t);
                        return this.setState({ resultText: n.resultText, candidateText: n.candidateText, statusText: n.statusText, sourceLang: n.sourceLanguage }), n;
                    }),
                    (this.switchSecondLang = (e) => {
                        if (!Object(f.a)("ifChangeSecondLang")) return;
                        const t = Object(f.a)("targetLang"),
                            n = Object(f.a)("secondTargetLang");
                        if (t === n) return;
                        const r = e.sourceLanguage === this.state.targetLang && e.percentage > 0,
                            a = e.sourceLanguage === t && e.percentage > 0;
                        this.isSwitchedSecondLang
                            ? a || (c.a.info("popup/PopupPage", "=>switchSecondLang()", e, t), this.handleLangChange(t), (this.isSwitchedSecondLang = !1))
                            : r && a && (c.a.info("popup/PopupPage", "=>switchSecondLang()", e, n), this.handleLangChange(n), (this.isSwitchedSecondLang = !0));
                    }),
                    (this.toggleEnabledOnPage = async (e) => {
                        const t = e.target.checked;
                        this.setState({ isEnabledOnPage: t });
                        try {
                            const e = (await s.a.tabs.query({ currentWindow: !0, active: !0 }))[0];
                            t ? await s.a.tabs.sendMessage(e.id, { message: "enableExtension" }) : await s.a.tabs.sendMessage(e.id, { message: "disableExtension" });
                        } catch (e) {}
                    }),
                    (this.state = { targetLang: "", inputText: "", resultText: "", candidateText: "", sourceLang: "", statusText: "OK", tabUrl: "", isConnected: !0, isEnabledOnPage: !0 }),
                    (this.isSwitchedSecondLang = !1),
                    this.init();
            }
            render() {
                return a.a.createElement(
                    "div",
                    null,
                    a.a.createElement(T, { toggleEnabledOnPage: this.toggleEnabledOnPage, isEnabledOnPage: this.state.isEnabledOnPage, isConnected: this.state.isConnected }),
                    a.a.createElement(O, { inputText: this.state.inputText, handleInputText: this.handleInputText, sourceLang: this.state.sourceLang }),
                    a.a.createElement("hr", null),
                    a.a.createElement(z, { inputText: this.state.inputText, targetLang: this.state.targetLang, resultText: this.state.resultText, candidateText: this.state.candidateText, statusText: this.state.statusText }),
                    a.a.createElement(B, { tabUrl: this.state.tabUrl, targetLang: this.state.targetLang, handleLangChange: this.handleLangChange })
                );
            }
        }
        i.a.render(a.a.createElement(W, null), document.getElementById("root"));
    },
]);
