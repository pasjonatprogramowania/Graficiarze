<template>
  <div class="bg--gray container--wrapper-team">
    <div class="container--team">
      <h3 class="h3 team--name">Sociale</h3>
      <div class="wrapper--avatars">
        <div class="column gap--sm">
          <img src="../img/avatar.jpg" class="img--avatar" alt="" />
          <button class="btn btn--primary btn--team">Lorem Ipsum</button>
        </div>
      </div>
    </div>
    <div class="container--team">
      <h3 class="h3 team--name">Sociale</h3>
      <div class="wrapper--avatars">
        <div class="column gap--sm">
          <img src="../img/avatar.jpg" class="img--avatar" alt="" />
          <button class="btn btn--primary btn--team">Lorem Ipsum</button>
        </div>
        <div class="column gap--sm">
          <img src="../img/avatar.jpg" class="img--avatar" alt="" />
          <button class="btn btn--primary btn--team">Lorem Ipsum</button>
        </div>
      </div>
      <div class="wrapper--avatars">
        <div class="column gap--sm">
          <img src="../img/avatar.jpg" class="img--avatar" alt="" />
          <button class="btn btn--primary btn--team">Lorem Ipsum</button>
        </div>
      </div>
    </div>
    <div class="container--team">
      <h3 class="h3 team--name">Sociale</h3>
      <div class="wrapper--avatars">
        <div class="column gap--sm">
          <img src="../img/avatar.jpg" class="img--avatar" alt="" />
          <button class="btn btn--primary btn--team">Lorem Ipsum</button>
        </div>
        <div class="column gap--sm">
          <img src="../img/avatar.jpg" class="img--avatar" alt="" />
          <button class="btn btn--primary btn--team">Lorem Ipsum</button>
        </div>
      </div>
      <div class="wrapper--avatars">
        <div class="column gap--sm">
          <img src="../img/avatar.jpg" class="img--avatar" alt="" />
          <button class="btn btn--primary btn--team">Lorem Ipsum</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import avatar from "../img/avatar.jpg";
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    const socialTeam = [
      { url: avatar, name: "lorem Ipsum" },
      { url: avatar, name: "lorem Ipsum" },
      { url: avatar, name: "lorem Ipsum" },
    ];
    const graficTeam = [
      { url: avatar, name: "lorem Ipsum" },
      { url: avatar, name: "lorem Ipsum" },
      { url: avatar, name: "lorem Ipsum" },
    ];
    const leaderTeam = [{ url: avatar, name: "lorem Ipsum" }];
    return { socialTeam, graficTeam, leaderTeam };
  },
});
</script>
<style lang="sass">
.container--wrapper-team
  display: flex
  justify-content: space-around
  @media (min-width:900px)
    .container--wrapper-team
      flex-direction: column !important
      justify-content: center !important
.btn--team
  margin-left: auto
  margin-right: auto
.container--team
  padding-bottom: var(--size-4)
  padding-top: var(--size-4)
  display: flex
  flex-direction: column
  gap: var(--size-4)
.wrapper--avatars
  display: flex
  justify-content: space-around
  text-align: center
.team--name
  text-align: center
.img--avatar
  border-radius: 100%
  width: var(--size-fluid-6)
  margin-left: auto
  margin-right: auto
// @media (max-width:900px)
//   .wrapper--avatars
//     flex-direction: column
//     justify-content: center
//     gap: var(--size-fluid-6)
</style>
