<template lang="html">
  <div class="">
    <div class="create-account">
      <div class="sign-up contents">
        <h1>新規アカウント作成</h1>
        <form class="" action="index.html" method="post" @submit="checkForm">
          <div class="item">
            <label for="up-e-mail">メールアドレス</label>
            <input type="text" name="" value="" id="up-e-mail" v-model="e_mail">
            <p v-if="mailerrors.length">
              <b>Please correct the following error(s):</b>
              <ul>
                <li v-for="error in mailerrors">{{ error }}</li>
              </ul>
            </p>
          </div>
          <div class="item">
            <label for="up-id">ID</label>
            <input type="text" name="" value="" id="up-id" v-model="identification">
            <p v-if="identificationerros.length">
              <b>Please correct the following error(s):</b>
              <ul>
                <li v-for="error in identificationerros">{{ error }}</li>
              </ul>
            </p>
          </div>
          <div class="item">
            <label for="name">ユーザーネーム</label>
            <input type="text" name="" value="" id="name" v-model="name">
            <p v-if="nameerros.length">
              <b>Please correct the following error(s):</b>
              <ul>
                <li v-for="error in nameerros">{{ error }}</li>
              </ul>
            </p>
          </div>
          <div class="item">
            <label for="up-password">パスワード</label>
            <input type="password" name="" value="" id="up-password" v-model="password">
            <p v-if="passworderros.length">
              <b>Please correct the following error(s):</b>
              <ul>
                <li v-for="error in passworderros">{{ error }}</li>
              </ul>
            </p>
          </div>
          <div class="item">
            <label for="conf-up-password">パスワード(確認)</label>
            <input type="password" name="" value="" id="conf-up-password" v-model="conf_up_password">
            <p v-if="confpassworderros.length">
              <b>Please correct the following error(s):</b>
              <ul>
                <li v-for="error in confpassworderros">{{ error }}</li>
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
        <form class="" action="index.html" method="post">
          <div class="item">
            <label for="in-id">ID</label>
            <input type="text" name="" value="" id="in-id">
          </div>
          <div class="item">
            <label for="in-password">パスワード</label>
            <input type="password" name="" value="" id="in-password">
          </div>
          <button type="button" name="button" class="btn">Sign in</button>
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
      e_mail:"",
      identification:"",
      name:"",
      password:"",
      conf_up_password:"",
      error:false
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
        this.mailerrors.push("e-mail required.")
      }
      if(!this.identification) {
        this.identificationerros.push("ID required.");
      }
      if(!this.name) {
        this.nameerros.push("user-name required.");
      }
      if(!this.password) {
        this.passworderros.push("password required.");
      }
      if(!this.conf_up_password) {
        this.confpassworderros.push("conf_up_password required.");
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
      margin:0 0 0.8rem;
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
