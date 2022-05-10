<script setup lang="ts">
import { useHookState } from "../store/useHookStore";

const hookState = useHookState();
</script>

<template>
  <h1>THIS IS THE INPUT SEARCH BAR</h1>
  <input type="text" placeholder="enter a movie" v-model="hookState.inputSearch" />
  <button @click.prevent="hookState.handleSearch">Search</button>
</template>
