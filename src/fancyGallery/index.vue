<template lang="html">
  <section class="fancyGallery">
    <article v-for="photo, index in photos" class="photo" v-bind:style="`flex-grow: ${photo.flexGrow};`">
      <div class="image" v-bind:style="`background-image: url(\'${photo.imgSrc}\')`" v-on:click="enlargeImage(index)" >
        <div class="textWrapper">
          <transition name="fade-bottom">
            <div class="textTop" v-if="photo.isEnlarged">
              <p class="myParagraph" v-bind:style="`color: ${photo.text.top.color};`">{{photo.text.top.content}}</p>
            </div>
          </transition>
          <transition name="fade-bottom">
            <div class="textCenter" v-if="photo.isEnlarged">
              <p class="myParagraph" v-bind:style="`color: ${photo.text.center.color};`">{{photo.text.center.content}}</p>
            </div>
          </transition>
          <transition name="fade-bottom">
            <div class="textBottom" v-if="photo.isEnlarged">
              <p class="myParagraph" v-bind:style="`color: ${photo.text.bottom.color};`">{{photo.text.bottom.content}}</p>
            </div>
          </transition>
          <transition name="fade-preview">
            <div class="textPreview" v-if="photo.previewActive">
              <p class="myParagraph" v-bind:style="`color: ${photo.text.preview.color};`">{{photo.text.preview.content}}</p>
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
        if(photo.flexGrow > 1)
          TweenLite.to(photo, 1, {
            flexGrow: 1,
            onComplete: this.reductionComplete,
            onCompleteParams: [index]
          });
        });
    },
    switchText: function (tween, index) {
      if(tween.progress() > 0.5 && !this.photos[index].busy){
        this.photos[index].busy = true;
        this.photos[index].isEnlarged = true;
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
