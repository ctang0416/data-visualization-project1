import{C as f,a as u,L as y,B as m,p as h,b as v,c as b,j as d,d as P,e as C,R as B,f as L}from"./vendor.b16c2001.js";const j=function(){const g=document.createElement("link").relList;if(g&&g.supports&&g.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))p(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&p(l)}).observe(document,{childList:!0,subtree:!0});function A(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerpolicy&&(r.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?r.credentials="include":o.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function p(o){if(o.ep)return;o.ep=!0;const r=A(o);fetch(o.href,r)}};j();var t=[{Sex:1,Year:1900,Age:0,People:4619544},{Sex:1,Year:2e3,Age:0,People:9735380},{Sex:1,Year:1900,Age:5,People:4465783},{Sex:1,Year:2e3,Age:5,People:10552146},{Sex:1,Year:1900,Age:10,People:4057669},{Sex:1,Year:2e3,Age:10,People:10563233},{Sex:1,Year:1900,Age:15,People:3774846},{Sex:1,Year:2e3,Age:15,People:10237419},{Sex:1,Year:1900,Age:20,People:3694038},{Sex:1,Year:2e3,Age:20,People:9731315},{Sex:1,Year:1900,Age:25,People:3389280},{Sex:1,Year:2e3,Age:25,People:9659493},{Sex:1,Year:1900,Age:30,People:2918964},{Sex:1,Year:2e3,Age:30,People:10205879},{Sex:1,Year:1900,Age:35,People:2633883},{Sex:1,Year:2e3,Age:35,People:11475182},{Sex:1,Year:1900,Age:40,People:2261070},{Sex:1,Year:2e3,Age:40,People:11320252},{Sex:1,Year:1900,Age:45,People:1868413},{Sex:1,Year:2e3,Age:45,People:9925006},{Sex:1,Year:1900,Age:50,People:1571038},{Sex:1,Year:2e3,Age:50,People:8507934},{Sex:1,Year:1900,Age:55,People:1161908},{Sex:1,Year:2e3,Age:55,People:6459082},{Sex:1,Year:1900,Age:60,People:916571},{Sex:1,Year:2e3,Age:60,People:5123399},{Sex:1,Year:1900,Age:65,People:672663},{Sex:1,Year:2e3,Age:65,People:4453623},{Sex:1,Year:1900,Age:70,People:454747},{Sex:1,Year:2e3,Age:70,People:3792145},{Sex:1,Year:1900,Age:75,People:268211},{Sex:1,Year:2e3,Age:75,People:2912655},{Sex:1,Year:1900,Age:80,People:127435},{Sex:1,Year:2e3,Age:80,People:1902638},{Sex:1,Year:1900,Age:85,People:44008},{Sex:1,Year:2e3,Age:85,People:970357},{Sex:1,Year:1900,Age:90,People:15164},{Sex:1,Year:2e3,Age:90,People:336303},{Sex:2,Year:1900,Age:0,People:4589196},{Sex:2,Year:2e3,Age:0,People:9310714},{Sex:2,Year:1900,Age:5,People:4390483},{Sex:2,Year:2e3,Age:5,People:10069564},{Sex:2,Year:1900,Age:10,People:4001749},{Sex:2,Year:2e3,Age:10,People:10022524},{Sex:2,Year:1900,Age:15,People:3801743},{Sex:2,Year:2e3,Age:15,People:9692669},{Sex:2,Year:1900,Age:20,People:3751061},{Sex:2,Year:2e3,Age:20,People:9324244},{Sex:2,Year:1900,Age:25,People:3236056},{Sex:2,Year:2e3,Age:25,People:9518507},{Sex:2,Year:1900,Age:30,People:2665174},{Sex:2,Year:2e3,Age:30,People:10119296},{Sex:2,Year:1900,Age:35,People:2347737},{Sex:2,Year:2e3,Age:35,People:11635647},{Sex:2,Year:1900,Age:40,People:2004987},{Sex:2,Year:2e3,Age:40,People:11488578},{Sex:2,Year:1900,Age:45,People:1648025},{Sex:2,Year:2e3,Age:45,People:10261253},{Sex:2,Year:1900,Age:50,People:1411981},{Sex:2,Year:2e3,Age:50,People:8911133},{Sex:2,Year:1900,Age:55,People:1064632},{Sex:2,Year:2e3,Age:55,People:6921268},{Sex:2,Year:1900,Age:60,People:887508},{Sex:2,Year:2e3,Age:60,People:5668961},{Sex:2,Year:1900,Age:65,People:640212},{Sex:2,Year:2e3,Age:65,People:4804784},{Sex:2,Year:1900,Age:70,People:440007},{Sex:2,Year:2e3,Age:70,People:5184855},{Sex:2,Year:1900,Age:75,People:265879},{Sex:2,Year:2e3,Age:75,People:4355644},{Sex:2,Year:1900,Age:80,People:132449},{Sex:2,Year:2e3,Age:80,People:3221898},{Sex:2,Year:1900,Age:85,People:48614},{Sex:2,Year:2e3,Age:85,People:1981156},{Sex:2,Year:1900,Age:90,People:20093},{Sex:2,Year:2e3,Age:90,People:1064581}];f.register(u,y,m,h,v,b);function E(){const n=t.filter(e=>e.Year===1900),g=t.filter(e=>e.Year===2e3);console.log(n),console.log(g);const A=[],p=[];var o=0,r=0,l=0,a=0,s=0,i=0,x=0,S=0;n.forEach(e=>{e.Age<=10&&(o+=e.People),e.Age>=15&&e.Age<=20&&(r+=e.People),e.Age>=25&&e.Age<=30&&(l+=e.People),e.Age>=35&&e.Age<=40&&(a+=e.People),e.Age>=45&&e.Age<=50&&(s+=e.People),e.Age>=55&&e.Age<=60&&(i+=e.People),e.Age>=65&&e.Age<=70&&(x+=e.People),e.Age>=75&&e.Age<=90&&(S+=e.People)}),A.push(o,r,l,a,s,i,x,S),console.log(A),g.forEach(e=>{e.Age<=10&&(o+=e.People),e.Age>=15&&e.Age<=20&&(r+=e.People),e.Age>=25&&e.Age<=30&&(l+=e.People),e.Age>=35&&e.Age<=40&&(a+=e.People),e.Age>=45&&e.Age<=50&&(s+=e.People),e.Age>=55&&e.Age<=60&&(i+=e.People),e.Age>=65&&e.Age<=70&&(x+=e.People),e.Age>=75&&e.Age<=90&&(S+=e.People)}),p.push(o,r,l,a,s,i,x,S),console.log(p);const Y={responsive:!0,plugins:{legend:{position:"top"},title:{display:!1,text:"Chart.js Bar Chart"}},scales:{x:{title:{display:!0,text:"Ages"}},y:{title:{display:!0,text:"100,000 People"},ticks:{stepSize:50}}}},c={labels:["0-10","15-20","25-30","35-40","45-50","55-60","65-70","75-90"],datasets:[{label:"1990",data:A.map(e=>e/1e5),backgroundColor:"rgba(255, 99, 132, 0.5)"},{label:"2000",data:p.map(e=>e/1e5),backgroundColor:"rgba(53, 162, 235, 0.5)"}]};return d("div",{style:{margin:20},children:[P("h1",{children:"US Census in 1900 vs 2000"}),P("div",{style:{display:"flex"},children:P(C,{options:Y,data:c})})]})}B.render(P(L.StrictMode,{children:P(E,{})}),document.getElementById("root"));