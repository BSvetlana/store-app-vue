import Vue from 'vue'
import App from './App.vue'

import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import VueRouter from 'vue-router'

import AppCustomers from './pages/AppCustomers.vue'
import AppProducts from './pages/AppProducts.vue'
import AppLatestPurchases from './pages/AppLatestPurchases.vue'

Vue.use(BootstrapVue);
Vue.use(VueRouter);

Vue.config.productionTip = false

const routes = [
  {path: '/', redirect: 'customers​'},
  {path: "/customers​", component: AppCustomers },
  {path: "/products", component: AppProducts },
  {path: "/customers/:id", component: AppLatestPurchases}
]

const router = new VueRouter({
  routes
});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
