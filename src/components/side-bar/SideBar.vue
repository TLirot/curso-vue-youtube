<template>
    <div class="sidebar">
        <h2>Side bar</h2>
        <ul>
            <li><router-link :to="Counter.path">Counter</router-link></li>
            <li><router-link :to="AppRoutes.TodoList.path">Todo list</router-link></li>
            <li><router-link :to="AppRoutes.SignUp.path">Sign up</router-link></li>
        </ul>
    </div>
</template>
<script setup lang="ts">
import { AppRoutes } from '../../router/routes';

const { Counter, TodoList } = AppRoutes;

</script>
<style scoped>
.sidebar {
    width: 250px;
    padding: 20px;
}
</style>
