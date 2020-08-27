import TgContainer from './src/container.vue';

// 使组件可以被单个引入
TgContainer.install = function (Vue) {
    Vue.component(TgContainer.name, TgContainer);
};

export default TgContainer;
