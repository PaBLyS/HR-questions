<template>
  <section class="edit-questions">
    <b-container>
      <arrow url="/admin" />
      <b-row>
        <b-col cols="12" class="edit-questions__label">
          All questions
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="12">
          <div class="edit-questions__wrap">
            <div class="edit-questions__wrap-top">
              <span>
                Label
              </span>
              <b-button-group>
                <b-button variant="success"
                          @click="addUpload()">
                  Add
                </b-button>
              </b-button-group>
            </div>
            <div>
              <input type="text"
                     v-model="label"
                     class="edit-questions__wrap-input">
              <p class="edit-questions__wrap-content">Content</p>
              <textarea v-model="answer"
                        class="edit-questions__wrap-input textarea"></textarea>
            </div>
          </div>
        </b-col>
        <b-col cols="6"
               v-for="(elem, index) in questions"
               :key="index">
          <question :id="elem.id"
                    :label="elem.label"
                    :answer="elem.answer"/>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
  import question from "../../components/admin/question";
  import loader from "../../components/loader";
  import arrow from "../../components/arrow";
  import axios from 'axios';

  export default {
    name: "questions",
    middleware: 'adminaccess',
    components: {question, loader, arrow},
    async asyncData(param) {
      const questions = await axiosWrap(axios, param, {
        method: 'get',
        url: `${param.store.state.url}/questions`,
        data: null
      })
      return {
        questionsDefault: questions.data
      }
    },
    data() {
      return {
        id: null,
        label: '',
        answer: ''
      }
    },
    computed: {
      questions() {
        return [...this.questionsDefault]
      }
    },
    methods: {
      addUpload() {
        axiosWrap(axios, this, {
          method: 'post',
          url: `${this.$store.state.url}/questions`,
          data: {
            id: this.lastId(),
            label: this.label,
            answer: this.answer
          }
        })
          .then(() => console.log('good add'))
          .catch(err => console.error(err));
        location.reload()
      },
      lastId() {
        let maxId = 0;

        this.questions.forEach((elem) => {
          if (elem.id > maxId) {
            maxId = elem.id;
            }
          });

        return maxId + 1;
      }
    }
  }
</script>

<style lang="scss" scoped>
  .edit-questions {
    min-height: 100vh;
    background: linear-gradient(125.42deg, #FFFFFF 0%, #DADADA 100%);

    &__label {
      padding: 19px 0;
      margin-bottom: 30px;
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

    &__wrap {
      padding: 25px;
      margin-bottom: 30px;
      font-family: 'Roboto', sans-serif;
      font-style: normal;
      font-weight: 500;
      font-size: 24px;
      line-height: 42px;
      color: #4F4F4F;
      background: #F4F4F4;
      box-shadow: 7px 7px 40px rgba(0, 0, 0, 0.2), -7px -7px 40px rgba(255, 255, 255, 0.35), inset 4px 4px 20px rgba(255, 255, 255, 0.25);
      border-radius: 10px;

      &-top {
        display: flex;
        justify-content: space-between;
      }

      &-input {
        width: 100%;
        margin: 10px 0;
        font-size: 18px;
        line-height: 30px;

        &.textarea {
          min-height: 150px;
        }
      }

      &-content {
        margin: 10px 0 0 0;
      }
    }
  }
</style>
