
const routes = [
  {
    path: '/regist',
    component: () => import('layouts/regisLayout.vue'),
    children: [
      
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
      {
        name : "workingInform",
        path: '/workingInform', 
        component: () => import('pages/workingInform.vue') 

      },
      {
        name : "toavatar",
        path: '/toavatar', 
        component: () => import('pages/avatar.vue') 

      },
    ]
  },
  {
    path: '/',
    component: () => import('layouts/firstLayout.vue'),
    children: [{ path: '', component: () => import('pages/Index.vue') },
    { name : "homepage",
      path: 'homepage', 
    component: () => import('pages/home.vue')
   },
  ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes


