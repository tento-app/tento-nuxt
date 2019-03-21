<template id="">
  <div class="abstract_user">
    <div class="abstract_user_img" :style="{ 'background-image': 'url(' + background_img + ')' }"></div>
    <div class="">
      <p class="abstract_user_name">{{ name }}</p>
      <p class="abstract_user_position">{{ position }}</p>
    </div>
  </div>
</template>

<script type="text/javascript">
  export default {
    data(){
      return{
        icon:"",
        name:"ジョージハリスン",
        position:"webエンジニア"
      }
    }
  }
</script>

<style lang="scss" scoped>
@media (min-width:840px){
  .abstract_user {
      display: flex;
      align-items: center;
      &_img {
          background-image: url("../static/icon.jpg");
          background-position: center;
          background-size: cover;
          background-repeat: no-repeat;
          width: 52px;
          height: 52px;
          border-radius: 50%;
          margin-right: 0.5rem;
      }
      &_name {
          font-size: 14px;
          color: #555;
      }
      &_position {
          font-size: 12px;
          color: #ccc;
      }
  }
}

@media screen and (min-width: 500px) and (max-width: 840px) {
  .abstract_user {
      display: flex;
      align-items: center;
      &_img {
          background-image: url("../static/icon.jpg");
          background-position: center;
          background-size: cover;
          background-repeat: no-repeat;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          margin-right: 0.5rem;
      }
      &_name {
          font-size: 12px;
          color: #555;
      }
      &_position {
          font-size: 10px;
          color: #ccc;
      }
  }

}

@media screen and (min-width: 0px) and (max-width: 500px) {
  .abstract_user {
      display: flex;
      align-items: center;
      &_img {
          background-image: url("../static/icon.jpg");
          background-position: center;
          background-size: cover;
          background-repeat: no-repeat;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          margin-right: 0.5rem;
      }
      &_name {
          font-size: 14px;
          color: #555;
      }
      &_position {
          font-size: 12px;
          color: #ccc;
      }
  }

}
</style>
