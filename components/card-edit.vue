<template id="">
  <div class="content item">
    <div class="nav">
      <h1>{{ title }}</h1>
    </div>
    <div class="cards_list">
      <div class="card_link" v-for="project in projects" :key="project.node.id">
        <nuxt-link :to="{ name: 'camp-id' , params: { id: project.node.id }}" >
          <div class="card">
            <!-- <div class="card_img" v-if="!project.node.header"></div>
            <div class="card_img" v-if="project.node.header" :style="{ 'background-image' : 'url(https://media.tento.app/' + project.node.header + ')' }"></div> -->
            <div class="card_src_img">
              <img :src="'https://media.tento.app/' + project.node.thumbnail" style='width:100%;' alt="">
            </div>
            <div class="card_txt">
              <h4 v-html='project.node.name'></h4>
              <div class="card_txt_user">
                <div class="card_txt_user_img" :style="{ 'background-image' : 'url(https://media.tento.app/' + project.node.user.logo + ')' }"></div>
                  <div class>
                    <p class="card_txt_user_name">{{ project.node.user.username }}</p>
                    <p class="card_txt_user_position">{{ project.node.user.position }}</p>
                  </div>
              </div>
            </div>
          </div>
        </nuxt-link>
        <div class="button_list">
          <nuxt-link :to="{ name: 'camp-edit-id' , params: { id: project.node.id }}">
            <div class="">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#aaa" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="16 3 21 8 8 21 3 21 3 16 16 3"></polygon></svg>
            </div>
          </nuxt-link>
          <a>
            <div class="">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#aaa" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 9.9-1"></path></svg>
            </div>
          </a>
          <a>
            <div class="">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#aaa" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </div>
          </a>

          <!-- <div class="">
            <p><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#aaa" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 9.9-1"></path></svg></p>
          </div>
          <div class="">
            <p><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#aaa" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></p>
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    projects: Array,
    title: String,
  }
}
</script>

<style lang="scss" scoped>
@import "~/assets/style/_color.scss";
@media (min-width: 840px) {
  .nav{
    max-width: 840px;
    margin: 0 auto 3rem;
    padding: 0rem 30px 0;
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
      transition: $transtion01;
      margin-bottom: 3rem;
      .button_list {
        border-top: solid 1px $black04;
        background-color: #fff;
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-radius:0 0 12px 12px;
        padding: 0.5rem 0;
        a {
          cursor: pointer;
          width: 33%;
          text-align: center;
          padding: 0.5rem 0;
          &:nth-child(2) {
            border-left: solid 1px $black04;
            border-right: solid 1px $black04;
          }
          p {
          }
        }
      }
    }
    .card {
      border-radius: 12px 12px 0 0;
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
        border-radius: 0px;
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
    .card_link {
      width: 48.1%;
      margin-bottom: 2rem;
      transition: $transtion01;
      display: block;
      .button_list {
        border-top: solid 1px $black04;
        background-color: #fff;
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-radius:0 0 12px 12px;
        padding: 0.5rem 0;
        a {
          cursor: pointer;
          width: 33%;
          text-align: center;
          padding: 0.5rem 0;
          &:nth-child(2) {
            border-left: solid 1px $black04;
            border-right: solid 1px $black04;
          }
          p {
          }
        }
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
      .button_list {
        border-top: solid 1px $black04;
        background-color: #fff;
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-radius:0 0 12px 12px;
        padding: 0.5rem 0;
        a {
          cursor: pointer;
          width: 33%;
          text-align: center;
          padding: 0.5rem 0;
          &:nth-child(2) {
            border-left: solid 1px $black04;
            border-right: solid 1px $black04;
          }
          p {
          }
        }
      }
    }
    .card {
      border-radius:12px 12px 0 0;
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
        border-radius: 0 ;
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
            background-image: url("../static/icon.jpg");
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
