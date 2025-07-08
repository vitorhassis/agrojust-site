<template>
  <div class="flex flex-col bg-[#1C1C1C]">
    <div
  class="flex flex-col lg:flex-row text-white justify-center mt-[70px] mb-[70px] w-full px-4 sm:px-6 lg:px-40 gap-y-10 lg:gap-x-16 2xl:gap-x-[200px]"
>
      <!-- Agrojust -->
      <div class="flex flex-col justify-center text-left lg:text-center">
        <div class="flex items-start gap-2">
          <img
            src="/src/assets/iconFolha.png"
            alt="icone-agrojust"
            class="w-[50px] h-[50px]"
          />
          <h1 class="text-3xl font-normal mt-[5px]">Agrojust</h1>
        </div>
        <div>
          <p
            class="text-neutral-300 mb-10 max-w-md font-normal leading-relaxed text-lg mt-[30px] text-left"
          >
            Unindo tradição no campo e gestão moderna para alimentar o Brasil e
            o mundo. Sustentabilidade, produtividade e compromisso com o
            agronegócio.
          </p>
        </div>
        <button
          class="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-500 hover:to-amber-700 text-neutral-900 font-light w-[300px] h-[40px] rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 duration-300"
        >
          Fale com nossa equipe →
        </button>
      </div>

      <!-- Contato -->
      <div class="flex flex-col lg:flex-col gap-4">
        <div>
          <h1 class="text-3xl font-normal mb-8 text-white">Contato</h1>
          <div class="mt-[30px] flex items-start gap-4">
            <img
              src="/src/assets/iconLoc.png"
              class="w-[50px] h-[50px] transform hover:scale-125 duration-300"
              alt="icone-localizacao"
            />
            <p class="text-neutral-300 font-normal mt-3 text-lg">Maringá-PR</p>
          </div>
          <div class="mt-[15px] flex items-start gap-4">
            <img
              src="/src/assets/iconTel.png"
              alt="icone-telefone"
              class="w-[50px] h-[50px] transform hover:scale-125 duration-300"
            />
            <p class="text-neutral-300 font-normal mt-3 text-lg">
              (44) 9999-9999
            </p>
          </div>
          <div class="mt-[15px] flex items-start gap-4">
            <img
              src="/src/assets/iconEmail.png"
              alt="icone-email"
              class="w-[50px] h-[50px] transform hover:scale-125 duration-300"
            />
            <p class="text-neutral-300 font-normal mt-3 text-lg">
              contato@agrojust.com.br
            </p>
          </div>
        </div>
      </div>

      <!-- Redes sociais -->
      <div>
        <h1 class="text-3xl font-normal text-white">Redes Sociais</h1>
        <div class="flex mt-[30px] gap-4">
          <a href="https://www.instagram.com/agro_just/" target="_blank">
            <img
              src="/src/assets/iconInstagram.png"
              class="w-[50px] h-[50px] transform hover:scale-125 duration-300"
              alt="icone-instagram"
            />
          </a>

          <a
            href="https://www.linkedin.com/in/vitor-hugo-assis"
            target="_blank"
          >
            <img
              src="/src/assets/iconLinkedin.png"
              class="w-[50px] h-[50px] transform hover:scale-125 duration-300"
              alt="icone-linkedin"
            />
          </a>
        </div>
      </div>
    </div>

    <!-- Linha -->
    <div class="flex justify-center items-center">
      <div class="border-t border-neutral-700 w-[1500px] h-[1px]"></div>
    </div>

    <!-- Rodapé -->
    <div
      class="flex flex-col items-center justify-center text-center mt-[30px] mb-[25px]"
    >
      <p class="text-neutral-300 font-light leading-relaxed text-lg">
        © 2025
        <span class="hover:text-emerald-600 transition-colors duration-300">
          Agrojust.
        </span>
        Todos os direitos reservados. Desenvolvido por
        <span class="hover:text-amber-500 transition-colors duration-300">
          <a
            href="https://www.linkedin.com/in/vitor-hugo-assis"
            target="_blank"
          >
            Vitor Assis.
          </a>
        </span>
      </p>
    </div>
  </div>
</template>
