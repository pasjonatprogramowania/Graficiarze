<template>
  <div class="margin-x--lg">
    <div class="column gap--sm">
      <div class="column--start gap--sm">
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
        <arrowRight />
      </div>
      <div class="column--end gap--sm">
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
          <button class="btn btn--primary">Nasz Facebook</button>
        </TextField>
        <arrowLeft />
      </div>
      <div class="column--start gap--sm">
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
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import arrowLeft from "../icons/arrow-story-left.svg";
import arrowRight from "../icons/arrow-story-right.svg";
import { defineComponent } from "vue";
import TextField from "./TextField.vue";
export default defineComponent({
  components: { TextField, arrowLeft, arrowRight },
});
</script>
