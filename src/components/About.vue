<template>
  <div class="about-container">
    <div class="wrapper gap">
      <div class="title-container--about gap--sm">
        <div class="title-wrapper">
          <h2 class="h2">lorem ipsum</h2>
          <p class="title-container--sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
            quod ea adipisci cumque odit ut ullam, rerum amet culpa totam atque
            beatae sint quis quam nemo consequuntur eligendi ipsam minima quas
            dolorem cum explicabo voluptatibus! Debitis quaerat voluptates,
            aliquam neque mollitia nulla sapiente exercitationem vel, odit rerum
            dolor excepturi consectetur possimus iste.
          </p>
        </div>
        <div class="arrow--map">
          <img class="icon--lg" src="../icons/arrow-map.svg" alt="" />
        </div>
        <div class="container-about--btn-map">
          <img class="icon--lg about-map" src="../icons/map.svg" alt="" />
          <button class="btn btn--primary about-btn">lorem ipsum</button>
        </div>
      </div>
      <img class="img-about only-desktop" src="../img/about.jpg" alt="" />
    </div>
  </div>
</template>
<script lang='ts'>
import { defineComponent } from "vue";
export default defineComponent({});
</script>
<style lang="sass">
.title-container--sm
  width: var(--size-fluid-10)
  flex-grow: 0
.about-map
  margin-right: auto
  margin-left: auto
.container-about--btn-map
  display: flex
  flex-direction: column
  justify-content: center
  width: 200px
.gap--sm
  gap: var(--size-fluid-4)
.title-container--about
  display: flex
  flex-direction: column
.arrow--map
  display: flex
  justify-content: center
.gap
  gap: var(--size-fluid-8)
.about-container
  margin-left: var(--size-fluid-7)
  margin-right: var(--size-fluid-7)
@media (max-width: 1440px)
  .only-desktop
    display: none
</style>