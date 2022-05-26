<template>
  <h2 class="h2 bg--primary title--header p--md">Pozyskiwania funduszy</h2>
  <div class="grid--budget">
    <Card
      v-for="(company, i) in companiesData"
      :key="`${i}-budget`"
      class="card--budget"
    >
      <template #company-img>
        <img class="img--companies" :src="company.img" alt="" />
      </template>
      <template #company-title>
        <h1 class="h3 container-card--title">{{ company.title }}</h1>
      </template>
      <template #company-subtitle>
        <p class="bg--gradient container-card--subtitle">
          {{ company.subtitle }}
        </p>
      </template>
    </Card>
  </div>
</template>
<script lang="ts">
import rohis from "../../img/companies/rohis.png";
import { defineComponent } from "vue";
import Card from "../Utilities/Card.vue";
export default defineComponent({
  setup() {
    const companiesData = [
      {
        img: rohis,
        title: "ROHiS",
        subtitle:
          "Z harcerskiego funduszu ROHiS pozyskaliśmy 1200zł na realizacje imprezy malarskiej w naszej strefie",
      },
    ];
    return { companiesData };
  },
  components: { Card },
});
</script>
<style lang="sass" >
.grid--budget
  display: grid
  gap: var(--size-6)
  margin-left: var(--size-8)
  margin-right: var(--size-8)
  grid-template-rows: 1fr
  grid-template-columns: 1fr
</style>l