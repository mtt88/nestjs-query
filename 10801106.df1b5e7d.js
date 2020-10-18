(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{194:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),u=function(e){var t=a.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=u(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),l=u(r),b=n,d=l["".concat(i,".").concat(b)]||l[b]||m[b]||o;return r?a.a.createElement(d,s(s({ref:t},p),{},{components:r})):a.a.createElement(d,s({ref:t},p))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var p=2;p<o;p++)i[p]=r[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},65:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return s})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return u}));var n=r(2),a=r(6),o=(r(0),r(194)),i={title:"Getting Started"},s={unversionedId:"persistence/typeorm/getting-started",id:"persistence/typeorm/getting-started",isDocsHomePage:!1,title:"Getting Started",description:"The @nestjs-query/query-typeorm package provides an implementation of @nestjs-query/core QueryService.",source:"@site/docs/persistence/typeorm/getting-started.md",slug:"/persistence/typeorm/getting-started",permalink:"/nestjs-query/docs/persistence/typeorm/getting-started",editUrl:"https://github.com/doug-martin/nestjs-query/edit/master/documentation/docs/persistence/typeorm/getting-started.md",version:"current",sidebar:"docs",previous:{title:"Services",permalink:"/nestjs-query/docs/persistence/services"},next:{title:"Custom Service",permalink:"/nestjs-query/docs/persistence/typeorm/custom-service"}},c=[{value:"Installation",id:"installation",children:[]},{value:"Docs",id:"docs",children:[]}],p={rightToc:c};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"@nestjs-query/query-typeorm")," package provides an implementation of ",Object(o.b)("inlineCode",{parentName:"p"},"@nestjs-query/core")," ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/nestjs-query/docs/concepts/services"}),"QueryService"),"."),Object(o.b)("p",null,"This package is built using ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://typeorm.io/#/"}),"typeorm")," and ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.nestjs.com/techniques/database#typeorm-integration"}),"@nestjs/typeorm"),". If you are unfamiliar with them I suggest you read their documentation first."),Object(o.b)("h2",{id:"installation"},"Installation"),Object(o.b)("p",null,Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/nestjs-query/docs/introduction/install#nestjs-queryquery-typeorm"}),"Installation Docs")),Object(o.b)("h2",{id:"docs"},"Docs"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Read the ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/nestjs-query/docs/persistence/services"}),"QueryService docs")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/nestjs-query/docs/persistence/typeorm/multiple-databases"}),"Multiple Databases")," - Docs that layout how to connect to multiple databases and use them with ",Object(o.b)("inlineCode",{parentName:"li"},"nestjs-query")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/nestjs-query/docs/persistence/typeorm/soft-delete"}),"Soft Deletes")," - How to use the soft delete functionality from typeorm with ",Object(o.b)("inlineCode",{parentName:"li"},"nestjs-query"),". ")))}u.isMDXComponent=!0}}]);