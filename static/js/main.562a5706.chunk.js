(this.webpackJsonpmovies=this.webpackJsonpmovies||[]).push([[2],[,,,,,,,,,function(e,t,n){"use strict";t.a={IDLE:"idle",PENDING:"pending",RESOLVED:"resolved",REJECTED:"rejected"}},,function(e,t,n){"use strict";n.d(t,"d",(function(){return u})),n.d(t,"f",(function(){return j})),n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return b})),n.d(t,"c",(function(){return h})),n.d(t,"e",(function(){return d}));var c=n(21),a=n.n(c),i=n(28),r="https://api.themoviedb.org/3",s="04333487fae6801ae7461c72fe9ea316",o=function(){var e=Object(i.a)(a.a.mark((function e(){var t,n,c,i=arguments;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=i.length>0&&void 0!==i[0]?i[0]:"",n=i.length>1&&void 0!==i[1]?i[1]:{},e.next=4,fetch(t,n);case 4:if(!(c=e.sent).ok){e.next=11;break}return e.next=8,c.json();case 8:e.t0=e.sent,e.next=12;break;case 11:e.t0=Promise.reject(new Error("Not found"));case 12:return e.abrupt("return",e.t0);case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"movie",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"week";return o("".concat(r,"/trending/").concat(e,"/").concat(t,"?api_key=").concat(s))},j=function(e){return o("".concat(r,"/search/movie?api_key=").concat(s,"&language=en-US&page=1&include_adult=false&query=").concat(e))},l=function(e){return o("".concat(r,"/movie/").concat(e,"?api_key=").concat(s,"&language=en-US"))},b=function(e){return o("".concat(r,"/movie/").concat(e,"/credits?api_key=").concat(s,"&language=en-US"))},h=function(e){return o("".concat(r,"/movie/").concat(e,"/reviews?api_key=").concat(s,"&language=en-US&page=1"))},d=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:300;return"https://image.tmdb.org/t/p/w".concat(t).concat(e)}},,function(e,t,n){e.exports={link:"Navigation_link__3yhLB","active-link":"Navigation_active-link__SKIUY Navigation_link__3yhLB"}},function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var c=n(27),a=n.n(c),i=n(1),r=function(e){var t=e.text;return Object(i.jsx)("h1",{className:a.a.title,children:t})}},,,,,,,,,function(e,t,n){"use strict";t.a=function(e){return e.match(/[a-zA-Z0-9]+$/)[0]}},,function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var c=n(2),a=n(4),i=n(32),r=n.n(i),s=n(33),o=n.n(s),u=n(1),j=function(e,t){return n="".concat(e," ").concat(t),r()(n,{lower:!0});var n},l=function(e){var t=e.movies,n=Object(c.g)();return Object(u.jsx)("ul",{className:o.a.list,children:t.map((function(e){var t=e.id,c=e.title;return Object(u.jsx)("li",{children:Object(u.jsx)("p",{children:Object(u.jsx)(a.b,{to:{pathname:"/movies/".concat(j(c,t)),state:{from:n}},children:c})})},t)}))})}},,function(e,t,n){e.exports={title:"PageHeading_title__17HsI"}},,function(e,t,n){e.exports={button:"GoBackButton_button__1T4wK"}},function(e,t,n){e.exports={poster:"MovieCard_poster__3iBgV"}},function(e,t,n){e.exports={"submit-button":"SearchMoviesForm_submit-button__xt7Qz"}},,function(e,t,n){e.exports={list:"MovieList_list__2rI_4"}},,,,,function(e,t,n){},,,,,,,,,function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),i=n(15),r=n.n(i),s=n(4),o=(n(38),n(2)),u=n(16),j=n(13),l=n.n(j),b=n(1),h=function(){return Object(b.jsxs)("nav",{children:[Object(b.jsx)(s.c,{className:l.a.link,activeClassName:l.a["active-link"],to:"/",exact:!0,children:"Home"}),Object(b.jsx)(s.c,{className:l.a.link,activeClassName:l.a["active-link"],to:"/movies",children:"Movies"})]})},d=n(8),O=n(14),f=n(11),x=n(29),v=n.n(x),p=function(e){var t=e.onGoBack;return Object(b.jsx)("button",{className:v.a.button,type:"button",onClick:t,children:"Back"})},m=n(30),g=n.n(m),_=Object(c.lazy)((function(){return n.e(0).then(n.bind(null,49))})),k=Object(c.lazy)((function(){return n.e(4).then(n.bind(null,50))})),S=function(e){var t=e.movie,n=t.poster_path,a=t.original_title,i=t.overview,r=t.genres,u=Object(o.i)(),j=u.url,l=u.path;return Object(b.jsxs)("article",{children:[Object(b.jsxs)("section",{children:[Object(b.jsx)("img",{src:f.e(n),alt:a,className:g.a.poster}),Object(b.jsx)("p",{children:i})]}),Object(b.jsxs)("section",{children:[Object(b.jsx)("h2",{children:"Genres"}),Object(b.jsx)("ul",{children:r.map((function(e){return Object(b.jsx)("li",{children:e.name},e.id)}))})]}),Object(b.jsxs)("section",{children:[Object(b.jsx)("h2",{children:"Additional Information"}),Object(b.jsxs)(c.Suspense,{fallback:Object(b.jsx)("h1",{children:"Loading..."}),children:[Object(b.jsx)("h3",{children:Object(b.jsx)(s.c,{to:"".concat(j,"/cast"),children:"Cast"})}),Object(b.jsx)(o.a,{path:"".concat(l,"/cast"),children:Object(b.jsx)(_,{})})]}),Object(b.jsxs)(c.Suspense,{fallback:Object(b.jsx)("h1",{children:"Loading..."}),children:[Object(b.jsx)("h3",{children:Object(b.jsx)(s.c,{to:"".concat(j,"/reviews"),children:"Reviews"})}),Object(b.jsx)(o.a,{path:"".concat(l,"/reviews"),children:Object(b.jsx)(k,{})})]})]})]})},E=n(23),y=n(9),N=y.a.IDLE,w=y.a.PENDING,L=y.a.REJECTED,D=y.a.RESOLVED,I=function(){var e=Object(o.f)(),t=Object(o.g)(),n=Object(o.h)().slug,a=Object(c.useState)(null),i=Object(d.a)(a,2),r=i[0],s=i[1],u=Object(c.useState)(N),j=Object(d.a)(u,2),l=j[0],h=j[1],x=Object(c.useState)(null),v=Object(d.a)(x,2),m=v[0],g=v[1],_=Object(E.a)(n);Object(c.useEffect)((function(){h(w),f.b(_).then((function(e){s(e),h(D)})).catch((function(e){g(e),h(L)}))}),[_]);return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(O.a,{text:l===D?r.original_title:"Movie \u2116 ".concat(_)}),Object(b.jsx)(p,{onGoBack:function(){var n,c;e.push(null!==(n=null===t||void 0===t||null===(c=t.state)||void 0===c?void 0:c.from)&&void 0!==n?n:"/")}}),l===w&&Object(b.jsx)("p",{children:"Loading..."}),l===L&&Object(b.jsx)("p",{children:m.message}),l===D&&Object(b.jsx)(S,{movie:r})]})},C=n(22),B=(n(46),n(31)),R=n.n(B),G=function(e){var t=e.onSubmit,n=Object(c.useState)(""),a=Object(d.a)(n,2),i=a[0],r=a[1];return Object(b.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),""===i.trim())return u.b.error("Enter some valid search query please.");t(i),r("")},children:[Object(b.jsx)("input",{type:"text",value:i,onChange:function(e){var t=e.target.value;r(t.toLowerCase())},autoFocus:!0,placeholder:"Search movies"}),Object(b.jsx)("button",{type:"submit",className:R.a["submit-button"],children:"Search"})]})},M=n(25),z=y.a.IDLE,P=y.a.PENDING,U=y.a.REJECTED,J=y.a.RESOLVED,q=function(){var e,t=Object(c.useState)(null),n=Object(d.a)(t,2),a=n[0],i=n[1],r=Object(c.useState)(z),s=Object(d.a)(r,2),u=s[0],j=s[1],l=Object(c.useState)(null),h=Object(d.a)(l,2),x=h[0],v=h[1],p=Object(o.f)(),m=Object(o.g)(),g=null!==(e=new URLSearchParams(m.search).get("query"))&&void 0!==e?e:"";return Object(c.useEffect)((function(){g&&(j(P),f.f(g).then((function(e){var t=e.results;i(t),j(J)})).catch((function(e){v(e),j(U)})))}),[g]),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(O.a,{text:"Search for Movies"}),Object(b.jsx)(G,{onSubmit:function(e){p.push(Object(C.a)(Object(C.a)({},m),{},{search:"query=".concat(e)}))}}),u===P&&Object(b.jsx)("p",{children:"Loading..."}),u===U&&Object(b.jsx)("p",{children:x.message}),u===J&&Object(b.jsx)(M.a,{movies:a})]})},F=Object(c.lazy)((function(){return n.e(1).then(n.bind(null,51))})),T=Object(c.lazy)((function(){return n.e(3).then(n.bind(null,52))}));var V=function(){return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)(h,{}),Object(b.jsx)(c.Suspense,{fallback:Object(b.jsx)("h1",{children:"Loading..."}),children:Object(b.jsxs)(o.c,{children:[Object(b.jsx)(o.a,{path:"/",exact:!0,children:Object(b.jsx)(F,{})}),Object(b.jsx)(o.a,{path:"/movies",exact:!0,children:Object(b.jsx)(q,{})}),Object(b.jsx)(o.a,{path:"/movies/:slug",children:Object(b.jsx)(I,{})}),Object(b.jsx)(o.a,{children:Object(b.jsx)(T,{})})]})}),Object(b.jsx)(u.a,{})]})};r.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(s.a,{children:Object(b.jsx)(V,{})})}),document.getElementById("root"))}],[[47,5,6]]]);
//# sourceMappingURL=main.562a5706.chunk.js.map