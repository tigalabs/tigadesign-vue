import TgLink from './src/link.vue';

// 使组件可以被单个引入
TgLink.install = function (Vue) {
    Vue.component(TgLink.name, TgLink);
};

export default TgLink;
