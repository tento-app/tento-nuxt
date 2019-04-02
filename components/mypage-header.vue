<template lang="html">
  <div class="account">
    <link href="https://fonts.googleapis.com/css?family=Noto+Sans+JP|Rubik" rel="stylesheet">
    <div class="account_header">
      <div class="current_img":class="{normal : editing}" >
        <div class="header_img" :style="{ 'background-image': 'url(https://media.tento.app/' + header + ')' }">
        </div>
        <div class="icon_img" :style="{ 'background-image' : 'url(https://media.tento.app/' + logo + ')' }">

        </div>
      </div>

      <div class="edit_img" :class="{normal : !editing}">
        <div class="edit_header">
          <label for="eyecatch_form">
            <div class="img" v-show="!uploadedHeader" :style="{ 'background-image': 'url(https://media.tento.app/' + header + ')' }">
              <div class="cover">
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><g transform="translate(2 3)"><path d="M20 16a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h3l2-3h6l2 3h3a2 2 0 0 1 2 2v11z"/><circle cx="10" cy="10" r="4"/></g></svg>
              </div>
            </div>
            <div class="newimg" v-show="uploadedHeader" :style="{ 'background-image': 'url(' + uploadedHeader + ')' }">
              <div class="cover">
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><g transform="translate(2 3)"><path d="M20 16a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h3l2-3h6l2 3h3a2 2 0 0 1 2 2v11z"/><circle cx="10" cy="10" r="4"/></g></svg>
              </div>
            </div>
          </label>
          <input type="file" id="eyecatch_form" v-on:change="onFileChange">
        </div>

        <div class="edit_icon">
          <label for="icon_form">
            <div class="icon" v-show="!uploadedIcon" :style="{ 'background-image': 'url(https://media.tento.app/' + logo + ')' }">
              <div class="cover">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><g transform="translate(2 3)"><path d="M20 16a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h3l2-3h6l2 3h3a2 2 0 0 1 2 2v11z"/><circle cx="10" cy="10" r="4"/></g></svg>
              </div>
            </div>
          </label>
          <div class="newicon" v-show="uploadedIcon" :style="{ 'background-image': 'url(' + uploadedIcon + ')' }">
            <div class="cover">
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><g transform="translate(2 3)"><path d="M20 16a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h3l2-3h6l2 3h3a2 2 0 0 1 2 2v11z"/><circle cx="10" cy="10" r="4"/></g></svg>
            </div>
          </div>
          <input type="file" id="icon_form" v-on:change="onIconChange">
        </div>
      </div>

      <div class="account_header_text">
        <div class="result" :class="{normal : editing}">
          <div class="item">
            <div class="name">
              <div class="name">
                {{ username }}
              </div>
              <div class="edititem" v-on:click="edittoggle">
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#ccc" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="16 3 21 8 8 21 3 21 3 16 16 3"></polygon></svg>
              </div>
            </div>
          </div>
          <div class="item">
            <p class="position">{{ position }}</p>
          </div>
          <div class="item">
            <p class="intro">{{ content }}</p>
          </div>

        </div>
        <div class="account_header_text_link" :class="{normal : !editing}">
          <div class="form">
            <div class="item">
              <input type="text" name="" maxlength='12' placeholder="てんと一郎" v-model.trim="username">
              <!-- <p class="count">{{ name.length }}/12</p> -->
              <p class="count">{{ username.length }}/12</p>
            </div>
            <div class="item">
              <input type="text" name="" maxlength='20' placeholder="デザイナー" v-model="position">
              <p class="count">{{ positionCount }}/20</p>
            </div>
            <div class="item">
              <textarea name="name" rows="8" cols="80" maxlength='160' placeholder="簡単な自己紹介を記入してください" v-model="content"></textarea>
              <p class="count">{{ introCount }}/160</p>
            </div>
          </div>
        </div>
        <div class="btn_list" :class="{normal : !editing}">
          <p v-on:click="edittoggle">キャンセル</p>
          <button @click="submit" class="btn_priority" type="button" name="button">保存する</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
