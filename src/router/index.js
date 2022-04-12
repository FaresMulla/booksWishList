import { createRouter, createWebHashHistory } from 'vue-router';
import appHome from '../views/app-home.vue';
import editTask from '../views/edit-task.vue';

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: appHome
    },
    {
      path: '/?id',
      name: 'task',
      component: editTask
    }
  ]
})

export default router
