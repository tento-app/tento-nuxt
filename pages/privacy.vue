<template id="">
<section>
  <Header />
  <div class="main">
    <link href="https://fonts.googleapis.com/css?family=Noto+Sans+JP|Rubik" rel="stylesheet">
    <div class="wrapper">
      <h1>プライバシーポリシー </h1>
      <div class="introduction">
        <p>
          Tento(以下、当サービス)は、利用者の皆さんの個人情報をお預かりするにあたり、以下のとおり個人情報保護方針を定め、個人情報保護の仕組みを構築します。当サービスは個人情報に関する法令を遵守し、個人情報保護の重要性の認識と取組みを徹底し、個人情報の適切な取扱いと保護を推進致します。</p>
      </div>
      <div class="content">
        <h2>個人情報の取得</h2>
        <p>当サービスは、適正に個人情報を取得いたします。</p>
      </div>
      <div class="content">
        <h2>個人情報の管理</h2>
        <div class="content_detail">
          <p>当サービスは、ご利用者様の個人情報を正確かつ最新の状態に保ち、個人情報への不正なアクセス・紛失・破損・改ざん・漏洩などを防止するために、セキュリティシステムの維持・管理体制の整備・スタッフ教育の徹底等の必要な措置を講じ、安全対策を実施し個人情報の厳重な管理を行います。</p>
        </div>
      </div>
      <div class="content">
        <h2>個人情報の利用目的</h2>
        <div class="content_detail">
          <p>当サービスは、個人情報を以下の目的のために利用いたします。</p>
          <ol>
            <li>当サービスからのご連絡やサービス開始時のご案内</li>
            <li>上記の利用目的に付随する目的</li>
          </ol>
        </div>
      </div>
      <div class="content">
        <h2>個人情報の第三者への開示・提供の禁止</h2>
        <div class="content_detail">
          <p>当サービスは、ご利用者様よりお預かりした個人情報を適切に管理し、次のいずれかに該当する場合を除き、個人情報を第三者に開示いたしません。</p>
          <ol>
            <li>法令に基づく場合</li>
            <li>人の生命、身体または財産の保護のために必要がある場合であって、本人の同意を得ることが困難であるとき</li>
            <li>公衆衛生の向上または児童の健全な育成の推進のために特に必要がある場合であって、本人の同意を得ることが困難であるとき</li>
            <li>国の機関もしくは地方公共団体またはその委託を受けた者が法令の定める事務を遂行することに対して協力する必要がある場合であって、本人の同意を得ることにより当該事務の遂行に支障を及ぼすおそれがあるとき</li>
            <li>予め次の事項を告知あるいは公表をしている場合</li>
          </ol>
        </div>
      </div>
      <div class="content">
        <h2>個人情報の安全管理</h2>
        <div class="content_detail">
          <p>当サービスは、個人情報の漏洩・紛失防止のため、また正確及び安全性確保のために、セキュリティに万全の対策を講じています。</p>
        </div>
      </div>
      <div class="content">
        <h2>ご本人の照会</h2>
        <div class="content_detail">
          <p>ご利用者様がご本人の個人情報の照会・修正・削除などをご希望される場合には、ご本人であることを確認の上、対応させていただきます。</p>
        </div>
      </div>
      <div class="content">
        <h2>法令、規範の遵守と見直し</h2>
        <div class="content_detail">
          <p>当サービスは、保有する個人情報に関して適用される日本の法令を遵守するともに、本ポリシーの内容を適宜見直し、その改善に努めます。</p>
        </div>
      </div>
      <div class="content">
        <h2>当サイトが使用しているアクセス解析ツールについて</h2>
        <div class="content_detail">
          <p>当サイトでは、Googleによるアクセス解析ツール「Googleアナリティクス」を利用しています。 このGoogleアナリティクスはトラフィックデータの収集のためにCookieを使用しています。 このトラフィックデータは匿名で収集されており、個人を特定するものではありません。 この機能はCookieを無効にすることで収集を拒否することが出来ますので、お使いのブラウザの設定をご確認ください。 この規約に関して、詳しくはこちら(<a href="https://www.google.com/analytics/terms/jp.html">https://www.google.com/analytics/terms/jp.html</a>)をご覧ください。</p>
        </div>
      </div>
      <div class="content">
        <h2>お問い合わせ</h2>
        <div class="content_detail">
          <p>当サービスの個人情報の取扱に関するお問い合わせは下記までご連絡ください。</p>
          <p>Mail:tento1001y@gmail.com</p>
        </div>
      </div>
      <div class="conclusion">
        <p>以上</p>
        <div class="conclusion_sub">
          <p>代表者：八重樫建成</p>
          <p>2019年3月21日　作成</p>
        </div>
      </div>
    </div>
  </div>
  <Footer />
</section>
</template>

<script type="text/javascript">
import Header from '~/layouts/Header.vue';
import Footer from '~/layouts/Footer.vue';

export default {
  components: {
    Header,
    Footer
  }
}
</script>

<style media="screen" scoped lang="scss">
@import '~/assets/style/base.scss';
@import '~/assets/style/btn.scss';
@media (min-width:840px) {
    .main {
        max-width: 840px;
        padding: 30px;
        margin: 0 auto;
        .wrapper {
            padding: 18px;
            background: #FFFFFF;
            border: solid 1px #CCCCCC;
            font-size: 14px;
            h1 {
                font-size: 22px;
                border-bottom: solid 1px #CCCCCC;
                padding-bottom: 14px;
            }
            .introduction {
                padding-top: 14px;
            }
            .content {
                padding-top: 20px;
                h2 {
                    font-size: 16px;
                    margin-bottom: 4px;
                }
                &_detail {
                    white-space: pre-line;
                    font-size: 14px;
                }
            }
            .conclusion {
                p {
                    padding-top: 20px;
                }
                p + p {
                  padding: 0px;
                }
            }
        }
    }
}
@media screen and (min-width: 500px) and (max-width: 849px) {
  .main {
    max-width: 840px;
    padding: 30px;
    margin: 0 auto;
    .wrapper {
      padding: 18px;
      background: #FFFFFF;
      border: solid 1px #CCCCCC;
      font-size: 14px;
      h1{
        font-size: 22px;
        border-bottom: solid 1px #CCCCCC;
        padding-bottom: 14px;
      }
      .introduction {
        padding-top: 14px;
      }
      .content {
        padding-top: 20px;
        h2{
          font-size: 16px;
          margin-bottom: 4px;
        }
        &_detail {
          white-space: pre-line;
          font-size: 14px;
        }
      }
    }
    .conclusion{
      p{
        padding-top: 20px;
      }
    }
  }
}
@media screen and (min-width: 0px) and (max-width: 499px){
  .main{
    padding: 30px;
    .wrapper{
      font-size: 14px;
      h1{
        border-bottom: solid 1px #CCCCCC;
        padding-bottom: 8px;
      }
      .introduction{
        padding-top: 8px;
      }
      .content{
        padding-top: 14px;
        h2{
          font-size: 16px;
          margin-bottom: 2px;
        }
      }
      .conclusion{
        p{
          padding-top: 14px;
        }
      }
    }
  }
}
</style>
