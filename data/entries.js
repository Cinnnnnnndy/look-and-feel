// 启动页数据源。新增条目时在数组最前面追加一项。
// scene 为产品场景（启动页按它分类），取值见下方 LF_SCENES；不在列表里的归入「其他」。
// path 为条目目录（相对仓库根），cover 为封面图（相对仓库根，可省略）。
window.LF_CONFIG = {
  repo: "https://github.com/Cinnnnnnndy/look-and-feel",
  branch: "main",
};

// 产品场景分类，顺序即启动页上的显示顺序。需要新场景时直接加在这里。
window.LF_SCENES = [
  "品牌与营销传播",
  "工作流自动化",
  "协作白板",
  "设计工具",
  "开发工具",
  "办公文档",
  "社交内容",
  "电商消费",
  "出行生活",
  "系统与OS",
  "SaaS 仪表盘",
  "健康医疗",
  "官网落地页",
];

window.LF_ENTRIES = [
  {
  "product": "Stormlikes",
  "scene": "品牌与营销传播",
  "title": "云朵角色 + 窄体大字：跨媒介品牌视觉系统",
  "summary": "紫粉色块、黑白云朵线稿和窄体标题贯穿网页、服装与广告；购买组件收敛为浅底、深色选中态和明确 CTA。",
  "link": "https://dribbble.com/shots/27422066-Stormlikes-Bento-Identity-Campaign-Visual-System",
  "date": "2026-10-29",
  "platform": "Web / 社交 / 户外 / 服装展示",
  "tags": [
    "品牌系统",
    "Bento 展示",
    "2D 吉祥物",
    "窄体标题",
    "跨媒介"
  ],
  "path": "entries/2026/2026-10-29-Stormlikes",
  "cover": "entries/2026/2026-10-29-Stormlikes/01.png"
},
  {
  "product": "Nyuman",
  "scene": "工作流自动化",
  "title": "毛绒数字同事：3D 工作空间与画布帮助入口",
  "summary": "四种毛绒轮廓围绕白色流程画布，黄色角色在屏内帮助入口复现；以颜色、轮廓和道具区分职责。",
  "link": "https://dribbble.com/shots/27839057-Nyuman-3D-Character-Design-Digital-Workspaces",
  "date": "2026-10-29",
  "platform": "Web（品牌展示图）",
  "tags": [
    "3D 角色",
    "数字同事",
    "毛绒材质",
    "工作流",
    "帮助入口"
  ],
  "path": "entries/2026/2026-10-29-Nyuman",
  "cover": "entries/2026/2026-10-29-Nyuman/01.png"
},
  {
    product: "heypcb",
    scene: "开发工具",
    summary: "白色极简外壳 + 原汁原味的 KiCad 淡黄图纸；左侧 AI 对话先出计划再改板，空状态同时教「问 Inky」和按 A / W 手动画。",
    title: "AI PCB 编辑器：对话面板 + KiCad 图纸画布 + 先计划后批准的 Agent",
    link: "https://heypcb.ai/",
    date: "2026-10-27",
    platform: "Web",
    tags: ["AI Agent", "专业编辑器", "画布", "空状态", "视图切换", "浮动工具栏", "快捷键", "付费墙"],
    path: "entries/2026/2026-10-27-heypcb",
    cover: "entries/2026/2026-10-27-heypcb/01.png",
  },
  {
    product: "WayPilot",
    scene: "官网落地页",
    summary: "白底点阵 + 紫黄柔光；粗无衬线配斜体衬线强调词，Logo 嵌进标题当字母，叙事段落随滚动逐词点亮。",
    title: "AI 金融 SaaS 官网：编辑感混排标题 + 滚动高亮叙事 + AI 输入框演示",
    link: "https://dribbble.com/shots/27829394-AI-FinTech-SaaS-Website-UI-UX-Design",
    date: "2026-10-26",
    platform: "Web / 移动端",
    tags: ["官网", "Hero", "字体混排", "行内图标", "渐变光晕", "滚动动效", "响应式", "Dribbble 概念稿"],
    path: "entries/2026/2026-10-26-WayPilot",
    cover: "entries/2026/2026-10-26-WayPilot/01.png",
  },
  {
    product: "Cardeva",
    scene: "健康医疗",
    summary: "纯黑白灰；黑白人体摄影上用引线标注数据，唯一一张深色卡片做焦点，底部时间轴拖选查看当天数据。",
    title: "心血管健康仪表盘：人体标注 + 时间轴 + Bento 指标卡",
    link: "",
    date: "2026-10-26",
    platform: "Web",
    tags: ["仪表盘", "健康数据", "单色", "人体标注", "时间轴", "Dribbble 概念稿"],
    path: "entries/2026/2026-10-26-Cardeva",
    cover: "entries/2026/2026-10-26-Cardeva/01.png",
  },
  {
    product: "FLOX",
    scene: "SaaS 仪表盘",
    summary: "浅灰底 + 近白大圆角 Bento 卡片；全页只让一根紫色渐变柱和 tooltip 抢焦点，先给结论数字再给图。",
    title: "自由职业者管理仪表盘：收入、项目、任务一屏总览",
    link: "https://dribbble.com/shots/27794184-Freelancer-Management-Dashboard-FLOX",
    date: "2026-10-26",
    platform: "Web",
    tags: ["仪表盘", "Bento 卡片", "数据可视化", "状态标签", "Dribbble 概念稿"],
    path: "entries/2026/2026-10-26-FLOX",
    cover: "entries/2026/2026-10-26-FLOX/01.png",
  },
  {
    product: "Miro",
    scene: "协作白板",
    summary: "中性底色 + 品牌物件点缀；侧边栏导航配合网格/列表双视图管理看板。",
    title: "团队仪表盘：侧边栏导航 + 网格/列表看板",
    link: "https://miro.com/app/dashboard/org/3458764687781253932/team/3458764687781253937/",
    date: "2026-10-23",
    platform: "Web",
    tags: ["仪表盘", "信息架构", "侧边栏", "列表/网格"],
    path: "entries/2026/2026-10-23-Miro",
  },
  // {
  //   product: "产品名",
  //   scene: "设计工具",
  //   summary: "一句话结论，显示在卡片上",
  //   title: "一句话主题",
  //   link: "https://example.com",
  //   date: "2026-10-23",
  //   platform: "iOS",
  //   tags: ["导航", "动效"],
  //   path: "entries/2026/2026-10-23-产品名",
  //   cover: "entries/2026/2026-10-23-产品名/01.png",
  // },
];
