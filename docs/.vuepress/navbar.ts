import { defineNavbarConfig } from 'vuepress-theme-plume'

export const navbar = defineNavbarConfig([
  { text: '首页', link: '/' },
  { text: '简介与配置', link: '/demo/README.md' },
  {
    text: '手册',
    items: [
      { text: '目录', link: '/notes/guide/README.md' },
      { text: '第 1 章 新手快速入门', link: '/notes/guide/Ch1/README.md' },
      { text: '第 2 章 战斗方案的简洁设计：轨道编辑器', link: '/notes/guide/Ch2/README.md' },
      { text: '第 3 章 通关任务的高效执行：轨道执行器', link: '/notes/guide/Ch3/README.md' },
      { text: '第 4 章 编辑器高级操作', link: '/notes/guide/Ch4/README.md' },
      { text: '第 5 章 执行器高级操作', link: '/notes/guide/Ch5/README.md' },
    ]
  },
  { text: '帮助文档', link: 'https://doc.mstrack.cn/download/使用手册.pdf' },
  { text: '精华消息', link: '/notes/message/README.md' },
])
