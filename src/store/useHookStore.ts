import { defineStore } from "pinia";
import type { MoviesType } from "../interface/interface";

const MY_API_KEY: string = "82b530a1";

export interface RootState {
  movies: MoviesType[];
  inputSearch: string;
  loading: boolean;
}

export const useHookState = defineStore({
  id: "hookState",
  state: () =>
    ({
      inputSearch: "",
      loading: true,
      movies: [],
    } as RootState),

  getters: {},

  actions: {
    async fetchMovies() {
      try {
        this.loading = false;
        const api = `https://www.omdbapi.com/?s=${this.inputSearch}&apikey=${MY_API_KEY}`;
        const res = await fetch(api);
        const data = await res.json();
        console.log("THE DATA", data);

        this.movies = data.Search;
        this.loading = true;
      } catch (err) {
        console.log("This is the err", err);
      }
    },
    handleSearch() {
      if (this.loading === false) return;

      this.inputSearch = this.inputSearch;

      this.loading = true;
    },
  },
});
