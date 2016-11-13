
<template>
  <div class="my-app">
    <h1>Fancy Gallery !</h1>
    <FancyGallery
      v-bind:photos="photos"
      v-bind:config="config"
    ></FancyGallery>
  </div>
</template>

<script>
import FancyGallery from './fancyGallery/index.vue';
const photos = [];
for (let i = 0; i < 5; i++) {
  photos.push(
     {
      imgSrc:  `https://unsplash.it/${900 + i}/${500 + i}?random`,
      text: {
        preview:{
          content: 'Preview' + i,
          color: '#eee'
        },
        center:{
          content: 'Fancy main text content for my fancy gallery !',
          color: 'red'
        },
        top:{
          content: 'Fancy header',
          color: '#fff'
        },
        bottom:{
          content: 'Fancy footer',
          color: 'white'
        }
      },
      isEnlarged: false,
      flexGrow: 1
    }
  )
}
const config = {
  maxFlexGrow: 30
}
export default {
  components: {
    FancyGallery
  },
  data() {
    return {
      photos,
      config
    }
  }
};
</script>
<style lang="sass?indentedSyntax">
html, body
  margin: 0
  padding: 0
.my-app
  width: 100%

</style>
