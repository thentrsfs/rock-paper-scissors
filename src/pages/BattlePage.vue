<template>
  <q-page
    :class="$q.screen.lt.sm ? 'flex justify-center' : 'flex flex-center'"
    :style="$q.screen.lt.sm ? 'column-gap: 40px' : 'column-gap: 120px'"
  >
    <div
      :class="$q.screen.lt.sm ? 'column reverse self-start mobile-picks' : ''"
    >
      <p
        :class="$q.screen.lt.sm ? 'text-h6 q-mt-md' : 'text-h4'"
        class="text-bold text-white text-center q-mb-xl"
      >
        YOU PICKED
      </p>
      <div
        :class="
          decideStore.playerChoice === 'scissors'
            ? 'scissors-container'
            : decideStore.playerChoice === 'rock'
            ? 'rock-container'
            : 'paper-container'
        "
      >
        <ScissorsButton
          :ripple="false"
          :size="$q.screen.lt.sm ? '30px' : '100px'"
          v-if="decideStore.playerChoice === 'scissors'"
        />
        <RockButton
          :ripple="false"
          :size="$q.screen.lt.sm ? '30px' : '100px'"
          v-else-if="decideStore.playerChoice === 'rock'"
        />
        <PaperButton
          :ripple="false"
          :size="$q.screen.lt.sm ? '30px' : '100px'"
          v-else-if="decideStore.playerChoice === 'paper'"
        />
      </div>
    </div>
    <div
      v-if="decideStore.result"
      class="column text-center result"
      style="width: 215px; letter-spacing: 2px"
    >
      <p class="text-h3 text-bold text-white" style="letter-spacing: 2px">
        {{ decideStore.resultMessage }}
      </p>
      <q-btn
        to="/"
        @click="decideStore.resetGame"
        label="PLAY AGAIN"
        color="white"
        text-color="red"
        style="border-radius: 8px"
        size="lg"
        :ripple="false"
      ></q-btn>
    </div>
    <div
      :class="
        $q.screen.lt.sm
          ? 'column reverse self-start items-center mobile-picks'
          : ''
      "
    >
      <p
        v-if="decideStore.computerChoice"
        :class="$q.screen.lt.sm ? 'text-h6 q-mt-md' : 'text-h4'"
        class="text-bold text-white text-center q-mb-xl"
      >
        THE HOUSE PICKED
      </p>
      <div
        :class="
          decideStore.computerChoice === 'scissors'
            ? 'scissors-container'
            : decideStore.computerChoice === 'rock'
            ? 'rock-container'
            : decideStore.computerChoice === 'paper'
            ? 'paper-container'
            : 'empty-container'
        "
      >
        <div
          :class="$q.screen.lt.sm ? ' column reverse items-center' : ''"
          v-if="!decideStore.computerChoice"
        >
          <p
            :class="$q.screen.lt.sm ? 'text-h6' : 'text-h4'"
            class="text-bold text-white text-center"
            :style="$q.screen.lt.sm ? '' : 'margin-bottom: 105px'"
          >
            THE HOUSE PICKED
          </p>
          <div class="empty-space"></div>
        </div>
        <ScissorsButton
          :ripple="false"
          :size="$q.screen.lt.sm ? '30px' : '100px'"
          v-if="decideStore.computerChoice === 'scissors'"
        />
        <RockButton
          :ripple="false"
          :size="$q.screen.lt.sm ? '30px' : '100px'"
          v-else-if="decideStore.computerChoice === 'rock'"
        />
        <PaperButton
          :ripple="false"
          :size="$q.screen.lt.sm ? '30px' : '100px'"
          v-else-if="decideStore.computerChoice === 'paper'"
        />
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
