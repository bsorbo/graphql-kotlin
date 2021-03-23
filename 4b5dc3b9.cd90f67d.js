(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{113:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return s}));var r=n(3),a=n(7),o=(n(0),n(180)),i={id:"fetching-data",title:"Fetching Data",original_id:"fetching-data"},c={unversionedId:"schema-generator/execution/fetching-data",id:"version-3.x.x/schema-generator/execution/fetching-data",isDocsHomePage:!1,title:"Fetching Data",description:"Each field exposed through a GraphQL query has a corresponding resolver (aka data fetcher) associated with it. graphql-kotlin-schema-generator generates GraphQL schema",source:"@site/versioned_docs/version-3.x.x/schema-generator/execution/fetching-data.md",slug:"/schema-generator/execution/fetching-data",permalink:"/graphql-kotlin/docs/3.x.x/schema-generator/execution/fetching-data",editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/versioned_docs/version-3.x.x/schema-generator/execution/fetching-data.md",version:"3.x.x",lastUpdatedBy:"Shane Myrick",lastUpdatedAt:1616522320,sidebar:"version-3.x.x/docs",previous:{title:"Advanced Features",permalink:"/graphql-kotlin/docs/3.x.x/schema-generator/customizing-schemas/advanced-features"},next:{title:"Async Models",permalink:"/graphql-kotlin/docs/3.x.x/schema-generator/execution/async-models"}},l=[{value:"Customizing Default Behavior",id:"customizing-default-behavior",children:[]}],p={toc:l};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Each field exposed through a GraphQL query has a corresponding resolver (aka data fetcher) associated with it. ",Object(o.b)("inlineCode",{parentName:"p"},"graphql-kotlin-schema-generator")," generates GraphQL schema\ndirectly from the source code automatically mapping all the fields either to use\n",Object(o.b)("a",{parentName:"p",href:"https://github.com/ExpediaGroup/graphql-kotlin/blob/master/graphql-kotlin-schema-generator/src/main/kotlin/com/expediagroup/graphql/execution/FunctionDataFetcher.kt"},"FunctionDataFetcher"),"\nto resolve underlying functions or a ",Object(o.b)("a",{parentName:"p",href:"https://www.graphql-java.com/documentation/v14/data-fetching/"},"PropertyDataFetcher")," to read a value from an underlying Kotlin property."),Object(o.b)("p",null,"While all the fields in a GraphQL query are resolved independently to produce a final result, whether field is backed by a function or a property can have significant\nperformance repercussions. For example, given the following schema:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-graphql"},"\ntype Query {\n  product(id: Int!): Product\n}\n\ntype Product {\n  id: Int!\n  name: String!\n  reviews: [Review!]!\n}\n\ntype Review {\n  id: Int!\n  text: String!\n}\n\n")),Object(o.b)("p",null,"We can define ",Object(o.b)("inlineCode",{parentName:"p"},"Product")," as"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-kotlin"},"\ndata class Product(val id: Int, val name: String, reviews: List<Review>)\n\n")),Object(o.b)("p",null,"or"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-kotlin"},"\nclass Product(val id: Int, val name: String) {\n  suspend fun reviews(): List<Reviews> {\n     // logic to fetch reviews here\n  }\n}\n\n")),Object(o.b)("p",null,"If we expose the ",Object(o.b)("inlineCode",{parentName:"p"},"reviews")," field as a property it will always be populated regardless whether or not your client actually asks for it. On the other hand if ",Object(o.b)("inlineCode",{parentName:"p"},"reviews")," is backed\nby a function, it will only be called if your client asks for this data. In order to minimize the over-fetching of data from your underlying data sources we recommend to\nexpose all your GraphQL fields that require some additional computations through functions."),Object(o.b)("h3",{id:"customizing-default-behavior"},"Customizing Default Behavior"),Object(o.b)("p",null,"You can provide your own custom data fetchers to resolve functions and properties by providing an instance of\n",Object(o.b)("a",{parentName:"p",href:"https://github.com/ExpediaGroup/graphql-kotlin/blob/master/graphql-kotlin-schema-generator/src/main/kotlin/com/expediagroup/graphql/execution/KotlinDataFetcherFactoryProvider.kt#L31"},"KotlinDataFetcherFactoryProvider"),"\nto your ",Object(o.b)("a",{parentName:"p",href:"https://github.com/ExpediaGroup/graphql-kotlin/blob/master/graphql-kotlin-schema-generator/src/main/kotlin/com/expediagroup/graphql/SchemaGeneratorConfig.kt"},"SchemaGeneratorConfig"),".\nSee our ",Object(o.b)("a",{parentName:"p",href:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/examples/spring"},"spring example app")," for an example of ",Object(o.b)("inlineCode",{parentName:"p"},"CustomDataFetcherFactoryProvider"),"."))}s.isMDXComponent=!0},180:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),s=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=s(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},h=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),h=r,m=u["".concat(i,".").concat(h)]||u[h]||d[h]||o;return n?a.a.createElement(m,c(c({ref:t},p),{},{components:n})):a.a.createElement(m,c({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=h;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"}}]);