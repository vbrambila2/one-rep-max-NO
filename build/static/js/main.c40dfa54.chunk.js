(this["webpackJsonpone-rep-max"]=this["webpackJsonpone-rep-max"]||[]).push([[0],{267:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),c=n(31),r=n.n(c),o=n(118),s=n(45),d=n(126),u=n(125),p=n(12),l=n(27),m=Object(l.a)(),j=n(14),x=n(44),b=n(283),f=n(285),O=n(1),h=Object(b.a)((function(e){return{homeHeader:{background:"#C4C4C4",textAlign:"center",boxShadow:"0px 2px 2px #A9A9A9",fontFamily:"PT Sans Caption",fontSize:"36px",marginBottom:"20px",paddingTop:"20px",paddingBottom:"10px",textTransform:"uppercase",position:"fixed",top:0,left:0,width:"100%"},header:{background:"#C4C4C4",textAlign:"center",boxShadow:"0px 2px 2px #A9A9A9",fontFamily:"PT Sans Caption",fontSize:"36px",marginBottom:"20px",paddingTop:"20px",paddingBottom:"10px",textTransform:"uppercase",position:"fixed",top:0,left:0,width:"100%",display:"flex",justifyContent:"space-between",zIndex:9999},homeButton:{boxShadow:"0px 2px 2px #A9A9A9",fontFamily:"PT Sans Caption",fontSize:"20px",marginLeft:"10px",marginBottom:"10px",marginTop:"5px",borderRadius:"10px"},fakeText:{visibility:"hidden"}}})),v=function(e){var t=h(),n=Object(a.useState)(e.title),i=Object(x.a)(n,1)[0];return""===Object(p.d)().pathname.split("/")[1]?Object(O.jsx)("div",{className:t.homeHeader,children:i}):Object(O.jsxs)("div",{className:t.header,children:[Object(O.jsx)(f.a,{variant:"contained",className:t.homeButton,onClick:function(){return m.push("/")},children:"Home"}),i,Object(O.jsx)("div",{className:t.fakeText,children:"-------"})]})},g=n(10),y=n(39),C=n.n(y),S=n(66),N="UPDATE_MOVEMENT",M="DELETE_MOVEMENT",T="CREATE_MOVEMENT",w=n(120),R=n.n(w).a.create({baseURL:"http://localhost:3001"}),A=n(288),k=n(287),P=Object(b.a)((function(){return{addPage:{display:"flex",justifyContent:"center",marginTop:"100px"},addMovementDiv:{background:"#C4C4C4",fontFamily:"PT Sans Caption",fontSize:"18px",borderRadius:"10px",padding:"20px",marginTop:"50px",display:"flex",flexDirection:"column",textAlign:"right"},movementName:{padding:"10px",margin:"10px"},textBoxColor:{background:"white",borderRadius:"10px"},movementWeight:{margin:"10px",padding:"10px"},addButton:{width:"50px",borderRadius:"10px",marginLeft:"95px"}}})),D=function(e){var t=e.input,n=e.label,a=e.meta;return Object(O.jsxs)("div",{children:[Object(O.jsxs)("label",{children:[n,":   "]}),Object(O.jsx)("input",Object(j.a)(Object(j.a)({},t),{},{type:"text"})),Object(O.jsx)("div",{style:{fontSize:"15px",color:"red"},children:B(a)})]})},E=function(e){var t=e.input,n=e.label,a=e.meta;return Object(O.jsxs)("div",{children:[Object(O.jsxs)("label",{children:[n,":   "]}),Object(O.jsx)("input",Object(j.a)(Object(j.a)({},t),{},{type:"number"})),Object(O.jsx)("div",{style:{fontSize:"15px",color:"red"},children:B(a)})]})},B=function(e){var t=e.error;if(e.touched&&t)return Object(O.jsx)("div",{children:t})},F=Object(k.a)({form:"addMovementForm",validate:function(e){var t={};return e.movementName||(t.movementName="Please enter a Name"),e.movementWeight||(t.movementWeight="Please enter a Weight"),t}})((function(e){var t=P();return Object(O.jsxs)("div",{children:[Object(O.jsx)(v,{title:"Add Movement"}),Object(O.jsx)("div",{className:t.addPage,children:Object(O.jsx)("div",{className:t.addMovementDiv,children:Object(O.jsxs)("form",{onSubmit:e.handleSubmit((function(t){e.createMovement(t)})),children:[Object(O.jsx)(A.a,{name:"movementName",component:D,label:"Movement Name"}),Object(O.jsx)(A.a,{name:"movementWeight",component:E,label:"One Rep Max"}),Object(O.jsx)("button",{children:"Submit"})]})})})]})})),W=Object(g.b)((function(e){return{move:e.move}}),(function(e){return{createMovement:function(t){return e(function(e){return function(){var t=Object(S.a)(C.a.mark((function t(n){var a;return C.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return m.push("/"),t.next=3,R.post("/movements",e);case 3:a=t.sent,n({type:T,payload:a.data});case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(t))}}}))(F),z=n(286),_=n(123),H=n.n(_),I=Object(b.a)((function(e){return{fabDiv:{display:"flex",justifyContent:"flex-end",position:"absolute",bottom:e.spacing(2),right:e.spacing(2)},fab:{background:"#C4C4C4"}}})),L=function(){var e=I();return Object(O.jsx)("div",{className:e.fabDiv,children:Object(O.jsx)(z.a,{className:e.fab,onClick:function(){return m.push("/add")},children:Object(O.jsx)(H.a,{})})})},U=Object(b.a)((function(e){return{movementButtons:{fontFamily:"PT Sans Caption",marginTop:"30px",borderRadius:"10px",background:"#C4C4C4",boxShadow:"0px 2px 2px #A9A9A9",width:"400px",display:"flex",flexDirection:"column"},noMovementsMessage:{marginTop:"30px",fontFamily:"PT Sans Caption",fontSize:"20px",textTransform:"uppercase"},movementButtonsDiv:{marginTop:"100px"}}})),J=Object(g.b)((function(e){return{move:Object.values(e.move)}}))((function(e){var t=U(),n=e.move.map((function(e){return Object(O.jsxs)(f.a,{className:t.movementButtons,onClick:function(){return m.push("/movement/".concat(e.id,"/").concat(e.movementName,"/").concat(e.movementWeight))},children:[e.movementName," - ",e.movementWeight,"lbs"]},e.movementName)}));return Object(O.jsx)("div",{className:t.movementButtonsDiv,children:0===n.length?Object(O.jsx)("div",{className:t.noMovementsMessage,children:"Click add button to begin"}):Object(O.jsx)("div",{children:n})})})),V=Object(b.a)((function(e){return{homePageContent:{display:"flex",justifyContent:"center",alignItems:"center"}}})),X=function(e){var t=V();return Object(O.jsxs)("div",{className:t.homePageContent,children:[Object(O.jsx)(v,{title:"One Rep Max"}),Object(O.jsx)(J,{}),Object(O.jsx)(L,{})]})},q=Object(b.a)((function(e){return{updateButton:{boxShadow:"0px 2px 2px #A9A9A9",background:"#e0e0e0",borderRadius:"10px",width:"10%",textAlign:"center",marginLeft:"5px",marginRight:"5px"}}})),G=function(e){var t=q(),n=Object(p.d)().pathname.split("/"),a=n[2],i=n[3];return Object(O.jsx)(f.a,{className:t.updateButton,onClick:function(){return m.push("/update/".concat(a,"/").concat(i))},children:"Update"})},K=Object(b.a)((function(e){return{updateButton:{boxShadow:"0px 2px 2px #A9A9A9",background:"#e0e0e0",borderRadius:"10px",width:"10%",textAlign:"center",marginLeft:"5px",marginRight:"5px"}}})),Q=function(e){var t=K(),n=Object(p.d)().pathname.split("/"),a=n[2],i=n[3];return Object(O.jsx)(f.a,{className:t.updateButton,onClick:function(){return m.push("/delete/".concat(a,"/").concat(i))},children:"Delete"})},Y=Object(b.a)((function(){return{oneRepMaxWeight:{display:"flex",alignItems:"center",justifyContent:"center",padding:"10px",fontFamily:"PT Sans Caption",fontSize:"18px",marginTop:"100px"},oneRepMaxWeightNumber:{padding:"5px"},oneRepMaxChart:{background:"#C4C4C4",borderRadius:"10px",borderCollapse:"separate",borderSpacing:"10px",display:"flex",flexDirection:"column"},chartHeader:{borderRadius:"10px",padding:"5px",fontSize:"24px",display:"flex",justifyContent:"space-around"},chartBox:{background:"#E7E7E7",border:"1px solid #C4C4C4",padding:"5px",fontSize:"24px",display:"flex",justifyContent:"space-around",fontFamily:"PT Sans Caption"},buttons:{display:"flex",justifyContent:"center",paddingBottom:"20px"}}})),Z=Object(g.b)((function(e){return{weight:Object.values(e.move)}}))((function(e){var t=Y(),n=Object(p.d)().pathname.split("/")[3],i=Object(a.useState)([]),c=Object(x.a)(i,2),r=c[0],o=c[1],s=e.weight.find((function(e){return e.movementName===n}));Object(a.useEffect)((function(){for(var e=[],t=100;t>50;)e.push([t,s.movementWeight*t/100]),t-=5;o(e)}),[]);return Object(O.jsxs)("div",{children:[Object(O.jsxs)("div",{className:t.oneRepMaxWeight,children:["One Rep Max:",Object(O.jsx)("div",{className:t.oneRepMaxWeightNumber,children:0===s.movementWeight.length?Object(O.jsx)("div",{children:"No 1RM recorded"}):Object(O.jsx)("div",{children:s.movementWeight})})]}),Object(O.jsxs)("div",{className:t.buttons,children:[Object(O.jsx)(G,{}),Object(O.jsx)(Q,{})]}),Object(O.jsxs)("div",{className:t.oneRepMaxChart,children:[Object(O.jsxs)("h1",{className:t.chartHeader,children:["Percent",Object(O.jsx)("div",{children:"Weight"})]}),Object(O.jsx)("div",{children:r.map((function(e){return Object(O.jsxs)("div",{className:t.chartBox,children:[e[0],"% ",Object(O.jsx)("div",{children:e[1]})]},e[0])}))})]})]})})),$=Object(b.a)((function(){return{notFound:{marginTop:"130px",fontSize:"24px",fontFamily:"PT Sans Caption",display:"flex",justifyContent:"center"}}})),ee=function(){var e=$(),t=Object(p.d)().pathname.split("/")[3];return Object(O.jsxs)("div",{children:[Object(O.jsx)(v,{title:t}),void 0===t?Object(O.jsx)("div",{className:e.notFound,children:"Movement not found. Click Home button to return to Home Page."}):Object(O.jsx)(Z,{})]})},te=Object(b.a)((function(){return{updatePage:{marginTop:"150px",display:"flex",justifyContent:"center",fontFamily:"PT Sans Caption"},updateMovementDiv:{background:"#C4C4C4",fontFamily:"PT Sans Caption",fontSize:"18px",borderRadius:"10px",padding:"20px",display:"flex",flexDirection:"column",textAlign:"right"}}})),ne=function(e){var t=e.input,n=e.label;return Object(O.jsxs)("div",{children:[Object(O.jsxs)("label",{children:[n,": "]}),Object(O.jsx)("input",Object(j.a)(Object(j.a)({},t),{},{type:"text",value:Object(p.d)().pathname.split("/")[3]}))]})},ae=function(e){var t=e.input,n=e.label;return Object(O.jsxs)("div",{children:[Object(O.jsxs)("label",{children:[n,": "]}),Object(O.jsx)("input",Object(j.a)(Object(j.a)({},t),{},{type:"number"}))]})},ie=Object(k.a)({form:"updateMovementForm"})((function(e){var t=te(),n=Object(p.d)().pathname.split("/")[2],a=e.move.find((function(e){return e.id===Number(n)})).id;return Object(O.jsxs)("div",{children:[Object(O.jsx)(v,{title:"Update Movement"}),Object(O.jsx)("div",{className:t.updatePage,children:Object(O.jsx)("div",{className:t.updateMovementDiv,children:Object(O.jsxs)("form",{onSubmit:e.handleSubmit((function(t){e.updateMovement(a,t)})),children:[Object(O.jsx)(A.a,{name:"movementName",label:"Movement Selected",component:ne}),Object(O.jsx)(A.a,{name:"movementWeight",label:"New One Rep Max",component:ae}),Object(O.jsx)("button",{children:"Update"})]})})})]})})),ce=Object(g.b)((function(e){return{move:e.move}}),(function(e){return{updateMovement:function(t,n){return e(function(e,t){return function(){var n=Object(S.a)(C.a.mark((function n(a){var i;return C.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return m.push("/"),n.next=3,R.patch("/movements/".concat(e),t);case 3:i=n.sent,a({type:N,payload:i.data});case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}(t,n))}}}))(ie),re=Object(b.a)((function(){return{deletePage:{marginTop:"150px",display:"flex",justifyContent:"center",fontFamily:"PT Sans Caption"},deleteMovementDiv:{background:"#C4C4C4",fontFamily:"PT Sans Caption",fontSize:"18px",borderRadius:"10px",padding:"20px",display:"flex",flexDirection:"column",textAlign:"right"}}})),oe=function(e){var t=e.input,n=e.label;return Object(O.jsxs)("div",{children:[Object(O.jsxs)("label",{children:[n,":   "]}),Object(O.jsx)("input",Object(j.a)(Object(j.a)({},t),{},{readOnly:!0,autoFocus:!0,type:"text",value:Object(p.d)().pathname.split("/")[3]}))]})},se=Object(k.a)({form:"deleteMovementForm"})((function(e){var t=re(),n=Object(p.d)().pathname.split("/")[2],a=e.move.find((function(e){return e.id===Number(n)})).id;return Object(O.jsxs)("div",{children:[Object(O.jsx)(v,{title:"Delete Movement"}),Object(O.jsx)("div",{className:t.deletePage,children:Object(O.jsx)("div",{className:t.deleteMovementDiv,children:Object(O.jsxs)("form",{onSubmit:e.handleSubmit((function(t){e.deleteMovement(a,t)})),children:[Object(O.jsx)(A.a,{name:"movementName",component:oe,label:"Movement to be Deleted"}),Object(O.jsx)("button",{children:"Delete"})]})})})]})})),de=Object(g.b)((function(e){return{move:e.move}}),(function(e){return{deleteMovement:function(t,n){return e((a=t,function(){var e=Object(S.a)(C.a.mark((function e(t){return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return m.push("/"),e.next=3,R.delete("/movements/".concat(a));case 3:t({type:M,payload:a});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));var a}}}))(se),ue=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return Object(O.jsx)("div",{children:Object(O.jsx)(p.b,{history:m,children:Object(O.jsxs)(p.c,{children:[Object(O.jsx)(p.a,{exact:!0,path:"/",render:function(){return Object(O.jsx)(X,{title:"One Rep - Home"})}}),Object(O.jsx)(p.a,{exact:!0,path:"/movement/:id/:name/:weight",render:function(){return Object(O.jsx)(ee,{title:"One Rep - Movement"})}}),Object(O.jsx)(p.a,{exact:!0,path:"/add",render:function(){return Object(O.jsx)(W,{title:"One Rep - Add"})}}),Object(O.jsx)(p.a,{exact:!0,path:"/update/:id/:name",render:function(){return Object(O.jsx)(ce,{title:"One Rep - Update"})}}),Object(O.jsx)(p.a,{exact:!0,path:"/delete/:id/:name",render:function(){return Object(O.jsx)(de,{title:"One Rep - Delete"})}})]})})})}}]),n}(i.a.Component),pe=n(8),le=n(33),me=[],je=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:me,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case T:return[].concat(Object(le.a)(e),[t.payload]);case N:return e.map((function(e){return e.id===t.payload.id?t.payload:e}));case M:return e.filter((function(e){return e.id!==t.payload}));default:return e}},xe=n(289),be=Object(pe.c)({move:je,form:xe.a}),fe=n(124);var Oe=function(){try{var e=window.localStorage.getItem("store");if(null===e)return;return JSON.parse(e)}catch(t){return void console.log(t)}}(),he=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||pe.d,ve=Object(pe.e)(be,Oe,he(Object(pe.a)(fe.a)));ve.subscribe((function(){return function(e){try{var t=JSON.stringify(e);window.localStorage.setItem("store",t)}catch(n){console.log(n)}}(ve.getState())})),r.a.render(Object(O.jsx)(g.a,{store:ve,children:Object(O.jsx)(ue,{})}),document.getElementById("root"))}},[[267,1,2]]]);
//# sourceMappingURL=main.c40dfa54.chunk.js.map