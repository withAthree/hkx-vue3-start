import { createApp } from 'vue';

import App from './App.vue';
import './style/index.css';

import pinia from './stores';
import router from '@/router';

createApp(App).use(router).use(pinia).mount('#app');
