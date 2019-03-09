<template lang="html">
  <div class="">
    <div class="create-account">
      <div class="sign-in">
        <h1>Let's join new tento</h1>
        <div class="img">

        </div>
        <form class="" action="index.html" method="post">
          <div class="">
            <label for="in-e-mail">Email</label>
            <input type="text" name="" value="" id="in-e-mail">
          </div>
          <div class="">
            <label for="in-password">password</label>
            <input type="password" name="" value="" id="in-password">
          </div>
        </form>
      </div>

      <div class="sign-up">
        <h1>Create new account</h1>
        <div class="">
          <label for="up-e-mail">Email</label>
          <input type="text" name="" value="" id="up-e-mail">
        </div>
        <div class="">
          <label for="name">User name</label>
          <input type="text" name="" value="" id="name">
        </div>
        <div class="">
          <label for="up-password">password</label>
          <input type="password" name="" value="" id="up-password">
        </div>
        <div class="">
          <label for="conf-up-password">password(confirm)</label>
          <input type="password" name="" value="" id="conf-up-password">
        </div>
      </div>
    </div>
    </div>
</template>

<script>
export default {
}
</script>

<style lang="scss">
@import '~/assets/style/base.scss';
@import '~/assets/style/btn.scss';

.create-account{
  display: flex;
  label {
    display: block;
    font-weight: bold;
    font-size: 14px;
    color: #1f1f1f;
  }
}


</style>
