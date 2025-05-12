<template>
    <div>
        <h2>Todo List</h2>
        <input type="text" id="input-item" v-model="newTask" @keyup.enter="handleClickAdd"/>
        <ul>
            <li v-for="(todo, index) in todoList" :key="`${index}-${todo}`">
                {{ todo }}
            </li>
        </ul>
        <button @click="clearTodoList">Clear list</button>
        <button v-if="todoList.length" @click="removeLastItem">Remove last item</button>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useTodoList } from './TodoList';

const newTask = ref('');

const handleClickAdd = () => {
    if (newTask.value) {
        addToTodoList(newTask.value);
        newTask.value = '';
    }
};

const {todoList, addToTodoList, clearTodoList, removeLastItem} = useTodoList();
</script>
<style scoped></style>