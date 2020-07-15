<template>
    <div>
    <h2>List</h2> 
    <ul>
        <!-- Con la directiva v-for repetimos un elemento htlm tantas veces
        como elementos tenga la lista, -con indice-
         y tiene que tener la propiedad key (unica)-->
        <li v-for="(number,i) in numbers" :key="i"></li>
            {{numbers}} 
    </ul>
    </div>
</template>

<script>
export default {
    name:"List",  

    data() {
        return {
            numbers: [1, 2, 3, 4, 5]
        };
    }
};
</script>