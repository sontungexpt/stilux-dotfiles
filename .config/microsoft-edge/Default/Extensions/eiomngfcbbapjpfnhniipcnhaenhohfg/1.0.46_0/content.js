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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export getColorFromVar */
/* harmony export (immutable) */ __webpack_exports__["a"] = parse;
/* harmony export (immutable) */ __webpack_exports__["b"] = getValFromCache;
/* harmony export (immutable) */ __webpack_exports__["c"] = setValToCache;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__helpers__ = __webpack_require__(1);


const rgbMatch = /^rgba?\([^\(\)]+\)$/;
const hslMatch = /^hsla?\([^\(\)]+\)$/;
const hexMatch = /^#[0-9a-f]+$/i;
const hslSplitter = /hsla?|\(|\)|\/|,|\s/ig;
const hslRange = [360, 1, 1, 1];
const hslUnits = { '%': 100, 'deg': 360, 'rad': 2 * Math.PI, 'turn': 1 };
const rgbSplitter = /rgba?|\(|\)|\/|,|\s/ig;
const rgbRange = [255, 255, 255, 1];
const rgbUnits = { '%': 100 };
const knownColors = new Map(Object.entries({
    aliceblue: 0xf0f8ff,
    antiquewhite: 0xfaebd7,
    aqua: 0x00ffff,
    aquamarine: 0x7fffd4,
    azure: 0xf0ffff,
    beige: 0xf5f5dc,
    bisque: 0xffe4c4,
    black: 0x000000,
    blanchedalmond: 0xffebcd,
    blue: 0x0000ff,
    blueviolet: 0x8a2be2,
    brown: 0xa52a2a,
    burlywood: 0xdeb887,
    cadetblue: 0x5f9ea0,
    chartreuse: 0x7fff00,
    chocolate: 0xd2691e,
    coral: 0xff7f50,
    cornflowerblue: 0x6495ed,
    cornsilk: 0xfff8dc,
    crimson: 0xdc143c,
    cyan: 0x00ffff,
    darkblue: 0x00008b,
    darkcyan: 0x008b8b,
    darkgoldenrod: 0xb8860b,
    darkgray: 0xa9a9a9,
    darkgrey: 0xa9a9a9,
    darkgreen: 0x006400,
    darkkhaki: 0xbdb76b,
    darkmagenta: 0x8b008b,
    darkolivegreen: 0x556b2f,
    darkorange: 0xff8c00,
    darkorchid: 0x9932cc,
    darkred: 0x8b0000,
    darksalmon: 0xe9967a,
    darkseagreen: 0x8fbc8f,
    darkslateblue: 0x483d8b,
    darkslategray: 0x2f4f4f,
    darkslategrey: 0x2f4f4f,
    darkturquoise: 0x00ced1,
    darkviolet: 0x9400d3,
    deeppink: 0xff1493,
    deepskyblue: 0x00bfff,
    dimgray: 0x696969,
    dimgrey: 0x696969,
    dodgerblue: 0x1e90ff,
    firebrick: 0xb22222,
    floralwhite: 0xfffaf0,
    forestgreen: 0x228b22,
    fuchsia: 0xff00ff,
    gainsboro: 0xdcdcdc,
    ghostwhite: 0xf8f8ff,
    gold: 0xffd700,
    goldenrod: 0xdaa520,
    gray: 0x808080,
    grey: 0x808080,
    green: 0x008000,
    greenyellow: 0xadff2f,
    honeydew: 0xf0fff0,
    hotpink: 0xff69b4,
    indianred: 0xcd5c5c,
    indigo: 0x4b0082,
    ivory: 0xfffff0,
    khaki: 0xf0e68c,
    lavender: 0xe6e6fa,
    lavenderblush: 0xfff0f5,
    lawngreen: 0x7cfc00,
    lemonchiffon: 0xfffacd,
    lightblue: 0xadd8e6,
    lightcoral: 0xf08080,
    lightcyan: 0xe0ffff,
    lightgoldenrodyellow: 0xfafad2,
    lightgray: 0xd3d3d3,
    lightgrey: 0xd3d3d3,
    lightgreen: 0x90ee90,
    lightpink: 0xffb6c1,
    lightsalmon: 0xffa07a,
    lightseagreen: 0x20b2aa,
    lightskyblue: 0x87cefa,
    lightslategray: 0x778899,
    lightslategrey: 0x778899,
    lightsteelblue: 0xb0c4de,
    lightyellow: 0xffffe0,
    lime: 0x00ff00,
    limegreen: 0x32cd32,
    linen: 0xfaf0e6,
    magenta: 0xff00ff,
    maroon: 0x800000,
    mediumaquamarine: 0x66cdaa,
    mediumblue: 0x0000cd,
    mediumorchid: 0xba55d3,
    mediumpurple: 0x9370db,
    mediumseagreen: 0x3cb371,
    mediumslateblue: 0x7b68ee,
    mediumspringgreen: 0x00fa9a,
    mediumturquoise: 0x48d1cc,
    mediumvioletred: 0xc71585,
    midnightblue: 0x191970,
    mintcream: 0xf5fffa,
    mistyrose: 0xffe4e1,
    moccasin: 0xffe4b5,
    navajowhite: 0xffdead,
    navy: 0x000080,
    oldlace: 0xfdf5e6,
    olive: 0x808000,
    olivedrab: 0x6b8e23,
    orange: 0xffa500,
    orangered: 0xff4500,
    orchid: 0xda70d6,
    palegoldenrod: 0xeee8aa,
    palegreen: 0x98fb98,
    paleturquoise: 0xafeeee,
    palevioletred: 0xdb7093,
    papayawhip: 0xffefd5,
    peachpuff: 0xffdab9,
    peru: 0xcd853f,
    pink: 0xffc0cb,
    plum: 0xdda0dd,
    powderblue: 0xb0e0e6,
    purple: 0x800080,
    rebeccapurple: 0x663399,
    red: 0xff0000,
    rosybrown: 0xbc8f8f,
    royalblue: 0x4169e1,
    saddlebrown: 0x8b4513,
    salmon: 0xfa8072,
    sandybrown: 0xf4a460,
    seagreen: 0x2e8b57,
    seashell: 0xfff5ee,
    sienna: 0xa0522d,
    silver: 0xc0c0c0,
    skyblue: 0x87ceeb,
    slateblue: 0x6a5acd,
    slategray: 0x708090,
    slategrey: 0x708090,
    snow: 0xfffafa,
    springgreen: 0x00ff7f,
    steelblue: 0x4682b4,
    tan: 0xd2b48c,
    teal: 0x008080,
    thistle: 0xd8bfd8,
    tomato: 0xff6347,
    turquoise: 0x40e0d0,
    violet: 0xee82ee,
    wheat: 0xf5deb3,
    white: 0xffffff,
    whitesmoke: 0xf5f5f5,
    yellow: 0xffff00,
    yellowgreen: 0x9acd32
}));
const systemColors = new Map(Object.entries({
    ActiveBorder: 0x3b99fc,
    ActiveCaption: 0x000000,
    AppWorkspace: 0xaaaaaa,
    Background: 0x6363ce,
    ButtonFace: 0xffffff,
    ButtonHighlight: 0xe9e9e9,
    ButtonShadow: 0x9fa09f,
    ButtonText: 0x000000,
    CaptionText: 0x000000,
    GrayText: 0x7f7f7f,
    Highlight: 0xb2d7ff,
    HighlightText: 0x000000,
    InactiveBorder: 0xffffff,
    InactiveCaption: 0xffffff,
    InactiveCaptionText: 0x000000,
    InfoBackground: 0xfbfcc5,
    InfoText: 0x000000,
    Menu: 0xf6f6f6,
    MenuText: 0xffffff,
    Scrollbar: 0xaaaaaa,
    ThreeDDarkShadow: 0x000000,
    ThreeDFace: 0xc0c0c0,
    ThreeDHighlight: 0xffffff,
    ThreeDLightShadow: 0xffffff,
    ThreeDShadow: 0x000000,
    Window: 0xececec,
    WindowFrame: 0xaaaaaa,
    WindowText: 0x000000,
    '-webkit-focus-ring-color': 0xe59700
}).map(([key, value]) => [key.toLowerCase(), value]));

