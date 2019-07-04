<template>
  <div class="nav">
    <div class="navigation">
      <AppLogo></AppLogo>
      <nav>
        <ul class="nav-list">
          <nuxt-link to="/">O mnie</nuxt-link>
          <nuxt-link to="/portfolio">Portfolio</nuxt-link>
          <nuxt-link to="/blog">Blog</nuxt-link>
        </ul>
      </nav>
    </div>
    <div class="mobile-nav">
      <div class="hamburger" @click="navVisible = !navVisible">
        <fa :icon="['fas', 'hamburger']"/>
      </div>
      <ul class="mobile-nav-list" :class="{active: navVisible}" @click="navVisible = !navVisible">
        <nuxt-link class="mobile_link" to="/">O mnie</nuxt-link>
        <nuxt-link class="mobile_link" to="/portfolio">Portfolio</nuxt-link>
        <nuxt-link class="mobile_link" to="/blog">Blog</nuxt-link>
        <AppFooter/>
      </ul>
    </div>
  </div>
</template>

<script>
  import AppLogo from "@/components/AppLogo";
  import AppFooter from "@/components/AppFooter";


  export default {
    name: "app_nav",
    components: {
      AppLogo, AppFooter
    },
    data() {
      return {
        navVisible: false
      }
    },
    watch: {
      navVisible: function (old, nev) {
        this.$root.$emit('navVisible', old);
      }
    }
  };
</script>

<style lang="scss">
  .nav {
    height: 0;
    .mobile-nav {
      display: none;
    }
    .navigation {
      background-color: #fff;
      position: fixed;
      top: 0;
      right: 0;
      width: 100%;
      display: flex;
      justify-content: flex-end;
      z-index: 10;
      height: 5rem;
      box-shadow: 0 2px 10px #aaa;

      .nav-list {
        padding: 10px 40px;

        a {
          padding: 5px 10px;
          margin: 0 10px;
          text-decoration: none;
          color: #333;
          transition: 0.3s;
          border-bottom: 1px solid #fff;
          font-weight: 600;

          &.nuxt-link-exact-active {
            border-bottom: 1px solid #333;
          }
        }
      }
    }
    @media screen and (max-width: 1280px) {
      .navigation {
        height: 4rem;

        .nav-list {
          padding: 5px 0;
        }
      }

    }

    @media screen and (max-width: 420px) {
      .navigation {
        .app-logo {
          display: flex !important;
          position: fixed;
          top: 10px;
          left: 10px;
          padding: 0;

          .name {
            h1 {
              font-size: 22px;
            }
          }
        }

        .nav-list {
          display: none;
        }

      }

      .mobile-nav {
        display: block;

        .hamburger {
          position: fixed;
          top: 20px;
          right: 20px;
          font-size: 24px;
          z-index: 11;
        }
      }

      .mobile-nav-list {
        position: fixed;
        left: 100%;
        width: 70%;
        top: 4rem;
        display: flex;
        flex-direction: column;
        background-color: #fff;
        transition: .3s;
        height: 100%;
        margin: 0;
        z-index: 5;
        padding-top: 2rem;
        /*border-left: 1px solid #333;*/

        .mobile_link {
          font-size: 20px;
        }

        a {
          padding: 20px;
          color: #000;
          text-decoration: none;
          text-align: right;
        }

        &.active {
          left: 30%;
          box-shadow: -100px 0px 200px 20px rgba(0,0,0,0.75);
        }

        .footer {
          position: absolute;
          bottom: 4rem;
          left: 0;
          width: 100%;
          margin: 0 auto;
          padding: 1rem;
          color: #333;

          .socials {
            font-size: 30px;

            svg {
              margin: 0 10px;
            }
          }

          a {
            padding: 0;
          }
        }
      }

    }
  }

</style>
