<template lang="html">
  <div class="">
      <Header />
      <div class="create">

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
            <input type="text" name="" value="" placeholder="タイトルを記入してください">
          </div>

        </div>
      </div>
      <button class="btn_priority" @click="openModal" type="button" name="button">公開設定へ進む</button>
      <div class="create_body">
        <div class="create_body_content">
          <!-- <textarea name="name" rows="8" cols="80" placeholder="本文を記入してください"></textarea> -->
          <medium-editor :content='content' :options='options' />
        </div>
        <settingModal v-if="showModal" @close="closeModal" />
      </div>
    </div>
  </div>
</template>

<script>
import Header from '~/layouts/Header.vue';
import settingModal from '~/components/open-setting-modal.vue';

export default {
  components: {
    Header,
    settingModal
  },
  // fetch ({ store, redirect }) {
  //   if (!store.state.user.username) {
  //     return redirect('/login')
  //   }
  // },
  data() {
        return {
            showModal: false,
            content: "",
            options: {
              placeholder: {
                text: "Mediumとエディターの使い方は同じです！"
              },
              uploadUrl: "https://imgur.com/upload",
            },
            uploadedImage: '',
        }
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
      reader.onload = (e) => {
        this.uploadedImage = e.target.result;
      };
      reader.readAsDataURL(file);
    },
    deleteImage() {
      this.uploadedImage = ''
    }
  },
}
</script>

<style lang="scss" scoped>
@import '~/assets/style/_color.scss';
@import '~/assets/style/base.scss';
@import '~/assets/style/btn.scss';

  .create{
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
    &_title{
      &_content{
        max-width: 840px;
        margin: 0 auto;
        padding: 3rem 30px 5rem;
        p{
          margin-bottom: 1.5rem;
          font-size: 14px;
          font-weight: bold;
        }
        &_input{

          input{
            border: none;
            background-color: rgba(0,0,0,0);
            outline: 0;
            box-sizing: border-box;
            width: 100%;
            color: $black01;
            font-size: 32px;
            font-weight: bold;
            &::placeholder{
              color: rgba(0,0,0,0.4);
            }
          }
        }
      }
    }
    &_body{
      background-color: #fff;
      min-height: 100vh;
      &_content{
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
</style>
