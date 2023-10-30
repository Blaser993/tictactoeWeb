import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import Players from './components/Players.vue';
import History from './components/History.vue';
import Tris from './components/Tris.vue';

//importo los tore per far comunicare i componenti fratelli
import store from './store';

//vue router
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Tris },
    { path: '/players', component: Players },
    { path: '/history', component: History },
  ],
})

createApp(App).use(store).use(router).mount('#app')

