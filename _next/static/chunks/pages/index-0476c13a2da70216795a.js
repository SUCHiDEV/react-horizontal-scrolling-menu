(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{9713:function(e){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},2705:function(e,t,n){var r=n(5639).Symbol;e.exports=r},4239:function(e,t,n){var r=n(2705),o=n(9607),i=n(2333),a=r?r.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":a&&a in Object(e)?o(e):i(e)}},7561:function(e,t,n){var r=n(7990),o=/^\s+/;e.exports=function(e){return e?e.slice(0,r(e)+1).replace(o,""):e}},1957:function(e,t,n){var r="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g;e.exports=r},9607:function(e,t,n){var r=n(2705),o=Object.prototype,i=o.hasOwnProperty,a=o.toString,s=r?r.toStringTag:void 0;e.exports=function(e){var t=i.call(e,s),n=e[s];try{e[s]=void 0;var r=!0}catch(l){}var o=a.call(e);return r&&(t?e[s]=n:delete e[s]),o}},2333:function(e){var t=Object.prototype.toString;e.exports=function(e){return t.call(e)}},5639:function(e,t,n){var r=n(1957),o="object"==typeof self&&self&&self.Object===Object&&self,i=r||o||Function("return this")();e.exports=i},7990:function(e){var t=/\s/;e.exports=function(e){for(var n=e.length;n--&&t.test(e.charAt(n)););return n}},3279:function(e,t,n){var r=n(3218),o=n(7771),i=n(4841),a=Math.max,s=Math.min;e.exports=function(e,t,n){var l,u,c,d,f,p,v=0,h=!1,m=!1,g=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=l,r=u;return l=u=void 0,v=t,d=e.apply(r,n)}function b(e){return v=e,f=setTimeout(w,t),h?y(e):d}function x(e){var n=e-p;return void 0===p||n>=t||n<0||m&&e-v>=c}function w(){var e=o();if(x(e))return C(e);f=setTimeout(w,function(e){var n=t-(e-p);return m?s(n,c-(e-v)):n}(e))}function C(e){return f=void 0,g&&l?y(e):(l=u=void 0,d)}function S(){var e=o(),n=x(e);if(l=arguments,u=this,p=e,n){if(void 0===f)return b(p);if(m)return clearTimeout(f),f=setTimeout(w,t),y(p)}return void 0===f&&(f=setTimeout(w,t)),d}return t=i(t)||0,r(n)&&(h=!!n.leading,c=(m="maxWait"in n)?a(i(n.maxWait)||0,t):c,g="trailing"in n?!!n.trailing:g),S.cancel=function(){void 0!==f&&clearTimeout(f),v=0,l=p=u=f=void 0},S.flush=function(){return void 0===f?d:C(o())},S}},3218:function(e){e.exports=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}},7005:function(e){e.exports=function(e){return null!=e&&"object"==typeof e}},3448:function(e,t,n){var r=n(4239),o=n(7005);e.exports=function(e){return"symbol"==typeof e||o(e)&&"[object Symbol]"==r(e)}},7771:function(e,t,n){var r=n(5639);e.exports=function(){return r.Date.now()}},3493:function(e,t,n){var r=n(3279),o=n(3218);e.exports=function(e,t,n){var i=!0,a=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return o(n)&&(i="leading"in n?!!n.leading:i,a="trailing"in n?!!n.trailing:a),r(e,t,{leading:i,maxWait:t,trailing:a})}},4841:function(e,t,n){var r=n(7561),o=n(3218),i=n(3448),a=/^[-+]0x[0-9a-f]+$/i,s=/^0b[01]+$/i,l=/^0o[0-7]+$/i,u=parseInt;e.exports=function(e){if("number"==typeof e)return e;if(i(e))return NaN;if(o(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=o(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=r(e);var n=s.test(e);return n||l.test(e)?u(e.slice(2),n?2:8):a.test(e)?NaN:+e}},6086:function(e){"use strict";var t=Object.assign.bind(Object);e.exports=t,e.exports.default=e.exports},3367:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;const o=((r=n(7294))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=o},7845:function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=a,t.useAmp=function(){return a(o.default.useContext(i.AmpStateContext))};var r,o=(r=n(7294))&&r.__esModule?r:{default:r},i=n(3367);function a({ampFirst:e=!1,hybrid:t=!1,hasQuery:n=!1}={}){return e||t&&n}},4287:function(e,t,n){"use strict";var r;t.__esModule=!0,t.HeadManagerContext=void 0;const o=((r=n(7294))&&r.__esModule?r:{default:r}).default.createContext({});t.HeadManagerContext=o},7947:function(e,t,n){"use strict";var r=n(9713);function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}t.__esModule=!0,t.defaultHead=f,t.default=void 0;var i,a=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=d();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(n,o,i):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(n(7294)),s=(i=n(617))&&i.__esModule?i:{default:i},l=n(3367),u=n(4287),c=n(7845);function d(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return d=function(){return e},e}function f(e=!1){const t=[a.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(a.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function p(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===a.default.Fragment?e.concat(a.default.Children.toArray(t.props.children).reduce(((e,t)=>"string"===typeof t||"number"===typeof t?e:e.concat(t)),[])):e.concat(t)}const v=["name","httpEquiv","charSet","itemProp"];function h(e,t){return e.reduce(((e,t)=>{const n=a.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(p,[]).reverse().concat(f(t.inAmpMode)).filter(function(){const e=new Set,t=new Set,n=new Set,r={};return o=>{let i=!0,a=!1;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){a=!0;const t=o.key.slice(o.key.indexOf("$")+1);e.has(t)?i=!1:e.add(t)}switch(o.type){case"title":case"base":t.has(o.type)?i=!1:t.add(o.type);break;case"meta":for(let e=0,t=v.length;e<t;e++){const t=v[e];if(o.props.hasOwnProperty(t))if("charSet"===t)n.has(t)?i=!1:n.add(t);else{const e=o.props[t],n=r[t]||new Set;"name"===t&&a||!n.has(e)?(n.add(e),r[t]=n):i=!1}}}return i}}()).reverse().map(((e,n)=>{const i=e.key||n;if(!t.inAmpMode&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css"].some((t=>e.props.href.startsWith(t)))){const t=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e.props||{});return t["data-href"]=t.href,t.href=void 0,a.default.cloneElement(e,t)}return a.default.cloneElement(e,{key:i})}))}function m({children:e}){const t=(0,a.useContext)(l.AmpStateContext),n=(0,a.useContext)(u.HeadManagerContext);return a.default.createElement(s.default,{reduceComponentsToState:h,headManager:n,inAmpMode:(0,c.isInAmpMode)(t)},e)}m.rewind=()=>{};var g=m;t.default=g},617:function(e,t,n){"use strict";t.__esModule=!0,t.default=void 0;var r=n(7294);class o extends r.Component{constructor(e){super(e),this._hasHeadManager=void 0,this.emitChange=()=>{this._hasHeadManager&&this.props.headManager.updateHead(this.props.reduceComponentsToState([...this.props.headManager.mountedInstances],this.props))},this._hasHeadManager=this.props.headManager&&this.props.headManager.mountedInstances}componentDidMount(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}componentDidUpdate(){this.emitChange()}componentWillUnmount(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}render(){return null}}t.default=o},2291:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return M}});var r=n(5893),o=n(7294),i=n(3493),a=n.n(i),s=n(9008);function l(){return(0,r.jsxs)(s.default,{children:[(0,r.jsx)("meta",{httpEquiv:"Cache-Control",content:"no-cache, no-store, must-revalidate"}),(0,r.jsx)("meta",{httpEquiv:"expires",content:"0"}),(0,r.jsx)("meta",{httpEquiv:"pragma",content:"no-cache"})]})}const u="no-scroll",c=()=>void 0!==window?window.document.body:new HTMLElement,d=()=>c().classList.remove(u);var f=function(){const[e,t]=o.useState(!1);return o.useEffect((()=>(e?c().classList.add(u):d(),d)),[e]),{hideScroll:o.useCallback((()=>t(!0)),[]),showScroll:o.useCallback((()=>t(!1)),[])}};var p,v,h=n(2218),m=n(4155);const g=null===(p=m)||void 0===m||null===(v=p.env)||void 0===v?void 0:v.NEXT_PUBLIC_IS_TEST,y=()=>Array(20).fill(0).map(((e,t)=>{return{id:(n=t,"".concat("test").concat(n))};var n})),b=(e,t)=>{0!==Math.abs(t.deltaX)||Math.abs(t.deltaY)<15?t.stopPropagation():t.deltaY<0?e.scrollNext():t.deltaY>0&&e.scrollPrev()};function x(){const[e]=o.useState(y),[t,n]=o.useState([]),[i,s]=o.useState(0),u=e=>!!t.find((t=>t===e)),{dragStart:c,dragStop:d,dragMove:p,dragging:v}=function(){const[e,t]=o.useState(!1),[n,r]=o.useState(!1),[i,a]=o.useState(0),[s,l]=o.useState(0);return{dragStart:o.useCallback((e=>{a(e.clientX),l(0),t(!0)}),[]),dragStop:o.useCallback((()=>window.requestAnimationFrame((()=>{r(!1),t(!1)}))),[]),dragMove:o.useCallback(((t,o)=>{const s=i-t.clientX,u=Math.abs(s)>5;e&&u&&r(!0),n&&u&&(a(t.clientX),l(s),o(s))}),[e,n,i]),diff:s,dragging:n,position:i,setDragging:r,setDiff:l,setPosition:a}}(),m=o.useCallback((({scrollContainer:e})=>{e.current&&(e.current.scrollLeft=i)}),[i]),g=o.useCallback(a()((({scrollContainer:e})=>!!e.current&&s(e.current.scrollLeft)),500),[]),{hideScroll:x,showScroll:S}=f();return(0,r.jsxs)("div",{children:[(0,r.jsx)(l,{}),(0,r.jsx)("div",{className:"example",style:{height:"200vh",paddingTop:"200px"},children:(0,r.jsx)("div",{onMouseEnter:x,onMouseLeave:S,children:(0,r.jsx)("div",{onMouseLeave:d,children:(0,r.jsx)(h.ScrollMenu,{LeftArrow:w,RightArrow:C,onInit:m,onScroll:g,onWheel:b,onMouseDown:()=>e=>c(e),onMouseUp:()=>d,onMouseMove:({scrollContainer:e})=>t=>p(t,(t=>{if(e.current){const n=e.current.scrollLeft;e.current.scrollLeft=n+t}})),children:e.map((({id:e})=>{return(0,r.jsx)(j,{title:e,itemId:e,onClick:(t=e,({getItemById:e,scrollToItem:r})=>{if(v)return!1;const o=u(t);var i,a;n((e=>o?e.filter((e=>e!==t)):e.concat(t))),o||r(null===(i=e(t))||void 0===i||null===(a=i.entry)||void 0===a?void 0:a.target,"smooth","center","nearest")}),selected:u(e)},e);var t}))})})})})]})}function w(){const{isFirstItemVisible:e,scrollPrev:t,visibleItemsWithoutSeparators:n}=o.useContext(h.VisibilityContext),[i,a]=o.useState(!n.length&&e);return o.useEffect((()=>{n.length&&a(e)}),[e,n]),(0,r.jsx)(S,{disabled:i,onClick:()=>t(g?"auto":"smooth"),children:"Left"})}function C(){const{isLastItemVisible:e,scrollNext:t,visibleItemsWithoutSeparators:n}=o.useContext(h.VisibilityContext),[i,a]=o.useState(!n.length&&e);return o.useEffect((()=>{n.length&&a(e)}),[e,n]),(0,r.jsx)(S,{disabled:i,onClick:()=>t(g?"auto":"smooth"),children:"Right"})}function S({children:e,disabled:t,onClick:n}){return(0,r.jsx)("button",{disabled:t,onClick:n,style:{cursor:"pointer",display:"flex",flexDirection:"column",justifyContent:"center",right:"1%",opacity:t?"0":"1",userSelect:"none"},children:e})}function j({onClick:e,selected:t,title:n,itemId:i}){const a=o.useContext(h.VisibilityContext),s=a.isItemVisible(i);return(0,r.jsxs)("div",{onClick:()=>e(a),onKeyDown:t=>{"Enter"===t.code&&e(a)},role:"button",style:{border:"1px solid",display:"inline-block",margin:"0 10px",width:"160px",userSelect:"none"},tabIndex:0,children:[(0,r.jsxs)("div",{className:"card",children:[(0,r.jsx)("div",{children:n}),(0,r.jsxs)("div",{style:{backgroundColor:s?"transparent":"gray"},children:["visible: ",JSON.stringify(s)]}),(0,r.jsxs)("div",{children:["selected: ",JSON.stringify(!!t)]})]}),(0,r.jsx)("div",{style:{backgroundColor:t?"green":"bisque",height:"200px"}})]})}var M=()=>{const[e,t]=o.useState(!1);return o.useEffect((()=>{t(!0)}),[]),e?(0,r.jsx)(x,{}):null}},5301:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(2291)}])},9008:function(e,t,n){e.exports=n(7947)},4155:function(e){var t,n,r=e.exports={};function o(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function a(e){if(t===setTimeout)return setTimeout(e,0);if((t===o||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(n){try{return t.call(null,e,0)}catch(n){return t.call(this,e,0)}}}!function(){try{t="function"===typeof setTimeout?setTimeout:o}catch(e){t=o}try{n="function"===typeof clearTimeout?clearTimeout:i}catch(e){n=i}}();var s,l=[],u=!1,c=-1;function d(){u&&s&&(u=!1,s.length?l=s.concat(l):c=-1,l.length&&f())}function f(){if(!u){var e=a(d);u=!0;for(var t=l.length;t;){for(s=l,l=[];++c<t;)s&&s[c].run();c=-1,t=l.length}s=null,u=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===i||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function v(){}r.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];l.push(new p(e,t)),1!==l.length||u||a(f)},p.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=v,r.addListener=v,r.once=v,r.off=v,r.removeListener=v,r.removeAllListeners=v,r.emit=v,r.prependListener=v,r.prependOnceListener=v,r.listeners=function(e){return[]},r.binding=function(e){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(e){throw new Error("process.chdir is not supported")},r.umask=function(){return 0}},2218:function(e,t,n){!function(e,t){"use strict";function r(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var o=r(t);!function(e,t){void 0===t&&(t={});var n=t.insertAt;if(e&&"undefined"!=typeof document){var r=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css","top"===n&&r.firstChild?r.insertBefore(o,r.firstChild):r.appendChild(o),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(document.createTextNode(e))}}(".react-horizontal-scrolling-menu--wrapper {\n  display: flex;\n}\n\n.react-horizontal-scrolling-menu--scroll-container {\n  display: flex;\n  height: max-content;\n  overflow-y: hidden;\n  position: relative;\n  width: 100%;\n}\n\n:export {\n  wrapper: react-horizontal-scrolling-menu--wrapper;\n  container: react-horizontal-scrolling-menu--scroll-container;\n}\n");const i="react-horizontal-scrolling-menu",a=`${i}--separator`,s=`${i}--item`,l=`${i}--scroll-container`,u=`${i}--wrapper`,c="itemId";var d=Object.freeze({__proto__:null,rootClassName:i,separatorClassName:a,itemClassName:s,scrollContainerClassName:l,wrapperClassName:u,id:c});function f({children:e,onScroll:t=(()=>{}),scrollRef:n}){return o.default.createElement("div",{className:l,onScroll:t,ref:n},e)}var p=o.default.memo((function({id:e,index:t,refs:n}){const r=o.default.useRef(null);return n[t]=r,o.default.createElement("div",{className:a,"data-key":e,"data-index":t,ref:r})})),v=o.default.memo((function({children:e,id:t,index:n,refs:r}){const i=o.default.useRef(null);return r[n]=i,o.default.createElement("div",{className:s,"data-key":t,"data-index":n,ref:i},e)}));function h({children:e,refs:t}){const n=o.default.Children.toArray(e).filter(Boolean),r=n.length;return o.default.createElement(o.default.Fragment,null,n.map(((e,n)=>{var i,a;const s=null===(a=null===(i=e)||void 0===i?void 0:i.props)||void 0===a?void 0:a[c],l=s+"-separator",u=n+1===r;return[o.default.createElement(v,{id:s,key:"menuItem__"+s,refs:t,index:n},e),!u&&o.default.createElement(p,{id:l,refs:t,key:l,index:n+.1})]})))}function m(e,t="smooth",n="end",r="nearest"){e&&window&&window.requestAnimationFrame((()=>e.scrollIntoView({block:r,behavior:t,inline:n})))}function g({items:e,itemsChanged:t,refs:r,options:i}){const a=o.default.useRef(),[s,l]=o.default.useState([]),u=o.default.useRef(+setTimeout((()=>{}),0)),c=o.default.useCallback((t=>{const r=function(e,t){return[...e].map((e=>{var n,r;const o=e.target,i=(null===(n=null==o?void 0:o.dataset)||void 0===n?void 0:n.key)||"";return[i,{index:String((null===(r=null==o?void 0:o.dataset)||void 0===r?void 0:r.index)||""),key:i,entry:e,visible:e.intersectionRatio>=t.ratio}]}))}(t,i);e.set(r),n.g.clearTimeout(u.current),u.current=+setTimeout((()=>n.g.requestAnimationFrame((()=>{l((t=>{const n=e.getVisible().map((e=>e[1].key));return JSON.stringify(t)!==JSON.stringify(n)?n:t}))}))),i.throttle)}),[e,i]);return o.default.useLayoutEffect((()=>{const e=(e=>Object.values(e).map((e=>e.current)).filter(Boolean))(r);return a.current=new IntersectionObserver(c,i),e.forEach((e=>{var t;return null===(t=a.current)||void 0===t?void 0:t.observe(e)})),()=>{var e;clearTimeout(u.current),null===(e=a.current)||void 0===e||e.disconnect(),a.current=void 0}}),[c,t,i,r]),{visibleItems:s}}class y extends Map{toArr(){return[...this]}onlyDigits(e){return String(e).replace(/[^0-9.]/g,"")}sort(e){return e.sort(((e,t)=>+this.onlyDigits(e[1].index)-+this.onlyDigits(t[1].index)))}set(e,t){return Array.isArray(e)?this.sort(e).forEach((e=>{super.set(e[0],e[1])})):super.set(e,t),this}first(){var e;return null===(e=this.toArr()[0])||void 0===e?void 0:e[1]}last(){var e,t;return null===(t=null===(e=this.toArr().slice(-1))||void 0===e?void 0:e[0])||void 0===t?void 0:t[1]}filter(e){return this.toArr().filter(e)}find(e){return this.toArr().find(e)}findIndex(e){return this.toArr().findIndex(e)}prev(e){var t;const n=this.toArr(),r=n.findIndex((t=>t[0]===e||t[1]===e));return-1!==r?null===(t=n[r-1])||void 0===t?void 0:t[1]:void 0}next(e){var t;const n=this.toArr(),r=n.findIndex((t=>t[0]===e||t[1]===e));return-1!==r?null===(t=n[r+1])||void 0===t?void 0:t[1]:void 0}getVisible(){return this.filter((e=>e[1].visible))}}const b={rootMargin:"5px",threshold:[.05,.5,.75,.95],ratio:.9,throttle:100},x=o.default.createContext({});e.ScrollMenu=function({LeftArrow:e,RightArrow:t,children:n,onInit:r=(()=>{}),onMouseDown:i,onMouseUp:a,onMouseMove:s,onScroll:l=(()=>{}),onWheel:d=(()=>{}),options:p=b,wrapperClassName:v=""}){const w=o.default.useRef(null),[C]=o.default.useState({}),S=o.default.useMemo((()=>Object.assign(Object.assign(Object.assign({},b),p),{root:w.current})),[p]),j=function(e,t){const[n,r]=o.default.useState("");return o.default.useLayoutEffect((()=>{const t=(e?o.default.Children.toArray(e):[]).map((e=>{var t,n;return null===(n=null===(t=e)||void 0===t?void 0:t.props)||void 0===n?void 0:n[c]})).filter(Boolean).join("");r(t)}),[e,t]),n}(n,C),M=o.default.useRef(new y).current,{visibleItems:O}=g({items:M,itemsChanged:j,options:S,refs:C}),E=function(e=(()=>{})){const[t,n]=o.default.useState(!1);return o.default.useLayoutEffect((()=>{t||(n(!0),e())}),[e,t]),t}((()=>r(k))),_=o.default.useMemo((()=>function(e,t=[]){var n,r;const o=t.filter((e=>!/separator/.test(String(e)))),i=!!(null===(n=e.first())||void 0===n?void 0:n.visible),a=!!(null===(r=e.last())||void 0===r?void 0:r.visible),s=t=>{var n;return null===(n=e.find((e=>e[1].key===String(t))))||void 0===n?void 0:n[1]},l=()=>{var t,n;return e.prev(null===(n=null===(t=e.getVisible())||void 0===t?void 0:t[0])||void 0===n?void 0:n[1])},u=()=>{var t,n,r,o;return e.next(null===(o=null===(r=null===(n=null===(t=e.getVisible())||void 0===t?void 0:t.slice)||void 0===n?void 0:n.call(t,-1))||void 0===r?void 0:r[0])||void 0===o?void 0:o[1])};return{getItemById:s,getItemByIndex:t=>{var n;return null===(n=e.find((e=>String(e[1].index)===String(t))))||void 0===n?void 0:n[1]},getNextItem:u,getPrevItem:l,isFirstItemVisible:i,isItemVisible:e=>{var t;return Boolean(null===(t=s(e))||void 0===t?void 0:t.visible)},isLastItem:t=>e.last()===s(t),isLastItemVisible:a,scrollNext:(e="smooth",t="start",n="nearest")=>{var r,o;return m(null===(o=null===(r=u())||void 0===r?void 0:r.entry)||void 0===o?void 0:o.target,e,t,n)},scrollPrev:(e="smooth",t="end",n="nearest")=>{var r,o;return m(null===(o=null===(r=l())||void 0===r?void 0:r.entry)||void 0===o?void 0:o.target,e,t,n)},scrollToItem:m,visibleItemsWithoutSeparators:o}}(M,O)),[M,O]),k=o.default.useMemo((()=>Object.assign(Object.assign({},_),{initComplete:E,items:M,scrollContainer:w,visibleItems:O})),[_,E,M,O]),I=o.default.useCallback((e=>l(k,e)),[l,k]),T=o.default.useCallback((e=>d(k,e)),[d,k]);return o.default.createElement("div",{className:`${u} ${v}`,onWheel:T,onMouseDown:null==i?void 0:i(k),onMouseUp:null==a?void 0:a(k),onMouseMove:null==s?void 0:s(k)},o.default.createElement(x.Provider,{value:k},o.default.createElement(e,null),o.default.createElement(f,{onScroll:I,scrollRef:w},o.default.createElement(h,{refs:C},n)),o.default.createElement(t,null)))},e.VisibilityContext=x,e.constants=d,Object.defineProperty(e,"__esModule",{value:!0})}(t,n(7294))}},function(e){e.O(0,[774],(function(){return t=5301,e(e.s=t);var t}));var t=e.O();_N_E=t}]);