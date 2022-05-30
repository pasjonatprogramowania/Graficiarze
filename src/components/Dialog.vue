<template>
  <div class="wrapper vertical-mid">
    <img :src="dataToRender.portfolioImg" alt="" />
    <div>
      <h3 class="h3">{{ dataToRender.name }}</h3>
      <p>{{ dataToRender.description }}</p>
    </div>
  </div>
  <div>
    <div class="column">
      <ExperianceAndHobbyBar />
      <div class="wrapper vertical-mid">
        <div class="column">
          <h3 class="h3">Zainteresowania</h3>
          <ul>
            <li v-for="(hobby, i) in dataToRender.hobby" :key="i">
              {{ hobby }}
            </li>
          </ul>
        </div>
        <div class="column">
          <h3 class="h3">Doswiadczenie</h3>
          <div class="wrapper">
            <div v-for="(exp, i) in dataToRender.experience" :key="i">
              <h4 class="h4">{{ exp.date }}</h4>
              <p>{{ exp.text }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="column">
      <EducationaAndSkillsBar />
      <div class="wrapper vertical-mid">
        <div class="column">
          <h3 class="h3">Wykształcenie</h3>
          <ul>
            <li
              v-for="(education, i) in dataToRender.education"
              :key="`education-${i}`"
            >
              {{ education }}
            </li>
          </ul>
        </div>
        <div class="column">
          <h3 class="h3">Umiejętności</h3>
          <div class="wrapper">
            <div v-for="(skill, i) in dataToRender.skills" :key="`skill-${i}`">
              <h4 class="h4">{{ skill.name }}</h4>
              <p>{{ skill.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <div>
      <CertyficateBar />
      <div
        v-for="(certyfiact, i) in dataToRender.certyfiactes"
        :key="`certyfiact-${i}`"
      >
        <img :src="certyfiact" alt="" />
      </div>
    </div>
    <div>
      <OtherBar />
      <div v-for="(other, i) in dataToRender.others" :key="`other-${i}`">
        {{ other.name }}
        <img :src="other.img" alt="" />
      </div>
    </div> -->
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import ExperianceAndHobbyBar from "../img/portfolio/ExperienceAndHobbyBar.svg";
import CertyficateBar from "../img/portfolio/CertyficatesBar.svg";
import EducationaAndSkillsBar from "../img/portfolio/EducationaAndSkillsBar.svg";
import OtherBar from "../img/portfolio/OtherBar.svg";
export default defineComponent({
  components: {
    ExperianceAndHobbyBar,
    EducationaAndSkillsBar,
    CertyficateBar,
    OtherBar,
  },
  props: { dataToRender: Object },
  setup() {},
});
</script>
<style lang="sass">
.vertical-mid
  display: grid
  grid-template-rows: repeat(4,1fr)
  justify-content: space-around
  align-items: center
  gap: var(--size-6)

</style>
