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
  ['','/guide/u1pv5ryr/','/guide/lf79r21k/',
    {
      text: '第 1 章 新手快速入门',
      collapsed: true,  //开启折叠
      prefix: '/guide/uazuulry/',
      items: [
      { text: '第 1 章 新手快速入门', link: '/guide/uazuulry/' },
      { text: '1.1 一分钟开始刷神殿', link: '/guide/1llas1xv/' },
      { text: '1.2 双人刷图', link: '/guide/shknjz87/' },
      { text: '1.3 常见问题解答', link: '/guide/4w7vdo0z/' },
    ]
    }, 
    {
      text: '第 2 章 战斗方案的简洁设计：轨道编辑器',
      collapsed: true,  //开启折叠
      prefix: '/guide/lieh7hma/',
      items: [
      { text: '第 2 章 战斗方案的简洁设计：轨道编辑器', link: '/guide/lieh7hma/' },
      { text: '2.1 阵型编辑', link: '/guide/qvufttbz/' },
      { text: '2.2 轨道编辑', link: '/guide/932mbqdu/' },
    ]
    },
    {
      text: '第 3 章 通关任务的高效执行：轨道执行器',
      collapsed: true,  //开启折叠
      prefix: '/guide/qjlxnxie/',
      items: [
      { text: '第 3 章 通关任务的高效执行：轨道执行器', link: '/guide/qjlxnxie/' },
      { text: '3.1 普通任务', link: '/guide/t3syihh0/' },
      { text: '3.2 高级任务', link: '/guide/f0kz7lyd/' },
    ]
    },
    {
      text: '第 4 章 编辑器高级操作',
      collapsed: true,  //开启折叠
      prefix: '/guide/3oknjeft/',
      items: [
      { text: '第 4 章 编辑器高级操作', link: '/guide/3oknjeft/' },
      { text: '4.1 轨道文件', link: '/guide/hb4pmjhk/' },
      { text: '4.2 独立计时', link: '/guide/5kzb5hj3/' },
      { text: '4.3 按波变阵', link: '/guide/j292i8om/' },
      { text: '4.4 条件放卡', link: '/guide/v62bwilf/' },
      { text: '4.5 优先放卡队列', link: '/guide/kbp4ehts/' },
      { text: '4.6 自动布轨', link: '/guide/p3o07xvn/' },
    ]
    },
    {
      text: '第 5 章 执行器高级操作',
      collapsed: true,  //开启折叠
      prefix: '/guide/8a759gok/',
      items: [
      { text: '第 5 章 执行器高级操作', link: '/guide/8a759gok/' },
      { text: '5.1 自动带卡', link: '/guide/cjo0xlx8/' },
      { text: '5.2 公会与情侣任务列表', link: '/guide/w6f6ywdi/' },
      { text: '5.3 补阵原理与调控', link: '/guide/mzdpqza3/' },
      { text: '5.4 任务监视', link: '/guide/8upqlk4f/' },
    ]
    }],
})

export const notes = defineNotesConfig({
  dir: 'notes',
  link: '/',
  notes: [demoNote , guideNote],
})
