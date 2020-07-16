<template>
    <div>
        <h2>Binding_union</h2>
        <!-- atributo binding (v-bind === :) en Ag [] -->
        <button :disabled="true">Disabled</button>
        <!-- event binding (v-on === @) en Ag ()-->
         <button @click="onClick">Click</button>
    </div>
</template>

<script>
export default {
    name:'Binding', 
    //para definir los métodos del componente
    methods: {
        onClick(ev){
            console.log(ev);
        }
    }
};
</script>