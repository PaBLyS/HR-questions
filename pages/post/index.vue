<template>
  <section>
    <div>
      <div v-for="(elem, index) in post">
        <div>{{elem.label}}</div>
        <div @click="goText(index, 'talk')">Телефонна розмова</div>
        <div @click="goText(index, 'interview')">Співбесіда</div>
      </div>
    </div>
  </section>
</template>

<script>
    export default {
        name: "index",
        data() {
            return {
            }
        },
        computed: {
            post() {
                return this.$store.getters.post
            }
        },
        methods: {
            goText(index, type) {
                this.$router.push({
                    path: 'post/conversation',
                    query: {
                        id: index,
                        type: type
                    }
                });
            }
        }
    }
</script>

<style scoped>

</style>
