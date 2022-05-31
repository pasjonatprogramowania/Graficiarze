<template>
  <div class="margin-x--lg">
    <div class="column gap--sm">
      <div class="column--start gap--sm">
        <TextField v-motion-slide-visible-once-left>
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
        <arrowRight v-motion-slide-visible-once-left />
      </div>
      <div class="column--end gap--sm">
        <TextField v-motion-slide-visible-once-right>
          <h2 class="h2">lorem ipsum</h2>
          <p class="text-about">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
            quod ea adipisci cumque odit ut ullam, rerum amet culpa totam atque
            beatae sint quis quam nemo consequuntur eligendi ipsam minima quas
            dolorem cum explicabo voluptatibus! Debitis quaerat voluptates,
            aliquam neque mollitia nulla sapiente exercitationem vel, odit rerum
            dolor excepturi consectetur possimus iste.
          </p>
          <button class="btn btn--primary">Nasz Facebook</button>
        </TextField>
        <arrowLeft v-motion-slide-visible-once-right/>
      </div>
      <div class="column--start gap--sm">
        <TextField v-motion-slide-visible-once-left>
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
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
/// <reference types="vite-svg-loader" />
import arrowLeft from "../assets/img/arrows/arrow-story-left.svg?component";
import arrowRight from "../assets/img/arrows/arrow-story-right.svg?component";
import TextField from "./Utility/TextField.vue";
</script>
