(this["webpackJsonpgify-collections"]=this["webpackJsonpgify-collections"]||[]).push([[0],{25:function(e,t,a){e.exports=a(35)},30:function(e,t,a){},35:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),o=a(20),l=a.n(o),r=(a(30),a(10)),c=a(11),s=a(14),m=a(13),d=a(8),f=a(12),g=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).state={data:[{id:1,label:"Test1",gifLink:"https://media.tenor.com/images/0a00ff974d503ba60cc67c56ffdafa7f/tenor.gif"},{id:2,label:"Test2",gifLink:"https://media.tenor.com/images/db8149e4338a41fd24d1058053894f6a/tenor.gif"},{id:3,label:"Test3",gifLink:"https://media.tenor.com/images/c66b5d522ff2d03c28a8586df2fbac64/tenor.gif"},{id:4,label:"Test4",gifLink:"https://media.tenor.com/images/d450133c6a14f509424fe18dd491a90e/tenor.gif"}],loadImage:{}},n}return Object(c.a)(a,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(f.a,null,i.a.createElement("title",null,"Gif Collections")),this.props.children,this.state.data.map((function(e,t){return i.a.createElement("span",{key:t+1},i.a.createElement(d.b,{to:"/gitCollection/image/".concat(e.label)},i.a.createElement("img",{src:e.gifLink})))})))}}]),a}(n.Component),u=a(24),h=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).state={data:[{id:1,label:"Test1",gifLink:"https://media.tenor.com/images/0a00ff974d503ba60cc67c56ffdafa7f/tenor.gif"},{id:2,label:"Test2",gifLink:"https://media.tenor.com/images/db8149e4338a41fd24d1058053894f6a/tenor.gif"},{id:3,label:"Test3",gifLink:"https://media.tenor.com/images/c66b5d522ff2d03c28a8586df2fbac64/tenor.gif"},{id:4,label:"Test4",gifLink:"https://media.tenor.com/images/d450133c6a14f509424fe18dd491a90e/tenor.gif"}],loadImage:{},pageUrl:""},n}return Object(c.a)(a,[{key:"componentDidMount",value:function(){console.log(this.props);var e=this.props,t=(e.history,e.match),a=t.url,n=t.params.label,i=this.state.data.find((function(e){return e.label===n}));console.log(i),this.setState({loadImage:Object(u.a)({},i),pageUrl:a})}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(f.a,null,i.a.createElement("meta",{property:"og:title",content:this.state.loadImage.label}),i.a.createElement("meta",{property:"og:type",content:"Gif Image"}),i.a.createElement("meta",{property:"og:description",content:this.state.loadImage.label}),i.a.createElement("meta",{property:"og:image",content:this.state.loadImage.gifLink}),i.a.createElement("meta",{property:"og:url",content:"https://niteshsinghnrs.github.io/niteshsingh/index.html"}),i.a.createElement("title",null,this.state.loadImage.label)),this.state.loadImage?i.a.createElement("div",null,i.a.createElement("img",{src:this.state.loadImage.gifLink})):null)}}]),a}(n.Component),p=a(2);var b=function(){return i.a.createElement("div",{className:"App"},i.a.createElement(d.b,{to:"/gitCollection/"}," Home"),i.a.createElement(p.c,null,i.a.createElement(p.a,{path:"/gitCollection/image/:label",render:function(e){return i.a.createElement(h,e)}}),i.a.createElement(p.a,{component:g})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(d.a,null,i.a.createElement(b,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[25,1,2]]]);
//# sourceMappingURL=main.5e2c201a.chunk.js.map