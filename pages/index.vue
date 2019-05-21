<template>
  <section class="container">
    <Header />
    <link href="https://fonts.googleapis.com/css?family=Noto+Sans+JP|Rubik" rel="stylesheet">
    <div id="lp">
      <div class="main">
        <div class="background wrapper">
          <div class="eyecatch">
            <div class="text md">
              <div class="catchprase">
                <h1 class="first">学生による学生のための</h1>
                <h1 class="second">学生掲示板サービス</h1>
              </div>
            </div>
            <div class="text pc">
              <div class="catchprase">
                <h1 class="first">学生による学生のための学生掲示板</h1>
              </div>
            </div>
            <div class="img">
              <img src="~/static/Minimalist-Showcase-Project-Presentation.png" alt="">
            </div>
            <div class="text md">
              <p>Tentoとは学生のみが利用する<br>学生掲示板サイトです。<br>あなたの興味のあることや、やりたいことを<br>みんなでシェアして取り組める！</p>
            </div>
            <div class="text pc">
              <p>Tentoとは学生のみが利用する学生掲示板サイトです。<br>あなたの興味のあることや、やりたいことをみんなでシェアして取り組める！</p>
            </div>
            <div class="newaccount">
              <nuxt-link to='/user/create' class='btn_priority'>
                はじめる
              </nuxt-link>
            </div>
          </div>
        </div>
        <div class="background">
          <div class="step">
            <h2>How to use</h2>
            <h3>サービスの流れ</h3>
            <div class="item">
              <div class="num md">
                <p>Step 01</p>
              </div>
              <div class="img md">
                <img src="~/static/-mypage.png" alt="">
              </div>
              <div class="text">
                <div class="num pc">
                  <p><span>St</span>ep 01</p>
                </div>
                <div class="text_content">
                  <h3>プロフィールを書こう</h3>
                  <p>プロフィールを充実させて<br>あなたの好きなことを<br>アピールしましょう！</p>
                </div>
              </div>
              <div class="img pc">
                <img src="~/static/-mypage.png" alt="">
              </div>
            </div>
            <div class="item">
              <div class="num md">
                <p>Step 02</p>
              </div>
              <div class="img md">
                <img src="~/static/-create.png" alt="">
              </div>
              <div class="img pc">
                <img src="~/static/-create.png" alt="">
              </div>
              <div class="text">
                <div class="num pc">
                  <p><span>St</span>ep 02</p>
                </div>
                <div class="text_content">
                  <h3>Campを投稿しよう</h3>
                  <div class="pc">
                    <p>あなたのやりたいこと、作ってみたいものを<br>Campにまとめて公開しよう！</p>
                  </div>
                  <div class="md">
                    <p>あなたのやりたいこと、<br>作ってみたいものを<br>Campにまとめて公開しよう！</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="item">
              <div class="num md">
                <p>Step 03</p>
              </div>
              <div class="img md">
                <img src="~/static/-top.png" alt="">
              </div>
              <div class="text">
                <div class="num pc">
                  <p><span>St</span>ep 03</p>
                </div>
                <div class="text_content">
                  <h3>みんなに公開しよう！</h3>
                  <p>募集したCampをSNSでお知らせして、<br>参加メンバーを募りましょう！！！</p>
                </div>
              </div>
              <div class="img pc">
                <img src="~/static/-top.png" alt="">
              </div>
            </div>
          </div>
        </div>
        <div class="camp pc">
          <card :projects="allProjects" title="まずはCampをのぞいてみよう"/>
        </div>
        <div class="background bottom_md">
          <div class="wrapper_pc">
            <div class="bottom_cta">
              <div class="text pc">
                <h4>学生による学生のための学生掲示板</h4>
              </div>
              <div class="text md">
                <h4>学生による学生のための<br>学生掲示板サービス</h4>
              </div>
              <div class="img">
                <img src="~/static/logo_w.png" alt="">
              </div>
              <div class="link-cover">
                <nuxt-link to='/user/create' class="btn_priority">はじめよう</nuxt-link>
              </div>
            </div>
            <img src="~/static/Minimalist-Showcase-Project-Presentation.png" alt="" class="pc">
          </div>
        </div>
      </div>

    </div>
    <Footer />
  </section>
</template>

<script>

