<template>
  <div class="default">
    <div class="side">
      <div class="logo">
        <img src="/img/amazedbear.jpeg" alt class="avatar">
        <h1 class="light">Amazed</h1>
        <h1 class="bold">Developer</h1>
      </div>
      <app-footer></app-footer>
    </div>
    <main>
      <AppNav/>
      <nuxt :class="{navVisible: navVisible}"/>
    </main>
  </div>
</template>

<script>
  import AppNav from "@/components/AppNav";
  import AppFooter from "@/components/AppFooter";

  export default {
    components: {
      AppNav,
      AppFooter
    },
    data() {
      return {
        navVisible: false
      }
    },
    mounted() {
      this.$root.$on('navVisible', (data) => {
        this.navVisible = data;
      })
    }
  };
</script>


<style lang="scss">
  .default {
    display: grid;
    grid-template-columns: 460px auto;

    .app-logo {
      display: none;
    }

    .side {
      height: 100vh;
      width: 460px;
      position: fixed;
      top: 0;
      left: 0;

      &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-image: url("/img/side_bg.jpg");
        background-position: left;
        background-size: cover;
        background-repeat: no-repeat;
        filter: grayscale(70%) brightness(0.5);
      }

      .footer {
        position: absolute;
        width: 100%;
      }

      .logo {
        width: 300px;
        position: absolute;
        top: 40%;
        left: 50%;
        transform: translate(-50%, -50%);

        .avatar {
          border-radius: 50%;
          width: 80%;
          margin: 30px auto;
        }

        h1 {
          font-size: 54px;
          color: #fff;
          font-family: Montserrat;
          font-weight: normal;
          padding: 0;
          margin: 0;
        }

        .light {
          position: relative;
          left: -40px;
        }

        .bold {
          font-family: Montserrat-Bold;
          font-size: 60px;
        }
      }
    }

    main {
      position: relative;
      grid-column: 2/3;
      background-color: #fff;
      min-height: 100vh;
      height: 100%;

      .navigation {
        width: calc(100% - 460px);
      }

      .container {
        width: 80%;
        margin: 5rem auto;
      }
    }

    @media screen and (max-width: 1280px) {
      grid-template-columns: 400px auto;

      .side {
        width: 400px;

        .logo {
          width: 240px;

          h1 {
            font-size: 44px;
          }

          .bold {
            font-size: 50px;
          }
        }
      }

      main {
        .navigation {
          width: calc(100% - 400px);
        }

        .container {
          width: 80%;
          margin: 3rem auto;
        }
      }
    }

    @media screen and (max-width: 420px) {
      width: 100vw;
      display: block;
      .side {
        display: none;
      }

      main {

        position: relative;

        .navigation {
          width: 100%;
        }

        .container {
          width: 90%;
          margin: 3rem auto;
          text-align: justify;
        }

      }
    }
  }
</style>
