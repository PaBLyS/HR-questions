<template>
  <div class="edit-question">
    <div class="edit-question__wrap">
      <span class="edit-question__wrap-label">Label</span>
      <b-button-group>
        <b-button variant="success" @click="editUpload()">Save</b-button>
        <b-button variant="danger" @click="deleteUpload()">Delete</b-button>
      </b-button-group>
    </div>
    <div class="edit-question__wrap-bottom">
      <input type="text" v-model="edit.label" class="edit-question__wrap-input">
      <p class="edit-question__wrap-content">Content</p>
      <textarea v-model="edit.answer" class="edit-question__wrap-input textarea"></textarea>
    </div>
  </div>
</template>

<script>

  import axios from 'axios';

  export default {
    name: "question",
    props: {
      id: Number,
      label: String,
      answer: String,
    },
    data() {
      return {
        edit: {
          id: this.id,
          label: this.label,
          answer: this.answer
        }
      }
    },
    methods: {
      editUpload() {
        axiosWrap(axios, this, {
          method: 'put',
          url: `${this.$store.state.url}/questions/${this.edit.id}`,
          data: this.edit
        })
          .then(() => console.log('good save'))
          .catch(err => console.error(err));
        location.reload()
      },
      deleteUpload() {
        axiosWrap(axios, this, {
          method: 'delete',
          url: `${this.$store.state.url}/questions/${this.edit.id}`,
          data: null
        })
          .then(() => console.log('good delete'))
          .catch(err => console.error(err));
        location.reload()
      }
    }
  }
</script>

<style lang="scss" scoped>
  .edit-question {
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

    &__wrap {
      display: flex;
      justify-content: space-between;

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
