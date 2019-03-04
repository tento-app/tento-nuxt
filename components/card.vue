<template id="">
  <div class="content item">
      <div class="cards_list">
        <a href="#" class="card_link">
          <div class="card">
            <div class="card_img background_img_01">
              <p class="card_img_category event">イベント</p>
            </div>
            <div class="card_txt">
              <h4>webデザイナー募集webデザイナー募集webデwebデザイナー募集webデwebデザイナー募集webデ</h4>
              <div class="card_txt_user">
                <div class="card_txt_user_img">
                </div>
                <div class="">
                  <p class="card_txt_user_name">ジョージハリスン</p>
                  <p class="card_txt_user_position">webエンジニア</p>
                </div>
              </div>
            </div>
          </div>
        </a>

        <a href="#" class="card_link">
          <div class="card">
            <div class="card_img background_img_04">
              <p class="card_img_category develop">開発</p>
              <p class="card_img_category join">参加中</p>
            </div>
            <div class="card_txt">
              <h4>webデザイナー募集</h4>
              <div class="card_txt_user">
                <div class="card_txt_user_img">
                </div>
                <div class="">
                  <p class="card_txt_user_name">ジョージハリスン</p>
                  <p class="card_txt_user_position">webエンジニア</p>
                </div>
              </div>
            </div>
          </div>
        </a>

        <a href="#" class="card_link" id='mdeum'>
          <div class="card">
            <div class="card_img background_img_02">
              <p class="card_img_category event">イベント</p>

            </div>
            <div class="card_txt">
              <h4>webデザイナー募集webデザイナー募集webデ</h4>
              <div class="card_txt_user">
                <div class="card_txt_user_img">
                </div>
                <div class="">
                  <p class="card_txt_user_name">ジョージハリスン</p>
                  <p class="card_txt_user_position">webエンジニア</p>
                </div>
              </div>
            </div>
          </div>
        </a>

        <a href="#" class="card_link" id='mdeum'>
          <div class="card">
            <div class="card_img background_img_03">
              <p class="card_img_category event">イベント</p>

            </div>
            <div class="card_txt">
              <h4>webデザイナー募集webデザイナー募集webデ</h4>
              <div class="card_txt_user">
                <div class="card_txt_user_img">
                </div>
                <div class="">
                  <p class="card_txt_user_name">ジョージハリスン</p>
                  <p class="card_txt_user_position">webエンジニア</p>
                </div>
              </div>
            </div>
          </div>
        </a>

        <a href="#" class="card_link" id='mdeum'>
          <div class="card">
            <div class="card_img">
              <p class="card_img_category event">イベント</p>

            </div>
            <div class="card_txt">
              <h4>webデザイナー募集webデザイナー募集webデ</h4>
              <div class="card_txt_user">
                <div class="card_txt_user_img">
                </div>
                <div class="">
                  <p class="card_txt_user_name">ジョージハリスン</p>
                  <p class="card_txt_user_position">webエンジニア</p>
                </div>
              </div>
            </div>
          </div>
        </a>

        <a href="#" class="card_link" id='mdeum'>
          <div class="card">
            <div class="card_img">
              <p class="card_img_category event">イベント</p>
              <p class="card_img_category join">参加中</p>
            </div>
            <div class="card_txt">
              <h4>webデザイナー募集webデザイナー募集webデ</h4>
              <div class="card_txt_user">
                <div class="card_txt_user_img">
                </div>
                <div class="">
                  <p class="card_txt_user_name">ジョージハリスン</p>
                  <p class="card_txt_user_position">webエンジニア</p>
                </div>
              </div>
            </div>
          </div>
        </a>

        <a href="#" class="card_link" id='mdeum'>
          <div class="card">
            <div class="card_img">
              <p class="card_img_category develop">開発</p>

            </div>
            <div class="card_txt">
              <h4>webデザイナー募集webデザイナー募集webデ</h4>
              <div class="card_txt_user">
                <div class="card_txt_user_img">
                </div>
                <div class="">
                  <p class="card_txt_user_name">ジョージハリスン</p>
                  <p class="card_txt_user_position">webエンジニア</p>
                </div>
              </div>
            </div>
          </div>
        </a>

      </div>
      <div class="card_loader">
        <div class="sub_btn more">
          <p>Read More</p>
        </div>
      </div>

    </div>
