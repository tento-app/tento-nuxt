<template id="">
<nuxt-link :to="{ name: 'user-id' , params: { id: id }}">
  <div class="abstract_user">
    <div class="abstract_user_img" v-if="background_img_url" :style="{ 'background-image' : 'url(https://object-storage.tyo2.conoha.io/v1/nc_ac83d3c0bf5f4fb0a05b3e1c0d3164f4/api/' + background_img_url + ')' }"></div>
    <div class="abstract_user_img" v-if="!background_img_url"></div>
    <div class="">
      <p class="abstract_user_name">{{ name }}</p>
      <p class="abstract_user_position pc">{{ position }}</p>
    </div>
  </div>
</nuxt-link>
</template>

<script type="text/javascript">
  export default {
    props: ['background_img_url','name','position','id']
  }
</script>

<style lang="scss" scoped>
@import '~/assets/style/_color.scss';
@media (min-width:840px){
  .abstract_user {
      display: flex;
      align-items: center;
      &_img {
          background-image: url("../static/icon_empty.png");
          background-position: center;
          background-size: cover;
          background-repeat: no-repeat;
          width: 52px;
          height: 52px;
          border-radius: 50%;
          margin-right: 0.5rem;
          border: $border01;
      }
      &_name {
          font-size: 1rem;
          color: $black01;
          font-weight: bold;
      }
      &_position {
          font-size: 14px;
          color: $black02;
      }
  }
}

@media screen and (min-width: 500px) and (max-width: 840px) {
  .abstract_user {
      display: flex;
      align-items: center;
      &_img {
          background-image: url("../static/icon_empty.png");
          background-position: center;
          background-size: cover;
          background-repeat: no-repeat;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          margin-right: 0.5rem;
      }
      &_name {
          font-size: 1rem;
          color: $black01;
          font-weight: bold;
      }
      &_position {
          font-size: 14px;
          color: $black02;
      }
  }

}

@media screen and (min-width: 0px) and (max-width: 500px) {
  .pc {
    display: none;
  }
  .abstract_user {
      display: flex;
      align-items: center;
      &_img {
          background-image: url("../static/icon_empty.png");
          background-position: center;
          background-size: cover;
          background-repeat: no-repeat;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          margin-right: 0.5rem;
          border: $border01;
      }
      &_name {
          font-size: 0.8rem;
          color: $black02;
      }
      &_position {
          font-size: 14px;
          color: $black02;
      }
  }

}
</style>
