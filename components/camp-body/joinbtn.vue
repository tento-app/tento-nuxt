<template lang="html">
  <div class="cover">
    <div class="btn_list pc">
      <!-- <a :href="twitterUrl()" target="_blank"><img src="../../static/Twitter_Social_Icon_Circle_Color.svg" alt=""> </a> -->

      <p class="bookmark" @click="doLike()" v-if="!classLike"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ccc" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg></p>
      <p class="bookmark liked" @click="doUnlike()" v-if="classLike"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ccc" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg></p>

      <div class="btn_priority" @click="doJoin()" v-if="!classJoin" v-on:click="checkJoinfeedback">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
        <p>Campに参加</p>
      </div>
      <div class="btn_priority joined" v-if="classJoin" v-on:click="checkcancellfeedback">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
        <p>参加中</p>
      </div>

      <div class="feedback" :class="{ join_feedback : joinFeedback}">
        <div class="feedback_cover">
          <div class="feedback_content">
            <h3>Well come to this Camp!</h3>
            <div class="img">
              <img src="../../static/wellcome.svg" alt="">
            </div>
            <div class="">
              <p class="btn_priority" v-on:click="clearJoinfeedback">OK</p>
            </div>
          </div>
        </div>
      </div>

      <div class="feedback" :class="{ cancell_feedback : cancellFeedback}">
        <div class="feedback_cover">
          <div class="feedback_content">
            <h3>参加を取りやめますか？</h3>
            <div class="img">
              <img src="../../static/question.svg" alt="">
            </div>
            <div class="btn_list">
              <p v-on:click="clearcancellfeedback">キャンセル</p>
              <p class="btn_priority" @click="doUnjoin()" v-on:click="clearcancellfeedback">OK</p>
            </div>
          </div>
        </div>
      </div>
    </div>





    <div class="btn_list sp">
      <!-- <a :href="twitterUrl()" target="_blank"><img src="../../static/Twitter_Social_Icon_Circle_Color.svg" alt=""> </a> -->
      <div class="btn_priority" @click="doJoin()" v-if="!classJoin" v-on:click="checkJoinfeedback">
        <p>Campに参加</p>
      </div>
      <div class="btn_priority joined" v-if="classJoin" v-on:click="checkcancellfeedback">
        <p>参加中</p>
      </div>

      <p class="bookmark" @click="doLike()" v-if="!classLike">
        マイリストに保存
      </p>
      <p class="bookmark liked" @click="doUnlike()" v-if="classLike">
        保存済み
      </p>

      <div class="feedback" :class="{ join_feedback : joinFeedback}">
        <div class="feedback_cover">
          <div class="feedback_content">
            <h3>Well come to this Camp!</h3>
            <div class="img">
              <img src="../../static/wellcome.svg" alt="">
            </div>
            <div class="">
              <p class="btn_priority" v-on:click="clearJoinfeedback">OK</p>
            </div>
          </div>
        </div>
      </div>

      <div class="feedback" :class="{ cancell_feedback : cancellFeedback}">
        <div class="feedback_cover">
          <div class="feedback_content">
            <h3>参加を取りやめますか？</h3>
            <div class="img">
              <img src="../../static/question.svg" alt="">
            </div>
            <div class="btn_list">
              <p v-on:click="clearcancellfeedback">キャンセル</p>
              <p class="btn_priority" @click="doUnjoin()" v-on:click="clearcancellfeedback">OK</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import likedGql from '~/graphql/mutation/liked.gql'
import unlikedGql from '~/graphql/mutation/unliked.gql'
import joinGql from '~/graphql/mutation/joinProject.gql'
import outGql from '~/graphql/mutation/outProject.gql'

import { mapState,mapMutations } from 'vuex'

export default {
  props: {
    project_id: String,
    title:String
  },
  data() {
    return {
      url:'https://www.google.com/?hl=ja',
      twitter_url: "https://twitter.com/intent/tweet?url={0}&text={1}",
      joinFeedback:false,
      cancellFeedback:false,
    }
  },
  computed: {
      ...mapState('user',['token']),
      ...mapState('button',['like','classLike','join','classJoin']),
  },
  methods :{
    clearJoinfeedback() {
      this.joinFeedback=false
    },
    checkJoinfeedback() {
      this.joinFeedback=true
    },
    clearcancellfeedback() {
      this.cancellFeedback=false
    },
    checkcancellfeedback() {
      this.cancellFeedback=true
    },
    ...mapMutations('button',['setLike','setClassLike','setJoin','setClassJoin']),
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
    doLike(){
      this.$store.commit('button/setClassLike',  true)
      this.$apollo.mutate({
        mutation: likedGql,
        variables: {
          project_id: this.project_id,
          token: this.token,
        },
      }).then(({ data }) => {
            // do what you want with data
        if(data.liked.success){
          this.$store.commit('button/setLike',  true)
        }
      })
    },
    doUnlike(){
      this.$store.commit('button/setClassLike',  false)
      this.$apollo.mutate({
        mutation: unlikedGql,
        variables: {
          project_id: this.project_id,
          token: this.token,
        }
      }).then(({ data }) => {
            // do what you want with data
        if(data.liked.success){
          this.$store.commit('button/setLike',  false)
        }
      })
    },
    doJoin(){
      this.$store.commit('button/setClassJoin',  true)
      this.$apollo.mutate({
        mutation: joinGql,
        variables: {
          project_id: this.project_id,
          token: this.token,
        }
      }).then(({ data }) => {
            // do what you want with data
        if(data.joinProject.success){
          this.$store.commit('button/setJoin',  true)
        }
      })
    },
    doUnjoin(){
      this.$store.commit('button/setClassJoin',  false)
      this.$apollo.mutate({
        mutation: outGql,
        variables: {
          project_id: this.project_id,
          token: this.token,
        }
      }).then(({ data }) => {
            // do what you want with data
        if(data.outProject.success){
          this.$store.commit('button/setJoin',  false)
        }
      })
    }
  }
}
</script>

