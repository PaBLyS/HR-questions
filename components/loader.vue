<template>
  <div class="loader">
    <div class="loader__circle">

    </div>
  </div>
</template>

<script>
    export default {
        name: "loader"
    }
</script>

<style lang="scss" scoped>
  .loader {
    width: 100%;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;

    &__circle {
      border: {
        top: 1px solid red;
        left: 1px solid red;
      };
      border-radius: 100%;
      height: 30px;
      width: 30px;
      animation: load 1s infinite;
    }
  }

  @keyframes load {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>
