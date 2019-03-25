<template lang="html">
  <section id="account">
    <Header />
    <div class="main">
      <div class="account_edit">
        <Card title="Stored Camp"/>
      </div>
    </div>
    <Footer />
  </section>
</template>

<script>
import Card from '~/components/card.vue';
import Header from '~/layouts/Header.vue';
import Footer from '~/layouts/Footer.vue';

export default {
  components: {
    Card,
    Header,
    Footer
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/style/base.scss';
@import '~/assets/style/btn.scss';

.main {
  padding: 0 0 5rem;
}


</style>
