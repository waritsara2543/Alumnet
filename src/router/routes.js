
const routes = [
  {
    path: '/',
    component: () => import('layouts/regisLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      {
        name : "loginPage",
        path: '/loginPage', 
        component: () => import('pages/loginPage.vue') 

      }
    ]
  },
  {
    path: '/main',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/first.vue') }],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
