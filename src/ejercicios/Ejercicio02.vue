<!-- primero creamos la plantilla d como va a ser con sus for y type -->
<!-- y tras especificar los campos se incluyen los eventos @ y condicionales -->
<template>
  <form @submit.prevent.stop="onSubmit">
    <div>
      <label for="email">Email:</label>
      <input id="email" name="email" @blur="validateEmail" v-model="email" type="text" />
      <p role="alert" v-if="emailError">{{emailError}}</p>
    </div>
    <button>submit_enviar</button>
  </form>
</template>
 

<script> // se especifican los campos y los métodos y las const cuando vayan surgiendo
import { isEmail } from './isEmail.js';
export default {
    data() {
        return {
            email: '', 
            emailError: ''
        }   
    },
    methods: {
        onSubmit(){
            this.validateForm();
        }, 
        validateForm(){
            this.validateEmail();
        },
        isFormValid() {
            return !this.emailError;
        },
        validateEmail(){
            this.emailError = isEmail(this.email);
        }   
    },         
}
</script>
