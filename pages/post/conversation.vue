<template>
  <section class="conversation">
    <b-container>
      <b-row>
        <b-col cols="1">
          <nuxt-link to="/post" class="arrow">
            <img src="/arrow.png">
            <span class="arrow__text">BACK</span>
          </nuxt-link>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="6">
          <div class="conversation__label">
            {{vacLabel}}
          </div>
        </b-col>
      </b-row>
      <default-text :default-text="post.content[0]"/>
      <b-row>
        <question v-for="(elem, index) in question"
                  :question="elem.label"
                  :answer="elem.answer"
                  :key="'question' + index"/>
      </b-row>
      <default-text :default-text="post.content[1]"/>
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

    export default {
        name: "conversation",
        components: {defaultText, question},
        data() {
            return {
                query: this.$route.query
            }
        },
        computed: {
            post() {
                return this.$store.getters.post[this.query.id][this.query.type]
            },
            vacLabel() {
                return this.$store.getters.post[this.query.id].label
            },
            question() {
                let questionArr = [];

                this.$store.getters.questions.forEach((elem) => {
                    this.post.question.forEach((elemId) => {
                        if (elemId === elem.id) {
                            questionArr.push(elem);
                        }
                    })
                });

                return questionArr
            }
        },
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
