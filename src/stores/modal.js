//Vue
import { ref, computed } from 'vue';
//Pinia
import { defineStore } from 'pinia';
//Stores
import { useFavoritosStore } from './favoritos';
import { useBebidasStore } from './bebidas';

export const useModalStore = defineStore('modal', ()=>{

    const favoritos = useFavoritosStore();
    const bebidas = useBebidasStore();
    const modal = ref(false);

    function handleClickModal(){
        //Hace lo contrario que tenga modal.value
        modal.value = !modal.value;
    }

    const textoBoton = computed(()=>{
        return favoritos.existeFavorito(bebidas.receta.idDrink) ? 'Eliminar de favoritos' : 'Agregar a favoritos'
    });

    return{
        modal,
        textoBoton,
        handleClickModal
    }
});