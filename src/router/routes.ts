import TodoList from "@/modules/todo-list/view/TodoList.vue";
import type { RouteRecordRaw } from "vue-router";

type LocalRoute = Pick<RouteRecordRaw, 'path' | 'name' | 'children'>;

export const AppRoutes = {
    Counter: {
        path: '/counter',
        name: 'counter',  
    } satisfies LocalRoute,
    TodoList: {
        path: '/todo-list',
        name: 'todoList',
    } satisfies LocalRoute,
    SignUp: {
        path: '/sign-up',
        name: 'signUp',
    } satisfies LocalRoute,
}