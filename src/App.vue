<script setup lang="ts">
import { watch } from "vue";
import { useHookState } from "./store/useHookStore";
import { storeToRefs } from "pinia";

import Movies from "./components/Movies.vue";
import SearchBar from "./components/SearchBar.vue";

const hookState = useHookState();
const { inputSearch } = storeToRefs(hookState);

// JS Debounce
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
  <div class="bg-slate-500 min-h-screen text-white">
    <div class="mx-auto w-full">
      <h1 class="text-center py-10 text-2xl font-bold">Movies App</h1>

      <SearchBar />
      <Movies />
    </div>
  </div>
</template>
