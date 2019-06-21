<template>
  <div :key="$route.params.post">
    <div class="container">
      <div class="title">{{ attributes.title }}</div>
      <div class="subtitle">
        Published on {{attributes.ctime}}
        by {{ attributes.author }}
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
    const fileContent = await import(`@/articles/${params.page}.md`);
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

<style>
.blog {
  padding: 1em;
}
.blog header {
  margin-bottom: 1em;
}
.blog .subtitle {
  font-size: 1rem;
}
.blog-content >>> h1 {
  font-size: 1.5rem;
}
blockquote {
  margin-bottom: 1em;
}
</style>
