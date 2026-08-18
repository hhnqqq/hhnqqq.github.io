/* =========================================================
   Haonan He — Personal Homepage
   i18n · particles · animations · publications data
   ========================================================= */
"use strict";

/* ---------------- i18n dictionary ---------------- */
const I18N = {
  en: {
    "nav.about": "About", "nav.research": "Research", "nav.publications": "Publications", "nav.contact": "Contact",
    "hero.affil": "University of Science and Technology of China (USTC)",
    "hero.tag1": "Large Language Models", "hero.tag2": "Parameter-Efficient Fine-Tuning", "hero.tag3": "AI for Science",
    "hero.stat1": "Citations", "hero.stat2": "h-index", "hero.stat3": "i10-index", "hero.stat4": "Publications",
    "hero.cta1": "Google Scholar", "hero.cta2": "GitHub",
    roles: [
      "Researcher @ USTC",
      "Large Language Models & PEFT",
      "AI for Science",
      "Physics Reasoning via RL",
      "Open-Source Enthusiast",
    ],
    "about.title": "About Me",
    "about.p1": "I am a student at the <b>University of Science and Technology of China (USTC)</b>, working at the intersection of <b>large language models</b>, <b>parameter-efficient fine-tuning</b>, and <b>AI for science</b>. My research focuses on making LLMs more efficient to train and adapt, while pushing their scientific reasoning capabilities to Olympiad-level frontiers.",
    "about.p2": "I have first-authored works on gradient-driven adaptive low-rank adaptation (GoRA, NeurIPS 2025), a unified study of LoRA variants (LoRAFactory), and a multi-omics instruction dataset for LLMs (Biology-Instructions, EMNLP 2025 Findings). I also contributed to physics-reasoning models that achieved gold-medal-level performance at the International Physics Olympiad (IPhO).",
    "research.title": "Research Interests",
    "research.c1t": "Efficient Fine-Tuning", "research.c1d": "Gradient-driven and unified studies of LoRA variants — adaptive rank allocation, entropy-guided sharing, and MoE-style adaptation for parameter-efficient fine-tuning.",
    "research.c2t": "Scientific Reasoning", "research.c2d": "Reinforcement-learning-trained models that master physics Olympiads, achieve gold-medal performance at IPhO, and bridge visual perception with scientific reasoning.",
    "research.c3t": "AI for Science", "research.c3d": "Multi-omics sequence understanding with LLMs — datasets and benchmarks that teach models to reason over DNA, RNA, and protein sequences.",
    "research.c4t": "LLM Agents & Benchmarks", "research.c4d": "Long-horizon agentic models, controllable test-time scaling, Chinese LLM benchmarks (SuperCLUE), and trillion-parameter-level performance with compact agents.",
    "hl.title": "Research Highlights",
    "hl.gora": "First-author. A unified framework that adapts both rank and initialization using gradient information — outperforming vanilla LoRA by 5+ points on math reasoning.",
    "hl.bio": "First-author. The first large-scale instruction-tuning dataset and benchmark for multi-omics sequence understanding of LLMs, powering the ChatMultiOmics baseline.",
    "hl.p1": "First open-source model with gold-medal performance at IPhO 2025, winning 12 of 13 international physics competitions.",
    "pub.title": "Publications",
    "pub.fAll": "All", "pub.fPeft": "Fine-Tuning", "pub.fScience": "AI for Science", "pub.fBench": "Benchmarks & Agents",
    "contact.title": "Contact",
    "contact.scholar": "Google Scholar", "contact.scholarD": "Profile · citation metrics",
    "contact.zhihuD": "Chinese Q&A platform",
    "contact.uni": "USTC", "contact.uniD": "Hefei, Anhui, China",
    "footer.line": "© {y} Haonan He. Built with ❤ — powered by GitHub Pages.",
    "footer.sub": "Last updated: Aug 2026 · Citation data from Google Scholar",
    links: { paper: "Paper", code: "Code", project: "Project", bib: "BibTeX" },
  },
  zh: {
    "nav.about": "关于我", "nav.research": "研究方向", "nav.publications": "论文发表", "nav.contact": "联系",
    "hero.affil": "中国科学技术大学 (USTC)",
    "hero.tag1": "大语言模型", "hero.tag2": "参数高效微调", "hero.tag3": "AI for Science",
    "hero.stat1": "总引用", "hero.stat2": "h 指数", "hero.stat3": "i10 指数", "hero.stat4": "论文数",
    "hero.cta1": "谷歌学术", "hero.cta2": "GitHub",
    roles: [
      "中科大在读学生",
      "大语言模型与参数高效微调",
      "AI for Science",
      "物理推理与强化学习",
      "开源爱好者",
    ],
    "about.title": "关于我",
    "about.p1": "我是<b>中国科学技术大学</b>的学生，研究兴趣包括<b>大语言模型</b>、<b>参数高效微调</b>与<b>AI for Science</b>。我的研究专注于让大模型训练与适配更加高效，同时将模型的科学推理能力推向奥林匹克竞赛级别的前沿。",
    "about.p2": "我以一作身份完成了梯度驱动的自适应低秩适配方法 (GoRA, NeurIPS 2025)、LoRA 变体统一研究 (LoRAFactory) 以及面向 LLM 的多组学指令数据集 (Biology-Instructions, EMNLP 2025 Findings)。我也参与了在国际物理奥林匹克 (IPhO) 中达到金牌水平表现的物理推理模型的研究。",
    "research.title": "研究方向",
    "research.c1t": "高效微调", "research.c1d": "基于梯度与统一视角的 LoRA 变体研究——自适应秩分配、熵引导共享与 MoE 式适配，实现参数高效微调。",
    "research.c2t": "科学推理", "research.c2d": "通过强化学习训练的模型攻克物理奥赛，在 IPhO 获得金牌级表现，并架起视觉感知与科学推理之间的桥梁。",
    "research.c3t": "AI for Science", "research.c3d": "用大模型理解多组学序列——构建数据集与基准，教会模型对 DNA、RNA 和蛋白质序列进行推理。",
    "research.c4t": "LLM 智能体与基准", "research.c4d": "长程智能体模型、可控测试时扩展、中文大模型基准 (SuperCLUE)，以及用小参数智能体达到万亿参数级性能。",
    "hl.title": "研究亮点",
    "hl.gora": "一作。利用梯度信息在统一框架中同时适配秩与初始化——在数学推理任务上超越标准 LoRA 5+ 分。",
    "hl.bio": "一作。首个大规模多组学序列理解指令微调数据集与基准，并提出了 ChatMultiOmics 基线。",
    "hl.p1": "首个在 IPhO 2025 达到金牌表现的开源模型，在 13 项国际物理竞赛中夺得 12 枚金牌。",
    "pub.title": "论文发表",
    "pub.fAll": "全部", "pub.fPeft": "高效微调", "pub.fScience": "AI for Science", "pub.fBench": "基准与智能体",
    "contact.title": "联系我",
    "contact.scholar": "谷歌学术", "contact.scholarD": "主页 · 引用统计",
    "contact.zhihuD": "知乎主页",
    "contact.uni": "中国科学技术大学", "contact.uniD": "安徽 · 合肥",
    "footer.line": "© {y} Haonan He. Made with ❤ — GitHub Pages 托管.",
    "footer.sub": "最近更新: 2026-08 · 引用数据来自 Google Scholar",
    links: { paper: "论文", code: "代码", project: "项目", bib: "BibTeX" },
  },
};

