<template>
  <b-container class="wrap">
    <default-text :default-text="content[0]"/>
    <b-row>
      <question :question="question[0].label" :answer="question[0].answer" />
      <question :question="question[0].label" :answer="question[0].answer" />
      <question :question="question[0].label" :answer="question[0].answer" />
      <question :question="question[0].label" :answer="question[0].answer" />
    </b-row>
    <default-text :default-text="content[0]"/>
    <b-row>
      <question :question="question[0].label" :answer="question[0].answer"/>
      <question :question="question[0].label" :answer="question[0].answer"/>
      <question :question="question[0].label" :answer="question[0].answer"/>
      <question :question="question[0].label" :answer="question[0].answer"/>
      <question :question="question[0].label" :answer="question[0].answer"/>
    </b-row>
    <default-text :default-text="content[0]"/>
  </b-container>
</template>

<script>
    import defaultText from "../components/defaultText";
    import question from "../components/question";

    export default {
        components: {defaultText, question},
        data() {
            return {
                content: [
                    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum'
                ],
                question: [
                    {
                        label: 'Why do we use it?',
                        answer: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).'
                    }
                ]
            }
        }
    }
</script>

<style lang="scss">
  body {
    background: #d8d8d8;
  }

  .wrap {
    margin: {
      top: 10px
    }
  }
</style>
