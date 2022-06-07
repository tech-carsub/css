var jt=Object.defineProperty;var zt=(n,t,e)=>t in n?jt(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e;var q=(n,t,e)=>(zt(n,typeof t!="symbol"?t+"":t,e),e);const Dt=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function e(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerpolicy&&(o.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?o.credentials="include":i.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(i){if(i.ep)return;i.ep=!0;const o=e(i);fetch(i.href,o)}};Dt();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const st=window.ShadowRoot&&(window.ShadyCSS===void 0||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,it=Symbol(),ct=new Map;class Et{constructor(t,e){if(this._$cssResult$=!0,e!==it)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){let t=ct.get(this.cssText);return st&&t===void 0&&(ct.set(this.cssText,t=new CSSStyleSheet),t.replaceSync(this.cssText)),t}toString(){return this.cssText}}const It=n=>new Et(typeof n=="string"?n:n+"",it),bt=(n,...t)=>{const e=n.length===1?n[0]:t.reduce((s,i,o)=>s+(r=>{if(r._$cssResult$===!0)return r.cssText;if(typeof r=="number")return r;throw Error("Value passed to 'css' function must be a 'css' function result: "+r+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+n[o+1],n[0]);return new Et(e,it)},Bt=(n,t)=>{st?n.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):t.forEach(e=>{const s=document.createElement("style"),i=window.litNonce;i!==void 0&&s.setAttribute("nonce",i),s.textContent=e.cssText,n.appendChild(s)})},dt=st?n=>n:n=>n instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return It(e)})(n):n;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var F;const ut=window.trustedTypes,Vt=ut?ut.emptyScript:"",pt=window.reactiveElementPolyfillSupport,X={toAttribute(n,t){switch(t){case Boolean:n=n?Vt:null;break;case Object:case Array:n=n==null?n:JSON.stringify(n)}return n},fromAttribute(n,t){let e=n;switch(t){case Boolean:e=n!==null;break;case Number:e=n===null?null:Number(n);break;case Object:case Array:try{e=JSON.parse(n)}catch{e=null}}return e}},wt=(n,t)=>t!==n&&(t==t||n==n),G={attribute:!0,type:String,converter:X,reflect:!1,hasChanged:wt};class x extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(t){var e;(e=this.l)!==null&&e!==void 0||(this.l=[]),this.l.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,s)=>{const i=this._$Eh(s,e);i!==void 0&&(this._$Eu.set(i,s),t.push(i))}),t}static createProperty(t,e=G){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const s=typeof t=="symbol"?Symbol():"__"+t,i=this.getPropertyDescriptor(t,s,e);i!==void 0&&Object.defineProperty(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){return{get(){return this[e]},set(i){const o=this[t];this[e]=i,this.requestUpdate(t,o,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||G}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const e=this.properties,s=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const i of s)this.createProperty(i,e[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const i of s)e.unshift(dt(i))}else t!==void 0&&e.push(dt(t));return e}static _$Eh(t,e){const s=e.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}o(){var t;this._$Ep=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Em(),this.requestUpdate(),(t=this.constructor.l)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,s;((e=this._$Eg)!==null&&e!==void 0?e:this._$Eg=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((s=t.hostConnected)===null||s===void 0||s.call(t))}removeController(t){var e;(e=this._$Eg)===null||e===void 0||e.splice(this._$Eg.indexOf(t)>>>0,1)}_$Em(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Et.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return Bt(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$Eg)===null||t===void 0||t.forEach(e=>{var s;return(s=e.hostConnected)===null||s===void 0?void 0:s.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$Eg)===null||t===void 0||t.forEach(e=>{var s;return(s=e.hostDisconnected)===null||s===void 0?void 0:s.call(e)})}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$ES(t,e,s=G){var i,o;const r=this.constructor._$Eh(t,s);if(r!==void 0&&s.reflect===!0){const u=((o=(i=s.converter)===null||i===void 0?void 0:i.toAttribute)!==null&&o!==void 0?o:X.toAttribute)(e,s.type);this._$Ei=t,u==null?this.removeAttribute(r):this.setAttribute(r,u),this._$Ei=null}}_$AK(t,e){var s,i,o;const r=this.constructor,u=r._$Eu.get(t);if(u!==void 0&&this._$Ei!==u){const h=r.getPropertyOptions(u),l=h.converter,d=(o=(i=(s=l)===null||s===void 0?void 0:s.fromAttribute)!==null&&i!==void 0?i:typeof l=="function"?l:null)!==null&&o!==void 0?o:X.fromAttribute;this._$Ei=u,this[u]=d(e,h.type),this._$Ei=null}}requestUpdate(t,e,s){let i=!0;t!==void 0&&(((s=s||this.constructor.getPropertyOptions(t)).hasChanged||wt)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),s.reflect===!0&&this._$Ei!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,s))):i=!1),!this.isUpdatePending&&i&&(this._$Ep=this._$E_())}async _$E_(){this.isUpdatePending=!0;try{await this._$Ep}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach((i,o)=>this[o]=i),this._$Et=void 0);let e=!1;const s=this._$AL;try{e=this.shouldUpdate(s),e?(this.willUpdate(s),(t=this._$Eg)===null||t===void 0||t.forEach(i=>{var o;return(o=i.hostUpdate)===null||o===void 0?void 0:o.call(i)}),this.update(s)):this._$EU()}catch(i){throw e=!1,this._$EU(),i}e&&this._$AE(s)}willUpdate(t){}_$AE(t){var e;(e=this._$Eg)===null||e===void 0||e.forEach(s=>{var i;return(i=s.hostUpdated)===null||i===void 0?void 0:i.call(s)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ep}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((e,s)=>this._$ES(s,this[s],e)),this._$EC=void 0),this._$EU()}updated(t){}firstUpdated(t){}}x.finalized=!0,x.elementProperties=new Map,x.elementStyles=[],x.shadowRootOptions={mode:"open"},pt==null||pt({ReactiveElement:x}),((F=globalThis.reactiveElementVersions)!==null&&F!==void 0?F:globalThis.reactiveElementVersions=[]).push("1.3.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Y;const U=globalThis.trustedTypes,$t=U?U.createPolicy("lit-html",{createHTML:n=>n}):void 0,A=`lit$${(Math.random()+"").slice(9)}$`,St="?"+A,Kt=`<${St}>`,H=document,L=(n="")=>H.createComment(n),j=n=>n===null||typeof n!="object"&&typeof n!="function",Ct=Array.isArray,Wt=n=>{var t;return Ct(n)||typeof((t=n)===null||t===void 0?void 0:t[Symbol.iterator])=="function"},R=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ft=/-->/g,gt=/>/g,w=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,vt=/'/g,mt=/"/g,Tt=/^(?:script|style|textarea|title)$/i,qt=n=>(t,...e)=>({_$litType$:n,strings:t,values:e}),xt=qt(1),S=Symbol.for("lit-noChange"),$=Symbol.for("lit-nothing"),_t=new WeakMap,Ft=(n,t,e)=>{var s,i;const o=(s=e==null?void 0:e.renderBefore)!==null&&s!==void 0?s:t;let r=o._$litPart$;if(r===void 0){const u=(i=e==null?void 0:e.renderBefore)!==null&&i!==void 0?i:null;o._$litPart$=r=new D(t.insertBefore(L(),u),u,void 0,e!=null?e:{})}return r._$AI(n),r},N=H.createTreeWalker(H,129,null,!1),Gt=(n,t)=>{const e=n.length-1,s=[];let i,o=t===2?"<svg>":"",r=R;for(let h=0;h<e;h++){const l=n[h];let d,a,c=-1,p=0;for(;p<l.length&&(r.lastIndex=p,a=r.exec(l),a!==null);)p=r.lastIndex,r===R?a[1]==="!--"?r=ft:a[1]!==void 0?r=gt:a[2]!==void 0?(Tt.test(a[2])&&(i=RegExp("</"+a[2],"g")),r=w):a[3]!==void 0&&(r=w):r===w?a[0]===">"?(r=i!=null?i:R,c=-1):a[1]===void 0?c=-2:(c=r.lastIndex-a[2].length,d=a[1],r=a[3]===void 0?w:a[3]==='"'?mt:vt):r===mt||r===vt?r=w:r===ft||r===gt?r=R:(r=w,i=void 0);const g=r===w&&n[h+1].startsWith("/>")?" ":"";o+=r===R?l+Kt:c>=0?(s.push(d),l.slice(0,c)+"$lit$"+l.slice(c)+A+g):l+A+(c===-2?(s.push(void 0),h):g)}const u=o+(n[e]||"<?>")+(t===2?"</svg>":"");if(!Array.isArray(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return[$t!==void 0?$t.createHTML(u):u,s]};class z{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let o=0,r=0;const u=t.length-1,h=this.parts,[l,d]=Gt(t,e);if(this.el=z.createElement(l,s),N.currentNode=this.el.content,e===2){const a=this.el.content,c=a.firstChild;c.remove(),a.append(...c.childNodes)}for(;(i=N.nextNode())!==null&&h.length<u;){if(i.nodeType===1){if(i.hasAttributes()){const a=[];for(const c of i.getAttributeNames())if(c.endsWith("$lit$")||c.startsWith(A)){const p=d[r++];if(a.push(c),p!==void 0){const g=i.getAttribute(p.toLowerCase()+"$lit$").split(A),m=/([.?@])?(.*)/.exec(p);h.push({type:1,index:o,name:m[2],strings:g,ctor:m[1]==="."?Jt:m[1]==="?"?Zt:m[1]==="@"?Xt:B})}else h.push({type:6,index:o})}for(const c of a)i.removeAttribute(c)}if(Tt.test(i.tagName)){const a=i.textContent.split(A),c=a.length-1;if(c>0){i.textContent=U?U.emptyScript:"";for(let p=0;p<c;p++)i.append(a[p],L()),N.nextNode(),h.push({type:2,index:++o});i.append(a[c],L())}}}else if(i.nodeType===8)if(i.data===St)h.push({type:2,index:o});else{let a=-1;for(;(a=i.data.indexOf(A,a+1))!==-1;)h.push({type:7,index:o}),a+=A.length-1}o++}}static createElement(t,e){const s=H.createElement("template");return s.innerHTML=t,s}}function M(n,t,e=n,s){var i,o,r,u;if(t===S)return t;let h=s!==void 0?(i=e._$Cl)===null||i===void 0?void 0:i[s]:e._$Cu;const l=j(t)?void 0:t._$litDirective$;return(h==null?void 0:h.constructor)!==l&&((o=h==null?void 0:h._$AO)===null||o===void 0||o.call(h,!1),l===void 0?h=void 0:(h=new l(n),h._$AT(n,e,s)),s!==void 0?((r=(u=e)._$Cl)!==null&&r!==void 0?r:u._$Cl=[])[s]=h:e._$Cu=h),h!==void 0&&(t=M(n,h._$AS(n,t.values),h,s)),t}class Yt{constructor(t,e){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var e;const{el:{content:s},parts:i}=this._$AD,o=((e=t==null?void 0:t.creationScope)!==null&&e!==void 0?e:H).importNode(s,!0);N.currentNode=o;let r=N.nextNode(),u=0,h=0,l=i[0];for(;l!==void 0;){if(u===l.index){let d;l.type===2?d=new D(r,r.nextSibling,this,t):l.type===1?d=new l.ctor(r,l.name,l.strings,this,t):l.type===6&&(d=new te(r,this,t)),this.v.push(d),l=i[++h]}u!==(l==null?void 0:l.index)&&(r=N.nextNode(),u++)}return o}m(t){let e=0;for(const s of this.v)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class D{constructor(t,e,s,i){var o;this.type=2,this._$AH=$,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cg=(o=i==null?void 0:i.isConnected)===null||o===void 0||o}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cg}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=M(this,t,e),j(t)?t===$||t==null||t===""?(this._$AH!==$&&this._$AR(),this._$AH=$):t!==this._$AH&&t!==S&&this.$(t):t._$litType$!==void 0?this.T(t):t.nodeType!==void 0?this.k(t):Wt(t)?this.S(t):this.$(t)}M(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}k(t){this._$AH!==t&&(this._$AR(),this._$AH=this.M(t))}$(t){this._$AH!==$&&j(this._$AH)?this._$AA.nextSibling.data=t:this.k(H.createTextNode(t)),this._$AH=t}T(t){var e;const{values:s,_$litType$:i}=t,o=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=z.createElement(i.h,this.options)),i);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===o)this._$AH.m(s);else{const r=new Yt(o,this),u=r.p(this.options);r.m(s),this.k(u),this._$AH=r}}_$AC(t){let e=_t.get(t.strings);return e===void 0&&_t.set(t.strings,e=new z(t)),e}S(t){Ct(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,i=0;for(const o of t)i===e.length?e.push(s=new D(this.M(L()),this.M(L()),this,this.options)):s=e[i],s._$AI(o),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){var s;for((s=this._$AP)===null||s===void 0||s.call(this,!1,!0,e);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){var e;this._$AM===void 0&&(this._$Cg=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}}class B{constructor(t,e,s,i,o){this.type=1,this._$AH=$,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=o,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=$}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,s,i){const o=this.strings;let r=!1;if(o===void 0)t=M(this,t,e,0),r=!j(t)||t!==this._$AH&&t!==S,r&&(this._$AH=t);else{const u=t;let h,l;for(t=o[0],h=0;h<o.length-1;h++)l=M(this,u[s+h],e,h),l===S&&(l=this._$AH[h]),r||(r=!j(l)||l!==this._$AH[h]),l===$?t=$:t!==$&&(t+=(l!=null?l:"")+o[h+1]),this._$AH[h]=l}r&&!i&&this.C(t)}C(t){t===$?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t!=null?t:"")}}class Jt extends B{constructor(){super(...arguments),this.type=3}C(t){this.element[this.name]=t===$?void 0:t}}const Qt=U?U.emptyScript:"";class Zt extends B{constructor(){super(...arguments),this.type=4}C(t){t&&t!==$?this.element.setAttribute(this.name,Qt):this.element.removeAttribute(this.name)}}class Xt extends B{constructor(t,e,s,i,o){super(t,e,s,i,o),this.type=5}_$AI(t,e=this){var s;if((t=(s=M(this,t,e,0))!==null&&s!==void 0?s:$)===S)return;const i=this._$AH,o=t===$&&i!==$||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,r=t!==$&&(i===$||o);o&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,s;typeof this._$AH=="function"?this._$AH.call((s=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&s!==void 0?s:this.element,t):this._$AH.handleEvent(t)}}class te{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){M(this,t)}}const yt=window.litHtmlPolyfillSupport;yt==null||yt(z,D),((Y=globalThis.litHtmlVersions)!==null&&Y!==void 0?Y:globalThis.litHtmlVersions=[]).push("2.2.5");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var J,Q;class P extends x{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var t,e;const s=super.createRenderRoot();return(t=(e=this.renderOptions).renderBefore)!==null&&t!==void 0||(e.renderBefore=s.firstChild),s}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Dt=Ft(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Dt)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Dt)===null||t===void 0||t.setConnected(!1)}render(){return S}}P.finalized=!0,P._$litElement$=!0,(J=globalThis.litElementHydrateSupport)===null||J===void 0||J.call(globalThis,{LitElement:P});const At=globalThis.litElementPolyfillSupport;At==null||At({LitElement:P});((Q=globalThis.litElementVersions)!==null&&Q!==void 0?Q:globalThis.litElementVersions=[]).push("3.2.0");/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Z;((Z=window.HTMLSlotElement)===null||Z===void 0?void 0:Z.prototype.assignedElements)!=null;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */console.warn("The main 'lit-element' module entrypoint is deprecated. Please update your imports to use the 'lit' package: 'lit' and 'lit/decorators.ts' or import from 'lit-element/lit-element.ts'. See https://lit.dev/msg/deprecated-import-path for more information.");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ee={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},se=n=>(...t)=>({_$litDirective$:n,values:t});class ie{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,s){this._$Ct=t,this._$AM=e,this._$Ci=s}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class tt extends ie{constructor(t){if(super(t),this.it=$,t.type!==ee.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===$||t==null)return this.ft=void 0,this.it=t;if(t===S)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this.ft;this.it=t;const e=[t];return e.raw=e,this.ft={_$litType$:this.constructor.resultType,strings:e,values:[]}}}tt.directiveName="unsafeHTML",tt.resultType=1;const Nt=se(tt);function ne(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var et={exports:{}};(function(n,t){Object.defineProperty(t,"__esModule",{value:!0});class e{constructor(d,a){this.stream=d,this.pos=a}get value(){return this.stream[this.pos]}}class s{constructor(d,a,c){this.stream=d,this.start=a,this.end=c}get value(){return this.stream.slice(this.start,this.end)}get whitespace(){let d=this.start-1;for(;d>=0&&/\s/.test(this.stream[d]);d--);return new s(this.stream,d+1,this.start)}}function i(l,d,a=/\S/g){if(!a.global)throw new Error("Regexp must be global");a.lastIndex=d;const c=a.exec(l);if(!!c)return new e(l,c.index)}function o(l,d){let a=i(l,d);if(!a)return;const c=a.pos;a=i(l,c+1,/[\s<]|>/g);const p=a?a.pos+Number(a.value==">"):l.length;return new s(l,c,p)}const r=["area","base","br","col","command","embed","hr","img","input","keygen","link","menuitem","meta","param","source","track","wbr","!doctype","--"];function u(l){let d=l.replace(/^<\/?|>$/g,"").toLowerCase();(d.startsWith("!--")||d.endsWith("--"))&&(d="--");const a=/</.test(l),c=/>/.test(l),p=/<([^/]|$)/.test(l),g=/<\//.test(l)||p&&r.includes(d);return{isTagStart:a,isTagEnd:c,isStartTag:p,isEndTag:g,tagName:d}}function h(l,d="  ",a=80){const c=[];let p=!1,g=!1,m=!1,C=!1,O="",V=0,K={},f,I=0;for(;f=o(l,I);){let v=f.value,nt=f.whitespace.value,ot="",{isTagStart:T,isTagEnd:_,isStartTag:E,isEndTag:b,tagName:y}=u(v);if(!C){if(T&&!y){if(I=f.end,f=o(l,I),!f)break;v+=f.value,{isTagStart:T,isTagEnd:_,isStartTag:E,isEndTag:b,tagName:y}=u(v)}if(!T&&(p||g)){const k=/[^=]"[^>]/g.exec(v);k&&f.end!=f.start+k.index+2&&(f.end=f.start+k.index+2,v=f.value,{isTagStart:T,isTagEnd:_,isStartTag:E,isEndTag:b,tagName:y}=u(v),ot=d)}}!C&&E&&(O=y);const rt=(b&&y!="--"||_&&y=="--")&&y==O;C&&!rt&&(T=_=E=b=!1),E&&(p=!0),b&&(g=!0),b&&!E&&--V;const Mt=p&&_&&["script","style"].includes(O)||E&&O=="--",lt=p||g,at=nt||K.pendingWhitespace,Ot=lt&&(/^[=">]([^=]|$)/.test(v)||/(^|=)"$/.test(K.tokenValue));if(C||m)c.push(nt);else if(at&&!Ot){const W=(at.match(/\n/g)||[]).length,k=Math.max(0,c.lastIndexOf(`
`)),kt=c.slice(k).reduce((Rt,Lt)=>Rt+Lt.length,0),ht=d.repeat(V+Number(lt&&!T));kt+v.length>a?c.push(`
`,ht):W?c.push(...Array(W).fill(`
`),ht):c.push(" ")}c.push(v),K={pendingWhitespace:ot,tokenValue:v},Mt&&(C=!0),rt&&(C=!1),p&&_&&O=="pre"&&(m=!0),b&&y=="pre"&&(m=!1),p&&_&&!g&&++V,_&&(p=g=!1),I=f.end}return l[l.length-1]==`
`&&c.push(`
`),c.join("")}t.default=h,n.exports=Object.assign(t.default,t)})(et,et.exports);var Pt=ne(et.exports);class Ut extends P{static get properties(){return{source:{attribute:!1}}}firstUpdated(){let e=this.shadowRoot.querySelector("slot").assignedElements().map(i=>i.outerHTML).join("");e=Pt(e);const s=window.Prism.highlight(e,window.Prism.languages.markup,"html");this.source=s}render(){return xt`
            <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.23.0/themes/prism.min.css"
                integrity="sha512-tN7Ec6zAFaVSG3TpNAKtk4DOHNpSwKHxxrsiw4GHKESGPs5njn/0sMCUMl2svV4wo4BK/rCP7juYz+zx+l6oeQ=="
                crossorigin="anonymous"
            />
            <div class="output">
                <slot></slot>
            </div>
            <pre><code>${Nt(this.source)}</code></pre>
        `}}q(Ut,"styles",bt`
        :host {
            display: block;
            margin-top: 20px;
            margin-bottom: 20px;
        }

        .output {
            padding: 16px;
            border: 3px solid #f6f8fa;
        }

        pre {
            background-color: rgb(246, 248, 250);
            font-family: Monaco, Ubuntu Mono, Consolas, monospace;
            font-size: 14px;
            margin: 0;
            padding: 16px;
        }
    `);customElements.define("code-example",Ut);class Ht extends P{static get properties(){return{source:{attribute:!1}}}firstUpdated(){let e=this.shadowRoot.querySelector("slot").assignedNodes().map(i=>i.nodeType===Node.TEXT_NODE?i.textContent:i.outerHTML).join("").trim();e=Pt(e);const s=window.Prism.highlight(e,window.Prism.languages.markup,"html");this.source=s}render(){return xt`
            <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.23.0/themes/prism.min.css"
                integrity="sha512-tN7Ec6zAFaVSG3TpNAKtk4DOHNpSwKHxxrsiw4GHKESGPs5njn/0sMCUMl2svV4wo4BK/rCP7juYz+zx+l6oeQ=="
                crossorigin="anonymous"
            />
            <slot></slot>
            <pre><code>${Nt(this.source)}</code></pre>
        `}}q(Ht,"styles",bt`
        :host {
            display: block;
            margin-top: 20px;
        }

        pre {
            background-color: var(--f-bluegray-50);
            font-family: Monaco, Ubuntu Mono, Consolas, monospace;
            font-size: 14px;
            margin: 0;
            padding: 16px;
            overflow-x: auto;
        }

        slot {
            display: none;
        }
    `);customElements.define("syntax-highlight",Ht);
