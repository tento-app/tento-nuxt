<template id="">
    <div class="content camp_body">
      <div class="header" v-bind:class="{ active: headerActive }">
        <div class="text">
          <h1 class="camp_body_text_title pc">{{ title }}</h1>
          <div class="btn_list">
            <a :href="twitterUrl()" target="_blank"><img src="../static/Twitter_Social_Icon_Circle_Color.svg" alt=""> </a>
            <p class="bookmark"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ccc" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg></p>
            <p class="btn_priority ">このキャンプに参加する</p>
          </div>
        </div>
      </div>
      <div class="camp_body_eyecatch">

        <div class="camp_body_eyecatch_img" :style="{ 'background-image' : 'url(https://object-storage.tyo2.conoha.io/v1/nc_ac83d3c0bf5f4fb0a05b3e1c0d3164f4/api/' + background_img_url + ')' }"></div>
      </div>
      <div class="content_text">

      <div class="camp_body_text">
        <h1 class="camp_body_text_title">{{ title }}</h1>
        <user :background_img_url="host_user.logo" :name="host_user.username" :position="host_user.position" :id="host_user.id" />
        <div class="camp_member">
          <h3>このキャンプのメンバー（{{ users.length }}）</h3>
          <ul>
            <li v-for="user in users">
              <div class="member">
                <div class="member_icon" :style="{ 'background-image' : 'url(https://object-storage.tyo2.conoha.io/v1/nc_ac83d3c0bf5f4fb0a05b3e1c0d3164f4/api/' + user.node.logo + ')' }"></div>
                <div class="member_text">
                  <p class="member_text_name">{{user.node.username}}</p>
                  <p class="member_text_position">{{ user.node.username }}</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div class="">
          <ul class="setting">
            <li>
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ccc" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="10" r="3"/><path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z"/></svg>
              <p>{{ place }}</p>
            </li>
            <li>
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ccc" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
              <p>{{ $dayjs(time).format('YYYY年MM月DD日') }}</p>
            </li>
            <li><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ccc" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              <p>{{ contact }}</p>
            </li>
          </ul>
          <!-- <div class="btn_list pc">
            <a :href="twUrl" target="_blank"><img src="../static/Twitter_Social_Icon_Circle_Color.svg" alt=""> </a>
            <p class="bookmark"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ccc" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg></p>
            <p class="btn_priority ">このキャンプに参加する</p>
          </div> -->
        </div>
        <div class="camp_body_text_describe">
          <p v-html="text"></p>
        </div>
      </div>
      <div class="">
        <div class="skill_component">
          <skill :tags="tags" title="Required tool"/>
        </div>
        <div class="profile_component">
          <profile :id="host_user.id"  :background_img_url="host_user.logo" :name="host_user.username" :position="host_user.position" :content="host_user.content"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
import user from '~/components/user.vue';
import profile from '~/components/profile.vue';
import skill from '~/components/skill.vue';

