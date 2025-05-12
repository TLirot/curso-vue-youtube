import Counter from '@/modules/counter/view/Counter.vue'
import App from '@/views/App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import { AppRoutes } from './routes'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: AppRoutes.Counter.path,
    },
    {
      path: AppRoutes.Counter.path,
      name: AppRoutes.Counter.name,
      component: () => import('../modules/counter/view/Counter.vue')
    },
    {
      path: AppRoutes.TodoList.path,
      name: AppRoutes.TodoList.name,
      component: () => import('../modules/todo-list/view/TodoList.vue'),
    },
     {
      path: AppRoutes.SignUp.path,
      name: AppRoutes.SignUp.name,
      component: () => import('../modules/sign-up/view/SignUp.vue'),
    },
  ],
})

export default router
