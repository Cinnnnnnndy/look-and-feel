# Look & Feel · 设计素材库

收集日常看到的好设计，逐条拆解 **视觉要点** 与 **交互设计点**，并定期做横向归纳。

- 🚀 启动页：[`index.html`](./index.html)（开启 GitHub Pages 后可在线浏览）
- 📚 归纳总览：[`SUMMARY.md`](./SUMMARY.md)
- 📝 条目模板：[`entries/_template.md`](./entries/_template.md)

## 目录结构

```
look-and-feel/
├── index.html            # 启动页（DevEco 风格欢迎页）
├── assets/style.css      # 启动页样式
├── data/entries.js       # 条目索引（启动页数据源）
├── SUMMARY.md            # 跨条目归纳：视觉 / 交互 规律
└── entries/
    ├── _template.md      # 新条目模板
    └── 2026/
        └── 2026-10-23-产品名/
            ├── README.md # 单条分析
            └── *.png     # 截图素材
```

## 收录规则

每条记录必须包含：

| 字段 | 说明 |
| --- | --- |
| 产品名 | 产品 / 应用 / 网站名称 |
| 链接 | 原始链接（官网、应用商店、帖子等） |
| 收录时间 | 收录当天日期，格式 `YYYY-MM-DD` |

## 新增一条的流程

1. 复制 `entries/_template.md` 到 `entries/<年>/<日期>-<产品名>/README.md`，截图放在同目录。
2. 填写视觉要点、交互设计点、可借鉴之处。
3. 在 `data/entries.js` 顶部追加一条索引（启动页即刻可见）。
4. 若出现新的共性规律，更新 `SUMMARY.md`。
5. 提交并 push。

## 在线浏览

仓库 Settings → Pages → Source 选择 `main` 分支根目录，即可通过
`https://cinnnnnnndy.github.io/look-and-feel/` 打开启动页。
