function k() {
  if (typeof window < "u") {
    const r = window.location.search, e = new URLSearchParams(r);
    return {
      utm_source: e.get("utm_source") || "",
      utm_medium: e.get("utm_medium") || "",
      utm_campaign: e.get("utm_campaign") || "",
      utm_term: e.get("utm_term") || "",
      utm_content: e.get("utm_content") || ""
    };
  }
  return {};
}
function O() {
  const r = {};
  return typeof document < "u" && document.cookie.split(";").map((i) => i.trim()).forEach((i) => {
    const [n, c] = i.split("=");
    r[n.trim()] = c;
  }), r;
}
function P() {
  const r = {};
  if (typeof localStorage < "u")
    for (let e = 0; e < localStorage.length; e++) {
      const t = localStorage.key(e);
      if (t) {
        const i = localStorage.getItem(t);
        i !== null && (r[t] = i);
      }
    }
  return r;
}
const _ = {
  "Amazon Silk": "amazon_silk",
  "Android Browser": "android",
  Bada: "bada",
  BlackBerry: "blackberry",
  Chrome: "chrome",
  Chromium: "chromium",
  Electron: "electron",
  Epiphany: "epiphany",
  Firefox: "firefox",
  Focus: "focus",
  Generic: "generic",
  "Google Search": "google_search",
  Googlebot: "googlebot",
  "Internet Explorer": "ie",
  "K-Meleon": "k_meleon",
  Maxthon: "maxthon",
  "Microsoft Edge": "edge",
  "MZ Browser": "mz",
  "NAVER Whale Browser": "naver",
  Opera: "opera",
  "Opera Coast": "opera_coast",
  PhantomJS: "phantomjs",
  Puffin: "puffin",
  QupZilla: "qupzilla",
  QQ: "qq",
  QQLite: "qqlite",
  Safari: "safari",
  Sailfish: "sailfish",
  "Samsung Internet for Android": "samsung_internet",
  SeaMonkey: "seamonkey",
  Sleipnir: "sleipnir",
  Swing: "swing",
  Tizen: "tizen",
  "UC Browser": "uc",
  Vivaldi: "vivaldi",
  "WebOS Browser": "webos",
  WeChat: "wechat",
  "Yandex Browser": "yandex",
  Roku: "roku"
}, M = {
  amazon_silk: "Amazon Silk",
  android: "Android Browser",
  bada: "Bada",
  blackberry: "BlackBerry",
  chrome: "Chrome",
  chromium: "Chromium",
  electron: "Electron",
  epiphany: "Epiphany",
  firefox: "Firefox",
  focus: "Focus",
  generic: "Generic",
  googlebot: "Googlebot",
  google_search: "Google Search",
  ie: "Internet Explorer",
  k_meleon: "K-Meleon",
  maxthon: "Maxthon",
  edge: "Microsoft Edge",
  mz: "MZ Browser",
  naver: "NAVER Whale Browser",
  opera: "Opera",
  opera_coast: "Opera Coast",
  phantomjs: "PhantomJS",
  puffin: "Puffin",
  qupzilla: "QupZilla",
  qq: "QQ Browser",
  qqlite: "QQ Browser Lite",
  safari: "Safari",
  sailfish: "Sailfish",
  samsung_internet: "Samsung Internet for Android",
  seamonkey: "SeaMonkey",
  sleipnir: "Sleipnir",
  swing: "Swing",
  tizen: "Tizen",
  uc: "UC Browser",
  vivaldi: "Vivaldi",
  webos: "WebOS Browser",
  wechat: "WeChat",
  yandex: "Yandex Browser"
}, d = {
  tablet: "tablet",
  mobile: "mobile",
  desktop: "desktop",
  tv: "tv"
}, m = {
  WindowsPhone: "Windows Phone",
  Windows: "Windows",
  MacOS: "macOS",
  iOS: "iOS",
  Android: "Android",
  WebOS: "WebOS",
  BlackBerry: "BlackBerry",
  Bada: "Bada",
  Tizen: "Tizen",
  Linux: "Linux",
  ChromeOS: "Chrome OS",
  PlayStation4: "PlayStation 4",
  Roku: "Roku"
}, h = {
  EdgeHTML: "EdgeHTML",
  Blink: "Blink",
  Trident: "Trident",
  Presto: "Presto",
  Gecko: "Gecko",
  WebKit: "WebKit"
};
class s {
  /**
   * Get first matched item for a string
   * @param {RegExp} regexp
   * @param {String} ua
   * @return {Array|{index: number, input: string}|*|boolean|string}
   */
  static getFirstMatch(e, t) {
    const i = t.match(e);
    return i && i.length > 0 && i[1] || "";
  }
  /**
   * Get second matched item for a string
   * @param regexp
   * @param {String} ua
   * @return {Array|{index: number, input: string}|*|boolean|string}
   */
  static getSecondMatch(e, t) {
    const i = t.match(e);
    return i && i.length > 1 && i[2] || "";
  }
  /**
   * Match a regexp and return a constant or undefined
   * @param {RegExp} regexp
   * @param {String} ua
   * @param {*} _const Any const that will be returned if regexp matches the string
   * @return {*}
   */
  static matchAndReturnConst(e, t, i) {
    if (e.test(t))
      return i;
  }
  static getWindowsVersionName(e) {
    switch (e) {
      case "NT":
        return "NT";
      case "XP":
        return "XP";
      case "NT 5.0":
        return "2000";
      case "NT 5.1":
        return "XP";
      case "NT 5.2":
        return "2003";
      case "NT 6.0":
        return "Vista";
      case "NT 6.1":
        return "7";
      case "NT 6.2":
        return "8";
      case "NT 6.3":
        return "8.1";
      case "NT 10.0":
        return "10";
      default:
        return;
    }
  }
  /**
   * Get macOS version name
   *    10.5 - Leopard
   *    10.6 - Snow Leopard
   *    10.7 - Lion
   *    10.8 - Mountain Lion
   *    10.9 - Mavericks
   *    10.10 - Yosemite
   *    10.11 - El Capitan
   *    10.12 - Sierra
   *    10.13 - High Sierra
   *    10.14 - Mojave
   *    10.15 - Catalina
   *
   * @example
   *   getMacOSVersionName("10.14") // 'Mojave'
   *
   * @param  {string} version
   * @return {string} versionName
   */
  static getMacOSVersionName(e) {
    const t = e.split(".").splice(0, 2).map((i) => parseInt(i, 10) || 0);
    if (t.push(0), t[0] === 10)
      switch (t[1]) {
        case 5:
          return "Leopard";
        case 6:
          return "Snow Leopard";
        case 7:
          return "Lion";
        case 8:
          return "Mountain Lion";
        case 9:
          return "Mavericks";
        case 10:
          return "Yosemite";
        case 11:
          return "El Capitan";
        case 12:
          return "Sierra";
        case 13:
          return "High Sierra";
        case 14:
          return "Mojave";
        case 15:
          return "Catalina";
        default:
          return;
      }
  }
  /**
   * Get Android version name
   *    1.5 - Cupcake
   *    1.6 - Donut
   *    2.0 - Eclair
   *    2.1 - Eclair
   *    2.2 - Froyo
   *    2.x - Gingerbread
   *    3.x - Honeycomb
   *    4.0 - Ice Cream Sandwich
   *    4.1 - Jelly Bean
   *    4.4 - KitKat
   *    5.x - Lollipop
   *    6.x - Marshmallow
   *    7.x - Nougat
   *    8.x - Oreo
   *    9.x - Pie
   *
   * @example
   *   getAndroidVersionName("7.0") // 'Nougat'
   *
   * @param  {string} version
   * @return {string} versionName
   */
  static getAndroidVersionName(e) {
    const t = e.split(".").splice(0, 2).map((i) => parseInt(i, 10) || 0);
    if (t.push(0), !(t[0] === 1 && t[1] < 5)) {
      if (t[0] === 1 && t[1] < 6)
        return "Cupcake";
      if (t[0] === 1 && t[1] >= 6)
        return "Donut";
      if (t[0] === 2 && t[1] < 2)
        return "Eclair";
      if (t[0] === 2 && t[1] === 2)
        return "Froyo";
      if (t[0] === 2 && t[1] > 2)
        return "Gingerbread";
      if (t[0] === 3)
        return "Honeycomb";
      if (t[0] === 4 && t[1] < 1)
        return "Ice Cream Sandwich";
      if (t[0] === 4 && t[1] < 4)
        return "Jelly Bean";
      if (t[0] === 4 && t[1] >= 4)
        return "KitKat";
      if (t[0] === 5)
        return "Lollipop";
      if (t[0] === 6)
        return "Marshmallow";
      if (t[0] === 7)
        return "Nougat";
      if (t[0] === 8)
        return "Oreo";
      if (t[0] === 9)
        return "Pie";
    }
  }
  /**
   * Get version precisions count
   *
   * @example
   *   getVersionPrecision("1.10.3") // 3
   *
   * @param  {string} version
   * @return {number}
   */
  static getVersionPrecision(e) {
    return e.split(".").length;
  }
  /**
   * Calculate browser version weight
   *
   * @example
   *   compareVersions('1.10.2.1',  '1.8.2.1.90')    // 1
   *   compareVersions('1.010.2.1', '1.09.2.1.90');  // 1
   *   compareVersions('1.10.2.1',  '1.10.2.1');     // 0
   *   compareVersions('1.10.2.1',  '1.0800.2');     // -1
   *   compareVersions('1.10.2.1',  '1.10',  true);  // 0
   *
   * @param {String} versionA versions versions to compare
   * @param {String} versionB versions versions to compare
   * @param {boolean} [isLoose] enable loose comparison
   * @return {Number} comparison result: -1 when versionA is lower,
   * 1 when versionA is bigger, 0 when both equal
   */
  /* eslint consistent-return: 1 */
  static compareVersions(e, t, i = !1) {
    const n = s.getVersionPrecision(e), c = s.getVersionPrecision(t);
    let u = Math.max(n, c), l = 0;
    const a = s.map([e, t], (g) => {
      const f = u - s.getVersionPrecision(g), w = g + new Array(f + 1).join(".0");
      return s.map(w.split("."), (b) => new Array(20 - b.length).join("0") + b).reverse();
    });
    for (i && (l = u - Math.min(n, c)), u -= 1; u >= l; ) {
      if (a[0][u] > a[1][u])
        return 1;
      if (a[0][u] === a[1][u]) {
        if (u === l)
          return 0;
        u -= 1;
      } else if (a[0][u] < a[1][u])
        return -1;
    }
  }
  /**
   * Array::map polyfill
   *
   * @param  {Array} arr
   * @param  {Function} iterator
   * @return {Array}
   */
  static map(e, t) {
    const i = [];
    let n;
    if (Array.prototype.map)
      return Array.prototype.map.call(e, t);
    for (n = 0; n < e.length; n += 1)
      i.push(t(e[n]));
    return i;
  }
  /**
   * Array::find polyfill
   *
   * @param  {Array} arr
   * @param  {Function} predicate
   * @return {Array}
   */
  static find(e, t) {
    let i, n;
    if (Array.prototype.find)
      return Array.prototype.find.call(e, t);
    for (i = 0, n = e.length; i < n; i += 1) {
      const c = e[i];
      if (t(c, i))
        return c;
    }
  }
  /**
   * Object::assign polyfill
   *
   * @param  {Object} obj
   * @param  {Object} ...objs
   * @return {Object}
   */
  static assign(e, ...t) {
    const i = e;
    let n, c;
    if (Object.assign)
      return Object.assign(e, ...t);
    for (n = 0, c = t.length; n < c; n += 1) {
      const u = t[n];
      typeof u == "object" && u !== null && Object.keys(u).forEach((a) => {
        i[a] = u[a];
      });
    }
    return e;
  }
  /**
   * Get short version/alias for a browser name
   *
   * @example
   *   getBrowserAlias('Microsoft Edge') // edge
   *
   * @param  {string} browserName
   * @return {string}
   */
  static getBrowserAlias(e) {
    return _[e];
  }
  /**
   * Get short version/alias for a browser name
   *
   * @example
   *   getBrowserAlias('edge') // Microsoft Edge
   *
   * @param  {string} browserAlias
   * @return {string}
   */
  static getBrowserTypeByAlias(e) {
    return M[e] || "";
  }
}
const o = /version\/(\d+(\.?_?\d+)+)/i, A = [
  /* Googlebot */
  {
    test: [/googlebot/i],
    describe(r) {
      const e = {
        name: "Googlebot"
      }, t = s.getFirstMatch(/googlebot\/(\d+(\.\d+))/i, r) || s.getFirstMatch(o, r);
      return t && (e.version = t), e;
    }
  },
  /* Opera < 13.0 */
  {
    test: [/opera/i],
    describe(r) {
      const e = {
        name: "Opera"
      }, t = s.getFirstMatch(o, r) || s.getFirstMatch(/(?:opera)[\s/](\d+(\.?_?\d+)+)/i, r);
      return t && (e.version = t), e;
    }
  },
  /* Opera > 13.0 */
  {
    test: [/opr\/|opios/i],
    describe(r) {
      const e = {
        name: "Opera"
      }, t = s.getFirstMatch(/(?:opr|opios)[\s/](\S+)/i, r) || s.getFirstMatch(o, r);
      return t && (e.version = t), e;
    }
  },
  {
    test: [/SamsungBrowser/i],
    describe(r) {
      const e = {
        name: "Samsung Internet for Android"
      }, t = s.getFirstMatch(o, r) || s.getFirstMatch(/(?:SamsungBrowser)[\s/](\d+(\.?_?\d+)+)/i, r);
      return t && (e.version = t), e;
    }
  },
  {
    test: [/Whale/i],
    describe(r) {
      const e = {
        name: "NAVER Whale Browser"
      }, t = s.getFirstMatch(o, r) || s.getFirstMatch(/(?:whale)[\s/](\d+(?:\.\d+)+)/i, r);
      return t && (e.version = t), e;
    }
  },
  {
    test: [/MZBrowser/i],
    describe(r) {
      const e = {
        name: "MZ Browser"
      }, t = s.getFirstMatch(/(?:MZBrowser)[\s/](\d+(?:\.\d+)+)/i, r) || s.getFirstMatch(o, r);
      return t && (e.version = t), e;
    }
  },
  {
    test: [/focus/i],
    describe(r) {
      const e = {
        name: "Focus"
      }, t = s.getFirstMatch(/(?:focus)[\s/](\d+(?:\.\d+)+)/i, r) || s.getFirstMatch(o, r);
      return t && (e.version = t), e;
    }
  },
  {
    test: [/swing/i],
    describe(r) {
      const e = {
        name: "Swing"
      }, t = s.getFirstMatch(/(?:swing)[\s/](\d+(?:\.\d+)+)/i, r) || s.getFirstMatch(o, r);
      return t && (e.version = t), e;
    }
  },
  {
    test: [/coast/i],
    describe(r) {
      const e = {
        name: "Opera Coast"
      }, t = s.getFirstMatch(o, r) || s.getFirstMatch(/(?:coast)[\s/](\d+(\.?_?\d+)+)/i, r);
      return t && (e.version = t), e;
    }
  },
  {
    test: [/opt\/\d+(?:.?_?\d+)+/i],
    describe(r) {
      const e = {
        name: "Opera Touch"
      }, t = s.getFirstMatch(/(?:opt)[\s/](\d+(\.?_?\d+)+)/i, r) || s.getFirstMatch(o, r);
      return t && (e.version = t), e;
    }
  },
  {
    test: [/yabrowser/i],
    describe(r) {
      const e = {
        name: "Yandex Browser"
      }, t = s.getFirstMatch(/(?:yabrowser)[\s/](\d+(\.?_?\d+)+)/i, r) || s.getFirstMatch(o, r);
      return t && (e.version = t), e;
    }
  },
  {
    test: [/ucbrowser/i],
    describe(r) {
      const e = {
        name: "UC Browser"
      }, t = s.getFirstMatch(o, r) || s.getFirstMatch(/(?:ucbrowser)[\s/](\d+(\.?_?\d+)+)/i, r);
      return t && (e.version = t), e;
    }
  },
  {
    test: [/Maxthon|mxios/i],
    describe(r) {
      const e = {
        name: "Maxthon"
      }, t = s.getFirstMatch(o, r) || s.getFirstMatch(/(?:Maxthon|mxios)[\s/](\d+(\.?_?\d+)+)/i, r);
      return t && (e.version = t), e;
    }
  },
  {
    test: [/epiphany/i],
    describe(r) {
      const e = {
        name: "Epiphany"
      }, t = s.getFirstMatch(o, r) || s.getFirstMatch(/(?:epiphany)[\s/](\d+(\.?_?\d+)+)/i, r);
      return t && (e.version = t), e;
    }
  },
  {
    test: [/puffin/i],
    describe(r) {
      const e = {
        name: "Puffin"
      }, t = s.getFirstMatch(o, r) || s.getFirstMatch(/(?:puffin)[\s/](\d+(\.?_?\d+)+)/i, r);
      return t && (e.version = t), e;
    }
  },
  {
    test: [/sleipnir/i],
    describe(r) {
      const e = {
        name: "Sleipnir"
      }, t = s.getFirstMatch(o, r) || s.getFirstMatch(/(?:sleipnir)[\s/](\d+(\.?_?\d+)+)/i, r);
      return t && (e.version = t), e;
    }
  },
  {
    test: [/k-meleon/i],
    describe(r) {
      const e = {
        name: "K-Meleon"
      }, t = s.getFirstMatch(o, r) || s.getFirstMatch(/(?:k-meleon)[\s/](\d+(\.?_?\d+)+)/i, r);
      return t && (e.version = t), e;
    }
  },
  {
    test: [/micromessenger/i],
    describe(r) {
      const e = {
        name: "WeChat"
      }, t = s.getFirstMatch(/(?:micromessenger)[\s/](\d+(\.?_?\d+)+)/i, r) || s.getFirstMatch(o, r);
      return t && (e.version = t), e;
    }
  },
  {
    test: [/qqbrowser/i],
    describe(r) {
      const e = {
        name: /qqbrowserlite/i.test(r) ? "QQ Browser Lite" : "QQ Browser"
      }, t = s.getFirstMatch(/(?:qqbrowserlite|qqbrowser)[/](\d+(\.?_?\d+)+)/i, r) || s.getFirstMatch(o, r);
      return t && (e.version = t), e;
    }
  },
  {
    test: [/msie|trident/i],
    describe(r) {
      const e = {
        name: "Internet Explorer"
      }, t = s.getFirstMatch(/(?:msie |rv:)(\d+(\.?_?\d+)+)/i, r);
      return t && (e.version = t), e;
    }
  },
  {
    test: [/\sedg\//i],
    describe(r) {
      const e = {
        name: "Microsoft Edge"
      }, t = s.getFirstMatch(/\sedg\/(\d+(\.?_?\d+)+)/i, r);
      return t && (e.version = t), e;
    }
  },
  {
    test: [/edg([ea]|ios)/i],
    describe(r) {
      const e = {
        name: "Microsoft Edge"
      }, t = s.getSecondMatch(/edg([ea]|ios)\/(\d+(\.?_?\d+)+)/i, r);
      return t && (e.version = t), e;
    }
  },
  {
    test: [/vivaldi/i],
    describe(r) {
      const e = {
        name: "Vivaldi"
      }, t = s.getFirstMatch(/vivaldi\/(\d+(\.?_?\d+)+)/i, r);
      return t && (e.version = t), e;
    }
  },
  {
    test: [/seamonkey/i],
    describe(r) {
      const e = {
        name: "SeaMonkey"
      }, t = s.getFirstMatch(/seamonkey\/(\d+(\.?_?\d+)+)/i, r);
      return t && (e.version = t), e;
    }
  },
  {
    test: [/sailfish/i],
    describe(r) {
      const e = {
        name: "Sailfish"
      }, t = s.getFirstMatch(/sailfish\s?browser\/(\d+(\.\d+)?)/i, r);
      return t && (e.version = t), e;
    }
  },
  {
    test: [/silk/i],
    describe(r) {
      const e = {
        name: "Amazon Silk"
      }, t = s.getFirstMatch(/silk\/(\d+(\.?_?\d+)+)/i, r);
      return t && (e.version = t), e;
    }
  },
  {
    test: [/phantom/i],
    describe(r) {
      const e = {
        name: "PhantomJS"
      }, t = s.getFirstMatch(/phantomjs\/(\d+(\.?_?\d+)+)/i, r);
      return t && (e.version = t), e;
    }
  },
  {
    test: [/slimerjs/i],
    describe(r) {
      const e = {
        name: "SlimerJS"
      }, t = s.getFirstMatch(/slimerjs\/(\d+(\.?_?\d+)+)/i, r);
      return t && (e.version = t), e;
    }
  },
  {
    test: [/blackberry|\bbb\d+/i, /rim\stablet/i],
    describe(r) {
      const e = {
        name: "BlackBerry"
      }, t = s.getFirstMatch(o, r) || s.getFirstMatch(/blackberry[\d]+\/(\d+(\.?_?\d+)+)/i, r);
      return t && (e.version = t), e;
    }
  },
  {
    test: [/(web|hpw)[o0]s/i],
    describe(r) {
      const e = {
        name: "WebOS Browser"
      }, t = s.getFirstMatch(o, r) || s.getFirstMatch(/w(?:eb)?[o0]sbrowser\/(\d+(\.?_?\d+)+)/i, r);
      return t && (e.version = t), e;
    }
  },
  {
    test: [/bada/i],
    describe(r) {
      const e = {
        name: "Bada"
      }, t = s.getFirstMatch(/dolfin\/(\d+(\.?_?\d+)+)/i, r);
      return t && (e.version = t), e;
    }
  },
  {
    test: [/tizen/i],
    describe(r) {
      const e = {
        name: "Tizen"
      }, t = s.getFirstMatch(/(?:tizen\s?)?browser\/(\d+(\.?_?\d+)+)/i, r) || s.getFirstMatch(o, r);
      return t && (e.version = t), e;
    }
  },
  {
    test: [/qupzilla/i],
    describe(r) {
      const e = {
        name: "QupZilla"
      }, t = s.getFirstMatch(/(?:qupzilla)[\s/](\d+(\.?_?\d+)+)/i, r) || s.getFirstMatch(o, r);
      return t && (e.version = t), e;
    }
  },
  {
    test: [/firefox|iceweasel|fxios/i],
    describe(r) {
      const e = {
        name: "Firefox"
      }, t = s.getFirstMatch(/(?:firefox|iceweasel|fxios)[\s/](\d+(\.?_?\d+)+)/i, r);
      return t && (e.version = t), e;
    }
  },
  {
    test: [/electron/i],
    describe(r) {
      const e = {
        name: "Electron"
      }, t = s.getFirstMatch(/(?:electron)\/(\d+(\.?_?\d+)+)/i, r);
      return t && (e.version = t), e;
    }
  },
  {
    test: [/MiuiBrowser/i],
    describe(r) {
      const e = {
        name: "Miui"
      }, t = s.getFirstMatch(/(?:MiuiBrowser)[\s/](\d+(\.?_?\d+)+)/i, r);
      return t && (e.version = t), e;
    }
  },
  {
    test: [/chromium/i],
    describe(r) {
      const e = {
        name: "Chromium"
      }, t = s.getFirstMatch(/(?:chromium)[\s/](\d+(\.?_?\d+)+)/i, r) || s.getFirstMatch(o, r);
      return t && (e.version = t), e;
    }
  },
  {
    test: [/chrome|crios|crmo/i],
    describe(r) {
      const e = {
        name: "Chrome"
      }, t = s.getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.?_?\d+)+)/i, r);
      return t && (e.version = t), e;
    }
  },
  {
    test: [/GSA/i],
    describe(r) {
      const e = {
        name: "Google Search"
      }, t = s.getFirstMatch(/(?:GSA)\/(\d+(\.?_?\d+)+)/i, r);
      return t && (e.version = t), e;
    }
  },
  /* Android Browser */
  {
    test(r) {
      const e = !r.test(/like android/i), t = r.test(/android/i);
      return e && t;
    },
    describe(r) {
      const e = {
        name: "Android Browser"
      }, t = s.getFirstMatch(o, r);
      return t && (e.version = t), e;
    }
  },
  /* PlayStation 4 */
  {
    test: [/playstation 4/i],
    describe(r) {
      const e = {
        name: "PlayStation 4"
      }, t = s.getFirstMatch(o, r);
      return t && (e.version = t), e;
    }
  },
  /* Safari */
  {
    test: [/safari|applewebkit/i],
    describe(r) {
      const e = {
        name: "Safari"
      }, t = s.getFirstMatch(o, r);
      return t && (e.version = t), e;
    }
  },
  /* Something else */
  {
    test: [/.*/i],
    describe(r) {
      const e = /^(.*)\/(.*) /, t = /^(.*)\/(.*)[ \t]\((.*)/, n = r.search("\\(") !== -1 ? t : e;
      return {
        name: s.getFirstMatch(n, r),
        version: s.getSecondMatch(n, r)
      };
    }
  }
], N = [
  /* Roku */
  {
    test: [/Roku\/DVP/],
    describe(r) {
      const e = s.getFirstMatch(/Roku\/DVP-(\d+\.\d+)/i, r);
      return {
        name: m.Roku,
        version: e
      };
    }
  },
  /* Windows Phone */
  {
    test: [/windows phone/i],
    describe(r) {
      const e = s.getFirstMatch(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i, r);
      return {
        name: m.WindowsPhone,
        version: e
      };
    }
  },
  /* Windows */
  {
    test: [/windows /i],
    describe(r) {
      const e = s.getFirstMatch(/Windows ((NT|XP)( \d\d?.\d)?)/i, r), t = s.getWindowsVersionName(e);
      return {
        name: m.Windows,
        version: e,
        versionName: t
      };
    }
  },
  /* Firefox on iPad */
  {
    test: [/Macintosh(.*?) FxiOS(.*?)\//],
    describe(r) {
      const e = {
        name: m.iOS
      }, t = s.getSecondMatch(/(Version\/)(\d[\d.]+)/, r);
      return t && (e.version = t), e;
    }
  },
  /* macOS */
  {
    test: [/macintosh/i],
    describe(r) {
      const e = s.getFirstMatch(/mac os x (\d+(\.?_?\d+)+)/i, r).replace(/[_\s]/g, "."), t = s.getMacOSVersionName(e), i = {
        name: m.MacOS,
        version: e
      };
      return t && (i.versionName = t), i;
    }
  },
  /* iOS */
  {
    test: [/(ipod|iphone|ipad)/i],
    describe(r) {
      const e = s.getFirstMatch(/os (\d+([_\s]\d+)*) like mac os x/i, r).replace(/[_\s]/g, ".");
      return {
        name: m.iOS,
        version: e
      };
    }
  },
  /* Android */
  {
    test(r) {
      const e = !r.test(/like android/i), t = r.test(/android/i);
      return e && t;
    },
    describe(r) {
      const e = s.getFirstMatch(/android[\s/-](\d+(\.\d+)*)/i, r), t = s.getAndroidVersionName(e), i = {
        name: m.Android,
        version: e
      };
      return t && (i.versionName = t), i;
    }
  },
  /* WebOS */
  {
    test: [/(web|hpw)[o0]s/i],
    describe(r) {
      const e = s.getFirstMatch(/(?:web|hpw)[o0]s\/(\d+(\.\d+)*)/i, r), t = {
        name: m.WebOS
      };
      return e && e.length && (t.version = e), t;
    }
  },
  /* BlackBerry */
  {
    test: [/blackberry|\bbb\d+/i, /rim\stablet/i],
    describe(r) {
      const e = s.getFirstMatch(/rim\stablet\sos\s(\d+(\.\d+)*)/i, r) || s.getFirstMatch(/blackberry\d+\/(\d+([_\s]\d+)*)/i, r) || s.getFirstMatch(/\bbb(\d+)/i, r);
      return {
        name: m.BlackBerry,
        version: e
      };
    }
  },
  /* Bada */
  {
    test: [/bada/i],
    describe(r) {
      const e = s.getFirstMatch(/bada\/(\d+(\.\d+)*)/i, r);
      return {
        name: m.Bada,
        version: e
      };
    }
  },
  /* Tizen */
  {
    test: [/tizen/i],
    describe(r) {
      const e = s.getFirstMatch(/tizen[/\s](\d+(\.\d+)*)/i, r);
      return {
        name: m.Tizen,
        version: e
      };
    }
  },
  /* Linux */
  {
    test: [/linux/i],
    describe() {
      return {
        name: m.Linux
      };
    }
  },
  /* Chrome OS */
  {
    test: [/CrOS/],
    describe() {
      return {
        name: m.ChromeOS
      };
    }
  },
  /* Playstation 4 */
  {
    test: [/PlayStation 4/],
    describe(r) {
      const e = s.getFirstMatch(/PlayStation 4[/\s](\d+(\.\d+)*)/i, r);
      return {
        name: m.PlayStation4,
        version: e
      };
    }
  }
], E = [
  /* Googlebot */
  {
    test: [/googlebot/i],
    describe() {
      return {
        type: "bot",
        vendor: "Google"
      };
    }
  },
  /* Huawei */
  {
    test: [/huawei/i],
    describe(r) {
      const e = s.getFirstMatch(/(can-l01)/i, r) && "Nova", t = {
        type: d.mobile,
        vendor: "Huawei"
      };
      return e && (t.model = e), t;
    }
  },
  /* Nexus Tablet */
  {
    test: [/nexus\s*(?:7|8|9|10).*/i],
    describe() {
      return {
        type: d.tablet,
        vendor: "Nexus"
      };
    }
  },
  /* iPad */
  {
    test: [/ipad/i],
    describe() {
      return {
        type: d.tablet,
        vendor: "Apple",
        model: "iPad"
      };
    }
  },
  /* Firefox on iPad */
  {
    test: [/Macintosh(.*?) FxiOS(.*?)\//],
    describe() {
      return {
        type: d.tablet,
        vendor: "Apple",
        model: "iPad"
      };
    }
  },
  /* Amazon Kindle Fire */
  {
    test: [/kftt build/i],
    describe() {
      return {
        type: d.tablet,
        vendor: "Amazon",
        model: "Kindle Fire HD 7"
      };
    }
  },
  /* Another Amazon Tablet with Silk */
  {
    test: [/silk/i],
    describe() {
      return {
        type: d.tablet,
        vendor: "Amazon"
      };
    }
  },
  /* Tablet */
  {
    test: [/tablet(?! pc)/i],
    describe() {
      return {
        type: d.tablet
      };
    }
  },
  /* iPod/iPhone */
  {
    test(r) {
      const e = r.test(/ipod|iphone/i), t = r.test(/like (ipod|iphone)/i);
      return e && !t;
    },
    describe(r) {
      const e = s.getFirstMatch(/(ipod|iphone)/i, r);
      return {
        type: d.mobile,
        vendor: "Apple",
        model: e
      };
    }
  },
  /* Nexus Mobile */
  {
    test: [/nexus\s*[0-6].*/i, /galaxy nexus/i],
    describe() {
      return {
        type: d.mobile,
        vendor: "Nexus"
      };
    }
  },
  /* Mobile */
  {
    test: [/[^-]mobi/i],
    describe() {
      return {
        type: d.mobile
      };
    }
  },
  /* BlackBerry */
  {
    test(r) {
      return r.getBrowserName(!0) === "blackberry";
    },
    describe() {
      return {
        type: d.mobile,
        vendor: "BlackBerry"
      };
    }
  },
  /* Bada */
  {
    test(r) {
      return r.getBrowserName(!0) === "bada";
    },
    describe() {
      return {
        type: d.mobile
      };
    }
  },
  /* Windows Phone */
  {
    test(r) {
      return r.getBrowserName() === "windows phone";
    },
    describe() {
      return {
        type: d.mobile,
        vendor: "Microsoft"
      };
    }
  },
  /* Android Tablet */
  {
    test(r) {
      const e = Number(String(r.getOSVersion()).split(".")[0]);
      return r.getOSName(!0) === "android" && e >= 3;
    },
    describe() {
      return {
        type: d.tablet
      };
    }
  },
  /* Android Mobile */
  {
    test(r) {
      return r.getOSName(!0) === "android";
    },
    describe() {
      return {
        type: d.mobile
      };
    }
  },
  /* desktop */
  {
    test(r) {
      return r.getOSName(!0) === "macos";
    },
    describe() {
      return {
        type: d.desktop,
        vendor: "Apple"
      };
    }
  },
  /* Windows */
  {
    test(r) {
      return r.getOSName(!0) === "windows";
    },
    describe() {
      return {
        type: d.desktop
      };
    }
  },
  /* Linux */
  {
    test(r) {
      return r.getOSName(!0) === "linux";
    },
    describe() {
      return {
        type: d.desktop
      };
    }
  },
  /* PlayStation 4 */
  {
    test(r) {
      return r.getOSName(!0) === "playstation 4";
    },
    describe() {
      return {
        type: d.tv
      };
    }
  },
  /* Roku */
  {
    test(r) {
      return r.getOSName(!0) === "roku";
    },
    describe() {
      return {
        type: d.tv
      };
    }
  }
], x = [
  /* EdgeHTML */
  {
    test(r) {
      return r.getBrowserName(!0) === "microsoft edge";
    },
    describe(r) {
      if (/\sedg\//i.test(r))
        return {
          name: h.Blink
        };
      const t = s.getFirstMatch(/edge\/(\d+(\.?_?\d+)+)/i, r);
      return {
        name: h.EdgeHTML,
        version: t
      };
    }
  },
  /* Trident */
  {
    test: [/trident/i],
    describe(r) {
      const e = {
        name: h.Trident
      }, t = s.getFirstMatch(/trident\/(\d+(\.?_?\d+)+)/i, r);
      return t && (e.version = t), e;
    }
  },
  /* Presto */
  {
    test(r) {
      return r.test(/presto/i);
    },
    describe(r) {
      const e = {
        name: h.Presto
      }, t = s.getFirstMatch(/presto\/(\d+(\.?_?\d+)+)/i, r);
      return t && (e.version = t), e;
    }
  },
  /* Gecko */
  {
    test(r) {
      const e = r.test(/gecko/i), t = r.test(/like gecko/i);
      return e && !t;
    },
    describe(r) {
      const e = {
        name: h.Gecko
      }, t = s.getFirstMatch(/gecko\/(\d+(\.?_?\d+)+)/i, r);
      return t && (e.version = t), e;
    }
  },
  /* Blink */
  {
    test: [/(apple)?webkit\/537\.36/i],
    describe() {
      return {
        name: h.Blink
      };
    }
  },
  /* WebKit */
  {
    test: [/(apple)?webkit/i],
    describe(r) {
      const e = {
        name: h.WebKit
      }, t = s.getFirstMatch(/webkit\/(\d+(\.?_?\d+)+)/i, r);
      return t && (e.version = t), e;
    }
  }
];
class v {
  /**
   * Create instance of Parser
   *
   * @param {String} UA User-Agent string
   * @param {Boolean} [skipParsing=false] parser can skip parsing in purpose of performance
   * improvements if you need to make a more particular parsing
   * like {@link Parser#parseBrowser} or {@link Parser#parsePlatform}
   *
   * @throw {Error} in case of empty UA String
   *
   * @constructor
   */
  constructor(e, t = !1) {
    if (e == null || e === "")
      throw new Error("UserAgent parameter can't be empty");
    this._ua = e, this.parsedResult = {}, t !== !0 && this.parse();
  }
  /**
   * Get UserAgent string of current Parser instance
   * @return {String} User-Agent String of the current <Parser> object
   *
   * @public
   */
  getUA() {
    return this._ua;
  }
  /**
   * Test a UA string for a regexp
   * @param {RegExp} regex
   * @return {Boolean}
   */
  test(e) {
    return e.test(this._ua);
  }
  /**
   * Get parsed browser object
   * @return {Object}
   */
  parseBrowser() {
    this.parsedResult.browser = {};
    const e = s.find(A, (t) => {
      if (typeof t.test == "function")
        return t.test(this);
      if (t.test instanceof Array)
        return t.test.some((i) => this.test(i));
      throw new Error("Browser's test function is not valid");
    });
    return e && (this.parsedResult.browser = e.describe(this.getUA())), this.parsedResult.browser;
  }
  /**
   * Get parsed browser object
   * @return {Object}
   *
   * @public
   */
  getBrowser() {
    return this.parsedResult.browser ? this.parsedResult.browser : this.parseBrowser();
  }
  /**
   * Get browser's name
   * @return {String} Browser's name or an empty string
   *
   * @public
   */
  getBrowserName(e) {
    return e ? String(this.getBrowser().name).toLowerCase() || "" : this.getBrowser().name || "";
  }
  /**
   * Get browser's version
   * @return {String} version of browser
   *
   * @public
   */
  getBrowserVersion() {
    return this.getBrowser().version;
  }
  /**
   * Get OS
   * @return {Object}
   *
   * @example
   * this.getOS();
   * {
   *   name: 'macOS',
   *   version: '10.11.12'
   * }
   */
  getOS() {
    return this.parsedResult.os ? this.parsedResult.os : this.parseOS();
  }
  /**
   * Parse OS and save it to this.parsedResult.os
   * @return {*|{}}
   */
  parseOS() {
    this.parsedResult.os = {};
    const e = s.find(N, (t) => {
      if (typeof t.test == "function")
        return t.test(this);
      if (t.test instanceof Array)
        return t.test.some((i) => this.test(i));
      throw new Error("Browser's test function is not valid");
    });
    return e && (this.parsedResult.os = e.describe(this.getUA())), this.parsedResult.os;
  }
  /**
   * Get OS name
   * @param {Boolean} [toLowerCase] return lower-cased value
   * @return {String} name of the OS — macOS, Windows, Linux, etc.
   */
  getOSName(e) {
    const { name: t } = this.getOS();
    return e ? String(t).toLowerCase() || "" : t || "";
  }
  /**
   * Get OS version
   * @return {String} full version with dots ('10.11.12', '5.6', etc)
   */
  getOSVersion() {
    return this.getOS().version;
  }
  /**
   * Get parsed platform
   * @return {{}}
   */
  getPlatform() {
    return this.parsedResult.platform ? this.parsedResult.platform : this.parsePlatform();
  }
  /**
   * Get platform name
   * @param {Boolean} [toLowerCase=false]
   * @return {*}
   */
  getPlatformType(e = !1) {
    const { type: t } = this.getPlatform();
    return e ? String(t).toLowerCase() || "" : t || "";
  }
  /**
   * Get parsed platform
   * @return {{}}
   */
  parsePlatform() {
    this.parsedResult.platform = {};
    const e = s.find(E, (t) => {
      if (typeof t.test == "function")
        return t.test(this);
      if (t.test instanceof Array)
        return t.test.some((i) => this.test(i));
      throw new Error("Browser's test function is not valid");
    });
    return e && (this.parsedResult.platform = e.describe(this.getUA())), this.parsedResult.platform;
  }
  /**
   * Get parsed engine
   * @return {{}}
   */
  getEngine() {
    return this.parsedResult.engine ? this.parsedResult.engine : this.parseEngine();
  }
  /**
   * Get engines's name
   * @return {String} Engines's name or an empty string
   *
   * @public
   */
  getEngineName(e) {
    return e ? String(this.getEngine().name).toLowerCase() || "" : this.getEngine().name || "";
  }
  /**
   * Get parsed platform
   * @return {{}}
   */
  parseEngine() {
    this.parsedResult.engine = {};
    const e = s.find(x, (t) => {
      if (typeof t.test == "function")
        return t.test(this);
      if (t.test instanceof Array)
        return t.test.some((i) => this.test(i));
      throw new Error("Browser's test function is not valid");
    });
    return e && (this.parsedResult.engine = e.describe(this.getUA())), this.parsedResult.engine;
  }
  /**
   * Parse full information about the browser
   * @returns {Parser}
   */
  parse() {
    return this.parseBrowser(), this.parseOS(), this.parsePlatform(), this.parseEngine(), this;
  }
  /**
   * Get parsed result
   * @return {ParsedResult}
   */
  getResult() {
    return s.assign({}, this.parsedResult);
  }
  /**
   * Check if parsed browser matches certain conditions
   *
   * @param {Object} checkTree It's one or two layered object,
   * which can include a platform or an OS on the first layer
   * and should have browsers specs on the bottom-laying layer
   *
   * @returns {Boolean|undefined} Whether the browser satisfies the set conditions or not.
   * Returns `undefined` when the browser is no described in the checkTree object.
   *
   * @example
   * const browser = Bowser.getParser(window.navigator.userAgent);
   * if (browser.satisfies({chrome: '>118.01.1322' }))
   * // or with os
   * if (browser.satisfies({windows: { chrome: '>118.01.1322' } }))
   * // or with platforms
   * if (browser.satisfies({desktop: { chrome: '>118.01.1322' } }))
   */
  satisfies(e) {
    const t = {};
    let i = 0;
    const n = {};
    let c = 0;
    if (Object.keys(e).forEach((l) => {
      const a = e[l];
      typeof a == "string" ? (n[l] = a, c += 1) : typeof a == "object" && (t[l] = a, i += 1);
    }), i > 0) {
      const l = Object.keys(t), a = s.find(l, (f) => this.isOS(f));
      if (a) {
        const f = this.satisfies(t[a]);
        if (f !== void 0)
          return f;
      }
      const g = s.find(
        l,
        (f) => this.isPlatform(f)
      );
      if (g) {
        const f = this.satisfies(t[g]);
        if (f !== void 0)
          return f;
      }
    }
    if (c > 0) {
      const l = Object.keys(n), a = s.find(l, (g) => this.isBrowser(g, !0));
      if (a !== void 0)
        return this.compareVersion(n[a]);
    }
  }
  /**
   * Check if the browser name equals the passed string
   * @param browserName The string to compare with the browser name
   * @param [includingAlias=false] The flag showing whether alias will be included into comparison
   * @returns {boolean}
   */
  isBrowser(e, t = !1) {
    const i = this.getBrowserName().toLowerCase();
    let n = e.toLowerCase();
    const c = s.getBrowserTypeByAlias(n);
    return t && c && (n = c.toLowerCase()), n === i;
  }
  compareVersion(e) {
    let t = [0], i = e, n = !1;
    const c = this.getBrowserVersion();
    if (typeof c == "string")
      return e[0] === ">" || e[0] === "<" ? (i = e.substr(1), e[1] === "=" ? (n = !0, i = e.substr(2)) : t = [], e[0] === ">" ? t.push(1) : t.push(-1)) : e[0] === "=" ? i = e.substr(1) : e[0] === "~" && (n = !0, i = e.substr(1)), t.indexOf(
        s.compareVersions(c, i, n)
      ) > -1;
  }
  isOS(e) {
    return this.getOSName(!0) === String(e).toLowerCase();
  }
  isPlatform(e) {
    return this.getPlatformType(!0) === String(e).toLowerCase();
  }
  isEngine(e) {
    return this.getEngineName(!0) === String(e).toLowerCase();
  }
  /**
   * Is anything? Check if the browser is called "anything",
   * the OS called "anything" or the platform called "anything"
   * @param {String} anything
   * @param [includingAlias=false] The flag showing whether alias will be included into comparison
   * @returns {Boolean}
   */
  is(e, t = !1) {
    return this.isBrowser(e, t) || this.isOS(e) || this.isPlatform(e);
  }
  /**
   * Check if any of the given values satisfies this.is(anything)
   * @param {String[]} anythings
   * @returns {Boolean}
   */
  some(e = []) {
    return e.some((t) => this.is(t));
  }
}
/*!
 * Bowser - a browser detector
 * https://github.com/lancedikson/bowser
 * MIT License | (c) Dustin Diaz 2012-2015
 * MIT License | (c) Denis Demchenko 2015-2019
 */
class R {
  /**
   * Creates a {@link Parser} instance
   *
   * @param {String} UA UserAgent string
   * @param {Boolean} [skipParsing=false] Will make the Parser postpone parsing until you ask it
   * explicitly. Same as `skipParsing` for {@link Parser}.
   * @returns {Parser}
   * @throws {Error} when UA is not a String
   *
   * @example
   * const parser = Bowser.getParser(window.navigator.userAgent);
   * const result = parser.getResult();
   */
  static getParser(e, t = !1) {
    if (typeof e != "string")
      throw new Error("UserAgent should be a string");
    return new v(e, t);
  }
  /**
   * Creates a {@link Parser} instance and runs {@link Parser.getResult} immediately
   *
   * @param UA
   * @return {ParsedResult}
   *
   * @example
   * const result = Bowser.parse(window.navigator.userAgent);
   */
  static parse(e) {
    return new v(e).getResult();
  }
  static get BROWSER_MAP() {
    return M;
  }
  static get ENGINE_MAP() {
    return h;
  }
  static get OS_MAP() {
    return m;
  }
  static get PLATFORMS_MAP() {
    return d;
  }
}
function T() {
  const r = {};
  if (typeof window < "u") {
    const e = R.getParser(window.navigator.userAgent);
    r.browserName = e.getBrowserName(), r.browserVersion = e.getBrowserVersion(), r.osName = e.getOSName(), r.osVersion = e.getOSVersion(), r.platformType = e.getPlatformType();
  }
  return r;
}
function L() {
  let r = "";
  return document && document.referrer ? (r = document.referrer, localStorage.setItem("referrer", r)) : r = localStorage.getItem("referrer") || "none", r;
}
function C() {
  return (/* @__PURE__ */ new Date()).toISOString();
}
function V(r) {
  return new Date(r).toLocaleString("en-US", { timeZone: "America/Los_Angeles" });
}
function I() {
  let r = "";
  return typeof document < "u" && document.title && (r = document.title), r;
}
function W() {
  let r = "";
  return typeof window < "u" && window.location && window.location.href && (r = window.location.href), r;
}
function D() {
  let r = "";
  return typeof window < "u" && window.location && window.location.hostname && (r = window.location.hostname), r;
}
function z(r) {
  const e = r instanceof UIEvent && r.view ? r.view.location.href : "", t = r.target instanceof HTMLElement ? r.target : null;
  let i = {};
  return r instanceof MouseEvent && (i = {
    clientX: r.clientX,
    clientY: r.clientY,
    pageX: r.pageX,
    pageY: r.pageY
  }), {
    eventType: r.type,
    eventTimeStamp: r.timeStamp,
    srcElement: r.srcElement ? r.srcElement : null,
    viewUrl: e,
    outerHTML: t ? t.outerHTML : null,
    outerText: t ? t.outerText : null,
    targetId: t ? t.id : null,
    className: t ? t.className : null,
    // Access 'view' property safely after checking the event is an instance of UIEvent
    view: r instanceof UIEvent && r.view ? r.view.location.href : null,
    ...i
  };
}
function q(r) {
  const e = r && r.formData;
  if (e)
    try {
      return JSON.parse(e);
    } catch (t) {
      console.error("Error parsing formData from localStorage:", t);
    }
  return null;
}
async function j(r, e, t) {
  const i = "https://eventex5.apps.nextthing.tech/api/events", n = k(), c = O(), u = T(), l = L(), a = C(), g = V(a), f = P(), w = I(), b = W(), S = D(), y = z(r), F = q(f);
  try {
    const p = await fetch(i, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        event: {
          event_name: e,
          properties: {
            a: 1,
            b: 2,
            ...t,
            ...n,
            ...c,
            ...u,
            referrer: l,
            created_at: a,
            created_at_pst: g,
            ...f,
            page_title: w,
            page_url: b,
            host_name: S,
            ...y,
            ...F
          }
        }
      })
    });
    if (!p.ok)
      throw console.log("ℹ️ response: ", p), new Error("Failed to send event message");
    const B = await p.json();
    console.log("Event message sent successfully:", B);
  } catch (p) {
    console.error("Error sending event message:", p);
  }
}
export {
  j as reportEvent
};
