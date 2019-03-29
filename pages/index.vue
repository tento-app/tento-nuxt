<template>
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
                <a class="btn_priority">新規アカウント作成</a>
              </div>
            </div>
            <div class="img">
              <img src="~/static/eyecatch-min.png" alt="">
              <p class="md">Tentoとは学生のみが利用する学生求人サイトです。<br>あなたの興味のあることや、やりたいことをみんなでシェアして取り組める!<br>あなたが発信すればかなうアクティブサービス！</p>
            </div>
          </div>
        </div>
        <div class="feature">
          <div class="text pc">
            <h2>Tentoとは？</h2>
            <p>Tentoとは学生のみが利用する学生求人サイトです。<br>あなたの興味のあることや、やりたいことをみんなでシェアして取り組める!<br>あなたが発信すればかなうアクティブサービス！</p>
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
              <p>テキストが入りますテキストが入りますテキストが入ります</p>
            </div>
            <div class="feature_content_item item02">
              <div class="img">
                <img src="~/static/feature02-min.png" alt="">
              </div>
              <h3>必要なスキルを掲載</h3>
              <p>キャンプで求められている担当、役割の指標となります。</p>
            </div>
            <div class="feature_content_item item03">
              <div class="img">
                <img src="~/static/feature03-min.png" alt="">
              </div>
              <h3>参加後の連絡を楽に</h3>
              <p>Camp内にメッセージを設けることでのちの連絡を面倒を軽減しました。</p>
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
              <p class="btn_priority">さあ始めよう</p>
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
    .card {
      margin-bottom: 3rem;
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
          p {
            font-weight: bold;
            margin-top: 1rem;
          }
          img {
            width: 100%;
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
        padding: 5rem 15px;
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
            margin-bottom: 1rem;
            .img {
              display: flex;
              align-items: center;
              justify-content: center;
              height: 220px;
            }
            img {
              width: 50%;
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
              margin-bottom: 1rem;
            }
          }
          .img {
            max-width: 400px;
            margin: 0 auto;
            text-align: center;
            img {
              width: 80%;
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
      .bottom_cta {
        max-width: 840px;
        margin:0 auto;
        padding: 5rem 30px;
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
          font-size: 1.4rem;
          margin-bottom: 1rem;
        }
      }
    }
  }
}

@media screen and (min-width: 0px) and (max-width: 500px) {

}
</style>
