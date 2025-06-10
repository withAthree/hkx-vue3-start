import type { App } from 'vue';
import { createPinia } from 'pinia';

export const pinia = createPinia();

export const installPinia = (app: App) => {
  app.use(pinia);
};
