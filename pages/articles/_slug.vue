<template>
  <div class="grid grid-cols-3 gap-4">
    <div class="col-span-2" v-if="article">
      <img
        class="rounded-lg w-full h-56 object-cover"
        :src="article.image.default"
        alt="Article Image"
      />
      <h2 class="text-xl py-3">
        {{ article.title }}
      </h2>
      <div class="flex flex-row justify-start">
        <rounded-profile :author="article.author" />
        <div class="ml-2 text-gray-400 text-sm mt-4">
          {{ article.total_views }} Views
        </div>
        <h4 class="ml-2 text-gray-400 text-sm mt-4">
          {{ $moment(article.created_at).format("LL") }}
        </h4>
      </div>

      <p class="py-4">
        {{ article.body }}
      </p>
      <div class="flex justify-between">
        <img
          class="rounded-lg w-full h-56 object-cover mr-2"
          src="~/assets/img/animal.jpg"
          alt=""
        />
        <img
          class="rounded-lg w-full h-56 object-cover ml-2"
          src="~/assets/img/animal.jpg"
          alt=""
        />
      </div>
      <p class="py-4">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>
      <p class="py-4">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>
      <div class="flex flex-col bg-gray-300 w-full h-auto rounded p-4">
        <div class="flex flex-row">
          <img
            src="~/assets/img/animal.jpg"
            class="object-cover w-10 h-10 mt-1 rounded-full bg-white border-2 border-gray-400"
            alt="Image"
          />
          <div class="ml-2">
            <h2>{{ article.author.name }}</h2>
            <small class="text-gray-400 -mt-2">
              Book Publisher at News App</small
            >
          </div>
        </div>
        <p class="py-3">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
        <div class="flex flex-col">
          <h2>Contact Me</h2>
          <div class="flex justify-between">
            <div class="flex py-1">
              <div
                class="p-1 border-2 border-gray-400 rounded-full bg-white text-blue-600"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path
                    d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                  />
                </svg>
              </div>
              <div
                class="p-1 border-2 border-gray-400 rounded-full bg-white ml-2 text-blue-600"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                  />
                </svg>
              </div>
              <div
                class="p-1 border-2 border-gray-400 rounded-full bg-white ml-2 text-red-600"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                  />
                </svg>
              </div>
            </div>
            <div class="justify-end">
              {{ article.author.total_published }} Published
            </div>
          </div>
        </div>
      </div>
      <div class="py-3">
        <h2 class="text-md">Read More</h2>
        <div class="py-2 grid grid-cols-4">
          <news-card
            :article="article"
            v-for="article in article.read_more"
            :key="article.id"
          />
        </div>
      </div>
    </div>
    <div class="col-span-1">
      <ul role="list">
        <li
          v-for="i in 4"
          :key="i"
          class="my-4 first:text-yellow-500 last:line-through last:border-b-0"
        >
          <div class="flex items-center bg-blue-100 h-48 rounded-md">
            <h2 class="mx-auto">Ads Here</h2>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "ArticleDetail",
  data() {
    return {};
  },
  methods: {
    ...mapActions("article", ["fetchBySlug"]),
  },
  mounted() {
    this.fetchBySlug(this.$route.params.slug);
  },
  computed: {
    ...mapState("article", ["article"]),
  },
};
</script>

<style></style>
