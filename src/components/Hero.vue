<template>
  <div class="hero-banner">
    <div class="hero-box">
      <div class="title-wrapper">
        <h1 class="h1 hero-title">Graficiarze</h1>
        <h2 class="h3 hero-subtitle">Zmieniamy miasta!</h2>
      </div>
    </div>
  </div>
</template>
<style lang='sass'>
@import '../styles/hero.sass'
</style>
<script lang='ts'>
import logo from "../icons/logo.svg";
import { defineComponent } from "vue";
export default defineComponent({
  components: { logo },
});
</script>