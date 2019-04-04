<template lang="html">
  <section>
    <div class="camp_setting_background">
      <div class="camp_setting">
        <h1 class="camp_body_text_title">{{ title }}</h1>
        <div class="user">
          <user :background_img_url="host_user.logo" :name="host_user.username" :position="host_user.position" :id="host_user.id" />
        </div>
        <joinbtn :title ='title' :project_id="project_id" class='sp'/>
        <CampMember :users="users" class='pc'/>

        <div class="select sp">
          <div class="select_header">
            <div class="" v-on:click="selectmember" :class="{ info_toggle : info_select }">
              <p>Camp情報</p>
            </div>
            <div class="" v-on:click="selectinfo" :class="{ member_toggle: member_select }">
              <p>参加メンバー</p>
            </div>
          </div>
          <div class="info">
            <ul class="setting" :class="{ info_display : !info_select }">
              <li v-if="place">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ccc" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="10" r="3"/><path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z"/></svg>
                <p>{{ place }}</p>
              </li>
              <li v-if="time">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ccc" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                <p>{{ $dayjs(time).format('YYYY年MM月DD日 HH:ss') }}～</p>
              </li>
              <li v-if="contact"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ccc" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                <p>{{ contact }}</p>
              </li>
              <li class='pc'>
                <joinbtn :title ='title' :project_id="project_id" />
              </li>
            </ul>
          </div>
          <div class="member_list" :class="{ member_display: !member_select }">
            <CampMember :users="users"/>
          </div>
        </div>
        
        <div class="">
          <ul class="setting pc">
            <li v-if="place">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ccc" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="10" r="3"/><path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z"/></svg>
              <p>{{ place }}</p>
            </li>
            <li v-if="time">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ccc" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
              <p>{{ $dayjs(time).format('YYYY年MM月DD日 HH:ss') }}</p>
            </li>
            <li v-if="contact"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ccc" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              <p>{{ contact }}</p>
            </li>
            <li class='pc'>
              <joinbtn :title ='title' :project_id="project_id" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>

</template>

<script>
import CampMember from '~/components/camp-body/member.vue';
import joinbtn from '~/components/camp-body/joinbtn.vue';
import user from '~/components/user.vue';
import { StringDecoder } from 'string_decoder';
export default {
  components :{
    CampMember,
    user,
    joinbtn
  },
  props: {
    project_id: String,
    title: String,
    place: String,
    time: String,
    contact: String,
    background_img_url: String,
    host_user: Object,
    users:Array,
  },
  data() {
    return {
      member_select:false,
      info_select:true,
    }
  },
  methods: {
    selectinfo() {
      this.info_select=false
      this.member_select=true
    },
    selectmember() {
      this.info_select=true
      this.member_select=false
    },
  }
}
</script>

<style lang="scss">
@import '~/assets/style/_color.scss';

@media (min-width:500px) {
  .sp {
    display: none !important;
  }
  .camp_setting {
    max-width: 840px;
    margin: 0 auto;
    padding: 40px 30px 0;
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
        margin-right: 0rem;
      }
    }
  }
}

@media screen and (min-width: 0px) and (max-width: 500px) {
  .pc {
    display: none !important;
  }
  .camp_setting {
    max-width: 840px;
    margin: 0 auto;
    padding: 2rem 0px 0;
    h1{
      margin-bottom: 15px;
      color: $black01;
      font-size: 1.1rem;
      padding: 0 15px;
    }
    .user {
      padding: 0 15px;
    }
    .select {
      margin-top: 2rem;

      .info_display {
        display: none;
      }
      .member_display {
        display: none;
      }
      .select_header {
        display: flex;
        justify-content: space-between;
        div {
          width: 50%;
          text-align: center;
          padding: 0.5rem;
          font-size: 13px;
          cursor: pointer;
          background-color: $black04;
          border-bottom: solid 1px rgba(0,0,0,0.1);
          color: $black02;
        }
        .info_toggle {
            color: $main_color;
            background-color: $backround_color01;
            background-color: #fff;
            border-top: solid 2px $main_color;
            border-bottom: solid 1px rgba(0,0,0,0);
            border-right: solid 1px rgba(0,0,0,0.1);
        }
        .member_toggle {
          color: $main_color;
          background-color: $backround_color01;
          background-color: #fff;
          border-top: solid 2px $main_color;
          border-bottom: solid 1px rgba(0,0,0,0);
          border-left: solid 1px rgba(0,0,0,0.1);
        }
      }
      .member_list {
        background-color: $backround_color01;
        background-color: #fff;
        border-bottom: solid 1px rgba(0,0,0,0.1);
        // border-top: $border01;
        padding: 0.8rem 15px;
      }
    }
  }
  .setting {
    background-color: $black04;
    background-color: $backround_color01;
    background-color: #fff;
    border-bottom: solid 1px rgba(0,0,0,0.1);
    // border-top: $border01;
    padding: 0.8rem 15px;
    li {
      display: flex;
      align-items: center;
      font-size: 14px;
      padding: 0.25rem 0;
      p {
        margin-left: 0.5rem;
      }
    }
  }
}

</style>
