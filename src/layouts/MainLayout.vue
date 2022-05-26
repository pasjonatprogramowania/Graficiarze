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
<script lang="ts">
import Hero from "../components/Hero/Hero.vue";
import Footer from "../components/footer/Footer.vue";
import Navbar from "../components/Nav/Navbar.vue";
import { defineComponent } from "vue";
export default defineComponent({
  components: { Navbar, Footer, Hero },
});
</script>
<style lang="sass">
@import '../styles/main.sass'
@import "../styles/mainLayout.sass"
@import "../styles/variables.sass"
@import "../styles/utilitys.sass"
</style>
