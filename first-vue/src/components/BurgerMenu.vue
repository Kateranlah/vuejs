<template>
    <div class="card-container" @click.prevent="closeMenu">
        <div class="card" @click.stop="">
            <div class="card__top">
                <span class="bold1r">Mein Account</span>
                <img @click.prevent="closeMenu" class="icon pointer" :src="(`../src/assets/img/burger-menu.png`)">
            </div>
            <div class="card__button-container">
                <button>Anmelden</button>
                <button class="button--green">Account erstellen</button>
            </div>

            <div class="card__content">
                <ul>
                        <router-link class="link" to="/">
                            <img class="icon pr1" :src="(`../src/assets/img/burger-menu.png`)">
                            Bestellungen</router-link>
                  
                        <router-link class="link link__last" to="/">
                            <img class="icon pr1" :src="(`../src/assets/img/burger-menu.png`)">
                            Favoriten</router-link>
                
                        <router-link class="link" to="/">
                            <img class="icon pr1" :src="(`../src/assets/img/burger-menu.png`)">
                            Punkte</router-link>
                 
                        <router-link class="link" to="/">
                            <img class="icon pr1" :src="(`../src/assets/img/burger-menu.png`)">
                            Stempelkarte</router-link>
                  
                        <router-link class="link" to="/">
                            <img class="icon pr1" :src="(`../src/assets/img/burger-menu.png`)">
                            Brauchst du Hilfe?</router-link>
                   
                  
                        <router-link class="link link__last" to="/">
                            <img class="icon pr1" :src="(`../src/assets/img/burger-menu.png`)">
                            Geschenkkarte</router-link>
                 
                   
                        <router-link class="link" to="/">
                            <img class="icon pr1" :src="(`../src/assets/img/bike.png`)">
                            Fahrer werden</router-link>
                   
                        <router-link class="link" to="/">
                            <img class="icon pr1" :src="(`../src/assets/img/company.png`)">
                            Lieferando for business</router-link>
                </ul>
            </div>
            <!-- //The top is Work in progress. Just Fillers without function -->
        </div>
    </div>
</template>

<script setup lang="ts">

const emit = defineEmits(['closeMenu'])

const closeMenu = () => {
    emit('closeMenu')
}



</script>

