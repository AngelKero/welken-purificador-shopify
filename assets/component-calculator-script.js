!function(){"use strict";var r,o={1099:function(r,o,e){e(8048);const t=new class{constructor(r,o){this.semanasPorAño=52,this.mesesPorAño=12,this.costoCartuchoA=1090,this.costoCartuchoB=1590,this.mesesEntreReemplazosA=6,this.mesesEntreReemplazosB=19,this.precioPorGarrafon=r,this.garrafonesPorSemana=o}get reemplazosAnualesA(){return this.mesesPorAño/this.mesesEntreReemplazosA}get costoAnualA(){return this.costoCartuchoA*this.reemplazosAnualesA}get reemplazosAnualesB(){return this.mesesPorAño/this.mesesEntreReemplazosB}get costoAnualB(){return this.costoCartuchoB*this.reemplazosAnualesB}get costoAnualPurificador(){return this.costoAnualA+this.costoAnualB}get costoAnualGarrafones(){return this.precioPorGarrafon*this.garrafonesPorSemana*this.semanasPorAño}calcularAhorroAnual(){if(this.costoAnualPurificador>=this.costoAnualGarrafones)throw new Error("Con los datos ingresados, no estarías ahorrando dinero.");return this.costoAnualGarrafones-this.costoAnualPurificador}}(50,2).calcularAhorroAnual();console.log(`El ahorro anual sería de $${t}`)}},e={};function t(r){var s=e[r];if(void 0!==s)return s.exports;var n=e[r]={exports:{}};return o[r].call(n.exports,n,n.exports,t),n.exports}t.m=o,r=[],t.O=function(o,e,s,n){if(!e){var a=1/0;for(l=0;l<r.length;l++){e=r[l][0],s=r[l][1],n=r[l][2];for(var i=!0,u=0;u<e.length;u++)(!1&n||a>=n)&&Object.keys(t.O).every((function(r){return t.O[r](e[u])}))?e.splice(u--,1):(i=!1,n<a&&(a=n));if(i){r.splice(l--,1);var c=s();void 0!==c&&(o=c)}}return o}n=n||0;for(var l=r.length;l>0&&r[l-1][2]>n;l--)r[l]=r[l-1];r[l]=[e,s,n]},t.d=function(r,o){for(var e in o)t.o(o,e)&&!t.o(r,e)&&Object.defineProperty(r,e,{enumerable:!0,get:o[e]})},t.o=function(r,o){return Object.prototype.hasOwnProperty.call(r,o)},t.j=4167,function(){var r={4167:0};t.O.j=function(o){return 0===r[o]};var o=function(o,e){var s,n,a=e[0],i=e[1],u=e[2],c=0;if(a.some((function(o){return 0!==r[o]}))){for(s in i)t.o(i,s)&&(t.m[s]=i[s]);if(u)var l=u(t)}for(o&&o(e);c<a.length;c++)n=a[c],t.o(r,n)&&r[n]&&r[n][0](),r[n]=0;return t.O(l)},e=self.webpackChunkshopify_core=self.webpackChunkshopify_core||[];e.forEach(o.bind(null,0)),e.push=o.bind(null,e.push.bind(e))}();var s=t.O(void 0,[1216],(function(){return t(1099)}));s=t.O(s)}();