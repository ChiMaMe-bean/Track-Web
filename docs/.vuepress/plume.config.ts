import { defineThemeConfig } from 'vuepress-theme-plume'
import { navbar } from './navbar'
import { notes } from './notes'

/**
 * @see https://theme-plume.vuejs.press/config/basic/
 */
export default defineThemeConfig({
  logo: '/logo.ico',

  appearance: true,  // 配置 深色模式

  social: [
    { icon: 'github', link: 'https://github.com/ChiMaMe-bean/Track-Web' },
  ],
  // navbarSocialInclude: ['github'], // 允许显示在导航栏的 social 社交链接
  // aside: true, // 页内侧边栏， 默认显示在右侧
  // outline: [2, 3], // 页内大纲， 默认显示 h2, h3

  /**
   * 文章版权信息
   * @see https://theme-plume.vuejs.press/guide/features/copyright/
   */
  // copyright: true,

  // prevPage: true,   // 是否启用上一页链接
  // nextPage: true,   // 是否启用下一页链接
  createTime: false, // 是否显示文章创建时间

  /* 站点页脚 */
  footer: {
    message: 'Power by <a target="_blank" href="https://v2.vuepress.vuejs.org/">VuePress</a> & <a target="_blank" href="https://theme-plume.vuejs.press">vuepress-theme-plume</a><br>轨道编辑器由云涛晓雾开发，轨道网站由ちまめ开发<br>轨道内测组：云涛晓雾，ちまめ，石墨烯，繁水，nauxuyoahz，叹一声~知己难留，果儿，絵月etsuki，江怿，诺言',
    copyright: 'Copyright © 2025 ちまめ <br> <span class="beian-links"> <img alt="备案编号图标" src="/Track-Web/beian.png" width="20"> <a href="https://beian.mps.gov.cn/#/query/webSearch?code=43010402002137" rel="noreferrer" target="_blank">湘公网安备43010402002137号</a> <a href="https://beian.miit.gov.cn/" target="_blank">湘ICP备2025113886号-1</a> </span>',
  },

  /**
   * @see https://theme-plume.vuejs.press/config/basic/#profile
   */
  profile: {
    avatar: 'https://theme-plume.vuejs.press/plume.png',
    name: 'Track-Web',
    description: 'Track-Web',
    // circle: true,
    // location: '',
    // organization: '',
  },

  navbar,
  notes,

  /**
   * 公告板
   * @see https://theme-plume.vuejs.press/guide/features/bulletin/
   */
  // bulletin: {
  //   layout: 'top-right',
  //   contentType: 'markdown',
  //   title: '公告板标题',
  //   content: '公告板内容',
  // },

  /* 过渡动画 @see https://theme-plume.vuejs.press/config/basic/#transition */
  transition: {
    page: true,        // 启用 页面间跳转过渡动画
    // postList: true,    // 启用 博客文章列表过渡动画
    appearance: 'fade',  // 启用 深色模式切换过渡动画, 或配置过渡动画类型
  },

})