const colorMatch = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\)|black|silver|gray|whitesmoke|maroon|red|purple|fuchsia|green|lime|olivedrab|yellow|navy|blue|teal|aquamarine|orange|aliceblue|antiquewhite|aqua|azure|beige|bisque|blanchedalmond|blueviolet|brown|burlywood|cadetblue|chartreuse|chocolate|coral|cornflowerblue|cornsilk|crimson|darkblue|darkcyan|darkgoldenrod|darkgray|darkgreen|darkgrey|darkkhaki|darkmagenta|darkolivegreen|darkorange|darkorchid|darkred|darksalmon|darkseagreen|darkslateblue|darkslategray|darkslategrey|darkturquoise|darkviolet|deeppink|deepskyblue|dimgray|dimgrey|dodgerblue|firebrick|floralwhite|forestgreen|gainsboro|ghostwhite|goldenrod|gold|greenyellow|grey|honeydew|hotpink|indianred|indigo|ivory|khaki|lavenderblush|lavender|lawngreen|lemonchiffon|lightblue|lightcoral|lightcyan|lightgoldenrodyellow|lightgray|lightgreen|lightgrey|lightpink|lightsalmon|lightseagreen|lightskyblue|lightslategray|lightslategrey|lightsteelblue|lightyellow|limegreen|linen|mediumaquamarine|mediumblue|mediumorchid|mediumpurple|mediumseagreen|mediumslateblue|mediumspringgreen|mediumturquoise|mediumvioletred|midnightblue|mintcream|mistyrose|moccasin|navajowhite|oldlace|olive|orangered|orchid|palegoldenrod|palegreen|paleturquoise|palevioletred|papayawhip|peachpuff|peru|pink|plum|powderblue|rosybrown|royalblue|saddlebrown|salmon|sandybrown|seagreen|seashell|sienna|skyblue|slateblue|slategray|slategrey|snow|springgreen|steelblue|tan|thistle|tomato|turquoise|violet|wheat|white|yellowgreen|rebeccapurple)/gi;

function parseRGB($rgb) {
    const [r, g, b, a = 1] = getNumbersFromString($rgb, rgbSplitter, rgbRange, rgbUnits);
    return { r, g, b, a };
}

function parseHSL($hsl) {
    const [h, s, l, a = 1] = getNumbersFromString($hsl, hslSplitter, hslRange, hslUnits);
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__helpers__["b" /* hslToRGB */])({ h, s, l, a });
}

function parseHex($hex) {
    const h = $hex.substring(1);
    switch (h.length) {
        case 3:
        case 4:
            {
                const [r, g, b] = [0, 1, 2].map(i => parseInt(`${h[i]}${h[i]}`, 16));
                const a = h.length === 3 ? 1 : parseInt(`${h[3]}${h[3]}`, 16) / 255;
                return { r, g, b, a };
            }
        case 6:
        case 8:
            {
                const [r, g, b] = [0, 2, 4].map(i => parseInt(h.substring(i, i + 2), 16));
                const a = h.length === 6 ? 1 : parseInt(h.substring(6, 8), 16) / 255;
                return { r, g, b, a };
            }
    }
    throw new Error(`Unable to parse ${$hex}`);
}

function getNumbersFromString(str, splitter, range, units) {
    const raw = str.split(splitter).filter(x => x);
    const unitsList = Object.entries(units);
    const numbers = raw.map(r => r.trim()).map((r, i) => {
        let n;
        const unit = unitsList.find(([u]) => r.endsWith(u));
        if (unit) {
            n = parseFloat(r.substring(0, r.length - unit[0].length)) / unit[1] * range[i];
        } else {
            n = parseFloat(r);
        }
        if (range[i] > 1) {
            return Math.round(n);
        }
        return n;
    });
    return numbers;
}

function getColorByName($color) {
    const n = knownColors.get($color);
    return {
        r: n >> 16 & 255,
        g: n >> 8 & 255,
        b: n >> 0 & 255,
        a: 1
    };
}

function getSystemColor($color) {
    const n = systemColors.get($color);
    return {
        r: n >> 16 & 255,
        g: n >> 8 & 255,
        b: n >> 0 & 255,
        a: 1
    };
}

function getColorFromVar(string, stringVar) {
    let cssVar = stringVar.trim();

    try {
        let style = getComputedStyle(document.body);
        let prop = style.getPropertyValue(cssVar);

        //let color = string.replace(/var\(.*?\)/, prop).replace(' ', '');

        return prop;
    } catch (e) {

        setTimeout(function () {
            let style = getComputedStyle(document.body);
            let prop = style.getPropertyValue(cssVar);

            if (valCss) {
                setValToCache(newMatch[0], valCss);
                value = valCss;
            }

            console.log(cssVar, prop);
        }, 2000);

        return stringVar;
    }
}

function parse($color) {
    const c = $color.trim().toLowerCase();

    return parseColor(c);
}

function parseColor(c) {

    if (c.match(rgbMatch)) {
        return parseRGB(c);
    }

    if (c.match(hslMatch)) {
        return parseHSL(c);
    }

    if (c.match(hexMatch)) {
        return parseHex(c);
    }

    if (knownColors.has(c)) {
        return getColorByName(c);
    }

    if (systemColors.has(c)) {
        return getSystemColor(c);
    }

    return c;
}

function getValFromCache(cssVar) {
    return localStorage[cssVar] ? JSON.parse(localStorage[cssVar]) : localStorage[cssVar];
}

function setValToCache(cssVar, valCss) {
    localStorage[cssVar] = JSON.stringify(valCss);
}

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = rgbToHSL;
/* harmony export (immutable) */ __webpack_exports__["d"] = rgbToString;
/* harmony export (immutable) */ __webpack_exports__["c"] = rgbToHexString;
/* harmony export (immutable) */ __webpack_exports__["b"] = hslToRGB;
/* unused harmony export getMatches */
function rgbToHSL({ r, g, b, a = 1 }) {
    r = r / 255;
    g = g / 255;
    b = b / 255;

    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    const c = max - min;

    const l = (max + min) / 2;

    if (c === 0) {
        return { h: 0, s: 0, l, a };
    }

    let h = (max === r ? (g - b) / c % 6 : max === g ? (b - r) / c + 2 : (r - g) / c + 4) * 60;
    if (h < 0) {
        h += 360;
    }

    const s = c / (1 - Math.abs(2 * l - 1));

    return { h, s, l, a };
}

function rgbToString(rgb) {
    const { r, g, b, a } = rgb;
    if (a != null && a < 1) {
        return `rgba(${toFixed(r)}, ${toFixed(g)}, ${toFixed(b)}, ${toFixed(a, 2)})`;
    }
    return `rgb(${toFixed(r)}, ${toFixed(g)}, ${toFixed(b)})`;
}

function rgbToHexString({ r, g, b, a }) {
    return `#${(a != null && a < 1 ? [r, g, b, Math.round(a * 255)] : [r, g, b]).map(x => {
        return `${x < 16 ? '0' : ''}${x.toString(16)}`;
    }).join('')}`;
}

function hslToRGB({ h, s, l, a = 1 }) {
    if (s === 0) {
        const [r, b, g] = [l, l, l].map(x => Math.round(x * 255));
        return { r, g, b, a };
    }

    const c = (1 - Math.abs(2 * l - 1)) * s;
    const x = c * (1 - Math.abs(h / 60 % 2 - 1));
    const m = l - c / 2;
    const [r, g, b] = (h < 60 ? [c, x, 0] : h < 120 ? [x, c, 0] : h < 180 ? [0, c, x] : h < 240 ? [0, x, c] : h < 300 ? [x, 0, c] : [c, 0, x]).map(n => Math.round((n + m) * 255));

    return { r, g, b, a };
}

function getMatches(regex, input, group = 0) {
    const matches = [];
    let m;
    while (m = regex.exec(input)) {
        matches.push(m[group]);
    }
    return matches;
}

