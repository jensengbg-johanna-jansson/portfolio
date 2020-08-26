<template>
  <div id="app">
    <transition name="slide" mode="out-in">
      <div v-if="showOverlay" class="transition-overlay"></div>
    </transition>

    <MainNav></MainNav>
    <router-view/>
    <Footer></Footer>
  </div>
</template>

<script>
import MainNav from './components/Nav';
import Footer from './components/Footer';
import WorksData from './assets/works.json';

export default {
  components: {
    MainNav,
    Footer
  },
  data() {
    return {
      works: WorksData
    }
  },
  created() {
    this.$store.commit('setWorks', this.works);
  },
  computed: {
    showOverlay() {
      return this.$store.state.show;
    }
  }
}
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
html {
  scroll-behavior: smooth;
}
body {
  max-width: 100vw;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.section-heading {
  margin-bottom: 1rem;
}

.transition-overlay {
  background: #32084D;
  width: 100vw;
  height: 100vh;
  z-index: 2;
  position: fixed;
  top: 0;
  left: 0;
}

.slide-enter-active, .slide-leave-active {
  transition: width 0.13s linear;
}

.slide-enter, .slide-leave-to {
  width: 0;
}
</style>
