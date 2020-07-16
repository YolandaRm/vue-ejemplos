import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

/* 
  para iniciar una aplicación en Vue, 
  creamos una nueva instancia
  y el método render especficamos que componente pintar
  esa instancia la pintamos en un elemento del DOM con el método $mount
  que recibe un selector css para referenciar ese elemento 
*/
 /*
new Vue({
  render: h => h(App),
}).$mount('#app')
 La aplicación al instanciarse  utilizando o creando una nueva instancia de vue
 vamos a cambiarlo,  vm (virtual machine)
   */

const vm = new Vue({
  render: h => h(App),
})
vm.$mount('#app');