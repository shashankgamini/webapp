﻿!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.Sweetalert2=t()}(this,function(){"use strict";var e={title:"",titleText:"",text:"",html:"",type:null,customClass:"",target:"body",animation:!0,allowOutsideClick:!0,allowEscapeKey:!0,allowEnterKey:!0,showConfirmButton:!0,showCancelButton:!1,preConfirm:null,confirmButtonText:"OK",confirmButtonColor:"#3085d6",confirmButtonClass:null,cancelButtonText:"Cancel",cancelButtonColor:"#aaa",cancelButtonClass:null,buttonsStyling:!0,reverseButtons:!1,focusCancel:!1,showCloseButton:!1,showLoaderOnConfirm:!1,imageUrl:null,imageWidth:null,imageHeight:null,imageClass:null,timer:null,width:500,padding:20,background:"#fff",input:null,inputPlaceholder:"",inputValue:"",inputOptions:{},inputAutoTrim:!0,inputClass:null,inputAttributes:{},inputValidator:null,progressSteps:[],currentProgressStep:null,progressStepsDistance:"40px",onOpen:null,onClose:null},t="swal2-",n=function(e){var n={};for(var o in e)n[e[o]]=t+e[o];return n},o=n(["container","shown","iosfix","modal","overlay","fade","show","hide","noanimation","close","title","content","spacer","confirm","cancel","icon","image","input","file","range","select","radio","checkbox","textarea","inputerror","validationerror","progresssteps","activeprogressstep","progresscircle","progressline","loading","styled"]),r=n(["success","warning","info","question","error"]),i=function(e,t){e=String(e).replace(/[^0-9a-f]/gi,""),e.length<6&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]),t=t||0;for(var n="#",o=0;o<3;o++){var r=parseInt(e.substr(2*o,2),16);r=Math.round(Math.min(Math.max(0,r+r*t),255)).toString(16),n+=("00"+r).substr(r.length)}return n},a={previousWindowKeyDown:null,previousActiveElement:null,previousBodyPadding:null},l=function(e){if("undefined"==typeof document)return void console.error("SweetAlert2 requires document to initialize");var t=document.createElement("div");t.className=o.container,t.innerHTML=s;var n=document.querySelector(e.target);n||(console.warn("SweetAlert2: Can't find the target \""+e.target+'"'),n=document.body),n.appendChild(t);var r=c(),i=A(r,o.input),a=A(r,o.file),l=r.querySelector("."+o.range+" input"),u=r.querySelector("."+o.range+" output"),d=A(r,o.select),p=r.querySelector("."+o.checkbox+" input"),f=A(r,o.textarea);return i.oninput=function(){X.resetValidationError()},i.onkeydown=function(t){setTimeout(function(){13===t.keyCode&&e.allowEnterKey&&(t.stopPropagation(),X.clickConfirm())},0)},a.onchange=function(){X.resetValidationError()},l.oninput=function(){X.resetValidationError(),u.value=l.value},l.onchange=function(){X.resetValidationError(),l.previousSibling.value=l.value},d.onchange=function(){X.resetValidationError()},p.onchange=function(){X.resetValidationError()},f.oninput=function(){X.resetValidationError()},r},s=('\n <div  role="dialog" aria-labelledby="modalTitleId" aria-describedby="modalContentId" class="'+o.modal+'" tabIndex="-1" >\n   <ul class="'+o.progresssteps+'"></ul>\n   <div class="'+o.icon+" "+r.error+'">\n     <span class="x-mark"><span class="line left"></span><span class="line right"></span></span>\n   </div>\n   <div class="'+o.icon+" "+r.question+'">?</div>\n   <div class="'+o.icon+" "+r.warning+'">!</div>\n   <div class="'+o.icon+" "+r.info+'">i</div>\n   <div class="'+o.icon+" "+r.success+'">\n     <span class="line tip"></span> <span class="line long"></span>\n     <div class="placeholder"></div> <div class="fix"></div>\n   </div>\n   <img class="'+o.image+'">\n   <h2 class="'+o.title+'" id="modalTitleId"></h2>\n   <div id="modalContentId" class="'+o.content+'"></div>\n   <input class="'+o.input+'">\n   <input type="file" class="'+o.file+'">\n   <div class="'+o.range+'">\n     <output></output>\n     <input type="range">\n   </div>\n   <select class="'+o.select+'"></select>\n   <div class="'+o.radio+'"></div>\n   <label for="'+o.checkbox+'" class="'+o.checkbox+'">\n     <input type="checkbox">\n   </label>\n   <textarea class="'+o.textarea+'"></textarea>\n   <div class="'+o.validationerror+'"></div>\n   <hr class="'+o.spacer+'">\n   <button type="button" role="button" tabIndex="0" class="'+o.confirm+'">OK</button>\n   <button type="button" role="button" tabIndex="0" class="'+o.cancel+'">Cancel</button>\n   <span class="'+o.close+'">&times;</span>\n </div>\n').replace(/(^|\n)\s*/g,""),u=function(){return document.body.querySelector("."+o.container)},c=function(){return u()?u().querySelector("."+o.modal):null},d=function(){var e=c();return e.querySelectorAll("."+o.icon)},p=function(e){return u()?u().querySelector("."+e):null},f=function(){return p(o.title)},m=function(){return p(o.content)},v=function(){return p(o.image)},h=function(){return p(o.spacer)},y=function(){return p(o.progresssteps)},g=function(){return p(o.validationerror)},b=function(){return p(o.confirm)},w=function(){return p(o.cancel)},C=function(){return p(o.close)},k=function(e){var n=[b(),w()];return e&&n.reverse(),n.concat(Array.prototype.slice.call(c().querySelectorAll("button:not([class^="+t+"]), input:not([type=hidden]), textarea, select")))},x=function(e,t){return!!e.classList&&e.classList.contains(t)},S=function(e){if(e.focus(),"file"!==e.type){var t=e.value;e.value="",e.value=t}},E=function(e,t){if(e&&t){var n=t.split(/\s+/).filter(Boolean);n.forEach(function(t){e.classList.add(t)})}},B=function(e,t){if(e&&t){var n=t.split(/\s+/).filter(Boolean);n.forEach(function(t){e.classList.remove(t)})}},A=function(e,t){for(var n=0;n<e.childNodes.length;n++)if(x(e.childNodes[n],t))return e.childNodes[n]},P=function(e,t){t||(t="block"),e.style.opacity="",e.style.display=t},T=function(e){e.style.opacity="",e.style.display="none"},L=function(e){for(;e.firstChild;)e.removeChild(e.firstChild)},M=function(e){return e.offsetWidth||e.offsetHeight||e.getClientRects().length},q=function(e,t){e.style.removeProperty?e.style.removeProperty(t):e.style.removeAttribute(t)},V=function(e){if(!M(e))return!1;if("function"==typeof MouseEvent){var t=new MouseEvent("click",{view:window,bubbles:!1,cancelable:!0});e.dispatchEvent(t)}else if(document.createEvent){var n=document.createEvent("MouseEvents");n.initEvent("click",!1,!1),e.dispatchEvent(n)}else document.createEventObject?e.fireEvent("onclick"):"function"==typeof e.onclick&&e.onclick()},O=function(){var e=document.createElement("div"),t={WebkitAnimation:"webkitAnimationEnd",OAnimation:"oAnimationEnd oanimationend",msAnimation:"MSAnimationEnd",animation:"animationend"};for(var n in t)if(t.hasOwnProperty(n)&&void 0!==e.style[n])return t[n];return!1}(),H=function(){if(window.onkeydown=a.previousWindowKeyDown,a.previousActiveElement&&a.previousActiveElement.focus){var e=window.scrollX,t=window.scrollY;a.previousActiveElement.focus(),e&&t&&window.scrollTo(e,t)}},I=function(){var e="ontouchstart"in window||navigator.msMaxTouchPoints;if(e)return 0;var t=document.createElement("div");t.style.width="50px",t.style.height="50px",t.style.overflow="scroll",document.body.appendChild(t);var n=t.offsetWidth-t.clientWidth;return document.body.removeChild(t),n},N=function(e,t){var n=void 0;return function(){var o=function(){n=null,e()};clearTimeout(n),n=setTimeout(o,t)}},j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},K=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},D=K({},e),W=[],U=void 0,R=function(t){var n=c()||l(t);for(var i in t)e.hasOwnProperty(i)||"extraParams"===i||console.warn('SweetAlert2: Unknown parameter "'+i+'"');n.style.width="number"==typeof t.width?t.width+"px":t.width,n.style.padding=t.padding+"px",n.style.background=t.background;var a=f(),s=m(),u=b(),p=w(),g=C();if(t.titleText?a.innerText=t.titleText:a.innerHTML=t.title.split("\n").join("<br>"),t.text||t.html){if("object"===j(t.html))if(s.innerHTML="",0 in t.html)for(var k=0;k in t.html;k++)s.appendChild(t.html[k].cloneNode(!0));else s.appendChild(t.html.cloneNode(!0));else t.html?s.innerHTML=t.html:t.text&&(s.textContent=t.text);P(s)}else T(s);t.showCloseButton?P(g):T(g),n.className=o.modal,t.customClass&&E(n,t.customClass);var x=y(),S=parseInt(null===t.currentProgressStep?X.getQueueStep():t.currentProgressStep,10);t.progressSteps.length?(P(x),L(x),S>=t.progressSteps.length&&console.warn("SweetAlert2: Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"),t.progressSteps.forEach(function(e,n){var r=document.createElement("li");if(E(r,o.progresscircle),r.innerHTML=e,n===S&&E(r,o.activeprogressstep),x.appendChild(r),n!==t.progressSteps.length-1){var i=document.createElement("li");E(i,o.progressline),i.style.width=t.progressStepsDistance,x.appendChild(i)}})):T(x);for(var A=d(),M=0;M<A.length;M++)T(A[M]);if(t.type){var V=!1;for(var O in r)if(t.type===O){V=!0;break}if(!V)return console.error("SweetAlert2: Unknown alert type: "+t.type),!1;var H=n.querySelector("."+o.icon+"."+r[t.type]);switch(P(H),t.type){case"success":E(H,"animate"),E(H.querySelector(".tip"),"animate-success-tip"),E(H.querySelector(".long"),"animate-success-long");break;case"error":E(H,"animate-error-icon"),E(H.querySelector(".x-mark"),"animate-x-mark");break;case"warning":E(H,"pulse-warning")}}var I=v();t.imageUrl?(I.setAttribute("src",t.imageUrl),P(I),t.imageWidth?I.setAttribute("width",t.imageWidth):I.removeAttribute("width"),t.imageHeight?I.setAttribute("height",t.imageHeight):I.removeAttribute("height"),I.className=o.image,t.imageClass&&E(I,t.imageClass)):T(I),t.showCancelButton?p.style.display="inline-block":T(p),t.showConfirmButton?q(u,"display"):T(u);var N=h();t.showConfirmButton||t.showCancelButton?P(N):T(N),u.innerHTML=t.confirmButtonText,p.innerHTML=t.cancelButtonText,t.buttonsStyling&&(u.style.backgroundColor=t.confirmButtonColor,p.style.backgroundColor=t.cancelButtonColor),u.className=o.confirm,E(u,t.confirmButtonClass),p.className=o.cancel,E(p,t.cancelButtonClass),t.buttonsStyling?(E(u,o.styled),E(p,o.styled)):(B(u,o.styled),B(p,o.styled),u.style.backgroundColor=u.style.borderLeftColor=u.style.borderRightColor="",p.style.backgroundColor=p.style.borderLeftColor=p.style.borderRightColor=""),t.animation===!0?B(n,o.noanimation):E(n,o.noanimation)},z=function(e,t){var n=u(),r=c();e?(E(r,o.show),E(n,o.fade),B(r,o.hide)):B(r,o.fade),P(r),n.style.overflowY="hidden",O&&!x(r,o.noanimation)?r.addEventListener(O,function e(){r.removeEventListener(O,e),n.style.overflowY="auto"}):n.style.overflowY="auto",E(document.documentElement,o.shown),E(document.body,o.shown),E(n,o.shown),Q(),Z(),a.previousActiveElement=document.activeElement,null!==t&&"function"==typeof t&&setTimeout(function(){t(r)})},Q=function(){null===a.previousBodyPadding&&document.body.scrollHeight>window.innerHeight&&(a.previousBodyPadding=document.body.style.paddingRight,document.body.style.paddingRight=I()+"px")},Y=function(){null!==a.previousBodyPadding&&(document.body.style.paddingRight=a.previousBodyPadding,a.previousBodyPadding=null)},Z=function(){var e=/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream;if(e&&!x(document.body,o.iosfix)){var t=document.body.scrollTop;document.body.style.top=t*-1+"px",E(document.body,o.iosfix)}},J=function(){if(x(document.body,o.iosfix)){var e=parseInt(document.body.style.top,10);B(document.body,o.iosfix),document.body.style.top="",document.body.scrollTop=e*-1}},X=function e(){for(var t=arguments.length,n=Array(t),r=0;r<t;r++)n[r]=arguments[r];if(void 0===n[0])return console.error("SweetAlert2 expects at least 1 attribute!"),!1;var l=K({},D);switch(j(n[0])){case"string":l.title=n[0],l.html=n[1],l.type=n[2];break;case"object":K(l,n[0]),l.extraParams=n[0].extraParams,"email"===l.input&&null===l.inputValidator&&(l.inputValidator=function(e){return new Promise(function(t,n){var o=/^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;o.test(e)?t():n("Invalid email address")})});break;default:return console.error('SweetAlert2: Unexpected type of argument! Expected "string" or "object", got '+j(n[0])),!1}R(l);var s=u(),d=c();return new Promise(function(t,n){l.timer&&(d.timeout=setTimeout(function(){e.closeModal(l.onClose),n("timer")},l.timer));var r=function(e){if(e=e||l.input,!e)return null;switch(e){case"select":case"textarea":case"file":return A(d,o[e]);case"checkbox":return d.querySelector("."+o.checkbox+" input");case"radio":return d.querySelector("."+o.radio+" input:checked")||d.querySelector("."+o.radio+" input:first-child");case"range":return d.querySelector("."+o.range+" input");default:return A(d,o.input)}},p=function(){var e=r();if(!e)return null;switch(l.input){case"checkbox":return e.checked?1:0;case"radio":return e.checked?e.value:null;case"file":return e.files.length?e.files[0]:null;default:return l.inputAutoTrim?e.value.trim():e.value}};l.input&&setTimeout(function(){var e=r();e&&S(e)},0);for(var x=function(n){l.showLoaderOnConfirm&&e.showLoading(),l.preConfirm?l.preConfirm(n,l.extraParams).then(function(o){e.closeModal(l.onClose),t(o||n)},function(t){e.hideLoading(),t&&e.showValidationError(t)}):(e.closeModal(l.onClose),t(n))},L=function(t){var o=t||window.event,r=o.target||o.srcElement,a=b(),s=w(),u=a===r||a.contains(r),c=s===r||s.contains(r);switch(o.type){case"mouseover":case"mouseup":l.buttonsStyling&&(u?a.style.backgroundColor=i(l.confirmButtonColor,-.1):c&&(s.style.backgroundColor=i(l.cancelButtonColor,-.1)));break;case"mouseout":l.buttonsStyling&&(u?a.style.backgroundColor=l.confirmButtonColor:c&&(s.style.backgroundColor=l.cancelButtonColor));break;case"mousedown":l.buttonsStyling&&(u?a.style.backgroundColor=i(l.confirmButtonColor,-.2):c&&(s.style.backgroundColor=i(l.cancelButtonColor,-.2)));break;case"click":u&&e.isVisible()?(e.disableButtons(),l.input?!function(){var t=p();l.inputValidator?(e.disableInput(),l.inputValidator(t,l.extraParams).then(function(){e.enableButtons(),e.enableInput(),x(t)},function(t){e.enableButtons(),e.enableInput(),t&&e.showValidationError(t)})):x(t)}():x(!0)):c&&e.isVisible()&&(e.disableButtons(),e.closeModal(l.onClose),n("cancel"))}},q=d.querySelectorAll("button"),O=0;O<q.length;O++)q[O].onclick=L,q[O].onmouseover=L,q[O].onmouseout=L,q[O].onmousedown=L;C().onclick=function(){e.closeModal(l.onClose),n("close")},s.onclick=function(t){t.target===s&&l.allowOutsideClick&&(e.closeModal(l.onClose),n("overlay"))};var H=b(),I=w();l.reverseButtons?H.parentNode.insertBefore(I,H):H.parentNode.insertBefore(H,I);var K=function(e,t){for(var n=k(l.focusCancel),o=0;o<n.length;o++){e+=t,e===n.length?e=0:e===-1&&(e=n.length-1);var r=n[e];if(M(r))return r.focus()}},D=function(t){var o=t||window.event,r=o.keyCode||o.which;if([9,13,32,27].indexOf(r)!==-1){for(var i=o.target||o.srcElement,a=k(l.focusCancel),s=-1,u=0;u<a.length;u++)if(i===a[u]){s=u;break}9===r?(o.shiftKey?K(s,-1):K(s,1),o.stopPropagation(),o.preventDefault()):13===r||32===r?s===-1&&l.allowEnterKey&&(l.focusCancel?V(I,o):V(H,o)):27===r&&l.allowEscapeKey===!0&&(e.closeModal(l.onClose),n("esc"))}};a.previousWindowKeyDown=window.onkeydown,window.onkeydown=D,l.buttonsStyling&&(H.style.borderLeftColor=l.confirmButtonColor,H.style.borderRightColor=l.confirmButtonColor),e.showLoading=e.enableLoading=function(){P(h()),P(H,"inline-block"),E(H,o.loading),E(d,o.loading),H.disabled=!0,I.disabled=!0},e.hideLoading=e.disableLoading=function(){l.showConfirmButton||(T(H),l.showCancelButton||T(h())),B(H,o.loading),B(d,o.loading),H.disabled=!1,I.disabled=!1},e.getTitle=function(){return f()},e.getContent=function(){return m()},e.getInput=function(){return r()},e.getImage=function(){return v()},e.getConfirmButton=function(){return b()},e.getCancelButton=function(){return w()},e.enableButtons=function(){H.disabled=!1,I.disabled=!1},e.disableButtons=function(){H.disabled=!0,I.disabled=!0},e.enableConfirmButton=function(){H.disabled=!1},e.disableConfirmButton=function(){H.disabled=!0},e.enableInput=function(){var e=r();if(!e)return!1;if("radio"===e.type)for(var t=e.parentNode.parentNode,n=t.querySelectorAll("input"),o=0;o<n.length;o++)n[o].disabled=!1;else e.disabled=!1},e.disableInput=function(){var e=r();if(!e)return!1;if(e&&"radio"===e.type)for(var t=e.parentNode.parentNode,n=t.querySelectorAll("input"),o=0;o<n.length;o++)n[o].disabled=!0;else e.disabled=!0},e.recalculateHeight=N(function(){var e=c();if(e){var t=e.style.display;e.style.minHeight="",P(e),e.style.minHeight=e.scrollHeight+1+"px",e.style.display=t}},50),e.showValidationError=function(e){var t=g();t.innerHTML=e,P(t);var n=r();n&&(S(n),E(n,o.inputerror))},e.resetValidationError=function(){var t=g();T(t),e.recalculateHeight();var n=r();n&&B(n,o.inputerror)},e.getProgressSteps=function(){return l.progressSteps},e.setProgressSteps=function(e){l.progressSteps=e,R(l)},e.showProgressSteps=function(){P(y())},e.hideProgressSteps=function(){T(y())},e.enableButtons(),e.hideLoading(),e.resetValidationError();for(var W=["input","file","range","select","radio","checkbox","textarea"],Q=void 0,Y=0;Y<W.length;Y++){var Z=o[W[Y]],J=A(d,Z);if(Q=r(W[Y])){for(var X in Q.attributes)if(Q.attributes.hasOwnProperty(X)){var $=Q.attributes[X].name;"type"!==$&&"value"!==$&&Q.removeAttribute($)}for(var _ in l.inputAttributes)Q.setAttribute(_,l.inputAttributes[_])}J.className=Z,l.inputClass&&E(J,l.inputClass),T(J)}var F=void 0;!function(){switch(l.input){case"text":case"email":case"password":case"number":case"tel":Q=A(d,o.input),Q.value=l.inputValue,Q.placeholder=l.inputPlaceholder,Q.type=l.input,P(Q);break;case"file":Q=A(d,o.file),Q.placeholder=l.inputPlaceholder,Q.type=l.input,P(Q);break;case"range":var e=A(d,o.range),t=e.querySelector("input"),n=e.querySelector("output");t.value=l.inputValue,t.type=l.input,n.value=l.inputValue,P(e);break;case"select":var i=A(d,o.select);if(i.innerHTML="",l.inputPlaceholder){var a=document.createElement("option");a.innerHTML=l.inputPlaceholder,a.value="",a.disabled=!0,a.selected=!0,i.appendChild(a)}F=function(e){for(var t in e){var n=document.createElement("option");n.value=t,n.innerHTML=e[t],l.inputValue===t&&(n.selected=!0),i.appendChild(n)}P(i),i.focus()};break;case"radio":var s=A(d,o.radio);s.innerHTML="",F=function(e){for(var t in e){var n=document.createElement("input"),r=document.createElement("label"),i=document.createElement("span");n.type="radio",n.name=o.radio,n.value=t,l.inputValue===t&&(n.checked=!0),i.innerHTML=e[t],r.appendChild(n),r.appendChild(i),r.for=n.id,s.appendChild(r)}P(s);var a=s.querySelectorAll("input");a.length&&a[0].focus()};break;case"checkbox":var u=A(d,o.checkbox),c=r("checkbox");c.type="checkbox",c.value=1,c.id=o.checkbox,c.checked=Boolean(l.inputValue);var p=u.getElementsByTagName("span");p.length&&u.removeChild(p[0]),p=document.createElement("span"),p.innerHTML=l.inputPlaceholder,u.appendChild(p),P(u);break;case"textarea":var f=A(d,o.textarea);f.value=l.inputValue,f.placeholder=l.inputPlaceholder,P(f);break;case null:break;default:console.error('SweetAlert2: Unexpected type of input! Expected "text", "email", "password", "select", "checkbox", "textarea" or "file", got "'+l.input+'"')}}(),"select"!==l.input&&"radio"!==l.input||(l.inputOptions instanceof Promise?(e.showLoading(),l.inputOptions.then(function(t){e.hideLoading(),F(t)})):"object"===j(l.inputOptions)?F(l.inputOptions):console.error("SweetAlert2: Unexpected type of inputOptions! Expected object or Promise, got "+j(l.inputOptions))),z(l.animation,l.onOpen),l.allowEnterKey?K(-1,1):document.activeElement&&document.activeElement.blur(),u().scrollTop=0,"undefined"==typeof MutationObserver||U||(U=new MutationObserver(e.recalculateHeight),U.observe(d,{childList:!0,characterData:!0,subtree:!0}))})};return X.isVisible=function(){return!!c()},X.queue=function(e){W=e;var t=function(){W=[],document.body.removeAttribute("data-swal2-queue-step")},n=[];return new Promise(function(e,o){!function r(i,a){i<W.length?(document.body.setAttribute("data-swal2-queue-step",i),X(W[i]).then(function(e){n.push(e),r(i+1,a)},function(e){t(),o(e)})):(t(),e(n))}(0)})},X.getQueueStep=function(){return document.body.getAttribute("data-swal2-queue-step")},X.insertQueueStep=function(e,t){return t&&t<W.length?W.splice(t,0,e):W.push(e)},X.deleteQueueStep=function(e){"undefined"!=typeof W[e]&&W.splice(e,1)},X.close=X.closeModal=function(e){var t=u(),n=c();if(n){B(n,o.show),E(n,o.hide),clearTimeout(n.timeout),H();var r=function(){t.parentNode.removeChild(t),B(document.documentElement,o.shown),B(document.body,o.shown),Y(),J()};O&&!x(n,o.noanimation)?n.addEventListener(O,function e(){n.removeEventListener(O,e),x(n,o.hide)&&r()}):r(),null!==e&&"function"==typeof e&&setTimeout(function(){e(n)})}},X.clickConfirm=function(){return b().click()},X.clickCancel=function(){return w().click()},X.setDefaults=function(t){if(!t||"object"!==("undefined"==typeof t?"undefined":j(t)))return console.error("SweetAlert2: the argument for setDefaults() is required and has to be a object");for(var n in t)e.hasOwnProperty(n)||"extraParams"===n||(console.warn('SweetAlert2: Unknown parameter "'+n+'"'),delete t[n]);K(D,t)},X.resetDefaults=function(){D=K({},e)},X.noop=function(){},X.version="6.4.2",X.default=X,X}),window.Sweetalert2&&(window.sweetAlert=window.swal=window.Sweetalert2);