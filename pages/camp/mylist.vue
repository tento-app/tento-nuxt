<template lang="html">
  <section id="account">
    <Header />
    <link href="https://fonts.googleapis.com/css?family=Noto+Sans+JP|Rubik" rel="stylesheet">
    <div class="main">
      <div class="account_edit">
  <div class="content item">
    <div class="nav">
      <h1>Store Camp</h1>
    </div>
        <div class="cards_list">
            <nuxt-link :to="{ name: 'camp-id' , params: { id: like.node.project.id }}" class="card_link" v-for="like in allLikes" :key="like.node.id">
                <div class="card">
                <!-- <div class="card_img" :style="{ 'background-image' : 'url(https://object-storage.tyo2.conoha.io/v1/nc_ac83d3c0bf5f4fb0a05b3e1c0d3164f4/api/' + like.node.project.thumbnail + ')' }"></div> -->
                <div class="card_src_img">
                  <img :src="'https://object-storage.tyo2.conoha.io/v1/nc_ac83d3c0bf5f4fb0a05b3e1c0d3164f4/api/' + like.node.project.thumbnail" style='width:100%;' alt="">
                </div>
                <div class="card_txt">
                    <h4>{{ like.node.project.name }}</h4>
                    <div class="card_txt_user">
                    <div class="card_txt_user_img" :style="{ 'background-image' : 'url(https://object-storage.tyo2.conoha.io/v1/nc_ac83d3c0bf5f4fb0a05b3e1c0d3164f4/api/' + like.node.project.user.logo + ')' }"></div>
                    <div class>
                        <p class="card_txt_user_name">{{ like.node.project.user.username }}</p>
                        <p class="card_txt_user_position">{{like.node.project.user.position}}</p>
                    </div>
                    </div>
                </div>
                </div>
            </nuxt-link>
        </div>
        <div class="empty_posted empty" v-if="allLikes < 1">
          <h3>保存したキャンプがありません...</h3>
          <div class="img">
            <img src="../../static/404_01.svg" alt="">
          </div>
          <div class="button">
            <nuxt-link to="/camp/" class='btn_priority'>キャンプ一覧</nuxt-link>
          </div>
        </div>
        </div>
      </div>
    </div>
    <Footer />
  </section>
</template>

<script>
import allLikesGql from '~/graphql/query/allLikes.gql'
import { mapState } from 'vuex'

import Header from '~/layouts/Header.vue';
import Footer from '~/layouts/Footer.vue';

