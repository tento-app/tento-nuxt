<template>
  <header>
    <div class="content">
      <div class="layer"></div>
      <a href="" class="logo">
        <img src="../static/logo_w.png" alt="">
      </a>
      <div class="left">
        <div class="account" id="account">
          <div class="account_menu" id="account_menu">
            <ul>
              <a href="" class="sp">
                <li><i class="fas fa-campground"></i>
                  <p>New camp</p>
                </li>
              </a>
              <a href="">
                <li><i class="far fa-user"></i>
                  <p>マイページ</p>
                </li>
              </a>
              <a href="#">
                <li><i class="far fa-bookmark"></i>
                  <p>保存したキャンプ</p>
                </li>
              </a>
              <a href="#">
                <li><i class="fas fa-sign-out-alt"></i>
                  <p>ログアウト</p>
                </li>
              </a>
            </ul>
          </div>
        </div>
        <a href="https://twitter.com/">
          <div class="contact btn">
            <i class="far fa-envelope"></i>
          </div>
        </a>
        <a href="#">
          <div class="submit btn">
            <i class="fas fa-plus"></i>
            <p>New Camp</p>
          </div>
        </a>
      </div>
    </div>

  </header>
</template>
<script type="text/javascript">
// let layer = document.getElementsByClassName('layer');
// let account_menu = document.getElementById('account_menu');
// let account = document.getElementById('account');
//
// function show_menu() {
//   account_menu.classList.toggle('active');
//   layer[0].classList.toggle('active');
// }
// account.addEventListener("click",show_menu);
// layer[0].addEventListener("click",show_menu);
</script>


<style lang="scss">
@import '~/assets/style/_color.scss';

@media (min-width:840px) {
  header {
    position: relative;
    background-color: rgba(250, 250, 250, 1);
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    padding: 18px 0;
    z-index: 4;
    position: fixed;
    width: 100%;
    top: 0;
    .content {
      max-width: 840px;
      padding: 0 30px;
      margin: 0 auto;
      display: flex;
      align-items: center;
      position: relative;
      .logo {
        font-size: 0;
        img {
          width: 100px;
        }
      }
      .left {
        display: flex;
        align-items: center;
        margin-left: auto;
        .account {
          background-color: $sub_color;
          background-image: url("../static/icon.jpg");
          background-size: cover;
          background-position: center;
          margin-left: 0.8rem;
          font-size: 0;
          padding: 0;
          width: 45px;
          height: 45px;
          border-radius: 50%;
          box-shadow: $box_shadow01;
          border: solid 1px $sub_color;
          cursor: pointer;
          box-sizing: border-box;
          &:hover {
            transition: $transtion01;
            box-shadow: $box_shadow02;
          }
          &_menu {
            &.active {
              display: block;
            }
            z-index: 999;
            display: none;
            text-align: left;
            color: #555;
            font-size: 14px;
            position: absolute;
            top:75px;
            right:230px;
            ul {
              box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
              background-color: #fff;
              border-radius: 8px;
              padding: 1rem 0;
              font-weight: normal;
              li {
                font-size: 14px;
                padding: 6px 12px;
                display: flex;
                align-items: center;
                p {
                  margin-left: 1rem;
                }
                i {
                  color: $sub_color;
                }
                &:hover {
                  background-color: #eee;
                  transition: $transtion01;
                }
              }
            }
          }
        }
        .contact {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 45px;
          height: 45px;
          margin: 0;
          margin-left: 0.8rem;
          border-radius: 50%;
          font-size: 24px;
          padding: 0;
          color: $main_color;
        }
        .submit {
          display: flex;
          align-items: center;
          margin-left: 0.8rem;
          p {
            margin-left: 6px;
          }
        }
      }
    }
  }
}

