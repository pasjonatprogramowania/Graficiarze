<template>
  <div class="wrapper gap--sm">
    <div class="title-container--about gap--sm">
      <TextField>
        <h2 class="h2">O co chodzi?</h2>
        <p class="text-about">
          Zauważyliśmy ze w naszym mieście jest duży problem odnośnie
          nielegalnych graffiti. Zaśmiecają one przestrzeń i niszczą otoczenie.
          Aby walczyć z tym planujemy stworzyć razem strefę graffiti free gdzie
          każdy legalnie będzie mógł malować. Ma ona na celu dac ludziom legalne
          miejsce gdzie będą mogli sie wyszaleć, zamiast robić to tam gdzie byc
          to nie powinno
        </p>
      </TextField>
      <div class="img--arrow-video">
        <Arrow />
      </div>
      <div class="container-about--btn-video">
        <videoIcon class="icon--lg icon--video" />
        <button
          class="btn btn--primary"
          @click="isDialogShowed = !isDialogShowed"
        >
          Zajawka o nas
        </button>
      </div>
    </div>
  </div>
  <GDialog v-model="isDialogShowed" @blur="isDialogShowed = false">
    <div class="dialog-player">
      <Artplayer :option="videoOption" :style="videoStyle"></Artplayer>
    </div>
  </GDialog>
</template>
<script lang='ts' setup>
import Artplayer from "./Utility/Artplayer.vue";
import { ref } from "vue";
import video from "../assets/videos/promo.mp4";
import Arrow from "../assets/img/arrows/arrow-video.svg?component";
import videoIcon from "../assets/img/About/video.svg?component";
import TextField from "./Utility/TextField.vue";
const isDialogShowed = ref(false);
const videoOption = {
  container: ".artplayer-app",
  url: video,
};
const videoStyle = {
  width: "70vw",
  height: "500px",
};
</script>
<style lang="sass" scoped>
.dialog-player
  display: grid
  place-items: center
  padding: var(--size-fluid-4)
.icon--video
  margin-right: auto
  margin-left: auto
.container-about--btn-video
  display: flex
  flex-direction: column
  justify-content: center
  margin-right: auto
.title-container--about
  display: flex
  flex-direction: column
.img--arrow-video
  display: flex
  justify-content: center
</style>