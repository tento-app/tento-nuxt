<template id="">
  <div class="" id="skill">
    <h1>{{title}}</h1>
    <div class="skill">

      <div class="skill_item" v-for="tag in tags" :key="tag.node.id">
        <div class="img">
          <img v-bind:src="'https://object-storage.tyo2.conoha.io/v1/nc_ac83d3c0bf5f4fb0a05b3e1c0d3164f4/api/' + encodeURI(tag.node.logo)" alt="">
        </div>
        <p>{{ tag.node.name }}</p>
      </div>

      <div class="skill_item skill_add"  @click="isShowModal" v-if="editable">
        <div class=""><svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="#ccc" stroke-width="1" stroke-linecap="square" stroke-linejoin="arcs"><polygon points="16 3 21 8 8 21 3 21 3 16 16 3"></polygon></svg></div>
        <p>スキル編集</p>
      </div>
    </div>
  <SkillModal v-if="showModal" ref="skillmodal" :multiselectoptions='options' :now_tags="now_tags"/>
  </div>
</template>

<script>
import { mapState,mapMutations } from 'vuex'
import SkillModal from '~/components/skill-modal.vue';

import allTagsGql from "~/graphql/query/allTags.gql";
import MypageGql from '~/graphql/query/mypage.gql';

export default {
 components: {
   SkillModal
 },
  computed: {
    ...mapState('skill_modal',['showModal'])
  },
 methods: {
    ...mapMutations('skill_modal',['isShowModal']),
    openModal(item) {
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
    },
 },
 data(){
   return{
     skil_img:"/tag/css.svg",
     skill_name:"adobe XD"
   }
 },
 props: {
    now_tags: Array,
    tags: Array,
    title:String,
    options:Array,
    editable: {
      type: Boolean,
      default: false // これを追加
    }
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
      margin-bottom: 3rem;
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
        width: 100%;
        font-size: 1rem;
        padding: 1rem 0;
        margin-right: 1rem;
        border-left: $border01;
        color: $black01;
      }
    }

    &_add {
      cursor: pointer;
      div {
        margin: 1rem;
        background-position: center;
        background-repeat: no-repeat;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 2.5px;
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
    transition: 0.3s;
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
      transition: $transtion01;
      background-color: #fff;
      box-shadow: $box_shadow01;
      border-radius: 10px;
      padding: 0rem;
      text-align: center;
      margin:0.5rem 0;
      width: 32%;
      .img {
        padding: 1rem;
        img {
          width: 70px;
          height: 70px;
        }
      }
      p{
        font-size: 1rem;
        border-top: solid 0.5px #eaeaea;
        padding: 1rem
      }
    }

    &_add {
      cursor: pointer;
      div {
        width: 60px;
        height: 60px;
        margin: 1.5rem auto;
        background-position: center;
        background-repeat: no-repeat;
        svg {
          width: 60px;
          height: 60px;
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
      max-width: 840px;
      margin: 0 auto;
      color: $black01;
      margin-bottom: 1rem;
      padding:0 30px;
      text-align: center;
      font-size: 1.8rem;
    }
  }
  .skill{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    max-width: 840px;
    margin: 0 auto;
    transition: 0.3s;
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
      transition: $transtion01;
      background-color: #fff;
      box-shadow: $box_shadow01;
      border-radius: 10px;
      padding: 0rem;
      text-align: center;
      margin:0.5rem 0;
      width: 32%;
      .img {
        padding: 1rem;
        img {
          width: 50px;
          height: 50px;
        }
      }
      p{
        font-weight: bold;
        font-size: 14px;
        border-top: solid 0.5px #eaeaea;
        padding: 1rem
      }
    }
    &_add {
      cursor: pointer;
      div {
        width: 60px;
        height: 60px;
        margin: 1.5rem auto;
        background-position: center;
        background-repeat: no-repeat;
        svg {
          width: 60px;
          height: 60px;
        }
      }
      p{

      }
    }
  }
}

</style>