import { mapState,mapMutations } from 'vuex'
import updateUserGql from "~/graphql/mutation/updateUser.gql";


export default {
  props:['username','position','content','header','logo','intro','edit'],
  // asyncData(context) {
  //   return context.app.apolloProvider.defaultClient
  //     .query({
  //       query: mypageGql,
  //       variables: {}
  //     })
  //     .then(({ data }) => {
  //       // do what you want with data
  //       return {
  //         multiselectoptions: data.allTags.edges.map(function (value) {
  //             return value.node.name
  //           })
  //       };
  //     });
  // },

  data(){
    return{
      errors:[],
      editing : false,
      error : false,
      uploadedHeader: "",
      uploadedIcon: "",
      updatesername:"",
      updatecontent:'',
      updateposition:''
    }
  },
  computed: {
        ...mapState('user',['token']),
        positionCount() {
          return this.position.length;
        },
        introCount() {
          return this.content.length;
        },
        nameCount() {
            return this.username.length;
        },
    },
  methods :{
    ...mapMutations('user',['setToken']),
    edittoggle() {
      if (this.editing) {
        this.editing = false
      } else {
        this.editing = true
      }
    },
    onFileChange(e) {
      let files = e.target.files || e.dataTransfer.files;
      this.headerFile = files[0]
      this.createHeader(files[0]);
    },
    onIconChange(e) {
      let files = e.target.files || e.dataTransfer.files;
      this.iconFile = files[0]
      this.createIcon(files[0]);
    },
    // アップロードした画像を表示
    createHeader(file) {
      let reader = new FileReader();
      reader.onload = e => {
        this.uploadedHeader = e.target.result;
      };
      reader.readAsDataURL(file);
    },
    createIcon(file) {
      let reader = new FileReader();
      reader.onload = e => {
        this.uploadedIcon = e.target.result;
      };
      reader.readAsDataURL(file);
    },
    deleteHeader() {
      this.uploadedHeader = "";
    },
    deleteHeader() {
      this.uploadedIcon = "";
    },
    submit() {
      console.log({
        username: this.username,
        position: this.position,
        content: this.content,
        uploadedHeader: this.header,
        uploadedIcon: this.logo
      });
      return this.$apollo.mutate({
        mutation: updateUserGql,
        variables: {
          token: this.token,
          userData: {
            username: this.username,
            position: this.position,
            content: this.content,
            uploadedHeader: this.header,
            uploadedIcon: this.logo
          }
        }
      })
      .then(result => {
        // 成功した場合に実行する処理（200OKのレスポンスの場合）
        this.$router.push('/camp/'+result.data.updateUser.user.id)
      })
      .catch(error => {
        // errorの場合に実行する処理
        console.log(error);
      });
    }
  },
};
</script>

