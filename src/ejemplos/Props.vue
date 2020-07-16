<template>
    <div>
        <h2>Props</h2>
        <h3>{{hello}}  {{foo}}</h3>
        
    </div>
</template>

<script>
export default {
    name:'Props',
    // array con el nombre de las propiedades que acepta este componente
    //props: ['hello'] 
    //2ª opción,  así puedo validad propiedades del componente con el objeto (hello, foo)
    //en definitiva aquí puedo definir que propiedades desea recibir un componente y 
    //validar estén o no  (true false)
    //para cada propiedad se puede especifiar type, validatos, y required o default
    props: {
        hello: {
            type: String,
            required: true 
        },
        foo: {
            type: Number,
            default: 12
        }
  }
};
</script>