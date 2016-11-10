import Vue from 'vue';
import App from './App.vue';

const VueApp = Vue.extend(App);

new VueApp({
  el: '.my-app',
});
