<template lang="html">
  <section id="account">
    <Header />
    <div class="main">
      <div class="account_header">
        <AccountHeader />
      </div>
      <div class="skill_container">
        <skill />
      </div>
      <div class="card">
        <card />
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
}

</style>
