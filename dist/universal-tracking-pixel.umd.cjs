(function(p,b){typeof exports=="object"&&typeof module<"u"?b(exports):typeof define=="function"&&define.amd?define(["exports"],b):(p=typeof globalThis<"u"?globalThis:p||self,b(p.myLibrary={}))})(this,function(p){"use strict";function b(){if(typeof window<"u"){const r=window.location.search,e=new URLSearchParams(r);return{utm_source:e.get("utm_source")||"",utm_medium:e.get("utm_medium")||"",utm_campaign:e.get("utm_campaign")||"",utm_term:e.get("utm_term")||"",utm_content:e.get("utm_content")||""}}return{}}function B(){const r={};return typeof document<"u"&&document.cookie.split(";").map(i=>i.trim()).forEach(i=>{const[n,d]=i.split("=");r[n.trim()]=d}),r}function k(){const r={};if(typeof localStorage<"u")for(let e=0;e<localStorage.length;e++){const t=localStorage.key(e);if(t){const i=localStorage.getItem(t);i!==null&&(r[t]=i)}}return r}const O={"Amazon Silk":"amazon_silk","Android Browser":"android",Bada:"bada",BlackBerry:"blackberry",Chrome:"chrome",Chromium:"chromium",Electron:"electron",Epiphany:"epiphany",Firefox:"firefox",Focus:"focus",Generic:"generic","Google Search":"google_search",Googlebot:"googlebot","Internet Explorer":"ie","K-Meleon":"k_meleon",Maxthon:"maxthon","Microsoft Edge":"edge","MZ Browser":"mz","NAVER Whale Browser":"naver",Opera:"opera","Opera Coast":"opera_coast",PhantomJS:"phantomjs",Puffin:"puffin",QupZilla:"qupzilla",QQ:"qq",QQLite:"qqlite",Safari:"safari",Sailfish:"sailfish","Samsung Internet for Android":"samsung_internet",SeaMonkey:"seamonkey",Sleipnir:"sleipnir",Swing:"swing",Tizen:"tizen","UC Browser":"uc",Vivaldi:"vivaldi","WebOS Browser":"webos",WeChat:"wechat","Yandex Browser":"yandex",Roku:"roku"},S={amazon_silk:"Amazon Silk",android:"Android Browser",bada:"Bada",blackberry:"BlackBerry",chrome:"Chrome",chromium:"Chromium",electron:"Electron",epiphany:"Epiphany",firefox:"Firefox",focus:"Focus",generic:"Generic",googlebot:"Googlebot",google_search:"Google Search",ie:"Internet Explorer",k_meleon:"K-Meleon",maxthon:"Maxthon",edge:"Microsoft Edge",mz:"MZ Browser",naver:"NAVER Whale Browser",opera:"Opera",opera_coast:"Opera Coast",phantomjs:"PhantomJS",puffin:"Puffin",qupzilla:"QupZilla",qq:"QQ Browser",qqlite:"QQ Browser Lite",safari:"Safari",sailfish:"Sailfish",samsung_internet:"Samsung Internet for Android",seamonkey:"SeaMonkey",sleipnir:"Sleipnir",swing:"Swing",tizen:"Tizen",uc:"UC Browser",vivaldi:"Vivaldi",webos:"WebOS Browser",wechat:"WeChat",yandex:"Yandex Browser"},c={tablet:"tablet",mobile:"mobile",desktop:"desktop",tv:"tv"},l={WindowsPhone:"Windows Phone",Windows:"Windows",MacOS:"macOS",iOS:"iOS",Android:"Android",WebOS:"WebOS",BlackBerry:"BlackBerry",Bada:"Bada",Tizen:"Tizen",Linux:"Linux",ChromeOS:"Chrome OS",PlayStation4:"PlayStation 4",Roku:"Roku"},h={EdgeHTML:"EdgeHTML",Blink:"Blink",Trident:"Trident",Presto:"Presto",Gecko:"Gecko",WebKit:"WebKit"};class s{static getFirstMatch(e,t){const i=t.match(e);return i&&i.length>0&&i[1]||""}static getSecondMatch(e,t){const i=t.match(e);return i&&i.length>1&&i[2]||""}static matchAndReturnConst(e,t,i){if(e.test(t))return i}static getWindowsVersionName(e){switch(e){case"NT":return"NT";case"XP":return"XP";case"NT 5.0":return"2000";case"NT 5.1":return"XP";case"NT 5.2":return"2003";case"NT 6.0":return"Vista";case"NT 6.1":return"7";case"NT 6.2":return"8";case"NT 6.3":return"8.1";case"NT 10.0":return"10";default:return}}static getMacOSVersionName(e){const t=e.split(".").splice(0,2).map(i=>parseInt(i,10)||0);if(t.push(0),t[0]===10)switch(t[1]){case 5:return"Leopard";case 6:return"Snow Leopard";case 7:return"Lion";case 8:return"Mountain Lion";case 9:return"Mavericks";case 10:return"Yosemite";case 11:return"El Capitan";case 12:return"Sierra";case 13:return"High Sierra";case 14:return"Mojave";case 15:return"Catalina";default:return}}static getAndroidVersionName(e){const t=e.split(".").splice(0,2).map(i=>parseInt(i,10)||0);if(t.push(0),!(t[0]===1&&t[1]<5)){if(t[0]===1&&t[1]<6)return"Cupcake";if(t[0]===1&&t[1]>=6)return"Donut";if(t[0]===2&&t[1]<2)return"Eclair";if(t[0]===2&&t[1]===2)return"Froyo";if(t[0]===2&&t[1]>2)return"Gingerbread";if(t[0]===3)return"Honeycomb";if(t[0]===4&&t[1]<1)return"Ice Cream Sandwich";if(t[0]===4&&t[1]<4)return"Jelly Bean";if(t[0]===4&&t[1]>=4)return"KitKat";if(t[0]===5)return"Lollipop";if(t[0]===6)return"Marshmallow";if(t[0]===7)return"Nougat";if(t[0]===8)return"Oreo";if(t[0]===9)return"Pie"}}static getVersionPrecision(e){return e.split(".").length}static compareVersions(e,t,i=!1){const n=s.getVersionPrecision(e),d=s.getVersionPrecision(t);let u=Math.max(n,d),m=0;const a=s.map([e,t],g=>{const f=u-s.getVersionPrecision(g),M=g+new Array(f+1).join(".0");return s.map(M.split("."),v=>new Array(20-v.length).join("0")+v).reverse()});for(i&&(m=u-Math.min(n,d)),u-=1;u>=m;){if(a[0][u]>a[1][u])return 1;if(a[0][u]===a[1][u]){if(u===m)return 0;u-=1}else if(a[0][u]<a[1][u])return-1}}static map(e,t){const i=[];let n;if(Array.prototype.map)return Array.prototype.map.call(e,t);for(n=0;n<e.length;n+=1)i.push(t(e[n]));return i}static find(e,t){let i,n;if(Array.prototype.find)return Array.prototype.find.call(e,t);for(i=0,n=e.length;i<n;i+=1){const d=e[i];if(t(d,i))return d}}static assign(e,...t){const i=e;let n,d;if(Object.assign)return Object.assign(e,...t);for(n=0,d=t.length;n<d;n+=1){const u=t[n];typeof u=="object"&&u!==null&&Object.keys(u).forEach(a=>{i[a]=u[a]})}return e}static getBrowserAlias(e){return O[e]}static getBrowserTypeByAlias(e){return S[e]||""}}const o=/version\/(\d+(\.?_?\d+)+)/i,P=[{test:[/googlebot/i],describe(r){const e={name:"Googlebot"},t=s.getFirstMatch(/googlebot\/(\d+(\.\d+))/i,r)||s.getFirstMatch(o,r);return t&&(e.version=t),e}},{test:[/opera/i],describe(r){const e={name:"Opera"},t=s.getFirstMatch(o,r)||s.getFirstMatch(/(?:opera)[\s/](\d+(\.?_?\d+)+)/i,r);return t&&(e.version=t),e}},{test:[/opr\/|opios/i],describe(r){const e={name:"Opera"},t=s.getFirstMatch(/(?:opr|opios)[\s/](\S+)/i,r)||s.getFirstMatch(o,r);return t&&(e.version=t),e}},{test:[/SamsungBrowser/i],describe(r){const e={name:"Samsung Internet for Android"},t=s.getFirstMatch(o,r)||s.getFirstMatch(/(?:SamsungBrowser)[\s/](\d+(\.?_?\d+)+)/i,r);return t&&(e.version=t),e}},{test:[/Whale/i],describe(r){const e={name:"NAVER Whale Browser"},t=s.getFirstMatch(o,r)||s.getFirstMatch(/(?:whale)[\s/](\d+(?:\.\d+)+)/i,r);return t&&(e.version=t),e}},{test:[/MZBrowser/i],describe(r){const e={name:"MZ Browser"},t=s.getFirstMatch(/(?:MZBrowser)[\s/](\d+(?:\.\d+)+)/i,r)||s.getFirstMatch(o,r);return t&&(e.version=t),e}},{test:[/focus/i],describe(r){const e={name:"Focus"},t=s.getFirstMatch(/(?:focus)[\s/](\d+(?:\.\d+)+)/i,r)||s.getFirstMatch(o,r);return t&&(e.version=t),e}},{test:[/swing/i],describe(r){const e={name:"Swing"},t=s.getFirstMatch(/(?:swing)[\s/](\d+(?:\.\d+)+)/i,r)||s.getFirstMatch(o,r);return t&&(e.version=t),e}},{test:[/coast/i],describe(r){const e={name:"Opera Coast"},t=s.getFirstMatch(o,r)||s.getFirstMatch(/(?:coast)[\s/](\d+(\.?_?\d+)+)/i,r);return t&&(e.version=t),e}},{test:[/opt\/\d+(?:.?_?\d+)+/i],describe(r){const e={name:"Opera Touch"},t=s.getFirstMatch(/(?:opt)[\s/](\d+(\.?_?\d+)+)/i,r)||s.getFirstMatch(o,r);return t&&(e.version=t),e}},{test:[/yabrowser/i],describe(r){const e={name:"Yandex Browser"},t=s.getFirstMatch(/(?:yabrowser)[\s/](\d+(\.?_?\d+)+)/i,r)||s.getFirstMatch(o,r);return t&&(e.version=t),e}},{test:[/ucbrowser/i],describe(r){const e={name:"UC Browser"},t=s.getFirstMatch(o,r)||s.getFirstMatch(/(?:ucbrowser)[\s/](\d+(\.?_?\d+)+)/i,r);return t&&(e.version=t),e}},{test:[/Maxthon|mxios/i],describe(r){const e={name:"Maxthon"},t=s.getFirstMatch(o,r)||s.getFirstMatch(/(?:Maxthon|mxios)[\s/](\d+(\.?_?\d+)+)/i,r);return t&&(e.version=t),e}},{test:[/epiphany/i],describe(r){const e={name:"Epiphany"},t=s.getFirstMatch(o,r)||s.getFirstMatch(/(?:epiphany)[\s/](\d+(\.?_?\d+)+)/i,r);return t&&(e.version=t),e}},{test:[/puffin/i],describe(r){const e={name:"Puffin"},t=s.getFirstMatch(o,r)||s.getFirstMatch(/(?:puffin)[\s/](\d+(\.?_?\d+)+)/i,r);return t&&(e.version=t),e}},{test:[/sleipnir/i],describe(r){const e={name:"Sleipnir"},t=s.getFirstMatch(o,r)||s.getFirstMatch(/(?:sleipnir)[\s/](\d+(\.?_?\d+)+)/i,r);return t&&(e.version=t),e}},{test:[/k-meleon/i],describe(r){const e={name:"K-Meleon"},t=s.getFirstMatch(o,r)||s.getFirstMatch(/(?:k-meleon)[\s/](\d+(\.?_?\d+)+)/i,r);return t&&(e.version=t),e}},{test:[/micromessenger/i],describe(r){const e={name:"WeChat"},t=s.getFirstMatch(/(?:micromessenger)[\s/](\d+(\.?_?\d+)+)/i,r)||s.getFirstMatch(o,r);return t&&(e.version=t),e}},{test:[/qqbrowser/i],describe(r){const e={name:/qqbrowserlite/i.test(r)?"QQ Browser Lite":"QQ Browser"},t=s.getFirstMatch(/(?:qqbrowserlite|qqbrowser)[/](\d+(\.?_?\d+)+)/i,r)||s.getFirstMatch(o,r);return t&&(e.version=t),e}},{test:[/msie|trident/i],describe(r){const e={name:"Internet Explorer"},t=s.getFirstMatch(/(?:msie |rv:)(\d+(\.?_?\d+)+)/i,r);return t&&(e.version=t),e}},{test:[/\sedg\//i],describe(r){const e={name:"Microsoft Edge"},t=s.getFirstMatch(/\sedg\/(\d+(\.?_?\d+)+)/i,r);return t&&(e.version=t),e}},{test:[/edg([ea]|ios)/i],describe(r){const e={name:"Microsoft Edge"},t=s.getSecondMatch(/edg([ea]|ios)\/(\d+(\.?_?\d+)+)/i,r);return t&&(e.version=t),e}},{test:[/vivaldi/i],describe(r){const e={name:"Vivaldi"},t=s.getFirstMatch(/vivaldi\/(\d+(\.?_?\d+)+)/i,r);return t&&(e.version=t),e}},{test:[/seamonkey/i],describe(r){const e={name:"SeaMonkey"},t=s.getFirstMatch(/seamonkey\/(\d+(\.?_?\d+)+)/i,r);return t&&(e.version=t),e}},{test:[/sailfish/i],describe(r){const e={name:"Sailfish"},t=s.getFirstMatch(/sailfish\s?browser\/(\d+(\.\d+)?)/i,r);return t&&(e.version=t),e}},{test:[/silk/i],describe(r){const e={name:"Amazon Silk"},t=s.getFirstMatch(/silk\/(\d+(\.?_?\d+)+)/i,r);return t&&(e.version=t),e}},{test:[/phantom/i],describe(r){const e={name:"PhantomJS"},t=s.getFirstMatch(/phantomjs\/(\d+(\.?_?\d+)+)/i,r);return t&&(e.version=t),e}},{test:[/slimerjs/i],describe(r){const e={name:"SlimerJS"},t=s.getFirstMatch(/slimerjs\/(\d+(\.?_?\d+)+)/i,r);return t&&(e.version=t),e}},{test:[/blackberry|\bbb\d+/i,/rim\stablet/i],describe(r){const e={name:"BlackBerry"},t=s.getFirstMatch(o,r)||s.getFirstMatch(/blackberry[\d]+\/(\d+(\.?_?\d+)+)/i,r);return t&&(e.version=t),e}},{test:[/(web|hpw)[o0]s/i],describe(r){const e={name:"WebOS Browser"},t=s.getFirstMatch(o,r)||s.getFirstMatch(/w(?:eb)?[o0]sbrowser\/(\d+(\.?_?\d+)+)/i,r);return t&&(e.version=t),e}},{test:[/bada/i],describe(r){const e={name:"Bada"},t=s.getFirstMatch(/dolfin\/(\d+(\.?_?\d+)+)/i,r);return t&&(e.version=t),e}},{test:[/tizen/i],describe(r){const e={name:"Tizen"},t=s.getFirstMatch(/(?:tizen\s?)?browser\/(\d+(\.?_?\d+)+)/i,r)||s.getFirstMatch(o,r);return t&&(e.version=t),e}},{test:[/qupzilla/i],describe(r){const e={name:"QupZilla"},t=s.getFirstMatch(/(?:qupzilla)[\s/](\d+(\.?_?\d+)+)/i,r)||s.getFirstMatch(o,r);return t&&(e.version=t),e}},{test:[/firefox|iceweasel|fxios/i],describe(r){const e={name:"Firefox"},t=s.getFirstMatch(/(?:firefox|iceweasel|fxios)[\s/](\d+(\.?_?\d+)+)/i,r);return t&&(e.version=t),e}},{test:[/electron/i],describe(r){const e={name:"Electron"},t=s.getFirstMatch(/(?:electron)\/(\d+(\.?_?\d+)+)/i,r);return t&&(e.version=t),e}},{test:[/MiuiBrowser/i],describe(r){const e={name:"Miui"},t=s.getFirstMatch(/(?:MiuiBrowser)[\s/](\d+(\.?_?\d+)+)/i,r);return t&&(e.version=t),e}},{test:[/chromium/i],describe(r){const e={name:"Chromium"},t=s.getFirstMatch(/(?:chromium)[\s/](\d+(\.?_?\d+)+)/i,r)||s.getFirstMatch(o,r);return t&&(e.version=t),e}},{test:[/chrome|crios|crmo/i],describe(r){const e={name:"Chrome"},t=s.getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.?_?\d+)+)/i,r);return t&&(e.version=t),e}},{test:[/GSA/i],describe(r){const e={name:"Google Search"},t=s.getFirstMatch(/(?:GSA)\/(\d+(\.?_?\d+)+)/i,r);return t&&(e.version=t),e}},{test(r){const e=!r.test(/like android/i),t=r.test(/android/i);return e&&t},describe(r){const e={name:"Android Browser"},t=s.getFirstMatch(o,r);return t&&(e.version=t),e}},{test:[/playstation 4/i],describe(r){const e={name:"PlayStation 4"},t=s.getFirstMatch(o,r);return t&&(e.version=t),e}},{test:[/safari|applewebkit/i],describe(r){const e={name:"Safari"},t=s.getFirstMatch(o,r);return t&&(e.version=t),e}},{test:[/.*/i],describe(r){const e=/^(.*)\/(.*) /,t=/^(.*)\/(.*)[ \t]\((.*)/,n=r.search("\\(")!==-1?t:e;return{name:s.getFirstMatch(n,r),version:s.getSecondMatch(n,r)}}}],_=[{test:[/Roku\/DVP/],describe(r){const e=s.getFirstMatch(/Roku\/DVP-(\d+\.\d+)/i,r);return{name:l.Roku,version:e}}},{test:[/windows phone/i],describe(r){const e=s.getFirstMatch(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i,r);return{name:l.WindowsPhone,version:e}}},{test:[/windows /i],describe(r){const e=s.getFirstMatch(/Windows ((NT|XP)( \d\d?.\d)?)/i,r),t=s.getWindowsVersionName(e);return{name:l.Windows,version:e,versionName:t}}},{test:[/Macintosh(.*?) FxiOS(.*?)\//],describe(r){const e={name:l.iOS},t=s.getSecondMatch(/(Version\/)(\d[\d.]+)/,r);return t&&(e.version=t),e}},{test:[/macintosh/i],describe(r){const e=s.getFirstMatch(/mac os x (\d+(\.?_?\d+)+)/i,r).replace(/[_\s]/g,"."),t=s.getMacOSVersionName(e),i={name:l.MacOS,version:e};return t&&(i.versionName=t),i}},{test:[/(ipod|iphone|ipad)/i],describe(r){const e=s.getFirstMatch(/os (\d+([_\s]\d+)*) like mac os x/i,r).replace(/[_\s]/g,".");return{name:l.iOS,version:e}}},{test(r){const e=!r.test(/like android/i),t=r.test(/android/i);return e&&t},describe(r){const e=s.getFirstMatch(/android[\s/-](\d+(\.\d+)*)/i,r),t=s.getAndroidVersionName(e),i={name:l.Android,version:e};return t&&(i.versionName=t),i}},{test:[/(web|hpw)[o0]s/i],describe(r){const e=s.getFirstMatch(/(?:web|hpw)[o0]s\/(\d+(\.\d+)*)/i,r),t={name:l.WebOS};return e&&e.length&&(t.version=e),t}},{test:[/blackberry|\bbb\d+/i,/rim\stablet/i],describe(r){const e=s.getFirstMatch(/rim\stablet\sos\s(\d+(\.\d+)*)/i,r)||s.getFirstMatch(/blackberry\d+\/(\d+([_\s]\d+)*)/i,r)||s.getFirstMatch(/\bbb(\d+)/i,r);return{name:l.BlackBerry,version:e}}},{test:[/bada/i],describe(r){const e=s.getFirstMatch(/bada\/(\d+(\.\d+)*)/i,r);return{name:l.Bada,version:e}}},{test:[/tizen/i],describe(r){const e=s.getFirstMatch(/tizen[/\s](\d+(\.\d+)*)/i,r);return{name:l.Tizen,version:e}}},{test:[/linux/i],describe(){return{name:l.Linux}}},{test:[/CrOS/],describe(){return{name:l.ChromeOS}}},{test:[/PlayStation 4/],describe(r){const e=s.getFirstMatch(/PlayStation 4[/\s](\d+(\.\d+)*)/i,r);return{name:l.PlayStation4,version:e}}}],A=[{test:[/googlebot/i],describe(){return{type:"bot",vendor:"Google"}}},{test:[/huawei/i],describe(r){const e=s.getFirstMatch(/(can-l01)/i,r)&&"Nova",t={type:c.mobile,vendor:"Huawei"};return e&&(t.model=e),t}},{test:[/nexus\s*(?:7|8|9|10).*/i],describe(){return{type:c.tablet,vendor:"Nexus"}}},{test:[/ipad/i],describe(){return{type:c.tablet,vendor:"Apple",model:"iPad"}}},{test:[/Macintosh(.*?) FxiOS(.*?)\//],describe(){return{type:c.tablet,vendor:"Apple",model:"iPad"}}},{test:[/kftt build/i],describe(){return{type:c.tablet,vendor:"Amazon",model:"Kindle Fire HD 7"}}},{test:[/silk/i],describe(){return{type:c.tablet,vendor:"Amazon"}}},{test:[/tablet(?! pc)/i],describe(){return{type:c.tablet}}},{test(r){const e=r.test(/ipod|iphone/i),t=r.test(/like (ipod|iphone)/i);return e&&!t},describe(r){const e=s.getFirstMatch(/(ipod|iphone)/i,r);return{type:c.mobile,vendor:"Apple",model:e}}},{test:[/nexus\s*[0-6].*/i,/galaxy nexus/i],describe(){return{type:c.mobile,vendor:"Nexus"}}},{test:[/[^-]mobi/i],describe(){return{type:c.mobile}}},{test(r){return r.getBrowserName(!0)==="blackberry"},describe(){return{type:c.mobile,vendor:"BlackBerry"}}},{test(r){return r.getBrowserName(!0)==="bada"},describe(){return{type:c.mobile}}},{test(r){return r.getBrowserName()==="windows phone"},describe(){return{type:c.mobile,vendor:"Microsoft"}}},{test(r){const e=Number(String(r.getOSVersion()).split(".")[0]);return r.getOSName(!0)==="android"&&e>=3},describe(){return{type:c.tablet}}},{test(r){return r.getOSName(!0)==="android"},describe(){return{type:c.mobile}}},{test(r){return r.getOSName(!0)==="macos"},describe(){return{type:c.desktop,vendor:"Apple"}}},{test(r){return r.getOSName(!0)==="windows"},describe(){return{type:c.desktop}}},{test(r){return r.getOSName(!0)==="linux"},describe(){return{type:c.desktop}}},{test(r){return r.getOSName(!0)==="playstation 4"},describe(){return{type:c.tv}}},{test(r){return r.getOSName(!0)==="roku"},describe(){return{type:c.tv}}}],N=[{test(r){return r.getBrowserName(!0)==="microsoft edge"},describe(r){if(/\sedg\//i.test(r))return{name:h.Blink};const t=s.getFirstMatch(/edge\/(\d+(\.?_?\d+)+)/i,r);return{name:h.EdgeHTML,version:t}}},{test:[/trident/i],describe(r){const e={name:h.Trident},t=s.getFirstMatch(/trident\/(\d+(\.?_?\d+)+)/i,r);return t&&(e.version=t),e}},{test(r){return r.test(/presto/i)},describe(r){const e={name:h.Presto},t=s.getFirstMatch(/presto\/(\d+(\.?_?\d+)+)/i,r);return t&&(e.version=t),e}},{test(r){const e=r.test(/gecko/i),t=r.test(/like gecko/i);return e&&!t},describe(r){const e={name:h.Gecko},t=s.getFirstMatch(/gecko\/(\d+(\.?_?\d+)+)/i,r);return t&&(e.version=t),e}},{test:[/(apple)?webkit\/537\.36/i],describe(){return{name:h.Blink}}},{test:[/(apple)?webkit/i],describe(r){const e={name:h.WebKit},t=s.getFirstMatch(/webkit\/(\d+(\.?_?\d+)+)/i,r);return t&&(e.version=t),e}}];class y{constructor(e,t=!1){if(e==null||e==="")throw new Error("UserAgent parameter can't be empty");this._ua=e,this.parsedResult={},t!==!0&&this.parse()}getUA(){return this._ua}test(e){return e.test(this._ua)}parseBrowser(){this.parsedResult.browser={};const e=s.find(P,t=>{if(typeof t.test=="function")return t.test(this);if(t.test instanceof Array)return t.test.some(i=>this.test(i));throw new Error("Browser's test function is not valid")});return e&&(this.parsedResult.browser=e.describe(this.getUA())),this.parsedResult.browser}getBrowser(){return this.parsedResult.browser?this.parsedResult.browser:this.parseBrowser()}getBrowserName(e){return e?String(this.getBrowser().name).toLowerCase()||"":this.getBrowser().name||""}getBrowserVersion(){return this.getBrowser().version}getOS(){return this.parsedResult.os?this.parsedResult.os:this.parseOS()}parseOS(){this.parsedResult.os={};const e=s.find(_,t=>{if(typeof t.test=="function")return t.test(this);if(t.test instanceof Array)return t.test.some(i=>this.test(i));throw new Error("Browser's test function is not valid")});return e&&(this.parsedResult.os=e.describe(this.getUA())),this.parsedResult.os}getOSName(e){const{name:t}=this.getOS();return e?String(t).toLowerCase()||"":t||""}getOSVersion(){return this.getOS().version}getPlatform(){return this.parsedResult.platform?this.parsedResult.platform:this.parsePlatform()}getPlatformType(e=!1){const{type:t}=this.getPlatform();return e?String(t).toLowerCase()||"":t||""}parsePlatform(){this.parsedResult.platform={};const e=s.find(A,t=>{if(typeof t.test=="function")return t.test(this);if(t.test instanceof Array)return t.test.some(i=>this.test(i));throw new Error("Browser's test function is not valid")});return e&&(this.parsedResult.platform=e.describe(this.getUA())),this.parsedResult.platform}getEngine(){return this.parsedResult.engine?this.parsedResult.engine:this.parseEngine()}getEngineName(e){return e?String(this.getEngine().name).toLowerCase()||"":this.getEngine().name||""}parseEngine(){this.parsedResult.engine={};const e=s.find(N,t=>{if(typeof t.test=="function")return t.test(this);if(t.test instanceof Array)return t.test.some(i=>this.test(i));throw new Error("Browser's test function is not valid")});return e&&(this.parsedResult.engine=e.describe(this.getUA())),this.parsedResult.engine}parse(){return this.parseBrowser(),this.parseOS(),this.parsePlatform(),this.parseEngine(),this}getResult(){return s.assign({},this.parsedResult)}satisfies(e){const t={};let i=0;const n={};let d=0;if(Object.keys(e).forEach(m=>{const a=e[m];typeof a=="string"?(n[m]=a,d+=1):typeof a=="object"&&(t[m]=a,i+=1)}),i>0){const m=Object.keys(t),a=s.find(m,f=>this.isOS(f));if(a){const f=this.satisfies(t[a]);if(f!==void 0)return f}const g=s.find(m,f=>this.isPlatform(f));if(g){const f=this.satisfies(t[g]);if(f!==void 0)return f}}if(d>0){const m=Object.keys(n),a=s.find(m,g=>this.isBrowser(g,!0));if(a!==void 0)return this.compareVersion(n[a])}}isBrowser(e,t=!1){const i=this.getBrowserName().toLowerCase();let n=e.toLowerCase();const d=s.getBrowserTypeByAlias(n);return t&&d&&(n=d.toLowerCase()),n===i}compareVersion(e){let t=[0],i=e,n=!1;const d=this.getBrowserVersion();if(typeof d=="string")return e[0]===">"||e[0]==="<"?(i=e.substr(1),e[1]==="="?(n=!0,i=e.substr(2)):t=[],e[0]===">"?t.push(1):t.push(-1)):e[0]==="="?i=e.substr(1):e[0]==="~"&&(n=!0,i=e.substr(1)),t.indexOf(s.compareVersions(d,i,n))>-1}isOS(e){return this.getOSName(!0)===String(e).toLowerCase()}isPlatform(e){return this.getPlatformType(!0)===String(e).toLowerCase()}isEngine(e){return this.getEngineName(!0)===String(e).toLowerCase()}is(e,t=!1){return this.isBrowser(e,t)||this.isOS(e)||this.isPlatform(e)}some(e=[]){return e.some(t=>this.is(t))}}/*!
 * Bowser - a browser detector
 * https://github.com/lancedikson/bowser
 * MIT License | (c) Dustin Diaz 2012-2015
 * MIT License | (c) Denis Demchenko 2015-2019
 */class E{static getParser(e,t=!1){if(typeof e!="string")throw new Error("UserAgent should be a string");return new y(e,t)}static parse(e){return new y(e).getResult()}static get BROWSER_MAP(){return S}static get ENGINE_MAP(){return h}static get OS_MAP(){return l}static get PLATFORMS_MAP(){return c}}function x(){const r={};if(typeof window<"u"){const e=E.getParser(window.navigator.userAgent);r.browserName=e.getBrowserName(),r.browserVersion=e.getBrowserVersion(),r.osName=e.getOSName(),r.osVersion=e.getOSVersion(),r.platformType=e.getPlatformType()}return r}function T(){let r="";return document&&document.referrer?(r=document.referrer,localStorage.setItem("referrer",r)):r=localStorage.getItem("referrer")||"none",r}function R(){return new Date().toISOString()}function L(r){return new Date(r).toLocaleString("en-US",{timeZone:"America/Los_Angeles"})}function C(){let r="";return typeof document<"u"&&document.title&&(r=document.title),r}function V(){let r="";return typeof window<"u"&&window.location&&window.location.href&&(r=window.location.href),r}function D(){let r="";return typeof window<"u"&&window.location&&window.location.hostname&&(r=window.location.hostname),r}function W(r){const e=r instanceof UIEvent&&r.view?r.view.location.href:"",t=r.target;let i={};return r instanceof MouseEvent&&(i={clientX:r.clientX,clientY:r.clientY,pageX:r.pageX,pageY:r.pageY}),{eventType:r.type,eventTimeStamp:r.timeStamp,srcElement:r.srcElement,viewUrl:e,outerHTML:t?t.outerHTML:null,outerText:t?t.outerText:null,targetId:t?t.id:null,className:t?t.className:null,...i}}function I(r){const e=r&&r.formData;if(e)try{return JSON.parse(e)}catch(t){console.error("Error parsing formData from localStorage:",t)}return null}console.log("👋 Hello world");async function z(r,e,t){const i="http://localhost:4000/api/events",n=b(),d=B(),u=x(),m=T(),a=R(),g=L(a),f=k(),M=C(),v=V(),j=D(),q=W(r),F=I(f);console.log("👋 formData: ",F);try{const w=await fetch(i,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({event:{event_name:e,properties:{a:1,b:2,...t,...n,...d,...u,referrer:m,created_at:a,created_at_pst:g,...f,page_title:M,page_url:v,host_name:j,...q,...F}}})});if(!w.ok)throw console.log("👉response: ",w),new Error("Failed to send event message");const G=await w.json();console.log("Event message sent successfully:",G)}catch(w){console.error("Error sending event message:",w)}}p.reportEvent=z,Object.defineProperty(p,Symbol.toStringTag,{value:"Module"})});
