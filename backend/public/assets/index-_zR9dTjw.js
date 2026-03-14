function qb(a,r){for(var i=0;i<r.length;i++){const s=r[i];if(typeof s!="string"&&!Array.isArray(s)){for(const c in s)if(c!=="default"&&!(c in a)){const f=Object.getOwnPropertyDescriptor(s,c);f&&Object.defineProperty(a,c,f.get?f:{enumerable:!0,get:()=>s[c]})}}}return Object.freeze(Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}))}(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))s(c);new MutationObserver(c=>{for(const f of c)if(f.type==="childList")for(const d of f.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function i(c){const f={};return c.integrity&&(f.integrity=c.integrity),c.referrerPolicy&&(f.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?f.credentials="include":c.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function s(c){if(c.ep)return;c.ep=!0;const f=i(c);fetch(c.href,f)}})();function Yb(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}var Dc={exports:{}},oi={};var fp;function Gb(){if(fp)return oi;fp=1;var a=Symbol.for("react.transitional.element"),r=Symbol.for("react.fragment");function i(s,c,f){var d=null;if(f!==void 0&&(d=""+f),c.key!==void 0&&(d=""+c.key),"key"in c){f={};for(var g in c)g!=="key"&&(f[g]=c[g])}else f=c;return c=f.ref,{$$typeof:a,type:s,key:d,ref:c!==void 0?c:null,props:f}}return oi.Fragment=r,oi.jsx=i,oi.jsxs=i,oi}var dp;function Xb(){return dp||(dp=1,Dc.exports=Gb()),Dc.exports}var h=Xb(),kc={exports:{}},Re={};var hp;function Vb(){if(hp)return Re;hp=1;var a=Symbol.for("react.transitional.element"),r=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),f=Symbol.for("react.consumer"),d=Symbol.for("react.context"),g=Symbol.for("react.forward_ref"),b=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),y=Symbol.for("react.activity"),j=Symbol.iterator;function z(T){return T===null||typeof T!="object"?null:(T=j&&T[j]||T["@@iterator"],typeof T=="function"?T:null)}var w={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},S=Object.assign,R={};function G(T,Y,W){this.props=T,this.context=Y,this.refs=R,this.updater=W||w}G.prototype.isReactComponent={},G.prototype.setState=function(T,Y){if(typeof T!="object"&&typeof T!="function"&&T!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,T,Y,"setState")},G.prototype.forceUpdate=function(T){this.updater.enqueueForceUpdate(this,T,"forceUpdate")};function X(){}X.prototype=G.prototype;function K(T,Y,W){this.props=T,this.context=Y,this.refs=R,this.updater=W||w}var oe=K.prototype=new X;oe.constructor=K,S(oe,G.prototype),oe.isPureReactComponent=!0;var J=Array.isArray;function ue(){}var C={H:null,A:null,T:null,S:null},le=Object.prototype.hasOwnProperty;function Q(T,Y,W){var ne=W.ref;return{$$typeof:a,type:T,key:Y,ref:ne!==void 0?ne:null,props:W}}function Oe(T,Y){return Q(T.type,Y,T.props)}function je(T){return typeof T=="object"&&T!==null&&T.$$typeof===a}function ee(T){var Y={"=":"=0",":":"=2"};return"$"+T.replace(/[=:]/g,function(W){return Y[W]})}var xe=/\/+/g;function be(T,Y){return typeof T=="object"&&T!==null&&T.key!=null?ee(""+T.key):Y.toString(36)}function me(T){switch(T.status){case"fulfilled":return T.value;case"rejected":throw T.reason;default:switch(typeof T.status=="string"?T.then(ue,ue):(T.status="pending",T.then(function(Y){T.status==="pending"&&(T.status="fulfilled",T.value=Y)},function(Y){T.status==="pending"&&(T.status="rejected",T.reason=Y)})),T.status){case"fulfilled":return T.value;case"rejected":throw T.reason}}throw T}function D(T,Y,W,ne,de){var Ne=typeof T;(Ne==="undefined"||Ne==="boolean")&&(T=null);var Ue=!1;if(T===null)Ue=!0;else switch(Ne){case"bigint":case"string":case"number":Ue=!0;break;case"object":switch(T.$$typeof){case a:case r:Ue=!0;break;case x:return Ue=T._init,D(Ue(T._payload),Y,W,ne,de)}}if(Ue)return de=de(T),Ue=ne===""?"."+be(T,0):ne,J(de)?(W="",Ue!=null&&(W=Ue.replace(xe,"$&/")+"/"),D(de,Y,W,"",function(Va){return Va})):de!=null&&(je(de)&&(de=Oe(de,W+(de.key==null||T&&T.key===de.key?"":(""+de.key).replace(xe,"$&/")+"/")+Ue)),Y.push(de)),1;Ue=0;var ft=ne===""?".":ne+":";if(J(T))for(var at=0;at<T.length;at++)ne=T[at],Ne=ft+be(ne,at),Ue+=D(ne,Y,W,Ne,de);else if(at=z(T),typeof at=="function")for(T=at.call(T),at=0;!(ne=T.next()).done;)ne=ne.value,Ne=ft+be(ne,at++),Ue+=D(ne,Y,W,Ne,de);else if(Ne==="object"){if(typeof T.then=="function")return D(me(T),Y,W,ne,de);throw Y=String(T),Error("Objects are not valid as a React child (found: "+(Y==="[object Object]"?"object with keys {"+Object.keys(T).join(", ")+"}":Y)+"). If you meant to render a collection of children, use an array instead.")}return Ue}function $(T,Y,W){if(T==null)return T;var ne=[],de=0;return D(T,ne,"","",function(Ne){return Y.call(W,Ne,de++)}),ne}function I(T){if(T._status===-1){var Y=T._result;Y=Y(),Y.then(function(W){(T._status===0||T._status===-1)&&(T._status=1,T._result=W)},function(W){(T._status===0||T._status===-1)&&(T._status=2,T._result=W)}),T._status===-1&&(T._status=0,T._result=Y)}if(T._status===1)return T._result.default;throw T._result}var Se=typeof reportError=="function"?reportError:function(T){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Y=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof T=="object"&&T!==null&&typeof T.message=="string"?String(T.message):String(T),error:T});if(!window.dispatchEvent(Y))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",T);return}console.error(T)},Te={map:$,forEach:function(T,Y,W){$(T,function(){Y.apply(this,arguments)},W)},count:function(T){var Y=0;return $(T,function(){Y++}),Y},toArray:function(T){return $(T,function(Y){return Y})||[]},only:function(T){if(!je(T))throw Error("React.Children.only expected to receive a single React element child.");return T}};return Re.Activity=y,Re.Children=Te,Re.Component=G,Re.Fragment=i,Re.Profiler=c,Re.PureComponent=K,Re.StrictMode=s,Re.Suspense=b,Re.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=C,Re.__COMPILER_RUNTIME={__proto__:null,c:function(T){return C.H.useMemoCache(T)}},Re.cache=function(T){return function(){return T.apply(null,arguments)}},Re.cacheSignal=function(){return null},Re.cloneElement=function(T,Y,W){if(T==null)throw Error("The argument must be a React element, but you passed "+T+".");var ne=S({},T.props),de=T.key;if(Y!=null)for(Ne in Y.key!==void 0&&(de=""+Y.key),Y)!le.call(Y,Ne)||Ne==="key"||Ne==="__self"||Ne==="__source"||Ne==="ref"&&Y.ref===void 0||(ne[Ne]=Y[Ne]);var Ne=arguments.length-2;if(Ne===1)ne.children=W;else if(1<Ne){for(var Ue=Array(Ne),ft=0;ft<Ne;ft++)Ue[ft]=arguments[ft+2];ne.children=Ue}return Q(T.type,de,ne)},Re.createContext=function(T){return T={$$typeof:d,_currentValue:T,_currentValue2:T,_threadCount:0,Provider:null,Consumer:null},T.Provider=T,T.Consumer={$$typeof:f,_context:T},T},Re.createElement=function(T,Y,W){var ne,de={},Ne=null;if(Y!=null)for(ne in Y.key!==void 0&&(Ne=""+Y.key),Y)le.call(Y,ne)&&ne!=="key"&&ne!=="__self"&&ne!=="__source"&&(de[ne]=Y[ne]);var Ue=arguments.length-2;if(Ue===1)de.children=W;else if(1<Ue){for(var ft=Array(Ue),at=0;at<Ue;at++)ft[at]=arguments[at+2];de.children=ft}if(T&&T.defaultProps)for(ne in Ue=T.defaultProps,Ue)de[ne]===void 0&&(de[ne]=Ue[ne]);return Q(T,Ne,de)},Re.createRef=function(){return{current:null}},Re.forwardRef=function(T){return{$$typeof:g,render:T}},Re.isValidElement=je,Re.lazy=function(T){return{$$typeof:x,_payload:{_status:-1,_result:T},_init:I}},Re.memo=function(T,Y){return{$$typeof:m,type:T,compare:Y===void 0?null:Y}},Re.startTransition=function(T){var Y=C.T,W={};C.T=W;try{var ne=T(),de=C.S;de!==null&&de(W,ne),typeof ne=="object"&&ne!==null&&typeof ne.then=="function"&&ne.then(ue,Se)}catch(Ne){Se(Ne)}finally{Y!==null&&W.types!==null&&(Y.types=W.types),C.T=Y}},Re.unstable_useCacheRefresh=function(){return C.H.useCacheRefresh()},Re.use=function(T){return C.H.use(T)},Re.useActionState=function(T,Y,W){return C.H.useActionState(T,Y,W)},Re.useCallback=function(T,Y){return C.H.useCallback(T,Y)},Re.useContext=function(T){return C.H.useContext(T)},Re.useDebugValue=function(){},Re.useDeferredValue=function(T,Y){return C.H.useDeferredValue(T,Y)},Re.useEffect=function(T,Y){return C.H.useEffect(T,Y)},Re.useEffectEvent=function(T){return C.H.useEffectEvent(T)},Re.useId=function(){return C.H.useId()},Re.useImperativeHandle=function(T,Y,W){return C.H.useImperativeHandle(T,Y,W)},Re.useInsertionEffect=function(T,Y){return C.H.useInsertionEffect(T,Y)},Re.useLayoutEffect=function(T,Y){return C.H.useLayoutEffect(T,Y)},Re.useMemo=function(T,Y){return C.H.useMemo(T,Y)},Re.useOptimistic=function(T,Y){return C.H.useOptimistic(T,Y)},Re.useReducer=function(T,Y,W){return C.H.useReducer(T,Y,W)},Re.useRef=function(T){return C.H.useRef(T)},Re.useState=function(T){return C.H.useState(T)},Re.useSyncExternalStore=function(T,Y,W){return C.H.useSyncExternalStore(T,Y,W)},Re.useTransition=function(){return C.H.useTransition()},Re.version="19.2.4",Re}var pp;function of(){return pp||(pp=1,kc.exports=Vb()),kc.exports}var N=of();const Ht=Yb(N),Zb=qb({__proto__:null,default:Ht},[N]);var Uc={exports:{}},si={},Hc={exports:{}},Lc={};var mp;function Pb(){return mp||(mp=1,(function(a){function r(D,$){var I=D.length;D.push($);e:for(;0<I;){var Se=I-1>>>1,Te=D[Se];if(0<c(Te,$))D[Se]=$,D[I]=Te,I=Se;else break e}}function i(D){return D.length===0?null:D[0]}function s(D){if(D.length===0)return null;var $=D[0],I=D.pop();if(I!==$){D[0]=I;e:for(var Se=0,Te=D.length,T=Te>>>1;Se<T;){var Y=2*(Se+1)-1,W=D[Y],ne=Y+1,de=D[ne];if(0>c(W,I))ne<Te&&0>c(de,W)?(D[Se]=de,D[ne]=I,Se=ne):(D[Se]=W,D[Y]=I,Se=Y);else if(ne<Te&&0>c(de,I))D[Se]=de,D[ne]=I,Se=ne;else break e}}return $}function c(D,$){var I=D.sortIndex-$.sortIndex;return I!==0?I:D.id-$.id}if(a.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var f=performance;a.unstable_now=function(){return f.now()}}else{var d=Date,g=d.now();a.unstable_now=function(){return d.now()-g}}var b=[],m=[],x=1,y=null,j=3,z=!1,w=!1,S=!1,R=!1,G=typeof setTimeout=="function"?setTimeout:null,X=typeof clearTimeout=="function"?clearTimeout:null,K=typeof setImmediate<"u"?setImmediate:null;function oe(D){for(var $=i(m);$!==null;){if($.callback===null)s(m);else if($.startTime<=D)s(m),$.sortIndex=$.expirationTime,r(b,$);else break;$=i(m)}}function J(D){if(S=!1,oe(D),!w)if(i(b)!==null)w=!0,ue||(ue=!0,ee());else{var $=i(m);$!==null&&me(J,$.startTime-D)}}var ue=!1,C=-1,le=5,Q=-1;function Oe(){return R?!0:!(a.unstable_now()-Q<le)}function je(){if(R=!1,ue){var D=a.unstable_now();Q=D;var $=!0;try{e:{w=!1,S&&(S=!1,X(C),C=-1),z=!0;var I=j;try{t:{for(oe(D),y=i(b);y!==null&&!(y.expirationTime>D&&Oe());){var Se=y.callback;if(typeof Se=="function"){y.callback=null,j=y.priorityLevel;var Te=Se(y.expirationTime<=D);if(D=a.unstable_now(),typeof Te=="function"){y.callback=Te,oe(D),$=!0;break t}y===i(b)&&s(b),oe(D)}else s(b);y=i(b)}if(y!==null)$=!0;else{var T=i(m);T!==null&&me(J,T.startTime-D),$=!1}}break e}finally{y=null,j=I,z=!1}$=void 0}}finally{$?ee():ue=!1}}}var ee;if(typeof K=="function")ee=function(){K(je)};else if(typeof MessageChannel<"u"){var xe=new MessageChannel,be=xe.port2;xe.port1.onmessage=je,ee=function(){be.postMessage(null)}}else ee=function(){G(je,0)};function me(D,$){C=G(function(){D(a.unstable_now())},$)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(D){D.callback=null},a.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):le=0<D?Math.floor(1e3/D):5},a.unstable_getCurrentPriorityLevel=function(){return j},a.unstable_next=function(D){switch(j){case 1:case 2:case 3:var $=3;break;default:$=j}var I=j;j=$;try{return D()}finally{j=I}},a.unstable_requestPaint=function(){R=!0},a.unstable_runWithPriority=function(D,$){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var I=j;j=D;try{return $()}finally{j=I}},a.unstable_scheduleCallback=function(D,$,I){var Se=a.unstable_now();switch(typeof I=="object"&&I!==null?(I=I.delay,I=typeof I=="number"&&0<I?Se+I:Se):I=Se,D){case 1:var Te=-1;break;case 2:Te=250;break;case 5:Te=1073741823;break;case 4:Te=1e4;break;default:Te=5e3}return Te=I+Te,D={id:x++,callback:$,priorityLevel:D,startTime:I,expirationTime:Te,sortIndex:-1},I>Se?(D.sortIndex=I,r(m,D),i(b)===null&&D===i(m)&&(S?(X(C),C=-1):S=!0,me(J,I-Se))):(D.sortIndex=Te,r(b,D),w||z||(w=!0,ue||(ue=!0,ee()))),D},a.unstable_shouldYield=Oe,a.unstable_wrapCallback=function(D){var $=j;return function(){var I=j;j=$;try{return D.apply(this,arguments)}finally{j=I}}}})(Lc)),Lc}var gp;function Qb(){return gp||(gp=1,Hc.exports=Pb()),Hc.exports}var Bc={exports:{}},Mt={};var bp;function Kb(){if(bp)return Mt;bp=1;var a=of();function r(b){var m="https://react.dev/errors/"+b;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var x=2;x<arguments.length;x++)m+="&args[]="+encodeURIComponent(arguments[x])}return"Minified React error #"+b+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(r(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},c=Symbol.for("react.portal");function f(b,m,x){var y=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:c,key:y==null?null:""+y,children:b,containerInfo:m,implementation:x}}var d=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function g(b,m){if(b==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return Mt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Mt.createPortal=function(b,m){var x=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(r(299));return f(b,m,null,x)},Mt.flushSync=function(b){var m=d.T,x=s.p;try{if(d.T=null,s.p=2,b)return b()}finally{d.T=m,s.p=x,s.d.f()}},Mt.preconnect=function(b,m){typeof b=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,s.d.C(b,m))},Mt.prefetchDNS=function(b){typeof b=="string"&&s.d.D(b)},Mt.preinit=function(b,m){if(typeof b=="string"&&m&&typeof m.as=="string"){var x=m.as,y=g(x,m.crossOrigin),j=typeof m.integrity=="string"?m.integrity:void 0,z=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;x==="style"?s.d.S(b,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:y,integrity:j,fetchPriority:z}):x==="script"&&s.d.X(b,{crossOrigin:y,integrity:j,fetchPriority:z,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},Mt.preinitModule=function(b,m){if(typeof b=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var x=g(m.as,m.crossOrigin);s.d.M(b,{crossOrigin:x,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&s.d.M(b)},Mt.preload=function(b,m){if(typeof b=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var x=m.as,y=g(x,m.crossOrigin);s.d.L(b,x,{crossOrigin:y,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},Mt.preloadModule=function(b,m){if(typeof b=="string")if(m){var x=g(m.as,m.crossOrigin);s.d.m(b,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:x,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else s.d.m(b)},Mt.requestFormReset=function(b){s.d.r(b)},Mt.unstable_batchedUpdates=function(b,m){return b(m)},Mt.useFormState=function(b,m,x){return d.H.useFormState(b,m,x)},Mt.useFormStatus=function(){return d.H.useHostTransitionStatus()},Mt.version="19.2.4",Mt}var vp;function xm(){if(vp)return Bc.exports;vp=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(r){console.error(r)}}return a(),Bc.exports=Kb(),Bc.exports}var yp;function Jb(){if(yp)return si;yp=1;var a=Qb(),r=of(),i=xm();function s(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function f(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function d(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function g(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function b(e){if(f(e)!==e)throw Error(s(188))}function m(e){var t=e.alternate;if(!t){if(t=f(e),t===null)throw Error(s(188));return t!==e?null:e}for(var n=e,l=t;;){var o=n.return;if(o===null)break;var u=o.alternate;if(u===null){if(l=o.return,l!==null){n=l;continue}break}if(o.child===u.child){for(u=o.child;u;){if(u===n)return b(o),e;if(u===l)return b(o),t;u=u.sibling}throw Error(s(188))}if(n.return!==l.return)n=o,l=u;else{for(var p=!1,v=o.child;v;){if(v===n){p=!0,n=o,l=u;break}if(v===l){p=!0,l=o,n=u;break}v=v.sibling}if(!p){for(v=u.child;v;){if(v===n){p=!0,n=u,l=o;break}if(v===l){p=!0,l=u,n=o;break}v=v.sibling}if(!p)throw Error(s(189))}}if(n.alternate!==l)throw Error(s(190))}if(n.tag!==3)throw Error(s(188));return n.stateNode.current===n?e:t}function x(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=x(e),t!==null)return t;e=e.sibling}return null}var y=Object.assign,j=Symbol.for("react.element"),z=Symbol.for("react.transitional.element"),w=Symbol.for("react.portal"),S=Symbol.for("react.fragment"),R=Symbol.for("react.strict_mode"),G=Symbol.for("react.profiler"),X=Symbol.for("react.consumer"),K=Symbol.for("react.context"),oe=Symbol.for("react.forward_ref"),J=Symbol.for("react.suspense"),ue=Symbol.for("react.suspense_list"),C=Symbol.for("react.memo"),le=Symbol.for("react.lazy"),Q=Symbol.for("react.activity"),Oe=Symbol.for("react.memo_cache_sentinel"),je=Symbol.iterator;function ee(e){return e===null||typeof e!="object"?null:(e=je&&e[je]||e["@@iterator"],typeof e=="function"?e:null)}var xe=Symbol.for("react.client.reference");function be(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===xe?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case S:return"Fragment";case G:return"Profiler";case R:return"StrictMode";case J:return"Suspense";case ue:return"SuspenseList";case Q:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case w:return"Portal";case K:return e.displayName||"Context";case X:return(e._context.displayName||"Context")+".Consumer";case oe:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case C:return t=e.displayName||null,t!==null?t:be(e.type)||"Memo";case le:t=e._payload,e=e._init;try{return be(e(t))}catch{}}return null}var me=Array.isArray,D=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,$=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,I={pending:!1,data:null,method:null,action:null},Se=[],Te=-1;function T(e){return{current:e}}function Y(e){0>Te||(e.current=Se[Te],Se[Te]=null,Te--)}function W(e,t){Te++,Se[Te]=e.current,e.current=t}var ne=T(null),de=T(null),Ne=T(null),Ue=T(null);function ft(e,t){switch(W(Ne,t),W(de,e),W(ne,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?D0(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=D0(t),e=k0(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}Y(ne),W(ne,e)}function at(){Y(ne),Y(de),Y(Ne)}function Va(e){e.memoizedState!==null&&W(Ue,e);var t=ne.current,n=k0(t,e.type);t!==n&&(W(de,e),W(ne,n))}function El(e){de.current===e&&(Y(ne),Y(de)),Ue.current===e&&(Y(Ue),ai._currentValue=I)}var bt,Vn;function kn(e){if(bt===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);bt=t&&t[1]||"",Vn=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+bt+e+Vn}var hr=!1;function Sn(e,t){if(!e||hr)return"";hr=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(t){var P=function(){throw Error()};if(Object.defineProperty(P.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(P,[])}catch(q){var H=q}Reflect.construct(e,[],P)}else{try{P.call()}catch(q){H=q}e.call(P.prototype)}}else{try{throw Error()}catch(q){H=q}(P=e())&&typeof P.catch=="function"&&P.catch(function(){})}}catch(q){if(q&&H&&typeof q.stack=="string")return[q.stack,H.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var o=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");o&&o.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var u=l.DetermineComponentFrameRoot(),p=u[0],v=u[1];if(p&&v){var O=p.split(`
`),U=v.split(`
`);for(o=l=0;l<O.length&&!O[l].includes("DetermineComponentFrameRoot");)l++;for(;o<U.length&&!U[o].includes("DetermineComponentFrameRoot");)o++;if(l===O.length||o===U.length)for(l=O.length-1,o=U.length-1;1<=l&&0<=o&&O[l]!==U[o];)o--;for(;1<=l&&0<=o;l--,o--)if(O[l]!==U[o]){if(l!==1||o!==1)do if(l--,o--,0>o||O[l]!==U[o]){var V=`
`+O[l].replace(" at new "," at ");return e.displayName&&V.includes("<anonymous>")&&(V=V.replace("<anonymous>",e.displayName)),V}while(1<=l&&0<=o);break}}}finally{hr=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?kn(n):""}function Ss(e,t){switch(e.tag){case 26:case 27:case 5:return kn(e.type);case 16:return kn("Lazy");case 13:return e.child!==t&&t!==null?kn("Suspense Fallback"):kn("Suspense");case 19:return kn("SuspenseList");case 0:case 15:return Sn(e.type,!1);case 11:return Sn(e.type.render,!1);case 1:return Sn(e.type,!0);case 31:return kn("Activity");default:return""}}function Ci(e){try{var t="",n=null;do t+=Ss(e,n),n=e,e=e.return;while(e);return t}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var Ol=Object.prototype.hasOwnProperty,pr=a.unstable_scheduleCallback,mr=a.unstable_cancelCallback,Es=a.unstable_shouldYield,Os=a.unstable_requestPaint,dt=a.unstable_now,Za=a.unstable_getCurrentPriorityLevel,gr=a.unstable_ImmediatePriority,jl=a.unstable_UserBlockingPriority,Lt=a.unstable_NormalPriority,En=a.unstable_LowPriority,br=a.unstable_IdlePriority,js=a.log,vr=a.unstable_setDisableYieldValue,Pa=null,lt=null;function On(e){if(typeof js=="function"&&vr(e),lt&&typeof lt.setStrictMode=="function")try{lt.setStrictMode(Pa,e)}catch{}}var At=Math.clz32?Math.clz32:Ai,zi=Math.log,Ns=Math.LN2;function Ai(e){return e>>>=0,e===0?32:31-(zi(e)/Ns|0)|0}var Zn=256,Qa=262144,ha=4194304;function Pn(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Ka(e,t,n){var l=e.pendingLanes;if(l===0)return 0;var o=0,u=e.suspendedLanes,p=e.pingedLanes;e=e.warmLanes;var v=l&134217727;return v!==0?(l=v&~u,l!==0?o=Pn(l):(p&=v,p!==0?o=Pn(p):n||(n=v&~e,n!==0&&(o=Pn(n))))):(v=l&~u,v!==0?o=Pn(v):p!==0?o=Pn(p):n||(n=l&~e,n!==0&&(o=Pn(n)))),o===0?0:t!==0&&t!==o&&(t&u)===0&&(u=o&-o,n=t&-t,u>=n||u===32&&(n&4194048)!==0)?t:o}function Ja(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Mi(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Fa(){var e=ha;return ha<<=1,(ha&62914560)===0&&(ha=4194304),e}function pa(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function ma(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Ts(e,t,n,l,o,u){var p=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var v=e.entanglements,O=e.expirationTimes,U=e.hiddenUpdates;for(n=p&~n;0<n;){var V=31-At(n),P=1<<V;v[V]=0,O[V]=-1;var H=U[V];if(H!==null)for(U[V]=null,V=0;V<H.length;V++){var q=H[V];q!==null&&(q.lane&=-536870913)}n&=~P}l!==0&&Di(e,l,0),u!==0&&o===0&&e.tag!==0&&(e.suspendedLanes|=u&~(p&~t))}function Di(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var l=31-At(t);e.entangledLanes|=t,e.entanglements[l]=e.entanglements[l]|1073741824|n&261930}function E(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var l=31-At(n),o=1<<l;o&t|e[l]&t&&(e[l]|=t),n&=~o}}function M(e,t){var n=t&-t;return n=(n&42)!==0?1:L(n),(n&(e.suspendedLanes|t))!==0?0:n}function L(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function F(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function te(){var e=$.p;return e!==0?e:(e=window.event,e===void 0?32:lp(e.type))}function he(e,t){var n=$.p;try{return $.p=e,t()}finally{$.p=n}}var re=Math.random().toString(36).slice(2),ae="__reactFiber$"+re,ie="__reactProps$"+re,fe="__reactContainer$"+re,ye="__reactEvents$"+re,ge="__reactListeners$"+re,Ge="__reactHandles$"+re,He="__reactResources$"+re,rt="__reactMarker$"+re;function it(e){delete e[ae],delete e[ie],delete e[ye],delete e[ge],delete e[Ge]}function ot(e){var t=e[ae];if(t)return t;for(var n=e.parentNode;n;){if(t=n[fe]||n[ae]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=G0(e);e!==null;){if(n=e[ae])return n;e=G0(e)}return t}e=n,n=e.parentNode}return null}function Le(e){if(e=e[ae]||e[fe]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function jt(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(s(33))}function Bt(e){var t=e[He];return t||(t=e[He]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function et(e){e[rt]=!0}var jn=new Set,Ft={};function Nn(e,t){sn(e,t),sn(e+"Capture",t)}function sn(e,t){for(Ft[e]=t,e=0;e<t.length;e++)jn.add(t[e])}var Qn=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),$a={},Wa={};function Be(e){return Ol.call(Wa,e)?!0:Ol.call($a,e)?!1:Qn.test(e)?Wa[e]=!0:($a[e]=!0,!1)}function ht(e,t,n){if(Be(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var l=t.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function Tn(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function Tt(e,t,n,l){if(l===null)e.removeAttribute(n);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+l)}}function qe(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ia(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function ki(e,t,n){var l=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var o=l.get,u=l.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(p){n=""+p,u.call(this,p)}}),Object.defineProperty(e,t,{enumerable:l.enumerable}),{getValue:function(){return n},setValue:function(p){n=""+p},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function yr(e){if(!e._valueTracker){var t=Ia(e)?"checked":"value";e._valueTracker=ki(e,t,""+e[t])}}function Tf(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),l="";return e&&(l=Ia(e)?e.checked?"true":"false":e.value),e=l,e!==n?(t.setValue(e),!0):!1}function Ui(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var D1=/[\n"\\]/g;function un(e){return e.replace(D1,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Rs(e,t,n,l,o,u,p,v){e.name="",p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"?e.type=p:e.removeAttribute("type"),t!=null?p==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+qe(t)):e.value!==""+qe(t)&&(e.value=""+qe(t)):p!=="submit"&&p!=="reset"||e.removeAttribute("value"),t!=null?_s(e,p,qe(t)):n!=null?_s(e,p,qe(n)):l!=null&&e.removeAttribute("value"),o==null&&u!=null&&(e.defaultChecked=!!u),o!=null&&(e.checked=o&&typeof o!="function"&&typeof o!="symbol"),v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?e.name=""+qe(v):e.removeAttribute("name")}function Rf(e,t,n,l,o,u,p,v){if(u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(e.type=u),t!=null||n!=null){if(!(u!=="submit"&&u!=="reset"||t!=null)){yr(e);return}n=n!=null?""+qe(n):"",t=t!=null?""+qe(t):n,v||t===e.value||(e.value=t),e.defaultValue=t}l=l??o,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=v?e.checked:!!l,e.defaultChecked=!!l,p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"&&(e.name=p),yr(e)}function _s(e,t,n){t==="number"&&Ui(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function Nl(e,t,n,l){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&l&&(e[n].defaultSelected=!0)}else{for(n=""+qe(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,l&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function _f(e,t,n){if(t!=null&&(t=""+qe(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+qe(n):""}function Cf(e,t,n,l){if(t==null){if(l!=null){if(n!=null)throw Error(s(92));if(me(l)){if(1<l.length)throw Error(s(93));l=l[0]}n=l}n==null&&(n=""),t=n}n=qe(t),e.defaultValue=n,l=e.textContent,l===n&&l!==""&&l!==null&&(e.value=l),yr(e)}function Tl(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var k1=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function zf(e,t,n){var l=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?l?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":l?e.setProperty(t,n):typeof n!="number"||n===0||k1.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function Af(e,t,n){if(t!=null&&typeof t!="object")throw Error(s(62));if(e=e.style,n!=null){for(var l in n)!n.hasOwnProperty(l)||t!=null&&t.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var o in t)l=t[o],t.hasOwnProperty(o)&&n[o]!==l&&zf(e,o,l)}else for(var u in t)t.hasOwnProperty(u)&&zf(e,u,t[u])}function Cs(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var U1=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),H1=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Hi(e){return H1.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Kn(){}var zs=null;function As(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Rl=null,_l=null;function Mf(e){var t=Le(e);if(t&&(e=t.stateNode)){var n=e[ie]||null;e:switch(e=t.stateNode,t.type){case"input":if(Rs(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+un(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var l=n[t];if(l!==e&&l.form===e.form){var o=l[ie]||null;if(!o)throw Error(s(90));Rs(l,o.value,o.defaultValue,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name)}}for(t=0;t<n.length;t++)l=n[t],l.form===e.form&&Tf(l)}break e;case"textarea":_f(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&Nl(e,!!n.multiple,t,!1)}}}var Ms=!1;function Df(e,t,n){if(Ms)return e(t,n);Ms=!0;try{var l=e(t);return l}finally{if(Ms=!1,(Rl!==null||_l!==null)&&(jo(),Rl&&(t=Rl,e=_l,_l=Rl=null,Mf(t),e)))for(t=0;t<e.length;t++)Mf(e[t])}}function xr(e,t){var n=e.stateNode;if(n===null)return null;var l=n[ie]||null;if(l===null)return null;n=l[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(s(231,t,typeof n));return n}var Jn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ds=!1;if(Jn)try{var wr={};Object.defineProperty(wr,"passive",{get:function(){Ds=!0}}),window.addEventListener("test",wr,wr),window.removeEventListener("test",wr,wr)}catch{Ds=!1}var ga=null,ks=null,Li=null;function kf(){if(Li)return Li;var e,t=ks,n=t.length,l,o="value"in ga?ga.value:ga.textContent,u=o.length;for(e=0;e<n&&t[e]===o[e];e++);var p=n-e;for(l=1;l<=p&&t[n-l]===o[u-l];l++);return Li=o.slice(e,1<l?1-l:void 0)}function Bi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function qi(){return!0}function Uf(){return!1}function qt(e){function t(n,l,o,u,p){this._reactName=n,this._targetInst=o,this.type=l,this.nativeEvent=u,this.target=p,this.currentTarget=null;for(var v in e)e.hasOwnProperty(v)&&(n=e[v],this[v]=n?n(u):u[v]);return this.isDefaultPrevented=(u.defaultPrevented!=null?u.defaultPrevented:u.returnValue===!1)?qi:Uf,this.isPropagationStopped=Uf,this}return y(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=qi)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=qi)},persist:function(){},isPersistent:qi}),t}var el={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Yi=qt(el),Sr=y({},el,{view:0,detail:0}),L1=qt(Sr),Us,Hs,Er,Gi=y({},Sr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Bs,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Er&&(Er&&e.type==="mousemove"?(Us=e.screenX-Er.screenX,Hs=e.screenY-Er.screenY):Hs=Us=0,Er=e),Us)},movementY:function(e){return"movementY"in e?e.movementY:Hs}}),Hf=qt(Gi),B1=y({},Gi,{dataTransfer:0}),q1=qt(B1),Y1=y({},Sr,{relatedTarget:0}),Ls=qt(Y1),G1=y({},el,{animationName:0,elapsedTime:0,pseudoElement:0}),X1=qt(G1),V1=y({},el,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Z1=qt(V1),P1=y({},el,{data:0}),Lf=qt(P1),Q1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},K1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},J1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function F1(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=J1[e])?!!t[e]:!1}function Bs(){return F1}var $1=y({},Sr,{key:function(e){if(e.key){var t=Q1[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Bi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?K1[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Bs,charCode:function(e){return e.type==="keypress"?Bi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Bi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),W1=qt($1),I1=y({},Gi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Bf=qt(I1),eg=y({},Sr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Bs}),tg=qt(eg),ng=y({},el,{propertyName:0,elapsedTime:0,pseudoElement:0}),ag=qt(ng),lg=y({},Gi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),rg=qt(lg),ig=y({},el,{newState:0,oldState:0}),og=qt(ig),sg=[9,13,27,32],qs=Jn&&"CompositionEvent"in window,Or=null;Jn&&"documentMode"in document&&(Or=document.documentMode);var ug=Jn&&"TextEvent"in window&&!Or,qf=Jn&&(!qs||Or&&8<Or&&11>=Or),Yf=" ",Gf=!1;function Xf(e,t){switch(e){case"keyup":return sg.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Vf(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Cl=!1;function cg(e,t){switch(e){case"compositionend":return Vf(t);case"keypress":return t.which!==32?null:(Gf=!0,Yf);case"textInput":return e=t.data,e===Yf&&Gf?null:e;default:return null}}function fg(e,t){if(Cl)return e==="compositionend"||!qs&&Xf(e,t)?(e=kf(),Li=ks=ga=null,Cl=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return qf&&t.locale!=="ko"?null:t.data;default:return null}}var dg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Zf(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!dg[e.type]:t==="textarea"}function Pf(e,t,n,l){Rl?_l?_l.push(l):_l=[l]:Rl=l,t=Ao(t,"onChange"),0<t.length&&(n=new Yi("onChange","change",null,n,l),e.push({event:n,listeners:t}))}var jr=null,Nr=null;function hg(e){R0(e,0)}function Xi(e){var t=jt(e);if(Tf(t))return e}function Qf(e,t){if(e==="change")return t}var Kf=!1;if(Jn){var Ys;if(Jn){var Gs="oninput"in document;if(!Gs){var Jf=document.createElement("div");Jf.setAttribute("oninput","return;"),Gs=typeof Jf.oninput=="function"}Ys=Gs}else Ys=!1;Kf=Ys&&(!document.documentMode||9<document.documentMode)}function Ff(){jr&&(jr.detachEvent("onpropertychange",$f),Nr=jr=null)}function $f(e){if(e.propertyName==="value"&&Xi(Nr)){var t=[];Pf(t,Nr,e,As(e)),Df(hg,t)}}function pg(e,t,n){e==="focusin"?(Ff(),jr=t,Nr=n,jr.attachEvent("onpropertychange",$f)):e==="focusout"&&Ff()}function mg(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Xi(Nr)}function gg(e,t){if(e==="click")return Xi(t)}function bg(e,t){if(e==="input"||e==="change")return Xi(t)}function vg(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var $t=typeof Object.is=="function"?Object.is:vg;function Tr(e,t){if($t(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),l=Object.keys(t);if(n.length!==l.length)return!1;for(l=0;l<n.length;l++){var o=n[l];if(!Ol.call(t,o)||!$t(e[o],t[o]))return!1}return!0}function Wf(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function If(e,t){var n=Wf(e);e=0;for(var l;n;){if(n.nodeType===3){if(l=e+n.textContent.length,e<=t&&l>=t)return{node:n,offset:t-e};e=l}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Wf(n)}}function ed(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?ed(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function td(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Ui(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ui(e.document)}return t}function Xs(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var yg=Jn&&"documentMode"in document&&11>=document.documentMode,zl=null,Vs=null,Rr=null,Zs=!1;function nd(e,t,n){var l=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Zs||zl==null||zl!==Ui(l)||(l=zl,"selectionStart"in l&&Xs(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Rr&&Tr(Rr,l)||(Rr=l,l=Ao(Vs,"onSelect"),0<l.length&&(t=new Yi("onSelect","select",null,t,n),e.push({event:t,listeners:l}),t.target=zl)))}function tl(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Al={animationend:tl("Animation","AnimationEnd"),animationiteration:tl("Animation","AnimationIteration"),animationstart:tl("Animation","AnimationStart"),transitionrun:tl("Transition","TransitionRun"),transitionstart:tl("Transition","TransitionStart"),transitioncancel:tl("Transition","TransitionCancel"),transitionend:tl("Transition","TransitionEnd")},Ps={},ad={};Jn&&(ad=document.createElement("div").style,"AnimationEvent"in window||(delete Al.animationend.animation,delete Al.animationiteration.animation,delete Al.animationstart.animation),"TransitionEvent"in window||delete Al.transitionend.transition);function nl(e){if(Ps[e])return Ps[e];if(!Al[e])return e;var t=Al[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in ad)return Ps[e]=t[n];return e}var ld=nl("animationend"),rd=nl("animationiteration"),id=nl("animationstart"),xg=nl("transitionrun"),wg=nl("transitionstart"),Sg=nl("transitioncancel"),od=nl("transitionend"),sd=new Map,Qs="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Qs.push("scrollEnd");function Rn(e,t){sd.set(e,t),Nn(t,[e])}var Vi=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},cn=[],Ml=0,Ks=0;function Zi(){for(var e=Ml,t=Ks=Ml=0;t<e;){var n=cn[t];cn[t++]=null;var l=cn[t];cn[t++]=null;var o=cn[t];cn[t++]=null;var u=cn[t];if(cn[t++]=null,l!==null&&o!==null){var p=l.pending;p===null?o.next=o:(o.next=p.next,p.next=o),l.pending=o}u!==0&&ud(n,o,u)}}function Pi(e,t,n,l){cn[Ml++]=e,cn[Ml++]=t,cn[Ml++]=n,cn[Ml++]=l,Ks|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function Js(e,t,n,l){return Pi(e,t,n,l),Qi(e)}function al(e,t){return Pi(e,null,null,t),Qi(e)}function ud(e,t,n){e.lanes|=n;var l=e.alternate;l!==null&&(l.lanes|=n);for(var o=!1,u=e.return;u!==null;)u.childLanes|=n,l=u.alternate,l!==null&&(l.childLanes|=n),u.tag===22&&(e=u.stateNode,e===null||e._visibility&1||(o=!0)),e=u,u=u.return;return e.tag===3?(u=e.stateNode,o&&t!==null&&(o=31-At(n),e=u.hiddenUpdates,l=e[o],l===null?e[o]=[t]:l.push(t),t.lane=n|536870912),u):null}function Qi(e){if(50<Fr)throw Fr=0,lc=null,Error(s(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Dl={};function Eg(e,t,n,l){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Wt(e,t,n,l){return new Eg(e,t,n,l)}function Fs(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Fn(e,t){var n=e.alternate;return n===null?(n=Wt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function cd(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Ki(e,t,n,l,o,u){var p=0;if(l=e,typeof e=="function")Fs(e)&&(p=1);else if(typeof e=="string")p=Rb(e,n,ne.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case Q:return e=Wt(31,n,t,o),e.elementType=Q,e.lanes=u,e;case S:return ll(n.children,o,u,t);case R:p=8,o|=24;break;case G:return e=Wt(12,n,t,o|2),e.elementType=G,e.lanes=u,e;case J:return e=Wt(13,n,t,o),e.elementType=J,e.lanes=u,e;case ue:return e=Wt(19,n,t,o),e.elementType=ue,e.lanes=u,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case K:p=10;break e;case X:p=9;break e;case oe:p=11;break e;case C:p=14;break e;case le:p=16,l=null;break e}p=29,n=Error(s(130,e===null?"null":typeof e,"")),l=null}return t=Wt(p,n,t,o),t.elementType=e,t.type=l,t.lanes=u,t}function ll(e,t,n,l){return e=Wt(7,e,l,t),e.lanes=n,e}function $s(e,t,n){return e=Wt(6,e,null,t),e.lanes=n,e}function fd(e){var t=Wt(18,null,null,0);return t.stateNode=e,t}function Ws(e,t,n){return t=Wt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var dd=new WeakMap;function fn(e,t){if(typeof e=="object"&&e!==null){var n=dd.get(e);return n!==void 0?n:(t={value:e,source:t,stack:Ci(t)},dd.set(e,t),t)}return{value:e,source:t,stack:Ci(t)}}var kl=[],Ul=0,Ji=null,_r=0,dn=[],hn=0,ba=null,Un=1,Hn="";function $n(e,t){kl[Ul++]=_r,kl[Ul++]=Ji,Ji=e,_r=t}function hd(e,t,n){dn[hn++]=Un,dn[hn++]=Hn,dn[hn++]=ba,ba=e;var l=Un;e=Hn;var o=32-At(l)-1;l&=~(1<<o),n+=1;var u=32-At(t)+o;if(30<u){var p=o-o%5;u=(l&(1<<p)-1).toString(32),l>>=p,o-=p,Un=1<<32-At(t)+o|n<<o|l,Hn=u+e}else Un=1<<u|n<<o|l,Hn=e}function Is(e){e.return!==null&&($n(e,1),hd(e,1,0))}function eu(e){for(;e===Ji;)Ji=kl[--Ul],kl[Ul]=null,_r=kl[--Ul],kl[Ul]=null;for(;e===ba;)ba=dn[--hn],dn[hn]=null,Hn=dn[--hn],dn[hn]=null,Un=dn[--hn],dn[hn]=null}function pd(e,t){dn[hn++]=Un,dn[hn++]=Hn,dn[hn++]=ba,Un=t.id,Hn=t.overflow,ba=e}var Rt=null,We=null,Ye=!1,va=null,pn=!1,tu=Error(s(519));function ya(e){var t=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Cr(fn(t,e)),tu}function md(e){var t=e.stateNode,n=e.type,l=e.memoizedProps;switch(t[ae]=e,t[ie]=l,n){case"dialog":Me("cancel",t),Me("close",t);break;case"iframe":case"object":case"embed":Me("load",t);break;case"video":case"audio":for(n=0;n<Wr.length;n++)Me(Wr[n],t);break;case"source":Me("error",t);break;case"img":case"image":case"link":Me("error",t),Me("load",t);break;case"details":Me("toggle",t);break;case"input":Me("invalid",t),Rf(t,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":Me("invalid",t);break;case"textarea":Me("invalid",t),Cf(t,l.value,l.defaultValue,l.children)}n=l.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||l.suppressHydrationWarning===!0||A0(t.textContent,n)?(l.popover!=null&&(Me("beforetoggle",t),Me("toggle",t)),l.onScroll!=null&&Me("scroll",t),l.onScrollEnd!=null&&Me("scrollend",t),l.onClick!=null&&(t.onclick=Kn),t=!0):t=!1,t||ya(e,!0)}function gd(e){for(Rt=e.return;Rt;)switch(Rt.tag){case 5:case 31:case 13:pn=!1;return;case 27:case 3:pn=!0;return;default:Rt=Rt.return}}function Hl(e){if(e!==Rt)return!1;if(!Ye)return gd(e),Ye=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||yc(e.type,e.memoizedProps)),n=!n),n&&We&&ya(e),gd(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));We=Y0(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));We=Y0(e)}else t===27?(t=We,Ma(e.type)?(e=Oc,Oc=null,We=e):We=t):We=Rt?gn(e.stateNode.nextSibling):null;return!0}function rl(){We=Rt=null,Ye=!1}function nu(){var e=va;return e!==null&&(Vt===null?Vt=e:Vt.push.apply(Vt,e),va=null),e}function Cr(e){va===null?va=[e]:va.push(e)}var au=T(null),il=null,Wn=null;function xa(e,t,n){W(au,t._currentValue),t._currentValue=n}function In(e){e._currentValue=au.current,Y(au)}function lu(e,t,n){for(;e!==null;){var l=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,l!==null&&(l.childLanes|=t)):l!==null&&(l.childLanes&t)!==t&&(l.childLanes|=t),e===n)break;e=e.return}}function ru(e,t,n,l){var o=e.child;for(o!==null&&(o.return=e);o!==null;){var u=o.dependencies;if(u!==null){var p=o.child;u=u.firstContext;e:for(;u!==null;){var v=u;u=o;for(var O=0;O<t.length;O++)if(v.context===t[O]){u.lanes|=n,v=u.alternate,v!==null&&(v.lanes|=n),lu(u.return,n,e),l||(p=null);break e}u=v.next}}else if(o.tag===18){if(p=o.return,p===null)throw Error(s(341));p.lanes|=n,u=p.alternate,u!==null&&(u.lanes|=n),lu(p,n,e),p=null}else p=o.child;if(p!==null)p.return=o;else for(p=o;p!==null;){if(p===e){p=null;break}if(o=p.sibling,o!==null){o.return=p.return,p=o;break}p=p.return}o=p}}function Ll(e,t,n,l){e=null;for(var o=t,u=!1;o!==null;){if(!u){if((o.flags&524288)!==0)u=!0;else if((o.flags&262144)!==0)break}if(o.tag===10){var p=o.alternate;if(p===null)throw Error(s(387));if(p=p.memoizedProps,p!==null){var v=o.type;$t(o.pendingProps.value,p.value)||(e!==null?e.push(v):e=[v])}}else if(o===Ue.current){if(p=o.alternate,p===null)throw Error(s(387));p.memoizedState.memoizedState!==o.memoizedState.memoizedState&&(e!==null?e.push(ai):e=[ai])}o=o.return}e!==null&&ru(t,e,n,l),t.flags|=262144}function Fi(e){for(e=e.firstContext;e!==null;){if(!$t(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ol(e){il=e,Wn=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function _t(e){return bd(il,e)}function $i(e,t){return il===null&&ol(e),bd(e,t)}function bd(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Wn===null){if(e===null)throw Error(s(308));Wn=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Wn=Wn.next=t;return n}var Og=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,l){e.push(l)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},jg=a.unstable_scheduleCallback,Ng=a.unstable_NormalPriority,vt={$$typeof:K,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function iu(){return{controller:new Og,data:new Map,refCount:0}}function zr(e){e.refCount--,e.refCount===0&&jg(Ng,function(){e.controller.abort()})}var Ar=null,ou=0,Bl=0,ql=null;function Tg(e,t){if(Ar===null){var n=Ar=[];ou=0,Bl=cc(),ql={status:"pending",value:void 0,then:function(l){n.push(l)}}}return ou++,t.then(vd,vd),t}function vd(){if(--ou===0&&Ar!==null){ql!==null&&(ql.status="fulfilled");var e=Ar;Ar=null,Bl=0,ql=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Rg(e,t){var n=[],l={status:"pending",value:null,reason:null,then:function(o){n.push(o)}};return e.then(function(){l.status="fulfilled",l.value=t;for(var o=0;o<n.length;o++)(0,n[o])(t)},function(o){for(l.status="rejected",l.reason=o,o=0;o<n.length;o++)(0,n[o])(void 0)}),l}var yd=D.S;D.S=function(e,t){n0=dt(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&Tg(e,t),yd!==null&&yd(e,t)};var sl=T(null);function su(){var e=sl.current;return e!==null?e:$e.pooledCache}function Wi(e,t){t===null?W(sl,sl.current):W(sl,t.pool)}function xd(){var e=su();return e===null?null:{parent:vt._currentValue,pool:e}}var Yl=Error(s(460)),uu=Error(s(474)),Ii=Error(s(542)),eo={then:function(){}};function wd(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Sd(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(Kn,Kn),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Od(e),e;default:if(typeof t.status=="string")t.then(Kn,Kn);else{if(e=$e,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=t,e.status="pending",e.then(function(l){if(t.status==="pending"){var o=t;o.status="fulfilled",o.value=l}},function(l){if(t.status==="pending"){var o=t;o.status="rejected",o.reason=l}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Od(e),e}throw cl=t,Yl}}function ul(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(cl=n,Yl):n}}var cl=null;function Ed(){if(cl===null)throw Error(s(459));var e=cl;return cl=null,e}function Od(e){if(e===Yl||e===Ii)throw Error(s(483))}var Gl=null,Mr=0;function to(e){var t=Mr;return Mr+=1,Gl===null&&(Gl=[]),Sd(Gl,e,t)}function Dr(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function no(e,t){throw t.$$typeof===j?Error(s(525)):(e=Object.prototype.toString.call(t),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function jd(e){function t(A,_){if(e){var k=A.deletions;k===null?(A.deletions=[_],A.flags|=16):k.push(_)}}function n(A,_){if(!e)return null;for(;_!==null;)t(A,_),_=_.sibling;return null}function l(A){for(var _=new Map;A!==null;)A.key!==null?_.set(A.key,A):_.set(A.index,A),A=A.sibling;return _}function o(A,_){return A=Fn(A,_),A.index=0,A.sibling=null,A}function u(A,_,k){return A.index=k,e?(k=A.alternate,k!==null?(k=k.index,k<_?(A.flags|=67108866,_):k):(A.flags|=67108866,_)):(A.flags|=1048576,_)}function p(A){return e&&A.alternate===null&&(A.flags|=67108866),A}function v(A,_,k,Z){return _===null||_.tag!==6?(_=$s(k,A.mode,Z),_.return=A,_):(_=o(_,k),_.return=A,_)}function O(A,_,k,Z){var ve=k.type;return ve===S?V(A,_,k.props.children,Z,k.key):_!==null&&(_.elementType===ve||typeof ve=="object"&&ve!==null&&ve.$$typeof===le&&ul(ve)===_.type)?(_=o(_,k.props),Dr(_,k),_.return=A,_):(_=Ki(k.type,k.key,k.props,null,A.mode,Z),Dr(_,k),_.return=A,_)}function U(A,_,k,Z){return _===null||_.tag!==4||_.stateNode.containerInfo!==k.containerInfo||_.stateNode.implementation!==k.implementation?(_=Ws(k,A.mode,Z),_.return=A,_):(_=o(_,k.children||[]),_.return=A,_)}function V(A,_,k,Z,ve){return _===null||_.tag!==7?(_=ll(k,A.mode,Z,ve),_.return=A,_):(_=o(_,k),_.return=A,_)}function P(A,_,k){if(typeof _=="string"&&_!==""||typeof _=="number"||typeof _=="bigint")return _=$s(""+_,A.mode,k),_.return=A,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case z:return k=Ki(_.type,_.key,_.props,null,A.mode,k),Dr(k,_),k.return=A,k;case w:return _=Ws(_,A.mode,k),_.return=A,_;case le:return _=ul(_),P(A,_,k)}if(me(_)||ee(_))return _=ll(_,A.mode,k,null),_.return=A,_;if(typeof _.then=="function")return P(A,to(_),k);if(_.$$typeof===K)return P(A,$i(A,_),k);no(A,_)}return null}function H(A,_,k,Z){var ve=_!==null?_.key:null;if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return ve!==null?null:v(A,_,""+k,Z);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case z:return k.key===ve?O(A,_,k,Z):null;case w:return k.key===ve?U(A,_,k,Z):null;case le:return k=ul(k),H(A,_,k,Z)}if(me(k)||ee(k))return ve!==null?null:V(A,_,k,Z,null);if(typeof k.then=="function")return H(A,_,to(k),Z);if(k.$$typeof===K)return H(A,_,$i(A,k),Z);no(A,k)}return null}function q(A,_,k,Z,ve){if(typeof Z=="string"&&Z!==""||typeof Z=="number"||typeof Z=="bigint")return A=A.get(k)||null,v(_,A,""+Z,ve);if(typeof Z=="object"&&Z!==null){switch(Z.$$typeof){case z:return A=A.get(Z.key===null?k:Z.key)||null,O(_,A,Z,ve);case w:return A=A.get(Z.key===null?k:Z.key)||null,U(_,A,Z,ve);case le:return Z=ul(Z),q(A,_,k,Z,ve)}if(me(Z)||ee(Z))return A=A.get(k)||null,V(_,A,Z,ve,null);if(typeof Z.then=="function")return q(A,_,k,to(Z),ve);if(Z.$$typeof===K)return q(A,_,k,$i(_,Z),ve);no(_,Z)}return null}function se(A,_,k,Z){for(var ve=null,Xe=null,ce=_,Ce=_=0,ke=null;ce!==null&&Ce<k.length;Ce++){ce.index>Ce?(ke=ce,ce=null):ke=ce.sibling;var Ve=H(A,ce,k[Ce],Z);if(Ve===null){ce===null&&(ce=ke);break}e&&ce&&Ve.alternate===null&&t(A,ce),_=u(Ve,_,Ce),Xe===null?ve=Ve:Xe.sibling=Ve,Xe=Ve,ce=ke}if(Ce===k.length)return n(A,ce),Ye&&$n(A,Ce),ve;if(ce===null){for(;Ce<k.length;Ce++)ce=P(A,k[Ce],Z),ce!==null&&(_=u(ce,_,Ce),Xe===null?ve=ce:Xe.sibling=ce,Xe=ce);return Ye&&$n(A,Ce),ve}for(ce=l(ce);Ce<k.length;Ce++)ke=q(ce,A,Ce,k[Ce],Z),ke!==null&&(e&&ke.alternate!==null&&ce.delete(ke.key===null?Ce:ke.key),_=u(ke,_,Ce),Xe===null?ve=ke:Xe.sibling=ke,Xe=ke);return e&&ce.forEach(function(La){return t(A,La)}),Ye&&$n(A,Ce),ve}function we(A,_,k,Z){if(k==null)throw Error(s(151));for(var ve=null,Xe=null,ce=_,Ce=_=0,ke=null,Ve=k.next();ce!==null&&!Ve.done;Ce++,Ve=k.next()){ce.index>Ce?(ke=ce,ce=null):ke=ce.sibling;var La=H(A,ce,Ve.value,Z);if(La===null){ce===null&&(ce=ke);break}e&&ce&&La.alternate===null&&t(A,ce),_=u(La,_,Ce),Xe===null?ve=La:Xe.sibling=La,Xe=La,ce=ke}if(Ve.done)return n(A,ce),Ye&&$n(A,Ce),ve;if(ce===null){for(;!Ve.done;Ce++,Ve=k.next())Ve=P(A,Ve.value,Z),Ve!==null&&(_=u(Ve,_,Ce),Xe===null?ve=Ve:Xe.sibling=Ve,Xe=Ve);return Ye&&$n(A,Ce),ve}for(ce=l(ce);!Ve.done;Ce++,Ve=k.next())Ve=q(ce,A,Ce,Ve.value,Z),Ve!==null&&(e&&Ve.alternate!==null&&ce.delete(Ve.key===null?Ce:Ve.key),_=u(Ve,_,Ce),Xe===null?ve=Ve:Xe.sibling=Ve,Xe=Ve);return e&&ce.forEach(function(Bb){return t(A,Bb)}),Ye&&$n(A,Ce),ve}function Fe(A,_,k,Z){if(typeof k=="object"&&k!==null&&k.type===S&&k.key===null&&(k=k.props.children),typeof k=="object"&&k!==null){switch(k.$$typeof){case z:e:{for(var ve=k.key;_!==null;){if(_.key===ve){if(ve=k.type,ve===S){if(_.tag===7){n(A,_.sibling),Z=o(_,k.props.children),Z.return=A,A=Z;break e}}else if(_.elementType===ve||typeof ve=="object"&&ve!==null&&ve.$$typeof===le&&ul(ve)===_.type){n(A,_.sibling),Z=o(_,k.props),Dr(Z,k),Z.return=A,A=Z;break e}n(A,_);break}else t(A,_);_=_.sibling}k.type===S?(Z=ll(k.props.children,A.mode,Z,k.key),Z.return=A,A=Z):(Z=Ki(k.type,k.key,k.props,null,A.mode,Z),Dr(Z,k),Z.return=A,A=Z)}return p(A);case w:e:{for(ve=k.key;_!==null;){if(_.key===ve)if(_.tag===4&&_.stateNode.containerInfo===k.containerInfo&&_.stateNode.implementation===k.implementation){n(A,_.sibling),Z=o(_,k.children||[]),Z.return=A,A=Z;break e}else{n(A,_);break}else t(A,_);_=_.sibling}Z=Ws(k,A.mode,Z),Z.return=A,A=Z}return p(A);case le:return k=ul(k),Fe(A,_,k,Z)}if(me(k))return se(A,_,k,Z);if(ee(k)){if(ve=ee(k),typeof ve!="function")throw Error(s(150));return k=ve.call(k),we(A,_,k,Z)}if(typeof k.then=="function")return Fe(A,_,to(k),Z);if(k.$$typeof===K)return Fe(A,_,$i(A,k),Z);no(A,k)}return typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint"?(k=""+k,_!==null&&_.tag===6?(n(A,_.sibling),Z=o(_,k),Z.return=A,A=Z):(n(A,_),Z=$s(k,A.mode,Z),Z.return=A,A=Z),p(A)):n(A,_)}return function(A,_,k,Z){try{Mr=0;var ve=Fe(A,_,k,Z);return Gl=null,ve}catch(ce){if(ce===Yl||ce===Ii)throw ce;var Xe=Wt(29,ce,null,A.mode);return Xe.lanes=Z,Xe.return=A,Xe}}}var fl=jd(!0),Nd=jd(!1),wa=!1;function cu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function fu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Sa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ea(e,t,n){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(Ze&2)!==0){var o=l.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),l.pending=t,t=Qi(e),ud(e,null,n),t}return Pi(e,l,t,n),Qi(e)}function kr(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var l=t.lanes;l&=e.pendingLanes,n|=l,t.lanes=n,E(e,n)}}function du(e,t){var n=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,n===l)){var o=null,u=null;if(n=n.firstBaseUpdate,n!==null){do{var p={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};u===null?o=u=p:u=u.next=p,n=n.next}while(n!==null);u===null?o=u=t:u=u.next=t}else o=u=t;n={baseState:l.baseState,firstBaseUpdate:o,lastBaseUpdate:u,shared:l.shared,callbacks:l.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var hu=!1;function Ur(){if(hu){var e=ql;if(e!==null)throw e}}function Hr(e,t,n,l){hu=!1;var o=e.updateQueue;wa=!1;var u=o.firstBaseUpdate,p=o.lastBaseUpdate,v=o.shared.pending;if(v!==null){o.shared.pending=null;var O=v,U=O.next;O.next=null,p===null?u=U:p.next=U,p=O;var V=e.alternate;V!==null&&(V=V.updateQueue,v=V.lastBaseUpdate,v!==p&&(v===null?V.firstBaseUpdate=U:v.next=U,V.lastBaseUpdate=O))}if(u!==null){var P=o.baseState;p=0,V=U=O=null,v=u;do{var H=v.lane&-536870913,q=H!==v.lane;if(q?(De&H)===H:(l&H)===H){H!==0&&H===Bl&&(hu=!0),V!==null&&(V=V.next={lane:0,tag:v.tag,payload:v.payload,callback:null,next:null});e:{var se=e,we=v;H=t;var Fe=n;switch(we.tag){case 1:if(se=we.payload,typeof se=="function"){P=se.call(Fe,P,H);break e}P=se;break e;case 3:se.flags=se.flags&-65537|128;case 0:if(se=we.payload,H=typeof se=="function"?se.call(Fe,P,H):se,H==null)break e;P=y({},P,H);break e;case 2:wa=!0}}H=v.callback,H!==null&&(e.flags|=64,q&&(e.flags|=8192),q=o.callbacks,q===null?o.callbacks=[H]:q.push(H))}else q={lane:H,tag:v.tag,payload:v.payload,callback:v.callback,next:null},V===null?(U=V=q,O=P):V=V.next=q,p|=H;if(v=v.next,v===null){if(v=o.shared.pending,v===null)break;q=v,v=q.next,q.next=null,o.lastBaseUpdate=q,o.shared.pending=null}}while(!0);V===null&&(O=P),o.baseState=O,o.firstBaseUpdate=U,o.lastBaseUpdate=V,u===null&&(o.shared.lanes=0),Ra|=p,e.lanes=p,e.memoizedState=P}}function Td(e,t){if(typeof e!="function")throw Error(s(191,e));e.call(t)}function Rd(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Td(n[e],t)}var Xl=T(null),ao=T(0);function _d(e,t){e=sa,W(ao,e),W(Xl,t),sa=e|t.baseLanes}function pu(){W(ao,sa),W(Xl,Xl.current)}function mu(){sa=ao.current,Y(Xl),Y(ao)}var It=T(null),mn=null;function Oa(e){var t=e.alternate;W(pt,pt.current&1),W(It,e),mn===null&&(t===null||Xl.current!==null||t.memoizedState!==null)&&(mn=e)}function gu(e){W(pt,pt.current),W(It,e),mn===null&&(mn=e)}function Cd(e){e.tag===22?(W(pt,pt.current),W(It,e),mn===null&&(mn=e)):ja()}function ja(){W(pt,pt.current),W(It,It.current)}function en(e){Y(It),mn===e&&(mn=null),Y(pt)}var pt=T(0);function lo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||Sc(n)||Ec(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ea=0,_e=null,Ke=null,yt=null,ro=!1,Vl=!1,dl=!1,io=0,Lr=0,Zl=null,_g=0;function st(){throw Error(s(321))}function bu(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!$t(e[n],t[n]))return!1;return!0}function vu(e,t,n,l,o,u){return ea=u,_e=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,D.H=e===null||e.memoizedState===null?hh:Mu,dl=!1,u=n(l,o),dl=!1,Vl&&(u=Ad(t,n,l,o)),zd(e),u}function zd(e){D.H=Yr;var t=Ke!==null&&Ke.next!==null;if(ea=0,yt=Ke=_e=null,ro=!1,Lr=0,Zl=null,t)throw Error(s(300));e===null||xt||(e=e.dependencies,e!==null&&Fi(e)&&(xt=!0))}function Ad(e,t,n,l){_e=e;var o=0;do{if(Vl&&(Zl=null),Lr=0,Vl=!1,25<=o)throw Error(s(301));if(o+=1,yt=Ke=null,e.updateQueue!=null){var u=e.updateQueue;u.lastEffect=null,u.events=null,u.stores=null,u.memoCache!=null&&(u.memoCache.index=0)}D.H=ph,u=t(n,l)}while(Vl);return u}function Cg(){var e=D.H,t=e.useState()[0];return t=typeof t.then=="function"?Br(t):t,e=e.useState()[0],(Ke!==null?Ke.memoizedState:null)!==e&&(_e.flags|=1024),t}function yu(){var e=io!==0;return io=0,e}function xu(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function wu(e){if(ro){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}ro=!1}ea=0,yt=Ke=_e=null,Vl=!1,Lr=io=0,Zl=null}function Ut(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return yt===null?_e.memoizedState=yt=e:yt=yt.next=e,yt}function mt(){if(Ke===null){var e=_e.alternate;e=e!==null?e.memoizedState:null}else e=Ke.next;var t=yt===null?_e.memoizedState:yt.next;if(t!==null)yt=t,Ke=e;else{if(e===null)throw _e.alternate===null?Error(s(467)):Error(s(310));Ke=e,e={memoizedState:Ke.memoizedState,baseState:Ke.baseState,baseQueue:Ke.baseQueue,queue:Ke.queue,next:null},yt===null?_e.memoizedState=yt=e:yt=yt.next=e}return yt}function oo(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Br(e){var t=Lr;return Lr+=1,Zl===null&&(Zl=[]),e=Sd(Zl,e,t),t=_e,(yt===null?t.memoizedState:yt.next)===null&&(t=t.alternate,D.H=t===null||t.memoizedState===null?hh:Mu),e}function so(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Br(e);if(e.$$typeof===K)return _t(e)}throw Error(s(438,String(e)))}function Su(e){var t=null,n=_e.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var l=_e.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(t={data:l.data.map(function(o){return o.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=oo(),_e.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),l=0;l<e;l++)n[l]=Oe;return t.index++,n}function ta(e,t){return typeof t=="function"?t(e):t}function uo(e){var t=mt();return Eu(t,Ke,e)}function Eu(e,t,n){var l=e.queue;if(l===null)throw Error(s(311));l.lastRenderedReducer=n;var o=e.baseQueue,u=l.pending;if(u!==null){if(o!==null){var p=o.next;o.next=u.next,u.next=p}t.baseQueue=o=u,l.pending=null}if(u=e.baseState,o===null)e.memoizedState=u;else{t=o.next;var v=p=null,O=null,U=t,V=!1;do{var P=U.lane&-536870913;if(P!==U.lane?(De&P)===P:(ea&P)===P){var H=U.revertLane;if(H===0)O!==null&&(O=O.next={lane:0,revertLane:0,gesture:null,action:U.action,hasEagerState:U.hasEagerState,eagerState:U.eagerState,next:null}),P===Bl&&(V=!0);else if((ea&H)===H){U=U.next,H===Bl&&(V=!0);continue}else P={lane:0,revertLane:U.revertLane,gesture:null,action:U.action,hasEagerState:U.hasEagerState,eagerState:U.eagerState,next:null},O===null?(v=O=P,p=u):O=O.next=P,_e.lanes|=H,Ra|=H;P=U.action,dl&&n(u,P),u=U.hasEagerState?U.eagerState:n(u,P)}else H={lane:P,revertLane:U.revertLane,gesture:U.gesture,action:U.action,hasEagerState:U.hasEagerState,eagerState:U.eagerState,next:null},O===null?(v=O=H,p=u):O=O.next=H,_e.lanes|=P,Ra|=P;U=U.next}while(U!==null&&U!==t);if(O===null?p=u:O.next=v,!$t(u,e.memoizedState)&&(xt=!0,V&&(n=ql,n!==null)))throw n;e.memoizedState=u,e.baseState=p,e.baseQueue=O,l.lastRenderedState=u}return o===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function Ou(e){var t=mt(),n=t.queue;if(n===null)throw Error(s(311));n.lastRenderedReducer=e;var l=n.dispatch,o=n.pending,u=t.memoizedState;if(o!==null){n.pending=null;var p=o=o.next;do u=e(u,p.action),p=p.next;while(p!==o);$t(u,t.memoizedState)||(xt=!0),t.memoizedState=u,t.baseQueue===null&&(t.baseState=u),n.lastRenderedState=u}return[u,l]}function Md(e,t,n){var l=_e,o=mt(),u=Ye;if(u){if(n===void 0)throw Error(s(407));n=n()}else n=t();var p=!$t((Ke||o).memoizedState,n);if(p&&(o.memoizedState=n,xt=!0),o=o.queue,Tu(Ud.bind(null,l,o,e),[e]),o.getSnapshot!==t||p||yt!==null&&yt.memoizedState.tag&1){if(l.flags|=2048,Pl(9,{destroy:void 0},kd.bind(null,l,o,n,t),null),$e===null)throw Error(s(349));u||(ea&127)!==0||Dd(l,t,n)}return n}function Dd(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=_e.updateQueue,t===null?(t=oo(),_e.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function kd(e,t,n,l){t.value=n,t.getSnapshot=l,Hd(t)&&Ld(e)}function Ud(e,t,n){return n(function(){Hd(t)&&Ld(e)})}function Hd(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!$t(e,n)}catch{return!0}}function Ld(e){var t=al(e,2);t!==null&&Zt(t,e,2)}function ju(e){var t=Ut();if(typeof e=="function"){var n=e;if(e=n(),dl){On(!0);try{n()}finally{On(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ta,lastRenderedState:e},t}function Bd(e,t,n,l){return e.baseState=n,Eu(e,Ke,typeof l=="function"?l:ta)}function zg(e,t,n,l,o){if(ho(e))throw Error(s(485));if(e=t.action,e!==null){var u={payload:o,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(p){u.listeners.push(p)}};D.T!==null?n(!0):u.isTransition=!1,l(u),n=t.pending,n===null?(u.next=t.pending=u,qd(t,u)):(u.next=n.next,t.pending=n.next=u)}}function qd(e,t){var n=t.action,l=t.payload,o=e.state;if(t.isTransition){var u=D.T,p={};D.T=p;try{var v=n(o,l),O=D.S;O!==null&&O(p,v),Yd(e,t,v)}catch(U){Nu(e,t,U)}finally{u!==null&&p.types!==null&&(u.types=p.types),D.T=u}}else try{u=n(o,l),Yd(e,t,u)}catch(U){Nu(e,t,U)}}function Yd(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(l){Gd(e,t,l)},function(l){return Nu(e,t,l)}):Gd(e,t,n)}function Gd(e,t,n){t.status="fulfilled",t.value=n,Xd(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,qd(e,n)))}function Nu(e,t,n){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do t.status="rejected",t.reason=n,Xd(t),t=t.next;while(t!==l)}e.action=null}function Xd(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Vd(e,t){return t}function Zd(e,t){if(Ye){var n=$e.formState;if(n!==null){e:{var l=_e;if(Ye){if(We){t:{for(var o=We,u=pn;o.nodeType!==8;){if(!u){o=null;break t}if(o=gn(o.nextSibling),o===null){o=null;break t}}u=o.data,o=u==="F!"||u==="F"?o:null}if(o){We=gn(o.nextSibling),l=o.data==="F!";break e}}ya(l)}l=!1}l&&(t=n[0])}}return n=Ut(),n.memoizedState=n.baseState=t,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Vd,lastRenderedState:t},n.queue=l,n=ch.bind(null,_e,l),l.dispatch=n,l=ju(!1),u=Au.bind(null,_e,!1,l.queue),l=Ut(),o={state:t,dispatch:null,action:e,pending:null},l.queue=o,n=zg.bind(null,_e,o,u,n),o.dispatch=n,l.memoizedState=e,[t,n,!1]}function Pd(e){var t=mt();return Qd(t,Ke,e)}function Qd(e,t,n){if(t=Eu(e,t,Vd)[0],e=uo(ta)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var l=Br(t)}catch(p){throw p===Yl?Ii:p}else l=t;t=mt();var o=t.queue,u=o.dispatch;return n!==t.memoizedState&&(_e.flags|=2048,Pl(9,{destroy:void 0},Ag.bind(null,o,n),null)),[l,u,e]}function Ag(e,t){e.action=t}function Kd(e){var t=mt(),n=Ke;if(n!==null)return Qd(t,n,e);mt(),t=t.memoizedState,n=mt();var l=n.queue.dispatch;return n.memoizedState=e,[t,l,!1]}function Pl(e,t,n,l){return e={tag:e,create:n,deps:l,inst:t,next:null},t=_e.updateQueue,t===null&&(t=oo(),_e.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(l=n.next,n.next=e,e.next=l,t.lastEffect=e),e}function Jd(){return mt().memoizedState}function co(e,t,n,l){var o=Ut();_e.flags|=e,o.memoizedState=Pl(1|t,{destroy:void 0},n,l===void 0?null:l)}function fo(e,t,n,l){var o=mt();l=l===void 0?null:l;var u=o.memoizedState.inst;Ke!==null&&l!==null&&bu(l,Ke.memoizedState.deps)?o.memoizedState=Pl(t,u,n,l):(_e.flags|=e,o.memoizedState=Pl(1|t,u,n,l))}function Fd(e,t){co(8390656,8,e,t)}function Tu(e,t){fo(2048,8,e,t)}function Mg(e){_e.flags|=4;var t=_e.updateQueue;if(t===null)t=oo(),_e.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function $d(e){var t=mt().memoizedState;return Mg({ref:t,nextImpl:e}),function(){if((Ze&2)!==0)throw Error(s(440));return t.impl.apply(void 0,arguments)}}function Wd(e,t){return fo(4,2,e,t)}function Id(e,t){return fo(4,4,e,t)}function eh(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function th(e,t,n){n=n!=null?n.concat([e]):null,fo(4,4,eh.bind(null,t,e),n)}function Ru(){}function nh(e,t){var n=mt();t=t===void 0?null:t;var l=n.memoizedState;return t!==null&&bu(t,l[1])?l[0]:(n.memoizedState=[e,t],e)}function ah(e,t){var n=mt();t=t===void 0?null:t;var l=n.memoizedState;if(t!==null&&bu(t,l[1]))return l[0];if(l=e(),dl){On(!0);try{e()}finally{On(!1)}}return n.memoizedState=[l,t],l}function _u(e,t,n){return n===void 0||(ea&1073741824)!==0&&(De&261930)===0?e.memoizedState=t:(e.memoizedState=n,e=l0(),_e.lanes|=e,Ra|=e,n)}function lh(e,t,n,l){return $t(n,t)?n:Xl.current!==null?(e=_u(e,n,l),$t(e,t)||(xt=!0),e):(ea&42)===0||(ea&1073741824)!==0&&(De&261930)===0?(xt=!0,e.memoizedState=n):(e=l0(),_e.lanes|=e,Ra|=e,t)}function rh(e,t,n,l,o){var u=$.p;$.p=u!==0&&8>u?u:8;var p=D.T,v={};D.T=v,Au(e,!1,t,n);try{var O=o(),U=D.S;if(U!==null&&U(v,O),O!==null&&typeof O=="object"&&typeof O.then=="function"){var V=Rg(O,l);qr(e,t,V,an(e))}else qr(e,t,l,an(e))}catch(P){qr(e,t,{then:function(){},status:"rejected",reason:P},an())}finally{$.p=u,p!==null&&v.types!==null&&(p.types=v.types),D.T=p}}function Dg(){}function Cu(e,t,n,l){if(e.tag!==5)throw Error(s(476));var o=ih(e).queue;rh(e,o,t,I,n===null?Dg:function(){return oh(e),n(l)})}function ih(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:I,baseState:I,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ta,lastRenderedState:I},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ta,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function oh(e){var t=ih(e);t.next===null&&(t=e.alternate.memoizedState),qr(e,t.next.queue,{},an())}function zu(){return _t(ai)}function sh(){return mt().memoizedState}function uh(){return mt().memoizedState}function kg(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=an();e=Sa(n);var l=Ea(t,e,n);l!==null&&(Zt(l,t,n),kr(l,t,n)),t={cache:iu()},e.payload=t;return}t=t.return}}function Ug(e,t,n){var l=an();n={lane:l,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},ho(e)?fh(t,n):(n=Js(e,t,n,l),n!==null&&(Zt(n,e,l),dh(n,t,l)))}function ch(e,t,n){var l=an();qr(e,t,n,l)}function qr(e,t,n,l){var o={lane:l,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(ho(e))fh(t,o);else{var u=e.alternate;if(e.lanes===0&&(u===null||u.lanes===0)&&(u=t.lastRenderedReducer,u!==null))try{var p=t.lastRenderedState,v=u(p,n);if(o.hasEagerState=!0,o.eagerState=v,$t(v,p))return Pi(e,t,o,0),$e===null&&Zi(),!1}catch{}if(n=Js(e,t,o,l),n!==null)return Zt(n,e,l),dh(n,t,l),!0}return!1}function Au(e,t,n,l){if(l={lane:2,revertLane:cc(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},ho(e)){if(t)throw Error(s(479))}else t=Js(e,n,l,2),t!==null&&Zt(t,e,2)}function ho(e){var t=e.alternate;return e===_e||t!==null&&t===_e}function fh(e,t){Vl=ro=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function dh(e,t,n){if((n&4194048)!==0){var l=t.lanes;l&=e.pendingLanes,n|=l,t.lanes=n,E(e,n)}}var Yr={readContext:_t,use:so,useCallback:st,useContext:st,useEffect:st,useImperativeHandle:st,useLayoutEffect:st,useInsertionEffect:st,useMemo:st,useReducer:st,useRef:st,useState:st,useDebugValue:st,useDeferredValue:st,useTransition:st,useSyncExternalStore:st,useId:st,useHostTransitionStatus:st,useFormState:st,useActionState:st,useOptimistic:st,useMemoCache:st,useCacheRefresh:st};Yr.useEffectEvent=st;var hh={readContext:_t,use:so,useCallback:function(e,t){return Ut().memoizedState=[e,t===void 0?null:t],e},useContext:_t,useEffect:Fd,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,co(4194308,4,eh.bind(null,t,e),n)},useLayoutEffect:function(e,t){return co(4194308,4,e,t)},useInsertionEffect:function(e,t){co(4,2,e,t)},useMemo:function(e,t){var n=Ut();t=t===void 0?null:t;var l=e();if(dl){On(!0);try{e()}finally{On(!1)}}return n.memoizedState=[l,t],l},useReducer:function(e,t,n){var l=Ut();if(n!==void 0){var o=n(t);if(dl){On(!0);try{n(t)}finally{On(!1)}}}else o=t;return l.memoizedState=l.baseState=o,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:o},l.queue=e,e=e.dispatch=Ug.bind(null,_e,e),[l.memoizedState,e]},useRef:function(e){var t=Ut();return e={current:e},t.memoizedState=e},useState:function(e){e=ju(e);var t=e.queue,n=ch.bind(null,_e,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:Ru,useDeferredValue:function(e,t){var n=Ut();return _u(n,e,t)},useTransition:function(){var e=ju(!1);return e=rh.bind(null,_e,e.queue,!0,!1),Ut().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var l=_e,o=Ut();if(Ye){if(n===void 0)throw Error(s(407));n=n()}else{if(n=t(),$e===null)throw Error(s(349));(De&127)!==0||Dd(l,t,n)}o.memoizedState=n;var u={value:n,getSnapshot:t};return o.queue=u,Fd(Ud.bind(null,l,u,e),[e]),l.flags|=2048,Pl(9,{destroy:void 0},kd.bind(null,l,u,n,t),null),n},useId:function(){var e=Ut(),t=$e.identifierPrefix;if(Ye){var n=Hn,l=Un;n=(l&~(1<<32-At(l)-1)).toString(32)+n,t="_"+t+"R_"+n,n=io++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=_g++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:zu,useFormState:Zd,useActionState:Zd,useOptimistic:function(e){var t=Ut();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Au.bind(null,_e,!0,n),n.dispatch=t,[e,t]},useMemoCache:Su,useCacheRefresh:function(){return Ut().memoizedState=kg.bind(null,_e)},useEffectEvent:function(e){var t=Ut(),n={impl:e};return t.memoizedState=n,function(){if((Ze&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}},Mu={readContext:_t,use:so,useCallback:nh,useContext:_t,useEffect:Tu,useImperativeHandle:th,useInsertionEffect:Wd,useLayoutEffect:Id,useMemo:ah,useReducer:uo,useRef:Jd,useState:function(){return uo(ta)},useDebugValue:Ru,useDeferredValue:function(e,t){var n=mt();return lh(n,Ke.memoizedState,e,t)},useTransition:function(){var e=uo(ta)[0],t=mt().memoizedState;return[typeof e=="boolean"?e:Br(e),t]},useSyncExternalStore:Md,useId:sh,useHostTransitionStatus:zu,useFormState:Pd,useActionState:Pd,useOptimistic:function(e,t){var n=mt();return Bd(n,Ke,e,t)},useMemoCache:Su,useCacheRefresh:uh};Mu.useEffectEvent=$d;var ph={readContext:_t,use:so,useCallback:nh,useContext:_t,useEffect:Tu,useImperativeHandle:th,useInsertionEffect:Wd,useLayoutEffect:Id,useMemo:ah,useReducer:Ou,useRef:Jd,useState:function(){return Ou(ta)},useDebugValue:Ru,useDeferredValue:function(e,t){var n=mt();return Ke===null?_u(n,e,t):lh(n,Ke.memoizedState,e,t)},useTransition:function(){var e=Ou(ta)[0],t=mt().memoizedState;return[typeof e=="boolean"?e:Br(e),t]},useSyncExternalStore:Md,useId:sh,useHostTransitionStatus:zu,useFormState:Kd,useActionState:Kd,useOptimistic:function(e,t){var n=mt();return Ke!==null?Bd(n,Ke,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:Su,useCacheRefresh:uh};ph.useEffectEvent=$d;function Du(e,t,n,l){t=e.memoizedState,n=n(l,t),n=n==null?t:y({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ku={enqueueSetState:function(e,t,n){e=e._reactInternals;var l=an(),o=Sa(l);o.payload=t,n!=null&&(o.callback=n),t=Ea(e,o,l),t!==null&&(Zt(t,e,l),kr(t,e,l))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var l=an(),o=Sa(l);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=Ea(e,o,l),t!==null&&(Zt(t,e,l),kr(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=an(),l=Sa(n);l.tag=2,t!=null&&(l.callback=t),t=Ea(e,l,n),t!==null&&(Zt(t,e,n),kr(t,e,n))}};function mh(e,t,n,l,o,u,p){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,u,p):t.prototype&&t.prototype.isPureReactComponent?!Tr(n,l)||!Tr(o,u):!0}function gh(e,t,n,l){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,l),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,l),t.state!==e&&ku.enqueueReplaceState(t,t.state,null)}function hl(e,t){var n=t;if("ref"in t){n={};for(var l in t)l!=="ref"&&(n[l]=t[l])}if(e=e.defaultProps){n===t&&(n=y({},n));for(var o in e)n[o]===void 0&&(n[o]=e[o])}return n}function bh(e){Vi(e)}function vh(e){console.error(e)}function yh(e){Vi(e)}function po(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(l){setTimeout(function(){throw l})}}function xh(e,t,n){try{var l=e.onCaughtError;l(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(o){setTimeout(function(){throw o})}}function Uu(e,t,n){return n=Sa(n),n.tag=3,n.payload={element:null},n.callback=function(){po(e,t)},n}function wh(e){return e=Sa(e),e.tag=3,e}function Sh(e,t,n,l){var o=n.type.getDerivedStateFromError;if(typeof o=="function"){var u=l.value;e.payload=function(){return o(u)},e.callback=function(){xh(t,n,l)}}var p=n.stateNode;p!==null&&typeof p.componentDidCatch=="function"&&(e.callback=function(){xh(t,n,l),typeof o!="function"&&(_a===null?_a=new Set([this]):_a.add(this));var v=l.stack;this.componentDidCatch(l.value,{componentStack:v!==null?v:""})})}function Hg(e,t,n,l,o){if(n.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(t=n.alternate,t!==null&&Ll(t,n,o,!0),n=It.current,n!==null){switch(n.tag){case 31:case 13:return mn===null?No():n.alternate===null&&ut===0&&(ut=3),n.flags&=-257,n.flags|=65536,n.lanes=o,l===eo?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([l]):t.add(l),oc(e,l,o)),!1;case 22:return n.flags|=65536,l===eo?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([l])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([l]):n.add(l)),oc(e,l,o)),!1}throw Error(s(435,n.tag))}return oc(e,l,o),No(),!1}if(Ye)return t=It.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=o,l!==tu&&(e=Error(s(422),{cause:l}),Cr(fn(e,n)))):(l!==tu&&(t=Error(s(423),{cause:l}),Cr(fn(t,n))),e=e.current.alternate,e.flags|=65536,o&=-o,e.lanes|=o,l=fn(l,n),o=Uu(e.stateNode,l,o),du(e,o),ut!==4&&(ut=2)),!1;var u=Error(s(520),{cause:l});if(u=fn(u,n),Jr===null?Jr=[u]:Jr.push(u),ut!==4&&(ut=2),t===null)return!0;l=fn(l,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=o&-o,n.lanes|=e,e=Uu(n.stateNode,l,e),du(n,e),!1;case 1:if(t=n.type,u=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||u!==null&&typeof u.componentDidCatch=="function"&&(_a===null||!_a.has(u))))return n.flags|=65536,o&=-o,n.lanes|=o,o=wh(o),Sh(o,e,n,l),du(n,o),!1}n=n.return}while(n!==null);return!1}var Hu=Error(s(461)),xt=!1;function Ct(e,t,n,l){t.child=e===null?Nd(t,null,n,l):fl(t,e.child,n,l)}function Eh(e,t,n,l,o){n=n.render;var u=t.ref;if("ref"in l){var p={};for(var v in l)v!=="ref"&&(p[v]=l[v])}else p=l;return ol(t),l=vu(e,t,n,p,u,o),v=yu(),e!==null&&!xt?(xu(e,t,o),na(e,t,o)):(Ye&&v&&Is(t),t.flags|=1,Ct(e,t,l,o),t.child)}function Oh(e,t,n,l,o){if(e===null){var u=n.type;return typeof u=="function"&&!Fs(u)&&u.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=u,jh(e,t,u,l,o)):(e=Ki(n.type,null,l,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(u=e.child,!Zu(e,o)){var p=u.memoizedProps;if(n=n.compare,n=n!==null?n:Tr,n(p,l)&&e.ref===t.ref)return na(e,t,o)}return t.flags|=1,e=Fn(u,l),e.ref=t.ref,e.return=t,t.child=e}function jh(e,t,n,l,o){if(e!==null){var u=e.memoizedProps;if(Tr(u,l)&&e.ref===t.ref)if(xt=!1,t.pendingProps=l=u,Zu(e,o))(e.flags&131072)!==0&&(xt=!0);else return t.lanes=e.lanes,na(e,t,o)}return Lu(e,t,n,l,o)}function Nh(e,t,n,l){var o=l.children,u=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((t.flags&128)!==0){if(u=u!==null?u.baseLanes|n:n,e!==null){for(l=t.child=e.child,o=0;l!==null;)o=o|l.lanes|l.childLanes,l=l.sibling;l=o&~u}else l=0,t.child=null;return Th(e,t,u,n,l)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Wi(t,u!==null?u.cachePool:null),u!==null?_d(t,u):pu(),Cd(t);else return l=t.lanes=536870912,Th(e,t,u!==null?u.baseLanes|n:n,n,l)}else u!==null?(Wi(t,u.cachePool),_d(t,u),ja(),t.memoizedState=null):(e!==null&&Wi(t,null),pu(),ja());return Ct(e,t,o,n),t.child}function Gr(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Th(e,t,n,l,o){var u=su();return u=u===null?null:{parent:vt._currentValue,pool:u},t.memoizedState={baseLanes:n,cachePool:u},e!==null&&Wi(t,null),pu(),Cd(t),e!==null&&Ll(e,t,l,!0),t.childLanes=o,null}function mo(e,t){return t=bo({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Rh(e,t,n){return fl(t,e.child,null,n),e=mo(t,t.pendingProps),e.flags|=2,en(t),t.memoizedState=null,e}function Lg(e,t,n){var l=t.pendingProps,o=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(Ye){if(l.mode==="hidden")return e=mo(t,l),t.lanes=536870912,Gr(null,e);if(gu(t),(e=We)?(e=q0(e,pn),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ba!==null?{id:Un,overflow:Hn}:null,retryLane:536870912,hydrationErrors:null},n=fd(e),n.return=t,t.child=n,Rt=t,We=null)):e=null,e===null)throw ya(t);return t.lanes=536870912,null}return mo(t,l)}var u=e.memoizedState;if(u!==null){var p=u.dehydrated;if(gu(t),o)if(t.flags&256)t.flags&=-257,t=Rh(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(s(558));else if(xt||Ll(e,t,n,!1),o=(n&e.childLanes)!==0,xt||o){if(l=$e,l!==null&&(p=M(l,n),p!==0&&p!==u.retryLane))throw u.retryLane=p,al(e,p),Zt(l,e,p),Hu;No(),t=Rh(e,t,n)}else e=u.treeContext,We=gn(p.nextSibling),Rt=t,Ye=!0,va=null,pn=!1,e!==null&&pd(t,e),t=mo(t,l),t.flags|=4096;return t}return e=Fn(e.child,{mode:l.mode,children:l.children}),e.ref=t.ref,t.child=e,e.return=t,e}function go(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(s(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function Lu(e,t,n,l,o){return ol(t),n=vu(e,t,n,l,void 0,o),l=yu(),e!==null&&!xt?(xu(e,t,o),na(e,t,o)):(Ye&&l&&Is(t),t.flags|=1,Ct(e,t,n,o),t.child)}function _h(e,t,n,l,o,u){return ol(t),t.updateQueue=null,n=Ad(t,l,n,o),zd(e),l=yu(),e!==null&&!xt?(xu(e,t,u),na(e,t,u)):(Ye&&l&&Is(t),t.flags|=1,Ct(e,t,n,u),t.child)}function Ch(e,t,n,l,o){if(ol(t),t.stateNode===null){var u=Dl,p=n.contextType;typeof p=="object"&&p!==null&&(u=_t(p)),u=new n(l,u),t.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,u.updater=ku,t.stateNode=u,u._reactInternals=t,u=t.stateNode,u.props=l,u.state=t.memoizedState,u.refs={},cu(t),p=n.contextType,u.context=typeof p=="object"&&p!==null?_t(p):Dl,u.state=t.memoizedState,p=n.getDerivedStateFromProps,typeof p=="function"&&(Du(t,n,p,l),u.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(p=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),p!==u.state&&ku.enqueueReplaceState(u,u.state,null),Hr(t,l,u,o),Ur(),u.state=t.memoizedState),typeof u.componentDidMount=="function"&&(t.flags|=4194308),l=!0}else if(e===null){u=t.stateNode;var v=t.memoizedProps,O=hl(n,v);u.props=O;var U=u.context,V=n.contextType;p=Dl,typeof V=="object"&&V!==null&&(p=_t(V));var P=n.getDerivedStateFromProps;V=typeof P=="function"||typeof u.getSnapshotBeforeUpdate=="function",v=t.pendingProps!==v,V||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(v||U!==p)&&gh(t,u,l,p),wa=!1;var H=t.memoizedState;u.state=H,Hr(t,l,u,o),Ur(),U=t.memoizedState,v||H!==U||wa?(typeof P=="function"&&(Du(t,n,P,l),U=t.memoizedState),(O=wa||mh(t,n,O,l,H,U,p))?(V||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount()),typeof u.componentDidMount=="function"&&(t.flags|=4194308)):(typeof u.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=l,t.memoizedState=U),u.props=l,u.state=U,u.context=p,l=O):(typeof u.componentDidMount=="function"&&(t.flags|=4194308),l=!1)}else{u=t.stateNode,fu(e,t),p=t.memoizedProps,V=hl(n,p),u.props=V,P=t.pendingProps,H=u.context,U=n.contextType,O=Dl,typeof U=="object"&&U!==null&&(O=_t(U)),v=n.getDerivedStateFromProps,(U=typeof v=="function"||typeof u.getSnapshotBeforeUpdate=="function")||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(p!==P||H!==O)&&gh(t,u,l,O),wa=!1,H=t.memoizedState,u.state=H,Hr(t,l,u,o),Ur();var q=t.memoizedState;p!==P||H!==q||wa||e!==null&&e.dependencies!==null&&Fi(e.dependencies)?(typeof v=="function"&&(Du(t,n,v,l),q=t.memoizedState),(V=wa||mh(t,n,V,l,H,q,O)||e!==null&&e.dependencies!==null&&Fi(e.dependencies))?(U||typeof u.UNSAFE_componentWillUpdate!="function"&&typeof u.componentWillUpdate!="function"||(typeof u.componentWillUpdate=="function"&&u.componentWillUpdate(l,q,O),typeof u.UNSAFE_componentWillUpdate=="function"&&u.UNSAFE_componentWillUpdate(l,q,O)),typeof u.componentDidUpdate=="function"&&(t.flags|=4),typeof u.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof u.componentDidUpdate!="function"||p===e.memoizedProps&&H===e.memoizedState||(t.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||p===e.memoizedProps&&H===e.memoizedState||(t.flags|=1024),t.memoizedProps=l,t.memoizedState=q),u.props=l,u.state=q,u.context=O,l=V):(typeof u.componentDidUpdate!="function"||p===e.memoizedProps&&H===e.memoizedState||(t.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||p===e.memoizedProps&&H===e.memoizedState||(t.flags|=1024),l=!1)}return u=l,go(e,t),l=(t.flags&128)!==0,u||l?(u=t.stateNode,n=l&&typeof n.getDerivedStateFromError!="function"?null:u.render(),t.flags|=1,e!==null&&l?(t.child=fl(t,e.child,null,o),t.child=fl(t,null,n,o)):Ct(e,t,n,o),t.memoizedState=u.state,e=t.child):e=na(e,t,o),e}function zh(e,t,n,l){return rl(),t.flags|=256,Ct(e,t,n,l),t.child}var Bu={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function qu(e){return{baseLanes:e,cachePool:xd()}}function Yu(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=nn),e}function Ah(e,t,n){var l=t.pendingProps,o=!1,u=(t.flags&128)!==0,p;if((p=u)||(p=e!==null&&e.memoizedState===null?!1:(pt.current&2)!==0),p&&(o=!0,t.flags&=-129),p=(t.flags&32)!==0,t.flags&=-33,e===null){if(Ye){if(o?Oa(t):ja(),(e=We)?(e=q0(e,pn),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ba!==null?{id:Un,overflow:Hn}:null,retryLane:536870912,hydrationErrors:null},n=fd(e),n.return=t,t.child=n,Rt=t,We=null)):e=null,e===null)throw ya(t);return Ec(e)?t.lanes=32:t.lanes=536870912,null}var v=l.children;return l=l.fallback,o?(ja(),o=t.mode,v=bo({mode:"hidden",children:v},o),l=ll(l,o,n,null),v.return=t,l.return=t,v.sibling=l,t.child=v,l=t.child,l.memoizedState=qu(n),l.childLanes=Yu(e,p,n),t.memoizedState=Bu,Gr(null,l)):(Oa(t),Gu(t,v))}var O=e.memoizedState;if(O!==null&&(v=O.dehydrated,v!==null)){if(u)t.flags&256?(Oa(t),t.flags&=-257,t=Xu(e,t,n)):t.memoizedState!==null?(ja(),t.child=e.child,t.flags|=128,t=null):(ja(),v=l.fallback,o=t.mode,l=bo({mode:"visible",children:l.children},o),v=ll(v,o,n,null),v.flags|=2,l.return=t,v.return=t,l.sibling=v,t.child=l,fl(t,e.child,null,n),l=t.child,l.memoizedState=qu(n),l.childLanes=Yu(e,p,n),t.memoizedState=Bu,t=Gr(null,l));else if(Oa(t),Ec(v)){if(p=v.nextSibling&&v.nextSibling.dataset,p)var U=p.dgst;p=U,l=Error(s(419)),l.stack="",l.digest=p,Cr({value:l,source:null,stack:null}),t=Xu(e,t,n)}else if(xt||Ll(e,t,n,!1),p=(n&e.childLanes)!==0,xt||p){if(p=$e,p!==null&&(l=M(p,n),l!==0&&l!==O.retryLane))throw O.retryLane=l,al(e,l),Zt(p,e,l),Hu;Sc(v)||No(),t=Xu(e,t,n)}else Sc(v)?(t.flags|=192,t.child=e.child,t=null):(e=O.treeContext,We=gn(v.nextSibling),Rt=t,Ye=!0,va=null,pn=!1,e!==null&&pd(t,e),t=Gu(t,l.children),t.flags|=4096);return t}return o?(ja(),v=l.fallback,o=t.mode,O=e.child,U=O.sibling,l=Fn(O,{mode:"hidden",children:l.children}),l.subtreeFlags=O.subtreeFlags&65011712,U!==null?v=Fn(U,v):(v=ll(v,o,n,null),v.flags|=2),v.return=t,l.return=t,l.sibling=v,t.child=l,Gr(null,l),l=t.child,v=e.child.memoizedState,v===null?v=qu(n):(o=v.cachePool,o!==null?(O=vt._currentValue,o=o.parent!==O?{parent:O,pool:O}:o):o=xd(),v={baseLanes:v.baseLanes|n,cachePool:o}),l.memoizedState=v,l.childLanes=Yu(e,p,n),t.memoizedState=Bu,Gr(e.child,l)):(Oa(t),n=e.child,e=n.sibling,n=Fn(n,{mode:"visible",children:l.children}),n.return=t,n.sibling=null,e!==null&&(p=t.deletions,p===null?(t.deletions=[e],t.flags|=16):p.push(e)),t.child=n,t.memoizedState=null,n)}function Gu(e,t){return t=bo({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function bo(e,t){return e=Wt(22,e,null,t),e.lanes=0,e}function Xu(e,t,n){return fl(t,e.child,null,n),e=Gu(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Mh(e,t,n){e.lanes|=t;var l=e.alternate;l!==null&&(l.lanes|=t),lu(e.return,t,n)}function Vu(e,t,n,l,o,u){var p=e.memoizedState;p===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:l,tail:n,tailMode:o,treeForkCount:u}:(p.isBackwards=t,p.rendering=null,p.renderingStartTime=0,p.last=l,p.tail=n,p.tailMode=o,p.treeForkCount=u)}function Dh(e,t,n){var l=t.pendingProps,o=l.revealOrder,u=l.tail;l=l.children;var p=pt.current,v=(p&2)!==0;if(v?(p=p&1|2,t.flags|=128):p&=1,W(pt,p),Ct(e,t,l,n),l=Ye?_r:0,!v&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Mh(e,n,t);else if(e.tag===19)Mh(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&lo(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),Vu(t,!1,o,n,u,l);break;case"backwards":case"unstable_legacy-backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&lo(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}Vu(t,!0,n,null,u,l);break;case"together":Vu(t,!1,null,null,void 0,l);break;default:t.memoizedState=null}return t.child}function na(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Ra|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(Ll(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(s(153));if(t.child!==null){for(e=t.child,n=Fn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Fn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Zu(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Fi(e)))}function Bg(e,t,n){switch(t.tag){case 3:ft(t,t.stateNode.containerInfo),xa(t,vt,e.memoizedState.cache),rl();break;case 27:case 5:Va(t);break;case 4:ft(t,t.stateNode.containerInfo);break;case 10:xa(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,gu(t),null;break;case 13:var l=t.memoizedState;if(l!==null)return l.dehydrated!==null?(Oa(t),t.flags|=128,null):(n&t.child.childLanes)!==0?Ah(e,t,n):(Oa(t),e=na(e,t,n),e!==null?e.sibling:null);Oa(t);break;case 19:var o=(e.flags&128)!==0;if(l=(n&t.childLanes)!==0,l||(Ll(e,t,n,!1),l=(n&t.childLanes)!==0),o){if(l)return Dh(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),W(pt,pt.current),l)break;return null;case 22:return t.lanes=0,Nh(e,t,n,t.pendingProps);case 24:xa(t,vt,e.memoizedState.cache)}return na(e,t,n)}function kh(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)xt=!0;else{if(!Zu(e,n)&&(t.flags&128)===0)return xt=!1,Bg(e,t,n);xt=(e.flags&131072)!==0}else xt=!1,Ye&&(t.flags&1048576)!==0&&hd(t,_r,t.index);switch(t.lanes=0,t.tag){case 16:e:{var l=t.pendingProps;if(e=ul(t.elementType),t.type=e,typeof e=="function")Fs(e)?(l=hl(e,l),t.tag=1,t=Ch(null,t,e,l,n)):(t.tag=0,t=Lu(null,t,e,l,n));else{if(e!=null){var o=e.$$typeof;if(o===oe){t.tag=11,t=Eh(null,t,e,l,n);break e}else if(o===C){t.tag=14,t=Oh(null,t,e,l,n);break e}}throw t=be(e)||e,Error(s(306,t,""))}}return t;case 0:return Lu(e,t,t.type,t.pendingProps,n);case 1:return l=t.type,o=hl(l,t.pendingProps),Ch(e,t,l,o,n);case 3:e:{if(ft(t,t.stateNode.containerInfo),e===null)throw Error(s(387));l=t.pendingProps;var u=t.memoizedState;o=u.element,fu(e,t),Hr(t,l,null,n);var p=t.memoizedState;if(l=p.cache,xa(t,vt,l),l!==u.cache&&ru(t,[vt],n,!0),Ur(),l=p.element,u.isDehydrated)if(u={element:l,isDehydrated:!1,cache:p.cache},t.updateQueue.baseState=u,t.memoizedState=u,t.flags&256){t=zh(e,t,l,n);break e}else if(l!==o){o=fn(Error(s(424)),t),Cr(o),t=zh(e,t,l,n);break e}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,We=gn(e.firstChild),Rt=t,Ye=!0,va=null,pn=!0,n=Nd(t,null,l,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(rl(),l===o){t=na(e,t,n);break e}Ct(e,t,l,n)}t=t.child}return t;case 26:return go(e,t),e===null?(n=P0(t.type,null,t.pendingProps,null))?t.memoizedState=n:Ye||(n=t.type,e=t.pendingProps,l=Mo(Ne.current).createElement(n),l[ae]=t,l[ie]=e,zt(l,n,e),et(l),t.stateNode=l):t.memoizedState=P0(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Va(t),e===null&&Ye&&(l=t.stateNode=X0(t.type,t.pendingProps,Ne.current),Rt=t,pn=!0,o=We,Ma(t.type)?(Oc=o,We=gn(l.firstChild)):We=o),Ct(e,t,t.pendingProps.children,n),go(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&Ye&&((o=l=We)&&(l=mb(l,t.type,t.pendingProps,pn),l!==null?(t.stateNode=l,Rt=t,We=gn(l.firstChild),pn=!1,o=!0):o=!1),o||ya(t)),Va(t),o=t.type,u=t.pendingProps,p=e!==null?e.memoizedProps:null,l=u.children,yc(o,u)?l=null:p!==null&&yc(o,p)&&(t.flags|=32),t.memoizedState!==null&&(o=vu(e,t,Cg,null,null,n),ai._currentValue=o),go(e,t),Ct(e,t,l,n),t.child;case 6:return e===null&&Ye&&((e=n=We)&&(n=gb(n,t.pendingProps,pn),n!==null?(t.stateNode=n,Rt=t,We=null,e=!0):e=!1),e||ya(t)),null;case 13:return Ah(e,t,n);case 4:return ft(t,t.stateNode.containerInfo),l=t.pendingProps,e===null?t.child=fl(t,null,l,n):Ct(e,t,l,n),t.child;case 11:return Eh(e,t,t.type,t.pendingProps,n);case 7:return Ct(e,t,t.pendingProps,n),t.child;case 8:return Ct(e,t,t.pendingProps.children,n),t.child;case 12:return Ct(e,t,t.pendingProps.children,n),t.child;case 10:return l=t.pendingProps,xa(t,t.type,l.value),Ct(e,t,l.children,n),t.child;case 9:return o=t.type._context,l=t.pendingProps.children,ol(t),o=_t(o),l=l(o),t.flags|=1,Ct(e,t,l,n),t.child;case 14:return Oh(e,t,t.type,t.pendingProps,n);case 15:return jh(e,t,t.type,t.pendingProps,n);case 19:return Dh(e,t,n);case 31:return Lg(e,t,n);case 22:return Nh(e,t,n,t.pendingProps);case 24:return ol(t),l=_t(vt),e===null?(o=su(),o===null&&(o=$e,u=iu(),o.pooledCache=u,u.refCount++,u!==null&&(o.pooledCacheLanes|=n),o=u),t.memoizedState={parent:l,cache:o},cu(t),xa(t,vt,o)):((e.lanes&n)!==0&&(fu(e,t),Hr(t,null,null,n),Ur()),o=e.memoizedState,u=t.memoizedState,o.parent!==l?(o={parent:l,cache:l},t.memoizedState=o,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=o),xa(t,vt,l)):(l=u.cache,xa(t,vt,l),l!==o.cache&&ru(t,[vt],n,!0))),Ct(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(s(156,t.tag))}function aa(e){e.flags|=4}function Pu(e,t,n,l,o){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(o&335544128)===o)if(e.stateNode.complete)e.flags|=8192;else if(s0())e.flags|=8192;else throw cl=eo,uu}else e.flags&=-16777217}function Uh(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!$0(t))if(s0())e.flags|=8192;else throw cl=eo,uu}function vo(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Fa():536870912,e.lanes|=t,Fl|=t)}function Xr(e,t){if(!Ye)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var l=null;n!==null;)n.alternate!==null&&(l=n),n=n.sibling;l===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function Ie(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,l=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,l|=o.subtreeFlags&65011712,l|=o.flags&65011712,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,l|=o.subtreeFlags,l|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=l,e.childLanes=n,t}function qg(e,t,n){var l=t.pendingProps;switch(eu(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ie(t),null;case 1:return Ie(t),null;case 3:return n=t.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),t.memoizedState.cache!==l&&(t.flags|=2048),In(vt),at(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Hl(t)?aa(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,nu())),Ie(t),null;case 26:var o=t.type,u=t.memoizedState;return e===null?(aa(t),u!==null?(Ie(t),Uh(t,u)):(Ie(t),Pu(t,o,null,l,n))):u?u!==e.memoizedState?(aa(t),Ie(t),Uh(t,u)):(Ie(t),t.flags&=-16777217):(e=e.memoizedProps,e!==l&&aa(t),Ie(t),Pu(t,o,e,l,n)),null;case 27:if(El(t),n=Ne.current,o=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&aa(t);else{if(!l){if(t.stateNode===null)throw Error(s(166));return Ie(t),null}e=ne.current,Hl(t)?md(t):(e=X0(o,l,n),t.stateNode=e,aa(t))}return Ie(t),null;case 5:if(El(t),o=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&aa(t);else{if(!l){if(t.stateNode===null)throw Error(s(166));return Ie(t),null}if(u=ne.current,Hl(t))md(t);else{var p=Mo(Ne.current);switch(u){case 1:u=p.createElementNS("http://www.w3.org/2000/svg",o);break;case 2:u=p.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;default:switch(o){case"svg":u=p.createElementNS("http://www.w3.org/2000/svg",o);break;case"math":u=p.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;case"script":u=p.createElement("div"),u.innerHTML="<script><\/script>",u=u.removeChild(u.firstChild);break;case"select":u=typeof l.is=="string"?p.createElement("select",{is:l.is}):p.createElement("select"),l.multiple?u.multiple=!0:l.size&&(u.size=l.size);break;default:u=typeof l.is=="string"?p.createElement(o,{is:l.is}):p.createElement(o)}}u[ae]=t,u[ie]=l;e:for(p=t.child;p!==null;){if(p.tag===5||p.tag===6)u.appendChild(p.stateNode);else if(p.tag!==4&&p.tag!==27&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;p=p.return}p.sibling.return=p.return,p=p.sibling}t.stateNode=u;e:switch(zt(u,o,l),o){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&aa(t)}}return Ie(t),Pu(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==l&&aa(t);else{if(typeof l!="string"&&t.stateNode===null)throw Error(s(166));if(e=Ne.current,Hl(t)){if(e=t.stateNode,n=t.memoizedProps,l=null,o=Rt,o!==null)switch(o.tag){case 27:case 5:l=o.memoizedProps}e[ae]=t,e=!!(e.nodeValue===n||l!==null&&l.suppressHydrationWarning===!0||A0(e.nodeValue,n)),e||ya(t,!0)}else e=Mo(e).createTextNode(l),e[ae]=t,t.stateNode=e}return Ie(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(l=Hl(t),n!==null){if(e===null){if(!l)throw Error(s(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[ae]=t}else rl(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ie(t),e=!1}else n=nu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(en(t),t):(en(t),null);if((t.flags&128)!==0)throw Error(s(558))}return Ie(t),null;case 13:if(l=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(o=Hl(t),l!==null&&l.dehydrated!==null){if(e===null){if(!o)throw Error(s(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(s(317));o[ae]=t}else rl(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ie(t),o=!1}else o=nu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=o),o=!0;if(!o)return t.flags&256?(en(t),t):(en(t),null)}return en(t),(t.flags&128)!==0?(t.lanes=n,t):(n=l!==null,e=e!==null&&e.memoizedState!==null,n&&(l=t.child,o=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(o=l.alternate.memoizedState.cachePool.pool),u=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(u=l.memoizedState.cachePool.pool),u!==o&&(l.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),vo(t,t.updateQueue),Ie(t),null);case 4:return at(),e===null&&pc(t.stateNode.containerInfo),Ie(t),null;case 10:return In(t.type),Ie(t),null;case 19:if(Y(pt),l=t.memoizedState,l===null)return Ie(t),null;if(o=(t.flags&128)!==0,u=l.rendering,u===null)if(o)Xr(l,!1);else{if(ut!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(u=lo(e),u!==null){for(t.flags|=128,Xr(l,!1),e=u.updateQueue,t.updateQueue=e,vo(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)cd(n,e),n=n.sibling;return W(pt,pt.current&1|2),Ye&&$n(t,l.treeForkCount),t.child}e=e.sibling}l.tail!==null&&dt()>Eo&&(t.flags|=128,o=!0,Xr(l,!1),t.lanes=4194304)}else{if(!o)if(e=lo(u),e!==null){if(t.flags|=128,o=!0,e=e.updateQueue,t.updateQueue=e,vo(t,e),Xr(l,!0),l.tail===null&&l.tailMode==="hidden"&&!u.alternate&&!Ye)return Ie(t),null}else 2*dt()-l.renderingStartTime>Eo&&n!==536870912&&(t.flags|=128,o=!0,Xr(l,!1),t.lanes=4194304);l.isBackwards?(u.sibling=t.child,t.child=u):(e=l.last,e!==null?e.sibling=u:t.child=u,l.last=u)}return l.tail!==null?(e=l.tail,l.rendering=e,l.tail=e.sibling,l.renderingStartTime=dt(),e.sibling=null,n=pt.current,W(pt,o?n&1|2:n&1),Ye&&$n(t,l.treeForkCount),e):(Ie(t),null);case 22:case 23:return en(t),mu(),l=t.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(t.flags|=8192):l&&(t.flags|=8192),l?(n&536870912)!==0&&(t.flags&128)===0&&(Ie(t),t.subtreeFlags&6&&(t.flags|=8192)):Ie(t),n=t.updateQueue,n!==null&&vo(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),l=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),l!==n&&(t.flags|=2048),e!==null&&Y(sl),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),In(vt),Ie(t),null;case 25:return null;case 30:return null}throw Error(s(156,t.tag))}function Yg(e,t){switch(eu(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return In(vt),at(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return El(t),null;case 31:if(t.memoizedState!==null){if(en(t),t.alternate===null)throw Error(s(340));rl()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(en(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(s(340));rl()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Y(pt),null;case 4:return at(),null;case 10:return In(t.type),null;case 22:case 23:return en(t),mu(),e!==null&&Y(sl),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return In(vt),null;case 25:return null;default:return null}}function Hh(e,t){switch(eu(t),t.tag){case 3:In(vt),at();break;case 26:case 27:case 5:El(t);break;case 4:at();break;case 31:t.memoizedState!==null&&en(t);break;case 13:en(t);break;case 19:Y(pt);break;case 10:In(t.type);break;case 22:case 23:en(t),mu(),e!==null&&Y(sl);break;case 24:In(vt)}}function Vr(e,t){try{var n=t.updateQueue,l=n!==null?n.lastEffect:null;if(l!==null){var o=l.next;n=o;do{if((n.tag&e)===e){l=void 0;var u=n.create,p=n.inst;l=u(),p.destroy=l}n=n.next}while(n!==o)}}catch(v){Qe(t,t.return,v)}}function Na(e,t,n){try{var l=t.updateQueue,o=l!==null?l.lastEffect:null;if(o!==null){var u=o.next;l=u;do{if((l.tag&e)===e){var p=l.inst,v=p.destroy;if(v!==void 0){p.destroy=void 0,o=t;var O=n,U=v;try{U()}catch(V){Qe(o,O,V)}}}l=l.next}while(l!==u)}}catch(V){Qe(t,t.return,V)}}function Lh(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{Rd(t,n)}catch(l){Qe(e,e.return,l)}}}function Bh(e,t,n){n.props=hl(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(l){Qe(e,t,l)}}function Zr(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof n=="function"?e.refCleanup=n(l):n.current=l}}catch(o){Qe(e,t,o)}}function Ln(e,t){var n=e.ref,l=e.refCleanup;if(n!==null)if(typeof l=="function")try{l()}catch(o){Qe(e,t,o)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(o){Qe(e,t,o)}else n.current=null}function qh(e){var t=e.type,n=e.memoizedProps,l=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&l.focus();break e;case"img":n.src?l.src=n.src:n.srcSet&&(l.srcset=n.srcSet)}}catch(o){Qe(e,e.return,o)}}function Qu(e,t,n){try{var l=e.stateNode;ub(l,e.type,n,t),l[ie]=t}catch(o){Qe(e,e.return,o)}}function Yh(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ma(e.type)||e.tag===4}function Ku(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Yh(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ma(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ju(e,t,n){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Kn));else if(l!==4&&(l===27&&Ma(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(Ju(e,t,n),e=e.sibling;e!==null;)Ju(e,t,n),e=e.sibling}function yo(e,t,n){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(l!==4&&(l===27&&Ma(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(yo(e,t,n),e=e.sibling;e!==null;)yo(e,t,n),e=e.sibling}function Gh(e){var t=e.stateNode,n=e.memoizedProps;try{for(var l=e.type,o=t.attributes;o.length;)t.removeAttributeNode(o[0]);zt(t,l,n),t[ae]=e,t[ie]=n}catch(u){Qe(e,e.return,u)}}var la=!1,wt=!1,Fu=!1,Xh=typeof WeakSet=="function"?WeakSet:Set,Nt=null;function Gg(e,t){if(e=e.containerInfo,bc=qo,e=td(e),Xs(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var l=n.getSelection&&n.getSelection();if(l&&l.rangeCount!==0){n=l.anchorNode;var o=l.anchorOffset,u=l.focusNode;l=l.focusOffset;try{n.nodeType,u.nodeType}catch{n=null;break e}var p=0,v=-1,O=-1,U=0,V=0,P=e,H=null;t:for(;;){for(var q;P!==n||o!==0&&P.nodeType!==3||(v=p+o),P!==u||l!==0&&P.nodeType!==3||(O=p+l),P.nodeType===3&&(p+=P.nodeValue.length),(q=P.firstChild)!==null;)H=P,P=q;for(;;){if(P===e)break t;if(H===n&&++U===o&&(v=p),H===u&&++V===l&&(O=p),(q=P.nextSibling)!==null)break;P=H,H=P.parentNode}P=q}n=v===-1||O===-1?null:{start:v,end:O}}else n=null}n=n||{start:0,end:0}}else n=null;for(vc={focusedElem:e,selectionRange:n},qo=!1,Nt=t;Nt!==null;)if(t=Nt,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Nt=e;else for(;Nt!==null;){switch(t=Nt,u=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(n=0;n<e.length;n++)o=e[n],o.ref.impl=o.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&u!==null){e=void 0,n=t,o=u.memoizedProps,u=u.memoizedState,l=n.stateNode;try{var se=hl(n.type,o);e=l.getSnapshotBeforeUpdate(se,u),l.__reactInternalSnapshotBeforeUpdate=e}catch(we){Qe(n,n.return,we)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)wc(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":wc(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=t.sibling,e!==null){e.return=t.return,Nt=e;break}Nt=t.return}}function Vh(e,t,n){var l=n.flags;switch(n.tag){case 0:case 11:case 15:ia(e,n),l&4&&Vr(5,n);break;case 1:if(ia(e,n),l&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(p){Qe(n,n.return,p)}else{var o=hl(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(o,t,e.__reactInternalSnapshotBeforeUpdate)}catch(p){Qe(n,n.return,p)}}l&64&&Lh(n),l&512&&Zr(n,n.return);break;case 3:if(ia(e,n),l&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{Rd(e,t)}catch(p){Qe(n,n.return,p)}}break;case 27:t===null&&l&4&&Gh(n);case 26:case 5:ia(e,n),t===null&&l&4&&qh(n),l&512&&Zr(n,n.return);break;case 12:ia(e,n);break;case 31:ia(e,n),l&4&&Qh(e,n);break;case 13:ia(e,n),l&4&&Kh(e,n),l&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=$g.bind(null,n),bb(e,n))));break;case 22:if(l=n.memoizedState!==null||la,!l){t=t!==null&&t.memoizedState!==null||wt,o=la;var u=wt;la=l,(wt=t)&&!u?oa(e,n,(n.subtreeFlags&8772)!==0):ia(e,n),la=o,wt=u}break;case 30:break;default:ia(e,n)}}function Zh(e){var t=e.alternate;t!==null&&(e.alternate=null,Zh(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&it(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var tt=null,Yt=!1;function ra(e,t,n){for(n=n.child;n!==null;)Ph(e,t,n),n=n.sibling}function Ph(e,t,n){if(lt&&typeof lt.onCommitFiberUnmount=="function")try{lt.onCommitFiberUnmount(Pa,n)}catch{}switch(n.tag){case 26:wt||Ln(n,t),ra(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:wt||Ln(n,t);var l=tt,o=Yt;Ma(n.type)&&(tt=n.stateNode,Yt=!1),ra(e,t,n),ei(n.stateNode),tt=l,Yt=o;break;case 5:wt||Ln(n,t);case 6:if(l=tt,o=Yt,tt=null,ra(e,t,n),tt=l,Yt=o,tt!==null)if(Yt)try{(tt.nodeType===9?tt.body:tt.nodeName==="HTML"?tt.ownerDocument.body:tt).removeChild(n.stateNode)}catch(u){Qe(n,t,u)}else try{tt.removeChild(n.stateNode)}catch(u){Qe(n,t,u)}break;case 18:tt!==null&&(Yt?(e=tt,L0(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),lr(e)):L0(tt,n.stateNode));break;case 4:l=tt,o=Yt,tt=n.stateNode.containerInfo,Yt=!0,ra(e,t,n),tt=l,Yt=o;break;case 0:case 11:case 14:case 15:Na(2,n,t),wt||Na(4,n,t),ra(e,t,n);break;case 1:wt||(Ln(n,t),l=n.stateNode,typeof l.componentWillUnmount=="function"&&Bh(n,t,l)),ra(e,t,n);break;case 21:ra(e,t,n);break;case 22:wt=(l=wt)||n.memoizedState!==null,ra(e,t,n),wt=l;break;default:ra(e,t,n)}}function Qh(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{lr(e)}catch(n){Qe(t,t.return,n)}}}function Kh(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{lr(e)}catch(n){Qe(t,t.return,n)}}function Xg(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Xh),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Xh),t;default:throw Error(s(435,e.tag))}}function xo(e,t){var n=Xg(e);t.forEach(function(l){if(!n.has(l)){n.add(l);var o=Wg.bind(null,e,l);l.then(o,o)}})}function Gt(e,t){var n=t.deletions;if(n!==null)for(var l=0;l<n.length;l++){var o=n[l],u=e,p=t,v=p;e:for(;v!==null;){switch(v.tag){case 27:if(Ma(v.type)){tt=v.stateNode,Yt=!1;break e}break;case 5:tt=v.stateNode,Yt=!1;break e;case 3:case 4:tt=v.stateNode.containerInfo,Yt=!0;break e}v=v.return}if(tt===null)throw Error(s(160));Ph(u,p,o),tt=null,Yt=!1,u=o.alternate,u!==null&&(u.return=null),o.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Jh(t,e),t=t.sibling}var _n=null;function Jh(e,t){var n=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Gt(t,e),Xt(e),l&4&&(Na(3,e,e.return),Vr(3,e),Na(5,e,e.return));break;case 1:Gt(t,e),Xt(e),l&512&&(wt||n===null||Ln(n,n.return)),l&64&&la&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?l:n.concat(l))));break;case 26:var o=_n;if(Gt(t,e),Xt(e),l&512&&(wt||n===null||Ln(n,n.return)),l&4){var u=n!==null?n.memoizedState:null;if(l=e.memoizedState,n===null)if(l===null)if(e.stateNode===null){e:{l=e.type,n=e.memoizedProps,o=o.ownerDocument||o;t:switch(l){case"title":u=o.getElementsByTagName("title")[0],(!u||u[rt]||u[ae]||u.namespaceURI==="http://www.w3.org/2000/svg"||u.hasAttribute("itemprop"))&&(u=o.createElement(l),o.head.insertBefore(u,o.querySelector("head > title"))),zt(u,l,n),u[ae]=e,et(u),l=u;break e;case"link":var p=J0("link","href",o).get(l+(n.href||""));if(p){for(var v=0;v<p.length;v++)if(u=p[v],u.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&u.getAttribute("rel")===(n.rel==null?null:n.rel)&&u.getAttribute("title")===(n.title==null?null:n.title)&&u.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){p.splice(v,1);break t}}u=o.createElement(l),zt(u,l,n),o.head.appendChild(u);break;case"meta":if(p=J0("meta","content",o).get(l+(n.content||""))){for(v=0;v<p.length;v++)if(u=p[v],u.getAttribute("content")===(n.content==null?null:""+n.content)&&u.getAttribute("name")===(n.name==null?null:n.name)&&u.getAttribute("property")===(n.property==null?null:n.property)&&u.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&u.getAttribute("charset")===(n.charSet==null?null:n.charSet)){p.splice(v,1);break t}}u=o.createElement(l),zt(u,l,n),o.head.appendChild(u);break;default:throw Error(s(468,l))}u[ae]=e,et(u),l=u}e.stateNode=l}else F0(o,e.type,e.stateNode);else e.stateNode=K0(o,l,e.memoizedProps);else u!==l?(u===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):u.count--,l===null?F0(o,e.type,e.stateNode):K0(o,l,e.memoizedProps)):l===null&&e.stateNode!==null&&Qu(e,e.memoizedProps,n.memoizedProps)}break;case 27:Gt(t,e),Xt(e),l&512&&(wt||n===null||Ln(n,n.return)),n!==null&&l&4&&Qu(e,e.memoizedProps,n.memoizedProps);break;case 5:if(Gt(t,e),Xt(e),l&512&&(wt||n===null||Ln(n,n.return)),e.flags&32){o=e.stateNode;try{Tl(o,"")}catch(se){Qe(e,e.return,se)}}l&4&&e.stateNode!=null&&(o=e.memoizedProps,Qu(e,o,n!==null?n.memoizedProps:o)),l&1024&&(Fu=!0);break;case 6:if(Gt(t,e),Xt(e),l&4){if(e.stateNode===null)throw Error(s(162));l=e.memoizedProps,n=e.stateNode;try{n.nodeValue=l}catch(se){Qe(e,e.return,se)}}break;case 3:if(Uo=null,o=_n,_n=Do(t.containerInfo),Gt(t,e),_n=o,Xt(e),l&4&&n!==null&&n.memoizedState.isDehydrated)try{lr(t.containerInfo)}catch(se){Qe(e,e.return,se)}Fu&&(Fu=!1,Fh(e));break;case 4:l=_n,_n=Do(e.stateNode.containerInfo),Gt(t,e),Xt(e),_n=l;break;case 12:Gt(t,e),Xt(e);break;case 31:Gt(t,e),Xt(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,xo(e,l)));break;case 13:Gt(t,e),Xt(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(So=dt()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,xo(e,l)));break;case 22:o=e.memoizedState!==null;var O=n!==null&&n.memoizedState!==null,U=la,V=wt;if(la=U||o,wt=V||O,Gt(t,e),wt=V,la=U,Xt(e),l&8192)e:for(t=e.stateNode,t._visibility=o?t._visibility&-2:t._visibility|1,o&&(n===null||O||la||wt||pl(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){O=n=t;try{if(u=O.stateNode,o)p=u.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none";else{v=O.stateNode;var P=O.memoizedProps.style,H=P!=null&&P.hasOwnProperty("display")?P.display:null;v.style.display=H==null||typeof H=="boolean"?"":(""+H).trim()}}catch(se){Qe(O,O.return,se)}}}else if(t.tag===6){if(n===null){O=t;try{O.stateNode.nodeValue=o?"":O.memoizedProps}catch(se){Qe(O,O.return,se)}}}else if(t.tag===18){if(n===null){O=t;try{var q=O.stateNode;o?B0(q,!0):B0(O.stateNode,!1)}catch(se){Qe(O,O.return,se)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}l&4&&(l=e.updateQueue,l!==null&&(n=l.retryQueue,n!==null&&(l.retryQueue=null,xo(e,n))));break;case 19:Gt(t,e),Xt(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,xo(e,l)));break;case 30:break;case 21:break;default:Gt(t,e),Xt(e)}}function Xt(e){var t=e.flags;if(t&2){try{for(var n,l=e.return;l!==null;){if(Yh(l)){n=l;break}l=l.return}if(n==null)throw Error(s(160));switch(n.tag){case 27:var o=n.stateNode,u=Ku(e);yo(e,u,o);break;case 5:var p=n.stateNode;n.flags&32&&(Tl(p,""),n.flags&=-33);var v=Ku(e);yo(e,v,p);break;case 3:case 4:var O=n.stateNode.containerInfo,U=Ku(e);Ju(e,U,O);break;default:throw Error(s(161))}}catch(V){Qe(e,e.return,V)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Fh(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Fh(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function ia(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Vh(e,t.alternate,t),t=t.sibling}function pl(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Na(4,t,t.return),pl(t);break;case 1:Ln(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&Bh(t,t.return,n),pl(t);break;case 27:ei(t.stateNode);case 26:case 5:Ln(t,t.return),pl(t);break;case 22:t.memoizedState===null&&pl(t);break;case 30:pl(t);break;default:pl(t)}e=e.sibling}}function oa(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var l=t.alternate,o=e,u=t,p=u.flags;switch(u.tag){case 0:case 11:case 15:oa(o,u,n),Vr(4,u);break;case 1:if(oa(o,u,n),l=u,o=l.stateNode,typeof o.componentDidMount=="function")try{o.componentDidMount()}catch(U){Qe(l,l.return,U)}if(l=u,o=l.updateQueue,o!==null){var v=l.stateNode;try{var O=o.shared.hiddenCallbacks;if(O!==null)for(o.shared.hiddenCallbacks=null,o=0;o<O.length;o++)Td(O[o],v)}catch(U){Qe(l,l.return,U)}}n&&p&64&&Lh(u),Zr(u,u.return);break;case 27:Gh(u);case 26:case 5:oa(o,u,n),n&&l===null&&p&4&&qh(u),Zr(u,u.return);break;case 12:oa(o,u,n);break;case 31:oa(o,u,n),n&&p&4&&Qh(o,u);break;case 13:oa(o,u,n),n&&p&4&&Kh(o,u);break;case 22:u.memoizedState===null&&oa(o,u,n),Zr(u,u.return);break;case 30:break;default:oa(o,u,n)}t=t.sibling}}function $u(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&zr(n))}function Wu(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&zr(e))}function Cn(e,t,n,l){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)$h(e,t,n,l),t=t.sibling}function $h(e,t,n,l){var o=t.flags;switch(t.tag){case 0:case 11:case 15:Cn(e,t,n,l),o&2048&&Vr(9,t);break;case 1:Cn(e,t,n,l);break;case 3:Cn(e,t,n,l),o&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&zr(e)));break;case 12:if(o&2048){Cn(e,t,n,l),e=t.stateNode;try{var u=t.memoizedProps,p=u.id,v=u.onPostCommit;typeof v=="function"&&v(p,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(O){Qe(t,t.return,O)}}else Cn(e,t,n,l);break;case 31:Cn(e,t,n,l);break;case 13:Cn(e,t,n,l);break;case 23:break;case 22:u=t.stateNode,p=t.alternate,t.memoizedState!==null?u._visibility&2?Cn(e,t,n,l):Pr(e,t):u._visibility&2?Cn(e,t,n,l):(u._visibility|=2,Ql(e,t,n,l,(t.subtreeFlags&10256)!==0||!1)),o&2048&&$u(p,t);break;case 24:Cn(e,t,n,l),o&2048&&Wu(t.alternate,t);break;default:Cn(e,t,n,l)}}function Ql(e,t,n,l,o){for(o=o&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var u=e,p=t,v=n,O=l,U=p.flags;switch(p.tag){case 0:case 11:case 15:Ql(u,p,v,O,o),Vr(8,p);break;case 23:break;case 22:var V=p.stateNode;p.memoizedState!==null?V._visibility&2?Ql(u,p,v,O,o):Pr(u,p):(V._visibility|=2,Ql(u,p,v,O,o)),o&&U&2048&&$u(p.alternate,p);break;case 24:Ql(u,p,v,O,o),o&&U&2048&&Wu(p.alternate,p);break;default:Ql(u,p,v,O,o)}t=t.sibling}}function Pr(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,l=t,o=l.flags;switch(l.tag){case 22:Pr(n,l),o&2048&&$u(l.alternate,l);break;case 24:Pr(n,l),o&2048&&Wu(l.alternate,l);break;default:Pr(n,l)}t=t.sibling}}var Qr=8192;function Kl(e,t,n){if(e.subtreeFlags&Qr)for(e=e.child;e!==null;)Wh(e,t,n),e=e.sibling}function Wh(e,t,n){switch(e.tag){case 26:Kl(e,t,n),e.flags&Qr&&e.memoizedState!==null&&_b(n,_n,e.memoizedState,e.memoizedProps);break;case 5:Kl(e,t,n);break;case 3:case 4:var l=_n;_n=Do(e.stateNode.containerInfo),Kl(e,t,n),_n=l;break;case 22:e.memoizedState===null&&(l=e.alternate,l!==null&&l.memoizedState!==null?(l=Qr,Qr=16777216,Kl(e,t,n),Qr=l):Kl(e,t,n));break;default:Kl(e,t,n)}}function Ih(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Kr(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var l=t[n];Nt=l,t0(l,e)}Ih(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)e0(e),e=e.sibling}function e0(e){switch(e.tag){case 0:case 11:case 15:Kr(e),e.flags&2048&&Na(9,e,e.return);break;case 3:Kr(e);break;case 12:Kr(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,wo(e)):Kr(e);break;default:Kr(e)}}function wo(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var l=t[n];Nt=l,t0(l,e)}Ih(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Na(8,t,t.return),wo(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,wo(t));break;default:wo(t)}e=e.sibling}}function t0(e,t){for(;Nt!==null;){var n=Nt;switch(n.tag){case 0:case 11:case 15:Na(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var l=n.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:zr(n.memoizedState.cache)}if(l=n.child,l!==null)l.return=n,Nt=l;else e:for(n=e;Nt!==null;){l=Nt;var o=l.sibling,u=l.return;if(Zh(l),l===n){Nt=null;break e}if(o!==null){o.return=u,Nt=o;break e}Nt=u}}}var Vg={getCacheForType:function(e){var t=_t(vt),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return _t(vt).controller.signal}},Zg=typeof WeakMap=="function"?WeakMap:Map,Ze=0,$e=null,Ae=null,De=0,Pe=0,tn=null,Ta=!1,Jl=!1,Iu=!1,sa=0,ut=0,Ra=0,ml=0,ec=0,nn=0,Fl=0,Jr=null,Vt=null,tc=!1,So=0,n0=0,Eo=1/0,Oo=null,_a=null,Et=0,Ca=null,$l=null,ua=0,nc=0,ac=null,a0=null,Fr=0,lc=null;function an(){return(Ze&2)!==0&&De!==0?De&-De:D.T!==null?cc():te()}function l0(){if(nn===0)if((De&536870912)===0||Ye){var e=Qa;Qa<<=1,(Qa&3932160)===0&&(Qa=262144),nn=e}else nn=536870912;return e=It.current,e!==null&&(e.flags|=32),nn}function Zt(e,t,n){(e===$e&&(Pe===2||Pe===9)||e.cancelPendingCommit!==null)&&(Wl(e,0),za(e,De,nn,!1)),ma(e,n),((Ze&2)===0||e!==$e)&&(e===$e&&((Ze&2)===0&&(ml|=n),ut===4&&za(e,De,nn,!1)),Bn(e))}function r0(e,t,n){if((Ze&6)!==0)throw Error(s(327));var l=!n&&(t&127)===0&&(t&e.expiredLanes)===0||Ja(e,t),o=l?Kg(e,t):ic(e,t,!0),u=l;do{if(o===0){Jl&&!l&&za(e,t,0,!1);break}else{if(n=e.current.alternate,u&&!Pg(n)){o=ic(e,t,!1),u=!1;continue}if(o===2){if(u=t,e.errorRecoveryDisabledLanes&u)var p=0;else p=e.pendingLanes&-536870913,p=p!==0?p:p&536870912?536870912:0;if(p!==0){t=p;e:{var v=e;o=Jr;var O=v.current.memoizedState.isDehydrated;if(O&&(Wl(v,p).flags|=256),p=ic(v,p,!1),p!==2){if(Iu&&!O){v.errorRecoveryDisabledLanes|=u,ml|=u,o=4;break e}u=Vt,Vt=o,u!==null&&(Vt===null?Vt=u:Vt.push.apply(Vt,u))}o=p}if(u=!1,o!==2)continue}}if(o===1){Wl(e,0),za(e,t,0,!0);break}e:{switch(l=e,u=o,u){case 0:case 1:throw Error(s(345));case 4:if((t&4194048)!==t)break;case 6:za(l,t,nn,!Ta);break e;case 2:Vt=null;break;case 3:case 5:break;default:throw Error(s(329))}if((t&62914560)===t&&(o=So+300-dt(),10<o)){if(za(l,t,nn,!Ta),Ka(l,0,!0)!==0)break e;ua=t,l.timeoutHandle=U0(i0.bind(null,l,n,Vt,Oo,tc,t,nn,ml,Fl,Ta,u,"Throttled",-0,0),o);break e}i0(l,n,Vt,Oo,tc,t,nn,ml,Fl,Ta,u,null,-0,0)}}break}while(!0);Bn(e)}function i0(e,t,n,l,o,u,p,v,O,U,V,P,H,q){if(e.timeoutHandle=-1,P=t.subtreeFlags,P&8192||(P&16785408)===16785408){P={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Kn},Wh(t,u,P);var se=(u&62914560)===u?So-dt():(u&4194048)===u?n0-dt():0;if(se=Cb(P,se),se!==null){ua=u,e.cancelPendingCommit=se(p0.bind(null,e,t,u,n,l,o,p,v,O,V,P,null,H,q)),za(e,u,p,!U);return}}p0(e,t,u,n,l,o,p,v,O)}function Pg(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var l=0;l<n.length;l++){var o=n[l],u=o.getSnapshot;o=o.value;try{if(!$t(u(),o))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function za(e,t,n,l){t&=~ec,t&=~ml,e.suspendedLanes|=t,e.pingedLanes&=~t,l&&(e.warmLanes|=t),l=e.expirationTimes;for(var o=t;0<o;){var u=31-At(o),p=1<<u;l[u]=-1,o&=~p}n!==0&&Di(e,n,t)}function jo(){return(Ze&6)===0?($r(0),!1):!0}function rc(){if(Ae!==null){if(Pe===0)var e=Ae.return;else e=Ae,Wn=il=null,wu(e),Gl=null,Mr=0,e=Ae;for(;e!==null;)Hh(e.alternate,e),e=e.return;Ae=null}}function Wl(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,db(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),ua=0,rc(),$e=e,Ae=n=Fn(e.current,null),De=t,Pe=0,tn=null,Ta=!1,Jl=Ja(e,t),Iu=!1,Fl=nn=ec=ml=Ra=ut=0,Vt=Jr=null,tc=!1,(t&8)!==0&&(t|=t&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=t;0<l;){var o=31-At(l),u=1<<o;t|=e[o],l&=~u}return sa=t,Zi(),n}function o0(e,t){_e=null,D.H=Yr,t===Yl||t===Ii?(t=Ed(),Pe=3):t===uu?(t=Ed(),Pe=4):Pe=t===Hu?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,tn=t,Ae===null&&(ut=1,po(e,fn(t,e.current)))}function s0(){var e=It.current;return e===null?!0:(De&4194048)===De?mn===null:(De&62914560)===De||(De&536870912)!==0?e===mn:!1}function u0(){var e=D.H;return D.H=Yr,e===null?Yr:e}function c0(){var e=D.A;return D.A=Vg,e}function No(){ut=4,Ta||(De&4194048)!==De&&It.current!==null||(Jl=!0),(Ra&134217727)===0&&(ml&134217727)===0||$e===null||za($e,De,nn,!1)}function ic(e,t,n){var l=Ze;Ze|=2;var o=u0(),u=c0();($e!==e||De!==t)&&(Oo=null,Wl(e,t)),t=!1;var p=ut;e:do try{if(Pe!==0&&Ae!==null){var v=Ae,O=tn;switch(Pe){case 8:rc(),p=6;break e;case 3:case 2:case 9:case 6:It.current===null&&(t=!0);var U=Pe;if(Pe=0,tn=null,Il(e,v,O,U),n&&Jl){p=0;break e}break;default:U=Pe,Pe=0,tn=null,Il(e,v,O,U)}}Qg(),p=ut;break}catch(V){o0(e,V)}while(!0);return t&&e.shellSuspendCounter++,Wn=il=null,Ze=l,D.H=o,D.A=u,Ae===null&&($e=null,De=0,Zi()),p}function Qg(){for(;Ae!==null;)f0(Ae)}function Kg(e,t){var n=Ze;Ze|=2;var l=u0(),o=c0();$e!==e||De!==t?(Oo=null,Eo=dt()+500,Wl(e,t)):Jl=Ja(e,t);e:do try{if(Pe!==0&&Ae!==null){t=Ae;var u=tn;t:switch(Pe){case 1:Pe=0,tn=null,Il(e,t,u,1);break;case 2:case 9:if(wd(u)){Pe=0,tn=null,d0(t);break}t=function(){Pe!==2&&Pe!==9||$e!==e||(Pe=7),Bn(e)},u.then(t,t);break e;case 3:Pe=7;break e;case 4:Pe=5;break e;case 7:wd(u)?(Pe=0,tn=null,d0(t)):(Pe=0,tn=null,Il(e,t,u,7));break;case 5:var p=null;switch(Ae.tag){case 26:p=Ae.memoizedState;case 5:case 27:var v=Ae;if(p?$0(p):v.stateNode.complete){Pe=0,tn=null;var O=v.sibling;if(O!==null)Ae=O;else{var U=v.return;U!==null?(Ae=U,To(U)):Ae=null}break t}}Pe=0,tn=null,Il(e,t,u,5);break;case 6:Pe=0,tn=null,Il(e,t,u,6);break;case 8:rc(),ut=6;break e;default:throw Error(s(462))}}Jg();break}catch(V){o0(e,V)}while(!0);return Wn=il=null,D.H=l,D.A=o,Ze=n,Ae!==null?0:($e=null,De=0,Zi(),ut)}function Jg(){for(;Ae!==null&&!Es();)f0(Ae)}function f0(e){var t=kh(e.alternate,e,sa);e.memoizedProps=e.pendingProps,t===null?To(e):Ae=t}function d0(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=_h(n,t,t.pendingProps,t.type,void 0,De);break;case 11:t=_h(n,t,t.pendingProps,t.type.render,t.ref,De);break;case 5:wu(t);default:Hh(n,t),t=Ae=cd(t,sa),t=kh(n,t,sa)}e.memoizedProps=e.pendingProps,t===null?To(e):Ae=t}function Il(e,t,n,l){Wn=il=null,wu(t),Gl=null,Mr=0;var o=t.return;try{if(Hg(e,o,t,n,De)){ut=1,po(e,fn(n,e.current)),Ae=null;return}}catch(u){if(o!==null)throw Ae=o,u;ut=1,po(e,fn(n,e.current)),Ae=null;return}t.flags&32768?(Ye||l===1?e=!0:Jl||(De&536870912)!==0?e=!1:(Ta=e=!0,(l===2||l===9||l===3||l===6)&&(l=It.current,l!==null&&l.tag===13&&(l.flags|=16384))),h0(t,e)):To(t)}function To(e){var t=e;do{if((t.flags&32768)!==0){h0(t,Ta);return}e=t.return;var n=qg(t.alternate,t,sa);if(n!==null){Ae=n;return}if(t=t.sibling,t!==null){Ae=t;return}Ae=t=e}while(t!==null);ut===0&&(ut=5)}function h0(e,t){do{var n=Yg(e.alternate,e);if(n!==null){n.flags&=32767,Ae=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){Ae=e;return}Ae=e=n}while(e!==null);ut=6,Ae=null}function p0(e,t,n,l,o,u,p,v,O){e.cancelPendingCommit=null;do Ro();while(Et!==0);if((Ze&6)!==0)throw Error(s(327));if(t!==null){if(t===e.current)throw Error(s(177));if(u=t.lanes|t.childLanes,u|=Ks,Ts(e,n,u,p,v,O),e===$e&&(Ae=$e=null,De=0),$l=t,Ca=e,ua=n,nc=u,ac=o,a0=l,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Ig(Lt,function(){return y0(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||l){l=D.T,D.T=null,o=$.p,$.p=2,p=Ze,Ze|=4;try{Gg(e,t,n)}finally{Ze=p,$.p=o,D.T=l}}Et=1,m0(),g0(),b0()}}function m0(){if(Et===1){Et=0;var e=Ca,t=$l,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=D.T,D.T=null;var l=$.p;$.p=2;var o=Ze;Ze|=4;try{Jh(t,e);var u=vc,p=td(e.containerInfo),v=u.focusedElem,O=u.selectionRange;if(p!==v&&v&&v.ownerDocument&&ed(v.ownerDocument.documentElement,v)){if(O!==null&&Xs(v)){var U=O.start,V=O.end;if(V===void 0&&(V=U),"selectionStart"in v)v.selectionStart=U,v.selectionEnd=Math.min(V,v.value.length);else{var P=v.ownerDocument||document,H=P&&P.defaultView||window;if(H.getSelection){var q=H.getSelection(),se=v.textContent.length,we=Math.min(O.start,se),Fe=O.end===void 0?we:Math.min(O.end,se);!q.extend&&we>Fe&&(p=Fe,Fe=we,we=p);var A=If(v,we),_=If(v,Fe);if(A&&_&&(q.rangeCount!==1||q.anchorNode!==A.node||q.anchorOffset!==A.offset||q.focusNode!==_.node||q.focusOffset!==_.offset)){var k=P.createRange();k.setStart(A.node,A.offset),q.removeAllRanges(),we>Fe?(q.addRange(k),q.extend(_.node,_.offset)):(k.setEnd(_.node,_.offset),q.addRange(k))}}}}for(P=[],q=v;q=q.parentNode;)q.nodeType===1&&P.push({element:q,left:q.scrollLeft,top:q.scrollTop});for(typeof v.focus=="function"&&v.focus(),v=0;v<P.length;v++){var Z=P[v];Z.element.scrollLeft=Z.left,Z.element.scrollTop=Z.top}}qo=!!bc,vc=bc=null}finally{Ze=o,$.p=l,D.T=n}}e.current=t,Et=2}}function g0(){if(Et===2){Et=0;var e=Ca,t=$l,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=D.T,D.T=null;var l=$.p;$.p=2;var o=Ze;Ze|=4;try{Vh(e,t.alternate,t)}finally{Ze=o,$.p=l,D.T=n}}Et=3}}function b0(){if(Et===4||Et===3){Et=0,Os();var e=Ca,t=$l,n=ua,l=a0;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Et=5:(Et=0,$l=Ca=null,v0(e,e.pendingLanes));var o=e.pendingLanes;if(o===0&&(_a=null),F(n),t=t.stateNode,lt&&typeof lt.onCommitFiberRoot=="function")try{lt.onCommitFiberRoot(Pa,t,void 0,(t.current.flags&128)===128)}catch{}if(l!==null){t=D.T,o=$.p,$.p=2,D.T=null;try{for(var u=e.onRecoverableError,p=0;p<l.length;p++){var v=l[p];u(v.value,{componentStack:v.stack})}}finally{D.T=t,$.p=o}}(ua&3)!==0&&Ro(),Bn(e),o=e.pendingLanes,(n&261930)!==0&&(o&42)!==0?e===lc?Fr++:(Fr=0,lc=e):Fr=0,$r(0)}}function v0(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,zr(t)))}function Ro(){return m0(),g0(),b0(),y0()}function y0(){if(Et!==5)return!1;var e=Ca,t=nc;nc=0;var n=F(ua),l=D.T,o=$.p;try{$.p=32>n?32:n,D.T=null,n=ac,ac=null;var u=Ca,p=ua;if(Et=0,$l=Ca=null,ua=0,(Ze&6)!==0)throw Error(s(331));var v=Ze;if(Ze|=4,e0(u.current),$h(u,u.current,p,n),Ze=v,$r(0,!1),lt&&typeof lt.onPostCommitFiberRoot=="function")try{lt.onPostCommitFiberRoot(Pa,u)}catch{}return!0}finally{$.p=o,D.T=l,v0(e,t)}}function x0(e,t,n){t=fn(n,t),t=Uu(e.stateNode,t,2),e=Ea(e,t,2),e!==null&&(ma(e,2),Bn(e))}function Qe(e,t,n){if(e.tag===3)x0(e,e,n);else for(;t!==null;){if(t.tag===3){x0(t,e,n);break}else if(t.tag===1){var l=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(_a===null||!_a.has(l))){e=fn(n,e),n=wh(2),l=Ea(t,n,2),l!==null&&(Sh(n,l,t,e),ma(l,2),Bn(l));break}}t=t.return}}function oc(e,t,n){var l=e.pingCache;if(l===null){l=e.pingCache=new Zg;var o=new Set;l.set(t,o)}else o=l.get(t),o===void 0&&(o=new Set,l.set(t,o));o.has(n)||(Iu=!0,o.add(n),e=Fg.bind(null,e,t,n),t.then(e,e))}function Fg(e,t,n){var l=e.pingCache;l!==null&&l.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,$e===e&&(De&n)===n&&(ut===4||ut===3&&(De&62914560)===De&&300>dt()-So?(Ze&2)===0&&Wl(e,0):ec|=n,Fl===De&&(Fl=0)),Bn(e)}function w0(e,t){t===0&&(t=Fa()),e=al(e,t),e!==null&&(ma(e,t),Bn(e))}function $g(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),w0(e,n)}function Wg(e,t){var n=0;switch(e.tag){case 31:case 13:var l=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(s(314))}l!==null&&l.delete(t),w0(e,n)}function Ig(e,t){return pr(e,t)}var _o=null,er=null,sc=!1,Co=!1,uc=!1,Aa=0;function Bn(e){e!==er&&e.next===null&&(er===null?_o=er=e:er=er.next=e),Co=!0,sc||(sc=!0,tb())}function $r(e,t){if(!uc&&Co){uc=!0;do for(var n=!1,l=_o;l!==null;){if(e!==0){var o=l.pendingLanes;if(o===0)var u=0;else{var p=l.suspendedLanes,v=l.pingedLanes;u=(1<<31-At(42|e)+1)-1,u&=o&~(p&~v),u=u&201326741?u&201326741|1:u?u|2:0}u!==0&&(n=!0,j0(l,u))}else u=De,u=Ka(l,l===$e?u:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(u&3)===0||Ja(l,u)||(n=!0,j0(l,u));l=l.next}while(n);uc=!1}}function eb(){S0()}function S0(){Co=sc=!1;var e=0;Aa!==0&&fb()&&(e=Aa);for(var t=dt(),n=null,l=_o;l!==null;){var o=l.next,u=E0(l,t);u===0?(l.next=null,n===null?_o=o:n.next=o,o===null&&(er=n)):(n=l,(e!==0||(u&3)!==0)&&(Co=!0)),l=o}Et!==0&&Et!==5||$r(e),Aa!==0&&(Aa=0)}function E0(e,t){for(var n=e.suspendedLanes,l=e.pingedLanes,o=e.expirationTimes,u=e.pendingLanes&-62914561;0<u;){var p=31-At(u),v=1<<p,O=o[p];O===-1?((v&n)===0||(v&l)!==0)&&(o[p]=Mi(v,t)):O<=t&&(e.expiredLanes|=v),u&=~v}if(t=$e,n=De,n=Ka(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,n===0||e===t&&(Pe===2||Pe===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&mr(l),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||Ja(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(l!==null&&mr(l),F(n)){case 2:case 8:n=jl;break;case 32:n=Lt;break;case 268435456:n=br;break;default:n=Lt}return l=O0.bind(null,e),n=pr(n,l),e.callbackPriority=t,e.callbackNode=n,t}return l!==null&&l!==null&&mr(l),e.callbackPriority=2,e.callbackNode=null,2}function O0(e,t){if(Et!==0&&Et!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Ro()&&e.callbackNode!==n)return null;var l=De;return l=Ka(e,e===$e?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(r0(e,l,t),E0(e,dt()),e.callbackNode!=null&&e.callbackNode===n?O0.bind(null,e):null)}function j0(e,t){if(Ro())return null;r0(e,t,!0)}function tb(){hb(function(){(Ze&6)!==0?pr(gr,eb):S0()})}function cc(){if(Aa===0){var e=Bl;e===0&&(e=Zn,Zn<<=1,(Zn&261888)===0&&(Zn=256)),Aa=e}return Aa}function N0(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Hi(""+e)}function T0(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function nb(e,t,n,l,o){if(t==="submit"&&n&&n.stateNode===o){var u=N0((o[ie]||null).action),p=l.submitter;p&&(t=(t=p[ie]||null)?N0(t.formAction):p.getAttribute("formAction"),t!==null&&(u=t,p=null));var v=new Yi("action","action",null,l,o);e.push({event:v,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Aa!==0){var O=p?T0(o,p):new FormData(o);Cu(n,{pending:!0,data:O,method:o.method,action:u},null,O)}}else typeof u=="function"&&(v.preventDefault(),O=p?T0(o,p):new FormData(o),Cu(n,{pending:!0,data:O,method:o.method,action:u},u,O))},currentTarget:o}]})}}for(var fc=0;fc<Qs.length;fc++){var dc=Qs[fc],ab=dc.toLowerCase(),lb=dc[0].toUpperCase()+dc.slice(1);Rn(ab,"on"+lb)}Rn(ld,"onAnimationEnd"),Rn(rd,"onAnimationIteration"),Rn(id,"onAnimationStart"),Rn("dblclick","onDoubleClick"),Rn("focusin","onFocus"),Rn("focusout","onBlur"),Rn(xg,"onTransitionRun"),Rn(wg,"onTransitionStart"),Rn(Sg,"onTransitionCancel"),Rn(od,"onTransitionEnd"),sn("onMouseEnter",["mouseout","mouseover"]),sn("onMouseLeave",["mouseout","mouseover"]),sn("onPointerEnter",["pointerout","pointerover"]),sn("onPointerLeave",["pointerout","pointerover"]),Nn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Nn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Nn("onBeforeInput",["compositionend","keypress","textInput","paste"]),Nn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Nn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Nn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Wr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),rb=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Wr));function R0(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var l=e[n],o=l.event;l=l.listeners;e:{var u=void 0;if(t)for(var p=l.length-1;0<=p;p--){var v=l[p],O=v.instance,U=v.currentTarget;if(v=v.listener,O!==u&&o.isPropagationStopped())break e;u=v,o.currentTarget=U;try{u(o)}catch(V){Vi(V)}o.currentTarget=null,u=O}else for(p=0;p<l.length;p++){if(v=l[p],O=v.instance,U=v.currentTarget,v=v.listener,O!==u&&o.isPropagationStopped())break e;u=v,o.currentTarget=U;try{u(o)}catch(V){Vi(V)}o.currentTarget=null,u=O}}}}function Me(e,t){var n=t[ye];n===void 0&&(n=t[ye]=new Set);var l=e+"__bubble";n.has(l)||(_0(t,e,2,!1),n.add(l))}function hc(e,t,n){var l=0;t&&(l|=4),_0(n,e,l,t)}var zo="_reactListening"+Math.random().toString(36).slice(2);function pc(e){if(!e[zo]){e[zo]=!0,jn.forEach(function(n){n!=="selectionchange"&&(rb.has(n)||hc(n,!1,e),hc(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[zo]||(t[zo]=!0,hc("selectionchange",!1,t))}}function _0(e,t,n,l){switch(lp(t)){case 2:var o=Mb;break;case 8:o=Db;break;default:o=_c}n=o.bind(null,t,n,e),o=void 0,!Ds||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),l?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function mc(e,t,n,l,o){var u=l;if((t&1)===0&&(t&2)===0&&l!==null)e:for(;;){if(l===null)return;var p=l.tag;if(p===3||p===4){var v=l.stateNode.containerInfo;if(v===o)break;if(p===4)for(p=l.return;p!==null;){var O=p.tag;if((O===3||O===4)&&p.stateNode.containerInfo===o)return;p=p.return}for(;v!==null;){if(p=ot(v),p===null)return;if(O=p.tag,O===5||O===6||O===26||O===27){l=u=p;continue e}v=v.parentNode}}l=l.return}Df(function(){var U=u,V=As(n),P=[];e:{var H=sd.get(e);if(H!==void 0){var q=Yi,se=e;switch(e){case"keypress":if(Bi(n)===0)break e;case"keydown":case"keyup":q=W1;break;case"focusin":se="focus",q=Ls;break;case"focusout":se="blur",q=Ls;break;case"beforeblur":case"afterblur":q=Ls;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":q=Hf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":q=q1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":q=tg;break;case ld:case rd:case id:q=X1;break;case od:q=ag;break;case"scroll":case"scrollend":q=L1;break;case"wheel":q=rg;break;case"copy":case"cut":case"paste":q=Z1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":q=Bf;break;case"toggle":case"beforetoggle":q=og}var we=(t&4)!==0,Fe=!we&&(e==="scroll"||e==="scrollend"),A=we?H!==null?H+"Capture":null:H;we=[];for(var _=U,k;_!==null;){var Z=_;if(k=Z.stateNode,Z=Z.tag,Z!==5&&Z!==26&&Z!==27||k===null||A===null||(Z=xr(_,A),Z!=null&&we.push(Ir(_,Z,k))),Fe)break;_=_.return}0<we.length&&(H=new q(H,se,null,n,V),P.push({event:H,listeners:we}))}}if((t&7)===0){e:{if(H=e==="mouseover"||e==="pointerover",q=e==="mouseout"||e==="pointerout",H&&n!==zs&&(se=n.relatedTarget||n.fromElement)&&(ot(se)||se[fe]))break e;if((q||H)&&(H=V.window===V?V:(H=V.ownerDocument)?H.defaultView||H.parentWindow:window,q?(se=n.relatedTarget||n.toElement,q=U,se=se?ot(se):null,se!==null&&(Fe=f(se),we=se.tag,se!==Fe||we!==5&&we!==27&&we!==6)&&(se=null)):(q=null,se=U),q!==se)){if(we=Hf,Z="onMouseLeave",A="onMouseEnter",_="mouse",(e==="pointerout"||e==="pointerover")&&(we=Bf,Z="onPointerLeave",A="onPointerEnter",_="pointer"),Fe=q==null?H:jt(q),k=se==null?H:jt(se),H=new we(Z,_+"leave",q,n,V),H.target=Fe,H.relatedTarget=k,Z=null,ot(V)===U&&(we=new we(A,_+"enter",se,n,V),we.target=k,we.relatedTarget=Fe,Z=we),Fe=Z,q&&se)t:{for(we=ib,A=q,_=se,k=0,Z=A;Z;Z=we(Z))k++;Z=0;for(var ve=_;ve;ve=we(ve))Z++;for(;0<k-Z;)A=we(A),k--;for(;0<Z-k;)_=we(_),Z--;for(;k--;){if(A===_||_!==null&&A===_.alternate){we=A;break t}A=we(A),_=we(_)}we=null}else we=null;q!==null&&C0(P,H,q,we,!1),se!==null&&Fe!==null&&C0(P,Fe,se,we,!0)}}e:{if(H=U?jt(U):window,q=H.nodeName&&H.nodeName.toLowerCase(),q==="select"||q==="input"&&H.type==="file")var Xe=Qf;else if(Zf(H))if(Kf)Xe=bg;else{Xe=mg;var ce=pg}else q=H.nodeName,!q||q.toLowerCase()!=="input"||H.type!=="checkbox"&&H.type!=="radio"?U&&Cs(U.elementType)&&(Xe=Qf):Xe=gg;if(Xe&&(Xe=Xe(e,U))){Pf(P,Xe,n,V);break e}ce&&ce(e,H,U),e==="focusout"&&U&&H.type==="number"&&U.memoizedProps.value!=null&&_s(H,"number",H.value)}switch(ce=U?jt(U):window,e){case"focusin":(Zf(ce)||ce.contentEditable==="true")&&(zl=ce,Vs=U,Rr=null);break;case"focusout":Rr=Vs=zl=null;break;case"mousedown":Zs=!0;break;case"contextmenu":case"mouseup":case"dragend":Zs=!1,nd(P,n,V);break;case"selectionchange":if(yg)break;case"keydown":case"keyup":nd(P,n,V)}var Ce;if(qs)e:{switch(e){case"compositionstart":var ke="onCompositionStart";break e;case"compositionend":ke="onCompositionEnd";break e;case"compositionupdate":ke="onCompositionUpdate";break e}ke=void 0}else Cl?Xf(e,n)&&(ke="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(ke="onCompositionStart");ke&&(qf&&n.locale!=="ko"&&(Cl||ke!=="onCompositionStart"?ke==="onCompositionEnd"&&Cl&&(Ce=kf()):(ga=V,ks="value"in ga?ga.value:ga.textContent,Cl=!0)),ce=Ao(U,ke),0<ce.length&&(ke=new Lf(ke,e,null,n,V),P.push({event:ke,listeners:ce}),Ce?ke.data=Ce:(Ce=Vf(n),Ce!==null&&(ke.data=Ce)))),(Ce=ug?cg(e,n):fg(e,n))&&(ke=Ao(U,"onBeforeInput"),0<ke.length&&(ce=new Lf("onBeforeInput","beforeinput",null,n,V),P.push({event:ce,listeners:ke}),ce.data=Ce)),nb(P,e,U,n,V)}R0(P,t)})}function Ir(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ao(e,t){for(var n=t+"Capture",l=[];e!==null;){var o=e,u=o.stateNode;if(o=o.tag,o!==5&&o!==26&&o!==27||u===null||(o=xr(e,n),o!=null&&l.unshift(Ir(e,o,u)),o=xr(e,t),o!=null&&l.push(Ir(e,o,u))),e.tag===3)return l;e=e.return}return[]}function ib(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function C0(e,t,n,l,o){for(var u=t._reactName,p=[];n!==null&&n!==l;){var v=n,O=v.alternate,U=v.stateNode;if(v=v.tag,O!==null&&O===l)break;v!==5&&v!==26&&v!==27||U===null||(O=U,o?(U=xr(n,u),U!=null&&p.unshift(Ir(n,U,O))):o||(U=xr(n,u),U!=null&&p.push(Ir(n,U,O)))),n=n.return}p.length!==0&&e.push({event:t,listeners:p})}var ob=/\r\n?/g,sb=/\u0000|\uFFFD/g;function z0(e){return(typeof e=="string"?e:""+e).replace(ob,`
`).replace(sb,"")}function A0(e,t){return t=z0(t),z0(e)===t}function Je(e,t,n,l,o,u){switch(n){case"children":typeof l=="string"?t==="body"||t==="textarea"&&l===""||Tl(e,l):(typeof l=="number"||typeof l=="bigint")&&t!=="body"&&Tl(e,""+l);break;case"className":Tn(e,"class",l);break;case"tabIndex":Tn(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":Tn(e,n,l);break;case"style":Af(e,l,u);break;case"data":if(t!=="object"){Tn(e,"data",l);break}case"src":case"href":if(l===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(n);break}l=Hi(""+l),e.setAttribute(n,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof u=="function"&&(n==="formAction"?(t!=="input"&&Je(e,t,"name",o.name,o,null),Je(e,t,"formEncType",o.formEncType,o,null),Je(e,t,"formMethod",o.formMethod,o,null),Je(e,t,"formTarget",o.formTarget,o,null)):(Je(e,t,"encType",o.encType,o,null),Je(e,t,"method",o.method,o,null),Je(e,t,"target",o.target,o,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(n);break}l=Hi(""+l),e.setAttribute(n,l);break;case"onClick":l!=null&&(e.onclick=Kn);break;case"onScroll":l!=null&&Me("scroll",e);break;case"onScrollEnd":l!=null&&Me("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(s(61));if(n=l.__html,n!=null){if(o.children!=null)throw Error(s(60));e.innerHTML=n}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}n=Hi(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(n,""+l):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":l===!0?e.setAttribute(n,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(n,l):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(n,l):e.removeAttribute(n);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(n):e.setAttribute(n,l);break;case"popover":Me("beforetoggle",e),Me("toggle",e),ht(e,"popover",l);break;case"xlinkActuate":Tt(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Tt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Tt(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Tt(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Tt(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Tt(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Tt(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Tt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Tt(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":ht(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=U1.get(n)||n,ht(e,n,l))}}function gc(e,t,n,l,o,u){switch(n){case"style":Af(e,l,u);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(s(61));if(n=l.__html,n!=null){if(o.children!=null)throw Error(s(60));e.innerHTML=n}}break;case"children":typeof l=="string"?Tl(e,l):(typeof l=="number"||typeof l=="bigint")&&Tl(e,""+l);break;case"onScroll":l!=null&&Me("scroll",e);break;case"onScrollEnd":l!=null&&Me("scrollend",e);break;case"onClick":l!=null&&(e.onclick=Kn);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Ft.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(o=n.endsWith("Capture"),t=n.slice(2,o?n.length-7:void 0),u=e[ie]||null,u=u!=null?u[n]:null,typeof u=="function"&&e.removeEventListener(t,u,o),typeof l=="function")){typeof u!="function"&&u!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,l,o);break e}n in e?e[n]=l:l===!0?e.setAttribute(n,""):ht(e,n,l)}}}function zt(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Me("error",e),Me("load",e);var l=!1,o=!1,u;for(u in n)if(n.hasOwnProperty(u)){var p=n[u];if(p!=null)switch(u){case"src":l=!0;break;case"srcSet":o=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,t));default:Je(e,t,u,p,n,null)}}o&&Je(e,t,"srcSet",n.srcSet,n,null),l&&Je(e,t,"src",n.src,n,null);return;case"input":Me("invalid",e);var v=u=p=o=null,O=null,U=null;for(l in n)if(n.hasOwnProperty(l)){var V=n[l];if(V!=null)switch(l){case"name":o=V;break;case"type":p=V;break;case"checked":O=V;break;case"defaultChecked":U=V;break;case"value":u=V;break;case"defaultValue":v=V;break;case"children":case"dangerouslySetInnerHTML":if(V!=null)throw Error(s(137,t));break;default:Je(e,t,l,V,n,null)}}Rf(e,u,v,O,U,p,o,!1);return;case"select":Me("invalid",e),l=p=u=null;for(o in n)if(n.hasOwnProperty(o)&&(v=n[o],v!=null))switch(o){case"value":u=v;break;case"defaultValue":p=v;break;case"multiple":l=v;default:Je(e,t,o,v,n,null)}t=u,n=p,e.multiple=!!l,t!=null?Nl(e,!!l,t,!1):n!=null&&Nl(e,!!l,n,!0);return;case"textarea":Me("invalid",e),u=o=l=null;for(p in n)if(n.hasOwnProperty(p)&&(v=n[p],v!=null))switch(p){case"value":l=v;break;case"defaultValue":o=v;break;case"children":u=v;break;case"dangerouslySetInnerHTML":if(v!=null)throw Error(s(91));break;default:Je(e,t,p,v,n,null)}Cf(e,l,o,u);return;case"option":for(O in n)n.hasOwnProperty(O)&&(l=n[O],l!=null)&&(O==="selected"?e.selected=l&&typeof l!="function"&&typeof l!="symbol":Je(e,t,O,l,n,null));return;case"dialog":Me("beforetoggle",e),Me("toggle",e),Me("cancel",e),Me("close",e);break;case"iframe":case"object":Me("load",e);break;case"video":case"audio":for(l=0;l<Wr.length;l++)Me(Wr[l],e);break;case"image":Me("error",e),Me("load",e);break;case"details":Me("toggle",e);break;case"embed":case"source":case"link":Me("error",e),Me("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(U in n)if(n.hasOwnProperty(U)&&(l=n[U],l!=null))switch(U){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,t));default:Je(e,t,U,l,n,null)}return;default:if(Cs(t)){for(V in n)n.hasOwnProperty(V)&&(l=n[V],l!==void 0&&gc(e,t,V,l,n,void 0));return}}for(v in n)n.hasOwnProperty(v)&&(l=n[v],l!=null&&Je(e,t,v,l,n,null))}function ub(e,t,n,l){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var o=null,u=null,p=null,v=null,O=null,U=null,V=null;for(q in n){var P=n[q];if(n.hasOwnProperty(q)&&P!=null)switch(q){case"checked":break;case"value":break;case"defaultValue":O=P;default:l.hasOwnProperty(q)||Je(e,t,q,null,l,P)}}for(var H in l){var q=l[H];if(P=n[H],l.hasOwnProperty(H)&&(q!=null||P!=null))switch(H){case"type":u=q;break;case"name":o=q;break;case"checked":U=q;break;case"defaultChecked":V=q;break;case"value":p=q;break;case"defaultValue":v=q;break;case"children":case"dangerouslySetInnerHTML":if(q!=null)throw Error(s(137,t));break;default:q!==P&&Je(e,t,H,q,l,P)}}Rs(e,p,v,O,U,V,u,o);return;case"select":q=p=v=H=null;for(u in n)if(O=n[u],n.hasOwnProperty(u)&&O!=null)switch(u){case"value":break;case"multiple":q=O;default:l.hasOwnProperty(u)||Je(e,t,u,null,l,O)}for(o in l)if(u=l[o],O=n[o],l.hasOwnProperty(o)&&(u!=null||O!=null))switch(o){case"value":H=u;break;case"defaultValue":v=u;break;case"multiple":p=u;default:u!==O&&Je(e,t,o,u,l,O)}t=v,n=p,l=q,H!=null?Nl(e,!!n,H,!1):!!l!=!!n&&(t!=null?Nl(e,!!n,t,!0):Nl(e,!!n,n?[]:"",!1));return;case"textarea":q=H=null;for(v in n)if(o=n[v],n.hasOwnProperty(v)&&o!=null&&!l.hasOwnProperty(v))switch(v){case"value":break;case"children":break;default:Je(e,t,v,null,l,o)}for(p in l)if(o=l[p],u=n[p],l.hasOwnProperty(p)&&(o!=null||u!=null))switch(p){case"value":H=o;break;case"defaultValue":q=o;break;case"children":break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(s(91));break;default:o!==u&&Je(e,t,p,o,l,u)}_f(e,H,q);return;case"option":for(var se in n)H=n[se],n.hasOwnProperty(se)&&H!=null&&!l.hasOwnProperty(se)&&(se==="selected"?e.selected=!1:Je(e,t,se,null,l,H));for(O in l)H=l[O],q=n[O],l.hasOwnProperty(O)&&H!==q&&(H!=null||q!=null)&&(O==="selected"?e.selected=H&&typeof H!="function"&&typeof H!="symbol":Je(e,t,O,H,l,q));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var we in n)H=n[we],n.hasOwnProperty(we)&&H!=null&&!l.hasOwnProperty(we)&&Je(e,t,we,null,l,H);for(U in l)if(H=l[U],q=n[U],l.hasOwnProperty(U)&&H!==q&&(H!=null||q!=null))switch(U){case"children":case"dangerouslySetInnerHTML":if(H!=null)throw Error(s(137,t));break;default:Je(e,t,U,H,l,q)}return;default:if(Cs(t)){for(var Fe in n)H=n[Fe],n.hasOwnProperty(Fe)&&H!==void 0&&!l.hasOwnProperty(Fe)&&gc(e,t,Fe,void 0,l,H);for(V in l)H=l[V],q=n[V],!l.hasOwnProperty(V)||H===q||H===void 0&&q===void 0||gc(e,t,V,H,l,q);return}}for(var A in n)H=n[A],n.hasOwnProperty(A)&&H!=null&&!l.hasOwnProperty(A)&&Je(e,t,A,null,l,H);for(P in l)H=l[P],q=n[P],!l.hasOwnProperty(P)||H===q||H==null&&q==null||Je(e,t,P,H,l,q)}function M0(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function cb(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),l=0;l<n.length;l++){var o=n[l],u=o.transferSize,p=o.initiatorType,v=o.duration;if(u&&v&&M0(p)){for(p=0,v=o.responseEnd,l+=1;l<n.length;l++){var O=n[l],U=O.startTime;if(U>v)break;var V=O.transferSize,P=O.initiatorType;V&&M0(P)&&(O=O.responseEnd,p+=V*(O<v?1:(v-U)/(O-U)))}if(--l,t+=8*(u+p)/(o.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var bc=null,vc=null;function Mo(e){return e.nodeType===9?e:e.ownerDocument}function D0(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function k0(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function yc(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var xc=null;function fb(){var e=window.event;return e&&e.type==="popstate"?e===xc?!1:(xc=e,!0):(xc=null,!1)}var U0=typeof setTimeout=="function"?setTimeout:void 0,db=typeof clearTimeout=="function"?clearTimeout:void 0,H0=typeof Promise=="function"?Promise:void 0,hb=typeof queueMicrotask=="function"?queueMicrotask:typeof H0<"u"?function(e){return H0.resolve(null).then(e).catch(pb)}:U0;function pb(e){setTimeout(function(){throw e})}function Ma(e){return e==="head"}function L0(e,t){var n=t,l=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"||n==="/&"){if(l===0){e.removeChild(o),lr(t);return}l--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")l++;else if(n==="html")ei(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,ei(n);for(var u=n.firstChild;u;){var p=u.nextSibling,v=u.nodeName;u[rt]||v==="SCRIPT"||v==="STYLE"||v==="LINK"&&u.rel.toLowerCase()==="stylesheet"||n.removeChild(u),u=p}}else n==="body"&&ei(e.ownerDocument.body);n=o}while(n);lr(t)}function B0(e,t){var n=e;e=0;do{var l=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=l}while(n)}function wc(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":wc(n),it(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function mb(e,t,n,l){for(;e.nodeType===1;){var o=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[rt])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(u=e.getAttribute("rel"),u==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(u!==o.rel||e.getAttribute("href")!==(o.href==null||o.href===""?null:o.href)||e.getAttribute("crossorigin")!==(o.crossOrigin==null?null:o.crossOrigin)||e.getAttribute("title")!==(o.title==null?null:o.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(u=e.getAttribute("src"),(u!==(o.src==null?null:o.src)||e.getAttribute("type")!==(o.type==null?null:o.type)||e.getAttribute("crossorigin")!==(o.crossOrigin==null?null:o.crossOrigin))&&u&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var u=o.name==null?null:""+o.name;if(o.type==="hidden"&&e.getAttribute("name")===u)return e}else return e;if(e=gn(e.nextSibling),e===null)break}return null}function gb(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=gn(e.nextSibling),e===null))return null;return e}function q0(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=gn(e.nextSibling),e===null))return null;return e}function Sc(e){return e.data==="$?"||e.data==="$~"}function Ec(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function bb(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var l=function(){t(),n.removeEventListener("DOMContentLoaded",l)};n.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function gn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Oc=null;function Y0(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return gn(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function G0(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function X0(e,t,n){switch(t=Mo(n),e){case"html":if(e=t.documentElement,!e)throw Error(s(452));return e;case"head":if(e=t.head,!e)throw Error(s(453));return e;case"body":if(e=t.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function ei(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);it(e)}var bn=new Map,V0=new Set;function Do(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ca=$.d;$.d={f:vb,r:yb,D:xb,C:wb,L:Sb,m:Eb,X:jb,S:Ob,M:Nb};function vb(){var e=ca.f(),t=jo();return e||t}function yb(e){var t=Le(e);t!==null&&t.tag===5&&t.type==="form"?oh(t):ca.r(e)}var tr=typeof document>"u"?null:document;function Z0(e,t,n){var l=tr;if(l&&typeof t=="string"&&t){var o=un(t);o='link[rel="'+e+'"][href="'+o+'"]',typeof n=="string"&&(o+='[crossorigin="'+n+'"]'),V0.has(o)||(V0.add(o),e={rel:e,crossOrigin:n,href:t},l.querySelector(o)===null&&(t=l.createElement("link"),zt(t,"link",e),et(t),l.head.appendChild(t)))}}function xb(e){ca.D(e),Z0("dns-prefetch",e,null)}function wb(e,t){ca.C(e,t),Z0("preconnect",e,t)}function Sb(e,t,n){ca.L(e,t,n);var l=tr;if(l&&e&&t){var o='link[rel="preload"][as="'+un(t)+'"]';t==="image"&&n&&n.imageSrcSet?(o+='[imagesrcset="'+un(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(o+='[imagesizes="'+un(n.imageSizes)+'"]')):o+='[href="'+un(e)+'"]';var u=o;switch(t){case"style":u=nr(e);break;case"script":u=ar(e)}bn.has(u)||(e=y({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),bn.set(u,e),l.querySelector(o)!==null||t==="style"&&l.querySelector(ti(u))||t==="script"&&l.querySelector(ni(u))||(t=l.createElement("link"),zt(t,"link",e),et(t),l.head.appendChild(t)))}}function Eb(e,t){ca.m(e,t);var n=tr;if(n&&e){var l=t&&typeof t.as=="string"?t.as:"script",o='link[rel="modulepreload"][as="'+un(l)+'"][href="'+un(e)+'"]',u=o;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":u=ar(e)}if(!bn.has(u)&&(e=y({rel:"modulepreload",href:e},t),bn.set(u,e),n.querySelector(o)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(ni(u)))return}l=n.createElement("link"),zt(l,"link",e),et(l),n.head.appendChild(l)}}}function Ob(e,t,n){ca.S(e,t,n);var l=tr;if(l&&e){var o=Bt(l).hoistableStyles,u=nr(e);t=t||"default";var p=o.get(u);if(!p){var v={loading:0,preload:null};if(p=l.querySelector(ti(u)))v.loading=5;else{e=y({rel:"stylesheet",href:e,"data-precedence":t},n),(n=bn.get(u))&&jc(e,n);var O=p=l.createElement("link");et(O),zt(O,"link",e),O._p=new Promise(function(U,V){O.onload=U,O.onerror=V}),O.addEventListener("load",function(){v.loading|=1}),O.addEventListener("error",function(){v.loading|=2}),v.loading|=4,ko(p,t,l)}p={type:"stylesheet",instance:p,count:1,state:v},o.set(u,p)}}}function jb(e,t){ca.X(e,t);var n=tr;if(n&&e){var l=Bt(n).hoistableScripts,o=ar(e),u=l.get(o);u||(u=n.querySelector(ni(o)),u||(e=y({src:e,async:!0},t),(t=bn.get(o))&&Nc(e,t),u=n.createElement("script"),et(u),zt(u,"link",e),n.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},l.set(o,u))}}function Nb(e,t){ca.M(e,t);var n=tr;if(n&&e){var l=Bt(n).hoistableScripts,o=ar(e),u=l.get(o);u||(u=n.querySelector(ni(o)),u||(e=y({src:e,async:!0,type:"module"},t),(t=bn.get(o))&&Nc(e,t),u=n.createElement("script"),et(u),zt(u,"link",e),n.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},l.set(o,u))}}function P0(e,t,n,l){var o=(o=Ne.current)?Do(o):null;if(!o)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=nr(n.href),n=Bt(o).hoistableStyles,l=n.get(t),l||(l={type:"style",instance:null,count:0,state:null},n.set(t,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=nr(n.href);var u=Bt(o).hoistableStyles,p=u.get(e);if(p||(o=o.ownerDocument||o,p={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},u.set(e,p),(u=o.querySelector(ti(e)))&&!u._p&&(p.instance=u,p.state.loading=5),bn.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},bn.set(e,n),u||Tb(o,e,n,p.state))),t&&l===null)throw Error(s(528,""));return p}if(t&&l!==null)throw Error(s(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=ar(n),n=Bt(o).hoistableScripts,l=n.get(t),l||(l={type:"script",instance:null,count:0,state:null},n.set(t,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function nr(e){return'href="'+un(e)+'"'}function ti(e){return'link[rel="stylesheet"]['+e+"]"}function Q0(e){return y({},e,{"data-precedence":e.precedence,precedence:null})}function Tb(e,t,n,l){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?l.loading=1:(t=e.createElement("link"),l.preload=t,t.addEventListener("load",function(){return l.loading|=1}),t.addEventListener("error",function(){return l.loading|=2}),zt(t,"link",n),et(t),e.head.appendChild(t))}function ar(e){return'[src="'+un(e)+'"]'}function ni(e){return"script[async]"+e}function K0(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var l=e.querySelector('style[data-href~="'+un(n.href)+'"]');if(l)return t.instance=l,et(l),l;var o=y({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),et(l),zt(l,"style",o),ko(l,n.precedence,e),t.instance=l;case"stylesheet":o=nr(n.href);var u=e.querySelector(ti(o));if(u)return t.state.loading|=4,t.instance=u,et(u),u;l=Q0(n),(o=bn.get(o))&&jc(l,o),u=(e.ownerDocument||e).createElement("link"),et(u);var p=u;return p._p=new Promise(function(v,O){p.onload=v,p.onerror=O}),zt(u,"link",l),t.state.loading|=4,ko(u,n.precedence,e),t.instance=u;case"script":return u=ar(n.src),(o=e.querySelector(ni(u)))?(t.instance=o,et(o),o):(l=n,(o=bn.get(u))&&(l=y({},n),Nc(l,o)),e=e.ownerDocument||e,o=e.createElement("script"),et(o),zt(o,"link",l),e.head.appendChild(o),t.instance=o);case"void":return null;default:throw Error(s(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(l=t.instance,t.state.loading|=4,ko(l,n.precedence,e));return t.instance}function ko(e,t,n){for(var l=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),o=l.length?l[l.length-1]:null,u=o,p=0;p<l.length;p++){var v=l[p];if(v.dataset.precedence===t)u=v;else if(u!==o)break}u?u.parentNode.insertBefore(e,u.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function jc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Nc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Uo=null;function J0(e,t,n){if(Uo===null){var l=new Map,o=Uo=new Map;o.set(n,l)}else o=Uo,l=o.get(n),l||(l=new Map,o.set(n,l));if(l.has(e))return l;for(l.set(e,null),n=n.getElementsByTagName(e),o=0;o<n.length;o++){var u=n[o];if(!(u[rt]||u[ae]||e==="link"&&u.getAttribute("rel")==="stylesheet")&&u.namespaceURI!=="http://www.w3.org/2000/svg"){var p=u.getAttribute(t)||"";p=e+p;var v=l.get(p);v?v.push(u):l.set(p,[u])}}return l}function F0(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function Rb(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function $0(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function _b(e,t,n,l){if(n.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var o=nr(l.href),u=t.querySelector(ti(o));if(u){t=u._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Ho.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=u,et(u);return}u=t.ownerDocument||t,l=Q0(l),(o=bn.get(o))&&jc(l,o),u=u.createElement("link"),et(u);var p=u;p._p=new Promise(function(v,O){p.onload=v,p.onerror=O}),zt(u,"link",l),n.instance=u}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(e.count++,n=Ho.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var Tc=0;function Cb(e,t){return e.stylesheets&&e.count===0&&Bo(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var l=setTimeout(function(){if(e.stylesheets&&Bo(e,e.stylesheets),e.unsuspend){var u=e.unsuspend;e.unsuspend=null,u()}},6e4+t);0<e.imgBytes&&Tc===0&&(Tc=62500*cb());var o=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Bo(e,e.stylesheets),e.unsuspend)){var u=e.unsuspend;e.unsuspend=null,u()}},(e.imgBytes>Tc?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(l),clearTimeout(o)}}:null}function Ho(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Bo(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Lo=null;function Bo(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Lo=new Map,t.forEach(zb,e),Lo=null,Ho.call(e))}function zb(e,t){if(!(t.state.loading&4)){var n=Lo.get(e);if(n)var l=n.get(null);else{n=new Map,Lo.set(e,n);for(var o=e.querySelectorAll("link[data-precedence],style[data-precedence]"),u=0;u<o.length;u++){var p=o[u];(p.nodeName==="LINK"||p.getAttribute("media")!=="not all")&&(n.set(p.dataset.precedence,p),l=p)}l&&n.set(null,l)}o=t.instance,p=o.getAttribute("data-precedence"),u=n.get(p)||l,u===l&&n.set(null,o),n.set(p,o),this.count++,l=Ho.bind(this),o.addEventListener("load",l),o.addEventListener("error",l),u?u.parentNode.insertBefore(o,u.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(o,e.firstChild)),t.state.loading|=4}}var ai={$$typeof:K,Provider:null,Consumer:null,_currentValue:I,_currentValue2:I,_threadCount:0};function Ab(e,t,n,l,o,u,p,v,O){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=pa(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=pa(0),this.hiddenUpdates=pa(null),this.identifierPrefix=l,this.onUncaughtError=o,this.onCaughtError=u,this.onRecoverableError=p,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=O,this.incompleteTransitions=new Map}function W0(e,t,n,l,o,u,p,v,O,U,V,P){return e=new Ab(e,t,n,p,O,U,V,P,v),t=1,u===!0&&(t|=24),u=Wt(3,null,null,t),e.current=u,u.stateNode=e,t=iu(),t.refCount++,e.pooledCache=t,t.refCount++,u.memoizedState={element:l,isDehydrated:n,cache:t},cu(u),e}function I0(e){return e?(e=Dl,e):Dl}function ep(e,t,n,l,o,u){o=I0(o),l.context===null?l.context=o:l.pendingContext=o,l=Sa(t),l.payload={element:n},u=u===void 0?null:u,u!==null&&(l.callback=u),n=Ea(e,l,t),n!==null&&(Zt(n,e,t),kr(n,e,t))}function tp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Rc(e,t){tp(e,t),(e=e.alternate)&&tp(e,t)}function np(e){if(e.tag===13||e.tag===31){var t=al(e,67108864);t!==null&&Zt(t,e,67108864),Rc(e,67108864)}}function ap(e){if(e.tag===13||e.tag===31){var t=an();t=L(t);var n=al(e,t);n!==null&&Zt(n,e,t),Rc(e,t)}}var qo=!0;function Mb(e,t,n,l){var o=D.T;D.T=null;var u=$.p;try{$.p=2,_c(e,t,n,l)}finally{$.p=u,D.T=o}}function Db(e,t,n,l){var o=D.T;D.T=null;var u=$.p;try{$.p=8,_c(e,t,n,l)}finally{$.p=u,D.T=o}}function _c(e,t,n,l){if(qo){var o=Cc(l);if(o===null)mc(e,t,l,Yo,n),rp(e,l);else if(Ub(o,e,t,n,l))l.stopPropagation();else if(rp(e,l),t&4&&-1<kb.indexOf(e)){for(;o!==null;){var u=Le(o);if(u!==null)switch(u.tag){case 3:if(u=u.stateNode,u.current.memoizedState.isDehydrated){var p=Pn(u.pendingLanes);if(p!==0){var v=u;for(v.pendingLanes|=2,v.entangledLanes|=2;p;){var O=1<<31-At(p);v.entanglements[1]|=O,p&=~O}Bn(u),(Ze&6)===0&&(Eo=dt()+500,$r(0))}}break;case 31:case 13:v=al(u,2),v!==null&&Zt(v,u,2),jo(),Rc(u,2)}if(u=Cc(l),u===null&&mc(e,t,l,Yo,n),u===o)break;o=u}o!==null&&l.stopPropagation()}else mc(e,t,l,null,n)}}function Cc(e){return e=As(e),zc(e)}var Yo=null;function zc(e){if(Yo=null,e=ot(e),e!==null){var t=f(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=d(t),e!==null)return e;e=null}else if(n===31){if(e=g(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Yo=e,null}function lp(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Za()){case gr:return 2;case jl:return 8;case Lt:case En:return 32;case br:return 268435456;default:return 32}default:return 32}}var Ac=!1,Da=null,ka=null,Ua=null,li=new Map,ri=new Map,Ha=[],kb="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function rp(e,t){switch(e){case"focusin":case"focusout":Da=null;break;case"dragenter":case"dragleave":ka=null;break;case"mouseover":case"mouseout":Ua=null;break;case"pointerover":case"pointerout":li.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ri.delete(t.pointerId)}}function ii(e,t,n,l,o,u){return e===null||e.nativeEvent!==u?(e={blockedOn:t,domEventName:n,eventSystemFlags:l,nativeEvent:u,targetContainers:[o]},t!==null&&(t=Le(t),t!==null&&np(t)),e):(e.eventSystemFlags|=l,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function Ub(e,t,n,l,o){switch(t){case"focusin":return Da=ii(Da,e,t,n,l,o),!0;case"dragenter":return ka=ii(ka,e,t,n,l,o),!0;case"mouseover":return Ua=ii(Ua,e,t,n,l,o),!0;case"pointerover":var u=o.pointerId;return li.set(u,ii(li.get(u)||null,e,t,n,l,o)),!0;case"gotpointercapture":return u=o.pointerId,ri.set(u,ii(ri.get(u)||null,e,t,n,l,o)),!0}return!1}function ip(e){var t=ot(e.target);if(t!==null){var n=f(t);if(n!==null){if(t=n.tag,t===13){if(t=d(n),t!==null){e.blockedOn=t,he(e.priority,function(){ap(n)});return}}else if(t===31){if(t=g(n),t!==null){e.blockedOn=t,he(e.priority,function(){ap(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Go(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Cc(e.nativeEvent);if(n===null){n=e.nativeEvent;var l=new n.constructor(n.type,n);zs=l,n.target.dispatchEvent(l),zs=null}else return t=Le(n),t!==null&&np(t),e.blockedOn=n,!1;t.shift()}return!0}function op(e,t,n){Go(e)&&n.delete(t)}function Hb(){Ac=!1,Da!==null&&Go(Da)&&(Da=null),ka!==null&&Go(ka)&&(ka=null),Ua!==null&&Go(Ua)&&(Ua=null),li.forEach(op),ri.forEach(op)}function Xo(e,t){e.blockedOn===t&&(e.blockedOn=null,Ac||(Ac=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,Hb)))}var Vo=null;function sp(e){Vo!==e&&(Vo=e,a.unstable_scheduleCallback(a.unstable_NormalPriority,function(){Vo===e&&(Vo=null);for(var t=0;t<e.length;t+=3){var n=e[t],l=e[t+1],o=e[t+2];if(typeof l!="function"){if(zc(l||n)===null)continue;break}var u=Le(n);u!==null&&(e.splice(t,3),t-=3,Cu(u,{pending:!0,data:o,method:n.method,action:l},l,o))}}))}function lr(e){function t(O){return Xo(O,e)}Da!==null&&Xo(Da,e),ka!==null&&Xo(ka,e),Ua!==null&&Xo(Ua,e),li.forEach(t),ri.forEach(t);for(var n=0;n<Ha.length;n++){var l=Ha[n];l.blockedOn===e&&(l.blockedOn=null)}for(;0<Ha.length&&(n=Ha[0],n.blockedOn===null);)ip(n),n.blockedOn===null&&Ha.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(l=0;l<n.length;l+=3){var o=n[l],u=n[l+1],p=o[ie]||null;if(typeof u=="function")p||sp(n);else if(p){var v=null;if(u&&u.hasAttribute("formAction")){if(o=u,p=u[ie]||null)v=p.formAction;else if(zc(o)!==null)continue}else v=p.action;typeof v=="function"?n[l+1]=v:(n.splice(l,3),l-=3),sp(n)}}}function up(){function e(u){u.canIntercept&&u.info==="react-transition"&&u.intercept({handler:function(){return new Promise(function(p){return o=p})},focusReset:"manual",scroll:"manual"})}function t(){o!==null&&(o(),o=null),l||setTimeout(n,20)}function n(){if(!l&&!navigation.transition){var u=navigation.currentEntry;u&&u.url!=null&&navigation.navigate(u.url,{state:u.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,o=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){l=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),o!==null&&(o(),o=null)}}}function Mc(e){this._internalRoot=e}Zo.prototype.render=Mc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(s(409));var n=t.current,l=an();ep(n,l,e,t,null,null)},Zo.prototype.unmount=Mc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;ep(e.current,2,null,e,null,null),jo(),t[fe]=null}};function Zo(e){this._internalRoot=e}Zo.prototype.unstable_scheduleHydration=function(e){if(e){var t=te();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Ha.length&&t!==0&&t<Ha[n].priority;n++);Ha.splice(n,0,e),n===0&&ip(e)}};var cp=r.version;if(cp!=="19.2.4")throw Error(s(527,cp,"19.2.4"));$.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=m(t),e=e!==null?x(e):null,e=e===null?null:e.stateNode,e};var Lb={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:D,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Po=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Po.isDisabled&&Po.supportsFiber)try{Pa=Po.inject(Lb),lt=Po}catch{}}return si.createRoot=function(e,t){if(!c(e))throw Error(s(299));var n=!1,l="",o=bh,u=vh,p=yh;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onUncaughtError!==void 0&&(o=t.onUncaughtError),t.onCaughtError!==void 0&&(u=t.onCaughtError),t.onRecoverableError!==void 0&&(p=t.onRecoverableError)),t=W0(e,1,!1,null,null,n,l,null,o,u,p,up),e[fe]=t.current,pc(e),new Mc(t)},si.hydrateRoot=function(e,t,n){if(!c(e))throw Error(s(299));var l=!1,o="",u=bh,p=vh,v=yh,O=null;return n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(p=n.onCaughtError),n.onRecoverableError!==void 0&&(v=n.onRecoverableError),n.formState!==void 0&&(O=n.formState)),t=W0(e,1,!0,t,n??null,l,o,O,u,p,v,up),t.context=I0(null),n=t.current,l=an(),l=L(l),o=Sa(l),o.callback=null,Ea(n,o,l),n=l,t.current.lanes=n,ma(t,n),Bn(t),e[fe]=t.current,pc(e),new Zo(t)},si.version="19.2.4",si}var xp;function Fb(){if(xp)return Uc.exports;xp=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(r){console.error(r)}}return a(),Uc.exports=Jb(),Uc.exports}var $b=Fb();var wm=a=>{throw TypeError(a)},Wb=(a,r,i)=>r.has(a)||wm("Cannot "+i),qc=(a,r,i)=>(Wb(a,r,"read from private field"),i?i.call(a):r.get(a)),Ib=(a,r,i)=>r.has(a)?wm("Cannot add the same private member more than once"):r instanceof WeakSet?r.add(a):r.set(a,i),wp="popstate";function ev(a={}){function r(s,c){let{pathname:f,search:d,hash:g}=s.location;return bi("",{pathname:f,search:d,hash:g},c.state&&c.state.usr||null,c.state&&c.state.key||"default")}function i(s,c){return typeof c=="string"?c:Gn(c)}return nv(r,i,null,a)}function ze(a,r){if(a===!1||a===null||typeof a>"u")throw new Error(r)}function gt(a,r){if(!a){typeof console<"u"&&console.warn(r);try{throw new Error(r)}catch{}}}function tv(){return Math.random().toString(36).substring(2,10)}function Sp(a,r){return{usr:a.state,key:a.key,idx:r}}function bi(a,r,i=null,s){return{pathname:typeof a=="string"?a:a.pathname,search:"",hash:"",...typeof r=="string"?Xa(r):r,state:i,key:r&&r.key||s||tv()}}function Gn({pathname:a="/",search:r="",hash:i=""}){return r&&r!=="?"&&(a+=r.charAt(0)==="?"?r:"?"+r),i&&i!=="#"&&(a+=i.charAt(0)==="#"?i:"#"+i),a}function Xa(a){let r={};if(a){let i=a.indexOf("#");i>=0&&(r.hash=a.substring(i),a=a.substring(0,i));let s=a.indexOf("?");s>=0&&(r.search=a.substring(s),a=a.substring(0,s)),a&&(r.pathname=a)}return r}function nv(a,r,i,s={}){let{window:c=document.defaultView,v5Compat:f=!1}=s,d=c.history,g="POP",b=null,m=x();m==null&&(m=0,d.replaceState({...d.state,idx:m},""));function x(){return(d.state||{idx:null}).idx}function y(){g="POP";let R=x(),G=R==null?null:R-m;m=R,b&&b({action:g,location:S.location,delta:G})}function j(R,G){g="PUSH";let X=bi(S.location,R,G);m=x()+1;let K=Sp(X,m),oe=S.createHref(X);try{d.pushState(K,"",oe)}catch(J){if(J instanceof DOMException&&J.name==="DataCloneError")throw J;c.location.assign(oe)}f&&b&&b({action:g,location:S.location,delta:1})}function z(R,G){g="REPLACE";let X=bi(S.location,R,G);m=x();let K=Sp(X,m),oe=S.createHref(X);d.replaceState(K,"",oe),f&&b&&b({action:g,location:S.location,delta:0})}function w(R){return Sm(R)}let S={get action(){return g},get location(){return a(c,d)},listen(R){if(b)throw new Error("A history only accepts one active listener");return c.addEventListener(wp,y),b=R,()=>{c.removeEventListener(wp,y),b=null}},createHref(R){return r(c,R)},createURL:w,encodeLocation(R){let G=w(R);return{pathname:G.pathname,search:G.search,hash:G.hash}},push:j,replace:z,go(R){return d.go(R)}};return S}function Sm(a,r=!1){let i="http://localhost";typeof window<"u"&&(i=window.location.origin!=="null"?window.location.origin:window.location.href),ze(i,"No window.location.(origin|href) available to create URL");let s=typeof a=="string"?a:Gn(a);return s=s.replace(/ $/,"%20"),!r&&s.startsWith("//")&&(s=i+s),new URL(s,i)}var hi,Ep=class{constructor(a){if(Ib(this,hi,new Map),a)for(let[r,i]of a)this.set(r,i)}get(a){if(qc(this,hi).has(a))return qc(this,hi).get(a);if(a.defaultValue!==void 0)return a.defaultValue;throw new Error("No value found for context")}set(a,r){qc(this,hi).set(a,r)}};hi=new WeakMap;var av=new Set(["lazy","caseSensitive","path","id","index","children"]);function lv(a){return av.has(a)}var rv=new Set(["lazy","caseSensitive","path","id","index","middleware","children"]);function iv(a){return rv.has(a)}function ov(a){return a.index===!0}function vi(a,r,i=[],s={},c=!1){return a.map((f,d)=>{let g=[...i,String(d)],b=typeof f.id=="string"?f.id:g.join("-");if(ze(f.index!==!0||!f.children,"Cannot specify children on an index route"),ze(c||!s[b],`Found a route id collision on id "${b}".  Route id's must be globally unique within Data Router usages`),ov(f)){let m={...f,id:b};return s[b]=Op(m,r(m)),m}else{let m={...f,id:b,children:void 0};return s[b]=Op(m,r(m)),f.children&&(m.children=vi(f.children,r,g,s,c)),m}})}function Op(a,r){return Object.assign(a,{...r,...typeof r.lazy=="object"&&r.lazy!=null?{lazy:{...a.lazy,...r.lazy}}:{}})}function qa(a,r,i="/"){return pi(a,r,i,!1)}function pi(a,r,i,s){let c=typeof r=="string"?Xa(r):r,f=xn(c.pathname||"/",i);if(f==null)return null;let d=Em(a);uv(d);let g=null;for(let b=0;g==null&&b<d.length;++b){let m=xv(f);g=vv(d[b],m,s)}return g}function sv(a,r){let{route:i,pathname:s,params:c}=a;return{id:i.id,pathname:s,params:c,data:r[i.id],loaderData:r[i.id],handle:i.handle}}function Em(a,r=[],i=[],s="",c=!1){let f=(d,g,b=c,m)=>{let x={relativePath:m===void 0?d.path||"":m,caseSensitive:d.caseSensitive===!0,childrenIndex:g,route:d};if(x.relativePath.startsWith("/")){if(!x.relativePath.startsWith(s)&&b)return;ze(x.relativePath.startsWith(s),`Absolute route path "${x.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),x.relativePath=x.relativePath.slice(s.length)}let y=Yn([s,x.relativePath]),j=i.concat(x);d.children&&d.children.length>0&&(ze(d.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${y}".`),Em(d.children,r,j,y,b)),!(d.path==null&&!d.index)&&r.push({path:y,score:gv(y,d.index),routesMeta:j})};return a.forEach((d,g)=>{if(d.path===""||!d.path?.includes("?"))f(d,g);else for(let b of Om(d.path))f(d,g,!0,b)}),r}function Om(a){let r=a.split("/");if(r.length===0)return[];let[i,...s]=r,c=i.endsWith("?"),f=i.replace(/\?$/,"");if(s.length===0)return c?[f,""]:[f];let d=Om(s.join("/")),g=[];return g.push(...d.map(b=>b===""?f:[f,b].join("/"))),c&&g.push(...d),g.map(b=>a.startsWith("/")&&b===""?"/":b)}function uv(a){a.sort((r,i)=>r.score!==i.score?i.score-r.score:bv(r.routesMeta.map(s=>s.childrenIndex),i.routesMeta.map(s=>s.childrenIndex)))}var cv=/^:[\w-]+$/,fv=3,dv=2,hv=1,pv=10,mv=-2,jp=a=>a==="*";function gv(a,r){let i=a.split("/"),s=i.length;return i.some(jp)&&(s+=mv),r&&(s+=dv),i.filter(c=>!jp(c)).reduce((c,f)=>c+(cv.test(f)?fv:f===""?hv:pv),s)}function bv(a,r){return a.length===r.length&&a.slice(0,-1).every((s,c)=>s===r[c])?a[a.length-1]-r[r.length-1]:0}function vv(a,r,i=!1){let{routesMeta:s}=a,c={},f="/",d=[];for(let g=0;g<s.length;++g){let b=s[g],m=g===s.length-1,x=f==="/"?r:r.slice(f.length)||"/",y=rs({path:b.relativePath,caseSensitive:b.caseSensitive,end:m},x),j=b.route;if(!y&&m&&i&&!s[s.length-1].route.index&&(y=rs({path:b.relativePath,caseSensitive:b.caseSensitive,end:!1},x)),!y)return null;Object.assign(c,y.params),d.push({params:c,pathname:Yn([f,y.pathname]),pathnameBase:Ev(Yn([f,y.pathnameBase])),route:j}),y.pathnameBase!=="/"&&(f=Yn([f,y.pathnameBase]))}return d}function rs(a,r){typeof a=="string"&&(a={path:a,caseSensitive:!1,end:!0});let[i,s]=yv(a.path,a.caseSensitive,a.end),c=r.match(i);if(!c)return null;let f=c[0],d=f.replace(/(.)\/+$/,"$1"),g=c.slice(1);return{params:s.reduce((m,{paramName:x,isOptional:y},j)=>{if(x==="*"){let w=g[j]||"";d=f.slice(0,f.length-w.length).replace(/(.)\/+$/,"$1")}const z=g[j];return y&&!z?m[x]=void 0:m[x]=(z||"").replace(/%2F/g,"/"),m},{}),pathname:f,pathnameBase:d,pattern:a}}function yv(a,r=!1,i=!0){gt(a==="*"||!a.endsWith("*")||a.endsWith("/*"),`Route path "${a}" will be treated as if it were "${a.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${a.replace(/\*$/,"/*")}".`);let s=[],c="^"+a.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(d,g,b)=>(s.push({paramName:g,isOptional:b!=null}),b?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return a.endsWith("*")?(s.push({paramName:"*"}),c+=a==="*"||a==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i?c+="\\/*$":a!==""&&a!=="/"&&(c+="(?:(?=\\/|$))"),[new RegExp(c,r?void 0:"i"),s]}function xv(a){try{return a.split("/").map(r=>decodeURIComponent(r).replace(/\//g,"%2F")).join("/")}catch(r){return gt(!1,`The URL path "${a}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${r}).`),a}}function xn(a,r){if(r==="/")return a;if(!a.toLowerCase().startsWith(r.toLowerCase()))return null;let i=r.endsWith("/")?r.length-1:r.length,s=a.charAt(i);return s&&s!=="/"?null:a.slice(i)||"/"}function wv({basename:a,pathname:r}){return r==="/"?a:Yn([a,r])}var jm=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,sf=a=>jm.test(a);function Sv(a,r="/"){let{pathname:i,search:s="",hash:c=""}=typeof a=="string"?Xa(a):a,f;return i?(i=i.replace(/\/\/+/g,"/"),i.startsWith("/")?f=Np(i.substring(1),"/"):f=Np(i,r)):f=r,{pathname:f,search:Ov(s),hash:jv(c)}}function Np(a,r){let i=r.replace(/\/+$/,"").split("/");return a.split("/").forEach(c=>{c===".."?i.length>1&&i.pop():c!=="."&&i.push(c)}),i.length>1?i.join("/"):"/"}function Yc(a,r,i,s){return`Cannot include a '${a}' character in a manually specified \`to.${r}\` field [${JSON.stringify(s)}].  Please separate it out to the \`to.${i}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Nm(a){return a.filter((r,i)=>i===0||r.route.path&&r.route.path.length>0)}function fs(a){let r=Nm(a);return r.map((i,s)=>s===r.length-1?i.pathname:i.pathnameBase)}function ds(a,r,i,s=!1){let c;typeof a=="string"?c=Xa(a):(c={...a},ze(!c.pathname||!c.pathname.includes("?"),Yc("?","pathname","search",c)),ze(!c.pathname||!c.pathname.includes("#"),Yc("#","pathname","hash",c)),ze(!c.search||!c.search.includes("#"),Yc("#","search","hash",c)));let f=a===""||c.pathname==="",d=f?"/":c.pathname,g;if(d==null)g=i;else{let y=r.length-1;if(!s&&d.startsWith("..")){let j=d.split("/");for(;j[0]==="..";)j.shift(),y-=1;c.pathname=j.join("/")}g=y>=0?r[y]:"/"}let b=Sv(c,g),m=d&&d!=="/"&&d.endsWith("/"),x=(f||d===".")&&i.endsWith("/");return!b.pathname.endsWith("/")&&(m||x)&&(b.pathname+="/"),b}var Yn=a=>a.join("/").replace(/\/\/+/g,"/"),Ev=a=>a.replace(/\/+$/,"").replace(/^\/*/,"/"),Ov=a=>!a||a==="?"?"":a.startsWith("?")?a:"?"+a,jv=a=>!a||a==="#"?"":a.startsWith("#")?a:"#"+a,xi=class{constructor(a,r,i,s=!1){this.status=a,this.statusText=r||"",this.internal=s,i instanceof Error?(this.data=i.toString(),this.error=i):this.data=i}};function yi(a){return a!=null&&typeof a.status=="number"&&typeof a.statusText=="string"&&typeof a.internal=="boolean"&&"data"in a}function wi(a){return a.map(r=>r.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var Tm=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function Rm(a,r){let i=a;if(typeof i!="string"||!jm.test(i))return{absoluteURL:void 0,isExternal:!1,to:i};let s=i,c=!1;if(Tm)try{let f=new URL(window.location.href),d=i.startsWith("//")?new URL(f.protocol+i):new URL(i),g=xn(d.pathname,r);d.origin===f.origin&&g!=null?i=g+d.search+d.hash:c=!0}catch{gt(!1,`<Link to="${i}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:s,isExternal:c,to:i}}var Ga=Symbol("Uninstrumented");function Nv(a,r){let i={lazy:[],"lazy.loader":[],"lazy.action":[],"lazy.middleware":[],middleware:[],loader:[],action:[]};a.forEach(c=>c({id:r.id,index:r.index,path:r.path,instrument(f){let d=Object.keys(i);for(let g of d)f[g]&&i[g].push(f[g])}}));let s={};if(typeof r.lazy=="function"&&i.lazy.length>0){let c=or(i.lazy,r.lazy,()=>{});c&&(s.lazy=c)}if(typeof r.lazy=="object"){let c=r.lazy;["middleware","loader","action"].forEach(f=>{let d=c[f],g=i[`lazy.${f}`];if(typeof d=="function"&&g.length>0){let b=or(g,d,()=>{});b&&(s.lazy=Object.assign(s.lazy||{},{[f]:b}))}})}return["loader","action"].forEach(c=>{let f=r[c];if(typeof f=="function"&&i[c].length>0){let d=f[Ga]??f,g=or(i[c],d,(...b)=>Tp(b[0]));g&&(c==="loader"&&d.hydrate===!0&&(g.hydrate=!0),g[Ga]=d,s[c]=g)}}),r.middleware&&r.middleware.length>0&&i.middleware.length>0&&(s.middleware=r.middleware.map(c=>{let f=c[Ga]??c,d=or(i.middleware,f,(...g)=>Tp(g[0]));return d?(d[Ga]=f,d):c})),s}function Tv(a,r){let i={navigate:[],fetch:[]};if(r.forEach(s=>s({instrument(c){let f=Object.keys(c);for(let d of f)c[d]&&i[d].push(c[d])}})),i.navigate.length>0){let s=a.navigate[Ga]??a.navigate,c=or(i.navigate,s,(...f)=>{let[d,g]=f;return{to:typeof d=="number"||typeof d=="string"?d:d?Gn(d):".",...Rp(a,g??{})}});c&&(c[Ga]=s,a.navigate=c)}if(i.fetch.length>0){let s=a.fetch[Ga]??a.fetch,c=or(i.fetch,s,(...f)=>{let[d,,g,b]=f;return{href:g??".",fetcherKey:d,...Rp(a,b??{})}});c&&(c[Ga]=s,a.fetch=c)}return a}function or(a,r,i){return a.length===0?null:async(...s)=>{let c=await _m(a,i(...s),()=>r(...s),a.length-1);if(c.type==="error")throw c.value;return c.value}}async function _m(a,r,i,s){let c=a[s],f;if(c){let d,g=async()=>(d?console.error("You cannot call instrumented handlers more than once"):d=_m(a,r,i,s-1),f=await d,ze(f,"Expected a result"),f.type==="error"&&f.value instanceof Error?{status:"error",error:f.value}:{status:"success",error:void 0});try{await c(g,r)}catch(b){console.error("An instrumentation function threw an error:",b)}d||await g(),await d}else try{f={type:"success",value:await i()}}catch(d){f={type:"error",value:d}}return f||{type:"error",value:new Error("No result assigned in instrumentation chain.")}}function Tp(a){let{request:r,context:i,params:s,unstable_pattern:c}=a;return{request:Rv(r),params:{...s},unstable_pattern:c,context:_v(i)}}function Rp(a,r){return{currentUrl:Gn(a.state.location),..."formMethod"in r?{formMethod:r.formMethod}:{},..."formEncType"in r?{formEncType:r.formEncType}:{},..."formData"in r?{formData:r.formData}:{},..."body"in r?{body:r.body}:{}}}function Rv(a){return{method:a.method,url:a.url,headers:{get:(...r)=>a.headers.get(...r)}}}function _v(a){if(zv(a)){let r={...a};return Object.freeze(r),r}else return{get:r=>a.get(r)}}var Cv=Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function zv(a){if(a===null||typeof a!="object")return!1;const r=Object.getPrototypeOf(a);return r===Object.prototype||r===null||Object.getOwnPropertyNames(r).sort().join("\0")===Cv}var Cm=["POST","PUT","PATCH","DELETE"],Av=new Set(Cm),Mv=["GET",...Cm],Dv=new Set(Mv),zm=new Set([301,302,303,307,308]),kv=new Set([307,308]),Gc={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},Uv={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},ui={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},Hv=a=>({hasErrorBoundary:!!a.hasErrorBoundary}),Am="remix-router-transitions",Mm=Symbol("ResetLoaderData");function Lv(a){const r=a.window?a.window:typeof window<"u"?window:void 0,i=typeof r<"u"&&typeof r.document<"u"&&typeof r.document.createElement<"u";ze(a.routes.length>0,"You must provide a non-empty routes array to createRouter");let s=a.hydrationRouteProperties||[],c=a.mapRouteProperties||Hv,f=c;if(a.unstable_instrumentations){let E=a.unstable_instrumentations;f=M=>({...c(M),...Nv(E.map(L=>L.route).filter(Boolean),M)})}let d={},g=vi(a.routes,f,void 0,d),b,m=a.basename||"/";m.startsWith("/")||(m=`/${m}`);let x=a.dataStrategy||Xv,y={...a.future},j=null,z=new Set,w=null,S=null,R=null,G=a.hydrationData!=null,X=qa(g,a.history.location,m),K=!1,oe=null,J;if(X==null&&!a.patchRoutesOnNavigation){let E=yn(404,{pathname:a.history.location.pathname}),{matches:M,route:L}=Qo(g);J=!0,X=M,oe={[L.id]:E}}else if(X&&!a.hydrationData&&Fa(X,g,a.history.location.pathname).active&&(X=null),X)if(X.some(E=>E.route.lazy))J=!1;else if(!X.some(E=>uf(E.route)))J=!0;else{let E=a.hydrationData?a.hydrationData.loaderData:null,M=a.hydrationData?a.hydrationData.errors:null;if(M){let L=X.findIndex(F=>M[F.route.id]!==void 0);J=X.slice(0,L+1).every(F=>!$c(F.route,E,M))}else J=X.every(L=>!$c(L.route,E,M))}else{J=!1,X=[];let E=Fa(null,g,a.history.location.pathname);E.active&&E.matches&&(K=!0,X=E.matches)}let ue,C={historyAction:a.history.action,location:a.history.location,matches:X,initialized:J,navigation:Gc,restoreScrollPosition:a.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:a.hydrationData&&a.hydrationData.loaderData||{},actionData:a.hydrationData&&a.hydrationData.actionData||null,errors:a.hydrationData&&a.hydrationData.errors||oe,fetchers:new Map,blockers:new Map},le="POP",Q=null,Oe=!1,je,ee=!1,xe=new Map,be=null,me=!1,D=!1,$=new Set,I=new Map,Se=0,Te=-1,T=new Map,Y=new Set,W=new Map,ne=new Map,de=new Set,Ne=new Map,Ue,ft=null;function at(){if(j=a.history.listen(({action:E,location:M,delta:L})=>{if(Ue){Ue(),Ue=void 0;return}gt(Ne.size===0||L!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let F=Qa({currentLocation:C.location,nextLocation:M,historyAction:E});if(F&&L!=null){let te=new Promise(he=>{Ue=he});a.history.go(L*-1),Zn(F,{state:"blocked",location:M,proceed(){Zn(F,{state:"proceeding",proceed:void 0,reset:void 0,location:M}),te.then(()=>a.history.go(L))},reset(){let he=new Map(C.blockers);he.set(F,ui),bt({blockers:he})}}),Q?.resolve(),Q=null;return}return Sn(E,M)}),i){oy(r,xe);let E=()=>sy(r,xe);r.addEventListener("pagehide",E),be=()=>r.removeEventListener("pagehide",E)}return C.initialized||Sn("POP",C.location,{initialHydration:!0}),ue}function Va(){j&&j(),be&&be(),z.clear(),je&&je.abort(),C.fetchers.forEach((E,M)=>vr(M)),C.blockers.forEach((E,M)=>Ai(M))}function El(E){return z.add(E),()=>z.delete(E)}function bt(E,M={}){E.matches&&(E.matches=E.matches.map(te=>{let he=d[te.route.id],re=te.route;return re.element!==he.element||re.errorElement!==he.errorElement||re.hydrateFallbackElement!==he.hydrateFallbackElement?{...te,route:he}:te})),C={...C,...E};let L=[],F=[];C.fetchers.forEach((te,he)=>{te.state==="idle"&&(de.has(he)?L.push(he):F.push(he))}),de.forEach(te=>{!C.fetchers.has(te)&&!I.has(te)&&L.push(te)}),[...z].forEach(te=>te(C,{deletedFetchers:L,newErrors:E.errors??null,viewTransitionOpts:M.viewTransitionOpts,flushSync:M.flushSync===!0})),L.forEach(te=>vr(te)),F.forEach(te=>C.fetchers.delete(te))}function Vn(E,M,{flushSync:L}={}){let F=C.actionData!=null&&C.navigation.formMethod!=null&&Dt(C.navigation.formMethod)&&C.navigation.state==="loading"&&E.state?._isRedirect!==!0,te;M.actionData?Object.keys(M.actionData).length>0?te=M.actionData:te=null:F?te=C.actionData:te=null;let he=M.loaderData?Lp(C.loaderData,M.loaderData,M.matches||[],M.errors):C.loaderData,re=C.blockers;re.size>0&&(re=new Map(re),re.forEach((ye,ge)=>re.set(ge,ui)));let ae=me?!1:Mi(E,M.matches||C.matches),ie=Oe===!0||C.navigation.formMethod!=null&&Dt(C.navigation.formMethod)&&E.state?._isRedirect!==!0;b&&(g=b,b=void 0),me||le==="POP"||(le==="PUSH"?a.history.push(E,E.state):le==="REPLACE"&&a.history.replace(E,E.state));let fe;if(le==="POP"){let ye=xe.get(C.location.pathname);ye&&ye.has(E.pathname)?fe={currentLocation:C.location,nextLocation:E}:xe.has(E.pathname)&&(fe={currentLocation:E,nextLocation:C.location})}else if(ee){let ye=xe.get(C.location.pathname);ye?ye.add(E.pathname):(ye=new Set([E.pathname]),xe.set(C.location.pathname,ye)),fe={currentLocation:C.location,nextLocation:E}}bt({...M,actionData:te,loaderData:he,historyAction:le,location:E,initialized:!0,navigation:Gc,revalidation:"idle",restoreScrollPosition:ae,preventScrollReset:ie,blockers:re},{viewTransitionOpts:fe,flushSync:L===!0}),le="POP",Oe=!1,ee=!1,me=!1,D=!1,Q?.resolve(),Q=null,ft?.resolve(),ft=null}async function kn(E,M){if(Q?.resolve(),Q=null,typeof E=="number"){Q||(Q=Gp());let He=Q.promise;return a.history.go(E),He}let L=Fc(C.location,C.matches,m,E,M?.fromRouteId,M?.relative),{path:F,submission:te,error:he}=_p(!1,L,M),re=C.location,ae=bi(C.location,F,M&&M.state);ae={...ae,...a.history.encodeLocation(ae)};let ie=M&&M.replace!=null?M.replace:void 0,fe="PUSH";ie===!0?fe="REPLACE":ie===!1||te!=null&&Dt(te.formMethod)&&te.formAction===C.location.pathname+C.location.search&&(fe="REPLACE");let ye=M&&"preventScrollReset"in M?M.preventScrollReset===!0:void 0,ge=(M&&M.flushSync)===!0,Ge=Qa({currentLocation:re,nextLocation:ae,historyAction:fe});if(Ge){Zn(Ge,{state:"blocked",location:ae,proceed(){Zn(Ge,{state:"proceeding",proceed:void 0,reset:void 0,location:ae}),kn(E,M)},reset(){let He=new Map(C.blockers);He.set(Ge,ui),bt({blockers:He})}});return}await Sn(fe,ae,{submission:te,pendingError:he,preventScrollReset:ye,replace:M&&M.replace,enableViewTransition:M&&M.viewTransition,flushSync:ge,callSiteDefaultShouldRevalidate:M&&M.unstable_defaultShouldRevalidate})}function hr(){ft||(ft=Gp()),jl(),bt({revalidation:"loading"});let E=ft.promise;return C.navigation.state==="submitting"?E:C.navigation.state==="idle"?(Sn(C.historyAction,C.location,{startUninterruptedRevalidation:!0}),E):(Sn(le||C.historyAction,C.navigation.location,{overrideNavigation:C.navigation,enableViewTransition:ee===!0}),E)}async function Sn(E,M,L){je&&je.abort(),je=null,le=E,me=(L&&L.startUninterruptedRevalidation)===!0,Ja(C.location,C.matches),Oe=(L&&L.preventScrollReset)===!0,ee=(L&&L.enableViewTransition)===!0;let F=b||g,te=L&&L.overrideNavigation,he=L?.initialHydration&&C.matches&&C.matches.length>0&&!K?C.matches:qa(F,M,m),re=(L&&L.flushSync)===!0;if(he&&C.initialized&&!D&&$v(C.location,M)&&!(L&&L.submission&&Dt(L.submission.formMethod))){Vn(M,{matches:he},{flushSync:re});return}let ae=Fa(he,F,M.pathname);if(ae.active&&ae.matches&&(he=ae.matches),!he){let{error:it,notFoundMatches:ot,route:Le}=ha(M.pathname);Vn(M,{matches:ot,loaderData:{},errors:{[Le.id]:it}},{flushSync:re});return}je=new AbortController;let ie=ir(a.history,M,je.signal,L&&L.submission),fe=a.getContext?await a.getContext():new Ep,ye;if(L&&L.pendingError)ye=[Ya(he).route.id,{type:"error",error:L.pendingError}];else if(L&&L.submission&&Dt(L.submission.formMethod)){let it=await Ss(ie,M,L.submission,he,fe,ae.active,L&&L.initialHydration===!0,{replace:L.replace,flushSync:re});if(it.shortCircuited)return;if(it.pendingActionResult){let[ot,Le]=it.pendingActionResult;if(rn(Le)&&yi(Le.error)&&Le.error.status===404){je=null,Vn(M,{matches:it.matches,loaderData:{},errors:{[ot]:Le.error}});return}}he=it.matches||he,ye=it.pendingActionResult,te=Xc(M,L.submission),re=!1,ae.active=!1,ie=ir(a.history,ie.url,ie.signal)}let{shortCircuited:ge,matches:Ge,loaderData:He,errors:rt}=await Ci(ie,M,he,fe,ae.active,te,L&&L.submission,L&&L.fetcherSubmission,L&&L.replace,L&&L.initialHydration===!0,re,ye,L&&L.callSiteDefaultShouldRevalidate);ge||(je=null,Vn(M,{matches:Ge||he,...Bp(ye),loaderData:He,errors:rt}))}async function Ss(E,M,L,F,te,he,re,ae={}){jl();let ie=ry(M,L);if(bt({navigation:ie},{flushSync:ae.flushSync===!0}),he){let ge=await pa(F,M.pathname,E.signal);if(ge.type==="aborted")return{shortCircuited:!0};if(ge.type==="error"){if(ge.partialMatches.length===0){let{matches:He,route:rt}=Qo(g);return{matches:He,pendingActionResult:[rt.id,{type:"error",error:ge.error}]}}let Ge=Ya(ge.partialMatches).route.id;return{matches:ge.partialMatches,pendingActionResult:[Ge,{type:"error",error:ge.error}]}}else if(ge.matches)F=ge.matches;else{let{notFoundMatches:Ge,error:He,route:rt}=ha(M.pathname);return{matches:Ge,pendingActionResult:[rt.id,{type:"error",error:He}]}}}let fe,ye=Io(F,M);if(!ye.route.action&&!ye.route.lazy)fe={type:"error",error:yn(405,{method:E.method,pathname:M.pathname,routeId:ye.route.id})};else{let ge=sr(f,d,E,F,ye,re?[]:s,te),Ge=await Za(E,ge,te,null);if(fe=Ge[ye.route.id],!fe){for(let He of F)if(Ge[He.route.id]){fe=Ge[He.route.id];break}}if(E.signal.aborted)return{shortCircuited:!0}}if(bl(fe)){let ge;return ae&&ae.replace!=null?ge=ae.replace:ge=kp(fe.response.headers.get("Location"),new URL(E.url),m,a.history)===C.location.pathname+C.location.search,await dt(E,fe,!0,{submission:L,replace:ge}),{shortCircuited:!0}}if(rn(fe)){let ge=Ya(F,ye.route.id);return(ae&&ae.replace)!==!0&&(le="PUSH"),{matches:F,pendingActionResult:[ge.route.id,fe,ye.route.id]}}return{matches:F,pendingActionResult:[ye.route.id,fe]}}async function Ci(E,M,L,F,te,he,re,ae,ie,fe,ye,ge,Ge){let He=he||Xc(M,re),rt=re||ae||Yp(He),it=!me&&!fe;if(te){if(it){let ht=Ol(ge);bt({navigation:He,...ht!==void 0?{actionData:ht}:{}},{flushSync:ye})}let Be=await pa(L,M.pathname,E.signal);if(Be.type==="aborted")return{shortCircuited:!0};if(Be.type==="error"){if(Be.partialMatches.length===0){let{matches:Tn,route:Tt}=Qo(g);return{matches:Tn,loaderData:{},errors:{[Tt.id]:Be.error}}}let ht=Ya(Be.partialMatches).route.id;return{matches:Be.partialMatches,loaderData:{},errors:{[ht]:Be.error}}}else if(Be.matches)L=Be.matches;else{let{error:ht,notFoundMatches:Tn,route:Tt}=ha(M.pathname);return{matches:Tn,loaderData:{},errors:{[Tt.id]:ht}}}}let ot=b||g,{dsMatches:Le,revalidatingFetchers:jt}=Cp(E,F,f,d,a.history,C,L,rt,M,fe?[]:s,fe===!0,D,$,de,W,Y,ot,m,a.patchRoutesOnNavigation!=null,ge,Ge);if(Te=++Se,!a.dataStrategy&&!Le.some(Be=>Be.shouldLoad)&&!Le.some(Be=>Be.route.middleware&&Be.route.middleware.length>0)&&jt.length===0){let Be=At();return Vn(M,{matches:L,loaderData:{},errors:ge&&rn(ge[1])?{[ge[0]]:ge[1].error}:null,...Bp(ge),...Be?{fetchers:new Map(C.fetchers)}:{}},{flushSync:ye}),{shortCircuited:!0}}if(it){let Be={};if(!te){Be.navigation=He;let ht=Ol(ge);ht!==void 0&&(Be.actionData=ht)}jt.length>0&&(Be.fetchers=pr(jt)),bt(Be,{flushSync:ye})}jt.forEach(Be=>{lt(Be.key),Be.controller&&I.set(Be.key,Be.controller)});let Bt=()=>jt.forEach(Be=>lt(Be.key));je&&je.signal.addEventListener("abort",Bt);let{loaderResults:et,fetcherResults:jn}=await gr(Le,jt,E,F);if(E.signal.aborted)return{shortCircuited:!0};je&&je.signal.removeEventListener("abort",Bt),jt.forEach(Be=>I.delete(Be.key));let Ft=Ko(et);if(Ft)return await dt(E,Ft.result,!0,{replace:ie}),{shortCircuited:!0};if(Ft=Ko(jn),Ft)return Y.add(Ft.key),await dt(E,Ft.result,!0,{replace:ie}),{shortCircuited:!0};let{loaderData:Nn,errors:sn}=Hp(C,L,et,ge,jt,jn);fe&&C.errors&&(sn={...C.errors,...sn});let Qn=At(),$a=zi(Te),Wa=Qn||$a||jt.length>0;return{matches:L,loaderData:Nn,errors:sn,...Wa?{fetchers:new Map(C.fetchers)}:{}}}function Ol(E){if(E&&!rn(E[1]))return{[E[0]]:E[1].data};if(C.actionData)return Object.keys(C.actionData).length===0?null:C.actionData}function pr(E){return E.forEach(M=>{let L=C.fetchers.get(M.key),F=ci(void 0,L?L.data:void 0);C.fetchers.set(M.key,F)}),new Map(C.fetchers)}async function mr(E,M,L,F){lt(E);let te=(F&&F.flushSync)===!0,he=b||g,re=Fc(C.location,C.matches,m,L,M,F?.relative),ae=qa(he,re,m),ie=Fa(ae,he,re);if(ie.active&&ie.matches&&(ae=ie.matches),!ae){En(E,M,yn(404,{pathname:re}),{flushSync:te});return}let{path:fe,submission:ye,error:ge}=_p(!0,re,F);if(ge){En(E,M,ge,{flushSync:te});return}let Ge=a.getContext?await a.getContext():new Ep,He=(F&&F.preventScrollReset)===!0;if(ye&&Dt(ye.formMethod)){await Es(E,M,fe,ae,Ge,ie.active,te,He,ye,F&&F.unstable_defaultShouldRevalidate);return}W.set(E,{routeId:M,path:fe}),await Os(E,M,fe,ae,Ge,ie.active,te,He,ye)}async function Es(E,M,L,F,te,he,re,ae,ie,fe){jl(),W.delete(E);let ye=C.fetchers.get(E);Lt(E,iy(ie,ye),{flushSync:re});let ge=new AbortController,Ge=ir(a.history,L,ge.signal,ie);if(he){let qe=await pa(F,new URL(Ge.url).pathname,Ge.signal,E);if(qe.type==="aborted")return;if(qe.type==="error"){En(E,M,qe.error,{flushSync:re});return}else if(qe.matches)F=qe.matches;else{En(E,M,yn(404,{pathname:L}),{flushSync:re});return}}let He=Io(F,L);if(!He.route.action&&!He.route.lazy){let qe=yn(405,{method:ie.formMethod,pathname:L,routeId:M});En(E,M,qe,{flushSync:re});return}I.set(E,ge);let rt=Se,it=sr(f,d,Ge,F,He,s,te),ot=await Za(Ge,it,te,E),Le=ot[He.route.id];if(!Le){for(let qe of it)if(ot[qe.route.id]){Le=ot[qe.route.id];break}}if(Ge.signal.aborted){I.get(E)===ge&&I.delete(E);return}if(de.has(E)){if(bl(Le)||rn(Le)){Lt(E,da(void 0));return}}else{if(bl(Le))if(I.delete(E),Te>rt){Lt(E,da(void 0));return}else return Y.add(E),Lt(E,ci(ie)),dt(Ge,Le,!1,{fetcherSubmission:ie,preventScrollReset:ae});if(rn(Le)){En(E,M,Le.error);return}}let jt=C.navigation.location||C.location,Bt=ir(a.history,jt,ge.signal),et=b||g,jn=C.navigation.state!=="idle"?qa(et,C.navigation.location,m):C.matches;ze(jn,"Didn't find any matches after fetcher action");let Ft=++Se;T.set(E,Ft);let Nn=ci(ie,Le.data);C.fetchers.set(E,Nn);let{dsMatches:sn,revalidatingFetchers:Qn}=Cp(Bt,te,f,d,a.history,C,jn,ie,jt,s,!1,D,$,de,W,Y,et,m,a.patchRoutesOnNavigation!=null,[He.route.id,Le],fe);Qn.filter(qe=>qe.key!==E).forEach(qe=>{let Ia=qe.key,ki=C.fetchers.get(Ia),yr=ci(void 0,ki?ki.data:void 0);C.fetchers.set(Ia,yr),lt(Ia),qe.controller&&I.set(Ia,qe.controller)}),bt({fetchers:new Map(C.fetchers)});let $a=()=>Qn.forEach(qe=>lt(qe.key));ge.signal.addEventListener("abort",$a);let{loaderResults:Wa,fetcherResults:Be}=await gr(sn,Qn,Bt,te);if(ge.signal.aborted)return;if(ge.signal.removeEventListener("abort",$a),T.delete(E),I.delete(E),Qn.forEach(qe=>I.delete(qe.key)),C.fetchers.has(E)){let qe=da(Le.data);C.fetchers.set(E,qe)}let ht=Ko(Wa);if(ht)return dt(Bt,ht.result,!1,{preventScrollReset:ae});if(ht=Ko(Be),ht)return Y.add(ht.key),dt(Bt,ht.result,!1,{preventScrollReset:ae});let{loaderData:Tn,errors:Tt}=Hp(C,jn,Wa,void 0,Qn,Be);zi(Ft),C.navigation.state==="loading"&&Ft>Te?(ze(le,"Expected pending action"),je&&je.abort(),Vn(C.navigation.location,{matches:jn,loaderData:Tn,errors:Tt,fetchers:new Map(C.fetchers)})):(bt({errors:Tt,loaderData:Lp(C.loaderData,Tn,jn,Tt),fetchers:new Map(C.fetchers)}),D=!1)}async function Os(E,M,L,F,te,he,re,ae,ie){let fe=C.fetchers.get(E);Lt(E,ci(ie,fe?fe.data:void 0),{flushSync:re});let ye=new AbortController,ge=ir(a.history,L,ye.signal);if(he){let Le=await pa(F,new URL(ge.url).pathname,ge.signal,E);if(Le.type==="aborted")return;if(Le.type==="error"){En(E,M,Le.error,{flushSync:re});return}else if(Le.matches)F=Le.matches;else{En(E,M,yn(404,{pathname:L}),{flushSync:re});return}}let Ge=Io(F,L);I.set(E,ye);let He=Se,rt=sr(f,d,ge,F,Ge,s,te),ot=(await Za(ge,rt,te,E))[Ge.route.id];if(I.get(E)===ye&&I.delete(E),!ge.signal.aborted){if(de.has(E)){Lt(E,da(void 0));return}if(bl(ot))if(Te>He){Lt(E,da(void 0));return}else{Y.add(E),await dt(ge,ot,!1,{preventScrollReset:ae});return}if(rn(ot)){En(E,M,ot.error);return}Lt(E,da(ot.data))}}async function dt(E,M,L,{submission:F,fetcherSubmission:te,preventScrollReset:he,replace:re}={}){L||(Q?.resolve(),Q=null),M.response.headers.has("X-Remix-Revalidate")&&(D=!0);let ae=M.response.headers.get("Location");ze(ae,"Expected a Location header on the redirect Response"),ae=kp(ae,new URL(E.url),m,a.history);let ie=bi(C.location,ae,{_isRedirect:!0});if(i){let rt=!1;if(M.response.headers.has("X-Remix-Reload-Document"))rt=!0;else if(sf(ae)){const it=Sm(ae,!0);rt=it.origin!==r.location.origin||xn(it.pathname,m)==null}if(rt){re?r.location.replace(ae):r.location.assign(ae);return}}je=null;let fe=re===!0||M.response.headers.has("X-Remix-Replace")?"REPLACE":"PUSH",{formMethod:ye,formAction:ge,formEncType:Ge}=C.navigation;!F&&!te&&ye&&ge&&Ge&&(F=Yp(C.navigation));let He=F||te;if(kv.has(M.response.status)&&He&&Dt(He.formMethod))await Sn(fe,ie,{submission:{...He,formAction:ae},preventScrollReset:he||Oe,enableViewTransition:L?ee:void 0});else{let rt=Xc(ie,F);await Sn(fe,ie,{overrideNavigation:rt,fetcherSubmission:te,preventScrollReset:he||Oe,enableViewTransition:L?ee:void 0})}}async function Za(E,M,L,F){let te,he={};try{te=await Zv(x,E,M,F,L,!1)}catch(re){return M.filter(ae=>ae.shouldLoad).forEach(ae=>{he[ae.route.id]={type:"error",error:re}}),he}if(E.signal.aborted)return he;if(!Dt(E.method))for(let re of M){if(te[re.route.id]?.type==="error")break;!te.hasOwnProperty(re.route.id)&&!C.loaderData.hasOwnProperty(re.route.id)&&(!C.errors||!C.errors.hasOwnProperty(re.route.id))&&re.shouldCallHandler()&&(te[re.route.id]={type:"error",result:new Error(`No result returned from dataStrategy for route ${re.route.id}`)})}for(let[re,ae]of Object.entries(te))if(ty(ae)){let ie=ae.result;he[re]={type:"redirect",response:Jv(ie,E,re,M,m)}}else he[re]=await Kv(ae);return he}async function gr(E,M,L,F){let te=Za(L,E,F,null),he=Promise.all(M.map(async ie=>{if(ie.matches&&ie.match&&ie.request&&ie.controller){let ye=(await Za(ie.request,ie.matches,F,ie.key))[ie.match.route.id];return{[ie.key]:ye}}else return Promise.resolve({[ie.key]:{type:"error",error:yn(404,{pathname:ie.path})}})})),re=await te,ae=(await he).reduce((ie,fe)=>Object.assign(ie,fe),{});return{loaderResults:re,fetcherResults:ae}}function jl(){D=!0,W.forEach((E,M)=>{I.has(M)&&$.add(M),lt(M)})}function Lt(E,M,L={}){C.fetchers.set(E,M),bt({fetchers:new Map(C.fetchers)},{flushSync:(L&&L.flushSync)===!0})}function En(E,M,L,F={}){let te=Ya(C.matches,M);vr(E),bt({errors:{[te.route.id]:L},fetchers:new Map(C.fetchers)},{flushSync:(F&&F.flushSync)===!0})}function br(E){return ne.set(E,(ne.get(E)||0)+1),de.has(E)&&de.delete(E),C.fetchers.get(E)||Uv}function js(E,M){lt(E,M?.reason),Lt(E,da(null))}function vr(E){let M=C.fetchers.get(E);I.has(E)&&!(M&&M.state==="loading"&&T.has(E))&&lt(E),W.delete(E),T.delete(E),Y.delete(E),de.delete(E),$.delete(E),C.fetchers.delete(E)}function Pa(E){let M=(ne.get(E)||0)-1;M<=0?(ne.delete(E),de.add(E)):ne.set(E,M),bt({fetchers:new Map(C.fetchers)})}function lt(E,M){let L=I.get(E);L&&(L.abort(M),I.delete(E))}function On(E){for(let M of E){let L=br(M),F=da(L.data);C.fetchers.set(M,F)}}function At(){let E=[],M=!1;for(let L of Y){let F=C.fetchers.get(L);ze(F,`Expected fetcher: ${L}`),F.state==="loading"&&(Y.delete(L),E.push(L),M=!0)}return On(E),M}function zi(E){let M=[];for(let[L,F]of T)if(F<E){let te=C.fetchers.get(L);ze(te,`Expected fetcher: ${L}`),te.state==="loading"&&(lt(L),T.delete(L),M.push(L))}return On(M),M.length>0}function Ns(E,M){let L=C.blockers.get(E)||ui;return Ne.get(E)!==M&&Ne.set(E,M),L}function Ai(E){C.blockers.delete(E),Ne.delete(E)}function Zn(E,M){let L=C.blockers.get(E)||ui;ze(L.state==="unblocked"&&M.state==="blocked"||L.state==="blocked"&&M.state==="blocked"||L.state==="blocked"&&M.state==="proceeding"||L.state==="blocked"&&M.state==="unblocked"||L.state==="proceeding"&&M.state==="unblocked",`Invalid blocker state transition: ${L.state} -> ${M.state}`);let F=new Map(C.blockers);F.set(E,M),bt({blockers:F})}function Qa({currentLocation:E,nextLocation:M,historyAction:L}){if(Ne.size===0)return;Ne.size>1&&gt(!1,"A router only supports one blocker at a time");let F=Array.from(Ne.entries()),[te,he]=F[F.length-1],re=C.blockers.get(te);if(!(re&&re.state==="proceeding")&&he({currentLocation:E,nextLocation:M,historyAction:L}))return te}function ha(E){let M=yn(404,{pathname:E}),L=b||g,{matches:F,route:te}=Qo(L);return{notFoundMatches:F,route:te,error:M}}function Pn(E,M,L){if(w=E,R=M,S=L||null,!G&&C.navigation===Gc){G=!0;let F=Mi(C.location,C.matches);F!=null&&bt({restoreScrollPosition:F})}return()=>{w=null,R=null,S=null}}function Ka(E,M){return S&&S(E,M.map(F=>sv(F,C.loaderData)))||E.key}function Ja(E,M){if(w&&R){let L=Ka(E,M);w[L]=R()}}function Mi(E,M){if(w){let L=Ka(E,M),F=w[L];if(typeof F=="number")return F}return null}function Fa(E,M,L){if(a.patchRoutesOnNavigation)if(E){if(Object.keys(E[0].params).length>0)return{active:!0,matches:pi(M,L,m,!0)}}else return{active:!0,matches:pi(M,L,m,!0)||[]};return{active:!1,matches:null}}async function pa(E,M,L,F){if(!a.patchRoutesOnNavigation)return{type:"success",matches:E};let te=E;for(;;){let he=b==null,re=b||g,ae=d;try{await a.patchRoutesOnNavigation({signal:L,path:M,matches:te,fetcherKey:F,patch:(ye,ge)=>{L.aborted||zp(ye,ge,re,ae,f,!1)}})}catch(ye){return{type:"error",error:ye,partialMatches:te}}finally{he&&!L.aborted&&(g=[...g])}if(L.aborted)return{type:"aborted"};let ie=qa(re,M,m),fe=null;if(ie){if(Object.keys(ie[0].params).length===0)return{type:"success",matches:ie};if(fe=pi(re,M,m,!0),!(fe&&te.length<fe.length&&ma(te,fe.slice(0,te.length))))return{type:"success",matches:ie}}if(fe||(fe=pi(re,M,m,!0)),!fe||ma(te,fe))return{type:"success",matches:null};te=fe}}function ma(E,M){return E.length===M.length&&E.every((L,F)=>L.route.id===M[F].route.id)}function Ts(E){d={},b=vi(E,f,void 0,d)}function Di(E,M,L=!1){let F=b==null;zp(E,M,b||g,d,f,L),F&&(g=[...g],bt({}))}return ue={get basename(){return m},get future(){return y},get state(){return C},get routes(){return g},get window(){return r},initialize:at,subscribe:El,enableScrollRestoration:Pn,navigate:kn,fetch:mr,revalidate:hr,createHref:E=>a.history.createHref(E),encodeLocation:E=>a.history.encodeLocation(E),getFetcher:br,resetFetcher:js,deleteFetcher:Pa,dispose:Va,getBlocker:Ns,deleteBlocker:Ai,patchRoutes:Di,_internalFetchControllers:I,_internalSetRoutes:Ts,_internalSetStateDoNotUseOrYouWillBreakYourApp(E){bt(E)}},a.unstable_instrumentations&&(ue=Tv(ue,a.unstable_instrumentations.map(E=>E.router).filter(Boolean))),ue}function Bv(a){return a!=null&&("formData"in a&&a.formData!=null||"body"in a&&a.body!==void 0)}function Fc(a,r,i,s,c,f){let d,g;if(c){d=[];for(let m of r)if(d.push(m),m.route.id===c){g=m;break}}else d=r,g=r[r.length-1];let b=ds(s||".",fs(d),xn(a.pathname,i)||a.pathname,f==="path");if(s==null&&(b.search=a.search,b.hash=a.hash),(s==null||s===""||s===".")&&g){let m=ff(b.search);if(g.route.index&&!m)b.search=b.search?b.search.replace(/^\?/,"?index&"):"?index";else if(!g.route.index&&m){let x=new URLSearchParams(b.search),y=x.getAll("index");x.delete("index"),y.filter(z=>z).forEach(z=>x.append("index",z));let j=x.toString();b.search=j?`?${j}`:""}}return i!=="/"&&(b.pathname=wv({basename:i,pathname:b.pathname})),Gn(b)}function _p(a,r,i){if(!i||!Bv(i))return{path:r};if(i.formMethod&&!ly(i.formMethod))return{path:r,error:yn(405,{method:i.formMethod})};let s=()=>({path:r,error:yn(400,{type:"invalid-body"})}),f=(i.formMethod||"get").toUpperCase(),d=Bm(r);if(i.body!==void 0){if(i.formEncType==="text/plain"){if(!Dt(f))return s();let y=typeof i.body=="string"?i.body:i.body instanceof FormData||i.body instanceof URLSearchParams?Array.from(i.body.entries()).reduce((j,[z,w])=>`${j}${z}=${w}
`,""):String(i.body);return{path:r,submission:{formMethod:f,formAction:d,formEncType:i.formEncType,formData:void 0,json:void 0,text:y}}}else if(i.formEncType==="application/json"){if(!Dt(f))return s();try{let y=typeof i.body=="string"?JSON.parse(i.body):i.body;return{path:r,submission:{formMethod:f,formAction:d,formEncType:i.formEncType,formData:void 0,json:y,text:void 0}}}catch{return s()}}}ze(typeof FormData=="function","FormData is not available in this environment");let g,b;if(i.formData)g=Ic(i.formData),b=i.formData;else if(i.body instanceof FormData)g=Ic(i.body),b=i.body;else if(i.body instanceof URLSearchParams)g=i.body,b=Up(g);else if(i.body==null)g=new URLSearchParams,b=new FormData;else try{g=new URLSearchParams(i.body),b=Up(g)}catch{return s()}let m={formMethod:f,formAction:d,formEncType:i&&i.formEncType||"application/x-www-form-urlencoded",formData:b,json:void 0,text:void 0};if(Dt(m.formMethod))return{path:r,submission:m};let x=Xa(r);return a&&x.search&&ff(x.search)&&g.append("index",""),x.search=`?${g}`,{path:Gn(x),submission:m}}function Cp(a,r,i,s,c,f,d,g,b,m,x,y,j,z,w,S,R,G,X,K,oe){let J=K?rn(K[1])?K[1].error:K[1].data:void 0,ue=c.createURL(f.location),C=c.createURL(b),le;if(x&&f.errors){let me=Object.keys(f.errors)[0];le=d.findIndex(D=>D.route.id===me)}else if(K&&rn(K[1])){let me=K[0];le=d.findIndex(D=>D.route.id===me)-1}let Q=K?K[1].statusCode:void 0,Oe=Q&&Q>=400,je={currentUrl:ue,currentParams:f.matches[0]?.params||{},nextUrl:C,nextParams:d[0].params,...g,actionResult:J,actionStatus:Q},ee=wi(d),xe=d.map((me,D)=>{let{route:$}=me,I=null;if(le!=null&&D>le?I=!1:$.lazy?I=!0:uf($)?x?I=$c($,f.loaderData,f.errors):qv(f.loaderData,f.matches[D],me)&&(I=!0):I=!1,I!==null)return Wc(i,s,a,ee,me,m,r,I);let Se=!1;typeof oe=="boolean"?Se=oe:Oe?Se=!1:(y||ue.pathname+ue.search===C.pathname+C.search||ue.search!==C.search||Yv(f.matches[D],me))&&(Se=!0);let Te={...je,defaultShouldRevalidate:Se},T=gi(me,Te);return Wc(i,s,a,ee,me,m,r,T,Te,oe)}),be=[];return w.forEach((me,D)=>{if(x||!d.some(ne=>ne.route.id===me.routeId)||z.has(D))return;let $=f.fetchers.get(D),I=$&&$.state!=="idle"&&$.data===void 0,Se=qa(R,me.path,G);if(!Se){if(X&&I)return;be.push({key:D,routeId:me.routeId,path:me.path,matches:null,match:null,request:null,controller:null});return}if(S.has(D))return;let Te=Io(Se,me.path),T=new AbortController,Y=ir(c,me.path,T.signal),W=null;if(j.has(D))j.delete(D),W=sr(i,s,Y,Se,Te,m,r);else if(I)y&&(W=sr(i,s,Y,Se,Te,m,r));else{let ne;typeof oe=="boolean"?ne=oe:Oe?ne=!1:ne=y;let de={...je,defaultShouldRevalidate:ne};gi(Te,de)&&(W=sr(i,s,Y,Se,Te,m,r,de))}W&&be.push({key:D,routeId:me.routeId,path:me.path,matches:W,match:Te,request:Y,controller:T})}),{dsMatches:xe,revalidatingFetchers:be}}function uf(a){return a.loader!=null||a.middleware!=null&&a.middleware.length>0}function $c(a,r,i){if(a.lazy)return!0;if(!uf(a))return!1;let s=r!=null&&a.id in r,c=i!=null&&i[a.id]!==void 0;return!s&&c?!1:typeof a.loader=="function"&&a.loader.hydrate===!0?!0:!s&&!c}function qv(a,r,i){let s=!r||i.route.id!==r.route.id,c=!a.hasOwnProperty(i.route.id);return s||c}function Yv(a,r){let i=a.route.path;return a.pathname!==r.pathname||i!=null&&i.endsWith("*")&&a.params["*"]!==r.params["*"]}function gi(a,r){if(a.route.shouldRevalidate){let i=a.route.shouldRevalidate(r);if(typeof i=="boolean")return i}return r.defaultShouldRevalidate}function zp(a,r,i,s,c,f){let d;if(a){let m=s[a];ze(m,`No route found to patch children into: routeId = ${a}`),m.children||(m.children=[]),d=m.children}else d=i;let g=[],b=[];if(r.forEach(m=>{let x=d.find(y=>Dm(m,y));x?b.push({existingRoute:x,newRoute:m}):g.push(m)}),g.length>0){let m=vi(g,c,[a||"_","patch",String(d?.length||"0")],s);d.push(...m)}if(f&&b.length>0)for(let m=0;m<b.length;m++){let{existingRoute:x,newRoute:y}=b[m],j=x,[z]=vi([y],c,[],{},!0);Object.assign(j,{element:z.element?z.element:j.element,errorElement:z.errorElement?z.errorElement:j.errorElement,hydrateFallbackElement:z.hydrateFallbackElement?z.hydrateFallbackElement:j.hydrateFallbackElement})}}function Dm(a,r){return"id"in a&&"id"in r&&a.id===r.id?!0:a.index===r.index&&a.path===r.path&&a.caseSensitive===r.caseSensitive?(!a.children||a.children.length===0)&&(!r.children||r.children.length===0)?!0:a.children.every((i,s)=>r.children?.some(c=>Dm(i,c))):!1}var Ap=new WeakMap,km=({key:a,route:r,manifest:i,mapRouteProperties:s})=>{let c=i[r.id];if(ze(c,"No route found in manifest"),!c.lazy||typeof c.lazy!="object")return;let f=c.lazy[a];if(!f)return;let d=Ap.get(c);d||(d={},Ap.set(c,d));let g=d[a];if(g)return g;let b=(async()=>{let m=lv(a),y=c[a]!==void 0&&a!=="hasErrorBoundary";if(m)gt(!m,"Route property "+a+" is not a supported lazy route property. This property will be ignored."),d[a]=Promise.resolve();else if(y)gt(!1,`Route "${c.id}" has a static property "${a}" defined. The lazy property will be ignored.`);else{let j=await f();j!=null&&(Object.assign(c,{[a]:j}),Object.assign(c,s(c)))}typeof c.lazy=="object"&&(c.lazy[a]=void 0,Object.values(c.lazy).every(j=>j===void 0)&&(c.lazy=void 0))})();return d[a]=b,b},Mp=new WeakMap;function Gv(a,r,i,s,c){let f=i[a.id];if(ze(f,"No route found in manifest"),!a.lazy)return{lazyRoutePromise:void 0,lazyHandlerPromise:void 0};if(typeof a.lazy=="function"){let x=Mp.get(f);if(x)return{lazyRoutePromise:x,lazyHandlerPromise:x};let y=(async()=>{ze(typeof a.lazy=="function","No lazy route function found");let j=await a.lazy(),z={};for(let w in j){let S=j[w];if(S===void 0)continue;let R=iv(w),X=f[w]!==void 0&&w!=="hasErrorBoundary";R?gt(!R,"Route property "+w+" is not a supported property to be returned from a lazy route function. This property will be ignored."):X?gt(!X,`Route "${f.id}" has a static property "${w}" defined but its lazy function is also returning a value for this property. The lazy route property "${w}" will be ignored.`):z[w]=S}Object.assign(f,z),Object.assign(f,{...s(f),lazy:void 0})})();return Mp.set(f,y),y.catch(()=>{}),{lazyRoutePromise:y,lazyHandlerPromise:y}}let d=Object.keys(a.lazy),g=[],b;for(let x of d){if(c&&c.includes(x))continue;let y=km({key:x,route:a,manifest:i,mapRouteProperties:s});y&&(g.push(y),x===r&&(b=y))}let m=g.length>0?Promise.all(g).then(()=>{}):void 0;return m?.catch(()=>{}),b?.catch(()=>{}),{lazyRoutePromise:m,lazyHandlerPromise:b}}async function Dp(a){let r=a.matches.filter(c=>c.shouldLoad),i={};return(await Promise.all(r.map(c=>c.resolve()))).forEach((c,f)=>{i[r[f].route.id]=c}),i}async function Xv(a){return a.matches.some(r=>r.route.middleware)?Um(a,()=>Dp(a)):Dp(a)}function Um(a,r){return Vv(a,r,s=>{if(ay(s))throw s;return s},Iv,i);function i(s,c,f){if(f)return Promise.resolve(Object.assign(f.value,{[c]:{type:"error",result:s}}));{let{matches:d}=a,g=Math.min(Math.max(d.findIndex(m=>m.route.id===c),0),Math.max(d.findIndex(m=>m.shouldCallHandler()),0)),b=Ya(d,d[g].route.id).route.id;return Promise.resolve({[b]:{type:"error",result:s}})}}}async function Vv(a,r,i,s,c){let{matches:f,request:d,params:g,context:b,unstable_pattern:m}=a,x=f.flatMap(j=>j.route.middleware?j.route.middleware.map(z=>[j.route.id,z]):[]);return await Hm({request:d,params:g,context:b,unstable_pattern:m},x,r,i,s,c)}async function Hm(a,r,i,s,c,f,d=0){let{request:g}=a;if(g.signal.aborted)throw g.signal.reason??new Error(`Request aborted: ${g.method} ${g.url}`);let b=r[d];if(!b)return await i();let[m,x]=b,y,j=async()=>{if(y)throw new Error("You may only call `next()` once per middleware");try{return y={value:await Hm(a,r,i,s,c,f,d+1)},y.value}catch(z){return y={value:await f(z,m,y)},y.value}};try{let z=await x(a,j),w=z!=null?s(z):void 0;return c(w)?w:y?w??y.value:(y={value:await j()},y.value)}catch(z){return await f(z,m,y)}}function Lm(a,r,i,s,c){let f=km({key:"middleware",route:s.route,manifest:r,mapRouteProperties:a}),d=Gv(s.route,Dt(i.method)?"action":"loader",r,a,c);return{middleware:f,route:d.lazyRoutePromise,handler:d.lazyHandlerPromise}}function Wc(a,r,i,s,c,f,d,g,b=null,m){let x=!1,y=Lm(a,r,i,c,f);return{...c,_lazyPromises:y,shouldLoad:g,shouldRevalidateArgs:b,shouldCallHandler(j){return x=!0,b?typeof m=="boolean"?gi(c,{...b,defaultShouldRevalidate:m}):typeof j=="boolean"?gi(c,{...b,defaultShouldRevalidate:j}):gi(c,b):g},resolve(j){let{lazy:z,loader:w,middleware:S}=c.route,R=x||g||j&&!Dt(i.method)&&(z||w),G=S&&S.length>0&&!w&&!z;return R&&(Dt(i.method)||!G)?Pv({request:i,unstable_pattern:s,match:c,lazyHandlerPromise:y?.handler,lazyRoutePromise:y?.route,handlerOverride:j,scopedContext:d}):Promise.resolve({type:"data",result:void 0})}}}function sr(a,r,i,s,c,f,d,g=null){return s.map(b=>b.route.id!==c.route.id?{...b,shouldLoad:!1,shouldRevalidateArgs:g,shouldCallHandler:()=>!1,_lazyPromises:Lm(a,r,i,b,f),resolve:()=>Promise.resolve({type:"data",result:void 0})}:Wc(a,r,i,wi(s),b,f,d,!0,g))}async function Zv(a,r,i,s,c,f){i.some(m=>m._lazyPromises?.middleware)&&await Promise.all(i.map(m=>m._lazyPromises?.middleware));let d={request:r,unstable_pattern:wi(i),params:i[0].params,context:c,matches:i},b=await a({...d,fetcherKey:s,runClientMiddleware:m=>{let x=d;return Um(x,()=>m({...x,fetcherKey:s,runClientMiddleware:()=>{throw new Error("Cannot call `runClientMiddleware()` from within an `runClientMiddleware` handler")}}))}});try{await Promise.all(i.flatMap(m=>[m._lazyPromises?.handler,m._lazyPromises?.route]))}catch{}return b}async function Pv({request:a,unstable_pattern:r,match:i,lazyHandlerPromise:s,lazyRoutePromise:c,handlerOverride:f,scopedContext:d}){let g,b,m=Dt(a.method),x=m?"action":"loader",y=j=>{let z,w=new Promise((G,X)=>z=X);b=()=>z(),a.signal.addEventListener("abort",b);let S=G=>typeof j!="function"?Promise.reject(new Error(`You cannot call the handler for a route which defines a boolean "${x}" [routeId: ${i.route.id}]`)):j({request:a,unstable_pattern:r,params:i.params,context:d},...G!==void 0?[G]:[]),R=(async()=>{try{return{type:"data",result:await(f?f(X=>S(X)):S())}}catch(G){return{type:"error",result:G}}})();return Promise.race([R,w])};try{let j=m?i.route.action:i.route.loader;if(s||c)if(j){let z,[w]=await Promise.all([y(j).catch(S=>{z=S}),s,c]);if(z!==void 0)throw z;g=w}else{await s;let z=m?i.route.action:i.route.loader;if(z)[g]=await Promise.all([y(z),c]);else if(x==="action"){let w=new URL(a.url),S=w.pathname+w.search;throw yn(405,{method:a.method,pathname:S,routeId:i.route.id})}else return{type:"data",result:void 0}}else if(j)g=await y(j);else{let z=new URL(a.url),w=z.pathname+z.search;throw yn(404,{pathname:w})}}catch(j){return{type:"error",result:j}}finally{b&&a.signal.removeEventListener("abort",b)}return g}async function Qv(a){let r=a.headers.get("Content-Type");return r&&/\bapplication\/json\b/.test(r)?a.body==null?null:a.json():a.text()}async function Kv(a){let{result:r,type:i}=a;if(cf(r)){let s;try{s=await Qv(r)}catch(c){return{type:"error",error:c}}return i==="error"?{type:"error",error:new xi(r.status,r.statusText,s),statusCode:r.status,headers:r.headers}:{type:"data",data:s,statusCode:r.status,headers:r.headers}}return i==="error"?qp(r)?r.data instanceof Error?{type:"error",error:r.data,statusCode:r.init?.status,headers:r.init?.headers?new Headers(r.init.headers):void 0}:{type:"error",error:Wv(r),statusCode:yi(r)?r.status:void 0,headers:r.init?.headers?new Headers(r.init.headers):void 0}:{type:"error",error:r,statusCode:yi(r)?r.status:void 0}:qp(r)?{type:"data",data:r.data,statusCode:r.init?.status,headers:r.init?.headers?new Headers(r.init.headers):void 0}:{type:"data",data:r}}function Jv(a,r,i,s,c){let f=a.headers.get("Location");if(ze(f,"Redirects returned/thrown from loaders/actions must have a Location header"),!sf(f)){let d=s.slice(0,s.findIndex(g=>g.route.id===i)+1);f=Fc(new URL(r.url),d,c,f),a.headers.set("Location",f)}return a}function kp(a,r,i,s){let c=["about:","blob:","chrome:","chrome-untrusted:","content:","data:","devtools:","file:","filesystem:","javascript:"];if(sf(a)){let f=a,d=f.startsWith("//")?new URL(r.protocol+f):new URL(f);if(c.includes(d.protocol))throw new Error("Invalid redirect location");let g=xn(d.pathname,i)!=null;if(d.origin===r.origin&&g)return d.pathname+d.search+d.hash}try{let f=s.createURL(a);if(c.includes(f.protocol))throw new Error("Invalid redirect location")}catch{}return a}function ir(a,r,i,s){let c=a.createURL(Bm(r)).toString(),f={signal:i};if(s&&Dt(s.formMethod)){let{formMethod:d,formEncType:g}=s;f.method=d.toUpperCase(),g==="application/json"?(f.headers=new Headers({"Content-Type":g}),f.body=JSON.stringify(s.json)):g==="text/plain"?f.body=s.text:g==="application/x-www-form-urlencoded"&&s.formData?f.body=Ic(s.formData):f.body=s.formData}return new Request(c,f)}function Ic(a){let r=new URLSearchParams;for(let[i,s]of a.entries())r.append(i,typeof s=="string"?s:s.name);return r}function Up(a){let r=new FormData;for(let[i,s]of a.entries())r.append(i,s);return r}function Fv(a,r,i,s=!1,c=!1){let f={},d=null,g,b=!1,m={},x=i&&rn(i[1])?i[1].error:void 0;return a.forEach(y=>{if(!(y.route.id in r))return;let j=y.route.id,z=r[j];if(ze(!bl(z),"Cannot handle redirect results in processLoaderData"),rn(z)){let w=z.error;if(x!==void 0&&(w=x,x=void 0),d=d||{},c)d[j]=w;else{let S=Ya(a,j);d[S.route.id]==null&&(d[S.route.id]=w)}s||(f[j]=Mm),b||(b=!0,g=yi(z.error)?z.error.status:500),z.headers&&(m[j]=z.headers)}else f[j]=z.data,z.statusCode&&z.statusCode!==200&&!b&&(g=z.statusCode),z.headers&&(m[j]=z.headers)}),x!==void 0&&i&&(d={[i[0]]:x},i[2]&&(f[i[2]]=void 0)),{loaderData:f,errors:d,statusCode:g||200,loaderHeaders:m}}function Hp(a,r,i,s,c,f){let{loaderData:d,errors:g}=Fv(r,i,s);return c.filter(b=>!b.matches||b.matches.some(m=>m.shouldLoad)).forEach(b=>{let{key:m,match:x,controller:y}=b;if(y&&y.signal.aborted)return;let j=f[m];if(ze(j,"Did not find corresponding fetcher result"),rn(j)){let z=Ya(a.matches,x?.route.id);g&&g[z.route.id]||(g={...g,[z.route.id]:j.error}),a.fetchers.delete(m)}else if(bl(j))ze(!1,"Unhandled fetcher revalidation redirect");else{let z=da(j.data);a.fetchers.set(m,z)}}),{loaderData:d,errors:g}}function Lp(a,r,i,s){let c=Object.entries(r).filter(([,f])=>f!==Mm).reduce((f,[d,g])=>(f[d]=g,f),{});for(let f of i){let d=f.route.id;if(!r.hasOwnProperty(d)&&a.hasOwnProperty(d)&&f.route.loader&&(c[d]=a[d]),s&&s.hasOwnProperty(d))break}return c}function Bp(a){return a?rn(a[1])?{actionData:{}}:{actionData:{[a[0]]:a[1].data}}:{}}function Ya(a,r){return(r?a.slice(0,a.findIndex(s=>s.route.id===r)+1):[...a]).reverse().find(s=>s.route.hasErrorBoundary===!0)||a[0]}function Qo(a){let r=a.length===1?a[0]:a.find(i=>i.index||!i.path||i.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:r}],route:r}}function yn(a,{pathname:r,routeId:i,method:s,type:c,message:f}={}){let d="Unknown Server Error",g="Unknown @remix-run/router error";return a===400?(d="Bad Request",s&&r&&i?g=`You made a ${s} request to "${r}" but did not provide a \`loader\` for route "${i}", so there is no way to handle the request.`:c==="invalid-body"&&(g="Unable to encode submission body")):a===403?(d="Forbidden",g=`Route "${i}" does not match URL "${r}"`):a===404?(d="Not Found",g=`No route matches URL "${r}"`):a===405&&(d="Method Not Allowed",s&&r&&i?g=`You made a ${s.toUpperCase()} request to "${r}" but did not provide an \`action\` for route "${i}", so there is no way to handle the request.`:s&&(g=`Invalid request method "${s.toUpperCase()}"`)),new xi(a||500,d,new Error(g),!0)}function Ko(a){let r=Object.entries(a);for(let i=r.length-1;i>=0;i--){let[s,c]=r[i];if(bl(c))return{key:s,result:c}}}function Bm(a){let r=typeof a=="string"?Xa(a):a;return Gn({...r,hash:""})}function $v(a,r){return a.pathname!==r.pathname||a.search!==r.search?!1:a.hash===""?r.hash!=="":a.hash===r.hash?!0:r.hash!==""}function Wv(a){return new xi(a.init?.status??500,a.init?.statusText??"Internal Server Error",a.data)}function Iv(a){return a!=null&&typeof a=="object"&&Object.entries(a).every(([r,i])=>typeof r=="string"&&ey(i))}function ey(a){return a!=null&&typeof a=="object"&&"type"in a&&"result"in a&&(a.type==="data"||a.type==="error")}function ty(a){return cf(a.result)&&zm.has(a.result.status)}function rn(a){return a.type==="error"}function bl(a){return(a&&a.type)==="redirect"}function qp(a){return typeof a=="object"&&a!=null&&"type"in a&&"data"in a&&"init"in a&&a.type==="DataWithResponseInit"}function cf(a){return a!=null&&typeof a.status=="number"&&typeof a.statusText=="string"&&typeof a.headers=="object"&&typeof a.body<"u"}function ny(a){return zm.has(a)}function ay(a){return cf(a)&&ny(a.status)&&a.headers.has("Location")}function ly(a){return Dv.has(a.toUpperCase())}function Dt(a){return Av.has(a.toUpperCase())}function ff(a){return new URLSearchParams(a).getAll("index").some(r=>r==="")}function Io(a,r){let i=typeof r=="string"?Xa(r).search:r.search;if(a[a.length-1].route.index&&ff(i||""))return a[a.length-1];let s=Nm(a);return s[s.length-1]}function Yp(a){let{formMethod:r,formAction:i,formEncType:s,text:c,formData:f,json:d}=a;if(!(!r||!i||!s)){if(c!=null)return{formMethod:r,formAction:i,formEncType:s,formData:void 0,json:void 0,text:c};if(f!=null)return{formMethod:r,formAction:i,formEncType:s,formData:f,json:void 0,text:void 0};if(d!==void 0)return{formMethod:r,formAction:i,formEncType:s,formData:void 0,json:d,text:void 0}}}function Xc(a,r){return r?{state:"loading",location:a,formMethod:r.formMethod,formAction:r.formAction,formEncType:r.formEncType,formData:r.formData,json:r.json,text:r.text}:{state:"loading",location:a,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function ry(a,r){return{state:"submitting",location:a,formMethod:r.formMethod,formAction:r.formAction,formEncType:r.formEncType,formData:r.formData,json:r.json,text:r.text}}function ci(a,r){return a?{state:"loading",formMethod:a.formMethod,formAction:a.formAction,formEncType:a.formEncType,formData:a.formData,json:a.json,text:a.text,data:r}:{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:r}}function iy(a,r){return{state:"submitting",formMethod:a.formMethod,formAction:a.formAction,formEncType:a.formEncType,formData:a.formData,json:a.json,text:a.text,data:r?r.data:void 0}}function da(a){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:a}}function oy(a,r){try{let i=a.sessionStorage.getItem(Am);if(i){let s=JSON.parse(i);for(let[c,f]of Object.entries(s||{}))f&&Array.isArray(f)&&r.set(c,new Set(f||[]))}}catch{}}function sy(a,r){if(r.size>0){let i={};for(let[s,c]of r)i[s]=[...c];try{a.sessionStorage.setItem(Am,JSON.stringify(i))}catch(s){gt(!1,`Failed to save applied view transitions in sessionStorage (${s}).`)}}}function Gp(){let a,r,i=new Promise((s,c)=>{a=async f=>{s(f);try{await i}catch{}},r=async f=>{c(f);try{await i}catch{}}});return{promise:i,resolve:a,reject:r}}var wl=N.createContext(null);wl.displayName="DataRouter";var Si=N.createContext(null);Si.displayName="DataRouterState";var qm=N.createContext(!1);function uy(){return N.useContext(qm)}var df=N.createContext({isTransitioning:!1});df.displayName="ViewTransition";var Ym=N.createContext(new Map);Ym.displayName="Fetchers";var cy=N.createContext(null);cy.displayName="Await";var on=N.createContext(null);on.displayName="Navigation";var hs=N.createContext(null);hs.displayName="Location";var wn=N.createContext({outlet:null,matches:[],isDataRoute:!1});wn.displayName="Route";var hf=N.createContext(null);hf.displayName="RouteError";var Gm="REACT_ROUTER_ERROR",fy="REDIRECT",dy="ROUTE_ERROR_RESPONSE";function hy(a){if(a.startsWith(`${Gm}:${fy}:{`))try{let r=JSON.parse(a.slice(28));if(typeof r=="object"&&r&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.location=="string"&&typeof r.reloadDocument=="boolean"&&typeof r.replace=="boolean")return r}catch{}}function py(a){if(a.startsWith(`${Gm}:${dy}:{`))try{let r=JSON.parse(a.slice(40));if(typeof r=="object"&&r&&typeof r.status=="number"&&typeof r.statusText=="string")return new xi(r.status,r.statusText,r.data)}catch{}}function my(a,{relative:r}={}){ze(cr(),"useHref() may be used only in the context of a <Router> component.");let{basename:i,navigator:s}=N.useContext(on),{hash:c,pathname:f,search:d}=Ei(a,{relative:r}),g=f;return i!=="/"&&(g=f==="/"?i:Yn([i,f])),s.createHref({pathname:g,search:d,hash:c})}function cr(){return N.useContext(hs)!=null}function Xn(){return ze(cr(),"useLocation() may be used only in the context of a <Router> component."),N.useContext(hs).location}var Xm="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Vm(a){N.useContext(on).static||N.useLayoutEffect(a)}function St(){let{isDataRoute:a}=N.useContext(wn);return a?_y():gy()}function gy(){ze(cr(),"useNavigate() may be used only in the context of a <Router> component.");let a=N.useContext(wl),{basename:r,navigator:i}=N.useContext(on),{matches:s}=N.useContext(wn),{pathname:c}=Xn(),f=JSON.stringify(fs(s)),d=N.useRef(!1);return Vm(()=>{d.current=!0}),N.useCallback((b,m={})=>{if(gt(d.current,Xm),!d.current)return;if(typeof b=="number"){i.go(b);return}let x=ds(b,JSON.parse(f),c,m.relative==="path");a==null&&r!=="/"&&(x.pathname=x.pathname==="/"?r:Yn([r,x.pathname])),(m.replace?i.replace:i.push)(x,m.state,m)},[r,i,f,c,a])}var by=N.createContext(null);function vy(a){let r=N.useContext(wn).outlet;return N.useMemo(()=>r&&N.createElement(by.Provider,{value:a},r),[r,a])}function pf(){let{matches:a}=N.useContext(wn),r=a[a.length-1];return r?r.params:{}}function Ei(a,{relative:r}={}){let{matches:i}=N.useContext(wn),{pathname:s}=Xn(),c=JSON.stringify(fs(i));return N.useMemo(()=>ds(a,JSON.parse(c),s,r==="path"),[a,c,s,r])}function yy(a,r,i,s,c){ze(cr(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:f}=N.useContext(on),{matches:d}=N.useContext(wn),g=d[d.length-1],b=g?g.params:{},m=g?g.pathname:"/",x=g?g.pathnameBase:"/",y=g&&g.route;{let X=y&&y.path||"";Qm(m,!y||X.endsWith("*")||X.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${m}" (under <Route path="${X}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${X}"> to <Route path="${X==="/"?"*":`${X}/*`}">.`)}let j=Xn(),z;z=j;let w=z.pathname||"/",S=w;if(x!=="/"){let X=x.replace(/^\//,"").split("/");S="/"+w.replace(/^\//,"").split("/").slice(X.length).join("/")}let R=qa(a,{pathname:S});return gt(y||R!=null,`No routes matched location "${z.pathname}${z.search}${z.hash}" `),gt(R==null||R[R.length-1].route.element!==void 0||R[R.length-1].route.Component!==void 0||R[R.length-1].route.lazy!==void 0,`Matched leaf route at location "${z.pathname}${z.search}${z.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`),Oy(R&&R.map(X=>Object.assign({},X,{params:Object.assign({},b,X.params),pathname:Yn([x,f.encodeLocation?f.encodeLocation(X.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:X.pathname]),pathnameBase:X.pathnameBase==="/"?x:Yn([x,f.encodeLocation?f.encodeLocation(X.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:X.pathnameBase])})),d,i,s,c)}function xy(){let a=Pm(),r=yi(a)?`${a.status} ${a.statusText}`:a instanceof Error?a.message:JSON.stringify(a),i=a instanceof Error?a.stack:null,s="rgba(200,200,200, 0.5)",c={padding:"0.5rem",backgroundColor:s},f={padding:"2px 4px",backgroundColor:s},d=null;return console.error("Error handled by React Router default ErrorBoundary:",a),d=N.createElement(N.Fragment,null,N.createElement("p",null,"💿 Hey developer 👋"),N.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",N.createElement("code",{style:f},"ErrorBoundary")," or"," ",N.createElement("code",{style:f},"errorElement")," prop on your route.")),N.createElement(N.Fragment,null,N.createElement("h2",null,"Unexpected Application Error!"),N.createElement("h3",{style:{fontStyle:"italic"}},r),i?N.createElement("pre",{style:c},i):null,d)}var wy=N.createElement(xy,null),Zm=class extends N.Component{constructor(a){super(a),this.state={location:a.location,revalidation:a.revalidation,error:a.error}}static getDerivedStateFromError(a){return{error:a}}static getDerivedStateFromProps(a,r){return r.location!==a.location||r.revalidation!=="idle"&&a.revalidation==="idle"?{error:a.error,location:a.location,revalidation:a.revalidation}:{error:a.error!==void 0?a.error:r.error,location:r.location,revalidation:a.revalidation||r.revalidation}}componentDidCatch(a,r){this.props.onError?this.props.onError(a,r):console.error("React Router caught the following error during render",a)}render(){let a=this.state.error;if(this.context&&typeof a=="object"&&a&&"digest"in a&&typeof a.digest=="string"){const i=py(a.digest);i&&(a=i)}let r=a!==void 0?N.createElement(wn.Provider,{value:this.props.routeContext},N.createElement(hf.Provider,{value:a,children:this.props.component})):this.props.children;return this.context?N.createElement(Sy,{error:a},r):r}};Zm.contextType=qm;var Vc=new WeakMap;function Sy({children:a,error:r}){let{basename:i}=N.useContext(on);if(typeof r=="object"&&r&&"digest"in r&&typeof r.digest=="string"){let s=hy(r.digest);if(s){let c=Vc.get(r);if(c)throw c;let f=Rm(s.location,i);if(Tm&&!Vc.get(r))if(f.isExternal||s.reloadDocument)window.location.href=f.absoluteURL||f.to;else{const d=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(f.to,{replace:s.replace}));throw Vc.set(r,d),d}return N.createElement("meta",{httpEquiv:"refresh",content:`0;url=${f.absoluteURL||f.to}`})}}return a}function Ey({routeContext:a,match:r,children:i}){let s=N.useContext(wl);return s&&s.static&&s.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=r.route.id),N.createElement(wn.Provider,{value:a},i)}function Oy(a,r=[],i=null,s=null,c=null){if(a==null){if(!i)return null;if(i.errors)a=i.matches;else if(r.length===0&&!i.initialized&&i.matches.length>0)a=i.matches;else return null}let f=a,d=i?.errors;if(d!=null){let x=f.findIndex(y=>y.route.id&&d?.[y.route.id]!==void 0);ze(x>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(d).join(",")}`),f=f.slice(0,Math.min(f.length,x+1))}let g=!1,b=-1;if(i)for(let x=0;x<f.length;x++){let y=f[x];if((y.route.HydrateFallback||y.route.hydrateFallbackElement)&&(b=x),y.route.id){let{loaderData:j,errors:z}=i,w=y.route.loader&&!j.hasOwnProperty(y.route.id)&&(!z||z[y.route.id]===void 0);if(y.route.lazy||w){g=!0,b>=0?f=f.slice(0,b+1):f=[f[0]];break}}}let m=i&&s?(x,y)=>{s(x,{location:i.location,params:i.matches?.[0]?.params??{},unstable_pattern:wi(i.matches),errorInfo:y})}:void 0;return f.reduceRight((x,y,j)=>{let z,w=!1,S=null,R=null;i&&(z=d&&y.route.id?d[y.route.id]:void 0,S=y.route.errorElement||wy,g&&(b<0&&j===0?(Qm("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),w=!0,R=null):b===j&&(w=!0,R=y.route.hydrateFallbackElement||null)));let G=r.concat(f.slice(0,j+1)),X=()=>{let K;return z?K=S:w?K=R:y.route.Component?K=N.createElement(y.route.Component,null):y.route.element?K=y.route.element:K=x,N.createElement(Ey,{match:y,routeContext:{outlet:x,matches:G,isDataRoute:i!=null},children:K})};return i&&(y.route.ErrorBoundary||y.route.errorElement||j===0)?N.createElement(Zm,{location:i.location,revalidation:i.revalidation,component:S,error:z,children:X(),routeContext:{outlet:null,matches:G,isDataRoute:!0},onError:m}):X()},null)}function mf(a){return`${a} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function jy(a){let r=N.useContext(wl);return ze(r,mf(a)),r}function Ny(a){let r=N.useContext(Si);return ze(r,mf(a)),r}function Ty(a){let r=N.useContext(wn);return ze(r,mf(a)),r}function gf(a){let r=Ty(a),i=r.matches[r.matches.length-1];return ze(i.route.id,`${a} can only be used on routes that contain a unique "id"`),i.route.id}function Ry(){return gf("useRouteId")}function Pm(){let a=N.useContext(hf),r=Ny("useRouteError"),i=gf("useRouteError");return a!==void 0?a:r.errors?.[i]}function _y(){let{router:a}=jy("useNavigate"),r=gf("useNavigate"),i=N.useRef(!1);return Vm(()=>{i.current=!0}),N.useCallback(async(c,f={})=>{gt(i.current,Xm),i.current&&(typeof c=="number"?await a.navigate(c):await a.navigate(c,{fromRouteId:r,...f}))},[a,r])}var Xp={};function Qm(a,r,i){!r&&!Xp[a]&&(Xp[a]=!0,gt(!1,i))}var Vp={};function Zp(a,r){!a&&!Vp[r]&&(Vp[r]=!0,console.warn(r))}var Cy="useOptimistic",Pp=Zb[Cy],zy=()=>{};function Ay(a){return Pp?Pp(a):[a,zy]}function My(a){let r={hasErrorBoundary:a.hasErrorBoundary||a.ErrorBoundary!=null||a.errorElement!=null};return a.Component&&(a.element&&gt(!1,"You should not include both `Component` and `element` on your route - `Component` will be used."),Object.assign(r,{element:N.createElement(a.Component),Component:void 0})),a.HydrateFallback&&(a.hydrateFallbackElement&&gt(!1,"You should not include both `HydrateFallback` and `hydrateFallbackElement` on your route - `HydrateFallback` will be used."),Object.assign(r,{hydrateFallbackElement:N.createElement(a.HydrateFallback),HydrateFallback:void 0})),a.ErrorBoundary&&(a.errorElement&&gt(!1,"You should not include both `ErrorBoundary` and `errorElement` on your route - `ErrorBoundary` will be used."),Object.assign(r,{errorElement:N.createElement(a.ErrorBoundary),ErrorBoundary:void 0})),r}var Dy=["HydrateFallback","hydrateFallbackElement"],ky=class{constructor(){this.status="pending",this.promise=new Promise((a,r)=>{this.resolve=i=>{this.status==="pending"&&(this.status="resolved",a(i))},this.reject=i=>{this.status==="pending"&&(this.status="rejected",r(i))}})}};function Uy({router:a,flushSync:r,onError:i,unstable_useTransitions:s}){s=uy()||s;let[f,d]=N.useState(a.state),[g,b]=Ay(f),[m,x]=N.useState(),[y,j]=N.useState({isTransitioning:!1}),[z,w]=N.useState(),[S,R]=N.useState(),[G,X]=N.useState(),K=N.useRef(new Map),oe=N.useCallback((le,{deletedFetchers:Q,newErrors:Oe,flushSync:je,viewTransitionOpts:ee})=>{Oe&&i&&Object.values(Oe).forEach(be=>i(be,{location:le.location,params:le.matches[0]?.params??{},unstable_pattern:wi(le.matches)})),le.fetchers.forEach((be,me)=>{be.data!==void 0&&K.current.set(me,be.data)}),Q.forEach(be=>K.current.delete(be)),Zp(je===!1||r!=null,'You provided the `flushSync` option to a router update, but you are not using the `<RouterProvider>` from `react-router/dom` so `ReactDOM.flushSync()` is unavailable.  Please update your app to `import { RouterProvider } from "react-router/dom"` and ensure you have `react-dom` installed as a dependency to use the `flushSync` option.');let xe=a.window!=null&&a.window.document!=null&&typeof a.window.document.startViewTransition=="function";if(Zp(ee==null||xe,"You provided the `viewTransition` option to a router update, but you do not appear to be running in a DOM environment as `window.startViewTransition` is not available."),!ee||!xe){r&&je?r(()=>d(le)):s===!1?d(le):N.startTransition(()=>{s===!0&&b(be=>Qp(be,le)),d(le)});return}if(r&&je){r(()=>{S&&(z?.resolve(),S.skipTransition()),j({isTransitioning:!0,flushSync:!0,currentLocation:ee.currentLocation,nextLocation:ee.nextLocation})});let be=a.window.document.startViewTransition(()=>{r(()=>d(le))});be.finished.finally(()=>{r(()=>{w(void 0),R(void 0),x(void 0),j({isTransitioning:!1})})}),r(()=>R(be));return}S?(z?.resolve(),S.skipTransition(),X({state:le,currentLocation:ee.currentLocation,nextLocation:ee.nextLocation})):(x(le),j({isTransitioning:!0,flushSync:!1,currentLocation:ee.currentLocation,nextLocation:ee.nextLocation}))},[a.window,r,S,z,s,b,i]);N.useLayoutEffect(()=>a.subscribe(oe),[a,oe]),N.useEffect(()=>{y.isTransitioning&&!y.flushSync&&w(new ky)},[y]),N.useEffect(()=>{if(z&&m&&a.window){let le=m,Q=z.promise,Oe=a.window.document.startViewTransition(async()=>{s===!1?d(le):N.startTransition(()=>{s===!0&&b(je=>Qp(je,le)),d(le)}),await Q});Oe.finished.finally(()=>{w(void 0),R(void 0),x(void 0),j({isTransitioning:!1})}),R(Oe)}},[m,z,a.window,s,b]),N.useEffect(()=>{z&&m&&g.location.key===m.location.key&&z.resolve()},[z,S,g.location,m]),N.useEffect(()=>{!y.isTransitioning&&G&&(x(G.state),j({isTransitioning:!0,flushSync:!1,currentLocation:G.currentLocation,nextLocation:G.nextLocation}),X(void 0))},[y.isTransitioning,G]);let J=N.useMemo(()=>({createHref:a.createHref,encodeLocation:a.encodeLocation,go:le=>a.navigate(le),push:(le,Q,Oe)=>a.navigate(le,{state:Q,preventScrollReset:Oe?.preventScrollReset}),replace:(le,Q,Oe)=>a.navigate(le,{replace:!0,state:Q,preventScrollReset:Oe?.preventScrollReset})}),[a]),ue=a.basename||"/",C=N.useMemo(()=>({router:a,navigator:J,static:!1,basename:ue,onError:i}),[a,J,ue,i]);return N.createElement(N.Fragment,null,N.createElement(wl.Provider,{value:C},N.createElement(Si.Provider,{value:g},N.createElement(Ym.Provider,{value:K.current},N.createElement(df.Provider,{value:y},N.createElement(Yy,{basename:ue,location:g.location,navigationType:g.historyAction,navigator:J,unstable_useTransitions:s},N.createElement(Hy,{routes:a.routes,future:a.future,state:g,onError:i})))))),null)}function Qp(a,r){return{...a,navigation:r.navigation.state!=="idle"?r.navigation:a.navigation,revalidation:r.revalidation!=="idle"?r.revalidation:a.revalidation,actionData:r.navigation.state!=="submitting"?r.actionData:a.actionData,fetchers:r.fetchers}}var Hy=N.memo(Ly);function Ly({routes:a,future:r,state:i,onError:s}){return yy(a,void 0,i,s,r)}function By({to:a,replace:r,state:i,relative:s}){ze(cr(),"<Navigate> may be used only in the context of a <Router> component.");let{static:c}=N.useContext(on);gt(!c,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:f}=N.useContext(wn),{pathname:d}=Xn(),g=St(),b=ds(a,fs(f),d,s==="path"),m=JSON.stringify(b);return N.useEffect(()=>{g(JSON.parse(m),{replace:r,state:i,relative:s})},[g,m,s,r,i]),null}function qy(a){return vy(a.context)}function Yy({basename:a="/",children:r=null,location:i,navigationType:s="POP",navigator:c,static:f=!1,unstable_useTransitions:d}){ze(!cr(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let g=a.replace(/^\/*/,"/"),b=N.useMemo(()=>({basename:g,navigator:c,static:f,unstable_useTransitions:d,future:{}}),[g,c,f,d]);typeof i=="string"&&(i=Xa(i));let{pathname:m="/",search:x="",hash:y="",state:j=null,key:z="default"}=i,w=N.useMemo(()=>{let S=xn(m,g);return S==null?null:{location:{pathname:S,search:x,hash:y,state:j,key:z},navigationType:s}},[g,m,x,y,j,z,s]);return gt(w!=null,`<Router basename="${g}"> is not able to match the URL "${m}${x}${y}" because it does not start with the basename, so the <Router> won't render anything.`),w==null?null:N.createElement(on.Provider,{value:b},N.createElement(hs.Provider,{children:r,value:w}))}var es="get",ts="application/x-www-form-urlencoded";function ps(a){return typeof HTMLElement<"u"&&a instanceof HTMLElement}function Gy(a){return ps(a)&&a.tagName.toLowerCase()==="button"}function Xy(a){return ps(a)&&a.tagName.toLowerCase()==="form"}function Vy(a){return ps(a)&&a.tagName.toLowerCase()==="input"}function Zy(a){return!!(a.metaKey||a.altKey||a.ctrlKey||a.shiftKey)}function Py(a,r){return a.button===0&&(!r||r==="_self")&&!Zy(a)}var Jo=null;function Qy(){if(Jo===null)try{new FormData(document.createElement("form"),0),Jo=!1}catch{Jo=!0}return Jo}var Ky=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Zc(a){return a!=null&&!Ky.has(a)?(gt(!1,`"${a}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${ts}"`),null):a}function Jy(a,r){let i,s,c,f,d;if(Xy(a)){let g=a.getAttribute("action");s=g?xn(g,r):null,i=a.getAttribute("method")||es,c=Zc(a.getAttribute("enctype"))||ts,f=new FormData(a)}else if(Gy(a)||Vy(a)&&(a.type==="submit"||a.type==="image")){let g=a.form;if(g==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let b=a.getAttribute("formaction")||g.getAttribute("action");if(s=b?xn(b,r):null,i=a.getAttribute("formmethod")||g.getAttribute("method")||es,c=Zc(a.getAttribute("formenctype"))||Zc(g.getAttribute("enctype"))||ts,f=new FormData(g,a),!Qy()){let{name:m,type:x,value:y}=a;if(x==="image"){let j=m?`${m}.`:"";f.append(`${j}x`,"0"),f.append(`${j}y`,"0")}else m&&f.append(m,y)}}else{if(ps(a))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');i=es,s=null,c=ts,d=a}return f&&c==="text/plain"&&(d=f,f=void 0),{action:s,method:i.toLowerCase(),encType:c,formData:f,body:d}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function bf(a,r){if(a===!1||a===null||typeof a>"u")throw new Error(r)}function Fy(a,r,i,s){let c=typeof a=="string"?new URL(a,typeof window>"u"?"server://singlefetch/":window.location.origin):a;return i?c.pathname.endsWith("/")?c.pathname=`${c.pathname}_.${s}`:c.pathname=`${c.pathname}.${s}`:c.pathname==="/"?c.pathname=`_root.${s}`:r&&xn(c.pathname,r)==="/"?c.pathname=`${r.replace(/\/$/,"")}/_root.${s}`:c.pathname=`${c.pathname.replace(/\/$/,"")}.${s}`,c}async function $y(a,r){if(a.id in r)return r[a.id];try{let i=await import(a.module);return r[a.id]=i,i}catch(i){return console.error(`Error loading route module \`${a.module}\`, reloading page...`),console.error(i),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Wy(a){return a==null?!1:a.href==null?a.rel==="preload"&&typeof a.imageSrcSet=="string"&&typeof a.imageSizes=="string":typeof a.rel=="string"&&typeof a.href=="string"}async function Iy(a,r,i){let s=await Promise.all(a.map(async c=>{let f=r.routes[c.route.id];if(f){let d=await $y(f,i);return d.links?d.links():[]}return[]}));return a2(s.flat(1).filter(Wy).filter(c=>c.rel==="stylesheet"||c.rel==="preload").map(c=>c.rel==="stylesheet"?{...c,rel:"prefetch",as:"style"}:{...c,rel:"prefetch"}))}function Kp(a,r,i,s,c,f){let d=(b,m)=>i[m]?b.route.id!==i[m].route.id:!0,g=(b,m)=>i[m].pathname!==b.pathname||i[m].route.path?.endsWith("*")&&i[m].params["*"]!==b.params["*"];return f==="assets"?r.filter((b,m)=>d(b,m)||g(b,m)):f==="data"?r.filter((b,m)=>{let x=s.routes[b.route.id];if(!x||!x.hasLoader)return!1;if(d(b,m)||g(b,m))return!0;if(b.route.shouldRevalidate){let y=b.route.shouldRevalidate({currentUrl:new URL(c.pathname+c.search+c.hash,window.origin),currentParams:i[0]?.params||{},nextUrl:new URL(a,window.origin),nextParams:b.params,defaultShouldRevalidate:!0});if(typeof y=="boolean")return y}return!0}):[]}function e2(a,r,{includeHydrateFallback:i}={}){return t2(a.map(s=>{let c=r.routes[s.route.id];if(!c)return[];let f=[c.module];return c.clientActionModule&&(f=f.concat(c.clientActionModule)),c.clientLoaderModule&&(f=f.concat(c.clientLoaderModule)),i&&c.hydrateFallbackModule&&(f=f.concat(c.hydrateFallbackModule)),c.imports&&(f=f.concat(c.imports)),f}).flat(1))}function t2(a){return[...new Set(a)]}function n2(a){let r={},i=Object.keys(a).sort();for(let s of i)r[s]=a[s];return r}function a2(a,r){let i=new Set;return new Set(r),a.reduce((s,c)=>{let f=JSON.stringify(n2(c));return i.has(f)||(i.add(f),s.push({key:f,link:c})),s},[])}function Km(){let a=N.useContext(wl);return bf(a,"You must render this element inside a <DataRouterContext.Provider> element"),a}function l2(){let a=N.useContext(Si);return bf(a,"You must render this element inside a <DataRouterStateContext.Provider> element"),a}var vf=N.createContext(void 0);vf.displayName="FrameworkContext";function Jm(){let a=N.useContext(vf);return bf(a,"You must render this element inside a <HydratedRouter> element"),a}function r2(a,r){let i=N.useContext(vf),[s,c]=N.useState(!1),[f,d]=N.useState(!1),{onFocus:g,onBlur:b,onMouseEnter:m,onMouseLeave:x,onTouchStart:y}=r,j=N.useRef(null);N.useEffect(()=>{if(a==="render"&&d(!0),a==="viewport"){let S=G=>{G.forEach(X=>{d(X.isIntersecting)})},R=new IntersectionObserver(S,{threshold:.5});return j.current&&R.observe(j.current),()=>{R.disconnect()}}},[a]),N.useEffect(()=>{if(s){let S=setTimeout(()=>{d(!0)},100);return()=>{clearTimeout(S)}}},[s]);let z=()=>{c(!0)},w=()=>{c(!1),d(!1)};return i?a!=="intent"?[f,j,{}]:[f,j,{onFocus:fi(g,z),onBlur:fi(b,w),onMouseEnter:fi(m,z),onMouseLeave:fi(x,w),onTouchStart:fi(y,z)}]:[!1,j,{}]}function fi(a,r){return i=>{a&&a(i),i.defaultPrevented||r(i)}}function i2({page:a,...r}){let{router:i}=Km(),s=N.useMemo(()=>qa(i.routes,a,i.basename),[i.routes,a,i.basename]);return s?N.createElement(s2,{page:a,matches:s,...r}):null}function o2(a){let{manifest:r,routeModules:i}=Jm(),[s,c]=N.useState([]);return N.useEffect(()=>{let f=!1;return Iy(a,r,i).then(d=>{f||c(d)}),()=>{f=!0}},[a,r,i]),s}function s2({page:a,matches:r,...i}){let s=Xn(),{future:c,manifest:f,routeModules:d}=Jm(),{basename:g}=Km(),{loaderData:b,matches:m}=l2(),x=N.useMemo(()=>Kp(a,r,m,f,s,"data"),[a,r,m,f,s]),y=N.useMemo(()=>Kp(a,r,m,f,s,"assets"),[a,r,m,f,s]),j=N.useMemo(()=>{if(a===s.pathname+s.search+s.hash)return[];let S=new Set,R=!1;if(r.forEach(X=>{let K=f.routes[X.route.id];!K||!K.hasLoader||(!x.some(oe=>oe.route.id===X.route.id)&&X.route.id in b&&d[X.route.id]?.shouldRevalidate||K.hasClientLoader?R=!0:S.add(X.route.id))}),S.size===0)return[];let G=Fy(a,g,c.unstable_trailingSlashAwareDataRequests,"data");return R&&S.size>0&&G.searchParams.set("_routes",r.filter(X=>S.has(X.route.id)).map(X=>X.route.id).join(",")),[G.pathname+G.search]},[g,c.unstable_trailingSlashAwareDataRequests,b,s,f,x,r,a,d]),z=N.useMemo(()=>e2(y,f),[y,f]),w=o2(y);return N.createElement(N.Fragment,null,j.map(S=>N.createElement("link",{key:S,rel:"prefetch",as:"fetch",href:S,...i})),z.map(S=>N.createElement("link",{key:S,rel:"modulepreload",href:S,...i})),w.map(({key:S,link:R})=>N.createElement("link",{key:S,nonce:i.nonce,...R,crossOrigin:R.crossOrigin??i.crossOrigin})))}function u2(...a){return r=>{a.forEach(i=>{typeof i=="function"?i(r):i!=null&&(i.current=r)})}}var c2=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{c2&&(window.__reactRouterVersion="7.13.0")}catch{}function f2(a,r){return Lv({basename:r?.basename,getContext:r?.getContext,future:r?.future,history:ev({window:r?.window}),hydrationData:d2(),routes:a,mapRouteProperties:My,hydrationRouteProperties:Dy,dataStrategy:r?.dataStrategy,patchRoutesOnNavigation:r?.patchRoutesOnNavigation,window:r?.window,unstable_instrumentations:r?.unstable_instrumentations}).initialize()}function d2(){let a=window?.__staticRouterHydrationData;return a&&a.errors&&(a={...a,errors:h2(a.errors)}),a}function h2(a){if(!a)return null;let r=Object.entries(a),i={};for(let[s,c]of r)if(c&&c.__type==="RouteErrorResponse")i[s]=new xi(c.status,c.statusText,c.data,c.internal===!0);else if(c&&c.__type==="Error"){if(c.__subType){let f=window[c.__subType];if(typeof f=="function")try{let d=new f(c.message);d.stack="",i[s]=d}catch{}}if(i[s]==null){let f=new Error(c.message);f.stack="",i[s]=f}}else i[s]=c;return i}var Fm=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ms=N.forwardRef(function({onClick:r,discover:i="render",prefetch:s="none",relative:c,reloadDocument:f,replace:d,state:g,target:b,to:m,preventScrollReset:x,viewTransition:y,unstable_defaultShouldRevalidate:j,...z},w){let{basename:S,unstable_useTransitions:R}=N.useContext(on),G=typeof m=="string"&&Fm.test(m),X=Rm(m,S);m=X.to;let K=my(m,{relative:c}),[oe,J,ue]=r2(s,z),C=g2(m,{replace:d,state:g,target:b,preventScrollReset:x,relative:c,viewTransition:y,unstable_defaultShouldRevalidate:j,unstable_useTransitions:R});function le(Oe){r&&r(Oe),Oe.defaultPrevented||C(Oe)}let Q=N.createElement("a",{...z,...ue,href:X.absoluteURL||K,onClick:X.isExternal||f?r:le,ref:u2(w,J),target:b,"data-discover":!G&&i==="render"?"true":void 0});return oe&&!G?N.createElement(N.Fragment,null,Q,N.createElement(i2,{page:K})):Q});ms.displayName="Link";var yf=N.forwardRef(function({"aria-current":r="page",caseSensitive:i=!1,className:s="",end:c=!1,style:f,to:d,viewTransition:g,children:b,...m},x){let y=Ei(d,{relative:m.relative}),j=Xn(),z=N.useContext(Si),{navigator:w,basename:S}=N.useContext(on),R=z!=null&&w2(y)&&g===!0,G=w.encodeLocation?w.encodeLocation(y).pathname:y.pathname,X=j.pathname,K=z&&z.navigation&&z.navigation.location?z.navigation.location.pathname:null;i||(X=X.toLowerCase(),K=K?K.toLowerCase():null,G=G.toLowerCase()),K&&S&&(K=xn(K,S)||K);const oe=G!=="/"&&G.endsWith("/")?G.length-1:G.length;let J=X===G||!c&&X.startsWith(G)&&X.charAt(oe)==="/",ue=K!=null&&(K===G||!c&&K.startsWith(G)&&K.charAt(G.length)==="/"),C={isActive:J,isPending:ue,isTransitioning:R},le=J?r:void 0,Q;typeof s=="function"?Q=s(C):Q=[s,J?"active":null,ue?"pending":null,R?"transitioning":null].filter(Boolean).join(" ");let Oe=typeof f=="function"?f(C):f;return N.createElement(ms,{...m,"aria-current":le,className:Q,ref:x,style:Oe,to:d,viewTransition:g},typeof b=="function"?b(C):b)});yf.displayName="NavLink";var p2=N.forwardRef(({discover:a="render",fetcherKey:r,navigate:i,reloadDocument:s,replace:c,state:f,method:d=es,action:g,onSubmit:b,relative:m,preventScrollReset:x,viewTransition:y,unstable_defaultShouldRevalidate:j,...z},w)=>{let{unstable_useTransitions:S}=N.useContext(on),R=y2(),G=x2(g,{relative:m}),X=d.toLowerCase()==="get"?"get":"post",K=typeof g=="string"&&Fm.test(g),oe=J=>{if(b&&b(J),J.defaultPrevented)return;J.preventDefault();let ue=J.nativeEvent.submitter,C=ue?.getAttribute("formmethod")||d,le=()=>R(ue||J.currentTarget,{fetcherKey:r,method:C,navigate:i,replace:c,state:f,relative:m,preventScrollReset:x,viewTransition:y,unstable_defaultShouldRevalidate:j});S&&i!==!1?N.startTransition(()=>le()):le()};return N.createElement("form",{ref:w,method:X,action:G,onSubmit:s?b:oe,...z,"data-discover":!K&&a==="render"?"true":void 0})});p2.displayName="Form";function m2(a){return`${a} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function $m(a){let r=N.useContext(wl);return ze(r,m2(a)),r}function g2(a,{target:r,replace:i,state:s,preventScrollReset:c,relative:f,viewTransition:d,unstable_defaultShouldRevalidate:g,unstable_useTransitions:b}={}){let m=St(),x=Xn(),y=Ei(a,{relative:f});return N.useCallback(j=>{if(Py(j,r)){j.preventDefault();let z=i!==void 0?i:Gn(x)===Gn(y),w=()=>m(a,{replace:z,state:s,preventScrollReset:c,relative:f,viewTransition:d,unstable_defaultShouldRevalidate:g});b?N.startTransition(()=>w()):w()}},[x,m,y,i,s,r,a,c,f,d,g,b])}var b2=0,v2=()=>`__${String(++b2)}__`;function y2(){let{router:a}=$m("useSubmit"),{basename:r}=N.useContext(on),i=Ry(),s=a.fetch,c=a.navigate;return N.useCallback(async(f,d={})=>{let{action:g,method:b,encType:m,formData:x,body:y}=Jy(f,r);if(d.navigate===!1){let j=d.fetcherKey||v2();await s(j,i,d.action||g,{unstable_defaultShouldRevalidate:d.unstable_defaultShouldRevalidate,preventScrollReset:d.preventScrollReset,formData:x,body:y,formMethod:d.method||b,formEncType:d.encType||m,flushSync:d.flushSync})}else await c(d.action||g,{unstable_defaultShouldRevalidate:d.unstable_defaultShouldRevalidate,preventScrollReset:d.preventScrollReset,formData:x,body:y,formMethod:d.method||b,formEncType:d.encType||m,replace:d.replace,state:d.state,fromRouteId:i,flushSync:d.flushSync,viewTransition:d.viewTransition})},[s,c,r,i])}function x2(a,{relative:r}={}){let{basename:i}=N.useContext(on),s=N.useContext(wn);ze(s,"useFormAction must be used inside a RouteContext");let[c]=s.matches.slice(-1),f={...Ei(a||".",{relative:r})},d=Xn();if(a==null){f.search=d.search;let g=new URLSearchParams(f.search),b=g.getAll("index");if(b.some(x=>x==="")){g.delete("index"),b.filter(y=>y).forEach(y=>g.append("index",y));let x=g.toString();f.search=x?`?${x}`:""}}return(!a||a===".")&&c.route.index&&(f.search=f.search?f.search.replace(/^\?/,"?index&"):"?index"),i!=="/"&&(f.pathname=f.pathname==="/"?i:Yn([i,f.pathname])),Gn(f)}function w2(a,{relative:r}={}){let i=N.useContext(df);ze(i!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:s}=$m("useViewTransitionState"),c=Ei(a,{relative:r});if(!i.isTransitioning)return!1;let f=xn(i.currentLocation.pathname,s)||i.currentLocation.pathname,d=xn(i.nextLocation.pathname,s)||i.nextLocation.pathname;return rs(c.pathname,d)!=null||rs(c.pathname,f)!=null}var S2=xm();function E2(a){return N.createElement(Uy,{flushSync:S2.flushSync,...a})}function Wm(a,r){return function(){return a.apply(r,arguments)}}const{toString:O2}=Object.prototype,{getPrototypeOf:xf}=Object,{iterator:gs,toStringTag:Im}=Symbol,bs=(a=>r=>{const i=O2.call(r);return a[i]||(a[i]=i.slice(8,-1).toLowerCase())})(Object.create(null)),Mn=a=>(a=a.toLowerCase(),r=>bs(r)===a),vs=a=>r=>typeof r===a,{isArray:fr}=Array,ur=vs("undefined");function Oi(a){return a!==null&&!ur(a)&&a.constructor!==null&&!ur(a.constructor)&&Pt(a.constructor.isBuffer)&&a.constructor.isBuffer(a)}const e1=Mn("ArrayBuffer");function j2(a){let r;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?r=ArrayBuffer.isView(a):r=a&&a.buffer&&e1(a.buffer),r}const N2=vs("string"),Pt=vs("function"),t1=vs("number"),ji=a=>a!==null&&typeof a=="object",T2=a=>a===!0||a===!1,ns=a=>{if(bs(a)!=="object")return!1;const r=xf(a);return(r===null||r===Object.prototype||Object.getPrototypeOf(r)===null)&&!(Im in a)&&!(gs in a)},R2=a=>{if(!ji(a)||Oi(a))return!1;try{return Object.keys(a).length===0&&Object.getPrototypeOf(a)===Object.prototype}catch{return!1}},_2=Mn("Date"),C2=Mn("File"),z2=Mn("Blob"),A2=Mn("FileList"),M2=a=>ji(a)&&Pt(a.pipe),D2=a=>{let r;return a&&(typeof FormData=="function"&&a instanceof FormData||Pt(a.append)&&((r=bs(a))==="formdata"||r==="object"&&Pt(a.toString)&&a.toString()==="[object FormData]"))},k2=Mn("URLSearchParams"),[U2,H2,L2,B2]=["ReadableStream","Request","Response","Headers"].map(Mn),q2=a=>a.trim?a.trim():a.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Ni(a,r,{allOwnKeys:i=!1}={}){if(a===null||typeof a>"u")return;let s,c;if(typeof a!="object"&&(a=[a]),fr(a))for(s=0,c=a.length;s<c;s++)r.call(null,a[s],s,a);else{if(Oi(a))return;const f=i?Object.getOwnPropertyNames(a):Object.keys(a),d=f.length;let g;for(s=0;s<d;s++)g=f[s],r.call(null,a[g],g,a)}}function n1(a,r){if(Oi(a))return null;r=r.toLowerCase();const i=Object.keys(a);let s=i.length,c;for(;s-- >0;)if(c=i[s],r===c.toLowerCase())return c;return null}const vl=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,a1=a=>!ur(a)&&a!==vl;function ef(){const{caseless:a,skipUndefined:r}=a1(this)&&this||{},i={},s=(c,f)=>{if(f==="__proto__"||f==="constructor"||f==="prototype")return;const d=a&&n1(i,f)||f;ns(i[d])&&ns(c)?i[d]=ef(i[d],c):ns(c)?i[d]=ef({},c):fr(c)?i[d]=c.slice():(!r||!ur(c))&&(i[d]=c)};for(let c=0,f=arguments.length;c<f;c++)arguments[c]&&Ni(arguments[c],s);return i}const Y2=(a,r,i,{allOwnKeys:s}={})=>(Ni(r,(c,f)=>{i&&Pt(c)?Object.defineProperty(a,f,{value:Wm(c,i),writable:!0,enumerable:!0,configurable:!0}):Object.defineProperty(a,f,{value:c,writable:!0,enumerable:!0,configurable:!0})},{allOwnKeys:s}),a),G2=a=>(a.charCodeAt(0)===65279&&(a=a.slice(1)),a),X2=(a,r,i,s)=>{a.prototype=Object.create(r.prototype,s),Object.defineProperty(a.prototype,"constructor",{value:a,writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(a,"super",{value:r.prototype}),i&&Object.assign(a.prototype,i)},V2=(a,r,i,s)=>{let c,f,d;const g={};if(r=r||{},a==null)return r;do{for(c=Object.getOwnPropertyNames(a),f=c.length;f-- >0;)d=c[f],(!s||s(d,a,r))&&!g[d]&&(r[d]=a[d],g[d]=!0);a=i!==!1&&xf(a)}while(a&&(!i||i(a,r))&&a!==Object.prototype);return r},Z2=(a,r,i)=>{a=String(a),(i===void 0||i>a.length)&&(i=a.length),i-=r.length;const s=a.indexOf(r,i);return s!==-1&&s===i},P2=a=>{if(!a)return null;if(fr(a))return a;let r=a.length;if(!t1(r))return null;const i=new Array(r);for(;r-- >0;)i[r]=a[r];return i},Q2=(a=>r=>a&&r instanceof a)(typeof Uint8Array<"u"&&xf(Uint8Array)),K2=(a,r)=>{const s=(a&&a[gs]).call(a);let c;for(;(c=s.next())&&!c.done;){const f=c.value;r.call(a,f[0],f[1])}},J2=(a,r)=>{let i;const s=[];for(;(i=a.exec(r))!==null;)s.push(i);return s},F2=Mn("HTMLFormElement"),$2=a=>a.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(i,s,c){return s.toUpperCase()+c}),Jp=(({hasOwnProperty:a})=>(r,i)=>a.call(r,i))(Object.prototype),W2=Mn("RegExp"),l1=(a,r)=>{const i=Object.getOwnPropertyDescriptors(a),s={};Ni(i,(c,f)=>{let d;(d=r(c,f,a))!==!1&&(s[f]=d||c)}),Object.defineProperties(a,s)},I2=a=>{l1(a,(r,i)=>{if(Pt(a)&&["arguments","caller","callee"].indexOf(i)!==-1)return!1;const s=a[i];if(Pt(s)){if(r.enumerable=!1,"writable"in r){r.writable=!1;return}r.set||(r.set=()=>{throw Error("Can not rewrite read-only method '"+i+"'")})}})},ex=(a,r)=>{const i={},s=c=>{c.forEach(f=>{i[f]=!0})};return fr(a)?s(a):s(String(a).split(r)),i},tx=()=>{},nx=(a,r)=>a!=null&&Number.isFinite(a=+a)?a:r;function ax(a){return!!(a&&Pt(a.append)&&a[Im]==="FormData"&&a[gs])}const lx=a=>{const r=new Array(10),i=(s,c)=>{if(ji(s)){if(r.indexOf(s)>=0)return;if(Oi(s))return s;if(!("toJSON"in s)){r[c]=s;const f=fr(s)?[]:{};return Ni(s,(d,g)=>{const b=i(d,c+1);!ur(b)&&(f[g]=b)}),r[c]=void 0,f}}return s};return i(a,0)},rx=Mn("AsyncFunction"),ix=a=>a&&(ji(a)||Pt(a))&&Pt(a.then)&&Pt(a.catch),r1=((a,r)=>a?setImmediate:r?((i,s)=>(vl.addEventListener("message",({source:c,data:f})=>{c===vl&&f===i&&s.length&&s.shift()()},!1),c=>{s.push(c),vl.postMessage(i,"*")}))(`axios@${Math.random()}`,[]):i=>setTimeout(i))(typeof setImmediate=="function",Pt(vl.postMessage)),ox=typeof queueMicrotask<"u"?queueMicrotask.bind(vl):typeof process<"u"&&process.nextTick||r1,sx=a=>a!=null&&Pt(a[gs]),B={isArray:fr,isArrayBuffer:e1,isBuffer:Oi,isFormData:D2,isArrayBufferView:j2,isString:N2,isNumber:t1,isBoolean:T2,isObject:ji,isPlainObject:ns,isEmptyObject:R2,isReadableStream:U2,isRequest:H2,isResponse:L2,isHeaders:B2,isUndefined:ur,isDate:_2,isFile:C2,isBlob:z2,isRegExp:W2,isFunction:Pt,isStream:M2,isURLSearchParams:k2,isTypedArray:Q2,isFileList:A2,forEach:Ni,merge:ef,extend:Y2,trim:q2,stripBOM:G2,inherits:X2,toFlatObject:V2,kindOf:bs,kindOfTest:Mn,endsWith:Z2,toArray:P2,forEachEntry:K2,matchAll:J2,isHTMLForm:F2,hasOwnProperty:Jp,hasOwnProp:Jp,reduceDescriptors:l1,freezeMethods:I2,toObjectSet:ex,toCamelCase:$2,noop:tx,toFiniteNumber:nx,findKey:n1,global:vl,isContextDefined:a1,isSpecCompliantForm:ax,toJSONObject:lx,isAsyncFn:rx,isThenable:ix,setImmediate:r1,asap:ox,isIterable:sx};let Ee=class i1 extends Error{static from(r,i,s,c,f,d){const g=new i1(r.message,i||r.code,s,c,f);return g.cause=r,g.name=r.name,d&&Object.assign(g,d),g}constructor(r,i,s,c,f){super(r),this.name="AxiosError",this.isAxiosError=!0,i&&(this.code=i),s&&(this.config=s),c&&(this.request=c),f&&(this.response=f,this.status=f.status)}toJSON(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:B.toJSONObject(this.config),code:this.code,status:this.status}}};Ee.ERR_BAD_OPTION_VALUE="ERR_BAD_OPTION_VALUE";Ee.ERR_BAD_OPTION="ERR_BAD_OPTION";Ee.ECONNABORTED="ECONNABORTED";Ee.ETIMEDOUT="ETIMEDOUT";Ee.ERR_NETWORK="ERR_NETWORK";Ee.ERR_FR_TOO_MANY_REDIRECTS="ERR_FR_TOO_MANY_REDIRECTS";Ee.ERR_DEPRECATED="ERR_DEPRECATED";Ee.ERR_BAD_RESPONSE="ERR_BAD_RESPONSE";Ee.ERR_BAD_REQUEST="ERR_BAD_REQUEST";Ee.ERR_CANCELED="ERR_CANCELED";Ee.ERR_NOT_SUPPORT="ERR_NOT_SUPPORT";Ee.ERR_INVALID_URL="ERR_INVALID_URL";const ux=null;function tf(a){return B.isPlainObject(a)||B.isArray(a)}function o1(a){return B.endsWith(a,"[]")?a.slice(0,-2):a}function Fp(a,r,i){return a?a.concat(r).map(function(c,f){return c=o1(c),!i&&f?"["+c+"]":c}).join(i?".":""):r}function cx(a){return B.isArray(a)&&!a.some(tf)}const fx=B.toFlatObject(B,{},null,function(r){return/^is[A-Z]/.test(r)});function ys(a,r,i){if(!B.isObject(a))throw new TypeError("target must be an object");r=r||new FormData,i=B.toFlatObject(i,{metaTokens:!0,dots:!1,indexes:!1},!1,function(S,R){return!B.isUndefined(R[S])});const s=i.metaTokens,c=i.visitor||x,f=i.dots,d=i.indexes,b=(i.Blob||typeof Blob<"u"&&Blob)&&B.isSpecCompliantForm(r);if(!B.isFunction(c))throw new TypeError("visitor must be a function");function m(w){if(w===null)return"";if(B.isDate(w))return w.toISOString();if(B.isBoolean(w))return w.toString();if(!b&&B.isBlob(w))throw new Ee("Blob is not supported. Use a Buffer instead.");return B.isArrayBuffer(w)||B.isTypedArray(w)?b&&typeof Blob=="function"?new Blob([w]):Buffer.from(w):w}function x(w,S,R){let G=w;if(w&&!R&&typeof w=="object"){if(B.endsWith(S,"{}"))S=s?S:S.slice(0,-2),w=JSON.stringify(w);else if(B.isArray(w)&&cx(w)||(B.isFileList(w)||B.endsWith(S,"[]"))&&(G=B.toArray(w)))return S=o1(S),G.forEach(function(K,oe){!(B.isUndefined(K)||K===null)&&r.append(d===!0?Fp([S],oe,f):d===null?S:S+"[]",m(K))}),!1}return tf(w)?!0:(r.append(Fp(R,S,f),m(w)),!1)}const y=[],j=Object.assign(fx,{defaultVisitor:x,convertValue:m,isVisitable:tf});function z(w,S){if(!B.isUndefined(w)){if(y.indexOf(w)!==-1)throw Error("Circular reference detected in "+S.join("."));y.push(w),B.forEach(w,function(G,X){(!(B.isUndefined(G)||G===null)&&c.call(r,G,B.isString(X)?X.trim():X,S,j))===!0&&z(G,S?S.concat(X):[X])}),y.pop()}}if(!B.isObject(a))throw new TypeError("data must be an object");return z(a),r}function $p(a){const r={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(a).replace(/[!'()~]|%20|%00/g,function(s){return r[s]})}function wf(a,r){this._pairs=[],a&&ys(a,this,r)}const s1=wf.prototype;s1.append=function(r,i){this._pairs.push([r,i])};s1.toString=function(r){const i=r?function(s){return r.call(this,s,$p)}:$p;return this._pairs.map(function(c){return i(c[0])+"="+i(c[1])},"").join("&")};function dx(a){return encodeURIComponent(a).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+")}function u1(a,r,i){if(!r)return a;const s=i&&i.encode||dx,c=B.isFunction(i)?{serialize:i}:i,f=c&&c.serialize;let d;if(f?d=f(r,c):d=B.isURLSearchParams(r)?r.toString():new wf(r,c).toString(s),d){const g=a.indexOf("#");g!==-1&&(a=a.slice(0,g)),a+=(a.indexOf("?")===-1?"?":"&")+d}return a}class Wp{constructor(){this.handlers=[]}use(r,i,s){return this.handlers.push({fulfilled:r,rejected:i,synchronous:s?s.synchronous:!1,runWhen:s?s.runWhen:null}),this.handlers.length-1}eject(r){this.handlers[r]&&(this.handlers[r]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(r){B.forEach(this.handlers,function(s){s!==null&&r(s)})}}const Sf={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1,legacyInterceptorReqResOrdering:!0},hx=typeof URLSearchParams<"u"?URLSearchParams:wf,px=typeof FormData<"u"?FormData:null,mx=typeof Blob<"u"?Blob:null,gx={isBrowser:!0,classes:{URLSearchParams:hx,FormData:px,Blob:mx},protocols:["http","https","file","blob","url","data"]},Ef=typeof window<"u"&&typeof document<"u",nf=typeof navigator=="object"&&navigator||void 0,bx=Ef&&(!nf||["ReactNative","NativeScript","NS"].indexOf(nf.product)<0),vx=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",yx=Ef&&window.location.href||"http://localhost",xx=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Ef,hasStandardBrowserEnv:bx,hasStandardBrowserWebWorkerEnv:vx,navigator:nf,origin:yx},Symbol.toStringTag,{value:"Module"})),kt={...xx,...gx};function wx(a,r){return ys(a,new kt.classes.URLSearchParams,{visitor:function(i,s,c,f){return kt.isNode&&B.isBuffer(i)?(this.append(s,i.toString("base64")),!1):f.defaultVisitor.apply(this,arguments)},...r})}function Sx(a){return B.matchAll(/\w+|\[(\w*)]/g,a).map(r=>r[0]==="[]"?"":r[1]||r[0])}function Ex(a){const r={},i=Object.keys(a);let s;const c=i.length;let f;for(s=0;s<c;s++)f=i[s],r[f]=a[f];return r}function c1(a){function r(i,s,c,f){let d=i[f++];if(d==="__proto__")return!0;const g=Number.isFinite(+d),b=f>=i.length;return d=!d&&B.isArray(c)?c.length:d,b?(B.hasOwnProp(c,d)?c[d]=[c[d],s]:c[d]=s,!g):((!c[d]||!B.isObject(c[d]))&&(c[d]=[]),r(i,s,c[d],f)&&B.isArray(c[d])&&(c[d]=Ex(c[d])),!g)}if(B.isFormData(a)&&B.isFunction(a.entries)){const i={};return B.forEachEntry(a,(s,c)=>{r(Sx(s),c,i,0)}),i}return null}function Ox(a,r,i){if(B.isString(a))try{return(r||JSON.parse)(a),B.trim(a)}catch(s){if(s.name!=="SyntaxError")throw s}return(i||JSON.stringify)(a)}const Ti={transitional:Sf,adapter:["xhr","http","fetch"],transformRequest:[function(r,i){const s=i.getContentType()||"",c=s.indexOf("application/json")>-1,f=B.isObject(r);if(f&&B.isHTMLForm(r)&&(r=new FormData(r)),B.isFormData(r))return c?JSON.stringify(c1(r)):r;if(B.isArrayBuffer(r)||B.isBuffer(r)||B.isStream(r)||B.isFile(r)||B.isBlob(r)||B.isReadableStream(r))return r;if(B.isArrayBufferView(r))return r.buffer;if(B.isURLSearchParams(r))return i.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),r.toString();let g;if(f){if(s.indexOf("application/x-www-form-urlencoded")>-1)return wx(r,this.formSerializer).toString();if((g=B.isFileList(r))||s.indexOf("multipart/form-data")>-1){const b=this.env&&this.env.FormData;return ys(g?{"files[]":r}:r,b&&new b,this.formSerializer)}}return f||c?(i.setContentType("application/json",!1),Ox(r)):r}],transformResponse:[function(r){const i=this.transitional||Ti.transitional,s=i&&i.forcedJSONParsing,c=this.responseType==="json";if(B.isResponse(r)||B.isReadableStream(r))return r;if(r&&B.isString(r)&&(s&&!this.responseType||c)){const d=!(i&&i.silentJSONParsing)&&c;try{return JSON.parse(r,this.parseReviver)}catch(g){if(d)throw g.name==="SyntaxError"?Ee.from(g,Ee.ERR_BAD_RESPONSE,this,null,this.response):g}}return r}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:kt.classes.FormData,Blob:kt.classes.Blob},validateStatus:function(r){return r>=200&&r<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};B.forEach(["delete","get","head","post","put","patch"],a=>{Ti.headers[a]={}});const jx=B.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Nx=a=>{const r={};let i,s,c;return a&&a.split(`
`).forEach(function(d){c=d.indexOf(":"),i=d.substring(0,c).trim().toLowerCase(),s=d.substring(c+1).trim(),!(!i||r[i]&&jx[i])&&(i==="set-cookie"?r[i]?r[i].push(s):r[i]=[s]:r[i]=r[i]?r[i]+", "+s:s)}),r},Ip=Symbol("internals");function di(a){return a&&String(a).trim().toLowerCase()}function as(a){return a===!1||a==null?a:B.isArray(a)?a.map(as):String(a)}function Tx(a){const r=Object.create(null),i=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let s;for(;s=i.exec(a);)r[s[1]]=s[2];return r}const Rx=a=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(a.trim());function Pc(a,r,i,s,c){if(B.isFunction(s))return s.call(this,r,i);if(c&&(r=i),!!B.isString(r)){if(B.isString(s))return r.indexOf(s)!==-1;if(B.isRegExp(s))return s.test(r)}}function _x(a){return a.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(r,i,s)=>i.toUpperCase()+s)}function Cx(a,r){const i=B.toCamelCase(" "+r);["get","set","has"].forEach(s=>{Object.defineProperty(a,s+i,{value:function(c,f,d){return this[s].call(this,r,c,f,d)},configurable:!0})})}let Qt=class{constructor(r){r&&this.set(r)}set(r,i,s){const c=this;function f(g,b,m){const x=di(b);if(!x)throw new Error("header name must be a non-empty string");const y=B.findKey(c,x);(!y||c[y]===void 0||m===!0||m===void 0&&c[y]!==!1)&&(c[y||b]=as(g))}const d=(g,b)=>B.forEach(g,(m,x)=>f(m,x,b));if(B.isPlainObject(r)||r instanceof this.constructor)d(r,i);else if(B.isString(r)&&(r=r.trim())&&!Rx(r))d(Nx(r),i);else if(B.isObject(r)&&B.isIterable(r)){let g={},b,m;for(const x of r){if(!B.isArray(x))throw TypeError("Object iterator must return a key-value pair");g[m=x[0]]=(b=g[m])?B.isArray(b)?[...b,x[1]]:[b,x[1]]:x[1]}d(g,i)}else r!=null&&f(i,r,s);return this}get(r,i){if(r=di(r),r){const s=B.findKey(this,r);if(s){const c=this[s];if(!i)return c;if(i===!0)return Tx(c);if(B.isFunction(i))return i.call(this,c,s);if(B.isRegExp(i))return i.exec(c);throw new TypeError("parser must be boolean|regexp|function")}}}has(r,i){if(r=di(r),r){const s=B.findKey(this,r);return!!(s&&this[s]!==void 0&&(!i||Pc(this,this[s],s,i)))}return!1}delete(r,i){const s=this;let c=!1;function f(d){if(d=di(d),d){const g=B.findKey(s,d);g&&(!i||Pc(s,s[g],g,i))&&(delete s[g],c=!0)}}return B.isArray(r)?r.forEach(f):f(r),c}clear(r){const i=Object.keys(this);let s=i.length,c=!1;for(;s--;){const f=i[s];(!r||Pc(this,this[f],f,r,!0))&&(delete this[f],c=!0)}return c}normalize(r){const i=this,s={};return B.forEach(this,(c,f)=>{const d=B.findKey(s,f);if(d){i[d]=as(c),delete i[f];return}const g=r?_x(f):String(f).trim();g!==f&&delete i[f],i[g]=as(c),s[g]=!0}),this}concat(...r){return this.constructor.concat(this,...r)}toJSON(r){const i=Object.create(null);return B.forEach(this,(s,c)=>{s!=null&&s!==!1&&(i[c]=r&&B.isArray(s)?s.join(", "):s)}),i}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([r,i])=>r+": "+i).join(`
`)}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(r){return r instanceof this?r:new this(r)}static concat(r,...i){const s=new this(r);return i.forEach(c=>s.set(c)),s}static accessor(r){const s=(this[Ip]=this[Ip]={accessors:{}}).accessors,c=this.prototype;function f(d){const g=di(d);s[g]||(Cx(c,d),s[g]=!0)}return B.isArray(r)?r.forEach(f):f(r),this}};Qt.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);B.reduceDescriptors(Qt.prototype,({value:a},r)=>{let i=r[0].toUpperCase()+r.slice(1);return{get:()=>a,set(s){this[i]=s}}});B.freezeMethods(Qt);function Qc(a,r){const i=this||Ti,s=r||i,c=Qt.from(s.headers);let f=s.data;return B.forEach(a,function(g){f=g.call(i,f,c.normalize(),r?r.status:void 0)}),c.normalize(),f}function f1(a){return!!(a&&a.__CANCEL__)}let Ri=class extends Ee{constructor(r,i,s){super(r??"canceled",Ee.ERR_CANCELED,i,s),this.name="CanceledError",this.__CANCEL__=!0}};function d1(a,r,i){const s=i.config.validateStatus;!i.status||!s||s(i.status)?a(i):r(new Ee("Request failed with status code "+i.status,[Ee.ERR_BAD_REQUEST,Ee.ERR_BAD_RESPONSE][Math.floor(i.status/100)-4],i.config,i.request,i))}function zx(a){const r=/^([-+\w]{1,25})(:?\/\/|:)/.exec(a);return r&&r[1]||""}function Ax(a,r){a=a||10;const i=new Array(a),s=new Array(a);let c=0,f=0,d;return r=r!==void 0?r:1e3,function(b){const m=Date.now(),x=s[f];d||(d=m),i[c]=b,s[c]=m;let y=f,j=0;for(;y!==c;)j+=i[y++],y=y%a;if(c=(c+1)%a,c===f&&(f=(f+1)%a),m-d<r)return;const z=x&&m-x;return z?Math.round(j*1e3/z):void 0}}function Mx(a,r){let i=0,s=1e3/r,c,f;const d=(m,x=Date.now())=>{i=x,c=null,f&&(clearTimeout(f),f=null),a(...m)};return[(...m)=>{const x=Date.now(),y=x-i;y>=s?d(m,x):(c=m,f||(f=setTimeout(()=>{f=null,d(c)},s-y)))},()=>c&&d(c)]}const is=(a,r,i=3)=>{let s=0;const c=Ax(50,250);return Mx(f=>{const d=f.loaded,g=f.lengthComputable?f.total:void 0,b=d-s,m=c(b),x=d<=g;s=d;const y={loaded:d,total:g,progress:g?d/g:void 0,bytes:b,rate:m||void 0,estimated:m&&g&&x?(g-d)/m:void 0,event:f,lengthComputable:g!=null,[r?"download":"upload"]:!0};a(y)},i)},em=(a,r)=>{const i=a!=null;return[s=>r[0]({lengthComputable:i,total:a,loaded:s}),r[1]]},tm=a=>(...r)=>B.asap(()=>a(...r)),Dx=kt.hasStandardBrowserEnv?((a,r)=>i=>(i=new URL(i,kt.origin),a.protocol===i.protocol&&a.host===i.host&&(r||a.port===i.port)))(new URL(kt.origin),kt.navigator&&/(msie|trident)/i.test(kt.navigator.userAgent)):()=>!0,kx=kt.hasStandardBrowserEnv?{write(a,r,i,s,c,f,d){if(typeof document>"u")return;const g=[`${a}=${encodeURIComponent(r)}`];B.isNumber(i)&&g.push(`expires=${new Date(i).toUTCString()}`),B.isString(s)&&g.push(`path=${s}`),B.isString(c)&&g.push(`domain=${c}`),f===!0&&g.push("secure"),B.isString(d)&&g.push(`SameSite=${d}`),document.cookie=g.join("; ")},read(a){if(typeof document>"u")return null;const r=document.cookie.match(new RegExp("(?:^|; )"+a+"=([^;]*)"));return r?decodeURIComponent(r[1]):null},remove(a){this.write(a,"",Date.now()-864e5,"/")}}:{write(){},read(){return null},remove(){}};function Ux(a){return typeof a!="string"?!1:/^([a-z][a-z\d+\-.]*:)?\/\//i.test(a)}function Hx(a,r){return r?a.replace(/\/?\/$/,"")+"/"+r.replace(/^\/+/,""):a}function h1(a,r,i){let s=!Ux(r);return a&&(s||i==!1)?Hx(a,r):r}const nm=a=>a instanceof Qt?{...a}:a;function xl(a,r){r=r||{};const i={};function s(m,x,y,j){return B.isPlainObject(m)&&B.isPlainObject(x)?B.merge.call({caseless:j},m,x):B.isPlainObject(x)?B.merge({},x):B.isArray(x)?x.slice():x}function c(m,x,y,j){if(B.isUndefined(x)){if(!B.isUndefined(m))return s(void 0,m,y,j)}else return s(m,x,y,j)}function f(m,x){if(!B.isUndefined(x))return s(void 0,x)}function d(m,x){if(B.isUndefined(x)){if(!B.isUndefined(m))return s(void 0,m)}else return s(void 0,x)}function g(m,x,y){if(y in r)return s(m,x);if(y in a)return s(void 0,m)}const b={url:f,method:f,data:f,baseURL:d,transformRequest:d,transformResponse:d,paramsSerializer:d,timeout:d,timeoutMessage:d,withCredentials:d,withXSRFToken:d,adapter:d,responseType:d,xsrfCookieName:d,xsrfHeaderName:d,onUploadProgress:d,onDownloadProgress:d,decompress:d,maxContentLength:d,maxBodyLength:d,beforeRedirect:d,transport:d,httpAgent:d,httpsAgent:d,cancelToken:d,socketPath:d,responseEncoding:d,validateStatus:g,headers:(m,x,y)=>c(nm(m),nm(x),y,!0)};return B.forEach(Object.keys({...a,...r}),function(x){if(x==="__proto__"||x==="constructor"||x==="prototype")return;const y=B.hasOwnProp(b,x)?b[x]:c,j=y(a[x],r[x],x);B.isUndefined(j)&&y!==g||(i[x]=j)}),i}const p1=a=>{const r=xl({},a);let{data:i,withXSRFToken:s,xsrfHeaderName:c,xsrfCookieName:f,headers:d,auth:g}=r;if(r.headers=d=Qt.from(d),r.url=u1(h1(r.baseURL,r.url,r.allowAbsoluteUrls),a.params,a.paramsSerializer),g&&d.set("Authorization","Basic "+btoa((g.username||"")+":"+(g.password?unescape(encodeURIComponent(g.password)):""))),B.isFormData(i)){if(kt.hasStandardBrowserEnv||kt.hasStandardBrowserWebWorkerEnv)d.setContentType(void 0);else if(B.isFunction(i.getHeaders)){const b=i.getHeaders(),m=["content-type","content-length"];Object.entries(b).forEach(([x,y])=>{m.includes(x.toLowerCase())&&d.set(x,y)})}}if(kt.hasStandardBrowserEnv&&(s&&B.isFunction(s)&&(s=s(r)),s||s!==!1&&Dx(r.url))){const b=c&&f&&kx.read(f);b&&d.set(c,b)}return r},Lx=typeof XMLHttpRequest<"u",Bx=Lx&&function(a){return new Promise(function(i,s){const c=p1(a);let f=c.data;const d=Qt.from(c.headers).normalize();let{responseType:g,onUploadProgress:b,onDownloadProgress:m}=c,x,y,j,z,w;function S(){z&&z(),w&&w(),c.cancelToken&&c.cancelToken.unsubscribe(x),c.signal&&c.signal.removeEventListener("abort",x)}let R=new XMLHttpRequest;R.open(c.method.toUpperCase(),c.url,!0),R.timeout=c.timeout;function G(){if(!R)return;const K=Qt.from("getAllResponseHeaders"in R&&R.getAllResponseHeaders()),J={data:!g||g==="text"||g==="json"?R.responseText:R.response,status:R.status,statusText:R.statusText,headers:K,config:a,request:R};d1(function(C){i(C),S()},function(C){s(C),S()},J),R=null}"onloadend"in R?R.onloadend=G:R.onreadystatechange=function(){!R||R.readyState!==4||R.status===0&&!(R.responseURL&&R.responseURL.indexOf("file:")===0)||setTimeout(G)},R.onabort=function(){R&&(s(new Ee("Request aborted",Ee.ECONNABORTED,a,R)),R=null)},R.onerror=function(oe){const J=oe&&oe.message?oe.message:"Network Error",ue=new Ee(J,Ee.ERR_NETWORK,a,R);ue.event=oe||null,s(ue),R=null},R.ontimeout=function(){let oe=c.timeout?"timeout of "+c.timeout+"ms exceeded":"timeout exceeded";const J=c.transitional||Sf;c.timeoutErrorMessage&&(oe=c.timeoutErrorMessage),s(new Ee(oe,J.clarifyTimeoutError?Ee.ETIMEDOUT:Ee.ECONNABORTED,a,R)),R=null},f===void 0&&d.setContentType(null),"setRequestHeader"in R&&B.forEach(d.toJSON(),function(oe,J){R.setRequestHeader(J,oe)}),B.isUndefined(c.withCredentials)||(R.withCredentials=!!c.withCredentials),g&&g!=="json"&&(R.responseType=c.responseType),m&&([j,w]=is(m,!0),R.addEventListener("progress",j)),b&&R.upload&&([y,z]=is(b),R.upload.addEventListener("progress",y),R.upload.addEventListener("loadend",z)),(c.cancelToken||c.signal)&&(x=K=>{R&&(s(!K||K.type?new Ri(null,a,R):K),R.abort(),R=null)},c.cancelToken&&c.cancelToken.subscribe(x),c.signal&&(c.signal.aborted?x():c.signal.addEventListener("abort",x)));const X=zx(c.url);if(X&&kt.protocols.indexOf(X)===-1){s(new Ee("Unsupported protocol "+X+":",Ee.ERR_BAD_REQUEST,a));return}R.send(f||null)})},qx=(a,r)=>{const{length:i}=a=a?a.filter(Boolean):[];if(r||i){let s=new AbortController,c;const f=function(m){if(!c){c=!0,g();const x=m instanceof Error?m:this.reason;s.abort(x instanceof Ee?x:new Ri(x instanceof Error?x.message:x))}};let d=r&&setTimeout(()=>{d=null,f(new Ee(`timeout of ${r}ms exceeded`,Ee.ETIMEDOUT))},r);const g=()=>{a&&(d&&clearTimeout(d),d=null,a.forEach(m=>{m.unsubscribe?m.unsubscribe(f):m.removeEventListener("abort",f)}),a=null)};a.forEach(m=>m.addEventListener("abort",f));const{signal:b}=s;return b.unsubscribe=()=>B.asap(g),b}},Yx=function*(a,r){let i=a.byteLength;if(i<r){yield a;return}let s=0,c;for(;s<i;)c=s+r,yield a.slice(s,c),s=c},Gx=async function*(a,r){for await(const i of Xx(a))yield*Yx(i,r)},Xx=async function*(a){if(a[Symbol.asyncIterator]){yield*a;return}const r=a.getReader();try{for(;;){const{done:i,value:s}=await r.read();if(i)break;yield s}}finally{await r.cancel()}},am=(a,r,i,s)=>{const c=Gx(a,r);let f=0,d,g=b=>{d||(d=!0,s&&s(b))};return new ReadableStream({async pull(b){try{const{done:m,value:x}=await c.next();if(m){g(),b.close();return}let y=x.byteLength;if(i){let j=f+=y;i(j)}b.enqueue(new Uint8Array(x))}catch(m){throw g(m),m}},cancel(b){return g(b),c.return()}},{highWaterMark:2})},lm=64*1024,{isFunction:Fo}=B,Vx=(({Request:a,Response:r})=>({Request:a,Response:r}))(B.global),{ReadableStream:rm,TextEncoder:im}=B.global,om=(a,...r)=>{try{return!!a(...r)}catch{return!1}},Zx=a=>{a=B.merge.call({skipUndefined:!0},Vx,a);const{fetch:r,Request:i,Response:s}=a,c=r?Fo(r):typeof fetch=="function",f=Fo(i),d=Fo(s);if(!c)return!1;const g=c&&Fo(rm),b=c&&(typeof im=="function"?(w=>S=>w.encode(S))(new im):async w=>new Uint8Array(await new i(w).arrayBuffer())),m=f&&g&&om(()=>{let w=!1;const S=new i(kt.origin,{body:new rm,method:"POST",get duplex(){return w=!0,"half"}}).headers.has("Content-Type");return w&&!S}),x=d&&g&&om(()=>B.isReadableStream(new s("").body)),y={stream:x&&(w=>w.body)};c&&["text","arrayBuffer","blob","formData","stream"].forEach(w=>{!y[w]&&(y[w]=(S,R)=>{let G=S&&S[w];if(G)return G.call(S);throw new Ee(`Response type '${w}' is not supported`,Ee.ERR_NOT_SUPPORT,R)})});const j=async w=>{if(w==null)return 0;if(B.isBlob(w))return w.size;if(B.isSpecCompliantForm(w))return(await new i(kt.origin,{method:"POST",body:w}).arrayBuffer()).byteLength;if(B.isArrayBufferView(w)||B.isArrayBuffer(w))return w.byteLength;if(B.isURLSearchParams(w)&&(w=w+""),B.isString(w))return(await b(w)).byteLength},z=async(w,S)=>{const R=B.toFiniteNumber(w.getContentLength());return R??j(S)};return async w=>{let{url:S,method:R,data:G,signal:X,cancelToken:K,timeout:oe,onDownloadProgress:J,onUploadProgress:ue,responseType:C,headers:le,withCredentials:Q="same-origin",fetchOptions:Oe}=p1(w),je=r||fetch;C=C?(C+"").toLowerCase():"text";let ee=qx([X,K&&K.toAbortSignal()],oe),xe=null;const be=ee&&ee.unsubscribe&&(()=>{ee.unsubscribe()});let me;try{if(ue&&m&&R!=="get"&&R!=="head"&&(me=await z(le,G))!==0){let T=new i(S,{method:"POST",body:G,duplex:"half"}),Y;if(B.isFormData(G)&&(Y=T.headers.get("content-type"))&&le.setContentType(Y),T.body){const[W,ne]=em(me,is(tm(ue)));G=am(T.body,lm,W,ne)}}B.isString(Q)||(Q=Q?"include":"omit");const D=f&&"credentials"in i.prototype,$={...Oe,signal:ee,method:R.toUpperCase(),headers:le.normalize().toJSON(),body:G,duplex:"half",credentials:D?Q:void 0};xe=f&&new i(S,$);let I=await(f?je(xe,Oe):je(S,$));const Se=x&&(C==="stream"||C==="response");if(x&&(J||Se&&be)){const T={};["status","statusText","headers"].forEach(de=>{T[de]=I[de]});const Y=B.toFiniteNumber(I.headers.get("content-length")),[W,ne]=J&&em(Y,is(tm(J),!0))||[];I=new s(am(I.body,lm,W,()=>{ne&&ne(),be&&be()}),T)}C=C||"text";let Te=await y[B.findKey(y,C)||"text"](I,w);return!Se&&be&&be(),await new Promise((T,Y)=>{d1(T,Y,{data:Te,headers:Qt.from(I.headers),status:I.status,statusText:I.statusText,config:w,request:xe})})}catch(D){throw be&&be(),D&&D.name==="TypeError"&&/Load failed|fetch/i.test(D.message)?Object.assign(new Ee("Network Error",Ee.ERR_NETWORK,w,xe,D&&D.response),{cause:D.cause||D}):Ee.from(D,D&&D.code,w,xe,D&&D.response)}}},Px=new Map,m1=a=>{let r=a&&a.env||{};const{fetch:i,Request:s,Response:c}=r,f=[s,c,i];let d=f.length,g=d,b,m,x=Px;for(;g--;)b=f[g],m=x.get(b),m===void 0&&x.set(b,m=g?new Map:Zx(r)),x=m;return m};m1();const Of={http:ux,xhr:Bx,fetch:{get:m1}};B.forEach(Of,(a,r)=>{if(a){try{Object.defineProperty(a,"name",{value:r})}catch{}Object.defineProperty(a,"adapterName",{value:r})}});const sm=a=>`- ${a}`,Qx=a=>B.isFunction(a)||a===null||a===!1;function Kx(a,r){a=B.isArray(a)?a:[a];const{length:i}=a;let s,c;const f={};for(let d=0;d<i;d++){s=a[d];let g;if(c=s,!Qx(s)&&(c=Of[(g=String(s)).toLowerCase()],c===void 0))throw new Ee(`Unknown adapter '${g}'`);if(c&&(B.isFunction(c)||(c=c.get(r))))break;f[g||"#"+d]=c}if(!c){const d=Object.entries(f).map(([b,m])=>`adapter ${b} `+(m===!1?"is not supported by the environment":"is not available in the build"));let g=i?d.length>1?`since :
`+d.map(sm).join(`
`):" "+sm(d[0]):"as no adapter specified";throw new Ee("There is no suitable adapter to dispatch the request "+g,"ERR_NOT_SUPPORT")}return c}const g1={getAdapter:Kx,adapters:Of};function Kc(a){if(a.cancelToken&&a.cancelToken.throwIfRequested(),a.signal&&a.signal.aborted)throw new Ri(null,a)}function um(a){return Kc(a),a.headers=Qt.from(a.headers),a.data=Qc.call(a,a.transformRequest),["post","put","patch"].indexOf(a.method)!==-1&&a.headers.setContentType("application/x-www-form-urlencoded",!1),g1.getAdapter(a.adapter||Ti.adapter,a)(a).then(function(s){return Kc(a),s.data=Qc.call(a,a.transformResponse,s),s.headers=Qt.from(s.headers),s},function(s){return f1(s)||(Kc(a),s&&s.response&&(s.response.data=Qc.call(a,a.transformResponse,s.response),s.response.headers=Qt.from(s.response.headers))),Promise.reject(s)})}const b1="1.13.5",xs={};["object","boolean","number","function","string","symbol"].forEach((a,r)=>{xs[a]=function(s){return typeof s===a||"a"+(r<1?"n ":" ")+a}});const cm={};xs.transitional=function(r,i,s){function c(f,d){return"[Axios v"+b1+"] Transitional option '"+f+"'"+d+(s?". "+s:"")}return(f,d,g)=>{if(r===!1)throw new Ee(c(d," has been removed"+(i?" in "+i:"")),Ee.ERR_DEPRECATED);return i&&!cm[d]&&(cm[d]=!0,console.warn(c(d," has been deprecated since v"+i+" and will be removed in the near future"))),r?r(f,d,g):!0}};xs.spelling=function(r){return(i,s)=>(console.warn(`${s} is likely a misspelling of ${r}`),!0)};function Jx(a,r,i){if(typeof a!="object")throw new Ee("options must be an object",Ee.ERR_BAD_OPTION_VALUE);const s=Object.keys(a);let c=s.length;for(;c-- >0;){const f=s[c],d=r[f];if(d){const g=a[f],b=g===void 0||d(g,f,a);if(b!==!0)throw new Ee("option "+f+" must be "+b,Ee.ERR_BAD_OPTION_VALUE);continue}if(i!==!0)throw new Ee("Unknown option "+f,Ee.ERR_BAD_OPTION)}}const ls={assertOptions:Jx,validators:xs},vn=ls.validators;let yl=class{constructor(r){this.defaults=r||{},this.interceptors={request:new Wp,response:new Wp}}async request(r,i){try{return await this._request(r,i)}catch(s){if(s instanceof Error){let c={};Error.captureStackTrace?Error.captureStackTrace(c):c=new Error;const f=c.stack?c.stack.replace(/^.+\n/,""):"";try{s.stack?f&&!String(s.stack).endsWith(f.replace(/^.+\n.+\n/,""))&&(s.stack+=`
`+f):s.stack=f}catch{}}throw s}}_request(r,i){typeof r=="string"?(i=i||{},i.url=r):i=r||{},i=xl(this.defaults,i);const{transitional:s,paramsSerializer:c,headers:f}=i;s!==void 0&&ls.assertOptions(s,{silentJSONParsing:vn.transitional(vn.boolean),forcedJSONParsing:vn.transitional(vn.boolean),clarifyTimeoutError:vn.transitional(vn.boolean),legacyInterceptorReqResOrdering:vn.transitional(vn.boolean)},!1),c!=null&&(B.isFunction(c)?i.paramsSerializer={serialize:c}:ls.assertOptions(c,{encode:vn.function,serialize:vn.function},!0)),i.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?i.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:i.allowAbsoluteUrls=!0),ls.assertOptions(i,{baseUrl:vn.spelling("baseURL"),withXsrfToken:vn.spelling("withXSRFToken")},!0),i.method=(i.method||this.defaults.method||"get").toLowerCase();let d=f&&B.merge(f.common,f[i.method]);f&&B.forEach(["delete","get","head","post","put","patch","common"],w=>{delete f[w]}),i.headers=Qt.concat(d,f);const g=[];let b=!0;this.interceptors.request.forEach(function(S){if(typeof S.runWhen=="function"&&S.runWhen(i)===!1)return;b=b&&S.synchronous;const R=i.transitional||Sf;R&&R.legacyInterceptorReqResOrdering?g.unshift(S.fulfilled,S.rejected):g.push(S.fulfilled,S.rejected)});const m=[];this.interceptors.response.forEach(function(S){m.push(S.fulfilled,S.rejected)});let x,y=0,j;if(!b){const w=[um.bind(this),void 0];for(w.unshift(...g),w.push(...m),j=w.length,x=Promise.resolve(i);y<j;)x=x.then(w[y++],w[y++]);return x}j=g.length;let z=i;for(;y<j;){const w=g[y++],S=g[y++];try{z=w(z)}catch(R){S.call(this,R);break}}try{x=um.call(this,z)}catch(w){return Promise.reject(w)}for(y=0,j=m.length;y<j;)x=x.then(m[y++],m[y++]);return x}getUri(r){r=xl(this.defaults,r);const i=h1(r.baseURL,r.url,r.allowAbsoluteUrls);return u1(i,r.params,r.paramsSerializer)}};B.forEach(["delete","get","head","options"],function(r){yl.prototype[r]=function(i,s){return this.request(xl(s||{},{method:r,url:i,data:(s||{}).data}))}});B.forEach(["post","put","patch"],function(r){function i(s){return function(f,d,g){return this.request(xl(g||{},{method:r,headers:s?{"Content-Type":"multipart/form-data"}:{},url:f,data:d}))}}yl.prototype[r]=i(),yl.prototype[r+"Form"]=i(!0)});let Fx=class v1{constructor(r){if(typeof r!="function")throw new TypeError("executor must be a function.");let i;this.promise=new Promise(function(f){i=f});const s=this;this.promise.then(c=>{if(!s._listeners)return;let f=s._listeners.length;for(;f-- >0;)s._listeners[f](c);s._listeners=null}),this.promise.then=c=>{let f;const d=new Promise(g=>{s.subscribe(g),f=g}).then(c);return d.cancel=function(){s.unsubscribe(f)},d},r(function(f,d,g){s.reason||(s.reason=new Ri(f,d,g),i(s.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(r){if(this.reason){r(this.reason);return}this._listeners?this._listeners.push(r):this._listeners=[r]}unsubscribe(r){if(!this._listeners)return;const i=this._listeners.indexOf(r);i!==-1&&this._listeners.splice(i,1)}toAbortSignal(){const r=new AbortController,i=s=>{r.abort(s)};return this.subscribe(i),r.signal.unsubscribe=()=>this.unsubscribe(i),r.signal}static source(){let r;return{token:new v1(function(c){r=c}),cancel:r}}};function $x(a){return function(i){return a.apply(null,i)}}function Wx(a){return B.isObject(a)&&a.isAxiosError===!0}const af={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511,WebServerIsDown:521,ConnectionTimedOut:522,OriginIsUnreachable:523,TimeoutOccurred:524,SslHandshakeFailed:525,InvalidSslCertificate:526};Object.entries(af).forEach(([a,r])=>{af[r]=a});function y1(a){const r=new yl(a),i=Wm(yl.prototype.request,r);return B.extend(i,yl.prototype,r,{allOwnKeys:!0}),B.extend(i,r,null,{allOwnKeys:!0}),i.create=function(c){return y1(xl(a,c))},i}const ct=y1(Ti);ct.Axios=yl;ct.CanceledError=Ri;ct.CancelToken=Fx;ct.isCancel=f1;ct.VERSION=b1;ct.toFormData=ys;ct.AxiosError=Ee;ct.Cancel=ct.CanceledError;ct.all=function(r){return Promise.all(r)};ct.spread=$x;ct.isAxiosError=Wx;ct.mergeConfig=xl;ct.AxiosHeaders=Qt;ct.formToJSON=a=>c1(B.isHTMLForm(a)?new FormData(a):a);ct.getAdapter=g1.getAdapter;ct.HttpStatusCode=af;ct.default=ct;const{Axios:E3,AxiosError:O3,CanceledError:j3,isCancel:N3,CancelToken:T3,VERSION:R3,all:_3,Cancel:C3,isAxiosError:z3,spread:A3,toFormData:M3,AxiosHeaders:D3,HttpStatusCode:k3,formToJSON:U3,getAdapter:H3,mergeConfig:L3}=ct,_i=ct.create({baseURL:"/api",withCredentials:!0}),Ix=async a=>{try{return(await _i.post("/auth/login",a)).data}catch(r){throw r}},e5=async a=>{try{return(await _i.post("/auth/register",a)).data}catch(r){throw r}},t5=async()=>{const a=await _i.get("/auth/get-me");return console.log(a.data.user),a.data},x1=async()=>(await _i.post("/auth/logout")).data,n5=async()=>(await _i.get("/post")).data,w1=N.createContext(),a5=({children:a})=>{const[r,i]=N.useState(!1);return h.jsx(w1.Provider,{value:{loader:r,setloader:i},children:a})},dr=()=>N.useContext(w1),S1=N.createContext(),l5=({children:a})=>{const[r,i]=N.useState(null),[s,c]=N.useState(!0),[f,d]=N.useState([]),[g,b]=N.useState([]),[m,x]=N.useState(!1),{setloader:y}=dr(),j=async()=>{try{const w=await t5();i(w.user)}catch{i(null)}finally{c(!1),y(!1)}},z=async(w=!0)=>{try{w&&y(!0);const S=await n5();console.log(S.final),d(S.final)}catch(S){console.log(S)}finally{y(!1)}};return N.useEffect(()=>{z(),j()},[]),h.jsx(S1.Provider,{value:{user:r,loading:s,allpost:f,setallpost:d,setuser:i,savepost:g,setsavepost:b,setloading:c,fetchUser:j,handlegetallpost:z,showDelete:m,setShowDelete:x},children:a})},Kt=()=>{const{user:a,setuser:r,allpost:i,setallpost:s,savepost:c,setsavepost:f,loading:d,setloading:g,fetchUser:b,handlegetallpost:m,showDelete:x,setShowDelete:y}=N.useContext(S1);return{RegisterHandle:async S=>{try{const R=await e5(S);r(R.user)}catch(R){console.log(R)}finally{g(!1)}},handlegetallpost:m,Loginhandle:async S=>{try{const R=await Ix(S);r(R.user),console.log(R.user)}catch(R){console.log(R)}finally{g(!1)}},fetchUser:b,user:a,setuser:r,allpost:i,setallpost:s,savepost:c,setsavepost:f,loading:d,deleteToggle:S=>{y(R=>R===S?null:S)},showDelete:x,setShowDelete:y}},r5=()=>{const[a,r]=N.useState({username:"",password:""}),[i,s]=N.useState(!1),[c,f]=N.useState(""),d=St(),{Loginhandle:g,loading:b}=Kt(),m=y=>{const{name:j,value:z}=y.target;r(w=>({...w,[j]:z}))},x=async y=>{y.preventDefault(),await g(a),r({username:"",password:""}),d("/")};return h.jsxs("main",{className:"min-h-screen bg-[#000000] flex flex-col items-center justify-center px-4",children:[h.jsxs("div",{className:"fixed inset-0 overflow-hidden pointer-events-none -z-10",children:[h.jsx("div",{className:"absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full opacity-20 blur-3xl",style:{background:"radial-gradient(circle, #f09433, #e6683c, #dc2743)"}}),h.jsx("div",{className:"absolute -bottom-32 -right-32 w-[500px] h-[500px] rounded-full opacity-20 blur-3xl",style:{background:"radial-gradient(circle, #bc2a8d, #833ab4, #405de6)"}})]}),h.jsxs("div",{className:"w-full max-w-[350px] flex flex-col items-center gap-3",children:[h.jsxs("div",{className:"w-full bg-[#000000] border border-[#262626] sm:bg-[#000000] rounded-sm px-10 pt-3 pb-6 flex flex-col items-center",children:[h.jsxs("svg",{className:"px-2 ml-3 mb-3",width:"175",height:"68",viewBox:"0 0 175 51",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[h.jsx("text",{x:"0",y:"42",fontFamily:"'Billabong', 'Grand Hotel', cursive",fontSize:"46",fill:"url(#instaGrad)",letterSpacing:"-1",children:"DevGram"}),h.jsx("defs",{children:h.jsxs("linearGradient",{id:"instaGrad",x1:"0%",y1:"0%",x2:"100%",y2:"0%",children:[h.jsx("stop",{offset:"0%",stopColor:"#f09433"}),h.jsx("stop",{offset:"25%",stopColor:"#e6683c"}),h.jsx("stop",{offset:"50%",stopColor:"#dc2743"}),h.jsx("stop",{offset:"75%",stopColor:"#cc2366"}),h.jsx("stop",{offset:"100%",stopColor:"#bc1888"})]})})]}),h.jsxs("form",{onSubmit:x,className:"w-full flex flex-col gap-[6px]",children:[h.jsxs("div",{className:"relative",children:[h.jsx("input",{type:"text",name:"username",value:a.username,onChange:m,onFocus:()=>f("username"),onBlur:()=>f(""),required:!0,className:`
                  w-full bg-[#121212] border rounded-[4px] text-[12px] text-[#f5f5f5]
                  pt-[14px] pb-[2px] px-[8px] h-[38px] outline-none placeholder-[#a8a8a8]
                  transition-all duration-150
                  ${c==="username"?"border-[#a8a8a8]":"border-[#363636]"}
                `}),h.jsx("label",{className:`
                  absolute left-[9px] pointer-events-none text-[#a8a8a8]
                  transition-all duration-150
                  ${a.username||c==="username"?"top-[4px] text-[10px]":"top-[50%] -translate-y-[50%] text-[12px]"}
                `,children:"username"})]}),h.jsxs("div",{className:"relative",children:[h.jsx("input",{type:i?"text":"password",name:"password",value:a.password,onChange:m,onFocus:()=>f("password"),onBlur:()=>f(""),required:!0,className:`
                  w-full bg-[#121212] border rounded-[4px] text-[12px] text-[#f5f5f5]
                  pt-[14px] pb-[2px] px-[8px] pr-[52px] h-[38px] outline-none placeholder-[#a8a8a8]
                  transition-all duration-150
                  ${c==="password"?"border-[#a8a8a8]":"border-[#363636]"}
                `}),h.jsx("label",{className:`
                  absolute left-[9px] pointer-events-none text-[#a8a8a8]
                  transition-all duration-150
                  ${a.password||c==="password"?"top-[4px] text-[10px]":"top-[50%] -translate-y-[50%] text-[12px]"}
                `,children:"Password"}),a.password&&h.jsx("button",{type:"button",onClick:()=>s(y=>!y),className:"absolute right-[10px] top-[50%] -translate-y-[50%] text-[14px] font-semibold text-[#f5f5f5] hover:text-[#a8a8a8] transition-colors",children:i?"Hide":"Show"})]}),h.jsx("button",{type:"submit",disabled:b||!a.username||!a.password,className:`
                mt-2 w-full h-[32px] rounded-lg text-white text-sm font-semibold
                transition-all duration-200 active:scale-[0.98]
                bg-[#0095f6] hover:bg-[#1877f2]
                ${a.username&&a.password&&!b?"opacity-100 cursor-pointer":"opacity-70 cursor-not-allowed"}
              `,children:b?h.jsxs("span",{className:"flex items-center justify-center gap-2",children:[h.jsxs("svg",{className:"animate-spin h-4 w-4 text-white",viewBox:"0 0 24 24",fill:"none",children:[h.jsx("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),h.jsx("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8v8H4z"})]}),"Logging in…"]}):"Log in"}),h.jsxs("div",{className:"flex items-center gap-3 my-2",children:[h.jsx("div",{className:"flex-1 h-px bg-[#363636]"}),h.jsx("span",{className:"text-[13px] font-semibold text-[#a8a8a8]",children:"OR"}),h.jsx("div",{className:"flex-1 h-px bg-[#363636]"})]}),h.jsxs("button",{type:"button",className:"flex items-center justify-center gap-2 text-[#e0f1ff] text-sm font-semibold hover:text-[#ffffff] transition-colors",children:[h.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"#e0f1ff",children:h.jsx("path",{d:"M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.885v2.27h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"})}),"Log in with Facebook"]})]})]}),h.jsxs("div",{className:"w-full bg-[#000000] border border-[#262626] sm:bg-[#000000] rounded-sm py-4 text-center text-sm text-[#f5f5f5]",children:["Don't have an account?"," ",h.jsx(ms,{to:"/register",className:"font-semibold hover:underline",style:{color:"#0095f6"},children:"Sign up"})]}),h.jsxs("div",{className:"flex flex-col items-center gap-3 mt-2",children:[h.jsx("p",{className:"text-sm text-[#f5f5f5]",children:"Get the app."}),h.jsxs("div",{className:"flex gap-2",children:[h.jsx("a",{href:"https://apps.apple.com",target:"_blank",rel:"noreferrer",className:"border border-[#363636] rounded-lg px-3 py-1.5 bg-[#000000] hover:bg-[#121212] transition-colors",children:h.jsxs("div",{className:"flex items-center gap-1.5",children:[h.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"#f5f5f5",children:h.jsx("path",{d:"M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"})}),h.jsxs("div",{children:[h.jsx("div",{className:"text-[8px] text-[#f5f5f5] leading-none",children:"Download on the"}),h.jsx("div",{className:"text-[11px] font-semibold text-[#f5f5f5] leading-tight",children:"App Store"})]})]})}),h.jsx("a",{href:"https://play.google.com",target:"_blank",rel:"noreferrer",className:"border border-[#363636] rounded-lg px-3 py-1.5 bg-[#000000] hover:bg-[#121212] transition-colors",children:h.jsxs("div",{className:"flex items-center gap-1.5",children:[h.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"#f5f5f5",children:h.jsx("path",{d:"M3.18 23.76c.3.17.64.24.99.2l12.6-12.6-3.18-3.18L3.18 23.76zM20.47 10.6L17.6 9l-3.48 3.48 3.48 3.48 2.9-1.62c.83-.46.83-1.68-.03-2.14zM2.01 1.05C1.86 1.3 1.77 1.6 1.77 1.94v20.12c0 .34.09.64.24.89l.12.11 11.27-11.27v-.26L2.13.94l-.12.11zM13.43 8.07l-9.24-9.24-.13.11 12.6 12.6.13-.11L13.43 8.07z"})}),h.jsxs("div",{children:[h.jsx("div",{className:"text-[8px] text-[#f5f5f5] leading-none",children:"Get it on"}),h.jsx("div",{className:"text-[11px] font-semibold text-[#f5f5f5] leading-tight",children:"Google Play"})]})]})})]})]}),h.jsx("footer",{className:"mt-4 text-center text-[11px] text-[#a8a8a8] space-y-2 pb-6",children:h.jsx("p",{children:"© 2025 DevGram Made with Love ❤"})})]}),h.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Grand+Hotel&display=swap');
      `})]})},fm=({name:a,label:r,type:i,value:s,focused:c,onChange:f,onFocus:d,onBlur:g})=>h.jsxs("div",{className:"relative",children:[h.jsx("input",{type:i,name:a,value:s,onChange:f,onFocus:d,onBlur:g,required:!0,className:`
        w-full bg-[#121212] border rounded-[4px] text-[12px] text-[#f5f5f5]
        pt-[14px] pb-[2px] px-[8px] h-[38px] outline-none
        transition-all duration-150
        ${c===a?"border-[#a8a8a8]":"border-[#363636]"}
      `}),h.jsx("label",{className:`
      absolute left-[9px] pointer-events-none text-[#a8a8a8]
      transition-all duration-150
      ${s||c===a?"top-[4px] text-[10px]":"top-[50%] -translate-y-[50%] text-[12px]"}
    `,children:r})]}),i5=()=>{const[a,r]=N.useState({username:"",email:"",password:""}),[i,s]=N.useState(!1),[c,f]=N.useState(""),[d,g]=N.useState(null),[b,m]=N.useState(null),x=St(),{loading:y,RegisterHandle:j}=Kt(),z=G=>{const{name:X,value:K}=G.target;r(oe=>({...oe,[X]:K}))},w=G=>{const X=G.target.files[0];g(X),X&&m(URL.createObjectURL(X))},S=async G=>{G.preventDefault();const X=new FormData;X.append("username",a.username),X.append("email",a.email),X.append("password",a.password),X.append("file",d),await j(X),r({username:"",email:"",password:""}),x("/")},R=a.username&&a.email&&a.password&&!y;return h.jsxs("main",{className:"min-h-screen bg-[#000000] flex flex-col items-center justify-center px-4",children:[h.jsxs("div",{className:"fixed inset-0 overflow-hidden pointer-events-none -z-10",children:[h.jsx("div",{className:"absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full opacity-20 blur-3xl",style:{background:"radial-gradient(circle, #f09433, #e6683c, #dc2743)"}}),h.jsx("div",{className:"absolute -bottom-32 -right-32 w-[500px] h-[500px] rounded-full opacity-20 blur-3xl",style:{background:"radial-gradient(circle, #bc2a8d, #833ab4, #405de6)"}})]}),h.jsxs("div",{className:"w-full max-w-[350px] flex flex-col items-center gap-3",children:[h.jsxs("div",{className:"w-full bg-[#000000] border border-[#262626] rounded-sm px-10 pt-3 pb-3 flex flex-col items-center",children:[h.jsxs("svg",{className:"px-2 ml-10 mb-1",width:"175",height:"68",viewBox:"0 0 175 51",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[h.jsx("text",{x:"0",y:"42",fontFamily:"'Billabong', 'Grand Hotel', cursive",fontSize:"46",fill:"url(#instaGradR)",letterSpacing:"-1",children:"DevGram"}),h.jsx("defs",{children:h.jsxs("linearGradient",{id:"instaGradR",x1:"0%",y1:"0%",x2:"100%",y2:"0%",children:[h.jsx("stop",{offset:"0%",stopColor:"#f09433"}),h.jsx("stop",{offset:"25%",stopColor:"#e6683c"}),h.jsx("stop",{offset:"50%",stopColor:"#dc2743"}),h.jsx("stop",{offset:"75%",stopColor:"#cc2366"}),h.jsx("stop",{offset:"100%",stopColor:"#bc1888"})]})})]}),h.jsx("p",{className:"text-[#a8a8a8] text-sm font-semibold text-center leading-snug mb-4 px-2",children:"Sign up to see photos and videos from your friends."}),h.jsxs("form",{onSubmit:S,className:"w-full flex flex-col gap-[6px]",children:[h.jsxs("div",{className:"flex flex-col items-center mb-3",children:[h.jsxs("label",{htmlFor:"fileInput",className:"cursor-pointer group flex flex-col items-center gap-2",children:[h.jsxs("div",{className:"relative",children:[h.jsx("div",{className:"h-16 w-16 rounded-full border-2 border-dashed border-[#363636] group-hover:border-[#a8a8a8] transition-colors duration-150 overflow-hidden flex items-center justify-center bg-[#121212]",children:b?h.jsx("img",{src:b,alt:"preview",className:"h-full w-full object-cover"}):h.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"#a8a8a8",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[h.jsx("path",{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"}),h.jsx("circle",{cx:"12",cy:"7",r:"4"})]})}),h.jsx("div",{className:"absolute bottom-0 right-0 h-5 w-5 rounded-full bg-[#0095f6] flex items-center justify-center border-2 border-black",children:h.jsx("svg",{width:"10",height:"10",viewBox:"0 0 10 10",children:h.jsx("path",{d:"M5 1v8M1 5h8",stroke:"white",strokeWidth:"1.5",strokeLinecap:"round"})})})]}),h.jsx("span",{className:"text-[#0095f6] text-[12px] font-semibold group-hover:text-white transition-colors",children:b?"Change photo":"Add profile photo"})]}),h.jsx("input",{id:"fileInput",type:"file",accept:"image/*",onChange:w,className:"hidden"})]}),h.jsx(fm,{name:"username",label:"Username",type:"text",value:a.username,focused:c,onChange:z,onFocus:()=>f("username"),onBlur:()=>f("")}),h.jsx(fm,{name:"email",label:"Email",type:"text",value:a.email,focused:c,onChange:z,onFocus:()=>f("email"),onBlur:()=>f("")}),h.jsxs("div",{className:"relative",children:[h.jsx("input",{type:i?"text":"password",name:"password",value:a.password,onChange:z,onFocus:()=>f("password"),onBlur:()=>f(""),required:!0,className:`
                  w-full bg-[#121212] border rounded-[4px] text-[12px] text-[#f5f5f5]
                  pt-[14px] pb-[2px] px-[8px] pr-[52px] h-[38px] outline-none
                  transition-all duration-150
                  ${c==="password"?"border-[#a8a8a8]":"border-[#363636]"}
                `}),h.jsx("label",{className:`
                absolute left-[9px] pointer-events-none text-[#a8a8a8]
                transition-all duration-150
                ${a.password||c==="password"?"top-[4px] text-[10px]":"top-[50%] -translate-y-[50%] text-[12px]"}
              `,children:"Password"}),a.password&&h.jsx("button",{type:"button",onClick:()=>s(G=>!G),className:"absolute right-[10px] top-[50%] -translate-y-[50%] text-[14px] font-semibold text-[#f5f5f5] hover:text-[#a8a8a8] transition-colors",children:i?"Hide":"Show"})]}),h.jsxs("p",{className:"text-[11px] text-[#a8a8a8] text-center leading-[1.5] mt-2 px-1",children:["By signing up, you agree to our"," ",h.jsx("span",{className:"font-semibold text-[#f5f5f5] cursor-pointer hover:underline",children:"Terms"}),","," ",h.jsx("span",{className:"font-semibold text-[#f5f5f5] cursor-pointer hover:underline",children:"Privacy Policy"})," and"," ",h.jsx("span",{className:"font-semibold text-[#f5f5f5] cursor-pointer hover:underline",children:"Cookies Policy"}),"."]}),h.jsx("button",{type:"submit",disabled:!R,className:`
                mt-2 w-full h-[32px] rounded-lg text-white text-sm font-semibold
                transition-all duration-200 active:scale-[0.98]
                bg-[#0095f6] hover:bg-[#1877f2]
                ${R?"opacity-100 cursor-pointer":"opacity-70 cursor-not-allowed"}
              `,children:y?h.jsxs("span",{className:"flex items-center justify-center gap-2",children:[h.jsxs("svg",{className:"animate-spin h-4 w-4 text-white",viewBox:"0 0 24 24",fill:"none",children:[h.jsx("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),h.jsx("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8v8H4z"})]}),"Signing up…"]}):"Sign up"})]})]}),h.jsxs("div",{className:"w-full bg-[#000000] border border-[#262626] rounded-sm py-4 text-center text-sm text-[#f5f5f5]",children:["Have an account?"," ",h.jsx(ms,{to:"/login",className:"font-semibold hover:underline",style:{color:"#0095f6"},children:"Log in"})]}),h.jsx("div",{className:"flex flex-col items-center gap-3 mt-2",children:h.jsxs("div",{className:"flex gap-2",children:[h.jsx("a",{href:"https://apps.apple.com",target:"_blank",rel:"noreferrer",className:"border border-[#363636] rounded-lg px-3 py-1.5 bg-[#000000] hover:bg-[#121212] transition-colors",children:h.jsxs("div",{className:"flex items-center gap-1.5",children:[h.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"#f5f5f5",children:h.jsx("path",{d:"M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"})}),h.jsxs("div",{children:[h.jsx("div",{className:"text-[8px] text-[#f5f5f5] leading-none",children:"Download on the"}),h.jsx("div",{className:"text-[11px] font-semibold text-[#f5f5f5] leading-tight",children:"App Store"})]})]})}),h.jsx("a",{href:"https://play.google.com",target:"_blank",rel:"noreferrer",className:"border border-[#363636] rounded-lg px-3 py-1.5 bg-[#000000] hover:bg-[#121212] transition-colors",children:h.jsxs("div",{className:"flex items-center gap-1.5",children:[h.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"#f5f5f5",children:h.jsx("path",{d:"M3.18 23.76c.3.17.64.24.99.2l12.6-12.6-3.18-3.18L3.18 23.76zM20.47 10.6L17.6 9l-3.48 3.48 3.48 3.48 2.9-1.62c.83-.46.83-1.68-.03-2.14zM2.01 1.05C1.86 1.3 1.77 1.6 1.77 1.94v20.12c0 .34.09.64.24.89l.12.11 11.27-11.27v-.26L2.13.94l-.12.11zM13.43 8.07l-9.24-9.24-.13.11 12.6 12.6.13-.11L13.43 8.07z"})}),h.jsxs("div",{children:[h.jsx("div",{className:"text-[8px] text-[#f5f5f5] leading-none",children:"Get it on"}),h.jsx("div",{className:"text-[11px] font-semibold text-[#f5f5f5] leading-tight",children:"Google Play"})]})]})})]})}),h.jsx("footer",{className:"mt-2 text-center text-[11px] text-[#a8a8a8] pb-6",children:h.jsx("p",{children:"© 2025 DevGram Made with Love ❤"})})]}),h.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Grand+Hotel&display=swap');
      `})]})};var E1={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},dm=Ht.createContext&&Ht.createContext(E1),o5=["attr","size","title"];function s5(a,r){if(a==null)return{};var i=u5(a,r),s,c;if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(c=0;c<f.length;c++)s=f[c],!(r.indexOf(s)>=0)&&Object.prototype.propertyIsEnumerable.call(a,s)&&(i[s]=a[s])}return i}function u5(a,r){if(a==null)return{};var i={};for(var s in a)if(Object.prototype.hasOwnProperty.call(a,s)){if(r.indexOf(s)>=0)continue;i[s]=a[s]}return i}function os(){return os=Object.assign?Object.assign.bind():function(a){for(var r=1;r<arguments.length;r++){var i=arguments[r];for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(a[s]=i[s])}return a},os.apply(this,arguments)}function hm(a,r){var i=Object.keys(a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(a);r&&(s=s.filter(function(c){return Object.getOwnPropertyDescriptor(a,c).enumerable})),i.push.apply(i,s)}return i}function ss(a){for(var r=1;r<arguments.length;r++){var i=arguments[r]!=null?arguments[r]:{};r%2?hm(Object(i),!0).forEach(function(s){c5(a,s,i[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(i)):hm(Object(i)).forEach(function(s){Object.defineProperty(a,s,Object.getOwnPropertyDescriptor(i,s))})}return a}function c5(a,r,i){return r=f5(r),r in a?Object.defineProperty(a,r,{value:i,enumerable:!0,configurable:!0,writable:!0}):a[r]=i,a}function f5(a){var r=d5(a,"string");return typeof r=="symbol"?r:r+""}function d5(a,r){if(typeof a!="object"||!a)return a;var i=a[Symbol.toPrimitive];if(i!==void 0){var s=i.call(a,r);if(typeof s!="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(a)}function O1(a){return a&&a.map((r,i)=>Ht.createElement(r.tag,ss({key:i},r.attr),O1(r.child)))}function Sl(a){return r=>Ht.createElement(h5,os({attr:ss({},a.attr)},r),O1(a.child))}function h5(a){var r=i=>{var{attr:s,size:c,title:f}=a,d=s5(a,o5),g=c||i.size||"1em",b;return i.className&&(b=i.className),a.className&&(b=(b?b+" ":"")+a.className),Ht.createElement("svg",os({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},i.attr,s,d,{className:b,style:ss(ss({color:a.color||i.color},i.style),a.style),height:g,width:g,xmlns:"http://www.w3.org/2000/svg"}),f&&Ht.createElement("title",null,f),a.children)};return dm!==void 0?Ht.createElement(dm.Consumer,null,i=>r(i)):r(E1)}function jf(a){return Sl({attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M0 512V48C0 21.49 21.49 0 48 0h288c26.51 0 48 21.49 48 48v464L192 400 0 512z"},child:[]}]})(a)}function j1(a){return Sl({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"},child:[]}]})(a)}function lf(a){return Sl({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"},child:[]}]})(a)}function Nf(a){return Sl({attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M336 0H48C21.49 0 0 21.49 0 48v464l192-112 192 112V48c0-26.51-21.49-48-48-48zm0 428.43l-144-84-144 84V54a6 6 0 0 1 6-6h276c3.314 0 6 2.683 6 5.996V428.43z"},child:[]}]})(a)}function us(a){return Sl({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M458.4 64.3C400.6 15.7 311.3 23 256 79.3 200.7 23 111.4 15.6 53.6 64.3-21.6 127.6-10.6 230.8 43 285.5l175.4 178.7c10 10.2 23.4 15.9 37.6 15.9 14.3 0 27.6-5.6 37.6-15.8L469 285.6c53.5-54.7 64.7-157.9-10.6-221.3zm-23.6 187.5L259.4 430.5c-2.4 2.4-4.4 2.4-6.8 0L77.2 251.8c-36.5-37.2-43.9-107.6 7.3-150.7 38.9-32.7 98.9-27.8 136.5 10.5l35 35.7 35-35.7c37.8-38.5 97.8-43.2 136.5-10.6 51.1 43.1 43.5 113.9 7.3 150.8z"},child:[]}]})(a)}const N1=N.createContext(),p5=({children:a})=>{const[r,i]=N.useState([]),[s,c]=N.useState([]),[f,d]=N.useState([]),[g,b]=N.useState([]);return h.jsx(N1.Provider,{value:{singlepost:r,setSinglepost:i,story:s,post:g,setpost:b,setStory:c,userpersonalprofile:f,setuserpersonalprofile:d},children:a})},Jt=ct.create({baseURL:"/api",withCredentials:!0}),m5=async a=>(await Jt.post(`/post/like/${a}`)).data,g5=async a=>(await Jt.post(`/post/unlike/${a}`)).data,b5=async a=>(await Jt.post(`/user/follow/${a}`)).data,v5=async a=>(await Jt.post(`/user/unfollow/${a}`)).data,y5=async a=>(await Jt.post("/post",a)).data,x5=async a=>(await Jt.post(`/post/save/${a}`)).data,w5=async a=>(await Jt.post(`/post/unsave/${a}`)).data,S5=async a=>(await Jt.get(`/post/detail/${a}`)).data,E5=async(a,r)=>(await Jt.post(`/post/comment/${a}`,{comment:r})).data,O5=async(a,r)=>(await Jt.put(`/auth/update/${a}`,r)).data,j5=async()=>(await Jt.get("/user/story")).data,N5=async a=>(await Jt.get(`/user/personprofile/${a}`)).data,T5=async(a,r)=>(await Jt.post("/feedback",{name:a,feedback:r})).data,R5=async a=>(await Jt.delete(`/post/delete/${a}`)).data,Dn=()=>{const{handlegetallpost:a,allpost:r}=Kt(),{singlepost:i,setSinglepost:s,story:c,setStory:f,userpersonalprofile:d,setuserpersonalprofile:g,post:b,setpost:m}=N.useContext(N1),{setloader:x}=dr(),y=async ee=>{await m5(ee)},j=async ee=>{await g5(ee)},z=async ee=>{await Promise.all([b5(ee),ue(ee,!1),J()])},w=async ee=>{await Promise.all([v5(ee),ue(ee,!1),J()])},S=async ee=>{try{x(!0);const xe=await Promise.all([y5(ee),a(!1)]);m(be=>[xe.response,...be])}finally{x(!1)}},R=async ee=>{await Promise.all([x5(ee)])},G=async ee=>{await Promise.all([w5(ee)])},X=async(ee,xe=!0)=>{try{xe&&x(!0);const be=await S5(ee);s(be.detailpost),console.log(be.detailpost)}finally{x(!1)}},K=async(ee,xe)=>{await Promise.all([E5(ee,xe),X(ee,!1)])},oe=async(ee,xe)=>{await Promise.all([O5(ee,xe),a()])},J=async()=>{const ee=await j5();f(ee.user),console.log(ee.user)},ue=async(ee,xe=!0)=>{try{xe&&x(!0);const be=await N5(ee);g(be.user),console.log(be.user)}finally{x(!1)}},C=async(ee,xe)=>{const be=await T5(ee,xe);console.log(be)},le=async ee=>{m(xe=>xe.filter(be=>be._id!==ee));try{await R5(ee),await a(!1)}catch(xe){console.log(xe)}},Q=(ee,xe)=>{m(be=>be.map(me=>me._id===ee?{...me,islike:!me.islike,likecount:xe?me.likecount-1:me.likecount+1}:me)),xe?j(ee):y(ee)},Oe=(ee,xe)=>{m(be=>be.map(me=>me.user._id===ee?{...me,isfollow:!xe}:me)),xe?w(ee):z(ee)},je=(ee,xe)=>{m(be=>be.map(me=>me._id===ee?{...me,save:!xe}:me)),xe?G(ee):R(ee)};return N.useEffect(()=>{m(r)},[r]),{likeHandle:y,unlikeHandle:j,followHandle:z,unfollowHandle:w,uploadHandle:S,saveHandle:R,unsaveHandle:G,detailpostHandle:X,setSinglepost:s,singlepost:i,commentHandle:K,updateHandle:oe,storyHandle:J,story:c,setStory:f,personprofileHandle:ue,userpersonalprofile:d,setuserpersonalprofile:g,HandleFeedBack:C,saver:je,liker:Q,post:b,setpost:m,followbtn:Oe,deletepostHandle:le}};function _5(a){return Sl({attr:{viewBox:"0 0 24 24"},child:[{tag:"g",attr:{id:"Circle_Plus"},child:[{tag:"g",attr:{},child:[{tag:"path",attr:{d:"M15,12.5H12.5V15a.5.5,0,0,1-1,0V12.5H9a.5.5,0,0,1,0-1h2.5V9a.5.5,0,0,1,1,0v2.5H15A.5.5,0,0,1,15,12.5Z"},child:[]},{tag:"path",attr:{d:"M12,21.932A9.934,9.934,0,1,1,21.932,12,9.944,9.944,0,0,1,12,21.932ZM12,3.065A8.934,8.934,0,1,0,20.932,12,8.944,8.944,0,0,0,12,3.065Z"},child:[]}]}]}]})(a)}const C5=()=>{const{storyHandle:a,story:r}=Dn(),{user:i}=Kt(),s=St();return N.useEffect(()=>{a()},[]),console.log(r),h.jsx("div",{className:" flex  gap-4 w-full shrink-0",children:r?.filter(c=>c.username!==i.username).map(c=>h.jsx(h.Fragment,{children:h.jsxs("div",{className:"flex gap-1 flex-col shrink-0 items-center",onClick:()=>s(`/personprofile/${c._id}`),children:[h.jsx("img",{src:c.profile_image,className:"shrink-0 object-cover h-20 w-20 rounded-full ",alt:""}),h.jsxs("span",{className:" w-full text-center text-sm font-semibold",children:[c.username.slice(0,10),h.jsx("span",{className:" w-full text-center text-sm font-semibold",children:c.username.length>10&&"..."})]})]},c._id)}))})};function z5(a){return Sl({attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M11.75 4.5a.75.75 0 0 1 .75.75V11h5.75a.75.75 0 0 1 0 1.5H12.5v5.75a.75.75 0 0 1-1.5 0V12.5H5.25a.75.75 0 0 1 0-1.5H11V5.25a.75.75 0 0 1 .75-.75Z"},child:[]}]})(a)}const A5=({item:a,expand:r,toggle:i})=>{const s=r===a._id,c=a.caption.length>80,f=g=>g.split(/(\s+)/).map((b,m)=>b.startsWith("#")?h.jsx("span",{className:"text-[#4f9eff] font-medium hover:text-blue-300 cursor-pointer transition-colors duration-150",children:b},m):b.startsWith("@")?h.jsx("span",{className:"text-[#4f9eff] font-medium hover:text-blue-300 cursor-pointer transition-colors duration-150",children:b},m):b),d=s?a.caption:c?a.caption.slice(0,80):a.caption;return h.jsx("div",{className:"px-1 pt-1 pb-2",style:{animation:"captionFadeIn 0.25s ease both"},children:h.jsxs("p",{className:"text-[14px] leading-[1.6] text-[#f5f5f5]",children:[h.jsx("span",{className:`font-bold text-white mr-[6px] cursor-pointer\r
                     hover:opacity-75 active:opacity-50\r
                     transition-opacity duration-150`,children:a.user.username}),h.jsx("span",{className:"font-normal tracking-[0.01em]",children:f(d)}),c&&h.jsxs(h.Fragment,{children:[!s&&h.jsx("span",{className:"text-[#a8a8a8]",children:" ... "}),h.jsx("button",{onClick:()=>i(a._id),className:`text-[#a8a8a8] text-[13px] font-normal\r
                         hover:text-white active:scale-95\r
                         transition-all duration-150 ml-0.5`,children:s?"less":"more"})]})]})})};function Ot(a,r){r===void 0&&(r={});var i=r.insertAt;if(a&&typeof document<"u"){var s=document.head||document.getElementsByTagName("head")[0],c=document.createElement("style");c.type="text/css",i==="top"&&s.firstChild?s.insertBefore(c,s.firstChild):s.appendChild(c),c.styleSheet?c.styleSheet.cssText=a:c.appendChild(document.createTextNode(a))}}Ot(`.react-loading-indicator-normalize,
[class$=rli-bounding-box] {
  font-size: 1rem;
  display: inline-block;
  box-sizing: border-box;
  text-align: unset;
  isolation: isolate;
}

.rli-d-i-b {
  display: inline-block;
}

.rli-text-format {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 600;
  width: 90%;
  text-transform: uppercase;
  text-align: center;
  font-size: 0.7em;
  letter-spacing: 0.5px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Avenir Next", "Avenir", "Segoe UI", "Lucida Grande", "Helvetica Neue", "Helvetica", "Fira Sans", "Roboto", "Noto", "Droid Sans", "Cantarell", "Oxygen", "Ubuntu", "Franklin Gothic Medium", "Century Gothic", "Liberation Sans", sans-serif;
}`);var qn=function(){return qn=Object.assign||function(a){for(var r,i=1,s=arguments.length;i<s;i++)for(var c in r=arguments[i])Object.prototype.hasOwnProperty.call(r,c)&&(a[c]=r[c]);return a},qn.apply(this,arguments)};function cs(a){return cs=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(r){return typeof r}:function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},cs(a)}var M5=/^\s+/,D5=/\s+$/;function pe(a,r){if(r=r||{},(a=a||"")instanceof pe)return a;if(!(this instanceof pe))return new pe(a,r);var i=(function(s){var c={r:0,g:0,b:0},f=1,d=null,g=null,b=null,m=!1,x=!1;typeof s=="string"&&(s=(function(w){w=w.replace(M5,"").replace(D5,"").toLowerCase();var S,R=!1;if(rf[w])w=rf[w],R=!0;else if(w=="transparent")return{r:0,g:0,b:0,a:0,format:"name"};return(S=zn.rgb.exec(w))?{r:S[1],g:S[2],b:S[3]}:(S=zn.rgba.exec(w))?{r:S[1],g:S[2],b:S[3],a:S[4]}:(S=zn.hsl.exec(w))?{h:S[1],s:S[2],l:S[3]}:(S=zn.hsla.exec(w))?{h:S[1],s:S[2],l:S[3],a:S[4]}:(S=zn.hsv.exec(w))?{h:S[1],s:S[2],v:S[3]}:(S=zn.hsva.exec(w))?{h:S[1],s:S[2],v:S[3],a:S[4]}:(S=zn.hex8.exec(w))?{r:ln(S[1]),g:ln(S[2]),b:ln(S[3]),a:ym(S[4]),format:R?"name":"hex8"}:(S=zn.hex6.exec(w))?{r:ln(S[1]),g:ln(S[2]),b:ln(S[3]),format:R?"name":"hex"}:(S=zn.hex4.exec(w))?{r:ln(S[1]+""+S[1]),g:ln(S[2]+""+S[2]),b:ln(S[3]+""+S[3]),a:ym(S[4]+""+S[4]),format:R?"name":"hex8"}:(S=zn.hex3.exec(w))?{r:ln(S[1]+""+S[1]),g:ln(S[2]+""+S[2]),b:ln(S[3]+""+S[3]),format:R?"name":"hex"}:!1})(s)),cs(s)=="object"&&(fa(s.r)&&fa(s.g)&&fa(s.b)?(y=s.r,j=s.g,z=s.b,c={r:255*nt(y,255),g:255*nt(j,255),b:255*nt(z,255)},m=!0,x=String(s.r).substr(-1)==="%"?"prgb":"rgb"):fa(s.h)&&fa(s.s)&&fa(s.v)?(d=mi(s.s),g=mi(s.v),c=(function(w,S,R){w=6*nt(w,360),S=nt(S,100),R=nt(R,100);var G=Math.floor(w),X=w-G,K=R*(1-S),oe=R*(1-X*S),J=R*(1-(1-X)*S),ue=G%6,C=[R,oe,K,K,J,R][ue],le=[J,R,R,oe,K,K][ue],Q=[K,K,J,R,R,oe][ue];return{r:255*C,g:255*le,b:255*Q}})(s.h,d,g),m=!0,x="hsv"):fa(s.h)&&fa(s.s)&&fa(s.l)&&(d=mi(s.s),b=mi(s.l),c=(function(w,S,R){var G,X,K;function oe(C,le,Q){return Q<0&&(Q+=1),Q>1&&(Q-=1),Q<1/6?C+6*(le-C)*Q:Q<.5?le:Q<2/3?C+(le-C)*(2/3-Q)*6:C}if(w=nt(w,360),S=nt(S,100),R=nt(R,100),S===0)G=X=K=R;else{var J=R<.5?R*(1+S):R+S-R*S,ue=2*R-J;G=oe(ue,J,w+1/3),X=oe(ue,J,w),K=oe(ue,J,w-1/3)}return{r:255*G,g:255*X,b:255*K}})(s.h,d,b),m=!0,x="hsl"),s.hasOwnProperty("a")&&(f=s.a));var y,j,z;return f=T1(f),{ok:m,format:s.format||x,r:Math.min(255,Math.max(c.r,0)),g:Math.min(255,Math.max(c.g,0)),b:Math.min(255,Math.max(c.b,0)),a:f}})(a);this._originalInput=a,this._r=i.r,this._g=i.g,this._b=i.b,this._a=i.a,this._roundA=Math.round(100*this._a)/100,this._format=r.format||i.format,this._gradientType=r.gradientType,this._r<1&&(this._r=Math.round(this._r)),this._g<1&&(this._g=Math.round(this._g)),this._b<1&&(this._b=Math.round(this._b)),this._ok=i.ok}function pm(a,r,i){a=nt(a,255),r=nt(r,255),i=nt(i,255);var s,c,f=Math.max(a,r,i),d=Math.min(a,r,i),g=(f+d)/2;if(f==d)s=c=0;else{var b=f-d;switch(c=g>.5?b/(2-f-d):b/(f+d),f){case a:s=(r-i)/b+(r<i?6:0);break;case r:s=(i-a)/b+2;break;case i:s=(a-r)/b+4}s/=6}return{h:s,s:c,l:g}}function mm(a,r,i){a=nt(a,255),r=nt(r,255),i=nt(i,255);var s,c,f=Math.max(a,r,i),d=Math.min(a,r,i),g=f,b=f-d;if(c=f===0?0:b/f,f==d)s=0;else{switch(f){case a:s=(r-i)/b+(r<i?6:0);break;case r:s=(i-a)/b+2;break;case i:s=(a-r)/b+4}s/=6}return{h:s,s:c,v:g}}function gm(a,r,i,s){var c=[An(Math.round(a).toString(16)),An(Math.round(r).toString(16)),An(Math.round(i).toString(16))];return s&&c[0].charAt(0)==c[0].charAt(1)&&c[1].charAt(0)==c[1].charAt(1)&&c[2].charAt(0)==c[2].charAt(1)?c[0].charAt(0)+c[1].charAt(0)+c[2].charAt(0):c.join("")}function bm(a,r,i,s){return[An(R1(s)),An(Math.round(a).toString(16)),An(Math.round(r).toString(16)),An(Math.round(i).toString(16))].join("")}function k5(a,r){r=r===0?0:r||10;var i=pe(a).toHsl();return i.s-=r/100,i.s=ws(i.s),pe(i)}function U5(a,r){r=r===0?0:r||10;var i=pe(a).toHsl();return i.s+=r/100,i.s=ws(i.s),pe(i)}function H5(a){return pe(a).desaturate(100)}function L5(a,r){r=r===0?0:r||10;var i=pe(a).toHsl();return i.l+=r/100,i.l=ws(i.l),pe(i)}function B5(a,r){r=r===0?0:r||10;var i=pe(a).toRgb();return i.r=Math.max(0,Math.min(255,i.r-Math.round(-r/100*255))),i.g=Math.max(0,Math.min(255,i.g-Math.round(-r/100*255))),i.b=Math.max(0,Math.min(255,i.b-Math.round(-r/100*255))),pe(i)}function q5(a,r){r=r===0?0:r||10;var i=pe(a).toHsl();return i.l-=r/100,i.l=ws(i.l),pe(i)}function Y5(a,r){var i=pe(a).toHsl(),s=(i.h+r)%360;return i.h=s<0?360+s:s,pe(i)}function G5(a){var r=pe(a).toHsl();return r.h=(r.h+180)%360,pe(r)}function vm(a,r){if(isNaN(r)||r<=0)throw new Error("Argument to polyad must be a positive number");for(var i=pe(a).toHsl(),s=[pe(a)],c=360/r,f=1;f<r;f++)s.push(pe({h:(i.h+f*c)%360,s:i.s,l:i.l}));return s}function X5(a){var r=pe(a).toHsl(),i=r.h;return[pe(a),pe({h:(i+72)%360,s:r.s,l:r.l}),pe({h:(i+216)%360,s:r.s,l:r.l})]}function V5(a,r,i){r=r||6,i=i||30;var s=pe(a).toHsl(),c=360/i,f=[pe(a)];for(s.h=(s.h-(c*r>>1)+720)%360;--r;)s.h=(s.h+c)%360,f.push(pe(s));return f}function Z5(a,r){r=r||6;for(var i=pe(a).toHsv(),s=i.h,c=i.s,f=i.v,d=[],g=1/r;r--;)d.push(pe({h:s,s:c,v:f})),f=(f+g)%1;return d}pe.prototype={isDark:function(){return this.getBrightness()<128},isLight:function(){return!this.isDark()},isValid:function(){return this._ok},getOriginalInput:function(){return this._originalInput},getFormat:function(){return this._format},getAlpha:function(){return this._a},getBrightness:function(){var a=this.toRgb();return(299*a.r+587*a.g+114*a.b)/1e3},getLuminance:function(){var a,r,i,s=this.toRgb();return a=s.r/255,r=s.g/255,i=s.b/255,.2126*(a<=.03928?a/12.92:Math.pow((a+.055)/1.055,2.4))+.7152*(r<=.03928?r/12.92:Math.pow((r+.055)/1.055,2.4))+.0722*(i<=.03928?i/12.92:Math.pow((i+.055)/1.055,2.4))},setAlpha:function(a){return this._a=T1(a),this._roundA=Math.round(100*this._a)/100,this},toHsv:function(){var a=mm(this._r,this._g,this._b);return{h:360*a.h,s:a.s,v:a.v,a:this._a}},toHsvString:function(){var a=mm(this._r,this._g,this._b),r=Math.round(360*a.h),i=Math.round(100*a.s),s=Math.round(100*a.v);return this._a==1?"hsv("+r+", "+i+"%, "+s+"%)":"hsva("+r+", "+i+"%, "+s+"%, "+this._roundA+")"},toHsl:function(){var a=pm(this._r,this._g,this._b);return{h:360*a.h,s:a.s,l:a.l,a:this._a}},toHslString:function(){var a=pm(this._r,this._g,this._b),r=Math.round(360*a.h),i=Math.round(100*a.s),s=Math.round(100*a.l);return this._a==1?"hsl("+r+", "+i+"%, "+s+"%)":"hsla("+r+", "+i+"%, "+s+"%, "+this._roundA+")"},toHex:function(a){return gm(this._r,this._g,this._b,a)},toHexString:function(a){return"#"+this.toHex(a)},toHex8:function(a){return(function(r,i,s,c,f){var d=[An(Math.round(r).toString(16)),An(Math.round(i).toString(16)),An(Math.round(s).toString(16)),An(R1(c))];return f&&d[0].charAt(0)==d[0].charAt(1)&&d[1].charAt(0)==d[1].charAt(1)&&d[2].charAt(0)==d[2].charAt(1)&&d[3].charAt(0)==d[3].charAt(1)?d[0].charAt(0)+d[1].charAt(0)+d[2].charAt(0)+d[3].charAt(0):d.join("")})(this._r,this._g,this._b,this._a,a)},toHex8String:function(a){return"#"+this.toHex8(a)},toRgb:function(){return{r:Math.round(this._r),g:Math.round(this._g),b:Math.round(this._b),a:this._a}},toRgbString:function(){return this._a==1?"rgb("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+")":"rgba("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+", "+this._roundA+")"},toPercentageRgb:function(){return{r:Math.round(100*nt(this._r,255))+"%",g:Math.round(100*nt(this._g,255))+"%",b:Math.round(100*nt(this._b,255))+"%",a:this._a}},toPercentageRgbString:function(){return this._a==1?"rgb("+Math.round(100*nt(this._r,255))+"%, "+Math.round(100*nt(this._g,255))+"%, "+Math.round(100*nt(this._b,255))+"%)":"rgba("+Math.round(100*nt(this._r,255))+"%, "+Math.round(100*nt(this._g,255))+"%, "+Math.round(100*nt(this._b,255))+"%, "+this._roundA+")"},toName:function(){return this._a===0?"transparent":!(this._a<1)&&(P5[gm(this._r,this._g,this._b,!0)]||!1)},toFilter:function(a){var r="#"+bm(this._r,this._g,this._b,this._a),i=r,s=this._gradientType?"GradientType = 1, ":"";if(a){var c=pe(a);i="#"+bm(c._r,c._g,c._b,c._a)}return"progid:DXImageTransform.Microsoft.gradient("+s+"startColorstr="+r+",endColorstr="+i+")"},toString:function(a){var r=!!a;a=a||this._format;var i=!1,s=this._a<1&&this._a>=0;return r||!s||a!=="hex"&&a!=="hex6"&&a!=="hex3"&&a!=="hex4"&&a!=="hex8"&&a!=="name"?(a==="rgb"&&(i=this.toRgbString()),a==="prgb"&&(i=this.toPercentageRgbString()),a!=="hex"&&a!=="hex6"||(i=this.toHexString()),a==="hex3"&&(i=this.toHexString(!0)),a==="hex4"&&(i=this.toHex8String(!0)),a==="hex8"&&(i=this.toHex8String()),a==="name"&&(i=this.toName()),a==="hsl"&&(i=this.toHslString()),a==="hsv"&&(i=this.toHsvString()),i||this.toHexString()):a==="name"&&this._a===0?this.toName():this.toRgbString()},clone:function(){return pe(this.toString())},_applyModification:function(a,r){var i=a.apply(null,[this].concat([].slice.call(r)));return this._r=i._r,this._g=i._g,this._b=i._b,this.setAlpha(i._a),this},lighten:function(){return this._applyModification(L5,arguments)},brighten:function(){return this._applyModification(B5,arguments)},darken:function(){return this._applyModification(q5,arguments)},desaturate:function(){return this._applyModification(k5,arguments)},saturate:function(){return this._applyModification(U5,arguments)},greyscale:function(){return this._applyModification(H5,arguments)},spin:function(){return this._applyModification(Y5,arguments)},_applyCombination:function(a,r){return a.apply(null,[this].concat([].slice.call(r)))},analogous:function(){return this._applyCombination(V5,arguments)},complement:function(){return this._applyCombination(G5,arguments)},monochromatic:function(){return this._applyCombination(Z5,arguments)},splitcomplement:function(){return this._applyCombination(X5,arguments)},triad:function(){return this._applyCombination(vm,[3])},tetrad:function(){return this._applyCombination(vm,[4])}},pe.fromRatio=function(a,r){if(cs(a)=="object"){var i={};for(var s in a)a.hasOwnProperty(s)&&(i[s]=s==="a"?a[s]:mi(a[s]));a=i}return pe(a,r)},pe.equals=function(a,r){return!(!a||!r)&&pe(a).toRgbString()==pe(r).toRgbString()},pe.random=function(){return pe.fromRatio({r:Math.random(),g:Math.random(),b:Math.random()})},pe.mix=function(a,r,i){i=i===0?0:i||50;var s=pe(a).toRgb(),c=pe(r).toRgb(),f=i/100;return pe({r:(c.r-s.r)*f+s.r,g:(c.g-s.g)*f+s.g,b:(c.b-s.b)*f+s.b,a:(c.a-s.a)*f+s.a})},pe.readability=function(a,r){var i=pe(a),s=pe(r);return(Math.max(i.getLuminance(),s.getLuminance())+.05)/(Math.min(i.getLuminance(),s.getLuminance())+.05)},pe.isReadable=function(a,r,i){var s,c,f=pe.readability(a,r);switch(c=!1,(s=(function(d){var g,b;return g=((d=d||{level:"AA",size:"small"}).level||"AA").toUpperCase(),b=(d.size||"small").toLowerCase(),g!=="AA"&&g!=="AAA"&&(g="AA"),b!=="small"&&b!=="large"&&(b="small"),{level:g,size:b}})(i)).level+s.size){case"AAsmall":case"AAAlarge":c=f>=4.5;break;case"AAlarge":c=f>=3;break;case"AAAsmall":c=f>=7}return c},pe.mostReadable=function(a,r,i){var s,c,f,d,g=null,b=0;c=(i=i||{}).includeFallbackColors,f=i.level,d=i.size;for(var m=0;m<r.length;m++)(s=pe.readability(a,r[m]))>b&&(b=s,g=pe(r[m]));return pe.isReadable(a,g,{level:f,size:d})||!c?g:(i.includeFallbackColors=!1,pe.mostReadable(a,["#fff","#000"],i))};var rf=pe.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"},P5=pe.hexNames=(function(a){var r={};for(var i in a)a.hasOwnProperty(i)&&(r[a[i]]=i);return r})(rf);function T1(a){return a=parseFloat(a),(isNaN(a)||a<0||a>1)&&(a=1),a}function nt(a,r){(function(s){return typeof s=="string"&&s.indexOf(".")!=-1&&parseFloat(s)===1})(a)&&(a="100%");var i=(function(s){return typeof s=="string"&&s.indexOf("%")!=-1})(a);return a=Math.min(r,Math.max(0,parseFloat(a))),i&&(a=parseInt(a*r,10)/100),Math.abs(a-r)<1e-6?1:a%r/parseFloat(r)}function ws(a){return Math.min(1,Math.max(0,a))}function ln(a){return parseInt(a,16)}function An(a){return a.length==1?"0"+a:""+a}function mi(a){return a<=1&&(a=100*a+"%"),a}function R1(a){return Math.round(255*parseFloat(a)).toString(16)}function ym(a){return ln(a)/255}var Ba,$o,Wo,zn=($o="[\\s|\\(]+("+(Ba="(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)")+")[,|\\s]+("+Ba+")[,|\\s]+("+Ba+")\\s*\\)?",Wo="[\\s|\\(]+("+Ba+")[,|\\s]+("+Ba+")[,|\\s]+("+Ba+")[,|\\s]+("+Ba+")\\s*\\)?",{CSS_UNIT:new RegExp(Ba),rgb:new RegExp("rgb"+$o),rgba:new RegExp("rgba"+Wo),hsl:new RegExp("hsl"+$o),hsla:new RegExp("hsla"+Wo),hsv:new RegExp("hsv"+$o),hsva:new RegExp("hsva"+Wo),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/});function fa(a){return!!zn.CSS_UNIT.exec(a)}var Q5=function(a,r){var i=(typeof a=="string"?parseInt(a):a)||0;if(i>=-5&&i<=5){var s=i,c=parseFloat(r),f=c+s*(c/5)*-1;return(f==0||f<=Number.EPSILON)&&(f=.1),{animationPeriod:f+"s"}}return{animationPeriod:r}},K5=function(a,r){var i=a||{},s="";switch(r){case"small":s="12px";break;case"medium":s="16px";break;case"large":s="20px";break;default:s=void 0}var c={};if(i.fontSize){var f=i.fontSize;c=(function(d,g){var b={};for(var m in d)Object.prototype.hasOwnProperty.call(d,m)&&g.indexOf(m)<0&&(b[m]=d[m]);if(d!=null&&typeof Object.getOwnPropertySymbols=="function"){var x=0;for(m=Object.getOwnPropertySymbols(d);x<m.length;x++)g.indexOf(m[x])<0&&Object.prototype.propertyIsEnumerable.call(d,m[x])&&(b[m[x]]=d[m[x]])}return b})(i,["fontSize"]),s=f}return{fontSize:s,styles:c}},J5={color:"currentColor",mixBlendMode:"difference",width:"unset",display:"block",paddingTop:"2px"},F5=function(a){var r=a.className,i=a.text,s=a.textColor,c=a.staticText,f=a.style;return i?Ht.createElement("span",{className:"rli-d-i-b rli-text-format ".concat(r||"").trim(),style:qn(qn(qn({},c&&J5),s&&{color:s,mixBlendMode:"unset"}),f&&f)},typeof i=="string"&&i.length?i:"loading"):null},$5="rgb(50, 205, 50)";function W5(a,r){if(r===void 0&&(r=0),a.length===0)throw new Error("Input array cannot be empty!");var i=[];return(function s(c,f){return f===void 0&&(f=0),i.push.apply(i,c),i.length<f&&s(i,f),i.slice(0,f)})(a,r)}Ot(`.atom-rli-bounding-box {
  --atom-phase1-rgb: 50, 205, 50;
  color: rgba(var(--atom-phase1-rgb), 1);
  font-size: 16px;
  position: relative;
  text-align: unset;
  isolation: isolate;
}
.atom-rli-bounding-box .atom-indicator {
  width: 6em;
  height: 6em;
  position: relative;
  perspective: 6em;
  overflow: hidden;
  color: rgba(var(--atom-phase1-rgb), 1);
  animation: calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7gg;
}
.atom-rli-bounding-box .atom-indicator::after, .atom-rli-bounding-box .atom-indicator::before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 0.48em;
  height: 0.48em;
  margin: auto;
  border-radius: 50%;
  background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase1-rgb), 0.1), rgba(var(--atom-phase1-rgb), 0.3) 37%, rgba(var(--atom-phase1-rgb), 1) 100%);
  animation: calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7eg;
}
.atom-rli-bounding-box .atom-indicator::before {
  filter: drop-shadow(0px 0px 0.0625em currentColor);
}
.atom-rli-bounding-box .atom-indicator .electron-orbit {
  color: rgba(var(--atom-phase1-rgb), 0.85);
  border: 0;
  border-left: 0.4em solid currentColor;
  box-sizing: border-box;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  width: 4.8em;
  height: 4.8em;
  background-color: transparent;
  border-radius: 50%;
  transform-style: preserve-3d;
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, linear) infinite uxlv7fj, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7gy;
}
.atom-rli-bounding-box .atom-indicator .electron-orbit::after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border-radius: 50%;
  color: rgba(var(--atom-phase1-rgb), 0.18);
  animation: calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7hv;
  border: 0.125em solid currentColor;
}
.atom-rli-bounding-box .atom-indicator .electron-orbit::before {
  content: "";
  width: 0.192em;
  height: 0.192em;
  position: absolute;
  border-radius: 50%;
  top: -0.096em;
  right: 0;
  bottom: 0;
  left: 0;
  margin: 0 auto;
  color: rgba(var(--atom-phase1-rgb), 1);
  box-shadow: 0px 0px 0.0625em 0.0625em currentColor, 0px 0px 0.0625em 0.125em currentColor;
  background-color: currentColor;
  transform: rotateY(-70deg);
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, linear) infinite uxlv7ew, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7gg;
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(1) {
  --orbit-vector-factor: -1;
  transform: rotateY(65deg) rotateX(calc(54deg * var(--orbit-vector-factor)));
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(2) {
  --orbit-vector-factor: 1;
  transform: rotateY(65deg) rotateX(calc(54deg * var(--orbit-vector-factor)));
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(3) {
  --orbit-vector-factor: 0;
  transform: rotateY(65deg) rotateX(calc(54deg * var(--orbit-vector-factor)));
  animation-delay: calc(var(--rli-animation-duration, 1s) * 0.5 * -1), calc(var(--rli-animation-duration, 1s) * 4 * -1);
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(3)::before {
  animation-delay: calc(var(--rli-animation-duration, 1s) * 0.5 * -1), calc(var(--rli-animation-duration, 1s) * 4 * -1);
}
.atom-rli-bounding-box .atom-text {
  color: currentColor;
  mix-blend-mode: difference;
  width: unset;
  display: block;
}

@property --atom-phase1-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --atom-phase2-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --atom-phase3-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --atom-phase4-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes uxlv7fj {
  from {
    transform: rotateY(70deg) rotateX(calc(54deg * var(--orbit-vector-factor))) rotateZ(0deg);
  }
  to {
    transform: rotateY(70deg) rotateX(calc(54deg * var(--orbit-vector-factor))) rotateZ(360deg);
  }
}
@keyframes uxlv7ew {
  from {
    transform: rotateY(-70deg) rotateX(0deg);
  }
  to {
    transform: rotateY(-70deg) rotateX(-360deg);
  }
}
@keyframes uxlv7eg {
  100%, 0% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase1-rgb), 0.1), rgba(var(--atom-phase1-rgb), 0.3) 37%, rgba(var(--atom-phase1-rgb), 1) 100%);
  }
  20% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase1-rgb), 0.1), rgba(var(--atom-phase1-rgb), 0.3) 37%, rgba(var(--atom-phase1-rgb), 1) 100%);
  }
  25% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  45% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  50% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  70% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  75% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  95% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
}
@keyframes uxlv7gg {
  100%, 0% {
    color: rgba(var(--atom-phase1-rgb), 1);
  }
  20% {
    color: rgba(var(--atom-phase1-rgb), 1);
  }
  25% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1);
  }
  45% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1);
  }
  50% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1);
  }
  70% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1);
  }
  75% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1);
  }
  95% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1);
  }
}
@keyframes uxlv7gy {
  100%, 0% {
    color: rgba(var(--atom-phase1-rgb), 0.85);
  }
  20% {
    color: rgba(var(--atom-phase1-rgb), 0.85);
  }
  25% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  45% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  50% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  70% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  75% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  95% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.85);
  }
}
@keyframes uxlv7hv {
  100%, 0% {
    color: rgba(var(--atom-phase1-rgb), 0.18);
  }
  20% {
    color: rgba(var(--atom-phase1-rgb), 0.18);
  }
  25% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  45% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  50% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  70% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  75% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  95% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.18);
  }
}`);var rr=pe($5).toRgb(),gl=Array.from({length:4},(function(a,r){return"--atom-phase".concat(r+1,"-rgb")})),_1=function(a){var r,i=K5(a?.style,a?.size),s=i.styles,c=i.fontSize,f=a?.easing,d=Q5(a?.speedPlus,"1s").animationPeriod,g=(function(b){var m={};if(b instanceof Array){for(var x=W5(b,gl.length),y=0;y<x.length&&!(y>=4);y++)try{if(!(S=pe(x[y])).isValid())throw new Error("invalid color");var j=(R=S.toRgb()).r,z=R.g,w=R.b;m[gl[y]]="".concat(j,", ").concat(z,", ").concat(w)}catch{j=rr.r,z=rr.g,w=rr.b,m[gl[y]]="".concat(j,", ").concat(z,", ").concat(w),console.warn("Possibly an invalid color( ".concat(x[y]," ) passed to Atom indicator!"))}return m}try{if(typeof b!="string")throw new Error("Color String expected");var S;if(!(S=pe(b)).isValid())throw new Error("Invalid color");var R;for(j=(R=S.toRgb()).r,z=R.g,w=R.b,y=0;y<gl.length;y++)m[gl[y]]="".concat(j,", ").concat(z,", ").concat(w)}catch(G){for(G instanceof Error?console.warn("[".concat(G.message,']: Received "').concat(typeof b,'" instead with value, ').concat(JSON.stringify(b))):console.warn("".concat(JSON.stringify(b)," received in <Atom /> indicator cannot be processed. Using default instead!")),y=0;y<gl.length;y++)j=rr.r,z=rr.g,w=rr.b,m[gl[y]]="".concat(j,", ").concat(z,", ").concat(w)}return m})((r=a?.color)!==null&&r!==void 0?r:"");return Ht.createElement("span",{className:"rli-d-i-b atom-rli-bounding-box",style:qn(qn(qn(qn(qn({},c&&{fontSize:c}),d&&{"--rli-animation-duration":d}),f&&{"--rli-animation-function":f}),g),s),role:"status","aria-live":"polite","aria-label":"Loading"},Ht.createElement("span",{className:"rli-d-i-b atom-indicator"},Ht.createElement("span",{className:"rli-d-i-b electron-orbit"}),Ht.createElement("span",{className:"rli-d-i-b electron-orbit"}),Ht.createElement("span",{className:"rli-d-i-b electron-orbit"})),Ht.createElement(F5,{className:"atom-text",staticText:!0,text:a?.text,textColor:a?.textColor}))};Ot(`.commet-rli-bounding-box {
  --commet-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  width: 6.85em;
  height: 6.85em;
  overflow: hidden;
  display: inline-block;
  box-sizing: border-box;
  position: relative;
  isolation: isolate;
}
.commet-rli-bounding-box .commet-indicator {
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  box-sizing: border-box;
  width: 6em;
  height: 6em;
  color: var(--commet-phase1-color);
  display: inline-block;
  isolation: isolate;
  position: absolute;
  z-index: 0;
  animation: calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, cubic-bezier(0.08, 0.03, 0.91, 0.93)) infinite uxlv7cp;
}
.commet-rli-bounding-box .commet-indicator .commet-box {
  position: absolute;
  display: inline-block;
  top: 0;
  right: 0;
  bottom: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  animation: uxlv7bx var(--rli-animation-duration, 1.2s) var(--rli-animation-function, cubic-bezier(0.08, 0.03, 0.91, 0.93)) infinite;
}
.commet-rli-bounding-box .commet-indicator .commet-box:nth-of-type(1) {
  width: 100%;
  height: 100%;
  animation-direction: normal;
}
.commet-rli-bounding-box .commet-indicator .commet-box:nth-of-type(2) {
  width: 70%;
  height: 70%;
  animation-direction: reverse;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commetball-box {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  bottom: 0;
  left: 0;
  display: inline-block;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commetball-box::before {
  content: "";
  width: 0.5em;
  height: 0.5em;
  border-radius: 50%;
  background-color: currentColor;
  position: absolute;
  top: -0.125em;
  left: 50%;
  transform: translateX(-50%);
  box-shadow: 0 0 0.2em 0em currentColor, 0 0 0.6em 0em currentColor;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commet-trail {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  bottom: 0;
  left: 0;
  border-radius: 50%;
  box-sizing: border-box;
  border-style: solid;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commet-trail.trail1 {
  border-color: currentColor transparent transparent currentColor;
  border-width: 0.25em 0.25em 0 0;
  transform: rotateZ(-45deg);
}
.commet-rli-bounding-box .commet-indicator .commet-box .commet-trail.trail2 {
  border-color: currentColor currentColor transparent transparent;
  border-width: 0.25em 0 0 0.25em;
  transform: rotateZ(45deg);
}
.commet-rli-bounding-box .commet-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: var(--commet-phase1-color);
}

@property --commet-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --commet-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --commet-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --commet-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7bx {
  to {
    transform: rotate(1turn);
  }
}
@keyframes uxlv7cp {
  100%, 0% {
    color: var(--commet-phase1-color);
  }
  20% {
    color: var(--commet-phase1-color);
  }
  25% {
    color: var(--commet-phase2-color, var(--commet-phase1-color));
  }
  45% {
    color: var(--commet-phase2-color, var(--commet-phase1-color));
  }
  50% {
    color: var(--commet-phase3-color, var(--commet-phase1-color));
  }
  70% {
    color: var(--commet-phase3-color, var(--commet-phase1-color));
  }
  75% {
    color: var(--commet-phase4-color, var(--commet-phase1-color));
  }
  95% {
    color: var(--commet-phase4-color, var(--commet-phase1-color));
  }
}`);Array.from({length:4},(function(a,r){return"--commet-phase".concat(r+1,"-color")}));Ot(`.OP-annulus-rli-bounding-box {
  --OP-annulus-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  display: inline-block;
}
.OP-annulus-rli-bounding-box .OP-annulus-indicator {
  width: 5em;
  height: 5em;
  color: var(--OP-annulus-phase1-color);
  display: inline-block;
  position: relative;
  z-index: 0;
}
.OP-annulus-rli-bounding-box .OP-annulus-indicator .whirl {
  animation: uxlv7n7 calc(var(--rli-animation-duration, 1.5s) * 1.33) linear infinite;
  height: 100%;
  transform-origin: center center;
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}
.OP-annulus-rli-bounding-box .OP-annulus-indicator .path {
  stroke-dasharray: 1, 125;
  stroke-dashoffset: 0;
  animation: var(--rli-animation-duration, 1.5s) var(--rli-animation-function, ease-in-out) infinite uxlv7oa, calc(var(--rli-animation-duration, 1.5s) * 4) var(--rli-animation-function, ease-in-out) infinite uxlv7p5;
  stroke-linecap: round;
}
.OP-annulus-rli-bounding-box .OP-annulus-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --OP-annulus-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.5s;
}
@keyframes uxlv7n7 {
  100% {
    transform: rotate(360deg);
  }
}
@keyframes uxlv7oa {
  0% {
    stroke-dasharray: 1, 125;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 98, 125;
    stroke-dashoffset: -35px;
  }
  100% {
    stroke-dasharray: 98, 125;
    stroke-dashoffset: -124px;
  }
}
@keyframes uxlv7p5 {
  100%, 0% {
    stroke: var(--OP-annulus-phase1-color);
  }
  22% {
    stroke: var(--OP-annulus-phase1-color);
  }
  25% {
    stroke: var(--OP-annulus-phase2-color, var(--OP-annulus-phase1-color));
  }
  42% {
    stroke: var(--OP-annulus-phase2-color, var(--OP-annulus-phase1-color));
  }
  50% {
    stroke: var(--OP-annulus-phase3-color, var(--OP-annulus-phase1-color));
  }
  72% {
    stroke: var(--OP-annulus-phase3-color, var(--OP-annulus-phase1-color));
  }
  75% {
    stroke: var(--OP-annulus-phase4-color, var(--OP-annulus-phase1-color));
  }
  97% {
    stroke: var(--OP-annulus-phase4-color, var(--OP-annulus-phase1-color));
  }
}`);Array.from({length:4},(function(a,r){return"--OP-annulus-phase".concat(r+1,"-color")}));function Jc(a){return a&&a.Math===Math&&a}Ot(`.OP-dotted-rli-bounding-box {
  --OP-dotted-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  box-sizing: border-box;
  display: inline-block;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator {
  width: 5em;
  height: 5em;
  color: var(--OP-dotted-phase1-color);
  display: inline-block;
  position: relative;
  z-index: 0;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .OP-dotted-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder .dot {
  display: block;
  margin: 0 auto;
  width: 15%;
  height: 15%;
  background-color: currentColor;
  border-radius: 50%;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, ease-in-out) infinite uxlv7nu, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, ease-in-out) infinite uxlv7ol;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(1) {
  transform: rotate(0deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(1) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 12 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(2) {
  transform: rotate(30deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(2) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 11 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(3) {
  transform: rotate(60deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(3) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 10 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(4) {
  transform: rotate(90deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(4) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 9 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(5) {
  transform: rotate(120deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(5) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 8 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(6) {
  transform: rotate(150deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(6) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 7 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(7) {
  transform: rotate(180deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(7) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 6 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(8) {
  transform: rotate(210deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(8) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 5 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(9) {
  transform: rotate(240deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(9) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 4 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(10) {
  transform: rotate(270deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(10) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 3 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(11) {
  transform: rotate(300deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(11) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 2 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(12) {
  transform: rotate(330deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(12) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 1 * -1);
}

@property --OP-dotted-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-dotted-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-dotted-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-dotted-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7nu {
  0%, 39%, 100% {
    opacity: 0;
  }
  40% {
    opacity: 1;
  }
}
@keyframes uxlv7ol {
  100%, 0% {
    background-color: var(--OP-dotted-phase1-color);
  }
  22% {
    background-color: var(--OP-dotted-phase1-color);
  }
  25% {
    background-color: var(--OP-dotted-phase2-color, var(--OP-dotted-phase1-color));
  }
  47% {
    background-color: var(--OP-dotted-phase2-color, var(--OP-dotted-phase1-color));
  }
  50% {
    background-color: var(--OP-dotted-phase3-color, var(--OP-dotted-phase1-color));
  }
  72% {
    background-color: var(--OP-dotted-phase3-color, var(--OP-dotted-phase1-color));
  }
  75% {
    background-color: var(--OP-dotted-phase4-color, var(--OP-dotted-phase1-color));
  }
  97% {
    background-color: var(--OP-dotted-phase4-color, var(--OP-dotted-phase1-color));
  }
}`);Jc(typeof window=="object"&&window)||Jc(typeof self=="object"&&self)||Jc(typeof global=="object"&&global)||(function(){return this})()||Function("return this")();Array.from({length:4},(function(a,r){return"--OP-dotted-phase".concat(r+1,"-color")}));Ot(`.OP-spokes-rli-bounding-box {
  --OP-spokes-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  position: relative;
  color: var(--OP-spokes-phase1-color);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator {
  width: 4.8em;
  height: 4.8em;
  display: block;
  position: relative;
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke {
  position: absolute;
  height: 1.2em;
  width: 0.4em;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto auto auto 50%;
  background-color: var(--OP-spokes-phase1-color);
  border-radius: 0.24em;
  opacity: 0;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, ease-in-out) backwards infinite uxlv7pw, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, ease-in-out) infinite uxlv7qn;
  transform-origin: left center;
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(1) {
  transform: rotate(calc(0 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(11 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(2) {
  transform: rotate(calc(1 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(10 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(3) {
  transform: rotate(calc(2 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(9 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(4) {
  transform: rotate(calc(3 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(8 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(5) {
  transform: rotate(calc(4 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(7 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(6) {
  transform: rotate(calc(5 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(6 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(7) {
  transform: rotate(calc(6 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(5 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(8) {
  transform: rotate(calc(7 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(4 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(9) {
  transform: rotate(calc(8 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(3 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(10) {
  transform: rotate(calc(9 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(2 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(11) {
  transform: rotate(calc(10 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(1 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(12) {
  transform: rotate(calc(11 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(0 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: var(--OP-spokes-phase1-color);
  z-index: -2;
}

@property --OP-spokes-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-spokes-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-spokes-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-spokes-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7pw {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
@keyframes uxlv7qn {
  100%, 0% {
    background-color: var(--OP-spokes-phase1-color);
  }
  22% {
    background-color: var(--OP-spokes-phase1-color);
  }
  25% {
    background-color: var(--OP-spokes-phase2-color, var(--OP-spokes-phase1-color));
  }
  42% {
    background-color: var(--OP-spokes-phase2-color, var(--OP-spokes-phase1-color));
  }
  50% {
    background-color: var(--OP-spokes-phase3-color, var(--OP-spokes-phase1-color));
  }
  72% {
    background-color: var(--OP-spokes-phase3-color, var(--OP-spokes-phase1-color));
  }
  75% {
    background-color: var(--OP-spokes-phase4-color, var(--OP-spokes-phase1-color));
  }
  97% {
    background-color: var(--OP-spokes-phase4-color, var(--OP-spokes-phase1-color));
  }
}`);Array.from({length:4},(function(a,r){return"--OP-spokes-phase".concat(r+1,"-color")}));Ot(`.OP-annulus-dual-sectors-rli-bounding-box {
  --OP-annulus-dual-sectors-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  box-sizing: border-box;
  display: inline-block;
}
.OP-annulus-dual-sectors-rli-bounding-box .OP-annulus-dual-sectors-indicator {
  width: 5em;
  height: 5em;
  display: inline-block;
  position: relative;
  z-index: 0;
  color: var(--OP-annulus-dual-sectors-phase1-color);
}
.OP-annulus-dual-sectors-rli-bounding-box .OP-annulus-dual-sectors-indicator .annulus-sectors {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border-width: 0.34em;
  border-style: solid;
  border-color: var(--OP-annulus-dual-sectors-phase1-color) transparent var(--OP-annulus-dual-sectors-phase1-color) transparent;
  background-color: transparent;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, linear) infinite uxlv7ra, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, linear) infinite uxlv7sv;
}
.OP-annulus-dual-sectors-rli-bounding-box .OP-annulus-dual-sectors-indicator .OP-annulus-dual-sectors-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --OP-annulus-dual-sectors-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-dual-sectors-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-dual-sectors-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-dual-sectors-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7ra {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes uxlv7sv {
  100%, 0% {
    border-color: var(--OP-annulus-dual-sectors-phase1-color) transparent;
  }
  20% {
    border-color: var(--OP-annulus-dual-sectors-phase1-color) transparent;
  }
  25% {
    border-color: var(--OP-annulus-dual-sectors-phase2-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  45% {
    border-color: var(--OP-annulus-dual-sectors-phase2-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  50% {
    border-color: var(--OP-annulus-dual-sectors-phase3-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  70% {
    border-color: var(--OP-annulus-dual-sectors-phase3-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  75% {
    border-color: var(--OP-annulus-dual-sectors-phase4-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  95% {
    border-color: var(--OP-annulus-dual-sectors-phase4-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
}`);Array.from({length:4},(function(a,r){return"--OP-annulus-dual-sectors-phase".concat(r+1,"-color")}));Ot(`.OP-annulus-sector-track-rli-bounding-box {
  --OP-annulus-track-phase1-color: rgba(50, 205, 50, 0.22);
  --OP-annulus-sector-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  display: inline-block;
}
.OP-annulus-sector-track-rli-bounding-box .OP-annulus-sector-track-indicator {
  width: 5em;
  height: 5em;
  color: var(--OP-annulus-sector-phase1-color);
  display: inline-block;
  position: relative;
  z-index: 0;
}
.OP-annulus-sector-track-rli-bounding-box .OP-annulus-sector-track-indicator .annulus-track-ring {
  width: 100%;
  height: 100%;
  border-width: 0.34em;
  border-style: solid;
  border-radius: 50%;
  box-sizing: border-box;
  border-color: var(--OP-annulus-track-phase1-color);
  border-top-color: var(--OP-annulus-sector-phase1-color);
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, linear) infinite uxlv7rl, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7tf;
}
.OP-annulus-sector-track-rli-bounding-box .OP-annulus-sector-track-indicator .OP-annulus-sector-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --OP-annulus-track-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-track-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-track-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-track-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-sector-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-sector-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-sector-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-sector-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes uxlv7rl {
  to {
    transform: rotate(1turn);
  }
}
@keyframes uxlv7tf {
  100%, 0% {
    border-color: var(--OP-annulus-track-phase1-color);
    border-top-color: var(--OP-annulus-sector-phase1-color);
  }
  18% {
    border-color: var(--OP-annulus-track-phase1-color);
    border-top-color: var(--OP-annulus-sector-phase1-color);
  }
  25% {
    border-color: var(--OP-annulus-track-phase2-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase2-color, var(--OP-annulus-sector-phase1-color));
  }
  43% {
    border-color: var(--OP-annulus-track-phase2-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase2-color, var(--OP-annulus-sector-phase1-color));
  }
  50% {
    border-color: var(--OP-annulus-track-phase3-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase3-color, var(--OP-annulus-sector-phase1-color));
  }
  68% {
    border-color: var(--OP-annulus-track-phase3-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase3-color, var(--OP-annulus-sector-phase1-color));
  }
  75% {
    border-color: var(--OP-annulus-track-phase4-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase4-color, var(--OP-annulus-sector-phase1-color));
  }
  93% {
    border-color: var(--OP-annulus-track-phase4-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase4-color, var(--OP-annulus-sector-phase1-color));
  }
}`);Array.from({length:4},(function(a,r){return["--OP-annulus-track-phase".concat(r+1,"-color"),"--OP-annulus-sector-phase".concat(r+1,"-color")]}));Ot(`.foursquare-rli-bounding-box {
  --four-square-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  box-sizing: border-box;
  color: var(--four-square-phase1-color);
  display: inline-block;
  overflow: hidden;
}
.foursquare-rli-bounding-box .foursquare-indicator {
  height: 5.3033008589em;
  width: 5.3033008589em;
  position: relative;
  display: block;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container {
  position: absolute;
  z-index: 0;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  height: 2.5em;
  width: 2.5em;
  color: inherit;
  will-change: color, width, height;
  transform: rotate(45deg);
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, cubic-bezier(0.05, 0.28, 0.79, 0.98)) infinite uxlv7dk, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, cubic-bezier(0.05, 0.28, 0.79, 0.98)) infinite uxlv7es;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square {
  position: absolute;
  width: 1.25em;
  height: 1.25em;
  border-radius: 0.1875em;
  background-color: currentColor;
  animation: uxlv7dd var(--rli-animation-duration, 1s) var(--rli-animation-function, cubic-bezier(0.05, 0.28, 0.79, 0.98)) both infinite;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square1 {
  top: 0;
  left: 0;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square2 {
  top: 0;
  right: 0;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square3 {
  bottom: 0;
  left: 0;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square4 {
  bottom: 0;
  right: 0;
}

@property --four-square-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --four-square-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --four-square-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --four-square-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes uxlv7dk {
  0% {
    width: 2.5em;
    height: 2.5em;
  }
  10% {
    width: 2.5em;
    height: 2.5em;
  }
  50% {
    width: 3.75em;
    height: 3.75em;
  }
  90% {
    width: 2.5em;
    height: 2.5em;
  }
  100% {
    width: 2.5em;
    height: 2.5em;
  }
}
@keyframes uxlv7dd {
  0% {
    transform: rotateZ(0deg);
  }
  10% {
    transform: rotateZ(0deg);
  }
  50% {
    transform: rotateZ(90deg);
  }
  90% {
    transform: rotateZ(90deg);
  }
  100% {
    transform: rotateZ(90deg);
  }
}
@keyframes uxlv7es {
  100%, 0% {
    color: var(--four-square-phase1-color);
  }
  20% {
    color: var(--four-square-phase1-color);
  }
  25% {
    color: var(--four-square-phase2-color, var(--four-square-phase1-color));
  }
  45% {
    color: var(--four-square-phase2-color, var(--four-square-phase1-color));
  }
  50% {
    color: var(--four-square-phase3-color, var(--four-square-phase1-color));
  }
  70% {
    color: var(--four-square-phase3-color, var(--four-square-phase1-color));
  }
  75% {
    color: var(--four-square-phase4-color, var(--four-square-phase1-color));
  }
  95% {
    color: var(--four-square-phase4-color, var(--four-square-phase1-color));
  }
}`);Array.from({length:4},(function(a,r){return"--four-square-phase".concat(r+1,"-color")}));Ot(`.mosaic-rli-bounding-box {
  --mosaic-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  color: var(--mosaic-phase1-color);
}
.mosaic-rli-bounding-box .mosaic-indicator {
  width: 5em;
  height: 5em;
  color: currentColor;
  display: grid;
  gap: 0.125em;
  grid-template-columns: repeat(3, 1fr);
  grid-template-areas: "a b c" "d e f" "g h i";
  position: relative;
  z-index: 0;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 105%;
  left: 50%;
  transform: translateX(-50%);
  z-index: -2;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube {
  background-color: var(--mosaic-phase1-color);
  animation-name: uxlv7i4, uxlv7is;
  animation-duration: var(--rli-animation-duration, 1.5s), calc(var(--rli-animation-duration, 1.5s) * 4);
  animation-timing-function: var(--rli-animation-function, ease-in-out);
  animation-iteration-count: infinite;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube1 {
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 2);
  grid-area: a;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube2 {
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 3);
  grid-area: b;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube3 {
  grid-area: c;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 4);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube4 {
  grid-area: d;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 1);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube5 {
  grid-area: e;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 2);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube6 {
  grid-area: f;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 3);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube7 {
  grid-area: g;
  animation-delay: 0s;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube8 {
  grid-area: h;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 1);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube9 {
  grid-area: i;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 2);
}

@property --mosaic-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --mosaic-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --mosaic-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --mosaic-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.5s;
}
@keyframes uxlv7i4 {
  0%, 60%, 100% {
    transform: scale3D(1, 1, 1);
  }
  30% {
    transform: scale3D(0, 0, 1);
  }
}
@keyframes uxlv7is {
  100%, 0% {
    background-color: var(--mosaic-phase1-color);
  }
  25% {
    background-color: var(--mosaic-phase2-color, var(--mosaic-phase1-color));
  }
  50% {
    background-color: var(--mosaic-phase3-color, var(--mosaic-phase1-color));
  }
  75% {
    background-color: var(--mosaic-phase4-color, var(--mosaic-phase1-color));
  }
}`);Array.from({length:4},(function(a,r){return"--mosaic-phase".concat(r+1,"-color")}));Ot(`.riple-rli-bounding-box {
  --riple-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  display: inline-block;
  color: var(--riple-phase1-color);
}
.riple-rli-bounding-box .riple-indicator {
  display: inline-block;
  width: 5em;
  height: 5em;
  position: relative;
  z-index: 0;
}
.riple-rli-bounding-box .riple-indicator .riple-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}
.riple-rli-bounding-box .riple-indicator .riple {
  --border-width: 0.25em;
  position: absolute;
  border: var(--border-width) solid var(--riple-phase1-color);
  opacity: 1;
  border-radius: 50%;
  will-change: top, right, left, bottom, border-color;
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, cubic-bezier(0, 0.2, 0.8, 1)) infinite uxlv7i1, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, cubic-bezier(0, 0.2, 0.8, 1)) infinite uxlv7io;
}
.riple-rli-bounding-box .riple-indicator .riple:nth-of-type(2) {
  animation-delay: calc(var(--rli-animation-duration, 1s) / 2 * -1);
}

@property --riple-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --riple-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --riple-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --riple-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes uxlv7i1 {
  0% {
    top: calc(50% - var(--border-width));
    left: calc(50% - var(--border-width));
    right: calc(50% - var(--border-width));
    bottom: calc(50% - var(--border-width));
    opacity: 0;
  }
  4.9% {
    top: calc(50% - var(--border-width));
    left: calc(50% - var(--border-width));
    right: calc(50% - var(--border-width));
    bottom: calc(50% - var(--border-width));
    opacity: 0;
  }
  5% {
    top: calc(50% - var(--border-width));
    left: calc(50% - var(--border-width));
    right: calc(50% - var(--border-width));
    bottom: calc(50% - var(--border-width));
    opacity: 1;
  }
  100% {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0;
  }
}
@keyframes uxlv7io {
  100%, 0% {
    border-color: var(--riple-phase1-color);
  }
  24.9% {
    border-color: var(--riple-phase1-color);
  }
  25% {
    border-color: var(--riple-phase2-color, var(--riple-phase1-color));
  }
  49.9% {
    border-color: var(--riple-phase2-color, var(--riple-phase1-color));
  }
  50% {
    border-color: var(--riple-phase3-color, var(--riple-phase1-color));
  }
  74.9% {
    border-color: var(--riple-phase3-color, var(--riple-phase1-color));
  }
  75% {
    border-color: var(--riple-phase4-color, var(--riple-phase1-color));
  }
  99.9% {
    border-color: var(--riple-phase4-color, var(--riple-phase1-color));
  }
}`);Array.from({length:4},(function(a,r){return"--riple-phase".concat(r+1,"-color")}));Ot(`.pulsate-rli-bounding-box {
  --TD-pulsate-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  display: inline-block;
  box-sizing: border-box;
  color: var(--TD-pulsate-phase1-color);
}
.pulsate-rli-bounding-box .pulsate-indicator {
  width: 4.4em;
  height: 1.1em;
  text-align: center;
  position: relative;
  z-index: 0;
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  align-items: center;
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot {
  width: 1.1em;
  height: 1.1em;
  border-radius: 50%;
  background-color: var(--TD-pulsate-phase1-color);
  transform: scale(0);
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, ease-in-out) var(--delay) infinite uxlv7s0, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, ease-in-out) var(--delay) infinite uxlv7to;
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot:nth-of-type(1) {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.15 * -1);
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot:nth-of-type(2) {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0);
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot:nth-of-type(3) {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.15);
}
.pulsate-rli-bounding-box .pulsate-text {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 80%;
  text-transform: uppercase;
  text-align: center;
  font-size: 0.6em;
  letter-spacing: 0.5px;
  font-family: sans-serif;
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --TD-pulsate-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-pulsate-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-pulsate-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-pulsate-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7s0 {
  0%, 90%, 100% {
    transform: scale(0);
  }
  40% {
    transform: scale(1);
  }
}
@keyframes uxlv7to {
  0%, 100% {
    background-color: var(--TD-pulsate-phase1-color);
  }
  24.9% {
    background-color: var(--TD-pulsate-phase1-color);
  }
  25% {
    background-color: var(--TD-pulsate-phase2-color, var(--TD-pulsate-phase1-color));
  }
  49.9% {
    background-color: var(--TD-pulsate-phase2-color, var(--TD-pulsate-phase1-color));
  }
  50% {
    background-color: var(--TD-pulsate-phase3-color, var(--TD-pulsate-phase1-color));
  }
  74.9% {
    background-color: var(--TD-pulsate-phase3-color, var(--TD-pulsate-phase1-color));
  }
  75% {
    background-color: var(--TD-pulsate-phase4-color, var(--TD-pulsate-phase1-color));
  }
  99.9% {
    background-color: var(--TD-pulsate-phase4-color, var(--TD-pulsate-phase1-color));
  }
}`);Array.from({length:4},(function(a,r){return"--TD-pulsate-phase".concat(r+1,"-color")}));Ot(`.brick-stack-rli-bounding-box {
  --TD-brick-stack-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  display: inline-block;
  color: var(--TD-brick-stack-phase1-color);
}
.brick-stack-rli-bounding-box .brick-stack-indicator {
  width: 2.8em;
  height: 2.8em;
  position: relative;
  display: block;
  margin: 0 auto;
}
.brick-stack-rli-bounding-box .brick-stack {
  width: 100%;
  height: 100%;
  background: radial-gradient(circle closest-side, currentColor 0% 95%, rgba(0, 0, 0, 0) calc(95% + 1px)) 0 0/40% 40% no-repeat, radial-gradient(circle closest-side, currentColor 0% 95%, rgba(0, 0, 0, 0) calc(95% + 1px)) 0 100%/40% 40% no-repeat, radial-gradient(circle closest-side, currentColor 0% 95%, rgba(0, 0, 0, 0) calc(95% + 1px)) 100% 100%/40% 40% no-repeat;
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, ease-out) infinite uxlv7tu, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, ease-out) infinite uxlv7us;
}

@property --TD-brick-stack-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-brick-stack-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-brick-stack-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-brick-stack-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes uxlv7tu {
  0% {
    background-position: 0 0, 0 100%, 100% 100%;
  }
  25% {
    background-position: 100% 0, 0 100%, 100% 100%;
  }
  50% {
    background-position: 100% 0, 0 0, 100% 100%;
  }
  75% {
    background-position: 100% 0, 0 0, 0 100%;
  }
  100% {
    background-position: 100% 100%, 0 0, 0 100%;
  }
}
@keyframes uxlv7us {
  100%, 0% {
    color: var(--TD-brick-stack-phase1-color);
  }
  20% {
    color: var(--TD-brick-stack-phase1-color);
  }
  25% {
    color: var(--TD-brick-stack-phase2-color, var(--TD-brick-stack-phase1-color));
  }
  45% {
    color: var(--TD-brick-stack-phase2-color, var(--TD-brick-stack-phase1-color));
  }
  50% {
    color: var(--TD-brick-stack-phase3-color, var(--TD-brick-stack-phase1-color));
  }
  70% {
    color: var(--TD-brick-stack-phase3-color, var(--TD-brick-stack-phase1-color));
  }
  75% {
    color: var(--TD-brick-stack-phase4-color, var(--TD-brick-stack-phase1-color));
  }
  95% {
    color: var(--TD-brick-stack-phase4-color, var(--TD-brick-stack-phase1-color));
  }
}`);Array.from({length:4},(function(a,r){return"--TD-brick-stack-phase".concat(r+1,"-color")}));Ot(`.bob-rli-bounding-box {
  --TD-bob-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  display: inline-block;
  color: var(--TD-bob-phase1-color);
}
.bob-rli-bounding-box .bob-indicator {
  width: 4.4em;
  height: 2.2em;
  position: relative;
  display: block;
  margin: 0 auto;
}
.bob-rli-bounding-box .bob-indicator .bobbing,
.bob-rli-bounding-box .bob-indicator .bobbing::before,
.bob-rli-bounding-box .bob-indicator .bobbing::after {
  width: 1.1em;
  height: 100%;
  display: grid;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, linear) var(--delay) infinite uxlv7u0, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, linear) var(--delay) infinite uxlv7vq;
}
.bob-rli-bounding-box .bob-indicator .bobbing::before,
.bob-rli-bounding-box .bob-indicator .bobbing::after {
  content: "";
  grid-area: 1/1;
}
.bob-rli-bounding-box .bob-indicator .bobbing {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.12 * -1);
  background: radial-gradient(circle closest-side at center, currentColor 0% 92%, rgba(0, 0, 0, 0) calc(92% + 1px)) 50% 50%/100% 50% no-repeat;
}
.bob-rli-bounding-box .bob-indicator .bobbing::before {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0);
  transform: translateX(150%);
  background: radial-gradient(circle closest-side at center, currentColor 0% 92%, rgba(0, 0, 0, 0) calc(92% + 1px)) 50% 50%/100% 50% no-repeat;
}
.bob-rli-bounding-box .bob-indicator .bobbing::after {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.12);
  transform: translateX(300%);
  background: radial-gradient(circle closest-side at center, currentColor 0% 92%, rgba(0, 0, 0, 0) calc(92% + 1px)) 50% 50%/100% 50% no-repeat;
}

@property --TD-bob-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bob-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bob-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bob-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7u0 {
  100%, 0% {
    background-position: 50% 50%;
  }
  15% {
    background-position: 50% 10%;
  }
  30% {
    background-position: 50% 100%;
  }
  40% {
    background-position: 50% 0%;
  }
  50% {
    background-position: 50% 90%;
  }
  70% {
    background-position: 50% 10%;
  }
  98% {
    background-position: 50% 50%;
  }
}
@keyframes uxlv7vq {
  100%, 0% {
    color: var(--TD-bob-phase1-color);
  }
  22% {
    color: var(--TD-bob-phase1-color);
  }
  25% {
    color: var(--TD-bob-phase2-color, var(--TD-bob-phase1-color));
  }
  47% {
    color: var(--TD-bob-phase2-color, var(--TD-bob-phase1-color));
  }
  50% {
    color: var(--TD-bob-phase3-color, var(--TD-bob-phase1-color));
  }
  72% {
    color: var(--TD-bob-phase3-color, var(--TD-bob-phase1-color));
  }
  75% {
    color: var(--TD-bob-phase4-color, var(--TD-bob-phase1-color));
  }
  97% {
    color: var(--TD-bob-phase4-color, var(--TD-bob-phase1-color));
  }
}`);Array.from({length:4},(function(a,r){return"--TD-bob-phase".concat(r+1,"-color")}));Ot(`.bounce-rli-bounding-box {
  --TD-bounce-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  color: var(--TD-bounce-phase1-color);
  display: inline-block;
  padding-bottom: 0.25125em;
}
.bounce-rli-bounding-box .wrapper {
  --dot1-delay: 0s;
  --dot1-x-offset: 0.55em;
  --dot2-delay: calc((var(--rli-animation-duration, 0.5s) + var(--rli-animation-duration, 0.5s) * 0.75) * -1);
  --dot2-x-offset: 2.2em;
  --dot3-delay: calc((var(--rli-animation-duration, 0.5s) + var(--rli-animation-duration, 0.5s) * 0.5) * -1);
  --dot3-x-offset: 3.85em;
  width: 5.5em;
  height: 3.125em;
  position: relative;
  display: block;
  margin: 0 auto;
}
.bounce-rli-bounding-box .wrapper .group {
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
.bounce-rli-bounding-box .wrapper .group .dot {
  width: 1.1em;
  height: 1.1em;
  position: absolute;
  border-radius: 50%;
  background-color: var(--TD-bounce-phase1-color);
  transform-origin: 50%;
  animation: var(--rli-animation-duration, 0.5s) var(--rli-animation-function, cubic-bezier(0.74, 0.1, 0.74, 1)) alternate infinite uxlv7wc, calc(var(--rli-animation-duration, 0.5s) * 4) var(--rli-animation-function, cubic-bezier(0.74, 0.1, 0.74, 1)) infinite uxlv7x6;
}
.bounce-rli-bounding-box .wrapper .group .dot:nth-of-type(1) {
  left: var(--dot1-x-offset);
  animation-delay: var(--dot1-delay), 0s;
}
.bounce-rli-bounding-box .wrapper .group .dot:nth-of-type(2) {
  left: var(--dot2-x-offset);
  animation-delay: var(--dot2-delay), 0s;
}
.bounce-rli-bounding-box .wrapper .group .dot:nth-of-type(3) {
  left: var(--dot3-x-offset);
  animation-delay: var(--dot3-delay), 0s;
}
.bounce-rli-bounding-box .wrapper .group .shadow {
  width: 1.1em;
  height: 0.22em;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 101%;
  transform-origin: 50%;
  z-index: -1;
  filter: blur(1px);
  animation: var(--rli-animation-duration, 0.5s) var(--rli-animation-function, cubic-bezier(0.74, 0.1, 0.74, 1)) alternate infinite uxlv7ww;
}
.bounce-rli-bounding-box .wrapper .group .shadow:nth-of-type(1) {
  left: var(--dot1-x-offset);
  animation-delay: var(--dot1-delay);
}
.bounce-rli-bounding-box .wrapper .group .shadow:nth-of-type(2) {
  left: var(--dot2-x-offset);
  animation-delay: var(--dot2-delay);
}
.bounce-rli-bounding-box .wrapper .group .shadow:nth-of-type(3) {
  left: var(--dot3-x-offset);
  animation-delay: var(--dot3-delay);
}

@property --TD-bounce-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bounce-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bounce-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bounce-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 0.5s;
}
@keyframes uxlv7wc {
  0% {
    top: 0%;
  }
  60% {
    height: 1.25em;
    border-radius: 50%;
    transform: scaleX(1);
  }
  100% {
    top: 100%;
    height: 0.22em;
    transform: scaleX(1.5);
    filter: blur(0.4px);
  }
}
@keyframes uxlv7ww {
  0% {
    transform: scaleX(0.2);
    opacity: 0.2;
  }
  60% {
    opacity: 0.4;
  }
  100% {
    transform: scaleX(1.5);
    opacity: 0.6;
  }
}
@keyframes uxlv7x6 {
  0%, 100% {
    background-color: var(--TD-bounce-phase1-color);
  }
  20% {
    background-color: var(--TD-bounce-phase1-color);
  }
  25% {
    background-color: var(--TD-bounce-phase2-color, var(--TD-bounce-phase1-color));
  }
  45% {
    background-color: var(--TD-bounce-phase2-color, var(--TD-bounce-phase1-color));
  }
  50% {
    background-color: var(--TD-bounce-phase3-color, var(--TD-bounce-phase1-color));
  }
  70% {
    background-color: var(--TD-bounce-phase3-color, var(--TD-bounce-phase1-color));
  }
  75% {
    background-color: var(--TD-bounce-phase4-color, var(--TD-bounce-phase1-color));
  }
  95% {
    background-color: var(--TD-bounce-phase4-color, var(--TD-bounce-phase1-color));
  }
}`);Array.from({length:4},(function(a,r){return"--TD-bounce-phase".concat(r+1,"-color")}));Ot(`.blink-blur-rli-bounding-box {
  --shape-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  color: var(--shape-phase1-color);
}
.blink-blur-rli-bounding-box .blink-blur-indicator {
  isolation: isolate;
  display: flex;
  flex-direction: row;
  -moz-column-gap: 0.4em;
       column-gap: 0.4em;
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape {
  --x-deg: -20deg;
  width: 1.8em;
  height: 2.25em;
  border-radius: 0.25em;
  color: inherit;
  transform: skewX(var(--x-deg));
  background-color: var(--shape-phase1-color);
  animation-name: uxlv7id, uxlv7jl;
  animation-duration: var(--rli-animation-duration, 1.2s), calc(var(--rli-animation-duration, 1.2s) * 4);
  animation-timing-function: var(--rli-animation-function, ease-in);
  animation-iteration-count: infinite;
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape1 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.5 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape2 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.4 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape3 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.3 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape4 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.2 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape5 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.1 * -1);
}

@property --shape-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --shape-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --shape-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --shape-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7id {
  100%, 0% {
    opacity: 0.3;
    filter: blur(0.0675em) drop-shadow(0 0 0.0625em);
    transform: skewX(var(--x-deg)) scale(1.2, 1.45);
  }
  39% {
    opacity: 0.8;
  }
  40%, 41%, 42% {
    opacity: 0;
  }
  43% {
    opacity: 0.8;
  }
  50% {
    opacity: 1;
    filter: blur(0em) drop-shadow(0 0 0em);
    transform: skewX(var(--x-deg)) scale(1, 1);
  }
}
@keyframes uxlv7jl {
  100%, 0% {
    color: var(--shape-phase1-color);
    background-color: var(--shape-phase1-color);
  }
  25% {
    color: var(--shape-phase2-color, var(--shape-phase1-color));
    background-color: var(--shape-phase2-color, var(--shape-phase1-color));
  }
  50% {
    color: var(--shape-phase3-color, var(--shape-phase1-color));
    background-color: var(--shape-phase3-color, var(--shape-phase1-color));
  }
  75% {
    color: var(--shape-phase4-color, var(--shape-phase1-color));
    background-color: var(--shape-phase4-color, var(--shape-phase1-color));
  }
}`);Array.from({length:4},(function(a,r){return"--shape-phase".concat(r+1,"-color")}));Ot(`.trophy-spin-rli-bounding-box {
  --trophySpin-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  position: relative;
  isolation: isolate;
  color: var(--trophySpin-phase1-color);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator {
  width: 4em;
  perspective: 1000px;
  transform-style: preserve-3d;
  display: block;
  margin: 0 auto;
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade {
  display: block;
  width: 4em;
  height: 0.5em;
  background: var(--trophySpin-phase1-color);
  animation: uxlv7ki var(--rli-animation-duration, 2.5s) var(--rli-animation-function, linear) infinite, uxlv7l2 calc(var(--rli-animation-duration, 2.5s) * 0.5) var(--rli-animation-function, linear) infinite, uxlv7ly calc(var(--rli-animation-duration, 2.5s) * 4) var(--rli-animation-function, linear) infinite;
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(8) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 0 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(7) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 1 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(6) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 2 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(5) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 3 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(4) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 4 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(3) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 5 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(2) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 6 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(1) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 7 * -1);
}

@property --trophySpin-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --trophySpin-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --trophySpin-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --trophySpin-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 2.5s;
}
@keyframes uxlv7ki {
  to {
    transform: rotateY(1turn) rotateX(-25deg);
  }
}
@keyframes uxlv7l2 {
  100%, 0% {
    filter: brightness(1);
    opacity: 1;
  }
  15% {
    filter: brightness(1);
  }
  25% {
    opacity: 0.96;
  }
  30% {
    filter: brightness(0.92);
  }
  50% {
    filter: brightness(0.7);
    opacity: 1;
  }
  75% {
    filter: brightness(0.92);
    opacity: 0.96;
  }
  90% {
    filter: brightness(1);
  }
}
@keyframes uxlv7ly {
  100%, 0% {
    background-color: var(--trophySpin-phase1-color);
  }
  18% {
    background-color: var(--trophySpin-phase1-color);
  }
  25% {
    background-color: var(--trophySpin-phase2-color, var(--trophySpin-phase1-color));
  }
  43% {
    background-color: var(--trophySpin-phase2-color, var(--trophySpin-phase1-color));
  }
  50% {
    background-color: var(--trophySpin-phase3-color, var(--trophySpin-phase1-color));
  }
  68% {
    background-color: var(--trophySpin-phase3-color, var(--trophySpin-phase1-color));
  }
  75% {
    background-color: var(--trophySpin-phase4-color, var(--trophySpin-phase1-color));
  }
  93% {
    background-color: var(--trophySpin-phase4-color, var(--trophySpin-phase1-color));
  }
}`);Array.from({length:4},(function(a,r){return"--trophySpin-phase".concat(r+1,"-color")}));Ot(`.slab-rli-bounding-box {
  --slab-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  color: var(--slab-phase1-color);
  position: relative;
}
.slab-rli-bounding-box .slab-indicator {
  position: relative;
  display: block;
  width: 7em;
  height: 4em;
  margin: 0 auto;
  overflow: hidden;
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper {
  width: 4em;
  height: 4em;
  transform: perspective(15em) rotateX(66deg) rotateZ(-25deg);
  transform-style: preserve-3d;
  transform-origin: 50% 100%;
  display: block;
  position: absolute;
  bottom: 0;
  right: 0;
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--slab-phase1-color);
  opacity: 0;
  box-shadow: -0.08em 0.15em 0 rgba(0, 0, 0, 0.45);
  transform-origin: 0% 0%;
  animation: calc(var(--rli-animation-duration-unitless, 3) * 1s) var(--rli-animation-function, linear) infinite uxlv7md, calc(var(--rli-animation-duration-unitless, 3) * 4s) var(--rli-animation-function, linear) infinite uxlv7n0;
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(1) {
  animation-delay: calc(4 / (16 / var(--rli-animation-duration-unitless, 3)) * 3 * -1 * 1s);
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(2) {
  animation-delay: calc(4 / (16 / var(--rli-animation-duration-unitless, 3)) * 2 * -1 * 1s);
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(3) {
  animation-delay: calc(4 / (16 / var(--rli-animation-duration-unitless, 3)) * -1 * 1s);
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(4) {
  animation-delay: 0s;
}

@property --slab-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --slab-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --slab-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --slab-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration-unitless {
  syntax: "<number>";
  inherits: true;
  initial-value: 3;
}
@keyframes uxlv7md {
  0% {
    transform: translateY(0) rotateX(30deg);
    opacity: 0;
  }
  10% {
    transform: translateY(-40%) rotateX(0deg);
    opacity: 1;
  }
  25% {
    opacity: 1;
  }
  100% {
    transform: translateY(-400%) rotateX(0deg);
    opacity: 0;
  }
}
@keyframes uxlv7n0 {
  100%, 0% {
    background-color: var(--slab-phase1-color);
  }
  24.9% {
    background-color: var(--slab-phase1-color);
  }
  25% {
    background-color: var(--slab-phase2-color, var(--slab-phase1-color));
  }
  49.9% {
    background-color: var(--slab-phase2-color, var(--slab-phase1-color));
  }
  50% {
    background-color: var(--slab-phase3-color, var(--slab-phase1-color));
  }
  74.9% {
    background-color: var(--slab-phase3-color, var(--slab-phase1-color));
  }
  75% {
    background-color: var(--slab-phase4-color, var(--slab-phase1-color));
  }
  99.9% {
    background-color: var(--slab-phase4-color, var(--slab-phase1-color));
  }
}`);Array.from({length:4},(function(a,r){return"--slab-phase".concat(r+1,"-color")}));Ot(`.lifeline-rli-bounding-box {
  --life-line-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  isolation: isolate;
  color: var(--life-line-phase1-color);
}
.lifeline-rli-bounding-box .lifeline-indicator {
  position: relative;
  text-align: center;
}
.lifeline-rli-bounding-box .lifeline-indicator path.rli-lifeline {
  stroke-dasharray: 474.7616760254 30.3039367676;
  animation: var(--rli-animation-duration, 2s) var(--rli-animation-function, linear) infinite uxlv7k3, calc(var(--rli-animation-duration, 2s) * 4) var(--rli-animation-function, linear) infinite uxlv7kg;
}
.lifeline-rli-bounding-box .lifeline-text {
  color: currentColor;
  mix-blend-mode: difference;
  width: unset;
  display: block;
}

@property --life-line-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --life-line-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --life-line-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --life-line-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 2s;
}
@keyframes uxlv7k3 {
  to {
    stroke-dashoffset: -1010.1312255859;
  }
}
@keyframes uxlv7kg {
  100%, 0% {
    color: var(--life-line-phase1-color);
  }
  20% {
    color: var(--life-line-phase1-color);
  }
  25% {
    color: var(--life-line-phase2-color, var(--life-line-phase1-color));
  }
  45% {
    color: var(--life-line-phase2-color, var(--life-line-phase1-color));
  }
  50% {
    color: var(--life-line-phase3-color, var(--life-line-phase1-color));
  }
  70% {
    color: var(--life-line-phase3-color, var(--life-line-phase1-color));
  }
  75% {
    color: var(--life-line-phase4-color, var(--life-line-phase1-color));
  }
  95% {
    color: var(--life-line-phase4-color, var(--life-line-phase1-color));
  }
}`);Array.from({length:4},(function(a,r){return"--life-line-phase".concat(r+1,"-color")}));const C1=()=>{const{loader:a}=dr();return a?h.jsx("div",{className:"fixed inset-0 z-50 bg-[#0C1014] flex items-center justify-center",children:h.jsx(_1,{color:"#1418b9",size:"medium"})}):null},z1=({item:a,user:r})=>{const{deleteToggle:i,showDelete:s}=Kt(),{deletepostHandle:c}=Dn(),f=Xn(),d=St();if(r?.id!==a?.user?._id)return null;const g=s===a._id;return h.jsxs("div",{className:"flex items-center justify-end h-8 overflow-hidden",children:[h.jsx("div",{className:`transition-all duration-300 ease-out flex items-center justify-center ${g?"w-0 opacity-0 -translate-x-2 pointer-events-none":"w-6 opacity-100 translate-x-0 cursor-pointer"}`,onClick:b=>{b.stopPropagation(),i(a._id)},children:h.jsx("span",{className:"text-xl font-bold pb-3 hover:text-gray-500 text-white transition-colors",children:"..."})}),h.jsx("div",{className:`transition-all duration-300 ease-out flex items-center justify-center bg-transparent rounded-md cursor-pointer ${g?"w-16 opacity-100 translate-x-0 px-2 py-1.5":"w-0 opacity-0 translate-x-2 pointer-events-none px-0 py-1.5"}`,onClick:async b=>{b.stopPropagation(),g&&(await c(a._id),f.pathname!=="/"&&d("/",{replace:!0}))},children:h.jsx("div",{className:"text-red-600 font-semibold text-sm active:scale-95 transition-transform duration-200 ease-in-out whitespace-nowrap",children:"Delete"})})]})},I5=()=>{const[a,r]=N.useState(null),[i,s]=N.useState(null),[c,f]=N.useState(null),d=St(),g=J=>{r(ue=>ue===J?null:J)},{setloader:b,loader:m}=dr(),{user:x,allpost:y,handlegetallpost:j}=Kt(),{liker:z,saver:w,followbtn:S,post:R}=Dn();console.log(x),console.log(y),N.useEffect(()=>{R.length===0&&j(!1)},[]);const G=J=>{i===J?(s(null),f(null)):(s(J),f(J))},X=N.useRef(null),K=()=>{X.current.scrollBy({left:200,behavior:"smooth"})},oe=()=>{X.current.scrollBy({left:-200,behavior:"smooth"})};return m?h.jsx("div",{children:h.jsx(C1,{})}):h.jsxs(h.Fragment,{children:[h.jsxs("nav",{className:"flex justify-between md:hidden items-center mt-1 p-2 text-white  w-full",children:[h.jsx(z5,{className:"text-4xl",onClick:()=>d("/create")}),h.jsx("img",{src:"/devgram2.png",className:"w-full h-15 object-cover devgram",alt:""}),h.jsx(us,{className:"text-2xl mr-1",onClick:()=>d("/buy_A_coffee")})]}),h.jsxs("section",{ref:X,className:`text-white p-3 mt-2  \r
      transform relative\r
      pt-0 md:pt-2 md:mt-2 w-full flex gap-3 overflow-x-scroll`,children:[h.jsxs("div",{className:"flex  flex-col gap-1 relative shrink-0 ",onClick:()=>d("/profile"),children:[h.jsx("img",{src:x.profile_image,className:"shrink-0 ml-1 h-20 w-20 object-cover rounded-full ",alt:""}),h.jsxs("span",{className:"text-center w-full text-sm font-semibold",children:[x.username.slice(0,10),h.jsx("span",{className:"text-center w-full text-sm font-semibold",children:x.username.length>10&&"..."})]}),h.jsx(_5,{className:"text-xl absolute bottom-7 left-17 bg-white text-black rounded-full"})]}),h.jsx(C5,{})]}),h.jsx("button",{onClick:oe,className:"text-white absolute md:block hidden left-0 top-10  bg-gray-800/50 px-1 rounded shrink-0",children:"←"}),h.jsx("button",{onClick:K,className:"text-white absolute md:block hidden right-0 top-10  bg-gray-800/50 px-3 rounded shrink-0",children:"→"}),h.jsx("section",{className:" w-full max-w-120 md:max-w-100 m-auto  flex flex-col ",children:R?.map(J=>h.jsxs("section",{className:"w-full text-xl capitalize font-semibold pb-6    flex flex-col gap-1",children:[h.jsxs("div",{className:"flex pt-3 px-2 pb-2 w-full justify-between items-center text-white",children:[h.jsxs("div",{className:"flex gap-2 items-center cursor-pointer ",onClick:()=>d(`/personprofile/${J.user._id}`),children:[h.jsx("img",{className:"h-8 rounded-full w-8 shrink-0 ",src:J.user.profile_image,alt:""}),h.jsx("p",{children:J.user.username})]}),h.jsx("button",{onClick:()=>S(J.user._id,J.isfollow),className:"px-3 py-1 text-sm border-2 active:scale-95 transition-all duration-200 ease-in-out capitalize border-amber-50 rounded-lg text-white",style:{display:x.id===J.user._id?"none":"block"},children:J.isfollow?"following":"follow"}),h.jsx(z1,{item:J,user:x})]}),h.jsxs("div",{className:"flex flex-col w-full gap-2 h-130 text-white relative",children:[J.mediatype==="non-image"?h.jsx("video",{muted:J._id!==i,onClick:()=>G(J._id),autoPlay:!0,loop:!0,className:"h-full w-full object-cover",src:J.post_url,alt:""}):h.jsx("img",{src:J.post_url,className:"h-full w-full object-cover",alt:""}),h.jsx("div",{className:"absolute top-2 right-2",onClick:()=>G(J._id),children:J.mediatype==="non-image"&&(J._id===c?h.jsx("img",{src:"sound.png",className:"h-6 text-white"}):h.jsx("img",{src:"mute.png",className:"h-7"}))})]}),h.jsxs("div",{className:"flex text-xl px-1 pt-1 justify-between w-full text-white",children:[h.jsxs("div",{className:"flex items-center gap-1 ml-1",children:[h.jsxs("div",{className:"flex items-center cursor-pointer active:scale-95 transition-all",onClick:ue=>z(J._id,J.islike),children:[J.islike?h.jsx(j1,{className:"text-red-500"}):h.jsx(us,{}),h.jsx("p",{className:"text-[12px] px-2",children:J.likecount>0?J.likecount:""})]}),h.jsxs("div",{className:"flex items-center cursor-pointer active:scale-95 transition-all",onClick:ue=>{ue.stopPropagation(),d(`/feed/${J._id}`)},children:[h.jsx("svg",{fill:"currentColor",height:"20",viewBox:"0 0 24 24",width:"20",children:h.jsx("path",{d:"M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z",fill:"none",stroke:"currentColor",strokeLinejoin:"round",strokeWidth:"2"})}),h.jsx("p",{className:"text-[12px] px-2",children:J.commentcount>0?J.commentcount:""})]})]}),h.jsx("div",{onClick:()=>w(J._id,J.save),children:J.save?h.jsx(jf,{}):h.jsx(Nf,{})})]}),h.jsx(A5,{item:J,expand:a,toggle:g})]},J._id))})]})},e3=({children:a})=>{const{user:r,loading:i}=Kt(),{loader:s}=dr();return i?h.jsx("div",{className:"fixed inset-0 z-50 bg-black/70  flex items-center justify-center",children:h.jsx(_1,{color:"#1418b9",size:"medium"})}):r?a:h.jsx(By,{to:"/login"})},t3=[{to:"/",label:"Feed",icon:"⌂"},{to:"/create",label:"Post",icon:"+"},{to:"/save",label:"Saved",icon:"◈"},{to:"/search",label:"Search",icon:"⌕"},{to:"/reel",label:"Reels",icon:"▷"},{to:"/profile",label:"Profile",icon:"◉"}],n3=()=>{const a=St(),{user:r,fetchUser:i}=Kt();return N.useEffect(()=>{i()},[]),h.jsxs(h.Fragment,{children:[h.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Orbitron:wght@400;700;900&display=swap');

        .aside-root {
          font-family: 'Space Grotesk', sans-serif;
          background: #0C1014;
          position: relative;
          overflow: hidden;
          height: 100%;
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        /* Subtle grid texture */
        .aside-root::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(99,179,237,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(99,179,237,0.03) 1px, transparent 1px);
          background-size: 32px 32px;
          pointer-events: none;
          z-index: 0;
        }

        /* Ambient glow top */
        .aside-root::after {
          content: '';
          position: absolute;
          top: -80px;
          left: 50%;
          transform: translateX(-50%);
          width: 200px;
          height: 200px;
          background: radial-gradient(circle, rgba(99,179,237,0.12) 0%, transparent 70%);
          pointer-events: none;
          z-index: 0;
        }

        .logo-wrap {
          position: relative;
          z-index: 1;
          padding: 28px 16px 20px;
          width: 100%;
          display: flex;
          justify-content: center;
        }

        .logo-wrap img {
          width: 140px;
          filter: drop-shadow(0 0 18px rgba(99,179,237,0.35));
          transition: filter 0.3s ease;
        }
        .logo-wrap img:hover {
          filter: drop-shadow(0 0 28px rgba(99,179,237,0.6));
        }

        /* Divider */
        .divider {
          position: relative;
          z-index: 1;
          width: 60%;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(99,179,237,0.4), transparent);
          margin-bottom: 18px;
        }

        .nav-list {
          position: relative;
          z-index: 1;
          list-style: none;
          padding: 0;
          margin: 0;
          width: 100%;
          flex: 1;
        }

        .nav-item {
          width: 100%;
          position: relative;
          overflow: hidden;
        }

        .nav-link {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 14px 28px;
          color: rgba(255,255,255,0.5);
          text-decoration: none;
          font-size: 15px;
          font-weight: 500;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          transition: all 0.25s ease;
          position: relative;
        }

        .nav-link::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 2px;
          background: linear-gradient(180deg, #63b3ed, #4299e1);
          opacity: 0;
          transition: opacity 0.25s ease;
          border-radius: 0 2px 2px 0;
        }

        .nav-link:hover,
        .nav-link.active {
          color: #fff;
          background: rgba(99,179,237,0.07);
        }

        .nav-link:hover::before,
        .nav-link.active::before {
          opacity: 1;
        }

        .nav-link.active {
          color: #63b3ed;
          background: rgba(99,179,237,0.1);
        }

        .nav-icon {
          font-size: 18px;
          width: 24px;
          text-align: center;
          opacity: 0.7;
          font-style: normal;
        }

        .nav-link.active .nav-icon,
        .nav-link:hover .nav-icon {
          opacity: 1;
        }

        /* User footer */
        .user-footer {
          position: relative;
          z-index: 1;
          width: 100%;
          padding: 16px 20px 24px;
          border-top: 1px solid rgba(99,179,237,0.08);
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .avatar-wrap {
          position: relative;
          flex-shrink: 0;
        }

        .avatar-wrap img {
          height: 38px;
          width: 38px;
          border-radius: 50%;
          object-fit: cover;
          border: 1.5px solid rgba(99,179,237,0.4);
          display: block;
        }

        .avatar-glow {
          position: absolute;
          inset: -3px;
          border-radius: 50%;
          background: conic-gradient(from 0deg, #63b3ed, #4299e1, #63b3ed);
          z-index: -1;
          opacity: 0.5;
          animation: spin 4s linear infinite;
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        .logout-btn {
          flex: 1;
          background: linear-gradient(135deg, rgba(66,153,225,0.15), rgba(99,179,237,0.08));
          border: 1px solid rgba(99,179,237,0.25);
          color: #63b3ed;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          padding: 9px 14px;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.25s ease;
          position: relative;
          overflow: hidden;
        }

        .logout-btn::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(99,179,237,0.2), rgba(66,153,225,0.1));
          opacity: 0;
          transition: opacity 0.25s;
        }

        .logout-btn:hover::before {
          opacity: 1;
        }

        .logout-btn:hover {
          border-color: rgba(99,179,237,0.5);
          color: #fff;
          box-shadow: 0 0 18px rgba(99,179,237,0.15);
        }
      `}),h.jsxs("div",{className:"aside-root overflow-y-hidden",children:[h.jsx("div",{className:"logo-wrap",children:h.jsx("img",{src:"/devgram2.png",alt:""})}),h.jsx("div",{className:"divider"}),h.jsx("ul",{className:"nav-list",children:t3.map(({to:s,label:c,icon:f})=>h.jsx("li",{className:"nav-item",children:h.jsxs(yf,{to:s,className:({isActive:d})=>`nav-link${d?" active":""}`,children:[h.jsx("i",{className:"nav-icon",children:f}),c]})},s))}),h.jsxs("div",{className:"user-footer",children:[h.jsxs("div",{className:"avatar-wrap",onClick:()=>a("/profile"),children:[h.jsx("div",{className:"avatar-glow"}),h.jsx("img",{src:r?.profile_image,alt:""})]}),h.jsx("button",{className:"logout-btn",onClick:()=>{x1(),a("/login")},children:"Logout"})]})]})]})},a3=()=>{const{user:a,fetchUser:r}=Kt(),i=St();return N.useEffect(()=>{r()},[]),h.jsxs("section",{className:"w-full h-14 md:hidden  flex justify-around items-center text-white bg-[#0C1014] fixed bottom-0 left-0 right-0 z-50",children:[h.jsx("svg",{onClick:()=>{i("/")},className:"text-white",viewBox:"0 0 24 24",width:"24",height:"24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"lucide lucide-home",children:h.jsx("path",{d:"m21.762 8.786-7-6.68a3.994 3.994 0 0 0-5.524 0l-7 6.681A4.017 4.017 0 0 0 1 11.68V19c0 2.206 1.794 4 4 4h3.005a1 1 0 0 0 1-1v-7.003a2.997 2.997 0 0 1 5.994 0V22a1 1 0 0 0 1 1H19c2.206 0 4-1.794 4-4v-7.32a4.02 4.02 0 0 0-1.238-2.894Z"})}),h.jsxs("svg",{onClick:()=>{i("/reel")},className:"text-white","aria-label":"Reels",class:"x1lliihq x1n2onr6 x5n08af",fill:"currentColor",height:"24",role:"img",viewBox:"0 0 24 24",width:"24",children:[h.jsx("title",{children:"Reels"}),h.jsx("path",{d:"M22.935 7.468c-.063-1.36-.307-2.142-.512-2.67a5.341 5.341 0 0 0-1.27-1.95 5.345 5.345 0 0 0-1.95-1.27c-.53-.206-1.311-.45-2.672-.513C15.333 1.012 14.976 1 12 1s-3.333.012-4.532.065c-1.36.063-2.142.307-2.67.512-.77.298-1.371.69-1.95 1.27a5.36 5.36 0 0 0-1.27 1.95c-.206.53-.45 1.311-.513 2.672C1.012 8.667 1 9.024 1 12s.012 3.333.065 4.532c.063 1.36.307 2.142.512 2.67.297.77.69 1.372 1.27 1.95.58.581 1.181.974 1.95 1.27.53.206 1.311.45 2.672.513C8.667 22.988 9.024 23 12 23s3.333-.012 4.532-.065c1.36-.063 2.142-.307 2.67-.512a5.33 5.33 0 0 0 1.95-1.27 5.356 5.356 0 0 0 1.27-1.95c.206-.53.45-1.311.513-2.672.053-1.198.065-1.555.065-4.531s-.012-3.333-.065-4.532Zm-1.998 8.972c-.05 1.07-.228 1.652-.38 2.04-.197.51-.434.874-.82 1.258a3.362 3.362 0 0 1-1.258.82c-.387.151-.97.33-2.038.379-1.162.052-1.51.063-4.441.063s-3.28-.01-4.44-.063c-1.07-.05-1.652-.228-2.04-.38a3.354 3.354 0 0 1-1.258-.82 3.362 3.362 0 0 1-.82-1.258c-.151-.387-.33-.97-.379-2.038C3.011 15.28 3 14.931 3 12s.01-3.28.063-4.44c.05-1.07.228-1.652.38-2.04.197-.51.434-.875.82-1.26a3.372 3.372 0 0 1 1.258-.819c.387-.15.97-.329 2.038-.378C8.72 3.011 9.069 3 12 3s3.28.01 4.44.063c1.07.05 1.652.228 2.04.38.51.197.874.433 1.258.82.385.382.622.747.82 1.258.151.387.33.97.379 2.038C20.989 8.72 21 9.069 21 12s-.01 3.28-.063 4.44Zm-4.584-6.828-5.25-3a2.725 2.725 0 0 0-2.745.01A2.722 2.722 0 0 0 6.988 9v6c0 .992.512 1.88 1.37 2.379.432.25.906.376 1.38.376.468 0 .937-.123 1.365-.367l5.25-3c.868-.496 1.385-1.389 1.385-2.388s-.517-1.892-1.385-2.388Zm-.993 3.04-5.25 3a.74.74 0 0 1-.748-.003.74.74 0 0 1-.374-.649V9a.74.74 0 0 1 .374-.65.737.737 0 0 1 .748-.002l5.25 3c.341.196.378.521.378.652s-.037.456-.378.651Z"})]}),h.jsxs("svg",{onClick:()=>{i("/create")},"aria-label":"New post",class:"x1lliihq x1n2onr6 x5n08af",fill:"currentColor",height:"24",role:"img",viewBox:"0 0 24 24",width:"24",children:[h.jsx("title",{children:"New post"}),h.jsx("path",{d:"M21 11h-8V3a1 1 0 1 0-2 0v8H3a1 1 0 1 0 0 2h8v8a1 1 0 1 0 2 0v-8h8a1 1 0 1 0 0-2Z"})]}),h.jsx(lf,{className:"text-white text-xl",onClick:()=>{i("/search")}}),h.jsx("img",{onClick:()=>{i("/profile")},src:a?.profile_image,alt:"",className:"h-10 w-10 rounded-full object-cover"})]})},l3=()=>{const a=Xn();return h.jsxs(h.Fragment,{children:[h.jsxs("div",{className:"h-full w-full flex",children:[h.jsx("div",{className:"w-60 hidden md:block z-999 overflow-y-hidden h-full fixed md:static bg-[#0C1014] ",children:h.jsx(n3,{})}),h.jsx("div",{className:`flex-1 h-full overflow-y-scroll relative bg-[#0C1014] 
  ${a.pathname.startsWith("/reel")?"pb-0":"pb-18 md:pb-0"}`,children:h.jsx(qy,{})})]}),!a.pathname.startsWith("/reel")&&h.jsx(a3,{})]})},r3=()=>{const{uploadHandle:a}=Dn(),r=N.useRef(),i=St(),[s,c]=N.useState(!1),[f,d]=N.useState(null),[g,b]=N.useState(""),[m,x]=N.useState(null),[y,j]=N.useState(""),z=R=>{const G=R.target.files[0];if(!G)return;d(G);const X=URL.createObjectURL(G);x(X),G.type.startsWith("image")?j("image"):G.type.startsWith("video")&&j("video")},w=()=>{r.current.click()},S=async R=>{c(!0),R.preventDefault();const G=new FormData;G.append("file",f),G.append("caption",g),await a(G),c(!1),i("/")};return h.jsx("div",{className:"h-full w-full flex items-center justify-center bg-[#0C1014]",children:h.jsxs("form",{className:"flex flex-col items-center justify-center gap-2 w-full max-w-md px-4",onSubmit:S,children:[h.jsx("h2",{className:"text-white text-2xl font-bold tracking-widest uppercase",children:"New Post"}),h.jsxs("div",{className:"w-full rounded-2xl p-6 flex flex-col items-center gap-5 bg-[#0C1014]",children:[h.jsx("label",{className:"text-xs font-semibold tracking-widest uppercase text-blue-300",children:"Upload File"}),m?h.jsxs("div",{onClick:w,className:"w-full flex flex-col items-center gap-3 cursor-pointer active:scale-95",children:[y==="image"&&h.jsx("img",{src:m,className:"h-60 w-full object-contain rounded-lg",alt:""}),y==="video"&&h.jsx("video",{src:m,autoPlay:!0,className:"h-60 w-full object-contain rounded-lg"}),h.jsx("span",{className:"text-white/40 text-xs uppercase",children:"Click to change"})]}):h.jsxs("div",{onClick:w,className:"flex flex-col items-center justify-center gap-3 rounded-xl cursor-pointer w-full py-8 border-2 border-dashed border-blue-400/30",children:[h.jsx("img",{src:"/inbox.png",className:"h-20",alt:""}),h.jsx("span",{className:"text-white/40 text-xs uppercase",children:"Click to browse"})]}),h.jsx("input",{type:"file",ref:r,required:!0,hidden:!0,onChange:z,accept:"image/*,video/*"}),h.jsxs("div",{className:"w-full flex flex-col gap-2",children:[h.jsx("label",{className:"text-xs font-semibold tracking-widest uppercase text-blue-300",children:"Caption"}),h.jsx("input",{type:"text",value:g,required:!0,onChange:R=>b(R.target.value),placeholder:"Write something...",className:"w-full px-4 py-3 rounded-xl text-white outline-none bg-[#11161b] border border-blue-400/20"})]})]}),h.jsx("button",{className:s?"w-[90%] m-auto py-3 active:scale-90 rounded-xl font-bold text-sm tracking-widest uppercase bg-blue-600/50 text-white cursor-not-allowed":"w-[90%] m-auto py-3 active:scale-90 rounded-xl font-bold text-sm tracking-widest uppercase bg-blue-600 text-white cursor-pointer",disabled:s,children:s?"Uploading...":"Upload Post"})]})})},i3=()=>{const a=St(),{post:r,saver:i}=Dn();return h.jsxs(h.Fragment,{children:[h.jsx("h1",{className:"text-6xl px-5 text-center md:text-start font-semibold text-white mb-7",children:"Saved Post"}),h.jsx("div",{className:" md:w-full max-w-300 grid-cols-2 xl:grid-cols-4 md:grid-cols-3 grid m-auto gap-1 md:p-4",children:r.filter(s=>s.save===!0).length>0?r.filter(s=>s.save===!0).map(s=>h.jsxs("section",{className:"relative ",children:[s.mediatype==="non-image"?h.jsx("video",{onClick:()=>a(`/feed/${s._id}`),className:"h-50 md:h-70 object-cover w-full",src:s.post_url,autoPlay:!0,loop:!0,muted:!0}):h.jsx("img",{onClick:()=>a(`/feed/${s._id}`),src:s.post_url,className:"h-50 md:h-70 object-cover w-full",alt:""}),h.jsx(jf,{onClick:()=>i(s._id,s.save),className:"absolute top-3 text-white text-3xl right-2"})]},s._id)):h.jsx("div",{className:"col-span-2 md:col-span-3 flex justify-center w-full",children:h.jsx("p",{className:"text-center w-full text-white text-xl font-semibold whitespace-nowrap p-5",children:"No saved post found"})})})]})},A1=({content:a})=>{const r=St();return!a||a.length===0?h.jsx("div",{className:"col-span-3 flex justify-center w-full",children:h.jsx("p",{className:"text-center w-full text-white text-xl font-semibold whitespace-nowrap p-5",children:"No post found"})}):h.jsx("div",{className:"w-full   grid grid-cols-3 gap-1",children:a.map(i=>h.jsx("div",{className:" w-full",onClick:()=>r(`/feed/${i._id}`),children:i.mediatype==="non-image"?h.jsx("video",{src:i.post_url,muted:!0,autoPlay:!0,loop:!0,className:"min-w-full h-50 md:h-80 2xl:h-130 object-cover"}):h.jsx("img",{src:i.post_url,alt:"",className:"min-w-full h-50 md:h-80 2xl:h-130 object-cover"})}))})},o3=()=>{const a=St(),{allpost:r}=Kt();return h.jsx("div",{className:"w-full grid grid-cols-3 gap-1",children:r.filter(i=>i.save===!0).length>0?r.filter(i=>i.save===!0).map(i=>h.jsx("div",{className:"w-full",onClick:()=>a(`/feed/${i._id}`),children:i.mediatype==="non-image"?h.jsx("video",{src:i.post_url,muted:!0,autoPlay:!0,loop:!0,className:"min-w-full h-50 md:h-80 2xl:h-120 object-cover"}):h.jsx("img",{src:i.post_url,alt:"",className:"min-w-full h-50 md:h-80 2xl:h-120 object-cover"})},i._id)):h.jsx("div",{className:"col-span-3 flex justify-center w-full",children:h.jsx("p",{className:"text-center w-full text-white text-xl font-semibold whitespace-nowrap p-5",children:"No saved post found"})})})},M1=()=>h.jsx("div",{className:"col-span-3 flex justify-center w-full",children:h.jsx("p",{className:"text-center w-full text-white text-xl font-semibold whitespace-nowrap p-5",children:"No tagged found"})}),s3=()=>{const a=St(),{user:r,allpost:i,fetchUser:s}=Kt(),[c,f]=N.useState([]),[d,g]=N.useState("post");return N.useEffect(()=>{if(r&&i.length>0){const b=i.filter(m=>m.user._id===r.id);f(b),console.log(b)}},[r,i]),N.useEffect(()=>{s()},[]),h.jsxs(h.Fragment,{children:[r?h.jsxs("div",{className:"max-w-120  py-3",children:[h.jsx(us,{className:" text-white text-2xl md:block hidden active:scale-95",onClick:()=>a("/buy_A_coffee")}),h.jsx("div",{className:" w-full flex items-end justify-end md:hidden",children:h.jsx("button",{className:"w-[30%] py-2 mr-3 bg-zinc-900 rounded-lg text-white font-semibold  ",onClick:()=>{x1(),a("/login")},children:"Logout"})}),h.jsxs("div",{className:"flex gap-5 w-[90%] md:w-[50%] m-auto    text-white mt-3 md:mt-8 ",children:[h.jsx("img",{src:r.profile_image,alt:"",className:"shrink-0 h-30 w-30 md:h-40 md:w-40 rounded-full object-cover"}),h.jsxs("div",{className:"flex flex-col gap-2 md:gap-4 justify-center",children:[h.jsx("h1",{className:"text-2xl md:text-4xl font-semibold uppercase",children:r.username}),h.jsxs("div",{className:"flex gap-3 w-full",children:[h.jsxs("p",{className:"text-sm md:text-base whitespace-nowrap",children:[r.postcount," posts"]}),h.jsxs("p",{className:"text-sm md:text-base whitespace-nowrap",children:[r.follower," followers"]}),h.jsxs("p",{className:"text-sm md:text-base whitespace-nowrap",children:[r.following," following"]})]}),h.jsx("p",{className:"text-sm md:text-base text-zinc-500 text-wrap  ",children:r.bio})]})]})]}):h.jsx("p",{children:"loading..."}),h.jsxs("div",{className:"w-[90%] m-auto flex gap-3 mt-3 text-white pb-6 ",children:[h.jsx("button",{className:"w-full bg-[crimson] text-center py-3 rounded-xl active:scale-95 transition-all duration-200",onClick:()=>a("/profileUpdate/"+r.id),children:"Edit Profile"}),h.jsx("button",{className:"w-full bg-[crimson] text-center py-3 rounded-xl active:scale-95 transition-all duration-200",onClick:()=>a("/save"),children:"View Archieve"})]}),h.jsxs("div",{className:"flex overflow-x-scroll py-4 w-full px-2 md:w-[80%] m-auto snap-x snap-mandatory",children:[c?.map(b=>h.jsx(h.Fragment,{children:h.jsx("div",{className:"h-20 w-20 rounded-full shrink-0 bg-zinc-900 ",onClick:()=>a(`/feed/${b._id}`),children:b.mediatype==="non-image"?h.jsx("video",{src:b.post_url,muted:!0,autoPlay:!0,loop:!0,className:"h-full shrink-0 w-full p-1 rounded-full object-cover"}):h.jsx("img",{src:b.post_url,alt:"",className:"h-full w-full p-1 rounded-full object-cover"})})})),h.jsx("div",{className:"h-20 w-20 rounded-full ml-2  p-3 shrink-0 bg-zinc-900 ",onClick:()=>a("/create"),children:h.jsx("div",{className:"h-full w-full p-2 border-2 border-white rounded-full",children:h.jsx("img",{src:"/plus.png",className:"h-full w-full object-cover",alt:""})})})]}),h.jsxs("div",{className:"w-[80%]  flex  justify-between m-auto max-w-120 text-white py-6 ",children:[h.jsxs("svg",{onClick:()=>g("post"),className:d==="post"?"text-white cursor-pointer active:text-white active:scale-95 duration-200 transition-all":"text-gray-500 cursor-pointer active:text-white active:scale-95 duration-200 transition-all","aria-label":"Posts",class:"x1lliihq x1n2onr6 xyb1xck",fill:"currentColor",height:"24",role:"img",viewBox:"0 0 24 24",width:"24",children:[h.jsx("title",{children:"Posts"}),h.jsx("rect",{height:"6",rx:"1",ry:"1",width:"4.667",x:"3",y:"1"}),h.jsx("rect",{height:"6",rx:"1",ry:"1",width:"4.667",x:"16.333",y:"1"}),h.jsx("rect",{height:"6",rx:"1",ry:"1",width:"4.667",x:"9.667",y:"1"}),h.jsx("rect",{height:"6",rx:"1",ry:"1",width:"4.667",x:"3",y:"9"}),h.jsx("rect",{height:"6",rx:"1",ry:"1",width:"4.667",x:"16.333",y:"9"}),h.jsx("rect",{height:"6",rx:"1",ry:"1",width:"4.667",x:"9.667",y:"9"}),h.jsx("rect",{height:"6",rx:"1",ry:"1",width:"4.667",x:"3",y:"17"}),h.jsx("rect",{height:"6",rx:"1",ry:"1",width:"4.667",x:"16.333",y:"17"}),h.jsx("rect",{height:"6",rx:"1",ry:"1",width:"4.667",x:"9.667",y:"17"})]}),h.jsx(Nf,{onClick:()=>g("saved"),className:`${d==="saved"?"text-white":"text-gray-500"} text-2xl cursor-pointer active:text-white active:scale-95 duration-200 transition-all`}),h.jsxs("svg",{onClick:()=>g("tagged"),className:`${d==="tagged"?"text-white":"text-gray-500"} text-2xl cursor-pointer active:text-white active:scale-95 duration-200 transition-all`,"aria-label":"Tagged",class:"x1lliihq x1n2onr6 x1cp0k07 __web-inspector-hide-shortcut__",fill:"currentColor",height:"24",role:"img",viewBox:"0 0 24 24",width:"24",children:[h.jsx("title",{children:"Tagged"}),h.jsx("path",{d:"M21 7.48a2 2 0 0 0-2-2h-3.046a2.002 2.002 0 0 1-1.506-.683l-1.695-1.939a1 1 0 0 0-1.506 0L9.552 4.797c-.38.434-.93.682-1.506.682H5a2 2 0 0 0-2 2V19l.01.206A2 2 0 0 0 5 21h14a2 2 0 0 0 2-2V7.48ZM23 19a4 4 0 0 1-4 4H5a4 4 0 0 1-3.995-3.794L1 19V7.48a4 4 0 0 1 4-4h3.046l1.696-1.94a3 3 0 0 1 4.516 0l1.696 1.94H19a4 4 0 0 1 4 4V19Z",fill:"currentColor"}),h.jsx("path",{d:"M14.5 10.419a2.5 2.5 0 1 0-5 0 2.5 2.5 0 0 0 5 0Zm2 0a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM12 16.003c3.511 0 6.555 1.99 8.13 4.906a1 1 0 0 1-1.76.95c-1.248-2.31-3.64-3.857-6.37-3.857S6.878 19.55 5.63 21.86a1 1 0 0 1-1.76-.951c1.575-2.915 4.618-4.906 8.13-4.906Z",fill:"currentColor"})]})]}),d==="post"?h.jsx(A1,{content:c}):d==="saved"?h.jsx(o3,{}):h.jsx(M1,{})]})},u3=()=>{const[a,r]=N.useState(null),[i,s]=N.useState(""),{id:c}=pf();console.log(c);const{detailpostHandle:f,singlepost:d,commentHandle:g}=Dn(),{user:b}=Kt(),[m,x]=N.useState(!1),y=async()=>{await f(c)};N.useEffect(()=>{y()},[]);const j=w=>{r(S=>S===w?null:w)},z=async w=>{x(!0),w.preventDefault(),console.log(c,i),await g(c,i),x(!1),s("")};return h.jsx("section",{className:"w-full min-h-dvh md:h-dvh overflow-y-scroll flex flex-col md:flex-row items-center ",children:d?.post_url&&h.jsxs(h.Fragment,{children:[h.jsxs("div",{className:" w-full h-full flex flex-col md:w-[60%] bg-[#0C1014] ",children:[h.jsxs("div",{className:"flex justify-between items-center",children:[h.jsxs("div",{className:"flex gap-4 items-start p-3 shrink-0",children:[h.jsx("img",{src:d.user.profile_image,className:"h-10 w-10 rounded-full",alt:""}),h.jsx("p",{className:"text-white text-2xl",children:d.user.username})]}),h.jsx(z1,{item:d,user:b})]}),h.jsx("div",{className:"flex-1 min-h-0",children:d.mediatype==="image"?h.jsx("img",{src:d.post_url,alt:"detailpost",className:"rounded-lg  h-full w-full object-cover "}):h.jsx("video",{src:d.post_url,autoPlay:!0,loop:!0,muted:a!==d._id,alt:"detailpost",className:"rounded-lg  h-full w-full object-cover ",onClick:()=>j(d._id)})})]},d._id),h.jsxs("div",{className:"h-full flex-1 flex w-full flex-col bg-[#0C1014] relative overflow-y-scroll ",children:[h.jsx("h1",{className:"text-white h-10 font-bold text-center text-2xl p-3",children:"Comments Section"}),h.jsx("div",{className:"flex flex-col gap-2 p-3 flex-1 overflow-y-scroll",children:d.comment?.sort((w,S)=>S.createdAt-w.createdAt).map(w=>h.jsx(h.Fragment,{children:h.jsxs("section",{className:"flex gap-2 items-center p-3",children:[h.jsx("div",{children:h.jsx("img",{src:w.user.profile_image,className:"h-10 w-10 rounded-full",alt:""})}),h.jsxs("div",{className:"flex flex-col self-start",children:[h.jsx("p",{className:"text-zinc-700 text-xl",children:w.user.username}),h.jsx("p",{className:"text-white text-lg",children:w.comment})]})]})}))}),h.jsx("div",{className:"h-20",children:h.jsxs("form",{onSubmit:z,className:"absolute bottom-2 right-2 flex gap-2 items-center capitalize  w-[95%] m-auto text-white text-lg font-semibold ",children:[h.jsx("input",{type:"text",required:!0,placeholder:"Add comment",className:"w-full border px-3 border-gray-300 outline-none py-3  rounded-xl",value:i,onChange:w=>s(w.target.value)}),h.jsx("button",{className:m?"rounded-xl bg-yellow-600/50 px-6 py-3 cursor-not-allowed":"rounded-xl bg-yellow-600 px-6 py-3 cursor-pointer",children:"Post"})]})})]})]})})},c3=()=>{const{id:a}=pf(),r=St(),[i,s]=N.useState({username:"",bio:""}),[c,f]=N.useState(null),{updateHandle:d}=Dn(),g=async b=>{b.preventDefault();const m=new FormData;m.append("username",i.username),m.append("bio",i.bio),m.append("file",c),await d(a,m),r("/profile")};return h.jsx(h.Fragment,{children:h.jsxs("div",{className:"h-full w-full flex relative items-center justify-center",children:[h.jsx("button",{onClick:()=>r(-1),className:"absolute top-5 right-5 bg-zinc-900 text-white  px-10 py-3 font-bold rounded-xl",children:"back"}),h.jsxs("form",{className:"flex flex-col gap-5 w-[90%] max-w-100 m-auto",onSubmit:g,children:[h.jsx("h1",{className:"text-6xl px-5 text-center md:text-start font-semibold text-white",children:"Update"}),h.jsxs("div",{className:"flex gap-2 flex-col",children:[h.jsx("input",{type:"file",placeholder:"profile_image",className:"w-full p-4 outline-none rounded-xl bg-zinc-900 text-white",onChange:b=>f(b.target.files[0])}),h.jsx("input",{type:"text",placeholder:"username",className:"w-full p-4 outline-none rounded-xl bg-zinc-900 text-white",value:i.username,onChange:b=>s({...i,username:b.target.value})}),h.jsx("input",{type:"text",placeholder:"bio",className:"w-full p-4 outline-none rounded-xl bg-zinc-900 text-white",value:i.bio,onChange:b=>s({...i,bio:b.target.value})}),h.jsx("button",{type:"submit",className:"active:scale-90  w-full p-4 rounded-xl bg-yellow-600 font-bold text-white",children:"Update"})]})]})]})})},f3=({content:a})=>{const r=St();return a.length===0?h.jsx("p",{className:"text-white w-full text-center pt-5 uppercase",children:"no reel found"}):(console.log(a),h.jsx("div",{className:"w-full grid grid-cols-3 gap-1",children:a?.map(i=>h.jsx(h.Fragment,{children:i&&h.jsx("div",{className:"w-full",onClick:()=>r(`/feed/${i._id}`),children:i.mediatype==="non-image"?h.jsx("video",{src:i.post_url,muted:!0,autoPlay:!0,loop:!0,className:"min-w-full h-50 md:h-80 xl:h-120 object-cover"}):h.jsx("img",{src:i.post_url,alt:"",className:"min-w-full h-50 md:h-80 xl:h-120 object-cover"})})}))}))},d3=()=>{const[a,r]=N.useState("post"),{id:i}=pf(),{userpersonalprofile:s,personprofileHandle:c,followHandle:f,unfollowHandle:d}=Dn();return N.useEffect(()=>{c(i)},[]),console.log(s),h.jsxs(h.Fragment,{children:[s?h.jsx("div",{className:"max-w-120  py-3",children:h.jsxs("div",{className:"flex gap-5 w-[90%] md:w-[50%] m-auto    text-white mt-8 ",children:[h.jsx("img",{src:s.profile_image,alt:"",className:"shrink-0 h-30 w-30 md:h-40 md:w-40 rounded-full object-cover"}),h.jsxs("div",{className:"flex flex-col gap-2 md:gap-4 justify-center",children:[h.jsx("h1",{className:"text-2xl md:text-4xl font-semibold uppercase",children:s.username}),h.jsxs("div",{className:"flex gap-3 w-full",children:[h.jsxs("p",{className:"text-sm md:text-base whitespace-nowrap",children:[s.postcount," posts"]}),h.jsxs("p",{className:"text-sm md:text-base whitespace-nowrap",children:[s.follower," followers"]}),h.jsxs("p",{className:"text-sm md:text-base whitespace-nowrap",children:[s.following," following"]})]}),h.jsx("p",{className:"text-sm md:text-base text-zinc-500",children:s.bio})]})]})}):h.jsx("p",{children:"NO profile found"}),h.jsxs("div",{className:"w-[90%]  flex  justify-between m-auto  text-white py-3 mt-2  ",children:[h.jsx("button",{className:s.userfollow?"text-white py-2 capitalize cursor-pointer bg-zinc-900 text-center w-[49%] rounded-lg":"text-white py-2 capitalize cursor-pointer bg-blue-500 text-center w-[49%] rounded-lg",onClick:()=>s.userfollow?d(s.id):f(s.id),children:s.userfollow?"unfollow":"follow"}),h.jsx("button",{className:"text-white py-2 capitalize cursor-pointer bg-zinc-900 text-center w-[49%] rounded-lg",children:"Message"})]}),h.jsxs("div",{className:"w-[80%]  flex  justify-between m-auto max-w-120 text-white py-3 mt-4 ",children:[h.jsxs("svg",{onClick:()=>r("post"),className:a==="post"?"text-white cursor-pointer active:text-white active:scale-95 duration-200 transition-all":"text-gray-500 cursor-pointer active:text-white active:scale-95 duration-200 transition-all","aria-label":"Posts",class:"x1lliihq x1n2onr6 xyb1xck",fill:"currentColor",height:"24",role:"img",viewBox:"0 0 24 24",width:"24",children:[h.jsx("title",{children:"Posts"}),h.jsx("rect",{height:"6",rx:"1",ry:"1",width:"4.667",x:"3",y:"1"}),h.jsx("rect",{height:"6",rx:"1",ry:"1",width:"4.667",x:"16.333",y:"1"}),h.jsx("rect",{height:"6",rx:"1",ry:"1",width:"4.667",x:"9.667",y:"1"}),h.jsx("rect",{height:"6",rx:"1",ry:"1",width:"4.667",x:"3",y:"9"}),h.jsx("rect",{height:"6",rx:"1",ry:"1",width:"4.667",x:"16.333",y:"9"}),h.jsx("rect",{height:"6",rx:"1",ry:"1",width:"4.667",x:"9.667",y:"9"}),h.jsx("rect",{height:"6",rx:"1",ry:"1",width:"4.667",x:"3",y:"17"}),h.jsx("rect",{height:"6",rx:"1",ry:"1",width:"4.667",x:"16.333",y:"17"}),h.jsx("rect",{height:"6",rx:"1",ry:"1",width:"4.667",x:"9.667",y:"17"})]}),h.jsxs("svg",{onClick:()=>r("reel"),className:a==="reel"?"text-white cursor-pointer active:text-white active:scale-95 duration-200 transition-all":"text-gray-500 cursor-pointer active:text-white active:scale-95 duration-200 transition-all","aria-label":"Reels",class:"x1lliihq x1n2onr6 x1cp0k07",fill:"currentColor",height:"24",role:"img",viewBox:"0 0 24 24",width:"24",children:[h.jsx("title",{children:"Reels"}),h.jsx("path",{d:"M22.935 7.468c-.063-1.36-.307-2.142-.512-2.67a5.341 5.341 0 0 0-1.27-1.95 5.345 5.345 0 0 0-1.95-1.27c-.53-.206-1.311-.45-2.672-.513C15.333 1.012 14.976 1 12 1s-3.333.012-4.532.065c-1.36.063-2.142.307-2.67.512-.77.298-1.371.69-1.95 1.27a5.36 5.36 0 0 0-1.27 1.95c-.206.53-.45 1.311-.513 2.672C1.012 8.667 1 9.024 1 12s.012 3.333.065 4.532c.063 1.36.307 2.142.512 2.67.297.77.69 1.372 1.27 1.95.58.581 1.181.974 1.95 1.27.53.206 1.311.45 2.672.513C8.667 22.988 9.024 23 12 23s3.333-.012 4.532-.065c1.36-.063 2.142-.307 2.67-.512a5.33 5.33 0 0 0 1.95-1.27 5.356 5.356 0 0 0 1.27-1.95c.206-.53.45-1.311.513-2.672.053-1.198.065-1.555.065-4.531s-.012-3.333-.065-4.532Zm-1.998 8.972c-.05 1.07-.228 1.652-.38 2.04-.197.51-.434.874-.82 1.258a3.362 3.362 0 0 1-1.258.82c-.387.151-.97.33-2.038.379-1.162.052-1.51.063-4.441.063s-3.28-.01-4.44-.063c-1.07-.05-1.652-.228-2.04-.38a3.354 3.354 0 0 1-1.258-.82 3.362 3.362 0 0 1-.82-1.258c-.151-.387-.33-.97-.379-2.038C3.011 15.28 3 14.931 3 12s.01-3.28.063-4.44c.05-1.07.228-1.652.38-2.04.197-.51.434-.875.82-1.26a3.372 3.372 0 0 1 1.258-.819c.387-.15.97-.329 2.038-.378C8.72 3.011 9.069 3 12 3s3.28.01 4.44.063c1.07.05 1.652.228 2.04.38.51.197.874.433 1.258.82.385.382.622.747.82 1.258.151.387.33.97.379 2.038C20.989 8.72 21 9.069 21 12s-.01 3.28-.063 4.44Zm-4.584-6.828-5.25-3a2.725 2.725 0 0 0-2.745.01A2.722 2.722 0 0 0 6.988 9v6c0 .992.512 1.88 1.37 2.379.432.25.906.376 1.38.376.468 0 .937-.123 1.365-.367l5.25-3c.868-.496 1.385-1.389 1.385-2.388s-.517-1.892-1.385-2.388Zm-.993 3.04-5.25 3a.74.74 0 0 1-.748-.003.74.74 0 0 1-.374-.649V9a.74.74 0 0 1 .374-.65.737.737 0 0 1 .748-.002l5.25 3c.341.196.378.521.378.652s-.037.456-.378.651Z"})]}),h.jsxs("svg",{onClick:()=>r("tagged"),className:`${a==="tagged"?"text-white":"text-gray-500"} text-2xl cursor-pointer active:text-white active:scale-95 duration-200 transition-all`,"aria-label":"Tagged",class:"x1lliihq x1n2onr6 x1cp0k07 __web-inspector-hide-shortcut__",fill:"currentColor",height:"24",role:"img",viewBox:"0 0 24 24",width:"24",children:[h.jsx("title",{children:"Tagged"}),h.jsx("path",{d:"M21 7.48a2 2 0 0 0-2-2h-3.046a2.002 2.002 0 0 1-1.506-.683l-1.695-1.939a1 1 0 0 0-1.506 0L9.552 4.797c-.38.434-.93.682-1.506.682H5a2 2 0 0 0-2 2V19l.01.206A2 2 0 0 0 5 21h14a2 2 0 0 0 2-2V7.48ZM23 19a4 4 0 0 1-4 4H5a4 4 0 0 1-3.995-3.794L1 19V7.48a4 4 0 0 1 4-4h3.046l1.696-1.94a3 3 0 0 1 4.516 0l1.696 1.94H19a4 4 0 0 1 4 4V19Z",fill:"currentColor"}),h.jsx("path",{d:"M14.5 10.419a2.5 2.5 0 1 0-5 0 2.5 2.5 0 0 0 5 0Zm2 0a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM12 16.003c3.511 0 6.555 1.99 8.13 4.906a1 1 0 0 1-1.76.95c-1.248-2.31-3.64-3.857-6.37-3.857S6.878 19.55 5.63 21.86a1 1 0 0 1-1.76-.951c1.575-2.915 4.618-4.906 8.13-4.906Z",fill:"currentColor"})]})]}),h.jsxs("div",{className:"w-full ",children:[a==="post"&&h.jsx(A1,{content:s.post}),a==="reel"&&h.jsx(f3,{content:s.post.filter(g=>g.mediatype==="non-image")}),a==="tagged"&&h.jsx(M1,{})]})]})},h3=()=>{const{user:a,allpost:r}=Kt(),{post:i,liker:s,saver:c,followbtn:f}=Dn(),[d,g]=N.useState(null),[b,m]=N.useState(null),[x,y]=N.useState(null),[j,z]=N.useState(null),w=St(),S=N.useRef({}),R=N.useRef(null),[G,X]=N.useState(null),[K,oe]=N.useState(!1),[J,ue]=N.useState(r||[]);N.useEffect(()=>{if(r?.length)return R.current=new IntersectionObserver(Q=>{Q.forEach(Oe=>{const je=Oe.target.dataset.id,ee=S.current[je];Oe.isIntersecting?(G&&G!==je&&S.current[G]?.pause(),ee?.play(),X(je)):ee?.pause()})},{threshold:.7}),Object.values(S.current).forEach(Q=>{Q&&R.current.observe(Q)}),()=>{R.current?.disconnect()}},[r,G]);const C=()=>{oe(Q=>!Q),Object.values(S.current).forEach(Q=>{Q&&(Q.muted=!K)})},le=Q=>{z(Oe=>Oe===Q?null:Q)};return h.jsx("div",{className:"w-full max-w-100 m-auto 2xl:max-w-200 h-screen  overflow-y-scroll snap-y snap-mandatory scroll-smooth flex flex-col relative",children:i?.filter(Q=>Q.mediatype==="non-image").map(Q=>h.jsxs("section",{className:"w-full h-screen snap-start relative text-xl capitalize font-semibold flex flex-col gap-1",children:[h.jsxs("div",{className:"flex pt-3 px-2 pb-2 w-full flex-col absolute md:bottom-3 bottom-16 z-99 gap-2 text-white",children:[h.jsxs("div",{className:"flex gap-2 items-center cursor-pointer transition-all",children:[h.jsx("img",{className:"h-8 rounded-full w-8 shrink-0 object-cover",src:Q.user.profile_image,alt:""}),h.jsx("p",{className:"cursor-pointer",onClick:()=>{console.log(Q),Q.user._id===a.id?w("/profile"):w(`/personprofile/${Q.user._id}`)},children:Q.user.username}),h.jsx("button",{onClick:Oe=>{Oe.stopPropagation(),f(Q.user._id,Q.isfollow)},className:`${Q.user.username===a.username?"hidden":""} px-3 py-1 text-sm border-2 active:scale-95 cursor-pointer transition-all duration-200 ease-in-out capitalize border-amber-50 rounded-lg text-white`,children:Q.isfollow?"following":"follow"})]}),h.jsxs("span",{className:"text-zinc-200 text-sm text-wrap w-[80%] cursor-pointer",children:[Q._id===j?Q.caption:Q.caption.slice(0,30),h.jsx("span",{className:"",children:Q.caption.length>30&&h.jsx("span",{className:Q._id===j?"text-blue-500 text-[13px] lowercase  self-end cursor-pointer active:scale-95 transition-all":"text-blue-400 text-[13px] lowercase  self-end cursor-pointer active:scale-95 transition-all",onClick:()=>le(Q._id),children:j===Q._id?" less":" ...more"})})]})]}),h.jsxs("div",{className:"flex flex-col w-full h-full text-white relative",children:[h.jsx("video",{ref:Oe=>S.current[Q._id]=Oe,"data-id":Q._id,muted:K,loop:!0,playsInline:!0,className:"h-screen w-full object-cover",src:Q.post_url}),h.jsx("div",{className:"absolute top-3 right-3 cursor-pointer",onClick:C,children:K?h.jsx("img",{src:"/mute.png",className:"h-6"}):h.jsx("img",{src:"/sound.png",className:"h-6"})}),h.jsxs("div",{className:"flex text-2xl gap-4 px-2 flex-col absolute bottom-20 md:bottom-10 right-2 text-white",children:[h.jsxs("div",{className:"flex flex-col gap-1 items-center cursor-pointer active:scale-95 transition-all",onClick:()=>s(Q._id,Q.islike),children:[Q.islike?h.jsx(j1,{className:"text-red-500"}):h.jsx(us,{}),h.jsx("p",{className:"text-[12px]",children:Q.likecount>0?Q.likecount:""})]}),h.jsxs("div",{className:"flex flex-col gap-1 items-center cursor-pointer active:scale-95 transition-all",onClick:()=>w(`/feed/${Q._id}`),children:[h.jsx("svg",{fill:"currentColor",height:"24",viewBox:"0 0 24 24",width:"24",children:h.jsx("path",{d:"M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z",fill:"none",stroke:"currentColor",strokeLinejoin:"round",strokeWidth:"2"})}),h.jsx("p",{className:"text-[12px]",children:Q.commentcount>0?Q.commentcount:""})]}),h.jsxs("div",{className:"flex flex-col gap-5 items-center",children:[h.jsxs("svg",{"aria-label":"Share",className:"x1lliihq x1n2onr6 xyb1xck cursor-pointer active:scale-95 transition-all",fill:"currentColor",height:"24",role:"img",viewBox:"0 0 24 24",width:"24",children:[h.jsx("title",{children:"Share"}),h.jsx("path",{d:"M13.973 20.046 21.77 6.928C22.8 5.195 21.55 3 19.535 3H4.466C2.138 3 .984 5.825 2.646 7.456l4.842 4.752 1.723 7.121c.548 2.266 3.571 2.721 4.762.717Z",fill:"none",stroke:"currentColor",strokeLinejoin:"round",strokeWidth:"2"}),h.jsx("line",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",x1:"7.488",x2:"15.515",y1:"12.208",y2:"7.641"})]}),h.jsx("div",{onClick:()=>c(Q._id,Q.save),children:Q.save?h.jsx(jf,{className:"cursor-pointer active:scale-95 transition-all"}):h.jsx(Nf,{className:"cursor-pointer active:scale-95 transition-all"})}),h.jsxs("svg",{"aria-label":"More",className:"x1lliihq x1n2onr6 xyb1xck cursor-pointer active:scale-95 transition-all",fill:"currentColor",height:"24",role:"img",viewBox:"0 0 24 24",width:"24",children:[h.jsx("title",{children:"More"}),h.jsx("circle",{cx:"12",cy:"12",r:"1.5"}),h.jsx("circle",{cx:"6",cy:"12",r:"1.5"}),h.jsx("circle",{cx:"18",cy:"12",r:"1.5"})]})]})]})]})]},Q._id))})},p3=()=>{const{storyHandle:a,story:r,followHandle:i,unfollowHandle:s}=Dn(),{user:c}=Kt(),f=St();N.useEffect(()=>{a()},[]);const{setloader:d}=dr(),[g,b]=N.useState(""),[m,x]=N.useState(!1),y=r?.filter(j=>j.username.toLowerCase().includes(g.toLowerCase()));return c?h.jsxs("div",{className:"min-h-screen w-full bg-[#0c0c0e] px-4 py-6",children:[h.jsxs("div",{className:"mb-6",children:[h.jsx("h1",{className:"text-white text-2xl font-bold tracking-tight",children:"Discover People"}),h.jsx("p",{className:"text-zinc-500 text-sm mt-0.5",children:"Search and connect with others"})]}),h.jsxs("div",{className:"relative mb-6",children:[h.jsx("div",{className:`absolute -inset-[1.5px] rounded-2xl transition-opacity duration-300 ${m?"opacity-100":"opacity-0"}`,style:{background:"linear-gradient(135deg, #6366f1 0%, #a855f7 50%, #ec4899 100%)",zIndex:0}}),h.jsxs("div",{className:"relative z-10 flex items-center bg-[#18181b] rounded-2xl px-4 py-3 gap-3",children:[h.jsx(lf,{className:`text-base flex-shrink-0 transition-colors duration-200 ${m?"text-indigo-400":"text-zinc-500"}`}),h.jsx("input",{type:"text",placeholder:"Search users…",value:g,onChange:j=>b(j.target.value),onFocus:()=>x(!0),onBlur:()=>x(!1),className:"flex-1 bg-transparent text-white text-base placeholder-zinc-600 outline-none"}),g&&h.jsx("button",{onClick:()=>b(""),className:"text-zinc-500 hover:text-white text-xs transition-colors duration-150",children:"✕"})]})]}),g&&y?.length>0&&h.jsxs("p",{className:"text-zinc-500 text-xs mb-3 px-1",children:[y?.length," result",y?.length!==1?"s":""," for"," ",h.jsxs("span",{className:"text-indigo-400 font-medium",children:['"',g,'"']})]}),y?.length>0?h.jsx("div",{className:"flex flex-col gap-2",children:y?.map((j,z)=>h.jsxs("div",{className:"group flex items-center justify-between gap-3 bg-[#18181b] hover:bg-[#1f1f24] border border-[#27272a] hover:border-[#3f3f46] rounded-2xl px-4 py-3 transition-all duration-200",style:{animation:"fadeSlideIn 0.3s ease both",animationDelay:`${z*40}ms`},children:[h.jsxs("div",{className:"flex items-center gap-3 flex-1 min-w-0 cursor-pointer",onClick:()=>c.id===j._id?f("/profile"):f(`/personprofile/${j._id}`),children:[h.jsxs("div",{className:"relative flex-shrink-0",children:[h.jsx("div",{className:"absolute -inset-[2px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200",style:{background:"linear-gradient(135deg, #6366f1, #ec4899)"}}),h.jsx("img",{src:j.profile_image,alt:j.username,className:"relative h-11 w-11 rounded-full object-cover border-2 border-[#27272a]"}),h.jsx("span",{className:"absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full bg-emerald-500 border-2 border-[#18181b]"})]}),h.jsxs("div",{className:"min-w-0",children:[h.jsx("p",{className:"text-white font-semibold text-sm leading-tight truncate group-hover:text-indigo-300 transition-colors duration-150",children:j.username}),h.jsxs("p",{className:"text-zinc-600 text-xs mt-0.5",children:["@",j.username.toLowerCase().replace(/\s+/g,"_")]})]})]}),j._id!==c?.id&&h.jsx("button",{onClick:()=>j.isfollowing?s(j._id):i(j._id),className:`
                    flex-shrink-0 text-xs font-semibold px-4 py-2 rounded-xl
                    transition-all duration-200 active:scale-95
                    ${j.isfollowing?"bg-[#27272a] text-zinc-400 border border-[#3f3f46] hover:bg-red-500/10 hover:text-red-400 hover:border-red-500/30":"text-white border border-transparent"}
                  `,style:j.isfollowing?{}:{background:"linear-gradient(135deg, #6366f1 0%, #a855f7 100%)",boxShadow:"0 0 16px rgba(99,102,241,0.35)"},children:j.isfollowing?"Following":"Follow"}),j._id===c.id&&h.jsx("span",{className:"flex-shrink-0 text-[10px] font-semibold px-3 py-1.5 rounded-xl bg-[#27272a] text-zinc-500 border border-[#3f3f46] tracking-wide uppercase",children:"You"})]},j._id))}):h.jsxs("div",{className:"flex flex-col items-center justify-center h-[60dvh] gap-4",children:[h.jsx("div",{className:"h-16 w-16 rounded-2xl flex items-center justify-center",style:{background:"linear-gradient(135deg, #1e1e2e 0%, #27272a 100%)",border:"1px solid #3f3f46"},children:h.jsx(lf,{className:"text-zinc-600 text-2xl"})}),h.jsxs("div",{className:"text-center",children:[h.jsx("p",{className:"text-white font-semibold text-lg",children:g?"No results found":"Find someone"}),h.jsx("p",{className:"text-zinc-600 text-sm mt-1",children:g?`No users match "${g}"`:"Type a username to search"})]})]}),h.jsx("style",{children:`
        @keyframes fadeSlideIn {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `})]}):d(!0)},m3=()=>{const a=St(),r=()=>{a(-1)};let i=Pm();if(console.log(i),i.status===404)return h.jsx(h.Fragment,{children:h.jsxs("div",{className:"h-full w-full relative ",children:[h.jsx("img",{src:"https://www.digitalmesh.com/blog/wp-content/uploads/2020/05/404-error.jpg",className:"h-full w-full",alt:""}),h.jsxs("div",{className:"absolute flex gap-3 bottom-10 w-full justify-center",children:[h.jsx("button",{onClick:r,className:"bg-blue-500 text-white px-4 py-2 rounded-lg",children:"previous page"}),h.jsx(yf,{className:"bg-blue-500 text-white px-4 py-2 rounded-lg",to:"/",children:"go to home page"})]})]})})},g3=[{count:1,emoji:"☕",label:"One Coffee",price:3},{count:3,emoji:"☕☕☕",label:"Three Coffees",price:9},{count:5,emoji:"🫖",label:"A Whole Pot",price:15}],b3=[{name:"GitHub",handle:"Fardeen khan",href:"https://github.com/fardeen-99",icon:h.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",className:"w-5 h-5",children:h.jsx("path",{d:"M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"})}),color:"hover:text-white hover:bg-gray-900"},{name:"LinkedIn",handle:"Mohd Fardeen",href:"https://www.linkedin.com/in/mohd-fardeen-b31307358",icon:h.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",className:"w-5 h-5",children:h.jsx("path",{d:"M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"})}),color:"hover:text-white hover:bg-blue-700"},{name:"Instagram",handle:"Fardeen_x_khan",href:"https://www.instagram.com/fardeen_x_khan/",icon:h.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",className:"w-5 h-5",children:h.jsx("path",{d:"M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"})}),color:"hover:text-white hover:bg-gradient-to-br hover:from-purple-600 hover:via-pink-500 hover:to-orange-400"}];function v3(){const{HandleFeedBack:a}=Dn(),[r,i]=N.useState(1),[s,c]=N.useState(""),[f,d]=N.useState(""),[g,b]=N.useState(!1),[m,x]=N.useState(!1),[y,j]=N.useState([0,0,0]);St(),N.useEffect(()=>{setTimeout(()=>x(!0),100);const w=setInterval(()=>{j([Math.random(),Math.random(),Math.random()])},2e3);return()=>clearInterval(w)},[]);const z=async w=>{w.preventDefault(),await a(s,f),b(!0),c(""),d(""),await new Promise(S=>setTimeout(S,4e3)),b(!1)};return g3.find(w=>w.count===r),h.jsxs("div",{className:"min-h-screen flex items-center justify-center p-4 relative overflow-hidden",style:{background:"linear-gradient(135deg, #1a0a00 0%, #2d1200 40%, #1a0a00 100%)",fontFamily:"'Georgia', serif"},children:[h.jsx("div",{className:"fixed inset-0 opacity-20 pointer-events-none",style:{backgroundImage:`url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,backgroundSize:"150px"}}),h.jsxs("div",{className:"fixed inset-0 pointer-events-none",children:[h.jsx("div",{className:"absolute rounded-full blur-3xl opacity-20",style:{width:"600px",height:"600px",background:"radial-gradient(circle, #f59e0b, transparent)",top:"-100px",right:"-100px"}}),h.jsx("div",{className:"absolute rounded-full blur-3xl opacity-10",style:{width:"500px",height:"500px",background:"radial-gradient(circle, #d97706, transparent)",bottom:"-50px",left:"-50px"}})]}),h.jsx("div",{className:"relative w-full max-w-md transition-all duration-1000",style:{opacity:m?1:0,transform:m?"translateY(0)":"translateY(32px)"},children:h.jsxs("div",{className:"rounded-3xl overflow-hidden",style:{background:"linear-gradient(145deg, rgba(45,20,5,0.97), rgba(30,12,2,0.98))",border:"1px solid rgba(251,191,36,0.15)",boxShadow:"0 40px 80px rgba(0,0,0,0.8), inset 0 1px 0 rgba(251,191,36,0.1)"},children:[h.jsxs("div",{className:"px-8 pt-10 pb-6 text-center relative",style:{borderBottom:"1px solid rgba(251,191,36,0.08)"},children:[h.jsxs("div",{className:"relative inline-block mb-4",children:[h.jsx("div",{className:"flex justify-center gap-3 absolute -top-6 left-1/2 -translate-x-1/2",children:[0,1,2].map(w=>h.jsx("div",{className:"w-0.5 rounded-full",style:{height:"20px",background:"linear-gradient(to top, rgba(251,191,36,0.6), transparent)",animation:`steamRise ${1.5+w*.3}s ease-in-out infinite`,animationDelay:`${w*.4}s`,transform:`scaleY(${.6+y[w]*.4})`,transition:"transform 2s ease-in-out"}},w))}),h.jsx("div",{className:"text-6xl select-none",style:{filter:"drop-shadow(0 4px 12px rgba(251,191,36,0.4))"},children:"☕"})]}),h.jsx("h1",{className:"text-3xl font-bold mb-1",style:{color:"#fbbf24",letterSpacing:"-0.5px",textShadow:"0 2px 20px rgba(251,191,36,0.3)"},children:"Buy Me a Coffee"}),h.jsx("p",{className:"text-sm",style:{color:"rgba(251,191,36,0.5)",letterSpacing:"2px",textTransform:"uppercase"},children:"Support my work"}),h.jsx("div",{className:"flex justify-center mt-5",children:h.jsx("img",{src:"/fardeen.jpg",className:"h-20 w-20 object-cover rounded-full shrink-0 ",alt:""})}),h.jsx("p",{className:"mt-3 text-base",style:{color:"rgba(255,235,200,0.85)"},children:"Hey there! I'm a developer who loves building And learning new things. If my work has impress you, consider buying me a coffee! ☕"})]}),h.jsxs("div",{className:"px-8 py-6",style:{borderBottom:"1px solid rgba(251,191,36,0.08)"},children:[h.jsx("p",{className:"text-xs mb-6",style:{color:"rgba(251,191,36,0.4)",letterSpacing:"2px",textTransform:"uppercase"},children:"What you Like The Most Comment"}),h.jsx("input",{type:"text",required:!0,placeholder:"Your name ",value:s,onChange:w=>c(w.target.value),className:"w-full rounded-xl px-4 py-3 mb-3 text-sm outline-none transition-all duration-300",style:{background:"rgba(251,191,36,0.05)",border:"1px solid rgba(251,191,36,0.12)",color:"rgba(255,235,200,0.9)",caretColor:"#f59e0b"},onFocus:w=>w.target.style.borderColor="rgba(251,191,36,0.4)",onBlur:w=>w.target.style.borderColor="rgba(251,191,36,0.12)"}),h.jsx("textarea",{required:!0,placeholder:"Leave a kind message...",value:f,onChange:w=>d(w.target.value),rows:3,className:"w-full rounded-xl px-4 py-3 text-sm outline-none resize-none transition-all duration-300",style:{background:"rgba(251,191,36,0.05)",border:"1px solid rgba(251,191,36,0.12)",color:"rgba(255,235,200,0.9)",caretColor:"#f59e0b"},onFocus:w=>w.target.style.borderColor="rgba(251,191,36,0.4)",onBlur:w=>w.target.style.borderColor="rgba(251,191,36,0.12)"})]}),h.jsx("div",{className:"px-8 py-6",style:{borderBottom:"1px solid rgba(251,191,36,0.08)"},children:h.jsx("button",{onClick:w=>{z(w)},className:"w-full rounded-2xl py-4 text-base font-bold transition-all duration-300 relative overflow-hidden cursor-pointer",style:{background:g?"linear-gradient(135deg, #16a34a, #15803d)":"linear-gradient(135deg, #f59e0b, #d97706)",color:"#ffff",transform:"scale(1)",letterSpacing:"0.5px"},onMouseEnter:w=>w.currentTarget.style.transform="scale(1.02)",onMouseLeave:w=>w.currentTarget.style.transform="scale(1)",children:g?h.jsx("span",{children:"✓ Thank you so much! 🎉"}):h.jsx("span",{children:"Feedback And Support"})})}),h.jsxs("div",{className:"px-8 py-7",children:[h.jsx("p",{className:"text-xs text-center mb-5",style:{color:"rgba(251,191,36,0.35)",letterSpacing:"2px",textTransform:"uppercase"},children:"Find me online"}),h.jsx("div",{className:"flex flex-col gap-3",children:b3.map(w=>h.jsxs("a",{href:w.href,target:"_blank",rel:"noopener noreferrer",className:`flex items-center gap-4 rounded-xl px-4 py-3 transition-all duration-300 group ${w.color}`,style:{background:"rgba(251,191,36,0.04)",border:"1px solid rgba(251,191,36,0.08)",color:"rgba(255,235,200,0.7)",textDecoration:"none"},onMouseEnter:S=>{S.currentTarget.style.borderColor="rgba(251,191,36,0.2)",S.currentTarget.style.transform="translateX(4px)"},onMouseLeave:S=>{S.currentTarget.style.borderColor="rgba(251,191,36,0.08)",S.currentTarget.style.transform="translateX(0)"},children:[h.jsx("div",{className:"w-9 h-9 rounded-lg flex items-center justify-center shrink-0",style:{background:"rgba(251,191,36,0.08)"},children:w.icon}),h.jsxs("div",{children:[h.jsx("div",{className:"text-xs font-semibold",style:{color:"rgba(251,191,36,0.6)",letterSpacing:"1px",textTransform:"uppercase"},children:w.name}),h.jsx("div",{className:"text-[12px] ",style:{color:"rgba(255,235,200,0.8)"},children:w.handle})]}),h.jsx("div",{className:"ml-auto opacity-40 group-hover:opacity-80 transition-opacity",children:h.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",className:"w-4 h-4",children:h.jsx("path",{d:"M7 17L17 7M17 7H7M17 7v10"})})})]},w.name))})]}),h.jsx("div",{className:"px-8 py-4 text-center text-xs",style:{color:"rgba(251,191,36,0.25)",borderTop:"1px solid rgba(251,191,36,0.06)"},children:"Crafted with ❤️ & ☕ — DevGram"})]})}),h.jsx("style",{children:`
        @keyframes steamRise {
          0%, 100% { opacity: 0.3; transform: translateY(0) scaleX(1); }
          50% { opacity: 0.8; transform: translateY(-8px) scaleX(1.5); }
        }
        input::placeholder, textarea::placeholder {
          color: rgba(251,191,36,0.25);
        }
      `})]})}const y3=()=>{const a=f2([{path:"/login",element:h.jsx(r5,{})},{path:"/register",element:h.jsx(i5,{})},{path:"/",element:h.jsx(l3,{}),errorElement:h.jsx(m3,{}),children:[{path:"/",element:h.jsx(e3,{children:h.jsx(I5,{})})},{path:"/create",element:h.jsx(r3,{})},{path:"/save",element:h.jsx(i3,{})},{path:"/profile",element:h.jsx(s3,{})},{path:"/personprofile/:id",element:h.jsx(d3,{})},{path:"/reel",element:h.jsx(h3,{})},{path:"/search",element:h.jsx(p3,{})}]},{path:"/feed/:id",element:h.jsx(u3,{})},{path:"/profileUpdate/:id",element:h.jsx(c3,{})},{path:"/buy_A_coffee",element:h.jsx(v3,{})}]);return h.jsx(E2,{router:a})};$b.createRoot(document.getElementById("root")).render(h.jsx(a5,{children:h.jsx(l5,{children:h.jsxs(p5,{children:[h.jsx(C1,{}),h.jsx(y3,{})]})})}));
