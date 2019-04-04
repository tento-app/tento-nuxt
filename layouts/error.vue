<template>
  <section>
    <Header />
    <link href="https://fonts.googleapis.com/css?family=Noto+Sans+JP|Rubik" rel="stylesheet">
      <div class="container">
    <div class="not_found" v-if="error.statusCode === 404">
      <div class="img">
        <img src="../static/404_01.svg" alt="">
      </div>
      <div class="text">
        <h1>404 Page not found</h1>
        <p>おっと！該当するページが見つからなかった</p>
        <p>リロードするとなおるかもなぁ...</p>
        <a @click="reload">リロードする</a>
      </div>
    </div>
    <div class="" v-else>
      <h1>An error occurred</h1>
      <p>{{ error.message }}</p>
    </div>
    <a href="/" class="btn_priority">Home page</a>
  </div>
    <!-- <Footer /> -->
  </section>
</template>
<script>
import Header from '~/layouts/Header.vue';
import Footer from '~/layouts/Footer.vue';

export default {
  middleware: 'noauthenticated',
  components: {
    Header,
    Footer,
  },
  props:['error'],
  methods: {
    reload: function() {
      this.$router.go(this.$route.fullPath)
    }
  }
}
</script>
<style lang='scss' scoped>
  .container {
    text-align: center;
    max-width: 840px;
    margin: 0 auto;
    padding: 4rem 30px 0;
    .text {
      h1 {
        margin: 1rem 0;
      }
      p {
        &:last-child {
          font-size:12px;
        }
      }
    }
    .img {
      max-width: 350px;
      padding:0 10px;
      margin: 0 auto;
      img {
        width: 100%;
      }
    }
    .btn_priority {
      margin: 1.5rem auto;
    }
  }
</style>
