import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('/src/views/home/index.vue'),
      // component: () => import('/src/views/customer/CustomerList.vue'),

    },
    {
      path: '/customer/register',
      name: 'customer-register',
      component: () => import('/src/views/customer/Register.vue'),

    },
    {
      path: '/customer/list',
      name: 'customer-list',
      component: () => import('/src/views/customer/CustomerList.vue'),

    },
    {
      path: '/authorization/list',
      name: 'authorization-list',
      component: () => import('/src/views/customer/Authorization.vue'),

    },
    {
      path: '/reset-password-customer',
      name: 'reset-password-customer',
      component: () => import('/src/views/customer/ResetPasswordCustomer.vue'),

    },
    {
      path: '/report-customer-list',
      name: 'report-customer-list',
      component: () => import('/src/views/customer/ReportCustomerList.vue'),

    },
  ],
})

export default router
