<template id="">
  <div class="" id="skill">
    <h1>{{title}}</h1>
    <div class="skill">

      <div class="skill_item" v-for="tag in tags" :key="tag.node.id">
        <div class="img">
          <img v-bind:src="'https://media.tento.app/' + encodeURI(tag.node.logo)" alt="">
        </div>
        <p>{{ tag.node.name }}</p>
      </div>

      <!-- <div class="skill_item skill_add" @click="isShowModal">
        <div class=""><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#00A496" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 14.66V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5.34"></path><polygon points="18 2 22 6 12 16 8 16 8 12 18 2"></polygon></svg></div>
        <p>スキルを追加</p>
      </div> -->
    </div>
  <SkillModal v-if="showModal" ref="skillmodal"/>
  </div>
</template>

<script>
import { mapState,mapMutations } from 'vuex'
import SkillModal from '~/components/skill-modal.vue';
export default {
 components: {
   SkillModal
 },
  computed: {
    ...mapState('skill_modal',['showModal'])
  },
 methods: {
    ...mapMutations('skill_modal',['isShowModal'])
 },
 data(){
   return{
     skil_img:"/tag/css.svg",
     skill_name:"adobe XD"
   }
 },
 props: {
    tags: Array,
    title:String
 }
}

</script>

<style lang="scss" scoped>
  @import '~/assets/style/_color.scss';

@media (min-width:840px) {
  #skill {
    h1{
      max-width: 840px;
      margin: 0 auto;
      color: $black01;
      margin-bottom: 1rem;
      padding:0 30px;
      text-align: center;
      font-size: 2rem;
    }
  }
  .skill{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    max-width: 840px;
    margin: 0 auto;
    padding: 0 30px;
    &:before{
      content:"";
      display: block;
      width:32%;
      order:1;
    }
    &:after{
      content:"";
      display: block;
      width:32%;
    }
    &_item{
      background-color: #fff;
      box-shadow: $box_shadow01;
      border-radius: 12px;
      text-align: center;
      margin:0.5rem 0;
      transition: $transtion01;
      box-sizing: border-box;
      min-width: 32%;
      display: flex;
      align-items: center;
      .img {
        padding: 1rem;
        img {
          width: 40px;
          height: 40px;
        }
      }
      p{
        font-weight: bold;
        width: 100%;
        font-size: 1.2rem;
        padding: 1rem 0;
        margin-right: 1rem;
        border-left: $border01;
        color: $black01;
      }
    }

    &_add {
      cursor: pointer;
      div {
        width: 40px;
        height: 40px;
        margin: 1rem;
        background-position: center;
        background-repeat: no-repeat;
      }
    }
  }
}
@media screen and (min-width: 500px) and (max-width: 840px) {
  #skill {
    max-width: 840px;
    margin: 0 auto;
    padding: 0 30px;
    h1{
      color: $black01;
      margin-bottom: 1rem;
    }
  }
  .skill{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    max-width: 840px;
    margin: 0 auto;
    transition: 0.3s;
    &:after{
      content:"";
      display: block;
      width:30%;
    }
    &_item{
      transition: $transtion01;
      background-color: #fff;
      box-shadow: $box_shadow01;
      border-radius: 12px;
      padding: 0rem;
      text-align: center;
      margin:0.5rem 0;
      width: 30%;
      .img {
        padding: 1rem;
        img {
          width: 70px;
          height: 70px;
        }
      }
      p{
        font-weight: bold;
        font-size: 1.2rem;
        border-top: solid 0.5px #eaeaea;
        padding: 1rem
      }
    }

    &_add {
      cursor: pointer;
      div {
        width: 70px;
        height: 70px;
        margin: 1.5rem auto;
        background-position: center;
        background-repeat: no-repeat;
        svg {
          width: 70px;
          height: 70px;
        }
      }
      p{

      }
    }
  }
}

@media screen and (min-width: 0px) and (max-width: 500px) {
  #skill {
    max-width: 840px;
    margin: 0 auto;
    padding: 0 10px;
    h1{
      color: $black01;
      margin-bottom: 1rem;
    }
  }
  .skill{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    max-width: 840px;
    margin: 0 auto;
    transition: 0.3s;
    &_item{
      transition: $transtion01;
      background-color: #fff;
      box-shadow: $box_shadow01;
      border-radius: 12px;
      padding: 0rem;
      text-align: center;
      margin:0.5rem 0;
      width: 48%;
      .img {
        padding: 1rem;
        img {
          width: 70px;
          height: 70px;
        }
      }
      p{
        font-weight: bold;
        font-size: 1.2rem;
        border-top: solid 0.5px #eaeaea;
        padding: 1rem
      }
    }
    &_add {
      cursor: pointer;
      div {
        width: 70px;
        height: 70px;
        margin: 1.5rem auto;
        background-position: center;
        background-repeat: no-repeat;
        svg {
          width: 70px;
          height: 70px;
        }
      }
      p{

      }
    }
  }
}

</style>
