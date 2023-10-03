<template>
  <header class="shadow">
    <div class="f-row">
      <router-link to="/"><img :src="(`../src/assets/img/logo-small.png`)" alt="logo"></router-link>
      <span><i>GREEN</i> FOOD</span>
    </div>

    <nav>
      <router-link class="link" to="/Bestellen"> <img class="icon pr1" :src="(`../src/assets/img/company.png`)"
          alt="house"> Bestellen</router-link>
      <router-link class="link" to="/Fahrer werden"><img class="icon pr1" :src="(`../src/assets/img/bike.png`)" alt="bike">
        Fahrer werden</router-link>
      <div @click="openMenu" class="link f-row">
        <img class="icon" :src="(`../src/assets/img/burger-menu.png`)" alt="menu">
      </div>
    </nav>
  </header>
  <BurgerMenu @closeMenu="close" v-if="menuIsVisible" />
 
  <RouterView  v-if="showContent"/>
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { ref } from "vue";
import  BurgerMenu from './components/BurgerMenu.vue';



let menuIsVisible = ref(false);
let fullMenu = ref()
let showContent = ref(true);
 
 const close = () => {
     menuIsVisible.value = false;
     showContent.value = true;
 }

const openMenu = () =>{
  menuIsVisible.value = true; 

  if (fullMenu.value) {
    showContent.value = false;
  }

  if (!fullMenu) {
    showContent.value = false;
  }



 

}

 function myFunction(x) {
  if (x.matches) { 
   fullMenu.value = true;
   console.log('kl');
   
  } else {
    fullMenu.value = false;
    console.log('g');
    
  }
}

let x = window.matchMedia("(max-width: 1025px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes
</script>


