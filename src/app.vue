
<template>
  <div class="my-app">
    <h1 class="title">Fancy Gallery !</h1>
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
      imgSrc:  `https://unsplash.it/${900 + i}/${500 + i}?random`, // the + i thing is to get different images
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
@import url('https://fonts.googleapis.com/css?family=Ranga:400,700')
html, body
  margin: 0
  padding: 0
  font-family: 'Ranga', cursive
.my-app
  width: 100%
  text-align: center
</style>
