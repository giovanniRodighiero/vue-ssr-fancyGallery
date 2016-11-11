import Vue from 'vue';
import App from './app.vue';

const VueApp = Vue.extend(App);

new VueApp({
  el: '.my-app',
});
