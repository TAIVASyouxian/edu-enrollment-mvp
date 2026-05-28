const SCHOOL_PROFILE = {
  schoolName: "新北市私立快樂地幼兒園",
  shortName: "快樂地幼兒園",
  tagline: "讓孩子在安心陪伴中，建立生活節奏與學習自信",
  intro:
    "快樂地幼兒園位於新北市樹林區，提供穩定、溫暖且重視生活常規的幼兒學習環境。歡迎家長線上預約參觀，我們將依孩子年齡與需求安排說明。",
  parentPromise:
    "選擇幼兒園需要看見孩子是否能安心適應。家長可以先了解園所環境、生活作息、課程方向與收費參考，再預約到園參觀。",
  location: "新北市樹林區",
  type: "私立幼兒園",
  capacity: "核定人數 81人",
  tuitionReference: "114學年度月收費 $16,167",
  violationRecord: "無裁罰紀錄",
  phone: "(02)8685-8888",
  lineLabel: "@happyland-demo",
  lineUrl: "https://line.me/R/ti/p/@school-line",
  // Future Google Forms setup:
  // 1. Create official Google Forms for visit booking and enrollment inquiry.
  // 2. Paste the real published form URLs below.
  // 3. Set useGoogleFormsForPublicSubmissions to true so public CTAs open Google Forms.
  googleVisitFormUrl: "https://forms.gle/3tC6rLtGcDry6oGE9",
  googleInquiryFormUrl: "https://forms.gle/GPNRqNYPSJWPJr1x5",
  useGoogleFormsForPublicSubmissions: true,
  address: "新北市樹林區八德街118號1、2、3樓及120號1樓",
  officeHours: "請填入園所服務時間",
  adminPin: "1234",
  privacyNotice:
    "本頁僅用於預約參觀與報名諮詢，所填資料僅供園方聯繫使用，不會公開顯示。"
};

const SCHOOL_CONTENT = {
  programs: [
    {
      name: "生活常規",
      summary: "重視入園、用餐、盥洗、午休與收拾整理等日常節奏。",
      details: "透過清楚而溫和的引導，讓孩子慢慢建立自理能力、秩序感與團體生活習慣。"
    },
    {
      name: "安全照顧",
      summary: "以穩定照顧與清楚動線，陪伴孩子安心進入園所生活。",
      details: "協助孩子在日常作息、團體互動與探索活動中，建立安全感與學習信心。"
    },
    {
      name: "主題活動",
      summary: "以故事、操作、觀察與遊戲活動，引導孩子探索生活經驗。",
      details: "讓孩子在適齡活動中練習語言表達、觀察力、同儕合作與問題解決。"
    },
    {
      name: "親師溝通",
      summary: "讓家長能先了解園所特色，並在預約後由園方依需求說明。",
      details: "透過線上表單收集孩子年齡、參觀需求與家長關心事項，減少電話反覆詢問。"
    },
    {
      name: "學習適應",
      summary: "關注第一次入園、轉園與團體生活適應。",
      details: "依孩子年齡與狀態安排說明，協助家長先理解適應期可能需要的陪伴。"
    }
  ],
  features: [
    ["安", "位於新北市樹林區", "家長可先在線上了解園所位置、基本資訊與參觀方式，再安排到園參觀。"],
    ["序", "重視生活常規", "透過穩定作息、日常照顧與團體生活，引導孩子建立生活節奏與安全感。"],
    ["學", "適齡主題活動", "以幼兒發展為基礎，安排故事、操作、遊戲與探索活動，陪孩子累積學習信心。"],
    ["訊", "預約資訊更清楚", "家長可先留下孩子年齡與關心事項，園方依需求安排說明，減少電話反覆詢問。"]
  ],
  routine: [
    ["08:00", "入園與晨間安定", "以親切問候、物品整理與簡單活動，協助孩子平穩開始一天。"],
    ["10:00", "主題活動與小組探索", "透過故事、操作與互動遊戲，培養語言、觀察與合作能力。"],
    ["12:00", "用餐、午休與生活照顧", "重視用餐禮儀、盥洗、午休與自理能力，陪孩子建立規律生活。"],
    ["15:30", "延伸活動與整理回顧", "透過分享、作品整理與簡單回顧，讓孩子練習表達與收拾。"]
  ],
  photos: [
    // Later: replace imagePath with real public photo paths, e.g. "images/exterior.jpg".
    { title: "園所外觀照片", text: "可放置園所入口或外觀照片，協助家長確認到訪位置。", imagePath: "" },
    { title: "教室環境照片", text: "可放置教室採光、收納與孩子活動動線照片。", imagePath: "" },
    { title: "活動照片", text: "可放置主題活動、團體互動或日常作息照片。", imagePath: "" },
    { title: "閱讀角落照片", text: "可放置閱讀區、故事共讀或安靜角落照片。", imagePath: "" },
    { title: "孩子作品照片", text: "可放置作品牆、手作成果或學習歷程展示照片。", imagePath: "" }
  ],
  signageFeatures: [
    ["看", "先了解園所特色", "掃描 QR Code 看位置、課程方向與收費參考。"],
    ["約", "預約到園參觀", "填寫孩子年齡與參觀需求，由園方協助安排。"],
    ["問", "線上填寫入園諮詢", "還不確定也沒關係，先留下需求再由園方聯繫。"]
  ]
};

const STORAGE_KEYS = {
  visits: "happyland_preschool_mvp_visit_bookings_v3",
  inquiries: "happyland_preschool_mvp_enrollment_inquiries_v3",
  admin: "education_mvp_admin_ok",
  seeded: "happyland_preschool_mvp_seeded_demo_data_v3",
  lastSubmission: "happyland_preschool_mvp_last_submission"
};

const programs = [...SCHOOL_CONTENT.programs.map((program) => program.name), "其他"];
const statuses = ["新提交", "已聯繫", "已預約參觀", "已參觀", "等候回覆", "已報名", "暫不考慮"];
const concerns = ["收費方式", "接送安排", "環境安全", "孩子適應", "作息安排", "師資照顧", "課程內容", "其他"];
const serviceNeeds = ["幼兒園入園諮詢", "生活常規與適應", "主題活動了解", "親師溝通方式", "其他"];
const enrollmentTimes = ["立即", "1 個月內", "3 個月內", "下學期", "尚未確定"];
const visitPeriods = ["上午", "下午", "傍晚", "可由園方建議"];
const yesNoOptions = ["尚未就讀", "已就讀其他幼兒園", "其他照顧安排"];
const statusDescriptions = {
  新提交: "園方已收到資料，尚未聯繫",
  已聯繫: "園方已嘗試聯繫或已完成初步聯繫",
  已預約參觀: "已確認參觀時間",
  已參觀: "已完成到園參觀",
  等候回覆: "園方已聯繫，等待家長回覆或補充資料",
  已報名: "已進入正式報名流程",
  暫不考慮: "家長暫時不安排後續"
};

