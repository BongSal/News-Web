<template>
  <div>
    <h2 class="text-lg">Popular News</h2>
    <div class="flex flex-row grid grid-cols-4">
      <news-card
        v-for="article in popular_monthly"
        :key="article.id"
        :article="article"
      />
    </div>

    <h2 class="mt-5 text-lg">Recent News</h2>
    <div class="flex flex-row grid grid-cols-4">
      <news-card
        v-for="article in new_articles"
        :key="article.id"
        :article="article"
      />
    </div>

    <h2 class="mt-5 text-lg">Marketing</h2>
    <div class="flex flex-row grid grid-cols-4">
      <news-card
        v-for="article in popular_monthly"
        :key="article.id"
        :article="article"
      />
    </div>

    <h2 class="mt-5 text-lg">Economic</h2>
    <div class="flex flex-row grid grid-cols-4">
      <news-card
        v-for="article in popular_monthly"
        :key="article.id"
        :article="article"
      />
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  data() {
    return {};
  },
  methods: {
    ...mapActions("dashboard", ["fetchDashboard"]),
  },
  computed: {
    ...mapState("dashboard", [
      "categories",
      "popular_monthly",
      "new_articles",
      "sliders",
    ]),
  },
  created() {
    this.fetchDashboard();
  },
};
</script>
