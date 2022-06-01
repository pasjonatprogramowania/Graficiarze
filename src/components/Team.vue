<template>
  <Title>Poznaj zespół</Title>
  <div class="column gap--md">
    <TeamAvatar
      v-for="(member, i) in memberData"
      :key="`${i}-member`"
      :name="member.name"
      :role="member.role"
      :img="member.img"
      :description="member.description"
      :teamPlacat="true"
    >
    </TeamAvatar>
  </div>
</template>
<script lang="ts" setup>
import TeamAvatar from "./Utility/Placat.vue";
import Title from "./Utility/Title.vue";
import { TeamMemberData } from "../assets/data/teamMember";

const memberData = TeamMemberData;
</script>