const SAMPLE_VISITS = [
  {
    id: "demo-visit-1",
    referenceNumber: "VISIT-20260527-A1B2",
    submittedAt: "2026/5/27 09:18:00",
    status: "新提交",
    parentName: "示範家長 A",
    phone: "0900-000-001",
    lineId: "demo-parent-a",
    childName: "示範孩子 A",
    childAge: "5",
    program: "學習適應",
    expectedEnrollment: "1 個月內",
    hasCurrentKindergarten: "尚未就讀",
    visitDate: "2026-06-03",
    visitTime: "上午",
    currentSchool: "示範：目前在家照顧",
    concerns: ["環境安全", "孩子適應", "師資照顧"],
    notes: "孩子比較慢熟，希望參觀時了解新生適應安排。",
    priority: "高",
    internalNotes: "示範備註：優先介紹幼兒園作息與新生陪伴方式。"
  },
  {
    id: "demo-visit-2",
    referenceNumber: "VISIT-20260526-C3D4",
    submittedAt: "2026/5/26 16:42:00",
    status: "已預約參觀",
    parentName: "示範家長 B",
    phone: "0900-000-002",
    lineId: "demo-parent-b",
    childName: "示範孩子 B",
    childAge: "4",
    program: "生活常規",
    expectedEnrollment: "3 個月內",
    hasCurrentKindergarten: "已就讀其他幼兒園",
    visitDate: "2026-06-01",
    visitTime: "傍晚",
    currentSchool: "示範：目前就讀其他幼兒園",
    concerns: ["作息安排", "收費方式"],
    notes: "想了解轉園後的適應方式與參觀流程。",
    priority: "中",
    internalNotes: "示範備註：已電話確認，6/1 17:00 安排園方人員接待。"
  }
];

const SAMPLE_INQUIRIES = [
  {
    id: "demo-inquiry-1",
    referenceNumber: "INQ-20260527-E5F6",
    submittedAt: "2026/5/27 11:05:00",
    status: "已聯繫",
    parentName: "示範家長 C",
    phone: "0900-000-003",
    lineId: "demo-parent-c",
    childName: "示範孩子 C",
    childAge: "6",
    program: "主題活動",
    expectedEnrollment: "1 個月內",
    hasCurrentKindergarten: "尚未就讀",
    requiredService: "主題活動了解",
    concerns: ["課程內容", "作息安排"],
    questions: "想了解平日活動安排、生活常規與收費參考。",
    consent: "on",
    priority: "高",
    internalNotes: "示範備註：待提供參觀時段與園所簡介。"
  },
  {
    id: "demo-inquiry-2",
    referenceNumber: "INQ-20260525-7A8B",
    submittedAt: "2026/5/25 14:30:00",
    status: "新提交",
    parentName: "示範家長 D",
    phone: "0900-000-004",
    lineId: "",
    childName: "示範孩子 D",
    childAge: "3",
    program: "親師溝通",
    expectedEnrollment: "3 個月內",
    hasCurrentKindergarten: "尚未就讀",
    requiredService: "生活常規與適應",
    concerns: ["孩子適應", "師資照顧"],
    questions: "想先了解孩子第一次入園時，園方如何協助適應。",
    consent: "on",
    priority: "中",
    internalNotes: ""
  }
];

let adminTab = "visits";
let selectedRecord = null;
let signageTimer = null;

function seedDemoDataIfNeeded() {
  if (localStorage.getItem(STORAGE_KEYS.seeded) === "true") return;
  if (!localStorage.getItem(STORAGE_KEYS.visits)) writeStore(STORAGE_KEYS.visits, SAMPLE_VISITS);
  if (!localStorage.getItem(STORAGE_KEYS.inquiries)) writeStore(STORAGE_KEYS.inquiries, SAMPLE_INQUIRIES);
  localStorage.setItem(STORAGE_KEYS.seeded, "true");
}

function resetDemoData() {
  writeStore(STORAGE_KEYS.visits, SAMPLE_VISITS);
  writeStore(STORAGE_KEYS.inquiries, SAMPLE_INQUIRIES);
  localStorage.setItem(STORAGE_KEYS.seeded, "true");
  selectedRecord = null;
  render(adminPage());
}

function readStore(key) {
  try {
    return JSON.parse(localStorage.getItem(key) || "[]");
  } catch {
    return [];
  }
}

function writeStore(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function uid() {
  return `${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function nowText() {
  return new Date().toLocaleString("zh-TW", { hour12: false });
}

function referenceDate() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  return `${year}${month}${day}`;
}

function generateReference(prefix) {
  const token = Math.random().toString(16).slice(2, 6).toUpperCase();
  return `${prefix}-${referenceDate()}-${token}`;
}

function escapeHtml(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function route() {
  return location.hash.replace("#", "") || "/";
}

function routePath() {
  return route().split("?")[0] || "/";
}

function routeParams() {
  return new URLSearchParams(route().split("?")[1] || "");
}

function setRoute(path) {
  location.hash = path;
}

function publicVisitLink(programName = "") {
  if (SCHOOL_PROFILE.useGoogleFormsForPublicSubmissions) {
    return {
      href: SCHOOL_PROFILE.googleVisitFormUrl,
      target: "_blank",
      rel: "noreferrer"
    };
  }
  return {
    href: programName ? `#/visit?program=${encodeURIComponent(programName)}` : "#/visit",
    target: "",
    rel: ""
  };
}

function publicInquiryLink(programName = "") {
  if (SCHOOL_PROFILE.useGoogleFormsForPublicSubmissions) {
    return {
      href: SCHOOL_PROFILE.googleInquiryFormUrl,
      target: "_blank",
      rel: "noreferrer"
    };
  }
  return {
    href: programName ? `#/inquiry?program=${encodeURIComponent(programName)}` : "#/inquiry",
    target: "",
    rel: ""
  };
}

function linkAttrs(link) {
  return `href="${escapeHtml(link.href)}"${link.target ? ` target="${link.target}"` : ""}${link.rel ? ` rel="${link.rel}"` : ""}`;
}

