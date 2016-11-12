
<template>
  <div class="my-app">
    <my-cmp :name="name"></my-cmp>
  </div>
</template>

<script>
import MyCmp from './myCmp.vue';

export default {
  components: {
    MyCmp
  },
  data() {
    return {
      name: `Giovanni`,
      clicked: 0,
    };
  }
};
</script>
<style>
.my-app {
  background: #eee;
}
</style>
