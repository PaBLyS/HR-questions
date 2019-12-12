<template>
  <b-col class="question-wrap">
    <div class="question-label" @click="status = !status">{{question}}</div>
    <div :class="classAnswer">{{answer}}</div>
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
      min-width: 30%;
      max-width: 50%;
      margin: 10px 5px;
    }

    &-label {
      text-align: center;
      color: #fff;
      background: #42445a;
      padding: 5px 10px;
      font-size: 18px;
      font-weight: bold;
      border-top-left-radius: 5px;
      border-top-right-radius: 5px;
      cursor: pointer;
    }

    &-answer {
      overflow: hidden;
      border: 1px solid #42445a;
      padding: 5px 10px;

      &-close {
        height: 0;
        padding: 0;
      }
    }
  }
</style>
