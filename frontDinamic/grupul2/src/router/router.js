import { createRouter, createWebHistory } from 'vue-router';

// Import your components to be used as pages
import Home from '../components/FrontPage.vue'
import Reviews from '../components/Reviews.vue';
import Menu from '../components/Menu1.vue';

// Create routes
const routes = [
  {
    path: '/',
    component: Home,
    meta: {
      title: 'Home', // Add meta data like page title, etc.
    },
  },
  {
    path: '/reviews',
    component: Reviews,
    meta: {
      title: 'Reviews',
    },
  },
  {
    path: '/menu',
    component: Menu,
    meta: {
      title: 'Menu',
    },
  },
];

export default router;
