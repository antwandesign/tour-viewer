<template>
  <ul>
    <li v-for="hotspot in hotspots" :key="hotspot.id">
      <RouterLink
        class="link"
        :to="{
          name: 'hotspots',
          params: { hotspotId: hotspot.id },
          query: { key: 'IgSjubq3amMafYhP6EL18KAexCqTnZWQ' },
        }"
        >{{ hotspot.name }}</RouterLink
      >
    </li>
  </ul>
  <FloorplanViewer v-if="floorplan" :image="floorplan" :hotspots="hotspots" />
</template>
<script setup lang="ts">
import { useTourStore } from "@/stores/tourStore";
import { useRoute, useRouter } from "vue-router";
import { onMounted } from "vue";
import type { Hotspot, Structure } from "@/types/tour";
import FloorplanViewer from "@/components/FloorplanViewer.vue";

const route = useRoute();
const router = useRouter();
const floorId = route.params.floorId;

const store = useTourStore();
const tour = store.tour;

//Get hotspots for current floor
const structures = tour?.structure.find((el: Structure) => el.id == floorId);
const hotspots: Hotspot[] = structures?.hotspots as Hotspot[];
const floorplan = tour?.structure[0].floor_plan as string;

//Dirty fix for browser refresh problem
//Should be implemented better
onMounted(() => {
  if (!floorplan) {
    router.push({ name: "home" });
  }
});
</script>
