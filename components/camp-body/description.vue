<template lang="html">
  <div class="camp_body_text_describe">
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
.camp_body_text_describe{
  margin: 0 auto;
  margin-top: 2rem;
  max-width: 840px;
  padding: 0 30px;

  > p{
    line-height: 3;
    word-break: break-all;
    white-space: pre-line;
    > p {
      line-height: 1.8
    }
    h1 {
      font-size: 2rem;
    }
    h2 {
      font-size: 1.8rem;
    }
    h3 {
      font-size: 1.6rem;
    }
    h4 {
      font-size: 1.4rem;
    }
    h5 {
      font-size: 1.2rem;
    }
  }
}
</style>
