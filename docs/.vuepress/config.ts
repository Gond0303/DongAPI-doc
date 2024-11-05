import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'
import { plumeTheme } from 'vuepress-theme-plume'
export default defineUserConfig({
  base: '/',
  // 请不要忘记设置默认语言
  lang: 'zh-CN',

  theme: plumeTheme({
    // 使用默认黑色主题
    appearance: "dark",
    // hostname: 'https://www.yuwb.cn',
    logo: '/avatar.jpg',
    // 作者
    avatar: {
      url: '/avatar.jpg',
      name: '黄伟东',
      description: '前端开发',
      circle: true,
      location: '泉州，中国',
      organization: '东辰科技',
    },


    // nav
    navbar: [
      { text: '首页', link: '/' },
      // { text: '指南', link: '/blog/' },
      {
        text: '指南',
        items: [
          {
            text: '简 介',
            link: '/notes/指南/简介.md',
          },
          {
            text: '安 装',
            link: '/notes/指南/安装.md',
          },
          {
            text: '快速开始',
            link: '/notes/指南/快速开始.md',
          },
          {
            text: '返回响应码',
            link: '/notes/指南/返回响应码.md',
          },
          {
            text: 'API接口',
            items: [
              {text: '获取土味情话', link: '/notes/指南/获取土味情话.md'},
              {text: '抖音视频', link: '/notes/指南/抖音视频.md'},
              {text: '网易云热歌', link: '/notes/指南/网易云热歌.md'},
              {text: '全网短剧', link: '/notes/指南/全网短剧.md'},
              {text: '小众头像', link: '/notes/指南/小众头像.md'},
              {text: '一周天气', link: '/notes/指南/一周天气.md'},

            ],
          },
        ],
      },
      { text: '配置', link: '/notes/配置/使用配置.md' },
      { text: '赞助', link: '/notes/赞助/赞助.md' },
      // { text: 'Demo', link: '/blog/archives/' },
      { text: 'Demo', link: 'https://github.com/Gond0303/DongAPI-client-sdk' },
      // { text: 'GitHub', link: '/blog/archives/' },
      { text: 'GitHub', link: 'https://github.com/Gond0303' },
    ],
    // aside
    notes: {
      dir: 'notes',
      link: '/',
      notes: [
        {
          dir: '指南',
          link: '/zhinan',
          sidebar: [
            {
              text: '指南',
              icon: 'ic:baseline-dashboard',
              items: ['简介', '安装', '快速开始', '返回响应码']
            },
            {
              text: 'API接口',
              icon: 'icon-park-outline:file-question',
              items: ['获取土味情话', '抖音视频','网易云热歌','全网短剧','小众头像','一周天气']
            },
          ]
        },
      ]
    },
    // 页脚
    footer: {
      message: 'DongAPI开发文档|日常记录|前端学习',
      copyright: 'Copyright © 2024 | ICP备案号：<a target="_blank" href="https://beian.miit.gov.cn/">闽ICP备2024073281号-1</a>'
    },
    plugins: {
      markdownEnhance: {
        demo: true,
      },
    }
  }),
  bundler: viteBundler(),
  // 标题
  title: 'DongAPI开发者文档',
  // 介绍
  description: 'DongAPI，包括内容：DongAPI开发平台使用及开发文档。',
  // 开启PWA
  // serviceWorker: true
})