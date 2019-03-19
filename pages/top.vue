<template>
  <section>
    <Header />
    <div class="main">
      <slide />
      <card :projects="allProjects.edges"/>
      <cardLoader />
    </div>
    <Footer />
  </section>
</template>

<script>
import allProjectsGql from '~/graphql/query/allProjects.gql'

import cardLoader from '~/components/card_loader.vue';
import slide from '~/components/slide.vue';
import card from '~/components/card.vue';
import Header from '~/layouts/Header.vue';
import Footer from '~/layouts/Footer.vue';

export default {
  components: {
    card,
    cardLoader,
    slide,
    Header,
    Footer,
  },
  async asyncData({ payload, params }) {
    app.apolloProvider.defaultClient.query({
       ...
    }).then(({ data }) => data && data.posts)
  },
}
</script>

<style lang='scss'>
@import '~/assets/style/base.scss';
@import '~/assets/style/btn.scss';


</style>
