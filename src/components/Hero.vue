<template>
  <div class="banner--hero">
    <div class="container--hero gap--xs">
      <logo class="only-desktop icon--lg" />
      <div class="wrapper--title">
        <h1 class="h1 hero-title">Graficiarze</h1>
        <h2 class="h3 hero-subtitle">Zmieniamy miasta!</h2>
      </div>
    </div>
  </div>
  <div>
    <img
      src="../assets/img/Hero/scroll.gif"
      class="icon--md img--scroll"
      alt=""
    />
  </div>
</template>
<script lang='ts' setup>
/// <reference types="vite-svg-loader" />
import logo from "../assets/img/Hero/logo.svg?component";
</script>
<style lang='sass' scoped>
.img--scroll
  margin-top: 20px
  margin-left: auto
  margin-right: auto
  filter: grayscale(1)
.hero-title
  color: hsl(var(--white))
  border-bottom: 2px solid hsl(var(--white))
.hero-subtitle
  color: hsl(var(--text))
  background-color: hsl(var(--white))

.banner--hero
  width: 100%
  min-height: var(--size-fluid-10)
  background-image: url("../assets/img/Hero/hero.jpg")
  place-items: center
  display: grid
  background-position: center
  background-repeat: no-repeat
  background-size: cover
  z-index: 1
  clip-path: polygon(0 0, 100% 0, 100% 60%, 0% 100%)

.container--hero
  display: flex
  justify-content: center
@media (max-width: 700px)
  .banner--hero
    min-height: calc(var(--size-fluid-10) * 1.2)
</style>