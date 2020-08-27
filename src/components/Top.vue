<template>
    <section class="top">
        <div class="top-container">
            <article class="top-intro">
                <h3 class="top-intro-phrase">Hi, I'm Johanna.</h3>
                <h2 class="top-intro-title">Front end developer</h2>
                <p class="top-intro-text">I am a 28 year old from Gothenburg. I study front end development, and am looking for a new challenge outside the classroom.</p>
            </article>
        </div>
    </section>
</template>

<script>
export default {
    name: 'Top'
}
</script>

<style lang="scss" scoped>
    .top {
        width: 100vw;
        height: 85vh;
        background: #00ffe0;
        margin-top: 3.5rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
        overflow: hidden;
        
        .top-container {
            background: #32084D;
            height: 100%;
            width: 150vw;
            display: flex;
            justify-content: flex-end;
            align-items: center;
            transform: skewX(-35deg);
            position: absolute;
            left: -70%;
        }
        .top-intro {
            text-align: right;
            padding: 0 0 0 2rem;
            transform: skewX(35deg);
            position: absolute;

            &-phrase {
                color: #ffffff;
                font-size: 1.5rem;
                font-weight: normal;
            }
            &-title {
                color: #ffffff;
                font-size: 2rem;
                text-transform: uppercase;
                margin-bottom: 0.5rem;
                padding-right: 2rem;
                text-shadow: 1px 1px 0 rgba(50,8,77,0.5), 2px 2px 0 #00ffe0;
                width: 250px;
                display: inline-block;
            }
            &-text {
                color: #ffffff;
                text-align: left;
                max-width: 220px;
                padding-right: 2rem;
            }
        }
    }
    @media screen and (min-width: 550px) {
        .top {
            .top-intro {
                &-phrase {
                    font-size: 2rem;
                }
                &-title {
                    width: auto;
                }
                &-text {
                    font-size: 1.2rem;
                    max-width: 400px;
                }
            }
        }   
    }
    @media screen and (min-width: 940px) {
        .top {

            .top-container {
                width: 100vw;
                left: -25%;
            }
            .top-intro {
                max-width: 750px;
                right: 3%;

                &-phrase {
                    font-size: 3rem;
                }
                &-title {
                    font-size: 3rem;
                    padding-right: 4rem;
                    text-shadow: 1px 1px 0 rgba(50,8,77,0.5), 2px 2px 0 #00ffe0, 3px 3px 0 #00ffe0, 4px 4px 0 #00ffe0;
                }
                &-text {
                    font-size: 1.5rem;
                    max-width: 500px;
                    padding-left: 0;
                    padding-right: 0;
                }
            }
        }
    }
</style>