import card from '~/components/card.vue';
import Header from '~/layouts/Header.vue';
import Footer from '~/layouts/Footer.vue';
import allProjectsGql from '~/graphql/query/allProjects.gql'

export default {
  middleware: 'noauthenticated',
  components: {
    card,
    Header,
    Footer,
  },
  asyncData (context) {
    return context.app.apolloProvider.defaultClient.query({
      query: allProjectsGql,
      variables: {
        page_size: 3,
        endCursor: "",
      }
      }).then(({ data }) => {
          // do what you want with data
          return {
            swiperProjects: data.allProjects.edges.slice(3),
            allProjects: data.allProjects.edges,
            endCursor: data.allProjects.pageInfo.endCursor
            }
        })
  },
  methods: {
    readmore: function() {
      this.$apollo.query({
      query: allProjectsGql,
      variables: {
        page_size: 6,
        endCursor: this.endCursor,
      }
      }).then(({ data }) => {
          // do what you want with data
          data.allProjects.edges.forEach((project) => {
            this.allProjects.push(project)
          })
          this.endCursor = data.allProjects.pageInfo.endCursor
        })
    }
  }
}
</script>

<style lang='scss'>
@import '~/assets/style/base.scss';
@import '~/assets/style/btn.scss';

@media (min-width:840px) {

#lp {
  .md {
    display: none;
  }
  .main {
    p {
      font-size: 16px;
      text-align: center;
      line-height: 1.8;
    }
    .background {
      padding:4rem 30px;
      background-color: #fff;
    }
    .wrapper{
      border-bottom: $border01;
    }
    .eyecatch {
      max-width: 840px;
      margin: 0 auto;
      padding: 0 30px;
      align-items: center;
      .img {
        width: 70%;
        margin: 0 auto;
        img {
          width: 100%;
        }
      }
      .text {
        .catchprase {
          margin-bottom: 2.75rem;
          text-align: center;
          h1 {
            font-size: 2rem;
            line-height: 1.4;
            span {
              background: linear-gradient(transparent 70%, #00A496 70%);
            }
          }
          p {
            font-size: 1rem;
            font-weight: bold;
            color: $black02;
          }
        }
        p{
          margin: 2.5rem 0;
        }
      }
      .newaccount{
        padding-bottom: 1rem;

        a{
          display: block;
          margin: 0 auto;
          text-align: center;
          font-weight: bold;
        }
      }
    }
    .step {
      max-width: 740px;
      margin: 0 auto;
      h2 {
        font-size: 2rem;
        text-align: center;
        letter-spacing: 3px;
        margin-top: 1rem;
      }
      h3{
        font-size: 1rem;
        color: $black02;
        margin-bottom: 5rem;
        text-align: center;
      }
      .item {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 5rem;
        .img {
          width: 45%;
          img {
            width: 100%;
            border: 5px solid $backround_color02;
            border-radius: 50%;
          }
        }
        .text {
          .num {
            color: $black01;
            margin-bottom: 3.25rem;
            letter-spacing: 4px;
            p {
              font-size: 3rem;
              font-weight: bold;
              display: inline-block;
              span{
                border-bottom: 6px solid $main_color;
              }
            }
          }
          &_content {
            h3 {
              margin-bottom: 0.5rem;
              font-size: 1.5rem;
              font-weight: normal;
              color: $black01;
              text-align: left;

            }
            p {
              font-size: 1rem;
              text-align: left;
            }
          }
        }
      }
    }
    .camp {
      padding: 5rem 0;
      h1{
        margin-bottom: 5rem;
      }
      .nav{
        margin: 0 auto;
      }
    }
    .wrapper_pc{
      max-width: 840px;
      padding: 0 30px;
      display: flex;
      align-items: center;
      text-align: center;
      justify-content: center;
      margin: 1rem auto;
      .bottom_cta {
        margin-right: 1.5rem;
        display: inline-block;
        /* text-align: center; */
        .img {
          width: 180px;
          margin: 0 0 1rem;
          img {
            width: 100%;
          }
        }
        h4 {
          font-size: 0.875rem;
          margin-bottom: 1rem;
          font-weight: normal;
        }
        .link-cover {
          text-align: center;
          a {
            font-weight: bold;
          }
        }
      }
      img{
        width: 40%;
      }
    }
  }
}
}

