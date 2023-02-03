<template>
  <Loading v-if="loading" />

  <div v-if="!hasPhotos && !loading">No photos to show...</div>

  <div v-else class="sphere-viewer">
    <div class="flex gap-5 my-5">
      <img
        v-for="photo in hotspots"
        :key="photo.id"
        :src="photo.assets.thumbnail"
        @click="currentPhoto = photo.assets.hd"
      />
    </div>
    <SphereViewer :image="currentPhoto" />
  </div>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import { onBeforeMount, ref } from "vue";
import { getHotspot } from "@/services/tourService";
import SphereViewer from "@/components/SphereViewer.vue";
import Loading from "@/components/Loading.vue";
import type { Hotspot as HotspotDetailed } from "@/types/hotspot";

//Get route parameters
const route = useRoute();
const tourId = route.params.tourId as string;
const hotspotId = route.params.hotspotId as string;
const key = route.query.key as string;

//View state
const hotspots = ref<HotspotDetailed[]>();
const loading = ref(true);
const currentPhoto = ref<string>();
const hasPhotos = ref(false);

onBeforeMount(async () => {
  try {
    //Fetch hotspots
    const res = await getHotspot(tourId, hotspotId, key);

    //Check if there are any photos
    if (res.length <= 0) {
      hasPhotos.value = false;
      loading.value = false;
      return;
    }

    //Sets proper view state
    hotspots.value = res;
    currentPhoto.value = hotspots.value[0].assets.hd;
    loading.value = false;
    hasPhotos.value = true;
  } catch (err) {
    hasPhotos.value = false;
    alert("Something went wrong");
  }
});
</script>
<style></style>
