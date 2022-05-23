<template>
  <div class="bg--gray container--wrapper-team">
    <div class="container-team--solo">
      <h3 class="h3 team--name">Lider</h3>
      <TeamAvatar
        v-for="(member, i) in leaderTeam"
        :img="member.img"
        :name="member.name"
        :key="member.name"
        :class="`member-${i}`"
        @openDialog="openDialog"
      ></TeamAvatar>
    </div>
    <div class="container-team">
      <h3 class="h3 team--name">Graficy</h3>
      <TeamAvatar
        v-for="(member, i) in graffitiTeam"
        :img="member.img"
        :name="member.name"
        :key="member.name"
        :class="`member-${i}`"
        @openDialog="openDialog"
      ></TeamAvatar>
    </div>
    <div class="container-team">
      <h3 class="h3 team--name">Sociale</h3>
      <TeamAvatar
        v-for="(member, i) in socialTeam"
        :img="member.img"
        :name="member.name"
        :key="member.name"
        isDialogOpen
        :class="`member-${i}`"
        @openDialog="openDialog"
      ></TeamAvatar>
    </div>
  </div>
  <GDialog v-model="dialogState">
    <Siema
      ><h1>{{ kot }}</h1></Siema
    >
  </GDialog>
</template>
<script lang="ts">
import TeamAvatar from "./TeamAvatar.vue";
import { ref, defineComponent } from "vue";
import Siema from "./Dialog.vue";
import img from "../img/avatar.jpg";
export default defineComponent({
  components: { Siema, TeamAvatar },
  setup() {
    const dialogState = ref(false);
    const socialTeam = ref([
      { img: img, name: "Krzysztof Rafalik" },
      { img: img, name: "Oparcik Grzegorz" },
      { img: img, name: "Robert Mikulski" },
    ]);
    const graffitiTeam = ref([
      { img: img, name: "Asia Ziółczyńska" },
      { img: img, name: "Justyna Chojnacka" },
      { img: img, name: "Olga Szlifirczyk" },
    ]);
    const kot = ref("");
    const leaderTeam = ref([{ img: img, name: "Paweł Szewczyk" }]);
    function openDialog(e) {
      switch (e) {
        case "Krzysztof Rafalik":
          kot.value = "aaa";
        case "Oparcik Grzegorz":
          kot.value = "ccc";
        case "Robert Mikulski":
        case "Asia Ziółczyńska":
        case "Justyna Chojnacka":
        case "Olga Szlifirczyk":
        case "Paweł Szewczyk":
      }
      dialogState.value = true;
    }
    return {
      leaderTeam,
      graffitiTeam,
      socialTeam,
      openDialog,
      dialogState,
      kot,
    };
  },
});
</script>
<style lang="sass">
@media (max-width:1224px)
  .container--wrapper-team
    flex-direction: column
    justify-content: center
.container--wrapper-team
  display: flex
  justify-content: space-around
  clip-path: polygon(0 10%, 100% 0, 100% 90%, 0 100%)
  padding: var(--size-12) var(--size-8)
  gap: var(--size-6)
.container-team
  display: grid
  gap: var(--size-2)
  grid-template-columns: repeat(2,1fr)
  grid-template-rows: 100px repeat(2,1fr)
  grid-template-areas: "name name" "member0 member1" "member2 member2"
  &--solo
    display: grid
    gap: var(--size-2)
    grid-template-columns: repeat(2,1fr)
    grid-template-rows: 100px 1fr
    grid-template-areas: "name name" "member0 member0"
.member-0
  grid-area: member0
.member-1
  grid-area: member1
.member-2
  grid-area: member2
.team--name
  text-align: center
  grid-area: name
.wrapper--avatars
  display: flex
  justify-content: space-around
  text-align: center

.img--avatar
  border-radius: 100%
  width: var(--size-fluid-6)
  margin-left: auto
  margin-right: auto
</style>
