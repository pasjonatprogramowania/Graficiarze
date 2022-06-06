<template>
  <Title>Pozowania do zdjęć</Title>
  <Placat
    v-for="(placat, i) in placatData"
    :description="placat.description"
    :name="placat.name"
    :img="placat.img"
    :key="`placat-${i}`"
  />
  <template> </template>
</template>
<script lang="ts" setup>
import Title from "./Utility/Title.vue";
import Placat from "./Utility/Placat.vue";
import {
  RDHS24,
  RDHS34,
  RDHS15,
  RDW1,
  EMITELPLACAT,
  ZHPMALOWANIE,
} from "../assets/data/gallery";
const placatData = [RDHS24, RDHS34, RDHS15, RDW1, EMITELPLACAT, ZHPMALOWANIE];
</script>

