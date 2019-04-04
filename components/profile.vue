<template id="">
<div class="content profile">
    <div class="profile_contents">
      <div class="profile_contents_user">
        <div class="profile_contents_img" :style="{ 'background-image' : 'url(https://media.tento.app/' + host_user.logo + ')' }"></div>
        <div class="profile_contents_wrapper">
          <ul>
            <li>
              <p class="profile_contents_wrapper_name">{{ host_user.username }}</p>
            </li>
            <li>
              <p class="profile_contents_wrapper_position">{{ host_user.position }}</p>
            </li>
            <li>
              <p class="profile_contents_wrapper_text">{{ host_user.content }}</p>
            </li>
            <nuxt-link :to="{ name: 'user-id' , params: { id: host_user.id }}">
              <li class="profile_view_more sub_btn">
                <p>View page</p>
              </li>
            </nuxt-link>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
import user from '~/components/user.vue';

export default {
  components: {
    user
  },
  // props: ['background_img_url','name','position','id','content']
  props : {
    host_user:Object
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/style/_color.scss';
@media (min-width:840px){
  .profile{
    max-width: 840px;
    margin: 0 auto;
    padding: 0px 30px 20px;
    &_contents{
      border: $border01;
      border-radius: 5px;
      padding: 1rem;
      &_user {
        display: flex;
        align-items: flex-start;
      }
      &_img {
        background-image: url("../static/icon.jpg");
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        width: 62px;
        height: 62px;
        border-radius: 50%;
        margin-right: 1rem;
        border: $border01;
      }
      &_wrapper{
        &_name{
          font-size: 18px;
          font-weight: bold;
          line-height: 1.4;
          margin: 0.5rem 0 0;
        }
        &_position {
          font-size: 0.9rem;
          line-height: 1.4;
          color: #ccc;
          margin: 0 0 0.5rem;
        }
        &_text{
          font-size: 0.95rem;
          color: #555555;
        }
        .profile_view_more{
          margin: 0.5rem 0;
          p {
            display: flex;
            align-items: center;
            justify-content: center;
            color: #fff;
          }
        }
      }
    }
  }
}

@media screen and (min-width: 500px) and (max-width: 840px) {
  .profile{
    max-width: 840px;
    margin: 0 auto;
    padding: 80px 30px;
    &_contents{
      border: $border01;
      border-radius: 5px;
      padding: 26px;
      &_user {
        display: flex;
        align-items: flex-start;
      }
      &_img {
        background-image: url("../static/icon.jpg");
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        min-width: 42px;
        height: 42px;
        border-radius: 50%;
        margin-right: 1rem;
      }
      &_wrapper{
        &_name{
          font-size: 18px;
          font-weight: bold;
        }
        &_position {
          font-size: 14px;
          color: #ccc;
        }
        &_text{
          font-size: 14px;
          color: #555555;
        }
        .profile_view_more{
          margin: 6px 0;
          p {
            display: flex;
            align-items: center;
            justify-content: center;
            color: #fff;
          }
        }
      }
    }
  }

}

@media screen and (min-width: 0px) and (max-width: 500px) {
  .profile{
    max-width: 840px;
    margin: 0 auto;
    padding: 20px 0px;
    &_contents{
      border-top: $border01;
      border-bottom: $border01;
      padding: 1rem;
      &_user {
        display: flex;
        align-items: flex-start;
      }
      &_img {
        background-image: url("../static/icon.jpg");
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        min-width: 52px;
        height: 52px;
        border-radius: 50%;
        margin-right: 1rem;
      }
      &_wrapper{
        &_name{
          font-size: 14px;
          font-weight: bold;
        }
        &_position {
          font-size: 12px;
          color: #ccc;
        }
        &_text{
          font-size: 12px;
          color: #555555;
        }
        .profile_view_more{
          margin: 6px 0;
          p {
            font-size: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #fff;
          }
        }
      }
    }
  }

}

</style>
