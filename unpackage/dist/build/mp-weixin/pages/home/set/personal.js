(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/home/set/personal"],{"0fe8":function(e,t,n){"use strict";n.d(t,"b",(function(){return u})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return o}));var o={uAvatar:function(){return n.e("uview-ui/components/u-avatar/u-avatar").then(n.bind(null,"f758"))},uForm:function(){return n.e("uview-ui/components/u-form/u-form").then(n.bind(null,"32ff"))},uFormItem:function(){return Promise.all([n.e("common/vendor"),n.e("uview-ui/components/u-form-item/u-form-item")]).then(n.bind(null,"5e55"))},uInput:function(){return Promise.all([n.e("common/vendor"),n.e("uview-ui/components/u-input/u-input")]).then(n.bind(null,"5078"))},uCheckbox:function(){return n.e("uview-ui/components/u-checkbox/u-checkbox").then(n.bind(null,"ce3f"))},uButton:function(){return n.e("uview-ui/components/u-button/u-button").then(n.bind(null,"e427"))},uActionSheet:function(){return n.e("uview-ui/components/u-action-sheet/u-action-sheet").then(n.bind(null,"a2f3"))},uPicker:function(){return Promise.all([n.e("common/vendor"),n.e("uview-ui/components/u-picker/u-picker")]).then(n.bind(null,"aff9"))}},u=function(){var e=this,t=e.$createElement;e._self._c;e._isMounted||(e.e0=function(t){e.actionSheetShow=!0},e.e1=function(t){e.pickerShow=!0})},a=[]},2547:function(e,t,n){"use strict";var o=n("aade"),u=n.n(o);u.a},3593:function(e,t,n){"use strict";(function(e){n("7a95");o(n("66fd"));var t=o(n("943f"));function o(e){return e&&e.__esModule?e:{default:e}}wx.__webpack_require_UNI_MP_PLUGIN__=n,e(t.default)}).call(this,n("543d")["createPage"])},9301:function(e,t,n){"use strict";var o=n("db1c"),u=n.n(o);u.a},"943f":function(e,t,n){"use strict";n.r(t);var o=n("0fe8"),u=n("d40d");for(var a in u)"default"!==a&&function(e){n.d(t,e,(function(){return u[e]}))}(a);n("2547"),n("9301");var i,r=n("f0c5"),c=Object(r["a"])(u["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],i);t["default"]=c.exports},aade:function(e,t,n){},c284:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={data:function(){return{labelPosition:"top",border:!1,check:!1,errorType:["message"],actionSheetShow:!1,pickerShow:!1,codeTips:"",avatar:"",showUploadList:!1,lists:[],model:{name:"",sex:"",intro:"",agreement:!1,address:""},rules:{name:[{required:!0,message:"请输入呢称",trigger:"blur"},{min:3,max:12,message:"呢称长度在3到12个字符",trigger:["change","blur"]}],sex:[{required:!0,message:"请选择性别",trigger:"change"}],intro:[{required:!0,message:"请填写简介"},{min:5,message:"简介不能少于5个字",trigger:"change"}],address:[{required:!0,message:"请选择地区",trigger:"change"}]},actionSheetList:[{text:"男"},{text:"女"},{text:"保密"}]}},onShow:function(){getApp().globalData.hasLogin&&getApp().globalData.hasLaunch?(getApp().globalData.hasLaunch=!1,this.getdata()):getApp().globalData.hasLogin||this.$u.route({url:"/pages/home/login"})},onLoad:function(e){this.option=e,getApp().globalData.hasLogin&&!getApp().globalData.hasLaunch&&this.getdata()},onReady:function(){this.$refs.uForm.setRules(this.rules)},created:function(){var t=this;e.$on("uAvatarCropper",(function(e){t.avatar=e}))},methods:{getdata:function(){},submit:function(){var t=this;this.$refs.uForm.validate((function(n){if(n){if(!t.model.agreement)return t.$u.toast("请勾选协议");console.log("验证通过"),e.uploadFile({url:"http://www.example.com/upload",filePath:t.avatar,name:"file",complete:function(e){console.log(e)}})}else console.log("验证失败")}))},chooseAvatar:function(){this.$u.route({url:"/uview-ui/components/u-avatar-cropper/u-avatar-cropper",params:{destWidth:200,rectWidth:200,fileType:"jpg"}})},actionSheetCallback:function(t){e.hideKeyboard(),this.model.sex=this.actionSheetList[t].text},checkboxChange:function(e){this.model.agreement=e.value},regionConfirm:function(e){this.model.address=e.province.label+"-"+e.city.label+"-"+e.area.label}}};t.default=n}).call(this,n("543d")["default"])},d40d:function(e,t,n){"use strict";n.r(t);var o=n("c284"),u=n.n(o);for(var a in o)"default"!==a&&function(e){n.d(t,e,(function(){return o[e]}))}(a);t["default"]=u.a},db1c:function(e,t,n){}},[["3593","common/runtime","common/vendor"]]]);