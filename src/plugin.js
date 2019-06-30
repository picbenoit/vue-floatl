import VueFloatl from './VueFloatl.vue';

const Plugin = {
    install(Vue, options) {
        Vue.component('v-floatl', VueFloatl);
    }
};

export default Plugin;