<template>
  <div class="wrapper--main">
    <Navbar />
    <Hero />
    <main>
      <slot />
    </main>
    <Footer />
  </div>
</template>
<script lang="ts" setup>
import Hero from "../components/Hero.vue";
import Footer from "../components/Footer.vue";
import Navbar from "../components/Nav/Navbar.vue";
</script>
<style lang="sass">
@import '../styles/main.sass'
@import "../styles/mainLayout.sass"
@import "../styles/variables.sass"
@import "../styles/utilitys.sass"
</style>
