<template>
  <div class="container home">
    <div>
      <h1 class="title">Home</h1>
      <h2 class="subtitle">My nuxt.js portfolio project with simple markdown blog</h2>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa, minima accusamus. Nostrum optio assumenda eos magni alias placeat ad error modi autem labore. Repellat error provident expedita nam aliquam ea rerum, iure officia natus ab, repudiandae rem consequatur placeat animi iusto corrupti accusamus vitae quo nobis. Expedita, necessitatibus similique quia atque inventore doloremque facere, eaque incidunt labore, at suscipit quae fugit? Commodi alias impedit distinctio nobis corporis ea placeat minus soluta voluptatibus quis? Aut aspernatur fugiat sed distinctio, obcaecati temporibus doloribus perferendis quasi dolorem? Dolorum consequatur temporibus adipisci ea doloribus libero aut voluptate facilis rerum. Beatae rem totam cumque atque!</p>
    </div>
  </div>
</template>

<script>
  export default {
    fetch ({ params, redirect }) {
      redirect(301, '/about/')
    },
    computed: {
      projects() {
        return this.$store.state.projectlist;
      }
    }
  }
</script>

<style>
</style>