function shell(content, options = {}) {
  clearInterval(signageTimer);
  signageTimer = null;
  if (options.signage) return `<main>${content}</main>`;
  const visitLink = publicVisitLink();
  const inquiryLink = publicInquiryLink();
  return `
    <div class="app-shell">
      <header class="topbar">
        <div class="container topbar-inner">
          <a class="brand" href="#/">
            <span class="brand-mark">${escapeHtml(SCHOOL_PROFILE.shortName.slice(0, 1))}</span>
            <span>${escapeHtml(SCHOOL_PROFILE.shortName)}</span>
          </a>
          <nav class="nav" aria-label="主要導覽">
            <a href="#/programs">園所特色</a>
            <a ${linkAttrs(visitLink)}>預約參觀</a>
            <a ${linkAttrs(inquiryLink)}>入園諮詢</a>
            <a href="#/status">查詢送出狀態</a>
            <a href="#/signage">直式看板</a>
          </nav>
        </div>
      </header>
      ${content}
      <footer class="footer">
        <div class="container footer-grid">
          <div>
            <strong>${escapeHtml(SCHOOL_PROFILE.schoolName)}</strong>
            <p class="small">園所位置：${escapeHtml(SCHOOL_PROFILE.location)}｜地址：${escapeHtml(SCHOOL_PROFILE.address)}｜電話：${escapeHtml(SCHOOL_PROFILE.phone)}</p>
            <p class="small">設立別：${escapeHtml(SCHOOL_PROFILE.type)}｜${escapeHtml(SCHOOL_PROFILE.capacity)}｜收費參考：${escapeHtml(SCHOOL_PROFILE.tuitionReference)}｜公開紀錄：${escapeHtml(SCHOOL_PROFILE.violationRecord)}</p>
            <p class="small">隱私提醒：${escapeHtml(SCHOOL_PROFILE.privacyNotice)}</p>
          </div>
          <a class="text-link" href="#/admin">管理入口</a>
        </div>
      </footer>
    </div>
  `;
}

function landingPage() {
  const visitLink = publicVisitLink();
  const inquiryLink = publicInquiryLink();
  return shell(`
    <main>
      <section class="scan-hero">
        <div class="container scan-hero-grid">
          <div class="scan-copy">
            <p class="eyebrow">${escapeHtml(SCHOOL_PROFILE.location)}｜${escapeHtml(SCHOOL_PROFILE.type)}</p>
            <h1>${escapeHtml(SCHOOL_PROFILE.tagline)}</h1>
            <p class="hero-tagline">${escapeHtml(SCHOOL_PROFILE.shortName)}</p>
            <p class="lead">${escapeHtml(SCHOOL_PROFILE.intro)}</p>
            <div class="quick-facts" aria-label="園所公開資訊">
              <span>${escapeHtml(SCHOOL_PROFILE.shortName)}</span>
              <span>${escapeHtml(SCHOOL_PROFILE.capacity)}</span>
              <span>收費參考：${escapeHtml(SCHOOL_PROFILE.tuitionReference)}</span>
              <span>公開紀錄：${escapeHtml(SCHOOL_PROFILE.violationRecord)}</span>
            </div>
            <div class="actions primary-actions">
              <a class="btn btn-primary" href="#/programs">了解園所特色</a>
              <a class="btn btn-secondary" ${linkAttrs(visitLink)}>直接預約參觀</a>
              <a class="btn btn-line" href="${escapeHtml(SCHOOL_PROFILE.lineUrl)}" target="_blank" rel="noreferrer">LINE 詢問</a>
            </div>
          </div>
          <aside class="scan-card" aria-label="家長流程">
            <div class="phone-preview">
              <span class="phone-dot"></span>
              <h2>三步驟完成預約參觀</h2>
              ${flowStep("1", "了解園所環境與特色", "先看位置、生活常規、活動方向與收費參考。")}
              ${flowStep("2", "點選預約參觀或入園諮詢", "依需求選擇參觀預約或先留下諮詢問題。")}
              ${flowStep("3", "填寫表單後，園方將依資料聯繫確認", "園方依孩子年齡與需求安排後續說明。")}
            </div>
          </aside>
        </div>
      </section>

      <section id="programs" class="section compact-section">
        <div class="container">
          <div class="section-head">
            <div>
              <h2>家長可先了解的重點</h2>
              <p>本頁以幼兒園招生與參觀預約為主。安親或才藝延伸可作為未來階段擴充，不在本次 MVP 中強調。</p>
            </div>
          </div>
          <div class="grid grid-5">
            ${SCHOOL_CONTENT.programs.map(programChoiceCard).join("")}
          </div>
        </div>
      </section>

      <section class="section">
        <div class="container">
          <div class="section-head">
            <div>
              <h2>園所基本資訊</h2>
              <p>以下為本 MVP 使用的公開資訊，方便家長在預約前先掌握位置、電話與收費參考。</p>
            </div>
          </div>
          <div class="info-grid">
            ${infoItem("園所名稱", SCHOOL_PROFILE.schoolName)}
            ${infoItem("地址", SCHOOL_PROFILE.address)}
            ${infoItem("電話", SCHOOL_PROFILE.phone)}
            ${infoItem("設立別", SCHOOL_PROFILE.type)}
            ${infoItem("核定人數", SCHOOL_PROFILE.capacity)}
            ${infoItem("收費參考", SCHOOL_PROFILE.tuitionReference)}
            ${infoItem("公開紀錄", SCHOOL_PROFILE.violationRecord)}
          </div>
        </div>
      </section>

      <section class="section">
        <div class="container grid grid-2">
          <div>
            <p class="eyebrow">Parent Benefits</p>
            <h2>先線上填寫，參觀溝通更有效率</h2>
            <p class="small">${escapeHtml(SCHOOL_PROFILE.privacyNotice)}</p>
          </div>
          <div class="card benefit-list">
            ${benefitItem("減少電話反覆詢問")}
            ${benefitItem("線上留下參觀需求")}
            ${benefitItem("園方依孩子年齡安排說明")}
            ${benefitItem("家長可先了解園所特色與收費參考")}
          </div>
        </div>
      </section>

      <section class="section">
        <div class="container">
          <div class="section-head">
            <div>
              <h2>快樂地重視的事</h2>
              <p>${escapeHtml(SCHOOL_PROFILE.parentPromise)}</p>
            </div>
          </div>
          <div class="grid grid-4">
            ${SCHOOL_CONTENT.features.map((item) => featureCard(...item)).join("")}
          </div>
        </div>
      </section>

      <section class="section">
        <div class="container grid grid-photo">
          ${SCHOOL_CONTENT.photos.map(photoCard).join("")}
        </div>
      </section>

      <section class="section">
        <div class="container grid grid-2">
          <div>
            <p class="eyebrow">Daily Rhythm</p>
            <h2>一日節奏與學習亮點</h2>
            <p class="small">以下為可編輯的示範內容，適合在家長第一次掃碼時快速理解學校的照顧邏輯。</p>
          </div>
          <div class="card routine">
            ${SCHOOL_CONTENT.routine.map((item) => routineItem(...item)).join("")}
          </div>
        </div>
      </section>

      <section class="section final-cta">
        <div class="container final-cta-inner">
          <div>
            <h2>想更確定孩子適不適合快樂地幼兒園？</h2>
            <p>建議先預約參觀，讓教職員依孩子年齡、作息與家長需求安排說明。</p>
          </div>
          <div class="actions cta-actions">
            <a class="btn btn-primary" ${linkAttrs(visitLink)}>預約參觀</a>
            <a class="btn btn-secondary" ${linkAttrs(inquiryLink)}>填寫入園諮詢</a>
          </div>
        </div>
      </section>
    </main>
  `);
}

