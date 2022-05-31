<template>
  <div class="placat-grid gap--xs">
    <img class="placat--img" :src="img" alt="" />
    <div class="placat--description">
      <p class="h3">{{ name }}</p>
      <p class="h3">{{ role }}</p>
      <p>{{ description }}</p>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  props: { name: String, img: String, description: String, role: String },
});
</script>
<style lang="sass">
.placat-grid
  text-align: center
  display: grid
  place-items: center
  grid-template-rows: 1fr
  grid-template-columns: 1fr
  grid-template-areas: "img" "description"
  @media (min-width:900px)
    grid-template-rows: repeat(1,1fr)
    grid-template-columns: repeat(2,1fr)
    grid-template-areas: "img description"
    &:nth-child(odd)
      grid-template-areas: "description img"

.placat--img
  grid-area: img
  width: 400px
.placa--description
  grid-area: description
</style>
