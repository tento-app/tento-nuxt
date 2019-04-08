<template lang="html">
  <section id="account">
    <link href="https://fonts.googleapis.com/css?family=Noto+Sans+JP|Rubik" rel="stylesheet">
    <Header />
    <div class="main">
      <div class="account_header">
        <AccountHeader :edit="false" :username="user.username" :header="user.header" :logo="user.logo" :position="user.position" :intro="user.content"/>
      </div>
      <div class="skill_container" v-if="user.tags.edges.length > 0">
          <skill :tags="user.tags.edges" title="Skills"/>
      </div>
      <div class="card" v-if="host_projects.length > 0">
        <card title="Opened Camp" :projects="host_projects"/>
      </div>
      <!-- <div class="card" v-if="join_projects.length > 0">
        <card title="Joined Camp" :projects="join_projects"/>
      </div> -->
    </div>
    <Footer />
  </section>
</template>

<script>
import userGql from '~/graphql/query/user.gql'

import card from '~/components/card.vue';
import skill from '~/components/skill.vue';
import AccountHeader from '~/components/account-header.vue';
import Header from '~/layouts/Header.vue';
import Footer from '~/layouts/Footer.vue';

export default {
  middleware: 'noauthenticated',
  components: {
    AccountHeader,
    card,
    skill,
    Header,
    Footer
  },
  asyncData (context) {
    return context.app.apolloProvider.defaultClient.query({
      query: userGql,
      variables: {
        id: context.params.id
        }
      }).then(({ data }) => {
        // do what you want with data
        return {
          user: data.user,
          host_projects: data.user.hostProjects.edges.reverse(),
          join_projects: data.user.projects.edges.reverse(),
          meta: {
            title: data.user.name + ' - Tento',
            description: '集まろう！ 学生の新しいコミュニティー',
            type: 'article',
            url: 'https://tento.app/user/'+ data.user.id,
            image: 'https://media.tento.app/'+ encodeURI(data.user.header),
            card:'summary_large_image',
            site:'@tento_app',
            creator:'@tento_app',
          },
          }
      })
  },
  head () {
    return {
      title: this.meta.title,
      meta: [
        { hid: 'description', name: 'description', content: this.meta.description },
        { hid: 'og:type', property: 'og:type', content: this.meta.type },
        { hid: 'og:title', property: 'og:title', content: this.meta.title },
        { hid: 'og:description', property: 'og:description', content: this.meta.description },
        { hid: 'og:url', property: 'og:url', content: this.meta.url },
        { hid: 'og:image', property: 'og:image', content: this.meta.image },
        { hid: 'twitter:card', property: 'twitter:card', content: this.meta.card },
        { hid: 'twitter:site', property: 'twitter:site', content: this.meta.site },
        { hid: 'twitter:creator', property: 'twitter:creator', content: this.meta.creator },
      ],
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/style/base.scss';
@import '~/assets/style/btn.scss';

.main{
  background-color: #fff;
  .skill_container{
    padding: 80px 0;
    background-color: $backround_color01;
  }
  .card {
    padding: 1rem 0 2rem;
    margin: 5rem 0 0;
  }
  .empty {
    text-align: center;
    padding-bottom: 5rem;
    .img {
      width: 300px;
      margin: 0 auto;
      img {
        width: 100%;
      }
    }
    p {
      font-weight: bold;
      font-size: 1rem;
      margin: 2rem 0 1rem;
    }
    a {
      font-size: 1rem;
      padding: 1rem;
    }
  }
}

</style>
