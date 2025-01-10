import{signInWithEmailAndPassword as Eo}from"https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const h of o)if(h.type==="childList")for(const c of h.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function n(o){const h={};return o.integrity&&(h.integrity=o.integrity),o.referrerPolicy&&(h.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?h.credentials="include":o.crossOrigin==="anonymous"?h.credentials="omit":h.credentials="same-origin",h}function s(o){if(o.ep)return;o.ep=!0;const h=n(o);fetch(o.href,h)}})();var hr={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $r=function(i){const e=[];let n=0;for(let s=0;s<i.length;s++){let o=i.charCodeAt(s);o<128?e[n++]=o:o<2048?(e[n++]=o>>6|192,e[n++]=o&63|128):(o&64512)===55296&&s+1<i.length&&(i.charCodeAt(s+1)&64512)===56320?(o=65536+((o&1023)<<10)+(i.charCodeAt(++s)&1023),e[n++]=o>>18|240,e[n++]=o>>12&63|128,e[n++]=o>>6&63|128,e[n++]=o&63|128):(e[n++]=o>>12|224,e[n++]=o>>6&63|128,e[n++]=o&63|128)}return e},To=function(i){const e=[];let n=0,s=0;for(;n<i.length;){const o=i[n++];if(o<128)e[s++]=String.fromCharCode(o);else if(o>191&&o<224){const h=i[n++];e[s++]=String.fromCharCode((o&31)<<6|h&63)}else if(o>239&&o<365){const h=i[n++],c=i[n++],_=i[n++],w=((o&7)<<18|(h&63)<<12|(c&63)<<6|_&63)-65536;e[s++]=String.fromCharCode(55296+(w>>10)),e[s++]=String.fromCharCode(56320+(w&1023))}else{const h=i[n++],c=i[n++];e[s++]=String.fromCharCode((o&15)<<12|(h&63)<<6|c&63)}}return e.join("")},zr={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(i,e){if(!Array.isArray(i))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let o=0;o<i.length;o+=3){const h=i[o],c=o+1<i.length,_=c?i[o+1]:0,w=o+2<i.length,E=w?i[o+2]:0,b=h>>2,P=(h&3)<<4|_>>4;let k=(_&15)<<2|E>>6,x=E&63;w||(x=64,c||(k=64)),s.push(n[b],n[P],n[k],n[x])}return s.join("")},encodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(i):this.encodeByteArray($r(i),e)},decodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(i):To(this.decodeStringToByteArray(i,e))},decodeStringToByteArray(i,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let o=0;o<i.length;){const h=n[i.charAt(o++)],_=o<i.length?n[i.charAt(o)]:0;++o;const E=o<i.length?n[i.charAt(o)]:64;++o;const P=o<i.length?n[i.charAt(o)]:64;if(++o,h==null||_==null||E==null||P==null)throw new Ao;const k=h<<2|_>>4;if(s.push(k),E!==64){const x=_<<4&240|E>>2;if(s.push(x),P!==64){const R=E<<6&192|P;s.push(R)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let i=0;i<this.ENCODED_VALS.length;i++)this.byteToCharMap_[i]=this.ENCODED_VALS.charAt(i),this.charToByteMap_[this.byteToCharMap_[i]]=i,this.byteToCharMapWebSafe_[i]=this.ENCODED_VALS_WEBSAFE.charAt(i),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]]=i,i>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)]=i,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)]=i)}}};class Ao extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const bo=function(i){const e=$r(i);return zr.encodeByteArray(e,!0)},Kt=function(i){return bo(i).replace(/\./g,"")},Wr=function(i){try{return zr.decodeString(i,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function So(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ro=()=>So().__FIREBASE_DEFAULTS__,ko=()=>{if(typeof process>"u"||typeof hr>"u")return;const i=hr.__FIREBASE_DEFAULTS__;if(i)return JSON.parse(i)},Co=()=>{if(typeof document>"u")return;let i;try{i=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=i&&Wr(i[1]);return e&&JSON.parse(e)},Kn=()=>{try{return Ro()||ko()||Co()}catch(i){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${i}`);return}},Gr=i=>{var e,n;return(n=(e=Kn())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[i]},Po=i=>{const e=Gr(i);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},Kr=()=>{var i;return(i=Kn())===null||i===void 0?void 0:i.config},qr=i=>{var e;return(e=Kn())===null||e===void 0?void 0:e[`_${i}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oo{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Do(i,e){if(i.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",o=i.iat||0,h=i.sub||i.user_id;if(!h)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const c=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:o,exp:o+3600,auth_time:o,sub:h,user_id:h,firebase:{sign_in_provider:"custom",identities:{}}},i);return[Kt(JSON.stringify(n)),Kt(JSON.stringify(c)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function No(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(K())}function Lo(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Mo(){const i=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof i=="object"&&i.id!==void 0}function Uo(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function xo(){const i=K();return i.indexOf("MSIE ")>=0||i.indexOf("Trident/")>=0}function Fo(){try{return typeof indexedDB=="object"}catch{return!1}}function jo(){return new Promise((i,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(s);o.onsuccess=()=>{o.result.close(),n||self.indexedDB.deleteDatabase(s),i(!0)},o.onupgradeneeded=()=>{n=!1},o.onerror=()=>{var h;e(((h=o.error)===null||h===void 0?void 0:h.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bo="FirebaseError";class pe extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=Bo,Object.setPrototypeOf(this,pe.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,vt.prototype.create)}}class vt{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},o=`${this.service}/${e}`,h=this.errors[e],c=h?Vo(h,s):"Error",_=`${this.serviceName}: ${c} (${o}).`;return new pe(o,_,s)}}function Vo(i,e){return i.replace(Ho,(n,s)=>{const o=e[s];return o!=null?String(o):`<${s}?>`})}const Ho=/\{\$([^}]+)}/g;function $o(i){for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e))return!1;return!0}function qt(i,e){if(i===e)return!0;const n=Object.keys(i),s=Object.keys(e);for(const o of n){if(!s.includes(o))return!1;const h=i[o],c=e[o];if(ur(h)&&ur(c)){if(!qt(h,c))return!1}else if(h!==c)return!1}for(const o of s)if(!n.includes(o))return!1;return!0}function ur(i){return i!==null&&typeof i=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function It(i){const e=[];for(const[n,s]of Object.entries(i))Array.isArray(s)?s.forEach(o=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function zo(i,e){const n=new Wo(i,e);return n.subscribe.bind(n)}class Wo{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let o;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");Go(e,["next","error","complete"])?o=e:o={next:e,error:n,complete:s},o.next===void 0&&(o.next=On),o.error===void 0&&(o.error=On),o.complete===void 0&&(o.complete=On);const h=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),h}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Go(i,e){if(typeof i!="object"||i===null)return!1;for(const n of e)if(n in i&&typeof i[n]=="function")return!0;return!1}function On(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qe(i){return i&&i._delegate?i._delegate:i}class Le{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const De="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ko{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new Oo;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:n});o&&s.resolve(o)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),o=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(h){if(o)return null;throw h}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Jo(e))try{this.getOrInitializeService({instanceIdentifier:De})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(n);try{const h=this.getOrInitializeService({instanceIdentifier:o});s.resolve(h)}catch{}}}}clearInstance(e=De){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=De){return this.instances.has(e)}getOptions(e=De){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[h,c]of this.instancesDeferred.entries()){const _=this.normalizeInstanceIdentifier(h);s===_&&c.resolve(o)}return o}onInit(e,n){var s;const o=this.normalizeInstanceIdentifier(n),h=(s=this.onInitCallbacks.get(o))!==null&&s!==void 0?s:new Set;h.add(e),this.onInitCallbacks.set(o,h);const c=this.instances.get(o);return c&&e(c,o),()=>{h.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const o of s)try{o(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:qo(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=De){return this.component?this.component.multipleInstances?e:De:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function qo(i){return i===De?void 0:i}function Jo(i){return i.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xo{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Ko(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var O;(function(i){i[i.DEBUG=0]="DEBUG",i[i.VERBOSE=1]="VERBOSE",i[i.INFO=2]="INFO",i[i.WARN=3]="WARN",i[i.ERROR=4]="ERROR",i[i.SILENT=5]="SILENT"})(O||(O={}));const Yo={debug:O.DEBUG,verbose:O.VERBOSE,info:O.INFO,warn:O.WARN,error:O.ERROR,silent:O.SILENT},Qo=O.INFO,Zo={[O.DEBUG]:"log",[O.VERBOSE]:"log",[O.INFO]:"info",[O.WARN]:"warn",[O.ERROR]:"error"},ea=(i,e,...n)=>{if(e<i.logLevel)return;const s=new Date().toISOString(),o=Zo[e];if(o)console[o](`[${s}]  ${i.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class qn{constructor(e){this.name=e,this._logLevel=Qo,this._logHandler=ea,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in O))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Yo[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,O.DEBUG,...e),this._logHandler(this,O.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,O.VERBOSE,...e),this._logHandler(this,O.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,O.INFO,...e),this._logHandler(this,O.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,O.WARN,...e),this._logHandler(this,O.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,O.ERROR,...e),this._logHandler(this,O.ERROR,...e)}}const ta=(i,e)=>e.some(n=>i instanceof n);let cr,lr;function na(){return cr||(cr=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function ia(){return lr||(lr=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Jr=new WeakMap,jn=new WeakMap,Xr=new WeakMap,Dn=new WeakMap,Jn=new WeakMap;function ra(i){const e=new Promise((n,s)=>{const o=()=>{i.removeEventListener("success",h),i.removeEventListener("error",c)},h=()=>{n(be(i.result)),o()},c=()=>{s(i.error),o()};i.addEventListener("success",h),i.addEventListener("error",c)});return e.then(n=>{n instanceof IDBCursor&&Jr.set(n,i)}).catch(()=>{}),Jn.set(e,i),e}function sa(i){if(jn.has(i))return;const e=new Promise((n,s)=>{const o=()=>{i.removeEventListener("complete",h),i.removeEventListener("error",c),i.removeEventListener("abort",c)},h=()=>{n(),o()},c=()=>{s(i.error||new DOMException("AbortError","AbortError")),o()};i.addEventListener("complete",h),i.addEventListener("error",c),i.addEventListener("abort",c)});jn.set(i,e)}let Bn={get(i,e,n){if(i instanceof IDBTransaction){if(e==="done")return jn.get(i);if(e==="objectStoreNames")return i.objectStoreNames||Xr.get(i);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return be(i[e])},set(i,e,n){return i[e]=n,!0},has(i,e){return i instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in i}};function oa(i){Bn=i(Bn)}function aa(i){return i===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=i.call(Nn(this),e,...n);return Xr.set(s,e.sort?e.sort():[e]),be(s)}:ia().includes(i)?function(...e){return i.apply(Nn(this),e),be(Jr.get(this))}:function(...e){return be(i.apply(Nn(this),e))}}function ha(i){return typeof i=="function"?aa(i):(i instanceof IDBTransaction&&sa(i),ta(i,na())?new Proxy(i,Bn):i)}function be(i){if(i instanceof IDBRequest)return ra(i);if(Dn.has(i))return Dn.get(i);const e=ha(i);return e!==i&&(Dn.set(i,e),Jn.set(e,i)),e}const Nn=i=>Jn.get(i);function ua(i,e,{blocked:n,upgrade:s,blocking:o,terminated:h}={}){const c=indexedDB.open(i,e),_=be(c);return s&&c.addEventListener("upgradeneeded",w=>{s(be(c.result),w.oldVersion,w.newVersion,be(c.transaction),w)}),n&&c.addEventListener("blocked",w=>n(w.oldVersion,w.newVersion,w)),_.then(w=>{h&&w.addEventListener("close",()=>h()),o&&w.addEventListener("versionchange",E=>o(E.oldVersion,E.newVersion,E))}).catch(()=>{}),_}const ca=["get","getKey","getAll","getAllKeys","count"],la=["put","add","delete","clear"],Ln=new Map;function dr(i,e){if(!(i instanceof IDBDatabase&&!(e in i)&&typeof e=="string"))return;if(Ln.get(e))return Ln.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,o=la.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(o||ca.includes(n)))return;const h=async function(c,..._){const w=this.transaction(c,o?"readwrite":"readonly");let E=w.store;return s&&(E=E.index(_.shift())),(await Promise.all([E[n](..._),o&&w.done]))[0]};return Ln.set(e,h),h}oa(i=>({...i,get:(e,n,s)=>dr(e,n)||i.get(e,n,s),has:(e,n)=>!!dr(e,n)||i.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class da{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(fa(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function fa(i){const e=i.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Vn="@firebase/app",fr="0.10.17";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const le=new qn("@firebase/app"),pa="@firebase/app-compat",ga="@firebase/analytics-compat",ma="@firebase/analytics",ya="@firebase/app-check-compat",_a="@firebase/app-check",va="@firebase/auth",Ia="@firebase/auth-compat",wa="@firebase/database",Ea="@firebase/data-connect",Ta="@firebase/database-compat",Aa="@firebase/functions",ba="@firebase/functions-compat",Sa="@firebase/installations",Ra="@firebase/installations-compat",ka="@firebase/messaging",Ca="@firebase/messaging-compat",Pa="@firebase/performance",Oa="@firebase/performance-compat",Da="@firebase/remote-config",Na="@firebase/remote-config-compat",La="@firebase/storage",Ma="@firebase/storage-compat",Ua="@firebase/firestore",xa="@firebase/vertexai",Fa="@firebase/firestore-compat",ja="firebase",Ba="11.1.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hn="[DEFAULT]",Va={[Vn]:"fire-core",[pa]:"fire-core-compat",[ma]:"fire-analytics",[ga]:"fire-analytics-compat",[_a]:"fire-app-check",[ya]:"fire-app-check-compat",[va]:"fire-auth",[Ia]:"fire-auth-compat",[wa]:"fire-rtdb",[Ea]:"fire-data-connect",[Ta]:"fire-rtdb-compat",[Aa]:"fire-fn",[ba]:"fire-fn-compat",[Sa]:"fire-iid",[Ra]:"fire-iid-compat",[ka]:"fire-fcm",[Ca]:"fire-fcm-compat",[Pa]:"fire-perf",[Oa]:"fire-perf-compat",[Da]:"fire-rc",[Na]:"fire-rc-compat",[La]:"fire-gcs",[Ma]:"fire-gcs-compat",[Ua]:"fire-fst",[Fa]:"fire-fst-compat",[xa]:"fire-vertex","fire-js":"fire-js",[ja]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jt=new Map,Ha=new Map,$n=new Map;function pr(i,e){try{i.container.addComponent(e)}catch(n){le.debug(`Component ${e.name} failed to register with FirebaseApp ${i.name}`,n)}}function We(i){const e=i.name;if($n.has(e))return le.debug(`There were multiple attempts to register component ${e}.`),!1;$n.set(e,i);for(const n of Jt.values())pr(n,i);for(const n of Ha.values())pr(n,i);return!0}function Xn(i,e){const n=i.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),i.container.getProvider(e)}function Ae(i){return i.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $a={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Se=new vt("app","Firebase",$a);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class za{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Le("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Se.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Je=Ba;function Yr(i,e={}){let n=i;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Hn,automaticDataCollectionEnabled:!1},e),o=s.name;if(typeof o!="string"||!o)throw Se.create("bad-app-name",{appName:String(o)});if(n||(n=Kr()),!n)throw Se.create("no-options");const h=Jt.get(o);if(h){if(qt(n,h.options)&&qt(s,h.config))return h;throw Se.create("duplicate-app",{appName:o})}const c=new Xo(o);for(const w of $n.values())c.addComponent(w);const _=new za(n,s,c);return Jt.set(o,_),_}function Qr(i=Hn){const e=Jt.get(i);if(!e&&i===Hn&&Kr())return Yr();if(!e)throw Se.create("no-app",{appName:i});return e}function Re(i,e,n){var s;let o=(s=Va[i])!==null&&s!==void 0?s:i;n&&(o+=`-${n}`);const h=o.match(/\s|\//),c=e.match(/\s|\//);if(h||c){const _=[`Unable to register library "${o}" with version "${e}":`];h&&_.push(`library name "${o}" contains illegal characters (whitespace or "/")`),h&&c&&_.push("and"),c&&_.push(`version name "${e}" contains illegal characters (whitespace or "/")`),le.warn(_.join(" "));return}We(new Le(`${o}-version`,()=>({library:o,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wa="firebase-heartbeat-database",Ga=1,yt="firebase-heartbeat-store";let Mn=null;function Zr(){return Mn||(Mn=ua(Wa,Ga,{upgrade:(i,e)=>{switch(e){case 0:try{i.createObjectStore(yt)}catch(n){console.warn(n)}}}}).catch(i=>{throw Se.create("idb-open",{originalErrorMessage:i.message})})),Mn}async function Ka(i){try{const n=(await Zr()).transaction(yt),s=await n.objectStore(yt).get(es(i));return await n.done,s}catch(e){if(e instanceof pe)le.warn(e.message);else{const n=Se.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});le.warn(n.message)}}}async function gr(i,e){try{const s=(await Zr()).transaction(yt,"readwrite");await s.objectStore(yt).put(e,es(i)),await s.done}catch(n){if(n instanceof pe)le.warn(n.message);else{const s=Se.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});le.warn(s.message)}}}function es(i){return`${i.name}!${i.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qa=1024,Ja=30*24*60*60*1e3;class Xa{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Qa(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),h=mr();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===h||this._heartbeatsCache.heartbeats.some(c=>c.date===h)?void 0:(this._heartbeatsCache.heartbeats.push({date:h,agent:o}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(c=>{const _=new Date(c.date).valueOf();return Date.now()-_<=Ja}),this._storage.overwrite(this._heartbeatsCache))}catch(s){le.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=mr(),{heartbeatsToSend:s,unsentEntries:o}=Ya(this._heartbeatsCache.heartbeats),h=Kt(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),h}catch(n){return le.warn(n),""}}}function mr(){return new Date().toISOString().substring(0,10)}function Ya(i,e=qa){const n=[];let s=i.slice();for(const o of i){const h=n.find(c=>c.agent===o.agent);if(h){if(h.dates.push(o.date),yr(n)>e){h.dates.pop();break}}else if(n.push({agent:o.agent,dates:[o.date]}),yr(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class Qa{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Fo()?jo().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Ka(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const o=await this.read();return gr(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:o.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const o=await this.read();return gr(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...e.heartbeats]})}else return}}function yr(i){return Kt(JSON.stringify({version:2,heartbeats:i})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Za(i){We(new Le("platform-logger",e=>new da(e),"PRIVATE")),We(new Le("heartbeat",e=>new Xa(e),"PRIVATE")),Re(Vn,fr,i),Re(Vn,fr,"esm2017"),Re("fire-js","")}Za("");var eh="firebase",th="11.1.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Re(eh,th,"app");function Yn(i,e){var n={};for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&e.indexOf(s)<0&&(n[s]=i[s]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,s=Object.getOwnPropertySymbols(i);o<s.length;o++)e.indexOf(s[o])<0&&Object.prototype.propertyIsEnumerable.call(i,s[o])&&(n[s[o]]=i[s[o]]);return n}function ts(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const nh=ts,ns=new vt("auth","Firebase",ts());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xt=new qn("@firebase/auth");function ih(i,...e){Xt.logLevel<=O.WARN&&Xt.warn(`Auth (${Je}): ${i}`,...e)}function $t(i,...e){Xt.logLevel<=O.ERROR&&Xt.error(`Auth (${Je}): ${i}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function de(i,...e){throw Qn(i,...e)}function ne(i,...e){return Qn(i,...e)}function is(i,e,n){const s=Object.assign(Object.assign({},nh()),{[e]:n});return new vt("auth","Firebase",s).create(e,{appName:i.name})}function Ne(i){return is(i,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Qn(i,...e){if(typeof i!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=i.name),i._errorFactory.create(n,...s)}return ns.create(i,...e)}function A(i,e,...n){if(!i)throw Qn(e,...n)}function he(i){const e="INTERNAL ASSERTION FAILED: "+i;throw $t(e),new Error(e)}function fe(i,e){i||he(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zn(){var i;return typeof self<"u"&&((i=self.location)===null||i===void 0?void 0:i.href)||""}function rh(){return _r()==="http:"||_r()==="https:"}function _r(){var i;return typeof self<"u"&&((i=self.location)===null||i===void 0?void 0:i.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sh(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(rh()||Mo()||"connection"in navigator)?navigator.onLine:!0}function oh(){if(typeof navigator>"u")return null;const i=navigator;return i.languages&&i.languages[0]||i.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt{constructor(e,n){this.shortDelay=e,this.longDelay=n,fe(n>e,"Short delay should be less than long delay!"),this.isMobile=No()||Uo()}get(){return sh()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zn(i,e){fe(i.emulator,"Emulator should always be set here");const{url:n}=i.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rs{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;he("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;he("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;he("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ah={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hh=new wt(3e4,6e4);function ei(i,e){return i.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:i.tenantId}):e}async function Xe(i,e,n,s,o={}){return ss(i,o,async()=>{let h={},c={};s&&(e==="GET"?c=s:h={body:JSON.stringify(s)});const _=It(Object.assign({key:i.config.apiKey},c)).slice(1),w=await i._getAdditionalHeaders();w["Content-Type"]="application/json",i.languageCode&&(w["X-Firebase-Locale"]=i.languageCode);const E=Object.assign({method:e,headers:w},h);return Lo()||(E.referrerPolicy="no-referrer"),rs.fetch()(os(i,i.config.apiHost,n,_),E)})}async function ss(i,e,n){i._canInitEmulator=!1;const s=Object.assign(Object.assign({},ah),e);try{const o=new ch(i),h=await Promise.race([n(),o.promise]);o.clearNetworkTimeout();const c=await h.json();if("needConfirmation"in c)throw Vt(i,"account-exists-with-different-credential",c);if(h.ok&&!("errorMessage"in c))return c;{const _=h.ok?c.errorMessage:c.error.message,[w,E]=_.split(" : ");if(w==="FEDERATED_USER_ID_ALREADY_LINKED")throw Vt(i,"credential-already-in-use",c);if(w==="EMAIL_EXISTS")throw Vt(i,"email-already-in-use",c);if(w==="USER_DISABLED")throw Vt(i,"user-disabled",c);const b=s[w]||w.toLowerCase().replace(/[_\s]+/g,"-");if(E)throw is(i,b,E);de(i,b)}}catch(o){if(o instanceof pe)throw o;de(i,"network-request-failed",{message:String(o)})}}async function uh(i,e,n,s,o={}){const h=await Xe(i,e,n,s,o);return"mfaPendingCredential"in h&&de(i,"multi-factor-auth-required",{_serverResponse:h}),h}function os(i,e,n,s){const o=`${e}${n}?${s}`;return i.config.emulator?Zn(i.config,o):`${i.config.apiScheme}://${o}`}class ch{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(ne(this.auth,"network-request-failed")),hh.get())})}}function Vt(i,e,n){const s={appName:i.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const o=ne(i,e,s);return o.customData._tokenResponse=n,o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lh(i,e){return Xe(i,"POST","/v1/accounts:delete",e)}async function as(i,e){return Xe(i,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pt(i){if(i)try{const e=new Date(Number(i));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function dh(i,e=!1){const n=qe(i),s=await n.getIdToken(e),o=ti(s);A(o&&o.exp&&o.auth_time&&o.iat,n.auth,"internal-error");const h=typeof o.firebase=="object"?o.firebase:void 0,c=h==null?void 0:h.sign_in_provider;return{claims:o,token:s,authTime:pt(Un(o.auth_time)),issuedAtTime:pt(Un(o.iat)),expirationTime:pt(Un(o.exp)),signInProvider:c||null,signInSecondFactor:(h==null?void 0:h.sign_in_second_factor)||null}}function Un(i){return Number(i)*1e3}function ti(i){const[e,n,s]=i.split(".");if(e===void 0||n===void 0||s===void 0)return $t("JWT malformed, contained fewer than 3 sections"),null;try{const o=Wr(n);return o?JSON.parse(o):($t("Failed to decode base64 JWT payload"),null)}catch(o){return $t("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function vr(i){const e=ti(i);return A(e,"internal-error"),A(typeof e.exp<"u","internal-error"),A(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _t(i,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof pe&&fh(s)&&i.auth.currentUser===i&&await i.auth.signOut(),s}}function fh({code:i}){return i==="auth/user-disabled"||i==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ph{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const o=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,o)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wn{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=pt(this.lastLoginAt),this.creationTime=pt(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yt(i){var e;const n=i.auth,s=await i.getIdToken(),o=await _t(i,as(n,{idToken:s}));A(o==null?void 0:o.users.length,n,"internal-error");const h=o.users[0];i._notifyReloadListener(h);const c=!((e=h.providerUserInfo)===null||e===void 0)&&e.length?hs(h.providerUserInfo):[],_=mh(i.providerData,c),w=i.isAnonymous,E=!(i.email&&h.passwordHash)&&!(_!=null&&_.length),b=w?E:!1,P={uid:h.localId,displayName:h.displayName||null,photoURL:h.photoUrl||null,email:h.email||null,emailVerified:h.emailVerified||!1,phoneNumber:h.phoneNumber||null,tenantId:h.tenantId||null,providerData:_,metadata:new Wn(h.createdAt,h.lastLoginAt),isAnonymous:b};Object.assign(i,P)}async function gh(i){const e=qe(i);await Yt(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function mh(i,e){return[...i.filter(s=>!e.some(o=>o.providerId===s.providerId)),...e]}function hs(i){return i.map(e=>{var{providerId:n}=e,s=Yn(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yh(i,e){const n=await ss(i,{},async()=>{const s=It({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:h}=i.config,c=os(i,o,"/v1/token",`key=${h}`),_=await i._getAdditionalHeaders();return _["Content-Type"]="application/x-www-form-urlencoded",rs.fetch()(c,{method:"POST",headers:_,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function _h(i,e){return Xe(i,"POST","/v2/accounts:revokeToken",ei(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class He{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){A(e.idToken,"internal-error"),A(typeof e.idToken<"u","internal-error"),A(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):vr(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){A(e.length!==0,"internal-error");const n=vr(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(A(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:o,expiresIn:h}=await yh(e,n);this.updateTokensAndExpiration(s,o,Number(h))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:o,expirationTime:h}=n,c=new He;return s&&(A(typeof s=="string","internal-error",{appName:e}),c.refreshToken=s),o&&(A(typeof o=="string","internal-error",{appName:e}),c.accessToken=o),h&&(A(typeof h=="number","internal-error",{appName:e}),c.expirationTime=h),c}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new He,this.toJSON())}_performRefresh(){return he("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ve(i,e){A(typeof i=="string"||typeof i>"u","internal-error",{appName:e})}class ue{constructor(e){var{uid:n,auth:s,stsTokenManager:o}=e,h=Yn(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new ph(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=h.displayName||null,this.email=h.email||null,this.emailVerified=h.emailVerified||!1,this.phoneNumber=h.phoneNumber||null,this.photoURL=h.photoURL||null,this.isAnonymous=h.isAnonymous||!1,this.tenantId=h.tenantId||null,this.providerData=h.providerData?[...h.providerData]:[],this.metadata=new Wn(h.createdAt||void 0,h.lastLoginAt||void 0)}async getIdToken(e){const n=await _t(this,this.stsTokenManager.getToken(this.auth,e));return A(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return dh(this,e)}reload(){return gh(this)}_assign(e){this!==e&&(A(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new ue(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){A(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await Yt(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ae(this.auth.app))return Promise.reject(Ne(this.auth));const e=await this.getIdToken();return await _t(this,lh(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,o,h,c,_,w,E,b;const P=(s=n.displayName)!==null&&s!==void 0?s:void 0,k=(o=n.email)!==null&&o!==void 0?o:void 0,x=(h=n.phoneNumber)!==null&&h!==void 0?h:void 0,R=(c=n.photoURL)!==null&&c!==void 0?c:void 0,U=(_=n.tenantId)!==null&&_!==void 0?_:void 0,L=(w=n._redirectEventId)!==null&&w!==void 0?w:void 0,re=(E=n.createdAt)!==null&&E!==void 0?E:void 0,Y=(b=n.lastLoginAt)!==null&&b!==void 0?b:void 0,{uid:j,emailVerified:Z,isAnonymous:ke,providerData:q,stsTokenManager:m}=n;A(j&&m,e,"internal-error");const l=He.fromJSON(this.name,m);A(typeof j=="string",e,"internal-error"),ve(P,e.name),ve(k,e.name),A(typeof Z=="boolean",e,"internal-error"),A(typeof ke=="boolean",e,"internal-error"),ve(x,e.name),ve(R,e.name),ve(U,e.name),ve(L,e.name),ve(re,e.name),ve(Y,e.name);const f=new ue({uid:j,auth:e,email:k,emailVerified:Z,displayName:P,isAnonymous:ke,photoURL:R,phoneNumber:x,tenantId:U,stsTokenManager:l,createdAt:re,lastLoginAt:Y});return q&&Array.isArray(q)&&(f.providerData=q.map(p=>Object.assign({},p))),L&&(f._redirectEventId=L),f}static async _fromIdTokenResponse(e,n,s=!1){const o=new He;o.updateFromServerResponse(n);const h=new ue({uid:n.localId,auth:e,stsTokenManager:o,isAnonymous:s});return await Yt(h),h}static async _fromGetAccountInfoResponse(e,n,s){const o=n.users[0];A(o.localId!==void 0,"internal-error");const h=o.providerUserInfo!==void 0?hs(o.providerUserInfo):[],c=!(o.email&&o.passwordHash)&&!(h!=null&&h.length),_=new He;_.updateFromIdToken(s);const w=new ue({uid:o.localId,auth:e,stsTokenManager:_,isAnonymous:c}),E={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:h,metadata:new Wn(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(h!=null&&h.length)};return Object.assign(w,E),w}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ir=new Map;function ce(i){fe(i instanceof Function,"Expected a class definition");let e=Ir.get(i);return e?(fe(e instanceof i,"Instance stored in cache mismatched with class"),e):(e=new i,Ir.set(i,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class us{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}us.type="NONE";const wr=us;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zt(i,e,n){return`firebase:${i}:${e}:${n}`}class $e{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:o,name:h}=this.auth;this.fullUserKey=zt(this.userKey,o.apiKey,h),this.fullPersistenceKey=zt("persistence",o.apiKey,h),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?ue._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new $e(ce(wr),e,s);const o=(await Promise.all(n.map(async E=>{if(await E._isAvailable())return E}))).filter(E=>E);let h=o[0]||ce(wr);const c=zt(s,e.config.apiKey,e.name);let _=null;for(const E of n)try{const b=await E._get(c);if(b){const P=ue._fromJSON(e,b);E!==h&&(_=P),h=E;break}}catch{}const w=o.filter(E=>E._shouldAllowMigration);return!h._shouldAllowMigration||!w.length?new $e(h,e,s):(h=w[0],_&&await h._set(c,_.toJSON()),await Promise.all(n.map(async E=>{if(E!==h)try{await E._remove(c)}catch{}})),new $e(h,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Er(i){const e=i.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(fs(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(cs(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(gs(e))return"Blackberry";if(ms(e))return"Webos";if(ls(e))return"Safari";if((e.includes("chrome/")||ds(e))&&!e.includes("edge/"))return"Chrome";if(ps(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=i.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function cs(i=K()){return/firefox\//i.test(i)}function ls(i=K()){const e=i.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function ds(i=K()){return/crios\//i.test(i)}function fs(i=K()){return/iemobile/i.test(i)}function ps(i=K()){return/android/i.test(i)}function gs(i=K()){return/blackberry/i.test(i)}function ms(i=K()){return/webos/i.test(i)}function ni(i=K()){return/iphone|ipad|ipod/i.test(i)||/macintosh/i.test(i)&&/mobile/i.test(i)}function vh(i=K()){var e;return ni(i)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Ih(){return xo()&&document.documentMode===10}function ys(i=K()){return ni(i)||ps(i)||ms(i)||gs(i)||/windows phone/i.test(i)||fs(i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _s(i,e=[]){let n;switch(i){case"Browser":n=Er(K());break;case"Worker":n=`${Er(K())}-${i}`;break;default:n=i}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Je}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wh{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=h=>new Promise((c,_)=>{try{const w=e(h);c(w)}catch(w){_(w)}});s.onAbort=n,this.queue.push(s);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const o of n)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Eh(i,e={}){return Xe(i,"GET","/v2/passwordPolicy",ei(i,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Th=6;class Ah{constructor(e){var n,s,o,h;const c=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=c.minPasswordLength)!==null&&n!==void 0?n:Th,c.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=c.maxPasswordLength),c.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=c.containsLowercaseCharacter),c.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=c.containsUppercaseCharacter),c.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=c.containsNumericCharacter),c.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=c.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(o=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&o!==void 0?o:"",this.forceUpgradeOnSignin=(h=e.forceUpgradeOnSignin)!==null&&h!==void 0?h:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,s,o,h,c,_;const w={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,w),this.validatePasswordCharacterOptions(e,w),w.isValid&&(w.isValid=(n=w.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),w.isValid&&(w.isValid=(s=w.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),w.isValid&&(w.isValid=(o=w.containsLowercaseLetter)!==null&&o!==void 0?o:!0),w.isValid&&(w.isValid=(h=w.containsUppercaseLetter)!==null&&h!==void 0?h:!0),w.isValid&&(w.isValid=(c=w.containsNumericCharacter)!==null&&c!==void 0?c:!0),w.isValid&&(w.isValid=(_=w.containsNonAlphanumericCharacter)!==null&&_!==void 0?_:!0),w}validatePasswordLengthOptions(e,n){const s=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=e.length>=s),o&&(n.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let o=0;o<e.length;o++)s=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,n,s,o,h){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=h))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bh{constructor(e,n,s,o){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Tr(this),this.idTokenSubscription=new Tr(this),this.beforeStateQueue=new wh(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=ns,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=ce(n)),this._initializationPromise=this.queue(async()=>{var s,o;if(!this._deleted&&(this.persistenceManager=await $e.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((o=this.currentUser)===null||o===void 0?void 0:o.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await as(this,{idToken:e}),s=await ue._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Ae(this.app)){const c=this.app.settings.authIdToken;return c?new Promise(_=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(c).then(_,_))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let o=s,h=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const c=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,_=o==null?void 0:o._redirectEventId,w=await this.tryRedirectSignIn(e);(!c||c===_)&&(w!=null&&w.user)&&(o=w.user,h=!0)}if(!o)return this.directlySetCurrentUser(null);if(!o._redirectEventId){if(h)try{await this.beforeStateQueue.runMiddleware(o)}catch(c){o=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(c))}return o?this.reloadAndSetCurrentUserOrClear(o):this.directlySetCurrentUser(null)}return A(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===o._redirectEventId?this.directlySetCurrentUser(o):this.reloadAndSetCurrentUserOrClear(o)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Yt(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=oh()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Ae(this.app))return Promise.reject(Ne(this));const n=e?qe(e):null;return n&&A(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&A(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Ae(this.app)?Promise.reject(Ne(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Ae(this.app)?Promise.reject(Ne(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(ce(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Eh(this),n=new Ah(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new vt("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await _h(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&ce(e)||this._popupRedirectResolver;A(n,this,"argument-error"),this.redirectPersistenceManager=await $e.create(this,[ce(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,o){if(this._deleted)return()=>{};const h=typeof n=="function"?n:n.next.bind(n);let c=!1;const _=this._isInitialized?Promise.resolve():this._initializationPromise;if(A(_,this,"internal-error"),_.then(()=>{c||h(this.currentUser)}),typeof n=="function"){const w=e.addObserver(n,s,o);return()=>{c=!0,w()}}else{const w=e.addObserver(n);return()=>{c=!0,w()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return A(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=_s(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const o=await this._getAppCheckToken();return o&&(n["X-Firebase-AppCheck"]=o),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&ih(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function ii(i){return qe(i)}class Tr{constructor(e){this.auth=e,this.observer=null,this.addObserver=zo(n=>this.observer=n)}get next(){return A(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ri={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Sh(i){ri=i}function Rh(i){return ri.loadJS(i)}function kh(){return ri.gapiScript}function Ch(i){return`__${i}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ph(i,e){const n=Xn(i,"auth");if(n.isInitialized()){const o=n.getImmediate(),h=n.getOptions();if(qt(h,e??{}))return o;de(o,"already-initialized")}return n.initialize({options:e})}function Oh(i,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(ce);e!=null&&e.errorMap&&i._updateErrorMap(e.errorMap),i._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function Dh(i,e,n){const s=ii(i);A(s._canInitEmulator,s,"emulator-config-failed"),A(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const o=!1,h=vs(e),{host:c,port:_}=Nh(e),w=_===null?"":`:${_}`;s.config.emulator={url:`${h}//${c}${w}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:c,port:_,protocol:h.replace(":",""),options:Object.freeze({disableWarnings:o})}),Lh()}function vs(i){const e=i.indexOf(":");return e<0?"":i.substr(0,e+1)}function Nh(i){const e=vs(i),n=/(\/\/)?([^?#/]+)/.exec(i.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(s);if(o){const h=o[1];return{host:h,port:Ar(s.substr(h.length+1))}}else{const[h,c]=s.split(":");return{host:h,port:Ar(c)}}}function Ar(i){if(!i)return null;const e=Number(i);return isNaN(e)?null:e}function Lh(){function i(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",i):i())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Is{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return he("not implemented")}_getIdTokenResponse(e){return he("not implemented")}_linkToIdToken(e,n){return he("not implemented")}_getReauthenticationResolver(e){return he("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ze(i,e){return uh(i,"POST","/v1/accounts:signInWithIdp",ei(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mh="http://localhost";class Me extends Is{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Me(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):de("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:o}=n,h=Yn(n,["providerId","signInMethod"]);if(!s||!o)return null;const c=new Me(s,o);return c.idToken=h.idToken||void 0,c.accessToken=h.accessToken||void 0,c.secret=h.secret,c.nonce=h.nonce,c.pendingToken=h.pendingToken||null,c}_getIdTokenResponse(e){const n=this.buildRequest();return ze(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,ze(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ze(e,n)}buildRequest(){const e={requestUri:Mh,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=It(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ws{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et extends ws{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ie extends Et{constructor(){super("facebook.com")}static credential(e){return Me._fromParams({providerId:Ie.PROVIDER_ID,signInMethod:Ie.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ie.credentialFromTaggedObject(e)}static credentialFromError(e){return Ie.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ie.credential(e.oauthAccessToken)}catch{return null}}}Ie.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ie.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class we extends Et{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Me._fromParams({providerId:we.PROVIDER_ID,signInMethod:we.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return we.credentialFromTaggedObject(e)}static credentialFromError(e){return we.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return we.credential(n,s)}catch{return null}}}we.GOOGLE_SIGN_IN_METHOD="google.com";we.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ee extends Et{constructor(){super("github.com")}static credential(e){return Me._fromParams({providerId:Ee.PROVIDER_ID,signInMethod:Ee.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ee.credentialFromTaggedObject(e)}static credentialFromError(e){return Ee.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ee.credential(e.oauthAccessToken)}catch{return null}}}Ee.GITHUB_SIGN_IN_METHOD="github.com";Ee.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Te extends Et{constructor(){super("twitter.com")}static credential(e,n){return Me._fromParams({providerId:Te.PROVIDER_ID,signInMethod:Te.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Te.credentialFromTaggedObject(e)}static credentialFromError(e){return Te.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return Te.credential(n,s)}catch{return null}}}Te.TWITTER_SIGN_IN_METHOD="twitter.com";Te.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,o=!1){const h=await ue._fromIdTokenResponse(e,s,o),c=br(s);return new Ge({user:h,providerId:c,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const o=br(s);return new Ge({user:e,providerId:o,_tokenResponse:s,operationType:n})}}function br(i){return i.providerId?i.providerId:"phoneNumber"in i?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qt extends pe{constructor(e,n,s,o){var h;super(n.code,n.message),this.operationType=s,this.user=o,Object.setPrototypeOf(this,Qt.prototype),this.customData={appName:e.name,tenantId:(h=e.tenantId)!==null&&h!==void 0?h:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,o){return new Qt(e,n,s,o)}}function Es(i,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(i):n._getIdTokenResponse(i)).catch(h=>{throw h.code==="auth/multi-factor-auth-required"?Qt._fromErrorAndOperation(i,h,e,s):h})}async function Uh(i,e,n=!1){const s=await _t(i,e._linkToIdToken(i.auth,await i.getIdToken()),n);return Ge._forOperation(i,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xh(i,e,n=!1){const{auth:s}=i;if(Ae(s.app))return Promise.reject(Ne(s));const o="reauthenticate";try{const h=await _t(i,Es(s,o,e,i),n);A(h.idToken,s,"internal-error");const c=ti(h.idToken);A(c,s,"internal-error");const{sub:_}=c;return A(i.uid===_,s,"user-mismatch"),Ge._forOperation(i,o,h)}catch(h){throw(h==null?void 0:h.code)==="auth/user-not-found"&&de(s,"user-mismatch"),h}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fh(i,e,n=!1){if(Ae(i.app))return Promise.reject(Ne(i));const s="signIn",o=await Es(i,s,e),h=await Ge._fromIdTokenResponse(i,s,o);return n||await i._updateCurrentUser(h.user),h}function jh(i,e,n,s){return qe(i).onIdTokenChanged(e,n,s)}function Bh(i,e,n){return qe(i).beforeAuthStateChanged(e,n)}const Zt="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ts{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Zt,"1"),this.storage.removeItem(Zt),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vh=1e3,Hh=10;class As extends Ts{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=ys(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),o=this.localCache[n];s!==o&&e(n,o,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((c,_,w)=>{this.notifyListeners(c,w)});return}const s=e.key;n?this.detachListener():this.stopPolling();const o=()=>{const c=this.storage.getItem(s);!n&&this.localCache[s]===c||this.notifyListeners(s,c)},h=this.storage.getItem(s);Ih()&&h!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,Hh):o()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},Vh)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}As.type="LOCAL";const $h=As;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bs extends Ts{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}bs.type="SESSION";const Ss=bs;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zh(i){return Promise.all(i.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nn{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(o=>o.isListeningto(e));if(n)return n;const s=new nn(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:o,data:h}=n.data,c=this.handlersMap[o];if(!(c!=null&&c.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:o});const _=Array.from(c).map(async E=>E(n.origin,h)),w=await zh(_);n.ports[0].postMessage({status:"done",eventId:s,eventType:o,response:w})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}nn.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function si(i="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return i+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wh{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let h,c;return new Promise((_,w)=>{const E=si("",20);o.port1.start();const b=setTimeout(()=>{w(new Error("unsupported_event"))},s);c={messageChannel:o,onMessage(P){const k=P;if(k.data.eventId===E)switch(k.data.status){case"ack":clearTimeout(b),h=setTimeout(()=>{w(new Error("timeout"))},3e3);break;case"done":clearTimeout(h),_(k.data.response);break;default:clearTimeout(b),clearTimeout(h),w(new Error("invalid_response"));break}}},this.handlers.add(c),o.port1.addEventListener("message",c.onMessage),this.target.postMessage({eventType:e,eventId:E,data:n},[o.port2])}).finally(()=>{c&&this.removeMessageHandler(c)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ie(){return window}function Gh(i){ie().location.href=i}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rs(){return typeof ie().WorkerGlobalScope<"u"&&typeof ie().importScripts=="function"}async function Kh(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function qh(){var i;return((i=navigator==null?void 0:navigator.serviceWorker)===null||i===void 0?void 0:i.controller)||null}function Jh(){return Rs()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ks="firebaseLocalStorageDb",Xh=1,en="firebaseLocalStorage",Cs="fbase_key";class Tt{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function rn(i,e){return i.transaction([en],e?"readwrite":"readonly").objectStore(en)}function Yh(){const i=indexedDB.deleteDatabase(ks);return new Tt(i).toPromise()}function Gn(){const i=indexedDB.open(ks,Xh);return new Promise((e,n)=>{i.addEventListener("error",()=>{n(i.error)}),i.addEventListener("upgradeneeded",()=>{const s=i.result;try{s.createObjectStore(en,{keyPath:Cs})}catch(o){n(o)}}),i.addEventListener("success",async()=>{const s=i.result;s.objectStoreNames.contains(en)?e(s):(s.close(),await Yh(),e(await Gn()))})})}async function Sr(i,e,n){const s=rn(i,!0).put({[Cs]:e,value:n});return new Tt(s).toPromise()}async function Qh(i,e){const n=rn(i,!1).get(e),s=await new Tt(n).toPromise();return s===void 0?null:s.value}function Rr(i,e){const n=rn(i,!0).delete(e);return new Tt(n).toPromise()}const Zh=800,eu=3;class Ps{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Gn(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>eu)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Rs()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=nn._getInstance(Jh()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Kh(),!this.activeServiceWorker)return;this.sender=new Wh(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||qh()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Gn();return await Sr(e,Zt,"1"),await Rr(e,Zt),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>Sr(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>Qh(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Rr(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const h=rn(o,!1).getAll();return new Tt(h).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(e.length!==0)for(const{fbase_key:o,value:h}of e)s.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(h)&&(this.notifyListeners(o,h),n.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!s.has(o)&&(this.notifyListeners(o,null),n.push(o));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Zh)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Ps.type="LOCAL";const tu=Ps;new wt(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nu(i,e){return e?ce(e):(A(i._popupRedirectResolver,i,"argument-error"),i._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oi extends Is{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ze(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ze(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ze(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function iu(i){return Fh(i.auth,new oi(i),i.bypassAuthState)}function ru(i){const{auth:e,user:n}=i;return A(n,e,"internal-error"),xh(n,new oi(i),i.bypassAuthState)}async function su(i){const{auth:e,user:n}=i;return A(n,e,"internal-error"),Uh(n,new oi(i),i.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Os{constructor(e,n,s,o,h=!1){this.auth=e,this.resolver=s,this.user=o,this.bypassAuthState=h,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:o,tenantId:h,error:c,type:_}=e;if(c){this.reject(c);return}const w={auth:this.auth,requestUri:n,sessionId:s,tenantId:h||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(_)(w))}catch(E){this.reject(E)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return iu;case"linkViaPopup":case"linkViaRedirect":return su;case"reauthViaPopup":case"reauthViaRedirect":return ru;default:de(this.auth,"internal-error")}}resolve(e){fe(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){fe(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ou=new wt(2e3,1e4);class Ve extends Os{constructor(e,n,s,o,h){super(e,n,o,h),this.provider=s,this.authWindow=null,this.pollId=null,Ve.currentPopupAction&&Ve.currentPopupAction.cancel(),Ve.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return A(e,this.auth,"internal-error"),e}async onExecution(){fe(this.filter.length===1,"Popup operations only handle one event");const e=si();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(ne(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(ne(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ve.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ne(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,ou.get())};e()}}Ve.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const au="pendingRedirect",Wt=new Map;class hu extends Os{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=Wt.get(this.auth._key());if(!e){try{const s=await uu(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}Wt.set(this.auth._key(),e)}return this.bypassAuthState||Wt.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function uu(i,e){const n=du(e),s=lu(i);if(!await s._isAvailable())return!1;const o=await s._get(n)==="true";return await s._remove(n),o}function cu(i,e){Wt.set(i._key(),e)}function lu(i){return ce(i._redirectPersistence)}function du(i){return zt(au,i.config.apiKey,i.name)}async function fu(i,e,n=!1){if(Ae(i.app))return Promise.reject(Ne(i));const s=ii(i),o=nu(s,e),c=await new hu(s,o,n).execute();return c&&!n&&(delete c.user._redirectEventId,await s._persistUserIfCurrent(c.user),await s._setRedirectUser(null,e)),c}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pu=10*60*1e3;class gu{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!mu(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!Ds(e)){const o=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(ne(this.auth,o))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=pu&&this.cachedEventUids.clear(),this.cachedEventUids.has(kr(e))}saveEventToCache(e){this.cachedEventUids.add(kr(e)),this.lastProcessedEventTime=Date.now()}}function kr(i){return[i.type,i.eventId,i.sessionId,i.tenantId].filter(e=>e).join("-")}function Ds({type:i,error:e}){return i==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function mu(i){switch(i.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Ds(i);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yu(i,e={}){return Xe(i,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _u=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,vu=/^https?/;async function Iu(i){if(i.config.emulator)return;const{authorizedDomains:e}=await yu(i);for(const n of e)try{if(wu(n))return}catch{}de(i,"unauthorized-domain")}function wu(i){const e=zn(),{protocol:n,hostname:s}=new URL(e);if(i.startsWith("chrome-extension://")){const c=new URL(i);return c.hostname===""&&s===""?n==="chrome-extension:"&&i.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&c.hostname===s}if(!vu.test(n))return!1;if(_u.test(i))return s===i;const o=i.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eu=new wt(3e4,6e4);function Cr(){const i=ie().___jsl;if(i!=null&&i.H){for(const e of Object.keys(i.H))if(i.H[e].r=i.H[e].r||[],i.H[e].L=i.H[e].L||[],i.H[e].r=[...i.H[e].L],i.CP)for(let n=0;n<i.CP.length;n++)i.CP[n]=null}}function Tu(i){return new Promise((e,n)=>{var s,o,h;function c(){Cr(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Cr(),n(ne(i,"network-request-failed"))},timeout:Eu.get()})}if(!((o=(s=ie().gapi)===null||s===void 0?void 0:s.iframes)===null||o===void 0)&&o.Iframe)e(gapi.iframes.getContext());else if(!((h=ie().gapi)===null||h===void 0)&&h.load)c();else{const _=Ch("iframefcb");return ie()[_]=()=>{gapi.load?c():n(ne(i,"network-request-failed"))},Rh(`${kh()}?onload=${_}`).catch(w=>n(w))}}).catch(e=>{throw Gt=null,e})}let Gt=null;function Au(i){return Gt=Gt||Tu(i),Gt}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bu=new wt(5e3,15e3),Su="__/auth/iframe",Ru="emulator/auth/iframe",ku={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Cu=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Pu(i){const e=i.config;A(e.authDomain,i,"auth-domain-config-required");const n=e.emulator?Zn(e,Ru):`https://${i.config.authDomain}/${Su}`,s={apiKey:e.apiKey,appName:i.name,v:Je},o=Cu.get(i.config.apiHost);o&&(s.eid=o);const h=i._getFrameworks();return h.length&&(s.fw=h.join(",")),`${n}?${It(s).slice(1)}`}async function Ou(i){const e=await Au(i),n=ie().gapi;return A(n,i,"internal-error"),e.open({where:document.body,url:Pu(i),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:ku,dontclear:!0},s=>new Promise(async(o,h)=>{await s.restyle({setHideOnLeave:!1});const c=ne(i,"network-request-failed"),_=ie().setTimeout(()=>{h(c)},bu.get());function w(){ie().clearTimeout(_),o(s)}s.ping(w).then(w,()=>{h(c)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Du={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Nu=500,Lu=600,Mu="_blank",Uu="http://localhost";class Pr{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function xu(i,e,n,s=Nu,o=Lu){const h=Math.max((window.screen.availHeight-o)/2,0).toString(),c=Math.max((window.screen.availWidth-s)/2,0).toString();let _="";const w=Object.assign(Object.assign({},Du),{width:s.toString(),height:o.toString(),top:h,left:c}),E=K().toLowerCase();n&&(_=ds(E)?Mu:n),cs(E)&&(e=e||Uu,w.scrollbars="yes");const b=Object.entries(w).reduce((k,[x,R])=>`${k}${x}=${R},`,"");if(vh(E)&&_!=="_self")return Fu(e||"",_),new Pr(null);const P=window.open(e||"",_,b);A(P,i,"popup-blocked");try{P.focus()}catch{}return new Pr(P)}function Fu(i,e){const n=document.createElement("a");n.href=i,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ju="__/auth/handler",Bu="emulator/auth/handler",Vu=encodeURIComponent("fac");async function Or(i,e,n,s,o,h){A(i.config.authDomain,i,"auth-domain-config-required"),A(i.config.apiKey,i,"invalid-api-key");const c={apiKey:i.config.apiKey,appName:i.name,authType:n,redirectUrl:s,v:Je,eventId:o};if(e instanceof ws){e.setDefaultLanguage(i.languageCode),c.providerId=e.providerId||"",$o(e.getCustomParameters())||(c.customParameters=JSON.stringify(e.getCustomParameters()));for(const[b,P]of Object.entries({}))c[b]=P}if(e instanceof Et){const b=e.getScopes().filter(P=>P!=="");b.length>0&&(c.scopes=b.join(","))}i.tenantId&&(c.tid=i.tenantId);const _=c;for(const b of Object.keys(_))_[b]===void 0&&delete _[b];const w=await i._getAppCheckToken(),E=w?`#${Vu}=${encodeURIComponent(w)}`:"";return`${Hu(i)}?${It(_).slice(1)}${E}`}function Hu({config:i}){return i.emulator?Zn(i,Bu):`https://${i.authDomain}/${ju}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xn="webStorageSupport";class $u{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ss,this._completeRedirectFn=fu,this._overrideRedirectResult=cu}async _openPopup(e,n,s,o){var h;fe((h=this.eventManagers[e._key()])===null||h===void 0?void 0:h.manager,"_initialize() not called before _openPopup()");const c=await Or(e,n,s,zn(),o);return xu(e,c,si())}async _openRedirect(e,n,s,o){await this._originValidation(e);const h=await Or(e,n,s,zn(),o);return Gh(h),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:o,promise:h}=this.eventManagers[n];return o?Promise.resolve(o):(fe(h,"If manager is not set, promise should be"),h)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await Ou(e),s=new gu(e);return n.register("authEvent",o=>(A(o==null?void 0:o.authEvent,e,"invalid-auth-event"),{status:s.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(xn,{type:xn},o=>{var h;const c=(h=o==null?void 0:o[0])===null||h===void 0?void 0:h[xn];c!==void 0&&n(!!c),de(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Iu(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return ys()||ls()||ni()}}const zu=$u;var Dr="@firebase/auth",Nr="1.8.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wu{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){A(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gu(i){switch(i){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Ku(i){We(new Le("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),h=e.getProvider("app-check-internal"),{apiKey:c,authDomain:_}=s.options;A(c&&!c.includes(":"),"invalid-api-key",{appName:s.name});const w={apiKey:c,authDomain:_,clientPlatform:i,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:_s(i)},E=new bh(s,o,h,w);return Oh(E,n),E},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),We(new Le("auth-internal",e=>{const n=ii(e.getProvider("auth").getImmediate());return(s=>new Wu(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Re(Dr,Nr,Gu(i)),Re(Dr,Nr,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qu=5*60,Ju=qr("authIdTokenMaxAge")||qu;let Lr=null;const Xu=i=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>Ju)return;const o=n==null?void 0:n.token;Lr!==o&&(Lr=o,await fetch(i,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function Yu(i=Qr()){const e=Xn(i,"auth");if(e.isInitialized())return e.getImmediate();const n=Ph(i,{popupRedirectResolver:zu,persistence:[tu,$h,Ss]}),s=qr("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const h=new URL(s,location.origin);if(location.origin===h.origin){const c=Xu(h.toString());Bh(n,c,()=>c(n.currentUser)),jh(n,_=>c(_))}}const o=Gr("auth");return o&&Dh(n,`http://${o}`),n}function Qu(){var i,e;return(e=(i=document.getElementsByTagName("head"))===null||i===void 0?void 0:i[0])!==null&&e!==void 0?e:document}Sh({loadJS(i){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",i),s.onload=e,s.onerror=o=>{const h=ne("internal-error");h.customData=o,n(h)},s.type="text/javascript",s.charset="UTF-8",Qu().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Ku("Browser");var Mr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ns;(function(){var i;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(m,l){function f(){}f.prototype=l.prototype,m.D=l.prototype,m.prototype=new f,m.prototype.constructor=m,m.C=function(p,g,v){for(var d=Array(arguments.length-2),se=2;se<arguments.length;se++)d[se-2]=arguments[se];return l.prototype[g].apply(p,d)}}function n(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(s,n),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(m,l,f){f||(f=0);var p=Array(16);if(typeof l=="string")for(var g=0;16>g;++g)p[g]=l.charCodeAt(f++)|l.charCodeAt(f++)<<8|l.charCodeAt(f++)<<16|l.charCodeAt(f++)<<24;else for(g=0;16>g;++g)p[g]=l[f++]|l[f++]<<8|l[f++]<<16|l[f++]<<24;l=m.g[0],f=m.g[1],g=m.g[2];var v=m.g[3],d=l+(v^f&(g^v))+p[0]+3614090360&4294967295;l=f+(d<<7&4294967295|d>>>25),d=v+(g^l&(f^g))+p[1]+3905402710&4294967295,v=l+(d<<12&4294967295|d>>>20),d=g+(f^v&(l^f))+p[2]+606105819&4294967295,g=v+(d<<17&4294967295|d>>>15),d=f+(l^g&(v^l))+p[3]+3250441966&4294967295,f=g+(d<<22&4294967295|d>>>10),d=l+(v^f&(g^v))+p[4]+4118548399&4294967295,l=f+(d<<7&4294967295|d>>>25),d=v+(g^l&(f^g))+p[5]+1200080426&4294967295,v=l+(d<<12&4294967295|d>>>20),d=g+(f^v&(l^f))+p[6]+2821735955&4294967295,g=v+(d<<17&4294967295|d>>>15),d=f+(l^g&(v^l))+p[7]+4249261313&4294967295,f=g+(d<<22&4294967295|d>>>10),d=l+(v^f&(g^v))+p[8]+1770035416&4294967295,l=f+(d<<7&4294967295|d>>>25),d=v+(g^l&(f^g))+p[9]+2336552879&4294967295,v=l+(d<<12&4294967295|d>>>20),d=g+(f^v&(l^f))+p[10]+4294925233&4294967295,g=v+(d<<17&4294967295|d>>>15),d=f+(l^g&(v^l))+p[11]+2304563134&4294967295,f=g+(d<<22&4294967295|d>>>10),d=l+(v^f&(g^v))+p[12]+1804603682&4294967295,l=f+(d<<7&4294967295|d>>>25),d=v+(g^l&(f^g))+p[13]+4254626195&4294967295,v=l+(d<<12&4294967295|d>>>20),d=g+(f^v&(l^f))+p[14]+2792965006&4294967295,g=v+(d<<17&4294967295|d>>>15),d=f+(l^g&(v^l))+p[15]+1236535329&4294967295,f=g+(d<<22&4294967295|d>>>10),d=l+(g^v&(f^g))+p[1]+4129170786&4294967295,l=f+(d<<5&4294967295|d>>>27),d=v+(f^g&(l^f))+p[6]+3225465664&4294967295,v=l+(d<<9&4294967295|d>>>23),d=g+(l^f&(v^l))+p[11]+643717713&4294967295,g=v+(d<<14&4294967295|d>>>18),d=f+(v^l&(g^v))+p[0]+3921069994&4294967295,f=g+(d<<20&4294967295|d>>>12),d=l+(g^v&(f^g))+p[5]+3593408605&4294967295,l=f+(d<<5&4294967295|d>>>27),d=v+(f^g&(l^f))+p[10]+38016083&4294967295,v=l+(d<<9&4294967295|d>>>23),d=g+(l^f&(v^l))+p[15]+3634488961&4294967295,g=v+(d<<14&4294967295|d>>>18),d=f+(v^l&(g^v))+p[4]+3889429448&4294967295,f=g+(d<<20&4294967295|d>>>12),d=l+(g^v&(f^g))+p[9]+568446438&4294967295,l=f+(d<<5&4294967295|d>>>27),d=v+(f^g&(l^f))+p[14]+3275163606&4294967295,v=l+(d<<9&4294967295|d>>>23),d=g+(l^f&(v^l))+p[3]+4107603335&4294967295,g=v+(d<<14&4294967295|d>>>18),d=f+(v^l&(g^v))+p[8]+1163531501&4294967295,f=g+(d<<20&4294967295|d>>>12),d=l+(g^v&(f^g))+p[13]+2850285829&4294967295,l=f+(d<<5&4294967295|d>>>27),d=v+(f^g&(l^f))+p[2]+4243563512&4294967295,v=l+(d<<9&4294967295|d>>>23),d=g+(l^f&(v^l))+p[7]+1735328473&4294967295,g=v+(d<<14&4294967295|d>>>18),d=f+(v^l&(g^v))+p[12]+2368359562&4294967295,f=g+(d<<20&4294967295|d>>>12),d=l+(f^g^v)+p[5]+4294588738&4294967295,l=f+(d<<4&4294967295|d>>>28),d=v+(l^f^g)+p[8]+2272392833&4294967295,v=l+(d<<11&4294967295|d>>>21),d=g+(v^l^f)+p[11]+1839030562&4294967295,g=v+(d<<16&4294967295|d>>>16),d=f+(g^v^l)+p[14]+4259657740&4294967295,f=g+(d<<23&4294967295|d>>>9),d=l+(f^g^v)+p[1]+2763975236&4294967295,l=f+(d<<4&4294967295|d>>>28),d=v+(l^f^g)+p[4]+1272893353&4294967295,v=l+(d<<11&4294967295|d>>>21),d=g+(v^l^f)+p[7]+4139469664&4294967295,g=v+(d<<16&4294967295|d>>>16),d=f+(g^v^l)+p[10]+3200236656&4294967295,f=g+(d<<23&4294967295|d>>>9),d=l+(f^g^v)+p[13]+681279174&4294967295,l=f+(d<<4&4294967295|d>>>28),d=v+(l^f^g)+p[0]+3936430074&4294967295,v=l+(d<<11&4294967295|d>>>21),d=g+(v^l^f)+p[3]+3572445317&4294967295,g=v+(d<<16&4294967295|d>>>16),d=f+(g^v^l)+p[6]+76029189&4294967295,f=g+(d<<23&4294967295|d>>>9),d=l+(f^g^v)+p[9]+3654602809&4294967295,l=f+(d<<4&4294967295|d>>>28),d=v+(l^f^g)+p[12]+3873151461&4294967295,v=l+(d<<11&4294967295|d>>>21),d=g+(v^l^f)+p[15]+530742520&4294967295,g=v+(d<<16&4294967295|d>>>16),d=f+(g^v^l)+p[2]+3299628645&4294967295,f=g+(d<<23&4294967295|d>>>9),d=l+(g^(f|~v))+p[0]+4096336452&4294967295,l=f+(d<<6&4294967295|d>>>26),d=v+(f^(l|~g))+p[7]+1126891415&4294967295,v=l+(d<<10&4294967295|d>>>22),d=g+(l^(v|~f))+p[14]+2878612391&4294967295,g=v+(d<<15&4294967295|d>>>17),d=f+(v^(g|~l))+p[5]+4237533241&4294967295,f=g+(d<<21&4294967295|d>>>11),d=l+(g^(f|~v))+p[12]+1700485571&4294967295,l=f+(d<<6&4294967295|d>>>26),d=v+(f^(l|~g))+p[3]+2399980690&4294967295,v=l+(d<<10&4294967295|d>>>22),d=g+(l^(v|~f))+p[10]+4293915773&4294967295,g=v+(d<<15&4294967295|d>>>17),d=f+(v^(g|~l))+p[1]+2240044497&4294967295,f=g+(d<<21&4294967295|d>>>11),d=l+(g^(f|~v))+p[8]+1873313359&4294967295,l=f+(d<<6&4294967295|d>>>26),d=v+(f^(l|~g))+p[15]+4264355552&4294967295,v=l+(d<<10&4294967295|d>>>22),d=g+(l^(v|~f))+p[6]+2734768916&4294967295,g=v+(d<<15&4294967295|d>>>17),d=f+(v^(g|~l))+p[13]+1309151649&4294967295,f=g+(d<<21&4294967295|d>>>11),d=l+(g^(f|~v))+p[4]+4149444226&4294967295,l=f+(d<<6&4294967295|d>>>26),d=v+(f^(l|~g))+p[11]+3174756917&4294967295,v=l+(d<<10&4294967295|d>>>22),d=g+(l^(v|~f))+p[2]+718787259&4294967295,g=v+(d<<15&4294967295|d>>>17),d=f+(v^(g|~l))+p[9]+3951481745&4294967295,m.g[0]=m.g[0]+l&4294967295,m.g[1]=m.g[1]+(g+(d<<21&4294967295|d>>>11))&4294967295,m.g[2]=m.g[2]+g&4294967295,m.g[3]=m.g[3]+v&4294967295}s.prototype.u=function(m,l){l===void 0&&(l=m.length);for(var f=l-this.blockSize,p=this.B,g=this.h,v=0;v<l;){if(g==0)for(;v<=f;)o(this,m,v),v+=this.blockSize;if(typeof m=="string"){for(;v<l;)if(p[g++]=m.charCodeAt(v++),g==this.blockSize){o(this,p),g=0;break}}else for(;v<l;)if(p[g++]=m[v++],g==this.blockSize){o(this,p),g=0;break}}this.h=g,this.o+=l},s.prototype.v=function(){var m=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);m[0]=128;for(var l=1;l<m.length-8;++l)m[l]=0;var f=8*this.o;for(l=m.length-8;l<m.length;++l)m[l]=f&255,f/=256;for(this.u(m),m=Array(16),l=f=0;4>l;++l)for(var p=0;32>p;p+=8)m[f++]=this.g[l]>>>p&255;return m};function h(m,l){var f=_;return Object.prototype.hasOwnProperty.call(f,m)?f[m]:f[m]=l(m)}function c(m,l){this.h=l;for(var f=[],p=!0,g=m.length-1;0<=g;g--){var v=m[g]|0;p&&v==l||(f[g]=v,p=!1)}this.g=f}var _={};function w(m){return-128<=m&&128>m?h(m,function(l){return new c([l|0],0>l?-1:0)}):new c([m|0],0>m?-1:0)}function E(m){if(isNaN(m)||!isFinite(m))return P;if(0>m)return L(E(-m));for(var l=[],f=1,p=0;m>=f;p++)l[p]=m/f|0,f*=4294967296;return new c(l,0)}function b(m,l){if(m.length==0)throw Error("number format error: empty string");if(l=l||10,2>l||36<l)throw Error("radix out of range: "+l);if(m.charAt(0)=="-")return L(b(m.substring(1),l));if(0<=m.indexOf("-"))throw Error('number format error: interior "-" character');for(var f=E(Math.pow(l,8)),p=P,g=0;g<m.length;g+=8){var v=Math.min(8,m.length-g),d=parseInt(m.substring(g,g+v),l);8>v?(v=E(Math.pow(l,v)),p=p.j(v).add(E(d))):(p=p.j(f),p=p.add(E(d)))}return p}var P=w(0),k=w(1),x=w(16777216);i=c.prototype,i.m=function(){if(U(this))return-L(this).m();for(var m=0,l=1,f=0;f<this.g.length;f++){var p=this.i(f);m+=(0<=p?p:4294967296+p)*l,l*=4294967296}return m},i.toString=function(m){if(m=m||10,2>m||36<m)throw Error("radix out of range: "+m);if(R(this))return"0";if(U(this))return"-"+L(this).toString(m);for(var l=E(Math.pow(m,6)),f=this,p="";;){var g=Z(f,l).g;f=re(f,g.j(l));var v=((0<f.g.length?f.g[0]:f.h)>>>0).toString(m);if(f=g,R(f))return v+p;for(;6>v.length;)v="0"+v;p=v+p}},i.i=function(m){return 0>m?0:m<this.g.length?this.g[m]:this.h};function R(m){if(m.h!=0)return!1;for(var l=0;l<m.g.length;l++)if(m.g[l]!=0)return!1;return!0}function U(m){return m.h==-1}i.l=function(m){return m=re(this,m),U(m)?-1:R(m)?0:1};function L(m){for(var l=m.g.length,f=[],p=0;p<l;p++)f[p]=~m.g[p];return new c(f,~m.h).add(k)}i.abs=function(){return U(this)?L(this):this},i.add=function(m){for(var l=Math.max(this.g.length,m.g.length),f=[],p=0,g=0;g<=l;g++){var v=p+(this.i(g)&65535)+(m.i(g)&65535),d=(v>>>16)+(this.i(g)>>>16)+(m.i(g)>>>16);p=d>>>16,v&=65535,d&=65535,f[g]=d<<16|v}return new c(f,f[f.length-1]&-2147483648?-1:0)};function re(m,l){return m.add(L(l))}i.j=function(m){if(R(this)||R(m))return P;if(U(this))return U(m)?L(this).j(L(m)):L(L(this).j(m));if(U(m))return L(this.j(L(m)));if(0>this.l(x)&&0>m.l(x))return E(this.m()*m.m());for(var l=this.g.length+m.g.length,f=[],p=0;p<2*l;p++)f[p]=0;for(p=0;p<this.g.length;p++)for(var g=0;g<m.g.length;g++){var v=this.i(p)>>>16,d=this.i(p)&65535,se=m.i(g)>>>16,Ye=m.i(g)&65535;f[2*p+2*g]+=d*Ye,Y(f,2*p+2*g),f[2*p+2*g+1]+=v*Ye,Y(f,2*p+2*g+1),f[2*p+2*g+1]+=d*se,Y(f,2*p+2*g+1),f[2*p+2*g+2]+=v*se,Y(f,2*p+2*g+2)}for(p=0;p<l;p++)f[p]=f[2*p+1]<<16|f[2*p];for(p=l;p<2*l;p++)f[p]=0;return new c(f,0)};function Y(m,l){for(;(m[l]&65535)!=m[l];)m[l+1]+=m[l]>>>16,m[l]&=65535,l++}function j(m,l){this.g=m,this.h=l}function Z(m,l){if(R(l))throw Error("division by zero");if(R(m))return new j(P,P);if(U(m))return l=Z(L(m),l),new j(L(l.g),L(l.h));if(U(l))return l=Z(m,L(l)),new j(L(l.g),l.h);if(30<m.g.length){if(U(m)||U(l))throw Error("slowDivide_ only works with positive integers.");for(var f=k,p=l;0>=p.l(m);)f=ke(f),p=ke(p);var g=q(f,1),v=q(p,1);for(p=q(p,2),f=q(f,2);!R(p);){var d=v.add(p);0>=d.l(m)&&(g=g.add(f),v=d),p=q(p,1),f=q(f,1)}return l=re(m,g.j(l)),new j(g,l)}for(g=P;0<=m.l(l);){for(f=Math.max(1,Math.floor(m.m()/l.m())),p=Math.ceil(Math.log(f)/Math.LN2),p=48>=p?1:Math.pow(2,p-48),v=E(f),d=v.j(l);U(d)||0<d.l(m);)f-=p,v=E(f),d=v.j(l);R(v)&&(v=k),g=g.add(v),m=re(m,d)}return new j(g,m)}i.A=function(m){return Z(this,m).h},i.and=function(m){for(var l=Math.max(this.g.length,m.g.length),f=[],p=0;p<l;p++)f[p]=this.i(p)&m.i(p);return new c(f,this.h&m.h)},i.or=function(m){for(var l=Math.max(this.g.length,m.g.length),f=[],p=0;p<l;p++)f[p]=this.i(p)|m.i(p);return new c(f,this.h|m.h)},i.xor=function(m){for(var l=Math.max(this.g.length,m.g.length),f=[],p=0;p<l;p++)f[p]=this.i(p)^m.i(p);return new c(f,this.h^m.h)};function ke(m){for(var l=m.g.length+1,f=[],p=0;p<l;p++)f[p]=m.i(p)<<1|m.i(p-1)>>>31;return new c(f,m.h)}function q(m,l){var f=l>>5;l%=32;for(var p=m.g.length-f,g=[],v=0;v<p;v++)g[v]=0<l?m.i(v+f)>>>l|m.i(v+f+1)<<32-l:m.i(v+f);return new c(g,m.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,c.prototype.add=c.prototype.add,c.prototype.multiply=c.prototype.j,c.prototype.modulo=c.prototype.A,c.prototype.compare=c.prototype.l,c.prototype.toNumber=c.prototype.m,c.prototype.toString=c.prototype.toString,c.prototype.getBits=c.prototype.i,c.fromNumber=E,c.fromString=b,Ns=c}).apply(typeof Mr<"u"?Mr:typeof self<"u"?self:typeof window<"u"?window:{});var Ht=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};(function(){var i,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(t,r,a){return t==Array.prototype||t==Object.prototype||(t[r]=a.value),t};function n(t){t=[typeof globalThis=="object"&&globalThis,t,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ht=="object"&&Ht];for(var r=0;r<t.length;++r){var a=t[r];if(a&&a.Math==Math)return a}throw Error("Cannot find global object")}var s=n(this);function o(t,r){if(r)e:{var a=s;t=t.split(".");for(var u=0;u<t.length-1;u++){var y=t[u];if(!(y in a))break e;a=a[y]}t=t[t.length-1],u=a[t],r=r(u),r!=u&&r!=null&&e(a,t,{configurable:!0,writable:!0,value:r})}}function h(t,r){t instanceof String&&(t+="");var a=0,u=!1,y={next:function(){if(!u&&a<t.length){var I=a++;return{value:r(I,t[I]),done:!1}}return u=!0,{done:!0,value:void 0}}};return y[Symbol.iterator]=function(){return y},y}o("Array.prototype.values",function(t){return t||function(){return h(this,function(r,a){return a})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var c=c||{},_=this||self;function w(t){var r=typeof t;return r=r!="object"?r:t?Array.isArray(t)?"array":r:"null",r=="array"||r=="object"&&typeof t.length=="number"}function E(t){var r=typeof t;return r=="object"&&t!=null||r=="function"}function b(t,r,a){return t.call.apply(t.bind,arguments)}function P(t,r,a){if(!t)throw Error();if(2<arguments.length){var u=Array.prototype.slice.call(arguments,2);return function(){var y=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(y,u),t.apply(r,y)}}return function(){return t.apply(r,arguments)}}function k(t,r,a){return k=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?b:P,k.apply(null,arguments)}function x(t,r){var a=Array.prototype.slice.call(arguments,1);return function(){var u=a.slice();return u.push.apply(u,arguments),t.apply(this,u)}}function R(t,r){function a(){}a.prototype=r.prototype,t.aa=r.prototype,t.prototype=new a,t.prototype.constructor=t,t.Qb=function(u,y,I){for(var T=Array(arguments.length-2),D=2;D<arguments.length;D++)T[D-2]=arguments[D];return r.prototype[y].apply(u,T)}}function U(t){const r=t.length;if(0<r){const a=Array(r);for(let u=0;u<r;u++)a[u]=t[u];return a}return[]}function L(t,r){for(let a=1;a<arguments.length;a++){const u=arguments[a];if(w(u)){const y=t.length||0,I=u.length||0;t.length=y+I;for(let T=0;T<I;T++)t[y+T]=u[T]}else t.push(u)}}class re{constructor(r,a){this.i=r,this.j=a,this.h=0,this.g=null}get(){let r;return 0<this.h?(this.h--,r=this.g,this.g=r.next,r.next=null):r=this.i(),r}}function Y(t){return/^[\s\xa0]*$/.test(t)}function j(){var t=_.navigator;return t&&(t=t.userAgent)?t:""}function Z(t){return Z[" "](t),t}Z[" "]=function(){};var ke=j().indexOf("Gecko")!=-1&&!(j().toLowerCase().indexOf("webkit")!=-1&&j().indexOf("Edge")==-1)&&!(j().indexOf("Trident")!=-1||j().indexOf("MSIE")!=-1)&&j().indexOf("Edge")==-1;function q(t,r,a){for(const u in t)r.call(a,t[u],u,t)}function m(t,r){for(const a in t)r.call(void 0,t[a],a,t)}function l(t){const r={};for(const a in t)r[a]=t[a];return r}const f="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function p(t,r){let a,u;for(let y=1;y<arguments.length;y++){u=arguments[y];for(a in u)t[a]=u[a];for(let I=0;I<f.length;I++)a=f[I],Object.prototype.hasOwnProperty.call(u,a)&&(t[a]=u[a])}}function g(t){var r=1;t=t.split(":");const a=[];for(;0<r&&t.length;)a.push(t.shift()),r--;return t.length&&a.push(t.join(":")),a}function v(t){_.setTimeout(()=>{throw t},0)}function d(){var t=sn;let r=null;return t.g&&(r=t.g,t.g=t.g.next,t.g||(t.h=null),r.next=null),r}class se{constructor(){this.h=this.g=null}add(r,a){const u=Ye.get();u.set(r,a),this.h?this.h.next=u:this.g=u,this.h=u}}var Ye=new re(()=>new Fs,t=>t.reset());class Fs{constructor(){this.next=this.g=this.h=null}set(r,a){this.h=r,this.g=a,this.next=null}reset(){this.next=this.g=this.h=null}}let Qe,Ze=!1,sn=new se,ci=()=>{const t=_.Promise.resolve(void 0);Qe=()=>{t.then(js)}};var js=()=>{for(var t;t=d();){try{t.h.call(t.g)}catch(a){v(a)}var r=Ye;r.j(t),100>r.h&&(r.h++,t.next=r.g,r.g=t)}Ze=!1};function ge(){this.s=this.s,this.C=this.C}ge.prototype.s=!1,ge.prototype.ma=function(){this.s||(this.s=!0,this.N())},ge.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function B(t,r){this.type=t,this.g=this.target=r,this.defaultPrevented=!1}B.prototype.h=function(){this.defaultPrevented=!0};var Bs=function(){if(!_.addEventListener||!Object.defineProperty)return!1;var t=!1,r=Object.defineProperty({},"passive",{get:function(){t=!0}});try{const a=()=>{};_.addEventListener("test",a,r),_.removeEventListener("test",a,r)}catch{}return t}();function et(t,r){if(B.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var a=this.type=t.type,u=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=r,r=t.relatedTarget){if(ke){e:{try{Z(r.nodeName);var y=!0;break e}catch{}y=!1}y||(r=null)}}else a=="mouseover"?r=t.fromElement:a=="mouseout"&&(r=t.toElement);this.relatedTarget=r,u?(this.clientX=u.clientX!==void 0?u.clientX:u.pageX,this.clientY=u.clientY!==void 0?u.clientY:u.pageY,this.screenX=u.screenX||0,this.screenY=u.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:Vs[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&et.aa.h.call(this)}}R(et,B);var Vs={2:"touch",3:"pen",4:"mouse"};et.prototype.h=function(){et.aa.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var bt="closure_listenable_"+(1e6*Math.random()|0),Hs=0;function $s(t,r,a,u,y){this.listener=t,this.proxy=null,this.src=r,this.type=a,this.capture=!!u,this.ha=y,this.key=++Hs,this.da=this.fa=!1}function St(t){t.da=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function Rt(t){this.src=t,this.g={},this.h=0}Rt.prototype.add=function(t,r,a,u,y){var I=t.toString();t=this.g[I],t||(t=this.g[I]=[],this.h++);var T=an(t,r,u,y);return-1<T?(r=t[T],a||(r.fa=!1)):(r=new $s(r,this.src,I,!!u,y),r.fa=a,t.push(r)),r};function on(t,r){var a=r.type;if(a in t.g){var u=t.g[a],y=Array.prototype.indexOf.call(u,r,void 0),I;(I=0<=y)&&Array.prototype.splice.call(u,y,1),I&&(St(r),t.g[a].length==0&&(delete t.g[a],t.h--))}}function an(t,r,a,u){for(var y=0;y<t.length;++y){var I=t[y];if(!I.da&&I.listener==r&&I.capture==!!a&&I.ha==u)return y}return-1}var hn="closure_lm_"+(1e6*Math.random()|0),un={};function li(t,r,a,u,y){if(Array.isArray(r)){for(var I=0;I<r.length;I++)li(t,r[I],a,u,y);return null}return a=pi(a),t&&t[bt]?t.K(r,a,E(u)?!!u.capture:!1,y):zs(t,r,a,!1,u,y)}function zs(t,r,a,u,y,I){if(!r)throw Error("Invalid event type");var T=E(y)?!!y.capture:!!y,D=ln(t);if(D||(t[hn]=D=new Rt(t)),a=D.add(r,a,u,T,I),a.proxy)return a;if(u=Ws(),a.proxy=u,u.src=t,u.listener=a,t.addEventListener)Bs||(y=T),y===void 0&&(y=!1),t.addEventListener(r.toString(),u,y);else if(t.attachEvent)t.attachEvent(fi(r.toString()),u);else if(t.addListener&&t.removeListener)t.addListener(u);else throw Error("addEventListener and attachEvent are unavailable.");return a}function Ws(){function t(a){return r.call(t.src,t.listener,a)}const r=Gs;return t}function di(t,r,a,u,y){if(Array.isArray(r))for(var I=0;I<r.length;I++)di(t,r[I],a,u,y);else u=E(u)?!!u.capture:!!u,a=pi(a),t&&t[bt]?(t=t.i,r=String(r).toString(),r in t.g&&(I=t.g[r],a=an(I,a,u,y),-1<a&&(St(I[a]),Array.prototype.splice.call(I,a,1),I.length==0&&(delete t.g[r],t.h--)))):t&&(t=ln(t))&&(r=t.g[r.toString()],t=-1,r&&(t=an(r,a,u,y)),(a=-1<t?r[t]:null)&&cn(a))}function cn(t){if(typeof t!="number"&&t&&!t.da){var r=t.src;if(r&&r[bt])on(r.i,t);else{var a=t.type,u=t.proxy;r.removeEventListener?r.removeEventListener(a,u,t.capture):r.detachEvent?r.detachEvent(fi(a),u):r.addListener&&r.removeListener&&r.removeListener(u),(a=ln(r))?(on(a,t),a.h==0&&(a.src=null,r[hn]=null)):St(t)}}}function fi(t){return t in un?un[t]:un[t]="on"+t}function Gs(t,r){if(t.da)t=!0;else{r=new et(r,this);var a=t.listener,u=t.ha||t.src;t.fa&&cn(t),t=a.call(u,r)}return t}function ln(t){return t=t[hn],t instanceof Rt?t:null}var dn="__closure_events_fn_"+(1e9*Math.random()>>>0);function pi(t){return typeof t=="function"?t:(t[dn]||(t[dn]=function(r){return t.handleEvent(r)}),t[dn])}function V(){ge.call(this),this.i=new Rt(this),this.M=this,this.F=null}R(V,ge),V.prototype[bt]=!0,V.prototype.removeEventListener=function(t,r,a,u){di(this,t,r,a,u)};function z(t,r){var a,u=t.F;if(u)for(a=[];u;u=u.F)a.push(u);if(t=t.M,u=r.type||r,typeof r=="string")r=new B(r,t);else if(r instanceof B)r.target=r.target||t;else{var y=r;r=new B(u,t),p(r,y)}if(y=!0,a)for(var I=a.length-1;0<=I;I--){var T=r.g=a[I];y=kt(T,u,!0,r)&&y}if(T=r.g=t,y=kt(T,u,!0,r)&&y,y=kt(T,u,!1,r)&&y,a)for(I=0;I<a.length;I++)T=r.g=a[I],y=kt(T,u,!1,r)&&y}V.prototype.N=function(){if(V.aa.N.call(this),this.i){var t=this.i,r;for(r in t.g){for(var a=t.g[r],u=0;u<a.length;u++)St(a[u]);delete t.g[r],t.h--}}this.F=null},V.prototype.K=function(t,r,a,u){return this.i.add(String(t),r,!1,a,u)},V.prototype.L=function(t,r,a,u){return this.i.add(String(t),r,!0,a,u)};function kt(t,r,a,u){if(r=t.i.g[String(r)],!r)return!0;r=r.concat();for(var y=!0,I=0;I<r.length;++I){var T=r[I];if(T&&!T.da&&T.capture==a){var D=T.listener,F=T.ha||T.src;T.fa&&on(t.i,T),y=D.call(F,u)!==!1&&y}}return y&&!u.defaultPrevented}function gi(t,r,a){if(typeof t=="function")a&&(t=k(t,a));else if(t&&typeof t.handleEvent=="function")t=k(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(r)?-1:_.setTimeout(t,r||0)}function mi(t){t.g=gi(()=>{t.g=null,t.i&&(t.i=!1,mi(t))},t.l);const r=t.h;t.h=null,t.m.apply(null,r)}class Ks extends ge{constructor(r,a){super(),this.m=r,this.l=a,this.h=null,this.i=!1,this.g=null}j(r){this.h=arguments,this.g?this.i=!0:mi(this)}N(){super.N(),this.g&&(_.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function tt(t){ge.call(this),this.h=t,this.g={}}R(tt,ge);var yi=[];function _i(t){q(t.g,function(r,a){this.g.hasOwnProperty(a)&&cn(r)},t),t.g={}}tt.prototype.N=function(){tt.aa.N.call(this),_i(this)},tt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var fn=_.JSON.stringify,qs=_.JSON.parse,Js=class{stringify(t){return _.JSON.stringify(t,void 0)}parse(t){return _.JSON.parse(t,void 0)}};function pn(){}pn.prototype.h=null;function vi(t){return t.h||(t.h=t.i())}function Xs(){}var nt={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function gn(){B.call(this,"d")}R(gn,B);function mn(){B.call(this,"c")}R(mn,B);var Ue={},Ii=null;function yn(){return Ii=Ii||new V}Ue.La="serverreachability";function wi(t){B.call(this,Ue.La,t)}R(wi,B);function it(t){const r=yn();z(r,new wi(r))}Ue.STAT_EVENT="statevent";function Ei(t,r){B.call(this,Ue.STAT_EVENT,t),this.stat=r}R(Ei,B);function W(t){const r=yn();z(r,new Ei(r,t))}Ue.Ma="timingevent";function Ti(t,r){B.call(this,Ue.Ma,t),this.size=r}R(Ti,B);function rt(t,r){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return _.setTimeout(function(){t()},r)}function st(){this.g=!0}st.prototype.xa=function(){this.g=!1};function Ys(t,r,a,u,y,I){t.info(function(){if(t.g)if(I)for(var T="",D=I.split("&"),F=0;F<D.length;F++){var C=D[F].split("=");if(1<C.length){var H=C[0];C=C[1];var $=H.split("_");T=2<=$.length&&$[1]=="type"?T+(H+"="+C+"&"):T+(H+"=redacted&")}}else T=null;else T=I;return"XMLHTTP REQ ("+u+") [attempt "+y+"]: "+r+`
`+a+`
`+T})}function Qs(t,r,a,u,y,I,T){t.info(function(){return"XMLHTTP RESP ("+u+") [ attempt "+y+"]: "+r+`
`+a+`
`+I+" "+T})}function xe(t,r,a,u){t.info(function(){return"XMLHTTP TEXT ("+r+"): "+eo(t,a)+(u?" "+u:"")})}function Zs(t,r){t.info(function(){return"TIMEOUT: "+r})}st.prototype.info=function(){};function eo(t,r){if(!t.g)return r;if(!r)return null;try{var a=JSON.parse(r);if(a){for(t=0;t<a.length;t++)if(Array.isArray(a[t])){var u=a[t];if(!(2>u.length)){var y=u[1];if(Array.isArray(y)&&!(1>y.length)){var I=y[0];if(I!="noop"&&I!="stop"&&I!="close")for(var T=1;T<y.length;T++)y[T]=""}}}}return fn(a)}catch{return r}}var _n={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},to={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},vn;function Ct(){}R(Ct,pn),Ct.prototype.g=function(){return new XMLHttpRequest},Ct.prototype.i=function(){return{}},vn=new Ct;function me(t,r,a,u){this.j=t,this.i=r,this.l=a,this.R=u||1,this.U=new tt(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Ai}function Ai(){this.i=null,this.g="",this.h=!1}var bi={},In={};function wn(t,r,a){t.L=1,t.v=Nt(oe(r)),t.m=a,t.P=!0,Si(t,null)}function Si(t,r){t.F=Date.now(),Pt(t),t.A=oe(t.v);var a=t.A,u=t.R;Array.isArray(u)||(u=[String(u)]),Bi(a.i,"t",u),t.C=0,a=t.j.J,t.h=new Ai,t.g=rr(t.j,a?r:null,!t.m),0<t.O&&(t.M=new Ks(k(t.Y,t,t.g),t.O)),r=t.U,a=t.g,u=t.ca;var y="readystatechange";Array.isArray(y)||(y&&(yi[0]=y.toString()),y=yi);for(var I=0;I<y.length;I++){var T=li(a,y[I],u||r.handleEvent,!1,r.h||r);if(!T)break;r.g[T.key]=T}r=t.H?l(t.H):{},t.m?(t.u||(t.u="POST"),r["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.m,r)):(t.u="GET",t.g.ea(t.A,t.u,null,r)),it(),Ys(t.i,t.u,t.A,t.l,t.R,t.m)}me.prototype.ca=function(t){t=t.target;const r=this.M;r&&ae(t)==3?r.j():this.Y(t)},me.prototype.Y=function(t){try{if(t==this.g)e:{const $=ae(this.g);var r=this.g.Ba();const Be=this.g.Z();if(!(3>$)&&($!=3||this.g&&(this.h.h||this.g.oa()||Ki(this.g)))){this.J||$!=4||r==7||(r==8||0>=Be?it(3):it(2)),En(this);var a=this.g.Z();this.X=a;t:if(Ri(this)){var u=Ki(this.g);t="";var y=u.length,I=ae(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ce(this),ot(this);var T="";break t}this.h.i=new _.TextDecoder}for(r=0;r<y;r++)this.h.h=!0,t+=this.h.i.decode(u[r],{stream:!(I&&r==y-1)});u.length=0,this.h.g+=t,this.C=0,T=this.h.g}else T=this.g.oa();if(this.o=a==200,Qs(this.i,this.u,this.A,this.l,this.R,$,a),this.o){if(this.T&&!this.K){t:{if(this.g){var D,F=this.g;if((D=F.g?F.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Y(D)){var C=D;break t}}C=null}if(a=C)xe(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Tn(this,a);else{this.o=!1,this.s=3,W(12),Ce(this),ot(this);break e}}if(this.P){a=!0;let ee;for(;!this.J&&this.C<T.length;)if(ee=no(this,T),ee==In){$==4&&(this.s=4,W(14),a=!1),xe(this.i,this.l,null,"[Incomplete Response]");break}else if(ee==bi){this.s=4,W(15),xe(this.i,this.l,T,"[Invalid Chunk]"),a=!1;break}else xe(this.i,this.l,ee,null),Tn(this,ee);if(Ri(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),$!=4||T.length!=0||this.h.h||(this.s=1,W(16),a=!1),this.o=this.o&&a,!a)xe(this.i,this.l,T,"[Invalid Chunked Response]"),Ce(this),ot(this);else if(0<T.length&&!this.W){this.W=!0;var H=this.j;H.g==this&&H.ba&&!H.M&&(H.j.info("Great, no buffering proxy detected. Bytes received: "+T.length),Cn(H),H.M=!0,W(11))}}else xe(this.i,this.l,T,null),Tn(this,T);$==4&&Ce(this),this.o&&!this.J&&($==4?er(this.j,this):(this.o=!1,Pt(this)))}else Io(this.g),a==400&&0<T.indexOf("Unknown SID")?(this.s=3,W(12)):(this.s=0,W(13)),Ce(this),ot(this)}}}catch{}finally{}};function Ri(t){return t.g?t.u=="GET"&&t.L!=2&&t.j.Ca:!1}function no(t,r){var a=t.C,u=r.indexOf(`
`,a);return u==-1?In:(a=Number(r.substring(a,u)),isNaN(a)?bi:(u+=1,u+a>r.length?In:(r=r.slice(u,u+a),t.C=u+a,r)))}me.prototype.cancel=function(){this.J=!0,Ce(this)};function Pt(t){t.S=Date.now()+t.I,ki(t,t.I)}function ki(t,r){if(t.B!=null)throw Error("WatchDog timer not null");t.B=rt(k(t.ba,t),r)}function En(t){t.B&&(_.clearTimeout(t.B),t.B=null)}me.prototype.ba=function(){this.B=null;const t=Date.now();0<=t-this.S?(Zs(this.i,this.A),this.L!=2&&(it(),W(17)),Ce(this),this.s=2,ot(this)):ki(this,this.S-t)};function ot(t){t.j.G==0||t.J||er(t.j,t)}function Ce(t){En(t);var r=t.M;r&&typeof r.ma=="function"&&r.ma(),t.M=null,_i(t.U),t.g&&(r=t.g,t.g=null,r.abort(),r.ma())}function Tn(t,r){try{var a=t.j;if(a.G!=0&&(a.g==t||An(a.h,t))){if(!t.K&&An(a.h,t)&&a.G==3){try{var u=a.Da.g.parse(r)}catch{u=null}if(Array.isArray(u)&&u.length==3){var y=u;if(y[0]==0){e:if(!a.u){if(a.g)if(a.g.F+3e3<t.F)jt(a),xt(a);else break e;kn(a),W(18)}}else a.za=y[1],0<a.za-a.T&&37500>y[2]&&a.F&&a.v==0&&!a.C&&(a.C=rt(k(a.Za,a),6e3));if(1>=Oi(a.h)&&a.ca){try{a.ca()}catch{}a.ca=void 0}}else Oe(a,11)}else if((t.K||a.g==t)&&jt(a),!Y(r))for(y=a.Da.g.parse(r),r=0;r<y.length;r++){let C=y[r];if(a.T=C[0],C=C[1],a.G==2)if(C[0]=="c"){a.K=C[1],a.ia=C[2];const H=C[3];H!=null&&(a.la=H,a.j.info("VER="+a.la));const $=C[4];$!=null&&(a.Aa=$,a.j.info("SVER="+a.Aa));const Be=C[5];Be!=null&&typeof Be=="number"&&0<Be&&(u=1.5*Be,a.L=u,a.j.info("backChannelRequestTimeoutMs_="+u)),u=a;const ee=t.g;if(ee){const Bt=ee.g?ee.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Bt){var I=u.h;I.g||Bt.indexOf("spdy")==-1&&Bt.indexOf("quic")==-1&&Bt.indexOf("h2")==-1||(I.j=I.l,I.g=new Set,I.h&&(bn(I,I.h),I.h=null))}if(u.D){const Pn=ee.g?ee.g.getResponseHeader("X-HTTP-Session-Id"):null;Pn&&(u.ya=Pn,N(u.I,u.D,Pn))}}a.G=3,a.l&&a.l.ua(),a.ba&&(a.R=Date.now()-t.F,a.j.info("Handshake RTT: "+a.R+"ms")),u=a;var T=t;if(u.qa=ir(u,u.J?u.ia:null,u.W),T.K){Di(u.h,T);var D=T,F=u.L;F&&(D.I=F),D.B&&(En(D),Pt(D)),u.g=T}else Qi(u);0<a.i.length&&Ft(a)}else C[0]!="stop"&&C[0]!="close"||Oe(a,7);else a.G==3&&(C[0]=="stop"||C[0]=="close"?C[0]=="stop"?Oe(a,7):Rn(a):C[0]!="noop"&&a.l&&a.l.ta(C),a.v=0)}}it(4)}catch{}}var io=class{constructor(t,r){this.g=t,this.map=r}};function Ci(t){this.l=t||10,_.PerformanceNavigationTiming?(t=_.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(_.chrome&&_.chrome.loadTimes&&_.chrome.loadTimes()&&_.chrome.loadTimes().wasFetchedViaSpdy),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Pi(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Oi(t){return t.h?1:t.g?t.g.size:0}function An(t,r){return t.h?t.h==r:t.g?t.g.has(r):!1}function bn(t,r){t.g?t.g.add(r):t.h=r}function Di(t,r){t.h&&t.h==r?t.h=null:t.g&&t.g.has(r)&&t.g.delete(r)}Ci.prototype.cancel=function(){if(this.i=Ni(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Ni(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let r=t.i;for(const a of t.g.values())r=r.concat(a.D);return r}return U(t.i)}function ro(t){if(t.V&&typeof t.V=="function")return t.V();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(w(t)){for(var r=[],a=t.length,u=0;u<a;u++)r.push(t[u]);return r}r=[],a=0;for(u in t)r[a++]=t[u];return r}function so(t){if(t.na&&typeof t.na=="function")return t.na();if(!t.V||typeof t.V!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(w(t)||typeof t=="string"){var r=[];t=t.length;for(var a=0;a<t;a++)r.push(a);return r}r=[],a=0;for(const u in t)r[a++]=u;return r}}}function Li(t,r){if(t.forEach&&typeof t.forEach=="function")t.forEach(r,void 0);else if(w(t)||typeof t=="string")Array.prototype.forEach.call(t,r,void 0);else for(var a=so(t),u=ro(t),y=u.length,I=0;I<y;I++)r.call(void 0,u[I],a&&a[I],t)}var Mi=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function oo(t,r){if(t){t=t.split("&");for(var a=0;a<t.length;a++){var u=t[a].indexOf("="),y=null;if(0<=u){var I=t[a].substring(0,u);y=t[a].substring(u+1)}else I=t[a];r(I,y?decodeURIComponent(y.replace(/\+/g," ")):"")}}}function Pe(t){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,t instanceof Pe){this.h=t.h,Ot(this,t.j),this.o=t.o,this.g=t.g,Dt(this,t.s),this.l=t.l;var r=t.i,a=new ut;a.i=r.i,r.g&&(a.g=new Map(r.g),a.h=r.h),Ui(this,a),this.m=t.m}else t&&(r=String(t).match(Mi))?(this.h=!1,Ot(this,r[1]||"",!0),this.o=at(r[2]||""),this.g=at(r[3]||"",!0),Dt(this,r[4]),this.l=at(r[5]||"",!0),Ui(this,r[6]||"",!0),this.m=at(r[7]||"")):(this.h=!1,this.i=new ut(null,this.h))}Pe.prototype.toString=function(){var t=[],r=this.j;r&&t.push(ht(r,xi,!0),":");var a=this.g;return(a||r=="file")&&(t.push("//"),(r=this.o)&&t.push(ht(r,xi,!0),"@"),t.push(encodeURIComponent(String(a)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a=this.s,a!=null&&t.push(":",String(a))),(a=this.l)&&(this.g&&a.charAt(0)!="/"&&t.push("/"),t.push(ht(a,a.charAt(0)=="/"?uo:ho,!0))),(a=this.i.toString())&&t.push("?",a),(a=this.m)&&t.push("#",ht(a,lo)),t.join("")};function oe(t){return new Pe(t)}function Ot(t,r,a){t.j=a?at(r,!0):r,t.j&&(t.j=t.j.replace(/:$/,""))}function Dt(t,r){if(r){if(r=Number(r),isNaN(r)||0>r)throw Error("Bad port number "+r);t.s=r}else t.s=null}function Ui(t,r,a){r instanceof ut?(t.i=r,fo(t.i,t.h)):(a||(r=ht(r,co)),t.i=new ut(r,t.h))}function N(t,r,a){t.i.set(r,a)}function Nt(t){return N(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function at(t,r){return t?r?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function ht(t,r,a){return typeof t=="string"?(t=encodeURI(t).replace(r,ao),a&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function ao(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var xi=/[#\/\?@]/g,ho=/[#\?:]/g,uo=/[#\?]/g,co=/[#\?@]/g,lo=/#/g;function ut(t,r){this.h=this.g=null,this.i=t||null,this.j=!!r}function ye(t){t.g||(t.g=new Map,t.h=0,t.i&&oo(t.i,function(r,a){t.add(decodeURIComponent(r.replace(/\+/g," ")),a)}))}i=ut.prototype,i.add=function(t,r){ye(this),this.i=null,t=Fe(this,t);var a=this.g.get(t);return a||this.g.set(t,a=[]),a.push(r),this.h+=1,this};function Fi(t,r){ye(t),r=Fe(t,r),t.g.has(r)&&(t.i=null,t.h-=t.g.get(r).length,t.g.delete(r))}function ji(t,r){return ye(t),r=Fe(t,r),t.g.has(r)}i.forEach=function(t,r){ye(this),this.g.forEach(function(a,u){a.forEach(function(y){t.call(r,y,u,this)},this)},this)},i.na=function(){ye(this);const t=Array.from(this.g.values()),r=Array.from(this.g.keys()),a=[];for(let u=0;u<r.length;u++){const y=t[u];for(let I=0;I<y.length;I++)a.push(r[u])}return a},i.V=function(t){ye(this);let r=[];if(typeof t=="string")ji(this,t)&&(r=r.concat(this.g.get(Fe(this,t))));else{t=Array.from(this.g.values());for(let a=0;a<t.length;a++)r=r.concat(t[a])}return r},i.set=function(t,r){return ye(this),this.i=null,t=Fe(this,t),ji(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[r]),this.h+=1,this},i.get=function(t,r){return t?(t=this.V(t),0<t.length?String(t[0]):r):r};function Bi(t,r,a){Fi(t,r),0<a.length&&(t.i=null,t.g.set(Fe(t,r),U(a)),t.h+=a.length)}i.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],r=Array.from(this.g.keys());for(var a=0;a<r.length;a++){var u=r[a];const I=encodeURIComponent(String(u)),T=this.V(u);for(u=0;u<T.length;u++){var y=I;T[u]!==""&&(y+="="+encodeURIComponent(String(T[u]))),t.push(y)}}return this.i=t.join("&")};function Fe(t,r){return r=String(r),t.j&&(r=r.toLowerCase()),r}function fo(t,r){r&&!t.j&&(ye(t),t.i=null,t.g.forEach(function(a,u){var y=u.toLowerCase();u!=y&&(Fi(this,u),Bi(this,y,a))},t)),t.j=r}function po(t,r){const a=new st;if(_.Image){const u=new Image;u.onload=x(_e,a,"TestLoadImage: loaded",!0,r,u),u.onerror=x(_e,a,"TestLoadImage: error",!1,r,u),u.onabort=x(_e,a,"TestLoadImage: abort",!1,r,u),u.ontimeout=x(_e,a,"TestLoadImage: timeout",!1,r,u),_.setTimeout(function(){u.ontimeout&&u.ontimeout()},1e4),u.src=t}else r(!1)}function go(t,r){const a=new st,u=new AbortController,y=setTimeout(()=>{u.abort(),_e(a,"TestPingServer: timeout",!1,r)},1e4);fetch(t,{signal:u.signal}).then(I=>{clearTimeout(y),I.ok?_e(a,"TestPingServer: ok",!0,r):_e(a,"TestPingServer: server error",!1,r)}).catch(()=>{clearTimeout(y),_e(a,"TestPingServer: error",!1,r)})}function _e(t,r,a,u,y){try{y&&(y.onload=null,y.onerror=null,y.onabort=null,y.ontimeout=null),u(a)}catch{}}function mo(){this.g=new Js}function yo(t,r,a){const u=a||"";try{Li(t,function(y,I){let T=y;E(y)&&(T=fn(y)),r.push(u+I+"="+encodeURIComponent(T))})}catch(y){throw r.push(u+"type="+encodeURIComponent("_badmap")),y}}function Lt(t){this.l=t.Ub||null,this.j=t.eb||!1}R(Lt,pn),Lt.prototype.g=function(){return new Mt(this.l,this.j)},Lt.prototype.i=function(t){return function(){return t}}({});function Mt(t,r){V.call(this),this.D=t,this.o=r,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}R(Mt,V),i=Mt.prototype,i.open=function(t,r){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=t,this.A=r,this.readyState=1,lt(this)},i.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const r={headers:this.u,method:this.B,credentials:this.m,cache:void 0};t&&(r.body=t),(this.D||_).fetch(new Request(this.A,r)).then(this.Sa.bind(this),this.ga.bind(this))},i.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ct(this)),this.readyState=0},i.Sa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,lt(this)),this.g&&(this.readyState=3,lt(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof _.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Vi(this)}else t.text().then(this.Ra.bind(this),this.ga.bind(this))};function Vi(t){t.j.read().then(t.Pa.bind(t)).catch(t.ga.bind(t))}i.Pa=function(t){if(this.g){if(this.o&&t.value)this.response.push(t.value);else if(!this.o){var r=t.value?t.value:new Uint8Array(0);(r=this.v.decode(r,{stream:!t.done}))&&(this.response=this.responseText+=r)}t.done?ct(this):lt(this),this.readyState==3&&Vi(this)}},i.Ra=function(t){this.g&&(this.response=this.responseText=t,ct(this))},i.Qa=function(t){this.g&&(this.response=t,ct(this))},i.ga=function(){this.g&&ct(this)};function ct(t){t.readyState=4,t.l=null,t.j=null,t.v=null,lt(t)}i.setRequestHeader=function(t,r){this.u.append(t,r)},i.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},i.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],r=this.h.entries();for(var a=r.next();!a.done;)a=a.value,t.push(a[0]+": "+a[1]),a=r.next();return t.join(`\r
`)};function lt(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Mt.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});function Hi(t){let r="";return q(t,function(a,u){r+=u,r+=":",r+=a,r+=`\r
`}),r}function Sn(t,r,a){e:{for(u in a){var u=!1;break e}u=!0}u||(a=Hi(a),typeof t=="string"?a!=null&&encodeURIComponent(String(a)):N(t,r,a))}function M(t){V.call(this),this.headers=new Map,this.o=t||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}R(M,V);var _o=/^https?$/i,vo=["POST","PUT"];i=M.prototype,i.Ha=function(t){this.J=t},i.ea=function(t,r,a,u){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+t);r=r?r.toUpperCase():"GET",this.D=t,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():vn.g(),this.v=this.o?vi(this.o):vi(vn),this.g.onreadystatechange=k(this.Ea,this);try{this.B=!0,this.g.open(r,String(t),!0),this.B=!1}catch(I){$i(this,I);return}if(t=a||"",a=new Map(this.headers),u)if(Object.getPrototypeOf(u)===Object.prototype)for(var y in u)a.set(y,u[y]);else if(typeof u.keys=="function"&&typeof u.get=="function")for(const I of u.keys())a.set(I,u.get(I));else throw Error("Unknown input type for opt_headers: "+String(u));u=Array.from(a.keys()).find(I=>I.toLowerCase()=="content-type"),y=_.FormData&&t instanceof _.FormData,!(0<=Array.prototype.indexOf.call(vo,r,void 0))||u||y||a.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[I,T]of a)this.g.setRequestHeader(I,T);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Gi(this),this.u=!0,this.g.send(t),this.u=!1}catch(I){$i(this,I)}};function $i(t,r){t.h=!1,t.g&&(t.j=!0,t.g.abort(),t.j=!1),t.l=r,t.m=5,zi(t),Ut(t)}function zi(t){t.A||(t.A=!0,z(t,"complete"),z(t,"error"))}i.abort=function(t){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=t||7,z(this,"complete"),z(this,"abort"),Ut(this))},i.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ut(this,!0)),M.aa.N.call(this)},i.Ea=function(){this.s||(this.B||this.u||this.j?Wi(this):this.bb())},i.bb=function(){Wi(this)};function Wi(t){if(t.h&&typeof c<"u"&&(!t.v[1]||ae(t)!=4||t.Z()!=2)){if(t.u&&ae(t)==4)gi(t.Ea,0,t);else if(z(t,"readystatechange"),ae(t)==4){t.h=!1;try{const T=t.Z();e:switch(T){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var r=!0;break e;default:r=!1}var a;if(!(a=r)){var u;if(u=T===0){var y=String(t.D).match(Mi)[1]||null;!y&&_.self&&_.self.location&&(y=_.self.location.protocol.slice(0,-1)),u=!_o.test(y?y.toLowerCase():"")}a=u}if(a)z(t,"complete"),z(t,"success");else{t.m=6;try{var I=2<ae(t)?t.g.statusText:""}catch{I=""}t.l=I+" ["+t.Z()+"]",zi(t)}}finally{Ut(t)}}}}function Ut(t,r){if(t.g){Gi(t);const a=t.g,u=t.v[0]?()=>{}:null;t.g=null,t.v=null,r||z(t,"ready");try{a.onreadystatechange=u}catch{}}}function Gi(t){t.I&&(_.clearTimeout(t.I),t.I=null)}i.isActive=function(){return!!this.g};function ae(t){return t.g?t.g.readyState:0}i.Z=function(){try{return 2<ae(this)?this.g.status:-1}catch{return-1}},i.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},i.Oa=function(t){if(this.g){var r=this.g.responseText;return t&&r.indexOf(t)==0&&(r=r.substring(t.length)),qs(r)}};function Ki(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.H){case"":case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function Io(t){const r={};t=(t.g&&2<=ae(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let u=0;u<t.length;u++){if(Y(t[u]))continue;var a=g(t[u]);const y=a[0];if(a=a[1],typeof a!="string")continue;a=a.trim();const I=r[y]||[];r[y]=I,I.push(a)}m(r,function(u){return u.join(", ")})}i.Ba=function(){return this.m},i.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function dt(t,r,a){return a&&a.internalChannelParams&&a.internalChannelParams[t]||r}function qi(t){this.Aa=0,this.i=[],this.j=new st,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=dt("failFast",!1,t),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=dt("baseRetryDelayMs",5e3,t),this.cb=dt("retryDelaySeedMs",1e4,t),this.Wa=dt("forwardChannelMaxRetries",2,t),this.wa=dt("forwardChannelRequestTimeoutMs",2e4,t),this.pa=t&&t.xmlHttpFactory||void 0,this.Xa=t&&t.Tb||void 0,this.Ca=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.h=new Ci(t&&t.concurrentRequestLimit),this.Da=new mo,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=t&&t.Rb||!1,t&&t.xa&&this.j.xa(),t&&t.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&t&&t.detectBufferingProxy||!1,this.ja=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.ja=t.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}i=qi.prototype,i.la=8,i.G=1,i.connect=function(t,r,a,u){W(0),this.W=t,this.H=r||{},a&&u!==void 0&&(this.H.OSID=a,this.H.OAID=u),this.F=this.X,this.I=ir(this,null,this.W),Ft(this)};function Rn(t){if(Ji(t),t.G==3){var r=t.U++,a=oe(t.I);if(N(a,"SID",t.K),N(a,"RID",r),N(a,"TYPE","terminate"),ft(t,a),r=new me(t,t.j,r),r.L=2,r.v=Nt(oe(a)),a=!1,_.navigator&&_.navigator.sendBeacon)try{a=_.navigator.sendBeacon(r.v.toString(),"")}catch{}!a&&_.Image&&(new Image().src=r.v,a=!0),a||(r.g=rr(r.j,null),r.g.ea(r.v)),r.F=Date.now(),Pt(r)}nr(t)}function xt(t){t.g&&(Cn(t),t.g.cancel(),t.g=null)}function Ji(t){xt(t),t.u&&(_.clearTimeout(t.u),t.u=null),jt(t),t.h.cancel(),t.s&&(typeof t.s=="number"&&_.clearTimeout(t.s),t.s=null)}function Ft(t){if(!Pi(t.h)&&!t.s){t.s=!0;var r=t.Ga;Qe||ci(),Ze||(Qe(),Ze=!0),sn.add(r,t),t.B=0}}function wo(t,r){return Oi(t.h)>=t.h.j-(t.s?1:0)?!1:t.s?(t.i=r.D.concat(t.i),!0):t.G==1||t.G==2||t.B>=(t.Va?0:t.Wa)?!1:(t.s=rt(k(t.Ga,t,r),tr(t,t.B)),t.B++,!0)}i.Ga=function(t){if(this.s)if(this.s=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const y=new me(this,this.j,t);let I=this.o;if(this.S&&(I?(I=l(I),p(I,this.S)):I=this.S),this.m!==null||this.O||(y.H=I,I=null),this.P)e:{for(var r=0,a=0;a<this.i.length;a++){t:{var u=this.i[a];if("__data__"in u.map&&(u=u.map.__data__,typeof u=="string")){u=u.length;break t}u=void 0}if(u===void 0)break;if(r+=u,4096<r){r=a;break e}if(r===4096||a===this.i.length-1){r=a+1;break e}}r=1e3}else r=1e3;r=Yi(this,y,r),a=oe(this.I),N(a,"RID",t),N(a,"CVER",22),this.D&&N(a,"X-HTTP-Session-Id",this.D),ft(this,a),I&&(this.O?r="headers="+encodeURIComponent(String(Hi(I)))+"&"+r:this.m&&Sn(a,this.m,I)),bn(this.h,y),this.Ua&&N(a,"TYPE","init"),this.P?(N(a,"$req",r),N(a,"SID","null"),y.T=!0,wn(y,a,null)):wn(y,a,r),this.G=2}}else this.G==3&&(t?Xi(this,t):this.i.length==0||Pi(this.h)||Xi(this))};function Xi(t,r){var a;r?a=r.l:a=t.U++;const u=oe(t.I);N(u,"SID",t.K),N(u,"RID",a),N(u,"AID",t.T),ft(t,u),t.m&&t.o&&Sn(u,t.m,t.o),a=new me(t,t.j,a,t.B+1),t.m===null&&(a.H=t.o),r&&(t.i=r.D.concat(t.i)),r=Yi(t,a,1e3),a.I=Math.round(.5*t.wa)+Math.round(.5*t.wa*Math.random()),bn(t.h,a),wn(a,u,r)}function ft(t,r){t.H&&q(t.H,function(a,u){N(r,u,a)}),t.l&&Li({},function(a,u){N(r,u,a)})}function Yi(t,r,a){a=Math.min(t.i.length,a);var u=t.l?k(t.l.Na,t.l,t):null;e:{var y=t.i;let I=-1;for(;;){const T=["count="+a];I==-1?0<a?(I=y[0].g,T.push("ofs="+I)):I=0:T.push("ofs="+I);let D=!0;for(let F=0;F<a;F++){let C=y[F].g;const H=y[F].map;if(C-=I,0>C)I=Math.max(0,y[F].g-100),D=!1;else try{yo(H,T,"req"+C+"_")}catch{u&&u(H)}}if(D){u=T.join("&");break e}}}return t=t.i.splice(0,a),r.D=t,u}function Qi(t){if(!t.g&&!t.u){t.Y=1;var r=t.Fa;Qe||ci(),Ze||(Qe(),Ze=!0),sn.add(r,t),t.v=0}}function kn(t){return t.g||t.u||3<=t.v?!1:(t.Y++,t.u=rt(k(t.Fa,t),tr(t,t.v)),t.v++,!0)}i.Fa=function(){if(this.u=null,Zi(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var t=2*this.R;this.j.info("BP detection timer enabled: "+t),this.A=rt(k(this.ab,this),t)}},i.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,W(10),xt(this),Zi(this))};function Cn(t){t.A!=null&&(_.clearTimeout(t.A),t.A=null)}function Zi(t){t.g=new me(t,t.j,"rpc",t.Y),t.m===null&&(t.g.H=t.o),t.g.O=0;var r=oe(t.qa);N(r,"RID","rpc"),N(r,"SID",t.K),N(r,"AID",t.T),N(r,"CI",t.F?"0":"1"),!t.F&&t.ja&&N(r,"TO",t.ja),N(r,"TYPE","xmlhttp"),ft(t,r),t.m&&t.o&&Sn(r,t.m,t.o),t.L&&(t.g.I=t.L);var a=t.g;t=t.ia,a.L=1,a.v=Nt(oe(r)),a.m=null,a.P=!0,Si(a,t)}i.Za=function(){this.C!=null&&(this.C=null,xt(this),kn(this),W(19))};function jt(t){t.C!=null&&(_.clearTimeout(t.C),t.C=null)}function er(t,r){var a=null;if(t.g==r){jt(t),Cn(t),t.g=null;var u=2}else if(An(t.h,r))a=r.D,Di(t.h,r),u=1;else return;if(t.G!=0){if(r.o)if(u==1){a=r.m?r.m.length:0,r=Date.now()-r.F;var y=t.B;u=yn(),z(u,new Ti(u,a)),Ft(t)}else Qi(t);else if(y=r.s,y==3||y==0&&0<r.X||!(u==1&&wo(t,r)||u==2&&kn(t)))switch(a&&0<a.length&&(r=t.h,r.i=r.i.concat(a)),y){case 1:Oe(t,5);break;case 4:Oe(t,10);break;case 3:Oe(t,6);break;default:Oe(t,2)}}}function tr(t,r){let a=t.Ta+Math.floor(Math.random()*t.cb);return t.isActive()||(a*=2),a*r}function Oe(t,r){if(t.j.info("Error code "+r),r==2){var a=k(t.fb,t),u=t.Xa;const y=!u;u=new Pe(u||"//www.google.com/images/cleardot.gif"),_.location&&_.location.protocol=="http"||Ot(u,"https"),Nt(u),y?po(u.toString(),a):go(u.toString(),a)}else W(2);t.G=0,t.l&&t.l.sa(r),nr(t),Ji(t)}i.fb=function(t){t?(this.j.info("Successfully pinged google.com"),W(2)):(this.j.info("Failed to ping google.com"),W(1))};function nr(t){if(t.G=0,t.ka=[],t.l){const r=Ni(t.h);(r.length!=0||t.i.length!=0)&&(L(t.ka,r),L(t.ka,t.i),t.h.i.length=0,U(t.i),t.i.length=0),t.l.ra()}}function ir(t,r,a){var u=a instanceof Pe?oe(a):new Pe(a);if(u.g!="")r&&(u.g=r+"."+u.g),Dt(u,u.s);else{var y=_.location;u=y.protocol,r=r?r+"."+y.hostname:y.hostname,y=+y.port;var I=new Pe(null);u&&Ot(I,u),r&&(I.g=r),y&&Dt(I,y),a&&(I.l=a),u=I}return a=t.D,r=t.ya,a&&r&&N(u,a,r),N(u,"VER",t.la),ft(t,u),u}function rr(t,r,a){if(r&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return r=t.Ca&&!t.pa?new M(new Lt({eb:a})):new M(t.pa),r.Ha(t.J),r}i.isActive=function(){return!!this.l&&this.l.isActive(this)};function sr(){}i=sr.prototype,i.ua=function(){},i.ta=function(){},i.sa=function(){},i.ra=function(){},i.isActive=function(){return!0},i.Na=function(){};function Q(t,r){V.call(this),this.g=new qi(r),this.l=t,this.h=r&&r.messageUrlParams||null,t=r&&r.messageHeaders||null,r&&r.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.o=t,t=r&&r.initMessageHeaders||null,r&&r.messageContentType&&(t?t["X-WebChannel-Content-Type"]=r.messageContentType:t={"X-WebChannel-Content-Type":r.messageContentType}),r&&r.va&&(t?t["X-WebChannel-Client-Profile"]=r.va:t={"X-WebChannel-Client-Profile":r.va}),this.g.S=t,(t=r&&r.Sb)&&!Y(t)&&(this.g.m=t),this.v=r&&r.supportsCrossDomainXhr||!1,this.u=r&&r.sendRawJson||!1,(r=r&&r.httpSessionIdParam)&&!Y(r)&&(this.g.D=r,t=this.h,t!==null&&r in t&&(t=this.h,r in t&&delete t[r])),this.j=new je(this)}R(Q,V),Q.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Q.prototype.close=function(){Rn(this.g)},Q.prototype.o=function(t){var r=this.g;if(typeof t=="string"){var a={};a.__data__=t,t=a}else this.u&&(a={},a.__data__=fn(t),t=a);r.i.push(new io(r.Ya++,t)),r.G==3&&Ft(r)},Q.prototype.N=function(){this.g.l=null,delete this.j,Rn(this.g),delete this.g,Q.aa.N.call(this)};function or(t){gn.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var r=t.__sm__;if(r){e:{for(const a in r){t=a;break e}t=void 0}(this.i=t)&&(t=this.i,r=r!==null&&t in r?r[t]:void 0),this.data=r}else this.data=t}R(or,gn);function ar(){mn.call(this),this.status=1}R(ar,mn);function je(t){this.g=t}R(je,sr),je.prototype.ua=function(){z(this.g,"a")},je.prototype.ta=function(t){z(this.g,new or(t))},je.prototype.sa=function(t){z(this.g,new ar)},je.prototype.ra=function(){z(this.g,"b")},Q.prototype.send=Q.prototype.o,Q.prototype.open=Q.prototype.m,Q.prototype.close=Q.prototype.close,_n.NO_ERROR=0,_n.TIMEOUT=8,_n.HTTP_ERROR=6,to.COMPLETE="complete",Xs.EventType=nt,nt.OPEN="a",nt.CLOSE="b",nt.ERROR="c",nt.MESSAGE="d",V.prototype.listen=V.prototype.K,M.prototype.listenOnce=M.prototype.L,M.prototype.getLastError=M.prototype.Ka,M.prototype.getLastErrorCode=M.prototype.Ba,M.prototype.getStatus=M.prototype.Z,M.prototype.getResponseJson=M.prototype.Oa,M.prototype.getResponseText=M.prototype.oa,M.prototype.send=M.prototype.ea,M.prototype.setWithCredentials=M.prototype.Ha}).apply(typeof Ht<"u"?Ht:typeof self<"u"?self:typeof window<"u"?window:{});const Ur="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}G.UNAUTHENTICATED=new G(null),G.GOOGLE_CREDENTIALS=new G("google-credentials-uid"),G.FIRST_PARTY=new G("first-party-uid"),G.MOCK_USER=new G("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let At="11.0.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ke=new qn("@firebase/firestore");function te(i,...e){if(Ke.logLevel<=O.DEBUG){const n=e.map(ai);Ke.debug(`Firestore (${At}): ${i}`,...n)}}function Ls(i,...e){if(Ke.logLevel<=O.ERROR){const n=e.map(ai);Ke.error(`Firestore (${At}): ${i}`,...n)}}function Zu(i,...e){if(Ke.logLevel<=O.WARN){const n=e.map(ai);Ke.warn(`Firestore (${At}): ${i}`,...n)}}function ai(i){if(typeof i=="string")return i;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(i)}catch{return i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hi(i="Unexpected state"){const e=`FIRESTORE (${At}) INTERNAL ASSERTION FAILED: `+i;throw Ls(e),new Error(e)}function gt(i,e){i||hi()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class X extends pe{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ms{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class ec{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(G.UNAUTHENTICATED))}shutdown(){}}class tc{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class nc{constructor(e){this.t=e,this.currentUser=G.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){gt(this.o===void 0);let s=this.i;const o=w=>this.i!==s?(s=this.i,n(w)):Promise.resolve();let h=new mt;this.o=()=>{this.i++,this.currentUser=this.u(),h.resolve(),h=new mt,e.enqueueRetryable(()=>o(this.currentUser))};const c=()=>{const w=h;e.enqueueRetryable(async()=>{await w.promise,await o(this.currentUser)})},_=w=>{te("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=w,this.o&&(this.auth.addAuthTokenListener(this.o),c())};this.t.onInit(w=>_(w)),setTimeout(()=>{if(!this.auth){const w=this.t.getImmediate({optional:!0});w?_(w):(te("FirebaseAuthCredentialsProvider","Auth not yet detected"),h.resolve(),h=new mt)}},0),c()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(te("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(gt(typeof s.accessToken=="string"),new Ms(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return gt(e===null||typeof e=="string"),new G(e)}}class ic{constructor(e,n,s){this.l=e,this.h=n,this.P=s,this.type="FirstParty",this.user=G.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class rc{constructor(e,n,s){this.l=e,this.h=n,this.P=s}getToken(){return Promise.resolve(new ic(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(G.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class sc{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class oc{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){gt(this.o===void 0);const s=h=>{h.error!=null&&te("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${h.error.message}`);const c=h.token!==this.R;return this.R=h.token,te("FirebaseAppCheckTokenProvider",`Received ${c?"new":"existing"} token.`),c?n(h.token):Promise.resolve()};this.o=h=>{e.enqueueRetryable(()=>s(h))};const o=h=>{te("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=h,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(h=>o(h)),setTimeout(()=>{if(!this.appCheck){const h=this.A.getImmediate({optional:!0});h?o(h):te("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(gt(typeof n.token=="string"),this.R=n.token,new sc(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}function ac(i){return i.name==="IndexedDbTransactionError"}class tn{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new tn("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof tn&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var xr,S;(S=xr||(xr={}))[S.OK=0]="OK",S[S.CANCELLED=1]="CANCELLED",S[S.UNKNOWN=2]="UNKNOWN",S[S.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",S[S.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",S[S.NOT_FOUND=5]="NOT_FOUND",S[S.ALREADY_EXISTS=6]="ALREADY_EXISTS",S[S.PERMISSION_DENIED=7]="PERMISSION_DENIED",S[S.UNAUTHENTICATED=16]="UNAUTHENTICATED",S[S.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",S[S.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",S[S.ABORTED=10]="ABORTED",S[S.OUT_OF_RANGE=11]="OUT_OF_RANGE",S[S.UNIMPLEMENTED=12]="UNIMPLEMENTED",S[S.INTERNAL=13]="INTERNAL",S[S.UNAVAILABLE=14]="UNAVAILABLE",S[S.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Ns([4294967295,4294967295],0);function Fn(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hc{constructor(e,n,s=1e3,o=1.5,h=6e4){this.li=e,this.timerId=n,this.Qo=s,this.Ko=o,this.$o=h,this.Uo=0,this.Wo=null,this.Go=Date.now(),this.reset()}reset(){this.Uo=0}zo(){this.Uo=this.$o}jo(e){this.cancel();const n=Math.floor(this.Uo+this.Ho()),s=Math.max(0,Date.now()-this.Go),o=Math.max(0,n-s);o>0&&te("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.Uo} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.Wo=this.li.enqueueAfterDelay(this.timerId,o,()=>(this.Go=Date.now(),e())),this.Uo*=this.Ko,this.Uo<this.Qo&&(this.Uo=this.Qo),this.Uo>this.$o&&(this.Uo=this.$o)}Jo(){this.Wo!==null&&(this.Wo.skipDelay(),this.Wo=null)}cancel(){this.Wo!==null&&(this.Wo.cancel(),this.Wo=null)}Ho(){return(Math.random()-.5)*this.Uo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ui{constructor(e,n,s,o,h){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=o,this.removalCallback=h,this.deferred=new mt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(c=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,s,o,h){const c=Date.now()+s,_=new ui(e,n,c,o,h);return _.start(s),_}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new X(J.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}var Fr,jr;(jr=Fr||(Fr={})).na="default",jr.Cache="cache";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uc(i){const e={};return i.timeoutSeconds!==void 0&&(e.timeoutSeconds=i.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Br=new Map;function cc(i,e,n,s){if(e===!0&&s===!0)throw new X(J.INVALID_ARGUMENT,`${i} and ${n} cannot be used together.`)}function lc(i){if(i===void 0)return"undefined";if(i===null)return"null";if(typeof i=="string")return i.length>20&&(i=`${i.substring(0,20)}...`),JSON.stringify(i);if(typeof i=="number"||typeof i=="boolean")return""+i;if(typeof i=="object"){if(i instanceof Array)return"an array";{const e=function(s){return s.constructor?s.constructor.name:null}(i);return e?`a custom ${e} object`:"an object"}}return typeof i=="function"?"a function":hi()}function dc(i,e){if("_delegate"in i&&(i=i._delegate),!(i instanceof e)){if(e.name===i.constructor.name)throw new X(J.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=lc(i);throw new X(J.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vr{constructor(e){var n,s;if(e.host===void 0){if(e.ssl!==void 0)throw new X(J.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new X(J.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}cc("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=uc((s=e.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),function(h){if(h.timeoutSeconds!==void 0){if(isNaN(h.timeoutSeconds))throw new X(J.INVALID_ARGUMENT,`invalid long polling timeout: ${h.timeoutSeconds} (must not be NaN)`);if(h.timeoutSeconds<5)throw new X(J.INVALID_ARGUMENT,`invalid long polling timeout: ${h.timeoutSeconds} (minimum allowed value is 5)`);if(h.timeoutSeconds>30)throw new X(J.INVALID_ARGUMENT,`invalid long polling timeout: ${h.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(s,o){return s.timeoutSeconds===o.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Us{constructor(e,n,s,o){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Vr({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new X(J.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new X(J.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Vr(e),e.credentials!==void 0&&(this._authCredentials=function(s){if(!s)return new ec;switch(s.type){case"firstParty":return new rc(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new X(J.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const s=Br.get(n);s&&(te("ComponentProvider","Removing Datastore"),Br.delete(n),s.terminate())}(this),Promise.resolve()}}function fc(i,e,n,s={}){var o;const h=(i=dc(i,Us))._getSettings(),c=`${e}:${n}`;if(h.host!=="firestore.googleapis.com"&&h.host!==c&&Zu("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),i._setSettings(Object.assign(Object.assign({},h),{host:c,ssl:!1})),s.mockUserToken){let _,w;if(typeof s.mockUserToken=="string")_=s.mockUserToken,w=G.MOCK_USER;else{_=Do(s.mockUserToken,(o=i._app)===null||o===void 0?void 0:o.options.projectId);const E=s.mockUserToken.sub||s.mockUserToken.user_id;if(!E)throw new X(J.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");w=new G(E)}i._authCredentials=new tc(new Ms(_,w))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hr{constructor(e=Promise.resolve()){this.Iu=[],this.Eu=!1,this.du=[],this.Au=null,this.Ru=!1,this.Vu=!1,this.mu=[],this.r_=new hc(this,"async_queue_retry"),this.fu=()=>{const s=Fn();s&&te("AsyncQueue","Visibility state changed to "+s.visibilityState),this.r_.Jo()},this.gu=e;const n=Fn();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.fu)}get isShuttingDown(){return this.Eu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.pu(),this.yu(e)}enterRestrictedMode(e){if(!this.Eu){this.Eu=!0,this.Vu=e||!1;const n=Fn();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.fu)}}enqueue(e){if(this.pu(),this.Eu)return new Promise(()=>{});const n=new mt;return this.yu(()=>this.Eu&&this.Vu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Iu.push(e),this.wu()))}async wu(){if(this.Iu.length!==0){try{await this.Iu[0](),this.Iu.shift(),this.r_.reset()}catch(e){if(!ac(e))throw e;te("AsyncQueue","Operation failed with retryable error: "+e)}this.Iu.length>0&&this.r_.jo(()=>this.wu())}}yu(e){const n=this.gu.then(()=>(this.Ru=!0,e().catch(s=>{this.Au=s,this.Ru=!1;const o=function(c){let _=c.message||"";return c.stack&&(_=c.stack.includes(c.message)?c.stack:c.message+`
`+c.stack),_}(s);throw Ls("INTERNAL UNHANDLED ERROR: ",o),s}).then(s=>(this.Ru=!1,s))));return this.gu=n,n}enqueueAfterDelay(e,n,s){this.pu(),this.mu.indexOf(e)>-1&&(n=0);const o=ui.createAndSchedule(this,e,n,s,h=>this.Su(h));return this.du.push(o),o}pu(){this.Au&&hi()}verifyOperationInProgress(){}async bu(){let e;do e=this.gu,await e;while(e!==this.gu)}Du(e){for(const n of this.du)if(n.timerId===e)return!0;return!1}vu(e){return this.bu().then(()=>{this.du.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.du)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.bu()})}Cu(e){this.mu.push(e)}Su(e){const n=this.du.indexOf(e);this.du.splice(n,1)}}class pc extends Us{constructor(e,n,s,o){super(e,n,s,o),this.type="firestore",this._queue=new Hr,this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Hr(e),this._firestoreClient=void 0,await e}}}function gc(i,e){const n=typeof i=="object"?i:Qr(),s=typeof i=="string"?i:"(default)",o=Xn(n,"firestore").getImmediate({identifier:s});if(!o._initialized){const h=Po("firestore");h&&fc(o,...h)}return o}(function(e,n=!0){(function(o){At=o})(Je),We(new Le("firestore",(s,{instanceIdentifier:o,options:h})=>{const c=s.getProvider("app").getImmediate(),_=new pc(new nc(s.getProvider("auth-internal")),new oc(s.getProvider("app-check-internal")),function(E,b){if(!Object.prototype.hasOwnProperty.apply(E.options,["projectId"]))throw new X(J.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new tn(E.options.projectId,b)}(c,o),c);return h=Object.assign({useFetchStreams:n},h),_._setSettings(h),_},"PUBLIC").setMultipleInstances(!0)),Re(Ur,"4.7.5",e),Re(Ur,"4.7.5","esm2017")})();const mc={apiKey:"",authDomain:"",projectId:"",storageBucket:"",messagingSenderId:"",appId:""},xs=Yr(mc);gc(xs);const yc=Yu(xs);document.getElementById("loginForm").addEventListener("submit",async i=>{i.preventDefault();const e=document.getElementById("username").value,n=document.getElementById("password").value,s=`${e}@gmail.com`,o=i.target.querySelector('button[type="submit"]');o.disabled=!0;try{const c=(await Eo(yc,s,n)).user;localStorage.setItem("userName",e),window.location.href="html/inicio.html"}catch(h){console.error("Error al iniciar sesión:",h);let c="Error al iniciar sesión. Intente nuevamente.";switch(h.code){case"auth/user-not-found":c="Usuario no encontrado.";break;case"auth/wrong-password":c="Contraseña incorrecta.";break;case"auth/invalid-email":c="Formato de email inválido.";break;case"auth/user-disabled":c="Usuario deshabilitado.";break;case"auth/too-many-requests":c="Demasiados intentos fallidos. Intente más tarde.";break}alert(c)}finally{o.disabled=!1}});const _c=()=>{document.getElementById("loginForm").reset()};window.addEventListener("load",_c);window.addEventListener("offline",()=>{alert("Se perdió la conexión a internet. Verifique su conexión e intente nuevamente.")});
