<template lang="html">
  <section>
    <div class="camp_setting_background">
      <div class="camp_setting">
        <h1 class="camp_body_text_title">{{ title }}</h1>
        <user :background_img_url="host_user.logo" :name="host_user.username" :position="host_user.position" :id="host_user.id" />
        <!-- <CampMember :users='users'/> -->
        <div class="">
          <ul class="setting">
            <li v-if="place">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ccc" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="10" r="3"/><path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z"/></svg>
              <p>{{ place }}</p>
            </li>
            <li v-if="time">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ccc" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
              <p>{{ $dayjs(time).format('YYYY年MM月DD日') }}</p>
            </li>
            <li v-if="contact"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ccc" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              <p>{{ contact }}</p>
            </li>
            <li>
              <joinbtn :title ='title'/>
            </li>
          </ul>
          <!-- <div class="btn_list pc">
          <a :href="twUrl" target="_blank"><img src="../static/Twitter_Social_Icon_Circle_Color.svg" alt=""> </a>
          <p class="bookmark"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ccc" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg></p>
          <p class="btn_priority ">このキャンプに参加する</p>
        </div> -->
        </div>
      </div>
    </div>
  </section>

</template>

<script>
import CampMember from '~/components/camp-body/member.vue';
import joinbtn from '~/components/camp-body/joinbtn.vue';
import user from '~/components/user.vue';
export default {
  components :{
    CampMember,
    user,
    joinbtn
  },
  props: {
    title: String,
    place: String,
    time: String,
    contact: String,
    background_img_url: String,
    host_user: Object,
    users:Array,
  },
}
</script>

<style lang="scss">
@import '~/assets/style/_color.scss';
.camp_setting {
  max-width: 840px;
  margin: 0 auto;
  padding: 40px 30px;
  h1{
    margin-top: 10px;
    margin-bottom: 20px;
    color: $black01;
    font-size: 1.6rem;
  }
}
.setting {
  margin: 0;
  border-bottom: $border01;
  padding: 1rem 0;
  display: flex;
  align-items: center;
  li {
    display: flex;
    align-items: center;
    font-size: 14px;
    margin-right: 1rem;
    &:last-child {
      margin-left: auto;
    }
  }
}

</style>
