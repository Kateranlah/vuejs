<template>
    <main>
        <section class="first-section f-row m-f-row">
            <div class="f-column eyecatcher eyecatcher__left">
                <h1>Bestelle Essen und mehr</h1>
                <h2>Restaurants und Geschäfte, die zu dir liefern</h2>
                <div class="search-container">
                    <div class="__input-container">
                        <label for="">
                            <input type="text" placeholder="Adresse, z.B. Musterstr. 1"></label>
                        <span>
                            <span class="cancel-icon-container"><img class="icon" src="../assets/img/x.png"></span>
                        </span>
                    </div>
                    <span>
                        <div class="search-icon-container">
                            <!-- <img class="icon" src="../assets/img/magnifying-glass.png"> -->
                            <span>Suchen </span>
                        </div>
                    </span>
                </div>

            </div>
            <div class="f-column eyecatcher eyecatcher__right">
                <img class="main-img" src="../assets/img/fruitplate.png" alt="" srcset="">
                <span class="logo-text"><i>GREEN</i> FOOD</span>
            </div>
        </section>
        <section class="f-column">
            <div class="f-column mt3">
                <h3 class="normal">So bestellst Du</h3>
                <h2>Es ist ganz einfach.</h2>
            </div>
            <div id="slider-container">
                <div ref="test" class="f-row --max-w-1024 slider">
                    <div v-if="desktopView || choosen == 0" class="card-simple">
                        <div><img src="../assets/img/location.png"></div>
                        <h5>Teile uns deinen Standort mit</h5>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem amet, totam magni ex at ri
                            totam
                        </p>
                    </div>
                    <div v-if="desktopView || choosen == 0" class="card-simple">
                        <div><img src="../assets/img/apple.png"></div>
                        <h5>Suche, worauf du Lust hast</h5>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem amet, totam magni ex at ri
                            totam
                        </p>
                    </div>
                    <div v-if="desktopView || choosen == 0" class="card-simple">
                        <div><img src="../assets/img/bike.png"></div>
                        <h5>Bestelle zur Lieferung oder Abholung</h5>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem amet, totam magni ex at ri
                            totam
                        </p>
                    </div>
                </div>
            </div>

            <span id="dot-container">
                <div @click="choosen = 0" class="dot bg-g"></div>
                <div @click="choosen = 1" class="dot"></div>
                <div @click="choosen = 2" class="dot"></div>
            </span>
        </section>
    </main>
</template>

<script setup lang="ts">
import "../styles/views/landing.scss"

let choosen = ref(0)


// repetetive code. reduce it 
import { ref } from "vue";
let desktopView = ref()

function myFunction(x: any) {
    if (x.matches) {
        desktopView.value = false;
    } else {
        desktopView.value = true;
    }
    console.log(desktopView.value);

}
let x = window.matchMedia("(max-width: 1025px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes



</script>