"use strict";(self["webpackChunkantgo_web"]=self["webpackChunkantgo_web"]||[]).push([[576],{576:function(t,s,a){a.r(s),a.d(s,{default:function(){return l}});var o=function(){var t=this,s=t._self._c;return s("b-container",{staticStyle:{width:"400px","margin-top":"50px"},attrs:{fluid:""}},[s("b-row",{staticClass:"my-1"},[s("b-col",{attrs:{sm:"3"}},[s("label",[t._v("用户名")])]),s("b-col",{attrs:{sm:"9"}},[s("b-form-input",{attrs:{type:"text"},model:{value:t.username,callback:function(s){t.username=s},expression:"username"}})],1)],1),s("b-row",{staticClass:"my-1"},[s("b-col",{attrs:{sm:"3"}},[s("label",[t._v("密码")])]),s("b-col",{attrs:{sm:"9"}},[s("b-form-input",{attrs:{type:"password"},model:{value:t.password,callback:function(s){t.password=s},expression:"password"}})],1)],1),s("b-row",[s("b-col",{attrs:{sm:"6"}},[s("b-button",{attrs:{variant:"primary"},on:{click:t.login}},[t._v("登录")])],1),s("b-col",{attrs:{sm:"6"}},[s("b-button",{attrs:{variant:"primary"},on:{click:t.logout}},[t._v("登出")])],1)],1)],1)},n=[],r=(a(3251),{name:"Login",data(){return{username:"",password:""}},methods:{login:function(){var t=this;t.axios.get("/antgo/api/user/login/",{params:{user_name:this.username,user_password:this.password}}).then((function(s){t.$router.push({path:"/"})})).catch((function(t){console.log(t)}))},logout:function(){var t=this;t.axios.post("/antgo/api/user/logout/").then((function(s){t.username="",t.password=""})).catch((function(t){console.log(t)}))}}}),e=r,u=a(4249),i=(0,u.Z)(e,o,n,!1,null,"b0da7cec",null),l=i.exports}}]);
//# sourceMappingURL=576.8006e30c.js.map