<template>
  <div class="container">
    <div class="custom-shape-divider-top-1652426427 absolute--top">
      <svg
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path d="M1200 0L0 0 598.97 114.72 1200 0z" class="shape-fill"></path>
      </svg>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({});
</script>
<style lang="sass" >
.container
  z-index: 10
  position: relative
  width: 100%
.custom-shape-divider-top-1652426427
  position: absolute
  top: 0
  left: 0
  width: 100%
  overflow: hidden
  line-height: 0
  z-index: 100

  & svg
    position: relative
    display: block
    width: calc(139% + 1.3px)
    height: var(--size-fluid-3)

  & .shape-fill
    fill: hsl(var(--primary))

.absolute--top
  z-index: 1000
</style>