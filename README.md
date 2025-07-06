# Track-Web

基于 VuePress 2.0 和 vuepress-theme-plume 主题构建的静态文档网站。

## 技术栈

- **VuePress 2.0** - 静态站点生成器
- **vuepress-theme-plume** - VuePress 主题
- **TypeScript** - 类型安全的 JavaScript
- **Vue 3** - 渐进式 JavaScript 框架
- **Vite** - 构建工具
- **Sass** - CSS 预处理器

## 开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run docs:dev

# 构建生产版本
npm run docs:build

# 预览构建结果
npm run docs:preview
```

## 项目结构

```
Track-Web/
├── docs/                    # 文档目录
│   ├── .vuepress/          # VuePress 配置
│   │   ├── config.ts       # 主配置文件
│   │   ├── client.ts       # 客户端配置
│   │   ├── plume.config.ts # 主题配置
│   │   └── ...
│   └── notes/              # 文档内容
└── package.json            # 项目配置
```

## 许可证

MIT License

## Documents

- [vuepress](https://vuepress.vuejs.org/)
- [vuepress-theme-plume](https://theme-plume.vuejs.press/)
