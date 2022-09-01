<template>
    <section>
        <div class="contact-network">
            <img
                src="../../src/assets/img/social_networks/Linkedin.png"
                alt="logo linkedin"
            />
            <img
                src="../../src/assets/img/social_networks/Twitter.png"
                alt="logo twitter"
            />
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
                    logo: '',
                    url: '',
                    value: 'francois.coche@outlook.it',
                },
                {
                    type: 'Twitter',
                    logo: '',
                    url: '',
                    value: 'FrancoisOmar_',
                },
                {
                    type: 'Linkedin',
                    logo: '',
                    url: '',
                    value: '',
                },
                {
                    type: 'Localsation',
                    logo: '',
                    url: '',
                    value: 'Roma, Italia',
                },
            ],
        }
    },
}
</script>

<style lang="scss" scoped>
@import './../sass/variables';

.contact-network {
    padding: 145px;
    img {
        width: 30px;
    }
}
</style>
