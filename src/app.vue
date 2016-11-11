
<template>
  <div class="my-app">
    <h1>{{name}}</h1>
    <h2>clicked: {{clicked}}</h2>
    <button @click="plus()"> +1 </button>
    <my-cmp :name="name"></my-cmp>
  </div>
</template>

<script>
import MyCmp from './myCmp.vue';
function randNum() {
  return Math.round(Math.random() * 100);
}
export default {
  components: {
    MyCmp,
  },
  data() {
    return {
      name: `Giovanni`,
      clicked: 0,
    };
  },
  created(){
    this.clicked++;
  },
  methods: {
    plus: function () {
      this.clicked++;
    }
  }
};
</script>
<style>
.my-app {
  background: #eee;
}
</style>
