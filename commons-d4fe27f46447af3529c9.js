(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"+49W":function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n("dI71"),a=n("q1tI"),o=n.n(a),i=n("Wbzz"),c=function(e){function t(t){var r;return(r=e.call(this,t)||this).About=n("tPCx"),r.AboutH=n("SCGC"),r.Contact=n("Vmdh"),r.ContactH=n("kCSB"),r.Home=n("7n1l"),r.HomeH=n("Pkdq"),r.Projects=n("1mzq"),r.toggleNav=function(){var e=document.getElementsByClassName("nav")[0],t=document.getElementsByClassName("nav__button")[0];e.classList.contains("nav_showed")?(e.classList.remove("nav_showed"),t.classList.remove("opened_nav")):(e.classList.add("nav_showed"),t.classList.add("opened_nav"))},r.state={width:0},r}Object(r.a)(t,e);var a=t.prototype;return a.componentDidMount=function(){this.setState({width:window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth})},a.render=function(){return o.a.createElement("div",null,o.a.createElement("button",{className:"nav__button",onClick:this.toggleNav.bind(this)},o.a.createElement("div",{className:"nav__button-border"}),o.a.createElement("div",{className:"nav__burger-box"},o.a.createElement("div",{className:"nav__burger"}))),o.a.createElement("nav",{className:"nav"},o.a.createElement("div",{className:"nav__left"},o.a.createElement("div",{className:"nav__left-back"}),o.a.createElement(i.Link,{className:"nav__left-link",to:this.props.left.to},"about"===this.props.element&&this.state.width>541&&o.a.createElement(this.Contact,{className:"nav__side-text"}),"contact"===this.props.element&&this.state.width>541&&o.a.createElement(this.Home,{className:"nav__side-text"}),"about"!==this.props.element&&"contact"!==this.props.element&&this.state.width>541&&o.a.createElement(this.About,{className:"nav__side-text"}),"about"!==this.props.element&&"contact"!==this.props.element&&"projects"!==this.props.element&&this.state.width<=541&&o.a.createElement(this.AboutH,{className:"nav__side-text ab"}),("about"===this.props.element||"contact"===this.props.element||"projects"===this.props.element)&&this.state.width<=541&&o.a.createElement(this.HomeH,{className:"nav__side-text hm"}))),o.a.createElement("div",{className:"nav__right"},o.a.createElement("div",{className:"nav__right-back"}),o.a.createElement(i.Link,{className:"nav__right-link",to:this.props.right.to},"about"===this.props.element&&this.state.width>541&&o.a.createElement(this.Home,{className:"nav__side-text"}),"contact"===this.props.element&&this.state.width>541&&o.a.createElement(this.About,{className:"nav__side-text"}),"about"!==this.props.element&&"contact"!==this.props.element&&this.state.width>541&&o.a.createElement(this.Contact,{className:"nav__side-text"}),"contact"!==this.props.element&&this.state.width<=541&&o.a.createElement(this.ContactH,{className:"nav__side-text ct"}),"contact"===this.props.element&&this.state.width<=541&&o.a.createElement(this.AboutH,{className:"nav__side-text ab"}))),o.a.createElement("div",{className:"nav__bottom"},o.a.createElement("div",{className:"nav__bottom-back"}),o.a.createElement(i.Link,{className:"nav__bottom-link",to:this.props.bottom.to},"projects"===this.props.element&&this.state.width>541&&o.a.createElement(this.HomeH,{className:"nav__bottom-text hm"}),"projects"!==this.props.element&&o.a.createElement(this.Projects,{className:"nav__bottom-text proj"}),"projects"===this.props.element&&this.state.width<=541&&o.a.createElement(this.AboutH,{className:"nav__side-text abb"})))))},t}(o.a.Component)},"1mzq":function(e,t,n){var r=n("q1tI");function a(e){return r.createElement("svg",e,[r.createElement("defs",{key:0}),r.createElement("path",{d:"M105.26 123.9c-4.21 29.55-.22 51.13 17.56 53.37 31.75-2 33.78-64.17 10.81-72.28-14.86-5.4-27 11.48-28.37 18.91 10.6 30.8 57.13 15.78 78.74-20M189 144.9c16.62 5.07 32.38-1.29 37.09-11.66 2.65-5.83 2.65-11.65-3.53-15.54-48.57-18.46-49.46 110.76 26.49 34M45.41 5.04c-6 99.3 0 179.66-29 182.39",className:"a",key:1}),r.createElement("path",{d:"M16.38 64.47c-2.83 4.72-8.88 7.86-11.61 2.39C-4.11 48.42 22.19 6.41 45.41 3.34 127-3.1 123 84.9 43 102.9M43 141.9c8.53-9.3 13-24 25-35l-6 70c3.69-24.38 10.3-43.93 22-55 9.08 6.1 16.83 6.27 22-5M467 194.9c-127.47 1.27-293.74-47.12-314 34l31-125M280 122.9c-44-20-49 91 29 18M337 44.9c-41.89 114.14-45.34 166.6 31 95",className:"a",key:2}),r.createElement("path",{d:"M294 115.9c25.14-3.41 50.12-18.94 75-42M366 141.9c15-12 30-40 14-47 0 0-18 30 0 31 43 6 12 54-18 41-16-19 64.94-42.58 111-46",className:"b",key:3}),r.createElement("path",{d:"M174.83 69.35c2.37 1 3.82 6.6 4.84 8.85l4.06 9c1.16 2.55 4.71 1.47 5.48-.72q6.11-17.26 13.38-34.06c.8-1.83-.07-4.78-2.59-4.52a21.93 21.93 0 01-12.07-1.88 3 3 0 00-4.51 2.59q0 9.22.23 18.44c.12 3.86 6.12 3.87 6 0q-.27-9.21-.23-18.44l-4.51 2.59A27.69 27.69 0 00200 53.9l-2.59-4.51q-7.61 17.51-14 35.5l5.49-.72-5.69-12.53c-1.31-2.9-2.26-6.06-5.37-7.42-3.5-1.54-6.56 3.63-3 5.18z",key:4})])}a.defaultProps={viewBox:"-10 -10 493.22 249.63"},e.exports=a,a.default=a},"7n1l":function(e,t,n){var r=n("q1tI");function a(e){return r.createElement("svg",e,[r.createElement("defs",{key:0}),r.createElement("path",{d:"M22.27 251.59c-6.24 43.74-.33 75.69 26 79 47-3 50-95 16-107-22-8-40 17-42 28 15.69 45.59 52 33 84-20M92.54.59c-9 60.75-4.06 142.24 7.09 221M20.45 119.95l68.54-1.18M3.91 2.95c14.75 65.83 23.44 152.24 10.63 210.37M6.27 340.41c13.22 31.45 21.78 66.86 23.22 108.36-5.75-40.91-9.29-91.33 10.83-99.07 23.22-1.55 25.47 47.41 24.77 99.07 0-39.48-1.55-92.88 17-99.07 29.41 0 15.48 94.42 37.15 99.07M20.49 513.99c28.16 7.81 54.88-2 62.86-18 4.49-9 4.49-18-6-24-82.33-28.44-83.82 170.63 44.9 52.39",className:"a",key:1})])}a.defaultProps={viewBox:"0 0 124.97 566.33"},e.exports=a,a.default=a},"8+s/":function(e,t,n){"use strict";var r,a=n("q1tI"),o=(r=a)&&"object"==typeof r&&"default"in r?r.default:r;function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var s,l=[];function u(){s=e(l.map((function(e){return e.props}))),f.canUseDOM?t(s):n&&(s=n(s))}var f=function(e){var t,n;function a(){return e.apply(this,arguments)||this}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.peek=function(){return s},a.rewind=function(){if(a.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=s;return s=void 0,l=[],e};var i=a.prototype;return i.UNSAFE_componentWillMount=function(){l.push(this),u()},i.componentDidUpdate=function(){u()},i.componentWillUnmount=function(){var e=l.indexOf(this);l.splice(e,1),u()},i.render=function(){return o.createElement(r,this.props)},a}(a.PureComponent);return i(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),i(f,"canUseDOM",c),f}}},Pkdq:function(e,t,n){var r=n("q1tI");function a(e){return r.createElement("svg",e,[r.createElement("defs",{key:0}),r.createElement("path",{d:"M109.27 134.59c-6.24 43.74-.33 75.69 26 79 47-3 50-95 16-107-22-8-40 17-42 28 15.69 45.59 52 33 84-20M92.54.59c-9 60.75-4.06 142.24 7.09 221M20.45 119.95l68.54-1.18M3.91 2.95c14.75 65.83 23.44 152.24 10.63 210.37",className:"a",key:1}),r.createElement("path",{d:"M192.27 111.41c13.22 31.45 21.78 66.86 23.22 108.36-5.75-40.91-9.29-91.33 10.83-99.07 23.22-1.55 25.47 47.41 24.77 99.07 0-39.48-1.55-92.88 17-99.07 29.41 0 15.48 94.42 37.15 99.07",className:"a",key:2}),r.createElement("path",{d:"M305.49 173.99c28.16 7.81 54.88-2 62.86-18 4.49-9 4.49-18-6-24-82.33-28.44-83.82 170.63 44.9 52.39",className:"a",key:3})])}a.defaultProps={viewBox:"0 0 409.97 226.33"},e.exports=a,a.default=a},SCGC:function(e,t,n){var r=n("q1tI");function a(e){return r.createElement("svg",e,[r.createElement("defs",{key:0}),r.createElement("defs",{key:1},r.createElement("style",null,"\r\n      .a{fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:8px}\r\n    ")),r.createElement("path",{d:"M54.3 143.91c10.62-45.87-71.5.5-45 80 23.39 13.36 77.25-89.14 132-195-15.53 70.65-26.46 136.87-29 195M67.3 164.91l92-42M156.3 35.91c7.54 48.48 3.35 112.36-6 183 98-42 67.21-144.54 8-77M231.3 169.91c-36-4-72.24 12.9-79 31",className:"a",key:2}),r.createElement("path",{d:"M233.3 144.91c-6.24 43.74-.33 75.69 26 79 47-3 50-95 16-107-22-8-40 17-42 28 15.69 45.59 58 31 90-22",className:"a",key:3}),r.createElement("path",{d:"M324.3 118.91c-15.1 50-15.1 97.22 14.16 97.22 36.81-.94 39.64-49.08 33-92.5-.63 42-1 85.9 17.93 96.28M427.04 49.91c-24.74 119-15.91 226.53 40.26 148.82M371.3 126.91c25 0 59.72-9.4 85.7-28.35",className:"a",key:4})])}a.defaultProps={viewBox:"0 0 470.54 229.09"},e.exports=a,a.default=a},Vmdh:function(e,t,n){var r=n("q1tI");function a(e){return r.createElement("svg",e,[r.createElement("defs",{key:0}),r.createElement("path",{d:"M95.6 13.56C3.33-52.01-56.17 245.46 102.89 128.9M9.77 323.6l17.47-22.13v96.64c-5.85-105.68 66.35-156.89 50.08-2.33l19.8-12.81",className:"a",key:1}),r.createElement("path",{d:"M115.98 669.59c-37.21 53.15-34.42 6.5-25.9-76.81-54.48-8.93-67 32.16-67 32.16s11.61 22.32 66.1-23.23c-25 124.15-92 84-66.1 23.23M77.39 715.38c-62-35.63-106.89 178.16 20.14 54.23",className:"b",key:2}),r.createElement("path",{d:"M22.61 210.95c-5.78 40.54-.31 70.14 24.09 73.21 43.55-2.78 46.33-88 14.83-99.16-20.39-7.41-37.07 15.76-38.92 26 14.54 42.25 51 23.17 80.62-26M55.88 410.16C32.96 520.5 41.13 620.11 93.18 548.11M11.63 491.71c20-9.4 47.93-18.88 72-36.43M60.88 828.16c-22.92 110.34-14.75 210 37.3 137.94M16.63 909.71c20-9.4 47.93-18.88 72-36.43",className:"a",key:3})])}a.defaultProps={viewBox:"-25 -10 145 1025"},e.exports=a,a.default=a},bmMU:function(e,t){var n="undefined"!=typeof Element,r="function"==typeof Map,a="function"==typeof Set,o="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;e.exports=function(e,t){try{return function e(t,i){if(t===i)return!0;if(t&&i&&"object"==typeof t&&"object"==typeof i){if(t.constructor!==i.constructor)return!1;var c,s,l,u;if(Array.isArray(t)){if((c=t.length)!=i.length)return!1;for(s=c;0!=s--;)if(!e(t[s],i[s]))return!1;return!0}if(r&&t instanceof Map&&i instanceof Map){if(t.size!==i.size)return!1;for(u=t.entries();!(s=u.next()).done;)if(!i.has(s.value[0]))return!1;for(u=t.entries();!(s=u.next()).done;)if(!e(s.value[1],i.get(s.value[0])))return!1;return!0}if(a&&t instanceof Set&&i instanceof Set){if(t.size!==i.size)return!1;for(u=t.entries();!(s=u.next()).done;)if(!i.has(s.value[0]))return!1;return!0}if(o&&ArrayBuffer.isView(t)&&ArrayBuffer.isView(i)){if((c=t.length)!=i.length)return!1;for(s=c;0!=s--;)if(t[s]!==i[s])return!1;return!0}if(t.constructor===RegExp)return t.source===i.source&&t.flags===i.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===i.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===i.toString();if((c=(l=Object.keys(t)).length)!==Object.keys(i).length)return!1;for(s=c;0!=s--;)if(!Object.prototype.hasOwnProperty.call(i,l[s]))return!1;if(n&&t instanceof Element)return!1;for(s=c;0!=s--;)if(("_owner"!==l[s]&&"__v"!==l[s]&&"__o"!==l[s]||!t.$$typeof)&&!e(t[l[s]],i[l[s]]))return!1;return!0}return t!=t&&i!=i}(e,t)}catch(i){if((i.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw i}}},kCSB:function(e,t,n){var r=n("q1tI");function a(e){return r.createElement("svg",e,[r.createElement("defs",{key:0}),r.createElement("defs",{key:1},r.createElement("style",null,"\r\n      .a,.b{fill:none;stroke:#000;stroke-width:8px}.a{stroke-miterlimit:10}.b{stroke-linejoin:round}\r\n    ")),r.createElement("path",{d:"M95.6 20.21c-92.27-65.57-151.77 231.9 7.29 115.34M189.24 52.76v113.31c-6.86-123.87 77.77-183.9 58.7-2.73l36.24-24.27",className:"a",key:2}),r.createElement("path",{d:"M428.24 151.76c-37.21 53.14-34.68 7-26.16-76.33-54.48-8.93-67 32.16-67 32.16s11.61 22.32 66.1-23.23c-25 124.15-92 84-66.1 23.23M489.39 78.03c-61.97-35.63-121.15 173.73 38.85 49.73",className:"b",key:3}),r.createElement("path",{d:"M104.61 89.6c-5.78 40.54-.31 70.14 24.09 73.21 43.55-2.78 46.33-88 14.83-99.16-20.39-7.41-37.07 15.76-38.92 25.95 14.54 42.25 55 22.27 84.63-26.84M291.88 5.81c-22.92 110.34-14.75 209.95 37.3 137.95M247.63 87.36c20-9.4 47.93-18.88 72-36.43M538.88.81c-22.92 110.34-14.75 209.95 37.3 137.95M494.63 82.36c20-9.4 47.93-18.88 72-36.43",className:"a",key:4})])}a.defaultProps={viewBox:"0 0 579.42 178.46"},e.exports=a,a.default=a},qhky:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return he}));n("E9XD");var r,a,o,i,c=n("17x9"),s=n.n(c),l=n("8+s/"),u=n.n(l),f=n("bmMU"),p=n.n(f),d=n("q1tI"),m=n.n(d),h=n("YVoz"),y=n.n(h),v="bodyAttributes",b="htmlAttributes",E="titleAttributes",w={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},T=(Object.keys(w).map((function(e){return w[e]})),"charset"),g="cssText",C="href",k="http-equiv",A="innerHTML",M="itemprop",O="name",_="property",N="rel",S="src",x="target",j={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},P="defaultTitle",I="defer",L="encodeSpecialCharacters",q="onChangeClientState",H="titleTemplate",B=Object.keys(j).reduce((function(e,t){return e[j[t]]=t,e}),{}),R=[w.NOSCRIPT,w.SCRIPT,w.STYLE],D="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},z=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},Y=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),U=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},F=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},W=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},K=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},V=function(e){var t=Q(e,w.TITLE),n=Q(e,H);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=Q(e,P);return t||r||void 0},G=function(e){return Q(e,q)||function(){}},J=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return U({},e,t)}),{})},$=function(e,t){return t.filter((function(e){return void 0!==e[w.BASE]})).map((function(e){return e[w.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),a=0;a<r.length;a++){var o=r[a].toLowerCase();if(-1!==e.indexOf(o)&&n[o])return t.concat(n)}return t}),[])},X=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&re("Helmet: "+e+' should be of type "Array". Instead found type "'+D(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var a={};n.filter((function(e){for(var n=void 0,o=Object.keys(e),i=0;i<o.length;i++){var c=o[i],s=c.toLowerCase();-1===t.indexOf(s)||n===N&&"canonical"===e[n].toLowerCase()||s===N&&"stylesheet"===e[s].toLowerCase()||(n=s),-1===t.indexOf(c)||c!==A&&c!==g&&c!==M||(n=c)}if(!n||!e[n])return!1;var l=e[n].toLowerCase();return r[n]||(r[n]={}),a[n]||(a[n]={}),!r[n][l]&&(a[n][l]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var o=Object.keys(a),i=0;i<o.length;i++){var c=o[i],s=y()({},r[c],a[c]);r[c]=s}return e}),[]).reverse()},Q=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},Z=(r=Date.now(),function(e){var t=Date.now();t-r>16?(r=t,e(t)):setTimeout((function(){Z(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||Z:e.requestAnimationFrame||Z,ne="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:e.cancelAnimationFrame||ee,re=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},ae=null,oe=function(e,t){var n=e.baseTag,r=e.bodyAttributes,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,c=e.noscriptTags,s=e.onChangeClientState,l=e.scriptTags,u=e.styleTags,f=e.title,p=e.titleAttributes;se(w.BODY,r),se(w.HTML,a),ce(f,p);var d={baseTag:le(w.BASE,n),linkTags:le(w.LINK,o),metaTags:le(w.META,i),noscriptTags:le(w.NOSCRIPT,c),scriptTags:le(w.SCRIPT,l),styleTags:le(w.STYLE,u)},m={},h={};Object.keys(d).forEach((function(e){var t=d[e],n=t.newTags,r=t.oldTags;n.length&&(m[e]=n),r.length&&(h[e]=d[e].oldTags)})),t&&t(),s(e,m,h)},ie=function(e){return Array.isArray(e)?e.join(""):e},ce=function(e,t){void 0!==e&&document.title!==e&&(document.title=ie(e)),se(w.TITLE,t)},se=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute("data-react-helmet"),a=r?r.split(","):[],o=[].concat(a),i=Object.keys(t),c=0;c<i.length;c++){var s=i[c],l=t[s]||"";n.getAttribute(s)!==l&&n.setAttribute(s,l),-1===a.indexOf(s)&&a.push(s);var u=o.indexOf(s);-1!==u&&o.splice(u,1)}for(var f=o.length-1;f>=0;f--)n.removeAttribute(o[f]);a.length===o.length?n.removeAttribute("data-react-helmet"):n.getAttribute("data-react-helmet")!==i.join(",")&&n.setAttribute("data-react-helmet",i.join(","))}},le=function(e,t){var n=document.head||document.querySelector(w.HEAD),r=n.querySelectorAll(e+"[data-react-helmet]"),a=Array.prototype.slice.call(r),o=[],i=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===A)n.innerHTML=t.innerHTML;else if(r===g)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[r]?"":t[r];n.setAttribute(r,c)}n.setAttribute("data-react-helmet","true"),a.some((function(e,t){return i=t,n.isEqualNode(e)}))?a.splice(i,1):o.push(n)})),a.forEach((function(e){return e.parentNode.removeChild(e)})),o.forEach((function(e){return n.appendChild(e)})),{oldTags:a,newTags:o}},ue=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},fe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[j[n]||n]=e[n],t}),t)},pe=function(e,t,n){switch(e){case w.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})["data-react-helmet"]=!0,a=fe(n,r),[m.a.createElement(w.TITLE,a,e)];var e,n,r,a},toString:function(){return function(e,t,n,r){var a=ue(n),o=ie(t);return a?"<"+e+' data-react-helmet="true" '+a+">"+K(o,r)+"</"+e+">":"<"+e+' data-react-helmet="true">'+K(o,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case v:case b:return{toComponent:function(){return fe(t)},toString:function(){return ue(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,a=((r={key:n})["data-react-helmet"]=!0,r);return Object.keys(t).forEach((function(e){var n=j[e]||e;if(n===A||n===g){var r=t.innerHTML||t.cssText;a.dangerouslySetInnerHTML={__html:r}}else a[n]=t[e]})),m.a.createElement(e,a)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var a=Object.keys(r).filter((function(e){return!(e===A||e===g)})).reduce((function(e,t){var a=void 0===r[t]?t:t+'="'+K(r[t],n)+'"';return e?e+" "+a:a}),""),o=r.innerHTML||r.cssText||"",i=-1===R.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+a+(i?"/>":">"+o+"</"+e+">")}),"")}(e,t,n)}}}},de=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,c=e.noscriptTags,s=e.scriptTags,l=e.styleTags,u=e.title,f=void 0===u?"":u,p=e.titleAttributes;return{base:pe(w.BASE,t,r),bodyAttributes:pe(v,n,r),htmlAttributes:pe(b,a,r),link:pe(w.LINK,o,r),meta:pe(w.META,i,r),noscript:pe(w.NOSCRIPT,c,r),script:pe(w.SCRIPT,s,r),style:pe(w.STYLE,l,r),title:pe(w.TITLE,{title:f,titleAttributes:p},r)}},me=u()((function(e){return{baseTag:$([C,x],e),bodyAttributes:J(v,e),defer:Q(e,I),encode:Q(e,L),htmlAttributes:J(b,e),linkTags:X(w.LINK,[N,C],e),metaTags:X(w.META,[O,T,k,_,M],e),noscriptTags:X(w.NOSCRIPT,[A],e),onChangeClientState:G(e),scriptTags:X(w.SCRIPT,[S,A],e),styleTags:X(w.STYLE,[g],e),title:V(e),titleAttributes:J(E,e)}}),(function(e){ae&&ne(ae),e.defer?ae=te((function(){oe(e,(function(){ae=null}))})):(oe(e),ae=null)}),de)((function(){return null})),he=(a=me,i=o=function(e){function t(){return z(this,t),W(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!p()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case w.SCRIPT:case w.NOSCRIPT:return{innerHTML:t};case w.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,a=e.newChildProps,o=e.nestedChildren;return U({},r,((t={})[n.type]=[].concat(r[n.type]||[],[U({},a,this.mapNestedChildrenToProps(n,o))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,a=e.newProps,o=e.newChildProps,i=e.nestedChildren;switch(r.type){case w.TITLE:return U({},a,((t={})[r.type]=i,t.titleAttributes=U({},o),t));case w.BODY:return U({},a,{bodyAttributes:U({},o)});case w.HTML:return U({},a,{htmlAttributes:U({},o)})}return U({},a,((n={})[r.type]=U({},o),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=U({},t);return Object.keys(e).forEach((function(t){var r;n=U({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return m.a.Children.forEach(e,(function(e){if(e&&e.props){var a=e.props,o=a.children,i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[B[n]||n]=e[n],t}),t)}(F(a,["children"]));switch(n.warnOnInvalidChildren(e,o),e.type){case w.LINK:case w.META:case w.NOSCRIPT:case w.SCRIPT:case w.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:i,nestedChildren:o});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:i,nestedChildren:o})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=F(e,["children"]),r=U({},n);return t&&(r=this.mapChildrenToProps(t,r)),m.a.createElement(a,r)},Y(t,null,[{key:"canUseDOM",set:function(e){a.canUseDOM=e}}]),t}(m.a.Component),o.propTypes={base:s.a.object,bodyAttributes:s.a.object,children:s.a.oneOfType([s.a.arrayOf(s.a.node),s.a.node]),defaultTitle:s.a.string,defer:s.a.bool,encodeSpecialCharacters:s.a.bool,htmlAttributes:s.a.object,link:s.a.arrayOf(s.a.object),meta:s.a.arrayOf(s.a.object),noscript:s.a.arrayOf(s.a.object),onChangeClientState:s.a.func,script:s.a.arrayOf(s.a.object),style:s.a.arrayOf(s.a.object),title:s.a.string,titleAttributes:s.a.object,titleTemplate:s.a.string},o.defaultProps={defer:!0,encodeSpecialCharacters:!0},o.peek=a.peek,o.rewind=function(){var e=a.rewind();return e||(e=de({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},i);he.renderStatic=he.rewind}).call(this,n("yLpj"))},tPCx:function(e,t,n){var r=n("q1tI");function a(e){return r.createElement("svg",e,[r.createElement("defs",{key:0}),r.createElement("path",{d:"M54.3 143.91c10.62-45.87-71.5.5-45 80 23.39 13.36 77.25-89.14 132-195-15.53 70.65-26.46 136.87-29 195M67.3 164.91l83-38",className:"a",key:1}),r.createElement("path",{d:"M59.3 222.91c7.54 48.48 3.35 112.36-6 183 98-42 67.21-144.54 8-77M134.3 356.91c-36-4-72.24 12.9-79 31M52.3 482.91c-6.24 43.74-.33 75.69 26 79 47-3 50-95 16-107-22-8-40 17-42 28 15.69 45.59 55 25 87-28M24.16 663.21c17-18.67 27.71-39.35 31.15-62.3-15.1 50-15.1 97.22 14.16 97.22 36.81-.94 39.64-49.08 33-92.5-.63 42-.95 85.9 17.93 96.28M72.04 721.91c-24.74 119-15.91 226.53 40.26 148.82M24.3 809.91c21.62-10.15 51.72-20.37 77.7-39.32",className:"a",key:2})])}a.defaultProps={viewBox:"-10 0 165 915"},e.exports=a,a.default=a}}]);
//# sourceMappingURL=commons-d4fe27f46447af3529c9.js.map