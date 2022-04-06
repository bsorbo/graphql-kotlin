"use strict";(self.webpackChunkgraphql_kotlin_docs=self.webpackChunkgraphql_kotlin_docs||[]).push([[6923],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),p=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=p(n),d=r,h=m["".concat(c,".").concat(d)]||m[d]||u[d]||o;return n?a.createElement(h,l(l({ref:t},s),{},{components:n})):a.createElement(h,l({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9081:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>d,frontMatter:()=>i,metadata:()=>p,toc:()=>u});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),l=["components"],i={id:"async-models",title:"Async Models"},c=void 0,p={unversionedId:"schema-generator/execution/async-models",id:"schema-generator/execution/async-models",title:"Async Models",description:"By default, graphql-kotlin-schema-generator will resolve all functions synchronously, i.e. it will block the",source:"@site/docs/schema-generator/execution/async-models.md",sourceDirName:"schema-generator/execution",slug:"/schema-generator/execution/async-models",permalink:"/graphql-kotlin/docs/schema-generator/execution/async-models",editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/docs/schema-generator/execution/async-models.md",tags:[],version:"current",lastUpdatedBy:"Samuel Vazquez",lastUpdatedAt:1649271630,formattedLastUpdatedAt:"4/6/2022",frontMatter:{id:"async-models",title:"Async Models"},sidebar:"docs",previous:{title:"Fetching Data",permalink:"/graphql-kotlin/docs/schema-generator/execution/fetching-data"},next:{title:"Exceptions and Partial Data",permalink:"/graphql-kotlin/docs/schema-generator/execution/exceptions"}},s={},u=[{value:"Coroutines",id:"coroutines",level:2},{value:"Structured Concurrency",id:"structured-concurrency",level:3},{value:"CompletableFuture",id:"completablefuture",level:2},{value:"RxJava/Reactor",id:"rxjavareactor",level:2}],m={toc:u};function d(e){var t=e.components,n=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"By default, ",(0,o.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-schema-generator")," will resolve all functions synchronously, i.e. it will block the\nunderlying thread while executing the target function. While you could configure your GraphQL server with execution\nstrategies that execute each query in parallel on some thread pools, instead we highly recommend to utilize asynchronous\nprogramming models."),(0,o.kt)("h2",{id:"coroutines"},"Coroutines"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-schema-generator")," has built-in support for Kotlin coroutines. Provided default\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ExpediaGroup/graphql-kotlin/blob/master/generator/graphql-kotlin-schema-generator/src/main/kotlin/com/expediagroup/graphql/generator/execution/FunctionDataFetcher.kt"},"FunctionDataFetcher"),"\nwill automatically asynchronously execute suspendable functions and convert the result to ",(0,o.kt)("inlineCode",{parentName:"p"},"CompletableFuture")," expected\nby ",(0,o.kt)("inlineCode",{parentName:"p"},"graphql-java"),"."),(0,o.kt)("p",null,"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"data class User(val id: String, val name: String)\n\nclass Query {\n    suspend fun getUser(id: String): User {\n        // Your coroutine logic to get user data\n    }\n}\n")),(0,o.kt)("p",null,"will produce the following schema"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type Query {\n  getUser(id: String!): User\n}\n\ntype User {\n  id: String!\n  name: String!\n}\n")),(0,o.kt)("h3",{id:"structured-concurrency"},"Structured Concurrency"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"graphql-java")," relies on ",(0,o.kt)("inlineCode",{parentName:"p"},"CompletableFuture")," for asynchronous execution of the incoming requests. ",(0,o.kt)("inlineCode",{parentName:"p"},"CompletableFuture")," is\nunaware of any contextual information which means we have to rely on additional mechanism to propagate the coroutine context.\n",(0,o.kt)("inlineCode",{parentName:"p"},"graphql-java")," v17 introduced ",(0,o.kt)("inlineCode",{parentName:"p"},"GraphQLContext")," map as the default mechanism to propagate the contextual information about\nthe request. In order to preserve coroutine context, we need to populate ",(0,o.kt)("inlineCode",{parentName:"p"},"GraphQLContext")," map with a ",(0,o.kt)("inlineCode",{parentName:"p"},"CoroutineScope")," that\nshould be used to execute any suspendable functions."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"val graphQLExecutionScope = CoroutineScope(coroutineContext + SupervisorJob())\nval contextMap = mapOf(\n    CoroutineScope::class to graphQLExecutionScope\n)\n\nval executionInput = ExecutionInput.newExecutionInput()\n    .graphQLContext(contextMap)\n    .query(queryString)\n    .build()\ngraphql.executeAsync(executionInput)\n")),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},(0,o.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-server")," automatically populates ",(0,o.kt)("inlineCode",{parentName:"p"},"GraphQLContext")," map with appropriate coroutine scope. Users can customize\nthe coroutine context by providing ",(0,o.kt)("inlineCode",{parentName:"p"},"CoroutineContext::class")," entry in custom context using ",(0,o.kt)("inlineCode",{parentName:"p"},"GraphQLContextFactory"),"."))),(0,o.kt)("h2",{id:"completablefuture"},"CompletableFuture"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"graphql-java")," relies on Java ",(0,o.kt)("inlineCode",{parentName:"p"},"CompletableFuture")," for asynchronously processing the requests. In order to simplify the\ninterop with ",(0,o.kt)("inlineCode",{parentName:"p"},"graphql-java"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-schema-generator")," has a built-in hook which will automatically unwrap a\n",(0,o.kt)("inlineCode",{parentName:"p"},"CompletableFuture")," and use the inner class as the return type in the schema."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"data class User(val id: String, val name: String)\n\nclass Query {\n    fun getUser(id: String): CompletableFuture<User> {\n        // Your logic to get data asynchronously\n    }\n}\n")),(0,o.kt)("p",null,"will result in the exactly the same schema as in the coroutine example above."),(0,o.kt)("h2",{id:"rxjavareactor"},"RxJava/Reactor"),(0,o.kt)("p",null,"If you want to use a different monad type, like ",(0,o.kt)("inlineCode",{parentName:"p"},"Single")," from ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ReactiveX/RxJava"},"RxJava")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"Mono")," from\n",(0,o.kt)("a",{parentName:"p",href:"https://projectreactor.io/"},"Project Reactor"),", you have to:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Create custom ",(0,o.kt)("inlineCode",{parentName:"li"},"SchemaGeneratorHook")," that implements ",(0,o.kt)("inlineCode",{parentName:"li"},"willResolveMonad")," to provide the necessary logic\nto correctly unwrap the monad and return the inner class to generate valid schema")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"class MonadHooks : SchemaGeneratorHooks {\n    override fun willResolveMonad(type: KType): KType = when (type.classifier) {\n        Mono::class -> type.arguments.firstOrNull()?.type\n        else -> type\n    } ?: type\n}\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Provide custom data fetcher that will properly process those monad types.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"class CustomFunctionDataFetcher(target: Any?, fn: KFunction<*>, objectMapper: ObjectMapper) : FunctionDataFetcher(target, fn, objectMapper) {\n  override fun get(environment: DataFetchingEnvironment): Any? = when (val result = super.get(environment)) {\n    is Mono<*> -> result.toFuture()\n    else -> result\n  }\n}\n\nclass CustomDataFetcherFactoryProvider(\n    private val objectMapper: ObjectMapper\n) : SimpleKotlinDataFetcherFactoryProvider(objectMapper) {\n\n  override fun functionDataFetcherFactory(target: Any?, kFunction: KFunction<*>): DataFetcherFactory<Any> = DataFetcherFactory<Any> {\n    CustomFunctionDataFetcher(\n      target = target,\n      fn = kFunction,\n      objectMapper = objectMapper)\n  }\n}\n")),(0,o.kt)("p",null,"With the above you can then create your schema as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'class ReactorQuery {\n    fun asynchronouslyDo(): Mono<Int> = Mono.just(1)\n}\n\nval configWithReactorMonoMonad = SchemaGeneratorConfig(\n  supportedPackages = listOf("myPackage"),\n  hooks = MonadHooks(),\n  dataFetcherFactoryProvider = CustomDataFetcherFactoryProvider())\n\ntoSchema(queries = listOf(TopLevelObject(ReactorQuery())), config = configWithReactorMonoMonad)\n')),(0,o.kt)("p",null,"This will produce"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type Query {\n  asynchronouslyDo: Int\n}\n")),(0,o.kt)("p",null,"You can find additional example on how to configure the hooks in our ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ExpediaGroup/graphql-kotlin/blob/master/generator/graphql-kotlin-schema-generator/src/test/kotlin/com/expediagroup/graphql/generator/SchemaGeneratorAsyncTests.kt"},"unit\ntests"),"\nand ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ExpediaGroup/graphql-kotlin/blob/master/examples/spring/src/main/kotlin/com/expediagroup/graphql/examples/query/AsyncQuery.kt"},"example app"),"."))}d.isMDXComponent=!0}}]);