/* ---------------- publication data ---------------- */
const PAPERS = [
  {
    title: "GoRA: Gradient-driven Adaptive Low Rank Adaptation",
    authors: ["H. He", "P. Ye", "Y. Ren", "Y. Yuan", "L. Zhou", "S. Ju", "L. Chen"],
    venue: "NeurIPS 2025", venueClass: "neurips", year: 2025, cites: 32, fa: true,
    cat: "peft",
    links: [{ type: "arxiv", href: "https://arxiv.org/abs/2502.12171" }, { type: "code", href: "https://github.com/hhnqqq/MyTransformers" }],
    note: { en: "First-author · Unified rank selection & initialization via gradient signals, +5.13 over LoRA on math reasoning.", zh: "一作 · 基于梯度信号统一秩选择与初始化，数学推理较 LoRA 提升 5.13 分。" },
  },
  {
    title: "Biology-Instructions: A Dataset and Benchmark for Multi-Omics Sequence Understanding Capability of Large Language Models",
    authors: ["H. He", "Y. Ren", "Y. Tang", "Z. Xu", "J. Li", "M. Yang", "D. Zhang", "D. Yuan", "T. Chen", "et al."],
    venue: "EMNLP 2025 Findings", venueClass: "emnlp", year: 2024, cites: 9, fa: true,
    cat: "science",
    links: [{ type: "arxiv", href: "https://arxiv.org/abs/2412.19191" }, { type: "code", href: "https://github.com/hhnqqq/Biology-Instructions" }],
    note: { en: "First-author · First large-scale multi-omics instruction dataset & benchmark for LLM sequence understanding.", zh: "一作 · 首个面向 LLM 多组学序列理解的大规模指令数据集与基准。" },
  },
  {
    title: "A Unified Study of LoRA Variants: Taxonomy, Review, Codebase, and Empirical Evaluation",
    authors: ["H. He", "J. Ye", "M. Li", "Z. Wang", "T. Chen", "L. Bai", "P. Ye"],
    venue: "arXiv 2601.22708", venueClass: "arxiv", year: 2026, cites: 1, fa: true,
    cat: "peft",
    links: [{ type: "arxiv", href: "https://arxiv.org/abs/2601.22708" }],
    note: { en: "First-author · Unified taxonomy, theory, LoRAFactory codebase & large-scale empirical evaluation of LoRA variants.", zh: "一作 · 首个 LoRA 变体统一研究: 分类体系、统一理论、LoRAFactory 代码库与大规模评测。" },
  },
  {
    title: "SuperCLUE: A Comprehensive Chinese Large Language Model Benchmark",
    authors: ["L. Xu", "A. Li", "L. Zhu", "H. Xue", "C. Zhu", "K. Zhao", "H. He", "X. Zhang", "Q. Kang", "Z. Lan"],
    venue: "arXiv 2307.15020", venueClass: "arxiv", year: 2023, cites: 108, fa: false,
    cat: "bench",
    links: [{ type: "arxiv", href: "https://arxiv.org/abs/2307.15020" }],
    note: { en: "Comprehensive Chinese LLM benchmark covering 16 competencies across language, reasoning & tools.", zh: "覆盖 16 项核心能力的中文大模型综合评测基准。" },
  },
  {
    title: "Scaling Physical Reasoning with the PHYSICS Dataset",
    authors: ["S. Zheng", "Q. Cheng", "J. Yao", "M. Wu", "H. He", "N. Ding", "Y. Cheng", "S. Hu", "L. Bai", "et al."],
    venue: "NeurIPS 2025", venueClass: "neurips", year: 2025, cites: 17, fa: false,
    cat: "science",
    links: [{ type: "arxiv", href: "https://arxiv.org/abs/2506.00022" }],
    note: { en: "Large-scale physics dataset enabling Olympiad-level physical reasoning at scale.", zh: "大规模物理数据集，支撑奥林匹克级物理推理能力的扩展。" },
  },
  {
    title: "P1-VL: Bridging Visual Perception and Scientific Reasoning in Physics Olympiads",
    authors: ["Y. Luo", "F. Wang", "Q. Cheng", "F. Yu", "H. Lei", "J. Yan", "C. Li", "J. Chen", "Y. Zhao", "H. Wan", "et al."],
    venue: "AI4Math@ICML 2026", venueClass: "icml", year: 2026, cites: 4, fa: false,
    cat: "science",
    links: [{ type: "arxiv", href: "https://arxiv.org/abs/2602.09443" }],
    note: { en: "First open-source VLM with 12 gold medals on HiPhO; No.2 globally with agent augmentation.", zh: "首个在 HiPhO 夺得 12 枚金牌的开源多模态模型，智能体增强后全球排名第 2。" },
  },
  {
    title: "P1: Mastering Physics Olympiads with Reinforcement Learning",
    authors: ["J. Chen", "Q. Cheng", "F. Yu", "H. Wan", "Y. Zhang", "S. Zheng", "J. Yao", "Q. Zhang", "H. He", "et al."],
    venue: "arXiv 2511.13612", venueClass: "arxiv", year: 2025, cites: 4, fa: false,
    cat: "science",
    links: [{ type: "arxiv", href: "https://arxiv.org/abs/2511.13612" }],
    note: { en: "First open-source model with gold-medal performance at IPhO 2025 — 12 golds across 13 competitions.", zh: "首个在 IPhO 2025 达到金牌表现的开源模型——13 项竞赛中斩获 12 枚金牌。" },
  },
  {
    title: "Gradient Intrinsic Dimensionality Alignment: Narrowing the Gap Between Low-Rank Adaptation and Full Fine-Tuning",
    authors: ["J. Ye", "H. He", "M. Li", "F. Han", "T. Chen", "P. Ye"],
    venue: "ICLR 2026", venueClass: "iclr", year: 2026, cites: 2, fa: false,
    cat: "peft",
    links: [],
    note: { en: "Aligns gradient intrinsic dimensionality to close the LoRA ↔ full fine-tuning gap.", zh: "通过梯度本征维度对齐，缩小 LoRA 与全量微调之间的差距。" },
  },
  {
    title: "E²LoRA: Efficient and Effective Low-Rank Adaptation with Entropy-Guided Adaptive Sharing",
    authors: ["M. Li", "P. Ye", "J. Ye", "H. He", "T. Chen"],
    venue: "ICLR 2026", venueClass: "iclr", year: 2026, cites: 2, fa: false,
    cat: "peft",
    links: [],
    note: { en: "Entropy-guided adaptive sharing of low-rank parameters for efficient & effective adaptation.", zh: "基于熵引导的自适应参数共享，实现高效且有效的低秩适配。" },
  },
  {
    title: "MoE²-LoRA: When MoE Models Meet MoE-style Low-Rank Adaptation",
    authors: ["Q. Yang", "H. He", "M. Li", "J. Ye", "T. Chen", "L. Bai", "P. Ye"],
    venue: "arXiv 2607.21978", venueClass: "arxiv", year: 2026, cites: 0, fa: false,
    cat: "peft",
    links: [{ type: "arxiv", href: "https://arxiv.org/abs/2607.21978" }],
    note: { en: "First attempt to fine-tune MoE models with MoE-style low-rank adaptation via dual-channel routing-conditioned projection.", zh: "首次以 MoE 风格低秩适配微调 MoE 模型，通过双通道路由条件投影实现。" },
  },
  {
    title: "A Comprehensive Survey of LLM-Driven Collective Intelligence: Past, Present, and Future",
    authors: ["Y. Jiang", "S. Yang", "S. Tang", "S. Zheng", "J. Cao", "et al."],
    venue: "Survey 2025", venueClass: "arxiv", year: 2025, cites: 2, fa: false,
    cat: "bench",
    links: [],
    note: { en: "Systematic survey of LLM-driven collective intelligence — from multi-agent emergence to future frontiers.", zh: "系统综述 LLM 驱动的群体智能——从多智能体涌现到未来前沿。" },
  },
  {
    title: "Scaling the Horizon, Not the Parameters: Reaching Trillion-Parameter Performance with a 35B Agent",
    authors: ["L. Bai", "Z. Cao", "Y. Chen", "Z. Cui", "S. Du", "Y. Fan", "S. Feng", "Z. Guo", "H. He", "L. He", "et al."],
    venue: "arXiv 2606.30616", venueClass: "arxiv", year: 2026, cites: 1, fa: false,
    cat: "bench",
    links: [{ type: "arxiv", href: "https://arxiv.org/abs/2606.30616" }],
    note: { en: "Agents-A1: a 35B MoE agent reaching trillion-parameter-level performance by scaling the agent horizon.", zh: "Agents-A1: 通过扩展智能体时间跨度 (horizon), 35B MoE 智能体达到万亿参数级性能。" },
  },
  {
    title: "Control-R: Towards Controllable Test-Time Scaling",
    authors: ["D. Zhang", "W. Wang", "J. Li", "X. Wang", "J. Li", "J. Wu", "J. Lei", "H. He", "P. Ye", "S. Zhang", "et al."],
    venue: "arXiv 2506.00189", venueClass: "arxiv", year: 2025, cites: 1, fa: false,
    cat: "bench",
    links: [{ type: "arxiv", href: "https://arxiv.org/abs/2506.00189" }],
    note: { en: "Reasoning Control Fields for controllable long CoT, SOTA at 32B scale on AIME2024/MATH500.", zh: "推理控制场实现可控长思维链, 在 32B 规模 AIME2024/MATH500 上达到 SOTA。" },
  },
  {
    title: "Parametric Skills",
    authors: ["X. Zhao", "H. He", "Q. Yang", "M. Li", "J. Ye", "Z. Tan", "B. Wan", "P. Ye"],
    venue: "CBW@COLM 2026", venueClass: "arxiv", year: 2026, cites: 0, fa: false,
    cat: "peft",
    links: [],
    note: { en: "Towards modular, reusable, parametric skills for continual adaptation.", zh: "面向可持续适配的可复用参数化技能。" },
  },
  {
    title: "Clarifying Maize Knowledge Graph Question Answering Method Based on Large Language Model",
    authors: ["J. Zou", "L. Chen", "H. He", "Y. Yuan"],
    venue: "Trans. CSAE 42(5)", venueClass: "arxiv", year: 2026, cites: 0, fa: false,
    cat: "science",
    links: [],
    note: { en: "LLM-based question answering over a maize knowledge graph for agricultural applications.", zh: "基于大语言模型的玉米知识图谱问答方法，应用于农业领域。" },
  },
];

