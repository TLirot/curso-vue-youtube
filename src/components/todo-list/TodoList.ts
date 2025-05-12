import { ref } from "vue";

export const useTodoList = () => {
    const todoList = ref<string[]>([]);

    const addToTodoList = (task: string) => {
        todoList.value.push(task);
    };

    const clearTodoList = () => {
        todoList.value = [];
    }

    const removeLastItem = () => {
        if (todoList.value.length > 0) {
            todoList.value.pop();
        }
    }

    return {
        todoList,
        addToTodoList,
        clearTodoList,
        removeLastItem
    };
}