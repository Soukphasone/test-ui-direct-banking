import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      // component: () => import('@/views/home/index.vue'),
      component: () => import('@/views/customer/CustomerList.vue'),

    },
    {
      path: '/customer-register',
      name: 'customer-register',
      component: () => import('@/views/customer/Register.vue'),

    },
    {
      path: '/customer-list',
      name: 'customer-list',
      component: () => import('@/views/customer/CustomerList.vue'),

    },
  ],
})

export default router
