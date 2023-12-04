import { createRouter, createWebHistory } from 'vue-router'

const roles = ['startup', 'corporation', 'investor', 'specialist'];

const routes = [
  {
    path: '/',
    name: 'main',
    component: () => import('../pages/main/index.vue'),
  },
  {
    path: '/startups',
    name: 'startups',
    component: () => import('../pages/startups/index.vue'),
  },
  {
    path: '/startups/:id',
    name: 'startup',
    component: () => import('../pages/startups/id.vue'),
  },
  {
    path: '/corporations',
    name: 'corporations',
    component: () => import('../pages/corporations/index.vue'),
  },
  {
    path: '/corporations/:id',
    name: 'corporation',
    component: () => import('../pages/corporations/id.vue'),
  },
  {
    path: '/investors',
    name: 'investors',
    component: () => import('../pages/investors/index.vue'),
  },
  {
    path: '/investors/:id',
    name: 'investor',
    component: () => import('../pages/investors/id.vue'),
  },
  {
    path: '/specialists',
    name: 'specialists',
    component: () => import('../pages/specialists/index.vue'),
  },
  {
    path: '/specialists/:id',
    name: 'specialist',
    component: () => import('../pages/specialists/id.vue'),
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../pages/auth/Login.vue')
  },
  {
    path: '/registration',
    name: 'registration',
    component: () => import('../pages/auth/RegistrPage.vue')
  },
  {
    path: '/registration/:type',
    name: 'registration card',
    component: () => import('../pages/auth/Registration.vue'),
    beforeEnter: (to, from, next) => {
      const type = to.params.type;

      if (roles.includes(type)) {
        next();
      } else {
        next({ path: '/404' });
      }
    },
  },
  {
    path: '/articles',
    name: 'articles',
    component: () => import('../pages/articles/index.vue')
  },
  {
    path: '/articles/:id',
    name: 'article',
    component: () => import('../pages/articles/article.vue')
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import('../pages/profile/index.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/profile/edit',
    name: 'profile edit',
    component: () => import('../pages/profile/editProfile.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/profile/change-password',
    name: 'profile change password',
    component: () => import('../pages/profile/changePassword.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/form',
    name: 'form profile',
    component: () => import('../pages/form/index.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/:catchAll(.*)',
    component: () => import('../components/global/NotFound.vue')
  },
]

const localUser = localStorage.getItem("setUser")

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!JSON.parse(localUser)) {
      next({ path: '/' });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router
