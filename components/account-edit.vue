<template lang="html">
  <div class="account_edit_form">
    <form class="" action="index.html" method="post">
      <div class="account_form_icon">
        <input type="file" name="" value="" id="icon_file">
        <label for="icon_file">
          <div class="img">

          </div>
          <p>アイコンの変更</p>
        </label>
      </div>
    </form>

    <form class="" action="index.html" method="post" @submit="checkForm">
      <div class="account_form">


        <div class="account_form_text">
          <div class="account_form_text_name account_form_text_item">
            <p>ユーザーネーム</p>
            <input type="text" name="" value="" maxlength='12' placeholder="てんと一郎" v-model="name" v-bind:class="{error : error}" v-on:change="checkError">
            <p class="count">{{ name.length }}/12</p>
            <p v-if="errors.length">
              <ul>
                <li v-for="error in errors" class="error_message">{{ error }}</li>
              </ul>
            </p>
          </div>

          <div class="account_form_text_position account_form_text_item">
            <p>肩書・志望職業</p>
            <input type="text" name="" value="" maxlength='30' placeholder="デザイナー" v-model="position">
            <p class="count">{{ position.length }}/30</p>
          </div>

          <div class="account_form_text_intro account_form_text_item">
            <p>自己紹介</p>
            <textarea name="name" rows="8" cols="80" maxlength='160' placeholder="簡単な自己紹介を記入してください" v-model="intro"></textarea>
            <p class="count textarea">{{ intro.length }}/160</p>
          </div>
          <div class="">
            <button type="submit" name="submit" class="btn">この内容を保存</button>
          </div>
        </div>

      </div>
    </form>
  </div>
</template>

<script>
export default {
  data(){
    return{
      errors:[],
      name:"",
      position:"",
      intro:"",
      error:false
  }
},
  methods: {
    checkForm:function(e) {
      if(this.name) {
        return true;
      }
      this.errors = [];
      if(!this.name) {
        this.errors.push("ユーザーネームを入力してください");
        this.error = true;
      }
      e.preventDefault();
    },
    checkError:function() {
      this.error = false;
    }
  }
  }
</script>

<style lang="scss">
@import '~/assets/style/_color.scss';

.account_edit_form{
  .error{
    border: solid 2px red !important;
  }
  background-color: #fff;
  box-shadow: $box_shadow02;
  border-radius: 12px;
  padding: 3rem 7rem;
  margin: 40px auto;
  max-width: 840px;
  display: flex;
  justify-content: space-between;
  .account_form{
    display: flex;
    justify-content: space-between;
    &_icon{
      input{
        display: none;
      }
      label{
        cursor: pointer;
        .img{
          background-image: url('../static/icon.jpg');
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          width: 110px;
          min-height: 110px;
          border-radius: 50%;
          border: solid 1px #ccc;
        }
        p{
          text-align: center;
          font-weight: bold;
          font-size: 14px;
          color: $sub_color;
          margin-top: 0.5rem;
        }
      }
    }
    &_text{
      &_item{
        margin-bottom: 1.2rem;
        position: relative;
        &:last-child{
          margin-top: 0rem
        }
        .count {
          top:40px;
          right: 10px;
          position: absolute;
          font-weight: lighter;
          color: #ccc;
        }
        .textarea{
          top: 165px;
        }
        .error_message {
          color: red;
        }
        p{
          font-weight: bold;
          font-size: 14px;
          margin-bottom: 0.2rem;
        }
        input{
          background-color: #fafafa;
          border: #cacaca solid 1px;
          border-radius: 4px;
          font-size: 16px;
          padding: 0.4rem;
          font-weight: bold;
          width: 440px;
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
          width: 440px;
          box-sizing: border-box;
          &::placeholder{
            font-weight: normal;
            color: #ddd;
            font-size: 14px;
          }
        }
      }

    }
    .btn{
      background-color: #00BE93;
      border-radius: 99px;
      color: #fff;
      font-size: 14px;
      padding: 0.8rem 1rem;
    }
  }
}
</style>
