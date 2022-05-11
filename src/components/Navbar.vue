<template>
  <nav>
    <div class="nav-wrapper">
      <button
        class="btn btn--menu"
        id="menu-btn"
        @click="isNavBarExpanded === 'false' ? 'true' : 'false'"
        :aria-expanded="isNavBarExpanded"
        aria-label="Otwórz mobilną nawigacje"
      >
        <menuIcon style="width: 25px; height: 25px" />
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
<script>
import menuIcon from "../icons/manu.svg";
import { defineComponent, ref } from "vue";
export default defineComponent({
  components: { menuIcon },
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

    return { navLink, isNavBarExpanded };
  },
});
</script>
<style lang="sass">
@import '../styles/navbar.sass'
</style>