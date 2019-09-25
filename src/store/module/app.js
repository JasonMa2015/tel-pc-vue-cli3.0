export default {
  state: {
    test: '配置了vuex、vue-router、iview、iview-loader、axios、跨域代理、主题配置'
  },
  mutations: {
    getEditInfo (state, value) {
      state.editInfo = value;
    }
  }
};