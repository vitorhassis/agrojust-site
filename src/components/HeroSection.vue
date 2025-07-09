<template>
  <section class="relative z-0 h-[805px]" id="heroSection">
    <video
      class="w-full h-[740px] md:h-[680px] xl:h-[805px] object-cover"
      muted
      loop
      playsinline
      autoplay
      src="/src/assets/videoHeroSection.mp4"
      type="video/mp4"
    ></video>

    <div
      class="absolute inset-0 flex flex-col items-center justify-center md:justify-start md:pt-44 xl:pt-[165px]"
      data-aos="fade-zoom-in"
      data-aos-easing="ease-in-back"
      data-aos-delay="300"
      data-aos-offset="0"
    >
      <div
        class="mb-10 border border-white rounded-full px-4 py-1.5 bg-white/10 backdrop-blur-sm hover:bg-white/25 transform duration-200"
      >
        <span class="text-xs text-white font-medium flex items-center"
          >Agronegócio sustentável desde 2008</span
        >
      </div>

      <div>
        <h1 class="text-4xl md:text-8xl text-white font-light text-center">
          Unindo tradição no campo <br />
          <span class="text-yellow-600 font-normal">e gestão moderna</span>
        </h1>
        <p class="text-sm mt-5 text-center text-white md:text-lg">
          Para alimentar o Brasil e o mundo com Sustentabilidade e excelência
        </p>
      </div>

      <div class="mt-14 flex flex-col gap-3 sm:flex-col">
        <button
          @click="$scrollTo('#sobre', 800)"
          class="rounded-full px-10 py-2 text-white bg-emerald-600 transform duration-200 hover:bg-green-900 hover:scale-105"
        >
          Conheça Nossa História
        </button>
        <button
          @click="$scrollTo('#atuacao', 800)"
          class="border border-white rounded-full px-10 py-2 bg-white/10 backdrop-blur-sm text-white transform duration-200 hover:bg-white hover:scale-105 hover:text-green-900"
        >
          ▷ Nossa Atuação
        </button>
      </div>
    </div>
  </section>
</template>
