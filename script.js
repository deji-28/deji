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
   r:"+100 EXP / +40 Gems",
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
   r:"+120 EXP / +50 Gems",
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
   r:"+90 EXP / +30 Gems",
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
   r:"+200 EXP / +80 Gems",
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
   r:"+250 EXP / +100 Gems",
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
   r:"+300 EXP / +120 Gems",
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
   r:"+280 EXP / +110 Gems",
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
   r:"+350 EXP / +150 Gems",
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
   r:"+270 EXP / +110 Gems",
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
   r:"+290 EXP / +120 Gems",
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
   r:"+180 EXP / +75 Gems",
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
   r:"+220 EXP / +90 Gems",
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
   r:"+400 EXP / +200 Gems",
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
   r:"+320 EXP / +140 Gems",
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
   r:"+200 EXP / +80 Gems",
   tr:200
 }
];
const fam=[
 ["👑","Mother","leader","Clan Leader","4,200","Max energy"],
 ["🛡️","Father","leader","Clan Leader","4,150","Max support"],
 ["🧙","Yourself","co","Co-Leader","3,450","Coffee-powered"],
 ["⭐","Younger Sibling","elder","Elder","1,900","Cheer squad"],
 ["🌟","Relatives","member","Member","1,100","Always donating"]
];

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
A.innerHTML=achs.map((a,n)=>`
  <article class="ach" data-n="${n}">
    <div class="ic" aria-hidden="true">${a.i}</div>
    <div class="ach-body">
      <div class="ach-top">
        <span class="ach-date">📅 ${a.date}</span>
        <span class="ach-cat">${a.cat}</span>
      </div>
      <h3>${a.t}</h3>
      <p>${a.d}</p>
      <div class="row">
        <span class="stars" aria-label="${a.s} stars">${"⭐".repeat(a.s)}</span>
        <span class="reward">${a.r}</span>
      </div>
      <div class="ach-actions">
        <button type="button" class="btn claim" aria-pressed="false">Claim</button>
        <button type="button" class="btn view-cert" data-n="${n}">📜 View Scroll</button>
      </div>
    </div>
  </article>
`).join("");
document.getElementById("ct").textContent=achs.length;
document.getElementById("roster").innerHTML=fam.map(m=>`<div class="mem"><div class="av" aria-hidden="true">${m[0]}</div><h3 style="font-size:1.25rem;color:#fff3b0;text-shadow:0 2px 0 #000">${m[1]}</h3><span class="role ${m[2]}">${m[3]}</span><div class="stat"><span>Trophies</span><b>${m[4]} 🏆</b></div><div class="stat"><span>Donations</span><b>${m[5]}</b></div></div>`).join("");

// ---- behavior ----
let base=3450,bonus=0;
const tc=document.getElementById("tcount");
A.addEventListener("click",e=>{
  const b=e.target.closest(".claim");
  if(!b)return;
  const c=b.closest(".ach"),a=achs[+c.dataset.n];
  const now=!c.classList.contains("claimed");
  c.classList.toggle("claimed",now);
  b.setAttribute("aria-pressed",now);
  b.textContent=now?"Claimed ✔":"Claim";
  bonus+=now?a.tr:-a.tr;
  tc.textContent=(base+bonus).toLocaleString("en-US");
  document.getElementById("cc").textContent=A.querySelectorAll(".claimed").length;
  sfx(now?"claim":"unclaim");
  toast(now?"Reward claimed: "+a.r:"Claim undone");
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
const names=["Home","Personal Info","Achievement","Family"];
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
  document.querySelectorAll("nav [data-go]").forEach(b=>{const on=+b.dataset.go===cur;b.classList.toggle("current",on);if(on)b.setAttribute("aria-current","page");else b.removeAttribute("aria-current")});
  prev.disabled=cur===0;next.disabled=cur===pages.length-1;
  dots.forEach((d,i)=>d.classList.toggle("on",i===cur));
  animate(pages[cur]);
}
document.querySelectorAll("[data-go]").forEach(b=>b.addEventListener("click",e=>{e.preventDefault();show(+b.dataset.go)}));
prev.addEventListener("click",()=>show(cur-1));
next.addEventListener("click",()=>show(cur+1));
addEventListener("keydown",e=>{const was=cur;if(e.key==="ArrowLeft")show(cur-1);if(e.key==="ArrowRight")show(cur+1);if(cur!==was)sfx("click")});
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