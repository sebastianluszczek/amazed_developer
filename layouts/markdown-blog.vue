<template>
  <div class="markdown-blog">
    <AppLogo></AppLogo>
    <AppNav/>
    <main>
      <nuxt/>
    </main>
  </div>
</template>

<script>
import AppNav from "@/components/AppNav";
import AppLogo from "@/components/AppLogo";

export default {
  components: {
    AppNav,
    AppLogo
  }
};
</script>


<style lang="scss">
.markdown-blog {
  width: 100%;
  overflow: hidden;
  main {
    margin-top: 5rem;
    .container {
      width: 80%;
      margin: 0 auto;
    }
  }
  .markdown-body {
    box-sizing: border-box;
    min-width: 200px;
    max-width: 980px;
    margin: 0 auto;
    padding: 45px;
  }

  @media (max-width: 767px) {
    .markdown-body {
      padding: 15px;
    }
  }
}
</style>