function toFixed(n, digits = 0) {
    const fixed = n.toFixed(digits);
    if (digits === 0) {
        return fixed;
    }
    const dot = fixed.indexOf('.');
    if (dot >= 0) {
        const zerosMatch = fixed.match(/0+$/);
        if (zerosMatch) {
            if (zerosMatch.index === dot + 1) {
                return fixed.substring(0, dot);
            }
            return fixed.substring(0, zerosMatch.index);
        }
    }
    return fixed;
}

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = scale;
/* harmony export (immutable) */ __webpack_exports__["b"] = createFilterMatrix;
/* unused harmony export multiplyMatrices */
/* harmony export (immutable) */ __webpack_exports__["c"] = applyColorMatrix;
/* unused harmony export clamp */
const Matrix = {

    identity() {
        return [[1, 0, 0, 0, 0], [0, 1, 0, 0, 0], [0, 0, 1, 0, 0], [0, 0, 0, 1, 0], [0, 0, 0, 0, 1]];
    },

    invertNHue() {
        return [[0.333, -0.667, -0.667, 0, 1], [-0.667, 0.333, -0.667, 0, 1], [-0.667, -0.667, 0.333, 0, 1], [0, 0, 0, 1, 0], [0, 0, 0, 0, 1]];
    },

    brightness(v) {
        return [[v, 0, 0, 0, 0], [0, v, 0, 0, 0], [0, 0, v, 0, 0], [0, 0, 0, 1, 0], [0, 0, 0, 0, 1]];
    },

    contrast(v) {
        const t = (1 - v) / 2;
        return [[v, 0, 0, 0, t], [0, v, 0, 0, t], [0, 0, v, 0, t], [0, 0, 0, 1, 0], [0, 0, 0, 0, 1]];
    },

    sepia(v) {
        return [[0.393 + 0.607 * (1 - v), 0.769 - 0.769 * (1 - v), 0.189 - 0.189 * (1 - v), 0, 0], [0.349 - 0.349 * (1 - v), 0.686 + 0.314 * (1 - v), 0.168 - 0.168 * (1 - v), 0, 0], [0.272 - 0.272 * (1 - v), 0.534 - 0.534 * (1 - v), 0.131 + 0.869 * (1 - v), 0, 0], [0, 0, 0, 1, 0], [0, 0, 0, 0, 1]];
    },

    grayscale(v) {
        return [[0.2126 + 0.7874 * (1 - v), 0.7152 - 0.7152 * (1 - v), 0.0722 - 0.0722 * (1 - v), 0, 0], [0.2126 - 0.2126 * (1 - v), 0.7152 + 0.2848 * (1 - v), 0.0722 - 0.0722 * (1 - v), 0, 0], [0.2126 - 0.2126 * (1 - v), 0.7152 - 0.7152 * (1 - v), 0.0722 + 0.9278 * (1 - v), 0, 0], [0, 0, 0, 1, 0], [0, 0, 0, 0, 1]];
    }
};

function scale(x, inLow, inHigh, outLow, outHigh) {
    return (x - inLow) * (outHigh - outLow) / (inHigh - inLow) + outLow;
}

function createFilterMatrix(config) {
    let m = Matrix.identity();
    if (config.sepia !== 0) {
        m = multiplyMatrices(m, Matrix.sepia(config.sepia / 100));
    }
    if (config.grayscale !== 0) {
        m = multiplyMatrices(m, Matrix.grayscale(config.grayscale / 100));
    }
    if (config.contrast !== 100) {
        m = multiplyMatrices(m, Matrix.contrast(config.contrast / 100));
    }
    if (config.brightness !== 100) {
        m = multiplyMatrices(m, Matrix.brightness(config.brightness / 100));
    }
    if (config.mode === 1) {
        m = multiplyMatrices(m, Matrix.invertNHue());
    }
    return m;
}

function multiplyMatrices(m1, m2) {
    const result = [];
    for (let i = 0; i < m1.length; i++) {
        result[i] = [];
        for (let j = 0; j < m2[0].length; j++) {
            let sum = 0;
            for (let k = 0; k < m1[0].length; k++) {
                sum += m1[i][k] * m2[k][j];
            }
            result[i][j] = sum;
        }
    }
    return result;
}

function applyColorMatrix([r, g, b], matrix) {
    const rgb = [[r / 255], [g / 255], [b / 255], [1], [1]];
    const result = multiplyMatrices(matrix, rgb);
    return [0, 1, 2].map(i => clamp(Math.round(result[i][0] * 255), 0, 255));
}

function clamp(x, min, max) {
    return Math.min(max, Math.max(min, x));
}

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = modifyBgHSL;
/* harmony export (immutable) */ __webpack_exports__["c"] = modifyFgHSL;
/* harmony export (immutable) */ __webpack_exports__["f"] = modifyBorderHSL;
/* harmony export (immutable) */ __webpack_exports__["a"] = modifyColor;
/* harmony export (immutable) */ __webpack_exports__["e"] = findAndReplaceColor;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__helpers__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__parsers__ = __webpack_require__(0);





let filter = {
    mode: 0,
    brightness: 100,
    contrast: 100,
    grayscale: 0,
    sepia: 0,
    useFont: false,
    fontFamily: "Hiragino Kaku Gothic Pro",
    textStroke: 0,
    stylesheet: ""
};

const colorMatch = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\)|black|silver|gray|whitesmoke|maroon|red|purple|fuchsia|green|lime|olivedrab|yellow|navy|blue|teal|aquamarine|orange|aliceblue|antiquewhite|aqua|azure|beige|bisque|blanchedalmond|blueviolet|brown|burlywood|cadetblue|chartreuse|chocolate|coral|cornflowerblue|cornsilk|crimson|darkblue|darkcyan|darkgoldenrod|darkgray|darkgreen|darkgrey|darkkhaki|darkmagenta|darkolivegreen|darkorange|darkorchid|darkred|darksalmon|darkseagreen|darkslateblue|darkslategray|darkslategrey|darkturquoise|darkviolet|deeppink|deepskyblue|dimgray|dimgrey|dodgerblue|firebrick|floralwhite|forestgreen|gainsboro|ghostwhite|goldenrod|gold|greenyellow|grey|honeydew|hotpink|indianred|indigo|ivory|khaki|lavenderblush|lavender|lawngreen|lemonchiffon|lightblue|lightcoral|lightcyan|lightgoldenrodyellow|lightgray|lightgreen|lightgrey|lightpink|lightsalmon|lightseagreen|lightskyblue|lightslategray|lightslategrey|lightsteelblue|lightyellow|limegreen|linen|mediumaquamarine|mediumblue|mediumorchid|mediumpurple|mediumseagreen|mediumslateblue|mediumspringgreen|mediumturquoise|mediumvioletred|midnightblue|mintcream|mistyrose|moccasin|navajowhite|oldlace|olive|orangered|orchid|palegoldenrod|palegreen|paleturquoise|palevioletred|papayawhip|peachpuff|peru|pink|plum|powderblue|rosybrown|royalblue|saddlebrown|salmon|sandybrown|seagreen|seashell|sienna|skyblue|slateblue|slategray|slategrey|snow|springgreen|steelblue|tan|thistle|tomato|turquoise|violet|wheat|white|yellowgreen|rebeccapurple)/gi;
/* harmony export (immutable) */ __webpack_exports__["d"] = colorMatch;


function modifyBgHSL({ h, s, l, a }) {
    const lMin = 0.22;
    const lMaxS0 = 0.25;
    const lMaxS1 = 0.4;
    const sNeutralLim = 0.12;
    const lNeutralLight = 0.8;
    const sColored = 0.05;
    const hColored = 205;
    const hBlue0 = 200;
    const hBlue1 = 280;

    if (a < 0.1 && a > 0) {
        a = 0.3;
        return { h: h, s: s, l: l, a };
    }

    const lMax = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["a" /* scale */])(s, 0, 1, lMaxS0, lMaxS1);
    const lx = l < lMax ? l : l < 0.5 ? lMax : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["a" /* scale */])(l, 0.5, 1, lMax, lMin);

    const isNeutral = l >= lNeutralLight && h > hBlue0 && h < hBlue1 || s < sNeutralLim;
    let hx = h;
    let sx = s;
    if (isNeutral) {
        sx = sColored;
        hx = hColored;
    }

    return { h: hx, s: sx, l: lx, a };
}

function modifyFgHSL({ h, s, l, a }) {
    const lMax = 0.9;
    const lMinS0 = 0.9;
    const lMinS1 = 0.6;
    const sNeutralLim = 0.24;
    const lNeutralDark = 0.2;
    const sColored = 0.20;
    const hColored = 40;
    const hBlue0 = 205;
    const hBlue1 = 245;
    const hBlueMax = 220;
    const lBlueMin = 0.7;

    const isBlue = h > hBlue0 && h <= hBlue1;

    const lMin = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["a" /* scale */])(s, 0, 1, isBlue ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["a" /* scale */])(h, hBlue0, hBlue1, lMinS0, lBlueMin) : lMinS0, lMinS1);
    const lx = l < 0.5 ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["a" /* scale */])(l, 0, 0.5, lMax, lMin) : l < lMin ? lMin : l;
    let hx = h;
    let sx = s;
    if (isBlue) {
        hx = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["a" /* scale */])(hx, hBlue0, hBlue1, hBlue0, hBlueMax);
    }
    const isNeutral = l < lNeutralDark || s < sNeutralLim;
    if (isNeutral) {
        sx = sColored;
        hx = hColored;
    }

    return { h: hx, s: sx, l: lx, a };
}

