<template>
  <section class="home">
    <b-container>
      <b-row>
        <b-col>
          <nav-button />
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <div class="home__label">Open vacancies</div>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="6"
               v-for="(elem, index) in vacancies"
               :key="index">
          <div class="home__elem">
            <div class="home__elem-label">{{elem.label}}</div>
            <div class="home__elem-button-wrap">
              <a :href="`/post/conversation?id=${elem.id}&type=call`"
                  class="home__elem-button call">
                <img src="/call.png">CALL
              </a>
              <a :href="`/post/conversation?id=${elem.id}&type=interview`"
                  class="home__elem-button interview">
                <img src="/interview.png">Interview
              </a>
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
  import navButton from '../../components/navButton'
  import axios from 'axios'

  export default {
    name: "index",
    components: {navButton},
    async asyncData(param) {
      let vacancies = await axiosWrap(axios, param, {
        method: 'get',
        url: `${param.store.state.url}/vacancies`,
        data: null
      })

      return {
        vacancies: vacancies.data
      }
    },
    data() {
      return {

      }
    },
    computed: {

    },
    methods: {
      goText(id, type) {
        this.$router.push({
          path: '/post/conversation',
          query: {
            id: id,
            type: type
          }
        });
      }
    }
  }
</script>

<style lang="scss" scoped>
  .home {
    min-height: 100vh;
    background: linear-gradient(125.42deg, #FFFFFF 0%, #DADADA 100%);
    padding: {
      top: 115px;
    }

    &__label {
      padding: 19px 0;
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

    &__elem {
      background: #F4F4F4;
      box-shadow: 7px 7px 40px rgba(0, 0, 0, 0.2), -7px -7px 40px rgba(255, 255, 255, 0.35), inset 4px 4px 20px rgba(255, 255, 255, 0.25);
      border-radius: 10px;
      margin: 30px 0;
      padding: 20px;

      &-label {
        font-family: 'Roboto', sans-serif;
        font-style: normal;
        font-weight: bold;
        font-size: 24px;
        letter-spacing: 0.02em;
        color: #4F4F4F;
      }

      &-button {
        min-width: 120px;
        margin-right: 15px;
        padding: 5px 10px;
        color: #FFF;
        font-family: 'Roboto', sans-serif;
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        line-height: 42px;
        border-radius: 10px;
        cursor: pointer;

        img {
          margin-right: 5px;
        }

        &.call {
          background: #2D9CDB;
        }

        &.interview {
          background: #27AE60;
        }

        &-wrap {
          display: flex;
          margin: 10px 0;
        }
      }
    }
  }
</style>
