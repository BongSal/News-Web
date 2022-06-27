<template>
  <div>
    <h2 class="mt-5 text-lg">Marketing</h2>
    <div class="flex flex-row grid grid-cols-4">
      <news-card v-for="i in 4" :key="i" :route="`home-page-${i}`"></news-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "NewsCategory",
};
</script>

<style></style>
