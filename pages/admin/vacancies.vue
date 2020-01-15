<template>
  <section class="admin-vacancies">
    <b-container>
      <arrow url="/admin" />
      <b-row>
        <b-col cols="12" class="admin-vacancies__label">
          All vacancies
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="6"
               v-for="(elem, index) in vacancies"
               :key="`${elem.label}-${index}`">

          <div class="admin-vacancies__wrap">
            <a :href="`/admin/vacancies-edit?id=${elem.id}`">
              <div>{{elem.label}}</div>
            </a>
            <b-button-group>
              <b-button variant="danger" @click="deleteVacancies(elem.id)">Delete</b-button>
            </b-button-group>
          </div>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <b-button-group>
            <b-button variant="success" @click="addVacancies()">Add</b-button>
          </b-button-group>
        </b-col>
      </b-row>

    </b-container>
  </section>
</template>

<script>
  import arrow from "../../components/arrow";
  import axios from 'axios';

  export default {
    name: "vacancies",
    middleware: 'adminaccess',
    components: {arrow},
    async asyncData(param) {
      const vacancies = await axiosWrap(axios, param, {
        method: 'get',
        url: `${param.store.state.url}/vacancies`,
        data: null
      })

      return {
        vacancies: vacancies.data,
      }
    },
    computed: {

    },
    methods: {
      addVacancies() {
        let obj = {
          id: this.lastId(),
          label: 'New Vacancies',
          callContent: ['Text', 'Text'],
          callQuestion: [],
          interviewContent: ['Text', 'Text'],
          interviewQuestion: []
        };
        axiosWrap(axios, this, {
          method: 'post',
          url: `${this.$store.state.url}/vacancies/`,
          data: obj
        })
          .then(() => console.log('good add vacacntions'))
          .catch(err => console.error(err));
        location.reload()
      },
      deleteVacancies(id) {
        axiosWrap(axios, this, {
          method: 'delete',
          url: `${this.$store.state.url}/vacancies/${id}`,
          data: null
        })
          .then(() => console.log('vacancies delete'))
          .catch(err => console.error(err));
        location.reload()
      },
      lastId() {
        let maxId = 0;

        this.vacancies.forEach((elem) => {
          if (elem.id > maxId) {
            maxId = elem.id;
          }
        });

        return maxId + 1;
      }
    }
  }
</script>

<style lang="scss" scoped>
  .admin-vacancies {
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

    &__wrap {
      display: flex;
      align-items: center;
      justify-content: space-between;
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
    }
  }
</style>
