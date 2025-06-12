import { defineClientConfig } from 'vuepress/client'
import { onMounted } from 'vue'
// import RepoCard from 'vuepress-theme-plume/features/RepoCard.vue'
// import NpmBadge from 'vuepress-theme-plume/features/NpmBadge.vue'
// import NpmBadgeGroup from 'vuepress-theme-plume/features/NpmBadgeGroup.vue'
// import Swiper from 'vuepress-theme-plume/features/Swiper.vue'

// import CustomComponent from './theme/components/Custom.vue'

import './theme/styles/custom.css'
import $ from 'jquery';

export default defineClientConfig({
  enhance({ app }) {
    // built-in components
    // app.component('RepoCard', RepoCard)
    // app.component('NpmBadge', NpmBadge)
    // app.component('NpmBadgeGroup', NpmBadgeGroup)
    // app.component('Swiper', Swiper) // you should install `swiper`

    // your custom components
    // app.component('CustomComponent', CustomComponent)
  },
  setup() {
    onMounted(() => {
      // 确保只在 mounted 时执行，即浏览器中
      $(window).on('scroll', function () {
        const len = $(this).scrollTop() as number;
        if (len >= 400) {
          $('.scroll-down-arrow').fadeOut(100);
        } else {
          $('.scroll-down-arrow').fadeIn(100);
        }
      });
    });
  }
})

// $(function () {
//   $(window).on('scroll', function () {
//     const len: number = $(this).scrollTop() as number;
//     // 根据滚动位置决定显示或隐藏元素
//     if (len >= 400) {
//       $('.scroll-down-arrow').fadeOut(100); // 使用淡出效果
//     } else {
//       $('.scroll-down-arrow').fadeIn(100); // 使用淡入效果
//     }
//   });
// });
