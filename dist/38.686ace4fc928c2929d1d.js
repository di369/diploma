(self.webpackChunkrm_frontend=self.webpackChunkrm_frontend||[]).push([[38],{1539:function(t,e,n){"use strict";n.r(e);var i=n(311),s=n(1537),o=n(1540),a=n.n(o),r=n(447),d=n(446),c=n(1527),h=n(714),u=s.default.extend({initialize:function(){s.default.prototype.initialize.apply(this,arguments),this.is_above&&this.mag.on("destroyed",this.destroy),this["bar-auto-open"]&&(this.mag.eCommerceCartManager.openSidebarOnAddItem=!0),this.mag.eCommerceManager.setCartWidgetExistState(!0)},render:function(){var t=this,e=!1;if(RM.screenshot)window.ServerData.userPermissions&&window.ServerData.userPermissions.can_use_e_commerce&&(e=!0);else{var n=c.Z.getPermissions();n&&n.can_use_e_commerce&&(e=!0)}if(e){if(s.default.prototype.render.apply(this,[{withoutHoverCursor:!0}]),this.$el.addClass("e-com-cart-button"),!RM.screenshot){h.Z.on("ecommerce:cartdata:changed",this.renderTotalItems);var i=this["font-family"];if(i&&!d.ZP.systemFontsList.includes(i.toLowerCase()))new(a())(this["font-family"]).load().then((function(){t.renderTotalItems(t.mag.eCommerceCartManager.getCartData())})).catch((function(){t.renderTotalItems(t.mag.eCommerceCartManager.getCartData())}));else this.renderTotalItems(this.mag.eCommerceCartManager.getCartData())}return this}},renderTotalItems:function(t){if(t&&(t.skus||t.prices)){var e=0;for(var n in t.skus)t.skus.hasOwnProperty(n)&&(e+=t.skus[n].cart_count);for(var i in t.prices)t.prices.hasOwnProperty(i)&&(e+=t.prices[i].cart_count);var s=e?"".concat(this.text||""," ").concat(e):this.text||"",o=this.recalcTextInputSize(s);this.renderButtonTextWithSizes(s,o)}},onButtonClick:function(){this.mag.eCommerceCartManager.changeCartSidebarVisibility()},recalcTextInputSize:function(t){var e,n,s,o,a=this["font-size"],d=this["letter-spacing"],c=this["font-family"],h=this["font-style"],u=this["font-weight"];return this.$textInputSizeAdjuster||(this.$textInputSizeAdjuster=(0,i.ZP)("<div/>"),this.$textInputSizeAdjuster.css({position:"absolute",left:"-9999px",top:"-9999px","white-space":"pre",width:"auto"}),(0,i.ZP)(document.getElementById("tmp")).append(this.$textInputSizeAdjuster)),this.$textInputSizeAdjuster.addClass("for-text-size-calc").addClass(r.Z.generateUUID()),this.$textInputSizeAdjuster.text(t.trim()),this.$textInputSizeAdjuster.css({"font-family":c,"font-style":h,"font-weight":u,"font-size":a+"px","letter-spacing":d+"px"}),e=this.$textInputSizeAdjuster.width(),n=this.$textInputSizeAdjuster.height(),this.$textInputSizeAdjuster.css("letter-spacing",0).text("M"),s=this.$textInputSizeAdjuster.width(),s=2*Math.ceil(s/2),o=this.$textInputSizeAdjuster.height(),0===t.length&&(e=s,n=o),e=2*Math.ceil(e/2),{text_w:e+=s,text_h:n=2*Math.ceil(n/2)}},destroy:function(){return h.Z.off("ecommerce:cartdata:changed",this.renderTotalItems),this.$textInputSizeAdjuster&&(this.$textInputSizeAdjuster.remove(),this.$textInputSizeAdjuster=null),s.default.prototype.destroy.apply(this,arguments)}});e.default=u},1540:function(t){!function(){function e(t,e){document.addEventListener?t.addEventListener("scroll",e,!1):t.attachEvent("scroll",e)}function n(t){this.a=document.createElement("div"),this.a.setAttribute("aria-hidden","true"),this.a.appendChild(document.createTextNode(t)),this.b=document.createElement("span"),this.c=document.createElement("span"),this.h=document.createElement("span"),this.f=document.createElement("span"),this.g=-1,this.b.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;",this.c.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;",this.f.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;",this.h.style.cssText="display:inline-block;width:200%;height:200%;font-size:16px;max-width:none;",this.b.appendChild(this.h),this.c.appendChild(this.f),this.a.appendChild(this.b),this.a.appendChild(this.c)}function i(t,e){t.a.style.cssText="max-width:none;min-width:20px;min-height:20px;display:inline-block;overflow:hidden;position:absolute;width:auto;margin:0;padding:0;top:-999px;white-space:nowrap;font-synthesis:none;font:"+e+";"}function s(t){var e=t.a.offsetWidth,n=e+100;return t.f.style.width=n+"px",t.c.scrollLeft=n,t.b.scrollLeft=t.b.scrollWidth+100,t.g!==e&&(t.g=e,!0)}function o(t,n){function i(){var t=o;s(t)&&t.a.parentNode&&n(t.g)}var o=t;e(t.b,i),e(t.c,i),s(t)}function a(t,e){var n=e||{};this.family=t,this.style=n.style||"normal",this.weight=n.weight||"normal",this.stretch=n.stretch||"normal"}var r=null,d=null,c=null,h=null;function u(){return null===h&&(h=!!document.fonts),h}function l(){if(null===c){var t=document.createElement("div");try{t.style.font="condensed 100px sans-serif"}catch(t){}c=""!==t.style.font}return c}function f(t,e){return[t.style,t.weight,l()?t.stretch:"","100px",e].join(" ")}a.prototype.load=function(t,e){var s=this,a=t||"BESbswy",c=0,h=e||3e3,l=(new Date).getTime();return new Promise((function(t,e){if(u()&&!function(){if(null===d)if(u()&&/Apple/.test(window.navigator.vendor)){var t=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))(?:\.([0-9]+))/.exec(window.navigator.userAgent);d=!!t&&603>parseInt(t[1],10)}else d=!1;return d}()){var p=new Promise((function(t,e){!function n(){(new Date).getTime()-l>=h?e(Error(h+"ms timeout exceeded")):document.fonts.load(f(s,'"'+s.family+'"'),a).then((function(e){1<=e.length?t():setTimeout(n,25)}),e)}()})),m=new Promise((function(t,e){c=setTimeout((function(){e(Error(h+"ms timeout exceeded"))}),h)}));Promise.race([m,p]).then((function(){clearTimeout(c),t(s)}),e)}else!function(t){document.body?t():document.addEventListener?document.addEventListener("DOMContentLoaded",(function e(){document.removeEventListener("DOMContentLoaded",e),t()})):document.attachEvent("onreadystatechange",(function e(){"interactive"!=document.readyState&&"complete"!=document.readyState||(document.detachEvent("onreadystatechange",e),t())}))}((function(){function d(){var e;(e=-1!=x&&-1!=g||-1!=x&&-1!=w||-1!=g&&-1!=w)&&((e=x!=g&&x!=w&&g!=w)||(null===r&&(e=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent),r=!!e&&(536>parseInt(e[1],10)||536===parseInt(e[1],10)&&11>=parseInt(e[2],10))),e=r&&(x==y&&g==y&&w==y||x==v&&g==v&&w==v||x==C&&g==C&&w==C)),e=!e),e&&(b.parentNode&&b.parentNode.removeChild(b),clearTimeout(c),t(s))}var u=new n(a),p=new n(a),m=new n(a),x=-1,g=-1,w=-1,y=-1,v=-1,C=-1,b=document.createElement("div");b.dir="ltr",i(u,f(s,"sans-serif")),i(p,f(s,"serif")),i(m,f(s,"monospace")),b.appendChild(u.a),b.appendChild(p.a),b.appendChild(m.a),document.body.appendChild(b),y=u.a.offsetWidth,v=p.a.offsetWidth,C=m.a.offsetWidth,function t(){if((new Date).getTime()-l>=h)b.parentNode&&b.parentNode.removeChild(b),e(Error(h+"ms timeout exceeded"));else{var n=document.hidden;!0!==n&&void 0!==n||(x=u.a.offsetWidth,g=p.a.offsetWidth,w=m.a.offsetWidth,d()),c=setTimeout(t,50)}}(),o(u,(function(t){x=t,d()})),i(u,f(s,'"'+s.family+'",sans-serif')),o(p,(function(t){g=t,d()})),i(p,f(s,'"'+s.family+'",serif')),o(m,(function(t){w=t,d()})),i(m,f(s,'"'+s.family+'",monospace'))}))}))},t.exports=a}()}}]);