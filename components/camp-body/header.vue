<template lang="html">
  <div class="campheader" v-bind:class="{ active: headerActive }">
    <div class="text">
      <h1 class="camp_body_text_title pc">{{ title }}</h1>
      <joinbtn :title ="title" v-if="username"/>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import joinbtn from '~/components/camp-body/joinbtn.vue';
export default {
  components :{
    joinbtn
  },
  computed: {
      ...mapState('user',['username','logo'])
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
@import '~/assets/style/_color.scss';
@media (min-width:500px) {
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

  .campheader {
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
        margin-right: auto;
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

}

@media screen and (min-width: 0px) and (max-width: 500px) {
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
  .cover {
    width: 100%;
  }

  .campheader {
    position: relative;
    background-color: rgba(250, 250, 250, 1);
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    z-index: 4;
    position: fixed;
    width: 100%;
    bottom: 0;
    display: none;
    .text {
      max-width: 840px;
      margin: 0 auto;
      display: flex;
      align-items: center;
      h1 {
        font-size: 1.2rem;
        color: #1f1f1f;
      }
      .btn_list {
        padding: 0px;
        margin: 0;
        display: flex;
        justify-content: center;
        width: 100%;
        a {
          margin-right: 0rem;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          img {
            width: 40px;
          }
        }
        .bookmark {
          cursor: pointer;
          width: 50%;
          padding: 10px;
          margin: 0;
          font-size: 14px;
          border-radius: 0px;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: #fff;
          border: $border01;
        }
        .btn_priority {
          max-width: 100%;
          width: 50%;
          margin-bottom: 0;
          padding: 1rem;
          border-radius: 0;
        }



        .liked {
          border: solid 1px rgba(0,0,0,0);
          background-color:$black04 ;
          color: $black02;
          transition: $transtion01;
          &:hover {
            background-color: $black04;
            color: $black02;
          }
          svg {
            transition: $transtion01;
            fill:#fff;
            stroke: #fff;
          }
        }
        .joined {
          background-color: $black04;
          color: $black02;
          &:hover {
            background-color: $black04;
            color: $black02;
          }
        }
      }
    }
  }
}

</style>