const SCHOLAR_CITES = {
  "GoRA: Gradient-driven Adaptive Low Rank Adaptation": "2osOgNQ5qMEC",
  "Biology-Instructions: A Dataset and Benchmark for Multi-Omics Sequence Understanding Capability of Large Language Models": "9yKSN-GCB0IC",
  "SuperCLUE: A Comprehensive Chinese Large Language Model Benchmark": "d1gkVwhDpl0C",
  "Scaling Physical Reasoning with the PHYSICS Dataset": "roLk4NBRz8UC",
  "P1-VL: Bridging Visual Perception and Scientific Reasoning in Physics Olympiads": "W7OEmFMy1HYC",
  "P1: Mastering Physics Olympiads with Reinforcement Learning": "Tyk-4Ss8FVUC",
  "Gradient Intrinsic Dimensionality Alignment: Narrowing the Gap Between Low-Rank Adaptation and Full Fine-Tuning": "eQOLeE2rZwMC",
  "E²LoRA: Efficient and Effective Low-Rank Adaptation with Entropy-Guided Adaptive Sharing": "YsMSGLbcyi4C",
  "A Comprehensive Survey of LLM-Driven Collective Intelligence: Past, Present, and Future": "zYLM7Y9cAGgC",
  "Scaling the Horizon, Not the Parameters: Reaching Trillion-Parameter Performance with a 35B Agent": "LkGwnXOMwfcC",
  "A Unified Study of LoRA Variants: Taxonomy, Review, Codebase, and Empirical Evaluation": "Y0pCki6q_DkC",
  "Control-R: Towards Controllable Test-Time Scaling": "qjMakFHDy7sC",
  "MoE²-LoRA: When MoE Models Meet MoE-style Low-Rank Adaptation": "Se3iqnhoufwC",
  "Parametric Skills": "_FxGoFyzp5QC",
  "Clarifying Maize Knowledge Graph Question Answering Method Based on Large Language Model": "WF5omc3nYNoC",
};

