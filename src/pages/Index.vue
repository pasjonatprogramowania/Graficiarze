<template>
  <MainLayout>
    <About />
    <Gallery />
    <Team />
    <Story />
  </MainLayout>
</template>
<script lang="ts">
import Team from "../components/Team.vue";
import Story from "../components/Story.vue";
import MainLayout from "../layouts/MainLayout.vue";
import About from "../components/About.vue";
import Gallery from "../components/Gallery.vue";
import { defineComponent } from "vue";
export default defineComponent({
  components: { MainLayout, About, Gallery, Team, Story },
});
</script>
<style lang="sass">
</style>