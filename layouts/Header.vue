<template>
  <header>
    <div class="content">
      <div class="layer"></div>
      <nuxt-link to='/top' class="logo">
        <img src="../static/logo_w.png" alt="">
      </nuxt-link>
      <div class="left">
        <nuxt-link to="login">
          <div class="sign-in　submit btn">
            <p>ログイン/新規アカウント</p>
          </div>
        </nuxt-link>
        <div class="account" id="account" @click="openModal">
          <headerModal v-if="showModal" />
        </div>
        <nuxt-link to="/create">
          <div class="submit btn">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00a496" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
            <p>New Camp</p>
          </div>
        </nuxt-link>
      </div>
    </div>

  </header>
</template>
<script type="text/javascript">
// let layer = document.getElementsByClassName('layer');
// let account_menu = document.getElementById('account_menu');
// let account = document.getElementById('account');
//
// function show_menu() {
//   account_menu.classList.toggle('active');
//   layer[0].classList.toggle('active');
// }
// account.addEventListener("click",show_menu);
// layer[0].addEventListener("click",show_menu);
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
    padding: 18px 0;
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
        .account {
          background-color: $sub_color;
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
          margin-left: 0.8rem;
          p {
            margin-left: 6px;
          }
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
    padding: 18px 0;
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
          box-shadow: $box_shadow01;
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
        .submit {
          display: flex;
          align-items: center;
          margin-left: 0.8rem;
          p {
            margin-left: 6px;
          }
        }
      }
    }
  }
}


@media screen and (min-width: 0px) and (max-width: 500px) {
  header {
    position: relative;
    background-color: rgba(250, 250, 250, 1);
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    padding: 18px 0;
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
        .submit {
          display: none;
          align-items: center;
          margin-left: 0.8rem;
          p {
            margin-left: 6px;
          }
        }
      }
    }
  }
}
</style>
