(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{111:function(e,t,a){e.exports=a.p+"static/media/Moog-Logo.cfa76b55.png"},58:function(e,t,a){"use strict";var r=a(36),n=a.n(r),s=a(37),o=a.n(s),l=a(38),i=a.n(l),c=a(39),u=a.n(c),p=a(25),d=a.n(p),f=a(1),h=a.n(f),m=a(47),E=a.n(m),y=a(2),v=a(11),g=a(6),R=a(19),q=a(75),T=a(44);function S(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,r=d()(e);if(t){var n=d()(this).constructor;a=Reflect.construct(r,arguments,n)}else a=r.apply(this,arguments);return u()(this,a)}}var b=function(e){i()(r,e);var t=S(r);function r(){var e;n()(this,r);for(var a=arguments.length,s=new Array(a),o=0;o<a;o++)s[o]=arguments[o];return(e=t.call.apply(t,[this].concat(s))).state={TravelReqId:0,EmployeeName:"",SiteLocation:"",SectorFunction:"",Department:"",Manager:"",ReqStatus:"",Status:""},e.reqIdChange=function(t){e.setState({TravelReqId:t})},e.componentDidMount=function(){},e.approveRequest=function(t){if(t.preventDefault(),0===e.state.TravelReqId)return alert("Please input a valid travel request Id to approve."),!1;var a={ID:e.state.TravelReqId,ReqStatus_Id:3};E.a.post("https://dapps.in.moog.com/TAFWebApi/api/taf/UpdateTravelRequest/",a).then((function(e){"success"===e.data?alert("Update Successful!"):alert("Issue while updating.")})).catch((function(e){e.response?(alert("Error Resp Data ==> ",e.response.data),alert("Error Resp Status ==> ",e.response.status),alert("Error Resp Headers ==> ",e.response.headers)):e.request&&alert("Error Request ==> "+e.request),alert("Error Json ==> "+JSON.stringify(e))}))},e.rejectRequest=function(t){if(t.preventDefault(),0===e.state.TravelReqId)return alert("Please input a valid travel request Id to reject."),!1;var a={ID:e.state.TravelReqId,ReqStatus_Id:4};E.a.post("https://dapps.in.moog.com/TAFWebApi/api/taf/UpdateTravelRequest/",a).then((function(e){"success"===e.data?alert("Update Successful!"):alert("Issue while updating.")})).catch((function(e){e.response?(alert("Error Resp Data ==> ",e.response.data),alert("Error Resp Status ==> ",e.response.status),alert("Error Resp Headers ==> ",e.response.headers)):e.request&&alert("Error Request ==> "+e.request),alert("Error Json ==> "+JSON.stringify(e))}))},e.getReqDetails=function(){if(0===e.state.TravelReqId)return alert("Please input a valid travel request Id."),!1;fetch("https://randomuser.me/api/?results=2",{method:"GET"}).then((function(e){return e.json()})).then((function(e){alert(JSON.stringify(e.results[0])),alert("Request Successful!")})).catch((function(e){e.response?alert("Error Resp Data ==> ",e.response.data):e.request&&alert("Error Request ==> "+e.request),alert("Error Json ==> "+JSON.stringify(e))}))},e}return o()(r,[{key:"render",value:function(){return h.a.createElement(g.a,{style:I.container},h.a.createElement(g.a,{style:I.headerView},h.a.createElement(v.a,{style:I.headerToolName},"Travel Authorization Form"),h.a.createElement(q.a,{style:I.headerLogo,source:a(111)})),h.a.createElement(v.a,{style:I.header},"Travel Request Details"),h.a.createElement(v.a,{style:I.label},"Travel Request Id"),h.a.createElement(R.a,{style:I.inputTxt,onChangeText:this.reqIdChange,keyboardType:"numeric"}),h.a.createElement(v.a,{style:I.label},"Employee Name"),h.a.createElement(R.a,{value:this.state.EmployeeName,style:I.inputTxt}),h.a.createElement(v.a,{style:I.label},"Site Location"),h.a.createElement(R.a,{value:this.state.SiteLocation,style:I.inputTxt}),h.a.createElement(v.a,{style:I.label},"Sector Function"),h.a.createElement(R.a,{value:this.state.SectorFunction,style:I.inputTxt}),h.a.createElement(v.a,{style:I.label},"Department"),h.a.createElement(R.a,{value:this.state.Department,style:I.inputTxt}),h.a.createElement(v.a,{style:I.label},"Manager"),h.a.createElement(R.a,{value:this.state.Manager,style:I.inputTxt}),h.a.createElement(v.a,{style:I.label},"Request Status"),h.a.createElement(R.a,{value:this.state.ReqStatus,style:I.inputTxt}),h.a.createElement(g.a,{style:{paddingTop:10}},h.a.createElement(T.a,{style:I.button,onPress:this.getReqDetails},h.a.createElement(v.a,{style:{color:"white"}},"GET REQUEST DETAILS"))),h.a.createElement(g.a,{style:{paddingTop:5}},h.a.createElement(T.a,{style:I.button,onPress:this.approveRequest},h.a.createElement(v.a,{style:{color:"white"}},"APPROVE"))),h.a.createElement(g.a,{style:{paddingTop:5}},h.a.createElement(T.a,{style:I.button,onPress:this.rejectRequest},h.a.createElement(v.a,{style:{color:"white"}},"REJECT"))))}}]),r}(h.a.Component),I=y.a.create({container:{paddingTop:40},headerView:{flexDirection:"row"},headerToolName:{color:"maroon",textAlign:"left",fontWeight:"bold",fontSize:20},headerLogo:{justifyContent:"flex-end",position:"absolute",right:0},header:{color:"#2296f3",textAlign:"center",fontWeight:"bold",paddingTop:20,fontSize:15},button:{backgroundColor:"#2296f3",padding:10,justifyContent:"center",alignItems:"center"},label:{fontWeight:"bold"},inputTxt:{borderColor:"skyblue",borderWidth:1,height:30,margin:5}});t.a=b},76:function(e,t,a){a(77),e.exports=a(116)},77:function(e,t){"serviceWorker"in navigator&&window.addEventListener("load",(function(){navigator.serviceWorker.register("/expo-service-worker.js",{scope:"/"}).then((function(e){})).catch((function(e){console.info("Failed to register service-worker",e)}))}))}},[[76,1,2]]]);
//# sourceMappingURL=app.9b01720b.chunk.js.map