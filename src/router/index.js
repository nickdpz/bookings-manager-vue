import Vue from 'vue';
import VueRouter from 'vue-router';
import HomePage from '../views/HomePage.vue';
import NotFoundPage from '../views/NotFoundPage.vue';

// User Pages
import ProfilePage from '../views/user/ProfilePage.vue';
import HousesPages from '../views/user/HousesPage.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage,
  },
  {
    path: '/search',
    name: 'SearchPage',
    component: () => import(/* webpackChunkName: "about" */ '../views/SearchPage.vue'),
  },
  {
    path: '/user',
    redirect: { name: 'ProfilePage' },
  },
  {
    path: '/user/profile',
    name: 'ProfilePage',
    component: ProfilePage,
  },
  {
    path: '/user/houses',
    name: 'HousesPages',
    component: HousesPages,
  },
  {
    path: '*',
    name: 'NotFoundPage',
    component: NotFoundPage,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
