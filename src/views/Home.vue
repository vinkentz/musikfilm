<template>
  <div class="container">

    <br>

    <h1 class="text-center">Lagu Tradisional & Film Indonesia</h1>

    <br><br><br><br>

    <!-- <div class="row justify-content-center">
      <div class="col-12 col-md-10 col-lg-8">
        <form class="card card-sm">
          <div class="card-body row no-gutters align-items-center">
            <div class="col-auto">
              <i class="fas fa-search h4 text-body"></i>
            </div>
            <div class="col">
              <input class="form-control form-control-lg form-control-borderless" type="search" placeholder="pencarian berdasarkan judul atau nama orang">
            </div>
            <div class="col-auto">
              <button class="btn btn-lg btn-success" type="submit">Search</button>
            </div>
          </div>
        </form>
      </div>
    </div> -->

    <br>

    <hr>

    <div class="">
      <h4>Lagu Tradisional</h4>
      <span v-for="(i, index) in dbpedia_musik" :key="index">
        <p v-if="i.comment" v-html="i.comment.value"></p>
        <p v-if="i.link"><strong>Sumber: </strong> <a :href="i.link.value">{{i.link.value}}</a></p>
      </span>
    </div>

    <hr>

    <div class="">
      <h4>Film</h4>
      <span v-for="(i, index) in dbpedia_film" :key="index">
        <p v-if="i.comment" v-html="i.comment.value"></p>
        <p><strong>Sumber: </strong> <a :href="i.link.value">{{i.link.value}}</a></p>
      </span>
    </div>

  </div>
</template>

<script>
import { mapState, mapActions } from "vuex"

export default {
  data(){
    return{
      searchText: null,
    }
  },
  mounted() {
    this.$store.dispatch('dbpediaMusik')
    this.$store.dispatch('dbpediaFilm')
  },
  computed: {
    ...mapState([
      'dbpedia_musik',
      'dbpedia_film',
    ])
  },
  methods: {
    ...mapActions([

    ]),
    submitSearch() {
      // console.log(this.searchText)
      // this.$router.push("/search/"+this.searchText)
    },
  },
}
</script>

<style scoped>
.form-control-borderless {
  border: none;
}

.form-control-borderless:hover, .form-control-borderless:active, .form-control-borderless:focus {
  border: none;
  outline: none;
  box-shadow: none;
}
</style>