function flowStep(number, title, text) {
  return `
    <div class="flow-step">
      <span>${number}</span>
      <div><strong>${title}</strong><p>${text}</p></div>
    </div>
  `;
}

function benefitItem(text) {
  return `<div class="benefit-item"><span>✓</span><strong>${escapeHtml(text)}</strong></div>`;
}

function infoItem(label, value) {
  return `<article class="info-card"><span>${escapeHtml(label)}</span><strong>${escapeHtml(value)}</strong></article>`;
}

function featureCard(icon, title, text) {
  return `<article class="card feature-card"><div class="feature-icon">${icon}</div><h3>${title}</h3><p class="small">${text}</p></article>`;
}

function programChoiceCard(program) {
  const visitLink = publicVisitLink(program.name);
  const inquiryLink = publicInquiryLink(program.name);
  return `
    <article class="card program-card">
      <h3>${escapeHtml(program.name)}</h3>
      <p class="small">${escapeHtml(program.summary)}</p>
      <div class="program-card-actions">
        <a class="btn btn-plain" ${linkAttrs(visitLink)}>預約參觀</a>
        <a class="text-link" ${linkAttrs(inquiryLink)}>入園諮詢</a>
      </div>
    </article>
  `;
}

function photoCard(photo) {
  // Later: set photo.imagePath to a public image path, then this card will render the actual photo.
  const imageStyle = photo.imagePath ? ` style="background-image: linear-gradient(180deg, rgba(36, 60, 58, 0.08), rgba(23, 63, 53, 0.78)), url('${escapeHtml(photo.imagePath)}')"` : "";
  return `
    <div class="visual-panel">
      <div class="photo-placeholder photo-card-placeholder"${imageStyle}>
        <strong>${escapeHtml(photo.title)}</strong>
        <span>${escapeHtml(photo.text)}</span>
      </div>
    </div>
  `;
}

function routineItem(time, title, text) {
  return `<div class="routine-item"><div class="time">${time}</div><div><strong>${title}</strong><p class="small">${text}</p></div></div>`;
}

function formOption(values, selected = "") {
  return values
    .map((item) => `<option value="${escapeHtml(item)}" ${item === selected ? "selected" : ""}>${escapeHtml(item)}</option>`)
    .join("");
}

function checkGroup(name, values) {
  return values
    .map(
      (item) => `
      <label class="check">
        <input type="checkbox" name="${name}" value="${escapeHtml(item)}" />
        <span>${escapeHtml(item)}</span>
      </label>`
    )
    .join("");
}

function visitPage(success = false) {
  const selectedProgram = routeParams().get("program") || "";
  const visitLink = publicVisitLink();
  return shell(`
    <main class="form-page">
      <div class="container form-layout">
        <aside class="form-intro-card">
          <p class="eyebrow">到校參觀預約</p>
          <h1>預約參觀</h1>
          <p>留下方便聯繫的資訊後，園方會依孩子年齡、家長關心事項與希望參觀時段，安排園所環境、生活作息與課程方向說明。送出資料代表園方收到參觀需求，並非正式入園或錄取確認。</p>
          <div class="mini-flow">
            ${flowStep("1", "填寫資料", "約 1-2 分鐘完成。")}
            ${flowStep("2", "園方聯繫確認", "以電話或 LINE 回覆參觀時間。")}
            ${flowStep("3", "到園參觀", "了解環境、作息、課程與收費參考。")}
          </div>
          <div class="notice small">${escapeHtml(SCHOOL_PROFILE.privacyNotice)}</div>
        </aside>
        <section class="form-card">
          ${internalFormNotice("visit", visitLink)}
          ${success ? successBox("已收到您的預約資料", "園方將於 1–2 個工作日內聯繫確認參觀時間。") : visitForm(selectedProgram)}
        </section>
      </div>
    </main>
  `);
}

function visitForm(selectedProgram = "") {
  return `
    <form id="visitForm" class="form-grid">
      ${inputField("parentName", "家長姓名", "text", true)}
      ${inputField("phone", "聯絡電話", "tel", true)}
      ${inputField("lineId", "LINE ID（選填）", "text", false)}
      ${inputField("childName", "孩子姓名", "text", true)}
      ${inputField("childAge", "孩子年齡", "number", true)}
      <label class="field">是否已就讀其他幼兒園
        <select name="hasCurrentKindergarten" required>${formOption(yesNoOptions)}</select>
      </label>
      <label class="field">預計入園時間
        <select name="expectedEnrollment" required>${formOption(enrollmentTimes)}</select>
      </label>
      <label class="field">想了解的重點
        <select name="program" required>${formOption(programs, selectedProgram)}</select>
      </label>
      ${inputField("visitDate", "希望參觀日期", "date", true)}
      <label class="field">希望參觀時段
        <select name="visitTime" required>${formOption(visitPeriods)}</select>
      </label>
      ${inputField("currentSchool", "目前照顧狀態／就讀情況", "text", false, "field full")}
      <div class="field full">
        <label>最關心的問題</label>
        <div class="checks">${checkGroup("concerns", concerns)}</div>
      </div>
      <label class="field full">補充說明
        <textarea name="notes" placeholder="例如：孩子年齡、個性、作息、第一次入園適應，或想特別了解的園所環境問題"></textarea>
      </label>
      <div class="field full">
        <button class="btn btn-primary" type="submit">送出預約資料</button>
      </div>
    </form>
  `;
}

function inquiryPage(success = false) {
  const selectedProgram = routeParams().get("program") || "";
  const inquiryLink = publicInquiryLink();
  return shell(`
    <main class="form-page">
      <div class="container form-layout">
        <aside class="form-intro-card">
          <p class="eyebrow">入園諮詢</p>
          <h1>入園諮詢</h1>
          <p>如果還不確定是否預約參觀，也可以先留下孩子年齡、預計入園時間與想了解的問題。送出資料僅代表園方收到諮詢需求，正式入園仍需由園方聯繫後依後續流程確認。</p>
          <div class="notice small">此表單不是正式入學契約，也不涉及任何付款、收據或費用結算。</div>
        </aside>
        <section class="form-card">
          ${internalFormNotice("inquiry", inquiryLink)}
          ${success ? successBox("已收到您的入園諮詢資料", "園方將於 1–2 個工作日內聯繫確認後續諮詢方式。") : inquiryForm(selectedProgram)}
        </section>
      </div>
    </main>
  `);
}

