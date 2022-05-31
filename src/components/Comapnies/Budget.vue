<template>
  <Title>Pozyskiwania funduszy</Title>
  <div class="companies-grid companies-grid--budget margin-x--sm">
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
import Title from "../Utility/Title.vue";
import rohis from "../../assets/img/companies/rohis.png";
import { defineComponent } from "vue";
import Card from "../Utility/Card.vue";
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
  components: { Card, Title },
});
</script>
<style lang="sass" >
.companies-grid--budget
  grid-template-rows: 1fr !important
  grid-template-columns: 1fr !important
</style>l