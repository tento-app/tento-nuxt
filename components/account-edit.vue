<template lang="html">
  <div class="account_form">
    <form class="" action="index.html" method="post">
      <div class="account_form_icon">
        <input type="file" name="" value="">
        <p>アイコン変更</p>
      </div>
      <div class="account_form_text">
        <div class="account_form_text_name">
          <input type="text" name="" value="">
        </div>

        <div class="account_form_text_position">
          <input type="text" name="" value="">
        </div>

        <div class="account_form_text_intro">
          <textarea name="name" rows="8" cols="80"></textarea>
        </div>
        <div class="">
          <button type="button" name="button" class="btn">この内容を保存</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss">
@import '~/assets/style/_color.scss';

.account_form{
  background-color: #fff;
  box-shadow: $box_shadow02;
  border-radius: 12px;
  padding: 1.5rem;
  margin: 80px auto;
  max-width: 600px;
  form{
    display: flex;
    input{
      background-color: #fafafa;
      border: #cacaca solid 1px
      border-radius: 4px;
      font-size: 14px;
      padding: 0.4rem;;
    }
  }
}
</style>
