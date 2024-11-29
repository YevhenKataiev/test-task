<template>
  <div class="md:grid md:grid-cols-2 gap-8 flex">
    <NuxtLink v-for="svg in svgArray" to="/">
      <img class=" h-16 w-16" :src="svg" alt="icon" />
    </NuxtLink>
  </div>
</template>
<script setup lang="ts">
const svgArray: string[] = [
  '/icons/twitter.svg',
  '/icons/fb.svg',
  '/icons/vk.svg',
  '/icons/insta.svg',
]
</script>