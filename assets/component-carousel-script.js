!function(){"use strict";var e,t={262:function(e,t,i){var n=i(7099);if(void 0===customElements.get("component-carousel")){class e extends HTMLElement{constructor(){super(),this.images=this.querySelectorAll("img"),this.swiper=this.querySelector(".swiper"),this.dinamic_height=this.getAttribute("dinamic-height"),this.carousel=null,this.dinamic_height&&(this.setDinaicHeight(),window.addEventListener("resize",this.setDinaicHeight.bind(this)))}static get observedAttributes(){return[]}attributeChangedCallback(e,t,i){t!==i&&(this[e]=i)}connectedCallback(){document.addEventListener("DOMContentLoaded",this.setCarousel.bind(this))}setDinaicHeight(){const e=window.innerHeight,t=document.querySelector("header").offsetHeight,i=document.querySelector("header").offsetHeight;this.style.height=e-t-i+"px"}setCarousel(){this.carousel=new n.ZP(this.swiper,{modules:[n.W_,n.tl,n.xW,n.pt,n.oM],effect:"fade",fadeEffect:{crossFade:!0},autoplay:{delay:3500,disableOnInteraction:!0},slidesPerView:1,spaceBetween:0,speed:700,preloadImages:!1,lazy:!1,pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}})}}customElements.define("component-carousel",e)}}},i={};function n(e){var r=i[e];if(void 0!==r)return r.exports;var o=i[e]={exports:{}};return t[e].call(o.exports,o,o.exports,n),o.exports}n.m=t,e=[],n.O=function(t,i,r,o){if(!i){var s=1/0;for(l=0;l<e.length;l++){i=e[l][0],r=e[l][1],o=e[l][2];for(var a=!0,c=0;c<i.length;c++)(!1&o||s>=o)&&Object.keys(n.O).every((function(e){return n.O[e](i[c])}))?i.splice(c--,1):(a=!1,o<s&&(s=o));if(a){e.splice(l--,1);var u=r();void 0!==u&&(t=u)}}return t}o=o||0;for(var l=e.length;l>0&&e[l-1][2]>o;l--)e[l]=e[l-1];e[l]=[i,r,o]},n.d=function(e,t){for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.j=2551,function(){var e={2551:0};n.O.j=function(t){return 0===e[t]};var t=function(t,i){var r,o,s=i[0],a=i[1],c=i[2],u=0;if(s.some((function(t){return 0!==e[t]}))){for(r in a)n.o(a,r)&&(n.m[r]=a[r]);if(c)var l=c(n)}for(t&&t(i);u<s.length;u++)o=s[u],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return n.O(l)},i=self.webpackChunkshopify_core=self.webpackChunkshopify_core||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))}();var r=n.O(void 0,[1216],(function(){return n(262)}));r=n.O(r)}();