function internalFormNotice(type, officialLink) {
  const buttonText = type === "visit" ? "前往正式預約參觀表單" : "前往正式入園諮詢表單";
  return `
    <div class="notice internal-form-notice">
      <strong>目前此頁為 MVP 測試表單</strong>
      <p class="small">資料僅儲存在本機瀏覽器 localStorage。正式家長資料建議改用 Google 表單收集，並由 Google Sheets 統一管理。</p>
      ${SCHOOL_PROFILE.useGoogleFormsForPublicSubmissions
        ? `<a class="btn btn-secondary" ${linkAttrs(officialLink)}>${buttonText}</a>`
        : `<p class="small">正式 Google 表單尚未設定，請先使用此頁進行內部流程測試。</p>`}
    </div>
  `;
}

function inquiryForm(selectedProgram = "") {
  return `
    <form id="inquiryForm" class="form-grid">
      ${inputField("parentName", "家長姓名", "text", true)}
      ${inputField("phone", "聯絡電話", "tel", true)}
      ${inputField("lineId", "LINE ID（選填）", "text", false)}
      ${inputField("childName", "孩子姓名", "text", true)}
      ${inputField("childAge", "孩子年齡", "number", true)}
      <label class="field">是否已就讀其他幼兒園
        <select name="hasCurrentKindergarten" required>${formOption(yesNoOptions)}</select>
      </label>
      <label class="field">想了解的重點
        <select name="program" required>${formOption(programs, selectedProgram)}</select>
      </label>
      <label class="field">預計入園時間
        <select name="expectedEnrollment" required>${formOption(enrollmentTimes)}</select>
      </label>
      <label class="field">需要的服務
        <select name="requiredService" required>${formOption(serviceNeeds)}</select>
      </label>
      <div class="field full">
        <label>最關心的問題</label>
        <div class="checks">${checkGroup("concerns", concerns)}</div>
      </div>
      <label class="field full">家長需求／問題
        <textarea name="questions" placeholder="例如：想了解名額、生活作息、主題活動、收費參考或孩子適應問題"></textarea>
      </label>
      <label class="check field full">
        <input type="checkbox" name="consent" required />
        <span>我同意園方使用以上資料與我聯繫預約參觀或報名諮詢相關事宜。</span>
      </label>
      <div class="field full">
        <button class="btn btn-primary" type="submit">送出入園諮詢</button>
      </div>
    </form>
  `;
}

function successBox(message, nextText) {
  const submission = readLastSubmission();
  return `
    <div class="success-stack">
      <div class="success">
        <h2>${escapeHtml(message)}</h2>
        <p>查詢編號：<strong>${escapeHtml(submission.referenceNumber || "-")}</strong></p>
        <p>送出時間：${escapeHtml(submission.submittedAt || "-")}</p>
      </div>
      <div class="next-card">
        <h3>接下來會怎麼做</h3>
        <p>${escapeHtml(nextText)}</p>
        <p class="small">此表單不是正式入園申請或錄取通知。正式入園需經園方聯繫、確認資料與後續程序。</p>
      </div>
      <div class="actions success-actions">
        <a class="btn btn-primary" href="#/">返回首頁</a>
        <a class="btn btn-line" href="${escapeHtml(SCHOOL_PROFILE.lineUrl)}" target="_blank" rel="noreferrer">加入 LINE 補充問題</a>
        <a class="btn btn-secondary" href="#/status?ref=${encodeURIComponent(submission.referenceNumber || "")}&phone=${encodeURIComponent(submission.phone || "")}">查看我剛剛送出的資料</a>
      </div>
      <a class="text-link" href="#/status">查詢送出狀態</a>
    </div>
  `;
}

function inputField(name, label, type, required, className = "field") {
  return `<label class="${className}">${label}<input name="${name}" type="${type}" ${required ? "required" : ""} /></label>`;
}

function statusPage(result = null, error = "") {
  const params = routeParams();
  const ref = params.get("ref") || "";
  const phone = params.get("phone") || "";
  const autoResult = ref && phone ? findSubmission(ref, phone) : null;
  const displayResult = result || autoResult;
  const displayError = error || (ref && phone && !autoResult ? "查無符合的資料，請確認查詢編號與聯絡電話是否與送出時相同。" : "");

  return shell(`
    <main class="form-page">
      <div class="container form-layout">
        <aside class="form-intro-card">
          <p class="eyebrow">Submission Status</p>
          <h1>查詢送出資料</h1>
          <p>請輸入送出後取得的查詢編號與聯絡電話。系統只會顯示符合這組資料的單筆紀錄，不會公開其他家長資料。</p>
          <div class="notice small">狀態說明：${statusExplanationList()}</div>
        </aside>
        <section class="form-card">
          <form id="statusForm" class="form-grid">
            <label class="field">查詢編號
              <input name="referenceNumber" type="text" value="${escapeHtml(ref)}" placeholder="例如 VISIT-20260528-8F3A" required />
            </label>
            <label class="field">聯絡電話
              <input name="phone" type="tel" value="${escapeHtml(phone)}" required />
            </label>
            <button class="btn btn-primary field full" type="submit">查詢送出狀態</button>
          </form>
          ${displayError ? `<div class="notice status-error">${escapeHtml(displayError)}</div>` : ""}
          ${displayResult ? parentSubmissionDetail(displayResult) : ""}
        </section>
      </div>
    </main>
  `);
}

function statusExplanationList() {
  return Object.entries(statusDescriptions)
    .map(([status, description]) => `${status} = ${description}`)
    .join("；");
}

function findSubmission(referenceNumber, phone) {
  const normalizedRef = referenceNumber.trim().toUpperCase();
  const normalizedPhone = normalizePhone(phone);
  const allRecords = [
    ...readStore(STORAGE_KEYS.visits).map((record) => ({ ...record, typeLabel: "預約參觀" })),
    ...readStore(STORAGE_KEYS.inquiries).map((record) => ({ ...record, typeLabel: "入園諮詢" }))
  ];
  return allRecords.find((record) =>
    String(record.referenceNumber || "").toUpperCase() === normalizedRef &&
    normalizePhone(record.phone) === normalizedPhone
  );
}

function normalizePhone(phone = "") {
  return String(phone).replace(/\D/g, "");
}

