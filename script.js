/* =========================================================
   DATA — edit this section to update your portfolio content
   ========================================================= */
const SKILLS = {
  tech: ["UI / UX Research","Web Development","UiPath Process Automation","Mendix Rapid","Business & System Analysis","Data Modeling","Video & Photo Editing","Graphic Design"],
  soft: ["Adaptability","Time Management","Project Management","Team Leadership","Problem Solving","Detail Oriented","Teamwork"],
  tools:["Figma","Mendix","UiPath","VS Code","Canva","Adobe Illustrator","Lightroom","CapCut","Word","Excel","PowerPoint","ChatGPT"]
};

const PROJECTS = [
  { id:"voyago", cat:"uiux", tag:"UI / UX Design", title:"Voyago", tagline:"Traveling Made Simple",
    bg:"linear-gradient(135deg,#6fe3c9,#ffe27a)", imgs:["voyago-1","voyago-2","voyago-3"],
    short:"A travel app designed to make every journey easier, faster, and more convenient.",
    points:[
      "Designed a user-friendly travel application UI/UX to simplify trip planning and improve the overall travel experience.",
      "Developed intuitive interfaces for users to search, compare, and manage transportation and accommodation options in one place.",
      "Organized key features and user flows to create a seamless and accessible travel planning experience.",
      "Applied a consistent visual design and clear information hierarchy to enhance usability and help users navigate the application efficiently."],
    stack:["Figma","User Flow","Mobile UI"] },
  { id:"rudy", cat:"uiux", tag:"UI / UX Design", title:"Rudy", tagline:"Your Personal Fitness Companion",
    bg:"linear-gradient(135deg,#ffd6d6,#fff1f1)", imgs:["rudy-phone","rudy-mascot"],
    short:"An AI-powered fitness app that helps users understand their fitness condition and build healthier habits.",
    points:[
      "Designed an intuitive and engaging fitness application UI/UX to help users understand their fitness conditions and build healthier habits.",
      "Developed user-friendly interfaces for heart rate monitoring, calorie tracking, sleep analysis, and activity tracking.",
      "Integrated personalized workout and meal recommendations to support users in achieving their fitness goals.",
      "Focused on presenting fitness data and health insights in a clear, accessible, and engaging way to help users monitor progress and maintain a healthier lifestyle."],
    stack:["Figma","Dashboard UI","Mascot","AI-powered"] },
  { id:"identicare", cat:"uiux", tag:"UI / UX Design", title:"IDENTICARE", tagline:"Healthcare verification platform",
    bg:"linear-gradient(135deg,#d7f5e6,#e8f0ff)", imgs:["identicare-1","identicare-2"], wide:true,
    short:"A healthcare verification platform that improves usability for professionals and institutions.",
    points:[
      "Designed the UI/UX of a healthcare verification platform to improve usability for healthcare professionals and institutions.",
      "Developed intuitive interfaces for AI-generated symptom analysis, biometric validation, demographic data, and stress-level indicators.",
      "Focused on improving healthcare efficiency, data transparency, and fraud prevention through a user-friendly digital experience."],
    stack:["Figma","Web Dashboard","Biometrics"] },
  { id:"teduuh", cat:"uiux", tag:"UI / UX Design", title:"Teduuh", tagline:"Stay dry with Teduuh",
    bg:"linear-gradient(135deg,#6ec6ff,#1a3fc4)", icon:"☂️",
    short:"A smart umbrella rental application that protects users from unexpected rain.",
    points:[
      "Designed a user-friendly UI/UX for a smart umbrella rental application that protects users from unexpected rain.",
      "Developed intuitive interfaces to help users find nearby umbrella stations, check availability, and rent or return umbrellas using QR codes.",
      "Focused on improving accessibility and convenience by supporting umbrella rentals in campuses, malls, and public transportation areas."],
    stack:["Figma","QR Flow","Mobile UI"] },
  { id:"cinevo", cat:"uiux", tag:"UI / UX Design", title:"Cinevo", tagline:"Your Movies Your Way",
    bg:"linear-gradient(135deg,#1b1f3b,#3a2a5c)", imgs:["cinevo-1","cinevo-2","cinevo-3"],
    short:"A movie ticket booking application designed in Figma, from discovery to payment.",
    points:[
      "Designed the UI/UX of a movie ticket booking application using Figma to create an intuitive and engaging user experience.",
      "Defined user flows and data flows to ensure smooth navigation from movie discovery to ticket booking and payment.",
      "Focused on creating a visually appealing, user-friendly interface with a clear and seamless movie ticket booking process.",
      "Designed key pages: Home, Movie Details, Movie Schedule, Seat Selection, Voucher, Payment, and Profile."],
    stack:["Figma","User Flow","Data Flow","Mobile UI"] },
  { id:"angin", cat:"code", tag:"Programming", title:"ANGIN BNB", tagline:"Hotel & room booking website",
    bg:"linear-gradient(135deg,#ffe0e3,#fff4f4)", imgs:["angin-1","angin-2","angin-3"], wide:true,
    short:"An Airbnb-inspired hotel and room booking website built as a laboratory mini programming project.",
    points:[
      "Developed a hotel and room booking website inspired by Airbnb as part of a laboratory mini programming project.",
      "Built a user-friendly interface that allows users to explore accommodations, browse room options, and make bookings.",
      "Implemented the front-end using HTML, CSS, and JavaScript, with PHP and SQL for server-side processes and database management.",
      "Applied web development and database integration skills to build a functional and user-friendly accommodation booking system."],
    stack:["HTML","CSS","JavaScript","PHP","SQL"] },
  { id:"dash", cat:"data", tag:"Data Analysis", title:"Data Modeling & Dashboard", tagline:"Interactive Excel dashboard",
    bg:"linear-gradient(135deg,#dff7d8,#d8f0ff)", imgs:["dash-1","dash-2"], wide:true,
    short:"An interactive Excel dashboard that turns lab and lecture data into clear, decision-ready insights.",
    points:[
      "Developed an interactive Excel dashboard to visualize and analyze data collected from laboratory and lecture activities for a university course.",
      "Performed data modeling and data processing to organize raw data into meaningful information.",
      "Created interactive charts, graphs, and filters to identify patterns, compare results, and monitor key performance indicators.",
      "Analyzed historical data to identify trends and support data-driven predictions and insights.",
      "Transformed complex datasets into clear visual reports to support easier interpretation and decision-making."],
    stack:["Excel","Data Modeling","Dashboard","KPI"] }
];

