// plugins/loading.client.js
export default defineNuxtPlugin(() => {
  const nuxtApp = useNuxtApp()
  
  // Override default loading behavior
  nuxtApp.hook('app:beforeMount', () => {
    // Your custom loading logic here
    console.log('App is loading...')
  })
  
  nuxtApp.hook('app:mounted', () => {
    // Hide loading when app is mounted
    console.log('App loaded!')
  })
})