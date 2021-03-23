(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{150:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return p})),r.d(t,"metadata",(function(){return a})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return l}));var n=r(3),o=r(7),i=(r(0),r(180)),p={id:"subscriptions",title:"Subscriptions",original_id:"subscriptions"},a={unversionedId:"spring-server/subscriptions",id:"version-3.x.x/spring-server/subscriptions",isDocsHomePage:!1,title:"Subscriptions",description:"Schema",source:"@site/versioned_docs/version-3.x.x/spring-server/subscriptions.md",slug:"/spring-server/subscriptions",permalink:"/graphql-kotlin/docs/3.x.x/spring-server/subscriptions",editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/versioned_docs/version-3.x.x/spring-server/subscriptions.md",version:"3.x.x",lastUpdatedBy:"Shane Myrick",lastUpdatedAt:1616522320,sidebar:"version-3.x.x/docs",previous:{title:"Access the HTTP Request-Response",permalink:"/graphql-kotlin/docs/3.x.x/spring-server/http-request-response"},next:{title:"Client Overview",permalink:"/graphql-kotlin/docs/3.x.x/client/client-overview"}},s=[{value:"Schema",id:"schema",children:[]},{value:"<code>graphql-ws</code> subprotocol",id:"graphql-ws-subprotocol",children:[{value:"Overview",id:"overview",children:[]},{value:"Subscription Hooks",id:"subscription-hooks",children:[]}]},{value:"Example",id:"example",children:[]}],c={toc:s};function l(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},c,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"schema"},"Schema"),Object(i.b)("p",null,"To see more details of how to implement subscriptions in your schema, see ",Object(i.b)("a",{parentName:"p",href:"/graphql-kotlin/docs/3.x.x/schema-generator/execution/subscriptions"},"executing subscriptions"),"."),Object(i.b)("h2",{id:"graphql-ws-subprotocol"},Object(i.b)("inlineCode",{parentName:"h2"},"graphql-ws")," subprotocol"),Object(i.b)("h3",{id:"overview"},"Overview"),Object(i.b)("p",null,"We have implemented subscriptions in Spring WebSockets following the ",Object(i.b)("a",{parentName:"p",href:"https://github.com/apollographql/subscriptions-transport-ws/blob/master/PROTOCOL.md"},Object(i.b)("inlineCode",{parentName:"a"},"graphql-ws")," subprotocol")," defined by Apollo. This requires that your client send and parse messages in a specific format."),Object(i.b)("p",null,"You can see more details in the file ",Object(i.b)("a",{parentName:"p",href:"https://github.com/ExpediaGroup/graphql-kotlin/blob/master/graphql-kotlin-spring-server/src/main/kotlin/com/expediagroup/graphql/spring/execution/ApolloSubscriptionProtocolHandler.kt"},"ApolloSubscriptionProtocolHandler"),"."),Object(i.b)("p",null,"If you would like to implement your own subscription handler, you can provide a primary spring bean for ",Object(i.b)("inlineCode",{parentName:"p"},"HandlerMapping")," that overrides the ",Object(i.b)("a",{parentName:"p",href:"https://github.com/ExpediaGroup/graphql-kotlin/blob/master/graphql-kotlin-spring-server/src/main/kotlin/com/expediagroup/graphql/spring/SubscriptionAutoConfiguration.kt"},"default one")," which sets the url for subscriptions to the Apollo subscription handler."),Object(i.b)("h3",{id:"subscription-hooks"},"Subscription Hooks"),Object(i.b)("p",null,"In line with the protocol, we have implemented hooks to execute functions at different stages of the connection lifecycle:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"onConnect"),Object(i.b)("li",{parentName:"ul"},"onOperation"),Object(i.b)("li",{parentName:"ul"},"onOperationComplete"),Object(i.b)("li",{parentName:"ul"},"onDisconnect")),Object(i.b)("p",null,"You can see more details in the file ",Object(i.b)("a",{parentName:"p",href:"https://github.com/ExpediaGroup/graphql-kotlin/blob/master/graphql-kotlin-spring-server/src/main/kotlin/com/expediagroup/graphql/spring/execution/ApolloSubscriptionHooks.kt"},"ApolloSubscriptionHooks"),"."),Object(i.b)("p",null,"If you would like to implement your own subscription hooks, you can provide a primary spring bean for ",Object(i.b)("inlineCode",{parentName:"p"},"ApolloSubscriptionHooks")," that overrides the ",Object(i.b)("a",{parentName:"p",href:"https://github.com/ExpediaGroup/graphql-kotlin/blob/master/graphql-kotlin-spring-server/src/main/kotlin/com/expediagroup/graphql/spring/SubscriptionAutoConfiguration.kt"},"default one")," which do not perform any actions."),Object(i.b)("h2",{id:"example"},"Example"),Object(i.b)("p",null,"You can see an example implementation of a ",Object(i.b)("inlineCode",{parentName:"p"},"Subscription")," in the ",Object(i.b)("a",{parentName:"p",href:"https://github.com/ExpediaGroup/graphql-kotlin/blob/master/examples/spring/src/main/kotlin/com/expediagroup/graphql/examples/subscriptions/SimpleSubscription.kt"},"example app"),"."))}l.isMDXComponent=!0},180:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return d}));var n=r(0),o=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=o.a.createContext({}),l=function(e){var t=o.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=l(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(r),m=n,d=u["".concat(p,".").concat(m)]||u[m]||b[m]||i;return r?o.a.createElement(d,a(a({ref:t},c),{},{components:r})):o.a.createElement(d,a({ref:t},c))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,p=new Array(i);p[0]=m;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:n,p[1]=a;for(var c=2;c<i;c++)p[c]=r[c];return o.a.createElement.apply(null,p)}return o.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);