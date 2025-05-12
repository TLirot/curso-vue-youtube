<template>
    <div class="sidebar">
        <h2>Side bar</h2>
        <ul>
            <li><router-link to="/counter">Counter</router-link></li>
            <li><router-link to="/todo-list">Todo List</router-link></li>
        </ul>
    </div>
</template>
<script setup lang="ts"></script>
<style scoped>
.sidebar {
    width: 250px;
    padding: 20px;
}
</style>
