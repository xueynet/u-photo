(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-home-collect"],{"00b9":function(t,e,o){"use strict";o("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"u-tag",props:{type:{type:String,default:"primary"},disabled:{type:[Boolean,String],default:!1},size:{type:String,default:"default"},shape:{type:String,default:"square"},text:{type:[String,Number],default:""},bgColor:{type:String,default:""},color:{type:String,default:""},borderColor:{type:String,default:""},closeColor:{type:String,default:""},index:{type:[Number,String],default:""},mode:{type:String,default:"light"},closeable:{type:Boolean,default:!1},show:{type:Boolean,default:!0}},data:function(){return{}},computed:{customStyle:function(){var t={};return this.color&&(t.color=this.color),this.bgColor&&(t.backgroundColor=this.bgColor),"plain"==this.mode&&this.color&&!this.borderColor?t.borderColor=this.color:t.borderColor=this.borderColor,t},iconStyle:function(){if(this.closeable){var t={};return"mini"==this.size?t.fontSize="20rpx":t.fontSize="22rpx","plain"==this.mode||"light"==this.mode?t.color=this.type:"dark"==this.mode&&(t.color="#ffffff"),this.closeColor&&(t.color=this.closeColor),t}},closeIconColor:function(){return this.closeColor?this.closeColor:this.color?this.color:"dark"==this.mode?"#ffffff":this.type}},methods:{clickTag:function(){this.disabled||this.$emit("click",this.index)},close:function(){this.$emit("close",this.index)}}};e.default=i},"0afc":function(t,e,o){var i=o("24fb");e=i(!1),e.push([t.i,"uni-page-body[data-v-436be2d4]{display:flex}uni-page-body .page[data-v-436be2d4]{flex:1}uni-page-body .page .swiper-box[data-v-436be2d4]{flex:1}.contentpage[data-v-436be2d4]{background:#f9f9f9;padding:%?20?%}.contentpage .item[data-v-436be2d4]{background:#fff;padding:%?15?%;margin-bottom:%?20?%;color:#777}.contentpage .item .title[data-v-436be2d4]{font-size:%?36?%;line-height:%?60?%;height:%?120?%;color:#333}.contentpage .item .image[data-v-436be2d4]{margin-left:%?20?%}.contentpage .productitem[data-v-436be2d4]{flex-direction:row-reverse}.contentpage .productitem .title[data-v-436be2d4]{font-size:%?26?%;line-height:%?40?%;height:%?80?%;overflow:hidden;text-overflow:ellipsis}.contentpage .productitem .image[data-v-436be2d4]{margin-left:%?0?%;margin-right:%?20?%}.contentpage .productitem .price[data-v-436be2d4]{margin-bottom:%?15?%;font-size:%?32?%}.contentpage .productitem .u-tag[data-v-436be2d4]{margin-right:%?10?%}.contentpage .newsitem[data-v-436be2d4]{flex-direction:row}",""]),t.exports=e},"0b3f":function(t,e,o){"use strict";var i=o("6e58"),a=o.n(i);a.a},"1a5c":function(t,e,o){"use strict";o("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"u-image",props:{src:{type:String,default:""},mode:{type:String,default:"aspectFill"},width:{type:[String,Number],default:"100%"},height:{type:[String,Number],default:"auto"},shape:{type:String,default:"square"},borderRadius:{type:[String,Number],default:0},lazyLoad:{type:Boolean,default:!0},showMenuByLongpress:{type:Boolean,default:!0},loadingIcon:{type:String,default:"photo"},errorIcon:{type:String,default:"error-circle"},showLoading:{type:Boolean,default:!0},showError:{type:Boolean,default:!0},fade:{type:Boolean,default:!0},webp:{type:Boolean,default:!1},duration:{type:[String,Number],default:500},bgColor:{type:String,default:"#f3f4f6"}},data:function(){return{isError:!1,loading:!0,opacity:1,durationTime:this.duration,backgroundStyle:{}}},watch:{src:{immediate:!0,handler:function(t){t?this.isError=!1:(this.isError=!0,this.loading=!1)}}},computed:{wrapStyle:function(){var t={};return t.width=this.$u.addUnit(this.width),t.height=this.$u.addUnit(this.height),t.borderRadius="circle"==this.shape?"50%":this.$u.addUnit(this.borderRadius),t.overflow=this.borderRadius>0?"hidden":"visible",this.fade&&(t.opacity=this.opacity,t.transition="opacity ".concat(Number(this.durationTime)/1e3,"s ease-in-out")),t}},methods:{onClick:function(){this.$emit("click")},onErrorHandler:function(t){this.loading=!1,this.isError=!0,this.$emit("error",t)},onLoadHandler:function(){var t=this;if(this.loading=!1,this.isError=!1,this.$emit("load"),!this.fade)return this.removeBgColor();this.opacity=0,this.durationTime=0,setTimeout((function(){t.durationTime=t.duration,t.opacity=1,setTimeout((function(){t.removeBgColor()}),t.durationTime)}),50)},removeBgColor:function(){this.backgroundStyle={backgroundColor:"transparent"}}}};e.default=i},"1e41":function(t,e,o){"use strict";o.r(e);var i=o("8420"),a=o.n(i);for(var r in i)"default"!==r&&function(t){o.d(e,t,(function(){return i[t]}))}(r);e["default"]=a.a},"1f7d":function(t,e,o){"use strict";o.d(e,"b",(function(){return a})),o.d(e,"c",(function(){return r})),o.d(e,"a",(function(){return i}));var i={uIcon:o("d1e2").default},a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-uni-view",{staticClass:"u-image",style:[t.wrapStyle,t.backgroundStyle],on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClick.apply(void 0,arguments)}}},[t.isError?t._e():o("v-uni-image",{staticClass:"u-image__image",style:{borderRadius:"circle"==t.shape?"50%":t.$u.addUnit(t.borderRadius)},attrs:{src:t.src,mode:t.mode,"lazy-load":t.lazyLoad,"show-menu-by-longpress":t.showMenuByLongpress},on:{error:function(e){arguments[0]=e=t.$handleEvent(e),t.onErrorHandler.apply(void 0,arguments)},load:function(e){arguments[0]=e=t.$handleEvent(e),t.onLoadHandler.apply(void 0,arguments)}}}),t.showLoading&&t.loading?o("v-uni-view",{staticClass:"u-image__loading",style:{borderRadius:"circle"==t.shape?"50%":t.$u.addUnit(t.borderRadius),backgroundColor:this.bgColor}},[t.$slots.loading?t._t("loading"):o("u-icon",{attrs:{name:t.loadingIcon,width:t.width,height:t.height}})],2):t._e(),t.showError&&t.isError&&!t.loading?o("v-uni-view",{staticClass:"u-image__error",style:{borderRadius:"circle"==t.shape?"50%":t.$u.addUnit(t.borderRadius)}},[t.$slots.error?t._t("error"):o("u-icon",{attrs:{name:t.errorIcon,width:t.width,height:t.height}})],2):t._e()],1)},r=[]},2384:function(t,e,o){"use strict";var i=o("46fd"),a=o.n(i);a.a},"46fd":function(t,e,o){var i=o("b6f9");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=o("4f06").default;a("781700f2",i,!0,{sourceMap:!1,shadowMode:!1})},4976:function(t,e,o){"use strict";o.r(e);var i=o("837a"),a=o("9725");for(var r in a)"default"!==r&&function(t){o.d(e,t,(function(){return a[t]}))}(r);o("2384");var n,c=o("f0c5"),d=Object(c["a"])(a["default"],i["b"],i["c"],!1,null,"f9fc84c6",null,!1,i["a"],n);e["default"]=d.exports},"568f":function(t,e,o){"use strict";o.r(e);var i=o("1a5c"),a=o.n(i);for(var r in i)"default"!==r&&function(t){o.d(e,t,(function(){return i[t]}))}(r);e["default"]=a.a},"6e58":function(t,e,o){var i=o("cda9");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=o("4f06").default;a("2afe4ac1",i,!0,{sourceMap:!1,shadowMode:!1})},"714f":function(t,e,o){"use strict";o.r(e);var i=o("7fbf"),a=o("1e41");for(var r in a)"default"!==r&&function(t){o.d(e,t,(function(){return a[t]}))}(r);o("8395");var n,c=o("f0c5"),d=Object(c["a"])(a["default"],i["b"],i["c"],!1,null,"436be2d4",null,!1,i["a"],n);e["default"]=d.exports},"7fbf":function(t,e,o){"use strict";o.d(e,"b",(function(){return a})),o.d(e,"c",(function(){return r})),o.d(e,"a",(function(){return i}));var i={uTabsSwiper:o("2b1f").default,uIcon:o("d1e2").default,uTag:o("4976").default,uImage:o("c61d").default},a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-uni-view",{staticClass:"page"},[o("u-tabs-swiper",{ref:"uTabs",attrs:{"inactive-color":"#333","active-color":"#da3c03","bar-width":"100",list:t.tabs,current:t.current,"is-scroll":!1},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.tabsChange.apply(void 0,arguments)}}}),o("v-uni-swiper",{staticClass:"swiper-box",attrs:{current:t.swiperCurrent},on:{transition:function(e){arguments[0]=e=t.$handleEvent(e),t.transition.apply(void 0,arguments)},animationfinish:function(e){arguments[0]=e=t.$handleEvent(e),t.animationfinish.apply(void 0,arguments)}}},t._l(t.tabs,(function(e,i){return o("v-uni-swiper-item",{key:i,staticClass:"swiper-item"},[o("v-uni-scroll-view",{staticClass:"swiper_scroll fillbox",attrs:{"scroll-y":!0}},[o("v-uni-view",{staticClass:"contentpage"},t._l(e.data,(function(e,a){return o("v-uni-view",{key:a,staticClass:"item",class:0==i?"productitem":"newsitem"},[o("v-uni-view",{staticClass:"fillbox flex-col"},[o("v-uni-view",{staticClass:"title"},[t._v(t._s(e.title))]),0==i?o("v-uni-view",[o("v-uni-view",{staticClass:"price flex-center"},[o("u-icon",{attrs:{"custom-prefix":"iconfont icon-yen-sign",size:"20"}}),o("v-uni-text",[t._v(t._s(e.price))])],1),o("v-uni-view",{staticClass:"tools flex-center"},[o("u-tag",{attrs:{size:"mini",type:"error",mode:"dark",text:"自营"}}),o("u-tag",{attrs:{size:"mini",type:"primary",mode:"dark",text:"放心购"}})],1)],1):o("v-uni-view",{staticClass:"flex-row"},[o("v-uni-view",[t._v(t._s(e.soure))]),o("v-uni-view",[t._v(t._s(e.adddate))])],1)],1),o("v-uni-view",{staticClass:"image"},[o("u-image",{attrs:{height:"180",width:"220",src:e.image}})],1)],1)})),1)],1)],1)})),1)],1)},r=[]},"837a":function(t,e,o){"use strict";o.d(e,"b",(function(){return a})),o.d(e,"c",(function(){return r})),o.d(e,"a",(function(){return i}));var i={uIcon:o("d1e2").default},a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return t.show?o("v-uni-view",{staticClass:"u-tag",class:[t.disabled?"u-disabled":"","u-size-"+t.size,"u-shape-"+t.shape,"u-mode-"+t.mode+"-"+t.type],style:[t.customStyle],on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.clickTag.apply(void 0,arguments)}}},[t._v(t._s(t.text)),o("v-uni-view",{staticClass:"u-icon-wrap",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e)}}},[t.closeable?o("u-icon",{staticClass:"u-close-icon",style:[t.iconStyle],attrs:{size:"22",color:t.closeIconColor,name:"close"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.close.apply(void 0,arguments)}}}):t._e()],1)],1):t._e()},r=[]},8395:function(t,e,o){"use strict";var i=o("e50d"),a=o.n(i);a.a},8420:function(t,e,o){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o={data:function(){return{current:0,swiperCurrent:0,tabs:[{name:"产品服务",data:[{image:"//img12.360buyimg.com/n7/jfs/t1/52408/35/3554/78293/5d12e9cfEfd118ba1/ba5995e62cbd747f.jpg!q90.jpg",title:"企业微信 中控人脸指纹识别考勤机刷脸机 无线签到异地多店打卡机WX108",price:"451"},{image:"//img12.360buyimg.com/n7/jfs/t1/52408/35/3554/78293/5d12e9cfEfd118ba1/ba5995e62cbd747f.jpg!q90.jpg",title:"企业微信 中控人脸指纹识别考勤机刷脸机 无线签到异地多店打卡机WX108",price:"451"}]},{name:"新闻资讯",data:[{title:"标题2",soure:"作者",adddate:"2022-01-20",image:"//img10.360buyimg.com/n7/jfs/t1/107598/17/3766/525060/5e143aacE9a94d43c/03573ae60b8bf0ee.jpg"},{title:"标题2",soure:"作者",adddate:"2022-01-20",image:"//img10.360buyimg.com/n7/jfs/t1/107598/17/3766/525060/5e143aacE9a94d43c/03573ae60b8bf0ee.jpg"}]}]}},onPullDownRefresh:function(){t("log","refresh"," at pages/home/collect.nvue:86"),setTimeout((function(){uni.stopPullDownRefresh()}),1e3)},methods:{tabsChange:function(t){this.swiperCurrent=t},transition:function(t){var e=t.detail.dx;this.$refs.uTabs.setDx(e)},animationfinish:function(t){var e=t.detail.current;this.$refs.uTabs.setFinishCurrent(e),this.swiperCurrent=e,this.current=e}}};e.default=o}).call(this,o("0de9")["log"])},9725:function(t,e,o){"use strict";o.r(e);var i=o("00b9"),a=o.n(i);for(var r in i)"default"!==r&&function(t){o.d(e,t,(function(){return i[t]}))}(r);e["default"]=a.a},b6f9:function(t,e,o){var i=o("24fb");e=i(!1),e.push([t.i,".u-tag[data-v-f9fc84c6]{box-sizing:border-box;align-items:center;border-radius:%?6?%;display:inline-block;line-height:1}.u-size-default[data-v-f9fc84c6]{font-size:%?22?%;padding:%?12?% %?22?%}.u-size-mini[data-v-f9fc84c6]{font-size:%?20?%;padding:%?6?% %?12?%}.u-mode-light-primary[data-v-f9fc84c6]{background-color:#ecf5ff;color:#2979ff;border:1px solid #a0cfff}.u-mode-light-success[data-v-f9fc84c6]{background-color:#dbf1e1;color:#19be6b;border:1px solid #71d5a1}.u-mode-light-error[data-v-f9fc84c6]{background-color:#fef0f0;color:#fa3534;border:1px solid #fab6b6}.u-mode-light-warning[data-v-f9fc84c6]{background-color:#fdf6ec;color:#f90;border:1px solid #fcbd71}.u-mode-light-info[data-v-f9fc84c6]{background-color:#f4f4f5;color:#909399;border:1px solid #c8c9cc}.u-mode-dark-primary[data-v-f9fc84c6]{background-color:#2979ff;color:#fff}.u-mode-dark-success[data-v-f9fc84c6]{background-color:#19be6b;color:#fff}.u-mode-dark-error[data-v-f9fc84c6]{background-color:#fa3534;color:#fff}.u-mode-dark-warning[data-v-f9fc84c6]{background-color:#f90;color:#fff}.u-mode-dark-info[data-v-f9fc84c6]{background-color:#909399;color:#fff}.u-mode-plain-primary[data-v-f9fc84c6]{background-color:#fff;color:#2979ff;border:1px solid #2979ff}.u-mode-plain-success[data-v-f9fc84c6]{background-color:#fff;color:#19be6b;border:1px solid #19be6b}.u-mode-plain-error[data-v-f9fc84c6]{background-color:#fff;color:#fa3534;border:1px solid #fa3534}.u-mode-plain-warning[data-v-f9fc84c6]{background-color:#fff;color:#f90;border:1px solid #f90}.u-mode-plain-info[data-v-f9fc84c6]{background-color:#fff;color:#909399;border:1px solid #909399}.u-disabled[data-v-f9fc84c6]{opacity:.55}.u-shape-circle[data-v-f9fc84c6]{border-radius:%?100?%}.u-shape-circleRight[data-v-f9fc84c6]{border-radius:0 %?100?% %?100?% 0}.u-shape-circleLeft[data-v-f9fc84c6]{border-radius:%?100?% 0 0 %?100?%}.u-close-icon[data-v-f9fc84c6]{margin-left:%?14?%;font-size:%?22?%;color:#19be6b}.u-icon-wrap[data-v-f9fc84c6]{display:inline-flex;-webkit-transform:scale(.86);transform:scale(.86)}",""]),t.exports=e},c61d:function(t,e,o){"use strict";o.r(e);var i=o("1f7d"),a=o("568f");for(var r in a)"default"!==r&&function(t){o.d(e,t,(function(){return a[t]}))}(r);o("0b3f");var n,c=o("f0c5"),d=Object(c["a"])(a["default"],i["b"],i["c"],!1,null,"00140dbc",null,!1,i["a"],n);e["default"]=d.exports},cda9:function(t,e,o){var i=o("24fb");e=i(!1),e.push([t.i,".u-image[data-v-00140dbc]{position:relative;transition:opacity .5s ease-in-out}.u-image__image[data-v-00140dbc]{width:100%;height:100%}.u-image__loading[data-v-00140dbc], .u-image__error[data-v-00140dbc]{position:absolute;top:0;left:0;width:100%;height:100%;\ndisplay:flex;flex-direction:row;\nalign-items:center;justify-content:center;background-color:#f3f4f6;color:#909399;font-size:%?46?%}",""]),t.exports=e},e50d:function(t,e,o){var i=o("0afc");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=o("4f06").default;a("4391ef21",i,!0,{sourceMap:!1,shadowMode:!1})}}]);