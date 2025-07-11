<template>
  <div
    class="flex flex-col items-center justify-center bg-[#ffffffab] pt-20 px-4 sm:px-6 lg:px-20 pb-[80px]"
    id="localizacao"
  >
    <!-- botão, h1 e p -->
    <div class="flex flex-col items-center justify-center text-center">
      <span
        class="rounded-full px-4 py-2 shadow-lg bg-amber-600 text-white mb-4 font-medium"
        data-aos="fade-up"
        data-aos-duration="1000"
        >Nosso escritório</span
      >
      <div>
        <h1
          class="text-4xl font-light"
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          Venha nos <br />
          <span
            class="text-amber-600"
            data-aos="fade-up"
            data-aos-duration="3000"
            >Conhecer Pessoalmente</span
          >
        </h1>
        <p
          class="text-xl text-center text-neutral-600 leading-relaxed max-w-3xl mx-auto mt-7 mb-32"
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          Nosso escritório em Maringá é mais que um espaço de trabalho — é onde
          cultivamos relacionamentos e compartilhamos nossa paixão pelo
          agronegócio.
        </p>
      </div>
    </div>

    <!-- container imagem + blocos -->
    <div class="flex flex-col xl:flex-row gap-[120px]">
      <!-- imagem -->
      <div class="relative w-full flex justify-center">
        <div
          class="absolute w-[400px] h-full bg-gradient-to-r from-amber-700/70 to-emerald-700/70 rounded-2xl blur-[32px] z-0 top-0"
        ></div>
        <img
          src="/src/assets/escritorio.jpeg"
          class="relative rounded-2xl shadow-2xl w-[400px] h-[585px]"
          alt="imagem-escritorio"
          data-aos="fade-right"
          data-aos-duration="2000"
        />
      </div>

      <!-- blocos de texto -->
      <div
        class="flex flex-col gap-8 w-full"
        data-aos="fade-left"
        data-aos-duration="2000"
      >
        <!-- bloco 1 -->
        <div class="flex items-start gap-4">
          <img
            src="/src/assets/iconAmbiente.png"
            alt=""
            class="w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] transform duration-300 hover:scale-105"
          />
          <div>
            <h1 class="text-2xl mb-3 font-normal">Ambiente Aconchegante</h1>
            <p class="text-lg text-neutral-600 leading-relaxed max-w-[480px]">
              Um espaço pensado para receber nossos parceiros com conforto e
              hospitalidade.
            </p>
          </div>
        </div>

        <!-- bloco 2 -->
        <div class="flex items-start gap-4">
          <img
            src="/src/assets/iconLocal.png"
            alt=""
            class="w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] transform duration-300 hover:scale-105"
          />
          <div>
            <h1 class="text-2xl mb-3 font-normal">Localização Estratégica</h1>
            <p class="text-lg text-neutral-600 leading-relaxed max-w-[480px]">
              Situado no coração do agronegócio paranaense, com fácil acesso à
              região produtiva.
            </p>
          </div>
        </div>

        <!-- bloco 3 -->
        <div class="flex items-start gap-4">
          <img
            src="/src/assets/iconMedalha.png"
            alt=""
            class="w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] transform duration-300 hover:scale-105"
          />
          <div>
            <h1 class="text-2xl mb-3 font-normal">Atendimento Personalizado</h1>
            <p class="text-lg text-neutral-600 leading-relaxed max-w-[480px]">
              Receba um atendimento único com um cafezinho e uma conversa franca
              sobre o futuro.
            </p>
          </div>
        </div>

        <!-- agende sua visita -->
        <div
          class="w-full sm:max-w-full flex flex-col sm:flex-row bg-gradient-to-r from-amber-500 to-amber-600 text-white border-0 shadow-xl p-8 rounded-xl justify-between items-center gap-8"
        >
          <div class="flex flex-col text-center sm:text-left">
            <h1 class="text-2xl font-normal mb-2">Agende sua visita</h1>
            <p class="text-amber-100 font-light text-lg max-w-xs">
              Venha conhecer nossa equipe e descobrir como podemos crescer
              juntos.
            </p>
          </div>
          <button
            class="bg-white text-amber-600 text-lg font-semibold rounded-full shadow hover:shadow-md transition-all duration-300 flex items-center justify-center gap-2 whitespace-nowrap w-[180px] sm:w-[200px] h-[40px] transform hover:scale-105"
          >
            <a
              href="https://wa.me/554491804673?text=Olá%2C%20gostaria%20de%20saber%20mais%20sobre%20os%20serviços"
            >
              Agendar Visita<span class="ml-2 text-xl leading-none">→</span></a
            >
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
