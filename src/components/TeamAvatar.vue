<template>
  <div class="column gap--xs">
    <img :src="img" class="img--avatar" alt="" />
    <button class="btn btn--primary btn-avatar" @click="openDialog(name)">
      {{ name }}
    </button>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import Siema from "./Dialog.vue";
export default defineComponent({
  component: { Siema },
  props: { name: String, img: String },
  emits: ["openDialog"],
  setup(props, { emit }) {
    const dialogState = ref(false);
    const openDialog = (e) => {
      emit("openDialog", e);
    };
    return {
      dialogState,
      openDialog,
    };
  },
});
</script>
<style lang="sass" scoped>
.btn-avatar
  margin-left: auto
  margin-right: auto
</style>