const EXPERIENCES = [
  { id:"mentor", cat:"pro", tag:"Professional", title:"Mentor — SASC Scholarship Awardee", org:"Odd Semester 2026", imgs:["mentor"],
    metrics:["Mentoring"],
    points:[
      "Provided academic guidance, study support, and practical assistance to Information Systems students throughout their university journey.",
      "Helped students identify academic challenges, explore solutions, and access relevant learning resources.",
      "Fostered a supportive learning environment through regular communication and direct interaction to build students' confidence and independence."] },
  { id:"fyp", cat:"org", tag:"Organizational", title:"Freshmen Leader & Freshmen Partner", org:"FYP 2025", imgs:["fyp-1","fyp-2","fyp-3"],
    metrics:["13 leaders","200+ freshmen","18 trees"],
    points:[
      "Guided 13 freshmen leaders and supported 200+ incoming Information Systems freshmen in adapting to university life.",
      "Helped new students understand academic expectations, campus procedures, and build connections with their peers.",
      "Coordinated group activities, discussions, and orientation programs to encourage engagement, collaboration, and a strong sense of community.",
      "Organized a tree-planting initiative involving 18 trees in Kelurahan Panunggangan Timur, collaborating with student groups from Alam Sutera and Kemanggisan."] },
  { id:"regional", cat:"org", tag:"Organizational", title:"Regional President @Alam Sutera", org:"Klub Seni Fotografi Bina Nusantara", imgs:["regional-1","regional-2"],
    metrics:["65 members","75+ new members","175+ network"],
    points:[
      "Led a 65-member regional team and coordinated 14 staff and volunteers to strengthen member engagement and organizational performance.",
      "Expanded regional membership by 75+ members while maintaining the club's growth and continuity.",
      "Coordinated activities across 2 regions with a network of 175+ members, fostering teamwork, stronger connections, and sustainable organizational growth."] },
  { id:"kathina", cat:"org", tag:"Organizational", title:"Coordinator of Design & Documentation", org:"Perayaan Kathina 2569 B.E / 2026 — KMBD", imgs:["kathina-1","kathina-2","kathina-3"],
    metrics:["Design Team","Documentation"],
    points:[
      "Coordinated the design team and managed visual materials for Perayaan Kathina 2569 B.E. / 2026, organized by KMBD.",
      "Ensured visual consistency and alignment with the event's theme and identity across promotional materials and designs.",
      "Prepared and organized event documentation to support the planning process and ensure important materials were completed on time.",
      "Strengthened team coordination, communication, design management, and documentation skills through event preparation and execution."] },
  { id:"narasi", cat:"org", tag:"Organizational", title:"Coordinator of Photoshoot Division", org:"NARASI 2025 — Klub Seni Fotografi Bina Nusantara", imgs:["narasi-1","narasi-2","narasi-3"],
    metrics:["Photoshoot","Creative Direction"],
    points:[
      "Led the planning and execution of photoshoot activities for NARASI 2025, coordinating photographers, models, dancers, and supporting team members.",
      "Collaborated with STAMANARA dancers as models to bring creative concepts to life through photography.",
      "Directed photoshoot sessions to capture dynamic movement, expressions, and body composition in line with the creative vision.",
      "Managed on-site operations and ensured the final visual materials reflected the exhibition's artistic direction and creative identity."] },
  { id:"bench", cat:"org", tag:"Organizational", title:"Project Manager of Benchmarking 2025", org:"Klub Seni Fotografi Bina Nusantara", imgs:["bench-1","bench-2","bench-3","bench-4"],
    metrics:["3 universities","FGD","Photo hunt"],
    points:[
      "Participated in an inter-university photography benchmarking event involving KLIFONARA, PHPC (Universitas Pelita Harapan), and OBSCURA (Universitas Multimedia Nusantara).",
      "Engaged in knowledge sharing and group discussions (FGD) to exchange insights, creative perspectives, and organizational practices among photography communities.",
      "Collaborated with members from different universities in team-based photo hunting activities around BINUS Alam Sutera campus.",
      "Strengthened networking, teamwork, and creative collaboration while exploring diverse photography styles under the theme “One Vision of Lenses.”"] },
  { id:"kmbd", cat:"org", tag:"Organizational", title:"Activist, Creative Media & Art Division", org:"KMBD", imgs:["kmbd"],
    metrics:["Visual Identity"],
    points:[
      "Contributed to KMBD's visual identity by creating photography and design materials for various Buddhist community activities and events, supporting promotional efforts and event documentation through creative visual content."] },
  { id:"klif", cat:"org", tag:"Organizational", title:"Activist, Event Division", org:"KLIFONARA", imgs:["klifonara"],
    metrics:["Events","Photo Trials"],
    points:[
      "Coordinated photography hunting events and bonding activities for KLIFONARA members, including Photo Trials, to encourage hands-on photography practice, strengthen teamwork, and foster stronger connections within the photography community."] }
];

