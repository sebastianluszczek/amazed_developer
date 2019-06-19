<template>
  <div class="navigation">
    <nav>
      <ul class="nav-list">
        <nuxt-link to="/">Home</nuxt-link>
        <nuxt-link to="/about">About</nuxt-link>
        <nuxt-link to="/blog">Blog</nuxt-link>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: "app_nav"
};
</script>

<style lang="scss">
.navigation {
  background-color: #fff;
  .nav-list {
    position: fixed;
    top: 20px;
    right: 40px;

    a {
      padding: 5px 10px;
      margin: 0 10px;
      text-decoration: none;
      color: #333;
      transition: 0.3s;
      border-bottom: 1px solid #fff;

      &.nuxt-link-active {
        border-bottom: 1px solid #333;
      }
    }
  }
}
</style>
