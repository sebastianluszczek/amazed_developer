<template>
  <div class="blog container">
    <h1 class="title">Blog</h1>
    <p>W tym miejscu będzie pojawiało się coś na zasadzie blogu. Podkreślam, że nie będzie to raczej typowy blog (moze
      kiedyś się w niego przekształci jak nabiorę wprawy). Chciałbym aby były to bardziej notatki niedoświadczonego
      programisty. Sytuacja gdzie szukam po repo projektu, który robiłem bardzo niedawno, bo potrzebuję jakiś jego
      fragment, zdaża mi sie bardzo często. Stad w tym miejscu mają się znaleźć opisy prostych projektów z informacjami o
      podejściu, wykożystanych technologiach, fragmentami kodu i odnośnikami do repo lub ciekawych zewnętrznych źródeł wiedzy.</p>
    <p>Nauczę się czegoś, to tu się to znajdzie :D</p>

    <div v-for="(post,key) in bloglist" :key="key" class="blog-post">
      <nuxt-link :to="`/blog/${post.slug}`">
        <div v-if="post.cover_image"></div>
        <div class="column">
          <div class="baner">
            <img :src="post.avatar" alt class="baner-img">
          </div>
          <h2 class="post-title">{{ post.title }}</h2>
          <p class="subtitle">{{ post.description }}</p>
          <div class="level">
            <p class="small level-left">Published on {{ post.ctime.toString().slice(0, 24) }}</p>
          </div>
        </div>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: "blog",
    computed: {
      bloglist() {
        return this.$store.state.bloglist;
      }
    },
    created() {
      console.log(this.bloglist);
    }
  };
</script>

<style lang="scss">
  .blog {
    .title {
      margin-top: 3rem;
    }
    .blog-post {
      margin-top: 30px;
      padding: 20px;

      a {
        text-decoration: none;
        color: #333;
      }

      .baner {
        width: 100%;
        height: 200px;
        overflow: hidden;
        position: relative;

        .baner-img {
          width: 100%;
          position: absolute;
          top: 50%;
          left: 0;
          transform: translateY(-50%);
        }
      }
    }
  }
</style>