export default {
  components: {
    user,
    profile,
    skill,
  },
  props: {
    title: String,
    place: String,
    time: String,
    contact: String,
    text: String,
    background_img_url: String,
    host_user: Object,
    tags: Array,
    users: Array,
  },
  data() {
    return {
      url:'https://www.google.com/?hl=ja',
      twitter_url: "https://twitter.com/intent/tweet?url={0}&text={1}",
      headerActive:false,
      scrollY:0,
      // url:'https://tento.app' + window.location.pathname
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  methods : {
    /**
     * シェア用のURLを作成します。
     */
    createSnsUrl : function(){
        // 現在のurlをエンコード
    	// var url = encodeURIComponent(location.href);
    	// ページ文言(タイトルとかdescription) ここではdescriptionを使用
    	// var txt = encodeURIComponent(document.querySelector("meta[name='description']").getAttribute('content'));
    	// Twitter用のurl作成 ハッシュタグもtxtを使用
    	this.twUrl = 'https://twitter.com/intent/tweet?text=' + this.title + '&hashtags=tento_camp' + 'tento_camp' + '&url=' + encodeURIComponent(location.href);
    },
    handleScroll: function() {
        this.scrollY = window.scrollY;
        if (this.scrollY > 600) {
          this.headerActive = true
        } else {
          this.headerActive = false
        }
    },
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
      return this.formatByArr(this.twitter_url, this.url, this.title);
    },
    hatebuUrl() {
      return this.formatByArr(this.hatebu_url, this.url, this.title);
    },
    pocketUrl() {
      return this.formatByArr(this.pocket_url, this.url);
    }
  }
  // data() {
  //   return {
  //     title:"進行中のプロジェクトデザインやってくれる方！",
  //     place:"赤羽キャンパス",
  //     time:"03/17/14:00",
  //     contact:"tento@gmail.com",
  //     text:"テレビのCM意味あるのかな？と感じたことがある人は多いと思います。あの広告方法は、商品を認知してもらうことに関してはすごい力を持っています。しかし、実際にその広告を見たからと行って、消費行動に移るかというと、わからないところです。また、様々なネットショッピングサイトが増えたことで、家にいるだけで商品が買える。さらに自分に合っている商品をオススメに提示されるので、ネットショッピングはさらに成長していくと考えられます。私が考えるSNSでは、そのようなネットショッピングでの消費(ネットで広告を見る→ネットで購入)ではなく、広告を見て、実際に足を運ぶという従来の消費を増やしていこう、というものです。テレビのCMに取って代わり、一つの携帯で広告をする。しかし、ネットショッピングとは別の業界。 独創性に溢れた方にご協力お願いしたいと考えております。"
  //   }
  // }
}

</script>

<style lang="scss" scoped>
@import '~/assets/style/_color.scss';
@keyframes fadein01 {
  0% {
    transform: translateY(-5px);
    opacity: 0;
  }
  100% {
    transform: translateY(0px);
    opacity: 1;
  }
}

@keyframes fadeout01 {
  0% {
    transform: translateY(0px);
    opacity: 1;
  }
  100% {
    transform: translateY(-5px);
    opacity: 0;
  }
}


@media (min-width:840px) {
  .skill_component {
    margin: 3rem 0;
  }
  .profile_component {
    margin: 3rem 0 0;
    padding: 0 0 2rem;
  }
  .camp_body{
    .active {
      display:block !important;
      opacity: 1;
      animation: fadein01 0.2s ease-in 0s;
    }
    .header {
      position: relative;
      background-color: rgba(250, 250, 250, 1);
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
      padding: 0.9rem 0;
      z-index: 4;
      position: fixed;
      width: 100%;
      top: 0;
      display: none;
      .text {
        max-width: 840px;
        margin: 0 auto;
        padding: 0px 30px;
        display: flex;
        align-items: center;
        h1 {
          font-size: 1.2rem;
          color: #1f1f1f;
        }
        .btn_list {
          margin-left: auto;
          display: flex;
          align-items: center;
          a {
            margin-right: 0.5rem;
            box-shadow: $box_shadow01;
            width: 35px;
            height: 35px;
            border-radius: 50%;
            img {
              width: 35px;
            }
          }
          .bookmark {
            cursor: pointer;
            box-shadow: $box_shadow01;
            width: 35px;
            height: 35px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: #fff;
            margin-right: 0.5rem;
          }
        }
      }
    }
    .content_text{
      background-color: #fff;
      .btn_list {
        margin-left: auto;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        padding: 1rem 0;
        a {
          margin-right: 0.5rem;
          box-shadow: $box_shadow01;
          width: 35px;
          height: 35px;
          border-radius: 50%;
          img {
            width: 35px;
          }
        }
        .bookmark {
          cursor: pointer;
          box-shadow: $box_shadow01;
          width: 35px;
          height: 35px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: #fff;
          margin-right: 0.5rem;
        }
      }
    }
    &_eyecatch{
      max-width: 840px;
      margin: 0 auto;
      padding:30px;
      &_img {
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
    &_text{
      margin: 0 auto;
      padding: 40px 30px;
      max-width: 840px;
      .camp_member {
        padding: 2rem 0;
        h3 {
          font-size: 1rem;
          color: $black02;
          margin-bottom: 1rem;
        }
        ul {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          li {
            cursor: pointer;
            .member {
              margin-right: 1rem;
              margin-bottom: 1rem;
              width: 100px;
              &_icon {
                width: 60px;
                height: 60px;
                margin: 0 auto 0.5rem;
                border-radius: 50%;
                background-color: #f0f0f0;
                background-position: center;
                background-size: cover;
              }
              &_text {
                text-align: center;
                &_name {
                  font-size: 1rem;
                  font-weight: bold;
                }
                &_position {
                  font-size: 14px;
                  color: $black02;
                }
              }
            }
          }
        }
      }
      .setting {
        margin: 0;
        border-bottom: $border01;
        padding: 1rem 0;
        display: flex;
        align-items: center;
        li {
          display: flex;
          align-items: center;
          font-size: 14px;
          margin-right: 1rem;
          p {
            margin-left: 0.4rem;
          }
        }
      }
      // &_tag{
      //   width: 80px;
      //   font-size: 14px;
      //   font-weight: bold;
      //   padding: 4px;
      //   text-align: center;
      //   min-width: 40px;
      //   color: #fff;
      //   &.event {
      //       background-color: #007D98;
      //   }
      //   &.develop {
      //       background-color: #F49E1B;
      //   }
      //   &.join {
      //       background-color: #FF4B4B;
      //   }
      // }
      h1{
        margin-top: 10px;
        margin-bottom: 20px;
        color: $black01;
      }
      &_describe{
        margin-top: 2rem;
        > p{
          line-height: 3;
          word-break: break-all;
          white-space: pre-line;
          > p {
            line-height: 1.8
          }
          h1 {
            font-size: 2rem;
          }
          h2 {
            font-size: 1.8rem;
          }
          h3 {
            font-size: 1.6rem;
          }
          h4 {
            font-size: 1.4rem;
          }
          h5 {
            font-size: 1.2rem;
          }
        }
      }
    }
  }
  .join {
    display: flex;
    max-width: 840px;
    margin: 2rem auto 0;
    padding: 2rem 30px;
    margin-left:auto;
    border-top: $border01;
    .btn_list {
      margin-left: auto;
      display: flex;
      .btn_priority{
        display: flex;
        align-items: center;
      }
      .color {
        border: $border01;
        border-radius: 8px;
        background-color: $black04;
        display: flex;
        align-items: center;
        margin: 0;
        margin-left: 1rem;
        color: $black02;
        svg {
          stroke: $black02;
        }
      }
    }
  }
}

@media screen and (min-width: 500px) and (max-width: 840px) {
  .camp_body{
    max-width: 840px;
    .active {
      display:block !important;
      opacity: 1;
      animation: fadein01 0.2s ease-in 0s;
    }
    .header {
      position: relative;
      background-color: rgba(250, 250, 250, 1);
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
      padding: 0.9rem 0;
      z-index: 4;
      position: fixed;
      width: 100%;
      top: 0;
      display: none;
      .text {
        max-width: 840px;
        margin: 0 auto;
        padding: 0px 30px;
        display: flex;
        align-items: center;
        h1 {
          font-size: 1.2rem;
          color: #1f1f1f;
        }
        .btn_list {
          margin-left: auto;
          display: flex;
          align-items: center;
          a {
            margin-right: 0.5rem;
            box-shadow: $box_shadow01;
            width: 35px;
            height: 35px;
            border-radius: 50%;
            img {
              width: 35px;
            }
          }
          .bookmark {
            cursor: pointer;
            box-shadow: $box_shadow01;
            width: 35px;
            height: 35px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: #fff;
            margin-right: 0.5rem;
          }
        }
      }
    }
    .content_text{
      background-color: #fff;
      .btn_list {
        margin-left: auto;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        padding: 1rem 0;
        a {
          margin-right: 0.5rem;
          box-shadow: $box_shadow01;
          width: 35px;
          height: 35px;
          border-radius: 50%;
          img {
            width: 35px;
          }
        }
        .bookmark {
          cursor: pointer;
          box-shadow: $box_shadow01;
          width: 35px;
          height: 35px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: #fff;
          margin-right: 0.5rem;
        }
      }
    }
    &_eyecatch{
      max-width: 840px;
      margin: 0 auto;
      padding:30px;
      &_img {
        height: 240px;
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
    &_text{
      margin: 0 auto;
      padding: 40px 30px;
      max-width: 840px;
      .camp_member {
        padding: 2rem 0;
        h3 {
          font-size: 1rem;
          color: $black02;
          margin-bottom: 1rem;
        }
        ul {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          li {
            cursor: pointer;
            .member {
              margin-right: 1rem;
              margin-bottom: 1rem;
              width: 100px;
              &_icon {
                width: 60px;
                height: 60px;
                margin: 0 auto 0.5rem;
                border-radius: 50%;
                background-color: #f0f0f0;
                background-position: center;
                background-size: cover;
              }
              &_text {
                text-align: center;
                &_name {
                  font-size: 1rem;
                  font-weight: bold;
                }
                &_position {
                  font-size: 14px;
                  color: $black02;
                }
              }
            }
          }
        }
      }
      .setting {
        margin: 0;
        border-bottom: $border01;
        padding: 1rem 0;
        display: flex;
        align-items: center;
        li {
          display: flex;
          align-items: center;
          font-size: 14px;
          margin-right: 1rem;
          p {
            margin-left: 0.4rem;
          }
        }
      }
      // &_tag{
      //   width: 80px;
      //   font-size: 14px;
      //   font-weight: bold;
      //   padding: 4px;
      //   text-align: center;
      //   min-width: 40px;
      //   color: #fff;
      //   &.event {
      //       background-color: #007D98;
      //   }
      //   &.develop {
      //       background-color: #F49E1B;
      //   }
      //   &.join {
      //       background-color: #FF4B4B;
      //   }
      // }
      h1{
        margin-top: 10px;
        margin-bottom: 20px;
        color: $black01;
      }
      &_describe{
        margin-top: 1rem;
        > p{
          line-height: 3;
          word-break: break-all;
          white-space: pre-line;
          > p {
            white-space: pre-line;
            line-height: 1.8
          }
          h1 {
            font-size: 2rem;
          }
          h2 {
            font-size: 1.8rem;
          }
          h3 {
            font-size: 1.6rem;
          }
          h4 {
            font-size: 1.4rem;
          }
          h5 {
            font-size: 1.2rem;
          }
        }
      }
    }
  }
  .join {
    display: flex;
    max-width: 840px;
    margin: 2rem auto 0;
    padding: 2rem 30px 0;
    margin-left:auto;
    border-top: $border01;
    .btn_list {
      margin-left: auto;
      display: flex;
      .btn_priority{
        display: flex;
        align-items: center;
      }
      .color {
        border: $border01;
        border-radius: 8px;
        background-color: $black04;
        display: flex;
        align-items: center;
        margin: 0;
        margin-left: 1rem;
        color: $black02;
        svg {
          stroke: $black02;
        }
      }
    }
  }
}

@media screen and (min-width: 0px) and (max-width: 500px) {
  .pc {
    display: none;
  }
  .camp_body{
    max-width: 840px;
    .active {
      display:block !important;
      opacity: 1;
      animation: fadein01 0.2s ease-in 0s;
    }
    .header {
      position: relative;
      background-color: rgba(250, 250, 250, 1);
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
      padding: 0.9rem 0;
      z-index: 4;
      position: fixed;
      width: 100%;
      bottom: 0;
      display: none;
      .text {
        max-width: 840px;
        margin: 0 auto;
        padding: 0px 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        h1 {
          font-size: 1.2rem;
          color: #1f1f1f;
        }
        .btn_list {
          display: flex;
          align-items: center;
          a {
            margin-right: 0.5rem;
            box-shadow: $box_shadow01;
            width: 35px;
            height: 35px;
            border-radius: 50%;
            img {
              width: 35px;
            }
          }
          .bookmark {
            cursor: pointer;
            box-shadow: $box_shadow01;
            width: 35px;
            height: 35px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: #fff;
            margin-right: 0.5rem;
          }
        }
      }
    }
    .content_text{
      background-color: #fff;
    }
    &_eyecatch{
      max-width: 840px;
      margin: 0 auto;
      padding: 30px 15px;
      &_img {
        height: 240px;
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
    &_text{
      margin: 0 auto;
      padding: 40px 15px;
      max-width: 840px;
      .camp_member {
        padding: 2rem 0;
        h3 {
          font-size: 1rem;
          color: $black02;
          margin-bottom: 1rem;
        }
        ul {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          li {
            cursor: pointer;
            .member {
              margin-right: 1rem;
              margin-bottom: 1rem;
              width: 80px;
              &_icon {
                width: 52px;
                height: 52px;
                margin: 0 auto 0.5rem;
                border-radius: 50%;
                background-color: #f0f0f0;
              }
              &_text {
                text-align: center;
                &_name {
                  font-size: 1rem;
                  font-weight: bold;
                }
                &_position {
                  font-size: 14px;
                  color: $black02;
                }
              }
            }
          }
        }
      }
      .setting {
        margin: 0 0;
        border-bottom: $border01;
        padding: 1rem 0;
        align-items: center;
        li {
          display: flex;
          align-items: center;
          font-size: 14px;
          margin-right: 1rem;
          margin-bottom: 0.5rem;
          p {
            margin-left: 0.4rem;
          }
        }
      }
      // &_tag{
      //   width: 80px;
      //   font-size: 14px;
      //   font-weight: bold;
      //   padding: 4px;
      //   text-align: center;
      //   min-width: 40px;
      //   color: #fff;
      //   &.event {
      //       background-color: #007D98;
      //   }
      //   &.develop {
      //       background-color: #F49E1B;
      //   }
      //   &.join {
      //       background-color: #FF4B4B;
      //   }
      // }
      h1{
        margin-top: 10px;
        margin-bottom: 20px;
        color: $black01;
      }
      &_describe{
        margin-top: 1rem;
        > p{
          line-height: 3;
          word-break: break-all;
          white-space: pre-line;
          > p {
            line-height: 1.8
          }
          h1 {
            font-size: 2rem;
          }
          h2 {
            font-size: 1.8rem;
          }
          h3 {
            font-size: 1.6rem;
          }
          h4 {
            font-size: 1.4rem;
          }
          h5 {
            font-size: 1.2rem;
          }
        }
      }
    }
  }
  .join {
    display: flex;
    justify-content: center;
    max-width: 840px;
    margin: 0rem auto;
    padding: 0rem 0px 0;
    margin-left:auto;
    .btn_list {
      display: flex;
      .btn_priority{
        display: flex;
        align-items: center;
      }
      .color {
        border: $border01;
        border-radius: 8px;
        background-color: $black04;
        display: flex;
        align-items: center;
        margin: 0;
        margin-left: 1rem;
        color: $black02;
        svg {
          stroke: $black02;
        }
      }
    }
  }
}

</style>
