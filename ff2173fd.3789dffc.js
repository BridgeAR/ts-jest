(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{94:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return u}));var r=n(3),o=n(7),s=(n(0),n(97)),a={title:"ESM Support"},c={unversionedId:"esm-support",id:"esm-support",isDocsHomePage:!1,title:"ESM Support",description:"To use ts-jest with ESM support, you'll first need to check ESM Jest documentation.",source:"@site/docs/esm-support.md",slug:"/esm-support",permalink:"/ts-jest/docs/esm-support",editUrl:"https://github.com/kulshekhar/ts-jest/edit/master/docs/docs/esm-support.md",version:"current",sidebar:"docs",previous:{title:"Test helpers",permalink:"/ts-jest/docs/test-helpers"},next:{title:"Using with React Native",permalink:"/ts-jest/docs/react-native"}},p=[{value:"Examples",id:"examples",children:[]}],i={rightToc:p};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(s.b)("wrapper",Object(r.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(s.b)("p",null,"To use ",Object(s.b)("inlineCode",{parentName:"p"},"ts-jest")," with ESM support, you'll first need to check ",Object(s.b)("a",Object(r.a)({parentName:"p"},{href:"https://jestjs.io/docs/en/ecmascript-modules"}),"ESM Jest documentation"),"."),Object(s.b)("p",null,Object(s.b)("inlineCode",{parentName:"p"},"ts-jest")," supports ESM via a config option ",Object(s.b)("a",Object(r.a)({parentName:"p"},{href:"/ts-jest/docs/options/useESM"}),"useESM")," in combination with jest config option ",Object(s.b)("a",Object(r.a)({parentName:"p"},{href:"https://jestjs.io/docs/en/next/configuration#extensionstotreatasesm-arraystring"}),"extensionsToTreatAsEsm"),". "),Object(s.b)("p",null,"There are also ",Object(s.b)("a",Object(r.a)({parentName:"p"},{href:"/ts-jest/docs/presets"}),"3 presets")," to work with ESM."),Object(s.b)("h3",{id:"examples"},"Examples"),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"// jest.config.js\nmodule.exports = {\n  // [...]\n  \"extensionsToTreatAsEsm\": ['.ts'],\n  globals: {\n    'ts-jest': {\n      useESM: true,\n    },\n  },\n}\n")),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json5"}),'// OR package.json\n{\n  // [...]\n  "jest": {\n    "extensionsToTreatAsEsm": [".ts"],\n    "globals": {\n      "ts-jest": {\n        "useESM": true,\n      }\n    }\n  }\n}\n')))}u.isMDXComponent=!0},97:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=o.a.createContext({}),u=function(e){var t=o.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=u(e.components);return o.a.createElement(i.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,a=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),l=u(n),m=r,f=l["".concat(a,".").concat(m)]||l[m]||b[m]||s;return n?o.a.createElement(f,c(c({ref:t},i),{},{components:n})):o.a.createElement(f,c({ref:t},i))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,a=new Array(s);a[0]=m;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var i=2;i<s;i++)a[i]=n[i];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);