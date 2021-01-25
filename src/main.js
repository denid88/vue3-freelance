import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './assets/css/theme.css'
import vue3notification from 'notification_vue_3'

createApp(App)
  .use(store)
  .use(router)
  .use(vue3notification)
  .mount('#app');
