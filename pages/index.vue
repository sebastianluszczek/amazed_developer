<template>
  <div class="container home">
    <div>
      <h1 class="title">Home</h1>
      <h2 class="subtitle">My nuxt.js portfolio project with simple markdown blog</h2>
      <p>{{blogs}}</p></div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        blogs: null
      }
    },
    fetch({store, redirect}) {
      this.blogs = store.state.bloglist();
      redirect(301, '/portfolio')
    }
  }
</script>

<style>
</style>
