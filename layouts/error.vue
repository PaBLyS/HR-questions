<template>
  <section class="error">
    <div class="error__wrap">
      <p class="error__code">Error {{error.statusCode}}</p>
      <p class="error__message">{{error.message}}</p>
      <p>
        <nuxt-link to="/">
          Home
        </nuxt-link>
      </p>
    </div>
  </section>
</template>

<script>
    export default {
        props: ['error'],
        name: "error"
    }
</script>

<style lang="scss" scoped>
  .error {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(125.42deg, #FFFFFF 0%, #DADADA 100%);

    &__wrap {
      text-align: center;
    }

    &__code {
      color: red;
      font-size: 48px;
      font-weight: bold;
    }

    &__message {
      font-size: 28px;
    }
  }
</style>
