"use strict";(self.webpackChunkrm_frontend=self.webpackChunkrm_frontend||[]).push([[30],{1568:function(t,e,n){n.d(e,{$:function(){return s},o:function(){return l}});var o=n(691),r=n(995),i=n(1569),u=n(733),l=(0,o.createContext)({});function s(){var t=(0,o.useContext)(r.BackboneContext).model,e=(0,o.useContext)(l).model;return(0,u.jsx)(i.O,{activeLink:(null==e?void 0:e.activeLink)||(null==t?void 0:t.activeLink),isFullSize:(null==e?void 0:e.isFullSize)||(null==t?void 0:t.isFullSize),style:(null==t?void 0:t.style)||(null==e?void 0:e.style)||{},fixedPosition:null==t?void 0:t.fixedPosition})}},1573:function(t,e,n){n.d(e,{P:function(){return d}});var o,r=n(691),i=n(1013),u=n(1287),l=n(980);function s(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var o,r,i,u,l=[],s=!0,a=!1;try{if(i=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;s=!1}else for(;!(s=(o=i.call(n)).done)&&(l.push(o.value),l.length!==e);s=!0);}catch(t){a=!0,r=t}finally{try{if(!s&&null!=n.return&&(u=n.return(),Object(u)!==u))return}finally{if(a)throw r}}return l}}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return a(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return a(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o}var c=(0,u.M)(!(0,l.s$)()&&"hidden"===(null===(o=document.body)||void 0===o?void 0:o.style.overflow)).useStore,f=(0,u.M)(!1).useStore;function d(){var t=s(c(),2),e=t[0],n=t[1],o=s(f(),2),u=o[0],a=o[1],d=(0,i.jP)((function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];(0,l.s$)()||(document.body.style.overflow=t?"hidden":"",document.body.style.touchAction=t?"none":"",n(t),a(!!t&&e))}),[n,a]);return(0,r.useEffect)((function(){function t(t){t.preventDefault()}return u?window.addEventListener("mousewheel",t,{passive:!1}):window.removeEventListener("mousewheel",t),function(){window.removeEventListener("mousewheel",t)}}),[u]),(0,i.NY)((function(){return{isLocked:e,lockScroll:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];return d(!0,t)},unlockScroll:function(){return d(!1)}}}),[e,d])}},1287:function(t,e,n){n.d(e,{M:function(){return s}});n(691);var o=n(1289),r=n(1290),i=n(1011),u=n(1288);function l(t,e){return"function"==typeof e?(0,u.D)(t,e):(0,o.cn)(t)}function s(t,e){var n=void 0!==t,o=n?l(t,e):null;function u(){if(null===o)throw new i.H(i.G.StoreIsNotInitialized);return(0,r.KO)(o)}function s(){if(null===o)throw new i.H(i.G.StoreIsNotInitialized);return(0,r.b9)(o)}return n?{useStore:u,useSetState:s}:{initStore:function(t){o=l("function"==typeof t?t():t,e)},useStore:u,useSetState:s}}},1288:function(t,e,n){n.d(e,{D:function(){return r}});var o=n(1289);function r(t,e){var n;function r(){"function"==typeof n&&n()}var i=(0,o.cn)(t,(function(t,o,u){var l="function"!=typeof u?u:u(t(i));o(i,l),r(),n=e(l)}));return i.onMount=function(){return n=e(t),r},i}},1567:function(t,e,n){n.r(e);var o=n(335),r=n.n(o),i=n(311),u=n(939),l=n(1507),s=n(1568),a=n(995),c=n(717),f=n(715),d=l.Z.extend({propsModel:void 0,render:function(){var t=this.mag.viewport,e=[f.sJ.Default,f.sJ.TabletPortrait].includes(t);return this.h=e?72:60,this.w=this.mag.getViewportWidth(t),this.makeBox("widget-rm-header"),this.$header=(0,i.ZP)("<div>").appendTo(this.$el).get(0),this.propsModel=new(r().Model)({activeLink:this.activeLink,fixedPosition:this.fixed_position,isFullSize:e,style:this.getStyles()}),(0,a.renderReact)({component:s.$,domElement:this.$header,model:this.propsModel}),this.rendered=!0,this.widgetIsLoaded(),this},destroy:function(){return this.$header&&u.unmountComponentAtNode(this.$header),l.Z.prototype.destroy.apply(this,arguments)},getStyles:function(){var t=this.page.pageViewport,e=this.mag.viewport,n=this.mag.getViewportWidth(t);if(!(t===f.sJ.Default&&e===f.sJ.Default)||c.Z.isOn(t,n,this.mag.viewOpts)){var o=this.mag.getScale(t),r=1/o,i=c.Z.isCSSZoom(),u=c.Z.isCSSTransform(),l=t===f.sJ.Default&&e===f.sJ.TabletPortrait;return i?{width:"100%",zoom:r}:u||l?{width:"".concat(n*o,"px"),transform:"scale(".concat(r,")"),"transform-origin":"left top"}:{}}},onPageResize:function(){var t;l.Z.prototype.onPageResize.apply(this,arguments),null===(t=this.propsModel)||void 0===t||t.set({style:this.getStyles()})}});e.default=d}}]);