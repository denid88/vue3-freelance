import { createRouter, createWebHistory } from 'vue-router'
import Tasks from '@/views/Tasks'
import Task from '@/views/Task'
import NotFound from '@/views/NotFound'
import New from '@/views/New'

const routes = [
  {
    path: '/',
    name: 'Tasks',
    component: Tasks,
  },
  {
    path: '/:id',
    name: 'Task',
    component: Task,
  },
  {
    path: '/new',
    name: 'new',
    component: New,
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: 'active'
});

export default router;
