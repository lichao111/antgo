"use strict";(self["webpackChunkantgo_web"]=self["webpackChunkantgo_web"]||[]).push([[588],{6588:function(t,e,r){r.r(e),r.d(e,{default:function(){return s}});var n=function(){var t=this,e=t._self._c;return e("div",["LABEL"==t.project_type?e("b-jumbotron",{scopedSlots:t._u([{key:"header",fn:function(){return[t._v("ANTGO-主动标注平台")]},proxy:!0},{key:"lead",fn:function(){return[t._v(" 这是一个主动标注平台，目前平台正处在第"+t._s(t.label_project_state["round"])+"轮挖掘（状态："+t._s(t.label_project_state["stage"])+"）。 ")]},proxy:!0}],null,!1,4166958719)},[e("hr",{staticClass:"my-4"}),"labeling"!=t.label_project_state["stage"]?e("p",[t._v(" 预计需要等待"+t._s(t.label_project_state["waiting_time_to_next_round"])+"后，将要重新启动新一轮标注过程。 ")]):t._e(),e("b-button",{attrs:{variant:"primary",href:"#"}},[t._v("了解详情")]),t.is_ready?e("b-button",{staticStyle:{"margin-left":"10px"},attrs:{variant:"primary"},on:{click:function(e){return t.enter_page()}}},[t._v("进入")]):t._e()],1):t._e(),"BROWSER"==t.project_type?e("b-jumbotron",{scopedSlots:t._u([{key:"header",fn:function(){return[t._v("ANTGO-数据浏览")]},proxy:!0},{key:"lead",fn:function(){return[t._v(" 这是一个数据浏览页面。 ")]},proxy:!0}],null,!1,986879085)},[e("b-button",{attrs:{variant:"primary",href:"#"}},[t._v("了解详情")]),e("b-button",{staticStyle:{"margin-left":"10px"},attrs:{variant:"primary"},on:{click:function(e){return t.enter_page()}}},[t._v("进入")]),t.need_input?e("form",{staticStyle:{"margin-top":"20px"}},[e("label",{attrs:{for:"range-1"}},[t._v("输入样本解析文件:")]),e("div",{staticClass:"form-group"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.user_input,expression:"user_input"}],staticClass:"form-control",attrs:{type:"text",placeholder:"输入数据"},domProps:{value:t.user_input},on:{input:function(e){e.target.composing||(t.user_input=e.target.value)}}})])]):t._e()],1):t._e(),"PREDICT"==t.project_type?e("b-jumbotron",{scopedSlots:t._u([{key:"header",fn:function(){return[t._v("ANTGO-模型预测")]},proxy:!0},{key:"lead",fn:function(){return[t._v(" 这是一个模型预测页面。 ")]},proxy:!0}],null,!1,184319853)},[e("b-button",{attrs:{variant:"primary",href:"#"}},[t._v("了解详情")]),e("b-button",{staticStyle:{"margin-left":"10px"},attrs:{variant:"primary"},on:{click:function(e){return t.enter_page()}}},[t._v("进入")])],1):t._e()],1)},a=[],o=(r(3251),{name:"Welcome",data(){return{project_type:"",label_project_state:{round:-1,state:"",stage:"",waiting_time_to_next_round:""},is_ready:!1,need_input:!1,user_input:""}},mounted:function(){var t=this;t.axios.get("/antgo/api/info/").then((function(e){t.project_type=e.data.content["project_type"],"LABEL"==t.project_type?(t.label_project_state["round"]=e.data.content["project_state"]["round"],t.label_project_state["state"]=e.data.content["project_state"]["state"],t.label_project_state["stage"]=e.data.content["project_state"]["stage"],t.label_project_state["waiting_time_to_next_round"]=e.data.content["project_state"]["waiting_time_to_next_round"],t.is_ready=!0,"labeling"!=t.label_project_state["stage"]&&(t.is_ready=!1)):"BROWSER"==t.project_type?t.need_input=e.data.content["project_state"]["need_input"]:"DEMO"==t.project_type?t.enter_page():t.is_ready=!0})).catch((function(t){console.log(t)}))},methods:{enter_page:function(){"LABEL"==this.project_type?this.$router.push({path:"/projects/"}):"BROWSER"==this.project_type?this.$router.push({path:"/browser/",query:{input:this.user_input}}):"PREDICT"==this.project_type?this.$router.push({path:"/predict/"}):"DEMO"==this.project_type&&this.$router.push({path:"/demo/"})}}}),_=o,p=r(4249),i=(0,p.Z)(_,n,a,!1,null,"5a6567d6",null),s=i.exports}}]);
//# sourceMappingURL=588.b3b06b59.js.map