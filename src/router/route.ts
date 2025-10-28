import type { RouteRecordRaw } from 'vue-router';

// 扩展 RouteMeta 接口
declare module 'vue-router' {
  interface RouteMeta {
    isLink?: string;
    isHide?: boolean;
    isAuth?: boolean;
    isKeepAlive?: boolean;
    isAffix?: boolean;
    isIframe?: boolean;
    roles?: string[];
    icon?: string;
  }
}

/**
 * 定义静态路由（默认路由）
 */
export const staticRoutes: RouteRecordRaw[] = [
];

/**
 * 定义404、401界面
 */
export const notFoundAndNoPower = [
  /*
   * {
   *   path: '/:path(.*)*',
   *   name: 'staticRoutes.notFound',
   *   component: () => import('/@/views/error/404.vue'),
   *   meta: {
   *     isHide: true,
   *   },
   * },
   * {
   *   path: '/401',
   *   name: 'staticRoutes.noPower',
   *   component: () => import('/@/views/error/401.vue'),
   *   meta: {
   *     isHide: true,
   *   },
   * },
   */
];

/**
 *  基础性路由
 *
 * 所有节点都是挂载此节点下
 */
export const baseRoutes: RouteRecordRaw[] = [
  {
    path: '/',
    name: '/',
    component: () => import('@/layout/Layout.vue'),
    meta: {
      isKeepAlive: true,
    },
    children: [],
  },
];
