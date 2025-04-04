import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  "/demo/",
  {
    text: "指南",
    icon: "lightbulb",
    prefix: "/guide/",
    children: [
      {
        text: "第 1 章 新手快速入门",
        children: [{ text: "...", link: "" }],
      },
      {
        text: "第 2 章 战斗方案的简洁设计：轨道编辑器",
        children: [{ text: "...", link: "" }],
      },
      {
        text: "第 3 章 通关任务的高效执行：轨道执行器",
        children: [{ text: "...", link: "" }],
      },
      {
        text: "第 4 章 编辑器高级操作",
        children: [{ text: "...", link: "" }],
      },
      {
        text: "第 5 章 执行器高级操作",
        children: [{ text: "...", link: "" }],
      },
    ],
  },
  // {
  //   text: "V2 文档",
  //   icon: "book",
  //   link: "https://theme-hope.vuejs.press/zh/",
  // },
]);
