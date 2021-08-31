
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

      },
      {
        name : "regist1",
        path: '/regist', 
        component: () => import('pages/regisPage1.vue') 

      },
      {
        name : "loginAdmin",
        path: '/loginAdmin', 
        component: () => import('pages/loginAdmin.vue') 

      },
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
