(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,function(e,t,a){e.exports=a(26)},,,,,,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),o=a(7),r=a.n(o),i=(a(14),a(1)),s=a(2),l=a(4),m=a(3),u=a(5),p=(a(16),function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.selectImage;return c.a.createElement("div",{className:"imagePicker"},c.a.createElement("h2",null,"Select a picture:"),c.a.createElement("div",{className:"imageChoices"},c.a.createElement("img",{src:"/Images/Bird.jpg",alt:"bird",className:"selectedPic",onClick:e}),c.a.createElement("img",{src:"Images/Cat.jpg",alt:"cat",className:"selectedPic",onClick:e}),c.a.createElement("img",{src:"/Images/Dog.jpg",alt:"dog",className:"selectedPic",onClick:e}),c.a.createElement("img",{src:"/Images/Girl.jpg",alt:"girl",className:"selectedPic",onClick:e})))}}]),t}(n.Component)),h=(a(18),function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.image,a=e.topText,n=e.bottomText;return c.a.createElement("div",{className:"memePreview"},c.a.createElement("img",{src:t,alt:""}),c.a.createElement("div",{className:"textTop"},a),c.a.createElement("div",{className:"textBottom"},n))}}]),t}(n.Component)),g=(a(20),function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.setTopText,a=e.setBottomText,n=e.topText,o=e.bottomText;return c.a.createElement("div",{className:"textInput"},c.a.createElement("h2",null,"Add Text:"),c.a.createElement("div",{className:"inputRow"},c.a.createElement("input",{type:"text",value:n,onChange:t,placeholder:"Enter Top Text Here"}),c.a.createElement("input",{type:"text",value:o,onChange:a,placeholder:"Enter Bottom Text Here"})))}}]),t}(n.Component)),b=(a(22),function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(l.a)(this,Object(m.a)(t).call(this))).selectImage=function(t){e.setState({image:t.target.src})},e.setTopText=function(t){var a=t.target.value;e.setState({topText:a})},e.setBottomText=function(t){var a=t.target.value;e.setState({bottomText:a})},e.state={image:"/Images/Bird.jpg",topText:"",bottomText:""},e}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"container"},c.a.createElement("h1",null,"Meme-Generator"),c.a.createElement(p,{className:"imagePicker",selectImage:this.selectImage}),c.a.createElement(h,{className:"memePreview",image:this.state.image,topText:this.state.topText,bottomText:this.state.bottomText}),c.a.createElement(g,{className:"textInput",setTopText:this.setTopText,setBottomText:this.setBottomText,topText:this.state.topText,bottomText:this.state.bottomText}))}}]),t}(n.Component)),d=(a(24),function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"App"},c.a.createElement(b,null))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(d,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[8,2,1]]]);
//# sourceMappingURL=main.4ded1c65.chunk.js.map