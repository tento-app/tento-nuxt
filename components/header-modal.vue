<template lang="html">
  <div class="account_menu" id="account_menu">
    <ul>
        <div class="header">
          <p class="name">{{ name }}</p>
          <p class="id">{{ username }}</p>
        </div>
      <nuxt-link to="/create" class="sp">
        <li><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgb(163,167,161)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
          <p>New camp</p>
        </li>
      </nuxt-link>
      <nuxt-link to="/account">
        <li><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgb(163,167,161)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
          <p>マイページ</p>
        </li>
      </nuxt-link>
      <nuxt-link to="/mylist">
        <li><svg xmlns="http://www.w3.org/2000/svg" width="18" height="20" viewBox="0 0 24 24" fill="none" stroke="rgb(163,167,161)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg>
          <p>保存したキャンプ</p>
        </li>
      </nuxt-link>
      <a @click="logout">
        <li><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgb(163,167,161)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4M10 17l5-5-5-5M13.8 12H3"/></svg>
          <p>ログアウト</p>
        </li>
      </a>
    </ul>
  </div>
</template>

<script>
import { mapState,mapMutations } from 'vuex'
export default {
    computed: {
        ...mapState('user',['username'])
    },
    methods: {
        ...mapMutations('user',['setToken','setUsername','setLogo']),
        logout: function (){
          this.$store.dispatch('user/logout');
        },
    },
    data(){
      return{
        name:"ジョージハリスン"
      }
    }
}
</script>

<style lang="scss">
@import '~/assets/style/_color.scss';
@media (min-width:840px) {
.account_menu {
  z-index: 999;
  text-align: left;
  color: #555;
  font-size: 14px;
  position: absolute;
  top:75px;
  right:128px;
  &:before{
    content: "";
    position: absolute;
    top: -26px;
    left: 70%;
    margin-left: -15px;
    border: 13px solid transparent;
    border-bottom: 13px solid #fff;
  }
  ul {
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    background-color: #fff;
    border-radius: 8px;
    padding: 0rem 0 1rem;
    font-weight: normal;
    .header {
      width: 100%;
      padding: 1rem;
      border-bottom: $border01;
      p {
        margin: 0;
      }
      .name{
        font-size: 1rem;
        font-weight: bold;
        color: $black01;
      }
      .id {
        font-size: 0.75rem;
        color: $black02;
      }
    }

    li {
      font-size: 14px;
      padding: 6px 12px;
      display: flex;
      align-items: center;
      margin: 0.3rem 0;
      p {
        margin-left: 0.5rem;
      }
      i {
        color: $sub_color;
      }
      &:hover {
        background-color: #eee;
      }
    }
  }
}

}

@media screen and (min-width: 500px) and (max-width: 840px) {
  .account_menu {
    &.active {
      display: block;
    }
    z-index: 999;
    text-align: left;
    color: #555;
    font-size: 14px;
    position: absolute;
    top:75px;
    right:130px;
    &:before{
      content: "";
      position: absolute;
      top: -26px;
      left: 70%;
      margin-left: -15px;
      border: 13px solid transparent;
      border-bottom: 13px solid #fff;
    }
    ul {
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
      background-color: #fff;
      border-radius: 8px;
      padding: 0 0 1rem;
      font-weight: normal;
      .header {
        width: 100%;
        padding: 1rem;
        border-bottom: $border01;
        p {
          margin: 0;
        }
        .name{
          font-size: 1rem;
          font-weight: bold;
          color: $black01;
        }
        .id {
          font-size: 0.75rem;
          color: $black02;
        }
      }
      li {
        font-size: 14px;
        padding: 6px 12px;
        display: flex;
        align-items: center;
        margin: 0.3rem 0;
        p {
          margin-left: 0.5rem;
        }
        i {
          color: $sub_color;
        }
        &:hover {
          background-color: #eee;
          transition: $transtion01;
        }
      }
    }
  }

}
@media screen and (min-width: 0px) and (max-width: 500px) {
  .account_menu {
    z-index: 999;
    text-align: left;
    color: #555;
    font-size: 14px;
    position: absolute;
    top:75px;
    right:20px;
    &:before{
      content: "";
      position: absolute;
      top: -26px;
      left: 80%;
      margin-left: -15px;
      border: 13px solid transparent;
      border-bottom: 13px solid #fff;
    }
    ul {
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
      background-color: #fff;
      border-radius: 8px;
      padding: 0rem 0 1rem;
      font-weight: normal;
      .header {
        width: 100%;
        padding: 1rem;
        border-bottom: $border01;
        p {
          margin: 0;
        }
        .name{
          font-size: 1rem;
          font-weight: bold;
          color: $black01;
        }
        .id {
          font-size: 0.75rem;
          color: $black02;
        }
      }
      li {
        font-size: 14px;
        padding: 6px 12px;
        display: flex;
        align-items: center;
        margin: 0.3rem 0;
        p {
          margin-left: 0.5rem;
        }
        i {
          color: $sub_color;
        }
        &:hover {
          background-color: #eee;
          transition: $transtion01;
        }
      }
    }
  }
}
</style>