export default {
  components: {
    Header,
    Footer
  },
  middleware: 'authenticated',
  data() {
    return {
      allLikes: null
    }
  },
  computed: {
      ...mapState('user',['token'])
  },
  asyncData (context) {
    return context.app.apolloProvider.defaultClient.query({
      query: allLikesGql,
      variables: {
        token: context.app.$cookies.get('cookie-token', { path: '/'}),
      }
    }).then(({ data }) => {
          // do what you want with data
          return {
            allLikes : data.allLikes.edges
          }
        })
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/style/base.scss';
@import '~/assets/style/btn.scss';

.main {
  padding: 0 0 5rem;
}


</style>
<style lang="scss" scoped>
@import "~/assets/style/_color.scss";
@media (min-width: 840px) {
  .nav{
    max-width: 840px;
    margin: 0 auto 3rem;
    padding: 0 30px;
    h1{
      text-align: center;
      margin-bottom: 1rem;
      font-size: 2rem;
      color: #1f1f1f;
    }
    &_item{
      ul{
        display: flex;
        justify-content: center;
        li{
          cursor: pointer;
          text-align: center;
          margin: 0 1rem;
          padding: 0 0.5rem 1rem;
          font-weight: bold;
          color: #1f1f1f;
        }
        .active {
          border-bottom: solid 3px $main-color;

        }
      }
    }
  }
  .empty {
    max-width: 840px;
    margin: 0 auto;
    padding: 0 30px;
    text-align: center;
    padding-bottom: 5rem;
    h3 {
      margin-bottom: 3rem;
      color: $black02;
    }
    .img {
      max-width: 300px;
      margin: 0 auto 2rem;
      img {
        width: 100%;
      }
    }
    .button {
      text-align: center;
      a {
        margin: 0 auto;
      }
    }

  }
  .cards_list {
    padding: 0 30px;
    max-width: 840px;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    margin: 0 auto;
    &:after{
      content:"";
      display: block;
      width:31.5%;
    }
    .card_link {
      width: 31.5%;
      margin-bottom: 2rem;
      transition: $transtion01;
    }
    .card {
      border-radius: 12px;
      box-shadow: $box_shadow_card;
      transition: $transtion01;
      overflow: hidden;
      &:hover {
        box-shadow: $box_shadow_card_hover;
        transition: $transtion01;
      }
      &_src_img {
        line-height: 0;
        background-color: #fff;
        border-bottom: solid 1px $black04;
        img {
          width: 100%;
        }
      }
      &_img {
        background-image: url("/camp_img.jpg");
        border-radius: 12px 12px 0 0;
        width: 100%;
        height: 130px;
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        display: flex;
        align-items: flex-end;
        &_category {
          font-size: 10px;
          padding: 8px;
          text-align: center;
          min-width: 57px;
          color: #fff;
          &.event {
            background-color: #007d98;
          }
          &.develop {
            background-color: #f49e1b;
          }
          &.join {
            background-color: #ff4b4b;
          }
        }
      }
      &_txt {
        border-radius: 0 0 12px 12px;
        background-color: #fff;
        padding: 1rem;
        overflow: hidden;
        h4 {
          font-weight: bold;
          font-size: 14px;
          color: #333;
          max-height: 60px;
          min-height: 45px;
          overflow: hidden;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
          margin-bottom: 0.2rem;
        }
        &_user {
          display: flex;
          align-items: center;
          &_img {
            background-position: center;
            background-size: cover;
            background-repeat: no-repeat;
            width: 42px;
            height: 42px;
            border-radius: 50%;
            margin-right: 1rem;
            border: solid 0.5px $black03;
          }
          &_name {
            font-size: 12px;
            color: #555;
          }
          &_position {
            font-size: 10px;
            color: #ccc;
          }
        }
      }
    }
  }
}
@media screen and (min-width: 500px) and (max-width: 840px) {
  .nav{
    max-width: 840px;
    margin: 0 auto 3rem;
    padding: 0 30px;
    h1{
      text-align: center;
      margin-bottom: 1rem;
      font-size: 2rem;
      color: #1f1f1f;
    }
    &_item{
      ul{
        display: flex;
        justify-content: center;
        li{
          cursor: pointer;
          text-align: center;
          margin: 0 1rem;
          padding: 0 0.5rem 1rem;
          font-weight: bold;
          color: #1f1f1f;
        }
        .selected {
          border-bottom: solid 3px $main-color;

        }
      }
    }
  }
  .empty {
    max-width: 840px;
    margin: 0 auto;
    padding: 0 30px;
    text-align: center;
    padding-bottom: 5rem;
    h3 {
      margin-bottom: 3rem;
      color: $black02;
    }
    .img {
      max-width: 300px;
      margin: 0 auto 2rem;
      img {
        width: 100%;
      }
    }
    .button {
      text-align: center;
      a {
        margin: 0 auto;
      }
    }

  }
  .cards_list {
    max-width: 840px;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    margin: 0 auto;
    .card_link {
      width: 48.1%;
      margin-bottom: 2rem;
      transition: $transtion01;
      display: block;
      .card {
        border-radius: 12px;
        box-shadow: $box_shadow_card;
        transition: $transtion01;
        overflow: hidden;
        &:hover {
          box-shadow: $box_shadow_card_hover;
          transition: $transtion01;
        }
        &_src_img {
          line-height: 0;
          background-color: #fff;
          border-bottom: solid 1px $black04;
          img {
            width: 100%;
          }
        }
        &_img {
          background-image: url("/camp_img.jpg");
          border-radius: 12px 12px 0 0;
          width: 100%;
          height: 130px;
          background-position: center;
          background-size: cover;
          background-repeat: no-repeat;
          display: flex;
          align-items: flex-end;
          &_category {
            font-size: 10px;
            padding: 8px;
            text-align: center;
            min-width: 57px;
            color: #fff;
            &.event {
              background-color: #007d98;
            }
            &.develop {
              background-color: #f49e1b;
            }
            &.join {
              background-color: #ff4b4b;
            }
          }
        }
        &_txt {
          border-radius: 0 0 12px 12px;
          background-color: #fff;
          padding: 1rem;
          overflow: hidden;
          h4 {
            font-weight: bold;
            font-size: 14px;
            color: #333;
            max-height: 60px;
            min-height: 45px;
            overflow: hidden;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            margin-bottom: 1.4rem;
          }
          &_user {
            display: flex;
            align-items: center;
            &_img {
              background-position: center;
              background-size: cover;
              background-repeat: no-repeat;
              width: 38px;
              height: 38px;
              border-radius: 50%;
              margin-right: 1rem;
              border: solid 0.5px $black03;
            }
            &_name {
              font-size: 12px;
              color: #555;
            }
            &_position {
              font-size: 10px;
              color: #ccc;
            }
          }
        }
      }
    }
  }
}
@media screen and (min-width: 0px) and (max-width: 500px) {
  .nav{
    max-width: 840px;
    margin: 0 auto 3rem;
    h1{
      text-align: center;
      margin-bottom: 1rem;
      font-size: 1.8rem;
      color: #1f1f1f;
    }
    &_item{
      ul{
        display: flex;
        justify-content: center;
        li{
          font-size: 14px;
          cursor: pointer;
          text-align: center;
          margin: 0 0.6rem;
          padding: 0 0.5rem 1rem;
          font-weight: bold;
          color: #1f1f1f;
        }
        .selected {
          border-bottom: solid 3px $main-color;

        }
      }
    }
  }
  .cards_list {
    max-width: 840px;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    margin: 0 auto;
    .card_link {
      width: 100%;
      margin-bottom: 2rem;
      transition: $transtion01;
    }
    .card {
      border-radius: 12px;
      box-shadow: $box_shadow_card;
      transition: $transtion01;
      overflow: hidden;
      &:hover {
        box-shadow: $box_shadow_card_hover;
        transition: $transtion01;
      }
      &_src_img {
        line-height: 0;
        background-color: #fff;
        border-bottom: solid 1px $black04;
        img {
          width: 100%;
        }
      }
      &_img {
        background-image: url("/camp_img.jpg");
        border-radius: 12px 12px 0 0;
        width: 100%;
        height: 130px;
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        display: flex;
        align-items: flex-end;
        &_category {
          font-size: 10px;
          padding: 8px;
          text-align: center;
          min-width: 57px;
          color: #fff;
          &.event {
            background-color: #007d98;
          }
          &.develop {
            background-color: #f49e1b;
          }
          &.join {
            background-color: #ff4b4b;
          }
        }
      }
      &_txt {
        border-radius: 0 0 12px 12px;
        background-color: #fff;
        padding: 1rem;
        overflow: hidden;
        h4 {
          font-weight: bold;
          font-size: 16px;
          color: #333;
          max-height: 60px;
          overflow: hidden;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
          margin-bottom: 1.4rem;
        }
        &_user {
          display: flex;
          align-items: center;
          &_img {
            background-image: url("/icon.jpg");
            background-position: center;
            background-size: cover;
            background-repeat: no-repeat;
            width: 38px;
            height: 38px;
            border-radius: 50%;
            margin-right: 1rem;
            border: solid 0.5px $black03;
          }
          &_name {
            font-size: 14px;
            color: #555;
          }
          &_position {
            font-size: 12px;
            color: #ccc;
          }
        }
      }
    }
  }
}
</style>
