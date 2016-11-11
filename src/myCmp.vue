<template>
  <div>
    <p>Hello {{ name }}</p>
    <p></p>
  </div>
</template>

<script>
export default {
  props: [ 'name' ],
  replace: false,
};
</script>
