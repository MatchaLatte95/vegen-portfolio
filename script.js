/* =========================================================
   DATA — edit this section to update your portfolio content
   ========================================================= */
const SKILLS = {
  tech: [
    "UI / UX Research",
    "Web Development",
    "UiPath Process Automation",
    "Mendix Rapid",
    "Business & System Analysis",
    "Data Modeling",
    "Video & Photo Editing",
    "Graphic Design",
  ],
  soft: [
    "Adaptability",
    "Time Management",
    "Project Management",
    "Team Leadership",
    "Problem Solving",
    "Detail Oriented",
    "Teamwork",
  ],
  tools: [
    { n: "Figma", f: "figma" },
    { n: "Mendix", f: "mendix", w: 1 },
    { n: "UiPath", f: "uipath", w: 1 },
    { n: "draw.io", f: "drawio" },
    { n: "VS Code", f: "vscode" },
    { n: "Canva", f: "canva" },
    { n: "Affinity", f: "affinity" },
    { n: "Lightroom", f: "lightroom" },
    { n: "DaVinci Resolve", f: "davinci" },
    { n: "CapCut", f: "capcut" },
    { n: "Word", f: "word" },
    { n: "Excel", f: "excel" },
    { n: "PowerPoint", f: "powerpoint" },
    { n: "Google Workspace", f: "google" },
    { n: "ChatGPT", f: "chatgpt" },
    { n: "Claude", f: "claude" },
  ],
};

/* Photography galleries: n = number of photos in assets/photos/<name>/<n>.webp */
const makeGallery = (name, n, title) =>
  Array.from({ length: n }, (_, i) => ({
    src: `assets/photos/${name}/${i + 1}.webp`,
    title: `${title} — ${i + 1}/${n}`,
  }));
const GALLERY_BOROBUDUR = makeGallery(
  "borobudur",
  12,
  "Lampion Waisak Borobudur 2026",
);
const GALLERY_KATHINA = makeGallery(
  "kathina",
  6,
  "Perayaan Kathina 2025/2569 B.E",
);
const GALLERY_MALAM = makeGallery("malam", 7, "Malam Keakraban KMBD 2025");
const GALLERY_PMB = makeGallery("pmb", 7, "PMB WP KMBD");
const GALLERY_STUDIO = makeGallery("studio", 9, "Photoshoot Studio");
const GALLERY_FUNRUN = makeGallery("funrun", 7, "Binus Fun Run 2025");
const GALLERY_VOLUNTEER = makeGallery("volunteer", 10, "Volunteer");

