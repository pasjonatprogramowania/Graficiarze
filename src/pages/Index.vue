<template>
  <MainLayout> <Footer /></MainLayout>
</template>
<script lang="ts">
import MainLayout from "../layouts/MainLayout.vue";
import Footer from "../components/Footer.vue";
import { defineComponent } from "vue";
export default defineComponent({
  components: { MainLayout, Footer },
});
</script>
<style lang="sass">
@import "../styles/index.sass"
</style>