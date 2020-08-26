<template>
    <section class="works">
        <h2 class="section-heading">My Works</h2>
        <div class="works-collection">
            <worksItem v-for="(work, index) in worksDataSortedByDate" :key="index" :workItem="work"></worksItem>
        </div>
    </section>
</template>

<script>
import worksItem from '../components/worksItem';

export default {
    name: 'Works',
    components: {
        worksItem
    },
    computed: {
        worksDataSortedByDate() {
            let worksData = this.$store.state.works.works;
            worksData.sort(function(a, b) {
                let dateA = new Date(a.date);
                let dateB = new Date(b.date);
                return dateB - dateA;
            })

            return worksData;
        }
    }
}
</script>

<style lang="scss" scoped>
    .works {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-top: 3.5rem;

        &-collection {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
        }
    }
    @media screen and (min-width: 720px) {
        .works {
            max-width: 1080px;
        }
    }
</style>