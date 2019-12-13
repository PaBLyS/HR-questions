<template>
  <section>
    <form action="">
      <input v-model="login" type="text">
      <input v-model="password" type="text">
      <button @click="signIn">Вход</button>
    </form>
  </section>
</template>

<script>

    export default {
        components: {},
        data() {
            return {
                login: '',
                password: ''
            }
        },
        methods: {
            signIn(e) {
                e.preventDefault();
                if (this.login === 'admin' && this.password === 'qwerty') {
                    this.$router.push({path: '/post'});
                }
            }
        }
    }
</script>

<style lang="scss">

</style>
