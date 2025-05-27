<!-- app.vue -->
<template>
  <NuxtLayout>
    <AppLoading v-if="isLoading" />
    <NuxtPage v-else />
  </NuxtLayout>
</template>

<script setup>
const isLoading = ref(true)

onMounted(async () => {
  // Your loading logic here
  await new Promise(resolve => setTimeout(resolve, 2000))
  isLoading.value = false
})
</script>