<template lang="html">
  <div class="header" v-bind:class="{ active: headerActive }">
    <div class="text">
      <h1 class="camp_body_text_title pc">{{ title }}</h1>
      <joinbtn :title ="title"/>
    </div>
  </div>
</template>

<script>
import joinbtn from '~/components/camp-body/joinbtn.vue';
export default {
  components :{
    joinbtn
  },
  props: {
    title :String
  },
  data() {
    return {
      twUrl : '',
      headerActive:false,
      scrollY:0,
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  methods : {
    handleScroll: function() {
        this.scrollY = window.scrollY;
        if (this.scrollY > 500) {
          this.headerActive = true
        } else {
          this.headerActive = false
        }
    }
  },
}
</script>

<style lang="scss">
.active {
  display:block !important;
  opacity: 1;
  animation: fadein01 0.2s ease-in 0s;
}
@import '~/assets/style/_color.scss';
@keyframes fadein01 {
  0% {
    transform: translateY(-5px);
    opacity: 0;
  }
  100% {
    transform: translateY(0px);
    opacity: 1;
  }
}

@keyframes fadeout01 {
  0% {
    transform: translateY(0px);
    opacity: 1;
  }
  100% {
    transform: translateY(-5px);
    opacity: 0;
  }
}

.header {
  position: relative;
  background-color: rgba(250, 250, 250, 1);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 0.9rem 0;
  z-index: 4;
  position: fixed;
  width: 100%;
  top: 0;
  display: none;
  .text {
    max-width: 840px;
    margin: 0 auto;
    padding: 0px 30px;
    display: flex;
    align-items: center;
    h1 {
      font-size: 1.2rem;
      color: #1f1f1f;
    }
    .btn_list {
      margin-left: auto;
      display: flex;
      align-items: center;
      a {
        margin-right: 0.5rem;
        box-shadow: $box_shadow01;
        width: 35px;
        height: 35px;
        border-radius: 50%;
        img {
          width: 35px;
        }
      }
      
    }
  }
}

</style>
