<template>
  <div class="container portfolio">
    <div>
      <h1 class="title">Portfolio</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut beatae corporis deleniti dicta dolor ducimus eius
        eos error, eum ex excepturi expedita fugiat in ipsa ipsam labore laudantium magni molestias nemo neque nesciunt
        nihil obcaecati placeat possimus quibusdam quisquam quod quos rem tempore tenetur ullam ut, veritatis voluptate!
        Aspernatur assumenda commodi culpa delectus dignissimos eligendi, est id ipsa ipsum laborum non nostrum placeat
        qui quod recusandae suscipit vel. Ab aliquam, aliquid.</p>

      <div v-for="(post,key) in projectList" :key="key" class="project-post">
        <nuxt-link :to="`/portfolio/${post.slug}`" class="post-content">
          <div class="baner">
            <img :src="post.img" alt class="baner-img">
          </div>
          <div class="description">
            <h2 class="title">{{ post.title }}</h2>
            <p class="subtitle">{{ post.description }}</p>
            <div class="tech_icons">
              <img v-for="icon in (post.tech.split(','))" :key="icon" :src="`/icons/${icon}.png`" :alt="icon"
                   class="tech_icon">
            </div>
          </div>
        </nuxt-link>
      </div>

    </div>
  </div>
</template>

<script>
  export default {
    name: "portfolio",
    computed: {
      projectList() {
        return this.$store.state.projectlist;
      }
    },
    created() {
      console.log(this.projectList);
    }
  };
</script>

<style lang="scss">
  .portfolio {
    a {
      text-decoration: none;
      color: #333;
    }

    .project-post {
      margin: 50px 20px;
      border: 1px solid #eee;
      box-shadow: 3px 3px 7px #eee;
      transition: .3s;

      &:hover {
        transform: translate(-3px, -3px);
        box-shadow: 5px 5px 10px #eee;
      }
    }

    .post-content {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      align-items: flex-start;
      grid-row-gap: 30px;


      .baner {
        width: 100%;
        height: 100%;
        overflow: hidden;
        position: relative;

        .baner-img {
          width: 100%;
        }
      }

      .description {
        position: relative;
        height: 100%;

        .tech_icons {
          width: 100%;
          text-align: right;
          position: absolute;
          bottom: 10px;
          right: 10px;

          .tech_icon {
            display: inline-block;
            height: 48px;
            padding: 0 5px;
          }
        }


      }
    }
  }
</style>

