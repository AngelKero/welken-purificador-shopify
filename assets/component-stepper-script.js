!function(){"use strict";var t,e={2146:function(t,e,n){var i=n(6455),r=n.n(i);class s extends HTMLElement{constructor(){super(),this.currentStep=0,this.fieldsets=[],this.nextButton=null,this.prevButton=null,this.submitButton=null,this.totalSteps=0,this.dateInput=null}connectedCallback(){this.fieldsets=Array.from(this.querySelectorAll("fieldset")),this.nextButton=this.querySelector("#next"),this.prevButton=this.querySelector("#prev"),this.submitButton=this.querySelector("#submit"),this.dateInput=this.querySelector("#fecha"),this.totalSteps=this.fieldsets.length,this.fieldsets.forEach(((t,e)=>{t.hidden=e!==this.currentStep})),this.nextButton&&this.nextButton.addEventListener("click",(()=>this.handleNext())),this.prevButton&&this.prevButton.addEventListener("click",(()=>this.handlePrev())),this.dateInput&&this.dateInput.addEventListener("input",(()=>this.validateDate())),this.updateStepCount()}async handleNext(){this.isStepValid()?this.currentStep<this.totalSteps-1?this.showStep(this.currentStep+1):this.submitForm():await r().fire({icon:"warning",title:"Campos incompletos",text:"Por favor, llena todos los campos requeridos.",confirmButtonText:"Entendido"})}handlePrev(){this.currentStep>0&&this.showStep(this.currentStep-1)}showStep(t){this.fieldsets[this.currentStep]&&(this.fieldsets[this.currentStep].hidden=!0),this.currentStep=t,this.fieldsets[this.currentStep]&&(this.fieldsets[this.currentStep].hidden=!1),this.updateStepCount()}isStepValid(){return Array.from(this.fieldsets[this.currentStep]?.querySelectorAll("input, select, textarea")||[]).every((t=>t.reportValidity()))}async validateDate(){if(this.dateInput){const t=new Date(this.dateInput.value).getDay();console.log(t),6===t&&(await r().fire({icon:"error",title:"Fecha no válida",text:"No se permite agendar en domingos. Por favor, elige otra fecha.",confirmButtonText:"Entendido"}),this.dateInput.value="")}}updateStepCount(){const t=this.nextButton?.querySelector(".count");t&&(t.textContent=`${this.currentStep+1}/${this.totalSteps}`),this.prevButton&&(this.prevButton.style.display=0===this.currentStep?"none":"inline-block"),this.nextButton&&(this.nextButton.textContent=this.currentStep===this.totalSteps-1?"Enviar":"Siguiente")}submitForm(){this.submitButton?.click()}}customElements.define("stepper-form",s)}},n={};function i(t){var r=n[t];if(void 0!==r)return r.exports;var s=n[t]={exports:{}};return e[t].call(s.exports,s,s.exports,i),s.exports}i.m=e,t=[],i.O=function(e,n,r,s){if(!n){var o=1/0;for(l=0;l<t.length;l++){n=t[l][0],r=t[l][1],s=t[l][2];for(var u=!0,h=0;h<n.length;h++)(!1&s||o>=s)&&Object.keys(i.O).every((function(t){return i.O[t](n[h])}))?n.splice(h--,1):(u=!1,s<o&&(o=s));if(u){t.splice(l--,1);var a=r();void 0!==a&&(e=a)}}return e}s=s||0;for(var l=t.length;l>0&&t[l-1][2]>s;l--)t[l]=t[l-1];t[l]=[n,r,s]},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,{a:e}),e},i.d=function(t,e){for(var n in e)i.o(e,n)&&!i.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.j=2916,function(){var t={2916:0};i.O.j=function(e){return 0===t[e]};var e=function(e,n){var r,s,o=n[0],u=n[1],h=n[2],a=0;if(o.some((function(e){return 0!==t[e]}))){for(r in u)i.o(u,r)&&(i.m[r]=u[r]);if(h)var l=h(i)}for(e&&e(n);a<o.length;a++)s=o[a],i.o(t,s)&&t[s]&&t[s][0](),t[s]=0;return i.O(l)},n=self.webpackChunkshopify_core=self.webpackChunkshopify_core||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var r=i.O(void 0,[1216],(function(){return i(2146)}));r=i.O(r)}();