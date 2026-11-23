// ---- data ----
const skills=[["Java",1],["Python",1],["HTML / CSS",1],["JavaScript",1]];
const achs=[
 {
   i:"🧸",
   date:"Mar 26, 2009",
   cat:"Early Education",
   t:"First Steps: Mill Day Care",
   d:"Completed Early Childhood Care & Development at Mill Day Care Center, Itogon, Benguet.",
   img:"daycare.jpg",
   s:3,
   r:"+100 EXP / +40 Berries",
   tr:100
 },
 {
   i:"🎒",
   date:"Mar 25, 2010",
   cat:"Preschool",
   t:"Preschool Graduate",
   d:"Completed the Preschool Curriculum at Virac Elementary School, Itogon, Benguet.",
   img:"preschool.jpg",
   s:3,
   r:"+120 EXP / +50 Berries",
   tr:120
 },
 {
   i:"⛪",
   date:"Mar 17, 2013",
   cat:"Sunday School",
   t:"Sunday School Attendance",
   d:"Attended Sunday School at ABC Vetec School, Vetec Foundation Inc., Virac, Itogon, Benguet.",
   img:"sunday school.jpg",
   s:3,
   r:"+90 EXP / +30 Berries",
   tr:90
 },
 {
   i:"🏫",
   date:"Mar 31, 2016",
   cat:"Elementary",
   t:"Elementary Completion",
   d:"Graduated from Virac Elementary School (DepEd Cordillera Administrative Region).",
   img:"IMG_0748.JPG",
   s:3,
   r:"+200 EXP / +80 Berries",
   tr:200
 },
 {
   i:"🏅",
   date:"Jul 11, 2023",
   cat:"Grade 9 · SY 2022–2023",
   t:"Academic Excellence (With Honors)",
   d:"Awarded With Honors (90% average) at Alejo M. Pacalso Memorial National High School.",
   img:"jhs 3.jpg",
   s:3,
   r:"+250 EXP / +100 Berries",
   tr:250
 },
 {
   i:"🥈",
   date:"Feb 16, 2024",
   cat:"Grade 10 Q1",
   t:"Rank 4 · Academic Achiever",
   d:"Attained Rank 4 (With Honors · 92.75% average) in Quarter 1 at AMPMNHS.",
   img:"jhs2.jpg",
   s:3,
   r:"+300 EXP / +120 Berries",
   tr:300
 },
 {
   i:"🥉",
   date:"Feb 16, 2024",
   cat:"Grade 10 Q2",
   t:"Rank 5 · Academic Achiever",
   d:"Attained Rank 5 (With Honors · 91.5% average) in Quarter 2 at AMPMNHS.",
   img:"jhs4.jpg",
   s:3,
   r:"+280 EXP / +110 Berries",
   tr:280
 },
 {
   i:"🎓",
   date:"May 29, 2024",
   cat:"Junior High School",
   t:"Junior High School Completion",
   d:"Completed the Junior High School Curriculum at Alejo M. Pacalso Memorial National High School.",
   img:"jhs1.jpg",
   s:3,
   r:"+350 EXP / +150 Berries",
   tr:350
 },
 {
   i:"🌟",
   date:"Aug 29, 2025",
   cat:"Grade 11 · 1st Semester",
   t:"Academic Recognition (91 Avg)",
   d:"Awarded With Honors for outstanding academic performance at AMPMNHS.",
   img:"shs 3.jpg",
   s:3,
   r:"+270 EXP / +110 Berries",
   tr:270
 },
 {
   i:"⭐",
   date:"Nov 5, 2025",
   cat:"Grade 12-C Q1",
   t:"Academic Excellence (92% Avg)",
   d:"Achieved With Honors for outstanding performance in Grade 12-C during First Semester.",
   img:"Shs 4.jpg",
   s:3,
   r:"+290 EXP / +120 Berries",
   tr:290
 },
 {
   i:"📜",
   date:"Mar 8, 2026",
   cat:"Community & Club",
   t:"Three Eye Ball Completion",
   d:"Awarded by Sniper 155 Club of the Philippines (Baguio Chapter) for full attendance & camaraderie.",
   img:"S155C.jpg",
   s:3,
   r:"+180 EXP / +75 Berries",
   tr:180
 },
 {
   i:"🚙",
   date:"Apr 25, 2026",
   cat:"LTO Certification",
   t:"Theoretical Driving Course",
   d:"Completed the 15-hour LTO Theoretical Driving Course at Upland Driving School.",
   img:"driving school.jpg",
   s:3,
   r:"+220 EXP / +90 Berries",
   tr:220
 },
 {
   i:"🎓",
   date:"Mar 31, 2026",
   cat:"Senior High School",
   t:"SHS Diploma (HUMSS)",
   d:"Completed requirements for graduation in Senior High School under Humanities and Social Sciences (HUMSS) Strand.",
   img:"shs1.jpg",
   s:3,
   r:"+400 EXP / +200 Berries",
   tr:400
 },
 {
   i:"🏆",
   date:"Mar 31, 2026",
   cat:"Grade 12 · SY 2025–2026",
   t:"SHS Academic Excellence (93% Avg)",
   d:"Achieved With Honors with a general average of 93% in Grade 12 at AMPMNHS.",
   img:"shs2.jpg",
   s:3,
   r:"+320 EXP / +140 Berries",
   tr:320
 },
 {
   i:"💼",
   date:"Oct 25, 2026",
   cat:"Business Lab",
   t:"Business Problem Lab: It Wasn't Luck",
   d:"Took part in the Business Problem Lab workshop held at Rillera's Restaurant, Baguio City.",
   img:"TWBTL.jpg",
   s:3,
   r:"+200 EXP / +80 Berries",
   tr:200
 }
];
const fam=[
 {name:"Mother",role:"leader",title:"Guardian",desc:"The heart of the crew. Her love is my strongest power-up. 💕",imgs:[["mother.jpg","50% 35%","No.1 Supporter 💕"],["mother2.jpg","50% 40%","Hugs with Bossing"],["mother3.jpg","50% 40%","Dragon Mode"]]},
 {name:"Father",role:"leader",title:"Guardian",desc:"The silent anchor. Keeps the ship steady, no matter the storm. ⚓",imgs:[["father.jpg","25% 35%","ATM Machine Ko 💳"],["father2.jpg","50% 40%","Papa's Boy Mode"],["father3.jpg","50% 40%","Papa's Boy Mode"]]},
 {name:"Siblings",role:"elder",title:"Lookouts",desc:"Loud, chaotic, loyal. My crew of lookouts and my daily boss fights. 😂",imgs:[["siblings.jpg","50% 70%","MINIONS"],["siblings2.jpg","50% 45%","My no.1 kalaban"],["siblings3.jpg","50% 35%","Miss Sungit"],["siblings4.jpg","54% 40%","The Boss"]]}
];
const familyPic={img:"family.jpg",name:"The Whole Crew Trough Everything Together⚓"};
// Friends gallery: edit captions or add more {img,name} lines.
const friends=[
 {img:"friend1.jpg",name:"Ball Is Life 🏀",desc:"Same court, same hustle. Every game feels like the finals."},
 {img:"friend2.jpg",name:"With the Boys",desc:"No plans, no problem. The squad makes any day a good one."},
 {img:"friend3.jpg",name:"Court Kings",desc:"Sneakers squeaking, trash talk flying. We rule this court."},
 {img:"friend4.jpg",name:"Full Throttle",desc:"Fast, loud, and always up for the next adventure."},
 {img:"friend5.jpg",name:"Ride or Die",desc:"Through every ride and every mess, they've got my back."},
 {img:"friend6.jpg",name:"Mga d Naliligo",desc:"Splashing around like there's no tomorrow. Zero worries."},
 {img:"friend7.jpg",name:"Big boss & Classmates",desc:"Classmates turned crew. Study buddies and certified troublemakers."},
 {img:"friend8.jpg",name:"Mga Idolo",desc:"The legends I look up to (and roast daily)."},
 {img:"friend9.jpg",name:"Tropapits",desc:"Tropa forever. Loud laughs, lasting memories."}
];
// Best friend: replace null with {img:"bestfriend.jpg",name:"Name",pos:"50% 35%"} to fill the reserved spot.
const bestFriend={img:"bestfriend.jpg",name:"Bestie",pos:"50% 55%",cap:"My Other Half 💕",desc:"Partner in crime, first mate in every adventure. 🤝"};

