<template>
  <section class="index">
    <form class="index__form">
      <span class="index__form-label">Login</span>
      <input v-model="login"
             type="text"
             class="index__form-input"
             placeholder="Login">
      <input v-model="password"
             type="password"
             class="index__form-input"
             placeholder="Password">
      <div class="index__form-button"
           @click="signIn">
        Login
      </div>
    </form>
  </section>
</template>

<script>
    export default {
        data() {
            return {
                login: '',
                password: ''
            }
        },
        methods: {
            signIn() {
                this.users.forEach((elem) => {
                    if (this.login === elem.login && this.password === elem.password) {
                        this.$router.push({path: '/post'});
                    }
                });
            }
        },
        computed: {
            users() {
                return this.$store.getters.user
            }
        }
    }
</script>

<style lang="scss">
  .index {
    min-height: 100vh;
    min-width: 100%;
    background: linear-gradient(125.42deg, #FFFFFF 0%, #DADADA 100%);
    display: flex;
    align-items: center;
    justify-content: center;

    &__form {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 555px;
      height: 470px;
      background: #F4F4F4;
      box-shadow: 7px 7px 40px rgba(0, 0, 0, 0.2), -7px -7px 40px rgba(255, 255, 255, 0.35), inset 4px 4px 20px rgba(255, 255, 255, 0.25);
      border-radius: 30px;
      padding: 65px 30px;

      &-label {
        font-family: 'Roboto', sans-serif;
        font-style: normal;
        font-weight: 500;
        font-size: 36px;
        line-height: 42px;
        display: flex;
        color: #4F4F4F;
        align-self: flex-start;
      }

      &-input {
        border: 1px solid #BDBDBD;
        border-radius: 10px;
        background: transparent;
        padding: 22px 10px;
        font-family: 'Roboto', sans-serif;
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 16px;
        outline: none;
      }

      &-button {
        display: inline-block;
        padding: 14px 51px;
        align-self: flex-end;
        background: #27AE60;
        border-radius: 10px;
        font-family: 'Roboto', sans-serif;
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 16px;
        color: #F2F2F2;
        cursor: pointer;
      }
    }
  }
</style>
