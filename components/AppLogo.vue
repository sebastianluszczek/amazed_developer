<template>
    <div class="app-logo">
      <div class="avatar">
        <img src="/img/amazedbear.jpeg" alt class="avatar">
      </div>
      <div class="name">
        <h1>Amazed<span>Developer</span></h1>
      </div>
    </div>
</template>

<script>
    export default {
        name: "AppLogo"
    }
</script>

<style lang="scss">
  .app-logo {
    padding: 5px 40px;
    display: flex;
    position: absolute;
    top: 0;
    left: 0;

    .avatar {
      height: 4rem;
      width: 4rem;
      border-radius: 50%;
    }
    .name {
      padding-left: 1rem;
      h1 {
        line-height: 4rem;
        padding: 0;
        margin: 0;
        span {
          font-family: Montserrat-Bold;
        }
      }
    }
  }

</style>
