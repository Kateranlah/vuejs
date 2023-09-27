<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header class="shadow">
    <div class="f-row">
      <RouterLink to="/"><img :src="(`../src/assets/img/logo-small.png`)" alt="logo"></RouterLink>
      <span><i>GREEN</i> FOOD</span>
    </div>

    <nav>
      <RouterLink class="link" to="/Bestellen">Bestellen</RouterLink>
      <RouterLink class="link" to="/Fahrer werden">Fahrer werden</RouterLink>
      <img src="assets/img/burger-menu" alt="menu">
    </nav>

  </header>

  <RouterView />
</template>
