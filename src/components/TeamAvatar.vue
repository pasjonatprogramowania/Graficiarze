<template>
  <div class="column gap--xs">
    <img :src="img" class="img--avatar" alt="" />
    <button
      class="btn btn--primary btn-avatar"
      @click="openDialog(teamMemberData)"
    >
      {{ name }}
    </button>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
export default defineComponent({
  props: { name: String, img: String, teamMemberData: Object },
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
  max-width: 250px
</style>