const PROJECTS = [
  {
    id: "voyago",
    cat: "uiux",
    tag: "UI / UX Design",
    title: "Voyago",
    tagline: "Traveling Made Simple",
    bg: "linear-gradient(135deg,#6fe3c9,#ffe27a)",
    imgs: ["projects/voyago/cover"],
    cover: true,
    short:
      "A travel app designed to make every journey easier, faster, and more convenient.",
    points: [
      "Designed a user-friendly travel application UI/UX to simplify trip planning and improve the overall travel experience.",
      "Developed intuitive interfaces for users to search, compare, and manage transportation and accommodation options in one place.",
      "Organized key features and user flows to create a seamless and accessible travel planning experience.",
      "Applied a consistent visual design and clear information hierarchy to enhance usability and help users navigate the application efficiently.",
    ],
    stack: ["Figma", "User Flow", "Mobile UI"],
  },
  {
    id: "rudy",
    cat: "uiux",
    tag: "UI / UX Design",
    title: "Rudy",
    tagline: "Your Personal Fitness Companion",
    bg: "linear-gradient(135deg,#ffd6d6,#fff1f1)",
    imgs: ["projects/rudy/cover"],
    cover: true,
    short:
      "An AI-powered fitness app that helps users understand their fitness condition and build healthier habits.",
    points: [
      "Designed an intuitive and engaging fitness application UI/UX to help users understand their fitness conditions and build healthier habits.",
      "Developed user-friendly interfaces for heart rate monitoring, calorie tracking, sleep analysis, and activity tracking.",
      "Integrated personalized workout and meal recommendations to support users in achieving their fitness goals.",
      "Focused on presenting fitness data and health insights in a clear, accessible, and engaging way to help users monitor progress and maintain a healthier lifestyle.",
    ],
    stack: ["Figma", "Dashboard UI", "Mascot", "AI-powered"],
  },
  {
    id: "identicare",
    cat: "uiux",
    tag: "UI / UX Design",
    title: "IDENTICARE",
    tagline: "Healthcare verification platform",
    bg: "linear-gradient(135deg,#d7f5e6,#e8f0ff)",
    imgs: ["projects/identicare/1", "projects/identicare/2"],
    wide: true,
    short:
      "A healthcare verification platform that improves usability for professionals and institutions.",
    points: [
      "Designed the UI/UX of a healthcare verification platform to improve usability for healthcare professionals and institutions.",
      "Developed intuitive interfaces for AI-generated symptom analysis, biometric validation, demographic data, and stress-level indicators.",
      "Focused on improving healthcare efficiency, data transparency, and fraud prevention through a user-friendly digital experience.",
    ],
    stack: ["Figma", "Web Dashboard", "Biometrics"],
  },
  {
    id: "cinevo",
    cat: "uiux",
    tag: "UI / UX Design",
    title: "Cinevo",
    tagline: "Your Movies Your Way",
    bg: "linear-gradient(135deg,#1b1f3b,#3a2a5c)",
    imgs: ["projects/cinevo/cover"],
    cover: true,
    short:
      "A movie ticket booking application designed in Figma, from discovery to payment.",
    points: [
      "Designed the UI/UX of a movie ticket booking application using Figma to create an intuitive and engaging user experience.",
      "Defined user flows and data flows to ensure smooth navigation from movie discovery to ticket booking and payment.",
      "Focused on creating a visually appealing, user-friendly interface with a clear and seamless movie ticket booking process.",
      "Designed key pages: Home, Movie Details, Movie Schedule, Seat Selection, Voucher, Payment, and Profile.",
    ],
    stack: ["Figma", "User Flow", "Data Flow", "Mobile UI"],
  },
  {
    id: "nudge",
    cat: "uiux",
    tag: "UI / UX Design",
    title: "Nudge",
    tagline: "Focus & Productivity App",
    bg: "linear-gradient(135deg,#e9e6ff,#dfe9ff)",
    imgs: ["projects/nudge/cover"],
    cover: true,
    short:
      "A focus and productivity app that lets users learn from their own materials with guided focus sessions.",
    points: [
      "Initiated the core product idea of allowing users to upload their own learning materials, creating a more personalized and flexible learning experience.",
      "Led the overall UI/UX design process, taking responsibility for designing the entire application system, from concept development and user flows to high-fidelity interfaces.",
      "Designed all major application screens, including onboarding, learning modules, focus sessions, break sessions, and user dashboards.",
      "Developed a consistent design system, ensuring visual harmony, intuitive navigation, and a seamless user experience across the application.",
    ],
    stack: ["Figma", "Design System", "Mobile UI", "Mascot"],
  },
  {
    id: "kenang",
    cat: "uiux",
    tag: "UI / UX Design",
    title: "Kenang",
    tagline: "Online Photobooth & Printing App",
    bg: "linear-gradient(135deg,#cfe0ff,#e8f0ff)",
    imgs: ["projects/kenang/cover"],
    cover: true,
    short:
      "An online photobooth platform to upload photos, customize them with frames, and print at nearby machines.",
    points: [
      "Initiated the core product idea of creating an online photobooth platform that allows users to upload photos, customize them with various frames, and print physical memories at nearby printing machines.",
      "Led the overall UI/UX design process, from concept development and user flows to high-fidelity interface design.",
      "Designed all major application screens, including photo uploads, frame selection, photo previews, payment, QR code redemption, printing locations, and user profiles.",
      "Developed a consistent design system with a playful visual identity, friendly mascot, and intuitive navigation to create a seamless user experience.",
    ],
    stack: ["Figma", "Design System", "Mobile UI", "Mascot"],
  },
  {
    id: "angin",
    cat: "code",
    tag: "Programming",
    title: "ANGIN BNB",
    tagline: "Hotel & room booking website",
    bg: "linear-gradient(135deg,#ffe0e3,#fff4f4)",
    imgs: ["projects/angin/1", "projects/angin/2", "projects/angin/3"],
    wide: true,
    short:
      "An Airbnb-inspired hotel and room booking website built as a laboratory mini programming project.",
    points: [
      "Developed a hotel and room booking website inspired by Airbnb as part of a laboratory mini programming project.",
      "Built a user-friendly interface that allows users to explore accommodations, browse room options, and make bookings.",
      "Implemented the front-end using HTML, CSS, and JavaScript, with PHP and SQL for server-side processes and database management.",
      "Applied web development and database integration skills to build a functional and user-friendly accommodation booking system.",
    ],
    stack: ["HTML", "CSS", "JavaScript", "PHP", "SQL"],
  },
  {
    id: "dash",
    cat: "data",
    tag: "Data Analysis",
    title: "Data Modeling & Dashboard",
    tagline: "Interactive Excel dashboard",
    bg: "linear-gradient(135deg,#dff7d8,#d8f0ff)",
    imgs: ["projects/dash/1", "projects/dash/2"],
    wide: true,
    short:
      "An interactive Excel dashboard that turns lab and lecture data into clear, decision-ready insights.",
    points: [
      "Developed an interactive Excel dashboard to visualize and analyze data collected from laboratory and lecture activities for a university course.",
      "Performed data modeling and data processing to organize raw data into meaningful information.",
      "Created interactive charts, graphs, and filters to identify patterns, compare results, and monitor key performance indicators.",
      "Analyzed historical data to identify trends and support data-driven predictions and insights.",
      "Transformed complex datasets into clear visual reports to support easier interpretation and decision-making.",
    ],
    stack: ["Excel", "Data Modeling", "Dashboard", "KPI"],
  },
  {
    id: "borobudur",
    cat: "photo",
    tag: "Photography",
    title: "Lampion Waisak Borobudur 2026",
    tagline: "Waisak Celebration at Borobudur Temple",
    bg: "linear-gradient(135deg,#1b1f3b,#ff9f1c)",
    imgs: ["photos/borobudur/1"],
    cover: true,
    gallery: GALLERY_BOROBUDUR,
    short:
      "Documentation of the Waisak celebration at Borobudur, from the procession of monks and devotees to the night of floating lanterns.",
    points: [
      "Captured the Waisak celebration at Borobudur Temple, covering the procession, the gathering of monks and devotees, and the atmosphere around the temple.",
      "Documented the lantern release at night, focusing on emotion, light, and the shared moment of the people taking part.",
    ],
    stack: ["Event", "Documentary", "Night Photography"],
  },
  {
    id: "kathina",
    cat: "photo",
    tag: "Photography",
    title: "Perayaan Kathina 2025/2569 B.E",
    tagline: "KMBD Binus University",
    bg: "linear-gradient(135deg,#f6c453,#b45f06)",
    imgs: ["photos/kathina/3"],
    cover: true,
    gallery: GALLERY_KATHINA,
    short:
      "Event photography of the Kathina celebration held by KMBD Binus University, from the ceremony to the offerings.",
    points: [
      "Documented the Kathina celebration organized by KMBD Binus University, from the opening and ceremony to the offering moments.",
      "Captured the people, details, and atmosphere of the event to tell its story through photos.",
    ],
    stack: ["Event", "Documentary", "Indoor Photography"],
  },
  {
    id: "malam",
    cat: "photo",
    tag: "Photography",
    title: "Malam Keakraban KMBD 2025",
    tagline: "Event Photography · KMBD 2025",
    bg: "linear-gradient(135deg,#0f1b2d,#3a5a40)",
    imgs: ["photos/malam/1"],
    cover: true,
    gallery: GALLERY_MALAM,
    short:
      "Photo documentation of the KMBD 2025 Malam Keakraban, from the games and performances to the candid moments at night.",
    points: [
      "Documented the Malam Keakraban of KMBD 2025, covering games, performances, and the hosts on stage.",
      "Captured candid, energetic moments of the participants in both daylight and low-light night settings.",
    ],
    stack: ["Event", "Documentary", "Low-light"],
  },
  {
    id: "pmb",
    cat: "photo",
    tag: "Photography",
    title: "PMB WP KMBD",
    tagline: "Event Photography · KMBD",
    bg: "linear-gradient(135deg,#2b2d42,#8d99ae)",
    imgs: ["photos/pmb/1"],
    cover: true,
    gallery: GALLERY_PMB,
    short:
      "Event photography of the PMB WP KMBD, capturing the games, group energy, and performances of the day.",
    points: [
      "Documented the PMB WP KMBD event, from team challenges and games to group moments and performances.",
      "Captured the energy and expressions of participants through candid and wide crowd shots.",
    ],
    stack: ["Event", "Documentary", "Candid"],
  },
  {
    id: "studio",
    cat: "photo",
    tag: "Photography",
    title: "Photoshoot Studio",
    tagline: "Studio Portrait Photography",
    bg: "linear-gradient(135deg,#e9ecef,#adb5bd)",
    imgs: ["photos/studio/1"],
    cover: true,
    gallery: GALLERY_STUDIO,
    short:
      "A studio photoshoot series of individual, duo, and group portraits with playful concepts and styling.",
    points: [
      "Shot studio portraits of individuals, pairs, and groups against a clean backdrop.",
      "Worked with simple props and styling to bring out each person's personality in a playful, creative look.",
    ],
    stack: ["Studio", "Portrait", "Group Photo"],
  },
  {
    id: "funrun",
    cat: "photo",
    tag: "Photography",
    title: "Binus Fun Run 2025",
    tagline: "Event Photography · BINUS University",
    bg: "linear-gradient(135deg,#1d4ed8,#38bdf8)",
    imgs: ["photos/funrun/1"],
    cover: true,
    gallery: GALLERY_FUNRUN,
    short:
      "Event photography of Binus Fun Run 2025, from the start line and runners to the live performances on stage.",
    points: [
      "Documented Binus Fun Run 2025, covering the start, the runners, and the crowd.",
      "Captured the stage performances and the lively atmosphere of the event.",
    ],
    stack: ["Event", "Sports", "Live Performance"],
  },
  {
    id: "volunteer",
    cat: "photo",
    tag: "Photography",
    title: "Volunteer",
    tagline: "Volunteer Event Photography",
    bg: "linear-gradient(135deg,#7f1d1d,#f1c40f)",
    imgs: ["photos/volunteer/2"],
    cover: true,
    gallery: GALLERY_VOLUNTEER,
    short:
      "Photo documentation of events as a volunteer photographer, including ceremonies, speakers, and award moments.",
    points: [
      "Served as a volunteer photographer, documenting official ceremonies and formal events.",
      "Captured speakers, performances, and award moments to support the event's documentation.",
    ],
    stack: ["Volunteer", "Ceremony", "Documentation"],
  },
  {
    id: "yearbook-film",
    cat: "video",
    tag: "Videography",
    title: "Short Movie — Yearbook KMBD 2025",
    tagline: "Short Movie",
    bg: "linear-gradient(135deg,#7f1d1d,#ef4444)",
    imgs: ["videos/yearbook"],
    cover: true,
    link: "https://youtu.be/vnd83KlSH6g",
    linkLabel: "Watch on YouTube",
    short: "A short movie for the KMBD 2025 Yearbook.",
    points: [],
    stack: ["Short Movie", "Yearbook", "KMBD 2025"],
  },
  {
    id: "welcoming-reels",
    cat: "video",
    tag: "Videography",
    title: "Welcoming KMBD 2026",
    tagline: "Instagram Reels",
    bg: "linear-gradient(135deg,#7c3aed,#f472b6,#fb923c)",
    imgs: ["videos/welcoming"],
    cover: true,
    link: "https://www.instagram.com/reel/DdqsmhzzQPN/",
    linkLabel: "Watch on Instagram",
    short: "A welcoming reels video for KMBD 2026.",
    points: [],
    stack: ["Reels", "Welcoming", "KMBD 2026"],
  },
];

