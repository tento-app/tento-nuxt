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

</style>