const scholarUrl = (title) =>
  "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=6YRQTlQAAAAJ&citation_for_view=6YRQTlQAAAAJ:" + SCHOLAR_CITES[title];

/* ---------------- state ---------------- */
let lang = localStorage.getItem("hh-lang") || "en";

/* ---------------- i18n apply ---------------- */
function applyLang() {
  const t = I18N[lang];
  document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
  document.querySelector("#langToggle").textContent = lang === "zh" ? "EN" : "中文";
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    const txt = t[key];
    if (txt !== null && txt !== undefined)
      el.innerHTML = txt.indexOf("{y}") > -1 ? txt.replace("{y}", new Date().getFullYear()) : txt;
  });
  renderPubs();
  restartTyping();
}

document.querySelector("#langToggle").addEventListener("click", () => {
  lang = lang === "en" ? "zh" : "en";
  localStorage.setItem("hh-lang", lang);
  applyLang();
});

/* ---------------- typing effect ---------------- */
let typeTimer = null;
function restartTyping() {
  const roles = I18N[lang].roles;
  const el = document.getElementById("typed");
  if (typeTimer) clearInterval(typeTimer);
  let r = 0, i = 0, deleting = false;
  typeTimer = setInterval(() => {
    const word = roles[r];
    if (!deleting) {
      el.textContent = word.slice(0, ++i);
      if (i === word.length) { deleting = true; setTimeout(() => {}, 1400); }
    } else {
      el.textContent = word.slice(0, --i);
      if (i === 0) { deleting = false; r = (r + 1) % roles.length; }
    }
  }, 90);
}

