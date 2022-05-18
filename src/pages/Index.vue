<template>
  <MainLayout>
    <About />
    <Gallery /><Team />
  </MainLayout>
</template>
<script lang="ts">
import Team from "../components/Team.vue";
import MainLayout from "../layouts/MainLayout.vue";
import About from "../components/About.vue";
import Gallery from "../components/Gallery.vue";
import { defineComponent } from "vue";
export default defineComponent({
  components: { MainLayout, About, Gallery, Team },
});
</script>
<style lang="sass">
</style>