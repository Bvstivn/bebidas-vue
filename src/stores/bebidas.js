//Vue
import { ref, onMounted, reactive } from "vue";
//Pinia
import { defineStore } from "pinia";
//Axios
import axios from 'axios';
//Servicios
import APIService from "../services/APIService";

export const useBebidasStore = defineStore("bebidas", () => {

  const categorias = ref([]);
  const busqueda = reactive({
    nombre:'',
    categoria:''
  });
  const recetas = ref([]);

  onMounted( async ()=>{
    const {data: {drinks}} = await APIService.obtenerCategorias();
    categorias.value = drinks;
  })

   async function obtenerRecetas(){
    const {data: {drinks}} = await APIService.buscarRecetas( busqueda );
    recetas.value = drinks;
  }

  return {
    categorias,
    busqueda,
    recetas,
    obtenerRecetas
  }
});
