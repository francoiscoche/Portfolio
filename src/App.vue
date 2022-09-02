<template>
    <div class="content">
        <div class="overlay"></div>
        <nav>
            <router-link to="/">A propos</router-link>
            <router-link to="competences">Skills</router-link>
            <router-link to="projects">Projects</router-link>
            <router-link to="contact">Contact</router-link>
        </nav>
        <router-view v-slot="{ Component }">
            <transition name="fade" mode="out-in">
                <component :is="Component" />
            </transition>
        </router-view>
    </div>
</template>
<script>
export default {
    name: 'App',
    data() {
        return {
            prevHeight: 0,
        }
    },
    methods: {
        // beforeLeave(element) {
        //     this.prevHeight = getComputedStyle(element).height
        // },
        // enter(element) {
        //     const { height } = getComputedStyle(element)
        //     element.style.height = this.prevHeight
        //     setTimeout(() => {
        //         element.style.height = height
        //     })
        // },
        // afterEnter(element) {
        //     element.style.height = 'auto'
        // },
    },
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;400&display=swap');
@import './sass/variables';

section {
    color: white;
    padding: 100px 20px 100px 160px;

    h2.title-section {
        color: $title-section-h2;
        animation: fromleft 0.6s;
    }

    .line {
        position: absolute;
        z-index: 10;
        height: 90%;
        left: 250px;
        top: 0px;
        opacity: 1;
        width: 1px;
        background-color: white;
        animation: lineDown 0.6s;
    }
}

.overlay {
    top: 0;
    position: fixed;
    z-index: -1;
    left: 0;
    right: 0;
    bottom: 0;
    // background: linear-gradient(#000000c4, #000000c4),
    //     url(../src/assets/img/code-background.jpg);
    // background-size: cover;
    background-color: #0c0924;
}

.content {
    font-family: 'Poppins', sans-serif;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: row;
}

.exact-active-link {
    color: $font-base-white;
    font-weight: bold;
    transform: translate(8%);
    transition-duration: 0.4s;
    color: $title-section-h2;
    &:hover {
        color: $title-section-h2;
    }
}

.exact-active-link:after {
    position: absolute;
    content: '';
    bottom: -2px;
    left: 0px;
    height: 1px;
    width: 0;
    background-color: $title-section-h2;
    animation: underline ease-in-out 0.5s both;
}
nav {
    padding-top: 200px;
    padding-left: 70px;
    display: flex;
    flex-direction: column;

    a {
        color: $font-base-white;
        text-decoration: none;
        margin-bottom: 20px;
        margin-right: auto;
        white-space: nowrap;
        letter-spacing: 1px;
        transition-duration: 0.15s;
        &:hover {
            color: $font-base-white;
        }
    }
}

.fade-leave-active {
    .line {
        position: absolute;
        z-index: 10;
        left: 250px;
        top: 0px;
        width: 1px;
        background-color: white;
        animation: lineUp 0.8s;
    }
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

#site-header {
    height: 100%;
    width: 250px;
    position: fixed;
    z-index: 10;
    background-color: #111;
}

@keyframes underline {
    to {
        width: 100%;
    }
}

@keyframes lineDown {
    from {
        height: 0%;
        opacity: 0;
    }
    to {
        height: 90%;
        opacity: 1;
    }
}
@keyframes fromleft {
    from {
        transform: translateX(-10%);
    }
}
@keyframes lineUp {
    from {
        height: 80%;
    }
    to {
        height: 0%;
    }
}
@media (max-width: 850px) {
    .content {
        flex-direction: column;
        section {
            margin: 0px;
            padding: 20px;

            .line {
                display: none;
            }
        }
    }
}

@media (max-width: 850px) {
    nav {
        flex-direction: row;
        justify-content: flex-start;
        padding: 20px;
        overflow-x: scroll;
        white-space: nowrap;
        .exact-active-link {
            transform: none;
        }

        a {
            margin: 0;
            padding: 10px;
        }
    }
}
</style>
