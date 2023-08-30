<script setup>
const swiper = useSwiper();

const props = defineProps({
  style: Number,
});
console.log(props);
</script>

<template>
  <button @click="swiper.slideNext()" class="swiper-image-next">
    <img v-if="style == 1" src="@/assets/images/next-button-brown.webp" alt="" class="w-[35px] lg:w-[50px]">
    <img v-else src="@/assets/images/next-button.webp" alt="" class="w-[35px] lg:w-[60px]">
  </button> 
</template>
