<template>
  <main class="main-container">
    <Top></Top>
    <About id="about"></About>
    <Works id="works"></Works>
    <Contact id="contact"></Contact>
  </main>
</template>

<script>
import Top from '../components/Top';
import About from '../components/About';
import Works from '../components/Works';
import Contact from '../components/Contact'

export default {
  components: {
    Top,
    About,
    Works,
    Contact
  }
}
</script>

<style lang="scss" scoped>
  .main-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>