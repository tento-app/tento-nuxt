<template lang="html">
  <div class="">
      <div class="create">
        <link href="https://fonts.googleapis.com/css?family=Noto+Sans+JP|Rubik" rel="stylesheet">
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
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
              </p>
            </div>
            <label for="eyecatch_form" v-show="!uploadedImage">
              <div class="">
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="#ccc" stroke-width="1" stroke-linecap="square" stroke-linejoin="arcs"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M20.4 14.5L16 10 4 20"/></svg>
                <p style="color:#ccc">カバー画像追加</p>
              </div>
            </label>
            <input type="file" id="eyecatch_form" v-on:change="onFileChange">
          </div>
        </div>

      <div class="create_title">
        <div class="create_title_content">
          <div class="create_title_content_input">
            <textarea name="name" rows="1" v-model="name" wrap="soft" cols="30" maxlength="40" placeholder="タイトルを記入してください"></textarea>
          </div>

        </div>
      </div>
      <div class="create_body">
        <div class="create_body_content">
          <!-- <textarea name="name" rows="8" cols="80" placeholder="本文を記入してください"></textarea> -->
          <medium-editor v-model='content' :options='options' />
        </div>
          <div class="modal-mask"  v-if="showModal">
    <div class="modal-wrapper">
      <div class="modal-container">
        <div class="setting-modal">
          <div class="">
            <h3>公開設定(任意)</h3>
            <div  class="form">
              <div class="item">
                <label for="">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ccc" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><path d="M20 14.66V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5.34"></path><polygon points="18 2 22 6 12 16 8 16 8 12 18 2"></polygon></svg>
                  <p>スキル</p>
                </label>
                <Multiselect v-model="tags" :options="multiselectoptions" :multiple="true" :hide-selected="true" :searchable="false" :close-on-select="false" :clear-on-select="false" :preserve-search="true" placeholder="スキルを選ぼう" :preselect-first="false" :max-height="200">
                </Multiselect>
              </div>
              <div class="item">
                <label for="">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ccc" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="10" r="3"/><path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z"/></svg>
                  <p>開催場所</p>
                </label>
                <input type="text" v-model="place" placeholder="Tentoキャンパス学食">
              </div>
              <div class="item">
                <label for="">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ccc" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                  <p>開催日時</p>
                </label>
                <!-- <input type="datetime-local" name="" v-model="inputData2"> -->
                <datetime v-model="date"></datetime>
              </div>
              <div class="item">
                <label for="">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ccc" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                  <p>連絡先</p>
                </label>
                <input type="text" v-model="contact" placeholder="tento@example.com">
              </div>

              <div class="btn-list">
                <p @click="closeModal">編集に戻る</p>
                <button class="btn_priority" type="button" :disabled="processing" name="button" @click="submit" v-on:click="button_disable()">
                  <p :class="{disactive: processing}">公開する</p>
                  <p class="processing" :class="{active: processing}">公開中...</p></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState,mapMutations } from 'vuex'

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
          multiselectoptions: data.allTags.edges.map(function (value) {
              return value.node.name
            })
        };
      });
  },
  data() {
    return {
      showModal: false,
      options: {
        placeholder: {
          text: "本文：Camp内容について記そう！！",
          autoLink: true
        },
        uploadUrl: "https://imgur.com/upload"
      },
      name: "",
      content: "",
      contact: "",
      tags: [],
      date: "",
      place: "",
      uploadedImage: "",
      headerFile: null,
      processing: false
    };
  },
  computed: {
      ...mapState('user',['token'])
  },
  methods: {
    ...mapMutations('user',['setToken']),
    openModal(item) {
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
    },
    onFileChange(e) {
      let files = e.target.files || e.dataTransfer.files;
      this.headerFile = files[0]
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
    button_disable: function() {
        this.processing = true;

        setTimeout(this.enable,2000);
    },
    enable:function() {
        console.log('二重送信防止');
        this.processing = false;
    },
    submit() {
      console.log({
        name: this.name,
        content: this.content,
        content: this.contact,
        tags: this.tags,
        startat: this.date,
        place: this.place,
        header: this.headerFile
      });
     return this.$apollo.mutate({
          mutation: createProjectGql,
          variables: {
            token: this.token,
            ProjectInput: {
              name: this.name,
              content: this.content,
              contact: this.contact,
              tags: this.tags,
              startat: this.date,
              place: this.place,
              header: this.headerFile
            }
          }
        })
        .then(result => {
          // 成功した場合に実行する処理（200OKのレスポンスの場合）
          this.$router.push('/camp/'+result.data.createProject.project.id)
        })
        .catch(error => {
          // errorの場合に実行する処理
          console.log(error);
        });
        }
      }
    };
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style lang="scss">
@import "~/assets/style/_color.scss";
@import "~/assets/style/base.scss";
@import "~/assets/style/btn.scss";
.processing {
  display: none;
}
.active {
  display: block !important;
}
.disactive {
  display: none !important;
}
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
            height: 7rem;
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
  .medium-editor-container {
    p {
      white-space: pre-line;
      line-height: 1.8;
      font-size:1rem;
    }
    h1 {
      font-size: 2rem;
    }
    h2 {
      font-size: 1.8rem;
    }
    h3 {
      font-size: 1.6rem;
    }
    h4 {
      font-size: 1.4rem;
    }
    h5 {
      font-size: 1.2rem;
    }
  }
  .medium-editor-container .medium-editor-placeholder::after {
    white-space: pre-wrap;
  }
  .medium-editor-container .insert-image-container {
    display: none;
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
            height: 5.5rem;
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
  .medium-editor-container {
    p {
      white-space: pre-line;
      line-height: 1.8;
      font-size:1.6rem;
    }
    h1 {
      font-size: 2.6rem;
    }
    h2 {
      font-size: 2.4rem;
    }
    h3 {
      font-size: 2.2rem;
    }
    h4 {
      font-size: 2rem;
    }
    h5 {
      font-size: 1.8rem;
    }
  }
  .medium-editor-container .medium-editor-placeholder::after {
    white-space: pre-wrap;
  }
  .medium-editor-container .insert-image-container {
    display: none;
  }
}
</style>
<style lang="scss"scoped>
@import "~/assets/style/_color.scss";
@import "~/assets/style/base.scss";
@import "~/assets/style/btn.scss";

