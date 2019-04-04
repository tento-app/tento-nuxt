<template id="">
  <div class="content item">
    <div class="nav">
      <h1>{{ title }}</h1>
    </div>
    <div class="cards_list">
      <div class="card_link" v-for="project in projects" :key="project.node.id">
        <div class="card">
          <div class="card_img" v-if="!project.node.header">
              <button>非公開にする</button>
                <button>終了する</button>
                <button>編集</button>
          </div>
          <div class="card_img" v-if="project.node.header" :style="{ 'background-image' : 'url(https://media.tento.app/' + project.node.header + ')' }">
            <button>非公開にする</button>
            <button>終了する</button>
            <button>編集</button>
            <!-- <p class="card_img_category" >公開中 開催中</p> -->
          </div>
          <nuxt-link :to="{ name: 'camp-edit-id' , params: { id: project.node.id }}" >
              <div class="card_txt">
            <h4>{{ project.node.name }}</h4>
            <div class="card_txt_user">
              <div class="card_txt_user_img" :style="{ 'background-image' : 'url(https://media.tento.app/' + project.node.user.logo + ')' }"></div>
              <div class>
                <p class="card_txt_user_name">{{ project.node.user.username }}</p>
                <p class="card_txt_user_position">{{ project.node.user.position }}</p>
              </div>
            </div>
            </div>
          </nuxt-link>
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
      &:hover {
        box-shadow: $box_shadow_card_hover;
        transition: $transtion01;
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
        &:hover {
          box-shadow: $box_shadow_card_hover;
          transition: $transtion01;
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
      font-size: 1.5rem;
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
      &:hover {
        box-shadow: $box_shadow_card_hover;
        transition: $transtion01;
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
