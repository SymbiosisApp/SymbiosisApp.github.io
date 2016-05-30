<template>
  <div id="app" :style="{ background: `url(${homeIllu}) no-repeat center` }">
    <!-- <menu></menu> -->
    <p class="come-back" :class="{ 'hidden': !loaded }" >Work in progress.</p>
  </div>
</template>

<script>
import 'normalize.css/normalize.css';
import './assets/fonts/fonts.css';
import homeIllu from './assets/home.svg';
import Menu from './components/Menu';
import Concept from './components/Concept'
import Application from './components/Application'
import Team from './components/Team'
import Contact from './components/Contact'

export default {
  components: {
    Menu,
    Concept,
    Application,
    Team,
    Contact
  },
  data() {
    return {
      homeIllu,
      loaded: false
    }
  },
  ready() {
    setTimeout(() => {
      this.loaded = true
    }, 200);
  },
};
</script>

<style>
html, body {
  height: 100%;
  width: 100%;
  background: #A8CDF7;
  overflow: hidden;
}

#app {
  color: white;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}

.come-back {
  text-align: center;
  font-size: 2rem;
  line-height: 2;
  margin-top: 200px;
  opacity: 1;
  transform: translateY(0);
  transition-duration: .4s;
  font-family: Caslong, Tahoma, sans-serif;
}
.come-back.hidden {
  opacity: 0;
  transform: translateY(50px);
}
</style>
