<template>
  <div class="bg-white">
    <div class="container mx-auto lg:text-center">
      <section class="font-medium btn-gallery mt-20 mb-8 mx-5">
        <button :class="{'active': type === 'all'}" class="rounded-full bg-gray px-4 py-1 mx-2 mb-3" @click="changeType('all')">ALL</button>
        <button :class="{'active': type === ''}" class="rounded-full bg-gray px-4 py-1 mx-2 mb-3" @click="changeType('bs')">Best Seller</button>
        <button :class="{'active': type === 'sd'}" class="rounded-full bg-gray px-4 py-1 mx-2 mb-3" @click="changeType('sd')">Signature Dish</button>
        <button :class="{'active': type === 'rice'}" class="rounded-full bg-gray px-4 py-1 mx-2 mb-3" @click="changeType('rice')">Rices</button>
        <button :class="{'active': type === 'thainoodle'}" class="rounded-full bg-gray px-4 py-1 mx-2 mb-3" @click="changeType('thainoodle')">Thai Noodles</button>
        <button :class="{'active': type === 'seafood'}" class="rounded-full bg-gray px-4 py-1 mx-2 mb-3" @click="changeType('seafood')">Seafoods</button>
        <button :class="{'active': type === 'chicken'}" class="rounded-full bg-gray px-4 py-1 mx-2 mb-3" @click="changeType('chicken')">Chickens</button>
        <button :class="{'active': type === 'mookata'}" class="rounded-full bg-gray px-4 py-1 mx-2 mb-3" @click="changeType('mookata')">Mookata</button>
        <button :class="{'active': type === 'salad'}" class="rounded-full bg-gray px-4 py-1 mx-2 mb-3" @click="changeType('salad')">Salads Series</button>
        <button :class="{'active': type === 'snack'}" class="rounded-full bg-gray px-4 py-1 mx-2 mb-3" @click="changeType('snack')">Snacks</button>
        <button :class="{'active': type === 'dessert'}" class="rounded-full bg-gray px-4 py-1 mx-2 mb-3" @click="changeType('dessert')">Beverage & Dessert</button>
      </section>

      <section class="mb-12">
        <!-- <div role="status" v-if="loading">
          <svg aria-hidden="true" class="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
              <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
          </svg>
          <span class="sr-only">Loading...</span>
        </div> -->
        <vue-masonry-wall :key="type" class="mx-10" :items="filteredItems" :options="{ padding: 12 }">
          <template v-slot:default="{item}">
            <div>
              <img :src="item.image" alt="">
            </div>
          </template>
        </vue-masonry-wall>
      </section>
    </div>
  </div>
  
</template>

