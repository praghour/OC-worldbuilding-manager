import { createWebHistory, createRouter } from "vue-router";

import main from "./components/main.vue";
import OC from "./components/OC.vue";
import OCProfile from "./components/OCProfile.vue";

// шаблончик пути: {path: '/', component: , name: ''}
const routes = [
    {path: '/', component: main, name: 'main'},
    {path: '/oc', component: OC, name: 'oc', children: [
        {path: 'profile', component: OCProfile, name: 'oc_profile'}
    ]}
];

export const router = createRouter({
    history: createWebHistory(),
    routes
});