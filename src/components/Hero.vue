<template>
  <div class="hero-container">
    <img class="hero-banner" src="../icons/hero.jpg" alt="" />
    <div class="title-wrapper">
      <h1 class="h1 hero-title">Graficiarze</h1>
      <h2 class="h3 hero-subtitle">Zmieniamy miasta!</h2>
    </div>
    <WaverShape />
  </div>
</template>
<style lang='sass'>
@import '../styles/hero.sass'
</style>
<script lang='ts'>
import WaverShape from "./WaverShape.vue";
import { defineComponent } from "vue";
export default defineComponent({
  components: { WaverShape },
});
</script>