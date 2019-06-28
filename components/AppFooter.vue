<template>
  <div class="footer">
    <div class="socials">
      <a href="https://www.facebook.com/luszczeksebastian" target="_blank"><fa :icon="['fab', 'facebook']"/></a>
      <a href="https://twitter.com/AmazedBear" target="_blank"><fa :icon="['fab', 'twitter']"/></a>
      <a href="https://github.com/sebastianluszczek" target="_blank"><fa :icon="['fab', 'github']"/></a>
      <a href="https://www.linkedin.com/in/luszczeksebastian/" target="_blank"><fa :icon="['fab', 'linkedin']"/></a>
    </div>
    <p>
      Coded by Sebastian Łuszczek with
      <a href="https://vuejs.org/" target="_blank">Vue.js</a> +
      <a href="https://nuxtjs.org/" target="_blank">Nuxt.js</a>
    </p>
    <p>
      Hosted on
      <a href="https://www.netlify.com/">Netlify</a>
    </p>
  </div>
</template>

<script>
    export default {
        name: "AppFooter"
    }
</script>

<style lang="scss">
  .footer {
    bottom: 10px;
    left: 0;
    color: #fff;
    text-align: center;

    .socials {
      font-size: 30px;

      svg {
        margin: 0 20px;
      }
    }

    a {
      text-decoration: none;
      color: #fff;
      font-weight: bold;
    }
  }

</style>
