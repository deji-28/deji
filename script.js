// ---- data ----
const skills=[["Java",1],["Python",1],["HTML / CSS",1],["JavaScript",1]];
const achs=[
 {i:"🗡️",t:"First Blood: Hello World",d:"Wrote and ran my first program from scratch.",s:3,r:"+100 EXP / +50 Gems",tr:120},
 {i:"📜",t:"Scholar’s Scroll",d:"Earned a place in BS Computer Science.",s:3,r:"+250 EXP / +100 Gems",tr:300},
 {i:"🛡️",t:"Defender of the Deadline",d:"Submitted every project on time this term.",s:2,r:"+150 EXP / +60 Gems",tr:200},
 {i:"⚡",t:"Speed Coder",d:"Finished a coding challenge in under 30 minutes.",s:3,r:"+120 EXP / +40 Gems",tr:150}
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
function tone(f,t0,dur,type="square",vol=.12){const a=ctx();if(!a)return;const o=a.createOscillator(),g=a.createGain();o.type=type;o.frequency.setValueAtTime(f,a.currentTime+t0);
  g.gain.setValueAtTime(vol,a.currentTime+t0);g.gain.exponentialRampToValueAtTime(.001,a.currentTime+t0+dur);o.connect(g).connect(a.destination);o.start(a.currentTime+t0);o.stop(a.currentTime+t0+dur+.02)}
function sfx(k){ if(!on)return;
  if(k==="click"){tone(520,0,.07);tone(330,.04,.09,"triangle")}
  if(k==="claim"){[523,659,784,1047].forEach((f,i)=>tone(f,i*.08,.18,"square",.1));tone(1568,.34,.35,"triangle",.12)}
  if(k==="unclaim"){tone(300,0,.12,"sawtooth",.08)}
  if(k==="toggle"){tone(700,0,.06,"triangle")}
}
function toast(m){const t=document.getElementById("toast");t.textContent=m;t.classList.add("show");clearTimeout(toast.h);toast.h=setTimeout(()=>t.classList.remove("show"),1800)}
// ---- build ----
document.getElementById("lab").innerHTML=skills.map(([n,l])=>`<div class="lab"><div class="lab-top"><span>${n}</span><span>LVL ${l}/10</span></div><div class="track"><div class="fill upg" data-w="${l*10}"></div></div><div class="pips">${Array.from({length:10},(_,i)=>`<i class="${i<l?"on":""}"></i>`).join("")}</div></div>`).join("");
const A=document.getElementById("achs");
A.innerHTML=achs.map((a,n)=>`<article class="ach" data-n="${n}"><div class="ic" aria-hidden="true">${a.i}</div><div><h3>${a.t}</h3><p>${a.d}</p><div class="row"><span class="stars" aria-label="${a.s} stars">${"⭐".repeat(a.s)}${"☆".repeat(3-a.s)}</span><span class="reward">${a.r}</span></div><button type="button" class="btn claim" aria-pressed="false">Claim</button></div></article>`).join("");
document.getElementById("ct").textContent=achs.length;
document.getElementById("roster").innerHTML=fam.map(m=>`<div class="mem"><div class="av" aria-hidden="true">${m[0]}</div><h3 style="font-size:1.25rem;color:#fff3b0;text-shadow:0 2px 0 #000">${m[1]}</h3><span class="role ${m[2]}">${m[3]}</span><div class="stat"><span>Trophies</span><b>${m[4]} 🏆</b></div><div class="stat"><span>Donations</span><b>${m[5]}</b></div></div>`).join("");
// ---- behavior ----
let base=3450,bonus=0;
const tc=document.getElementById("tcount");
A.addEventListener("click",e=>{const b=e.target.closest(".claim");if(!b)return;const c=b.closest(".ach"),a=achs[+c.dataset.n];
  const now=!c.classList.contains("claimed");c.classList.toggle("claimed",now);b.setAttribute("aria-pressed",now);b.textContent=now?"Claimed ✔":"Claim";
  bonus+=now?a.tr:-a.tr;tc.textContent=(base+bonus).toLocaleString("en-US");
  document.getElementById("cc").textContent=A.querySelectorAll(".claimed").length;
  sfx(now?"claim":"unclaim");toast(now?"Reward claimed: "+a.r:"Claim undone")});
const sb=document.getElementById("sound");
sb.addEventListener("click",()=>{on=!on;sb.textContent=on?"🔊":"🔇";sb.setAttribute("aria-pressed",on);sfx("toggle");toast(on?"Sound FX on":"Sound FX off")});
document.addEventListener("click",e=>{if(e.target.closest("[data-sfx='click']")||(e.target.closest(".btn")&&!e.target.closest(".claim,#sound")))sfx("click")});
document.getElementById("resume").addEventListener("click",e=>{e.preventDefault();toast("Add your resume link to this button")});
// pressed state for touch
document.querySelectorAll(".btn").forEach(b=>{b.addEventListener("pointerdown",()=>b.classList.add("pressed"));["pointerup","pointerleave","pointercancel"].forEach(ev=>b.addEventListener(ev,()=>b.classList.remove("pressed")))});
// ---- pages: next / previous only ----
const pages=[...document.querySelectorAll("main section")];
const names=["Home","About","Achievement","Family"];
const prev=document.getElementById("prev"),next=document.getElementById("next"),label=document.getElementById("pagelabel");
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
  label.textContent=names[cur];
  prev.disabled=cur===0;next.disabled=cur===pages.length-1;
  dots.forEach((d,i)=>d.classList.toggle("on",i===cur));
  animate(pages[cur]);
}
prev.addEventListener("click",()=>show(cur-1));
next.addEventListener("click",()=>show(cur+1));
addEventListener("keydown",e=>{if(e.key==="ArrowLeft")show(cur-1);if(e.key==="ArrowRight")show(cur+1)});
show(0);