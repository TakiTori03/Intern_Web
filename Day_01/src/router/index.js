import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/reverse',
      name: 'reverse',
      component: () => import('../views/ReverseView.vue'),
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/RegisterView.vue'),
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue'),
    },
    {
      path: '/products',
      name: 'products',
      component: () => import('../views/ProductsView.vue'),
    },
    {
      path: '/count',
      name: 'count',
      component: () => import('../views/CountView.vue'),
    },
    {
      path: '/to-do',
      name: 'todo_list',
      component: () => import('../views/TodoListView.vue'),
    },
  ],
})

export default router
