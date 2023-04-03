!(function (e) {
    var t = {};
    function n(a) {
        if (t[a]) return t[a].exports;
        var s = (t[a] = { i: a, l: !1, exports: {} });
        return e[a].call(s.exports, s, s.exports, n), (s.l = !0), s.exports;
    }
    (n.m = e),
        (n.c = t),
        (n.d = function (e, t, a) {
            n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: a });
        }),
        (n.r = function (e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 });
        }),
        (n.t = function (e, t) {
            if ((1 & t && (e = n(e)), 8 & t)) return e;
            if (4 & t && "object" == typeof e && e && e.__esModule) return e;
            var a = Object.create(null);
            if ((n.r(a), Object.defineProperty(a, "default", { enumerable: !0, value: e }), 2 & t && "string" != typeof e))
                for (var s in e)
                    n.d(
                        a,
                        s,
                        function (t) {
                            return e[t];
                        }.bind(null, s)
                    );
            return a;
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
        n((n.s = 82));
})({
    1: function (e, t, n) {
        var a, s, r;
        (s = [e]),
            void 0 ===
                (r =
                    "function" ==
                    typeof (a = function (e) {
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
                                      a = (e) => (1 == e ? "argument" : "arguments"),
                                      s = (e, t, n) => new Proxy(t, { apply: (t, a, s) => n.call(a, e, ...s) });
                                  let r = Function.call.bind(Object.prototype.hasOwnProperty);
                                  const o = (e, t = {}, i = {}) => {
                                          let l = Object.create(null),
                                              g = {
                                                  has: (t, n) => n in e || n in l,
                                                  get(g, c) {
                                                      if (c in l) return l[c];
                                                      if (c in e) {
                                                          let g = e[c];
                                                          if ("function" == typeof g)
                                                              if ("function" == typeof t[c]) g = s(e, e[c], t[c]);
                                                              else if (r(i, c)) {
                                                                  let t = ((e, t) =>
                                                                      function (s, ...r) {
                                                                          if (r.length < t.minArgs) throw new Error(`Expected at least ${t.minArgs} ${a(t.minArgs)} for ${e}(), got ${r.length}`);
                                                                          if (r.length > t.maxArgs) throw new Error(`Expected at most ${t.maxArgs} ${a(t.maxArgs)} for ${e}(), got ${r.length}`);
                                                                          return new Promise((a, o) => {
                                                                              if (t.fallbackToNoCallback)
                                                                                  try {
                                                                                      s[e](...r, n({ resolve: a, reject: o }, t));
                                                                                  } catch (n) {
                                                                                      console.warn(e + " API method doesn't seem to support the callback parameter, falling back to call it without a callback: ", n),
                                                                                          s[e](...r),
                                                                                          (t.fallbackToNoCallback = !1),
                                                                                          (t.noCallback = !0),
                                                                                          a();
                                                                                  }
                                                                              else t.noCallback ? (s[e](...r), a()) : s[e](...r, n({ resolve: a, reject: o }, t));
                                                                          });
                                                                      })(c, i[c]);
                                                                  g = s(e, e[c], t);
                                                              } else g = g.bind(e);
                                                          else {
                                                              if ("object" != typeof g || null === g || (!r(t, c) && !r(i, c)))
                                                                  return (
                                                                      Object.defineProperty(l, c, {
                                                                          configurable: !0,
                                                                          enumerable: !0,
                                                                          get: () => e[c],
                                                                          set(t) {
                                                                              e[c] = t;
                                                                          },
                                                                      }),
                                                                      g
                                                                  );
                                                              g = o(g, t[c], i[c]);
                                                          }
                                                          return (l[c] = g), g;
                                                      }
                                                  },
                                                  set: (t, n, a) => (n in l ? (l[n] = a) : (e[n] = a), !0),
                                                  defineProperty: (e, t, n) => Reflect.defineProperty(l, t, n),
                                                  deleteProperty: (e, t) => Reflect.deleteProperty(l, t),
                                              },
                                              c = Object.create(e);
                                          return new Proxy(c, g);
                                      },
                                      i = (e) => ({
                                          addListener(t, n, ...a) {
                                              t.addListener(e.get(n), ...a);
                                          },
                                          hasListener: (t, n) => t.hasListener(e.get(n)),
                                          removeListener(t, n) {
                                              t.removeListener(e.get(n));
                                          },
                                      });
                                  let l = !1;
                                  const g = new t((e) =>
                                          "function" == typeof e
                                              ? function (t, n, a) {
                                                    let s,
                                                        r,
                                                        o = !1,
                                                        i = new Promise((e) => {
                                                            s = function (t) {
                                                                l ||
                                                                    (console.warn(
                                                                        "Returning a Promise is the preferred way to send a reply from an onMessage/onMessageExternal listener, as the sendResponse will be removed from the specs (See https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage)",
                                                                        new Error().stack
                                                                    ),
                                                                    (l = !0)),
                                                                    (o = !0),
                                                                    e(t);
                                                            };
                                                        });
                                                    try {
                                                        r = e(t, n, s);
                                                    } catch (e) {
                                                        r = Promise.reject(e);
                                                    }
                                                    const g = !0 !== r && ((e) => e && "object" == typeof e && "function" == typeof e.then)(r);
                                                    if (!0 !== r && !g && !o) return !1;
                                                    const c = (e) => {
                                                        e.then(
                                                            (e) => {
                                                                a(e);
                                                            },
                                                            (e) => {
                                                                let t;
                                                                (t = e && (e instanceof Error || "string" == typeof e.message) ? e.message : "An unexpected error occurred"), a({ __mozWebExtensionPolyfillReject__: !0, message: t });
                                                            }
                                                        ).catch((e) => {
                                                            console.error("Failed to send onMessage rejected reply", e);
                                                        });
                                                    };
                                                    return c(g ? r : i), !0;
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
                                      m = (e, t, n, ...s) => {
                                          if (s.length < t.minArgs) throw new Error(`Expected at least ${t.minArgs} ${a(t.minArgs)} for ${e}(), got ${s.length}`);
                                          if (s.length > t.maxArgs) throw new Error(`Expected at most ${t.maxArgs} ${a(t.maxArgs)} for ${e}(), got ${s.length}`);
                                          return new Promise((e, t) => {
                                              const a = c.bind(null, { resolve: e, reject: t });
                                              s.push(a), n.sendMessage(...s);
                                          });
                                      },
                                      d = {
                                          runtime: { onMessage: i(g), onMessageExternal: i(g), sendMessage: m.bind(null, "sendMessage", { minArgs: 1, maxArgs: 3 }) },
                                          tabs: { sendMessage: m.bind(null, "sendMessage", { minArgs: 2, maxArgs: 3 }) },
                                      },
                                      u = { clear: { minArgs: 1, maxArgs: 1 }, get: { minArgs: 1, maxArgs: 1 }, set: { minArgs: 1, maxArgs: 1 } };
                                  return (
                                      (e.privacy = { network: { networkPredictionEnabled: u, webRTCIPHandlingPolicy: u }, services: { passwordSavingEnabled: u }, websites: { hyperlinkAuditingEnabled: u, referrersEnabled: u } }),
                                      o(chrome, d, e)
                                  );
                              })())
                            : (e.exports = browser);
                    })
                        ? a.apply(t, s)
                        : a) || (e.exports = r);
    },
    12: function (e, t, n) {
        "use strict";
        var a = n(1),
            s = n.n(a),
            r = n(7);
        const o = Object(r.a)(),
            i = (() => {
                const e = s.a.i18n.getUILanguage(),
                    t = Object(r.a)().some((t) => t.value == e) ? e : "en";
                return { targetLang: t, secondTargetLang: "en" === t ? "ja" : "en" };
            })();
        t.a = [
            {
                category: "generalLabel",
                elements: [
                    { id: "targetLang", title: "targetLangLabel", captions: ["targetLangCaptionLabel"], type: "select", default: i.targetLang, options: o, useRawOptionName: !0 },
                    { id: "secondTargetLang", title: "secondTargetLangLabel", captions: ["secondTargetLangCaptionLabel"], type: "select", default: i.secondTargetLang, options: o, useRawOptionName: !0 },
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
    15: function (e) {
        e.exports = JSON.parse(
            '{"manifest_version":2,"version":"2.3.0","name":"__MSG_extName__","description":"__MSG_extDescription__","default_locale":"en","permissions":["<all_urls>","storage","contextMenus"],"options_ui":{"page":"options/index.html","open_in_tab":true},"icons":{"32":"icons/32.png","48":"icons/48.png","64":"icons/64.png","128":"icons/128.png","512":"icons/512.png"},"background":{"scripts":["background/background.js"]},"browser_action":{"default_icon":{"16":"icons/16.png","19":"icons/19.png","32":"icons/32.png","38":"icons/38.png","48":"icons/48.png","64":"icons/64.png","128":"icons/128.png","512":"icons/512.png"},"default_popup":"popup/index.html"},"content_scripts":[{"all_frames":true,"match_about_blank":true,"matches":["http://*/*","https://*/*","<all_urls>"],"js":["content/content.js"],"css":["content/content.css"]}],"web_accessible_resources":["icons/512.png"],"commands":{"_execute_browser_action":{"description":"__MSG_openPopupDescription__","suggested_key":{"default":"Ctrl+Shift+Space"}},"translateSelectedText":{"description":"__MSG_translateTextMenu__","suggested_key":{"default":"Ctrl+Space"}},"translatePage":{"description":"__MSG_translatePageMenu__"}}}'
        );
    },
    2: function (e, t, n) {
        "use strict";
        n.d(t, "c", function () {
            return g;
        }),
            n.d(t, "e", function () {
                return c;
            }),
            n.d(t, "a", function () {
                return m;
            }),
            n.d(t, "d", function () {
                return d;
            }),
            n.d(t, "b", function () {
                return u;
            });
        var a = n(1),
            s = n.n(a),
            r = n(3),
            o = n.n(r),
            i = n(12);
        let l = {};
        const g = async () => {
                const e = await s.a.storage.local.get("Settings");
                l = e.Settings || {};
                let t = !1;
                const n = (e) => {
                    null != e.id && null != e.default && null == l[e.id] && ((l[e.id] = e.default), (t = !0));
                };
                i.a.forEach((e) => {
                    e.elements.forEach((e) => {
                        n(e),
                            e.childElements &&
                                e.childElements.forEach((e) => {
                                    n(e);
                                });
                    });
                }),
                    t && (await s.a.storage.local.set({ Settings: l }));
            },
            c = async (e, t) => {
                o.a.info("settings/settings", "setSettings()", e, t), (l[e] = t), await s.a.storage.local.set({ Settings: l });
            },
            m = (e) => l[e],
            d = async () => {
                o.a.info("settings/settings", "resetAllSettings()"), (l = {}), await s.a.storage.local.set({ Settings: l }), await g();
            },
            u = (e, t) => {
                Object.keys(e).includes("Settings") && (l = e.Settings.newValue);
            };
    },
    3: function (e, t, n) {
        var a, s;
        !(function (r, o) {
            "use strict";
            void 0 ===
                (s =
                    "function" ==
                    typeof (a = function () {
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
                        function a(t) {
                            return "debug" === t && (t = "log"), "undefined" != typeof console && (void 0 !== console[t] ? n(console, t) : void 0 !== console.log ? n(console, "log") : e);
                        }
                        function s(n, a) {
                            for (var s = 0; s < t.length; s++) {
                                var r = t[s];
                                this[r] = s < n ? e : this.methodFactory(r, n, a);
                            }
                            this.log = this.debug;
                        }
                        function r(e, t, n) {
                            return function () {
                                "undefined" != typeof console && (s.call(this, t, n), this[e].apply(this, arguments));
                            };
                        }
                        function o(e, t, n) {
                            return a(e) || r.apply(this, arguments);
                        }
                        function i(e, n, a) {
                            var r,
                                i = this,
                                l = "loglevel";
                            function g() {
                                var e;
                                if ("undefined" != typeof window) {
                                    try {
                                        e = window.localStorage[l];
                                    } catch (e) {}
                                    if (void 0 === e)
                                        try {
                                            var t = window.document.cookie,
                                                n = t.indexOf(encodeURIComponent(l) + "=");
                                            -1 !== n && (e = /^([^;]+)/.exec(t.slice(n))[1]);
                                        } catch (e) {}
                                    return void 0 === i.levels[e] && (e = void 0), e;
                                }
                            }
                            e && (l += ":" + e),
                                (i.name = e),
                                (i.levels = { TRACE: 0, DEBUG: 1, INFO: 2, WARN: 3, ERROR: 4, SILENT: 5 }),
                                (i.methodFactory = a || o),
                                (i.getLevel = function () {
                                    return r;
                                }),
                                (i.setLevel = function (n, a) {
                                    if (("string" == typeof n && void 0 !== i.levels[n.toUpperCase()] && (n = i.levels[n.toUpperCase()]), !("number" == typeof n && n >= 0 && n <= i.levels.SILENT)))
                                        throw "log.setLevel() called with invalid level: " + n;
                                    if (
                                        ((r = n),
                                        !1 !== a &&
                                            (function (e) {
                                                var n = (t[e] || "silent").toUpperCase();
                                                if ("undefined" != typeof window) {
                                                    try {
                                                        return void (window.localStorage[l] = n);
                                                    } catch (e) {}
                                                    try {
                                                        window.document.cookie = encodeURIComponent(l) + "=" + n + ";";
                                                    } catch (e) {}
                                                }
                                            })(n),
                                        s.call(i, n, e),
                                        "undefined" == typeof console && n < i.levels.SILENT)
                                    )
                                        return "No console available for logging";
                                }),
                                (i.setDefaultLevel = function (e) {
                                    g() || i.setLevel(e, !1);
                                }),
                                (i.enableAll = function (e) {
                                    i.setLevel(i.levels.TRACE, e);
                                }),
                                (i.disableAll = function (e) {
                                    i.setLevel(i.levels.SILENT, e);
                                });
                            var c = g();
                            null == c && (c = null == n ? "WARN" : n), i.setLevel(c, !1);
                        }
                        var l = new i(),
                            g = {};
                        l.getLogger = function (e) {
                            if ("string" != typeof e || "" === e) throw new TypeError("You must supply a name when creating a logger.");
                            var t = g[e];
                            return t || (t = g[e] = new i(e, l.getLevel(), l.methodFactory)), t;
                        };
                        var c = "undefined" != typeof window ? window.log : void 0;
                        return (
                            (l.noConflict = function () {
                                return "undefined" != typeof window && window.log === l && (window.log = c), l;
                            }),
                            (l.getLoggers = function () {
                                return g;
                            }),
                            l
                        );
                    })
                        ? a.call(t, n, t, e)
                        : a) || (e.exports = s);
        })();
    },
    31: function (e, t, n) {
        "use strict";
        var a = n(5),
            s = n.n(a),
            r = n(15);
        t.a = (e) => {
            const t = r.commands[e].suggested_key || null;
            if (!t) return null;
            switch (s()().os) {
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
    5: function (e, t, n) {
        "use strict";
        e.exports = function (e) {
            var t,
                n = e || navigator.userAgent,
                a = (function (e) {
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
                s = n.match(/(opera|coast|chrome|safari|firefox|edge|trident(?=\/))\/?\s*?(\S+)/i) || [];
            if (null !== (t = n.match(/\bIEMobile\/(\S+[0-9])/))) return { name: "IEMobile", version: t[1].split(".")[0], fullVersion: t[1], os: a };
            if (/trident/i.test(s[1])) return { name: "IE", version: (t = /\brv[ :]+(\S+[0-9])/g.exec(n) || [])[1] && t[1].split(".")[0], fullVersion: t[1], os: a };
            if ("Chrome" === s[1]) {
                if (null !== (t = n.match(/\bOPR\/(\d+)/))) return { name: "Opera", version: t[1].split(".")[0], fullVersion: t[1], os: a };
                if (null !== (t = n.match(/\bEdge\/(\S+)/))) return { name: "Edge", version: t[1].split(".")[0], fullVersion: t[1], os: a };
            }
            return (
                "Coast" === (s = s[2] ? [s[1], s[2]] : [navigator.appName, navigator.appVersion, "-?"])[0] && (s[0] = "OperaCoast"),
                "Chrome" !== s[0] && null !== (t = n.match(/version\/(\S+)/i)) && "" !== t && s.splice(1, 1, t[1]),
                "Firefox" === s[0] && (s[0] = /waterfox/i.test(n) ? "Waterfox" : s[0]),
                { name: s[0], version: s[1].split(".")[0], fullVersion: s[1], os: a }
            );
        };
    },
    7: function (e, t, n) {
        "use strict";
        var a = n(1),
            s = n.n(a);
        const r = (e, t) => e.name.localeCompare(t.name);
        t.a = () => {
            const e = s.a.i18n
                .getMessage("langList")
                .split(", ")
                .map((e) => ({ value: e.split(":")[0], name: e.split(":")[1] }));
            return e.sort(r), e;
        };
    },
    8: function (e, t, n) {
        "use strict";
        n.d(t, "a", function () {
            return i;
        }),
            n.d(t, "b", function () {
                return l;
            });
        var a = n(3),
            s = n.n(a),
            r = n(2);
        let o = !1;
        const i = () => {
                if (o) return;
                o = !0;
                const e = s.a.methodFactory;
                s.a.methodFactory = (t, n, a) => {
                    const s = e(t, n, a);
                    return (e, ...n) => {
                        s(`[${t}]`, e + ":", ...n);
                    };
                };
            },
            l = () => {
                Object(r.a)("isDebugMode") ? s.a.enableAll() : s.a.disableAll();
            };
    },
    82: function (e, t, n) {
        "use strict";
        n.r(t);
        var a = n(1),
            s = n.n(a),
            r = n(5),
            o = n.n(r),
            i = n(3),
            l = n.n(i),
            g = n(2),
            c = n(8),
            m = n(31),
            d = n(15);
        const u = "background/keyboardShortcuts",
            A = async () => {
                const e = (await s.a.tabs.query({ active: !0 }))[0];
                s.a.tabs.sendMessage(e.id, { message: "translateSelectedText" });
            },
            p = async () => {
                const e = (await s.a.tabs.query({ active: !0 }))[0],
                    t = await s.a.tabs.sendMessage(e.id, { message: "getTabUrl" }),
                    n = `https://translate.google.com/translate?hl=${Object(g.a)("targetLang")}&sl=auto&u=${encodeURIComponent(t)}`;
                s.a.tabs.create({ url: n, active: !0, index: e.index + 1 });
            };
        const f = () => {
                Object(g.a)("ifShowMenu")
                    ? (h(),
                      (function () {
                          "Firefox" === o()().name && o()().version >= 53 && s.a.contextMenus.create({ id: "translatePageOnTab", title: s.a.i18n.getMessage("translatePageMenu"), contexts: ["tab"] });
                          s.a.contextMenus.create({ id: "translatePage", title: s.a.i18n.getMessage("translatePageMenu"), contexts: ["all"] }),
                              s.a.contextMenus.create({ id: "translateText", title: s.a.i18n.getMessage("translateTextMenu"), contexts: ["selection"] }),
                              s.a.contextMenus.create({ id: "translateLink", title: s.a.i18n.getMessage("translateLinkMenu"), contexts: ["link"] });
                      })())
                    : h();
            },
            b = (e, t) => {
                e.contexts.includes("selection") || e.contexts.includes("link") ? s.a.contextMenus.update("translatePage", { contexts: ["password"] }) : s.a.contextMenus.update("translatePage", { contexts: ["all"] }),
                    s.a.contextMenus.refresh();
            },
            x = (e, t) => {
                switch ((l.a.log("background/menus", "onMenusClickedListener()", e, t), e.menuItemId)) {
                    case "translatePage":
                    case "translatePageOnTab":
                        !(function (e, t) {
                            const n = Object(g.a)("targetLang"),
                                a = encodeURIComponent(e.pageUrl),
                                r = `https://translate.google.com/translate?hl=${n}&sl=auto&u=${a}`;
                            s.a.tabs.create({ url: r, active: !0, index: t.index + 1 });
                        })(e, t);
                        break;
                    case "translateText":
                        !(function (e) {
                            s.a.tabs.sendMessage(e.id, { message: "translateSelectedText" });
                        })(t);
                        break;
                    case "translateLink":
                        !(function (e, t) {
                            const n = Object(g.a)("targetLang"),
                                a = encodeURIComponent(e.linkUrl),
                                r = `https://translate.google.com/translate?hl=${n}&sl=auto&u=${a}`;
                            s.a.tabs.create({ url: r, active: !0, index: t.index + 1 });
                        })(e, t);
                }
            };
        function h() {
            s.a.contextMenus.removeAll();
        }
        (async () => {
            await Object(g.c)(),
                Object(c.a)(),
                Object(c.b)(),
                l.a.info("background/background", "init()"),
                s.a.storage.onChanged.addListener((e, t) => {
                    Object(g.b)(e, t), Object(c.b)(), f();
                }),
                "Firefox" === o()().name && o()().version >= 60 && s.a.contextMenus.onShown.addListener(b),
                s.a.contextMenus.onClicked.addListener(x),
                f();
        })(),
            s.a.runtime.onInstalled.addListener(async (e) => {
                if ("install" != e.reason && "update" != e.reason) return;
                var t;
                l.a.info("background/onInstalledListener", "onInstalledListener()", e),
                    await Object(g.c)(),
                    (async () => {
                        if (!("Firefox" == o()().name && o()().version >= 60)) return;
                        l.a.info(u, "initShortcuts()");
                        let e = Object(g.a)("initedShortcuts") || [];
                        const t = d.commands;
                        for (const n of Object.keys(t))
                            if (!e.includes(n))
                                try {
                                    await s.a.commands.update({ name: n, shortcut: Object(m.a)(n) }), e.push(n);
                                } catch (e) {
                                    l.a.error(u, "initShortcuts()", e);
                                }
                        Object(g.e)("initedShortcuts", e);
                    })(),
                    Object(g.a)("isShowOptionsPageWhenUpdated") && ((t = !1), s.a.tabs.create({ url: "options/index.html#information?action=updated", active: t })),
                    Object(g.e)("isShowUpdated", !0);
            }),
            s.a.commands.onCommand.addListener(async (e) => {
                switch ((l.a.log(u, "onCommandListener()", e), e)) {
                    case "translateSelectedText":
                        A();
                        break;
                    case "translatePage":
                        p();
                }
            });
    },
});
