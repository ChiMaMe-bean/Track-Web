import { defineNoteConfig, defineNotesConfig } from 'vuepress-theme-plume'

const demoNote = defineNoteConfig({
  dir: 'demo',
  link: '/demo',
  sidebar: ['', '/demo/rrgwltgh/'],
})

const guideNote = defineNoteConfig({
  dir: 'guide',
  link: '/guide',
  sidebar: 
  [
    {
      text: '轨道使用手册',
      icon: 'ep:guide',
      link: '/guide/',
    }, 
    {
      text: '下载',
      icon: 'line-md:downloading-loop',
      link: '/guide/u1pv5ryr/',
    }, 
    {
      text: '更新日志',
      icon: 'streamline:definition-search-book',
      link: '/guide/lf79r21k/',
    }, 
    {
      text: 'bilibili教程',
      icon: 'ri:bilibili-fill',
      link: '/guide/o3guo9br/',
    }, 
    {
      text: '第 1 章 新手快速入门',
      collapsed: true,  //开启折叠
      prefix: '/guide/uazuulry/',
      items: [
      { text: '第 1 章 新手快速入门', link: '/guide/uazuulry/' , icon: 'material-symbols:lightbulb'},
      { text: '1.1 一分钟开始刷神殿', link: '/guide/1llas1xv/' , icon: 'solar:book-bold'},
      { text: '1.2 双人刷图', link: '/guide/shknjz87/' , icon: 'solar:book-bold'},
      { text: '1.3 常见问题解答', link: '/guide/4w7vdo0z/' , icon: 'solar:book-bold'},
    ]
    }, 
    {
      text: '第 2 章 战斗方案的简洁设计：轨道编辑器',
      collapsed: true,  //开启折叠
      prefix: '/guide/lieh7hma/',
      items: [
      { text: '第 2 章 战斗方案的简洁设计：轨道编辑器', link: '/guide/lieh7hma/' , icon: 'material-symbols:lightbulb'},
      { text: '2.1 阵型编辑', link: '/guide/qvufttbz/' , icon: 'solar:book-bold'},
      { text: '2.2 轨道编辑', link: '/guide/932mbqdu/' , icon: 'solar:book-bold'},
    ]
    },
    {
      text: '第 3 章 通关任务的高效执行：轨道执行器',
      collapsed: true,  //开启折叠
      prefix: '/guide/qjlxnxie/',
      items: [
      { text: '第 3 章 通关任务的高效执行：轨道执行器', link: '/guide/qjlxnxie/' , icon: 'material-symbols:lightbulb'},
      { text: '3.1 普通任务', link: '/guide/t3syihh0/' , icon: 'solar:book-bold'},
      { text: '3.2 高级任务', link: '/guide/f0kz7lyd/' , icon: 'solar:book-bold'},
    ]
    },
    {
      text: '第 4 章 编辑器高级操作',
      collapsed: true,  //开启折叠
      prefix: '/guide/3oknjeft/',
      items: [
      { text: '第 4 章 编辑器高级操作', link: '/guide/3oknjeft/' , icon: 'material-symbols:lightbulb'},
      { text: '4.1 轨道文件', link: '/guide/hb4pmjhk/' , icon: 'solar:book-bold'},
      { text: '4.2 独立计时', link: '/guide/5kzb5hj3/' , icon: 'solar:book-bold'},
      { text: '4.3 按波变阵', link: '/guide/j292i8om/' , icon: 'solar:book-bold'},
      { text: '4.4 条件放卡', link: '/guide/v62bwilf/' , icon: 'solar:book-bold'},
      { text: '4.5 优先放卡队列', link: '/guide/kbp4ehts/' , icon: 'solar:book-bold'},
      { text: '4.6 自动布轨', link: '/guide/p3o07xvn/' , icon: 'solar:book-bold'},
    ]
    },
    {
      text: '第 5 章 执行器高级操作',
      collapsed: true,  //开启折叠
      prefix: '/guide/8a759gok/',
      items: [
      { text: '第 5 章 执行器高级操作', link: '/guide/8a759gok/' , icon: 'material-symbols:lightbulb'},
      { text: '5.1 补阵原理与调控', link: '/guide/mzdpqza3/' , icon: 'solar:book-bold'},
      { text: '5.2 任务监视', link: '/guide/8upqlk4f/' , icon: 'solar:book-bold'},
      { text: '5.3 自动带卡', link: '/guide/cjo0xlx8/' , icon: 'solar:book-bold'},
    ]
    }],
})

export const notes = defineNotesConfig({
  dir: 'notes',
  link: '/',
  notes: [demoNote , guideNote],
})
