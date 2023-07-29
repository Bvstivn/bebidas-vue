//Vue
import { ref, onMounted, reactive } from "vue";
//Pinia
import { defineStore } from "pinia";
//Axios
import axios from 'axios';

export const useBebidasStore = defineStore("bebidas", () => {

  const categorias = ref([]);
  const busqueda = reactive({
    nombre:'',
    categoria:''
  })

  onMounted( async ()=>{
    const {data: {drinks}} = await axios('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list')
    
    categorias.value = drinks;
  })

  function obtenerRecetas(){
    console.log('Consultando Api...');
  }

  return {
    categorias,
    busqueda,
    obtenerRecetas
  }
});