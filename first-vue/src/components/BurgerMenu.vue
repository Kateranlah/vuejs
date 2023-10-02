<template>
    <div class="card-container" @click.prevent="closeMenu">
        <div class="card" @click.stop="">
            <div class="card__top">
                <h2>Mein Account</h2>
                <img :src="('/first-vue/src/assets/img/burger-menu.png')">
            </div>
            <!-- //Work in progress. Just Fillers without function -->
            <div class="card__butto-container">
                <button>Anmelden</button>
                <button>Account erstellen</button>
            </div>

            <div class="card__content">
                <!-- make as list items -->
                <ul>
                    <li>
                        <router-link class="link" to="/">
                            <img class="icon pr1" :src="('/first-vue/src/assets/img/company.png')">
                            Bestellungen</router-link>
                    </li>
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

