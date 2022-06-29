<template>
  <NuxtLink
    :to="route"
    class="items-center p-3 m-2 bg-gray-200 rounded-lg border md:max-w-sm md:flex-row transition shadow-sm hover:shadow-lg dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
  >
    <img
      class="object-cover min-w-full h-36 rounded-lg"
      src="~/assets/img/animal.jpg"
      alt=""
    />
    <div class="flex flex-col justify-between pt-2 leading-normal">
      <h5 class="tracking-tight text-gray-900 dark:text-white">
        Noteworthy technology acquisitions 2021
      </h5>

      <div class="flex justify-between">
        <rounded-profile> </rounded-profile>

        <div class="text-gray-400 justify-end text-sm text-right mt-1">
          <div class="justify-between">254 Views</div>
          <h4>23 July, 2022</h4>
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
  props: ["route"],
};
</script>

<style></style>
