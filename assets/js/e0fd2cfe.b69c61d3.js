"use strict";(self.webpackChunktypegoose_website=self.webpackChunktypegoose_website||[]).push([[8419],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(n),f=o,d=m["".concat(u,".").concat(f)]||m[f]||l[f]||i;return n?r.createElement(d,a(a({ref:t},p),{},{components:n})):r.createElement(d,a({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5706:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return p},default:function(){return m}});var r=n(2122),o=n(9756),i=(n(7294),n(3905)),a=["components"],s={id:"is-document",title:"Is Document"},u=void 0,c={unversionedId:"api/functions/typeguards/is-document",id:"api/functions/typeguards/is-document",isDocsHomePage:!1,title:"Is Document",description:"isDocument",source:"@site/../docs/api/functions/typeguards/isDocument.md",sourceDirName:"api/functions/typeguards",slug:"/api/functions/typeguards/is-document",permalink:"/typegoose/docs/api/functions/typeguards/is-document",editUrl:"https://github.com/typegoose/typegoose/edit/master/docs/../docs/api/functions/typeguards/isDocument.md",version:"current",frontMatter:{id:"is-document",title:"Is Document"},sidebar:"docs",previous:{title:"Get Name For Class",permalink:"/typegoose/docs/api/functions/get-name"},next:{title:"Is Ref-Type",permalink:"/typegoose/docs/api/functions/typeguards/is-ref-type"}},p=[{value:"isDocument",id:"isdocument",children:[]},{value:"isDocumentArray",id:"isdocumentarray",children:[]}],l={toc:p};function m(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"isdocument"},"isDocument"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"isDocument(doc: any)"),": Checks if the supplied value is a valid Model(/Document) (mainly for ",(0,i.kt)("inlineCode",{parentName:"p"},"Ref<T>")," fields)."),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'class Cat {\n  @prop({ ref: \'Cat\' })\n  public partner: Ref<Cat>;\n\n  public hasPartner(): boolean {\n    if (isDocument(this.partner)) {\n      // "this.partner" now has the type of "Cat"\n      return true;\n    } else {\n      return false;\n    }\n  }\n}\n')),(0,i.kt)("p",null,"-> this could be minified, but for demonstration purposes this will stay the long version"),(0,i.kt)("h2",{id:"isdocumentarray"},"isDocumentArray"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"isDocumentArray(doc: any[])")," is the same as ",(0,i.kt)("inlineCode",{parentName:"p"},"isDocument"),", only that it checks if it is an array ",(0,i.kt)("strong",{parentName:"p"},"AND")," all of the items are Documents."),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'class Cat {\n  @prop({ ref: \'Cat\' })\n  public kittens: Ref<Cat>;\n\n  public areAllKittensExisting(): boolean {\n    if (isDocumentArray(this.kittens)) {\n      // "this.kittens" now has the type of "Cat"\n      return true;\n    } else {\n      return false;\n    }\n  }\n}\n')),(0,i.kt)("p",null,"-> this could be minified, but for demonstration purposes this will stay the long version"))}m.isMDXComponent=!0}}]);