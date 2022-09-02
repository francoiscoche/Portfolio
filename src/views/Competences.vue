<template>
    <transition>
        <section>
            <div class="line"></div>
            <div class="competences">
                <h2 class="title-section">Competences</h2>
                <br />
                <!-- <font-awesome-icon icon="fa-solid fa-user-secret" /> -->
                <div class="line-skill"></div>
                <h6 class="title-categorie">Spoken languages</h6>
                <div class="languages mb-5 mt-3">
                    <ul class="flag-list">
                        <!-- <country-flag country='it' size='normal'/> -->
                        <li
                            class="flag-post"
                            v-for="(language, index) in languages"
                            v-bind:key="index"
                        >
                            <img class="img-flag" :src="language.flag" />
                            {{ language.language }}
                        </li>
                    </ul>
                </div>
                <h6 class="title-categorie">Web - Front End</h6>
                <div class="skills mb-5 mt-3">
                    <!-- <ul> -->
                    <div
                        class="etiquette-skills"
                        v-for="(skill, index) in skills_front"
                        v-bind:key="index"
                    >
                        <img class="img-skill" :src="skill.flag" />
                        {{ skill.competence }}
                    </div>
                    <!-- </ul> -->
                </div>
                <h6 class="title-categorie">Web - Back End</h6>
                <div class="skills mb-5 mt-3">
                    <!-- <ul> -->
                    <div
                        class="etiquette-skills"
                        v-for="(skill, index) in skills_back"
                        v-bind:key="index"
                    >
                        <img class="img-skill" :src="skill.flag" />
                        {{ skill.competence }}
                    </div>
                    <!-- </ul> -->
                </div>
            </div>
        </section>
    </transition>
</template>

<script>
// import CountryFlag from 'vue-country-flag-next'

export default {
    name: 'Competences',
    data() {
        return {
            skills_front: [
                {
                    flag: require('@/assets/img/vujs.png'),
                    competence: 'Vue.js',
                },
                {
                    // flag: require('@/assets/img/sass-logo.png'),
                    competence: 'React',
                },
                {
                    flag: require('@/assets/img/sass-logo.png'),
                    competence: 'Sass',
                },
            ],
            skills_back: [
                {
                    flag: require('@/assets/img/php-logo.png'),
                    competence: 'PHP',
                },

                {
                    flag: require('@/assets/img/nodejs-logo.png'),
                    competence: 'Node.js',
                },
                {
                    flag: '',
                    competence: 'Web APIs',
                },
                {
                    flag: require('@/assets/img/mongodb-logo.png'),
                    competence: 'MongoDB',
                },
                {
                    // flag: require('@/assets/img/mongodb-logo.png'),
                    competence: 'MySQL',
                },
            ],
            languages: [
                {
                    flag: require('@/assets/img/france.png'),
                    language: 'French',
                },
                {
                    flag: require('@/assets/img/ru.png'),
                    language: 'English',
                },
                {
                    flag: require('@/assets/img/italie.png'),
                    language: 'Italian',
                },
            ],
        }
    },
}
</script>

<style lang="scss" scoped>
@import './../sass/variables';

.line-skill {
    position: absolute;
    z-index: 1;
    // width: 100px;
    left: 250px;
    top: 44px;
    transform: rotate(90deg);
    // bottom: 0px;
    width: 1px;
    height: 200px;
    background-color: white;
    display: none; // a modifier
    // animation: lineDown 0.6s;
}

// section {
//     // background: $color-background-primary;
//     margin: 30;
//     padding: 122px;
// }

ul {
    padding-left: 0;
}

.languages ul li,
.skills ul li,
.etiquette-skills {
    background: #403f40b8;
    display: inline-block;
    // border: 1px solid white;
    font-size: 0.8rem;
    color: #ffffff;
    // border-radius: 100px;
    font-weight: bold;
    margin: 0.5rem 1rem 0.5rem 0;
    padding: 1.1rem 1.8rem;

    .img-flag {
        width: 25px;
        margin-right: 10 px;
        transform: translateY(-1px);
    }
    .img-skill {
        width: 30px;
        margin-right: 12px;
        //  filter: grayscale(100%);
    }
}

// @keyframes pulse {
//     50% {
//         opacity: 0s;
//     }
// }

.title-categorie {
    animation: fadeInBottom 0.6s;
    opacity: 1;
}

.flag-post,
.etiquette-skills {
    animation: fromRight 0.9s both;
    opacity: 1;
}

@keyframes fromRight {
    from {
        opacity: 0;
        transform: translateY(100%);
    }
    to {
        opacity: 1;
    }
}

@keyframes fadeInBottom {
    from {
        // opacity: 0;
        transform: translateX(-10%);
    }
    to {
        // opacity: 1;
    }
}

.flag-post:nth-child(1),
.etiquette-skills:nth-child(1) {
    animation-delay: 0s;
}
.flag-post:nth-child(2),
.etiquette-skills:nth-child(2) {
    animation-delay: 0.15s;
}
.flag-post:nth-child(3),
.etiquette-skills:nth-child(3) {
    animation-delay: 0.25s;
}
.etiquette-skills:nth-child(4) {
    animation-delay: 0.35s;
}
.etiquette-skills:nth-child(5) {
    animation-delay: 0.45s;
}
.etiquette-skills:nth-child(6) {
    animation-delay: 0.55;
}
</style>
