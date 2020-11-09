import Button from './src/index.vue'


Button.install = function (Vue) {
  
  Vue.component(`T${Button.name}`, Button);

}

export default Button
