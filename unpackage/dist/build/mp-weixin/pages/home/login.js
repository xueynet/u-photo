(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/home/login"],{"08d7":function(n,t,e){"use strict";var o=e("89bd"),i=e.n(o);i.a},"1b66":function(n,t,e){},"38f4":function(n,t,e){"use strict";var o=e("1b66"),i=e.n(o);i.a},"3b40":function(n,t,e){"use strict";(function(n){e("7a95");o(e("66fd"));var t=o(e("adb9"));function o(n){return n&&n.__esModule?n:{default:n}}wx.__webpack_require_UNI_MP_PLUGIN__=e,n(t.default)}).call(this,e("543d")["createPage"])},"576f":function(n,t,e){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e={data:function(){return{mobile:"15523126997",code:"123456",codeTips:"",avatarUrl:"",nickname:"",UserInfo:"",appid:"wx080951855b0ebc50"}},onShow:function(){this.LoginInit()},methods:{codeChange:function(n){this.codeTips=n},getCode:function(){var t=this;this.$refs.uCode.canGetCode?(n.showLoading({title:"正在获取验证码",mask:!0}),setTimeout((function(){n.hideLoading(),t.$u.toast("验证码已发送"),t.$refs.uCode.start()}),1e3)):this.$u.toast("倒计时结束后再发送")},login:function(t){t={token:"token",userName:"呢称",avatarUrl:"头像"},setTimeout((function(){n.hideLoading(),getApp().globalData.hasLogin=!0,getApp().globalData.user=t,n.setStorageSync("haslogin",!0),n.setStorageSync("user",t),n.navigateBack()}),2e3)},LoginInit:function(){n.getProvider({service:"oauth",success:function(n){console.log(n)}});var t=this;n.getUserInfo({provider:"weixin",lang:"zh_CN",success:function(n){console.log(n,"成功"),t.nickname=n.userInfo.nickName,t.avatarUrl=n.userInfo.avatarUrl,t.UserInfo=n},fail:function(t){n.showModal({title:"用户拒绝授权",showCancel:!1})}})},wechatAppLogin:function(){var t=this;n.showLoading({title:"正在登录",mask:!0}),n.login({provider:"weixin",success:function(n){n.code;console.log(n,"login"),t.login()}})},getUrlCode:function(n){return decodeURIComponent((new RegExp("[?|&]"+n+"=([^&;]+?)(&|#|;|$)").exec(location.href)||[,""])[1].replace(/\+/g,"%20"))||null},wechatLogin:function(){var n=encodeURIComponent(window.location.href);window.location.href="https://open.weixin.qq.com/connect/oauth2/authorize?appid="+this.appid+"&redirect_uri="+n+"&response_type=code&scope=snsapi_base&state=ok#wechat_redirect"},getOpenidAndUserinfo:function(t){n.showLoading({title:"正在登录",mask:!0}),this.login()},bindLogin:function(){this.$u.test.mobile(this.mobile)&&(""!=this.code?(n.showLoading({title:"正在登录",mask:!0}),this.login()):this.$alert("请输入验证码"))}}};t.default=e}).call(this,e("543d")["default"])},"89bd":function(n,t,e){},adb9:function(n,t,e){"use strict";e.r(t);var o=e("f0d6"),i=e("f964");for(var a in i)"default"!==a&&function(n){e.d(t,n,(function(){return i[n]}))}(a);e("08d7"),e("38f4");var u,c=e("f0c5"),r=Object(c["a"])(i["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],u);t["default"]=r.exports},f0d6:function(n,t,e){"use strict";e.d(t,"b",(function(){return i})),e.d(t,"c",(function(){return a})),e.d(t,"a",(function(){return o}));var o={uAvatar:function(){return e.e("uview-ui/components/u-avatar/u-avatar").then(e.bind(null,"f758"))},uButton:function(){return e.e("uview-ui/components/u-button/u-button").then(e.bind(null,"e427"))}},i=function(){var n=this,t=n.$createElement;n._self._c},a=[]},f964:function(n,t,e){"use strict";e.r(t);var o=e("576f"),i=e.n(o);for(var a in o)"default"!==a&&function(n){e.d(t,n,(function(){return o[n]}))}(a);t["default"]=i.a}},[["3b40","common/runtime","common/vendor"]]]);