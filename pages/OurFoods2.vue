<template>
  <div class="bg-ourfoods">
    <div class="relative">
      <!-- Food images section -->
      <div class="flex flex-wrap justify-between">
        <div v-for="(food, index) in foodItems" :key="index">
          <img :src="food.imageSrc" :class="{ 'grayscale-0': hoveredItem === index }" @mouseover="hoveredItem = index" @mouseout="hoveredItem = -1" alt="">
        </div>
      </div>

      <!-- List of food items section -->
      <section class="uppercase of-card">
        <ul style="list-style-type: disc;" class="px-5 lg:px-8 lg:pb-5 font-medium text-xs md:text-lg xl:text-2xl">
          <li
            class="mb-2 lg:mb-5"
            v-for="(food, index) in foodItems"
            :key="index"
            :class="{ 'text-lightgold': hoveredItem === index }"
            @mouseover="hoveredItem = index"
            @mouseout="hoveredItem = -1"
          >
            {{ food.name }}
          </li>
        </ul>
        <a href="https://weborder.zeoniq.com/one/init-b" target="_blank">
          <button class="w-full text-xs md:text-sm xl:text-base bg-lightgold rounded-full uppercase py-2">Online Order</button>
        </a>
      </section>
    </div>
    

    <div class="relative">
      <!-- Food images section -->
      <div class="flex flex-wrap justify-between">
        <div v-for="(food, index) in foodItems2" :key="index">
          <img :src="food.imageSrc" :class="{ 'grayscale-0': hoveredItem2 === index }" @mouseover="hoveredItem2 = index" @mouseout="hoveredItem2 = -1" alt="">
        </div>
      </div>

      <!-- List of food items section -->
      <section class="uppercase of-card">
        <ul style="list-style-type: disc;" class="px-5 lg:px-8 lg:pb-5 font-medium text-xs md:text-lg xl:text-2xl">
          <li
            class="mb-2 lg:mb-5"
            v-for="(food, index) in foodItems2"
            :key="index"
            :class="{ 'text-lightgold': hoveredItem2 === index }"
            @mouseover="hoveredItem2 = index"
            @mouseout="hoveredItem2 = -1"
          >
            {{ food.name }}
          </li>
        </ul>
        <a href="https://weborder.zeoniq.com/one/init-b" target="_blank">
          <button class="w-full text-xs md:text-sm xl:text-base bg-lightgold rounded-full uppercase py-2">Online Order</button>
        </a>
      </section>
    </div>

    <div class="relative">
      <!-- Food images section -->
      <div class="flex flex-wrap justify-between">
        <div v-for="(food, index) in foodItems3" :key="index">
          <img :src="food.imageSrc" :class="{ 'grayscale-0': hoveredItem3 === index }" @mouseover="hoveredItem3 = index" @mouseout="hoveredItem3 = -1" alt="">
        </div>
      </div>

      <!-- List of food items section -->
      <section class="uppercase of-card">
        <ul style="list-style-type: disc;" class="px-5 lg:px-8 lg:pb-5 font-medium text-xs md:text-lg xl:text-2xl">
          <li
            class="mb-2 lg:mb-5"
            v-for="(food, index) in foodItems3"
            :key="index"
            :class="{ 'text-lightgold': hoveredItem3 === index }"
            @mouseover="hoveredItem3 = index"
            @mouseout="hoveredItem3 = -1"
          >
            {{ food.name }}
          </li>
        </ul>
        <a href="https://weborder.zeoniq.com/one/init-b" target="_blank">
          <button class="w-full text-xs md:text-sm xl:text-base bg-lightgold rounded-full uppercase py-2">Online Order</button>
        </a>
      </section>

    </div>

    <div class="relative">
      <!-- Food images section -->
      <div class="flex flex-wrap justify-between">
        <div v-for="(food, index) in foodItems4" :key="index">
          <img :src="food.imageSrc" :class="{ 'grayscale-0': hoveredItem4 === index }" @mouseover="hoveredItem4 = index" @mouseout="hoveredItem4 = -1" alt="">
        </div>
      </div>

      <!-- List of food items section -->
      <section class="uppercase of-card">
        <ul style="list-style-type: disc;" class="px-5 xl:px-8 xl:pb-5 font-medium text-xs md:text-lg xl:text-2xl">
          <li
            class="mb-2 lg:mb-5"
            v-for="(food, index) in foodItems4"
            :key="index"
            :class="{ 'text-lightgold': hoveredItem4 === index }"
            @mouseover="hoveredItem4 = index"
            @mouseout="hoveredItem4 = -1"
          >
            {{ food.name }}
          </li>
        </ul>
        <a href="https://weborder.zeoniq.com/one/init-b" target="_blank">
          <button class="w-full text-xs md:text-sm xl:text-base bg-lightgold rounded-full uppercase py-2">Online Order</button>
        </a>
      </section>
    </div>

    <div class="relative">
      <!-- Food images section -->
      <div class="flex flex-wrap justify-between">
        <div v-for="(food, index) in foodItems5" :key="index">
          <img :src="food.imageSrc" :class="{ 'grayscale-0': hoveredItem5 === index }" @mouseover="hoveredItem5 = index" @mouseout="hoveredItem5 = -1" alt="">
        </div>
      </div>

      <!-- List of food items section -->
      <section class="uppercase of-card">
        <ul style="list-style-type: disc;" class="px-5 lg:px-8 lg:pb-5 font-medium text-xs md:text-lg xl:text-2xl">
          <li
            class="mb-2 lg:mb-5"
            v-for="(food, index) in foodItems5"
            :key="index"
            :class="{ 'text-lightgold': hoveredItem5 === index }"
            @mouseover="hoveredItem5 = index"
            @mouseout="hoveredItem5 = -1"
          >
            {{ food.name }}
          </li>
        </ul>
        <a href="https://weborder.zeoniq.com/one/init-b" target="_blank">
          <button class="w-full text-xs md:text-sm xl:text-base bg-lightgold rounded-full uppercase py-2">Online Order</button>
        </a>
      </section>
    </div>
    
  </div>
