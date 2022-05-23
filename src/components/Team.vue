<template>
  <div class="bg--gray container--wrapper-team">
    <div class="container--team">
      <h3 class="h3 team--name">Lider</h3>
      <div class="wrapper--avatars gap--xs">
        <div class="column gap--xs">
          <img src="../img/avatar.jpg" class="img--avatar" alt="" />
          <button class="btn btn--primary" @click="dialogState = true">
            Paweł Szewczyk
          </button>
        </div>
      </div>
    </div>
    <div class="container--team">
      <h3 class="h3 team--name">Graficy</h3>
      <div class="wrapper--avatars gap--xs">
        <div class="column gap--xs">
          <img src="../img/avatar.jpg" class="img--avatar" alt="" />
          <button class="btn btn--primary" @click="dialogState = true">
            Asia Ziółczyńska
          </button>
        </div>
        <div class="wrapper--avatars gap--xs">
          <div class="column gap--xs">
            <img src="../img/avatar.jpg" class="img--avatar" alt="" />
            <button class="btn btn--primary" @click="dialogState = true">
              Justyna Chojnacka
            </button>
          </div>
        </div>
      </div>
      <div class="wrapper--avatars gap--xs">
        <div class="column gap--xs">
          <img src="../img/avatar.jpg" class="img--avatar" alt="" />
          <button class="btn btn--primary" @click="dialogState = true">
            Olga Szlifirczyk
          </button>
        </div>
      </div>
    </div>
    <div class="container--team">
      <h3 class="h3 team--name">Sociale</h3>
      <div class="wrapper--avatars gap--xs">
        <div class="column gap--xs">
          <img src="../img/avatar.jpg" class="img--avatar" alt="" />
          <button class="btn btn--primary" @click="dialogState = true">
            Krzysztof Rafalik
          </button>
        </div>
        <div class="wrapper--avatars gap--xs">
          <div class="column gap--xs">
            <img src="../img/avatar.jpg" class="img--avatar" alt="" />
            <button class="btn btn--primary" @click="dialogState = true">
              Oparcik Grzegorz
            </button>
          </div>
        </div>
      </div>
      <div class="wrapper--avatars gap--xs">
        <div class="column gap--xs">
          <img src="../img/avatar.jpg" class="img--avatar" alt="" />
          <button class="btn btn--primary" @click="dialogState = true">
            Robert Mikulski
          </button>
        </div>
      </div>
    </div>
  </div>
  <GDialog v-model="dialogState">
    <Siema></Siema>
  </GDialog>
</template>
<script lang="ts">
import TeamAvatar from "./TeamAvatarContent.vue";
import { ref, defineComponent } from "vue";
import Siema from "./Dialog.vue";
import avatar from "../img/avatar.jpg";
export default defineComponent({
  components: { Siema },
  setup() {
    const dialogState = ref(false);
    return {
      dialogState,
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
  padding-top: var(--size-10)
  padding-bottom: var(--size-10)
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
</style>
