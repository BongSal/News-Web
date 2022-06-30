<template>
  <NuxtLink
    :to="{ name: 'articles-slug', params: { slug: article.slug } }"
    class="items-center p-3 m-2 bg-gray-200 rounded-lg border md:max-w-sm md:flex-row transition shadow-sm hover:shadow-lg dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
  >
    <img
      class="object-cover min-w-full h-36 rounded-lg"
      :src="article.image.thumbnail"
      alt=""
    />
    <div class="flex flex-col justify-between pt-2 leading-normal">
      <h5 class="tracking-tight text-gray-900 dark:text-white">
        {{ article.title }}
      </h5>

      <div class="flex justify-between">
        <rounded-profile :author="article.author" />

        <div class="text-gray-400 justify-end text-sm text-right mt-1">
          <div class="justify-between">{{ article.total_views }} Views</div>
          <h4>
            {{ $moment(article.created_at).format("LL") }}
          </h4>
        </div>
      </div>
    </div>
  </NuxtLink>
</template>

<script>
import RoundedProfile from "./RoundedProfile.vue";
export default {
  components: { RoundedProfile },
  name: "NewsCard",
  props: ["article"],
};
</script>

<style></style>
