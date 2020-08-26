<template>
    <router-link tag="a" :to="{ name: 'Home',  hash: anchorLink }" class="main-nav-link" @mouseover.native="hover = true" @mouseleave.native="hover = false">{{ linkName }} 
        <transition name="slide">
            <span class="bg-slide" v-if="hover"></span>
        </transition>
    </router-link>
</template>

<script>
export default {
    name: 'navButton',
    props: {
        linkName: String,
        anchorLink: String
    },
    data() {
        return {
            hover: false
        }
    }
}
</script>

<style lang="scss" scoped>
    .main-nav-link {
        text-transform: uppercase;
        font-size: 1rem;
        height: 3.5rem;
        color: #ffffff;
        text-decoration: none;
        display: flex;
        align-items: center;
    }
    
    @media screen and (min-width: 720px) {
        .bg-slide {
            width: 100%;
            height: 100%;
            background: #00ffe0;
            transform: translateX(-40px) skewX(-25deg);
            position: absolute;
            top: 0;
            z-index: -1;
        }
        .slide-enter-active, .slide-leave-active {
            transition: transform 0.2s ease-in-out;
        }
        .slide-enter, .slide-leave-to {
            transform: translateX(-130%) skewX(-25deg);
        }

        .main-nav-link {
            transition: color 0.2s ease-out;
            padding: 0 1.5rem;
            position: relative;
            overflow: hidden;
        }
        .main-nav-link:hover {
            color: #32084D;
        }
    }
</style>