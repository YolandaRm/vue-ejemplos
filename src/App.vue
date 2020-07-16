<template>
  <div>
    <h1>hola</h1>
    <Template />
    <Binding />
    <Conditional />
    <List />
    <Props  :hello= "'bonjour'" />
    <Events @my-event="onMyEvent"/>
    <!-- <Ejercicio01 /> -->
  </div> 
</template>

<script>
//lo primero importar el componente
import Template from './ejemplos/Template.vue'; 
import Binding from './ejemplos/Binding.vue';
import Conditional from './ejemplos/Conditional.vue';
import List from './ejemplos/List.vue';
import Props from './ejemplos/Props.vue';
import Events from './ejemplos/Events.vue';
/* import Ejercicio01 from './ejercicios/Ejercicio01.vue'; */

export default {
  //nombre del componente
  name: 'App',
  //componentes que utiliza éste
  components: {
    Template,
    Binding,
    Conditional,
    List,
    Props,
    Events
   /*  Ejercicio01*/
  },
  methods: {
    onMyEvent(a, b){
      console.log(a,b)
    }
  }
};
</script>

<style>
h1 {
  color:blue;
}
.saludo {
  color:rgb(235, 50, 204);
}
</style>