// ---- audio ----
let ac=null,on=true;
function ctx(){ if(!ac){try{ac=new (window.AudioContext||window.webkitAudioContext)()}catch(e){}} if(ac&&ac.state==="suspended")ac.resume(); return ac }
function tone(f,t0,dur,type="square",vol=.12){const a=ctx();if(!a)return;
  const go=()=>{try{const o=a.createOscillator(),g=a.createGain();o.type=type;o.frequency.setValueAtTime(f,a.currentTime+t0);
    g.gain.setValueAtTime(vol,a.currentTime+t0);g.gain.exponentialRampToValueAtTime(.001,a.currentTime+t0+dur);o.connect(g).connect(a.destination);o.start(a.currentTime+t0);o.stop(a.currentTime+t0+dur+.02)}catch(e){}};
  if(a.state==="running")go();else a.resume().then(go).catch(()=>{})}
// unlock audio on the first touch / click / key press so the first sound isn't silent
["pointerdown","touchstart","keydown"].forEach(ev=>addEventListener(ev,()=>ctx(),{passive:true}));
function sfx(k){ if(!on)return;
  if(k==="click"){tone(520,0,.07);tone(330,.04,.09,"triangle")}
  if(k==="claim"){[523,659,784,1047].forEach((f,i)=>tone(f,i*.08,.18,"square",.1));tone(1568,.34,.35,"triangle",.12)}
  if(k==="unclaim"){tone(300,0,.12,"sawtooth",.08)}
  if(k==="toggle"){tone(700,0,.06,"triangle")}
}
function toast(m){const t=document.getElementById("toast");t.textContent=m;t.classList.add("show");clearTimeout(toast.h);toast.h=setTimeout(()=>t.classList.remove("show"),1800)}

