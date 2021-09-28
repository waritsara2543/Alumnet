
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
      {
        name : "confirmEmail",
        path: '/confirmEmail', 
        component: () => import('pages/confirmEmail.vue') 

      },
      {
        name : "stdIdSignup",
        path: '/stdIdSignup', 
        component: () => import('pages/stdIdSignup.vue') 

      },
      {
        name : "persenalInform",
        path: '/persenalInform', 
        component: () => import('pages/persenalInform.vue') 

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
