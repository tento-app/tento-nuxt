<template id="">
  <div class="content chat">
    <div class="chat_members">
      <h2>参加メンバー(4)</h2>
      <div class="chat_members_list">
        <ul>
          <li><nuxt-link to="/account"><user /></nuxt-link></li>
          <li><nuxt-link to="/account"><user /></nuxt-link></li>
          <li><nuxt-link to="/account"><user /></nuxt-link></li>
        </ul>
      </div>
    </div>
    <div class="chat_contents">
      <h2>質問/備考</h2>
      <ul>
        <div class="div">
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
                <p class="chat_contents_user_info_name">リンゴスター</p>
                <p class="chat_contents_user_info_time">10:24</p>
              </div>
                <p>おはようございます。
                   今日の会議は何時ごろスタートですか~？22</p>
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
                <p>おはようございます。
                   今日の会議は何時ごろスタートですか~？42</p>
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
                <p>おはようございます。
                   今日の会議は何時ごろスタートですか~？52</p>
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
        </div>
      </ul>
      <div class="comment">
        <textarea type="text" name="" placeholder="コメントする"></textarea>
        <button type="button" name="button"></button>
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
    height: 500px;
    display: flex;
    margin: 0 auto;
    padding: 80px 30px;
    &_members{
      background-color: #FFFFFF;
      box-shadow: $box_shadow02;
      width: 30%;
      margin-right: 20px;
      border-radius: 5px;
      overflow: visible scroll;
      position: relative;
      h2{
        color: $black01;
        font-size: 14px;
        padding: 14px;
        border-bottom: $border01;
        position: sticky;
        top: 0;
        background-color: #FFFFFF;
        border-radius: 5px 5px 0 0;
      }
      ul{
        padding: 0;
      }
      li{
        padding: 12px;
        margin: 0 8px;
      }
      li:not(:last-child){
        border-bottom: 1px solid #eaeaea;
      }
    }
    .chat_members::-webkit-scrollbar{
      display: none;
    }
    &_contents{
      position: relative;
      background-color: #FFFFFF;
      box-shadow: $box_shadow02;
      width: 70%;
      border-radius: 5px;
      h2{
        position: sticky;
        top: 0;
        background-color: #fff;
        color: $black01;
        font-size: 14px;
        padding: 14px;
        border-bottom: $border01;
        border-radius: 5px 5px 0 0;
      }
      ul{
        padding: 0px;
        display: flex;
        overflow: visible scroll;
        height: 240px;
        .div{
          margin-top: auto;
          display: flex;
          flex-direction: column;
        }
        li{
        }
      }
      &_detail{
        display: flex;
        padding: 14px;
        .user_img{
          background-image: url("../static/icon.jpg");
          background-position: center;
          background-size: cover;
          background-repeat: no-repeat;
          width: 42px;
          height: 42px;
          border-radius: 50%;
          margin-right: 0.6rem;
        }
      }
      &_user{
        &_info{
          display: flex;
          align-items: center;
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
            font-size: 14px;
            white-space: pre-line;
          }
        }
      }
      .comment{
        bottom: 0;
        display: flex;
        width: 100%;
          textarea{
            outline: none;
            width: 90%;
            border: 0px;
            background-color: #FAFAFA;
            padding: 10px;
            font-size: 14px;
            border-radius: 0 0 0 5px;
            box-sizing: border-box;
            height: 50px;
          }
          button{
            background-color: #00BE93;
            border: 0px;
            width: 82px;
            border-radius: 0 0 5px 0;
            outline: none;
            padding: 0;
            cursor: pointer;
          }
       }
    }
  }
  .chat_contents::-webkit-scrollbar{
    display: none;
  }
}