// ---- build ----
const A=document.getElementById("achs");
const groups=[
  ["🏝️","Daycare to Elementary","Mill Day Care → Virac Elementary School",[0,1,2,3]],
  ["🧭","Junior High School","Alejo M. Pacalso Memorial National High School",[4,5,6,7]],
  ["⚓","Senior High School","Alejo M. Pacalso Memorial National High School",[8,9,12,13]],
  ["🗺️","Other Certificates","Clubs, workshops and licenses",[10,11,14]]
];
const pos=groups.map(()=>0),done=new Set();
A.innerHTML=groups.map((g,gi)=>`
  <article class="ach-card" data-g="${gi}">
    <div class="shot">
      <img alt="" class="s-img">
      <button type="button" class="nv prev" aria-label="Previous certificate">‹</button>
      <button type="button" class="nv next" aria-label="Next certificate">›</button>
      <span class="cnt"></span>
    </div>
    <div class="info">
      <div class="ghead"><span class="gi" aria-hidden="true">${g[0]}</span><div><h3>${g[1]}</h3><small>${g[2]}</small></div></div>
      <div class="ach-top"><span class="ach-date"></span><span class="ach-cat"></span></div>
      <h4 class="at"></h4>
      <p class="ad"></p>
      <div class="row"><span class="stars"></span><span class="reward"></span></div>
      <div class="ach-actions">
        <button type="button" class="btn claim" aria-pressed="false">💰 Claim</button>
        <button type="button" class="btn view-cert">📜 View Scroll</button>
      </div>
    </div>
  </article>`).join("");