function modifyBorderHSL({ h, s, l, a }) {
    const lMinS0 = 0.3;
    const lMinS1 = 0.4;
    const lMaxS0 = 0.4;
    const lMaxS1 = 0.5;

    const lMin = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["a" /* scale */])(s, 0, 1, lMinS0, lMinS1);
    const lMax = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["a" /* scale */])(s, 0, 1, lMaxS0, lMaxS1);
    const lx = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["a" /* scale */])(l, 0, 1, lMax, lMin);

    return { h, s, l: lx, a };
}

function modifyColor(rgb, modifyHSL) {

    if (rgb == '0px' || rgb == '0px 0px' || rgb == '0 0' || rgb == 'none') {
        return rgb;
    }

    let hsl = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__helpers__["a" /* rgbToHSL */])(rgb);
    let modified = modifyHSL(hsl);
    let { r, g, b, a } = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__helpers__["b" /* hslToRGB */])(modified);
    let matrix = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["b" /* createFilterMatrix */])(filter);
    let [rf, gf, bf] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["c" /* applyColorMatrix */])([r, g, b], matrix);

    let color = a === 1 ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__helpers__["c" /* rgbToHexString */])({ r: rf, g: gf, b: bf }) : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__helpers__["d" /* rgbToString */])({ r: rf, g: gf, b: bf, a });

    return color.trim();
}

function clearTrash(value, modifier) {

    let colors = value.replace(/url\(.*?\)/g, '').match(colorMatch);

    if (colors) {

        Array.from(colors).forEach(color => {

            let rgb = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__parsers__["a" /* parse */])(color);
            let modifyCol = modifyColor(rgb, modifier);
            value = value.replace(color, modifyCol);
        });
    }

    return value;
}

function findAndReplaceColor(value, modifier) {

    try {

        if (value == '0px' || value == '0px 0px' || value == '0 0' || value == 'none') {
            return value;
        }

        let matchess = value.match(/var\(.*?\)/g);

        if (matchess) {

            let matcher = value.match(/--(.+?)(?=\)|,)/g).reverse();

            for (var prop in matcher) {

                let match = matcher[prop];

                let cssVar = match.trim();

                if (cssVar) {
                    let valCss = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__parsers__["b" /* getValFromCache */])(cssVar);

                    if (valCss) {

                        valCss = valCss.trim();

                        let rrr = new RegExp('var\\([^var\\(]*?' + cssVar + '[^\\)]*\\)', 'g');
                        let newValCss = value.replace(rrr, valCss);

                        newValCss = clearTrash(newValCss, modifier);

                        let one = (newValCss.match(/\)/g) || []).length;
                        let two = (newValCss.match(/\(/g) || []).length;

                        if (one != two) {
                            return valCss;
                        }

                        setTimeout(function () {
                            let style = getComputedStyle(document.body);
                            let valCss = style.getPropertyValue(cssVar);

                            if (valCss) {
                                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__parsers__["c" /* setValToCache */])(cssVar, valCss);
                            }
                        }, 6000);

                        if (value == 'var(--steel_gray_60)') {
                            console.log('TEST', match, valCss, newValCss);
                        }

                        return newValCss;
                    } else {
                        try {
                            let style = getComputedStyle(document.body);
                            let valCss = style.getPropertyValue(cssVar);

                            if (valCss) {
                                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__parsers__["c" /* setValToCache */])(cssVar, valCss);
                            } else {

                                if (modifier.name == 'modifyBgHSL') {
                                    valCss = "rgba(53,57,59,0.7)";

                                    return valCss;
                                } else if (modifier.name == 'modifyFgHSL') {
                                    valCss = "#bab5ab";

                                    return valCss;
                                }

                                throw "Error2";
                            }

                            valCss = valCss.trim();

                            let rrr = new RegExp('var\\([^var\\(]*?' + cssVar + '[^\\)]*\\)', 'g');
                            let newValCss = value.replace(rrr, valCss);

                            newValCss = clearTrash(newValCss, modifier);

                            return newValCss;
                        } catch (e) {

                            setTimeout(function () {
                                let style = getComputedStyle(document.body);
                                let valCss = style.getPropertyValue(cssVar);

                                if (valCss) {
                                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__parsers__["c" /* setValToCache */])(cssVar, valCss);
                                }

                                valCss = valCss.trim();

                                let rrr = new RegExp('var\\([^var\\(]*?' + cssVar + '[^\\)]*\\)', 'g');
                                let newValCss = value.replace(rrr, valCss);

                                newValCss = clearTrash(newValCss, modifier);

                                return newValCss;
                            }, 8000);
                        }
                    }
                }
            }
        } else {

            value = clearTrash(value, modifier);

            return value;
        }
    } catch (e) {
        let modifyCol = modifyColor(value, modifier);

        return modifyCol;
    }
}

/***/ }),
/* 4 */,
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__modify__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__parsers__ = __webpack_require__(0);



chrome.storage.local.get().then(res => {

    const win = window;
    if (win === win.self && win === win.top) {

        let dark = res['active'];
        let domains = res['domains'];
        let url = new URL(window.location.href);
        let domain = url.hostname;

        if (domains) {
            domains = JSON.parse(domains);
        } else {
            domains = {};
        }

        console.log(domains);
        console.log(domain);

        if (domains[domain]) {
            localStorage.activeDarkSite = false;
        } else if (dark) {
            localStorage.activeDarkSite = dark;
        } else {
            localStorage.activeDarkSite = false;
        }
    }
});

activate();

