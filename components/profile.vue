<template id="">
<div class="content profile">
    <div class="profile_contents">
      <div class="profile_contents_user">
        <div class="profile_contents_img"></div>
        <div class="profile_contents_wrapper">
          <ul>
            <li>
              <p class="profile_contents_wrapper_name">ジョージハリスン</p>
            </li>
            <li>
              <p class="profile_contents_wrapper_position">マーケター</p>
            </li>
            <li>
              <p class="profile_contents_wrapper_text">私は元the beatlesのメンバーで今はマーケターとして働いています。</p>
            </li>
            <nuxt-link to="/account">
              <li class="profile_view_more sub_btn">
                <p>View page <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18l6-6-6-6"/></svg></p>
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
  }
}
</script>

<style lang="scss">
@import '~/assets/style/_color.scss';
@media (min-width:840px){
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
        width: 48px;
        height: 48px;
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
    padding: 80px 0px;
    &_contents{
      border-top: $border01;
      border-bottom: $border01;
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
