<template>
  <Title>Promocji projektu</Title>
  <div class="companies-grid">
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
import Title from "../Utility/Title.vue";
import Card from "../Utility/Card.vue";
import { defineComponent } from "vue";
import fb from "../../assets/img/companies/fb.png";
import tiktok from "../../assets/img/companies/tiktok.png";
import librus from "../../assets/img/companies/librus.png";
export default defineComponent({
  components: { Card, Title },
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
.img--social
  width: var(--size-11)
</style>
