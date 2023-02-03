<template>
    <div v-html="store.tour?.description"></div>
    <ul v-if="store.tour">
      <li v-for="floor in store.tour.structure" class="link">
        <RouterLink class="link" :to="{ name: 'floor', params: { floorId: floor.id }, query: { key: 'IgSjubq3amMafYhP6EL18KAexCqTnZWQ' } }">{{ floor.name }}</RouterLink>
      </li>
    </ul>
</template>
<script setup lang="ts">
import { useTourStore } from '@/stores/tourStore'
const store = useTourStore()


</script>