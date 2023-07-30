//Vue
import { ref } from 'vue';
//Pinia
import { defineStore } from 'pinia';

export const useModalStore = defineStore('modal', ()=>{

    const modal = ref(false);

    function handleClickModal(){
        //Hace lo contrario que tenga modal.value
        modal.value = !modal.value;
    }

    return{
        modal,
        handleClickModal
    }
});