const EXPERIENCES = [
  {
    id: "mentor",
    cat: "pro",
    tag: "Professional",
    title: "Mentor — SASC Scholarship Awardee",
    org: "Odd Semester 2026",
    imgs: ["experience/mentor/1"],
    metrics: ["Mentoring"],
    points: [
      "Provided academic guidance, study support, and practical assistance to Information Systems students throughout their university journey.",
      "Helped students identify academic challenges, explore solutions, and access relevant learning resources.",
      "Fostered a supportive learning environment through regular communication and direct interaction to build students' confidence and independence.",
    ],
  },
  {
    id: "fyp",
    cat: "org",
    tag: "Organizational",
    title: "Freshmen Leader & Freshmen Partner",
    org: "FYP 2025",
    imgs: ["experience/fyp/1", "experience/fyp/2", "experience/fyp/3"],
    metrics: ["13 Freshmen", "18 Trees"],
    points: [
      "Guided 13 freshmen leaders and supported 200+ incoming Information Systems freshmen in adapting to university life.",
      "Helped new students understand academic expectations, campus procedures, and build connections with their peers.",
      "Coordinated group activities, discussions, and orientation programs to encourage engagement, collaboration, and a strong sense of community.",
      "Organized a tree-planting initiative involving 18 trees in Kelurahan Panunggangan Timur, collaborating with student groups from Alam Sutera and Kemanggisan.",
    ],
  },
  {
    id: "regional",
    cat: "org",
    tag: "Organizational",
    title: "Regional President @Alam Sutera",
    org: "Klub Seni Fotografi Bina Nusantara",
    imgs: ["experience/regional/1", "experience/regional/2"],
    metrics: ["65 members", "75+ new members", "175+ network"],
    points: [
      "Led a 65-member regional team and coordinated 14 staff and volunteers to strengthen member engagement and organizational performance.",
      "Expanded regional membership by 75+ members while maintaining the club's growth and continuity.",
      "Coordinated activities across 2 regions with a network of 175+ members, fostering teamwork, stronger connections, and sustainable organizational growth.",
    ],
  },
  {
    id: "kathina",
    cat: "org",
    tag: "Organizational",
    title: "Coordinator of Design & Documentation",
    org: "Perayaan Kathina 2569 B.E / 2026 — KMBD",
    imgs: [
      "experience/kathina/1",
      "experience/kathina/2",
      "experience/kathina/3",
    ],
    metrics: ["Design Team", "Documentation"],
    points: [
      "Coordinated the design team and managed visual materials for Perayaan Kathina 2569 B.E. / 2026, organized by KMBD.",
      "Ensured visual consistency and alignment with the event's theme and identity across promotional materials and designs.",
      "Prepared and organized event documentation to support the planning process and ensure important materials were completed on time.",
      "Strengthened team coordination, communication, design management, and documentation skills through event preparation and execution.",
    ],
  },
  {
    id: "narasi",
    cat: "org",
    tag: "Organizational",
    title: "Coordinator of Photoshoot Division",
    org: "NARASI 2025 — Klub Seni Fotografi Bina Nusantara",
    imgs: ["experience/narasi/1", "experience/narasi/2", "experience/narasi/3"],
    metrics: ["Photoshoot", "Creative Direction"],
    points: [
      "Led the planning and execution of photoshoot activities for NARASI 2025, coordinating photographers, models, dancers, and supporting team members.",
      "Collaborated with STAMANARA dancers as models to bring creative concepts to life through photography.",
      "Directed photoshoot sessions to capture dynamic movement, expressions, and body composition in line with the creative vision.",
      "Managed on-site operations and ensured the final visual materials reflected the exhibition's artistic direction and creative identity.",
    ],
  },
  {
    id: "bench",
    cat: "org",
    tag: "Organizational",
    title: "Project Manager of Benchmarking 2025",
    org: "Klub Seni Fotografi Bina Nusantara",
    imgs: [
      "experience/bench/1",
      "experience/bench/2",
      "experience/bench/3",
      "experience/bench/4",
    ],
    metrics: ["3 universities", "FGD", "Photo hunt"],
    points: [
      "Participated in an inter-university photography benchmarking event involving KLIFONARA, PHPC (Universitas Pelita Harapan), and OBSCURA (Universitas Multimedia Nusantara).",
      "Engaged in knowledge sharing and group discussions (FGD) to exchange insights, creative perspectives, and organizational practices among photography communities.",
      "Collaborated with members from different universities in team-based photo hunting activities around BINUS Alam Sutera campus.",
      "Strengthened networking, teamwork, and creative collaboration while exploring diverse photography styles under the theme “One Vision of Lenses.”",
    ],
  },
  {
    id: "kmbd",
    cat: "org",
    tag: "Organizational",
    title: "Activist, Creative Media & Art Division",
    org: "KMBD",
    imgs: ["experience/kmbd/1"],
    metrics: [],
    points: [
      "Contributed to KMBD's visual identity by creating photography and design materials for various Buddhist community activities and events, supporting promotional efforts and event documentation through creative visual content.",
    ],
  },
  {
    id: "klif",
    cat: "org",
    tag: "Organizational",
    title: "Activist, Event Division",
    org: "KLIFONARA",
    imgs: ["experience/klifonara/1"],
    metrics: ["Events", "Photo Trials"],
    points: [
      "Coordinated photography hunting events and bonding activities for KLIFONARA members, including Photo Trials, to encourage hands-on photography practice, strengthen teamwork, and foster stronger connections within the photography community.",
    ],
  },
];

