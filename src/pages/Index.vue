<template>
  <MainLayout>
    <About />
    <Team />
    <Story />
    <Companies />
    <Budget />
    <SocialMedia />
  </MainLayout>
</template>
<script lang="ts">
import Companies from "../components/Comapnies/Partners.vue";

import Budget from "../components/Comapnies/Budget.vue";
import SocialMedia from "../components/Comapnies/SocialMedia.vue";
import Team from "../components/Team/Team.vue";
import Story from "../components/Story.vue";
import MainLayout from "../layouts/MainLayout.vue";
import About from "../components/About.vue";
import { defineComponent } from "vue";
export default defineComponent({
  components: {
    MainLayout,
    About,
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