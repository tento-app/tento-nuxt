<template lang="html">
  <div class="">
      <div class="create">
        <div class="header">
          <nuxt-link to='/top' class="left">
            <svg xmlns="http://www.w3.org/2000/svg" width="41" height="41" viewBox="0 0 24 24" fill="none" stroke="#1f1f1f" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
            <p>投稿終了</p>
          </nuxt-link>
          <button class="btn_priority" @click="openModal" type="button" name="button">公開設定へ進む</button>
        </div>

        <div class="create_eyecatch">
          <div class="create_eyecatch_content">
            <div class="img" v-show="uploadedImage" :style="{ 'background-image': 'url(' + uploadedImage + ')' }">
              <p v-on:click="deleteImage">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
              </p>
            </div>
            <label for="eyecatch_form" v-show="!uploadedImage">
              <div class="">
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="#ccc" stroke-width="1" stroke-linecap="square" stroke-linejoin="arcs"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M20.4 14.5L16 10 4 20"/></svg>
              </div>
            </label>
            <input type="file" name="" value="" id="eyecatch_form" v-on:change="onFileChange">
          </div>
        </div>

      <div class="create_title">
        <div class="create_title_content">
          <div class="create_title_content_input">
            <textarea name="name" rows="1" cols="80" v-model="name" placeholder="タイトルを記入してください"></textarea>
          </div>

        </div>
      </div>
      <div class="create_body">
        <div class="create_body_content">
          <!-- <textarea name="name" rows="8" cols="80" placeholder="本文を記入してください"></textarea> -->
          <medium-editor :content='content' :options='options' />
        </div>
        <settingModal v-if="showModal" @close="closeModal" :options="options" @submit="submit" :place.sync="place" :date.sync="date" />
      </div>
    </div>
  </div>
</template>

<script>
import Header from "~/layouts/Header.vue";
import settingModal from "~/components/open-setting-modal.vue";

