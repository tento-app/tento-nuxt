<template lang="html">
  <div class="account_menu" id="account_menu">
    <ul>
      <nuxt-link to="/create" class="sp">
        <li><i class="fas fa-campground"></i>
          <p>New camp</p>
        </li>
      </nuxt-link>
      <nuxt-link to="/account">
        <li><i class="far fa-user"></i>
          <p>マイページ</p>
        </li>
      </nuxt-link>
      <nuxt-link to="/create">
        <li><i class="far fa-bookmark"></i>
          <p>保存したキャンプ</p>
        </li>
      </nuxt-link>
      <a href="#">
        <li><i class="fas fa-sign-out-alt"></i>
          <p>ログアウト</p>
        </li>
      </a>
    </ul>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss">
@import '~/assets/style/_color.scss';
@media (min-width:840px) {
.account_menu {
  z-index: 999;
  text-align: left;
  color: #555;
  font-size: 14px;
  position: absolute;
  top:75px;
  right:170px;
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

@media screen and (min-width: 500px) and (max-width: 840px) {
  .account_menu {
    &.active {
      display: block;
    }
    z-index: 999;
    text-align: left;
    color: #555;
    font-size: 14px;
    position: absolute;
    top:75px;
    right:170px;
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
@media screen and (min-width: 0px) and (max-width: 500px) {
  .account_menu {
    z-index: 999;
    text-align: left;
    color: #555;
    font-size: 14px;
    position: absolute;
    top:75px;
    right:40px;
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
</style>