const CERTS = [
  "RAP-ID Certification",
  "Certificate of Completion",
  "Certificate of Appreciation",
  "Professional Office (Solution C.1)",
  "Advanced English (C.1)",
  "Market Research & Business Communication (C.1)",
  "Dean's List Certificate",
  "Sertifikat",
].map((t, i) => ({ title: t, src: `assets/certificates/${i + 1}.webp` }));

/* =========================================================
   HELPERS
   ========================================================= */
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const img = (n, cls = "", alt = "") =>
  `<img src="assets/${n}.webp" class="${cls}" alt="${alt}" loading="lazy">`;
const toast = (msg) => {
  const t = $("#toast");
  t.textContent = msg;
  t.classList.add("show");
  clearTimeout(toast.t);
  toast.t = setTimeout(() => t.classList.remove("show"), 2200);
};

/* NAV */
const burger = $("#burger"),
  links = $("#navLinks");
burger.onclick = () => {
  burger.classList.toggle("open");
  links.classList.toggle("open");
};
$$("#navLinks a").forEach(
  (a) =>
    (a.onclick = () => {
      burger.classList.remove("open");
      links.classList.remove("open");
    }),
);
const spy = new IntersectionObserver(
  (es) =>
    es.forEach((e) => {
      if (e.isIntersecting) {
        $$("#navLinks a").forEach((a) =>
          a.classList.toggle("active", a.dataset.spy === e.target.id),
        );
      }
    }),
  { rootMargin: "-45% 0px -50% 0px" },
);
["profile", "projects", "experience", "certificate", "contact"].forEach((id) =>
  spy.observe($("#" + id)),
);

