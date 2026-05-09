<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
    <div>Главная страница</div>
    <div class="pages">
        <RouterLink :to="{ name: 'oc' }">Персонажи</RouterLink>
    </div>
</template>

<style scoped>
</style>