(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["contact"],{"0a06":function(e,t,n){"use strict";var r=n("c532"),s=n("30b5"),o=n("f6b4"),a=n("5270"),i=n("4a7b");function c(e){this.defaults=e,this.interceptors={request:new o,response:new o}}c.prototype.request=function(e){"string"===typeof e?(e=arguments[1]||{},e.url=arguments[0]):e=e||{},e=i(this.defaults,e),e.method?e.method=e.method.toLowerCase():this.defaults.method?e.method=this.defaults.method.toLowerCase():e.method="get";var t=[a,void 0],n=Promise.resolve(e);this.interceptors.request.forEach((function(e){t.unshift(e.fulfilled,e.rejected)})),this.interceptors.response.forEach((function(e){t.push(e.fulfilled,e.rejected)}));while(t.length)n=n.then(t.shift(),t.shift());return n},c.prototype.getUri=function(e){return e=i(this.defaults,e),s(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")},r.forEach(["delete","get","head","options"],(function(e){c.prototype[e]=function(t,n){return this.request(r.merge(n||{},{method:e,url:t}))}})),r.forEach(["post","put","patch"],(function(e){c.prototype[e]=function(t,n,s){return this.request(r.merge(s||{},{method:e,url:t,data:n}))}})),e.exports=c},"0df6":function(e,t,n){"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}},"1d2b":function(e,t,n){"use strict";e.exports=function(e,t){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return e.apply(t,n)}}},2444:function(e,t,n){"use strict";(function(t){var r=n("c532"),s=n("c8af"),o={"Content-Type":"application/x-www-form-urlencoded"};function a(e,t){!r.isUndefined(e)&&r.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}function i(){var e;return("undefined"!==typeof XMLHttpRequest||"undefined"!==typeof t&&"[object process]"===Object.prototype.toString.call(t))&&(e=n("b50d")),e}var c={adapter:i(),transformRequest:[function(e,t){return s(t,"Accept"),s(t,"Content-Type"),r.isFormData(e)||r.isArrayBuffer(e)||r.isBuffer(e)||r.isStream(e)||r.isFile(e)||r.isBlob(e)?e:r.isArrayBufferView(e)?e.buffer:r.isURLSearchParams(e)?(a(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):r.isObject(e)?(a(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"===typeof e)try{e=JSON.parse(e)}catch(t){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};r.forEach(["delete","get","head"],(function(e){c.headers[e]={}})),r.forEach(["post","put","patch"],(function(e){c.headers[e]=r.merge(o)})),e.exports=c}).call(this,n("4362"))},"2d83":function(e,t,n){"use strict";var r=n("387f");e.exports=function(e,t,n,s,o){var a=new Error(e);return r(a,t,n,s,o)}},"2e67":function(e,t,n){"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},"30b5":function(e,t,n){"use strict";var r=n("c532");function s(e){return encodeURIComponent(e).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}e.exports=function(e,t,n){if(!t)return e;var o;if(n)o=n(t);else if(r.isURLSearchParams(t))o=t.toString();else{var a=[];r.forEach(t,(function(e,t){null!==e&&"undefined"!==typeof e&&(r.isArray(e)?t+="[]":e=[e],r.forEach(e,(function(e){r.isDate(e)?e=e.toISOString():r.isObject(e)&&(e=JSON.stringify(e)),a.push(s(t)+"="+s(e))})))})),o=a.join("&")}if(o){var i=e.indexOf("#");-1!==i&&(e=e.slice(0,i)),e+=(-1===e.indexOf("?")?"?":"&")+o}return e}},"387f":function(e,t,n){"use strict";e.exports=function(e,t,n,r,s){return e.config=t,n&&(e.code=n),e.request=r,e.response=s,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},e}},3934:function(e,t,n){"use strict";var r=n("c532");e.exports=r.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");function s(e){var r=e;return t&&(n.setAttribute("href",r),r=n.href),n.setAttribute("href",r),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}return e=s(window.location.href),function(t){var n=r.isString(t)?s(t):t;return n.protocol===e.protocol&&n.host===e.host}}():function(){return function(){return!0}}()},"3b77":function(e,t,n){},"467f":function(e,t,n){"use strict";var r=n("2d83");e.exports=function(e,t,n){var s=n.config.validateStatus;!s||s(n.status)?e(n):t(r("Request failed with status code "+n.status,n.config,null,n.request,n))}},4795:function(e,t,n){var r=n("23e7"),s=n("da84"),o=n("342f"),a=[].slice,i=/MSIE .\./.test(o),c=function(e){return function(t,n){var r=arguments.length>2,s=r?a.call(arguments,2):void 0;return e(r?function(){("function"==typeof t?t:Function(t)).apply(this,s)}:t,n)}};r({global:!0,bind:!0,forced:i},{setTimeout:c(s.setTimeout),setInterval:c(s.setInterval)})},"4a7b":function(e,t,n){"use strict";var r=n("c532");e.exports=function(e,t){t=t||{};var n={},s=["url","method","params","data"],o=["headers","auth","proxy"],a=["baseURL","url","transformRequest","transformResponse","paramsSerializer","timeout","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","maxContentLength","validateStatus","maxRedirects","httpAgent","httpsAgent","cancelToken","socketPath"];r.forEach(s,(function(e){"undefined"!==typeof t[e]&&(n[e]=t[e])})),r.forEach(o,(function(s){r.isObject(t[s])?n[s]=r.deepMerge(e[s],t[s]):"undefined"!==typeof t[s]?n[s]=t[s]:r.isObject(e[s])?n[s]=r.deepMerge(e[s]):"undefined"!==typeof e[s]&&(n[s]=e[s])})),r.forEach(a,(function(r){"undefined"!==typeof t[r]?n[r]=t[r]:"undefined"!==typeof e[r]&&(n[r]=e[r])}));var i=s.concat(o).concat(a),c=Object.keys(t).filter((function(e){return-1===i.indexOf(e)}));return r.forEach(c,(function(r){"undefined"!==typeof t[r]?n[r]=t[r]:"undefined"!==typeof e[r]&&(n[r]=e[r])})),n}},5270:function(e,t,n){"use strict";var r=n("c532"),s=n("c401"),o=n("2e67"),a=n("2444");function i(e){e.cancelToken&&e.cancelToken.throwIfRequested()}e.exports=function(e){i(e),e.headers=e.headers||{},e.data=s(e.data,e.headers,e.transformRequest),e.headers=r.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),r.forEach(["delete","get","head","post","put","patch","common"],(function(t){delete e.headers[t]}));var t=e.adapter||a.adapter;return t(e).then((function(t){return i(e),t.data=s(t.data,t.headers,e.transformResponse),t}),(function(t){return o(t)||(i(e),t&&t.response&&(t.response.data=s(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)}))}},"552e":function(e,t,n){"use strict";var r=n("3b77"),s=n.n(r);s.a},"5e62":function(e,t,n){},"7a77":function(e,t,n){"use strict";function r(e){this.message=e}r.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},r.prototype.__CANCEL__=!0,e.exports=r},"7aac":function(e,t,n){"use strict";var r=n("c532");e.exports=r.isStandardBrowserEnv()?function(){return{write:function(e,t,n,s,o,a){var i=[];i.push(e+"="+encodeURIComponent(t)),r.isNumber(n)&&i.push("expires="+new Date(n).toGMTString()),r.isString(s)&&i.push("path="+s),r.isString(o)&&i.push("domain="+o),!0===a&&i.push("secure"),document.cookie=i.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}()},"83b9":function(e,t,n){"use strict";var r=n("d925"),s=n("e683");e.exports=function(e,t){return e&&!r(t)?s(e,t):t}},"8df4":function(e,t,n){"use strict";var r=n("7a77");function s(e){if("function"!==typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise((function(e){t=e}));var n=this;e((function(e){n.reason||(n.reason=new r(e),t(n.reason))}))}s.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},s.source=function(){var e,t=new s((function(t){e=t}));return{token:t,cancel:e}},e.exports=s},b50d:function(e,t,n){"use strict";var r=n("c532"),s=n("467f"),o=n("30b5"),a=n("83b9"),i=n("c345"),c=n("3934"),u=n("2d83");e.exports=function(e){return new Promise((function(t,l){var f=e.data,d=e.headers;r.isFormData(f)&&delete d["Content-Type"];var p=new XMLHttpRequest;if(e.auth){var m=e.auth.username||"",h=e.auth.password||"";d.Authorization="Basic "+btoa(m+":"+h)}var v=a(e.baseURL,e.url);if(p.open(e.method.toUpperCase(),o(v,e.params,e.paramsSerializer),!0),p.timeout=e.timeout,p.onreadystatechange=function(){if(p&&4===p.readyState&&(0!==p.status||p.responseURL&&0===p.responseURL.indexOf("file:"))){var n="getAllResponseHeaders"in p?i(p.getAllResponseHeaders()):null,r=e.responseType&&"text"!==e.responseType?p.response:p.responseText,o={data:r,status:p.status,statusText:p.statusText,headers:n,config:e,request:p};s(t,l,o),p=null}},p.onabort=function(){p&&(l(u("Request aborted",e,"ECONNABORTED",p)),p=null)},p.onerror=function(){l(u("Network Error",e,null,p)),p=null},p.ontimeout=function(){var t="timeout of "+e.timeout+"ms exceeded";e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),l(u(t,e,"ECONNABORTED",p)),p=null},r.isStandardBrowserEnv()){var y=n("7aac"),g=(e.withCredentials||c(v))&&e.xsrfCookieName?y.read(e.xsrfCookieName):void 0;g&&(d[e.xsrfHeaderName]=g)}if("setRequestHeader"in p&&r.forEach(d,(function(e,t){"undefined"===typeof f&&"content-type"===t.toLowerCase()?delete d[t]:p.setRequestHeader(t,e)})),r.isUndefined(e.withCredentials)||(p.withCredentials=!!e.withCredentials),e.responseType)try{p.responseType=e.responseType}catch(b){if("json"!==e.responseType)throw b}"function"===typeof e.onDownloadProgress&&p.addEventListener("progress",e.onDownloadProgress),"function"===typeof e.onUploadProgress&&p.upload&&p.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then((function(e){p&&(p.abort(),l(e),p=null)})),void 0===f&&(f=null),p.send(f)}))}},b8fa:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"contact"},[e._m(0),n("Form")],1)},s=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container-fluid main-cont"},[n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("h2",{staticClass:"title"},[e._v("Contact "),n("span",{staticClass:"text-blue"},[e._v("Us")])])])])])}],o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"contact-form rounded-section overflow-hidden"},[n("section",{staticClass:"map-section"},[n("div",{staticClass:"layout-op position-absolute"}),n("div",{staticClass:"container p-5"},[n("div",{staticClass:"row"},[n("div",{staticClass:"contact-cont p-lg-5 p-4 col-md-8"},[e._m(0),n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-12"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-6"},[n("label",{staticClass:"inp",attrs:{for:"full_name"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.full_name,expression:"full_name"}],ref:"full_name",attrs:{type:"text",id:"full_name",placeholder:" ",required:""},domProps:{value:e.full_name},on:{input:function(t){t.target.composing||(e.full_name=t.target.value)}}}),e._m(1),n("span",{staticClass:"border"})]),n("p",{ref:"err_name",staticClass:"text-danger"})]),n("div",{staticClass:"col-md-6"},[n("label",{staticClass:"inp",attrs:{for:"phone"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.phone,expression:"phone"}],ref:"phone",attrs:{type:"text",id:"phone",placeholder:" ",required:""},domProps:{value:e.phone},on:{input:function(t){t.target.composing||(e.phone=t.target.value)}}}),e._m(2),n("span",{staticClass:"border"})]),n("p",{ref:"err_phone",staticClass:"text-danger"})]),n("div",{staticClass:"col-md-6"},[n("label",{staticClass:"inp",attrs:{for:"company"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.company,expression:"company"}],ref:"company",attrs:{type:"text",id:"company",placeholder:" "},domProps:{value:e.company},on:{input:function(t){t.target.composing||(e.company=t.target.value)}}}),n("span",{staticClass:"label"},[e._v("Company Name")]),n("span",{staticClass:"border"})])]),n("div",{staticClass:"col-md-6"},[n("label",{staticClass:"inp",attrs:{for:"email"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],ref:"email",attrs:{type:"email",id:"email",placeholder:" "},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}}),e._m(3),n("span",{staticClass:"border"})]),n("p",{ref:"err_email",staticClass:"text-danger"})]),n("div",{staticClass:"col-md-12"},[n("label",{staticClass:"inp message",attrs:{for:"message"}},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.message,expression:"message"}],ref:"message",attrs:{name:"message",id:"message",placeholder:" "},domProps:{value:e.message},on:{input:function(t){t.target.composing||(e.message=t.target.value)}}}),e._v(" "),n("span",{staticClass:"label"},[e._v("Message")]),n("span",{staticClass:"border"})])]),n("div",{staticClass:"send-part col-md-12 mt-5"},[n("button",{ref:"rounded_button",staticClass:"rounded-btn send btn btn-primary",on:{click:e.send}},[e._v("Send Message ")]),n("img",{ref:"loader",staticClass:"send-loader",attrs:{src:"/loader.gif",alt:"Loader"}})]),n("div",{ref:"resp",staticClass:"resp text-uppercase"},[e._v(" thank you for your message. it has been sent! ")])])])])])])])])])},a=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"text-cont"},[n("h3",{staticClass:"text-blue"},[n("p",{staticClass:"dots float-left mt-2  mr-2"}),e._v("Contact us")]),n("p",[e._v("We are here to answer your all the questions")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",{staticClass:"label"},[e._v("Full Name "),n("i",{staticClass:"text-danger"},[e._v("*")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",{staticClass:"label"},[e._v("Phone Number "),n("i",{staticClass:"text-danger"},[e._v("*")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",{staticClass:"label"},[e._v("Email "),n("i",{staticClass:"text-danger"},[e._v("*")])])}],i=(n("4795"),n("bc3a")),c=n.n(i),u={name:"Form",data:function(){return{full_name:"",phone:"",company:"",email:"",message:""}},methods:{send:function(){var e=this;return""==this.full_name?(this.$refs.full_name.style.borderBottom="2px solid red",this.$refs.err_name.innerHTML="Full name field must required!",void(this.$refs.err_name.style.display="block")):""==this.phone?(this.$refs.phone.style.borderBottom="2px solid red",void(this.$refs.err_phone.innerHTML="Phone number field must required!")):""==this.email?(this.$refs.email.style.borderBottom="2px solid red",void(this.$refs.err_email.innerHTML="Email field must required!")):""!=this.email&&!1===this.validateEmail(this.email)?(this.$refs.email.style.borderBottom="2px solid red",void(this.$refs.err_email.innerHTML="Please enter valid email!")):(this.$refs.rounded_button.style.display="none",this.$refs.loader.style.display="block",this.$refs.err_email.style.display="none",this.$refs.err_name.style.display="none",this.$refs.err_phone.style.display="none",this.$refs.full_name.style.borderBottom="2px solid #2fa9de",this.$refs.phone.style.borderBottom="2px solid #2fa9de",this.$refs.email.style.borderBottom="2px solid #2fa9de",void c.a.post("https://emails.aimtech.am/index.php",{full_name:this.full_name,phone:this.phone,company:this.company,email:this.email,message:this.message},{headers:{"Content-Type":"application/x-www-form-urlencoded; charset=UTF-8"}}).then((function(t){e.$refs.resp.style.display="block",e.$refs.rounded_button.style.display="block",e.$refs.loader.style.display="none",e.full_name="",e.phone="",e.company="",e.email="",e.message="",setTimeout((function(){e.$refs.resp.style.display="none"}),2e4)}))["catch"]((function(t){e.$refs.rounded_button.style.display="block",e.$refs.loader.style.display="none"})))},validateEmail:function(e){return!!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e)}}},l=u,f=(n("552e"),n("2877")),d=Object(f["a"])(l,o,a,!1,null,"8d6e9a64",null),p=d.exports,m={name:"Contact",components:{Form:p}},h=m,v=(n("da6d"),Object(f["a"])(h,r,s,!1,null,"adc2043a",null));t["default"]=v.exports},bc3a:function(e,t,n){e.exports=n("cee4")},c345:function(e,t,n){"use strict";var r=n("c532"),s=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,n,o,a={};return e?(r.forEach(e.split("\n"),(function(e){if(o=e.indexOf(":"),t=r.trim(e.substr(0,o)).toLowerCase(),n=r.trim(e.substr(o+1)),t){if(a[t]&&s.indexOf(t)>=0)return;a[t]="set-cookie"===t?(a[t]?a[t]:[]).concat([n]):a[t]?a[t]+", "+n:n}})),a):a}},c401:function(e,t,n){"use strict";var r=n("c532");e.exports=function(e,t,n){return r.forEach(n,(function(n){e=n(e,t)})),e}},c532:function(e,t,n){"use strict";var r=n("1d2b"),s=Object.prototype.toString;function o(e){return"[object Array]"===s.call(e)}function a(e){return"undefined"===typeof e}function i(e){return null!==e&&!a(e)&&null!==e.constructor&&!a(e.constructor)&&"function"===typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}function c(e){return"[object ArrayBuffer]"===s.call(e)}function u(e){return"undefined"!==typeof FormData&&e instanceof FormData}function l(e){var t;return t="undefined"!==typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer,t}function f(e){return"string"===typeof e}function d(e){return"number"===typeof e}function p(e){return null!==e&&"object"===typeof e}function m(e){return"[object Date]"===s.call(e)}function h(e){return"[object File]"===s.call(e)}function v(e){return"[object Blob]"===s.call(e)}function y(e){return"[object Function]"===s.call(e)}function g(e){return p(e)&&y(e.pipe)}function b(e){return"undefined"!==typeof URLSearchParams&&e instanceof URLSearchParams}function x(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")}function C(){return("undefined"===typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&("undefined"!==typeof window&&"undefined"!==typeof document)}function w(e,t){if(null!==e&&"undefined"!==typeof e)if("object"!==typeof e&&(e=[e]),o(e))for(var n=0,r=e.length;n<r;n++)t.call(null,e[n],n,e);else for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.call(null,e[s],s,e)}function _(){var e={};function t(t,n){"object"===typeof e[n]&&"object"===typeof t?e[n]=_(e[n],t):e[n]=t}for(var n=0,r=arguments.length;n<r;n++)w(arguments[n],t);return e}function E(){var e={};function t(t,n){"object"===typeof e[n]&&"object"===typeof t?e[n]=E(e[n],t):e[n]="object"===typeof t?E({},t):t}for(var n=0,r=arguments.length;n<r;n++)w(arguments[n],t);return e}function S(e,t,n){return w(t,(function(t,s){e[s]=n&&"function"===typeof t?r(t,n):t})),e}e.exports={isArray:o,isArrayBuffer:c,isBuffer:i,isFormData:u,isArrayBufferView:l,isString:f,isNumber:d,isObject:p,isUndefined:a,isDate:m,isFile:h,isBlob:v,isFunction:y,isStream:g,isURLSearchParams:b,isStandardBrowserEnv:C,forEach:w,merge:_,deepMerge:E,extend:S,trim:x}},c8af:function(e,t,n){"use strict";var r=n("c532");e.exports=function(e,t){r.forEach(e,(function(n,r){r!==t&&r.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[r])}))}},cee4:function(e,t,n){"use strict";var r=n("c532"),s=n("1d2b"),o=n("0a06"),a=n("4a7b"),i=n("2444");function c(e){var t=new o(e),n=s(o.prototype.request,t);return r.extend(n,o.prototype,t),r.extend(n,t),n}var u=c(i);u.Axios=o,u.create=function(e){return c(a(u.defaults,e))},u.Cancel=n("7a77"),u.CancelToken=n("8df4"),u.isCancel=n("2e67"),u.all=function(e){return Promise.all(e)},u.spread=n("0df6"),e.exports=u,e.exports.default=u},d925:function(e,t,n){"use strict";e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},da6d:function(e,t,n){"use strict";var r=n("5e62"),s=n.n(r);s.a},e683:function(e,t,n){"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},f6b4:function(e,t,n){"use strict";var r=n("c532");function s(){this.handlers=[]}s.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},s.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},s.prototype.forEach=function(e){r.forEach(this.handlers,(function(t){null!==t&&e(t)}))},e.exports=s}}]);
//# sourceMappingURL=contact.4f2e9323.js.map