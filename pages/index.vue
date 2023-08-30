<template>
  <div> 
    <section class="relative">
      <swiper
        slidesPerView="1"
        :spaceBetween="30"
        :centeredSlides="true"
        :loop="true"
        :autoplay="{
          delay: 3000,
          disableOnInteraction: false,
        }"
        :pagination="{
          clickable: true,
        }"
        :modules="modules"
        class="mySwiper"
      >
        <swiper-slide>
          <img src="../assets/images/Baanthai_home.webp" alt="" class="w-full">
          <div class="swiper-button text-xs md:text-xl lg:text-4xl font-medium text-white text-center mx-auto">
            <button class="block bg-lightgold py-1 lg:py-3 px-3 lg:px-8 rounded-full mb-2 lg:mb-8">Order Now</button>
            <button class="block bg-lightgold py-1 lg:py-3 px-3 lg:px-8 rounded-full mb-2 lg:mb-8">VIP Reservation</button>
          </div>
        </swiper-slide>
        <swiper-slide><img src="../assets/images/Baanthai_home.webp" alt="" class="w-full"></swiper-slide>
        <swiper-slide><img src="../assets/images/Baanthai_home.webp" alt="" class="w-full"></swiper-slide>
      </swiper>
    </section>
   
    <section class="bg-main py-10 md:py-20">
      <div class="md:grid md:grid-cols-2 container px-3 xl:px-0 md:mx-auto pb-8 md:pb-14 items-center">
        <h1 class="uppercase text-2xl lg:text-5xl text-brown font-bold border-l-8 lg:border-l-10 border-lightgold py-1 lg:py-3 px-7 mb-5 md:mb-0">Who is <br> Baan Thai</h1>
        <p class="text-sm md:text-base font-medium">
          Baan Thai means Thai home or Thai house in English. It symbolizes the unique and balanced
          way-of-being that Thai culture embodies, and with food being its central ingredient. As
          currently Malaysia largest indoor Thai cuisine, Baan Thai opened its doors in 2016 and has
          been serving up an exotic choice of real Thai cookery ever since.
        </p>
      </div>
      
      <swiper
        :slidesPerView="1"
        :spaceBetween="30"
        :loop="true"
        :navigation="false"
        :modules="modules"
        class="mySwiper"
      >
        <swiper-slide>
          <div class="lg:w-7/12 lg:mx-auto md:flex md:justify-center">
            <img src="../assets/images/environment.webp" alt="" class="md:w-[300px] lg:w-[375px] xl:w-[450px] lg:mx-5 px-8 md:px-2 my-3 md:my-0">
            <img src="../assets/images/environment2.webp" alt="" class="md:w-[300px] lg:w-[375px] xl:w-[450px] lg:mx-5 px-8 md:px-2 my-3 md:my-0">
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="lg:w-7/12 lg:mx-auto md:flex md:justify-center">
            <img src="../assets/images/environment2.webp" alt="" class="md:w-[300px] lg:w-[375px] xl:w-[450px] lg:mx-5 px-8 md:px-2 my-3 md:my-0">
            <img src="../assets/images/environment.webp" alt="" class="md:w-[300px] lg:w-[375px] xl:w-[450px] lg:mx-5 px-8 md:px-2 my-3 md:my-0">
          </div>
        </swiper-slide>
        <SwiperControls class="next-button-place"  />
      </swiper>
      
    </section>

    <section class="bg-gray py-16 lg:py-24">
      <h1 class="uppercase text-2xl lg:text-5xl text-black font-bold text-center mb-5 lg:mb-12">Explore our foods</h1>
      <div class="grid grid-cols-2  lg:grid-cols-3 xl:grid-cols-5 container mx-auto px-0 md:px-16 lg:px-0">
        <div class="text-center mx-1 md:mx-3">
          <img src="../assets/images/food.webp" alt="">
          <div class="p-4">
            <p class="font-medium text-base md:text-xl">Red Tom Yum Soup</p>
            <p class="text-sm md:text-base">It's made with shrimp, chicken stock, mushrooms, veggies, and spices.</p>
          </div>
        </div>
        <div class="text-center mx-1 md:mx-3">
          <img src="../assets/images/food2.webp" alt="">
          <div class="p-4">
            <p class="font-medium text-base md:text-xl">Grilled Fish with Salt</p>
            <p class="text-sm md:text-base">It's made with shrimp, chicken stock, mushrooms, veggies, and spices.</p>
          </div>
        </div>
        <div class="text-center mx-1 md:mx-3">
          <img src="../assets/images/food3.webp" alt="">
          <div class="p-4">
            <p class="font-medium text-base md:text-xl">BBQ Pork Sticks</p>
            <p class="text-sm md:text-base">It's made with shrimp, chicken stock, mushrooms, veggies, and spices.</p>
          </div>
        </div>
        <div class="text-center mx-1 md:mx-3">
          <img src="../assets/images/food4.webp" alt="">
          <div class="p-4">
            <p class="font-medium text-base md:text-xl">Steam Siakap with <br class="hidden md:block"> Spicy Lime Sauce</p>
            <p class="text-sm md:text-base">It's made with shrimp, chicken stock, mushrooms, veggies, and spices.</p>
          </div>
        </div>
        <div class="text-center mx-1 md:mx-3">
          <img src="../assets/images/food5.webp" alt="">
          <div class="p-4">
            <p class="font-medium text-base md:text-xl">Deep Fried <br class="hidden md:block"> Pandan Chicken</p>
            <p class="text-sm md:text-base">Fried chicken wrapped with screwpine leaves.</p>
          </div>
        </div>
      </div>

      <div class="text-center mt-12 md:mt-20">
        <button class="bg-brown text-white rounded-full px-16 py-1 text-sm md:text-base">Explore Now</button>
      </div>
    </section>

    <section class="bg-marblr py-16 md:pt-36 md:pb-24">
      <h1 class="uppercase text-2xl lg:text-5xl text-black font-bold text-center mb-5 lg:mb-12">Gallery</h1>
      <div class="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 container mx-auto px-0 md:px-16 lg:px-0">
        <img src="../assets/images/gallery.webp" alt="" class="p-2 xl:p-0 xl:px-5">
        <img src="../assets/images/gallery2.webp" alt="" class="p-2 xl:p-0 xl:px-5">
        <img src="../assets/images/gallery4.webp" alt="" class="p-2 xl:p-0 xl:px-5">
        <img src="../assets/images/gallery3.webp" alt="" class="p-2 xl:p-0 xl:px-5">
        <img src="../assets/images/gallery5.webp" alt="" class="p-2 xl:p-0 xl:px-5">
      </div>

      <div class="text-center mt-16 lg:mt-44">
        <button class="bg-brown text-white rounded-full px-16 py-1 text-sm md:text-base">View Now</button>
      </div>
    </section>

    <!-- <section class="bg-vip-reserve py-40">
      <h1 class="uppercase text-5xl text-brown font-bold text-center mb-40">VIP RESERVE</h1>
      <div class="container mx-auto">
        <div class="grid grid-cols-2">
          <img src="../assets/images/vip-reserve-room.webp" alt="" class="w-4/5 px-5">
          <div class="bg-white h-3/4 w-full my-auto ml-[-30%] flex flex-col items-center justify-center">
            <div>
              <p class="text-2xl font-medium">Baan Thai 2 Seafood & Thai Cuisine<br> (VIP ROOM Type 1)</p>
              <button class="bg-brown text-white rounded-full px-16 py-1 mt-12">View Now</button>
            </div>
          </div>
        </div>
      </div>
    </section> -->

    <section class="bg-vip-reserve py-16 lg:py-40">
      <h1 class="uppercase text-2xl lg:text-5xl text-brown font-bold text-center mb-5 lg:mb-40">VIP RESERVE</h1>
      <div class="container mx-auto">
        <swiper
          :slidesPerView="1"
          :spaceBetween="30"
          :loop="true"
          :modules="modules"
          class="mySwiper"
        >
          <swiper-slide class="bg-transparent">
            <div class="grid md:grid-cols-2">
              <img src="../assets/images/type1.webp" alt="" class="px-5">
              <div class="bg-white md:h-3/4 md:w-full my-auto md:ml-[-10%] flex flex-col items-center justify-center lg:text-left mx-8 md:mx-0">
                <div class="my-5 md:my-0">
                  <p class="text-lg lg:text-2xl font-medium">Baan Thai 2 Seafood & Thai Cuisine<br> (VIP ROOM Type 1)</p>
                  <button class="bg-brown text-white rounded-full px-20 py-1 mt-12 text-xs md:text-base">View Now</button>
                </div>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="grid md:grid-cols-2">
              <img src="../assets/images/type2.webp" alt="" class="px-5">
              <div class="bg-white md:h-3/4 md:w-full my-auto md:ml-[-10%] flex flex-col items-center justify-center lg:text-left mx-8 md:mx-0">
                <div class="my-5 md:my-0">
                  <p class="text-lg lg:text-2xl font-medium">Baan Thai 2 Seafood & Thai Cuisine<br> (VIP ROOM Type 2)</p>
                  <button class="bg-brown text-white rounded-full px-20 py-1 mt-12 text-xs md:text-base">View Now</button>
                </div>
              </div>
            </div></swiper-slide>
          <swiper-slide>
            <div class="grid md:grid-cols-2">
              <img src="../assets/images/type3.webp" alt="" class="px-5">
              <div class="bg-white md:h-3/4 md:w-full my-auto md:ml-[-10%] flex flex-col items-center justify-center lg:text-left mx-8 md:mx-0">
                <div class="my-5 md:my-0">
                  <p class="text-lg lg:text-2xl font-medium">Baan Thai 2 Seafood & Thai Cuisine<br> (VIP ROOM Type 3)</p>
                  <button class="bg-brown text-white rounded-full px-20 py-1 mt-12 text-xs md:text-base">View Now</button>
                </div>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="grid md:grid-cols-2">
              <img src="../assets/images/type4.webp" alt="" class="px-5">
              <div class="bg-white md:h-3/4 md:w-full my-auto md:ml-[-10%] flex flex-col items-center justify-center lg:text-left mx-8 md:mx-0">
                <div class="my-5 md:my-0">
                  <p class="text-lg lg:text-2xl font-medium">Baan Thai 2 Seafood & Thai Cuisine<br> (VIP ROOM Type 4 )</p>
                  <button class="bg-brown text-white rounded-full px-20 py-1 mt-12 text-xs md:text-base">View Now</button>
                </div>
              </div>
            </div>
          </swiper-slide>

          <SwiperControls :style="1" />
        </swiper>
      </div>
    </section>

    <section class="bg-marblr py-16 md::pt-36 md:pb-24 px-3 lg:px-0">
      <h1 class="container uppercase text-2xl lg:text-5xl text-brown font-bold text-right border-r-8 border-lightgold py-1 lg:py-3 px-7">What Customers <br> Think About Us</h1>
      <!-- <div class="grid grid-cols-5 container mx-auto">
        <img src="../assets/images/gallery.webp" alt="" class="px-5">
        <img src="../assets/images/gallery2.webp" alt="" class="px-5">
        <img src="../assets/images/gallery3.webp" alt="" class="px-5">
        <img src="../assets/images/gallery4.webp" alt="" class="px-5">
        <img src="../assets/images/gallery5.webp" alt="" class="px-5">
      </div> -->
    </section>
  </div>
</template>

<script setup>
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';

  // Import Swiper styles
  import 'swiper/css';

  import 'swiper/css/pagination';
  import 'swiper/css/navigation';

  // import required modules
  import { Autoplay, Pagination, Navigation } from 'swiper/modules';


  const modules = [Autoplay, Pagination, Navigation];

  // export default {
  //   components: {
  //     Swiper,
  //     SwiperSlide,
  //   },
  //   setup() {
  //     return {
  //       modules: [Autoplay, Pagination, Navigation],

  //     };
      
  //   },
  // };
</script>
