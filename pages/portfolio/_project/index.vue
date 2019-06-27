<template>
  <div :key="$route.params.post">
    <div class="blog-container">
      <div class="baner">
        <div class="title-half">
          <div class="title">{{ attributes.title }}</div>
        </div>
        <div class="image-half">
          <img :src="attributes.img" class="image">
        </div>
      </div>

      <div v-html="content" class="blog-content content markdown-body"></div>
    </div>
  </div>
</template>

<script>
  // Let's require the needed modules
  const fm = require("front-matter");
  var md = require("markdown-it")({
    html: true,
    linkify: true,
    typographer: true
  }).use(require("markdown-it-highlightjs"), { auto: true });

  export default {
    layout: "markdown-blog",
    async asyncData({ params }) {
      // We read the markdown file by looking at the `page` parameter
      // in the URL and searching for a markdown file with that name in
      // the articles directory
      console.log(params);
      const fileContent = await import(`@/projects/${params.project}.md`);

      // We process the raw output through front-matter
      // (markdownit was giving me garbled results)
      let res = fm(fileContent.default);
      console.log("Attributes", res.attributes);
      return {
        // attributes will be an object containing the markdown metadata
        attributes: res.attributes,
        // content will contain the body of the markdown file,
        // rendered in HTML via the `markdownit` class
        content: md.render(res.body)
      };
    }
  };
</script>

<style lang="scss">
  .blog-container {
    width: 70%;
    margin: 6rem auto;

    .baner {
      width: 100%;
      height: 500px;
      display: grid;
      grid-template-columns: repeat(2, 1fr);

      .title-half {
        .title {
          font-size: 52px;
          margin-bottom: 50px;
        }
      }

      .image-half {
        position: relative;

        .image {
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
        }
      }
    }
  }
</style>
