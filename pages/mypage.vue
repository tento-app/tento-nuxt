<template lang="html">
  <section id="account">
    <link href="https://fonts.googleapis.com/css?family=Noto+Sans+JP|Rubik" rel="stylesheet">
    <Header />
    <div class="main">
      <div class="account_header">
        <!-- <AccountHeader :edit="false" :username="user.username" :header="user.header" :logo="user.logo" /> -->
        <MypageHeader />
      </div>
      <div class="skill_container" >
          <skill :tags="user.tags.edges" title="スキル"/>
      </div>
      <div class="card">
        <card title="Posted Camp" :projects="host_projects"/>
      </div>
      <div class="card">
        <card title="Joined Camp" :projects="join_projects"/>
      </div>
    </div>
    <Footer />
  </section>
</template>

<script>
import MypageGql from '~/graphql/query/mypage.gql'

import userGql from '~/graphql/query/user.gql'
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
  data() {
    return {
          user: null,
          host_projects: null,
          join_projects: null,
    }
  },
  computed: {
      ...mapState('user',['token'])
  },
  mounted: function () {
     this.$apollo.query({
      query: MypageGql,
      variables: {
        token: this.token,
      }
    }).then(({ data }) => {
          // do what you want with data
          this.user= data.viewer
          this.host_projects= data.hostProjects.edges
          this.join_projects=data.joinProjects.edges

        })
  },
  asyncData (context) {
    // return context.app.apolloProvider.defaultClient.query({
    //   query: MypageGql,
    //   variables: {
    //     token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6InRlc3QiLCJleHAiOjE1NTM5NTQ3NjYsIm9yaWdJYXQiOjE1NTM5NTQ0NjZ9.f33dMdQ-Outu9ktKJWB6WWkHT13aUsYn3EJ-AjXvvrI",
    //     }
    //   }).then(({ data }) => {
    //     // do what you want with data
    //     return {
    //       user: data.viewer,
    //       host_projects: data.hostProjects.edges,
    //       join_projects: data.joinProjects.edges,
    //       }
    //   })
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
    margin-top: 80px;
    background-color: $backround_color01;
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
