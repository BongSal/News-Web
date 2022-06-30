export const state = () => ({
  article: null
});

export const mutations = {
  setArticle(state, res) {
    state.article = res;
  }
}

export const actions = {
  fetchBySlug({ commit }, slug) {
    this.$axios.$get(`articles/${slug}`)
      .then((res) => { commit('setArticle', res) });
  }
}
