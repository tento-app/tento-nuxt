<template lang="html">
  <section id="account">
    <Header />
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
  body {
    background-color: #efefef;
  }
  @media screen and (min-width: 0px) and (max-width: 550px) {
    body{
      background-color: #fff;
    }
  }
</style>
