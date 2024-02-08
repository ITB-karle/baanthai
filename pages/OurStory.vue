<template>
  <img src="../assets/images/vip_banner_2.webp" alt="" class="min-h-[150px] md:min-h-[250px] object-cover">
  <section class="bg-marblr py-14 lg:flex lg:items-center">
    <div class="container mx-auto">
    <div class="container mx-auto lg:grid lg:grid-cols-2 lg:justify-center lg:items-center lg:px-12 xl:px-0">
      <img src="../assets/images/os-baanthai.webp" alt="" class="px-5 md:px-16 lg:px-0 mb-7 lg:mb-0">
      <div class="px-12 text-justify">
        <h1 class="text-2xl lg:text-5xl text-brown font-bold mb-3 lg:mb-7 text-center">{{ $t('os') }}</h1>
        <p class="text-sm md:text-base font-medium mb-4">
          {{ $t('os_content') }} 
        </p>
        <p class="text-sm md:text-base font-medium">
          {{ $t('os_content2') }} 
        </p>
      </div>
      </div>
    </div>
  </section>

  <iframe 
    width="100%" 
    height="200"
    class="md:h-[350px] lg:h-[500px]"
    src="https://www.youtube.com/embed/TuIS4EgOmPc?si=1rBKw7JROsTjkEfk" 
    title="YouTube video player" 
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen
  ></iframe>

  <section class="bg-marblr bg-center py-14 lg:flex lg:items-center">
    <div class="container mx-auto lg:grid lg:grid-cols-2 flex-col-reverse lg:flex-row lg:justify-center lg:items-center lg:px-12 xl:px-0">
      <div class="mx-10 md:px-16 lg:px-0">
        <h1 class="text-xl lg:text-5xl text-brown font-bold mb-3 lg:mb-12 px-5 lg:px-8 py-2 lg:py-4 border-l-8 lg:border-l-10 border-lightgold uppercase">
          {{ $t('os_om') }}<br class="hidden lg:block"> {{ $t('os_om2') }}
        </h1>
        <p class="text-sm md:text-base lg:text-xl font-medium">
          <!-- Baan Thai means Thai home or Thai house in English. It symbolizes the
          unique and balanced way-of-being that Thai culture embodies, and with
          food being its central ingredient. As currently Malaysia largest indoor
          Thai cuisine, Baan Thai opened its doors in 2016 and has been serving
          up an exotic choice of real Thai cookery ever since. -->
          {{ $t('os_om_content') }}  
        </p>
      </div>
      <img src="../assets/images/Ourstory.webp" alt="" class="px-5 md:px-16 lg:px-0 mt-7 lg:mt-0 mb-5 lg:mb-0">
    </div>
  </section>

  <section class="bg-gray bg-center py-14 lg:flex lg:items-center">
    <div class="container mx-auto lg:grid lg:grid-cols-2 lg:flex lg:justify-center lg:items-center lg:px-12 xl:px-0">
      <img src="../assets/images/os-vision.webp" alt="" class="px-5 md:px-16 lg:px-0 mb-7 lg:mb-0">
      <div class="mx-10 md:px-16 lg:px-0">
        <h1 class="text-xl lg:text-5xl text-brown text-right font-bold mb-3 lg:mb-12 px-5 lg:px-8 py-2 lg:py-4 border-r-8 lg:border-r-10 border-lightgold uppercase">
          {{ $t('os_ov') }}<br class="hidden lg:block"> {{ $t('os_ov2') }}
        </h1>
        <p class="text-sm md:text-base lg:text-xl font-medium text-right">
          <!-- Baan Thai means Thai home or Thai house in English. It symbolizes the
          unique and balanced way-of-being that Thai culture embodies, and with
          food being its central ingredient. As currently Malaysia largest indoor
          Thai cuisine, Baan Thai opened its doors in 2016 and has been serving
          up an exotic choice of real Thai cookery ever since. -->
          {{ $t('os_ov_content') }}  
        </p>
      </div>
    </div>
  </section>

  <section class="bg-marblr py-14">
    <div class="container mx-auto lg:px-12">
      <div class="pb-5" style="overflow-x: scroll;">
        <div class="flex flex-nowrap overflow-content">
          <section class="w-full md:w-1/2 lg:w-2/5 xl:w-1/4 flex-none">
            <img src="../assets/images/bt-story.webp" alt="" class="h-[220px]">
            <div class="circle-container">
              <div class="circle"></div>
              <hr class="line my-10">
            </div>
            <div class="h-[220px] mr-10">
              <p class="text-2xl font-medium">2016</p>
              <p class="text-lightgold font-medium">{{ $t('os_title_2016') }}</p>
              <p class="text-sm">
                {{ $t('os_content_2016') }}
              </p>
            </div>
          </section>

          <section class="w-full md:w-1/2 lg:w-2/5 xl:w-1/4 flex-none">
            <div class="h-[220px] mr-10">
              <p class="text-2xl font-medium">2017 - 2019</p>
              <p class="text-lightgold font-medium">{{ $t('os_title_2017') }}</p>
              <p class="text-sm">
                {{ $t('os_content_2017') }}
              </p>
            </div>
            <div class="circle-container">
              <div class="circle"></div>
              <hr class="line my-10">
            </div>
            <img src="../assets/images/bt-story1.webp" alt="" class="h-[220px]">
          </section>

          <section class="w-full md:w-1/2 lg:w-2/5 xl:w-1/4 flex-none">
            <img src="../assets/images/mco.webp" alt="" class="h-[220px] w-[220px] object-cover">
            <div class="circle-container">
              <div class="circle"></div>
              <hr class="line my-10">
            </div>
            <div class="h-[220px] mr-10">
              <p class="text-2xl font-medium">2019 - 2021</p>
              <p class="text-lightgold font-medium">{{ $t('os_title_2019') }}</p>
              <p class="text-sm">
                {{ $t('os_content_2019') }}
              </p>
            </div>
          </section>

          <!-- <section class="w-full md:w-1/2 lg:w-2/5 xl:w-1/4 flex-none">
            <div class="h-[220px] mr-10">
              <p class="text-2xl font-medium">2021 - 2022</p>
              <p class="text-lightgold font-medium">Expanding Horizons</p>
              <p class="text-sm">
                By 2023, the restaurant had garnered a strong reputation within Thailand
                and beyond. Capitalizing on its success, the founders decided to expand
                their venture, opening branches in other major cities both nationally
                and internationally.
              </p>
            </div>
            <div class="circle-container">
              <div class="circle"></div>
              <hr class="line my-10">
            </div>
            <img src="../assets/images/bt-story3.webp" alt="" class="h-[220px]">
          </section> -->
          <section class="w-full md:w-1/2 lg:w-2/5 xl:w-1/4 flex-none">
            <div class="h-[220px] mr-10">
              <p class="text-2xl font-medium">2022 - 2023</p>
              <p class="text-lightgold font-medium">{{ $t('os_title_2022') }}</p>
              <p class="text-sm">
                {{ $t('os_content_2022') }}
              </p>
            </div>
            <div class="circle-container">
              <div class="circle"></div>
              <hr class="line my-10">
            </div>
            <img src="../assets/images/bt-story4.webp" alt="" class="h-[220px]">
          </section>

          <section class="w-full md:w-1/2 lg:w-2/5 xl:w-1/4 flex-none">
            <img src="../assets/images/combine-image.webp" alt="" class="h-[220px]">
            <div class="circle-container">
              <div class="circle"></div>
              <hr class="line my-10">
            </div>
            <div class="h-[220px] mr-10">
              <p class="text-2xl font-medium">2023{{ $t('os_ongoing_2023') }}</p>
              <p class="text-lightgold font-medium">{{ $t('os_title_2023') }}</p>
              <p class="text-sm">
                {{ $t('os_content_2023') }}
              </p>
            </div>
          </section>                                      
        </div>
      </div>
      
    </div>
  </section>
</template>