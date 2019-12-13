<template>
  <b-col cols="6">
    <div class="question-wrap">
      <div class="question-label" @click="status = !status">{{question}}</div>
      <div :class="classAnswer">{{answer}}</div>
    </div>
  </b-col>
</template>
<script>
    export default {
        name: "question",
        props: {
            question: String,
            answer: String
        },
        data() {
            return {
                status: false
            }
        },
        computed: {
            classAnswer() {
                return {
                    'question-answer': true,
                    'question-answer-close': !this.status
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
  .question {

    &-wrap {
      margin: 25px 0;
    }

    &-label {
      font-family: 'Roboto', sans-serif;
      font-style: normal;
      font-weight: bold;
      font-size: 22px;
      line-height: 45px;
      display: flex;
      align-items: center;
      letter-spacing: 0.02em;
      color: #4F4F4F;
      cursor: pointer;
      background: #F4F4F4;
      box-shadow: 7px 7px 40px rgba(0, 0, 0, 0.2), -7px -7px 40px rgba(255, 255, 255, 0.35), inset 4px 4px 20px rgba(255, 255, 255, 0.25);
      border-radius: 10px;
      padding: 10px 20px;
    }

    &-answer {
      font-family: 'Roboto', sans-serif;
      font-style: normal;
      font-weight: normal;
      font-size: 18px;
      line-height: 22px;
      color: #4F4F4F;
      overflow: hidden;
      padding: 10px;

      &-close {
        height: 0;
        padding: 0;
      }
    }
  }
</style>
