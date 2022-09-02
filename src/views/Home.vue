<template>
    <transition>
        <section>
            <div class="line"></div>
            <div class="about">
                <div class="header-windows">
                    <div class="header-menu header-item">
                        <img
                            src="../../src/assets/img/vscode.svg"
                            alt="logo vscode"
                        />
                        <div class="menu-tab">File</div>
                        <div class="menu-tab">Edit</div>
                        <div class="menu-tab">Selection</div>
                        <div class="menu-tab">View</div>
                        <div class="menu-tab">Go</div>
                        <div class="menu-tab">Run</div>
                        <div class="menu-tab">Terminal</div>
                        <div class="menu-tab">Help</div>
                    </div>
                    <div class="header-file header-item">
                        Home.vue - Portfolio - Visual Studio Code
                    </div>
                    <div class="header-button header-item">
                        <img
                            src="../../src/assets/img/window-minimize-solid.svg"
                            alt="mininmiz button"
                        />
                        <img
                            src="../../src/assets/img/window-restore-solid.svg"
                            alt="restore button"
                        />
                        <img
                            src="../../src/assets/img/xmark-solid.svg"
                            alt="close button"
                        />
                    </div>
                </div>
                <div id="text-preview">
                    <div class="vertical-menu">
                        <div class="icons-top">
                            <img
                                src="../../src/assets/img/copy-solid.svg"
                                alt="restore button"
                            />
                            <img
                                src="../../src/assets/img/magnifying-glass-solid.svg"
                                alt="restore button"
                            />
                            <img
                                src="../../src/assets/img/circle-nodes-solid.svg"
                                alt="restore button"
                            />
                            <img
                                src="../../src/assets/img/play-solid.svg"
                                alt="restore button"
                            />
                        </div>
                        <div class="icons-bottom">
                            <img
                                src="../../src/assets/img/circle-user-solid.svg"
                                alt="restore button"
                            />
                            <img
                                src="../../src/assets/img/gear-solid.svg"
                                alt="restore button"
                            />
                        </div>
                    </div>
                    <div class="central-part-windows">
                        <div class="horizontal-tab">
                            <div class="tab-file">
                                <img
                                    src="../../src/assets/img/vujs.png"
                                    alt="restore button"
                                />
                                Home.vue
                                <img
                                    class="close-tab-img"
                                    src="../../src/assets/img/xmark-solid.svg"
                                    alt="restore button"
                                />
                            </div>
                        </div>
                        <div class="table-code">
                            <table class="table table-borderless">
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>
                                            <span class="html-chevron"
                                                >&lt;</span
                                            >
                                            <span class="html-div"
                                                >template</span
                                            >
                                            <span class="html-chevron"
                                                >&gt;</span
                                            >
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>
                                            <span class="html-chevron"
                                                >&lt;</span
                                            >
                                            <span class="html-div">div</span>
                                            <span class="html-class">
                                                class</span
                                            >=<span class="html-class-writed"
                                                >"home-title"</span
                                            ><span class="html-chevron"
                                                >&gt;</span
                                            >
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>
                                            &ensp; &ensp; &ensp;
                                            <span class="html-chevron"
                                                >&lt;</span
                                            ><span class="html-div">h2</span
                                            ><span class="html-chevron"
                                                >&gt;</span
                                            >Hi! I am François, web developer at
                                            the crossroads between studies and
                                            self-taught.<span
                                                class="html-chevron"
                                                >&lt;/</span
                                            ><span class="html-div">h2</span
                                            ><span class="html-chevron"
                                                >&gt;</span
                                            >
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>4</td>
                                        <td class="border-row">
                                            &ensp; &ensp; &ensp;
                                            <span class="html-chevron"
                                                >&lt;</span
                                            ><span class="html-div">h2</span
                                            ><span class="html-chevron"
                                                >&gt;</span
                                            >From
                                            <span class="typed-text">{{
                                                typeValue
                                            }}</span>
                                            <span class="blinking-cursor"
                                                >|</span
                                            >
                                            <span
                                                class="cursor"
                                                :class="{ typing: typeStatus }"
                                            ></span>
                                            <span class="html-chevron"
                                                >&lt;/</span
                                            ><span class="html-div">h2</span
                                            ><span class="html-chevron"
                                                >&gt;</span
                                            >
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>5</td>
                                        <td>
                                            <span class="html-chevron"
                                                >&lt;/</span
                                            ><span class="html-div">div</span
                                            ><span class="html-chevron"
                                                >&gt;</span
                                            >
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>6</td>
                                        <td>
                                            <span class="html-chevron"
                                                >&lt;</span
                                            >
                                            <span class="html-div">div</span>
                                            <span class="html-class">
                                                class</span
                                            >=<span class="html-class-writed"
                                                >"home-title"</span
                                            ><span class="html-chevron"
                                                >&gt;</span
                                            >
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>7</td>
                                        <td>
                                            &ensp; &ensp; &ensp;
                                            <span class="html-chevron"
                                                >&lt;</span
                                            ><span class="html-div">p</span
                                            ><span class="html-chevron"
                                                >&gt;</span
                                            >
                                            I started my career and worked in
                                            Paris for 3 years as PHP developer
                                            consultant where <br />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>8</td>
                                        <td>
                                            &ensp; &ensp; &ensp;&ensp; &ensp;
                                            &ensp;&ensp;I was deployed in
                                            different teams and projects for
                                            different clients.
                                            <span class="html-chevron"
                                                >&lt;/</span
                                            ><span class="html-div">p</span
                                            ><span class="html-chevron"
                                                >&gt;</span
                                            >
                                        </td>
                                    </tr>

                                    <tr></tr>

                                    <tr>
                                        <td>9</td>
                                        <td>
                                            &ensp; &ensp; &ensp;
                                            <span class="html-chevron"
                                                >&lt;</span
                                            ><span class="html-div">p</span
                                            ><span class="html-chevron"
                                                >&gt;</span
                                            >
                                            Then in 2022, I moved to Rome where
                                            I was able to learn and constantly
                                            update my<br />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>10</td>
                                        <td>
                                            &ensp; &ensp; &ensp;&ensp; &ensp;
                                            &ensp;&ensp; knowledge.
                                            <span class="html-chevron"
                                                >&lt;/</span
                                            ><span class="html-div">p</span
                                            ><span class="html-chevron"
                                                >&gt;</span
                                            >
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>11</td>
                                        <td>
                                            &ensp; &ensp; &ensp;
                                            <span class="html-chevron"
                                                >&lt;</span
                                            ><span class="html-div">p</span
                                            ><span class="html-chevron"
                                                >&gt;</span
                                            >Here, I chose to enrich and
                                            developp my skills, exploring the
                                            power of NodeJS<br />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>12</td>
                                        <td>
                                            &ensp; &ensp; &ensp;&ensp; &ensp;
                                            &ensp;&ensp; and associated
                                            Frameworks. As passionate of
                                            inovation and techs i felt into
                                            web3.
                                            <span class="html-chevron"
                                                >&lt;/</span
                                            ><span class="html-div">p</span
                                            ><span class="html-chevron"
                                                >&gt;</span
                                            >
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>13</td>
                                        <td>
                                            <span class="html-chevron"
                                                >&lt;/</span
                                            ><span class="html-div">div</span
                                            ><span class="html-chevron"
                                                >&gt;</span
                                            >
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>14</td>
                                        <td>
                                            <span class="html-chevron"
                                                >&lt;/</span
                                            >
                                            <span class="html-div"
                                                >template</span
                                            >
                                            <span class="html-chevron"
                                                >&gt;</span
                                            >
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>15</td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td>16</td>
                                        <td>
                                            <span class="html-chevron"
                                                >&lt;</span
                                            >
                                            <span class="html-div">script</span>
                                            <span class="html-chevron"
                                                >&gt;</span
                                            >
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>17</td>
                                        <td>
                                            <span class="html-div"
                                                >export default
                                            </span>
                                            <span class="html-bracket">{</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>18</td>
                                        <td>
                                            name:
                                            <span class="html-class-writed"
                                                >'Home'</span
                                            >,
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>19</td>
                                        <td>
                                            <span class="html-bracket">}</span>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>20</td>
                                        <td>
                                            <span class="html-chevron"
                                                >&lt;/</span
                                            >
                                            <span class="html-div">script</span>
                                            <span class="html-chevron"
                                                >&gt;</span
                                            >
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>21</td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td>22</td>
                                        <td>
                                            <span class="html-chevron"
                                                >&lt;</span
                                            >
                                            <span class="html-div">style</span>
                                            <span class="html-chevron"
                                                >&gt;</span
                                            >
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>23</td>
                                        <td>
                                            <span class="html-chevron"
                                                >&lt;/</span
                                            >
                                            <span class="html-div">style</span>
                                            <span class="html-chevron"
                                                >&gt;</span
                                            >
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>24</td>
                                        <td></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </transition>
