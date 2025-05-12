import TodoList from "@/components/todo-list/TodoList.vue";
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
}