<template>
  <header class="bg-slate-800" :class = "{ header: paginaInicio}">
    <div class="mx-auto container px-5 py-16">
      <div class="flex justify-between items-center">
        <div>
          <RouterLink :to="{ name: 'inicio' }">
            <img class="w-32" src="/public/logo.svg" alt="LOGO" />
          </RouterLink>
        </div>
        <nav class="flex gap-4 text-white">
          <RouterLink
            :to="{ name: 'inicio' }"
            class=" uppercase font-bold"
            active-class="text-orange-500"
            >Inicio</RouterLink
          >
          <RouterLink
            :to="{ name: 'favoritos' }"
            class=" uppercase font-bold"
            active-class="text-orange-500"
            >Favoritos</RouterLink
          >
        </nav>
      </div>
      <form
        class="md:w-1/2 2xl:w-1/3 bg-orange-400 my-32 p-10 rounded-lg shadow space-y-6"
        v-if="paginaInicio"
        @submit.prevent="handleSubmit"
      >
        <div class="space-y-4">
          <label
            class="block text-white uppercase font-extrabold text-lg"
            for="ingrediente"
            >Nombre o ingredientes</label
          >
          <input
            id="ingrediente"
            type="text"
            class="p-3 w-full rounded-lg focus:outline-none"
            placeholder="Nombre o ingrediente: ej. Voska, Tequila, etc"
            v-model="bebidasStore.busqueda.nombre"
          />
        </div>

        <div class="space-y-4">
          <label
            class="block text-white uppercase font-extrabold text-lg"
            for="categoria"
            >Categoria</label
          >
          <select
            id="categoria"
            class="p-3 w-full rounded-lg focus:outline-none"
            v-model="bebidasStore.busqueda.categoria"
          >
            <option value="">Seleccione</option>
            <option v-for="categoria in bebidasStore.categorias" :key="categoria.strCategory" :value="categoria.strCategory"> {{ categoria.strCategory }} </option>
          </select>
        </div>

        <input
          type="submit"
          value="Buscar Recetas"
          class="bg-orange-800 hover:bg-orange-900 cursor-pointer text-white font-extrabold w-full p-2 rounded-lg uppercase"
        />
      </form>
    </div>
  </header>
</template>

<script setup>
//Vue
import { computed } from "vue";
//Router
import { RouterLink, useRoute } from "vue-router";
//Stores
import { useBebidasStore } from '../stores/bebidas';
import { useNotificacionStore } from '../stores/notificaciones';

const bebidasStore = useBebidasStore();
const notificaciones = useNotificacionStore();

const route = useRoute();

const paginaInicio = computed(() => route.name === "inicio");

const handleSubmit = () => {
  if (Object.values(bebidasStore.busqueda).includes('')) {
    
    notificaciones.text = 'Todos los campos son obligatorios';
    notificaciones.mostrar = true;
    notificaciones.error = true;

    /*notificaciones.$patch({
      texto: 'Todos los campos son obligatorios',
      mostrar: true,
      error: true
    })*/

    /*notificaciones.$state = {
      texto: 'Todos los campos son obligatorios',
      mostrar: true,
      error: true
    }*/
    return
  }

  bebidasStore.obtenerRecetas();
}
</script>

<style>
.header{
    background-image: url('/public/bg.jpg');
    background-size: cover;
    background-position: center;
}
</style>
