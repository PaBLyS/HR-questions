<template>
  <section class="admin">
    <b-container>
      <b-row>
        <b-col>
          <nav-button />
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="12">
          <nuxt-link to="/admin/questions" class="admin__link">
            <div class="admin__row">
              Questions
            </div>
          </nuxt-link>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="12">
          <nuxt-link to="/admin/vacancies" class="admin__link">
            <div class="admin__row">
              Vacancies
            </div>
          </nuxt-link>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="12">
          <nuxt-link to="/admin/user" class="admin__link">
            <div class="admin__row">
              User
            </div>
          </nuxt-link>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
  import navButton from '../../components/navButton'

  export default {
    middleware: 'adminaccess',
    name: "index",
    components: {navButton}
  }
</script>

<style lang="scss" scoped>
  .admin {
    min-height: 100vh;
    background: linear-gradient(125.42deg, #FFFFFF 0%, #DADADA 100%);
    padding: {
      top: 115px;
    }

    &__link {
      &:hover {
        text-decoration: none;
      }
    }

    &__row {
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
      cursor: pointer;
    }
  }
</style>
