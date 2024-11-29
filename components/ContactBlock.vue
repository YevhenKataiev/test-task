<template>
  <div class="md:flex md:flex-col grid grid-cols-2">
    <div >
      <div class="text-blue-700 font-bold">
        Электронная почта
      </div>
      <div>
        {{ email }}
      </div>
    </div>
    <div class="flex flex-col lg:mt-8">
      <div class="text-blue-700 font-bold">
        Телефон
      </div>
      <div>
        {{ phone }}
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const email: string = 'email@gmail.com'
const phone: string = '123-456-789'
</script>