function paint(gi){
  const card=A.children[gi],list=groups[gi][3],n=list[pos[gi]],a=achs[n],q=s=>card.querySelector(s);
  const im=q(".s-img");im.src=a.img;im.alt=a.t;
  q(".cnt").textContent=(pos[gi]+1)+"/"+list.length;
  q(".ach-date").textContent="📅 "+a.date;q(".ach-cat").textContent=a.cat;
  q(".at").textContent=a.i+" "+a.t;q(".ad").textContent=a.d;
  q(".stars").textContent="⭐".repeat(a.s);q(".reward").textContent=a.r;
  const on=done.has(n),b=q(".claim");
  card.classList.toggle("claimed",on);b.setAttribute("aria-pressed",on);b.textContent=on?"Claimed ✔":"💰 Claim";
  q(".view-cert").dataset.n=n;
}
const tabNames=["Daycare–Elem","Junior High","Senior High","Other"];
A.insertAdjacentHTML("beforebegin",`<div class="ach-tabs" role="group" aria-label="Certificate categories">`+groups.map((g,gi)=>`<button type="button" class="btn${gi?"":" current"}" data-t="${gi}">${g[0]} ${tabNames[gi]}</button>`).join("")+`</div>`);
A.children[0].classList.add("show");
document.querySelector(".ach-tabs").addEventListener("click",e=>{const b=e.target.closest("[data-t]");if(!b)return;document.querySelectorAll(".ach-tabs .btn").forEach(x=>x.classList.toggle("current",x===b));[...A.children].forEach((c,i)=>c.classList.toggle("show",i===+b.dataset.t));fit()});
groups.forEach((g,gi)=>paint(gi));
document.getElementById("ct").textContent=achs.length;
function openPhoto(src,t,meta){certTitle.textContent=t;certMeta.textContent=meta;certImg.src=src;certImg.alt=t;sfx("click");modal.showModal()}
const rosterEl=document.getElementById("roster"),friendsEl=document.getElementById("friendsView");
const famCard=(m,i)=>`<figure class="mem" data-m="${i}"><div class="ph"><img src="${m.imgs[0][0]}" alt="${m.name}" style="object-position:${m.imgs[0][1]}"><span class="fcap">${m.imgs[0][2]||""}</span>${m.imgs.length>1?`<button type="button" class="nv prev" aria-label="Previous photo">‹</button><button type="button" class="nv next" aria-label="Next photo">›</button><span class="cnt">1 / ${m.imgs.length}</span>`:""}</div><figcaption><h3>${m.name}</h3><span class="role ${m.role}">${m.title}</span><p class="mdesc">${m.desc||""}</p></figcaption></figure>`;
rosterEl.innerHTML=`<figure class="mem group"><button type="button" class="fmain" id="gpic" style="--bg:url('${familyPic.img}')" aria-label="Enlarge family photo"><img src="${familyPic.img}" alt="${familyPic.name}"><span class="fcap">👨‍👩‍👧‍👦 ${familyPic.name}</span></button></figure>`+fam.map(famCard).join("");
rosterEl.addEventListener("click",e=>{
 const fig=e.target.closest(".mem[data-m]"),nv=e.target.closest(".nv");
 if(fig&&nv){const m=fam[+fig.dataset.m];const k=((+fig.dataset.k||0)+(nv.classList.contains("next")?1:-1)+m.imgs.length)%m.imgs.length;fig.dataset.k=k;const im=fig.querySelector("img");im.src=m.imgs[k][0];im.style.objectPosition=m.imgs[k][1];fig.querySelector(".fcap").textContent=m.imgs[k][2]||"";fig.querySelector(".cnt").textContent=`${k+1} / ${m.imgs.length}`;sfx("toggle");return}
 if(fig&&e.target.closest(".ph img")){const m=fam[+fig.dataset.m],k=+fig.dataset.k||0;openPhoto(m.imgs[k][0],m.name,`${m.imgs[k][2]||"Family"} · ${k+1} / ${m.imgs.length}`);return}
 if(e.target.closest("#gpic"))openPhoto(familyPic.img,familyPic.name,"Family")});
