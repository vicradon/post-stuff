(this.webpackJsonp12thoctober2019=this.webpackJsonp12thoctober2019||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),c=a(2),r=a.n(c),i=(a(14),function(){return s.a.createElement("div",{className:"header"},s.a.createElement("h3",null,"The Ultimate React App"))}),o=a(6),d=a(3),l=a(4),u=a(7),h=a(5),m=a(8);var p=function(e){var t=e.heading,a=e.content,n=e.handleChange,c=e.submitPost;return s.a.createElement("div",{className:"input-boxes"},s.a.createElement("h3",{className:"component-header"},"Hello, you'd have to type stuff"),s.a.createElement("input",{name:"heading",id:"typed-heading",placeholder:"type your heading here",type:"text",value:t,onChange:n}),s.a.createElement("textarea",{name:"content",id:"typed-content",className:"textarea",placeholder:"type your content here",value:a,onChange:n}),s.a.createElement("button",{id:"submit-button",className:"submit-post",type:"submit",onClick:function(){return c()}},"Add Post"))},f=function(e){var t=e.heading,a=e.content,n=e.date,c=e.id,r=e.handleEdit,i=e.handleDelete;return s.a.createElement("div",{"data-id":c,className:"post-card"},s.a.createElement("h3",{className:"article-heading"},t),s.a.createElement("p",{className:"date-written"},"date: ",n),s.a.createElement("p",{className:"write-up"},a),s.a.createElement("p",{className:"actions"},s.a.createElement("button",{onClick:r,className:"edit"},"edit"),s.a.createElement("button",{onClick:i,className:"delete"},"delete")))},g=function(e){var t=e.PostsData,a=e.handleEdit,n=e.handleDelete,c=t.map((function(e){return s.a.createElement(f,{key:e.id,id:e.id,heading:e.heading,content:e.content,date:e.date,handleEdit:a,handleDelete:n})}));return s.a.createElement("div",null,s.a.createElement("h3",{className:"component-header"},"Hello, I'm the display section"),c)},E=function(e){function t(){var e,a;Object(d.a)(this,t);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(s)))).state={heading:"",content:"",currentID:2,posts:[{heading:"My first reasonable React app",content:"Ok, so this react app is the first reasonable one I've ever built. I used both class and functional components.",date:"Sun Oct 13 2019",id:1},{heading:"Stuff",content:"More stuff",date:"Sun Oct 13 2019",id:2}]},a.handleChange=function(e){var t=e.target,n=t.name,s=t.value;"heading"===n?a.setState({heading:s}):a.setState({content:s})},a.submitPost=function(){if(a.state.heading&&a.state.content){var e={heading:a.state.heading,content:a.state.content,date:"".concat((new Date).toDateString()),id:a.state.currentID+1};a.addPost(e),a.setState({heading:"",content:""})}},a.addPost=function(e){a.setState({posts:[].concat(Object(o.a)(a.state.posts),[e]),currentID:+a.state.currentID+1})},a.handleEdit=function(e){var t=+e.target.parentNode.parentNode.dataset.id,n=a.state.posts.filter((function(e){return e.id===t})),s=n[0],c=s.heading,r=s.content;a.setState({heading:c,content:r});var i=a.state.posts.filter((function(e){return e.id!==n[0].id}));a.setState({posts:i})},a.handleDelete=function(e){var t=+e.target.parentNode.parentNode.dataset.id,n=a.state.posts.filter((function(e){return e.id===t})),s=a.state.posts.filter((function(e){return e.id!==n[0].id}));a.setState({posts:s})},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"main"},s.a.createElement(p,{heading:this.state.heading,content:this.state.content,handleChange:this.handleChange,submitPost:this.submitPost}),s.a.createElement(g,{handleEdit:this.handleEdit,handleDelete:this.handleDelete,PostsData:this.state.posts}))}}]),t}(s.a.Component);function b(){return s.a.createElement("footer",{className:"footer"},"copyrights ",s.a.createElement("a",{href:"github.com/vicradon"},"Vicradon")," \xa9 2019")}var v=function(){return s.a.createElement("div",{className:"app"},s.a.createElement(i,null),s.a.createElement(E,null),s.a.createElement(b,null))};r.a.render(s.a.createElement(v,null),document.getElementById("root"))},9:function(e,t,a){e.exports=a(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.8091f7fe.chunk.js.map