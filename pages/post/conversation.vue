<template>
  <section class="conversation">
    <b-container>
      <arrow url="/post"/>
      <b-row>
        <b-col cols="12">
          <div class="conversation__label">
            {{vacancies.label}}
            <span v-if="query.type === 'call'">(Call)</span>
            <span v-if="query.type === 'interview'">(Interview)</span>
          </div>
        </b-col>
      </b-row>
      <default-text :text="vacancies[query.type + 'Content'][0]"/>
      <b-row>
        <question v-for="(elem, index) in questions"
                  :question="elem.label"
                  :answer="elem.answer"
                  :key="'question' + index"
                  v-if="visible(elem.id)"/>
      </b-row>
      <default-text :text="vacancies[query.type + 'Content'][1]"/>
      <b-row>
        <b-col cols="3">
          <div class="conversation__list-button">
            <nuxt-link :to="`/post/questions?id=${query.id}&type=${query.type}`">
              All questions
            </nuxt-link>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
  import defaultText from "../../components/defaultText";
  import question from "../../components/question";
  import arrow from "../../components/arrow";
  import axios from 'axios';

  export default {
    name: "conversation",
    components: {defaultText, question, arrow},
    async asyncData(param) {
      const vacancies = await axiosWrap(axios, param, {
        method: 'get',
        url: `${param.store.state.url}/vacancies`,
        data: null
      })
      const questions = await axiosWrap(axios, param, {
        method: 'get',
        url: `${param.store.state.url}/questions`,
        data: null
      })
      
      return {
        vacancies: vacancies.data.find(elem => elem.id == param.query.id),
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
    methods: {
      visible(id) {
        let status = false;

        this.vacancies[this.query.type + 'Questions'].forEach(elem => {
          if (elem === id) {
            status = true;
          }
        });
        
        return status
      }
    }
  }
</script>

<style lang="scss" scoped>
  .conversation {
    min-height: 100vh;
    background: linear-gradient(125.42deg, #FFFFFF 0%, #DADADA 100%);

    &__label {
      font-family: 'Roboto', sans-serif;
      font-style: normal;
      font-weight: bold;
      font-size: 32px;
      line-height: 28px;
      letter-spacing: 0.02em;
      color: #4F4F4F;
      cursor: pointer;
      padding: 10px 20px;
      margin-bottom: 30px;
    }

    &__list-button {
      font-family: 'Roboto', sans-serif;
      font-style: normal;
      font-weight: bold;
      font-size: 22px;
      line-height: 28px;
      letter-spacing: 0.02em;
      color: #4F4F4F;
      cursor: pointer;
      padding: 10px 20px;
      margin-top: 30px;
    }
  }
</style>