const CERTS = [
  "RAP-ID Certification","Certificate of Completion","Certificate of Appreciation",
  "Professional Office (Solution C.1)","Advanced English (C.1)","Market Research & Business Communication (C.1)",
  "Dean's List Certificate","Sertifikat"
].map((t,i)=>({title:t, src:`assets/cert-${i+1}.webp`}));

/* =========================================================
   HELPERS
   ========================================================= */
const $  = (s,r=document)=>r.querySelector(s);
const $$ = (s,r=document)=>[...r.querySelectorAll(s)];
const img = (n,cls="",alt="")=>`<img src="assets/${n}.webp" class="${cls}" alt="${alt}" loading="lazy">`;
const toast = msg=>{const t=$("#toast");t.textContent=msg;t.classList.add("show");clearTimeout(toast.t);toast.t=setTimeout(()=>t.classList.remove("show"),2200)};

/* THEME */
const root=document.documentElement, themeBtn=$("#themeBtn");
const saved=(()=>{try{return localStorage.getItem("theme")}catch(e){return null}})();
if(saved==="dark"){root.dataset.theme="dark";themeBtn.textContent="☀️"}
themeBtn.onclick=()=>{
  const dark=root.dataset.theme==="dark";
  root.dataset.theme=dark?"light":"dark"; themeBtn.textContent=dark?"🌙":"☀️";
  try{localStorage.setItem("theme",dark?"light":"dark")}catch(e){}
};

