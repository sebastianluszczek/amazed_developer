<template>
  <div class="markdown-blog">
    <AppNav/>
    <main>
      <nuxt/>
      <AppFooter/>
    </main>
  </div>
</template>

<script>
import AppNav from "@/components/AppNav";
import AppFooter from "@/components/AppFooter";

export default {
  components: {
    AppNav, AppFooter
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
    
    .footer {
      background-color: #333;
      padding: 2rem 2rem 1rem;
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
