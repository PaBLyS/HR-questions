<template>
  <section class="vacancies-edit">

    <loader v-if="status"/>
    <b-container>
      <b-row>
        <b-col cols="1">
          <nuxt-link to="/admin/vacancies" class="arrow">
            <img src="/arrow.png">
            <span class="arrow__text">BACK</span>
          </nuxt-link>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="12" class="vacancies-edit__label">
          <input type="text">
          <b-button-group>
            <b-button variant="success" @click="editUpload()">Save</b-button>
            <b-button variant="danger" @click="deleteUpload()">Delete</b-button>
          </b-button-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="6">
          Call
        </b-col>
        <b-col cols="6">
          Interview
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
    import loader from "../../components/loader";

    export default {
        name: "questions-edit",
        components: {loader},
        data() {
            return {}
        },
        computed: {
            status() {
                return false;
            }
        }
    }
</script>

<style lang="scss" scoped>
  .arrow {
    margin: 40px 0;
    display: flex;
    align-items: center;

    &__text {
      font-family: 'Roboto', sans-serif;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      letter-spacing: 0.02em;
      color: #828282;
      margin-left: 10px;

      &:hover {
        text-decoration: none;
      }
    }
  }

  .vacancies-edit {
    min-height: 100vh;
    background: linear-gradient(125.42deg, #FFFFFF 0%, #DADADA 100%);

    &__label {
      padding: 20px;
      margin-bottom: 30px;
      font-family: 'Roboto', sans-serif;
      font-style: normal;
      font-weight: 500;
      font-size: 26px;
      line-height: 42px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      text-indent: 20px;
      color: #4F4F4F;
      background: #F4F4F4;
      box-shadow: 7px 7px 40px rgba(0, 0, 0, 0.2), -7px -7px 40px rgba(255, 255, 255, 0.35), inset 4px 4px 20px rgba(255, 255, 255, 0.25);
      border-radius: 10px;

      input {
        width: 80%;
      }
    }
  }
</style>
