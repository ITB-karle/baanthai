<template>
  <section class="bg-contact flex justify-center items-center">
    <h1 class="text-5xl text-white font-bold">Contact Us</h1>
  </section>

  <section class="bg-marblr">
    <div class="container mx-auto">
      <div class="md:grid md:grid-cols-12 mt-[-50px] font-medium text-sm lg:text-lg">
        <button @click="setActive('pudu')" class="mb-5 md:mb-0 w-full md:col-span-4 md:col-start-3">
          <div 
            class="rounded-lg bg-lightgold text-brown text-center flex flex-col justify-center items-center py-7 px-6 lg:px-12 mx-5 md:mx-3 lg:mx-5 hover:bg-brown hover:text-lightgold h-full"
            :class="{ 'active-map': map === 'pudu' }"
          >
            <p class="text-lg lg:text-2xl font-bold">Baan Thai@Pudu Ulu</p>
            <p class="my-7">
              Address:
              <br>No. 4, Jalan Pudu Ulu,56100 Cheras, Kuala Lumpur, Malaysia.
            </p>
            <p>
              Phone:
              <br>018-911 6315
            </p>
            <div class="flex justify-around items-center w-[100px] mx-auto mt-5 mb-5">
              <a href="https://www.facebook.com/BaanThaiRestaurantCheras/" target="_blank" @click="trackSocialClick('facebook', 'pudu')">
                <font-awesome-icon :icon="['fab', 'facebook-f']" class="w-[15px]" />
              </a>
              <a href="https://www.instagram.com/baanthai_pudu?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" @click="trackSocialClick('instagram', 'pudu')">
                <font-awesome-icon :icon="['fab', 'instagram']" class="w-[30px]" />
              </a>
            </div>
          </div>
        </button>
        
        <button @click="setActive('kuchai')" class="mb-5 md:mb-0 w-full md:col-span-4">
          <div
            class="rounded-lg bg-lightgold text-brown flex flex-col text-center justify-center items-center py-7 px-6 lg:px-12 mx-5 md:mx-3 lg:mx-5 hover:bg-brown hover:text-lightgold h-full"
            :class="{ 'active-map': map === 'kuchai' }"
          >
            <p class="text-lg lg:text-2xl font-bold">Baan Thai 2 Seafood & Thai Cuisine</p>
            <p class="my-7">
              Address:
              <br>Lot pt 15288a, Jalan Kuchai Lama, 58200 Kuala Lumpur, Malaysia
            </p>
            <p>
              Phone:
              <br>018-315 3323
            </p>
            <div class="flex justify-around items-center w-[100px] mx-auto mt-5 mb-5">
              <a href="https://www.facebook.com/baanthai2thaicuisinekuchailama" target="_blank" @click="trackSocialClick('facebook', 'kuchai')">
                <font-awesome-icon :icon="['fab', 'facebook-f']" class="w-[15px]" />
              </a>
              <a href="https://www.instagram.com/baanthai2_kuchai?igsh=OGQ5ZDc2ODk2ZA==" target="_blank" @click="trackSocialClick('instagram', 'kuchai')">
                <font-awesome-icon :icon="['fab', 'instagram']" class="w-[30px]" />
              </a>
            </div>
          </div>
        </button>
      </div>
      
      <iframe
        v-if="map === 'pudu' || map === 'kuchai'"
        class="mt-10 mb-24 px-2 md:px-5 lg:px-0"
        :src="getMapSrc()"
        width="100%" 
        height="550" 
        style="border:0;" 
        allowfullscreen="true" 
        loading="lazy" 
        referrerpolicy="no-referrer-when-downgrade">
      </iframe>
    </div>
  </section>
</template>

<script setup>
const { trackPageView, trackLocationSelection, trackButtonClick } = useButtonTracking()

// Reactive data
const map = ref('pudu')

// Track page view when component mounts
onMounted(() => {
  trackPageView('Contact Page', {
    page_type: 'contact',
    content_category: 'restaurant_locations',
    default_location: 'pudu'
  })
})

// Methods
const setActive = (selectedMap) => {
  map.value = selectedMap
  
  // Track location selection
  trackLocationSelection(selectedMap, {
    action: 'location_switch',
    selected_location: selectedMap,
    previous_location: map.value !== selectedMap ? map.value : null
  })
}

const getMapSrc = () => {
  if (map.value === 'pudu') {
    return "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.9010212450567!2d101.72688241107649!3d3.120876053311593!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc37a0c07a4a4d%3A0x18bfb0c46e61d694!2sBaan%20Thai%20%40%20Pudu%20Ulu!5e0!3m2!1sen!2smy!4v1692245103460!5m2!1sen!2smy"
  } else if (map.value === 'kuchai') {
    return "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.007374784212!2d101.68231041107639!3d3.0926957534829853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc4a1553dac4a3%3A0x75943ba6691ac996!2sBaan%20Thai%202%20Seafood%20%26%20Thai%20Cuisine!5e0!3m2!1sen!2smy!4v1692248071442!5m2!1sen!2smy"
  } else {
    return "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15934.840209531976!2d101.6646926!3d3.1708488!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc4962758b03e1%3A0x18ef224696a780d7!2sBaan%20Thai%20%40%20Publika!5e0!3m2!1sen!2smy!4v1697439865356!5m2!1sen!2smy"
  }
}

const trackSocialClick = (platform, location) => {
  trackButtonClick('social_media_button', {
    platform: platform,
    location: location,
    action: 'social_media_click',
    link_type: 'external'
  })
}
</script>