</template>

<script>
// foodItems
import thai_o from "../assets/images/foods/Thai-Omellete.webp";
import papaya_swsc from "../assets/images/foods/papaya-salad.webp";
import pad_t from "../assets/images/foods/Pad-Thai.webp";
import stir_ftb from "../assets/images/foods/food_2.webp";
// foodItems2
import pineapple_fr from "../assets/images/foods/food_5.webp";
import southern_tspb from "../assets/images/foods/food_7.webp";
import pandan_chi from "../assets/images/foods/pandan-chic.webp";
import braised_pl from "../assets/images/foods/food_8.webp";
// foodItem3
import grilled_fws from "../assets/images/foods/Grilled-Fish-with-Salt.webp";
import tomyam from "../assets/images/foods/tomyam.webp";
import fish_tfs from "../assets/images/foods/food-12.webp";
import pork_neck from "../assets/images/foods/food_13.webp";
// foodItem4
import claypot_cnws from "../assets/images/foods/food_14.webp";
import bbq_ps from "../assets/images/foods/bbq.webp";
import deep_fcwg from "../assets/images/foods/food_15.webp";
import banana_fp from "../assets/images/foods/food_16.webp";
// foodItem5
import steam_fish_wsls from "../assets/images/foods/lime-fish.webp";
import red_ruby from "../assets/images/foods/dessert.webp";
import mango_sr from "../assets/images/foods/food_19.webp";

export default {
  data() {
    return {
      hoveredItem: -1,
      hoveredItem2: -1,
      hoveredItem3: -1,
      hoveredItem4: -1,
      hoveredItem5: -1, // Track the index of the hovered item
      foodItems: [
        { name: 'Thai Omellete', imageSrc: thai_o },
        { name: 'Papaya Salad with Salted Crab', imageSrc: papaya_swsc },
        { name: 'Pad Thai', imageSrc: pad_t },
        { name: 'Stir Fried Thai Basil', imageSrc: stir_ftb },
        // Add more food items here
      ],
      foodItems2: [
        { name: 'Pineapple Fried Rice', imageSrc: pineapple_fr },
        { name: 'Southern Thai Stewed Pork Belly', imageSrc: southern_tspb },
        { name: 'Deep Fried Pandan Chicken', imageSrc: pandan_chi },
        { name: 'Braised Pork Leg', imageSrc: braised_pl },
      ],
      foodItems3: [
        { name: 'Grilled Fish with Salt', imageSrc: grilled_fws },
        { name: 'Red Tomyam Soup', imageSrc: tomyam },
        { name: 'FRIED FISH WITH THREE FLAVOR SAUCE', imageSrc: fish_tfs },
        { name: 'Grilled Pork Neck', imageSrc: pork_neck },
      ],
      foodItems4: [
        { name: 'Claypot Glass Noodle with Shrimp', imageSrc: claypot_cnws },
        { name: 'BBQ Pork Stick', imageSrc: bbq_ps },
        { name: 'Deep Fried Calamari with Garlic', imageSrc: deep_fcwg },
        { name: 'Banana Flower Prawn', imageSrc: banana_fp },
      ],
      foodItems5: [
        { name: 'Steam Fish with Spicy Lime Sauce', imageSrc: steam_fish_wsls },
        { name: 'Red Ruby', imageSrc: red_ruby },
        { name: 'Mango Sticky Rice', imageSrc: mango_sr },
      ],
    };
  },
};
</script>