import { defineStore } from "pinia";
import type { Tour } from "@/types/tour";

export const useTourStore = defineStore("tour", {
  state: () => {
    return {
      tour: null as Tour | null,
    };
  },
  actions: {
    addTour(tour: Tour) {
      this.tour = tour;
    },
  },
});
