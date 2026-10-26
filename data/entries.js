// 启动页数据源。新增条目时在数组最前面追加一项。
// scene 为产品场景（启动页按它分类），取值见下方 LF_SCENES；不在列表里的归入「其他」。
// path 为条目目录（相对仓库根），cover 为封面图（相对仓库根，可省略）。
window.LF_CONFIG = {
  repo: "https://github.com/Cinnnnnnndy/look-and-feel",
  branch: "main",
};

// 产品场景分类，顺序即启动页上的显示顺序。需要新场景时直接加在这里。
window.LF_SCENES = [
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
];

window.LF_ENTRIES = [
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
