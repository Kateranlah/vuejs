<template>
  <header class="shadow">
    <div class="f-row">
      <router-link to="/"><img :src="(`../src/assets/img/logo-small.png`)" alt="logo"></router-link>
      <span><i>GREEN</i> FOOD</span>
    </div>

    <nav>
      <router-link v-if="!desktopView" class="link" to="/Bestellen"> <img class="icon pr1"
          :src="(`../src/assets/img/company.png`)" alt="house"> Bestellen</router-link>
      <router-link v-if="!desktopView" class="link" to="/Fahrer werden"><img class="icon pr1"
          :src="(`../src/assets/img/bike.png`)" alt="bike">
        Fahrer werden</router-link>
      <div @click="openMenu" class="link f-row">
        <img class="icon" :src="(`../src/assets/img/burger-menu.png`)" alt="menu">
      </div>
    </nav>
  </header>
  <BurgerMenu @closeMenu="close" v-if="menuIsVisible" />

  <RouterView :desktopView="desktopView" />
  <LandingPage :desktopView="desktopView" />
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { ref } from "vue";
import BurgerMenu from './components/BurgerMenu.vue';
import LandingPage from './views/Landing.vue';




let menuIsVisible = ref(false);
let desktopView = ref()

const close = () => {
  menuIsVisible.value = false;
  document.documentElement.style.overflow = 'auto'
}

const openMenu = () => {
  menuIsVisible.value = true;
  document.documentElement.style.overflow = 'hidden'
}

function myFunction(x:any) {
  if (x.matches) {
    desktopView.value = true;
  } else {
    desktopView.value = false;
  }
}
let x = window.matchMedia("(max-width: 1025px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes


</script>


