<template>
  <a :href="to" v-if="isExternal" target="_blank"><slot /></a>
  <router-link v-else v-bind="$props"><slot /></router-link>
</template>

<script>
import { RouterLink } from "vue-router";
export default {
  props: { ...RouterLink.props },
  setup(props) {
    function isExternal() {
      return typeof this.to === "string" && this.to.startWith("http");
    }
    return { isExternal };
  },
};
</script>