</template>
<script>
export default {
    name: 'About',

    data: () => {
        return {
            typeValue: '',
            typeStatus: false,
            displayTextArray: ['Nancy to Paris.', 'Paris to Roma.'],
            typingSpeed: 100,
            erasingSpeed: 50,
            newTextDelay: 1800,
            displayTextArrayIndex: 0,
            charIndex: 0,
        }
    },
    // mounted() {
    //     console.log(`the component is now mounted.`)
    // },
    methods: {
        typeText() {
            if (
                this.charIndex <
                this.displayTextArray[this.displayTextArrayIndex].length
            ) {
                if (!this.typeStatus) this.typeStatus = true
                this.typeValue += this.displayTextArray[
                    this.displayTextArrayIndex
                ].charAt(this.charIndex)
                this.charIndex += 1
                setTimeout(this.typeText, this.typingSpeed)
            } else {
                this.typeStatus = false
                setTimeout(this.eraseText, this.newTextDelay)
            }
        },
        eraseText() {
            if (this.charIndex > 0) {
                if (!this.typeStatus) this.typeStatus = true
                this.typeValue = this.displayTextArray[
                    this.displayTextArrayIndex
                ].substring(0, this.charIndex - 1)
                this.charIndex -= 1
                setTimeout(this.eraseText, this.erasingSpeed)
            } else {
                this.typeStatus = false
                this.displayTextArrayIndex += 1
                if (this.displayTextArrayIndex >= this.displayTextArray.length)
                    this.displayTextArrayIndex = 0
                setTimeout(this.typeText, this.typingSpeed + 1000)
            }
        },
    },
    created() {
        setTimeout(this.typeText, this.newTextDelay + 200)
    },
}
</script>

