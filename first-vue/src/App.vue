<template>
  <header class="shadow">
    <div class="f-row">
      <RouterLink to="/"><img :src="(`../src/assets/img/logo-small.png`)" alt="logo"></RouterLink>
      <span><i>GREEN</i> FOOD</span>
    </div>

    <nav>
      <RouterLink class="link" to="/Bestellen"> <img class="icon pr1" :src="(`../src/assets/img/company.png`)"
          alt="house"> Bestellen</RouterLink>
      <RouterLink class="link" to="/Fahrer werden"><img class="icon pr1" :src="(`../src/assets/img/bike.png`)" alt="bike">
        Fahrer werden</RouterLink>
      <div @click="toggleMenu" class="link f-row">
        <BurgerMenu id="open-menu" v-if="menuIsVisible"/>


        <img class="icon" :src="(`../src/assets/img/burger-menu.png`)" alt="menu">
      </div>
    </nav>

  </header>

  <RouterView />
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { ref } from "vue";
    let menuIsVisible = ref(false);

function toggleMenu(){
  menuIsVisible.value = !menuIsVisible.value  
  console.log(menuIsVisible);
  
}



</script>