</template>

<style lang="scss">
@import '~/assets/style/_color.scss';
@media (min-width:840px) {

    .cards_list {
        max-width: 840px;
        display: flex;
        flex-flow: row wrap;
        justify-content: space-between;
        margin: 0 auto;
        .card_link {
            width: 31.5%;
            margin-bottom: 2rem;
            transition: $transtion01;

        }
        .card {
            border-radius: 12px;
            box-shadow: $box_shadow_card;
            transition: $transtion01;
            &:hover {
                box-shadow: $box_shadow_card_hover;
                transition: $transtion01;
            }
            &_img {
                background-image: url("../static/camp_img.jpg");
                border-radius: 12px 12px 0 0;
                width: 100%;
                height: 130px;
                background-position: center;
                background-size: cover;
                background-repeat: no-repeat;
                display: flex;
                align-items: flex-end;
                &_category {
                    font-size: 10px;
                    padding: 8px;
                    text-align: center;
                    min-width: 40px;
                    color: #fff;
                    &.event {
                        background-color: #007D98;
                    }
                    &.develop {
                        background-color: #F49E1B;
                    }
                    &.join {
                        background-color: #FF4B4B;
                    }
                }
            }
            &_txt {
                border-radius: 0 0 12px 12px;
                background-color: #fff;
                padding: 1rem;
                overflow: hidden;
                h4 {
                    font-weight: bold;
                    font-size: 14px;
                    color: #333;
                    max-height: 60px;
                    min-height: 45px;
                    overflow: hidden;
                    display: -webkit-box;
                    -webkit-box-orient: vertical;
                    -webkit-line-clamp: 2;
                    margin-bottom: 1.4rem;
                }
                &_user {
                    display: flex;
                    align-items: center;
                    &_img {
                        background-image: url("../static/icon.jpg");
                        background-position: center;
                        background-size: cover;
                        background-repeat: no-repeat;
                        width: 42px;
                        height: 42px;
                        border-radius: 50%;
                        margin-right: 1rem;
                    }
                    &_name {
                        font-size: 12px;
                        color: #555;
                    }
                    &_position {
                        font-size: 10px;
                        color: #ccc;
                    }
                }
            }

        }
    }

    .card_loader {
        margin-top: 60px;
        text-align: center;
        .more {
            padding: 12px 32px;
        }
    }
}
@media screen and (min-width: 500px) and (max-width: 840px) {
    .cards_list {
        max-width: 840px;
        display: flex;
        flex-flow: row wrap;
        justify-content: space-between;
        margin: 0 auto;
        .card_link {
            width: 48.1%;
            margin-bottom: 2rem;
            transition: $transtion01;
            display: block;
            .card {
                border-radius: 12px;
                box-shadow: $box_shadow_card;
                transition: $transtion01;
                &:hover {
                    box-shadow: $box_shadow_card_hover;
                    transition: $transtion01;
                }
                &_img {
                    background-image: url("../static/camp_img.jpg");
                    border-radius: 12px 12px 0 0;
                    width: 100%;
                    height: 130px;
                    background-position: center;
                    background-size: cover;
                    background-repeat: no-repeat;
                    display: flex;
                    align-items: flex-end;
                    &_category {
                        font-size: 10px;
                        padding: 8px;
                        text-align: center;
                        min-width: 40px;
                        color: #fff;
                        &.event {
                            background-color: #007D98;
                        }
                        &.develop {
                            background-color: #F49E1B;
                        }
                        &.join {
                            background-color: #FF4B4B;
                        }
                    }
                }
                &_txt {
                    border-radius: 0 0 12px 12px;
                    background-color: #fff;
                    padding: 1rem;
                    overflow: hidden;
                    h4 {
                        font-weight: bold;
                        font-size: 14px;
                        color: #333;
                        max-height: 60px;
                        min-height: 45px;
                        overflow: hidden;
                        display: -webkit-box;
                        -webkit-box-orient: vertical;
                        -webkit-line-clamp: 2;
                        margin-bottom: 1.4rem;
                    }
                    &_user {
                        display: flex;
                        align-items: center;
                        &_img {
                            background-image: url("../static/icon.jpg");
                            background-position: center;
                            background-size: cover;
                            background-repeat: no-repeat;
                            width: 38px;
                            height: 38px;
                            border-radius: 50%;
                            margin-right: 1rem;
                        }
                        &_name {
                            font-size: 12px;
                            color: #555;
                        }
                        &_position {
                            font-size: 10px;
                            color: #ccc;
                        }
                    }
                }

            }
        }
    }

    .card_loader {
        margin-top: 60px;
        text-align: center;
        .more {
            padding: 12px 32px;
        }
    }
}
@media screen and (min-width: 0px) and (max-width: 500px) {
    .cards_list {
        max-width: 840px;
        display: flex;
        flex-flow: row wrap;
        justify-content: space-between;
        margin: 0 auto;
        .card_link {
            width: 100%;
            margin-bottom: 2rem;
            transition: $transtion01;
        }
        .card {
            border-radius: 12px;
            box-shadow: $box_shadow_card;
            transition: $transtion01;
            &:hover {
                box-shadow: $box_shadow_card_hover;
                transition: $transtion01;
            }
            &_img {
                background-image: url("../static/camp_img.jpg");
                border-radius: 12px 12px 0 0;
                width: 100%;
                height: 130px;
                background-position: center;
                background-size: cover;
                background-repeat: no-repeat;
                display: flex;
                align-items: flex-end;
                &_category {
                    font-size: 10px;
                    padding: 8px;
                    text-align: center;
                    min-width: 40px;
                    color: #fff;
                    &.event {
                        background-color: #007D98;
                    }
                    &.develop {
                        background-color: #F49E1B;
                    }
                    &.join {
                        background-color: #FF4B4B;
                    }
                }
            }
            &_txt {
                border-radius: 0 0 12px 12px;
                background-color: #fff;
                padding: 1rem;
                overflow: hidden;
                h4 {
                    font-weight: bold;
                    font-size: 16px;
                    color: #333;
                    max-height: 60px;
                    overflow: hidden;
                    display: -webkit-box;
                    -webkit-box-orient: vertical;
                    -webkit-line-clamp: 2;
                    margin-bottom: 1.4rem;
                }
                &_user {
                    display: flex;
                    align-items: center;
                    &_img {
                        background-image: url("../static/icon.jpg");
                        background-position: center;
                        background-size: cover;
                        background-repeat: no-repeat;
                        width: 38px;
                        height: 38px;
                        border-radius: 50%;
                        margin-right: 1rem;
                    }
                    &_name {
                        font-size: 14px;
                        color: #555;
                    }
                    &_position {
                        font-size: 12px;
                        color: #ccc;
                    }
                }
            }

        }
    }

    .card_loader {
        margin-top: 60px;
        text-align: center;
        .more {
            padding: 12px 32px;
        }
    }
}
</style>
<script>
export default {
  data() {
    return {
      "data": {
        "allProjects": {
          "edges": [
            {
              "node": {
                "id": "UHJvamVjdE5vZGU6MQ==",
                "name": "アプリケーション開発RTA",
                "createdAt": "2019-02-14T04:55:36+00:00"
              }
            },
            {
              "node": {
                "id": "UHJvamVjdE5vZGU6Mg==",
                "name": "INIADポスターデザインRTA",
                "createdAt": "2019-02-14T08:04:24.671208+00:00"
              }
            },
            {
              "node": {
                "id": "UHJvamVjdE5vZGU6Mw==",
                "name": "project1-1",
                "createdAt": "2019-02-21T06:43:09.422173+00:00"
              }
            },
            {
              "node": {
                "id": "UHJvamVjdE5vZGU6NA==",
                "name": "ARG cgサークル　説明会",
                "createdAt": "2019-02-27T04:51:42.362104+00:00"
              }
            },
            {
              "node": {
                "id": "UHJvamVjdE5vZGU6NQ==",
                "name": "vueでアプリ開発",
                "createdAt": "2019-02-27T05:05:03.307944+00:00"
              }
            }
          ],
          "pageInfo": {
            "hasNextPage": false,
            "hasPreviousPage": false,
            "startCursor": "YXJyYXljb25uZWN0aW9uOjA=",
            "endCursor": "YXJyYXljb25uZWN0aW9uOjQ="
          }
        }
      }
    }
  }
}
</script>
