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
        .main-nav-link {
            transition: color 0.2s ease-out;
            padding: 0 1.5rem;
            position: relative;
            overflow: hidden;
        }
        .main-nav-link:hover {
            color: #32084D;
        }
        .bg-slide {
            width: 100%;
            height: 100%;
            background: #00ffe0;
            transform: skewX(-25deg) translateX(-15px);
            position: absolute;
            top: 0;
            left: 0;
            z-index: -1;
        }
        .slide-enter-active {
            animation: slide-in 0.3s ease-in-out forwards;
        }
        .slide-leave-active {
            animation: slide-in 0.3s ease-in-out reverse forwards;
        }
        
        @keyframes slide-in {
            0% {
                transform: skewX(-25deg) translateX(-130%);
            }
            100% {
                transform: skewX(-25deg) translateX(-15px);
            }
        }
    }
</style>