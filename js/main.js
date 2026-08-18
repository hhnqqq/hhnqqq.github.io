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
    "hl.opd": "First-author. Distills long-context proof reasoning (SU-01) into short-context students — Intern-S2-Preview +21.2 on ProofBench, surpassing Gemini-2.5-Pro.",
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
    roleBadges: { first: "First Author", cofirst: "Co-First Author", lead: "Project Lead" },
    hlLabel: "Key Highlights",
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
    "hl.opd": "一作。把长上下文证明推理 (SU-01) 蒸馏进短上下文学生模型——Intern-S2-Preview 在 ProofBench 提升 21.2 分，超越 Gemini-2.5-Pro。",
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
    roleBadges: { first: "一作", cofirst: "共一", lead: "项目负责人" },
    hlLabel: "核心亮点",
  },
};

/* ---------------- publication data ---------------- */
const PAPERS = [
  {
    title: "SimpleOPD: Simple Tokenizer-Agnostic On-Policy Distillation for Long-Context Reasoning",
    authors: ["H. He", "H. Lei", "Y. Luo", "H. Zhang", "S. Zhang", "Y. Li", "S. Tang", "Z. Wang", "R. Zhan", "L. Bai", "et al."],
    venue: "arXiv 2608.14277", venueClass: "arxiv", year: 2026, cites: 0, roles: ["first"],
    cat: "bench",
    links: [{ type: "arxiv", href: "https://arxiv.org/abs/2608.14277" }],
    note: { en: "First-author · Tokenizer-agnostic OPD transferring SU-01's proof reasoning to short-context students, +21.2 on ProofBench.", zh: "一作 · 与 tokenizer 无关的 OPD，把 SU-01 的证明推理迁移到短上下文学生模型，ProofBench 提升 21.2 分。" },
    hl: {
      en: [
        "Transfers long-context proof reasoning (SU-01) to short-context students — no SFT on teacher trajectories",
        "Tokenizer-agnostic: distills in shared text space, aligning tokens with identical text spans",
        "Student reference KL loss + masked termination-token advantages prevent length explosion & instability",
        "Intern-S2-Preview: +21.2 on ProofBench (55.2), surpassing Gemini-2.5-Pro",
        "Consistent gains across Qwen3, Qwen3.5, Intern-S2, GLM-4.7, Gemma-4; generalizes to HLE & HiPhO",
      ],
      zh: [
        "将长上下文证明推理 (SU-01) 迁移到短上下文学生模型，无需在教师轨迹上做 SFT",
        "与 tokenizer 无关：在共享文本空间蒸馏，仅对齐文本跨度一致的 token",
        "学生参考 KL 损失 + 屏蔽终止 token 优势，避免长度爆炸与训练不稳定",
        "Intern-S2-Preview 在 ProofBench 提升 21.2 分 (达 55.2)，超越 Gemini-2.5-Pro",
        "在 Qwen3、Qwen3.5、Intern-S2、GLM-4.7、Gemma-4 上一致提升，泛化到 HLE 与 HiPhO",
      ],
    },
  },
  {
    title: "GoRA: Gradient-driven Adaptive Low Rank Adaptation",
    authors: ["H. He", "P. Ye", "Y. Ren", "Y. Yuan", "L. Zhou", "S. Ju", "L. Chen"],
    venue: "NeurIPS 2025", venueClass: "neurips", year: 2025, cites: 32, roles: ["first"],
    cat: "peft",
    links: [{ type: "arxiv", href: "https://arxiv.org/abs/2502.12171" }, { type: "code", href: "https://github.com/hhnqqq/MyTransformers" }],
    note: { en: "First-author · Unified rank selection & initialization via gradient signals, +5.13 over LoRA on math reasoning.", zh: "一作 · 基于梯度信号统一秩选择与初始化，数学推理较 LoRA 提升 5.13 分。" },
    hl: {
      en: [
        "Unified framework adapting both rank selection and weight initialization simultaneously",
        "Gradient information during training dynamically assigns optimal ranks & adaptively initializes adapters",
        "Llama3.1-8B math reasoning: +5.13 over vanilla LoRA, +2.05 over full fine-tuning at high ranks",
        "Preserves vanilla LoRA efficiency across architectures and modalities",
      ],
      zh: [
        "统一框架同时适配秩选择与权重初始化两大核心因素",
        "利用训练中的梯度信息动态分配最优秩，并自适应初始化低秩适配器",
        "Llama3.1-8B 数学推理较标准 LoRA 提升 5.13 分，高秩设置下超越全量微调 2.05 分",
        "保持 vanilla LoRA 的效率，跨架构与模态均稳定优于现有 LoRA 方法",
      ],
    },
  },
  {
    title: "Biology-Instructions: A Dataset and Benchmark for Multi-Omics Sequence Understanding Capability of Large Language Models",
    authors: ["H. He", "Y. Ren", "Y. Tang", "Z. Xu", "J. Li", "M. Yang", "D. Zhang", "D. Yuan", "T. Chen", "et al."],
    venue: "EMNLP 2025 Findings", venueClass: "emnlp", year: 2024, cites: 9, roles: ["first"],
    cat: "science",
    links: [{ type: "arxiv", href: "https://arxiv.org/abs/2412.19191" }, { type: "code", href: "https://github.com/hhnqqq/Biology-Instructions" }],
    note: { en: "First-author · First large-scale multi-omics instruction dataset & benchmark for LLM sequence understanding.", zh: "一作 · 首个面向 LLM 多组学序列理解的大规模指令数据集与基准。" },
    hl: {
      en: [
        "First large-scale instruction-tuning dataset for multi-omics sequences: DNA, RNA, proteins & multi-molecules",
        "Exposes significant limitations of current SOTA LLMs on multi-omics tasks without specialized training",
        "ChatMultiOmics baseline with a novel three-stage training pipeline",
        "Enhances biological understanding while maintaining conversational fluency; both resources open-sourced",
      ],
      zh: [
        "首个大规模多组学序列指令微调数据集：DNA、RNA、蛋白质与多分子",
        "揭示当前 SOTA 大模型在未专门训练时对多组学任务的显著局限",
        "提出 ChatMultiOmics 基线，采用新颖的三阶段训练流水线",
        "在增强生物学理解的同时保持对话流畅度，数据与模型全部开源",
      ],
    },
  },
  {
    title: "A Unified Study of LoRA Variants: Taxonomy, Review, Codebase, and Empirical Evaluation",
    authors: ["H. He", "J. Ye", "M. Li", "Z. Wang", "T. Chen", "L. Bai", "P. Ye"],
    venue: "arXiv 2601.22708", venueClass: "arxiv", year: 2026, cites: 1, roles: ["first"],
    cat: "peft",
    links: [{ type: "arxiv", href: "https://arxiv.org/abs/2601.22708" }],
    note: { en: "First-author · Unified taxonomy, theory, LoRAFactory codebase & large-scale empirical evaluation of LoRA variants.", zh: "一作 · 首个 LoRA 变体统一研究: 分类体系、统一理论、LoRAFactory 代码库与大规模评测。" },
    hl: {
      en: [
        "First unified study of LoRA variants — taxonomy, unified theoretical review, codebase & standardized evaluation",
        "Categorizes variants along 4 axes: rank, optimization dynamics, initialization, and MoE integration",
        "Introduces LoRAFactory: modular, plug-and-play codebase for fine-grained analysis",
        "Key finding: LoRA variants are highly sensitive to learning rate; with proper tuning LoRA matches or surpasses most variants",
        "Large-scale evaluation across NLG, NLU, and image classification",
      ],
      zh: [
        "首个 LoRA 变体统一研究：分类体系、统一理论综述、代码库与标准化评测",
        "沿四个主轴分类：秩、优化动力学、初始化与 MoE 集成",
        "提出 LoRAFactory：模块化、即插即用的代码库，支持细粒度分析",
        "关键发现：LoRA 及其变体对学习率高度敏感；配置得当的标准 LoRA 即可匹敌或超越大多数变体",
        "覆盖自然语言生成、理解与图像分类的大规模评测",
      ],
    },
  },
  {
    title: "SuperCLUE: A Comprehensive Chinese Large Language Model Benchmark",
    authors: ["L. Xu", "A. Li", "L. Zhu", "H. Xue", "C. Zhu", "K. Zhao", "H. He", "X. Zhang", "Q. Kang", "Z. Lan"],
    venue: "arXiv 2307.15020", venueClass: "arxiv", year: 2023, cites: 108, roles: [],
    cat: "bench",
    links: [{ type: "arxiv", href: "https://arxiv.org/abs/2307.15020" }],
    note: { en: "Comprehensive Chinese LLM benchmark covering 16 competencies across language, reasoning & tools.", zh: "覆盖 16 项核心能力的中文大模型综合评测基准。" },
    hl: {
      en: [
        "Chinese LLM benchmark with three sub-tasks: CArena (real battle ratings), OPEN (open-ended dialogues), CLOSE (closed-ended)",
        "Shows closed-ended accuracy alone cannot reflect human preferences on open-ended questions",
        "Demonstrates GPT-4 as a reliable judge for automatic Chinese preference evaluation",
        "108+ citations — one of the most widely used Chinese LLM benchmarks",
      ],
      zh: [
        "中文大模型基准，包含三个子任务：CArena（真实对战场次评分）、OPEN（开放问答）、CLOSE（封闭问答）",
        "揭示仅凭封闭式题目的准确率无法反映开放题目上的人类偏好",
        "证明 GPT-4 可作为中文开放题目偏好评估的可靠裁判",
        "被引用 108+ 次，是中文大模型社区使用最广泛的基准之一",
      ],
    },
  },
  {
    title: "Scaling Physical Reasoning with the PHYSICS Dataset",
    authors: ["S. Zheng", "Q. Cheng", "J. Yao", "M. Wu", "H. He", "N. Ding", "Y. Cheng", "S. Hu", "L. Bai", "et al."],
    venue: "NeurIPS 2025", venueClass: "neurips", year: 2025, cites: 17, roles: [],
    cat: "science",
    links: [{ type: "arxiv", href: "https://arxiv.org/abs/2506.00022" }],
    note: { en: "Large-scale physics dataset enabling Olympiad-level physical reasoning at scale.", zh: "大规模物理数据集，支撑奥林匹克级物理推理能力的扩展。" },
    hl: {
      en: [
        "16,568 high-quality physics problems curated from 100+ textbooks via a quality-control pipeline",
        "Covers 5 major domains: Mechanics, Electromagnetism, Thermodynamics, Optics, Modern Physics",
        "Difficulty spans high school to graduate-level physics courses",
        "Rule+Model evaluation framework corrects biases in units, simplification & precision",
        "Code & data released (github.com/Zhengsh123/PHYSICS)",
      ],
      zh: [
        "从 100+ 本教材中经严格质量管控流程筛选出 16,568 道高质量物理题",
        "覆盖五大领域：力学、电磁学、热学、光学与现代物理",
        "难度从高中到研究生物理课程全覆盖",
        "提出 Rule+Model 评测框架，修正单位、化简与精度方面的评估偏差",
        "代码与数据开源 (github.com/Zhengsh123/PHYSICS)",
      ],
    },
  },
  {
    title: "P1: Mastering Physics Olympiads with Reinforcement Learning",
    authors: ["J. Chen", "Q. Cheng", "F. Yu", "H. Wan", "Y. Zhang", "S. Zheng", "J. Yao", "Q. Zhang", "H. He", "et al."],
    venue: "arXiv 2511.13612", venueClass: "arxiv", year: 2025, cites: 4, roles: [],
    cat: "science",
    links: [{ type: "arxiv", href: "https://arxiv.org/abs/2511.13612" }],
    note: { en: "First open-source model with gold-medal performance at IPhO 2025 — 12 golds across 13 competitions.", zh: "首个在 IPhO 2025 达到金牌表现的开源模型——13 项竞赛中斩获 12 枚金牌。" },
    hl: {
      en: [
        "P1-235B-A22B: first open-source model with gold-medal performance at IPhO 2025",
        "12 gold medals out of 13 international/regional physics competitions in 2024/2025",
        "P1-30B-A3B also achieves silver; agentic framework PhysicsMinions → overall No.1 on IPhO 2025",
        "Trained entirely through reinforcement learning; strong transfer to math & coding",
      ],
      zh: [
        "P1-235B-A22B：首个在 IPhO 2025 达到金牌表现的开源模型",
        "2024/2025 年 13 项国际/区域物理竞赛中斩获 12 枚金牌",
        "P1-30B-A3B 亦获银牌；配合智能体框架 PhysicsMinions 实现 IPhO 2025 总分第一",
        "完全通过强化学习训练，在数学与编程任务上展现出强大泛化能力",
      ],
    },
  },
  {
    title: "P1-VL: Bridging Visual Perception and Scientific Reasoning in Physics Olympiads",
    authors: ["Y. Luo", "F. Wang", "Q. Cheng", "F. Yu", "H. Lei", "J. Yan", "C. Li", "J. Chen", "Y. Zhao", "H. Wan", "et al."],
    venue: "AI4Math@ICML 2026", venueClass: "icml", year: 2026, cites: 4, roles: [],
    cat: "science",
    links: [{ type: "arxiv", href: "https://arxiv.org/abs/2602.09443" }],
    note: { en: "First open-source VLM with 12 gold medals on HiPhO; No.2 globally with agent augmentation.", zh: "首个在 HiPhO 夺得 12 枚金牌的开源多模态模型，智能体增强后全球排名第 2。" },
    hl: {
      en: [
        "P1-VL-235B-A22B: first open-source VLM to secure 12 gold medals on HiPhO (13 exams, 2024-2025)",
        "Curriculum Reinforcement Learning with progressive difficulty expansion stabilizes post-training",
        "Agentic Augmentation enables iterative self-verification at inference → No.2 overall, behind only Gemini-3-Pro",
        "Strong generalization to broader STEM benchmarks",
      ],
      zh: [
        "P1-VL-235B-A22B：首个在 HiPhO（2024-2025 共 13 场考试）斩获 12 枚金牌的开源多模态模型",
        "课程式强化学习 + 渐进难度扩展，稳定后训练过程",
        "智能体增强实现推理时迭代自校验，综合排名全球第 2，仅次于 Gemini-3-Pro",
        "在更广泛的 STEM 基准上展现卓越泛化能力",
      ],
    },
  },
  {
    title: "Gradient Intrinsic Dimensionality Alignment: Narrowing the Gap Between Low-Rank Adaptation and Full Fine-Tuning",
    authors: ["J. Ye", "H. He", "M. Li", "F. Han", "T. Chen", "P. Ye"],
    venue: "ICLR 2026", venueClass: "iclr", year: 2026, cites: 2, roles: ["cofirst"],
    cat: "peft",
    links: [],
    note: { en: "Co-first · Aligns gradient intrinsic dimensionality to close the LoRA ↔ full fine-tuning gap.", zh: "共一 · 通过梯度本征维度对齐，缩小 LoRA 与全量微调之间的差距。" },
    hl: {
      en: [
        "Co-first author (ICLR 2026)",
        "Aligns gradient intrinsic dimensionality between LoRA updates and full fine-tuning",
        "Narrows the performance gap between low-rank adaptation and full fine-tuning",
      ],
      zh: [
        "共同一作 (ICLR 2026)",
        "对齐 LoRA 更新与全量微调之间的梯度本征维度",
        "有效缩小低秩适配与全量微调之间的性能差距",
      ],
    },
  },
  {
    title: "E²LoRA: Efficient and Effective Low-Rank Adaptation with Entropy-Guided Adaptive Sharing",
    authors: ["M. Li", "P. Ye", "J. Ye", "H. He", "T. Chen"],
    venue: "ICLR 2026", venueClass: "iclr", year: 2026, cites: 2, roles: [],
    cat: "peft",
    links: [],
    note: { en: "Entropy-guided adaptive sharing of low-rank parameters for efficient & effective adaptation.", zh: "基于熵引导的自适应参数共享，实现高效且有效的低秩适配。" },
    hl: {
      en: [
        "Entropy-guided adaptive sharing strategy for low-rank parameters",
        "Balances efficiency and effectiveness across fine-tuning budgets",
        "ICLR 2026 acceptance",
      ],
      zh: [
        "基于熵引导的低秩参数自适应共享策略",
        "在不同微调预算下兼顾效率与效果",
        "被 ICLR 2026 接收",
      ],
    },
  },
  {
    title: "A Comprehensive Survey of LLM-Driven Collective Intelligence: Past, Present, and Future",
    authors: ["Y. Jiang", "S. Yang", "S. Tang", "S. Zheng", "J. Cao", "et al."],
    venue: "Survey 2025", venueClass: "arxiv", year: 2025, cites: 2, roles: [],
    cat: "bench",
    links: [],
    note: { en: "Systematic survey of LLM-driven collective intelligence — from multi-agent emergence to future frontiers.", zh: "系统综述 LLM 驱动的群体智能——从多智能体涌现到未来前沿。" },
    hl: {
      en: [
        "Systematic survey of LLM-driven collective intelligence",
        "Traces the evolution from single-agent emergence to collective behavior",
        "Outlines open challenges and future directions",
      ],
      zh: [
        "LLM 驱动群体智能的系统性综述",
        "梳理从单智能体涌现到群体协作行为的演进脉络",
        "展望开放挑战与未来方向",
      ],
    },
  },
  {
    title: "Scaling the Horizon, Not the Parameters: Reaching Trillion-Parameter Performance with a 35B Agent",
    authors: ["L. Bai", "Z. Cao", "Y. Chen", "Z. Cui", "S. Du", "Y. Fan", "S. Feng", "Z. Guo", "H. He", "L. He", "et al."],
    venue: "arXiv 2606.30616", venueClass: "arxiv", year: 2026, cites: 1, roles: [],
    cat: "bench",
    links: [{ type: "arxiv", href: "https://arxiv.org/abs/2606.30616" }],
    note: { en: "Agents-A1: a 35B MoE agent reaching trillion-parameter-level performance by scaling the agent horizon.", zh: "Agents-A1: 通过扩展智能体时间跨度 (horizon), 35B MoE 智能体达到万亿参数级性能。" },
    hl: {
      en: [
        "Agents-A1: a 35B MoE agentic model reaching trillion-parameter-level performance",
        "Scales agent horizon: long-horizon trajectories (avg 45K tokens) + heterogeneous agent abilities",
        "Three-stage training: full-domain SFT → domain teacher models → multi-teacher domain-routed on-policy distillation",
        "Beats 1T models on SEAL-0 (56.4), IFBench (80.6), HiPhO (46.4), FrontierScience-Olympiad (79.0), MolBench-Bind (56.8)",
      ],
      zh: [
        "Agents-A1：35B MoE 智能体模型，达到万亿参数级性能",
        "扩展智能体 horizon：长程轨迹（平均 45K token）+ 异构智能体能力",
        "三阶段训练：全域 SFT → 领域教师模型 → 多教师领域路由在线蒸馏",
        "在 SEAL-0 (56.4)、IFBench (80.6)、HiPhO (46.4)、FrontierScience-Olympiad (79.0)、MolBench-Bind (56.8) 上超越 1T 模型",
      ],
    },
  },
  {
    title: "Control-R: Towards Controllable Test-Time Scaling",
    authors: ["D. Zhang", "W. Wang", "J. Li", "X. Wang", "J. Li", "J. Wu", "J. Lei", "H. He", "P. Ye", "S. Zhang", "et al."],
    venue: "arXiv 2506.00189", venueClass: "arxiv", year: 2025, cites: 1, roles: [],
    cat: "bench",
    links: [{ type: "arxiv", href: "https://arxiv.org/abs/2506.00189" }],
    note: { en: "Reasoning Control Fields for controllable long CoT, SOTA at 32B scale on AIME2024/MATH500.", zh: "推理控制场实现可控长思维链, 在 32B 规模 AIME2024/MATH500 上达到 SOTA。" },
    hl: {
      en: [
        "Reasoning Control Fields (RCF): inject structured control signals to guide reasoning effort (tree-search perspective)",
        "Control-R-4K dataset: challenging problems annotated with reasoning processes & control fields",
        "Conditional Distillation Finetuning (CDF) trains models for controllable reasoning effort",
        "SOTA at 32B scale on AIME2024 & MATH500 with controllable long CoT",
      ],
      zh: [
        "推理控制场 (RCF)：从树搜索视角注入结构化控制信号，引导推理强度",
        "Control-R-4K 数据集：难题 + 详细推理过程与控制场标注",
        "条件蒸馏微调 (CDF) 训练模型按需调节推理强度",
        "在 32B 规模 AIME2024 与 MATH500 上达到 SOTA，实现可控长思维链",
      ],
    },
  },
  {
    title: "MoE²-LoRA: When MoE Models Meet MoE-style Low-Rank Adaptation",
    authors: ["Q. Yang", "H. He", "M. Li", "J. Ye", "T. Chen", "L. Bai", "P. Ye"],
    venue: "arXiv 2607.21978", venueClass: "arxiv", year: 2026, cites: 0, roles: ["cofirst", "lead"],
    cat: "peft",
    links: [{ type: "arxiv", href: "https://arxiv.org/abs/2607.21978" }],
    note: { en: "Co-first & project lead · MoE-style LoRA via dual-channel routing-conditioned projection.", zh: "共一兼项目负责人 · 通过双通道路由条件投影实现 MoE 风格低秩适配。" },
    hl: {
      en: [
        "Co-first author & project lead",
        "First attempt to fine-tune MoE models with MoE-style low-rank adaptation",
        "Dual-channel Routing-Conditioned Projection (RCP) reuses base router activations for LoRA routing",
        "Single global LoRA expert pool shared across layers — emergent layer-wise affinities, balanced utilization",
        "SOTA downstream accuracy across MoE backbones while retaining stronger general capability",
      ],
      zh: [
        "共同一作兼项目负责人",
        "首次以 MoE 风格低秩适配微调 MoE 模型",
        "双通道路由条件投影 (RCP)：复用底座路由激活指导 LoRA 路由",
        "跨层共享的全局 LoRA 专家池——涌现逐层亲和性、专家利用均衡",
        "在多个 MoE 底座上取得 SOTA 下游精度，同时保留更强的通用能力",
      ],
    },
  },
  {
    title: "Parametric Skills",
    authors: ["X. Zhao", "H. He", "Q. Yang", "M. Li", "J. Ye", "Z. Tan", "B. Wan", "P. Ye"],
    venue: "CBW@COLM 2026", venueClass: "arxiv", year: 2026, cites: 0, roles: ["cofirst", "lead"],
    cat: "peft",
    links: [],
    note: { en: "Co-first & project lead · Modular, reusable parametric skills for continual adaptation.", zh: "共一兼项目负责人 · 面向可持续适配的可复用参数化技能。" },
    hl: {
      en: [
        "Co-first author & project lead (CBW @ COLM 2026)",
        "Proposes modular, reusable parametric skills for LLM adaptation",
        "Aims at continual, composable skill acquisition beyond single-task fine-tuning",
      ],
      zh: [
        "共同一作兼项目负责人 (CBW @ COLM 2026)",
        "提出模块化、可复用的参数化技能用于大模型适配",
        "面向超越单任务微调的可持续、可组合技能习得",
      ],
    },
  },
  {
    title: "Clarifying Maize Knowledge Graph Question Answering Method Based on Large Language Model",
    authors: ["J. Zou", "L. Chen", "H. He", "Y. Yuan"],
    venue: "Trans. CSAE 42(5)", venueClass: "arxiv", year: 2026, cites: 0, roles: [],
    cat: "science",
    links: [],
    note: { en: "LLM-based question answering over a maize knowledge graph for agricultural applications.", zh: "基于大语言模型的玉米知识图谱问答方法，应用于农业领域。" },
    hl: {
      en: [
        "LLM-based question answering over a maize (corn) knowledge graph",
        "Published in Transactions of the CSAE (农业工程学报) 42(5)",
      ],
      zh: [
        "基于大语言模型的玉米知识图谱问答方法",
        "发表于《农业工程学报》42 卷 5 期 (2026)",
      ],
    },
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

const scholarUrl = (title) => {
  const id = SCHOLAR_CITES[title];
  return id
    ? "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=6YRQTlQAAAAJ&citation_for_view=6YRQTlQAAAAJ:" + id
    : "https://scholar.google.com/scholar?q=" + encodeURIComponent('"' + title + '"');
};

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
    const badges = (p.roles || []).map((r) =>
      '<span class="badge-fa badge-' + r + '">' + t.roleBadges[r] + "</span>"
    ).join("");
    const hl = p.hl
      ? '<details class="pub-hl"><summary>' + t.hlLabel + '</summary><ul>' +
        (p.hl[lang] || []).map((x) => "<li>" + x + "</li>").join("") + "</ul></details>"
      : "";
    const el = document.createElement("article");
    el.className = "pub";
    el.dataset.cat = p.cat;
    el.style.animationDelay = (idx * 0.05) + "s";
    el.innerHTML =
      '<div class="pub-head">' +
        '<span class="pub-title">' + p.title + '</span>' +
        '<span class="pub-venue ' + p.venueClass + '">' + p.venue + " · " + p.year + '</span>' +
        badges +
        '<span class="pub-cites">' + p.cites + ' ⭐</span>' +
      '</div>' +
      '<div class="pub-authors">' + authors + '</div>' +
      '<div class="pub-note">' + p.note[lang] + '</div>' +
      hl +
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
