(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/yaopinxinxi/add-or-update"],{"03ca":function(t,e,i){"use strict";i.r(e);var n=i("72ca"),r=i.n(n);for(var a in n)"default"!==a&&function(t){i.d(e,t,(function(){return n[t]}))}(a);e["default"]=r.a},"3d47":function(t,e,i){"use strict";var n={"xia-editor":()=>i.e("components/xia-editor/xia-editor").then(i.bind(null,"064f"))},r=function(){var t=this,e=t.$createElement,i=(t._self._c,t.ruleForm.yaopintupian.split(","));t.$mp.data=Object.assign({},{$root:{g0:i}})},a=[];i.d(e,"b",(function(){return r})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return n}))},"48c9":function(t,e,i){"use strict";var n=i("7e73"),r=i.n(n);r.a},"72ca":function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=r(i("a34a"));function r(t){return t&&t.__esModule?t:{default:t}}function a(t,e,i,n,r,a,u){try{var s=t[a](u),o=s.value}catch(c){return void i(c)}s.done?e(o):Promise.resolve(o).then(n,r)}function u(t){return function(){var e=this,i=arguments;return new Promise((function(n,r){var u=t.apply(e,i);function s(t){a(u,n,r,s,o,"next",t)}function o(t){a(u,n,r,s,o,"throw",t)}s(void 0)}))}}var s=function(){return Promise.all([i.e("common/vendor"),i.e("components/w-picker/w-picker")]).then(i.bind(null,"e2b1"))},o=function(){return i.e("components/xia-editor/xia-editor").then(i.bind(null,"064f"))},c={data:function(){return{cross:"",ruleForm:{yaopinmingcheng:"",yaopinleixing:"",zhuzhigongneng:"",yongfayongliang:"",shangjiariqi:"",zhuyishixiang:"",yaopintupian:"",onelimittimes:"-1",alllimittimes:"-1",price:""},user:{},ro:{yaopinmingcheng:!1,yaopinleixing:!1,zhuzhigongneng:!1,yongfayongliang:!1,shangjiariqi:!1,zhuyishixiang:!1,yaopintupian:!1,onelimittimes:!1,alllimittimes:!1,thumbsupnum:!1,crazilynum:!1,price:!1}}},components:{wPicker:s,xiaEditor:o},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(){var e=u(n.default.mark((function e(i){var r,a,u,s;return n.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.ruleForm.shangjiariqi=this.$utils.getCurDate(),r=t.getStorageSync("nowTable"),e.next=4,this.$api.session(r);case 4:if(a=e.sent,this.user=a.data,this.ruleForm.userid=t.getStorageSync("userid"),i.refid&&(this.ruleForm.refid=i.refid,this.ruleForm.nickname=t.getStorageSync("nickname")),!i.id){e.next=14;break}return this.ruleForm.id=i.id,e.next=12,this.$api.info("yaopinxinxi",this.ruleForm.id);case 12:a=e.sent,this.ruleForm=a.data;case 14:if(this.cross=i.cross,!i.cross){e.next=70;break}u=t.getStorageSync("crossObj"),e.t0=n.default.keys(u);case 18:if((e.t1=e.t0()).done){e.next=70;break}if(s=e.t1.value,"yaopinmingcheng"!=s){e.next=24;break}return this.ruleForm.yaopinmingcheng=u[s],this.ro.yaopinmingcheng=!0,e.abrupt("continue",18);case 24:if("yaopinleixing"!=s){e.next=28;break}return this.ruleForm.yaopinleixing=u[s],this.ro.yaopinleixing=!0,e.abrupt("continue",18);case 28:if("zhuzhigongneng"!=s){e.next=32;break}return this.ruleForm.zhuzhigongneng=u[s],this.ro.zhuzhigongneng=!0,e.abrupt("continue",18);case 32:if("yongfayongliang"!=s){e.next=36;break}return this.ruleForm.yongfayongliang=u[s],this.ro.yongfayongliang=!0,e.abrupt("continue",18);case 36:if("shangjiariqi"!=s){e.next=40;break}return this.ruleForm.shangjiariqi=u[s],this.ro.shangjiariqi=!0,e.abrupt("continue",18);case 40:if("zhuyishixiang"!=s){e.next=44;break}return this.ruleForm.zhuyishixiang=u[s],this.ro.zhuyishixiang=!0,e.abrupt("continue",18);case 44:if("yaopintupian"!=s){e.next=48;break}return this.ruleForm.yaopintupian=u[s].split(",")[0],this.ro.yaopintupian=!0,e.abrupt("continue",18);case 48:if("onelimittimes"!=s){e.next=52;break}return this.ruleForm.onelimittimes=u[s],this.ro.onelimittimes=!0,e.abrupt("continue",18);case 52:if("alllimittimes"!=s){e.next=56;break}return this.ruleForm.alllimittimes=u[s],this.ro.alllimittimes=!0,e.abrupt("continue",18);case 56:if("thumbsupnum"!=s){e.next=60;break}return this.ruleForm.thumbsupnum=u[s],this.ro.thumbsupnum=!0,e.abrupt("continue",18);case 60:if("crazilynum"!=s){e.next=64;break}return this.ruleForm.crazilynum=u[s],this.ro.crazilynum=!0,e.abrupt("continue",18);case 64:if("price"!=s){e.next=68;break}return this.ruleForm.price=u[s],this.ro.price=!0,e.abrupt("continue",18);case 68:e.next=18;break;case 70:this.styleChange();case 71:case"end":return e.stop()}}),e,this)})));function i(t){return e.apply(this,arguments)}return i}(),methods:{zhuyishixiangChange:function(t){this.ruleForm.zhuyishixiang=t},styleChange:function(){this.$nextTick((function(){}))},shangjiariqiChange:function(t){this.ruleForm.shangjiariqi=t.target.value,this.$forceUpdate()},yaopintupianTap:function(){var t=this;this.$api.upload((function(e){t.ruleForm.yaopintupian="upload/"+e.file,t.$forceUpdate(),t.$nextTick((function(){t.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var e=u(n.default.mark((function e(){var i,r,a,u,s,o,c,l,h,m;return n.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!this.ruleForm.onelimittimes||this.$validate.isIntNumer(this.ruleForm.onelimittimes)){e.next=3;break}return this.$utils.msg("单限应输入整数"),e.abrupt("return");case 3:if(!this.ruleForm.alllimittimes||this.$validate.isIntNumer(this.ruleForm.alllimittimes)){e.next=6;break}return this.$utils.msg("库存应输入整数"),e.abrupt("return");case 6:if(!this.ruleForm.thumbsupnum||this.$validate.isIntNumer(this.ruleForm.thumbsupnum)){e.next=9;break}return this.$utils.msg("赞应输入整数"),e.abrupt("return");case 9:if(!this.ruleForm.crazilynum||this.$validate.isIntNumer(this.ruleForm.crazilynum)){e.next=12;break}return this.$utils.msg("踩应输入整数"),e.abrupt("return");case 12:if(this.ruleForm.price){e.next=15;break}return this.$utils.msg("价格不能为空"),e.abrupt("return");case 15:if(!this.ruleForm.price||this.$validate.isNumber(this.ruleForm.price)){e.next=18;break}return this.$utils.msg("价格应输入数字"),e.abrupt("return");case 18:if(!this.cross){e.next=34;break}if(s=t.getStorageSync("statusColumnName"),o=t.getStorageSync("statusColumnValue"),""==s){e.next=34;break}if(i||(i=t.getStorageSync("crossObj")),s.startsWith("[")){e.next=30;break}for(c in i)c==s&&(i[c]=o);return l=t.getStorageSync("crossTable"),e.next=28,this.$api.update("".concat(l),i);case 28:e.next=34;break;case 30:r=Number(t.getStorageSync("userid")),a=i["id"],u=t.getStorageSync("statusColumnName"),u=u.replace(/\[/,"").replace(/\]/,"");case 34:if(!a||!r){e.next=56;break}return this.ruleForm.crossuserid=r,this.ruleForm.crossrefid=a,h={page:1,limit:10,crossuserid:r,crossrefid:a},e.next=40,this.$api.list("yaopinxinxi",h);case 40:if(m=e.sent,!(m.data.total>=u)){e.next=46;break}return this.$utils.msg(t.getStorageSync("tips")),e.abrupt("return",!1);case 46:if(!this.ruleForm.id){e.next=51;break}return e.next=49,this.$api.update("yaopinxinxi",this.ruleForm);case 49:e.next=53;break;case 51:return e.next=53,this.$api.add("yaopinxinxi",this.ruleForm);case 53:this.$utils.msgBack("提交成功");case 54:e.next=64;break;case 56:if(!this.ruleForm.id){e.next=61;break}return e.next=59,this.$api.update("yaopinxinxi",this.ruleForm);case 59:e.next=63;break;case 61:return e.next=63,this.$api.add("yaopinxinxi",this.ruleForm);case 63:this.$utils.msgBack("提交成功");case 64:case"end":return e.stop()}}),e,this)})));function i(){return e.apply(this,arguments)}return i}(),optionsChange:function(t){this.index=t.target.value},bindDateChange:function(t){this.date=t.target.value},getDate:function(t){var e=new Date,i=e.getFullYear(),n=e.getMonth()+1,r=e.getDate();return"start"===t?i-=60:"end"===t&&(i+=2),n=n>9?n:"0"+n,r=r>9?r:"0"+r,"".concat(i,"-").concat(n,"-").concat(r)},toggleTab:function(t){this.$refs[t].show()}}};e.default=c}).call(this,i("543d")["default"])},"7c15":function(t,e,i){"use strict";(function(t){i("6cdc"),i("921b");n(i("66fd"));var e=n(i("b7b9"));function n(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,i("543d")["createPage"])},"7e73":function(t,e,i){},b7b9:function(t,e,i){"use strict";i.r(e);var n=i("3d47"),r=i("03ca");for(var a in r)"default"!==a&&function(t){i.d(e,t,(function(){return r[t]}))}(a);i("48c9");var u,s=i("f0c5"),o=Object(s["a"])(r["default"],n["b"],n["c"],!1,null,"7f99f03e",null,!1,n["a"],u);e["default"]=o.exports}},[["7c15","common/runtime","common/vendor"]]]);