friendsEl.innerHTML=`<div class="friends"><h3 class="fh">🤝 Friends <span id="fcount"></span></h3><div class="fview"><button type="button" class="fmain" id="fmain" aria-label="Enlarge photo"><img id="fimg" alt=""><span class="fcap" id="fcap"></span></button><p class="fdesc" id="fdesc"></p><div class="fthumbs" id="fthumbs"></div></div></div>`
 +`<div class="friends bffcol"><h3 class="fh">👑 Best Friend</h3>`+(bestFriend?`<figure class="mem"><div class="ph"><img src="${bestFriend.img}" alt="${bestFriend.name}" style="object-position:${bestFriend.pos||"50% 35%"}"><span class="fcap">${bestFriend.cap||""}</span></div><figcaption><h3>${bestFriend.name}</h3><span class="role co">Best Friend</span><p class="mdesc">${bestFriend.desc||""}</p></figcaption></figure>`:`<div class="slot-empty"><span aria-hidden="true">＋</span><b>Reserved</b><small>Best friend photo coming soon</small></div>`)+`</div>`;
friendsEl.addEventListener("click",e=>{if(bestFriend&&e.target.closest(".bffcol .ph img"))openPhoto(bestFriend.img,bestFriend.name,(bestFriend.cap||"Best Friend"))});
document.querySelectorAll(".ftab").forEach(b=>b.addEventListener("click",()=>{document.querySelectorAll(".ftab").forEach(x=>x.classList.toggle("current",x===b));rosterEl.hidden=b.dataset.v!=="family";friendsEl.hidden=b.dataset.v!=="friends"}));
(function(){
 if(!friends.length)return;
 const main=document.getElementById("fmain"),img=document.getElementById("fimg"),cap=document.getElementById("fcap"),fd=document.getElementById("fdesc"),th=document.getElementById("fthumbs"),cnt=document.getElementById("fcount");
 let i=0,t,hold=false;
 th.innerHTML=friends.map((f,n)=>`<button type="button" class="fth" data-i="${n}" aria-label="${f.name}"><img src="${f.img}" alt=""></button>`).join("");
 function go(n){i=(n+friends.length)%friends.length;const f=friends[i];img.src=f.img;img.alt=f.name;main.style.setProperty("--bg",`url("${f.img}")`);cap.textContent=f.name;fd.textContent=f.desc||"";cnt.textContent=`${i+1} / ${friends.length}`;th.querySelectorAll(".fth").forEach((b,k)=>b.classList.toggle("on",k===i))}
 function tick(){clearInterval(t);t=setInterval(()=>{if(!hold&&!friendsEl.hidden&&document.getElementById("family").classList.contains("active")&&!modal.open)go(i+1)},5000)}
 th.addEventListener("click",e=>{const b=e.target.closest(".fth");if(b){go(+b.dataset.i);sfx("toggle");tick()}});
 main.addEventListener("click",()=>openPhoto(friends[i].img,friends[i].name,`Friends · ${i+1} / ${friends.length}`));
 main.addEventListener("mouseenter",()=>{hold=true});main.addEventListener("mouseleave",()=>{hold=false});
 go(0);tick();
})();

// ---- behavior ----
let base=3450000,bonus=0;
const tc=document.getElementById("tcount");
document.getElementById("cc").textContent=0;
A.addEventListener("click",e=>{
  const card=e.target.closest(".ach-card");if(!card)return;
  const gi=+card.dataset.g,list=groups[gi][3];
  const nv=e.target.closest(".nv");
  if(nv){pos[gi]=(pos[gi]+(nv.classList.contains("next")?1:-1)+list.length)%list.length;paint(gi);sfx("toggle");return}
  if(e.target.closest(".claim")){
    const n=list[pos[gi]],a=achs[n],now=!done.has(n);
    if(now)done.add(n);else done.delete(n);
    bonus+=(now?a.tr:-a.tr)*1000;
    tc.textContent=document.getElementById("bounty").textContent=(base+bonus).toLocaleString("en-US");
    document.getElementById("cc").textContent=done.size;
    paint(gi);sfx(now?"claim":"unclaim");
    toast(now?"Treasure claimed: "+a.r:"Claim undone");
    return;
  }
  if(e.target.closest(".s-img"))card.querySelector(".view-cert").click();
});

