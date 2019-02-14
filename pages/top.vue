<template>
  <section>
    <Header />
    <div>
      <slide />
      <card />
    </div>
    <Footer />
  </section>
</template>

<script>
import slide from '~/components/slide.vue';
import card from '~/components/card.vue';
import Header from '~/layouts/Header.vue';
import Footer from '~/layouts/Footer.vue';

export default {
  components: {
    card,
    slide,
    Header,
    Footer
  }
}
</script>

<style lang='scss'>
@import '~/assets/style/base.scss';
@import '~/assets/style/btn.scss';


</style>
