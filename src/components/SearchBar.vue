<script setup lang="ts">
import { useHookState } from "../store/useHookStore";

const hookState = useHookState();
</script>

<template>
  <div class="mx-auto text-center">
    <h1 class="py-5 text-xl font-semibold">Welcome to the searching your favourite movies</h1>
    <input
      class="w-[50%] p-2 focus:outline-none text-black"
      type="text"
      placeholder="search a movie"
      v-model="hookState.inputSearch"
      @keyup.enter="hookState.handleSearch"
    />
    <button class="ml-4 px-3 py-2 bg-gray-700 rounded-md hover:bg-gray-600" @click.prevent="hookState.handleSearch">
      Search
    </button>
  </div>
</template>
