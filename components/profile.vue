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
            <li class="profile_view_more sub_btn">
              <nuxt-link to="/account">View page &gt;</nuxt-link >
            </li>
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
    padding: 80px 0;
    &_contents{
      border: 1px solid #aaa;
      border-radius: 5px;
      padding: 26px;
      &_user {
        display: flex;
        align-items: start;
      }
      &_img {
        background-image: url("../static/icon.jpg");
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        width: 42px;
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
        }
      }
    }
  }
}

</style>
