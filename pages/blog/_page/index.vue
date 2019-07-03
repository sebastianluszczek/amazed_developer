<template>
  <div :key="$route.params.post">
    <back-arrow :where="'/blog'"/>
    <div class="blog-container">
      <div class="baner">
        <div class="title-half">
          <div class="title">{{ attributes.title }}</div>
          <div class="subtitle">
            Published on {{attributes.ctime.toString().slice(0, 24)}}
            <br>
            by {{ attributes.author }}
          </div>
        </div>
        <div class="image-half">
          <img :src="attributes.avatar" class="image">
        </div>
      </div>

      <div v-html="content" class="blog-content content markdown-body"></div>
    </div>
  </div>
</template>

<script>
    import BackArrow from '@/components/BackArrow'
    // Let's require the needed modules
    const fm = require("front-matter");
    var md = require("markdown-it")({
        html: true,
        linkify: true,
        typographer: true
    }).use(require("markdown-it-highlightjs"), {auto: true});

    export default {
        components: {
            BackArrow
        },
        layout: "markdown-blog",
        async asyncData({params}) {
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

    @media screen and (max-width: 420px) {
      width: 90%;
      margin: 6rem auto;

      .baner {
        width: 100%;
        display: block;
        height: auto;
        margin-bottom: 2rem;

        .title-half {
          .title {
            font-size: 32px;
            margin-bottom: 1rem;
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
  }
</style>
