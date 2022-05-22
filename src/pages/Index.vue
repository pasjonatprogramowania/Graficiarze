<template>
  <MainLayout>
    <About />
    <Gallery />
    <Team />
    <Story />
    <Companies />
    <Budget />
    <SocialMedia />
  </MainLayout>
</template>
<script lang="ts">
import Companies from "../components/Componies.vue";

import Budget from "../components/Budget.vue";
import SocialMedia from "../components/SocialMedia.vue";
import Team from "../components/Team.vue";
import Story from "../components/Story.vue";
import MainLayout from "../layouts/MainLayout.vue";
import About from "../components/About.vue";
import Gallery from "../components/Gallery.vue";
import { defineComponent } from "vue";
export default defineComponent({
  components: {
    MainLayout,
    About,
    Gallery,
    Team,
    Story,
    Companies,
    Budget,
    SocialMedia,
  },
});
</script>
<style lang="sass">
</style>