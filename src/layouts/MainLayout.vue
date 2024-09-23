<template>
  <q-layout class="container">
    <q-header class="bg-transparent flex justify-center">
      <div
        :class="$q.screen.lt.sm ? 'q-mx-lg items-center q-px-md' : ' q-pa-md'"
        class="header q-mt-xl flex justify-between"
      >
        <HeaderLogo />
        <div class="score-container column flex-center">
          <span
            :class="$q.screen.lt.sm ? 'text-caption' : ' text-subtitle1'"
            class="text-bold text-accent"
            >SCORE</span
          >
          <span class="barlow-bold text-h3 text-bold text-dark">{{
            decideStore.score
          }}</span>
        </div>
      </div>
      <q-btn
        @click="decideStore.resetScore"
        class="reset-btn"
        flat
        label="RESET SCORE"
      ></q-btn>
    </q-header>
    <div>
      <q-btn
        class="rules-btn"
        label="RULES"
        color="transparent"
        outline
        text-color="white"
        @click="icon = true"
      />
      <q-dialog v-model="icon" :maximized="$q.screen.lt.sm ? true : false">
        <q-card>
          <q-card-section class="row items-center q-pb-none q-mx-md">
            <div class="text-h4 text-primary barlow-bold">RULES</div>
            <q-space />
            <q-btn
              icon="close"
              color="grey-5"
              size="lg"
              flat
              round
              dense
              v-close-popup
            />
          </q-card-section>

          <q-card-section
            :class="$q.screen.lt.sm ? 'column flex-center' : ''"
            :style="$q.screen.lt.sm ? 'margin-top: 30%' : ''"
          >
            <q-img
              :class="$q.screen.lt.sm ? '' : 'q-ma-md'"
              :width="$q.screen.lt.sm ? '340px' : '400px'"
              src="images/image-rules.svg"
            ></q-img>
          </q-card-section>
        </q-card>
      </q-dialog>
    </div>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { useDecideStore } from "src/stores/decideStore.js";
import { ref } from "vue";
import HeaderLogo from "src/components/HeaderLogo.vue";

const decideStore = useDecideStore();

const icon = ref(false);
</script>
