export const isEmail= (value) => {
    const isValidEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; /* (mirar enlace para los códigos) */
    return isValidEmail.test(value) ? '': 'email no válido';
} 

