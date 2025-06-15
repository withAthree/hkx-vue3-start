import { createApp } from 'vue';
import App from './App.vue';
import { installRouter } from './router';
import { installPinia } from './stores';
import './styles/index.css';

const init = async () => {
  const app = createApp(App);
  installRouter(app);
  installPinia(app);
  app.mount('#app');
};

init();
