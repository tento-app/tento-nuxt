<template id="">
  <div class="content chat">
    <div class="chat_members">
      <h2>参加メンバー(4)</h2>
      <ul>
        <li><user /></li>
        <li><user /></li>
        <li><user /></li>
        <li><user /></li>
      </ul>
    </div>
    <div class="chat_contents">
      <h2>質問/備考</h2>
      <ul>
        <li>
          <div class="chat_contents_detail">
            <div class="user_img"></div>
            <div class="chat_contents_user">
              <div class="chat_contents_user_info">
                <p class="chat_contents_user_info_name">リンゴスター</p>
                <p class="chat_contents_user_info_time">10:24</p>
              </div>
                <p>おはようございます。
                   今日の会議は何時ごろスタートですか~？</p>
            </div>
          </div>
        </li>
        <li>
          <div class="chat_contents_detail">
            <div class="user_img"></div>
            <div class="chat_contents_user">
              <div class="chat_contents_user_info">
                <p class="chat_contents_user_info_name">ジョージハリスン</p>
                <p class="chat_contents_user_info_time">10:24</p>
              </div>
                <p>おはようございます！
                   12:30から始めますよーー</p>
            </div>
          </div>
        </li>
        <li>
          <div class="chat_contents_detail">
            <div class="user_img"></div>
            <div class="chat_contents_user">
              <div class="chat_contents_user_info">
                <p class="chat_contents_user_info_name">リンゴスター</p>
                <p class="chat_contents_user_info_time">10:24</p>
              </div>
                <p>ありがとうございます！</p>
            </div>
          </div>
        </li>
      </ul>
      <div class="comment">
        <div class="comment_form">
          <input type="text" name="" value="コメントする">
        </div>
        <div class="comment_form_btn">
          <input type="submit" value="送信">
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
@media (min-width:840px) {
  .chat{
    max-width: 840px;
    display: flex;
    margin: 0 auto;
    &_members{
      background-color: #FFFFFF;
      box-shadow: $box_shadow01;
      width: 30%;
      margin-right: 20px;
      border-radius: 5px;
      h2{
        color: $main_color;
        font-size: 12px;
        padding: 14px;
        border-bottom: 1px solid #CCCCCC;
      }
      li{
        margin: 8px 8px 0 8px;
        padding: 8px;
      }
      li:not(:last-child){
        border-bottom: 1px solid #CCCCCC;
      }
    }
    &_contents{
      background-color: #FFFFFF;
      box-shadow: $box_shadow01;
      width: 70%;
      border-radius: 5px;
      h2{
        color: $sub_color;
        font-size: 12px;
        padding: 14px;
        border-bottom: 1px solid #CCCCCC;
        font-size: normal;
      }
      &_detail{
        display: flex;
        padding: 14px;
        .user_img{
          background-image: url("../static/icon.jpg");
          background-position: center;
          background-size: cover;
          background-repeat: no-repeat;
          width: 38px;
          height: 38px;
          border-radius: 50%;
          margin-right: 1rem;
        }
      }
      &_user{
        &_info{
          display: flex;
          align-items: flex-end;
          &_name{
            font-weight: bold;
            font-size: 12px;
            margin-right: 20px;
          }
          &_time{
            font-size: 10px;
            color: #ccc;
          }
          + p{
            font-size: 12px;
          }
        }
      }
      .comment{
        display: flex;
        &_form{
          width: 90%;
          &_btn{
            width: 10%;
          }
        }
      }
    }
  }
}
</style>
