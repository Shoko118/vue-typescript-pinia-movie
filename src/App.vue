<script setup lang="ts">
import { watch, watchEffect } from "vue";
import { useHookState } from "./store/useHookStore";

import Movies from "./components/Movies.vue";
import SearchBar from "./components/SearchBar.vue";
import { storeToRefs } from "pinia";

const hookState = useHookState();
const { inputSearch } = storeToRefs(hookState);

const debounce = (callback: any, time: number) => {
  let timeout: number;
  return () => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      callback();
    }, time);
  };
};

const fetchMoviesDebounce = debounce(hookState.fetchMovies, 2000);

watch(inputSearch, () => {
  fetchMoviesDebounce();
});
</script>

<template>
  <h1>Movies App</h1>

  <SearchBar />
  <Movies />
</template>
