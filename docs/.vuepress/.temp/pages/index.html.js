import comp from "E:/code/frontend/dongapi-doc/my-project/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{\"pageLayout\":\"home\",\"externalLinkIcon\":false,\"config\":[{\"type\":\"banner\",\"banner\":\"/banner.jpg\",\"bannerMask\":{\"light\":0.1,\"dark\":0.3},\"hero\":{\"name\":\"DongAPI\",\"tagline\":\"开发者文档\",\"text\":\"🚀 为简化开发而生\",\"actions\":[{\"theme\":\"brand\",\"text\":\"开始使用 ->\",\"link\":\"/notes/指南/简介.md\"},{\"theme\":\"alt\",\"text\":\"Github →\",\"link\":\"https://github.com/Gond0303\"}]}},{\"type\":\"features\",\"features\":[{\"title\":\"客户端SDK支持\",\"icon\":\"💻\",\"details\":\"平台提供客户端SDK，使调用接口更加简单和便捷。\"},{\"title\":\"多样性选择\",\"icon\":\"⚖\",\"details\":\"丰富多样的接口供您选择，涵盖了各个领域的功能和服务，满足不同的需求。\"},{\"title\":\"开箱即用\",\"icon\":\"🚀\",\"details\":\"稳定、安全、高效的接口调用服务，帮助您实现更快速、便捷的开发和调用体验。\"}]}],\"head\":[[\"script\",{\"id\":\"check-dark-mode\"},\";(function () {const um= localStorage.getItem('vuepress-theme-appearance') || 'dark';const sm = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;const isDark = um === 'dark' || (um !== 'light' && sm);document.documentElement.dataset.theme = isDark ? 'dark' : 'light';})();\"],[\"script\",{\"id\":\"check-mac-os\"},\"document.documentElement.classList.toggle('mac', /Mac|iPhone|iPod|iPad/i.test(navigator.platform))\"]]},\"headers\":[],\"readingTime\":{\"minutes\":0.55,\"words\":165},\"filePathRelative\":\"README.md\",\"categoryList\":[]}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
