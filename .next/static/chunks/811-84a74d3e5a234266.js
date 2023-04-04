"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[811],{2811:function(t,e,n){n.d(e,{c:function(){return S},m:function(){return M}});var i=n(7294);let r="http://www.w3.org/2000/svg";class s{constructor(t){this.seed=t}next(){return this.seed?(2147483648-1&(this.seed=Math.imul(48271,this.seed)))/2147483648:Math.random()}}function o(t,e,n,i,r){return{type:"path",ops:f(t,e,n,i,r)}}function a(t,e,n){let i=(t||[]).length;if(i>2){let r=[];for(let e=0;e<i-1;e++)r.push(...f(t[e][0],t[e][1],t[e+1][0],t[e+1][1],n));return e&&r.push(...f(t[i-1][0],t[i-1][1],t[0][0],t[0][1],n)),{type:"path",ops:r}}return 2===i?o(t[0][0],t[0][1],t[1][0],t[1][1],n):{type:"path",ops:[]}}function h(t,e,n,i,r){return function(t,e,n,i){let[r,s]=p(i.increment,t,e,i.rx,i.ry,1,i.increment*l(.1,l(.4,1,n),n),n),o=g(r,null,n);if(!n.disableMultiStroke){let[r]=p(i.increment,t,e,i.rx,i.ry,1.5,0,n),s=g(r,null,n);o=o.concat(s)}return{estimatedPoints:s,opset:{type:"path",ops:o}}}(t,e,r,function(t,e,n){let i=Math.max(n.curveStepCount,n.curveStepCount/Math.sqrt(200)*Math.sqrt(2*Math.PI*Math.sqrt((Math.pow(t/2,2)+Math.pow(e/2,2))/2))),r=Math.abs(t/2),s=Math.abs(e/2),o=1-n.curveFitting;return r+=c(r*o,n),s+=c(s*o,n),{increment:2*Math.PI/i,rx:r,ry:s}}(n,i,r)).opset}function u(t){return t.randomizer||(t.randomizer=new s(t.seed||0)),t.randomizer.next()}function l(t,e,n,i=1){return n.roughness*i*(u(n)*(e-t)+t)}function c(t,e,n=1){return l(-t,t,e,n)}function f(t,e,n,i,r,s=!1){let o=s?r.disableMultiStrokeFill:r.disableMultiStroke,a=d(t,e,n,i,r,!0,!1);if(o)return a;let h=d(t,e,n,i,r,!0,!0);return a.concat(h)}function d(t,e,n,i,r,s,o){let a=Math.pow(t-n,2)+Math.pow(e-i,2),h=Math.sqrt(a),l=1;l=h<200?1:h>500?.4:-.0016668*h+1.233334;let f=r.maxRandomnessOffset||0;f*f*100>a&&(f=h/10);let d=f/2,g=.2+.2*u(r),p=r.bowing*r.maxRandomnessOffset*(i-e)/200,m=r.bowing*r.maxRandomnessOffset*(t-n)/200;p=c(p,r,l),m=c(m,r,l);let v=[],w=()=>c(d,r,l),_=()=>c(f,r,l);return s&&(o?v.push({op:"move",data:[t+w(),e+w()]}):v.push({op:"move",data:[t+c(f,r,l),e+c(f,r,l)]})),o?v.push({op:"bcurveTo",data:[p+t+(n-t)*g+w(),m+e+(i-e)*g+w(),p+t+2*(n-t)*g+w(),m+e+2*(i-e)*g+w(),n+w(),i+w()]}):v.push({op:"bcurveTo",data:[p+t+(n-t)*g+_(),m+e+(i-e)*g+_(),p+t+2*(n-t)*g+_(),m+e+2*(i-e)*g+_(),n+_(),i+_()]}),v}function g(t,e,n){let i=t.length,r=[];if(i>3){let s=[],o=1-n.curveTightness;r.push({op:"move",data:[t[1][0],t[1][1]]});for(let e=1;e+2<i;e++){let n=t[e];s[0]=[n[0],n[1]],s[1]=[n[0]+(o*t[e+1][0]-o*t[e-1][0])/6,n[1]+(o*t[e+1][1]-o*t[e-1][1])/6],s[2]=[t[e+1][0]+(o*t[e][0]-o*t[e+2][0])/6,t[e+1][1]+(o*t[e][1]-o*t[e+2][1])/6],s[3]=[t[e+1][0],t[e+1][1]],r.push({op:"bcurveTo",data:[s[1][0],s[1][1],s[2][0],s[2][1],s[3][0],s[3][1]]})}if(e&&2===e.length){let t=n.maxRandomnessOffset;r.push({op:"lineTo",data:[e[0]+c(t,n),e[1]+c(t,n)]})}}else 3===i?(r.push({op:"move",data:[t[1][0],t[1][1]]}),r.push({op:"bcurveTo",data:[t[1][0],t[1][1],t[2][0],t[2][1],t[2][0],t[2][1]]})):2===i&&r.push(...f(t[0][0],t[0][1],t[1][0],t[1][1],n));return r}function p(t,e,n,i,r,s,o,a){let h=[],u=[],l=c(.5,a)-Math.PI/2;u.push([c(s,a)+e+.9*i*Math.cos(l-t),c(s,a)+n+.9*r*Math.sin(l-t)]);for(let o=l;o<2*Math.PI+l-.01;o+=t){let t=[c(s,a)+e+i*Math.cos(o),c(s,a)+n+r*Math.sin(o)];h.push(t),u.push(t)}return u.push([c(s,a)+e+i*Math.cos(l+2*Math.PI+.5*o),c(s,a)+n+r*Math.sin(l+2*Math.PI+.5*o)]),u.push([c(s,a)+e+.98*i*Math.cos(l+o),c(s,a)+n+.98*r*Math.sin(l+o)]),u.push([c(s,a)+e+.9*i*Math.cos(l+.5*o),c(s,a)+n+.9*r*Math.sin(l+.5*o)]),[u,h]}function m(t,e){return{maxRandomnessOffset:2,roughness:"highlight"===t?3:1.5,bowing:1,stroke:"#000",strokeWidth:1.5,curveTightness:0,curveFitting:.95,curveStepCount:9,fillStyle:"hachure",fillWeight:-1,hachureAngle:-41,hachureGap:-1,dashOffset:-1,dashGap:-1,zigzagOffset:-1,combineNestedSvgPaths:!1,disableMultiStroke:"double"!==t,disableMultiStrokeFill:!1,seed:e}}class v{constructor(t,e){this._state="unattached",this._resizing=!1,this._seed=Math.floor(2147483648*Math.random()),this._lastSizes=[],this._animationDelay=0,this._resizeListener=()=>{this._resizing||(this._resizing=!0,setTimeout(()=>{this._resizing=!1,"showing"===this._state&&this.haveRectsChanged()&&this.show()},400))},this._e=t,this._config=JSON.parse(JSON.stringify(e)),this.attach()}get animate(){return this._config.animate}set animate(t){this._config.animate=t}get animationDuration(){return this._config.animationDuration}set animationDuration(t){this._config.animationDuration=t}get iterations(){return this._config.iterations}set iterations(t){this._config.iterations=t}get color(){return this._config.color}set color(t){this._config.color!==t&&(this._config.color=t,this.refresh())}get strokeWidth(){return this._config.strokeWidth}set strokeWidth(t){this._config.strokeWidth!==t&&(this._config.strokeWidth=t,this.refresh())}get padding(){return this._config.padding}set padding(t){this._config.padding!==t&&(this._config.padding=t,this.refresh())}attach(){if("unattached"===this._state&&this._e.parentElement){!function(){if(!window.__rno_kf_s){let t=window.__rno_kf_s=document.createElement("style");t.textContent="@keyframes rough-notation-dash { to { stroke-dashoffset: 0; } }",document.head.appendChild(t)}}();let t=this._svg=document.createElementNS(r,"svg");t.setAttribute("class","rough-annotation");let e=t.style;e.position="absolute",e.top="0",e.left="0",e.overflow="visible",e.pointerEvents="none",e.width="100px",e.height="100px";let n="highlight"===this._config.type;if(this._e.insertAdjacentElement(n?"beforebegin":"afterend",t),this._state="not-showing",n){let t=window.getComputedStyle(this._e).position;t&&"static"!==t||(this._e.style.position="relative")}this.attachListeners()}}detachListeners(){window.removeEventListener("resize",this._resizeListener),this._ro&&this._ro.unobserve(this._e)}attachListeners(){this.detachListeners(),window.addEventListener("resize",this._resizeListener,{passive:!0}),!this._ro&&"ResizeObserver"in window&&(this._ro=new window.ResizeObserver(t=>{for(let e of t)e.contentRect&&this._resizeListener()})),this._ro&&this._ro.observe(this._e)}haveRectsChanged(){if(this._lastSizes.length){let t=this.rects();if(t.length!==this._lastSizes.length)return!0;for(let e=0;e<t.length;e++)if(!this.isSameRect(t[e],this._lastSizes[e]))return!0}return!1}isSameRect(t,e){let n=(t,e)=>Math.round(t)===Math.round(e);return n(t.x,e.x)&&n(t.y,e.y)&&n(t.w,e.w)&&n(t.h,e.h)}isShowing(){return"not-showing"!==this._state}refresh(){this.isShowing()&&!this.pendingRefresh&&(this.pendingRefresh=Promise.resolve().then(()=>{this.isShowing()&&this.show(),delete this.pendingRefresh}))}show(){switch(this._state){case"unattached":break;case"showing":this.hide(),this._svg&&this.render(this._svg,!0);break;case"not-showing":this.attach(),this._svg&&this.render(this._svg,!1)}}hide(){if(this._svg)for(;this._svg.lastChild;)this._svg.removeChild(this._svg.lastChild);this._state="not-showing"}remove(){this._svg&&this._svg.parentElement&&this._svg.parentElement.removeChild(this._svg),this._svg=void 0,this._state="unattached",this.detachListeners()}render(t,e){let n=this._config;e&&((n=JSON.parse(JSON.stringify(this._config))).animate=!1);let i=this.rects(),s=0;i.forEach(t=>s+=t.w);let u=n.animationDuration||800,l=0;for(let e=0;e<i.length;e++){let c=u*(i[e].w/s);(function(t,e,n,i,s,u){let l=[],c=n.strokeWidth||2,f=function(t){let e=t.padding;if(e||0===e){if("number"==typeof e)return[e,e,e,e];if(Array.isArray(e)&&e.length)switch(e.length){case 4:return[...e];case 1:return[e[0],e[0],e[0],e[0]];case 2:return[...e,...e];case 3:return[...e,e[1]];default:return[e[0],e[1],e[2],e[3]]}}return[5,5,5,5]}(n),d=void 0===n.animate||!!n.animate,g=n.iterations||2,p=n.rtl?1:0,v=m("single",u);switch(n.type){case"underline":{let t=e.y+e.h+f[2];for(let n=p;n<g+p;n++)n%2?l.push(o(e.x+e.w,t,e.x,t,v)):l.push(o(e.x,t,e.x+e.w,t,v));break}case"strike-through":{let t=e.y+e.h/2;for(let n=p;n<g+p;n++)n%2?l.push(o(e.x+e.w,t,e.x,t,v)):l.push(o(e.x,t,e.x+e.w,t,v));break}case"box":{let t=e.x-f[3],n=e.y-f[0],i=e.w+(f[1]+f[3]),r=e.h+(f[0]+f[2]);for(let e=0;e<g;e++)l.push(a([[t,n],[t+i,n],[t+i,n+r],[t,n+r]],!0,v));break}case"bracket":{let t=Array.isArray(n.brackets)?n.brackets:n.brackets?[n.brackets]:["right"],i=e.x-2*f[3],r=e.x+e.w+2*f[1],s=e.y-2*f[0],o=e.y+e.h+2*f[2];for(let n of t){let t;switch(n){case"bottom":t=[[i,e.y+e.h],[i,o],[r,o],[r,e.y+e.h]];break;case"top":t=[[i,e.y],[i,s],[r,s],[r,e.y]];break;case"left":t=[[e.x,s],[i,s],[i,o],[e.x,o]];break;case"right":t=[[e.x+e.w,s],[r,s],[r,o],[e.x+e.w,o]]}t&&l.push(a(t,!1,v))}break}case"crossed-off":{let t=e.x,n=e.y,i=t+e.w,r=n+e.h;for(let e=p;e<g+p;e++)e%2?l.push(o(i,r,t,n,v)):l.push(o(t,n,i,r,v));for(let e=p;e<g+p;e++)e%2?l.push(o(t,r,i,n,v)):l.push(o(i,n,t,r,v));break}case"circle":{let t=m("double",u),n=e.w+(f[1]+f[3]),i=e.h+(f[0]+f[2]),r=e.x-f[3]+n/2,s=e.y-f[0]+i/2,o=Math.floor(g/2),a=g-2*o;for(let e=0;e<o;e++)l.push(h(r,s,n,i,t));for(let t=0;t<a;t++)l.push(h(r,s,n,i,v));break}case"highlight":{let t=m("highlight",u);c=.95*e.h;let n=e.y+e.h/2;for(let i=p;i<g+p;i++)i%2?l.push(o(e.x+e.w,n,e.x,n,t)):l.push(o(e.x,n,e.x+e.w,n,t))}}if(l.length){let e=function(t){let e=[];for(let n of t){let t="";for(let i of n.ops){let n=i.data;switch(i.op){case"move":t.trim()&&e.push(t.trim()),t=`M${n[0]} ${n[1]} `;break;case"bcurveTo":t+=`C${n[0]} ${n[1]}, ${n[2]} ${n[3]}, ${n[4]} ${n[5]} `;break;case"lineTo":t+=`L${n[0]} ${n[1]} `}}t.trim()&&e.push(t.trim())}return e}(l),o=[],a=[],h=0,u=(t,e,n)=>t.setAttribute(e,n);for(let i of e){let e=document.createElementNS(r,"path");if(u(e,"d",i),u(e,"fill","none"),u(e,"stroke",n.color||"currentColor"),u(e,"stroke-width",""+c),d){let t=e.getTotalLength();o.push(t),h+=t}t.appendChild(e),a.push(e)}if(d){let t=0;for(let e=0;e<a.length;e++){let n=a[e],r=o[e],u=h?s*(r/h):0,l=i+t,c=n.style;c.strokeDashoffset=""+r,c.strokeDasharray=""+r,c.animation=`rough-notation-dash ${u}ms ease-out ${l}ms forwards`,t+=u}}}})(t,i[e],n,l+this._animationDelay,c,this._seed),l+=c}this._lastSizes=i,this._state="showing"}rects(){let t=[];if(this._svg){if(this._config.multiline){let e=this._e.getClientRects();for(let n=0;n<e.length;n++)t.push(this.svgRect(this._svg,e[n]))}else t.push(this.svgRect(this._svg,this._e.getBoundingClientRect()))}return t}svgRect(t,e){let n=t.getBoundingClientRect();return{x:(e.x||e.left)-(n.x||n.left),y:(e.y||e.top)-(n.y||n.top),w:e.width,h:e.height}}}/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var w=function(){return(w=Object.assign||function(t){for(var e,n=1,i=arguments.length;n<i;n++)for(var r in e=arguments[n])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}).apply(this,arguments)};function _(){for(var t=0,e=0,n=arguments.length;e<n;e++)t+=arguments[e].length;for(var i=Array(t),r=0,e=0;e<n;e++)for(var s=arguments[e],o=0,a=s.length;o<a;o++,r++)i[r]=s[o];return i}var b=(0,i.createContext)(null),y=(0,i.createContext)(null),k={annotations:[]};function x(t,e){var n=e.type,i=e.payload;if("ADD"===n){var r=_(t.annotations,[i]).reduce(function(t,e){var n=w({},t);return"number"==typeof e.order?n.withOrder=_(n.withOrder,[e]).sort(function(t,e){return t.order-e.order}):n.withoutOrder=_(n.withoutOrder,[e]),n},{withOrder:[],withoutOrder:[]});return w(w({},t),{annotations:_(r.withOrder,r.withoutOrder)})}return t}var M=function(t){var e=t.children,n=t.show,r=(0,i.useReducer)(x,k),s=r[0],o=r[1],a=(0,i.useRef)([]);return(0,i.useEffect)(function(){var t=0;s.annotations.forEach(function(e){var i=e.annotation;if(n){var r=setTimeout(function(){i.show()},t);a.current.push(r),t+=i.getAnnotation().animationDuration||800}else i.hide(),a.current.forEach(function(t){clearTimeout(t),a.current=a.current.filter(function(e){return e!==t})})})},[n,s,a]),i.createElement(b.Provider,{value:s},i.createElement(y.Provider,{value:o},e))},O=function(t,e){var n=(0,i.useContext)(b),r=(0,i.useContext)(y),s=(0,i.useRef)({annotation:t,context:n,dispatch:r,order:e});(0,i.useEffect)(function(){var t=s.current,e=t.annotation,n=t.context,i=t.dispatch,r=t.order;if(n&&i)return i({type:"ADD",payload:{annotation:e,order:r}})},[])},S=function(t){var e=t.animate,n=void 0===e||e,r=t.animationDelay,s=void 0===r?0:r,o=t.animationDuration,a=void 0===o?800:o,h=t.brackets,u=t.children,l=t.color,c=t.customElement,f=t.getAnnotationObject,d=t.iterations,g=t.multiline,p=t.order,m=t.padding,_=void 0===m?5:m,b=t.show,y=void 0!==b&&b,k=t.strokeWidth,x=void 0===k?1:k,M=t.type,S=function(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&0>e.indexOf(i)&&(n[i]=t[i]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,i=Object.getOwnPropertySymbols(t);r<i.length;r++)0>e.indexOf(i[r])&&Object.prototype.propertyIsEnumerable.call(t,i[r])&&(n[i[r]]=t[i[r]]);return n}(t,["animate","animationDelay","animationDuration","brackets","children","color","customElement","getAnnotationObject","iterations","multiline","order","padding","show","strokeWidth","type"]),R=(0,i.useRef)(null),C=(0,i.useRef)(),E=(0,i.useRef)({playing:!1,timeout:null}),z=(0,i.useRef)({animate:n,animationDuration:a,brackets:h,color:l,getAnnotationObject:f,iterations:void 0===d?2:d,multiline:void 0!==g&&g,padding:_,strokeWidth:x,type:void 0===M?"underline":M}),D=(0,i.useCallback)(function(){E.current.timeout||(E.current.timeout=window.setTimeout(function(){var t,e;E.current.playing=!0,null===(e=null===(t=C.current)||void 0===t?void 0:t.show)||void 0===e||e.call(t),window.setTimeout(function(){E.current.playing=!1,E.current.timeout=null},a)},s))},[s,a]),A=(0,i.useCallback)(function(){var t,e;null===(e=null===(t=C.current)||void 0===t?void 0:t.hide)||void 0===e||e.call(t),E.current.playing=!1,E.current.timeout&&(clearTimeout(E.current.timeout),E.current.timeout=null)},[]);return O({getAnnotation:(0,i.useCallback)(function(){return C.current},[C]),show:D,hide:A},"string"==typeof p?parseInt(p):p),(0,i.useEffect)(function(){var t,e=z.current,n=e.getAnnotationObject;return C.current=(t=R.current,new v(t,e)),n&&n(C.current),function(){var t,e;null===(e=null===(t=C.current)||void 0===t?void 0:t.remove)||void 0===e||e.call(t)}},[]),(0,i.useEffect)(function(){y?D():A()},[C,y,s,E,a,D,A]),(0,i.useEffect)(function(){C.current&&(C.current.animate=n,C.current.animationDuration=a,C.current.color=l,C.current.strokeWidth=x,C.current.padding=_)},[C,n,a,l,x,_]),i.createElement(void 0===c?"span":c,w({ref:R},S),u)}}}]);