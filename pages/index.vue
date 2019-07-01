<template>
  <div class="container home">
    <div>
      <h1 class="title">Home</h1>
      <h2 class="subtitle">My nuxt.js portfolio project with simple markdown blog</h2>
     </div>
  </div>
</template>

<script>
  export default {
    fetch({store, redirect}) {
      redirect(301, '/portfolio')
    },
    computed: {
      projectList() {
        return this.$store.state.projectlist;
      }
    }
  }
</script>

<style>
</style>
