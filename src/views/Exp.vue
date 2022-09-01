<template>
    <transition>
        <section>
            <div class="line"></div>
            <div class="experience">
                <h2 class="title-section">Projects and experiences</h2>
                <br />
                <!-- <div class="projets">
                <img alt="Vue logo" src="../assets/TMA.png">
            </div> -->
                <!-- <div class="row"> -->
                <div class="card mb-7" style="">
                    <div class="row no-gutters">
                        <div class="col-md-4">
                            <img
                                src="../assets/TMA.png"
                                class="card-img"
                                alt="..."
                            />
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">
                                    Side Project - Track My Assets
                                </h5>
                                <br />
                                <p class="card-text">
                                    Track My Asset is a tracker for NFT
                                    collections. It allows you to receive
                                    personalized Discord, Telegram or Mail
                                    notifications when the collection you have
                                    been following has changed its floor price.
                                </p>
                                <br />
                                <div class="card-competences">
                                    <ul>
                                        <li>Node.JS</li>
                                        <li>Sass</li>
                                        <li>Discord BOT</li>
                                        <li>Telegram BOT</li>
                                        <li>Web APIs</li>
                                    </ul>
                                </div>
                                <br />
                                <button class="btn-card-live">See Live</button>
                            </div>
                        </div>
                    </div>
                </div>
                <br />
                <div class="card mb-7" style="">
                    <div class="row no-gutters">
                        <div class="col-md-4">
                            <img src="" class="card-img" alt="..." />
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">
                                    Sopra Steria - Consultat
                                </h5>
                                <p class="card-text">
                                    This is a wider card with supporting text
                                    below as a natural lead-in to additional
                                    content. This content is a little bit longer
                                    his is a wider card with supporting text
                                    below as a natural lead-in to additional
                                    content. This content is a little bit
                                    longer.
                                </p>
                                <br />
                                <div class="card-competences">
                                    <ul>
                                        <li>PHP</li>
                                        <li>Mongo DB</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- </div> -->
            </div>
        </section>
    </transition>
</template>

<script>
export default {
    name: 'Exp',
}
</script>

<style lang="scss" scoped>
@import './../sass/variables';

section {
    margin: 30;
    padding: 122px;

    .card {
        background: rgb(0, 0, 0);
        margin: 30px;
        padding: 10px;
        border: 1px solid white;

        .card-title {
            color: #04b96e;
            font-size: 1.5rem;
        }

        .card-competences ul li {
            background: #fff;
            display: inline;
            color: #4a4a4a;
            margin: 0rem 0.5rem 0.5rem 0;
            padding: 0.5rem 0.7rem;
        }
        .btn-card-live {
            /* top: 0; */
            bottom: 20px;
            margin-right: 33px;
            position: absolute;
            padding: 10px;
            font-size: 1.2rem;
            right: 0;
            background: transparent;
            color: #ffffff;
            border: 1px solid rgb(255, 255, 255);
            display: block;
        }
    }
}
.projets {
    border: 1px solid red;
    /* display:flex; */
    width: 70vh;
    display: flex;
    justify-content: center;
}

.projets img {
    width: 100%;
}
</style>
