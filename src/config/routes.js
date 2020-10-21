import { lazy } from 'react'

export default {
  // pages
  Home: {
    path: '/',
    exact: true,
    component: lazy(() => import('../pages/Home'))
  },
  Action: {
    path: '/action',
    component: lazy(() => import('../pages/Action'))
  },
  Adventure: {
    path: '/adventure',
    component: lazy(() => import('../pages/Adventure'))
  },
  RPG: {
    path: '/rpg',
    component: lazy(() => import('../pages/RPG'))
  },
  Simulation: {
    path: '/simulation',
    component: lazy(() => import('../pages/Simulation'))
  },
  Sport: {
    path: '/sport',
    component: lazy(() => import('../pages/Sport'))
  },
  Strategy: {
    path: '/strategy',
    component: lazy(() => import('../pages/Strategy'))
  },
  Other: {
    path: '/other',
    component: lazy(() => import('../pages/Other'))
  },

  // login Reigister
  Login: {
    path: '/login',
    component: lazy(() => import('../pages/Login'))
  },
  Register: {
    path: '/register',
    component: lazy(() => import('../pages/Register'))
  },
  // Review
  Review: {
    path: '/review/:id',
    component: lazy(() => import('../pages/Review'))
  },
  // AdminPost
  AdminPost: {
    path: '/AdminPost',
    component: lazy(() => import('../pages/AdminPost'))
  }
}
