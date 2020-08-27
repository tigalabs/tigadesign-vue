import TgAlert from './src/alert.vue';

// 使组件可以被单个引入
TgAlert.install = function (Vue) {
    Vue.component(TgAlert.name, TgAlert);
};

export default TgAlert;
