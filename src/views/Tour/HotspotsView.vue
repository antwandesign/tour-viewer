<template>
  <div v-if="loading && store.tour" class="loading ">
    <div class="loading-container">
    <svg viewBox="0 0 1024 1024" class="animate-spin h-20 w-20 mr-3 fill-white">
      <path
        fill="ffffff"
        d="M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 0 0-94.3-139.9 437.71 437.71 0 0 0-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z"
      />
    </svg>
    </div>
  </div>
  {{ hotspots }}
</template>
<script setup lang="ts">
import { useTourStore } from '@/stores/tourStore';
import { useRoute } from 'vue-router';
import { onMounted, ref } from 'vue';
import { getHotspot } from '@/services/tourService'
import type { Structure, Hotspot } from '@/types/tour';
import type { Hotspot as HotspotDetailed } from '@/types/hotspot'

//Get route parameters
const route = useRoute()
const tourId = route.params.tourId as string
const floorId = route.params.floorId
const hotspotId = route.params.hotspotId as string
const key = route.query.key as string;

//Get tour store
const store = useTourStore()
const tour = store.tour

//Get current structure and hotspot
const structure = tour?.structure.find((el: Structure) => el.id == floorId)
const hotspot = structure?.hotspots.find((el: Hotspot) => el.id == hotspotId)

//View state
const hotspots = ref<HotspotDetailed[]>()
const loading = ref(true)


onMounted(async () => {
    hotspots.value = await getHotspot(tourId, hotspotId, key)
    loading.value = false
})
</script>
<style>

</style>