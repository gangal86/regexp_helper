
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('src/pages/PageMain.vue') }
    ]
  },
  { path: '*', redirect: '/' }, // catch all use case
]

export default routes
