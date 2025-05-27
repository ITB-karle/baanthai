<!-- app.vue -->
<template>
  <NuxtLayout>
    <AppLoading v-if="isLoading" />
    <NuxtPage v-else />
  </NuxtLayout>
</template>

<!-- <script setup>
const isLoading = ref(true)

onMounted(async () => {
  // Your loading logic here
  await new Promise(resolve => setTimeout(resolve, 2000))
  isLoading.value = false
})
</script> -->

<script setup>
const isLoading = ref(true)

onMounted(async () => {
  // Debug Facebook Pixel
  console.log('=== nuxt3-meta-pixel Debug ===')
  
  const { $fb } = useNuxtApp()
  console.log('$fb from useNuxtApp():', $fb)
  console.log('window.fbq:', window.fbq)
  console.log('document scripts:', document.querySelectorAll('script[src*="facebook"]'))
  
  // Wait a bit for scripts to load
  setTimeout(() => {
    console.log('After timeout - window.fbq:', window.fbq)
    console.log('After timeout - $fb:', $fb)
  }, 2000)
  
  // Your loading logic
  await new Promise(resolve => setTimeout(resolve, 3500))
  isLoading.value = false
})
</script>