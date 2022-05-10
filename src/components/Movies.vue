<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useHookState } from "../store/useHookStore";

const hookState = useHookState();

const { movies, loading } = storeToRefs(hookState);
</script>

<template>
  <ul v-if="loading">
    <li v-for="(movie, index) in movies" :key="index">
      <!-- <div>{{ movie }}</div> -->
      <img :src="movie.Poster" alt="poster" width="200" height="200" />
      <h2>{{ movie.Title }}</h2>
      <p>{{ movie.Year }}</p>
    </li>
  </ul>

  <div v-else>
    <p>Loading...</p>
  </div>
</template>
