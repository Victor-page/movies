(this.webpackJsonpmovies=this.webpackJsonpmovies||[]).push([[0],{11:function(e,t,c){e.exports={link:"Navigation_link____PPh","active-link":"Navigation_active-link__1Gp0D"}},21:function(e,t,c){e.exports={title:"PageHeading_title__2HDIr"}},22:function(e,t,c){e.exports={list:"HomeView_list__3nHTq"}},27:function(e,t,c){},35:function(e,t,c){"use strict";c.r(t);var n=c(1),i=c.n(n),a=c(18),r=c.n(a),s=c(4),j=(c(27),c(2)),o=c(11),l=c.n(o),u=c(0),b=function(){return Object(u.jsxs)("nav",{children:[Object(u.jsx)(s.c,{className:l.a.link,activeClassName:l.a["active-link"],to:"/",exact:!0,children:"Main"}),Object(u.jsx)(s.c,{className:l.a.link,activeClassName:l.a["active-link"],to:"/movies",children:"Movies"})]})},h=c(8),d=c(16),O=c.n(d),x=c(20),v="https://api.themoviedb.org/3",p="04333487fae6801ae7461c72fe9ea316",f=function(){var e=Object(x.a)(O.a.mark((function e(){var t,c,n,i=arguments;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=i.length>0&&void 0!==i[0]?i[0]:"",c=i.length>1&&void 0!==i[1]?i[1]:{},e.next=4,fetch(t,c);case 4:if(!(n=e.sent).ok){e.next=11;break}return e.next=8,n.json();case 8:e.t0=e.sent,e.next=12;break;case 11:e.t0=Promise.reject(new Error("Not found"));case 12:return e.abrupt("return",e.t0);case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),m=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:500;return"https://image.tmdb.org/t/p/w".concat(t).concat(e)},g=c(21),_=c.n(g),k=function(e){var t=e.text;return Object(u.jsx)("h1",{className:_.a.title,children:t})},w=c(22),N=c.n(w),S=function(){var e=Object(n.useState)(null),t=Object(h.a)(e,2),c=t[0],i=t[1];Object(n.useEffect)((function(){(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"movie",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"week";return f("".concat(v,"/trending/").concat(e,"/").concat(t,"?api_key=").concat(p))})().then(i)}),[]);var a=(null===c||void 0===c?void 0:c.results)&&c.results;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(k,{text:"Trending This Week"}),a&&Object(u.jsx)("ul",{className:N.a.list,children:a.map((function(e){var t=e.id,c=e.title;return Object(u.jsx)("li",{children:Object(u.jsx)("p",{children:Object(u.jsx)(s.b,{to:"/movies/".concat(t),children:c})})},t)}))})]})},I=function(){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(k,{text:"Search for Movies"}),Object(u.jsx)("form",{children:Object(u.jsx)("input",{type:"text"})})]})},y=function(){var e=Object(j.f)().movieId,t=Object(n.useState)(null),c=Object(h.a)(t,2),i=c[0],a=c[1];return Object(n.useEffect)((function(){e&&function(e){return f("".concat(v,"/movie/").concat(e,"/credits?api_key=").concat(p,"&language=en-US"))}(e).then(a)}),[e]),Object(u.jsx)("ul",{children:(null===i||void 0===i?void 0:i.cast)&&i.cast.map((function(e){var t=e.id,c=e.name,n=e.character;return Object(u.jsxs)("li",{children:[Object(u.jsxs)("p",{children:["Name: ",Object(u.jsx)("span",{children:c})]}),Object(u.jsxs)("p",{children:["Character: ",Object(u.jsx)("span",{children:n})]})]},t)}))})},E=function(){var e=Object(j.f)().movieId,t=Object(n.useState)(null),c=Object(h.a)(t,2),i=c[0],a=c[1];Object(n.useEffect)((function(){e&&function(e){return f("".concat(v,"/movie/").concat(e,"/reviews?api_key=").concat(p,"&language=en-US&page=1"))}(e).then(a)}),[e]);return(null===i||void 0===i?void 0:i.results)?Object(u.jsx)("ul",{children:i.results.map((function(e){var t,c=e.id,n=e.author,i=e.content,a=e.author_details.avatar_path;return Object(u.jsxs)("li",{children:[Object(u.jsx)("p",{children:Object(u.jsx)("span",{children:n})}),a&&Object(u.jsx)("img",{src:(t=a,t.includes("gravatar")?"/"===t.charAt(0)?t.substring(1):t:m(t,200)),alt:n}),Object(u.jsxs)("p",{children:['"',Object(u.jsx)("span",{children:i}),'"']})]},c)}))}):Object(u.jsx)("p",{children:"No"})},M=function(){var e=Object(j.g)(),t=e.url,c=e.path,i=Object(j.f)().movieId,a=Object(n.useState)(null),r=Object(h.a)(a,2),o=r[0],l=r[1];return Object(n.useEffect)((function(){(function(e){return f("".concat(v,"/movie/").concat(e,"?api_key=").concat(p,"&language=en-US"))})(i).then(l)}),[i]),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(k,{text:(null===o||void 0===o?void 0:o.original_title)||"Movie ".concat(i)}),o&&Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("img",{src:m(o.poster_path),alt:o.original_title}),Object(u.jsx)("p",{children:o.overview}),Object(u.jsx)("h2",{children:Object(u.jsx)(s.c,{to:"".concat(t,"/").concat(i,"/cast"),children:"Cast"})}),Object(u.jsx)(j.a,{path:"".concat(c,"/:movieId/cast"),children:Object(u.jsx)(y,{})}),Object(u.jsx)("h2",{children:Object(u.jsx)(s.c,{to:"".concat(t,"/").concat(i,"/reviews"),children:"Reviews"})}),Object(u.jsx)(j.a,{path:"".concat(c,"/:movieId/reviews"),children:Object(u.jsx)(E,{})})]})]})},C=function(){return Object(u.jsx)("h1",{children:"404 The page is not found :("})};var F=function(){return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)(b,{}),Object(u.jsxs)(j.c,{children:[Object(u.jsx)(j.a,{path:"/",exact:!0,children:Object(u.jsx)(S,{})}),Object(u.jsx)(j.a,{path:"/movies",exact:!0,children:Object(u.jsx)(I,{})}),Object(u.jsx)(j.a,{path:"/movies/:movieId",children:Object(u.jsx)(M,{})}),Object(u.jsx)(j.a,{children:Object(u.jsx)(C,{})})]})]})};r.a.render(Object(u.jsx)(i.a.StrictMode,{children:Object(u.jsx)(s.a,{children:Object(u.jsx)(F,{})})}),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.e242e282.chunk.js.map