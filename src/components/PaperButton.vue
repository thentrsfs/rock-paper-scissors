<template>
  <q-btn
    to="/battle"
    :class="$q.screen.lt.sm ? 'paper q-pa-lg' : 'paper q-pa-xl'"
    icon="img:/images/icon-paper.svg"
    :size="$q.screen.lt.sm ? '35px' : '50px'"
    color="white"
    round
  ></q-btn>
</template>
