<!-- <template>
  <div class="bg-ourfoods">
    <div class="flex flex-wrap justify-between ">
      <div>
        <img id="stir-ftb" src="../assets/images/foods/food_2.webp" :class="{ 'grayscale-0': isHoveredCde }">
      </div>
      <div>
        <img id="thai-o" src="../assets/images/foods/Thai-Omellete.webp" :class="{ 'grayscale-0': isHoveredCde1 }">
      </div>
    </div>
    <div class="flex flex-wrap justify-around">
      <div>
        <img id="pad-t" src="../assets/images/foods/Pad-Thai.webp" :class="{ 'grayscale-0': isHoveredCde2 }">
      </div>
      <div>
        <img id="papaya-s" src="../assets/images/foods/papaya-salad.webp" :class="{ 'grayscale-0': isHoveredCde3 }">
      </div>
    </div>
    <div class="flex flex-wrap justify-between ">
      <div><img src="../assets/images/foods/food_5.webp" alt=""></div>
      <div><img src="../assets/images/foods/food_7.webp" alt=""></div>
    </div>
    <div class="flex flex-wrap justify-around">
      <div><img src="../assets/images/foods/pandan-chic.webp" alt=""></div>
      <div><img src="../assets/images/foods/food_8.webp" alt=""></div>
    </div>
    <div class="flex flex-wrap justify-between ">
      <div><img src="../assets/images/foods/Grilled-Fish-with-Salt.webp" alt=""></div>
      <div><img src="../assets/images/foods/tomyam.webp" alt=""></div>
    </div>
    <div class="flex flex-wrap justify-around">
      <div><img src="../assets/images/foods/food-12.webp" alt=""></div>
      <div><img src="../assets/images/foods/food_13.webp" alt=""></div>
    </div>
    <div class="flex flex-wrap justify-between ">
      <div><img src="../assets/images/foods/food_14.webp" alt=""></div>
      <div><img src="../assets/images/foods/bbq.webp" alt=""></div>
    </div>
    <div class="flex flex-wrap justify-around">
      <div><img src="../assets/images/foods/food_15.webp" alt=""></div>
      <div><img src="../assets/images/foods/food_16.webp" alt=""></div>
    </div>
    <div class="flex flex-wrap justify-between ">
      <div><img src="../assets/images/foods/lime-fish.webp" alt=""></div>
      <div><img src="../assets/images/foods/dessert.webp" alt=""></div>
    </div>
    <div class="flex flex-wrap justify-around">
      <div><img src="../assets/images/foods/food_19.webp" alt=""></div>
    </div>

    <section>
      <div class="uppercase of-card">
        <ul style="list-style-type:disc;" class="px-8 pb-5 font-medium text-2xl">
          <li
            class="mb-5"
            @mouseover="addClassToElement('thai-o', 'grayscale-0')"
            @mouseout="removeClassFromElement('thai-o', 'grayscale-0')"
          >Thai Omellete</li>
          <li
            class="mb-5"
            @mouseover="addClassToElement('papaya-s', 'grayscale-0')"
            @mouseout="removeClassFromElement('papaya-s', 'grayscale-0')"
          >Papaya Salad with Salted Crab</li>
          <li 
            class="mb-5"
            @mouseover="addClassToElement('pad-t', 'grayscale-0')"
            @mouseout="removeClassFromElement('pad-t', 'grayscale-0')"
          >Pad Thai</li>
          <li
            class="mb-5"
            @mouseover="addClassToElement('stir-ftb', 'grayscale-0')"
            @mouseout="removeClassFromElement('stir-ftb', 'grayscale-0')"
          >Stir Fried Thai Basil</li>
        </ul>
        <button class="w-full bg-lightgold rounded-full uppercase py-1">Online Order</button>
      </div>
      <div class="uppercase of-card-1">
        <ul style="list-style-type:disc;" class="px-8 pb-5 font-medium text-2xl">
          <li class="mb-5">Braised Pork Leg</li>
          <li class="mb-5">Deep Fried Pandan Chicken</li>
          <li class="mb-5">Pineapple Fried Rice</li>
        </ul>
        <button class="w-full bg-lightgold rounded-full uppercase py-1">Online Order</button>
      </div>
      
      <div class="uppercase of-card-2">
        <ul style="list-style-type:disc;" class="px-8 pb-5 font-medium text-2xl">
          <li class="mb-5">Claypot Glass Noodle<br> with Shrimp</li>
          <li class="mb-5">V</li>
          <li class="mb-5">Fried Fish with Three<br> Flavor Sauce</li>
        </ul>
        <button class="w-full bg-lightgold rounded-full uppercase py-1">Online Order</button>
      </div>

      <div class="uppercase of-card-3">
        <ul style="list-style-type:disc;" class="px-8 pb-5 font-medium text-2xl">
          <li class="mb-5">Banana Flower Prawn</li>
          <li class="mb-5">Southern Thai <br> Stewed Pork</li>
          <li class="mb-5">Grilled Pork Neck</li>
          <li class="mb-5">BBQ Pork Stick</li>
        </ul>
        <button class="w-full bg-lightgold rounded-full uppercase py-1">Online Order</button>
      </div>

      <div class="uppercase of-card-4">
        <ul style="list-style-type:disc;" class="px-8 pb-5 font-medium text-2xl">
          <li class="mb-5">Steam Fish with <br> Spicy Lime Sauce</li>
          <li class="mb-5">Mango Sticky Rice</li>
          <li class="mb-5">Red Ruby</li>
        </ul>
        <button class="w-full bg-lightgold rounded-full uppercase py-1">Online Order</button>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isHoveredCde: false, // Track hover state for the "cde" element
      isHoveredCde2: false,
      isHoveredCde3: false,
      isHoveredCde1: false,
    };
  },
  methods: {
    addClassToElement(targetId, className) {
      // Check if the target element exists
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.classList.add(className);
      }
    },
    removeClassFromElement(targetId, className) {
      // Check if the target element exists
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.classList.remove(className);
      }
    },
  },
};
</script> -->
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
      <section>
        <div class="uppercase of-card">
          <ul style="list-style-type: disc;" class="px-8 pb-5 font-medium text-2xl">
            <li
              class="mb-5"
              v-for="(food, index) in foodItems"
              :key="index"
              :class="{ 'text-lightgold': hoveredItem === index }"
              @mouseover="hoveredItem = index"
              @mouseout="hoveredItem = -1"
            >
              {{ food.name }}
            </li>
          </ul>
          <button class="w-full bg-lightgold rounded-full uppercase py-1">Online Order</button>
        </div>
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
      <section>
        <div class="uppercase of-card">
          <ul style="list-style-type: disc;" class="px-8 pb-5 font-medium text-2xl">
            <li
              class="mb-5"
              v-for="(food, index) in foodItems2"
              :key="index"
              :class="{ 'text-lightgold': hoveredItem2 === index }"
              @mouseover="hoveredItem2 = index"
              @mouseout="hoveredItem2 = -1"
            >
              {{ food.name }}
            </li>
          </ul>
          <button class="w-full bg-lightgold rounded-full uppercase py-1">Online Order</button>
        </div>
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
      <section>
        <div class="uppercase of-card">
          <ul style="list-style-type: disc;" class="px-8 pb-5 font-medium text-2xl">
            <li
              class="mb-5"
              v-for="(food, index) in foodItems3"
              :key="index"
              :class="{ 'text-lightgold': hoveredItem3 === index }"
              @mouseover="hoveredItem3 = index"
              @mouseout="hoveredItem3 = -1"
            >
              {{ food.name }}
            </li>
          </ul>
          <button class="w-full bg-lightgold rounded-full uppercase py-1">Online Order</button>
        </div>
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
      <section>
        <div class="uppercase of-card">
          <ul style="list-style-type: disc;" class="px-8 pb-5 font-medium text-2xl">
            <li
              class="mb-5"
              v-for="(food, index) in foodItems4"
              :key="index"
              :class="{ 'text-lightgold': hoveredItem4 === index }"
              @mouseover="hoveredItem4 = index"
              @mouseout="hoveredItem4 = -1"
            >
              {{ food.name }}
            </li>
          </ul>
          <button class="w-full bg-lightgold rounded-full uppercase py-1">Online Order</button>
        </div>
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
      <section>
        <div class="uppercase of-card">
          <ul style="list-style-type: disc;" class="px-8 pb-5 font-medium text-2xl">
            <li
              class="mb-5"
              v-for="(food, index) in foodItems5"
              :key="index"
              :class="{ 'text-lightgold': hoveredItem5 === index }"
              @mouseover="hoveredItem5 = index"
              @mouseout="hoveredItem5 = -1"
            >
              {{ food.name }}
            </li>
          </ul>
          <button class="w-full bg-lightgold rounded-full uppercase py-1">Online Order</button>
        </div>
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