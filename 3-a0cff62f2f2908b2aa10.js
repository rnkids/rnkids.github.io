(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{188:function(e,t,r){"use strict";r(90),Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"monaco",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(t,"noop",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"deepMerge",{enumerable:!0,get:function(){return u.default}});var n=i(r(199)),o=i(r(201)),u=i(r(202));function i(e){return e&&e.__esModule?e:{default:e}}},189:function(e,t,r){var n=r(1);n(n.S+n.F*!r(7),"Object",{defineProperties:r(130)})},190:function(e,t,r){var n=r(1),o=r(197),u=r(31),i=r(92),a=r(129);n(n.S,"Object",{getOwnPropertyDescriptors:function(e){for(var t,r,n=u(e),c=i.f,l=o(n),d={},f=0;l.length>f;)void 0!==(r=c(n,t=l[f++]))&&a(d,t,r);return d}})},191:function(e,t,r){"use strict";r(90),Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"DiffEditor",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"ControlledEditor",{enumerable:!0,get:function(){return u.default}}),Object.defineProperty(t,"monaco",{enumerable:!0,get:function(){return i.monaco}}),t.default=void 0;var n=a(r(195)),o=a(r(206)),u=a(r(209)),i=r(188);function a(e){return e&&e.__esModule?e:{default:e}}var c=n.default;t.default=c},192:function(e,t,r){"use strict";var n;r(90),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=((n=r(198))&&n.__esModule?n:{default:n}).default;t.default=o},193:function(e,t,r){"use strict";r(90),Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useMount",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(t,"useUpdate",{enumerable:!0,get:function(){return o.default}});var n=u(r(203)),o=u(r(204));function u(e){return e&&e.__esModule?e:{default:e}}},194:function(e,t,r){"use strict";r(90),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={"night-dark":{base:"vs-dark",inherit:!0,rules:[],colors:{"editor.background":"#202124"}}};t.default=n},195:function(e,t,r){"use strict";r(90),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,o=r(0),u=(n=r(196))&&n.__esModule?n:{default:n};var i=(0,o.memo)(u.default);t.default=i},196:function(e,t,r){"use strict";r(67),r(68),r(51),r(189),r(190),r(39),r(66),r(38),r(29),r(30),r(13),r(49),r(90),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(r(0)),o=d(r(50)),u=d(r(192)),i=r(188),a=r(193),c=d(r(194)),l=d(r(205));function d(e){return e&&e.__esModule?e:{default:e}}function f(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?f(r,!0).forEach(function(t){p(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):f(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function v(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=[],n=!0,o=!1,u=void 0;try{for(var i,a=e[Symbol.iterator]();!(n=(i=a.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(c){o=!0,u=c}finally{try{n||null==a.return||a.return()}finally{if(o)throw u}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var g=function(e){var t=e.value,r=e.language,o=e.editorDidMount,d=e.theme,f=e.line,p=e.width,g=e.height,y=e.loading,b=e.options,h=v((0,n.useState)(!1),2),O=h[0],m=h[1],j=v((0,n.useState)(!0),2),P=j[0],_=j[1],w=(0,n.useRef)(),M=(0,n.useRef)(),E=(0,n.useRef)();(0,a.useMount)(function(e){return i.monaco.init().then(function(e){return(M.current=e)&&_(!1)}).catch(function(e){return console.error("An error occurred during initialization of Monaco: ",e)}),D}),(0,a.useUpdate)(function(e){b.readOnly?w.current.setValue(t):(w.current.executeEdits("",[{range:w.current.getModel().getFullModelRange(),text:t}]),w.current.pushUndoStop())},[t],O),(0,a.useUpdate)(function(e){M.current.editor.setModelLanguage(w.current.getModel(),r)},[r],O),(0,a.useUpdate)(function(e){w.current.setScrollPosition({scrollTop:f})},[f],O),(0,a.useUpdate)(function(e){M.current.editor.setTheme(d)},[d],O),(0,a.useUpdate)(function(e){w.current.updateOptions(b)},[b],O);var S=(0,n.useCallback)(function(e){w.current=M.current.editor.create(E.current,s({value:t,language:r,automaticLayout:!0},b)),o(w.current.getValue.bind(w.current),w.current),M.current.editor.defineTheme("dark",c.default["night-dark"]),M.current.editor.setTheme(d),m(!0)},[o,r,b,d,t]);(0,n.useEffect)(function(e){!P&&!O&&S()},[P,O,S]);var D=function(e){return w.current.dispose()};return n.default.createElement("section",{style:s({},l.default.wrapper,{width:p,height:g})},!O&&n.default.createElement(u.default,{content:y}),n.default.createElement("div",{ref:E,style:s({},l.default.fullWidth,{},!O&&l.default.hide)}))};g.propTypes={value:o.default.string,language:o.default.string,editorDidMount:o.default.func,theme:o.default.string,line:o.default.number,width:o.default.oneOfType([o.default.number,o.default.string]),height:o.default.oneOfType([o.default.number,o.default.string]),loading:o.default.oneOfType([o.default.element,o.default.string]),options:o.default.object},g.defaultProps={editorDidMount:i.noop,theme:"light",width:"100%",height:"100%",loading:"Loading...",options:{}};var y=g;t.default=y},197:function(e,t,r){var n=r(91),o=r(69),u=r(4),i=r(5).Reflect;e.exports=i&&i.ownKeys||function(e){var t=n.f(u(e)),r=o.f;return r?t.concat(r(e)):t}},198:function(e,t,r){"use strict";r(90),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,o=(n=r(0))&&n.__esModule?n:{default:n};var u={display:"flex",height:"100%",width:"100%",justifyContent:"center",alignItems:"center"};var i=function(e){var t=e.content;return o.default.createElement("div",{style:u},t)};t.default=i},199:function(e,t,r){"use strict";r(40),r(13),r(90),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,o=(n=r(200))&&n.__esModule?n:{default:n},u=r(188);function i(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var c=new(function(){function e(){var t=this,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),a(this,"handleMainScriptLoad",function(e){document.removeEventListener("monaco_init",t.handleMainScriptLoad),t.resolve(window.monaco)}),a(this,"isInitialized",!1),a(this,"wrapperPromise",new Promise(function(e,r){t.resolve=e,t.reject=r})),this.__config=r}var t,r,n;return t=e,(r=[{key:"config",value:function(e){return e&&(this.__config=(0,u.deepMerge)(this.__config,e)),this}},{key:"injectScripts",value:function(e){document.body.appendChild(e)}},{key:"createScript",value:function(e){var t=document.createElement("script");return e&&(t.src=e),t}},{key:"createMonacoLoaderScript",value:function(e){var t=this,r=this.createScript(this.__config.urls.monacoLoader);return r.onload=function(r){return t.injectScripts(e)},r.onerror=this.reject,r}},{key:"createMainScript",value:function(){var e=this.createScript();return e.innerHTML="\n      require.config({ paths: { 'vs': '".concat(this.__config.urls.monacoBase,"' } });\n      require(['vs/editor/editor.main'], function() {\n        document.dispatchEvent(new Event('monaco_init'));\n      });\n    "),e.onerror=this.reject,e}},{key:"init",value:function(){if(!this.isInitialized){if(window.monaco&&window.monaco.editor)return new Promise(function(e,t){return e(window.monaco)});document.addEventListener("monaco_init",this.handleMainScriptLoad);var e=this.createMainScript(),t=this.createMonacoLoaderScript(e);this.injectScripts(t)}return this.isInitialized=!0,this.wrapperPromise}}])&&i(t.prototype,r),n&&i(t,n),e}())(o.default);t.default=c},200:function(e,t,r){"use strict";r(90),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={urls:{monacoLoader:"https://cdn.jsdelivr.net/npm/monaco-editor@0.17.1/min/vs/loader.js",monacoBase:"https://cdn.jsdelivr.net/npm/monaco-editor@0.17.1/min/vs"}};t.default=n},201:function(e,t,r){"use strict";r(90),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=function(e){};t.default=n},202:function(e,t,r){"use strict";function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}r(22),r(189),r(190),r(39),r(66),r(38),r(29),r(30),r(13),r(49),r(90),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=function e(t,r){return Object.keys(r).forEach(function(n){r[n]instanceof Object&&Object.assign(r[n],e(t[n],r[n]))}),function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(r,!0).forEach(function(t){o(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}({},t,{},r)};t.default=u},203:function(e,t,r){"use strict";r(90),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(0),o=function(e){return(0,n.useEffect)(e,[])};t.default=o},204:function(e,t,r){"use strict";r(90),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(0),o=function(e,t){var r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],o=(0,n.useRef)(!0);(0,n.useEffect)(o.current||!r?function(e){o.current=!1}:e,t)};t.default=o},205:function(e,t,r){"use strict";r(90),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={wrapper:{display:"flex",position:"relative",textAlign:"initial"},fullWidth:{width:"100%"},hide:{display:"none"}};t.default=n},206:function(e,t,r){"use strict";r(90),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,o=r(0),u=(n=r(207))&&n.__esModule?n:{default:n};var i=(0,o.memo)(u.default);t.default=i},207:function(e,t,r){"use strict";r(67),r(68),r(51),r(189),r(190),r(39),r(66),r(38),r(29),r(30),r(13),r(49),r(90),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(r(0)),o=d(r(50)),u=d(r(192)),i=r(188),a=r(193),c=d(r(194)),l=d(r(208));function d(e){return e&&e.__esModule?e:{default:e}}function f(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?f(r,!0).forEach(function(t){p(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):f(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function v(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=[],n=!0,o=!1,u=void 0;try{for(var i,a=e[Symbol.iterator]();!(n=(i=a.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(c){o=!0,u=c}finally{try{n||null==a.return||a.return()}finally{if(o)throw u}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var g=function(e){var t=e.original,r=e.modified,o=e.language,d=e.originalLanguage,f=e.modifiedLanguage,p=e.editorDidMount,g=e.theme,y=e.line,b=e.width,h=e.height,O=e.loading,m=e.options,j=v((0,n.useState)(!1),2),P=j[0],_=j[1],w=v((0,n.useState)(!0),2),M=w[0],E=w[1],S=(0,n.useRef)(),D=(0,n.useRef)(),k=(0,n.useRef)();(0,a.useMount)(function(e){return i.monaco.init().then(function(e){return(D.current=e)&&E(!1)}).catch(function(e){return console.error("An error occurred during initialization of Monaco: ",e)}),C}),(0,a.useUpdate)(function(e){S.current.getModel().modified.setValue(r)},[r],P),(0,a.useUpdate)(function(e){S.current.getModel().original.setValue(t)},[t],P),(0,a.useUpdate)(function(e){var t=S.current.getModel(),r=t.original,n=t.modified;D.current.editor.setModelLanguage(r,d||o),D.current.editor.setModelLanguage(n,f||o)},[o,d,f],P),(0,a.useUpdate)(function(e){S.current.setScrollPosition({scrollTop:y})},[y],P),(0,a.useUpdate)(function(e){D.current.editor.setTheme(g)},[g],P),(0,a.useUpdate)(function(e){S.current.updateOptions(m)},[m],P);var L=(0,n.useCallback)(function(e){var n=D.current.editor.createModel(t,d||o),u=D.current.editor.createModel(r,f||o);S.current.setModel({original:n,modified:u})},[o,r,f,t,d]),T=(0,n.useCallback)(function(e){S.current=D.current.editor.createDiffEditor(k.current,s({automaticLayout:!0},m)),L();var t=S.current.getModel(),r=t.original,n=t.modified;p(n.getValue.bind(n),r.getValue.bind(r),S.current),D.current.editor.defineTheme("dark",c.default["night-dark"]),D.current.editor.setTheme(g),_(!0)},[p,m,g,L]);(0,n.useEffect)(function(e){!M&&!P&&T()},[M,P,T]);var C=function(e){return S.current.dispose()};return n.default.createElement("section",{style:s({},l.default.wrapper,{width:b,height:h})},!P&&n.default.createElement(u.default,{content:O}),n.default.createElement("div",{ref:k,style:s({},l.default.fullWidth,{},!P&&l.default.hide)}))};g.propTypes={original:o.default.string,modified:o.default.string,language:o.default.string,originalLanguage:o.default.string,modifiedLanguage:o.default.string,editorDidMount:o.default.func,theme:o.default.string,line:o.default.number,width:o.default.oneOfType([o.default.number,o.default.string]),height:o.default.oneOfType([o.default.number,o.default.string]),loading:o.default.oneOfType([o.default.element,o.default.string]),options:o.default.object},g.defaultProps={editorDidMount:i.noop,theme:"light",width:"100%",height:"100%",loading:"Loading...",options:{}};var y=g;t.default=y},208:function(e,t,r){"use strict";r(90),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={wrapper:{display:"flex",position:"relative",textAlign:"initial"},fullWidth:{width:"100%"},hide:{display:"none"}};t.default=n},209:function(e,t,r){"use strict";r(90),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,o=r(0),u=(n=r(210))&&n.__esModule?n:{default:n};var i=(0,o.memo)(u.default);t.default=i},210:function(e,t,r){"use strict";r(29),r(30),r(13),r(49),r(32),r(38),r(22),r(90),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(r(0)),o=a(r(50)),u=a(r(191)),i=r(188);function a(e){return e&&e.__esModule?e:{default:e}}function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},u=Object.keys(e);for(n=0;n<u.length;n++)r=u[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(n=0;n<u.length;n++)r=u[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var d=function(e){var t=e.value,r=e.onChange,o=e.editorDidMount,i=l(e,["value","onChange","editorDidMount"]);return n.default.createElement(u.default,c({value:t,editorDidMount:function(e,t){t.onDidChangeModelContent(function(e){var n=t.getValue(),o=r(e,n);"string"==typeof o&&n!==o&&t.setValue(o)}),o(e,t)}},i))};d.propTypes={value:o.default.string,editorDidMount:o.default.func,onChange:o.default.func},d.defaultProps={editorDidMount:i.noop,onChange:i.noop};var f=d;t.default=f}}]);
//# sourceMappingURL=3-a0cff62f2f2908b2aa10.js.map