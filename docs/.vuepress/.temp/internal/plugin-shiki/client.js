
import { useCopyCode } from 'E:/code/frontend/dongapi-doc/my-project/node_modules/@vuepress-plume/plugin-shikiji/lib/client/composables/copy-code.js'
import { useCollapsedLines } from 'E:/code/frontend/dongapi-doc/my-project/node_modules/@vuepress-plume/plugin-shikiji/lib/client/composables/collapsed-lines.js'

export default {
  
  setup() {
    useCopyCode({
      selector: __CC_SELECTOR__,
      duration: __CC_DURATION__,
    })
    useCollapsedLines()
  },
}
