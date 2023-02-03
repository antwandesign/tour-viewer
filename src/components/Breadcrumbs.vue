<template>
  <ol v-if="showBreadcrumbs" class="flex gap-2">
    <li class="breadcrumbs" v-for="path in paths" :key="path.to">
      <RouterLink class="link" :to="path.to">{{ path.name }}</RouterLink>
    </li>
  </ol>
  <div v-else>
    <label for="enable-breadcrumbs"
      >Would you like to see my pitty attemt at breadcrumbs?</label
    >
    <input
      type="checkbox"
      name="enable-breadcrumbs"
      @input="showBreadcrumbs = true"
    />
  </div>
</template>
<script setup lang="ts">
import { useRoute, RouterLink } from "vue-router";
import { ref, watchEffect } from "vue";

interface Breadcrumb {
  name: string;
  to: string;
}

const showBreadcrumbs = ref(false);

const route = useRoute();
let paths = ref<Breadcrumb[]>([]);

watchEffect(() => {
  const tmpArr = route.path.split("/");
  tmpArr.shift();
  paths.value.length = 0;
  let str = "";
  tmpArr.forEach((el) => {
    str += "/" + el;
    paths.value.push({
      name: el,
      to: str,
    });
  });

  if (paths.value[0]) paths.value[0].name = "Tour";
  if (paths.value[1]) paths.value[1].name = "Floor";
  if (paths.value[2]) paths.value[2].name = "Hotspot";
});
</script>
<style>
.breadcrumbs:before {
  content: "/";
}
</style>