function parentSubmissionDetail(record) {
  return `
    <div class="status-result">
      <div class="detail-title">
        <div>
          <p class="eyebrow">${escapeHtml(record.typeLabel)}</p>
          <h2>${escapeHtml(record.referenceNumber)}</h2>
        </div>
        <span class="status">${escapeHtml(record.status)}</span>
      </div>
      <p class="small">${escapeHtml(statusDescriptions[record.status] || "園方處理中")}</p>
      <div class="detail-grid">
        ${detailRow("送出時間", record.submittedAt)}
        ${detailRow("家長姓名", record.parentName)}
        ${detailRow("聯絡電話", record.phone)}
        ${detailRow("孩子姓名", record.childName)}
        ${detailRow("孩子年齡", record.childAge)}
        ${detailRow("預計入園時間", record.expectedEnrollment)}
        ${detailRow("希望參觀時間", record.visitDate ? `${record.visitDate} ${record.visitTime || ""}` : "-")}
        ${detailRow("最關心的問題", (record.concerns || []).join("、"))}
        ${detailRow("備註／需求", record.notes || record.questions)}
      </div>
      <div class="notice small">園方將於 1–2 個工作日內聯繫確認。此查詢結果僅供確認資料已送出，不代表正式入園或錄取。</div>
    </div>
  `;
}

function adminPage() {
  if (sessionStorage.getItem(STORAGE_KEYS.admin) !== "true") {
    return shell(`
      <main class="admin-page">
        <div class="container">
          <section class="form-card admin-gate">
            <p class="eyebrow">Staff Only</p>
            <h1>教職員入口</h1>
            <p class="small">請輸入管理 PIN 碼。MVP 預設為 1234，可在 app.js 的 SCHOOL_PROFILE.adminPin 修改。</p>
            <form id="adminLogin" class="form-grid">
              <label class="field full">PIN 碼
                <input name="pin" type="password" inputmode="numeric" required />
              </label>
              <button class="btn btn-primary field full" type="submit">進入管理後台</button>
            </form>
          </section>
        </div>
      </main>
    `);
  }

  const visits = readStore(STORAGE_KEYS.visits);
  const inquiries = readStore(STORAGE_KEYS.inquiries);
  const records = adminTab === "visits" ? visits : inquiries;
  const title = adminTab === "visits" ? "參觀預約清單" : "入園諮詢清單";

  return shell(`
    <main class="admin-page">
      <div class="container">
        <div class="admin-header">
          <div>
            <p class="eyebrow">Admin Dashboard</p>
            <h1>入園諮詢與參觀追蹤</h1>
            <p class="small">協助園方追蹤家長聯繫狀態、孩子年齡、預計入園時間、參觀需求與內部備註。</p>
          </div>
          <div class="admin-header-actions">
            <button id="resetDemoData" class="btn btn-warning" type="button">重置示範資料</button>
            <button id="logoutAdmin" class="btn btn-plain" type="button">登出</button>
          </div>
        </div>

        <div class="notice admin-warning">
          目前資料僅儲存在本機瀏覽器 localStorage，正式使用前需改為雲端資料庫、正式登入權限、備份與個資保護機制。
          此後台僅顯示 MVP 測試資料。若未來改用 Google 表單，正式回覆請至 Google Sheets 查看。
        </div>

        <div class="admin-stats">
          ${statCard("參觀預約", visits.length, "待聯繫 " + countByStatus(visits, "新提交"))}
          ${statCard("入園諮詢", inquiries.length, "待聯繫 " + countByStatus(inquiries, "新提交"))}
          ${statCard("已預約參觀", countByStatus(visits, "已預約參觀"), "請確認接待安排")}
          ${statCard("已報名", countByStatus([...visits, ...inquiries], "已報名"), "後續可接正式系統")}
        </div>

        <div class="admin-workspace">
          <section class="card">
            <div class="tabs">
              <button class="btn tab ${adminTab === "visits" ? "active" : ""}" data-tab="visits">參觀預約 (${visits.length})</button>
              <button class="btn tab ${adminTab === "inquiries" ? "active" : ""}" data-tab="inquiries">入園諮詢 (${inquiries.length})</button>
            </div>
            <div class="admin-list-head">
              <div>
                <h2>${title}</h2>
                <p class="small">點選「查看」可更新狀態與內部備註。</p>
              </div>
              <button id="exportCsv" class="btn btn-secondary" type="button">匯出 CSV</button>
            </div>
            <div class="admin-tools">
              <input id="searchInput" type="search" placeholder="搜尋查詢編號／家長姓名／電話／孩子姓名" />
              <select id="programFilter"><option value="">全部重點</option>${formOption(programs)}</select>
              <select id="statusFilter"><option value="">全部狀態</option>${formOption(statuses)}</select>
            </div>
            <div id="adminTable">${adminTable(records)}</div>
          </section>
          <aside id="detailPanel" class="detail-panel">
            <div class="card empty-detail">
              <h2>尚未選取資料</h2>
              <p class="small">從左側清單選擇一筆資料，這裡會顯示完整內容、狀態與內部備註。</p>
            </div>
          </aside>
        </div>
      </div>
    </main>
  `);
}

function statCard(label, value, hint) {
  return `<article class="stat-card"><span>${escapeHtml(label)}</span><strong>${escapeHtml(value)}</strong><p>${escapeHtml(hint)}</p></article>`;
}

function countByStatus(records, status) {
  return records.filter((record) => record.status === status).length;
}

function adminTable(records) {
  if (!records.length) return `<div class="empty">目前沒有符合條件的資料</div>`;
  return `
    <div class="table-wrap">
      <table>
        <thead>
          <tr>
            <th>提交時間</th>
            <th>查詢編號</th>
            <th>家長姓名</th>
            <th>孩子年齡</th>
            <th>預計入園時間</th>
            <th>希望參觀時間</th>
            <th>關心問題</th>
            <th>聯絡狀態</th>
            <th>優先度</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>${records.map(rowHtml).join("")}</tbody>
      </table>
    </div>
  `;
}

function rowHtml(record) {
  const visitTime = record.visitDate ? `${record.visitDate} ${record.visitTime || ""}` : "-";
  const concernsText = (record.concerns || []).join("、") || "-";
  return `
    <tr data-id="${escapeHtml(record.id)}">
      <td>${escapeHtml(record.submittedAt)}</td>
      <td><strong>${escapeHtml(record.referenceNumber || "-")}</strong></td>
      <td><strong>${escapeHtml(record.parentName)}</strong><br><span class="small">${escapeHtml(record.phone)}</span></td>
      <td>${escapeHtml(record.childAge)} 歲</td>
      <td>${escapeHtml(record.expectedEnrollment || "-")}</td>
      <td>${escapeHtml(visitTime)}</td>
      <td>${escapeHtml(concernsText)}</td>
      <td><span class="status">${escapeHtml(record.status)}</span></td>
      <td><span class="priority priority-${escapeHtml(record.priority || calculatePriority(record))}">${escapeHtml(record.priority || calculatePriority(record))}</span></td>
      <td><button class="btn btn-plain view-detail" type="button" data-id="${escapeHtml(record.id)}">查看</button></td>
    </tr>
  `;
}

