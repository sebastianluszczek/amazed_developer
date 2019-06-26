<template>
  <div class="navigation">
    <nav>
      <ul class="nav-list">
        <nuxt-link to="/portfolio">Portfolio</nuxt-link>
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
  position: fixed;
  top: 20px;
  right: 40px;
  .nav-list {
    a {
      padding: 5px 10px;
      margin: 0 10px;
      text-decoration: none;
      color: #333;
      transition: 0.3s;
      border-bottom: 1px solid #fff;

      &.nuxt-link-exact-active {
        border-bottom: 1px solid #333;
      }
    }
  }
}
</style>
