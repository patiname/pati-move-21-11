(this["webpackJsonppati-move-21-11"]=this["webpackJsonppati-move-21-11"]||[]).push([[0],{108:function(n,e,t){},109:function(n,e,t){"use strict";t.r(e);var c,i,a,r,o,s,d,j,b,p,x,l,h,O,u,g,m,f,v,w,k,y,z,S,_,C,I,R,E,T,D,P=t(0),F=t.n(P),q=t(46),B=t.n(q),N=t(27),V=t(16),J=t(11),K=t(8),L=t.n(K),U=t(12),A=t(9),M=t(6),Y=t(1),G=function(n){var e=n.title;return Object(Y.jsx)(N.a,{children:Object(Y.jsxs)("title",{children:[e," | PN movie(\uc608\uc81c)"]})})},H=t(48),Q=t.n(H).a.create({baseURL:"https://api.themoviedb.org/3/",params:{api_key:"127c866ecb9630df124cbd4e2522af1c",language:"ko-KR"}}),W=function(){return Q.get("movie/now_playing")},X=function(){return Q.get("movie/upcoming")},Z=function(){return Q.get("movie/top_rated")},$=function(n){return Q.get("movie/".concat(n))},nn=function(n){return Q.get("movie/".concat(n,"/videos"))},en=function(n){return Q.get("search/movie",{params:{query:encodeURIComponent(n)}})},tn=t(3),cn=tn.c.div(c||(c=Object(M.a)(["\n  width: 100%;\n  height: 100vh;\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n\n  h3 {\n    margin-top: 200px;\n    font-size: 50px;\n    font-weight: 600;\n    color: crimson;\n  }\n  h4 {\n    margin: 30px 0 30px 0;\n    font-size: 20px;\n  }\n  a {\n    color: skyblue;\n    text-decoration: underline;\n    &:hover {\n      color: crimson;\n    }\n  }\n"]))),an=function(){return Object(Y.jsxs)(cn,{children:[Object(Y.jsx)("h3",{children:"4\ud83e\udd144 ERR\ud83e\udd14R"}),Object(Y.jsx)("h4",{children:"\ud398\uc774\uc9c0\ub97c \ucc3e\uc744\uc218 \uc5c6\uc2b5\ub2c8\ub2e4..!"}),Object(Y.jsx)("p",{children:Object(Y.jsx)(V.b,{to:"/",children:"\ud648\uc73c\ub85c \uac00\uae30"})})]})},rn=t(52),on="white",sn="#1d1d1d",dn=600,jn="0 20px",bn="16px",pn="14px",xn=Object(tn.a)(i||(i=Object(M.a)(["\n    ","\n\n    *{\n        box-sizing: border-box;\n    }\n\n    a{\n        color:",";\n        text-decoration: none;\n    }\n\n    body{\n        font-family: 'Noto Sans KR', sans-serif;\n        background-color:",";\n        color:",";\n        letter-spacing: -1px;\n        word-break: keep-all;\n    }\n"])),rn.a,on,sn,on),ln=tn.c.section(a||(a=Object(M.a)(["\n  padding: 0 80px;\n  height: 100%;\n  @media screen and (max-width: 500px) {\n    padding: ",";\n  }\n"])),jn),hn=function(n){var e=n.children;return Object(Y.jsx)(ln,{children:e})},On=t(53),un=t.n(On),gn=tn.c.div(r||(r=Object(M.a)(["\n  width: 100%;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),mn=function(){return Object(Y.jsx)(gn,{children:Object(Y.jsx)(un.a,{type:"ThreeDots",color:"gold",height:100,width:100})})},fn=tn.c.div(o||(o=Object(M.a)(["\n  display: flex;\n  width: 100%;\n  margin-top: 80px;\n  @media screen and (max-width: 500px) {\n    flex-direction: column;\n    margin-top: 60px;\n  }\n"]))),vn=tn.c.div(s||(s=Object(M.a)(["\n  width: 50%;\n  height: 80vh;\n  background-size: cover;\n  background-position: top;\n  @media screen and (max-width: 500px) {\n    width: 100%;\n    height: 70vh;\n  }\n"]))),wn=tn.c.div(d||(d=Object(M.a)(["\n  width: 50%;\n  margin-left: 50px;\n  @media screen and (max-width: 500px) {\n    width: 100%;\n    margin-left: 0;\n  }\n"]))),kn=tn.c.div(j||(j=Object(M.a)(["\n  font-size: 60px;\n  font-weight: 600;\n  margin-bottom: 30px;\n  margin-top: 30px;\n  @media screen and (max-width: 500px) {\n    font-size: 36px;\n  }\n"]))),yn=tn.c.li(b||(b=Object(M.a)(["\n  margin-bottom: 15px;\n  font-size: 18px;\n  font-weight: 600;\n  @media screen and (max-width: 500px) {\n    font-size: ",";\n  }\n"])),bn),zn=tn.c.div(p||(p=Object(M.a)(["\n  line-height: 2.2rem;\n  font-size: 20px;\n  opacity: 0.7;\n  margin-top: 50px;\n  font-weight: 300;\n  @media screen and (max-width: 500px) {\n    font-size: ",";\n  }\n"])),bn),Sn=tn.c.button(x||(x=Object(M.a)(["\n  all: unset;\n  padding: 20px 50px;\n  border: 1px solid #fff;\n  font-weight: ",";\n  margin-top: 30px;\n  cursor: pointer;\n  transition: 0.2s;\n  span {\n    transition: 0.2s;\n  }\n  &:hover {\n    background-color: ",";\n    color: ",";\n    span {\n      margin-left: 20px;\n    }\n  }\n  @media screen and (max-width: 500px) {\n    padding: 15px 40px;\n  }\n"])),dn,on,sn),_n=tn.c.div(l||(l=Object(M.a)(["\n  height: 100vh;\n  padding: 200px 0;\n  @media screen and (max-width: 500px) {\n    padding: 80px 0;\n  }\n"]))),Cn=tn.c.iframe(h||(h=Object(M.a)(["\n  width: 100%;\n  height: 80vh;\n"]))),In=function(){var n=Object(J.g)().id,e=Object(P.useState)(),t=Object(A.a)(e,2),c=t[0],i=t[1],a=Object(P.useState)(),r=Object(A.a)(a,2),o=r[0],s=r[1],d=Object(P.useState)(!0),j=Object(A.a)(d,2),b=j[0],p=j[1],x=Object(P.useState)(!1),l=Object(A.a)(x,2),h=l[0],O=l[1];Object(P.useEffect)((function(){var e=function(){var e=Object(U.a)(L.a.mark((function e(){var t,c,a,r;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,$(n);case 3:return t=e.sent,c=t.data,i(c),e.next=8,nn(n);case 8:a=e.sent,r=a.data.results,s(r[0]),p(!1),e.next=18;break;case 14:e.prev=14,e.t0=e.catch(0),console.log(e.t0),O(!0);case 18:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(){return e.apply(this,arguments)}}();e()}),[n]);return Object(Y.jsx)("div",{children:h?Object(Y.jsx)(an,{}):Object(Y.jsx)(Y.Fragment,{children:b?Object(Y.jsx)(mn,{}):Object(Y.jsxs)("div",{children:[c&&Object(Y.jsxs)(Y.Fragment,{children:[Object(Y.jsx)(G,{title:"\uc601\ud654\ub9ac\ubdf0"}),Object(Y.jsx)(hn,{children:Object(Y.jsxs)(fn,{children:[Object(Y.jsx)(vn,{style:{backgroundImage:"url(https://image.tmdb.org/t/p/original/".concat(c.poster_path,")")}}),Object(Y.jsxs)(wn,{children:[Object(Y.jsx)(kn,{children:c.title}),Object(Y.jsx)(yn,{children:c.release_date}),Object(Y.jsx)(yn,{children:c.genres.map((function(n){return n.name+", "}))}),Object(Y.jsxs)(yn,{children:[c.runtime," \ubd84"]}),Object(Y.jsx)(zn,{children:c.overview}),Object(Y.jsxs)(Sn,{onClick:function(){var n=document.querySelector(".video_wrap").offsetTop;window.scrollTo({top:n,left:0,behavior:"smooth"})},children:["\uc608\uace0\ud3b8 \ubcf4\uae30 ",Object(Y.jsx)("span",{children:"\u2192"})]})]})]})})]}),o&&Object(Y.jsx)(hn,{children:Object(Y.jsx)(_n,{className:"video_wrap",children:Object(Y.jsx)(Cn,{src:"https://www.youtube.com/embed/".concat(o.key)})})})]})})})},Rn=tn.c.footer(O||(O=Object(M.a)(["\n  width: 100%;\n  height: 100px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-top: 1px solid #555;\n  font-size: 14px;\n  color: gray;\n  margin-top: 200px;\n"]))),En=function(){return Object(Y.jsx)(Rn,{children:"\xa9 copyright PnCoding"})},Tn="/",Dn="/detail/:id",Pn="/search",Fn=tn.c.header(u||(u=Object(M.a)(["\n  width: 100%;\n  height: 60px;\n  position: ",";\n  top: 0;\n  left: 0;\n  padding: 0 80px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background-color: ",";\n  transition: 0.5s;\n  z-index: 99;\n  @media screen and (max-width: 500px) {\n    padding: ",";\n  }\n"])),(function(n){return n.fixed}),(function(n){return n.bgColor}),jn),qn=tn.c.h3(g||(g=Object(M.a)(["\n  font-size: 25px;\n  font-weight: 600;\n  a {\n    color: gold;\n  }\n"]))),Bn=tn.c.ul(m||(m=Object(M.a)(["\n  display: flex;\n"]))),Nn=tn.c.li(f||(f=Object(M.a)(["\n  &:nth-child(1) {\n    margin-right: 50px;\n  }\n  font-weight: ",";\n  @media screen and (max-width: 500px) {\n    &:nth-child(1) {\n      margin-right: 30px;\n    }\n  }\n"])),dn),Vn=function(){var n=Object(P.useState)("transparent"),e=Object(A.a)(n,2),t=e[0],c=e[1],i=Object(P.useState)(),a=Object(A.a)(i,2),r=a[0],o=a[1];return window.addEventListener("scroll",(function(){window.pageYOffset>=400?(c("rgba(0,0,0,0.7)"),o("fixed")):(c("transparent"),o("absolute"))})),Object(Y.jsxs)(Fn,{bgColor:t,fixed:r,children:[Object(Y.jsx)(qn,{children:Object(Y.jsx)(V.b,{to:Tn,children:"PATI"})}),Object(Y.jsxs)(Bn,{children:[Object(Y.jsx)(Nn,{children:Object(Y.jsx)(V.b,{to:Tn,children:"\ud648"})}),Object(Y.jsx)(Nn,{children:Object(Y.jsx)(V.b,{to:Pn,children:"\uc601\ud654\uac80\uc0c9"})})]})]})},Jn=t(55),Kn=t(54),Ln=tn.c.section(v||(v=Object(M.a)(["\n  height: 80vh;\n  background-size: cover;\n  background-position: center;\n  padding: 220px 80px;\n  @media screen and (max-width: 500px) {\n    padding: 220px 20px;\n  }\n  position: relative;\n"]))),Un=tn.c.h3(w||(w=Object(M.a)(["\n  max-width: 550px;\n  width: 100%;\n  font-size: 80px;\n  font-weight: ",";\n  line-height: 1.2em;\n  margin-bottom: 25px;\n  text-shadow: 0 0 15px rgba(0, 0, 0, 0.7);\n  position: relative;\n  z-index: 9;\n  @media screen and (max-width: 500px) {\n    font-size: 45px;\n    margin-bottom: 15px;\n    margin-top: 100px;\n  }\n"])),dn),An=tn.c.p(k||(k=Object(M.a)(["\n  max-width: 600px;\n  width: 100%;\n  font-size: 20px;\n  opacity: 0.9;\n  line-height: 1.4em;\n  text-shadow: 0 0 15px rgba(0, 0, 0, 0.8);\n  position: relative;\n  z-index: 9;\n  @media screen and (max-width: 500px) {\n    font-size: ",";\n  }\n"])),bn),Mn=tn.c.div(y||(y=Object(M.a)(["\n  width: 100%;\n  height: 60vh;\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  background: linear-gradient(0deg, black, transparent);\n"]))),Yn=tn.c.button(z||(z=Object(M.a)(["\n  all: unset;\n  padding: 20px 50px;\n  border: 1px solid #fff;\n  font-weight: ",";\n  margin-top: 30px;\n  cursor: pointer;\n  transition: 0.2s;\n  position: relative;\n  z-index: 9;\n  span {\n    transition: 0.2s;\n  }\n  &:hover {\n    background-color: ",";\n    color: ",";\n    span {\n      margin-left: 20px;\n    }\n  }\n  @media screen and (max-width: 500px) {\n    display: none;\n  }\n"])),dn,on,sn),Gn=tn.c.section(S||(S=Object(M.a)(["\n  height: ",";\n  background-color: #111;\n  margin-top: 100px;\n  padding-left: 80px;\n  display: flex;\n  justify-content: space-between;\n  overflow: hidden;\n  transition: 0.5s;\n  @media screen and (max-width: 500px) {\n    display: none;\n  }\n"])),(function(n){return n.height})),Hn=tn.c.div(_||(_=Object(M.a)(["\n  width: 30%;\n"]))),Qn=tn.c.div(C||(C=Object(M.a)(["\n  font-size: 80px;\n  font-weight: ",";\n  line-height: 1.2em;\n  margin: 50px 0 30px 0;\n"])),dn),Wn=tn.c.div(I||(I=Object(M.a)(["\n  font-size: 20px;\n  opacity: 0.8;\n  line-height: 2em;\n"]))),Xn=tn.c.div(R||(R=Object(M.a)(["\n  width: 65%;\n  background-size: cover;\n  background-position: top;\n  div {\n    padding: 50px;\n    float: right;\n    font-size: 30px;\n    cursor: pointer;\n  }\n"]))),Zn=function(n){var e=n.data,t=n.num,c=Object(P.useState)(0),i=Object(A.a)(c,2),a=i[0],r=i[1],o=Object(P.useState)(0),s=Object(A.a)(o,2),d=s[0],j=s[1];return Object(Y.jsxs)("div",{children:[Object(Y.jsxs)(Ln,{style:{backgroundImage:"url(https://image.tmdb.org/t/p/original".concat(e["".concat(t)].backdrop_path,")")},children:[Object(Y.jsx)(Un,{children:e["".concat(t)].title}),Object(Y.jsx)(An,{children:e["".concat(t)].overview.slice(0,70)+"..."}),Object(Y.jsx)(Mn,{}),Object(Y.jsx)(Yn,{onClick:function(){0===d?(r("80vh"),window.scrollTo({top:500,left:0,behavior:"smooth"}),j(d+1)):1===d&&(r("0"),j(d-1))},children:"\ub354 \ubcf4\uae30 +"})]}),Object(Y.jsxs)(Gn,{height:a,children:[Object(Y.jsxs)(Hn,{children:[Object(Y.jsx)(Qn,{children:e["".concat(t)].title}),Object(Y.jsx)(Wn,{children:e["".concat(t)].overview.slice(0,250)+"..."})]}),Object(Y.jsx)(Xn,{style:{backgroundImage:"url(https://image.tmdb.org/t/p/original".concat(e["".concat(t)].backdrop_path,")")},children:Object(Y.jsx)("div",{onClick:function(){r("0"),j(d-1)},children:Object(Y.jsx)(Kn.a,{icon:Jn.a})})})]})]})},$n=t(20),ne=t(114),ee=t(112),te=t(113),ce=t(111),ie=(t(108),tn.c.h3(E||(E=Object(M.a)(["\n  font-size: 35px;\n  font-weight: ",";\n  margin: 80px 0 30px 0;\n  @media screen and (max-width: 500px) {\n    font-size: 25px;\n    margin-top: 50px;\n  }\n"])),dn)),ae=tn.c.div(T||(T=Object(M.a)(["\n  height: 180px;\n  background-size: cover;\n  background-position: center;\n"]))),re=tn.c.h4(D||(D=Object(M.a)(["\n  font-size: 18px;\n  margin-top: 15px;\n  @media screen and (max-width: 500px) {\n    font-size: ",";\n  }\n"])),pn);te.a.use([ce.a]);var oe,se,de,je,be,pe,xe,le,he=function(n){var e=n.movieData,t=n.title;return Object(Y.jsxs)(Y.Fragment,{children:[Object(Y.jsx)(ie,{children:t}),Object(Y.jsx)(ne.a,Object($n.a)(Object($n.a)({module:[ce.a]},{breakpoints:{1024:{slidesPerView:5.2,spaceBetween:20},320:{slidesPerView:2.1,spaceBetween:10}}}),{},{navigation:!0,children:e.map((function(n){return Object(Y.jsx)(ee.a,{children:Object(Y.jsxs)(V.b,{to:"/detail/".concat(n.id),children:[Object(Y.jsx)(ae,{style:{backgroundImage:"url(https://image.tmdb.org/t/p/original".concat(n.backdrop_path,")")}}),Object(Y.jsx)(re,{children:n.title})]})},n.id)}))}))]})},Oe=tn.c.div(oe||(oe=Object(M.a)([""]))),ue=tn.c.section(se||(se=Object(M.a)(["\n  width: 100%;\n"]))),ge=function(){var n=Object(P.useState)(),e=Object(A.a)(n,2),t=e[0],c=e[1],i=Object(P.useState)(),a=Object(A.a)(i,2),r=a[0],o=a[1],s=Object(P.useState)(),d=Object(A.a)(s,2),j=d[0],b=d[1],p=Object(P.useState)(!0),x=Object(A.a)(p,2),l=x[0],h=x[1];return Object(P.useEffect)((function(){var n=function(){var n=Object(U.a)(L.a.mark((function n(){var e,t,i,a,r,s;return L.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,W();case 3:return e=n.sent,t=e.data.results,c(t),n.next=8,X();case 8:return i=n.sent,a=i.data.results,o(a),n.next=13,Z();case 13:r=n.sent,s=r.data.results,b(s),h(!1),n.next=22;break;case 19:n.prev=19,n.t0=n.catch(0),console.log(n.t0);case 22:case"end":return n.stop()}}),n,null,[[0,19]])})));return function(){return n.apply(this,arguments)}}();n()}),[]),Object(Y.jsxs)("div",{children:[Object(Y.jsx)(G,{title:"\ud648"}),l?Object(Y.jsx)(mn,{}):Object(Y.jsx)(Y.Fragment,{children:t&&Object(Y.jsxs)(Oe,{children:[Object(Y.jsx)(Zn,{data:t,num:2}),Object(Y.jsx)(ue,{children:Object(Y.jsxs)(hn,{children:[Object(Y.jsx)(he,{movieData:t,title:"\ud604\uc7ac \uc0c1\uc601 \uc601\ud654"}),Object(Y.jsx)(he,{movieData:r,title:"\uac1c\ubd09 \uc608\uc815 \uc601\ud654"}),Object(Y.jsx)(he,{movieData:j,title:"\uc778\uae30 \uc601\ud654"})]})})]})})]})},me=function(){var n=Object(J.f)();return Object(P.useEffect)((function(){window.scrollTo({top:0,left:0,behavior:"smooth"})}),[n]),null},fe=t(56),ve=tn.c.form(de||(de=Object(M.a)(["\n  margin-top: 120px;\n"]))),we=tn.c.input(je||(je=Object(M.a)(["\n  all: unset;\n  width: 100%;\n  height: 60px;\n  border: 1px solid #555;\n  box-sizing: border-box;\n  padding: 10px 20px;\n  &::placeholder {\n    font-size: 18px;\n  }\n  font-size: 18px;\n"]))),ke=tn.c.div(be||(be=Object(M.a)(["\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n  row-gap: 30px;\n  column-gap: 30px;\n  margin-top: 50px;\n  @media screen and (max-width: 500px) {\n    grid-template-columns: repeat(2, 1fr);\n  }\n"]))),ye=tn.c.div(pe||(pe=Object(M.a)([""]))),ze=tn.c.div(xe||(xe=Object(M.a)(["\n  height: 180px;\n"]))),Se=tn.c.h3(le||(le=Object(M.a)(["\n  margin-top: 10px;\n"]))),_e=function(){var n=Object(P.useState)(),e=Object(A.a)(n,2),t=e[0],c=e[1],i=Object(P.useState)(),a=Object(A.a)(i,2),r=a[0],o=a[1],s=Object(P.useState)(!1),d=Object(A.a)(s,2),j=d[0],b=d[1],p=Object(P.useState)(""),x=Object(A.a)(p,2),l=x[0],h=x[1],O=Object(fe.a)({mode:"onChange"}),u=O.register,g=O.getValues,m=O.handleSubmit,f=function(){var n=Object(U.a)(L.a.mark((function n(){var e,t,i,a;return L.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=g(),t=e.term,o(!0),n.prev=2,n.next=5,en(t);case 5:i=n.sent,(a=i.data.results).length<=0?h("\uac80\uc0c9 \uacb0\uacfc\uac00 \uc5c6\uc11c\uc6a9....!\ud83e\udd2a"):(h(""),c(a)),o(!1),n.next=15;break;case 11:n.prev=11,n.t0=n.catch(2),console.log(n.t0),b(!0);case 15:case"end":return n.stop()}}),n,null,[[2,11]])})));return function(){return n.apply(this,arguments)}}();return console.log(t),Object(Y.jsxs)("div",{children:[Object(Y.jsx)(G,{title:"\uc601\ud654\uac80\uc0c9"}),Object(Y.jsxs)(hn,{children:[Object(Y.jsx)(ve,{onSubmit:m(f),children:Object(Y.jsx)(we,Object($n.a)(Object($n.a)({},u("term",{required:!0})),{},{type:"text",placeholder:"\uac80\uc0c9..."}))}),j?Object(Y.jsx)(an,{}):Object(Y.jsx)("div",{children:r?Object(Y.jsx)(mn,{}):Object(Y.jsx)(ke,{children:""===l&&t?t.map((function(n){return Object(Y.jsx)(V.b,{to:"/detail/".concat(n.id),children:Object(Y.jsxs)(ye,{children:[Object(Y.jsx)(ze,{style:{background:"url(".concat(n.backdrop_path?"https://image.tmdb.org/t/p/original".concat(n.backdrop_path):"https://blog.jounsaram.net/wp-content/themes/easymag/images/no-image.png",") center / cover")}}),Object(Y.jsx)(Se,{children:n.title})]})},n.id)})):Object(Y.jsx)("h3",{children:l})})})]})]})};var Ce=function(){return Object(Y.jsx)(N.b,{children:Object(Y.jsxs)(V.a,{children:[Object(Y.jsx)(xn,{}),Object(Y.jsx)(Vn,{}),Object(Y.jsx)(me,{}),Object(Y.jsxs)(J.c,{children:[Object(Y.jsx)(J.a,{path:Tn,exact:!0,children:Object(Y.jsx)(ge,{})}),Object(Y.jsx)(J.a,{path:Dn,children:Object(Y.jsx)(In,{})}),Object(Y.jsx)(J.a,{path:Pn,children:Object(Y.jsx)(_e,{})}),Object(Y.jsx)(J.a,{children:Object(Y.jsx)(an,{})})]}),Object(Y.jsx)(En,{})]})})};B.a.render(Object(Y.jsx)(F.a.StrictMode,{children:Object(Y.jsx)(Ce,{})}),document.getElementById("root"))}},[[109,1,2]]]);
//# sourceMappingURL=main.8aeeccee.chunk.js.map