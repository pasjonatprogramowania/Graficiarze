<template>
  <div class="column gap--sm">
    <h2 class="h2 bg--gray title--header p--md">Współpracy z...</h2>
    <div class="wrapper--space bg--primary p--md mobile--column">
      <img class="img--companies" src="../img/zhp.png" alt="" />
      <img class="img--companies" src="../img/mzdik.png" alt="" />
      <img class="img--companies" src="../img/lop.png" alt="" />
      <img class="img--companies" src="../img/zwzt.png" alt="" />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({});
</script>
<style lang="sass">
.img--companies
  object-fit: contain
  filter: grayscale(1)
  &:hover
    filter: grayscale(0)
    transition: 0.5s
  @media (max-width:900px)
    margin: 20px auto
    max-width: 200px
.title--header
  text-align: center
.mobile--column
  @media (max-width:900px)
    display: flex
    justify-content: center
    flex-direction: column
</style>l