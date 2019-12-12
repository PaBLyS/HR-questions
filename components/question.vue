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
      margin: 5px 10px;
    }

    &-label {
      text-align: center;
      background: #965f5e;
    }

    &-answer {
      overflow: hidden;

      &-close {
        height: 0;

      }
    }
  }
</style>
