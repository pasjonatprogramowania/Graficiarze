<template>
  <MainLayout>
    <About />
    <Team />
    <Story />
    <Companies />
    <Budget />
    <SocialMedia />
    <Gallery />
  </MainLayout>
</template>
<script lang="ts" setup>
import Companies from "../components/Comapnies/Partners.vue";
import Budget from "../components/Comapnies/Budget.vue";
import Gallery from "../components/Gallery.vue";
import SocialMedia from "../components/Comapnies/SocialMedia.vue";
import Team from "../components/Team.vue";
import Story from "../components/Story.vue";
import MainLayout from "../layouts/MainLayout.vue";
import About from "../components/About.vue";
</script>