@media screen and (min-width: 0px) and (max-width: 840px) {
  #lp {
    .pc {
      display: none;
    }
    .main {
      p {
        font-size: 14px;
        line-height: 1.8;
      }
      .background {
        padding:4rem 15px;
        background-color: #fff;
      }
      .wrapper{
        width: 100%;
        padding-top: 0;
        height: calc(100vh - 67.4px);
        display: flex;
        align-items: center;
        justify-content: center;
        border-bottom: $border01;
      }
      .eyecatch {
        max-width: 840px;
        margin: 0 auto;
        padding: 0 15px;
        align-items: center;
        .img {
          margin-left: auto;
          width: 100%;
          text-align: center;
          p {
            margin-top: 1rem;
          }
          img {
            width: 70%;
          }
        }
        .text {
          text-align: center;
          margin: 1.25rem 0 1.625rem;

          .catchprase {
            margin-bottom: 1.5rem;
            h1 {
              text-align: center;
              font-size: 1.125rem;
              line-height: 1.4;
              span {
                background: linear-gradient(transparent 70%, #00A496 70%);
              }
            }
            p {
              font-size: 1rem;
              font-weight: bold;
              line-height: 1.8;
              color: $black02;
            }
          }
        }
        .newaccount{
          a{
            display: block;
            margin: 0 auto;
            text-align: center;
            font-weight: bold;
          }
        }
      }
      .step {
        max-width: 740px;
        margin: 0 auto;
        h2 {
          text-align: center;
          font-size: 1.125rem;
          letter-spacing: 3px;
        }
        h3{
          font-size: 0.75rem;
          color: $black02;
          margin-bottom: 5rem;
          text-align: center;
        }
        .item {
          text-align: center;
          margin-bottom: 3.75rem;
          &:last-child {
            margin:0;
          }
          .num {
            text-align: center;
            margin: 0 auto;
            p {
              letter-spacing: 2px;
              font-size: 1.5rem;
              color: $black01;
              font-weight: bold;
              position: relative;
              display: inline-block;
              margin-bottom: 1.5rem;
            }
            p:before {
              content: '';
              position: absolute;
              left: 50%;
              bottom: -2px;/*線の上下位置*/
              display: inline-block;
              width: 2rem;/*線の長さ*/
              height: 5px;/*線の太さ*/
              -moz-transform: translateX(-50%);
              -webkit-transform: translateX(-50%);
              -ms-transform: translateX(-50%);
              transform: translateX(-50%);/*位置調整*/
              background-color: $main_color;/*線の色*/
            }
          }
          .img {
            max-width: 400px;
            margin: 0 auto;
            text-align: center;
            img {
              width: 60%;
              border: 5px solid $backround_color02;
              border-radius: 50%;
            }
          }
          .text {
            text-align: center;
            display: inline-block;
            margin: 0 auto;
            &_content {
              display: block;
              text-align: center;
              margin: 0 auto;
              h3 {
                display: block;
                text-align: left;
                margin-top: 1.5rem;
                font-size: 1rem;
                font-weight: normal;
                color: $black01;
                margin-bottom: 1rem;
              }
              p {
                color: $black01;
                text-align: left;
                display: inline-block;
              }
            }
          }
        }
      }
      .bottom_md{
        background-color:$backround_color01;
      }
      .bottom_cta {
        max-width: 840px;
        margin:0 auto;
        text-align: center;
        .img {
          width: 140px;
          margin: 0 auto;
          img {
            width: 100%;
            margin: 1rem 0;
          }
        }
        h4 {
          font-weight: bold;
          font-size: 1rem;
          line-height: 1.8;
          letter-spacing: 1px;
        }
        .btn_priority {
          margin: 0 auto;
        }
        .link-cover{
          a{
            font-weight: bold;
          }
        }
      }
    }
  }
}

