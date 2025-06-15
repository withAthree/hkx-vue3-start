import type { RouteRecordRaw } from 'vue-router';

export const staticRouter: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/welcome',
    component: () => import('@/layout/Layout.vue'),
    children: [
      {
        path: '/welcome',
        name: 'welcome',
        component: () => import('@/views/main/index.vue'),
      },
      {
        path: '/main',
        name: 'main',
        component: () => import('@/views/main/index.vue'),
      },
    ],
  },
];
