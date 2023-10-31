(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[815],{3454:function(e,o,i){"use strict";var t,n;e.exports=(null==(t=i.g.process)?void 0:t.env)&&"object"==typeof(null==(n=i.g.process)?void 0:n.env)?i.g.process:i(7663)},5149:function(e,o,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/projects/ios/cymbalki/cymbalki-polityka-prywatnosci-privacy-policy",function(){return i(7462)}])},7462:function(e,o,i){"use strict";i.r(o),i.d(o,{default:function(){return CymbalkiPrivacyPage}});var t=i(5893),n=i(1664),r=i.n(n),a=i(9008),s=i.n(a),c=i(3454);function CymbalkiPrivacyPage(){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s(),{children:[(0,t.jsx)("title",{children:"Jakub Białosk\xf3rski - Cymbalki Privacy Policy"}),(0,t.jsx)("link",{rel:"icon",href:"".concat(c.env.NEXT_PUBLIC_FAVICON,"/favicon.ico")}),(0,t.jsx)("script",{src:"/transition.js",async:!0})]}),(0,t.jsxs)("div",{id:"menu",children:[(0,t.jsx)("div",{id:"menu-items",children:(0,t.jsx)(r(),{href:"https://apps.apple.com/pl/app/dot-xylophone/id1544977962",children:(0,t.jsx)("div",{className:"menu-item",children:"back to AppStore"})})}),(0,t.jsx)("section",{className:"overflow-hidden text-white",children:(0,t.jsx)("div",{className:"container px-5 py-2 mx-auto lg:pt-12 lg:px-32",id:"about-items",children:(0,t.jsx)("div",{className:"flex flex-wrap -m-1 md:-m-2",children:(0,t.jsx)("div",{className:"flex flex-wrap w-full",children:(0,t.jsxs)("div",{className:"w-full p-1 md:p-1 text-sm",children:[(0,t.jsx)("p",{children:" &nbsp "}),(0,t.jsx)("p",{children:"**Privacy Policy**"}),"Jakub Bialoskorski built the Cymbalki app as a Free app. This SERVICE is provided by Jakub Bialoskorski at no cost and is intended for use as is. This page is used to inform visitors regarding my policies with the collection, use, and disclosure of Personal Information if anyone decided to use my Service. If you choose to use my Service, then you agree to the collection and use of information in relation to this policy. The Personal Information that I collect is used for providing and improving the Service. I will not use or share your information with anyone except as described in this Privacy Policy.",(0,t.jsx)("p",{children:"**Information Collection and Use**"}),"For a better experience, while using our Service, I may require you to provide us with certain personally identifiable information. The information that I request will be retained on your device and is not collected by me in any way. The app does use third-party services that may collect information used to identify you.",(0,t.jsx)("p",{children:"**Log Data**"}),"I do not log ANY data, period.",(0,t.jsx)("p",{children:"**Cookies**"}),"Cookies are files with a small amount of data that are commonly used as anonymous unique identifiers. These are sent to your browser from the websites that you visit and are stored on your device`s internal memory. This Service does not use these “cookies” explicitly. However, the app may use third-party code and libraries that use “cookies” to collect information and improve their services. You have the option to either accept or refuse these cookies and know when a cookie is being sent to your device. If you choose to refuse our cookies, you may not be able to use some portions of this Service.",(0,t.jsx)("p",{children:"**Service Providers**"}),"I do not use any external Service Providers, apart from Swift libraries.",(0,t.jsx)("p",{children:"**Security**"}),"Remember that no method of transmission over the internet, or method of electronic storage is 100% secure and reliable, and I cannot guarantee it`s absolute security.",(0,t.jsx)("p",{children:"**Links to Other Sites**"}),"This Service do not contain any links, even my own.",(0,t.jsx)("p",{children:"**Children`s Privacy**"}),"These Services do not address anyone under the age of 13. I do not knowingly collect personally identifiable information from children under 13 years of age. In the case I discover that a child under 13 has provided me with personal information, I immediately delete this from our servers. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact me so that I will be able to do the necessary actions.",(0,t.jsx)("p",{children:"**Changes to This Privacy Policy**"}),"I may update our Privacy Policy from time to time. Thus, you are advised to review this page periodically for any changes. I will notify you of any changes by posting the new Privacy Policy on this page. This policy is effective as of 2023-01-22 .",(0,t.jsx)("p",{children:"**Contact me**"}),"If you have any questions or suggestions about my Privacy Policy, do not hesitate to contact me at ",(0,t.jsx)(r(),{href:"mailto:support@bialoskorski.eu",children:"support@bialoskorski.eu"})]})})})})}),(0,t.jsx)("div",{id:"menu-background-pattern"}),(0,t.jsx)("div",{id:"menu-background-image"})]})]})}},7663:function(e){!function(){var o={229:function(e){var o,i,t,n=e.exports={};function defaultSetTimout(){throw Error("setTimeout has not been defined")}function defaultClearTimeout(){throw Error("clearTimeout has not been defined")}function runTimeout(e){if(o===setTimeout)return setTimeout(e,0);if((o===defaultSetTimout||!o)&&setTimeout)return o=setTimeout,setTimeout(e,0);try{return o(e,0)}catch(i){try{return o.call(null,e,0)}catch(i){return o.call(this,e,0)}}}!function(){try{o="function"==typeof setTimeout?setTimeout:defaultSetTimout}catch(e){o=defaultSetTimout}try{i="function"==typeof clearTimeout?clearTimeout:defaultClearTimeout}catch(e){i=defaultClearTimeout}}();var r=[],a=!1,s=-1;function cleanUpNextTick(){a&&t&&(a=!1,t.length?r=t.concat(r):s=-1,r.length&&drainQueue())}function drainQueue(){if(!a){var e=runTimeout(cleanUpNextTick);a=!0;for(var o=r.length;o;){for(t=r,r=[];++s<o;)t&&t[s].run();s=-1,o=r.length}t=null,a=!1,function(e){if(i===clearTimeout)return clearTimeout(e);if((i===defaultClearTimeout||!i)&&clearTimeout)return i=clearTimeout,clearTimeout(e);try{i(e)}catch(o){try{return i.call(null,e)}catch(o){return i.call(this,e)}}}(e)}}function Item(e,o){this.fun=e,this.array=o}function noop(){}n.nextTick=function(e){var o=Array(arguments.length-1);if(arguments.length>1)for(var i=1;i<arguments.length;i++)o[i-1]=arguments[i];r.push(new Item(e,o)),1!==r.length||a||runTimeout(drainQueue)},Item.prototype.run=function(){this.fun.apply(null,this.array)},n.title="browser",n.browser=!0,n.env={},n.argv=[],n.version="",n.versions={},n.on=noop,n.addListener=noop,n.once=noop,n.off=noop,n.removeListener=noop,n.removeAllListeners=noop,n.emit=noop,n.prependListener=noop,n.prependOnceListener=noop,n.listeners=function(e){return[]},n.binding=function(e){throw Error("process.binding is not supported")},n.cwd=function(){return"/"},n.chdir=function(e){throw Error("process.chdir is not supported")},n.umask=function(){return 0}}},i={};function __nccwpck_require__(e){var t=i[e];if(void 0!==t)return t.exports;var n=i[e]={exports:{}},r=!0;try{o[e](n,n.exports,__nccwpck_require__),r=!1}finally{r&&delete i[e]}return n.exports}__nccwpck_require__.ab="//";var t=__nccwpck_require__(229);e.exports=t}()},9008:function(e,o,i){e.exports=i(4605)}},function(e){e.O(0,[774,888,179],function(){return e(e.s=5149)}),_N_E=e.O()}]);