function signagePage() {
  clearInterval(signageTimer);
  // The QR Code should later point either to the landing page URL or directly to the official Google Visit Form URL.
  return shell(`
    <section class="signage">
      <div class="signage-frame">
        <div class="signage-title">
          <h1>${escapeHtml(SCHOOL_PROFILE.shortName)}</h1>
          <h2>歡迎預約參觀</h2>
        </div>
        <div class="qr-box">
          <div class="qr-placeholder">QR Code</div>
          <h2>掃描 QR Code 填寫參觀需求</h2>
          <p>線上填寫參觀需求</p>
          <p>園方將盡快聯繫確認時間</p>
        </div>
        <div class="signage-contact">
          <strong>電話：${escapeHtml(SCHOOL_PROFILE.phone)}</strong>
          <span>新北市樹林區八德街118號</span>
        </div>
      </div>
    </section>
  `, { signage: true });
}

function startSignage(features) {
  let index = 0;
  const node = document.querySelector("#featureRotator");
  if (!node) return;
  signageTimer = setInterval(() => {
    index = (index + 1) % features.length;
    node.innerHTML = `
      <div class="feature-icon">${features[index][0]}</div>
      <h2>${features[index][1]}</h2>
      <p>${features[index][2]}</p>
    `;
  }, 3500);
}

function bindEvents() {
  const visitFormNode = document.querySelector("#visitForm");
  if (visitFormNode) {
    visitFormNode.addEventListener("submit", (event) => {
      event.preventDefault();
      const data = formData(event.currentTarget);
      data.concerns = Array.from(event.currentTarget.querySelectorAll("input[name='concerns']:checked")).map((x) => x.value);
      saveRecord(STORAGE_KEYS.visits, data, "VISIT");
      render(visitPage(true));
    });
  }

  const inquiryFormNode = document.querySelector("#inquiryForm");
  if (inquiryFormNode) {
    inquiryFormNode.addEventListener("submit", (event) => {
      event.preventDefault();
      const data = formData(event.currentTarget);
      data.concerns = Array.from(event.currentTarget.querySelectorAll("input[name='concerns']:checked")).map((x) => x.value);
      saveRecord(STORAGE_KEYS.inquiries, data, "INQ");
      render(inquiryPage(true));
    });
  }

  const adminLogin = document.querySelector("#adminLogin");
  if (adminLogin) {
    adminLogin.addEventListener("submit", (event) => {
      event.preventDefault();
      const pin = new FormData(event.currentTarget).get("pin");
      if (pin === SCHOOL_PROFILE.adminPin) {
        sessionStorage.setItem(STORAGE_KEYS.admin, "true");
        selectedRecord = null;
        render(adminPage());
      } else {
        alert("PIN 碼不正確");
      }
    });
  }

  document.querySelector("#logoutAdmin")?.addEventListener("click", () => {
    sessionStorage.removeItem(STORAGE_KEYS.admin);
    selectedRecord = null;
    render(adminPage());
  });

  document.querySelector("#resetDemoData")?.addEventListener("click", () => {
    if (confirm("這會覆蓋目前瀏覽器中的示範預約與報名資料，確定要重置嗎？")) resetDemoData();
  });

  document.querySelectorAll("[data-tab]").forEach((button) => {
    button.addEventListener("click", () => {
      adminTab = button.dataset.tab;
      selectedRecord = null;
      render(adminPage());
    });
  });

  document.querySelector("#searchInput")?.addEventListener("input", filterAdmin);
  document.querySelector("#programFilter")?.addEventListener("change", filterAdmin);
  document.querySelector("#statusFilter")?.addEventListener("change", filterAdmin);
  document.querySelector("#exportCsv")?.addEventListener("click", exportCurrentCsv);
  const statusForm = document.querySelector("#statusForm");
  if (statusForm) {
    statusForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const data = formData(event.currentTarget);
      const result = findSubmission(data.referenceNumber, data.phone);
      render(statusPage(result, result ? "" : "查無符合的資料，請確認查詢編號與聯絡電話是否與送出時相同。"));
    });
  }
  bindDetailButtons();
}

function formData(form) {
  return Object.fromEntries(new FormData(form).entries());
}

function saveRecord(key, data, referencePrefix) {
  const records = readStore(key);
  const record = {
    id: uid(),
    referenceNumber: generateReference(referencePrefix),
    submittedAt: nowText(),
    status: "新提交",
    priority: calculatePriority(data),
    internalNotes: "",
    ...data
  };
  records.unshift(record);
  writeStore(key, records);
  writeLastSubmission(record, key === STORAGE_KEYS.visits ? "visit" : "inquiry");
}

function writeLastSubmission(record, type) {
  localStorage.setItem(STORAGE_KEYS.lastSubmission, JSON.stringify({
    type,
    referenceNumber: record.referenceNumber,
    phone: record.phone,
    submittedAt: record.submittedAt
  }));
}

function readLastSubmission() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEYS.lastSubmission) || "{}");
  } catch {
    return {};
  }
}

function calculatePriority(record) {
  if (record.visitDate || record.expectedEnrollment === "立即" || record.expectedEnrollment === "1 個月內") return "高";
  if (record.expectedEnrollment === "3 個月內") return "中";
  return "低";
}

function filterAdmin() {
  const records = readStore(adminTab === "visits" ? STORAGE_KEYS.visits : STORAGE_KEYS.inquiries);
  const query = document.querySelector("#searchInput").value.trim().toLowerCase();
  const program = document.querySelector("#programFilter").value;
  const status = document.querySelector("#statusFilter").value;
  const filtered = records.filter((record) => {
    const haystack = `${record.referenceNumber || ""} ${record.parentName} ${record.phone} ${record.childName}`.toLowerCase();
    return (!query || haystack.includes(query)) && (!program || record.program === program) && (!status || record.status === status);
  });
  document.querySelector("#adminTable").innerHTML = adminTable(filtered);
  document.querySelector("#detailPanel").innerHTML = `
    <div class="card empty-detail">
      <h2>尚未選取資料</h2>
      <p class="small">請從篩選後的清單選擇一筆資料。</p>
    </div>
  `;
  bindDetailButtons();
}