addEventListener(
  "scroll",
  () => {
    const h = document.documentElement,
      y = h.scrollTop;
    $("#progress").style.width =
      (y / (h.scrollHeight - h.clientHeight)) * 100 + "%";
    $("#nav").classList.toggle("scrolled", y > 30);
    $("#toTop").classList.toggle("show", y > 600);
  },
  { passive: true },
);
$("#toTop").onclick = () => scrollTo({ top: 0, behavior: "smooth" });

/* REVEAL + COUNTERS */
const io = new IntersectionObserver(
  (es) =>
    es.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("in");
        io.unobserve(e.target);
      }
    }),
  { threshold: 0.12 },
);
$$(".reveal").forEach((el) => io.observe(el));

const counters = new IntersectionObserver(
  (es) =>
    es.forEach((e) => {
      if (!e.isIntersecting) return;
      counters.unobserve(e.target);
      const el = e.target,
        end = parseFloat(el.dataset.count),
        dec = +el.dataset.dec || 0,
        suf = el.dataset.suffix || "";
      const t0 = performance.now();
      (function step(t) {
        const p = Math.min((t - t0) / 1400, 1),
          v = end * (1 - Math.pow(1 - p, 3));
        el.textContent = v.toFixed(dec) + suf;
        if (p < 1) requestAnimationFrame(step);
      })(t0);
    }),
  { threshold: 0.5 },
);
$$("[data-count]").forEach((el) => counters.observe(el));

