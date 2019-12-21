<template>

  <section class="conversation">
    <b-container v-if="status">
      <b-row>
        <b-col cols="1">
          <nuxt-link to="/post" class="arrow">
            <img src="/arrow.png">
            <span class="arrow__text">BACK</span>
          </nuxt-link>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="12">
          <div class="conversation__label">
            {{vacLabel}}
            <span v-if="query.type === 'call'">(Call)</span>
            <span v-if="query.type === 'interview'">(Interview)</span>
          </div>
        </b-col>
      </b-row>
      <default-text :default-text="vacancies.content[0]"/>
      <b-row>
        <question v-for="(elem, index) in question"
                  :question="elem.label"
                  :answer="elem.answer"
                  :key="'question' + index"
                  v-if="visible(elem.id)"/>
      </b-row>
      <default-text :default-text="vacancies.content[1]"/>
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

    <loader v-else/>

  </section>
</template>

<script>
    import defaultText from "../../components/defaultText";
    import question from "../../components/question";
    import loader from "../../components/loader"

    export default {
        name: "conversation",
        components: {defaultText, question, loader},
        beforeCreate() {
            this.$store.dispatch('fetchVacancies');
            this.$store.dispatch('fetchQuestions');
        },
        data() {
            return {
                query: this.$route.query
            }
        },
        computed: {
            status() {
                let status = true;

                return status;
            },
            vacancies() {
                if (this.$store.getters.vacancies[this.query.id][this.query.type] === undefined) {
                    this.$router.push({path: '/post'});
                } else {
                    return this.$store.getters.vacancies[this.query.id][this.query.type]
                }
            },
            vacLabel() {
                return this.$store.getters.vacancies[this.query.id].label
            },
            question() {
                return this.$store.getters.questions
            }
        },
        methods: {

            visible(id) {
                let status = false;

                this.vacancies.question.forEach(elem => {
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
