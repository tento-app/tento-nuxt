<template>
  <header>
    <div class="content">
      <div class="layer"></div>
      <nuxt-link to='/top' class="logo">
        <img src="../static/logo_w.png" alt="">
      </nuxt-link>
      <!-- <nuxt-link to="/user">
          <p>User</p>
      </nuxt-link> -->
      <div class="left">
        <nuxt-link to="/camp" class="search_icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#aaa" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
        </nuxt-link>
        <nuxt-link to="/user/login" v-if="!username">
          <div class="sign-in　submit btn">
            <p>Sign In</p>
          </div>
        </nuxt-link>
        <nuxt-link to="/user/create" v-if="!username">
          <div class="sign-up　submit btn_priority">
            <p>Sign Up</p>
          </div>
        </nuxt-link>
        <div class="account" id="account" @click="openModal"  v-if="logo && username" :style="{ 'background-image' : 'url(https://media.tento.app/' + logo + ')' }" >
          <headerModal v-if="showModal" :hostname='username' />
        </div>
        <div class="account empty" id="account" @click="openModal" v-if="!logo && username">
          <headerModal v-if="showModal" :hostname='username' />
        </div>
        <nuxt-link to="/camp/create" v-if="username" class="pc">
          <div class="submit btn_priority">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
            <p>New Camp</p>
          </div>
        </nuxt-link>
      </div>
    </div>

  </header>
</template>
<script type="text/javascript">
import { mapState } from 'vuex'
import headerModal from '~/components/header-modal.vue';
export default {
  components: {
    headerModal
  },
  data() {
    return{
      showModal: false
    }
  },
  computed: {
      ...mapState('user',['username','logo'])
  },
  methods: {
    openModal() {
      this.showModal = !this.showModal
    }
  }
}

</script>


<style lang="scss">
@import '~/assets/style/_color.scss';

@media (min-width:840px) {
  header {
    position: relative;
    background-color: rgba(250, 250, 250, 1);
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    padding: 0.7rem 0;
    z-index: 4;
    position: fixed;
    width: 100%;
    top: 0;
    .content {
      max-width: 840px;
      padding: 0 30px;
      margin: 0 auto;
      display: flex;
      align-items: center;
      position: relative;
      .logo {
        font-size: 0;
        img {
          width: 100px;
        }
      }
      .left {
        display: flex;
        align-items: center;
        margin-left: auto;
        .search_icon {
          margin-right: 1rem;
        }
        .empty {
          background-image: url('../static/icon_empty.png');
        }
        .account {
          background-size: cover;
          background-position: center;
          margin-right: 1rem;
          font-size: 0;
          padding: 0;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          box-shadow: $box_shadow01;
          cursor: pointer;
          box-sizing: border-box;
          border: solid 0.5px $black03;
          &:hover {
            transition: $transtion01;
            box-shadow: $box_shadow02;
          }
        }
        .contact {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 45px;
          height: 45px;
          margin: 0;
          margin-left: 0.8rem;
          border-radius: 50%;
          font-size: 24px;
          padding: 0;
          color: $main_color;
        }
        .submit {
          display: flex;
          align-items: center;
          margin-right: 0.5rem;
        }
      }
    }
  }
}

@media screen and (min-width: 500px) and (max-width: 840px) {
  header {
    position: relative;
    background-color: rgba(250, 250, 250, 1);
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    padding: 0.7rem 0;
    z-index: 4;
    position: fixed;
    width: 100%;
    top: 0;
    .content {
      max-width: 840px;
      padding: 0 30px;
      margin: 0 auto;
      display: flex;
      align-items: center;
      position: relative;
      .logo {
        font-size: 0;
        img {
          width: 100px;
        }
      }
      .left {
        display: flex;
        align-items: center;
        margin-left: auto;
        .search_icon {
          margin-right: 1rem;
        }
        .empty {
          background-image: url('../static/icon_empty.png');
        }
        .account {
          background-size: cover;
          background-position: center;
          margin-right: 1rem;
          font-size: 0;
          padding: 0;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          box-shadow: $box_shadow01;
          box-shadow: $box_shadow01;
          border: solid 0.5px $black03;
          cursor: pointer;
          box-sizing: border-box;
          &:hover {
            transition: $transtion01;
            box-shadow: $box_shadow02;
          }
        }
        .contact {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          margin: 0;
          margin-left: 0.8rem;
          border-radius: 50%;
          font-size: 24px;
          padding: 0;
          color: $main_color;
        }
      }
    }
  }
}


@media screen and (min-width: 0px) and (max-width: 500px) {
  .pc {
    display: none;
  }
  header {
    position: relative;
    background-color: rgba(250, 250, 250, 1);
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    padding: 0.7rem 0;
    z-index: 4;
    position: fixed;
    width: 100%;
    top: 0;
    .content {
      max-width: 840px;
      padding: 0 15px;
      margin: 0 auto;
      display: flex;
      align-items: center;
      position: relative;
      .logo {
        font-size: 0;
        img {
          width: 80px;
        }
      }
      .left {
        display: flex;
        align-items: center;
        margin-left: auto;
        .account {
          background-image: url("../static/icon.jpg");
          background-size: cover;
          background-position: center;
          margin-left: 0.8rem;
          font-size: 0;
          padding: 0;
          width: 45px;
          height: 45px;
          border-radius: 50%;
          box-shadow: $box_shadow01;
          cursor: pointer;
          box-sizing: border-box;
          border: solid 0.5px $black03;
          &:hover {
            transition: $transtion01;
            box-shadow: $box_shadow02;
          }
        }
        .contact {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          margin: 0;
          margin-left: 0.8rem;
          border-radius: 50%;
          font-size: 24px;
          padding: 0;
          color: $main_color;
          font-size: 17px
        }
      }
    }
  }
}
</style>
