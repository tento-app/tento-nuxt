<template lang="html">
  <section id="account">
    <link href="https://fonts.googleapis.com/css?family=Noto+Sans+JP|Rubik" rel="stylesheet">
    <Header />
    <div class="main">
      <div class="mycard">
        <div class="mycard">
          <cardEdit title="投稿したキャンプ" :projects="host_projects" :edit="true"/>
        </div>
        <div class="mycard">
          <div class="empty_posted empty" v-if="host_projects.length < 1">
            <h3>投稿したキャンプがありません...</h3>
            <div class="img">
              <img src="flow02-min.png" alt="">
            </div>
            <nuxt-link to="/camp/create" class='btn_priority'>キャンプを投稿</nuxt-link>
          </div>
        </div>
      </div>
      </div>
    <Footer />
  </section>
</template>

<script>
import editGql from '~/graphql/query/edit.gql'
import { mapState } from 'vuex'
import cardEdit from '~/components/card-edit.vue';

import Header from '~/layouts/Header.vue';
import Footer from '~/layouts/Footer.vue';

export default {
  components: {
    cardEdit,
    Header,
    Footer
  },
  middleware: 'authenticated',
  data() {
    return {
        host_projects: null,
    }
  },
  computed: {
      ...mapState('user',['token'])
  },
  asyncData (context) {
    return context.app.apolloProvider.defaultClient.query({
      query: editGql,
      variables: {
        token: context.app.$cookies.get('cookie-token'),
      }
    }).then(({ data }) => {
          // do what you want with data
          return {
            host_projects: data.hostProjects.edges,
          }
        }).catch((e) => {
          console.log(e)
        })
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/style/base.scss';
@import '~/assets/style/btn.scss';

.content {
  margin: 5rem 0;
}
.main{
  // background-color: #fff;
  .skill_container{
    padding: 80px 0;
    margin-top: 80px;
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
}

</style>
