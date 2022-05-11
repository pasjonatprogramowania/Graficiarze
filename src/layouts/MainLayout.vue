<template>
  <div class="wrapper">
    <Navbar />
    <main>
      <slot />
    </main>
  </div>
</template>
<script lang="ts">
import Navbar from "../components/Navbar.vue";
import { defineComponent } from "vue";
export default defineComponent({
  components: { Navbar },
});
</script>
<style lang="sass">
@import "../styles/mainLayout.sass"
</style>

