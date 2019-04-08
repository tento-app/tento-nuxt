<template lang="html">
  <section>
    <Header />
    <link href="https://fonts.googleapis.com/css?family=Noto+Sans+JP|Rubik" rel="stylesheet">
      <div id="FAQ">
        <h1>よくある質問</h1>
        <div class="item">
          <div class="question">
            <span>Q.1</span>
            <p>Tentoはどんなサービスですか？</p>
          </div>
          <div class="ans">
            <p>学生のやりたいことを学生同士でシェアする掲示板サイトです。</p>
          </div>
        </div>

        <div class="item">
          <div class="question">
            <span>Q.2</span>
            <p>Tentoは無料で利用できますか？</p>
          </div>
          <div class="ans">
            <p>無料で利用できます。</p>
          </div>
        </div>

        <div class="item">
          <div class="question">
            <span>Q.3</span>
            <p>作成することが出来ないキャンプはありますか？</p>
          </div>
          <div class="ans list">
            <p>以下のようなキャンプは発行できません。また発行された場合は運営側で削除し、発行したユーザーを利用停止にする場合がございます。</p>
            <ul>
              <li>宗教に関するキャンプ</li>
              <li>性的な行為を想起もしくは要求するキャンプ</li>
              <li>ネットワークビジネス、MLMに関するキャンプ</li>
              <li>規制や業法に反するキャンプ</li>
              <li>公序良俗に反するキャンプ</li>
              <li>その他ユーザの迷惑、危険になる可能性があるキャンプ</li>
            </ul>
          </div>
        </div>

        <div class="item">
          <div class="question">
            <span>Q.4</span>
            <p>タグ、スキルを追加してほしい！</p>
          </div>
          <div class="ans">
            <p>タグ、スキルの追加リクエストは<a href="https://twitter.com/tento_app" target="blank">こちら</a>よりお願いいたします。</p>
          </div>
        </div>

        <div class="item">
          <div class="question">
            <span>Q.5</span>
            <p>退会はできますか？</p>
          </div>
          <div class="ans">
            <p>できます。<br><a href="https://twitter.com/tento_app" target="blank">こちら</a>よりご連絡ください。</p>
          </div>
        </div>

      </div>
    <Footer />
  </section>
</template>

<script>
import Header from '~/layouts/Header.vue';
import Footer from '~/layouts/Footer.vue';
export default {
  components: {
    Header,
    Footer,
  },
}
</script>

<style lang='scss'>
@import '~/assets/style/base.scss';
@import '~/assets/style/btn.scss';

#FAQ {
  max-width: 840px;
  padding:30px;
  margin: 0 auto;
  font-size: 15px;
  .item {
    padding: 1rem;
    background-color: #fff;
    margin-bottom: 1rem;
    .question {
      display: flex;
      align-items: center;
      border-bottom: solid $black03 0.5px;
      padding-bottom: 0.5rem;
      margin-bottom: 0.5rem;
      span {
        margin-right: 1rem;
        font-weight: bold;
        color: $main-color;
      }
    }
    .ans {
      a {
        text-decoration: underline;
        color: $main_color;
      }
    }
    .list {
      p {
        margin-bottom: 1rem;
      }
      ul {
        list-style: disc;
        padding: 1rem;
        li {
          margin-bottom: 0.5rem;
        }
      }
    }
  }
}

</style>
