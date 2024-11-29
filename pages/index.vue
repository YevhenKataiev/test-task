<template>
  <div class="flex flex-col md:flex-row w-full mx-auto justify-center gap-4 p-10 bg-[#ffcc99] relative">
    <ModalDialog v-if="show" @close="show = false"/>
    <SocialBlock class="order-1 md:order-2 justify-center"/>
    <ContactBlock class="order-2 md:order-1 justify-center"/>
    <ClientForm class="order-3 justify-center" @msg-emit="show = true"/>   
  </div>
</template>
<script setup lang="ts">
const show = ref(false)
</script>