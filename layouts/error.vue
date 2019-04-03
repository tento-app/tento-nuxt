<template>
  <section>
    <!-- <Header /> -->
      <div class="container">
    <h1 v-if="error.statusCode === 404">Page not found</h1>
    <h1 v-else>An error occurred</h1>
        <p>{{ error.message }}</p>
    <nuxt-link to="/">Home page</nuxt-link>
  </div>
    <!-- <Footer /> -->
  </section>
</template>
<script>
import Header from '~/layouts/Header.vue';
import Footer from '~/layouts/Footer.vue';

export default {
  components: {
    Header,
    Footer,
  },
  props:['error']
}
</script>

