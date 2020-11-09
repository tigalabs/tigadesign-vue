/*
 * @Author       : MS
 * @LastEditors  : MS
 * @Description  : 打包入口文件
 */





const components = {


}


const install = function (Vue, opts = {}) {
  if (install.installed) return;





  // 根据传入参数配置TIGAUI
  Vue.prototype.$TIGA = {
    size: opts.size || '',
  }




}


if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}
