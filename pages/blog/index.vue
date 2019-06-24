<template>
  <div class="blog container">
    <h1>Blog</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto tempore ratione perspiciatis aliquam. Natus nostrum perspiciatis quisquam quod totam non recusandae molestias nemo, saepe velit, iste hic officiis aliquam architecto blanditiis reiciendis nam ut tempora mollitia reprehenderit impedit! Iste ad, aspernatur ratione quidem dolore placeat rerum! Rem quibusdam eos sequi mollitia quia vitae! Perferendis, exercitationem minima. Quibusdam nisi possimus architecto vel quam voluptate quae inventore quaerat ullam enim molestiae odio alias iusto impedit obcaecati, recusandae magnam maiores nostrum facilis? Veritatis nemo illo distinctio amet, natus repellat quas minus tempore laborum tenetur quibusdam aut unde quis voluptate a rem, laudantium culpa!</p>

    <div v-for="(post,key) in bloglist" :key="key" class="blog-post">
      <nuxt-link :to="`/blog/${post.slug}`">
        <div v-if="post.cover_image"></div>
        <div class="column">
          <div class="baner">
            <img :src="post.avatar" alt class="baner-img">
          </div>
          <h2 class="title">{{ post.title }}</h2>
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
      return this.$store.state.bloglist.slice(0, this.postsPerPage);
    }
  },
  created() {
    console.log(this.bloglist);
  }
};
</script>

<style lang="scss">
.blog {
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
