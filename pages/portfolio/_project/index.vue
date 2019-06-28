<template>
  <div :key="$route.params.post" class="project-page">
    <div class="baner">
      <div class="title-half">
        <div class="title">{{ attributes.title }}</div>
        <div class="links">
          <a :href="attributes.url" v-if="attributes.url" target="_blank"><fa :icon="['fas', 'globe']"/></a>
          <a :href="attributes.git" v-if="attributes.git" target="_blank"><fa :icon="['fab', 'github']"/></a>
        </div>
      </div>
      <div class="image-half">
        <img :src="attributes.img" class="image">
      </div>
    </div>
    <div class="blog-container">
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
  .project-page {
    .baner {
      width: 100vw;
      display: grid;
      grid-template-columns: 2fr 3fr;
      padding-top: 1rem;

      .title-half {
        padding: 2rem 3rem;
        text-align: right;
        position: relative;
        .title {
          font-size: 52px;
          margin-bottom: 50px;
        }
        .links {
          font-size: 40px;
          position: absolute;
          bottom: 0;
          right: 2rem;
          a {
            color: #333;
            text-decoration: none;
          }
          svg {
            margin: 10px;
          }
        }
      }

      .image-half {
        position: relative;

        .image {
          display: block;
          /*position: absolute;*/
          /*top: 0;*/
          /*left: 0;*/
          width: 100%;
          height: auto;
          z-index: 2;
        }
      }
    }
    .blog-container {
      width: 70%;
      margin: 2rem auto;
    }
  }

</style>
