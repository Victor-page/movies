(this.webpackJsonpmovies=this.webpackJsonpmovies||[]).push([[0],{49:function(e,t,c){"use strict";c.r(t),c.d(t,"default",(function(){return o}));var n=c(8),a=c(0),s=c(2),j=c(11),r=c(1),i=function(e){var t=e.cast;return Object(r.jsx)("ul",{children:t.map((function(e){var t=e.id,c=e.name,n=e.character,a=e.profile_path;return Object(r.jsxs)("li",{children:[Object(r.jsx)("p",{children:Object(r.jsx)("span",{children:c})}),a&&Object(r.jsx)("img",{src:j.e(a,200),alt:c}),Object(r.jsxs)("p",{children:["Character: ",Object(r.jsx)("span",{children:n})]})]},t)}))})},u=c(23),b=c(9),O=b.a.PENDING,l=b.a.REJECTED,h=b.a.RESOLVED,o=function(){var e=Object(s.h)().slug,t=Object(a.useState)(null),c=Object(n.a)(t,2),b=c[0],o=c[1],p=Object(a.useState)(O),d=Object(n.a)(p,2),f=d[0],x=d[1],v=Object(a.useState)(null),E=Object(n.a)(v,2),m=E[0],g=E[1],S=Object(u.a)(e);return Object(a.useEffect)((function(){x(O),j.a(S).then((function(e){var t=e.cast;o(t),x(h)})).catch((function(e){g(e),x(l)}))}),[S]),f===O?Object(r.jsx)("p",{children:"Loading..."}):f===l?Object(r.jsx)("p",{children:m.message}):f===h?Object(r.jsx)(i,{cast:b}):void 0}}}]);
//# sourceMappingURL=cast-sub-view.610fd702.chunk.js.map