<!-- primero creamos la plantilla d como va a ser con sus for y type -->
<!-- y tras especificar los campos se incluyen los eventos @ y condicionales -->
<template> 
    <form @submit.prevent.stop="onSubmit"> 
        <div>
            <label for="email">Email:</label>
            <input id="email" name="email" @blur="validateEmail" v-model="email" type="text"/>
            <p role="alert" v-if="emailError">{{emailErrror}}</p>
        </div>
        <div>
            <label for="password">Password:</label>
            <input id="password" type="text" validators=”emailValidators” ref=”password”>
            <p v-else></p>
        </div>
        <button @submit="onSubmit">submit_enviar</button>
    </form>
    
</template>
 

<script> // se especifican los campos y los métodos y las const cuando vayan surgiendo
const isEmail= (value) => {
    const isValidEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; /* (mirar enlace para los códigos) */
    return isValidEmail ? '': 'email no válido'
} 
export default {
    data() {
        return {
            email: '', 
            password: '',
            emailError: '',
            passwordError: ''
        }   
    },
    methods: {
        onSubmit(){
            this.validateForm(){
                if(this.isFormValid()){
                    console.log ({email:this.email, password:this.password})
                }
            }
        }, 
        validateForm(){
            this.validateEmail();
        },
        isFormValid() {
            return !this.emailError && !this.passwordError
        },
        validateEmail(){
            this.emailError = isEmail(this.email);
            }
        },
        validatePassword(){},
          
}
</script>