<style lang="scss" scoped>
@import './../sass/variables';

.html-div {
    color: #569cd6;
}
.html-chevron {
    color: #80807a;
}
.html-class {
    color: #9cdcfe;
}
.html-bracket {
    color: #ffd710;
}

.html-class-writed {
    color: #ce9178;
}
.central-part-windows {
    overflow: hidden;
    margin: auto;
    width: 100%;
    .horizontal-tab {
        background-color: #2a2c2f;
        font-size: 0.8rem;
        .tab-file {
            padding: 5px 10px 5px 10px;
            width: 120px;
            background-color: #202124;
            img {
                width: 10px;
            }

            .close-tab-img {
                filter: invert(27%) sepia(51%) saturate(20%) brightness(250%)
                    contrast(97%);
            }
        }
    }
}

.about {
    display: flex;
    flex-direction: column;
}
.header-windows {
    background: #323233;
    color: #c4c0c0;
    font-size: 0.7rem;
    border: 1px solid white;
    border-style: solid solid none solid;
    height: 100%;
    display: flex;
    justify-content: space-between;
    padding: 10px;
    max-width: 1000px;

    .header-menu {
        display: flex;
        flex-flow: row wrap;

        img {
            width: 16px;
            margin-right: 5px;
        }
        .menu-tab {
            margin-right: 3px;
            padding: 0 6px 0 6px;
            &:hover {
                background-color: rgb(83, 83, 83);
                border-radius: 3px;
                cursor: pointer;
            }
        }
    }

    .header-button {
        white-space: nowrap;
        img {
            width: 10px;
            filter: invert(27%) sepia(51%) saturate(20%) brightness(250%)
                contrast(97%);
            margin-left: 20px;
            &:hover {
                cursor: pointer;
            }
        }
    }
}

