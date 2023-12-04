import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './styles/index.scss'
import i18n from './plugins/i18n';
import VueSplide from '@splidejs/vue-splide';
import '@splidejs/splide/dist/css/splide.min.css';

createApp(App).use(i18n).use(store).use(router).use(VueSplide).mount('#app') 
