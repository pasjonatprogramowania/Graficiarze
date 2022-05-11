<template>
  <footer>
    <small>Copyright Graficiarze © 2021 - {{ curruentYear }}</small>
  </footer>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  setup() {
    const curruentYear = new Date().getFullYear();
    return { curruentYear };
  },
});
</script>
