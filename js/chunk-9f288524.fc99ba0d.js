(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9f288524"],{"116c":function(t,n,e){"use strict";var i=e("dee7"),r=e.n(i);r.a},"25f0":function(t,n,e){"use strict";var i=e("6eeb"),r=e("825a"),a=e("d039"),o=e("ad6d"),c="toString",s=RegExp.prototype,l=s[c],u=a((function(){return"/a/b"!=l.call({source:"a",flags:"b"})})),d=l.name!=c;(u||d)&&i(RegExp.prototype,c,(function(){var t=r(this),n=String(t.source),e=t.flags,i=String(void 0===e&&t instanceof RegExp&&!("flags"in s)?o.call(t):e);return"/"+n+"/"+i}),{unsafe:!0})},2909:function(t,n,e){"use strict";function i(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,i=new Array(n);e<n;e++)i[e]=t[e];return i}function r(t){if(Array.isArray(t))return i(t)}e.d(n,"a",(function(){return s}));e("a4d3"),e("e01a"),e("d28b"),e("a630"),e("d3b7"),e("3ca3"),e("ddb0");function a(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}e("fb6a"),e("b0c0"),e("25f0");function o(t,n){if(t){if("string"===typeof t)return i(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?i(t,n):void 0}}function c(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function s(t){return r(t)||a(t)||o(t)||c()}},"3ca3":function(t,n,e){"use strict";var i=e("6547").charAt,r=e("69f3"),a=e("7dd0"),o="String Iterator",c=r.set,s=r.getterFor(o);a(String,"String",(function(t){c(this,{type:o,string:String(t),index:0})}),(function(){var t,n=s(this),e=n.string,r=n.index;return r>=e.length?{value:void 0,done:!0}:(t=i(e,r),n.index+=t.length,{value:t,done:!1})}))},"4df4":function(t,n,e){"use strict";var i=e("0366"),r=e("7b0b"),a=e("9bdd"),o=e("e95a"),c=e("50c4"),s=e("8418"),l=e("35a1");t.exports=function(t){var n,e,u,d,f,v,h=r(t),p="function"==typeof this?this:Array,g=arguments.length,m=g>1?arguments[1]:void 0,y=void 0!==m,b=l(h),_=0;if(y&&(m=i(m,g>2?arguments[2]:void 0,2)),void 0==b||p==Array&&o(b))for(n=c(h.length),e=new p(n);n>_;_++)v=y?m(h[_],_):h[_],s(e,_,v);else for(d=b.call(h),f=d.next,e=new p;!(u=f.call(d)).done;_++)v=y?a(d,m,[u.value,_],!0):u.value,s(e,_,v);return e.length=_,e}},"58bf":function(t,n,e){"use strict";e.r(n);var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"collection"},[e("navBar",{attrs:{to:"/home/my",title:"收藏/历史"}}),e("van-tabs",{attrs:{sticky:"","offset-top":"44px","title-active-color":"#3296fa",color:"#3296fa"},model:{value:t.activeIndex,callback:function(n){t.activeIndex=n},expression:"activeIndex"}},[e("van-tab",{attrs:{title:"收藏",name:"collection"},on:{click:function(n){return t.changeItem("collection")}}},[e("van-list",{attrs:{finished:t.collectionfinished,"finished-text":"没有更多了"},on:{load:t.loadData},model:{value:t.collectionloading,callback:function(n){t.collectionloading=n},expression:"collectionloading"}},t._l(t.collectionList,(function(n,i){return e("div",{key:i},[e("div",{staticClass:"item"},[e("div",{staticClass:"info"},[e("h4",{staticClass:"title van-multi-ellipsis--l2",on:{click:function(e){return t.$router.push("/detail/"+n.art_id+"?ref="+t.$route.fullPath)}}},[t._v(" "+t._s(n.title)+" ")]),e("div",{staticClass:"content"},t._l(n.cover.images,(function(t,n){return e("van-image",{key:n,staticClass:"img",attrs:{src:t}})})),1),e("p",{staticClass:"push"},[e("span",[t._v(t._s(n.aut_name))]),e("span",[t._v(t._s(t._f("formatTime")(n.pubdate)))])])]),e("van-grid",{attrs:{direction:"horizontal","column-num":3}},[e("van-grid-item",{attrs:{icon:"comment-o",text:String(n.comm_count)}}),e("van-grid-item",{class:{red:n.is_liking},attrs:{icon:"good-job-o",text:n.is_liking?"已赞":"点赞"},on:{click:function(e){return t.like(n)}}}),e("van-grid-item",{attrs:{icon:"star-o",text:String(n.like_count)}})],1)],1)])})),0)],1),e("van-tab",{attrs:{title:"历史",name:"history"},on:{click:function(n){return t.changeItem("history")}}},[e("van-list",{staticClass:"item",attrs:{finished:t.historyfinished,"finished-text":"没有更多了"},on:{load:t.loadData},model:{value:t.historyloading,callback:function(n){t.historyloading=n},expression:"historyloading"}},t._l(t.historyList,(function(n,i){return e("div",{key:i},[e("div",{staticClass:"item"},[e("div",{staticClass:"info"},[e("h4",{staticClass:"title van-multi-ellipsis--l2",on:{click:function(e){return t.$router.push("/detail/"+n.art_id+"?ref="+t.$route.fullPath)}}},[t._v(" "+t._s(n.title)+" ")]),e("div",{staticClass:"content"},t._l(n.cover.images,(function(t,n){return e("van-image",{key:n,staticClass:"img",attrs:{src:t}})})),1),e("p",{staticClass:"push"},[e("span",[t._v(t._s(n.aut_name))]),e("span",[t._v(t._s(t._f("formatTime")(n.pubdate)))])])]),e("van-grid",{attrs:{direction:"horizontal","column-num":3}},[e("van-grid-item",{attrs:{icon:"comment-o",text:String(n.comm_count)}}),e("van-grid-item",{class:{red:n.is_liking},attrs:{icon:"good-job-o",text:n.is_liking?"已赞":"点赞"},on:{click:function(e){return t.like(n)}}}),e("van-grid-item",{attrs:{icon:"star-o",text:String(n.like_count)}})],1)],1)])})),0)],1)],1)],1)},r=[],a=e("2909"),o=(e("96cf"),e("1da1")),c=e("aa2a"),s="collection",l="history",u={HISTORY:l,COLLECTION:s},d={name:"collection",data:function(){return{collectionloading:!1,collectionfinished:!1,historyloading:!1,historyfinished:!1,activeIndex:this.$route.params.type||s,TYPE:u,collectionQuery:{page:0,per_page:10},historyQuery:{page:0,per_page:10},historyList:[],collectionList:[],scroll:0}},methods:{scrollDis:function(){return window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0},changeItem:function(t){var n=this.scrollDis();window.scrollTo(0,this.scroll),this.activeIndex=t,this.scroll=n,this.loadData()},collectionOnLoad:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function n(){var e,i;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return t.collectionQuery.page++,n.next=3,Object(c["c"])(t.collectionQuery);case 3:i=n.sent,(e=t.collectionList).push.apply(e,Object(a["a"])(i.data.results)),t.collectionloading=!1,t.collectionfinished=!i.data.results.length||t.collectionList.length>=i.data.total_count;case 7:case"end":return n.stop()}}),n)})))()},historyOnLoad:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function n(){var e,i;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return t.historyQuery.page++,n.next=3,Object(c["g"])(t.historyQuery);case 3:i=n.sent,(e=t.historyList).push.apply(e,Object(a["a"])(i.data.results)),t.historyloading=!1,t.historyfinished=!i.data.results.length||t.historyList.length>=i.data.total_count;case 7:case"end":return n.stop()}}),n)})))()},like:function(t){return Object(o["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,Object(c["f"])(t.art_id,t.is_liking);case 2:t.is_liking=!t.is_liking;case 3:case"end":return n.stop()}}),n)})))()},loadData:function(){this.activeIndex===l?this.historyOnLoad():this.collectionOnLoad()}},created:function(){this.loadData()}},f=d,v=(e("116c"),e("2877")),h=Object(v["a"])(f,i,r,!1,null,"46dc0400",null);n["default"]=h.exports},a630:function(t,n,e){var i=e("23e7"),r=e("4df4"),a=e("1c7e"),o=!a((function(t){Array.from(t)}));i({target:"Array",stat:!0,forced:o},{from:r})},aa2a:function(t,n,e){"use strict";e.d(n,"a",(function(){return r})),e.d(n,"i",(function(){return a})),e.d(n,"f",(function(){return o})),e.d(n,"e",(function(){return c})),e.d(n,"h",(function(){return s})),e.d(n,"b",(function(){return l})),e.d(n,"d",(function(){return u})),e.d(n,"c",(function(){return d})),e.d(n,"g",(function(){return f}));var i=e("b775"),r=function(t){var n=t.channelId,e=t.withTop;return Object(i["a"])({url:"/app/v1_1/articles",method:"GET",params:{channel_id:n,with_top:e,timestamp:1556789000001},unNeedToken:!0})},a=function(t){return Object(i["a"])({url:"/app/v1_0/articles/"+t,method:"GET"})},o=function(t){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],e={url:"/app/v1_0/article/likings",method:n?"DELETE":"POST"};return n?e.url+="/".concat(t):e.data={target:t},Object(i["a"])(e)},c=function(t){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],e={url:"/app/v1_0/article/dislikes",method:n?"DELETE":"POST"};return n?e.url+="/".concat(t):e.data={target:t},Object(i["a"])(e)},s=function(t){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],e={url:"/app/v1_0/comments",method:n?"POST":"GET"};return n?e.data=t:e.params=t,Object(i["a"])(e)},l=function(t){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],e={url:"/app/v1_0/article/collections",method:n?"DELETE":"POST"};return n?e.url+="/".concat(t):e.data={target:t},Object(i["a"])(e)},u=function(t){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],e={url:"/app/v1_0/comment/likings",method:n?"DELETE":"POST"};return n?e.url+="/".concat(t):e.data={target:t},Object(i["a"])(e)},d=function(t){return Object(i["a"])({url:"/app/v1_0/article/collections",method:"GET",params:t})},f=function(t){return Object(i["a"])({url:"/app/v1_0/user/histories",method:"GET",params:t})}},b0c0:function(t,n,e){var i=e("83ab"),r=e("9bf2").f,a=Function.prototype,o=a.toString,c=/^\s*function ([^ (]*)/,s="name";i&&!(s in a)&&r(a,s,{configurable:!0,get:function(){try{return o.call(this).match(c)[1]}catch(t){return""}}})},d28b:function(t,n,e){var i=e("746f");i("iterator")},ddb0:function(t,n,e){var i=e("da84"),r=e("fdbc"),a=e("e260"),o=e("9112"),c=e("b622"),s=c("iterator"),l=c("toStringTag"),u=a.values;for(var d in r){var f=i[d],v=f&&f.prototype;if(v){if(v[s]!==u)try{o(v,s,u)}catch(p){v[s]=u}if(v[l]||o(v,l,d),r[d])for(var h in a)if(v[h]!==a[h])try{o(v,h,a[h])}catch(p){v[h]=a[h]}}}},dee7:function(t,n,e){},e01a:function(t,n,e){"use strict";var i=e("23e7"),r=e("83ab"),a=e("da84"),o=e("5135"),c=e("861d"),s=e("9bf2").f,l=e("e893"),u=a.Symbol;if(r&&"function"==typeof u&&(!("description"in u.prototype)||void 0!==u().description)){var d={},f=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),n=this instanceof f?new u(t):void 0===t?u():u(t);return""===t&&(d[n]=!0),n};l(f,u);var v=f.prototype=u.prototype;v.constructor=f;var h=v.toString,p="Symbol(test)"==String(u("test")),g=/^Symbol\((.*)\)[^)]+$/;s(v,"description",{configurable:!0,get:function(){var t=c(this)?this.valueOf():this,n=h.call(t);if(o(d,t))return"";var e=p?n.slice(7,-1):n.replace(g,"$1");return""===e?void 0:e}}),i({global:!0,forced:!0},{Symbol:f})}},fb6a:function(t,n,e){"use strict";var i=e("23e7"),r=e("861d"),a=e("e8b5"),o=e("23cb"),c=e("50c4"),s=e("fc6a"),l=e("8418"),u=e("b622"),d=e("1dde"),f=e("ae40"),v=d("slice"),h=f("slice",{ACCESSORS:!0,0:0,1:2}),p=u("species"),g=[].slice,m=Math.max;i({target:"Array",proto:!0,forced:!v||!h},{slice:function(t,n){var e,i,u,d=s(this),f=c(d.length),v=o(t,f),h=o(void 0===n?f:n,f);if(a(d)&&(e=d.constructor,"function"!=typeof e||e!==Array&&!a(e.prototype)?r(e)&&(e=e[p],null===e&&(e=void 0)):e=void 0,e===Array||void 0===e))return g.call(d,v,h);for(i=new(void 0===e?Array:e)(m(h-v,0)),u=0;v<h;v++,u++)v in d&&l(i,u,d[v]);return i.length=u,i}})}}]);
//# sourceMappingURL=chunk-9f288524.fc99ba0d.js.map