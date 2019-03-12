<template lang="html">
  <div class="">
    <div class="create-account">
      <div class="sign-up contents">
        <h1>新規アカウント作成</h1>
        <form class="" action="index.html" method="post" @submit="checkForm">
          <div class="item">
            <label for="up-e-mail">メールアドレス</label>
            <input type="email" name="" value="" id="up-e-mail" v-model="e_mail" v-bind:class="{error : mailerror}" >
            <p v-if="mailerrors.length">

              <ul>
                <li v-for="error in mailerrors" class="error_message">{{ error }}</li>
              </ul>
            </p>
          </div>
          <div class="item">
            <label for="up-id">ID</label>
            <input type="text" name="" value="" id="up-id" v-model="identification" v-bind:class="{error : identificationerror}" pattern="^[0-9A-Za-z]+$">
            <p v-if="identificationerros.length">

              <ul>
                <li v-for="error in identificationerros" class="error_message">{{ error }}</li>
              </ul>
            </p>
          </div>
          <div class="item">
            <label for="name">ユーザーネーム</label>
            <input type="text" name="" value="" id="name" v-model="name" v-bind:class="{error : nameerror}" maxlength="12">
            <p class="count">{{ name.length }}/12</p>
            <p v-if="nameerros.length">

              <ul>
                <li v-for="error in nameerros" class="error_message">{{ error }}</li>
              </ul>
            </p>
          </div>
          <div class="item">
            <label for="up-password">パスワード</label>
            <input type="password" name="" value="" id="up-password" v-model="password" v-bind:class="{error : passworderror}">
            <p>{{password}}</p>
            <p v-if="passworderros.length">
              <ul>
                <li v-for="error in passworderros" class="error_message">{{ error }}</li>
              </ul>
            </p>
          </div>
          <div class="item">
            <label for="conf-up-password">パスワード(確認)</label>
            <input type="password" name="" value="" id="conf-up-password" v-model="conf_up_password" v-bind:class="{error : confpassworderror}">
            <p>{{conf_up_password}}</p>
            <p v-if="confpassworderros.length">

              <ul>
                <li v-for="error in confpassworderros" class="error_message">{{ error }}</li>
              </ul>
            </p>
          </div>
          <div class="btn_list">
            <button type="submit" name="button" class="btn">Sign up</button>
            <button type="submit" name="button" class="btn md">Sign in ></button>
          </div>

        </form>
      </div>
      <div class="sign-in contents">
        <h1>ログイン</h1>
        <div class="img">

        </div>
        <form class="" action="index.html" method="post" @submit="checksignin">
          <div class="item">
            <label for="in-id">ID</label>
            <input type="text" name="" value="" id="in-id" v-model="in_identification" v-bind:class="{error : in_identificationerror}">
            <p v-if="in_identificationerros.length">
              <ul>
                <li v-for="error in in_identificationerros" class="error_message">{{ error }}</li>
              </ul>
            </p>
          </div>
          <div class="item">
            <label for="in-password">パスワード</label>
            <input type="password" name="" value="" id="in-password" v-model="in_password" v-bind:class="{error : in_passworderror}">
            <p v-if="in_passworderros.length">
              <ul>
                <li v-for="error in in_passworderros" class="error_message">{{ error }}</li>
              </ul>
            </p>
          </div>
          <button type="submit" name="button" class="btn">Sign in</button>
        </form>
      </div>
    </div>
    </div>
</template>

