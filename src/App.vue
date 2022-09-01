<template>
    <div class="content">
        <div class="overlay"></div>
        <header id="site-header">
            <!-- <div class="header-top"> -->
            <!-- <p class="header-username">François</p> -->
            <nav>
                <router-link to="/">A propos</router-link>
                <router-link to="competences">Compétences</router-link>
                <router-link to="projects">Projects</router-link>
                <router-link to="contact">Contact</router-link>
            </nav>
            <!-- </div> -->
        </header>
        <router-view v-slot="{ Component }">
            <transition name="fade" mode="out-in">
                <component :is="Component" />
            </transition>
        </router-view>
        <!-- <router-view v-slot="{ Component }">
            <transition
                name="fade"
                mode="out-in"
                @beforeLeave="beforeLeave"
                @enter="enter"
                @afterEnter="afterEnter"
            >
                <component :is="Component" />
            </transition>
        </router-view> -->
        <!-- <router-view /> -->
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

// .line {
//     position: absolute;
//     z-index: 1;
//     left: 250px;
//     top: 52px;
//     bottom: 235px;
//     width: 1px;
//     background-color: white;
// }

h2.title-section {
    color: $title-section-h2;
    animation: fromleft 0.6s;
}

@keyframes fromleft {
    from {
        transform: translateX(-10%);
    }
    to {
    }
}

#content {
    color: white;
}
section {
    margin-left: 250px;
    // background-color: #111;
    color: white;
}

section::after {
    // opacity: 0.1;
}
.overlay {
    // width: 100%;
    // // /* height: 100%; */
    top: 0;
    // /* background-color: rgba(248, 247, 216, 0.7); */
    position: fixed;
    // background-image: url(http://localhost:8080/img/code-background.8f7f05bb.jpg);
    // background-size: cover;
    z-index: -1;
    left: 0;
    right: 0;
    bottom: 0;
    // /* opacity: 0.5; */
    // height: 100%;

    background: linear-gradient(#000000c4, #000000c4),
        url(../src/assets/img/code-background.jpg);
    background-size: cover;
}

// .overlay {
//     content: ' ';
//     display: block;
//     position: absolute;
//     left: 0;
//     top: 0;
//     width: 100%;
//     height: 100%;
//     z-index: -1;
//     back
//     opacity: 0.9;
//     background-image: url(http://localhost:8080/img/code-background.8f7f05bb.jpg);
//     background-repeat: no-repeat;
//     // background-position: 50% 0;
//     background-size: cover;
// }
// .fade-enter-active {
.line {
    position: absolute;
    z-index: 10;
    height: 80%;
    left: 250px;
    // z-index: 10;
    top: 52px;
    // bottom: 235px;
    opacity: 1;
    background-color: white;
    width: 1px;
    // background-color: white;
    animation: lineDown 0.6s;
}
// // }

@keyframes lineDown {
    from {
        height: 0%;
        opacity: 0;
    }
    to {
        height: 80%;
        opacity: 1;
    }
}
.content {
    font-family: 'Poppins', sans-serif;
    // background-color: #111;
    // position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
}
.exact-active-link {
    display: inline-block;
    color: $font-base-white;
    font-weight: bold;
    // transform: translate(8%);
    transform: translate(8%);
    transition-duration: 0.4s;
    color: $title-section-h2;

    // font-size: 1.2rem;
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
    animation: underline ease-in-out 0.5s both; /* remove infinite if you want only once */
}
@keyframes underline {
    to {
        width: 100%;
    }
}

nav {
    padding-top: 200px;
    padding-left: 70px;
    a {
        color: $font-base-white;
        text-decoration: none;
        margin-bottom: 20px;
        display: block;
        letter-spacing: 1px;
        transition-duration: 0.15s;
        &:hover {
            color: $font-base-white;
        }
    }
}

//  .fade-enter-active,
//  .fade-leave-active {
//    transition-duration: 0.3s;
//   transition-property: height, opacity;
//    transition-timing-function: ease;
//   overflow: hidden;
//  }

.fade-leave-active {
    .line {
        position: absolute;
        z-index: 10;
        left: 250px;
        top: 52px;
        // bottom: 235px;
        width: 1px;
        background-color: white;
        animation: lineUp 0.8s;
    }

    @keyframes lineUp {
        from {
            height: 80%;
        }
        to {
            height: 0%;
        }
    }
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease;
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
    // top: 0;
    // left: 0;
    background-color: #111;

    // opacity: 0.9;
    // overflow-x: hidden;
    // padding-top: 60px;
    // transition: 0.3s;

    // left: 0;

    // width: 100%;
    // // position: fixed;
    // display: block;
    // transition: all 0.3s ease;
    // z-index: 100;
    // background-color: black;
    // &.hide {
    //     top: -100px;
    // }

    // &.header-shadow {
    //     -webkit-box-shadow: 0px 7px 21px 0px #000000;
    //     -moz-box-shadow: 0px 7px 21px 0px #000000;
    //     -o-box-shadow: 0px 7px 21px 0px #000000;
    //     box-shadow: 0px 7px 21px 0px #000000;
    // }

    // .header-top {
    //     display: flex;

    //     .header-username {
    //         margin: 30px;
    //     }
    //     nav {
    //         width: 100%;
    //         margin: 0 auto;

    //         // ul {
    //         // list-style-type: none;

    //         // }
    //         // li {

    //         //     float: right;
    //         //     margin: 30px;
    //         // }
    //     }
    // }
}
</style>
