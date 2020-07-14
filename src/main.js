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

new Vue({
  render: h => h(App),
}).$mount('#app')
 