<style lang="scss">
@import '~/assets/style/_color.scss';
@keyframes scalein01 {
  0% {
    transform: scale(0.3);
    opacity: 0;
  }
  60% {
    transform: scale(1.2);
    opacity: 1;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}
@media (min-width:500px) {
  .feedback {
    display: none;
    .feedback_cover {
      z-index: 9999;
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: $black02;
      .feedback_content {
        animation: scalein01 0.5s ease-in 0s;
        max-width: 600px;
        background-color: #fff;
        padding: 2rem;
        border-radius: 12px;
        h3 {
          text-align: center;
          font-size: 1.2rem;
          margin-bottom: 1.5rem;
        }
        .img {
          max-width: 200px;
          margin: 0 auto;
          img {
            width: 100%;
          }
        }
        .btn_priority {
          margin: 1rem auto 0;
        }
        .btn_list {
          margin-top: 1.5rem;
          p {
            cursor: pointer;
          }
          .btn_priority {
            margin: 0;
            margin-left: auto;
            width: 60px;
          }
        }
      }
    }
  }


  .join_feedback {
    display: block;
  }

  .cancell_feedback {
    display: block;
  }

  // body {
  //   overflow: hidden;
  // }



  .sp {
    display: none !important;
  }
  .btn_list {
    margin-left: auto;
    display: flex;
    align-items: center;
    a {
      margin-right: 0.5rem;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      img {
        width: 40px;
      }
    }
    .bookmark {
      cursor: pointer;
      width: 40px;
      height: 40px;
      border-radius: 4px;
      margin-right: 0.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #fff;
      border: $border01;
      &:hover{
        border: solid 1px #FFC042;
        transition: $transtion01;
        svg {
          transition: $transtion01;
          fill:#FFC042;
          stroke: #FFC042;
        }
      }
    }
    .liked {
      border: solid 1px #FFC042;
      background-color: #FFC042;
      transition: $transtion01;
      svg {
        transition: $transtion01;
        fill:#fff;
        stroke: #fff;
      }
      &:hover{
        border: solid 1px #FFC042;
        transition: $transtion01;
        svg {
          transition: $transtion01;
          fill:#FFF;
          stroke: #FFF;
        }
      }
    }
    .joined {
      background-color: #ccc;
      &:hover {
        background-color: #ccc;
      }
    }
  }
}

@media screen and (min-width: 0px) and (max-width: 500px) {
  .feedback {
    display: none;
    .feedback_cover {
      z-index: 9999;
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: $black02;
      .feedback_content {
        animation: scalein01 0.5s ease-in 0s;
        max-width: 600px;
        background-color: #fff;
        padding: 2rem;
        border-radius: 12px;
        h3 {
          text-align: center;
          font-size: 1.2rem;
          margin-bottom: 1.5rem;
        }
        .img {
          max-width: 250px;
          margin: 0 auto;
          img {
            width: 100%;
          }
        }
        .btn_priority {
          margin: 1rem auto 0;
        }
        .btn_list {
          margin-top: 1.5rem;
          padding: 0;
          display: flex;
          align-items: center;
          p {
            cursor: pointer;
          }
          .btn_priority {
            margin: 0;
            margin-left: auto;
            width: 80px;
          }
        }
      }
    }
  }


  .join_feedback {
    display: block;
  }

  .cancell_feedback {
    display: block;
  }

  .pc {
    display: none !important;
  }
  .btn_list {
    padding: 0 15px;
    margin: 1.5rem 0 0;
    a {
      margin-right: 0.5rem;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      img {
        width: 40px;
      }
    }
    .bookmark {
      cursor: pointer;
      width: 100%;
      padding: 10px;
      margin: 0 auto;
      font-size: 14px;
      border-radius: 4px;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #fff;
      border: solid 1px $main_color;
      color: $main_color;
    }
    .btn_priority {
      max-width: 100%;
      margin-bottom: 0.5rem;
    }



    .liked {
      border: solid 1px rgba(0,0,0,0);
      background-color: $black04;
      color: $black02;
      transition: $transtion01;
      &:hover {
        background-color: $black04;
        color: $black02;
      }
      svg {
        transition: $transtion01;
        fill:#fff;
        stroke: #fff;
      }
    }
    .joined {
      background-color: $black04;
      color: $black02;
      &:hover {
        background-color: $black04;
        color: $black02;
      }
    }
  }
}
</style>
