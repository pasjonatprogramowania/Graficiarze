<template>
  <div class="container-card bg--white">
    <div class="container-card--img">
      <slot name="company-img"> </slot>
    </div>
    <slot name="company-title"></slot>
    <slot name="company-subtitle"></slot>
  </div>
</template>
<script>
import { defineComponent } from "vue";

export default defineComponent({
  setup() {},
});
</script>
<style lang="sass">
.container-card
  margin-left: auto
  margin-right: auto
  border-radius: var(--size-3)
  display: grid
  grid-template-rows: var(--size-12) var(--size-9) auto
  grid-template-areas: "image" "title" "text"
  box-shadow: var(--shadow-3)
  text-align: center
  overflow: hidden
  gap: var(--size-3)
  @media (min-width: 1024px)
    max-width: 300px
    grid-template-rows: var(--size-12) var(--size-9) var(--size-12)
.container-card--img
  display: grid
  place-items: center
  grid-area: image
.container-card--title
  height: 100%
  grid-area: title
  display: flex
  align-items: center
  justify-content: center
.container-card--subtitle
  justify-content: center
  grid-area: text
  display: flex
</style>
