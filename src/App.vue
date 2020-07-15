<template>
  <div>
    <h1>hola</h1>
    <Template />
    <Binding />
    <Conditional />
    <List />
  </div> 
</template>

<script>
//lo primero importar el componente
import Template from './ejemplos/Template.vue'; 
import Binding from './ejemplos/Binding.vue';
import Conditional from './ejemplos/Conditional.vue';
import List from './ejemplos/List.vue';

export default {
  //nombre del componente
  name: 'App',
  //componentes que utiliza éste
  components: {
    Template,
    Binding,
    Conditional,
    List
  }
}
</script>

<style>
h1 {
  color:blue;
}
</style>