/*! For license information please see 19.052277c050e309ae3bae.js.LICENSE.txt */
"use strict";(self.webpackChunkrm_frontend=self.webpackChunkrm_frontend||[]).push([[19],{1829:function(t,e,n){n.d(e,{k:function(){return h}});var r=n(321),a=n(447);function i(t){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i(t)}function o(){o=function(){return t};var t={},e=Object.prototype,n=e.hasOwnProperty,r=Object.defineProperty||function(t,e,n){t[e]=n.value},a="function"==typeof Symbol?Symbol:{},s=a.iterator||"@@iterator",c=a.asyncIterator||"@@asyncIterator",u=a.toStringTag||"@@toStringTag";function l(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(t){l=function(t,e,n){return t[e]=n}}function h(t,e,n,a){var i=e&&e.prototype instanceof v?e:v,o=Object.create(i.prototype),s=new E(a||[]);return r(o,"_invoke",{value:k(t,n,s)}),o}function f(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=h;var d={};function v(){}function g(){}function m(){}var y={};l(y,s,(function(){return this}));var p=Object.getPrototypeOf,w=p&&p(p(j([])));w&&w!==e&&n.call(w,s)&&(y=w);var b=m.prototype=v.prototype=Object.create(y);function I(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function L(t,e){function a(r,o,s,c){var u=f(t[r],t,o);if("throw"!==u.type){var l=u.arg,h=l.value;return h&&"object"==i(h)&&n.call(h,"__await")?e.resolve(h.__await).then((function(t){a("next",t,s,c)}),(function(t){a("throw",t,s,c)})):e.resolve(h).then((function(t){l.value=t,s(l)}),(function(t){return a("throw",t,s,c)}))}c(u.arg)}var o;r(this,"_invoke",{value:function(t,n){function r(){return new e((function(e,r){a(t,n,e,r)}))}return o=o?o.then(r,r):r()}})}function k(t,e,n){var r="suspendedStart";return function(a,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===a)throw i;return O()}for(n.method=a,n.arg=i;;){var o=n.delegate;if(o){var s=x(o,n);if(s){if(s===d)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var c=f(t,e,n);if("normal"===c.type){if(r=n.done?"completed":"suspendedYield",c.arg===d)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r="completed",n.method="throw",n.arg=c.arg)}}}function x(t,e){var n=e.method,r=t.iterator[n];if(void 0===r)return e.delegate=null,"throw"===n&&t.iterator.return&&(e.method="return",e.arg=void 0,x(t,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),d;var a=f(r,t.iterator,e.arg);if("throw"===a.type)return e.method="throw",e.arg=a.arg,e.delegate=null,d;var i=a.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,d):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,d)}function S(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function P(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function E(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(S,this),this.reset(!0)}function j(t){if(t){var e=t[s];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,a=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return a.next=a}}return{next:O}}function O(){return{value:void 0,done:!0}}return g.prototype=m,r(b,"constructor",{value:m,configurable:!0}),r(m,"constructor",{value:g,configurable:!0}),g.displayName=l(m,u,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,l(t,u,"GeneratorFunction")),t.prototype=Object.create(b),t},t.awrap=function(t){return{__await:t}},I(L.prototype),l(L.prototype,c,(function(){return this})),t.AsyncIterator=L,t.async=function(e,n,r,a,i){void 0===i&&(i=Promise);var o=new L(h(e,n,r,a),i);return t.isGeneratorFunction(n)?o:o.next().then((function(t){return t.done?t.value:o.next()}))},I(b),l(b,u,"Generator"),l(b,s,(function(){return this})),l(b,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},t.values=j,E.prototype={constructor:E,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(P),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(n,r){return o.type="throw",o.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],o=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var s=n.call(i,"catchLoc"),c=n.call(i,"finallyLoc");if(s&&c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var i=a;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var o=i?i.completion:{};return o.type=t,o.arg=e,i?(this.method="next",this.next=i.finallyLoc,d):this.complete(o)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),P(n),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var a=r.arg;P(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:j(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),d}},t}function s(t,e,n,r,a,i,o){try{var s=t[i](o),c=s.value}catch(t){return void n(t)}s.done?e(c):Promise.resolve(c).then(r,a)}function c(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,l(r.key),r)}}function u(t,e,n){return(e=l(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t){var e=function(t,e){if("object"!==i(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,e||"default");if("object"!==i(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"===i(e)?e:String(e)}var h=function(){function t(e,n,a,i){var o=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),u(this,"onAllImagesLoaded",void 0),u(this,"imageInstances",[]),u(this,"imagesLoaded",0),u(this,"isLoading",!1),u(this,"areAllImagesLoaded",!1),u(this,"seekCallbackData",void 0),this.onAllImagesLoaded=i;var s=(0,r.range)(1,n+1).map((function(t){return function(t,e,n){return"".concat(t,"/").concat(e.toString().padStart(6,"0"),".").concat(n||"jpg")}(e,t,a)}));s.forEach((function(t){o.imageInstances.push({image:new Image,isLoaded:!1,url:t})}))}var e,n,i,l,h;return e=t,n=[{key:"preloadFirstImage",value:function(){this.loadImage(0)}},{key:"loadImage",value:function(t){var e=this,n=this.imageInstances[t];n&&!n.isLoaded&&(n.image.onload=function(){n.isLoaded=!0,e.imagesLoaded++,e.imageInstances.length===e.imagesLoaded&&(e.areAllImagesLoaded=!0,e.isLoading=!1,e.onAllImagesLoaded&&e.onAllImagesLoaded()),e.seekCallbackData&&e.seekCallbackData.index===t&&(e.seekCallbackData.callback(n.image),e.seekCallbackData=void 0)},a.Z.requestIdleCallback((function(){n.image.src=n.url})))}},{key:"startLoad",value:function(){var t=this;if(!this.isLoading){this.areAllImagesLoaded=!1,this.isLoading=!0;for(var e=[0],n=Math.ceil(Math.log(this.imageInstances.length)/Math.log(2)),a=1;a<=n;a++)for(var i=Math.pow(2,a),o=Math.ceil(this.imageInstances.length/i),s=1;s<=i;s++){var c=s*o;e.push(c)}e=(0,r.uniq)(e).filter((function(e){return e<t.imageInstances.length})),e.forEach((function(e){return t.loadImage(e)}))}}},{key:"stopLoad",value:function(){this.isLoading&&(this.imageInstances.forEach((function(t){t.isLoaded||a.Z.requestIdleCallback((function(){t.image.onload=null,t.image.src=""}))})),this.isLoading=!1)}},{key:"seekImageByIndex",value:(l=o().mark((function t(e){var n,r=this;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.seekCallbackData&&(this.seekCallbackData.callback(void 0),this.seekCallbackData=void 0),n=e,t.abrupt("return",new Promise((function(t){e>r.imageInstances.length-1&&(n=r.imageInstances.length-1),e<0&&(n=0);var a=r.imageInstances[n];if(a.isLoaded)return t(a.image);r.seekCallbackData={index:n,callback:t}})));case 3:case"end":return t.stop()}}),t,this)})),h=function(){var t=this,e=arguments;return new Promise((function(n,r){var a=l.apply(t,e);function i(t){s(a,n,r,i,o,"next",t)}function o(t){s(a,n,r,i,o,"throw",t)}i(void 0)}))},function(t){return h.apply(this,arguments)})},{key:"getImageIndexByTimelinePercent",value:function(t){return Math.floor(this.imageInstances.length*t)}},{key:"getNumberOfImages",value:function(){return this.imageInstances.length}}],n&&c(e.prototype,n),i&&c(e,i),Object.defineProperty(e,"prototype",{writable:!1}),t}()},1830:function(t,e,n){n.d(e,{Y:function(){return c},w:function(){return f}});var r=n(974);function a(t){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a(t)}function i(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,s(r.key),r)}}function o(t,e,n){return(e=s(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function s(t){var e=function(t,e){if("object"!==a(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,e||"default");if("object"!==a(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"===a(e)?e:String(e)}var c,u=400,l=16.66,h=Math.floor(24.009603841536613);!function(t){t[t.Precise=0]="Precise",t[t.Lazy=1]="Lazy"}(c||(c={}));var f=function(){function t(e,n,r){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),o(this,"canvas",void 0),o(this,"imageLoader",void 0),o(this,"easingType",c.Lazy),o(this,"lastDrawnFrameIndex",void 0),o(this,"easingSequenceId",void 0),o(this,"lastEasingCallTime",0),o(this,"lastTargetIndex",0),o(this,"isPlayingAnimation",!1),o(this,"isPaused",!1),o(this,"byStepReverse",!1),this.canvas=e,this.imageLoader=n,this.easingType=r}var e,n,a;return e=t,n=[{key:"drawImageByIndex",value:function(t){var e=this,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return n?this.startEasingSequence(t):this.imageLoader.seekImageByIndex(t).then((function(n){return e.drawImage(n,t)}))}},{key:"drawImageByTimelinePercent",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=this.imageLoader.getImageIndexByTimelinePercent(t);return this.drawImageByIndex(n,e)}},{key:"startDrawingByStep",value:function(t,e){var n=this,r=e.speed,a=e.loop,i=e.spring,o=function(t){return t*l/r},s=o(t),c=null;this.isPlayingAnimation=!0,window.requestAnimationFrame((function e(r){if(!c&&n.isPaused&&n.lastDrawnFrameIndex){var u=n.byStepReverse?t-n.lastDrawnFrameIndex:n.lastDrawnFrameIndex;c=r-o(u+1),n.isPaused=!1}else c||(c=r);var l=Math.min((r-c)/s,1),h=Math.floor(l*(t-0)+0)/1;n.drawImageByIndex(n.byStepReverse?t-h:h).then((function(){1===l&&a?(c=r,i&&(n.byStepReverse=!n.byStepReverse)):1===l&&(n.isPlayingAnimation=!1),n.isPlayingAnimation&&window.requestAnimationFrame(e)}))}))}},{key:"stopDrawingByStep",value:function(){this.isPlayingAnimation=!1}},{key:"pauseDrawingByStep",value:function(){this.isPlayingAnimation=!1,this.isPaused=!0}},{key:"drawImage",value:function(t,e){var n=this;return new Promise((function(r,a){if(!t||e===n.lastDrawnFrameIndex)return r();var i,o,s=n.canvas.getContext("2d");if(!s)return a(new Error("Cannot find context to paint on"));var c=0,u=0,l=t.height/t.width;n.canvas.height/n.canvas.width>l?(i=n.canvas.height/l,o=n.canvas.height,c=(n.canvas.width-i)/2):(i=n.canvas.width,o=n.canvas.width*l,u=(n.canvas.height-o)/2),window.requestAnimationFrame((function(){s.clearRect(0,0,n.canvas.width,n.canvas.height),s.drawImage(t,0,0,t.width,t.height,c,u,i,o),n.lastDrawnFrameIndex=e,r()}))}))}},{key:"startEasingSequence",value:function(t){var e=this;clearInterval(this.easingSequenceId);var n=this.lastDrawnFrameIndex||0;return new Promise((function(a){var i=Date.now(),o=i-e.lastEasingCallTime,s=Math.abs(e.lastTargetIndex-t)/o,f=Math.round(s/o*e.imageLoader.getNumberOfImages()*2),d=Math.min(Math.round(.05*e.imageLoader.getNumberOfImages()),h,e.easingType===c.Precise?f:Math.ceil(u/o));e.lastEasingCallTime=i,e.lastTargetIndex=t;var v=t-n,g=t-Math.sign(v)*Math.min(d,Math.abs(t-n)),m=t-g,y=i,p=y+u;e.drawImageByIndex(g),e.easingSequenceId=setInterval((function(){var t=Date.now();if(t>p)return clearInterval(e.easingSequenceId),e.easingSequenceId=void 0,a();var n=(t-y)/u,i=r.Z.easeOutCubic(n),o=Math.round(m*i)+g;e.drawImageByIndex(o)}),l)}))}}],n&&i(e.prototype,n),a&&i(e,a),Object.defineProperty(e,"prototype",{writable:!1}),t}()}}]);