<template>
  <div class="mt-4">
    <Loading  v-if="loading && store.tour" />
    <RouterView v-else></RouterView>
</div>
</template>
<script setup lang="ts">
import Loading from '@/components/Loading.vue'
import { RouterView, useRoute } from "vue-router";
import { getTour } from "@/services/tourService";
import { ref, onMounted } from "vue";
import { useTourStore } from '@/stores/tourStore'
import type { Tour } from "@/types/tour";

const loading = ref(true);
const tour = ref<Tour>();

const route = useRoute();
const tourId = route.params.tourId as string;
const key = route.query.key as string;

const store = useTourStore()

onMounted(async () => {
    //Fetch tour and set state
    const fetchedTour: Tour = await getTour(tourId, key)
    tour.value = fetchedTour;
    store.addTour(fetchedTour)
    loading.value = false;
});
</script>

<style>

</style>
