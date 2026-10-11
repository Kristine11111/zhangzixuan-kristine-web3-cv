var zh=[
["国际展会运营 · 2026","TOKEN2049 Singapore 2026",["参与 TOKEN2049 国际 Web3 行业峰会企业参展支持，保障企业参展期间各项安排有序推进。"],["展会运营","Web3","协调执行"]],
["B2B 商业策略项目 · 2026","Omn Wah Tech",["围绕半导体精密制造行业的可持续发展与企业竞争优势，聚焦 ESG 价值商业化。","通过市场调研、竞品分析及 B2B 客户采购需求研究，探索可持续发展与商业增长的结合路径，支持企业差异化价值主张及市场竞争策略制定。"],["B2B 策略","ESG","市场研究"]],
["公益募资与整合营销项目 · 2026","MINDS",["参与公益募资策略制定及企业伙伴合作拓展，协助潜在合作伙伴开发与资源对接。","统筹线下募资活动策划及执行协调，结合社交媒体内容营销与多渠道推广，支持募资资源整合及项目影响力提升。"],["公益募资","伙伴合作","整合营销"]],
["DAO 成员 · 2026 年 4 月","Melodao Web3 实习训练营",["与加密行业从业者及 Web3 社区建立联系。","研究市场趋势、Web3 赛道及对标项目。","从 0 到 1 搭建 Web3 垂直 X 账号，单条内容获得 10K+ 曝光。"],["DAO 成员","生态研究","社区协作","X 内容"]]
];
function e(v){return v.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");}
function update(){
var a=document.querySelector(".open-status");if(a)a.lastChild.textContent="正在寻找 Web3 & Web2 实习机会";
var c=document.querySelector(".hero-caption p");if(c)c.textContent="以运营为核心，兼具商业思维，将跨文化沟通、内容执行和客户运营经验带入 Web3 & Web2。";
var b=document.querySelector("#projects .project-cards");if(b)b.innerHTML=zh.map(function(p,i){return "<div class=project-card project-card-"+(i+1)+"><div><small>"+e(p[0])+"</small><h3>"+e(p[1])+"</h3></div><p class=project-body>"+p[2].map(function(x){return "<span>"+e(x)+"</span>";}).join("")+"</p><div class=project-tags>"+p[3].map(function(x){return "<span>"+e(x)+"</span>";}).join("")+"</div></div>";}).join("");
var w=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT),n,q=[];while(n=w.nextNode())q.push(n);q.forEach(function(x){x.nodeValue=x.nodeValue.split("Web3").join("Web3 & Web2");});
document.querySelectorAll(".experience-company h3").forEach(function(x){x.textContent=x.textContent.split("Web3 & Web2").join("Web3");});document.querySelectorAll(".experience-role h4").forEach(function(x){x.textContent=x.textContent.split("实习生").join("").split("实习").join("");});}
setInterval(update,500);update();
