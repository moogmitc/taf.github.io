(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{111:function(e,t,a){e.exports=a.p+"static/media/Moog-Logo.cfa76b55.png"},58:function(e,t,a){"use strict";var n=a(36),r=a.n(n),o=a(37),l=a.n(o),i=a(38),s=a.n(i),c=a(39),u=a.n(c),p=a(25),d=a.n(p),f=a(1),h=a.n(f),m=a(44),v=a.n(m),y=a(2),g=a(11),E=a(6),T=a(19),q=a(75),R=a(45);function S(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=d()(e);if(t){var r=d()(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return u()(this,a)}}var b=function(e){s()(n,e);var t=S(n);function n(){var e;r()(this,n);for(var a=arguments.length,o=new Array(a),l=0;l<a;l++)o[l]=arguments[l];return(e=t.call.apply(t,[this].concat(o))).state={TravelReqId:0,EmployeeName:"",SiteLocation:"",SectorFunction:"",Department:"",Manager:"",ReqStatus:"",Status:""},e.reqIdChange=function(t){e.setState({TravelReqId:t})},e.componentDidMount=function(){},e.approveRequest=function(t){if(t.preventDefault(),0===e.state.TravelReqId)return alert("Please input a valid travel request Id to approve."),!1;var a={ID:e.state.TravelReqId,ReqStatus_Id:3};v.a.post("https://dapps.in.moog.com/TAFWebApi/api/taf/UpdateTravelRequest/",a).then((function(e){"success"===e.data?alert("Update Successful!"):alert("Issue while updating.")})).catch((function(e){alert("error while approving the request ==> "+e)}))},e.rejectRequest=function(t){if(t.preventDefault(),0===e.state.TravelReqId)return alert("Please input a valid travel request Id to reject."),!1;var a={ID:e.state.TravelReqId,ReqStatus_Id:4};v.a.post("https://dapps.in.moog.com/TAFWebApi/api/taf/UpdateTravelRequest/",a).then((function(e){"success"===e.data?alert("Update Successful!"):alert("Issue while updating.")})).catch((function(e){alert("Error while rejecting the request ==> "+e)}))},e.getReqDetails=function(){if(0===e.state.TravelReqId)return alert("Please input a valid travel request Id."),!1;v.a.get("https://dapps.in.moog.com/TAFWebApi/api/taf/GetTravelRequestDetails?travelReqId="+e.state.TravelReqId).then((function(t){var a=t.data[0];e.setState({EmployeeName:a.EmployeeName,SiteLocation:a.SiteLocation,SectorFunction:a.SectorFunction,Department:a.Department,Manager:a.SupervisorName,ReqStatus:a.ReqStatus}),alert("Request Successful!")})).catch((function(e){alert("Error while getting request details ==> "+e)}))},e}return l()(n,[{key:"render",value:function(){return h.a.createElement(E.a,{style:I.container},h.a.createElement(E.a,{style:I.headerView},h.a.createElement(g.a,{style:I.headerToolName},"Travel Authorization Form"),h.a.createElement(q.a,{style:I.headerLogo,source:a(111)})),h.a.createElement(g.a,{style:I.header},"Travel Request Details"),h.a.createElement(g.a,{style:I.label},"Travel Request Id"),h.a.createElement(T.a,{style:I.inputTxt,onChangeText:this.reqIdChange,keyboardType:"numeric"}),h.a.createElement(g.a,{style:I.label},"Employee Name"),h.a.createElement(T.a,{value:this.state.EmployeeName,style:I.inputTxt}),h.a.createElement(g.a,{style:I.label},"Site Location"),h.a.createElement(T.a,{value:this.state.SiteLocation,style:I.inputTxt}),h.a.createElement(g.a,{style:I.label},"Sector Function"),h.a.createElement(T.a,{value:this.state.SectorFunction,style:I.inputTxt}),h.a.createElement(g.a,{style:I.label},"Department"),h.a.createElement(T.a,{value:this.state.Department,style:I.inputTxt}),h.a.createElement(g.a,{style:I.label},"Manager"),h.a.createElement(T.a,{value:this.state.Manager,style:I.inputTxt}),h.a.createElement(g.a,{style:I.label},"Request Status"),h.a.createElement(T.a,{value:this.state.ReqStatus,style:I.inputTxt}),h.a.createElement(E.a,{style:{paddingTop:10}},h.a.createElement(R.a,{style:I.button,onPress:this.getReqDetails},h.a.createElement(g.a,{style:{color:"white"}},"GET REQUEST DETAILS"))),h.a.createElement(E.a,{style:{paddingTop:5}},h.a.createElement(R.a,{style:I.button,onPress:this.approveRequest},h.a.createElement(g.a,{style:{color:"white"}},"APPROVE"))),h.a.createElement(E.a,{style:{paddingTop:5}},h.a.createElement(R.a,{style:I.button,onPress:this.rejectRequest},h.a.createElement(g.a,{style:{color:"white"}},"REJECT"))))}}]),n}(h.a.Component),I=y.a.create({container:{paddingTop:40},headerView:{flexDirection:"row"},headerToolName:{color:"maroon",textAlign:"left",fontWeight:"bold",fontSize:20},headerLogo:{justifyContent:"flex-end",position:"absolute",right:0},header:{color:"#2296f3",textAlign:"center",fontWeight:"bold",paddingTop:20,fontSize:15},button:{backgroundColor:"#2296f3",padding:10,justifyContent:"center",alignItems:"center"},label:{fontWeight:"bold"},inputTxt:{borderColor:"skyblue",borderWidth:1,height:30,margin:5}});t.a=b},76:function(e,t,a){a(77),e.exports=a(116)},77:function(e,t){"serviceWorker"in navigator&&window.addEventListener("load",(function(){navigator.serviceWorker.register("/expo-service-worker.js",{scope:"/"}).then((function(e){})).catch((function(e){console.info("Failed to register service-worker",e)}))}))}},[[76,1,2]]]);
//# sourceMappingURL=app.b52a7356.chunk.js.map