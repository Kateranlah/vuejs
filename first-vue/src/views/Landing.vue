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
            <div id="slider-container" :class="{ mb3: desktopView }">
                <div ref="slider" class="f-row --max-w-standart slider">
                    <div class="card-simple">
                        <div><img src="../assets/img/location.png"></div>
                        <h5>Teile uns deinen Standort mit</h5>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem amet, totam magni ex at ri
                            totam
                        </p>
                    </div>
                    <div class="card-simple">
                        <div><img src="../assets/img/apple.png"></div>
                        <h5>Suche, worauf du Lust hast</h5>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem amet, totam magni ex at ri
                            totam
                        </p>
                    </div>
                    <div class="card-simple">
                        <div><img src="../assets/img/bike.png"></div>
                        <h5>Bestelle zur Lieferung oder Abholung</h5>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem amet, totam magni ex at ri
                            totam
                        </p>
                    </div>
                </div>
            </div>

            <span v-if="!desktopView" id="dot-container">
                <div @click="choosen = 2; slide();" class="dot" :class="{ bgg: choosen == 0 }"></div>
                <div @click="choosen = 0; slide();" class="dot" :class="{ bgg: choosen == 1 }"></div>
                <div @click="choosen = 1; slide();" class="dot" :class="{ bgg: choosen == 2 }"></div>
            </span>
        </section>
        <section class="bg-p f-column">
            <div class="--max-w-standart f-row" :class="{ 'jc-sb': desktopView }">
                <div class="mt3" :class="{ 'ml2': desktopView }">
                    <h3>App herunterladen</h3>
                    <p>einfach und bequem Bestellen!</p>

                    <div class="f-row">
                        <div class="button-container">
                            <button @click="demoWarning('download')">Appstore</button>
                            <button @click="demoWarning('download')">Webstore</button>
                            <button @click="demoWarning('download')">Newstore</button>
                        </div>
                        <div v-if="!desktopView" class="phone">
                            <img src="/src/assets/img/iphone.png">
                        </div>
                    </div>
                </div>
                <div v-if="desktopView" class="phone">
                    <img src="/src/assets/img/iphone.png">
                </div>
            </div>
        </section>
        <section class="bg-gy f-column pt3">
            <div>
                <span>GreenFood</span>
                <h3>Deine Zeit</h3>
            </div>
            <div class="slider-container --max-w-standart">
                <div class="slider f-row --max-w-standart">
                <div class="card-simple">
                        <div><img src="../assets/img/bike.png"></div>
                        <h5>Treueprogramm</h5>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem amet, totam magni ex at ri
                            totam
                        </p>
                    </div>
                    <div class="card-simple">
                        <div><img src="../assets/img/bike.png"></div>
                        <h5>Unsere Garantie</h5>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem amet, totam magni ex at ri
                            totam
                        </p>
                    </div>
                    <div class="card-simple">
                        <div><img src="../assets/img/bike.png"></div>
                        <h5>Deine Vorteile</h5>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem amet, totam magni ex at ri
                            totam
                        </p>
                    </div>
            </div>
        </div>
        </section>
    </main>
</template>

<script setup lang="ts">
import "../styles/views/landing.scss"
import { ref, onMounted } from "vue";

let choosen = ref(0)
let slider = ref()
let scrollContainer: any

onMounted(() => {
    setInterval(slide, 20000),
        scrollContainer = slider.value
    scrollContainer.addEventListener("scroll", () => {
        checkDot();
    });
})

const checkDot = () => {
    if (scrollContainer.scrollLeft == 0) {
        choosen.value = 0
    } else if (scrollContainer.scrollLeft < window.innerWidth && scrollContainer.scrollLeft > 0) {
        choosen.value = 1

    } else {
        choosen.value = 2
    }
}
const slide = () => {
    if (choosen.value == 0) {
        checkDot();
        scrollContainer.scroll({
            left: window.innerWidth / 2,
            behavior: "smooth",
        });
    } else if (choosen.value == 1) {
        checkDot();
        scrollContainer.scroll({
            left: window.innerWidth * 2,
            behavior: "smooth",
        });
    }
    else {
        checkDot();
        scrollContainer.scroll({
            left: 0
        });
    }
}

const demoWarning = (location: string) => {
    if (location == "download") {
        alert('Downloads stehen nicht zur verfügung. Diese Website ist ein Dummy')
    }

}



// repetetive code. reduce it 


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