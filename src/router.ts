import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '@/views/Home.vue';

const routes: any[] = [
  { path: '/', name: 'home', component: Home },
  { path: '/*', name: 'error-404', beforeEnter: (to, from, next) => next('/') }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(): {} {
    return { x: 0, y: 0 };
  }
});

export default router;
