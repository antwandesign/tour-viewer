<template>
  <div class="mt-4">
    <Loading  v-if="loading && store.tour" />
    <RouterView v-else></RouterView>
</div>
</template>
<script setup lang="ts">
import Loading from '@/components/Loading.vue'
import { RouterView, useRoute, useRouter } from "vue-router";
import { getTour } from "@/services/tourService";
import { ref, onMounted, onErrorCaptured } from "vue";
import { useTourStore } from '@/stores/tourStore'
import type { Tour } from "@/types/tour";

//State
const loading = ref(true);
const tour = ref<Tour>();

const router = useRouter()
const route = useRoute();
const tourId = route.params.tourId as string;
const key = route.query.key as string;

const store = useTourStore()

onMounted(async () => {
    //Fetch tour and set state
    try {
        const fetchedTour: Tour = await getTour(tourId, key)
        tour.value = fetchedTour;
        store.addTour(fetchedTour)
        loading.value = false;
    } catch (err) {
        router.push({ path: '/error' })
    }
});

onErrorCaptured(() => {
    router.push({ path: '/error' })
})
</script>

<style>

</style>
