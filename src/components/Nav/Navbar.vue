<template>
  <nav class="nav">
    <div class="nav-wrapper">
      <button
        class="bg--primary btn--menu"
        id="menu-btn"
        @click="changeMobileNavigationState"
        :aria-expanded="isNavBarExpanded"
        aria-label="Otwórz mobilną nawigacje"
      >
        <menuIcon class="icon--sm" />
      </button>
      <ul class="nav-links" role="navigation">
        <li v-for="(link, index) in navLink" :key="index" role="none">
          <a
            :href="link.url"
            class="btn btn--link nav-link"
            :class="`btn--${link.style}`"
            >{{ link.name }}
          </a>
        </li>
      </ul>
    </div>
    <WaverShape />
  </nav>
</template>
<script lang="ts" setup>
/// <reference types="vite-svg-loader" />
import WaverShape from "./WaverShape.vue";
import menuIcon from "../../assets/icons/manu.svg?component";
import {ref} from'vue'
const isNavBarExpanded = ref(true);
const navLink = [
  {
    name: "Strona główna",
    url: "/",
    style: "transparent",
  },
  {
    name: "Kontakt",
    url: "#",
    style: "transparent",
  },
  {
    name: "Social media",
    url: "#",
    style: "transparent",
  },
];
const changeMobileNavigationState = () => {
  isNavBarExpanded.value === true
    ? (isNavBarExpanded.value = false)
    : (isNavBarExpanded.value = true);
};

</script>
<style lang="sass" >
a
  margin-left: auto
  margin-right: auto
.nav-container
  display: flex
  justify-content: center
  align-items: center
  padding: var(--size-fluid-2)
.nav-links,
.nav-wrapper
  display: flex
  align-content: center
  background-color: hsl(var(--primary))
  gap: var(--size-3)
.nav-wrapper
  display: flex
  justify-content: space-around
  height: var(--size-fluid-5)
.nav-links
  display: flex
  justify-content: center
  flex-direction: column
  z-index: 999
  position: absolute
  align-items: center
  transform: translateY(-200%)
  left: 0
  right: 0
  top: var(--size-fluid-5)
  padding: var(--size-3)
  border-bottom: 2px solid hsl(var(--gray))

.btn--menu
  border: none
  padding: 20px
  &[aria-expanded="true"] + .nav-links
    transform: translateY(0)

li[role='none'],.nav-link
  list-style-type: none
  text-align: center
  display: block
  width: 100%

@media (min-width: 900px )
  .nav-links
    transform: translateY(0)
    flex-direction: row
    position: static
    border: none
    padding: 0
    inset: initial
  li[role='none'],.nav-link
    width: initial
    font-size: var(--font-size-0)
  .btn--menu
    display: none
</style>