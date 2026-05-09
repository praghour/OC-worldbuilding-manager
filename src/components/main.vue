<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
    <main class="main">
        <section class="hero">
            <p class="hero_subtitle">OC / Worldbuilding manager</p>
            <h1>Создавай <span>персонажей</span> и миры</h1>

            <div class="hero_buttons">
                <RouterLink :to="{ name: 'oc' }"class="main_button">Персонажи</RouterLink>
                <button class="secondary_button">Создать мир</button>
            </div>
        </section>
    </main>
</template>

<style scoped>
.main {
    padding: 60px 40px;
    background: var(--bg);
    color: var(--text);
    min-height: 100vh;
}

.hero {
    text-align: center;
    margin-bottom: 60px;
}

.hero_subtitle {
    color: var(--pear);
    font-weight: 600;
    margin-bottom: 10px;
    letter-spacing: 1px;
    text-transform: uppercase;
    margin-bottom: 20px;
}

h1 {
    font-size: 64px;
    color: var(--text-h);
    margin-bottom: 25px;
}

h1 span {
    color: var(--accent);
    margin-bottom: 25px;
}

.hero_buttons {
    display: flex;
    justify-content: center;
    gap: 16px;
    flex-wrap: wrap;
    margin-top: 20px;
}

.main_button,
.secondary_button {
    padding: 12px 24px;
    border-radius: 14px;
    font-size: 16px;
    cursor: pointer;
    transition: 0.3s;
    text-decoration: none;
}

.main_button {
    background: var(--accent);
    color: white;
    border: none;
}

.main_button:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow);
}

.secondary_button {
    background: var(--pear-bg);
    color: var(--text-h);
    border: 2px solid var(--pear);
}

.secondary_button:hover {
    background: var(--pear);
}

@media (max-width: 900px) {
    h1 {
        font-size: 42px;
    }
    .main {
        padding: 40px 20px;
    }
}
</style>