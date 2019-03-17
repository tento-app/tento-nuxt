<template>
  <section>
    <Header />
    <div class="main">
      <CampBody />
      <div class="">
        <chat />
      </div>
    </div>
    <Footer />
  </section>
</template>

<script>
import Header from '~/layouts/Header.vue';
import Footer from '~/layouts/Footer.vue';
import CampBody from '~/components/camp-body.vue';
import chat from '~/components/chat.vue';


export default {
  components: {
    Header,
    Footer,
    CampBody,
    chat
  }
}
</script>

<style lang='scss' scoped="">
@import '~/assets/style/base.scss';
@import '~/assets/style/btn.scss';
@import '~/assets/style/_color.scss';
.main {
  padding-bottom: 5rem;
  background-color: #fff;
}

</style>
