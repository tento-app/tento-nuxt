<template id="">
    <div class="content camp_body">
      <div class="camp_body_eyecatch background_img_03"></div>
      <div class="camp_body_text">
        <!-- <p class="camp_body_text_tag develop">開発</p> -->
        <h1 class="camp_body_text_title">進行中のプロジェクトデザインやってくれる方！</h1>
        <user />
        <div class="camp_body_text_describe">
          <p>テレビのCM意味あるのかな？と感じたことがある人は多いと思います。
            あの広告方法は、商品を認知してもらうこと、に関してはすごい力を持っています。
            しかし、実際にその広告を見たからと行って、消費行動に移るかというと、わからないところです。
            また、様々なネットショッピングサイトが増えたことで、家にいるだけで商品が買える。
            さらに自分に合っている商品をオススメに提示されるので、
            ネットショッピングはさらに成長していくと考えられます。
            私が考えるSNSでは、そのようなネットショッピングでの消費(ネットで広告を見る→ネットで購入)ではなく、
            広告を見て、実際に足を運ぶという従来の消費を増やしていこう、というものです。
            テレビのCMに取って代わり、一つの携帯で広告をする。
            しかし、ネットショッピングとは別の業界。 独創性に溢れた方にご協力お願いしたいと考えております。
          </p>
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
  .camp_body{
    &_eyecatch{
      height: 280px;
      max-width: 840px;
      border-radius: 12px;
      position: relative;
      width: 100%;
      margin: 60px auto 0;
      box-shadow: $box_shadow04;
    }
    &_text{
      margin: 0 auto;
      padding: 40px 40px;
      max-width: 840px;
      &_tag{
        width: 80px;
        font-size: 14px;
        font-weight: bold;
        padding: 4px;
        text-align: center;
        min-width: 40px;
        color: #fff;
        &.event {
            background-color: #007D98;
        }
        &.develop {
            background-color: #F49E1B;
        }
        &.join {
            background-color: #FF4B4B;
        }
      }
      h1{
        margin-top: 10px;
        margin-bottom: 20px;
        color: $black01;
      }
      &_describe{
        margin-top: 30px;
        p{
          line-height: 260%;
          word-break: keep-all;
          white-space: pre-line;
        }
      }
    }
  }
}

@media screen and (min-width: 500px) and (max-width: 840px) {
  .camp_body{
    max-width: 840px;
    padding: 40px 30px;
    &_eyecatch{
      height: 240px;
      max-width: 840px;
      border-radius: 12px;
      position: relative;
      width: 100%;
      margin: 0px auto 0;
      box-shadow: $box_shadow04;
    }
    &_text{
      margin: 0 auto;
      padding: 40px 20px;
      max-width: 840px;
      &_tag{
        width: 80px;
        font-size: 14px;
        font-weight: bold;
        padding: 4px;
        text-align: center;
        min-width: 40px;
        color: #fff;
        &.event {
            background-color: #007D98;
        }
        &.develop {
            background-color: #F49E1B;
        }
        &.join {
            background-color: #FF4B4B;
        }
      }
      h1{
        margin-top: 10px;
        margin-bottom: 20px;
        color: $black01;
      }
      &_describe{
        margin-top: 30px;
        p{
          line-height: 260%;
          white-space: pre-line;
        }
      }
    }
  }
}

@media screen and (min-width: 0px) and (max-width: 500px) {
  .camp_body{
    max-width: 840px;
    padding: 40px 10px;
    &_eyecatch{
      height: 240px;
      max-width: 840px;
      border-radius: 12px;
      position: relative;
      width: 100%;
      margin: 0px auto 0;
      box-shadow: $box_shadow04;
    }
    &_text{
      margin: 0 auto;
      padding: 40px 20px;
      max-width: 840px;
      &_tag{
        width: 80px;
        font-size: 14px;
        font-weight: bold;
        padding: 4px;
        text-align: center;
        min-width: 40px;
        color: #fff;
        &.event {
            background-color: #007D98;
        }
        &.develop {
            background-color: #F49E1B;
        }
        &.join {
            background-color: #FF4B4B;
        }
      }
      h1{
        margin-top: 10px;
        margin-bottom: 20px;
        color: $black01;
      }
      &_describe{
        margin-top: 30px;
        p{
          line-height: 260%;
          white-space: pre-line;
        }
      }
    }
  }
}

</style>
