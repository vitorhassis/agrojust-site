<template>
  <header
    class="relative z-50 bg-white shadow"
    data-aos="fade-down"
    data-aos-duration="1000"
  >
    <nav
      class="max-w-7xl mx-auto flex justify-between items-center px-4 md:px-10 py-4 md:py-10 overflow-x-hidden"
    >
      <!-- Logo -->
      <div>
        <img
          src="/src/assets/imgJustLogo.png"
          class="w-[100px] h-[20px] md:w-[100px] md:h-[20px]"
          alt="imagem logo just"
        />
      </div>

      <!-- Menu (só aparece a partir de md) -->
      <ul class="hidden md:flex md:gap-6">
        <li>
          <a
            @click="$scrollTo('#sobre', 800)"
            class="transition hover:text-green-700 hover:scale-105 text-neutral-600 cursor-pointer"
            >Sobre</a
          >
        </li>
        <li>
          <a
            @click="$scrollTo('#atuacao', 800)"
            class="transition hover:text-green-700 hover:scale-105 text-neutral-600 cursor-pointer"
            >Atuação</a
          >
        </li>
        <li>
          <a
            @click="$scrollTo('#sustentabilidade', 800)"
            class="transition hover:text-green-700 hover:scale-105 text-neutral-600 cursor-pointer"
            >Sustentabilidade</a
          >
        </li>
        <li>
          <a
            @click="$scrollTo('#contato', 800)"
            class="transition hover:text-green-700 hover:scale-105 text-neutral-600 cursor-pointer"
            >Contato</a
          >
        </li>
      </ul>

      <button
        class="py-2 text-sm md:text-base bg-emerald-600 rounded-full px-4 md:px-5 md:py-1 text-white hover:bg-green-900 transition duration-300 ease-in-out"
      >
        <a @click="$scrollTo('#contato', 800)">Fale Conosco</a>
      </button>
    </nav>
  </header>
</template>
