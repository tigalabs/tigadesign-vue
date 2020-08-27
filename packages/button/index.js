import TgButton from './src/button.vue';

// 使组件可以被单个引入
TgButton.install = function (Vue) {
    Vue.component(TgButton.name, TgButton);
};

export default TgButton;
