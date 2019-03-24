<template>
  <section class="container">
    <Header />
    <div id="lp">
      <div class="main">
        <div class="background">
          <div class="eyecatch">
            <div class="text">
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
            </div>
          </div>
        </div>
        <div class="feature">
          <div class="text">
            <h2>Tentoとは？</h2>
            <p>Tentoとは学生のみが利用する学生求人サイトです。<br>あなたの興味のあることや、やりたいことをみんなでシェアして取り組める!<br>あなたが発信すればかなうアクティブサービス！</p>
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
              <div class="img">
                <img src="~/static/flow01-min.png" alt="">
              </div>
              <div class="text">
                <div class="num">
                  <p>1</p>
                </div>
                <div class="text_content">
                  <h3>Write a profile</h3>
                  <p>プロフィールを充実させて<br>好きなことをアピールしましょう！</p>
                </div>
              </div>
            </div>
            <div class="item">
              <div class="text">
                <div class="num">
                  <p>2</p>
                </div>
                <div class="text_content">
                  <h3>Make a camp</h3>
                  <p>あなたのやりたいことを<br>Campにまとめてみんなに公開しましょう。</p>
                </div>
              </div>
              <div class="img">
                <img src="~/static/flow02-min.png" alt="">
              </div>
            </div>
            <div class="item">
              <div class="img">
                <img src="~/static/flow03-min.png" alt="">
              </div>
              <div class="text">
                <div class="num">
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

        </div>
        <div class="bottom_cta">
          <div class="img">
            <img src="" alt="">
          </div>
          <div class="text">
            <p>集まろう！学生の新しいコミュニティー</p>
            <p class="btn_priority">さあ始めよう</p>
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

export default {
  components: {
    card,
    Header,
    Footer,
  },
}
</script>

<style lang='scss'>
@import '~/assets/style/base.scss';
@import '~/assets/style/btn.scss';
body {

}

#lp {
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
      padding: 0;
      .img {
        margin-left: auto;
        width: 50%;
        img {
          width: 100%;
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
          margin-bottom: 5rem;
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
      max-width: 840px;
      margin: 0 auto;
      h2 {
        text-align: center;
        margin-bottom: 5rem;
        font-size: 2rem;
      }
      .item {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 5rem;
        .img {
          width: 50%;
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
              margin-bottom: 1rem;
            }
            p {
              font-weight: bold;
            }
          }
        }
      }
    }
  }
}

</style>
