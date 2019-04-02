<template lang="html">
  <div class="btn_list">
    <!-- <a :href="twitterUrl()" target="_blank"><img src="../../static/Twitter_Social_Icon_Circle_Color.svg" alt=""> </a> -->
    <p class="bookmark" @click="like()><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ccc" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg></p>
    <div class="btn_priority" @click="join()"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
     <p>Attend Camp</p>
   </div>
  </div>
</template>

<script>
import statusGql from '~/graphql/mutation/statusProject.gql'
import likedGql from '~/graphql/mutation/liked.gql'
import unlikedGql from '~/graphql/mutation/unliked.gql'
import joinGql from '~/graphql/mutation/joinProject.gql'
import outGql from '~/graphql/mutation/outProject.gql'
import { mapState } from 'vuex'

export default {
  props: {
    project_id: String,
    title:String
  },
  data() {
    return {
      isLiked: false,
      isJoined: false,
      url:'https://www.google.com/?hl=ja',
      twitter_url: "https://twitter.com/intent/tweet?url={0}&text={1}",
    }
  },
  computed: {
      ...mapState('user',['token']),
  },
  mounted: function () {
     this.$apollo.mutate({
      mutation: statusGql,
      variables: {
        project_id: this.project_id,
        token: this.token,
      }
    }).then(({ data }) => {
          // do what you want with data
          this.isJoined = data.isJoined.isJoined
          this.isLiked = data.isLiked.isLiked
        })
  },
  methods :{
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
    like(){
        if (this.isLiked){
          // いいねしてたら削除
          this.$apollo.mutate({
            mutation: unlikedGql,
            variables: {
              project_id: this.project_id,
              token: this.token,
            }
          }).then(({ data }) => {
                // do what you want with data
            if(data.liked.success){
              this.isLiked = !this.isLiked
            }
          })
        } else {
          // いいねしてないとき
          this.$apollo.mutate({
            mutation: likedGql,
            variables: {
              project_id: this.project_id,
              token: this.token,
            }
          }).then(({ data }) => {
                // do what you want with data
            if(data.liked.success){
              this.isLiked = !this.isLiked
            }
          })
        }
      },
      join(){
        if (this.isJoined){
          // いいねしてたら削除
          this.$apollo.mutate({
            mutation: outGql,
            variables: {
              project_id: this.project_id,
              token: this.token,
            }
          }).then(({ data }) => {
                // do what you want with data
            if(data.outProject.success){
              this.isJoined = !this.isJoined
            }
          })
        } else {
          // いいねしてないとき
          this.$apollo.mutate({
            mutation: joinGql,
            variables: {
              project_id: this.project_id,
              token: this.token,
            }
          }).then(({ data }) => {
                // do what you want with data
            if(data.joinProject.success){
              this.isJoined = !this.isJoined
            }
          })
        }
      },
  }
}
</script>

<style lang="scss">
@import '~/assets/style/_color.scss';
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
}
</style>
