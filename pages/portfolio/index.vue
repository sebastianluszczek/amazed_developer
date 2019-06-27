<template>
  <div class="container portfolio">
    <div>
      <h1 class="title">Portfolio</h1>
      <h2 class="subtitle">My nuxt.js portfolio project with simple markdown blog</h2>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa, minima accusamus. Nostrum optio assumenda eos
        magni alias placeat ad error modi autem labore. Repellat error provident expedita nam aliquam ea rerum, iure
        officia natus ab, repudiandae rem consequatur placeat animi iusto corrupti accusamus vitae quo nobis. Expedita,
        necessitatibus similique quia atque inventore doloremque facere, eaque incidunt labore, at suscipit quae
        fugit?</p>

      <div v-for="(post,key) in projectList" :key="key" class="project-post">
        <nuxt-link :to="`/portfolio/${post.slug}`" class="post-content">
          <div class="baner">
            <img :src="post.img" alt class="baner-img">
          </div>
          <div class="description">
            <h2 class="title">{{ post.title }}</h2>
            <p class="subtitle">{{ post.description }}</p>
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
    }

    .post-content {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      align-items: flex-start;
      grid-row-gap: 30px;

      .baner {
        width: 100%;
        /*height: 300px;*/
        overflow: hidden;
        position: relative;

        .baner-img {
          width: 100%;
        }
      }
      .description {

      }
    }
  }
</style>

