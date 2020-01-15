<template>
  <section class="edit-user">
    <b-container>
      <arrow url="/admin" />
      <b-row>
        <b-col cols="12" class="edit-user__label">
          All user
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="12">
          <div class="edit-user__add-wrap">
            <div class="edit-user__add">
              <div class="edit-user__add-input">
                <span>Login</span>
                <input type="text" v-model="name">
              </div>
              <div class="edit-user__add-input">
                <span>Password</span>
                <input type="text" v-model="password">
              </div>
            </div>
            <div class="edit-user__btn-wrap">
              <b-button variant="success" @click="addUser()">Add</b-button>
              <div>
                <input type="checkbox" id="admin" v-model="access">
                <label for="admin">Admin</label>
              </div>
            </div>
          </div>
        </b-col>
        <b-col cols="12" v-for="(elem, index) in users" :key="index">
          <user-edit :obj="elem"/>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
  import arrow from "../../components/arrow";
  import userEdit from "../../components/userEdit"
  import axios from 'axios';

  export default {
    name: 'user',
    middleware: 'adminaccess',
    components: {arrow, userEdit},
    async asyncData(param) {
      const users = await axiosWrap(axios, param, {
        method: 'get',
        url: `${param.store.state.url}/user`,
        data: null
      })
      return {
        users: users.data
      }
    },
    data() {
      return {
        name: '',
        password: '',
        access: false
      }
    },
    methods: {
      addUser() {
        axiosWrap(axios, this, {
          method: 'post',
          url: `${this.$store.state.url}/user`,
          data: {
            name: this.name,
            password: this.password,
            access: this.access
          }
        })
          .then(() => console.log('good add'))
          .catch(err => console.error(err));
        location.reload()
      }
    }       
  }
</script>

<style lang="scss" scoped>
.edit-user {
  min-height: 100vh;
  background: linear-gradient(125.42deg, #FFFFFF 0%, #DADADA 100%);

  &__label {
    padding: 19px 0;
    margin-bottom: 30px;
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 36px;
    line-height: 42px;
    display: flex;
    align-items: center;
    text-indent: 20px;
    color: #4F4F4F;
    background: #F4F4F4;
    box-shadow: 7px 7px 40px rgba(0, 0, 0, 0.2), -7px -7px 40px rgba(255, 255, 255, 0.35), inset 4px 4px 20px rgba(255, 255, 255, 0.25);
    border-radius: 10px;
  }

  &__add {
    width: 60%;

    &-wrap {
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
      display: flex;
      justify-content: space-between;
    }

    &-input {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 10px;

      span {
        margin-right: 10px;
      }

      input {
        width: 80%
      }
    }
  }

  &__btn {

    &-wrap {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-end;
    }
  }
}
</style>