// Custom scroll bar
/* width */
::-webkit-scrollbar {
    height: 10px;
}

/* Handle */
::-webkit-scrollbar-thumb {
    background: rgb(94, 94, 94);
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
    background: #4f4f4f;
}

table {
    color: white;
    font-size: 0.9rem;
    display: block;
    overflow: auto;
    max-height: 400px;
    white-space: nowrap;

    td {
        padding: 3px 0px 0px 15px;
    }

    td.border-row {
        border: 0.7px solid #2a2c2f;
        border-style: solid none solid none;
    }
}

.vertical-menu {
    padding: 30px 15px 0px 15px;
    justify-content: space-between;
    flex-direction: column;
    background-color: #323233;
    max-width: 50px;
    display: flex;
    img {
        width: 20px;
        filter: invert(27%) sepia(51%) saturate(20%) brightness(250%)
            contrast(97%);
        margin-bottom: 20px;
        &:hover {
            cursor: pointer;
        }
        &:hover {
            filter: invert(100%) sepia(100%) saturate(100%) brightness(100%)
                contrast(100%);
        }
    }
}

.header-button {
    img {
        animation: icons-header 0.3s both;
        opacity: 1;
    }
}

.icons-top,
.icons-bottom {
    img {
        animation: icons-bottom 0.3s both;
        opacity: 1;
    }
}

@keyframes icons-header {
    from {
        transform: translate(90%, -200px);
        opacity: 0;
    }
}

@keyframes icons-bottom {
    from {
        transform: translate(-400%, -80px);
        opacity: 0;
    }
}

.header-button img:nth-child(1) {
    animation-delay: 0.1s;
}
.header-button img:nth-child(2) {
    animation-delay: 0.2s;
}
.header-button img:nth-child(3) {
    animation-delay: 0.3s;
}

.icons-top img:nth-child(1) {
    animation-delay: 0s;
}
.icons-top img:nth-child(2) {
    animation-delay: 0.1s;
}

.icons-top img:nth-child(3) {
    animation-delay: 0.2s;
}
.icons-top img:nth-child(4) {
    animation-delay: 0.3s;
}
.icons-bottom img:nth-child(1) {
    animation-delay: 0.4s;
}
.icons-bottom img:nth-child(2) {
    animation-delay: 0.5s;
}
#text-preview {
    background: #1e1e1e;
    display: flex;
    flex-direction: row;
    max-width: 1000px;
    border: 1px solid white;
    border-style: none solid solid solid;
}

.blinking-cursor {
    font-size: 1rem;
    color: #ffffff;
    -webkit-animation: 1s blink step-end infinite;
    -moz-animation: 1s blink step-end infinite;
    -ms-animation: 1s blink step-end infinite;
    -o-animation: 1s blink step-end infinite;
    animation: 1s blink step-end infinite;
}
@keyframes blink {
    from,
    to {
        color: transparent;
    }
    50% {
        color: #ffffff;
    }
}
@-moz-keyframes blink {
    from,
    to {
        color: transparent;
    }
    50% {
        color: #2c3e50;
    }
}
@-webkit-keyframes blink {
    from,
    to {
        color: transparent;
    }
    50% {
        color: #2c3e50;
    }
}
@-ms-keyframes blink {
    from,
    to {
        color: transparent;
    }
    50% {
        color: #2c3e50;
    }
}
@-o-keyframes blink {
    from,
    to {
        color: transparent;
    }
    50% {
        color: #2c3e50;
    }
}
</style>
