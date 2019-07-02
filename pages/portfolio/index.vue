<template>
  <div class="container portfolio">
    <div>
      <h1 class="title">Portfolio</h1>
      <p>Poniżej przedstawiam kilka moich wybranych projektów. Każdy z nich starałem sie opisać w dwóch zdaniach i
        przedstawić wykożystane technologie. Po kliknięciu na blok znajdziesz dokładniejszy opis, ze zdjęciami oraz
        odnośnikami do kodu czy witryny.</p>

      <div v-for="(post,key) in projectList" :key="key" class="project-post">
        <nuxt-link :to="`/portfolio/${post.slug}`" class="post-content">
          <div class="baner">
            <img :src="post.img" alt class="baner-img">
          </div>
          <div class="description">
            <h2 class="project-title">{{ post.title }}</h2>
            <p class="subtitle">{{ post.description }}</p>
            <div class="tech_icons">
              <img v-for="icon in (post.tech.split(','))" :key="icon" :src="`/icons/${icon}.png`" :alt="icon"
                   class="tech_icon">
            </div>
          </div>
        </nuxt-link>
      </div>
      <p>Po znacznie więcej projektów zapraszam na mojego <a href="https://github.com/sebastianluszczek"
                                                             target="_blank">Githuba
        <fa :icon="['fab', 'github']"/>
      </a>. Postaram się, aby każdy godny uwagi projekt posiadał chociaż proste README.md.
      </p>
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
    .title {
      margin-top: 3rem;
    }

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
      grid-template-columns: 1fr 1.5fr;
      align-items: flex-start;
      grid-row-gap: 30px;


      .baner {
        width: 100%;
        height: auto;
        overflow: hidden;
        position: relative;

        .baner-img {
          width: 100%;
          height: auto;
        }
      }

      .description {
        position: relative;
        height: 100%;
        margin: 0.5rem 1rem 3rem;

        .subtitle {
          font-size: 16px;
        }

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

    @media screen and (max-width: 1280px) {
      .project-post {
        margin: 30px 15px;
      }

      .post-content {
        grid-template-columns: 1fr 1.5fr;
        height: 190px;

        .baner {
          width: 100%;
          height: 100%;
          overflow: hidden;
          position: relative;

          .baner-img {
            /*height: 100%;*/
          }
        }

        .description {
          position: relative;
          height: 100%;

          .subtitle {
            font-size: 16px;
          }

          .tech_icons {
            bottom: 5px;
            right: 5px;

            .tech_icon {
              height: 32px;
            }
          }
        }
      }
    }
    @media screen and (max-width: 420px) {
      .project-post {
        margin: 20px 0;
        border: 1px solid #eee;
        box-shadow: 3px 3px 7px #eee;
      }

      .post-content {
        display: block;
        height: auto;

        .baner {
          overflow: hidden;
          position: relative;

          .baner-img {
            width: 100%;
          }
        }

        .description {
          position: relative;
          margin: 0 1rem;
          auto: 300px;
          padding-bottom: 2rem;

          .project-title {
            font-size: 22px;
            margin: 0.5rem 0;
          }

          .subtitle {
            font-size: 14px;
          }

          .tech_icons {
            .tech_icon {
              height: 28px;
            }
          }
        }
      }
    }

  }
</style>

