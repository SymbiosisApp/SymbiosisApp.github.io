<template>
  <div id="app" :style="{ background: getBackgroundColor() }">
    <div class="right-block">
      <right-part :page="page"></right-part>
    </div>
    <div class="main-block" :class="{ 'full-width': page == 0 }">
      <main-block :page="page"></main-block>
    </div>
    <div v-if="videoDisplayed" class="video-container" @click="hideVideo" transition="fade">
      <iframe src="https://player.vimeo.com/video/169842522" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
    </div>
  </div>
</template>

<script>
import 'normalize.css/normalize.css';
import './assets/fonts/fonts.css';
import RightPart from './components/RightPart';
import MainBlock from './components/MainBlock';

export default {
  components: {
    RightPart,
    MainBlock
  },
  data() {
    return {
      loaded: false,
      page: 0,
      videoDisplayed: false
    }
  },
  ready() {
    setTimeout(() => {
      this.loaded = true
    }, 200);
  },
  methods: {
    hideVideo() {
      this.videoDisplayed = false
    },
    getBackgroundColor() {
      if (this.page == 1) {
        return '#FFE0D1'
      }
      return '#A8CDF7'
    }
  },
  events: {
    'menu-change': function (index) {
      this.page = index
    },
    'show-video': function () {
      this.videoDisplayed = true
    }
  }
};
</script>

<style lang="scss">
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
  transition-duration: .3s;
}
.right-block {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  width: 40%;
  min-width: 400px;
}
.main-block {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 40%;
  transition-duration: .3s;

  &.full-width {
    right: 0%;
  }
}

.video-container {
  position: absolute;
  z-index: 2000;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.6);

  iframe {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}





/* always present */
.fade-transition {
  transition: all .3s ease;
  opacity: 1;
}

/* .expand-enter defines the starting state for entering */
/* .expand-leave defines the ending state for leaving */
.fade-enter, .fade-leave {
  opacity: 0;
}

</style>