/* NAV */
const burger=$("#burger"), links=$("#navLinks");
burger.onclick=()=>{burger.classList.toggle("open");links.classList.toggle("open")};
$$("#navLinks a").forEach(a=>a.onclick=()=>{burger.classList.remove("open");links.classList.remove("open")});
const spy=new IntersectionObserver(es=>es.forEach(e=>{
  if(e.isIntersecting){
    $$("#navLinks a").forEach(a=>a.classList.toggle("active",a.dataset.spy===e.target.id));
  }
}),{rootMargin:"-45% 0px -50% 0px"});
["profile","projects","experience","certificate","contact"].forEach(id=>spy.observe($("#"+id)));

addEventListener("scroll",()=>{
  const h=document.documentElement, y=h.scrollTop;
  $("#progress").style.width=(y/(h.scrollHeight-h.clientHeight)*100)+"%";
  $("#nav").classList.toggle("scrolled",y>30);
  $("#toTop").classList.toggle("show",y>600);
},{passive:true});
$("#toTop").onclick=()=>scrollTo({top:0,behavior:"smooth"});

/* TYPING */
(()=>{
  const words=["UI/UX Designer","Web Developer","Photographer","Automation Enthusiast","Student Leader"];
  let w=0,c=0,del=false; const el=$("#typed");
  (function tick(){
    const word=words[w];
    el.textContent=word.slice(0,c);
    if(!del&&c===word.length){del=true;return setTimeout(tick,1400)}
    if(del&&c===0){del=false;w=(w+1)%words.length}
    c+=del?-1:1; setTimeout(tick,del?45:90);
  })();
})();

/* REVEAL + COUNTERS */
const io=new IntersectionObserver(es=>es.forEach(e=>{
  if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}
}),{threshold:.12});
$$(".reveal").forEach(el=>io.observe(el));

const counters=new IntersectionObserver(es=>es.forEach(e=>{
  if(!e.isIntersecting)return; counters.unobserve(e.target);
  const el=e.target, end=parseFloat(el.dataset.count), dec=+el.dataset.dec||0, suf=el.dataset.suffix||"";
  const t0=performance.now();
  (function step(t){
    const p=Math.min((t-t0)/1400,1), v=end*(1-Math.pow(1-p,3));
    el.textContent=v.toFixed(dec)+suf; if(p<1)requestAnimationFrame(step);
  })(t0);
}),{threshold:.5});
$$("[data-count]").forEach(el=>counters.observe(el));

