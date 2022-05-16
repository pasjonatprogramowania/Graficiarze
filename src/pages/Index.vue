<template>
  <MainLayout><About /> </MainLayout>
</template>
<script lang="ts">
import MainLayout from "../layouts/MainLayout.vue";
import About from "../components/About.vue";
import { defineComponent } from "vue";
export default defineComponent({
  components: { MainLayout, About },
});
</script>
<style lang="sass">
</style>