function bindDetailButtons() {
  document.querySelectorAll(".view-detail").forEach((button) => {
    button.addEventListener("click", () => showDetail(button.dataset.id));
  });
}

function showDetail(id) {
  const key = adminTab === "visits" ? STORAGE_KEYS.visits : STORAGE_KEYS.inquiries;
  const record = readStore(key).find((item) => item.id === id);
  if (!record) return;
  selectedRecord = record.id;
  const extraRows = adminTab === "visits"
    ? `
      ${detailRow("LINE ID", record.lineId)}
      ${detailRow("是否已就讀其他幼兒園", record.hasCurrentKindergarten)}
      ${detailRow("目前照顧狀態／就讀情況", record.currentSchool)}
      ${detailRow("預計入園時間", record.expectedEnrollment)}
      ${detailRow("希望參觀時間", record.visitDate ? `${record.visitDate} ${record.visitTime || ""}` : "")}
      ${detailRow("最關心的問題", (record.concerns || []).join("、"))}
      ${detailRow("備註", record.notes)}
    `
    : `
      ${detailRow("LINE ID", record.lineId)}
      ${detailRow("是否已就讀其他幼兒園", record.hasCurrentKindergarten)}
      ${detailRow("預計入園時間", record.expectedEnrollment)}
      ${detailRow("需要的服務", record.requiredService)}
      ${detailRow("最關心的問題", (record.concerns || []).join("、"))}
      ${detailRow("家長需求／問題", record.questions)}
    `;
  document.querySelector("#detailPanel").innerHTML = `
    <div class="detail-card">
      <div class="detail-title">
        <div>
          <p class="eyebrow">Record Detail</p>
          <h2>${escapeHtml(record.parentName)}｜${escapeHtml(record.childName)}</h2>
          <p class="small">查詢編號：${escapeHtml(record.referenceNumber || "-")}</p>
        </div>
        <span class="status">${escapeHtml(record.status)}</span>
      </div>
      <div class="detail-grid">
        ${detailRow("查詢編號", record.referenceNumber)}
        ${detailRow("提交時間", record.submittedAt)}
        ${detailRow("想了解的重點", record.program)}
        ${detailRow("家長姓名", record.parentName)}
        ${detailRow("聯絡電話", record.phone)}
        ${detailRow("孩子姓名", record.childName)}
        ${detailRow("孩子年齡", record.childAge)}
        ${detailRow("優先度", record.priority || calculatePriority(record))}
        ${extraRows}
      </div>
      <div class="form-grid detail-edit">
        <label class="field">下一步狀態
          <select id="detailStatus">${formOption(statuses)}</select>
        </label>
        <label class="field">優先度
          <select id="detailPriority">${formOption(["高", "中", "低"], record.priority || calculatePriority(record))}</select>
        </label>
        <label class="field full">內部備註
          <textarea id="detailNotes" placeholder="例如：已電話聯繫、待回覆 LINE、參觀接待老師、家長在意事項">${escapeHtml(record.internalNotes || "")}</textarea>
        </label>
        <button id="saveDetail" class="btn btn-primary field full" type="button">儲存狀態與備註</button>
      </div>
    </div>
  `;
  document.querySelector("#detailStatus").value = record.status;
  document.querySelector("#saveDetail").addEventListener("click", saveDetail);
}

function detailRow(label, value) {
  return `<div><strong>${escapeHtml(label)}</strong><p class="small">${escapeHtml(value || "-")}</p></div>`;
}

function saveDetail() {
  const key = adminTab === "visits" ? STORAGE_KEYS.visits : STORAGE_KEYS.inquiries;
  const records = readStore(key).map((record) => {
    if (record.id !== selectedRecord) return record;
    return {
      ...record,
      status: document.querySelector("#detailStatus").value,
      priority: document.querySelector("#detailPriority").value,
      internalNotes: document.querySelector("#detailNotes").value
    };
  });
  writeStore(key, records);
  render(adminPage());
}

function exportCurrentCsv() {
  const records = readStore(adminTab === "visits" ? STORAGE_KEYS.visits : STORAGE_KEYS.inquiries);
  const headers = adminTab === "visits"
    ? ["查詢編號", "提交時間", "家長姓名", "電話", "LINE ID", "孩子姓名", "孩子年齡", "是否已就讀其他幼兒園", "預計入園時間", "想了解的重點", "參觀日期", "參觀時段", "目前照顧狀態", "最關心的問題", "備註", "聯絡狀態", "優先度", "內部備註"]
    : ["查詢編號", "提交時間", "家長姓名", "電話", "LINE ID", "孩子姓名", "孩子年齡", "是否已就讀其他幼兒園", "預計入園時間", "想了解的重點", "需要的服務", "最關心的問題", "家長需求／問題", "聯絡狀態", "優先度", "內部備註"];
  const rows = records.map((record) => adminTab === "visits"
    ? [record.referenceNumber, record.submittedAt, record.parentName, record.phone, record.lineId, record.childName, record.childAge, record.hasCurrentKindergarten, record.expectedEnrollment, record.program, record.visitDate, record.visitTime, record.currentSchool, (record.concerns || []).join("、"), record.notes, record.status, record.priority || calculatePriority(record), record.internalNotes]
    : [record.referenceNumber, record.submittedAt, record.parentName, record.phone, record.lineId, record.childName, record.childAge, record.hasCurrentKindergarten, record.expectedEnrollment, record.program, record.requiredService, (record.concerns || []).join("、"), record.questions, record.status, record.priority || calculatePriority(record), record.internalNotes]
  );
  const csv = [headers, ...rows].map((row) => row.map(csvCell).join(",")).join("\n");
  const blob = new Blob(["\uFEFF" + csv], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = adminTab === "visits" ? "visit-bookings.csv" : "enrollment-inquiries.csv";
  link.click();
  URL.revokeObjectURL(url);
}

function csvCell(value = "") {
  return `"${String(value).replaceAll('"', '""')}"`;
}

function render(html) {
  document.querySelector("#app").innerHTML = html;
  bindEvents();
}

function router() {
  const current = routePath();
  if (current === "/" || current === "") render(landingPage());
  else if (current === "/programs") {
    render(landingPage());
    setTimeout(() => document.querySelector("#programs")?.scrollIntoView({ behavior: "smooth", block: "start" }), 0);
  }
  else if (current === "/visit") render(visitPage());
  else if (current === "/inquiry") render(inquiryPage());
  else if (current === "/status") render(statusPage());
  else if (current === "/admin") render(adminPage());
  else if (current === "/signage") render(signagePage());
  else setRoute("/");
}

seedDemoDataIfNeeded();
window.addEventListener("hashchange", router);
router();
