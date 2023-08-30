<template>
  <div class="container mx-auto lg:text-center">
    <section class="font-medium mt-20 mb-8 mx-5">
      <button class="rounded-full bg-gray px-4 py-1 mx-2 mb-3">ALL</button>
      <button class="rounded-full bg-gray px-4 py-1 mx-2 mb-3">Best Seller</button>
      <button class="rounded-full bg-gray px-4 py-1 mx-2 mb-3">Fried Rices</button>
      <button class="rounded-full bg-gray px-4 py-1 mx-2 mb-3">Thai Noodles</button>
      <button class="rounded-full bg-gray px-4 py-1 mx-2 mb-3">Seafoods</button>
      <button class="rounded-full bg-gray px-4 py-1 mx-2 mb-3">Salads Series</button>
      <button class="rounded-full bg-gray px-4 py-1 mx-2 mb-3">Snacks</button>
      <button class="rounded-full bg-gray px-4 py-1 mx-2 mb-3">Vegetarian</button>
    </section>

    <section>
      <vue-masonry-wall class="mx-10" :items="items" :options="{ padding: 12}" @append="append">
        <template v-slot:default="{item}">
          <div>
            <!-- <h5>{{item.title}}</h5>
            <p>{{item.content}}</p> -->
            <img :src="item.image" alt="">
          </div>
        </template>
      </vue-masonry-wall>
    </section>
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

  export default {
    name: 'app',
    components: {VueMasonryWall},
    data() {
      return {
        items: [
          // {title: 'Item 0', content: 'Content'},
          // {title: 'Item 1', content: 'Content'},
          {image: pic1},
          {image: pic2},
          {image: pic3},
          {image: pic4},
          {image: pic6},
          {image: pic5},
          {image: pic8},
          {image: pic7},
          {image: pic9},
          {image: pic10},
          {image: pic11},
          {image: pic12},
          {image: pic13},
          {image: pic14},
        ]
      }
    },
    methods: {
      /**
       * I am mocking a API call that load 20 objects at a time.
       */
      append() {
        for (let i = 0; i < 20; i++) {
          this.items.push({title: `Item ${this.items.length}`, content: 'Content'})
        }
      }
    }
  }
</script>