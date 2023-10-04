<template>
  <header class="shadow">
    <div class="f-row">
      <router-link to="/"><img :src="(`../src/assets/img/logo-small.png`)" alt="logo"></router-link>
      <span><i>GREEN</i> FOOD</span>
    </div>

    <nav>
      <router-link v-if="!fullMenu" class="link" to="/Bestellen"> <img class="icon pr1"
          :src="(`../src/assets/img/company.png`)" alt="house"> Bestellen</router-link>
      <router-link v-if="!fullMenu" class="link" to="/Fahrer werden"><img class="icon pr1"
          :src="(`../src/assets/img/bike.png`)" alt="bike">
        Fahrer werden</router-link>
      <div @click="openMenu" class="link f-row">
        <img class="icon" :src="(`../src/assets/img/burger-menu.png`)" alt="menu">
      </div>
    </nav>
  </header>
  <BurgerMenu @closeMenu="close" v-if="menuIsVisible" />

  <RouterView />
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { ref } from "vue";
import BurgerMenu from './components/BurgerMenu.vue';



let menuIsVisible = ref(false);
let fullMenu = ref()

const close = () => {
  menuIsVisible.value = false;
  document.documentElement.style.overflow = 'auto'
}

const openMenu = () => {
  menuIsVisible.value = true;
  document.documentElement.style.overflow = 'hidden'
}

</script>


