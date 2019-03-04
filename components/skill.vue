<template id="">
  <div class="">
  <div class="skill">
    <div class="skill_item">
      <div class="skill_item_img"></div>
      <p>adobe XD</p>
    </div>

    <div class="skill_item">
      <div class="skill_item_img"></div>
      <p>adobe XD</p>
    </div>

    <div class="skill_item">
      <div class="skill_item_img"></div>
      <p>adobe XD</p>
    </div>

    <div class="skill_item">
      <div class="skill_item_img"></div>
      <p>adobe XD</p>
    </div>

    <div class="skill_item">
      <div class="skill_item_img"></div>
      <p>adobe XD</p>
    </div>

    <div class="skill_item">
      <div class="skill_item_img"></div>
      <p>adobe XD5</p>
    </div>

    <div class="skill_item skill_add">
      <div class=""></div>
      <p>スキルを追加</p>
    </div>
  </div>

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
      <p>キャンセル</p>
      <button type="button" name="button" class="btn">追加する</button>
    </div>
  </div>
  </div>
</template>

<script>

</script>

<style lang="scss">
  @import '~/assets/style/_color.scss';

@media (min-width:840px) {
  .skill{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    max-width: 840px;
    margin: 0 auto;
    &_item{
      background-color: #fff;
      box-shadow: $box_shadow01;
      border-radius: 12px;
      padding: 0rem;
      text-align: center;
      margin:0.5rem;
      transition: $transtion01;
      width: 20%;
      &_img{
        width: 70px;
        height: 70px;
        margin: 1.5rem auto;
        background-image: url("../static/icon.png");
        background-position: center;
        background-repeat: no-repeat;
      }
      p{
        font-weight: bold;
        font-size: 1rem;
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
        background-color: $main_color;
        background-position: center;
        background-repeat: no-repeat;
      }
      p{

      }
    }
  }
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
}
@media screen and (min-width: 500px) and (max-width: 840px) {
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
      margin:0.5rem;
      width: 30%;
      &_img{
        width: 70px;
        height: 70px;
        margin: 1.5rem auto;
        background-image: url("../static/icon.png");
        background-position: center;
        background-repeat: no-repeat;
      }
      p{
        font-weight: bold;
        font-size: 1rem;
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
        background-color: $main_color;
        background-position: center;
        background-repeat: no-repeat;
      }
      p{

      }
    }
  }
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
}

@media screen and (min-width: 0px) and (max-width: 500px) {
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
      margin:0.5rem;
      width: 45%;
      &_img{
        width: 70px;
        height: 70px;
        margin: 1.5rem auto;
        background-image: url("../static/icon.png");
        background-position: center;
        background-repeat: no-repeat;
      }
      p{
        font-weight: bold;
        font-size: 1rem;
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
        background-color: $main_color;
        background-position: center;
        background-repeat: no-repeat;
      }
      p{

      }
    }
  }
  .skill_modal{
    background-color: #fff;
    box-shadow: $box_shadow01;
    border-radius: 12px;
    width: 280px;
    padding: 1.5rem;
    margin: 3rem auto;
    transition: 0.3s;
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
}

</style>