@media screen and (min-width: 0px) and (max-width: 500px) {

}
</style>
<!-- <template>
  <section class="container">
    <Header />
    <link href="https://fonts.googleapis.com/css?family=Noto+Sans+JP|Rubik" rel="stylesheet">
    <div id="lp">
      <div class="main">
        <div class="background">
          <div class="eyecatch">
            <div class="text md">
              <div class="catchprase">
                <h1 class="first"><span>好き</span>で、組み立てる</h1>
                <h1 class="third">新しい居場所</h1>
              </div>
            </div>

            <div class="text pc">
              <div class="catchprase">
                <h1 class="first"><span>好き</span>で、</h1>
                <h1 class="second">組み立てる</h1>
                <h1 class="third">新しい居場所</h1>
                <p>学生による、学生のための、学生交流サイト</p>
              </div>
              <div class="newaccount">
                <nuxt-link to='/user/create' class='btn_priority'>
                  新規アカウント作成
                </nuxt-link>
              </div>
            </div>
            <div class="img">
              <img src="~/static/eyecatch-min.png" alt="">
              <p class="md">Tentoとは学生の利用する学生求人サイトです。<br>あなたの興味のあることや、やりたいことをみんなでシェアして取り組める!<br>イベント開催告知から開発メンバー募集までなんでもあり！</p>
            </div>
          </div>
        </div>
        <div class="feature">
          <div class="text pc">
            <h2>Tentoとは？</h2>
            <p>Tentoとは学生のみが利用する学生求人サイトです。<br>あなたの興味のあるこや、やりたいことをみんなでシェアして取り組める!<br>イベント開催告知から開発メンバー募集までなんでもあり！</p>
          </div>
          <div class="text md">
            <h2>Tento feature</h2>
          </div>
          <div class="feature_content">
            <div class="feature_content_item item01">
              <div class="img">
                <img src="~/static/feature01-min.png" alt="">
              </div>
              <h3>好みの募集がすぐ見つかる</h3>
              <p>スキルや人気のCampが一覧から<br class='sp'/>すぐ見つけられます。</p>
            </div>
            <div class="feature_content_item item02">
              <div class="img">
                <img src="~/static/feature02-min.png" alt="">
              </div>
              <h3>必要なスキルを掲載</h3>
              <p>キャンプで求められている<br class='sp'/>担当、役割の指標となります。</p>
            </div>
            <div class="feature_content_item item03">
              <div class="img">
                <img src="~/static/feature03-min.png" alt="">
              </div>
              <h3>参加後の連絡を楽に</h3>
              <p>Camp内にメッセージを設けることで<br class='sp'/>のちの連絡を面倒を軽減しました。</p>
            </div>
          </div>
        </div>
        <div class="background">

          <div class="step">
            <h2>How to use</h2>
            <div class="item">
              <div class="num md">
                <p>1</p>
              </div>
              <div class="img">
                <img src="~/static/flow01-min.png" alt="">
              </div>
              <div class="text">
                <div class="num pc">
                  <p>1</p>
                </div>
                <div class="text_content">
                  <h3>Write a profile</h3>
                  <p>プロフィールを充実させて<br>好きなことをアピールしましょう！</p>
                </div>
              </div>
            </div>

            <div class="deco pc">
              <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="#1f1f1f" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><path d="M17 7l-9.2 9.2M7 7v10h10"/></svg>
            </div>

            <div class="item">
              <div class="num md">
                <p>2</p>
              </div>
              <div class="img md">
                <img src="~/static/flow02-min.png" alt="">
              </div>
              <div class="text">
                <div class="num pc">
                  <p>2</p>
                </div>
                <div class="text_content">
                  <h3>Make a camp</h3>
                  <p>あなたのやりたいことを<br>Campにまとめてみんなに公開しましょう。</p>
                </div>
              </div>
              <div class="img pc">
                <img src="~/static/flow02-min.png" alt="">
              </div>
            </div>

            <div class="deco pc">
              <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="#1f1f1f" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><path d="M7 7l9.2 9.2M17 7v10H7"/></svg>
            </div>

            <div class="item">
              <div class="num md">
                <p>3</p>
              </div>
              <div class="img">
                <img src="~/static/flow03-min.png" alt="">
              </div>
              <div class="text">
                <div class="num pc">
                  <p>3</p>
                </div>
                <div class="text_content">
                  <h3>Inform your camp</h3>
                  <p>募集したキャンプをみんなにお知らせして,<br>好きなことを好きなだけやりましょう！</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="camp">
          <card :projects="allProjects" title="New Camp"/>
        </div>
        <div class="background">
          <div class="bottom_cta">
            <div class="img">
              <img src="~/static/logo_w.png" alt="">
            </div>
            <div class="text">
              <h4>集まろう！<br>学生の新しいコミュニティー</h4>
              <div class="link-cover">
                <nuxt-link to='/user/create' class="btn_priority">さあ始めよう！</nuxt-link>
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>
    <Footer />
  </section>
