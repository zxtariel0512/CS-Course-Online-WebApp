(this["webpackJsonpzxtariel0512-final-project"]=this["webpackJsonpzxtariel0512-final-project"]||[]).push([[0],{100:function(e,t,a){},101:function(e,t,a){"use strict";a.r(t);var s=a(0),n=a(32),r=a.n(n),i=a(48),c=a(66),o=a(9),l=(a(72),a(19)),h=a(20),d=a(8),j=a(22),u=a(21),b=a(13),m=a.n(b),x=a(4),O=a(10),g=a(24),p=a(1),f=function(e){Object(j.a)(a,e);var t=Object(u.a)(a);function a(e){var s;return Object(l.a)(this,a),(s=t.call(this,e)).onChangeFirstName=s.onChangeFirstName.bind(Object(d.a)(s)),s.onChangeLastName=s.onChangeLastName.bind(Object(d.a)(s)),s.onChangeAge=s.onChangeAge.bind(Object(d.a)(s)),s.onChangeGender=s.onChangeGender.bind(Object(d.a)(s)),s.onChangePron=s.onChangePron.bind(Object(d.a)(s)),s.onChangePhone=s.onChangePhone.bind(Object(d.a)(s)),s.onChangeIns=s.onChangeIns.bind(Object(d.a)(s)),s.onChangeFb=s.onChangeFb.bind(Object(d.a)(s)),s.onSubmit=s.onSubmit.bind(Object(d.a)(s)),s.state={fistName:"",lastName:"",age:"",gender:"",pron:"",phone:"",ins:"",fb:""},s}return Object(h.a)(a,[{key:"onChangeFirstName",value:function(e){this.setState({firstName:e.target.value})}},{key:"onChangeLastName",value:function(e){this.setState({lastName:e.target.value})}},{key:"onChangeAge",value:function(e){this.setState({age:e.target.value})}},{key:"onChangeGender",value:function(e){this.setState({gender:e.target.value})}},{key:"onChangePron",value:function(e){this.setState({pron:e.target.value})}},{key:"onChangeFb",value:function(e){this.setState({fb:e.target.value})}},{key:"onChangePhone",value:function(e){this.setState({phone:e.target.value})}},{key:"onChangeIns",value:function(e){this.setState({ins:e.target.value})}},{key:"onSubmit",value:function(e){e.preventDefault();var t=new URLSearchParams;t.append("firstName",this.state.firstName),t.append("lastName",this.state.lastName),t.append("Age",this.state.age),t.append("gender",this.state.gender),t.append("preferredPron",this.state.pron),t.append("instagram",this.state.ins),t.append("facebook",this.state.fb),t.append("phone",this.state.phone),m.a.put("http://localhost:3000/users/updateProfile",t,{headers:{Authorization:"Bearer "+localStorage.getItem("token")}}).then(console.log(t)),this.props.history.push("/profile")}},{key:"render",value:function(){return Object(p.jsxs)("div",{class:"mediumPanel",children:[Object(p.jsx)("h2",{children:"Fill up some information so that your teachers and classmates can know you better!"}),Object(p.jsx)("p",{class:"secondaryText",children:"* are recommended information"}),Object(p.jsxs)(x.a,{onSubmit:this.onSubmit,children:[Object(p.jsxs)(x.a.Row,{children:[Object(p.jsxs)(x.a.Group,{as:O.a,controlId:"formGridFirstName",children:[Object(p.jsxs)(x.a.Label,{children:["First Name",Object(p.jsx)("span",{id:"required",children:"*"})]}),Object(p.jsx)(x.a.Control,{type:"text",placeholder:"Enter your first name...",value:this.state.firstName,onChange:this.onChangeFirstName})]}),Object(p.jsxs)(x.a.Group,{as:O.a,controlId:"formGridLastName",children:[Object(p.jsxs)(x.a.Label,{children:["Last name",Object(p.jsx)("span",{id:"required",children:"*"})]}),Object(p.jsx)(x.a.Control,{type:"text",placeholder:"Enter your last name...",value:this.state.lastName,onChange:this.onChangeLastName})]}),Object(p.jsxs)(x.a.Group,{as:O.a,controlId:"formGridAge",children:[Object(p.jsx)(x.a.Label,{children:"Age"}),Object(p.jsx)(x.a.Control,{type:"text",placeholder:"Enter your age...",value:this.state.age,onChange:this.onChangeAge})]})]}),Object(p.jsxs)(x.a.Row,{children:[Object(p.jsxs)(x.a.Group,{as:O.a,controlId:"formGridGender",children:[Object(p.jsx)(x.a.Label,{children:"Gender"}),Object(p.jsxs)(x.a.Control,{as:"select",onChange:this.onChangeGender,children:[Object(p.jsx)("option",{children:"Please select..."}),Object(p.jsx)("option",{value:"Male",children:"Male"}),Object(p.jsx)("option",{value:"Female",children:"Female"}),Object(p.jsx)("option",{value:"Other",children:"Other"})]})]}),Object(p.jsxs)(x.a.Group,{as:O.a,controlId:"formGridPreferredPron",children:[Object(p.jsx)(x.a.Label,{children:"Preferred pronouns"}),Object(p.jsxs)(x.a.Control,{as:"select",onChange:this.onChangePron,children:[Object(p.jsx)("option",{children:"Please select..."}),Object(p.jsx)("option",{value:"He/Him/His",children:"He/Him/His"}),Object(p.jsx)("option",{value:"She/Her/Hers",children:"She/Her/Hers"}),Object(p.jsx)("option",{value:"Other",children:"Other"})]})]})]}),Object(p.jsxs)(x.a.Row,{children:[Object(p.jsxs)(x.a.Group,{as:O.a,controlId:"formGridPhone",children:[Object(p.jsx)(x.a.Label,{children:"Phone number"}),Object(p.jsx)(x.a.Control,{type:"text",placeholder:"Enter your phone number...",value:this.state.phone,onChange:this.onChangePhone})]}),Object(p.jsxs)(x.a.Group,{as:O.a,controlId:"formGridIns",children:[Object(p.jsx)(x.a.Label,{children:"Instagram"}),Object(p.jsx)(x.a.Control,{type:"text",placeholder:"Enter your insagram ID...",value:this.state.ins,onChange:this.onChangeIns})]}),Object(p.jsxs)(x.a.Group,{as:O.a,controlId:"formGridFacebook",children:[Object(p.jsx)(x.a.Label,{children:"Facebook"}),Object(p.jsx)(x.a.Control,{type:"text",placeholder:"Enter your facebook ID...",value:this.state.fb,onChange:this.onChangeFb})]})]}),Object(p.jsx)("div",{id:"submitBtn",children:Object(p.jsx)(g.a,{variant:"primary",type:"submit",children:"Done!"})})]})]})}}]),a}(s.Component),v=function(e){Object(j.a)(a,e);var t=Object(u.a)(a);function a(e){var s;return Object(l.a)(this,a),(s=t.call(this,e)).onChangeUsername=s.onChangeUsername.bind(Object(d.a)(s)),s.onChangePassword=s.onChangePassword.bind(Object(d.a)(s)),s.onChangeEmail=s.onChangeEmail.bind(Object(d.a)(s)),s.onSubmit=s.onSubmit.bind(Object(d.a)(s)),s.state={username:"",password:"",email:"",error:""},s}return Object(h.a)(a,[{key:"onChangeUsername",value:function(e){this.setState({username:e.target.value})}},{key:"onChangePassword",value:function(e){this.setState({password:e.target.value})}},{key:"onChangeEmail",value:function(e){this.setState({email:e.target.value})}},{key:"onSubmit",value:function(e){var t=this;e.preventDefault();var a={username:this.state.username,password:this.state.password,email:this.state.email},s=new URLSearchParams;console.log(a.username+" "+a.password),s.append("username",a.username),s.append("password",a.password),s.append("email",a.email),m.a.post("http://localhost:3000/users/register",s).then((function(e){t.props.history.push("")})).catch((function(e){t.setState({error:e.response.data.message})}))}},{key:"render",value:function(){return Object(p.jsxs)("div",{class:"mediumPanel",children:[Object(p.jsx)("h1",{style:{textAlign:"center"},children:"Welcome to CSLOL!"}),Object(p.jsx)("p",{style:{textAlign:"center"},children:"Register first to enroll and start your fantastic courses!"}),Object(p.jsx)("p",{class:"secondaryText",children:"* are required information"}),Object(p.jsxs)(x.a,{onSubmit:this.onSubmit,children:[Object(p.jsx)(x.a.Row,{children:Object(p.jsxs)(x.a.Group,{as:O.a,controlId:"formGridEmail",children:[Object(p.jsxs)(x.a.Label,{children:["Email",Object(p.jsx)("span",{id:"required",children:"*"})]}),Object(p.jsx)(x.a.Control,{required:!0,type:"email",placeholder:"Enter your email address...",value:this.state.email,onChange:this.onChangeEmail}),Object(p.jsx)(x.a.Text,{className:"text-muted",children:"Please enter a valid email address that you use in your daily life. Later there will be a confirmation email sent to you, and you need to confirm that email in order to complete your registration."})]})}),Object(p.jsx)(x.a.Row,{children:Object(p.jsxs)(x.a.Group,{as:O.a,controlId:"formGridUsername",children:[Object(p.jsxs)(x.a.Label,{children:["Username",Object(p.jsx)("span",{id:"required",children:"*"})]}),Object(p.jsx)(x.a.Control,{required:!0,type:"text",placeholder:"Enter your username...",value:this.state.username,onChange:this.onChangeUsername}),Object(p.jsx)(x.a.Text,{className:"text-muted",children:"Your username must have length at least 8."})]})}),Object(p.jsx)(x.a.Row,{children:Object(p.jsxs)(x.a.Group,{as:O.a,controlId:"formGridPassword",children:[Object(p.jsxs)(x.a.Label,{children:["Password",Object(p.jsx)("span",{id:"required",children:"*"})]}),Object(p.jsx)(x.a.Control,{required:!0,type:"text",placeholder:"Enter your password...",value:this.state.password,onChange:this.onChangePassword}),Object(p.jsx)(x.a.Text,{className:"text-muted",children:"Your password must have length at least 8. It must contain at least 1 uppercase letter, 1 lowercase letter, and 1 number."})]})}),Object(p.jsx)("div",{id:"submitBtn",children:Object(p.jsx)(g.a,{variant:"primary",type:"submit",children:"Register!"})})]}),Object(p.jsx)("p",{style:{color:"red",textAlign:"center",marginTop:10},children:this.state.error}),Object(p.jsxs)("p",{style:{textAlign:"center"},children:["Already have an account? ",Object(p.jsx)("a",{href:"/",children:"Then login now!"})]})]})}}]),a}(s.Component),y=Object(s.createContext)({isLoggedIn:!1,username:null,token:null,login:function(){},logout:function(){}}),C=function(e){Object(j.a)(a,e);var t=Object(u.a)(a);function a(e){var s;return Object(l.a)(this,a),(s=t.call(this,e)).onChangeUsername=s.onChangeUsername.bind(Object(d.a)(s)),s.onChangePassword=s.onChangePassword.bind(Object(d.a)(s)),s.onSubmit=s.onSubmit.bind(Object(d.a)(s)),s.state={username:"",password:"",error:""},s}return Object(h.a)(a,[{key:"onChangeUsername",value:function(e){this.setState({username:e.target.value})}},{key:"onChangePassword",value:function(e){this.setState({password:e.target.value})}},{key:"onSubmit",value:function(e){var t=this,a=this.context;e.preventDefault();var s={username:this.state.username,password:this.state.password},n=new URLSearchParams;console.log(s.username+" "+s.password),n.append("username",s.username),n.append("password",s.password),console.log("clicksubmit"),m.a.post("http://localhost:3000/users/login",n,{headers:{Authorization:"Bearer "+localStorage.getItem("token")}}).then((function(e){!1===e.data.confirmed?(t.props.history.push("/complete-user-information"),a.login(e.data.username,e.data.token)):(t.props.history.push("/main-courses"),a.login(e.data.username,e.data.token))})).catch((function(e){t.setState({error:e.response.data.message})}))}},{key:"render",value:function(){return Object(p.jsxs)("div",{class:"mediumPanel",children:[Object(p.jsx)("h1",{style:{textAlign:"center"},children:"Login"}),Object(p.jsx)("p",{style:{textAlign:"center"},children:"Login into your account and start your CS journey!"}),Object(p.jsxs)(x.a,{onSubmit:this.onSubmit,children:[Object(p.jsx)(x.a.Row,{children:Object(p.jsxs)(x.a.Group,{as:O.a,controlId:"formGridLoginUsername",children:[Object(p.jsx)(x.a.Label,{children:"Username"}),Object(p.jsx)(x.a.Control,{required:!0,type:"text",placeholder:"Enter your username...",value:this.state.username,onChange:this.onChangeUsername})]})}),Object(p.jsx)(x.a.Row,{children:Object(p.jsxs)(x.a.Group,{as:O.a,controlId:"formGridLoginPassword",children:[Object(p.jsx)(x.a.Label,{children:"Password"}),Object(p.jsx)(x.a.Control,{required:!0,type:"text",placeholder:"Enter your password...",value:this.state.password,onChange:this.onChangePassword})]})}),Object(p.jsx)("div",{id:"submitBtn",children:Object(p.jsx)(g.a,{variant:"primary",type:"submit",children:"Login!"})})]}),Object(p.jsx)("p",{style:{color:"red",textAlign:"center",marginTop:10},children:this.state.error}),Object(p.jsxs)("p",{style:{textAlign:"center"},children:["Do not have an account yet? ",Object(p.jsx)("a",{href:"/register",children:"Register one now!"})]})]})}}]),a}(s.Component);C.contextType=y;var w,S=function(e){Object(j.a)(a,e);var t=Object(u.a)(a);function a(e){var s;return Object(l.a)(this,a),(s=t.call(this,e)).state={user:{},init:0},s}return Object(h.a)(a,[{key:"componentDidMount",value:function(){var e=this;m.a.get("http://localhost:3000/users/loginUser",{headers:{Authorization:"Bearer "+localStorage.getItem("token")}}).then((function(t){e.setState({user:t.data,init:1})}))}},{key:"render",value:function(){return this.state.init?Object(p.jsx)("div",{class:"Profile",children:Object(p.jsx)("div",{class:"page-content page-container",id:"page-content",children:Object(p.jsx)("div",{class:"padding",children:Object(p.jsx)("div",{class:"row container d-flex justify-content-center",children:Object(p.jsx)("div",{class:"col-xl-6 col-md-12",children:Object(p.jsx)("div",{class:"card user-card-full",children:Object(p.jsxs)("div",{class:"row m-l-0 m-r-0",children:[Object(p.jsx)("div",{class:"col-sm-4 bg-c-lite-green user-profile",children:Object(p.jsxs)("div",{class:"card-block text-center text-white",children:[Object(p.jsx)("div",{class:"m-b-25",children:Object(p.jsx)("img",{src:"https://icon-library.com/images/cute-computer-icon/cute-computer-icon-5.jpg",class:"img-radius",width:"70%",alt:"User-Profile-Image"})}),Object(p.jsx)("h6",{class:"f-w-600",id:"username",children:this.state.user.username}),Object(p.jsx)("p",{style:{color:"white",size:"large",fontWeight:"bold"},children:"Welcome to CSLOL!"})," ",Object(p.jsx)("i",{class:" mdi mdi-square-edit-outline feather icon-edit m-t-10 f-16"})]})}),Object(p.jsx)("div",{class:"col-sm-8",children:Object(p.jsxs)("div",{class:"card-block",children:[Object(p.jsx)("h6",{class:"m-b-20 p-b-5 b-b-default f-w-600",style:{fontSize:"x-large"},children:"Information"}),Object(p.jsxs)("div",{class:"row",children:[Object(p.jsxs)("div",{class:"col-sm-6",children:[Object(p.jsx)("p",{class:"m-b-10 f-w-600",children:"First Name"}),Object(p.jsx)("h6",{class:"f-w-400",children:this.state.user.firstName})]}),Object(p.jsxs)("div",{class:"col-sm-6",children:[Object(p.jsx)("p",{class:"m-b-10 f-w-600",children:"Last Name"}),Object(p.jsx)("h6",{class:"f-w-400",children:this.state.user.lastName})]}),Object(p.jsxs)("div",{class:"col-sm-6",children:[Object(p.jsx)("p",{class:"m-b-10 f-w-600",children:"Age"}),Object(p.jsx)("h6",{class:"f-w-400",children:this.state.user.Age})]})]}),Object(p.jsxs)("div",{class:"row",children:[Object(p.jsxs)("div",{class:"col-sm-6",children:[Object(p.jsx)("p",{class:"m-b-10 f-w-600",children:"Gender"}),Object(p.jsx)("h6",{class:"f-w-400",children:this.state.user.gender})]}),Object(p.jsxs)("div",{class:"col-sm-6",children:[Object(p.jsx)("p",{class:"m-b-10 f-w-600",children:"Preferred Prouns"}),Object(p.jsx)("h6",{class:"f-w-400",children:this.state.user.preferredPron})]})]}),Object(p.jsxs)("div",{class:"row",children:[Object(p.jsxs)("div",{class:"col-sm-6",children:[Object(p.jsx)("p",{class:"m-b-10 f-w-600",children:"Email"}),Object(p.jsx)("h6",{class:"f-w-400",children:this.state.user.email})]}),Object(p.jsxs)("div",{class:"col-sm-6",children:[Object(p.jsx)("p",{class:"m-b-10 f-w-600",children:"Phone"}),Object(p.jsx)("h6",{class:"f-w-400",children:this.state.user.phone})]})]}),Object(p.jsxs)("div",{class:"row",children:[Object(p.jsxs)("div",{class:"col-sm-6",children:[Object(p.jsx)("p",{class:"m-b-10 f-w-600",children:"Instagram"}),Object(p.jsx)("h6",{class:"f-w-400",children:this.state.user.instagram})]}),Object(p.jsxs)("div",{class:"col-sm-6",children:[Object(p.jsx)("p",{class:"m-b-10 f-w-600",children:"FaceBook"}),Object(p.jsx)("h6",{class:"f-w-400",children:this.state.user.facebook})]})]}),Object(p.jsx)("h6",{class:"m-b-20 m-t-40 p-b-5 b-b-default f-w-600",children:"Courses"}),Object(p.jsx)("h6",{class:"text-muted f-w-400",children:"Your course list is so far empty...Let's go and enroll some!"}),Object(p.jsx)("p",{style:{textAlign:"center",marginTop:30},children:Object(p.jsx)("a",{href:"/main-courses",children:"Go and enroll more courses!"})}),Object(p.jsxs)("ul",{class:"social-link list-unstyled m-t-40 m-b-10",children:[Object(p.jsx)("li",{children:Object(p.jsx)("a",{href:"#!","data-toggle":"tooltip","data-placement":"bottom",title:"","data-original-title":"facebook","data-abc":"true",children:Object(p.jsx)("i",{class:"mdi mdi-facebook feather icon-facebook facebook","aria-hidden":"true"})})}),Object(p.jsx)("li",{children:Object(p.jsx)("a",{href:"#!","data-toggle":"tooltip","data-placement":"bottom",title:"","data-original-title":"twitter","data-abc":"true",children:Object(p.jsx)("i",{class:"mdi mdi-twitter feather icon-twitter twitter","aria-hidden":"true"})})}),Object(p.jsx)("li",{children:Object(p.jsx)("a",{href:"#!","data-toggle":"tooltip","data-placement":"bottom",title:"","data-original-title":"instagram","data-abc":"true",children:Object(p.jsx)("i",{class:"mdi mdi-instagram feather icon-instagram instagram","aria-hidden":"true"})})})]})]})})]})})})})})})}):Object(p.jsx)("p",{children:"loading..."})}}]),a}(s.Component),k=a(39),L=a.n(k),I=a(43),P=a(30),E=a(26),N=a(25),A=a(52),G=a(28),z=a(65),T=function(e){Object(j.a)(a,e);var t=Object(u.a)(a);function a(e){var s;return Object(l.a)(this,a),(s=t.call(this,e)).state={courses:[],init:0,user:{},isLogin:!1},s}return Object(h.a)(a,[{key:"componentDidMount",value:function(){var e=Object(I.a)(L.a.mark((function e(){var t=this;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.get("http://localhost:3000/courses/",{headers:{Authorization:"Bearer "+localStorage.getItem("token")}}).then((function(e){t.setState({courses:e.data,init:1})}));case 2:return e.next=4,m.a.get("http://localhost:3000/users/loginUser",{headers:{Authorization:"Bearer "+localStorage.getItem("token")}}).then((function(e){t.setState({user:e.data})}));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return console.log("username: ".concat(this.state.user.username)),this.state.init?Object(p.jsxs)("div",{children:[Object(p.jsx)(A.a,{className:"main-nav",children:Object(p.jsxs)(P.a,{bg:"light",fixed:"top",children:[Object(p.jsx)(P.a.Brand,{href:"#home",style:{fontSize:"xxx-large"},children:"CSLOL"}),Object(p.jsx)(P.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(p.jsxs)(P.a.Collapse,{id:"basic-navbar-nav",children:[Object(p.jsxs)(E.a,{className:"mr-auto",children:[Object(p.jsx)(E.a.Link,{href:"/",style:{fontSize:"xx-large"},children:"Courses"}),Object(p.jsxs)(N.a,{title:"Introduction",id:"basic-nav-dropdown",style:{fontSize:"xx-large"},children:[Object(p.jsx)(N.a.Item,{href:"#action/3.1",style:{fontSize:"large"},children:"What is CSLOL?"}),Object(p.jsx)(N.a.Item,{href:"#action/3.2",style:{fontSize:"large"},children:"What can you do on CSLOL?"}),Object(p.jsx)(N.a.Item,{href:"#action/3.3",style:{fontSize:"large"},children:"Things you need to know"}),Object(p.jsx)(N.a.Divider,{})]})]}),"Welcome,",Object(p.jsx)(E.a.Link,{href:"/profile",style:{fontSize:"x-large"},children:this.state.user.username})]})]})}),Object(p.jsxs)("div",{class:"courses",children:[Object(p.jsx)("h1",{style:{textAlign:"center"},children:"Welcome to CSLOL!"}),Object(p.jsx)("h3",{style:{textAlign:"center"},children:"Have a look at our fantastic courses!"}),Object(p.jsx)(z.a,{className:"card-deck",children:this.state.courses.map((function(e){var t="/enroll/".concat(e.slug);return Object(p.jsx)("div",{children:Object(p.jsx)(G.a,{style:{width:"25rem"},id:"course-card",children:Object(p.jsxs)(G.a.Body,{children:[Object(p.jsx)(G.a.Title,{children:e.name}),Object(p.jsx)(G.a.Subtitle,{className:"mb-2",style:{textAlign:"right"},children:e.time}),Object(p.jsx)(G.a.Subtitle,{className:"mb-2",style:{textAlign:"right"},children:e.mode}),Object(p.jsx)(G.a.Subtitle,{className:"mb-2",style:{textAlign:"right"},children:e.instructor}),Object(p.jsx)(G.a.Text,{style:{fontSize:"medium"},children:e.summary}),Object(p.jsx)(G.a.Link,{href:t,children:"Quick Enroll"}),Object(p.jsx)(G.a.Link,{href:"#",children:"More info"})]})})})}))})]})]}):Object(p.jsxs)("div",{children:[Object(p.jsx)(A.a,{className:"main-nav",children:Object(p.jsxs)(P.a,{bg:"light",sticky:"top",children:[Object(p.jsx)(P.a.Brand,{href:"/main-courses",style:{fontSize:"xxx-large"},children:"CSLOL"}),Object(p.jsx)(P.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(p.jsxs)(P.a.Collapse,{id:"basic-navbar-nav",children:[Object(p.jsxs)(E.a,{className:"mr-auto",children:[Object(p.jsx)(E.a.Link,{href:"/main-courses",style:{fontSize:"xx-large"},children:"Courses"}),Object(p.jsxs)(N.a,{title:"Introduction",id:"basic-nav-dropdown",style:{fontSize:"xx-large"},children:[Object(p.jsx)(N.a.Item,{href:"#action/3.1",style:{fontSize:"large"},children:"What is CSLOL?"}),Object(p.jsx)(N.a.Item,{href:"#action/3.2",style:{fontSize:"large"},children:"What can you do on CSLOL?"}),Object(p.jsx)(N.a.Item,{href:"#action/3.3",style:{fontSize:"large"},children:"Things you need to know"}),Object(p.jsx)(N.a.Divider,{})]})]}),Object(p.jsxs)(E.a,{defaultActiveKey:"/home",as:"ul",children:[Object(p.jsx)(E.a.Item,{as:"li",style:{fontSize:"x-large"},children:Object(p.jsx)(E.a.Link,{href:"/login",children:"Login"})}),Object(p.jsx)(E.a.Item,{as:"li",style:{fontSize:"x-large"},children:Object(p.jsx)(E.a.Link,{href:"/register",children:"Register"})})]})]})]})}),Object(p.jsx)("div",{class:"courses",children:Object(p.jsx)("h1",{style:{textAlign:"center"},children:"Welcome to CSLOL!"})})]})}}]),a}(s.Component),D=function(e){Object(j.a)(a,e);var t=Object(u.a)(a);function a(e){var s;return Object(l.a)(this,a),(s=t.call(this,e)).onChangeContactEmail=s.onChangeContactEmail.bind(Object(d.a)(s)),s.onChangeExpectation=s.onChangeExpectation.bind(Object(d.a)(s)),s.onSubmit=s.onSubmit.bind(Object(d.a)(s)),s.state={contactEmail:"",expectation:"",user:{},course:{},initUser:0,initCourse:0,finish:0},s}return Object(h.a)(a,[{key:"onChangeContactEmail",value:function(e){this.setState({contactEmail:e.target.value})}},{key:"onChangeExpectation",value:function(e){this.setState({expectation:e.target.value})}},{key:"componentDidMount",value:function(){var e=Object(I.a)(L.a.mark((function e(){var t,a=this;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.get("http://linserv1.cims.nyu.edu:11123/users/loginUser",{headers:{Authorization:"Bearer "+localStorage.getItem("token")}}).then((function(e){a.setState({user:e.data,initUser:1})}));case 2:return t=this.props.match.params.slug,e.next=5,m.a.get("http://linserv1.cims.nyu.edu:11123/courses/".concat(t)).then((function(e){a.setState({course:e.data,initCourse:1})}));case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"onSubmit",value:function(e){console.log(this.state.user),console.log(this.state.course.slug),e.preventDefault();var t=new URLSearchParams;t.append("contactEmail",this.state.contactEmail),t.append("expectation",this.state.expectation),t.append("user",this.state.user._id),m.a.put("http://localhost:3000/courses/enroll/".concat(this.state.course.slug),t,{headers:{Authorization:"Bearer "+localStorage.getItem("token")}}).then(this.setState({finish:1}))}},{key:"render",value:function(){return this.state.initUser&&this.state.initCourse?this.state.finish?Object(p.jsxs)("div",{class:"largePanel",children:[Object(p.jsx)("h2",{children:"Please double check following information..."}),Object(p.jsxs)("p",{children:[Object(p.jsx)("span",{style:{fontSize:"large",fontWeight:"bold"},children:"Course: "}),this.state.course.name]}),Object(p.jsxs)("p",{children:[Object(p.jsx)("span",{style:{fontSize:"large",fontWeight:"bold"},children:"Contact Email: "}),this.state.contactEmail]}),Object(p.jsxs)("p",{children:[Object(p.jsx)("span",{style:{fontSize:"large",fontWeight:"bold"},children:"Message to instructor: "}),this.state.expectation]}),Object(p.jsxs)("p",{style:{textAlign:"center",marginTop:30},children:["Everything's correct? ",Object(p.jsx)("a",{href:"/main-courses",children:"Back to main page!"})]}),Object(p.jsxs)("p",{style:{textAlign:"center",marginTop:30},children:["Something went wrong? ",Object(p.jsx)("a",{href:"/main-courses",children:"Go back and try again!"})]})]}):Object(p.jsxs)("div",{class:"largePanel",children:[Object(p.jsx)("h1",{style:{textAlign:"center"},children:"Enroll in One Sec!"}),Object(p.jsxs)("p",{children:["Please be honest in following information. All information are ",Object(p.jsx)("span",{style:{color:"red"},children:"required"})," in order to provide you with a fantastics learning experiences."]}),Object(p.jsxs)(x.a,{onSubmit:this.onSubmit,children:[Object(p.jsx)(x.a.Row,{children:Object(p.jsxs)(x.a.Group,{as:O.a,controlId:"formGridContactEmail",children:[Object(p.jsx)(x.a.Label,{children:"Please leave a email address that you commonly use for future contact with instructors."}),Object(p.jsx)(x.a.Control,{required:!0,type:"text",placeholder:"Enter your commonly used email...",value:this.state.contactEmail,onChange:this.onChangeContactEmail}),Object(p.jsx)(x.a.Text,{className:"text-muted",children:"This email is simply used for future contact with your instructor. It does not necessarily need to be the email address that you used for registration."})]})}),Object(p.jsxs)(x.a.Row,{children:[Object(p.jsxs)(x.a.Group,{as:O.a,controlId:"formGridExpectation",children:[Object(p.jsx)(x.a.Label,{children:"Please briefly write something about your goals, intentions, or expectation to this class."}),Object(p.jsx)(x.a.Control,{required:!0,type:"text",placeholder:"Leave your message to your instructor here...",as:"textarea",rows:5,value:this.state.expectation,onChange:this.onChangeExpectation})]}),Object(p.jsx)(x.a.Text,{className:"text-muted",children:"Instructors are eager to know more about you! Feel free to leave messages to your instructor before formally starting the class. What do you want to learn? Why are you enrolling for this class? Is there any concern or suggestion? Which part in this class attracts you most? Are there any specific requests you want to raise for instructors?"})]}),Object(p.jsx)("div",{id:"submitBtn-large",children:Object(p.jsx)(g.a,{variant:"primary",type:"submit",children:"Enroll now!"})})]}),Object(p.jsxs)("p",{style:{textAlign:"center",marginTop:30},children:["Regret a bit? ",Object(p.jsx)("a",{href:"/main-courses",children:"Go back and see other courses!"})]})]}):Object(p.jsx)("div",{class:"largePanel",children:Object(p.jsx)("p",{children:"loading..."})})}}]),a}(s.Component),U=function(e){var t=Object(s.useState)(!1),a=Object(i.a)(t,2),n=a[0],r=a[1],l=Object(s.useState)(!1),h=Object(i.a)(l,2),d=h[0],j=h[1],u=Object(s.useState)(),b=Object(i.a)(u,2),x=b[0],O=b[1],g=Object(s.useCallback)((function(e,t,a){r(t),j(e);var s=a||new Date((new Date).getTime()+36e5);O(s),localStorage.setItem("userData",JSON.stringify({username:e,token:t,expiration:s.toISOString()})),localStorage.setItem("token",t),m.a.defaults.headers.common.Authorization="Bearer ".concat(t)}),[]),k=Object(s.useCallback)((function(){r(null),O(null),j(null),localStorage.removeItem("userData"),localStorage.removeItem("profileData");m.a.defaults.headers.common.Authorization="Bearer ".concat(null)}),[]);return Object(s.useEffect)((function(){if(n&&x){var e=x.getTime()-(new Date).getTime();w=setTimeout(k,e)}else clearTimeout(w)}),[n,k,x]),Object(s.useEffect)((function(){var e=JSON.parse(localStorage.getItem("userData"));e&&e.token&&new Date(e.expiration)>new Date&&g(e.userId,e.token,new Date(e.expiration))}),[g]),Object(p.jsx)(y.Provider,{value:{isLoggedIn:!!n,token:n,username:d,login:g,logout:k},children:Object(p.jsx)("div",{className:"container",children:Object(p.jsx)(c.a,{children:Object(p.jsxs)("div",{className:"container",children:[Object(p.jsx)(o.a,{path:"/complete-user-information",exact:!0,component:f}),Object(p.jsx)(o.a,{path:"/register",exact:!0,component:v}),Object(p.jsx)(o.a,{path:"/main-courses",exact:!0,component:T}),Object(p.jsx)(o.a,{path:"/profile",exact:!0,component:S}),Object(p.jsx)(o.a,{path:"/",exact:!0,component:C}),Object(p.jsx)(o.a,{path:"/enroll/:slug",exact:!0,component:D})]})})})})};a(100);r.a.render(Object(p.jsx)(U,{}),document.getElementById("root"))}},[[101,1,2]]]);
//# sourceMappingURL=main.630f2a10.chunk.js.map