"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[20003],{3905:(e,t,i)=>{i.d(t,{Zo:()=>d,kt:()=>h});var n=i(67294);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,n,a=function(e,t){if(null==e)return{};var i,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var i=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(i),m=a,h=c["".concat(s,".").concat(m)]||c[m]||u[m]||r;return i?n.createElement(h,o(o({ref:t},d),{},{components:i})):n.createElement(h,o({ref:t},d))}));function h(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=i.length,o=new Array(r);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<r;p++)o[p]=i[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,i)}m.displayName="MDXCreateElement"},72247:(e,t,i)=>{i.r(t),i.d(t,{contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var n=i(87462),a=(i(67294),i(3905));const r={title:"Write Operations",summary:"In this page, we describe the different write operations in Hudi.",toc:!0,last_modified_at:null},o=void 0,l={unversionedId:"write_operations",id:"version-0.12.2/write_operations",title:"Write Operations",description:"It may be helpful to understand the different write operations of Hudi and how best to leverage them. These operations",source:"@site/versioned_docs/version-0.12.2/write_operations.md",sourceDirName:".",slug:"/write_operations",permalink:"/cn/docs/0.12.2/write_operations",editUrl:"https://github.com/apache/hudi/tree/asf-site/website/versioned_docs/version-0.12.2/write_operations.md",tags:[],version:"0.12.2",frontMatter:{title:"Write Operations",summary:"In this page, we describe the different write operations in Hudi.",toc:!0,last_modified_at:null},sidebar:"docs",previous:{title:"Metadata Table",permalink:"/cn/docs/0.12.2/metadata"},next:{title:"Schema Evolution",permalink:"/cn/docs/0.12.2/schema_evolution"}},s=[{value:"Operation Types",id:"operation-types",children:[{value:"UPSERT",id:"upsert",children:[],level:3},{value:"INSERT",id:"insert",children:[],level:3},{value:"BULK_INSERT",id:"bulk_insert",children:[],level:3},{value:"DELETE",id:"delete",children:[],level:3}],level:2},{value:"Writing path",id:"writing-path",children:[],level:2}],p={toc:s},d="wrapper";function c(e){let{components:t,...i}=e;return(0,a.kt)(d,(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"It may be helpful to understand the different write operations of Hudi and how best to leverage them. These operations\ncan be chosen/changed across each commit/deltacommit issued against the table. See the ",(0,a.kt)("a",{parentName:"p",href:"/docs/writing_data"},"How To docs on Writing Data"),"\nto see more examples."),(0,a.kt)("h2",{id:"operation-types"},"Operation Types"),(0,a.kt)("h3",{id:"upsert"},"UPSERT"),(0,a.kt)("p",null,"This is the default operation where the input records are first tagged as inserts or updates by looking up the index.\nThe records are ultimately written after heuristics are run to determine how best to pack them on storage to optimize for things like file sizing.\nThis operation is recommended for use-cases like database change capture where the input almost certainly contains updates. The target table will never show duplicates. "),(0,a.kt)("h3",{id:"insert"},"INSERT"),(0,a.kt)("p",null,"This operation is very similar to upsert in terms of heuristics/file sizing but completely skips the index lookup step. Thus, it can be a lot faster than upserts\nfor use-cases like log de-duplication (in conjunction with options to filter duplicates mentioned below). This is also suitable for use-cases where the table can tolerate duplicates, but just\nneed the transactional writes/incremental pull/storage management capabilities of Hudi."),(0,a.kt)("h3",{id:"bulk_insert"},"BULK_INSERT"),(0,a.kt)("p",null,"Both upsert and insert operations keep input records in memory to speed up storage heuristics computations faster (among other things) and thus can be cumbersome for\ninitial loading/bootstrapping a Hudi table at first. Bulk insert provides the same semantics as insert, while implementing a sort-based data writing algorithm, which can scale very well for several hundred TBs\nof initial load. However, this just does a best-effort job at sizing files vs guaranteeing file sizes like inserts/upserts do."),(0,a.kt)("h3",{id:"delete"},"DELETE"),(0,a.kt)("p",null,"Hudi supports implementing two types of deletes on data stored in Hudi tables, by enabling the user to specify a different record payload implementation."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Soft Deletes")," : Retain the record key and just null out the values for all the other fields.\nThis can be achieved by ensuring the appropriate fields are nullable in the table schema and simply upserting the table after setting these fields to null."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Hard Deletes")," : A stronger form of deletion is to physically remove any trace of the record from the table. This can be achieved in 3 different ways. ",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Using DataSource, set ",(0,a.kt)("inlineCode",{parentName:"li"},"OPERATION_OPT_KEY")," to ",(0,a.kt)("inlineCode",{parentName:"li"},"DELETE_OPERATION_OPT_VAL"),". This will remove all the records in the DataSet being submitted. "),(0,a.kt)("li",{parentName:"ul"},"Using DataSource, set ",(0,a.kt)("inlineCode",{parentName:"li"},"PAYLOAD_CLASS_OPT_KEY")," to ",(0,a.kt)("inlineCode",{parentName:"li"},'"org.apache.hudi.EmptyHoodieRecordPayload"'),". This will remove all the records in the DataSet being submitted. "),(0,a.kt)("li",{parentName:"ul"},"Using DataSource or DeltaStreamer, add a column named ",(0,a.kt)("inlineCode",{parentName:"li"},"_hoodie_is_deleted")," to DataSet. The value of this column must be set to ",(0,a.kt)("inlineCode",{parentName:"li"},"true")," for all the records to be deleted and either ",(0,a.kt)("inlineCode",{parentName:"li"},"false")," or left null for any records which are to be upserted.")))),(0,a.kt)("h2",{id:"writing-path"},"Writing path"),(0,a.kt)("p",null,"The following is an inside look on the Hudi write path and the sequence of events that occur during a write."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"/docs/configurations#hoodiecombinebeforeinsert"},"Deduping"),(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"First your input records may have duplicate keys within the same batch and duplicates need to be combined or reduced by key."))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"/docs/next/indexing"},"Index Lookup"),(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"Next, an index lookup is performed to try and match the input records to identify which file groups they belong to."))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"/docs/next/file_sizing"},"File Sizing"),(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"Then, based on the average size of previous commits, Hudi will make a plan to add enough records to a small file to get it close to the configured maximum limit."))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"/docs/next/file_layouts"},"Partitioning"),(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"We now arrive at partitioning where we decide what file groups certain updates and inserts will be placed in or if new file groups will be created"))),(0,a.kt)("li",{parentName:"ol"},"Write I/O",(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"Now we actually do the write operations which is either creating a new base file, appending to the log file,\nor versioning an existing base file."))),(0,a.kt)("li",{parentName:"ol"},"Update ",(0,a.kt)("a",{parentName:"li",href:"/docs/next/indexing"},"Index"),(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"Now that the write is performed, we will go back and update the index."))),(0,a.kt)("li",{parentName:"ol"},"Commit",(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"Finally we commit all of these changes atomically. (A ",(0,a.kt)("a",{parentName:"li",href:"/docs/next/writing_data#commit-notifications"},"callback notification")," is exposed)"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"/docs/next/hoodie_cleaner"},"Clean")," (if needed)",(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"Following the commit, cleaning is invoked if needed."))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"/docs/next/compaction"},"Compaction"),(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"If you are using MOR tables, compaction will either run inline, or be scheduled asynchronously"))),(0,a.kt)("li",{parentName:"ol"},"Archive",(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"Lastly, we perform an archival step which moves old ",(0,a.kt)("a",{parentName:"li",href:"/docs/next/timeline"},"timeline")," items to an archive folder.")))))}c.isMDXComponent=!0}}]);