/* HERO PHOTO TILT */
const tilt=$("#tiltPhoto");
if(matchMedia("(hover:hover)").matches){
  tilt.addEventListener("mousemove",e=>{
    const r=tilt.getBoundingClientRect(), x=(e.clientX-r.left)/r.width-.5, y=(e.clientY-r.top)/r.height-.5;
    tilt.style.transform=`perspective(900px) rotateY(${x*10}deg) rotateX(${-y*8}deg)`;
  });
  tilt.addEventListener("mouseleave",()=>tilt.style.transform="");
}

/* SKILLS */
function renderSkills(k){
  $("#skillChips").innerHTML=SKILLS[k].map((s,i)=>`<span class="chip" style="animation-delay:${i*45}ms">${s}</span>`).join("");
}
$$("#skillTabs .tab").forEach(b=>b.onclick=()=>{
  $$("#skillTabs .tab").forEach(x=>x.classList.toggle("active",x===b)); renderSkills(b.dataset.skill);
});
renderSkills("tech");

/* PROJECTS */
function renderProjects(f="all"){
  const list=PROJECTS.filter(p=>f==="all"||p.cat===f);
  $("#projGrid").innerHTML=list.map((p,i)=>{
    const media=p.imgs
      ? p.imgs.slice(0,p.wide?1:3).map((n,j)=>img(n,(p.wide?"wide ":"")+(j===1?"m2":""),p.title)).join("")
      : `<span style="font-size:6rem;align-self:center;margin:auto">${p.icon}</span>`;
    return `<article class="p-card" style="animation-delay:${i*80}ms" data-id="${p.id}" tabindex="0">
      <div class="p-media" style="background:${p.bg}"><span class="tag">${p.tag}</span>${media}</div>
      <div class="p-body"><h3>${p.title}</h3><div class="tl">${p.tagline}</div><p>${p.short}</p>
      <div class="metrics">${p.stack.slice(0,3).map(s=>`<span class="metric">${s}</span>`).join("")}</div>
      <span class="more">View details</span></div></article>`;
  }).join("");
  $$("#projGrid .p-card").forEach(c=>{
    c.onclick=()=>openProject(c.dataset.id);
    c.onkeydown=e=>{if(e.key==="Enter")openProject(c.dataset.id)};
  });
}
$$("#projTabs .tab").forEach(b=>b.onclick=()=>{
  $$("#projTabs .tab").forEach(x=>x.classList.toggle("active",x===b)); renderProjects(b.dataset.f);
});
renderProjects();

/* EXPERIENCE */
function renderExp(f="all"){
  const list=EXPERIENCES.filter(e=>f==="all"||e.cat===f);
  $("#expGrid").innerHTML=list.map((e,i)=>`
    <article class="p-card e-card" style="animation-delay:${i*70}ms" data-id="${e.id}" tabindex="0">
      <div class="p-media"><span class="tag ${e.cat}">${e.tag}</span>${img(e.imgs[0],"photo",e.title)}</div>
      <div class="p-body"><div class="e-org">${e.org}</div><h3>${e.title}</h3>
      <div class="metrics">${e.metrics.map(m=>`<span class="metric">${m}</span>`).join("")}</div>
      <span class="more">Read more</span></div></article>`).join("");
  $$("#expGrid .p-card").forEach(c=>{
    c.onclick=()=>openExp(c.dataset.id);
    c.onkeydown=e=>{if(e.key==="Enter")openExp(c.dataset.id)};
  });
}
$$("#expTabs .tab").forEach(b=>b.onclick=()=>{
  $$("#expTabs .tab").forEach(x=>x.classList.toggle("active",x===b)); renderExp(b.dataset.f);
});
renderExp();

/* MODAL */
const modal=$("#modal");
function openModal(html){
  $("#modalBody").innerHTML=html; modal.classList.add("open"); modal.setAttribute("aria-hidden","false");
  document.body.style.overflow="hidden"; modal.querySelector(".modal-box").scrollTop=0;
}
function closeModal(){modal.classList.remove("open");modal.setAttribute("aria-hidden","true");document.body.style.overflow=""}
$("#modalX").onclick=closeModal;
modal.addEventListener("click",e=>{if(e.target===modal)closeModal()});

