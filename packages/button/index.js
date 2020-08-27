import TGButton from './src/button.vue';

// 使组件可以被单个引入
TGButton.install = function (Vue) {
    Vue.component(TGButton.name, TGButton);
};

export default TGButton;
