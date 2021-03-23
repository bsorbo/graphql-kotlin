(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{135:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return s})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return u}));var r=t(3),a=t(7),o=(t(0),t(180)),i={id:"renaming-fields",title:"Renaming Fields",original_id:"renaming-fields"},s={unversionedId:"schema-generator/customizing-schemas/renaming-fields",id:"version-3.x.x/schema-generator/customizing-schemas/renaming-fields",isDocsHomePage:!1,title:"Renaming Fields",description:"By default, the schema generator will use the simple name of the underlying class for the type names and function/property names for fields.",source:"@site/versioned_docs/version-3.x.x/schema-generator/customizing-schemas/renaming-fields.md",slug:"/schema-generator/customizing-schemas/renaming-fields",permalink:"/graphql-kotlin/docs/3.x.x/schema-generator/customizing-schemas/renaming-fields",editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/versioned_docs/version-3.x.x/schema-generator/customizing-schemas/renaming-fields.md",version:"3.x.x",lastUpdatedBy:"Shane Myrick",lastUpdatedAt:1616522320,sidebar:"version-3.x.x/docs",previous:{title:"Excluding Fields",permalink:"/graphql-kotlin/docs/3.x.x/schema-generator/customizing-schemas/excluding-fields"},next:{title:"Directives",permalink:"/graphql-kotlin/docs/3.x.x/schema-generator/customizing-schemas/directives"}},l=[{value:"Known Issues",id:"known-issues",children:[]}],c={toc:l};function u(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"By default, the schema generator will use the simple name of the underlying class for the type names and function/property names for fields.\nYou can change this default behavior by annotating the target class/field with ",Object(o.b)("inlineCode",{parentName:"p"},"@GraphQLName"),". The following Kotlin ",Object(o.b)("inlineCode",{parentName:"p"},"Widget")," class\nwill be renamed to ",Object(o.b)("inlineCode",{parentName:"p"},"MyCustomName")," GraphQL type and its fields will also be renamed."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-kotlin"},'\n@GraphQLName("MyCustomName")\ndata class Widget(\n    @GraphQLName("myCustomField")\n    val value: Int?\n)\n\n')),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-graphql"},"\ntype MyCustomName {\n  myCustomField: Int\n}\n\n")),Object(o.b)("h2",{id:"known-issues"},"Known Issues"),Object(o.b)("p",null,">"," NOTE: Due to how we deserialize input classes, if you rename a field of an input class or an enum value you must also annotate it with the Jackson annotation @JsonProperty. See ",Object(o.b)("a",{parentName:"p",href:"https://github.com/ExpediaGroup/graphql-kotlin/issues/493"},"issue 493")," for more info."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-kotlin"},'\ndata class MyInputClass(\n    @JsonProperty("renamedField")\n    @GraphQLName("renamedField")\n    val field1: String\n)\n\n// GraphQL enums should use UPPER_CASE naming if possible, but any case is supported\nenum class Selection {\n\n  @JsonProperty("first")\n  @GraphQLName("first")\n  ONE,\n\n  @JsonProperty("second")\n  @GraphQLName("second")\n  TWO\n}\n\nclass QueryClass {\n  fun parseData(arg: MyInputClass) = "You sent ${arg.field1}"\n\n  fun chooseValue(selection: Selection): String = when (selection) {\n    Selection.ONE -> "You chose the first value"\n    Selection.TWO -> "You chose the second value"\n  }\n}\n\n')),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-graphql"},"\ninput MyInputClassInput {\n  # This only works if both @JsonProperty and @GraphQLName are present\n  renamedField: String!\n}\n\nenum Selection {\n  first,\n  second\n}\n\ntype Query {\n  parseData(arg: MyInputClass!): String!\n  chooseValue(selection: Selection!): String!\n}\n\n")))}u.isMDXComponent=!0},180:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return f}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=a.a.createContext({}),u=function(e){var n=a.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=u(e.components);return a.a.createElement(c.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},d=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(t),d=r,f=p["".concat(i,".").concat(d)]||p[d]||m[d]||o;return t?a.a.createElement(f,s(s({ref:n},c),{},{components:t})):a.a.createElement(f,s({ref:n},c))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=t[c];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);