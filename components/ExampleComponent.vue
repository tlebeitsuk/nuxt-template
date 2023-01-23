<script setup lang="ts">
// ⚡️ Reactivity Transform: syntax magic to remove the need for .value everywhere
const title = $ref('Database')

// ⚡️ Autocompleted API routes, data and types. Pick only the data you need.
const { data } = await useFetch('/api/db/1')
// const { data } = await useFetch('/api/pokemon', { pick: ['name', 'sprites'] })

onMounted(async () => {
  await useFetch('/api/db/1', {
    method: 'POST',
    body: { description: 'Hello World', details: 'Test' },
  })
})
</script>

<template>
  <div class="bg-green-100 m-10 p-10 text-center">
    <h3 class="text-lg">Component: {{ title }}</h3>

    <div class="flex flex-col justify-center items-center mt-8">
      <div class="font-bold capitalize">{{ data }}</div>
    </div>
  </div>
</template>
