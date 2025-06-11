import { createApp } from 'vue';
import App from './App.vue';
import { installRouter } from './router';
import { installPinia } from './stores';

import '@/styles/css/global.css';

const init = async () => {
  const app = createApp(App);

  await installRouter(app);
  await installPinia(app);

  app.mount('#app');
};

init();
