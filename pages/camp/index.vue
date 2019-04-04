<template>
  <section>
    <link href="https://fonts.googleapis.com/css?family=Noto+Sans+JP|Rubik" rel="stylesheet">
    <Header />
    <div class="main">
        <input v-model="search" placeholder="検索する" type="text" @keyup.enter="say" @keypress="setCanMessageSubmit">
        <card :projects="allProjects"/>
        <cardLoader v-if="endCursor" @readmore="readmore" />
    </div>
    <Footer />
  </section>
</template>

<script>
import searchProjectsGql from '~/graphql/query/searchProjects.gql'

import cardLoader from '~/components/card_loader.vue';
import card from '~/components/card.vue';
import Header from '~/layouts/Header.vue';
import Footer from '~/layouts/Footer.vue';

export default {
  components: {
    card,
    cardLoader,
    Header,
    Footer,
  },
  middleware: 'noauthenticated',
  data () {
    return {
      tags:[],
      options:[],
      data: null,
      search: "",
      canMessageSubmit: false
    }
  },
  asyncData (context) {
    return context.app.apolloProvider.defaultClient.query({
      query: searchProjectsGql,
      variables: {
        page_size: 6,
        endCursor: "",
        // startAt_Gte: "1900-11-11T11:11:11+11:11",
        // startAt_Lte:"9999-12-23T11:23:23+23:23"
      }
      }).then(({ data }) => {
          return {
            allProjects: data.allProjects.edges,
            endCursor: data.allProjects.pageInfo.endCursor
            }
      }).catch((e) => {
        console.log(e)
        context.error({ statusCode: 404, message: 'ページが見つかりません' })
    })
  },
  methods: {
    readmore: function() {
      this.$apollo.query({
      query: searchProjectsGql,
      variables: {
        page_size: 6,
        endCursor: this.endCursor,
        name_Icontains: this.search
      }
      }).then(({ data }) => {
          // do what you want with data
          data.allProjects.edges.forEach((project) => {
            this.allProjects.push(project)
          })
          this.endCursor = data.allProjects.pageInfo.endCursor
        })
    },
    setCanMessageSubmit() {
      this.canMessageSubmit = true
    },
    say: function() {
      if (!this.canMessageSubmit) {
        return
      }

      this.$apollo.query({
      query: searchProjectsGql,
      variables: {
        page_size: 6,
        endCursor: "",
        name_Icontains: this.search
      }
      }).then(({ data }) => {
          // do what you want with data
          console.log(data)
          this.allProjects = data.allProjects.edges
          this.endCursor = data.allProjects.pageInfo.endCursor
        })

      this.message = ''
      this.canMessageSubmit = false
    },
  }
}
</script>

<style lang='scss'>
@import '~/assets/style/base.scss';
@import '~/assets/style/btn.scss';



</style>
