webpackJsonp([1,0],[function(e,t,o){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}var i=o(19),c=s(i),n=o(15),a=s(n);new c.default({el:"body",components:{App:a.default}})},function(e,t,o){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),o(5),o(10);var i=o(18),c=s(i),n=o(16),a=s(n);t.default={components:{RightPart:c.default,MainBlock:a.default},data:function(){return{loaded:!1,page:0,videoDisplayed:!1}},ready:function(){var e=this;setTimeout(function(){e.loaded=!0},200)},methods:{hideVideo:function(){this.videoDisplayed=!1},getBackgroundColor:function(){return 1==this.page?"#FFE0D1":2==this.page?"#BFD8F4":"#A8CDF7"}},events:{"menu-change":function(e){this.page=e},"show-video":function(){this.videoDisplayed=!0}}}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={components:{},props:["page"],data:function(){return{}},methods:{getClassForPage:function(e){return e==this.page?"current":e<this.page?"before":"after"},showVideo:function(){this.$dispatch("show-video")}}}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:["page"],data:function(){return{}},methods:{setMenu:function(e){this.$dispatch("menu-change",e)}}}},function(e,t,o){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=o(17),c=s(i);t.default={components:{Menu:c.default},props:["page"],data:function(){return{}},methods:{getClassForPage:function(e){return e==this.page?"current":e<this.page?"before":"after"}}}},,function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){e.exports=' <div id=app :style="{ background: getBackgroundColor() }"> <div class=right-block> <right-part :page=page></right-part> </div> <div class=main-block :class="{ \'full-width\': page == 0 }"> <main-block :page=page></main-block> </div> <div v-if=videoDisplayed class=video-container @click=hideVideo transition=fade> <iframe src=https://player.vimeo.com/video/169842522 width=640 height=360 frameborder=0 webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe> </div> </div> '},function(e,t){e.exports=' <div class=container _v-08dc88e5=""> <div class="full-page page page-1" :class=getClassForPage(0) _v-08dc88e5=""> <div class=illu-1 _v-08dc88e5=""></div> <h1 _v-08dc88e5="">Enrichissez <br _v-08dc88e5=""> votre experience <br _v-08dc88e5=""> avec la nature </h1> <p class=show-video @click=showVideo _v-08dc88e5="">VOIR LA VIDÉO DE PRÉSENTATION</p> </div> <div class="full-page page page-1" :class=getClassForPage(1) _v-08dc88e5=""> <div class=illu-2 _v-08dc88e5=""></div> <div class=phone-1 _v-08dc88e5=""></div> </div> <div class="full-page page page-1" :class=getClassForPage(2) _v-08dc88e5=""> <div class=member _v-08dc88e5=""> <div class=relative-container _v-08dc88e5=""> <div class=user-img _v-08dc88e5=""></div> </div> </div> <div class=member _v-08dc88e5=""> <div class=relative-container _v-08dc88e5=""> <div class=user-img _v-08dc88e5=""></div> </div> </div> <div class=member _v-08dc88e5=""> <div class=relative-container _v-08dc88e5=""> <div class=user-img _v-08dc88e5=""></div> </div> </div> <div class=member _v-08dc88e5=""> <div class=relative-container _v-08dc88e5=""> <div class=user-img _v-08dc88e5=""></div> </div> </div> </div> </div> '},function(e,t){e.exports=' <div class=right-part _v-4c985580=""> <div class=menu-container _v-4c985580=""> <menu :page=page _v-4c985580=""></menu> </div> <div class=text-content :class="{ \'not-visible\': page == 0 }" _v-4c985580=""> <div class=content :class=getClassForPage(1) _v-4c985580=""> <span class=num _v-4c985580="">01</span> <h2 _v-4c985580="">Plante évolutive</h2> <p _v-4c985580="">Symbiosis vous propose d’<b _v-4c985580="">expérimenter différemment la nature qui vous entoure</b>.</p> <p _v-4c985580=""> Pour ce faire, l’application génère une plante unique, qui évoluera grâce à vos pas quotidiens. Symbiosis a pour ambition de vous faire découvrir la nature urbaine autrement, en prennant conscience de votre marche. </p> </div> <div class=content :class=getClassForPage(2) _v-4c985580=""> <span class=num _v-4c985580="">SYMBIOSIS</span> <h2 _v-4c985580="">L\'Équipe</h2> <p class=team-member _v-4c985580=""><b _v-4c985580="">Etienne Deladonchamps</b> — Dev, conception</p> <p class=team-member _v-4c985580=""><b _v-4c985580="">Camille Frairrot</b> — Design, illu, conception</p> <p class=team-member _v-4c985580=""><b _v-4c985580="">Quentin Tshaimanga</b> — Dev, conception</p> <p class=team-member _v-4c985580=""><b _v-4c985580="">Victoire Douy</b> — Design, UI, conception</p> </div> </div> </div> '},function(e,t){e.exports=' <div class=menu :class="{ \'white-bg\': page == 0 }" _v-d8ce7a44=""> <ul _v-d8ce7a44=""> <li @click=setMenu(0) _v-d8ce7a44=""><button type=button name=button class=btn :class="{ selected: page == 0 }" _v-d8ce7a44="">Concept</button></li> <li @click=setMenu(1) _v-d8ce7a44=""><button type=button name=button class=btn :class="{ selected: page == 1 }" _v-d8ce7a44="">Application</button></li> <li @click=setMenu(2) _v-d8ce7a44=""><button type=button name=button class=btn :class="{ selected: page == 2 }" _v-d8ce7a44="">Team</button></li> </ul> </div> '},function(e,t,o){var s,i,c={};o(6),s=o(1),i=o(11),e.exports=s||{},e.exports.__esModule&&(e.exports=e.exports.default);var n="function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports;i&&(n.template=i),n.computed||(n.computed={}),Object.keys(c).forEach(function(e){var t=c[e];n.computed[e]=function(){return t}})},function(e,t,o){var s,i,c={};o(7),s=o(2),i=o(12),e.exports=s||{},e.exports.__esModule&&(e.exports=e.exports.default);var n="function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports;i&&(n.template=i),n.computed||(n.computed={}),Object.keys(c).forEach(function(e){var t=c[e];n.computed[e]=function(){return t}})},function(e,t,o){var s,i,c={};o(9),s=o(3),i=o(14),e.exports=s||{},e.exports.__esModule&&(e.exports=e.exports.default);var n="function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports;i&&(n.template=i),n.computed||(n.computed={}),Object.keys(c).forEach(function(e){var t=c[e];n.computed[e]=function(){return t}})},function(e,t,o){var s,i,c={};o(8),s=o(4),i=o(13),e.exports=s||{},e.exports.__esModule&&(e.exports=e.exports.default);var n="function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports;i&&(n.template=i),n.computed||(n.computed={}),Object.keys(c).forEach(function(e){var t=c[e];n.computed[e]=function(){return t}})}]);
//# sourceMappingURL=app.ffa7bb1cdb1b9d1dc36d.js.map