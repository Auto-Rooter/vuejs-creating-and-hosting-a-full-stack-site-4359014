import { createApp } from 'vue';
import App from './App.vue';
import ShoppingCartPage from './pages/ShoppingCartPage.vue';
import ProductsPage from './pages/ProductsPage.vue';
import ProductsDetailsPage from './pages/ProdctDetailsPage.vue';
import * as VueRouter from 'vue-router';

createApp(App).use(VueRouter.createRouter({
  history:  VueRouter.createWebHistory(process.env.BASE_URL),
  routes: [{
    path: '/cart',
    component: ShoppingCartPage
  },
{
  path: '/products',
  component: ProductsPage
},
{
  path: '/products/:productId',
  component: ProductsDetailsPage
}]
})).mount('#app');
