<template>
  <section class="edit-questions">

    <loader v-if="status"/>

    <b-container v-else>
      <b-row>
        <b-col>
          <div>
            <div>
              <input type="text"
                     v-model="newQuestions.label">
              <b-button-group>
                <b-button variant="success"
                          @click="addUpload(newQuestions)">
                  Add
                </b-button>
              </b-button-group>
            </div>
            <div>
              <textarea v-model="newQuestions.answer"></textarea>
            </div>
          </div>
        </b-col>
        <b-col cols="12">
          <div v-for="(elem, index) in editQuestion" :key="index">
            <question :id="index"
                      :label="elem.label"
                      :answer="elem.answer"/>
          </div>
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
                    id: this.editQuestion.length,
                    label: '',
                    answer: ''
                }
            },
            editQuestion() {
                return [...this.$store.getters.questions]
            },
            status() {
                return this.editQuestion.length === 0;
            }
        },
        methods: {
            addUpload(obj) {
                this.$store.dispatch('fetchAddQuestions', obj);
            },
        }
    }
</script>

<style lang="scss" scoped>
  .edit-questions {
    min-height: 100vh;
    background: linear-gradient(125.42deg, #FFFFFF 0%, #DADADA 100%);
    padding: {
      top: 115px;
    }
  }
</style>
