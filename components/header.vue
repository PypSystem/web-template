<script setup lang="ts">
const menuItems = [
  { text: 'Início', link: '/' },
  { text: 'Sobre', link: '/about' },
];
</script>

<template>
  <header
    class="md:px-96 px-8 py-6 flex items-center justify-between border-b-2 border-zinc-600"
  >
    <section class="flex">
      <img
        src="/icons/logo-pyp-system-white.svg"
        alt="Pyp System"
        class="h-14 w-14"
      />
    </section>
    <section class="flex items-center space-x-4">
      <a
        v-for="item in menuItems"
        :href="item.link"
        class="text-lg cursor-pointer hover:text-zinc-400 transition-transform transform hover:scale-105"
      >
        {{ item.text }}
      </a>
    </section>
  </header>
</template>