/* HERO PHOTO TILT */
const tilt = $("#tiltPhoto");
if (matchMedia("(hover:hover)").matches) {
  tilt.addEventListener("mousemove", (e) => {
    const r = tilt.getBoundingClientRect(),
      x = (e.clientX - r.left) / r.width - 0.5,
      y = (e.clientY - r.top) / r.height - 0.5;
    tilt.style.transform = `perspective(900px) rotateY(${x * 10}deg) rotateX(${-y * 8}deg)`;
  });
  tilt.addEventListener("mouseleave", () => (tilt.style.transform = ""));
}

/* SKILLS */
function renderSkills(k) {
  const box = $("#skillChips");
  if (k === "tools") {
    box.className = "logo-grid";
    box.innerHTML = SKILLS.tools
      .map(
        (t, i) =>
          `<div class="logo-tile${t.w ? " wide" : ""}" style="animation-delay:${i * 40}ms" title="${t.n}"><img src="assets/tools/${t.f}.webp" alt="${t.n}" loading="lazy" onerror="this.style.display='none';this.parentElement.classList.add('no-logo')"><span>${t.n}</span></div>`,
      )
      .join("");
  } else {
    box.className = "chips";
    box.innerHTML = SKILLS[k]
      .map(
        (s, i) =>
          `<span class="chip" style="animation-delay:${i * 45}ms">${s}</span>`,
      )
      .join("");
  }
}
$$("#skillTabs .tab").forEach(
  (b) =>
    (b.onclick = () => {
      $$("#skillTabs .tab").forEach((x) =>
        x.classList.toggle("active", x === b),
      );
      renderSkills(b.dataset.skill);
    }),
);
renderSkills("tech");

