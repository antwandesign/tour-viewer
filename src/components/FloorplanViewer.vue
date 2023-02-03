<template>
  <div class="floorplan-wrapper">
    <RouterLink
      v-for="hotspot in props.hotspots"
      :key="hotspot.id"
      :to="{
        name: 'hotspots',
        params: { hotspotId: hotspot.id },
        query: { key: 'IgSjubq3amMafYhP6EL18KAexCqTnZWQ' },
      }"
    >
      <div
        class="floorplan-marker"
        :style="{
          top: `${hotspot.position.y + '%'}`,
          left: `${hotspot.position.x + '%'}`,
        }"
        :key="hotspot.id"
      ></div>
    </RouterLink>

    <img class="floorplan-image" :src="image" />
  </div>
</template>
<script setup lang="ts">
import type { Hotspot } from "@/types/tour";

interface Props {
  image: string;
  hotspots: Hotspot[];
}
const props = defineProps<Props>();
</script>
<style scoped>
.floorplan-wrapper {
  position: relative;
}

.floorplan-marker {
  position: absolute;
  width: 2rem;
  height: 2rem;
  background-color: red;
  border-radius: 100%;
}

.floorplan-image {
  width: 100%;
  height: auto;
}
</style>
