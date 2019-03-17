<template id="">
    <div class="content camp_body">
      <div class="camp_body_eyecatch background_img_03"></div>
      <div class="camp_body_text">
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
      <div class="">
        <div class="skill_component">
          <skill />
        </div>
        <div class="profile_component">
          <profile />
        </div>
      </div>
      <div class="join">
        <div class="btn_list">
          <p class="btn_priority ">このキャンプに参加する</p>
          <p class="btn color">リストに保存する<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00A496" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg></p>
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
    skill
  }
}

</script>

<style lang="scss">
@import '~/assets/style/_color.scss';

@media (min-width:840px) {
  .skill_component {
    margin: 3rem 0;
  }
  .profile_component {
    margin: 3rem 0;
  }
  .camp_body{
    padding: 60px 0 0;
    &_eyecatch{
      height: 280px;
      max-width: 840px;
      border-radius: 12px;
      position: relative;
      width: 100%;
      margin: 0px auto 0;
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
  .join {
    display: flex;
    max-width: 840px;
    margin: 2rem auto;
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
  .camp_body{
    max-width: 840px;
    padding: 40px 10px;
    &_eyecatch{
      height: 180px;
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
