<template>
  <div class="">
    <Header />
    <div class="mavonEditor">
      <no-ssr>
        <mavon-editor :toolbars="markdownOption" v-model="handbook" language="en"/>
      </no-ssr>
    </div>

  </div>
</template>

<script>
  import Vue from 'vue'
  import mavonEditor from 'mavon-editor'
  import 'mavon-editor/dist/css/index.css'
  import Header from '~/layouts/Header.vue';

  export default {
    components: {
      Header
    },
  data() {
    return {
      markdownOption: {
        bold: true,
        italic: true,
        header: true,
        underline: true,
        strikethrough: true,
        mark: true,
        quote: true,
        imagelink: true,
        htmlCode: true
      },
    };
  }
};

</script>

<style lang="scss">
.mavonEditor {
  max-width: 840px;
  margin: 0 auto;
  padding: 0 30px;
  z-index: -1;
}

</style>
