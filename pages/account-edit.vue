<template lang="html">
  <section id="account">
    <Header />
    <div class="main">
      <div class="account_edit">
        <AccountEdit />
      </div>
    </div>
    <Footer />
  </section>
</template>

<script>
import AccountEdit from '~/components/account-edit.vue';
import Header from '~/layouts/Header.vue';
import Footer from '~/layouts/Footer.vue';

export default {
  components: {
    AccountEdit,
    Header,
    Footer
  }
}
</script>

<style lang="scss">
@import '~/assets/style/base.scss';
@import '~/assets/style/btn.scss';

.main{
  .account_header{

  }
  .skill_container{
    padding: 80px 0;
    margin-top: 80px;
    background-color: #fafafa;
  }
}

</style>
