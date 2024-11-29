<template>
  <VForm @submit="onSubmit" class="flex flex-col" v-slot="{ errors }">
    <div class="flex flex-col md:flex-row">
      <div class="relative">
        <VField name="name" rules="required" type="text" class="rounded-full p-1 text-center h-16 md:w-[150px] w-full"
          placeholder="Ваше имя" />
        <span class="absolute left-0 top-full text-sm">{{ errors.name }}</span>
      </div>

      <div class="relative md:ml-6 md:mt-0 mt-8">
        <VField name="phone" rules="required|numeric" class="rounded-full p-1 text-center h-16 md:w-[150px] w-full "
          placeholder="Ваш телефон" />
        <span class="absolute left-0 top-full text-sm">{{ errors.phone }}</span>
      </div>
    </div>
    <div class="flex flex-col md:flex-row mt-8">
      <button class="rounded-full bg-red-500 text-white text-center h-16 w-[150px] order-2 md:order-1 mt-8 md:mt-0" type="submit">записаться</button>
      <div class="text-wrap md:w-[150px] md:ml-6 order-1 md:order-2">{{ msg }}</div>
    </div>
  </VForm>
</template>
<script setup lang="ts">
import type { IData } from '~/types/data';

const emit = defineEmits(['msgEmit'])
const msg:string = 'Наш менеджер свяжется с вами в течении дня'
const url:string = 'https://jsonplaceholder.typicode.com/posts/1'
const { setData } = useDataStore()
async function onSubmit(values:any) {
  const data = await $fetch<object>(url);
  const newData = { ...values, ...toRaw(data)}
  setData(newData as IData)
  emit('msgEmit')
}
</script>