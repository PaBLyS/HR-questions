<template>
  <section class="edit-questions">

    <loader v-if="status"/>

    <b-container v-else >
      <b-row>
        <b-col>
          <div>
            <div>
              <input type="text">
              <b-button-group>
                <b-button variant="success">Add</b-button>
              </b-button-group>
            </div>
            <div>
              <textarea></textarea>
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
            editQuestion() {
                return [...this.$store.getters.questions]
            },
            status() {
                return this.editQuestion.length === 0;
            }
        },
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
