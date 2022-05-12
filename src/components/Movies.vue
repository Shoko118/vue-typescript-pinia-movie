<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useHookState } from "../store/useHookStore";

const hookState = useHookState();

const { movies, loading } = storeToRefs(hookState);
</script>

<template>
  <ul v-if="loading" class="pt-20">
    <div class="mx-auto w-[56%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 md:gap-2 lg:gap-3">
      <li v-for="(movie, index) in movies" :key="index">
        <img class="rounded-md" :src="movie.Poster" alt="poster" width="200" height="200" />
        <h2 class="pt-3 font-medium">{{ movie.Title }}</h2>
        <p class="pb-2 font-medium">{{ movie.Year }}</p>
      </li>
    </div>
  </ul>

  <div v-else>
    <p>Loading...</p>
  </div>
</template>
