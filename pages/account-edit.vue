<template lang="html">
  <section id="account">
    <Header />
    <link href="https://fonts.googleapis.com/css?family=Noto+Sans+JP|Rubik" rel="stylesheet">
    <div class="main">
      <div class="account_edit">
        <AccountEdit />
      </div>
    </div>
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



</style>
