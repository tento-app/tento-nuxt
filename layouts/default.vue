<template>
  <div>
    <nuxt />
  </div>
</template>

<style lang="scss">
@import '~/assets/style/_color.scss';

html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

body{
  background-color: $backround_color01;
  padding: 67.4px 0 0;
  margin: 0;
  color: #1f1f1f;
  font-family: 'Rubik', 'Noto Sans JP', sans-serif;
  input,textarea,select,button{
    font-family: 'Rubik', 'Noto Sans JP', sans-serif;
  }

  .content{
    margin: 0px auto 0;
    &.item{
      margin-top: 80px;
      padding:0 30px;
    }
  }
  a{
    text-decoration: none;
    color:#555;
  }
  h1,h2,h3,h4,h5,p{
    margin: 0;
  }
  ul{
    list-style: none;
    padding: 0;
    margin: 0;
  }
  .layer{
    &.active{
      display: block;
    }
    display: none;
    position: fixed;
    top:0;
    left:0;
    width: 100%;
    height: 100vh;;
    background-color: rgba(0,0,0,0);
    z-index: 998;
  }
  // .background_img{
  //   &_01{
  //     background-image: url('../static/camp_img.jpg') !important;
  //     background-size: cover;
  //     background-position: center;
  //   }
  //   &_02{
  //     background-image: url('../static/camp_img_02.jpg') !important;
  //     background-size: cover;
  //     background-position: center;
  //   }
  //   &_03{
  //     background-image: url('../static/camp_img_03.jpg') !important;
  //     background-size: cover;
  //     background-position: center;
  //   }
  //   &_04{
  //     background-image: url('../static/camp_img_04.jpg') !important;
  //     background-size: cover;
  //     background-position: center;
  //   }
  // }
  @media (min-width: 500px) {
    .sp{
      display: none;
    }
  }
  @media screen and (min-width: 0px) and (max-width: 500px) {
    .content{
      margin: 0px auto 0;
      &.item{
        margin-top: 80px;
        padding:0 15px;
      }
    }
  }
}


.btn{
  background-color: #37AB9D;;
  border-radius: 3px;
  color: #fff;
  padding: 10px;
  max-width: 135px;
  font-size: 14px;
  transition: 0.1s;
  text-align: center;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  cursor: pointer;
  border: none;
  display: flex;
  align-items: center;
  margin-right: 0.5rem;
}

.sub_btn{
  background-color: #302D2C;
  border-radius: 99px;
  color: #fff;
  padding:12px 22px;
  box-shadow: $box_shadow01;
  font-size: 14px;
  transition: 0.1s;
  text-align: center;
  display: inline-block;
  cursor: pointer;
  &:hover{
    transition: 0.1s;
    box-shadow: $box_shadow02;
  }
}

.btn_priority{
  background-color: #FFC042  ;
  border-radius: 3px;
  color: #fff;
  padding: 10px;
  max-width: 150px;
  font-size: 14px;
  transition: 0.1s;
  text-align: center;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  cursor: pointer;
  border: none;
  display: flex;
  align-items: center;
  p {
  }
  svg {
    margin-right: 6px;
    stroke-width:2;
  }
  i{
    color: $main_color;
  }
  &:hover{
    transition: 0.2s;
    background-color: #F1B336;
  }
  &:disabled{
    background-color: #F1B336;
  }
}

</style>
