<template>
    <b-row>
      <b-col cols="12">
        <div class="text-wrap">{{text}}</div>
      </b-col>
    </b-row>
</template>

<script>
    export default {
        name: "defaultText",
        props: {
            text: String
        }
    }
</script>

<style lang="scss" scoped>
  .text-wrap {
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 22px;
    color: #4F4F4F;
    background: #F4F4F4;
    box-shadow: 7px 7px 40px rgba(0, 0, 0, 0.2), -7px -7px 40px rgba(255, 255, 255, 0.35), inset 4px 4px 20px rgba(255, 255, 255, 0.25);
    border-radius: 10px;
    padding: 20px;
  }
</style>
