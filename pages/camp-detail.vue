<template>
  <section>
    <Header />
    <div>
      <CampBody />
      <profile />
      <div class="skill_component">
        <skill />
      </div>
      <chat />
      <profile />
    </div>
    <Footer />
  </section>
</template>

<script>
import Header from '~/layouts/Header.vue';
import Footer from '~/layouts/Footer.vue';
import slide from '~/components/slide.vue';
import CampBody from '~/components/camp-body.vue';
import chat from '~/components/chat.vue';
import profile from '~/components/profile.vue';
import skill from '~/components/skill.vue';


export default {
  components: {
    Header,
    Footer,
    CampBody,
    chat,
    profile,
    skill
  }
}
</script>

<style lang='scss'>
@import '~/assets/style/base.scss';
@import '~/assets/style/btn.scss';
@import '~/assets/style/_color.scss';
.main {
  padding-bottom: 5rem;
}
.skill_component{
  background-color: $backround_color02;
  padding: 80px 0;
}

</style>