@media screen and (min-width: 500px) and (max-width: 840px) {
  .chat{
    max-width: 840px;
    margin: 0 auto;
    padding: 80px 30px;
    &_members{
      background-color: #FFFFFF;
      box-shadow: $box_shadow02;
      width: 100%;
      margin-right: 20px;
      border-radius: 5px;
      overflow: visible scroll;
      position: relative;
      h2{
        color: $black01;
        font-size: 14px;
        padding: 14px;
        border-bottom: $border01;
        position: sticky;
        top: 0;
        background-color: #FFFFFF;
        border-radius: 5px 5px 0 0;
      }
      ul{
        padding: 0;
      }
      li{
        padding: 12px;
        margin: 0 8px;
      }
      li:not(:last-child){
        border-bottom: 1px solid #eaeaea;
      }
    }
    .chat_members::-webkit-scrollbar{
      display: none;
    }
    &_contents{
      margin-top: 2rem;
      position: relative;
      background-color: #FFFFFF;
      box-shadow: $box_shadow02;
      width: 100%;
      border-radius: 5px;
      h2{
        position: sticky;
        top: 0;
        background-color: #fff;
        color: $black01;
        font-size: 14px;
        padding: 14px;
        border-bottom: $border01;
        border-radius: 5px 5px 0 0;
      }
      ul{
        padding: 0px;
        display: flex;
        overflow: visible scroll;
        height: 240px;
        .div{
          margin-top: auto;
          display: flex;
          flex-direction: column;
        }
        li{
        }
      }
      &_detail{
        display: flex;
        padding: 14px;
        .user_img{
          background-image: url("../static/icon.jpg");
          background-position: center;
          background-size: cover;
          background-repeat: no-repeat;
          min-width: 42px;
          height: 42px;
          border-radius: 50%;
          margin-right: 0.6rem;
        }
      }
      &_user{
        &_info{
          display: flex;
          align-items: center;
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
            font-size: 14px;
            white-space: pre-line;
          }
        }
      }
      .comment{
        bottom: 0;
        display: flex;
        width: 100%;
          textarea{
            outline: none;
            width: 90%;
            border: 0px;
            background-color: #FAFAFA;
            padding: 10px;
            font-size: 14px;
            border-radius: 0 0 0 5px;
            box-sizing: border-box;
            height: 50px;
          }
          button{
            background-color: #00BE93;
            border: 0px;
            width: 82px;
            border-radius: 0 0 5px 0;
            outline: none;
            padding: 0;
            cursor: pointer;
          }
       }
    }
  }
  .chat_contents::-webkit-scrollbar{
    display: none;
  }

}

@media screen and (min-width: 0px) and (max-width: 500px) {
  .chat{
    max-width: 840px;
    margin: 0 auto;
    padding: 80px 10px;
    &_members{
      background-color: #FFFFFF;
      box-shadow: $box_shadow02;
      width: 100%;
      margin-right: 20px;
      border-radius: 5px;
      overflow: visible scroll;
      position: relative;
      h2{
        color: $black01;
        font-size: 14px;
        padding: 14px;
        border-bottom: $border01;
        position: sticky;
        top: 0;
        background-color: #FFFFFF;
        border-radius: 5px 5px 0 0;
      }
      ul{
        padding: 0;
      }
      li{
        padding: 12px;
        margin: 0 8px;
      }
      li:not(:last-child){
        border-bottom: 1px solid #eaeaea;
      }
    }
    .chat_members::-webkit-scrollbar{
      display: none;
    }
    &_contents{
      margin-top: 2rem;
      position: relative;
      background-color: #FFFFFF;
      box-shadow: $box_shadow02;
      width: 100%;
      border-radius: 5px;
      h2{
        position: sticky;
        top: 0;
        background-color: #fff;
        color: $black01;
        font-size: 14px;
        padding: 14px;
        border-bottom: $border01;
        border-radius: 5px 5px 0 0;
      }
      ul{
        padding: 0px;
        display: flex;
        overflow: visible scroll;
        height: 240px;
        .div{
          margin-top: auto;
          display: flex;
          flex-direction: column;
        }
        li{
        }
      }
      &_detail{
        display: flex;
        padding: 14px;
        .user_img{
          background-image: url("../static/icon.jpg");
          background-position: center;
          background-size: cover;
          background-repeat: no-repeat;
          min-width: 42px;
          height: 42px;
          border-radius: 50%;
          margin-right: 0.6rem;
        }
      }
      &_user{
        &_info{
          display: flex;
          align-items: center;
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
            font-size: 14px;
            white-space: pre-line;
          }
        }
      }
      .comment{
        bottom: 0;
        display: flex;
        width: 100%;
          textarea{
            outline: none;
            width: 90%;
            border: 0px;
            background-color: #FAFAFA;
            padding: 10px;
            font-size: 14px;
            border-radius: 0 0 0 5px;
            box-sizing: border-box;
            height: 50px;
          }
          button{
            background-color: #00BE93;
            border: 0px;
            width: 82px;
            border-radius: 0 0 5px 0;
            outline: none;
            padding: 0;
            cursor: pointer;
          }
       }
    }
  }
  .chat_contents::-webkit-scrollbar{
    display: none;
  }

}
</style>
