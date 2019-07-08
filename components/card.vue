<template id="">
  <div class="">
    <div class="nav">
      <h1>{{ title }}</h1>
      <div class="link">
        <nuxt-link v-if="edit" to="/camp/edit" class="sub_btn pc"><p>編集ページへ</p></nuxt-link>
        <nuxt-link v-if="edit" to="/camp/edit" class="sp edit_icon"><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#aaa" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="16 3 21 8 8 21 3 21 3 16 16 3"></polygon></svg></nuxt-link>
      </div>
    </div>
    <div class="cards_list">
      <nuxt-link :to="{ name: 'camp-id' , params: { id: project.node.id }}" class="card_link" v-for="project in projects" :key="project.node.id">
        <div class="card">
          <div class="card_img" v-if="!project.node.thumbnail"></div>
          <!-- <div class="card_img" v-if="project.node.header" :style="{ 'background-image' : 'url(https://object-storage.tyo2.conoha.io/v1/nc_ac83d3c0bf5f4fb0a05b3e1c0d3164f4/api/' + project.node.header + ')' }"></div> -->
          <div class="card_src_img" v-if="project.node.thumbnail">
            <img :src="'https://object-storage.tyo2.conoha.io/v1/nc_ac83d3c0bf5f4fb0a05b3e1c0d3164f4/api/' + project.node.thumbnail" style='width:100%;' alt="">
          </div>
          <div class="card_txt">
            <h4>{{project.node.name}}</h4>
            <div class="card_txt_user">
              <div class="card_txt_user_img" v-if="project.node.user.logo" :style="{ 'background-image' : 'url(https://object-storage.tyo2.conoha.io/v1/nc_ac83d3c0bf5f4fb0a05b3e1c0d3164f4/api/' + project.node.user.logo + ')' }"></div>
              <div class="card_txt_user_img" v-if="!project.node.user.logo"></div>
              <div class>
                <p class="card_txt_user_name">{{ project.node.user.username }}</p>
                <p class="card_txt_user_position">{{ project.node.user.position }}</p>
              </div>
            </div>
          </div>
        </div>
      </nuxt-link>
      <p class="search_num">{{projects.length}}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    projects: Array,
    title: String,
    edit: Boolean,
  }
}
</script>

<style lang="scss" scoped>
@import "~/assets/style/_color.scss";
.search_num {
  display: none;
}
@media (min-width: 840px) {
  .sp {
    display: none;
  }
  .content {
    padding: 0 30px;
  }
  .nav{
    max-width: 840px;
    margin: 0 auto 3rem;
    .link {
      display: flex;
      a {
        margin-left: auto;
      }
    }
    h1{
      text-align: center;
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
      position: relative;
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
        background-image: url("../static/header_logo.png");
        background-color: #fff;
        border-radius: 12px 12px 0 0;
        width: 100%;
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        display: flex;
        align-items: flex-end;
        display: block;
        &:before {
          content:"";
          display: block;
          width: 100%;
          padding-top: 59.6%;
          border-bottom: solid 1px $black04;
        }
      }
      &_txt {
        border-radius: 0 0 12px 12px;
        background-color: #fff;
        padding: 1rem;
        overflow: hidden;
        h4 {
          font-weight: bold;
          font-size: 17px;
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
            background-image: url("../static/icon_empty.png");
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
  .content {
    padding: 0 30px;
  }
  .nav{
    max-width: 840px;
    margin: 0 auto 3rem;
    .link {
      display: flex;
      a {
        margin-left: auto;
      }
    }
    h1{
      text-align: center;
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
  .cards_list {
    max-width: 840px;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    margin: 0 auto;
    padding: 0 30px;
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
          background-color: #fff;
          line-height: 0;
          border-bottom: solid 1px $black04;
          img {
            width: 100%;
          }
        }
        &_img {
          background-image: url("../static/header_logo.png");
          background-color: #fff;
          border-radius: 12px 12px 0 0;
          width: 100%;
          background-position: center;
          background-size: cover;
          background-repeat: no-repeat;
          display: flex;
          align-items: flex-end;
          display: block;
          &:before {
            content:"";
            display: block;
            padding-top: 59.6%;
            border-bottom: solid 1px $black04;
            width: 100%;
          }
        }
        &_txt {
          border-radius: 0 0 12px 12px;
          background-color: #fff;
          padding: 1rem;
          overflow: hidden;
          h4 {
            font-weight: bold;
            font-size: 17px;
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
              background-image: url("../static/icon_empty.png");
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
  .pc {
    display: none !important;
  }
  .content {
    padding: 0 15px;
  }
  .nav{
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 840px;
    margin: 0 auto 3rem;
    .link {
      display: flex;
      a {
        margin-left: auto;
      }
      .edit_icon {
        margin-left: 0.5rem;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
    h1{
      text-align: center;
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
    padding: 0 15px;
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
        background-image: url("../static/header_logo.png");
        background-color: #fff;
        border-radius: 12px 12px 0 0;
        width: 100%;
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        display: flex;
        align-items: flex-end;
        display: block;
        &:before {
          content:"";
          display: block;
          padding-top: 59.6%;
          border-bottom: solid 1px $black04;
          width: 100%;
        }
      }
      &_txt {
        border-radius: 0 0 12px 12px;
        background-color: #fff;
        padding: 1rem;
        overflow: hidden;
        h4 {
          font-weight: bold;
          font-size: 17px;
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
            background-image: url("../static/icon_empty.png");
            background-position: center;
            background-size: cover;
            background-repeat: no-repeat;
            width: 38px;
            height: 38px;
            border-radius: 50%;
            margin-right: 0.5rem;
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
