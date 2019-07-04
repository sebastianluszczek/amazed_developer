<template>
  <nuxt-link :to="where" class="back_arrow"></nuxt-link>
</template>

<script>
    export default {
        name: "BackArrow",
        props: ['where']
    }
</script>

<style lang="scss">
  .back_arrow {
    z-index: 9;
    cursor: pointer;
    position: fixed;
    top: 8rem;
    left: 2rem;
    width: 1rem;
    height: 1rem;


    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 1rem;
      height: 1rem;
      border-left: 1px solid #000;
      border-bottom: 1px solid #000;
      transform: rotate(45deg);
    }
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 3rem;
      height: 1rem;
      border-bottom: 1px solid #000;
      transform: translate(-3px, -0.5rem);
    }

    @media screen and (max-width: 420px) {
      position: absolute;
      top: 15rem;
    }
  }
</style>
