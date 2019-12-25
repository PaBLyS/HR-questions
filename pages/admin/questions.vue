<template>
  <section class="edit-questions">

    <loader v-if="status"/>

    <b-container v-else>
      <b-row>
        <b-col cols="1">
          <nuxt-link to="/admin" class="arrow">
            <img src="/arrow.png">
            <span class="arrow__text">BACK</span>
          </nuxt-link>
        </b-col>
      </b-row>
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
                          @click="addUpload(newQuestions)">
                  Add
                </b-button>
              </b-button-group>
            </div>
            <div>
              <input type="text"
                     v-model="newQuestions.label"
                     class="edit-questions__wrap-input">
              <p class="edit-questions__wrap-content">Content</p>
              <textarea v-model="newQuestions.answer"
                        class="edit-questions__wrap-input textarea"></textarea>
            </div>
          </div>
        </b-col>
        <b-col cols="6" v-for="(elem, index) in editQuestion" :key="index">
          <question :id="elem.id"
                    :index="index"
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

    export default {
        name: "questions",
        components: {question, loader},
        beforeCreate() {
            this.$store.dispatch('fetchQuestions');
        },
        data() {
            return {}
        },
        computed: {
            newQuestions() {
                return {
                    id: this.lastId(),
                    label: '',
                    answer: ''
                }
            },
            editQuestion() {
                return [...this.$store.getters.questions]
            },
            status() {
                return this.editQuestion.length === undefined;
            }
        },
        methods: {
            addUpload(obj) {
                this.$store.dispatch('fetchAddQuestions', obj);

            },
            lastId() {
                let maxId = 0;

                this.editQuestion.forEach((elem) => {
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
  .arrow {
    margin: 40px 0;
    display: flex;
    align-items: center;

    &__text {
      font-family: 'Roboto', sans-serif;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      letter-spacing: 0.02em;
      color: #828282;
      margin-left: 10px;

      &:hover {
        text-decoration: none;
      }
    }
  }

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
