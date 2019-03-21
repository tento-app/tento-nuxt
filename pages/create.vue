<template lang="html">
  <div class="">
      <Header />
      <div class="create">

      <div class="create_title">
        <div class="create_title_content">
          <p>長期募集(開発メンバー、サークルメンバー募集など)</p>
          <div class="create_title_content_input">
            <input type="text" name="" value="" placeholder="タイトルを記入してください">
          </div>

        </div>
      </div>
      <div class="create_body">
        <div class="create_body_content">
          <!-- <textarea name="name" rows="8" cols="80" placeholder="本文を記入してください"></textarea> -->
          <medium-editor :content='content' :options='options' />
        </div>
        <skill />
      </div>
    </div>
  </div>
</template>

<script>
import Header from '~/layouts/Header.vue';
import skill from '~/components/skill.vue';

export default {
  components: {
    Header,
    skill
  },
  // fetch ({ store, redirect }) {
  //   if (!store.state.user.username) {
  //     return redirect('/login')
  //   }
  // },
  data() {
        return {
            content: "",
            options: {
              placeholder: {
                text: "Mediumとエディターの使い方は同じです！"
              },
              uploadUrl: "https://imgur.com/upload"
            }
        }
    }
}
</script>

<style lang="scss">
@import '~/assets/style/_color.scss';
@import '~/assets/style/base.scss';
@import '~/assets/style/btn.scss';

  .create{
    &_title{
      background-color: $sub_color;
      &_content{
        max-width: 840px;
        margin: 0 auto;
        padding: 5rem 0;
        color: #fff;
        p{
          margin-bottom: 1.5rem;
          font-size: 14px;
          font-weight: bold;
        }
        &_input{

          input{
            border: none;
            background-color: rgba(0,0,0,0);
            outline: 0;
            box-sizing: border-box;
            width: 100%;
            color: #fff;
            font-size: 32px;
            font-weight: bold;
            &::placeholder{
              color: rgba(255,255,255,0.4);
            }
          }
        }
      }
    }
    &_body{
      &_content{
        max-width: 840px;
        margin: 2rem auto;
        textarea{
          width: 100%;
          box-sizing: border-box;
          background-color: rgba(0,0,0,0);
          outline: 0;
          line-height: 2rem;
          font-size: 16px;
          border: none;
        }
      }
    }
  }
</style>
