export const state = () => ({
  categories: [],
  popular_monthly: [],
  sliders: [],
  new_articles: [],
});

export const actions = {
  fetchDashboard({ commit }) {
    this.$axios.$get("dashboard").then((data) => {
      commit("dashboard", data);
    });
  },
};

export const mutations = {
  dashboard: (state, data) => {
    state.categories = data.categories;
    state.popular_monthly = data.popular_monthly;
    state.sliders = data.sliders;
    state.new_articles= data.new_articles;
  },
};
