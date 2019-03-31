<template>
  <section>
    <Header />
    <div class="main">
      <link href="https://fonts.googleapis.com/css?family=Noto+Sans+JP|Rubik" rel="stylesheet">
      <CampBody :title="project.name" :text="project.content" :background_img_url="project.header" :host_user="project.user" :tags="project.tags.edges" :place="project.place" :contact="project.contact" :time="project.startAt" :users="project.users.edges"/>
      <!-- <div class="">
        <chat />
      </div> -->
    </div>
    <Footer />
  </section>
</template>

<script>
import projectGql from '~/graphql/query/project.gql'
import statusGql from '~/graphql/mutation/statusProject.gql'
import likedGql from '~/graphql/mutation/liked.gql'
import unlikedGql from '~/graphql/mutation/unliked.gql'
import joinGql from '~/graphql/mutation/joinProject.gql'
import outGql from '~/graphql/mutation/outProject.gql'
import { mapState } from 'vuex'

import Header from '~/layouts/Header.vue';
import Footer from '~/layouts/Footer.vue';
import CampBody from '~/components/camp-body.vue';
import chat from '~/components/chat.vue';
import { retry } from 'async';

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
  },
  data() {
    return {
      isLiked: false,
      isJoined: false,
    }
  },
  mounted: function () {
     this.$apollo.mutate({
      mutation: statusGql,
      variables: {
        project_id: this.project.id,
        token: this.token,
      }
    }).then(({ data }) => {
          // do what you want with data
          this.isJoined = data.isJoined.isJoined
          this.isLiked = data.isLiked.isLiked
        })
  },
  computed: {
      ...mapState('user',['token']),
      like(){
        if (this.isLiked){
          // いいねしてたら削除
          this.$apollo.mutate({
            mutation: unlikedGql,
            variables: {
              project_id: this.project.id,
              token: this.token,
            }
          }).then(({ data }) => {
                // do what you want with data
            if(data.liked.success){
              this.isLiked = !this.isLiked
            }
          })
        } else {
          // いいねしてないとき
          this.$apollo.mutate({
            mutation: likedGql,
            variables: {
              project_id: this.project.id,
              token: this.token,
            }
          }).then(({ data }) => {
                // do what you want with data
            if(data.liked.success){
              this.isLiked = !this.isLiked
            }
          })
        }
      },
      join(){
        if (this.isJoined){
          // いいねしてたら削除
          this.$apollo.mutate({
            mutation: outGql,
            variables: {
              project_id: this.project.id,
              token: this.token,
            }
          }).then(({ data }) => {
                // do what you want with data
            if(data.outProject.success){
              this.isJoined = !this.isJoined
            }
          })
        } else {
          // いいねしてないとき
          this.$apollo.mutate({
            mutation: joinGql,
            variables: {
              project_id: this.project.id,
              token: this.token,
            }
          }).then(({ data }) => {
                // do what you want with data
            if(data.joinProject.success){
              this.isJoined = !this.isJoined
            }
          })
        }
      },
  },
}
</script>
<style lang='scss' scoped>
@import '~/assets/style/base.scss';
@import '~/assets/style/btn.scss';
@import '~/assets/style/_color.scss';
.main {

}

</style>
