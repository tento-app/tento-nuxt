<template lang="html">
  <div class="btn_list">
    <a :href="twitterUrl()" target="_blank"><img src="../../static/Twitter_Social_Icon_Circle_Color.svg" alt=""> </a>
    <p class="bookmark"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ccc" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg></p>
    <p class="btn_priority ">このキャンプに参加する</p>
  </div>
</template>

<script>
export default {
  props: {
    title:String
  },
  data() {
    return {
      url:'https://www.google.com/?hl=ja',
      twitter_url: "https://twitter.com/intent/tweet?url={0}&text={1}",
    }
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
</style>
