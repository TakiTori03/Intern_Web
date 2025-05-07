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
      component: () => import('../views/ProductListView.vue'),
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
    {
      path: '/shopping-cart',
      name: 'shopping_cart',
      component: () => import('../views/ShoppingCartView.vue'),
    },
    {
      path: '/search',
      name: 'search-box',
      component: () => import('../views/SearchBoxView.vue'),
    },
    {
      path: '/compare',
      name: 'compare_performance',
      component: () => import('../views/CompareView.vue'),
    },
    {
      path: '/tab-navigation',
      name: 'tab-navigation',
      component: () => import('../views/TabNavigationView.vue'),
    },
    {
      path: '/user-cards',
      name: 'user-cards',
      component: () => import('../views/UserCardView.vue'),
    },
    {
      path: '/timer',
      name: 'timer',
      component: () => import('../views/TimerView.vue'),
    },

    {
      path: '/users',
      name: 'userList',
      component: () => import('../views/UserListView.vue'),
      children: [
        {
          path: ':id',
          name: 'user',
          component: () => import('../components/UserFetch.vue'),
        },
      ],
    },
    {
      path: '/users/:id',
      name: 'user',
      component: () => import('../components/UserFetch.vue'),
    },
    {
      path: '/blogs',
      name: 'blogList',
      component: () => import('../views/BlogListView.vue'),
      children: [
        {
          path: ':id',
          name: 'blog',
          component: () => import('../components/BlogFetch.vue'),
        },
      ],
    },
    {
      path: '/blogs/:id',
      name: 'blog',
      component: () => import('../components/BlogFetch.vue'),
    },
    {
      path: '/dom-access',
      name: 'domAccess',
      component: () => import('../views/DomView.vue'),
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('../components/NotFound.vue'),
    },
  ],
})

export default router
