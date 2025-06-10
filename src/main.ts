import { createApp } from 'vue';
import App from './App.vue';
import { installRouter } from './router';
import { installPinia } from './stores';
import './styles/css/global.css';

const app = createApp(App);

installPinia(app);
installRouter(app);

app.mount('#app');
