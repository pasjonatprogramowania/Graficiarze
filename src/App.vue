<template>
  <Index />
</template>

<script lang="ts">
import Index from "./pages/Index.vue";
import { defineComponent } from "vue";
export default defineComponent({
  name: "App",
  components: { Index },
});
</script>