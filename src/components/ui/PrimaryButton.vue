<script setup>
const emit = defineEmits(['click'])
</script>

<template>
    <button class="primary_button" @click="emit('click')">
        <slot></slot>
    </button>
</template>

<style scoped>
.primary_button {
    background-color: #292F26;
    color: #F2F3EC;
    border-radius: 4px;
}

.primary_button:hover {
    background-color: #2B3226;
    color: #F2F3EC;
}
</style>