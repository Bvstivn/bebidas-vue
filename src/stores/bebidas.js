//Vue
import { ref, onMounted, reactive, computed } from "vue";
//Pinia
import { defineStore } from "pinia";
//Servicios
import APIService from "../services/APIService";
//Store
import { useModalStore } from './modal';

export const useBebidasStore = defineStore("bebidas", () => {
  
  const modal = useModalStore();
  
  const categorias = ref([]);
  const busqueda = reactive({
    nombre: "",
    categoria: "",
  });
  const recetas = ref([]);
  const receta = ref({});
  const noRecetas = computed(()=>{
    recetas.value.lenght === 0;
  })

  onMounted(async () => {
    const {
      data: { drinks },
    } = await APIService.obtenerCategorias();
    categorias.value = drinks;
  });

  async function obtenerRecetas() {
    const {
      data: { drinks },
    } = await APIService.buscarRecetas(busqueda);
    recetas.value = drinks;
  }

  async function seleccionarBebida(id){
    const {data: {drinks}} = await APIService.buscarReceta(id);
    console.log(receta.value = drinks[0]);
    modal.handleClickModal();
  }

  return {
    categorias,
    busqueda,
    recetas,
    receta,
    noRecetas,
    obtenerRecetas,
    seleccionarBebida
  };
});
