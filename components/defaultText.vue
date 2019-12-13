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
    color: #42445a;
    background: #bebebe;
    padding: 30px;
    font-size: 18px;
    border-radius: 5px;
    margin-top: 30px;
  }
</style>
