(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/index"],{"0667":function(n,t,e){"use strict";var u=e("f660"),a=e.n(u);a.a},"18fb":function(n,t,e){"use strict";e.d(t,"b",(function(){return a})),e.d(t,"c",(function(){return i})),e.d(t,"a",(function(){return u}));var u={uNavbar:function(){return e.e("uview-ui/components/u-navbar/u-navbar").then(e.bind(null,"9f36f"))},uSearch:function(){return e.e("uview-ui/components/u-search/u-search").then(e.bind(null,"27ec"))},uLineProgress:function(){return e.e("uview-ui/components/u-line-progress/u-line-progress").then(e.bind(null,"32d8"))},uSwiper:function(){return e.e("uview-ui/components/u-swiper/u-swiper").then(e.bind(null,"2880"))},uGrid:function(){return e.e("uview-ui/components/u-grid/u-grid").then(e.bind(null,"fd0a"))},uGridItem:function(){return e.e("uview-ui/components/u-grid-item/u-grid-item").then(e.bind(null,"30c0"))},uImage:function(){return e.e("uview-ui/components/u-image/u-image").then(e.bind(null,"c61d"))},uWaterfall:function(){return Promise.all([e.e("common/vendor"),e.e("uview-ui/components/u-waterfall/u-waterfall")]).then(e.bind(null,"f7a4"))},uLazyLoad:function(){return e.e("uview-ui/components/u-lazy-load/u-lazy-load").then(e.bind(null,"46a3"))},uTag:function(){return e.e("uview-ui/components/u-tag/u-tag").then(e.bind(null,"4976"))},uIcon:function(){return e.e("uview-ui/components/u-icon/u-icon").then(e.bind(null,"d1e2"))},uLoadmore:function(){return e.e("uview-ui/components/u-loadmore/u-loadmore").then(e.bind(null,"3b7f"))}},a=function(){var n=this,t=n.$createElement;n._self._c},i=[]},"4bb1":function(n,t,e){},"7f96":function(n,t,e){"use strict";var u=e("4bb1"),a=e.n(u);a.a},9568:function(n,t,e){"use strict";(function(n){e("7a95");u(e("66fd"));var t=u(e("c799"));function u(n){return n&&n.__esModule?n:{default:n}}wx.__webpack_require_UNI_MP_PLUGIN__=e,n(t.default)}).call(this,e("543d")["createPage"])},c745:function(n,t,e){"use strict";e.r(t);var u=e("f6a7"),a=e.n(u);for(var i in u)"default"!==i&&function(n){e.d(t,n,(function(){return u[n]}))}(i);t["default"]=a.a},c799:function(n,t,e){"use strict";e.r(t);var u=e("18fb"),a=e("c745");for(var i in a)"default"!==i&&function(n){e.d(t,n,(function(){return a[n]}))}(i);e("0667"),e("7f96");var o,r=e("f0c5"),s=Object(r["a"])(a["default"],u["b"],u["c"],!1,null,null,null,!1,u["a"],o);t["default"]=s.exports},f660:function(n,t,e){},f6a7:function(n,t,e){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e={data:function(){return{keyword:"照相馆",pagenavbg:{background:"#E80000"},progress:0,progresstype:"#19BE6B",swiperlist:[],cbanner:[],gridpage:[],gridlist:[],loadStatus:"loadmore",flowList:[],datalist:[]}},onShow:function(){getApp().globalData.hasLogin&&getApp().globalData.hasLaunch?(getApp().globalData.hasLaunch=!1,this.getdata()):getApp().globalData.hasLogin||this.$u.route({url:"/pages/home/login"})},onLoad:function(n){this.option=n,getApp().globalData.hasLogin&&!getApp().globalData.hasLaunch&&this.getdata()},onPullDownRefresh:function(){console.log("refresh"),setTimeout((function(){n.stopPullDownRefresh()}),1e3)},onReachBottom:function(){var n=this;this.loadStatus="loading",setTimeout((function(){n.addRandomData(),n.loadStatus="loadmore"}),500)},onReady:function(){},methods:{getdata:function(){n.setNavigationBarTitle({title:"照相馆"});for(var t=0;t<this.gridlist.length;t+=8)this.gridpage.push(this.gridlist.slice(t,t+8));this.swiperlist=this.$defalutdata.banner,this.gridlist=this.$defalutdata.lanmu,this.cbanner=this.$defalutdata.cbanner,this.datalist=this.$defalutdata.goods,this.addRandomData(),this.getprogress(0)},navto:function(n,t){this.$u.route({url:n,params:{id:t}})},getprogress:function(n){var t=this;this.progress=n;var e=setInterval((function(){t.progress=t.progress+20,t.progress>=120&&(clearInterval(e),t.progresstype="#e80000")}),200)},addRandomData:function(){var n=this.datalist,t=JSON.parse(JSON.stringify(n)),e=this.flowList.concat(t);this.flowList=e,console.log(e)}}};t.default=e}).call(this,e("543d")["default"])}},[["9568","common/runtime","common/vendor"]]]);