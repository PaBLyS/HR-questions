<template>
    <b-row class="text-wrap">
      <b-col cols="12">
        {{defaultText}}
      </b-col>
    </b-row>
</template>

<script>
    export default {
        name: "defaultText",
        props: {
            defaultText: String
        }
    }
</script>

<style lang="scss" scoped>
  .text-wrap {
    background: #dcdcdc;
    padding: 30px;
  }
</style>
