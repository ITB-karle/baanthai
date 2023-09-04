<template>
   <div id='mulah-app' class="min-w-[300px] md:min-w-[400px] lg:min-w-[480px] m-auto"></div>
</template>


<script>
  export default {
    created() {
    this.initializeMulah();
    this.loadExternalStylesheet('https://mulahtechnologies.github.io/website_integration/style.css');
    },
    methods: {
      initializeMulah() {
        // Import the 'start' function from the external module
        import('https://mulahtechnologies.github.io/website_integration/mulah_embedded.es.js')
          .then(({ start }) => {
            // Call the 'start' function with your token
            start('eyJhbGciOiJIUzI1NiJ9.eyJicmFuZF9pZCI6IjYzNGFhOGJkLTQzYmUtNGJhMC04MzQ0LWI1NmE4NWEwNjBhYiJ9.xDj8W6XB6jhMLVOyzrv5mbLMoFN2SZftKpbQCgZeDYA');
          })
          .catch(error => {
            console.error('Error loading Mulah:', error);
          });
      },

      loadExternalStylesheet(url) {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = url;
        document.head.appendChild(link);
      }
    }
  }
</script>

