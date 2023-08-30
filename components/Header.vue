<template>
  <div> 
    <nav class="bg-brown relative z-50">
      <div class="container flex flex-wrap items-center justify-between lg:justify-evenly mx-auto py-1 px-3">
        <nuxt-link to="/" class="flex items-center">
          <img src="../assets/images/Baan_Thai_Logo.webp" class="md:h-20 h-12 xl:mr-3" alt="Baan Thai Logo" />
        </nuxt-link>
        <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-lightgold rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
          <span class="sr-only">Open main menu</span>
          <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
          </svg>
        </button>
        <div class="hidden w-full lg:flex lg:w-auto uppercase items-center text-center" id="navbar-default">
          <ul class="font-medium flex flex-col p-4 lg:p-0 lg:mr-5 mt-4 rounded-lg lg:flex-row lg:space-x-8 lg:mt-0">
            <li class="my-2 lg:my-0">
              <nuxt-link class="nav-link text-lightgold" to="/ourstory" exact-active-class="active">Our Story</nuxt-link>
            </li>
            <li class="my-2 lg:my-0">
              <nuxt-link class="nav-link text-lightgold" to="/ourfoods" exact-active-class="active">Our Foods</nuxt-link>
            </li>
            <li class="my-2 lg:my-0">
              <nuxt-link class="nav-link text-lightgold" to="/gallery" exact-active-class="active">Gallery</nuxt-link>
            </li>
            <li class="my-2 lg:my-0">
              <nuxt-link class="nav-link text-lightgold" to="/contact" exact-active-class="active">Contact Us</nuxt-link>
            </li>
            <li class="my-2 lg:my-0">
              <nuxt-link class="nav-link text-lightgold" to="/" exact-active-class="active">Mulah Point</nuxt-link>
            </li>
          </ul>
          <div class="text-center text-xs md:text-base">
            <button class="rounded-full text-white bg-lightgold px-6 py-2 mx-2 my-3 lg:my-0"><nuxt-link to="/vipreserve">VIP RESERVATION</nuxt-link></button>
            <button class="rounded-full text-white bg-lightgold px-6 py-2 mx-2">ONLINE ORDER</button>
          </div>
        </div>

        

      </div>
    </nav>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { initCollapses } from 'flowbite'

// initialize components based on data attribute selectors
onMounted(() => {
    initCollapses();
})
</script>