@media screen and (min-width: 500px) and (max-width: 840px) {
  header {
    position: relative;
    background-color: rgba(250, 250, 250, 1);
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    padding: 18px 0;
    z-index: 4;
    position: fixed;
    width: 100%;
    top: 0;
    .content {
      max-width: 840px;
      padding: 0 30px;
      margin: 0 auto;
      display: flex;
      align-items: center;
      position: relative;
      .logo {
        font-size: 0;
        img {
          width: 100px;
        }
      }
      .left {
        display: flex;
        align-items: center;
        margin-left: auto;
        .account {
          background-image: url("../static/icon.jpg");
          background-size: cover;
          background-position: center;
          margin-left: 0.8rem;
          font-size: 0;
          padding: 0;
          width: 45px;
          height: 45px;
          border-radius: 50%;
          box-shadow: $box_shadow01;
          box-shadow: $box_shadow01;
          border: solid 1px $main_color;
          cursor: pointer;
          box-sizing: border-box;
          &:hover {
            transition: $transtion01;
            box-shadow: $box_shadow02;
          }
          &_menu {
            &.active {
              display: block;
            }
            z-index: 999;
            display: none;
            text-align: left;
            color: #555;
            font-size: 14px;
            position: absolute;
            top:75px;
            right:230px;
            ul {
              box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
              background-color: #fff;
              border-radius: 8px;
              padding: 1rem 0;
              font-weight: normal;
              li {
                font-size: 14px;
                padding: 6px 12px;
                display: flex;
                align-items: center;
                p {
                  margin-left: 1rem;
                }
                i {
                  color: $sub_color;
                }
                &:hover {
                  background-color: #eee;
                  transition: $transtion01;
                }
              }
            }
          }
        }
        .contact {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          margin: 0;
          margin-left: 0.8rem;
          border-radius: 50%;
          font-size: 24px;
          padding: 0;
          color: $main_color;
        }
        .submit {
          display: flex;
          align-items: center;
          margin-left: 0.8rem;
          p {
            margin-left: 6px;
          }
        }
      }
    }
  }
}


@media screen and (min-width: 0px) and (max-width: 500px) {
  header {
    position: relative;
    background-color: rgba(250, 250, 250, 1);
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    padding: 18px 0;
    z-index: 4;
    position: fixed;
    width: 100%;
    top: 0;
    .content {
      max-width: 840px;
      padding: 0 30px;
      margin: 0 auto;
      display: flex;
      align-items: center;
      position: relative;
      .logo {
        font-size: 0;
        img {
          width: 80px;
        }
      }
      .left {
        display: flex;
        align-items: center;
        margin-left: auto;
        .account {
          background-image: url("../static/icon.jpg");
          background-size: cover;
          background-position: center;
          margin-left: 0.8rem;
          font-size: 0;
          padding: 0;
          width: 45px;
          height: 45px;
          border-radius: 50%;
          box-shadow: $box_shadow01;
          border: solid 1px $main_color;
          cursor: pointer;
          box-sizing: border-box;
          &:hover {
            transition: $transtion01;
            box-shadow: $box_shadow02;
          }
          &_menu {
            &.active {
              display: block;
            }
            z-index: 999;
            display: none;
            text-align: left;
            color: #555;
            font-size: 14px;
            position: absolute;
            top:75px;
            right:90px;
            ul {
              box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
              background-color: #fff;
              border-radius: 8px;
              padding: 1rem 0;
              font-weight: normal;
              li {
                font-size: 14px;
                padding: 6px 12px;
                display: flex;
                align-items: center;
                p {
                  margin-left: 1rem;
                }
                i {
                  color: $sub_color;
                }
                &:hover {
                  background-color: #eee;
                  transition: $transtion01;
                }
              }
            }
          }
        }
        .contact {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          margin: 0;
          margin-left: 0.8rem;
          border-radius: 50%;
          font-size: 24px;
          padding: 0;
          color: $main_color;
          font-size: 17px
        }
        .submit {
          display: none;
          align-items: center;
          margin-left: 0.8rem;
          p {
            margin-left: 6px;
          }
        }
      }
    }
  }
}
</style>
