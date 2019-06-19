<template>
  <div class="blog container">
    <h1>Blog</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto tempore ratione perspiciatis aliquam. Natus nostrum perspiciatis quisquam quod totam non recusandae molestias nemo, saepe velit, iste hic officiis aliquam architecto blanditiis reiciendis nam ut tempora mollitia reprehenderit impedit! Iste ad, aspernatur ratione quidem dolore placeat rerum! Rem quibusdam eos sequi mollitia quia vitae! Perferendis, exercitationem minima. Quibusdam nisi possimus architecto vel quam voluptate quae inventore quaerat ullam enim molestiae odio alias iusto impedit obcaecati, recusandae magnam maiores nostrum facilis? Veritatis nemo illo distinctio amet, natus repellat quas minus tempore laborum tenetur quibusdam aut unde quis voluptate a rem, laudantium culpa!</p>
    <div v-for="(post,key) in bloglist" :key="key" class="blog-post">
      <div v-if="post.cover_image" class="column is-3-desktop">
        <nuxt-link :to="`/blog/${post.slug}`"></nuxt-link>
      </div>
      <div class="column">
        <p class="title">
          <nuxt-link :to="`/blog/${post.slug}`">{{ post.title }}</nuxt-link>
        </p>
        <p class="subtitle">{{ post.description }}</p>
        <div class="level">
          <p class="small level-left">Published on {{ post.ctime }}</p>
          <p class="subtitle level-right">
            <nuxt-link :to="`/blog/${post.slug}`">Keep reading</nuxt-link>
          </p>
        </div>
      </div>
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
    border: 1px solid;
  }
}
</style>