// ---- certificate modal ----
const modal=document.getElementById("cert-modal");
const certImg=document.getElementById("cert-img");
const certTitle=document.getElementById("cert-title");
const certMeta=document.getElementById("cert-meta");

A.addEventListener("click",e=>{
  const v=e.target.closest(".view-cert");
  if(v){
    const a=achs[+v.dataset.n];
    certTitle.textContent=a.t;
    certMeta.textContent=`${a.cat} · Issued ${a.date}`;
    certImg.src=a.img;
    certImg.alt=a.t;
    sfx("click");
    modal.showModal();
  }
});
document.getElementById("cert-close").addEventListener("click",()=>{sfx("click");modal.close()});
modal.addEventListener("click",e=>{if(e.target===modal)modal.close()});

const sb=document.getElementById("sound");
sb.addEventListener("click",()=>{on=!on;sb.textContent=on?"🔊":"🔇";sb.setAttribute("aria-pressed",on);sfx("toggle");toast(on?"Sound FX on":"Sound FX off")});
document.addEventListener("click",e=>{if(e.target.closest("[data-sfx='click']")||e.target.closest(".logo")||(e.target.closest(".btn")&&!e.target.closest(".claim,#sound,.view-cert")))sfx("click")});
document.getElementById("resume").addEventListener("click",e=>{e.preventDefault();toast("Add your resume link to this button")});

// pressed state for touch
document.querySelectorAll(".btn").forEach(b=>{b.addEventListener("pointerdown",()=>b.classList.add("pressed"));["pointerup","pointerleave","pointercancel"].forEach(ev=>b.addEventListener(ev,()=>b.classList.remove("pressed")))});

// ---- pages: next / previous only ----
const pages=[...document.querySelectorAll("main section")];
const names=["I'm DJ! The Man Who Will Build Games!","The Captain's Profile","Treasure of the Grand Line","Meet the Crew!"];
const ep=document.getElementById("ep"),ey=document.getElementById("eyecatch");
function titleCard(n){ey.querySelector("small").textContent="EPISODE "+(n+1);ey.querySelector("b").textContent=names[n];ey.classList.remove("show");void ey.offsetWidth;ey.classList.add("show")}
const prev=document.getElementById("prev"),next=document.getElementById("next");
const dots=[...document.querySelectorAll(".dots i")],main=document.querySelector("main");
let cur=0;
function animate(sec){
  sec.querySelectorAll(".fill").forEach(f=>{f.style.transition="none";f.style.width="0"});
  void sec.offsetWidth;
  sec.querySelectorAll(".fill").forEach(f=>{f.style.transition="";f.style.width=f.dataset.w+"%"});
  sec.querySelectorAll("[data-count]").forEach(c=>{const to=+c.dataset.count;let s=null;
    const step=t=>{s=s||t;const p=Math.min((t-s)/1000,1);c.textContent=Math.round(to*p).toLocaleString("en-US");if(p<1)requestAnimationFrame(step)};
    requestAnimationFrame(step)});
}
function show(n){
  cur=Math.max(0,Math.min(pages.length-1,n));
  pages.forEach((p,i)=>p.classList.toggle("active",i===cur));
  main.scrollTop=0;
  document.body.dataset.page=cur;
  document.querySelectorAll("nav [data-go]").forEach(b=>{const on=+b.dataset.go===cur;b.classList.toggle("current",on);if(on)b.setAttribute("aria-current","page");else b.removeAttribute("aria-current")});
  prev.disabled=cur===0;next.disabled=cur===pages.length-1;
  dots.forEach((d,i)=>{d.classList.toggle("on",i<=cur);d.classList.toggle("now",i===cur)});
  ep.textContent="EP "+(cur+1)+" / "+pages.length;titleCard(cur);
  animate(pages[cur]);
  fit();[120,700,1400].forEach(t=>setTimeout(fit,t));
}
document.querySelectorAll("[data-go]").forEach(b=>b.addEventListener("click",e=>{e.preventDefault();show(+b.dataset.go)}));
prev.addEventListener("click",()=>show(cur-1));
next.addEventListener("click",()=>show(cur+1));
addEventListener("keydown",e=>{const was=cur;if(e.key==="ArrowLeft")show(cur-1);if(e.key==="ArrowRight")show(cur+1);if(cur!==was)sfx("click")});
// ---- fit: Home and Achievements never scroll; shrink to fit if a screen is still too small ----
function fit(){
  pages.forEach(p=>{p.style.zoom=""});
  if(cur!==0&&cur!==2)return;
  const sec=pages[cur];let z=1;
  for(let i=0;i<5&&main.scrollHeight>main.clientHeight+1&&z>.5;i++){z=Math.max(.5,z*(main.clientHeight/main.scrollHeight)*.985);sec.style.zoom=z}
}
let fitT;addEventListener("resize",()=>{clearTimeout(fitT);fitT=setTimeout(fit,80)});
addEventListener("orientationchange",()=>setTimeout(fit,200));
addEventListener("load",fit);if(document.fonts&&document.fonts.ready)document.fonts.ready.then(fit);
show(0);

