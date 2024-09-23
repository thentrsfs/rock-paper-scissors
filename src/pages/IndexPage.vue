<template>
  <q-page class="column flex-center">
    <div
      :class="$q.screen.lt.sm ? 'q-gutter-y-xs' : ' q-gutter-y-lg'"
      class="triangle-bg column flex-center"
    >
      <div :class="$q.screen.lt.sm ? 'row q-gutter-x-xl' : 'row q-gutter-x-xl'">
        <div class="paper-container col flex flex-center">
          <PaperButton @click="decideStore.play('paper')" />
        </div>
        <div class="scissors-container col flex flex-center">
          <ScissorsButton @click="decideStore.play('scissors')" />
        </div>
      </div>
      <div class="rock-container row flex flex-center">
        <RockButton @click="decideStore.play('rock')" />
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { useDecideStore } from "src/stores/decideStore.js";
import ScissorsButton from "components/ScissorsButton.vue";
import RockButton from "components/RockButton.vue";
import PaperButton from "components/PaperButton.vue";
const decideStore = useDecideStore();
</script>
