/* =========================================================
   Haonan He — Personal Homepage
   i18n · particles · animations · publications data
   ========================================================= */
"use strict";

/* ---------------- i18n dictionary ---------------- */
const I18N = {
  en: {
    "hero.welcome": "👋 Welcome to my homepage", "hero.subline": "Specializing in LLM post-training: SFT · RL · On-Policy Distillation",
    "nav.about": "About", "nav.research": "Research", "nav.publications": "Publications", "nav.contact": "Contact",
    "hero.affil": "PhD Student · University of Science and Technology of China · Class of 2029",
    "hero.tag1": "LLM Post-Training", "hero.tag2": "SFT & PEFT", "hero.tag3": "RL & On-Policy Distillation",
    "hero.stat1": "Citations", "hero.stat2": "h-index", "hero.stat3": "i10-index", "hero.stat4": "Publications", "hero.stat5": "HF Downloads",
    "hero.cta1": "Google Scholar", "hero.cta2": "GitHub",
    roles: [
      "PhD Student @ USTC · Class of 2029",
      "LLM Post-Training",
      "SFT & Parameter-Efficient Fine-Tuning",
      "Reinforcement Learning for Reasoning",
      "On-Policy Distillation",
    ],
    "about.title": "About Me",
    "about.p1": "I am a <b>PhD student at the University of Science and Technology of China (USTC)</b>, expected to graduate in <b>2029</b>. My research centers on <b>LLM post-training</b> — the suite of techniques that transform base models into capable agents: <b>supervised fine-tuning (SFT)</b>, <b>reinforcement learning (RL)</b>, and <b>on-policy distillation (OPD)</b>. Across all three pillars, I care about two questions: how to make post-training <i>cheaper and more principled</i>, and how to make models <i>smarter at scientific reasoning</i> — ideally both at once.",
    "about.p2": "<b>On the SFT/PEFT side</b>, I first-authored GoRA (NeurIPS 2025), a gradient-driven framework that adaptively allocates rank and initialization and beats vanilla LoRA by 5+ points on math reasoning; the LoRAFactory unified study, the first systematic taxonomy/codebase/empirical evaluation of LoRA variants; and I co-first-authored MoE²-LoRA and Parametric Skills, alongside contributions to GIDA and E²LoRA (both ICLR 2026).",
    "about.p3": "<b>On the RL and distillation side</b>, I contributed to P1 and P1-VL — the first open-source models with gold-medal performance at IPhO 2025 — and co-developed the PHYSICS dataset and Control-R. I first-authored SimpleOPD, a tokenizer-agnostic on-policy distillation recipe that lifts Intern-S2-Preview by 21.2 points on ProofBench, surpassing Gemini-2.5-Pro. I also contributed to Agents-A1, a 35B agent reaching trillion-parameter-level performance, and ExoMind, an extended-mind-inspired scientific agentic system that beats frontier proprietary models across eight scientific benchmarks. Our open-sourced models have been downloaded <b>450K+ times on Hugging Face</b>.",
    "research.title": "Research & Highlights",
    "research.c1t": "Efficient SFT & PEFT", "research.c1d": "GoRA, E²LoRA, MoE²-LoRA, GIDA, Parametric Skills and the LoRAFactory unified study — principled, parameter-efficient fine-tuning that matches full fine-tuning at a fraction of the cost.",
    "research.c2t": "RL for Scientific Reasoning", "research.c2d": "P1, P1-VL and PHYSICS — reinforcement-learning pipelines that reach gold-medal-level performance on physics Olympiads and generalize to broader STEM reasoning.",
    "research.c3t": "On-Policy Distillation", "research.c3d": "SimpleOPD and Agents-A1 — distilling long-context teacher reasoning into compact students across tokenizers, model families and horizons.",
    "research.c4t": "AI for Science", "research.c4d": "Datasets and benchmarks that power post-training for science: Biology-Instructions, PHYSICS, and physics-Olympiad evaluation.",
    "pub.title": "Publications",
    "pub.fAll": "All", "pub.fPeft": "SFT & PEFT", "pub.fRl": "RL & Distillation", "pub.fBench": "Datasets & Benchmarks",
    "contact.title": "Contact",
    "contact.scholar": "Google Scholar", "contact.scholarD": "Profile · citation metrics",
    "contact.zhihuD": "Chinese Q&A platform",
    "contact.uni": "USTC", "contact.uniD": "Hefei, Anhui, China",
    "footer.line": "© {y} Haonan He. Built with ❤ — powered by GitHub Pages.",
    "footer.sub": "Last updated: Aug 2026 · Citation data from Google Scholar",
    links: { paper: "Paper", code: "Code", project: "Project", bib: "BibTeX", openreview: "OpenReview", researchgate: "ResearchGate" },
    roleBadges: { first: "First Author", cofirst: "Co-First Author", lead: "Project Lead" },
    hlLabel: "Key Highlights",
  },
  zh: {
    "hero.welcome": "👋 欢迎来到我的主页", "hero.subline": "专注于大模型后训练：SFT · RL · 在线蒸馏",
    "nav.about": "关于我", "nav.research": "研究方向", "nav.publications": "论文发表", "nav.contact": "联系",
    "hero.affil": "中国科学技术大学 · 博士生（2029 年毕业）",
    "hero.tag1": "大模型后训练", "hero.tag2": "SFT 与 PEFT", "hero.tag3": "强化学习与在线蒸馏",
    "hero.stat1": "总引用", "hero.stat2": "h 指数", "hero.stat3": "i10 指数", "hero.stat4": "论文数", "hero.stat5": "HF 下载量",
    "hero.cta1": "谷歌学术", "hero.cta2": "GitHub",
    roles: [
      "中科大博士生 · 2029 年毕业",
      "大模型后训练",
      "SFT 与参数高效微调",
      "用强化学习做科学推理",
      "在线蒸馏 (OPD)",
    ],
    "about.title": "关于我",
    "about.p1": "我是<b>中国科学技术大学</b>的博士生，预计 <b>2029</b> 年毕业。主要研究方向是<b>大模型后训练 (LLM Post-Training)</b>——把基座模型变成真正会推理、能落地的模型的那一套技术，包括<b>监督微调 (SFT)</b>、<b>强化学习 (RL)</b> 和<b>在线蒸馏 (OPD)</b>。我关心的始终是两件事：后训练怎么做得<b>更高效、更有依据</b>，模型怎么<b>更会科学推理</b>——最好两全其美。",
    "about.p2": "<b>SFT / PEFT 这边</b>：第一作者发表了 GoRA (NeurIPS 2025)，用训练中的梯度信息同时决定秩的大小和初始化方式，数学推理上比标准 LoRA 高出 5 分以上；又做了 LoRAFactory 统一研究，给 LoRA 变体补上了第一套系统的分类、代码库和大规模评测；MoE²-LoRA 和 Parametric Skills 是共同一作兼项目负责人，GIDA、E²LoRA 也有参与（两篇都被 ICLR 2026 接收）。",
    "about.p3": "<b>RL 和蒸馏这边</b>：参与了 P1 和 P1-VL——首批在 IPhO 2025 拿到金牌表现的开源模型，也做了 PHYSICS 数据集和 Control-R；第一作者发表了 SimpleOPD，一种不用对齐分词器的在线蒸馏方法，把 Intern-S2-Preview 在 ProofBench 上抬高了 21.2 分，超过 Gemini-2.5-Pro；还参与了 Agents-A1（35B 参数、性能比肩万亿参数模型）和 ExoMind（受延展心智启发的科学智能体系统，八项科学基准全面超过闭源模型）。这些开源模型在 Hugging Face 上累计被下载了 <b>45 万+ 次</b>。",
    "research.title": "研究方向与亮点",
    "research.c1t": "高效 SFT 与 PEFT", "research.c1d": "用一小部分训练成本达到接近全量微调的效果：GoRA、E²LoRA、MoE²-LoRA、GIDA、Parametric Skills，以及 LoRAFactory 统一研究。",
    "research.c2t": "科学推理强化学习", "research.c2d": "用强化学习把物理奥赛能力做到金牌级，再泛化到更广的 STEM 推理：P1、P1-VL、PHYSICS。",
    "research.c3t": "在线蒸馏 (OPD)", "research.c3d": "把长上下文教师的推理能力蒸馏到小模型里，不用对齐分词器、不受模型家族限制：SimpleOPD、Agents-A1。",
    "research.c4t": "AI for Science", "research.c4d": "面向科学场景的数据集和评测体系：Biology-Instructions、PHYSICS、物理奥赛基准等。",
    "pub.title": "论文发表",
    "pub.fAll": "全部", "pub.fPeft": "SFT 与 PEFT", "pub.fRl": "RL 与蒸馏", "pub.fBench": "数据集与基准",
    "contact.title": "联系我",
    "contact.scholar": "谷歌学术", "contact.scholarD": "主页 · 引用统计",
    "contact.zhihuD": "知乎主页",
    "contact.uni": "中国科学技术大学", "contact.uniD": "安徽 · 合肥",
    "footer.line": "© {y} Haonan He. 用心写代码，GitHub Pages 托管。",
    "footer.sub": "最近更新: 2026-08 · 引用数据来自 Google Scholar",
    links: { paper: "论文", code: "代码", project: "项目", bib: "BibTeX", openreview: "OpenReview", researchgate: "ResearchGate" },
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
    cat: "rl",
    links: [{ type: "arxiv", href: "https://arxiv.org/abs/2608.14277" }],
    note: { en: "First-author · Tokenizer-agnostic OPD transferring SU-01's proof reasoning to short-context students, +21.2 on ProofBench.", zh: "第一作者 · 不用对齐分词器的在线蒸馏 (OPD)，把 SU-01 的证明推理迁移到短上下文学生模型，ProofBench 提升 21.2 分。" },
    hl: {
      en: [
        "Transfers long-context proof reasoning (SU-01) to short-context students — no SFT on teacher trajectories",
        "Tokenizer-agnostic: distills in shared text space, aligning tokens with identical text spans",
        "Student reference KL loss + masked termination-token advantages prevent length explosion & instability",
        "Intern-S2-Preview: +21.2 on ProofBench (55.2), surpassing Gemini-2.5-Pro",
        "Consistent gains across Qwen3, Qwen3.5, Intern-S2, GLM-4.7, Gemma-4; generalizes to HLE & HiPhO",
      ],
      zh: [
        "把长上下文证明推理 (SU-01) 迁移到短上下文学生模型，不用在教师轨迹上做 SFT",
        "不依赖分词器：在共享文本空间蒸馏，只对齐文本跨度一致的 token",
        "加学生参考 KL 损失、屏蔽终止 token 的优势，避免长度爆炸和训练不稳定",
        "Intern-S2-Preview 在 ProofBench 提升 21.2 分 (达 55.2)，超越 Gemini-2.5-Pro",
        "在 Qwen3、Qwen3.5、Intern-S2、GLM-4.7、Gemma-4 上都有提升，还能泛化到 HLE 和 HiPhO",
      ],
    },
  },
{
    title: "GoRA: Gradient-driven Adaptive Low Rank Adaptation",
    authors: ["H. He", "P. Ye", "Y. Ren", "Y. Yuan", "L. Zhou", "S. Ju", "L. Chen"],
    venue: "NeurIPS 2025", venueClass: "neurips", year: 2025, cites: 32, roles: ["first"],
    cat: "peft",
    links: [{ type: "arxiv", href: "https://arxiv.org/abs/2502.12171" }, { type: "code", href: "https://github.com/hhnqqq/MyTransformers" }],
    note: { en: "First-author · Unified rank selection & initialization via gradient signals, +5.13 over LoRA on math reasoning.", zh: "第一作者 · 用梯度信号同时决定秩和初始化，数学推理比 LoRA 高 5.13 分。" },
    hl: {
      en: [
        "Unified framework adapting both rank selection and weight initialization simultaneously",
        "Gradient information during training dynamically assigns optimal ranks & adaptively initializes adapters",
        "Llama3.1-8B math reasoning: +5.13 over vanilla LoRA, +2.05 over full fine-tuning at high ranks",
        "Preserves vanilla LoRA efficiency across architectures and modalities",
      ],
      zh: [
        "在同一个框架里同时解决秩选择和权重初始化两大问题",
        "利用训练中的梯度信息动态分配最优秩，自适应地初始化低秩适配器",
        "Llama3.1-8B 数学推理比标准 LoRA 高 5.13 分，高秩设置下甚至超过全量微调 2.05 分",
        "保持 LoRA 原有的效率，在多种架构和模态上稳定优于现有 LoRA 方法",
      ],
    },
  },
{
    title: "Biology-Instructions: A Dataset and Benchmark for Multi-Omics Sequence Understanding Capability of Large Language Models",
    authors: ["H. He", "Y. Ren", "Y. Tang", "Z. Xu", "J. Li", "M. Yang", "D. Zhang", "D. Yuan", "T. Chen", "et al."],
    venue: "EMNLP 2025 Findings", venueClass: "emnlp", year: 2024, cites: 9, roles: ["first"],
    cat: "bench",
    links: [{ type: "arxiv", href: "https://arxiv.org/abs/2412.19191" }, { type: "code", href: "https://github.com/hhnqqq/Biology-Instructions" }],
    note: { en: "First-author · First large-scale multi-omics instruction dataset & benchmark for LLM sequence understanding.", zh: "第一作者 · 首个让 LLM 理解多组学序列的大规模指令数据集与评测基准。" },
    hl: {
      en: [
        "First large-scale instruction-tuning dataset for multi-omics sequences: DNA, RNA, proteins & multi-molecules",
        "Exposes significant limitations of current SOTA LLMs on multi-omics tasks without specialized training",
        "ChatMultiOmics baseline with a novel three-stage training pipeline",
        "Enhances biological understanding while maintaining conversational fluency; both resources open-sourced",
      ],
      zh: [
        "首个大规模多组学序列指令数据集：覆盖 DNA、RNA、蛋白质和多分子",
        "发现当前最强的大模型不经过专门训练，在多组学任务上明显力不从心",
        "还配套做了 ChatMultiOmics 基线，用三阶段流水线训练",
        "既提升生物学理解，也保持对话自然流畅，数据与模型全部开源",
      ],
    },
  },
{
    title: "A Unified Study of LoRA Variants: Taxonomy, Review, Codebase, and Empirical Evaluation",
    authors: ["H. He", "J. Ye", "M. Li", "Z. Wang", "T. Chen", "L. Bai", "P. Ye"],
    venue: "arXiv 2601.22708", venueClass: "arxiv", year: 2026, cites: 1, roles: ["first"],
    cat: "peft",
    links: [{ type: "arxiv", href: "https://arxiv.org/abs/2601.22708" }],
    note: { en: "First-author · Unified taxonomy, theory, LoRAFactory codebase & large-scale empirical evaluation of LoRA variants.", zh: "第一作者 · 首次系统梳理 LoRA 变体：分类体系、统一理论、LoRAFactory 代码库与大规模评测。" },
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
        "配套开源 LoRAFactory：模块化、即插即用的代码库，方便细粒度分析",
        "关键发现：LoRA 及其变体对学习率极其敏感；调好学习率，标准 LoRA 就能匹敌甚至超过大多数变体",
        "在自然语言生成、理解和图像分类上做了大规模评测",
      ],
    },
  },
{
    title: "Gradient Intrinsic Dimensionality Alignment: Narrowing the Gap Between Low-Rank Adaptation and Full Fine-Tuning",
    authors: ["J. Ye", "H. He", "M. Li", "F. Han", "T. Chen", "P. Ye"],
    venue: "ICLR 2026", venueClass: "iclr", year: 2026, cites: 2, roles: ["cofirst"],
    cat: "peft",
    links: [{ type: "openreview", href: "https://openreview.net/forum?id=kObvnQ6pUx" }],
    note: { en: "Co-first · RaLoRA: aligns gradient intrinsic dimensionality to close the LoRA ↔ full fine-tuning gap.", zh: "共一 · RaLoRA：通过梯度本征维度对齐，缩小 LoRA 与全量微调之间的差距。" },
    hl: {
      en: [
        "Co-first author · method named RaLoRA (ICLR 2026)",
        "Aligns gradient intrinsic dimensionality between LoRA updates and full fine-tuning",
        "Narrows the performance gap between low-rank adaptation and full fine-tuning",
      ],
      zh: [
        "共同一作 · 方法名为 RaLoRA（ICLR 2026）",
        "把 LoRA 更新和全量微调的梯度本征维度对齐",
        "明显缩小低秩适配和全量微调之间的性能差距",
      ],
    },
  },
{
    title: "MoE²-LoRA: When MoE Models Meet MoE-style Low-Rank Adaptation",
    authors: ["Q. Yang", "H. He", "M. Li", "J. Ye", "T. Chen", "L. Bai", "P. Ye"],
    venue: "arXiv 2607.21978", venueClass: "arxiv", year: 2026, cites: 0, roles: ["cofirst", "lead"],
    cat: "peft",
    links: [{ type: "arxiv", href: "https://arxiv.org/abs/2607.21978" }],
    note: { en: "Co-first & project lead · MoE-style LoRA via dual-channel routing-conditioned projection.", zh: "共一兼项目负责人 · 用双通道路由条件投影，给 MoE 模型做 MoE 风格的低秩适配。" },
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
        "双通道路由条件投影 (RCP)：复用底座的路由激活来指导 LoRA 路由",
        "跨层共享一个全局 LoRA 专家池——各层自动涌现出亲和性，专家使用也很均衡",
        "在多个 MoE 底座上拿到 SOTA 下游精度，同时保住更强的通用能力",
      ],
    },
  },
{
    title: "Parametric Skills",
    authors: ["X. Zhao", "H. He", "Q. Yang", "M. Li", "J. Ye", "Z. Tan", "B. Wan", "P. Ye"],
    venue: "CBW@COLM 2026", venueClass: "arxiv", year: 2026, cites: 0, roles: ["cofirst", "lead"],
    cat: "peft",
    links: [{ type: "arxiv", href: "https://arxiv.org/abs/2606.30015" }],
    note: { en: "Co-first & project lead · Modular, reusable parametric skills for continual adaptation.", zh: "共一兼项目负责人 · 把技能做成可复用的参数模块，支持持续适配。" },
    hl: {
      en: [
        "Co-first author & project lead (CBW @ COLM 2026)",
        "Proposes modular, reusable parametric skills for LLM adaptation",
        "Aims at continual, composable skill acquisition beyond single-task fine-tuning",
      ],
      zh: [
        "共同一作兼项目负责人 (CBW @ COLM 2026)",
        "提出模块化、可复用的参数化技能，用于大模型适配",
        "让模型能持续、组合地习得技能，而不是只会单任务微调",
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
        "中文大模型评测基准，三个子任务：CArena（真实对战场次评分）、OPEN（开放问答）、CLOSE（封闭问答）",
        "发现只靠封闭题准确率，根本反映不出用户在开放题上的真实偏好",
        "验证了用 GPT-4 当裁判，可以可靠地评估中文开放题的人类偏好",
        "被引用 108+ 次，中文大模型社区用得最多的基准之一",
      ],
    },
  },
{
    title: "Scaling Physical Reasoning with the PHYSICS Dataset",
    authors: ["S. Zheng", "Q. Cheng", "J. Yao", "M. Wu", "H. He", "N. Ding", "Y. Cheng", "S. Hu", "L. Bai", "et al."],
    venue: "NeurIPS 2025", venueClass: "neurips", year: 2025, cites: 17, roles: [],
    cat: "bench",
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
        "从 100 多本教材里，用严格的质量管控流程筛出 16,568 道高质量物理题",
        "覆盖五大领域：力学、电磁学、热学、光学、现代物理",
        "难度从高中一路覆盖到研究生课程",
        "提出 Rule+Model 评测框架，纠正单位、化简、精度上的评估偏差",
        "代码与数据开源 (github.com/Zhengsh123/PHYSICS)",
      ],
    },
  },
{
    title: "P1: Mastering Physics Olympiads with Reinforcement Learning",
    authors: ["J. Chen", "Q. Cheng", "F. Yu", "H. Wan", "Y. Zhang", "S. Zheng", "J. Yao", "Q. Zhang", "H. He", "et al."],
    venue: "arXiv 2511.13612", venueClass: "arxiv", year: 2025, cites: 4, roles: [],
    cat: "rl",
    links: [{ type: "arxiv", href: "https://arxiv.org/abs/2511.13612" }],
    note: { en: "First open-source model with gold-medal performance at IPhO 2025 — 12 golds across 13 competitions.", zh: "首个在 IPhO 2025 达到金牌水平的开源模型——13 项竞赛中斩获 12 枚金牌。" },
    hl: {
      en: [
        "P1-235B-A22B: first open-source model with gold-medal performance at IPhO 2025",
        "12 gold medals out of 13 international/regional physics competitions in 2024/2025",
        "P1-30B-A3B also achieves silver; agentic framework PhysicsMinions → overall No.1 on IPhO 2025",
        "Trained entirely through reinforcement learning; strong transfer to math & coding",
      ],
      zh: [
        "P1-235B-A22B：首个在 IPhO 2025 达到金牌水平的开源模型",
        "2024/2025 年 13 项国际/区域物理竞赛中斩获 12 枚金牌",
        "P1-30B-A3B 也拿到银牌；加上 PhysicsMinions 智能体框架，IPhO 2025 总分第一",
        "全程只用强化学习训练，在数学和编程上也表现出很强的泛化能力",
      ],
    },
  },
{
    title: "P1-VL: Bridging Visual Perception and Scientific Reasoning in Physics Olympiads",
    authors: ["Y. Luo", "F. Wang", "Q. Cheng", "F. Yu", "H. Lei", "J. Yan", "C. Li", "J. Chen", "Y. Zhao", "H. Wan", "et al."],
    venue: "AI4Math@ICML 2026", venueClass: "icml", year: 2026, cites: 4, roles: [],
    cat: "rl",
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
        "P1-VL-235B-A22B：首个在 HiPhO（2024-2025 共 13 场考试）拿下 12 枚金牌的开源多模态模型",
        "课程式强化学习配合渐进式难度扩展，让后训练更稳定",
        "智能体增强支持推理时反复自校验，综合排名全球第 2，只输给 Gemini-3-Pro",
        "在更广的 STEM 基准上也有很强的泛化能力",
      ],
    },
  },
{
    title: "E²LoRA: Efficient and Effective Low-Rank Adaptation with Entropy-Guided Adaptive Sharing",
    authors: ["M. Li", "P. Ye", "J. Ye", "H. He", "T. Chen"],
    venue: "ICLR 2026", venueClass: "iclr", year: 2026, cites: 2, roles: [],
    cat: "peft",
    links: [{ type: "openreview", href: "https://openreview.net/forum?id=IQttyo0460" }],
    note: { en: "Entropy-guided adaptive sharing of low-rank parameters for efficient & effective adaptation.", zh: "基于熵引导的自适应参数共享，实现高效且有效的低秩适配。" },
    hl: {
      en: [
        "Entropy-guided adaptive sharing strategy for low-rank parameters",
        "Balances efficiency and effectiveness across fine-tuning budgets",
        "ICLR 2026 acceptance",
      ],
      zh: [
        "用熵来引导低秩参数的自适应共享",
        "不管微调预算多还是少，都兼顾效率和效果",
        "被 ICLR 2026 接收",
      ],
    },
  },
{
    title: "A Comprehensive Survey of LLM-Driven Collective Intelligence: Past, Present, and Future",
    authors: ["Y. Jiang", "S. Yang", "S. Tang", "S. Zheng", "J. Cao", "et al."],
    venue: "Survey 2025", venueClass: "arxiv", year: 2025, cites: 2, roles: [],
    cat: "bench",
    links: [{ type: "researchgate", href: "https://www.researchgate.net/publication/395091975_A_Comprehensive_Survey_of_LLM-Driven_Collective_Intelligence_Past_Present_and_Future" }],
    note: { en: "Systematic survey of LLM-driven collective intelligence — from multi-agent emergence to future frontiers.", zh: "系统综述 LLM 驱动的群体智能——从多智能体涌现到未来前沿。" },
    hl: {
      en: [
        "Systematic survey of LLM-driven collective intelligence",
        "Traces the evolution from single-agent emergence to collective behavior",
        "Outlines open challenges and future directions",
      ],
      zh: [
        "系统综述 LLM 驱动的群体智能",
        "梳理从单智能体涌现到群体协作的演进脉络",
        "展望开放问题和未来方向",
      ],
    },
  },
{
    title: "Scaling the Horizon, Not the Parameters: Reaching Trillion-Parameter Performance with a 35B Agent",
    authors: ["L. Bai", "Z. Cao", "Y. Chen", "Z. Cui", "S. Du", "Y. Fan", "S. Feng", "Z. Guo", "H. He", "L. He", "et al."],
    venue: "arXiv 2606.30616", venueClass: "arxiv", year: 2026, cites: 1, roles: [],
    cat: "rl",
    links: [{ type: "arxiv", href: "https://arxiv.org/abs/2606.30616" }],
    note: { en: "Agents-A1: a 35B MoE agent reaching trillion-parameter-level performance by scaling the agent horizon.", zh: "Agents-A1：靠拉长智能体的时间跨度 (horizon)，35B MoE 智能体达到了万亿参数级性能。" },
    hl: {
      en: [
        "Agents-A1: a 35B MoE agentic model reaching trillion-parameter-level performance",
        "Scales agent horizon: long-horizon trajectories (avg 45K tokens) + heterogeneous agent abilities",
        "Three-stage training: full-domain SFT → domain teacher models → multi-teacher domain-routed on-policy distillation",
        "Beats 1T models on SEAL-0 (56.4), IFBench (80.6), HiPhO (46.4), FrontierScience-Olympiad (79.0), MolBench-Bind (56.8)",
      ],
      zh: [
        "Agents-A1：35B MoE 智能体模型，达到万亿参数级性能",
        "扩展智能体的 horizon：超长轨迹（平均 45K token）加异构智能体能力",
        "三阶段训练：全域 SFT → 各领域教师模型 → 多教师领域路由在线蒸馏",
        "在 SEAL-0 (56.4)、IFBench (80.6)、HiPhO (46.4)、FrontierScience-Olympiad (79.0)、MolBench-Bind (56.8) 上超越 1T 模型",
      ],
    },
  },
{
    title: "Control-R: Towards Controllable Test-Time Scaling",
    authors: ["D. Zhang", "W. Wang", "J. Li", "X. Wang", "J. Li", "J. Wu", "J. Lei", "H. He", "P. Ye", "S. Zhang", "et al."],
    venue: "arXiv 2506.00189", venueClass: "arxiv", year: 2025, cites: 1, roles: [],
    cat: "rl",
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
        "推理控制场 (RCF)：从树搜索的视角注入结构化控制信号，让模型想得深或想得快",
        "Control-R-4K 数据集：难题配上详细推理过程和控制场标注",
        "条件蒸馏微调 (CDF) 训练模型按需调节推理深度",
        "在 32B 规模的 AIME2024 和 MATH500 上达到 SOTA，长思维链想长想短都可控",
      ],
    },
  },
  {
    title: "ExoMind: Democratizing Scientific Intelligence via Extended-Mind-Inspired Agentic System",
    authors: ["P. Ye", "Z. Liu", "J. Ye", "F. Yu", "S. Tang", "Y. Jiang", "H. He", "Z. Cao", "T. Chen", "B. Zhang", "et al."],
    venue: "Tech Report 2026", venueClass: "arxiv", year: 2026, cites: 0, roles: [],
    cat: "rl",
    links: [
      { type: "paper", href: "https://github.com/AI4SGI/ExoMind/blob/main/Paper.pdf" },
      { type: "code", href: "https://github.com/AI4SGI/ExoMind" },
      { type: "project", href: "https://ai4sgi.github.io/ExoMind/" },
    ],
    note: { en: "Extended-mind-inspired agentic system for science — 8-benchmark average 36.2 → 67.5, surpassing frontier proprietary models with a 35B-A3B model.", zh: "受「延展心智」启发的科学智能体系统——8 项科学基准平均分从 36.2 涨到 67.5，35B-A3B 的小模型打败了闭源前沿模型。" },
    hl: {
      en: [
        "First extended-mind-inspired agentic system for scientific domains",
        "Training-value-aware data engineering: 60K problem pool filtered to ~30K challenging, routed problems",
        "Deeply specialized scientific interaction: source discovery, grounding, executable verification, observation integration as typed objects",
        "Two-stage hybrid Chain-of-Interaction training with training-inference consistency",
        "Qwen3.5-35B-A3B + few thousand trajectories + 1-2 days of SFT on 8×H200 → 67.5 avg across 8 scientific benchmarks, besting Claude/GPT/Gemini/DeepSeek",
        "Improves all six general-capability benchmarks over the base model",
      ],
      zh: [
        "首个面向科学领域的受延展心智启发的智能体系统",
        "会算账的数据工程：6 万道题的池子，筛到约 3 万道难题再按能力路由",
        "深度专业化的科学交互：把找来源、溯源、可执行验证、观测整合抽象成类型化交互对象",
        "两阶段混合 Chain-of-Interaction 训练，加上训练-推理一致性约束",
        "Qwen3.5-35B-A3B + 几千条轨迹 + 8×H200 训练 1-2 天，8 项科学基准平均 67.5，超过 Claude/GPT/Gemini/DeepSeek",
        "6 项通用能力基准对比基座模型全部提升",
      ],
    },
  },
  {
    title: "Clarifying Maize Knowledge Graph Question Answering Method Based on Large Language Model",
    authors: ["J. Zou", "L. Chen", "H. He", "Y. Yuan"],
    venue: "Trans. CSAE 42(5)", venueClass: "arxiv", year: 2026, cites: 0, roles: [],
    cat: "bench",
    links: [],
    note: { en: "LLM-based question answering over a maize knowledge graph for agricultural applications.", zh: "用大语言模型做玉米知识图谱问答，服务农业应用。" },
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

/* ---------------- research highlights (all publications, best bits) ---------------- */
const HIGHLIGHTS = [
  {
    icon: "⚡", cat: "peft",
    title: { en: "Efficient SFT & PEFT", zh: "高效 SFT 与 PEFT" },
    desc: {
      en: "Principled, parameter-efficient fine-tuning that matches full fine-tuning at a fraction of the cost.",
      zh: "用一小部分训练成本达到接近全量微调的效果。",
    },
    items: [
      { name: "GoRA", href: "https://arxiv.org/abs/2502.12171",
        en: "First-author (NeurIPS 2025) · +5.13 on math reasoning, beats full fine-tuning at high ranks",
        zh: "一作（NeurIPS 2025）· 数学推理 +5.13，高秩下超过全量微调" },
      { name: "LoRA Variants Study", href: "https://arxiv.org/abs/2601.22708",
        en: "First-author · first unified taxonomy, LoRAFactory codebase & large-scale evaluation",
        zh: "一作 · 首个统一分类体系、LoRAFactory 代码库与大规模评测" },
      { name: "MoE²-LoRA", href: "https://arxiv.org/abs/2607.21978",
        en: "Co-first & lead · first MoE-style LoRA for MoE models, SOTA downstream accuracy",
        zh: "共一兼负责人 · 首个给 MoE 模型做 MoE 风格低秩适配，SOTA 下游精度" },
      { name: "GIDA · E²LoRA", href: "https://openreview.net/forum?id=kObvnQ6pUx",
        en: "ICLR 2026 · closing the gap between LoRA and full fine-tuning",
        zh: "ICLR 2026 · 缩小 LoRA 与全量微调的差距" },
      { name: "Parametric Skills", href: "https://arxiv.org/abs/2606.30015",
        en: "Co-first & lead (COLM 2026) · reusable parametric skills for continual adaptation",
        zh: "共一兼负责人（COLM 2026）· 可复用的参数化技能" },
    ],
  },
  {
    icon: "🧠", cat: "rl",
    title: { en: "RL for Scientific Reasoning", zh: "科学推理强化学习" },
    desc: {
      en: "Reinforcement-learning pipelines that reach gold-medal-level physics performance and generalize to broader STEM reasoning.",
      zh: "用强化学习把物理奥赛能力做到金牌级，再泛化到更广的 STEM 推理。",
    },
    items: [
      { name: "P1", href: "https://arxiv.org/abs/2511.13612",
        en: "First open-source gold medal at IPhO 2025 · 12 golds out of 13 competitions",
        zh: "首个在 IPhO 2025 拿金牌的开源模型 · 13 项竞赛 12 金" },
      { name: "P1-VL", href: "https://arxiv.org/abs/2602.09443",
        en: "First open-source VLM with 12 golds on HiPhO · No.2 globally, behind only Gemini-3-Pro",
        zh: "首个在 HiPhO 拿 12 金的开源多模态模型 · 全球第 2，仅次于 Gemini-3-Pro" },
      { name: "PHYSICS Dataset", href: "https://arxiv.org/abs/2506.00022",
        en: "NeurIPS 2025 · 16,568 curated problems across 5 domains, high-school to graduate level",
        zh: "NeurIPS 2025 · 16,568 道精选题，5 大领域，高中到研究生难度" },
      { name: "Control-R", href: "https://arxiv.org/abs/2506.00189",
        en: "Controllable test-time scaling · SOTA at 32B on AIME2024 / MATH500",
        zh: "可控测试时扩展 · 32B 规模 AIME2024 / MATH500 达到 SOTA" },
    ],
  },
  {
    icon: "🔁", cat: "rl",
    title: { en: "On-Policy Distillation", zh: "在线蒸馏 (OPD)" },
    desc: {
      en: "Distilling long-context teacher reasoning into compact students, across tokenizers and model families.",
      zh: "把长上下文教师的推理能力蒸馏到小模型里，不用对齐分词器、不受模型家族限制。",
    },
    items: [
      { name: "SimpleOPD", href: "https://arxiv.org/abs/2608.14277",
        en: "First-author · +21.2 on ProofBench, surpassing Gemini-2.5-Pro (Intern-S2-Preview)",
        zh: "一作 · ProofBench +21.2 分，超过 Gemini-2.5-Pro（Intern-S2-Preview）" },
      { name: "Agents-A1", href: "https://arxiv.org/abs/2606.30616",
        en: "35B MoE agent reaching trillion-parameter-level performance · 450K+ HF downloads",
        zh: "35B 智能体达到万亿参数级性能 · Hugging Face 下载 45 万+" },
    ],
  },
  {
    icon: "🧬", cat: "bench",
    title: { en: "Datasets & AI for Science", zh: "数据集与 AI for Science" },
    desc: {
      en: "Datasets and benchmarks that power post-training for science.",
      zh: "面向科学场景的数据集和评测体系。",
    },
    items: [
      { name: "ExoMind", href: "https://github.com/AI4SGI/ExoMind",
        en: "8-benchmark average 36.2 → 67.5, beating Claude / GPT / Gemini / DeepSeek with a 35B model",
        zh: "8 项科学基准平均 36.2 → 67.5，35B 模型打败 Claude / GPT / Gemini / DeepSeek" },
      { name: "Biology-Instructions", href: "https://arxiv.org/abs/2412.19191",
        en: "First-author (EMNLP 2025 Findings) · first multi-omics instruction dataset for LLMs",
        zh: "一作（EMNLP 2025 Findings）· 首个 LLM 多组学指令数据集" },
      { name: "SuperCLUE", href: "https://arxiv.org/abs/2307.15020",
        en: "Chinese LLM benchmark with 108+ citations",
        zh: "中文大模型基准，被引用 108+ 次" },
      { name: "CI Survey · Maize", href: "https://www.researchgate.net/publication/395091975_A_Comprehensive_Survey_of_LLM-Driven_Collective_Intelligence_Past_Present_and_Future",
        en: "LLM collective-intelligence survey · maize knowledge-graph QA (Trans. CSAE)",
        zh: "LLM 群体智能综述 · 玉米知识图谱问答（农业工程学报）" },
    ],
  },
];

function renderHighlights() {
  const grid = document.getElementById("hlGrid");
  if (!grid) return;
  const t = I18N[lang];
  grid.innerHTML = HIGHLIGHTS.map((g, gi) =>
    '<div class="hl-card hl-card-' + g.cat + '">' +
      '<div class="hl-num">' + String(gi + 1).padStart(2, "0") + "</div>" +
      '<div class="hl-head"><span class="hl-icon">' + g.icon + "</span><h3>" + g.title[lang] + "</h3>" +
        '<span class="hl-toggle">' + g.items.length + " · " + (lang === "zh" ? "展开" : "Open") + " ▾</span></div>" +
      '<p class="hl-desc">' + (g.desc ? g.desc[lang] : "") + "</p>" +
      '<div class="hl-list"><div class="hl-list-inner"><ul>' +
        g.items.map((it) =>
          '<li><a href="' + it.href + '" target="_blank" rel="noopener"><b>' + it.name + "</b> — " +
          it[lang] + "</a></li>"
        ).join("") +
      "</ul></div></div>" +
    "</div>"
  ).join("");
  if (!grid.dataset.bound) {
    grid.dataset.bound = "1";
    grid.addEventListener("click", (e) => {
      const link = e.target.closest("a");
      if (link) return; // let links navigate
      const card = e.target.closest(".hl-card");
      if (card) card.classList.toggle("open");
    });
  }
  // equal heights while collapsed: tallest card sets the height for all
  const cards = [...grid.querySelectorAll(".hl-card")];
  cards.forEach((c) => (c.style.minHeight = ""));
  const h = Math.max(...cards.map((c) => c.offsetHeight));
  cards.forEach((c) => (c.style.minHeight = h + "px"));
}

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

const FIG_MAP = {
  "SimpleOPD: Simple Tokenizer-Agnostic On-Policy Distillation for Long-Context Reasoning": "SimpleOPD.jpg",
  "GoRA: Gradient-driven Adaptive Low Rank Adaptation": "GoRA.jpg",
  "Biology-Instructions: A Dataset and Benchmark for Multi-Omics Sequence Understanding Capability of Large Language Models": "Biology-Instructions.jpg",
  "A Unified Study of LoRA Variants: Taxonomy, Review, Codebase, and Empirical Evaluation": "LoRA-Variants.jpg",
  "SuperCLUE: A Comprehensive Chinese Large Language Model Benchmark": "SuperCLUE.jpg",
  "Scaling Physical Reasoning with the PHYSICS Dataset": "PHYSICS.jpg",
  "P1: Mastering Physics Olympiads with Reinforcement Learning": "P1.svg",
  "P1-VL: Bridging Visual Perception and Scientific Reasoning in Physics Olympiads": "P1-VL.svg",
  "Gradient Intrinsic Dimensionality Alignment: Narrowing the Gap Between Low-Rank Adaptation and Full Fine-Tuning": "GIDA.jpg",
  "E²LoRA: Efficient and Effective Low-Rank Adaptation with Entropy-Guided Adaptive Sharing": "E2LoRA.jpg",
  "A Comprehensive Survey of LLM-Driven Collective Intelligence: Past, Present, and Future": "CI-Survey.jpg",
  "Scaling the Horizon, Not the Parameters: Reaching Trillion-Parameter Performance with a 35B Agent": "Agents-A1.jpg",
  "Control-R: Towards Controllable Test-Time Scaling": "Control-R.jpg",
  "MoE²-LoRA: When MoE Models Meet MoE-style Low-Rank Adaptation": "MoE2-LoRA.jpg",
  "ExoMind: Democratizing Scientific Intelligence via Extended-Mind-Inspired Agentic System": "ExoMind.jpg",
  "Parametric Skills": "Parametric-Skills.jpg",
  "Clarifying Maize Knowledge Graph Question Answering Method Based on Large Language Model": "Maize.jpg",
};

/* aspect ratio of each figure, so cards never crop the image */
const FIG_RATIO = {
  "SimpleOPD: Simple Tokenizer-Agnostic On-Policy Distillation for Long-Context Reasoning": 1.76,
  "GoRA: Gradient-driven Adaptive Low Rank Adaptation": 1.98,
  "Biology-Instructions: A Dataset and Benchmark for Multi-Omics Sequence Understanding Capability of Large Language Models": 3.29,
  "A Unified Study of LoRA Variants: Taxonomy, Review, Codebase, and Empirical Evaluation": 2.12,
  "SuperCLUE: A Comprehensive Chinese Large Language Model Benchmark": 4.67,
  "Scaling Physical Reasoning with the PHYSICS Dataset": 3.06,
  "P1: Mastering Physics Olympiads with Reinforcement Learning": 2.52,
  "P1-VL: Bridging Visual Perception and Scientific Reasoning in Physics Olympiads": 2.35,
  "Gradient Intrinsic Dimensionality Alignment: Narrowing the Gap Between Low-Rank Adaptation and Full Fine-Tuning": 1.69,
  "E²LoRA: Efficient and Effective Low-Rank Adaptation with Entropy-Guided Adaptive Sharing": 1.55,
  "A Comprehensive Survey of LLM-Driven Collective Intelligence: Past, Present, and Future": 1.31,
  "Scaling the Horizon, Not the Parameters: Reaching Trillion-Parameter Performance with a 35B Agent": 1.79,
  "Control-R: Towards Controllable Test-Time Scaling": 1.0,
  "MoE²-LoRA: When MoE Models Meet MoE-style Low-Rank Adaptation": 2.22,
  "ExoMind: Democratizing Scientific Intelligence via Extended-Mind-Inspired Agentic System": 2.51,
  "Parametric Skills": 2.45,
  "Clarifying Maize Knowledge Graph Question Answering Method Based on Large Language Model": 2.71,
};

/* ---------------- Hugging Face download stats ---------------- */
const HF_MODELS = {
  "P1: Mastering Physics Olympiads with Reinforcement Learning": [
    "PRIME-RL/P1-235B-A22B", "PRIME-RL/P1-30B-A3B",
  ],
  "P1-VL: Bridging Visual Perception and Scientific Reasoning in Physics Olympiads": [
    "PRIME-RL/P1-VL-235B-A22B", "PRIME-RL/P1-VL-30B-A3B",
  ],
  "Scaling the Horizon, Not the Parameters: Reaching Trillion-Parameter Performance with a 35B Agent": [
    "InternScience/Agents-A1", "InternScience/Agents-A1-4B", "InternScience/Agents-A1-Q4_K_M-GGUF",
    "InternScience/Agents-A1-4B-Q4_K_M-GGUF", "InternScience/Agents-A1-FP8", "InternScience/Agents-A1-F16-GGUF",
    "InternScience/Agents-A1-Q8_0-GGUF", "InternScience/Agents-A1-4B-F16-GGUF", "InternScience/Agents-A1-4B-Q8_0-GGUF",
  ],
  "SimpleOPD: Simple Tokenizer-Agnostic On-Policy Distillation for Long-Context Reasoning": [
    "bingyang-lei/Qwen3.5-35B-A3B-SimpleOPD", "bingyang-lei/Intern-S2-Preview-SimpleOPD",
  ],
  "ExoMind: Democratizing Scientific Intelligence via Extended-Mind-Inspired Agentic System": [
    "AI4SGI/ExoMind", "AI4SGI/ExoMind-9B",
  ],
};

(function hfDownloads() {
  const CACHE_KEY = "hh-hf-v1";
  const CACHE_TTL = 6 * 3600 * 1000;
  const fmtNum = (n) =>
    n >= 1e6 ? (n / 1e6).toFixed(1) + "M"
    : n >= 1e3 ? Math.round(n / 1e3) + "K"
    : String(n);

  let totals = {};
  let loaded = false;

  function render() {
    const sum = Object.values(totals).reduce((a, b) => a + b, 0);
    const heroEl = document.getElementById("hfDownloads");
    if (heroEl) heroEl.textContent = loaded ? fmtNum(sum) : "…";
    for (const [title, mids] of Object.entries(HF_MODELS)) {
      const sub = mids.reduce((a, id) => a + (totals[id] || 0), 0);
      const card = [...document.querySelectorAll(".pub")].find((el) =>
        el.querySelector(".pub-title")?.textContent === title
      );
      if (!card || card.querySelector(".hf-badge")) continue;
      const badge = document.createElement("a");
      badge.className = "hf-badge";
      badge.href = "https://huggingface.co/" + mids[0];
      badge.target = "_blank";
      badge.rel = "noopener";
      badge.textContent = "🤗 " + (loaded ? fmtNum(sub) : "…");
      card.querySelector(".pub-head").appendChild(badge);
    }
  }

  // cached totals first
  try {
    const c = JSON.parse(localStorage.getItem(CACHE_KEY));
    if (c && Date.now() - c.ts < CACHE_TTL && c.data) {
      totals = c.data;
      render();
    }
  } catch (e) {}

  const ids = [...new Set(Object.values(HF_MODELS).flat())];
  Promise.allSettled(
    ids.map((id) =>
      fetch("https://huggingface.co/api/models/" + id, { signal: AbortSignal.timeout(8000) })
        .then((r) => (r.ok ? r.json() : Promise.reject(new Error(r.status))))
        .then((j) => { totals[id] = j.downloads || 0; })
    )
  ).then(() => {
    loaded = true;
    try { localStorage.setItem(CACHE_KEY, JSON.stringify({ ts: Date.now(), data: totals })); } catch (e) {}
    render();
  });
})();

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
  renderHighlights();
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
    const fig = FIG_MAP[p.title]
      ? '<div class="pub-fig" style="aspect-ratio:' + (FIG_RATIO[p.title] || 1.6) + '"><img src="img/papers/' + FIG_MAP[p.title] +
        '" alt="' + p.title + '" decoding="async" onload="this.classList.add(\'loaded\');var w=this.parentElement.clientWidth,r=this.naturalWidth/this.naturalHeight;this.style.objectFit=(w/r<260)?\'contain\':\'cover\';">' +
        '<span class="fig-zoom-hint">🔍 ' +
        (lang === "zh" ? "点击放大" : "Click to zoom") + '</span></div>'
      : "";
    const el = document.createElement("article");
    el.className = "pub";
    el.dataset.cat = p.cat;
    el.style.animationDelay = (idx * 0.05) + "s";
    el.innerHTML =
      fig +
      '<div class="pub-body">' +
        '<div class="pub-head">' +
          '<span class="pub-title">' + p.title + '</span>' +
          '<span class="pub-venue ' + p.venueClass + '">' + p.venue + " · " + p.year + '</span>' +
          badges +
          '<span class="pub-cites">' + p.cites + ' ⭐</span>' +
        '</div>' +
        '<div class="pub-authors">' + authors + '</div>' +
        '<div class="pub-note">' + p.note[lang] + '</div>' +
        hl +
        '<div class="pub-links">' + links.join("") + '</div>' +
      '</div>';
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

/* ---------------- dynamic background (particles / rain / snow / off) ---------------- */
(function bgFX() {
  const canvas = document.getElementById("bg-canvas");
  const ctx = canvas && canvas.getContext ? canvas.getContext("2d") : null;
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!ctx || reduced) {
    const btns = document.querySelectorAll(".bg-btn");
    btns.forEach((b) => b.classList.remove("active"));
    return;
  }

  let w, h, raf = null;
  let mode = localStorage.getItem("hh-bg") || "particles";
  const isMobile = window.innerWidth < 768 || (navigator.deviceMemory && navigator.deviceMemory < 4);
  if (isMobile) mode = "off"; // save memory/CPU on phones by default
  const ptColors = ["99,102,241", "6,182,212", "236,72,153"];
  let pts = [], drops = [], ripples = [], flakes = [];

  const resize = () => {
    w = canvas.width = window.innerWidth * devicePixelRatio;
    h = canvas.height = window.innerHeight * devicePixelRatio;
  };
  resize();
  window.addEventListener("resize", resize);

  /* ---- particles (network) ---- */
  function initParticles() {
    pts = [];
    for (let i = 0; i < 80; i++) {
      pts.push({
        x: Math.random() * w, y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.35 * devicePixelRatio,
        vy: (Math.random() - 0.5) * 0.35 * devicePixelRatio,
        r: (Math.random() * 1.6 + 0.5) * devicePixelRatio,
        c: ptColors[i % 3],
      });
    }
  }
  function frameParticles() {
    ctx.clearRect(0, 0, w, h);
    for (const p of pts) {
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0 || p.x > w) p.vx *= -1;
      if (p.y < 0 || p.y > h) p.vy *= -1;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(" + p.c + ",0.55)";
      ctx.shadowColor = "rgba(" + p.c + ",0.6)";
      ctx.shadowBlur = 8;
      ctx.fill();
      ctx.shadowBlur = 0;
    }
    for (let i = 0; i < pts.length; i++) {
      for (let j = i + 1; j < pts.length; j++) {
        const dx = pts[i].x - pts[j].x, dy = pts[i].y - pts[j].y;
        const d2 = dx * dx + dy * dy;
        if (d2 < 150 * 150 * devicePixelRatio) {
          ctx.strokeStyle = "rgba(99,102,241," + (0.16 * (1 - Math.sqrt(d2) / (150 * devicePixelRatio))) + ")";
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(pts[i].x, pts[i].y);
          ctx.lineTo(pts[j].x, pts[j].y);
          ctx.stroke();
        }
      }
    }
  }

  /* ---- rain ---- */
  function frameRain() {
    ctx.clearRect(0, 0, w, h);
    // spawn
    for (let i = 0; i < 3; i++) {
      if (drops.length < 160) {
        drops.push({
          x: Math.random() * (w + 100) - 50,
          y: Math.random() * -80 * devicePixelRatio,
          vx: (1.4 + Math.random() * 1.6) * devicePixelRatio,
          vy: (7 + Math.random() * 5) * devicePixelRatio,
          len: (14 + Math.random() * 12) * devicePixelRatio,
          alpha: 0.12 + Math.random() * 0.16,
        });
      }
    }
    ctx.lineCap = "round";
    for (const d of drops) {
      d.x += d.vx; d.y += d.vy;
      ctx.strokeStyle = "rgba(91, 100, 148," + d.alpha + ")";
      ctx.lineWidth = 1.3 * devicePixelRatio;
      ctx.beginPath();
      ctx.moveTo(d.x, d.y);
      ctx.lineTo(d.x - d.vx * 2.2, d.y - d.len);
      ctx.stroke();
      if (d.y > h + 30) {
        ripples.push({ x: d.x, y: h - (Math.random() * 30 * devicePixelRatio), r: 2 * devicePixelRatio, a: 0.35 });
        drops.splice(drops.indexOf(d), 1);
      }
    }
    // ripples
    for (let i = ripples.length - 1; i >= 0; i--) {
      const r = ripples[i];
      r.r += 1.4 * devicePixelRatio;
      r.a *= 0.94;
      if (r.a < 0.02) { ripples.splice(i, 1); continue; }
      ctx.strokeStyle = "rgba(99, 102, 241," + r.a + ")";
      ctx.lineWidth = 1 * devicePixelRatio;
      ctx.beginPath();
      ctx.arc(r.x, r.y, r.r, 0, Math.PI * 2);
      ctx.stroke();
    }
  }

  /* ---- snow ---- */
  function frameSnow() {
    ctx.clearRect(0, 0, w, h);
    for (let i = 0; i < 2; i++) {
      if (flakes.length < 90) {
        flakes.push({
          x: Math.random() * (w + 60) - 30,
          y: Math.random() * -60 * devicePixelRatio,
          vy: (0.6 + Math.random() * 1.1) * devicePixelRatio,
          amp: (20 + Math.random() * 40) * devicePixelRatio,
          phase: Math.random() * Math.PI * 2,
          speed: (0.01 + Math.random() * 0.02),
          r: (1.6 + Math.random() * 2.4) * devicePixelRatio,
        });
      }
    }
    for (const f of flakes) {
      f.y += f.vy;
      f.phase += f.speed;
      f.x += Math.sin(f.phase) * 0.6 * devicePixelRatio;
      if (f.y > h + 20) { f.y = -10 * devicePixelRatio; f.x = Math.random() * w; }
      if (f.x < -30) f.x = w + 20;
      if (f.x > w + 30) f.x = -20;
      ctx.beginPath();
      ctx.arc(f.x, f.y, f.r, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(99, 102, 241, 0.35)";
      ctx.fill();
    }
  }

  const frames = { particles: frameParticles, rain: frameRain, snow: frameSnow };

  function loop() {
    if (frames[mode]) frames[mode]();
    else ctx.clearRect(0, 0, w, h);
    raf = requestAnimationFrame(loop);
  }

  function applyMode(m, persist) {
    if (m !== "off" && !frames[m]) return;
    mode = m;
    drops = []; ripples = []; flakes = []; pts = [];
    if (m === "particles") initParticles();
    if (persist) localStorage.setItem("hh-bg", m);
    document.querySelectorAll(".bg-btn").forEach((b) =>
      b.classList.toggle("active", b.dataset.bg === m)
    );
  }

  applyMode(mode, false);
  loop();

  document.querySelector("#bgControls").addEventListener("click", (e) => {
    const btn = e.target.closest(".bg-btn");
    if (btn) applyMode(btn.dataset.bg, true);
  });
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

/* 3D tilt on highlight cards */
if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  document.querySelectorAll(".hl-card").forEach((card) => {
    card.addEventListener("mousemove", (e) => {
      const r = card.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5;
      const py = (e.clientY - r.top) / r.height - 0.5;
      card.style.transform = "perspective(700px) rotateX(" + (-py * 7).toFixed(2) + "deg) rotateY(" + (px * 7).toFixed(2) + "deg) translateY(-4px)";
    });
    card.addEventListener("mouseleave", () => {
      card.style.transform = "";
    });
  });
}

/* mouse-follow spotlight */
(function spotlight() {
  const spot = document.getElementById("spotlight");
  if (!spot || !window.matchMedia("(pointer: fine)").matches) return;
  // .spotlight is placed at left/top:-260px so its CENTER sits at the origin;
  // translate(cx, cy) moves that center exactly onto the cursor.
  let tx = window.innerWidth / 2, ty = window.innerHeight / 2;
  let cx = tx, cy = ty;
  let visible = false;
  document.addEventListener("mousemove", (e) => {
    tx = e.clientX; ty = e.clientY;
    if (!visible) {
      cx = tx; cy = ty;          // snap onto the cursor on first move
      spot.style.opacity = "1";
      visible = true;
    }
  }, { passive: true });
  document.addEventListener("mouseleave", () => {
    spot.style.opacity = "0";
    visible = false;
  });
  (function follow() {
    cx += (tx - cx) * 0.25;      // tight follow, minimal lag
    cy += (ty - cy) * 0.25;
    spot.style.transform = "translate(" + cx + "px," + cy + "px)";
    requestAnimationFrame(follow);
  })();
})();

/* scroll progress bar */
(function progressBar() {
  const bar = document.getElementById("progressBar");
  if (!bar) return;
  window.addEventListener("scroll", () => {
    const h = document.documentElement.scrollHeight - window.innerHeight;
    bar.style.width = (h > 0 ? (window.scrollY / h) * 100 : 0) + "%";
  }, { passive: true });
})();

/* active-section highlighted nav link */
(function navSpy() {
  const links = document.querySelectorAll(".nav-links a");
  const secs = [...document.querySelectorAll(".section")];
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (!e.isIntersecting) return;
      const id = e.target.id;
      links.forEach((l) => l.classList.toggle("active", l.hash === "#" + id));
    });
  }, { threshold: 0.3 });
  secs.forEach((s) => io.observe(s));
})();

