import 'babel-polyfill';

import Vue from 'vue';
import Vuetify from 'vuetify';
import App from './App.vue';
import router from './router';
import './registerServiceWorker';

import '../node_modules/vuetify/dist/vuetify.min.css';

Vue.config.productionTip = false;

Vue.use(Vuetify);

new Vue({
    router,
    render: (h) => h(App),
}).$mount('#app');
