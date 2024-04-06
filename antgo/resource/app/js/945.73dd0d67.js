"use strict";(self["webpackChunkantgo_web"]=self["webpackChunkantgo_web"]||[]).push([[945,576],{1945:function(e,t,a){a.r(t),a.d(t,{default:function(){return u}});var i=function(){var e=this,t=e._self._c;return t("b-container",{staticStyle:{"margin-top":"30px","max-width":"80%"}},[t("b-row",[t("b-jumbotron",{staticStyle:{width:"100%"},attrs:{header:e.title,lead:e.description}},[""!=e.pre_step?t("b-button",{staticStyle:{width:"100px"},attrs:{variant:"primary"},on:{click:function(t){return e.pre_step_click()}}},[e._v("上一步")]):e._e(),""!=e.next_step?t("b-button",{staticStyle:{width:"100px","margin-left":"20px"},attrs:{variant:"primary"},on:{click:function(t){return e.next_step_click()}}},[e._v("下一步")]):e._e()],1)],1),t("b-row",[t("b-col",[t("b-card",{staticClass:"mt-6",attrs:{header:"输入信息"}},[t("b-container",e._l(e.input_info,(function(a,i){return t("b-row",{key:i},["image"==a["type"]?t("b-col",{staticStyle:{"margin-top":"20px"}},[t("h4",[t("b-badge",{staticStyle:{"font-weight":"300"}},[e._v(e._s(a["name"]))])],1),t("div",{staticStyle:{display:"flex","flex-direction":"column","align-items":"center"}},[a["has_interactive"]?t("div",{staticStyle:{width:"100%",height:"400px",position:"relative","border-style":"solid","border-width":"1px"},attrs:{id:a["name"]}}):t("b-img",{staticStyle:{"max-width":"512px","border-style":"solid","border-width":"1px"},attrs:{src:a["path"],id:a["name"]}})],1),t("b-form-file",{attrs:{state:Boolean("finish"==a["status"]),placeholder:"拖拽文件至此...","drop-placeholder":"Drop file here...",accept:".jpg, .png, .jpeg","browse-text":"打开"},on:{input:function(t){return e.uploadfile(i)}},model:{value:a["value"],callback:function(t){e.$set(a,"value",t)},expression:"input['value']"}}),t("div",{staticClass:"mt-3"},[e._v("上传文件: "+e._s("finish"==a["status"]?a["value"].name+" 完成":""))])],1):e._e(),"video"==a["type"]?t("b-col",{staticStyle:{"margin-top":"20px"}},[t("h5",[e._v(e._s(a["name"]))]),t("video",{attrs:{src:a["path"],controls:""}}),t("b-form-file",{attrs:{state:Boolean("finish"==a["status"]),placeholder:"拖拽文件至此...","drop-placeholder":"Drop file here...",accept:".mp4","browse-text":"打开"},on:{input:function(t){return e.uploadfile(i)}},model:{value:a["value"],callback:function(t){e.$set(a,"value",t)},expression:"input['value']"}}),t("div",{staticClass:"mt-3"},[e._v("上传文件: "+e._s("finish"==a["status"]?a["value"].name+" 完成":""))])],1):e._e(),"text"==a["type"]?t("b-col",[t("b-input-group",{staticClass:"mt-3",attrs:{prepend:a["name"]}},[t("b-form-input",{model:{value:a["value"],callback:function(t){e.$set(a,"value",t)},expression:"input['value']"}})],1)],1):e._e(),"slider"==a["type"]?t("b-col",{staticStyle:{"margin-top":"20px"}},[t("h5",[e._v(e._s(a["name"])+" "+e._s(a["value"]))]),t("b-input-group",{staticClass:"mt-3",attrs:{prepend:a["min"],append:a["max"]}},[t("b-form-input",{attrs:{type:"range",min:a["min"],max:a["max"]},model:{value:a["value"],callback:function(t){e.$set(a,"value",t)},expression:"input['value']"}})],1)],1):e._e(),"checkbox"==a["type"]?t("b-col",{staticStyle:{"margin-top":"20px"}},[t("b-form-checkbox",{attrs:{value:"1","unchecked-value":"0"},model:{value:a["value"],callback:function(t){e.$set(a,"value",t)},expression:"input['value']"}},[e._v(e._s(a["name"]))])],1):e._e(),"select"==a["type"]?t("b-col",{staticStyle:{"margin-top":"20px"}},[t("h5",[e._v(e._s(a["name"]))]),t("b-form-select",{attrs:{options:a["options"]},model:{value:a["value"],callback:function(t){e.$set(a,"value",t)},expression:"input['value']"}})],1):e._e(),"image-search"==a["type"]?t("b-col",{staticStyle:{"margin-top":"20px"}},[t("b-form-group",{attrs:{label:"搜索引擎"},scopedSlots:e._u([{key:"default",fn:function({ariaDescribedby:a}){return[t("b-form-radio-group",{attrs:{id:"radio-group-2","aria-describedby":a,name:"radio-sub-component"},model:{value:e.search_engine,callback:function(t){e.search_engine=t},expression:"search_engine"}},[t("b-form-radio",{attrs:{value:"baidu"}},[e._v("百度")]),t("b-form-radio",{attrs:{value:"bing"}},[e._v("BING")]),t("b-form-radio",{attrs:{value:"vcg"}},[e._v("VCG")])],1)]}}],null,!0)}),t("b-input-group",{staticClass:"mt-3",attrs:{prepend:"搜索词"}},[t("b-form-input",{model:{value:e.search_word,callback:function(t){e.search_word=t},expression:"search_word"}}),t("b-input-group-append",[t("b-button",{attrs:{variant:"info"},on:{click:function(t){return e.search_func()}}},[e._v("搜索")])],1)],1),t("b-container",[t("b-row",e._l(e.search_image_list[e.search_page_i],(function(a,i){return t("div",{key:i,staticClass:"col-lg-4 inner"},[t("img",{staticClass:"img-thumbnail",attrs:{src:a["image"],alt:"..."}}),t("b-form-checkbox",{model:{value:e.search_image_map[a["image"]],callback:function(t){e.$set(e.search_image_map,a["image"],t)},expression:"search_image_map[image_info['image']]"}},[e._v(" 选中 ")])],1)})),0)],1),t("nav",{staticStyle:{"margin-top":"30px"}},[t("ul",{staticClass:"pagination"},e._l(e.search_image_list,(function(a,i){return t("li",{key:i,staticClass:"page-item"},[t("a",{staticClass:"page-link",staticStyle:{cursor:"pointer"},on:{click:function(t){return e.page_change(i)}}},[e._v(e._s(i))])])})),0)]),t("hr",{staticClass:"my-4"})],1):e._e()],1)})),1)],1)],1),t("b-col",[t("b-card",{staticClass:"mt-6",attrs:{header:"输出信息"}},[e.iserror?t("div",[t("b-alert",{attrs:{show:""}},[e._v(e._s(e.error_message))])],1):e.iswaiting?t("div",[t("count-down")],1):t("div",[t("b-container",e._l(e.output_info,(function(a,i){return t("b-row",{key:i},["image"==a["type"]?t("b-col",[t("h4",[t("b-badge",{staticStyle:{"font-weight":"300"}},[e._v(e._s(a["name"]))])],1),t("div",{staticStyle:{display:"flex","flex-direction":"column","align-items":"center"}},[t("div",[a["interactive"]?t("div",{staticStyle:{width:"400px",height:"400px","border-style":"solid","border-width":"1px"},attrs:{id:a["name"]}}):t("b-img",{staticStyle:{"max-width":"512px","border-style":"solid","border-width":"1px"},attrs:{src:a["value"],id:a["name"]}})],1)])]):e._e(),"video"==a["type"]?t("b-col",[t("h3",[t("b-badge",[e._v(e._s(a["name"]))])],1),t("video",{attrs:{src:a["value"],controls:""}})]):e._e(),"text"==a["type"]?t("b-col",[t("b-input-group",{staticClass:"mt-3",attrs:{prepend:a["name"]}},[t("b-form-input",{attrs:{disabled:""},model:{value:a["value"],callback:function(t){e.$set(a,"value",t)},expression:"output['value']"}})],1)],1):e._e(),"number"==a["type"]?t("b-col",[t("b-input-group",{staticClass:"mt-3",attrs:{prepend:a["name"]}},[t("b-form-input",{attrs:{type:"number",disabled:""},model:{value:a["value"],callback:function(t){e.$set(a,"value",t)},expression:"output['value']"}})],1)],1):e._e()],1)})),1)],1)])],1)],1),t("b-row",{staticStyle:{"margin-top":"50px"}},[t("b-button",{staticStyle:{width:"100px"},attrs:{variant:"primary"},on:{click:function(t){return e.submit()}}},[e._v("提交")])],1)],1)},n=[],s=(a(3251),a(7244)),r=a.n(s),o=(a(576),{name:"Demo",data(){return{title:"",demo:"",description:"",input_info:[],output_info:[],image_meta_info:{},iswaiting:!1,iserror:!1,error_message:"",pre_step:"",next_step:"",search_engine:"baidu",search_word:"",search_image_list:[],search_image_map:{},search_page_i:0,search_page_num:10}},mounted:function(){this.$route.params.name&&(this.demo=this.$route.params.name);var e=this;e.axios.get("/antgo/api/demo/query_config/",{params:{demo:e.demo}}).then((function(t){for(var a in e.input_info=t.data["input"],e.input_info)e.input_info[a]["has_interactive"]=!1,Object.keys(e.input_info[a].interactive).length>0&&(e.input_info[a]["has_interactive"]=!0),"image-search"==e.input_info[a]["type"]&&setInterval(e.search_process_listening_func,1e4);e.pre_step=t.data["pre_step"],e.next_step=t.data["next_step"],e.title=t.data["title"],e.description=t.data["description"]})).catch((function(e){console.log(e)}))},methods:{uploadfile:function(e){this.input_info[e]["status"]="uploading";var t=new FormData;t.append("file",this.input_info[e].value);var a=this;a.axios.post("/antgo/api/demo/upload/",t).then((t=>{a.input_info[e]["status"]="finish",a.input_info[e]["path"]=t.data["path"],a.$forceUpdate(),"image"==a.input_info[e]["type"]&&Object.keys(a.input_info[e]["interactive"]).length>0&&(a.initMap(a.input_info[e]["name"],t.data["path"],t.data["height"],t.data["width"]),a.setMode(a.input_info[e]["name"],a.input_info[e]["interactive"]["mode"],a.input_info[e]["interactive"]["num"]))}))},submit:function(){this.iswaiting=!0,this.iserror=!1;var e={input:[],element:[],demo:this.demo};for(var t in this.input_info)if("image"==this.input_info[t]["type"]||"video"==this.input_info[t]["type"])e["input"].push(this.input_info[t]["path"]);else if("image-search"==this.input_info[t]["type"]){var a=[];for(let e in Object.keys(this.search_image_map)){var i=Object.keys(this.search_image_map)[e];this.search_image_map[i]&&a.push(i)}e["input"].push(a)}else e["input"].push(this.input_info[t]["value"]);for(let h in Object.keys(this.image_meta_info)){let t=Object.keys(this.image_meta_info)[h];var n=[],s=this.image_meta_info[t]["feature_layer"].getAllFeatures();for(var r in s)if("RECT"==s[r].type){var o=s[r].shape.width,l=s[r].shape.height,p=s[r].shape.x,c=s[r].shape.y;n.push({data:[p,c,p+o,c+l],type:"RECT"})}else if("POINT"==s[r].type)n.push({data:[s[r].shape.x,s[r].shape.y],type:"POINT"});else if("POLYGON"==s[r].type){var u=[];for(var m in s[r].shape.points)u.push([s[r].shape.points[m].x,s[r].shape.points[m].y]);n.push({data:u,type:"POLYGON"})}else"LINE"==s[r].type&&n.push({data:[[s[r]["shape"]["start"].x,s[r]["shape"]["start"].y],[s[r]["shape"]["end"].x,s[r]["shape"]["end"].y]],type:"LINE"});e["element"].push({name:t,value:n,mode:this.image_meta_info[t]["mode"]})}var d=this;let _=new FormData;_.append("query",JSON.stringify(e)),d.axios.post("/antgo/api/demo/submit/",_).then((function(e){d.output_info=e.data,d.iswaiting=!1,d.$nextTick((()=>{for(let n in e.data){var t=e.data[n]["name"];if("image"==e.data[n]["type"])if(!(t in d.image_meta_info)&&e.data[n]["interactive"])d.initMap(e.data[n]["name"],e.data[n]["value"],e.data[n]["height"],e.data[n]["width"]),d.setMode(e.data[n]["name"],e.data[n]["element"]["mode"],e.data[n]["element"]["num"]);else if(t in d.image_meta_info&&e.data[n]["interactive"]){var a=d.image_meta_info[t]["feature_layer"].getAllFeatures();for(var i in d.initMap(e.data[n]["name"],e.data[n]["value"],e.data[n]["height"],e.data[n]["width"]),d.setMode(e.data[n]["name"],e.data[n]["element"]["mode"],e.data[n]["element"]["num"]),a)d.image_meta_info[t]["feature_layer"].addFeature(a[i])}}}))})).catch((function(e){d.iserror=!0,d.error_message="["+e.response.status.toString()+"]:"+e.response.data.detail})).finally((function(){}))},initMap:function(e,t,a,i){var n=this;const s=new(r().Map)(e,{center:{x:100,y:100},zoom:1e3,mode:"ban",refreshDelayWhenZooming:!0,zoomWhenDrawing:!0,panWhenDrawing:!1,zoomWheelRatio:5,withHotKeys:!1}),o=new(r().Layer.Image)("layer-image",{src:t,width:i,height:a,crossOrigin:!1,position:{x:0,y:0}},{name:"图像层"},{zIndex:5});s.events.on("click",(e=>{console.log("--click--",e)})),s.events.on("drawDone",((t,a,i)=>{if(!(n.image_meta_info[e]["feature_layer"].features.length>=n.image_meta_info[e]["num"]))if("POINT"===t){a["sr"]=5;const t=new(r().Feature.Point)(""+ +new Date,a,{name:"point"},{fillStyle:"#3CB371"});n.image_meta_info[e]["feature_layer"].addFeature(t)}else if("LINE"===t){const t=s.getScale(),i=1/t,o=new(r().Feature.Line)(""+ +new Date,{...a,width:i},{name:"line"},{fillStyle:"rgba(255,255,255,0.5)",strokeStyle:"#3CB371",lineWidth:2,fill:!0});n.image_meta_info[e]["feature_layer"].addFeature(o)}else if("RECT"===t){const t=new(r().Feature.Rect)(""+ +new Date,a,{name:"rect"},{fillStyle:"rgba(255,255,255,0.5)",strokeStyle:"#3CB371",lineWidth:2,fill:!0});n.image_meta_info[e]["feature_layer"].addFeature(t)}else if("POLYGON"===t){const t=new(r().Feature.Polygon)(""+ +new Date,{points:a},{name:"polygon"},{fillStyle:"rgba(255,255,255,0.5)",strokeStyle:"#3CB371",lineWidth:2,fill:!0});n.image_meta_info[e]["feature_layer"].addFeature(t)}})),s.events.on("boundsChanged",(e=>{console.log("--map boundsChanged--")})),s.events.on("featureSelected",(t=>{n.image_meta_info[e]["feature_layer"].removeFeatureById(t.id)})),s.events.on("featureUnselected",(()=>{s.setActiveFeature(null)})),s.events.on("featureUpdated",((e,t)=>{console.log("feature updated")})),s.events.on("featureDeleted",(({id:e})=>{console.log("feature delete")})),s.addLayer(o);const l=new(r().Layer.Feature)("first-layer-feature",{name:"绘制层"},{zIndex:10});s.addLayer(l),n.image_meta_info[e]={},n.image_meta_info[e]["gmap"]=s,n.image_meta_info[e]["image_layer"]=o,n.image_meta_info[e]["feature_layer"]=l,n.image_meta_info[e]["mode"]=""},setMode:function(e,t,a){var i;switch(this.image_meta_info[e]["gmap"].setMode(t),this.image_meta_info[e]["mode"]=t,this.image_meta_info[e]["num"]=a,t){case"POINT":i={fillStyle:"#9370DB",strokeStyle:"#f00"},this.image_meta_info[e]["gmap"].setDrawingStyle(i);break;case"LINE":i={strokeStyle:"#FF0000",lineJoin:"round",lineCap:"round",lineWidth:5,arrow:!1},this.image_meta_info[e]["gmap"].setDrawingStyle(i);break;case"POLYLINE":i={strokeStyle:"#FF1493",lineJoin:"round",lineCap:"round",lineWidth:1},this.image_meta_info[e]["gmap"].setDrawingStyle(i);break;case"RECT":i={strokeStyle:"#f00",lineWidth:1},this.image_meta_info[e]["gmap"].setDrawingStyle(i);break;case"POLYGON":i={strokeStyle:"#00f",fillStyle:"#0f0",globalAlpha:.3,lineWidth:1,fill:!0,stroke:!0},this.image_meta_info[e]["gmap"].setDrawingStyle(i);break;case"TEXT":i={fillStyle:"#00f",lineWidth:30},this.image_meta_info[e]["gmap"].setDrawingStyle(i);break;default:break}},pre_step_click:function(){this.$router.push({path:"/demo/"+this.pre_step}),window.location.reload()},next_step_click:function(){this.$router.push({path:"/demo/"+this.next_step}),window.location.reload()},search_func:function(){""!=this.search_word&&this.axios.get("/antgo/api/demo/search/",{params:{demo:this.demo,search_engine:this.search_engine,search_word:this.search_word}}).then((function(e){}))},search_process_listening_func:function(){var e=this;this.axios.get("/antgo/api/demo/searchprocess/",{params:{demo:this.demo}}).then((function(t){var a=t.data["imagelist"],i=a.length;e.search_image_list=[];for(var n=0;n<i;++n){var s=Math.floor(n/10);e.search_image_list.length<s+1&&e.search_image_list.push([]);var r=a[n];e.search_image_list[s].push({image:r}),Object.prototype.hasOwnProperty.call(e.search_image_map,r)||(e.search_image_map[r]=!1)}e.search_page_num=e.search_image_list.length}))},page_change:function(e){this.search_page_i=e}}}),l=o,p=a(4249),c=(0,p.Z)(l,i,n,!1,null,"1aed6d0b",null),u=c.exports},576:function(e,t,a){a.r(t),a.d(t,{default:function(){return p}});var i=function(){var e=this,t=e._self._c;return t("b-container",{staticStyle:{width:"400px","margin-top":"50px"},attrs:{fluid:""}},[t("b-row",{staticClass:"my-1"},[t("b-col",{attrs:{sm:"3"}},[t("label",[e._v("用户名")])]),t("b-col",{attrs:{sm:"9"}},[t("b-form-input",{attrs:{type:"text"},model:{value:e.username,callback:function(t){e.username=t},expression:"username"}})],1)],1),t("b-row",{staticClass:"my-1"},[t("b-col",{attrs:{sm:"3"}},[t("label",[e._v("密码")])]),t("b-col",{attrs:{sm:"9"}},[t("b-form-input",{attrs:{type:"password"},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}})],1)],1),t("b-row",[t("b-col",{attrs:{sm:"6"}},[t("b-button",{attrs:{variant:"primary"},on:{click:e.login}},[e._v("登录")])],1),t("b-col",{attrs:{sm:"6"}},[t("b-button",{attrs:{variant:"primary"},on:{click:e.logout}},[e._v("登出")])],1)],1)],1)},n=[],s=(a(3251),{name:"Login",data(){return{username:"",password:""}},methods:{login:function(){var e=this;e.axios.get("/antgo/api/user/login/",{params:{user_name:this.username,user_password:this.password}}).then((function(t){e.$router.push({path:"/"})})).catch((function(e){console.log(e)}))},logout:function(){var e=this;e.axios.post("/antgo/api/user/logout/").then((function(t){e.username="",e.password=""})).catch((function(e){console.log(e)}))}}}),r=s,o=a(4249),l=(0,o.Z)(r,i,n,!1,null,"b0da7cec",null),p=l.exports}}]);
//# sourceMappingURL=945.73dd0d67.js.map