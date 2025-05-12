<template>
  <div>{{ counter }}</div>
  <button @click="addToCounter">Add</button>
  <button @click="restFromCounter">Rest</button>
</template>

<script setup lang="ts">
import { useCounter } from './Counter';


const { counter, addToCounter, restFromCounter } = useCounter()
</script>
<style scoped>

</style>
