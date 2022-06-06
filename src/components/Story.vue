<template>
  <div class="margin-x--lg">
    <div class="column gap--sm">
      <div class="column--start gap--sm">
        <TextField v-motion-slide-visible-once-left>
          <h2 class="h2">Jaki był nasz cel?</h2>
          <p class="text-about">
            Uświadomić młodzież szkolną, rodziny z dziećmi oraz młodych ludzi .
            O problemie nielegalnych graffiti w mieście i tego, że zaśmiecają
            one przestrzeń. Chcemy też pokazać ze najlepsza forma walki z tym
            nie jest zakazanie tego a zezwolenie na malowanie ich pod pewnymi
            warunkami
          </p>
        </TextField>
        <arrowRight v-motion-slide-visible-once-left />
      </div>
      <div class="column--end gap--sm">
        <TextField v-motion-slide-visible-once-right>
          <h2 class="h2">Kampania społeczna</h2>
          <p class="text-about">
            Ważnym elementem naszej kampanii społecznej jest komunikacja ze
            światem. Do niej wybraliśmy platformy TikTok oraz Facebook.
          </p>

          <Applink
            class="btn btn--primary"
            to="https://www.facebook.com/Graficiarze-103530272184705"
            >Nasze Sociale</Applink
          >
        </TextField>
        <arrowLeft v-motion-slide-visible-once-right />
      </div>
      <div class="column--start gap--sm">
        <TextField v-motion-slide-visible-once-left>
          <h2 class="h2">Czego sie nauczyliśmy?</h2>
          <p class="text-about">
            Tworzenie projektu społecznego to duże wyzwanie, wymagało to od nas
            zmierzenia sie z wieloma realnymi problemami. Należały do nich np:
            Organizacja czasu przez członków na projekt, podział zadań, brak
            jasnego planu od początku z kim możemy współpracować czy skąd
            weźmiemy fundusze. Jednak po pokonaniu tych wszystkich problemów
            wiemy juz jak:
          </p>
        </TextField>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
/// <reference types="vite-svg-loader" />
import Applink from "./Utility/Applink.vue";
import arrowLeft from "../assets/img/arrows/arrow-story-left.svg?component";
import arrowRight from "../assets/img/arrows/arrow-story-right.svg?component";
import TextField from "./Utility/TextField.vue";
</script>
