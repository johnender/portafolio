(this.webpackJsonpproyecto=this.webpackJsonpproyecto||[]).push([[0],{27:function(e,t,n){},28:function(e,t,n){},30:function(e,t,n){},31:function(e,t,n){},40:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),s=n(20),i=n.n(s),r=(n(27),n.p+"static/media/logo.6ce24c58.svg"),o=(n(28),n(2)),j=n(15),l=n(9),h=n(12),u=n(10),b=n(11),d=n(0),O=function(e){Object(u.a)(n,e);var t=Object(b.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={error:null,loading:!1,elements:[]},a}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://rickandmortyapi.com/api/character/").then((function(e){return e.json()})).then((function(t){var n=[];n.push(t.results),e.setState({error:null,loading:!0,elements:n})}),(function(t){e.setState({error:t,loading:!0,elements:[]})}))}},{key:"render",value:function(){var e=this.state,t=e.error,n=e.loading,a=e.elements;return t?Object(d.jsxs)("div",{children:["The following error was found: ",t.message]}):n?(console.log(a[0]),Object(d.jsx)("ul",{children:a[0].map((function(e){return Object(d.jsxs)("li",{children:[e.id," ",e.name," ",e.status," ",e.species]},e.id)}))})):Object(d.jsx)("div",{children:"Loading data..."})}}]),n}(c.a.Component);var x=function(){return Object(d.jsxs)("div",{className:"Homepage",children:[Object(d.jsx)("p",{children:"Homepage section."}),Object(d.jsx)(O,{})]})};var g=function(){return Object(d.jsx)("div",{className:"Studies",children:Object(d.jsx)("p",{children:"Studies section."})})};var m=function(){return Object(d.jsx)("div",{className:"Projects",children:Object(d.jsx)("p",{children:"Projects section."})})},p=n(22),v=n(13),f=(n(30),function(e){Object(u.a)(n,e);var t=Object(b.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={name:"",message:""},a.executeNameChange=a.executeNameChange.bind(Object(v.a)(a)),a.executeMessageChange=a.executeMessageChange.bind(Object(v.a)(a)),a.executeSubmit=a.executeSubmit.bind(Object(v.a)(a)),a}return Object(h.a)(n,[{key:"executeNameChange",value:function(e){var t=e.target.value[e.target.value.length-1];"!"!==t&&"-"!==t&&"/"!==t&&"\\"!==t&&"("!==t&&")"!==t&&"'"!==t&&"`"!==t&&this.setState({name:e.target.value})}},{key:"executeMessageChange",value:function(e){var t=e.target.value[e.target.value.length-1];"!"!==t&&"-"!==t&&"/"!==t&&"\\"!==t&&"("!==t&&")"!==t&&"'"!==t&&"`"!==t&&this.setState({message:e.target.value})}},{key:"executeSubmit",value:function(e){""!==this.state.name&&""!==this.state.message&&alert("Hi "+this.state.name+' your message "'+this.state.message+'" was sent (not really)'),e.preventDefault()}},{key:"render",value:function(){return Object(d.jsxs)("form",{onSubmit:this.executeSubmit,children:[Object(d.jsxs)("label",{children:["Nombre",Object(d.jsx)("input",{type:"text",value:this.state.name,onChange:this.executeNameChange,placeholder:"John Doe"})]}),Object(d.jsx)("br",{}),Object(d.jsxs)("label",{children:["Message",Object(d.jsx)("textarea",{value:this.state.message,onChange:this.executeMessageChange,placeholder:"Hello world!"})]}),Object(d.jsx)("br",{}),Object(d.jsx)("button",{type:"submit",children:"Sent message"})]})}}]),n}(c.a.Component));function C(){var e=Object(a.useState)(!0),t=Object(p.a)(e,2),n=t[0],c=t[1];return Object(d.jsxs)("div",{className:"Contact",children:[Object(d.jsx)("p",{onClick:function(){c(!n)},children:"Contact section."}),n?Object(d.jsx)(f,{}):Object(d.jsx)("p",{children:"Nothign to see here"})]})}n(31);var y=function(e){return Object(d.jsx)("div",{className:"Navbar",children:Object(d.jsx)("ul",{children:e.pages.map((function(e){return Object(d.jsx)("li",{children:Object(d.jsx)(j.b,{to:e.toLowerCase(),children:e})},e)}))})})},S=function(e){Object(u.a)(n,e);var t=Object(b.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={date:new Date,showPhrase:!0},a}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.timerID=setInterval((function(){return e.iteraci\u00f3n()}),1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerID)}},{key:"iteraci\xf3n",value:function(){this.setState({date:new Date})}},{key:"toggle",value:function(){this.setState({showPhrase:!this.state.showPhrase})}},{key:"render",value:function(){var e=this.state.showPhrase;return Object(d.jsx)("div",{children:e?Object(d.jsxs)("p",{onClick:this.toggle.bind(this),children:["Local time: ",this.state.date.toLocaleTimeString()]}):Object(d.jsxs)("p",{onClick:this.toggle.bind(this),children:[" ",this.state.date.toLocaleTimeString()]})})}}]),n}(c.a.Component),k=["Homepage","Studies","Projects","Contact"];function N(e){var t=Object(o.f)();return Object(d.jsxs)("div",{children:[Object(d.jsx)("h2",{children:"Page not foung"}),Object(d.jsxs)("p",{children:["The page: ",t.pathname," was not found"]})]})}var w=function(){return Object(d.jsx)("div",{className:"App",children:Object(d.jsxs)(j.a,{children:[Object(d.jsxs)("header",{className:"App-header",children:[Object(d.jsx)("img",{src:r,className:"App-logo",alt:"logo"}),Object(d.jsx)(y,{pages:k})]}),Object(d.jsxs)(o.c,{children:[Object(d.jsx)(o.a,{path:"/homepage",children:Object(d.jsx)(x,{})}),Object(d.jsx)(o.a,{path:"/studies",children:Object(d.jsx)(g,{})}),Object(d.jsx)(o.a,{path:"/projects",children:Object(d.jsx)(m,{})}),Object(d.jsx)(o.a,{path:"/contact",children:Object(d.jsx)(C,{})}),Object(d.jsx)(o.a,{exact:!0,path:"/",children:Object(d.jsx)(x,{})}),Object(d.jsx)(o.a,{path:"*",children:Object(d.jsx)(N,{})})]}),Object(d.jsxs)("footer",{className:"App-footer",children:[Object(d.jsx)("p",{children:"Copyright?"}),Object(d.jsx)(S,{})]})]})})},P=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,41)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),s(e),i(e)}))};i.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(w,{})}),document.getElementById("root")),P()}},[[40,1,2]]]);
//# sourceMappingURL=main.a08b9310.chunk.js.map