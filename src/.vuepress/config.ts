import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/Track-Web/",

  lang: "zh-CN",
  title: "轨道编辑器",
  description: "一款简洁设计、高效执行的自动化软件",

  head: [
    ["link", { rel: "icon", href: "/Track-Web/assets/image/logo.ico" }],
  ],

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
