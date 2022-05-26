<template>
  <div class="bg--gray container--wrapper-team">
    <div class="container-team--solo">
      <h2 class="h2 team--name">Lider</h2>
      <TeamAvatar
        v-for="(member, i) in leaderTeam"
        :avatar="member.avatar"
        :name="member.name"
        :teamMemberData="member.teamMemberData"
        :key="member.name"
        :class="`member-${i}`"
        @openDialog="openDialog"
      ></TeamAvatar>
    </div>
    <div class="container-team">
      <h2 class="h2 team--name">Graficy</h2>
      <TeamAvatar
        v-for="(member, i) in graffitiTeam"
        :avatar="member.avatar"
        :name="member.name"
        :teamMemberData="member.teamMemberData"
        :key="member.name"
        :class="`member-${i}`"
        @openDialog="openDialog"
      ></TeamAvatar>
    </div>
    <div class="container-team">
      <h2 class="h2 team--name">Sociale</h2>
      <TeamAvatar
        v-for="(member, i) in socialTeam"
        :avatar="member.avatar"
        :name="member.name"
        :teamMemberData="member.teamMemberData"
        :key="member.name"
        isDialogOpen
        :class="`member-${i}`"
        @openDialog="openDialog"
      ></TeamAvatar>
    </div>
  </div>
  <GDialog v-model="dialogState">
    <h1>{{ dataToRender }}</h1>
    <DialogContent> </DialogContent>
  </GDialog>
</template>
<script lang="ts">
import TeamAvatar from "./TeamAvatar.vue";
import { ref, defineComponent } from "vue";
import DialogContent from "../Utilities/Dialog.vue";
import {
  PawelSzewczyk,
  AsiaZiolczynska,
  JustynaChojnacka,
  KrzysztofRafalik,
  OparcikGrzegorz,
  RobertMikulski,
  OlgaSzlifirczyk,
} from "../../data/teamData";
export default defineComponent({
  components: { DialogContent, TeamAvatar },
  setup() {
    const dataToRender = ref([]);
    const dialogState = ref(false);
    const socialTeam = ref([KrzysztofRafalik, OparcikGrzegorz, RobertMikulski]);
    const graffitiTeam = ref([
      AsiaZiolczynska,
      JustynaChojnacka,
      OlgaSzlifirczyk,
    ]);
    const leaderTeam = ref([PawelSzewczyk]);
    function openDialog(e) {
      dataToRender.value = e;
      dialogState.value = true;
    }
    return {
      leaderTeam,
      graffitiTeam,
      socialTeam,
      openDialog,
      dialogState,
      dataToRender,
    };
  },
});
</script>
<style lang="sass" >
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
