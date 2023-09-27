<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header class="shadow">
    
      <img :src="(`../src/assets/img/logo-small.png`)" alt="logo">
      <span><i>GREEN</i> FOOD</span>

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <!-- <RouterLink to="/about">About</RouterLink> -->
      </nav>

  </header>

  <RouterView />
</template>
