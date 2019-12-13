<template>
  <section>
    <b-container>
      <default-text :default-text="post.content[0]"/>
      <b-row>
        <question v-for="(elem, index) in post.question" :question="elem.label" :answer="elem.answer" :key="'question' + index"/>
      </b-row>
      <default-text :default-text="post.content[1]"/>
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
                i: 0,
                query: this.$route.query
            }
        },
        computed: {
            post() {
                return this.$store.getters.post[this.query.id][this.query.type]
            }
        },
    }
</script>

<style scoped>

</style>
