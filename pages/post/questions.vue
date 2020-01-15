<template>
  <section class="questions">
    <b-container>
      <arrow :url="`/post/conversation?id=${query.id}&type=${query.type}`"/>
      <b-row>
        <b-col cols="12">
          <div class="questions__label">All questions</div>
        </b-col>
      </b-row>
      <b-row>
        <question v-for="(elem, index) in questions"
                  :question="elem.label"
                  :answer="elem.answer"
                  :key="'question' + index"/>
      </b-row>
    </b-container>
  </section>
</template>

<script>
  import defaultText from "../../components/defaultText";
  import question from "../../components/question";
  import arrow from "../../components/arrow";
  import axios from 'axios'
  
  export default {
    name: "questions",
    components: {defaultText, question, arrow},
    async asyncData(param) {
      const questions = await axiosWrap(axios, param, {
        method: 'get',
        url: `${param.store.state.url}/questions`,
        data: null
      })

      return {
        questions: questions.data
      }
    },
    data() {
      return {
        query: this.$route.query
      }
    },
    computed: {
      
    },
  }
</script>

<style lang="scss" scoped>
  .questions {
    min-height: 100vh;
    background: linear-gradient(125.42deg, #FFFFFF 0%, #DADADA 100%);

    &__label {
      padding: 19px 0;
      font-family: 'Roboto', sans-serif;
      font-style: normal;
      font-weight: 500;
      font-size: 36px;
      line-height: 42px;
      display: flex;
      align-items: center;
      text-indent: 20px;
      color: #4F4F4F;
      background: #F4F4F4;
      box-shadow: 7px 7px 40px rgba(0, 0, 0, 0.2), -7px -7px 40px rgba(255, 255, 255, 0.35), inset 4px 4px 20px rgba(255, 255, 255, 0.25);
      border-radius: 10px;
    }
  }
</style>
