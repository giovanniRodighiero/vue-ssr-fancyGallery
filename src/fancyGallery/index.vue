<template lang="html">
  <section class="fancyGallery">
    <article v-for="photo, index in photos" class="photo" v-bind:style="`flex-grow: ${photo.flexGrow};`">
      <div class="image" v-bind:style="`background-image: url(\'${photo.imgSrc}\')`" v-on:click="enlargeImage(index)" >
        <div class="textWrapper">
          <transition name="fade-top">
            <div class="textTop" v-if="photo.isEnlarged">
              <p class="myParagraph">{{photo.text.top}}</p>
            </div>
          </transition>
          <transition name="fade-center">
            <div class="textCenter" v-if="photo.isEnlarged">
              <p class="myParagraph" v-bind:style="`color: ${photo.text.color};`">{{photo.text.center}}</p>
            </div>
          </transition>
          <transition name="fade-bottom">
            <div class="textBottom" v-if="photo.isEnlarged">
              <p class="myParagraph">{{photo.text.bottom}}</p>
            </div>
          </transition>
          <transition name="fade-preview">
            <div class="textPreview" v-if="photo.previewActive">
              <p class="myParagraph">{{photo.text.preview}}</p>
              <p class="test">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
          </transition>

        </div>
      </div>
    </article>
  </section>
</template>

<script>
import TweenLite from 'tweenLite';
export default {
  props: ['photos', 'config'],
  data(){
    return {

    }
  },
  created(){
    this.photos.map(photo => {
      photo['busy'] = false;
      photo['previewActive'] = true;
    });
  },
  methods:{
    enlargeImage: function (index) {
      const initialFlex = this.photos[index].flexGrow;
      this.resetFlexGrow();
      if(initialFlex < 2){
        this.photos[index].previewActive = false;
        TweenLite.to(this.photos[index], 2, {
          flexGrow: this.config.maxFlexGrow,
          onUpdate:  this.switchText,
          onUpdateParams:["{self}", index],
          onComplete:  this.enlargementComplete,
          onCompleteParams:[index],
          ease:Power2.easeInOut
        });
      }
    },
    resetFlexGrow: function () {
      this.photos.map( (photo, index) => {
        photo.isEnlarged = false;
        TweenLite.to(photo, 1, {
          flexGrow: 1,
          onComplete: this.reductionComplete,
          onCompleteParams: [index]
        });
      });
    },
    switchText: function (tween, index) {
      if(tween.progress() > 0.8 && !this.photos[index].busy){
        this.photos[index].busy = true;
        //this.photos[index].isEnlarged = true;
      }
    },
    enlargementComplete: function (index) {
      this.photos[index].busy = false;
    },
    reductionComplete: function (index) {
      this.photos[index].previewActive = true;
    }
  },
  computed:{

  }
}
</script>

<style lang="sass?indentedSyntax">
  @import "./style.sass"
</style>