@media (min-width: 500px) {

  .modal-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: table;
    transition: opacity 0.3s ease;
    // display: none;
  }

  .modal-wrapper {
    display: table-cell;
    vertical-align: middle;
  }

  .modal-container {
    transition: all 0.3s ease;
  }

  .setting-modal {
    max-width: 500px;
    margin: 0 auto;
    padding: 2rem;
    background-color: #fff;
    border-radius: 12px;
    h3 {
      color: $black01;
    }
    .form {
      .item {
        margin: 1rem 0 2rem;
        label {
          color: $black01;
          display: flex;
          align-items: center;
          font-size: 14px;
          font-weight: bold;
          margin-bottom: 5px;
          p {
            margin-left: 5px;
          }
        }
        input {
          width: 100%;
          outline: 0;
          border: 0;
          border-bottom: 1px solid $black03;
          font-size: 1rem;
          padding: 0.2rem 0.2rem 0.5rem;
        }
      }
      .btn-list {
        display: flex;
        align-items: center;
        p {
          cursor: pointer;
          color: $black03;
          font-weight: bold;
          margin-right: auto;
        }
        .btn_priority {
          width: 90px;
          text-align: center;
          p {
            color: #fff;
          }
        }
      }
    }
  }
}

@media screen and (min-width: 0px) and (max-width: 500px) {
  .modal-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: table;
    transition: opacity 0.3s ease;
    // display: none;
  }

  .modal-wrapper {
    display: table-cell;
    vertical-align: middle;
  }

  .modal-container {
    transition: all 0.3s ease;
  }

  .setting-modal {
    max-width: 100%;
    margin: 0 auto;
    padding: 2rem;
    background-color: #fff;
    height: 100vh;
    h3 {
      color: $black01;
    }
    .form {
      .item {
        margin: 1rem 0 2rem;
        label {
          color: $black01;
          display: flex;
          align-items: center;
          font-size: 14px;
          font-weight: bold;
          margin-bottom: 5px;
          p {
            margin-left: 5px;
          }
        }
        input {
          width: 100%;
          outline: 0;
          border: 0;
          border-bottom: 1px solid $black03;
          font-size: 1rem;
          padding: 0.2rem 0.2rem 0.5rem;
        }
      }
      .btn-list {
        display: flex;
        align-items: center;
        p {
          cursor: pointer;
          color: $black03;
          font-weight: bold;
          margin-right: auto;
        }
        .btn_priority {
          width: 90px;
          text-align: center;
        }
      }
    }
  }
}
</style>
