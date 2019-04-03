<template lang="html">
  <div class="camp_member">
    <h3>このキャンプのメンバー（{{ users.length }}）</h3>
    <ul>
      <li v-for="user in users">
        <nuxt-link :to="{ name: 'user-id' , params: { id: user.node.id }}">
          <div class="member">
            <div class="member_icon" v-if="user.node.logo" :style="{ 'background-image' : 'url(https://media.tento.app/' + user.node.logo + ')' }"></div>
            <div class="member_icon empty_icon" v-if="!user.node.logo"></div>
            <div class="member_text">
              <p class="member_text_name">{{user.node.username}}</p>
              <!-- <p class="member_text_position">{{ user.node.position }}</p> -->
            </div>
          </div>
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    users:Array,
  },
}
</script>

<style lang="scss">
@import '~/assets/style/_color.scss';
.camp_member {
  padding: 2rem 0 1rem;
  h3 {
    font-size: 1rem;
    color: $black02;
    margin-bottom: 1rem;
  }
  ul {
    display: flex;
    flex-wrap: wrap;
    li {
      cursor: pointer;
      .empty_icon {
        background-image: url('../../static/icon_empty.png');
      }
      .member {
        margin-right: 1rem;
        margin-bottom: 1rem;
        position: relative;
        & :hover + .member_text {
          display: block !important;
        }
        &_icon {
          width: 50px;
          height:50px;
          margin: 0 auto 0.5rem;
          border-radius: 50%;
          background-color: #f0f0f0;
          background-position: center;
          background-size: cover;
          border: $border01;
        }
        &_text {
          position: absolute;
          bottom: -45px;
          left: 50%;
          transform: translate(-50%,0);
          text-align: center;
          background-color: $backround_color01;
          padding: 0.5rem 0.8rem;
          display: none;
          &:after {
            content: "";
            position: absolute;
            top: -20px;
            left: 50%;
            transform: translate(-50%,0);
            border: 10px solid transparent;
            border-bottom: 10px solid $backround_color01;
          }
          &_name {
            font-size: 0.8rem;
            font-weight: bold;
            white-space: pre-line;
            color: $black01;
          }
          &_position {
            font-size: 14px;
            color: $black02;
          }
        }
      }
    }
  }
}
</style>