/* ---------------- lightbox (click figure to zoom) ---------------- */
(function lightbox() {
  const lb = document.getElementById("lightbox");
  const lbImg = document.getElementById("lbImg");
  const lbClose = document.getElementById("lbClose");
  if (!lb || !lbImg) return;

  function open(src, alt) {
    lbImg.src = src;
    lbImg.alt = alt || "";
    lb.classList.add("open");
    document.body.style.overflow = "hidden";
  }
  function close() {
    lb.classList.remove("open");
    document.body.style.overflow = "";
    lbImg.src = "";
  }
  document.addEventListener("click", (e) => {
    const img = e.target.closest(".pub-fig img");
    if (img) {
      open(img.dataset.full || img.currentSrc || img.src, img.alt);
      return;
    }
    if (e.target === lb || e.target === lbClose) close();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") close();
  });
})();
function init() {
  applyLang();
  animateCounts();
  initTicker();
}
if (document.readyState !== "loading") {
  init();
} else {
  document.addEventListener("DOMContentLoaded", init);
}

function initTicker() {
  const track = document.getElementById("tickerTrack");
  if (!track) return;
  const chips = PAPERS.map((p) => p.venue);
  chips.push("Google Scholar", "GitHub @hhnqqq", "Open Source", "LLM · PEFT · AI4Science");
  const uniq = [...new Set(chips)];
  const half = uniq
    .map((v) => '<span class="ticker-chip"><span class="t-dot"></span>' + v + "</span>")
    .join("");
  track.innerHTML = half + half;
}
