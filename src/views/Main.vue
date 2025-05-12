<template>
    <div class="container">
        <SideBar />
        <div class="content">
            <router-view></router-view>
        </div>
    </div>
</template>

<script setup lang="ts">
import SideBar from '@/components/side-bar/SideBar.vue';
</script>

<style scoped>
.container {
    display: flex;
}
.content {
    flex: 1;
    padding: 20px;
}
</style>