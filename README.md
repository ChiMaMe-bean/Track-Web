# Track-Web

基于 VuePress 2.0 和 vuepress-theme-plume 主题构建的静态文档网站。

## 🛠️ 技术栈

- **VuePress 2.0** - 静态站点生成器
- **TypeScript** - 类型安全的 JavaScript
- **Vue 3** - 渐进式 JavaScript 框架
- **vuepress-theme-plume** - VuePress 主题
- **Vite** - 构建工具
- **Sass** - CSS 预处理器

## 📁 项目结构

```
Track-Web/
├── docs/                    # 文档目录
│   ├── .vuepress/          # VuePress 配置
│   │   ├── config.ts       # 主配置文件
│   │   ├── client.ts       # 客户端配置
│   │   ├── plume.config.ts # 主题配置
│   │   └── ...
│   └── notes/              # 文档内容
├── project-info.ts         # 项目信息文件
└── package.json            # 项目配置
```

## 🚀 开发

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

## 📄 许可证

MIT License

## 📚 文档

访问 [轨道编辑器文档](https://chimame-bean.github.io/Track-Web/) 了解更多信息。
