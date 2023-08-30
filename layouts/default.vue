<template>
  <Head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- flowbite -->

    <Title>Baan Thai</Title>
    <Link rel="icon" type="image/ico" href="/favicon.ico"/>
  </Head>
  <div class="flex flex-col min-h-full">
    <Header />
    <slot />
    <Footer />
  </div>

</template>