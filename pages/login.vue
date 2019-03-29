<template lang="html">
  <section id="account">
    <Header />
    <link href="https://fonts.googleapis.com/css?family=Noto+Sans+JP|Rubik" rel="stylesheet">
    <div class="main">
      <createAccount />
    </div>
  </section>
</template>

<script>
import createAccount from '~/components/create-account.vue';
import Header from '~/layouts/Header.vue';

export default {
  components: {
    createAccount,
    Header
  }
}
</script>

<style lang="scss">

</style>
