<template id="modal-template">
  <transition name="modal" >
    <div class="modal-mask" @click.self="$emit('closeModal')">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="skill_modal">
            <div class="header">
              <div class="img"></div>
              <h3>Skill</h3>
            </div>
            <p>あなたのスキルを追加しましょう。</p>
            <p>{{showModal}}</p>
            <div class="input">
              <input type="text" name="" value="" autocomplete="on" list="skill-list">
              <datalist id="skill-list">
                <option value="html">html</option>
                <option value="css">css</option>
                <option value="js">js</option>
              </datalist>
            </div>

            <div class="skill_modal_btn">
              <p @click="$emit('closeModal')">キャンセル</p>
              <button type="button" name="button" class="btn">追加する</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>


<script type="text/javascript">

export default {
  methods:{
    closeModal(){
            this.showModal = !this.showModal
        }
  }
}

</script>

<style lang="scss">
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
      border:solid 1px #ccc;
      border-radius: 5px;
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
