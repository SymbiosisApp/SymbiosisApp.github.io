<template>
  <div class="container">
    <div class="full-page page page-1" :class="getClassForPage(0)">
      <div class="illu-1"></div>
      <h1>Enrichissez <br> votre experience <br> avec la nature </h1>
      <p class="show-video" @click="showVideo" >VOIR LA VIDÉO DE PRÉSENTATION</p>
    </div>
    <div class="full-page page page-1" :class="getClassForPage(1)">
      <div class="illu-2"></div>
      <div class="phone-1"></div>
    </div>
    <div class="full-page page page-1" :class="getClassForPage(2)">
      <div class="member">
        <div class="relative-container">
          <div class="user-img"></div>
        </div>
      </div>
      <div class="member">
        <div class="relative-container">
          <div class="user-img"></div>
        </div>
      </div>
      <div class="member">
        <div class="relative-container">
          <div class="user-img"></div>
        </div>
      </div>
      <div class="member">
        <div class="relative-container">
          <div class="user-img"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  components: {},
  props: ['page'],
  data() {
    return {
    };
  },
  methods: {
    getClassForPage(page) {
      if (page == this.page) {
        return 'current'
      } else
      if (page < this.page) {
        return 'before'
      } else {
        return 'after'
      }
    },
    showVideo() {
      this.$dispatch('show-video')
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.container{
  position: relative;
  height: 100%;
  width: 100%;
}

p {
  text-align: center;
  margin-top: 100px;
}

.full-page {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.page {
  transition-duration: .3s;
}

.page.after {
  transform: translateX(120%);
  opacity: 0;
}
.page.before {
  transform: translateX(-120%);
  opacity: 0;
}

.page-1 {
  .illu-1 {
    background: url(../assets/home.svg) no-repeat center;
    background-size: contain;
    position: absolute;
    left: 15%;
    top: 15%;
    bottom: 15%;
    right: 15%;
  }

  h1 {
    font-family: Caslong;
    font-weight: 400;
    position: absolute;
    left: 53%;
    bottom: 50%;
    font-size: 4vw;
  }
  .show-video{
    font-family: Campton;
    font-weight: 500;
    position: absolute;
    left: 53%;
    top: 37%;
    letter-spacing: 3px;
    font-size: 1vw;
    cursor: pointer;
    transition-duration: .3s;
    padding-bottom: 1vh;
    border-bottom: 2px solid white;
    &:hover {
      padding-bottom: 1.5vh;
    }
  }
}

.illu-2 {
  background: url(../assets/illu-2.svg) no-repeat center;
  background-size: contain;
  position: absolute;
  left: 15%;
  top: 0;
  bottom: 15%;
  right: -10%;
}

.phone-1 {
  background: url(../assets/phone-1@2x.png) no-repeat center;
  background-size: contain;
  position: absolute;
  left: 50%;
  top: 50%;
  height: 50%;
  width: 50%;
  transform: translate(-50%, -50%);
}

.member {
  transition-duration: .3s;
  width: 25%;
  height: 100%;
  position: absolute;
  cursor: pointer;
  .relative-container {
    position: relative;
    width: 100%;
    height: 100%;
  }
  .user-img {
    top: 0;
    position: absolute;
    bottom: 0;
    left: 1vw;
    right: 1vw;
    z-index: 500;
    transition-duration: .3s;
    &:hover {
      z-index: 1000;
      left: -2vw;
      right: -2vw;
    }
  }

  &:nth-child(1) {
    left: 0;
    .user-img {
      background: url(../assets/user-1.svg) no-repeat center;
      background-size: contain;
    }
  }
  &:nth-child(2) {
    left: 25%;
    .user-img {
      background: url(../assets/user-2.svg) no-repeat center;
      background-size: contain;
    }
  }
  &:nth-child(3) {
    left: 50%;
    .user-img {
      background: url(../assets/user-3.svg) no-repeat center;
      background-size: contain;
    }
  }
  &:nth-child(4) {
    left: 75%;
    .user-img {
      background: url(../assets/user-4.svg) no-repeat center;
      background-size: contain;
    }
  }

  &:hover {
    background: #CBDFF5;
  }
}

</style>
