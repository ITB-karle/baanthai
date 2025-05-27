// composables/useButtonTracking.js
export const useButtonTracking = () => {
  const { $fb } = useNuxtApp()
  const isDev = process.dev

  const trackButtonClick = (buttonName, additionalData = {}) => {
    const eventData = {
      button_name: buttonName,
      page_path: useRoute().path,
      timestamp: Date.now(),
      ...additionalData
    }

    if (isDev) {
      console.group('🎯 Facebook Pixel Tracking')
      console.log('Event:', 'ButtonClick')
      console.log('Button Name:', buttonName)
      console.log('Data:', eventData)
      console.log('FB Object:', $fb)
      console.groupEnd()
    }

    if ($fb) {
      try {
        $fb.track('ButtonClick', eventData)
        if (isDev) console.log('✅ Tracking sent successfully')
      } catch (error) {
        console.error('❌ Tracking failed:', error)
      }
    } else {
      console.warn('⚠️ Facebook Pixel not loaded')
    }
  }

  const trackPageView = (pageName, additionalData = {}) => {
    if ($fb) {
      $fb.track('ViewContent', {
        content_name: pageName,
        content_type: 'page',
        page_path: useRoute().path,
        ...additionalData
      })
    }
  }

  const trackLocationSelection = (locationName, additionalData = {}) => {
    if ($fb) {
      $fb.track('ButtonClick', {
        button_name: 'location_selection_button',
        location_name: locationName,
        page_path: useRoute().path,
        timestamp: Date.now(),
        ...additionalData
      })
    }
  }

  return { trackButtonClick, trackPageView, trackLocationSelection }
}