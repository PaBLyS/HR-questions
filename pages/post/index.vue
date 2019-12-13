<template>
  <section class="home">
    <b-container>
      <b-row>
        <b-col cols="12">
          <div class="home__label">Открытые вакансии</div>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="6"
               v-for="(elem, index) in post">
          <div class="home__elem">
            <div class="home__elem-label">{{elem.label}}</div>
            <div class="home__elem-button-wrap">
              <div @click="goText(index, 'talk')"
                   class="home__elem-button call">
                <img src="call.png">CALL
              </div>
              <div @click="goText(index, 'interview')"
                   class="home__elem-button interview">
                <img src="interview.png">Interview
              </div>
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
    export default {
        name: "index",
        data() {
            return {}
        },
        computed: {
            post() {
                return this.$store.getters.post
            }
        },
        methods: {
            goText(index, type) {
                this.$router.push({
                    path: 'post/conversation',
                    query: {
                        id: index,
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
      margin: 60px 0;
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
