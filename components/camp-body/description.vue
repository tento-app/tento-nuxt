<template lang="html">
  <div class="camp_body_text_describe">
    <h3 class="title">キャンププラン</h3>
    <p v-html="text"></p>
  </div>
</template>

<script>
export default {
  props : {
    text: String,
  }
}
</script>

<style lang="scss">
@import '~/assets/style/_color.scss';
@media (min-width:500px) {
  .camp_body_text_describe{
    margin: 2rem auto 3rem;
    max-width: 840px;
    padding: 0 30px;
    .title {
      color: $black02;
      margin-bottom: 1rem;
    }
    > p{
      line-height: 1.4;
      word-break: break-all;
      white-space: pre-line;
      > p {
        line-height: 1.8
      }
      h1 {
        font-size: 2rem;
        margin: 1.2rem 0;
      }
      h2 {
        font-size: 1.8rem;
        margin: 1.2rem 0;
      }
      h3 {
        font-size: 1.6rem;
        margin: 1.2rem 0;
      }
      h4 {
        font-size: 1.4rem;
        margin: 1.2rem 0;
      }
      h5 {
        font-size: 1.2rem;
        margin: 1.2rem 0;
      }
    }
  }
}

@media screen and (min-width: 0px) and (max-width: 500px) {
  .camp_body_text_describe{
    margin: 2rem auto 3rem;
    max-width: 840px;
    padding: 0 15px;
    .title {
      color: $black02;
      font-size: 1rem;
      margin-bottom: 1rem;
    }

    > p{
      line-height: 1.4;
      word-break: break-all;
      white-space: pre-line;
      > p {
        line-height: 1.8
      }
      h1 {
        font-size: 1.5rem;
      }
      h2 {
        font-size: 1.4rem;
      }
      h3 {
        font-size: 1.3rem;
      }
      h4 {
        font-size: 1.2rem;
      }
      h5 {
        font-size: 1.1rem;
      }
    }
  }
}
</style>
