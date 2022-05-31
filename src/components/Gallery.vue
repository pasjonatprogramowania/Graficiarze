<template>
  <Title>Pozowania do zdjęć</Title>
  <Placat
    v-for="(placat, i) in placatData"
    :description="placat.description"
    :name="placat.name"
    :img="placat.img"
    :key="`placat-${i}`"
  />
</template>
<script lang="ts">
import { defineComponent } from "vue";
import Title from "./Utility/Title.vue";
import EmitelPlacat from "../assets/img/gallery/emitel-plakat.jpg";
import ZhpMalowanie from "../assets/img/gallery/zhp-malowanie.png";
import Placat from "./Utility/Placat.vue";
import RDHS34 from "../assets/img/gallery/34RDHS.jpg";
import RDW1 from "../assets/img/gallery/1RDW.jpg";
import RDHS15 from "../assets/img/gallery/15RDHS.jpg";
import RDHS24 from "../assets/img/gallery/24RDHS.jpg";
export default defineComponent({
  components: { Title, Placat },
  setup() {
    const placatData = [
      {
        img: EmitelPlacat,
        name: "Miasto Jutra",
        description:
          "Nasz zespół został wybrany jako przyklad realizacji pracy z emitelem",
      },
      {
        img: ZhpMalowanie,
        name: "CoZaDzien",
        description: "Relacja z naszego wydarzenia trafiła na co za dzień",
      },
      {
        img: RDHS34,
        name: "CoZaDzien",
        description: "Relacja z naszego wydarzenia trafiła na co za dzień",
      },
      {
        img: RDHS15,
        name: "CoZaDzien",
        description: "Relacja z naszego wydarzenia trafiła na co za dzień",
      },
      {
        img: RDHS24,
        name: "CoZaDzien",
        description: "Relacja z naszego wydarzenia trafiła na co za dzień",
      },
      {
        img: RDW1,
        name: "CoZaDzien",
        description: "Relacja z naszego wydarzenia trafiła na co za dzień",
      },
    ];
    return { placatData };
  },
});
</script>

