import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import routes from './routers';

import { MotionPlugin } from '@vueuse/motion';

const router = createRouter({
    history: createWebHistory(),
    routes,
});

import 'gitart-vue-dialog/dist/style.css';
import { GDialog } from 'gitart-vue-dialog';

createApp(App).use(router).use(MotionPlugin).component('GDialog', GDialog).mount('#app');
