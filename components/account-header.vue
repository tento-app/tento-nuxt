<template lang="html">
  <div class="account">
    <div class="account_header">
      <div class="img" :style="{ 'background-image': 'url(https://media.tento.app/' + header + ')' }">
        <div class="icon" :style="{ 'background-image': 'url(https://media.tento.app/' + logo + ')' }"></div>
      </div>
      <div class="account_header_text">
        <div class="account_header_text_link">
          <div class="">
            <p class="name">{{ username }}</p>
            <p class="position">{{ position }}</p>
          </div>
          <nuxt-link v-if="edit" to="account-edit">
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#ccc" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="16 3 21 8 8 21 3 21 3 16 16 3"></polygon></svg>
          </nuxt-link>
        </div>
        <p class="intro">{{ intro }}</p>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
export default {
  props:['username','position','header','logo','intro','edit'],
}
</script>

<style lang="scss" scoped>
@import "~/assets/style/_color.scss";
  .account{
    max-width: 840px;
    margin: 0px auto 0;
    padding: 80px 0 0;
    &_header{
      .img{
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        width: 100%;
        height: 280px;
        border-radius: 12px;
        position: relative;
        .icon{
          background-color: #fff;
          background-position: center;
          background-size: cover;
          width: 120px;
          height: 120px;
          border: solid 3px $main-color;
          border-radius: 50%;
          position: absolute;
          transform: translate(-50%,-50%);
          left: 50%;
          bottom: -120px;
          box-shadow: &$box_shadow01;
        }
      }
      &_text{
        margin-top: 4.5rem;
        text-align: center;
        &_link {
          justify-content: center;
          display: flex;
        }
        .name{
          font-size: 18px;
          font-weight: bold;
          line-height: 1;
        }
        .position{
          font-size: 14px;
          color: #ccc;
        }
        .intro{
          margin: 0.5rem auto 0;
          text-align: left;
          max-width: 300px;
          font-size: 14px;
        }
      }
    }
  }
</style>
