<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <header>
    <div>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink :to="{ path: '/4dFt1rmYFqRI7AxtN8q1SD', query: { key: 'IgSjubq3amMafYhP6EL18KAexCqTnZWQ' } }">About</RouterLink>
      </nav>
    </div>
  </header>
  <div class="container">
  <RouterView />
  </div>
</template>

<style>

</style>
