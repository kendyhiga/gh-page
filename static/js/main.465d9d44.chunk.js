(this["webpackJsonpgh-page"]=this["webpackJsonpgh-page"]||[]).push([[0],{139:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),o=t(5),c=t.n(o),l=(t(69),t(18)),s=t(19),i=t(23),u=t(24),m=t(7),p=t(9),d=(t(39),t(40),t(20)),b=t.n(d),h=t(21),E=t.n(h),f=t(22),k=t.n(f),g=function(e){switch(e){case"AlphaBlog":return b.a;case"Calculadora":return E.a;case"Cookbook":return k.a;default:return}},v=function(e){return n.a.createElement("div",{className:"card card-custom"},n.a.createElement(m.b,{to:e.link},n.a.createElement("img",{className:"card-img card-img-top",alt:e.name+"Screenshot",src:g(e.name)}),n.a.createElement("div",{className:"card-middle"},n.a.createElement("h4",null,e.name))))},y=function(e){Object(u.a)(t,e);var a=Object(i.a)(t);function t(){var e;Object(l.a)(this,t),(e=a.call(this)).setFilter=function(a){if("all"===a)return e.setState((function(a){return{filtered_cards:e.state.cards}}));var t=e.state.cards.filter((function(e){return e.language===a}));e.setState((function(e){return{filtered_cards:t}}))};var r=[{language:"ruby",link:"/alpha-blog",name:"AlphaBlog"},{language:"react",link:"/calculator",name:"Calculadora"},{language:"ruby",link:"/cookbook",name:"Cookbook"}];return e.state={cards:r,filtered_cards:r},e}return Object(s.a)(t,[{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"jumbotron jumbotron-fluid jumbotron-custom"},n.a.createElement("h1",{className:"display-4"},"Meus reposit\xf3rios do ",n.a.createElement("a",{href:"https://github.com/kendyhiga/",target:"_blank",rel:"noopener noreferrer"},"GitHub")),n.a.createElement("p",{className:"lead"},"Este SPA foi criado em React com objetivo resumir alguns dos meus projetos.")),n.a.createElement("div",{className:"btn-group d-flex",role:"group"},n.a.createElement("button",{className:"btn btn-primary",onClick:function(){return e.setFilter("all")}},"Tudo"),n.a.createElement("button",{className:"btn btn-primary",onClick:function(){return e.setFilter("ruby")}},"Ruby"),n.a.createElement("button",{className:"btn btn-primary",onClick:function(){return e.setFilter("react")}},"React")),n.a.createElement("br",null),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"card-deck"},this.state.filtered_cards.map((function(e,a){return n.a.createElement(v,{key:a,link:e.link,name:e.name})})))))}}]),t}(r.Component),w=t(11),N=t(59),j=t.n(N),C=[{source:b.a},{source:j.a}];var R=function(){return n.a.createElement("div",null,n.a.createElement("div",{className:"App"},n.a.createElement("h1",null,"Alpha Blog"),n.a.createElement("p",null,n.a.createElement("a",{href:"https://github.com/kendyhiga/alpha-blog",target:"_blank",rel:"noopener noreferrer"},"[Link do Reposit\xf3rio]")),n.a.createElement("span",null,"Este projeto em Ruby on Rails consiste num blog, que foi criado a partir do curso da Udemy: ",n.a.createElement("a",{href:"https://www.udemy.com/course/the-complete-ruby-on-rails-developer-course/",target:"_blank",rel:"noopener noreferrer"},"The Complete Ruby on Rails Developer Course"),"."),n.a.createElement("h4",null,"Screenshots:"),n.a.createElement(w.a,{views:C}),n.a.createElement("h4",null,n.a.createElement(m.b,{to:"/"},"Voltar"))))},x=t(60),_=t.n(x),A=[{source:E.a},{source:_.a}];var O=function(){return n.a.createElement("div",null,n.a.createElement("div",{className:"App"},n.a.createElement("h1",null,"Calculadora"),n.a.createElement("p",null,n.a.createElement("a",{href:"https://github.com/kendyhiga/calculadora",target:"_blank",rel:"noopener noreferrer"},"[Link do Reposit\xf3rio]")),n.a.createElement("span",null,"Este projeto em React consiste numa calculadora, que foi criada a partir do curso da Udemy: ",n.a.createElement("a",{href:"https://www.udemy.com/course/react-redux-pt/",target:"_blank",rel:"noopener noreferrer"},"Curso React + Redux: Fundamentos e 2 Apps do Absoluto ZERO!"),"."),n.a.createElement("h4",null,"Screenshots:"),n.a.createElement(w.a,{views:A}),n.a.createElement("h4",null,n.a.createElement(m.b,{to:"/"},"Voltar"))))},S=t(61),B=t.n(S),F=t(62),q=t.n(F),L=t(63),T=t.n(L),V=[{source:k.a},{source:B.a},{source:q.a},{source:T.a}];var D=function(){return n.a.createElement("div",null,n.a.createElement("div",{className:"App"},n.a.createElement("h1",null,"Cookbook"),n.a.createElement("p",null,n.a.createElement("a",{href:"https://github.com/kendyhiga/cookbook-treinadev",target:"_blank",rel:"noopener noreferrer"},"[Link do Reposit\xf3rio]")),n.a.createElement("p",null,"Este projeto em Ruby on Rails consiste numa plataforma de receitas, que foi criada no curso ",n.a.createElement("a",{href:"https://www.treinadev.com.br/",target:"_blank",rel:"noopener noreferrer"},"TreinaDev "),"da ",n.a.createElement("a",{href:"https://www.campuscode.com.br/",target:"_blank",rel:"noopener noreferrer"},"Campus Code"),"."),n.a.createElement("p",null,"O site atualmente esta hospedado no Heroku e pode ser acessado atrav\xe9s do link:",n.a.createElement("a",{href:"http://cookbook-practice.herokuapp.com/",target:"_blank",rel:"noopener noreferrer"}," http://cookbook-practice.herokuapp.com/")),n.a.createElement("h4",null,"Screenshots:"),n.a.createElement(w.a,{views:V}),n.a.createElement("h4",null,n.a.createElement(m.b,{to:"/"},"Voltar"))))},H=function(e){Object(u.a)(t,e);var a=Object(i.a)(t);function t(){return Object(l.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"App"},n.a.createElement(m.a,{basename:"/"},n.a.createElement(p.a,{exact:!0,path:"/",component:y}),n.a.createElement(p.a,{path:"/alpha-blog",component:R}),n.a.createElement(p.a,{path:"/calculator",component:O}),n.a.createElement(p.a,{path:"/cookbook",component:D})))}}]),t}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(H,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},20:function(e,a,t){e.exports=t.p+"static/media/alpha-blog1.28b41a42.png"},21:function(e,a,t){e.exports=t.p+"static/media/calculator1.6944a4b1.png"},22:function(e,a,t){e.exports=t.p+"static/media/cookbook1.906c507b.png"},40:function(e,a,t){},59:function(e,a,t){e.exports=t.p+"static/media/alpha-blog2.8be5b8ef.png"},60:function(e,a,t){e.exports=t.p+"static/media/calculator2.eb346494.png"},61:function(e,a,t){e.exports=t.p+"static/media/cookbook2.764c9002.png"},62:function(e,a,t){e.exports=t.p+"static/media/cookbook3.e3a28157.png"},63:function(e,a,t){e.exports=t.p+"static/media/cookbook4.938eb46a.png"},64:function(e,a,t){e.exports=t(139)},69:function(e,a,t){}},[[64,1,2]]]);
//# sourceMappingURL=main.465d9d44.chunk.js.map