<template>
  <div class="default">
    <div class="side">
      <AppNav/>
      <div class="logo">
        <img src="/img/amazedbear.jpeg" alt class="avatar">
        <h1 class="light">Amazed</h1>
        <h1 class="bold">Developer</h1>
      </div>
    </div>
    <main>
      <nuxt/>
    </main>
  </div>
</template>

<script>
import AppNav from "@/components/AppNav";

export default {
  components: {
    AppNav
  }
};
</script>


<style lang="scss">
.default {
  display: grid;
  grid-template-columns: 1fr 2fr;

  .side {
    height: 100%;
    width: 100%;
    position: relative;

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-image: url("/img/side_bg.jpg");
      background-position: 30% 0;
      background-attachment: fixed;
      background-size: cover;
      background-repeat: no-repeat;
      filter: grayscale(70%) brightness(0.5);
    }

    .logo {
      width: 60%;
      max-width: 300px;
      position: fixed;
      top: 40%;
      left: 18%;
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
      }

      .light {
        position: relative;
        left: -40px;
      }

      .bold {
        font-weight: 600;
        font-size: 60px;
      }
    }
  }

  main {
    margin-top: 5rem;
    .container {
      width: 80%;
      margin: 0 auto;
    }
  }
}
</style>
