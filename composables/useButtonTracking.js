// composables/useButtonTracking.js - Same as before
export const useButtonTracking = () => {
  const { $fb } = useNuxtApp()
  const isDev = process.dev
  const route = useRoute()

  const getFacebookIds = () => {
    const fbp = useCookie('_fbp').value
    const fbc = useCookie('_fbc').value
    return { fbp, fbc }
  }

  const trackEvent = async (eventName, eventData = {}) => {
    const { fbp, fbc } = getFacebookIds()
    
    const baseEventData = {
      page_path: route.path,
      timestamp: Date.now(),
      ...eventData
    }

    // Client-side Pixel tracking
    if ($fb) {
      try {
        $fb.track(eventName, baseEventData)
        if (isDev) console.log('✅ Pixel tracking sent')
      } catch (error) {
        console.error('❌ Pixel tracking failed:', error)
      }
    }

    // Server-side Conversions API
    try {
      const response = await $fetch('https://baanthaimalaysia.com/facebook-conversion.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: {
          eventName,
          eventData: baseEventData,
          pageUrl: window.location.href,
          fbp,
          fbc
        }
      })
      
      if (isDev) console.log('✅ Conversions API sent:', response)
    } catch (error) {
      console.error('❌ Conversions API failed:', error)
    }
  }

  const trackButtonClick = async (buttonName, additionalData = {}) => {
    await trackEvent('ButtonClick', {
      button_name: buttonName,
      ...additionalData
    })
  }

  return { trackButtonClick }
}