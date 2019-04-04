<template lang="html">
  <div class="camp_body_eyecatch">
    <div class="camp_body_eyecatch_img" v-if="background_img_url" :style="{ 'background-image' : 'url(https://media.tento.app/' + background_img_url + ')' }"></div>
    <div class="camp_body_eyecatch_img" v-if="!background_img_url"></div>
  </div>
</template>

<script>
export default {
  props : {
    background_img_url: String,
  }
}
</script>

<style lang="scss">
@import '~/assets/style/_color.scss';

@media (min-width:500px) {
  .camp_body_eyecatch{
    max-width: 840px;
    margin: 0 auto;
    padding:30px;
    &_img {
      background-image: url("../../static/header_logo.png");
      background-color: #fff;
      height: 280px;
      max-width: 100%;
      border-radius: 12px;
      position: relative;
      width: 100%;
      box-shadow: $box_shadow04;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
    }
  }
}


@media screen and (min-width: 0px) and (max-width: 500px) {
  .camp_body_eyecatch{
    max-width: 840px;
    margin: 0 auto;
    &_img {
      background-image: url("../../static/header_logo.png");
      background-color: #fff;
      height: 180px;
      max-width: 100%;
      position: relative;
      width: 100%;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
    }
  }
}
</style>