<script>
export default {
  data(){
    return{
      errors:[],
      mailerrors:[],
      identificationerros:[],
      nameerros:[],
      passworderros:[],
      confpassworderros:[],
      in_identificationerros:[],
      in_passworderros:[],
      e_mail:"",
      identification:"",
      in_identification:"",
      name:"",
      password:"",
      in_password:"",
      conf_up_password:"",
      mailerror:false,
      identificationerror:false,
      nameerror:false,
      passworderror:false,
      confpassworderror:false,
      in_passworderror:false,
      in_identificationerror:false,
  }
},
  methods: {
    checkForm:function(e) {
      if(this.e_mail && this.identification && this.name && this.password && this.conf_up_password) {
        return true;
      }
      this.mailerrors = [];
      this.identificationerros = [];
      this.nameerros = [];
      this.passworderros = [];
      this.confpassworderros = [];
      if(!this.e_mail) {
        this.mailerrors.push("メールアドレスを記入してください");
        this.mailerror = true
      }
      if(this.e_mail) {
        this.mailerror = false
      }
      if(!this.identification) {
        this.identificationerros.push("ID を記入してください");
        this.identificationerror = true
      }
      if(this.identification) {
        this.identificationerror = false
      }
      if(!this.name) {
        this.nameerros.push("ユーザーネームを記入してください");
        this.nameerror = true
      }
      if(this.name) {
        this.nameerror = false
      }
      if(!this.password) {
        this.passworderros.push("パスワードを記入してください");
        this.passworderror = true
      }
      if(this.password) {
        this.passworderror = false
      }
      if(!this.conf_up_password) {
        this.confpassworderros.push("パスワード(確認)を記入してください");
        this.confpassworderror = true
      }
      if(this.conf_up_password) {
        this.confpassworderror = false
      }
      if(this.conf_up_password !== this.password) {
        this.confpassworderros.push("パスワードに誤りがあります");
        this.confpassworderror = true
      }
      e.preventDefault();
    },
    checksignin:function(e) {
      if(this.in_identification && this.in_password) {
        return true;
      }
      this.in_identificationerros = [];
      this.in_passworderros = [];
      if(!this.in_identification) {
        this.in_identificationerros.push("ID を記入してください");
        this.in_identificationerror = true
      }
      if(this.in_identification) {
        this.in_identificationerror = false
      }
      if(!this.in_password) {
        this.in_passworderros.push("パスワードを記入してください");
        this.in_passworderror = true
      }
      if(this.in_password) {
        this.in_passworderror = false
      }
      e.preventDefault();
    }
   }
  }

</script>
<style lang="scss">
@import '~/assets/style/base.scss';
@import '~/assets/style/btn.scss';

@media (min-width:840px) {
.md{
  display: none !important;
}

.create-account{
  display: flex;
  max-width: 840px;
  margin: 0 auto;
  justify-content: center;
  padding: 2rem 30px;
  border-radius: 12px;
  transition: 0.3s;
  .contents{
    width: 50%;
    box-sizing: border-box;
    padding: 3rem 1rem;
    box-shadow: $box_shadow04;
    transition: 0.3s;
    h1 {
      padding:0 0 1rem;
      border-bottom: $border01;
      color: $black01;
      text-align: center;
      margin: 0 2rem;
      font-size: 1.25rem;
    }
    form{
      max-width: 240px;
      margin: 0 auto;
      padding: 1.5rem 0 0;
    }
    .item {
      position: relative;
      margin:0 0 0.8rem;
      .count {
        top:35px;
        right: 10px;
        position: absolute;
        font-weight: lighter;
        color: #ccc;
        font-size: 12px
      }
      .error{
        border: solid 1px red;
      }
      .error_message {
        color: red;
        font-size: 14px;
        font-weight: bold;
      }
      input{
        background-color: #fafafa;
        border: #cacaca solid 1px;
        border-radius: 4px;
        font-size: 16px;
        padding: 0.2rem;
        width: 100%;
        box-sizing: border-box;
        margin-top: 0.2rem;
        &::placeholder{
          font-weight: normal;
          color: #ddd;
          font-size: 14px;
        }
      }
    }
  }
  .sign-in {
    background-color: #fefefe;
    // background-image: url('../static/camp_img.jpg');
    border-radius: 0 12px 12px 0;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    label {
      display: block;
      font-weight: bold;
      font-size: 14px;
      color: $black01;
    }
  }
  .sign-up{
    background-color: #fff;
    border-radius: 12px 0 0 12px;
    label {
      display: block;
      font-weight: bold;
      font-size: 14px;
      color: #1f1f1f;
    }
  }
}

}

