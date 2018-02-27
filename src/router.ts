import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Code from './views/Code.vue';
import Projects from './views/Projects.vue';
import Resume from './views/Resume.vue';
import Science from './views/Science.vue';
import Dissertation from './views/Dissertation.vue';
import Publications from './views/Publications.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/code',
      name: 'code',
      component: Code,
    },
    {
      path: '/projects',
      name: 'projects',
      component: Projects,
    },
    {
      path: '/resume',
      name: 'resume',
      component: Resume,
    },
    {
      path: '/science',
      name: 'science',
      component: Science,
    },
    {
      path: '/dissertation',
      name: 'dissertation',
      component: Dissertation,
    },
    {
      path: '/publications',
      name: 'publications',
      component: Publications,
    },
  ],
});
