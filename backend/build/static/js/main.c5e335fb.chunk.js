(this["webpackJsonpzxtariel0512-final-project"]=this["webpackJsonpzxtariel0512-final-project"]||[]).push([[0],{117:function(e,t,a){},118:function(e,t,a){"use strict";a.r(t);var s=a(0),n=a(35),r=a.n(n),c=a(29),i=a(84),o=a(13),l=(a(89),a(17)),h=a(18),d=a(9),j=a(20),u=a(19),b=a(11),m=a.n(b),x=a(5),O=a(14),p=a(22),g=a(1),f=function(e){Object(j.a)(a,e);var t=Object(u.a)(a);function a(e){var s;return Object(l.a)(this,a),(s=t.call(this,e)).onChangeFirstName=s.onChangeFirstName.bind(Object(d.a)(s)),s.onChangeLastName=s.onChangeLastName.bind(Object(d.a)(s)),s.onChangeAge=s.onChangeAge.bind(Object(d.a)(s)),s.onChangeGender=s.onChangeGender.bind(Object(d.a)(s)),s.onChangePron=s.onChangePron.bind(Object(d.a)(s)),s.onChangePhone=s.onChangePhone.bind(Object(d.a)(s)),s.onChangeIns=s.onChangeIns.bind(Object(d.a)(s)),s.onChangeFb=s.onChangeFb.bind(Object(d.a)(s)),s.onSubmit=s.onSubmit.bind(Object(d.a)(s)),s.state={fistName:"",lastName:"",age:"",gender:"",pron:"",phone:"",ins:"",fb:"",error:"",updated:0},s}return Object(h.a)(a,[{key:"onChangeFirstName",value:function(e){this.setState({firstName:e.target.value})}},{key:"onChangeLastName",value:function(e){this.setState({lastName:e.target.value})}},{key:"onChangeAge",value:function(e){this.setState({age:e.target.value})}},{key:"onChangeGender",value:function(e){this.setState({gender:e.target.value})}},{key:"onChangePron",value:function(e){this.setState({pron:e.target.value})}},{key:"onChangeFb",value:function(e){this.setState({fb:e.target.value})}},{key:"onChangePhone",value:function(e){this.setState({phone:e.target.value})}},{key:"onChangeIns",value:function(e){this.setState({ins:e.target.value})}},{key:"onSubmit",value:function(e){var t=this;e.preventDefault();var a=0,s=1;if(""!==this.state.age&&isNaN(this.state.age)?this.setState({error:"Please enter some number for Age."}):a=1,""!==this.state.phone&&(isNaN(this.state.phone)?(this.setState({error:"Phone number invalid. Please double check."}),s=0):10!=this.state.phone.length&&(this.setState({error:"Phone number length invalid. Please double check."}),s=0)),""==this.state.firstName&&this.setState({error:"First name is required."}),""==this.state.lastName&&this.setState({error:"Last name is required"}),s&&a&&""!=this.state.firstName&&""!=this.state.lastName){var n=new URLSearchParams;n.append("firstName",this.state.firstName),n.append("lastName",this.state.lastName),n.append("Age",this.state.age),n.append("gender",this.state.gender),n.append("preferredPron",this.state.pron),n.append("instagram",this.state.ins),n.append("facebook",this.state.fb),n.append("phone",this.state.phone),m.a.put("http://localhost:3000/users/updateProfile",n,{headers:{Authorization:"Bearer "+localStorage.getItem("token")}}).then((function(){t.setState({updated:1})}))}}},{key:"render",value:function(){return this.state.updated?Object(g.jsxs)("div",{class:"mediumPanel",children:[Object(g.jsx)("h5",{children:"Your information has been saved!"}),Object(g.jsx)("p",{children:"You can always check your personal information, along with courses you have enrolled, by clicking into your personal profile on right top of the main-courses page."}),Object(g.jsx)("p",{style:{marginTop:30},children:Object(g.jsx)("a",{href:"/profile",children:"Go and have a look of your profile!"})}),Object(g.jsx)("p",{style:{marginTop:30},children:Object(g.jsx)("a",{href:"/main-courses",children:"Directly go to main-courses page and start your CS journey!"})})]}):Object(g.jsxs)("div",{class:"mediumPanel",children:[Object(g.jsx)("h2",{children:"Fill up some information so that your teachers and classmates can know you better!"}),Object(g.jsx)("p",{class:"secondaryText",children:"* are required information"}),Object(g.jsxs)(x.a,{onSubmit:this.onSubmit,children:[Object(g.jsxs)(x.a.Row,{children:[Object(g.jsxs)(x.a.Group,{as:O.a,controlId:"formGridFirstName",children:[Object(g.jsxs)(x.a.Label,{children:["First Name",Object(g.jsx)("span",{id:"required",children:"*"})]}),Object(g.jsx)(x.a.Control,{required:!0,type:"text",placeholder:"Enter your first name...",value:this.state.firstName,onChange:this.onChangeFirstName})]}),Object(g.jsxs)(x.a.Group,{as:O.a,controlId:"formGridLastName",children:[Object(g.jsxs)(x.a.Label,{children:["Last name",Object(g.jsx)("span",{id:"required",children:"*"})]}),Object(g.jsx)(x.a.Control,{required:!0,type:"text",placeholder:"Enter your last name...",value:this.state.lastName,onChange:this.onChangeLastName})]}),Object(g.jsxs)(x.a.Group,{as:O.a,controlId:"formGridAge",children:[Object(g.jsx)(x.a.Label,{children:"Age"}),Object(g.jsx)(x.a.Control,{type:"text",placeholder:"Enter your age...",value:this.state.age,onChange:this.onChangeAge})]})]}),Object(g.jsxs)(x.a.Row,{children:[Object(g.jsxs)(x.a.Group,{as:O.a,controlId:"formGridGender",children:[Object(g.jsx)(x.a.Label,{children:"Gender"}),Object(g.jsxs)(x.a.Control,{as:"select",onChange:this.onChangeGender,children:[Object(g.jsx)("option",{children:"Please select..."}),Object(g.jsx)("option",{value:"Male",children:"Male"}),Object(g.jsx)("option",{value:"Female",children:"Female"}),Object(g.jsx)("option",{value:"Other",children:"Other"})]})]}),Object(g.jsxs)(x.a.Group,{as:O.a,controlId:"formGridPreferredPron",children:[Object(g.jsx)(x.a.Label,{children:"Preferred pronouns"}),Object(g.jsxs)(x.a.Control,{as:"select",onChange:this.onChangePron,children:[Object(g.jsx)("option",{children:"Please select..."}),Object(g.jsx)("option",{value:"He/Him/His",children:"He/Him/His"}),Object(g.jsx)("option",{value:"She/Her/Hers",children:"She/Her/Hers"}),Object(g.jsx)("option",{value:"Other",children:"Other"})]})]})]}),Object(g.jsxs)(x.a.Row,{children:[Object(g.jsxs)(x.a.Group,{as:O.a,controlId:"formGridPhone",children:[Object(g.jsx)(x.a.Label,{children:"Phone number"}),Object(g.jsx)(x.a.Control,{type:"text",placeholder:"Enter your phone number...",value:this.state.phone,onChange:this.onChangePhone})]}),Object(g.jsxs)(x.a.Group,{as:O.a,controlId:"formGridIns",children:[Object(g.jsx)(x.a.Label,{children:"Instagram"}),Object(g.jsx)(x.a.Control,{type:"text",placeholder:"Enter your insagram ID...",value:this.state.ins,onChange:this.onChangeIns})]}),Object(g.jsxs)(x.a.Group,{as:O.a,controlId:"formGridFacebook",children:[Object(g.jsx)(x.a.Label,{children:"Facebook"}),Object(g.jsx)(x.a.Control,{type:"text",placeholder:"Enter your facebook ID...",value:this.state.fb,onChange:this.onChangeFb})]})]}),Object(g.jsx)("p",{style:{color:"red",textAlign:"center",marginTop:10},children:this.state.error}),Object(g.jsx)("div",{id:"submitBtn",children:Object(g.jsx)(p.a,{variant:"primary",type:"submit",children:"Done!"})})]})]})}}]),a}(s.Component),v=function(e){Object(j.a)(a,e);var t=Object(u.a)(a);function a(e){var s;return Object(l.a)(this,a),(s=t.call(this,e)).onChangeUsername=s.onChangeUsername.bind(Object(d.a)(s)),s.onChangePassword=s.onChangePassword.bind(Object(d.a)(s)),s.onChangeEmail=s.onChangeEmail.bind(Object(d.a)(s)),s.onSubmit=s.onSubmit.bind(Object(d.a)(s)),s.state={username:"",password:"",email:"",error:""},s}return Object(h.a)(a,[{key:"onChangeUsername",value:function(e){this.setState({username:e.target.value})}},{key:"onChangePassword",value:function(e){this.setState({password:e.target.value})}},{key:"onChangeEmail",value:function(e){this.setState({email:e.target.value})}},{key:"onSubmit",value:function(e){var t=this;e.preventDefault();var a={username:this.state.username,password:this.state.password,email:this.state.email},s=0,n=0;if(a.username.length<=1?this.setState({error:"Username too short. It must have at least 2 characters"}):s=1,a.password.length<8)this.setState({error:"Password too short. It must have at least 8 characters."});else{for(var r=0,c=0,i=0,o=0;o<a.password.length;o++){console.log(a.password);var l=a.password.charAt(o);l.charCodeAt(0)>=48&&l.charCodeAt(0)<=57?i+=1:l.charCodeAt(0)>=65&&l.charCodeAt(0)<=90?r+=1:l.charCodeAt(0)>=97&&l.charCodeAt(0)<=122&&(c+=1)}r<1||c<1||i<1?this.setState({error:"Password invalid. You need to have at least 1 upper case, at least 1 lower case, and at least 1 number."}):n=1}if(s&&n){var h=new URLSearchParams;console.log(a.username+" "+a.password),h.append("username",a.username),h.append("password",a.password),h.append("email",a.email),m.a.post("http://localhost:3000/users/register",h).then((function(e){t.props.history.push("/")})).catch((function(e){t.setState({error:e.response.data.message})}))}}},{key:"render",value:function(){return Object(g.jsxs)("div",{class:"mediumPanel",children:[Object(g.jsx)("h1",{style:{textAlign:"center"},children:"Welcome to CSLOL!"}),Object(g.jsx)("p",{style:{textAlign:"center"},children:"Register first to enroll and start your fantastic courses!"}),Object(g.jsx)("p",{class:"secondaryText",children:"* are required information"}),Object(g.jsxs)(x.a,{onSubmit:this.onSubmit,children:[Object(g.jsx)(x.a.Row,{children:Object(g.jsxs)(x.a.Group,{as:O.a,controlId:"formGridEmail",children:[Object(g.jsxs)(x.a.Label,{children:["Email",Object(g.jsx)("span",{id:"required",children:"*"})]}),Object(g.jsx)(x.a.Control,{required:!0,type:"email",placeholder:"Enter your email address...",value:this.state.email,onChange:this.onChangeEmail}),Object(g.jsx)(x.a.Text,{className:"text-muted",children:"Please enter a valid email address that you use in your daily life."})]})}),Object(g.jsx)(x.a.Row,{children:Object(g.jsxs)(x.a.Group,{as:O.a,controlId:"formGridUsername",children:[Object(g.jsxs)(x.a.Label,{children:["Username",Object(g.jsx)("span",{id:"required",children:"*"})]}),Object(g.jsx)(x.a.Control,{required:!0,type:"text",placeholder:"Enter your username...",value:this.state.username,onChange:this.onChangeUsername}),Object(g.jsx)(x.a.Text,{className:"text-muted",children:"Your username must be longer than 1."})]})}),Object(g.jsx)(x.a.Row,{children:Object(g.jsxs)(x.a.Group,{as:O.a,controlId:"formGridPassword",children:[Object(g.jsxs)(x.a.Label,{children:["Password",Object(g.jsx)("span",{id:"required",children:"*"})]}),Object(g.jsx)(x.a.Control,{required:!0,type:"text",placeholder:"Enter your password...",value:this.state.password,onChange:this.onChangePassword}),Object(g.jsx)(x.a.Text,{className:"text-muted",children:"Your password must have length at least 8. It must contain at least 1 uppercase letter, 1 lowercase letter, and 1 number."})]})}),Object(g.jsx)("div",{id:"submitBtn",children:Object(g.jsx)(p.a,{variant:"primary",type:"submit",children:"Register!"})})]}),Object(g.jsx)("p",{style:{color:"red",textAlign:"center",marginTop:10},children:this.state.error}),Object(g.jsxs)("p",{style:{textAlign:"center"},children:["Already have an account? ",Object(g.jsx)("a",{href:"/",children:"Then login now!"})]})]})}}]),a}(s.Component),y=Object(s.createContext)({isLoggedIn:!1,username:null,token:null,login:function(){},logout:function(){}}),C=function(e){Object(j.a)(a,e);var t=Object(u.a)(a);function a(e){var s;return Object(l.a)(this,a),(s=t.call(this,e)).onChangeUsername=s.onChangeUsername.bind(Object(d.a)(s)),s.onChangePassword=s.onChangePassword.bind(Object(d.a)(s)),s.onSubmit=s.onSubmit.bind(Object(d.a)(s)),s.state={username:"",password:"",error:""},s}return Object(h.a)(a,[{key:"onChangeUsername",value:function(e){this.setState({username:e.target.value})}},{key:"onChangePassword",value:function(e){this.setState({password:e.target.value})}},{key:"onSubmit",value:function(e){var t=this,a=this.context;e.preventDefault();var s={username:this.state.username,password:this.state.password},n=new URLSearchParams;console.log(s.username+" "+s.password),n.append("username",s.username),n.append("password",s.password),console.log("clicksubmit"),m.a.post("http://localhost:3000/users/login",n,{headers:{Authorization:"Bearer "+localStorage.getItem("token")}}).then((function(e){!1===e.data.confirmed?(t.props.history.push("/complete-user-information"),a.login(e.data.username,e.data.token)):(t.props.history.push("/main-courses"),a.login(e.data.username,e.data.token))})).catch((function(e){t.setState({error:e.response.data.message})}))}},{key:"render",value:function(){return Object(g.jsxs)("div",{class:"mediumPanel",children:[Object(g.jsx)("h1",{style:{textAlign:"center"},children:"Welcome to CSLOL!"}),Object(g.jsx)("p",{style:{textAlign:"center"},children:"Login into your account first to start your CS journey!"}),Object(g.jsxs)(x.a,{onSubmit:this.onSubmit,children:[Object(g.jsx)(x.a.Row,{children:Object(g.jsxs)(x.a.Group,{as:O.a,controlId:"formGridLoginUsername",children:[Object(g.jsx)(x.a.Label,{children:"Username"}),Object(g.jsx)(x.a.Control,{required:!0,type:"text",placeholder:"Enter your username...",value:this.state.username,onChange:this.onChangeUsername})]})}),Object(g.jsx)(x.a.Row,{children:Object(g.jsxs)(x.a.Group,{as:O.a,controlId:"formGridLoginPassword",children:[Object(g.jsx)(x.a.Label,{children:"Password"}),Object(g.jsx)(x.a.Control,{required:!0,type:"text",placeholder:"Enter your password...",value:this.state.password,onChange:this.onChangePassword})]})}),Object(g.jsx)("div",{id:"submitBtn",children:Object(g.jsx)(p.a,{variant:"primary",type:"submit",children:"Login!"})})]}),Object(g.jsx)("p",{style:{color:"red",textAlign:"center",marginTop:10},children:this.state.error}),Object(g.jsxs)("p",{style:{textAlign:"center"},children:["Do not have an account yet? ",Object(g.jsx)("a",{href:"/register",children:"Register one now!"})]})]})}}]),a}(s.Component);C.contextType=y;var w=a(31),S=function(e){Object(j.a)(a,e);var t=Object(u.a)(a);function a(e){var s;return Object(l.a)(this,a),(s=t.call(this,e)).state={user:{},init:0},s.onLogout=s.onLogout.bind(Object(d.a)(s)),s}return Object(h.a)(a,[{key:"componentDidMount",value:function(){var e=this;m.a.get("http://localhost:3000/users/loginUser",{headers:{Authorization:"Bearer "+localStorage.getItem("token")}}).then((function(t){e.setState({user:t.data,init:1})}))}},{key:"render",value:function(){var e=this.state.user.courses;return this.state.init?Object(g.jsx)("div",{class:"Profile",children:Object(g.jsx)("div",{class:"page-content page-container",id:"page-content",children:Object(g.jsx)("div",{class:"padding",children:Object(g.jsx)("div",{class:"row container d-flex justify-content-center",children:Object(g.jsx)("div",{class:"col-xl-6 col-md-12",children:Object(g.jsx)("div",{class:"card user-card-full",children:Object(g.jsxs)("div",{class:"row m-l-0 m-r-0",children:[Object(g.jsx)("div",{class:"col-sm-4 bg-c-lite-green user-profile",children:Object(g.jsxs)("div",{class:"card-block text-center text-white",children:[Object(g.jsx)("div",{class:"m-b-25",children:Object(g.jsx)("img",{src:"https://icon-library.com/images/cute-computer-icon/cute-computer-icon-5.jpg",class:"img-radius",width:"70%",alt:"User-Profile-Image"})}),Object(g.jsx)("h6",{class:"f-w-600",id:"username",children:this.state.user.username}),Object(g.jsx)("p",{style:{color:"white",size:"large",fontWeight:"bold"},children:"Welcome to CSLOL!"})," ",Object(g.jsx)("i",{class:" mdi mdi-square-edit-outline feather icon-edit m-t-10 f-16"})]})}),Object(g.jsx)("div",{class:"col-sm-8",children:Object(g.jsxs)("div",{class:"card-block",children:[Object(g.jsx)("h6",{class:"m-b-20 p-b-5 b-b-default f-w-600",style:{fontSize:"x-large"},children:"Information"}),Object(g.jsxs)("div",{class:"row",children:[Object(g.jsxs)("div",{class:"col-sm-6",children:[Object(g.jsx)("p",{class:"m-b-10 f-w-600",children:"First Name"}),Object(g.jsx)("h6",{class:"f-w-400",children:this.state.user.firstName})]}),Object(g.jsxs)("div",{class:"col-sm-6",children:[Object(g.jsx)("p",{class:"m-b-10 f-w-600",children:"Last Name"}),Object(g.jsx)("h6",{class:"f-w-400",children:this.state.user.lastName})]}),Object(g.jsxs)("div",{class:"col-sm-6",children:[Object(g.jsx)("p",{class:"m-b-10 f-w-600",children:"Age"}),Object(g.jsx)("h6",{class:"f-w-400",children:this.state.user.Age})]})]}),Object(g.jsxs)("div",{class:"row",children:[Object(g.jsxs)("div",{class:"col-sm-6",children:[Object(g.jsx)("p",{class:"m-b-10 f-w-600",children:"Gender"}),Object(g.jsx)("h6",{class:"f-w-400",children:this.state.user.gender})]}),Object(g.jsxs)("div",{class:"col-sm-6",children:[Object(g.jsx)("p",{class:"m-b-10 f-w-600",children:"Preferred Prouns"}),Object(g.jsx)("h6",{class:"f-w-400",children:this.state.user.preferredPron})]})]}),Object(g.jsxs)("div",{class:"row",children:[Object(g.jsxs)("div",{class:"col-sm-6",children:[Object(g.jsx)("p",{class:"m-b-10 f-w-600",children:"Email"}),Object(g.jsx)("h6",{class:"f-w-400",children:this.state.user.email})]}),Object(g.jsxs)("div",{class:"col-sm-6",children:[Object(g.jsx)("p",{class:"m-b-10 f-w-600",children:"Phone"}),Object(g.jsx)("h6",{class:"f-w-400",children:this.state.user.phone})]})]}),Object(g.jsxs)("div",{class:"row",children:[Object(g.jsxs)("div",{class:"col-sm-6",children:[Object(g.jsx)("p",{class:"m-b-10 f-w-600",children:"Instagram"}),Object(g.jsx)("h6",{class:"f-w-400",children:this.state.user.instagram})]}),Object(g.jsxs)("div",{class:"col-sm-6",children:[Object(g.jsx)("p",{class:"m-b-10 f-w-600",children:"FaceBook"}),Object(g.jsx)("h6",{class:"f-w-400",children:this.state.user.facebook})]})]}),Object(g.jsx)("h6",{class:"m-b-20 m-t-40 p-b-5 b-b-default f-w-600",children:"Courses"}),Object(g.jsx)("ul",{children:e.map((function(e){return Object(g.jsxs)("li",{class:"f-w-400",children:[e.name,", by ",e.instructor,", ",e.time,", ",e.mode]})}))}),Object(g.jsx)("p",{style:{textAlign:"center",marginTop:30},children:Object(g.jsx)("a",{href:"/main-courses",children:"Go and enroll more courses!"})}),Object(g.jsxs)("ul",{class:"social-link list-unstyled m-t-40 m-b-10",children:[Object(g.jsx)("li",{children:Object(g.jsx)("a",{href:"#!","data-toggle":"tooltip","data-placement":"bottom",title:"","data-original-title":"facebook","data-abc":"true",children:Object(g.jsx)("i",{class:"mdi mdi-facebook feather icon-facebook facebook","aria-hidden":"true"})})}),Object(g.jsx)("li",{children:Object(g.jsx)("a",{href:"#!","data-toggle":"tooltip","data-placement":"bottom",title:"","data-original-title":"twitter","data-abc":"true",children:Object(g.jsx)("i",{class:"mdi mdi-twitter feather icon-twitter twitter","aria-hidden":"true"})})}),Object(g.jsx)("li",{children:Object(g.jsx)("a",{href:"#!","data-toggle":"tooltip","data-placement":"bottom",title:"","data-original-title":"instagram","data-abc":"true",children:Object(g.jsx)("i",{class:"mdi mdi-instagram feather icon-instagram instagram","aria-hidden":"true"})})})]})]})})]})})})})})})}):Object(g.jsx)("div",{class:"mediumPanel",children:Object(g.jsx)(w.a,{animation:"border",role:"status",children:Object(g.jsx)("span",{className:"sr-only",children:"Loading..."})})})}}]),a}(s.Component),k=a(27),L=a.n(k),I=a(40),P=a(39),N=a(10),A=a(33),E=a(69),G=a(37),z=a(82),T=function(e){Object(j.a)(a,e);var t=Object(u.a)(a);function a(e){var s;return Object(l.a)(this,a),(s=t.call(this,e)).state={courses:[],init:0,user:{},isLogin:!1},s}return Object(h.a)(a,[{key:"componentDidMount",value:function(){var e=Object(I.a)(L.a.mark((function e(){var t=this;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.get("http://localhost:3000/courses/",{headers:{Authorization:"Bearer "+localStorage.getItem("token")}}).then((function(e){t.setState({courses:e.data,init:1})}));case 2:return e.next=4,m.a.get("http://localhost:3000/users/loginUser",{headers:{Authorization:"Bearer "+localStorage.getItem("token")}}).then((function(e){void 0==e.data?t.props.history.push("/error"):t.setState({user:e.data})}));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return console.log("username: ".concat(this.state.user.username)),this.state.init?Object(g.jsxs)("div",{children:[Object(g.jsx)(E.a,{className:"main-nav",children:Object(g.jsxs)(P.a,{bg:"light",fixed:"top",children:[Object(g.jsx)(P.a.Brand,{href:"#home",style:{fontSize:"xxx-large"},children:"CSLOL"}),Object(g.jsx)(P.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(g.jsxs)(P.a.Collapse,{id:"basic-navbar-nav",children:[Object(g.jsxs)(N.a,{className:"mr-auto",children:[Object(g.jsx)(N.a.Link,{href:"/",style:{fontSize:"xx-large"},children:"Courses"}),Object(g.jsxs)(A.a,{title:"Introduction",id:"basic-nav-dropdown",style:{fontSize:"xx-large"},children:[Object(g.jsx)(A.a.Item,{href:"#action/3.1",style:{fontSize:"large"},children:"What is CSLOL?"}),Object(g.jsx)(A.a.Item,{href:"#action/3.2",style:{fontSize:"large"},children:"What can you do on CSLOL?"}),Object(g.jsx)(A.a.Item,{href:"#action/3.3",style:{fontSize:"large"},children:"Things you need to know"}),Object(g.jsx)(A.a.Divider,{})]})]}),"Welcome,",Object(g.jsx)(N.a.Link,{href:"/profile",style:{fontSize:"x-large"},children:this.state.user.username})]})]})}),Object(g.jsxs)("div",{class:"courses",children:[Object(g.jsx)("h1",{style:{textAlign:"center"},children:"Welcome to CSLOL!"}),Object(g.jsx)("h3",{style:{textAlign:"center"},children:"Have a look at our fantastic courses!"}),Object(g.jsx)(z.a,{className:"card-deck",children:this.state.courses.map((function(e){var t="/enroll/".concat(e.slug),a="/main-courses/".concat(e.slug);return Object(g.jsx)("div",{children:Object(g.jsx)(G.a,{style:{width:"22rem"},id:"course-card",children:Object(g.jsxs)(G.a.Body,{children:[Object(g.jsx)(G.a.Title,{children:e.name}),Object(g.jsx)(G.a.Subtitle,{className:"mb-2",style:{textAlign:"right"},children:e.time}),Object(g.jsx)(G.a.Subtitle,{className:"mb-2",style:{textAlign:"right"},children:e.mode}),Object(g.jsx)(G.a.Subtitle,{className:"mb-2",style:{textAlign:"right"},children:e.instructor}),Object(g.jsx)(G.a.Text,{style:{fontSize:"medium"},children:e.summary}),Object(g.jsx)(G.a.Link,{href:t,children:"Quick Enroll"}),Object(g.jsx)(G.a.Link,{href:a,children:"More info"})]})})})}))})]})]}):Object(g.jsxs)("div",{children:[Object(g.jsx)(E.a,{className:"main-nav",children:Object(g.jsxs)(P.a,{bg:"light",sticky:"top",children:[Object(g.jsx)(P.a.Brand,{href:"/main-courses",style:{fontSize:"xxx-large"},children:"CSLOL"}),Object(g.jsx)(P.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(g.jsxs)(P.a.Collapse,{id:"basic-navbar-nav",children:[Object(g.jsxs)(N.a,{className:"mr-auto",children:[Object(g.jsx)(N.a.Link,{href:"/main-courses",style:{fontSize:"xx-large"},children:"Courses"}),Object(g.jsxs)(A.a,{title:"Introduction",id:"basic-nav-dropdown",style:{fontSize:"xx-large"},children:[Object(g.jsx)(A.a.Item,{href:"#action/3.1",style:{fontSize:"large"},children:"What is CSLOL?"}),Object(g.jsx)(A.a.Item,{href:"#action/3.2",style:{fontSize:"large"},children:"What can you do on CSLOL?"}),Object(g.jsx)(A.a.Item,{href:"#action/3.3",style:{fontSize:"large"},children:"Things you need to know"}),Object(g.jsx)(A.a.Divider,{})]})]}),Object(g.jsxs)(N.a,{defaultActiveKey:"/home",as:"ul",children:[Object(g.jsx)(N.a.Item,{as:"li",style:{fontSize:"x-large"},children:Object(g.jsx)(N.a.Link,{href:"/login",children:"Login"})}),Object(g.jsx)(N.a.Item,{as:"li",style:{fontSize:"x-large"},children:Object(g.jsx)(N.a.Link,{href:"/register",children:"Register"})})]})]})]})}),Object(g.jsx)("div",{class:"courses",children:Object(g.jsx)("h1",{style:{textAlign:"center"},children:"Welcome to CSLOL!"})}),Object(g.jsx)(w.a,{animation:"border",role:"status",children:Object(g.jsx)("span",{className:"sr-only",children:"Loading..."})})]})}}]),a}(s.Component),B=function(e){Object(j.a)(a,e);var t=Object(u.a)(a);function a(e){var s;return Object(l.a)(this,a),(s=t.call(this,e)).onChangeContactEmail=s.onChangeContactEmail.bind(Object(d.a)(s)),s.onChangeExpectation=s.onChangeExpectation.bind(Object(d.a)(s)),s.onSubmit=s.onSubmit.bind(Object(d.a)(s)),s.state={contactEmail:"",expectation:"",user:{},course:{},initUser:0,initCourse:0,finish:0},s}return Object(h.a)(a,[{key:"onChangeContactEmail",value:function(e){this.setState({contactEmail:e.target.value})}},{key:"onChangeExpectation",value:function(e){this.setState({expectation:e.target.value})}},{key:"componentDidMount",value:function(){var e=Object(I.a)(L.a.mark((function e(){var t,a=this;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.get("http://localhost:3000/users/loginUser",{headers:{Authorization:"Bearer "+localStorage.getItem("token")}}).then((function(e){a.setState({user:e.data,initUser:1})}));case 2:return t=this.props.match.params.slug,e.next=5,m.a.get("http://localhost:3000/courses/".concat(t)).then((function(e){a.setState({course:e.data,initCourse:1})}));case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"onSubmit",value:function(e){console.log(this.state.user),console.log(this.state.course.slug),e.preventDefault();var t=new URLSearchParams;t.append("contactEmail",this.state.contactEmail),t.append("expectation",this.state.expectation),t.append("user",this.state.user._id),m.a.put("http://localhost:3000/courses/enroll/".concat(this.state.course.slug),t,{headers:{Authorization:"Bearer "+localStorage.getItem("token")}}).then(this.setState({finish:1}))}},{key:"render",value:function(){return this.state.initUser&&this.state.initCourse?this.state.finish?Object(g.jsxs)("div",{class:"largePanel",children:[Object(g.jsx)("h2",{children:"We appreciate your information!"}),Object(g.jsx)("h4",{children:"Below information has been saved and would be provided with the instructor before the course starts. Hope you would enjoy this course!"}),Object(g.jsxs)("p",{children:[Object(g.jsx)("span",{style:{fontSize:"large",fontWeight:"bold"},children:"Course: "}),this.state.course.name]}),Object(g.jsxs)("p",{children:[Object(g.jsx)("span",{style:{fontSize:"large",fontWeight:"bold"},children:"Contact Email: "}),this.state.contactEmail]}),Object(g.jsxs)("p",{children:[Object(g.jsx)("span",{style:{fontSize:"large",fontWeight:"bold"},children:"Message to instructor: "}),this.state.expectation]}),Object(g.jsx)("p",{style:{textAlign:"center",marginTop:30},children:Object(g.jsx)("a",{href:"/main-courses",children:"Back to main page!"})})]}):Object(g.jsxs)("div",{class:"largePanel",children:[Object(g.jsx)("h1",{style:{textAlign:"center"},children:"Enroll in One Sec!"}),Object(g.jsxs)("p",{children:["Please be honest in following information. All information are ",Object(g.jsx)("span",{style:{color:"red"},children:"required"})," in order to provide you with a fantastics learning experiences."]}),Object(g.jsxs)(x.a,{onSubmit:this.onSubmit,children:[Object(g.jsx)(x.a.Row,{children:Object(g.jsxs)(x.a.Group,{as:O.a,controlId:"formGridContactEmail",children:[Object(g.jsx)(x.a.Label,{children:"Please leave a email address that you commonly use for future contact with instructors."}),Object(g.jsx)(x.a.Control,{required:!0,type:"text",placeholder:"Enter your commonly used email...",value:this.state.contactEmail,onChange:this.onChangeContactEmail}),Object(g.jsx)(x.a.Text,{className:"text-muted",children:"This email is simply used for future contact with your instructor. It does not necessarily need to be the email address that you used for registration."})]})}),Object(g.jsxs)(x.a.Row,{children:[Object(g.jsxs)(x.a.Group,{as:O.a,controlId:"formGridExpectation",children:[Object(g.jsx)(x.a.Label,{children:"Please briefly write something about your goals, intentions, or expectation to this class."}),Object(g.jsx)(x.a.Control,{required:!0,type:"text",placeholder:"Leave your message to your instructor here...",as:"textarea",rows:5,value:this.state.expectation,onChange:this.onChangeExpectation})]}),Object(g.jsx)(x.a.Text,{className:"text-muted",children:"Instructors are eager to know more about you! Feel free to leave messages to your instructor before formally starting the class. What do you want to learn? Why are you enrolling for this class? Is there any concern or suggestion? Which part in this class attracts you most? Are there any specific requests you want to raise for instructors?"})]}),Object(g.jsx)("div",{id:"submitBtn-large",children:Object(g.jsx)(p.a,{variant:"primary",type:"submit",children:"Enroll now!"})})]}),Object(g.jsxs)("p",{style:{textAlign:"center",marginTop:30},children:["Regret a bit? ",Object(g.jsx)("a",{href:"/main-courses",children:"Go back and see other courses!"})]})]}):Object(g.jsx)("div",{class:"largePanel",children:Object(g.jsx)(w.a,{animation:"border",role:"status",children:Object(g.jsx)("span",{className:"sr-only",children:"Loading..."})})})}}]),a}(s.Component),U=a(54),D=function(e){Object(j.a)(a,e);var t=Object(u.a)(a);function a(e){var s;return Object(l.a)(this,a),(s=t.call(this,e)).state={course:{},initCourse:0},s}return Object(h.a)(a,[{key:"componentDidMount",value:function(){var e=Object(I.a)(L.a.mark((function e(){var t,a=this;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.match.params.slug,e.next=3,m.a.get("http://localhost:3000/courses/".concat(t),{headers:{Authorization:"Bearer "+localStorage.getItem("token")}}).then((function(e){a.setState({course:e.data,initCourse:1})}));case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){if(this.state.initCourse){var e="/enroll/".concat(this.state.course.slug),t="/main-courses/".concat(this.state.course.slug,"/reviews"),a=this.state.course.topics,s=this.state.course.textbooks;console.log(this.state.course);for(var n=this.state.course.reviews,r=0,c=0;c<n.length;c++)r+=n[c].ratings;var i=r/n.length;return Object(g.jsxs)("div",{class:"hugePanel",children:[Object(g.jsxs)(N.a,{style:{fontSize:"medium"},children:[Object(g.jsx)(N.a.Item,{as:"li",children:Object(g.jsx)(N.a.Link,{href:e,children:"Enroll"})}),Object(g.jsx)(N.a.Item,{as:"li",children:Object(g.jsx)(N.a.Link,{href:t,children:"Reviews"})}),Object(g.jsx)(N.a.Item,{as:"li",children:Object(g.jsx)(N.a.Link,{href:"/main-courses",children:"Back"})})]}),Object(g.jsx)("h1",{style:{marginTop:30},children:this.state.course.name}),Object(g.jsxs)(U.a,{pill:!0,variant:"primary",style:{marginBottom:30,fontSize:"medium"},children:["\u2b50 ",i]}),Object(g.jsx)("h4",{children:this.state.course.instructor}),Object(g.jsx)("h4",{children:this.state.course.time}),Object(g.jsx)("h4",{children:this.state.course.mode}),Object(g.jsxs)("h4",{children:["Location: ",this.state.course.location]}),Object(g.jsx)("p",{style:{marginTop:30,fontSize:"medium"},children:this.state.course.description}),Object(g.jsx)("h5",{style:{marginTop:30,color:"dodgerblue"},children:"Main Topics:"}),Object(g.jsx)("ul",{children:a.map((function(e){return Object(g.jsx)("li",{children:e})}))}),Object(g.jsx)("h5",{style:{marginTop:30,color:"dodgerblue"},children:"Required Textbooks:"}),Object(g.jsx)("ul",{children:s.map((function(e){return Object(g.jsx)("li",{children:e})}))})]})}return Object(g.jsx)("div",{class:"largePanel",children:Object(g.jsx)(w.a,{animation:"border",role:"status",children:Object(g.jsx)("span",{className:"sr-only",children:"Loading..."})})})}}]),a}(s.Component),R=a(49);function q(){var e=Object(s.useState)(!1),t=Object(c.a)(e,2),a=t[0],n=t[1],r=Object(s.useState)({}),i=Object(c.a)(r,2),l=i[0],h=i[1],d=Object(s.useState)({}),j=Object(c.a)(d,2),u=j[0],b=j[1],f=Object(s.useState)(""),v=Object(c.a)(f,2),y=v[0],C=v[1],S=Object(s.useState)(0),k=Object(c.a)(S,2),L=k[0],I=k[1],P=Object(s.useState)(0),A=Object(c.a)(P,2),E=A[0],G=A[1],z=Object(s.useState)(0),T=Object(c.a)(z,2),B=T[0],U=T[1],D=Object(o.e)().slug,q="/main-courses/".concat(D,"/reviews"),F=function(){return n(!1)};0!=E&&0!=B||(m.a.get("http://localhost:3000/users/loginUser",{headers:{Authorization:"Bearer "+localStorage.getItem("token")}}).then((function(e){h(e.data),G(1)})),m.a.get("http://localhost:3000/courses/".concat(D)).then((function(e){b(e.data),U(1)})));if(E&&B){var W="/enroll/".concat(u.slug);return Object(g.jsxs)("div",{children:[Object(g.jsxs)(N.a,{style:{fontSize:"medium"},children:[Object(g.jsx)(N.a.Item,{as:"li",children:Object(g.jsx)(N.a.Link,{href:W,children:"Enroll"})}),Object(g.jsx)(N.a.Item,{as:"li",children:Object(g.jsx)(N.a.Link,{onClick:function(){return n(!0)},children:"Post"})}),Object(g.jsx)(N.a.Item,{as:"li",children:Object(g.jsx)(N.a.Link,{href:"/main-courses",children:"Back"})})]}),Object(g.jsxs)(R.a,{show:a,onHide:F,animation:!1,size:"lg",children:[Object(g.jsx)(R.a.Header,{closeButton:!0,children:Object(g.jsx)(R.a.Title,{children:"Post Reviews"})}),Object(g.jsxs)(R.a.Body,{children:[Object(g.jsx)("p",{children:"What do you think of this course? Feel free to eave your rating and comments here!"}),Object(g.jsxs)(x.a.Group,{as:O.a,controlId:"formGridGender",children:[Object(g.jsx)(x.a.Label,{children:"How much do you rate this course?"}),Object(g.jsxs)(x.a.Control,{as:"select",onChange:function(e){I(parseInt(e.target.value))},children:[Object(g.jsx)("option",{children:"Rating from 1 to 5"}),Object(g.jsx)("option",{value:"1",children:"1"}),Object(g.jsx)("option",{value:"2",children:"2"}),Object(g.jsx)("option",{value:"3",children:"3"}),Object(g.jsx)("option",{value:"4",children:"4"}),Object(g.jsx)("option",{value:"5",children:"5"}),"required"]})]}),Object(g.jsxs)(x.a.Group,{children:[Object(g.jsx)(x.a.Label,{children:"Do you have any comments?"}),Object(g.jsx)(x.a.Control,{required:!0,type:"text",placeholder:"Leave your comments here...",as:"textarea",rows:3,onChange:function(e){C(e.target.value)}})]})]}),Object(g.jsxs)(R.a.Footer,{children:[Object(g.jsx)(p.a,{variant:"secondary",onClick:F,children:"Cancel"}),Object(g.jsx)(p.a,{variant:"primary",onClick:function(e){e.preventDefault();var t=new URLSearchParams;t.append("publisher",l._id),t.append("content",y),t.append("ratings",L),t.append("course",u._id),m.a.post("http://localhost:3000/reviews/post",t,{headers:{Authorization:"Bearer "+localStorage.getItem("token")}}).then((function(){window.location=q}))},children:"Post"})]})]})]})}return Object(g.jsx)("div",{class:"largePanel",children:Object(g.jsx)(w.a,{animation:"border",role:"status",children:Object(g.jsx)("span",{className:"sr-only",children:"Loading..."})})})}var F,W=function(e){Object(j.a)(a,e);var t=Object(u.a)(a);function a(e){var s;return Object(l.a)(this,a),(s=t.call(this,e)).state={course:{},initCourse:0,user:{},initUser:0,rating:0,content:""},s}return Object(h.a)(a,[{key:"componentDidMount",value:function(){var e=Object(I.a)(L.a.mark((function e(){var t,a=this;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.get("http://localhost:3000/users/loginUser",{headers:{Authorization:"Bearer "+localStorage.getItem("token")}}).then((function(e){a.setState({user:e.data,initUser:1})}));case 2:return t=this.props.match.params.slug,e.next=5,m.a.get("http://localhost:3000/courses/".concat(t)).then((function(e){a.setState({course:e.data,initCourse:1})}));case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"onSubmit",value:function(e){}},{key:"render",value:function(){if(this.state.initUser&&this.state.initCourse){"/enroll/".concat(this.state.course.slug);for(var e=this.state.course.reviews,t=0,a=0;a<e.length;a++)t+=e[a].ratings;var s=t/e.length;return Object(g.jsxs)("div",{class:"hugePanel",children:[Object(g.jsx)(q,{}),Object(g.jsx)("h1",{style:{marginTop:30},children:this.state.course.name}),Object(g.jsxs)(U.a,{pill:!0,variant:"primary",style:{marginBottom:30,fontSize:"medium"},children:["\u2b50 ",s]}),e.map((function(e){return Object(g.jsxs)("div",{class:"review-box",children:[Object(g.jsx)("h5",{style:{display:"inline-block"},children:e.publisher.username}),Object(g.jsxs)(U.a,{pill:!0,variant:"primary",style:{marginLeft:15},children:["\u2b50 ",e.ratings]}),Object(g.jsx)("p",{style:{fontSize:"medium"},children:e.content})]})}))]})}return Object(g.jsx)("div",{class:"largePanel",children:Object(g.jsx)(w.a,{animation:"border",role:"status",children:Object(g.jsx)("span",{className:"sr-only",children:"Loading..."})})})}}]),a}(s.Component),H=function(e){Object(j.a)(a,e);var t=Object(u.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(h.a)(a,[{key:"render",value:function(){return Object(g.jsxs)("div",{class:"mediumPanel",children:[Object(g.jsx)("h2",{children:"Oops, somthing went wrong \u26a0\ufe0f"}),Object(g.jsxs)("p",{children:[Object(g.jsx)("a",{href:"/",children:"Login"})," first to start your CS journey!"]}),Object(g.jsxs)("p",{children:["First time in CSLOL? ",Object(g.jsx)("a",{href:"/register",children:"Register"})," one!"]})]})}}]),a}(s.Component),M=function(e){var t=Object(s.useState)(!1),a=Object(c.a)(t,2),n=a[0],r=a[1],l=Object(s.useState)(!1),h=Object(c.a)(l,2),d=h[0],j=h[1],u=Object(s.useState)(),b=Object(c.a)(u,2),x=b[0],O=b[1],p=Object(s.useCallback)((function(e,t,a){r(t),j(e);var s=a||new Date((new Date).getTime()+36e5);O(s),localStorage.setItem("userData",JSON.stringify({username:e,token:t,expiration:s.toISOString()})),localStorage.setItem("token",t),m.a.defaults.headers.common.Authorization="Bearer ".concat(t)}),[]),w=Object(s.useCallback)((function(){r(null),O(null),j(null),localStorage.removeItem("userData"),localStorage.removeItem("profileData");m.a.defaults.headers.common.Authorization="Bearer ".concat(null)}),[]);return Object(s.useEffect)((function(){if(n&&x){var e=x.getTime()-(new Date).getTime();F=setTimeout(w,e)}else clearTimeout(F)}),[n,w,x]),Object(s.useEffect)((function(){var e=JSON.parse(localStorage.getItem("userData"));e&&e.token&&new Date(e.expiration)>new Date&&p(e.userId,e.token,new Date(e.expiration))}),[p]),Object(g.jsx)(y.Provider,{value:{isLoggedIn:!!n,token:n,username:d,login:p,logout:w},children:Object(g.jsx)("div",{className:"container",children:Object(g.jsx)(i.a,{children:Object(g.jsxs)("div",{className:"container",children:[Object(g.jsx)(o.a,{path:"/complete-user-information",exact:!0,component:f}),Object(g.jsx)(o.a,{path:"/register",exact:!0,component:v}),Object(g.jsx)(o.a,{path:"/main-courses",exact:!0,component:T}),Object(g.jsx)(o.a,{path:"/profile",exact:!0,component:S}),Object(g.jsx)(o.a,{path:"/",exact:!0,component:C}),Object(g.jsx)(o.a,{path:"/enroll/:slug",exact:!0,component:B}),Object(g.jsx)(o.a,{path:"/main-courses/:slug",exact:!0,component:D}),Object(g.jsx)(o.a,{path:"/main-courses/:slug/reviews",exact:!0,component:W}),Object(g.jsx)(o.a,{path:"/error",exact:!0,component:H})]})})})})};a(117);r.a.render(Object(g.jsx)(M,{}),document.getElementById("root"))}},[[118,1,2]]]);
//# sourceMappingURL=main.c5e335fb.chunk.js.map