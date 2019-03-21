<template id="">
<div class="slide">

  <div class="swiper-container" v-swiper:mySwiper='swiperOption'>
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="project in projects" :key="project.node.id" :style="{ 'background-image': 'url(' + project.node.header + ')' }">

        <nuxt-link :to="{ name: 'camp-id' , params: { id: project.node.id }}">
          <!-- card content-->
          <div class="slide_item">
            <div class="slide_item_user">
              <div class="slide_item_user_img" :style="{ 'background-image': 'url(' + project.node.user.logo + ')' }"></div>
              <div class="">
                <p class="slide_item_user_name">{{ project.node.user.username }}</p>
                <p class="slide_item_user_position">webエンジニア</p>
              </div>
            </div>
            <h4>{{ project.node.name }}</h4>
          </div>
        </nuxt-link>
      </div>
    </div>

    <div class="swiper-pagination"></div>
    <div class="swiper-button-next">
      <svg xmlns="http://www.w3.org/2000/svg" width="78" height="78" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18l6-6-6-6"/></svg>
    </div>
    <div class="swiper-button-prev">
      <svg xmlns="http://www.w3.org/2000/svg" width="78" height="78" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
    </div>
  </div>
</div>
</template>
<script>
export default {
  props: {
    projects: Array,
  },
    data () {
        return {
            swiperOption: {
                slidesPerView: 'auto',
                centeredSlides: true,
                spaceBetween: 0,
                loop: true,
                pagination: {
                  el: '.swiper-pagination',
                  clickable: true
                },
                navigation: {
                  nextEl: '.swiper-button-next',
                  prevEl: '.swiper-button-prev'
                }
            }
        }
    }
}
</script>

<style lang="scss" scoped>
@import "~/assets/style/_color.scss";
@media (min-width:840px) {

    .slide {
        margin: 60px auto 0;
        padding: 0 30px;
        max-width: 840px;
        .swiper-container {
            padding: 0 30px;
            border-radius: 12px;
            overflow: hidden;
            font-size: 0;
            box-shadow: $box_shadow_card;
            margin: 0 auto;
            background-color: $sub_color;
            .swiper-wrapper {
                .swiper-slide {
                    margin: 0 !important;
                    width: 60%;
                    height: 280px;
                    margin: 0 auto;
                    a {
                        display: block;
                        width: 100%;
                        height: 100%;
                        background-color: rgba(0, 0, 0, 0.3);
                    }
                    .slide_item {
                        color: #fff;
                        display: flex;
                        flex-direction: column;
                        height: 100%;
                        h4 {
                            margin-top: auto;
                            font-size: 18px;
                            padding: 2.5rem 1.4rem;
                        }
                        &_user {
                            padding: 1.2rem 1.4rem;
                            display: flex;
                            align-items: center;
                            &_img {
                                background-image: url("../static/icon.jpg");
                                background-position: center;
                                background-size: cover;
                                background-repeat: no-repeat;
                                width: 50px;
                                height: 50px;
                                border-radius: 50%;
                                margin-right: 1rem;
                            }
                            &_name {
                                font-size: 14px;
                                font-weight: bold;
                            }
                            &_position {
                                font-size: 12px;
                            }
                        }
                    }
                }
            }
            .swiper-button-next{
              background-image: none;
              top: 45%;
              right: 35px;
            }
            .swiper-button-prev{
              background-image: none;
              top: 45%;
              left: -15px;
            }
            .swiper-pegination {
                background: none;
                font-size: 32px;
                color: #fff;
            }
                .swiper-pagination-bullet {
                    background-color: #fff;
                    opacity: 1;
                }
                .swiper-pagination-bullet-active {
                    background-color: $main_color;
                }
          }
        }
}
@media screen and (min-width: 500px) and (max-width: 840px) {

    .slide {
        margin-top: 60px;
        padding: 0 30px;
        .swiper-container {
            max-width: 900px;
            border-radius: 12px;
            overflow: hidden;
            font-size: 0;
            box-shadow: $box_shadow_card;
            margin: 0 auto;
            background-color: $sub_color;
            .swiper-wrapper {
                .swiper-slide {
                    margin: 0 !important;
                    width: 80%;
                    height: 280px;
                    margin: 0 auto;
                    a {
                        display: block;
                        width: 100%;
                        height: 100%;
                        background-color: rgba(0, 0, 0, 0.3);
                    }
                    .slide_item {
                        color: #fff;
                        display: flex;
                        flex-direction: column;
                        height: 100%;
                        h4 {
                            margin-top: auto;
                            font-size: 18px;
                            padding: 2.5rem 1rem;
                        }
                        &_user {
                            padding: 1rem;
                            display: flex;
                            align-items: center;
                            &_img {
                                background-image: url("../static/icon.jpg");
                                background-position: center;
                                background-size: cover;
                                background-repeat: no-repeat;
                                width: 50px;
                                height: 50px;
                                border-radius: 50%;
                                margin-right: 1rem;
                            }
                            &_name {
                                font-size: 14px;
                                font-weight: bold;
                            }
                            &_position {
                                font-size: 12px;
                            }
                        }
                    }
                }
            }
            .swiper-button-next{
              background-image: none;
              top: 45%;
              right: 35px;
            }
            .swiper-button-prev{
              background-image: none;
              top: 45%;
              left: -15px;
            }
            .swiper-pegination {
                background: none;
                font-size: 32px;
                color: #fff;
            }
                .swiper-pagination-bullet {
                    background-color: #fff;
                    opacity: 1;
                }
                .swiper-pagination-bullet-active {
                    background-color: $main_color;
                }
        }
    }

}
@media screen and (min-width: 0px) and (max-width: 500px) {

    .slide {
        .swiper-container {
            max-width: 900px;
            overflow: hidden;
            font-size: 0;
            margin: 0 auto;
            background-color: $sub_color;
            .swiper-wrapper {
                .swiper-slide {
                    margin: 0 !important;
                    width: 80%;
                    height: 280px;
                    margin: 0 auto;
                    a {
                        display: block;
                        width: 100%;
                        height: 100%;
                        background-color: rgba(0, 0, 0, 0.3);
                    }
                    .slide_item {
                        color: #fff;
                        display: flex;
                        flex-direction: column;
                        height: 100%;
                        h4 {
                            margin-top: auto;
                            font-size: 18px;
                            padding: 2.5rem 30px;
                        }
                        &_user {
                            padding: 1rem 30px;
                            display: flex;
                            align-items: center;
                            &_img {
                                background-image: url("../static/icon.jpg");
                                background-position: center;
                                background-size: cover;
                                background-repeat: no-repeat;
                                width: 50px;
                                height: 50px;
                                border-radius: 50%;
                                margin-right: 1rem;
                            }
                            &_name {
                                font-size: 14px;
                                font-weight: bold;
                            }
                            &_position {
                                font-size: 12px;
                            }
                        }
                    }
                }
            }
            .swiper-button-next{
              background-image: none;
              top: 45%;
              right: 35px;
              svg{
                stroke-width:1.5
              }
            }
            .swiper-button-prev{
              background-image: none;
              top: 45%;
              left: -15px;
              svg{
                stroke-width:1.5
              }
            }
            .swiper-pegination {
                background: none;
                font-size: 32px;
                color: #fff;
            }
                .swiper-pagination-bullet {
                    background-color: #fff;
                    opacity: 1;
                }
                .swiper-pagination-bullet-active {
                    background-color: $main_color;
                }
        }
    }

}
</style>
