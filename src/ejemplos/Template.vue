<template>
    <div>
        <h3>Template_modelo</h3>
        <!-- con bigotes podemos intercalar variables -->
        <h3>{{foo}}</h3>
    </div>
</template>

<script>
export default {
    name:'Template',  
    // definir un método o función data() que devuelva los datos internos del componente
    // para cada propiedad definida en el objeto, vue va a crear setters y getters en el componetne
    //de modo que actualice la plantilla cada vez que cambie
    data() {
        return {
            foo: 1
        };
    }
};
</script>