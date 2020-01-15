<template>
  <div class="edit-userOne__add-wrap">
    <div class="edit-userOne__add">
      <div class="edit-userOne__add-input">
        <span>Login</span>
        <input type="text" v-model="name">
      </div>
      <div class="edit-userOne__add-input">
        <span>Password</span>
        <input type="text" v-model="password">
      </div>
    </div>
    <div class="edit-userOne__btn-wrap">
      <b-button-group>
        <b-button variant="danger" @click="deleteUser()">Delete</b-button>
        <b-button variant="success" @click="saveUser()">Save</b-button>
      </b-button-group>
      <div>
        <input type="checkbox" id="admin" v-model="access">
        <label for="admin">Admin</label>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    props: {
      obj: Object
    },
    data() {
      return {
        name: this.obj.name,
        password: '',
        access: this.obj.access
      }
    },
    methods: {
      saveUser() {
        axiosWrap(axios, this, {
          method: 'put',
          url: `${this.$store.state.url}/user/${this.obj._id}`,
          data: {
            name: this.name,
            password: this.password,
            access: this.access
          }
        })
          .then(() => console.log('good edit'))
          .catch(err => console.error(err));
        location.reload()
      },
      deleteUser() {
        axiosWrap(axios, this, {
          method: 'delete',
          url: `${this.$store.state.url}/user/${this.obj._id}`,
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
.edit-userOne {

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