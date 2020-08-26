<template>
    <section class="contact" id="#contact">
        <p class="contact-phrase">Like what you see?</p>
        <h2 class="contact-heading">Contact Me</h2>
        <p class="contact-text">joja92@hotmail.com</p>
        <a class="contact-text" href="https://www.linkedin.com/in/johannajansson1/">LinkedIn</a>
    </section>
</template>

<script>
export default {
    name: 'Contact'
}
</script>

<style lang="scss" scoped>
    .contact {
        padding-top: 3.5rem;
        width: 100vw;
        min-height: 50vh;
        background: #32084D;
        color: #ffffff;

        &-heading {
            text-shadow: 1px 1px 0 #32084D, 2px 2px 0 #00ffe0;
            font-size: 2.2rem;
            font-weight: bold;
            margin-bottom: 2rem;
        }
        &-phrase {
            color: #00ffe0;
            font-size: 1.2rem;
        }
        &-text {
            color: #ffffff;
            font-size: 1.2rem;
        }
    }
</style>