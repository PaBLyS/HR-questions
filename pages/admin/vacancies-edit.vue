<template>
  <section class="vacancies-edit">
    <b-container>
      <arrow url="/admin/vacancies"/>
      <b-row>
        <b-col cols="12" class="vacancies-edit__label">
          <input type="text" v-model="vacancies.label">
          <b-button-group>
            <b-button variant="success" @click="updateVacancies()">Save</b-button>
          </b-button-group>
        </b-col>
      </b-row>
      <b-row>

        <b-col cols="6" class="vacancies-edit__wrap">
          <p class="vacancies-edit__wrap-label">Call</p>
          <div class="vacancies-edit__wrap-sublabel">First text</div>
          <div class="vacancies-edit__wrap-textarea">
            <textarea v-model="vacancies.callContent[0]"></textarea>
          </div>
          <div class="vacancies-edit__wrap-sublabel">End text</div>
          <div class="vacancies-edit__wrap-textarea">
            <textarea v-model="vacancies.callContent[1]"></textarea>
          </div>
          <div class="vacancies-edit__wrap-question">
            <div class="vacancies-edit__wrap-sublabel">Questions</div>
            <div v-for="(elem, index) in questions" :key="`call-${elem.label}-${index}`">
              <label :for="`call-${elem.label}-${index}`"
                     class="vacancies-edit__wrap-question-wrap">
                <input type="checkbox"
                       :id="`call-${elem.label}-${index}`"
                       :value="elem.id"
                       v-model="vacancies.callQuestions"
                       class="vacancies-edit__wrap-question-chb">
                <span class="vacancies-edit__wrap-question-text">{{elem.label}}</span>
              </label>
            </div>
          </div>
        </b-col>

        <b-col cols="6" class="vacancies-edit__wrap">
          <p class="vacancies-edit__wrap-label">Interview</p>
          <div class="vacancies-edit__wrap-sublabel">First text</div>
          <div class="vacancies-edit__wrap-textarea">
            <textarea v-model="vacancies.interviewContent[0]"></textarea>
          </div>
          <div class="vacancies-edit__wrap-sublabel">End text</div>
          <div class="vacancies-edit__wrap-textarea">
            <textarea v-model="vacancies.interviewContent[1]"></textarea>
          </div>
          <div class="vacancies-edit__wrap-question">
            <div class="vacancies-edit__wrap-sublabel">Questions</div>
            <div v-for="(elem, index) in questions" :key="`interview-${elem.label}-${index}`">
              <label :for="`interview-${elem.label}-${index}`"
                     class="vacancies-edit__wrap-question-wrap">
                <input type="checkbox"
                       :id="`interview-${elem.label}-${index}`"
                       :value="elem.id"
                       v-model="vacancies.interviewQuestions"
                       class="vacancies-edit__wrap-question-chb">
                <span class="vacancies-edit__wrap-question-text">{{elem.label}}</span>
              </label>
            </div>
          </div>
        </b-col>

      </b-row>
    </b-container>
  </section>
</template>

<script>
  import loader from "../../components/loader";
  import arrow from "../../components/arrow";
  import axios from 'axios';

  export default {
    name: "questions-edit",
    middleware: 'adminaccess',
    components: {loader, arrow},
    async asyncData(param) {
      const vacanciesDefault = await axiosWrap(axios, param, {
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
        vacanciesDefault: vacanciesDefault.data.find(elem => elem.id == param.query.id),
        questions: questions.data
      }
    },
    data() {
      return {}
    },
    computed: {
      vacancies() {
        return this.vacanciesDefault
      }
    },
    methods: {
      updateVacancies() {
        axiosWrap(axios, this, {
          method: 'put',
          url: `${this.$store.state.url}/vacancies/${this.vacancies.id}`,
          data: this.vacancies
        })
          .then((res) => console.log('good edit'))
          .catch(err => console.error(err));
        location.reload()
      }
    }
  }
</script>

<style lang="scss" scoped>
  .vacancies-edit {
    min-height: 100vh;
    background: linear-gradient(125.42deg, #FFFFFF 0%, #DADADA 100%);

    &__label {
      padding: 20px;
      margin-bottom: 30px;
      font-family: 'Roboto', sans-serif;
      font-style: normal;
      font-weight: 500;
      font-size: 26px;
      line-height: 42px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      text-indent: 20px;
      color: #4F4F4F;
      background: #F4F4F4;
      box-shadow: 7px 7px 40px rgba(0, 0, 0, 0.2), -7px -7px 40px rgba(255, 255, 255, 0.35), inset 4px 4px 20px rgba(255, 255, 255, 0.25);
      border-radius: 10px;

      input {
        width: 80%;
      }
    }

    &__wrap {
      &-label {
        font-family: 'Roboto', sans-serif;
        font-style: normal;
        font-weight: 500;
        font-size: 26px;
        line-height: 42px;
      }

      &-sublabel {
        font-family: 'Roboto', sans-serif;
        font-style: normal;
        font-weight: 300;
        font-size: 18px;
        line-height: 28px;
        margin-top: 20px;
      }

      &-textarea {
        width: 100%;

        textarea {
          width: 100%;
          min-height: 150px;
        }
      }

      &-question {

        &-text {
          font-family: 'Roboto', sans-serif;
          font-style: normal;
          font-weight: 300;
          font-size: 16px;
          line-height: 22px;
        }
      }
    }
  }
</style>
