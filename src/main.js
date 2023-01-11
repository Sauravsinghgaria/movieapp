import Vue from 'vue'
import App from './App.vue'
import MovieDesc from './pages/MovieDesc.vue'
import index from './pages/index.vue'
import VueRouter from 'vue-router'

Vue.config.productionTip = false
Vue.use(VueRouter)

const routes = [
  { path: '/', component: index},
  { path: '/:id', component: MovieDesc },
]
const router = new VueRouter({
  routes
})

new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app')
