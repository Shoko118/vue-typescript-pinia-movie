<script setup lang="ts">
import { watchEffect } from "vue";
import { useHookState } from "./store/useHookStore";

import Movies from "./components/Movies.vue";
import SearchBar from "./components/SearchBar.vue";

const hookState = useHookState();

watchEffect(() => {
  hookState.fetchMovies();
});
</script>

<template>
  <h1>Movies App</h1>

  <SearchBar />
  <Movies />
</template>
