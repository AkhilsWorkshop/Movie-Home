"use strict";(self.webpackChunkmovie=self.webpackChunkmovie||[]).push([[992],{5992:function(e,t,n){n.r(t),n.d(t,{default:function(){return N}});var r,o,s=n(885),i=n(4165),a=n(5861),l=n(4569),c=n.n(l),d=n(2791),p=n(8967),u=function(e,t){return(u=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},h=(o=r={path:void 0,exports:{},require:function(e,t){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}(null==t&&r.path)}},r.exports,function(){var e={}.hasOwnProperty;function t(){for(var n=[],r=0;r<arguments.length;r++){var o=arguments[r];if(o){var s=typeof o;if("string"===s||"number"===s)n.push(o);else if(Array.isArray(o)&&o.length){var i=t.apply(null,o);i&&n.push(i)}else if("object"===s)for(var a in o)e.call(o,a)&&o[a]&&n.push(a)}}return n.join(" ")}o.exports?(t.default=t,o.exports=t):window.classNames=t}(),r.exports);function m(e,t,n){var r,o,s,i,a;function l(){var c=Date.now()-i;c<t&&c>=0?r=setTimeout(l,t-c):(r=null,n||(a=e.apply(s,o),s=o=null))}null==t&&(t=100);var c=function(){s=this,o=arguments,i=Date.now();var c=n&&!r;return r||(r=setTimeout(l,t)),c&&(a=e.apply(s,o),s=o=null),a};return c.clear=function(){r&&(clearTimeout(r),r=null)},c.flush=function(){r&&(a=e.apply(s,o),s=o=null,clearTimeout(r),r=null)},c}m.debounce=m;var f=m;!function(e,t){void 0===t&&(t={});var n=t.insertAt;if("undefined"!=typeof document){var r=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css","top"===n&&r.firstChild?r.insertBefore(o,r.firstChild):r.appendChild(o),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(document.createTextNode(e))}}(".indiana-scroll-container {\n  overflow: auto; }\n  .indiana-scroll-container--dragging {\n    scroll-behavior: auto !important; }\n    .indiana-scroll-container--dragging > * {\n      pointer-events: none;\n      cursor: -webkit-grab;\n      cursor: grab; }\n  .indiana-scroll-container--hide-scrollbars {\n    overflow: hidden;\n    overflow: -moz-scrollbars-none;\n    -ms-overflow-style: none;\n    scrollbar-width: none; }\n    .indiana-scroll-container--hide-scrollbars::-webkit-scrollbar {\n      display: none !important;\n      height: 0 !important;\n      width: 0 !important;\n      background: transparent !important;\n      -webkit-appearance: none !important; }\n  .indiana-scroll-container--native-scroll {\n    overflow: auto; }\n\n.indiana-dragging {\n  cursor: -webkit-grab;\n  cursor: grab; }\n");var v,x=(v="indiana-scroll-container",function(e,t){if(!e)return v;var n;"string"==typeof e?n=e:t=e;var r=v;return n&&(r+="__"+n),r+(t?Object.keys(t).reduce((function(e,n){var o=t[n];return o&&(e+=" "+("boolean"==typeof o?r+"--"+n:r+"--"+n+"_"+o)),e}),""):"")}),g=function(e){function t(t){var n=e.call(this,t)||this;return n.onEndScroll=function(){n.scrolling=!1,!n.pressed&&n.started&&n.processEnd()},n.onScroll=function(e){var t=n.container.current;t.scrollLeft===n.scrollLeft&&t.scrollTop===n.scrollTop||(n.scrolling=!0,n.processScroll(e),n.onEndScroll())},n.onTouchStart=function(e){var t=n.props.nativeMobileScroll;if(n.isDraggable(e.target))if(n.internal=!0,t&&n.scrolling)n.pressed=!0;else{var r=e.touches[0];n.processClick(e,r.clientX,r.clientY),!t&&n.props.stopPropagation&&e.stopPropagation()}},n.onTouchEnd=function(e){var t=n.props.nativeMobileScroll;n.pressed&&(!n.started||n.scrolling&&t?n.pressed=!1:n.processEnd(),n.forceUpdate())},n.onTouchMove=function(e){var t=n.props.nativeMobileScroll;if(n.pressed&&(!t||!n.isMobile)){var r=e.touches[0];r&&n.processMove(e,r.clientX,r.clientY),e.preventDefault(),n.props.stopPropagation&&e.stopPropagation()}},n.onMouseDown=function(e){n.isDraggable(e.target)&&n.isScrollable()&&(n.internal=!0,-1!==n.props.buttons.indexOf(e.button)&&(n.processClick(e,e.clientX,e.clientY),e.preventDefault(),n.props.stopPropagation&&e.stopPropagation()))},n.onMouseMove=function(e){n.pressed&&(n.processMove(e,e.clientX,e.clientY),e.preventDefault(),n.props.stopPropagation&&e.stopPropagation())},n.onMouseUp=function(e){n.pressed&&(n.started?n.processEnd():(n.internal=!1,n.pressed=!1,n.forceUpdate(),n.props.onClick&&n.props.onClick(e)),e.preventDefault(),n.props.stopPropagation&&e.stopPropagation())},n.container=d.createRef(),n.onEndScroll=f(n.onEndScroll,300),n.scrolling=!1,n.started=!1,n.pressed=!1,n.internal=!1,n.getRef=n.getRef.bind(n),n}return function(e,t){function n(){this.constructor=e}u(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}(t,e),t.prototype.componentDidMount=function(){var e=this.props.nativeMobileScroll,t=this.container.current;window.addEventListener("mouseup",this.onMouseUp),window.addEventListener("mousemove",this.onMouseMove),window.addEventListener("touchmove",this.onTouchMove,{passive:!1}),window.addEventListener("touchend",this.onTouchEnd),t.addEventListener("touchstart",this.onTouchStart,{passive:!1}),t.addEventListener("mousedown",this.onMouseDown,{passive:!1}),e&&(this.isMobile=this.isMobileDevice(),this.isMobile&&this.forceUpdate())},t.prototype.componentWillUnmount=function(){window.removeEventListener("mouseup",this.onMouseUp),window.removeEventListener("mousemove",this.onMouseMove),window.removeEventListener("touchmove",this.onTouchMove),window.removeEventListener("touchend",this.onTouchEnd)},t.prototype.getElement=function(){return this.container.current},t.prototype.isMobileDevice=function(){return void 0!==window.orientation||-1!==navigator.userAgent.indexOf("IEMobile")},t.prototype.isDraggable=function(e){var t=this.props.ignoreElements;if(t){var n=e.closest(t);return null===n||n.contains(this.getElement())}return!0},t.prototype.isScrollable=function(){var e=this.container.current;return e&&(e.scrollWidth>e.clientWidth||e.scrollHeight>e.clientHeight)},t.prototype.processClick=function(e,t,n){var r=this.container.current;this.scrollLeft=r.scrollLeft,this.scrollTop=r.scrollTop,this.clientX=t,this.clientY=n,this.pressed=!0},t.prototype.processStart=function(e){void 0===e&&(e=!0);var t=this.props.onStartScroll;this.started=!0,e&&document.body.classList.add("indiana-dragging"),t&&t({external:!this.internal}),this.forceUpdate()},t.prototype.processScroll=function(e){if(this.started){var t=this.props.onScroll;t&&t({external:!this.internal})}else this.processStart(!1)},t.prototype.processMove=function(e,t,n){var r=this.props,o=r.horizontal,s=r.vertical,i=r.activationDistance,a=r.onScroll,l=this.container.current;this.started?(o&&(l.scrollLeft-=t-this.clientX),s&&(l.scrollTop-=n-this.clientY),a&&a({external:!this.internal}),this.clientX=t,this.clientY=n,this.scrollLeft=l.scrollLeft,this.scrollTop=l.scrollTop):(o&&Math.abs(t-this.clientX)>i||s&&Math.abs(n-this.clientY)>i)&&(this.clientX=t,this.clientY=n,this.processStart())},t.prototype.processEnd=function(){var e=this.props.onEndScroll;this.container.current&&e&&e({external:!this.internal}),this.pressed=!1,this.started=!1,this.scrolling=!1,this.internal=!1,document.body.classList.remove("indiana-dragging"),this.forceUpdate()},t.prototype.getRef=function(e){[this.container,this.props.innerRef].forEach((function(t){t&&("function"==typeof t?t(e):t.current=e)}))},t.prototype.render=function(){var e=this.props,t=e.children,n=e.draggingClassName,r=e.className,o=e.style,s=e.hideScrollbars,i=e.component;return d.createElement(i,{className:h(r,this.pressed&&n,x({dragging:this.pressed,"hide-scrollbars":s,"native-scroll":this.isMobile})),style:o,ref:this.getRef,onScroll:this.onScroll},t)},t.defaultProps={nativeMobileScroll:!0,hideScrollbars:!0,activationDistance:10,vertical:!0,horizontal:!0,stopPropagation:!1,style:{},component:"div",buttons:[0]},t}(d.PureComponent),b=g,w=n(4787),y=n(7244),j=n(184),N=function(e){var t=e.mediaType,n=e.searchID,r=function(){var e=(0,a.Z)((0,i.Z)().mark((function e(){var r,o,s,a;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("person"!==t){e.next=11;break}return e.next=3,c().get("https://api.themoviedb.org/3/".concat(t,"/").concat(n,"/combined_credits?api_key=").concat("ee67127aee04e49495754bf98fb61031"));case 3:return r=e.sent,o=r.data,h(o.cast),x(o.crew),console.log(o),e.abrupt("return",o);case 11:return e.next=13,c().get("https://api.themoviedb.org/3/".concat(t,"/").concat(n,"/credits?api_key=").concat("ee67127aee04e49495754bf98fb61031"));case 13:return s=e.sent,a=s.data,h(a.cast),x(a.crew),console.log(a),e.abrupt("return",a);case 19:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=(0,d.useState)(null),l=(0,s.Z)(o,2),u=l[0],h=l[1],m=(0,d.useState)(null),f=(0,s.Z)(m,2),v=f[0],x=f[1],g=(0,d.useState)(!0),N=(0,s.Z)(g,2),S=N[0],E=N[1];return(0,d.useEffect)((function(){E(!0),r(),setTimeout((function(){E(!1)}),1e3)}),[]),(0,j.jsx)(j.Fragment,{children:S?(0,j.jsx)(w.Z,{}):(0,j.jsx)("div",{className:"flex flex-col overflow-x-hidden gap-5",children:"person"===t?(0,j.jsxs)(j.Fragment,{children:[u.length>0?(0,j.jsxs)(j.Fragment,{children:[(0,j.jsxs)("h1",{className:"border-l-4 pl-2 border-yellow-500 text-lg md:text-2xl sm:text-4xl",children:["Known for ",(0,j.jsxs)("span",{className:"text-sm text-gray-400",children:["(",u.length," Roles)"]})]}),(0,j.jsx)(b,{className:"flex flex-wrap",children:(0,j.jsx)("div",{className:"flex gap-1",children:null===u||void 0===u?void 0:u.map((function(e){return null===e.poster_path?(0,j.jsx)(j.Fragment,{}):(0,j.jsxs)("div",{className:"flex flex-col h-auto w-24 rounded-md gap-2",children:[(0,j.jsx)(y.Z,{media_type:e.media_type,id:e.id,children:(0,j.jsx)("img",{src:p.WD+e.poster_path,alt:e.title,className:"object-fill h-36 w-24 rounded-md shadow-lg shadow-black duration-150 sm:hover:rounded-none sm:hover:scale-105 sm:hover:saturate-150"})}),(0,j.jsx)("p",{className:"truncate sm:text-sm text-gray-400",children:null!==e&&void 0!==e&&e.character?e.character:"Unknown"}),(0,j.jsx)("p",{className:"truncate sm:text-sm",children:e.title||e.original_name})]})}))})})]}):(0,j.jsx)(j.Fragment,{}),v.length>0?(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)("h1",{className:"border-l-4 pl-2 border-yellow-500 text-lg md:text-2xl sm:text-4xl",children:"Worked as"}),(0,j.jsx)(b,{className:"flex flex-wrap",children:(0,j.jsx)("div",{className:"flex gap-1",children:null===v||void 0===v?void 0:v.map((function(e){return null===e.poster_path?(0,j.jsx)(j.Fragment,{}):(0,j.jsxs)("div",{className:"flex flex-col h-auto w-24 rounded-md gap-2",children:[(0,j.jsx)(y.Z,{media_type:e.media_type,id:e.id,children:(0,j.jsx)("img",{src:p.WD+e.poster_path,alt:e.title,className:"object-fill h-36 w-24 rounded-md shadow-2xl shadow-black duration-150 sm:hover:rounded-none sm:hover:scale-105 sm:hover:saturate-150"})}),(0,j.jsx)("p",{className:"truncate sm:text-sm text-gray-400",children:null===e||void 0===e?void 0:e.job}),(0,j.jsx)("p",{className:"truncate sm:text-sm",children:e.title||(null===e||void 0===e?void 0:e.original_name)})]})}))})})]}):(0,j.jsx)(j.Fragment,{})]}):(0,j.jsxs)(j.Fragment,{children:[u.length>0?(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)("h1",{className:"border-l-4 pl-2 border-yellow-500 text-lg md:text-2xl sm:text-4xl",children:"Cast"}),(0,j.jsx)(b,{className:"flex flex-wrap",children:(0,j.jsx)("div",{className:"flex gap-1",children:null===u||void 0===u?void 0:u.map((function(e){return null===e.profile_path?(0,j.jsx)(j.Fragment,{}):(0,j.jsxs)("div",{className:"flex flex-col h-auto w-24 rounded-md gap-2",children:[(0,j.jsx)(y.Z,{media_type:"person",id:e.id,children:(0,j.jsx)("img",{src:p.WD+e.profile_path,alt:e.name,className:"object-fill h-36 w-24 rounded-md shadow-lg shadow-black duration-150 sm:hover:rounded-none sm:hover:scale-105 sm:hover:saturate-150"})}),(0,j.jsx)("p",{className:"truncate sm:text-sm text-gray-400",children:null!==e&&void 0!==e&&e.character?e.character:"Unknown"}),(0,j.jsx)("p",{className:"truncate sm:text-sm",children:e.name})]})}))})})]}):(0,j.jsx)(j.Fragment,{}),v.length>0?(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)("h1",{className:"border-l-4 pl-2 border-yellow-500 text-lg md:text-2xl sm:text-4xl",children:"Crew"}),(0,j.jsx)(b,{className:"flex flex-wrap",children:(0,j.jsx)("div",{className:"flex gap-1",children:null===v||void 0===v?void 0:v.map((function(e){return null===e.profile_path?(0,j.jsx)(j.Fragment,{}):(0,j.jsxs)("div",{className:"flex flex-col h-auto w-24 rounded-md gap-2",children:[(0,j.jsx)(y.Z,{media_type:"person",id:e.id,children:(0,j.jsx)("img",{src:p.WD+e.profile_path,alt:e.name,className:"object-fill h-36 w-24 rounded-md shadow-2xl shadow-black duration-150 sm:hover:rounded-none sm:hover:scale-105 sm:hover:saturate-150"})}),(0,j.jsx)("p",{className:"truncate sm:text-sm text-gray-400",children:null===e||void 0===e?void 0:e.name}),(0,j.jsx)("p",{className:"truncate sm:text-sm",children:null===e||void 0===e?void 0:e.known_for_department})]})}))})})]}):(0,j.jsx)(j.Fragment,{})]})})})}}}]);
//# sourceMappingURL=992.a8dee44e.chunk.js.map