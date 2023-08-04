//Vue
import { ref, watch, watchEffect } from 'vue'
//Pinia
import { defineStore } from 'pinia';

export const useNotificacionStore = defineStore('notificacion',() => {
    
    const text = ref('');
    const error = ref(false);
    const mostrar = ref(false);

    watchEffect(() => {
        if (mostrar.value) {
            setTimeout(() => {
                text.value = ''
                error.value = false
                mostrar.value = false
            }, 3000)
        }
    });
    
    return{
        text,
        error,
        mostrar,
    }
});