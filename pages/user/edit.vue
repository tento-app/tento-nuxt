<template lang="html">
  <section id="account">
    <link href="https://fonts.googleapis.com/css?family=Noto+Sans+JP|Rubik" rel="stylesheet">
    <Header />
    <div class="main">
      <div class="account_header">
        <!-- <AccountHeader :edit="false" :username="user.username" :header="user.header" :logo="user.logo" /> -->
        <MypageHeader :logo="user.logo" :username="user.username" :position="user.position" :content="user.content" :header="user.header"/>
      </div>
      <div class="skill_container" >
        <skill :tags="tags" title="スキル" :editable="true" :options="multiselectoptions" :now_tags='now_tags'/>
      </div>
      <div class="card">
        <card title="Opened Camp" :projects="host_projects" :edit="true"/>
        <div class="empty_posted empty" v-if="host_projects.length < 1">
          <h3>投稿したキャンプがありません...</h3>
          <div class="img">
            <img src="../../static/404_01.svg" alt="">
          </div>
          <div class="button">
            <nuxt-link to="/camp/create" class='btn_priority'>キャンプを投稿</nuxt-link>
          </div>
        </div>
      </div>
      <div class="card background">
        <card title="Joined Camp" :projects="join_projects"/>
        <div class="empty_posted empty" v-if="join_projects.length < 1">
          <h3>参加したキャンプがありません...</h3>
          <div class="img">
            <img src="feature01-min.png" alt="">
          </div>
          <div class="button">
            <nuxt-link to="/camp" class='btn_priority'>一覧を見る</nuxt-link>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </section>
</template>

<script>
import MypageGql from '~/graphql/query/mypage.gql'
import { mapState } from 'vuex'
import allTagsGql from "~/graphql/query/allTags.gql";

import MypageHeader from '~/components/mypage-header.vue';
import card from '~/components/card.vue';
import skill from '~/components/skill.vue';
import AccountHeader from '~/components/account-header.vue';
import Header from '~/layouts/Header.vue';
import Footer from '~/layouts/Footer.vue';

export default {
  components: {
    MypageHeader,
    card,
    skill,
    Header,
    Footer
  },
  middleware: 'authenticated',
  data() {
    return {
          user: null,
          tags: null,
          host_projects: null,
          join_projects: null,
    }
  },
  computed: {
      ...mapState('user',['token'])
  },
  asyncData (context) {
    return context.app.apolloProvider.defaultClient.query({
      query: MypageGql,
      variables: {
        token: context.app.$cookies.get('cookie-token', { path: '/'}),
      }
    }).then(({ data }) => {
          // do what you want with data
          const now_tags = data.viewer.tags.edges.map(function (value) { return value.node.name })
          const all_tags = data.allTags.edges.map(function (value) { return value.node.name })
          return {
            user: data.viewer,
            tags:data.viewer.tags.edges,
            host_projects: data.hostProjects.edges,
            join_projects:data.joinProjects.edges,
            multiselectoptions: now_tags.concat(all_tags).filter(item => !now_tags.includes(item) || !all_tags.includes(item)),
            now_tags:data.viewer.tags.edges.map(function (value) { return value.node.name })
          }
        })
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
  .empty {
    max-width: 840px;
    margin: 0 auto;
    padding: 0 30px;
    text-align: center;
    padding-bottom: 5rem;
    h3 {
      margin-bottom: 3rem;
      color: $black02;
    }
    .img {
      max-width: 300px;
      margin: 0 auto 2rem;
      img {
        width: 100%;
      }
    }
    .button {
      text-align: center;
      a {
        margin: 0 auto;
      }
    }

  }
  .card {
    padding: 5rem 15px;
    .content {
      padding: 0;
    }
  }
  .background {
    background-color: $backround_color01;
  }
}

</style>
