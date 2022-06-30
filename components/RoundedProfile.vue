<template>
  <div class="flex flex-row justify-between pt-2">
    <div class="flex">
      <img
        :src="author.profile.avatar"
        class="object-cover w-8 h-8 rounded-full bg-white border-2 border-gray-400"
        alt="Image"
      />
      <h4 class="mt-1 ml-2 text-gray-400">{{ author.name }}</h4>
    </div>
  </div>
</template>

<script>
export default {
  name: "NameProfile",
  props: ["author"],
};
</script>

<style></style>
