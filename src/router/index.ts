import type { App } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import { staticRouter } from './config';

export const installRouter = (app: App) => {
  const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: staticRouter,
  });

  // router.beforeEach((to, from) => {
  //   return true;
  // });
  //
  // router.afterEach((to, from) => {
  // });

  app.use(router);
};
