(this["webpackJsonpgroupcheck-client"]=this["webpackJsonpgroupcheck-client"]||[]).push([[0],{23:function(e,t,a){e.exports=a(35)},33:function(e,t,a){},34:function(e,t,a){},35:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),s=a(20),r=a.n(s),o=a(6),c=a(1),l=a(2),m=a(4),u=a(3),h=a(5),d=a(12),p=i.a.createContext({items:[],lists:[],sharedLists:[],user:{},currentList:[],addList:function(){},addItem:function(){},deleteItem:function(){},deleteList:function(){},setUser:function(){},setLists:function(){},setSharedLists:function(){},setItems:function(){},setCurrentList:function(){}}),f="https://blooming-mountain-65487.herokuapp.com",b=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(i)))).handleClickDelete=function(){var e=a.props.list_id,t=a.props.id,n=String(t),i=String(e);fetch("".concat(f,"/api/items/")+i+"/"+n,{method:"DELETE",credentials:"include",body:JSON.stringify({id:t,list_id:e})}).then((function(e){if(!e.ok)return e.json().then((function(e){return Promise.reject(e)}))})).then((function(){a.context.deleteItem(t)}))},a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.name,a=e.content,n=e.priority;return i.a.createElement("div",{className:"Item"},i.a.createElement("div",{className:"Item_top_container"},i.a.createElement("h2",{className:"Item__title"},t),i.a.createElement("button",{className:"Item__delete",type:"button",onClick:this.handleClickDelete}," ","Remove")),i.a.createElement("div",{className:"Item__priorities"},"Priority:"," ",i.a.createElement("span",{className:"Item_Priority"},n)),i.a.createElement("div",{className:"Item__content"},i.a.createElement("p",{className:"Content"},a)))}}]),t}(i.a.Component);b.contextType=p,b.defaultProps={id:1,name:""};var v=b,E=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).state={listName:a.props.listName,listId:[]},a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.setState({listId:this.context.currentList})}},{key:"render",value:function(){return i.a.createElement("div",{className:"ListMainNav_container"},i.a.createElement("nav",{className:"ListMainNav_navbar"},i.a.createElement("h2",{className:"ListMainNav_header"},this.props.listName),i.a.createElement(o.b,{className:"button",to:{pathname:"/add-item",state:{listName:this.props.listName,listId:this.context.currentList}}},"+")))}}]),t}(i.a.Component);E.contextType=p;var g=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).state={toLogin:!1},a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.listName=this.props.location.state.listName;var t=this.props.match.params.listId;this.listId=t,this.context.setCurrentList(t),fetch("".concat(f,"/api/lists/"),{credentials:"include"}).then((function(t){403===t.status&&e.setState({toLogin:!0})})),fetch("".concat(f,"/api/items/")+t,{credentials:"include"}).then((function(e){return e.json()})).then((function(t){e.context.setItems(t)}))}},{key:"render",value:function(){if(!0===this.state.toLogin)return i.a.createElement(d.a,{to:"/login"});var e=this.context.items;return i.a.createElement("section",{className:"Container ListMain_itemlistcontainer"},i.a.createElement(o.b,{className:"button back",to:{pathname:"/"}},"Back"),i.a.createElement(E,{listName:this.listName}),i.a.createElement("ul",{className:"ListMain_itemlist"},e.map((function(e){return i.a.createElement("li",{key:e.id,className:"ListMain_item"},i.a.createElement(v,{id:e.id,list_id:e.list_id,name:e.name,priority:e.priority,content:e.content}))}))))}}]),t}(i.a.Component);g.contextType=p,g.defaultProps={location:{state:{}},match:{params:{}}};var y=g,N=a(7),j=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).state={toLogin:!1},a.handleSubmit=a.handleSubmit.bind(Object(N.a)(a)),a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("".concat(f,"/api/lists/"),{credentials:"include"}).then((function(t){403===t.status&&e.setState({toLogin:!0})}))}},{key:"handleSubmit",value:function(e){var t=this;e.preventDefault();var a={name:e.target.listName.value,author:this.context.user.id};if(""===a.name)return alert("please complete the required fields"),!1;fetch("".concat(f,"/api/lists/"),{method:"POST",credentials:"include",headers:{"content-type":"application/json"},body:JSON.stringify(a)}).then((function(e){return e.ok?e.json():e.json().then((function(e){return Promise.reject(e)}))})).then((function(e){t.context.addList(e),t.props.history.push("/")}))}},{key:"render",value:function(){return!0===this.state.toLogin?i.a.createElement(d.a,{to:"/login"}):i.a.createElement("div",{className:"AddList_container"},i.a.createElement(o.b,{className:"button back",to:{pathname:"/"}},"Back"),i.a.createElement("form",{onSubmit:this.handleSubmit,className:"AddList_form"},i.a.createElement("input",{id:"nameInput",type:"text",name:"listName",placeholder:"New List Name",className:"AddList_input"}),i.a.createElement("button",{type:"submit",className:"AddList_button"},"Create List")))}}]),t}(i.a.Component);j.contextType=p;var _=j,L=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).state={toLogin:!1},a.handleSubmit=a.handleSubmit.bind(Object(N.a)(a)),a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("".concat(f,"/api/lists/"),{credentials:"include"}).then((function(t){403===t.status&&e.setState({toLogin:!0})}))}},{key:"handleSubmit",value:function(e){var t=this;e.preventDefault();var a={key:e.target.itemName.value,name:e.target.itemName.value,priority:e.target.itemPriority.value,list_id:this.context.currentList,content:e.target.itemContent.value},n=String(a.list_id);return""===a.name||""===a.content||""===a.priority?(alert("please complete the required fields"),!1):void fetch("".concat(f,"/api/items/")+n,{method:"POST",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)}).then((function(e){return e.json()})).then((function(e){t.context.addItem(e),t.props.history.goBack()}))}},{key:"render",value:function(){return!0===this.state.toLogin?i.a.createElement(d.a,{to:"/login"}):i.a.createElement("div",{className:"AddItem_container"},i.a.createElement(o.b,{className:"button back",to:{pathname:"/"}},"Back"),i.a.createElement("form",{onSubmit:this.handleSubmit,className:"AddItem_form"},i.a.createElement("label",{htmlFor:"nameInput",className:"AddItem_label"},"item name*"),i.a.createElement("input",{id:"nameInput",type:"text",name:"itemName",placeholder:"New Item Name",className:"AddItem_input"}),i.a.createElement("label",{htmlFor:"contentInput",className:"AddItem_label"},"item content*"),i.a.createElement("textarea",{id:"contentInput",type:"text",name:"itemContent",className:"AddItem_textarea"}),i.a.createElement("label",{htmlFor:"itemPriority",className:"AddItem_label"},"Priority*"),i.a.createElement("select",{name:"itemPriority",id:"AddItem_priority"},i.a.createElement("option",{value:""}),i.a.createElement("option",{value:"1"},"1"),i.a.createElement("option",{value:"2"},"2"),i.a.createElement("option",{value:"3"},"3")),i.a.createElement("button",{className:"AddItem_button"},"Create Note")))}}]),t}(i.a.Component);L.contextType=p;var S=L,O=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).state={email:"",shareId:[],listId:a.props.location.state.listId,toLogin:!1},a.handleEmail=a.handleEmail.bind(Object(N.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(N.a)(a)),a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("".concat(f,"/api/lists/"),{credentials:"include"}).then((function(t){403===t.status&&e.setState({toLogin:!0})}))}},{key:"handleEmail",value:function(e){this.setState({email:e.target.value})}},{key:"executeTheShare",value:function(e,t){var a=this,n={list_id:t,shared_to:e};fetch("".concat(f,"/api/share/").concat(e,"/").concat(t),{method:"POST",credentials:"include",body:JSON.stringify(n)}).then((function(e){return e.ok?e.json():e.json().then((function(e){return Promise.reject(e)}))})).then((function(){alert("List was successfully shared!"),a.props.history.push("/")}))}},{key:"handleSubmit",value:function(e){var t=this;e.preventDefault(),this.email=this.state.email,fetch("".concat(f,"/api/share/").concat(this.email),{credentials:"include"}).then((function(e){return 404===e.status&&alert("Oops, it appears there is no user linked to this email address."),e.json()})).then((function(e){t.setState({shareId:e.id}),e&&t.executeTheShare(t.state.shareId,t.state.listId)}))}},{key:"render",value:function(){return!0===this.state.toLogin?i.a.createElement(d.a,{to:"/login"}):i.a.createElement("div",{className:"ShareList_container"},i.a.createElement("h2",{className:"ShareList_header"},"Share your list with a friend!"),i.a.createElement(o.b,{className:"button back",to:{pathname:"/"}},"Back"),i.a.createElement("form",{action:"",onSubmit:this.handleSubmit,className:"ShareList_form"},i.a.createElement("div",{className:"ShareList_input_container"},i.a.createElement("label",{htmlFor:"email",className:"ShareList_label"},"Share to"),i.a.createElement("input",{type:"text",id:"email",name:"email",value:this.state.email,onChange:this.handleEmail,className:"ShareList_input",placeholder:"email@domain.com"})),i.a.createElement("p",{className:"ShareList_content"},"Sharing is simple! Enter the email of a user you wish to share your list with, and submit! The user will see your list on their home page on their next login!"),i.a.createElement("button",{type:"submit",className:"ShareList_button"},"Submit")))}}]),t}(i.a.Component);O.defaultProps={location:{state:{}}};var k=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).state={hasError:!1},a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return this.state.hasError?i.a.createElement("h2",null,this.props.errorMessage):this.props.children}}],[{key:"getDerivedStateFromError",value:function(){return{hasError:!0}}}]),t}(i.a.Component),C=function(e){function t(){return Object(c.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"Dashboard_container"},i.a.createElement("nav",{className:"Dashboard_nav"},i.a.createElement("h2",{className:"Dashboard_header"},"Welcome ",this.props.name,"!")))}}]),t}(i.a.Component),I=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).handleAddContext=function(e){a.context.setCurrentList(e)},a.handleClickDelete=function(){var e=a.props.id,t=a.props.author,n=String(e);fetch("".concat(f,"/api/lists/")+n,{method:"DELETE",credentials:"include",body:JSON.stringify({list_id:e,author:t}),type:"json"}).then((function(e){if(!e.ok)return e.json().then((function(e){return Promise.reject(e)}))})).then((function(){a.context.deleteList(e)}))},a.state={listName:a.props.name,listId:a.props.id},a.handleAddContext=a.handleAddContext.bind(Object(N.a)(a)),a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.id;return i.a.createElement("li",{key:e,"data-id":e,className:"List"},i.a.createElement(o.b,{className:"ListHomePage__List-link",to:{pathname:"/lists/".concat(e),state:{listName:this.props.name,listId:this.props.id}}},this.state.listName),i.a.createElement("div",{className:"List_Buttons_Container"},i.a.createElement("button",{className:"List__delete",type:"button",onClick:this.handleClickDelete}," ","Remove"),i.a.createElement(o.b,{className:"button",to:{pathname:"/share-list",state:{listName:this.props.name,listId:this.props.id}}},"Share")))}}]),t}(i.a.Component);I.contextType=p;var x=I,w=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(i)))).state={toLogin:!1},a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("".concat(f,"/api/lists/"),{headers:{"Content-Type":"application/json"},credentials:"include"}).then((function(t){403===t.status&&e.setState({toLogin:!0})})),fetch("".concat(f,"/api/lists/"),{headers:{"Content-Type":"application/json"},credentials:"include"}).then((function(e){return e.json()})).then((function(t){e.context.setLists(t)})).catch((function(e){console.log(e)})),fetch("".concat(f,"/api/lists/shared"),{method:"GET",headers:{"Content-Type":"application/json"},credentials:"include"}).then((function(e){return e.json()})).then((function(t){e.context.setSharedLists(t)})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){if(!0===this.state.toLogin)return i.a.createElement(d.a,{to:"/login"});var e=this.context.lists,t=this.context.sharedLists;return i.a.createElement("div",{className:"ListHomePage_container"},i.a.createElement("h2",{className:"ListHomePage_h2"},"Your Lists"),i.a.createElement(o.b,{className:"button",to:"/add-list"},"+"),i.a.createElement("ul",{className:"ListHomePage__list_ul"},e.map((function(e){return i.a.createElement(x,{key:e.id,id:e.id,name:e.name,classname:"ListHomePage_list"})}))),i.a.createElement("h2",{className:"ListHomePage_shared_lists_h2"},"Lists Shared To You"),i.a.createElement("ul",{className:"ListHomePage__sharedLists__ul"},t.map((function(e){return i.a.createElement(x,{key:e.id,id:e.id,name:e.name,author:e.author})}))))}}]),t}(i.a.Component);w.contextType=p,w.defaultProps={lists:[]};var P=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(i)))).state={toLogin:!1},a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("".concat(f,"/api/lists/"),{credentials:"include"}).then((function(t){403===t.status&&e.setState({toLogin:!0})}))}},{key:"render",value:function(){return!0===this.state.toLogin?i.a.createElement(d.a,{to:"/login"}):i.a.createElement("div",{className:"Homepage_Container"},i.a.createElement(C,{name:this.context.user.firstname,className:"Homepage_DashboardComp"}),i.a.createElement(w,{className:"Homepage_ListHomePageComp"}))}}]),t}(i.a.Component);P.contextType=p;var T=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).state={email:"test@test.test",p_word:"test"},a.handlePassword=a.handlePassword.bind(Object(N.a)(a)),a.handleEmail=a.handleEmail.bind(Object(N.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(N.a)(a)),a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"handlePassword",value:function(e){this.setState({p_word:e.target.value})}},{key:"handleEmail",value:function(e){this.setState({email:e.target.value})}},{key:"fetchUser",value:function(e){return fetch("".concat(f,"/api/users/")+e,{method:"GET",headers:{"Content-Type":"application/json"},credentials:"same-origin"}).catch((function(e){console.log("some error happened fetchUser()"),e&&console.log(e)})).then((function(e){return e.json()}))}},{key:"handleSubmit",value:function(e){var t=this;console.log("handleSubmit()"),e.preventDefault();var a=this.state;console.log(a),fetch("".concat(f,"/api/login"),{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify(a)}).then((function(e){return e.json()})).then((function(e){if(console.log("handleSubmit return fetch"),console.log(e),e&&e.hasOwnProperty("id"))return e.id;throw new Error("Something went wrong")})).then((function(e){return t.fetchUser(e)})).then((function(e){console.log("the server knows us as:"),console.log(e),e&&e.hasOwnProperty("id")&&(t.context.setUser(e),t.props.history.push("/"))}))}},{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"Login_container"},i.a.createElement("h2",null,"Demo Credentials"),i.a.createElement("p",null,"Email: test@test.test"),i.a.createElement("p",null,"Password: test"),i.a.createElement("p",null,"Email: test2@test.test"),i.a.createElement("p",null,"Password: test"),i.a.createElement("form",{action:"",onSubmit:function(t){return e.handleSubmit(t)},className:"Login_form"},i.a.createElement("label",{htmlFor:"email",className:"Login_label"},"Email"),i.a.createElement("input",{type:"text",id:"email",name:"email",value:"test@test.test",onChange:function(t){return e.handleEmail(t)},className:"Login_input",required:!0}),i.a.createElement("label",{htmlFor:"password",className:"Login_label"},"Password"),i.a.createElement("input",{type:"password",id:"password",name:"password",value:"test",onChange:function(t){return e.handlePassword(t)},className:"Login_input",required:!0}),i.a.createElement("div",{className:"Login_buttoncontainer"},i.a.createElement("button",{type:"submit",className:"Login_button"},"Sign In")),i.a.createElement(o.b,{to:"/signup",className:"Login_signup"},"Create an account")),i.a.createElement("br",null),i.a.createElement("p",{className:"welcome"},"Welcome to Groupcheck! Planning for a camping trip? Need to send off a to do list? Look no further than Groupcheck. Simply sign up, sign in, and begin creating and sharing!"))}}]),t}(i.a.Component);T.contextType=p;var D=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).handleSubmit=a.handleSubmit.bind(Object(N.a)(a)),a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"handleSubmit",value:function(e){var t=this;e.preventDefault();var a=new FormData(e.target),n={},i=!0,s=!1,r=void 0;try{for(var o,c=a.entries()[Symbol.iterator]();!(i=(o=c.next()).done);i=!0){var l=o.value;n[l[0]]=l[1]}}catch(m){s=!0,r=m}finally{try{i||null==c.return||c.return()}finally{if(s)throw r}}fetch("".concat(f,"/api/users"),{method:"POST",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}).then((function(e){return e.json()})).then((function(e){e&&e.hasOwnProperty("id")?(t.context.setUser({id:e.id}),t.props.history.push("/login")):alert("This email address is already being used by another account")}))}},{key:"render",value:function(){return i.a.createElement("div",{className:"SignUp_container"},i.a.createElement(o.b,{className:"button back",to:{pathname:"/login"}},"Back"),i.a.createElement("form",{onSubmit:this.handleSubmit,className:"SignUp_form"},i.a.createElement("h2",{className:"SignUp_header"},"Sign Up"),i.a.createElement("label",{htmlFor:"firstname",className:"SignUp_label"},"First Name*"),i.a.createElement("input",{type:"text",id:"firstname",name:"firstname",className:"SignUp_input",required:!0}),i.a.createElement("label",{htmlFor:"lastname",className:"SignUp_label"},"Last Name*"),i.a.createElement("input",{type:"text",id:"lastname",name:"lastname",className:"SignUp_input",required:!0}),i.a.createElement("label",{htmlFor:"email",className:"SignUp_label"},"Email*"),i.a.createElement("input",{type:"text",id:"email",name:"email",className:"SignUp_input",required:!0}),i.a.createElement("label",{htmlFor:"p_word",id:"p_word",name:"p_word",className:"SignUp_label"},"Password*"),i.a.createElement("input",{type:"password",id:"p_word",name:"p_word",className:"SignUp_input",required:!0}),i.a.createElement("div",{className:"SignUp_button_container"},i.a.createElement("button",{name:"signup",className:"SignUp_button"},"Sign Up!"))))}}]),t}(i.a.Component);D.contextType=p;a(33);var A=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).handleLogout=a.handleLogout.bind(Object(N.a)(a)),a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"handleLogout",value:function(){var e=this;fetch("".concat(f,"/api/logout"),{credentials:"include"}).then((function(){e.props.history.push("/login")}))}},{key:"render",value:function(){return i.a.createElement("div",{className:"logout"},i.a.createElement("button",{type:"button",onClick:this.handleLogout},"Logout"))}}]),t}(i.a.Component),U=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(i)))).state={items:[],lists:[],sharedLists:[],user:{},currentList:[]},a.handleDeleteItem=function(e){var t=a.state.items.filter((function(t){return t.id!==e}));a.setState({items:t})},a.handleDeleteList=function(e){var t=a.state.items.filter((function(t){return t.listId!==e})),n=a.state.lists.filter((function(t){return t.id!==e})),i=a.state.sharedLists.filter((function(t){return t.id!==e}));a.setState({items:t}),a.setState({lists:n}),a.setState({sharedLists:i})},a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"renderMainRoutes",value:function(){return i.a.createElement(d.d,null,i.a.createElement(d.b,{path:"/login",component:T}),i.a.createElement(d.b,{path:"/"},i.a.createElement(d.b,{path:"/",component:A,className:"logout"}),i.a.createElement(d.b,{exact:!0,path:"/",component:P}),i.a.createElement(d.b,{path:"/signup",component:D}),i.a.createElement(d.b,{exact:!0,path:"/lists/:listId",component:y}),i.a.createElement(d.b,{path:"/add-list",component:_}),i.a.createElement(d.b,{path:"/add-item",component:S}),i.a.createElement(d.b,{path:"/share-list",component:O})))}},{key:"render",value:function(){var e=this,t={items:this.state.items,lists:this.state.lists,sharedLists:this.state.sharedLists,user:this.state.user,currentList:this.state.currentList,deleteItem:this.handleDeleteItem,deleteList:this.handleDeleteList,addItem:function(t){e.state.items.push(t),e.setState(e.state)},addList:function(t){e.state.lists.push(t),e.setState(e.state)},setUser:function(t){e.setState({user:t})},setLists:function(t){e.setState({lists:t})},setSharedLists:function(t){e.setState({sharedLists:t})},setItems:function(t){e.setState({items:t})},setCurrentList:function(t){e.setState({currentList:t})}};return i.a.createElement(p.Provider,{value:t},i.a.createElement("div",{className:"App"},i.a.createElement("header",{className:"App__header"},i.a.createElement("h1",null,"GroupCheck")),i.a.createElement(k,{errorMessage:"could not display MainRoutes"},i.a.createElement("main",{className:"App__main"},this.renderMainRoutes()))))}}]),t}(n.Component);a(34);r.a.render(i.a.createElement(o.a,null,i.a.createElement(U,null)),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.09230d31.chunk.js.map