function s(n,t){q(n)&&(n="100%");var a=N(n);return n=t===360?n:Math.min(t,Math.max(0,parseFloat(n))),a&&(n=parseInt(String(n*t),10)/100),Math.abs(n-t)<1e-6?1:(t===360?n=(n<0?n%t+t:n%t)/parseFloat(String(t)):n=n%t/parseFloat(String(t)),n)}function b(n){return Math.min(1,Math.max(0,n))}function q(n){return typeof n=="string"&&n.indexOf(".")!==-1&&parseFloat(n)===1}function N(n){return typeof n=="string"&&n.indexOf("%")!==-1}function M(n){return n=parseFloat(n),(isNaN(n)||n<0||n>1)&&(n=1),n}function p(n){return n<=1?"".concat(Number(n)*100,"%"):n}function l(n){return n.length===1?"0"+n:String(n)}function W(n,t,a){return{r:s(n,255)*255,g:s(t,255)*255,b:s(a,255)*255}}function w(n,t,a){n=s(n,255),t=s(t,255),a=s(a,255);var e=Math.max(n,t,a),r=Math.min(n,t,a),o=0,i=0,h=(e+r)/2;if(e===r)i=0,o=0;else{var c=e-r;switch(i=h>.5?c/(2-e-r):c/(e+r),e){case n:o=(t-a)/c+(t<a?6:0);break;case t:o=(a-n)/c+2;break;case a:o=(n-t)/c+4;break}o/=6}return{h:o,s:i,l:h}}function v(n,t,a){return a<0&&(a+=1),a>1&&(a-=1),a<1/6?n+(t-n)*(6*a):a<1/2?t:a<2/3?n+(t-n)*(2/3-a)*6:n}function E(n,t,a){var e,r,o;if(n=s(n,360),t=s(t,100),a=s(a,100),t===0)r=a,o=a,e=a;else{var i=a<.5?a*(1+t):a+t-a*t,h=2*a-i;e=v(h,i,n+1/3),r=v(h,i,n),o=v(h,i,n-1/3)}return{r:e*255,g:r*255,b:o*255}}function k(n,t,a){n=s(n,255),t=s(t,255),a=s(a,255);var e=Math.max(n,t,a),r=Math.min(n,t,a),o=0,i=e,h=e-r,c=e===0?0:h/e;if(e===r)o=0;else{switch(e){case n:o=(t-a)/h+(t<a?6:0);break;case t:o=(a-n)/h+2;break;case a:o=(n-t)/h+4;break}o/=6}return{h:o,s:c,v:i}}function j(n,t,a){n=s(n,360)*6,t=s(t,100),a=s(a,100);var e=Math.floor(n),r=n-e,o=a*(1-t),i=a*(1-r*t),h=a*(1-(1-r)*t),c=e%6,H=[a,i,o,o,h,a][c],R=[h,a,a,i,o,o][c],F=[o,o,h,a,a,i][c];return{r:H*255,g:R*255,b:F*255}}function S(n,t,a,e){var r=[l(Math.round(n).toString(16)),l(Math.round(t).toString(16)),l(Math.round(a).toString(16))];return e&&r[0].startsWith(r[0].charAt(1))&&r[1].startsWith(r[1].charAt(1))&&r[2].startsWith(r[2].charAt(1))?r[0].charAt(0)+r[1].charAt(0)+r[2].charAt(0):r.join("")}function I(n,t,a,e,r){var o=[l(Math.round(n).toString(16)),l(Math.round(t).toString(16)),l(Math.round(a).toString(16)),l(O(e))];return r&&o[0].startsWith(o[0].charAt(1))&&o[1].startsWith(o[1].charAt(1))&&o[2].startsWith(o[2].charAt(1))&&o[3].startsWith(o[3].charAt(1))?o[0].charAt(0)+o[1].charAt(0)+o[2].charAt(0)+o[3].charAt(0):o.join("")}function O(n){return Math.round(parseFloat(n)*255).toString(16)}function A(n){return f(n)/255}function f(n){return parseInt(n,16)}function T(n){return{r:n>>16,g:(n&65280)>>8,b:n&255}}var m={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",goldenrod:"#daa520",gold:"#ffd700",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavenderblush:"#fff0f5",lavender:"#e6e6fa",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"};function P(n){var t={r:0,g:0,b:0},a=1,e=null,r=null,o=null,i=!1,h=!1;return typeof n=="string"&&(n=C(n)),typeof n=="object"&&(g(n.r)&&g(n.g)&&g(n.b)?(t=W(n.r,n.g,n.b),i=!0,h=String(n.r).substr(-1)==="%"?"prgb":"rgb"):g(n.h)&&g(n.s)&&g(n.v)?(e=p(n.s),r=p(n.v),t=j(n.h,e,r),i=!0,h="hsv"):g(n.h)&&g(n.s)&&g(n.l)&&(e=p(n.s),o=p(n.l),t=E(n.h,e,o),i=!0,h="hsl"),Object.prototype.hasOwnProperty.call(n,"a")&&(a=n.a)),a=M(a),{ok:i,format:n.format||h,r:Math.min(255,Math.max(t.r,0)),g:Math.min(255,Math.max(t.g,0)),b:Math.min(255,Math.max(t.b,0)),a}}var B="[-\\+]?\\d+%?",$="[-\\+]?\\d*\\.\\d+%?",d="(?:".concat($,")|(?:").concat(B,")"),y="[\\s|\\(]+(".concat(d,")[,|\\s]+(").concat(d,")[,|\\s]+(").concat(d,")\\s*\\)?"),x="[\\s|\\(]+(".concat(d,")[,|\\s]+(").concat(d,")[,|\\s]+(").concat(d,")[,|\\s]+(").concat(d,")\\s*\\)?"),u={CSS_UNIT:new RegExp(d),rgb:new RegExp("rgb"+y),rgba:new RegExp("rgba"+x),hsl:new RegExp("hsl"+y),hsla:new RegExp("hsla"+x),hsv:new RegExp("hsv"+y),hsva:new RegExp("hsva"+x),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/};function C(n){if(n=n.trim().toLowerCase(),n.length===0)return!1;var t=!1;if(m[n])n=m[n],t=!0;else if(n==="transparent")return{r:0,g:0,b:0,a:0,format:"name"};var a=u.rgb.exec(n);return a?{r:a[1],g:a[2],b:a[3]}:(a=u.rgba.exec(n),a?{r:a[1],g:a[2],b:a[3],a:a[4]}:(a=u.hsl.exec(n),a?{h:a[1],s:a[2],l:a[3]}:(a=u.hsla.exec(n),a?{h:a[1],s:a[2],l:a[3],a:a[4]}:(a=u.hsv.exec(n),a?{h:a[1],s:a[2],v:a[3]}:(a=u.hsva.exec(n),a?{h:a[1],s:a[2],v:a[3],a:a[4]}:(a=u.hex8.exec(n),a?{r:f(a[1]),g:f(a[2]),b:f(a[3]),a:A(a[4]),format:t?"name":"hex8"}:(a=u.hex6.exec(n),a?{r:f(a[1]),g:f(a[2]),b:f(a[3]),format:t?"name":"hex"}:(a=u.hex4.exec(n),a?{r:f(a[1]+a[1]),g:f(a[2]+a[2]),b:f(a[3]+a[3]),a:A(a[4]+a[4]),format:t?"name":"hex8"}:(a=u.hex3.exec(n),a?{r:f(a[1]+a[1]),g:f(a[2]+a[2]),b:f(a[3]+a[3]),format:t?"name":"hex"}:!1)))))))))}function g(n){return!!u.CSS_UNIT.exec(String(n))}var D=function(){function n(t,a){t===void 0&&(t=""),a===void 0&&(a={});var e;if(t instanceof n)return t;typeof t=="number"&&(t=T(t)),this.originalInput=t;var r=P(t);this.originalInput=t,this.r=r.r,this.g=r.g,this.b=r.b,this.a=r.a,this.roundA=Math.round(100*this.a)/100,this.format=(e=a.format)!==null&&e!==void 0?e:r.format,this.gradientType=a.gradientType,this.r<1&&(this.r=Math.round(this.r)),this.g<1&&(this.g=Math.round(this.g)),this.b<1&&(this.b=Math.round(this.b)),this.isValid=r.ok}return n.prototype.isDark=function(){return this.getBrightness()<128},n.prototype.isLight=function(){return!this.isDark()},n.prototype.getBrightness=function(){var t=this.toRgb();return(t.r*299+t.g*587+t.b*114)/1e3},n.prototype.getLuminance=function(){var t=this.toRgb(),a,e,r,o=t.r/255,i=t.g/255,h=t.b/255;return o<=.03928?a=o/12.92:a=Math.pow((o+.055)/1.055,2.4),i<=.03928?e=i/12.92:e=Math.pow((i+.055)/1.055,2.4),h<=.03928?r=h/12.92:r=Math.pow((h+.055)/1.055,2.4),.2126*a+.7152*e+.0722*r},n.prototype.getAlpha=function(){return this.a},n.prototype.setAlpha=function(t){return this.a=M(t),this.roundA=Math.round(100*this.a)/100,this},n.prototype.isMonochrome=function(){var t=this.toHsl().s;return t===0},n.prototype.toHsv=function(){var t=k(this.r,this.g,this.b);return{h:t.h*360,s:t.s,v:t.v,a:this.a}},n.prototype.toHsvString=function(){var t=k(this.r,this.g,this.b),a=Math.round(t.h*360),e=Math.round(t.s*100),r=Math.round(t.v*100);return this.a===1?"hsv(".concat(a,", ").concat(e,"%, ").concat(r,"%)"):"hsva(".concat(a,", ").concat(e,"%, ").concat(r,"%, ").concat(this.roundA,")")},n.prototype.toHsl=function(){var t=w(this.r,this.g,this.b);return{h:t.h*360,s:t.s,l:t.l,a:this.a}},n.prototype.toHslString=function(){var t=w(this.r,this.g,this.b),a=Math.round(t.h*360),e=Math.round(t.s*100),r=Math.round(t.l*100);return this.a===1?"hsl(".concat(a,", ").concat(e,"%, ").concat(r,"%)"):"hsla(".concat(a,", ").concat(e,"%, ").concat(r,"%, ").concat(this.roundA,")")},n.prototype.toHex=function(t){return t===void 0&&(t=!1),S(this.r,this.g,this.b,t)},n.prototype.toHexString=function(t){return t===void 0&&(t=!1),"#"+this.toHex(t)},n.prototype.toHex8=function(t){return t===void 0&&(t=!1),I(this.r,this.g,this.b,this.a,t)},n.prototype.toHex8String=function(t){return t===void 0&&(t=!1),"#"+this.toHex8(t)},n.prototype.toHexShortString=function(t){return t===void 0&&(t=!1),this.a===1?this.toHexString(t):this.toHex8String(t)},n.prototype.toRgb=function(){return{r:Math.round(this.r),g:Math.round(this.g),b:Math.round(this.b),a:this.a}},n.prototype.toRgbString=function(){var t=Math.round(this.r),a=Math.round(this.g),e=Math.round(this.b);return this.a===1?"rgb(".concat(t,", ").concat(a,", ").concat(e,")"):"rgba(".concat(t,", ").concat(a,", ").concat(e,", ").concat(this.roundA,")")},n.prototype.toPercentageRgb=function(){var t=function(a){return"".concat(Math.round(s(a,255)*100),"%")};return{r:t(this.r),g:t(this.g),b:t(this.b),a:this.a}},n.prototype.toPercentageRgbString=function(){var t=function(a){return Math.round(s(a,255)*100)};return this.a===1?"rgb(".concat(t(this.r),"%, ").concat(t(this.g),"%, ").concat(t(this.b),"%)"):"rgba(".concat(t(this.r),"%, ").concat(t(this.g),"%, ").concat(t(this.b),"%, ").concat(this.roundA,")")},n.prototype.toName=function(){if(this.a===0)return"transparent";if(this.a<1)return!1;for(var t="#"+S(this.r,this.g,this.b,!1),a=0,e=Object.entries(m);a<e.length;a++){var r=e[a],o=r[0],i=r[1];if(t===i)return o}return!1},n.prototype.toString=function(t){var a=!!t;t=t??this.format;var e=!1,r=this.a<1&&this.a>=0,o=!a&&r&&(t.startsWith("hex")||t==="name");return o?t==="name"&&this.a===0?this.toName():this.toRgbString():(t==="rgb"&&(e=this.toRgbString()),t==="prgb"&&(e=this.toPercentageRgbString()),(t==="hex"||t==="hex6")&&(e=this.toHexString()),t==="hex3"&&(e=this.toHexString(!0)),t==="hex4"&&(e=this.toHex8String(!0)),t==="hex8"&&(e=this.toHex8String()),t==="name"&&(e=this.toName()),t==="hsl"&&(e=this.toHslString()),t==="hsv"&&(e=this.toHsvString()),e||this.toHexString())},n.prototype.toNumber=function(){return(Math.round(this.r)<<16)+(Math.round(this.g)<<8)+Math.round(this.b)},n.prototype.clone=function(){return new n(this.toString())},n.prototype.lighten=function(t){t===void 0&&(t=10);var a=this.toHsl();return a.l+=t/100,a.l=b(a.l),new n(a)},n.prototype.brighten=function(t){t===void 0&&(t=10);var a=this.toRgb();return a.r=Math.max(0,Math.min(255,a.r-Math.round(255*-(t/100)))),a.g=Math.max(0,Math.min(255,a.g-Math.round(255*-(t/100)))),a.b=Math.max(0,Math.min(255,a.b-Math.round(255*-(t/100)))),new n(a)},n.prototype.darken=function(t){t===void 0&&(t=10);var a=this.toHsl();return a.l-=t/100,a.l=b(a.l),new n(a)},n.prototype.tint=function(t){return t===void 0&&(t=10),this.mix("white",t)},n.prototype.shade=function(t){return t===void 0&&(t=10),this.mix("black",t)},n.prototype.desaturate=function(t){t===void 0&&(t=10);var a=this.toHsl();return a.s-=t/100,a.s=b(a.s),new n(a)},n.prototype.saturate=function(t){t===void 0&&(t=10);var a=this.toHsl();return a.s+=t/100,a.s=b(a.s),new n(a)},n.prototype.greyscale=function(){return this.desaturate(100)},n.prototype.spin=function(t){var a=this.toHsl(),e=(a.h+t)%360;return a.h=e<0?360+e:e,new n(a)},n.prototype.mix=function(t,a){a===void 0&&(a=50);var e=this.toRgb(),r=new n(t).toRgb(),o=a/100,i={r:(r.r-e.r)*o+e.r,g:(r.g-e.g)*o+e.g,b:(r.b-e.b)*o+e.b,a:(r.a-e.a)*o+e.a};return new n(i)},n.prototype.analogous=function(t,a){t===void 0&&(t=6),a===void 0&&(a=30);var e=this.toHsl(),r=360/a,o=[this];for(e.h=(e.h-(r*t>>1)+720)%360;--t;)e.h=(e.h+r)%360,o.push(new n(e));return o},n.prototype.complement=function(){var t=this.toHsl();return t.h=(t.h+180)%360,new n(t)},n.prototype.monochromatic=function(t){t===void 0&&(t=6);for(var a=this.toHsv(),e=a.h,r=a.s,o=a.v,i=[],h=1/t;t--;)i.push(new n({h:e,s:r,v:o})),o=(o+h)%1;return i},n.prototype.splitcomplement=function(){var t=this.toHsl(),a=t.h;return[this,new n({h:(a+72)%360,s:t.s,l:t.l}),new n({h:(a+216)%360,s:t.s,l:t.l})]},n.prototype.onBackground=function(t){var a=this.toRgb(),e=new n(t).toRgb(),r=a.a+e.a*(1-a.a);return new n({r:(a.r*a.a+e.r*e.a*(1-a.a))/r,g:(a.g*a.a+e.g*e.a*(1-a.a))/r,b:(a.b*a.a+e.b*e.a*(1-a.a))/r,a:r})},n.prototype.triad=function(){return this.polyad(3)},n.prototype.tetrad=function(){return this.polyad(4)},n.prototype.polyad=function(t){for(var a=this.toHsl(),e=a.h,r=[this],o=360/t,i=1;i<t;i++)r.push(new n({h:(e+i*o)%360,s:a.s,l:a.l}));return r},n.prototype.equals=function(t){return this.toRgbString()===new n(t).toRgbString()},n}();export{D as T};
