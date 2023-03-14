(()=>{"use strict";var e={174:e=>{e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),t.hash&&(e+=t.hash),t.maybeNeedQuotes&&/[\t\n\f\r "'=<>`]/.test(e)?'"'.concat(e,'"'):e):e}},513:(e,t,n)=>{e.exports=n.p+"3d4f16cb4bfc232ce3d8.png"},720:(e,t,n)=>{e.exports=n.p+"97fa275dc9b708dc8f8f.png"}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={exports:{}};return e[r](a,a.exports,n),a.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.p="",n.b=document.baseURI||self.location.href,(()=>{var e=n(174),t=n.n(e),r=new URL(n(720),n.b),o=new URL(n(513),n.b),a=new URL(n(720),n.b);t()(r),t()(o),t()(a);var c,s,l,i,u,m;function d(e){return/\S\S+/.test(e.value)}function f(e,t,n){var r=n.submitButtonSelector,o=n.inactiveButtonClass,a=e.querySelector(r);e.checkValidity()&&d(t)?(a.classList.remove(o),a.removeAttribute("disabled")):(a.classList.add(o),a.setAttribute("disabled",!0))}s=(c={formSelector:".form",inputSelector:".form__input_active",submitButtonSelector:".form__button",inactiveButtonClass:"form__button_disabled",inputErrorClass:"form__input_type_error",errorClass:"form__error_visible"}).formSelector,l=c.inputSelector,i=function(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}(c,["formSelector","inputSelector"]),u=document.querySelector(s),m=u.querySelector(l),u.addEventListener("submit",(function(e){e.preventDefault(),f(u,m,i)})),u.querySelectorAll(l).forEach((function(e){e.addEventListener("input",(function(){!function(e,t,n){t.validity.valid?d(t)&&function(e,t,n){var r=n.inputErrorClass,o=n.errorClass,a=e.querySelector(".".concat(t.id,"-error"));t.classList.remove(r),a.classList.remove(o),a.textContent=""}(e,t,n):function(e,t,n,r){var o=r.inputErrorClass,a=r.errorClass,c=e.querySelector(".".concat(t.id,"-error"));t.classList.add(o),c.classList.add(a),c.textContent=n}(e,t,t.validationMessage,n),f(e,t,n)}(u,e,i)}))}));const g=n.p+"2177d9efb4f2b78333fc.png",v=n.p+"f70f09a2722266120845.png",p=n.p+"32cc1a3545e04164f8fb.png",b=n.p+"c63ceb19a20abae9d2d9.png",S=n.p+"bf1b2ef9838827fcac0f.png",_=n.p+"b2c5418a4b41742651a9.png",y=n.p+"c169fdf09016829be7af.png";var h={"01":"января","02":"февраля","03":"марта","04":"апреля","05":"мая","06":"июня","07":"июля","08":"августа","09":"сентября",10:"октября",11:"ноября",12:"декабря"};function L(e){var t=new Date;e.value=t.toLocaleString("sv-SE",{year:"numeric",month:"2-digit",day:"2-digit"})}var k=function(){var e=(new Date).getHours();return e.toString().length<2?"0"+e:e},C=function(){var e=(new Date).getMinutes();return e.toString().length<2?"0"+e:e};function E(e,t){var n=(new Date).getFullYear(),r=(new Date).getDate(),o=(new Date).getMonth(),a=k(),c=C(),s=e.slice(0,4),l=e.slice(5,7),i=e.slice(8,10),u=e.slice(11,13),m=e.slice(14,16);return n===+s&&r===+i&&o+1===+l?t?"Сегодня ".concat(u,":").concat(m):"Сегодня ".concat(a,":").concat(c):n===+s&&r-1==+i&&o+1===+l?t?"Вчера ".concat(u,":").concat(m):"Вчера ".concat(a,":").concat(c):t?"".concat(i," ").concat(h[l]," ").concat(s," ").concat(u,":").concat(m):"".concat(i," ").concat(h[l]," ").concat(s," ").concat(a,":").concat(c)}function q(e){"Enter"===e.key&&(e.preventDefault(),e.target.nextElementSibling.focus(),"SPAN"===e.target.nextElementSibling.nodeName&&e.target.nextElementSibling.nextElementSibling.focus())}var O=document.querySelectorAll(".form__input_active"),x=document.getElementById("date"),w=document.querySelector(".form__user"),N=document.querySelector(".form__message"),I=document.querySelector(".form__button"),D=document.forms.commentForm,J=document.querySelector(".comments"),A=document.querySelector(".greeting");function M(e){e.target.classList.toggle("comment__like_active");var t=JSON.parse(localStorage.getItem("localComments")),n=e.target.closest(".comment").dataset.id;t.forEach((function(e){e.key===n&&(e.isLiked=!e.isLiked)})),localStorage.setItem("localComments",JSON.stringify(t))}O.forEach((function(e){e.addEventListener("keypress",q)})),L(x);var j=document.querySelector("#tmpl-comments").content,B=0;function P(e,t,n,r){var o=j.cloneNode(!0),a=o.querySelector(".comment");t?a.dataset.id=n:(B++,a.dataset.id=B),function(e){switch(Math.floor(7*Math.random())+1){case 1:e.src=g;break;case 2:e.src=v;break;case 3:e.src=p;break;case 4:e.src=b;break;case 5:e.src=S;break;case 6:e.src=_;break;case 7:e.src=y}}(o.querySelector(".comment__avatar")),o.querySelector(".comment__date").textContent=e.date,o.querySelector(".comment__name").textContent=e.name,o.querySelector(".comment__message").textContent=e.message;var c=o.querySelector(".comment__like"),s=o.querySelector(".comment__delete");return c.addEventListener("click",M),s.addEventListener("click",(function(){!function(e){var t=e.closest(".comment").dataset.id;e.closest(".comment").remove();var n=JSON.parse(localStorage.getItem("localComments")),r=[];n.forEach((function(e){e.key!==t&&r.push(e)})),localStorage.setItem("localComments",JSON.stringify(r)),0===r.length&&(A.classList.add("greeting_visible"),B=0)}(s)})),r?c.classList.add("comment__like_active"):c.classList.remove("comment__like_active"),o}function R(e,t,n,r){var o=P(e,t,n,r);return J.prepend(o),o}D.addEventListener("submit",(function(e){e.preventDefault(),R({date:E(x.value),name:w.value,message:N.value},!1);var t,n,r={key:J.firstElementChild.dataset.id,date:x.value+(t=k(),n=C()," ".concat(t,":").concat(n)),name:w.value,message:N.value,isLiked:!1},o=JSON.parse(localStorage.getItem("localComments"));if(o)o.push(r),localStorage.setItem("localComments",JSON.stringify(o));else{var a=[];a.push(r),localStorage.setItem("localComments",JSON.stringify(a))}A.classList.remove("greeting_visible"),I.setAttribute("disabled",!0),D.reset(),I.blur(),L(x)})),window.onload=function(){var e,t;e=[],(t=JSON.parse(localStorage.getItem("localComments")))&&0!==t.length?t&&t.forEach((function(t){B=t.key,e.push(t),R({date:E(t.date,!0),name:t.name,message:t.message},!0,t.key,t.isLiked)})):(A.classList.add("greeting_visible"),B=0),localStorage.setItem("localComments",JSON.stringify(t)),I.setAttribute("disabled",!0)}})()})();