import createProjectGql from "~/graphql/mutation/createProject.gql";
import allTagsGql from "~/graphql/query/allTags.gql";
export default {
  components: {
    Header,
    settingModal
  },
  asyncData(context) {
    return context.app.apolloProvider.defaultClient
      .query({
        query: allTagsGql,
        variables: {}
      })
      .then(({ data }) => {
        // do what you want with data
        return {
          options: data.allTags.edges.map(tag => tag.node)
        };
      });
  },
  data() {
    return {
      showModal: false,
      content: "",
      options: {
        placeholder: {
          text: "Mediumとエディターの使い方は同じです！",
          autoLink: true
        },
        uploadUrl: "https://imgur.com/upload"
      },
      name: "",
      content: "",
      tags: [],
      date: "",
      place: "",
      uploadedImage: ""
    };
  },
  methods: {
    openModal(item) {
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
    },
    onFileChange(e) {
      let files = e.target.files || e.dataTransfer.files;
      this.createImage(files[0]);
    },
    // アップロードした画像を表示
    createImage(file) {
      let reader = new FileReader();
      reader.onload = e => {
        this.uploadedImage = e.target.result;
      };
      reader.readAsDataURL(file);
    },
    deleteImage() {
      this.uploadedImage = "";
    },
    submit() {
      console.log({
        name: this.name,
        content: this.content,
        tags: this.tags,
        date: this.date,
        place: this.place,
        header: this.uploadedImage
      });
      // return this.$apollo
      //   .mutate({
      //     mutation: loginGql,
      //     variables: {
      //       token: "",
      //       ProjectInput: {
      //         name: "",
      //         content: "",
      //         tags: ["", ""],
      //         date: "",
      //         header: this.uploadedImage
      //       }
      //     }
      //   })
      //   .then(result => {
      //     // 成功した場合に実行する処理（200OKのレスポンスの場合）
      //     console.log("成功");
      //     console.log(result);
      //   })
      //   .catch(error => {
      //     // errorの場合に実行する処理
      //     console.log("失敗");
      //   });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~/assets/style/_color.scss";
@import "~/assets/style/base.scss";
@import "~/assets/style/btn.scss";
@media (min-width: 500px) {
  .create {
    .header {
      position: relative;
      background-color: rgba(250, 250, 250, 1);
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
      padding: 0.7rem 3rem;
      z-index: 4;
      position: fixed;
      width: 100%;
      top: 0;
      display: flex;
      .left {
        display: flex;
        align-items: center;
        margin-right: auto;
        p {
          font-size: 14px;
          color: $black01;
          font-weight: bold;
        }
      }
    }
    &_eyecatch {
      &_content {
        max-width: 840px;
        margin: 1rem auto;
        padding: 1rem 30px;
        label {
          cursor: pointer;
          font-size: 14px;
          border-radius: 99px;
          display: inline-block;
          div {
            display: flex;
            align-items: center;
          }
        }
        input {
          display: none;
        }
        .img {
          height: 280px;
          max-width: 100%;
          border-radius: 12px;
          position: relative;
          width: 100%;
          box-shadow: $box_shadow04;
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
          display: flex;
          p {
            margin-left: auto;
            background-color: $black02;
            border-radius: 50%;
            height: 40px;
            width: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            margin-top: 0.5rem;
            margin-right: 0.5rem;
          }
        }
      }
    }
    &_title {
      &_content {
        max-width: 840px;
        margin: 0 auto;
        padding: 3rem 30px 5rem;
        p {
          margin-bottom: 1.5rem;
          font-size: 14px;
          font-weight: bold;
        }
        &_input {
          textarea {
            border: none;
            background-color: rgba(0, 0, 0, 0);
            outline: 0;
            box-sizing: border-box;
            width: 100%;
            color: $black01;
            font-size: 32px;
            font-weight: bold;
            height: 54px;
            &::placeholder {
              color: rgba(0, 0, 0, 0.4);
            }
          }
        }
      }
    }
    &_body {
      background-color: #fff;
      min-height: 100vh;
      &_content {
        max-width: 840px;
        margin: 2rem auto 0;
        padding: 0 30px;
        color: $black01;
        // textarea{
        //   width: 100%;
        //   box-sizing: border-box;
        //   background-color: rgba(0,0,0,0);
        //   outline: 0;
        //   line-height: 2rem;
        //   font-size: 16px;
        //   border: none;
        // }
      }
    }
  }
}

@media screen and (min-width: 0px) and (max-width: 500px) {
  .create {
    .header {
      position: relative;
      background-color: rgba(250, 250, 250, 1);
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
      padding: 0.7rem 15px;
      z-index: 4;
      position: fixed;
      width: 100%;
      top: 0;
      display: flex;
      .left {
        display: flex;
        align-items: center;
        margin-right: auto;
        p {
          font-size: 14px;
          color: $black01;
          font-weight: bold;
        }
      }
    }
    &_eyecatch {
      &_content {
        max-width: 840px;
        margin: 0rem auto;
        padding: 1rem 15px;
        label {
          cursor: pointer;
          font-size: 14px;
          border-radius: 99px;
          display: inline-block;
          div {
            display: flex;
            align-items: center;
          }
        }
        input {
          display: none;
        }
        .img {
          height: 280px;
          max-width: 100%;
          border-radius: 12px;
          position: relative;
          width: 100%;
          box-shadow: $box_shadow04;
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
          display: flex;
          p {
            margin-left: auto;
            background-color: $black02;
            border-radius: 50%;
            height: 40px;
            width: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            margin-top: 0.5rem;
            margin-right: 0.5rem;
          }
        }
      }
    }
    &_title {
      &_content {
        max-width: 840px;
        margin: 0 auto;
        padding: 1rem 15px 2rem;
        p {
          margin-bottom: 1.5rem;
          font-size: 14px;
          font-weight: bold;
        }
        &_input {
          textarea {
            white-space: pre-wrap;
            border: none;
            background-color: rgba(0, 0, 0, 0);
            outline: 0;
            box-sizing: border-box;
            width: 100%;
            color: $black01;
            font-size: 1.6rem;
            font-weight: bold;
            height: 2.5rem;
            &::placeholder {
              color: rgba(0, 0, 0, 0.4);
            }
          }
        }
      }
    }
    &_body {
      background-color: #fff;
      min-height: 100vh;
      &_content {
        max-width: 840px;
        margin: 2rem auto 0;
        padding: 0 15px;
        color: $black01;
        // textarea{
        //   width: 100%;
        //   box-sizing: border-box;
        //   background-color: rgba(0,0,0,0);
        //   outline: 0;
        //   line-height: 2rem;
        //   font-size: 16px;
        //   border: none;
        // }
      }
    }
  }
}
</style>
