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
<script lang="ts" setup>
import Title from "../Utility/Title.vue";
import Card from "../Utility/Card.vue";
import { FB, TIKTOK, LIBRUS } from "../../assets/data/companies";

const socialMediaData = [FB, TIKTOK, LIBRUS];
</script>