function openProject(id){
  const p=PROJECTS.find(x=>x.id===id);
  const hero=p.imgs?p.imgs.map(n=>img(n,"",p.title)).join(""):`<span style="font-size:8rem;margin:auto">${p.icon}</span>`;
  openModal(`<div class="m-hero" style="background:${p.bg}">${hero}</div>
    <div class="m-body"><span class="metric">${p.tag}</span>
    <h3>${p.title}</h3><div class="tl">${p.tagline}</div>
    <ul>${p.points.map(x=>`<li>${x}</li>`).join("")}</ul>
    <div class="stack">${p.stack.map(s=>`<span>${s}</span>`).join("")}</div></div>`);
}
function openExp(id){
  const e=EXPERIENCES.find(x=>x.id===id);
  openModal(`<div class="m-hero photos">${e.imgs.map(n=>img(n,"",e.title)).join("")}</div>
    <div class="m-body"><span class="metric">${e.tag}</span>
    <h3>${e.title}</h3><div class="tl">${e.org}</div>
    <ul>${e.points.map(x=>`<li>${x}</li>`).join("")}</ul>
    <div class="stack">${e.metrics.map(s=>`<span>${s}</span>`).join("")}</div></div>`);
  $$(".m-hero.photos img").forEach(im=>im.onclick=()=>openLightbox([{src:im.src,title:e.title}],0));
}

/* LIGHTBOX */
const lb=$("#lightbox"); let lbList=[],lbI=0;
function showLb(){const c=lbList[lbI];$("#lbImg").src=c.src;$("#lbCap").textContent=c.title;
  const multi=lbList.length>1;$("#lbPrev").style.display=$("#lbNext").style.display=multi?"":"none"}
function openLightbox(list,i){lbList=list;lbI=i;showLb();lb.classList.add("open");lb.setAttribute("aria-hidden","false")}
function closeLb(){lb.classList.remove("open");lb.setAttribute("aria-hidden","true")}
const step=d=>{lbI=(lbI+d+lbList.length)%lbList.length;showLb()};
$("#lbX").onclick=closeLb; $("#lbPrev").onclick=()=>step(-1); $("#lbNext").onclick=()=>step(1);
lb.addEventListener("click",e=>{if(e.target===lb)closeLb()});
addEventListener("keydown",e=>{
  if(e.key==="Escape"){closeLb();closeModal()}
  if(lb.classList.contains("open")){if(e.key==="ArrowLeft")step(-1);if(e.key==="ArrowRight")step(1)}
});

/* CERTIFICATES + CV */
$("#certGrid").innerHTML=CERTS.map((c,i)=>`
  <figure class="cert reveal" data-i="${i}"><img src="${c.src}" alt="${c.title}" loading="lazy"><span>${c.title}</span></figure>`).join("");
$$(".cert").forEach(el=>{io.observe(el);el.onclick=()=>openLightbox(CERTS,+el.dataset.i)});
$("#cvOpen").onclick=()=>openLightbox([{src:"assets/cv.webp",title:"Curriculum Vitae — Vegen Fendianto"}],0);

/* CONTACT */
$("#copyMail").onclick=async()=>{
  const m=$("#copyMail").dataset.mail;
  try{await navigator.clipboard.writeText(m);toast("Email copied! ✉️")}
  catch(e){location.href="mailto:"+m}
};
$("#mailForm").onsubmit=e=>{
  e.preventDefault();
  const n=$("#fName").value, em=$("#fEmail").value, msg=$("#fMsg").value;
  const body=encodeURIComponent(`${msg}\n\n— ${n} (${em})`);
  location.href=`mailto:vfendianto@gmail.com?subject=${encodeURIComponent("Hello from your portfolio — "+n)}&body=${body}`;
  toast("Opening your email app…");
};
$("#yr").textContent=new Date().getFullYear();
