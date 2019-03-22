<template>
  <section>
    <Header />
    <div class="main">
      <CampBody :title="project.name" :text="project.content" :background_img_url="project.header" :host_user="project.user" :place="'赤羽キャンパス'" :contact="'tento@gmail.com'" :time="'03/17/14:00'"/>
      <!-- <div class="">
        <chat />
      </div> -->
    </div>
    <Footer />
  </section>
</template>

<script>
import projectGql from '~/graphql/query/project.gql'

import Header from '~/layouts/Header.vue';
import Footer from '~/layouts/Footer.vue';
import CampBody from '~/components/camp-body.vue';
import chat from '~/components/chat.vue';

export default {
  components: {
    Header,
    Footer,
    CampBody,
    chat
  },
  asyncData (context) {
    return context.app.apolloProvider.defaultClient.query({
      query: projectGql,
      variables: {
        id: context.params.id
        }
      }).then(({ data }) => {
        // do what you want with data
        return { project: data.project }
      })
  }
}
</script>
<style lang='scss' scoped>
@import '~/assets/style/base.scss';
@import '~/assets/style/btn.scss';
@import '~/assets/style/_color.scss';
.main {
  
}

</style>
