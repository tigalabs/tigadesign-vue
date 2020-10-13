import TButton from './src/index.vue'

TButton.install = function (Vue) {
  Vue.component(TButton.name, TButton)
}

// 导出组件
export default TButton