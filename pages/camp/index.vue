<template>
  <section>
    <link href="https://fonts.googleapis.com/css?family=Noto+Sans+JP|Rubik" rel="stylesheet">
    <Header />
    <div class="main">
      <div class="search_cover">
        <div class="search">
          <input v-model="search" placeholder="フリーワード検索" type="text" @keyup.enter="say" @keypress="setCanMessageSubmit">
          <div class="hit_num">
            <p><span>{{ allProjects.length }}</span>件ヒット</p>
          </div>
        </div>
      </div>
      <div class="card_search">
        <card :projects="allProjects" :hit_num='allProjects.length'/>
        <div class="result" v-if="allProjects.length < 1">
          <div class="img">
            <img src="../../static/question.svg" alt="">
          </div>
          <p>検索結果がありませんでした</p>
        </div>
      </div>
        <cardLoader v-if="endCursor" @readmore="readmore" />
    </div>
    <Footer />
  </section>
</template>

<script>
import searchProjectsGql from '~/graphql/query/searchProjects.gql'

import cardLoader from '~/components/card_loader.vue';
import card from '~/components/card.vue';
import Header from '~/layouts/Header.vue';
import Footer from '~/layouts/Footer.vue';

export default {
  components: {
    card,
    cardLoader,
    Header,
    Footer,
  },
  middleware: 'noauthenticated',
  data () {
    return {
      tags:[],
      options:[],
      data: null,
      search: "",
      canMessageSubmit: false
    }
  },
  asyncData (context) {
    return context.app.apolloProvider.defaultClient.query({
      query: searchProjectsGql,
      variables: {
        page_size: 6,
        endCursor: "",
        // startAt_Gte: "1900-11-11T11:11:11+11:11",
        // startAt_Lte:"9999-12-23T11:23:23+23:23"
      }
      }).then(({ data }) => {
          return {
            allProjects: data.allProjects.edges,
            endCursor: data.allProjects.pageInfo.endCursor
            }
      }).catch((e) => {
        console.log(e)
        context.error({ statusCode: 404, message: 'ページが見つかりません' })
    })
  },
  methods: {
    readmore: function() {
      this.$apollo.query({
      query: searchProjectsGql,
      variables: {
        page_size: 6,
        endCursor: this.endCursor,
        name_Icontains: this.search
      }
      }).then(({ data }) => {
          // do what you want with data
          data.allProjects.edges.forEach((project) => {
            this.allProjects.push(project)
          })
          this.endCursor = data.allProjects.pageInfo.endCursor
        })
    },
    setCanMessageSubmit() {
      this.canMessageSubmit = true
    },
    say: function() {
      if (!this.canMessageSubmit) {
        return
      }

      this.$apollo.query({
      query: searchProjectsGql,
      variables: {
        page_size: 6,
        endCursor: "",
        name_Icontains: this.search
      }
      }).then(({ data }) => {
          // do what you want with data
          console.log(data)
          this.allProjects = data.allProjects.edges
          this.endCursor = data.allProjects.pageInfo.endCursor
        })

      this.message = ''
      this.canMessageSubmit = false
    },
  }
}
</script>

<style lang='scss' scoped>
@import '~/assets/style/base.scss';
@import '~/assets/style/btn.scss';
@import '~/assets/style/_color.scss';

@media (min-width: 500px) {
.main {
  margin: 0 0 5rem;
}

.search_num {
  display: block;
}

.item {
  margin: 0 auto;
}

.search_cover {
  max-width: 840px;
  margin: 3rem auto 0;
  padding: 0 30px;
}

.search {
  display: flex;
  align-items: center;
  padding: 0.8rem 1rem;
  background-color: #fff;
  input {
    outline: 0;
    border: 0;
    border-bottom: 1px solid $black03;
    font-size: 14px;;
    padding: 0.2rem 0.2rem 0.5rem;
    border-radius: 0;
    background-color: transparent;
  }
  .hit_num {
    margin-left: auto;
    display: flex;
    p {
      background-color: $black04;
      margin-left: auto;
      padding: 0.5rem 1rem;
      border-radius: 99px;
      font-size: 14px;
    }
    span {
      font-weight: bold;
      color: $main_color;
      font-size: 1.5rem;
    }
  }
}

.result {
  max-width: 840px;
  margin: 0 auto;
  padding: 0 30px;
  .img {
    max-width: 300px;
    margin: 0 auto;
    img {
      width: 100%;
    }
  }
  p {
    text-align: center;
    font-weight: bold;
  }
}

}
@media screen and (min-width: 0px) and (max-width: 500px) {
  .main {
    margin: 0 0 5rem;
  }

  .search_num {
    display: block;
  }

  .item {
    margin: 0 auto;
  }

  .search_cover {
    max-width: 840px;
    margin: 3rem auto 0;
    padding: 0 15px;
  }

  .search {
    display: flex;
    align-items: center;
    padding: 0.8rem 1rem;
    background-color: #fff;
    input {
      outline: 0;
      border: 0;
      border-bottom: 1px solid $black03;
      font-size: 14px;;
      padding: 0.2rem 0.2rem 0.5rem;
      background-color: transparent;
      border-radius: 0;
    }
    .hit_num {
      margin-left: auto;
      display: flex;
      p {
        background-color: $black04;
        margin-left: auto;
        padding: 0.5rem 1rem;
        border-radius: 99px;
        font-size: 14px;
      }
      span {
        font-weight: bold;
        color: $main_color;
        font-size: 1.3rem;
      }
    }
  }

  .result {
    max-width: 840px;
    margin: 0 auto;
    padding: 0 30px;
    .img {
      max-width: 300px;
      margin: 0 auto;
      img {
        width: 100%;
      }
    }
    p {
      text-align: center;
      font-weight: bold;
    }
  }
}


</style>
