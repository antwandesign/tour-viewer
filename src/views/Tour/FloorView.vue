<template>
    <ul>
        <li v-for="hotspot in hotspots">
            <RouterLink class="link" :to="{ name: 'hotspots', params: { hotspotId: hotspot.id }, query: { key: 'IgSjubq3amMafYhP6EL18KAexCqTnZWQ' } }">{{ hotspot.name }}</RouterLink>
        </li>
    </ul>
</template>
<script setup lang="ts">
import { useTourStore } from '@/stores/tourStore';
import { useRoute } from 'vue-router';
import type { Hotspot, Structure } from '@/types/tour';

const route = useRoute()
const floorId = route.params.floorId

const store = useTourStore()
const tour = store.tour

//Get hotspots for current floor
const structures = tour?.structure.find((el: Structure) => el.id == floorId)
const hotspots: Hotspot[] = structures?.hotspots as Hotspot[]

</script>