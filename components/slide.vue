<template id="">
<div class="slide">

  <div class="swiper-container" v-swiper:mySwiper='swiperOption'>
    <div class="swiper-wrapper">
      <div class="swiper-slide background_img_01">
        <a href="#">
          <div class="slide_item">
            <div class="slide_item_user">
              <div class="slide_item_user_img">
              </div>
              <div class="">
                <p class="slide_item_user_name">ジョージハリスン</p>
                <p class="slide_item_user_position">webエンジニア</p>
              </div>
            </div>
            <h4>webデザイナーで食事会しませんか？？</h4>
          </div>
        </a>
      </div>
      <div class="swiper-slide background_img_02">
        <a href="#">
          <div class="slide_item">
            <div class="slide_item_user">
              <div class="slide_item_user_img">
              </div>
              <div class="">
                <p class="slide_item_user_name">ジョージハリスン</p>
                <p class="slide_item_user_position">webエンジニア</p>
              </div>
            </div>
            <h4>webデザイナーで食事会しませんか？？</h4>
          </div>
        </a>
      </div>
      <div class="swiper-slide background_img_03">
        <a href="#">
          <div class="slide_item">
            <div class="slide_item_user">
              <div class="slide_item_user_img">
              </div>
              <div class="">
                <p class="slide_item_user_name">ジョージハリスン</p>
                <p class="slide_item_user_position">webエンジニア</p>
              </div>
            </div>
            <h4>webデザイナーで食事会しませんか？？</h4>
          </div>
        </a>
      </div>
      <div class="swiper-slide background_img_04">
        <a href="#">
          <div class="slide_item">
            <div class="slide_item_user">
              <div class="slide_item_user_img">
              </div>
              <div class="">
                <p class="slide_item_user_name">ジョージハリスン</p>
                <p class="slide_item_user_position">webエンジニア</p>
              </div>
            </div>
            <h4>webデザイナーで食事会しませんか？？</h4>
          </div>
        </a>
      </div>
    </div>

    <div class="swiper-pagination"></div>

    <div class="swiper-button-next"></div>
    <div class="swiper-button-prev"></div>
  </div>
</div>
</template>
<script>
export default {
    data() {
      return {
        swiperOption: {
          slidesPerView: 'auto',
          centeredSlides: true,
          spaceBetween: 30,
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          }
        }
      }
    }
  }
</script>

<style lang="scss">
@import "~/assets/style/_color.scss";
@media (min-width:840px) {

    .slide {
        margin-top: 60px;
        padding: 0 30px;
        .swiper-container {
            max-width: 840px;
            border-radius: 12px;
            overflow: hidden;
            font-size: 0;
            box-shadow: $box_shadow_card;
            margin: 0 auto;
            background-color: $sub_color;
            .swiper-wrapper {
                .swiper-slide {
                    margin: 0 !important;
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
            .swiper-button {
                background: none;
                font-size: 32px;
                color: #fff;
            }
            .swiper-pagination {
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
            .swiper-button-next {
                background: none;
                font-size: 32px;
                color: #fff;
            }
            .swiper-pagination {
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
            .swiper-button {
                background: none;
                font-size: 32px;
                color: #fff;
            }
            .swiper-pagination {
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

}
</style>
