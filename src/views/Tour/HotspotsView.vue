<template>

    <Loading v-if="loading && store.tour" />

  <div v-if="!hasPhotos && !loading">No photos to show...</div>

  <div v-else class="sphere-viewer">
    <div class="flex gap-5 my-5">
        <img v-for="hotspot in hotspots" :src="hotspot.assets.thumbnail" @click="currentPhoto = hotspot.assets.hd">
    </div>
    <SphereViewer :image="currentPhoto || ''"/>
  </div>
</template>
<script setup lang="ts">
import { useTourStore } from '@/stores/tourStore';
import { useRoute } from 'vue-router';
import { onMounted, ref } from 'vue';
import { getHotspot } from '@/services/tourService'
import SphereViewer from '@/components/SphereViewer.vue'
import Loading from '@/components/Loading.vue'
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
const currentPhoto = ref<string>()
const hasPhotos = ref(false)

onMounted(async () => {
    const res = await getHotspot(tourId, hotspotId, key)
    if (res.length <= 0) {
        hasPhotos.value = false
        loading.value = false
        return
    }
    hotspots.value = res
    currentPhoto.value = hotspots.value[0].assets.hd
    loading.value = false
    hasPhotos.value = true
})

</script>
<style>

</style>