</template>

<script>

import card from '~/components/card.vue';
import Header from '~/layouts/Header.vue';
import Footer from '~/layouts/Footer.vue';
import allProjectsGql from '~/graphql/query/allProjects.gql'

export default {
  middleware: 'noauthenticated',
  components: {
    card,
    Header,
    Footer,
  },
  asyncData (context) {
    return context.app.apolloProvider.defaultClient.query({
      query: allProjectsGql,
      variables: {
        page_size: 3,
        endCursor: "",
      }
      }).then(({ data }) => {
          // do what you want with data
          return {
            swiperProjects: data.allProjects.edges.slice(3),
            allProjects: data.allProjects.edges,
            endCursor: data.allProjects.pageInfo.endCursor
            }
        })
  },
  methods: {
    readmore: function() {
      this.$apollo.query({
      query: allProjectsGql,
      variables: {
        page_size: 6,
        endCursor: this.endCursor,
      }
      }).then(({ data }) => {
          // do what you want with data
          data.allProjects.edges.forEach((project) => {
            this.allProjects.push(project)
          })
          this.endCursor = data.allProjects.pageInfo.endCursor
        })
    }
  }
}
</script>

<style lang='scss'>
@import '~/assets/style/base.scss';
@import '~/assets/style/btn.scss';

@media (min-width:840px) {

#lp {
  .md {
    display: none;
  }
  .main {
    p {
      font-size: 14px;
    }
    .background {
      padding:5rem 30px;
      background-color: #fff;
    }
    .eyecatch {
      display: flex;
      max-width: 840px;
      margin: 0 auto;
      padding: 0 30px;
      align-items: center;
      .img {
        margin-left: auto;
        width: 50%;
        img {
          width: 100%;
        }
      }
      .text {
        .catchprase {
          margin-bottom: 2rem;
          h1 {
            font-size: 3rem;
            line-height: 1.4;
            span {
              background: linear-gradient(transparent 70%, #00A496 70%);
            }
          }
          p {
            font-size: 1rem;
            font-weight: bold;
            color: $black02;
          }
        }
      }
    }
    .feature {
      margin: 0 auto;
      max-width: 840px;
      padding: 5rem 30px;
      .text {
        text-align: center;
        margin-bottom: 3rem;
        h2 {
          margin-bottom: 1rem;
          font-size: 2rem;
        }
        p {
          font-weight: bold;
        }
      }
      &_content {
        display: flex;
        justify-content: space-between;
        .item01 {
          img {
            width: 80%;
          }
        }
        .item02 {
          img {
            width: 80%;
          }
        }
        .item03 {
          position: relative;
          margin: 0;
          &:before {
            position:absolute;
            content: "comming soon...";
            width: 100%;
            height: 100%;
            background-color:rgba(0,0,0,0.7);
            top: 0;
            left: 0;
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.2rem;
            font-weight: bold;
            color: #fff;
          }
          img {
            width: 65%;
          }
        }
        &_item {
          background-color: #fff;
          border-radius: 12px;
          box-shadow: $box_shadow01;
          padding: 1rem;
          text-align: center;
          width: 240px;
          margin-right: 0.5rem;
          .img {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 170px;
          }
          img {
            width: 100%;
          }
          h3 {
            font-size: 16px;
            margin-top: 1.2rem;
          }
        }
      }
    }
    .step {
      max-width: 740px;
      margin: 0 auto;
      h2 {
        text-align: center;
        margin-bottom: 5rem;
        font-size: 2rem;
      }
      .deco {
        text-align: center;
        margin: 1rem 0;
      }
      .item {
        display: flex;
        align-items: center;
        justify-content: space-between;
        .img {
          width: 45%;
          img {
            width: 100%;
          }
        }
        .text {
          display: flex;
          align-items: center;
          .num {
            color: $main_color;
            margin-right: 1rem;
            p {
              font-size: 6rem;
              font-weight: bold;
            }
          }
          &_content {
            h3 {
              margin-bottom: 0.5rem;
              font-size: 1.5rem;
            }
            p {
              font-weight: bold;
            }
          }
        }
      }
    }
    .camp {
      padding: 5rem 0;
    }
    .bottom_cta {
      max-width: 840px;
      margin:0 auto;
      text-align: center;
      .img {
        width: 180px;
        margin: 0 auto 1rem;
        img {
          width: 100%;
        }
      }
      h4 {
        font-weight: bold;
        font-size: 1.6rem;
        margin-bottom: 1rem;
      }
      .link-cover {
        text-align: center;
        a {
          margin: 0 auto;
        }
      }
    }
  }
}
}