// ---- personal info: age + inventory ----
(function(){
  const b=new Date(2004,2,28),t=new Date();let a=t.getFullYear()-b.getFullYear();
  if(t<new Date(t.getFullYear(),2,28))a--;
  document.getElementById("age").textContent=a+" years old";
  const items=[
    ["🎮","Video Games","Hobby","Where I get ideas for the games I want to build."],
    ["💻","Programming","Interest","Learning Java and Python, project by project."],
    ["🌐","Web Development","Interest","Building pages like this portfolio."],
    ["🕹️","Game Development","Goal","Learning how games are made from the ground up."],
    ["⌨️","Software Engineering","Goal","Another path I want to explore."]
  ];
  const box=document.getElementById("slots");let at=0,timer;
  for(let i=0;i<9;i++){
    const s=document.createElement("button");s.type="button";s.className="slot";
    s.innerHTML=(items[i]?items[i][0]:"")+"<span>"+(i+1)+"</span>";
    s.setAttribute("aria-label","Slot "+(i+1)+(items[i]?": "+items[i][1]:": empty"));
    s.addEventListener("click",()=>pick(i,true));box.appendChild(s);
  }
  function pick(n,manual){
    if(!items[n])return;at=n;
    [...box.children].forEach((el,k)=>el.classList.toggle("on",k===n));
    document.getElementById("sd-t").textContent=items[n][1];
    document.getElementById("sd-k").textContent=items[n][2];
    document.getElementById("sd-d").textContent=items[n][3];
    if(manual){sfx("toggle");restart()}
  }
  function restart(){clearInterval(timer);
    if(!matchMedia("(prefers-reduced-motion: reduce)").matches)
      timer=setInterval(()=>{if(pages[cur].id==="about")pick((at+1)%items.length)},4000)}
  addEventListener("keydown",e=>{const n=parseInt(e.key,10);if(n>=1&&n<=9&&pages[cur].id==="about")pick(n-1,true)});
  pick(0);restart();
})();
// ---- drifting clouds ----
(function(){const box=document.getElementById("sky");
  for(let i=0;i<7;i++){const c=document.createElement("i");c.className="cloud";const w=110+Math.random()*130;
    c.style.cssText="--w:"+w+"px;--h:"+w*.22+"px;top:"+(3+Math.random()*48)+"%;animation-duration:"+(70+Math.random()*60)+"s;animation-delay:-"+Math.random()*100+"s";box.appendChild(c)}})();