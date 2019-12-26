<template>
  <section class="admin-vacancies">

    <loader v-if="status"/>

    <b-container v-else>
      <b-row>
        <b-col cols="1">
          <nuxt-link to="/admin" class="arrow">
            <img src="/arrow.png">
            <span class="arrow__text">BACK</span>
          </nuxt-link>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="12" class="admin-vacancies__label">
          All vacancies
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="6" v-for="(elem, index) in vacanciesList" :key="`${elem.label}-${index}`">
          <nuxt-link :to="`/admin/vacancies-edit?id=${index}`">
            <div class="admin-vacancies__wrap">
              {{elem.label}}
            </div>
          </nuxt-link>
        </b-col>
      </b-row>
    </b-container>

  </section>
</template>

<script>

    import loader from "../../components/loader";

    export default {
        name: "vacancies",
        components: {loader},
        beforeCreate() {
            this.$store.dispatch('fetchVacancies');
        },
        computed: {
            vacanciesList() {
                return [...this.$store.getters.vacancies]
            },
            status() {
                return this.vacanciesList.length === undefined;
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
      cursor: pointer;
    }

  }
</style>
