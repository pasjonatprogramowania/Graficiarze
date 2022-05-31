<template>
  <Title>Poznaj zespół</Title>
  <div class="margin-x--md column gap--md">
    <TeamAvatar
      v-for="(member, i) in memberData"
      :key="`${i}-member`"
      :name="member.name"
      :role="member.role"
      :img="member.img"
      :description="member.description"
    >
    </TeamAvatar>
  </div>
</template>
<script lang="ts">
import TeamAvatar from "./TeamAvatar.vue";
import { defineComponent } from "vue";
import Title from "../Utility/Title.vue";
import { TeamMemberData } from "../../assets/data/teamMember";
export default defineComponent({
  setup() {
    const memberData = TeamMemberData;
    return { memberData };
  },
  components: { Title, TeamAvatar },
});
</script>

<style lang="sass" >
</style>
