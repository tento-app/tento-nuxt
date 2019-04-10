<template id="modal-template">
  <transition name="modal" >
    <div class="modal-mask" @click.self="$emit('closeModal')">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="skill_modal">
            <div class="header">
              <div class="img"><svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 24 24" fill="none" stroke="#00A496" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 14.66V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5.34"></path><polygon points="18 2 22 6 12 16 8 16 8 12 18 2"></polygon></svg></div>
              <h3>Skill</h3>
            </div>
            <p>あなたのスキルを追加しましょう。</p>
            <Multiselect v-model="tagsUpdate" :options="multiselectoptions" :multiple="true" :hide-selected="true" :searchable="false" :close-on-select="false" :clear-on-select="false" :preserve-search="true" placeholder="スキルを選ぼう" :preselect-first="false" :max-height="200"></Multiselect>

            <div class="skill_modal_btn">
              <p @click="isShowModal">キャンセル</p>
              <button type="button" @click="submit" name="button" class="btn">追加する</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>


<script type="text/javascript">
import { mapState,mapMutations } from 'vuex'

import updateUsertGql from "~/graphql/mutation/updateUser.gql";

export default {
  props: {
    multiselectoptions:Array,
    now_tags:Array
  },
  data() {
    return {
      tagsUpdate:{}
    }
  },
  mounted() {
    this.tagsUpdate = this.now_tags
  },
  computed: {
      ...mapState('user',['token'])
  },
 methods: {
    ...mapMutations('skill_modal',['isShowModal']),
    ...mapMutations('user',['setToken']),
    createSkilIlnput(){
      let SkillInput = {}
      SkillInput.tags = this.tagsUpdate
      return SkillInput
    },
    submit() {
      this.$apollo.mutate({
        mutation: updateUsertGql,
        variables: {
          token: this.token,
          userData: this.createSkilIlnput()
        }
      })
      .then(result => {
        // 成功した場合に実行する処理（200OKのレスポンスの場合）
        this.$router.push('/user/edit/')
      })
      .catch(error => {
        // errorの場合に実行する処理
        console.log(error);
      });
    },
 },
}

</script>

<style lang="scss" scoped>
@import '~/assets/style/_color.scss';
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  display: table;
  transition: opacity .3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  transition: all .3s ease;
}

.skill_modal{
  background-color: #fff;
  border-radius: 12px;
  width: 340px;
  padding: 1.5rem;
  margin: 3rem auto;
  .header{
    display: flex;
    align-items: center;
    .img{
      width: 45px;
      height: 45px;
    }
    h3{
      margin-left: 1rem;
      font-weight: bold;
    }
  }
  p{
    margin-top: 1rem;
    font-size: 14px;
    font-weight: bold;
  }
  .input{
    margin-top: 0.5rem;
    input{
      box-sizing: border-box;
      width: 100%;
      border-radius: 4px;
      border: solid 1px #cacaca;
      background-color: #fafafa;
      font-size: 14px;
      padding: 0.4rem;
    }
  }
  &_btn{
    display: flex;
    align-items: center;
    margin-top: 1.5rem;
    p{
      color: #ccc;
      font-size: 14px;
      margin: 0;
      cursor: pointer;
    }
    button{
      margin-left: auto;
      background-color: $main_color;
      color: #fff;
      font-size: 14px;
      padding: 0.5rem 1rem;
      &:active{
        background-color: $sub_color;
      }
    }
  }
}
</style>
