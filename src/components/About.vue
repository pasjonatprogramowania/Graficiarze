<template>
  <div class="margin-x">
    <div class="wrapper gap--sm">
      <div class="title-container--about gap--sm">
        <TextField>
          <h2 class="h2">lorem ipsum</h2>
          <p class="text-about">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
            quod ea adipisci cumque odit ut ullam, rerum amet culpa totam atque
            beatae sint quis quam nemo consequuntur eligendi ipsam minima quas
            dolorem cum explicabo voluptatibus! Debitis quaerat voluptates,
            aliquam neque mollitia nulla sapiente exercitationem vel, odit rerum
            dolor excepturi consectetur possimus iste.
          </p>
        </TextField>
        <div class="img--arrow-map">
          <img
            class="icon--lg"
            src="../assets/img/arrows/arrow-map.svg"
            alt=""
          />
        </div>
        <div class="container-about--btn-map">
          <img
            class="icon--lg icon--map"
            src="../assets/img/About/map.svg"
            alt=""
          />
          <button class="btn btn--primary">lorem ipsum</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang='ts'>
import TextField from "./Utility/TextField.vue";
import { defineComponent } from "vue";
export default defineComponent({ components: { TextField } });
</script>
<style lang="sass" >
.icon--map
  margin-right: auto
  margin-left: auto
.container-about--btn-map
  display: flex
  flex-direction: column
  justify-content: center
  margin-right: auto
.title-container--about
  display: flex
  flex-direction: column
.img--arrow-map
  display: flex
  justify-content: center
</style>