<template>
  <nav>
    <div class="nav-wrapper">
      <button
        class="btn--primary btn--menu"
        id="menu-btn"
        @click="changeMobileNavigationState"
        :aria-expanded="isNavBarExpanded"
        aria-label="Otwórz mobilną nawigacje"
      >
        <menuIcon class="nav-icon" />
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
  </nav>
</template>
<script lang="ts">
import menuIcon from "../icons/manu.svg";
import logo from "../icons/logo.svg";
import { defineComponent, ref } from "vue";
export default defineComponent({
  components: { menuIcon, logo },
  setup() {
    const isNavBarExpanded = ref("false");
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
      isNavBarExpanded.value === "false"
        ? (isNavBarExpanded.value = "true")
        : (isNavBarExpanded.value = "false");
    };

    return { navLink, isNavBarExpanded, changeMobileNavigationState };
  },
});
</script>
<style lang="sass">
@import '../styles/navbar.sass'
</style>