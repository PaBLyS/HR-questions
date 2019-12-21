<template>
  <section class="edit-questions">
    <b-container>
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
        <b-col cols="12" >
          <div v-for="(elem, index) in editQuestion" :key="index">
            <div>
              <input type="text" :value="elem.label">
              <b-button-group>
                <b-button variant="success">Save</b-button>
                <b-button variant="danger">Delete</b-button>
              </b-button-group>
            </div>
            <div>
              <textarea></textarea>
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
    export default {
        name: "questions",
        beforeCreate() {
            this.$store.dispatch('fetchQuestions');
        },
        beforeMount() {
            this.editQuestion = this.$store.getters.questions;
        },
        data() {
          return {
              editQuestion: []
          }
        },
        computed: {

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
