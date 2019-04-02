<template lang="html">
  <div class="camp_member">
    <h3>このキャンプのメンバー（{{ users.length }}）</h3>
    <ul>
      <li v-for="user in users">
        <nuxt-link :to="{ name: 'user-id' , params: { id: user.node.id }}">
          <div class="member">
            <div class="member_icon" :style="{ 'background-image' : 'url(https://media.tento.app/' + user.node.logo + ')' }"></div>
            <div class="member_text">
              <!-- <p class="member_text_name">{{user.node.username}}</p> -->
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
      .member {
        margin-right: 1rem;
        margin-bottom: 1rem;
        width: 50px;
        &_icon {
          width: 50px;
          height:50px;
          margin: 0 auto 0.5rem;
          border-radius: 50%;
          background-color: #f0f0f0;
          background-position: center;
          background-size: cover;
        }
        &_text {
          text-align: center;
          &_name {
            font-size: 0.7rem;
            font-weight: bold;
            white-space: pre-line;
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
