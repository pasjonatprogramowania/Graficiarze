<template>
  <div class="container-card bg--white" v-motion-slide-visible-once-left ref="target">
    <div class="container-card--img">
      <slot name="company-img"> </slot>
    </div>
    <slot name="company-title"></slot>
    <slot name="company-subtitle"></slot>
  </div>
</template>
<script setup>
import { useMotion } from '@vueuse/motion'
import { ref } from 'vue'
const target = ref()

// useMotion(target, {
//     hover: {
//         scale:1.1,
//         duration:1,
//         easing:spring(),
//         repeat:Infinity,
//         direction:"alternate"
//     },
// })
</script>
<style lang="sass">
.container-card
  width: 100%
  margin-left: auto
  margin-right: auto
  border-radius: var(--size-3)
  display: grid
  grid-template-areas: "image" "title" "text"
  box-shadow: var(--shadow-3)
  text-align: center
  overflow: hidden
  gap: var(--size-3)
  grid-template-rows: var(--size-12) var(--size-9) auto
.container-card--img
  display: grid
  place-items: center
  grid-area: image
.container-card--title
  grid-area: title
  display: flex
  align-items: center
  justify-content: center
.container-card--subtitle
  padding: 20px
  justify-content: center
  grid-area: text
  display: flex
.img--social
  width: var(--size-11)
</style>
