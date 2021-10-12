
const routes = [
  {
    path: '/regist',
    component: () => import('layouts/regisLayout.vue'),
    children: [

      {
        name: "loginPage",
        path: '/loginPage',
        component: () => import('pages/loginPage.vue')

      },
      {
        name: "regist1",
        path: '/regist',
        component: () => import('pages/regisPage1.vue')

      },
      {
        name: "loginAdmin",
        path: '/loginAdmin',
        component: () => import('pages/loginAdmin.vue')

      },
      {
        name: "confirmEmail",
        path: '/confirmEmail',
        component: () => import('pages/confirmEmail.vue')

      },
      {
        name: "stdIdSignup",
        path: '/stdIdSignup',
        component: () => import('pages/stdIdSignup.vue')

      },
      {
        name: "persenalInform",
        path: '/persenalInform',
        component: () => import('pages/persenalInform.vue')

      },
      {
        name: "workingInform",
        path: '/workingInform',
        component: () => import('pages/workingInform.vue')

      },
      {
        name: "toavatar",
        path: '/toavatar',
        component: () => import('pages/avatar.vue')

      },

    ]
  },

  {
    path: '/admin',
    component: () => import('layouts/firstLayout.vue'),
    children: [
      {
        path: '', component: () => import('pages/Index.vue')
      }, 

    ],
  },{
    path: '/admin',
    component: () => import('layouts/AdminLayout.vue'),
    children: [
       {
        path: 'homeadmin', component: () => import('pages/HomeAdmin.vue')
      },
      {
        path: 'mapadmin', component: () => import('pages/MapAdmin.vue')
      },
      {
        path: 'reportadmin', component: () => import('pages/ReportAdmin.vue')
      },
      {
        path: 'createevent', component: () => import('pages/Createevent.vue')
      }

    ],
  },



  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        name: "homepage",
        path: 'homepage',
        component: () => import('pages/home.vue')
      },
      {
        name: "profilepage",
        path: 'profilepage',
        component: () => import('pages/profilepage.vue')
      },
      {
        name: "notificationpage",
        path: 'notificationpage',
        component: () => import('pages/notificationpage.vue')
      },
      {
        name: "classDirectorypage",
        path: 'classDirectorypage',
        component: () => import('pages/classDirectorypage.vue')
      },
      {
        name: "locationpage",
        path: 'locationpage',
        component: () => import('pages/locationpage.vue')
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


