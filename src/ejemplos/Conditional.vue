<template>
    <div>
        <h2>Conditional</h2>
        <!-- Con la directiva v-if decimos si debe pintarse o no -->
        <h3 v-if="show">Muestra</h3>
        <h3 v-if="!show">No Muestra</h3>
    </div>
</template>

<script>
export default {
    name:"Conditional",  
    data() {
        return {
            show: true
        };
    }
};
</script>