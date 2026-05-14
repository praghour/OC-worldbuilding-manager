<script setup>
import { RouterView } from 'vue-router';
</script>

<template>
  <div class="app">
    <RouterView />
  </div>
  <PrimaryButton @click="createOC">
    Создать OC
  </PrimaryButton>
</template>

<style scoped>
</style>