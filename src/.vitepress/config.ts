import { getThemeConfig, defineConfig } from '@sugarat/theme/node'

// 主题独有配置 详见文档: https://theme.sugarat.top/
const blogTheme = getThemeConfig({
  author: '云路杳杳 ', // 文章默认作者
  // 友链
  friend: [
    {
      nickname: 'Vitepress',
      des: 'Vite & Vue Powered Static Site Generator',
      avatar: { src: '../assets/img/Vitepress.png', alt: 'VitepressIcon' },
      url: 'https://vitepress.vuejs.org/',
    },
  ],
  recommend: {
    showSelf: true,
  },
  // 开启离线的全文搜索支持（如构建报错可注释下面的配置再次尝试）
  // search: 'pagefind',
})
// Vitepress 默认配置 详见文档：https://vitepress.dev/reference/site-config
export default defineConfig({
  extends: blogTheme,
  lang: 'zh-CN',
  title: '云路杳杳',
  titleTemplate: ':title - 云路杳杳',
  description: '云路杳杳，云路杳杳的个人博客，云路杳杳的个人空间。分享和记录生活中的前端、后端、Java、Javascript、Vue、Spring内容',
  lastUpdated: true,
  themeConfig: {
    logo: '/logo.png',
    nav: [
      { text: '关于我', link: '/about.html' },
      { text: '技术笔记', link: '/note/' },
      {
        text: '组件笔记',
        items: [
          { text: 'Vue3 组件', link: '/component/vue3/' },
          { text: 'Vue2 组件', link: '/component/vue2/' },
        ],
      },
      { text: 'JavaScript', link: '/javascript/' },
    ],

    editLink: {
      pattern: 'https://github.com/yangxu52/yangxu52.github.io/tree/main/src/:path',
      text: '去 GitHub 上编辑内容',
    },
    lastUpdatedText: '上次更新于',
    socialLinks: [{ icon: 'github', link: 'https://github.com/yangxu52' }],
    footer: {
      message: '<a target="_blank" href="https://theme.sugarat.top/"> Power By @sugarat/theme@0.1.35 </a>',
      copyright: 'MIT Licensed | Copyright© yangxu52',
    },
  },
  vite: { optimizeDeps: { include: ['element-plus'], exclude: ['@sugarat/theme'] } },
})
