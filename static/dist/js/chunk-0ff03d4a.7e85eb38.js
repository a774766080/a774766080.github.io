(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0ff03d4a"],{"054b":function(t,e,n){"use strict";var r=n("50b2"),a=n.n(r);a.a},"16c0":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home-contaoiner"},[n("van-nav-bar",{staticClass:"page-nav-bar",attrs:{fixed:""},scopedSlots:t._u([{key:"title",fn:function(){return[n("van-button",{staticClass:"info-btn",attrs:{round:"",type:"info",size:"small",icon:"search",to:"/search"}},[t._v("搜索")])]},proxy:!0}])}),n("van-tabs",{staticClass:"tabs-caontaioner",attrs:{swipeable:"",animated:""},scopedSlots:t._u([{key:"nav-right",fn:function(){return[n("div",{staticClass:"placeholder"}),n("i",{staticClass:"iconfont icon-gengduo",on:{click:t.showPopup}})]},proxy:!0}]),model:{value:t.active,callback:function(e){t.active=e},expression:"active"}},t._l(t.channels,(function(t){return n("van-tab",{key:t.id,attrs:{title:t.name}},[n("article-list",{attrs:{channel:t}})],1)})),1),n("van-popup",{style:{height:"100%"},attrs:{position:"bottom",closeable:"","close-icon-position":"top-left"},model:{value:t.editShow,callback:function(e){t.editShow=e},expression:"editShow"}},[n("channel-edit",{attrs:{myChannel:t.channels,active:t.active},on:{update:t.onUpdate}})],1)],1)},a=[],i=(n("96cf"),n("1da1")),c=n("5530"),s=n("c24f"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"article-list",staticClass:"list-contaioner"},[n("van-pull-refresh",{attrs:{"success-text":t.success},on:{refresh:t.onRefresh},model:{value:t.isLoading,callback:function(e){t.isLoading=e},expression:"isLoading"}},[n("van-list",{attrs:{finished:t.finished,"finished-text":"没有更多了",error:t.error,"error-text":"请求失败，点击重新加载"},on:{"update:error":function(e){t.error=e},load:t.onLoad},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},t._l(t.list,(function(t,e){return n("article-item",{key:"="+e,attrs:{article:t}})})),1)],1)],1)},u=[],l=n("2909"),d=n("2423"),f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"article-item"},[n("van-cell-group",[n("van-cell",{attrs:{to:"/article/"+t.article.art_id},scopedSlots:t._u([{key:"title",fn:function(){return[n("div",{staticClass:"item-title van-multi-ellipsis--l2"},[t._v(" "+t._s(t.article.title)+" ")])]},proxy:!0},{key:"label",fn:function(){return[n("div",{staticClass:"item-label"},[t.article.cover.images.length>1?n("div",{staticClass:"cover-wrap"},t._l(t.article.cover.images,(function(t,e){return n("div",{key:"、"+e,staticClass:"cover-item"},[n("img",{attrs:{src:t}})])})),0):t._e(),n("div",{staticClass:"label-info-wrap"},[n("ul",{staticClass:"info-item"},[n("li",[t._v(t._s(t.article.aut_name))]),n("li",[t._v(t._s(t.article.comm_count)+"评论")]),n("li",[t._v(t._s(t._f("relativeTime")(t.article.pubdate)))])])])])]},proxy:!0},1===t.article.cover.images.length?{key:"default",fn:function(){return t._l(t.article.cover.images,(function(t,e){return n("div",{key:","+e,staticClass:"cover-item"},[n("img",{attrs:{src:t}})])}))},proxy:!0}:null],null,!0)})],1)],1)},p=[],h={name:"ArticleItemIndex",props:{article:{type:Object,required:!0}},data:function(){return{}},created:function(){}},m=h,v=(n("a85e"),n("2877")),b=Object(v["a"])(m,f,p,!1,null,"51d8c4fe",null),g=b.exports,_=n("2ef0"),O={name:"ArticleListIndex",props:{channel:{type:Object,required:!0}},data:function(){return{list:[],loading:!1,finished:!1,timestamp:null,error:!1,isLoading:!1,success:"刷新成功",total:0,scrollTop:0}},components:{ArticleItem:g},mounted:function(){var t=this,e=this.$refs["article-list"];e.onscroll=Object(_["debounce"])((function(){t.scrollTop=e.scrollTop}),50)},activated:function(){this.$refs["article-list"].scrollTop=this.scrollTop},methods:{onLoad:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(d["b"])({channel_id:t.channel.id,timestamp:t.timestamp||Date.now(),with_top:1});case 2:if(r=e.sent,"OK"===r.message){e.next=7;break}return t.error=!0,t.loading=!1,e.abrupt("return");case 7:(n=t.list).push.apply(n,Object(l["a"])(r.data.results)),t.loading=!1,r.data.results.length?t.timestamp=r.data.pre_timestamp:t.finished=!0;case 10:case"end":return e.stop()}}),e)})))()},onRefresh:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(d["b"])({channel_id:t.channel.id,timestamp:Date.now(),with_top:1});case 2:if(r=e.sent,"OK"===r.message){e.next=7;break}return t.success="刷新失败",t.isLoading=!1,e.abrupt("return");case 7:t.success="刷新成功，更新了"+r.data.results.length+"条数据",(n=t.list).unshift.apply(n,Object(l["a"])(r.data.results)),t.isLoading=!1,t.$toast("刷新成功");case 11:case"end":return e.stop()}}),e)})))()}}},x=O,C=(n("6997"),Object(v["a"])(x,o,u,!1,null,"24d2ad7b",null)),j=C.exports,k=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"channel-edit"},[n("van-cell",{staticClass:"item-cell",attrs:{border:!1},scopedSlots:t._u([{key:"title",fn:function(){return[n("span",{staticClass:"name"},[t._v("我的频道")])]},proxy:!0}])},[n("van-button",{staticClass:"item-btn",attrs:{type:"danger",size:"mini",plain:"",round:""},on:{click:t.showClose}},[t._v(t._s(t.isFlag?"完成":"编辑"))])],1),n("van-grid",{attrs:{gutter:10}},t._l(t.myChannel,(function(e,r){return n("van-grid-item",{key:e.id,staticClass:"gird-item",on:{click:function(n){return t.editItem(e,r)}},scopedSlots:t._u([{key:"text",fn:function(){return[n("span",{staticClass:"text",class:{active:t.active===r}},[t._v(t._s(e.name)+" ")])]},proxy:!0},{key:"icon",fn:function(){return[n("van-icon",{directives:[{name:"show",rawName:"v-show",value:t.isFlag&&!t.arr.includes(r),expression:"isFlag && !arr.includes(i)"}],staticClass:"icon-item",attrs:{name:"close"}})]},proxy:!0}],null,!0)})})),1),n("van-cell",{staticClass:"edit-cell",attrs:{border:!1},scopedSlots:t._u([{key:"title",fn:function(){return[n("span",{staticClass:"name"},[t._v("频道推荐")])]},proxy:!0}])}),n("van-grid",{staticClass:"edit-gird",attrs:{gutter:10}},t._l(t.removeChannel,(function(e){return n("van-grid-item",{key:e.id,staticClass:"gird-item",attrs:{icon:"plus",text:e.name},on:{click:function(n){return t.addChannel(e)}}})})),1)],1)},w=[],y=(n("4160"),n("caad"),n("a434"),n("a9e3"),n("2532"),n("159b"),n("5d2d")),E=n("2f62"),T={name:"ArticleEditIndex",props:{myChannel:{type:Array,required:!0},active:{type:Number,required:!0}},data:function(){return{channelList:[],isFlag:!1,arr:[0]}},created:function(){this.getChannel()},computed:Object(c["a"])(Object(c["a"])({},Object(E["b"])(["user"])),{},{removeChannel:function(){var t=this,e=[];return this.channelList.forEach((function(n){var r=!1;if(t.myChannel.forEach((function(t){n.id===t.id&&(r=!0)})),!r)return e.push(n)})),e}}),methods:{getChannel:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(d["c"])();case 2:if(n=e.sent,"OK"===n.message){e.next=5;break}return e.abrupt("return",void 0);case 5:t.channelList=n.data.channels;case 6:case"end":return e.stop()}}),e)})))()},addChannel:function(t){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(e.myChannel.push(t),!e.user){n.next=9;break}return n.next=4,Object(d["g"])({id:t.id,seq:e.myChannel.length});case 4:if(r=n.sent,"OK"===r.message){n.next=7;break}return n.abrupt("return",void 0);case 7:n.next=10;break;case 9:Object(y["b"])("toutiao_channel",e.myChannel);case 10:case"end":return n.stop()}}),n)})))()},showClose:function(){this.isFlag=!this.isFlag},editItem:function(t,e){if(this.isFlag){if(this.arr.includes(e))return;e<=this.active&&this.$emit("update",this.active-1),this.deleteChannel(t,e)}else this.$emit("update",e,!1)},deleteChannel:function(t,e){var n=this;return Object(i["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(!n.user){r.next=6;break}return r.next=3,Object(d["e"])(t.id);case 3:n.myChannel.splice(e,1),r.next=7;break;case 6:Object(y["b"])("toutiao_channel",n.myChannel);case 7:case"end":return r.stop()}}),r)})))()}}},I=T,S=(n("054b"),Object(v["a"])(I,k,w,!1,null,"6b9d7cd1",null)),N=S.exports,A={name:"HomeIndex",data:function(){return{active:0,channels:[],editShow:!1}},created:function(){this.getChannels()},components:{ArticleList:j,ChannelEdit:N},computed:Object(c["a"])({},Object(E["b"])(["user"])),methods:{getChannels:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var n,r,a,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n=[],!t.user){e.next=8;break}return e.next=4,Object(s["b"])();case 4:r=e.sent,"OK"===r.message&&(n=r.data.channels),e.next=17;break;case 8:if(a=Object(y["a"])("toutiao_channel"),!a){e.next=13;break}n=a,e.next=17;break;case 13:return e.next=15,Object(s["b"])();case 15:i=e.sent,"OK"===i.message&&(n=i.data.channels);case 17:t.channels=n;case 18:case"end":return e.stop()}}),e)})))()},showPopup:function(){this.editShow=!0},onUpdate:function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];this.active=t,this.editShow=e}}},L=A,R=(n("6802"),Object(v["a"])(L,r,a,!1,null,"25a9fb6c",null));e["default"]=R.exports},2423:function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return i})),n.d(e,"g",(function(){return c})),n.d(e,"e",(function(){return s})),n.d(e,"h",(function(){return o})),n.d(e,"a",(function(){return u})),n.d(e,"f",(function(){return l})),n.d(e,"i",(function(){return d})),n.d(e,"d",(function(){return f}));var r=n("b775"),a=function(t){return Object(r["a"])({method:"GET",url:"/app/v1_1/articles",params:t})},i=function(t){return Object(r["a"])({method:"GET",url:"/app/v1_0/channels",params:t})},c=function(t){return Object(r["a"])({method:"PATCH",url:"/app/v1_0/user/channels",data:{channels:[t]}})},s=function(t){return Object(r["a"])({method:"DELETE",url:"/app/v1_0/user/channels/".concat(t)})},o=function(t){return Object(r["a"])({method:"GET",url:"/app/v1_0/articles/".concat(t)})},u=function(t){return Object(r["a"])({method:"POST",url:"/app/v1_0/article/collections",data:{target:t}})},l=function(t){return Object(r["a"])({method:"DELETE",url:"/app/v1_0/article/collections/".concat(t)})},d=function(t){return Object(r["a"])({method:"POST",url:"/app/v1_0/article/likings",data:{target:t}})},f=function(t){return Object(r["a"])({method:"DELETE",url:"/app/v1_0/article/likings/".concat(t)})}},"50b2":function(t,e,n){},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,n){var r=n("1d80"),a=n("5899"),i="["+a+"]",c=RegExp("^"+i+i+"*"),s=RegExp(i+i+"*$"),o=function(t){return function(e){var n=String(r(e));return 1&t&&(n=n.replace(c,"")),2&t&&(n=n.replace(s,"")),n}};t.exports={start:o(1),end:o(2),trim:o(3)}},6802:function(t,e,n){"use strict";var r=n("9a8f"),a=n.n(r);a.a},6997:function(t,e,n){"use strict";var r=n("c94c"),a=n.n(r);a.a},"9a8f":function(t,e,n){},a85e:function(t,e,n){"use strict";var r=n("e8eb"),a=n.n(r);a.a},a9e3:function(t,e,n){"use strict";var r=n("83ab"),a=n("da84"),i=n("94ca"),c=n("6eeb"),s=n("5135"),o=n("c6b6"),u=n("7156"),l=n("c04e"),d=n("d039"),f=n("7c73"),p=n("241c").f,h=n("06cf").f,m=n("9bf2").f,v=n("58a8").trim,b="Number",g=a[b],_=g.prototype,O=o(f(_))==b,x=function(t){var e,n,r,a,i,c,s,o,u=l(t,!1);if("string"==typeof u&&u.length>2)if(u=v(u),e=u.charCodeAt(0),43===e||45===e){if(n=u.charCodeAt(2),88===n||120===n)return NaN}else if(48===e){switch(u.charCodeAt(1)){case 66:case 98:r=2,a=49;break;case 79:case 111:r=8,a=55;break;default:return+u}for(i=u.slice(2),c=i.length,s=0;s<c;s++)if(o=i.charCodeAt(s),o<48||o>a)return NaN;return parseInt(i,r)}return+u};if(i(b,!g(" 0o1")||!g("0b1")||g("+0x1"))){for(var C,j=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof j&&(O?d((function(){_.valueOf.call(n)})):o(n)!=b)?u(new g(x(e)),n,j):x(e)},k=r?p(g):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),w=0;k.length>w;w++)s(g,C=k[w])&&!s(j,C)&&m(j,C,h(g,C));j.prototype=_,_.constructor=j,c(a,b,j)}},c24f:function(t,e,n){"use strict";n.d(e,"g",(function(){return a})),n.d(e,"c",(function(){return i})),n.d(e,"i",(function(){return c})),n.d(e,"b",(function(){return s})),n.d(e,"a",(function(){return o})),n.d(e,"d",(function(){return u})),n.d(e,"f",(function(){return l})),n.d(e,"e",(function(){return d})),n.d(e,"h",(function(){return f}));var r=n("b775"),a=function(t){return Object(r["a"])({method:"POST",url:"/app/v1_0/authorizations",data:t})},i=function(t){return Object(r["a"])({method:"GET",url:"/app/v1_0/sms/codes/"+t})},c=function(){return Object(r["a"])({method:"GET",url:"/app/v1_0/user"})},s=function(){return Object(r["a"])({method:"GET",url:"/app/v1_0/user/channels"})},o=function(t){return Object(r["a"])({method:"POST",url:"/app/v1_0/user/followings",data:{target:t}})},u=function(t){return Object(r["a"])({method:"DELETE",url:"/app/v1_0/user/followings/"+t})},l=function(t){return Object(r["a"])({method:"GET",url:"/app/v1_0/user/profile"})},d=function(t){return Object(r["a"])({method:"PATCH",url:"/app/v1_0/user/profile",data:t})},f=function(t){return Object(r["a"])({method:"PATCH",url:"/app/v1_0/user/photo",data:t})}},c94c:function(t,e,n){},e8eb:function(t,e,n){}}]);
//# sourceMappingURL=chunk-0ff03d4a.7e85eb38.js.map