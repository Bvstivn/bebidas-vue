<template>
  <Header />
  <main class="container mx-auto mt-10">
    <RouterView />
  </main>
</template>

<script setup>
//Router
import { RouterView } from 'vue-router';
//Components
import Header from './components/Header.vue';
</script>

<style scoped>
</style>
