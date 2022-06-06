<template>
  <Title>Pozyskiwania funduszy</Title>
  <div class="companies-grid companies-grid--budget">
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
<script lang="ts" setup>
import Card from "../Utility/Card.vue";
import { ROHIS } from "../../assets/data/companies";
const companiesData = [ROHIS];
</script>
<style lang="sass">
.companies-grid--budget
  grid-template-rows: 1fr !important
  grid-template-columns: 1fr !important
</style>l