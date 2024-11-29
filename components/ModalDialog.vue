<template>
  <div class="min-w-[300px] min-h-[200px] z-10 absolute bg-green-200 rounded-lg left-0 top-0">
    <button autofocus @click="$emit('close')" class="bg-red-200 rounded-full w-12">Close</button>
    <pre >
      {{ dataStore.data }}
    </pre>
  </div>
</template>
<script setup lang="ts">
const dataStore = useDataStore();
defineEmits(['close'])
</script>