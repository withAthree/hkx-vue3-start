import type { App } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
  ],
});

export const installRouter = (app: App) => {
  app.use(router);
};
