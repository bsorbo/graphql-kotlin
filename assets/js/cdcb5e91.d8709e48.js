(self.webpackChunkgraphql_kotlin_docs=self.webpackChunkgraphql_kotlin_docs||[]).push([[1595],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>p,kt:()=>u});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=d(n),u=r,h=m["".concat(s,".").concat(u)]||m[u]||c[u]||o;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var d=2;d<o;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9353:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>l,contentTitle:()=>s,metadata:()=>d,toc:()=>p,default:()=>m});var a=n(2122),r=n(9756),o=(n(7294),n(3905)),i=["components"],l={id:"apollo-federation",title:"Apollo Federation",original_id:"apollo-federation"},s=void 0,d={unversionedId:"federated/apollo-federation",id:"version-3.x.x/federated/apollo-federation",isDocsHomePage:!1,title:"Apollo Federation",description:"In many cases, exposing single GraphQL API that exposes unified view of all the available data provides tremendous value",source:"@site/versioned_docs/version-3.x.x/federated/apollo-federation.md",sourceDirName:"federated",slug:"/federated/apollo-federation",permalink:"/graphql-kotlin/docs/3.x.x/federated/apollo-federation",editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/versioned_docs/version-3.x.x/federated/apollo-federation.md",version:"3.x.x",lastUpdatedBy:"Dariusz Kuc",lastUpdatedAt:1629925595,formattedLastUpdatedAt:"8/25/2021",frontMatter:{id:"apollo-federation",title:"Apollo Federation",original_id:"apollo-federation"},sidebar:"version-3.x.x/docs",previous:{title:"Introspection",permalink:"/graphql-kotlin/docs/3.x.x/schema-generator/execution/introspection"},next:{title:"Federated Schemas",permalink:"/graphql-kotlin/docs/3.x.x/federated/federated-schemas"}},p=[{value:"Install",id:"install",children:[]},{value:"Usage",id:"usage",children:[{value:"<code>toFederatedSchema</code>",id:"tofederatedschema",children:[]}]},{value:"Example",id:"example",children:[]}],c={toc:p};function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In many cases, exposing single GraphQL API that exposes unified view of all the available data provides tremendous value\nto their clients. As the underlying graph scales, managing single monolithic GraphQL server might become less and less\nfeasible making it much harder to manage and leading to unnecessary bottlenecks. Migrating towards federated model with\nan API gateway and a number of smaller GraphQL services behind it alleviates some of those problems and allows teams to\nscale their graphs more easily."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.apollographql.com/docs/apollo-server/federation/introduction/"},"Apollo Federation")," is an architecture for\ncomposing multiple GraphQL services into a single graph. Federated schemas rely on a number of custom directives to\ninstrument the behavior of the underlying graph and convey the relationships between different schema types. Each individual\nGraphQL server generates a valid GraphQL schema and can be run independently. This is in contrast with traditional schema\nstitching approach where relationships between individual services, i.e. linking configuration, is configured at the GraphQL\nGateway level."),(0,o.kt)("h2",{id:"install"},"Install"),(0,o.kt)("p",null,"Using a JVM dependency manager, link ",(0,o.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-federation")," to your project."),(0,o.kt)("p",null,"With Maven:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"\n<dependency>\n  <groupId>com.expediagroup</groupId>\n  <artifactId>graphql-kotlin-federation</artifactId>\n  <version>${latestVersion}</version>\n</dependency>\n\n")),(0,o.kt)("p",null,"With Gradle:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'\nimplementation("com.expediagroup", "graphql-kotlin-federation", latestVersion)\n\n')),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-federation")," build on top of ",(0,o.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-schema-generator")," and adds a few extra methods and class to use to generate federation\ncompliant schemas."),(0,o.kt)("h3",{id:"tofederatedschema"},(0,o.kt)("inlineCode",{parentName:"h3"},"toFederatedSchema")),(0,o.kt)("p",null,"Just like the basic ",(0,o.kt)("a",{parentName:"p",href:"/graphql-kotlin/docs/3.x.x/schema-generator/schema-generator-getting-started"},"toSchema"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"toFederatedSchema")," accepts four parameters: ",(0,o.kt)("inlineCode",{parentName:"p"},"config"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"queries"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"mutations")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"subscriptions"),".\nThe difference is that the ",(0,o.kt)("inlineCode",{parentName:"p"},"config")," class is of type ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ExpediaGroup/graphql-kotlin/blob/3.x.x/graphql-kotlin-federation/src/main/kotlin/com/expediagroup/graphql/federation/FederatedSchemaGeneratorConfig.kt"},"FederatedSchemaGeneratorConfig"),".\nThis class extends the ",(0,o.kt)("a",{parentName:"p",href:"/graphql-kotlin/docs/3.x.x/schema-generator/customizing-schemas/generator-config"},"base configuration class")," and adds some default logic. You can override the logic if needed, but do so with caution as you may no longer generate a spec compliant schema."),(0,o.kt)("p",null,"You can see the definition for ",(0,o.kt)("inlineCode",{parentName:"p"},"toFederatedSchema")," ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ExpediaGroup/graphql-kotlin/blob/3.x.x/graphql-kotlin-federation/src/main/kotlin/com/expediagroup/graphql/federation/toFederatedSchema.kt"},"in the\nsource")),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'\n@KeyDirective(fields = FieldSet("id"))\ndata class User(\n  val id: ID,\n  val name: String\n)\n\nclass Query {\n  fun getUsers(): List<User> = getUsersFromDB()\n}\n\nval config = FederatedSchemaGeneratorConfig(\n  supportedPackages = "com.example"\n)\n\ntoFederatedSchema(\n  config = config,\n  queries = listOf(TopLevelObject(Query()))\n)\n\n')),(0,o.kt)("p",null,"will generate"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},'\ntype Query {\n getUsers: [User!]!\n}\n\ntype User @key(fields : "id") {\n id: ID!\n name: String!\n}\n\n')))}m.isMDXComponent=!0}}]);