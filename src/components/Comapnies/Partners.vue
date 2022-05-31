<template>
  <Title>Współpracy z...</Title>
  <div class="companies-grid margin-x--sm">
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
<script lang="ts">
import { defineComponent } from "vue";
import emitel from "../../assets/img/companies/emitel.png";
import zhp from "../../assets/img/companies/zhp.png";
import mzdik from "../../assets/img/companies/mzdik.png";
import lop from "../../assets/img/companies/lop.png";
import zwzt from "../../assets/img/companies/zwzt.png";
import Card from "../Utility/Card.vue";
import Title from "../Utility/Title.vue";

export default defineComponent({
  setup() {
    const companiesData = [
      {
        img: zhp,
        title: "Hufiec Radom-Miasto",
        subtitle:
          "Organizowalismy razem impreze malarska promujaca strefe, oraz konkurs na najlepsze graffiit ktory dotarl do ponad 5tys osób",
      },
      {
        img: emitel,
        title: "Emitel",
        subtitle:
          "Dzieki wsparciu organizacji LOP, uzyskalismy potrzebne osobowość prawno do uzyskania pozwolenia na urzytek sciany od miasta",
      },
      {
        img: lop,
        title: "Liga Ochrony Przyrody",
        subtitle:
          "Dzieki wsparciu organizacji LOP, uzyskalismy potrzebne osobowość prawno do uzyskania pozwolenia na urzytek sciany od miasta",
      },
      {
        img: mzdik,
        title: "Miejski zarząd dróg i komunikacji",
        subtitle:
          "Udzieliło nam pozwolenia na uzytek scian przejscia podziemnego na Grzecznarowskiego jako strefe graffiti free  ",
      },
      {
        img: zwzt,
        title: "Zwolnieni z teorii",
        subtitle:
          "Otrzymalismy wsparcie merytoryczne, szkolenia z zakresu zarzadzania projektem, oraz promocji projektu w social mediach ",
      },
    ];
    return { companiesData };
  },
  components: { Card, Title },
});
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