/* ---------------- count-up stats ---------------- */
function animateCounts() {
  document.querySelectorAll("[data-count]").forEach((el) => {
    const target = +el.dataset.count;
    const dur = 1400;
    const start = performance.now();
    const step = () => {
      const p = Math.min((performance.now() - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(target * eased);
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  });
}

/* ---------------- render publications ---------------- */
function renderPubs(filter) {
  filter = filter || (document.querySelector(".filter-btn.active") || {}).dataset?.filter || "all";
  const t = I18N[lang];
  const list = document.getElementById("pubList");
  const items = PAPERS.filter((p) => filter === "all" || p.cat === filter);
  list.innerHTML = "";
  items.forEach((p, idx) => {
    const authors = p.authors.map((a) =>
      a === "H. He" ? '<span class="me">' + a + '</span>' : a
    ).join(", ");
    const links = [];
    p.links.forEach((l) => {
      const label = l.type === "arxiv" ? "arXiv" : t.links[l.type] || l.type;
      links.push('<a href="' + l.href + '" target="_blank" rel="noopener">' + label + '</a>');
    });
    links.push('<a href="' + scholarUrl(p.title) + '" target="_blank" rel="noopener">' + t.links.bib + '</a>');
    const faBadge = p.fa ? '<span class="badge-fa">First Author</span>' : "";
    const el = document.createElement("article");
    el.className = "pub";
    el.dataset.cat = p.cat;
    el.style.animationDelay = (idx * 0.05) + "s";
    el.innerHTML =
      '<div class="pub-head">' +
        '<span class="pub-title">' + p.title + '</span>' +
        '<span class="pub-venue ' + p.venueClass + '">' + p.venue + " · " + p.year + '</span>' +
        faBadge +
        '<span class="pub-cites">' + p.cites + ' ⭐</span>' +
      '</div>' +
      '<div class="pub-authors">' + authors + '</div>' +
      '<div class="pub-note">' + p.note[lang] + '</div>' +
      '<div class="pub-links">' + links.join("") + '</div>';
    list.appendChild(el);
  });
}

document.querySelector("#pubFilters").addEventListener("click", (e) => {
  const btn = e.target.closest(".filter-btn");
  if (!btn) return;
  document.querySelectorAll(".filter-btn").forEach((b) => b.classList.remove("active"));
  btn.classList.add("active");
  renderPubs(btn.dataset.filter);
});

/* ---------------- particle background ---------------- */
(function particles() {
  const canvas = document.getElementById("bg-canvas");
  const ctx = canvas.getContext ? canvas.getContext("2d") : null;
  if (!ctx) return;
  let w, h, pts = [];
  const N = 80;

  const resize = () => {
    w = canvas.width = window.innerWidth * devicePixelRatio;
    h = canvas.height = window.innerHeight * devicePixelRatio;
  };
  resize();
  window.addEventListener("resize", resize);

  const colors = ["99,102,241", "34,211,238", "168,85,247"];
  for (let i = 0; i < N; i++) {
    pts.push({
      x: Math.random() * w, y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.35 * devicePixelRatio,
      vy: (Math.random() - 0.5) * 0.35 * devicePixelRatio,
      r: (Math.random() * 1.6 + 0.5) * devicePixelRatio,
      c: colors[i % 3],
    });
  }

  function frame() {
    ctx.clearRect(0, 0, w, h);
    for (const p of pts) {
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0 || p.x > w) p.vx *= -1;
      if (p.y < 0 || p.y > h) p.vy *= -1;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(" + p.c + ",0.8)";
      ctx.shadowColor = "rgba(" + p.c + ",0.9)";
      ctx.shadowBlur = 8;
      ctx.fill();
      ctx.shadowBlur = 0;
    }
    for (let i = 0; i < pts.length; i++) {
      for (let j = i + 1; j < pts.length; j++) {
        const dx = pts[i].x - pts[j].x, dy = pts[i].y - pts[j].y;
        const d2 = dx * dx + dy * dy;
        if (d2 < 150 * 150 * devicePixelRatio) {
          ctx.strokeStyle = "rgba(120,140,255," + (0.22 * (1 - Math.sqrt(d2) / (150 * devicePixelRatio))) + ")";
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(pts[i].x, pts[i].y);
          ctx.lineTo(pts[j].x, pts[j].y);
          ctx.stroke();
        }
      }
    }
    requestAnimationFrame(frame);
  }
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    ctx.fillStyle = "rgba(255,255,255,0.04)";
  } else {
    frame();
  }
})();

/* ---------------- nav / mobile menu / reveal ---------------- */
const nav = document.getElementById("nav");
window.addEventListener("scroll", () => nav.classList.toggle("scrolled", window.scrollY > 30));

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.querySelector(".nav-links");
menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("open");
  navLinks.classList.toggle("open");
});
navLinks.querySelectorAll("a").forEach((a) =>
  a.addEventListener("click", () => { menuBtn.classList.remove("open"); navLinks.classList.remove("open"); })
);

const reveal = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (e.isIntersecting) {
      e.target.classList.add("visible");
      reveal.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".section, .stat-card, .hl-card, .card, .contact-item").forEach((el) => {
  el.classList.add("reveal");
  reveal.observe(el);
});

/* ---------------- init ---------------- */
window.addEventListener("load", () => {
  applyLang();
  animateCounts();
});
