<template>
  <section>
    <Header />
    <div>
      <CampBody />
      <chat />
      <profile />
    </div>
    <Footer />
  </section>
</template>

<script>
import Header from '~/layouts/Header.vue';
import Footer from '~/layouts/Footer.vue';
import slide from '~/components/slide.vue';
import CampBody from '~/components/camp-body.vue';
import chat from '~/components/chat.vue';
import profile from '~/components/profile.vue';

export default {
  components: {
    Header,
    Footer,
    CampBody,
    chat,
    profile,
  }
}
</script>

<style lang='scss'>
@import '~/assets/style/base.scss';
@import '~/assets/style/btn.scss';


</style>
