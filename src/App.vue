<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div class="container mx-auto">
    <header>
      <div>
        <nav class="flex gap-20 font-bold">
          <RouterLink to="/">Home</RouterLink>
          <RouterLink
            :to="{
              path: '/4dFt1rmYFqRI7AxtN8q1SD',
              query: { key: 'IgSjubq3amMafYhP6EL18KAexCqTnZWQ' },
            }"
            >Tour</RouterLink
          >
        </nav>
      </div>
    </header>

    <RouterView />
  </div>
</template>

<style></style>
