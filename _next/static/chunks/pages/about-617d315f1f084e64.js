(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[521],{3454:function(e,t,r){"use strict";var n,i;e.exports=(null==(n=r.g.process)?void 0:n.env)&&"object"==typeof(null==(i=r.g.process)?void 0:i.env)?r.g.process:r(7663)},9212:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about",function(){return r(570)}])},570:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return f}});var n=r(5893),i=r(1664),o=r.n(i),s=r(9008),c=r.n(s),l=r(8193),a=r(1163),u=r(3454);function f(){let e=(0,a.useRouter)();return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(c(),{children:[(0,n.jsx)("title",{children:"Jakub Białosk\xf3rski - about me"}),(0,n.jsx)("link",{rel:"icon",href:"".concat(u.env.NEXT_PUBLIC_FAVICON,"/favicon.ico")}),(0,n.jsx)("script",{src:"/transition.js",async:!0,onLoad:()=>{e.reload()}})]}),(0,n.jsxs)("div",{id:"menu",children:[(0,n.jsx)("div",{id:"menu-items",children:(0,n.jsx)(o(),{href:"/",children:(0,n.jsx)("div",{className:"menu-item",children:"back"})})}),(0,n.jsx)("section",{className:"overflow-hidden text-white",children:(0,n.jsx)("div",{className:"container px-5 py-2 mx-auto lg:pt-12 lg:px-32",id:"about-items",children:(0,n.jsxs)("div",{className:"flex flex-wrap -m-1 md:-m-2",children:[(0,n.jsx)("div",{className:"flex flex-wrap w-full",children:(0,n.jsx)("div",{className:"w-full p-1 md:p-2",children:(0,n.jsx)("span",{children:"I am a DevOps engineer with ~8 years of experience, mostly focused on AWS."})})}),(0,n.jsx)("div",{className:"flex flex-wrap w-full",children:(0,n.jsx)("div",{className:"w-full p-1 md:p-2",children:(0,n.jsxs)("span",{children:["Feel free to contact me via: ",(0,n.jsxs)("div",{className:"flex justify-left",children:[(0,n.jsx)(o(),{href:"mailto:bialoskorski@icloud.com",children:(0,n.jsx)(l.Dme,{size:"2em"})}),(0,n.jsx)(o(),{href:"https://www.linkedin.com/in/jakub-bialoskorski",children:(0,n.jsx)(l._iD,{size:"2em"})}),(0,n.jsx)(o(),{href:"https://github.com/JakubBialoskorski",children:(0,n.jsx)(l.RrF,{size:"2em"})})]})]})})})]})})}),(0,n.jsx)("div",{id:"menu-background-pattern"}),(0,n.jsx)("div",{id:"menu-background-image"})]})]})}},7663:function(e){!function(){var t={229:function(e){var t,r,n,i=e.exports={};function o(){throw Error("setTimeout has not been defined")}function s(){throw Error("clearTimeout has not been defined")}function c(e){if(t===setTimeout)return setTimeout(e,0);if((t===o||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(r){try{return t.call(null,e,0)}catch(r){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:o}catch(e){t=o}try{r="function"==typeof clearTimeout?clearTimeout:s}catch(e){r=s}}();var l=[],a=!1,u=-1;function f(){a&&n&&(a=!1,n.length?l=n.concat(l):u=-1,l.length&&d())}function d(){if(!a){var e=c(f);a=!0;for(var t=l.length;t;){for(n=l,l=[];++u<t;)n&&n[u].run();u=-1,t=l.length}n=null,a=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===s||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function h(e,t){this.fun=e,this.array=t}function m(){}i.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];l.push(new h(e,t)),1!==l.length||a||c(d)},h.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=m,i.addListener=m,i.once=m,i.off=m,i.removeListener=m,i.removeAllListeners=m,i.emit=m,i.prependListener=m,i.prependOnceListener=m,i.listeners=function(e){return[]},i.binding=function(e){throw Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw Error("process.chdir is not supported")},i.umask=function(){return 0}}},r={};function n(e){var i=r[e];if(void 0!==i)return i.exports;var o=r[e]={exports:{}},s=!0;try{t[e](o,o.exports,n),s=!1}finally{s&&delete r[e]}return o.exports}n.ab="//";var i=n(229);e.exports=i}()},9008:function(e,t,r){e.exports=r(2636)},1163:function(e,t,r){e.exports=r(6885)},8357:function(e,t,r){"use strict";r.d(t,{w_:function(){return l}});var n=r(7294),i={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},o=n.createContext&&n.createContext(i),s=function(){return(s=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var i in t=arguments[r])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)},c=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var i=0,n=Object.getOwnPropertySymbols(e);i<n.length;i++)0>t.indexOf(n[i])&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]]);return r};function l(e){return function(t){return n.createElement(a,s({attr:s({},e.attr)},t),function e(t){return t&&t.map(function(t,r){return n.createElement(t.tag,s({key:r},t.attr),e(t.child))})}(e.child))}}function a(e){var t=function(t){var r,i=e.attr,o=e.size,l=e.title,a=c(e,["attr","size","title"]),u=o||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),n.createElement("svg",s({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,i,a,{className:r,style:s(s({color:e.color||t.color},t.style),e.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),l&&n.createElement("title",null,l),e.children)};return void 0!==o?n.createElement(o.Consumer,null,function(e){return t(e)}):t(i)}}},function(e){e.O(0,[617,774,888,179],function(){return e(e.s=9212)}),_N_E=e.O()}]);