<script>
  import VueMasonryWall from "vue-masonry-wall";

  import pic1 from "../assets/images/Pic1.webp";
  import pic2 from "../assets/images/Pic2.webp";
  import pic3 from "../assets/images/Pic3.webp";
  import pic4 from "../assets/images/Pic4.webp";
  import pic5 from "../assets/images/Pic5.webp";
  import pic6 from "../assets/images/Pic6.webp";
  import pic7 from "../assets/images/Pic7.webp";
  import pic8 from "../assets/images/Pic8.webp";
  import pic9 from "../assets/images/Pic9.webp";
  import pic10 from "../assets/images/Pic10.webp";
  import pic11 from "../assets/images/Pic11.webp";
  import pic12 from "../assets/images/Pic12.webp";
  import pic13 from "../assets/images/Pic13.webp";
  import pic14 from "../assets/images/Pic14.webp";

  import sdFood from "../assets/images/foods/signatureDish/signature.webp";
  import sdFood2 from "../assets/images/foods/signatureDish/signature2.webp";
  import sdFood3 from "../assets/images/foods/signatureDish/signature3.webp";
  import sdFood4 from "../assets/images/foods/signatureDish/signature4.webp";
  import seaFood from "../assets/images/foods/seafood/seafood.webp";
  import seaFood2 from "../assets/images/foods/seafood/seafood2.webp";
  import seaFood3 from "../assets/images/foods/seafood/seafood3.webp";
  import seaFood4 from "../assets/images/foods/seafood/seafood4.webp";
  import seaFood5 from "../assets/images/foods/seafood/seafood5.webp";
  import seaFood6 from "../assets/images/foods/seafood/seafood6.webp";
  import seaFood7 from "../assets/images/foods/seafood/seafood7.webp";
  import seaFood8 from "../assets/images/foods/seafood/seafood8.webp";
  import seaFood9 from "../assets/images/foods/seafood/seafood9.webp";
  import chicken from "../assets/images/foods/chicken/chicken.webp";
  import chicken2 from "../assets/images/foods/chicken/chicken2.webp";
  import chicken3 from "../assets/images/foods/chicken/chicken3.webp";
  import chicken4 from "../assets/images/foods/chicken/chicken4.webp";
  import mookata from "../assets/images/foods/mookata/mookata.webp";
  import mookata2 from "../assets/images/foods/mookata/mookata2.webp";
  import mookata3 from "../assets/images/foods/mookata/mookata3.webp";
  import mookata4 from "../assets/images/foods/mookata/mookata4.webp";
  import thainoodle from "../assets/images/foods/thaiNoodles/ThaiNoodle (1).webp";
  import thainoodle2 from "../assets/images/foods/thaiNoodles/ThaiNoodle (2).webp";
  import thainoodle3 from "../assets/images/foods/thaiNoodles/ThaiNoodle (3).webp";
  import thainoodle4 from "../assets/images/foods/thaiNoodles/ThaiNoodle (4).webp";
  import rice from "../assets/images/foods/rices/rice.webp";
  import rice2 from "../assets/images/foods/rices/rice2.webp";
  import salad from "../assets/images/foods/salads/salad.webp";
  import salad2 from "../assets/images/foods/salads/salad2.webp";
  import salad3 from "../assets/images/foods/salads/salad3.webp";
  import salad4 from "../assets/images/foods/salads/salad4.webp";
  import salad5 from "../assets/images/foods/salads/salad5.webp";
  import salad6 from "../assets/images/foods/salads/salad6.webp";
  import snack from "../assets/images/foods/snacks/snack (1).webp";
  import snack2 from "../assets/images/foods/snacks/snack (2).webp";
  import dessert from "../assets/images/foods/desserts/dessert (1).webp";
  import dessert2 from "../assets/images/foods/desserts/dessert (2).webp";
  import dessert3 from "../assets/images/foods/desserts/dessert (3).webp";

  export default {
    name: 'app',
    components: {VueMasonryWall},
    data() {
      return {
        items: [
          {image: pic1, type: 'bs'},
          {image: pic2, type: 'bs'},
          {image: pic3, type: 'bs'},
          {image: pic4, type: 'bs'},
          {image: pic6, type: 'bs'},
          {image: pic5, type: 'bs'},
          {image: pic8, type: 'bs'},
          {image: pic7, type: 'bs'},
          {image: pic9, type: 'bs'},
          {image: pic10, type: 'bs'},
          {image: pic11, type: 'bs'},
          {image: pic12, type: 'bs'},
          {image: pic13, type: 'bs'},
          {image: pic14, type: 'bs'},
          {image: sdFood, type: 'sd'},
          {image: sdFood2, type: 'sd'},
          {image: sdFood3, type: 'sd'},
          {image: sdFood4, type: 'sd'},
          {image: seaFood, type: 'seafood'},
          {image: seaFood2, type: 'seafood'},
          {image: seaFood3, type: 'seafood'},
          {image: seaFood4, type: 'seafood'},
          {image: seaFood5, type: 'seafood'},
          {image: seaFood6, type: 'seafood'},
          {image: seaFood7, type: 'seafood'},
          {image: seaFood8, type: 'seafood'},
          {image: seaFood9, type: 'seafood'},
          {image: chicken, type: 'chicken'},
          {image: chicken2, type: 'chicken'},
          {image: chicken3, type: 'chicken'},
          {image: chicken4, type: 'chicken'},
          {image: mookata, type: 'mookata'},
          {image: mookata2, type: 'mookata'},
          {image: mookata3, type: 'mookata'},
          {image: mookata4, type: 'mookata'},
          {image: thainoodle, type: 'thainoodle'},
          {image: thainoodle2, type: 'thainoodle'},
          {image: thainoodle3, type: 'thainoodle'},
          {image: thainoodle4, type: 'thainoodle'},
          {image: rice, type: 'rice'},
          {image: rice2, type: 'rice'},
          {image: salad, type: 'salad'},
          {image: salad2, type: 'salad'},
          {image: salad3, type: 'salad'},
          {image: salad4, type: 'salad'},
          {image: salad5, type: 'salad'},
          {image: salad6, type: 'salad'},
          {image: snack, type: 'snack'},
          {image: snack2, type: 'snack'},
          {image: dessert, type: 'dessert'},
          {image: dessert2, type: 'dessert'},
          {image: dessert3, type: 'dessert'},
        ],
        type: 'all',
        loading: false,
      }
    },

    computed: {
      filteredItems() {
      // Use a computed property to filter items based on the 'type' property
        if (this.type === 'all') {
          // If 'type' is 'all', return all items
          return this.items;
        } else {
          // Otherwise, filter items by 'type'
          return this.items.filter(item => item.type === this.type);
        }
      },
    },
    
 
    methods: {

      changeType(newType) {
        // this.loading = true;
        this.type = newType;
        // setTimeout(() => {
        //   this.loading = false; // Set loading to false after changing 'type'
        // }, 1000);

      },

    }
  }
</script>