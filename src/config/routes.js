import { lazy } from 'react'

export default {
  // pages
  Home: {
    path: '/',
    exact: true,
    component: lazy(() => import('../pages/Home'))
  },
  Catagories: {
    path: '/catagories/:catagories',
    exact: true,
    component: lazy(() => import('../pages/Catagories'))
  },
  Login: {
    path: '/login',
    exact: true,
    component: lazy(() => import('../pages/Login'))
  },
  Register: {
    path: '/register',
    exact: true,
    component: lazy(() => import('../pages/Register'))
  },
  Review: {
    path: '/review/:catagories/:id',
    exact: true,
    component: lazy(() => import('../pages/Review'))
  },
  AdminPost: {
    path: '/admin_post',
    exact: true,
    component: lazy(() => import('../pages/AdminPost'))
  }
  // LoginAdmin: {
  //   path: '/loginAdmin',
  //   exact: true,
  //   component: lazy(() => import('../pages/LoginAdmin'))
  // }
  // Action: {
  //   path: '/action',
  //   component: lazy(() => import('../pages/Action'))
  // },
  // Adventure: {
  //   path: '/adventure',
  //   component: lazy(() => import('../pages/Adventure'))
  // },
  // RPG: {
  //   path: '/rpg',
  //   component: lazy(() => import('../pages/RPG'))
  // },
  // Simulation: {
  //   path: '/simulation',
  //   component: lazy(() => import('../pages/Simulation'))
  // },
  // Sport: {
  //   path: '/sport',
  //   component: lazy(() => import('../pages/Sport'))
  // },
  // Strategy: {
  //   path: '/strategy',
  //   component: lazy(() => import('../pages/Strategy'))
  // },
  // Other: {
  //   path: '/other',
  //   component: lazy(() => import('../pages/Other'))
  // },
}
