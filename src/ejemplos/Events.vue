<template>
    <div>
        <h2>Events</h2>
        <button @click= "onClick">Click</button>
    </div>
</template>

<script>
export default {
    name: "Events",
    methods:{
        onClick(){
            this.$emit('my-event', 123, 456);
        }
    }
}
</script>

/* este componente cuando se pincha en el botón va a emitir un evento de tipo event
con los datos 123
y en la App para escuchar ese evento @ va a invocar al método y va a pintar esos datos
para que le llegen
 */