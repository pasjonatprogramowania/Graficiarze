<template>
  <div class="grid--avatar gap--xs">
    <img class="team-avatar--img" :src="img" alt="" />
    <div class="team-avatar--description">
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
.grid--avatar
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
    &:nth-child(2)
      grid-template-areas: "description img"
    &:nth-child(4)
      grid-template-areas: "description img"
    &:nth-child(6)
      grid-template-areas: "description img"
.team-avatar--img
  grid-area: img
  width: 300px
.team-avatar--description
  grid-area: description
</style>
