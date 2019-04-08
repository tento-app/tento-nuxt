<template>
  <section>
    <Header />
    <div class="main">
      <link href="https://fonts.googleapis.com/css?family=Noto+Sans+JP|Rubik" rel="stylesheet">
      <CampHeader :title="project.name" />
      <CampEyecatch :background_img_url="project.header"/>
      <div class="camp_body">
        <CampInfo :title="project.name" :host_user="project.user" :tags="project.tags.edges" :place="project.place" :contact="project.contact" :time="project.startAt" :project_id="project.id" :users="project.users.edges"/>
        <CampDescripton :text="project.content"/>
        <div class="">
          <div class="skill_component" v-if="project.tags.edges.length > 0">
            <skill :tags="project.tags.edges" title="Required tool"/>
          </div>
          <div class="profile_component">
          <profile :host_user="project.user" :url_id="project.id"/>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </section>
</template>

<script>
import statusGql from '~/graphql/mutation/statusProject.gql'
import projectGql from '~/graphql/query/project.gql'
import viewerGql from '~/graphql/query/viewer.gql'
import { mapState } from 'vuex'

import Header from '~/layouts/Header.vue';
import Footer from '~/layouts/Footer.vue';
import CampBody from '~/components/camp-body.vue';
import CampHeader from '~/components/camp-body/header.vue';
import CampEyecatch from '~/components/camp-body/eyecatch.vue';
import CampInfo from '~/components/camp-body/info.vue';
import CampDescripton from '~/components/camp-body/description.vue';
import profile from '~/components/profile.vue';
import skill from '~/components/skill.vue';

import chat from '~/components/chat.vue';
import { retry } from 'async';

export default {
  middleware: 'noauthenticated',
  components: {
    Header,
    Footer,
    CampBody,
    CampHeader,
    CampEyecatch,
    CampInfo,
    CampDescripton,
    profile,
    skill,
    chat
  },
  props: {
    tags: Array,
    users: Array,
  },
  data() {
    return {
    }
  },
  fetch(context){
    if(context.app.$cookies.get('cookie-token')){

    context.app.apolloProvider.defaultClient.mutate({
        mutation: statusGql,
        variables: {
          project_id: context.params.id,
          token: context.app.$cookies.get('cookie-token'),
        }
      }).then(({ data }) => {
          // do what you want with data
          context.store.commit('button/setLike',  data.isLiked.isLiked)
          context.store.commit('button/setClassLike',  data.isLiked.isLiked)
          context.store.commit('button/setJoin',  data.isJoined.isJoined)
          context.store.commit('button/setClassJoin',  data.isJoined.isJoined)
      })
    }
  },
  asyncData (context) {
    return context.app.apolloProvider.defaultClient.query({
      query: projectGql,
      variables: {
        id: context.params.id
        }
      }).then(({ data }) => {
        // do what you want with data
        if(!data.project){
          return context.error({ statusCode: 404, message: 'ページが見つかりません' })
        }
        return {
          project: data.project,
          meta: {
            title: data.project.name + ' - Tento',
            description: '集まろう！ 学生の新しいコミュニティー',
            type: 'site',
            url: 'https://nuxt.tento.app/camp/'+ data.project.id,
            image: 'https://media.tento.app/'+ encodeURI(data.project.header),
            card:'summary_large_image',
            site:'@tento_app',
            creator:'@tento_app',
          },
        }
      })
  },
  computed: {
      ...mapState('user',['token']),
      ...mapState('button',['like','classLike','join','classJoin']),
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
<style lang='scss' scoped>
@import '~/assets/style/base.scss';
@import '~/assets/style/btn.scss';
@import '~/assets/style/_color.scss';
.camp_body {
  background-color: #fff;
}

.skill_component {
  margin: 3rem 0;
}

.profile_component {
  padding: 3rem 0;
}

@media screen and (min-width: 0px) and (max-width: 500px) {
  body {
    padding-bottom: 52.67px;
  }
}

</style>
