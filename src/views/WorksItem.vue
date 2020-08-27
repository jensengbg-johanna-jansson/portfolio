<template>
    <main class="works-item">
        <div class="main-thumb">
            <picture>
                <source :srcset="require(`@/assets/thumb/${ workItem.thumb }_large.png`)" media="(min-width: 640px)" />
                <img :src="require(`@/assets/thumb/${ workItem.thumb }_medium.png`)" alt="Work thumbnail" class="main-thumb-img" />
            </picture>
        </div>
        <ul class="techniques">
            <li v-for="(item, index) in workItem.tech" :key="index" :class="item">{{ item }}</li>
        </ul>
        <article class="main-content">
            <h2 class="section-heading works-item-heading">{{ workItem.name }}</h2>
            <div class="main-content-text">
                <div class="desc">
                    <div class="desc-course" v-if="workItem.course != ''">
                        <h4 class="desc-course-heading">Course: </h4>
                        <p>{{ workItem.course }}</p>
                    </div>
                    <p>{{ workItem.desc }}</p>
                    <h4 class="desc-thoughts">My Thoughts:</h4>
                    <p>{{ workItem.thoughts }}</p>
                </div>
                <div class="req">
                    <h3 class="req-heading works-item-heading">Project Requirements</h3>
                    <ul class="req-list">
                        <li class="req-list-item" v-for="(item, index) in workItem.req" :key="index"> {{ item }}</li>
                    </ul>
                </div>
                <p>Code and full project details on <a :href="workItem.repo">GitHub</a></p>
            </div>
        </article>
        <div class="screenshots" :class="{ centerScreenshot: centerImage }">
            <img v-for="(img, index) in workItem.img" :src="require(`@/assets/screenshots/${ img }_mobile.png`)" :key="index" class="screenshots-img">
        </div>
    </main>
</template>

<script>
export default {
    name: 'WorksItem',
    data() {
        return {
            workItem: '',
            imgPaths: '',
            centerImage: false
        }
    },
    methods: {
        findWorkItem() {
            const itemName = this.$route.params.id;
            const item = this.vuexWorksData.find(obj => obj.name === itemName);
            this.workItem = item;
        },
        workThumbnail(imgSize) {
            const path = "@/assets/thumb/";
            const filename = this.workItem.thumb + '_' + imgSize + '.png';
            const filePath = path + filename;

            return filePath;
        },
        centerScreenshots() {
            const images = this.workItem.img;

            if(images.length == 1) {
                this.centerImage = true;
            } else {
                this.centerImage = false; 
            }
        }
    },
    computed: {
        vuexWorksData() {
            return this.$store.state.works.works;
        }
    },
    mounted() {
        this.findWorkItem();
        setTimeout(() => {
            this.$store.commit('setShow', false);
        }, 500);

        this.centerScreenshots();
    }
}
</script>

<style lang="scss" scoped>
    .works-item {
        display: flex;
        flex-direction: column;
        align-items: center;

        &-heading {
            text-align: center;
        }
        .main-thumb {
            margin-top: 3.5rem;
            
            &-img {
                width: 100vw;
            }
        }
        .techniques {
            display: flex;
            list-style-type: none;
            justify-content: space-between;
            font-size: 1.5rem;
            padding: 0.5rem 2rem;
            width: 100vw;

            .CSS {
                color: orange;
            }
            .HTML {
                color: crimson;
            }
            .Vue {
                color: #42b983;
            }
            .JavaScript {
                color: navy;
            }
            .NodeJs {
                color: darkslategray;
            }
        }
        .main-content {
            padding: 1rem 2rem;
            text-align: left;

            &-text {
                .desc {
                    margin-bottom: 2rem;

                    &-course {
                        display: flex;
                        margin-bottom: 1rem;

                        &-heading {
                            margin-right: 0.3rem;
                        }
                    }
                    &-thoughts {
                        margin-top: 1rem;
                    }
                }
                .req {
                    margin-left: 1rem;
                    padding-bottom: 1rem;

                    &-heading {
                        margin-bottom: 0.5rem;
                    }
                }
            }
        }
        .screenshots {
            width: 100vw;
            display: flex;
            overflow: scroll;
            margin-bottom: 2rem;

            &-img {
                width: 320px;
                padding: 0 1rem;
            }
        }
        .centerScreenshot {
            justify-content: center;
        }
    }

    @media screen and (min-width: 720px) {
        .works-item {
            .main-thumb {
                width: 100vw;
                background: #32084D;

                &-img {
                    height: 60vh;
                    width: auto;
                }
            }
            .techniques {
                width: 50vw;
            }
            .main-content {
                max-width: 1080px;
                padding-bottom: 2rem;

                &-text {
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: center;

                    .desc {
                        width: 55%;
                        max-width: 540px;
                        padding: 0 2rem;
                    }
                    .req {
                        padding-right: 2rem;
                        width: 40%;
                    }
                }
            }
            .screenshots {
                max-width: 1080px;

                &-img {
                    width: 600px;
                }
            }
        }
    }

</style>