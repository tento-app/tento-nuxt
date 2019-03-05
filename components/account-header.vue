<template lang="html">
  <div class="account">
    <div class="account_header">
      <div class="img">
        <div class="icon"></div>
      </div>
      <div class="account_header_text">
        <p class="name">ジョージハリスン</p>
        <p class="position">マーケター</p>
        <p class="intro">
          マーケティング、ウェブコンサルティングのことならお任せください
        </p>
      </div>
    </div>
  </div>
</template>

<script>
</script>

<style lang="scss">
@import "~/assets/style/_color.scss";
  .account{
    max-width: 840px;
    margin: 0px auto 0;
    padding: 80px 0 0;
    &_header{
      .img{
        background-image: url("../static/camp_img.jpg");
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        width: 100%;
        height: 280px;
        border-radius: 12px;
        position: relative;
        .icon{
          background-color: #fff;
          background-image: url("../static/icon.jpg");
          background-position: center;
          background-size: cover;
          width: 120px;
          height: 120px;
          border: solid 3px #fff;
          border-radius: 50%;
          position: absolute;
          transform: translate(-50%,-50%);
          left: 50%;
          bottom: -120px;
        }
      }
      &_text{
        margin-top: 4.5rem;
        text-align: center;
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
