(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{246:function(e,t,r){"use strict";r.r(t);var n=r(0),o=r.n(n),a=r(27),i=r.n(a),c=(r(268),r(127),r(87),r(182),r(78),r(36),r(81),r(193),r(28),r(179),r(5),r(7),r(2),r(10),r(308)),u=r(330),s=r(102),l=r(316),d=r(329),p=r(269),f=r(260);function g(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}function m(e,t,r){return(m=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}()?Reflect.construct:function(e,t,r){var n=[null];n.push.apply(n,t);var o=new(Function.bind.apply(e,n));return r&&h(o,r.prototype),o}).apply(null,arguments)}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function b(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function v(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}var y=Object(n.memo)(Object(c.a)("div").withConfig({componentId:"sc-17zcach-0"})(function(e){return x(e)})),x=function(e){var t=["alignContent","alignItems","alignSelf","aspectRatio","backfaceVisibility","backgroundColor","borderBottomColor","borderBottomLeftRadius","borderBottomRightRadius","borderBottomWidth","borderColor","borderLeftColor","borderLeftWidth","borderRadius","borderRightColor","borderRightWidth","borderStyle","borderTopColor","borderTopLeftRadius","borderTopRightRadius","borderTopWidth","borderWidth","bottom","color","decomposedMatrix","direction","display","elevation","flex","flexBasis","flexDirection","flexGrow","flexShrink","flexWrap","fontFamily","fontSize","fontStyle","fontVariant","fontWeight","height","includeFontPadding","justifyContent","left","letterSpacing","lineHeight","margin","marginBottom","marginHorizontal","marginLeft","marginRight","marginTop","marginVertical","maxHeight","maxWidth","minHeight","minWidth","opacity","overflow","overlayColor","padding","paddingBottom","paddingHorizontal","paddingLeft","paddingRight","paddingTop","paddingVertical","position","resizeMode","right","rotation","scaleX","scaleY","shadowColor","shadowOffset","shadowOpacity","shadowRadius","textAlign","textAlignVertical","textDecorationColor","textDecorationLine","textDecorationStyle","textShadowColor","textShadowOffset","textShadowRadius","tintColor","top","transform","transformMatrix","translateX","translateY","width","writingDirection","zIndex","border","boxShadow","flexFlow","font","textShadow","textDecoration","textDecorationLine","transform","bg","size","m","mt","mb","ml","mr","mx","my","p","pt","pb","pl","pr","px","py","backgroundImage","backgroundSize","backgroundPosition","backgroundRepeat"];return Object.keys(e).filter(function(e){return t.includes(e)}).filter(function(t){return!0!==e[t]}).filter(function(t){return null!==e[t]}).reduce(function(t,r){return"size"===r?(t.width=e[r],t.height=e[r]):t[function(e){switch(e){case"bg":return"backgroundColor";case"m":return"margin";case"mt":return"marginTop";case"mr":return"marginRight";case"mb":return"marginBottom";case"ml":return"marginLeft";case"mx":return"marginX";case"my":return"marginY";case"p":return"padding";case"pt":return"paddingTop";case"pr":return"paddingRight";case"pb":return"paddingBottom";case"pl":return"paddingLeft";case"px":return"paddingX";case"py":return"paddingY";default:return e}}(r)]=e[r],t},{})},C=(Object(n.createContext)(),function(e){var t=e.code,r=e.scope;Object(n.useEffect)(function(){var e=function(e){return Object(p.transform)(e,{presets:[["stage-0",{decoratorsLegacy:!0}],"react"]}).code}(t+"\n    render(<App />);\n    ");m(Function,b(Object.keys(r)).concat([e])).apply(void 0,b(Object.values(r)))},[t])}),w=function(e){var t=e.code,r=e.scope,n=v(e,["code","scope"]);return C({code:t,scope:r}),o.a.createElement("div",Object.assign({},n,{id:"preview"}))},R=function(e){function t(t){var r;return(r=e.call(this,t)||this).updateContent=function(e,t){r.setState({value:t},function(){r.props.onChange&&r.props.onChange(r.state.value)})},r.state={value:""},r}return g(t,e),t.getDerivedStateFromProps=function(e,t){return e.value!==t.prevValueProp?{value:e.value,prevValueProp:e.value}:null},t.prototype.render=function(){var e=this.props,t=e.value,r=(e.onChange,v(e,["value","onChange"]));return o.a.createElement(f.ControlledEditor,Object.assign({height:"90vh",theme:"dark",value:t,onChange:this.updateContent,language:"javascript",options:{fontSize:18}},r))},t}(n.Component),S=function(e){function t(t){var r;return(r=e.call(this,t)||this).state={error:null,errorInfo:null},r}g(t,e);var r=t.prototype;return r.componentDidCatch=function(e,t){this.setState({error:e,errorInfo:t}),setTimeout(function(){this.setState({error:null,errorInfo:null})}.bind(this),3e3)},r.render=function(){return this.state.errorInfo?o.a.createElement(y,{flex:1},o.a.createElement(y,{as:"h2",color:"red"},"Error"),o.a.createElement(y,{color:"darkblue"},this.state.error&&this.state.error.toString(),o.a.createElement("br",null),this.state.errorInfo.componentStack)):this.props.children},t}(n.Component),O={React:o.a,Fragment:o.a.Fragment,Component:o.a.Component,render:function(e){i.a.render(e,document.getElementById("preview"))},useEffect:n.useEffect,useContext:n.useContext,useState:n.useState,useRef:n.useRef,useReducer:n.useReducer,useMemo:n.useMemo,useCallback:n.useCallback,View:function(e){var t=e.src,r=v(e,["src"]);return t?o.a.createElement(y,Object.assign({as:u.a,source:{uri:t}},r,{imageStyle:{resizeMode:"stretch"}})):o.a.createElement(y,Object.assign({as:s.a},r))},Text:function(e){return o.a.createElement(y,Object.assign({as:l.a},e))},Button:function(e){return o.a.createElement(y,Object.assign({as:d.a},e))}};var j='\nconst App = () => <Text color="red">Hi Kids</Text>\n';t.default=function(){var e=Object(n.useState)(j),t=e[0],r=e[1];return o.a.createElement("div",null,o.a.createElement(R,{value:j,onChange:function(e){e!==t&&r(e)}}),o.a.createElement(y,{position:"absolute",top:0,right:0,width:300,height:600,justifyContent:"center",alignItems:"center",bg:"transparent",backgroundImage:"url('https://raw.githubusercontent.com/koenbok/Framer/master/extras/DeviceResources/iphone-6-silver.png')",backgroundSize:"100% 100%",backgroundRepeat:"no-repeat"},o.a.createElement(S,null,o.a.createElement(w,{code:t,scope:O}))))}}}]);
//# sourceMappingURL=component---src-pages-index-js-30d7a67147f67be00add.js.map