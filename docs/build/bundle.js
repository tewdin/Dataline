var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function i(t){t.forEach(e)}function a(t){return"function"==typeof t}function o(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function l(t,e){t.appendChild(e)}function r(t,e,n){t.insertBefore(e,n||null)}function s(t){t.parentNode.removeChild(t)}function u(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function c(t){return document.createElement(t)}function p(t){return document.createTextNode(t)}function m(){return p(" ")}function d(){return p("")}function f(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function h(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}class k{constructor(t,e=null){this.e=c("div"),this.a=e,this.u(t)}m(t,e=null){for(let n=0;n<this.n.length;n+=1)r(t,this.n[n],e);this.t=t}u(t){this.e.innerHTML=t,this.n=Array.from(this.e.childNodes)}p(t){this.d(),this.u(t),this.m(this.t,this.a)}d(){this.n.forEach(s)}}let g;function v(t){g=t}const y=[],b=[],j=[],w=[],$=Promise.resolve();let _=!1;function x(t){j.push(t)}const L=new Set;function M(){do{for(;y.length;){const t=y.shift();v(t),T(t.$$)}for(;b.length;)b.pop()();for(let t=0;t<j.length;t+=1){const e=j[t];L.has(e)||(L.add(e),e())}j.length=0}while(y.length);for(;w.length;)w.pop()();_=!1,L.clear()}function T(t){if(null!==t.fragment){t.update(),i(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(x)}}const E=new Set;function N(t,e){-1===t.$$.dirty[0]&&(y.push(t),_||(_=!0,$.then(M)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function O(o,l,r,s,u,c,p=[-1]){const m=g;v(o);const d=l.props||{},f=o.$$={fragment:null,ctx:null,props:c,update:t,not_equal:u,bound:n(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(m?m.$$.context:[]),callbacks:n(),dirty:p};let h=!1;var k,y;f.ctx=r?r(o,d,(t,e,...n)=>{const i=n.length?n[0]:e;return f.ctx&&u(f.ctx[t],f.ctx[t]=i)&&(f.bound[t]&&f.bound[t](i),h&&N(o,t)),e}):[],f.update(),h=!0,i(f.before_update),f.fragment=!!s&&s(f.ctx),l.target&&(l.hydrate?f.fragment&&f.fragment.l(function(t){return Array.from(t.childNodes)}(l.target)):f.fragment&&f.fragment.c(),l.intro&&((k=o.$$.fragment)&&k.i&&(E.delete(k),k.i(y))),function(t,n,o){const{fragment:l,on_mount:r,on_destroy:s,after_update:u}=t.$$;l&&l.m(n,o),x(()=>{const n=r.map(e).filter(a);s?s.push(...n):i(n),t.$$.on_mount=[]}),u.forEach(x)}(o,l.target,l.anchor),M()),v(m)}function A(t,e,n){const i=t.slice();return i[6]=e[n],i}function H(t,e,n){const i=t.slice();return i[6]=e[n],i}function D(t,e,n){const i=t.slice();return i[6]=e[n],i}function K(t){let e,n,i,a,o,p,d,f,k,g,v,y,b=t[1],j=[];for(let e=0;e<b.length;e+=1)j[e]=C(H(t,b,e));let w=t[2],$=[];for(let e=0;e<w.length;e+=1)$[e]=V(A(t,w,e));return{c(){e=c("div"),e.innerHTML='<div id="caption" class="cell"><div id="caption_inner"><h1>Entistä parempi verkkokauppa</h1> \n\t\t\t<div id="sum" class="mb-4">Tarjoamme juuri sinulle parhaat verkkokaupparatkaisut kotimaiseen ja kansainväliseen kaupankäyntiin erittäin kilpailukykyisellä hinnalla ja monen vuoden osaamisella.</div> \n\t\t\t<div id="buttons"><a class="btn" href="tel:+358407746121" title="Keskutellaan miten voimme parantaa teidän verkkosivustoa" rel="nofollow noopener">Soita meille</a> \n\t\t\t\t<a class="btn" href="mailto:myynti@dataline.fi" title="Lähetä rohkeasti sähköpostia ja sovitaan tapaaminen" rel="nofollow noopener">Lähetä viesti</a></div></div></div>',n=m();for(let t=0;t<j.length;t+=1)j[t].c();i=m(),a=c("section"),o=c("div"),p=c("h2"),p.textContent="Yhteystiedot",d=m(),f=c("div"),f.innerHTML="<h3>Dataline Group Oy</h3><p>Lehtikuusentie 5,<br>26100 Rauma<br>2354053-6</p>",k=m(),g=c("div");for(let t=0;t<$.length;t+=1)$[t].c();v=m(),y=c("div"),y.innerHTML='<picture><source srcset="/images/dataline-667.webp 667w,/images/dataline-768.webp 768w,/images/dataline-1080.webp 1080w" type="image/webp"> \n\t\t<source srcset="/images/dataline-667.jpg 667w,/images/dataline-768.jpg 768w,/images/dataline-1080.jpg 1080w" type="image/jpg"> \n\t\t<img src="/images/dataline-1080.jpg" alt="Verkkosivut yritykselle nopeasti ja ammattitaidolla"></picture>',h(e,"id","hero"),h(f,"id","yritys"),h(f,"class","rmb"),h(g,"class","row"),h(o,"class","container"),h(a,"id","yhteystiedot"),h(a,"class","big"),h(y,"id","bg")},m(t,s){r(t,e,s),r(t,n,s);for(let e=0;e<j.length;e+=1)j[e].m(t,s);r(t,i,s),r(t,a,s),l(a,o),l(o,p),l(o,d),l(o,f),l(o,k),l(o,g);for(let t=0;t<$.length;t+=1)$[t].m(g,null);r(t,v,s),r(t,y,s)},p(t,e){if(3&e){let n;for(b=t[1],n=0;n<b.length;n+=1){const a=H(t,b,n);j[n]?j[n].p(a,e):(j[n]=C(a),j[n].c(),j[n].m(i.parentNode,i))}for(;n<j.length;n+=1)j[n].d(1);j.length=b.length}if(4&e){let n;for(w=t[2],n=0;n<w.length;n+=1){const i=A(t,w,n);$[n]?$[n].p(i,e):($[n]=V(i),$[n].c(),$[n].m(g,null))}for(;n<$.length;n+=1)$[n].d(1);$.length=w.length}},d(t){t&&s(e),t&&s(n),u(j,t),t&&s(i),t&&s(a),u($,t),t&&s(v),t&&s(y)}}}function S(t){let e,n,i,a,o,u,p="verkkokaupat"==t[0]&&B(t);return{c(){e=c("div"),n=c("div"),i=c("div"),p&&p.c(),a=m(),o=c("button"),o.innerHTML='<div class="cell">X</div>',h(i,"class","row"),h(n,"class","container"),h(o,"id","close"),h(e,"id","references")},m(s,c){r(s,e,c),l(e,n),l(n,i),p&&p.m(i,null),l(i,a),l(e,o),u=f(o,"click",t[4])},p(t,e){"verkkokaupat"==t[0]?p?p.p(t,e):(p=B(t),p.c(),p.m(i,a)):p&&(p.d(1),p=null)},d(t){t&&s(e),p&&p.d(),u()}}}function C(t){let e,n,i,a,o,u,d,g,v,y,b,j,w,$,_,x,L,M,T,E,N,O,A,H,D=t[6].title+"",K=t[6].desc+"",S=1==t[6].button&&function(t){let e,n,i;function a(...e){return t[5](t[6],...e)}return{c(){e=c("div"),n=c("button"),n.textContent="Referenssit",h(n,"class","btn"),h(e,"class","references")},m(t,o){r(t,e,o),l(e,n),i=f(n,"click",a)},p(e,n){t=e},d(t){t&&s(e),i()}}}(t);return{c(){e=c("section"),n=c("div"),i=c("div"),a=c("div"),o=c("picture"),u=c("source"),g=m(),v=c("source"),b=m(),j=c("img"),_=m(),x=c("div"),L=c("div"),M=c("h2"),T=p(D),E=m(),O=m(),S&&S.c(),h(u,"srcset",d="/images/palvelumme-"+t[6].id+"-320.webp"),h(u,"type","image/webp"),h(v,"srcset",y="/images/palvelumme-"+t[6].id+"-320.jpg"),h(v,"type","image/jpeg"),h(j,"class","img"),j.src!==(w="/images/palvelumme-"+t[6].id+"-320.jpg")&&h(j,"src",w),h(j,"alt",$=t[6].img_desc),h(a,"class","col-4 r1"),N=new k(K,O),h(L,"class","cell"),h(x,"class","col-8 r1"),h(i,"class","row"),h(n,"class","container"),h(e,"id",A=t[6].id),h(e,"class",H="big bg"+t[6].bg)},m(t,s){r(t,e,s),l(e,n),l(n,i),l(i,a),l(a,o),l(o,u),l(o,g),l(o,v),l(o,b),l(o,j),l(i,_),l(i,x),l(x,L),l(L,M),l(M,T),l(L,E),N.m(L),l(L,O),S&&S.m(L,null)},p(t,e){1==t[6].button&&S.p(t,e)},d(t){t&&s(e),S&&S.d()}}}function V(e){let n,i,a,o,u,d,f,k,g,v,y,b,j,w,$,_,x,L,M,T=e[6].name+"",E=e[6].job+"",N=e[6].phone+"",O=e[6].email+"";return{c(){n=c("div"),i=c("h3"),a=c("a"),o=p(T),f=m(),k=c("p"),g=p(E),v=c("br"),y=c("a"),b=p(N),w=c("br"),$=c("a"),_=p(O),L=m(),h(a,"href",u=e[6].link),h(a,"target","_blank"),h(a,"title",d=e[6].link_title),h(a,"rel","noopener"),h(y,"href",j="tel:"+e[6].phone_link),h(y,"rel","nofollow noopener"),h($,"href",x="mailto:"+e[6].mail),h($,"rel","nofollow noopener"),h(n,"id",M=e[6].id),h(n,"class","col-6 rmb")},m(t,e){r(t,n,e),l(n,i),l(i,a),l(a,o),l(n,f),l(n,k),l(k,g),l(k,v),l(k,y),l(y,b),l(k,w),l(k,$),l($,_),l(n,L)},p:t,d(t){t&&s(n)}}}function B(t){let e,n=t[3],i=[];for(let e=0;e<n.length;e+=1)i[e]=G(D(t,n,e));return{c(){for(let t=0;t<i.length;t+=1)i[t].c();e=d()},m(t,n){for(let e=0;e<i.length;e+=1)i[e].m(t,n);r(t,e,n)},p(t,a){if(8&a){let o;for(n=t[3],o=0;o<n.length;o+=1){const l=D(t,n,o);i[o]?i[o].p(l,a):(i[o]=G(l),i[o].c(),i[o].m(e.parentNode,e))}for(;o<i.length;o+=1)i[o].d(1);i.length=n.length}},d(t){u(i,t),t&&s(e)}}}function G(e){let n,i,a,o,u,p,d,f,k,g,v,y,b,j;return{c(){n=c("a"),i=c("picture"),a=c("source"),u=m(),p=c("source"),f=m(),k=c("img"),y=m(),h(a,"srcset",o="/images/ref-"+e[6].img+".webp"),h(a,"type","image/webp"),h(p,"srcset",d="/images/ref-"+e[6].img+".jpg"),h(p,"type","image/jpeg"),k.src!==(g="/images/ref-"+e[6].img+".jpg")&&h(k,"src",g),h(k,"alt",v=e[6].title),h(n,"class","col-4 mb"),h(n,"href",b=e[6].url),h(n,"title",j=e[6].title),h(n,"target","_blank"),h(n,"rel","noopener")},m(t,e){r(t,n,e),l(n,i),l(i,a),l(i,u),l(i,p),l(i,f),l(i,k),l(n,y)},p:t,d(t){t&&s(n)}}}function P(e){let n,i,a;function o(t,e){return t[0]?S:K}let l=o(e),u=l(e);return{c(){n=c("a"),n.innerHTML='<source srcset="/images/dataline-logo.webp" type="image/webp"> \n\t<source srcset="/images/dataline-logo.png" type="image/png"> \n\t<img src="/images/dataline-logo.png" alt="Dataline Group Oy" width="135" height="27">',i=m(),u.c(),a=d(),h(n,"id","logo"),h(n,"href","/"),h(n,"rel","home")},m(t,e){r(t,n,e),r(t,i,e),u.m(t,e),r(t,a,e)},p(t,[e]){l===(l=o(t))&&u?u.p(t,e):(u.d(1),u=l(t),u&&(u.c(),u.m(a.parentNode,a)))},i:t,o:t,d(t){t&&s(n),t&&s(i),u.d(t),t&&s(a)}}}function R(t,e,n){let i;return[i,[{title:"Verkkokauppa yritykselle",id:"verkkokaupat",img_desc:"",desc:"<p>Meille tärkeää on, että pääset nopeasti ja luotettavasti myymään tuotteitasi uudessa verkkokaupassa. Meiltä löytyy kaikki toiminnot, jotka tarvitset menestyvän verkkokaupan ylläpitämiseen ja kehitämme verkkokauppaa paremmaksi yhdessä asiakkaidemme kanssa. Verkkokauppaan on mahdollista myös integroida toiminnanohjausjärjestelmä, kuten esim. Lemonsoft.</p><p>Verkkokaupat teemme helppokäyttöisellä ja selkeällä ProcessWire-verkkokauppa-alustalla. Datalinen kotisivut ja verkkokauppa sopivat kaikille toimialoille ravintoloista vaatekauppoihin ja urheiluseuroista tukkukauppoihin.</p><p>Teemme verkkosivuja, joista olemme ylpeitä!</p>",button:1,bg:1},{title:"Kotisivut urheiluseuralle",id:"urheiluseurat",img_desc:"",desc:"<p>Dataline tarjoaa urheiluseuroille monimuotoisen ja helposti päivitettävän urheilualustan. Kattavat perusominaisuudet sisältävät uutiset, joukkuetiedot, videot, kausittaiset ottelut, seuran statiikat, verkkokaupan, aitiovaraukset ja paljon muuta hyödyllistä. Kehitämme sivustoja urheiluseurojen tarpeiden mukaan ja lisäämme vuosittain uusia ominaisuuksia.</p><p>Kaipaako verkkosivut uudistusta? Ota rohkeasti yhteyttä!</p>",button:0,bg:2}],[{id:"tuspe",link:"https://tuspe.com/",link_title:"Tuspe Design - verkkosivut ja verkkokaupat yritykselle",name:"Timo Anttila",job:"Myynti ja toteutukset",phone:"040 774 6121",phone_link:"+358407746121",email:"info@tuspe.com"},{id:"molentum",link:"https://molentum.fi/",link_title:"Molentum Oy - paremman palvelun digitoimisto",name:"Mika Lähteenmäki",job:"Myynti ja asiakaspalvelu",phone:"0400 273 150",phone_link:"+358400273150",email:"myynti@dataline.fi"}],[{title:"NavyBlue Shop",url:"https://navyblue.fi/",img:"processwire-navyblue-2019"},{title:"Lennol Oy",url:"https://www.lennol.fi/",img:"processwire-lennol-2019"},{title:"Suomen Taksitarvike Oy",url:"https://taksitarvike.fi/",img:"processwire-taksitarvike-2020"}],()=>n(0,i=""),t=>n(0,i=t.id)]}return new class extends class{$destroy(){!function(t,e){const n=t.$$;null!==n.fragment&&(i(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}}{constructor(t){super(),O(this,t,R,P,o,{})}}({target:document.body,props:{name:"world"}})}();
//# sourceMappingURL=bundle.js.map