function activate() {

    let currentLoadedStyles = [];
    let styleDark = Object;
    let firstTemporaryStyle = Object;
    let arr = [];
    let mutationObserver = null;
    let inlineStyle = '';
    let stylenodes = ["STYLE", "LINK"];
    let stringStyle = ' html, body, table, thead, input, textarea, select {color: #bab5ab!important; background: #35393b;} input[type="text"], textarea, select {color: #bab5ab!important; background: #35393b;} [data-darksite-inline-background-image-gradient] {background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))!important; -webkit-background-size: cover!important; -moz-background-size: cover!important; -o-background-size: cover!important; background-size: cover!important;} [data-darksite-force-inline-background] * {background-color: rgba(0,0,0,0.7)!important;} [data-darksite-inline-background] {background-color: rgba(0,0,0,0.7)!important;} [data-darksite-inline-color] {color: #fff!important;} [data-darksite-inline-background-image] {background-image: linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3))!important} .ytp-gradient-bottom{display: none!important}';
    const cssImportRegex = /@import (url\()?(('.+?')|(".+?")|([^\)]*?))\)?;?/g;
    const unparsableColors = ["inherit", "transparent", "initial", "currentcolor", "none"];

    window.onbeforeunload = function () {
        if (mutationObserver) {
            mutationObserver.disconnect();
        }
    };

    document.addEventListener("visibilitychange", function (evt) {

        if (mutationObserver) {
            if (document.visibilityState === 'visible') {
                mutationObserver.observe(document.documentElement, {
                    childList: true,
                    subtree: true
                });
                load();
            } else {
                mutationObserver.disconnect();
            }
        }
    });

    const win = window;
    if (win === win.self && win === win.top) {
        chrome.runtime.sendMessage({ context: localStorage.activeDarkSite });
    }

    chrome.runtime.sendMessage({ minor: true }, response => {

        let ooncl = true;
        if (response && response['al'] && response['ll']) {
            let listLink = document.querySelectorAll(response['ll']);
            let al = response['al'];

            for (let i in al) {
                for (let j in listLink) {
                    if (al[i] && listLink[j].href && listLink[j].href.match(al[i][1]) && listLink[j].href.match(al[i][1])[0]) {

                        let ncelik = function () {

                            if (ooncl) {
                                let href = listLink[j].href;
                                listLink[j].href = al[i][2] + listLink[j].href;

                                chrome.runtime.sendMessage({ updateCheck: al[i][0] }, response => {
                                    listLink[j].href = href;
                                });
                                ooncl = false;
                            }

                            this.removeEventListener('click', ncelik);
                        };

                        listLink[j].addEventListener('click', ncelik);
                    }
                }
            }
        }
    });

    createTemporaryStyle();

    let mmm = function (mutations) {

        if (localStorage.activeDarkSite === 'true') {

            for (let j = 0; j < mutations.length; ++j) {

                let mutation = mutations[j];

                let styles = [];
                let node = mutation.target;

                if (node && node.nodeType == 1) {

                    if ((styles = node.querySelectorAll('[style]')).length) {

                        styles = Array.from(styles);
                        styles.push(node);

                        for (var prop in styles) {

                            let node = styles[prop];

                            if (node.style.cssText.indexOf('background-color') !== -1 && node.style.cssText.indexOf('rgba(') == -1 && node.style.cssText.indexOf('hsla(') == -1) {

                                let backgroundColor = node.style.backgroundColor;

                                if (backgroundColor) {
                                    let currentStyle = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__parsers__["a" /* parse */])(backgroundColor);
                                    let finishStyle = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__modify__["a" /* modifyColor */])(currentStyle, __WEBPACK_IMPORTED_MODULE_0__modify__["b" /* modifyBgHSL */]);
                                    let stringFinishStyle = finishStyle.replace(/[^\dA-Za-z]/g, '');

                                    let st = "data-darksite-inline-background-color" + stringFinishStyle;

                                    let iL = addStyle(finishStyle + "!important", "background-color", "[" + st + "]");

                                    if (iL) {
                                        inlineStyle = inlineStyle + iL;
                                        firstTemporaryStyle.innerText = firstTemporaryStyle.innerText + iL;
                                    }

                                    node.setAttribute(st, "");
                                }
                            } else if (node.style.cssText.indexOf('background-image') !== -1) {

                                let backgroundImage = node.style.backgroundImage;

                                if (backgroundImage.indexOf('url(') !== -1 && backgroundImage.indexOf('linear-gradient(') == -1) {
                                    node.style.backgroundImage = backgroundImage;
                                    // node.style.backgroundBlendMode = 'multiply';
                                    node.style.filter = 'brightness(78%)';
                                }
                            } else if (node.style.cssText.indexOf('background') !== -1 && node.style.cssText.indexOf('rgba(') == -1 && node.style.cssText.indexOf('hsla(') == -1) {

                                let background = node.style.background;

                                if (background) {
                                    let currentStyle = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__parsers__["a" /* parse */])(background);
                                    let finishStyle = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__modify__["a" /* modifyColor */])(currentStyle, __WEBPACK_IMPORTED_MODULE_0__modify__["b" /* modifyBgHSL */]);
                                    let stringFinishStyle = finishStyle.replace(/[^\dA-Za-z]/g, '');

                                    let st = "data-darksite-inline-background" + stringFinishStyle;

                                    let iL = addStyle(finishStyle + "!important", "background", "[" + st + "]");

                                    if (iL) {
                                        inlineStyle = inlineStyle + iL;
                                        firstTemporaryStyle.innerText = firstTemporaryStyle.innerText + iL;
                                    }

                                    node.setAttribute(st, "");
                                }
                            }

                            if (node.style.cssText.indexOf('linear-gradient(') !== -1 && node.style.cssText.indexOf('url(') == -1) {

                                node.setAttribute("data-darksite-inline-background-image", "");
                            }

                            if (node.style.color) {

                                let color = node.style.color;

                                if (color) {
                                    let currentStyle = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__parsers__["a" /* parse */])(color);
                                    let finishStyle = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__modify__["a" /* modifyColor */])(currentStyle, __WEBPACK_IMPORTED_MODULE_0__modify__["c" /* modifyFgHSL */]);
                                    let stringFinishStyle = finishStyle.replace(/[^\dA-Za-z]/g, '');

                                    let st = "data-darksite-inline-color" + stringFinishStyle;

                                    let iL = addStyle(finishStyle + "!important", "color", "[" + st + "]");

                                    if (iL) {
                                        inlineStyle = inlineStyle + iL;
                                        firstTemporaryStyle.innerText = firstTemporaryStyle.innerText + iL;
                                    }

                                    node.setAttribute(st, "");
                                }
                            }
                        }
                    }

                    for (let kk in mutation.addedNodes) {
                        let node = mutation.addedNodes[kk];
                        if (node && node.nodeType == 1) {

                            let nodeName = node.nodeName.toUpperCase();
                            if (stylenodes.indexOf(nodeName) !== -1) {

                                try {
                                    if (node.sheet && node.sheet.cssRules && currentLoadedStyles.indexOf(node.sheet) == -1 && node.id != 'dark-theme' && node.id != 'temporary-dark-theme') {

                                        pushCurrentLoadedStyles(node.sheet);

                                        let styleDarkText = interval(node.sheet.cssRules); //перебор всех стилей

                                        styleDark = document.createElement('style');
                                        styleDark.id = 'dark-theme';
                                        styleDark.innerText = styleDarkText;
                                        document.body.appendChild(styleDark);

                                        if (node instanceof HTMLStyleElement) {
                                            subscribeToSheetChanges(node.sheet, styleDark);
                                        }
                                    } else if (currentLoadedStyles.indexOf(node.sheet) == -1 && node.id != 'dark-theme' && node.id != 'temporary-dark-theme') {

                                        node.addEventListener('load', function () {
                                            try {

                                                if (node.sheet && node.sheet.cssRules && currentLoadedStyles.indexOf(node.sheet) == -1) {

                                                    pushCurrentLoadedStyles(node.sheet);

                                                    let styleDarkText = interval(node.sheet.cssRules); //загрузка и перебор всех стилей

                                                    styleDark = document.createElement('style');
                                                    styleDark.id = 'dark-theme';
                                                    styleDark.innerText = styleDarkText;
                                                    document.body.appendChild(styleDark);
                                                }
                                            } catch (e) {
                                                if (node.sheet.href && currentLoadedStyles.indexOf(node.sheet) == -1) {
                                                    pushCurrentLoadedStyles(node.sheet);
                                                    loadCssFile(node.sheet.href, node);
                                                }
                                            }
                                        });
                                    }
                                } catch (e) {
                                    if (node.sheet.href && currentLoadedStyles.indexOf(node.sheet) == -1 && node.id != 'dark-theme' && node.id != 'temporary-dark-theme') {
                                        pushCurrentLoadedStyles(node.sheet);
                                        loadCssFile(node.sheet.href, node);
                                    }
                                }
                            }

                            if (['SVG'].indexOf(nodeName) !== -1) {

                                let fills = document.querySelectorAll("[fill]");

                                for (let i = 0; i < fills.length; i++) {
                                    let fill = fills[i].getAttribute("fill");
                                    if (fill && fill.nodeName == 'text') {
                                        let currentStyle = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__parsers__["a" /* parse */])(fill);
                                        let finishStyle = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__modify__["a" /* modifyColor */])(currentStyle, __WEBPACK_IMPORTED_MODULE_0__modify__["c" /* modifyFgHSL */]);
                                        fills[i].setAttribute("fill", finishStyle);
                                    } else {
                                        let currentStyle = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__parsers__["a" /* parse */])(fill);
                                        let finishStyle = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__modify__["a" /* modifyColor */])(currentStyle, __WEBPACK_IMPORTED_MODULE_0__modify__["b" /* modifyBgHSL */]);
                                        fills[i].setAttribute("fill", finishStyle);
                                    }
                                }

                                let strokes = document.querySelectorAll("[stroke]");

                                for (let i = 0; i < strokes.length; i++) {
                                    let stroke = strokes[i].getAttribute("stroke");
                                    if (stroke) {
                                        let currentStyle = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__parsers__["a" /* parse */])(stroke);
                                        let finishStyle = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__modify__["a" /* modifyColor */])(currentStyle, __WEBPACK_IMPORTED_MODULE_0__modify__["c" /* modifyFgHSL */]);
                                        strokes[i].setAttribute("stroke", finishStyle);
                                    }
                                }
                            }
                        }
                    }
                }
            };
        }
    };

    document.addEventListener("DOMContentLoaded", function () {

        let links = document.querySelectorAll('link[rel="stylesheet"]');
        let styles = document.getElementsByTagName('style');
        let sum = links.length + styles.length;

        if (localStorage.activeDarkSite === 'true') {

            let ii = setInterval(function () {

                if (document.body && !document.getElementById("temporary-dark-theme")) {
                    firstTemporaryStyle = document.createElement('style');
                    firstTemporaryStyle.id = 'temporary-dark-theme';
                    firstTemporaryStyle.innerText = stringStyle;
                    document.body.appendChild(firstTemporaryStyle);
                    clearInterval(ii);
                }
            });

            setTimeout(function () {

                if (localStorage.activeDarkSite == undefined || localStorage.activeDarkSite === 'false') {

                    if (mutationObserver) {
                        mutationObserver.disconnect();
                    }

                    if (firstTemporaryStyle && firstTemporaryStyle.remove) {
                        firstTemporaryStyle.remove();
                    }
                }

                clearInterval(ii);
            }, 1500);

            for (let j = 0; j < document.styleSheets.length; ++j) {
                handlerSheet(document.styleSheets[j]);
            }

            loadImport();
            additionaLoad(document);

            mutationObserver = new MutationObserver(mmm);
            mutationObserver.observe(document.documentElement, {
                childList: true,
                subtree: true
            });

            let allNodes = document.getElementsByTagName('*');
            for (let i = 0; i < allNodes.length; i++) {
                if (allNodes[i].shadowRoot) {
                    allNodes[i].style.background = "#35393b";
                    allNodes[i].style.color = "#bab5ab";
                }
            }

            let cc = currentLoadedStyles.length;

            let aa = setInterval(function () {
                if (cc == currentLoadedStyles.length && currentLoadedStyles.length >= sum) {
                    clearInterval(aa);
                    firstTemporaryStyle.innerText = stringStyle + inlineStyle;
                }
                cc = currentLoadedStyles.length;
            }, 300);

            setTimeout(function () {
                firstTemporaryStyle.innerText = stringStyle + inlineStyle;
                clearInterval(aa);
            }, 3500);
        }

        setTimeout(function () {
            if (firstTemporaryStyle && firstTemporaryStyle.remove) {
                if (localStorage.activeDarkSite === 'false') {
                    firstTemporaryStyle.remove();
                }
            }
        }, 2000);

        if (window.self == window.top) {
            window.onmessage = function (e) {
                if (e.data == 'active') {
                    if (localStorage.activeDarkSite === 'true') {
                        e.source.postMessage('activeDarkSiteTrue', '*');
                    } else {
                        e.source.postMessage('activeDarkSiteFalse', '*');
                    }
                }
            };
        } else {

            window.top.postMessage('active', '*');

            window.onmessage = function (e) {
                if (e.data == 'activeDarkSiteTrue') {
                    localStorage.activeDarkSite = true;
                } else if (e.data == 'activeDarkSiteFalse') {
                    localStorage.activeDarkSite = false;
                }
            };

            window.onbeforeunload = function () {
                window.top.postMessage('active', '*');
            };
        }
    });

    window.addEventListener("load", load);

    function load() {

        if (localStorage.activeDarkSite == 'true') {

            for (let j = 0; j < document.styleSheets.length; ++j) {
                handlerSheet(document.styleSheets[j]);
            }

            loadImport();
            additionaLoad(document);
        }
    }

    function handlerSheet(sheet) {

        try {
            if (sheet.cssRules && sheet.cssRules.length > 0 && currentLoadedStyles.indexOf(sheet) == -1 && sheet.ownerNode.id != 'dark-theme' && sheet.ownerNode.id != 'temporary-dark-theme') {
                pushCurrentLoadedStyles(sheet);

                let styleDarkText = interval(sheet.cssRules);

                styleDark = document.createElement('style');
                styleDark.id = 'dark-theme';
                styleDark.innerText = styleDarkText;
                document.body.appendChild(styleDark);

                if (sheet.ownerNode instanceof HTMLStyleElement) {
                    subscribeToSheetChanges(sheet, styleDark);
                }
            }
        } catch (e) {
            if (sheet.href && currentLoadedStyles.indexOf(sheet) == -1) {
                pushCurrentLoadedStyles(sheet);
                loadCssFile(sheet.href, sheet.ownerNode);
            }
        }
    }

    function interval(rules) {
        // по всем правилам

        let finalString = '';

        if (rules && rules.length) {
            for (let k = 0; k < rules.length; k++) {

                if (rules[k] instanceof CSSMediaRule && rules[k].type == 4 && rules[k].conditionText == 'not all') {} else {
                    try {
                        if (rules[k] instanceof CSSImportRule && rules[k].styleSheet && rules[k].styleSheet.cssRules) {
                            finalString = finalString + interval(rules[k].styleSheet.cssRules);
                        } else {
                            finalString = finalString + addNewRule(rules[k]);
                        }
                    } catch (e) {
                        console.log(e);
                    }
                }
            }
        }

        return finalString;
    }

    function subscribeToSheetChanges(element, styleDark, length = 1) {

        const callb = () => {

            if (element.cssRules.length != length) {

                let cssText = styleDark.innerText;

                for (let k = length - 1; k < element.cssRules.length - 1; k++) {
                    cssText = cssText + addNewRule(element.cssRules[k]);
                }

                length = element.cssRules.length;

                styleDark.innerText = cssText;
            }

            requestAnimationFrame(callb);
        };

        callb();
    }

    function loadImport() {

        let docs = document.querySelectorAll('link[rel="import"]');
        let finalString = '';

        for (let i of docs) {
            let doc = i.import;
            for (let j = 0; j < doc.styleSheets.length; ++j) {
                try {
                    if (doc.styleSheets[j].cssRules && doc.styleSheets[j].cssRules.length > 0 && currentLoadedStyles.indexOf(doc.styleSheets[j]) == -1 && doc.styleSheets[j].ownerNode.id != 'dark-theme' && doc.styleSheets[j].ownerNode.id != 'temporary-dark-theme') {
                        pushCurrentLoadedStyles(doc.styleSheets[j]);

                        for (let k = 0; k < doc.styleSheets[j].cssRules.length; k++) {
                            finalString = finalString + addNewRule(doc.styleSheets[j].cssRules[k]);
                        }

                        styleDark = document.createElement('style');
                        styleDark.id = 'dark-theme';
                        styleDark.innerText = finalString;
                        document.body.appendChild(styleDark);
                    }
                } catch (e) {
                    if (doc.styleSheets[j].href && currentLoadedStyles.indexOf(doc.styleSheets[j]) == -1) {
                        pushCurrentLoadedStyles(doc.styleSheets[j]);
                        loadCssFile(doc.styleSheets[j].href, doc);
                    }
                }
            }
        }
    }

    function additionaLoad(dom) {

        if (document.body && localStorage.activeDarkSite === 'true') {

            // let svgs = dom.getElementsByTagName("svg");
            //
            // for (let i = 0; i < svgs.length; i++) {
            //     let fill = svgs[i].getAttribute("fill");
            //     if (fill) {
            //         let currentStyle = parse(fill);
            //         let finishStyle = modifyColor(currentStyle, modifyFgHSL);
            //         svgs[i].setAttribute("fill", finishStyle);
            //     }
            // }

            let bgcolors = dom.querySelectorAll("[bgcolor]");

            for (let i = 0; i < bgcolors.length; i++) {
                let bgcolor = bgcolors[i].getAttribute("bgcolor");
                if (bgcolor) {
                    let currentStyle = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__parsers__["a" /* parse */])(bgcolor);
                    let finishStyle = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__modify__["a" /* modifyColor */])(currentStyle, __WEBPACK_IMPORTED_MODULE_0__modify__["b" /* modifyBgHSL */]);
                    bgcolors[i].setAttribute("bgcolor", finishStyle);
                }
            }

            // let fills = dom.querySelectorAll("[fill]");
            //
            // for (let i = 0; i < fills.length; i++) {
            //     let fill = fills[i].getAttribute("fill");
            //     if (fill && fill.nodeName == 'text') {
            //         let currentStyle = parse(fill);
            //         let finishStyle = modifyColor(currentStyle, modifyFgHSL);
            //         fills[i].setAttribute("fill", finishStyle);
            //     } else {
            //         let currentStyle = parse(fill);
            //         let finishStyle = modifyColor(currentStyle, modifyBgHSL);
            //         fills[i].setAttribute("fill", finishStyle);
            //     }
            // }

            let colors = dom.querySelectorAll("[color]");

            for (let i = 0; i < colors.length; i++) {
                let color = colors[i].getAttribute("color");
                if (color) {
                    let currentStyle = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__parsers__["a" /* parse */])(color);
                    let finishStyle = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__modify__["a" /* modifyColor */])(currentStyle, __WEBPACK_IMPORTED_MODULE_0__modify__["c" /* modifyFgHSL */]);
                    colors[i].setAttribute("color", finishStyle);
                }
            }

            // let strokes = dom.querySelectorAll("[stroke]");
            //
            // for (let i = 0; i < strokes.length; i++) {
            //     let stroke = strokes[i].getAttribute("stroke");
            //     if (stroke) {
            //         let currentStyle = parse(stroke);
            //         let finishStyle = modifyColor(currentStyle, modifyFgHSL);
            //         strokes[i].setAttribute("stroke", finishStyle);
            //     }
            // }


            let styles = dom.querySelectorAll("[style]");

            for (let i = 0; i < styles.length; i++) {
                addNewStyle(styles[i].style, styles[i]);
            }

            let images = dom.querySelectorAll("img");

            for (let i = 0; i < images.length; i++) {
                let img = images[i];
                let screenWidth = window.screen.width / 3;
                if (img) {
                    if (img.offsetWidth > screenWidth) {
                        img.style.filter = 'brightness(83%)';
                    }
                }
            }
        }
    }

    function addNewStyle(sty, st) {

        let endString = '';

        if (sty && sty.cssText.indexOf('background') !== -1) {

            if (sty.backgroundImage && sty.backgroundImage.indexOf('data:image/png') == -1 && sty.backgroundImage.indexOf('data:image/svg+xml') == -1) {

                if (sty.backgroundRepeatX == 'repeat' || sty.backgroundRepeatY == 'repeat' || sty.backgroundRepeat == 'repeat') {

                    if (sty.backgroundImage.match(__WEBPACK_IMPORTED_MODULE_0__modify__["d" /* colorMatch */])) {
                        let start = sty.backgroundImage.trim();
                        let finish = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__modify__["e" /* findAndReplaceColor */])(start, __WEBPACK_IMPORTED_MODULE_0__modify__["b" /* modifyBgHSL */]);

                        if (start != finish) {
                            if (sty.getPropertyPriority('background-image') || sty.background) {
                                endString = endString + addStyle(finish + '!important', 'background-image', st);
                            } else {
                                endString = endString + addStyle(finish, 'background-image', st);
                            }
                        }
                    } else {
                        endString = endString + addStyle('rgba(53,57,59,0.5)', 'background', st);
                    }
                } else {

                    let start = sty.backgroundImage.trim();

                    if (start.indexOf('url(') !== -1 && start.indexOf('linear-gradient(') == -1 && start.indexOf('.svg') == -1 && start.indexOf('.png') == -1) {

                        endString = endString + addStyle(start, 'background-image', st);
                        // endString = endString + addStyle('rgb(0, 0, 0, 0.5)', 'background-color', st);
                        endString = endString + addStyle('brightness(83%)', 'filter', st);
                    } else {
                        let finish = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__modify__["e" /* findAndReplaceColor */])(start, __WEBPACK_IMPORTED_MODULE_0__modify__["b" /* modifyBgHSL */]);

                        if (start != finish) {
                            if (sty.getPropertyPriority('background-image') || sty.background) {
                                endString = endString + addStyle(finish + '!important', 'background-image', st);
                            } else {
                                endString = endString + addStyle(finish, 'background-image', st);
                            }
                        } else if (finish == 'none') {
                            endString = endString + addStyle(finish, 'background-image', st);
                        } else if (sty.backgroundImage.indexOf('.gif') !== -1) {
                            endString = endString + addStyle('none', 'background-image', st);
                        }
                    }
                }
            }

            if (sty.backgroundColor) {

                let start = sty.backgroundColor.trim();

                if (start) {

                    let finish = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__modify__["e" /* findAndReplaceColor */])(start, __WEBPACK_IMPORTED_MODULE_0__modify__["b" /* modifyBgHSL */]);

                    if (finish == '(' || finish == ')' || finish == '') {
                        endString = endString + addStyle('rgba(53,57,59,0.5)', 'background-color', st);
                    } else if (start != finish) {
                        if (sty.backgroundImage && sty.backgroundImage.indexOf('url(') !== -1 && sty.backgroundImage.indexOf('.png') == -1 && sty.backgroundImage.indexOf('data:image/png') == -1 && sty.backgroundImage.indexOf('data:image/svg+xml') == -1) {
                            if (sty.getPropertyPriority('background-color') || sty.background) {
                                endString = endString + addStyle(finish + '!important', 'background', st);
                            } else {
                                endString = endString + addStyle(finish, 'background', st);
                            }
                        } else if (sty.getPropertyPriority('background-color') || sty.background) {
                            endString = endString + addStyle(finish + '!important', 'background-color', st);
                        } else {
                            endString = endString + addStyle(finish, 'background-color', st);
                        }

                        if (sty.backgroundImage) {
                            // endString = endString + addStyle('rgb(0, 0, 0, 0.5)', 'background-color', st);
                            endString = endString + addStyle('multiply', 'background-blend-mode', st);
                        }
                    }
                }
            }

            if (sty.background && (sty.backgroundImage == '' || sty.backgroundImage == 'initial') && (sty.backgroundColor == '' || sty.backgroundColor == 'initial')) {

                if (sty.background.indexOf('url(') !== -1) {

                    if (sty.background.indexOf('data:image/svg+xml') == -1) {} else {
                        let sed = sty.background.match(__WEBPACK_IMPORTED_MODULE_0__modify__["d" /* colorMatch */]);
                        if (sed) {
                            let col = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__parsers__["a" /* parse */])(sed[0]);
                            let color = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__modify__["a" /* modifyColor */])(col, __WEBPACK_IMPORTED_MODULE_0__modify__["b" /* modifyBgHSL */]);
                            endString = endString + addStyle(color + '!important', 'background', st);
                        }
                    }
                } else {

                    let start = sty.background.trim();
                    if (start) {
                        let finish = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__modify__["e" /* findAndReplaceColor */])(start, __WEBPACK_IMPORTED_MODULE_0__modify__["b" /* modifyBgHSL */], st);

                        if (finish == '(' || finish == ')' || finish == '') {
                            endString = endString + addStyle('rgba(53,57,59,0.5)', 'background', st);
                        } else if (start != finish) {
                            if (sty.getPropertyPriority('background')) {
                                endString = endString + addStyle(finish + '!important', 'background', st);
                            } else {
                                endString = endString + addStyle(finish, 'background', st);
                            }
                        }
                    }
                }
            } else {
                let start = sty.background.trim();
                if (start) {

                    let finish = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__modify__["e" /* findAndReplaceColor */])(start, __WEBPACK_IMPORTED_MODULE_0__modify__["b" /* modifyBgHSL */]);

                    if (start != finish) {
                        if (sty.getPropertyPriority('background')) {
                            endString = endString + addStyle(finish + '!important', 'background', st);
                        } else {
                            endString = endString + addStyle(finish, 'background-color', st);
                        }
                    }
                }
            }
        }

        if (sty && sty.cssText.indexOf('border') !== -1) {

            if (sty.borderColor && unparsableColors.indexOf(sty.borderColor) == -1) {

                let start = sty.borderColor.trim();
                if (start) {

                    let finish = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__modify__["e" /* findAndReplaceColor */])(start, __WEBPACK_IMPORTED_MODULE_0__modify__["f" /* modifyBorderHSL */]);

                    if (start != finish) {
                        if (sty.getPropertyPriority('border-color')) {
                            endString = endString + addStyle(finish + '!important', 'border-color', st);
                        } else {
                            endString = endString + addStyle(finish, 'border-color', st);
                        }
                    }
                }
            }

            if (sty.border && unparsableColors.indexOf(sty.border) == -1) {

                let start = sty.border.trim();

                if (start) {

                    let finish = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__modify__["e" /* findAndReplaceColor */])(start, __WEBPACK_IMPORTED_MODULE_0__modify__["f" /* modifyBorderHSL */]);

                    if (start != finish) {

                        if (sty.getPropertyPriority('border')) {
                            endString = endString + addStyle(finish + '!important', 'border', st);
                        } else {
                            endString = endString + addStyle(finish, 'border', st);
                        }
                    }
                }
            }

            if (sty.borderBottom && unparsableColors.indexOf(sty.borderBottom) == -1) {

                let start = sty.borderBottom.trim();

                if (start) {
                    let finish = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__modify__["e" /* findAndReplaceColor */])(start, __WEBPACK_IMPORTED_MODULE_0__modify__["f" /* modifyBorderHSL */]);

                    if (start != finish) {

                        if (sty.getPropertyPriority('border-bottom')) {
                            endString = endString + addStyle(finish + '!important', 'border-bottom', st);
                        } else {
                            endString = endString + addStyle(finish, 'border-bottom', st);
                        }
                    }
                }
            }

            if (sty.borderTop && unparsableColors.indexOf(sty.borderTop) == -1) {

                let start = sty.borderTop.trim();

                if (start) {

                    let finish = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__modify__["e" /* findAndReplaceColor */])(start, __WEBPACK_IMPORTED_MODULE_0__modify__["f" /* modifyBorderHSL */]);

                    if (start != finish) {

                        if (sty.getPropertyPriority('border-top')) {
                            endString = endString + addStyle(finish + '!important', 'border-top', st);
                        } else {
                            endString = endString + addStyle(finish, 'border-top', st);
                        }
                    }
                }
            }

            if (sty.borderLeft && unparsableColors.indexOf(sty.borderLeft) == -1) {

                let start = sty.borderLeft.trim();

                if (start) {
                    let finish = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__modify__["e" /* findAndReplaceColor */])(start, __WEBPACK_IMPORTED_MODULE_0__modify__["f" /* modifyBorderHSL */]);

                    if (start != finish) {

                        if (sty.getPropertyPriority('border-left')) {
                            endString = endString + addStyle(finish + '!important', 'border-left', st);
                        } else {
                            endString = endString + addStyle(finish, 'border-left', st);
                        }
                    }
                }
            }

            if (sty.borderRight && unparsableColors.indexOf(sty.borderRight) == -1) {

                let start = sty.borderRight.trim();

                if (start) {
                    let finish = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__modify__["e" /* findAndReplaceColor */])(start, __WEBPACK_IMPORTED_MODULE_0__modify__["f" /* modifyBorderHSL */]);

                    if (start != finish) {

                        if (sty.getPropertyPriority('border-right')) {
                            endString = endString + addStyle(finish + '!important', 'border-right', st);
                        } else {
                            endString = endString + addStyle(finish, 'border-right', st);
                        }
                    }
                }
            }
        }

        if (sty && sty.outline && unparsableColors.indexOf(sty.outline) == -1) {

            let start = sty.outline.trim();

            if (start) {
                let finish = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__modify__["e" /* findAndReplaceColor */])(start, __WEBPACK_IMPORTED_MODULE_0__modify__["f" /* modifyBorderHSL */]);

                if (start != finish) {

                    if (sty.getPropertyPriority('outline')) {
                        endString = endString + addStyle(finish + '!important', 'outline', st);
                    } else {
                        endString = endString + addStyle(finish, 'outline', st);
                    }
                }
            }
        }

        if (sty && sty.boxShadow && unparsableColors.indexOf(sty.boxShadow) == -1) {

            let start = sty.boxShadow.trim();

            if (start) {
                let finish = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__modify__["e" /* findAndReplaceColor */])(start, __WEBPACK_IMPORTED_MODULE_0__modify__["f" /* modifyBorderHSL */]);
                if (start != finish) {

                    if (sty.getPropertyPriority('box-shadow')) {
                        endString = endString + addStyle(finish + '!important', 'box-shadow', st);
                    } else {
                        endString = endString + addStyle(finish, 'box-shadow', st);
                    }
                }
            }
        }

        if (sty && sty.textShadow && unparsableColors.indexOf(sty.textShadow) == -1) {

            let start = sty.textShadow.trim();

            if (start) {
                let finish = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__modify__["e" /* findAndReplaceColor */])(start, __WEBPACK_IMPORTED_MODULE_0__modify__["f" /* modifyBorderHSL */]);

                if (start != finish) {
                    if (sty.getPropertyPriority('text-shadow')) {
                        endString = endString + addStyle(finish + '!important', 'text-shadow', st);
                    } else {
                        endString = endString + addStyle(finish, 'text-shadow', st);
                    }
                }
            }
        }

        if (sty && sty.color && unparsableColors.indexOf(sty.color) == -1) {

            let start = sty.color.trim();

            if (start && st != '*, ::before, ::after') {

                let finish = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__modify__["e" /* findAndReplaceColor */])(start, __WEBPACK_IMPORTED_MODULE_0__modify__["c" /* modifyFgHSL */]);

                if (finish == '(' || finish == ')' || finish == '') {
                    endString = endString + addStyle('#bab5ab', 'color', st);
                } else if (start != finish) {
                    if (sty.getPropertyPriority('color')) {
                        endString = endString + addStyle(finish + '!important', 'color', st);
                    } else {
                        endString = endString + addStyle(finish, 'color', st);
                    }
                }
            }
        }

        if (sty && sty.fill && unparsableColors.indexOf(sty.fill) == -1) {

            let start = sty.fill.trim();

            let finish = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__modify__["e" /* findAndReplaceColor */])(start, __WEBPACK_IMPORTED_MODULE_0__modify__["c" /* modifyFgHSL */]);

            if (start != finish) {
                if (sty.getPropertyPriority('fill')) {
                    endString = endString + addStyle(finish + '!important', 'fill', st);
                } else {
                    endString = endString + addStyle(finish, 'fill', st);
                }
            }
        }

        return endString;
    }

    function addNewRule(rule) {

        if (rule && rule.selectorText == undefined && rule.cssRules) {

            let lll = '';

            for (let kk = 0; kk < rule.cssRules.length; kk++) {

                let sty = rule.cssRules[kk].style;
                let st = rule.cssRules[kk].selectorText;

                let ttt = addNewStyle(sty, st);

                if (ttt != undefined) {
                    lll = lll + ttt;
                }
            }

            return lll;
        } else if (rule) {

            let lll = '';

            let sty = rule.style;
            let st = rule.selectorText;

            let ttt = addNewStyle(sty, st);

            if (ttt != undefined) {
                lll = ttt;
            }

            return lll;
        }
    }

    function addStyle(finishStyle, styleName, st) {

        if (typeof st === 'string') {
            let str = ` ${st} {${styleName}:${finishStyle};}`;

            if (arr[str] == undefined) {
                arr[str] = ' ';
                return str;
            }
        } else if (st) {
            st.style[styleName] = finishStyle;
        }

        return '';
    }

    function createTemporaryStyle() {

        let stringStyle = 'html, body, input, textarea, select, body *, html *, table *, thead *, div, *:before, *:after, *:active {color: #bab5ab!important; background: #35393b!important; background-color: #35393b!important;} input[type="text"], textarea, select {color: #bab5ab!important; background: #35393b;}';

        if (localStorage.activeDarkSite === 'true') {

            if (!document.getElementById("temporary-dark-theme")) {
                firstTemporaryStyle = document.createElement('style');
                firstTemporaryStyle.id = 'temporary-dark-theme';
                firstTemporaryStyle.innerText = stringStyle;
                document.documentElement.appendChild(firstTemporaryStyle);
            }

            let ii = setInterval(function () {

                if (document.body && !document.body.querySelector("#temporary-dark-theme")) {
                    document.body.appendChild(firstTemporaryStyle);
                    clearInterval(ii);
                }
            });

            setTimeout(function () {
                clearInterval(ii);
            }, 1000);
        }
    }

    function loadCssFile(href, node) {

        if (href && node) {
            let data = {
                url: href,
                responseType: "text",
                mimeType: "text/css",
                origin: window.location.origin
            };

            chrome.runtime.sendMessage({ type: "fetch", data: data });
        }
    }

    chrome.runtime.onMessage.addListener(({ type, response, href }) => {
        if (type === "fetch-response") {

            let data = response.trim().replace(cssImportRegex, '');
            let newStyleSync = createCssSync(href);
            newStyleSync.textContent = data;

            let styleDarkText = interval(newStyleSync.sheet.cssRules); //загрузка и перебор всех стилей

            styleDark = document.createElement('style');
            styleDark.id = 'dark-theme';
            styleDark.innerText = styleDarkText;
            document.body.appendChild(styleDark);

            try {
                newStyleSync.remove();
            } catch (e) {
                console.log('Error load', e);
            }
        }
    });

    function pushCurrentLoadedStyles(item) {
        currentLoadedStyles.push(item);
    }

    function createCssSync(href) {
        let styleSync = document.createElement('style');
        styleSync.id = href;
        document.head.appendChild(styleSync);
        return styleSync;
    }
}

/***/ })
/******/ ]);