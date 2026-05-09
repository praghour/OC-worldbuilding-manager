<script setup>
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
    <div>Страница персонажей</div>
    <RouterLink :to="{ name: 'oc_profile' }">Профиль персонажа</RouterLink>
    <div class="app">
        <RouterView />
    </div>
</template>

<style scoped>
</style>