/* PROJECTS */
function renderProjects(f = "all") {
  const list = PROJECTS.filter((p) => f === "all" || p.cat === f);
  if (!list.length) {
    $("#projGrid").innerHTML = `<div class="empty-state">
      <div class="empty-icon">🎬</div>
      <h3>Coming soon</h3>
      <p>Videography projects will be added here.</p></div>`;
    return;
  }
  $("#projGrid").innerHTML = list
    .map((p, i) => {
      const media = p.imgs
        ? p.imgs
            .slice(0, p.wide || p.cover ? 1 : 3)
            .map((n, j) =>
              img(
                n,
                (p.cover ? "cover " : p.wide ? "wide " : "") +
                  (j === 1 ? "m2" : ""),
                p.title,
              ),
            )
            .join("")
        : `<span style="font-size:6rem;align-self:center;margin:auto">${p.icon}</span>`;
      return `<article class="p-card" style="animation-delay:${i * 80}ms" data-id="${p.id}" tabindex="0">
      <div class="p-media${p.cover ? " cv" : ""}${p.link ? " vid" : ""}" style="background:${p.bg}"><span class="tag">${p.tag}</span>${media}</div>
      <div class="p-body"><h3>${p.title}</h3><div class="tl">${p.tagline}</div><p>${p.short}</p>
      <div class="metrics">${p.stack
        .slice(0, 3)
        .map((s) => `<span class="metric">${s}</span>`)
        .join("")}</div>
      <span class="more">${p.gallery ? "View gallery" : p.link ? p.linkLabel : "View details"}</span></div></article>`;
    })
    .join("");
  $$("#projGrid .p-card").forEach((c) => {
    c.onclick = () => openProject(c.dataset.id);
    c.onkeydown = (e) => {
      if (e.key === "Enter") openProject(c.dataset.id);
    };
  });
}
$$("#projTabs .tab").forEach(
  (b) =>
    (b.onclick = () => {
      $$("#projTabs .tab").forEach((x) =>
        x.classList.toggle("active", x === b),
      );
      renderProjects(b.dataset.f);
    }),
);
renderProjects();

/* EXPERIENCE */
function renderExp() {
  const list = EXPERIENCES;
  $("#expGrid").innerHTML = list
    .map(
      (e, i) => `
    <article class="p-card e-card" style="animation-delay:${i * 70}ms" data-id="${e.id}" tabindex="0">
      <div class="p-media">${img(e.imgs[0], "photo", e.title)}</div>
      <div class="p-body"><div class="e-org">${e.org}</div><h3>${e.title}</h3>
      <div class="metrics">${e.metrics.map((m) => `<span class="metric">${m}</span>`).join("")}</div>
      <span class="more">Read more</span></div></article>`,
    )
    .join("");
  $$("#expGrid .p-card").forEach((c) => {
    c.onclick = () => openExp(c.dataset.id);
    c.onkeydown = (e) => {
      if (e.key === "Enter") openExp(c.dataset.id);
    };
  });
}
renderExp();

/* MODAL */
const modal = $("#modal");
function openModal(html) {
  $("#modalBody").innerHTML = html;
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  modal.querySelector(".modal-box").scrollTop = 0;
}
function closeModal() {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}
$("#modalX").onclick = closeModal;
modal.addEventListener("click", (e) => {
  if (e.target === modal) closeModal();
});

function openGallery(p) {
  openModal(`<div class="m-hero cover" style="background:${p.bg}">${img(p.imgs[0], "", p.title)}</div>
    <div class="m-body"><span class="metric">${p.tag}</span>
    <h3>${p.title}</h3><div class="tl">${p.tagline}</div>
    <ul>${p.points.map((x) => `<li>${x}</li>`).join("")}</ul>
    <div class="stack">${p.stack.map((t) => `<span>${t}</span>`).join("")}</div>
    <h4 class="gal-title">Gallery <small>${p.gallery.length} photos · click a photo to enlarge</small></h4>
    <div class="gallery">${p.gallery
      .map(
        (g, i) =>
          `<button class="g-item" data-i="${i}" aria-label="Open photo ${i + 1}"><img src="${g.src}" alt="${g.title}" loading="lazy" /></button>`,
      )
      .join("")}</div></div>`);
  $$(".gallery .g-item").forEach(
    (b) => (b.onclick = () => openLightbox(p.gallery, +b.dataset.i)),
  );
}
function openProject(id) {
  const p = PROJECTS.find((x) => x.id === id);
  if (p.gallery) return openGallery(p);
  if (p.link) return window.open(p.link, "_blank", "noopener");
  const hero = p.imgs
    ? p.imgs.map((n) => img(n, "", p.title)).join("")
    : `<span style="font-size:8rem;margin:auto">${p.icon}</span>`;
  openModal(`<div class="m-hero${p.cover ? " cover" : ""}" style="background:${p.bg}">${hero}</div>
    <div class="m-body"><span class="metric">${p.tag}</span>
    <h3>${p.title}</h3><div class="tl">${p.tagline}</div>
    <ul>${p.points.map((x) => `<li>${x}</li>`).join("")}</ul>
    <div class="stack">${p.stack.map((s) => `<span>${s}</span>`).join("")}</div></div>`);
}
function openExp(id) {
  const e = EXPERIENCES.find((x) => x.id === id);
  openModal(`<div class="m-hero photos">${e.imgs.map((n) => img(n, "", e.title)).join("")}</div>
    <div class="m-body">
    <h3>${e.title}</h3><div class="tl">${e.org}</div>
    <ul>${e.points.map((x) => `<li>${x}</li>`).join("")}</ul>
    <div class="stack">${e.metrics.map((s) => `<span>${s}</span>`).join("")}</div></div>`);
  $$(".m-hero.photos img").forEach(
    (im) =>
      (im.onclick = () => openLightbox([{ src: im.src, title: e.title }], 0)),
  );
}