@media screen and (min-width: 0px) and (max-width: 840px) {
  #lp {
    .pc {
      display: none;
    }
    .main {
      p {
        font-size: 14px;
      }
      .background {
        padding:5rem 15px;
        background-color: #fff;
      }
      .eyecatch {
        max-width: 840px;
        margin: 0 auto;
        padding: 0 15px;
        align-items: center;
        .img {
          margin-left: auto;
          width: 100%;
          text-align: center;
          p {
            margin-top: 1rem;
            text-align: left;
          }
          img {
            width: 70%;
          }
        }
        .text {
          .catchprase {
            margin-bottom: 2rem;
            h1 {
              text-align: center;
              font-size: 2rem;
              line-height: 1.4;
              span {
                background: linear-gradient(transparent 70%, #00A496 70%);
              }
            }
            p {
              font-size: 1rem;
              font-weight: bold;
              color: $black02;
            }
          }
        }
      }
      .feature {
        margin: 0 auto;
        max-width: 840px;
        padding: 5rem 40px;
        .text {
          text-align: center;
          margin-bottom: 3rem;
          h2 {
            margin-bottom: 1rem;
            font-size: 2rem;
          }
          p {
            font-weight: bold;
          }
        }
        &_content {
          .item01 {
            img {
              width: 70%;
            }
          }
          .item02 {
            img {
              width: 90%;
            }
          }
          .item03 {
            position: relative;
            &:before {
              position:absolute;
              content: "comming soon...";
              width: 100%;
              height: 100%;
              background-color:rgba(0,0,0,0.7);
              top: 0;
              left: 0;
              border-radius: 12px;
              display: flex;
              align-items: center;
              justify-content: center;
              font-size: 1.2rem;
              font-weight: bold;
              color: #fff;
            }
            img {
              width: 50%;
            }
          }
          &_item {
            background-color: #fff;
            border-radius: 12px;
            box-shadow: $box_shadow01;
            padding: 1rem;
            text-align: center;
            max-width: 400px;
            margin: 0 auto;
            margin-bottom: 2rem;
            .img {
              display: flex;
              align-items: center;
              justify-content: center;
              height: 200px;
            }
            img {
              width: 50%;
            }
            h3 {
              font-size: 16px;
              margin-top: 0rem;
              margin-bottom: 0.5rem;
            }
          }
        }
      }
      .step {
        max-width: 740px;
        margin: 0 auto;
        h2 {
          text-align: center;
          margin-bottom: 3rem;
          font-size: 2rem;
        }
        .deco {
          text-align: center;
          margin: 1rem 0;
        }
        .item {
          margin-bottom: 6rem;
          &:last-child {
            margin:0;
          }
          .num {
            text-align: center;
            p {
              font-size: 5rem;
              color: $main_color;
              font-weight: bold;
            }
          }
          .img {
            max-width: 400px;
            margin: 0 auto;
            text-align: center;
            img {
              width: 60%;
            }
          }
          .text {
            margin-top: 2rem;
            text-align: center;
            &_content {
              h3 {
                margin-bottom: 0.5rem;
                font-size: 1.5rem;
              }
              p {
                font-weight: bold;
              }
            }
          }
        }
      }
      .camp {
        padding: 5rem 0;
      }
      .bottom_cta {
        max-width: 840px;
        margin:0 auto;
        text-align: center;
        .img {
          width: 140px;
          margin: 0 auto 1rem;
          img {
            width: 100%;
          }
        }
        h4 {
          font-weight: bold;
          font-size: 1rem;
          margin-bottom: 1rem;
        }
        .btn_priority {
          margin: 0 auto;
        }
      }
    }
  }
}

@media screen and (min-width: 0px) and (max-width: 500px) {

}
</style> -->
