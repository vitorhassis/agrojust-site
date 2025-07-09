<template>
  <section class="relative z-0 md:h-[900px] h-[805px]" id="heroSection">
    <video
      class="absolute inset-0 w-full h-full object-cover hidden md:block"
      playsinline
      muted
      autoplay
      loop
      src="/src/assets/videoHeroSection.mp4"
      type="video/mp4"
    ></video>

    <div class="w-full h-[805px] relative md:hidden bg-black">
      <div class="w-full h-full relative">
        <img
          v-for="(img, index) in imagens"
          :key="index"
          :src="img"
          class="absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000"
          :class="{
            'opacity-100': currentIndex === index,
            'opacity-0': currentIndex !== index,
          }"
        />
      </div>
    </div>

    <div class="absolute inset-0 bg-black/30 z-10"></div>

    <div
      class="absolute inset-0 flex flex-col items-center justify-start pt-[190px] md:pt-[240px] xl:pt-[240px] z-20"
      data-aos="fade-zoom-in"
      data-aos-easing="ease-in-back"
      data-aos-delay="300"
      data-aos-offset="0"
    >
      <div
        class="mb-10 border border-white rounded-full px-4 py-1.5 bg-white/10 backdrop-blur-sm hover:bg-white/25 transform duration-200"
      >
        <span class="text-xs text-white font-medium flex items-center">
          Agronegócio sustentável desde 2008
        </span>
      </div>

      <div>
        <h1 class="text-4xl md:text-6xl text-white font-light text-center">
          Unindo tradição no campo <br />
          <span class="text-yellow-600 font-normal">e gestão moderna</span>
        </h1>
        <p class="text-sm mt-5 text-center text-white md:text-lg">
          Para alimentar o Brasil e o mundo com Sustentabilidade e excelência
        </p>
      </div>

      <div class="mt-6 md:mt-14 flex flex-col gap-3 sm:flex-col">
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

<script setup>
import { ref, onMounted } from "vue";

import campo from "@/assets/campo.png"
import bois1 from "@/assets/bois1.png"
import bois2 from "@/assets/bois2.png"
import grama from "@/assets/grama.png"

const imagens = [campo, bois1, bois2, grama]

const currentIndex = ref(0)

onMounted(() => {
  imagens.forEach((src) => {
    const img = new Image()
    img.src = src
  })

  setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % imagens.length
  }, 4000)
})
</script>


<style scoped>
video::-webkit-media-controls-start-playback-button {
  display: none !important;
  -webkit-appearance: none;
}
</style>
