<template id="">
  <div class="">
    <div class="sns">
    <div class="share">
      <h5>Share</h5>
      <div class="sns_list">
        <div class="img">
          <a :href="twitterUrl()" target="_blank">
            <img src="~/static/Twitter_Social_Icon_Circle_Color.svg" alt="">
           </a>
        </div>
      </div>
    </div>
    </div>
    <div class="content profile">
      <div class="profile_contents">
        <div class="profile_contents_user">
          <div class="profile_contents_img" v-if="host_user.logo" :style="{ 'background-image' : 'url(https://media.tento.app/' + host_user.logo + ')' }"></div>
          <div class="profile_contents_img" v-if="!host_user.logo"></div>
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
    host_user:Object,
    url_id:String
  },
  data() {
    return {
      url:'https://tento.app/camp/',
      twitter_url: "https://twitter.com/intent/tweet?url={0}",
    }
  },
  methods: {
    formatByArr(msg) {
      // フォーマット（引数可変（配列）版）
      var args = [];
      for (var i = 1; i < arguments.length; i++) {
        args[i - 1] = arguments[i];
      }
      // URLエンコード
      args = args.map(x => encodeURIComponent(x));
      return msg.replace(/\{(\d+)\}/g, function(m, k) {
        return args[k];
      });
    },
    // それぞれパラメータを埋め込む
    twitterUrl() {
      return this.formatByArr(this.twitter_url, this.url + this.url_id);
    },
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/style/_color.scss';
@media (min-width:840px){
  .sns {
    max-width: 840px;
    margin: 0 auto 1rem;
    padding: 0 30px;
    display: flex;
    .share {
      margin-left: auto;
      background-color: $backround_color01;
      padding:0.5rem 1rem;
      display: flex;
      align-items: center;
      h5 {
        font-size: 1rem;
        border-right: $border01;
        padding: 0.5rem 1rem 0.5rem 0;
      }
      .img {
        width: 40px;
        margin-left: 1rem;
        line-height: 0;
        cursor: pointer;
        img {
          width: 40px;
        }
      }
    }
  }
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
        background-image: url("../static/icon_empty.png");
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        min-width: 62px;
        min-height: 62px;
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
  .sns {
    max-width: 840px;
    margin: 0 auto 1rem;
    padding: 0 30px;
    display: flex;
    .share {
      margin-left: auto;
      background-color: $backround_color01;
      padding:0.5rem 1rem;
      display: flex;
      align-items: center;
      h5 {
        font-size: 1rem;
        border-right: $border01;
        padding: 0.5rem 1rem 0.5rem 0;
      }
      .img {
        width: 40px;
        margin-left: 1rem;
        line-height: 0;
        cursor: pointer;
        img {
          width: 40px;
        }
      }
    }
  }
  .profile{
    max-width: 840px;
    margin: 0 auto;
    padding: 0px 30px;
    &_contents{
      border: $border01;
      border-radius: 5px;
      padding: 26px;
      &_user {
        display: flex;
        align-items: flex-start;
      }
      &_img {
        background-image: url("../static/icon_empty.png");
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        min-width: 52px;
        height: 52px;
        border-radius: 50%;
        margin-right: 1rem;
        border: $border01;
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
  .sns {
    max-width: 840px;
    margin: 0 auto 1rem;
    padding: 0 15px;
    display: flex;
    .share {
      margin-left: auto;
      background-color: $backround_color01;
      padding:0.5rem 1rem;
      display: flex;
      align-items: center;
      h5 {
        font-size: 1rem;
        border-right: $border01;
        padding: 0.5rem 1rem 0.5rem 0;
      }
      .img {
        width: 40px;
        margin-left: 1rem;
        line-height: 0;
        cursor: pointer;
        img {
          width: 40px;
        }
      }
    }
  }
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
        background-image: url("../static/icon_empty.png");
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        min-width: 52px;
        height: 52px;
        border-radius: 50%;
        margin-right: 1rem;
        border: $border01;
      }
      &_wrapper{
        &_name{
          font-size: 14px;
          font-weight: bold;
          margin-bottom: 0.25rem;
        }
        &_position {
          font-size: 14px;
          color: #ccc;
          margin-bottom: 0.25rem;
        }
        &_text{
          font-size: 14px;
          color: #555555;
        }
        .profile_view_more{
          margin: 1rem 0 0;
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
