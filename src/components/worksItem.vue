<template>
    <article class="works-item" v-on:click="goToWork">
        <img :src="require(`@/assets/thumb/${ workItem.thumb }_small.png`)" alt="">
        <div class="works-item-content">
            <h3 class="works-item-name">{{ workItem.name }}</h3>
            <p class="works-item-">{{ workItem.type }}</p>
        </div>
    </article>
</template>

<script>
export default {
    name: 'worksItem',
    props: {
        workItem: Object
    },
    methods: {
        setRouter() {
            const itemName = this.workItem.name;
            this.$router.push({ path: `/work/${ itemName }` });
        },
        goToWork() {           
            this.$store.commit('setShow', true);
            
            setTimeout(this.setRouter, 130);
        }
    }
}
</script>

<style lang="scss" scoped>
    .works-item {
        margin: 0 1rem;
        margin-bottom: 2rem;
        width: 304px;
        background: linear-gradient(135deg, rgba(50,8,77,1) 60%, rgba(0,255,224,1) 60%);
        padding: 4px;
        display: flex;
        flex-direction: column;

        &-content {
            background: #ffffff;
            padding: 0.5rem;
        }
    }

    @media screen and (min-width: 720px) {
        .works-item {
            transition: transform 0.3s ease-out;
        }
        .works-item:hover {
            transform: rotate(2deg);
            cursor: pointer;
        }
    }
</style>