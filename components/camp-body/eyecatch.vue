<template lang="html">
  <div class="camp_body_eyecatch">
    <!-- <div class="camp_body_eyecatch_img" v-if="background_img_url" :style="{ 'background-image' : 'url(https://object-storage.tyo2.conoha.io/v1/nc_ac83d3c0bf5f4fb0a05b3e1c0d3164f4/api/' + background_img_url + ')' }"></div> -->
    <img :src="'https://object-storage.tyo2.conoha.io/v1/nc_ac83d3c0bf5f4fb0a05b3e1c0d3164f4/api/' + background_img_url" alt="">
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
    line-height: 0;
    img {
      width: 100%;
      box-shadow: $box_shadow04;
      border-radius: 12px;
    }
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
    line-height: 0;
    border-bottom: 1px solid $black04;
    img {
      width: 100%;
      background-color: #fff;
    }
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
