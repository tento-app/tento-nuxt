<template lang="html">
  <section id="account">
    <Header />
    <div class="main">
      <div class="account_header">
        <AccountHeader />
      </div>
      <div class="skill_container">
        <skill title="My tool"/>
      </div>
      <div class="card">
        <card title="Posted Camp"/>

        <div class="empty" v-if="!card">
          <div class="img">
            <img src="~/static/flow02-min.png" alt="">
          </div>
          <div class="text">
            <p>自分のやりたいことをみんなにシェアしよう！！</p>
            <nuxt-link to="/create" class="btn_priority">New Camp</nuxt-link>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </section>
</template>

<script>
import card from '~/components/card.vue';
import skill from '~/components/skill.vue';
import AccountHeader from '~/components/account-header.vue';
import Header from '~/layouts/Header.vue';
import Footer from '~/layouts/Footer.vue';

export default {
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
        return { user: data.user }
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
