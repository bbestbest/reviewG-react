import { lazy } from 'react'

export default {
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
  Login: {
    path: '/login',
    component: lazy(() => import('../pages/Login'))
  },
  Register: {
    path: '/register',
    component: lazy(() => import('../pages/Register'))
  },
  // Design end delete
  Review: {
    path: '/review',
    component: lazy(() => import('../pages/Review'))
  }
}
