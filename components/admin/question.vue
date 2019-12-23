<template>
  <div>
    <div>
      <input type="text" v-model="edit.label">
      <b-button-group>
        <b-button variant="success" @click="editUpload(edit)">Save</b-button>
        <b-button variant="danger" @click="deleteUpload(edit)">Delete</b-button>
      </b-button-group>
    </div>
    <div>
      <textarea v-model="edit.answer"></textarea>
    </div>
  </div>
</template>

<script>
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
                },
            }
        },
        methods: {
            editUpload(obj) {
                this.$store.dispatch('fetchEditQuestions', obj);
            },
            deleteUpload(obj) {
                this.$store.dispatch('fetchDeleteQuestions', obj);
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>
