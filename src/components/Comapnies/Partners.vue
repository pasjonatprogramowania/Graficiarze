<template>
  <Title>Współpracy z...</Title>
  <div class="companies-grid">
    <Card v-for="(company, i) in companiesData" :key="`${i}-company`">
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
import Title from "../Utility/Title.vue";
import { ZHP, MZDIK, ZWZT, EMITEL, LOP } from "../../assets/data/companies";
const companiesData = [ZHP, MZDIK, ZWZT, EMITEL, LOP];
</script>
<style lang="sass" >
.title--header
  text-align: center
  width: var(--size-fluid-10)
  margin-left: auto
  margin-right: auto
  border-radius: var(--size-3)
  transform: rotate(-2deg)
  box-shadow: var(--shadow-3)
.mobile--column
  @media (max-width:1024px)
    display: flex
    justify-content: center
    flex-direction: column
</style>l