<template>
  <section>
    <link href="https://fonts.googleapis.com/css?family=Noto+Sans+JP|Rubik" rel="stylesheet">
    <Header />
    <div class="main">
      <slide :projects="entry.data.allProjects.edges.slice(3)"/>
      <card :projects="entry.data.allProjects.edges" title="New Camp"/>
      <cardLoader @readmore="readmore" />
    </div>
    <Footer />
  </section>
</template>

<script>
import allProjectsGql from '~/graphql/query/allProjects.gql'
import viewerGql from '~/graphql/query/viewer.gql'

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
  async fetch (context) {
    const token = context.app.$cookies.get('cookie-token')
    context.store.commit('user/setToken', token)
    context.app.apolloProvider.defaultClient.query({
        query: viewerGql,
        variables: {
            token: token
        }
    }).then((result) => {
        context.store.commit('user/setUsername', result.data.viewer.username)
        context.store.commit('user/setLogo', result.data.viewer.logo)
    }).catch((error) => {
    // errorの場合に実行する処理
    console.log("失敗")
    })
  },
  apollo: {
    entry: {
      query: allProjectsGql,
      variables: {
        page_size: 6,
        endCursor: "",
      },
      update (data) {
      console.log(data)
      // The returned value will update
      // the vue property 'pingMessage'
      return { data }
    },
      prefetch: true,
    }
  },
  // asyncData (context) {
  //   return context.app.apolloProvider.defaultClient.query({
  //     query: allProjectsGql,
  //     variables: {
  //       page_size: 6,
  //       endCursor: "",
  //     }
  //     }).then(({ data }) => {
  //         // do what you want with data
  //         return {
  //           swiperProjects: data.allProjects.edges.slice(3),
  //           allProjects: data.allProjects.edges,
  //           endCursor: data.allProjects.pageInfo.endCursor
  //           }
  //       })
  // },
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
