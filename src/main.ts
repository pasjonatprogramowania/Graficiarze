import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import routes from './routers';

const router = createRouter({
    history: createWebHistory(),
    routes,
});

import 'gitart-vue-dialog/dist/style.css';
import { GDialog } from 'gitart-vue-dialog';

createApp(App).use(router).component('GDialog', GDialog).mount('#app');
