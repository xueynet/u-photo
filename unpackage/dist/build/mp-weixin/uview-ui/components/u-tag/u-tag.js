(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["uview-ui/components/u-tag/u-tag"],{"04d0":function(t,o,e){"use strict";e.d(o,"b",(function(){return n})),e.d(o,"c",(function(){return i})),e.d(o,"a",(function(){return r}));var r={uIcon:function(){return e.e("uview-ui/components/u-icon/u-icon").then(e.bind(null,"d1e2"))}},n=function(){var t=this,o=t.$createElement,e=(t._self._c,t.show?t.__get_style([t.customStyle]):null),r=t.show&&t.closeable?t.__get_style([t.iconStyle]):null;t.$mp.data=Object.assign({},{$root:{s0:e,s1:r}})},i=[]},"0f1c":function(t,o,e){"use strict";var r=e("c02b"),n=e.n(r);n.a},4976:function(t,o,e){"use strict";e.r(o);var r=e("04d0"),n=e("9725");for(var i in n)"default"!==i&&function(t){e.d(o,t,(function(){return n[t]}))}(i);e("0f1c");var l,u=e("f0c5"),c=Object(u["a"])(n["default"],r["b"],r["c"],!1,null,"d45ea6be",null,!1,r["a"],l);o["default"]=c.exports},9725:function(t,o,e){"use strict";e.r(o);var r=e("c4d6"),n=e.n(r);for(var i in r)"default"!==i&&function(t){e.d(o,t,(function(){return r[t]}))}(i);o["default"]=n.a},c02b:function(t,o,e){},c4d6:function(t,o,e){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var r={name:"u-tag",props:{type:{type:String,default:"primary"},disabled:{type:[Boolean,String],default:!1},size:{type:String,default:"default"},shape:{type:String,default:"square"},text:{type:[String,Number],default:""},bgColor:{type:String,default:""},color:{type:String,default:""},borderColor:{type:String,default:""},closeColor:{type:String,default:""},index:{type:[Number,String],default:""},mode:{type:String,default:"light"},closeable:{type:Boolean,default:!1},show:{type:Boolean,default:!0}},data:function(){return{}},computed:{customStyle:function(){var t={};return this.color&&(t.color=this.color),this.bgColor&&(t.backgroundColor=this.bgColor),"plain"==this.mode&&this.color&&!this.borderColor?t.borderColor=this.color:t.borderColor=this.borderColor,t},iconStyle:function(){if(this.closeable){var t={};return"mini"==this.size?t.fontSize="20rpx":t.fontSize="22rpx","plain"==this.mode||"light"==this.mode?t.color=this.type:"dark"==this.mode&&(t.color="#ffffff"),this.closeColor&&(t.color=this.closeColor),t}},closeIconColor:function(){return this.closeColor?this.closeColor:this.color?this.color:"dark"==this.mode?"#ffffff":this.type}},methods:{clickTag:function(){this.disabled||this.$emit("click",this.index)},close:function(){this.$emit("close",this.index)}}};o.default=r}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'uview-ui/components/u-tag/u-tag-create-component',
    {
        'uview-ui/components/u-tag/u-tag-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("4976"))
        })
    },
    [['uview-ui/components/u-tag/u-tag-create-component']]
]);
