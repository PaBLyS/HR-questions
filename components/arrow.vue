<template>
  <b-row>
    <b-col cols="1">
      <a :href="url" class="arrow">
        <img src="/arrow.png">
        <span class="arrow__text">BACK</span>
      </a>
    </b-col>
  </b-row>
</template>

<script>
    export default {
        name: "arrow",
        props: {
            url: String
        }
    }
</script>

<style lang="scss" scoped>
  .arrow {
    margin: 40px 0;
    display: flex;
    align-items: center;

    &__text {
      font-family: 'Roboto', sans-serif;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      letter-spacing: 0.02em;
      color: #828282;
      margin-left: 10px;

      &:hover {
        text-decoration: none;
      }
    }
  }
</style>
