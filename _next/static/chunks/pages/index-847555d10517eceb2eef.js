(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5379:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return w}});var o=n(5893),i=n(5182);"undefined"!==typeof document&&(0,i.C)();var l=n(7294),s=n(3493),r=n.n(s);const c="no-scroll",a=()=>void 0!==window?window.document.body:new HTMLElement,d=()=>a().classList.remove(c);var u=function(){const[e,t]=l.useState(!1);return l.useEffect((()=>(e?a().classList.add(c):d(),d)),[e]),{hideScroll:l.useCallback((()=>t(!0)),[]),showScroll:l.useCallback((()=>t(!1)),[])}};var f,h,v=n(2218),C=n(4155);const x=null===(f=C)||void 0===C||null===(h=f.env)||void 0===h?void 0:h.NEXT_PUBLIC_IS_TEST,b=()=>Array(20).fill(0).map(((e,t)=>{return{id:(n=t,"".concat("test").concat(n))};var n})),g=(e,t)=>{0!==Math.abs(t.deltaX)||Math.abs(t.deltaY)<15?t.stopPropagation():t.deltaY<0?e.scrollNext():t.deltaY>0&&e.scrollPrev()};function p(){const[e]=l.useState(b),[t,n]=l.useState([]),[i,s]=l.useState(0),c=e=>!!t.find((t=>t===e)),{dragStart:a,dragStop:d,dragMove:f,dragging:h}=function(){const[e,t]=l.useState(!1),[n,o]=l.useState(!1),[i,s]=l.useState(0),[r,c]=l.useState(0);return{dragStart:l.useCallback((e=>{s(e.clientX),c(0),t(!0)}),[]),dragStop:l.useCallback((()=>window.requestAnimationFrame((()=>{o(!1),t(!1)}))),[]),dragMove:l.useCallback(((t,l)=>{const r=i-t.clientX,a=Math.abs(r)>5;e&&a&&o(!0),n&&a&&(s(t.clientX),c(r),l(r))}),[e,n,i]),diff:r,dragging:n,position:i,setDragging:o,setDiff:c,setPosition:s}}(),C=l.useCallback((({scrollContainer:e,getItemById:t,scrollToItem:n})=>{}),[i]),x=l.useCallback(r()((({scrollContainer:e})=>!!e.current&&s(e.current.scrollLeft)),500),[]),{hideScroll:p,showScroll:y}=u();return(0,o.jsx)("div",{children:(0,o.jsx)("div",{className:"example",style:{height:"200vh",paddingTop:"200px"},children:(0,o.jsx)("div",{onMouseEnter:p,onMouseLeave:y,children:(0,o.jsx)("div",{onMouseLeave:d,children:(0,o.jsx)(v.ScrollMenu,{LeftArrow:m,RightArrow:S,onInit:C,onScroll:x,onWheel:g,onMouseDown:()=>e=>a(e),onMouseUp:()=>d,onMouseMove:({scrollContainer:e})=>t=>f(t,(t=>{if(e.current){const n=e.current.scrollLeft;e.current.scrollLeft=n+t}})),children:e.map((({id:e})=>{return(0,o.jsx)(k,{title:e,itemId:e,onClick:(t=e,({getItemById:e,scrollToItem:o})=>{if(h)return!1;const i=c(t);var l,s;n((e=>i?e.filter((e=>e!==t)):e.concat(t))),i||o(null===(l=e(t))||void 0===l||null===(s=l.entry)||void 0===s?void 0:s.target,"smooth","center","nearest")}),selected:c(e)},e);var t}))})})})})})}function m(){const{initComplete:e,isFirstItemVisible:t,scrollPrev:n}=l.useContext(v.VisibilityContext);return(0,o.jsx)(y,{disabled:!e||e&&t,onClick:()=>n(x?"auto":"smooth"),children:"Left"})}function S(){const{initComplete:e,isLastItemVisible:t,scrollNext:n}=l.useContext(v.VisibilityContext);return(0,o.jsx)(y,{disabled:e&&t,onClick:()=>n(x?"auto":"smooth"),children:"Right"})}function y({children:e,disabled:t,onClick:n}){return(0,o.jsx)("button",{disabled:t,onClick:n,style:{cursor:"pointer",display:"flex",flexDirection:"column",justifyContent:"center",right:"1%",opacity:t?"0":"1",userSelect:"none"},children:e})}function k({onClick:e,selected:t,title:n,itemId:i}){const s=l.useContext(v.VisibilityContext),r=!s.initComplete||s.initComplete&&s.isItemVisible(i);return(0,o.jsxs)("div",{onClick:()=>e(s),onKeyDown:t=>{"Enter"===t.code&&e(s)},role:"button",style:{border:"1px solid",display:"inline-block",margin:"0 10px",width:"160px",userSelect:"none"},tabIndex:0,className:"card",children:[(0,o.jsxs)("div",{children:[(0,o.jsx)("div",{children:n}),(0,o.jsxs)("div",{style:{backgroundColor:r?"transparent":"gray"},children:["visible: ",JSON.stringify(r)]}),(0,o.jsxs)("div",{children:["selected: ",JSON.stringify(!!t)]})]}),(0,o.jsx)("div",{style:{backgroundColor:t?"green":"bisque",height:"200px"}})]})}var w=()=>{const[e,t]=l.useState(!1);return l.useEffect((()=>{t(!0)}),[]),e?(0,o.jsx)(p,{}):null}},5301:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(5379)}])}},function(e){e.O(0,[774,639],(function(){return t=5301,e(e.s=t);var t}));var t=e.O();_N_E=t}]);