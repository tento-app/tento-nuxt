<template>
  <section>
    <Header />
    <div class="main">
      <slide :projects="swiperProjects"/>
      <card :projects="allProjects"/>
      <cardLoader @readmore="readmore" />
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
  asyncData (context) {
    return context.app.apolloProvider.defaultClient.query({
      query: allProjectsGql,
      variables: {
        page_size: 6,
        endCursor: "",
      }
      }).then(({ data }) => {
          // do what you want with data
          return {
            swiperProjects: data.allProjects.edges.slice(3),
            allProjects: data.allProjects.edges,
            endCursor: data.allProjects.pageInfo.endCursor
            }
        })
  },
  methods: {
    readmore: function() {
      this.$apollo.query({
      query: allProjectsGql,
      variables: {
        page_size: 6,
        endCursor: this.endCursor,
      }
      }).then(({ data }) => {
          // do what you want with data
          data.allProjects.edges.forEach((project) => {
            this.allProjects.push(project)
          })
          this.endCursor = data.allProjects.pageInfo.endCursor
        })
    }
  }
}
</script>

<style lang='scss'>
@import '~/assets/style/base.scss';
@import '~/assets/style/btn.scss';


</style>
