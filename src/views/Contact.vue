<template>
    <section>
        <div class="line"></div>
        <div class="contact-network">
            <h2 class="title-section">Contact</h2>
            <!-- <img
                src="../../src/assets/img/social_networks/Linkedin.png"
                alt="logo linkedin"
            />
            <img
                src="../../src/assets/img/social_networks/Twitter.png"
                alt="logo twitter"
            /> -->

            <ul class="contact-container">
                <!-- <country-flag country='it' size='normal'/> -->
                <li
                    class="contact-elem"
                    v-for="(contact, index) in contact_data"
                    v-bind:key="index"
                >
                    <div class="contact-img">
                        <img class="img-contact" :src="contact.logo" />
                    </div>
                    <div class="contact-data">
                        <div class="contact-type">{{ contact.type }}</div>
                        <button v-if="contact.type == 'email'">
                            {{ contact.value }}
                        </button>
                        <button v-else @click="openLink(contact.url)">
                            {{ contact.value }}
                        </button>
                    </div>
                </li>
            </ul>
        </div>
    </section>
</template>
<script>
export default {
    name: 'Contact',
    data() {
        return {
            contact_data: [
                {
                    type: 'Email',
                    logo: require('@/assets/img/contact_img/Email.png'),
                    url: 'mailto:francois.coche@outlook.it',
                    value: 'francois.coche@outlook.it',
                },
                {
                    type: 'Twitter',
                    logo: require('@/assets/img/contact_img/Twitter.png'),
                    url: 'https://twitter.com/FrancoisDev_',
                    value: 'FrancoisDev_',
                },
                {
                    type: 'Linkedin',
                    logo: require('@/assets/img/contact_img/Linkedin.png'),
                    url: 'https://www.linkedin.com/in/francois-coche/',
                    value: 'in/francois-coche',
                },
                {
                    type: 'GitHub',
                    logo: require('@/assets/img/contact_img/github.png'),
                    url: 'https://github.com/francoiscoche',
                    value: 'francoiscoche',
                },
                {
                    type: 'Localisation',
                    logo: require('@/assets/img/contact_img/Localisation.png'),
                    url: 'https://goo.gl/maps/jRKayDDuZZ9fWgR36',
                    value: 'Roma, Italia',
                },
            ],
        }
    },
    methods: {
        openLink(link) {
            window.open(link)
        },
    },
}
</script>

<style lang="scss" scoped>
@import './../sass/variables';

.contact-container {
    padding-top: 20px;
    animation: fromTheBottom 0.5s;
    opacity: 1;
    .contact-elem {
        display: flex;
        padding: 20px;
        .contact-img {
            img {
                width: 40px;
            }
        }
        .contact-data {
            margin-left: 20px;
            .contact-type {
                font-size: 1.1rem;
                font-weight: 600;
            }
        }
    }
}

// section {
//     margin: 30;
//     padding: 122px;
// }

@keyframes fromTheBottom {
    from {
        opacity: 0;
        transform: translateY(120px);
    }
    to {
        opacity: 1;
    }
}
</style>
