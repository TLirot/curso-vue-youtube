<template>
    <div class="sidebar">
        <h2>Welcome</h2>
        <h3>Name: {{ user?.name }}</h3>
        <h3>Email: {{ user?.email }}</h3>
        <ul>
            <li><router-link :to="AppRoutes.Counter.path">Counter</router-link></li>
            <li><router-link :to="AppRoutes.TodoList.path">Todo list</router-link></li>
            <li><router-link :to="AppRoutes.SignUp.path">Sign up</router-link></li>
        </ul>
    </div>
</template>
<script setup lang="ts">
import { useUserStore } from '@/domain/stores/user.store';
import { AppRoutes } from '@/router/routes';
import { computed, ref, watch } from 'vue';

const userStore = useUserStore();

const user = computed(() => userStore.user)

</script>
<style scoped>
.sidebar {
    width: 250px;
    padding: 20px;
}
</style>
