<script setup lang="ts">
import { watchEffect } from "vue";
import { useHookState } from "./store/useHookStore";

import Movies from "./components/Movies.vue";

const hookState = useHookState();

watchEffect(() => {
  hookState.fetchMovies();
});
</script>

<template>
  <h1>Movies App</h1>

  <!-- search bar -->
  <!-- loops for movies -->
  <Movies />
</template>
