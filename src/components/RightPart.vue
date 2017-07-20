<template>
  <div class="right-part">
    <div class="menu-container">
      <menu :page="page"></menu>
    </div>
    <div class="text-content" :class="{ 'not-visible': page == 0 }">
      <div class="content" :class="getClassForPage(1)">
        <span class="num">01</span>
        <h2>Plante évolutive</h2>
        <p>Symbiosis vous propose d’<b>expérimenter différemment la nature qui vous entoure</b>.</p>
        <p>
          Pour ce faire, l’application génère une plante unique, qui évoluera grâce à vos pas quotidiens. Symbiosis a pour ambition de vous faire découvrir la nature urbaine autrement, en prennant conscience de votre marche.
        </p>
      </div>
      <div class="content" :class="getClassForPage(2)">
        <span class="num">SYMBIOSIS</span>
        <h2>L'Équipe</h2>
        <p class="team-member"><b>Etienne Deladonchamps</b> — Dev, conception</p>
        <p class="team-member"><b>Camille Frairrot</b> — Design, illu, conception</p>
        <p class="team-member"><b>Quentin Tshaimanga</b> — Dev, conception</p>
        <p class="team-member"><b>Victoire Douy</b> — Design, UI, conception</p>
      </div>
    </div>
  </div>
</template>

<script>
import Menu from './Menu';

export default {
  components: {
    Menu
  },
  props: ['page'],
  data() {
    return {};
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
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.right-part{
  position: relative;
  height: 100%;
  width: 100%;
}
.text-content {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: white;
  transition-duration: .3s;
  color: #BBB3B3;
  overflow: hidden;

  &.not-visible {
    transform: translateX(100%)
  }

  .content {
    position: absolute;
    height: 100%;
    width: 100%;
    box-sizing: border-box;
    padding: 70px;
    padding-right: 40px;
    padding-top: 40%;
    font-size: 1.5vw;
    line-height: 1.5;
    transition-duration: .3s;

    &.before {
      transform: translateX(-100%);
      opacity: 0;
    }
    &.after {
      transform: translateX(100%);
      opacity: 0;
    }

    h2 {
      color: #FF6A4D;
      font-family: Caslong;
      font-weight: 400;
      font-size: 3vw;
    }
    p {
      font-family: Campton, Tahoma, sans-serif;
      font-weight: 300;
    }
    .team-member {

    }
    b {
      font-weight: 500;
    }
  }
}
.menu-container {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  height: 80px;
  z-index: 1000;
}
</style>