@media screen and (min-width: 500px) and (max-width: 840px) {
  .create-account{
    display: flex;
    max-width: 840px;
    margin: 0 auto;
    justify-content: center;
    padding: 2rem 30px;
    border-radius: 12px;
    transition: 0.3s;
    .contents{
      transition: 0.3s;
      width: 70%;
      box-sizing: border-box;
      padding: 3rem 1rem;
      box-shadow: $box_shadow04;
      h1 {
        padding:0 0 1rem;
        border-bottom: $border01;
        color: $black01;
        text-align: center;
        margin: 0 2rem;
        font-size: 1.25rem;
      }
      form{
        max-width: 240px;
        margin: 0 auto;
        padding: 1.5rem 0 0;
      }
      .item {
        margin:0 0 0.8rem;
        .count {
          top:35px;
          right: 10px;
          position: absolute;
          font-weight: lighter;
          color: #ccc;
          font-size: 12px
        }
        .error{
          border: solid 1px red;
        }
        .error_message {
          color: red;
          font-size: 14px;
          font-weight: bold;
        }
        input{
          background-color: #fafafa;
          border: #cacaca solid 1px;
          border-radius: 4px;
          font-size: 16px;
          padding: 0.2rem;
          width: 100%;
          box-sizing: border-box;
          margin-top: 0.2rem;
          &::placeholder{
            font-weight: normal;
            color: #ddd;
            font-size: 14px;
          }
        }
      }
    }
    .sign-in {
      background-color: #fefefe;
      // background-image: url('../static/camp_img.jpg');
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      display: none;
      label {
        display: block;
        font-weight: bold;
        font-size: 14px;
        color: $black01;
      }
    }
    .sign-up{
      background-color: #fff;
      border-radius:12px;
      label {
        display: block;
        font-weight: bold;
        font-size: 14px;
        color: #1f1f1f;
      }
    }
  }
}

@media screen and (min-width: 0px) and (max-width: 500px) {
  .create-account{
    display: flex;
    justify-content: center;
    padding: 2rem 30px;
    border-radius: 12px;
    transition: 0.3s;
    background-color: #fff;
    .contents{
      transition: 0.3s;
      width: 100%;
      box-sizing: border-box;
      padding: 3rem 1rem;
      h1 {
        padding:0 0 1rem;
        border-bottom: $border01;
        color: $black01;
        text-align: center;
        margin: 0 2rem;
        font-size: 1rem;
      }
      form{
        max-width: 240px;
        margin: 0 auto;
        padding: 1.5rem 0 0;
      }
      .item {
        margin:0 0 0.8rem;
        .count {
          top:35px;
          right: 10px;
          position: absolute;
          font-weight: lighter;
          color: #ccc;
          font-size: 12px
        }
        .error{
          border: solid 1px red;
        }
        .error_message {
          color: red;
          font-size: 14px;
          font-weight: bold;
        }
        input{
          background-color: #fafafa;
          border: #cacaca solid 1px;
          border-radius: 4px;
          font-size: 16px;
          padding: 0.2rem;
          width: 100%;
          box-sizing: border-box;
          margin-top: 0.2rem;
          &::placeholder{
            font-weight: normal;
            color: #ddd;
            font-size: 14px;
          }
        }
      }
    }
    .sign-up{
      background-color: #fff;
      border-radius:12px;
      label {
        display: block;
        font-weight: bold;
        font-size: 12px;
        color: #1f1f1f;
      }
    }
    .sign-in {
      background-color: #fefefe;
      // background-image: url('../static/camp_img.jpg');
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      display: none;
      label {
        display: block;
        font-weight: bold;
        font-size: 14px;
        color: $black01;
      }
    }
  }
}


</style>
