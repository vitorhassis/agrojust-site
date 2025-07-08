<template>
  <div class="flex flex-col items-center justify-center bg-[#d9eac540] pt-20" id="sobre">
    <span
      class="border-emerald-200 rounded-full px-3 py-1.5 bg-emerald-600 text-white mb-4 font-medium shadow-lg"
      data-aos="fade-up"
      data-aos-duration="1000"
      >Sobre a Agrojust</span
    >

    <div
      class="text-center px-4 sm:px-6 lg:px-20"
      data-aos="fade-up"
      data-aos-duration="3000"
    >
      <h1 class="text-4xl md:text-7xl font-light px-4 sm:px-6 lg:px-20">
        Tradição e <br />
        <span class="text-green-800">Inovação</span>
      </h1>
      <p
        class="text-xl text-center text-neutral-600 leading-relaxed max-w-4xl mx-auto mt-7 mb-32"
      >
        Localizada em Maringá - PR, a Agrojust é referência em agropecuária
        sustentável, combinando tradição familiar com inovação tecnológica para
        entregar produtos de excelência.
      </p>
    </div>

    <div class="flex flex-col bg-[#f3f7eec3] p-8 gap-16 lg:flex-row">
      <!---div da imagem-->
      <div>
        <img
          src="/src/assets/ex1.jpeg"
          alt=""
          class="w-[700px] h-[400px] object-cover rounded-2xl shadow-2xl"
          data-aos="fade-right"
          data-aos-duration="2000"
        />
      </div>

      <!---div dos icons + textos-->
      <div class="flex flex-col" data-aos="fade-left" data-aos-duration="2000">
        <!---bloco 1-->
        <div class="flex items-start gap-4">
          <img src="/src/assets/icon-medal.png" alt="icone-medalha" />
          <div class="mb-12">
            <h1 class="text-2xl mb-3 font-medium">Alta produtividade</h1>
            <p class="text-lg text-neutral-600 leading-relaxed max-w-2xl">
              Utilizamos técnicas avançadas de manejo e tecnologia de precisão
              para maximizar a produtividade de nossas culturas de soja e milho.
            </p>
          </div>
        </div>

        <!---bloco 2-->
        <div class="flex items-start gap-4">
          <img src="/src/assets/recorte_icone_heart.png" alt="icone-coracao" />
          <div class="mb-12">
            <h1 class="text-2xl mb-3 font-medium">Bem-estar Animal</h1>
            <p class="text-lg text-neutral-600 leading-relaxed max-w-2xl">
              Nossa pecuária prioriza o bem-estar animal com pastagens de
              qualidade, manejo ético e cuidados veterinários especializados.
            </p>
          </div>
        </div>

        <!---bloco 3-->
        <div class="flex items-start gap-4">
          <img src="/src/assets/icone-globo.png" alt="icone-globo" />
          <div class="mb-12">
            <h1 class="text-2xl mb-3 font-medium">Mercado Internacional</h1>
            <p class="text-lg text-neutral-600 leading-relaxed max-w-2xl">
              Nossos produtos atendem aos mais rigorosos padrões de qualidade,
              sendo exportados para diversos países com certificações
              internacionais.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
