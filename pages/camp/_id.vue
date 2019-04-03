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
          <div class="skill_component">
            <skill :tags="project.tags.edges" title="Required tool"/>
          </div>
          <!-- <div class="profile_component">
          <profile :id="host_user.id"  :background_img_url="host_user.logo" :name="host_user.username" :position="host_user.position" :content="host_user.content"/>
          </div> -->
        </div>
      </div>
    </div>
    <Footer />
  </section>
</template>

<script>
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
  asyncData (context) {
    console.log('camp/_id')
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
        return { project: data.project }
      })
  },
  middleware: 'authenticated',
  computed: {
      ...mapState('user',['token']),
  },
}
</script>
<style lang='scss' scoped>
@import '~/assets/style/base.scss';
@import '~/assets/style/btn.scss';
@import '~/assets/style/_color.scss';
.camp_body {
  background-color: #fff;
}

</style>
