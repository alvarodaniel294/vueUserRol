import { createRouter, createWebHistory } from 'vue-router'
import UsersView from '../views/UsersView.vue'
import HomeView from '../views/HomeView.vue'
import UsersCreateView from '../views/UsersCreateView.vue'
import UsersEditView from '../views/UsersEditView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/users',
      name: 'users',
      component: UsersView
    },
    {
      path: '/users/create',
      name: 'usersCreate',
      component: UsersCreateView
    },
    {
      path: '/users/:id/edit',
      name: 'usersEdit',
      component: UsersEditView
    },
    
  ]
})

export default router