<style lang="scss" scoped>
@import "~/assets/style/_color.scss";
  .account{
    max-width: 840px;
    margin: 0px auto 0;
    padding: 80px 30px 0;
    .normal {
      display: none !important;
    }
    &_header{
      .current_img {
        position: relative;
        .header_img {
          // background-image: url('../static/camp_img.jpg') !important;
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
          width: 100%;
          height: 280px;
          border-radius: 12px;
          box-shadow: $box_shadow04;
          overflow: hidden;
        }
        .icon_img {
          // background-image: url('../static/camp_img.jpg') !important;
          background-color: #fff;
          background-position: center;
          background-size: cover;
          width: 120px;
          height: 120px;
          border-radius: 50%;
          border: solid 3px $main-color;
          left: 50%;
          bottom: -120px;
          position: absolute;
          transform: translate(-50%,-50%);
          overflow: hidden;
        }
      }
      .edit_img {
        input {
          display: none;
        }
        .edit_header {
          .img {
            // background-image: url('../static/camp_img.jpg') !important;
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
            width: 100%;
            height: 280px;
            border-radius: 12px;
            box-shadow: $box_shadow04;
            overflow: hidden;
            cursor: pointer;
            .cover {
              width: 100%;
              height: 100%;
              transition: $transtion01;
              display: flex;
              align-items: center;
              justify-content: center;
              background-color: $black02;
              svg {
                stroke:rgba(255,255,255,1);
                transition: $transtion01;
              }
            }
          }
          .newimg {
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
            width: 100%;
            height: 280px;
            border-radius: 12px;
            box-shadow: $box_shadow04;
            position: relative;
            overflow: hidden;
            cursor: pointer;
            .cover {
              width: 100%;
              height: 100%;
              transition: $transtion01;
              display: flex;
              align-items: center;
              justify-content: center;
              background-color: $black02;
              svg {
                stroke:rgba(255,255,255,1);
                transition: $transtion01;
              }
            }
          }
        }
        .edit_icon {
          position: relative;
          .icon {
            // background-image: url('../static/camp_img.jpg') !important;
            background-color: #fff;
            background-position: center;
            background-size: cover;
            width: 120px;
            height: 120px;
            border-radius: 50%;
            border: solid 3px $main-color;
            left: 50%;
            bottom: -120px;
            position: absolute;
            transform: translate(-50%,-50%);
            overflow: hidden;
            cursor: pointer;
            .cover {
              width: 100%;
              height: 100%;
              transition: $transtion01;
              display: flex;
              align-items: center;
              justify-content: center;
              background-color: $black02;
              svg {
                stroke:rgba(255,255,255,1);
                transition: $transtion01;
              }
            }
          }
          .newicon {
            background-color: #fff;
            background-position: center;
            background-size: cover;
            width: 120px;
            height: 120px;
            border-radius: 50%;
            border: solid 3px $main-color;
            left: 50%;
            bottom: -120px;
            position: absolute;
            transform: translate(-50%,-50%);
            overflow: hidden;
            cursor: pointer;
            .cover {
              width: 100%;
              height: 100%;
              transition: $transtion01;
              display: flex;
              align-items: center;
              justify-content: center;
              background-color: $black02;
              svg {
                stroke:rgba(255,255,255,1);
                transition: $transtion01;
              }
            }
          }
        }
      }
      &_text{
        margin-top: 4.5rem;
        text-align: center;
        .result {
          .item {
            .name {
              position: relative;
              font-size: 1.8rem;
              font-weight: bold;
              display: inline-block;
              .edititem {
                position: absolute;
                top: 2px;
                right: -30px;
                cursor: pointer;
              }
            }
            .position {
              color: $black02;
              font-size: 1rem;
            }
          }
        }
        &_link {
          justify-content: center;
          display: flex;
          .form {
            .item {
              margin-bottom: 1rem;
              position: relative;
              max-width: 400px;
              .count {
                bottom: 8px;
                right: 10px;
                position: absolute;
                font-weight: lighter;
                color: #ccc;
              }
              input{
                background-color: #fafafa;
                border: #cacaca solid 1px;
                border-radius: 4px;
                font-size: 16px;
                padding: 0.4rem;
                font-weight: bold;
                width: 100%;
                box-sizing: border-box;
                &::placeholder{
                  font-weight: normal;
                  color: #ddd;
                  font-size: 14px;
                }
              }
              textarea{
                background-color: #fafafa;
                border: #cacaca solid 1px;
                border-radius: 4px;
                font-size: 16px;
                padding: 0.4rem;
                font-weight: bold;
                max-width: 400px;
                box-sizing: border-box;
                &::placeholder{
                  font-weight: normal;
                  color: #ddd;
                  font-size: 14px;
                }
              }
            }
          }
        }
        .btn_list {
          max-width: 400px;
          margin: 0 auto;
          display: flex;
          justify-content: flex-end;
          align-items: center;
          p {
            &:first-child{
              font-weight: bold;
              color: $black02;
              cursor: pointer;
            }
            &:last-child{
              font-weight: bold;
              padding: 0.6rem 1.5rem;
              margin-left: 1rem;
              font-size: 1rem;
              cursor: pointer;
            }

          }
        }
      }
    }
  }
</style>
