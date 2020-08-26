<template>
    <footer class="footer" :class="{ footercolor: hasColor}">
        <p>&copy; 2020 Johanna Jansson</p>
    </footer>
</template>

<script>
export default {
    name: 'Footer',
    data() {
        return {
            hasColor: false
        }
    },
    methods: {
        setFooterColor() {
            if(this.$route.path == "/") {
                this.hasColor = true;
            } else {
                this.hasColor = false;
            }
        }
    },
    mounted() {
        this.setFooterColor();
    },
    watch:{
        $route (){
            this.setFooterColor();
        }
    } 
}
</script>

<style lang="scss" scoped>
    .footer {
        padding: 0.5rem 0;
    }
    .footercolor {
        background: #32084D;
        color: #ffffff;
    }
</style>