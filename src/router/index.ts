import Counter from '@/components/counter/Counter.vue'
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
      component: () => import('../components/counter/Counter.vue')
    },
    {
      path: AppRoutes.TodoList.path,
      name: AppRoutes.TodoList.name,
      component: () => import('../components/todo-list/TodoList.vue'),
    },
  ],
})

export default router
