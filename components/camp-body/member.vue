<template lang="html">
  <div class="camp_member">
    <h3>このキャンプのメンバー（{{ users.length }}）</h3>
    <ul>
      <li v-for="user in users">
        <div class="member">
          <div class="member_icon" :style="{ 'background-image' : 'url(https://media.tento.app/' + user.node.logo + ')' }"></div>
          <div class="member_text">
            <p class="member_text_name">{{user.node.username}}</p>
            <p class="member_text_position">{{ user.node.position }}</p>
          </div>
        </div>
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
</style>
