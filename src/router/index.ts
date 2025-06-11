import type { App } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import { staticRouter } from './config';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: staticRouter,
});

export const installRouter = (app: App) => {
  app.use(router);
};
