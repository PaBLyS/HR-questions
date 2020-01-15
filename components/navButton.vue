<template>
  <div class="navwrap">
    <b-button-group>
      <b-button variant="success" v-if="visibleAdmin" @click="goPanel('/post')">Vacancies list</b-button>
      <b-button variant="success" v-if="visibleList" @click="goPanel('/admin')">Admin panel</b-button>
      <b-button variant="warning" @click="logout()">Log Out</b-button>
    </b-button-group>
  </div>
</template>

<script>
  export default {
    name: 'navButton',
    computed: {
      visibleAdmin() {
        return this.$router.currentRoute.path.includes('admin') && this.admin
      },
      visibleList() {
        return this.$router.currentRoute.path.includes('post') && this.admin
      },
      admin() {
        return getStorage('access');
      }
    },
    methods: {
      logout() {
        setStorage('token' , null)
        setStorage('refreshToken' , null)
        setStorage('access' , null)
        this.$router.push('/')
      },
      goPanel(url) {
        this.$router.push(url)
      }
    }    
  }
</script>

<style lang="scss" scoped>
.navwrap {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-bottom: 20px;
}
</style>