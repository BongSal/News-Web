<template>
  <div>
    <h2 class="text-lg">Popular News</h2>
    <div class="flex flex-row grid grid-cols-4">
      <news-card v-for="i in 4" :key="i" :route="`articles/${i}`"></news-card>
    </div>

    <h2 class="mt-5 text-lg">Recent News</h2>
    <div class="flex flex-row grid grid-cols-4">
      <news-card v-for="i in 4" :key="i" :route="`home-page-${i}`"></news-card>
    </div>

    <h2 class="mt-5 text-lg">Marketing</h2>
    <div class="flex flex-row grid grid-cols-4">
      <news-card v-for="i in 4" :key="i" :route="`home-page-${i}`"></news-card>
    </div>

    <h2 class="mt-5 text-lg">Economic</h2>
    <div class="flex flex-row grid grid-cols-4">
      <news-card v-for="i in 4" :key="i" :route="`home-page-${i}`"></news-card>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: [],
    };
  },
  mounted() {
    console.log("server render");
    this.$axios
      .get("http://news-app.local/api/dashboard")
      .then((res) => (this.data = res.data));
  },
};
</script>