/* LIGHTBOX */
const lb = $("#lightbox");
let lbList = [],
  lbI = 0;
function showLb() {
  const c = lbList[lbI];
  $("#lbImg").src = c.src;
  $("#lbCap").textContent = c.title;
  const multi = lbList.length > 1;
  $("#lbPrev").style.display = $("#lbNext").style.display = multi ? "" : "none";
}
function openLightbox(list, i) {
  lbList = list;
  lbI = i;
  showLb();
  lb.classList.add("open");
  lb.setAttribute("aria-hidden", "false");
}
function closeLb() {
  lb.classList.remove("open");
  lb.setAttribute("aria-hidden", "true");
}
const step = (d) => {
  lbI = (lbI + d + lbList.length) % lbList.length;
  showLb();
};
$("#lbX").onclick = closeLb;
$("#lbPrev").onclick = () => step(-1);
$("#lbNext").onclick = () => step(1);
lb.addEventListener("click", (e) => {
  if (e.target === lb) closeLb();
});
addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeLb();
    closeModal();
  }
  if (lb.classList.contains("open")) {
    if (e.key === "ArrowLeft") step(-1);
    if (e.key === "ArrowRight") step(1);
  }
});

/* CERTIFICATES + CV */
$("#certGrid").innerHTML = CERTS.map(
  (c, i) => `
  <figure class="cert reveal" data-i="${i}"><img src="${c.src}" alt="${c.title}" loading="lazy"><span>${c.title}</span></figure>`,
).join("");
$$(".cert").forEach((el) => {
  io.observe(el);
  el.onclick = () => openLightbox(CERTS, +el.dataset.i);
});
$("#cvOpen").onclick = () =>
  openLightbox(
    [{ src: "assets/cv/cv.webp", title: "Curriculum Vitae — Vegen Fendianto" }],
    0,
  );

/* CONTACT */
/* Gmail card -> opens a new email addressed to MAIL_TO, depending on the device:
   desktop = Gmail on the web, Android = default mail app (usually Gmail),
   iPhone/iPad = Gmail app (falls back to the default mail app) */
const MAIL_TO = "vfendianto@gmail.com";
const MAIL_SUBJECT = "Hello Vegen";
$("#gmailLink").onclick = (e) => {
  const ua = navigator.userAgent;
  const isAndroid = /Android/i.test(ua);
  const isIOS =
    /iPhone|iPad|iPod/i.test(ua) ||
    (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
  const subject = encodeURIComponent(MAIL_SUBJECT);
  if (isAndroid) return; // let the mailto: link open the mail app's compose screen
  e.preventDefault();
  if (isIOS) {
    location.href = `googlegmail:///co?to=${MAIL_TO}&subject=${subject}`;
    setTimeout(() => {
      if (!document.hidden)
        location.href = `mailto:${MAIL_TO}?subject=${subject}`;
    }, 1200);
  } else {
    window.open(
      `https://mail.google.com/mail/?view=cm&fs=1&to=${MAIL_TO}&su=${subject}`,
      "_blank",
      "noopener",
    );
  }
};

/* Send form -> WhatsApp (change the number here if needed) */
const WA_NUMBER = "6287808086633";
$("#mailForm").onsubmit = (e) => {
  e.preventDefault();
  const n = $("#fName").value.trim(),
    em = $("#fEmail").value.trim(),
    msg = $("#fMsg").value.trim();
  const text = `Hello Vegen, I'm ${n}.\n\n${msg}${em ? `\n\nMy email: ${em}` : ""}`;
  window.open(
    `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`,
    "_blank",
    "noopener",
  );
  toast("Opening WhatsApp…");
};
$("#yr").textContent = new Date().getFullYear();