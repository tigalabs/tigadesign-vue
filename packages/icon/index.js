import TgIcon from './src/icon.vue';

// 使组件可以被单个引入
TgIcon.install = function (Vue) {
    Vue.component(TgIcon.name, TgIcon);
};

export default TgIcon;
