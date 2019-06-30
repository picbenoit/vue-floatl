require('./vuefloatl.less');

module.exports = {
  install: function (Vue, options) {
    Vue.component('v-floatl', require('./VueFloatl.vue').default);
  }
};
