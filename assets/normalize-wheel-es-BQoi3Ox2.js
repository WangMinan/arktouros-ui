var v=!1,o,l,f,u,d,N,c,s,p,m,M,w,x,F,D;function a(){if(!v){v=!0;var e=navigator.userAgent,n=/(?:MSIE.(\d+\.\d+))|(?:(?:Firefox|GranParadiso|Iceweasel).(\d+\.\d+))|(?:Opera(?:.+Version.|.)(\d+\.\d+))|(?:AppleWebKit.(\d+(?:\.\d+)?))|(?:Trident\/\d+\.\d+.*rv:(\d+\.\d+))/.exec(e),t=/(Mac OS X)|(Windows)|(Linux)/.exec(e);if(w=/\b(iPhone|iP[ao]d)/.exec(e),x=/\b(iP[ao]d)/.exec(e),m=/Android/i.exec(e),F=/FBAN\/\w+;/i.exec(e),D=/Mobile/i.exec(e),M=!!/Win64/.exec(e),n){o=n[1]?parseFloat(n[1]):n[5]?parseFloat(n[5]):NaN,o&&document&&document.documentMode&&(o=document.documentMode);var i=/(?:Trident\/(\d+.\d+))/.exec(e);N=i?parseFloat(i[1])+4:o,l=n[2]?parseFloat(n[2]):NaN,f=n[3]?parseFloat(n[3]):NaN,u=n[4]?parseFloat(n[4]):NaN,u?(n=/(?:Chrome\/(\d+\.\d+))/.exec(e),d=n&&n[1]?parseFloat(n[1]):NaN):d=NaN}else o=l=f=d=u=NaN;if(t){if(t[1]){var r=/(?:Mac OS X (\d+(?:[._]\d+)?))/.exec(e);c=r?parseFloat(r[1].replace("_",".")):!0}else c=!1;s=!!t[2],p=!!t[3]}else c=s=p=!1}}var h={ie:function(){return a()||o},ieCompatibilityMode:function(){return a()||N>o},ie64:function(){return h.ie()&&M},firefox:function(){return a()||l},opera:function(){return a()||f},webkit:function(){return a()||u},safari:function(){return h.webkit()},chrome:function(){return a()||d},windows:function(){return a()||s},osx:function(){return a()||c},linux:function(){return a()||p},iphone:function(){return a()||w},mobile:function(){return a()||w||x||m||D},nativeApp:function(){return a()||F},android:function(){return a()||m},ipad:function(){return a()||x}},S=h,y=!!(typeof window<"u"&&window.document&&window.document.createElement),I={canUseDOM:y},b=I,O;b.canUseDOM&&(O=document.implementation&&document.implementation.hasFeature&&document.implementation.hasFeature("","")!==!0);function P(e,n){if(!b.canUseDOM||n&&!("addEventListener"in document))return!1;var t="on"+e,i=t in document;if(!i){var r=document.createElement("div");r.setAttribute(t,"return;"),i=typeof r[t]=="function"}return!i&&O&&e==="wheel"&&(i=document.implementation.hasFeature("Events.wheel","3.0")),i}var T=P,X=10,A=40,Y=800;function E(e){var n=0,t=0,i=0,r=0;return"detail"in e&&(t=e.detail),"wheelDelta"in e&&(t=-e.wheelDelta/120),"wheelDeltaY"in e&&(t=-e.wheelDeltaY/120),"wheelDeltaX"in e&&(n=-e.wheelDeltaX/120),"axis"in e&&e.axis===e.HORIZONTAL_AXIS&&(n=t,t=0),i=n*X,r=t*X,"deltaY"in e&&(r=e.deltaY),"deltaX"in e&&(i=e.deltaX),(i||r)&&e.deltaMode&&(e.deltaMode==1?(i*=A,r*=A):(i*=Y,r*=Y)),i&&!n&&(n=i<1?-1:1),r&&!t&&(t=r<1?-1:1),{spinX:n,spinY:t,pixelX:i,pixelY:r}}E.getEventType=function(){return S.firefox()?"DOMMouseScroll":T("wheel")?"wheel":"mousewheel"};var U=E;/**
* Checks if an event is supported in the current execution environment.
*
* NOTE: This will not work correctly for non-generic events such as `change`,
* `reset`, `load`, `error`, and `select`.
*
* Borrows from Modernizr.
*
* @param {string} eventNameSuffix Event name, e.g. "click".
* @param {?boolean} capture Check if the capture phase is supported.
* @return {boolean} True if the event is supported.
* @internal
* @license Modernizr 3.0.0pre (Custom Build) | MIT
*/export{U as Y};
