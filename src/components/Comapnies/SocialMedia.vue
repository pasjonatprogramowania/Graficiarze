<template>
  <h2 class="h2 bg--primary title--header p--md">Promocji projektu</h2>
  <div class="grid--social">
    <Card
      v-for="(company, i) in socialMediaData"
      :key="`${i}-media`"
      :class="`img--${i}`"
    >
      <template #company-img>
        <img class="img--companies img--social" :src="company.img" alt="" />
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
import Card from "../Card.vue";
import { defineComponent } from "vue";
import fb from "../../img/companies/fb.png";
import tiktok from "../../img/companies/tiktok.png";
import librus from "../../img/companies/librus.png";
export default defineComponent({
  components: { Card },
  setup() {
    const socialMediaData = [
      {
        img: fb,
        title: "Facebook",
        subtitle:
          "Organizowalismy razem impreze malarska promujaca strefe, oraz konkurs na najlepsze graffiit ktory dotarl do ponad 5tys osób",
      },
      {
        img: tiktok,
        title: "TikTok",
        subtitle:
          "Organizowalismy razem impreze malarska promujaca strefe, oraz konkurs na najlepsze graffiit ktory dotarl do ponad 5tys osób",
      },
      {
        img: librus,
        title: "Librus",
        subtitle:
          "Organizowalismy razem impreze malarska promujaca strefe, oraz konkurs na najlepsze graffiit ktory dotarl do ponad 5tys osób",
      },
    ];
    return { socialMediaData };
  },
});
</script>
<style lang="sass" >
.grid--social
  display: grid
  gap: var(--size-6)
  margin-left: var(--size-8)
  margin-right: var(--size-8)
  grid-template-columns: repeat(3,1fr)
  grid-template-areas: "img1 img2 img3"
  grid-template-rows: 1fr
  @media (max-width: 1024px)
    grid-template-columns: repeat(2,1fr)
    grid-template-rows: repeat(2,1fr)
    grid-template-areas: "img1 img2""img3 img3"

.img--1
  grid-area: img1
.img--2
  grid-area: img2
.img--3
  grid-area: img3
.img--social
  width: var(--size-11)
</style>
