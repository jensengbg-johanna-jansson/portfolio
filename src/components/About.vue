<template>
    <section class="about">
        <h2 class="section-heading">About Me</h2>
        <article class="about-content">
            <div class="about-content-info">
                <h3 class="about-content-info-header">Front end developer with a passion for design</h3>
                <p class="about-content-info-text">Since a young age I have had an interest in graphic design and by the end of junior high school I found an interest in web design. Since then I have studied web design in High school and spent my spare time on small hobby projects.</p>
                <p class="about-content-info-text">Today I am a student in the front end development program at Jensen Yrkeshhögkola. In less than a year I have further developed my skills in HTML, CSS, javascript and UX, as well as learnt Vue.js, basic NodeJs and how to make PWA's. </p>
            </div>
            <aside class="about-competenses">
                <p class="about-competenses-item">HTML</p>
                <p class="about-competenses-item">CSS</p>
                <p class="about-competenses-item">JavaScript</p>
                <p class="about-competenses-item">Vue.js</p>
            </aside>
        </article>
    </section>
</template>

<script>
export default {
    name: 'About'
}
</script>

<style lang="scss" scoped>
    .about {
        padding-top: 3.5rem;

        &-content {
            padding: 0 2rem;

            &-info {
                padding-bottom: 1rem;

                &-header {
                    text-align: left;
                }
                
                &-text {
                    text-align: left;
                    margin-bottom: 1rem;
                }
            }
        }
        &-competenses {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;

            &-item {
                box-shadow: 2px 2px 0 #00ffe0, -1px -1px 0 #32084D, -2px -2px 0 #32084D, -3px -3px  0 #32084D, -4px -4px  0 #32084D;
                border-radius: 50%;
                font-size: 1rem;
                display: flex;
                align-items: center;
                justify-content: center;
                width: 100px;
                height: 90px;
                margin: 0 1rem;
                margin-bottom: 1rem;
            }
        }        
    }

    // Desktop
    @media screen and (min-width: 720px) {
        .about {
            max-width: 1080px;
            padding-bottom: 3.5rem;

            &-content {
                display: flex;
                justify-content: space-between;

                &-info {
                    padding: 0 4rem;
                    max-width: 720px;
                    line-height: 2rem;
                }
            }
            &-competenses {
                align-items: center;
                max-width: 300px;
            }
        }
    }
</style>