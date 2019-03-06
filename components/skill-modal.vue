<template id="modal-template">

<transition name="modal">
<div class="modal-mask">
<div class="modal-wrapper">
<div class="modal-container">
<div class="skill_modal">
<div class="header">
<div class="img"></div>
<h3>Skill</h3>
</div>
<p>あなたのスキルを追加しましょう。</p>
<div class="input">
<input type="text" name="" value="">
</div>

<div class="skill_modal_btn">
<button type="button" name="button" @click="$emit('close')">キャンセル</button>
<button type="button" name="button" class="btn">追加する</button>
</div>
</div>
</div>
</div>
</div>
</transition>

</template>


<script type="text/javascript">

</script>

<style lang="scss">
@import '~/assets/style/_color.scss';

.skill_modal{
  background-color: #fff;
  box-shadow: $box_shadow01;
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
