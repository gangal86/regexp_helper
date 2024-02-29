const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/MainPage.vue') }],
  },
  { path: '/:catchAll(.*)*', redirect: '/' },
];

export default routes;
