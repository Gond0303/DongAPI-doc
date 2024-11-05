export const sidebar = {"/":{"/zhinan":{"items":[{"text":"指南","icon":"ic:baseline-dashboard","items":["简介","安装","快速开始","返回响应码"]},{"text":"API接口","icon":"icon-park-outline:file-question","items":["获取土味情话","抖音视频","网易云热歌","全网短剧","小众头像","一周天气"]}],"prefix":"/notes/指南/"}},"__auto__":{}}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSidebar) {
    __VUE_HMR_RUNTIME__.updateSidebar(sidebar)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ sidebar }) => {
    __VUE_HMR_RUNTIME__.updateSidebar(sidebar)
  })
}
