<template>
  <section>
    <Header />
    <div class="main">
      <CampBody />
      <div class="">
        <chat />
      </div>
    </div>
    <Footer />
  </section>
</template>

<script>
import projectGql from '~/graphql/query/project.gql'
export default {
  async asyncData({ payload, params }) {
    // params.id
     this.$apollo.query({
       query: projectGql,
       variables: {
         id: params.id
         }
       }).then(({ data }) => {
          // do what you want with data
          console.log(data.project.name)
          return { project: data.project }
        })
  }
}
</script>
